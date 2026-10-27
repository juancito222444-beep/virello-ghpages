export type ChatDraft={text:string;director_request_id?:string;director_request?:string};
export type ChatContext={project:string;agent:string};
const DRAFT_PREFIX='studio-de-anto:chat-draft:v1:';
const CONTEXT_KEY='studio-de-anto:chat-context:v1';
const empty=():ChatDraft=>({text:''});
const identifier=(value:unknown):value is string=>typeof value==='string'&&value.length<=200&&!!value.trim();
const validContext=(project:unknown,agent:unknown)=>identifier(project)&&identifier(agent);
const draftKey=(project:string,agent:string)=>DRAFT_PREFIX+JSON.stringify([project,agent]);

function cleanDraft(value:unknown,agent:string):ChatDraft|null{
 if(!value||typeof value!=='object'||Array.isArray(value))return null;
 const source=value as Record<string,unknown>;
 if(typeof source.text!=='string'||source.text.length>12000)return null;
 // Only explicitly supported text fields may enter local storage. Settings,
 // model replies, attachments and credentials never form part of a draft.
 const draft:ChatDraft={text:source.text};
 if(agent==='anto'&&typeof source.director_request==='string'&&
    source.director_request===source.text.trim()&&source.director_request.length>=3&&source.director_request.length<=2000&&
    typeof source.director_request_id==='string'&&/^[a-zA-Z0-9_-]{1,80}$/.test(source.director_request_id)){
  draft.director_request=source.director_request;
  draft.director_request_id=source.director_request_id;
 }
 return draft;
}

export function readChatDraft(project:string,agent:string):{draft:ChatDraft;available:boolean}{
 if(!validContext(project,agent))return {draft:empty(),available:false};
 let encoded:string|null;
 try{encoded=globalThis.localStorage.getItem(draftKey(project,agent));}
 catch{return {draft:empty(),available:false};}
 if(encoded===null||encoded.length>100000)return {draft:empty(),available:true};
 try{return {draft:cleanDraft(JSON.parse(encoded),agent)||empty(),available:true};}
 catch{return {draft:empty(),available:true};}
}

export function writeChatDraft(project:string,agent:string,value:ChatDraft):boolean{
 if(!validContext(project,agent))return false;
 const draft=cleanDraft(value,agent);if(!draft)return false;
 try{
  if(!draft.text)globalThis.localStorage.removeItem(draftKey(project,agent));
  else globalThis.localStorage.setItem(draftKey(project,agent),JSON.stringify(draft));
  return true;
 }catch{return false;}
}

export function readLastChatContext():ChatContext|null{
 try{
  const encoded=globalThis.localStorage.getItem(CONTEXT_KEY);if(!encoded||encoded.length>2000)return null;
  const value:unknown=JSON.parse(encoded);
  if(!value||typeof value!=='object'||Array.isArray(value))return null;
  const context=value as Record<string,unknown>;
  return validContext(context.project,context.agent)?{project:context.project as string,agent:context.agent as string}:null;
 }catch{return null;}
}

export function writeLastChatContext(project:string,agent:string):boolean{
 if(!validContext(project,agent))return false;
 try{globalThis.localStorage.setItem(CONTEXT_KEY,JSON.stringify({project,agent}));return true;}
 catch{return false;}
}
