/** Never assume an API/proxy error is JSON, and never render its raw HTML/text. */
export const SERVER_UPDATE_COMMAND="cd /workspaces/virello-ghpages && test \"$(git branch --show-current)\" = 'codex/studio-de-anto-modelo-real' && git pull --ff-only origin codex/studio-de-anto-modelo-real && bash studio-de-anto/scripts/start-cloud.sh --background";
export class ServerCompatibilityError extends Error{
 constructor(){super('El servidor abierto todavía no incluye Director de ANTO o usa una API incompatible. Actualiza y reinicia el servidor; tu mensaje se conserva.');this.name='ServerCompatibilityError';}
}
const routeError=(status:number)=>'El servidor no incluye esta función o está ejecutando una versión anterior (HTTP '+status+'). Actualiza y reinicia el servidor del estudio y recarga la página.';
export async function readApiResponse(response:Response):Promise<any>{
 const text=await response.text();
 if(response.status===204)return null;
 if(response.status===405)throw Error(routeError(405));
 let value:any;
 try{value=JSON.parse(text);}catch{
  if(response.status===404)throw Error(routeError(404));
  if(response.status===401||response.status===403)throw Error('No se pudo acceder al Codespace. Vuelve a abrir la aplicación desde el puerto 8765 e inicia sesión en GitHub.');
  if(response.status===502||response.status===503||response.status===504)throw Error('El servidor no está disponible o tardó demasiado (HTTP '+response.status+'). Espera a que termine de arrancar y vuelve a probar.');
  if(response.status>=500)throw Error('El servidor tuvo un error interno (HTTP '+response.status+'). Reinicia la aplicación del Codespace y vuelve a probar.');
  throw Error('La respuesta del servidor no contiene los datos esperados. Abre la aplicación desde el puerto 8765 y recarga la página.');
 }
 if(!response.ok){
  if(response.status===404&&(!value||typeof value.detail!=='string'||/^not[\s_-]*found\.?$/i.test(value.detail.trim())))throw Error(routeError(404));
  const detail=value&&typeof value.detail==='string'?value.detail:'La solicitud no pudo completarse (HTTP '+response.status+').';
  throw Error(detail);
 }
 return value;
}

/** Cheap server compatibility check. This endpoint must never invoke a model. */
export async function requireDirectorSupport():Promise<void>{
 const response=await fetchApi('/api/health',{method:'GET',cache:'no-store'});
 if(response.status===404||response.status===405)throw new ServerCompatibilityError();
 const health=await readApiResponse(response);
 if(!health||health.app!=='STUDIO DE ANTO'||health.api_version!=='1'||!Array.isArray(health.features)||!health.features.includes('director-v1'))throw new ServerCompatibilityError();
}

export async function fetchApi(input:RequestInfo|URL,init?:RequestInit):Promise<Response>{
 try{return await fetch(input,init);}catch(error){
  if((error as Error).name==='AbortError')throw error;
  throw Error('No se pudo contactar con el servidor. Revisa que tu Codespace siga encendido y vuelve a abrir la aplicación.');
 }
}
