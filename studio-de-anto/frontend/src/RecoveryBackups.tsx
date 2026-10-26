import {useEffect,useRef,useState} from 'react';
import {Download,RefreshCw,ShieldCheck} from 'lucide-react';
import {fetchApi,readApiResponse} from './api';

type Project={id:string;name:string};
type Copy={id:string;created:string;size:number};
type Status={enabled:boolean;interval_minutes:number;retention:number;last_attempt:string|null;last_success:string|null;last_error:string|null;next_due:string|null;copies:Copy[]};
type Props={project:string;onImported:(project:Project)=>void;onNotice:(message:string)=>void;onError:(message:string)=>void};
type View={project:string;value:Status};
function statusValue(value:unknown):Status{
 const state=value as Status;
 if(!state||typeof state.enabled!=='boolean'||!Array.isArray(state.copies)||
    !Number.isFinite(state.interval_minutes)||!Number.isFinite(state.retention)||
    state.copies.some(copy=>!copy||typeof copy.id!=='string'||typeof copy.created!=='string'||!Number.isFinite(copy.size)||copy.size<0)){
  throw Error('El servidor no devolvió el estado esperado de las copias. Actualiza y reinicia el estudio y vuelve a comprobarlo.');
 }
 return state;
}
const date=(value:string)=>Number.isNaN(Date.parse(value))?'Fecha no disponible':new Date(value).toLocaleString('es-PE',{timeZone:'America/Lima'});
const size=(value:number)=>value>=1048576?(value/1048576).toFixed(1)+' MB':Math.ceil(value/1024)+' KB';

export default function RecoveryBackups(p:Props){
 const[open,setOpen]=useState(false),[view,setView]=useState<View|null>(null),[busy,setBusy]=useState(''),[error,setError]=useState(''),[version,setVersion]=useState(0);
 const latest=useRef(p);latest.current=p;
 const operation=useRef<AbortController|null>(null),generation=useRef(0);
 const value=view?.project===p.project?view.value:null;
 const base=(project:string)=>'/api/projects/'+encodeURIComponent(project)+'/snapshots';
 const valid=(controller:AbortController,pid:string,epoch:number)=>!controller.signal.aborted&&latest.current.project===pid&&generation.current===epoch;
 async function request(path:string,controller:AbortController,body?:unknown,method='POST'){
  const response=await fetchApi(path,{method:body===undefined?'GET':method,cache:'no-store',signal:controller.signal,headers:body===undefined?undefined:{'Content-Type':'application/json'},body:body===undefined?undefined:JSON.stringify(body)});
  return readApiResponse(response);
 }
 useEffect(()=>{
  const controller=new AbortController(),pid=p.project,epoch=++generation.current;
  operation.current?.abort();operation.current=null;setView(null);setError('');setBusy('');
  if(open&&pid){
   operation.current=controller;setBusy('load');
   request(base(pid),controller).then(result=>{if(valid(controller,pid,epoch))setView({project:pid,value:statusValue(result)});})
    .catch(cause=>{if(valid(controller,pid,epoch)&&(cause as Error).name!=='AbortError')setError((cause as Error).message);})
    .finally(()=>{if(operation.current===controller){operation.current=null;setBusy('');}});
  }
  return()=>{generation.current++;controller.abort();operation.current?.abort();operation.current=null;};
 },[p.project,open,version]);
 async function run(kind:string,body:unknown,method='POST',suffix=''){
  if(!value||operation.current||!p.project)return;
  const pid=p.project,epoch=generation.current,controller=new AbortController();operation.current=controller;setBusy(kind);setError('');
  try{
   const result=await request(base(pid)+suffix,controller,body,method);
   if(!valid(controller,pid,epoch))return;
   if(kind==='restore'){
    if(!result||typeof result.id!=='string'||typeof result.name!=='string'||result.id===pid)throw Error('El servidor no confirmó un proyecto nuevo. Actualiza las copias antes de volver a intentarlo.');
    latest.current.onNotice('Copia restaurada como proyecto nuevo. El proyecto original se conserva.');latest.current.onImported(result);
   }else{
    const saved=statusValue(result);setView({project:pid,value:saved});
    latest.current.onNotice(kind==='create'?'Copia de recuperación guardada en este servidor. Descárgala para conservarla fuera del Codespace.':saved.enabled?'Copias automáticas activadas para este proyecto.':'Copias automáticas desactivadas. Las copias existentes se conservan.');
   }
  }catch(cause){if(valid(controller,pid,epoch)&&(cause as Error).name!=='AbortError')setError((cause as Error).message);}
  finally{if(operation.current===controller){operation.current=null;setBusy('');}}
 }
 return <section className="recovery-backups" aria-label="Copias de recuperación del proyecto">
  <button type="button" className="button secondary" aria-expanded={open} disabled={!!busy&&busy!=='load'} onClick={()=>{if(!operation.current||busy==='load')setOpen(!open);}}><ShieldCheck size={15}/>Copias de recuperación</button>
  {open&&<div className="recovery-details">
   <p className="muted">Las copias se guardan en este mismo servidor y no incluyen claves de API. Las automáticas funcionan mientras el servidor esté encendido y conservan las 3 últimas. Descarga una copia para protegerla fuera del Codespace.</p>
   {!p.project&&<p role="status">Selecciona un proyecto para ver sus copias.</p>}
   {busy==='load'&&<p role="status">Cargando copias de este proyecto…</p>}
   {error&&<p className="chat-error" role="alert">{error}</p>}
   {value&&<>
    <label className="checkbox"><input type="checkbox" aria-label="Copias automáticas cada hora" checked={value.enabled} disabled={!!busy} onChange={event=>run('configure',{enabled:event.target.checked},'PUT')}/>Copias automáticas cada hora</label>
    <p className="caption" role="status">{value.last_success?'Última copia completada: '+date(value.last_success):'Todavía no se ha completado una copia de recuperación.'}{value.enabled&&value.next_due?' Próxima copia prevista: '+date(value.next_due)+'.':''}</p>
    {value.last_error&&<p className="caption" role="status">Último intento sin completar: {value.last_error}</p>}
    <div className="studio-actions"><button type="button" className="button secondary" disabled={!!busy} onClick={()=>run('create',{})}>{busy==='create'?'Preparando copia…':'Crear copia ahora'}</button></div>
    {!value.copies.length?<p className="caption">Aún no hay copias guardadas para este proyecto.</p>:<ul className="recovery-list">{value.copies.map(copy=><li key={copy.id}>
     <div><strong>{date(copy.created)}</strong><small>{size(copy.size)}</small></div>
     <div className="studio-actions"><a className="button secondary" href={base(p.project)+'/'+encodeURIComponent(copy.id)+'/download'} download aria-label={'Descargar copia del '+date(copy.created)}><Download size={14}/>Descargar copia</a><button type="button" className="button secondary" disabled={!!busy} onClick={()=>run('restore',{},'POST','/'+encodeURIComponent(copy.id)+'/restore')}>Restaurar como proyecto nuevo</button></div>
    </li>)}</ul>}
    <p className="caption">Restaurar crea un proyecto nuevo con el contenido de esa copia. No reemplaza el proyecto actual ni inicia trabajos de IA.</p>
   </>}
   {!!p.project&&<button type="button" className="button secondary" disabled={!!busy} onClick={()=>setVersion(previous=>previous+1)}><RefreshCw size={14}/>{error&&!value?'Volver a cargar copias':'Actualizar copias'}</button>}
  </div>}
 </section>;
}
