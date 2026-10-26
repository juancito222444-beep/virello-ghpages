import {useEffect,useRef,useState} from 'react';
import {Download,RefreshCw,Save,Upload} from 'lucide-react';
import {fetchApi,readApiResponse} from './api';

type Project={id:string;name:string};
type Policy={daily_requests:number;max_output_tokens:number;concise:boolean};
type Usage={day:string;attempted:number;remaining:number;input_tokens:number;output_tokens:number;total_tokens:number;unknown_attempts:number;policy:Policy};
type ContextSource={kind:'message'|'run'|'file';id:string;agent?:string;name?:string;created:string;excerpt:string;reference?:string};
type ContextDraft={draft:string;sources:ContextSource[];omitted:boolean;method:'extractive';max_characters:number};
type ContextPreview={project:string;value:ContextDraft;text:string;added:boolean};
type Props={project:string;onImported:(project:Project)=>void;onNotice:(message:string)=>void;onError:(message:string)=>void};
function samePolicy(a:Policy|null,b:Policy|null){return a===b||!!(a&&b&&a.daily_requests===b.daily_requests&&a.max_output_tokens===b.max_output_tokens&&a.concise===b.concise);}
async function call(path:string,body?:unknown,method?:string,signal?:AbortSignal){
 const response=await fetchApi('/api'+path,{method:method||(body?'POST':'GET'),headers:body instanceof FormData?{}:{'Content-Type':'application/json'},body:body instanceof FormData?body:body?JSON.stringify(body):undefined,signal});
 return readApiResponse(response);
}
export default function StudioControls(p:Props){
 const[usage,setUsage]=useState<Usage|null>(null),[policy,setPolicy]=useState<Policy|null>(null),[savedPolicy,setSavedPolicy]=useState<Policy|null>(null);
 const[summary,setSummary]=useState(''),[savedSummary,setSavedSummary]=useState(''),[memoryLoaded,setMemoryLoaded]=useState(false),[memoryProject,setMemoryProject]=useState(''),[memoryError,setMemoryError]=useState(''),[memoryVersion,setMemoryVersion]=useState(0),[busy,setBusy]=useState('');
 const[contextPreview,setContextPreview]=useState<ContextPreview|null>(null),[contextError,setContextError]=useState('');
 const latest=useRef(p);latest.current=p;
 const operation=useRef<AbortController|null>(null);
 const notes=useRef(new Map<string,{saved:string;draft:string}>());
 const policyDirty=!samePolicy(policy,savedPolicy),memoryReady=memoryLoaded&&memoryProject===p.project,memoryDirty=summary.trim()!==savedSummary;
 const visibleContext=contextPreview?.project===p.project?contextPreview:null;
 // Usage limits belong to the whole Studio, so project changes must not reload
 // the form and overwrite an unsaved draft.
 useEffect(()=>{
  const controller=new AbortController();let active=true;
  call('/usage',undefined,undefined,controller.signal).then((value:Usage)=>{if(active){setUsage(value);setSavedPolicy(value.policy);setPolicy(draft=>draft||value.policy);}}).catch(error=>{if(active&&error.name!=='AbortError')latest.current.onError(error.message);});
  return()=>{active=false;controller.abort();};
 },[]);
 useEffect(()=>{
  const controller=new AbortController(),pid=p.project;let active=true;
  operation.current?.abort();operation.current=null;setBusy('');setMemoryLoaded(false);setMemoryError('');setMemoryProject(pid);setContextPreview(null);setContextError('');
  const cached=notes.current.get(pid);setSummary(cached?.draft||'');setSavedSummary(cached?.saved||'');
  if(pid)call('/projects/'+encodeURIComponent(pid)+'/memory',undefined,undefined,controller.signal).then(value=>{
   if(!active||latest.current.project!==pid)return;
   const saved=value.summary||'',previous=notes.current.get(pid),draft=previous&&previous.draft.trim()!==previous.saved?previous.draft:saved;
   notes.current.set(pid,{saved,draft});setSummary(draft);setSavedSummary(saved);setMemoryLoaded(true);
  }).catch(error=>{if(active&&latest.current.project===pid&&error.name!=='AbortError'){setMemoryError(error.message);latest.current.onError(error.message);}});
  return()=>{active=false;controller.abort();operation.current?.abort();operation.current=null;};
 },[p.project,memoryVersion]);
 async function run(action:string,fn:(signal:AbortSignal,active:()=>boolean)=>Promise<void>){
  if(operation.current)return;const controller=new AbortController(),pid=p.project;operation.current=controller;setBusy(action);p.onError('');
  const active=()=>!controller.signal.aborted&&operation.current===controller&&latest.current.project===pid;
  try{await fn(controller.signal,active);}catch(error){if((error as Error).name!=='AbortError'&&active())latest.current.onError((error as Error).message);}
  finally{if(operation.current===controller){operation.current=null;setBusy('');}}
 }
 async function refreshUsage(){await run('usage',async(signal,active)=>{const value:Usage=await call('/usage',undefined,undefined,signal);if(!active())return;setUsage(value);setPolicy(draft=>!draft||samePolicy(draft,savedPolicy)?value.policy:draft);setSavedPolicy(value.policy);});}
 async function savePolicy(){
  if(!policy||!policyDirty)return;const submitted=policy;
  await run('policy',async(signal,active)=>{
   const response=await call('/usage/policy',submitted,'PUT',signal);if(!active())return;
   const saved:Policy=response.policy||response;setSavedPolicy(saved);setPolicy(draft=>samePolicy(draft,submitted)?saved:draft);latest.current.onNotice('Límites del estudio guardados.');
   try{const refreshed:Usage=await call('/usage',undefined,undefined,signal);if(active())setUsage(refreshed);}
   catch(error){if(active()&&(error as Error).name!=='AbortError')latest.current.onNotice('Límites guardados. No se pudieron actualizar los contadores; pulsa Actualizar uso.');}
  });
 }
 function changeSummary(value:string){setSummary(value);notes.current.set(p.project,{saved:savedSummary,draft:value});setContextError('');}
 async function saveMemory(){
  if(!p.project||!memoryReady||!memoryDirty)return;const pid=p.project,submitted=summary;
  await run('memory',async(signal,active)=>{
   const response=await call('/projects/'+encodeURIComponent(pid)+'/memory',{summary:submitted},'PUT',signal);if(!active())return;
   const saved=typeof response.summary==='string'?response.summary:submitted.trim();notes.current.set(pid,{saved,draft:saved});setSummary(saved);setSavedSummary(saved);latest.current.onNotice('Nota compartida guardada para este proyecto.');
  });
 }
 async function prepareContext(){
  if(!p.project||!memoryReady)return;const pid=p.project;setContextError('');
  await run('context',async(signal,active)=>{
   const value:ContextDraft=await call('/projects/'+encodeURIComponent(pid)+'/context-draft',undefined,undefined,signal);if(!active())return;
   if(typeof value.draft!=='string'||!Array.isArray(value.sources)||value.method!=='extractive')throw Error('No se pudo leer la propuesta de contexto. Vuelve a prepararla.');
   setContextPreview({project:pid,value,text:value.draft,added:false});latest.current.onNotice('Contexto preparado con extractos locales. Revísalo antes de añadirlo; tu nota sigue igual.');
  });
 }
 function appendContext(){
  if(!visibleContext||visibleContext.added||!memoryReady||operation.current||!visibleContext.text.trim())return;
  const combined=summary?summary+'\n\n'+visibleContext.text:visibleContext.text;
  if(combined.length>6000){setContextError('La nota y el contexto suman '+combined.length+' caracteres; el máximo es 6000. Tu nota no cambió. Recorta la vista previa o copia solo los fragmentos que necesites.');return;}
  changeSummary(combined);setContextPreview({...visibleContext,added:true});latest.current.onNotice('Contexto añadido al borrador. Revisa la nota y pulsa Guardar nota para conservarlo.');
 }
 async function downloadBackup(){
  const pid=p.project;if(!pid)return;
  await run('backup',async(signal,active)=>{
   const response=await fetchApi('/api/projects/'+encodeURIComponent(pid)+'/backup',{signal});
   if(!response.ok){await readApiResponse(response);return;}
   const blob=await response.blob();if(!active())return;
   const url=URL.createObjectURL(blob),link=document.createElement('a');
   try{link.href=url;link.download='studio-de-anto-'+pid+'.zip';document.body.appendChild(link);link.click();}
   finally{link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  });
 }
 async function importBackup(file:File){
  if(!/\.zip$/i.test(file.name)){p.onError('Selecciona una copia de proyecto en formato ZIP.');return;}
  if(file.size>25*1024*1024){p.onError('La copia ZIP puede ocupar hasta 25 MB.');return;}
  await run('import',async(signal,active)=>{const data=new FormData();data.append('file',file);const project:Project=await call('/projects/import',data,undefined,signal);if(!active())return;latest.current.onImported(project);latest.current.onNotice('Copia importada en un proyecto nuevo. Ya está seleccionado.');});
 }
 return <section className="content-card settings-card studio-controls">
  <div className="section-title"><h2>Uso y continuidad del estudio</h2><button className="button secondary" disabled={!!busy} onClick={refreshUsage}><RefreshCw size={15}/>Actualizar uso</button></div>
  <p className="muted">Estos contadores pertenecen a esta aplicación. La cuota y la facturación de Gemini o Groq se consultan en tu cuenta del proveedor.</p>
  {usage&&<><div className="usage-stats" role="status"><div><strong>{usage.attempted}</strong><span>intentos de hoy UTC</span><small>{usage.day}</small></div><div><strong>{usage.remaining}</strong><span>intentos disponibles en el estudio</span></div><div><strong>{usage.total_tokens.toLocaleString('es')}</strong><span>tokens informados por el proveedor</span><small>{usage.input_tokens.toLocaleString('es')} entrada · {usage.output_tokens.toLocaleString('es')} salida</small></div></div>{usage.unknown_attempts>0&&<p className="caption">Recuento de tokens parcial: {usage.unknown_attempts} intento(s) sin uso informado por el proveedor.</p>}</>}
  {policy&&<form className="studio-form" onSubmit={e=>{e.preventDefault();savePolicy();}}>
   <div className="two-col"><label>Máximo de intentos diarios UTC<input type="number" min={1} max={10000} step={1} required value={policy.daily_requests} onChange={e=>setPolicy({...policy,daily_requests:Number(e.target.value)})}/></label><label>Máximo de tokens por respuesta de chat<input type="number" min={512} max={4096} step={1} required value={policy.max_output_tokens} onChange={e=>setPolicy({...policy,max_output_tokens:Number(e.target.value)})}/></label></div>
   <label className="checkbox"><input type="checkbox" checked={policy.concise} onChange={e=>setPolicy({...policy,concise:e.target.checked})}/>Pedir respuestas concisas en el chat</label>
   <p className="caption" role="status">{policyDirty?'Hay cambios de límites sin guardar.':'Límites guardados.'}</p>
   <button className="button secondary" disabled={!!busy||!policyDirty}><Save size={15}/>{busy==='policy'?'Guardando…':'Guardar límites'}</button>
  </form>}
  <div className="studio-divider"/>
  <form className="studio-form" onSubmit={e=>{e.preventDefault();saveMemory();}}>
   <h3>Nota compartida del proyecto</h3><p className="muted">Los agentes reciben esta nota como contexto. Guarda objetivos, decisiones o preferencias que quieras conservar.</p>
   <label>Contexto para todo el equipo<textarea aria-label="Nota compartida del proyecto" value={memoryProject===p.project?summary:''} maxLength={6000} disabled={!memoryReady||!!busy} onChange={e=>changeSummary(e.target.value)} placeholder="Objetivo, decisiones y preferencias del proyecto…"/></label>
   <p className="caption" role="status">{!p.project?'Selecciona un proyecto para usar su nota.':memoryError?'No se pudo cargar la nota. El borrador se conserva mientras sigas en Configuración.':!memoryReady?'Cargando nota del proyecto…':memoryDirty?'Nota con cambios sin guardar. El borrador se conserva al cambiar de proyecto en esta pantalla.':'Nota guardada para este proyecto.'}</p>
   {memoryError&&<button type="button" className="button secondary" disabled={!!busy} onClick={()=>{p.onError('');setMemoryVersion(value=>value+1);}}>Volver a cargar nota</button>}
   <div className="studio-actions"><span className="caption">{memoryProject===p.project?summary.length:0}/6000 caracteres</span><button className="button secondary" disabled={!p.project||!memoryReady||!!busy||!memoryDirty}><Save size={15}/>{busy==='memory'?'Guardando…':'Guardar nota'}</button></div>
  </form>
  <div className="studio-divider"/>
  <div className="studio-form">
   <h3>Preparar contexto desde la actividad</h3><p className="muted">Reúne extractos de tus solicitudes, el estado de trabajos y los nombres de archivos de este proyecto. No llama a una IA. Revisa y ajusta la propuesta antes de añadirla a tu nota.</p>
   <button type="button" className="button secondary" disabled={!p.project||!memoryReady||!!busy} onClick={prepareContext}><RefreshCw size={15}/>{busy==='context'?'Preparando contexto…':'Preparar contexto sin IA'}</button>
   {visibleContext&&<>
    <label>Vista previa editable del contexto<textarea aria-label="Vista previa del contexto" value={visibleContext.text} maxLength={6000} disabled={!!busy||!memoryReady} onChange={e=>{setContextPreview({...visibleContext,text:e.target.value,added:false});setContextError('');}}/></label>
    <p className="caption">{visibleContext.text.length}/6000 caracteres. La propuesta no se guarda automáticamente.</p>
    {visibleContext.value.omitted&&<p className="caption">La propuesta incluye una selección de la actividad. Puede haber información que no aparezca aquí.</p>}
    <details className="context-sources"><summary>Ver fuentes ({visibleContext.value.sources.length})</summary><ol>{visibleContext.value.sources.map((source,index)=><li key={source.kind+':'+source.id+':'+index}><strong>{source.reference?source.reference+' ':''}{source.kind==='message'?'Mensaje':source.kind==='run'?'Trabajo':'Archivo'}{source.name?' · '+source.name:source.agent?' · '+source.agent.toUpperCase():''}</strong><p>{source.excerpt}</p><small>{Number.isNaN(Date.parse(source.created))?source.created:new Date(source.created).toLocaleString('es-PE',{timeZone:'America/Lima'})}</small></li>)}</ol></details>
    {contextError&&<p className="chat-error" role="alert">{contextError}</p>}
    <button type="button" className="button secondary" disabled={!memoryReady||!!busy||visibleContext.added||!visibleContext.text.trim()} onClick={appendContext}>{visibleContext.added?'Añadido a mi borrador':'Añadir a mi borrador'}</button>
   </>}
  </div>
  <div className="studio-divider"/>
  <h3>Copia del proyecto</h3><p className="muted">Descarga una copia ZIP para conservar el proyecto y sus archivos. Las claves de API no se incluyen. Al importar, se crea un proyecto nuevo y se conservan los existentes.</p>
  <div className="studio-actions backup-actions"><button className="button secondary" disabled={!p.project||!!busy} onClick={downloadBackup}><Download size={15}/>{busy==='backup'?'Preparando copia…':'Descargar copia ZIP'}</button><label className={'button secondary backup-upload '+(busy?'disabled':'')}><Upload size={15}/>{busy==='import'?'Importando…':'Importar como proyecto nuevo'}<input type="file" accept=".zip,application/zip" aria-label="Importar copia de proyecto" disabled={!!busy} onChange={e=>{const chosen=e.target.files?.[0];e.target.value='';if(chosen)importBackup(chosen);}}/></label></div><p className="caption">Copia ZIP de hasta 25 MB. Se validará su contenido antes de crear el proyecto.</p>
 </section>;
}
