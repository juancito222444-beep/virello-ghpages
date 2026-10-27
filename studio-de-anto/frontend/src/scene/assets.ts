import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import type {Agent} from '../Office';
import {GridNavigation} from './navigation';
import {DESKS,HOMES,MEETING,PLANTS,CHAIR_OFFSET,configureOfficeNavigation} from './layout';

/** All meshes are original procedural geometry; no network assets or character packs. */
export class MeshKit {
  geometries=new Map<string,THREE.BufferGeometry>();
  materials=new Map<string,THREE.MeshStandardMaterial>();
  textures:THREE.Texture[]=[];
  material(color:THREE.ColorRepresentation,roughness=.38,metalness=.03){
    const key=`${color}:${roughness}:${metalness}`;
    if(!this.materials.has(key))this.materials.set(key,new THREE.MeshStandardMaterial({color,roughness,metalness}));
    return this.materials.get(key)!;
  }
  geometry(key:string,create:()=>THREE.BufferGeometry){if(!this.geometries.has(key))this.geometries.set(key,create());return this.geometries.get(key)!;}
  box(parent:THREE.Object3D,w:number,h:number,d:number,x:number,y:number,z:number,color:THREE.ColorRepresentation,r=.06){
    const geo=this.geometry(`box:${w}:${h}:${d}:${r}`,()=>r?new RoundedBoxGeometry(w,h,d,2,Math.min(r,w/4,h/4,d/4)):new THREE.BoxGeometry(w,h,d));
    const mesh=new THREE.Mesh(geo,this.material(color));mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;
  }
  cylinder(parent:THREE.Object3D,top:number,bottom:number,h:number,x:number,y:number,z:number,color:THREE.ColorRepresentation){
    const geo=this.geometry(`cyl:${top}:${bottom}:${h}`,()=>new THREE.CylinderGeometry(top,bottom,h,20));const mesh=new THREE.Mesh(geo,this.material(color,.29));mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;
  }
  sphere(parent:THREE.Object3D,r:number,x:number,y:number,z:number,color:THREE.ColorRepresentation){
    const geo=this.geometry(`sphere:${r}`,()=>new THREE.SphereGeometry(r,16,12));const mesh=new THREE.Mesh(geo,this.material(color));mesh.position.set(x,y,z);mesh.castShadow=true;parent.add(mesh);return mesh;
  }
  dispose(){for(const g of this.geometries.values())g.dispose();for(const m of this.materials.values())m.dispose();for(const t of this.textures)t.dispose();}
}

function makeScreen(kit:MeshKit,name:string,color:string){
  const canvas=document.createElement('canvas');canvas.width=256;canvas.height=160;
  const ctx=canvas.getContext('2d')!;ctx.fillStyle='#24283c';ctx.fillRect(0,0,256,160);
  ctx.fillStyle='#3e4159';ctx.fillRect(0,0,256,17);ctx.fillStyle=color;ctx.fillRect(12,6,5,5);ctx.fillStyle='#8390a9';ctx.fillRect(24,6,68,4);
  if(name==='iris'){
    for(let n=0;n<5;n++){ctx.fillStyle=['#9d88d8','#83bbaa','#d9a3be'][n%3];ctx.fillRect(28+n*41,136-[39,70,58,94,85][n],26,[39,70,58,94,85][n]);}
  }else{
    for(let n=0;n<7;n++){ctx.fillStyle=n%3===0?color:'#8490a7';ctx.globalAlpha=.8;ctx.fillRect(17,31+n*15,70+(n*31)%143,4);ctx.globalAlpha=1;}
  }
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;kit.textures.push(texture);return texture;
}

