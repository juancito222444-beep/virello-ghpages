// Browser regression with synthetic files and intercepted APIs only. No provider calls.
const assert=require('node:assert/strict');
const {chromium}=require('playwright');

(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 try{
  const page=await browser.newPage({viewport:{width:1512,height:1050}}),errors=[],files=[],sent=[];
  page.on('pageerror',error=>errors.push(error.message));
  const base=process.env.ANTO_TEST_URL||'http://127.0.0.1:8765';
  const agents=['anto','atlas','vera','bruno','iris','leo'].map(id=>({id,name:id.toUpperCase(),role:'MOCK',color:'#9684bc',model:'gemini-mock',instructions:'Prueba sintética',tools:[]}));
  const status={provider:'gemini',connected:true,inference_verified:true,models:['gemini-mock'],endpoint:'MOCK',credential:{configured:true,valid_format:true,source:'MOCK',accepted_names:[]}};
  await page.route('**/api/**',async route=>{
   const request=route.request(),url=new URL(request.url()),path=url.pathname;
   const json=body=>route.fulfill({contentType:'application/json',body:JSON.stringify(body)});
   if(path==='/api/projects')return json([{id:'mock-project',name:'MOCK · adjuntos'}]);
   if(path==='/api/settings')return json({provider:'gemini',agents,ollama_url:'',openai_url:''});
   if(path==='/api/models')return json(status);
   if(path==='/api/events')return route.fulfill({contentType:'text/event-stream',body:': MOCK\n\n'});
   if(path==='/api/files'&&request.method()==='POST'){
    const payload=request.postDataBuffer(),name=/filename="([^"]+)"/.exec(payload.toString('latin1'))?.[1];
    assert.ok(name,'Multipart includes the original filename');
    const kind=name.endsWith('.pdf')?'document':'image',file={id:'mock-file-'+(files.length+1),name,kind,size:100,mime:kind==='document'?'application/pdf':'image/jpeg'};
    assert.ok(kind!=='document'||payload.includes(Buffer.from('%PDF-')),'PDF bytes are uploaded');
    files.push(file);return json({id:file.id,kind,sheets:[]});
   }
   if(path==='/api/files')return json(files);
   if(['/api/runs','/api/artifacts','/api/messages','/api/feedback'].includes(path))return json([]);
   if(path==='/api/chat'){
    sent.push(request.postDataJSON());
    const packets=sent.length===1?[{error:'MOCK: cuota simulada'}]:[{token:'MOCK: documentos recibidos'},{done:true,message_id:'mock-answer',provider:'gemini',model:'gemini-mock'}];
    return route.fulfill({contentType:'text/event-stream',body:packets.map(item=>'data: '+JSON.stringify(item)+'\n\n').join('')});
   }
   throw Error('Unexpected API request in attachment regression: '+request.method()+' '+path);
  });
  await page.goto(base);
  await page.getByLabel('Mensaje',{exact:true}).waitFor();
  const images=await page.evaluate(()=>{const canvas=document.createElement('canvas');canvas.width=16;canvas.height=12;canvas.getContext('2d').fillRect(0,0,16,12);return{png:canvas.toDataURL('image/png').split(',')[1],jpg:canvas.toDataURL('image/jpeg').split(',')[1]};});
  const samples=[{name:'informe.pdf',mimeType:'application/pdf',buffer:Buffer.from('%PDF-1.4\n%%EOF\n')},{name:'foto.jpg',mimeType:'image/jpeg',buffer:Buffer.from(images.jpg,'base64')},{name:'grafico.png',mimeType:'image/png',buffer:Buffer.from(images.png,'base64')}];
  const input=page.locator('.compose-tools input[type=file]');
  for(let index=0;index<samples.length;index++){
   await input.setInputFiles(samples[index]);
   await page.waitForFunction(count=>document.querySelectorAll('.attachment-chip').length===count,index+1);
  }
  assert.equal(sent.length,0,'Uploading never sends a model request');
  // The fourth original is retained in the library but cannot exceed the selection limit.
  await input.setInputFiles({...samples[0],name:'extra.pdf'});
  await page.getByText('Puedes adjuntar hasta 3 archivos por mensaje.',{exact:true}).waitFor();
  assert.equal(files.length,4);
  assert.equal(await page.locator('.attachment-chip').count(),3);
  await page.getByLabel('Mensaje',{exact:true}).fill('MOCK: resume estos documentos.');
  await page.getByTitle('Enviar',{exact:true}).click();
  await page.getByText('MOCK: cuota simulada',{exact:true}).first().waitFor();
  assert.deepEqual(sent[0].attachments,['mock-file-1','mock-file-2','mock-file-3']);
  assert.equal(await page.locator('.attachment-chip').count(),3,'Failed replies preserve the explicit selection');
  assert.equal(await page.getByLabel('Mensaje',{exact:true}).inputValue(),'MOCK: resume estos documentos.');
  await page.getByTitle('Enviar',{exact:true}).click();
  await page.getByText('MOCK: documentos recibidos',{exact:true}).waitFor();
  await page.waitForFunction(()=>document.querySelectorAll('.attachment-chip').length===0);
  assert.deepEqual(sent[1].attachments,sent[0].attachments);
  await page.getByLabel('Mensaje',{exact:true}).fill('MOCK: otra pregunta sin reenviar archivos.');
  const completed=page.waitForResponse(response=>new URL(response.url()).pathname==='/api/chat');
  await page.getByTitle('Enviar',{exact:true}).click();
  await completed;
  await page.waitForFunction(()=>!document.querySelector('button[title="Cancelar conversación"]'));
  assert.deepEqual(sent[2].attachments,[],'Completed replies do not silently resend the files');
  await page.setViewportSize({width:390,height:844});
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'Mobile view has no horizontal overflow');
  assert.deepEqual(errors,[]);
  console.log('PASS: PDF/JPG/PNG upload, explicit selection, limits, error retry, no automatic resending, mobile; all APIs MOCK.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
