/* Browser regression with every API response mocked; no provider is contacted. */
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const base=process.env.ANTO_TEST_URL||'http://127.0.0.1:18767';
if(!['127.0.0.1','localhost','::1'].includes(new URL(base).hostname))throw Error('Use an isolated loopback frontend for this test');
const gemini='gemini-2.5-flash-lite',groq='openai/gpt-oss-20b';
const agents=['anto','atlas','vera','bruno','iris','leo'].map((id,i)=>({id,name:id.toUpperCase(),role:['Dirección','Coordinación','Análisis','Revisión','Visualización','Redacción'][i],color:'#b58aee',instructions:'Instrucción guardada '+id,model:groq,tools:[]}));
const credential={configured:true,valid_format:true,source:'app',accepted_names:[],saved_in_app:true};
let saved={provider:'groq',ollama_url:'http://127.0.0.1:11434',openai_url:'http://127.0.0.1:1234/v1',agents},failConnect=true;
const calls=[];
const modelStatus=provider=>({provider,connected:true,models:[provider==='gemini'?gemini:groq],inference_verified:false,endpoint:provider==='gemini'?'https://generativelanguage.googleapis.com/v1beta':'https://api.groq.com/openai/v1',credential});
(async()=>{
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
  await page.getByRole('button',{name:'Google Gemini',exact:false}).click();
  await page.getByText('Ajustes avanzados del equipo',{exact:true}).click();
  const instructions=page.locator('.agent-settings textarea').first();
  await instructions.fill('Borrador de ANTO que debe conservarse tras error');
  const original=JSON.stringify(saved);
  await page.getByRole('button',{name:'Actualizar catálogo',exact:true}).click();
  await page.getByText('Catálogo actualizado. Tus cambios siguen sin guardar.',{exact:true}).waitFor();
  assert.equal(JSON.stringify(saved),original);
  assert.equal(await instructions.inputValue(),'Borrador de ANTO que debe conservarse tras error');
  assert.equal(calls.filter(call=>call.method==='PUT').length,0,'Catalog refresh must not save settings');
  assert(calls.some(call=>call.path==='/api/models'&&call.query==='?provider=gemini'));
  assert.equal(calls.filter(call=>call.path==='/api/connect').length,0,'Catalog refresh must not generate');
  await page.locator('.topbar .connection').getByText('Conectar Groq',{exact:true}).waitFor();
  await page.locator('.api-config-row').getByRole('button',{name:'Conectar Google Gemini',exact:true}).click();
  await page.getByRole('alert').getByText('MOCK: cuota temporal agotada; ajustes conservados.',{exact:true}).waitFor();
  assert.equal(calls.filter(call=>call.method==='PUT').length,0,'Connection must not persist before its check');
  assert.equal(JSON.stringify(saved),original);
  assert.equal(await instructions.inputValue(),'Borrador de ANTO que debe conservarse tras error');
  const attempt=calls.find(call=>call.path==='/api/connect');
  assert.equal(attempt.body.agents[0].instructions,'Borrador de ANTO que debe conservarse tras error');
  assert.equal(attempt.body.provider,'gemini');
  failConnect=false;
  await page.locator('.api-config-row').getByRole('button',{name:'Conectar Google Gemini',exact:true}).click();
  await page.getByText('Respuesta recibida del proveedor',{exact:true}).waitFor();
  assert.equal(saved.provider,'gemini');
  assert.equal(saved.agents[0].instructions,'Borrador de ANTO que debe conservarse tras error');
  await page.locator('.topbar .connection').getByText('Gemini · listo',{exact:true}).waitFor();
  assert.deepEqual(errors,[]);
  console.log('PASS MOCK: catálogo sin guardado/generación, conexión fallida sin PUT ni pérdida del borrador y guardado solo tras éxito. Cero llamadas al proveedor.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