export function buildRoom(room:THREE.Group,kit:MeshKit,nav:GridNavigation){
  configureOfficeNavigation(nav);
  // An open dollhouse preserves visibility; soft shadows provide the depth.
  const floor=kit.box(room,24.7,.42,20.7,12,-.26,10,'#c7b29d',.14);
  kit.box(room,24.2,.1,20.2,12,-.005,10,'#f0ddc4',.04).userData.walkable=true;
  const plankGeo=kit.geometry('plank',()=>new THREE.BoxGeometry(1.98,.035,.98));
  const plank=new THREE.InstancedMesh(plankGeo,kit.material('#ecd4b5',.62),240);let idx=0;const dummy=new THREE.Object3D();
  const palette=['#efddc6','#ecd5b9','#e5caa8','#f5e3ca','#e8cfb0'];
  for(let z=0;z<20;z++)for(let x=0;x<12;x++){dummy.position.set(x*2+1,.061,z+.5);dummy.updateMatrix();plank.setMatrixAt(idx,dummy.matrix);plank.setColorAt(idx,new THREE.Color(palette[(x*7+z*3)%5]));idx++;}
  plank.receiveShadow=true;plank.userData.walkable=true;room.add(plank);
  kit.box(room,12.3,.045,10.3,7.1,.10,6.0,'#ccb8ea',.12).userData.walkable=true;
  kit.box(room,7.3,.045,7.8,19.3,.10,4.6,'#d4e2d2',.12).userData.walkable=true;
  kit.box(room,7.3,.045,7.8,19.3,.10,15.4,'#e2d3ed',.12).userData.walkable=true;
  // Rear walls, low enough to keep the stage open, with daylight window frames.
  kit.box(room,24.5,3.0,.18,12,1.55,-.03,'#e8e3ed',.04);
  kit.box(room,.18,3.0,20.0,-.03,1.55,10,'#eee9f0',.04);
  const glassMat=new THREE.MeshPhysicalMaterial({color:'#b8dfe5',transparent:true,opacity:.34,roughness:.14,metalness:.04,side:THREE.DoubleSide,depthWrite:false});
  const glassGeo=kit.geometry('window',()=>new THREE.BoxGeometry(3.5,1.85,.035));
  for(let x=2.3;x<24;x+=4.6){
    const pane=new THREE.Mesh(glassGeo,glassMat);pane.position.set(x,1.9,.09);room.add(pane);
    kit.box(room,3.65,.1,.16,x,.94,.12,'#fafaff',.02);kit.box(room,3.65,.1,.16,x,2.87,.12,'#fafaff',.02);
    kit.box(room,.08,1.95,.12,x,1.9,.15,'#f6f8fb',.01);kit.box(room,.08,1.95,.12,x-1.8,1.9,.15,'#f6f8fb',.01);kit.box(room,.08,1.95,.12,x+1.8,1.9,.15,'#f6f8fb',.01);
  }
  for(let z=2.8;z<20;z+=4.6){
    const pane=new THREE.Mesh(glassGeo,glassMat);pane.rotation.y=Math.PI/2;pane.position.set(.1,1.9,z);room.add(pane);
    kit.box(room,.16,.1,3.65,.12,.94,z,'#fafaff',.02);kit.box(room,.16,.1,3.65,.12,2.87,z,'#fafaff',.02);
  }
  // Slim glass partition. Door at x=12 remains open and is navigable.
  for(let x=1.5;x<11;x+=3){
    const pane=new THREE.Mesh(kit.geometry('partition',()=>new THREE.BoxGeometry(2.85,2.35,.045)),glassMat);pane.position.set(x,1.3,12.2);room.add(pane);
    kit.box(room,.055,2.5,.06,x-1.46,1.3,12.2,'#c8c0d2',.01);kit.box(room,2.9,.05,.07,x,2.55,12.2,'#cec8d6',.01);
  }
  // Keep a material reference in the room so Office can dispose custom shared materials.
  room.userData.extraMaterials=[glassMat];
  const homes=HOMES;
  const deskCenters=DESKS;
  const ids=['anto','atlas','vera','bruno','iris','leo'];
  const colors=['#b58aee','#eeae67','#74b9a7','#799acb','#e995b9','#d7bb73'];
  deskCenters.forEach(([x,z],i)=>{
    const c=colors[i];
    kit.box(room,3.7,.15,1.65,x,1.30,z,'#f7eddf',.10);
    for(const dx of [-1.5,1.5])for(const dz of [-.58,.58])kit.box(room,.12,1.2,.12,x+dx,.66,z+dz,'#cbbba8',.025);
    kit.box(room,1.4,.88,.10,x,2.03,z-.28,'#454554',.055);
    kit.box(room,.15,.25,.12,x,1.50,z-.28,'#5a5867',.025);kit.box(room,.7,.05,.36,x,1.40,z-.22,'#a9a6b5',.035);
    const screen=new THREE.Mesh(kit.geometry('display',()=>new THREE.PlaneGeometry(1.27,.72)),new THREE.MeshBasicMaterial({map:makeScreen(kit,ids[i],c)}));screen.position.set(x,2.04,z-.219);room.add(screen);(room.userData.extraMaterials as THREE.Material[]).push(screen.material);
    kit.box(room,1.08,.045,.40,x,1.408,z+.47,'#e0dbe7',.025);
    for(let row=0;row<3;row++)kit.box(room,.92,.015,.025,x,1.436,z+.36+row*.11,'#a4a0af',.006);
    kit.box(room,.22,.05,.35,x+.83,1.43,z+.46,'#c8c1d4',.06);
    const cup=kit.cylinder(room,.13,.105,.26,x+1.36,1.50,z+.3,c);kit.cylinder(room,.105,.105,.012,x+1.36,1.638,z+.3,'#6c5646');
    const handle=new THREE.Mesh(kit.geometry('handle',()=>new THREE.TorusGeometry(.09,.025,7,12)),kit.material(c));handle.position.set(x+1.50,1.51,z+.3);handle.rotation.y=Math.PI/2;room.add(handle);
    kit.box(room,.45,.04,.6,x-1.25,1.43,z+.3,'#c9b5e6',.02);
    // Chair behind the standing work position: legs and wheels remain obstacles.
    const cz=z+CHAIR_OFFSET;kit.cylinder(room,.07,.07,.65,x,.47,cz,'#73707d');
    kit.box(room,.95,.15,.85,x,.80,cz,c,.12);kit.box(room,.95,.85,.15,x,1.19,cz+.38,c,.12);
    kit.box(room,1.1,.065,.12,x,.19,cz,'#96909e',.03);kit.box(room,.12,.065,1.1,x,.19,cz,'#96909e',.03);
    for(const dx of [-.45,.45])for(const dz of [-.45,.45])kit.sphere(room,.075,x+dx,.12,cz+dz,'#625e6c');
  });
  // Meeting table, inset notebook and chairs at the far side.
  kit.box(room,6.7,.18,2.4,6.5,1.28,16.5,'#efe1c9',.25);
  for(const x of [4,9])kit.box(room,.2,1.2,1.8,x,.64,16.5,'#c2b39f',.03);
  for(const x of [4.2,6.5,8.8]){
    kit.box(room,1,.16,.8,x,.75,18.7,'#9f8db9',.12);kit.box(room,1,.75,.15,x,1.10,19.05,'#a996c4',.10);kit.cylinder(room,.08,.08,.65,x,.38,18.7,'#80788c');
  }
  kit.box(room,.9,.05,.65,5.5,1.405,16.5,'#84679f',.04);kit.box(room,.65,.05,.8,7.1,1.405,16.4,'#fff8ee',.03);
  for(const x of [3.9,8.8])kit.cylinder(room,.12,.09,.23,x,1.52,16.1,'#bca5d7');
  // Green lounge and bookcase.
  kit.box(room,3.3,.50,1.0,19.0,.45,8.5,'#83ab95',.20);kit.box(room,3.3,.82,.22,19,.87,8.92,'#93b59f',.16);
  kit.box(room,.22,.67,1.0,17.4,.78,8.5,'#92b49d',.12);kit.box(room,.22,.67,1.0,20.6,.78,8.5,'#92b49d',.12);
  kit.box(room,1.6,.13,.8,19,.52,10.4,'#e2d3ba',.1);for(const dx of [-.6,.6])kit.box(room,.09,.48,.09,19+dx,.24,10.4,'#b0a18c',.02);
  kit.box(room,.7,2.4,3.2,22.8,1.27,14.8,'#e2d6c4',.05);
  for(let i=0;i<4;i++){kit.box(room,.8,.07,3.2,22.8,.35+i*.57,14.8,'#cbbda9',.02);for(let j=0;j<5;j++)kit.box(room,.35,.38,.16,22.7,.57+i*.57,13.5+j*.42,['#9f86bd','#cfaa8a','#8baea0','#d4b7d2'][j%4],.01);}
  function plant(x:number,z:number,large=false){
    const height=large?1.55:1.0;
    kit.cylinder(room,.39,.29,.62,x,.39,z,'#eee5d9');kit.cylinder(room,.35,.35,.035,x,.72,z,'#746053');
    for(let i=0;i<7;i++){
      const angle=i*2.4;const group=new THREE.Group();group.position.set(x,.70,z);group.rotation.y=angle;room.add(group);
      const leaf=kit.sphere(group,.23,0,height*.50,.18,['#669c7a','#84ad8d','#4c8267'][i%3]);leaf.scale.set(.58,height*1.9,1.05);leaf.rotation.x=.35+(i%3)*.22;leaf.position.y=height*.42;
    }
  }
  PLANTS.forEach(([x,z],i)=>plant(x,z,i%2===0));
  // Original brick studs on the front of the raised base.
  for(let x=1;x<24;x+=1.4)kit.cylinder(room,.16,.16,.07,x,-.01,20.35,'#d5c2aa');
  return {floor,homes,meeting:MEETING};
}

