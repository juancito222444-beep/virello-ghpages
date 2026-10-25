/* Browser voice lifecycle with synthetic Web Speech and API responses only. */
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const base=process.env.ANTO_TEST_URL||'http://127.0.0.1:18768';
if(!['127.0.0.1','localhost','::1'].includes(new URL(base).hostname))throw Error('Use an isolated loopback frontend for this test');
const model='gemini-2.5-flash-lite';
const agents=['anto','atlas','vera','bruno','iris','leo'].map((id,index)=>({id,name:id.toUpperCase(),role:['Dirección','Coordinación','Análisis','Revisión','Visualización','Redacción'][index],color:'#b58aee',instructions:'MOCK',model,tools:[]}));
const longAnswer=Array.from({length:65},(_,index)=>'Fragmento '+index+'.').join(' ');

async function mockApis(page,calls){
 await page.route('**/*',async route=>{
  const request=route.request(),url=new URL(request.url());
  if(url.origin!==new URL(base).origin)return route.abort();
  if(!url.pathname.startsWith('/api/'))return route.continue();
  const path=url.pathname;calls.push({path,method:request.method()});
  const json=value=>route.fulfill({contentType:'application/json',body:JSON.stringify(value)});
  if(path==='/api/projects')return json([{id:'voice-project',name:'MOCK · voz'},{id:'other-project',name:'MOCK · otro'}]);
  if(path==='/api/settings')return json({provider:'gemini',agents,ollama_url:'http://127.0.0.1:11434',openai_url:'http://127.0.0.1:1234/v1'});
  if(path==='/api/models')return json({provider:'gemini',connected:true,inference_verified:true,models:[model]});
  if(path==='/api/messages')return json(url.searchParams.get('agent')==='anto'&&url.searchParams.get('project')==='voice-project'?[{id:'answer-one',role:'assistant',content:'Primera respuesta de prueba.',model},{id:'answer-long',role:'assistant',content:longAnswer,model}]:[]);
  if(path==='/api/events')return route.fulfill({contentType:'text/event-stream',body:': MOCK\n\n'});
  if(path==='/api/usage')return json({day:'2026-10-25',attempted:0,remaining:100,input_tokens:0,output_tokens:0,total_tokens:0,unknown_attempts:0,policy:{daily_requests:100,max_output_tokens:1024,concise:true}});
  if(path.endsWith('/memory'))return json({summary:''});
  return json([]);
 });
}

function installSpeechMocks(){
 const state={recognitions:[],spoken:[],cancelled:0,currentSpeech:null,heldResult:null};
 class Recognition{
  constructor(){this.starts=0;this.stops=0;this.aborts=0;state.recognitions.push(this);}
  start(){this.starts++;queueMicrotask(()=>this.onstart?.());}
  stop(){this.stops++;queueMicrotask(()=>this.onend?.());}
  abort(){this.aborts++;}
 }
 class Utterance{constructor(text){this.text=text;this.lang='';}}
 Object.defineProperty(window,'SpeechRecognition',{configurable:true,value:Recognition});
 Object.defineProperty(window,'webkitSpeechRecognition',{configurable:true,value:undefined});
 Object.defineProperty(window,'SpeechSynthesisUtterance',{configurable:true,value:Utterance});
 Object.defineProperty(window,'speechSynthesis',{configurable:true,value:{
  getVoices:()=>[{name:'MOCK español',lang:'es-PE'}],
  cancel:()=>{state.cancelled++;state.currentSpeech=null;},
  speak:utterance=>{state.spoken.push({text:utterance.text,lang:utterance.lang});state.currentSpeech=utterance;},
 }});
 state.result=(results,resultIndex=0)=>state.recognitions.at(-1).onresult?.({resultIndex,results:results.map(value=>({isFinal:value.final,0:{transcript:value.text}}))});
 state.error=error=>state.recognitions.at(-1).onerror?.({error});
 state.endSpeech=()=>state.currentSpeech?.onend?.();
 window.__voiceMock=state;
}

