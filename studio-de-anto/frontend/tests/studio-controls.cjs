/* Isolated browser regression. Every API is mocked and other origins blocked. */
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const base=process.env.ANTO_TEST_URL||'http://127.0.0.1:18767';
if(!['127.0.0.1','localhost','::1'].includes(new URL(base).hostname))throw Error('Use an isolated loopback frontend');
const deferred=()=>{let resolve;const promise=new Promise(done=>resolve=done);return{promise,resolve};};
const waitFor=async predicate=>{for(let i=0;i<100;i++){if(predicate())return;await new Promise(done=>setTimeout(done,20));}throw Error('Mock request was not received');};
const agents=['anto','atlas','vera','bruno','iris','leo'].map((id,i)=>({id,name:id.toUpperCase(),role:['Dirección','Coordinación','Análisis','Revisión','Visualización','Redacción'][i],color:'#b58aee',instructions:'MOCK',model:'gemini-2.5-flash-lite',tools:[]}));
const credential={configured:true,valid_format:true,source:'app',accepted_names:[],saved_in_app:true};
const settings={provider:'gemini',ollama_url:'http://127.0.0.1:11434',openai_url:'http://127.0.0.1:1234/v1',agents};
let policy={daily_requests:100,max_output_tokens:1024,concise:true},usageGate=null,policyGate=null,memoryWriteGate=null,memoryReadGate=null,failNextMemory=false;
const notes={'project-a':'Nota guardada de A','project-b':'Nota guardada de B'},calls=[];
const usage=()=>({day:'2026-10-25',attempted:0,remaining:policy.daily_requests,input_tokens:0,output_tokens:0,total_tokens:0,unknown_attempts:0,policy:{...policy}});
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 try{
  const page=await browser.newPage({viewport:{width:1500,height:1100}}),errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  // Simulate responses that arrive despite cancellation. Project/operation
  // guards must protect the UI even if a transport ignores AbortSignal.
  await page.addInitScript(()=>{const original=window.fetch.bind(window);window.fetch=(input,init)=>{const url=typeof input==='string'?input:input instanceof URL?input.href:input.url;return original(input,/\/api\/projects\/[^/]+\/memory/.test(url)&&init?{...init,signal:undefined}:init);};});
  await page.route('**/*',async route=>{
   const request=route.request(),url=new URL(request.url());
   if(url.origin!==new URL(base).origin)return route.abort();
   if(!url.pathname.startsWith('/api/'))return route.continue();
   const path=url.pathname,method=request.method(),body=request.postDataJSON();calls.push({path,method,body});
   const json=(value,status=200)=>route.fulfill({status,contentType:'application/json',body:JSON.stringify(value)});
   if(path==='/api/system/status')return json(require('./mock-system-status.cjs')());
   if(/^\/api\/projects\/[^/]+\/office$/.test(url.pathname))return route.fulfill({status:404,contentType:'application/json',body:JSON.stringify({detail:'Legacy fixture without expansion'})});
   if(path==='/api/projects')return json([{id:'project-a',name:'PRUEBA MOCK A'},{id:'project-b',name:'PRUEBA MOCK B'}]);
   if(path==='/api/settings')return json(settings);
   if(path==='/api/models')return json({provider:'gemini',connected:true,models:['gemini-2.5-flash-lite'],credential});
   if(path.startsWith('/api/credentials/'))return json(credential);
   if(path==='/api/usage'){const value=usage(),gate=usageGate;usageGate=null;if(gate)await gate.promise;return json(value);}
   if(path==='/api/usage/policy'){const gate=policyGate;policyGate=null;if(gate)await gate.promise;policy={...body};return json(policy);}
   const memory=path.match(/^\/api\/projects\/([^/]+)\/memory$/);
   if(memory){
    const pid=memory[1];
    if(method==='PUT'){const gate=memoryWriteGate;memoryWriteGate=null;if(gate)await gate.promise;notes[pid]=body.summary.trim();return json({summary:notes[pid]});}
    const value=notes[pid],gate=memoryReadGate;memoryReadGate=null;if(gate)await gate.promise;
    if(failNextMemory){failNextMemory=false;return json({detail:'MOCK: no se pudo cargar la nota'},503);}
    return json({summary:value});
   }
   if(path==='/api/events')return route.fulfill({contentType:'text/event-stream',body:': MOCK\n\n'});
   return json([]);
  });
  await page.goto(base);await page.getByLabel('Proyecto activo').selectOption('project-a');
  await page.getByRole('button',{name:'Configuración',exact:true}).click();
  const daily=page.getByLabel('Máximo de intentos diarios UTC'),note=page.getByLabel('Nota compartida del proyecto');
  await daily.waitFor();await page.waitForFunction(()=>document.querySelector('[aria-label="Nota compartida del proyecto"]').value==='Nota guardada de A');
  assert.equal(await page.getByRole('button',{name:'Guardar límites',exact:true}).isDisabled(),true);
  await daily.fill('175');await page.getByText('Hay cambios de límites sin guardar.',{exact:true}).waitFor();
  const usageHold=deferred();usageGate=usageHold;const usageBefore=calls.filter(call=>call.path==='/api/usage').length;
  await page.getByRole('button',{name:'Actualizar uso',exact:true}).click();await waitFor(()=>calls.filter(call=>call.path==='/api/usage').length>usageBefore);
  await daily.fill('180');usageHold.resolve();
  await page.getByRole('button',{name:'Actualizar uso',exact:true}).waitFor({state:'visible'});await page.waitForFunction(()=>!Array.from(document.querySelectorAll('button')).find(button=>button.textContent==='Actualizar uso').disabled);
  assert.equal(await daily.inputValue(),'180','Usage refresh must preserve edits made before and during the request');
  const policyHold=deferred();policyGate=policyHold;
  await page.getByRole('button',{name:'Guardar límites',exact:true}).click();await waitFor(()=>calls.some(call=>call.path==='/api/usage/policy'));
  await daily.fill('220');policyHold.resolve();
  await page.getByRole('button',{name:'Guardar límites',exact:true}).waitFor();await page.waitForFunction(()=>!Array.from(document.querySelectorAll('button')).find(button=>button.textContent==='Guardar límites').disabled);
  assert.equal(policy.daily_requests,180);assert.equal(await daily.inputValue(),'220','A completed save must preserve newer edits');
  await note.fill('Borrador exclusivo del proyecto A');
  const usageCount=calls.filter(call=>call.path==='/api/usage').length;
  await page.getByLabel('Proyecto activo').selectOption('project-b');await page.waitForFunction(()=>document.querySelector('[aria-label="Nota compartida del proyecto"]').value==='Nota guardada de B');
  assert.equal(await daily.inputValue(),'220');assert.equal(calls.filter(call=>call.path==='/api/usage').length,usageCount,'Switching projects must not reset global usage limits');
  await page.getByLabel('Proyecto activo').selectOption('project-a');await page.waitForFunction(()=>document.querySelector('[aria-label="Nota compartida del proyecto"]').value==='Borrador exclusivo del proyecto A');
  const memoryHold=deferred();memoryWriteGate=memoryHold;
  await page.getByRole('button',{name:'Guardar nota',exact:true}).click();await waitFor(()=>calls.some(call=>call.path==='/api/projects/project-a/memory'&&call.method==='PUT'));
  await page.getByLabel('Proyecto activo').selectOption('project-b');await page.waitForFunction(()=>document.querySelector('[aria-label="Nota compartida del proyecto"]').value==='Nota guardada de B');
  const lateWrite=page.waitForResponse(response=>response.url().endsWith('/api/projects/project-a/memory')&&response.request().method()==='PUT');memoryHold.resolve();await lateWrite;
  await page.evaluate(()=>new Promise(done=>requestAnimationFrame(()=>requestAnimationFrame(done))));
  assert.equal(await note.inputValue(),'Nota guardada de B');assert.equal(notes['project-b'],'Nota guardada de B');
  assert.equal(await page.getByText('Nota compartida guardada para este proyecto.',{exact:true}).count(),0,'A late save from A must not report success in B');
  const readHold=deferred();memoryReadGate=readHold;const memoryCount=calls.filter(call=>call.path==='/api/projects/project-a/memory'&&call.method==='GET').length;
  await page.getByLabel('Proyecto activo').selectOption('project-a');await waitFor(()=>calls.filter(call=>call.path==='/api/projects/project-a/memory'&&call.method==='GET').length>memoryCount);
  await page.getByLabel('Proyecto activo').selectOption('project-b');await page.waitForFunction(()=>document.querySelector('[aria-label="Nota compartida del proyecto"]').value==='Nota guardada de B');
  const lateRead=page.waitForResponse(response=>response.url().endsWith('/api/projects/project-a/memory')&&response.request().method()==='GET');readHold.resolve();await lateRead;
  await page.evaluate(()=>new Promise(done=>requestAnimationFrame(()=>requestAnimationFrame(done))));
  assert.equal(await note.inputValue(),'Nota guardada de B','A late note load must never replace another project');
  failNextMemory=true;await page.getByLabel('Proyecto activo').selectOption('project-a');
  await page.getByRole('button',{name:'Volver a cargar nota',exact:true}).waitFor();assert.equal(await note.inputValue(),'Borrador exclusivo del proyecto A');
  await page.getByRole('button',{name:'Volver a cargar nota',exact:true}).click();
  await page.getByText('Nota guardada para este proyecto.',{exact:true}).waitFor();assert.equal(await note.inputValue(),'Borrador exclusivo del proyecto A');
  assert.equal(await page.getByText('MOCK: no se pudo cargar la nota',{exact:true}).count(),0,'A successful retry must clear the previous load error');
  assert.equal(await daily.inputValue(),'220');assert.deepEqual(errors,[]);
  console.log('PASS MOCK: límites editados conservados al actualizar/cambiar proyecto/guardar; notas aisladas, borradores recuperados, respuestas atrasadas ignoradas y reintento de carga. Sin llamadas a proveedores.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
