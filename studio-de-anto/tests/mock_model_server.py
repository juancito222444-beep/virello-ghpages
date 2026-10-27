"""Solo pruebas: proveedor HTTP falso rotulado MOCK. No ejecuta ningún modelo."""
import argparse, json, time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

parser=argparse.ArgumentParser();parser.add_argument('--port',type=int,default=11555);parser.add_argument('--log',default='/tmp/anto-mock-requests.jsonl');args=parser.parse_args()
class MockAPI(BaseHTTPRequestHandler):
    def log_message(self,*_): pass
    def do_GET(self):
        body=json.dumps({'models':[{'name':'MOCK-prueba-no-IA'}]}).encode()
        self.send_response(200);self.send_header('Content-Type','application/json');self.send_header('Content-Length',str(len(body)));self.end_headers();self.wfile.write(body)
    def do_POST(self):
        data=json.loads(self.rfile.read(int(self.headers['Content-Length'])))
        with open(args.log,'a',encoding='utf-8') as out:out.write(json.dumps(data,ensure_ascii=False)+'\n')
        self.send_response(200);self.send_header('Content-Type','application/x-ndjson');self.end_headers()
        slow=any('lenta' in m.get('content','') for m in data.get('messages',[]))
        response='MOCK: respuesta de prueba sin inferencia real.'
        try:
            for word in response.split(' '):
                self.wfile.write((json.dumps({'message':{'content':word+' '},'done':False})+'\n').encode());self.wfile.flush();time.sleep(.25 if slow else .015)
            self.wfile.write((json.dumps({'message':{'content':''},'done':True,'done_reason':'stop'})+'\n').encode());self.wfile.flush()
        except (BrokenPipeError,ConnectionResetError):pass
print(f'Proveedor MOCK sin IA en127.0.0.1:{args.port}',flush=True)
ThreadingHTTPServer(('127.0.0.1',args.port),MockAPI).serve_forever()
