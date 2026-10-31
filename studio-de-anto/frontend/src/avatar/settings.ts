export type Outfit='cardigan'|'street'|'dress';
export type Hairstyle='long'|'bob'|'ponytail';
export type AvatarSettings={version:1;name:string;style:'anime'|'human';outfit:Outfit;hairStyle:Hairstyle;hair:string;eyes:string;skin:string;clothing:string;modelClothing:string;accent:string;scale:number;turn:number;x:number;y:number;auto:boolean;reduced:boolean;background:'studio'|'night'|'rose'};
export const STORAGE_KEY='anto.avatar3d.v1';
export const PRESETS_KEY='anto.avatar3d.presets.v1';
export const defaults:AvatarSettings={version:1,name:'Hana',style:'anime',outfit:'cardigan',hairStyle:'long',hair:'#292037',eyes:'#73508d',skin:'#f2cdbd',clothing:'#b3a0dc',modelClothing:'#ffffff',accent:'#f8eee8',scale:1,turn:0,x:.5,y:.5,auto:false,reduced:false,background:'studio'};
const hex=(value:unknown,fallback:string)=>typeof value==='string'&&/^#[0-9a-f]{6}$/i.test(value)?value:fallback;
const number=(value:unknown,fallback:number,min:number,max:number)=>typeof value==='number'&&Number.isFinite(value)?Math.min(max,Math.max(min,value)):fallback;
export function normalizeSettings(value:unknown):AvatarSettings{
 const v=value&&typeof value==='object'?value as Record<string,unknown>:{};
 return {...defaults,name:typeof v.name==='string'?v.name.trim().slice(0,32)||defaults.name:defaults.name,
 style:v.style==='human'?'human':'anime',outfit:['cardigan','street','dress'].includes(String(v.outfit))?v.outfit as Outfit:defaults.outfit,
 hairStyle:['long','bob','ponytail'].includes(String(v.hairStyle))?v.hairStyle as Hairstyle:defaults.hairStyle,
 hair:hex(v.hair,defaults.hair),eyes:hex(v.eyes,defaults.eyes),skin:hex(v.skin,defaults.skin),clothing:hex(v.clothing,defaults.clothing),modelClothing:hex(v.modelClothing,defaults.modelClothing),accent:hex(v.accent,defaults.accent),
 scale:number(v.scale,1,.6,1.35),turn:number(v.turn,0,-180,180),x:number(v.x,.5,0,1),y:number(v.y,.5,0,1),auto:v.auto===true,reduced:v.reduced===true,background:['studio','night','rose'].includes(String(v.background))?v.background as AvatarSettings['background']:'studio'};
}
export function readSettings():AvatarSettings{try{const raw=localStorage.getItem(STORAGE_KEY);if(raw===null)return {...defaults,reduced:typeof matchMedia!=='undefined'&&matchMedia('(prefers-reduced-motion: reduce)').matches};return normalizeSettings(JSON.parse(raw));}catch{return {...defaults};}}
export const looks:Record<Outfit,Partial<AvatarSettings>>={cardigan:{outfit:'cardigan',clothing:'#b3a0dc',accent:'#f8eee8'},street:{outfit:'street',clothing:'#353346',accent:'#bdc5df'},dress:{outfit:'dress',clothing:'#426f74',accent:'#e5c696'}};
export function validateGlb(data:ArrayBuffer):void{
 if(data.byteLength<20||data.byteLength>20*1024*1024)throw Error('El GLB debe medir entre 20 bytes y 20 MB.');
 const view=new DataView(data);
 if(view.getUint32(0,true)!==0x46546c67||view.getUint32(4,true)!==2||view.getUint32(8,true)!==data.byteLength||view.getUint32(16,true)!==0x4e4f534a)throw Error('Selecciona un archivo GLB 2 válido.');
 const length=view.getUint32(12,true);if(length>2*1024*1024||20+length>data.byteLength)throw Error('La descripción del GLB es demasiado grande o está dañada.');
 let doc:any;try{doc=JSON.parse(new TextDecoder().decode(new Uint8Array(data,20,length)));}catch{throw Error('La descripción del modelo no es válida.');}
 if(!doc||typeof doc!=='object')throw Error('El GLB no describe un modelo.');
 for(const key of ['buffers','images','accessors','extensionsUsed','nodes'])if(doc[key]!==undefined&&!Array.isArray(doc[key]))throw Error('La estructura del GLB no es válida.');
 if(doc.asset?.version!=='2.0'||!Array.isArray(doc.meshes)||doc.meshes.length>256||(doc.nodes?.length||0)>512)throw Error('El modelo debe usar glTF 2.0 y hasta 256 mallas / 512 nodos.');
 const allowed=new Set(['KHR_materials_unlit','KHR_texture_transform','KHR_materials_emissive_strength','KHR_materials_ior','KHR_materials_specular','KHR_mesh_quantization','EXT_texture_webp']);
 if((doc.extensionsUsed||[]).some((extension:string)=>!allowed.has(extension)))throw Error('Exporta un GLB sin compresión ni extensiones especiales.');
 if([...(doc.buffers||[]),...(doc.images||[])].some(item=>item.uri!==undefined))throw Error('El GLB debe contener todo dentro del archivo, sin URL ni texturas externas.');
 if((doc.images||[]).length>16||(doc.images||[]).some((image:{mimeType:string})=>!['image/png','image/jpeg','image/webp'].includes(image.mimeType)))throw Error('Usa hasta 16 texturas PNG, JPG o WebP incrustadas.');
 if((doc.accessors||[]).reduce((sum:number,item:{count:number})=>sum+(Number.isSafeInteger(item.count)&&item.count>=0?item.count:1e9),0)>1500000)throw Error('El modelo supera la complejidad admitida. Reduce polígonos y animaciones.');
}
