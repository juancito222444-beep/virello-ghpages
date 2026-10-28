// Read-only diagnostics with synthetic APIs. No inference, credentials or writes.
const assert=require('node:assert/strict');
const {createServer}=require('node:http');
const fs=require('node:fs/promises');
const syncFs=require('node:fs');
const path=require('node:path');
const ts=require('typescript');
const {chromium}=require('playwright');
const compiled=ts.transpileModule(syncFs.readFileSync(path.join(__dirname,'../src/SystemStatus.tsx'),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,jsx:ts.JsxEmit.ReactJSX}}).outputText;
const moduleObject={exports:{}};
new Function('exports','require',compiled)(moduleObject.exports,name=>name==='./api'?{SERVER_UPDATE_COMMAND:'MOCK',fetchApi:()=>{throw Error('Pure helper must never fetch');}}:require(name));
const {buildDiagnosticReport}=moduleObject.exports;
const sentinel='MOCK-private-sentinel-do-not-export';
const makeReport=(generated='2026-10-28T17:00:00Z')=>({
 app:'STUDIO DE ANTO',release:'1.7.0',api_version:'1',generated_at:generated,code_update_available:null,
 api_key:sentinel,private_path:'/private/'+sentinel,raw_error:sentinel,
 checks:[
  {id:'service',label:sentinel,status:'ok',message:'El estudio está respondiendo.',internal:{credentials:sentinel}},
  {id:'code_version',label:'Versión',status:'warning',message:'No se pudo comparar la versión del servidor.'},
  {id:'database',label:'Base de datos',status:'ok',message:'Los proyectos y el historial están disponibles.'},
  {id:'storage',label:'Almacenamiento',status:'ok',message:'Hay espacio disponible para seguir trabajando.'},
  {id:'provider',label:'Proveedor',status:'warning',message:'Esta comprobación no contacta al proveedor de IA.'},
  {id:'credentials',label:'Clave',status:'ok',message:'Hay una clave configurada. No se comprobó su autorización ni su cuota.',api_key:sentinel},
  {id:'usage',label:'Límites',status:'ok',message:'Los límites de uso se pueden leer.'},
  {id:'backups',label:'Copias',status:'warning',message:'Descarga tus copias para conservarlas fuera del servidor.'},
  {id:'private_debug',label:sentinel,status:'error',message:sentinel}
 ]
});

