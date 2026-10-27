const test=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const path=require('node:path');const vm=require('node:vm');const ts=require('typescript');
const file=path.join(__dirname,'../src/scene/navigation.ts');const js=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const sandbox={exports:{}};vm.runInNewContext(js,sandbox,{filename:file});const {GridNavigation}=sandbox.exports;
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
test('una ruta rodea un muro y solo utiliza celdas transitables contiguas',()=>{
 const nav=new GridNavigation(12,12);nav.blockRect(4,0,1,9);assert(nav.register('a',[2,2]));const route=nav.path('a',[8,2]);assert(route.length>6);let last=[2,2];
 for(const cell of route){assert(!nav.isBlocked(cell));assert.equal(Math.abs(cell[0]-last[0])+Math.abs(cell[1]-last[1]),1);assert(nav.reserveNext('a',cell));assert(same(nav.arrive('a'),cell));last=cell;}
 assert(same(last,[8,2]));
});
test('los muebles y los límites rechazan destinos',()=>{const nav=new GridNavigation(8,8);nav.blockRect(3,3,2,2);assert(nav.register('a',[1,1]));assert.equal(nav.path('a',[3,3]).length,0);assert.equal(nav.path('a',[-1,2]).length,0);assert(!nav.register('b',[4,4]));});
test('los brazos mantienen distancia también en diagonales',()=>{const nav=new GridNavigation();assert(nav.register('a',[4,4]));assert(!nav.register('b',[5,4]));assert(!nav.register('b',[5,5]));assert(nav.register('b',[6,4]));});
test('origen y destino quedan ocupados durante el paso',()=>{const nav=new GridNavigation();assert(nav.register('a',[2,2]));assert(nav.reserveNext('a',[3,2]));assert(!nav.isFree([2,2],'b'));assert(!nav.isFree([3,2],'b'));assert(!nav.isFree([4,3],'b'));assert(nav.isFree([3,2],'a'));assert(same(nav.arrive('a'),[3,2]));assert(nav.isFree([1,2],'b'));});
test('agentes no intercambian posiciones ni atraviesan una reserva',()=>{const nav=new GridNavigation();assert(nav.register('a',[1,1]));assert(nav.register('b',[5,1]));assert(nav.reserveNext('a',[2,1]));assert(nav.reserveNext('b',[4,1]));nav.arrive('a');assert(!nav.reserveNext('a',[3,1]));nav.arrive('b');assert(!nav.reserveNext('a',[3,1]));assert(!nav.reserveNext('b',[3,1]));});
test('cancelar libera el destino antes de empezar a andar, preserva origen',()=>{const nav=new GridNavigation();nav.register('a',[2,2]);nav.reserveNext('a',[3,2]);nav.cancel('a');assert(same(nav.position('a'),[2,2]));assert(nav.isFree([4,2],'b'));assert(!nav.isFree([2,2],'b'));nav.remove('a');assert(nav.isFree([2,2],'b'));});
test('la puerta conserva un recorrido con margen para muebles',()=>{const nav=new GridNavigation(24,20);nav.blockRect(0,0,24,1);nav.blockRect(0,0,1,20);nav.blockRect(0,12,13,1);nav.register('a',[4,4]);nav.register('b',[10,9]);const route=nav.path('a',[2,14]);assert(route.length>20);assert(route.some(([x,z])=>x>=13&&z===12));assert(same(route.at(-1),[2,14]));});
const layoutFile=path.join(__dirname,'../src/scene/layout.ts');const layoutJS=ts.transpileModule(fs.readFileSync(layoutFile,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const layoutSandbox={exports:{},require(name){assert.equal(name,'./navigation');return sandbox.exports;}};vm.runInNewContext(layoutJS,layoutSandbox,{filename:layoutFile});const {HOMES,MEETING,configureOfficeNavigation}=layoutSandbox.exports;
test('la distribución REAL permite que los seis agentes lleguen a reunión sin cruzar muebles',()=>{
 for(let selected=0;selected<6;selected++){
  const nav=configureOfficeNavigation(new GridNavigation());HOMES.forEach((cell,index)=>assert(nav.register('agent'+index,cell)));
  const route=nav.path('agent'+selected,MEETING[selected]);assert(route.length>0,'Sin salida para agente '+selected);
  for(const cell of route){assert(nav.reserveNext('agent'+selected,cell));nav.arrive('agent'+selected);}
  assert(same(nav.position('agent'+selected),MEETING[selected]));
 }
});

test('los trayectos que comparten pasillo esperan turno y se reanudan tras liberar',()=>{const {CorridorReservations}=sandbox.exports;const traffic=new CorridorReservations();assert(traffic.claim('a',[[1,2],[2,2],[3,2]]));assert(!traffic.claim('b',[[3,4],[3,3],[3,2]]));traffic.release('a');assert(traffic.claim('b',[[3,4],[3,3],[3,2]]));});
test('trayectos separados pueden avanzar en paralelo y cambiar su propia reserva',()=>{const {CorridorReservations}=sandbox.exports;const traffic=new CorridorReservations();assert(traffic.claim('a',[[1,1],[2,1]]));assert(traffic.claim('b',[[10,10],[11,10]]));assert(traffic.claim('a',[[2,1],[3,1]]));assert(!traffic.claim('a',[[10,9],[10,10]]));traffic.release('b');assert(traffic.claim('a',[[10,9],[10,10]]));});
