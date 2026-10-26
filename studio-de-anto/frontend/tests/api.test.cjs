const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const ts=require('typescript');
const compiled=ts.transpileModule(fs.readFileSync(require('node:path').join(__dirname,'../src/api.ts'),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
const moduleObject={exports:{}};new Function('exports','require',compiled)(moduleObject.exports,require);const {readApiResponse,fetchApi,requireDirectorSupport,ServerCompatibilityError,SERVER_UPDATE_COMMAND}=moduleObject.exports;

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
test('generic 404 and all 405 replies explain server compatibility without exposing bodies',async()=>{
 for(const status of [404,405]){
  await assert.rejects(readApiResponse(new Response('<html>protocol-secret-marker</html>',{status})),error=>error.message.includes('HTTP '+status)&&!error.message.includes('protocol-secret-marker'));
  await assert.rejects(readApiResponse(Response.json({detail:status===404?'Not Found':'Method Not Allowed',input:'protocol-secret-marker'},{status})),error=>error.message.includes('HTTP '+status)&&!error.message.includes('Method Not Allowed')&&!error.message.includes('protocol-secret-marker'));
 }
 await assert.rejects(readApiResponse(Response.json({detail:'Archivo inexistente'},{status:404})),/Archivo inexistente/);
});
test('Director preflight rejects legacy or incompatible health with only an uncached GET',async()=>{
 const original=global.fetch,calls=[];
 try{
  for(const health of [{app:'STUDIO DE ANTO',code_version:'legacy',pid:42},{app:'STUDIO DE ANTO',api_version:'2',features:['director-v1']},{app:'STUDIO DE ANTO',api_version:'1',features:'director-v1'},{app:'Another app',api_version:'1',features:['director-v1']}]){
   global.fetch=async(input,init)=>{calls.push({input,init});return Response.json(health);};
   await assert.rejects(requireDirectorSupport(),error=>error instanceof ServerCompatibilityError&&error.message.includes('todavía no incluye Director'));
  }
  assert.equal(calls.length,4);
  assert(calls.every(call=>call.input==='/api/health'&&call.init.method==='GET'&&call.init.cache==='no-store'));
 }finally{global.fetch=original;}
});
test('Director preflight accepts supported features and handles missing health safely',async()=>{
 const original=global.fetch;
 try{
  global.fetch=async()=>Response.json({app:'STUDIO DE ANTO',api_version:'1',release:'1.4.1',features:['director-v1','context-draft-v1']});await requireDirectorSupport();
  for(const status of [404,405]){global.fetch=async()=>new Response('protocol-secret-marker',{status});await assert.rejects(requireDirectorSupport(),error=>error instanceof ServerCompatibilityError&&!error.message.includes('protocol-secret-marker'));}
 }finally{global.fetch=original;}
 assert(SERVER_UPDATE_COMMAND.includes('test "$(git branch --show-current)" = \'codex/studio-de-anto-modelo-real\''));
 assert(SERVER_UPDATE_COMMAND.includes('git pull --ff-only'));
 assert(!SERVER_UPDATE_COMMAND.includes('reset'));
});
