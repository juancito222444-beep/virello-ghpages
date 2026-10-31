import {useEffect,useRef,useState} from 'react';
import {fetchApi,readApiResponse} from './api';
type Match={id:string;agent:string;role:string;created:string;excerpt:string};
type Results={messages:Match[];has_more:boolean;before_cursor:string|null};

export default function HistorySearch({project}:{project:string}){
 const [query,setQuery]=useState(''),[role,setRole]=useState('all'),[results,setResults]=useState<Results|null>(null),[busy,setBusy]=useState(false),[error,setError]=useState('');
 const pending=useRef<AbortController|null>(null);
 useEffect(()=>()=>{pending.current?.abort();},[]);
 function reset(){pending.current?.abort();pending.current=null;setBusy(false);setResults(null);setError('');}
 async function search(older=false){
  if(pending.current||!query.trim())return;
  const controller=new AbortController();pending.current=controller;setBusy(true);setError('');
  const params=new URLSearchParams({q:query.trim(),role});
  if(older&&results?.before_cursor)params.set('before',results.before_cursor);
  try{
   const value:Results=await readApiResponse(await fetchApi('/api/projects/'+encodeURIComponent(project)+'/messages/search?'+params,{signal:controller.signal}));
   if(!controller.signal.aborted)setResults(current=>({...value,messages:older?[...(current?.messages||[]),...value.messages.filter(row=>!current?.messages.some(item=>item.id===row.id))]:value.messages}));
  }catch(e){if(!controller.signal.aborted)setError((e as Error).message);}
  finally{if(pending.current===controller){pending.current=null;setBusy(false);}}
 }
 return <details className="history-search"><summary>Buscar en todo el historial del proyecto</summary><p>Consulta el texto guardado de todos los agentes, incluso mensajes antiguos sin cargar. No usa IA ni busca dentro de documentos.</p><form onSubmit={e=>{e.preventDefault();search();}}><label>Texto del historial<input aria-label="Texto del historial" maxLength={200} value={query} onChange={e=>{reset();setQuery(e.target.value);}} required/></label><label>Autor del historial<select aria-label="Autor del historial" value={role} onChange={e=>{reset();setRole(e.target.value);}}><option value="all">Todos</option><option value="user">Mis mensajes</option><option value="assistant">Respuestas</option></select></label><button type="submit" disabled={busy||!query.trim()}>{busy?'Buscando…':'Buscar historial guardado'}</button></form>{error&&<p role="alert">{error}</p>}{results&&<><p role="status">{results.messages.length} mensajes encontrados{results.has_more?' · hay más coincidencias antiguas':''}</p><ol>{results.messages.map(row=><li key={row.id}><strong>{row.agent.toUpperCase()} · {row.role==='user'?'Tú':'Respuesta'}</strong><small> · {new Date(row.created).toLocaleString()}</small><p>{row.excerpt}</p></li>)}</ol>{results.has_more&&<button type="button" disabled={busy} onClick={()=>search(true)}>Cargar más coincidencias</button>}</>}</details>;
}
