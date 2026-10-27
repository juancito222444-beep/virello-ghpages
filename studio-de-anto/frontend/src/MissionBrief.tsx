import {useRef,useState} from 'react';
import {ClipboardList} from 'lucide-react';

type Props={value:string;maxLength:number;disabled?:boolean;onApply:(text:string)=>void};
const templates={
 libre:['',''],
 informe:['Un informe claro con hallazgos, conclusiones y próximos pasos.','Distingue hechos de supuestos; cita las fuentes disponibles e indica los datos que faltan.'],
 decision:['Una recomendación con alternativas, ventajas, riesgos y próximos pasos.','Compara las opciones con los mismos criterios; explica las incertidumbres y evita inventar datos.'],
 campaña:['Una propuesta de campaña con público, mensaje, canales y calendario.','Incluye acciones concretas, métricas y supuestos; adapta la propuesta al presupuesto disponible.'],
} as const;
type Kind=keyof typeof templates;

export default function MissionBrief(p:Props){
 const[open,setOpen]=useState(false),[kind,setKind]=useState<Kind>('libre'),[result,setResult]=useState(''),[criteria,setCriteria]=useState('');
 const applied=useRef(false);
 const parts=[result.trim()?'Resultado esperado: '+result.trim():'',criteria.trim()?'Criterios de éxito: '+criteria.trim():''].filter(Boolean);
 const goal=p.value.trim(),suffix=parts.join('\n'),preview=goal+(suffix?'\n\n'+suffix:'');
 const duplicate=!!suffix&&goal.endsWith('\n\n'+suffix),overflow=preview.length>p.maxLength;
 function apply(){
  if(p.disabled||applied.current||!goal||!suffix||overflow||duplicate)return;
  applied.current=true;p.onApply(preview);setResult('');setCriteria('');setKind('libre');setOpen(false);
 }
 return <section className="mission-brief" aria-label="Ficha de encargo">
  <button type="button" className="button secondary" aria-expanded={open} disabled={p.disabled} onClick={()=>setOpen(!open)}><ClipboardList size={14}/>Ficha de encargo</button>
  {open&&<div className="mission-brief-fields">
   <p className="caption">Define qué debe entregar el equipo y cómo revisarlo. La ficha se añade a tu mensaje; tú decides cuándo enviarlo. Las plantillas se preparan sin IA.</p>
   <label>Tipo de encargo<select aria-label="Tipo de encargo" value={kind} disabled={p.disabled} onChange={event=>{const choice=event.target.value as Kind;setKind(choice);applied.current=false;if(choice!=='libre'){setResult(templates[choice][0]);setCriteria(templates[choice][1]);}}}><option value="libre">Libre</option><option value="informe">Informe</option><option value="decision">Decisión</option><option value="campaña">Campaña</option></select></label>
   <label>Resultado esperado<textarea aria-label="Resultado esperado" value={result} maxLength={500} disabled={p.disabled} onChange={event=>{setResult(event.target.value);applied.current=false;}} placeholder="Qué quieres recibir…"/></label>
   <label>Criterios de éxito<textarea aria-label="Criterios de éxito" value={criteria} maxLength={700} disabled={p.disabled} onChange={event=>{setCriteria(event.target.value);applied.current=false;}} placeholder="Cómo comprobarás que el resultado sirve…"/></label>
   <label>Vista previa del encargo<textarea aria-label="Vista previa del encargo" value={preview} readOnly rows={5}/></label>
   <p className="caption" role="status" aria-label="Estado de la ficha">{overflow?'El encargo completo supera el límite de '+p.maxLength+' caracteres ('+preview.length+'). Reduce el mensaje o la ficha; tu texto no se ha recortado.':duplicate?'Esta ficha ya está incluida en el mensaje.':!goal?'Escribe primero el objetivo en el mensaje.':preview.length+'/'+p.maxLength+' caracteres. Añadir la ficha no envía el mensaje.'}</p>
   <button type="button" className="button secondary" disabled={p.disabled||!goal||!suffix||overflow||duplicate} onClick={apply}>Añadir ficha al mensaje</button>
  </div>}
 </section>;
}
