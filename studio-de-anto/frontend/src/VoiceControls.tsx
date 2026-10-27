import {useEffect,useRef,useState} from 'react';
import {Mic,Square,Volume2} from 'lucide-react';

type RecognitionResult={isFinal:boolean;0:{transcript:string}};
type RecognitionEvent={resultIndex:number;results:{length:number;[index:number]:RecognitionResult}};
type RecognitionError={error:string};
type Recognition={
 lang:string;continuous:boolean;interimResults:boolean;maxAlternatives:number;
 onstart:(()=>void)|null;onend:(()=>void)|null;
 onresult:((event:RecognitionEvent)=>void)|null;onerror:((event:RecognitionError)=>void)|null;
 start:()=>void;stop:()=>void;abort:()=>void;
};
type RecognitionConstructor=new()=>Recognition;
type VoiceWindow=Window&{SpeechRecognition?:RecognitionConstructor;webkitSpeechRecognition?:RecognitionConstructor};
type VoiceProps={value:string;onChange:(value:string)=>void;contextKey:string;disabled?:boolean;maxLength?:number};
type RecognitionSession={recognition:Recognition;contextKey:string;maxLength:number;finalized:Set<number>;timer?:ReturnType<typeof setTimeout>};
const MAX_MESSAGE=12000;

function recognitionConstructor(){
 const browser=window as VoiceWindow;
 return browser.SpeechRecognition||browser.webkitSpeechRecognition;
}
function recognitionError(code:string){
 const messages:Record<string,string>={
  'not-allowed':'Permite el micrófono en los permisos de este sitio y vuelve a pulsar Dictar. También puedes escribir tu mensaje.',
  'service-not-allowed':'El navegador no permite su servicio de dictado. Puedes escribir el mensaje o probar un navegador compatible.',
  'audio-capture':'No se encuentra un micrófono disponible. Revisa su conexión y los permisos del navegador.',
  'no-speech':'No se detectó voz. Pulsa Dictar para volver a intentarlo o escribe tu mensaje.',
  'network':'El servicio de dictado del navegador no respondió. Revisa la conexión o escribe tu mensaje.',
  'language-not-supported':'Este navegador no admite dictado en español. Puedes escribir tu mensaje.',
 };
 return messages[code]||'No se pudo completar el dictado. Tu texto se conserva; puedes escribir o intentarlo de nuevo.';
}

/** Voice is an explicit browser action. Interim speech never becomes a message. */
export function VoiceInput(p:VoiceProps){
 const[phase,setPhase]=useState<'idle'|'starting'|'listening'|'stopping'>('idle');
 const[interim,setInterim]=useState(''),[error,setError]=useState('');
 const latest=useRef(p);latest.current=p;
 const session=useRef<RecognitionSession|null>(null);
 const maxLength=p.maxLength??MAX_MESSAGE;
 const supported=!!recognitionConstructor(),secure=window.isSecureContext!==false;

 function abortSession(){
  const current=session.current;session.current=null;
  if(!current)return;
  clearTimeout(current.timer);
  const recognition=current.recognition;
  recognition.onstart=null;recognition.onresult=null;recognition.onerror=null;recognition.onend=null;
  try{recognition.abort();}catch{/* A browser may already have ended capture. */}
 }
 useEffect(()=>{
  abortSession();setPhase('idle');setInterim('');setError('');
  return abortSession;
 },[p.contextKey,p.disabled,maxLength]);

 function start(){
  if(p.disabled||session.current)return;
  if(p.value.length>=maxLength){setError('El mensaje ya alcanza el límite de '+maxLength+' caracteres. Se conserva el texto escrito; revísalo antes de continuar.');return;}
  const Constructor=recognitionConstructor();if(!Constructor||!secure)return;
  let recognition:Recognition;
  try{recognition=new Constructor();}catch{setError(recognitionError(''));return;}
  recognition.lang='es-PE';recognition.continuous=true;recognition.interimResults=true;recognition.maxAlternatives=1;
  const current:RecognitionSession={recognition,contextKey:p.contextKey,maxLength,finalized:new Set()};
  session.current=current;setError('');setInterim('');setPhase('starting');
  const active=()=>session.current===current&&latest.current.contextKey===current.contextKey&&(latest.current.maxLength??MAX_MESSAGE)===current.maxLength&&!latest.current.disabled;
  const finish=()=>{if(session.current!==current)return;abortSession();setPhase('idle');setInterim('');};
  recognition.onstart=()=>{if(active())setPhase('listening');else finish();};
  recognition.onend=finish;
  recognition.onerror=event=>{if(!active())return;if(event.error!=='aborted')setError(recognitionError(event.error));finish();};
  recognition.onresult=event=>{
   if(!active())return;
   const final:string[]=[],partial:string[]=[];
   for(let index=event.resultIndex;index<event.results.length;index++){
    const result=event.results[index],transcript=result[0]?.transcript?.trim();if(!transcript)continue;
    if(result.isFinal){if(!current.finalized.has(index)){current.finalized.add(index);final.push(transcript);}}
    else partial.push(transcript);
   }
   setInterim(partial.join(' '));
   if(final.length){
    const previous=latest.current.value,separator=previous&&!/\s$/.test(previous)?' ':'';
    const available=current.maxLength-previous.length;
    if(available<=separator.length){setError('El mensaje ya alcanza el límite de '+current.maxLength+' caracteres. Se conserva el texto escrito; revísalo antes de continuar.');finish();return;}
    const spoken=separator+final.join(' ');
    let added=spoken.slice(0,available);
    // Do not split a surrogate pair when the last dictated character cannot fit.
    if(/[\uD800-\uDBFF]$/.test(added))added=added.slice(0,-1);
    const next=previous+added;
    // Keep manual edits, including edits made while recognition was pending.
    latest.current={...latest.current,value:next};
    latest.current.onChange(latest.current.value);
    if(added.length<spoken.length||next.length===current.maxLength){setError('Límite de '+current.maxLength+' caracteres: se añadió solo el dictado que cabía, conservando el texto escrito. Revisa el mensaje antes de enviarlo.');finish();}
   }
  };
  try{recognition.start();}catch(exception){
   setError(recognitionError(exception instanceof DOMException&&exception.name==='NotAllowedError'?'not-allowed':''));finish();
  }
 }
 function stop(){
  const current=session.current;if(!current)return;
  setPhase('stopping');
  try{current.recognition.stop();}catch{abortSession();setPhase('idle');setInterim('');return;}
  // Some implementations omit onend after stopping. Do not leave the UI stuck.
  if(session.current===current)current.timer=setTimeout(()=>{if(session.current===current){abortSession();setPhase('idle');setInterim('');}},3000);
 }
 const active=phase!=='idle';
 return <div className="voice-input">
  <div className="voice-actions"><button type="button" className="button secondary" aria-label={active?'Detener dictado':'Dictar mensaje'} aria-pressed={active} disabled={!!p.disabled||!supported||!secure||phase==='stopping'} onClick={active?stop:start}>{active?<Square size={14}/>:<Mic size={15}/>}<span>{phase==='stopping'?'Terminando…':active?'Detener dictado':'Dictar'}</span></button>
   <span className="voice-status" role="status">{phase==='starting'?'Activando micrófono…':phase==='listening'?'Escuchando en español…':phase==='stopping'?'Terminando dictado…':''}</span>
  </div>
  {!supported?<p className="voice-unavailable">El dictado no está disponible en este navegador. Puedes escribir tu mensaje.</p>:!secure?<p className="voice-unavailable">Abre la aplicación por HTTPS para usar el micrófono. Puedes seguir escribiendo.</p>:<p className="voice-privacy">El navegador puede procesar el audio en su servicio de voz. Revisa el texto antes de pulsar Enviar; el dictado no lo envía automáticamente.</p>}
  {interim&&<p className="voice-interim" aria-label="Dictado provisional">{interim}</p>}
  {error&&<p className="chat-error" role="alert">{error}</p>}
 </div>;
}