export type ActorRig={root:THREE.Group;body:THREE.Group;head:THREE.Group;arms:[THREE.Group,THREE.Group];legs:[THREE.Group,THREE.Group];ring:THREE.Mesh;orb:THREE.Mesh;agent:Agent};
export function buildActor(kit:MeshKit,a:Agent,index:number):ActorRig{
  const root=new THREE.Group(),body=new THREE.Group();root.add(body);const skin=['#edbd88','#ecc49a','#e4b38a','#ce9d73','#f0c8a3','#d9ad85'][index];
  const legs:[THREE.Group,THREE.Group]=[new THREE.Group(),new THREE.Group()];
  legs.forEach((leg,i)=>{leg.position.set(i? .205:-.205,.73,0);body.add(leg);kit.box(leg,.34,.57,.39,0,-.285,0,'#454655',.055);kit.box(leg,.36,.18,.54,0,-.59,.065,'#4a4958',.045);});
  kit.box(body,.80,.19,.44,0,.78,0,'#4b485c',.035);
  kit.box(body,.85,.70,.47,0,1.19,0,a.color,.105);
  kit.box(body,.025,.60,.015,0,1.20,.244,'#ffffff',.004);
  const badge=kit.box(body,.20,.15,.02,-.19,1.24,.25,'#f7effc',.02);badge.rotation.z=.08;
  kit.box(body,.11,.028,.025,-.19,1.25,.266,index%2?'#7c6c91':'#a89bbc',.004);
  const arms:[THREE.Group,THREE.Group]=[new THREE.Group(),new THREE.Group()];
  arms.forEach((arm,i)=>{const sign=i?1:-1;arm.position.set(sign*.53,1.42,0);body.add(arm);kit.cylinder(arm,.15,.13,.48,0,-.23,0,a.color);kit.sphere(arm,.15,0,-.03,0,a.color);
    const hand=new THREE.Mesh(kit.geometry('claw',()=>new THREE.TorusGeometry(.115,.055,8,15,Math.PI*1.62)),kit.material(skin,.3));hand.position.set(0,-.58,.015);hand.rotation.z=i?.2:2.9;hand.castShadow=true;arm.add(hand);kit.cylinder(arm,.075,.075,.14,0,-.49,0,skin);
  });
  const head=new THREE.Group();head.position.y=1.79;body.add(head);
  kit.cylinder(head,.31,.31,.48,0,0,0,skin);kit.cylinder(head,.13,.13,.105,0,.29,0,skin);kit.cylinder(body,.14,.14,.18,0,1.53,0,skin);
  const canvas=document.createElement('canvas');canvas.width=256;canvas.height=192;const ctx=canvas.getContext('2d')!;
  ctx.fillStyle='#403841';ctx.beginPath();ctx.ellipse(83,77,9,13,0,0,Math.PI*2);ctx.ellipse(173,77,9,13,0,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#765344';ctx.lineWidth=6;ctx.lineCap='round';ctx.beginPath();ctx.arc(128,111,34,.17,Math.PI-.17);ctx.stroke();
  ctx.fillStyle='#f7ddbf';ctx.beginPath();ctx.arc(80,72,2.5,0,Math.PI*2);ctx.arc(170,72,2.5,0,Math.PI*2);ctx.fill();
  if(index===1||index===3){ctx.strokeStyle='#423e4a';ctx.lineWidth=6;ctx.strokeRect(53,53,61,44);ctx.strokeRect(142,53,61,44);ctx.beginPath();ctx.moveTo(114,68);ctx.lineTo(142,68);ctx.stroke();}
  const tex=new THREE.CanvasTexture(canvas);tex.colorSpace=THREE.SRGBColorSpace;kit.textures.push(tex);
  const faceMat=new THREE.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false,side:THREE.FrontSide});
  const face=new THREE.Mesh(kit.geometry('face',()=>new THREE.PlaneGeometry(.54,.41)),faceMat);face.position.set(0,-.005,.316);head.add(face);root.userData.extraMaterials=[faceMat];
  const hair=['#433b50','#715441','#493e46','#564741','#ae758f','#866244'][index];
  kit.cylinder(head,.325,.325,.16,0,.20,-.015,hair);
  const top=kit.sphere(head,.30,0,.27,-.035,hair);top.scale.y=.48;
  if(index===0||index===2||index===4){kit.box(head,.12,.37,.26,-.28,.06,-.08,hair,.06);kit.box(head,.12,.37,.26,.28,.06,-.08,hair,.06);const pony=kit.sphere(head,.21,0,.08,-.34,hair);pony.scale.y=1.3;}
  else{const fringe=kit.box(head,.46,.12,.22,-.03,.21,.20,hair,.045);fringe.rotation.z=.1;}
  const ringMaterial=new THREE.MeshBasicMaterial({color:'#8f63d4',transparent:true,opacity:.82});const ring=new THREE.Mesh(kit.geometry('selection',()=>new THREE.TorusGeometry(.65,.045,8,40)),ringMaterial);ring.rotation.x=-Math.PI/2;ring.position.y=.08;root.add(ring);
  const orbMaterial=new THREE.MeshStandardMaterial({color:'#8fbea5',emissive:'#8fbea5',emissiveIntensity:.25,roughness:.3});const orb=new THREE.Mesh(kit.geometry('status-orb',()=>new THREE.SphereGeometry(.09,12,8)),orbMaterial);orb.position.set(.49,2.18,0);root.add(orb);(root.userData.extraMaterials as THREE.Material[]).push(ringMaterial,orbMaterial);
  root.scale.setScalar(1.08);
  return {root,body,head,arms,legs,ring,orb,agent:a};
}
