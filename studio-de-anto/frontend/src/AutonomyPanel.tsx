import {useEffect,useRef,useState} from 'react';
import {fetchApi,readApiResponse} from './api';
type Limits={max_jobs:number;max_attempts:number;interval_seconds:number;timeout_seconds:number;max_files:number};
type Job={id:string;request:string;status:string;attempts:number;run_id:string|null;error:string;progress:{done:number;total:number}};
type Report={status:string;used:number;error:string;limits:Limits;jobs:Job[];completed:number;activity:{seq:number;phase:string;message:string;created:string}[]};
const labels:Record<string,string>={stopped:'Detenida',paused:'Pausada',running:'En ejecución',queued:'Pendiente',completed:'Completado',blocked:'Requiere revisión'};
export default function AutonomyPanel({project,codex=false,active=true,onRun}:{project?:string;codex?:boolean;active?:boolean;onRun?:(id:string)=>void}){
 const path=codex?'/api/autonomy/codex':'/api/projects/'+encodeURIComponent(project||'')+'/autonomy';
 const [opened,setOpened]=useState(false);
 const [report,setReport]=useState<Report|null>(null),[limits,setLimits]=useState<Limits|null>(null),[text,setText]=useState(''),[confirmed,setConfirmed]=useState(false),[busy,setBusy]=useState(false),[error,setError]=useState(''),[retry,setRetry]=useState(0);
 const generation=useRef(0),mutating=useRef(false);
 useEffect(()=>{
  if(!active||!opened)return;
  const controller=new AbortController();let first=true,loading=false;
  async function load(){
   if(mutating.current||loading)return;
   loading=true;
   const serial=++generation.current;
   try{const value=await readApiResponse(await fetchApi(path,{signal:controller.signal}));if(!controller.signal.aborted&&serial===generation.current){setReport(value);if(first){setLimits(current=>current||value.limits);first=false;}setError('');}}
   catch(e){if(!controller.signal.aborted&&serial===generation.current)setError((e as Error).message);}
   finally{loading=false;}
  }
  load();const timer=window.setInterval(load,3000);
  return()=>{controller.abort();window.clearInterval(timer);generation.current++;};
 },[path,active,opened,retry]);
 async function mutate(suffix:string,body:unknown,method='POST'){
  if(mutating.current)return;
  mutating.current=true;generation.current++;setBusy(true);setError('');
  try{
   await readApiResponse(await fetchApi(path+suffix,{method,headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}));
   const value=await readApiResponse(await fetchApi(path));setReport(value);
   if(suffix==='/jobs')setText('');
   if(suffix==='/limits')setLimits(value.limits);
  }catch(e){setError((e as Error).message);}finally{mutating.current=false;setBusy(false);}
 }
 const dirty=!!report&&JSON.stringify(limits)!==JSON.stringify(report.limits);
 return <section className="content-card autonomy-panel" aria-label={codex?'Autonomía de Codex':'Autonomía de Anto'}><details open={opened} onToggle={e=>setOpened(e.currentTarget.open)}><summary>{codex?'Codex · backlog de mejoras':'Anto · objetivos autónomos'}</summary><p>{codex?'Backlog global de este checkout. Un ciclo ejecuta una mejora, prueba backend, compila y guarda un commit local. Pausa ante cambios locales, conflictos o errores.':'Cola de texto por proyecto. Reutiliza el Director, sus checkpoints, permisos y reservas de cuota. Cada objetivo puede utilizar hasta siete llamadas a tu API.'}</p><p>Funciona mientras el servidor está activo. Codespaces suspendido no ejecuta ciclos. Las colas se crean detenidas.</p>{error&&<p className="chat-error" role="alert">{error}</p>}{!report||!limits?<button type="button" className="button secondary" onClick={()=>setRetry(x=>x+1)}>Cargar estado</button>:<><div className="autonomy-status" role="status"><strong>{labels[report.status]||report.status}</strong><span>{report.completed}/{report.jobs.length} objetivos completados · {report.used}/{report.limits.max_jobs} ciclos utilizados en esta activación</span></div>{report.error&&<p role="status">{report.error}</p>}<div className="autonomy-actions"><button className="button primary" disabled={busy||!confirmed||dirty||report.status==='running'||!report.jobs.some(j=>j.status==='queued')} onClick={()=>mutate('/control',{action:'start',confirmed:true})}>Iniciar / reanudar</button><button className="button secondary" disabled={busy||report.status!=='running'} onClick={()=>mutate('/control',{action:'pause'})}>Pausar</button><button className="button secondary" disabled={busy||report.status==='stopped'} onClick={()=>mutate('/control',{action:'stop'})}>Detener</button></div><label className="checkbox"><input type="checkbox" checked={confirmed} onChange={e=>setConfirmed(e.target.checked)}/>{codex?'Autorizo los ciclos indicados, el uso de mi cuenta Codex y commits locales de cambios verificados.':'Autorizo estos objetivos con mis modelos y las cuotas del estudio.'}</label>{codex&&<p>Necesita Codex CLI instalado y autenticado en este Codespace. No realiza login ni push automático. Parada desde terminal: <code>bash studio-de-anto/scripts/stop-codex-autonomy.sh</code></p>}<details><summary>Límites configurables</summary><fieldset disabled={busy||report.status==='running'}>{([['max_jobs','Ciclos por activación',1,20],['max_attempts','Intentos por objetivo (reintento explícito)',1,3],['interval_seconds','Intervalo mínimo entre ciclos (segundos)',15,3600],['timeout_seconds','Tiempo máximo por ciclo (segundos)',60,1800],...(codex?[['max_files','Máximo de archivos cambiados',1,100]]:[])] as [keyof Limits,string,number,number][]).map(([key,label,min,max])=><label key={key}>{label}<input type="number" min={min} max={max} value={limits[key]} onChange={e=>setLimits({...limits,[key]:Number(e.target.value)})}/></label>)}<button className="button secondary" disabled={!dirty} onClick={()=>mutate('/limits',limits,'PUT')}>Guardar límites</button></fieldset><p>{dirty?'Límites sin guardar.':'Límites guardados.'} Los intentos no se reinician al pulsar Iniciar. Pausa antes de editar.</p></details><form onSubmit={e=>{e.preventDefault();mutate('/jobs',{request:text});}}><label>{codex?'Mejora concreta para el backlog':'Objetivo para Anto'}<textarea maxLength={2000} minLength={3} value={text} onChange={e=>setText(e.target.value)} required disabled={busy}/></label><button className="button secondary" disabled={busy||text.trim().length<3}>Guardar objetivo</button></form><p>Guardar no llama a la IA. Objetivos equivalentes no se duplican. Detener conserva resultados y retira los pendientes de la ejecución automática.</p><ol className="autonomy-jobs">{report.jobs.map(job=><li key={job.id}><strong>{job.request}</strong><p>{labels[job.status]||job.status} · {job.attempts}/{report.limits.max_attempts} intentos{!codex&&job.progress.total>0?' · '+job.progress.done+'/'+job.progress.total+' pasos completados':''}</p>{job.error&&<p className="chat-error">{job.error}</p>}{job.run_id&&(codex?<small>Commit {job.run_id.slice(0,12)}</small>:<button className="button secondary" onClick={()=>onRun?.(job.run_id!)}>Ver trabajo del Director</button>)}{['blocked','stopped'].includes(job.status)&&job.attempts<report.limits.max_attempts&&<button className="button secondary" disabled={busy||report.status==='running'} onClick={()=>mutate('/jobs/'+encodeURIComponent(job.id)+'/retry',{})}>Autorizar reintento</button>}</li>)}</ol><details><summary>Actividad reciente ({report.activity.length})</summary>{report.activity.map(item=><p key={item.seq}><time>{new Date(item.created).toLocaleString()}</time> · {item.phase}: {item.message}</p>)}</details></>}</details></section>;
}
