"""Synthetic PDF structures only: no rendering, OCR or provider requests."""
import io
import time

import pytest
from fastapi.testclient import TestClient
from pypdf import PdfWriter
from pypdf.generic import ArrayObject, DictionaryObject, EncodedStreamObject, NameObject, NumberObject

from backend import attachments, models, pdf_validation, store
from backend.app import app


UNBOUNDED_XREF = (b'%PDF-1.5\n1 0 obj\n'
                  b'<< /Type /XRef /Size 1000000000 /W [0 0 0] /Root 2 0 R /Length 0 >>\n'
                  b'stream\n\nendstream\nendobj\nstartxref\n9\n%%EOF\n')


def document(pages=1, mutate=None, password=None):
    writer = PdfWriter()
    for _ in range(pages):
        writer.add_blank_page(width=612, height=792)
    if mutate:
        mutate(writer)
    if password is not None:
        # RC4 works without optional cryptography dependencies. This fixture
        # only tests the application's refusal to accept encrypted originals.
        writer.encrypt(password, algorithm='RC4-128')
    output = io.BytesIO()
    writer.write(output)
    return output.getvalue()


def validate(tmp_path, data):
    path = tmp_path / 'document.pdf'
    path.write_bytes(data)
    return attachments.validate(path, '.pdf')


def test_accepts_valid_multipage_pdf_and_preserves_original_bytes(tmp_path):
    original = document(pages=3)
    assert validate(tmp_path, original) == {
        'kind': 'document', 'mime': 'application/pdf', 'size': len(original),
    }
    assert (tmp_path / 'document.pdf').read_bytes() == original


@pytest.mark.parametrize('data', [
    b'%PDF-1.4\nthis is not a PDF document\n%%EOF\n',
    b'%PDF-1.4\n1 0 obj << /Type /Catalog >> endobj\ntrailer << /Root 1 0 R >>\n%%EOF\n',
    document()[:-40] + b'\n%%EOF\n',
    document().rsplit(b'startxref\n', 1)[0] + b'startxref\n1\n%%EOF\n',
])
def test_rejects_forged_truncated_and_broken_cross_reference_pdfs(tmp_path, data):
    # All of these satisfy the old %PDF / %%EOF marker check.
    assert data.startswith(b'%PDF-') and b'%%EOF' in data[-1024:]
    with pytest.raises(ValueError, match='PDF inválido'):
        validate(tmp_path, data)


@pytest.mark.parametrize('password', ['secret', ''])
def test_encrypted_pdf_requires_explicit_unprotected_export(tmp_path, password):
    with pytest.raises(ValueError, match='protegido o cifrado.*sin contraseña'):
        validate(tmp_path, document(password=password))


def test_rejects_inconsistent_page_count(tmp_path):
    def wrong_count(writer):
        writer._pages.get_object()[NameObject('/Count')] = NumberObject(2)
    with pytest.raises(ValueError, match='PDF inválido'):
        validate(tmp_path, document(mutate=wrong_count))


def test_rejects_cycle_in_page_tree(tmp_path):
    def cycle(writer):
        writer._pages.get_object()[NameObject('/Kids')] = ArrayObject([writer._pages])
    with pytest.raises(ValueError, match='PDF inválido'):
        validate(tmp_path, document(mutate=cycle))


def test_rejects_duplicated_page_reference(tmp_path):
    def duplicate(writer):
        pages = writer._pages.get_object()
        pages['/Kids'].append(pages['/Kids'][0])
        pages[NameObject('/Count')] = NumberObject(2)
    with pytest.raises(ValueError, match='PDF inválido'):
        validate(tmp_path, document(mutate=duplicate))


def test_respects_inherited_page_dimensions(tmp_path):
    def inherited(writer):
        writer._pages.get_object()[NameObject('/MediaBox')] = writer.pages[0].pop('/MediaBox')
    validate(tmp_path, document(mutate=inherited))


def test_rejects_page_without_any_inherited_dimensions(tmp_path):
    def missing_box(writer):
        writer.pages[0].pop('/MediaBox')
    with pytest.raises(ValueError, match='PDF inválido'):
        validate(tmp_path, document(mutate=missing_box))


def test_page_count_limit_is_checked_before_flattening(tmp_path, monkeypatch):
    monkeypatch.setattr(attachments, 'MAX_PDF_PAGES', 2)
    with pytest.raises(ValueError, match='páginas.*Divídelo'):
        validate(tmp_path, document(pages=3))


