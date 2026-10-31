import {useEffect,useRef,useState} from 'react';
import {fetchApi,readApiResponse} from './api';
type Match={page:number;excerpt:string};
type Batch={id:string;name:string;start_page:number;scanned_to:number;total_pages:number;matches:Match[];next_page:number|null;truncated_pages:number[];empty_pages:number};
type Results=Batch&{query:string};

export default function PdfSearch({project,file,readerBusy,onOpen}:{project:string;file:string;readerBusy:boolean;onOpen:(page:number,query:string)=>void}){
 const [query,setQuery]=useState(''),[results,setResults]=useState<Results|null>(null),[busy,setBusy]=useState(false),[error,setError]=useState('');
 const pending=useRef<AbortController|null>(null);
 useEffect(()=>()=>{pending.current?.abort();},[]);
 function change(value:string){pending.current?.abort();pending.current=null;setBusy(false);setQuery(value);setResults(null);setError('');}
 async function search(continuing=false){
  if(pending.current||readerBusy||!query.trim())return;
  const start=continuing?results?.next_page:1;if(!start)return;
  const controller=new AbortController();pending.current=controller;setBusy(true);setError('');
  try{
   const value:Batch=await readApiResponse(await fetchApi('/api/projects/'+encodeURIComponent(project)+'/files/'+encodeURIComponent(file)+'/search',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({query:query.trim(),start_page:start}),signal:controller.signal}));
   if(!controller.signal.aborted)setResults(previous=>({...value,query:query.trim(),start_page:1,matches:continuing?[...(previous?.matches||[]),...value.matches]:value.matches,truncated_pages:continuing?[...(previous?.truncated_pages||[]),...value.truncated_pages]:value.truncated_pages,empty_pages:(continuing?previous?.empty_pages||0:0)+value.empty_pages}));
  }catch(e){if(!controller.signal.aborted)setError((e as Error).message);}
  finally{if(pending.current===controller){pending.current=null;setBusy(false);}}
 }
 return <section className="pdf-search" aria-label="Búsqueda entre páginas PDF"><h4>Buscar entre las páginas del PDF</h4><p>Busca en bloques de cinco páginas. Continúa hasta completar el documento. No usa IA ni OCR.</p><form onSubmit={e=>{e.preventDefault();search();}}><label>Texto para buscar en el PDF<input aria-label="Texto para buscar en el PDF" value={query} maxLength={200} required onChange={e=>change(e.target.value)}/></label><button className="button secondary" disabled={busy||readerBusy||!query.trim()}>{busy?'Buscando páginas…':'Buscar en el PDF'}</button></form>{error&&<p role="alert">{error}</p>}{results&&<><p role="status">{results.next_page?'Búsqueda parcial':'Búsqueda terminada'} · {results.scanned_to} de {results.total_pages} páginas revisadas · {results.matches.length} páginas con coincidencias</p>{results.empty_pages>0&&<p>{results.empty_pages} páginas sin texto extraíble. Las imágenes escaneadas necesitan OCR.</p>}{results.truncated_pages.length>0&&<p>Texto limitado a 12000 caracteres en las páginas {results.truncated_pages.join(', ')}. La búsqueda no incluye el texto omitido.</p>}<ol>{results.matches.map(match=><li key={match.page}><strong>Página {match.page}</strong><p>{match.excerpt}</p><button type="button" className="button secondary" disabled={busy||readerBusy} onClick={()=>onOpen(match.page,results.query)}>Abrir página {match.page}</button></li>)}</ol>{results.next_page&&<button type="button" className="button secondary" disabled={busy||readerBusy} onClick={()=>search(true)}>Buscar próximas páginas</button>}</>}</section>;
}
