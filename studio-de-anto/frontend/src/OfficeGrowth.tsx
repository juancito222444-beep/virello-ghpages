import {useEffect,useRef,useState} from 'react';
import {ArrowUpRight,BookOpen,FlaskConical,Images,LockKeyhole,Maximize2,RefreshCw,Route} from 'lucide-react';
import {fetchApi,readApiResponse} from './api';

const catalog=[
 {id:'library',name:'Biblioteca',description:'Un ala para tus documentos y fuentes.',destination:'data',metric:'files',required:1,unit:'archivo guardado',Icon:BookOpen},
 {id:'laboratory',name:'Laboratorio',description:'Un espacio para organizar y revisar el trabajo del equipo.',destination:'tasks',metric:'completed_runs',required:1,unit:'trabajo completado',Icon:FlaskConical},
 {id:'gallery',name:'Galería',description:'Una sala donde encontrar los resultados del proyecto.',destination:'deliverables',metric:'artifacts',required:1,unit:'entregable generado',Icon:Images},
 {id:'strategy',name:'Sala de estrategia',description:'Un lugar para cuidar el contexto y las instrucciones del equipo.',destination:'settings',metric:'useful_answers',required:3,unit:'respuestas marcadas útiles',Icon:Route},
] as const;
type Metric=typeof catalog[number]['metric'];
export type OfficeRoom={id:string;name:string;description:string;destination:string;unlocked:boolean;authorized:boolean;requirement:{metric:Metric;required:number;current:number};authorized_at:string|null};
type Snapshot={project:string;metrics:Record<Metric,number>;rooms:OfficeRoom[]};

/** An invalid or foreign response must never add a room to this project's scene. */
export function readOfficeSnapshot(value:unknown,project:string):Snapshot{
 const bad=()=>{throw Error('No se pudo leer el crecimiento de este proyecto. Actualiza el progreso o recarga la aplicación.');};
 if(!value||typeof value!=='object')return bad();
 const data=value as Snapshot;
 if(data.project!==project||!data.metrics||!Array.isArray(data.rooms)||data.rooms.length!==catalog.length)return bad();
 for(const entry of catalog)if(!Number.isSafeInteger(data.metrics[entry.metric])||data.metrics[entry.metric]<0)return bad();
 const rooms=catalog.map(entry=>{
  const matches=data.rooms.filter(room=>room?.id===entry.id);if(matches.length!==1)return bad();
  const room=matches[0],rule=room.requirement;
  if(typeof room.authorized!=='boolean'||typeof room.unlocked!=='boolean'||!rule||rule.metric!==entry.metric||rule.required!==entry.required||rule.current!==data.metrics[entry.metric]||room.unlocked!==(rule.current>=rule.required))return bad();
  if(room.authorized?(typeof room.authorized_at!=='string'||!Number.isFinite(Date.parse(room.authorized_at))):room.authorized_at!==null)return bad();
  // Names and destinations come from the local catalog, never arbitrary API strings.
  return {...room,name:entry.name,description:entry.description,destination:entry.destination};
 });
 return {project,metrics:{...data.metrics},rooms};
}

