// Actual local WebGL rendering and viewport changes; all APIs are protocol mocks.
// Headless Chromium keeps every tab "visible", so the visibilitychange case
// explicitly simulates document.hidden. It does not freeze the browser process.
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
 const unexpected=[],errors=[],calls=[];
 const agents=['anto','atlas','vera','bruno','iris','leo'].map((id,index)=>({id,name:id.toUpperCase(),role:['Dirección','Coordinación','Análisis','Revisión','Visualización','Redacción'][index],color:'#9684bc',model:'gemini-mock',instructions:'MOCK',tools:[]}));
 async function openScene({reduced=false,fallback=false,lowDevice=false}={}){
  const context=await browser.newContext({viewport:{width:1360,height:900},deviceScaleFactor:2,reducedMotion:reduced?'reduce':'no-preference'});
  await context.addInitScript(({fallback,lowDevice})=>{
   Object.defineProperty(navigator,'hardwareConcurrency',{configurable:true,value:lowDevice?2:8});
   Object.defineProperty(navigator,'deviceMemory',{configurable:true,value:lowDevice?2:8});
   if(fallback)window.IntersectionObserver=undefined;
   window.__sceneEvents=[];
   window.EventSource=class{constructor(){window.__sceneEvents.push(this);}close(){}};
   const metric=window.__scenePerformance={draws:0,frames:0};
   const raf=window.requestAnimationFrame.bind(window);
   window.requestAnimationFrame=callback=>raf(time=>{metric.frames++;callback(time);});
   for(const type of ['WebGLRenderingContext','WebGL2RenderingContext']){
    const prototype=window[type]?.prototype;if(!prototype)continue;
    for(const method of ['drawArrays','drawElements','drawArraysInstanced','drawElementsInstanced']){
     const original=prototype[method];if(typeof original!=='function')continue;
     prototype[method]=function(...args){if(this.canvas.closest('.office-canvas'))metric.draws++;return original.apply(this,args);};
    }
   }
  },{fallback,lowDevice});
  await context.route('**/*',async route=>{
   const request=route.request(),url=new URL(request.url()),pathname=url.pathname;
   if(url.origin!==new URL(base).origin){unexpected.push(request.url());return route.abort();}
   if(!pathname.startsWith('/api/'))return route.continue();
   calls.push({path:pathname,method:request.method()});
   const json=value=>route.fulfill({contentType:'application/json',body:JSON.stringify(value)});
   if(/^\/api\/projects\/[^/]+\/office$/.test(pathname))return json({detail:'Legacy fixture without expansion'},404);
   if(pathname==='/api/projects')return json([{id:'scene-project',name:'MOCK · rendimiento 3D'}]);
   if(pathname==='/api/settings')return json({provider:'gemini',agents,ollama_url:'',openai_url:''});
   if(pathname==='/api/models')return json({provider:'gemini',connected:false,models:[],credential:{configured:false,valid_format:false,source:'MOCK',accepted_names:[]}});
   if(['/api/runs','/api/files','/api/messages','/api/feedback','/api/artifacts'].includes(pathname))return json([]);
   unexpected.push(request.method()+' '+pathname);return json({detail:'Unmocked fixture API'});
  });
  const page=await context.newPage();page.on('pageerror',error=>errors.push(error.message));
  await page.goto(base);await page.waitForSelector('[data-renderer-ready="true"]',{timeout:45000});
  await page.waitForFunction(()=>window.__scenePerformance.draws>0);
  return{context,page};
 }
 const metrics=page=>page.evaluate(()=>({...window.__scenePerformance}));
 const position=page=>page.locator('[data-agent-id="anto"]').evaluate(element=>({x:element.dataset.worldX,z:element.dataset.worldZ,target:element.dataset.target}));
 async function scrollAway(page){
  await page.evaluate(()=>{const spacer=document.createElement('div');spacer.id='fixture-scroll-space';spacer.style.height='2000px';document.body.append(spacer);window.scrollTo(0,document.documentElement.scrollHeight);});
  await page.waitForSelector('[data-render-state="offscreen"]');
 }
 async function assertPaused(page){
  const before=await metrics(page),beforePosition=await position(page);
  await page.waitForTimeout(300);
  assert.deepEqual(await metrics(page),before,'Invisible scenes must stop WebGL draws and RAF callbacks');
  assert.deepEqual(await position(page),beforePosition,'Paused scenes must retain the current route and position');
  return before;
 }
 async function scrollBack(page,before){
  await page.evaluate(()=>window.scrollTo(0,0));
  await page.waitForSelector('[data-render-state="active"]');
  await page.waitForFunction(draws=>window.__scenePerformance.draws>draws,before.draws);
 }
 try{
  browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  const{context,page}=await openScene();
  assert.equal(await page.locator('canvas').evaluate(canvas=>Math.abs(canvas.width/canvas.clientWidth-1.6)<.01),true,'Normal devices retain the existing resolution cap');
  await page.getByRole('button',{name:'Reunión',exact:true}).click();
  await page.waitForFunction(()=>document.querySelector('[data-agent-id="anto"]').dataset.walking==='true');
  await scrollAway(page);const offscreen=await assertPaused(page);
  await page.evaluate(()=>window.__sceneEvents.at(-1).onmessage({data:JSON.stringify({seq:1,agent:'vera',kind:'agent',project:'scene-project',payload:JSON.stringify({agent_status:'En ejecución'}),created:'2026-10-27T19:00:00Z'})}));
  assert.deepEqual(await metrics(page),offscreen,'Agent status changes must not restart an offscreen renderer');
  await scrollBack(page,offscreen);
  assert.equal(await page.locator('.team-person.chosen strong').textContent(),'ANTO','Selection survives suspension');
  await page.waitForFunction(()=>document.querySelector('[data-agent-id="vera"]').dataset.agentState==='En ejecución');
  assert.equal((await position(page)).target,'2,14','A paused journey keeps its destination');
  const resumed=await position(page);
  await page.waitForFunction(previous=>{const actor=document.querySelector('[data-agent-id="anto"]');return actor.dataset.worldX!==previous.x||actor.dataset.worldZ!==previous.z;},resumed);

  await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,value:true});document.dispatchEvent(new Event('visibilitychange'));});
  await page.waitForSelector('[data-render-state="hidden"]');const hidden=await assertPaused(page);
  await page.evaluate(()=>{delete document.hidden;document.dispatchEvent(new Event('visibilitychange'));});
  await page.waitForSelector('[data-render-state="active"]');
  await page.waitForFunction(draws=>window.__scenePerformance.draws>draws,hidden.draws);
  await context.close();

  const reduced=await openScene({reduced:true});
  assert.equal(await reduced.page.locator('canvas').evaluate(canvas=>Math.abs(canvas.width/canvas.clientWidth-1.15)<.01),true,'Reduced motion uses the lower resolution cap');
  await scrollAway(reduced.page);const reducedPaused=await assertPaused(reduced.page);await scrollBack(reduced.page,reducedPaused);
  await reduced.page.getByRole('button',{name:'Reunión',exact:true}).click();
  await reduced.page.waitForFunction(()=>{const actor=document.querySelector('[data-agent-id="anto"]');return +actor.dataset.worldX===2.5&&+actor.dataset.worldZ===14.5&&actor.dataset.walking==='false';});
  await reduced.context.close();

  const low=await openScene({lowDevice:true,fallback:true});
  assert.equal(await low.page.locator('canvas').evaluate(canvas=>Math.abs(canvas.width/canvas.clientWidth-1.15)<.01),true,'A modest device uses the lower resolution cap without requiring reduced motion');
  await scrollAway(low.page);const fallbackPaused=await assertPaused(low.page);await scrollBack(low.page,fallbackPaused);
  await low.context.close();
  assert.deepEqual(calls.filter(call=>call.method!=='GET'),[],'Scene controls do not execute backend work or infer with a model');
  assert.deepEqual(unexpected,[]);assert.deepEqual(errors,[]);
  console.log('PASS WebGL real + APIs MOCK: pausa sin draws ni RAF fuera del viewport y con visibilitychange simulado; ruta, selección y estados conservados; reanudación, movimiento reducido, resolución modesta y fallback sin IntersectionObserver. Cero inferencias.');
 }finally{if(browser)await browser.close();await new Promise(resolve=>fixture.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
