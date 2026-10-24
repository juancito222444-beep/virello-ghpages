import {useState} from 'react';
import {Check,RefreshCw,FlaskConical} from 'lucide-react';
import type {Agent} from './Office';
export type Provider='gemini'|'groq';
export type ModelStatus={connected:boolean;models:string[];provider?:Provider;error?:string;endpoint?:string;inference_verified?:boolean;credential?:{configured:boolean;valid_format:boolean;source:string|null;accepted_names:string[]}};
export type SavedSettings={agents:Agent[];provider:Provider;ollama_url:string;openai_url:string;key_configured?:boolean};
type Props={agents:Agent[];provider:Provider;ollama:string;openai:string;onSaved:(s:SavedSettings)=>void;status:ModelStatus;onStatus:(s:ModelStatus)=>void;reduced:boolean;onReduced:(v:boolean)=>void;onNotice:(s:string)=>void;onError:(s:string)=>void};
const services={gemini:{name:'Google Gemini',secret:'STUDIO_GEMINI_API_KEY',model:'gemini-2.5-flash-lite',link:'https://aistudio.google.com/apikey'},groq:{name:'Groq',secret:'STUDIO_GROQ_API_KEY',model:'openai/gpt-oss-20b',link:'https://console.groq.com/keys'}};
async function call(path:string,body?:unknown,method?:string){const r=await fetch('/api'+path,{method:method||(body?'POST':'GET'),headers:{'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});const d=await r.json();if(!r.ok)throw Error(typeof d.detail==='string'?d.detail:JSON.stringify(d.detail||d));return d;}
export default function ModelSettings(p:Props){
 const[provider,setProvider]=useState<Provider>(p.provider),[agents,setAgents]=useState(p.agents),[busy,setBusy]=useState(false),[probe,setProbe]=useState<{response:string;model:string;latency_ms:number}|null>(null);
 const service=services[provider]||services.gemini;
 const matching=p.status.provider===provider;
 function choose(next:Provider){setProvider(next);setProbe(null);setAgents(old=>old.map(a=>({...a,model:services[next].model})));}
 async function save(action:'save'|'check'|'test'){
  setBusy(true);setProbe(null);p.onError('');
  try{
   await call('/settings',{provider,agents,ollama_url:p.ollama,openai_url:p.openai},'PUT');
   const saved:SavedSettings=await call('/settings');p.onSaved(saved);setAgents(saved.agents);
   const status:ModelStatus=await call('/models');p.onStatus(status);
   if(action==='test')setProbe(await call('/models/test',{agent:'anto'}));
   p.onNotice(action==='test'?'Respuesta real recibida del proveedor.':status.connected?'Configuración guardada. La API responde.':'Configuración guardada. '+(status.error||'Comprueba la clave y tu conexión.'));
  }catch(e){p.onError((e as Error).message);}finally{setBusy(false);}
 }
 return <section className="content-card settings-card"><fieldset disabled={busy} style={{border:0,padding:0,margin:0,minWidth:0}}>
  <div className="section-title"><div><div className="eyebrow">IA EN LA NUBE</div><h2>APIs y modelos</h2></div><span className="pill">Sin modelos locales</span></div>
  <div className="provider-options" role="group" aria-label="Proveedor de IA">{(['gemini','groq'] as Provider[]).map(id=><button key={id} className={'provider-option '+(provider===id?'selected':'')} onClick={()=>choose(id)}><strong>{services[id].name}</strong><small>API en la nube · cuota gratuita según tu cuenta</small></button>)}</div>
  <div className="integration-note"><h3>Conectar {service.name}</h3><p>Crea tu clave en <a href={service.link} target="_blank" rel="noreferrer">el sitio oficial</a>. En GitHub, abre Settings → Codespaces → Secrets y añade <code>{service.secret}</code> para este repositorio. Detén y vuelve a abrir el Codespace para cargarla.</p><p>También se reconocen <code>{provider==='gemini'?'GEMINI_API_KEY o GOOGLE_API_KEY':'GROQ_API_KEY'}</code>. La clave permanece en el servidor. No la pegues en conversaciones ni archivos del proyecto. Aquí no se solicitan datos de pago.</p></div>
  <div className={'settings-connection '+(matching&&p.status.connected?'ok':'')}><strong>{matching&&p.status.connected?'API conectada':matching?p.status.error||'Conexión pendiente':'Proveedor pendiente de comprobar'}</strong></div>
  {matching&&!p.status.credential&&<div className="notice" role="status">El servidor sigue usando una versión anterior. Reinicia el Codespace para cargar la nueva conexión de IA.</div>}
  {matching&&p.status.credential&&<div className="integration-note" role="status"><strong>{p.status.credential.configured?'Secreto recibido por el servidor: '+p.status.credential.source:'El servidor todavía no recibe el secreto'}</strong><p>{p.status.credential.configured?(p.status.credential.valid_format?'La presencia del secreto no confirma que el proveedor lo acepte. Comprueba la API o prueba una respuesta.':'El valor contiene caracteres no válidos. Guarda solo la clave, sin comillas ni prefijos.'):'Comprueba que sea un secreto de Codespaces, que tenga acceso a este repositorio y detén y vuelve a abrir el Codespace para cargarlo.'}</p></div>}
  <p className="muted">No se descarga ni ejecuta un modelo en tu PC. Los mensajes y el contexto que uses se envían al proveedor elegido. Sus límites y condiciones pueden cambiar; no se promete uso ilimitado ni acceso gratuito a GPT de OpenAI.</p>
  <label>Modelo para todo el equipo<select aria-label="Modelo compartido" value="" onChange={e=>{if(e.target.value){setAgents(old=>old.map(a=>({...a,model:e.target.value})));setProbe(null);}}}><option value="">Seleccionar un modelo del catálogo</option>{(matching?p.status.models:[]).map(m=><option key={m}>{m}</option>)}</select></label>
  <div className="agent-settings">{agents.map(a=><article key={a.id}><h3>{a.name}<small>{a.role}</small></h3><label>Modelo de {a.name}<input aria-label={'Modelo de '+a.name} value={a.model} maxLength={200} onChange={e=>{setAgents(old=>old.map(x=>x.id===a.id?{...x,model:e.target.value}:x));setProbe(null);}}/></label><label>Instrucciones de {a.name}<textarea value={a.instructions} maxLength={6000} onChange={e=>setAgents(old=>old.map(x=>x.id===a.id?{...x,instructions:e.target.value}:x))}/></label></article>)}</div>
  <div className="api-config-row"><button className="button primary" onClick={()=>save('save')}><Check size={15}/>Guardar configuración</button><button className="button secondary" onClick={()=>save('check')}><RefreshCw size={15}/>Actualizar catálogo</button><button className="button secondary" onClick={()=>save('test')}><FlaskConical size={15}/>Conectar y probar respuesta</button></div>
  {probe&&<div className="probe-result" role="status"><strong>Respuesta recibida del proveedor</strong><p>{probe.response}</p><small>{probe.model} · {probe.latency_ms} ms</small></div>}
  <p className="muted">Para volver a entrar, abre el mismo Codespace y el puerto 8765. No necesitas reinstalar. Los proveedores mantienen su infraestructura; puedes actualizar el catálogo y elegir nuevos modelos. Las correcciones guardadas aportan contexto, sin reentrenar el modelo.</p>
  <label className="checkbox"><input type="checkbox" checked={p.reduced} onChange={e=>p.onReduced(e.target.checked)}/>Reducir movimiento</label>
 </fieldset></section>;
}