def test_excessively_deep_page_tree_is_bounded(tmp_path, monkeypatch):
    def nested(writer):
        root = writer._pages.get_object()
        child = root['/Kids'][0]
        for _ in range(3):
            node = DictionaryObject({
                NameObject('/Type'): NameObject('/Pages'),
                NameObject('/Count'): NumberObject(1),
                NameObject('/Kids'): ArrayObject([child]),
            })
            reference = writer._add_object(node)
            child.get_object()[NameObject('/Parent')] = reference
            child = reference
        root[NameObject('/Kids')] = ArrayObject([child])
        child.get_object()[NameObject('/Parent')] = writer._pages

    original = document(mutate=nested)
    validate(tmp_path, original)
    monkeypatch.setattr(attachments, 'MAX_PDF_TREE_DEPTH', 2)
    with pytest.raises(ValueError, match='estructura es demasiado compleja'):
        validate(tmp_path, original)


def test_page_tree_node_budget_is_bounded(tmp_path, monkeypatch):
    monkeypatch.setattr(attachments, 'MAX_PDF_TREE_NODES', 2)
    with pytest.raises(ValueError, match='estructura es demasiado compleja'):
        validate(tmp_path, document(pages=2))


def test_does_not_decode_page_content_streams(tmp_path, monkeypatch):
    from pypdf.generic import DecodedStreamObject

    def content(writer):
        stream = DecodedStreamObject()
        stream.set_data(b'q\nQ\n')
        writer.pages[0][NameObject('/Contents')] = writer._add_object(stream.flate_encode())

    original = document(mutate=content)

    def forbidden_decode(*args, **kwargs):
        raise AssertionError('Content streams must not be decoded by structural validation')

    monkeypatch.setattr(EncodedStreamObject, 'get_data', forbidden_decode)
    path = tmp_path / 'document.pdf'
    path.write_bytes(original)
    # Exercise the worker function directly so this instrumentation applies to
    # the parser. Production always calls it in the isolated, bounded process.
    pdf_validation.validate_pdf(path, 1000, 64, 4096, attachments.MAX_UPLOAD_BYTES)


def test_tiny_unbounded_xref_is_killed_and_next_pdf_still_validates(tmp_path, monkeypatch):
    # /W zero-width entries permit billions of iterations without more input.
    # Page-tree limits alone cannot help: PdfReader parses XRef first.
    assert len(UNBOUNDED_XREF) < 200
    processes = []
    original_popen = attachments.subprocess.Popen

    def record_process(*args, **kwargs):
        process = original_popen(*args, **kwargs)
        processes.append(process)
        return process

    monkeypatch.setattr(attachments.subprocess, 'Popen', record_process)
    started = time.monotonic()
    with monkeypatch.context() as short_deadline:
        short_deadline.setattr(attachments, 'MAX_PDF_VALIDATION_SECONDS', 0.3)
        with pytest.raises(ValueError, match='estructura es demasiado compleja'):
            validate(tmp_path, UNBOUNDED_XREF)
    assert time.monotonic() - started < 3
    assert len(processes) == 1 and processes[0].poll() is not None
    # A timed-out parser must be reaped and release its concurrency slot.
    validate(tmp_path, document())
    assert len(processes) == 2 and processes[1].poll() == 0


def test_pdf_worker_ignores_pythonpath_and_does_not_import_application_data(tmp_path, monkeypatch):
    fake = tmp_path / 'pypdf.py'
    marker = tmp_path / 'must-not-be-created'
    application_data = tmp_path / 'worker-must-not-import-store'
    fake.write_text('from pathlib import Path\nPath(' + repr(str(marker)) + ').touch()\n')
    monkeypatch.setenv('PYTHONPATH', str(tmp_path))
    monkeypatch.setenv('ANTO_DATA_DIR', str(application_data))
    validate(tmp_path, document())
    assert not marker.exists()
    assert not application_data.exists()


@pytest.mark.parametrize(('data', 'message'), [
    (b'%PDF-1.4\nnot a PDF\n%%EOF\n', 'PDF inválido'),
    (UNBOUNDED_XREF, 'estructura es demasiado compleja'),
])
def test_invalid_upload_leaves_no_record_or_original_and_never_calls_model(tmp_path, monkeypatch, data, message):
    monkeypatch.setattr(store, 'ROOT', tmp_path)
    monkeypatch.setenv('STUDIO_CLOUD_ONLY', '1')
    if data == UNBOUNDED_XREF:
        monkeypatch.setattr(attachments, 'MAX_PDF_VALIDATION_SECONDS', 0.3)

    def unexpected_provider(*args, **kwargs):
        pytest.fail('An invalid upload must never reach a model provider')

    monkeypatch.setattr(models, '_api_client', unexpected_provider)
    with TestClient(app) as client:
        project = client.get('/api/projects').json()[0]['id']
        response = client.post('/api/files', data={'project': project}, files={
            'file': ('forged.pdf', data, 'application/pdf'),
        })
        assert response.status_code == 422
        assert message in response.json()['detail']
        assert client.get('/api/files', params={'project': project}).json() == []
        assert list((tmp_path / 'uploads').iterdir()) == []
