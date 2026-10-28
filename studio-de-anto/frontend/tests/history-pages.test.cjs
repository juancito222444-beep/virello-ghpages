const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const ts=require('typescript');
const path=require('node:path');
const source=ts.transpileModule(fs.readFileSync(path.join(__dirname,'../src/historyPages.ts'),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
const mod={exports:{}};new Function('exports','require',source)(mod.exports,require);
const {readHistoryPage,prependHistory}=mod.exports;
const message=id=>({id,role:'user',content:'Mensaje '+id});

test('new pages and legacy arrays retain messages and honest cursors',()=>{
 const messages=[message('first'),message('last')];
 assert.deepEqual(readHistoryPage({messages,has_more:true,before_cursor:'first'}),{messages,hasMore:true,beforeCursor:'first'});
 assert.deepEqual(readHistoryPage(messages),{messages,hasMore:false,beforeCursor:null});
 assert.deepEqual(readHistoryPage({messages:[],has_more:false,before_cursor:null}),{messages:[],hasMore:false,beforeCursor:null});
});
test('malformed pages cannot create an infinite older-message loop',()=>{
 for(const value of [null,{}, {messages:[],has_more:true,before_cursor:'none'},
  {messages:[message('a')],has_more:true,before_cursor:'b'},
  {messages:[message('a'),message('a')],has_more:true,before_cursor:'a'},
  {messages:[{id:'a',role:'user',content:null}],has_more:false,before_cursor:null},
  {messages:[message('a')],has_more:false,before_cursor:'a'}])assert.throws(()=>readHistoryPage(value),/conversación/);
});
test('prepending overlapping pages preserves current streaming messages and order',()=>{
 const current=[{...message('b'),key:'stable-stream-key',content:'Respuesta reciente'},message('c')];
 const older=[message('a'),message('a'),message('b')],copy=JSON.stringify([current,older]);
 const merged=prependHistory(current,older);
 assert.deepEqual(merged.map(item=>item.id),['a','b','c']);assert.equal(merged[1],current[0]);
 assert.equal(merged[1].key,'stable-stream-key');assert.equal(JSON.stringify([current,older]),copy);
});
