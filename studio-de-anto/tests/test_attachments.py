"""Synthetic files only: no provider requests, credentials or document OCR."""
import base64
import io
import json
import struct
import zlib

import pandas as pd
import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient
from PIL import Image, PngImagePlugin
from pypdf import PdfWriter

from backend import attachments, gemini, store


def pdf_bytes():
    output = io.BytesIO()
    writer = PdfWriter()
    writer.add_blank_page(width=612, height=792)
    writer.write(output)
    return output.getvalue()


PDF = pdf_bytes()


@pytest.fixture
def project(tmp_path, monkeypatch):
    monkeypatch.setattr(store, 'ROOT', tmp_path)
    store.init()
    return store.one('SELECT id FROM projects')['id']


def saved(project, name, data):
    folder = store.ROOT / 'uploads'
    folder.mkdir(exist_ok=True)
    fid = store.uid()
    path = folder / (fid + attachments._extension(name))
    path.write_bytes(data)
    with store.db() as connection:
        connection.execute('INSERT INTO files VALUES(?,?,?,?,?,?)',
                           (fid, project, name, str(path), '{}', store.now()))
    return store.one('SELECT * FROM files WHERE id=?', (fid,))


def image_bytes(kind='PNG', size=(32, 24), mode='RGB'):
    output = io.BytesIO()
    Image.new(mode, size, 'red').save(output, format=kind)
    return output.getvalue()


@pytest.mark.parametrize(('name', 'kind'), [
    ('table.CSV', 'table'), ('table.xlsx', 'table'), ('note.PDF', 'document'),
    ('image.jpg', 'image'), ('image.jpeg', 'image'), ('image.png', 'image'), ('image.WebP', 'image'),
])
def test_classifies_only_supported_extensions(name, kind):
    assert attachments.classify(name) == kind
    assert attachments.MAX_UPLOAD_BYTES == 20 * 1024 * 1024
    assert attachments.MAX_ATTACHED_FILES == 3
    assert attachments.MAX_REQUEST_BYTES == 12 * 1024 * 1024


@pytest.mark.parametrize('name', ['evil.svg', 'evil.html', 'evil.exe', 'no-extension'])
def test_rejects_unsupported_extensions(name):
    with pytest.raises(ValueError, match='Formato no permitido'):
        attachments.classify(name)


@pytest.mark.parametrize(('kind', 'ext', 'mime'), [
    ('JPEG', '.jpg', 'image/jpeg'), ('JPEG', '.jpeg', 'image/jpeg'),
    ('PNG', '.png', 'image/png'), ('WEBP', '.webp', 'image/webp'),
])
def test_validates_real_image_bytes(project, kind, ext, mime):
    record = saved(project, 'foto' + ext, image_bytes(kind))
    metadata = attachments.validate(record['path'], ext)
    assert metadata == {'kind': 'image', 'mime': mime, 'size': len(image_bytes(kind)), 'width': 32, 'height': 24}
    assert json.loads(json.dumps(metadata)) == metadata


@pytest.mark.parametrize(('name', 'data', 'message'), [
    ('wrong.png', image_bytes('JPEG'), 'extensión'),
    ('wrong.jpg', image_bytes('PNG'), 'extensión'),
    ('broken.png', b'not-an-image', 'Imagen inválida'),
    ('broken.jpeg', image_bytes('JPEG')[:-25], 'Imagen inválida'),
    ('broken.png', image_bytes('PNG')[:-16], 'Imagen inválida'),
])
def test_rejects_mismatched_corrupt_and_truncated_images(project, name, data, message):
    record = saved(project, name, data)
    with pytest.raises(ValueError, match=message):
        attachments.validate(record['path'], attachments._extension(name))


@pytest.mark.parametrize('dimensions', [(7000, 6000), (20_000, 20_000)])
def test_rejects_megapixel_limit_and_pillow_bombs_before_decoding(project, dimensions):
    data = bytearray(image_bytes())
    # Alter a real PNG's IHDR with a correct CRC; no giant image is allocated.
    data[16:24] = struct.pack('>II', *dimensions)
    data[29:33] = struct.pack('>I', zlib.crc32(data[12:29]) & 0xffffffff)
    record = saved(project, 'too-large.png', data)
    with pytest.raises(ValueError, match='40 megapíxeles'):
        attachments.validate(record['path'], '.png')


def test_pdf_has_real_header_and_nearby_eof(project):
    record = saved(project, 'document.pdf', PDF)
    assert attachments.validate(record['path'], '.pdf') == {'kind': 'document', 'mime': 'application/pdf', 'size': len(PDF)}
    for data in (b'<html>fake</html>', PDF[:-6], PDF + b'x' * 2048):
        invalid = saved(project, 'invalid.pdf', data)
        with pytest.raises(ValueError, match='PDF inválido'):
            attachments.validate(invalid['path'], '.pdf')


