// All API responses are synthetic and external origins are blocked.
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const base=process.env.ANTO_TEST_URL||'http://127.0.0.1:8791';
if(!['127.0.0.1','localhost','::1'].includes(new URL(base).hostname))throw Error('Use an isolated loopback frontend');
const draftKey=(project,agent)=>'studio-de-anto:chat-draft:v1:'+JSON.stringify([project,agent]);
const savedDraft=(page,project,agent)=>page.evaluate(key=>JSON.parse(localStorage.getItem(key)||'null'),draftKey(project,agent));
const waitDraft=(page,project,agent,text)=>page.waitForFunction(({key,text})=>JSON.parse(localStorage.getItem(key)||'null')?.text===text,{key:draftKey(project,agent),text});

(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox']});
 try{
  const context=await browser.newContext({viewport:{width:1440,height:1050},reducedMotion:'reduce'});
  await context.addInitScript(()=>{window.EventSource=class{close(){}};});
  const page=await context.newPage(),errors=[],posts=[];
  page.on('pageerror',error=>errors.push(error.message));
  const agents=['anto','vera'].map(id=>({id,name:id.toUpperCase(),role:'MOCK',color:'#9684bc',model:'gemini-mock',instructions:'MOCK-private-settings-marker',tools:[]}));
  let directorFails=true,chatMode='ok',releaseChat=null;
  await context.route('**/*',async route=>{
   const request=route.request(),url=new URL(request.url()),path=url.pathname;
   if(url.origin!==new URL(base).origin)return route.abort();
   if(!path.startsWith('/api/'))return route.continue();
   const json=(body,status=200)=>route.fulfill({status,contentType:'application/json',body:JSON.stringify(body)});
   if(request.method()==='POST')posts.push({path,body:request.postDataJSON()});
   if(/^\/api\/projects\/[^/]+\/office$/.test(url.pathname))return route.fulfill({status:404,contentType:'application/json',body:JSON.stringify({detail:'Legacy fixture without expansion'})});
   if(path==='/api/projects')return json([{id:'draft-project',name:'Proyecto de borradores'},{id:'other-project',name:'Otro proyecto'}]);
   if(path==='/api/settings')return json({provider:'gemini',agents,ollama_url:'',openai_url:'',api_key:'MOCK-private-settings-marker'});
   if(path==='/api/models')return json({provider:'gemini',connected:true,inference_verified:true,models:['gemini-mock'],endpoint:'MOCK',credential:{configured:true,valid_format:true,source:'MOCK',accepted_names:[]}});
   if(path==='/api/health')return json({app:'STUDIO DE ANTO',api_version:'1',features:['director-v1','context-draft-v1']});
   if(path==='/api/director'){
    if(directorFails)return route.abort('failed');
    return json({id:'mock-director',request:request.postDataJSON().request,status:'Pendiente',plan:JSON.stringify({mode:'director',tasks:[]}),result:null,tasks:[],director:{user_message_id:null,assistant_message_id:null,max_api_calls:7}});
   }
   if(path==='/api/chat'){
    if(chatMode==='network')return route.abort('failed');
    if(chatMode==='deferred')await new Promise(resolve=>{releaseChat=resolve;});
    return route.fulfill({contentType:'text/event-stream',body:'data: '+JSON.stringify({token:'MOCK: respuesta guardada'})+'\n\ndata: '+JSON.stringify({done:true,message_id:'answer-'+posts.length,model:'gemini-mock',provider:'gemini'})+'\n\n'});
   }
   if(path==='/api/messages')return json([{id:'existing-'+url.searchParams.get('agent'),role:'assistant',agent:url.searchParams.get('agent'),content:'MOCK: historial que debe conservarse'}]);
   if(['/api/feedback','/api/runs','/api/files','/api/artifacts'].includes(path))return json([]);
   throw Error('Unexpected API request: '+request.method()+' '+path);
  });
  await page.goto(base);
  const input=page.getByLabel('Mensaje',{exact:true}),draftStatus=page.getByRole('status',{name:'Estado del borrador',exact:true}),toggle=page.getByRole('checkbox',{name:'Delegar al equipo',exact:true});
  await page.getByText('MOCK: historial que debe conservarse',{exact:true}).waitFor();
  await input.fill('MOCK: borrador de ANTO');await waitDraft(page,'draft-project','anto','MOCK: borrador de ANTO');
  await draftStatus.waitFor();
  await page.locator('.team-person').filter({hasText:'VERA'}).click();
  assert.equal(await input.inputValue(),'','Another agent starts with its own empty draft');
  await input.fill('MOCK: borrador de VERA');await waitDraft(page,'draft-project','vera','MOCK: borrador de VERA');
  await page.getByLabel('Proyecto activo').selectOption('other-project');
  assert.equal(await input.inputValue(),'','Another project cannot inherit the previous project draft');
  await input.fill('MOCK: otro proyecto');await waitDraft(page,'other-project','vera','MOCK: otro proyecto');
  await page.reload();await page.getByText('MOCK: historial que debe conservarse',{exact:true}).waitFor();
  assert.equal(await page.getByLabel('Proyecto activo').inputValue(),'other-project');
  assert.equal(await input.inputValue(),'MOCK: otro proyecto','Reload restores the last valid context and its draft');
  assert.equal(await toggle.count(),0,'Reload restores VERA rather than sending a draft through ANTO');
  await page.getByLabel('Proyecto activo').selectOption('draft-project');
  assert.equal(await input.inputValue(),'MOCK: borrador de VERA');
  await page.getByRole('button',{name:'Descartar borrador',exact:true}).click();
  assert.equal(await input.inputValue(),'');
  assert.equal(await savedDraft(page,'draft-project','vera'),null);
  assert.equal((await savedDraft(page,'draft-project','anto')).text,'MOCK: borrador de ANTO');
  assert.equal((await savedDraft(page,'other-project','vera')).text,'MOCK: otro proyecto');
  await page.getByText('MOCK: historial que debe conservarse',{exact:true}).waitFor();
  assert.equal(posts.length,0,'Writing, restoring, switching and discarding never call a model or modify history');
  await page.locator('.team-person').filter({hasText:'ANTO'}).click();
  assert.equal(await input.inputValue(),'MOCK: borrador de ANTO');
  await input.fill('MOCK: encargo pendiente de confirmación');await toggle.check();
  await page.getByTitle('Enviar',{exact:true}).click();
  await page.getByRole('alert').getByText(/No se pudo contactar con el servidor/).waitFor();
  const firstPost=posts.at(-1);assert.equal(firstPost.path,'/api/director');
  await page.reload();await page.getByText('MOCK: historial que debe conservarse',{exact:true}).waitFor();
  assert.equal(await input.inputValue(),'MOCK: encargo pendiente de confirmación');
  assert.equal(await toggle.isChecked(),false,'Delegation always requires explicit opt-in after reload');
  assert.equal(posts.length,1,'Reload never resends an ambiguous Director request');
  directorFails=false;await toggle.check();await page.getByTitle('Enviar',{exact:true}).click();
  await page.getByText('ANTO ha preparado el encargo del equipo. Puedes seguir el progreso o cancelarlo aquí.',{exact:true}).waitFor();
  assert.equal(posts.at(-1).body.request_id,firstPost.body.request_id,'Explicit retry after reload reuses the request identity');
  assert.equal(await input.inputValue(),'');assert.equal(await savedDraft(page,'draft-project','anto'),null);

  chatMode='deferred';await input.fill('MOCK: mensaje normal');await page.getByTitle('Enviar',{exact:true}).click();
  await page.waitForFunction(()=>document.querySelector('[title="Cancelar conversación"]'));
  await input.fill('MOCK: siguiente mensaje mientras responde');await waitDraft(page,'draft-project','anto','MOCK: siguiente mensaje mientras responde');
  while(!releaseChat)await new Promise(resolve=>setTimeout(resolve,10));
  releaseChat();await page.getByTitle('Enviar',{exact:true}).waitFor();
  assert.equal(await input.inputValue(),'MOCK: siguiente mensaje mientras responde','The previous response cannot clear a newly typed draft');
  assert.equal((await savedDraft(page,'draft-project','anto')).text,'MOCK: siguiente mensaje mientras responde');
  chatMode='ok';await page.getByTitle('Enviar',{exact:true}).click();await page.getByTitle('Enviar',{exact:true}).waitFor();
  assert.equal(await input.inputValue(),'');assert.equal(await savedDraft(page,'draft-project','anto'),null);
  chatMode='network';await input.fill('MOCK: conservar tras fallo');await page.getByTitle('Enviar',{exact:true}).click();
  await page.getByRole('alert').getByText(/No se pudo contactar con el servidor/).waitFor();
  assert.equal(await input.inputValue(),'MOCK: conservar tras fallo');
  assert.equal((await savedDraft(page,'draft-project','anto')).text,'MOCK: conservar tras fallo');
  const stored=await page.evaluate(()=>JSON.stringify(Object.fromEntries(Object.keys(localStorage).map(key=>[key,localStorage.getItem(key)]))));
  assert.ok(!stored.includes('MOCK-private-settings-marker'),'Drafts never persist settings or credentials');
  await page.setViewportSize({width:390,height:844});
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'Draft controls fit mobile');

  const blocked=await context.newPage();blocked.on('pageerror',error=>errors.push(error.message));
  await blocked.addInitScript(()=>{
   Storage.prototype.setItem=function(){throw new DOMException('MOCK blocked storage','QuotaExceededError');};
   Storage.prototype.getItem=function(){throw new DOMException('MOCK blocked storage','SecurityError');};
  });
  await blocked.goto(base);await blocked.getByLabel('Mensaje',{exact:true}).fill('MOCK: texto solo en memoria');
  await blocked.getByRole('status',{name:'Estado del borrador',exact:true}).getByText('No se pudo guardar el borrador en este navegador. Copia tu texto antes de salir.',{exact:true}).waitFor();
  assert.equal(await blocked.getByLabel('Mensaje',{exact:true}).inputValue(),'MOCK: texto solo en memoria');
  assert.deepEqual(errors,[]);
  console.log('PASS MOCK: drafts isolated by project/agent, reload recovery, explicit Director retry identity, discard without history deletion, send/failure/new typing, blocked storage and mobile; zero provider calls.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
