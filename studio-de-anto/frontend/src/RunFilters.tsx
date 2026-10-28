import {useEffect,useMemo,useState} from 'react';
import {Search,X} from 'lucide-react';

export type RunFilterStatus='all'|'active'|'waiting'|'completed'|'interrupted'|'failed'|'cancelled';
type SearchableRun={id:string;request:string;status:string};
type RunGroup=Exclude<RunFilterStatus,'all'>|'other';
export type RunCounts={total:number;active:number;waiting:number;completed:number;interrupted:number;failed:number;cancelled:number;other:number};
const normalize=(value:string)=>value.normalize('NFD').replace(/\p{Diacritic}/gu,'').toLocaleLowerCase('es');
const filterStatuses=new Set<RunFilterStatus>(['all','active','waiting','completed','interrupted','failed','cancelled']);

/** Unknown statuses remain visible in the full list without suggesting success. */
function runGroup(status:string):RunGroup{
 switch(normalize(status.trim())){
  case 'pendiente':case 'en ejecucion':case 'en correccion':case 'planificando':return 'active';
  case 'espera aprobacion':case 'requiere informacion':return 'waiting';
  case 'completado':return 'completed';
  case 'interrumpido':return 'interrupted';
  case 'fallido':return 'failed';
  case 'cancelado':return 'cancelled';
  default:return 'other';
 }
}

/** Search is literal and preserves the backend's order and run objects. */
export function filterRuns<T extends SearchableRun>(runs:T[],query:string,status:RunFilterStatus='all'):T[]{
 const needle=normalize(query.trim()),selected=filterStatuses.has(status)?status:'all';
 return runs.filter(run=>(selected==='all'||runGroup(run.status)===selected)&&
  (!needle||normalize(run.request).includes(needle)||normalize(run.id).includes(needle)));
}

export function runCounts(runs:SearchableRun[]):RunCounts{
 const counts:RunCounts={total:runs.length,active:0,waiting:0,completed:0,interrupted:0,failed:0,cancelled:0,other:0};
 for(const run of runs)counts[runGroup(run.status)]++;
 return counts;
}

type FilterState={contextKey:string;query:string;status:RunFilterStatus};
const initial=(contextKey:string):FilterState=>({contextKey,query:'',status:'all'});

export function useRunFilters<T extends SearchableRun>(runs:T[],contextKey:string){
 const[state,setState]=useState(()=>initial(contextKey));
 // Derive the new context immediately: an old project's query must never hide
 // another project's tasks while waiting for effects to run.
 const current=state.contextKey===contextKey?state:initial(contextKey);
 useEffect(()=>{setState(previous=>previous.contextKey===contextKey?previous:initial(contextKey));},[contextKey]);
 const patch=(change:Partial<Pick<FilterState,'query'|'status'>>)=>setState(previous=>({...((previous.contextKey===contextKey)?previous:initial(contextKey)),...change}));
 const visibleRuns=useMemo(()=>filterRuns(runs,current.query,current.status),[runs,current.query,current.status]);
 const counts=useMemo(()=>runCounts(runs),[runs]);
 return {visibleRuns,query:current.query,setQuery:(query:string)=>patch({query}),status:current.status,
  setStatus:(status:RunFilterStatus)=>patch({status:filterStatuses.has(status)?status:'all'}),
  clear:()=>setState(initial(contextKey)),counts,total:runs.length};
}

type Filters=ReturnType<typeof useRunFilters>;
export default function RunFilters({filters}:{filters:Filters}){
 const chips=[['completed','Completadas'],['active','En curso'],['waiting','Por revisar'],['interrupted','Retomables']] as const;
 return <section className="run-filters" aria-label="Buscar y filtrar ejecuciones">
  <div className="run-counts" aria-label="Resumen de ejecuciones del proyecto">
   {chips.map(([status,label])=><button key={status} type="button" aria-pressed={filters.status===status} onClick={()=>filters.setStatus(status)}><strong>{filters.counts[status]}</strong><span>{label}</span></button>)}
  </div>
  <div className="run-filter-controls">
   <label className="run-filter-query"><span><Search size={15} aria-hidden="true"/>Buscar planes y ejecuciones</span><input type="search" aria-label="Buscar planes y ejecuciones" value={filters.query} maxLength={200} placeholder="Objetivo o identificador…" onChange={event=>filters.setQuery(event.target.value)}/></label>
   <label>Estado<select aria-label="Filtrar ejecuciones por estado" value={filters.status} onChange={event=>filters.setStatus(event.target.value as RunFilterStatus)}><option value="all">Todos los estados</option><option value="active">En curso</option><option value="waiting">Por revisar</option><option value="completed">Completadas</option><option value="interrupted">Retomables</option><option value="failed">Fallidas</option><option value="cancelled">Canceladas</option></select></label>
   <button type="button" className="button secondary" disabled={!filters.query&&filters.status==='all'} onClick={filters.clear}><X size={15} aria-hidden="true"/>Limpiar filtros</button>
  </div>
  <p className="caption" role="status" aria-live="polite" aria-atomic="true">{filters.visibleRuns.length} de {filters.total} ejecuciones</p>
 </section>;
}