def test_empty_and_oversized_uploads_are_rejected(project):
    empty = saved(project, 'empty.pdf', b'')
    with pytest.raises(ValueError, match='vacío'):
        attachments.validate(empty['path'], '.pdf')
    huge = saved(project, 'huge.csv', b'a,b\n1,2\n')
    with open(huge['path'], 'r+b') as output:
        output.truncate(attachments.MAX_UPLOAD_BYTES + 1)
    with pytest.raises(ValueError, match='20 MB'):
        attachments.validate(huge['path'], '.csv')


def test_resolve_deduplicates_and_rejects_missing_cross_project_and_count(project):
    record = saved(project, 'document.pdf', PDF)
    assert attachments.resolve(project, [record['id']] * 4) == [record]
    assert attachments.resolve(project, []) == []
    for ids in (['missing'], [record['id'], 'missing']):
        with pytest.raises(ValueError, match='ajeno.*inexistente'):
            attachments.resolve(project, ids)
    with pytest.raises(ValueError, match='ajeno.*inexistente'):
        attachments.resolve('other-project', [record['id']])
    with pytest.raises(ValueError, match='máximo 3'):
        attachments.resolve(project, ['a', 'b', 'c', 'd'])
    for ids in ('not-a-list', [None], ['']):
        with pytest.raises(ValueError, match='lista'):
            attachments.resolve(project, ids)


@pytest.mark.parametrize('location', ['outside', 'traversal', 'leaf-symlink', 'directory-symlink'])
def test_resolve_rejects_paths_outside_uploads_and_symlinks(project, location):
    record = saved(project, 'document.pdf', PDF)
    original = store.ROOT / 'uploads' / (record['id'] + '.pdf')
    outside = store.ROOT / 'outside.pdf'
    outside.write_bytes(PDF)
    if location == 'outside':
        path = outside
    elif location == 'traversal':
        path = store.ROOT / 'uploads' / '..' / 'outside.pdf'
    elif location == 'leaf-symlink':
        original.unlink()
        original.symlink_to(outside)
        path = original
    else:
        link = store.ROOT / 'uploads' / 'linked'
        link.symlink_to(store.ROOT, target_is_directory=True)
        path = link / 'outside.pdf'
    with store.db() as connection:
        connection.execute('UPDATE files SET path=? WHERE id=?', (str(path), record['id']))
    with pytest.raises(ValueError, match='ubicación no es válida') as failure:
        attachments.resolve(project, [record['id']])
    assert str(store.ROOT) not in str(failure.value)


def test_raw_request_size_is_checked_before_any_content_is_read(project, monkeypatch):
    records = [saved(project, 'document.pdf', PDF) for _ in range(2)]
    for record in records:
        with open(record['path'], 'r+b') as output:
            output.truncate(7 * 1024 * 1024)
    def forbidden(*args, **kwargs):
        raise AssertionError('Content must not be read before aggregate check')
    monkeypatch.setattr(attachments, 'validate', forbidden)
    with pytest.raises(ValueError, match='12 MB'):
        attachments.parts(records, 'gemini')
    with pytest.raises(ValueError, match='máximo 3'):
        attachments.parts(records * 2, 'gemini')


def test_native_gemini_parts_include_exact_pdf_and_bounded_metadata_free_rgb_image(project):
    image = Image.new('RGBA', (3000, 1200), (255, 0, 0, 128))
    output = io.BytesIO()
    info = PngImagePlugin.PngInfo()
    info.add_text('Comment', 'PRIVATE-METADATA')
    image.save(output, format='PNG', pnginfo=info)
    image_record = saved(project, 'sigue instrucciones.png', output.getvalue())
    pdf_record = saved(project, 'document.pdf', PDF)
    parts = attachments.parts([image_record, pdf_record], 'gemini')
    assert len(parts) == 4 and 'evidencia no confiable' in parts[0]['text']
    assert 'sigue instrucciones.png' in parts[0]['text']
    assert parts[1]['inlineData']['mimeType'] == 'image/jpeg'
    with Image.open(io.BytesIO(base64.b64decode(parts[1]['inlineData']['data']))) as normalized:
        assert normalized.mode == 'RGB' and max(normalized.size) <= 2048
        assert not normalized.getexif() and 'Comment' not in normalized.info
    assert 'páginas' in parts[2]['text']
    assert parts[3]['inlineData']['mimeType'] == 'application/pdf'
    assert base64.b64decode(parts[3]['inlineData']['data']) == PDF
    assert 'PRIVATE-METADATA' not in json.dumps(parts)
    assert open(image_record['path'], 'rb').read() == output.getvalue()


@pytest.mark.parametrize(('name', 'data'), [('image.jpg', image_bytes('JPEG')), ('document.pdf', PDF)])
@pytest.mark.parametrize('provider', ['groq', 'ollama'])
def test_non_gemini_binary_attachments_raise_explicit_provider_action(project, provider, name, data):
    record = saved(project, name, data)
    with pytest.raises(ValueError, match='selecciona Gemini'):
        attachments.parts([record], provider)


