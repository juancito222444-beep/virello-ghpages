// Local filtering and project isolation: every API is synthetic, no model calls.
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
  const context=await browser.newContext({viewport:{width:1440,height:1050},reducedMotion:'reduce'}),page=await context.newPage(),calls=[],unexpected=[],errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.addInitScript(()=>{window.EventSource=class{close(){}};});
  const agents=['anto','atlas','vera','bruno','iris','leo'].map((id,index)=>({id,name:id.toUpperCase(),role:['Dirección','Coordinación','Análisis','Revisión','Visualización','Redacción'][index],color:'#9684bc',model:'gemini-mock',instructions:'MOCK',tools:[]}));
  const make=(id,status,request)=>({id,status,request,project:id.startsWith('a-')?'project-a':'project-b',plan:JSON.stringify({mode:'tools',objective:request,tasks:[]}),tasks:[],result:null});
  const byProject={
   'project-a':[
    make('a-completed-01','Completado','Reunión con café [Q1]'),make('a-active-02','En ejecución','Revisar ventas'),make('a-pending-03','Pendiente','Preparar presupuesto'),
    make('a-approval-04','Espera aprobación','Aprobar propuesta'),make('a-information-05','Requiere información','Aclarar objetivo'),make('a-paused-06','Interrumpido','Retomar campaña'),
    make('a-failed-07','Fallido','Corregir informe'),make('a-cancelled-08','Cancelado','Campaña cancelada'),make('a-future-09','Estado futuro','Objetivo especial')
   ],
   'project-b':[make('b-completed-01','Completado','Trabajo de otro proyecto'),make('b-paused-02','Interrumpido','Continuar análisis B')]
  };
  const all=Object.values(byProject).flat();
  await context.route('**/*',async route=>{
   const request=route.request(),url=new URL(request.url()),pathname=url.pathname;
   if(url.origin!==new URL(base).origin){unexpected.push(request.url());return route.abort();}
   if(!pathname.startsWith('/api/'))return route.continue();
   calls.push({path:pathname,method:request.method(),body:request.postDataJSON()});
   const json=value=>route.fulfill({contentType:'application/json',body:JSON.stringify(value)});
   if(pathname==='/api/projects')return json([{id:'project-a',name:'MOCK proyecto A'},{id:'project-b',name:'MOCK proyecto B'}]);
   if(pathname==='/api/settings')return json({provider:'gemini',agents,ollama_url:'',openai_url:''});
   if(pathname==='/api/models')return json({provider:'gemini',connected:false,models:[],credential:{configured:false,valid_format:false,source:'MOCK',accepted_names:[]}});
   if(pathname.startsWith('/api/credentials/'))return json({configured:false,valid_format:false,source:'MOCK',accepted_names:[]});
   if(pathname==='/api/runs')return json(byProject[url.searchParams.get('project')]||[]);
   if(pathname.startsWith('/api/runs/')){const run=all.find(run=>run.id===pathname.slice('/api/runs/'.length));if(run)return json(run);}
   if(['/api/messages','/api/feedback','/api/files','/api/artifacts'].includes(pathname))return json([]);
   unexpected.push(request.method()+' '+pathname);return json([]);
  });
  await page.goto(base);await page.getByLabel('Proyecto activo').selectOption('project-a');
  await page.getByRole('button',{name:'Tareas',exact:true}).click();
  const filters=page.getByRole('region',{name:'Buscar y filtrar ejecuciones',exact:true});
  const query=filters.getByLabel('Buscar planes y ejecuciones',{exact:true}),status=filters.getByLabel('Filtrar ejecuciones por estado',{exact:true}),clear=filters.getByRole('button',{name:'Limpiar filtros',exact:true});
  const shown=(visible,total)=>filters.getByRole('status').getByText(`${visible} de ${total} ejecuciones`,{exact:true}).waitFor();
  const requests=()=>page.locator('.run-card .run-head h3').allTextContents();
  const capture=async name=>{if(process.env.ANTO_SCREENSHOT_DIR){const directory=path.resolve(process.env.ANTO_SCREENSHOT_DIR);await fs.mkdir(directory,{recursive:true});await page.screenshot({path:path.join(directory,name),fullPage:true});}};
  await shown(9,9);assert.equal(await clear.isDisabled(),true);
  assert.deepEqual(await requests(),byProject['project-a'].map(run=>run.request));
  await capture('run-filters-desktop.png');
  const initialCalls=calls.length;
  await query.fill(' CAFE ');await shown(1,9);assert.deepEqual(await requests(),['Reunión con café [Q1]']);
  await query.fill('[Q1]');await shown(1,9);
  await query.fill('.*');await shown(0,9);assert.deepEqual(await requests(),[]);
  await query.fill('A-PAUSED');await shown(1,9);assert.deepEqual(await requests(),['Retomar campaña']);
  await status.selectOption('completed');await shown(0,9);
  await clear.click();await shown(9,9);assert.equal(await query.inputValue(),'');assert.equal(await status.inputValue(),'all');
  await status.selectOption('waiting');await shown(2,9);assert.deepEqual(await requests(),['Aprobar propuesta','Aclarar objetivo']);
  await status.selectOption('active');await shown(2,9);assert.deepEqual(await requests(),['Revisar ventas','Preparar presupuesto']);
  await status.selectOption('failed');await shown(1,9);assert.deepEqual(await requests(),['Corregir informe']);
  await status.selectOption('cancelled');await shown(1,9);assert.deepEqual(await requests(),['Campaña cancelada']);
  await clear.click();
  await filters.getByRole('button',{name:/Completadas/}).click();await shown(1,9);assert.equal(await status.inputValue(),'completed');
  assert.equal(await filters.getByRole('button',{name:/Completadas/}).getAttribute('aria-pressed'),'true');
  await filters.getByRole('button',{name:/Retomables/}).click();await shown(1,9);
  assert.equal(await page.getByRole('button',{name:'Reanudar desde el último paso guardado',exact:true}).count(),1,'Existing resumable actions remain present');
  await query.fill('campaña');await shown(1,9);
  assert.equal(calls.length,initialCalls,'Search and status controls must not call the backend');

  await page.getByLabel('Proyecto activo').selectOption('project-b');await shown(2,2);
  assert.equal(await query.inputValue(),'');assert.equal(await status.inputValue(),'all');
  assert.deepEqual(await requests(),byProject['project-b'].map(run=>run.request),'A previous project cannot hide another project\'s runs');
  await page.getByLabel('Proyecto activo').selectOption('project-a');await shown(9,9);
  assert.equal(await query.inputValue(),'');assert.equal(await status.inputValue(),'all');
  await page.setViewportSize({width:390,height:844});
  await query.fill('Presupuesto');await shown(1,9);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'Run filters must fit mobile');
  await clear.focus();await page.keyboard.press('Enter');await shown(9,9);
  await capture('run-filters-mobile.png');
  assert.deepEqual(calls.filter(call=>call.method!=='GET'),[],'Filtering, chip selection and project changes never execute or save runs');
  assert.deepEqual(unexpected,[]);assert.deepEqual(errors,[]);
  console.log('PASS MOCK: búsqueda literal por objetivo/ID sin tildes, estados y resumen, limpieza por teclado, acciones existentes, aislamiento por proyecto, recuentos y móvil. Cero inferencias.');
 }finally{if(browser)await browser.close();await new Promise(resolve=>fixture.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
