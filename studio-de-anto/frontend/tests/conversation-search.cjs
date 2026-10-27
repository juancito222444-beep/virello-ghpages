// Search operates on the loaded conversation; every API is synthetic and external origins are blocked.
const assert=require('node:assert/strict');
const fs=require('node:fs/promises');
const {chromium}=require('playwright');
const base=process.env.ANTO_TEST_URL||'http://127.0.0.1:8791';
if(!['127.0.0.1','localhost','::1'].includes(new URL(base).hostname))throw Error('Use an isolated loopback frontend');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox']});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1050},reducedMotion:'reduce'}),errors=[],posts=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.addInitScript(()=>{window.EventSource=class{close(){}};Object.defineProperty(navigator,'clipboard',{value:{writeText:async text=>{window.__copied=text;}},configurable:true});});
  const agents=['anto','vera'].map(id=>({id,name:id.toUpperCase(),role:'MOCK',color:'#9684bc',model:'gemini-mock',instructions:'MOCK-private-search-key',tools:[]}));
  const history=[...Array.from({length:8},(_,index)=>({id:'filler-'+index,role:'assistant',content:'MOCK: contexto anterior '+index+'. '+('Una propuesta requiere revisar las fuentes y conservar los originales. '.repeat(4))})),
   {id:'user-cafe',role:'user',content:'¿Qué incluye el presupuesto del CAFÉ?'},
   {id:'answer-cafe',role:'assistant',content:'El café necesita mesas y conexión estable.'},
   {id:'literal-user',role:'user',content:'Busca el símbolo [.*] literalmente.'},
   {id:'answer-turns',role:'assistant',content:'Una cafetería puede organizarse por turnos.'}];
  await page.route('**/*',async route=>{
   const request=route.request(),url=new URL(request.url()),path=url.pathname;
   if(url.origin!==new URL(base).origin)return route.abort();
   if(!path.startsWith('/api/'))return route.continue();
   const json=body=>route.fulfill({contentType:'application/json',body:JSON.stringify(body)});
   if(request.method()==='POST')posts.push({path,body:request.postDataJSON()});
   if(path==='/api/projects')return json([{id:'search-project',name:'Proyecto de búsqueda'},{id:'other-project',name:'Otro proyecto'}]);
   if(path==='/api/settings')return json({provider:'gemini',agents,ollama_url:'',openai_url:'',api_key:'MOCK-private-search-key'});
   if(path==='/api/models')return json({provider:'gemini',connected:true,inference_verified:true,models:['gemini-mock'],endpoint:'MOCK',credential:{configured:true,valid_format:true,source:'MOCK',accepted_names:[]}});
   if(path==='/api/messages')return json(url.searchParams.get('project')==='search-project'&&url.searchParams.get('agent')==='anto'?history:[{id:'other-history',role:'assistant',content:'MOCK: conversación independiente'}]);
   if(path==='/api/chat')return route.fulfill({contentType:'text/event-stream',body:'data: '+JSON.stringify({token:'MOCK: otro café en respuesta nueva'})+'\n\ndata: '+JSON.stringify({done:true,message_id:'new-answer',provider:'gemini',model:'gemini-mock'})+'\n\n'});
   if(['/api/feedback','/api/runs','/api/files','/api/artifacts'].includes(path))return json([]);
   throw Error('Unexpected API request: '+request.method()+' '+path);
  });
  await page.goto(base);await page.getByText(history.at(-1).content,{exact:true}).waitFor();
  const input=page.getByLabel('Mensaje',{exact:true}),query=page.getByLabel('Buscar texto en conversación',{exact:true}),role=page.getByLabel('Filtrar mensajes por autor',{exact:true}),results=page.getByRole('status',{name:'Resultados de búsqueda',exact:true});
  await input.fill('MOCK: borrador que se conserva');
  await page.getByRole('button',{name:'Buscar en conversación',exact:true}).click();
  await query.fill('cAfE');
  await page.waitForFunction(()=>document.querySelectorAll('.message.search-match').length===3);
  assert.equal(await page.locator('.message').count(),history.length,'Searching highlights without removing any message');
  assert.ok((await results.innerText()).includes('3'));
  const active=page.locator('.message.search-active'),first=await active.innerText();
  await page.getByRole('button',{name:'Coincidencia anterior',exact:true}).click();
  assert.notEqual(await active.innerText(),first);await page.getByRole('button',{name:'Coincidencia siguiente',exact:true}).click();assert.equal(await active.innerText(),first,'Match navigation wraps');
  await query.press('Enter');const second=await active.innerText();assert.notEqual(second,first);
  await query.press('Shift+Enter');assert.equal(await active.innerText(),first);
  assert.equal(await active.evaluate(node=>{const a=node.getBoundingClientRect(),b=node.closest('.chat-body').getBoundingClientRect();return a.bottom>b.top&&a.top<b.bottom;}),true,'Active match is revealed inside conversation');
  await role.selectOption('assistant');await page.waitForFunction(()=>document.querySelectorAll('.message.search-match').length===2);
  await role.selectOption('user');await page.waitForFunction(()=>document.querySelectorAll('.message.search-match').length===1);
  await role.selectOption('all');await query.fill('[.*]');await page.waitForFunction(()=>document.querySelectorAll('.message.search-match').length===1);
  assert.ok((await active.innerText()).includes('[.*]'),'Search text is literal rather than a regular expression');
  await query.fill('sin coincidencia mock');await results.getByText('Sin coincidencias',{exact:true}).waitFor();
  assert.equal(await page.getByRole('button',{name:'Coincidencia siguiente',exact:true}).isDisabled(),true);
  assert.equal(await input.inputValue(),'MOCK: borrador que se conserva');assert.equal(posts.length,0,'Search and keyboard navigation never send prompts');
  await query.fill('cafe');
  const downloadEvent=page.waitForEvent('download');await page.getByRole('button',{name:'Descargar conversación en Markdown',exact:true}).click();
  const download=await downloadEvent,markdown=await fs.readFile(await download.path(),'utf8');
  assert.ok(markdown.includes(history[0].content)&&markdown.includes(history.at(-1).content)&&markdown.includes('[.*]'),'Export includes matching and nonmatching history');
  assert.ok(!markdown.includes('MOCK-private-search-key'));
  await query.press('Escape');assert.equal(await query.count(),0);assert.equal(await page.locator('.message.search-match').count(),0);
  await page.getByRole('button',{name:'Buscar en conversación',exact:true}).click();await query.fill('cafe');
  await page.getByRole('button',{name:'Coincidencia siguiente',exact:true}).click();const selectedBefore=await active.innerText();
  await input.fill('MOCK: añade respuesta');await page.getByTitle('Enviar',{exact:true}).click();await page.getByText('MOCK: otro café en respuesta nueva',{exact:true}).waitFor();
  assert.equal(await active.innerText(),selectedBefore,'An appended response preserves an existing selected match');
  assert.equal(posts.length,1);assert.equal(posts[0].path,'/api/chat');
  const activeInView=()=>page.waitForFunction(()=>{const node=document.querySelector('.message.search-active');if(!node)return false;const a=node.getBoundingClientRect(),b=node.closest('.chat-body').getBoundingClientRect();return a.bottom>b.top&&a.top<b.bottom;});
  await page.getByRole('button',{name:'Datos',exact:true}).click();
  await page.getByRole('button',{name:'Oficina',exact:true}).click();await activeInView();
  assert.equal(await active.innerText(),selectedBefore,'Returning to Office reveals the same match');
  await page.getByTitle('Mostrar u ocultar conversación',{exact:true}).click();
  await page.getByTitle('Mostrar u ocultar conversación',{exact:true}).click();await activeInView();
  assert.equal(await active.innerText(),selectedBefore,'Reopening the panel reveals the same match');
  await input.fill('MOCK: conservar al cambiar');
  await page.locator('.team-person').filter({hasText:'VERA'}).click();await page.getByText('MOCK: conversación independiente',{exact:true}).waitFor();
  assert.equal(await query.count(),0);assert.equal(await page.locator('.message.search-match').count(),0);
  await page.locator('.team-person').filter({hasText:'ANTO'}).click();await page.getByText(history.at(-1).content,{exact:true}).waitFor();
  assert.equal(await input.inputValue(),'MOCK: conservar al cambiar');
  await page.getByRole('button',{name:'Buscar en conversación',exact:true}).click();assert.equal(await query.inputValue(),'');await query.fill('cafe');
  await page.getByLabel('Proyecto activo').selectOption('other-project');await page.getByText('MOCK: conversación independiente',{exact:true}).waitFor();assert.equal(await query.count(),0);
  await page.setViewportSize({width:390,height:844});await page.getByRole('button',{name:'Buscar en conversación',exact:true}).click();await query.fill('conversacion');
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'Search controls fit mobile');
  assert.equal(posts.length,1);assert.deepEqual(errors,[]);
  console.log('PASS MOCK: accent/case/literal search, author filter, keyboard and wrapped navigation, preserved history/drafts/selection, complete export, context reset and mobile; zero provider calls.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
