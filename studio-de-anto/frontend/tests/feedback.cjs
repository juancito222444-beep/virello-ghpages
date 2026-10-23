/* E2E explícito con proveedor MOCK: no certifica inferencia ni calidad real. */
const {chromium}=require('playwright');const fs=require('node:fs');
const base=process.env.ANTO_TEST_URL||'http://127.0.0.1:8766';
async function request(path,body,method){const response=await fetch(base+'/api'+path,{method:method||(body?'POST':'GET'),headers:{'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});const data=await response.json();if(!response.ok)throw Error(JSON.stringify(data));return data;}
(async()=>{
 const settings=await request('/settings');settings.provider='ollama';settings.ollama_url='http://127.0.0.1:11555';settings.agents=settings.agents.map(a=>({...a,model:'MOCK-prueba-no-IA'}));await request('/settings',settings,'PUT');
 const project=await request('/projects',{name:'PRUEBA MOCK · sin inferencia real'});
 const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const page=await browser.newPage({viewport:{width:1512,height:1050}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base);await page.getByLabel('Proyecto activo').selectOption(project.id);
 await page.getByLabel('Mensaje',{exact:true}).fill('Prueba explícita MOCK');await page.getByRole('button',{name:'Enviar',exact:true}).click();
 await page.getByRole('button',{name:'Guardar corrección',exact:true}).last().waitFor();
 await page.getByRole('button',{name:'Útil',exact:true}).last().click();
 await page.getByRole('button',{name:'Guardar corrección',exact:true}).last().click();
 const correction='Prefiero que siempre expliques las unidades de la métrica.';
 await page.getByLabel('Corrección para la respuesta').fill(correction);await page.getByRole('button',{name:'Confirmar corrección',exact:true}).click();
 await page.getByText('Correcciones guardadas (1)',{exact:true}).waitFor();
 await page.reload();await page.getByLabel('Proyecto activo').selectOption(project.id);
 await page.getByText('Correcciones guardadas (1)',{exact:true}).waitFor();
 await page.getByLabel('Mensaje',{exact:true}).fill('Otra prueba MOCK');await page.getByRole('button',{name:'Enviar',exact:true}).click();await page.getByRole('button',{name:'Guardar corrección',exact:true}).last().waitFor();
 const log=fs.readFileSync(process.env.ANTO_MOCK_LOG||'/tmp/anto-mock-requests.jsonl','utf8').trim().split('\n').map(JSON.parse);
 if(!log.some(r=>r.messages.some(m=>m.content.includes(correction))))throw Error('La API mock no recibió la corrección guardada');
 await page.getByText('Correcciones guardadas (1)',{exact:true}).click();await page.getByRole('button',{name:'Eliminar corrección',exact:true}).click();
 await page.getByText('Correcciones guardadas (0)',{exact:true}).waitFor();
 // Cambiar de agente cancela la respuesta y no la mezcla con VERA.
 await page.getByLabel('Mensaje',{exact:true}).fill('respuesta lenta MOCK');await page.getByRole('button',{name:'Enviar',exact:true}).click();
 await page.getByRole('button',{name:'VERA Análisis',exact:true}).click();
 await page.getByRole('heading',{name:'VERA',exact:false}).waitFor();await page.waitForTimeout(600);
 if(await page.locator('.message').count())throw Error('Se mezcló el historial de ANTO con VERA');
 await page.getByRole('button',{name:'Configuración',exact:true}).click();
 await page.getByLabel('URL de la API').fill('http://127.0.0.1:11555/');await page.getByRole('button',{name:'Guardar y comprobar API',exact:true}).click();
 await page.locator('.settings-connection.ok').waitFor();if(!(await page.locator('.settings-connection.ok').innerText()).includes('1 modelos disponibles'))throw Error('No se anunció el modelo descubierto');
 if(await page.getByText('Hay cambios sin guardar.',{exact:false}).count())throw Error('La URL normalizada quedó como no guardada');
 await page.getByRole('button',{name:'Guardar y probar inferencia',exact:true}).click();await page.getByText('Respuesta recibida del proveedor',{exact:true}).waitFor();
 if(errors.length)throw Error(errors.join('\n'));
 console.log('PASS MOCK: streaming, guardar/recuperar/borrar corrección, contexto enviado, cambio de agente aislado, URL normalizada y prueba API. Sin inferencia real.');await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
