// Isolated regression: synthetic API responses only; external origins are blocked.
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const base=process.env.ANTO_TEST_URL||'http://127.0.0.1:8791';
if(!['127.0.0.1','localhost','::1'].includes(new URL(base).hostname))throw Error('Use an isolated loopback frontend');
const agents=['anto','atlas','vera','bruno','iris','leo'].map(id=>({id,name:id.toUpperCase(),role:'MOCK',color:'#9684bc',model:'gemini-mock',instructions:'Instrucción guardada '+id,tools:[]}));
const credential={configured:true,valid_format:true,source:'MOCK',accepted_names:[],saved_in_app:true};
const settings={provider:'gemini',agents,ollama_url:'',openai_url:''};
const notes={'project-a':'Nota guardada de A','project-b':'Nota guardada de B'};
const sentinel='MOCK-TYPED-KEY-MUST-NOT-PERSIST';

(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 try{
  const context=await browser.newContext({viewport:{width:1440,height:1050},reducedMotion:'reduce'}),calls=[],errors=[],unexpected=[];
  await context.addInitScript(()=>{
   window.EventSource=class{close(){}};
   // Exercise the ordinary read-only status poll without a 15-second wait.
   const interval=window.setInterval.bind(window);
   window.setInterval=(callback,delay,...args)=>interval(callback,delay===15000?250:delay,...args);
  });
  await context.route('**/*',async route=>{
   const request=route.request(),url=new URL(request.url()),path=url.pathname,method=request.method();
   if(url.origin!==new URL(base).origin)return route.abort();
   if(!path.startsWith('/api/'))return route.continue();
   calls.push({path,method,query:url.search,body:request.postData()});
   const json=(value,status=200)=>route.fulfill({status,contentType:'application/json',body:JSON.stringify(value)});
   // Any mutation is a failure, including accidental connection/model calls.
   if(method!=='GET'){unexpected.push(method+' '+path);return json({detail:'Unexpected mutation in MOCK regression'},500);}
   if(path==='/api/projects')return json([{id:'project-a',name:'MOCK A'},{id:'project-b',name:'MOCK B'}]);
   if(path==='/api/settings')return json(settings);
   if(path==='/api/models')return json({provider:'gemini',connected:true,inference_verified:true,models:['gemini-mock','gemini-other-mock'],endpoint:'MOCK',credential});
   if(path==='/api/credentials/gemini')return json(credential);
   if(path==='/api/usage')return json({day:'2026-10-27',attempted:0,remaining:100,input_tokens:0,output_tokens:0,total_tokens:0,unknown_attempts:0,policy:{daily_requests:100,max_output_tokens:1024,concise:true}});
   const memory=path.match(/^\/api\/projects\/(project-[ab])\/memory$/);
   if(memory)return json({summary:notes[memory[1]]});
   if(['/api/messages','/api/feedback','/api/runs','/api/files','/api/artifacts'].includes(path))return json([]);
   unexpected.push(method+' '+path);return json({detail:'Unexpected API in MOCK regression'},500);
  });
  const page=await context.newPage();page.on('pageerror',error=>errors.push(error.message));
  await page.goto(base);
  await page.getByLabel('Proyecto activo').selectOption('project-a');
  await page.getByTitle('Enviar',{exact:true}).waitFor();
  await page.evaluate(()=>new Promise(done=>requestAnimationFrame(()=>requestAnimationFrame(done))));
  assert.equal(calls.filter(call=>call.path==='/api/usage'||call.path.startsWith('/api/credentials/')).length,0,'Office must not mount Settings or fetch its usage/credential data before the first visit');

  const upload=page.getByRole('button',{name:'Subir archivo al chat',exact:true});
  await page.getByRole('button',{name:'Elegir PDF o imagen existente',exact:true}).focus();await page.keyboard.press('Shift+Tab');
  assert.equal(await upload.evaluate(button=>button===document.activeElement),true,'Tab navigation must reach the attachment button');
  const chooserEvent=page.waitForEvent('filechooser');await page.keyboard.press('Enter');
  const chooser=await chooserEvent;assert.equal(chooser.isMultiple(),false);
  // Do not choose a file: opening the picker alone cannot upload or call an AI.
  assert.equal(calls.some(call=>call.method!=='GET'),false);

  const openSettings=()=>page.getByRole('button',{name:'Configuración',exact:true}).click();
  const openOffice=()=>page.getByRole('button',{name:'Oficina',exact:true}).click();
  await openSettings();
  const daily=page.getByLabel('Máximo de intentos diarios UTC'),note=page.getByLabel('Nota compartida del proyecto'),key=page.getByLabel('Clave API',{exact:true});
  await page.waitForFunction(()=>document.querySelector('[aria-label="Nota compartida del proyecto"]')?.value==='Nota guardada de A');
  await daily.fill('177');await note.fill('MOCK: borrador privado de A');
  await page.getByText('Ajustes avanzados del equipo',{exact:true}).click();
  const model=page.getByLabel('Modelo de ANTO',{exact:true}),instructions=page.locator('.agent-settings textarea').first();
  await model.fill('gemini-draft-mock');await instructions.fill('MOCK: instrucciones editadas sin guardar');await key.fill(sentinel);
  await openOffice();
  assert.equal(await key.isVisible(),false,'Inactive Settings must be hidden from view and the accessibility tree');
  await openSettings();
  assert.equal(await daily.inputValue(),'177');assert.equal(await note.inputValue(),'MOCK: borrador privado de A');
  assert.equal(await model.inputValue(),'gemini-draft-mock');assert.equal(await instructions.inputValue(),'MOCK: instrucciones editadas sin guardar');
  assert.equal(await key.inputValue(),'','Leaving Settings must clear an unsubmitted API key');

  await page.getByRole('button',{name:'Actualizar catálogo',exact:true}).click();
  await page.getByText('Catálogo actualizado. Tus cambios siguen sin guardar.',{exact:true}).waitFor();
  await page.getByRole('button',{name:'Actualizar uso',exact:true}).click();
  await page.waitForResponse(response=>new URL(response.url()).pathname==='/api/models');
  assert.equal(await daily.inputValue(),'177','Usage/status refreshes must preserve the limit draft');
  assert.equal(await note.inputValue(),'MOCK: borrador privado de A');assert.equal(await model.inputValue(),'gemini-draft-mock');
  assert.equal(await instructions.inputValue(),'MOCK: instrucciones editadas sin guardar','Catalog/status refreshes must preserve agent instructions');

  await page.getByLabel('Proyecto activo').selectOption('project-b');
  await page.waitForFunction(()=>document.querySelector('[aria-label="Nota compartida del proyecto"]')?.value==='Nota guardada de B');
  await note.fill('MOCK: borrador exclusivo de B');await key.fill(sentinel);
  await openOffice();await page.getByLabel('Proyecto activo').selectOption('project-a');await openSettings();
  await page.waitForFunction(()=>document.querySelector('[aria-label="Nota compartida del proyecto"]')?.value==='MOCK: borrador privado de A');
  assert.equal(await daily.inputValue(),'177');assert.equal(await key.inputValue(),'');
  await page.getByLabel('Proyecto activo').selectOption('project-b');
  await page.waitForFunction(()=>document.querySelector('[aria-label="Nota compartida del proyecto"]')?.value==='MOCK: borrador exclusivo de B');
  assert.equal(await model.inputValue(),'gemini-draft-mock');assert.equal(await instructions.inputValue(),'MOCK: instrucciones editadas sin guardar');

  await page.setViewportSize({width:390,height:844});
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'Settings drafts and controls must fit mobile');
  await openOffice();await page.getByRole('button',{name:'Elegir PDF o imagen existente',exact:true}).focus();await page.keyboard.press('Shift+Tab');
  assert.equal(await upload.evaluate(button=>button===document.activeElement),true,'The mobile attachment button remains keyboard accessible');
  await openSettings();assert.equal(await note.inputValue(),'MOCK: borrador exclusivo de B');
  assert.equal(await daily.inputValue(),'177');assert.equal(await key.inputValue(),'');
  const stored=await page.evaluate(()=>JSON.stringify(Object.fromEntries(Object.keys(localStorage).map(name=>[name,localStorage.getItem(name)]))));
  assert.equal(stored.includes(sentinel),false,'Unsubmitted API keys must never enter localStorage');
  assert.equal(calls.some(call=>call.body?.includes(sentinel)),false,'Navigation must never submit a typed API key');
  assert.deepEqual(calls.filter(call=>call.method!=='GET'),[],'This continuity workflow must never save or invoke inference');
  assert.deepEqual(unexpected,[]);assert.deepEqual(errors,[]);
  console.log('PASS MOCK: ajustes diferidos, borradores de límites/notas/modelos conservados entre pantallas y proyectos, claves escritas borradas al salir, catálogo sin guardado, clip por teclado y móvil. Cero inferencias.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
