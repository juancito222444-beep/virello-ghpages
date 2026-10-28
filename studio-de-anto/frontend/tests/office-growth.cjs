// Real local WebGL and synthetic milestones. External services and inference blocked.
const assert=require('node:assert/strict');
const {createServer}=require('node:http');
const fs=require('node:fs/promises');
const path=require('node:path');
const {chromium}=require('playwright');
const deferred=()=>{let resolve;const promise=new Promise(done=>resolve=done);return{promise,resolve};};
const rules=[['library','Biblioteca','data','files',1],['laboratory','Laboratorio','tasks','completed_runs',1],['gallery','Galería','deliverables','artifacts',1],['strategy','Sala de estrategia','settings','useful_answers',3]];
const state=()=>({metrics:{files:0,completed_runs:0,artifacts:0,useful_answers:0},authorized:new Set()});
(async()=>{
 const dist=path.resolve(__dirname,'../dist'),fixture=createServer(async(req,res)=>{
  try{const url=new URL(req.url,'http://fixture');if(url.pathname.startsWith('/api/'))throw Error('Unmocked API');
   const file=path.resolve(dist,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));if(!file.startsWith(dist+path.sep))throw Error('Invalid path');
   res.writeHead(200,{'Content-Type':{'.html':'text/html','.js':'application/javascript','.css':'text/css'}[path.extname(file)]||'application/octet-stream'});res.end(await fs.readFile(file));
  }catch{res.writeHead(404);res.end('Missing fixture asset');}
 });
 await new Promise((resolve,reject)=>{fixture.once('error',reject);fixture.listen(0,'127.0.0.1',resolve);});
 const base='http://127.0.0.1:'+fixture.address().port;let browser;
 try{
  browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  const context=await browser.newContext({viewport:{width:1512,height:1100},reducedMotion:'reduce'}),page=await context.newPage(),errors=[],calls=[],unexpected=[];
  page.on('pageerror',e=>errors.push(e.message));
  await context.addInitScript(()=>{
   window.EventSource=class{close(){}};
   const fetch=window.fetch.bind(window);window.fetch=(input,init)=>fetch(input,init?{...init,signal:undefined}:init);
  });
  const agents=['anto','atlas','vera','bruno','iris','leo'].map(id=>({id,name:id.toUpperCase(),role:'MOCK',color:'#9684bc',model:'gemini-mock',instructions:'MOCK',tools:[]}));
  const projects={a:state(),b:state()};let holdRead=null,holdWrite=null,failRead=false,invalidRead=false;
  function report(pid){const data=projects[pid];return {project:pid,metrics:{...data.metrics},rooms:rules.map(([id,name,destination,metric,required])=>({id,name,description:'MOCK',destination,unlocked:data.metrics[metric]>=required,authorized:data.authorized.has(id),authorized_at:data.authorized.has(id)?'2026-10-28T17:00:00Z':null,requirement:{metric,required,current:data.metrics[metric]}}))};}
  await context.route('**/*',async route=>{
   const request=route.request(),url=new URL(request.url()),name=url.pathname,method=request.method();
   if(url.origin!==base){unexpected.push(request.url());return route.abort();}
   if(!name.startsWith('/api/'))return route.continue();
   calls.push({name,method,body:method==='PUT'?request.postDataJSON():null});
   const json=(value,status=200)=>route.fulfill({status,contentType:'application/json',body:JSON.stringify(value)});
   if(name==='/api/projects')return json([{id:'a',name:'MOCK · estudio A'},{id:'b',name:'MOCK · estudio B'}]);
   if(name==='/api/settings')return json({provider:'gemini',agents,ollama_url:'',openai_url:''});
   if(name==='/api/models')return json({provider:'gemini',connected:false,models:[],credential:{configured:false}});
   if(['/api/runs','/api/files','/api/artifacts','/api/messages','/api/feedback'].includes(name))return json([]);
   const match=name.match(/^\/api\/projects\/(a|b)\/office(?:\/(\w+))?$/);
   if(match){
    const [,pid,id]=match;
    if(method==='GET'){
     if(failRead){failRead=false;return json({detail:'MOCK: progreso no disponible'},503);}
     if(invalidRead){invalidRead=false;return json(report(pid==='a'?'b':'a'));}
     const snapshot=report(pid),gate=holdRead;holdRead=null;if(gate)await gate.promise;
     return json(snapshot);
    }
    if(method==='PUT'&&id){
     const body=request.postDataJSON(),data=projects[pid],rule=rules.find(entry=>entry[0]===id),gate=holdWrite;holdWrite=null;
     if(gate)await gate.promise;
     if(body.enabled&&!data.authorized.has(id)&&data.metrics[rule[3]]<rule[4])return json({detail:'MOCK: el hito ya no está disponible'},409);
     if(body.enabled)data.authorized.add(id);else data.authorized.delete(id);
     return json(report(pid));
    }
   }
   unexpected.push(method+' '+name);return json({detail:'Unexpected fixture API'},500);
  });
  const scene=page.locator('.office-canvas'),panel=page.getByRole('region',{name:'Crecimiento de la oficina'}),input=page.getByLabel('Mensaje',{exact:true});
  const card=id=>page.locator('[data-growth-room="'+id+'"]');
  const expand=async()=>{const button=panel.getByRole('button',{name:/Haz crecer tu estudio/});if(await button.getAttribute('aria-expanded')==='false')await button.click();};
  const count=async n=>{await scene.scrollIntoViewIfNeeded();await page.waitForFunction(n=>document.querySelector('.office-canvas')?.dataset.expansionCount===String(n),n);};
  const refresh=async()=>{await panel.getByRole('button',{name:'Actualizar progreso',exact:true}).click();await panel.getByRole('button',{name:'Actualizar progreso',exact:true}).waitFor();};
  await page.goto(base);await page.waitForSelector('[data-renderer-ready="true"]');await expand();
  await card('library').waitFor();assert.equal(await panel.getByRole('button',{name:'Hito pendiente'}).count(),4);await count(0);
  assert.equal(calls.filter(call=>call.method!=='GET').length,0,'Progress must never authorize a room by itself');
  projects.a.metrics={files:1,completed_runs:1,artifacts:1,useful_answers:3};await refresh();
  await card('library').getByRole('button',{name:'Autorizar expansión',exact:true}).waitFor();
  assert.equal(calls.filter(call=>call.method!=='GET').length,0);
  await input.fill('Borrador privado que debe conservarse');
  await page.getByRole('button',{name:'Reunión',exact:true}).click();
  await page.waitForFunction(()=>document.querySelector('[data-agent-id="anto"]').dataset.target==='2,14');
  const actor=await page.locator('[data-agent-id="anto"]').elementHandle();
  const gate=deferred();holdWrite=gate;
  await card('library').getByRole('button',{name:'Autorizar expansión',exact:true}).click();
  await card('library').getByRole('button',{name:'Guardando…',exact:true}).waitFor();
  await count(0);assert.equal(await card('laboratory').getByRole('button',{name:'Autorizar expansión',exact:true}).isDisabled(),true);
  gate.resolve();await count(1);await page.getByRole('button',{name:'Abrir Biblioteca',exact:true}).waitFor();
  assert.equal(await actor.evaluate(el=>el===document.querySelector('[data-agent-id="anto"]')),true,'Adding wings must preserve the existing actors');
  assert.equal(await actor.evaluate(el=>el.dataset.target),'2,14','Adding a room must preserve reserved routes');
  assert.equal(await input.inputValue(),'Borrador privado que debe conservarse');
  assert.equal(calls.filter(call=>call.method==='PUT').length,1);
  await page.reload();await page.waitForSelector('[data-renderer-ready="true"]');await count(1);
  assert.equal(await input.inputValue(),'Borrador privado que debe conservarse');assert.equal(calls.filter(call=>call.method==='PUT').length,1,'Reload may read saved authorization but must never re-authorize');
  await expand();
  for(const id of ['laboratory','gallery','strategy']){await card(id).getByRole('button',{name:'Autorizar expansión',exact:true}).click();await card(id).getByText('En tu oficina',{exact:true}).waitFor();}
  await count(4);
  const bounds=await scene.evaluate(el=>JSON.parse(el.dataset.sceneBounds));assert(bounds[1]>24&&bounds[3]>21,'Office grows both east and south');
  const rect=await scene.boundingBox();
  for(const [,name] of rules){const label=page.getByRole('button',{name:'Abrir '+name,exact:true});assert(await label.isVisible());const box=await label.boundingBox();assert(box.x>=rect.x&&box.x+box.width<=rect.x+rect.width&&box.y>=rect.y&&box.y+box.height<=rect.y+rect.height,'Room labels must fit the scene');}
  await scene.screenshot({path:'/tmp/anto-expansion-desktop.png'});
  await page.getByRole('button',{name:'Abrir Biblioteca',exact:true}).click();await page.getByRole('heading',{name:'Datos',exact:true}).waitFor();
  await page.getByRole('button',{name:'Oficina',exact:true}).click();await count(4);await expand();
  await card('library').getByRole('button',{name:'Replegar sala',exact:true}).click();await count(3);assert.equal(await page.locator('[data-office-room="library"]').count(),0);assert.equal(projects.a.metrics.files,1);
  await card('library').getByRole('button',{name:'Autorizar expansión',exact:true}).click();await count(4);
  await card('strategy').getByRole('button',{name:'Replegar sala',exact:true}).click();await count(3);
  projects.a.metrics.useful_answers=0;
  await card('strategy').getByRole('button',{name:'Autorizar expansión',exact:true}).click();await panel.getByRole('alert').getByText(/hito ya no está/).waitFor();await count(3);
  await refresh();await card('strategy').getByRole('button',{name:'Hito pendiente',exact:true}).waitFor();
  // Deliberately ignore AbortSignal. A late A response must not expose its wings in B.
  const lateRead=deferred();holdRead=lateRead;await panel.getByRole('button',{name:'Actualizar progreso',exact:true}).click();
  await page.getByLabel('Proyecto activo').selectOption('b');await count(0);await card('library').getByRole('button',{name:'Hito pendiente',exact:true}).waitFor();
  const response=page.waitForResponse(r=>new URL(r.url()).pathname==='/api/projects/a/office');lateRead.resolve();await response;
  await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));await count(0);
  assert.equal(await page.locator('[data-office-room]').count(),0);
  // A successful late write belongs only to its original project, even after navigation.
  await page.getByLabel('Proyecto activo').selectOption('a');await count(3);projects.a.metrics.useful_answers=3;await refresh();
  const lateWrite=deferred();holdWrite=lateWrite;await card('strategy').getByRole('button',{name:'Autorizar expansión',exact:true}).click();
  await card('strategy').getByRole('button',{name:'Guardando…',exact:true}).waitFor();await page.getByLabel('Proyecto activo').selectOption('b');await count(0);
  const written=page.waitForResponse(r=>new URL(r.url()).pathname==='/api/projects/a/office/strategy');lateWrite.resolve();await written;await count(0);
  assert.equal(projects.a.authorized.has('strategy'),true);assert.equal(projects.b.authorized.size,0);
  await page.getByLabel('Proyecto activo').selectOption('a');await count(4);
  failRead=true;await refresh();await panel.getByRole('alert').getByText(/progreso no disponible/).waitFor();await count(4);assert.equal(await input.inputValue(),'Borrador privado que debe conservarse');await refresh();
  invalidRead=true;await refresh();await panel.getByRole('alert').getByText(/crecimiento de este proyecto/).waitFor();await count(4);await refresh();
  await page.setViewportSize({width:390,height:844});await count(4);await page.waitForTimeout(100);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),true,'Growth controls must fit a mobile viewport');
  const mobileLabels=await page.locator('[data-office-room]').evaluateAll(elements=>elements.map(element=>{const rect=element.getBoundingClientRect();return{x:rect.x,y:rect.y,right:rect.right,bottom:rect.bottom};}));
  for(let i=0;i<mobileLabels.length;i++)for(let j=i+1;j<mobileLabels.length;j++){const a=mobileLabels[i],b=mobileLabels[j];assert(a.right<=b.x||b.right<=a.x||a.bottom<=b.y||b.bottom<=a.y,'Mobile room buttons must remain separate and tappable');}
  await scene.screenshot({path:'/tmp/anto-expansion-mobile.png'});
  assert.equal(await page.locator('[data-office-room]').count(),4,'Reloads and folds do not duplicate labels');
  assert.deepEqual(calls.filter(call=>call.method!=='GET'&&!(call.method==='PUT'&&/\/office\//.test(call.name))),[],'Only explicit office authorizations may write; zero inference requests');
  assert.deepEqual(unexpected,[]);assert.deepEqual(errors,[]);
  console.log('PASS WebGL real + API MOCK: hitos sin autoexpansión, autorización explícita y persistencia, cuatro alas y encuadre, rutas/borradores conservados, navegación, replegar/reautorizar, 409, aislamiento ante GET/PUT tardíos, fallos/reintentos, respuesta extranjera rechazada y móvil. Cero inferencias.');
  await context.close();
 }finally{if(browser)await browser.close();await new Promise(resolve=>fixture.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
