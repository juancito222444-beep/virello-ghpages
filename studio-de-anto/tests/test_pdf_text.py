"""Selectable text from synthetic PDFs; no provider calls or owner data."""
import io
import subprocess
from pathlib import Path

import pytest
from fastapi.testclient import TestClient
from pypdf import PdfWriter
from pypdf.generic import DictionaryObject, NameObject, DecodedStreamObject
from backend import attachments, models, store
from backend.app import app


def document(texts):
    writer = PdfWriter()
    for text in texts:
        page = writer.add_blank_page(width=612, height=792)
        if text:
            font = DictionaryObject({NameObject('/Type'):NameObject('/Font'),
                                     NameObject('/Subtype'):NameObject('/Type1'),
                                     NameObject('/BaseFont'):NameObject('/Helvetica'),
                                     NameObject('/Encoding'):NameObject('/WinAnsiEncoding')})
            page[NameObject('/Resources')] = DictionaryObject({NameObject('/Font'):DictionaryObject({NameObject('/F1'):writer._add_object(font)})})
            stream = DecodedStreamObject()
            escaped = text.replace('\\','\\\\').replace('(','\\(').replace(')','\\)')
            stream.set_data(('BT /F1 12 Tf 72 720 Td ('+escaped+') Tj ET').encode('cp1252'))
            page[NameObject('/Contents')] = writer._add_object(stream)
    output = io.BytesIO();writer.write(output)
    return output.getvalue()


@pytest.fixture
def saved(tmp_path, monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path);store.init()
    with store.db() as c:
        c.executemany('INSERT INTO projects VALUES(?,?,?)',[('a','A',store.now()),('b','B',store.now())])
    def forbidden(*args, **kwargs):pytest.fail('PDF reader must not call a provider')
    for name in ('stream','complete','_api_client'):monkeypatch.setattr(models,name,forbidden)
    def create(texts):
        data=document(texts);uploads=tmp_path/'uploads';uploads.mkdir(exist_ok=True)
        fid=store.uid();path=uploads/(fid+'.pdf');path.write_bytes(data)
        with store.db() as c:
            c.execute('INSERT INTO files VALUES(?,?,?,?,?,?)',(fid,'a','Documento.pdf',str(path),'{}',store.now()))
        return store.one('SELECT * FROM files WHERE id=?',(fid,)),data
    return create


def test_real_text_page_numbers_empty_page_and_preserved_original(saved):
    record,original=saved(['Primera página','Acción con evidencia',''])
    with TestClient(app) as client:
        base='/api/projects/a/files/'+record['id']+'/pages/'
        result=client.get(base+'2').json()
        assert result == {'id':record['id'],'name':'Documento.pdf','page':2,'total_pages':3,
                          'text':'Acción con evidencia','truncated':False}
        assert client.get(base+'3').json()['text']==''
        assert Path(record['path']).read_bytes()==original
        assert store.rows('SELECT * FROM messages')==[]


def test_long_text_is_explicitly_truncated(saved):
    record,_=saved(['x'*13000])
    result=attachments.pdf_page(record,1)
    assert len(result['text'])==12000 and result['truncated'] is True


def test_project_boundaries_page_limits_and_origin(saved):
    record,_=saved(['Visible'])
    with TestClient(app) as client:
        assert client.get('/api/projects/b/files/'+record['id']+'/pages/1').status_code==404
        assert client.get('/api/projects/missing/files/'+record['id']+'/pages/1').status_code==404
        base='/api/projects/a/files/'+record['id']+'/pages/'
        for page in ('0','1001','not-a-number','2'):
            assert client.get(base+page).status_code==422
        assert client.get(base+'1',headers={'Origin':'https://evil.example'}).status_code==403


def test_path_escape_symlink_and_non_pdf_refused(saved,tmp_path):
    record,original=saved(['Original'])
    outside=tmp_path/'outside.pdf';outside.write_bytes(original)
    with pytest.raises(ValueError,match='ubicación'):
        attachments.pdf_page({**record,'path':str(outside)},1)
    link=tmp_path/'uploads'/'linked.pdf';link.symlink_to(outside)
    with pytest.raises(ValueError,match='ubicación'):
        attachments.pdf_page({**record,'path':str(link)},1)
    with pytest.raises(ValueError,match='solo admite'):
        attachments.pdf_page({**record,'name':'image.png'},1)


@pytest.mark.parametrize('kind',['timeout','exit','json','oversize'])
def test_worker_failures_are_bounded_and_do_not_leak_text(saved,monkeypatch,kind):
    record,_=saved(['PRIVATE FIXTURE'])
    original=attachments.subprocess.run
    def run(args,**kwargs):
        if not any(str(arg).endswith('pdf_text.py') for arg in args):return original(args,**kwargs)
        assert '-I' in args and kwargs['timeout']==8 and kwargs['stderr']==subprocess.DEVNULL
        if kind=='timeout':raise subprocess.TimeoutExpired(args,8)
        if kind=='exit':return subprocess.CompletedProcess(args,1,b'PRIVATE FIXTURE')
        if kind=='oversize':
            import json
            output=json.dumps({'page':1,'total_pages':1,'text':'x'*12001,'truncated':False}).encode()
        else:output=b'PRIVATE FIXTURE'
        return subprocess.CompletedProcess(args,0,output)
    monkeypatch.setattr(attachments.subprocess,'run',run)
    with pytest.raises(ValueError) as exc:attachments.pdf_page(record,1)
    assert 'PRIVATE FIXTURE' not in str(exc.value) and record['path'] not in str(exc.value)
    monkeypatch.setattr(attachments.subprocess,'run',original)
    assert attachments.pdf_page(record,1)['text']=='PRIVATE FIXTURE'
