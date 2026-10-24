/** Never assume an API/proxy error is JSON, and never render its raw HTML/text. */
export async function readApiResponse(response:Response):Promise<any>{
 const text=await response.text();
 if(response.status===204)return null;
 let value:any;
 try{value=JSON.parse(text);}catch{
  if(response.status===401||response.status===403)throw Error('No se pudo acceder al Codespace. Vuelve a abrir la aplicación desde el puerto 8765 e inicia sesión en GitHub.');
  if(response.status===502||response.status===503||response.status===504)throw Error('El servidor no está disponible o tardó demasiado (HTTP '+response.status+'). Espera a que termine de arrancar y vuelve a probar.');
  if(response.status>=500)throw Error('El servidor tuvo un error interno (HTTP '+response.status+'). Reinicia la aplicación del Codespace y vuelve a probar.');
  throw Error('La respuesta del servidor no contiene los datos esperados. Abre la aplicación desde el puerto 8765 y recarga la página.');
 }
 if(!response.ok){
  const detail=value&&typeof value.detail==='string'?value.detail:'La solicitud no pudo completarse (HTTP '+response.status+').';
  throw Error(detail);
 }
 return value;
}

export async function fetchApi(input:RequestInfo|URL,init?:RequestInit):Promise<Response>{
 try{return await fetch(input,init);}catch(error){
  if((error as Error).name==='AbortError')throw error;
  throw Error('No se pudo contactar con el servidor. Revisa que tu Codespace siga encendido y vuelve a abrir la aplicación.');
 }
}