(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 try{
  const page=await browser.newPage({viewport:{width:1500,height:1150}}),calls=[],errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.addInitScript(installSpeechMocks);await mockApis(page,calls);await page.goto(base);
  const message=page.getByLabel('Mensaje',{exact:true});await message.waitFor();
  await page.locator('.message.assistant .speech-control').nth(1).waitFor();
  const apiCount=()=>calls.filter(call=>call.path==='/api/chat').length;
  await message.fill('Borrador escrito');
  await page.getByRole('button',{name:'Dictar mensaje',exact:true}).click();
  await page.getByText('Escuchando en español…',{exact:true}).waitFor();
  await page.evaluate(()=>window.__voiceMock.result([{text:'dictado provisional',final:false}]));
  await page.getByLabel('Dictado provisional',{exact:true}).getByText('dictado provisional',{exact:true}).waitFor();
  assert.equal(await message.inputValue(),'Borrador escrito','Interim recognition must never alter or send a message');
  assert.equal(apiCount(),0);
  await page.evaluate(()=>window.__voiceMock.result([{text:'hola mundo',final:true}]));
  await page.waitForFunction(()=>document.querySelector('textarea[aria-label="Mensaje"]').value==='Borrador escrito hola mundo');
  await page.evaluate(()=>window.__voiceMock.result([{text:'hola mundo',final:true}]));
  assert.equal(await message.inputValue(),'Borrador escrito hola mundo','Repeated final results must not duplicate text');
  await message.fill('Edición manual conservada');
  await page.evaluate(()=>window.__voiceMock.result([{text:'hola mundo',final:true},{text:'otra frase',final:true}],1));
  await page.waitForFunction(()=>document.querySelector('textarea[aria-label="Mensaje"]').value==='Edición manual conservada otra frase');
  await page.getByRole('button',{name:'Detener dictado',exact:true}).click();
  await page.getByRole('button',{name:'Dictar mensaje',exact:true}).waitFor();
  assert.equal(await page.evaluate(()=>window.__voiceMock.recognitions[0].stops),1);
  assert.equal(apiCount(),0,'Dictation must require an explicit Send action');

  await page.getByRole('button',{name:'Dictar mensaje',exact:true}).click();
  await page.getByText('Escuchando en español…',{exact:true}).waitFor();
  await page.evaluate(()=>window.__voiceMock.error('not-allowed'));
  await page.getByRole('alert').getByText('Permite el micrófono',{exact:false}).waitFor();
  assert.equal(await message.inputValue(),'Edición manual conservada otra frase');
  await page.getByRole('button',{name:'Dictar mensaje',exact:true}).click();
  await page.getByText('Escuchando en español…',{exact:true}).waitFor();
  await page.evaluate(()=>window.__voiceMock.heldResult=window.__voiceMock.recognitions.at(-1).onresult);
  await page.getByRole('button',{name:'VERA Análisis',exact:true}).click();
  await page.getByRole('heading',{name:'VERA',exact:false}).waitFor();
  await page.evaluate(()=>window.__voiceMock.heldResult({resultIndex:0,results:[{isFinal:true,0:{transcript:'NO MEZCLAR CONTEXTO'}}]}));
  assert.equal(await message.inputValue(),'Edición manual conservada otra frase');
  assert(await page.evaluate(()=>window.__voiceMock.recognitions.at(-1).aborts)>0);

  await page.getByRole('button',{name:'ANTO Dirección',exact:true}).click();
  const speech=page.locator('.message.assistant .speech-control');await speech.nth(1).waitFor();
  await speech.nth(0).getByRole('button',{name:'Escuchar respuesta',exact:true}).click();
  await speech.nth(0).getByRole('button',{name:'Detener lectura',exact:true}).waitFor();
  assert.equal(await page.evaluate(()=>window.__voiceMock.spoken[0].text),'Primera respuesta de prueba.');
  await speech.nth(1).getByRole('button',{name:'Escuchar respuesta',exact:true}).click();
  await speech.nth(0).getByRole('button',{name:'Escuchar respuesta',exact:true}).waitFor();
  assert.equal(await page.getByRole('button',{name:'Detener lectura',exact:true}).count(),1,'Only one response may speak');
  // Run every synthetic end callback: the complete long response must be read.
  for(let index=0;index<20&&await page.getByRole('button',{name:'Detener lectura',exact:true}).count();index++)await page.evaluate(()=>window.__voiceMock.endSpeech());
  await speech.nth(1).getByRole('button',{name:'Escuchar respuesta',exact:true}).waitFor();
  const spoken=await page.evaluate(()=>window.__voiceMock.spoken.slice(1));
  assert(spoken.length>1,'Long responses should use bounded voice chunks');
  assert(spoken.every(value=>value.text.length<=240&&value.lang==='es-PE'));
  assert.equal(spoken.map(value=>value.text).join(' '),longAnswer,'Long responses must never be silently truncated');
  await speech.nth(0).getByRole('button',{name:'Escuchar respuesta',exact:true}).click();
  const cancelled=await page.evaluate(()=>window.__voiceMock.cancelled);
  await page.getByLabel('Proyecto activo').selectOption('other-project');
  await page.waitForFunction(before=>window.__voiceMock.cancelled>before,cancelled);
  assert.equal(apiCount(),0);
  assert.deepEqual(errors,[]);
  await page.close();

  const unsupported=await browser.newPage({viewport:{width:390,height:844}}),unsupportedCalls=[];
  unsupported.on('pageerror',error=>errors.push(error.message));
  await unsupported.emulateMedia({reducedMotion:'reduce'});
  await unsupported.addInitScript(()=>{
   for(const name of ['SpeechRecognition','webkitSpeechRecognition','speechSynthesis','SpeechSynthesisUtterance'])Object.defineProperty(window,name,{configurable:true,value:undefined});
  });
  await mockApis(unsupported,unsupportedCalls);await unsupported.goto(base);
  await unsupported.getByText('El dictado no está disponible en este navegador.',{exact:false}).waitFor();
  await unsupported.locator('.message.assistant .speech-button').first().waitFor({state:'attached'});
  const unavailableDictation=unsupported.locator('.voice-input button');
  assert.equal(await unavailableDictation.getAttribute('aria-label'),'Dictar mensaje');
  assert(await unavailableDictation.isDisabled());
  assert(await unsupported.locator('.speech-button').first().isDisabled());
  assert.equal(await unsupported.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  assert.deepEqual(errors,[]);
  console.log('PASS MOCK: dictado explícito, texto provisional/final, edición manual, permisos, cancelación por contexto, voz única y lectura larga completa, fallback móvil. Sin audio real, envío automático ni llamadas a proveedores.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