export function useOfficeGrowth(project:string,active:boolean,progressKey:string){
 const [snapshot,setSnapshot]=useState<Snapshot|null>(null),[loading,setLoading]=useState(false),[saving,setSaving]=useState(''),[error,setError]=useState(''),[revision,setRevision]=useState(0),[notice,setNotice]=useState('');
 const current=useRef(project),serial=useRef(0),read=useRef<AbortController|null>(null),write=useRef<AbortController|null>(null);current.current=project;
 useEffect(()=>{
  setSnapshot(null);setError('');setNotice('');setSaving('');
  return()=>{serial.current++;read.current?.abort();write.current?.abort();write.current=null;};
 },[project]);
 useEffect(()=>{
  if(!project||!active||write.current)return;
  const controller=new AbortController(),version=++serial.current;read.current?.abort();read.current=controller;setLoading(true);setError('');
  fetchApi('/api/projects/'+encodeURIComponent(project)+'/office',{signal:controller.signal,cache:'no-store'}).then(readApiResponse).then(value=>{
   if(!controller.signal.aborted&&version===serial.current&&current.current===project)setSnapshot(readOfficeSnapshot(value,project));
  }).catch(e=>{if(!controller.signal.aborted&&version===serial.current)setError(e.message);}).finally(()=>{if(!controller.signal.aborted&&version===serial.current)setLoading(false);});
  return()=>{controller.abort();};
 },[project,active,progressKey,revision]);
 async function authorize(room:OfficeRoom,enabled:boolean){
  if(!project||write.current)return;
  const pid=project,controller=new AbortController(),version=++serial.current;read.current?.abort();write.current=controller;setSaving(room.id);setLoading(false);setError('');setNotice('');
  try{
   const response=await fetchApi('/api/projects/'+encodeURIComponent(pid)+'/office/'+encodeURIComponent(room.id),{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({enabled}),signal:controller.signal});
   const value=await readApiResponse(response);
   if(controller.signal.aborted||version!==serial.current||current.current!==pid)return;
   setSnapshot(readOfficeSnapshot(value,pid));setNotice(enabled?room.name+' añadida con tu autorización.':room.name+' replegada. Tus archivos y trabajos se conservan.');
  }catch(e){if(!controller.signal.aborted&&version===serial.current)setError((e as Error).message);}
  finally{if(write.current===controller){write.current=null;setSaving('');}}
 }
 const visible=snapshot?.project===project?snapshot:null;
 return {rooms:visible?.rooms||[],loading,saving,error,notice,refresh:()=>setRevision(old=>old+1),authorize};
}
type Growth=ReturnType<typeof useOfficeGrowth>;
export default function OfficeGrowth({growth,onOpen}:{growth:Growth;onOpen:(destination:string)=>void}){
 const [open,setOpen]=useState(false),count=growth.rooms.filter(room=>room.authorized).length;
 return <section className="office-growth" aria-label="Crecimiento de la oficina">
  <button className="growth-toggle" aria-expanded={open} aria-controls="office-growth-details" onClick={()=>setOpen(value=>!value)}><span className="growth-toggle-icon"><Maximize2 size={19}/></span><span><strong>Haz crecer tu estudio</strong><small>{count?count+' de 4 salas autorizadas':'Nuevos espacios, con tu autorización'}</small></span><span className="growth-toggle-action">{open?'Cerrar':'Ver expansión'}</span></button>
  <div id="office-growth-details" hidden={!open}>
   <div className="growth-intro"><p>El progreso de este proyecto desbloquea nuevas salas. Tú decides cuáles añadir; ninguna ampliación envía consultas de IA.</p><button className="button secondary" disabled={growth.loading||!!growth.saving} onClick={growth.refresh}><RefreshCw size={14}/>{growth.loading?'Comprobando…':'Actualizar progreso'}</button></div>
   <p className="caption">Son hitos de uso y revisión, no una medida de inteligencia ni un reentrenamiento del modelo. Las salas abren tus herramientas actuales.</p>
   {growth.error&&<p role="alert" className="growth-error">{growth.error} Pulsa «Actualizar progreso» para volver a comprobarlo.</p>}
   {growth.notice&&<p role="status" className="growth-notice">{growth.notice}</p>}
   {growth.loading&&!growth.rooms.length&&<p role="status" className="caption">Leyendo el progreso guardado…</p>}
   <div className="growth-grid">{growth.rooms.map(room=>{
    const entry=catalog.find(item=>item.id===room.id)!;const Icon=entry.Icon,rule=room.requirement;
    return <article key={room.id} className={'growth-room '+(room.authorized?'authorized':room.unlocked?'available':'locked')} data-growth-room={room.id}>
     <div className="growth-room-title"><span><Icon size={20}/></span><span className="growth-state">{room.authorized?'En tu oficina':room.unlocked?'Lista para ampliar':'Por desbloquear'}</span></div><h3>{room.name}</h3><p>{room.description}</p>
     <label className="growth-progress">{rule.current} / {rule.required} {entry.unit}<progress max={rule.required} value={Math.min(rule.current,rule.required)} aria-label={'Progreso de '+room.name}/></label>
     <div className="growth-actions">{room.authorized?<><button className="button secondary" onClick={()=>onOpen(room.destination)}>Abrir sala<ArrowUpRight size={14}/></button><button className="growth-fold" disabled={!!growth.saving||growth.loading} onClick={()=>growth.authorize(room,false)}>{growth.saving===room.id?'Guardando…':'Replegar sala'}</button></>:<button className="button primary" disabled={!room.unlocked||growth.loading||!!growth.saving||!!growth.error} onClick={()=>growth.authorize(room,true)}>{growth.saving===room.id?'Guardando…':room.unlocked?<><Maximize2 size={14}/>Autorizar expansión</>:<><LockKeyhole size={14}/>Hito pendiente</>}</button>}</div>
    </article>;
   })}</div>
   <p className="caption">La autorización se guarda por proyecto. Puedes replegar una sala sin borrar sus datos. Los personajes se desplazan por la oficina central; las alas son accesos a tus espacios de trabajo.</p>
  </div>
 </section>;
}
