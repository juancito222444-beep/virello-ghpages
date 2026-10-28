// Corrupt policy recovery with real browser controls, synthetic APIs, no model calls.
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
   if(url.pathname.startsWith('/api/'))throw Error('Unmocked API');
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
  const credential={configured:true,valid_format:true,source:'MOCK',accepted_names:[]};
  const invalid='La política de uso guardada está dañada o tiene un formato inválido. Las solicitudes a modelos están bloqueadas.';
  let mode='invalid',failSave=true,policy=null;
  const attempted=12;
  const writes=()=>calls.filter(call=>call.method!=='GET');
  await context.route('**/*',async route=>{
   const request=route.request(),url=new URL(request.url()),pathname=url.pathname,method=request.method();
   if(url.origin!==new URL(base).origin){unexpected.push(request.url());return route.abort();}
   if(!pathname.startsWith('/api/'))return route.continue();
   const body=request.postDataJSON();calls.push({path:pathname,method,body});
   const json=(value,status=200)=>route.fulfill({status,contentType:'application/json',body:JSON.stringify(value)});
   if(pathname==='/api/system/status')return json(require('./mock-system-status.cjs')());
   if(pathname==='/api/projects')return json([{id:'usage-project',name:'MOCK recuperación de límites'}]);
   if(pathname==='/api/settings')return json({provider:'gemini',agents,ollama_url:'',openai_url:''});
   if(pathname==='/api/models')return json({provider:'gemini',connected:true,inference_verified:true,models:['gemini-mock'],credential});
   if(pathname.startsWith('/api/credentials/'))return json(credential);
   if(pathname==='/api/usage'){
    assert.equal(method,'GET');
    if(mode==='invalid')return json({detail:invalid,error_code:'USAGE_POLICY_INVALID'},422);
    if(mode==='outage')return json({detail:'MOCK: almacenamiento temporalmente ocupado'},503);
    assert.ok(policy,'Usage cannot invent a policy before explicit recovery');
    return json({day:'2026-10-27',attempted,remaining:Math.max(0,policy.daily_requests-attempted),input_tokens:120,output_tokens:30,total_tokens:150,unknown_attempts:0,policy});
   }
   if(pathname==='/api/usage/policy'){
    assert.equal(method,'PUT');
    if(failSave){failSave=false;return json({detail:'MOCK: escritura rechazada'},503);}
    policy={...body};mode='ready';return json(policy);
   }
   if(pathname.endsWith('/memory'))return json({summary:'MOCK: nota intacta'});
   if(['/api/messages','/api/feedback','/api/runs','/api/files','/api/artifacts'].includes(pathname))return json([]);
   unexpected.push(method+' '+pathname);return json({detail:'Unexpected mocked API'},501);
  });
  await page.goto(base);await page.getByRole('button',{name:'Configuración',exact:true}).click();
  const section=page.locator('.studio-controls'),daily=section.getByLabel('Máximo de intentos diarios UTC'),tokens=section.getByLabel('Máximo de tokens por respuesta de chat');
  const prepare=section.getByRole('button',{name:'Preparar límites de recuperación',exact:true}),save=section.getByRole('button',{name:'Guardar límites',exact:true}),refresh=section.getByRole('button',{name:'Actualizar uso',exact:true});
  await prepare.waitFor();assert.equal(await section.locator('.usage-stats').count(),0,'Corruption must not show default counters');
  assert.equal(await daily.count(),0,'Recovery limits require an explicit action');
  assert.equal(writes().length,0,'Reading damaged settings must not replace them');
  mode='outage';await refresh.click();await section.getByText('MOCK: almacenamiento temporalmente ocupado',{exact:true}).waitFor();
  assert.equal(await prepare.count(),0,'A later generic failure must not retain a stale corruption recovery action');
  assert.equal(await section.getByText('Las llamadas de IA permanecen bloqueadas hasta que guardes límites válidos. Los intentos anteriores se conservan.',{exact:true}).count(),0,'A generic error cannot assert that the latest policy was checked and remains corrupt');
  assert.equal(await daily.count(),0);assert.equal(await section.locator('.usage-stats').count(),0);
  assert.equal(writes().length,0,'An unavailable server must not trigger policy replacement');
  mode='invalid';await refresh.click();await prepare.waitFor();
  await prepare.click();await daily.waitFor();
  assert.equal(await daily.inputValue(),'1');assert.equal(await tokens.inputValue(),'1024');
  assert.equal(await section.getByRole('checkbox',{name:'Pedir respuestas concisas en el chat',exact:true}).isChecked(),true);
  assert.equal(writes().length,0,'Preparing a recovery draft must never submit it');
  await daily.fill('15');await save.click();await page.getByText('MOCK: escritura rechazada',{exact:true}).waitFor();
  assert.equal(await daily.inputValue(),'15','A failed save preserves the edited draft');
  assert.equal(await section.locator('.usage-stats').count(),0);assert.equal(policy,null);
  await section.getByText(/Borrador de recuperación:/).waitFor();
  await save.click();await section.locator('.usage-stats').waitFor();
  assert.deepEqual(policy,{daily_requests:15,max_output_tokens:1024,concise:true});
  assert.equal(await section.locator('.usage-stats strong').allTextContents().then(values=>values.join('|')),'12|3|150','Explicit recovery preserves previous attempts and tokens');
  assert.equal(await save.isDisabled(),true);assert.equal(await prepare.count(),0);
  assert.equal(writes().length,2);

  mode='outage';await refresh.click();await section.getByText('MOCK: almacenamiento temporalmente ocupado',{exact:true}).waitFor();
  assert.equal(await section.locator('.usage-stats').count(),0,'A failed refresh hides stale usage rather than presenting it as current');
  assert.equal(await prepare.count(),0,'A storage/network failure is not policy corruption');
  assert.equal(await daily.inputValue(),'15');
  await daily.fill('16');mode='ready';await refresh.click();await section.locator('.usage-stats').waitFor();
  assert.equal(await daily.inputValue(),'16','Recovery from an outage preserves newer limit edits');
  assert.equal(await section.getByText('MOCK: almacenamiento temporalmente ocupado',{exact:true}).count(),0);
  assert.equal(writes().length,2,'Refreshing never saves edited limits');

  mode='invalid';await refresh.click();await section.getByText(invalid,{exact:true}).waitFor();
  assert.equal(await section.locator('.usage-stats').count(),0);assert.equal(await daily.inputValue(),'16');
  assert.equal(await prepare.count(),0,'A current edited form stays available for explicit recovery');
  await save.click();await section.locator('.usage-stats').waitFor();
  assert.equal(policy.daily_requests,16);
  assert.equal(await section.locator('.usage-stats strong').allTextContents().then(values=>values.join('|')),'12|4|150');
  await page.setViewportSize({width:390,height:844});
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'Recovery controls must fit a mobile viewport');
  assert.deepEqual(writes().map(call=>[call.path,call.method]),Array(3).fill(['/api/usage/policy','PUT']));
  assert.deepEqual(unexpected,[]);assert.deepEqual(errors,[]);
  console.log('PASS MOCK: política corrupta bloqueada sin cuota ficticia, recuperación explícita, fallo de guardado conserva borrador, contadores intactos, error genérico sin recuperación engañosa, límites editados conservados y móvil. Cero inferencias.');
 }finally{if(browser)await browser.close();await new Promise(resolve=>fixture.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
