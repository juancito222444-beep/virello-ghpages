/** Real WebGL acceptance: run against a running backend, no model or fake AI states. */
const {chromium}=require('playwright');
const path=require('node:path');
const assert=require('node:assert/strict');
const BASE=process.env.ANTO_TEST_URL||'http://127.0.0.1:8765';
const OUT=process.env.ANTO_CAPTURE_DIR||path.resolve(__dirname,'../..');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 try{
  const page=await browser.newPage({viewport:{width:1512,height:1050},deviceScaleFactor:1});const errors=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
  const response=await page.request.post(BASE+'/api/projects',{data:{name:'VERIFICACIÓN visual · sin inferencia'}});assert(response.ok());const project=await response.json();await page.goto(BASE);await page.getByLabel('Proyecto activo').selectOption(project.id);await page.waitForSelector('[data-renderer-ready="true"]',{timeout:45000});console.log('PASS: renderer WebGL preparado');
  await page.screenshot({path:path.join(OUT,'oficina-3d-escritorio.png'),fullPage:true});
  const anto=page.locator('[data-agent-id="anto"]');const vera=page.locator('[data-agent-id="vera"]');
  await vera.click();
  // Click a mesh on the canvas, below its projected label, exercising the raycaster.
  const box=await anto.boundingBox();assert(box,'ANTO label absent');
  await page.mouse.click(box.x+box.width/2,box.y+box.height+27);
  await page.getByRole('heading',{name:'ANTO',exact:false}).waitFor({timeout:5000});
  const initial=await anto.evaluate(e=>({x:+e.dataset.worldX,z:+e.dataset.worldZ}));
  const started=Date.now();const sampleTimer=setInterval(async()=>{try{console.log('MOVIMIENTO',await anto.evaluate(e=>({x:e.dataset.worldX,z:e.dataset.worldZ,walking:e.dataset.walking,state:e.dataset.agentState})));}catch{}},5000);await page.getByRole('button',{name:'Reunión',exact:true}).click();
  await page.waitForFunction(()=>document.querySelector('[data-agent-id="anto"]').dataset.walking==='true',null,{timeout:15000});
  await page.screenshot({path:path.join(OUT,'personaje-caminando.png'),fullPage:true});
  await page.waitForFunction(()=>{const e=document.querySelector('[data-agent-id="anto"]');return Math.abs(+e.dataset.worldX-2.5)<.01&&Math.abs(+e.dataset.worldZ-14.5)<.01&&e.dataset.walking==='false';},null,{timeout:60000});
  console.log('PASS: ANTO llegó al destino de reunión');
  clearInterval(sampleTimer);const final=await anto.evaluate(e=>({x:+e.dataset.worldX,z:+e.dataset.worldZ}));const travelMs=Date.now()-started;
  assert(Math.hypot(final.x-initial.x,final.z-initial.z)>8,'ANTO did not arrive at the meeting');
  await page.getByRole('button',{name:'Saludar',exact:true}).click();await page.waitForFunction(()=>document.querySelector('[data-agent-id="anto"]').dataset.gesture==='saludando',null,{timeout:5000});
  await page.screenshot({path:path.join(OUT,'personaje-saludando.png'),fullPage:true});
  for(let i=0;i<6;i++)await page.getByRole('button',{name:'Acercar',exact:true}).click();
  await page.getByRole('button',{name:'Saludar',exact:true}).click();await page.waitForFunction(()=>document.querySelector('[data-agent-id="anto"]').dataset.gesture==='saludando');
  const close=await anto.boundingBox();assert(close);const clip={x:Math.max(0,close.x-65),y:Math.max(0,close.y-12),width:230,height:225};
  await page.screenshot({path:path.join(OUT,'personaje-saludando-primer-plano.png'),clip});
  await page.getByRole('button',{name:'Restablecer vista',exact:true}).click();
  // Two independent destinations exercise shared cell reservations in the same office.
  await page.getByRole('button',{name:'Escritorio',exact:true}).click();await vera.click();await page.getByRole('heading',{name:'VERA',exact:false}).waitFor();await page.getByRole('button',{name:'Reunión',exact:true}).click();console.log('SOLICITUD VERA',await page.locator('.scene-3d-feedback').innerText());const trafficTimer=setInterval(async()=>{try{console.log('TRÁFICO',await page.locator('[data-agent-id]').evaluateAll(es=>es.filter(e=>['anto','vera'].includes(e.dataset.agentId)).map(e=>({id:e.dataset.agentId,x:e.dataset.worldX,z:e.dataset.worldZ,walking:e.dataset.walking,waiting:e.dataset.waiting,target:e.dataset.target,remaining:e.dataset.remaining}))));}catch{}},5000);
  await page.evaluate(()=>{
   const metric={minimum:Infinity,samples:0,timer:null};window.__antoTrafficMetric=metric;
   metric.timer=setInterval(()=>{
    const agents=[...document.querySelectorAll('[data-agent-id]')].map(e=>({x:+e.dataset.worldX,z:+e.dataset.worldZ}));
    for(let i=0;i<agents.length;i++)for(let j=i+1;j<agents.length;j++)metric.minimum=Math.min(metric.minimum,Math.hypot(agents[i].x-agents[j].x,agents[i].z-agents[j].z));
    metric.samples++;
   },100);
  });
  await page.waitForFunction(()=>{const a=document.querySelector('[data-agent-id="anto"]'),v=document.querySelector('[data-agent-id="vera"]');return Math.abs(+a.dataset.worldX-4.5)<.01&&Math.abs(+a.dataset.worldZ-4.5)<.01&&Math.abs(+v.dataset.worldX-6.5)<.01&&Math.abs(+v.dataset.worldZ-14.5)<.01;},null,{timeout:75000});
  clearInterval(trafficTimer);
  const metric=await page.evaluate(()=>{const metric=window.__antoTrafficMetric;clearInterval(metric.timer);return {minimum:metric.minimum,samples:metric.samples};});
  const minimumDistance=metric.minimum;assert(metric.samples>10,'No se muestreó el trayecto');assert(minimumDistance>=1.65,'Characters overlap during movement');console.log('PASS: ambos agentes llegaron y conservaron separación durante todo el trayecto observado');
  await page.getByRole('button',{name:'Escritorio',exact:true}).click();
  await page.waitForFunction(()=>document.querySelector('[data-agent-id="vera"]').dataset.walking==='true');
  await page.getByRole('button',{name:'Detener',exact:true}).click();
  await page.waitForFunction(()=>document.querySelector('[data-agent-id="vera"]').dataset.walking==='false');
  const stopped=await vera.evaluate(e=>({x:e.dataset.worldX,z:e.dataset.worldZ}));await page.waitForTimeout(600);
  assert.deepEqual(await vera.evaluate(e=>({x:e.dataset.worldX,z:e.dataset.worldZ})),stopped,'La orden de detener no canceló el movimiento');
  console.log('PASS: detener conserva una posición segura');
  await page.setViewportSize({width:390,height:844});await page.waitForTimeout(500);await page.screenshot({path:path.join(OUT,'oficina-3d-movil.png'),fullPage:true});
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);assert(!overflow,'Horizontal overflow on mobile');
  assert.equal(errors.length,0,errors.join('\n'));
  console.log(JSON.stringify({result:'PASS',renderer:'Three.js WebGL real',raycast:true,initial,meeting:final,travelMs,minimumDistance,twoAgentsArrived:true,gesture:'saludando',mobileOverflow:overflow,errors},null,2));
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1)});
