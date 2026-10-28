const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const ts=require('typescript');
const compiled=ts.transpileModule(fs.readFileSync(path.join(__dirname,'../src/RunFilters.tsx'),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,jsx:ts.JsxEmit.ReactJSX}}).outputText;
const moduleObject={exports:{}};new Function('exports','require',compiled)(moduleObject.exports,require);
const {filterRuns,runCounts}=moduleObject.exports;
const run=(id,status,request='Un objetivo')=>({id,status,request});

test('literal objective and identifier lookup ignores case and composed accents, preserving order and inputs',()=>{
 const rows=[run('a','Completado','Reunión y café'),run('b','Interrumpido','CAFE\u0301: revisar ventas'),run('CAFE-EXEC-03','Pendiente','Otro objetivo'),run('d','Fallido','Ausente')];
 const before=JSON.stringify(rows),found=filterRuns(rows,'  CAFE  ');
 assert.deepEqual(found.map(row=>row.id),['a','b','CAFE-EXEC-03']);assert.equal(found[0],rows[0]);assert.equal(JSON.stringify(rows),before);
 assert.deepEqual(filterRuns(rows,'exec-03').map(row=>row.id),['CAFE-EXEC-03']);
 assert.deepEqual(filterRuns(rows,'   '),rows);assert.deepEqual(filterRuns(rows,'inexistente'),[]);
});

test('punctuation is never interpreted as a regular expression',()=>{
 const rows=[run('one','Completado','Ventas [Q1] y total 3+2.'),run('two','Completado','Ventas Q2')];
 assert.deepEqual(filterRuns(rows,'[q1]').map(row=>row.id),['one']);
 assert.deepEqual(filterRuns(rows,'3+2').map(row=>row.id),['one']);
 assert.deepEqual(filterRuns(rows,'.*'),[]);assert.deepEqual(filterRuns(rows,'[').map(row=>row.id),['one']);
});

test('each status group contains its real states, with unknown states retained only in all',()=>{
 const rows=[run('pending','Pendiente'),run('running','En ejecución'),run('correcting','En corrección'),run('planning','Planificando'),run('approval','Espera aprobación'),run('question','Requiere información'),run('done','Completado'),run('paused','Interrumpido'),run('failed','Fallido'),run('cancelled','Cancelado'),run('future','Nuevo estado futuro')];
 const ids=status=>filterRuns(rows,'',status).map(row=>row.id);
 assert.deepEqual(ids('active'),['pending','running','correcting','planning']);assert.deepEqual(ids('waiting'),['approval','question']);
 assert.deepEqual(ids('completed'),['done']);assert.deepEqual(ids('interrupted'),['paused']);assert.deepEqual(ids('failed'),['failed']);assert.deepEqual(ids('cancelled'),['cancelled']);
 assert.deepEqual(ids('all'),rows.map(row=>row.id));assert.deepEqual(ids('invalid-runtime-status'),ids('all'));
 assert.deepEqual(runCounts(rows),{total:11,active:4,waiting:2,completed:1,interrupted:1,failed:1,cancelled:1,other:1});
});

test('query and status combine without changing original ordering or confusing archived results with resumable work',()=>{
 const rows=[run('first','Interrumpido','Revisar ventas'),run('second','Completado','Revisar ventas'),run('third','Interrumpido','Revisar precios'),run('fourth','Interrumpido','REVISAR VENTAS')];
 assert.deepEqual(filterRuns(rows,'ventas','interrupted').map(row=>row.id),['first','fourth']);
 assert.deepEqual(filterRuns(rows,'ventas','completed').map(row=>row.id),['second']);
 assert.deepEqual(runCounts([]),{total:0,active:0,waiting:0,completed:0,interrupted:0,failed:0,cancelled:0,other:0});
});
