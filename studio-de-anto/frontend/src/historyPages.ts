type HistoryItem={id:string;role:string;content:string};
export type HistoryPage<T extends HistoryItem>={messages:T[];hasMore:boolean;beforeCursor:string|null};
const invalid=()=>Error('No se pudo leer la conversación. Vuelve a cargarla.');

/** Accept old servers' complete arrays and the new bounded page contract. */
export function readHistoryPage<T extends HistoryItem>(value:unknown):HistoryPage<T>{
 const legacy=Array.isArray(value),source=legacy?{messages:value,has_more:false,before_cursor:null}:value;
 if(!source||typeof source!=='object'||Array.isArray(source))throw invalid();
 const page=source as Record<string,unknown>;
 if(!Array.isArray(page.messages)||typeof page.has_more!=='boolean'||(!legacy&&page.messages.length>100))throw invalid();
 const ids=new Set<string>();
 for(const item of page.messages){
  if(!item||typeof item!=='object'||Array.isArray(item))throw invalid();
  const message=item as Record<string,unknown>;
  if(typeof message.id!=='string'||!message.id||message.id.length>200||ids.has(message.id)||typeof message.role!=='string'||typeof message.content!=='string')throw invalid();
  ids.add(message.id);
 }
 if(page.has_more){
  if(!page.messages.length||typeof page.before_cursor!=='string'||page.before_cursor!==(page.messages[0] as HistoryItem).id)throw invalid();
 }else if(page.before_cursor!==null)throw invalid();
 return {messages:page.messages as T[],hasMore:page.has_more,beforeCursor:page.before_cursor as string|null};
}

/** Keep current message objects and streaming keys when older pages overlap. */
export function prependHistory<T extends HistoryItem>(current:T[],previous:T[]):T[]{
 const known=new Set(current.map(message=>message.id)),older:T[]=[];
 for(const message of previous)if(!known.has(message.id)){known.add(message.id);older.push(message);}
 return [...older,...current];
}
