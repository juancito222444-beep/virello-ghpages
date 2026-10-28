import {useEffect,useRef,useState} from 'react';
import {AlertTriangle,CheckCircle2,Copy,Download,RefreshCw,XCircle} from 'lucide-react';
import {fetchApi,SERVER_UPDATE_COMMAND} from './api';

const checkLabels={service:'Aplicación',code_version:'Versión en ejecución',database:'Proyectos e historial',storage:'Almacenamiento',provider:'Proveedor de IA',credentials:'Clave configurada',usage:'Límites de uso',backups:'Copias de recuperación'} as const;
type CheckId=keyof typeof checkLabels;
type CheckStatus='ok'|'warning'|'error';
type DiagnosticCheck={id:CheckId;label:string;status:CheckStatus;message:string};
export type DiagnosticReport={app:'STUDIO DE ANTO';release:string;api_version:'1';generated_at:string;code_update_available:boolean|null;checks:DiagnosticCheck[]};
const statusNames={ok:'Correcto',warning:'Por revisar',error:'Requiere atención'} as const;
const invalidReport='No se pudo leer el diagnóstico del estudio. Vuelve a actualizarlo.';

// The report is rebuilt field by field. Unknown fields, paths, credentials and
// future check types must never be copied wholesale into the downloaded file.
export function buildDiagnosticReport(value:unknown):DiagnosticReport{
 if(!value||typeof value!=='object'||Array.isArray(value))throw Error(invalidReport);
 const report=value as Record<string,unknown>;
 if(report.app!=='STUDIO DE ANTO'||report.api_version!=='1'||typeof report.release!=='string'||!/^\d{1,4}(?:\.\d{1,4}){0,3}(?:[-+][0-9A-Za-z.-]{1,40})?$/.test(report.release))throw Error(invalidReport);
 if(typeof report.generated_at!=='string'||report.generated_at.length>40||!/^\d{4}-\d\d-\d\dT/.test(report.generated_at)||!Number.isFinite(Date.parse(report.generated_at)))throw Error(invalidReport);
 if(report.code_update_available!==null&&typeof report.code_update_available!=='boolean')throw Error(invalidReport);
 if(!Array.isArray(report.checks)||!report.checks.length||report.checks.length>32)throw Error(invalidReport);
 const checks:DiagnosticCheck[]=[],seen=new Set<string>();
 for(const item of report.checks){
  if(!item||typeof item!=='object'||Array.isArray(item))throw Error(invalidReport);
  const check=item as Record<string,unknown>;
  if(typeof check.id!=='string'||!Object.prototype.hasOwnProperty.call(checkLabels,check.id))continue;
  if(seen.has(check.id)||typeof check.status!=='string'||!['ok','warning','error'].includes(check.status)||typeof check.message!=='string'||!check.message.trim()||check.message.length>800||/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(check.message))throw Error(invalidReport);
  const id=check.id as CheckId;
  const message=check.message.replace(/AIza[0-9A-Za-z_-]{20,}|\bgsk_[0-9A-Za-z_-]{12,}|\bsk-(?:proj-)?[0-9A-Za-z_-]{16,}/g,'[clave omitida]');
  checks.push({id,label:checkLabels[id],status:check.status as CheckStatus,message});seen.add(id);
 }
 if(!checks.length)throw Error(invalidReport);
 return {app:'STUDIO DE ANTO',release:report.release,api_version:'1',generated_at:new Date(report.generated_at).toISOString(),code_update_available:report.code_update_available as boolean|null,checks};
}

class DiagnosticError extends Error{}
const checkedAt=(value:string)=>new Date(value).toLocaleString('es-PE',{timeZone:'America/Lima'});

