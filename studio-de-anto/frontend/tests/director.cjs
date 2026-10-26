// Director UI protocol regression. Every API and event is synthetic; no model calls.
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const base=process.env.ANTO_TEST_URL||'http://127.0.0.1:8791';
if(!['127.0.0.1','localhost','::1'].includes(new URL(base).hostname))throw Error('Use an isolated loopback frontend');

(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 try{
  const page=await browser.newPage({viewport:{width:1512,height:1100}}),errors=[],posts=[],runs=[],messages=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.addInitScript(()=>{window.__directorEvents=[];window.EventSource=class{
   constructor(){window.__directorEvents.push(this);}close(){this.onmessage=null;}
  };});
  const agents=['anto','atlas','vera','bruno','iris','leo'].map(id=>({id,name:id.toUpperCase(),role:'MOCK',color:'#9684bc',model:'gemini-mock',instructions:'MOCK',tools:[]}));
  let networkFailed=false,clarificationFailed=false,sequence=0;
  const emit=async(run,status,extra={})=>page.evaluate(event=>{for(const source of window.__directorEvents)source.onmessage?.({data:JSON.stringify(event)});},{seq:++sequence,kind:extra.logical_id?'task':'run',project:'mock-project',run:run.id,agent:extra.agent||'anto',payload:JSON.stringify({status,...extra}),created:new Date().toISOString()});
  function makeRun(request){
   const id='director-'+(runs.length+1),tasks=[{id:'research',agent:'atlas',description:'Investigar opciones concretas',depends_on:[]},{id:'draft',agent:'leo',description:'Redactar propuesta breve',depends_on:['research']},{id:'synthesis',agent:'anto',description:'Reunir resultados del equipo',depends_on:['research','draft']}];
   const run={id,project:'mock-project',request,status:'En ejecución',plan:JSON.stringify({mode:'director',objective:request,analysis:null,tasks}),result:null,director:{user_message_id:id+'_director_user',assistant_message_id:null,max_api_calls:7},tasks:tasks.map(task=>({id:id+'-'+task.id,status:'Pendiente',payload:JSON.stringify(task)}))};
   runs.unshift(run);messages.push({id:run.director.user_message_id,role:'user',content:request,agent:'anto'});return run;
  }
  await page.route('**/*',async route=>{
   const request=route.request(),url=new URL(request.url()),path=url.pathname,method=request.method();
   if(url.origin!==new URL(base).origin)return route.abort();
   if(!path.startsWith('/api/'))return route.continue();
   const json=(body,status=200)=>route.fulfill({status,contentType:'application/json',body:JSON.stringify(body)});
   if(method==='POST')posts.push({path,body:request.postDataJSON()});
   if(path==='/api/health')return json({app:'STUDIO DE ANTO',api_version:'1',release:'1.4.1',features:['director-v1','context-draft-v1']});
   if(path==='/api/projects')return json([{id:'mock-project',name:'PRUEBA MOCK · Director'},{id:'other-project',name:'Otro proyecto'}]);
   if(path==='/api/settings')return json({provider:'gemini',agents,ollama_url:'',openai_url:''});
   if(path==='/api/models')return json({provider:'gemini',connected:true,inference_verified:true,models:['gemini-mock'],endpoint:'MOCK',credential:{configured:true,valid_format:true,source:'MOCK',accepted_names:[]}});
   if(path==='/api/files')return json([{id:'pdf-mock',name:'documento.pdf',kind:'document',size:100}]);
   if(path==='/api/messages')return json(url.searchParams.get('project')==='mock-project'&&url.searchParams.get('agent')==='anto'?messages:[]);
   if(path==='/api/runs')return json(url.searchParams.get('project')==='mock-project'?runs:[]);
   if(path.startsWith('/api/runs/')){
    const id=path.split('/')[3],run=runs.find(item=>item.id===id);assert.ok(run);
    if(path.endsWith('/cancel')){run.status='Cancelado';return json({cancelled:true});}
    return json(run);
   }
   if(path==='/api/director'){
    const body=request.postDataJSON();assert.equal(body.confirmed,true);assert.equal(body.project,'mock-project');assert.ok(body.request_id);
    if(body.request.startsWith('MOCK: ')&&!networkFailed){networkFailed=true;return route.abort('failed');}
    if(body.request.startsWith('MOCK aclaración')&&!clarificationFailed){clarificationFailed=true;return json({detail:'MOCK: precisa el objetivo antes de delegar.'},422);}
    return json(makeRun(body.request));
   }
   if(['/api/feedback','/api/artifacts'].includes(path))return json([]);
   throw Error('Unexpected API request in Director regression: '+method+' '+path);
  });
  await page.goto(base);
  const toggle=page.getByRole('checkbox',{name:'Delegar al equipo',exact:true}),input=page.getByLabel('Mensaje',{exact:true});
  await toggle.waitFor();assert.equal(await toggle.isChecked(),false);
  await input.fill('Borrador conservado al cambiar de agente');
  await page.locator('.team-person').filter({hasText:'VERA'}).click();
  assert.equal(await toggle.count(),0,'Delegation belongs only to ANTO');
  assert.equal(await input.inputValue(),'','Each agent keeps a separate draft');
  await page.locator('.team-person').filter({hasText:'ANTO'}).click();
  assert.equal(await input.inputValue(),'Borrador conservado al cambiar de agente','Returning to ANTO restores its unsent draft');
  await toggle.check();
  await page.getByText(/máximo 7 llamadas a tu API/).waitFor();
  assert.equal(await input.getAttribute('maxlength'),'2000');
  await page.getByLabel('Elegir PDF o imagen existente',{exact:true}).click();
  await page.locator('.attachment-choice').getByText('documento.pdf',{exact:true}).click();
  await input.fill('MOCK: prepara una propuesta de campaña');
  await page.getByTitle('Enviar',{exact:true}).click();
  await page.getByRole('alert').getByText('La delegación automática admite solo texto. Para documentos o cálculos, usa Datos/Tareas y revisa el plan.',{exact:true}).waitFor();
  assert.equal(posts.length,0,'An attachment cannot silently enter an automatic delegation');
  await page.getByRole('button',{name:'Preparar tarea revisable',exact:true}).click();
  await page.getByRole('heading',{name:'Un nuevo objetivo',exact:true}).waitFor();
  assert.equal(posts.length,0,'Preparing a reviewable task does not call a model');
  await page.getByRole('button',{name:'Oficina',exact:true}).click();
  await page.getByRole('button',{name:'Quitar adjunto documento.pdf',exact:true}).click();
  await page.getByTitle('Enviar',{exact:true}).click();
  await page.getByRole('alert').waitFor();
  assert.equal(await input.inputValue(),'MOCK: prepara una propuesta de campaña','Network errors preserve the prompt');
  assert.equal(await toggle.isChecked(),true);
  await page.getByTitle('Enviar',{exact:true}).click();
  await page.locator('.director-run').first().waitFor();
  assert.equal(posts.filter(item=>item.path==='/api/director').length,2);
  assert.equal(posts[0].body.request_id,posts[1].body.request_id,'Ambiguous network failures reuse the same request id');
  assert.equal(posts.filter(item=>item.path==='/api/chat').length,0);
  assert.equal(await toggle.isChecked(),false,'The next prompt defaults back to normal conversation');
  await page.locator('.message.user').getByText('MOCK: prepara una propuesta de campaña',{exact:true}).waitFor();
  assert.equal(await page.locator('.message.user').count(),1,'Accepted user messages come only from persisted metadata');
  const first=runs[0];await emit(first,'Completado',{agent:'atlas',logical_id:'research'});
  await page.locator('.director-run li').filter({hasText:'Investigar opciones concretas'}).getByText('Completado',{exact:true}).waitFor();
  first.status='Completado';first.director.assistant_message_id=first.id+'_director_answer';first.result=JSON.stringify({kind:'director',summary:'MOCK: síntesis única del equipo'});
  for(const task of first.tasks)task.status='Completado';
  messages.push({id:first.director.assistant_message_id,role:'assistant',agent:'anto',content:'MOCK: síntesis única del equipo',model:'gemini-mock',provider:'gemini'});
  await emit(first,'Completado');
  try{await page.locator('.message.assistant').getByText('MOCK: síntesis única del equipo',{exact:true}).waitFor();}
  catch(error){console.error('Director MOCK final UI:',await page.locator('.chat-body').innerText());throw error;}
  await emit(first,'Completado');
  await page.getByRole('button',{name:'Ver tareas',exact:true}).first().click();
  assert.equal(await page.getByText(/Estadístico:/).count(),0,'Textual director results are not presented as statistics');
  await page.getByRole('button',{name:'Oficina',exact:true}).click();
  assert.equal(await page.locator('.message.assistant').count(),1,'Repeated terminal events never duplicate the synthesis');
  await toggle.check();await input.fill('MOCK aclaración: nuevo encargo');
  await page.getByTitle('Enviar',{exact:true}).click();
  await page.getByRole('alert').getByText('MOCK: precisa el objetivo antes de delegar.',{exact:true}).waitFor();
  assert.equal(await input.inputValue(),'MOCK aclaración: nuevo encargo');
  await page.getByTitle('Enviar',{exact:true}).click();
  await page.locator('.director-run').getByText('MOCK aclaración: nuevo encargo',{exact:true}).waitFor();
  const directorPosts=posts.filter(item=>item.path==='/api/director');
  assert.notEqual(directorPosts[2].body.request_id,directorPosts[3].body.request_id,'A known rejected plan gets a new id on the next manual submission');
  await page.getByRole('button',{name:'Cancelar encargo',exact:true}).click();
  await page.locator('.director-run').filter({hasText:'MOCK aclaración: nuevo encargo'}).getByText('Cancelado',{exact:true}).waitFor();
  assert.equal(posts.filter(item=>item.path.endsWith('/cancel')).length,1);
  assert.equal(await page.locator('.message.assistant').count(),1,'Cancellation creates no invented answer');
  await input.fill('Texto pendiente sin enviar');
  await page.getByLabel('Proyecto activo').selectOption('other-project');
  await page.waitForFunction(()=>document.querySelectorAll('.director-run').length===0);
  assert.equal(await input.inputValue(),'','Another project never inherits the pending objective');
  assert.equal(await toggle.isChecked(),false);
  await page.getByLabel('Proyecto activo').selectOption('mock-project');
  assert.equal(await input.inputValue(),'Texto pendiente sin enviar','Returning to the original project restores its own draft');
  assert.equal(posts.filter(item=>item.path==='/api/director').length,4,'Context changes never send the preserved draft');
  await page.setViewportSize({width:390,height:844});await toggle.check();
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'Director controls fit mobile');
  assert.deepEqual(errors,[]);
  console.log('PASS MOCK: opt-in ANTO, coste/límites, texto sin adjuntos, idempotencia red/422, progreso, síntesis única, cancelación, contexto y móvil; cero modelos reales.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