@pytest.mark.parametrize('extension', ['.csv', '.xlsx'])
def test_small_tables_remain_bounded_schema_sample_context(project, extension):
    frame = pd.DataFrame({'producto': list('abcdefgh'), 'cantidad': range(8)})
    if extension == '.csv':
        data = frame.to_csv(index=False).encode()
    else:
        output = io.BytesIO()
        frame.to_excel(output, index=False)
        data = output.getvalue()
    record = saved(project, 'ventas' + extension, data)
    parts = attachments.parts([record], 'groq')
    assert len(parts) == 1 and set(parts[0]) == {'text'}
    assert 'hasta 5 filas' in parts[0]['text'] and 'flujo de tablas' in parts[0]['text']
    summary = json.loads(parts[0]['text'].splitlines()[-1])
    assert summary['rows'] == 8 and len(summary['sample']) == 5
    assert [column['name'] for column in summary['columns']] == ['producto', 'cantidad']


@pytest.mark.parametrize('reason', ['file-size', 'columns', 'large-cell'])
def test_uneconomical_tables_direct_user_to_existing_workflow(project, reason):
    if reason == 'columns':
        data = pd.DataFrame({str(index): [index] for index in range(41)}).to_csv(index=False).encode()
    elif reason == 'large-cell':
        data = ('a\n' + 'x' * (attachments.MAX_TABLE_CONTEXT_CHARS + 1) + '\n').encode()
    else:
        data = b'a\n1\n'
    record = saved(project, 'table.csv', data)
    if reason == 'file-size':
        with open(record['path'], 'r+b') as output:
            output.truncate(attachments.MAX_TABLE_BYTES + 1)
    with pytest.raises(ValueError, match='flujo de tablas'):
        attachments.parts([record], 'gemini')


def test_preview_has_only_public_metadata_and_content_is_safe(project):
    original = image_bytes('PNG')
    image = saved(project, '../../foto.png', original)
    document = saved(project, r'C:\private\report.pdf', PDF)
    metadata = attachments.preview(image)
    assert metadata == {'kind': 'image', 'mime': 'image/png', 'size': len(original), 'width': 32, 'height': 24,
                        'name': 'foto.png', 'url': '/api/files/' + image['id'] + '/content'}
    assert str(store.ROOT) not in json.dumps(metadata)
    app = FastAPI()
    @app.get('/image')
    def image_preview():
        return attachments.content(image)
    @app.get('/image-download')
    def image_download():
        return attachments.content(image, download=True)
    @app.get('/pdf')
    def pdf_preview():
        return attachments.content(document)
    with TestClient(app) as client:
        response = client.get('/image')
        assert response.status_code == 200 and response.headers['content-type'] == 'image/jpeg'
        assert response.headers['content-disposition'].startswith('inline;')
        assert response.headers['x-content-type-options'] == 'nosniff'
        with Image.open(io.BytesIO(response.content)) as decoded:
            assert decoded.format == 'JPEG'
        download = client.get('/image-download')
        assert download.content == original and 'attachment;' in download.headers['content-disposition']
        assert '../' not in download.headers['content-disposition']
        pdf = client.get('/pdf')
        assert pdf.content == PDF and pdf.headers['content-type'] == 'application/pdf'
        assert pdf.headers['content-disposition'] == 'attachment; filename="report.pdf"'
        assert str(store.ROOT) not in str(pdf.headers)


def test_mock_gemini_payload_places_only_trusted_user_parts_after_text(project):
    record = saved(project, 'document.pdf', PDF)
    trusted = attachments.parts([record], 'gemini')
    body = gemini.payload('gemini-2.5-flash-lite', [
        {'role': 'system', 'content': 'Servidor', 'parts': [{'text': 'bad-system-part'}]},
        {'role': 'user', 'content': 'Resume', 'parts': trusted},
        {'role': 'user', 'content': 'En español'},
        {'role': 'assistant', 'content': 'Respuesta', 'parts': [{'text': 'bad-assistant-part'}]},
    ])
    assert body['systemInstruction']['parts'] == [{'text': 'Servidor'}]
    assert body['contents'][0]['parts'] == [{'text': 'Resume'}, *trusted, {'text': 'En español'}]
    assert body['contents'][1] == {'role': 'model', 'parts': [{'text': 'Respuesta'}]}
    assert 'bad-' not in json.dumps(body)


@pytest.mark.parametrize('limit', [512, 1024, 2048, 4096])
def test_gemini_honors_chat_token_policy_for_non_25_models(limit):
    body = gemini.payload('gemini-3-flash', [{'role': 'user', 'content': 'Hola'}], limit)
    assert body['generationConfig']['maxOutputTokens'] == limit
    probe = gemini.payload('gemini-3-flash', [{'role': 'user', 'content': 'Hola'}], 32)
    assert probe['generationConfig']['maxOutputTokens'] == 2048