export default function SystemStatus({active}:{active:boolean}){
 const[report,setReport]=useState<DiagnosticReport|null>(null),[loading,setLoading]=useState(false),[outdated,setOutdated]=useState(false),[error,setError]=useState(''),[copyMessage,setCopyMessage]=useState('');
 const enabled=useRef(active);enabled.current=active;
 const lastReport=useRef<DiagnosticReport|null>(null),request=useRef<AbortController|null>(null),generation=useRef(0);
 async function refresh(){
  if(!enabled.current||request.current)return;
  const controller=new AbortController(),version=++generation.current;request.current=controller;setLoading(true);setError('');setOutdated(!!lastReport.current);
  const current=()=>!controller.signal.aborted&&generation.current===version&&enabled.current;
  try{
   const response=await fetchApi('/api/system/status',{cache:'no-store',signal:controller.signal});
   if(response.status===404||response.status===405)throw new DiagnosticError('Este servidor todavía no incluye el diagnóstico del estudio. Puedes seguir usando Configuración y actualizar el estudio cuando lo necesites.');
   if(!response.ok)throw new DiagnosticError('No se pudo actualizar el diagnóstico. Comprueba que el estudio siga encendido y vuelve a intentarlo.');
   let value:unknown;try{value=await response.json();}catch{throw new DiagnosticError(invalidReport);}
   const safe=buildDiagnosticReport(value);
   if(current()){lastReport.current=safe;setReport(safe);setOutdated(false);}
  }catch(failure){
   if(current()){setError(failure instanceof DiagnosticError?failure.message:invalidReport);setOutdated(!!lastReport.current);}
  }finally{if(generation.current===version){request.current=null;setLoading(false);}}
 }
 useEffect(()=>{
  if(active){void refresh();}else{setLoading(false);setOutdated(!!lastReport.current);setCopyMessage('');}
  return()=>{generation.current++;request.current?.abort();request.current=null;};
 },[active]);
 function download(){
  if(!report||!enabled.current)return;
  const safe=buildDiagnosticReport(report),content={...safe,downloaded_at:new Date().toISOString(),outdated:outdated||loading};
  const url=URL.createObjectURL(new Blob([JSON.stringify(content,null,2)+'\n'],{type:'application/json;charset=utf-8'})),link=document.createElement('a');
  link.href=url;link.download='diagnostico-studio-de-anto.json';document.body.appendChild(link);
  try{link.click();}finally{link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
 }
 async function copyUpdate(){
  try{await navigator.clipboard.writeText(SERVER_UPDATE_COMMAND);if(enabled.current)setCopyMessage('Comando copiado. Puedes ejecutarlo en la terminal del mismo Codespace.');}
  catch{if(enabled.current)setCopyMessage('No se pudo copiar automáticamente. Selecciona el comando y cópialo desde aquí.');}
 }
 return <section className="content-card settings-card system-status" aria-label="Diagnóstico del estudio">
  <div className="section-title"><h2>Diagnóstico del estudio</h2><button type="button" className="button secondary" disabled={!active||loading} onClick={()=>void refresh()}><RefreshCw size={15} aria-hidden="true"/>{loading?'Comprobando…':'Actualizar diagnóstico'}</button></div>
  <p className="muted">Revisa el estado del estudio sin usar IA ni cambiar tus proyectos. Esta comprobación no consulta al proveedor ni verifica su cuota o la calidad de las respuestas.</p>
  {loading&&<p className="caption" role="status">Comprobando el estado del estudio…</p>}
  {error&&<p className="system-diagnostic-error chat-error" role="alert">{error}</p>}
  {report?<>
   <p className="caption">Versión del servidor: {report.release} · Última comprobación: <time dateTime={report.generated_at}>{checkedAt(report.generated_at)}</time> (hora de Lima).</p>
   {outdated&&<p className="system-diagnostic-outdated" role="status">Resultado anterior: no confirma el estado actual del estudio.</p>}
   <ul className="system-checks">{report.checks.map(check=>{const Icon=check.status==='ok'?CheckCircle2:check.status==='warning'?AlertTriangle:XCircle;return <li className={'system-check status-'+check.status} key={check.id}><Icon size={18} aria-hidden="true"/><div><strong>{check.label}</strong>{' '}<span className="system-check-state">{statusNames[check.status]}</span><p>{check.message}</p></div></li>;})}</ul>
  </>:!loading&&!error&&<p className="caption">Todavía no hay una comprobación disponible.</p>}
  <div className="system-status-actions"><button type="button" className="button secondary" disabled={!active||!report} onClick={download}><Download size={15} aria-hidden="true"/>Descargar diagnóstico</button></div>
  <details className="system-update"><summary>Actualizar estudio</summary><p>Si necesitas aplicar una actualización, copia este comando y ejecútalo en la terminal del mismo Codespace. Copiarlo no lo ejecuta ni confirma que la aplicación se haya actualizado.</p><pre><code>{SERVER_UPDATE_COMMAND}</code></pre><button type="button" className="button secondary" disabled={!active} onClick={()=>void copyUpdate()}><Copy size={15} aria-hidden="true"/>Copiar comando de actualización</button>{copyMessage&&<p className="caption" role="status">{copyMessage}</p>}</details>
 </section>;
}
