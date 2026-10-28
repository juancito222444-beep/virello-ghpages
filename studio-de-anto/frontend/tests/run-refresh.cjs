// Batched run refresh and stale project responses. All APIs are synthetic.
const assert=require('node:assert/strict');
const {createServer}=require('node:http');
const fs=require('node:fs/promises');
const path=require('node:path');
const {chromium}=require('playwright');

(async()=>{
 const dist=path.resolve(__dirname,'../dist');
 const fixture=createServer(async(request,response)=>{
  try{
   const url=new URL(request.url,'http://loopback-fixture');
   if(url.pathname.startsWith('/api/'))throw Error('Unmocked fixture API');
   const file=path.resolve(dist,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
   if(!file.startsWith(dist+path.sep))throw Error('Invalid fixture asset');
   const bytes=await fs.readFile(file),type={'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml'}[path.extname(file)]||'application/octet-stream';
   response.writeHead(200,{'Content-Type':type});response.end(bytes);
  }catch{response.writeHead(404);response.end('Missing fixture asset');}
 });
 await new Promise((resolve,reject)=>{fixture.once('error',reject);fixture.listen(0,'127.0.0.1',resolve);});
 const base='http://127.0.0.1:'+fixture.address().port;
 let browser;
 try{
  browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox']});
  const context=await browser.newContext({viewport:{width:1440,height:1050},reducedMotion:'reduce'});
  const page=await context.newPage(),calls=[],unexpected=[],errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.addInitScript(()=>{
   window.__refreshSources=[];
   window.EventSource=class{constructor(){window.__refreshSources.push(this);}close(){this.onmessage=null;}};
   // Exercise response guards even when transport cancellation arrives too late.
   const originalFetch=window.fetch.bind(window);
   window.fetch=(input,init)=>originalFetch(input,init?{...init,signal:undefined}:init);
  });
  const agents=['anto','atlas','vera','bruno','iris','leo'].map((id,index)=>({id,name:id.toUpperCase(),role:['Dirección','Coordinación','Análisis','Revisión','Visualización','Redacción'][index],color:'#9684bc',model:'gemini-mock',instructions:'MOCK',tools:[]}));
  const make=(project,index,status='Completado')=>{
   const id=project+'-run-'+index,task={id:'logical-'+index,agent:'atlas',description:'Saved task '+index,depends_on:[]};
   return {id,project,status,request:'Saved objective '+id,plan:JSON.stringify({mode:'tools',objective:'Saved objective '+id,tasks:[task]}),
    tasks:[{id:'task-'+id,run:id,position:0,agent:'atlas',status,payload:JSON.stringify(task),result:'saved task result'}],
    reviews:[{id:'review-'+id,run:id,payload:'{"passed":true}',created:'2026-10-27T12:00:00Z'}],
    result:JSON.stringify({total:index+10,rows_after:3}),details_included:true};
  };
  const byProject={
   'project-a':Array.from({length:30},(_,index)=>make('project-a',index,index===1?'Interrumpido':index===2?'Fallido':'Completado')),
   'project-b':[make('project-b',0)],
   legacy:[make('legacy',0,'Interrumpido'),make('legacy',1)]
  };
  const delegated=byProject['project-a'][0];
  delegated.plan=JSON.stringify({...JSON.parse(delegated.plan),mode:'director'});
  delegated.director={user_message_id:'saved-director-user',assistant_message_id:'restored-director-answer',max_api_calls:7};
  delegated.result=JSON.stringify({kind:'director',message_id:'restored-director-answer',summary:'Saved restored synthesis'});
  const messages=[{id:'saved-director-user',agent:'anto',role:'user',content:delegated.request},
   {id:'restored-director-answer',agent:'anto',role:'assistant',content:'Saved restored synthesis'}];
  const files=project=>[{id:project+'-file',name:project+'-original.csv',kind:'table',size:100}];
  const artifacts=project=>[{id:project+'-artifact',run:project+'-run-0',name:project+'-report.csv',version:1,mime:'text/csv'}];
  let delayProjectA=false,sequence=0;
  const held=[];
  await context.route('**/*',async route=>{
   const request=route.request(),url=new URL(request.url()),pathname=url.pathname,project=url.searchParams.get('project');
   if(url.origin!==new URL(base).origin){unexpected.push(request.url());return route.abort();}
   if(!pathname.startsWith('/api/'))return route.continue();
   calls.push({path:pathname,project,details:url.searchParams.get('include_details'),method:request.method()});
   const json=value=>route.fulfill({contentType:'application/json',body:JSON.stringify(value)});
   if(delayProjectA&&project==='project-a'&&['/api/runs','/api/files','/api/artifacts'].includes(pathname)){
    const snapshot=pathname==='/api/runs'?byProject['project-a']:pathname==='/api/files'?files('project-a'):artifacts('project-a');
    await new Promise(resolve=>held.push({release:async()=>{await json(snapshot);resolve();},path:pathname}));
    return;
   }
   if(/^\/api\/projects\/[^/]+\/office$/.test(url.pathname))return route.fulfill({status:404,contentType:'application/json',body:JSON.stringify({detail:'Legacy fixture without expansion'})});
   if(pathname==='/api/projects')return json(['project-a','project-b','legacy'].map(id=>({id,name:'MOCK '+id})));
   if(pathname==='/api/settings')return json({provider:'gemini',agents,ollama_url:'',openai_url:''});
   if(pathname==='/api/models')return json({provider:'gemini',connected:false,models:[],credential:{configured:false,valid_format:false,source:'MOCK',accepted_names:[]}});
   if(pathname==='/api/runs'){
    if(project==='legacy')return json(byProject.legacy.map(({tasks,reviews,details_included,...summary})=>({...summary,tasks:[]})));
    return json(byProject[project]||[]);
   }
   if(pathname.startsWith('/api/runs/')){
    const run=Object.values(byProject).flat().find(run=>run.id===pathname.slice('/api/runs/'.length));
    if(run)return json(run);
   }
   if(pathname==='/api/files')return json(files(project));
   if(pathname==='/api/artifacts')return json(artifacts(project));
   if(pathname==='/api/messages')return json(project==='project-a'&&url.searchParams.get('agent')==='anto'?messages:[]);
   if(pathname==='/api/feedback')return json([]);
   unexpected.push(request.method()+' '+pathname);return json({detail:'Unexpected fixture request'});
  });
  const taskNames=()=>page.locator('.run-card .run-head h3').allTextContents();
  const expectTasks=async project=>{
   await page.waitForFunction(expected=>document.querySelectorAll('.run-card').length===expected,byProject[project].length);
   assert.deepEqual(await taskNames(),byProject[project].map(run=>run.request));
  };
  await page.goto(base);
  await page.getByLabel('Proyecto activo').selectOption('project-a');
  await page.locator('.message.assistant').getByText('Saved restored synthesis',{exact:true}).waitFor();
  await page.getByRole('button',{name:'Tareas',exact:true}).click();await expectTasks('project-a');
  assert.deepEqual(await page.locator('.task-current-status').allTextContents(),byProject['project-a'].map(run=>run.tasks[0].status),'Batched task statuses must be preserved');
  assert.equal(await page.getByRole('button',{name:'Reanudar desde el último paso guardado',exact:true}).count(),1);
  assert.equal(await page.locator('.result-summary').count(),29,'Director synthesis must not be treated as statistics');
  assert.equal(calls.filter(call=>call.path.startsWith('/api/runs/')).length,0,'Thirty detailed runs must not cause thirty detail requests');
  assert.ok(calls.filter(call=>call.path==='/api/runs').every(call=>call.details==='true'));

  delayProjectA=true;
  await page.evaluate(event=>{for(const source of window.__refreshSources)source.onmessage?.({data:JSON.stringify(event)});},
   {seq:++sequence,kind:'run',project:'project-a',run:delegated.id,agent:'anto',payload:'{"status":"Completado"}'});
  await page.waitForFunction(()=>true);
  const heldDeadline=Date.now()+5000;
  while(held.length<3&&Date.now()<heldDeadline)await new Promise(resolve=>setTimeout(resolve,20));
  assert.equal(held.length,3,'The entire previous project snapshot must be pending');
  await page.getByLabel('Proyecto activo').selectOption('project-b');await expectTasks('project-b');
  const lateResponses=held.map(item=>page.waitForResponse(response=>{
   const url=new URL(response.url());return url.pathname===item.path&&url.searchParams.get('project')==='project-a';
  }));
  await Promise.all(held.map(item=>item.release()));await Promise.all(lateResponses);
  await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
  await expectTasks('project-b');
  await page.getByRole('button',{name:'Datos',exact:true}).click();
  await page.locator('.file-list button').filter({hasText:'project-b-original.csv'}).waitFor();
  assert.equal(await page.locator('.file-list button').filter({hasText:'project-a-original.csv'}).count(),0,'Late file results cannot cross projects');
  await page.getByRole('button',{name:'Entregables',exact:true}).click();
  await page.locator('.artifact-grid').getByText('project-b-report.csv',{exact:true}).waitFor();
  assert.equal(await page.locator('.artifact-grid').getByText('project-a-report.csv',{exact:true}).count(),0,'Late artifact results cannot cross projects');

  const detailsBefore=calls.filter(call=>call.path.startsWith('/api/runs/')).length;
  await page.getByLabel('Proyecto activo').selectOption('legacy');
  await page.getByRole('button',{name:'Tareas',exact:true}).click();await expectTasks('legacy');
  assert.equal(calls.filter(call=>call.path.startsWith('/api/runs/')).length-detailsBefore,2,'Legacy summaries without the marker must fetch both details');
  assert.deepEqual(await page.locator('.task-current-status').allTextContents(),['Interrumpido','Completado']);
  assert.deepEqual(calls.filter(call=>call.method!=='GET'),[],'Viewing stored runs never runs or saves work');
  assert.deepEqual(unexpected,[]);assert.deepEqual(errors,[]);
  console.log('PASS MOCK: 30 ejecuciones en una lectura sin GET por ejecución, estados y síntesis conservados, compatibilidad anterior y aislamiento de tareas/archivos/entregables ante respuestas tardías. Cero inferencias.');
 }finally{if(browser)await browser.close();await new Promise(resolve=>fixture.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
