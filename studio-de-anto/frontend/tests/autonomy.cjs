// Real browser UI, synthetic APIs only. Every external origin is blocked.
const assert=require('node:assert/strict');
const {createServer}=require('node:http');
const fs=require('node:fs/promises');
const path=require('node:path');
const {chromium}=require('playwright');
const initial=()=>({status:'stopped',used:0,error:'',limits:{max_jobs:3,max_attempts:2,interval_seconds:60,timeout_seconds:900,max_files:30},jobs:[],completed:0,activity:[]});
(async()=>{
 const dist=path.resolve(__dirname,'../dist');
 const server=createServer(async(req,res)=>{try{
  const target=path.resolve(dist,'.'+new URL(req.url,'http://fixture').pathname.replace(/^\/$/,'/index.html'));
  if(!target.startsWith(dist+path.sep))throw Error('Invalid asset');
  const data=await fs.readFile(target);res.writeHead(200,{'Content-Type':{'.html':'text/html','.js':'application/javascript','.css':'text/css'}[path.extname(target)]||'application/octet-stream'});res.end(data);
 }catch{res.writeHead(404);res.end();}});
 await new Promise(done=>server.listen(0,'127.0.0.1',done));
 const base='http://127.0.0.1:'+server.address().port;let browser;
 try{
  browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox']});
  const page=await browser.newPage(),errors=[],calls=[],states={'anto:a':initial(),'anto:b':initial(),codex:initial()};
  page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>{window.EventSource=class{close(){}};});
  await page.route('**/*',async route=>{
   const req=route.request(),url=new URL(req.url()),p=url.pathname,method=req.method();
   if(url.origin!==base)return route.abort();
   if(!p.startsWith('/api/'))return route.continue();
   calls.push({p,method,body:req.postDataJSON()});
   const json=(body,status=200)=>route.fulfill({status,contentType:'application/json',body:JSON.stringify(body)});
   const match=p.match(/^\/api\/(?:projects\/([^/]+)\/autonomy|autonomy\/(codex))(.*)$/);
   if(match){
    const scope=match[2]?'codex':'anto:'+match[1],state=states[scope],suffix=match[3],body=req.postDataJSON();
    if(method==='GET'){
     // A slow server must still render its first result despite the polling timer.
     if(scope==='anto:a'&&calls.filter(c=>c.p===p&&c.method==='GET').length===1){
      await new Promise(done=>setTimeout(done,3500));
      assert.equal(calls.filter(c=>c.p===p&&c.method==='GET').length,1,'Polling must not overlap a slow request');
     }
     return json(state);
    }
    if(suffix==='/jobs'){
     if(!state.jobs.some(j=>j.request===body.request))state.jobs.push({id:'job-'+state.jobs.length,request:body.request,status:'queued',attempts:0,run_id:null,error:'',progress:{done:0,total:0}});
     return json({id:state.jobs.at(-1).id});
    }
    if(suffix==='/limits'){state.limits=body;return json(state);}
    if(suffix==='/control'){
     state.status={start:'running',pause:'paused',stop:'stopped'}[body.action];
     if(body.action==='start')assert.equal(body.confirmed,true);
     if(body.action==='stop')state.jobs.forEach(j=>{if(j.status==='queued')j.status='stopped';});
     return json(state);
    }
    if(suffix.endsWith('/retry')){state.jobs.find(j=>j.id===suffix.split('/')[2]).status='queued';return json(state);}
    throw Error('Unexpected autonomy API');
   }
   if(p==='/api/projects')return json([{id:'a',name:'Project A'},{id:'b',name:'Project B'}]);
   const agents=['anto','vera'].map(id=>({id,name:id.toUpperCase(),role:'MOCK',model:'gemini-mock',instructions:'',color:'#9684bc',tools:[]}));
   if(p==='/api/settings')return json({provider:'gemini',agents,ollama_url:'',openai_url:''});
   if(p==='/api/models')return json({provider:'gemini',connected:true,inference_verified:true,models:['gemini-mock'],credential:{configured:true}});
   if(p.startsWith('/api/credentials/'))return json({configured:true,valid_format:true,source:'MOCK',accepted_names:[]});
   if(p==='/api/system/status')return json(require('./mock-system-status.cjs')());
   if(p==='/api/usage')return json({day:'2026-10-30',attempted:0,remaining:100,input_tokens:0,output_tokens:0,total_tokens:0,unknown_attempts:0,policy:{daily_requests:100,max_output_tokens:1024,concise:true}});
   if(p.endsWith('/memory'))return json({summary:''});
   if(p.endsWith('/office'))return json({detail:'Legacy fixture'},404);
   if(['/api/messages','/api/feedback','/api/runs','/api/files','/api/artifacts'].includes(p))return json([]);
   throw Error('Unmocked API: '+method+' '+p);
  });
  await page.goto(base);await page.getByRole('button',{name:'Tareas',exact:true}).click();
  const panel=page.getByRole('region',{name:'Autonomía de Anto',exact:true});
  assert.equal(calls.filter(c=>c.p.endsWith('/autonomy')).length,0,'Closed panel does not fetch or activate autonomy');
  await panel.locator('summary').first().click();
  await panel.getByRole('button',{name:'Guardar objetivo',exact:true}).waitFor();
  await panel.getByLabel('Objetivo para Anto',{exact:true}).fill('Write a finite proposal');
  await panel.getByRole('button',{name:'Guardar objetivo',exact:true}).evaluate(b=>{b.click();b.click();});
  await panel.getByText('Write a finite proposal',{exact:true}).waitFor();
  assert.equal(states['anto:a'].jobs.length,1);
  assert.equal(calls.filter(c=>c.p.endsWith('/jobs')&&c.method==='POST').length,1,'Double click cannot send two jobs');
  const start=panel.getByRole('button',{name:'Iniciar / reanudar',exact:true});
  assert.equal(await start.isDisabled(),true);
  await panel.getByRole('checkbox').check();await start.click();
  await page.waitForFunction(()=>document.querySelector('[aria-label="Autonomía de Anto"] .autonomy-status strong')?.textContent==='En ejecución');
  await panel.getByRole('button',{name:'Pausar',exact:true}).click();
  await page.waitForFunction(()=>document.querySelector('[aria-label="Autonomía de Anto"] .autonomy-status strong')?.textContent==='Pausada');
  await panel.getByRole('button',{name:'Detener',exact:true}).click();
  await panel.getByRole('button',{name:'Autorizar reintento',exact:true}).waitFor();
  await panel.getByRole('button',{name:'Autorizar reintento',exact:true}).click();
  await page.getByLabel('Proyecto activo').selectOption('b');
  const other=page.getByRole('region',{name:'Autonomía de Anto'});
  await other.locator('summary').first().click();
  await other.getByText('0/0 objetivos completados',{exact:false}).waitFor();
  assert.equal(await other.getByText('Write a finite proposal',{exact:true}).count(),0);
  await page.getByRole('button',{name:'Configuración',exact:true}).click();
  await page.waitForTimeout(300);
  if(errors.length)throw Error('Browser errors: '+errors.join('; '));
  const codex=page.getByRole('region',{name:'Autonomía de Codex',exact:true});
  await codex.locator('summary').first().click();
  await codex.getByLabel('Mejora concreta para el backlog',{exact:true}).fill('Improve a bounded feature');
  await codex.getByRole('button',{name:'Guardar objetivo',exact:true}).click();
  await codex.getByText('Improve a bounded feature',{exact:true}).waitFor();
  await codex.getByRole('checkbox').check();await codex.getByRole('button',{name:'Iniciar / reanudar',exact:true}).click();
  await page.waitForFunction(()=>document.querySelector('[aria-label="Autonomía de Codex"] .autonomy-status strong')?.textContent==='En ejecución');
  states.codex.status='paused';states.codex.error='MOCK: local changes retained';states.codex.jobs[0].status='blocked';states.codex.jobs[0].error='MOCK: validation failed';
  await codex.getByText('MOCK: validation failed',{exact:true}).waitFor();
  assert.ok((await codex.innerText()).includes('stop-codex-autonomy.sh'));
  assert.equal(calls.filter(c=>['/api/chat','/api/director'].includes(c.p)).length,0);
  assert.deepEqual(errors,[]);
  console.log('PASS autonomy browser: scoped objectives, double-click guard, start/pause/stop/retry, Codex errors, no model calls');
 }finally{await browser?.close();await new Promise(done=>server.close(done));}
})().catch(e=>{console.error(e);process.exitCode=1;});
