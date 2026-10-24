import {useEffect,useRef,useState} from 'react';
import {Download,RefreshCw,Save,Upload} from 'lucide-react';
import {fetchApi,readApiResponse} from './api';

type Project={id:string;name:string};
type Policy={daily_requests:number;max_output_tokens:number;concise:boolean};
type Usage={day:string;attempted:number;remaining:number;input_tokens:number;output_tokens:number;total_tokens:number;unknown_attempts:number;policy:Policy};
type Props={project:string;onImported:(project:Project)=>void;onNotice:(message:string)=>void;onError:(message:string)=>void};
async function call(path:string,body?:unknown,method?:string,signal?:AbortSignal){
 const response=await fetchApi('/api'+path,{method:method||(body?'POST':'GET'),headers:body instanceof FormData?{}:{'Content-Type':'application/json'},body:body instanceof FormData?body:body?JSON.stringify(body):undefined,signal});
 return readApiResponse(response);
}
export default function StudioControls(p:Props){
 const[usage,setUsage]=useState<Usage|null>(null),[policy,setPolicy]=useState<Policy|null>(null),[summary,setSummary]=useState(''),[memoryLoaded,setMemoryLoaded]=useState(false),[busy,setBusy]=useState('');
 const latest=useRef(p);latest.current=p;
 const operation=useRef<AbortController|null>(null);
 useEffect(()=>{
  const controller=new AbortController();let active=true;
  operation.current?.abort();setBusy('');setSummary('');setMemoryLoaded(false);
  Promise.allSettled([call('/usage',undefined,undefined,controller.signal),p.project?call('/projects/'+encodeURIComponent(p.project)+'/memory',undefined,undefined,controller.signal):Promise.resolve(null)]).then(results=>{
   if(!active)return;
   const[budget,memory]=results;
   if(budget.status==='fulfilled'){setUsage(budget.value);setPolicy(budget.value.policy);}else if(budget.reason.name!=='AbortError')latest.current.onError(budget.reason.message);
   if(memory.status==='fulfilled'&&memory.value){setSummary(memory.value.summary||'');setMemoryLoaded(true);}else if(memory.status==='rejected'&&memory.reason.name!=='AbortError')latest.current.onError(memory.reason.message);
  });
  return()=>{active=false;controller.abort();operation.current?.abort();};
 },[p.project]);
 async function run(action:string,fn:(signal:AbortSignal)=>Promise<void>){
  if(busy)return;const controller=new AbortController();operation.current=controller;setBusy(action);p.onError('');
  try{await fn(controller.signal);}catch(error){if((error as Error).name!=='AbortError'&&!controller.signal.aborted)latest.current.onError((error as Error).message);}
  finally{if(operation.current===controller){operation.current=null;setBusy('');}}
 }
 async function refreshUsage(){await run('usage',async signal=>{const value:Usage=await call('/usage',undefined,undefined,signal);if(signal.aborted)return;setUsage(value);setPolicy(value.policy);});}
 async function downloadBackup(){
  const pid=p.project;if(!pid)return;
  await run('backup',async signal=>{
   const response=await fetchApi('/api/projects/'+encodeURIComponent(pid)+'/backup',{signal});
   if(!response.ok){await readApiResponse(response);return;}
   const blob=await response.blob();if(signal.aborted)return;
   const url=URL.createObjectURL(blob),link=document.createElement('a');
   try{link.href=url;link.download='studio-de-anto-'+pid+'.zip';document.body.appendChild(link);link.click();}
   finally{link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  });
 }
 async function importBackup(file:File){
  if(!/\.zip$/i.test(file.name)){p.onError('Selecciona una copia de proyecto en formato ZIP.');return;}
  if(file.size>25*1024*1024){p.onError('La copia ZIP puede ocupar hasta 25 MB.');return;}
  await run('import',async signal=>{const data=new FormData();data.append('file',file);const project:Project=await call('/projects/import',data,undefined,signal);if(signal.aborted)return;latest.current.onImported(project);latest.current.onNotice('Copia importada en un proyecto nuevo. Ya está seleccionado.');});
 }
 return <section className="content-card settings-card studio-controls">
  <div className="section-title"><h2>Uso y continuidad del estudio</h2><button className="button secondary" disabled={!!busy} onClick={refreshUsage}><RefreshCw size={15}/>Actualizar uso</button></div>
  <p className="muted">Estos contadores pertenecen a esta aplicación. La cuota y la facturación de Gemini o Groq se consultan en tu cuenta del proveedor.</p>
  {usage&&<><div className="usage-stats" role="status"><div><strong>{usage.attempted}</strong><span>intentos de hoy UTC</span><small>{usage.day}</small></div><div><strong>{usage.remaining}</strong><span>intentos disponibles en el estudio</span></div><div><strong>{usage.total_tokens.toLocaleString('es')}</strong><span>tokens informados por el proveedor</span><small>{usage.input_tokens.toLocaleString('es')} entrada · {usage.output_tokens.toLocaleString('es')} salida</small></div></div>{usage.unknown_attempts>0&&<p className="caption">Recuento de tokens parcial: {usage.unknown_attempts} intento(s) sin uso informado por el proveedor.</p>}</>}
  {policy&&<form className="studio-form" onSubmit={e=>{e.preventDefault();run('policy',async signal=>{const saved=await call('/usage/policy',policy,'PUT',signal);if(signal.aborted)return;setPolicy(saved.policy||saved);const refreshed:Usage=await call('/usage',undefined,undefined,signal);if(signal.aborted)return;setUsage(refreshed);p.onNotice('Límites del estudio guardados.');});}}>
   <div className="two-col"><label>Máximo de intentos diarios UTC<input type="number" min={1} max={10000} step={1} required value={policy.daily_requests} onChange={e=>setPolicy({...policy,daily_requests:Number(e.target.value)})}/></label><label>Máximo de tokens por respuesta de chat<input type="number" min={512} max={4096} step={1} required value={policy.max_output_tokens} onChange={e=>setPolicy({...policy,max_output_tokens:Number(e.target.value)})}/></label></div>
   <label className="checkbox"><input type="checkbox" checked={policy.concise} onChange={e=>setPolicy({...policy,concise:e.target.checked})}/>Pedir respuestas concisas en el chat</label>
   <button className="button secondary" disabled={!!busy}><Save size={15}/>{busy==='policy'?'Guardando…':'Guardar límites'}</button>
  </form>}
  <div className="studio-divider"/>
  <form className="studio-form" onSubmit={e=>{e.preventDefault();const pid=p.project;run('memory',async signal=>{await call('/projects/'+encodeURIComponent(pid)+'/memory',{summary},'PUT',signal);if(!signal.aborted)p.onNotice('Nota compartida guardada para este proyecto.');});}}>
   <h3>Nota compartida del proyecto</h3><p className="muted">Los agentes reciben esta nota como contexto. Guarda objetivos, decisiones o preferencias que quieras conservar.</p>
   <label>Contexto para todo el equipo<textarea aria-label="Nota compartida del proyecto" value={summary} maxLength={6000} disabled={!memoryLoaded||!!busy} onChange={e=>setSummary(e.target.value)} placeholder="Objetivo, decisiones y preferencias del proyecto…"/></label>
   <div className="studio-actions"><span className="caption">{summary.length}/6000 caracteres</span><button className="button secondary" disabled={!p.project||!memoryLoaded||!!busy}><Save size={15}/>{busy==='memory'?'Guardando…':'Guardar nota'}</button></div>
  </form>
  <div className="studio-divider"/>
  <h3>Copia del proyecto</h3><p className="muted">Descarga una copia ZIP para conservar el proyecto y sus archivos. Las claves de API no se incluyen. Al importar, se crea un proyecto nuevo y se conservan los existentes.</p>
  <div className="studio-actions backup-actions"><button className="button secondary" disabled={!p.project||!!busy} onClick={downloadBackup}><Download size={15}/>{busy==='backup'?'Preparando copia…':'Descargar copia ZIP'}</button><label className={'button secondary backup-upload '+(busy?'disabled':'')}><Upload size={15}/>{busy==='import'?'Importando…':'Importar como proyecto nuevo'}<input type="file" accept=".zip,application/zip" aria-label="Importar copia de proyecto" disabled={!!busy} onChange={e=>{const chosen=e.target.files?.[0];e.target.value='';if(chosen)importBackup(chosen);}}/></label></div><p className="caption">Copia ZIP de hasta 25 MB. Se validará su contenido antes de crear el proyecto.</p>
 </section>;
}
