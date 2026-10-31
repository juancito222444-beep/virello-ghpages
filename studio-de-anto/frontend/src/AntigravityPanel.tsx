import {useEffect,useState} from 'react';
import {fetchApi,readApiResponse} from './api';
type Status={installed:boolean;version:string|null;supported:boolean;extensions_blocked:boolean;busy:boolean;authentication:string;login_command:string};
async function call(path:string,body?:unknown){return readApiResponse(await fetchApi('/api/antigravity'+path,{method:body?'POST':'GET',headers:{'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined,cache:'no-store'}));}
export default function AntigravityPanel({active}:{active?:boolean}){
 const[expanded,setExpanded]=useState(false);
 const[status,setStatus]=useState<Status|null>(null),[prompt,setPrompt]=useState(''),[authorized,setAuthorized]=useState(false),[busy,setBusy]=useState(false),[response,setResponse]=useState(''),[error,setError]=useState(''),[verified,setVerified]=useState(false);
 async function refresh(){try{setStatus(await call(''));}catch(e){setError((e as Error).message);}}
 useEffect(()=>{if(active!==false&&expanded)void refresh();},[active,expanded]);
 async function ask(){setBusy(true);setError('');setVerified(false);setResponse('');try{const result=await call('/ask',{prompt,authorize:authorized});setResponse(result.response);setVerified(true);}catch(e){setError((e as Error).message);}finally{setBusy(false);setAuthorized(false);void refresh();}}
 async function stop(){try{await call('/stop',{});}catch(e){setError((e as Error).message);}}
 return <details className="integration-note" onToggle={e=>setExpanded(e.currentTarget.open)}><summary>Google Antigravity</summary><article aria-label="Integración de Antigravity">
  <h3>Google Antigravity</h3>
  <p>Consulta de texto independiente del equipo de Anto. Solo se envía lo que escribas aquí; no se añaden proyectos ni archivos. Las herramientas de archivos, terminal, web y MCP están bloqueadas.</p>
  <p role="status">{!status?'Estado pendiente':status.installed?'CLI instalada'+(status.version?' · '+status.version:' · versión no comprobada'):'CLI pendiente de instalar'}{status&&' · '+(verified?'Respuesta verificada en esta solicitud':'Inicio de sesión sin verificar')}</p>
  {status&&!status.supported&&<p>{status.extensions_blocked?'El puente está deshabilitado porque hay extensiones globales. Revisa la guía; no se modificó tu perfil.':'El puente requiere Linux y la versión compatible 1.4.12.'}</p>}
  <details><summary>Conectar mi cuenta de Google</summary><p>Desde la raíz de este repositorio, ejecuta en la terminal del mismo entorno e inicia sesión. Vuelve aquí para enviar tu primera consulta. Actualizar el estado no consume IA ni comprueba tu cuenta.</p><code style={{overflowWrap:'anywhere'}}>{status?.login_command||'studio-de-anto/local-data/tools/antigravity/bin/agy'}</code><p><a href="https://antigravity.google/docs/getting-started?tab=cli" target="_blank" rel="noreferrer">Instalación y acceso oficiales</a> · <a href="https://antigravity.google.com/" target="_blank" rel="noreferrer">Abrir Antigravity</a></p></details>
  <label>Solicitud para Antigravity<textarea value={prompt} maxLength={4000} disabled={busy} onChange={e=>{setPrompt(e.target.value);setAuthorized(false);}} placeholder="Describe la idea o el plan que quieres consultar…"/></label>
  <label className="checkbox"><input type="checkbox" checked={authorized} disabled={busy} onChange={e=>setAuthorized(e.target.checked)}/>Autorizo enviar este texto a Google Antigravity y consumir la cuota de mi cuenta en esta solicitud.</label>
  <div className="api-config-row"><button type="button" className="button primary" disabled={!status?.supported||busy||status?.busy||!authorized||!prompt.trim()} onClick={ask}>{busy?'Consultando…':'Consultar Antigravity'}</button><button type="button" className="button secondary" onClick={refresh}>Actualizar estado de Antigravity</button>{(busy||status?.busy)&&<button type="button" className="button secondary" onClick={stop}>Detener Antigravity</button>}</div>
  <p className="caption">Una solicitud, máximo 90 segundos y sin reintentos automáticos. Detener puede dejar consumo ya iniciado. La respuesta queda en esta pantalla; cópiala antes de cerrar.</p>
  {error&&<p className="chat-error" role="alert">{error}</p>}
  {response&&<div className="probe-result"><strong>Respuesta de Antigravity</strong><p style={{whiteSpace:'pre-wrap'}}>{response}</p></div>}
 </article></details>;
}
