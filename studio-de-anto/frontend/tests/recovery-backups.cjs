// Every API is synthetic and external origins are blocked. No model calls.
const assert=require('node:assert/strict');
const {createServer}=require('node:http');
const fs=require('node:fs/promises');
const path=require('node:path');
const {chromium}=require('playwright');
let base=process.env.ANTO_TEST_URL||'http://127.0.0.1:8791';
if(!['127.0.0.1','localhost','::1'].includes(new URL(base).hostname))throw Error('Use an isolated loopback frontend');
const deferred=()=>{let resolve;const promise=new Promise(done=>resolve=done);return {promise,resolve};};
const waitFor=async predicate=>{for(let index=0;index<100;index++){if(predicate())return;await new Promise(done=>setTimeout(done,20));}throw Error('Expected MOCK request was not received');};
const copy=(id,created='2026-10-26T15:00:00Z')=>({id,created,size:1024});
const state=(copies=[])=>({enabled:false,interval_minutes:60,retention:3,last_attempt:null,last_success:copies[0]?.created||null,last_error:null,next_due:null,copies});
(async()=>{
 // Chromium may bypass Playwright routing for a link with the download
 // attribute. Serve its ZIP over real loopback HTTP, keeping the click intact.
 const dist=path.resolve(__dirname,'../dist'),downloads=[];
 const fixture=createServer(async(request,response)=>{
  try{
   const url=new URL(request.url,'http://loopback-fixture');
   if(url.pathname==='/api/projects/recovery-a/snapshots/copy-created/download'){
    downloads.push(url.pathname);response.writeHead(200,{'Content-Type':'application/zip','Content-Disposition':'attachment; filename="mock-project.zip"'});response.end('MOCK ZIP bytes');return;
   }
   if(url.pathname.startsWith('/api/')){response.writeHead(501);response.end('Unmocked fixture API');return;}
   const file=path.resolve(dist,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
   if(!file.startsWith(dist+path.sep))throw Error('Invalid fixture asset');
   const content=await fs.readFile(file),type={'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml'}[path.extname(file)]||'application/octet-stream';
   response.writeHead(200,{'Content-Type':type});response.end(content);
  }catch{response.writeHead(404);response.end('Missing fixture asset');}
 });
 await new Promise((resolve,reject)=>{fixture.once('error',reject);fixture.listen(0,'127.0.0.1',resolve);});
 base='http://127.0.0.1:'+fixture.address().port;
 let browser;
 try{
  browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox']});
  const context=await browser.newContext({viewport:{width:1440,height:1050},reducedMotion:'reduce'}),page=await context.newPage(),errors=[],calls=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.addInitScript(()=>{
   window.EventSource=class{close(){}};
   const original=window.fetch.bind(window);
   window.fetch=(input,init)=>{const url=typeof input==='string'?input:input instanceof URL?input.href:input.url;return original(input,/\/snapshots$/.test(url)&&init?{...init,signal:undefined}:init);};
  });
  const agents=['anto','vera'].map(id=>({id,name:id.toUpperCase(),role:'MOCK',color:'#9684bc',model:'gemini-mock',instructions:'MOCK-private-recovery-key',tools:[]}));
  const projects=[{id:'recovery-a',name:'Proyecto original A'},{id:'recovery-b',name:'Proyecto B'}];
  const states={'recovery-a':state([copy('copy-a')]),'recovery-b':state([copy('copy-b','2026-10-26T16:00:00Z')])};
  let failConfigure=false,createGate=null,readGate=null,readRequested=false;
  await context.route('**/*',async route=>{
   const request=route.request(),url=new URL(request.url()),path=url.pathname,method=request.method();
   if(url.origin!==new URL(base).origin)return route.abort();
   if(!path.startsWith('/api/'))return route.continue();
   calls.push({path,method,body:request.postDataJSON()});
   const json=(body,status=200)=>route.fulfill({status,contentType:'application/json',body:JSON.stringify(body)});
   if(path==='/api/projects')return json(projects);
   if(path==='/api/settings')return json({provider:'gemini',agents,ollama_url:'',openai_url:'',api_key:'MOCK-private-recovery-key'});
   if(path==='/api/models')return json({provider:'gemini',connected:true,inference_verified:true,models:['gemini-mock'],credential:{configured:true,valid_format:true,source:'MOCK',accepted_names:[]}});
   if(path.startsWith('/api/credentials/'))return json({configured:true,valid_format:true,source:'MOCK',accepted_names:[]});
   if(path==='/api/usage')return json({day:'2026-10-26',attempted:0,remaining:100,input_tokens:0,output_tokens:0,total_tokens:0,unknown_attempts:0,policy:{daily_requests:100,max_output_tokens:1024,concise:true}});
   if(path.endsWith('/memory'))return json({summary:'MOCK: nota del proyecto'});
   const snapshot=path.match(/^\/api\/projects\/([^/]+)\/snapshots(?:\/([^/]+)\/(restore|download))?$/);
   if(snapshot){
    const [,pid,sid,action]=snapshot;assert.ok(states[pid]);
    if(action==='restore'){
     assert.equal(method,'POST');assert.ok(states[pid].copies.some(item=>item.id===sid));
     const created={id:'recovery-new',name:'Restaurado como proyecto nuevo'};states[created.id]=state();projects.push(created);return json(created);
    }
    if(action==='download'){downloads.push(path);return route.fulfill({contentType:'application/zip',headers:{'Content-Disposition':'attachment; filename="mock-project.zip"'},body:'MOCK ZIP bytes'});}
    if(method==='PUT'){
     if(failConfigure){failConfigure=false;return json({detail:'MOCK: no se pudo cambiar la programación'},503);}
     states[pid]={...states[pid],enabled:request.postDataJSON().enabled};return json(states[pid]);
    }
    if(method==='POST'){
     const gate=createGate;createGate=null;if(gate)await gate.promise;
     states[pid]={...states[pid],last_success:'2026-10-26T17:00:00Z',copies:[copy('copy-created','2026-10-26T17:00:00Z'),...states[pid].copies]};return json(states[pid]);
    }
    assert.equal(method,'GET');const result=JSON.parse(JSON.stringify(states[pid])),gate=readGate;readGate=null;if(gate){readRequested=true;await gate.promise;}return json(result);
   }
   if(['/api/messages','/api/feedback','/api/runs','/api/files','/api/artifacts'].includes(path))return json([]);
   throw Error('Unexpected recovery API request: '+method+' '+path);
  });
  await page.goto(base);await page.getByRole('button',{name:'Configuración',exact:true}).click();
  const section=page.getByRole('region',{name:'Copias de recuperación del proyecto',exact:true});
  await section.getByRole('button',{name:'Copias de recuperación',exact:true}).waitFor();
  assert.equal(calls.filter(call=>call.path.endsWith('/snapshots')).length,0,'A closed recovery center does not read snapshots or schedule work');
  await section.getByRole('button',{name:'Copias de recuperación',exact:true}).click();
  const enabled=section.getByRole('checkbox',{name:'Copias automáticas cada hora',exact:true});
  await enabled.waitFor();assert.equal(await enabled.isChecked(),false);
  assert.equal(await section.getByRole('link').count(),1);
  assert.ok((await section.innerText()).includes('mismo servidor'));
  await enabled.click();await page.waitForFunction(()=>{const control=document.querySelector('[aria-label="Copias automáticas cada hora"]');return control.checked&&!control.disabled;});
  assert.equal(states['recovery-a'].enabled,true);
  failConfigure=true;await enabled.click();
  await section.getByRole('alert').getByText('MOCK: no se pudo cambiar la programación',{exact:true}).waitFor();
  assert.equal(await enabled.isChecked(),true,'A failed configuration cannot pretend the saved schedule changed');
  const createHold=deferred();createGate=createHold;
  const createButton=section.getByRole('button',{name:'Crear copia ahora',exact:true});
  await createButton.evaluate(button=>{button.click();button.click();});
  await waitFor(()=>calls.some(call=>call.path.endsWith('/snapshots')&&call.method==='POST'));
  assert.equal(calls.filter(call=>call.path.endsWith('/snapshots')&&call.method==='POST').length,1,'In-flight guard prevents duplicate creation');
  const toggle=section.getByRole('button',{name:'Copias de recuperación',exact:true});
  assert.equal(await toggle.isDisabled(),true,'A running creation cannot be hidden and lose its guard');
  await toggle.evaluate(button=>button.click());
  assert.equal(await toggle.getAttribute('aria-expanded'),'true');
  assert.equal(calls.filter(call=>call.path.endsWith('/snapshots')&&call.method==='POST').length,1,'Attempting to close during creation cannot start another copy');
  createHold.resolve();await section.getByRole('button',{name:'Crear copia ahora',exact:true}).waitFor();
  await page.waitForFunction(()=>document.querySelectorAll('.recovery-list li').length===2);
  const download=section.getByRole('link').first();assert.equal(await download.getAttribute('href'),'/api/projects/recovery-a/snapshots/copy-created/download');
  const downloading=page.waitForEvent('download');await download.click();const archive=await downloading;
  assert.equal(archive.suggestedFilename(),'mock-project.zip');assert.equal(await archive.failure(),null);
  assert.equal(await fs.readFile(await archive.path(),'utf8'),'MOCK ZIP bytes');
  assert.deepEqual(downloads,['/api/projects/recovery-a/snapshots/copy-created/download'],'The actual download stays scoped to the chosen project and snapshot');
  const readHold=deferred();readGate=readHold;readRequested=false;
  await section.getByRole('button',{name:'Actualizar copias',exact:true}).click();await waitFor(()=>readRequested);
  await page.getByLabel('Proyecto activo').selectOption('recovery-b');await enabled.waitFor();
  await page.waitForFunction(()=>document.querySelector('.recovery-list a')?.getAttribute('href')==='/api/projects/recovery-b/snapshots/copy-b/download');
  readHold.resolve();await page.waitForTimeout(100);
  assert.equal(await enabled.isChecked(),false);assert.equal(await section.getByRole('link').count(),1,'A late A response cannot replace B snapshots');
  await page.setViewportSize({width:390,height:844});
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'Recovery controls fit mobile');
  await section.getByRole('button',{name:'Restaurar como proyecto nuevo',exact:true}).click();
  await page.waitForFunction(()=>document.querySelector('[aria-label="Proyecto activo"]').value==='recovery-new');
  assert.ok(projects.some(item=>item.id==='recovery-a')&&projects.some(item=>item.id==='recovery-b'));
  assert.equal(states['recovery-b'].copies.length,1,'Restore preserves the source copy and project');
  await section.getByText('Aún no hay copias guardadas para este proyecto.',{exact:true}).waitFor();
  assert.equal(calls.filter(call=>call.method!=='GET').every(call=>call.path.includes('/snapshots')),true,'Only explicit recovery actions write data; no model calls');
  assert.ok(!(await section.innerText()).includes('MOCK-private-recovery-key'));assert.deepEqual(errors,[]);
  console.log('PASS MOCK: explicit opt-in, closed center makes no requests, confirmed schedule after failure, guarded creation/download/restore, stale project isolation, preserved originals and mobile; zero provider calls.');
 }finally{await browser?.close();fixture.closeAllConnections();await new Promise(resolve=>fixture.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
