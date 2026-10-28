// Synthetic browser regression: all API requests are mocked, and all other origins are blocked.
const assert=require('node:assert/strict');
const fs=require('node:fs/promises');
const path=require('node:path');
const {chromium}=require('playwright');
const base=process.env.ANTO_TEST_URL||'http://127.0.0.1:8791';
if(!['127.0.0.1','localhost','::1'].includes(new URL(base).hostname))throw Error('Use an isolated loopback frontend for this test');

(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 try{
  const page=await browser.newPage({viewport:{width:1512,height:1100}}),errors=[],writes=[];
  const captures=process.env.ANTO_SCREENSHOT_DIR;if(captures)await fs.mkdir(captures,{recursive:true});
  page.on('pageerror',error=>errors.push(error.message));
  await page.addInitScript(()=>{Object.defineProperty(navigator,'clipboard',{value:{writeText:async value=>{globalThis.__copied=value;}},configurable:true});});
  const projects=[{id:'mock-project',name:'Café Aurora'},{id:'other-project',name:'Proyecto Bosque'}];
  const agents=['anto','atlas','vera','bruno','iris','leo'].map(id=>({id,name:id.toUpperCase(),role:'MOCK',color:'#9684bc',model:'gemini-mock',instructions:'MOCK-never-export-key',tools:[]}));
  const files=[{id:'file-pdf',name:'Informe trimestral.pdf',kind:'document',size:100},{id:'file-png',name:'Diagrama.png',kind:'image',size:100}];
  const artifacts=[{id:'artifact-1',name:'informe.md',run:'mock-run'},{id:'artifact-2',name:'ventas.csv',run:'mock-run'}];
  const messages=[{id:'message-user',role:'user',content:'Resume el informe sintético.',attachments:[{id:'file-pdf',name:files[0].name}]},{id:'message-assistant',role:'assistant',content:'MOCK: el informe contiene tres resultados.',model:'gemini-mock',provider:'gemini'}];
  await page.route('**/*',async route=>{
   const request=route.request(),url=new URL(request.url()),path=url.pathname;
   if(url.origin!==new URL(base).origin)return route.abort();
   if(!path.startsWith('/api/'))return route.continue();
   const method=request.method(),json=(body,status=200)=>route.fulfill({status,contentType:'application/json',body:JSON.stringify(body)});
   if(method!=='GET')writes.push({method,path,body:request.postDataJSON()});
   if(path==='/api/system/status')return json(require('./mock-system-status.cjs')());
   if(/^\/api\/projects\/[^/]+\/office$/.test(url.pathname))return route.fulfill({status:404,contentType:'application/json',body:JSON.stringify({detail:'Legacy fixture without expansion'})});
   if(path==='/api/projects')return json(projects);
   if(path.startsWith('/api/projects/')&&method==='PUT'){
    const id=path.split('/').pop(),project=projects.find(item=>item.id===id);
    assert.ok(project);project.name=request.postDataJSON().name;return json(project);
   }
   if(path==='/api/settings')return json({provider:'gemini',agents,ollama_url:'',openai_url:'',api_key:'MOCK-never-export-key'});
   if(path==='/api/models')return json({provider:'gemini',connected:true,inference_verified:true,models:['gemini-mock'],endpoint:'MOCK',credential:{configured:true,valid_format:true,source:'MOCK',accepted_names:[]}});
   if(path==='/api/files')return json(files);
   if(path==='/api/artifacts')return json(artifacts);
   if(path==='/api/messages')return json(messages);
   if(path==='/api/chat')return route.fulfill({contentType:'text/event-stream',body:'data: '+JSON.stringify({token:'MOCK: respuesta parcial'})+'\n\ndata: '+JSON.stringify({error:'MOCK: conexión interrumpida'})+'\n\n'});
   if(path==='/api/events')return route.fulfill({contentType:'text/event-stream',body:': MOCK\n\n'});
   if(['/api/runs','/api/feedback'].includes(path))return json([]);
   throw Error('Unexpected API request: '+method+' '+path);
  });
  await page.goto(base);
  await page.getByRole('button',{name:'Copiar respuesta',exact:true}).click();
  assert.equal(await page.evaluate(()=>globalThis.__copied),messages[1].content);
  const downloading=page.waitForEvent('download');
  await page.getByRole('button',{name:'Descargar conversación en Markdown',exact:true}).click();
  const download=await downloading,markdown=await fs.readFile(await download.path(),'utf8');
  assert.ok(download.suggestedFilename().endsWith('.md'));
  for(const content of ['Café Aurora','ANTO',messages[0].content,messages[1].content,files[0].name])assert.ok(markdown.includes(content));
  assert.ok(!markdown.includes('MOCK-never-export-key'),'Export uses visible messages, not settings or credentials');
  assert.deepEqual(writes,[],'Copy and export do not call a backend or a model');
  await page.getByRole('button',{name:'Reutilizar último mensaje',exact:true}).click();
  assert.equal(await page.getByLabel('Mensaje',{exact:true}).inputValue(),messages[0].content);
  assert.equal(await page.locator('.attachment-chip').count(),1,'Reusing restores original available references');
  assert.ok((await page.locator('.attachment-chip').innerText()).includes(files[0].name));
  assert.deepEqual(writes,[],'Reusing prepares the message without sending or spending quota');
  if(captures)await page.screenshot({path:path.join(captures,'productivity-office-desktop.png'),fullPage:true});

  await page.getByRole('button',{name:'Proyectos',exact:true}).click();
  await page.getByLabel('Buscar proyectos',{exact:true}).fill('cafe');
  await page.getByText('1 de 2 proyectos',{exact:true}).waitFor();
  assert.equal(await page.locator('.project-card').count(),1,'Search ignores accents and case');
  await page.getByLabel('Buscar proyectos',{exact:true}).fill('sin coincidencias');
  await page.getByText('No hay proyectos que coincidan con tu búsqueda.',{exact:true}).waitFor();
  await page.getByLabel('Buscar proyectos',{exact:true}).fill('');
  await page.getByRole('button',{name:'Renombrar proyecto Café Aurora',exact:true}).click();
  await page.getByLabel('Nuevo nombre de Café Aurora',{exact:true}).fill('   ');
  assert.equal(await page.getByRole('button',{name:'Guardar nombre',exact:true}).isDisabled(),true);
  await page.getByLabel('Nuevo nombre de Café Aurora',{exact:true}).fill('Estudio renovado');
  await page.getByRole('button',{name:'Guardar nombre',exact:true}).click();
  await page.getByRole('button',{name:'Abrir proyecto Estudio renovado',exact:true}).waitFor();
  assert.deepEqual(writes,[{method:'PUT',path:'/api/projects/mock-project',body:{name:'Estudio renovado'}}]);
  assert.equal(await page.getByLabel('Proyecto activo').inputValue(),'mock-project');
  assert.ok((await page.getByLabel('Proyecto activo').innerText()).includes('Estudio renovado'));
  await page.getByRole('button',{name:'Renombrar proyecto Proyecto Bosque',exact:true}).click();
  await page.getByLabel('Nuevo nombre de Proyecto Bosque',{exact:true}).fill('No guardar');
  await page.getByRole('button',{name:'Cancelar',exact:true}).click();
  assert.equal(writes.length,1,'Cancel keeps the original project name');

  await page.getByRole('button',{name:'Datos',exact:true}).click();
  await page.getByLabel('Buscar archivos',{exact:true}).fill('PDF');
  await page.getByText('1 de 2 archivos',{exact:true}).waitFor();
  assert.equal(await page.locator('.file-list button').count(),1);
  await page.getByLabel('Buscar archivos',{exact:true}).fill('inexistente');
  await page.getByText('No hay archivos que coincidan con tu búsqueda.',{exact:true}).waitFor();
  await page.getByRole('button',{name:'Entregables',exact:true}).click();
  await page.getByLabel('Buscar entregables',{exact:true}).fill('informe');
  await page.getByText('1 de 2 entregables',{exact:true}).waitFor();
  assert.equal(await page.locator('.artifact-grid a').count(),1);
  await page.getByLabel('Buscar entregables',{exact:true}).fill('inexistente');
  await page.getByText('No hay entregables que coincidan con tu búsqueda.',{exact:true}).waitFor();
  await page.setViewportSize({width:390,height:844});
  for(const name of ['Entregables','Datos','Proyectos']){
   await page.getByRole('button',{name,exact:true}).click();
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'No mobile overflow in '+name);
  }
  if(captures)await page.screenshot({path:path.join(captures,'productivity-projects-mobile.png'),fullPage:true});
  assert.equal(writes.length,1,'Search makes no extra API calls');
  // A response that ended in an error must remain visibly provisional in the export.
  await page.getByRole('button',{name:'Oficina',exact:true}).click();
  await page.getByLabel('Mensaje',{exact:true}).fill('MOCK: provocar respuesta parcial.');
  await page.getByTitle('Enviar',{exact:true}).click();
  await page.getByRole('alert').getByText('MOCK: conexión interrumpida',{exact:true}).waitFor();
  const partialDownload=page.waitForEvent('download');
  await page.getByRole('button',{name:'Descargar conversación en Markdown',exact:true}).click();
  const partialMarkdown=await fs.readFile(await(await partialDownload).path(),'utf8');
  assert.ok(partialMarkdown.includes('## ANTO · respuesta incompleta'));
  assert.ok(partialMarkdown.includes('MOCK: respuesta parcial'));
  assert.deepEqual(errors,[]);
  console.log('PASS MOCK: búsqueda local/acento/recuentos/vacíos, renombrado sin cambiar ID y cancelación, copiar/exportar Markdown sin ajustes y móvil; cero inferencias.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
