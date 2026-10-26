const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const ts=require('typescript');
const compiled=ts.transpileModule(fs.readFileSync(require('node:path').join(__dirname,'../src/chatDrafts.ts'),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
const moduleObject={exports:{}};new Function('exports','require',compiled)(moduleObject.exports,require);
const {readChatDraft,writeChatDraft,readLastChatContext,writeLastChatContext}=moduleObject.exports;
const prefix='studio-de-anto:chat-draft:v1:';
const key=(project,agent)=>prefix+JSON.stringify([project,agent]);
function storage(){const data=new Map();global.localStorage={getItem:key=>data.get(key)??null,setItem:(key,value)=>data.set(key,value),removeItem:key=>data.delete(key)};return data;}

test('drafts remain isolated by project and agent; clearing one preserves the rest',()=>{
 const data=storage();data.set('configured-api-key','never-copy-this');
 for(const [project,agent,text] of [['p1','anto','Primer borrador'],['p1','vera','Revisar fuentes'],['p2','anto','Otro proyecto']])assert.equal(writeChatDraft(project,agent,{text}),true);
 assert.equal(readChatDraft('p1','anto').draft.text,'Primer borrador');assert.equal(readChatDraft('p1','vera').draft.text,'Revisar fuentes');
 assert.equal(readChatDraft('p2','anto').draft.text,'Otro proyecto');
 assert.equal(writeChatDraft('p1','anto',{text:''}),true);assert.equal(data.has(key('p1','anto')),false);
 assert.equal(readChatDraft('p1','vera').draft.text,'Revisar fuentes');assert.equal(data.get('configured-api-key'),'never-copy-this');
});
test('corrupt, oversized and unexpected schemas are harmless without changing storage',()=>{
 const data=storage();
 for(const value of ['broken-json','null','[]','{"text":false}',JSON.stringify({text:'x'.repeat(12001)}),'x'.repeat(100001)]){
  data.set(key('p1','anto'),value);assert.deepEqual(readChatDraft('p1','anto'),{draft:{text:''},available:true});assert.equal(data.get(key('p1','anto')),value);
 }
 assert.equal(writeChatDraft('p1','anto',{text:'x'.repeat(12001)}),false);assert.equal(writeChatDraft('','anto',{text:'Hello'}),false);
});
test('only valid ANTO identity follows the exact pending objective across reloads',()=>{
 const data=storage(),draft={text:'  Preparar campaña  ',director_request:'Preparar campaña',director_request_id:'pending-123',api_key:'never-copy-this',attachments:['private-file']};
 assert.equal(writeChatDraft('p1','anto',draft),true);
 assert.deepEqual(readChatDraft('p1','anto').draft,{text:draft.text,director_request:'Preparar campaña',director_request_id:'pending-123'});
 assert.ok(!data.get(key('p1','anto')).includes('never-copy-this'));
 data.set(key('p1','anto'),JSON.stringify(draft));assert.ok(!('api_key' in readChatDraft('p1','anto').draft));
 for(const value of [{...draft,text:'Objetivo cambiado'},{...draft,director_request_id:'bad/id'},{...draft,director_request:'x'.repeat(2001)}]){
  writeChatDraft('p1','anto',value);assert.deepEqual(readChatDraft('p1','anto').draft,{text:value.text});
 }
 writeChatDraft('p1','vera',draft);assert.deepEqual(readChatDraft('p1','vera').draft,{text:draft.text});
});
test('blocked storage and quota errors never throw or report a saved draft',()=>{
 const original=Object.getOwnPropertyDescriptor(globalThis,'localStorage');
 try{
  Object.defineProperty(globalThis,'localStorage',{configurable:true,get(){throw Error('blocked');}});
  assert.deepEqual(readChatDraft('p1','anto'),{draft:{text:''},available:false});assert.equal(writeChatDraft('p1','anto',{text:'draft'}),false);
  assert.equal(readLastChatContext(),null);assert.equal(writeLastChatContext('p1','anto'),false);
  Object.defineProperty(globalThis,'localStorage',{configurable:true,writable:true,value:{getItem:()=>null,setItem(){throw Error('quota');},removeItem(){throw Error('blocked');}}});
  assert.equal(writeChatDraft('p1','anto',{text:'draft'}),false);assert.equal(writeChatDraft('p1','anto',{text:''}),false);
 }finally{if(original)Object.defineProperty(globalThis,'localStorage',original);else delete globalThis.localStorage;}
});
test('last selection is separate, validated and stripped to context identifiers',()=>{
 const data=storage();assert.equal(writeLastChatContext('p2','vera'),true);assert.deepEqual(readLastChatContext(),{project:'p2',agent:'vera'});
 const contextKey='studio-de-anto:chat-context:v1';data.set(contextKey,JSON.stringify({project:'p2',agent:'vera',api_key:'never-copy-this'}));
 assert.deepEqual(readLastChatContext(),{project:'p2',agent:'vera'});
 for(const value of ['broken','[]','null','{"project":1,"agent":"anto"}','{"project":"p1","agent":""}']){data.set(contextKey,value);assert.equal(readLastChatContext(),null);}
 assert.equal(writeLastChatContext('p1',''),false);assert.equal(data.size,1);
});
