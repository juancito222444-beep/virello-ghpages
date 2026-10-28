import * as THREE from 'three';
import {MeshKit} from './assets';

export type OfficeExpansion={id:string;name:string;destination:string};
export type ExpansionModule={root:THREE.Group;anchor:THREE.Vector3;bounds:THREE.Box3;dispose:()=>void};
const layouts:Record<string,{x:number;z:number;w:number;d:number;color:string;side:'east'|'south'}>={
 library:{x:31.5,z:4.5,w:9,d:9,color:'#b9cdb9',side:'east'},
 laboratory:{x:31.5,z:15.5,w:9,d:9,color:'#bbd3e7',side:'east'},
 gallery:{x:5.5,z:27,w:11,d:8,color:'#e5bccc',side:'south'},
 strategy:{x:18.5,z:27,w:11,d:8,color:'#c8bbe4',side:'south'},
};

/** Original, finite modules. These visual doors open existing project tools;
 * agents keep their collision-safe navigation inside the original office. */
export function buildExpansion(expansion:OfficeExpansion):ExpansionModule|null{
 if(!Object.hasOwn(layouts,expansion.id))return null;const layout=layouts[expansion.id];
 const {x,z,w,d,color,side}=layout,kit=new MeshKit(),root=new THREE.Group();root.position.set(x,0,z);
 const box=(width:number,height:number,depth:number,px:number,py:number,pz:number,paint:string,r=.06)=>kit.box(root,width,height,depth,px,py,pz,paint,r);
 box(w+.3,.42,d+.3,0,-.26,0,'#c7b29d',.12);
 box(w,.11,d,0,0,0,'#f6eadc');box(w-.6,.035,d-.6,0,.08,0,color,.1);
 box(w,1.8,.14,0,.92,-d/2,'#eee7ef');
 if(side==='east'){
  box(3.1,.35,2.0,-w/2-1.5,-.25,0,'#c7b29d');box(3.1,.08,2.0,-w/2-1.5,-.025,0,'#eedbc5');
 }else{
  box(2.0,.35,3.1,0,-.25,-d/2-1.5,'#c7b29d');box(2.0,.08,3.1,0,-.025,-d/2-1.5,'#eedbc5');
 }
 // A planter gives each wing a recognizable edge without additional assets.
 kit.cylinder(root,.35,.27,.55,w/2-.8,.33,d/2-.8,'#fff5e7');
 const plant=kit.sphere(root,.5,w/2-.8,1.01,d/2-.8,'#7fa48a');plant.scale.set(.8,1.35,.8);
 if(expansion.id==='library'){
  box(6.8,2.6,.75,0,1.4,-2.9,'#d5bd9f');
  for(let row=0;row<3;row++){
   box(6.8,.09,.9,0,.42+row*.8,-2.9,'#f3dfc3');
   for(let col=0;col<6;col++)box(.55,.55,.5,-2.8+col*1.1,.74+row*.8,-2.64,['#9e82b8','#759d91','#c29a76'][col%3]);
  }
  box(3.1,.14,1.6,0,.95,1.15,'#fff4e3');box(.2,.85,1.1,-1,.46,1.15,'#b69f83');box(.2,.85,1.1,1,.46,1.15,'#b69f83');
  box(.85,.08,1.0,-.35,1.08,1.15,'#a28cbe');
 }else if(expansion.id==='laboratory'){
  box(6.1,.18,1.8,0,1.1,-1.9,'#fff6ed');
  for(const px of [-2.4,2.4])box(.18,1,.9,px,.5,-1.9,'#96a9b6');
  box(2.0,1.35,.25,-1.45,1.89,-2.15,'#516173');box(1.7,1.05,.05,-1.45,1.89,-1.99,'#a0d5d9');
  for(let col=0;col<3;col++)kit.cylinder(root,.15,.21,.55,1+col*.65,1.47,-1.8,['#a598c9','#80b8aa','#d4b174'][col]);
  box(3.3,.65,1.25,0,.39,1.4,'#e4eef4');box(2.7,.07,.8,0,.76,1.4,'#a3bacd');
 }else if(expansion.id==='gallery'){
  for(let col=0;col<3;col++){
   const px=-3.1+col*3.1;box(2.15,1.65,.18,px,1.52,-3.7,'#ae8b70');box(1.9,1.4,.06,px,1.52,-3.58,['#cdb8e5','#b5d5c7','#f2d5ab'][col]);
   box(.2,.5,.05,px-.4,1.25,-3.53,'#fff6e8');box(.2,.85,.05,px,1.42,-3.53,'#fff6e8');box(.2,1.05,.05,px+.4,1.52,-3.53,'#fff6e8');
  }
  box(5.1,.18,1.1,0,.65,.8,'#f4e6d9');for(const px of [-2,2])box(.2,.6,.75,px,.3,.8,'#c4a98e');
 }else{
  box(5.3,.18,2.5,0,1.06,-.2,'#f7ecdc',.2);box(.6,1,.7,0,.5,-.2,'#b49b87');
  for(const px of [-1.9,1.9])for(const pz of [-2,1.5]){
   box(.95,.18,.8,px,.7,pz,'#aa94c6');box(.95,.65,.15,px,1,pz+.35,'#b8a0d1');
  }
  box(5.2,1.5,.12,0,1.35,-3.7,'#fff7ed');
  for(let col=0;col<4;col++)box(.8,.48,.05,-1.65+col*1.1,1.4,-3.6,['#a4c4b4','#d9bd8d','#b5a0d4','#c99caf'][col]);
  box(.9,.05,.7,-.8,1.2,-.2,'#b296cd');box(.9,.05,.7,.8,1.2,-.2,'#e5d2ae');
 }
 root.traverse(object=>{if(object instanceof THREE.Mesh){object.userData.officeRoom=expansion.id;object.userData.destination=expansion.destination;}});
 return{root,anchor:new THREE.Vector3(x,3.5,z),bounds:new THREE.Box3(new THREE.Vector3(x-w/2-.2,-.5,z-d/2-.2),new THREE.Vector3(x+w/2+.2,4,z+d/2+.2)),dispose:()=>kit.dispose()};
}
