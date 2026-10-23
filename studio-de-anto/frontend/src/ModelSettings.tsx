import {useEffect,useRef,useState} from 'react';
import {Check,RefreshCw,PlugZap,ShieldCheck,FlaskConical,LoaderCircle} from 'lucide-react';
import type {Agent} from './Office';
export type Provider='ollama'|'openai_local';
export type ModelStatus={connected:boolean;models:string[];provider?:Provider;error?:string;endpoint?:string;inference_verified?:boolean};
export type SavedSettings={agents:Agent[];provider:Provider;ollama_url:string;openai_url:string};
type Probe={verified:boolean;response?:string;model?:string;provider?:string;latency_ms?:number};
type Props={agents:Agent[];provider:Provider;ollama:string;openai:string;onSaved:(settings:SavedSettings)=>void;status:ModelStatus;onStatus:(s:ModelStatus)=>void;reduced:boolean;onReduced:(v:boolean)=>void;onNotice:(s:string)=>void;onError:(s:string)=>void};
async function call(path:string,body?:unknown,method?:string){const r=await fetch('/api'+path,{method:method||(body?'POST':'GET'),headers:{'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});const value=await r.json();if(!r.ok)throw Error(typeof value.detail==='string'?value.detail:JSON.stringify(value.detail||value));return value;}
const normalize=(url:string)=>url.trim().replace(/\/+$/,'');
function snapshot(value:SavedSettings){return {provider:value.provider,ollama_url:normalize(value.ollama_url),openai_url:normalize(value.openai_url),agents:value.agents.map(a=>({...a}))};}
const signature=(value:SavedSettings)=>JSON.stringify(snapshot(value));
export default function ModelSettings(p:Props){
 const source={agents:p.agents,provider:p.provider,ollama_url:p.ollama,openai_url:p.openai};
 const[draft,setDraft]=useState<SavedSettings>(()=>snapshot(source));
 const[busy,setBusy]=useState(false),[probe,setProbe]=useState<{value:Probe;signature:string;agent:string}|null>(null),[probeAgent,setProbeAgent]=useState('anto');
 const alive=useRef(true),requestNumber=useRef(0);
 useEffect(()=>{alive.current=true;return()=>{alive.current=false;requestNumber.current++;};},[]);
 useEffect(()=>{setDraft(snapshot({agents:p.agents,provider:p.provider,ollama_url:p.ollama,openai_url:p.openai}));},[p.agents,p.provider,p.ollama,p.openai]);
 const dirty=signature(draft)!==signature(source);
 const matchingEndpoint=p.status.provider===draft.provider&&normalize(p.status.endpoint||'')===normalize(draft.provider==='ollama'?draft.ollama_url:draft.openai_url);
 const models=matchingEndpoint?p.status.models:[];
 function change(next:SavedSettings){setDraft(next);setProbe(null);}
 async function run(action:'save'|'check'|'probe'){
  const request=++requestNumber.current;setBusy(true);p.onError('');setProbe(null);
  try{
   await call('/settings',snapshot(draft),'PUT');
   // The readback is the authoritative saved and normalized configuration.
   const saved:SavedSettings=await call('/settings');
   p.onSaved(saved);
   if(alive.current&&request===requestNumber.current)setDraft(snapshot(saved));
   if(action==='probe'){
    const result:Probe=await call('/models/test',{agent:probeAgent});
    if(alive.current&&request===requestNumber.current)setProbe({value:result,signature:signature(saved),agent:probeAgent});
    p.onNotice(result.verified?'El proveedor devolvió una respuesta a la prueba. Esto no certifica la calidad de sus análisis.':'El proveedor no devolvió contenido verificable.');
   }
   const status:ModelStatus=await call('/models');p.onStatus(status);
   if(action==='save')p.onNotice('Configuración de agentes y API guardada.');
   else if(action==='check')p.onNotice(status.connected?'La API responde. La inferencia se comprueba por separado.':'Configuración guardada; la API todavía no responde.');
  }catch(e){p.onError((e as Error).message);}finally{if(alive.current&&request===requestNumber.current)setBusy(false);}
 }
 const visibleProbe=probe&&probe.signature===signature(draft)&&probe.agent===probeAgent?probe.value:null;
 return <section className="content-card settings-card"><fieldset className="settings-fields" disabled={busy} style={{border:0,padding:0,margin:0,minWidth:0}}>
  <div className="section-title"><div><div className="eyebrow">CONEXIONES REALES · SIN MODELOS DESCARGADOS AUTOMÁTICAMENTE</div><h2>APIs y modelos</h2></div><span className="pill">Una inferencia a la vez</span></div>
  <div className="provider-options" role="group" aria-label="Proveedor de modelos">
   <button className={draft.provider==='ollama'?'provider-option selected':'provider-option'} onClick={()=>change({...draft,provider:'ollama'})}><span className="provider-symbol"><PlugZap size={23}/></span><strong>Ollama · recomendado</strong><small>API nativa local · streaming · planes JSON</small><span className="provider-chip">SIN API DE PAGO</span></button>
   <button className={draft.provider==='openai_local'?'provider-option selected':'provider-option'} onClick={()=>change({...draft,provider:'openai_local'})}><span className="provider-symbol"><ShieldCheck size={23}/></span><strong>API local compatible</strong><small>LM Studio / llama.cpp · formato OpenAI</small><span className="provider-chip">EJECUTADO EN TU EQUIPO</span></button>
  </div>
  <div className="api-config-row"><label>{draft.provider==='ollama'?'URL de la API de Ollama':'URL base de la API local compatible'}<input aria-label="URL de la API" value={draft.provider==='ollama'?draft.ollama_url:draft.openai_url} onChange={e=>change({...draft,...(draft.provider==='ollama'?{ollama_url:e.target.value}:{openai_url:e.target.value})})} spellCheck={false}/></label><button className="button secondary" onClick={()=>run('check')}>{busy?<LoaderCircle size={15} className="spin"/>:<RefreshCw size={15}/>}Guardar y comprobar API</button></div>
  {dirty&&<div className="notice" role="status">Hay cambios sin guardar. Las conversaciones siguen usando la configuración guardada.</div>}
  <div className={'settings-connection '+(p.status.connected&&matchingEndpoint?'ok':'')}><span className="live-dot"/>{!matchingEndpoint?'Dirección pendiente de comprobar':p.status.connected?'API conectada · '+models.length+' modelos disponibles':'Modelo no conectado'}<span>{!matchingEndpoint?'Guarda y comprueba la dirección del borrador.':p.status.error||'La conexión confirma la API, no la inferencia.'}</span></div>
  <p className="muted">{draft.provider==='ollama'?<>Ollama es la opción local recomendada por simplicidad; la calidad depende del modelo y de tus recursos. Inícialo en el equipo que ejecuta el servidor y consulta los modelos instalados con <code>ollama list</code>.</>:<>En LM Studio activa el servidor local y carga un modelo. Con llama.cpp habilita su servidor compatible. La gestión de memoria corresponde a ese servidor.</>} Si usas Codespaces, esta dirección apunta al Codespace; no a tu computadora. Las claves de APIs comerciales no se solicitan ni se guardan aquí.</p>
  {draft.provider==='ollama'&&models.length===0&&<div className="integration-note"><h3>Preparar el primer modelo</h3><p>En otra terminal del servidor, desde la carpeta del proyecto, ejecuta <code>python scripts/setup-model.py --download --test</code>. Prepara Qwen 2.5 de 3B para los agentes sin modelo y comprueba una respuesta real. Los pesos requieren aproximadamente 1,9 GB de descarga. Consulta README si falta Ollama o la red bloquea el registro.</p></div>}
  <p className="muted">Compatible con OpenAI describe el formato de la API; no incluye acceso a los modelos GPT de OpenAI. La API no aprende ni mejora automáticamente al conectarla. Las correcciones guardadas mejoran el contexto de futuras conversaciones, sin reentrenar el modelo.</p>
  <label>Modelo compartido por los seis agentes<select aria-label="Modelo compartido" value="" onChange={e=>{if(e.target.value)change({...draft,agents:draft.agents.map(a=>({...a,model:e.target.value}))});}}><option value="">Selecciona un modelo disponible</option>{models.map(m=><option key={m}>{m}</option>)}</select></label>
  <div className="agent-settings">{draft.agents.map(a=><article key={a.id}><div><span className="agent-dot" style={{background:a.color}}/><h3>{a.name}<small>{a.role}</small></h3><select aria-label={'Modelo de '+a.name} value={a.model} onChange={e=>change({...draft,agents:draft.agents.map(x=>x.id===a.id?{...x,model:e.target.value}:x)})}><option value="">Sin modelo</option>{[...new Set([...models,...(a.model?[a.model]:[])])].map(m=><option key={m} value={m}>{m}{!models.includes(m)?' (configurado; comprobar)':''}</option>)}</select></div><label>Instrucciones de {a.name}<textarea value={a.instructions} maxLength={6000} onChange={e=>change({...draft,agents:draft.agents.map(x=>x.id===a.id?{...x,instructions:e.target.value}:x)})}/></label><small>Herramientas permitidas: {a.tools.join(', ')}</small></article>)}</div>
  <div className="probe-card"><div className="section-title"><h3><FlaskConical size={17}/>Comprobar una inferencia real</h3><span className="pill">Sin datos de tus archivos</span></div><p>Guarda la configuración y envía una petición breve al modelo. La respuesta y el tiempo proceden del proveedor; una API desconectada muestra el error.</p><div className="api-config-row"><label>Agente para la prueba<select aria-label="Agente para la prueba" value={probeAgent} onChange={e=>{setProbeAgent(e.target.value);setProbe(null);}}>{draft.agents.map(a=><option key={a.id} value={a.id}>{a.name} · {a.model||'sin modelo'}</option>)}</select></label><button className="button secondary" disabled={!draft.agents.find(a=>a.id===probeAgent)?.model} onClick={()=>run('probe')}><FlaskConical size={15}/>Guardar y probar inferencia</button></div>{visibleProbe&&<div className="probe-result" role="status"><strong>{visibleProbe.verified?'Respuesta recibida del proveedor':'Prueba sin respuesta'}</strong><p>{visibleProbe.response||'Sin contenido'}</p><small>{visibleProbe.model} · {visibleProbe.provider} · {visibleProbe.latency_ms} ms</small></div>}</div>
  <label className="checkbox"><input type="checkbox" checked={p.reduced} onChange={e=>p.onReduced(e.target.checked)}/>Reducir movimiento de los personajes y la cámara</label>
  <button className="button primary" onClick={()=>run('save')}><Check size={16}/>Guardar configuración</button>
  <div className="integration-note"><h3>Diseño creativo · ComfyUI</h3><p>Integración opcional pendiente. El análisis y la oficina funcionan de forma independiente.</p></div>
 </fieldset></section>;
}