type SpeakingSession={owner:symbol;cancel:(notify?:boolean)=>void};
let speakingSession:SpeakingSession|null=null;

function speechChunks(text:string){
 let remaining=text.replace(/\s+/g,' ').trim();const result:string[]=[];
 while(remaining.length>240){const boundary=remaining.lastIndexOf(' ',240),end=boundary>0?boundary:240;result.push(remaining.slice(0,end));remaining=remaining.slice(end).trimStart();}
 if(remaining)result.push(remaining);return result;
}

/** Only one response speaks at a time; no audio or text is sent to our server. */
export function SpeakResponse(p:{text:string;contextKey:string}){
 const[speaking,setSpeaking]=useState(false),[error,setError]=useState('');
 const owner=useRef(Symbol('response-voice'));
 const supported=typeof window.speechSynthesis!=='undefined'&&typeof window.SpeechSynthesisUtterance!=='undefined';
 useEffect(()=>{
  setSpeaking(false);setError('');
  return()=>{if(speakingSession?.owner===owner.current)speakingSession.cancel(false);};
 },[p.contextKey,p.text]);

 function play(){
  if(!supported||!p.text.trim())return;
  if(speakingSession?.owner===owner.current){speakingSession.cancel();return;}
  speakingSession?.cancel();
  const synthesis=window.speechSynthesis,chunks=speechChunks(p.text);
  let utterance:SpeechSynthesisUtterance|null=null;
  const current:SpeakingSession={owner:owner.current,cancel:(notify=true)=>{
   if(speakingSession!==current)return;
   speakingSession=null;
   if(utterance){utterance.onend=null;utterance.onerror=null;}
   synthesis.cancel();if(notify)setSpeaking(false);
  }};
  speakingSession=current;setSpeaking(true);setError('');
  function next(index:number){
   if(speakingSession!==current)return;
   if(index>=chunks.length){speakingSession=null;setSpeaking(false);return;}
   utterance=new window.SpeechSynthesisUtterance(chunks[index]);utterance.lang='es-PE';
   const voices=synthesis.getVoices();
   const voice=voices.find(value=>value.lang.toLowerCase()==='es-pe')||voices.find(value=>value.lang.toLowerCase().startsWith('es'));
   if(voice)utterance.voice=voice;
   utterance.onend=()=>next(index+1);
   utterance.onerror=event=>{
    if(speakingSession!==current)return;
    current.cancel();
    if(event.error!=='interrupted'&&event.error!=='canceled')setError('El navegador no pudo leer esta respuesta. Puedes copiarla o probar otra voz del sistema.');
   };
   try{synthesis.speak(utterance);}catch{current.cancel();setError('No se pudo iniciar la lectura en este navegador. La respuesta sigue disponible como texto.');}
  }
  try{synthesis.cancel();next(0);}catch{current.cancel();setError('No se pudo iniciar la lectura en este navegador.');}
 }
 return <span className="speech-control"><button type="button" className="retry speech-button" aria-label={speaking?'Detener lectura':'Escuchar respuesta'} aria-pressed={speaking} disabled={!supported||!p.text.trim()} onClick={play} title={supported?'Lee esta respuesta con las voces de tu navegador':'Este navegador no ofrece lectura en voz alta'}>{speaking?<Square size={12}/>:<Volume2 size={13}/>}<span>{speaking?'Detener lectura':'Escuchar'}</span></button>{!supported&&<small className="voice-unavailable">Lectura de voz no disponible.</small>}{error&&<small className="chat-error" role="alert">{error}</small>}</span>;
}
