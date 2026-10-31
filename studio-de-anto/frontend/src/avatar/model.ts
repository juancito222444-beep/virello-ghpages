import * as T from 'three';
import type {AvatarSettings} from './settings';
export type AnimeRig={root:T.Group;apply:(s:AvatarSettings)=>void;animate:(time:number,walk:boolean,action:string,reduced:boolean)=>void;dispose:()=>void};
export function createAnime():AnimeRig{
 const root=new T.Group(),body=new T.Group(),head=new T.Group();root.add(body);head.position.y=4.34;body.add(head);
 const gradient=new T.DataTexture(new Uint8Array([83,83,83,255,145,145,145,255,209,209,209,255,255,255,255,255]),4,1);gradient.needsUpdate=true;gradient.minFilter=T.NearestFilter;gradient.magFilter=T.NearestFilter;
 const mat=(color:string)=>new T.MeshToonMaterial({color,gradientMap:gradient});
 const skin=mat('#f2cdbd'),hair=mat('#292037'),hairLight=mat('#47344f'),cloth=mat('#b3a0dc'),accent=mat('#f8eee8'),dark=mat('#39364f'),shoe=mat('#eee8ef'),metal=new T.MeshStandardMaterial({color:'#e6c597',metalness:.65,roughness:.35});
 function mesh(g:T.BufferGeometry,m:T.Material,parent:T.Object3D,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);parent.add(o);return o;}
 function ellipsoid(parent:T.Object3D,m:T.Material,x:number,y:number,z:number,sx:number,sy:number,sz:number){const o=mesh(new T.SphereGeometry(1,24,20),m,parent,x,y,z);o.scale.set(sx,sy,sz);return o;}
 function tube(parent:T.Object3D,m:T.Material,points:number[][],radius=.025){return mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p as [number,number,number]))),18,radius,7,false),m,parent);}
 function limb(parent:T.Object3D,m:T.Material,length:number,radius:number,x=0,y=0,z=0){return mesh(new T.CapsuleGeometry(radius,Math.max(.01,length-2*radius),6,12),m,parent,x,y,z);}
 function profile(parent:T.Object3D,m:T.Material,points:number[][],zScale=.64){const o=mesh(new T.LatheGeometry(points.map(([r,y])=>new T.Vector2(r,y)),40),m,parent);o.scale.z=zScale;return o;}
 function lock(parent:T.Object3D,points:number[][],width:number,m=hair){
  const curve=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p as [number,number,number]))),positions:number[]=[],indices:number[]=[];
  for(let i=0;i<=20;i++){const p=curve.getPoint(i/20),w=width*Math.max(.045,Math.sin((i/20*.89+.08)*Math.PI));for(let j=0;j<8;j++){const a=j/8*Math.PI*2;positions.push(p.x+Math.cos(a)*w,p.y,p.z+Math.sin(a)*w*.48);}}
  for(let i=0;i<20;i++)for(let j=0;j<8;j++){const a=i*8+j,b=i*8+(j+1)%8,c=a+8,d=b+8;indices.push(a,c,b,b,c,d);}
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setIndex(indices);g.computeVertexNormals();return mesh(g,m,parent);
 }
 // Six-head stylized adult proportions, articulated hips, elbows and shoulders.
 profile(body,skin,[[.18,2.55],[.29,2.72],[.24,3.08],[.35,3.6],[.41,3.76],[.23,3.9]]);
 limb(body,skin,.32,.115,0,3.99,0);
 const faceShape=ellipsoid(head,skin,0,0,0,.345,.435,.285),vertices=faceShape.geometry.getAttribute('position');for(let i=0;i<vertices.count;i++){const y=vertices.getY(i);if(y<0)vertices.setX(i,vertices.getX(i)*(1+y*.23));}vertices.needsUpdate=true;faceShape.geometry.computeVertexNormals();
 ellipsoid(head,skin,-.34,-.035,0,.065,.105,.065);ellipsoid(head,skin,.34,-.035,0,.065,.105,.065);
 // Back hair lies behind the face; tapered locks provide a real 3D silhouette.
 ellipsoid(head,hair,0,.035,-.075,.388,.477,.31);
 const hairstyles={long:new T.Group(),bob:new T.Group(),ponytail:new T.Group()};Object.values(hairstyles).forEach(g=>head.add(g));
 for(const [name,g] of Object.entries(hairstyles)){
  const length=name==='bob'?.68:1.42;
  for(let i=0;i<13;i++){const angle=Math.PI*.12+i/12*Math.PI*1.76,x=Math.cos(angle)*.31,z=-.12-Math.abs(Math.sin(angle))*.2;
   lock(g,[[x,.27,z],[x*1.2,-.25,z-.04],[x*1.26,-length*.7,z+.025],[x*1.08,-length,z+.1]],.095);
  }
  for(const sign of [-1,1]){lock(g,[[sign*.26,.3,.13],[sign*.36,-.08,.15],[sign*.39,-length*.65,.13],[sign*.29,-length,.18]],.085);lock(g,[[sign*.27,.3,.145],[sign*.35,-.1,.19],[sign*.36,-length*.7,.17]],.022,hairLight);}
 }
 hairstyles.ponytail.children.slice(0,13).forEach(o=>o.visible=false);
 ellipsoid(hairstyles.ponytail,hair,0,.13,-.36,.18,.2,.15);
 for(let i=0;i<7;i++)lock(hairstyles.ponytail,[[0,.14,-.34],[(i-3)*.075,-.3,-.48],[(i-3)*.085,-.9,-.4],[(i-3)*.045,-1.5,-.19]],.085);
 ellipsoid(hairstyles.ponytail,accent,0,.12,-.41,.2,.035,.13);
 // Curtain bangs leave the brows and eyes readable.
 for(const sign of [-1,1])for(let i=0;i<3;i++){
  lock(head,[[sign*(.025+i*.055),.44,.09],[sign*(.1+i*.055),.31,.23],[sign*(.18+i*.055),.14-i*.035,.27]],.063);
 }
 // A tiny nose projects beyond the face instead of a flat painted head.
 ellipsoid(head,skin,0,-.075,.283,.028,.047,.032);
 let eyeColor='';
 function faceTexture(eye:string,closed=false){
  const canvas=document.createElement('canvas');canvas.width=512;canvas.height=512;const c=canvas.getContext('2d')!;
  for(const side of [-1,1]){const x=256+side*113,y=219;
   const blush=c.createRadialGradient(x,y+76,3,x,y+76,55);blush.addColorStop(0,'#ed9ba770');blush.addColorStop(1,'#ed9ba700');c.fillStyle=blush;c.fillRect(x-58,y+20,116,116);
   c.strokeStyle='#352738';c.lineCap='round';c.lineWidth=8;c.beginPath();c.moveTo(x-51,y-57);c.quadraticCurveTo(x,y-77,x+48,y-58);c.stroke();
   if(closed){c.lineWidth=9;c.beginPath();c.moveTo(x-58,y);c.quadraticCurveTo(x,y+24,x+58,y-3);c.stroke();continue;}
   c.save();c.beginPath();c.moveTo(x-63,y);c.bezierCurveTo(x-28,y-65,x+43,y-57,x+64,y+3);c.bezierCurveTo(x+26,y+45,x-35,y+42,x-63,y);c.closePath();c.fillStyle='#fffaf7';c.fill();c.clip();
   const iris=c.createRadialGradient(x,y-12,3,x,y+2,44);iris.addColorStop(0,'#30213c');iris.addColorStop(.45,eye);iris.addColorStop(.85,eye);iris.addColorStop(1,'#251e35');c.fillStyle=iris;c.beginPath();c.ellipse(x,y,36,47,0,0,Math.PI*2);c.fill();c.fillStyle='#211b30';c.beginPath();c.ellipse(x,y-5,13,27,0,0,Math.PI*2);c.fill();
   c.fillStyle='#ffffff';c.beginPath();c.ellipse(x-13,y-20,10,13,.4,0,Math.PI*2);c.fill();c.globalAlpha=.85;c.beginPath();c.arc(x+17,y+20,5,0,Math.PI*2);c.fill();c.restore();
   c.strokeStyle='#302433';c.lineWidth=10;c.beginPath();c.moveTo(x-64,y);c.bezierCurveTo(x-28,y-65,x+43,y-57,x+64,y+3);c.stroke();c.lineWidth=4;c.beginPath();c.moveTo(x-55,y+8);c.quadraticCurveTo(x,y+49,x+55,y+9);c.stroke();
   c.lineWidth=6;for(let j=0;j<3;j++){const xx=x+side*(47+j*6);c.beginPath();c.moveTo(xx,y-14+j*4);c.lineTo(xx+side*15,y-29+j*5);c.stroke();}
  }
  c.strokeStyle='#c87888';c.lineWidth=5;c.beginPath();c.moveTo(230,365);c.quadraticCurveTo(256,380,282,365);c.stroke();c.strokeStyle='#ffffff90';c.lineWidth=2;c.beginPath();c.moveTo(246,378);c.lineTo(267,378);c.stroke();
  const t=new T.CanvasTexture(canvas);t.colorSpace=T.SRGBColorSpace;return t;
 }
 let open=faceTexture('#73508d'),closed=faceTexture('#73508d',true);
 const faceMaterial=new T.MeshBasicMaterial({map:open,transparent:true,depthWrite:false});mesh(new T.PlaneGeometry(.61,.63),faceMaterial,head,0,-.026,.292);
 // Small earrings and hair pin.
 for(const sign of [-1,1]){const e=mesh(new T.TorusGeometry(.037,.008,6,16),metal,head,sign*.36,-.13,.035);e.rotation.y=sign*.3;}
 const pin=mesh(new T.BoxGeometry(.13,.018,.025),metal,head,.31,.17,.225);pin.rotation.z=-.25;
 const outfits={cardigan:new T.Group(),street:new T.Group(),dress:new T.Group()};Object.values(outfits).forEach(g=>body.add(g));
 function skirt(parent:T.Object3D,m:T.Material,bottom:number,top:number,radius:number){
  const vertices:number[]=[],indices:number[]=[];const n=96;
  for(let row=0;row<2;row++)for(let i=0;i<=n;i++){const a=i/n*Math.PI*2,r=(row?.31:radius)*(1+.035*Math.cos(a*16));vertices.push(Math.cos(a)*r,row?top:bottom,Math.sin(a)*r*.7);}
  for(let i=0;i<n;i++){const a=i,b=i+1,c=i+n+1,d=c+1;indices.push(a,b,c,b,d,c);}
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(vertices,3));g.setIndex(indices);g.computeVertexNormals();const o=mesh(g,m,parent);(m as T.MeshToonMaterial).side=T.DoubleSide;return o;
 }
 profile(outfits.cardigan,cloth,[[.32,2.64],[.27,3.04],[.35,3.6],[.43,3.77],[.23,3.91]]);
 profile(outfits.street,cloth,[[.36,2.62],[.37,3.02],[.42,3.6],[.47,3.77],[.22,3.92]]);
 profile(outfits.dress,cloth,[[.31,2.63],[.265,3.04],[.35,3.6],[.41,3.77],[.2,3.92]]);
 skirt(outfits.cardigan,dark,1.93,2.69,.55);skirt(outfits.dress,cloth,1.49,2.69,.64);
 for(const [name,g] of Object.entries(outfits)){
  const collar=mesh(new T.TorusGeometry(.19,.035,6,24),accent,g,0,3.89,0);collar.rotation.x=Math.PI/2;collar.scale.z=.75;
  if(name!=='street')for(const sign of [-1,1]){const lapel=mesh(new T.BoxGeometry(.11,.24,.03),accent,g,sign*.092,3.72,.203);lapel.rotation.z=sign*-.36;}
  tube(g,accent,[[0,3.7,.237],[0,3.3,.243],[0,2.7,.215]],.014);
  for(let i=0;i<4;i++)ellipsoid(g,metal,0,3.51-i*.21,.25,.021,.021,.014);
  const belt=mesh(new T.TorusGeometry(.3,.027,7,32),name==='dress'?metal:accent,g,0,2.7,0);belt.rotation.x=Math.PI/2;belt.scale.y=.7;
 }
 const shoulders:T.Group[]=[],hips:T.Group[]=[],knees:T.Group[]=[],sleeves:T.Mesh[]=[],pants:T.Mesh[]=[];
 for(const sign of [-1,1]){
  const arm=new T.Group();arm.position.set(sign*.45,3.73,0);body.add(arm);shoulders.push(arm);
  const sleeve=limb(arm,cloth,.8,.14,0,-.34,0);sleeve.scale.z=.85;sleeves.push(sleeve);
  const elbow=new T.Group();elbow.position.y=-.73;arm.add(elbow);limb(elbow,cloth,.61,.107,0,-.22,0);
  const cuff=mesh(new T.CylinderGeometry(.11,.11,.09,16),accent,elbow,0,-.5,0);cuff.scale.z=.85;
  ellipsoid(elbow,skin,0,-.63,.01,.071,.106,.052);
  for(let finger=0;finger<4;finger++){const digit=limb(elbow,skin,.1-Math.abs(finger-1.5)*.012,.016,(finger-1.5)*.031,-.747,.013);digit.rotation.z=-(finger-1.5)*.045;}
  const thumb=limb(elbow,skin,.09,.022,sign*.072,-.646,.025);thumb.rotation.z=sign*.55;
  const hip=new T.Group();hip.position.set(sign*.185,2.54,0);body.add(hip);hips.push(hip);
  limb(hip,skin,1.23,.142,0,-.54,0);const thigh=limb(hip,dark,1.24,.175,0,-.54,0);pants.push(thigh);
  const knee=new T.Group();knee.position.y=-1.14;hip.add(knee);knees.push(knee);limb(knee,skin,1.13,.105,0,-.49,0);
  const pant=limb(knee,dark,1.15,.17,0,-.49,0);pants.push(pant);
  limb(knee,accent,.43,.113,0,-.86,0);
  ellipsoid(knee,shoe,0,-1.18,.09,.14,.13,.255);ellipsoid(knee,dark,0,-1.32,.095,.145,.035,.26);
 }
 const materials=new Set<T.Material>();const geometries=new Set<T.BufferGeometry>();root.traverse(o=>{if(o instanceof T.Mesh){geometries.add(o.geometry);(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>materials.add(m));}});
 return {root,apply(s){skin.color.set(s.skin);hair.color.set(s.hair);hairLight.color.set(s.hair).lerp(new T.Color('#e4c7ef'),.18);cloth.color.set(s.clothing);accent.color.set(s.accent);dark.color.set(s.outfit==='street'?'#454353':'#34314d');
  Object.entries(outfits).forEach(([id,g])=>g.visible=id===s.outfit);Object.entries(hairstyles).forEach(([id,g])=>g.visible=id===s.hairStyle);pants.forEach(p=>p.visible=s.outfit==='street');sleeves.forEach(p=>p.scale.x=s.outfit==='street'?1.2:1);
  if(eyeColor!==s.eyes){eyeColor=s.eyes;open.dispose();closed.dispose();open=faceTexture(s.eyes);closed=faceTexture(s.eyes,true);faceMaterial.map=open;faceMaterial.needsUpdate=true;}
 },animate(time,walk,action,reduced){
  const t=reduced?0:time,phase=t*8,walking=walk&&!reduced;body.position.y=Math.sin(t*1.9)*.014+(walking?Math.abs(Math.sin(phase))*.028:0);head.rotation.z=Math.sin(t*.7)*.018;
  faceMaterial.map=!reduced&&t%5.1>.01&&t%5.1<.16?closed:open;
  hips.forEach((h,i)=>h.rotation.x=walking?Math.sin(phase+i*Math.PI)*.38:0);knees.forEach((k,i)=>k.rotation.x=walking?Math.max(0,-Math.sin(phase+i*Math.PI))*.42:0);
  shoulders.forEach((a,i)=>{a.rotation.x=walking?Math.sin(phase+i*Math.PI+Math.PI)*.3:Math.sin(t*1.2+i)*.025;a.rotation.z=(i===0?-.08:.08);});
  if(action==='wave'){shoulders[1].rotation.z=-2.5+Math.sin(t*12)*.15;shoulders[1].rotation.x=.2;head.rotation.z=-.05;}
  if(action==='dance'&&!reduced){body.rotation.z=Math.sin(t*4)*.055;shoulders[0].rotation.z=-.7+Math.sin(t*4)*.3;shoulders[1].rotation.z=.7+Math.sin(t*4)*.3;}else body.rotation.z=0;
 },dispose(){geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());open.dispose();closed.dispose();gradient.dispose();}};
}
