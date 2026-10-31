/* Browser regression with every API response mocked; no provider is contacted. */
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const {createServer}=require('node:http');
const fs=require('node:fs/promises');
const path=require('node:path');
const gemini='gemini-2.5-flash-lite',groq='openai/gpt-oss-20b';
const agents=['anto','atlas','vera','bruno','iris','leo'].map((id,i)=>({id,name:id.toUpperCase(),role:['Dirección','Coordinación','Análisis','Revisión','Visualización','Redacción'][i],color:'#b58aee',instructions:'Instrucción guardada '+id,model:groq,tools:[]}));
const credential={configured:true,valid_format:true,source:'app',accepted_names:[],saved_in_app:true};
let saved={provider:'groq',ollama_url:'http://127.0.0.1:11434',openai_url:'http://127.0.0.1:1234/v1',agents},failConnect=true;
const calls=[];
const modelStatus=provider=>({provider,connected:true,models:[provider==='gemini'?gemini:groq],inference_verified:false,endpoint:provider==='gemini'?'https://generativelanguage.googleapis.com/v1beta':'https://api.groq.com/openai/v1',credential});
(async()=>{
 const dist=path.resolve(__dirname,'../dist');
 const server=createServer(async(req,res)=>{try{
  const target=path.resolve(dist,'.'+new URL(req.url,'http://fixture').pathname.replace(/^\/$/,'/index.html'));
  if(!target.startsWith(dist+path.sep))throw Error('Invalid asset');
  const data=await fs.readFile(target);res.writeHead(200,{'Content-Type':{'.html':'text/html','.js':'application/javascript','.css':'text/css'}[path.extname(target)]||'application/octet-stream'});res.end(data);
 }catch{res.writeHead(404);res.end();}});
 await new Promise(done=>server.listen(0,'127.0.0.1',done));
 const base='http://127.0.0.1:'+server.address().port;
 const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 try{
  const page=await browser.newPage({viewport:{width:1500,height:1100}}),errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.route('**/*',async route=>{
   const request=route.request(),url=new URL(request.url());
   if(url.origin!==new URL(base).origin)return route.abort();
   if(!url.pathname.startsWith('/api/'))return route.continue();
   const method=request.method(),path=url.pathname,body=request.postDataJSON();
   calls.push({method,path,query:url.search,body});
   const json=(value,status=200)=>route.fulfill({status,contentType:'application/json',body:JSON.stringify(value)});
   if(path==='/api/antigravity')return json({installed:true,version:'1.4.12',supported:true,extensions_blocked:false,busy:false,authentication:'not_verified',login_command:'studio-de-anto/local-data/tools/antigravity/bin/agy'});
   if(path==='/api/antigravity/ask')return failConnect?json({detail:'MOCK: inicia sesión en la terminal'},422):json({response:'MOCK <script>texto visible</script>',authentication:'verified_for_this_request'});
   if(path==='/api/system/status')return json(require('./mock-system-status.cjs')());
   if(/^\/api\/projects\/[^/]+\/office$/.test(url.pathname))return route.fulfill({status:404,contentType:'application/json',body:JSON.stringify({detail:'Legacy fixture without expansion'})});
   if(path==='/api/projects')return json([{id:'mock-project',name:'PRUEBA MOCK · configuración'}]);
   if(path==='/api/settings'){
    if(method==='PUT'){saved={...saved,...body};return json({saved:true});}
    return json(saved);
   }
   if(path==='/api/models')return json(modelStatus(url.searchParams.get('provider')||saved.provider));
   if(path.startsWith('/api/credentials/'))return json(credential);
   if(path==='/api/connect'){
    if(failConnect)return json({detail:'MOCK: cuota temporal agotada; ajustes conservados.'},422);
    saved={...saved,provider:body.provider,agents:body.agents};
    return json({settings:saved,status:{...modelStatus(saved.provider),inference_verified:true,verified_model:gemini},proof:{response:'MOCK conectado',model:gemini,latency_ms:1}});
   }
   if(path==='/api/usage')return json({day:'2026-10-25',attempted:0,remaining:100,input_tokens:0,output_tokens:0,total_tokens:0,unknown_attempts:0,policy:{daily_requests:100,max_output_tokens:1024,concise:true}});
   if(path.endsWith('/memory'))return json({summary:''});
   if(path==='/api/events')return route.fulfill({contentType:'text/event-stream',body:': MOCK\n\n'});
   return json([]);
  });
  await page.goto(base);await page.getByLabel('Proyecto activo').waitFor();
  await page.getByRole('button',{name:'Configuración',exact:true}).click();
  await page.locator('summary').filter({hasText:'Google Antigravity'}).click();
  const panel=page.getByRole('article',{name:'Integración de Antigravity'});
  await panel.getByText('CLI instalada · 1.4.12 · Inicio de sesión sin verificar',{exact:true}).waitFor();
  const send=panel.getByRole('button',{name:'Consultar Antigravity',exact:true});
  assert(await send.isDisabled());
  await panel.getByLabel('Solicitud para Antigravity').fill('Ayúdame a planificar mi mundo');
  assert(await send.isDisabled());
  await panel.getByRole('button',{name:'Actualizar estado de Antigravity'}).click();
  assert.equal(calls.filter(c=>c.path==='/api/antigravity/ask').length,0);
  await panel.getByRole('checkbox').check();await send.click();
  await panel.getByRole('alert').getByText('MOCK: inicia sesión en la terminal',{exact:true}).waitFor();
  assert(await send.isDisabled());
  assert.equal(await panel.getByLabel('Solicitud para Antigravity').inputValue(),'Ayúdame a planificar mi mundo');
  failConnect=false;
  await panel.getByRole('checkbox').check();await send.click();
  await panel.getByText('Respuesta de Antigravity',{exact:true}).waitFor();
  await panel.getByText('MOCK <script>texto visible</script>',{exact:true}).waitFor();
  await panel.getByText('CLI instalada · 1.4.12 · Respuesta verificada en esta solicitud',{exact:true}).waitFor();
  assert(await send.isDisabled());
  assert.equal(calls.filter(c=>c.path==='/api/antigravity/ask').length,2);
  assert(calls.filter(c=>c.path==='/api/antigravity/ask').every(c=>c.body.authorize===true));
  assert.deepEqual(errors,[]);
  console.log('PASS MOCK Antigravity: estado sin inferencia, consentimiento, error conservado y respuesta de texto');
 }finally{await browser.close();await new Promise(done=>server.close(done));}
})().catch(error=>{console.error(error);process.exitCode=1;});
