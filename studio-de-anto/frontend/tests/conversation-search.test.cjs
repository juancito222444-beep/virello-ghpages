const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const ts=require('typescript');
const compiled=ts.transpileModule(fs.readFileSync(require('node:path').join(__dirname,'../src/ConversationSearch.tsx'),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,jsx:ts.JsxEmit.ReactJSX}}).outputText;
const moduleObject={exports:{}};new Function('exports','require',compiled)(moduleObject.exports,require);
const {conversationMatches}=moduleObject.exports;

test('conversation lookup ignores case, composed accents and surrounding spaces without changing messages',()=>{
 const messages=[{id:'one',role:'user',content:'Quiero café para la reunión.'},{id:'two',role:'assistant',content:'CAFE\u0301: dos opciones.'},{id:'three',role:'assistant',content:'Una propuesta diferente.'}];
 const before=JSON.stringify(messages);
 assert.deepEqual(conversationMatches(messages,'  CAFE  '),['one','two']);
 assert.equal(JSON.stringify(messages),before);
 assert.deepEqual(conversationMatches(messages,'   '),[]);
});

test('literal punctuation cannot broaden the search and author filtering respects stable streaming keys',()=>{
 const messages=[{id:'persisted-id',key:'streaming-key',role:'assistant',content:'Ventas [Q1]. Total: 3+2.'},{id:'user-id',role:'user',content:'Consulta [Q1] por favor'},{id:'other',role:'assistant',content:'Ventas Q2'}];
 assert.deepEqual(conversationMatches(messages,'[q1]'),['streaming-key','user-id']);
 assert.deepEqual(conversationMatches(messages,'[q1]','assistant'),['streaming-key']);
 assert.deepEqual(conversationMatches(messages,'[q1]','user'),['user-id']);
 assert.deepEqual(conversationMatches(messages,'.*'),[]);
 assert.deepEqual(conversationMatches(messages,'3+2'),['streaming-key']);
 assert.deepEqual(conversationMatches(messages,'ausente'),[]);
});
