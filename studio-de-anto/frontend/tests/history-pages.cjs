// Synthetic paginated conversations only. All external origins and model calls blocked.
const assert=require('node:assert/strict');
const {createServer}=require('node:http');
const fs=require('node:fs/promises');
const path=require('node:path');
const {chromium}=require('playwright');
const deferred=()=>{let resolve;const promise=new Promise(done=>resolve=done);return {promise,resolve};};
(async()=>{
 const dist=path.resolve(__dirname,'../dist');
 const fixture=createServer(async(req,res)=>{
  try{const url=new URL(req.url,'http://fixture');if(url.pathname.startsWith('/api/'))throw Error('API must be mocked');
   const file=path.resolve(dist,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));if(!file.startsWith(dist+path.sep))throw Error('Bad asset');
   const body=await fs.readFile(file);res.writeHead(200,{'Content-Type':{'.js':'application/javascript','.css':'text/css','.html':'text/html'}[path.extname(file)]||'application/octet-stream'});res.end(body);
  }catch{res.writeHead(404);res.end('Missing fixture asset');}
 });
 await new Promise((resolve,reject)=>{fixture.once('error',reject);fixture.listen(0,'127.0.0.1',resolve);});
 const base='http://127.0.0.1:'+fixture.address().port;
 let browser;
 try{
  browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox']});
  const context=await browser.newContext({viewport:{width:1440,height:1050},reducedMotion:'reduce'}),page=await context.newPage(),errors=[],calls=[],unexpected=[];
  page.on('pageerror',e=>errors.push(e.message));
  await context.addInitScript(()=>{window.__historySources=[];window.EventSource=class{constructor(){window.__historySources.push(this);}close(){this.closed=true;}};const original=window.fetch.bind(window);window.fetch=(input,init)=>{const url=typeof input==='string'?input:input instanceof URL?input.href:input.url;return original(input,url.includes('/api/messages')&&init?{...init,signal:undefined}:init);};});
  const agents=['anto','atlas','vera','bruno','iris','leo'].map(id=>({id,name:id.toUpperCase(),role:'MOCK',color:'#9684bc',model:'gemini-mock',instructions:'MOCK',tools:[]}));
  const messages=Array.from({length:85},(_,i)=>({id:'a-'+String(i+1).padStart(3,'0'),role:i%2?'assistant':'user',content:'Mensaje '+String(i+1).padStart(3,'0')+' · '+('Texto de prueba de lectura. '.repeat(5)),created:'2026-10-28T12:00:00Z'}));
  let hold=null,failOlder=false,failInitial=false,legacy=false,directorRun=null;
  await context.route('**/*',async route=>{
   const request=route.request(),url=new URL(request.url()),name=url.pathname;
   if(url.origin!==base){unexpected.push(request.url());return route.abort();}
   if(!name.startsWith('/api/'))return route.continue();
   calls.push({path:name,method:request.method(),query:url.search});
   const json=(value,status=200)=>route.fulfill({status,contentType:'application/json',body:JSON.stringify(value)});
   if(request.method()!=='GET'){unexpected.push(request.method()+' '+name);return json({detail:'No writes expected'},500);}
   if(/^\/api\/projects\/[^/]+\/office$/.test(name))return json({detail:'Legacy fixture without expansion'},404);
   if(name==='/api/projects')return json([{id:'project-a',name:'MOCK A'},{id:'project-b',name:'MOCK B'}]);
   if(name==='/api/settings')return json({provider:'gemini',agents,ollama_url:'',openai_url:''});
   if(name==='/api/models')return json({provider:'gemini',connected:false,models:[],credential:{configured:false}});
   if(name==='/api/messages'){
    const pid=url.searchParams.get('project'),aid=url.searchParams.get('agent'),before=url.searchParams.get('before');
    if(!before&&failInitial){failInitial=false;return json({detail:'MOCK: carga inicial fallida'},503);}
    const source=pid==='project-a'&&aid==='anto'?messages:[{id:pid+'-'+aid,role:'assistant',content:'Historial exclusivo '+pid+' '+aid}];
    if(legacy)return json(source);
    if(before){const gate=hold;hold=null;if(gate)await gate.promise;if(failOlder){failOlder=false;return json({detail:'MOCK: anteriores no disponibles'},503);}}
    const edge=before?source.findIndex(item=>item.id===before):source.length,start=Math.max(0,edge-40),batch=source.slice(start,edge);
    return json({messages:batch,has_more:start>0,before_cursor:start>0?batch[0].id:null});
   }
   if(name==='/api/runs')return json(directorRun?[directorRun]:[]);
   if(['/api/feedback','/api/files','/api/artifacts'].includes(name))return json([]);
   unexpected.push(name);return json([]);
  });
  await page.goto(base);await page.getByText(/^Mensaje 085/).waitFor();
  const old=page.getByRole('button',{name:'Cargar mensajes anteriores',exact:true}),input=page.getByLabel('Mensaje',{exact:true});
  assert.equal(await page.locator('.message').count(),40);assert.equal(await page.getByText(/^Mensaje 001/).count(),0);
  assert(calls.some(call=>call.path==='/api/messages'&&call.query.includes('page_size=40')));
  await input.fill('Borrador que debe conservarse');
  await page.locator('.chat-body').evaluate(el=>{el.scrollTop=0;});
  const anchor=page.locator('[data-message-key="a-046"]');
  const beforeY=(await anchor.boundingBox()).y;
  await old.click();await page.getByText(/^Mensaje 006/).waitFor();
  assert.equal(await page.locator('.message').count(),80);assert.equal(await input.inputValue(),'Borrador que debe conservarse');
  assert(Math.abs((await anchor.boundingBox()).y-beforeY)<3,'Loading older messages must preserve the reading anchor');
  failOlder=true;await old.click();await page.getByRole('alert').getByText('MOCK: anteriores no disponibles',{exact:true}).waitFor();
  assert.equal(await page.locator('.message').count(),80);assert.equal(await input.inputValue(),'Borrador que debe conservarse');
  await old.click();await page.getByText(/^Mensaje 001/).waitFor();assert.equal(await page.locator('.message').count(),85);assert.equal(await old.count(),0);
  const keys=await page.locator('.message').evaluateAll(nodes=>nodes.map(n=>n.dataset.messageKey));assert.equal(new Set(keys).size,85);
  // Refresh returns the most recent page; a late previous-page response may not cross contexts.
  await page.reload();await page.getByText(/^Mensaje 085/).waitFor();assert.equal(await input.inputValue(),'Borrador que debe conservarse');
  const gate=deferred();hold=gate;await old.click();await page.getByRole('button',{name:'Cargando anteriores…',exact:true}).waitFor();
  await page.getByLabel('Proyecto activo').selectOption('project-b');await page.getByText('Historial exclusivo project-b anto',{exact:true}).waitFor();
  const late=page.waitForResponse(r=>new URL(r.url()).pathname==='/api/messages'&&new URL(r.url()).searchParams.has('before'));gate.resolve();await late;
  await page.evaluate(()=>new Promise(done=>requestAnimationFrame(()=>requestAnimationFrame(done))));
  assert.equal(await page.getByText(/^Mensaje 006/).count(),0);assert.equal(await page.locator('.message').count(),1);assert.equal(await input.inputValue(),'');
  await page.getByLabel('Proyecto activo').selectOption('project-a');await page.getByText(/^Mensaje 085/).waitFor();assert.equal(await input.inputValue(),'Borrador que debe conservarse');
  await page.locator('.team-person').filter({hasText:'VERA'}).click();await page.getByText('Historial exclusivo project-a vera',{exact:true}).waitFor();assert.equal(await input.inputValue(),'');
  failInitial=true;await page.locator('.team-person').filter({hasText:'ANTO'}).click();await page.getByRole('button',{name:'Volver a cargar conversación',exact:true}).waitFor();
  await page.getByRole('button',{name:'Volver a cargar conversación',exact:true}).click();await page.getByText(/^Mensaje 085/).waitFor();assert.equal(await input.inputValue(),'Borrador que debe conservarse');
  legacy=true;await page.reload();await page.getByText(/^Mensaje 085/).waitFor();assert.equal(await page.locator('.message').count(),85);assert.equal(await old.count(),0);
  // A new Director result is reconciled from a bounded page without loading all old history.
  legacy=false;await page.reload();await page.getByText(/^Mensaje 085/).waitFor();
  messages.push({id:'director-user',role:'user',content:'Objetivo delegado reciente'},{id:'director-answer',role:'assistant',content:'Síntesis reciente del equipo'});
  directorRun={id:'director-run',request:'Objetivo delegado reciente',status:'Completado',plan:JSON.stringify({mode:'director',tasks:[]}),result:null,tasks:[],details_included:true,director:{user_message_id:'director-user',assistant_message_id:'director-answer',max_api_calls:7}};
  await page.evaluate(()=>window.__historySources.findLast(source=>!source.closed).onmessage({data:JSON.stringify({seq:1,kind:'run',agent:'anto',run:'director-run',payload:JSON.stringify({status:'Completado',agent_status:'Disponible'}),created:'2026-10-28T12:30:00Z'})}));
  await page.locator('.message.assistant').filter({hasText:'Síntesis reciente del equipo'}).waitFor();
  assert.equal(await page.locator('.message').count(),42);assert.equal(await page.locator('[data-message-key="director-answer"]').count(),1);
  assert(calls.filter(call=>call.path==='/api/messages').every(call=>new URLSearchParams(call.query).get('page_size')==='40'));
  await page.setViewportSize({width:390,height:844});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  assert.deepEqual(errors,[]);assert.deepEqual(unexpected,[]);assert(calls.every(call=>call.method==='GET'));
  console.log('PASS MOCK: páginas acotadas, posición de lectura, deduplicación, reintento, respuestas tardías aisladas, borradores por contexto y compatibilidad anterior. Cero inferencias.');
 }finally{if(browser)await browser.close();await new Promise(resolve=>fixture.close(resolve));}
})().catch(e=>{console.error(e);process.exitCode=1;});
