// An outdated server must never cause automatic retries or model requests.
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const base=process.env.ANTO_TEST_URL||'http://127.0.0.1:8791';
if(!['127.0.0.1','localhost','::1'].includes(new URL(base).hostname))throw Error('Use an isolated loopback frontend');
const command='cd /workspaces/virello-ghpages && test "$(git branch --show-current)" = \'codex/studio-de-anto-modelo-real\' && git pull --ff-only origin codex/studio-de-anto-modelo-real && bash studio-de-anto/scripts/start-cloud.sh --background';

(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox']});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[],posts=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.addInitScript(()=>{
   Object.defineProperty(navigator,'clipboard',{value:{writeText:async text=>{window.__copiedUpdate=text;}},configurable:true});
   window.EventSource=class{close(){}};
  });
  let supported=false,postMode='405-html',healthReads=0;
  const agent={id:'anto',name:'ANTO',role:'Dirección',color:'#9684bc',model:'gemini-mock',instructions:'MOCK',tools:[]};
  await page.route('**/*',async route=>{
   const request=route.request(),url=new URL(request.url()),path=url.pathname;
   if(url.origin!==new URL(base).origin)return route.abort();
   if(!path.startsWith('/api/'))return route.continue();
   const json=(body,status=200)=>route.fulfill({status,contentType:'application/json',body:JSON.stringify(body)});
   if(request.method()==='POST')posts.push({path,body:request.postDataJSON()});
   if(path==='/api/health'){
    healthReads++;assert.equal(request.method(),'GET');
    return json(supported?{app:'STUDIO DE ANTO',api_version:'1',release:'1.4.1',features:['director-v1','context-draft-v1']}:{app:'STUDIO DE ANTO',code_version:'legacy',pid:42});
   }
   if(/^\/api\/projects\/[^/]+\/office$/.test(url.pathname))return route.fulfill({status:404,contentType:'application/json',body:JSON.stringify({detail:'Legacy fixture without expansion'})});
   if(path==='/api/projects')return json([{id:'mock-project',name:'PRUEBA MOCK · servidor anterior'}]);
   if(path==='/api/settings')return json({provider:'gemini',agents:[agent],ollama_url:'',openai_url:''});
   if(path==='/api/models')return json({provider:'gemini',connected:true,inference_verified:true,models:['gemini-mock'],endpoint:'MOCK',credential:{configured:true,valid_format:true,source:'MOCK',accepted_names:[]}});
   if(path==='/api/director'){
    if(postMode==='405-html')return route.fulfill({status:405,contentType:'text/html',body:'<html>Method Not Allowed protocol-secret-marker</html>'});
    if(postMode==='405-json')return json({detail:'Method Not Allowed',input:'protocol-secret-marker'},405);
    if(postMode==='network')return route.abort('failed');
    return json({id:'mock-director',request:'MOCK: prepara una campaña',status:'Pendiente',plan:JSON.stringify({mode:'director',tasks:[]}),result:null,tasks:[],director:{user_message_id:null,assistant_message_id:null,max_api_calls:7}});
   }
   if(['/api/messages','/api/feedback','/api/runs','/api/files','/api/artifacts'].includes(path))return json([]);
   throw Error('Unexpected API request: '+request.method()+' '+path);
  });
  await page.goto(base);
  const input=page.getByLabel('Mensaje',{exact:true}),toggle=page.getByRole('checkbox',{name:'Delegar al equipo',exact:true}),card=page.getByRole('status',{name:'Actualizar servidor para Director',exact:true});
  await input.fill('MOCK: prepara una campaña');await toggle.check();
  await page.getByTitle('Enviar',{exact:true}).click();await card.waitFor();
  assert.equal(healthReads,1);assert.equal(posts.length,0,'Legacy health blocks the Director POST before any planning');
  assert.equal(await input.inputValue(),'MOCK: prepara una campaña');assert.equal(await toggle.isChecked(),true);
  await page.getByRole('button',{name:'Copiar comando de actualización',exact:true}).click();
  assert.equal(await page.evaluate(()=>window.__copiedUpdate),command);
  assert.equal(posts.length,0,'Copying a command never executes it or sends a prompt');
  supported=true;
  await page.getByRole('button',{name:'Comprobar servidor',exact:true}).click();
  await page.getByText('El servidor ya incluye Director. Tu mensaje sigue escrito; pulsa Enviar cuando quieras delegarlo.',{exact:true}).waitFor();
  assert.equal(await card.count(),0);assert.equal(posts.length,0,'A successful compatibility check never sends automatically');
  for(const mode of ['405-html','405-json']){
   postMode=mode;await page.getByTitle('Enviar',{exact:true}).click();await card.waitFor();
   assert.equal(await input.inputValue(),'MOCK: prepara una campaña');
   const visible=await page.locator('body').innerText();assert.ok(!visible.includes('Method Not Allowed'));assert.ok(!visible.includes('protocol-secret-marker'));
  }
  postMode='network';await page.getByTitle('Enviar',{exact:true}).click();
  await page.getByRole('alert').getByText('No se pudo contactar con el servidor. Revisa que tu Codespace siga encendido y vuelve a abrir la aplicación.',{exact:true}).waitFor();
  const beforeBlock=posts.length;supported=false;
  await page.getByTitle('Enviar',{exact:true}).click();await card.waitFor();
  assert.equal(posts.length,beforeBlock,'A downgrade after a network failure blocks another POST');
  await page.setViewportSize({width:390,height:844});
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'The recovery command and controls fit mobile');
  supported=true;postMode='ok';
  await page.getByRole('button',{name:'Comprobar servidor',exact:true}).click();
  await page.getByText('El servidor ya incluye Director. Tu mensaje sigue escrito; pulsa Enviar cuando quieras delegarlo.',{exact:true}).waitFor();
  assert.equal(posts.length,beforeBlock);assert.equal(await input.inputValue(),'MOCK: prepara una campaña');
  await page.getByTitle('Enviar',{exact:true}).click();
  await page.getByText('ANTO ha preparado el encargo del equipo. Puedes seguir el progreso o cancelarlo aquí.',{exact:true}).waitFor();
  assert.equal(posts.length,beforeBlock+1);
  assert.ok(posts.every(post=>post.path==='/api/director'));
  assert.equal(new Set(posts.map(post=>post.body.request_id)).size,1,'Compatibility failures and ambiguous network failures preserve the pending request id');
  assert.equal(await input.inputValue(),'');assert.deepEqual(errors,[]);
  console.log('PASS MOCK: legacy server blocks Director, safe 405 HTML/JSON, copied guarded command, explicit recovery only, prompt/request id preserved, mobile; zero provider calls.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
