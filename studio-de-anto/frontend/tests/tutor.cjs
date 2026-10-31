// Browser regression using temporary in-memory state and synthetic APIs only.
const assert=require('node:assert/strict');
const {createServer}=require('node:http');
const fs=require('node:fs/promises');
const path=require('node:path');
const {chromium}=require('playwright');
const initial=()=>({enabled:false,level:'inicial',goal:'',exercises:[],memories:[]});
(async()=>{
 const dist=path.resolve(__dirname,'../dist');
 const server=createServer(async(req,res)=>{try{
  const target=path.resolve(dist,'.'+new URL(req.url,'http://fixture').pathname.replace(/^\/$/,'/index.html'));
  if(!target.startsWith(dist+path.sep))throw Error('Invalid asset');
  const data=await fs.readFile(target);
  res.writeHead(200,{'Content-Type':{'.html':'text/html','.js':'application/javascript','.css':'text/css'}[path.extname(target)]||'application/octet-stream'});res.end(data);
 }catch{res.writeHead(404);res.end();}});
 await new Promise(done=>server.listen(0,'127.0.0.1',done));
 const base='http://127.0.0.1:'+server.address().port;let browser;
 try{
  browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox']});
  const page=await browser.newPage({viewport:{width:1500,height:1100}}),errors=[],calls=[],states={a:initial(),b:initial()};let rejectSave=true;
  page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>{window.EventSource=class{close(){}};});
  await page.route('**/*',async route=>{
   const req=route.request(),url=new URL(req.url()),p=url.pathname,method=req.method();
   if(url.origin!==base)return route.abort();
   if(!p.startsWith('/api/'))return route.continue();
   calls.push({p,method,body:req.postDataJSON()});
   const json=(body,status=200)=>route.fulfill({status,contentType:'application/json',body:JSON.stringify(body)});
   const history=p.match(/^\/api\/projects\/([^/]+)\/messages\/search$/);
   if(history){
    await new Promise(done=>setTimeout(done,150));
    if(url.searchParams.get('q')==='error')return json({detail:'MOCK: búsqueda fallida'},503);
    const older=url.searchParams.has('before');
    return json({messages:[{id:older?'older':'old',agent:'vera',role:'assistant',created:'2026-10-01T00:00:00Z',excerpt:older?'Coincidencia anterior':'Acción antigua: 20% _ [x]'}],has_more:!older,before_cursor:older?null:'old'});
   }
   const tutor=p.match(/^\/api\/projects\/([^/]+)\/tutor$/);
   if(tutor){
    if(method==='PUT'){
     await new Promise(done=>setTimeout(done,150));
     if(rejectSave)return json({detail:'MOCK: guardado rechazado'},503);
     states[tutor[1]]=req.postDataJSON();
    }
    return json(states[tutor[1]]);
   }
   if(p==='/api/projects')return json([{id:'a',name:'Project A'},{id:'b',name:'Project B'}]);
   if(p==='/api/settings')return json({provider:'gemini',agents:['anto','vera'].map(id=>({id,name:id.toUpperCase(),role:'MOCK',model:'gemini-mock',instructions:'',color:'#9684bc',tools:[]})),ollama_url:'',openai_url:''});
   if(p==='/api/models')return json({provider:'gemini',connected:true,inference_verified:true,models:['gemini-mock'],credential:{configured:true}});
   if(p.endsWith('/office'))return json({detail:'Legacy fixture'},404);
   if(['/api/messages','/api/feedback','/api/runs','/api/files','/api/artifacts'].includes(p))return json([]);
   throw Error('Unmocked API: '+method+' '+p);
  });
  await page.goto(base);
  const panel=page.locator('.tutor-panel'),toggle=panel.locator('summary'),goal=panel.getByRole('textbox',{name:'Objetivo de aprendizaje',exact:true});
  await toggle.waitFor();assert.equal(calls.filter(c=>c.p.endsWith('/tutor')).length,0,'Closed tutor does not fetch');
  await toggle.click();await goal.waitFor();
  await goal.fill('Aprender porcentajes');
  await panel.getByLabel('Activar tutor en el chat de este proyecto',{exact:true}).check();
  await panel.getByLabel('Nuevo ejercicio',{exact:true}).fill('Calcula el 20% de 50');
  await panel.getByRole('button',{name:'Añadir ejercicio',exact:true}).click();
  await panel.getByLabel('Mi respuesta',{exact:true}).fill('10');
  await toggle.click();await page.waitForFunction(()=>!document.querySelector('.tutor-panel').open);
  await toggle.click();await page.waitForFunction(()=>document.querySelector('.tutor-panel').open);
  assert.equal(await goal.inputValue(),'Aprender porcentajes','Closing preserves unsaved goal');
  assert.equal(await panel.getByRole('textbox',{name:'Mi respuesta',exact:true}).inputValue(),'10');
  assert.equal(calls.filter(c=>c.p.endsWith('/tutor')&&c.method==='GET').length,1,'Reopening does not reload over edits');
  const save=panel.getByRole('button',{name:'Guardar tutor y progreso',exact:true});
  await save.evaluate(b=>{b.click();b.click();});
  await panel.getByRole('alert').getByText('MOCK: guardado rechazado',{exact:true}).waitFor();
  assert.equal(calls.filter(c=>c.method==='PUT').length,1,'Save cannot be sent twice');
  assert.equal(await goal.inputValue(),'Aprender porcentajes');
  assert.equal(states.a.goal,'','A failed save leaves persisted state unchanged');
  await toggle.click();await page.waitForFunction(()=>!document.querySelector('.tutor-panel').open);
  await toggle.click();await page.waitForFunction(()=>document.querySelector('.tutor-panel').open);
  assert.equal(await goal.inputValue(),'Aprender porcentajes','Failed save remains editable after reopening');
  rejectSave=false;await save.click();await panel.getByText('Configuración guardada',{exact:true}).waitFor();
  assert.equal(states.a.exercises[0].answer,'10');
  await page.getByLabel('Proyecto activo').selectOption('b');
  await toggle.click();await goal.waitFor();assert.equal(await goal.inputValue(),'','Projects do not share tutor state');
  await page.getByLabel('Proyecto activo').selectOption('a');
  await toggle.click();await goal.waitFor();assert.equal(await goal.inputValue(),'Aprender porcentajes');
  await page.reload();await toggle.click();await goal.waitFor();
  assert.equal(await goal.inputValue(),'Aprender porcentajes','Explicit save survives reload');
  assert.equal(calls.filter(c=>c.method==='PUT').length,2,'No implicit saves');
  const history=page.locator('.history-search'),searchInput=history.getByRole('textbox',{name:'Texto del historial',exact:true});
  assert.equal(calls.filter(c=>c.p.endsWith('/messages/search')).length,0,'History search requires explicit submit');
  await history.locator('summary').click();await searchInput.fill('20% _ [x]');
  await history.getByRole('button',{name:'Buscar historial guardado',exact:true}).evaluate(b=>{b.click();b.click();});
  await history.getByText('Acción antigua: 20% _ [x]',{exact:true}).waitFor();
  assert.equal(calls.filter(c=>c.p.endsWith('/messages/search')).length,1,'History double click sends one request');
  await history.getByRole('button',{name:'Cargar más coincidencias',exact:true}).click();
  await history.getByText('Coincidencia anterior',{exact:true}).waitFor();
  assert.equal(await history.locator('li').count(),2);
  await searchInput.fill('error');await history.getByRole('button',{name:'Buscar historial guardado',exact:true}).click();
  await history.getByRole('alert').getByText('MOCK: búsqueda fallida',{exact:true}).waitFor();
  assert.equal(await searchInput.inputValue(),'error');
  await page.getByLabel('Proyecto activo').selectOption('b');
  await history.locator('summary').click();assert.equal(await searchInput.inputValue(),'');
  assert.equal(await history.locator('li').count(),0,'Project switch clears history results');
  assert.deepEqual(errors,[]);
  console.log('PASS tutor and history browser: preserved edits, single save, project isolation, persistence, explicit history search, pagination and errors, no model calls');
 }finally{await browser?.close();await new Promise(done=>server.close(done));}
})().catch(e=>{console.error(e);process.exitCode=1;});
