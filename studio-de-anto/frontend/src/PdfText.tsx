import {useEffect,useRef,useState} from 'react';
import {fetchApi,readApiResponse} from './api';
type Page={id:string;name:string;page:number;total_pages:number;text:string;truncated:boolean};
const normalize=(text:string)=>text.normalize('NFD').replace(/\p{Diacritic}/gu,'').toLocaleLowerCase();

export default function PdfText({project,file,onQuote}:{project:string;file:string;onQuote:(citation:string)=>void}){
 const [opened,setOpened]=useState(false),[data,setData]=useState<Page|null>(null),[number,setNumber]=useState('1'),[busy,setBusy]=useState(false),[error,setError]=useState(''),[query,setQuery]=useState(''),[quote,setQuote]=useState(''),[notice,setNotice]=useState('');
 const pending=useRef<AbortController|null>(null),text=useRef<HTMLPreElement>(null),adding=useRef(false);
 useEffect(()=>()=>{pending.current?.abort();},[]);
 async function load(page:number){
  if(pending.current)return;
  const controller=new AbortController();pending.current=controller;setBusy(true);setError('');
  try{
   const value:Page=await readApiResponse(await fetchApi('/api/projects/'+encodeURIComponent(project)+'/files/'+encodeURIComponent(file)+'/pages/'+page,{signal:controller.signal}));
   if(!controller.signal.aborted){setData(value);setNumber(String(value.page));setQuote('');setNotice('');setQuery('');}
  }catch(e){if(!controller.signal.aborted)setError((e as Error).message);}
  finally{if(pending.current===controller){pending.current=null;setBusy(false);}}
 }
 function prepareQuote(){
  if(!data)return;
  const selection=window.getSelection();
  const selected=selection&&text.current?.contains(selection.anchorNode)&&text.current?.contains(selection.focusNode)?selection.toString():'';
  setQuote((selected||data.text).trim().slice(0,1200));setNotice('Fragmento preparado. Revisa el texto antes de añadirlo.');
 }
 async function copyCitation(citation:string){
  try{await navigator.clipboard.writeText(citation);setNotice('Cita copiada.');setError('');}
  catch{setError('No se pudo copiar. Selecciona la cita preparada y cópiala manualmente.');}
 }
 function addCitation(citation:string){
  if(adding.current)return;adding.current=true;
  try{onQuote(citation);}catch(e){adding.current=false;setError((e as Error).message);}
 }
 const citation=data&&quote?'Fuente: ['+data.name.replace(/[\\[\]]/g,'\\$&')+'](/api/files/'+encodeURIComponent(file)+'/content?download=true) · página '+data.page+'\n'+quote.split('\n').map(line=>'> '+line).join('\n'):'';
 return <section className="pdf-text" aria-label="Lector de texto PDF"><details open={opened} onToggle={e=>setOpened(e.currentTarget.open)}><summary>Leer y citar PDF sin IA</summary><p>Lee el texto seleccionable por páginas. La página indica su posición en el PDF. No reconoce imágenes ni conserva siempre la distribución de tablas.</p><button type="button" className="button secondary" disabled={busy} onClick={()=>load(data?.page||1)}>{busy?'Leyendo…':data?'Volver a leer página':'Abrir primera página'}</button>{error&&<p role="alert">{error}</p>}{data&&<><form onSubmit={e=>{e.preventDefault();load(Number(number));}} className="pdf-page-navigation"><button type="button" className="button secondary" disabled={busy||data.page===1} onClick={()=>load(data.page-1)}>Página anterior</button><label>Ir a página<input aria-label="Ir a página PDF" type="number" min={1} max={data.total_pages} value={number} onChange={e=>setNumber(e.target.value)} required/></label><button className="button secondary" disabled={busy}>Ir</button><button type="button" className="button secondary" disabled={busy||data.page===data.total_pages} onClick={()=>load(data.page+1)}>Página siguiente</button></form><p role="status">Página {data.page} de {data.total_pages}{data.truncated?' · texto limitado a 12000 caracteres':''}</p>{!data.text.trim()?<p>Esta página no tiene texto extraíble. Puede ser una imagen escaneada; descarga el original para verla.</p>:<><label>Buscar en esta página<input aria-label="Buscar en esta página PDF" value={query} maxLength={200} onChange={e=>setQuery(e.target.value)}/></label>{query.trim()&&<p role="status">{normalize(data.text).includes(normalize(query.trim()))?'Texto encontrado en esta página':'Sin coincidencias en el texto extraído'}</p>}<pre ref={text} tabIndex={0} aria-label="Texto de la página PDF">{data.text}</pre><button type="button" className="button secondary" disabled={busy} onClick={prepareQuote}>Preparar cita del texto seleccionado</button><p>Selecciona un fragmento del texto. Si no seleccionas nada, se preparan los primeros 1200 caracteres.</p></>}{citation&&<><label>Cita preparada<textarea aria-label="Cita PDF preparada" readOnly value={citation}/></label><button type="button" className="button secondary" onClick={()=>copyCitation(citation)}>Copiar cita</button><button type="button" className="button primary" disabled={busy} onClick={()=>addCitation(citation)}>Añadir cita al borrador del chat</button></>}{notice&&<p role="status">{notice}</p>}</>}</details></section>;
}
