import {useEffect,useMemo,useRef,useState} from 'react';
import {ChevronUp,ChevronDown,Search,X} from 'lucide-react';

type SearchMessage={id:string;key?:string;role:string;content:string};
export type SearchRole='all'|'user'|'assistant';
const normalize=(text:string)=>text.normalize('NFD').replace(/\p{Diacritic}/gu,'').toLocaleLowerCase();

/** Literal text only: user punctuation never becomes a regular expression. */
export function conversationMatches(messages:SearchMessage[],query:string,role:SearchRole='all'){
 const needle=normalize(query.trim());if(!needle)return [];
 return messages.filter(message=>(role==='all'||message.role===role)&&normalize(message.content).includes(needle)).map(message=>message.key||message.id);
}

type SearchState={contextKey:string;open:boolean;query:string;role:SearchRole;activeKey:string|null};
const initial=(contextKey:string):SearchState=>({contextKey,open:false,query:'',role:'all',activeKey:null});

export function useConversationSearch(messages:SearchMessage[],contextKey:string){
 const[state,setState]=useState(()=>initial(contextKey));
 const current=state.contextKey===contextKey?state:initial(contextKey);
 const keys=useMemo(()=>current.open?conversationMatches(messages,current.query,current.role):[],[messages,current.open,current.query,current.role]);
 const activeKey=current.activeKey&&keys.includes(current.activeKey)?current.activeKey:keys[0]||null;
 const index=activeKey?keys.indexOf(activeKey):-1;
 useEffect(()=>{
  setState(previous=>previous.contextKey!==contextKey?initial(contextKey):previous.activeKey===activeKey?previous:{...previous,activeKey});
 },[contextKey,activeKey]);
 const patch=(change:Partial<Omit<SearchState,'contextKey'>>)=>setState(previous=>({...((previous.contextKey===contextKey)?previous:initial(contextKey)),...change}));
 const move=(delta:number)=>{if(keys.length)patch({activeKey:keys[(index+delta+keys.length)%keys.length]});};
 return {open:current.open,setOpen:(open:boolean)=>patch({open}),query:current.query,setQuery:(query:string)=>patch({query}),
  role:current.role,setRole:(role:SearchRole)=>patch({role}),matchingKeys:new Set(keys),activeKey,
  previous:()=>move(-1),next:()=>move(1),index,count:keys.length};
}

export default function ConversationSearch({search}:{search:ReturnType<typeof useConversationSearch>}){
 const input=useRef<HTMLInputElement>(null),toggle=useRef<HTMLButtonElement>(null);
 const close=()=>{search.setOpen(false);toggle.current?.focus();};
 useEffect(()=>{if(search.open)input.current?.focus();},[search.open]);
 return <section className="conversation-search" aria-label="Búsqueda de conversación" onKeyDown={event=>{
  if(event.key==='Escape'){event.preventDefault();event.stopPropagation();close();}
 }}>
  <button ref={toggle} className="conversation-search-toggle" type="button" aria-label="Buscar en conversación" aria-expanded={search.open} onClick={()=>search.setOpen(!search.open)}><Search size={14}/>Buscar en conversación</button>
  {search.open&&<div className="conversation-search-controls">
   <label className="conversation-search-query">Buscar texto en conversación<input ref={input} aria-label="Buscar texto en conversación" value={search.query} maxLength={200} placeholder="Palabra o frase…" onChange={event=>search.setQuery(event.target.value)} onKeyDown={event=>{
    if(event.key==='Enter'){event.preventDefault();event.stopPropagation();event.shiftKey?search.previous():search.next();}
   }}/></label>
   <label>Autor<select aria-label="Filtrar mensajes por autor" value={search.role} onChange={event=>search.setRole(event.target.value as SearchRole)}><option value="all">Todos</option><option value="user">Mis mensajes</option><option value="assistant">Respuestas</option></select></label>
   <div className="conversation-search-navigation">
    <span role="status" aria-label="Resultados de búsqueda">{!search.query.trim()?'Escribe para buscar':search.count?`${search.index+1} de ${search.count}`:'Sin coincidencias'}</span>
    <button type="button" aria-label="Coincidencia anterior" disabled={!search.count} onClick={search.previous}><ChevronUp size={14}/></button>
    <button type="button" aria-label="Coincidencia siguiente" disabled={!search.count} onClick={search.next}><ChevronDown size={14}/></button>
    <button type="button" aria-label="Cerrar búsqueda" onClick={close}><X size={14}/></button>
   </div>
  </div>}
 </section>;
}