// The browser download must use this explicit allowlist, never the raw payload.
const safe=buildDiagnosticReport(makeReport());
assert.deepEqual(Object.keys(safe),['app','release','api_version','generated_at','code_update_available','checks']);
assert.equal(safe.checks.length,8);assert.equal(safe.code_update_available,null);
assert.equal(JSON.stringify(safe).includes(sentinel),false);
assert.equal(safe.checks[0].label,'Aplicación');
assert.deepEqual(Object.keys(safe.checks[0]),['id','label','status','message']);
assert.throws(()=>buildDiagnosticReport({...makeReport(),generated_at:'no-date'}));
assert.throws(()=>buildDiagnosticReport({...makeReport(),api_version:'2'}));
assert.throws(()=>buildDiagnosticReport({...makeReport(),checks:[{id:'service',status:['ok'],message:'Invalid status shape'}]}));
assert.throws(()=>buildDiagnosticReport({...makeReport(),checks:[makeReport().checks[0],makeReport().checks[0]]}));
const tokenReport=makeReport();tokenReport.checks[0].message='Clave gsk_'+sentinel;
assert.equal(JSON.stringify(buildDiagnosticReport(tokenReport)).includes(sentinel),false,'Known credential patterns are redacted defensively');

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
  const credential={configured:false,valid_format:false,source:'MOCK',accepted_names:[]};
  let mode='old',delayed=null,last='2026-10-28T17:00:00Z';
  const diagnosticCalls=()=>calls.filter(call=>call.path==='/api/system/status').length;
  await context.route('**/*',async route=>{
   const request=route.request(),url=new URL(request.url()),pathname=url.pathname;
   if(url.origin!==new URL(base).origin){unexpected.push(request.url());return route.abort();}
   if(!pathname.startsWith('/api/'))return route.continue();
   calls.push({path:pathname,method:request.method(),body:request.postDataJSON()});
   const json=(value,status=200)=>route.fulfill({status,contentType:'application/json',body:JSON.stringify(value)});
   if(/^\/api\/projects\/[^/]+\/office$/.test(pathname))return json({detail:'Legacy fixture without expansion'},404);
   if(pathname==='/api/projects')return json([{id:'system-project',name:'MOCK diagnóstico'}]);
   if(pathname==='/api/settings')return json({provider:'gemini',agents,ollama_url:'',openai_url:''});
   if(pathname==='/api/models')return json({provider:'gemini',connected:false,models:[],credential});
   if(pathname.startsWith('/api/credentials/'))return json(credential);
   if(pathname==='/api/usage')return json({day:'2026-10-28',attempted:0,remaining:10,input_tokens:0,output_tokens:0,total_tokens:0,unknown_attempts:0,policy:{daily_requests:10,max_output_tokens:1024,concise:true}});
   if(pathname.endsWith('/memory'))return json({summary:'MOCK: nota intacta'});
   if(['/api/messages','/api/feedback','/api/runs','/api/files','/api/artifacts'].includes(pathname))return json([]);
   if(pathname==='/api/system/status'){
    if(mode==='old')return route.fulfill({status:404,contentType:'text/html',body:'<html>'+sentinel+' RAW HTML</html>'});
    if(mode==='failure')return json({detail:sentinel},503);
    if(mode==='invalid')return json({...makeReport(last),api_version:'unknown'});
    if(mode==='delayed'){await new Promise(resolve=>{delayed=resolve;});return json(makeReport('2026-10-28T18:00:00Z'));}
    return json(makeReport(last));
   }
   unexpected.push(request.method()+' '+pathname);return json([]);
  });
  await page.goto(base);await page.getByLabel('Proyecto activo').selectOption('system-project');
  assert.equal(diagnosticCalls(),0,'Opening the office must not fetch diagnostics');
  await page.getByRole('button',{name:'Configuración',exact:true}).click();
  const section=page.getByRole('region',{name:'Diagnóstico del estudio',exact:true});
  const capture=async name=>{if(process.env.ANTO_SCREENSHOT_DIR){const directory=path.resolve(process.env.ANTO_SCREENSHOT_DIR);await fs.mkdir(directory,{recursive:true});await section.screenshot({path:path.join(directory,name)});}};
  const refresh=section.getByRole('button',{name:'Actualizar diagnóstico',exact:true}),download=section.getByRole('button',{name:'Descargar diagnóstico',exact:true});
  await section.getByRole('alert').getByText(/todavía no incluye el diagnóstico/).waitFor();
  assert.equal(await download.isDisabled(),true,'An older server must not enable a fabricated diagnostic download');
  assert.equal(await section.locator('.system-check').count(),0);assert.equal(diagnosticCalls(),1);
  assert.equal((await section.innerText()).includes(sentinel),false);
  mode='ready';await refresh.click();
  await section.locator('.system-check').first().waitFor();
  assert.equal(diagnosticCalls(),2);assert.equal(await section.locator('.system-check').count(),8);
  assert.equal((await section.innerText()).includes(sentinel),false,'Unknown values must not reach the rendered report');
  assert.ok((await section.innerText()).includes('no contacta al proveedor de IA'));
  await capture('system-status-desktop.png');
  const firstDownload=page.waitForEvent('download');await download.click();const file=await firstDownload;
  assert.equal(file.suggestedFilename(),'diagnostico-studio-de-anto.json');assert.equal(await file.failure(),null);
  const exported=JSON.parse(await fs.readFile(await file.path(),'utf8'));
  assert.equal(JSON.stringify(exported).includes(sentinel),false);assert.equal(exported.outdated,false);assert.equal(exported.checks.length,8);assert.equal(exported.code_update_available,null);

  mode='failure';await refresh.click();await section.getByRole('alert').waitFor();
  await section.getByText('Resultado anterior: no confirma el estado actual del estudio.',{exact:true}).waitFor();
  assert.equal(await section.locator('.system-check').count(),8,'A failed refresh preserves the previous result with a clear stale label');
  assert.equal((await section.innerText()).includes(sentinel),false,'Raw API errors are never shown');
  const staleDownload=page.waitForEvent('download');await download.click();const staleFile=await staleDownload;
  assert.equal(JSON.parse(await fs.readFile(await staleFile.path(),'utf8')).outdated,true);
  mode='old';await refresh.click();await section.getByRole('alert').getByText(/todavía no incluye el diagnóstico/).waitFor();
  assert.equal((await section.innerText()).includes('RAW HTML'),false);
  mode='invalid';await refresh.click();await section.getByRole('alert').getByText('No se pudo leer el diagnóstico del estudio. Vuelve a actualizarlo.',{exact:true}).waitFor();

  // Changing screens cancels a pending request and must not accept its later response.
  mode='delayed';await refresh.click();
  await page.waitForFunction(()=>document.querySelector('.system-status .section-title button')?.disabled);
  for(let i=0;i<100&&!delayed;i++)await new Promise(resolve=>setTimeout(resolve,20));
  assert.ok(delayed,'The delayed MOCK diagnostic request must have started');
  await page.getByRole('button',{name:'Oficina',exact:true}).click();
  const countWhileHidden=diagnosticCalls();
  await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
  assert.equal(await section.isVisible(),false);assert.equal(diagnosticCalls(),countWhileHidden);
  mode='ready';last='2026-10-28T19:00:00Z';await page.getByRole('button',{name:'Configuración',exact:true}).click();
  await page.waitForFunction(()=>document.querySelector('.system-status time')?.getAttribute('datetime')==='2026-10-28T19:00:00.000Z');
  delayed();await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
  assert.equal(await section.locator('time').getAttribute('datetime'),'2026-10-28T19:00:00.000Z','A stale response from a hidden screen must not replace a newer diagnostic');
  assert.equal(await section.getByText('Resultado anterior: no confirma el estado actual del estudio.',{exact:true}).count(),0);
  assert.equal(await section.getByRole('alert').count(),0);
  await page.setViewportSize({width:390,height:844});
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'Diagnostics must fit mobile');
  await section.getByText('Actualizar estudio',{exact:true}).click();
  assert.equal(await section.locator('pre code').count(),1);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'The update command must not overflow mobile');
  await capture('system-status-mobile.png');
  assert.deepEqual(calls.filter(call=>call.method!=='GET'),[],'Diagnostics and downloads never write settings or invoke models');
  assert.deepEqual(unexpected,[]);assert.deepEqual(errors,[]);
  console.log('PASS MOCK: diagnóstico solo en Configuración, actualización manual, resultados anteriores marcados, errores compatibles seguros, descarga allowlist sin datos privados, cancelación al salir y móvil. Cero inferencias.');
 }finally{if(browser)await browser.close();await new Promise(resolve=>fixture.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
