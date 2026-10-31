import {useEffect,useRef,useState} from 'react';
import * as T from 'three';
import {createAnime} from './model';
import type {AvatarSettings} from './settings';
export type ModelInfo={animations:string[];clothes:{id:string;name:string}[]};
type Props={settings:AvatarSettings;moving:boolean;action:string;data:ArrayBuffer|null;clip:string;hidden:string[];onReady:(info:ModelInfo)=>void;onError:(message:string)=>void};
function disposeObject(root:T.Object3D){const textures=new Set<T.Texture>(),materials=new Set<T.Material>(),geometries=new Set<T.BufferGeometry>();root.traverse(o=>{if(o instanceof T.Mesh){geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material]){materials.add(m);for(const value of Object.values(m))if(value instanceof T.Texture)textures.add(value);}}});textures.forEach(t=>{t.dispose();if(typeof t.image?.close==='function')t.image.close();});materials.forEach(m=>m.dispose());geometries.forEach(g=>g.dispose());}
export default function ModelCanvas(props:Props){
 const host=useRef<HTMLDivElement>(null),latest=useRef(props),[error,setError]=useState('');latest.current=props;
 useEffect(()=>{
  const element=host.current!;let renderer:T.WebGLRenderer;
  try{renderer=new T.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});}catch{setError('No se pudo iniciar 3D. Activa la aceleración gráfica en Chrome o Edge.');return;}
  setError('');element.dataset.ready='false';let alive=true,lost=false,inViewport=true,frame=0,last=0,elapsed=0,stableFrames=0,lastSettings:AvatarSettings|null=null,mixer:T.AnimationMixer|null=null,imported:T.Group|null=null,animation='';
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;renderer.setClearColor(0x000000,0);element.appendChild(renderer.domElement);renderer.domElement.setAttribute('aria-label','Personaje femenino adulto en 3D con ropa personalizable');
  const scene=new T.Scene(),camera=new T.PerspectiveCamera(35,1,.1,50);camera.position.set(0,2.6,8.8);camera.lookAt(0,2.5,0);
  scene.add(new T.HemisphereLight('#fff2ed','#70658e',1.05));const key=new T.DirectionalLight('#fff2e4',1.6);key.position.set(-3,5,5);scene.add(key);const rim=new T.DirectionalLight('#beb0ff',1.3);rim.position.set(3,4,-3);scene.add(rim);const fill=new T.DirectionalLight('#dfebff',.45);fill.position.set(3,2,4);scene.add(fill);
  const rig=createAnime();rig.apply(latest.current.settings);scene.add(rig.root);
  const clips=new Map<string,T.AnimationClip>();const importMeshes=new Map<string,T.Mesh>(),importClothColors=new Map<T.Material,{base:T.Color;material:T.Material}>(),baseMaterials=new Map<T.Mesh,T.Material[]>(),toonMaterials=new Map<T.Mesh,T.Material[]>(),sourceMaps=new Map<T.Material,T.Texture>(),generatedMaps=new Set<T.Texture>();let appliedModelTint='',appliedGarmentColors='',appliedStyle='';
  const toonGradient=new T.DataTexture(new Uint8Array([88,88,88,255,150,150,150,255,211,211,211,255,255,255,255,255]),4,1);toonGradient.needsUpdate=true;toonGradient.minFilter=T.NearestFilter;toonGradient.magFilter=T.NearestFilter;
  {
   const manager=new T.LoadingManager();manager.setURLModifier(url=>{if(!url.startsWith('blob:'))throw Error('No se permiten recursos externos.');return url;});
   const modelData=props.data?Promise.resolve(props.data):fetch('/models/human-avatar.glb').then(response=>{if(!response.ok)throw Error('No se pudo descargar el modelo base.');return response.arrayBuffer();});
   import('three/addons/loaders/GLTFLoader.js').then(({GLTFLoader})=>modelData.then(data=>new GLTFLoader(manager).parseAsync(data,''))).then(gltf=>{
    if(!alive){disposeObject(gltf.scene);return;}
    try{
     const bounds=new T.Box3().setFromObject(gltf.scene),size=bounds.getSize(new T.Vector3()),center=bounds.getCenter(new T.Vector3());let triangles=0;
     gltf.scene.traverse(o=>{if(o instanceof T.Mesh){triangles+=(o.geometry.index?.count||o.geometry.attributes.position?.count||0)/3;for(const material of Array.isArray(o.material)?o.material:[o.material])for(const value of Object.values(material))if(value instanceof T.Texture&&value.image&&(value.image.width>4096||value.image.height>4096))throw Error('Las texturas deben medir como máximo 4096 px por lado.');}});
     if(!Number.isFinite(size.length())||size.y<.001||triangles>300000||Math.max(size.x,size.z)>size.y*4)throw Error('Usa un personaje de hasta 300000 triángulos con dimensiones válidas.');
     const normalizer=new T.Group();normalizer.add(gltf.scene);gltf.scene.position.sub(new T.Vector3(center.x,bounds.min.y,center.z));normalizer.scale.setScalar(4.8/size.y);scene.add(normalizer);imported=normalizer;rig.root.visible=false;
     mixer=new T.AnimationMixer(gltf.scene);gltf.animations.slice(0,20).forEach((clip,i)=>clips.set(String(i),clip));
     const clothes:ModelInfo['clothes']=[],clothingName=/cloth|dress|shirt|skirt|jacket|pants|coat|hood|ropa|falda|top|outfit|sleeve|uniform|sweater|blouse|vest|jeans|trousers|wardrobe|garment/i;gltf.scene.traverse(o=>{if(o instanceof T.Mesh){
      const originals=Array.isArray(o.material)?o.material:[o.material];if(!clothingName.test(o.name)&&!originals.some(material=>clothingName.test(material.name)))return;
      const clones=originals.map(material=>{const copy=material.clone();if('color'in copy)importClothColors.set(copy,{base:(copy as T.MeshStandardMaterial).color.clone(),material:copy});return copy;});o.material=Array.isArray(o.material)?clones:clones[0];importMeshes.set(o.uuid,o);clothes.push({id:o.uuid,name:(o.name||originals.map(material=>material.name).join(', ')).slice(0,70)});
     }});
     gltf.scene.traverse(o=>{if(!(o instanceof T.Mesh))return;const originals=Array.isArray(o.material)?o.material:[o.material];baseMaterials.set(o,originals);toonMaterials.set(o,originals.map(material=>{const source=material as T.MeshStandardMaterial;const toon=new T.MeshToonMaterial({map:source.map,color:'color'in source?source.color:new T.Color('#ffffff'),alphaMap:source.alphaMap,transparent:source.transparent,opacity:source.opacity,side:source.side,vertexColors:source.vertexColors});toon.name=material.name;toon.gradientMap=toonGradient;if(!props.data&&source.map)sourceMaps.set(toon,source.map);return toon;}));if(!props.data)originals.forEach(material=>{const source=material as T.MeshStandardMaterial;if(source.map)sourceMaps.set(material,source.map);});});
     latest.current.onReady({animations:[...clips.values()].map(c=>c.name||'Animación'),clothes});
    }catch(e){disposeObject(gltf.scene);latest.current.onError((e as Error).message);}
   }).catch(()=>{if(alive)latest.current.onError(props.data?'No se pudo abrir el GLB. Exporta glTF 2.0 con texturas incrustadas y sin compresión.':'No se pudo cargar el avatar 3D local. Se mostrará el personaje de respaldo.');});
  }
  function resize(){const r=element.getBoundingClientRect();if(!r.width||!r.height)return;stableFrames=0;element.dataset.ready='false';renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.updateProjectionMatrix();}
  const observer=new ResizeObserver(resize);observer.observe(element);resize();
  function tick(now:number){if(!alive||document.hidden||!inViewport)return;frame=requestAnimationFrame(tick);const state=latest.current,interval=state.settings.reduced?1000/15:1000/30;if(now-last<interval)return;const dt=Math.min((now-last)/1000,.08);last=now;elapsed+=dt;
   if(lastSettings!==state.settings){rig.apply(state.settings);lastSettings=state.settings;}
   const object=imported||rig.root;object.rotation.y=state.settings.turn*Math.PI/180;
   if(imported){
    if(appliedStyle!==state.settings.style){for(const [mesh,materials] of baseMaterials){const styled=state.settings.style==='anime'?toonMaterials.get(mesh)!:materials;mesh.material=Array.isArray(mesh.material)?styled:styled[0];}key.intensity=state.settings.style==='realistic'?1.9:1.6;fill.intensity=state.settings.style==='realistic'?.65:.45;renderer.toneMappingExposure=state.settings.style==='realistic'?1:1.05;appliedStyle=state.settings.style;}
    const garmentColors=[state.settings.clothing,state.settings.accent,state.settings.hair,state.settings.skin].join('|');if(!props.data&&appliedGarmentColors!==garmentColors){
     const rgb=(hex:string)=>[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16));const jacket=rgb(state.settings.clothing),pants=rgb(state.settings.accent),hairColor=rgb(state.settings.hair),skinColor=rgb(state.settings.skin);
     generatedMaps.forEach(texture=>texture.dispose());generatedMaps.clear();for(const source of new Set(sourceMaps.values())){const image=source.image as CanvasImageSource & {width:number;height:number},canvas=document.createElement('canvas');canvas.width=image.width;canvas.height=image.height;const ctx=canvas.getContext('2d');if(!ctx)continue;ctx.drawImage(image,0,0);const pixels=ctx.getImageData(0,0,canvas.width,canvas.height),p=pixels.data;
      for(let i=0;i<p.length;i+=4){const r=p[i],g=p[i+1],b=p[i+2],jacketMask=r>105&&r>g*1.35&&r>b*1.5&&g<150&&b<110,pantsMask=b>42&&b>r*1.7&&b>g*1.12&&r<65&&g<100,hairMask=!jacketMask&&!pantsMask&&r>g*1.14&&g>b*1.03&&r<160&&g<130&&b<90,skinMask=!jacketMask&&!pantsMask&&!hairMask&&r>115&&g>65&&b>45&&r>g*1.06&&g>b*.98&&g<175;if(!jacketMask&&!pantsMask&&!hairMask&&!skinMask)continue;const target=jacketMask?jacket:pantsMask?pants:hairMask?hairColor:skinColor,light=.42+.72*(r*.299+g*.587+b*.114)/255;p[i]=Math.min(255,target[0]*light);p[i+1]=Math.min(255,target[1]*light);p[i+2]=Math.min(255,target[2]*light);}
      ctx.putImageData(pixels,0,0);const texture=new T.CanvasTexture(canvas);texture.colorSpace=source.colorSpace;texture.flipY=source.flipY;texture.wrapS=source.wrapS;texture.wrapT=source.wrapT;texture.minFilter=source.minFilter;texture.magFilter=source.magFilter;texture.needsUpdate=true;generatedMaps.add(texture);for(const materials of [...baseMaterials.values(),...toonMaterials.values()])for(const target of materials)if(sourceMaps.get(target)===source)(target as T.MeshStandardMaterial).map=texture;
     }appliedGarmentColors=garmentColors;
    }
    for(const [id,mesh] of importMeshes)mesh.visible=!state.hidden.includes(id);if(appliedModelTint!==state.settings.modelClothing){const tint=new T.Color(state.settings.modelClothing);for(const {base,material} of importClothColors.values())(material as T.MeshStandardMaterial).color.copy(base).multiply(tint);appliedModelTint=state.settings.modelClothing;}
    const walkIndex=state.moving?[...clips].find(([i,c])=>/walk|run/i.test(c.name)?i:'')?.[0]||'':'';const wanted=state.clip||walkIndex;if(animation!==wanted){animation=wanted;mixer?.stopAllAction();const clip=clips.get(wanted);if(clip)mixer?.clipAction(clip).play();}if(!state.settings.reduced)mixer?.update(dt);
   }else rig.animate(elapsed,state.moving,state.action,state.settings.reduced);
   if(!lost){renderer.render(scene,camera);if(++stableFrames>=2)element.dataset.ready='true';element.dataset.model=imported?'imported':'hana';}
  }
  function visibility(){cancelAnimationFrame(frame);last=performance.now();if(!document.hidden&&inViewport)frame=requestAnimationFrame(tick);}
  function contextLost(e:Event){e.preventDefault();lost=true;setError('Se perdió el contexto 3D. Espera a la recuperación de gráficos.');}
  function contextRestored(){lost=false;setError('');}
  const intersection=typeof IntersectionObserver==='undefined'?null:new IntersectionObserver(entries=>{inViewport=entries.some(entry=>entry.isIntersecting);visibility();});intersection?.observe(element);
  renderer.domElement.addEventListener('webglcontextlost',contextLost);renderer.domElement.addEventListener('webglcontextrestored',contextRestored);document.addEventListener('visibilitychange',visibility);visibility();
  return()=>{alive=false;cancelAnimationFrame(frame);observer.disconnect();intersection?.disconnect();document.removeEventListener('visibilitychange',visibility);renderer.domElement.removeEventListener('webglcontextlost',contextLost);renderer.domElement.removeEventListener('webglcontextrestored',contextRestored);mixer?.stopAllAction();if(imported){disposeObject(imported);for(const materials of baseMaterials.values())materials.forEach(m=>m.dispose());for(const materials of toonMaterials.values())materials.forEach(m=>m.dispose());sourceMaps.forEach(texture=>texture.dispose());}generatedMaps.forEach(texture=>texture.dispose());toonGradient.dispose();rig.dispose();renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();};
 },[props.data]);
 return <div ref={host} className="avatar-model-canvas" data-testid="avatar-model">{error&&<p className="avatar-webgl-error" role="alert">{error}</p>}</div>;
}
