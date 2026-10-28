const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const ts=require('typescript');
const path=require('node:path');
const source=ts.transpileModule(fs.readFileSync(path.join(__dirname,'../src/OfficeGrowth.tsx'),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX}}).outputText;
const mod={exports:{}};new Function('exports','require',source)(mod.exports,id=>id==='./api'?{}:require(id));
const {readOfficeSnapshot}=mod.exports;
const rules=[['library','files',1],['laboratory','completed_runs',1],['gallery','artifacts',1],['strategy','useful_answers',3]];
const snapshot=()=>({project:'one',metrics:{files:0,completed_runs:0,artifacts:0,useful_answers:0},rooms:rules.map(([id,metric,required])=>({id,name:'Untrusted',destination:'https://example.invalid',description:'Untrusted',unlocked:false,authorized:false,authorized_at:null,requirement:{metric,required,current:0}}))});
test('only the local catalog can choose room labels and navigation destinations',()=>{
 const read=readOfficeSnapshot(snapshot(),'one');
 assert.deepEqual(read.rooms.map(room=>room.destination),['data','tasks','deliverables','settings']);
 assert.deepEqual(read.rooms.map(room=>room.name),['Biblioteca','Laboratorio','Galería','Sala de estrategia']);
});
test('foreign, duplicate, incomplete or contradictory reports cannot extend an office',()=>{
 for(const change of [data=>data.project='two',data=>data.rooms.pop(),data=>data.rooms[1]=data.rooms[0],data=>data.rooms[0].unlocked=true,data=>data.metrics.files=-1,data=>data.rooms[0].requirement.current=1,data=>data.rooms[0].requirement.required=0,data=>data.rooms[0].authorized='true',data=>data.rooms[0].authorized=true,data=>data.rooms[0].authorized_at='not a date']){
  const data=snapshot();change(data);assert.throws(()=>readOfficeSnapshot(data,'one'),/crecimiento/);
 }
});
test('saved authorization survives lower progress without being invented for other rooms',()=>{
 const data=snapshot();data.rooms[0].authorized=true;data.rooms[0].authorized_at='2026-10-28T18:00:00Z';
 const read=readOfficeSnapshot(data,'one');assert.equal(read.rooms[0].authorized,true);assert.equal(read.rooms[0].unlocked,false);assert.equal(read.rooms.slice(1).some(room=>room.authorized),false);
});
