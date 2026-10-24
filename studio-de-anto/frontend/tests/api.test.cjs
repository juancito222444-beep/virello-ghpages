const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const ts=require('typescript');
const compiled=ts.transpileModule(fs.readFileSync(require('node:path').join(__dirname,'../src/api.ts'),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
const moduleObject={exports:{}};new Function('exports','require',compiled)(moduleObject.exports,require);const {readApiResponse,fetchApi}=moduleObject.exports;

test('plain Internal Server Error becomes an actionable HTTP error',async()=>{
 await assert.rejects(readApiResponse(new Response('Internal Server Error',{status:500})),error=>error.message.includes('HTTP 500')&&!error.message.includes('Unexpected token'));
});
test('HTML error bodies are never rendered',async()=>{
 await assert.rejects(readApiResponse(new Response('<h1>protocol-secret-marker</h1>',{status:502})),error=>error.message.includes('HTTP 502')&&!error.message.includes('protocol-secret-marker'));
});
test('JSON errors retain the safe server diagnostic and reference',async()=>{
 await assert.rejects(readApiResponse(Response.json({detail:'Error interno. Referencia: safe123.'},{status:500})),/safe123/);
});
test('login pages and malformed success responses have readable errors',async()=>{
 await assert.rejects(readApiResponse(new Response('<html>GitHub login</html>',{status:200})),/puerto 8765/);
});
test('normal JSON and no-content replies still work',async()=>{
 assert.deepEqual(await readApiResponse(Response.json({saved:true})),{saved:true});
 assert.equal(await readApiResponse(new Response(null,{status:204})),null);
});
test('validation arrays are not echoed with input values',async()=>{
 await assert.rejects(readApiResponse(Response.json({detail:[{input:'protocol-secret-marker'}]},{status:422})),error=>error.message.includes('422')&&!error.message.includes('protocol-secret-marker'));
});
test('network failures are translated and cancellation remains cancellation',async()=>{
 const original=global.fetch;
 try{global.fetch=async()=>{throw new TypeError('private proxy internals')};await assert.rejects(fetchApi('/api/models'),/Codespace siga encendido/);
 global.fetch=async()=>{throw new DOMException('Aborted','AbortError')};await assert.rejects(fetchApi('/api/models'),error=>error.name==='AbortError');}
 finally{global.fetch=original;}
});
