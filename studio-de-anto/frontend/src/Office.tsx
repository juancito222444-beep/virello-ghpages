import {useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {MeshKit,buildRoom,buildActor,type ActorRig} from './scene/assets';
import {GridNavigation,CorridorReservations,type Cell,cellKey} from './scene/navigation';
import {buildExpansion,type OfficeExpansion,type ExpansionModule} from './scene/expansions';

export type Agent={id:string;name:string;role:string;color:string;model:string;instructions:string;tools:string[]};
type Props={agents:Agent[];selected:string;onSelect:(id:string)=>void;states:Record<string,string>;reduced:boolean;zoom:number;reset:number;expansions?:OfficeExpansion[];onOpenRoom?:(destination:string)=>void};
type Actor=ActorRig&{cell:Cell;path:Cell[];step:Cell|null;target:Cell|null;pending:Cell|null;label:HTMLButtonElement;status:string;waveUntil:number;walkPhase:number;wait:number;home:Cell;meeting:Cell};
type Action='desk'|'meeting'|'wave'|'stop';
const isWorking=(state:string)=>['En ejecución','En corrección'].includes(state);
const statusColor=(state:string)=>state==='Fallido'?'#d66a76':['Espera aprobación','Requiere información','Espera revisión'].includes(state)?'#d8a54d':isWorking(state)?'#56aa8b':state==='Interrumpido'||state==='Cancelado'?'#a79da8':'#9d87c3';
const busyText=(state:string)=>isWorking(state)?'Trabajando':state;
const buttonStyle={background:'#fffc',border:'1px solid #e7dff0',borderRadius:7,padding:'6px 9px',fontSize:9,color:'#816694',boxShadow:'0 2px 8px #58426709',cursor:'pointer'};

export default function Office(props:Props){
 const host=useRef<HTMLDivElement>(null),stage=useRef<HTMLDivElement>(null),latest=useRef(props),perform=useRef<(a:Action)=>void>(()=>{}),syncExpansions=useRef<()=>void>(()=>{});
 const[notice,setNotice]=useState('Selecciona un agente y haz clic en una zona libre para moverlo.'),[error,setError]=useState('');
 latest.current=props;
 useEffect(()=>{
  const element=stage.current!,outer=host.current!;let renderer:THREE.WebGLRenderer;
  const deviceMemory=(navigator as Navigator&{deviceMemory?:number}).deviceMemory;
  const lowDevice=(navigator.hardwareConcurrency>0&&navigator.hardwareConcurrency<=4)||(deviceMemory!==undefined&&deviceMemory<=4);
  try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:lowDevice||latest.current.reduced?'low-power':'high-performance'});}catch{
   setError('Tu navegador no pudo iniciar WebGL. Prueba Chrome o Edge con aceleración gráfica; puedes seleccionar el equipo desde la lista inferior.');return;
  }
  setError('');outer.dataset.rendererReady='false';outer.dataset.sceneVersion='3d';
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,lowDevice||latest.current.reduced?1.15:1.6));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.22;renderer.setClearColor('#f5f2f8',0);element.appendChild(renderer.domElement);renderer.domElement.setAttribute('aria-label','Oficina 3D interactiva. Arrastra para girar, rueda para acercar, clic en agente para seleccionar o en suelo para mover.');
  const scene=new THREE.Scene(),kit=new MeshKit(),nav=new GridNavigation(24,20),corridors=new CorridorReservations(),room=new THREE.Group();room.position.set(-12,0,-10);scene.add(room);
  const hemi=new THREE.HemisphereLight('#fff5e9','#a4a2bc',2.7);scene.add(hemi);const sun=new THREE.DirectionalLight('#fff6df',3.2);sun.position.set(-8,24,14);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-20;sun.shadow.camera.right=20;sun.shadow.camera.top=20;sun.shadow.camera.bottom=-20;sun.shadow.camera.near=.1;sun.shadow.camera.far=65;sun.shadow.normalBias=.035;sun.shadow.bias=-.0001;sun.shadow.radius=4;scene.add(sun);
  const fill=new THREE.DirectionalLight('#d9d9ff',1.6);fill.position.set(16,12,-10);scene.add(fill);
  // A receiving plane outside the diorama gives the model a grounded soft silhouette.
  const ground=new THREE.Mesh(new THREE.PlaneGeometry(140,140),new THREE.ShadowMaterial({color:'#9b87ae',opacity:.14}));ground.rotation.x=-Math.PI/2;ground.position.y=-.5;ground.receiveShadow=true;scene.add(ground);
  const {homes,meeting}=buildRoom(room,kit,nav);
  const camera=new THREE.OrthographicCamera(-25,25,14,-14,.1,180);camera.position.set(29,28,35);
  const controls=new OrbitControls(camera,renderer.domElement);controls.target.set(0,.45,.2);controls.enableDamping=true;controls.dampingFactor=.075;controls.enablePan=true;controls.screenSpacePanning=true;controls.minPolarAngle=Math.PI*.15;controls.maxPolarAngle=Math.PI*.44;controls.minZoom=.7;controls.maxZoom=3;controls.rotateSpeed=.55;controls.zoomSpeed=.75;controls.panSpeed=.7;
  controls.mouseButtons={LEFT:THREE.MOUSE.ROTATE,MIDDLE:THREE.MOUSE.DOLLY,RIGHT:THREE.MOUSE.PAN};controls.touches={ONE:THREE.TOUCH.ROTATE,TWO:THREE.TOUCH.DOLLY_PAN};controls.update();controls.saveState();
  const labels=document.createElement('div');labels.style.cssText='position:absolute;inset:0;overflow:hidden;pointer-events:none;';element.appendChild(labels);
  const modules=new Map<string,{module:ExpansionModule;label:HTMLButtonElement}>();let expansionSignature='';
  const sceneBounds=new THREE.Box3(new THREE.Vector3(-12,-.5,-10),new THREE.Vector3(12,4.5,10));
  const actors:Actor[]=latest.current.agents.map((a,i)=>{
   const rig=buildActor(kit,a,i);const cell=nav.nearestFree(homes[i],a.id)||homes[i];nav.register(a.id,cell);rig.root.position.set(cell[0]+.5,.14,cell[1]+.5);rig.root.rotation.y=.7;room.add(rig.root);
   rig.root.traverse(object=>{if(object instanceof THREE.Mesh)object.userData.agentId=a.id;});rig.ring.userData.ignorePick=true;
   const label=document.createElement('button');label.dataset.agentId=a.id;label.dataset.agentLabel='true';label.setAttribute('aria-label',`${a.name} · ${a.role} · Disponible`);label.style.cssText='position:absolute;left:0;top:0;transform:translate(-50%,-100%);display:flex;align-items:center;gap:5px;white-space:nowrap;border:1px solid #e9dff2;background:#fffffff0;border-radius:7px;padding:4px 7px;box-shadow:0 2px 8px #56406c12;font:600 9px system-ui;color:#6a507e;cursor:pointer;pointer-events:auto;';
   const dot=document.createElement('i');dot.style.cssText=`width:5px;height:5px;flex-shrink:0;border-radius:50%;background:${a.color}`;const name=document.createElement('span');name.textContent=a.name;const status=document.createElement('small');status.style.cssText='font-weight:400;font-size:7px;color:#9a85aa';status.textContent='Disponible';label.append(dot,name,status);label.addEventListener('click',e=>{e.stopPropagation();latest.current.onSelect(a.id);});labels.appendChild(label);
   return {...rig,cell,path:[],step:null,target:null,pending:null,label,status:'Disponible',waveUntil:0,walkPhase:i,wait:0,home:homes[i],meeting:meeting[i]};
  });
  const routeLayer=new THREE.Group();room.add(routeLayer);const routeMaterial=new THREE.MeshBasicMaterial({color:'#a580d4',transparent:true,opacity:.48});const routeGeometry=new THREE.RingGeometry(.09,.14,12);const routeDots:THREE.Mesh[]=[];
  function showRoute(actor?:Actor){
   while(routeLayer.children.length)routeLayer.remove(routeLayer.children[0]);routeDots.length=0;
   if(!actor)return;
   for(const cell of actor.path){const dot=new THREE.Mesh(routeGeometry,routeMaterial);dot.rotation.x=-Math.PI/2;dot.position.set(cell[0]+.5,.153,cell[1]+.5);dot.userData.ignorePick=true;routeLayer.add(dot);routeDots.push(dot);}
  }
  function tell(message:string){setNotice(message);}
  function setDestination(actor:Actor,target:Cell,manual=false){
   if(manual&&isWorking(actor.status)){tell(`${actor.agent.name} está trabajando. El movimiento manual estará disponible cuando termine.`);return;}
   if(nav.isBlocked(target)){if(manual)tell('Esa zona contiene un mueble o una división. Elige suelo libre.');return;}
   // Never abort a reserved step halfway: keep both cells occupied until arrival.
   if(actor.step){actor.pending=target;return;}
   if(!nav.isFree(target,actor.agent.id)){
    corridors.release(actor.agent.id);actor.path=[];actor.target=target;actor.wait=0;
    if(latest.current.selected===actor.agent.id)showRoute(actor);
    if(manual)tell(`${actor.agent.name} espera a que se libere el destino. Puedes elegir otro punto para cambiar la orden.`);
    return;
   }
   const path=nav.path(actor.agent.id,target);
   if(path.length===0&&cellKey(target)!==cellKey(actor.cell)){
    corridors.release(actor.agent.id);actor.path=[];actor.target=target;actor.wait=0;
    if(manual)tell(`${actor.agent.name} espera a que quede libre el paso. Se moverá al destino cuando haya una ruta segura.`);
    return;
   }
   if(path.length&&!corridors.claim(actor.agent.id,[actor.cell,...path])){
    corridors.release(actor.agent.id);actor.path=[];actor.target=target;actor.wait=0;
    if(manual)tell(`${actor.agent.name} espera su turno en el pasillo compartido. La orden de movimiento está conservada.`);
    return;
   }
   if(!path.length)corridors.release(actor.agent.id);
   actor.path=path;actor.target=target;actor.wait=0;if(latest.current.reduced&&path.length){tell('Movimiento reducido: traslado sin animación continua; las reservas siguen evitando colisiones.');}
   if(latest.current.selected===actor.agent.id)showRoute(actor);
   if(manual)tell(path.length?`${actor.agent.name} se dirige al punto elegido. Esto solo mueve al personaje; las tareas se gestionan en el tablero.`:`${actor.agent.name} ya está en ese lugar.`);
  }
  perform.current=(action:Action)=>{
   const actor=actors.find(a=>a.agent.id===latest.current.selected);if(!actor)return;
   if(action==='stop'){
    actor.pending=null;actor.target=actor.step||actor.cell;actor.path=actor.step?[actor.step]:[];actor.waveUntil=0;
    if(latest.current.selected===actor.agent.id)showRoute(actor);
    tell(`${actor.agent.name} detiene el desplazamiento al alcanzar una posición segura. Las tareas de IA se gestionan en el tablero.`);
    return;
   }
   if(action==='wave'){
    if(isWorking(actor.status)){tell(`${actor.agent.name} está trabajando. Puedes saludar cuando termine.`);return;}
    actor.root.rotation.y=.7;actor.waveUntil=performance.now()/1000+2.8;tell(`${actor.agent.name} te saluda. Es un gesto visual, no una respuesta de IA.`);return;
   }
   setDestination(actor,action==='desk'?actor.home:actor.meeting,true);
  };
  const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();let down={x:0,y:0,time:0};
  const onDown=(event:PointerEvent)=>{if(event.button===0)down={x:event.clientX,y:event.clientY,time:performance.now()};};
  const onUp=(event:PointerEvent)=>{
   if(event.button!==0||Math.hypot(event.clientX-down.x,event.clientY-down.y)>5||performance.now()-down.time>700)return;
   const rect=renderer.domElement.getBoundingClientRect();pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,camera);
   const intersections=raycaster.intersectObjects(room.children,true).filter(hit=>{const object=hit.object as THREE.Mesh;const mat=object.material as THREE.Material|undefined;return !object.userData.ignorePick&&!(mat?.transparent&&mat.opacity<.5);});
   const first=intersections[0];if(!first)return;
   if(first.object.userData.officeRoom){latest.current.onOpenRoom?.(first.object.userData.destination);tell('Este espacio abre sus herramientas. Los agentes se desplazan dentro de la oficina principal.');return;}
   if(first.object.userData.agentId){latest.current.onSelect(first.object.userData.agentId);return;}
   const actor=actors.find(a=>a.agent.id===latest.current.selected);if(!actor)return;
   if(!first.object.userData.walkable){tell('Selecciona un personaje o haz clic en una zona libre del suelo.');return;}
   const local=room.worldToLocal(first.point.clone());setDestination(actor,[Math.floor(local.x),Math.floor(local.z)],true);
  };
  renderer.domElement.addEventListener('pointerdown',onDown);renderer.domElement.addEventListener('pointerup',onUp);
  const contextLost=(event:Event)=>{event.preventDefault();setError('Se perdió el contexto gráfico. Recarga la vista de oficina para recuperar la escena; tus datos siguen guardados.');};renderer.domElement.addEventListener('webglcontextlost',contextLost);
  let width=1,height=1,lastReset=latest.current.reset,lastZoom=latest.current.zoom,lastSelected=latest.current.selected,frame=0,nextShadow=0,wasDynamic=false,previous=performance.now()/1000,lastFrame=0,alive=true;
  const visibleInViewport=()=>{const rect=element.getBoundingClientRect();return rect.width>0&&rect.height>0&&rect.bottom>0&&rect.right>0&&rect.top<innerHeight&&rect.left<innerWidth;};
  let inViewport=visibleInViewport();
  const pixelRatio=()=>Math.min(window.devicePixelRatio,lowDevice||latest.current.reduced?1.15:1.6);
  function resize(){
   width=Math.max(1,element.clientWidth);height=Math.max(1,element.clientHeight);const aspect=width/height;
   camera.updateMatrixWorld();let horizontal=0,vertical=0;
   for(const x of [sceneBounds.min.x,sceneBounds.max.x])for(const y of [sceneBounds.min.y,sceneBounds.max.y])for(const z of [sceneBounds.min.z,sceneBounds.max.z]){
    const point=new THREE.Vector3(x,y,z).applyMatrix4(camera.matrixWorldInverse);horizontal=Math.max(horizontal,Math.abs(point.x));vertical=Math.max(vertical,Math.abs(point.y));
   }
   const span=modules.size?Math.max(21.5,38/aspect,vertical*2+7,(horizontal*2+8)/aspect):Math.max(21.5,38/aspect);
   camera.left=-span*aspect/2;camera.right=span*aspect/2;camera.top=span/2;camera.bottom=-span/2;camera.updateProjectionMatrix();renderer.setPixelRatio(pixelRatio());renderer.setSize(width,height);
  }
  const observer=new ResizeObserver(resize);observer.observe(element);resize();
  const projected=new THREE.Vector3(),worldPosition=new THREE.Vector3(),labelOffset=new THREE.Vector3(0,2.75,0);
  function syncVisibility(){
   if(!alive)return;
   const paused=document.hidden||!inViewport;
   outer.dataset.renderState=document.hidden?'hidden':!inViewport?'offscreen':'active';
   if(paused){cancelAnimationFrame(frame);frame=0;return;}
   if(!frame){
    // Resume this scene instead of rebuilding it. Hidden time must not become
    // walking distance, consume reservations or produce a large damping step.
    previous=performance.now()/1000;lastFrame=0;frame=requestAnimationFrame(animate);
   }
  }
  const onVisibility=()=>syncVisibility();
  const onViewportChange=()=>{inViewport=visibleInViewport();syncVisibility();};
  const intersection=typeof IntersectionObserver==='undefined'?null:new IntersectionObserver(entries=>{
   const entry=entries[entries.length-1];if(!entry)return;
   inViewport=entry.isIntersecting&&entry.intersectionRatio>0;syncVisibility();
  });
  intersection?.observe(element);document.addEventListener('visibilitychange',onVisibility);
  // Older WebGL-capable browsers without IntersectionObserver still pause when
  // the scene is scrolled away; neither path polls the invisible scene.
  if(!intersection){window.addEventListener('scroll',onViewportChange,{passive:true,capture:true});window.addEventListener('resize',onViewportChange);}
  syncExpansions.current=()=>{
   const requested=latest.current.expansions||[],signature=JSON.stringify(requested.map(expansion=>[expansion.id,expansion.name,expansion.destination]));
   if(signature===expansionSignature)return;expansionSignature=signature;
   // A separate MeshKit per module lets repeated authorizations/retractions
   // release GPU resources without rebuilding actors or their reserved routes.
   for(const {module,label} of modules.values()){room.remove(module.root);module.dispose();label.remove();}modules.clear();
   sceneBounds.set(new THREE.Vector3(-12,-.5,-10),new THREE.Vector3(12,4.5,10));
   for(const expansion of requested){
    if(modules.has(expansion.id))continue;
    const module=buildExpansion(expansion);if(!module)continue;room.add(module.root);
    const label=document.createElement('button');label.dataset.officeRoom=expansion.id;label.setAttribute('aria-label','Abrir '+expansion.name);label.textContent=expansion.name+' · Abrir';
    label.className='office-room-label';label.style.cssText='position:absolute;left:0;top:0;transform:translate(-50%,-100%);white-space:nowrap;border:1px solid #bda5d4;border-radius:8px;background:#fffcf8f5;padding:7px 9px;font:600 10px system-ui;color:#65477d;box-shadow:0 3px 10px #58426718;pointer-events:auto;cursor:pointer;z-index:3;';
    label.addEventListener('click',event=>{event.stopPropagation();latest.current.onOpenRoom?.(expansion.destination);});labels.appendChild(label);modules.set(expansion.id,{module,label});
    const bounds=module.bounds.clone().translate(room.position);sceneBounds.union(bounds);
   }
   const center=sceneBounds.getCenter(new THREE.Vector3()),offset=camera.position.clone().sub(controls.target);controls.target.set(center.x,.45,center.z);camera.position.copy(controls.target).add(offset);controls.update();controls.saveState();resize();renderer.shadowMap.needsUpdate=true;
   outer.dataset.expansionCount=String(modules.size);outer.dataset.sceneBounds=JSON.stringify([sceneBounds.min.x,sceneBounds.max.x,sceneBounds.min.z,sceneBounds.max.z]);
  };
  function animate(ms:number){
   frame=0;if(!alive)return;
   if(document.hidden||!inViewport){syncVisibility();return;}
   frame=requestAnimationFrame(animate);const time=ms/1000,p=latest.current;
   if((lowDevice||p.reduced)&&ms-lastFrame<1000/30-1)return;
   lastFrame=ms;const dt=Math.min(.5,Math.max(0,time-previous));previous=time;
   if(renderer.getPixelRatio()!==pixelRatio())renderer.setPixelRatio(pixelRatio());
   controls.enableDamping=!p.reduced;
   if(p.reset!==lastReset){controls.reset();camera.zoom=p.zoom;camera.updateProjectionMatrix();lastReset=p.reset;lastZoom=p.zoom;}
   if(p.zoom!==lastZoom){camera.zoom=p.zoom;camera.updateProjectionMatrix();lastZoom=p.zoom;}
   if(lastSelected!==p.selected){lastSelected=p.selected;showRoute(actors.find(a=>a.agent.id===p.selected));}
   for(const actor of actors){
    const current=p.states[actor.agent.id]||'Disponible';
    if(current!==actor.status){actor.status=current;const col=statusColor(current);(actor.orb.material as THREE.MeshStandardMaterial).color.set(col);(actor.orb.material as THREE.MeshStandardMaterial).emissive.set(col);(actor.label.firstChild as HTMLElement).style.background=col;(actor.label.lastChild as HTMLElement).textContent=busyText(current);actor.label.setAttribute('aria-label',`${actor.agent.name} · ${actor.agent.role} · ${current}`);if(isWorking(current))setDestination(actor,actor.home);}
    const selected=actor.agent.id===p.selected;actor.ring.visible=selected;actor.label.style.borderColor=selected?'#bb93e2':'#e9dff2';actor.label.style.zIndex=selected?'4':'2';
    actor.wait+=dt;
    if(!actor.step&&actor.pending){const target=actor.pending;actor.pending=null;setDestination(actor,target);}
    // A temporary reservation can make replanning return no path. Keep retrying
    // the original destination after the other character has cleared the way.
    if(!actor.step&&!actor.path.length&&actor.target&&cellKey(actor.cell)!==cellKey(actor.target)&&actor.wait>.5){
     const nextPath=nav.path(actor.agent.id,actor.target);
     if(nextPath.length&&corridors.claim(actor.agent.id,[actor.cell,...nextPath])){actor.path=nextPath;actor.wait=0;if(selected)showRoute(actor);}
    }
    // Consume distance across waypoints. A slow frame must not limit walking
    // to a single grid cell, and each crossed cell still needs a reservation.
    let distanceBudget=p.reduced?Number.POSITIVE_INFINITY:dt*2.2;
    let distanceMoved=0,steps=0;
    while(distanceBudget>0.00001&&steps++<64){
     if(!actor.step){
      if(!actor.path.length)break;
      const next=actor.path[0];
      if(nav.reserveNext(actor.agent.id,next)){actor.step=next;actor.wait=0;}
      else{
       if(actor.wait>1&&actor.target){const retry=nav.path(actor.agent.id,actor.target);actor.path=retry.length&&corridors.claim(actor.agent.id,[actor.cell,...retry])?retry:[];if(!actor.path.length)corridors.release(actor.agent.id);actor.wait=0;if(selected)showRoute(actor);}
       break;
      }
     }
     const next=actor.step;
     const dx=next[0]+.5-actor.root.position.x,dz=next[1]+.5-actor.root.position.z,distance=Math.hypot(dx,dz);
     const amount=Math.min(distance,distanceBudget);
     const desired=Math.atan2(dx,dz);const angle=Math.atan2(Math.sin(desired-actor.root.rotation.y),Math.cos(desired-actor.root.rotation.y));actor.root.rotation.y+=angle*Math.min(1,dt*12);
     if(distance<=amount+.0001){
      actor.root.position.x=next[0]+.5;actor.root.position.z=next[1]+.5;
      actor.cell=nav.arrive(actor.agent.id)!;actor.step=null;actor.path.shift();
      if(selected)showRoute(actor);
     }else{
      actor.root.position.x+=dx/distance*amount;actor.root.position.z+=dz/distance*amount;
     }
     distanceMoved+=amount;distanceBudget-=amount;
     if(actor.step)break;
     if(actor.pending){const target=actor.pending;actor.pending=null;setDestination(actor,target);}
    }
    if(!actor.step&&!actor.path.length&&actor.target&&cellKey(actor.cell)===cellKey(actor.target))corridors.release(actor.agent.id);
    const walking=distanceMoved>0.00001||!!actor.step;
    actor.walkPhase+=walking?distanceMoved*4.5:dt*1.2;const phase=actor.walkPhase;
    const active=isWorking(actor.status),wave=time<actor.waveUntil&&!active&&!walking;
    const stride=walking&&!p.reduced?Math.sin(phase)*.53:0;
    actor.legs[0].rotation.x=stride;actor.legs[1].rotation.x=-stride;
    actor.body.position.y=walking&&!p.reduced?Math.abs(Math.sin(phase))*.045:active&&!p.reduced?Math.sin(time*5)*.008:0;
    actor.arms[0].rotation.x=active&&!walking?-.92+(p.reduced?0:Math.sin(time*9)*.08):-stride*.7;
    actor.arms[1].rotation.x=active&&!walking?-.88+(p.reduced?0:Math.sin(time*9+1)*.08):stride*.7;
    actor.arms[0].rotation.z=.10;actor.arms[1].rotation.z=wave?-2.4+(p.reduced?0:Math.sin(time*11)*.23):-.10;
    actor.head.rotation.y=!walking&&!p.reduced?Math.sin(time*.7+actor.walkPhase)*.055:0;actor.head.rotation.z=actor.status==='Fallido'?.13:0;
    actor.orb.scale.setScalar(active&&!p.reduced?1+Math.sin(time*4)*.15:1);
    if(!walking){const desired=active?Math.PI:Math.atan2(camera.position.x-(actor.root.position.x-12),camera.position.z-(actor.root.position.z-10));actor.root.rotation.y+=Math.atan2(Math.sin(desired-actor.root.rotation.y),Math.cos(desired-actor.root.rotation.y))*Math.min(1,dt*6);}
    actor.label.dataset.walking=String(walking);actor.label.dataset.waiting=String(!walking&&!!actor.target&&cellKey(actor.cell)!==cellKey(actor.target));actor.label.dataset.remaining=String(actor.path.length);actor.label.dataset.target=actor.target?.join(',')||'';actor.label.dataset.gesture=wave?'saludando':'ninguno';actor.label.dataset.worldX=actor.root.position.x.toFixed(3);actor.label.dataset.worldZ=actor.root.position.z.toFixed(3);actor.label.dataset.agentState=current;
    actor.root.getWorldPosition(worldPosition);projected.copy(worldPosition).add(labelOffset).project(camera);
    const x=(projected.x*.5+.5)*width,y=(-projected.y*.5+.5)*height;
    actor.label.style.left=`${x}px`;actor.label.style.top=`${y}px`;actor.label.style.display=projected.z<-1||projected.z>1||x<0||x>width||y<0||y>height||(width<500&&modules.size>0&&!selected)?'none':'flex';
   }
   controls.update();
   let roomIndex=0;
   for(const {module,label} of modules.values()){
    projected.copy(module.anchor).add(room.position).project(camera);const x=(projected.x*.5+.5)*width,y=(-projected.y*.5+.5)*height;
    const compact=width<500;
    label.style.left=compact?`${width*(roomIndex%2===0?.25:.75)}px`:`${x}px`;label.style.top=compact?`${height-126+Math.floor(roomIndex/2)*34}px`:`${y}px`;
    label.style.fontSize=compact?'9px':'10px';label.style.padding=compact?'7px 5px':'7px 9px';
    label.style.display=compact?'block':projected.z<-1||projected.z>1||x<0||x>width||y<0||y>height?'none':'block';roomIndex++;
   }
   const dynamic=actors.some(a=>a.step||a.path.length||time<a.waveUntil||isWorking(a.status));if(time>=nextShadow&&(dynamic||wasDynamic)){renderer.shadowMap.needsUpdate=true;nextShadow=time+.12;}wasDynamic=dynamic;renderer.render(scene,camera);if(outer.dataset.rendererReady!=='true')outer.dataset.rendererReady='true';
  }
  syncExpansions.current();
  syncVisibility();
  return()=>{
   alive=false;cancelAnimationFrame(frame);observer.disconnect();intersection?.disconnect();document.removeEventListener('visibilitychange',onVisibility);window.removeEventListener('scroll',onViewportChange,true);window.removeEventListener('resize',onViewportChange);perform.current=()=>{};syncExpansions.current=()=>{};for(const {module,label} of modules.values()){module.dispose();label.remove();}modules.clear();renderer.domElement.removeEventListener('pointerdown',onDown);renderer.domElement.removeEventListener('pointerup',onUp);renderer.domElement.removeEventListener('webglcontextlost',contextLost);controls.dispose();
   for(const actor of actors)for(const material of actor.root.userData.extraMaterials||[])material.dispose();for(const material of room.userData.extraMaterials||[])material.dispose();routeGeometry.dispose();routeMaterial.dispose();ground.geometry.dispose();(ground.material as THREE.Material).dispose();kit.dispose();renderer.dispose();renderer.forceContextLoss();labels.remove();renderer.domElement.remove();outer.dataset.rendererReady='false';
  };
 },[]);
 useEffect(()=>{syncExpansions.current();},[props.expansions]);
 const selectedAgent=props.agents.find(a=>a.id===props.selected),state=props.states[props.selected]||'Disponible';
 return <div ref={host} className="office-canvas" data-renderer-ready="false" aria-label="Oficina 3D interactiva de seis agentes">
  <div ref={stage} style={{position:'absolute',inset:0}}/>
  {error?<div role="alert" style={{position:'absolute',inset:'30% 8% auto',background:'#fff9',padding:18,borderRadius:12,fontSize:12,color:'#82668f',lineHeight:1.7}}>{error}</div>:<div className="scene-3d-actions" style={{position:'absolute',top:61,right:12,zIndex:5,display:'flex',flexDirection:'column',alignItems:'flex-end',gap:5,pointerEvents:'auto'}}>
   <div style={{fontSize:8,color:'#9a81ad',background:'#ffffffc9',borderRadius:5,padding:'4px 7px'}}>{selectedAgent?.name} · {state}</div>
   <div style={{display:'flex',gap:4}}><button style={buttonStyle} onClick={()=>perform.current('desk')} title="Mover visualmente al escritorio" disabled={isWorking(state)}>Escritorio</button><button style={buttonStyle} onClick={()=>perform.current('meeting')} title="Mover visualmente a la sala de reunión" disabled={isWorking(state)}>Reunión</button><button style={buttonStyle} onClick={()=>perform.current('wave')} title="Animación visual de saludo" disabled={isWorking(state)}>Saludar</button><button style={buttonStyle} onClick={()=>perform.current('stop')} title="Detener desplazamiento visual" disabled={isWorking(state)}>Detener</button></div>
  </div>}
  <p className="scene-3d-feedback" role="status" aria-live="polite" style={{position:'absolute',left:12,right:170,bottom:47,fontSize:8,lineHeight:1.5,color:'#96809f',padding:'5px 7px',margin:0,borderRadius:5,background:'#fbf8fdca',pointerEvents:'none',maxWidth:430}}>{notice}</p>
 </div>;
}
