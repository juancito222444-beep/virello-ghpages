var Qy=Object.defineProperty;var Jy=(r,e,i)=>e in r?Qy(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i;var Wi=(r,e,i)=>Jy(r,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function $y(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var $d={exports:{}},Pl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function eS(){if(h_)return Pl;h_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Pl.Fragment=e,Pl.jsx=i,Pl.jsxs=i,Pl}var p_;function tS(){return p_||(p_=1,$d.exports=eS()),$d.exports}var g=tS();async function $l(r){const e=await r.text();if(r.status===204)return null;let i;try{i=JSON.parse(e)}catch{throw r.status===401||r.status===403?Error("No se pudo acceder al Codespace. Vuelve a abrir la aplicación desde el puerto 8765 e inicia sesión en GitHub."):r.status===502||r.status===503||r.status===504?Error("El servidor no está disponible o tardó demasiado (HTTP "+r.status+"). Espera a que termine de arrancar y vuelve a probar."):r.status>=500?Error("El servidor tuvo un error interno (HTTP "+r.status+"). Reinicia la aplicación del Codespace y vuelve a probar."):Error("La respuesta del servidor no contiene los datos esperados. Abre la aplicación desde el puerto 8765 y recarga la página.")}if(!r.ok){const s=i&&typeof i.detail=="string"?i.detail:"La solicitud no pudo completarse (HTTP "+r.status+").";throw Error(s)}return i}async function ec(r,e){try{return await fetch(r,e)}catch(i){throw i.name==="AbortError"?i:Error("No se pudo contactar con el servidor. Revisa que tu Codespace siga encendido y vuelve a abrir la aplicación.")}}var eh={exports:{}},_t={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function nS(){if(m_)return _t;m_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function x(O,se,Ae){this.props=O,this.context=se,this.refs=w,this.updater=Ae||M}x.prototype.isReactComponent={},x.prototype.setState=function(O,se){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,se,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=x.prototype;function P(O,se,Ae){this.props=O,this.context=se,this.refs=w,this.updater=Ae||M}var L=P.prototype=new _;L.constructor=P,E(L,x.prototype),L.isPureReactComponent=!0;var U=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function j(O,se,Ae,Ne,ee,K){return Ae=K.ref,{$$typeof:r,type:O,key:se,ref:Ae!==void 0?Ae:null,props:K}}function I(O,se){return j(O.type,se,void 0,void 0,void 0,O.props)}function D(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function R(O){var se={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ae){return se[Ae]})}var B=/\/+/g;function J(O,se){return typeof O=="object"&&O!==null&&O.key!=null?R(""+O.key):se.toString(36)}function ae(){}function _e(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(ae,ae):(O.status="pending",O.then(function(se){O.status==="pending"&&(O.status="fulfilled",O.value=se)},function(se){O.status==="pending"&&(O.status="rejected",O.reason=se)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function fe(O,se,Ae,Ne,ee){var K=typeof O;(K==="undefined"||K==="boolean")&&(O=null);var ce=!1;if(O===null)ce=!0;else switch(K){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(O.$$typeof){case r:case e:ce=!0;break;case v:return ce=O._init,fe(ce(O._payload),se,Ae,Ne,ee)}}if(ce)return ee=ee(O),ce=Ne===""?"."+J(O,0):Ne,U(ee)?(Ae="",ce!=null&&(Ae=ce.replace(B,"$&/")+"/"),fe(ee,se,Ae,"",function(Qe){return Qe})):ee!=null&&(D(ee)&&(ee=I(ee,Ae+(ee.key==null||O&&O.key===ee.key?"":(""+ee.key).replace(B,"$&/")+"/")+ce)),se.push(ee)),1;ce=0;var Se=Ne===""?".":Ne+":";if(U(O))for(var Te=0;Te<O.length;Te++)Ne=O[Te],K=Se+J(Ne,Te),ce+=fe(Ne,se,Ae,K,ee);else if(Te=S(O),typeof Te=="function")for(O=Te.call(O),Te=0;!(Ne=O.next()).done;)Ne=Ne.value,K=Se+J(Ne,Te++),ce+=fe(Ne,se,Ae,K,ee);else if(K==="object"){if(typeof O.then=="function")return fe(_e(O),se,Ae,Ne,ee);throw se=String(O),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.")}return ce}function H(O,se,Ae){if(O==null)return O;var Ne=[],ee=0;return fe(O,Ne,"","",function(K){return se.call(Ae,K,ee++)}),Ne}function ne(O){if(O._status===-1){var se=O._result;se=se(),se.then(function(Ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ae)},function(Ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ae)}),O._status===-1&&(O._status=0,O._result=se)}if(O._status===1)return O._result.default;throw O._result}var Y=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var se=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(se))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ee(){}return _t.Children={map:H,forEach:function(O,se,Ae){H(O,function(){se.apply(this,arguments)},Ae)},count:function(O){var se=0;return H(O,function(){se++}),se},toArray:function(O){return H(O,function(se){return se})||[]},only:function(O){if(!D(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},_t.Component=x,_t.Fragment=i,_t.Profiler=l,_t.PureComponent=P,_t.StrictMode=s,_t.Suspense=p,_t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,_t.__COMPILER_RUNTIME={__proto__:null,c:function(O){return G.H.useMemoCache(O)}},_t.cache=function(O){return function(){return O.apply(null,arguments)}},_t.cloneElement=function(O,se,Ae){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Ne=E({},O.props),ee=O.key,K=void 0;if(se!=null)for(ce in se.ref!==void 0&&(K=void 0),se.key!==void 0&&(ee=""+se.key),se)!F.call(se,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&se.ref===void 0||(Ne[ce]=se[ce]);var ce=arguments.length-2;if(ce===1)Ne.children=Ae;else if(1<ce){for(var Se=Array(ce),Te=0;Te<ce;Te++)Se[Te]=arguments[Te+2];Ne.children=Se}return j(O.type,ee,void 0,void 0,K,Ne)},_t.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},_t.createElement=function(O,se,Ae){var Ne,ee={},K=null;if(se!=null)for(Ne in se.key!==void 0&&(K=""+se.key),se)F.call(se,Ne)&&Ne!=="key"&&Ne!=="__self"&&Ne!=="__source"&&(ee[Ne]=se[Ne]);var ce=arguments.length-2;if(ce===1)ee.children=Ae;else if(1<ce){for(var Se=Array(ce),Te=0;Te<ce;Te++)Se[Te]=arguments[Te+2];ee.children=Se}if(O&&O.defaultProps)for(Ne in ce=O.defaultProps,ce)ee[Ne]===void 0&&(ee[Ne]=ce[Ne]);return j(O,K,void 0,void 0,null,ee)},_t.createRef=function(){return{current:null}},_t.forwardRef=function(O){return{$$typeof:h,render:O}},_t.isValidElement=D,_t.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:ne}},_t.memo=function(O,se){return{$$typeof:m,type:O,compare:se===void 0?null:se}},_t.startTransition=function(O){var se=G.T,Ae={};G.T=Ae;try{var Ne=O(),ee=G.S;ee!==null&&ee(Ae,Ne),typeof Ne=="object"&&Ne!==null&&typeof Ne.then=="function"&&Ne.then(Ee,Y)}catch(K){Y(K)}finally{G.T=se}},_t.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},_t.use=function(O){return G.H.use(O)},_t.useActionState=function(O,se,Ae){return G.H.useActionState(O,se,Ae)},_t.useCallback=function(O,se){return G.H.useCallback(O,se)},_t.useContext=function(O){return G.H.useContext(O)},_t.useDebugValue=function(){},_t.useDeferredValue=function(O,se){return G.H.useDeferredValue(O,se)},_t.useEffect=function(O,se,Ae){var Ne=G.H;if(typeof Ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Ne.useEffect(O,se)},_t.useId=function(){return G.H.useId()},_t.useImperativeHandle=function(O,se,Ae){return G.H.useImperativeHandle(O,se,Ae)},_t.useInsertionEffect=function(O,se){return G.H.useInsertionEffect(O,se)},_t.useLayoutEffect=function(O,se){return G.H.useLayoutEffect(O,se)},_t.useMemo=function(O,se){return G.H.useMemo(O,se)},_t.useOptimistic=function(O,se){return G.H.useOptimistic(O,se)},_t.useReducer=function(O,se,Ae){return G.H.useReducer(O,se,Ae)},_t.useRef=function(O){return G.H.useRef(O)},_t.useState=function(O){return G.H.useState(O)},_t.useSyncExternalStore=function(O,se,Ae){return G.H.useSyncExternalStore(O,se,Ae)},_t.useTransition=function(){return G.H.useTransition()},_t.version="19.1.0",_t}var g_;function zp(){return g_||(g_=1,eh.exports=nS()),eh.exports}var Me=zp();const iS=$y(Me);var th={exports:{}},zl={},nh={exports:{}},ih={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function aS(){return __||(__=1,(function(r){function e(H,ne){var Y=H.length;H.push(ne);e:for(;0<Y;){var Ee=Y-1>>>1,O=H[Ee];if(0<l(O,ne))H[Ee]=ne,H[Y]=O,Y=Ee;else break e}}function i(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var ne=H[0],Y=H.pop();if(Y!==ne){H[0]=Y;e:for(var Ee=0,O=H.length,se=O>>>1;Ee<se;){var Ae=2*(Ee+1)-1,Ne=H[Ae],ee=Ae+1,K=H[ee];if(0>l(Ne,Y))ee<O&&0>l(K,Ne)?(H[Ee]=K,H[ee]=Y,Ee=ee):(H[Ee]=Ne,H[Ae]=Y,Ee=Ae);else if(ee<O&&0>l(K,Y))H[Ee]=K,H[ee]=Y,Ee=ee;else break e}}return ne}function l(H,ne){var Y=H.sortIndex-ne.sortIndex;return Y!==0?Y:H.id-ne.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var p=[],m=[],v=1,y=null,S=3,M=!1,E=!1,w=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(H){for(var ne=i(m);ne!==null;){if(ne.callback===null)s(m);else if(ne.startTime<=H)s(m),ne.sortIndex=ne.expirationTime,e(p,ne);else break;ne=i(m)}}function G(H){if(w=!1,U(H),!E)if(i(p)!==null)E=!0,F||(F=!0,J());else{var ne=i(m);ne!==null&&fe(G,ne.startTime-H)}}var F=!1,j=-1,I=5,D=-1;function R(){return x?!0:!(r.unstable_now()-D<I)}function B(){if(x=!1,F){var H=r.unstable_now();D=H;var ne=!0;try{e:{E=!1,w&&(w=!1,P(j),j=-1),M=!0;var Y=S;try{t:{for(U(H),y=i(p);y!==null&&!(y.expirationTime>H&&R());){var Ee=y.callback;if(typeof Ee=="function"){y.callback=null,S=y.priorityLevel;var O=Ee(y.expirationTime<=H);if(H=r.unstable_now(),typeof O=="function"){y.callback=O,U(H),ne=!0;break t}y===i(p)&&s(p),U(H)}else s(p);y=i(p)}if(y!==null)ne=!0;else{var se=i(m);se!==null&&fe(G,se.startTime-H),ne=!1}}break e}finally{y=null,S=Y,M=!1}ne=void 0}}finally{ne?J():F=!1}}}var J;if(typeof L=="function")J=function(){L(B)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,_e=ae.port2;ae.port1.onmessage=B,J=function(){_e.postMessage(null)}}else J=function(){_(B,0)};function fe(H,ne){j=_(function(){H(r.unstable_now())},ne)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(H){switch(S){case 1:case 2:case 3:var ne=3;break;default:ne=S}var Y=S;S=ne;try{return H()}finally{S=Y}},r.unstable_requestPaint=function(){x=!0},r.unstable_runWithPriority=function(H,ne){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Y=S;S=H;try{return ne()}finally{S=Y}},r.unstable_scheduleCallback=function(H,ne,Y){var Ee=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Ee+Y:Ee):Y=Ee,H){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Y+O,H={id:v++,callback:ne,priorityLevel:H,startTime:Y,expirationTime:O,sortIndex:-1},Y>Ee?(H.sortIndex=Y,e(m,H),i(p)===null&&H===i(m)&&(w?(P(j),j=-1):w=!0,fe(G,Y-Ee))):(H.sortIndex=O,e(p,H),E||M||(E=!0,F||(F=!0,J()))),H},r.unstable_shouldYield=R,r.unstable_wrapCallback=function(H){var ne=S;return function(){var Y=S;S=ne;try{return H.apply(this,arguments)}finally{S=Y}}}})(ih)),ih}var v_;function sS(){return v_||(v_=1,nh.exports=aS()),nh.exports}var ah={exports:{}},ti={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function rS(){if(x_)return ti;x_=1;var r=zp();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:p,containerInfo:m,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ti.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ti.createPortal=function(p,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,v)},ti.flushSync=function(p){var m=f.T,v=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=v,s.d.f()}},ti.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},ti.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},ti.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var v=m.as,y=h(v,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:M}):v==="script"&&s.d.X(p,{crossOrigin:y,integrity:S,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ti.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=h(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},ti.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,y=h(v,m.crossOrigin);s.d.L(p,v,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ti.preloadModule=function(p,m){if(typeof p=="string")if(m){var v=h(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},ti.requestFormReset=function(p){s.d.r(p)},ti.unstable_batchedUpdates=function(p,m){return p(m)},ti.useFormState=function(p,m,v){return f.H.useFormState(p,m,v)},ti.useFormStatus=function(){return f.H.useHostTransitionStatus()},ti.version="19.1.0",ti}var y_;function oS(){if(y_)return ah.exports;y_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ah.exports=rS(),ah.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function lS(){if(S_)return zl;S_=1;var r=sS(),e=zp(),i=oS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return h(u),t;if(d===o)return h(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var b=!1,C=u.child;C;){if(C===a){b=!0,a=u,o=d;break}if(C===o){b=!0,o=u,a=d;break}C=C.sibling}if(!b){for(C=d.child;C;){if(C===a){b=!0,a=d,o=u;break}if(C===o){b=!0,o=d,a=u;break}C=C.sibling}if(!b)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),P=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Symbol.for("react.client.reference");function _e(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case x:return"Profiler";case w:return"StrictMode";case G:return"Suspense";case F:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case L:return(t.displayName||"Context")+".Provider";case P:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case j:return n=t.displayName||null,n!==null?n:_e(t.type)||"Memo";case I:n=t._payload,t=t._init;try{return _e(t(n))}catch{}}return null}var fe=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Ee=[],O=-1;function se(t){return{current:t}}function Ae(t){0>O||(t.current=Ee[O],Ee[O]=null,O--)}function Ne(t,n){O++,Ee[O]=t.current,t.current=n}var ee=se(null),K=se(null),ce=se(null),Se=se(null);function Te(t,n){switch(Ne(ce,n),Ne(K,t),Ne(ee,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?G0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=G0(n),t=j0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ae(ee),Ne(ee,t)}function Qe(){Ae(ee),Ae(K),Ae(ce)}function Ie(t){t.memoizedState!==null&&Ne(Se,t);var n=ee.current,a=j0(n,t.type);n!==a&&(Ne(K,t),Ne(ee,a))}function ke(t){K.current===t&&(Ae(ee),Ae(K)),Se.current===t&&(Ae(Se),Dl._currentValue=Y)}var St=Object.prototype.hasOwnProperty,qe=r.unstable_scheduleCallback,X=r.unstable_cancelCallback,ln=r.unstable_shouldYield,gt=r.unstable_requestPaint,lt=r.unstable_now,Je=r.unstable_getCurrentPriorityLevel,Pt=r.unstable_ImmediatePriority,Ze=r.unstable_UserBlockingPriority,z=r.unstable_NormalPriority,A=r.unstable_LowPriority,k=r.unstable_IdlePriority,Q=r.log,me=r.unstable_setDisableYieldValue,pe=null,Oe=null;function Le(t){if(typeof Q=="function"&&me(t),Oe&&typeof Oe.setStrictMode=="function")try{Oe.setStrictMode(pe,t)}catch{}}var q=Math.clz32?Math.clz32:Xe,Ye=Math.log,we=Math.LN2;function Xe(t){return t>>>=0,t===0?32:31-(Ye(t)/we|0)|0}var et=256,$e=4194304;function ze(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ht(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~d,o!==0?u=ze(o):(b&=C,b!==0?u=ze(b):a||(a=C&~t,a!==0&&(u=ze(a))))):(C=o&~d,C!==0?u=ze(C):b!==0?u=ze(b):a||(a=o&~t,a!==0&&(u=ze(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function at(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function zt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z(){var t=et;return et<<=1,(et&4194048)===0&&(et=256),t}function Be(){var t=$e;return $e<<=1,($e&62914560)===0&&($e=4194304),t}function ve(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ye(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function He(t,n,a,o,u,d){var b=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var C=t.entanglements,V=t.expirationTimes,le=t.hiddenUpdates;for(a=b&~a;0<a;){var be=31-q(a),De=1<<be;C[be]=0,V[be]=-1;var de=le[be];if(de!==null)for(le[be]=null,be=0;be<de.length;be++){var ge=de[be];ge!==null&&(ge.lane&=-536870913)}a&=~De}o!==0&&Fe(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(b&~n))}function Fe(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-q(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function ct(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-q(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function It(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function cn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function At(){var t=ne.p;return t!==0?t:(t=window.event,t===void 0?32:o_(t.type))}function Mn(t,n){var a=ne.p;try{return ne.p=t,n()}finally{ne.p=a}}var un=Math.random().toString(36).slice(2),bn="__reactFiber$"+un,An="__reactProps$"+un,Zn="__reactContainer$"+un,zi="__reactEvents$"+un,Aa="__reactListeners$"+un,Ra="__reactHandles$"+un,yi="__reactResources$"+un,da="__reactMarker$"+un;function Si(t){delete t[bn],delete t[An],delete t[zi],delete t[Aa],delete t[Ra]}function Mi(t){var n=t[bn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Zn]||a[bn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=q0(t);t!==null;){if(a=t[bn])return a;t=q0(t)}return n}t=a,a=t.parentNode}return null}function ui(t){if(t=t[bn]||t[Zn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ca(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ki(t){var n=t[yi];return n||(n=t[yi]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function kt(t){t[da]=!0}var Gs=new Set,Rr={};function bi(t,n){N(t,n),N(t+"Capture",n)}function N(t,n){for(Rr[t]=n,t=0;t<n.length;t++)Gs.add(n[t])}var $=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ue={},he={};function ie(t){return St.call(he,t)?!0:St.call(ue,t)?!1:$.test(t)?he[t]=!0:(ue[t]=!0,!1)}function Ue(t,n,a){if(ie(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Pe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ge(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var We,ot;function st(t){if(We===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);We=n&&n[1]||"",ot=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+We+t+ot}var tt=!1;function xt(t,n){if(!t||tt)return"";tt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var De=function(){throw Error()};if(Object.defineProperty(De.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(De,[])}catch(ge){var de=ge}Reflect.construct(t,[],De)}else{try{De.call()}catch(ge){de=ge}t.call(De.prototype)}}else{try{throw Error()}catch(ge){de=ge}(De=t())&&typeof De.catch=="function"&&De.catch(function(){})}}catch(ge){if(ge&&de&&typeof ge.stack=="string")return[ge.stack,de.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),b=d[0],C=d[1];if(b&&C){var V=b.split(`
`),le=C.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<le.length&&!le[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===le.length)for(o=V.length-1,u=le.length-1;1<=o&&0<=u&&V[o]!==le[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==le[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==le[u]){var be=`
`+V[o].replace(" at new "," at ");return t.displayName&&be.includes("<anonymous>")&&(be=be.replace("<anonymous>",t.displayName)),be}while(1<=o&&0<=u);break}}}finally{tt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?st(a):""}function Bt(t){switch(t.tag){case 26:case 27:case 5:return st(t.type);case 16:return st("Lazy");case 13:return st("Suspense");case 19:return st("SuspenseList");case 0:case 15:return xt(t.type,!1);case 11:return xt(t.type.render,!1);case 1:return xt(t.type,!0);case 31:return st("Activity");default:return""}}function nn(t){try{var n="";do n+=Bt(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Rt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ct(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nt(t){var n=Ct(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){o=""+b,d.call(this,b)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(b){o=""+b},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function an(t){t._valueTracker||(t._valueTracker=nt(t))}function Lt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Ct(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function hn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Qi=/[\n"\\]/g;function Ht(t){return t.replace(Qi,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Kn(t,n,a,o,u,d,b,C){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),n!=null?b==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Rt(n)):t.value!==""+Rt(n)&&(t.value=""+Rt(n)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),n!=null?Mt(t,b,Rt(n)):a!=null?Mt(t,b,Rt(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+Rt(C):t.removeAttribute("name")}function Gt(t,n,a,o,u,d,b,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+Rt(a):"",n=n!=null?""+Rt(n):a,C||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b)}function Mt(t,n,a){n==="number"&&hn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function pn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Rt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function fn(t,n,a){if(n!=null&&(n=""+Rt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Rt(a):""}function Rn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(fe(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Rt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function Bn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var si=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||si.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Fo(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Qn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Qn(t,d,n[d])}function wt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ns=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wr(t){return Cr.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Nn=null;function Fn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ji=null,wa=null;function Dr(t){var n=ui(t);if(n&&(t=n.stateNode)){var a=t[An]||null;e:switch(t=n.stateNode,n.type){case"input":if(Kn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ht(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[An]||null;if(!u)throw Error(s(90));Kn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Lt(o)}break e;case"textarea":fn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&pn(t,!!a.multiple,n,!1)}}}var js=!1;function Nr(t,n,a){if(js)return t(n,a);js=!0;try{var o=t(n);return o}finally{if(js=!1,(Ji!==null||wa!==null)&&(Yc(),Ji&&(n=Ji,t=wa,wa=Ji=null,Dr(n),t)))for(n=0;n<t.length;n++)Dr(t[n])}}function Ii(t,n){var a=t.stateNode;if(a===null)return null;var o=a[An]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ur=!1;if(fi)try{var Da={};Object.defineProperty(Da,"passive",{get:function(){Ur=!0}}),window.addEventListener("test",Da,Da),window.removeEventListener("test",Da,Da)}catch{Ur=!1}var Bi=null,Lr=null,Vs=null;function is(){if(Vs)return Vs;var t,n=Lr,a=n.length,o,u="value"in Bi?Bi.value:Bi.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var b=a-t;for(o=1;o<=b&&n[a-o]===u[d-o];o++);return Vs=u.slice(t,1<o?1-o:void 0)}function as(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Or(){return!0}function ac(){return!1}function Jn(t){function n(a,o,u,d,b){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=b,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(a=t[C],this[C]=a?a(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Or:ac,this.isPropagationStopped=ac,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),n}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=Jn(Na),di=v({},Na,{view:0,detail:0}),sc=Jn(di),Pr,ks,ss,Xs=v({},di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:en,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ss&&(ss&&t.type==="mousemove"?(Pr=t.screenX-ss.screenX,ks=t.screenY-ss.screenY):ks=Pr=0,ss=t),Pr)},movementY:function(t){return"movementY"in t?t.movementY:ks}}),zr=Jn(Xs),of=v({},Xs,{dataTransfer:0}),Ho=Jn(of),rc=v({},di,{relatedTarget:0}),Go=Jn(rc),lf=v({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),oc=Jn(lf),qs=v({},Na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lc=Jn(qs),T=v({},Na,{data:0}),xe=Jn(T),Ce={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ve={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rt={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mt(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=rt[t])?!!n[t]:!1}function en(){return mt}var vn=v({},di,{key:function(t){if(t.key){var n=Ce[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=as(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ve[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:en,charCode:function(t){return t.type==="keypress"?as(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?as(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rs=Jn(vn),jo=v({},Xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cc=Jn(jo),Vo=v({},di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:en}),ko=Jn(Vo),uc=v({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),fc=Jn(uc),dc=v({},Xs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mn=Jn(dc),Ei=v({},Na,{newState:0,oldState:0}),Ti=Jn(Ei),Ws=[9,13,27,32],Xo=fi&&"CompositionEvent"in window,Ys=null;fi&&"documentMode"in document&&(Ys=document.documentMode);var qo=fi&&"TextEvent"in window&&!Ys,Wo=fi&&(!Xo||Ys&&8<Ys&&11>=Ys),$n=" ",Fi=!1;function hc(t,n){switch(t){case"keyup":return Ws.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ir=!1;function bx(t,n){switch(t){case"compositionend":return pc(n);case"keypress":return n.which!==32?null:(Fi=!0,$n);case"textInput":return t=n.data,t===$n&&Fi?null:t;default:return null}}function Ex(t,n){if(Ir)return t==="compositionend"||!Xo&&hc(t,n)?(t=is(),Vs=Lr=Bi=null,Ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wo&&n.locale!=="ko"?null:n.data;default:return null}}var Tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Tx[t.type]:n==="textarea"}function nm(t,n,a,o){Ji?wa?wa.push(o):wa=[o]:Ji=o,n=eu(n,"onChange"),0<n.length&&(a=new ri("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Yo=null,Zo=null;function Ax(t){z0(t,0)}function mc(t){var n=Ca(t);if(Lt(n))return t}function im(t,n){if(t==="change")return n}var am=!1;if(fi){var cf;if(fi){var uf="oninput"in document;if(!uf){var sm=document.createElement("div");sm.setAttribute("oninput","return;"),uf=typeof sm.oninput=="function"}cf=uf}else cf=!1;am=cf&&(!document.documentMode||9<document.documentMode)}function rm(){Yo&&(Yo.detachEvent("onpropertychange",om),Zo=Yo=null)}function om(t){if(t.propertyName==="value"&&mc(Zo)){var n=[];nm(n,Zo,t,Fn(t)),Nr(Ax,n)}}function Rx(t,n,a){t==="focusin"?(rm(),Yo=n,Zo=a,Yo.attachEvent("onpropertychange",om)):t==="focusout"&&rm()}function Cx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mc(Zo)}function wx(t,n){if(t==="click")return mc(n)}function Dx(t,n){if(t==="input"||t==="change")return mc(n)}function Nx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Ai=typeof Object.is=="function"?Object.is:Nx;function Ko(t,n){if(Ai(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!St.call(n,u)||!Ai(t[u],n[u]))return!1}return!0}function lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cm(t,n){var a=lm(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=lm(a)}}function um(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?um(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function fm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=hn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=hn(t.document)}return n}function ff(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ux=fi&&"documentMode"in document&&11>=document.documentMode,Br=null,df=null,Qo=null,hf=!1;function dm(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hf||Br==null||Br!==hn(o)||(o=Br,"selectionStart"in o&&ff(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Qo&&Ko(Qo,o)||(Qo=o,o=eu(df,"onSelect"),0<o.length&&(n=new ri("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Br)))}function Zs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Fr={animationend:Zs("Animation","AnimationEnd"),animationiteration:Zs("Animation","AnimationIteration"),animationstart:Zs("Animation","AnimationStart"),transitionrun:Zs("Transition","TransitionRun"),transitionstart:Zs("Transition","TransitionStart"),transitioncancel:Zs("Transition","TransitionCancel"),transitionend:Zs("Transition","TransitionEnd")},pf={},hm={};fi&&(hm=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function Ks(t){if(pf[t])return pf[t];if(!Fr[t])return t;var n=Fr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in hm)return pf[t]=n[a];return t}var pm=Ks("animationend"),mm=Ks("animationiteration"),gm=Ks("animationstart"),Lx=Ks("transitionrun"),Ox=Ks("transitionstart"),Px=Ks("transitioncancel"),_m=Ks("transitionend"),vm=new Map,mf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mf.push("scrollEnd");function $i(t,n){vm.set(t,n),bi(n,[t])}var xm=new WeakMap;function Hi(t,n){if(typeof t=="object"&&t!==null){var a=xm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:nn(n)},xm.set(t,n),n)}return{value:t,source:n,stack:nn(n)}}var Gi=[],Hr=0,gf=0;function gc(){for(var t=Hr,n=gf=Hr=0;n<t;){var a=Gi[n];Gi[n++]=null;var o=Gi[n];Gi[n++]=null;var u=Gi[n];Gi[n++]=null;var d=Gi[n];if(Gi[n++]=null,o!==null&&u!==null){var b=o.pending;b===null?u.next=u:(u.next=b.next,b.next=u),o.pending=u}d!==0&&ym(a,u,d)}}function _c(t,n,a,o){Gi[Hr++]=t,Gi[Hr++]=n,Gi[Hr++]=a,Gi[Hr++]=o,gf|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function _f(t,n,a,o){return _c(t,n,a,o),vc(t)}function Gr(t,n){return _c(t,null,null,n),vc(t)}function ym(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-q(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function vc(t){if(50<Ml)throw Ml=0,bd=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var jr={};function zx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ri(t,n,a,o){return new zx(t,n,a,o)}function vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ua(t,n){var a=t.alternate;return a===null?(a=Ri(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Sm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function xc(t,n,a,o,u,d){var b=0;if(o=t,typeof t=="function")vf(t)&&(b=1);else if(typeof t=="string")b=By(t,a,ee.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=Ri(31,a,n,u),t.elementType=D,t.lanes=d,t;case E:return Qs(a.children,u,d,n);case w:b=8,u|=24;break;case x:return t=Ri(12,a,n,u|2),t.elementType=x,t.lanes=d,t;case G:return t=Ri(13,a,n,u),t.elementType=G,t.lanes=d,t;case F:return t=Ri(19,a,n,u),t.elementType=F,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case L:b=10;break e;case P:b=9;break e;case U:b=11;break e;case j:b=14;break e;case I:b=16,o=null;break e}b=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Ri(b,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Qs(t,n,a,o){return t=Ri(7,t,o,n),t.lanes=a,t}function xf(t,n,a){return t=Ri(6,t,null,n),t.lanes=a,t}function yf(t,n,a){return n=Ri(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Vr=[],kr=0,yc=null,Sc=0,ji=[],Vi=0,Js=null,La=1,Oa="";function $s(t,n){Vr[kr++]=Sc,Vr[kr++]=yc,yc=t,Sc=n}function Mm(t,n,a){ji[Vi++]=La,ji[Vi++]=Oa,ji[Vi++]=Js,Js=t;var o=La;t=Oa;var u=32-q(o)-1;o&=~(1<<u),a+=1;var d=32-q(n)+u;if(30<d){var b=u-u%5;d=(o&(1<<b)-1).toString(32),o>>=b,u-=b,La=1<<32-q(n)+u|a<<u|o,Oa=d+t}else La=1<<d|a<<u|o,Oa=t}function Sf(t){t.return!==null&&($s(t,1),Mm(t,1,0))}function Mf(t){for(;t===yc;)yc=Vr[--kr],Vr[kr]=null,Sc=Vr[--kr],Vr[kr]=null;for(;t===Js;)Js=ji[--Vi],ji[Vi]=null,Oa=ji[--Vi],ji[Vi]=null,La=ji[--Vi],ji[Vi]=null}var oi=null,xn=null,Xt=!1,er=null,ha=!1,bf=Error(s(519));function tr(t){var n=Error(s(418,""));throw el(Hi(n,t)),bf}function bm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[bn]=t,n[An]=o,a){case"dialog":Nt("cancel",n),Nt("close",n);break;case"iframe":case"object":case"embed":Nt("load",n);break;case"video":case"audio":for(a=0;a<El.length;a++)Nt(El[a],n);break;case"source":Nt("error",n);break;case"img":case"image":case"link":Nt("error",n),Nt("load",n);break;case"details":Nt("toggle",n);break;case"input":Nt("invalid",n),Gt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),an(n);break;case"select":Nt("invalid",n);break;case"textarea":Nt("invalid",n),Rn(n,o.value,o.defaultValue,o.children),an(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||H0(n.textContent,a)?(o.popover!=null&&(Nt("beforetoggle",n),Nt("toggle",n)),o.onScroll!=null&&Nt("scroll",n),o.onScrollEnd!=null&&Nt("scrollend",n),o.onClick!=null&&(n.onclick=tu),n=!0):n=!1,n||tr(t)}function Em(t){for(oi=t.return;oi;)switch(oi.tag){case 5:case 13:ha=!1;return;case 27:case 3:ha=!0;return;default:oi=oi.return}}function Jo(t){if(t!==oi)return!1;if(!Xt)return Em(t),Xt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Fd(t.type,t.memoizedProps)),a=!a),a&&xn&&tr(t),Em(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){xn=ta(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}xn=null}}else n===27?(n=xn,Ms(t.type)?(t=Vd,Vd=null,xn=t):xn=n):xn=oi?ta(t.stateNode.nextSibling):null;return!0}function $o(){xn=oi=null,Xt=!1}function Tm(){var t=er;return t!==null&&(mi===null?mi=t:mi.push.apply(mi,t),er=null),t}function el(t){er===null?er=[t]:er.push(t)}var Ef=se(null),nr=null,Pa=null;function os(t,n,a){Ne(Ef,n._currentValue),n._currentValue=a}function za(t){t._currentValue=Ef.current,Ae(Ef)}function Tf(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Af(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var b=u.child;d=d.firstContext;e:for(;d!==null;){var C=d;d=u;for(var V=0;V<n.length;V++)if(C.context===n[V]){d.lanes|=a,C=d.alternate,C!==null&&(C.lanes|=a),Tf(d.return,a,t),o||(b=null);break e}d=C.next}}else if(u.tag===18){if(b=u.return,b===null)throw Error(s(341));b.lanes|=a,d=b.alternate,d!==null&&(d.lanes|=a),Tf(b,a,t),b=null}else b=u.child;if(b!==null)b.return=u;else for(b=u;b!==null;){if(b===t){b=null;break}if(u=b.sibling,u!==null){u.return=b.return,b=u;break}b=b.return}u=b}}function tl(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var b=u.alternate;if(b===null)throw Error(s(387));if(b=b.memoizedProps,b!==null){var C=u.type;Ai(u.pendingProps.value,b.value)||(t!==null?t.push(C):t=[C])}}else if(u===Se.current){if(b=u.alternate,b===null)throw Error(s(387));b.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Dl):t=[Dl])}u=u.return}t!==null&&Af(n,t,a,o),n.flags|=262144}function Mc(t){for(t=t.firstContext;t!==null;){if(!Ai(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ir(t){nr=t,Pa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ei(t){return Am(nr,t)}function bc(t,n){return nr===null&&ir(t),Am(t,n)}function Am(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Pa===null){if(t===null)throw Error(s(308));Pa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Pa=Pa.next=n;return a}var Ix=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Bx=r.unstable_scheduleCallback,Fx=r.unstable_NormalPriority,Un={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rf(){return{controller:new Ix,data:new Map,refCount:0}}function nl(t){t.refCount--,t.refCount===0&&Bx(Fx,function(){t.controller.abort()})}var il=null,Cf=0,Xr=0,qr=null;function Hx(t,n){if(il===null){var a=il=[];Cf=0,Xr=Dd(),qr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Cf++,n.then(Rm,Rm),n}function Rm(){if(--Cf===0&&il!==null){qr!==null&&(qr.status="fulfilled");var t=il;il=null,Xr=0,qr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Gx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Cm=H.S;H.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Hx(t,n),Cm!==null&&Cm(t,n)};var ar=se(null);function wf(){var t=ar.current;return t!==null?t:sn.pooledCache}function Ec(t,n){n===null?Ne(ar,ar.current):Ne(ar,n.pool)}function wm(){var t=wf();return t===null?null:{parent:Un._currentValue,pool:t}}var al=Error(s(460)),Dm=Error(s(474)),Tc=Error(s(542)),Df={then:function(){}};function Nm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ac(){}function Um(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ac,Ac),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Om(t),t;default:if(typeof n.status=="string")n.then(Ac,Ac);else{if(t=sn,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Om(t),t}throw sl=n,al}}var sl=null;function Lm(){if(sl===null)throw Error(s(459));var t=sl;return sl=null,t}function Om(t){if(t===al||t===Tc)throw Error(s(483))}var ls=!1;function Nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function cs(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function us(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Wt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=vc(t),ym(t,null,a),n}return _c(t,o,n,a),vc(t)}function rl(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ct(t,a)}}function Lf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=b:d=d.next=b,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Of=!1;function ol(){if(Of){var t=qr;if(t!==null)throw t}}function ll(t,n,a,o){Of=!1;var u=t.updateQueue;ls=!1;var d=u.firstBaseUpdate,b=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var V=C,le=V.next;V.next=null,b===null?d=le:b.next=le,b=V;var be=t.alternate;be!==null&&(be=be.updateQueue,C=be.lastBaseUpdate,C!==b&&(C===null?be.firstBaseUpdate=le:C.next=le,be.lastBaseUpdate=V))}if(d!==null){var De=u.baseState;b=0,be=le=V=null,C=d;do{var de=C.lane&-536870913,ge=de!==C.lane;if(ge?(Ft&de)===de:(o&de)===de){de!==0&&de===Xr&&(Of=!0),be!==null&&(be=be.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var dt=t,ut=C;de=n;var Qt=a;switch(ut.tag){case 1:if(dt=ut.payload,typeof dt=="function"){De=dt.call(Qt,De,de);break e}De=dt;break e;case 3:dt.flags=dt.flags&-65537|128;case 0:if(dt=ut.payload,de=typeof dt=="function"?dt.call(Qt,De,de):dt,de==null)break e;De=v({},De,de);break e;case 2:ls=!0}}de=C.callback,de!==null&&(t.flags|=64,ge&&(t.flags|=8192),ge=u.callbacks,ge===null?u.callbacks=[de]:ge.push(de))}else ge={lane:de,tag:C.tag,payload:C.payload,callback:C.callback,next:null},be===null?(le=be=ge,V=De):be=be.next=ge,b|=de;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ge=C,C=ge.next,ge.next=null,u.lastBaseUpdate=ge,u.shared.pending=null}}while(!0);be===null&&(V=De),u.baseState=V,u.firstBaseUpdate=le,u.lastBaseUpdate=be,d===null&&(u.shared.lanes=0),vs|=b,t.lanes=b,t.memoizedState=De}}function Pm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function zm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Pm(a[t],n)}var Wr=se(null),Rc=se(0);function Im(t,n){t=Va,Ne(Rc,t),Ne(Wr,n),Va=t|n.baseLanes}function Pf(){Ne(Rc,Va),Ne(Wr,Wr.current)}function zf(){Va=Rc.current,Ae(Wr),Ae(Rc)}var fs=0,bt=null,Zt=null,Cn=null,Cc=!1,Yr=!1,sr=!1,wc=0,cl=0,Zr=null,jx=0;function En(){throw Error(s(321))}function If(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Ai(t[a],n[a]))return!1;return!0}function Bf(t,n,a,o,u,d){return fs=d,bt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=t===null||t.memoizedState===null?yg:Sg,sr=!1,d=a(o,u),sr=!1,Yr&&(d=Fm(n,a,o,u)),Bm(t),d}function Bm(t){H.H=Pc;var n=Zt!==null&&Zt.next!==null;if(fs=0,Cn=Zt=bt=null,Cc=!1,cl=0,Zr=null,n)throw Error(s(300));t===null||Hn||(t=t.dependencies,t!==null&&Mc(t)&&(Hn=!0))}function Fm(t,n,a,o){bt=t;var u=0;do{if(Yr&&(Zr=null),cl=0,Yr=!1,25<=u)throw Error(s(301));if(u+=1,Cn=Zt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}H.H=Zx,d=n(a,o)}while(Yr);return d}function Vx(){var t=H.H,n=t.useState()[0];return n=typeof n.then=="function"?ul(n):n,t=t.useState()[0],(Zt!==null?Zt.memoizedState:null)!==t&&(bt.flags|=1024),n}function Ff(){var t=wc!==0;return wc=0,t}function Hf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Gf(t){if(Cc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Cc=!1}fs=0,Cn=Zt=bt=null,Yr=!1,cl=wc=0,Zr=null}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?bt.memoizedState=Cn=t:Cn=Cn.next=t,Cn}function wn(){if(Zt===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var n=Cn===null?bt.memoizedState:Cn.next;if(n!==null)Cn=n,Zt=t;else{if(t===null)throw bt.alternate===null?Error(s(467)):Error(s(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},Cn===null?bt.memoizedState=Cn=t:Cn=Cn.next=t}return Cn}function jf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ul(t){var n=cl;return cl+=1,Zr===null&&(Zr=[]),t=Um(Zr,t,n),n=bt,(Cn===null?n.memoizedState:Cn.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?yg:Sg),t}function Dc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ul(t);if(t.$$typeof===L)return ei(t)}throw Error(s(438,String(t)))}function Vf(t){var n=null,a=bt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=bt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=jf(),bt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=R;return n.index++,a}function Ia(t,n){return typeof n=="function"?n(t):n}function Nc(t){var n=wn();return kf(n,Zt,t)}function kf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var b=u.next;u.next=d.next,d.next=b}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var C=b=null,V=null,le=n,be=!1;do{var De=le.lane&-536870913;if(De!==le.lane?(Ft&De)===De:(fs&De)===De){var de=le.revertLane;if(de===0)V!==null&&(V=V.next={lane:0,revertLane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),De===Xr&&(be=!0);else if((fs&de)===de){le=le.next,de===Xr&&(be=!0);continue}else De={lane:0,revertLane:le.revertLane,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},V===null?(C=V=De,b=d):V=V.next=De,bt.lanes|=de,vs|=de;De=le.action,sr&&a(d,De),d=le.hasEagerState?le.eagerState:a(d,De)}else de={lane:De,revertLane:le.revertLane,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},V===null?(C=V=de,b=d):V=V.next=de,bt.lanes|=De,vs|=De;le=le.next}while(le!==null&&le!==n);if(V===null?b=d:V.next=C,!Ai(d,t.memoizedState)&&(Hn=!0,be&&(a=qr,a!==null)))throw a;t.memoizedState=d,t.baseState=b,t.baseQueue=V,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Xf(t){var n=wn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do d=t(d,b.action),b=b.next;while(b!==u);Ai(d,n.memoizedState)||(Hn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Hm(t,n,a){var o=bt,u=wn(),d=Xt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var b=!Ai((Zt||u).memoizedState,a);b&&(u.memoizedState=a,Hn=!0),u=u.queue;var C=Vm.bind(null,o,u,t);if(fl(2048,8,C,[t]),u.getSnapshot!==n||b||Cn!==null&&Cn.memoizedState.tag&1){if(o.flags|=2048,Kr(9,Uc(),jm.bind(null,o,u,a,n),null),sn===null)throw Error(s(349));d||(fs&124)!==0||Gm(o,n,a)}return a}function Gm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=bt.updateQueue,n===null?(n=jf(),bt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function jm(t,n,a,o){n.value=a,n.getSnapshot=o,km(n)&&Xm(t)}function Vm(t,n,a){return a(function(){km(n)&&Xm(t)})}function km(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Ai(t,a)}catch{return!0}}function Xm(t){var n=Gr(t,2);n!==null&&Ui(n,t,2)}function qf(t){var n=hi();if(typeof t=="function"){var a=t;if(t=a(),sr){Le(!0);try{a()}finally{Le(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:t},n}function qm(t,n,a,o){return t.baseState=a,kf(t,Zt,typeof o=="function"?o:Ia)}function kx(t,n,a,o,u){if(Oc(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){d.listeners.push(b)}};H.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Wm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Wm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=H.T,b={};H.T=b;try{var C=a(u,o),V=H.S;V!==null&&V(b,C),Ym(t,n,C)}catch(le){Wf(t,n,le)}finally{H.T=d}}else try{d=a(u,o),Ym(t,n,d)}catch(le){Wf(t,n,le)}}function Ym(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Zm(t,n,o)},function(o){return Wf(t,n,o)}):Zm(t,n,a)}function Zm(t,n,a){n.status="fulfilled",n.value=a,Km(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Wm(t,a)))}function Wf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Km(n),n=n.next;while(n!==o)}t.action=null}function Km(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Qm(t,n){return n}function Jm(t,n){if(Xt){var a=sn.formState;if(a!==null){e:{var o=bt;if(Xt){if(xn){t:{for(var u=xn,d=ha;u.nodeType!==8;){if(!d){u=null;break t}if(u=ta(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){xn=ta(u.nextSibling),o=u.data==="F!";break e}}tr(o)}o=!1}o&&(n=a[0])}}return a=hi(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qm,lastRenderedState:n},a.queue=o,a=_g.bind(null,bt,o),o.dispatch=a,o=qf(!1),d=Jf.bind(null,bt,!1,o.queue),o=hi(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=kx.bind(null,bt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function $m(t){var n=wn();return eg(n,Zt,t)}function eg(t,n,a){if(n=kf(t,n,Qm)[0],t=Nc(Ia)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ul(n)}catch(b){throw b===al?Tc:b}else o=n;n=wn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(bt.flags|=2048,Kr(9,Uc(),Xx.bind(null,u,a),null)),[o,d,t]}function Xx(t,n){t.action=n}function tg(t){var n=wn(),a=Zt;if(a!==null)return eg(n,a,t);wn(),n=n.memoizedState,a=wn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Kr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=bt.updateQueue,n===null&&(n=jf(),bt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Uc(){return{destroy:void 0,resource:void 0}}function ng(){return wn().memoizedState}function Lc(t,n,a,o){var u=hi();o=o===void 0?null:o,bt.flags|=t,u.memoizedState=Kr(1|n,Uc(),a,o)}function fl(t,n,a,o){var u=wn();o=o===void 0?null:o;var d=u.memoizedState.inst;Zt!==null&&o!==null&&If(o,Zt.memoizedState.deps)?u.memoizedState=Kr(n,d,a,o):(bt.flags|=t,u.memoizedState=Kr(1|n,d,a,o))}function ig(t,n){Lc(8390656,8,t,n)}function ag(t,n){fl(2048,8,t,n)}function sg(t,n){return fl(4,2,t,n)}function rg(t,n){return fl(4,4,t,n)}function og(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function lg(t,n,a){a=a!=null?a.concat([t]):null,fl(4,4,og.bind(null,n,t),a)}function Yf(){}function cg(t,n){var a=wn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&If(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function ug(t,n){var a=wn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&If(n,o[1]))return o[0];if(o=t(),sr){Le(!0);try{t()}finally{Le(!1)}}return a.memoizedState=[o,n],o}function Zf(t,n,a){return a===void 0||(fs&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=h0(),bt.lanes|=t,vs|=t,a)}function fg(t,n,a,o){return Ai(a,n)?a:Wr.current!==null?(t=Zf(t,a,o),Ai(t,n)||(Hn=!0),t):(fs&42)===0?(Hn=!0,t.memoizedState=a):(t=h0(),bt.lanes|=t,vs|=t,n)}function dg(t,n,a,o,u){var d=ne.p;ne.p=d!==0&&8>d?d:8;var b=H.T,C={};H.T=C,Jf(t,!1,n,a);try{var V=u(),le=H.S;if(le!==null&&le(C,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var be=Gx(V,o);dl(t,n,be,Ni(t))}else dl(t,n,o,Ni(t))}catch(De){dl(t,n,{then:function(){},status:"rejected",reason:De},Ni())}finally{ne.p=d,H.T=b}}function qx(){}function Kf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=hg(t).queue;dg(t,u,n,Y,a===null?qx:function(){return pg(t),a(o)})}function hg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function pg(t){var n=hg(t).next.queue;dl(t,n,{},Ni())}function Qf(){return ei(Dl)}function mg(){return wn().memoizedState}function gg(){return wn().memoizedState}function Wx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ni();t=cs(a);var o=us(n,t,a);o!==null&&(Ui(o,n,a),rl(o,n,a)),n={cache:Rf()},t.payload=n;return}n=n.return}}function Yx(t,n,a){var o=Ni();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Oc(t)?vg(n,a):(a=_f(t,n,a,o),a!==null&&(Ui(a,t,o),xg(a,n,o)))}function _g(t,n,a){var o=Ni();dl(t,n,a,o)}function dl(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Oc(t))vg(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var b=n.lastRenderedState,C=d(b,a);if(u.hasEagerState=!0,u.eagerState=C,Ai(C,b))return _c(t,n,u,0),sn===null&&gc(),!1}catch{}finally{}if(a=_f(t,n,u,o),a!==null)return Ui(a,t,o),xg(a,n,o),!0}return!1}function Jf(t,n,a,o){if(o={lane:2,revertLane:Dd(),action:o,hasEagerState:!1,eagerState:null,next:null},Oc(t)){if(n)throw Error(s(479))}else n=_f(t,a,o,2),n!==null&&Ui(n,t,2)}function Oc(t){var n=t.alternate;return t===bt||n!==null&&n===bt}function vg(t,n){Yr=Cc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function xg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ct(t,a)}}var Pc={readContext:ei,use:Dc,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useLayoutEffect:En,useInsertionEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useSyncExternalStore:En,useId:En,useHostTransitionStatus:En,useFormState:En,useActionState:En,useOptimistic:En,useMemoCache:En,useCacheRefresh:En},yg={readContext:ei,use:Dc,useCallback:function(t,n){return hi().memoizedState=[t,n===void 0?null:n],t},useContext:ei,useEffect:ig,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Lc(4194308,4,og.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Lc(4194308,4,t,n)},useInsertionEffect:function(t,n){Lc(4,2,t,n)},useMemo:function(t,n){var a=hi();n=n===void 0?null:n;var o=t();if(sr){Le(!0);try{t()}finally{Le(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=hi();if(a!==void 0){var u=a(n);if(sr){Le(!0);try{a(n)}finally{Le(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Yx.bind(null,bt,t),[o.memoizedState,t]},useRef:function(t){var n=hi();return t={current:t},n.memoizedState=t},useState:function(t){t=qf(t);var n=t.queue,a=_g.bind(null,bt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Yf,useDeferredValue:function(t,n){var a=hi();return Zf(a,t,n)},useTransition:function(){var t=qf(!1);return t=dg.bind(null,bt,t.queue,!0,!1),hi().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=bt,u=hi();if(Xt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),sn===null)throw Error(s(349));(Ft&124)!==0||Gm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,ig(Vm.bind(null,o,d,t),[t]),o.flags|=2048,Kr(9,Uc(),jm.bind(null,o,d,a,n),null),a},useId:function(){var t=hi(),n=sn.identifierPrefix;if(Xt){var a=Oa,o=La;a=(o&~(1<<32-q(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=wc++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=jx++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Qf,useFormState:Jm,useActionState:Jm,useOptimistic:function(t){var n=hi();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Jf.bind(null,bt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Vf,useCacheRefresh:function(){return hi().memoizedState=Wx.bind(null,bt)}},Sg={readContext:ei,use:Dc,useCallback:cg,useContext:ei,useEffect:ag,useImperativeHandle:lg,useInsertionEffect:sg,useLayoutEffect:rg,useMemo:ug,useReducer:Nc,useRef:ng,useState:function(){return Nc(Ia)},useDebugValue:Yf,useDeferredValue:function(t,n){var a=wn();return fg(a,Zt.memoizedState,t,n)},useTransition:function(){var t=Nc(Ia)[0],n=wn().memoizedState;return[typeof t=="boolean"?t:ul(t),n]},useSyncExternalStore:Hm,useId:mg,useHostTransitionStatus:Qf,useFormState:$m,useActionState:$m,useOptimistic:function(t,n){var a=wn();return qm(a,Zt,t,n)},useMemoCache:Vf,useCacheRefresh:gg},Zx={readContext:ei,use:Dc,useCallback:cg,useContext:ei,useEffect:ag,useImperativeHandle:lg,useInsertionEffect:sg,useLayoutEffect:rg,useMemo:ug,useReducer:Xf,useRef:ng,useState:function(){return Xf(Ia)},useDebugValue:Yf,useDeferredValue:function(t,n){var a=wn();return Zt===null?Zf(a,t,n):fg(a,Zt.memoizedState,t,n)},useTransition:function(){var t=Xf(Ia)[0],n=wn().memoizedState;return[typeof t=="boolean"?t:ul(t),n]},useSyncExternalStore:Hm,useId:mg,useHostTransitionStatus:Qf,useFormState:tg,useActionState:tg,useOptimistic:function(t,n){var a=wn();return Zt!==null?qm(a,Zt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Vf,useCacheRefresh:gg},Qr=null,hl=0;function zc(t){var n=hl;return hl+=1,Qr===null&&(Qr=[]),Um(Qr,t,n)}function pl(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ic(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Mg(t){var n=t._init;return n(t._payload)}function bg(t){function n(te,W){if(t){var oe=te.deletions;oe===null?(te.deletions=[W],te.flags|=16):oe.push(W)}}function a(te,W){if(!t)return null;for(;W!==null;)n(te,W),W=W.sibling;return null}function o(te){for(var W=new Map;te!==null;)te.key!==null?W.set(te.key,te):W.set(te.index,te),te=te.sibling;return W}function u(te,W){return te=Ua(te,W),te.index=0,te.sibling=null,te}function d(te,W,oe){return te.index=oe,t?(oe=te.alternate,oe!==null?(oe=oe.index,oe<W?(te.flags|=67108866,W):oe):(te.flags|=67108866,W)):(te.flags|=1048576,W)}function b(te){return t&&te.alternate===null&&(te.flags|=67108866),te}function C(te,W,oe,Re){return W===null||W.tag!==6?(W=xf(oe,te.mode,Re),W.return=te,W):(W=u(W,oe),W.return=te,W)}function V(te,W,oe,Re){var Ke=oe.type;return Ke===E?be(te,W,oe.props.children,Re,oe.key):W!==null&&(W.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===I&&Mg(Ke)===W.type)?(W=u(W,oe.props),pl(W,oe),W.return=te,W):(W=xc(oe.type,oe.key,oe.props,null,te.mode,Re),pl(W,oe),W.return=te,W)}function le(te,W,oe,Re){return W===null||W.tag!==4||W.stateNode.containerInfo!==oe.containerInfo||W.stateNode.implementation!==oe.implementation?(W=yf(oe,te.mode,Re),W.return=te,W):(W=u(W,oe.children||[]),W.return=te,W)}function be(te,W,oe,Re,Ke){return W===null||W.tag!==7?(W=Qs(oe,te.mode,Re,Ke),W.return=te,W):(W=u(W,oe),W.return=te,W)}function De(te,W,oe){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=xf(""+W,te.mode,oe),W.return=te,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return oe=xc(W.type,W.key,W.props,null,te.mode,oe),pl(oe,W),oe.return=te,oe;case M:return W=yf(W,te.mode,oe),W.return=te,W;case I:var Re=W._init;return W=Re(W._payload),De(te,W,oe)}if(fe(W)||J(W))return W=Qs(W,te.mode,oe,null),W.return=te,W;if(typeof W.then=="function")return De(te,zc(W),oe);if(W.$$typeof===L)return De(te,bc(te,W),oe);Ic(te,W)}return null}function de(te,W,oe,Re){var Ke=W!==null?W.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return Ke!==null?null:C(te,W,""+oe,Re);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case S:return oe.key===Ke?V(te,W,oe,Re):null;case M:return oe.key===Ke?le(te,W,oe,Re):null;case I:return Ke=oe._init,oe=Ke(oe._payload),de(te,W,oe,Re)}if(fe(oe)||J(oe))return Ke!==null?null:be(te,W,oe,Re,null);if(typeof oe.then=="function")return de(te,W,zc(oe),Re);if(oe.$$typeof===L)return de(te,W,bc(te,oe),Re);Ic(te,oe)}return null}function ge(te,W,oe,Re,Ke){if(typeof Re=="string"&&Re!==""||typeof Re=="number"||typeof Re=="bigint")return te=te.get(oe)||null,C(W,te,""+Re,Ke);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case S:return te=te.get(Re.key===null?oe:Re.key)||null,V(W,te,Re,Ke);case M:return te=te.get(Re.key===null?oe:Re.key)||null,le(W,te,Re,Ke);case I:var Et=Re._init;return Re=Et(Re._payload),ge(te,W,oe,Re,Ke)}if(fe(Re)||J(Re))return te=te.get(oe)||null,be(W,te,Re,Ke,null);if(typeof Re.then=="function")return ge(te,W,oe,zc(Re),Ke);if(Re.$$typeof===L)return ge(te,W,oe,bc(W,Re),Ke);Ic(W,Re)}return null}function dt(te,W,oe,Re){for(var Ke=null,Et=null,it=W,ft=W=0,jn=null;it!==null&&ft<oe.length;ft++){it.index>ft?(jn=it,it=null):jn=it.sibling;var jt=de(te,it,oe[ft],Re);if(jt===null){it===null&&(it=jn);break}t&&it&&jt.alternate===null&&n(te,it),W=d(jt,W,ft),Et===null?Ke=jt:Et.sibling=jt,Et=jt,it=jn}if(ft===oe.length)return a(te,it),Xt&&$s(te,ft),Ke;if(it===null){for(;ft<oe.length;ft++)it=De(te,oe[ft],Re),it!==null&&(W=d(it,W,ft),Et===null?Ke=it:Et.sibling=it,Et=it);return Xt&&$s(te,ft),Ke}for(it=o(it);ft<oe.length;ft++)jn=ge(it,te,ft,oe[ft],Re),jn!==null&&(t&&jn.alternate!==null&&it.delete(jn.key===null?ft:jn.key),W=d(jn,W,ft),Et===null?Ke=jn:Et.sibling=jn,Et=jn);return t&&it.forEach(function(Rs){return n(te,Rs)}),Xt&&$s(te,ft),Ke}function ut(te,W,oe,Re){if(oe==null)throw Error(s(151));for(var Ke=null,Et=null,it=W,ft=W=0,jn=null,jt=oe.next();it!==null&&!jt.done;ft++,jt=oe.next()){it.index>ft?(jn=it,it=null):jn=it.sibling;var Rs=de(te,it,jt.value,Re);if(Rs===null){it===null&&(it=jn);break}t&&it&&Rs.alternate===null&&n(te,it),W=d(Rs,W,ft),Et===null?Ke=Rs:Et.sibling=Rs,Et=Rs,it=jn}if(jt.done)return a(te,it),Xt&&$s(te,ft),Ke;if(it===null){for(;!jt.done;ft++,jt=oe.next())jt=De(te,jt.value,Re),jt!==null&&(W=d(jt,W,ft),Et===null?Ke=jt:Et.sibling=jt,Et=jt);return Xt&&$s(te,ft),Ke}for(it=o(it);!jt.done;ft++,jt=oe.next())jt=ge(it,te,ft,jt.value,Re),jt!==null&&(t&&jt.alternate!==null&&it.delete(jt.key===null?ft:jt.key),W=d(jt,W,ft),Et===null?Ke=jt:Et.sibling=jt,Et=jt);return t&&it.forEach(function(Ky){return n(te,Ky)}),Xt&&$s(te,ft),Ke}function Qt(te,W,oe,Re){if(typeof oe=="object"&&oe!==null&&oe.type===E&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case S:e:{for(var Ke=oe.key;W!==null;){if(W.key===Ke){if(Ke=oe.type,Ke===E){if(W.tag===7){a(te,W.sibling),Re=u(W,oe.props.children),Re.return=te,te=Re;break e}}else if(W.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===I&&Mg(Ke)===W.type){a(te,W.sibling),Re=u(W,oe.props),pl(Re,oe),Re.return=te,te=Re;break e}a(te,W);break}else n(te,W);W=W.sibling}oe.type===E?(Re=Qs(oe.props.children,te.mode,Re,oe.key),Re.return=te,te=Re):(Re=xc(oe.type,oe.key,oe.props,null,te.mode,Re),pl(Re,oe),Re.return=te,te=Re)}return b(te);case M:e:{for(Ke=oe.key;W!==null;){if(W.key===Ke)if(W.tag===4&&W.stateNode.containerInfo===oe.containerInfo&&W.stateNode.implementation===oe.implementation){a(te,W.sibling),Re=u(W,oe.children||[]),Re.return=te,te=Re;break e}else{a(te,W);break}else n(te,W);W=W.sibling}Re=yf(oe,te.mode,Re),Re.return=te,te=Re}return b(te);case I:return Ke=oe._init,oe=Ke(oe._payload),Qt(te,W,oe,Re)}if(fe(oe))return dt(te,W,oe,Re);if(J(oe)){if(Ke=J(oe),typeof Ke!="function")throw Error(s(150));return oe=Ke.call(oe),ut(te,W,oe,Re)}if(typeof oe.then=="function")return Qt(te,W,zc(oe),Re);if(oe.$$typeof===L)return Qt(te,W,bc(te,oe),Re);Ic(te,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,W!==null&&W.tag===6?(a(te,W.sibling),Re=u(W,oe),Re.return=te,te=Re):(a(te,W),Re=xf(oe,te.mode,Re),Re.return=te,te=Re),b(te)):a(te,W)}return function(te,W,oe,Re){try{hl=0;var Ke=Qt(te,W,oe,Re);return Qr=null,Ke}catch(it){if(it===al||it===Tc)throw it;var Et=Ri(29,it,null,te.mode);return Et.lanes=Re,Et.return=te,Et}finally{}}}var Jr=bg(!0),Eg=bg(!1),ki=se(null),pa=null;function ds(t){var n=t.alternate;Ne(Ln,Ln.current&1),Ne(ki,t),pa===null&&(n===null||Wr.current!==null||n.memoizedState!==null)&&(pa=t)}function Tg(t){if(t.tag===22){if(Ne(Ln,Ln.current),Ne(ki,t),pa===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(pa=t)}}else hs()}function hs(){Ne(Ln,Ln.current),Ne(ki,ki.current)}function Ba(t){Ae(ki),pa===t&&(pa=null),Ae(Ln)}var Ln=se(0);function Bc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||jd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function $f(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ed={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Ni(),u=cs(o);u.payload=n,a!=null&&(u.callback=a),n=us(t,u,o),n!==null&&(Ui(n,t,o),rl(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Ni(),u=cs(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=us(t,u,o),n!==null&&(Ui(n,t,o),rl(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Ni(),o=cs(a);o.tag=2,n!=null&&(o.callback=n),n=us(t,o,a),n!==null&&(Ui(n,t,a),rl(n,t,a))}};function Ag(t,n,a,o,u,d,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,b):n.prototype&&n.prototype.isPureReactComponent?!Ko(a,o)||!Ko(u,d):!0}function Rg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&ed.enqueueReplaceState(n,n.state,null)}function rr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Fc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Cg(t){Fc(t)}function wg(t){console.error(t)}function Dg(t){Fc(t)}function Hc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ng(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function td(t,n,a){return a=cs(a),a.tag=3,a.payload={element:null},a.callback=function(){Hc(t,n)},a}function Ug(t){return t=cs(t),t.tag=3,t}function Lg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){Ng(n,a,o)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){Ng(n,a,o),typeof u!="function"&&(xs===null?xs=new Set([this]):xs.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function Kx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&tl(n,a,u,!0),a=ki.current,a!==null){switch(a.tag){case 13:return pa===null?Td():a.alternate===null&&yn===0&&(yn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Df?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Rd(t,o,u)),!1;case 22:return a.flags|=65536,o===Df?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Rd(t,o,u)),!1}throw Error(s(435,a.tag))}return Rd(t,o,u),Td(),!1}if(Xt)return n=ki.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==bf&&(t=Error(s(422),{cause:o}),el(Hi(t,a)))):(o!==bf&&(n=Error(s(423),{cause:o}),el(Hi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Hi(o,a),u=td(t.stateNode,o,u),Lf(t,u),yn!==4&&(yn=2)),!1;var d=Error(s(520),{cause:o});if(d=Hi(d,a),Sl===null?Sl=[d]:Sl.push(d),yn!==4&&(yn=2),n===null)return!0;o=Hi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=td(a.stateNode,o,t),Lf(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(xs===null||!xs.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Ug(u),Lg(u,t,a,o),Lf(a,u),!1}a=a.return}while(a!==null);return!1}var Og=Error(s(461)),Hn=!1;function Xn(t,n,a,o){n.child=t===null?Eg(n,null,a,o):Jr(n,t.child,a,o)}function Pg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var b={};for(var C in o)C!=="ref"&&(b[C]=o[C])}else b=o;return ir(n),o=Bf(t,n,a,b,d,u),C=Ff(),t!==null&&!Hn?(Hf(t,n,u),Fa(t,n,u)):(Xt&&C&&Sf(n),n.flags|=1,Xn(t,n,o,u),n.child)}function zg(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!vf(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Ig(t,n,d,o,u)):(t=xc(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!cd(t,u)){var b=d.memoizedProps;if(a=a.compare,a=a!==null?a:Ko,a(b,o)&&t.ref===n.ref)return Fa(t,n,u)}return n.flags|=1,t=Ua(d,o),t.ref=n.ref,t.return=n,n.child=t}function Ig(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(Ko(d,o)&&t.ref===n.ref)if(Hn=!1,n.pendingProps=o=d,cd(t,u))(t.flags&131072)!==0&&(Hn=!0);else return n.lanes=t.lanes,Fa(t,n,u)}return nd(t,n,a,o,u)}function Bg(t,n,a){var o=n.pendingProps,u=o.children,d=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,t!==null){for(u=n.child=t.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return Fg(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ec(n,d!==null?d.cachePool:null),d!==null?Im(n,d):Pf(),Tg(n);else return n.lanes=n.childLanes=536870912,Fg(t,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(Ec(n,d.cachePool),Im(n,d),hs(),n.memoizedState=null):(t!==null&&Ec(n,null),Pf(),hs());return Xn(t,n,u,a),n.child}function Fg(t,n,a,o){var u=wf();return u=u===null?null:{parent:Un._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Ec(n,null),Pf(),Tg(n),t!==null&&tl(t,n,o,!0),null}function Gc(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function nd(t,n,a,o,u){return ir(n),a=Bf(t,n,a,o,void 0,u),o=Ff(),t!==null&&!Hn?(Hf(t,n,u),Fa(t,n,u)):(Xt&&o&&Sf(n),n.flags|=1,Xn(t,n,a,u),n.child)}function Hg(t,n,a,o,u,d){return ir(n),n.updateQueue=null,a=Fm(n,o,a,u),Bm(t),o=Ff(),t!==null&&!Hn?(Hf(t,n,d),Fa(t,n,d)):(Xt&&o&&Sf(n),n.flags|=1,Xn(t,n,a,d),n.child)}function Gg(t,n,a,o,u){if(ir(n),n.stateNode===null){var d=jr,b=a.contextType;typeof b=="object"&&b!==null&&(d=ei(b)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ed,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Nf(n),b=a.contextType,d.context=typeof b=="object"&&b!==null?ei(b):jr,d.state=n.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&($f(n,a,b,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(b=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),b!==d.state&&ed.enqueueReplaceState(d,d.state,null),ll(n,o,d,u),ol(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var C=n.memoizedProps,V=rr(a,C);d.props=V;var le=d.context,be=a.contextType;b=jr,typeof be=="object"&&be!==null&&(b=ei(be));var De=a.getDerivedStateFromProps;be=typeof De=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,be||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||le!==b)&&Rg(n,d,o,b),ls=!1;var de=n.memoizedState;d.state=de,ll(n,o,d,u),ol(),le=n.memoizedState,C||de!==le||ls?(typeof De=="function"&&($f(n,a,De,o),le=n.memoizedState),(V=ls||Ag(n,a,V,o,de,le,b))?(be||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=le),d.props=o,d.state=le,d.context=b,o=V):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Uf(t,n),b=n.memoizedProps,be=rr(a,b),d.props=be,De=n.pendingProps,de=d.context,le=a.contextType,V=jr,typeof le=="object"&&le!==null&&(V=ei(le)),C=a.getDerivedStateFromProps,(le=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==De||de!==V)&&Rg(n,d,o,V),ls=!1,de=n.memoizedState,d.state=de,ll(n,o,d,u),ol();var ge=n.memoizedState;b!==De||de!==ge||ls||t!==null&&t.dependencies!==null&&Mc(t.dependencies)?(typeof C=="function"&&($f(n,a,C,o),ge=n.memoizedState),(be=ls||Ag(n,a,be,o,de,ge,V)||t!==null&&t.dependencies!==null&&Mc(t.dependencies))?(le||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ge,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ge,V)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===t.memoizedProps&&de===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&de===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ge),d.props=o,d.state=ge,d.context=V,o=be):(typeof d.componentDidUpdate!="function"||b===t.memoizedProps&&de===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&de===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Gc(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Jr(n,t.child,null,u),n.child=Jr(n,null,a,u)):Xn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=Fa(t,n,u),t}function jg(t,n,a,o){return $o(),n.flags|=256,Xn(t,n,a,o),n.child}var id={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ad(t){return{baseLanes:t,cachePool:wm()}}function sd(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Xi),t}function Vg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,b;if((b=d)||(b=t!==null&&t.memoizedState===null?!1:(Ln.current&2)!==0),b&&(u=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,t===null){if(Xt){if(u?ds(n):hs(),Xt){var C=xn,V;if(V=C){e:{for(V=C,C=ha;V.nodeType!==8;){if(!C){C=null;break e}if(V=ta(V.nextSibling),V===null){C=null;break e}}C=V}C!==null?(n.memoizedState={dehydrated:C,treeContext:Js!==null?{id:La,overflow:Oa}:null,retryLane:536870912,hydrationErrors:null},V=Ri(18,null,null,0),V.stateNode=C,V.return=n,n.child=V,oi=n,xn=null,V=!0):V=!1}V||tr(n)}if(C=n.memoizedState,C!==null&&(C=C.dehydrated,C!==null))return jd(C)?n.lanes=32:n.lanes=536870912,null;Ba(n)}return C=o.children,o=o.fallback,u?(hs(),u=n.mode,C=jc({mode:"hidden",children:C},u),o=Qs(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,u=n.child,u.memoizedState=ad(a),u.childLanes=sd(t,b,a),n.memoizedState=id,o):(ds(n),rd(n,C))}if(V=t.memoizedState,V!==null&&(C=V.dehydrated,C!==null)){if(d)n.flags&256?(ds(n),n.flags&=-257,n=od(t,n,a)):n.memoizedState!==null?(hs(),n.child=t.child,n.flags|=128,n=null):(hs(),u=o.fallback,C=n.mode,o=jc({mode:"visible",children:o.children},C),u=Qs(u,C,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Jr(n,t.child,null,a),o=n.child,o.memoizedState=ad(a),o.childLanes=sd(t,b,a),n.memoizedState=id,n=u);else if(ds(n),jd(C)){if(b=C.nextSibling&&C.nextSibling.dataset,b)var le=b.dgst;b=le,o=Error(s(419)),o.stack="",o.digest=b,el({value:o,source:null,stack:null}),n=od(t,n,a)}else if(Hn||tl(t,n,a,!1),b=(a&t.childLanes)!==0,Hn||b){if(b=sn,b!==null&&(o=a&-a,o=(o&42)!==0?1:It(o),o=(o&(b.suspendedLanes|a))!==0?0:o,o!==0&&o!==V.retryLane))throw V.retryLane=o,Gr(t,o),Ui(b,t,o),Og;C.data==="$?"||Td(),n=od(t,n,a)}else C.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,xn=ta(C.nextSibling),oi=n,Xt=!0,er=null,ha=!1,t!==null&&(ji[Vi++]=La,ji[Vi++]=Oa,ji[Vi++]=Js,La=t.id,Oa=t.overflow,Js=n),n=rd(n,o.children),n.flags|=4096);return n}return u?(hs(),u=o.fallback,C=n.mode,V=t.child,le=V.sibling,o=Ua(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,le!==null?u=Ua(le,u):(u=Qs(u,C,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,C=t.child.memoizedState,C===null?C=ad(a):(V=C.cachePool,V!==null?(le=Un._currentValue,V=V.parent!==le?{parent:le,pool:le}:V):V=wm(),C={baseLanes:C.baseLanes|a,cachePool:V}),u.memoizedState=C,u.childLanes=sd(t,b,a),n.memoizedState=id,o):(ds(n),a=t.child,t=a.sibling,a=Ua(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(b=n.deletions,b===null?(n.deletions=[t],n.flags|=16):b.push(t)),n.child=a,n.memoizedState=null,a)}function rd(t,n){return n=jc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function jc(t,n){return t=Ri(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function od(t,n,a){return Jr(n,t.child,null,a),t=rd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function kg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Tf(t.return,n,a)}function ld(t,n,a,o,u){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function Xg(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(Xn(t,n,o.children,a),o=Ln.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kg(t,a,n);else if(t.tag===19)kg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Ne(Ln,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Bc(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),ld(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Bc(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}ld(n,!0,a,null,d);break;case"together":ld(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Fa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),vs|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(tl(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ua(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ua(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function cd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Mc(t)))}function Qx(t,n,a){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),os(n,Un,t.memoizedState.cache),$o();break;case 27:case 5:Ie(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:os(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ds(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Vg(t,n,a):(ds(n),t=Fa(t,n,a),t!==null?t.sibling:null);ds(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(tl(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Xg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ne(Ln,Ln.current),o)break;return null;case 22:case 23:return n.lanes=0,Bg(t,n,a);case 24:os(n,Un,t.memoizedState.cache)}return Fa(t,n,a)}function qg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Hn=!0;else{if(!cd(t,a)&&(n.flags&128)===0)return Hn=!1,Qx(t,n,a);Hn=(t.flags&131072)!==0}else Hn=!1,Xt&&(n.flags&1048576)!==0&&Mm(n,Sc,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")vf(o)?(t=rr(o,t),n.tag=1,n=Gg(null,n,o,t,a)):(n.tag=0,n=nd(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===U){n.tag=11,n=Pg(null,n,o,t,a);break e}else if(u===j){n.tag=14,n=zg(null,n,o,t,a);break e}}throw n=_e(o)||o,Error(s(306,n,""))}}return n;case 0:return nd(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=rr(o,n.pendingProps),Gg(t,n,o,u,a);case 3:e:{if(Te(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Uf(t,n),ll(n,o,null,a);var b=n.memoizedState;if(o=b.cache,os(n,Un,o),o!==d.cache&&Af(n,[Un],a,!0),ol(),o=b.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=jg(t,n,o,a);break e}else if(o!==u){u=Hi(Error(s(424)),n),el(u),n=jg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(xn=ta(t.firstChild),oi=n,Xt=!0,er=null,ha=!0,a=Eg(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if($o(),o===u){n=Fa(t,n,a);break e}Xn(t,n,o,a)}n=n.child}return n;case 26:return Gc(t,n),t===null?(a=K0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Xt||(a=n.type,t=n.pendingProps,o=nu(ce.current).createElement(a),o[bn]=n,o[An]=t,Wn(o,a,t),kt(o),n.stateNode=o):n.memoizedState=K0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ie(n),t===null&&Xt&&(o=n.stateNode=W0(n.type,n.pendingProps,ce.current),oi=n,ha=!0,u=xn,Ms(n.type)?(Vd=u,xn=ta(o.firstChild)):xn=u),Xn(t,n,n.pendingProps.children,a),Gc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Xt&&((u=o=xn)&&(o=Ty(o,n.type,n.pendingProps,ha),o!==null?(n.stateNode=o,oi=n,xn=ta(o.firstChild),ha=!1,u=!0):u=!1),u||tr(n)),Ie(n),u=n.type,d=n.pendingProps,b=t!==null?t.memoizedProps:null,o=d.children,Fd(u,d)?o=null:b!==null&&Fd(u,b)&&(n.flags|=32),n.memoizedState!==null&&(u=Bf(t,n,Vx,null,null,a),Dl._currentValue=u),Gc(t,n),Xn(t,n,o,a),n.child;case 6:return t===null&&Xt&&((t=a=xn)&&(a=Ay(a,n.pendingProps,ha),a!==null?(n.stateNode=a,oi=n,xn=null,t=!0):t=!1),t||tr(n)),null;case 13:return Vg(t,n,a);case 4:return Te(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Jr(n,null,o,a):Xn(t,n,o,a),n.child;case 11:return Pg(t,n,n.type,n.pendingProps,a);case 7:return Xn(t,n,n.pendingProps,a),n.child;case 8:return Xn(t,n,n.pendingProps.children,a),n.child;case 12:return Xn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,os(n,n.type,o.value),Xn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ir(n),u=ei(u),o=o(u),n.flags|=1,Xn(t,n,o,a),n.child;case 14:return zg(t,n,n.type,n.pendingProps,a);case 15:return Ig(t,n,n.type,n.pendingProps,a);case 19:return Xg(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=jc(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ua(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Bg(t,n,a);case 24:return ir(n),o=ei(Un),t===null?(u=wf(),u===null&&(u=sn,d=Rf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Nf(n),os(n,Un,u)):((t.lanes&a)!==0&&(Uf(t,n),ll(n,null,null,a),ol()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),os(n,Un,o)):(o=d.cache,os(n,Un,o),o!==u.cache&&Af(n,[Un],a,!0))),Xn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ha(t){t.flags|=4}function Wg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!t_(n)){if(n=ki.current,n!==null&&((Ft&4194048)===Ft?pa!==null:(Ft&62914560)!==Ft&&(Ft&536870912)===0||n!==pa))throw sl=Df,Dm;t.flags|=8192}}function Vc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Be():536870912,t.lanes|=n,no|=n)}function ml(t,n){if(!Xt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function gn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Jx(t,n,a){var o=n.pendingProps;switch(Mf(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(n),null;case 1:return gn(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),za(Un),Qe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Jo(n)?Ha(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tm())),gn(n),null;case 26:return a=n.memoizedState,t===null?(Ha(n),a!==null?(gn(n),Wg(n,a)):(gn(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Ha(n),gn(n),Wg(n,a)):(gn(n),n.flags&=-16777217):(t.memoizedProps!==o&&Ha(n),gn(n),n.flags&=-16777217),null;case 27:ke(n),a=ce.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ha(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return gn(n),null}t=ee.current,Jo(n)?bm(n):(t=W0(u,o,a),n.stateNode=t,Ha(n))}return gn(n),null;case 5:if(ke(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ha(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return gn(n),null}if(t=ee.current,Jo(n))bm(n);else{switch(u=nu(ce.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[bn]=n,t[An]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(Wn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Ha(n)}}return gn(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Ha(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ce.current,Jo(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=oi,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[bn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||H0(t.nodeValue,a)),t||tr(n)}else t=nu(t).createTextNode(o),t[bn]=n,n.stateNode=t}return gn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Jo(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[bn]=n}else $o(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;gn(n),u=!1}else u=Tm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ba(n),n):(Ba(n),null)}if(Ba(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Vc(n,n.updateQueue),gn(n),null;case 4:return Qe(),t===null&&Od(n.stateNode.containerInfo),gn(n),null;case 10:return za(n.type),gn(n),null;case 19:if(Ae(Ln),u=n.memoizedState,u===null)return gn(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)ml(u,!1);else{if(yn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Bc(t),d!==null){for(n.flags|=128,ml(u,!1),t=d.updateQueue,n.updateQueue=t,Vc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Sm(a,t),a=a.sibling;return Ne(Ln,Ln.current&1|2),n.child}t=t.sibling}u.tail!==null&&lt()>qc&&(n.flags|=128,o=!0,ml(u,!1),n.lanes=4194304)}else{if(!o)if(t=Bc(d),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Vc(n,t),ml(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Xt)return gn(n),null}else 2*lt()-u.renderingStartTime>qc&&a!==536870912&&(n.flags|=128,o=!0,ml(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(t=u.last,t!==null?t.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=lt(),n.sibling=null,t=Ln.current,Ne(Ln,o?t&1|2:t&1),n):(gn(n),null);case 22:case 23:return Ba(n),zf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(gn(n),n.subtreeFlags&6&&(n.flags|=8192)):gn(n),a=n.updateQueue,a!==null&&Vc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Ae(ar),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),za(Un),gn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function $x(t,n){switch(Mf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return za(Un),Qe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ke(n),null;case 13:if(Ba(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));$o()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Ae(Ln),null;case 4:return Qe(),null;case 10:return za(n.type),null;case 22:case 23:return Ba(n),zf(),t!==null&&Ae(ar),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return za(Un),null;case 25:return null;default:return null}}function Yg(t,n){switch(Mf(n),n.tag){case 3:za(Un),Qe();break;case 26:case 27:case 5:ke(n);break;case 4:Qe();break;case 13:Ba(n);break;case 19:Ae(Ln);break;case 10:za(n.type);break;case 22:case 23:Ba(n),zf(),t!==null&&Ae(ar);break;case 24:za(Un)}}function gl(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,b=a.inst;o=d(),b.destroy=o}a=a.next}while(a!==u)}}catch(C){tn(n,n.return,C)}}function ps(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var b=o.inst,C=b.destroy;if(C!==void 0){b.destroy=void 0,u=n;var V=a,le=C;try{le()}catch(be){tn(u,V,be)}}}o=o.next}while(o!==d)}}catch(be){tn(n,n.return,be)}}function Zg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{zm(n,a)}catch(o){tn(t,t.return,o)}}}function Kg(t,n,a){a.props=rr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){tn(t,n,o)}}function _l(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){tn(t,n,u)}}function ma(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){tn(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){tn(t,n,u)}else a.current=null}function Qg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){tn(t,t.return,u)}}function ud(t,n,a){try{var o=t.stateNode;yy(o,t.type,a,n),o[An]=n}catch(u){tn(t,t.return,u)}}function Jg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ms(t.type)||t.tag===4}function fd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ms(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dd(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=tu));else if(o!==4&&(o===27&&Ms(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(dd(t,n,a),t=t.sibling;t!==null;)dd(t,n,a),t=t.sibling}function kc(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ms(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(kc(t,n,a),t=t.sibling;t!==null;)kc(t,n,a),t=t.sibling}function $g(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Wn(n,o,a),n[bn]=t,n[An]=a}catch(d){tn(t,t.return,d)}}var Ga=!1,Tn=!1,hd=!1,e0=typeof WeakSet=="function"?WeakSet:Set,Gn=null;function ey(t,n){if(t=t.containerInfo,Id=lu,t=fm(t),ff(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var b=0,C=-1,V=-1,le=0,be=0,De=t,de=null;t:for(;;){for(var ge;De!==a||u!==0&&De.nodeType!==3||(C=b+u),De!==d||o!==0&&De.nodeType!==3||(V=b+o),De.nodeType===3&&(b+=De.nodeValue.length),(ge=De.firstChild)!==null;)de=De,De=ge;for(;;){if(De===t)break t;if(de===a&&++le===u&&(C=b),de===d&&++be===o&&(V=b),(ge=De.nextSibling)!==null)break;De=de,de=De.parentNode}De=ge}a=C===-1||V===-1?null:{start:C,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bd={focusedElem:t,selectionRange:a},lu=!1,Gn=n;Gn!==null;)if(n=Gn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Gn=t;else for(;Gn!==null;){switch(n=Gn,d=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var dt=rr(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(dt,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(ut){tn(a,a.return,ut)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Gd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Gd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Gn=t;break}Gn=n.return}}function t0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ms(t,a),o&4&&gl(5,a);break;case 1:if(ms(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(b){tn(a,a.return,b)}else{var u=rr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(b){tn(a,a.return,b)}}o&64&&Zg(a),o&512&&_l(a,a.return);break;case 3:if(ms(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{zm(t,n)}catch(b){tn(a,a.return,b)}}break;case 27:n===null&&o&4&&$g(a);case 26:case 5:ms(t,a),n===null&&o&4&&Qg(a),o&512&&_l(a,a.return);break;case 12:ms(t,a);break;case 13:ms(t,a),o&4&&a0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=cy.bind(null,a),Ry(t,a))));break;case 22:if(o=a.memoizedState!==null||Ga,!o){n=n!==null&&n.memoizedState!==null||Tn,u=Ga;var d=Tn;Ga=o,(Tn=n)&&!d?gs(t,a,(a.subtreeFlags&8772)!==0):ms(t,a),Ga=u,Tn=d}break;case 30:break;default:ms(t,a)}}function n0(t){var n=t.alternate;n!==null&&(t.alternate=null,n0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Si(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var dn=null,pi=!1;function ja(t,n,a){for(a=a.child;a!==null;)i0(t,n,a),a=a.sibling}function i0(t,n,a){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(pe,a)}catch{}switch(a.tag){case 26:Tn||ma(a,n),ja(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Tn||ma(a,n);var o=dn,u=pi;Ms(a.type)&&(dn=a.stateNode,pi=!1),ja(t,n,a),Al(a.stateNode),dn=o,pi=u;break;case 5:Tn||ma(a,n);case 6:if(o=dn,u=pi,dn=null,ja(t,n,a),dn=o,pi=u,dn!==null)if(pi)try{(dn.nodeType===9?dn.body:dn.nodeName==="HTML"?dn.ownerDocument.body:dn).removeChild(a.stateNode)}catch(d){tn(a,n,d)}else try{dn.removeChild(a.stateNode)}catch(d){tn(a,n,d)}break;case 18:dn!==null&&(pi?(t=dn,X0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ol(t)):X0(dn,a.stateNode));break;case 4:o=dn,u=pi,dn=a.stateNode.containerInfo,pi=!0,ja(t,n,a),dn=o,pi=u;break;case 0:case 11:case 14:case 15:Tn||ps(2,a,n),Tn||ps(4,a,n),ja(t,n,a);break;case 1:Tn||(ma(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Kg(a,n,o)),ja(t,n,a);break;case 21:ja(t,n,a);break;case 22:Tn=(o=Tn)||a.memoizedState!==null,ja(t,n,a),Tn=o;break;default:ja(t,n,a)}}function a0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ol(t)}catch(a){tn(n,n.return,a)}}function ty(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new e0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new e0),n;default:throw Error(s(435,t.tag))}}function pd(t,n){var a=ty(t);n.forEach(function(o){var u=uy.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function Ci(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,b=n,C=b;e:for(;C!==null;){switch(C.tag){case 27:if(Ms(C.type)){dn=C.stateNode,pi=!1;break e}break;case 5:dn=C.stateNode,pi=!1;break e;case 3:case 4:dn=C.stateNode.containerInfo,pi=!0;break e}C=C.return}if(dn===null)throw Error(s(160));i0(d,b,u),dn=null,pi=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)s0(n,t),n=n.sibling}var ea=null;function s0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ci(n,t),wi(t),o&4&&(ps(3,t,t.return),gl(3,t),ps(5,t,t.return));break;case 1:Ci(n,t),wi(t),o&512&&(Tn||a===null||ma(a,a.return)),o&64&&Ga&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=ea;if(Ci(n,t),wi(t),o&512&&(Tn||a===null||ma(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[da]||d[bn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Wn(d,o,a),d[bn]=t,kt(d),o=d;break e;case"link":var b=$0("link","href",u).get(o+(a.href||""));if(b){for(var C=0;C<b.length;C++)if(d=b[C],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(C,1);break t}}d=u.createElement(o),Wn(d,o,a),u.head.appendChild(d);break;case"meta":if(b=$0("meta","content",u).get(o+(a.content||""))){for(C=0;C<b.length;C++)if(d=b[C],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(C,1);break t}}d=u.createElement(o),Wn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[bn]=t,kt(d),o=d}t.stateNode=o}else e_(u,t.type,t.stateNode);else t.stateNode=J0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?e_(u,t.type,t.stateNode):J0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&ud(t,t.memoizedProps,a.memoizedProps)}break;case 27:Ci(n,t),wi(t),o&512&&(Tn||a===null||ma(a,a.return)),a!==null&&o&4&&ud(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Ci(n,t),wi(t),o&512&&(Tn||a===null||ma(a,a.return)),t.flags&32){u=t.stateNode;try{Bn(u,"")}catch(ge){tn(t,t.return,ge)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,ud(t,u,a!==null?a.memoizedProps:u)),o&1024&&(hd=!0);break;case 6:if(Ci(n,t),wi(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ge){tn(t,t.return,ge)}}break;case 3:if(su=null,u=ea,ea=iu(n.containerInfo),Ci(n,t),ea=u,wi(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ol(n.containerInfo)}catch(ge){tn(t,t.return,ge)}hd&&(hd=!1,r0(t));break;case 4:o=ea,ea=iu(t.stateNode.containerInfo),Ci(n,t),wi(t),ea=o;break;case 12:Ci(n,t),wi(t);break;case 13:Ci(n,t),wi(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yd=lt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,pd(t,o)));break;case 22:u=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,le=Ga,be=Tn;if(Ga=le||u,Tn=be||V,Ci(n,t),Tn=be,Ga=le,wi(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||Ga||Tn||or(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(d=V.stateNode,u)b=d.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{C=V.stateNode;var De=V.memoizedProps.style,de=De!=null&&De.hasOwnProperty("display")?De.display:null;C.style.display=de==null||typeof de=="boolean"?"":(""+de).trim()}}catch(ge){tn(V,V.return,ge)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(ge){tn(V,V.return,ge)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,pd(t,a))));break;case 19:Ci(n,t),wi(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,pd(t,o)));break;case 30:break;case 21:break;default:Ci(n,t),wi(t)}}function wi(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Jg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=fd(t);kc(t,d,u);break;case 5:var b=a.stateNode;a.flags&32&&(Bn(b,""),a.flags&=-33);var C=fd(t);kc(t,C,b);break;case 3:case 4:var V=a.stateNode.containerInfo,le=fd(t);dd(t,le,V);break;default:throw Error(s(161))}}catch(be){tn(t,t.return,be)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function r0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;r0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ms(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)t0(t,n.alternate,n),n=n.sibling}function or(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ps(4,n,n.return),or(n);break;case 1:ma(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Kg(n,n.return,a),or(n);break;case 27:Al(n.stateNode);case 26:case 5:ma(n,n.return),or(n);break;case 22:n.memoizedState===null&&or(n);break;case 30:or(n);break;default:or(n)}t=t.sibling}}function gs(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,b=d.flags;switch(d.tag){case 0:case 11:case 15:gs(u,d,a),gl(4,d);break;case 1:if(gs(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(le){tn(o,o.return,le)}if(o=d,u=o.updateQueue,u!==null){var C=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)Pm(V[u],C)}catch(le){tn(o,o.return,le)}}a&&b&64&&Zg(d),_l(d,d.return);break;case 27:$g(d);case 26:case 5:gs(u,d,a),a&&o===null&&b&4&&Qg(d),_l(d,d.return);break;case 12:gs(u,d,a);break;case 13:gs(u,d,a),a&&b&4&&a0(u,d);break;case 22:d.memoizedState===null&&gs(u,d,a),_l(d,d.return);break;case 30:break;default:gs(u,d,a)}n=n.sibling}}function md(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&nl(a))}function gd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&nl(t))}function ga(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)o0(t,n,a,o),n=n.sibling}function o0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ga(t,n,a,o),u&2048&&gl(9,n);break;case 1:ga(t,n,a,o);break;case 3:ga(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&nl(t)));break;case 12:if(u&2048){ga(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,b=d.id,C=d.onPostCommit;typeof C=="function"&&C(b,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){tn(n,n.return,V)}}else ga(t,n,a,o);break;case 13:ga(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,b=n.alternate,n.memoizedState!==null?d._visibility&2?ga(t,n,a,o):vl(t,n):d._visibility&2?ga(t,n,a,o):(d._visibility|=2,$r(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&md(b,n);break;case 24:ga(t,n,a,o),u&2048&&gd(n.alternate,n);break;default:ga(t,n,a,o)}}function $r(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=t,b=n,C=a,V=o,le=b.flags;switch(b.tag){case 0:case 11:case 15:$r(d,b,C,V,u),gl(8,b);break;case 23:break;case 22:var be=b.stateNode;b.memoizedState!==null?be._visibility&2?$r(d,b,C,V,u):vl(d,b):(be._visibility|=2,$r(d,b,C,V,u)),u&&le&2048&&md(b.alternate,b);break;case 24:$r(d,b,C,V,u),u&&le&2048&&gd(b.alternate,b);break;default:$r(d,b,C,V,u)}n=n.sibling}}function vl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:vl(a,o),u&2048&&md(o.alternate,o);break;case 24:vl(a,o),u&2048&&gd(o.alternate,o);break;default:vl(a,o)}n=n.sibling}}var xl=8192;function eo(t){if(t.subtreeFlags&xl)for(t=t.child;t!==null;)l0(t),t=t.sibling}function l0(t){switch(t.tag){case 26:eo(t),t.flags&xl&&t.memoizedState!==null&&Hy(ea,t.memoizedState,t.memoizedProps);break;case 5:eo(t);break;case 3:case 4:var n=ea;ea=iu(t.stateNode.containerInfo),eo(t),ea=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=xl,xl=16777216,eo(t),xl=n):eo(t));break;default:eo(t)}}function c0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function yl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Gn=o,f0(o,t)}c0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)u0(t),t=t.sibling}function u0(t){switch(t.tag){case 0:case 11:case 15:yl(t),t.flags&2048&&ps(9,t,t.return);break;case 3:yl(t);break;case 12:yl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Xc(t)):yl(t);break;default:yl(t)}}function Xc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Gn=o,f0(o,t)}c0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ps(8,n,n.return),Xc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xc(n));break;default:Xc(n)}t=t.sibling}}function f0(t,n){for(;Gn!==null;){var a=Gn;switch(a.tag){case 0:case 11:case 15:ps(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:nl(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Gn=o;else e:for(a=t;Gn!==null;){o=Gn;var u=o.sibling,d=o.return;if(n0(o),o===a){Gn=null;break e}if(u!==null){u.return=d,Gn=u;break e}Gn=d}}}var ny={getCacheForType:function(t){var n=ei(Un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},iy=typeof WeakMap=="function"?WeakMap:Map,Wt=0,sn=null,Dt=null,Ft=0,Yt=0,Di=null,_s=!1,to=!1,_d=!1,Va=0,yn=0,vs=0,lr=0,vd=0,Xi=0,no=0,Sl=null,mi=null,xd=!1,yd=0,qc=1/0,Wc=null,xs=null,qn=0,ys=null,io=null,ao=0,Sd=0,Md=null,d0=null,Ml=0,bd=null;function Ni(){if((Wt&2)!==0&&Ft!==0)return Ft&-Ft;if(H.T!==null){var t=Xr;return t!==0?t:Dd()}return At()}function h0(){Xi===0&&(Xi=(Ft&536870912)===0||Xt?Z():536870912);var t=ki.current;return t!==null&&(t.flags|=32),Xi}function Ui(t,n,a){(t===sn&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)&&(so(t,0),Ss(t,Ft,Xi,!1)),ye(t,a),((Wt&2)===0||t!==sn)&&(t===sn&&((Wt&2)===0&&(lr|=a),yn===4&&Ss(t,Ft,Xi,!1)),_a(t))}function p0(t,n,a){if((Wt&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||at(t,n),u=o?ry(t,n):Ad(t,n,!0),d=o;do{if(u===0){to&&!o&&Ss(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!ay(a)){u=Ad(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;e:{var C=t;u=Sl;var V=C.current.memoizedState.isDehydrated;if(V&&(so(C,b).flags|=256),b=Ad(C,b,!1),b!==2){if(_d&&!V){C.errorRecoveryDisabledLanes|=d,lr|=d,u=4;break e}d=mi,mi=u,d!==null&&(mi===null?mi=d:mi.push.apply(mi,d))}u=b}if(d=!1,u!==2)continue}}if(u===1){so(t,0),Ss(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ss(o,n,Xi,!_s);break e;case 2:mi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=yd+300-lt(),10<u)){if(Ss(o,n,Xi,!_s),ht(o,0,!0)!==0)break e;o.timeoutHandle=V0(m0.bind(null,o,a,mi,Wc,xd,n,Xi,lr,no,_s,d,2,-0,0),u);break e}m0(o,a,mi,Wc,xd,n,Xi,lr,no,_s,d,0,-0,0)}}break}while(!0);_a(t)}function m0(t,n,a,o,u,d,b,C,V,le,be,De,de,ge){if(t.timeoutHandle=-1,De=n.subtreeFlags,(De&8192||(De&16785408)===16785408)&&(wl={stylesheets:null,count:0,unsuspend:Fy},l0(n),De=Gy(),De!==null)){t.cancelPendingCommit=De(M0.bind(null,t,n,d,a,o,u,b,C,V,be,1,de,ge)),Ss(t,d,b,!le);return}M0(t,n,d,a,o,u,b,C,V)}function ay(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Ai(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ss(t,n,a,o){n&=~vd,n&=~lr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-q(u),b=1<<d;o[d]=-1,u&=~b}a!==0&&Fe(t,a,n)}function Yc(){return(Wt&6)===0?(bl(0),!1):!0}function Ed(){if(Dt!==null){if(Yt===0)var t=Dt.return;else t=Dt,Pa=nr=null,Gf(t),Qr=null,hl=0,t=Dt;for(;t!==null;)Yg(t.alternate,t),t=t.return;Dt=null}}function so(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,My(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ed(),sn=t,Dt=a=Ua(t.current,null),Ft=n,Yt=0,Di=null,_s=!1,to=at(t,n),_d=!1,no=Xi=vd=lr=vs=yn=0,mi=Sl=null,xd=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-q(o),d=1<<u;n|=t[u],o&=~d}return Va=n,gc(),a}function g0(t,n){bt=null,H.H=Pc,n===al||n===Tc?(n=Lm(),Yt=3):n===Dm?(n=Lm(),Yt=4):Yt=n===Og?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Di=n,Dt===null&&(yn=1,Hc(t,Hi(n,t.current)))}function _0(){var t=H.H;return H.H=Pc,t===null?Pc:t}function v0(){var t=H.A;return H.A=ny,t}function Td(){yn=4,_s||(Ft&4194048)!==Ft&&ki.current!==null||(to=!0),(vs&134217727)===0&&(lr&134217727)===0||sn===null||Ss(sn,Ft,Xi,!1)}function Ad(t,n,a){var o=Wt;Wt|=2;var u=_0(),d=v0();(sn!==t||Ft!==n)&&(Wc=null,so(t,n)),n=!1;var b=yn;e:do try{if(Yt!==0&&Dt!==null){var C=Dt,V=Di;switch(Yt){case 8:Ed(),b=6;break e;case 3:case 2:case 9:case 6:ki.current===null&&(n=!0);var le=Yt;if(Yt=0,Di=null,ro(t,C,V,le),a&&to){b=0;break e}break;default:le=Yt,Yt=0,Di=null,ro(t,C,V,le)}}sy(),b=yn;break}catch(be){g0(t,be)}while(!0);return n&&t.shellSuspendCounter++,Pa=nr=null,Wt=o,H.H=u,H.A=d,Dt===null&&(sn=null,Ft=0,gc()),b}function sy(){for(;Dt!==null;)x0(Dt)}function ry(t,n){var a=Wt;Wt|=2;var o=_0(),u=v0();sn!==t||Ft!==n?(Wc=null,qc=lt()+500,so(t,n)):to=at(t,n);e:do try{if(Yt!==0&&Dt!==null){n=Dt;var d=Di;t:switch(Yt){case 1:Yt=0,Di=null,ro(t,n,d,1);break;case 2:case 9:if(Nm(d)){Yt=0,Di=null,y0(n);break}n=function(){Yt!==2&&Yt!==9||sn!==t||(Yt=7),_a(t)},d.then(n,n);break e;case 3:Yt=7;break e;case 4:Yt=5;break e;case 7:Nm(d)?(Yt=0,Di=null,y0(n)):(Yt=0,Di=null,ro(t,n,d,7));break;case 5:var b=null;switch(Dt.tag){case 26:b=Dt.memoizedState;case 5:case 27:var C=Dt;if(!b||t_(b)){Yt=0,Di=null;var V=C.sibling;if(V!==null)Dt=V;else{var le=C.return;le!==null?(Dt=le,Zc(le)):Dt=null}break t}}Yt=0,Di=null,ro(t,n,d,5);break;case 6:Yt=0,Di=null,ro(t,n,d,6);break;case 8:Ed(),yn=6;break e;default:throw Error(s(462))}}oy();break}catch(be){g0(t,be)}while(!0);return Pa=nr=null,H.H=o,H.A=u,Wt=a,Dt!==null?0:(sn=null,Ft=0,gc(),yn)}function oy(){for(;Dt!==null&&!ln();)x0(Dt)}function x0(t){var n=qg(t.alternate,t,Va);t.memoizedProps=t.pendingProps,n===null?Zc(t):Dt=n}function y0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Hg(a,n,n.pendingProps,n.type,void 0,Ft);break;case 11:n=Hg(a,n,n.pendingProps,n.type.render,n.ref,Ft);break;case 5:Gf(n);default:Yg(a,n),n=Dt=Sm(n,Va),n=qg(a,n,Va)}t.memoizedProps=t.pendingProps,n===null?Zc(t):Dt=n}function ro(t,n,a,o){Pa=nr=null,Gf(n),Qr=null,hl=0;var u=n.return;try{if(Kx(t,u,n,a,Ft)){yn=1,Hc(t,Hi(a,t.current)),Dt=null;return}}catch(d){if(u!==null)throw Dt=u,d;yn=1,Hc(t,Hi(a,t.current)),Dt=null;return}n.flags&32768?(Xt||o===1?t=!0:to||(Ft&536870912)!==0?t=!1:(_s=t=!0,(o===2||o===9||o===3||o===6)&&(o=ki.current,o!==null&&o.tag===13&&(o.flags|=16384))),S0(n,t)):Zc(n)}function Zc(t){var n=t;do{if((n.flags&32768)!==0){S0(n,_s);return}t=n.return;var a=Jx(n.alternate,n,Va);if(a!==null){Dt=a;return}if(n=n.sibling,n!==null){Dt=n;return}Dt=n=t}while(n!==null);yn===0&&(yn=5)}function S0(t,n){do{var a=$x(t.alternate,t);if(a!==null){a.flags&=32767,Dt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Dt=t;return}Dt=t=a}while(t!==null);yn=6,Dt=null}function M0(t,n,a,o,u,d,b,C,V){t.cancelPendingCommit=null;do Kc();while(qn!==0);if((Wt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=gf,He(t,a,d,b,C,V),t===sn&&(Dt=sn=null,Ft=0),io=n,ys=t,ao=a,Sd=d,Md=u,d0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,fy(z,function(){return R0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,u=ne.p,ne.p=2,b=Wt,Wt|=4;try{ey(t,n,a)}finally{Wt=b,ne.p=u,H.T=o}}qn=1,b0(),E0(),T0()}}function b0(){if(qn===1){qn=0;var t=ys,n=io,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var o=ne.p;ne.p=2;var u=Wt;Wt|=4;try{s0(n,t);var d=Bd,b=fm(t.containerInfo),C=d.focusedElem,V=d.selectionRange;if(b!==C&&C&&C.ownerDocument&&um(C.ownerDocument.documentElement,C)){if(V!==null&&ff(C)){var le=V.start,be=V.end;if(be===void 0&&(be=le),"selectionStart"in C)C.selectionStart=le,C.selectionEnd=Math.min(be,C.value.length);else{var De=C.ownerDocument||document,de=De&&De.defaultView||window;if(de.getSelection){var ge=de.getSelection(),dt=C.textContent.length,ut=Math.min(V.start,dt),Qt=V.end===void 0?ut:Math.min(V.end,dt);!ge.extend&&ut>Qt&&(b=Qt,Qt=ut,ut=b);var te=cm(C,ut),W=cm(C,Qt);if(te&&W&&(ge.rangeCount!==1||ge.anchorNode!==te.node||ge.anchorOffset!==te.offset||ge.focusNode!==W.node||ge.focusOffset!==W.offset)){var oe=De.createRange();oe.setStart(te.node,te.offset),ge.removeAllRanges(),ut>Qt?(ge.addRange(oe),ge.extend(W.node,W.offset)):(oe.setEnd(W.node,W.offset),ge.addRange(oe))}}}}for(De=[],ge=C;ge=ge.parentNode;)ge.nodeType===1&&De.push({element:ge,left:ge.scrollLeft,top:ge.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<De.length;C++){var Re=De[C];Re.element.scrollLeft=Re.left,Re.element.scrollTop=Re.top}}lu=!!Id,Bd=Id=null}finally{Wt=u,ne.p=o,H.T=a}}t.current=n,qn=2}}function E0(){if(qn===2){qn=0;var t=ys,n=io,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var o=ne.p;ne.p=2;var u=Wt;Wt|=4;try{t0(t,n.alternate,n)}finally{Wt=u,ne.p=o,H.T=a}}qn=3}}function T0(){if(qn===4||qn===3){qn=0,gt();var t=ys,n=io,a=ao,o=d0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?qn=5:(qn=0,io=ys=null,A0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(xs=null),cn(a),n=n.stateNode,Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(pe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=H.T,u=ne.p,ne.p=2,H.T=null;try{for(var d=t.onRecoverableError,b=0;b<o.length;b++){var C=o[b];d(C.value,{componentStack:C.stack})}}finally{H.T=n,ne.p=u}}(ao&3)!==0&&Kc(),_a(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===bd?Ml++:(Ml=0,bd=t):Ml=0,bl(0)}}function A0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,nl(n)))}function Kc(t){return b0(),E0(),T0(),R0()}function R0(){if(qn!==5)return!1;var t=ys,n=Sd;Sd=0;var a=cn(ao),o=H.T,u=ne.p;try{ne.p=32>a?32:a,H.T=null,a=Md,Md=null;var d=ys,b=ao;if(qn=0,io=ys=null,ao=0,(Wt&6)!==0)throw Error(s(331));var C=Wt;if(Wt|=4,u0(d.current),o0(d,d.current,b,a),Wt=C,bl(0,!1),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(pe,d)}catch{}return!0}finally{ne.p=u,H.T=o,A0(t,n)}}function C0(t,n,a){n=Hi(a,n),n=td(t.stateNode,n,2),t=us(t,n,2),t!==null&&(ye(t,2),_a(t))}function tn(t,n,a){if(t.tag===3)C0(t,t,a);else for(;n!==null;){if(n.tag===3){C0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(xs===null||!xs.has(o))){t=Hi(a,t),a=Ug(2),o=us(n,a,2),o!==null&&(Lg(a,o,n,t),ye(o,2),_a(o));break}}n=n.return}}function Rd(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new iy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(_d=!0,u.add(a),t=ly.bind(null,t,n,a),n.then(t,t))}function ly(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,sn===t&&(Ft&a)===a&&(yn===4||yn===3&&(Ft&62914560)===Ft&&300>lt()-yd?(Wt&2)===0&&so(t,0):vd|=a,no===Ft&&(no=0)),_a(t)}function w0(t,n){n===0&&(n=Be()),t=Gr(t,n),t!==null&&(ye(t,n),_a(t))}function cy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),w0(t,a)}function uy(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),w0(t,a)}function fy(t,n){return qe(t,n)}var Qc=null,oo=null,Cd=!1,Jc=!1,wd=!1,cr=0;function _a(t){t!==oo&&t.next===null&&(oo===null?Qc=oo=t:oo=oo.next=t),Jc=!0,Cd||(Cd=!0,hy())}function bl(t,n){if(!wd&&Jc){wd=!0;do for(var a=!1,o=Qc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var b=o.suspendedLanes,C=o.pingedLanes;d=(1<<31-q(42|t)+1)-1,d&=u&~(b&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,L0(o,d))}else d=Ft,d=ht(o,o===sn?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||at(o,d)||(a=!0,L0(o,d));o=o.next}while(a);wd=!1}}function dy(){D0()}function D0(){Jc=Cd=!1;var t=0;cr!==0&&(Sy()&&(t=cr),cr=0);for(var n=lt(),a=null,o=Qc;o!==null;){var u=o.next,d=N0(o,n);d===0?(o.next=null,a===null?Qc=u:a.next=u,u===null&&(oo=a)):(a=o,(t!==0||(d&3)!==0)&&(Jc=!0)),o=u}bl(t)}function N0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var b=31-q(d),C=1<<b,V=u[b];V===-1?((C&a)===0||(C&o)!==0)&&(u[b]=zt(C,n)):V<=n&&(t.expiredLanes|=C),d&=~C}if(n=sn,a=Ft,a=ht(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&X(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||at(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&X(o),cn(a)){case 2:case 8:a=Ze;break;case 32:a=z;break;case 268435456:a=k;break;default:a=z}return o=U0.bind(null,t),a=qe(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&X(o),t.callbackPriority=2,t.callbackNode=null,2}function U0(t,n){if(qn!==0&&qn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Kc()&&t.callbackNode!==a)return null;var o=Ft;return o=ht(t,t===sn?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(p0(t,o,n),N0(t,lt()),t.callbackNode!=null&&t.callbackNode===a?U0.bind(null,t):null)}function L0(t,n){if(Kc())return null;p0(t,n,!0)}function hy(){by(function(){(Wt&6)!==0?qe(Pt,dy):D0()})}function Dd(){return cr===0&&(cr=Z()),cr}function O0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wr(""+t)}function P0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function py(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=O0((u[An]||null).action),b=o.submitter;b&&(n=(n=b[An]||null)?O0(n.formAction):b.getAttribute("formAction"),n!==null&&(d=n,b=null));var C=new ri("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(cr!==0){var V=b?P0(u,b):new FormData(u);Kf(a,{pending:!0,data:V,method:u.method,action:d},null,V)}}else typeof d=="function"&&(C.preventDefault(),V=b?P0(u,b):new FormData(u),Kf(a,{pending:!0,data:V,method:u.method,action:d},d,V))},currentTarget:u}]})}}for(var Nd=0;Nd<mf.length;Nd++){var Ud=mf[Nd],my=Ud.toLowerCase(),gy=Ud[0].toUpperCase()+Ud.slice(1);$i(my,"on"+gy)}$i(pm,"onAnimationEnd"),$i(mm,"onAnimationIteration"),$i(gm,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(Lx,"onTransitionRun"),$i(Ox,"onTransitionStart"),$i(Px,"onTransitionCancel"),$i(_m,"onTransitionEnd"),N("onMouseEnter",["mouseout","mouseover"]),N("onMouseLeave",["mouseout","mouseover"]),N("onPointerEnter",["pointerout","pointerover"]),N("onPointerLeave",["pointerout","pointerover"]),bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bi("onBeforeInput",["compositionend","keypress","textInput","paste"]),bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var El="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_y=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(El));function z0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var b=o.length-1;0<=b;b--){var C=o[b],V=C.instance,le=C.currentTarget;if(C=C.listener,V!==d&&u.isPropagationStopped())break e;d=C,u.currentTarget=le;try{d(u)}catch(be){Fc(be)}u.currentTarget=null,d=V}else for(b=0;b<o.length;b++){if(C=o[b],V=C.instance,le=C.currentTarget,C=C.listener,V!==d&&u.isPropagationStopped())break e;d=C,u.currentTarget=le;try{d(u)}catch(be){Fc(be)}u.currentTarget=null,d=V}}}}function Nt(t,n){var a=n[zi];a===void 0&&(a=n[zi]=new Set);var o=t+"__bubble";a.has(o)||(I0(n,t,2,!1),a.add(o))}function Ld(t,n,a){var o=0;n&&(o|=4),I0(a,t,o,n)}var $c="_reactListening"+Math.random().toString(36).slice(2);function Od(t){if(!t[$c]){t[$c]=!0,Gs.forEach(function(a){a!=="selectionchange"&&(_y.has(a)||Ld(a,!1,t),Ld(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[$c]||(n[$c]=!0,Ld("selectionchange",!1,n))}}function I0(t,n,a,o){switch(o_(n)){case 2:var u=ky;break;case 8:u=Xy;break;default:u=Yd}a=u.bind(null,n,a,t),u=void 0,!Ur||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Pd(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var C=o.stateNode.containerInfo;if(C===u)break;if(b===4)for(b=o.return;b!==null;){var V=b.tag;if((V===3||V===4)&&b.stateNode.containerInfo===u)return;b=b.return}for(;C!==null;){if(b=Mi(C),b===null)return;if(V=b.tag,V===5||V===6||V===26||V===27){o=d=b;continue e}C=C.parentNode}}o=o.return}Nr(function(){var le=d,be=Fn(a),De=[];e:{var de=vm.get(t);if(de!==void 0){var ge=ri,dt=t;switch(t){case"keypress":if(as(a)===0)break e;case"keydown":case"keyup":ge=rs;break;case"focusin":dt="focus",ge=Go;break;case"focusout":dt="blur",ge=Go;break;case"beforeblur":case"afterblur":ge=Go;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=zr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=Ho;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=ko;break;case pm:case mm:case gm:ge=oc;break;case _m:ge=fc;break;case"scroll":case"scrollend":ge=sc;break;case"wheel":ge=mn;break;case"copy":case"cut":case"paste":ge=lc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=cc;break;case"toggle":case"beforetoggle":ge=Ti}var ut=(n&4)!==0,Qt=!ut&&(t==="scroll"||t==="scrollend"),te=ut?de!==null?de+"Capture":null:de;ut=[];for(var W=le,oe;W!==null;){var Re=W;if(oe=Re.stateNode,Re=Re.tag,Re!==5&&Re!==26&&Re!==27||oe===null||te===null||(Re=Ii(W,te),Re!=null&&ut.push(Tl(W,Re,oe))),Qt)break;W=W.return}0<ut.length&&(de=new ge(de,dt,null,a,be),De.push({event:de,listeners:ut}))}}if((n&7)===0){e:{if(de=t==="mouseover"||t==="pointerover",ge=t==="mouseout"||t==="pointerout",de&&a!==Nn&&(dt=a.relatedTarget||a.fromElement)&&(Mi(dt)||dt[Zn]))break e;if((ge||de)&&(de=be.window===be?be:(de=be.ownerDocument)?de.defaultView||de.parentWindow:window,ge?(dt=a.relatedTarget||a.toElement,ge=le,dt=dt?Mi(dt):null,dt!==null&&(Qt=c(dt),ut=dt.tag,dt!==Qt||ut!==5&&ut!==27&&ut!==6)&&(dt=null)):(ge=null,dt=le),ge!==dt)){if(ut=zr,Re="onMouseLeave",te="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(ut=cc,Re="onPointerLeave",te="onPointerEnter",W="pointer"),Qt=ge==null?de:Ca(ge),oe=dt==null?de:Ca(dt),de=new ut(Re,W+"leave",ge,a,be),de.target=Qt,de.relatedTarget=oe,Re=null,Mi(be)===le&&(ut=new ut(te,W+"enter",dt,a,be),ut.target=oe,ut.relatedTarget=Qt,Re=ut),Qt=Re,ge&&dt)t:{for(ut=ge,te=dt,W=0,oe=ut;oe;oe=lo(oe))W++;for(oe=0,Re=te;Re;Re=lo(Re))oe++;for(;0<W-oe;)ut=lo(ut),W--;for(;0<oe-W;)te=lo(te),oe--;for(;W--;){if(ut===te||te!==null&&ut===te.alternate)break t;ut=lo(ut),te=lo(te)}ut=null}else ut=null;ge!==null&&B0(De,de,ge,ut,!1),dt!==null&&Qt!==null&&B0(De,Qt,dt,ut,!0)}}e:{if(de=le?Ca(le):window,ge=de.nodeName&&de.nodeName.toLowerCase(),ge==="select"||ge==="input"&&de.type==="file")var Ke=im;else if(tm(de))if(am)Ke=Dx;else{Ke=Cx;var Et=Rx}else ge=de.nodeName,!ge||ge.toLowerCase()!=="input"||de.type!=="checkbox"&&de.type!=="radio"?le&&wt(le.elementType)&&(Ke=im):Ke=wx;if(Ke&&(Ke=Ke(t,le))){nm(De,Ke,a,be);break e}Et&&Et(t,de,le),t==="focusout"&&le&&de.type==="number"&&le.memoizedProps.value!=null&&Mt(de,"number",de.value)}switch(Et=le?Ca(le):window,t){case"focusin":(tm(Et)||Et.contentEditable==="true")&&(Br=Et,df=le,Qo=null);break;case"focusout":Qo=df=Br=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,dm(De,a,be);break;case"selectionchange":if(Ux)break;case"keydown":case"keyup":dm(De,a,be)}var it;if(Xo)e:{switch(t){case"compositionstart":var ft="onCompositionStart";break e;case"compositionend":ft="onCompositionEnd";break e;case"compositionupdate":ft="onCompositionUpdate";break e}ft=void 0}else Ir?hc(t,a)&&(ft="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ft="onCompositionStart");ft&&(Wo&&a.locale!=="ko"&&(Ir||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&Ir&&(it=is()):(Bi=be,Lr="value"in Bi?Bi.value:Bi.textContent,Ir=!0)),Et=eu(le,ft),0<Et.length&&(ft=new xe(ft,t,null,a,be),De.push({event:ft,listeners:Et}),it?ft.data=it:(it=pc(a),it!==null&&(ft.data=it)))),(it=qo?bx(t,a):Ex(t,a))&&(ft=eu(le,"onBeforeInput"),0<ft.length&&(Et=new xe("onBeforeInput","beforeinput",null,a,be),De.push({event:Et,listeners:ft}),Et.data=it)),py(De,t,le,a,be)}z0(De,n)})}function Tl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function eu(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Ii(t,a),u!=null&&o.unshift(Tl(t,u,d)),u=Ii(t,n),u!=null&&o.push(Tl(t,u,d))),t.tag===3)return o;t=t.return}return[]}function lo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function B0(t,n,a,o,u){for(var d=n._reactName,b=[];a!==null&&a!==o;){var C=a,V=C.alternate,le=C.stateNode;if(C=C.tag,V!==null&&V===o)break;C!==5&&C!==26&&C!==27||le===null||(V=le,u?(le=Ii(a,d),le!=null&&b.unshift(Tl(a,le,V))):u||(le=Ii(a,d),le!=null&&b.push(Tl(a,le,V)))),a=a.return}b.length!==0&&t.push({event:n,listeners:b})}var vy=/\r\n?/g,xy=/\u0000|\uFFFD/g;function F0(t){return(typeof t=="string"?t:""+t).replace(vy,`
`).replace(xy,"")}function H0(t,n){return n=F0(n),F0(t)===n}function tu(){}function Kt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Bn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Bn(t,""+o);break;case"className":Pe(t,"class",o);break;case"tabIndex":Pe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Pe(t,a,o);break;case"style":Fo(t,o,d);break;case"data":if(n!=="object"){Pe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=wr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Kt(t,n,"name",u.name,u,null),Kt(t,n,"formEncType",u.formEncType,u,null),Kt(t,n,"formMethod",u.formMethod,u,null),Kt(t,n,"formTarget",u.formTarget,u,null)):(Kt(t,n,"encType",u.encType,u,null),Kt(t,n,"method",u.method,u,null),Kt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=wr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=tu);break;case"onScroll":o!=null&&Nt("scroll",t);break;case"onScrollEnd":o!=null&&Nt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=wr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Nt("beforetoggle",t),Nt("toggle",t),Ue(t,"popover",o);break;case"xlinkActuate":Ge(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ge(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ge(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ge(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ge(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ge(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ue(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ns.get(a)||a,Ue(t,a,o))}}function zd(t,n,a,o,u,d){switch(a){case"style":Fo(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Bn(t,o):(typeof o=="number"||typeof o=="bigint")&&Bn(t,""+o);break;case"onScroll":o!=null&&Nt("scroll",t);break;case"onScrollEnd":o!=null&&Nt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=tu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[An]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ue(t,a,o)}}}function Wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",t),Nt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var b=a[d];if(b!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Kt(t,n,d,b,a,null)}}u&&Kt(t,n,"srcSet",a.srcSet,a,null),o&&Kt(t,n,"src",a.src,a,null);return;case"input":Nt("invalid",t);var C=d=b=u=null,V=null,le=null;for(o in a)if(a.hasOwnProperty(o)){var be=a[o];if(be!=null)switch(o){case"name":u=be;break;case"type":b=be;break;case"checked":V=be;break;case"defaultChecked":le=be;break;case"value":d=be;break;case"defaultValue":C=be;break;case"children":case"dangerouslySetInnerHTML":if(be!=null)throw Error(s(137,n));break;default:Kt(t,n,o,be,a,null)}}Gt(t,d,C,V,le,b,u,!1),an(t);return;case"select":Nt("invalid",t),o=b=d=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":d=C;break;case"defaultValue":b=C;break;case"multiple":o=C;default:Kt(t,n,u,C,a,null)}n=d,a=b,t.multiple=!!o,n!=null?pn(t,!!o,n,!1):a!=null&&pn(t,!!o,a,!0);return;case"textarea":Nt("invalid",t),d=u=o=null;for(b in a)if(a.hasOwnProperty(b)&&(C=a[b],C!=null))switch(b){case"value":o=C;break;case"defaultValue":u=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Kt(t,n,b,C,a,null)}Rn(t,o,u,d),an(t);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Kt(t,n,V,o,a,null)}return;case"dialog":Nt("beforetoggle",t),Nt("toggle",t),Nt("cancel",t),Nt("close",t);break;case"iframe":case"object":Nt("load",t);break;case"video":case"audio":for(o=0;o<El.length;o++)Nt(El[o],t);break;case"image":Nt("error",t),Nt("load",t);break;case"details":Nt("toggle",t);break;case"embed":case"source":case"link":Nt("error",t),Nt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(le in a)if(a.hasOwnProperty(le)&&(o=a[le],o!=null))switch(le){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Kt(t,n,le,o,a,null)}return;default:if(wt(n)){for(be in a)a.hasOwnProperty(be)&&(o=a[be],o!==void 0&&zd(t,n,be,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Kt(t,n,C,o,a,null))}function yy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,b=null,C=null,V=null,le=null,be=null;for(ge in a){var De=a[ge];if(a.hasOwnProperty(ge)&&De!=null)switch(ge){case"checked":break;case"value":break;case"defaultValue":V=De;default:o.hasOwnProperty(ge)||Kt(t,n,ge,null,o,De)}}for(var de in o){var ge=o[de];if(De=a[de],o.hasOwnProperty(de)&&(ge!=null||De!=null))switch(de){case"type":d=ge;break;case"name":u=ge;break;case"checked":le=ge;break;case"defaultChecked":be=ge;break;case"value":b=ge;break;case"defaultValue":C=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:ge!==De&&Kt(t,n,de,ge,o,De)}}Kn(t,b,C,V,le,be,d,u);return;case"select":ge=b=C=de=null;for(d in a)if(V=a[d],a.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":ge=V;default:o.hasOwnProperty(d)||Kt(t,n,d,null,o,V)}for(u in o)if(d=o[u],V=a[u],o.hasOwnProperty(u)&&(d!=null||V!=null))switch(u){case"value":de=d;break;case"defaultValue":C=d;break;case"multiple":b=d;default:d!==V&&Kt(t,n,u,d,o,V)}n=C,a=b,o=ge,de!=null?pn(t,!!a,de,!1):!!o!=!!a&&(n!=null?pn(t,!!a,n,!0):pn(t,!!a,a?[]:"",!1));return;case"textarea":ge=de=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Kt(t,n,C,null,o,u)}for(b in o)if(u=o[b],d=a[b],o.hasOwnProperty(b)&&(u!=null||d!=null))switch(b){case"value":de=u;break;case"defaultValue":ge=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Kt(t,n,b,u,o,d)}fn(t,de,ge);return;case"option":for(var dt in a)if(de=a[dt],a.hasOwnProperty(dt)&&de!=null&&!o.hasOwnProperty(dt))switch(dt){case"selected":t.selected=!1;break;default:Kt(t,n,dt,null,o,de)}for(V in o)if(de=o[V],ge=a[V],o.hasOwnProperty(V)&&de!==ge&&(de!=null||ge!=null))switch(V){case"selected":t.selected=de&&typeof de!="function"&&typeof de!="symbol";break;default:Kt(t,n,V,de,o,ge)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ut in a)de=a[ut],a.hasOwnProperty(ut)&&de!=null&&!o.hasOwnProperty(ut)&&Kt(t,n,ut,null,o,de);for(le in o)if(de=o[le],ge=a[le],o.hasOwnProperty(le)&&de!==ge&&(de!=null||ge!=null))switch(le){case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:Kt(t,n,le,de,o,ge)}return;default:if(wt(n)){for(var Qt in a)de=a[Qt],a.hasOwnProperty(Qt)&&de!==void 0&&!o.hasOwnProperty(Qt)&&zd(t,n,Qt,void 0,o,de);for(be in o)de=o[be],ge=a[be],!o.hasOwnProperty(be)||de===ge||de===void 0&&ge===void 0||zd(t,n,be,de,o,ge);return}}for(var te in a)de=a[te],a.hasOwnProperty(te)&&de!=null&&!o.hasOwnProperty(te)&&Kt(t,n,te,null,o,de);for(De in o)de=o[De],ge=a[De],!o.hasOwnProperty(De)||de===ge||de==null&&ge==null||Kt(t,n,De,de,o,ge)}var Id=null,Bd=null;function nu(t){return t.nodeType===9?t:t.ownerDocument}function G0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function j0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Fd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Hd=null;function Sy(){var t=window.event;return t&&t.type==="popstate"?t===Hd?!1:(Hd=t,!0):(Hd=null,!1)}var V0=typeof setTimeout=="function"?setTimeout:void 0,My=typeof clearTimeout=="function"?clearTimeout:void 0,k0=typeof Promise=="function"?Promise:void 0,by=typeof queueMicrotask=="function"?queueMicrotask:typeof k0<"u"?function(t){return k0.resolve(null).then(t).catch(Ey)}:V0;function Ey(t){setTimeout(function(){throw t})}function Ms(t){return t==="head"}function X0(t,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var b=t.ownerDocument;if(a&1&&Al(b.documentElement),a&2&&Al(b.body),a&4)for(a=b.head,Al(a),b=a.firstChild;b;){var C=b.nextSibling,V=b.nodeName;b[da]||V==="SCRIPT"||V==="STYLE"||V==="LINK"&&b.rel.toLowerCase()==="stylesheet"||a.removeChild(b),b=C}}if(u===0){t.removeChild(d),Ol(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Ol(n)}function Gd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Gd(a),Si(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Ty(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[da])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=ta(t.nextSibling),t===null)break}return null}function Ay(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ta(t.nextSibling),t===null))return null;return t}function jd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Ry(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ta(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Vd=null;function q0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function W0(t,n,a){switch(n=nu(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Al(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Si(t)}var qi=new Map,Y0=new Set;function iu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ka=ne.d;ne.d={f:Cy,r:wy,D:Dy,C:Ny,L:Uy,m:Ly,X:Py,S:Oy,M:zy};function Cy(){var t=ka.f(),n=Yc();return t||n}function wy(t){var n=ui(t);n!==null&&n.tag===5&&n.type==="form"?pg(n):ka.r(t)}var co=typeof document>"u"?null:document;function Z0(t,n,a){var o=co;if(o&&typeof n=="string"&&n){var u=Ht(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Y0.has(u)||(Y0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Wn(n,"link",t),kt(n),o.head.appendChild(n)))}}function Dy(t){ka.D(t),Z0("dns-prefetch",t,null)}function Ny(t,n){ka.C(t,n),Z0("preconnect",t,n)}function Uy(t,n,a){ka.L(t,n,a);var o=co;if(o&&t&&n){var u='link[rel="preload"][as="'+Ht(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ht(a.imageSizes)+'"]')):u+='[href="'+Ht(t)+'"]';var d=u;switch(n){case"style":d=uo(t);break;case"script":d=fo(t)}qi.has(d)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),qi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Rl(d))||n==="script"&&o.querySelector(Cl(d))||(n=o.createElement("link"),Wn(n,"link",t),kt(n),o.head.appendChild(n)))}}function Ly(t,n){ka.m(t,n);var a=co;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ht(o)+'"][href="'+Ht(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=fo(t)}if(!qi.has(d)&&(t=v({rel:"modulepreload",href:t},n),qi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Cl(d)))return}o=a.createElement("link"),Wn(o,"link",t),kt(o),a.head.appendChild(o)}}}function Oy(t,n,a){ka.S(t,n,a);var o=co;if(o&&t){var u=Ki(o).hoistableStyles,d=uo(t);n=n||"default";var b=u.get(d);if(!b){var C={loading:0,preload:null};if(b=o.querySelector(Rl(d)))C.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=qi.get(d))&&kd(t,a);var V=b=o.createElement("link");kt(V),Wn(V,"link",t),V._p=new Promise(function(le,be){V.onload=le,V.onerror=be}),V.addEventListener("load",function(){C.loading|=1}),V.addEventListener("error",function(){C.loading|=2}),C.loading|=4,au(b,n,o)}b={type:"stylesheet",instance:b,count:1,state:C},u.set(d,b)}}}function Py(t,n){ka.X(t,n);var a=co;if(a&&t){var o=Ki(a).hoistableScripts,u=fo(t),d=o.get(u);d||(d=a.querySelector(Cl(u)),d||(t=v({src:t,async:!0},n),(n=qi.get(u))&&Xd(t,n),d=a.createElement("script"),kt(d),Wn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function zy(t,n){ka.M(t,n);var a=co;if(a&&t){var o=Ki(a).hoistableScripts,u=fo(t),d=o.get(u);d||(d=a.querySelector(Cl(u)),d||(t=v({src:t,async:!0,type:"module"},n),(n=qi.get(u))&&Xd(t,n),d=a.createElement("script"),kt(d),Wn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function K0(t,n,a,o){var u=(u=ce.current)?iu(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=uo(a.href),a=Ki(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=uo(a.href);var d=Ki(u).hoistableStyles,b=d.get(t);if(b||(u=u.ownerDocument||u,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,b),(d=u.querySelector(Rl(t)))&&!d._p&&(b.instance=d,b.state.loading=5),qi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},qi.set(t,a),d||Iy(u,t,a,b.state))),n&&o===null)throw Error(s(528,""));return b}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fo(a),a=Ki(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function uo(t){return'href="'+Ht(t)+'"'}function Rl(t){return'link[rel="stylesheet"]['+t+"]"}function Q0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Iy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Wn(n,"link",a),kt(n),t.head.appendChild(n))}function fo(t){return'[src="'+Ht(t)+'"]'}function Cl(t){return"script[async]"+t}function J0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ht(a.href)+'"]');if(o)return n.instance=o,kt(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),kt(o),Wn(o,"style",u),au(o,a.precedence,t),n.instance=o;case"stylesheet":u=uo(a.href);var d=t.querySelector(Rl(u));if(d)return n.state.loading|=4,n.instance=d,kt(d),d;o=Q0(a),(u=qi.get(u))&&kd(o,u),d=(t.ownerDocument||t).createElement("link"),kt(d);var b=d;return b._p=new Promise(function(C,V){b.onload=C,b.onerror=V}),Wn(d,"link",o),n.state.loading|=4,au(d,a.precedence,t),n.instance=d;case"script":return d=fo(a.src),(u=t.querySelector(Cl(d)))?(n.instance=u,kt(u),u):(o=a,(u=qi.get(d))&&(o=v({},a),Xd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),kt(u),Wn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,au(o,a.precedence,t));return n.instance}function au(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,b=0;b<o.length;b++){var C=o[b];if(C.dataset.precedence===n)d=C;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function kd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Xd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var su=null;function $0(t,n,a){if(su===null){var o=new Map,u=su=new Map;u.set(a,o)}else u=su,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[da]||d[bn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var b=d.getAttribute(n)||"";b=t+b;var C=o.get(b);C?C.push(d):o.set(b,[d])}}return o}function e_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function By(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function t_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var wl=null;function Fy(){}function Hy(t,n,a){if(wl===null)throw Error(s(475));var o=wl;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=uo(a.href),d=t.querySelector(Rl(u));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=ru.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=d,kt(d);return}d=t.ownerDocument||t,a=Q0(a),(u=qi.get(u))&&kd(a,u),d=d.createElement("link"),kt(d);var b=d;b._p=new Promise(function(C,V){b.onload=C,b.onerror=V}),Wn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=ru.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function Gy(){if(wl===null)throw Error(s(475));var t=wl;return t.stylesheets&&t.count===0&&qd(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&qd(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function ru(){if(this.count--,this.count===0){if(this.stylesheets)qd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ou=null;function qd(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ou=new Map,n.forEach(jy,t),ou=null,ru.call(t))}function jy(t,n){if(!(n.state.loading&4)){var a=ou.get(t);if(a)var o=a.get(null);else{a=new Map,ou.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var b=u[d];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),o=b)}o&&a.set(null,o)}u=n.instance,b=u.getAttribute("data-precedence"),d=a.get(b)||o,d===o&&a.set(null,u),a.set(b,u),this.count++,o=ru.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Dl={$$typeof:L,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Vy(t,n,a,o,u,d,b,C){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ve(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ve(0),this.hiddenUpdates=ve(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function n_(t,n,a,o,u,d,b,C,V,le,be,De){return t=new Vy(t,n,a,b,C,V,le,De),n=1,d===!0&&(n|=24),d=Ri(3,null,null,n),t.current=d,d.stateNode=t,n=Rf(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Nf(d),t}function i_(t){return t?(t=jr,t):jr}function a_(t,n,a,o,u,d){u=i_(u),o.context===null?o.context=u:o.pendingContext=u,o=cs(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=us(t,o,n),a!==null&&(Ui(a,t,n),rl(a,t,n))}function s_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Wd(t,n){s_(t,n),(t=t.alternate)&&s_(t,n)}function r_(t){if(t.tag===13){var n=Gr(t,67108864);n!==null&&Ui(n,t,67108864),Wd(t,67108864)}}var lu=!0;function ky(t,n,a,o){var u=H.T;H.T=null;var d=ne.p;try{ne.p=2,Yd(t,n,a,o)}finally{ne.p=d,H.T=u}}function Xy(t,n,a,o){var u=H.T;H.T=null;var d=ne.p;try{ne.p=8,Yd(t,n,a,o)}finally{ne.p=d,H.T=u}}function Yd(t,n,a,o){if(lu){var u=Zd(o);if(u===null)Pd(t,n,o,cu,a),l_(t,o);else if(Wy(u,t,n,a,o))o.stopPropagation();else if(l_(t,o),n&4&&-1<qy.indexOf(t)){for(;u!==null;){var d=ui(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var b=ze(d.pendingLanes);if(b!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;b;){var V=1<<31-q(b);C.entanglements[1]|=V,b&=~V}_a(d),(Wt&6)===0&&(qc=lt()+500,bl(0))}}break;case 13:C=Gr(d,2),C!==null&&Ui(C,d,2),Yc(),Wd(d,2)}if(d=Zd(o),d===null&&Pd(t,n,o,cu,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Pd(t,n,o,null,a)}}function Zd(t){return t=Fn(t),Kd(t)}var cu=null;function Kd(t){if(cu=null,t=Mi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return cu=t,null}function o_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Je()){case Pt:return 2;case Ze:return 8;case z:case A:return 32;case k:return 268435456;default:return 32}default:return 32}}var Qd=!1,bs=null,Es=null,Ts=null,Nl=new Map,Ul=new Map,As=[],qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function l_(t,n){switch(t){case"focusin":case"focusout":bs=null;break;case"dragenter":case"dragleave":Es=null;break;case"mouseover":case"mouseout":Ts=null;break;case"pointerover":case"pointerout":Nl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ul.delete(n.pointerId)}}function Ll(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=ui(n),n!==null&&r_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Wy(t,n,a,o,u){switch(n){case"focusin":return bs=Ll(bs,t,n,a,o,u),!0;case"dragenter":return Es=Ll(Es,t,n,a,o,u),!0;case"mouseover":return Ts=Ll(Ts,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Nl.set(d,Ll(Nl.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Ul.set(d,Ll(Ul.get(d)||null,t,n,a,o,u)),!0}return!1}function c_(t){var n=Mi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Mn(t.priority,function(){if(a.tag===13){var o=Ni();o=It(o);var u=Gr(a,o);u!==null&&Ui(u,a,o),Wd(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Zd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Nn=o,a.target.dispatchEvent(o),Nn=null}else return n=ui(a),n!==null&&r_(n),t.blockedOn=a,!1;n.shift()}return!0}function u_(t,n,a){uu(t)&&a.delete(n)}function Yy(){Qd=!1,bs!==null&&uu(bs)&&(bs=null),Es!==null&&uu(Es)&&(Es=null),Ts!==null&&uu(Ts)&&(Ts=null),Nl.forEach(u_),Ul.forEach(u_)}function fu(t,n){t.blockedOn===n&&(t.blockedOn=null,Qd||(Qd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Yy)))}var du=null;function f_(t){du!==t&&(du=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){du===t&&(du=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Kd(o||a)===null)continue;break}var d=ui(a);d!==null&&(t.splice(n,3),n-=3,Kf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ol(t){function n(V){return fu(V,t)}bs!==null&&fu(bs,t),Es!==null&&fu(Es,t),Ts!==null&&fu(Ts,t),Nl.forEach(n),Ul.forEach(n);for(var a=0;a<As.length;a++){var o=As[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<As.length&&(a=As[0],a.blockedOn===null);)c_(a),a.blockedOn===null&&As.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],b=u[An]||null;if(typeof d=="function")b||f_(a);else if(b){var C=null;if(d&&d.hasAttribute("formAction")){if(u=d,b=d[An]||null)C=b.formAction;else if(Kd(u)!==null)continue}else C=b.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),f_(a)}}}function Jd(t){this._internalRoot=t}hu.prototype.render=Jd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Ni();a_(a,o,t,n,null,null)},hu.prototype.unmount=Jd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;a_(t.current,2,null,t,null,null),Yc(),n[Zn]=null}};function hu(t){this._internalRoot=t}hu.prototype.unstable_scheduleHydration=function(t){if(t){var n=At();t={blockedOn:null,target:t,priority:n};for(var a=0;a<As.length&&n!==0&&n<As[a].priority;a++);As.splice(a,0,t),a===0&&c_(t)}};var d_=e.version;if(d_!=="19.1.0")throw Error(s(527,d_,"19.1.0"));ne.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Zy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{pe=pu.inject(Zy),Oe=pu}catch{}}return zl.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Cg,d=wg,b=Dg,C=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(C=n.unstable_transitionCallbacks)),n=n_(t,1,!1,null,null,a,o,u,d,b,C,null),t[Zn]=n.current,Od(t),new Jd(n)},zl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=Cg,b=wg,C=Dg,V=null,le=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(V=a.unstable_transitionCallbacks),a.formState!==void 0&&(le=a.formState)),n=n_(t,1,!0,n,a??null,o,u,d,b,C,V,le),n.context=i_(null),a=n.current,o=Ni(),o=It(o),u=cs(o),u.callback=null,us(a,u,o),a=o,n.current.lanes=a,ye(n,a),_a(n),t[Zn]=n.current,Od(t),new hu(n)},zl.version="19.1.0",zl}var M_;function cS(){if(M_)return th.exports;M_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),th.exports=lS(),th.exports}var uS=cS();/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),dS=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),b_=r=>{const e=dS(r);return e.charAt(0).toUpperCase()+e.slice(1)},Hv=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),hS=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=Me.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...h},p)=>Me.createElement("svg",{ref:p,...pS,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:Hv("lucide",l),...!c&&!hS(h)&&{"aria-hidden":"true"},...h},[...f.map(([m,v])=>Me.createElement(m,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=(r,e)=>{const i=Me.forwardRef(({className:s,...l},c)=>Me.createElement(mS,{ref:c,iconNode:e,className:Hv(`lucide-${fS(b_(r))}`,`lucide-${r}`,s),...l}));return i.displayName=b_(r),i};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],E_=Ot("activity",gS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"1qyhux"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]],vS=Ot("armchair",_S);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Il=Ot("arrow-up-right",xS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],SS=Ot("arrow-up",yS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],sh=Ot("boxes",MS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],qh=Ot("check",bS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],TS=Ot("chevron-right",ES);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],RS=Ot("circle-check",AS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],wS=Ot("database",CS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],ju=Ot("download",DS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],rh=Ot("file-spreadsheet",NS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],oh=Ot("file-text",US);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],OS=Ot("flask-conical",LS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Wh=Ot("folder-open",PS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],T_=Ot("image",zS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Gv=Ot("layers",IS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Vu=Ot("layout-grid",BS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],HS=Ot("leaf",FS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],A_=Ot("loader-circle",GS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],VS=Ot("maximize",jS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],XS=Ot("mic",kS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"M5 12h14",key:"1ays0h"}]],R_=Ot("minus",qS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],YS=Ot("move",WS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]],KS=Ot("panel-right-close",ZS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]],mu=Ot("paperclip",QS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],lh=Ot("play",JS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],gu=Ot("plus",$S);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Ju=Ot("refresh-cw",eM);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],C_=Ot("save",tM);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],iM=Ot("settings",nM);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],ch=Ot("sparkles",aM);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],$u=Ot("square",sM);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],jv=Ot("upload",rM);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],lM=Ot("volume-2",oM);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],uM=Ot("wifi-off",cM);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Bl=Ot("x",fM);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ip="176",$a={ROTATE:0,DOLLY:1,PAN:2},Is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dM=0,w_=1,hM=2,Vv=1,kv=2,Qa=3,ts=0,xi=1,ya=2,Bs=0,wo=1,D_=2,N_=3,U_=4,pM=5,_r=100,mM=101,gM=102,_M=103,vM=104,xM=200,yM=201,SM=202,MM=203,Yh=204,Zh=205,bM=206,EM=207,TM=208,AM=209,RM=210,CM=211,wM=212,DM=213,NM=214,Kh=0,Qh=1,Jh=2,No=3,$h=4,ep=5,tp=6,np=7,Xv=0,UM=1,LM=2,Fs=0,OM=1,PM=2,zM=3,qv=4,IM=5,BM=6,FM=7,Wv=300,Uo=301,Lo=302,ip=303,ap=304,af=306,sp=1e3,xr=1001,rp=1002,Pi=1003,HM=1004,_u=1005,Sa=1006,uh=1007,yr=1008,Ea=1009,Yv=1010,Zv=1011,Yl=1012,Bp=1013,Sr=1014,Ma=1015,tc=1016,Fp=1017,Hp=1018,Zl=1020,Kv=35902,Qv=1021,Jv=1022,ca=1023,Kl=1026,Ql=1027,Gp=1028,jp=1029,$v=1030,Vp=1031,kp=1033,ku=33776,Xu=33777,qu=33778,Wu=33779,op=35840,lp=35841,cp=35842,up=35843,fp=36196,dp=37492,hp=37496,pp=37808,mp=37809,gp=37810,_p=37811,vp=37812,xp=37813,yp=37814,Sp=37815,Mp=37816,bp=37817,Ep=37818,Tp=37819,Ap=37820,Rp=37821,Yu=36492,Cp=36494,wp=36495,ex=36283,Dp=36284,Np=36285,Up=36286,GM=3200,jM=3201,tx=0,VM=1,zs="",ci="srgb",Oo="srgb-linear",ef="linear",Jt="srgb",ho=7680,L_=519,kM=512,XM=513,qM=514,nx=515,WM=516,YM=517,ZM=518,KM=519,O_=35044,P_="300 es",Ja=2e3,tf=2001;class Er{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const ni=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zu=Math.PI/180,Lp=180/Math.PI;function nc(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(ni[r&255]+ni[r>>8&255]+ni[r>>16&255]+ni[r>>24&255]+"-"+ni[e&255]+ni[e>>8&255]+"-"+ni[e>>16&15|64]+ni[e>>24&255]+"-"+ni[i&63|128]+ni[i>>8&255]+"-"+ni[i>>16&255]+ni[i>>24&255]+ni[s&255]+ni[s>>8&255]+ni[s>>16&255]+ni[s>>24&255]).toLowerCase()}function Tt(r,e,i){return Math.max(e,Math.min(i,r))}function QM(r,e){return(r%e+e)%e}function fh(r,e,i){return(1-i)*r+i*e}function Fl(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const JM={DEG2RAD:Zu};class pt{constructor(e=0,i=0){pt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Tt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e,i,s,l,c,f,h,p,m){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,p,m)}set(e,i,s,l,c,f,h,p,m){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=p,v[6]=s,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],p=s[6],m=s[1],v=s[4],y=s[7],S=s[2],M=s[5],E=s[8],w=l[0],x=l[3],_=l[6],P=l[1],L=l[4],U=l[7],G=l[2],F=l[5],j=l[8];return c[0]=f*w+h*P+p*G,c[3]=f*x+h*L+p*F,c[6]=f*_+h*U+p*j,c[1]=m*w+v*P+y*G,c[4]=m*x+v*L+y*F,c[7]=m*_+v*U+y*j,c[2]=S*w+M*P+E*G,c[5]=S*x+M*L+E*F,c[8]=S*_+M*U+E*j,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],v=e[8];return i*f*v-i*h*m-s*c*v+s*h*p+l*c*m-l*f*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],v=e[8],y=v*f-h*m,S=h*p-v*c,M=m*c-f*p,E=i*y+s*S+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=y*w,e[1]=(l*m-v*s)*w,e[2]=(h*s-l*f)*w,e[3]=S*w,e[4]=(v*i-l*p)*w,e[5]=(l*c-h*i)*w,e[6]=M*w,e[7]=(s*p-m*i)*w,e[8]=(f*i-s*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*h)+f+e,-l*m,l*p,-l*(-m*f+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(dh.makeScale(e,i)),this}rotate(e){return this.premultiply(dh.makeRotation(-e)),this}translate(e,i){return this.premultiply(dh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dh=new vt;function ix(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function nf(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $M(){const r=nf("canvas");return r.style.display="block",r}const z_={};function Ku(r){r in z_||(z_[r]=!0,console.warn(r))}function eb(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function tb(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function nb(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const I_=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),B_=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ib(){const r={enabled:!0,workingColorSpace:Oo,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Jt&&(l.r=es(l.r),l.g=es(l.g),l.b=es(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Jt&&(l.r=Do(l.r),l.g=Do(l.g),l.b=Do(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===zs?ef:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Oo]:{primaries:e,whitePoint:s,transfer:ef,toXYZ:I_,fromXYZ:B_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:s,transfer:Jt,toXYZ:I_,fromXYZ:B_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),r}const Vt=ib();function es(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Do(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let po;class ab{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{po===void 0&&(po=nf("canvas")),po.width=e.width,po.height=e.height;const l=po.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=po}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=nf("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=es(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(es(i[s]/255)*255):i[s]=es(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sb=0;class Xp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=nc(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(hh(l[f].image)):c.push(hh(l[f]))}else c=hh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function hh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ab.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rb=0;class ai extends Er{constructor(e=ai.DEFAULT_IMAGE,i=ai.DEFAULT_MAPPING,s=xr,l=xr,c=Sa,f=yr,h=ca,p=Ea,m=ai.DEFAULT_ANISOTROPY,v=zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=nc(),this.name="",this.source=new Xp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sp:e.x=e.x-Math.floor(e.x);break;case xr:e.x=e.x<0?0:1;break;case rp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sp:e.y=e.y-Math.floor(e.y);break;case xr:e.y=e.y<0?0:1;break;case rp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=Wv;ai.DEFAULT_ANISOTROPY=1;class Sn{constructor(e=0,i=0,s=0,l=1){Sn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const p=e.elements,m=p[0],v=p[4],y=p[8],S=p[1],M=p[5],E=p[9],w=p[2],x=p[6],_=p[10];if(Math.abs(v-S)<.01&&Math.abs(y-w)<.01&&Math.abs(E-x)<.01){if(Math.abs(v+S)<.1&&Math.abs(y+w)<.1&&Math.abs(E+x)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,U=(M+1)/2,G=(_+1)/2,F=(v+S)/4,j=(y+w)/4,I=(E+x)/4;return L>U&&L>G?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=F/s,c=j/s):U>G?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=F/l,c=I/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=j/c,l=I/c),this.set(s,l,c,i),this}let P=Math.sqrt((x-E)*(x-E)+(y-w)*(y-w)+(S-v)*(S-v));return Math.abs(P)<.001&&(P=1),this.x=(x-E)/P,this.y=(y-w)/P,this.z=(S-v)/P,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this.w=Tt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this.w=Tt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ob extends Er{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth?s.depth:1,this.scissor=new Sn(0,0,e,i),this.scissorTest=!1,this.viewport=new Sn(0,0,e,i);const l={width:e,height:i,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const c=new ai(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Xp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends ob{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class ax extends ai{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lb extends ai{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,h){let p=s[l+0],m=s[l+1],v=s[l+2],y=s[l+3];const S=c[f+0],M=c[f+1],E=c[f+2],w=c[f+3];if(h===0){e[i+0]=p,e[i+1]=m,e[i+2]=v,e[i+3]=y;return}if(h===1){e[i+0]=S,e[i+1]=M,e[i+2]=E,e[i+3]=w;return}if(y!==w||p!==S||m!==M||v!==E){let x=1-h;const _=p*S+m*M+v*E+y*w,P=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const G=Math.sqrt(L),F=Math.atan2(G,_*P);x=Math.sin(x*F)/G,h=Math.sin(h*F)/G}const U=h*P;if(p=p*x+S*U,m=m*x+M*U,v=v*x+E*U,y=y*x+w*U,x===1-h){const G=1/Math.sqrt(p*p+m*m+v*v+y*y);p*=G,m*=G,v*=G,y*=G}}e[i]=p,e[i+1]=m,e[i+2]=v,e[i+3]=y}static multiplyQuaternionsFlat(e,i,s,l,c,f){const h=s[l],p=s[l+1],m=s[l+2],v=s[l+3],y=c[f],S=c[f+1],M=c[f+2],E=c[f+3];return e[i]=h*E+v*y+p*M-m*S,e[i+1]=p*E+v*S+m*y-h*M,e[i+2]=m*E+v*M+h*S-p*y,e[i+3]=v*E-h*y-p*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,p=Math.sin,m=h(s/2),v=h(l/2),y=h(c/2),S=p(s/2),M=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=S*v*y+m*M*E,this._y=m*M*y-S*v*E,this._z=m*v*E+S*M*y,this._w=m*v*y-S*M*E;break;case"YXZ":this._x=S*v*y+m*M*E,this._y=m*M*y-S*v*E,this._z=m*v*E-S*M*y,this._w=m*v*y+S*M*E;break;case"ZXY":this._x=S*v*y-m*M*E,this._y=m*M*y+S*v*E,this._z=m*v*E+S*M*y,this._w=m*v*y-S*M*E;break;case"ZYX":this._x=S*v*y-m*M*E,this._y=m*M*y+S*v*E,this._z=m*v*E-S*M*y,this._w=m*v*y+S*M*E;break;case"YZX":this._x=S*v*y+m*M*E,this._y=m*M*y+S*v*E,this._z=m*v*E-S*M*y,this._w=m*v*y-S*M*E;break;case"XZY":this._x=S*v*y-m*M*E,this._y=m*M*y-S*v*E,this._z=m*v*E+S*M*y,this._w=m*v*y+S*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],p=i[9],m=i[2],v=i[6],y=i[10],S=s+h+y;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-p)*M,this._y=(c-m)*M,this._z=(f-l)*M}else if(s>h&&s>y){const M=2*Math.sqrt(1+s-h-y);this._w=(v-p)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+m)/M}else if(h>y){const M=2*Math.sqrt(1+h-s-y);this._w=(c-m)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+y-s-h);this._w=(f-l)/M,this._x=(c+m)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,h=i._x,p=i._y,m=i._z,v=i._w;return this._x=s*v+f*h+l*m-c*p,this._y=l*v+f*p+c*h-s*m,this._z=c*v+f*m+s*p-l*h,this._w=f*v-s*h-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,f=this._w;let h=f*e._w+s*e._x+l*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,h),y=Math.sin((1-i)*v)/m,S=Math.sin(i*v)/m;return this._w=f*y+this._w*S,this._x=s*y+this._x*S,this._y=l*y+this._y*S,this._z=c*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,i=0,s=0){re.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(F_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(F_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,h=e.z,p=e.w,m=2*(f*l-h*s),v=2*(h*i-c*l),y=2*(c*s-f*i);return this.x=i+p*m+f*y-h*v,this.y=s+p*v+h*m-c*y,this.z=l+p*y+c*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*f-s*p,this.z=s*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ph.copy(this).projectOnVector(e),this.sub(ph)}reflect(e){return this.sub(ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Tt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ph=new re,F_=new br;class Tr{constructor(e=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(na.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(na.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=na.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,na):na.fromBufferAttribute(c,f),na.applyMatrix4(e.matrixWorld),this.expandByPoint(na);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vu.copy(s.boundingBox)),vu.applyMatrix4(e.matrixWorld),this.union(vu)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,na),na.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hl),xu.subVectors(this.max,Hl),mo.subVectors(e.a,Hl),go.subVectors(e.b,Hl),_o.subVectors(e.c,Hl),Cs.subVectors(go,mo),ws.subVectors(_o,go),ur.subVectors(mo,_o);let i=[0,-Cs.z,Cs.y,0,-ws.z,ws.y,0,-ur.z,ur.y,Cs.z,0,-Cs.x,ws.z,0,-ws.x,ur.z,0,-ur.x,-Cs.y,Cs.x,0,-ws.y,ws.x,0,-ur.y,ur.x,0];return!mh(i,mo,go,_o,xu)||(i=[1,0,0,0,1,0,0,0,1],!mh(i,mo,go,_o,xu))?!1:(yu.crossVectors(Cs,ws),i=[yu.x,yu.y,yu.z],mh(i,mo,go,_o,xu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,na).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(na).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xa=[new re,new re,new re,new re,new re,new re,new re,new re],na=new re,vu=new Tr,mo=new re,go=new re,_o=new re,Cs=new re,ws=new re,ur=new re,Hl=new re,xu=new re,yu=new re,fr=new re;function mh(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){fr.fromArray(r,c);const h=l.x*Math.abs(fr.x)+l.y*Math.abs(fr.y)+l.z*Math.abs(fr.z),p=e.dot(fr),m=i.dot(fr),v=s.dot(fr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>h)return!1}return!0}const cb=new Tr,Gl=new re,gh=new re;class ic{constructor(e=new re,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):cb.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gl.subVectors(e,this.center);const i=Gl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Gl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gl.copy(e.center).add(gh)),this.expandByPoint(Gl.copy(e.center).sub(gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qa=new re,_h=new re,Su=new re,Ds=new re,vh=new re,Mu=new re,xh=new re;class qp{constructor(e=new re,i=new re(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=qa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(qa.copy(this.origin).addScaledVector(this.direction,i),qa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){_h.copy(e).add(i).multiplyScalar(.5),Su.copy(i).sub(e).normalize(),Ds.copy(this.origin).sub(_h);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Su),h=Ds.dot(this.direction),p=-Ds.dot(Su),m=Ds.lengthSq(),v=Math.abs(1-f*f);let y,S,M,E;if(v>0)if(y=f*p-h,S=f*h-p,E=c*v,y>=0)if(S>=-E)if(S<=E){const w=1/v;y*=w,S*=w,M=y*(y+f*S+2*h)+S*(f*y+S+2*p)+m}else S=c,y=Math.max(0,-(f*S+h)),M=-y*y+S*(S+2*p)+m;else S=-c,y=Math.max(0,-(f*S+h)),M=-y*y+S*(S+2*p)+m;else S<=-E?(y=Math.max(0,-(-f*c+h)),S=y>0?-c:Math.min(Math.max(-c,-p),c),M=-y*y+S*(S+2*p)+m):S<=E?(y=0,S=Math.min(Math.max(-c,-p),c),M=S*(S+2*p)+m):(y=Math.max(0,-(f*c+h)),S=y>0?c:Math.min(Math.max(-c,-p),c),M=-y*y+S*(S+2*p)+m);else S=f>0?-c:c,y=Math.max(0,-(f*S+h)),M=-y*y+S*(S+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(_h).addScaledVector(Su,S),M}intersectSphere(e,i){qa.subVectors(e.center,this.origin);const s=qa.dot(this.direction),l=qa.dot(qa)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,p=s+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,h,p;const m=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,S=this.origin;return m>=0?(s=(e.min.x-S.x)*m,l=(e.max.x-S.x)*m):(s=(e.max.x-S.x)*m,l=(e.min.x-S.x)*m),v>=0?(c=(e.min.y-S.y)*v,f=(e.max.y-S.y)*v):(c=(e.max.y-S.y)*v,f=(e.min.y-S.y)*v),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),y>=0?(h=(e.min.z-S.z)*y,p=(e.max.z-S.z)*y):(h=(e.max.z-S.z)*y,p=(e.min.z-S.z)*y),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,qa)!==null}intersectTriangle(e,i,s,l,c){vh.subVectors(i,e),Mu.subVectors(s,e),xh.crossVectors(vh,Mu);let f=this.direction.dot(xh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ds.subVectors(this.origin,e);const p=h*this.direction.dot(Mu.crossVectors(Ds,Mu));if(p<0)return null;const m=h*this.direction.dot(vh.cross(Ds));if(m<0||p+m>f)return null;const v=-h*Ds.dot(xh);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(e,i,s,l,c,f,h,p,m,v,y,S,M,E,w,x){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,p,m,v,y,S,M,E,w,x)}set(e,i,s,l,c,f,h,p,m,v,y,S,M,E,w,x){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=f,_[9]=h,_[13]=p,_[2]=m,_[6]=v,_[10]=y,_[14]=S,_[3]=M,_[7]=E,_[11]=w,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/vo.setFromMatrixColumn(e,0).length(),c=1/vo.setFromMatrixColumn(e,1).length(),f=1/vo.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),h=Math.sin(s),p=Math.cos(l),m=Math.sin(l),v=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const S=f*v,M=f*y,E=h*v,w=h*y;i[0]=p*v,i[4]=-p*y,i[8]=m,i[1]=M+E*m,i[5]=S-w*m,i[9]=-h*p,i[2]=w-S*m,i[6]=E+M*m,i[10]=f*p}else if(e.order==="YXZ"){const S=p*v,M=p*y,E=m*v,w=m*y;i[0]=S+w*h,i[4]=E*h-M,i[8]=f*m,i[1]=f*y,i[5]=f*v,i[9]=-h,i[2]=M*h-E,i[6]=w+S*h,i[10]=f*p}else if(e.order==="ZXY"){const S=p*v,M=p*y,E=m*v,w=m*y;i[0]=S-w*h,i[4]=-f*y,i[8]=E+M*h,i[1]=M+E*h,i[5]=f*v,i[9]=w-S*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(e.order==="ZYX"){const S=f*v,M=f*y,E=h*v,w=h*y;i[0]=p*v,i[4]=E*m-M,i[8]=S*m+w,i[1]=p*y,i[5]=w*m+S,i[9]=M*m-E,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(e.order==="YZX"){const S=f*p,M=f*m,E=h*p,w=h*m;i[0]=p*v,i[4]=w-S*y,i[8]=E*y+M,i[1]=y,i[5]=f*v,i[9]=-h*v,i[2]=-m*v,i[6]=M*y+E,i[10]=S-w*y}else if(e.order==="XZY"){const S=f*p,M=f*m,E=h*p,w=h*m;i[0]=p*v,i[4]=-y,i[8]=m*v,i[1]=S*y+w,i[5]=f*v,i[9]=M*y-E,i[2]=E*y-M,i[6]=h*v,i[10]=w*y+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ub,e,fb)}lookAt(e,i,s){const l=this.elements;return Li.subVectors(e,i),Li.lengthSq()===0&&(Li.z=1),Li.normalize(),Ns.crossVectors(s,Li),Ns.lengthSq()===0&&(Math.abs(s.z)===1?Li.x+=1e-4:Li.z+=1e-4,Li.normalize(),Ns.crossVectors(s,Li)),Ns.normalize(),bu.crossVectors(Li,Ns),l[0]=Ns.x,l[4]=bu.x,l[8]=Li.x,l[1]=Ns.y,l[5]=bu.y,l[9]=Li.y,l[2]=Ns.z,l[6]=bu.z,l[10]=Li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],p=s[8],m=s[12],v=s[1],y=s[5],S=s[9],M=s[13],E=s[2],w=s[6],x=s[10],_=s[14],P=s[3],L=s[7],U=s[11],G=s[15],F=l[0],j=l[4],I=l[8],D=l[12],R=l[1],B=l[5],J=l[9],ae=l[13],_e=l[2],fe=l[6],H=l[10],ne=l[14],Y=l[3],Ee=l[7],O=l[11],se=l[15];return c[0]=f*F+h*R+p*_e+m*Y,c[4]=f*j+h*B+p*fe+m*Ee,c[8]=f*I+h*J+p*H+m*O,c[12]=f*D+h*ae+p*ne+m*se,c[1]=v*F+y*R+S*_e+M*Y,c[5]=v*j+y*B+S*fe+M*Ee,c[9]=v*I+y*J+S*H+M*O,c[13]=v*D+y*ae+S*ne+M*se,c[2]=E*F+w*R+x*_e+_*Y,c[6]=E*j+w*B+x*fe+_*Ee,c[10]=E*I+w*J+x*H+_*O,c[14]=E*D+w*ae+x*ne+_*se,c[3]=P*F+L*R+U*_e+G*Y,c[7]=P*j+L*B+U*fe+G*Ee,c[11]=P*I+L*J+U*H+G*O,c[15]=P*D+L*ae+U*ne+G*se,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],h=e[5],p=e[9],m=e[13],v=e[2],y=e[6],S=e[10],M=e[14],E=e[3],w=e[7],x=e[11],_=e[15];return E*(+c*p*y-l*m*y-c*h*S+s*m*S+l*h*M-s*p*M)+w*(+i*p*M-i*m*S+c*f*S-l*f*M+l*m*v-c*p*v)+x*(+i*m*y-i*h*M-c*f*y+s*f*M+c*h*v-s*m*v)+_*(-l*h*v-i*p*y+i*h*S+l*f*y-s*f*S+s*p*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],v=e[8],y=e[9],S=e[10],M=e[11],E=e[12],w=e[13],x=e[14],_=e[15],P=y*x*m-w*S*m+w*p*M-h*x*M-y*p*_+h*S*_,L=E*S*m-v*x*m-E*p*M+f*x*M+v*p*_-f*S*_,U=v*w*m-E*y*m+E*h*M-f*w*M-v*h*_+f*y*_,G=E*y*p-v*w*p-E*h*S+f*w*S+v*h*x-f*y*x,F=i*P+s*L+l*U+c*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/F;return e[0]=P*j,e[1]=(w*S*c-y*x*c-w*l*M+s*x*M+y*l*_-s*S*_)*j,e[2]=(h*x*c-w*p*c+w*l*m-s*x*m-h*l*_+s*p*_)*j,e[3]=(y*p*c-h*S*c-y*l*m+s*S*m+h*l*M-s*p*M)*j,e[4]=L*j,e[5]=(v*x*c-E*S*c+E*l*M-i*x*M-v*l*_+i*S*_)*j,e[6]=(E*p*c-f*x*c-E*l*m+i*x*m+f*l*_-i*p*_)*j,e[7]=(f*S*c-v*p*c+v*l*m-i*S*m-f*l*M+i*p*M)*j,e[8]=U*j,e[9]=(E*y*c-v*w*c-E*s*M+i*w*M+v*s*_-i*y*_)*j,e[10]=(f*w*c-E*h*c+E*s*m-i*w*m-f*s*_+i*h*_)*j,e[11]=(v*h*c-f*y*c-v*s*m+i*y*m+f*s*M-i*h*M)*j,e[12]=G*j,e[13]=(v*w*l-E*y*l+E*s*S-i*w*S-v*s*x+i*y*x)*j,e[14]=(E*h*l-f*w*l-E*s*p+i*w*p+f*s*x-i*h*x)*j,e[15]=(f*y*l-v*h*l+v*s*p-i*y*p-f*s*S+i*h*S)*j,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,h=e.y,p=e.z,m=c*f,v=c*h;return this.set(m*f+s,m*h-l*p,m*p+l*h,0,m*h+l*p,v*h+s,v*p-l*f,0,m*p-l*h,v*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,p=i._w,m=c+c,v=f+f,y=h+h,S=c*m,M=c*v,E=c*y,w=f*v,x=f*y,_=h*y,P=p*m,L=p*v,U=p*y,G=s.x,F=s.y,j=s.z;return l[0]=(1-(w+_))*G,l[1]=(M+U)*G,l[2]=(E-L)*G,l[3]=0,l[4]=(M-U)*F,l[5]=(1-(S+_))*F,l[6]=(x+P)*F,l[7]=0,l[8]=(E+L)*j,l[9]=(x-P)*j,l[10]=(1-(S+w))*j,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=vo.set(l[0],l[1],l[2]).length();const f=vo.set(l[4],l[5],l[6]).length(),h=vo.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],ia.copy(this);const m=1/c,v=1/f,y=1/h;return ia.elements[0]*=m,ia.elements[1]*=m,ia.elements[2]*=m,ia.elements[4]*=v,ia.elements[5]*=v,ia.elements[6]*=v,ia.elements[8]*=y,ia.elements[9]*=y,ia.elements[10]*=y,i.setFromRotationMatrix(ia),s.x=c,s.y=f,s.z=h,this}makePerspective(e,i,s,l,c,f,h=Ja){const p=this.elements,m=2*c/(i-e),v=2*c/(s-l),y=(i+e)/(i-e),S=(s+l)/(s-l);let M,E;if(h===Ja)M=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===tf)M=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,h=Ja){const p=this.elements,m=1/(i-e),v=1/(s-l),y=1/(f-c),S=(i+e)*m,M=(s+l)*v;let E,w;if(h===Ja)E=(f+c)*y,w=-2*y;else if(h===tf)E=c*y,w=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=w,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const vo=new re,ia=new on,ub=new re(0,0,0),fb=new re(1,1,1),Ns=new re,bu=new re,Li=new re,H_=new on,G_=new br;class Ta{constructor(e=0,i=0,s=0,l=Ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],p=l[1],m=l[5],v=l[9],y=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Tt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return H_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(H_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return G_.setFromEuler(this),this.setFromQuaternion(G_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ta.DEFAULT_ORDER="XYZ";class Wp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let db=0;const j_=new re,xo=new br,Wa=new on,Eu=new re,jl=new re,hb=new re,pb=new br,V_=new re(1,0,0),k_=new re(0,1,0),X_=new re(0,0,1),q_={type:"added"},mb={type:"removed"},yo={type:"childadded",child:null},yh={type:"childremoved",child:null};class kn extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=nc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new re,i=new Ta,s=new br,l=new re(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new vt}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return xo.setFromAxisAngle(e,i),this.quaternion.multiply(xo),this}rotateOnWorldAxis(e,i){return xo.setFromAxisAngle(e,i),this.quaternion.premultiply(xo),this}rotateX(e){return this.rotateOnAxis(V_,e)}rotateY(e){return this.rotateOnAxis(k_,e)}rotateZ(e){return this.rotateOnAxis(X_,e)}translateOnAxis(e,i){return j_.copy(e).applyQuaternion(this.quaternion),this.position.add(j_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(V_,e)}translateY(e){return this.translateOnAxis(k_,e)}translateZ(e){return this.translateOnAxis(X_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Eu.copy(e):Eu.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),jl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wa.lookAt(jl,Eu,this.up):Wa.lookAt(Eu,jl,this.up),this.quaternion.setFromRotationMatrix(Wa),l&&(Wa.extractRotation(l.matrixWorld),xo.setFromRotationMatrix(Wa),this.quaternion.premultiply(xo.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(q_),yo.child=e,this.dispatchEvent(yo),yo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(mb),yh.child=e,this.dispatchEvent(yh),yh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(q_),yo.child=e,this.dispatchEvent(yo),yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jl,e,hb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jl,pb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?{min:h.boundingBox.min.toArray(),max:h.boundingBox.max.toArray()}:void 0,boundingSphere:h.boundingSphere?{radius:h.boundingSphere.radius,center:h.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const y=p[m];c(e.shapes,y)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(e.animations,p))}}if(i){const h=f(e.geometries),p=f(e.materials),m=f(e.textures),v=f(e.images),y=f(e.shapes),S=f(e.skeletons),M=f(e.animations),E=f(e.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),y.length>0&&(s.shapes=y),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const p=[];for(const m in h){const v=h[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}kn.DEFAULT_UP=new re(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const aa=new re,Ya=new re,Sh=new re,Za=new re,So=new re,Mo=new re,W_=new re,Mh=new re,bh=new re,Eh=new re,Th=new Sn,Ah=new Sn,Rh=new Sn;class la{constructor(e=new re,i=new re,s=new re){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),aa.subVectors(e,i),l.cross(aa);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){aa.subVectors(l,i),Ya.subVectors(s,i),Sh.subVectors(e,i);const f=aa.dot(aa),h=aa.dot(Ya),p=aa.dot(Sh),m=Ya.dot(Ya),v=Ya.dot(Sh),y=f*m-h*h;if(y===0)return c.set(0,0,0),null;const S=1/y,M=(m*p-h*v)*S,E=(f*v-h*p)*S;return c.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Za)===null?!1:Za.x>=0&&Za.y>=0&&Za.x+Za.y<=1}static getInterpolation(e,i,s,l,c,f,h,p){return this.getBarycoord(e,i,s,l,Za)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Za.x),p.addScaledVector(f,Za.y),p.addScaledVector(h,Za.z),p)}static getInterpolatedAttribute(e,i,s,l,c,f){return Th.setScalar(0),Ah.setScalar(0),Rh.setScalar(0),Th.fromBufferAttribute(e,i),Ah.fromBufferAttribute(e,s),Rh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Th,c.x),f.addScaledVector(Ah,c.y),f.addScaledVector(Rh,c.z),f}static isFrontFacing(e,i,s,l){return aa.subVectors(s,i),Ya.subVectors(e,i),aa.cross(Ya).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return aa.subVectors(this.c,this.b),Ya.subVectors(this.a,this.b),aa.cross(Ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return la.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return la.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return la.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return la.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return la.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,h;So.subVectors(l,s),Mo.subVectors(c,s),Mh.subVectors(e,s);const p=So.dot(Mh),m=Mo.dot(Mh);if(p<=0&&m<=0)return i.copy(s);bh.subVectors(e,l);const v=So.dot(bh),y=Mo.dot(bh);if(v>=0&&y<=v)return i.copy(l);const S=p*y-v*m;if(S<=0&&p>=0&&v<=0)return f=p/(p-v),i.copy(s).addScaledVector(So,f);Eh.subVectors(e,c);const M=So.dot(Eh),E=Mo.dot(Eh);if(E>=0&&M<=E)return i.copy(c);const w=M*m-p*E;if(w<=0&&m>=0&&E<=0)return h=m/(m-E),i.copy(s).addScaledVector(Mo,h);const x=v*E-M*y;if(x<=0&&y-v>=0&&M-E>=0)return W_.subVectors(c,l),h=(y-v)/(y-v+(M-E)),i.copy(l).addScaledVector(W_,h);const _=1/(x+w+S);return f=w*_,h=S*_,i.copy(s).addScaledVector(So,f).addScaledVector(Mo,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},Tu={h:0,s:0,l:0};function Ch(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Ut{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Vt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Vt.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Vt.workingColorSpace){if(e=QM(e,1),i=Tt(i,0,1),s=Tt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Ch(f,c,e+1/3),this.g=Ch(f,c,e),this.b=Ch(f,c,e-1/3)}return Vt.toWorkingColorSpace(this,l),this}setStyle(e,i=ci){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ci){const s=sx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=Do(e.r),this.g=Do(e.g),this.b=Do(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Vt.fromWorkingColorSpace(ii.copy(this),e),Math.round(Tt(ii.r*255,0,255))*65536+Math.round(Tt(ii.g*255,0,255))*256+Math.round(Tt(ii.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Vt.workingColorSpace){Vt.fromWorkingColorSpace(ii.copy(this),i);const s=ii.r,l=ii.g,c=ii.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let p,m;const v=(h+f)/2;if(h===f)p=0,m=0;else{const y=f-h;switch(m=v<=.5?y/(f+h):y/(2-f-h),f){case s:p=(l-c)/y+(l<c?6:0);break;case l:p=(c-s)/y+2;break;case c:p=(s-l)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,i=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(ii.copy(this),i),e.r=ii.r,e.g=ii.g,e.b=ii.b,e}getStyle(e=ci){Vt.fromWorkingColorSpace(ii.copy(this),e);const i=ii.r,s=ii.g,l=ii.b;return e!==ci?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Us),this.setHSL(Us.h+e,Us.s+i,Us.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Us),e.getHSL(Tu);const s=fh(Us.h,Tu.h,i),l=fh(Us.s,Tu.s,i),c=fh(Us.l,Tu.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ii=new Ut;Ut.NAMES=sx;let gb=0;class Io extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=nc(),this.name="",this.type="Material",this.blending=wo,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yh,this.blendDst=Zh,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=No,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==wo&&(s.blending=this.blending),this.side!==ts&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Yh&&(s.blendSrc=this.blendSrc),this.blendDst!==Zh&&(s.blendDst=this.blendDst),this.blendEquation!==_r&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==No&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==L_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ho&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ho&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ho&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Po extends Io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.combine=Xv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dn=new re,Au=new pt;let _b=0;class ua{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_b++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=O_,this.updateRanges=[],this.gpuType=Ma,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Au.fromBufferAttribute(this,i),Au.applyMatrix3(e),this.setXY(i,Au.x,Au.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Dn.fromBufferAttribute(this,i),Dn.applyMatrix3(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Dn.fromBufferAttribute(this,i),Dn.applyMatrix4(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Dn.fromBufferAttribute(this,i),Dn.applyNormalMatrix(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Dn.fromBufferAttribute(this,i),Dn.transformDirection(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Fl(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=gi(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Fl(i,this.array)),i}setX(e,i){return this.normalized&&(i=gi(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Fl(i,this.array)),i}setY(e,i){return this.normalized&&(i=gi(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Fl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=gi(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Fl(i,this.array)),i}setW(e,i){return this.normalized&&(i=gi(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=gi(i,this.array),s=gi(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=gi(i,this.array),s=gi(s,this.array),l=gi(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=gi(i,this.array),s=gi(s,this.array),l=gi(l,this.array),c=gi(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==O_&&(e.usage=this.usage),e}}class rx extends ua{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class ox extends ua{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Pn extends ua{constructor(e,i,s){super(new Float32Array(e),i,s)}}let vb=0;const Yi=new on,wh=new kn,bo=new re,Oi=new Tr,Vl=new Tr,Vn=new re;class fa extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=nc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ix(e)?ox:rx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new vt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yi.makeRotationFromQuaternion(e),this.applyMatrix4(Yi),this}rotateX(e){return Yi.makeRotationX(e),this.applyMatrix4(Yi),this}rotateY(e){return Yi.makeRotationY(e),this.applyMatrix4(Yi),this}rotateZ(e){return Yi.makeRotationZ(e),this.applyMatrix4(Yi),this}translate(e,i,s){return Yi.makeTranslation(e,i,s),this.applyMatrix4(Yi),this}scale(e,i,s){return Yi.makeScale(e,i,s),this.applyMatrix4(Yi),this}lookAt(e){return wh.lookAt(e),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bo).negate(),this.translate(bo.x,bo.y,bo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Pn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Vn.addVectors(this.boundingBox.min,Oi.min),this.boundingBox.expandByPoint(Vn),Vn.addVectors(this.boundingBox.max,Oi.max),this.boundingBox.expandByPoint(Vn)):(this.boundingBox.expandByPoint(Oi.min),this.boundingBox.expandByPoint(Oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ic);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const s=this.boundingSphere.center;if(Oi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Vl.setFromBufferAttribute(h),this.morphTargetsRelative?(Vn.addVectors(Oi.min,Vl.min),Oi.expandByPoint(Vn),Vn.addVectors(Oi.max,Vl.max),Oi.expandByPoint(Vn)):(Oi.expandByPoint(Vl.min),Oi.expandByPoint(Vl.max))}Oi.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)Vn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Vn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)Vn.fromBufferAttribute(h,m),p&&(bo.fromBufferAttribute(e,m),Vn.add(bo)),l=Math.max(l,s.distanceToSquared(Vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ua(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let I=0;I<s.count;I++)h[I]=new re,p[I]=new re;const m=new re,v=new re,y=new re,S=new pt,M=new pt,E=new pt,w=new re,x=new re;function _(I,D,R){m.fromBufferAttribute(s,I),v.fromBufferAttribute(s,D),y.fromBufferAttribute(s,R),S.fromBufferAttribute(c,I),M.fromBufferAttribute(c,D),E.fromBufferAttribute(c,R),v.sub(m),y.sub(m),M.sub(S),E.sub(S);const B=1/(M.x*E.y-E.x*M.y);isFinite(B)&&(w.copy(v).multiplyScalar(E.y).addScaledVector(y,-M.y).multiplyScalar(B),x.copy(y).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(B),h[I].add(w),h[D].add(w),h[R].add(w),p[I].add(x),p[D].add(x),p[R].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let I=0,D=P.length;I<D;++I){const R=P[I],B=R.start,J=R.count;for(let ae=B,_e=B+J;ae<_e;ae+=3)_(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const L=new re,U=new re,G=new re,F=new re;function j(I){G.fromBufferAttribute(l,I),F.copy(G);const D=h[I];L.copy(D),L.sub(G.multiplyScalar(G.dot(D))).normalize(),U.crossVectors(F,D);const B=U.dot(p[I])<0?-1:1;f.setXYZW(I,L.x,L.y,L.z,B)}for(let I=0,D=P.length;I<D;++I){const R=P[I],B=R.start,J=R.count;for(let ae=B,_e=B+J;ae<_e;ae+=3)j(e.getX(ae+0)),j(e.getX(ae+1)),j(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ua(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new re,c=new re,f=new re,h=new re,p=new re,m=new re,v=new re,y=new re;if(e)for(let S=0,M=e.count;S<M;S+=3){const E=e.getX(S+0),w=e.getX(S+1),x=e.getX(S+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,x),v.subVectors(f,c),y.subVectors(l,c),v.cross(y),h.fromBufferAttribute(s,E),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,x),h.add(v),p.add(v),m.add(v),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(x,m.x,m.y,m.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),f.fromBufferAttribute(i,S+2),v.subVectors(f,c),y.subVectors(l,c),v.cross(y),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Vn.fromBufferAttribute(e,i),Vn.normalize(),e.setXYZ(i,Vn.x,Vn.y,Vn.z)}toNonIndexed(){function e(h,p){const m=h.array,v=h.itemSize,y=h.normalized,S=new m.constructor(p.length*v);let M=0,E=0;for(let w=0,x=p.length;w<x;w++){h.isInterleavedBufferAttribute?M=p[w]*h.data.stride+h.offset:M=p[w]*v;for(let _=0;_<v;_++)S[E++]=m[M++]}return new ua(S,v,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new fa,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,s);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let v=0,y=m.length;v<y;v++){const S=m[v],M=e(S,s);p.push(M)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let y=0,S=m.length;y<S;y++){const M=m[y];v.push(M.toJSON(e.data))}v.length>0&&(l[p]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const c=e.morphAttributes;for(const m in c){const v=[],y=c[m];for(let S=0,M=y.length;S<M;S++)v.push(y[S].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const y=f[m];this.addGroup(y.start,y.count,y.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Y_=new on,dr=new qp,Ru=new ic,Z_=new re,Cu=new re,wu=new re,Du=new re,Dh=new re,Nu=new re,K_=new re,Uu=new re;class rn extends kn{constructor(e=new fa,i=new Po){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Nu.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=h[p],y=c[p];v!==0&&(Dh.fromBufferAttribute(y,e),f?Nu.addScaledVector(Dh,v):Nu.addScaledVector(Dh.sub(i),v))}i.add(Nu)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ru.copy(s.boundingSphere),Ru.applyMatrix4(c),dr.copy(e.ray).recast(e.near),!(Ru.containsPoint(dr.origin)===!1&&(dr.intersectSphere(Ru,Z_)===null||dr.origin.distanceToSquared(Z_)>(e.far-e.near)**2))&&(Y_.copy(c).invert(),dr.copy(e.ray).applyMatrix4(Y_),!(s.boundingBox!==null&&dr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,dr)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,y=c.attributes.normal,S=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,w=S.length;E<w;E++){const x=S[E],_=f[x.materialIndex],P=Math.max(x.start,M.start),L=Math.min(h.count,Math.min(x.start+x.count,M.start+M.count));for(let U=P,G=L;U<G;U+=3){const F=h.getX(U),j=h.getX(U+1),I=h.getX(U+2);l=Lu(this,_,e,s,m,v,y,F,j,I),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),w=Math.min(h.count,M.start+M.count);for(let x=E,_=w;x<_;x+=3){const P=h.getX(x),L=h.getX(x+1),U=h.getX(x+2);l=Lu(this,f,e,s,m,v,y,P,L,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,w=S.length;E<w;E++){const x=S[E],_=f[x.materialIndex],P=Math.max(x.start,M.start),L=Math.min(p.count,Math.min(x.start+x.count,M.start+M.count));for(let U=P,G=L;U<G;U+=3){const F=U,j=U+1,I=U+2;l=Lu(this,_,e,s,m,v,y,F,j,I),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let x=E,_=w;x<_;x+=3){const P=x,L=x+1,U=x+2;l=Lu(this,f,e,s,m,v,y,P,L,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function xb(r,e,i,s,l,c,f,h){let p;if(e.side===xi?p=s.intersectTriangle(f,c,l,!0,h):p=s.intersectTriangle(l,c,f,e.side===ts,h),p===null)return null;Uu.copy(h),Uu.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(Uu);return m<i.near||m>i.far?null:{distance:m,point:Uu.clone(),object:r}}function Lu(r,e,i,s,l,c,f,h,p,m){r.getVertexPosition(h,Cu),r.getVertexPosition(p,wu),r.getVertexPosition(m,Du);const v=xb(r,e,i,s,Cu,wu,Du,K_);if(v){const y=new re;la.getBarycoord(K_,Cu,wu,Du,y),l&&(v.uv=la.getInterpolatedAttribute(l,h,p,m,y,new pt)),c&&(v.uv1=la.getInterpolatedAttribute(c,h,p,m,y,new pt)),f&&(v.normal=la.getInterpolatedAttribute(f,h,p,m,y,new re),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const S={a:h,b:p,c:m,normal:new re,materialIndex:0};la.getNormal(Cu,wu,Du,S.normal),v.face=S,v.barycoord=y}return v}class ba extends fa{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],v=[],y=[];let S=0,M=0;E("z","y","x",-1,-1,s,i,e,f,c,0),E("z","y","x",1,-1,s,i,-e,f,c,1),E("x","z","y",1,1,e,s,i,l,f,2),E("x","z","y",1,-1,e,s,-i,l,f,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Pn(m,3)),this.setAttribute("normal",new Pn(v,3)),this.setAttribute("uv",new Pn(y,2));function E(w,x,_,P,L,U,G,F,j,I,D){const R=U/j,B=G/I,J=U/2,ae=G/2,_e=F/2,fe=j+1,H=I+1;let ne=0,Y=0;const Ee=new re;for(let O=0;O<H;O++){const se=O*B-ae;for(let Ae=0;Ae<fe;Ae++){const Ne=Ae*R-J;Ee[w]=Ne*P,Ee[x]=se*L,Ee[_]=_e,m.push(Ee.x,Ee.y,Ee.z),Ee[w]=0,Ee[x]=0,Ee[_]=F>0?1:-1,v.push(Ee.x,Ee.y,Ee.z),y.push(Ae/j),y.push(1-O/I),ne+=1}}for(let O=0;O<I;O++)for(let se=0;se<j;se++){const Ae=S+se+fe*O,Ne=S+se+fe*(O+1),ee=S+(se+1)+fe*(O+1),K=S+(se+1)+fe*O;p.push(Ae,Ne,K),p.push(Ne,ee,K),Y+=6}h.addGroup(M,Y,D),M+=Y,S+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zo(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function li(r){const e={};for(let i=0;i<r.length;i++){const s=zo(r[i]);for(const l in s)e[l]=s[l]}return e}function yb(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function lx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Vt.workingColorSpace}const Sb={clone:zo,merge:li};var Mb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hs extends Io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mb,this.fragmentShader=bb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zo(e.uniforms),this.uniformsGroups=yb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class cx extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Ja}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ls=new re,Q_=new pt,J_=new pt;class oa extends cx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Lp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lp*2*Math.atan(Math.tan(Zu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ls.x,Ls.y).multiplyScalar(-e/Ls.z),Ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ls.x,Ls.y).multiplyScalar(-e/Ls.z)}getViewSize(e,i){return this.getViewBounds(e,Q_,J_),i.subVectors(J_,Q_)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Zu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Eo=-90,To=1;class Eb extends kn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oa(Eo,To,e,i);l.layers=this.layers,this.add(l);const c=new oa(Eo,To,e,i);c.layers=this.layers,this.add(c);const f=new oa(Eo,To,e,i);f.layers=this.layers,this.add(f);const h=new oa(Eo,To,e,i);h.layers=this.layers,this.add(h);const p=new oa(Eo,To,e,i);p.layers=this.layers,this.add(p);const m=new oa(Eo,To,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,p]=i;for(const m of i)this.remove(m);if(e===Ja)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===tf)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,v]=this.children,y=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,m),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(y,S,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class ux extends ai{constructor(e=[],i=Uo,s,l,c,f,h,p,m,v){super(e,i,s,l,c,f,h,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tb extends Mr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new ux(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Sa}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ba(5,5,5),c=new Hs({name:"CubemapFromEquirect",uniforms:zo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:xi,blending:Bs});c.uniforms.tEquirect.value=i;const f=new rn(l,c),h=i.minFilter;return i.minFilter===yr&&(i.minFilter=Sa),new Eb(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}class vi extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ab={type:"move"};class Nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const w of e.hand.values()){const x=i.getJointPose(w,s),_=this._getHandJoint(m,w);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const v=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],S=v.position.distanceTo(y.position),M=.02,E=.005;m.inputState.pinching&&S>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Ab)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new vi;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Rb extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ta,this.environmentIntensity=1,this.environmentRotation=new Ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Cb extends ai{constructor(e=null,i=1,s=1,l,c,f,h,p,m=Pi,v=Pi,y,S){super(null,f,h,p,m,v,l,c,y,S),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $_ extends ua{constructor(e,i,s,l=1){super(e,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ao=new on,ev=new on,Ou=[],tv=new Tr,wb=new on,kl=new rn,Xl=new ic;class Db extends rn{constructor(e,i,s){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new $_(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,wb)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Tr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Ao),tv.copy(e.boundingBox).applyMatrix4(Ao),this.boundingBox.union(tv)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new ic),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Ao),Xl.copy(e.boundingSphere).applyMatrix4(Ao),this.boundingSphere.union(Xl)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=e*c+1;for(let h=0;h<s.length;h++)s[h]=l[f+h]}raycast(e,i){const s=this.matrixWorld,l=this.count;if(kl.geometry=this.geometry,kl.material=this.material,kl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xl.copy(this.boundingSphere),Xl.applyMatrix4(s),e.ray.intersectsSphere(Xl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Ao),ev.multiplyMatrices(s,Ao),kl.matrixWorld=ev,kl.raycast(e,Ou);for(let f=0,h=Ou.length;f<h;f++){const p=Ou[f];p.instanceId=c,p.object=this,i.push(p)}Ou.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new $_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new Cb(new Float32Array(l*this.count),l,this.count,Gp,Ma));const c=this.morphTexture.source.data.data;let f=0;for(let m=0;m<s.length;m++)f+=s[m];const h=this.geometry.morphTargetsRelative?1:1-f,p=l*e;c[p]=h,c.set(s,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Uh=new re,Nb=new re,Ub=new vt;class Ps{constructor(e=new re(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Uh.subVectors(s,i).cross(Nb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Uh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Ub.getNormalMatrix(e),l=this.coplanarPoint(Uh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new ic,Pu=new re;class Yp{constructor(e=new Ps,i=new Ps,s=new Ps,l=new Ps,c=new Ps,f=new Ps){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Ja){const s=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],p=l[3],m=l[4],v=l[5],y=l[6],S=l[7],M=l[8],E=l[9],w=l[10],x=l[11],_=l[12],P=l[13],L=l[14],U=l[15];if(s[0].setComponents(p-c,S-m,x-M,U-_).normalize(),s[1].setComponents(p+c,S+m,x+M,U+_).normalize(),s[2].setComponents(p+f,S+v,x+E,U+P).normalize(),s[3].setComponents(p-f,S-v,x-E,U-P).normalize(),s[4].setComponents(p-h,S-y,x-w,U-L).normalize(),i===Ja)s[5].setComponents(p+h,S+y,x+w,U+L).normalize();else if(i===tf)s[5].setComponents(h,y,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Pu.x=l.normal.x>0?e.max.x:e.min.x,Pu.y=l.normal.y>0?e.max.y:e.min.y,Pu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Pu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fx extends ai{constructor(e,i,s,l,c,f,h,p,m){super(e,i,s,l,c,f,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dx extends ai{constructor(e,i,s=Sr,l,c,f,h=Pi,p=Pi,m,v=Kl){if(v!==Kl&&v!==Ql)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,f,h,p,v,s,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Zp extends fa{constructor(e=1,i=1,s=1,l=32,c=1,f=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const v=[],y=[],S=[],M=[];let E=0;const w=[],x=s/2;let _=0;P(),f===!1&&(e>0&&L(!0),i>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new Pn(y,3)),this.setAttribute("normal",new Pn(S,3)),this.setAttribute("uv",new Pn(M,2));function P(){const U=new re,G=new re;let F=0;const j=(i-e)/s;for(let I=0;I<=c;I++){const D=[],R=I/c,B=R*(i-e)+e;for(let J=0;J<=l;J++){const ae=J/l,_e=ae*p+h,fe=Math.sin(_e),H=Math.cos(_e);G.x=B*fe,G.y=-R*s+x,G.z=B*H,y.push(G.x,G.y,G.z),U.set(fe,j,H).normalize(),S.push(U.x,U.y,U.z),M.push(ae,1-R),D.push(E++)}w.push(D)}for(let I=0;I<l;I++)for(let D=0;D<c;D++){const R=w[D][I],B=w[D+1][I],J=w[D+1][I+1],ae=w[D][I+1];(e>0||D!==0)&&(v.push(R,B,ae),F+=3),(i>0||D!==c-1)&&(v.push(B,J,ae),F+=3)}m.addGroup(_,F,0),_+=F}function L(U){const G=E,F=new pt,j=new re;let I=0;const D=U===!0?e:i,R=U===!0?1:-1;for(let J=1;J<=l;J++)y.push(0,x*R,0),S.push(0,R,0),M.push(.5,.5),E++;const B=E;for(let J=0;J<=l;J++){const _e=J/l*p+h,fe=Math.cos(_e),H=Math.sin(_e);j.x=D*H,j.y=x*R,j.z=D*fe,y.push(j.x,j.y,j.z),S.push(0,R,0),F.x=fe*.5+.5,F.y=H*.5*R+.5,M.push(F.x,F.y),E++}for(let J=0;J<l;J++){const ae=G+J,_e=B+J;U===!0?v.push(_e,_e+1,ae):v.push(_e+1,_e,ae),I+=3}m.addGroup(_,I,U===!0?1:2),_+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ar extends fa{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(s),p=Math.floor(l),m=h+1,v=p+1,y=e/h,S=i/p,M=[],E=[],w=[],x=[];for(let _=0;_<v;_++){const P=_*S-f;for(let L=0;L<m;L++){const U=L*y-c;E.push(U,-P,0),w.push(0,0,1),x.push(L/h),x.push(1-_/p)}}for(let _=0;_<p;_++)for(let P=0;P<h;P++){const L=P+m*_,U=P+m*(_+1),G=P+1+m*(_+1),F=P+1+m*_;M.push(L,U,F),M.push(U,G,F)}this.setIndex(M),this.setAttribute("position",new Pn(E,3)),this.setAttribute("normal",new Pn(w,3)),this.setAttribute("uv",new Pn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kp extends fa{constructor(e=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const h=[],p=[],m=[],v=[];let y=e;const S=(i-e)/l,M=new re,E=new pt;for(let w=0;w<=l;w++){for(let x=0;x<=s;x++){const _=c+x/s*f;M.x=y*Math.cos(_),M.y=y*Math.sin(_),p.push(M.x,M.y,M.z),m.push(0,0,1),E.x=(M.x/i+1)/2,E.y=(M.y/i+1)/2,v.push(E.x,E.y)}y+=S}for(let w=0;w<l;w++){const x=w*(s+1);for(let _=0;_<s;_++){const P=_+x,L=P,U=P+s+1,G=P+s+2,F=P+1;h.push(L,U,F),h.push(U,G,F)}}this.setIndex(h),this.setAttribute("position",new Pn(p,3)),this.setAttribute("normal",new Pn(m,3)),this.setAttribute("uv",new Pn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class sf extends fa{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(f+h,Math.PI);let m=0;const v=[],y=new re,S=new re,M=[],E=[],w=[],x=[];for(let _=0;_<=s;_++){const P=[],L=_/s;let U=0;_===0&&f===0?U=.5/i:_===s&&p===Math.PI&&(U=-.5/i);for(let G=0;G<=i;G++){const F=G/i;y.x=-e*Math.cos(l+F*c)*Math.sin(f+L*h),y.y=e*Math.cos(f+L*h),y.z=e*Math.sin(l+F*c)*Math.sin(f+L*h),E.push(y.x,y.y,y.z),S.copy(y).normalize(),w.push(S.x,S.y,S.z),x.push(F+U,1-L),P.push(m++)}v.push(P)}for(let _=0;_<s;_++)for(let P=0;P<i;P++){const L=v[_][P+1],U=v[_][P],G=v[_+1][P],F=v[_+1][P+1];(_!==0||f>0)&&M.push(L,U,F),(_!==s-1||p<Math.PI)&&M.push(U,G,F)}this.setIndex(M),this.setAttribute("position",new Pn(E,3)),this.setAttribute("normal",new Pn(w,3)),this.setAttribute("uv",new Pn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jl extends fa{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const f=[],h=[],p=[],m=[],v=new re,y=new re,S=new re;for(let M=0;M<=s;M++)for(let E=0;E<=l;E++){const w=E/l*c,x=M/s*Math.PI*2;y.x=(e+i*Math.cos(x))*Math.cos(w),y.y=(e+i*Math.cos(x))*Math.sin(w),y.z=i*Math.sin(x),h.push(y.x,y.y,y.z),v.x=e*Math.cos(w),v.y=e*Math.sin(w),S.subVectors(y,v).normalize(),p.push(S.x,S.y,S.z),m.push(E/l),m.push(M/s)}for(let M=1;M<=s;M++)for(let E=1;E<=l;E++){const w=(l+1)*M+E-1,x=(l+1)*(M-1)+E-1,_=(l+1)*(M-1)+E,P=(l+1)*M+E;f.push(w,x,P),f.push(x,_,P)}this.setIndex(f),this.setAttribute("position",new Pn(h,3)),this.setAttribute("normal",new Pn(p,3)),this.setAttribute("uv",new Pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Lb extends Io{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ut(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Qp extends Io{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tx,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ob extends Qp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Pb extends Io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zb extends Io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class hx extends kn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class Ib extends hx{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Lh=new on,nv=new re,iv=new re;class Bb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Ea,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yp,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;nv.setFromMatrixPosition(e.matrixWorld),i.position.copy(nv),iv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(iv),i.updateMatrixWorld(),Lh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Jp extends cx{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Fb extends Bb{constructor(){super(new Jp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class av extends hx{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.shadow=new Fb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hb extends oa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const sv=new on;class Gb{constructor(e,i,s=0,l=1/0){this.ray=new qp(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new Wp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return sv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sv),this}intersectObject(e,i=!0,s=[]){return Op(e,this,s,i),s.sort(rv),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)Op(e[l],this,s,i);return s.sort(rv),s}}function rv(r,e){return r.distance-e.distance}function Op(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)Op(c[f],e,i,!0)}}class ov{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Tt(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jb extends Er{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function lv(r,e,i,s){const l=Vb(s);switch(i){case Qv:return r*e;case Gp:return r*e/l.components*l.byteLength;case jp:return r*e/l.components*l.byteLength;case $v:return r*e*2/l.components*l.byteLength;case Vp:return r*e*2/l.components*l.byteLength;case Jv:return r*e*3/l.components*l.byteLength;case ca:return r*e*4/l.components*l.byteLength;case kp:return r*e*4/l.components*l.byteLength;case ku:case Xu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case qu:case Wu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case lp:case up:return Math.max(r,16)*Math.max(e,8)/4;case op:case cp:return Math.max(r,8)*Math.max(e,8)/2;case fp:case dp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case hp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case gp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case _p:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case vp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case xp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case yp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Mp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case bp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Tp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ap:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Rp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Yu:case Cp:case wp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ex:case Dp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Np:case Up:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Vb(r){switch(r){case Ea:case Yv:return{byteLength:1,components:1};case Yl:case Zv:case tc:return{byteLength:2,components:1};case Fp:case Hp:return{byteLength:2,components:4};case Sr:case Bp:case Ma:return{byteLength:4,components:1};case Kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ip}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ip);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function px(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function kb(r){const e=new WeakMap;function i(h,p){const m=h.array,v=h.usage,y=m.byteLength,S=r.createBuffer();r.bindBuffer(p,S),r.bufferData(p,m,v),h.onUploadCallback();let M;if(m instanceof Float32Array)M=r.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=r.SHORT;else if(m instanceof Uint32Array)M=r.UNSIGNED_INT;else if(m instanceof Int32Array)M=r.INT;else if(m instanceof Int8Array)M=r.BYTE;else if(m instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:y}}function s(h,p,m){const v=p.array,y=p.updateRanges;if(r.bindBuffer(m,h),y.length===0)r.bufferSubData(m,0,v);else{y.sort((M,E)=>M.start-E.start);let S=0;for(let M=1;M<y.length;M++){const E=y[S],w=y[M];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++S,y[S]=w)}y.length=S+1;for(let M=0,E=y.length;M<E;M++){const w=y[M];r.bufferSubData(m,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(r.deleteBuffer(p.buffer),e.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:f}}var Xb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$b=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,e1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,n1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,a1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,s1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,f1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,h1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,p1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,m1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,g1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,x1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S1="gl_FragColor = linearToOutputTexel( gl_FragColor );",M1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,E1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,T1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,A1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,C1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,L1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,I1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,B1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,V1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,k1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,X1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,oE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_E=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ME=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,RE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,UE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$E=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_T=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ST=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yt={alphahash_fragment:Xb,alphahash_pars_fragment:qb,alphamap_fragment:Wb,alphamap_pars_fragment:Yb,alphatest_fragment:Zb,alphatest_pars_fragment:Kb,aomap_fragment:Qb,aomap_pars_fragment:Jb,batching_pars_vertex:$b,batching_vertex:e1,begin_vertex:t1,beginnormal_vertex:n1,bsdfs:i1,iridescence_fragment:a1,bumpmap_pars_fragment:s1,clipping_planes_fragment:r1,clipping_planes_pars_fragment:o1,clipping_planes_pars_vertex:l1,clipping_planes_vertex:c1,color_fragment:u1,color_pars_fragment:f1,color_pars_vertex:d1,color_vertex:h1,common:p1,cube_uv_reflection_fragment:m1,defaultnormal_vertex:g1,displacementmap_pars_vertex:_1,displacementmap_vertex:v1,emissivemap_fragment:x1,emissivemap_pars_fragment:y1,colorspace_fragment:S1,colorspace_pars_fragment:M1,envmap_fragment:b1,envmap_common_pars_fragment:E1,envmap_pars_fragment:T1,envmap_pars_vertex:A1,envmap_physical_pars_fragment:I1,envmap_vertex:R1,fog_vertex:C1,fog_pars_vertex:w1,fog_fragment:D1,fog_pars_fragment:N1,gradientmap_pars_fragment:U1,lightmap_pars_fragment:L1,lights_lambert_fragment:O1,lights_lambert_pars_fragment:P1,lights_pars_begin:z1,lights_toon_fragment:B1,lights_toon_pars_fragment:F1,lights_phong_fragment:H1,lights_phong_pars_fragment:G1,lights_physical_fragment:j1,lights_physical_pars_fragment:V1,lights_fragment_begin:k1,lights_fragment_maps:X1,lights_fragment_end:q1,logdepthbuf_fragment:W1,logdepthbuf_pars_fragment:Y1,logdepthbuf_pars_vertex:Z1,logdepthbuf_vertex:K1,map_fragment:Q1,map_pars_fragment:J1,map_particle_fragment:$1,map_particle_pars_fragment:eE,metalnessmap_fragment:tE,metalnessmap_pars_fragment:nE,morphinstance_vertex:iE,morphcolor_vertex:aE,morphnormal_vertex:sE,morphtarget_pars_vertex:rE,morphtarget_vertex:oE,normal_fragment_begin:lE,normal_fragment_maps:cE,normal_pars_fragment:uE,normal_pars_vertex:fE,normal_vertex:dE,normalmap_pars_fragment:hE,clearcoat_normal_fragment_begin:pE,clearcoat_normal_fragment_maps:mE,clearcoat_pars_fragment:gE,iridescence_pars_fragment:_E,opaque_fragment:vE,packing:xE,premultiplied_alpha_fragment:yE,project_vertex:SE,dithering_fragment:ME,dithering_pars_fragment:bE,roughnessmap_fragment:EE,roughnessmap_pars_fragment:TE,shadowmap_pars_fragment:AE,shadowmap_pars_vertex:RE,shadowmap_vertex:CE,shadowmask_pars_fragment:wE,skinbase_vertex:DE,skinning_pars_vertex:NE,skinning_vertex:UE,skinnormal_vertex:LE,specularmap_fragment:OE,specularmap_pars_fragment:PE,tonemapping_fragment:zE,tonemapping_pars_fragment:IE,transmission_fragment:BE,transmission_pars_fragment:FE,uv_pars_fragment:HE,uv_pars_vertex:GE,uv_vertex:jE,worldpos_vertex:VE,background_vert:kE,background_frag:XE,backgroundCube_vert:qE,backgroundCube_frag:WE,cube_vert:YE,cube_frag:ZE,depth_vert:KE,depth_frag:QE,distanceRGBA_vert:JE,distanceRGBA_frag:$E,equirect_vert:eT,equirect_frag:tT,linedashed_vert:nT,linedashed_frag:iT,meshbasic_vert:aT,meshbasic_frag:sT,meshlambert_vert:rT,meshlambert_frag:oT,meshmatcap_vert:lT,meshmatcap_frag:cT,meshnormal_vert:uT,meshnormal_frag:fT,meshphong_vert:dT,meshphong_frag:hT,meshphysical_vert:pT,meshphysical_frag:mT,meshtoon_vert:gT,meshtoon_frag:_T,points_vert:vT,points_frag:xT,shadow_vert:yT,shadow_frag:ST,sprite_vert:MT,sprite_frag:bT},je={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},xa={basic:{uniforms:li([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:li([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Ut(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:li([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:li([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:li([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new Ut(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:li([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:li([je.points,je.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:li([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:li([je.common,je.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:li([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:li([je.sprite,je.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distanceRGBA:{uniforms:li([je.common,je.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distanceRGBA_vert,fragmentShader:yt.distanceRGBA_frag},shadow:{uniforms:li([je.lights,je.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};xa.physical={uniforms:li([xa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const zu={r:0,b:0,g:0},pr=new Ta,ET=new on;function TT(r,e,i,s,l,c,f){const h=new Ut(0);let p=c===!0?0:1,m,v,y=null,S=0,M=null;function E(L){let U=L.isScene===!0?L.background:null;return U&&U.isTexture&&(U=(L.backgroundBlurriness>0?i:e).get(U)),U}function w(L){let U=!1;const G=E(L);G===null?_(h,p):G&&G.isColor&&(_(G,1),U=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(L,U){const G=E(U);G&&(G.isCubeTexture||G.mapping===af)?(v===void 0&&(v=new rn(new ba(1,1,1),new Hs({name:"BackgroundCubeMaterial",uniforms:zo(xa.backgroundCube.uniforms),vertexShader:xa.backgroundCube.vertexShader,fragmentShader:xa.backgroundCube.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,j,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),pr.copy(U.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),v.material.uniforms.envMap.value=G,v.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(ET.makeRotationFromEuler(pr)),v.material.toneMapped=Vt.getTransfer(G.colorSpace)!==Jt,(y!==G||S!==G.version||M!==r.toneMapping)&&(v.material.needsUpdate=!0,y=G,S=G.version,M=r.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):G&&G.isTexture&&(m===void 0&&(m=new rn(new Ar(2,2),new Hs({name:"BackgroundMaterial",uniforms:zo(xa.background.uniforms),vertexShader:xa.background.vertexShader,fragmentShader:xa.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=G,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Vt.getTransfer(G.colorSpace)!==Jt,G.matrixAutoUpdate===!0&&G.updateMatrix(),m.material.uniforms.uvTransform.value.copy(G.matrix),(y!==G||S!==G.version||M!==r.toneMapping)&&(m.material.needsUpdate=!0,y=G,S=G.version,M=r.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function _(L,U){L.getRGB(zu,lx(r)),s.buffers.color.setClear(zu.r,zu.g,zu.b,U,f)}function P(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,U=1){h.set(L),p=U,_(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,_(h,p)},render:w,addToRenderList:x,dispose:P}}function AT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,f=!1;function h(R,B,J,ae,_e){let fe=!1;const H=y(ae,J,B);c!==H&&(c=H,m(c.object)),fe=M(R,ae,J,_e),fe&&E(R,ae,J,_e),_e!==null&&e.update(_e,r.ELEMENT_ARRAY_BUFFER),(fe||f)&&(f=!1,U(R,B,J,ae),_e!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(_e).buffer))}function p(){return r.createVertexArray()}function m(R){return r.bindVertexArray(R)}function v(R){return r.deleteVertexArray(R)}function y(R,B,J){const ae=J.wireframe===!0;let _e=s[R.id];_e===void 0&&(_e={},s[R.id]=_e);let fe=_e[B.id];fe===void 0&&(fe={},_e[B.id]=fe);let H=fe[ae];return H===void 0&&(H=S(p()),fe[ae]=H),H}function S(R){const B=[],J=[],ae=[];for(let _e=0;_e<i;_e++)B[_e]=0,J[_e]=0,ae[_e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:J,attributeDivisors:ae,object:R,attributes:{},index:null}}function M(R,B,J,ae){const _e=c.attributes,fe=B.attributes;let H=0;const ne=J.getAttributes();for(const Y in ne)if(ne[Y].location>=0){const O=_e[Y];let se=fe[Y];if(se===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(se=R.instanceColor)),O===void 0||O.attribute!==se||se&&O.data!==se.data)return!0;H++}return c.attributesNum!==H||c.index!==ae}function E(R,B,J,ae){const _e={},fe=B.attributes;let H=0;const ne=J.getAttributes();for(const Y in ne)if(ne[Y].location>=0){let O=fe[Y];O===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(O=R.instanceColor));const se={};se.attribute=O,O&&O.data&&(se.data=O.data),_e[Y]=se,H++}c.attributes=_e,c.attributesNum=H,c.index=ae}function w(){const R=c.newAttributes;for(let B=0,J=R.length;B<J;B++)R[B]=0}function x(R){_(R,0)}function _(R,B){const J=c.newAttributes,ae=c.enabledAttributes,_e=c.attributeDivisors;J[R]=1,ae[R]===0&&(r.enableVertexAttribArray(R),ae[R]=1),_e[R]!==B&&(r.vertexAttribDivisor(R,B),_e[R]=B)}function P(){const R=c.newAttributes,B=c.enabledAttributes;for(let J=0,ae=B.length;J<ae;J++)B[J]!==R[J]&&(r.disableVertexAttribArray(J),B[J]=0)}function L(R,B,J,ae,_e,fe,H){H===!0?r.vertexAttribIPointer(R,B,J,_e,fe):r.vertexAttribPointer(R,B,J,ae,_e,fe)}function U(R,B,J,ae){w();const _e=ae.attributes,fe=J.getAttributes(),H=B.defaultAttributeValues;for(const ne in fe){const Y=fe[ne];if(Y.location>=0){let Ee=_e[ne];if(Ee===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(Ee=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(Ee=R.instanceColor)),Ee!==void 0){const O=Ee.normalized,se=Ee.itemSize,Ae=e.get(Ee);if(Ae===void 0)continue;const Ne=Ae.buffer,ee=Ae.type,K=Ae.bytesPerElement,ce=ee===r.INT||ee===r.UNSIGNED_INT||Ee.gpuType===Bp;if(Ee.isInterleavedBufferAttribute){const Se=Ee.data,Te=Se.stride,Qe=Ee.offset;if(Se.isInstancedInterleavedBuffer){for(let Ie=0;Ie<Y.locationSize;Ie++)_(Y.location+Ie,Se.meshPerAttribute);R.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ie=0;Ie<Y.locationSize;Ie++)x(Y.location+Ie);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let Ie=0;Ie<Y.locationSize;Ie++)L(Y.location+Ie,se/Y.locationSize,ee,O,Te*K,(Qe+se/Y.locationSize*Ie)*K,ce)}else{if(Ee.isInstancedBufferAttribute){for(let Se=0;Se<Y.locationSize;Se++)_(Y.location+Se,Ee.meshPerAttribute);R.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Se=0;Se<Y.locationSize;Se++)x(Y.location+Se);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let Se=0;Se<Y.locationSize;Se++)L(Y.location+Se,se/Y.locationSize,ee,O,se*K,se/Y.locationSize*Se*K,ce)}}else if(H!==void 0){const O=H[ne];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(Y.location,O);break;case 3:r.vertexAttrib3fv(Y.location,O);break;case 4:r.vertexAttrib4fv(Y.location,O);break;default:r.vertexAttrib1fv(Y.location,O)}}}}P()}function G(){I();for(const R in s){const B=s[R];for(const J in B){const ae=B[J];for(const _e in ae)v(ae[_e].object),delete ae[_e];delete B[J]}delete s[R]}}function F(R){if(s[R.id]===void 0)return;const B=s[R.id];for(const J in B){const ae=B[J];for(const _e in ae)v(ae[_e].object),delete ae[_e];delete B[J]}delete s[R.id]}function j(R){for(const B in s){const J=s[B];if(J[R.id]===void 0)continue;const ae=J[R.id];for(const _e in ae)v(ae[_e].object),delete ae[_e];delete J[R.id]}}function I(){D(),f=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:I,resetDefaultState:D,dispose:G,releaseStatesOfGeometry:F,releaseStatesOfProgram:j,initAttributes:w,enableAttribute:x,disableUnusedAttributes:P}}function RT(r,e,i){let s;function l(m){s=m}function c(m,v){r.drawArrays(s,m,v),i.update(v,s,1)}function f(m,v,y){y!==0&&(r.drawArraysInstanced(s,m,v,y),i.update(v,s,y))}function h(m,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,v,0,y);let M=0;for(let E=0;E<y;E++)M+=v[E];i.update(M,s,1)}function p(m,v,y,S){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)f(m[E],v[E],S[E]);else{M.multiDrawArraysInstancedWEBGL(s,m,0,v,0,S,0,y);let E=0;for(let w=0;w<y;w++)E+=v[w]*S[w];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function CT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(j.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(j){return!(j!==ca&&s.convert(j)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(j){const I=j===tc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(j!==Ea&&s.convert(j)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&j!==Ma&&!I)}function p(j){if(j==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";j="mediump"}return j==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const y=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=E>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:U,vertexTextures:G,maxSamples:F}}function wT(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Ps,h=new vt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const M=y.length!==0||S||s!==0||l;return l=S,s=y.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,S){i=v(y,S,0)},this.setState=function(y,S,M){const E=y.clippingPlanes,w=y.clipIntersection,x=y.clipShadows,_=r.get(y);if(!l||E===null||E.length===0||c&&!x)c?v(null):m();else{const P=c?0:s,L=P*4;let U=_.clippingState||null;p.value=U,U=v(E,S,L,M);for(let G=0;G!==L;++G)U[G]=i[G];_.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(y,S,M,E){const w=y!==null?y.length:0;let x=null;if(w!==0){if(x=p.value,E!==!0||x===null){const _=M+w*4,P=S.matrixWorldInverse;h.getNormalMatrix(P),(x===null||x.length<_)&&(x=new Float32Array(_));for(let L=0,U=M;L!==w;++L,U+=4)f.copy(y[L]).applyMatrix4(P,h),f.normal.toArray(x,U),x[U+3]=f.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function DT(r){let e=new WeakMap;function i(f,h){return h===ip?f.mapping=Uo:h===ap&&(f.mapping=Lo),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===ip||h===ap)if(e.has(f)){const p=e.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new Tb(p.height);return m.fromEquirectangularTexture(r,f),e.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const Co=4,cv=[.125,.215,.35,.446,.526,.582],vr=20,Oh=new Jp,uv=new Ut;let Ph=null,zh=0,Ih=0,Bh=!1;const gr=(1+Math.sqrt(5))/2,Ro=1/gr,fv=[new re(-gr,Ro,0),new re(gr,Ro,0),new re(-Ro,0,gr),new re(Ro,0,gr),new re(0,gr,-Ro),new re(0,gr,Ro),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)],NT=new re;class dv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=NT}=c;Ph=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ph,zh,Ih),this._renderer.xr.enabled=Bh,e.scissorTest=!1,Iu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Uo||e.mapping===Lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ph=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Sa,minFilter:Sa,generateMipmaps:!1,type:tc,format:ca,colorSpace:Oo,depthBuffer:!1},l=hv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hv(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UT(c)),this._blurMaterial=LT(c,e,i)}return l}_compileMaterial(e){const i=new rn(this._lodPlanes[0],e);this._renderer.compile(i,Oh)}_sceneToCubeUV(e,i,s,l,c){const p=new oa(90,1,i,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],y=this._renderer,S=y.autoClear,M=y.toneMapping;y.getClearColor(uv),y.toneMapping=Fs,y.autoClear=!1;const E=new Po({name:"PMREM.Background",side:xi,depthWrite:!1,depthTest:!1}),w=new rn(new ba,E);let x=!1;const _=e.background;_?_.isColor&&(E.color.copy(_),e.background=null,x=!0):(E.color.copy(uv),x=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[P],c.y,c.z)):L===1?(p.up.set(0,0,m[P]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[P],c.z)):(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[P]));const U=this._cubeSize;Iu(l,L*U,P>2?U:0,U,U),y.setRenderTarget(l),x&&y.render(w,p),y.render(e,p)}w.geometry.dispose(),w.material.dispose(),y.toneMapping=M,y.autoClear=S,e.background=_}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Uo||e.mapping===Lo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=mv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new rn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;Iu(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,Oh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=fv[(l-c-1)%fv.length];this._blur(e,c-1,c,f,h)}i.autoClear=s}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,y=new rn(this._lodPlanes[l],m),S=m.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*vr-1),w=c/E,x=isFinite(c)?1+Math.floor(v*w):vr;x>vr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${vr}`);const _=[];let P=0;for(let j=0;j<vr;++j){const I=j/w,D=Math.exp(-I*I/2);_.push(D),j===0?P+=D:j<x&&(P+=2*D)}for(let j=0;j<_.length;j++)_[j]=_[j]/P;S.envMap.value=e.texture,S.samples.value=x,S.weights.value=_,S.latitudinal.value=f==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:L}=this;S.dTheta.value=E,S.mipInt.value=L-s;const U=this._sizeLods[l],G=3*U*(l>L-Co?l-L+Co:0),F=4*(this._cubeSize-U);Iu(i,G,F,3*U,2*U),p.setRenderTarget(i),p.render(y,Oh)}}function UT(r){const e=[],i=[],s=[];let l=r;const c=r-Co+1+cv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let p=1/h;f>r-Co?p=cv[f-r+Co-1]:f===0&&(p=0),s.push(p);const m=1/(h-2),v=-m,y=1+m,S=[v,v,y,v,y,y,v,v,y,y,v,y],M=6,E=6,w=3,x=2,_=1,P=new Float32Array(w*E*M),L=new Float32Array(x*E*M),U=new Float32Array(_*E*M);for(let F=0;F<M;F++){const j=F%3*2/3-1,I=F>2?0:-1,D=[j,I,0,j+2/3,I,0,j+2/3,I+1,0,j,I,0,j+2/3,I+1,0,j,I+1,0];P.set(D,w*E*F),L.set(S,x*E*F);const R=[F,F,F,F,F,F];U.set(R,_*E*F)}const G=new fa;G.setAttribute("position",new ua(P,w)),G.setAttribute("uv",new ua(L,x)),G.setAttribute("faceIndex",new ua(U,_)),e.push(G),l>Co&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function hv(r,e,i){const s=new Mr(r,e,i);return s.texture.mapping=af,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Iu(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function LT(r,e,i){const s=new Float32Array(vr),l=new re(0,1,0);return new Hs({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:$p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bs,depthTest:!1,depthWrite:!1})}function pv(){return new Hs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bs,depthTest:!1,depthWrite:!1})}function mv(){return new Hs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bs,depthTest:!1,depthWrite:!1})}function $p(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function OT(r){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const p=h.mapping,m=p===ip||p===ap,v=p===Uo||p===Lo;if(m||v){let y=e.get(h);const S=y!==void 0?y.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new dv(r)),y=m?i.fromEquirectangular(h,y):i.fromCubemap(h,y),y.texture.pmremVersion=h.pmremVersion,e.set(h,y),y.texture;if(y!==void 0)return y.texture;{const M=h.image;return m&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new dv(r)),y=m?i.fromEquirectangular(h):i.fromCubemap(h),y.texture.pmremVersion=h.pmremVersion,e.set(h,y),h.addEventListener("dispose",c),y.texture):null}}}return h}function l(h){let p=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function PT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Ku("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function zT(r,e,i,s){const l={},c=new WeakMap;function f(y){const S=y.target;S.index!==null&&e.remove(S.index);for(const E in S.attributes)e.remove(S.attributes[E]);S.removeEventListener("dispose",f),delete l[S.id];const M=c.get(S);M&&(e.remove(M),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(y,S){return l[S.id]===!0||(S.addEventListener("dispose",f),l[S.id]=!0,i.memory.geometries++),S}function p(y){const S=y.attributes;for(const M in S)e.update(S[M],r.ARRAY_BUFFER)}function m(y){const S=[],M=y.index,E=y.attributes.position;let w=0;if(M!==null){const P=M.array;w=M.version;for(let L=0,U=P.length;L<U;L+=3){const G=P[L+0],F=P[L+1],j=P[L+2];S.push(G,F,F,j,j,G)}}else if(E!==void 0){const P=E.array;w=E.version;for(let L=0,U=P.length/3-1;L<U;L+=3){const G=L+0,F=L+1,j=L+2;S.push(G,F,F,j,j,G)}}else return;const x=new(ix(S)?ox:rx)(S,1);x.version=w;const _=c.get(y);_&&e.remove(_),c.set(y,x)}function v(y){const S=c.get(y);if(S){const M=y.index;M!==null&&S.version<M.version&&m(y)}else m(y);return c.get(y)}return{get:h,update:p,getWireframeAttribute:v}}function IT(r,e,i){let s;function l(S){s=S}let c,f;function h(S){c=S.type,f=S.bytesPerElement}function p(S,M){r.drawElements(s,M,c,S*f),i.update(M,s,1)}function m(S,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,S*f,E),i.update(M,s,E))}function v(S,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,S,0,E);let x=0;for(let _=0;_<E;_++)x+=M[_];i.update(x,s,1)}function y(S,M,E,w){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<S.length;_++)m(S[_]/f,M[_],w[_]);else{x.multiDrawElementsInstancedWEBGL(s,M,0,c,S,0,w,0,E);let _=0;for(let P=0;P<E;P++)_+=M[P]*w[P];i.update(_,s,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function BT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function FT(r,e,i){const s=new WeakMap,l=new Sn;function c(f,h,p){const m=f.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=v!==void 0?v.length:0;let S=s.get(h);if(S===void 0||S.count!==y){let R=function(){I.dispose(),s.delete(h),h.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const E=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let U=0;E===!0&&(U=1),w===!0&&(U=2),x===!0&&(U=3);let G=h.attributes.position.count*U,F=1;G>e.maxTextureSize&&(F=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const j=new Float32Array(G*F*4*y),I=new ax(j,G,F,y);I.type=Ma,I.needsUpdate=!0;const D=U*4;for(let B=0;B<y;B++){const J=_[B],ae=P[B],_e=L[B],fe=G*F*4*B;for(let H=0;H<J.count;H++){const ne=H*D;E===!0&&(l.fromBufferAttribute(J,H),j[fe+ne+0]=l.x,j[fe+ne+1]=l.y,j[fe+ne+2]=l.z,j[fe+ne+3]=0),w===!0&&(l.fromBufferAttribute(ae,H),j[fe+ne+4]=l.x,j[fe+ne+5]=l.y,j[fe+ne+6]=l.z,j[fe+ne+7]=0),x===!0&&(l.fromBufferAttribute(_e,H),j[fe+ne+8]=l.x,j[fe+ne+9]=l.y,j[fe+ne+10]=l.z,j[fe+ne+11]=_e.itemSize===4?l.w:1)}}S={count:y,texture:I,size:new pt(G,F)},s.set(h,S),h.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let x=0;x<m.length;x++)E+=m[x];const w=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",w),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",S.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:c}}function HT(r,e,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,v=p.geometry,y=e.get(p,v);if(l.get(y)!==m&&(e.update(y),l.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return y}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const mx=new ai,gv=new dx(1,1),gx=new ax,_x=new lb,vx=new ux,_v=[],vv=[],xv=new Float32Array(16),yv=new Float32Array(9),Sv=new Float32Array(4);function Bo(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=_v[l];if(c===void 0&&(c=new Float32Array(l),_v[l]=c),e!==0){s.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,r[f].toArray(c,h)}return c}function zn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function In(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function rf(r,e){let i=vv[e];i===void 0&&(i=new Int32Array(e),vv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function GT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function jT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(zn(i,e))return;r.uniform2fv(this.addr,e),In(i,e)}}function VT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(zn(i,e))return;r.uniform3fv(this.addr,e),In(i,e)}}function kT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(zn(i,e))return;r.uniform4fv(this.addr,e),In(i,e)}}function XT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(zn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),In(i,e)}else{if(zn(i,s))return;Sv.set(s),r.uniformMatrix2fv(this.addr,!1,Sv),In(i,s)}}function qT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(zn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),In(i,e)}else{if(zn(i,s))return;yv.set(s),r.uniformMatrix3fv(this.addr,!1,yv),In(i,s)}}function WT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(zn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),In(i,e)}else{if(zn(i,s))return;xv.set(s),r.uniformMatrix4fv(this.addr,!1,xv),In(i,s)}}function YT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function ZT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(zn(i,e))return;r.uniform2iv(this.addr,e),In(i,e)}}function KT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(zn(i,e))return;r.uniform3iv(this.addr,e),In(i,e)}}function QT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(zn(i,e))return;r.uniform4iv(this.addr,e),In(i,e)}}function JT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function $T(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(zn(i,e))return;r.uniform2uiv(this.addr,e),In(i,e)}}function eA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(zn(i,e))return;r.uniform3uiv(this.addr,e),In(i,e)}}function tA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(zn(i,e))return;r.uniform4uiv(this.addr,e),In(i,e)}}function nA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(gv.compareFunction=nx,c=gv):c=mx,i.setTexture2D(e||c,l)}function iA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||_x,l)}function aA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||vx,l)}function sA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||gx,l)}function rA(r){switch(r){case 5126:return GT;case 35664:return jT;case 35665:return VT;case 35666:return kT;case 35674:return XT;case 35675:return qT;case 35676:return WT;case 5124:case 35670:return YT;case 35667:case 35671:return ZT;case 35668:case 35672:return KT;case 35669:case 35673:return QT;case 5125:return JT;case 36294:return $T;case 36295:return eA;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return sA}}function oA(r,e){r.uniform1fv(this.addr,e)}function lA(r,e){const i=Bo(e,this.size,2);r.uniform2fv(this.addr,i)}function cA(r,e){const i=Bo(e,this.size,3);r.uniform3fv(this.addr,i)}function uA(r,e){const i=Bo(e,this.size,4);r.uniform4fv(this.addr,i)}function fA(r,e){const i=Bo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function dA(r,e){const i=Bo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function hA(r,e){const i=Bo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function pA(r,e){r.uniform1iv(this.addr,e)}function mA(r,e){r.uniform2iv(this.addr,e)}function gA(r,e){r.uniform3iv(this.addr,e)}function _A(r,e){r.uniform4iv(this.addr,e)}function vA(r,e){r.uniform1uiv(this.addr,e)}function xA(r,e){r.uniform2uiv(this.addr,e)}function yA(r,e){r.uniform3uiv(this.addr,e)}function SA(r,e){r.uniform4uiv(this.addr,e)}function MA(r,e,i){const s=this.cache,l=e.length,c=rf(i,l);zn(s,c)||(r.uniform1iv(this.addr,c),In(s,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||mx,c[f])}function bA(r,e,i){const s=this.cache,l=e.length,c=rf(i,l);zn(s,c)||(r.uniform1iv(this.addr,c),In(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||_x,c[f])}function EA(r,e,i){const s=this.cache,l=e.length,c=rf(i,l);zn(s,c)||(r.uniform1iv(this.addr,c),In(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||vx,c[f])}function TA(r,e,i){const s=this.cache,l=e.length,c=rf(i,l);zn(s,c)||(r.uniform1iv(this.addr,c),In(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||gx,c[f])}function AA(r){switch(r){case 5126:return oA;case 35664:return lA;case 35665:return cA;case 35666:return uA;case 35674:return fA;case 35675:return dA;case 35676:return hA;case 5124:case 35670:return pA;case 35667:case 35671:return mA;case 35668:case 35672:return gA;case 35669:case 35673:return _A;case 5125:return vA;case 36294:return xA;case 36295:return yA;case 36296:return SA;case 35678:case 36198:case 36298:case 36306:case 35682:return MA;case 35679:case 36299:case 36307:return bA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return TA}}class RA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=rA(i.type)}}class CA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=AA(i.type)}}class wA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const Fh=/(\w+)(\])?(\[|\.)?/g;function Mv(r,e){r.seq.push(e),r.map[e.id]=e}function DA(r,e,i){const s=r.name,l=s.length;for(Fh.lastIndex=0;;){const c=Fh.exec(s),f=Fh.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){Mv(i,m===void 0?new RA(h,r,e):new CA(h,r,e));break}else{let y=i.map[h];y===void 0&&(y=new wA(h),Mv(i,y)),i=y}}}class Qu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);DA(c,f,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],p=s[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function bv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const NA=37297;let UA=0;function LA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const Ev=new vt;function OA(r){Vt._getMatrix(Ev,Vt.workingColorSpace,r);const e=`mat3( ${Ev.elements.map(i=>i.toFixed(4))} )`;switch(Vt.getTransfer(r)){case ef:return[e,"LinearTransferOETF"];case Jt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Tv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=r.getShaderInfoLog(e).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+LA(r.getShaderSource(e),f)}else return l}function PA(r,e){const i=OA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function zA(r,e){let i;switch(e){case OM:i="Linear";break;case PM:i="Reinhard";break;case zM:i="Cineon";break;case qv:i="ACESFilmic";break;case BM:i="AgX";break;case FM:i="Neutral";break;case IM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Bu=new re;function IA(){Vt.getLuminanceCoefficients(Bu);const r=Bu.x.toFixed(4),e=Bu.y.toFixed(4),i=Bu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wl).join(`
`)}function FA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function HA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:h}}return i}function Wl(r){return r!==""}function Av(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pp(r){return r.replace(GA,VA)}const jA=new Map;function VA(r,e){let i=yt[e];if(i===void 0){const s=jA.get(e);if(s!==void 0)i=yt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Pp(i)}const kA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cv(r){return r.replace(kA,XA)}function XA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function wv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Vv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===kv?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Qa&&(e="SHADOWMAP_TYPE_VSM"),e}function WA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Uo:case Lo:e="ENVMAP_TYPE_CUBE";break;case af:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Lo:e="ENVMAP_MODE_REFRACTION";break}return e}function ZA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xv:e="ENVMAP_BLENDING_MULTIPLY";break;case UM:e="ENVMAP_BLENDING_MIX";break;case LM:e="ENVMAP_BLENDING_ADD";break}return e}function KA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function QA(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=qA(i),m=WA(i),v=YA(i),y=ZA(i),S=KA(i),M=BA(i),E=FA(c),w=l.createProgram();let x,_,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Wl).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Wl).join(`
`),_.length>0&&(_+=`
`)):(x=[wv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wl).join(`
`),_=[wv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fs?"#define TONE_MAPPING":"",i.toneMapping!==Fs?yt.tonemapping_pars_fragment:"",i.toneMapping!==Fs?zA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,PA("linearToOutputTexel",i.outputColorSpace),IA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wl).join(`
`)),f=Pp(f),f=Av(f,i),f=Rv(f,i),h=Pp(h),h=Av(h,i),h=Rv(h,i),f=Cv(f),h=Cv(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",i.glslVersion===P_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===P_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=P+x+f,U=P+_+h,G=bv(l,l.VERTEX_SHADER,L),F=bv(l,l.FRAGMENT_SHADER,U);l.attachShader(w,G),l.attachShader(w,F),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function j(B){if(r.debug.checkShaderErrors){const J=l.getProgramInfoLog(w).trim(),ae=l.getShaderInfoLog(G).trim(),_e=l.getShaderInfoLog(F).trim();let fe=!0,H=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(fe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,G,F);else{const ne=Tv(l,G,"vertex"),Y=Tv(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+J+`
`+ne+`
`+Y)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(ae===""||_e==="")&&(H=!1);H&&(B.diagnostics={runnable:fe,programLog:J,vertexShader:{log:ae,prefix:x},fragmentShader:{log:_e,prefix:_}})}l.deleteShader(G),l.deleteShader(F),I=new Qu(l,w),D=HA(l,w)}let I;this.getUniforms=function(){return I===void 0&&j(this),I};let D;this.getAttributes=function(){return D===void 0&&j(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(w,NA)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=UA++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=G,this.fragmentShader=F,this}let JA=0;class $A{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new e2(e),i.set(e,s)),s}}class e2{constructor(e){this.id=JA++,this.code=e,this.usedTimes=0}}function t2(r,e,i,s,l,c,f){const h=new Wp,p=new $A,m=new Set,v=[],y=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(D){return m.add(D),D===0?"uv":`uv${D}`}function x(D,R,B,J,ae){const _e=J.fog,fe=ae.geometry,H=D.isMeshStandardMaterial?J.environment:null,ne=(D.isMeshStandardMaterial?i:e).get(D.envMap||H),Y=ne&&ne.mapping===af?ne.image.height:null,Ee=E[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const O=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,se=O!==void 0?O.length:0;let Ae=0;fe.morphAttributes.position!==void 0&&(Ae=1),fe.morphAttributes.normal!==void 0&&(Ae=2),fe.morphAttributes.color!==void 0&&(Ae=3);let Ne,ee,K,ce;if(Ee){const At=xa[Ee];Ne=At.vertexShader,ee=At.fragmentShader}else Ne=D.vertexShader,ee=D.fragmentShader,p.update(D),K=p.getVertexShaderID(D),ce=p.getFragmentShaderID(D);const Se=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),Qe=ae.isInstancedMesh===!0,Ie=ae.isBatchedMesh===!0,ke=!!D.map,St=!!D.matcap,qe=!!ne,X=!!D.aoMap,ln=!!D.lightMap,gt=!!D.bumpMap,lt=!!D.normalMap,Je=!!D.displacementMap,Pt=!!D.emissiveMap,Ze=!!D.metalnessMap,z=!!D.roughnessMap,A=D.anisotropy>0,k=D.clearcoat>0,Q=D.dispersion>0,me=D.iridescence>0,pe=D.sheen>0,Oe=D.transmission>0,Le=A&&!!D.anisotropyMap,q=k&&!!D.clearcoatMap,Ye=k&&!!D.clearcoatNormalMap,we=k&&!!D.clearcoatRoughnessMap,Xe=me&&!!D.iridescenceMap,et=me&&!!D.iridescenceThicknessMap,$e=pe&&!!D.sheenColorMap,ze=pe&&!!D.sheenRoughnessMap,ht=!!D.specularMap,at=!!D.specularColorMap,zt=!!D.specularIntensityMap,Z=Oe&&!!D.transmissionMap,Be=Oe&&!!D.thicknessMap,ve=!!D.gradientMap,ye=!!D.alphaMap,He=D.alphaTest>0,Fe=!!D.alphaHash,ct=!!D.extensions;let It=Fs;D.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(It=r.toneMapping);const cn={shaderID:Ee,shaderType:D.type,shaderName:D.name,vertexShader:Ne,fragmentShader:ee,defines:D.defines,customVertexShaderID:K,customFragmentShaderID:ce,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Ie,batchingColor:Ie&&ae._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&ae.instanceColor!==null,instancingMorph:Qe&&ae.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Se===null?r.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Oo,alphaToCoverage:!!D.alphaToCoverage,map:ke,matcap:St,envMap:qe,envMapMode:qe&&ne.mapping,envMapCubeUVHeight:Y,aoMap:X,lightMap:ln,bumpMap:gt,normalMap:lt,displacementMap:S&&Je,emissiveMap:Pt,normalMapObjectSpace:lt&&D.normalMapType===VM,normalMapTangentSpace:lt&&D.normalMapType===tx,metalnessMap:Ze,roughnessMap:z,anisotropy:A,anisotropyMap:Le,clearcoat:k,clearcoatMap:q,clearcoatNormalMap:Ye,clearcoatRoughnessMap:we,dispersion:Q,iridescence:me,iridescenceMap:Xe,iridescenceThicknessMap:et,sheen:pe,sheenColorMap:$e,sheenRoughnessMap:ze,specularMap:ht,specularColorMap:at,specularIntensityMap:zt,transmission:Oe,transmissionMap:Z,thicknessMap:Be,gradientMap:ve,opaque:D.transparent===!1&&D.blending===wo&&D.alphaToCoverage===!1,alphaMap:ye,alphaTest:He,alphaHash:Fe,combine:D.combine,mapUv:ke&&w(D.map.channel),aoMapUv:X&&w(D.aoMap.channel),lightMapUv:ln&&w(D.lightMap.channel),bumpMapUv:gt&&w(D.bumpMap.channel),normalMapUv:lt&&w(D.normalMap.channel),displacementMapUv:Je&&w(D.displacementMap.channel),emissiveMapUv:Pt&&w(D.emissiveMap.channel),metalnessMapUv:Ze&&w(D.metalnessMap.channel),roughnessMapUv:z&&w(D.roughnessMap.channel),anisotropyMapUv:Le&&w(D.anisotropyMap.channel),clearcoatMapUv:q&&w(D.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&w(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&w(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&w(D.iridescenceMap.channel),iridescenceThicknessMapUv:et&&w(D.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&w(D.sheenColorMap.channel),sheenRoughnessMapUv:ze&&w(D.sheenRoughnessMap.channel),specularMapUv:ht&&w(D.specularMap.channel),specularColorMapUv:at&&w(D.specularColorMap.channel),specularIntensityMapUv:zt&&w(D.specularIntensityMap.channel),transmissionMapUv:Z&&w(D.transmissionMap.channel),thicknessMapUv:Be&&w(D.thicknessMap.channel),alphaMapUv:ye&&w(D.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(lt||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!fe.attributes.uv&&(ke||ye),fog:!!_e,useFog:D.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:Te,skinning:ae.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ae,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:It,decodeVideoTexture:ke&&D.map.isVideoTexture===!0&&Vt.getTransfer(D.map.colorSpace)===Jt,decodeVideoTextureEmissive:Pt&&D.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(D.emissiveMap.colorSpace)===Jt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ya,flipSided:D.side===xi,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ct&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&D.extensions.multiDraw===!0||Ie)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return cn.vertexUv1s=m.has(1),cn.vertexUv2s=m.has(2),cn.vertexUv3s=m.has(3),m.clear(),cn}function _(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const B in D.defines)R.push(B),R.push(D.defines[B]);return D.isRawShaderMaterial===!1&&(P(R,D),L(R,D),R.push(r.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function P(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function L(D,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),D.push(h.mask)}function U(D){const R=E[D.type];let B;if(R){const J=xa[R];B=Sb.clone(J.uniforms)}else B=D.uniforms;return B}function G(D,R){let B;for(let J=0,ae=v.length;J<ae;J++){const _e=v[J];if(_e.cacheKey===R){B=_e,++B.usedTimes;break}}return B===void 0&&(B=new QA(r,R,D,c),v.push(B)),B}function F(D){if(--D.usedTimes===0){const R=v.indexOf(D);v[R]=v[v.length-1],v.pop(),D.destroy()}}function j(D){p.remove(D)}function I(){p.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:U,acquireProgram:G,releaseProgram:F,releaseShaderCache:j,programs:v,dispose:I}}function n2(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,p){r.get(f)[h]=p}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function i2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Dv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Nv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(y,S,M,E,w,x){let _=r[e];return _===void 0?(_={id:y.id,object:y,geometry:S,material:M,groupOrder:E,renderOrder:y.renderOrder,z:w,group:x},r[e]=_):(_.id=y.id,_.object=y,_.geometry=S,_.material=M,_.groupOrder=E,_.renderOrder=y.renderOrder,_.z=w,_.group=x),e++,_}function h(y,S,M,E,w,x){const _=f(y,S,M,E,w,x);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function p(y,S,M,E,w,x){const _=f(y,S,M,E,w,x);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function m(y,S){i.length>1&&i.sort(y||i2),s.length>1&&s.sort(S||Dv),l.length>1&&l.sort(S||Dv)}function v(){for(let y=e,S=r.length;y<S;y++){const M=r[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:p,finish:v,sort:m}}function a2(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new Nv,r.set(s,[f])):l>=c.length?(f=new Nv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function s2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new re,color:new Ut};break;case"SpotLight":i={position:new re,direction:new re,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":i={color:new Ut,position:new re,halfWidth:new re,halfHeight:new re};break}return r[e.id]=i,i}}}function r2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let o2=0;function l2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function c2(r){const e=new s2,i=r2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new re);const l=new re,c=new on,f=new on;function h(m){let v=0,y=0,S=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,E=0,w=0,x=0,_=0,P=0,L=0,U=0,G=0,F=0,j=0;m.sort(l2);for(let D=0,R=m.length;D<R;D++){const B=m[D],J=B.color,ae=B.intensity,_e=B.distance,fe=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=J.r*ae,y+=J.g*ae,S+=J.b*ae;else if(B.isLightProbe){for(let H=0;H<9;H++)s.probe[H].addScaledVector(B.sh.coefficients[H],ae);j++}else if(B.isDirectionalLight){const H=e.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ne=B.shadow,Y=i.get(B);Y.shadowIntensity=ne.intensity,Y.shadowBias=ne.bias,Y.shadowNormalBias=ne.normalBias,Y.shadowRadius=ne.radius,Y.shadowMapSize=ne.mapSize,s.directionalShadow[M]=Y,s.directionalShadowMap[M]=fe,s.directionalShadowMatrix[M]=B.shadow.matrix,P++}s.directional[M]=H,M++}else if(B.isSpotLight){const H=e.get(B);H.position.setFromMatrixPosition(B.matrixWorld),H.color.copy(J).multiplyScalar(ae),H.distance=_e,H.coneCos=Math.cos(B.angle),H.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),H.decay=B.decay,s.spot[w]=H;const ne=B.shadow;if(B.map&&(s.spotLightMap[G]=B.map,G++,ne.updateMatrices(B),B.castShadow&&F++),s.spotLightMatrix[w]=ne.matrix,B.castShadow){const Y=i.get(B);Y.shadowIntensity=ne.intensity,Y.shadowBias=ne.bias,Y.shadowNormalBias=ne.normalBias,Y.shadowRadius=ne.radius,Y.shadowMapSize=ne.mapSize,s.spotShadow[w]=Y,s.spotShadowMap[w]=fe,U++}w++}else if(B.isRectAreaLight){const H=e.get(B);H.color.copy(J).multiplyScalar(ae),H.halfWidth.set(B.width*.5,0,0),H.halfHeight.set(0,B.height*.5,0),s.rectArea[x]=H,x++}else if(B.isPointLight){const H=e.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),H.distance=B.distance,H.decay=B.decay,B.castShadow){const ne=B.shadow,Y=i.get(B);Y.shadowIntensity=ne.intensity,Y.shadowBias=ne.bias,Y.shadowNormalBias=ne.normalBias,Y.shadowRadius=ne.radius,Y.shadowMapSize=ne.mapSize,Y.shadowCameraNear=ne.camera.near,Y.shadowCameraFar=ne.camera.far,s.pointShadow[E]=Y,s.pointShadowMap[E]=fe,s.pointShadowMatrix[E]=B.shadow.matrix,L++}s.point[E]=H,E++}else if(B.isHemisphereLight){const H=e.get(B);H.skyColor.copy(B.color).multiplyScalar(ae),H.groundColor.copy(B.groundColor).multiplyScalar(ae),s.hemi[_]=H,_++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=je.LTC_FLOAT_1,s.rectAreaLTC2=je.LTC_FLOAT_2):(s.rectAreaLTC1=je.LTC_HALF_1,s.rectAreaLTC2=je.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=y,s.ambient[2]=S;const I=s.hash;(I.directionalLength!==M||I.pointLength!==E||I.spotLength!==w||I.rectAreaLength!==x||I.hemiLength!==_||I.numDirectionalShadows!==P||I.numPointShadows!==L||I.numSpotShadows!==U||I.numSpotMaps!==G||I.numLightProbes!==j)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=x,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=U+G-F,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=j,I.directionalLength=M,I.pointLength=E,I.spotLength=w,I.rectAreaLength=x,I.hemiLength=_,I.numDirectionalShadows=P,I.numPointShadows=L,I.numSpotShadows=U,I.numSpotMaps=G,I.numLightProbes=j,s.version=o2++)}function p(m,v){let y=0,S=0,M=0,E=0,w=0;const x=v.matrixWorldInverse;for(let _=0,P=m.length;_<P;_++){const L=m[_];if(L.isDirectionalLight){const U=s.directional[y];U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),y++}else if(L.isSpotLight){const U=s.spot[M];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),M++}else if(L.isRectAreaLight){const U=s.rectArea[E];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(x),f.identity(),c.copy(L.matrixWorld),c.premultiply(x),f.extractRotation(c),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const U=s.point[S];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(x),S++}else if(L.isHemisphereLight){const U=s.hemi[w];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(x),w++}}}return{setup:h,setupView:p,state:s}}function Uv(r){const e=new c2(r),i=[],s=[];function l(v){m.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function f(v){s.push(v)}function h(){e.setup(i)}function p(v){e.setupView(i,v)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function u2(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new Uv(r),e.set(l,[h])):c>=f.length?(h=new Uv(r),f.push(h)):h=f[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const f2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function h2(r,e,i){let s=new Yp;const l=new pt,c=new pt,f=new Sn,h=new Pb({depthPacking:jM}),p=new zb,m={},v=i.maxTextureSize,y={[ts]:xi,[xi]:ts,[ya]:ya},S=new Hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:f2,fragmentShader:d2}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const E=new fa;E.setAttribute("position",new ua(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new rn(E,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vv;let _=this.type;this.render=function(F,j,I){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const D=r.getRenderTarget(),R=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),J=r.state;J.setBlending(Bs),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ae=_!==Qa&&this.type===Qa,_e=_===Qa&&this.type!==Qa;for(let fe=0,H=F.length;fe<H;fe++){const ne=F[fe],Y=ne.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Ee=Y.getFrameExtents();if(l.multiply(Ee),c.copy(Y.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/Ee.x),l.x=c.x*Ee.x,Y.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/Ee.y),l.y=c.y*Ee.y,Y.mapSize.y=c.y)),Y.map===null||ae===!0||_e===!0){const se=this.type!==Qa?{minFilter:Pi,magFilter:Pi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Mr(l.x,l.y,se),Y.map.texture.name=ne.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const O=Y.getViewportCount();for(let se=0;se<O;se++){const Ae=Y.getViewport(se);f.set(c.x*Ae.x,c.y*Ae.y,c.x*Ae.z,c.y*Ae.w),J.viewport(f),Y.updateMatrices(ne,se),s=Y.getFrustum(),U(j,I,Y.camera,ne,this.type)}Y.isPointLightShadow!==!0&&this.type===Qa&&P(Y,I),Y.needsUpdate=!1}_=this.type,x.needsUpdate=!1,r.setRenderTarget(D,R,B)};function P(F,j){const I=e.update(w);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Mr(l.x,l.y)),S.uniforms.shadow_pass.value=F.map.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(j,null,I,S,w,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(j,null,I,M,w,null)}function L(F,j,I,D){let R=null;const B=I.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)R=B;else if(R=I.isPointLight===!0?p:h,r.localClippingEnabled&&j.clipShadows===!0&&Array.isArray(j.clippingPlanes)&&j.clippingPlanes.length!==0||j.displacementMap&&j.displacementScale!==0||j.alphaMap&&j.alphaTest>0||j.map&&j.alphaTest>0||j.alphaToCoverage===!0){const J=R.uuid,ae=j.uuid;let _e=m[J];_e===void 0&&(_e={},m[J]=_e);let fe=_e[ae];fe===void 0&&(fe=R.clone(),_e[ae]=fe,j.addEventListener("dispose",G)),R=fe}if(R.visible=j.visible,R.wireframe=j.wireframe,D===Qa?R.side=j.shadowSide!==null?j.shadowSide:j.side:R.side=j.shadowSide!==null?j.shadowSide:y[j.side],R.alphaMap=j.alphaMap,R.alphaTest=j.alphaToCoverage===!0?.5:j.alphaTest,R.map=j.map,R.clipShadows=j.clipShadows,R.clippingPlanes=j.clippingPlanes,R.clipIntersection=j.clipIntersection,R.displacementMap=j.displacementMap,R.displacementScale=j.displacementScale,R.displacementBias=j.displacementBias,R.wireframeLinewidth=j.wireframeLinewidth,R.linewidth=j.linewidth,I.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const J=r.properties.get(R);J.light=I}return R}function U(F,j,I,D,R){if(F.visible===!1)return;if(F.layers.test(j.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===Qa)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,F.matrixWorld);const ae=e.update(F),_e=F.material;if(Array.isArray(_e)){const fe=ae.groups;for(let H=0,ne=fe.length;H<ne;H++){const Y=fe[H],Ee=_e[Y.materialIndex];if(Ee&&Ee.visible){const O=L(F,Ee,D,R);F.onBeforeShadow(r,F,j,I,ae,O,Y),r.renderBufferDirect(I,null,ae,O,F,Y),F.onAfterShadow(r,F,j,I,ae,O,Y)}}}else if(_e.visible){const fe=L(F,_e,D,R);F.onBeforeShadow(r,F,j,I,ae,fe,null),r.renderBufferDirect(I,null,ae,fe,F,null),F.onAfterShadow(r,F,j,I,ae,fe,null)}}const J=F.children;for(let ae=0,_e=J.length;ae<_e;ae++)U(J[ae],j,I,D,R)}function G(F){F.target.removeEventListener("dispose",G);for(const I in m){const D=m[I],R=F.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const p2={[Kh]:Qh,[Jh]:tp,[$h]:np,[No]:ep,[Qh]:Kh,[tp]:Jh,[np]:$h,[ep]:No};function m2(r,e){function i(){let Z=!1;const Be=new Sn;let ve=null;const ye=new Sn(0,0,0,0);return{setMask:function(He){ve!==He&&!Z&&(r.colorMask(He,He,He,He),ve=He)},setLocked:function(He){Z=He},setClear:function(He,Fe,ct,It,cn){cn===!0&&(He*=It,Fe*=It,ct*=It),Be.set(He,Fe,ct,It),ye.equals(Be)===!1&&(r.clearColor(He,Fe,ct,It),ye.copy(Be))},reset:function(){Z=!1,ve=null,ye.set(-1,0,0,0)}}}function s(){let Z=!1,Be=!1,ve=null,ye=null,He=null;return{setReversed:function(Fe){if(Be!==Fe){const ct=e.get("EXT_clip_control");Fe?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT),Be=Fe;const It=He;He=null,this.setClear(It)}},getReversed:function(){return Be},setTest:function(Fe){Fe?Se(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(Fe){ve!==Fe&&!Z&&(r.depthMask(Fe),ve=Fe)},setFunc:function(Fe){if(Be&&(Fe=p2[Fe]),ye!==Fe){switch(Fe){case Kh:r.depthFunc(r.NEVER);break;case Qh:r.depthFunc(r.ALWAYS);break;case Jh:r.depthFunc(r.LESS);break;case No:r.depthFunc(r.LEQUAL);break;case $h:r.depthFunc(r.EQUAL);break;case ep:r.depthFunc(r.GEQUAL);break;case tp:r.depthFunc(r.GREATER);break;case np:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ye=Fe}},setLocked:function(Fe){Z=Fe},setClear:function(Fe){He!==Fe&&(Be&&(Fe=1-Fe),r.clearDepth(Fe),He=Fe)},reset:function(){Z=!1,ve=null,ye=null,He=null,Be=!1}}}function l(){let Z=!1,Be=null,ve=null,ye=null,He=null,Fe=null,ct=null,It=null,cn=null;return{setTest:function(At){Z||(At?Se(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(At){Be!==At&&!Z&&(r.stencilMask(At),Be=At)},setFunc:function(At,Mn,un){(ve!==At||ye!==Mn||He!==un)&&(r.stencilFunc(At,Mn,un),ve=At,ye=Mn,He=un)},setOp:function(At,Mn,un){(Fe!==At||ct!==Mn||It!==un)&&(r.stencilOp(At,Mn,un),Fe=At,ct=Mn,It=un)},setLocked:function(At){Z=At},setClear:function(At){cn!==At&&(r.clearStencil(At),cn=At)},reset:function(){Z=!1,Be=null,ve=null,ye=null,He=null,Fe=null,ct=null,It=null,cn=null}}}const c=new i,f=new s,h=new l,p=new WeakMap,m=new WeakMap;let v={},y={},S=new WeakMap,M=[],E=null,w=!1,x=null,_=null,P=null,L=null,U=null,G=null,F=null,j=new Ut(0,0,0),I=0,D=!1,R=null,B=null,J=null,ae=null,_e=null;const fe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ne=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=ne>=1):Y.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=ne>=2);let Ee=null,O={};const se=r.getParameter(r.SCISSOR_BOX),Ae=r.getParameter(r.VIEWPORT),Ne=new Sn().fromArray(se),ee=new Sn().fromArray(Ae);function K(Z,Be,ve,ye){const He=new Uint8Array(4),Fe=r.createTexture();r.bindTexture(Z,Fe),r.texParameteri(Z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ct=0;ct<ve;ct++)Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?r.texImage3D(Be,0,r.RGBA,1,1,ye,0,r.RGBA,r.UNSIGNED_BYTE,He):r.texImage2D(Be+ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,He);return Fe}const ce={};ce[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Se(r.DEPTH_TEST),f.setFunc(No),gt(!1),lt(w_),Se(r.CULL_FACE),X(Bs);function Se(Z){v[Z]!==!0&&(r.enable(Z),v[Z]=!0)}function Te(Z){v[Z]!==!1&&(r.disable(Z),v[Z]=!1)}function Qe(Z,Be){return y[Z]!==Be?(r.bindFramebuffer(Z,Be),y[Z]=Be,Z===r.DRAW_FRAMEBUFFER&&(y[r.FRAMEBUFFER]=Be),Z===r.FRAMEBUFFER&&(y[r.DRAW_FRAMEBUFFER]=Be),!0):!1}function Ie(Z,Be){let ve=M,ye=!1;if(Z){ve=S.get(Be),ve===void 0&&(ve=[],S.set(Be,ve));const He=Z.textures;if(ve.length!==He.length||ve[0]!==r.COLOR_ATTACHMENT0){for(let Fe=0,ct=He.length;Fe<ct;Fe++)ve[Fe]=r.COLOR_ATTACHMENT0+Fe;ve.length=He.length,ye=!0}}else ve[0]!==r.BACK&&(ve[0]=r.BACK,ye=!0);ye&&r.drawBuffers(ve)}function ke(Z){return E!==Z?(r.useProgram(Z),E=Z,!0):!1}const St={[_r]:r.FUNC_ADD,[mM]:r.FUNC_SUBTRACT,[gM]:r.FUNC_REVERSE_SUBTRACT};St[_M]=r.MIN,St[vM]=r.MAX;const qe={[xM]:r.ZERO,[yM]:r.ONE,[SM]:r.SRC_COLOR,[Yh]:r.SRC_ALPHA,[RM]:r.SRC_ALPHA_SATURATE,[TM]:r.DST_COLOR,[bM]:r.DST_ALPHA,[MM]:r.ONE_MINUS_SRC_COLOR,[Zh]:r.ONE_MINUS_SRC_ALPHA,[AM]:r.ONE_MINUS_DST_COLOR,[EM]:r.ONE_MINUS_DST_ALPHA,[CM]:r.CONSTANT_COLOR,[wM]:r.ONE_MINUS_CONSTANT_COLOR,[DM]:r.CONSTANT_ALPHA,[NM]:r.ONE_MINUS_CONSTANT_ALPHA};function X(Z,Be,ve,ye,He,Fe,ct,It,cn,At){if(Z===Bs){w===!0&&(Te(r.BLEND),w=!1);return}if(w===!1&&(Se(r.BLEND),w=!0),Z!==pM){if(Z!==x||At!==D){if((_!==_r||U!==_r)&&(r.blendEquation(r.FUNC_ADD),_=_r,U=_r),At)switch(Z){case wo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case D_:r.blendFunc(r.ONE,r.ONE);break;case N_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case U_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case wo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case D_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case N_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case U_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}P=null,L=null,G=null,F=null,j.set(0,0,0),I=0,x=Z,D=At}return}He=He||Be,Fe=Fe||ve,ct=ct||ye,(Be!==_||He!==U)&&(r.blendEquationSeparate(St[Be],St[He]),_=Be,U=He),(ve!==P||ye!==L||Fe!==G||ct!==F)&&(r.blendFuncSeparate(qe[ve],qe[ye],qe[Fe],qe[ct]),P=ve,L=ye,G=Fe,F=ct),(It.equals(j)===!1||cn!==I)&&(r.blendColor(It.r,It.g,It.b,cn),j.copy(It),I=cn),x=Z,D=!1}function ln(Z,Be){Z.side===ya?Te(r.CULL_FACE):Se(r.CULL_FACE);let ve=Z.side===xi;Be&&(ve=!ve),gt(ve),Z.blending===wo&&Z.transparent===!1?X(Bs):X(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),f.setFunc(Z.depthFunc),f.setTest(Z.depthTest),f.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const ye=Z.stencilWrite;h.setTest(ye),ye&&(h.setMask(Z.stencilWriteMask),h.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),h.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Pt(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?Se(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function gt(Z){R!==Z&&(Z?r.frontFace(r.CW):r.frontFace(r.CCW),R=Z)}function lt(Z){Z!==dM?(Se(r.CULL_FACE),Z!==B&&(Z===w_?r.cullFace(r.BACK):Z===hM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),B=Z}function Je(Z){Z!==J&&(H&&r.lineWidth(Z),J=Z)}function Pt(Z,Be,ve){Z?(Se(r.POLYGON_OFFSET_FILL),(ae!==Be||_e!==ve)&&(r.polygonOffset(Be,ve),ae=Be,_e=ve)):Te(r.POLYGON_OFFSET_FILL)}function Ze(Z){Z?Se(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function z(Z){Z===void 0&&(Z=r.TEXTURE0+fe-1),Ee!==Z&&(r.activeTexture(Z),Ee=Z)}function A(Z,Be,ve){ve===void 0&&(Ee===null?ve=r.TEXTURE0+fe-1:ve=Ee);let ye=O[ve];ye===void 0&&(ye={type:void 0,texture:void 0},O[ve]=ye),(ye.type!==Z||ye.texture!==Be)&&(Ee!==ve&&(r.activeTexture(ve),Ee=ve),r.bindTexture(Z,Be||ce[Z]),ye.type=Z,ye.texture=Be)}function k(){const Z=O[Ee];Z!==void 0&&Z.type!==void 0&&(r.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Q(){try{r.compressedTexImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function me(){try{r.compressedTexImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function pe(){try{r.texSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Oe(){try{r.texSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Le(){try{r.compressedTexSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function q(){try{r.compressedTexSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ye(){try{r.texStorage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function we(){try{r.texStorage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Xe(){try{r.texImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function et(){try{r.texImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function $e(Z){Ne.equals(Z)===!1&&(r.scissor(Z.x,Z.y,Z.z,Z.w),Ne.copy(Z))}function ze(Z){ee.equals(Z)===!1&&(r.viewport(Z.x,Z.y,Z.z,Z.w),ee.copy(Z))}function ht(Z,Be){let ve=m.get(Be);ve===void 0&&(ve=new WeakMap,m.set(Be,ve));let ye=ve.get(Z);ye===void 0&&(ye=r.getUniformBlockIndex(Be,Z.name),ve.set(Z,ye))}function at(Z,Be){const ye=m.get(Be).get(Z);p.get(Be)!==ye&&(r.uniformBlockBinding(Be,ye,Z.__bindingPointIndex),p.set(Be,ye))}function zt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},Ee=null,O={},y={},S=new WeakMap,M=[],E=null,w=!1,x=null,_=null,P=null,L=null,U=null,G=null,F=null,j=new Ut(0,0,0),I=0,D=!1,R=null,B=null,J=null,ae=null,_e=null,Ne.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Se,disable:Te,bindFramebuffer:Qe,drawBuffers:Ie,useProgram:ke,setBlending:X,setMaterial:ln,setFlipSided:gt,setCullFace:lt,setLineWidth:Je,setPolygonOffset:Pt,setScissorTest:Ze,activeTexture:z,bindTexture:A,unbindTexture:k,compressedTexImage2D:Q,compressedTexImage3D:me,texImage2D:Xe,texImage3D:et,updateUBOMapping:ht,uniformBlockBinding:at,texStorage2D:Ye,texStorage3D:we,texSubImage2D:pe,texSubImage3D:Oe,compressedTexSubImage2D:Le,compressedTexSubImage3D:q,scissor:$e,viewport:ze,reset:zt}}function g2(r,e,i,s,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new pt,v=new WeakMap;let y;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(z,A){return M?new OffscreenCanvas(z,A):nf("canvas")}function w(z,A,k){let Q=1;const me=Ze(z);if((me.width>k||me.height>k)&&(Q=k/Math.max(me.width,me.height)),Q<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const pe=Math.floor(Q*me.width),Oe=Math.floor(Q*me.height);y===void 0&&(y=E(pe,Oe));const Le=A?E(pe,Oe):y;return Le.width=pe,Le.height=Oe,Le.getContext("2d").drawImage(z,0,0,pe,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+pe+"x"+Oe+")."),Le}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),z;return z}function x(z){return z.generateMipmaps}function _(z){r.generateMipmap(z)}function P(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(z,A,k,Q,me=!1){if(z!==null){if(r[z]!==void 0)return r[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let pe=A;if(A===r.RED&&(k===r.FLOAT&&(pe=r.R32F),k===r.HALF_FLOAT&&(pe=r.R16F),k===r.UNSIGNED_BYTE&&(pe=r.R8)),A===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(pe=r.R8UI),k===r.UNSIGNED_SHORT&&(pe=r.R16UI),k===r.UNSIGNED_INT&&(pe=r.R32UI),k===r.BYTE&&(pe=r.R8I),k===r.SHORT&&(pe=r.R16I),k===r.INT&&(pe=r.R32I)),A===r.RG&&(k===r.FLOAT&&(pe=r.RG32F),k===r.HALF_FLOAT&&(pe=r.RG16F),k===r.UNSIGNED_BYTE&&(pe=r.RG8)),A===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(pe=r.RG8UI),k===r.UNSIGNED_SHORT&&(pe=r.RG16UI),k===r.UNSIGNED_INT&&(pe=r.RG32UI),k===r.BYTE&&(pe=r.RG8I),k===r.SHORT&&(pe=r.RG16I),k===r.INT&&(pe=r.RG32I)),A===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),k===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),k===r.UNSIGNED_INT&&(pe=r.RGB32UI),k===r.BYTE&&(pe=r.RGB8I),k===r.SHORT&&(pe=r.RGB16I),k===r.INT&&(pe=r.RGB32I)),A===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),k===r.UNSIGNED_INT&&(pe=r.RGBA32UI),k===r.BYTE&&(pe=r.RGBA8I),k===r.SHORT&&(pe=r.RGBA16I),k===r.INT&&(pe=r.RGBA32I)),A===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),A===r.RGBA){const Oe=me?ef:Vt.getTransfer(Q);k===r.FLOAT&&(pe=r.RGBA32F),k===r.HALF_FLOAT&&(pe=r.RGBA16F),k===r.UNSIGNED_BYTE&&(pe=Oe===Jt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function U(z,A){let k;return z?A===null||A===Sr||A===Zl?k=r.DEPTH24_STENCIL8:A===Ma?k=r.DEPTH32F_STENCIL8:A===Yl&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Sr||A===Zl?k=r.DEPTH_COMPONENT24:A===Ma?k=r.DEPTH_COMPONENT32F:A===Yl&&(k=r.DEPTH_COMPONENT16),k}function G(z,A){return x(z)===!0||z.isFramebufferTexture&&z.minFilter!==Pi&&z.minFilter!==Sa?Math.log2(Math.max(A.width,A.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?A.mipmaps.length:1}function F(z){const A=z.target;A.removeEventListener("dispose",F),I(A),A.isVideoTexture&&v.delete(A)}function j(z){const A=z.target;A.removeEventListener("dispose",j),R(A)}function I(z){const A=s.get(z);if(A.__webglInit===void 0)return;const k=z.source,Q=S.get(k);if(Q){const me=Q[A.__cacheKey];me.usedTimes--,me.usedTimes===0&&D(z),Object.keys(Q).length===0&&S.delete(k)}s.remove(z)}function D(z){const A=s.get(z);r.deleteTexture(A.__webglTexture);const k=z.source,Q=S.get(k);delete Q[A.__cacheKey],f.memory.textures--}function R(z){const A=s.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),s.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(A.__webglFramebuffer[Q]))for(let me=0;me<A.__webglFramebuffer[Q].length;me++)r.deleteFramebuffer(A.__webglFramebuffer[Q][me]);else r.deleteFramebuffer(A.__webglFramebuffer[Q]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[Q])}else{if(Array.isArray(A.__webglFramebuffer))for(let Q=0;Q<A.__webglFramebuffer.length;Q++)r.deleteFramebuffer(A.__webglFramebuffer[Q]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Q=0;Q<A.__webglColorRenderbuffer.length;Q++)A.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[Q]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const k=z.textures;for(let Q=0,me=k.length;Q<me;Q++){const pe=s.get(k[Q]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),f.memory.textures--),s.remove(k[Q])}s.remove(z)}let B=0;function J(){B=0}function ae(){const z=B;return z>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),B+=1,z}function _e(z){const A=[];return A.push(z.wrapS),A.push(z.wrapT),A.push(z.wrapR||0),A.push(z.magFilter),A.push(z.minFilter),A.push(z.anisotropy),A.push(z.internalFormat),A.push(z.format),A.push(z.type),A.push(z.generateMipmaps),A.push(z.premultiplyAlpha),A.push(z.flipY),A.push(z.unpackAlignment),A.push(z.colorSpace),A.join()}function fe(z,A){const k=s.get(z);if(z.isVideoTexture&&Je(z),z.isRenderTargetTexture===!1&&z.version>0&&k.__version!==z.version){const Q=z.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(k,z,A);return}}i.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+A)}function H(z,A){const k=s.get(z);if(z.version>0&&k.__version!==z.version){ee(k,z,A);return}i.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+A)}function ne(z,A){const k=s.get(z);if(z.version>0&&k.__version!==z.version){ee(k,z,A);return}i.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+A)}function Y(z,A){const k=s.get(z);if(z.version>0&&k.__version!==z.version){K(k,z,A);return}i.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+A)}const Ee={[sp]:r.REPEAT,[xr]:r.CLAMP_TO_EDGE,[rp]:r.MIRRORED_REPEAT},O={[Pi]:r.NEAREST,[HM]:r.NEAREST_MIPMAP_NEAREST,[_u]:r.NEAREST_MIPMAP_LINEAR,[Sa]:r.LINEAR,[uh]:r.LINEAR_MIPMAP_NEAREST,[yr]:r.LINEAR_MIPMAP_LINEAR},se={[kM]:r.NEVER,[KM]:r.ALWAYS,[XM]:r.LESS,[nx]:r.LEQUAL,[qM]:r.EQUAL,[ZM]:r.GEQUAL,[WM]:r.GREATER,[YM]:r.NOTEQUAL};function Ae(z,A){if(A.type===Ma&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Sa||A.magFilter===uh||A.magFilter===_u||A.magFilter===yr||A.minFilter===Sa||A.minFilter===uh||A.minFilter===_u||A.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,Ee[A.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,Ee[A.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,Ee[A.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,O[A.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,O[A.minFilter]),A.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,se[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Pi||A.minFilter!==_u&&A.minFilter!==yr||A.type===Ma&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(z,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function Ne(z,A){let k=!1;z.__webglInit===void 0&&(z.__webglInit=!0,A.addEventListener("dispose",F));const Q=A.source;let me=S.get(Q);me===void 0&&(me={},S.set(Q,me));const pe=_e(A);if(pe!==z.__cacheKey){me[pe]===void 0&&(me[pe]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,k=!0),me[pe].usedTimes++;const Oe=me[z.__cacheKey];Oe!==void 0&&(me[z.__cacheKey].usedTimes--,Oe.usedTimes===0&&D(A)),z.__cacheKey=pe,z.__webglTexture=me[pe].texture}return k}function ee(z,A,k){let Q=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Q=r.TEXTURE_3D);const me=Ne(z,A),pe=A.source;i.bindTexture(Q,z.__webglTexture,r.TEXTURE0+k);const Oe=s.get(pe);if(pe.version!==Oe.__version||me===!0){i.activeTexture(r.TEXTURE0+k);const Le=Vt.getPrimaries(Vt.workingColorSpace),q=A.colorSpace===zs?null:Vt.getPrimaries(A.colorSpace),Ye=A.colorSpace===zs||Le===q?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let we=w(A.image,!1,l.maxTextureSize);we=Pt(A,we);const Xe=c.convert(A.format,A.colorSpace),et=c.convert(A.type);let $e=L(A.internalFormat,Xe,et,A.colorSpace,A.isVideoTexture);Ae(Q,A);let ze;const ht=A.mipmaps,at=A.isVideoTexture!==!0,zt=Oe.__version===void 0||me===!0,Z=pe.dataReady,Be=G(A,we);if(A.isDepthTexture)$e=U(A.format===Ql,A.type),zt&&(at?i.texStorage2D(r.TEXTURE_2D,1,$e,we.width,we.height):i.texImage2D(r.TEXTURE_2D,0,$e,we.width,we.height,0,Xe,et,null));else if(A.isDataTexture)if(ht.length>0){at&&zt&&i.texStorage2D(r.TEXTURE_2D,Be,$e,ht[0].width,ht[0].height);for(let ve=0,ye=ht.length;ve<ye;ve++)ze=ht[ve],at?Z&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,ze.width,ze.height,Xe,et,ze.data):i.texImage2D(r.TEXTURE_2D,ve,$e,ze.width,ze.height,0,Xe,et,ze.data);A.generateMipmaps=!1}else at?(zt&&i.texStorage2D(r.TEXTURE_2D,Be,$e,we.width,we.height),Z&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,we.width,we.height,Xe,et,we.data)):i.texImage2D(r.TEXTURE_2D,0,$e,we.width,we.height,0,Xe,et,we.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){at&&zt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Be,$e,ht[0].width,ht[0].height,we.depth);for(let ve=0,ye=ht.length;ve<ye;ve++)if(ze=ht[ve],A.format!==ca)if(Xe!==null)if(at){if(Z)if(A.layerUpdates.size>0){const He=lv(ze.width,ze.height,A.format,A.type);for(const Fe of A.layerUpdates){const ct=ze.data.subarray(Fe*He/ze.data.BYTES_PER_ELEMENT,(Fe+1)*He/ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,Fe,ze.width,ze.height,1,Xe,ct)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,ze.width,ze.height,we.depth,Xe,ze.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,$e,ze.width,ze.height,we.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Z&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,ze.width,ze.height,we.depth,Xe,et,ze.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ve,$e,ze.width,ze.height,we.depth,0,Xe,et,ze.data)}else{at&&zt&&i.texStorage2D(r.TEXTURE_2D,Be,$e,ht[0].width,ht[0].height);for(let ve=0,ye=ht.length;ve<ye;ve++)ze=ht[ve],A.format!==ca?Xe!==null?at?Z&&i.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,ze.width,ze.height,Xe,ze.data):i.compressedTexImage2D(r.TEXTURE_2D,ve,$e,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Z&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,ze.width,ze.height,Xe,et,ze.data):i.texImage2D(r.TEXTURE_2D,ve,$e,ze.width,ze.height,0,Xe,et,ze.data)}else if(A.isDataArrayTexture)if(at){if(zt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Be,$e,we.width,we.height,we.depth),Z)if(A.layerUpdates.size>0){const ve=lv(we.width,we.height,A.format,A.type);for(const ye of A.layerUpdates){const He=we.data.subarray(ye*ve/we.data.BYTES_PER_ELEMENT,(ye+1)*ve/we.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ye,we.width,we.height,1,Xe,et,He)}A.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Xe,et,we.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,$e,we.width,we.height,we.depth,0,Xe,et,we.data);else if(A.isData3DTexture)at?(zt&&i.texStorage3D(r.TEXTURE_3D,Be,$e,we.width,we.height,we.depth),Z&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Xe,et,we.data)):i.texImage3D(r.TEXTURE_3D,0,$e,we.width,we.height,we.depth,0,Xe,et,we.data);else if(A.isFramebufferTexture){if(zt)if(at)i.texStorage2D(r.TEXTURE_2D,Be,$e,we.width,we.height);else{let ve=we.width,ye=we.height;for(let He=0;He<Be;He++)i.texImage2D(r.TEXTURE_2D,He,$e,ve,ye,0,Xe,et,null),ve>>=1,ye>>=1}}else if(ht.length>0){if(at&&zt){const ve=Ze(ht[0]);i.texStorage2D(r.TEXTURE_2D,Be,$e,ve.width,ve.height)}for(let ve=0,ye=ht.length;ve<ye;ve++)ze=ht[ve],at?Z&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,Xe,et,ze):i.texImage2D(r.TEXTURE_2D,ve,$e,Xe,et,ze);A.generateMipmaps=!1}else if(at){if(zt){const ve=Ze(we);i.texStorage2D(r.TEXTURE_2D,Be,$e,ve.width,ve.height)}Z&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Xe,et,we)}else i.texImage2D(r.TEXTURE_2D,0,$e,Xe,et,we);x(A)&&_(Q),Oe.__version=pe.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function K(z,A,k){if(A.image.length!==6)return;const Q=Ne(z,A),me=A.source;i.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+k);const pe=s.get(me);if(me.version!==pe.__version||Q===!0){i.activeTexture(r.TEXTURE0+k);const Oe=Vt.getPrimaries(Vt.workingColorSpace),Le=A.colorSpace===zs?null:Vt.getPrimaries(A.colorSpace),q=A.colorSpace===zs||Oe===Le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);const Ye=A.isCompressedTexture||A.image[0].isCompressedTexture,we=A.image[0]&&A.image[0].isDataTexture,Xe=[];for(let ye=0;ye<6;ye++)!Ye&&!we?Xe[ye]=w(A.image[ye],!0,l.maxCubemapSize):Xe[ye]=we?A.image[ye].image:A.image[ye],Xe[ye]=Pt(A,Xe[ye]);const et=Xe[0],$e=c.convert(A.format,A.colorSpace),ze=c.convert(A.type),ht=L(A.internalFormat,$e,ze,A.colorSpace),at=A.isVideoTexture!==!0,zt=pe.__version===void 0||Q===!0,Z=me.dataReady;let Be=G(A,et);Ae(r.TEXTURE_CUBE_MAP,A);let ve;if(Ye){at&&zt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Be,ht,et.width,et.height);for(let ye=0;ye<6;ye++){ve=Xe[ye].mipmaps;for(let He=0;He<ve.length;He++){const Fe=ve[He];A.format!==ca?$e!==null?at?Z&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He,0,0,Fe.width,Fe.height,$e,Fe.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He,ht,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?Z&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He,0,0,Fe.width,Fe.height,$e,ze,Fe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He,ht,Fe.width,Fe.height,0,$e,ze,Fe.data)}}}else{if(ve=A.mipmaps,at&&zt){ve.length>0&&Be++;const ye=Ze(Xe[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Be,ht,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(we){at?Z&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Xe[ye].width,Xe[ye].height,$e,ze,Xe[ye].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ht,Xe[ye].width,Xe[ye].height,0,$e,ze,Xe[ye].data);for(let He=0;He<ve.length;He++){const ct=ve[He].image[ye].image;at?Z&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He+1,0,0,ct.width,ct.height,$e,ze,ct.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He+1,ht,ct.width,ct.height,0,$e,ze,ct.data)}}else{at?Z&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,$e,ze,Xe[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ht,$e,ze,Xe[ye]);for(let He=0;He<ve.length;He++){const Fe=ve[He];at?Z&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He+1,0,0,$e,ze,Fe.image[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He+1,ht,$e,ze,Fe.image[ye])}}}x(A)&&_(r.TEXTURE_CUBE_MAP),pe.__version=me.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function ce(z,A,k,Q,me,pe){const Oe=c.convert(k.format,k.colorSpace),Le=c.convert(k.type),q=L(k.internalFormat,Oe,Le,k.colorSpace),Ye=s.get(A),we=s.get(k);if(we.__renderTarget=A,!Ye.__hasExternalTextures){const Xe=Math.max(1,A.width>>pe),et=Math.max(1,A.height>>pe);me===r.TEXTURE_3D||me===r.TEXTURE_2D_ARRAY?i.texImage3D(me,pe,q,Xe,et,A.depth,0,Oe,Le,null):i.texImage2D(me,pe,q,Xe,et,0,Oe,Le,null)}i.bindFramebuffer(r.FRAMEBUFFER,z),lt(A)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,me,we.__webglTexture,0,gt(A)):(me===r.TEXTURE_2D||me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,me,we.__webglTexture,pe),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Se(z,A,k){if(r.bindRenderbuffer(r.RENDERBUFFER,z),A.depthBuffer){const Q=A.depthTexture,me=Q&&Q.isDepthTexture?Q.type:null,pe=U(A.stencilBuffer,me),Oe=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=gt(A);lt(A)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Le,pe,A.width,A.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,pe,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,pe,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Oe,r.RENDERBUFFER,z)}else{const Q=A.textures;for(let me=0;me<Q.length;me++){const pe=Q[me],Oe=c.convert(pe.format,pe.colorSpace),Le=c.convert(pe.type),q=L(pe.internalFormat,Oe,Le,pe.colorSpace),Ye=gt(A);k&&lt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye,q,A.width,A.height):lt(A)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye,q,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,q,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(z,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,z),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=s.get(A.depthTexture);Q.__renderTarget=A,(!Q.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),fe(A.depthTexture,0);const me=Q.__webglTexture,pe=gt(A);if(A.depthTexture.format===Kl)lt(A)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,me,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,me,0);else if(A.depthTexture.format===Ql)lt(A)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,me,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Qe(z){const A=s.get(z),k=z.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==z.depthTexture){const Q=z.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Q){const me=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Q.removeEventListener("dispose",me)};Q.addEventListener("dispose",me),A.__depthDisposeCallback=me}A.__boundDepthTexture=Q}if(z.depthTexture&&!A.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const Q=z.texture.mipmaps;Q&&Q.length>0?Te(A.__webglFramebuffer[0],z):Te(A.__webglFramebuffer,z)}else if(k){A.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[Q]),A.__webglDepthbuffer[Q]===void 0)A.__webglDepthbuffer[Q]=r.createRenderbuffer(),Se(A.__webglDepthbuffer[Q],z,!1);else{const me=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=A.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,pe)}}else{const Q=z.texture.mipmaps;if(Q&&Q.length>0?i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Se(A.__webglDepthbuffer,z,!1);else{const me=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,pe)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(z,A,k){const Q=s.get(z);A!==void 0&&ce(Q.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Qe(z)}function ke(z){const A=z.texture,k=s.get(z),Q=s.get(A);z.addEventListener("dispose",j);const me=z.textures,pe=z.isWebGLCubeRenderTarget===!0,Oe=me.length>1;if(Oe||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=A.version,f.memory.textures++),pe){k.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer[Le]=[];for(let q=0;q<A.mipmaps.length;q++)k.__webglFramebuffer[Le][q]=r.createFramebuffer()}else k.__webglFramebuffer[Le]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer=[];for(let Le=0;Le<A.mipmaps.length;Le++)k.__webglFramebuffer[Le]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(Oe)for(let Le=0,q=me.length;Le<q;Le++){const Ye=s.get(me[Le]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=r.createTexture(),f.memory.textures++)}if(z.samples>0&&lt(z)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Le=0;Le<me.length;Le++){const q=me[Le];k.__webglColorRenderbuffer[Le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[Le]);const Ye=c.convert(q.format,q.colorSpace),we=c.convert(q.type),Xe=L(q.internalFormat,Ye,we,q.colorSpace,z.isXRRenderTarget===!0),et=gt(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,et,Xe,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,k.__webglColorRenderbuffer[Le])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Se(k.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pe){i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,A);for(let Le=0;Le<6;Le++)if(A.mipmaps&&A.mipmaps.length>0)for(let q=0;q<A.mipmaps.length;q++)ce(k.__webglFramebuffer[Le][q],z,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,q);else ce(k.__webglFramebuffer[Le],z,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);x(A)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Oe){for(let Le=0,q=me.length;Le<q;Le++){const Ye=me[Le],we=s.get(Ye);i.bindTexture(r.TEXTURE_2D,we.__webglTexture),Ae(r.TEXTURE_2D,Ye),ce(k.__webglFramebuffer,z,Ye,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,0),x(Ye)&&_(r.TEXTURE_2D)}i.unbindTexture()}else{let Le=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Le=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Le,Q.__webglTexture),Ae(Le,A),A.mipmaps&&A.mipmaps.length>0)for(let q=0;q<A.mipmaps.length;q++)ce(k.__webglFramebuffer[q],z,A,r.COLOR_ATTACHMENT0,Le,q);else ce(k.__webglFramebuffer,z,A,r.COLOR_ATTACHMENT0,Le,0);x(A)&&_(Le),i.unbindTexture()}z.depthBuffer&&Qe(z)}function St(z){const A=z.textures;for(let k=0,Q=A.length;k<Q;k++){const me=A[k];if(x(me)){const pe=P(z),Oe=s.get(me).__webglTexture;i.bindTexture(pe,Oe),_(pe),i.unbindTexture()}}}const qe=[],X=[];function ln(z){if(z.samples>0){if(lt(z)===!1){const A=z.textures,k=z.width,Q=z.height;let me=r.COLOR_BUFFER_BIT;const pe=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=s.get(z),Le=A.length>1;if(Le)for(let Ye=0;Ye<A.length;Ye++)i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const q=z.texture.mipmaps;q&&q.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ye=0;Ye<A.length;Ye++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(me|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(me|=r.STENCIL_BUFFER_BIT)),Le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ye]);const we=s.get(A[Ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,we,0)}r.blitFramebuffer(0,0,k,Q,0,0,k,Q,me,r.NEAREST),p===!0&&(qe.length=0,X.length=0,qe.push(r.COLOR_ATTACHMENT0+Ye),z.depthBuffer&&z.resolveDepthBuffer===!1&&(qe.push(pe),X.push(pe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,X)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,qe))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Le)for(let Ye=0;Ye<A.length;Ye++){i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ye]);const we=s.get(A[Ye]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.TEXTURE_2D,we,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&p){const A=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function gt(z){return Math.min(l.maxSamples,z.samples)}function lt(z){const A=s.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Je(z){const A=f.render.frame;v.get(z)!==A&&(v.set(z,A),z.update())}function Pt(z,A){const k=z.colorSpace,Q=z.format,me=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||k!==Oo&&k!==zs&&(Vt.getTransfer(k)===Jt?(Q!==ca||me!==Ea)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),A}function Ze(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(m.width=z.naturalWidth||z.width,m.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(m.width=z.displayWidth,m.height=z.displayHeight):(m.width=z.width,m.height=z.height),m}this.allocateTextureUnit=ae,this.resetTextureUnits=J,this.setTexture2D=fe,this.setTexture2DArray=H,this.setTexture3D=ne,this.setTextureCube=Y,this.rebindTextures=Ie,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=lt}function _2(r,e){function i(s,l=zs){let c;const f=Vt.getTransfer(l);if(s===Ea)return r.UNSIGNED_BYTE;if(s===Fp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Hp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Kv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Yv)return r.BYTE;if(s===Zv)return r.SHORT;if(s===Yl)return r.UNSIGNED_SHORT;if(s===Bp)return r.INT;if(s===Sr)return r.UNSIGNED_INT;if(s===Ma)return r.FLOAT;if(s===tc)return r.HALF_FLOAT;if(s===Qv)return r.ALPHA;if(s===Jv)return r.RGB;if(s===ca)return r.RGBA;if(s===Kl)return r.DEPTH_COMPONENT;if(s===Ql)return r.DEPTH_STENCIL;if(s===Gp)return r.RED;if(s===jp)return r.RED_INTEGER;if(s===$v)return r.RG;if(s===Vp)return r.RG_INTEGER;if(s===kp)return r.RGBA_INTEGER;if(s===ku||s===Xu||s===qu||s===Wu)if(f===Jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===ku)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===ku)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===op||s===lp||s===cp||s===up)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===op)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===up)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fp||s===dp||s===hp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===fp||s===dp)return f===Jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===hp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===pp||s===mp||s===gp||s===_p||s===vp||s===xp||s===yp||s===Sp||s===Mp||s===bp||s===Ep||s===Tp||s===Ap||s===Rp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===pp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===mp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_p)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Mp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ep)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Tp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ap)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Yu||s===Cp||s===wp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Yu)return f===Jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Cp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ex||s===Dp||s===Np||s===Up)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Yu)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Dp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Np)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Up)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const v2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class y2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new ai,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Hs({vertexShader:v2,fragmentShader:x2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new rn(new Ar(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S2 extends Er{constructor(e,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",p=1,m=null,v=null,y=null,S=null,M=null,E=null;const w=new y2,x=i.getContextAttributes();let _=null,P=null;const L=[],U=[],G=new pt;let F=null;const j=new oa;j.viewport=new Sn;const I=new oa;I.viewport=new Sn;const D=[j,I],R=new Hb;let B=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let K=L[ee];return K===void 0&&(K=new Nh,L[ee]=K),K.getTargetRaySpace()},this.getControllerGrip=function(ee){let K=L[ee];return K===void 0&&(K=new Nh,L[ee]=K),K.getGripSpace()},this.getHand=function(ee){let K=L[ee];return K===void 0&&(K=new Nh,L[ee]=K),K.getHandSpace()};function ae(ee){const K=U.indexOf(ee.inputSource);if(K===-1)return;const ce=L[K];ce!==void 0&&(ce.update(ee.inputSource,ee.frame,m||f),ce.dispatchEvent({type:ee.type,data:ee.inputSource}))}function _e(){l.removeEventListener("select",ae),l.removeEventListener("selectstart",ae),l.removeEventListener("selectend",ae),l.removeEventListener("squeeze",ae),l.removeEventListener("squeezestart",ae),l.removeEventListener("squeezeend",ae),l.removeEventListener("end",_e),l.removeEventListener("inputsourceschange",fe);for(let ee=0;ee<L.length;ee++){const K=U[ee];K!==null&&(U[ee]=null,L[ee].disconnect(K))}B=null,J=null,w.reset(),e.setRenderTarget(_),M=null,S=null,y=null,l=null,P=null,Ne.stop(),s.isPresenting=!1,e.setPixelRatio(F),e.setSize(G.width,G.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){h=ee,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(ee){m=ee},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return y},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",ae),l.addEventListener("selectstart",ae),l.addEventListener("selectend",ae),l.addEventListener("squeeze",ae),l.addEventListener("squeezestart",ae),l.addEventListener("squeezeend",ae),l.addEventListener("end",_e),l.addEventListener("inputsourceschange",fe),x.xrCompatible!==!0&&await i.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Se=null,Te=null;x.depth&&(Te=x.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ce=x.stencil?Ql:Kl,Se=x.stencil?Zl:Sr);const Qe={colorFormat:i.RGBA8,depthFormat:Te,scaleFactor:c};y=new XRWebGLBinding(l,i),S=y.createProjectionLayer(Qe),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),P=new Mr(S.textureWidth,S.textureHeight,{format:ca,type:Ea,depthTexture:new dx(S.textureWidth,S.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const ce={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ce),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Mr(M.framebufferWidth,M.framebufferHeight,{format:ca,type:Ea,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),Ne.setContext(l),Ne.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function fe(ee){for(let K=0;K<ee.removed.length;K++){const ce=ee.removed[K],Se=U.indexOf(ce);Se>=0&&(U[Se]=null,L[Se].disconnect(ce))}for(let K=0;K<ee.added.length;K++){const ce=ee.added[K];let Se=U.indexOf(ce);if(Se===-1){for(let Qe=0;Qe<L.length;Qe++)if(Qe>=U.length){U.push(ce),Se=Qe;break}else if(U[Qe]===null){U[Qe]=ce,Se=Qe;break}if(Se===-1)break}const Te=L[Se];Te&&Te.connect(ce)}}const H=new re,ne=new re;function Y(ee,K,ce){H.setFromMatrixPosition(K.matrixWorld),ne.setFromMatrixPosition(ce.matrixWorld);const Se=H.distanceTo(ne),Te=K.projectionMatrix.elements,Qe=ce.projectionMatrix.elements,Ie=Te[14]/(Te[10]-1),ke=Te[14]/(Te[10]+1),St=(Te[9]+1)/Te[5],qe=(Te[9]-1)/Te[5],X=(Te[8]-1)/Te[0],ln=(Qe[8]+1)/Qe[0],gt=Ie*X,lt=Ie*ln,Je=Se/(-X+ln),Pt=Je*-X;if(K.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Pt),ee.translateZ(Je),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Te[10]===-1)ee.projectionMatrix.copy(K.projectionMatrix),ee.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Ze=Ie+Je,z=ke+Je,A=gt-Pt,k=lt+(Se-Pt),Q=St*ke/z*Ze,me=qe*ke/z*Ze;ee.projectionMatrix.makePerspective(A,k,Q,me,Ze,z),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Ee(ee,K){K===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(K.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let K=ee.near,ce=ee.far;w.texture!==null&&(w.depthNear>0&&(K=w.depthNear),w.depthFar>0&&(ce=w.depthFar)),R.near=I.near=j.near=K,R.far=I.far=j.far=ce,(B!==R.near||J!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,J=R.far),j.layers.mask=ee.layers.mask|2,I.layers.mask=ee.layers.mask|4,R.layers.mask=j.layers.mask|I.layers.mask;const Se=ee.parent,Te=R.cameras;Ee(R,Se);for(let Qe=0;Qe<Te.length;Qe++)Ee(Te[Qe],Se);Te.length===2?Y(R,j,I):R.projectionMatrix.copy(j.projectionMatrix),O(ee,R,Se)};function O(ee,K,ce){ce===null?ee.matrix.copy(K.matrixWorld):(ee.matrix.copy(ce.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(K.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(K.projectionMatrix),ee.projectionMatrixInverse.copy(K.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Lp*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(ee){p=ee,S!==null&&(S.fixedFoveation=ee),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ee)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let se=null;function Ae(ee,K){if(v=K.getViewerPose(m||f),E=K,v!==null){const ce=v.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Se=!1;ce.length!==R.cameras.length&&(R.cameras.length=0,Se=!0);for(let Ie=0;Ie<ce.length;Ie++){const ke=ce[Ie];let St=null;if(M!==null)St=M.getViewport(ke);else{const X=y.getViewSubImage(S,ke);St=X.viewport,Ie===0&&(e.setRenderTargetTextures(P,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(P))}let qe=D[Ie];qe===void 0&&(qe=new oa,qe.layers.enable(Ie),qe.viewport=new Sn,D[Ie]=qe),qe.matrix.fromArray(ke.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ke.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(St.x,St.y,St.width,St.height),Ie===0&&(R.matrix.copy(qe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Se===!0&&R.cameras.push(qe)}const Te=l.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&y){const Ie=y.getDepthInformation(ce[0]);Ie&&Ie.isValid&&Ie.texture&&w.init(e,Ie,l.renderState)}}for(let ce=0;ce<L.length;ce++){const Se=U[ce],Te=L[ce];Se!==null&&Te!==void 0&&Te.update(Se,K,m||f)}se&&se(ee,K),K.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:K}),E=null}const Ne=new px;Ne.setAnimationLoop(Ae),this.setAnimationLoop=function(ee){se=ee},this.dispose=function(){}}}const mr=new Ta,M2=new on;function b2(r,e){function i(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function s(x,_){_.color.getRGB(x.fogColor.value,lx(r)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function l(x,_,P,L,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(x,_):_.isMeshToonMaterial?(c(x,_),y(x,_)):_.isMeshPhongMaterial?(c(x,_),v(x,_)):_.isMeshStandardMaterial?(c(x,_),S(x,_),_.isMeshPhysicalMaterial&&M(x,_,U)):_.isMeshMatcapMaterial?(c(x,_),E(x,_)):_.isMeshDepthMaterial?c(x,_):_.isMeshDistanceMaterial?(c(x,_),w(x,_)):_.isMeshNormalMaterial?c(x,_):_.isLineBasicMaterial?(f(x,_),_.isLineDashedMaterial&&h(x,_)):_.isPointsMaterial?p(x,_,P,L):_.isSpriteMaterial?m(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,i(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===xi&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,i(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===xi&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,i(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,i(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const P=e.get(_),L=P.envMap,U=P.envMapRotation;L&&(x.envMap.value=L,mr.copy(U),mr.x*=-1,mr.y*=-1,mr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),x.envMapRotation.value.setFromMatrix4(M2.makeRotationFromEuler(mr)),x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,x.aoMapTransform))}function f(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform))}function h(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function p(x,_,P,L){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*P,x.scale.value=L*.5,_.map&&(x.map.value=_.map,i(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function v(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function y(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function S(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function M(x,_,P){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===xi&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,_){_.matcap&&(x.matcap.value=_.matcap)}function w(x,_){const P=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function E2(r,e,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,L){const U=L.program;s.uniformBlockBinding(P,U)}function m(P,L){let U=l[P.id];U===void 0&&(E(P),U=v(P),l[P.id]=U,P.addEventListener("dispose",x));const G=L.program;s.updateUBOMapping(P,G);const F=e.render.frame;c[P.id]!==F&&(S(P),c[P.id]=F)}function v(P){const L=y();P.__bindingPointIndex=L;const U=r.createBuffer(),G=P.__size,F=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,G,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,U),U}function y(){for(let P=0;P<h;P++)if(f.indexOf(P)===-1)return f.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const L=l[P.id],U=P.uniforms,G=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let F=0,j=U.length;F<j;F++){const I=Array.isArray(U[F])?U[F]:[U[F]];for(let D=0,R=I.length;D<R;D++){const B=I[D];if(M(B,F,D,G)===!0){const J=B.__offset,ae=Array.isArray(B.value)?B.value:[B.value];let _e=0;for(let fe=0;fe<ae.length;fe++){const H=ae[fe],ne=w(H);typeof H=="number"||typeof H=="boolean"?(B.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,J+_e,B.__data)):H.isMatrix3?(B.__data[0]=H.elements[0],B.__data[1]=H.elements[1],B.__data[2]=H.elements[2],B.__data[3]=0,B.__data[4]=H.elements[3],B.__data[5]=H.elements[4],B.__data[6]=H.elements[5],B.__data[7]=0,B.__data[8]=H.elements[6],B.__data[9]=H.elements[7],B.__data[10]=H.elements[8],B.__data[11]=0):(H.toArray(B.__data,_e),_e+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(P,L,U,G){const F=P.value,j=L+"_"+U;if(G[j]===void 0)return typeof F=="number"||typeof F=="boolean"?G[j]=F:G[j]=F.clone(),!0;{const I=G[j];if(typeof F=="number"||typeof F=="boolean"){if(I!==F)return G[j]=F,!0}else if(I.equals(F)===!1)return I.copy(F),!0}return!1}function E(P){const L=P.uniforms;let U=0;const G=16;for(let j=0,I=L.length;j<I;j++){const D=Array.isArray(L[j])?L[j]:[L[j]];for(let R=0,B=D.length;R<B;R++){const J=D[R],ae=Array.isArray(J.value)?J.value:[J.value];for(let _e=0,fe=ae.length;_e<fe;_e++){const H=ae[_e],ne=w(H),Y=U%G,Ee=Y%ne.boundary,O=Y+Ee;U+=Ee,O!==0&&G-O<ne.storage&&(U+=G-O),J.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=U,U+=ne.storage}}}const F=U%G;return F>0&&(U+=G-F),P.__size=U,P.__cache={},this}function w(P){const L={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(L.boundary=4,L.storage=4):P.isVector2?(L.boundary=8,L.storage=8):P.isVector3||P.isColor?(L.boundary=16,L.storage=12):P.isVector4?(L.boundary=16,L.storage=16):P.isMatrix3?(L.boundary=48,L.storage=48):P.isMatrix4?(L.boundary=64,L.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),L}function x(P){const L=P.target;L.removeEventListener("dispose",x);const U=f.indexOf(L.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function _(){for(const P in l)r.deleteBuffer(l[P]);f=[],l={},c={}}return{bind:p,update:m,dispose:_}}class T2{constructor(e={}){const{canvas:i=$M(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=f;const E=new Uint32Array(4),w=new Int32Array(4);let x=null,_=null;const P=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let G=!1;this._outputColorSpace=ci;let F=0,j=0,I=null,D=-1,R=null;const B=new Sn,J=new Sn;let ae=null;const _e=new Ut(0);let fe=0,H=i.width,ne=i.height,Y=1,Ee=null,O=null;const se=new Sn(0,0,H,ne),Ae=new Sn(0,0,H,ne);let Ne=!1;const ee=new Yp;let K=!1,ce=!1;const Se=new on,Te=new on,Qe=new re,Ie=new Sn,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function qe(){return I===null?Y:1}let X=s;function ln(N,$){return i.getContext(N,$)}try{const N={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ip}`),i.addEventListener("webglcontextlost",ye,!1),i.addEventListener("webglcontextrestored",He,!1),i.addEventListener("webglcontextcreationerror",Fe,!1),X===null){const $="webgl2";if(X=ln($,N),X===null)throw ln($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let gt,lt,Je,Pt,Ze,z,A,k,Q,me,pe,Oe,Le,q,Ye,we,Xe,et,$e,ze,ht,at,zt,Z;function Be(){gt=new PT(X),gt.init(),at=new _2(X,gt),lt=new CT(X,gt,e,at),Je=new m2(X,gt),lt.reverseDepthBuffer&&S&&Je.buffers.depth.setReversed(!0),Pt=new BT(X),Ze=new n2,z=new g2(X,gt,Je,Ze,lt,at,Pt),A=new DT(U),k=new OT(U),Q=new kb(X),zt=new AT(X,Q),me=new zT(X,Q,Pt,zt),pe=new HT(X,me,Q,Pt),$e=new FT(X,lt,z),we=new wT(Ze),Oe=new t2(U,A,k,gt,lt,zt,we),Le=new b2(U,Ze),q=new a2,Ye=new u2(gt),et=new TT(U,A,k,Je,pe,M,p),Xe=new h2(U,pe,lt),Z=new E2(X,Pt,lt,Je),ze=new RT(X,gt,Pt),ht=new IT(X,gt,Pt),Pt.programs=Oe.programs,U.capabilities=lt,U.extensions=gt,U.properties=Ze,U.renderLists=q,U.shadowMap=Xe,U.state=Je,U.info=Pt}Be();const ve=new S2(U,X);this.xr=ve,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const N=gt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=gt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(N){N!==void 0&&(Y=N,this.setSize(H,ne,!1))},this.getSize=function(N){return N.set(H,ne)},this.setSize=function(N,$,ue=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=N,ne=$,i.width=Math.floor(N*Y),i.height=Math.floor($*Y),ue===!0&&(i.style.width=N+"px",i.style.height=$+"px"),this.setViewport(0,0,N,$)},this.getDrawingBufferSize=function(N){return N.set(H*Y,ne*Y).floor()},this.setDrawingBufferSize=function(N,$,ue){H=N,ne=$,Y=ue,i.width=Math.floor(N*ue),i.height=Math.floor($*ue),this.setViewport(0,0,N,$)},this.getCurrentViewport=function(N){return N.copy(B)},this.getViewport=function(N){return N.copy(se)},this.setViewport=function(N,$,ue,he){N.isVector4?se.set(N.x,N.y,N.z,N.w):se.set(N,$,ue,he),Je.viewport(B.copy(se).multiplyScalar(Y).round())},this.getScissor=function(N){return N.copy(Ae)},this.setScissor=function(N,$,ue,he){N.isVector4?Ae.set(N.x,N.y,N.z,N.w):Ae.set(N,$,ue,he),Je.scissor(J.copy(Ae).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(N){Je.setScissorTest(Ne=N)},this.setOpaqueSort=function(N){Ee=N},this.setTransparentSort=function(N){O=N},this.getClearColor=function(N){return N.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(N=!0,$=!0,ue=!0){let he=0;if(N){let ie=!1;if(I!==null){const Ue=I.texture.format;ie=Ue===kp||Ue===Vp||Ue===jp}if(ie){const Ue=I.texture.type,Pe=Ue===Ea||Ue===Sr||Ue===Yl||Ue===Zl||Ue===Fp||Ue===Hp,Ge=et.getClearColor(),We=et.getClearAlpha(),ot=Ge.r,st=Ge.g,tt=Ge.b;Pe?(E[0]=ot,E[1]=st,E[2]=tt,E[3]=We,X.clearBufferuiv(X.COLOR,0,E)):(w[0]=ot,w[1]=st,w[2]=tt,w[3]=We,X.clearBufferiv(X.COLOR,0,w))}else he|=X.COLOR_BUFFER_BIT}$&&(he|=X.DEPTH_BUFFER_BIT),ue&&(he|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ye,!1),i.removeEventListener("webglcontextrestored",He,!1),i.removeEventListener("webglcontextcreationerror",Fe,!1),et.dispose(),q.dispose(),Ye.dispose(),Ze.dispose(),A.dispose(),k.dispose(),pe.dispose(),zt.dispose(),Z.dispose(),Oe.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",bn),ve.removeEventListener("sessionend",An),Zn.stop()};function ye(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const N=Pt.autoReset,$=Xe.enabled,ue=Xe.autoUpdate,he=Xe.needsUpdate,ie=Xe.type;Be(),Pt.autoReset=N,Xe.enabled=$,Xe.autoUpdate=ue,Xe.needsUpdate=he,Xe.type=ie}function Fe(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ct(N){const $=N.target;$.removeEventListener("dispose",ct),It($)}function It(N){cn(N),Ze.remove(N)}function cn(N){const $=Ze.get(N).programs;$!==void 0&&($.forEach(function(ue){Oe.releaseProgram(ue)}),N.isShaderMaterial&&Oe.releaseShaderCache(N))}this.renderBufferDirect=function(N,$,ue,he,ie,Ue){$===null&&($=ke);const Pe=ie.isMesh&&ie.matrixWorld.determinant()<0,Ge=Ca(N,$,ue,he,ie);Je.setMaterial(he,Pe);let We=ue.index,ot=1;if(he.wireframe===!0){if(We=me.getWireframeAttribute(ue),We===void 0)return;ot=2}const st=ue.drawRange,tt=ue.attributes.position;let xt=st.start*ot,Bt=(st.start+st.count)*ot;Ue!==null&&(xt=Math.max(xt,Ue.start*ot),Bt=Math.min(Bt,(Ue.start+Ue.count)*ot)),We!==null?(xt=Math.max(xt,0),Bt=Math.min(Bt,We.count)):tt!=null&&(xt=Math.max(xt,0),Bt=Math.min(Bt,tt.count));const nn=Bt-xt;if(nn<0||nn===1/0)return;zt.setup(ie,he,Ge,ue,We);let Rt,Ct=ze;if(We!==null&&(Rt=Q.get(We),Ct=ht,Ct.setIndex(Rt)),ie.isMesh)he.wireframe===!0?(Je.setLineWidth(he.wireframeLinewidth*qe()),Ct.setMode(X.LINES)):Ct.setMode(X.TRIANGLES);else if(ie.isLine){let nt=he.linewidth;nt===void 0&&(nt=1),Je.setLineWidth(nt*qe()),ie.isLineSegments?Ct.setMode(X.LINES):ie.isLineLoop?Ct.setMode(X.LINE_LOOP):Ct.setMode(X.LINE_STRIP)}else ie.isPoints?Ct.setMode(X.POINTS):ie.isSprite&&Ct.setMode(X.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)Ku("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Ct.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const nt=ie._multiDrawStarts,an=ie._multiDrawCounts,Lt=ie._multiDrawCount,hn=We?Q.get(We).bytesPerElement:1,Qi=Ze.get(he).currentProgram.getUniforms();for(let Ht=0;Ht<Lt;Ht++)Qi.setValue(X,"_gl_DrawID",Ht),Ct.render(nt[Ht]/hn,an[Ht])}else if(ie.isInstancedMesh)Ct.renderInstances(xt,nn,ie.count);else if(ue.isInstancedBufferGeometry){const nt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,an=Math.min(ue.instanceCount,nt);Ct.renderInstances(xt,nn,an)}else Ct.render(xt,nn)};function At(N,$,ue){N.transparent===!0&&N.side===ya&&N.forceSinglePass===!1?(N.side=xi,N.needsUpdate=!0,Si(N,$,ue),N.side=ts,N.needsUpdate=!0,Si(N,$,ue),N.side=ya):Si(N,$,ue)}this.compile=function(N,$,ue=null){ue===null&&(ue=N),_=Ye.get(ue),_.init($),L.push(_),ue.traverseVisible(function(ie){ie.isLight&&ie.layers.test($.layers)&&(_.pushLight(ie),ie.castShadow&&_.pushShadow(ie))}),N!==ue&&N.traverseVisible(function(ie){ie.isLight&&ie.layers.test($.layers)&&(_.pushLight(ie),ie.castShadow&&_.pushShadow(ie))}),_.setupLights();const he=new Set;return N.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Ue=ie.material;if(Ue)if(Array.isArray(Ue))for(let Pe=0;Pe<Ue.length;Pe++){const Ge=Ue[Pe];At(Ge,ue,ie),he.add(Ge)}else At(Ue,ue,ie),he.add(Ue)}),_=L.pop(),he},this.compileAsync=function(N,$,ue=null){const he=this.compile(N,$,ue);return new Promise(ie=>{function Ue(){if(he.forEach(function(Pe){Ze.get(Pe).currentProgram.isReady()&&he.delete(Pe)}),he.size===0){ie(N);return}setTimeout(Ue,10)}gt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Mn=null;function un(N){Mn&&Mn(N)}function bn(){Zn.stop()}function An(){Zn.start()}const Zn=new px;Zn.setAnimationLoop(un),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(N){Mn=N,ve.setAnimationLoop(N),N===null?Zn.stop():Zn.start()},ve.addEventListener("sessionstart",bn),ve.addEventListener("sessionend",An),this.render=function(N,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera($),$=ve.getCamera()),N.isScene===!0&&N.onBeforeRender(U,N,$,I),_=Ye.get(N,L.length),_.init($),L.push(_),Te.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ee.setFromProjectionMatrix(Te),ce=this.localClippingEnabled,K=we.init(this.clippingPlanes,ce),x=q.get(N,P.length),x.init(),P.push(x),ve.enabled===!0&&ve.isPresenting===!0){const Ue=U.xr.getDepthSensingMesh();Ue!==null&&zi(Ue,$,-1/0,U.sortObjects)}zi(N,$,0,U.sortObjects),x.finish(),U.sortObjects===!0&&x.sort(Ee,O),St=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,St&&et.addToRenderList(x,N),this.info.render.frame++,K===!0&&we.beginShadows();const ue=_.state.shadowsArray;Xe.render(ue,N,$),K===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const he=x.opaque,ie=x.transmissive;if(_.setupLights(),$.isArrayCamera){const Ue=$.cameras;if(ie.length>0)for(let Pe=0,Ge=Ue.length;Pe<Ge;Pe++){const We=Ue[Pe];Ra(he,ie,N,We)}St&&et.render(N);for(let Pe=0,Ge=Ue.length;Pe<Ge;Pe++){const We=Ue[Pe];Aa(x,N,We,We.viewport)}}else ie.length>0&&Ra(he,ie,N,$),St&&et.render(N),Aa(x,N,$);I!==null&&j===0&&(z.updateMultisampleRenderTarget(I),z.updateRenderTargetMipmap(I)),N.isScene===!0&&N.onAfterRender(U,N,$),zt.resetDefaultState(),D=-1,R=null,L.pop(),L.length>0?(_=L[L.length-1],K===!0&&we.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,P.pop(),P.length>0?x=P[P.length-1]:x=null};function zi(N,$,ue,he){if(N.visible===!1)return;if(N.layers.test($.layers)){if(N.isGroup)ue=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update($);else if(N.isLight)_.pushLight(N),N.castShadow&&_.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||ee.intersectsSprite(N)){he&&Ie.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Te);const Pe=pe.update(N),Ge=N.material;Ge.visible&&x.push(N,Pe,Ge,ue,Ie.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||ee.intersectsObject(N))){const Pe=pe.update(N),Ge=N.material;if(he&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ie.copy(N.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ie.copy(Pe.boundingSphere.center)),Ie.applyMatrix4(N.matrixWorld).applyMatrix4(Te)),Array.isArray(Ge)){const We=Pe.groups;for(let ot=0,st=We.length;ot<st;ot++){const tt=We[ot],xt=Ge[tt.materialIndex];xt&&xt.visible&&x.push(N,Pe,xt,ue,Ie.z,tt)}}else Ge.visible&&x.push(N,Pe,Ge,ue,Ie.z,null)}}const Ue=N.children;for(let Pe=0,Ge=Ue.length;Pe<Ge;Pe++)zi(Ue[Pe],$,ue,he)}function Aa(N,$,ue,he){const ie=N.opaque,Ue=N.transmissive,Pe=N.transparent;_.setupLightsView(ue),K===!0&&we.setGlobalState(U.clippingPlanes,ue),he&&Je.viewport(B.copy(he)),ie.length>0&&yi(ie,$,ue),Ue.length>0&&yi(Ue,$,ue),Pe.length>0&&yi(Pe,$,ue),Je.buffers.depth.setTest(!0),Je.buffers.depth.setMask(!0),Je.buffers.color.setMask(!0),Je.setPolygonOffset(!1)}function Ra(N,$,ue,he){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[he.id]===void 0&&(_.state.transmissionRenderTarget[he.id]=new Mr(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?tc:Ea,minFilter:yr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));const Ue=_.state.transmissionRenderTarget[he.id],Pe=he.viewport||B;Ue.setSize(Pe.z*U.transmissionResolutionScale,Pe.w*U.transmissionResolutionScale);const Ge=U.getRenderTarget();U.setRenderTarget(Ue),U.getClearColor(_e),fe=U.getClearAlpha(),fe<1&&U.setClearColor(16777215,.5),U.clear(),St&&et.render(ue);const We=U.toneMapping;U.toneMapping=Fs;const ot=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),_.setupLightsView(he),K===!0&&we.setGlobalState(U.clippingPlanes,he),yi(N,ue,he),z.updateMultisampleRenderTarget(Ue),z.updateRenderTargetMipmap(Ue),gt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let tt=0,xt=$.length;tt<xt;tt++){const Bt=$[tt],nn=Bt.object,Rt=Bt.geometry,Ct=Bt.material,nt=Bt.group;if(Ct.side===ya&&nn.layers.test(he.layers)){const an=Ct.side;Ct.side=xi,Ct.needsUpdate=!0,da(nn,ue,he,Rt,Ct,nt),Ct.side=an,Ct.needsUpdate=!0,st=!0}}st===!0&&(z.updateMultisampleRenderTarget(Ue),z.updateRenderTargetMipmap(Ue))}U.setRenderTarget(Ge),U.setClearColor(_e,fe),ot!==void 0&&(he.viewport=ot),U.toneMapping=We}function yi(N,$,ue){const he=$.isScene===!0?$.overrideMaterial:null;for(let ie=0,Ue=N.length;ie<Ue;ie++){const Pe=N[ie],Ge=Pe.object,We=Pe.geometry,ot=Pe.group;let st=Pe.material;st.allowOverride===!0&&he!==null&&(st=he),Ge.layers.test(ue.layers)&&da(Ge,$,ue,We,st,ot)}}function da(N,$,ue,he,ie,Ue){N.onBeforeRender(U,$,ue,he,ie,Ue),N.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ie.onBeforeRender(U,$,ue,he,N,Ue),ie.transparent===!0&&ie.side===ya&&ie.forceSinglePass===!1?(ie.side=xi,ie.needsUpdate=!0,U.renderBufferDirect(ue,$,he,ie,N,Ue),ie.side=ts,ie.needsUpdate=!0,U.renderBufferDirect(ue,$,he,ie,N,Ue),ie.side=ya):U.renderBufferDirect(ue,$,he,ie,N,Ue),N.onAfterRender(U,$,ue,he,ie,Ue)}function Si(N,$,ue){$.isScene!==!0&&($=ke);const he=Ze.get(N),ie=_.state.lights,Ue=_.state.shadowsArray,Pe=ie.state.version,Ge=Oe.getParameters(N,ie.state,Ue,$,ue),We=Oe.getProgramCacheKey(Ge);let ot=he.programs;he.environment=N.isMeshStandardMaterial?$.environment:null,he.fog=$.fog,he.envMap=(N.isMeshStandardMaterial?k:A).get(N.envMap||he.environment),he.envMapRotation=he.environment!==null&&N.envMap===null?$.environmentRotation:N.envMapRotation,ot===void 0&&(N.addEventListener("dispose",ct),ot=new Map,he.programs=ot);let st=ot.get(We);if(st!==void 0){if(he.currentProgram===st&&he.lightsStateVersion===Pe)return ui(N,Ge),st}else Ge.uniforms=Oe.getUniforms(N),N.onBeforeCompile(Ge,U),st=Oe.acquireProgram(Ge,We),ot.set(We,st),he.uniforms=Ge.uniforms;const tt=he.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(tt.clippingPlanes=we.uniform),ui(N,Ge),he.needsLights=kt(N),he.lightsStateVersion=Pe,he.needsLights&&(tt.ambientLightColor.value=ie.state.ambient,tt.lightProbe.value=ie.state.probe,tt.directionalLights.value=ie.state.directional,tt.directionalLightShadows.value=ie.state.directionalShadow,tt.spotLights.value=ie.state.spot,tt.spotLightShadows.value=ie.state.spotShadow,tt.rectAreaLights.value=ie.state.rectArea,tt.ltc_1.value=ie.state.rectAreaLTC1,tt.ltc_2.value=ie.state.rectAreaLTC2,tt.pointLights.value=ie.state.point,tt.pointLightShadows.value=ie.state.pointShadow,tt.hemisphereLights.value=ie.state.hemi,tt.directionalShadowMap.value=ie.state.directionalShadowMap,tt.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,tt.spotShadowMap.value=ie.state.spotShadowMap,tt.spotLightMatrix.value=ie.state.spotLightMatrix,tt.spotLightMap.value=ie.state.spotLightMap,tt.pointShadowMap.value=ie.state.pointShadowMap,tt.pointShadowMatrix.value=ie.state.pointShadowMatrix),he.currentProgram=st,he.uniformsList=null,st}function Mi(N){if(N.uniformsList===null){const $=N.currentProgram.getUniforms();N.uniformsList=Qu.seqWithValue($.seq,N.uniforms)}return N.uniformsList}function ui(N,$){const ue=Ze.get(N);ue.outputColorSpace=$.outputColorSpace,ue.batching=$.batching,ue.batchingColor=$.batchingColor,ue.instancing=$.instancing,ue.instancingColor=$.instancingColor,ue.instancingMorph=$.instancingMorph,ue.skinning=$.skinning,ue.morphTargets=$.morphTargets,ue.morphNormals=$.morphNormals,ue.morphColors=$.morphColors,ue.morphTargetsCount=$.morphTargetsCount,ue.numClippingPlanes=$.numClippingPlanes,ue.numIntersection=$.numClipIntersection,ue.vertexAlphas=$.vertexAlphas,ue.vertexTangents=$.vertexTangents,ue.toneMapping=$.toneMapping}function Ca(N,$,ue,he,ie){$.isScene!==!0&&($=ke),z.resetTextureUnits();const Ue=$.fog,Pe=he.isMeshStandardMaterial?$.environment:null,Ge=I===null?U.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Oo,We=(he.isMeshStandardMaterial?k:A).get(he.envMap||Pe),ot=he.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,st=!!ue.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),tt=!!ue.morphAttributes.position,xt=!!ue.morphAttributes.normal,Bt=!!ue.morphAttributes.color;let nn=Fs;he.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(nn=U.toneMapping);const Rt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Ct=Rt!==void 0?Rt.length:0,nt=Ze.get(he),an=_.state.lights;if(K===!0&&(ce===!0||N!==R)){const fn=N===R&&he.id===D;we.setState(he,N,fn)}let Lt=!1;he.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==an.state.version||nt.outputColorSpace!==Ge||ie.isBatchedMesh&&nt.batching===!1||!ie.isBatchedMesh&&nt.batching===!0||ie.isBatchedMesh&&nt.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&nt.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&nt.instancing===!1||!ie.isInstancedMesh&&nt.instancing===!0||ie.isSkinnedMesh&&nt.skinning===!1||!ie.isSkinnedMesh&&nt.skinning===!0||ie.isInstancedMesh&&nt.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&nt.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&nt.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&nt.instancingMorph===!1&&ie.morphTexture!==null||nt.envMap!==We||he.fog===!0&&nt.fog!==Ue||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==we.numPlanes||nt.numIntersection!==we.numIntersection)||nt.vertexAlphas!==ot||nt.vertexTangents!==st||nt.morphTargets!==tt||nt.morphNormals!==xt||nt.morphColors!==Bt||nt.toneMapping!==nn||nt.morphTargetsCount!==Ct)&&(Lt=!0):(Lt=!0,nt.__version=he.version);let hn=nt.currentProgram;Lt===!0&&(hn=Si(he,$,ie));let Qi=!1,Ht=!1,Kn=!1;const Gt=hn.getUniforms(),Mt=nt.uniforms;if(Je.useProgram(hn.program)&&(Qi=!0,Ht=!0,Kn=!0),he.id!==D&&(D=he.id,Ht=!0),Qi||R!==N){Je.buffers.depth.getReversed()?(Se.copy(N.projectionMatrix),tb(Se),nb(Se),Gt.setValue(X,"projectionMatrix",Se)):Gt.setValue(X,"projectionMatrix",N.projectionMatrix),Gt.setValue(X,"viewMatrix",N.matrixWorldInverse);const Rn=Gt.map.cameraPosition;Rn!==void 0&&Rn.setValue(X,Qe.setFromMatrixPosition(N.matrixWorld)),lt.logarithmicDepthBuffer&&Gt.setValue(X,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&Gt.setValue(X,"isOrthographic",N.isOrthographicCamera===!0),R!==N&&(R=N,Ht=!0,Kn=!0)}if(ie.isSkinnedMesh){Gt.setOptional(X,ie,"bindMatrix"),Gt.setOptional(X,ie,"bindMatrixInverse");const fn=ie.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Gt.setValue(X,"boneTexture",fn.boneTexture,z))}ie.isBatchedMesh&&(Gt.setOptional(X,ie,"batchingTexture"),Gt.setValue(X,"batchingTexture",ie._matricesTexture,z),Gt.setOptional(X,ie,"batchingIdTexture"),Gt.setValue(X,"batchingIdTexture",ie._indirectTexture,z),Gt.setOptional(X,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Gt.setValue(X,"batchingColorTexture",ie._colorsTexture,z));const pn=ue.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&$e.update(ie,ue,hn),(Ht||nt.receiveShadow!==ie.receiveShadow)&&(nt.receiveShadow=ie.receiveShadow,Gt.setValue(X,"receiveShadow",ie.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(Mt.envMap.value=We,Mt.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),he.isMeshStandardMaterial&&he.envMap===null&&$.environment!==null&&(Mt.envMapIntensity.value=$.environmentIntensity),Ht&&(Gt.setValue(X,"toneMappingExposure",U.toneMappingExposure),nt.needsLights&&Ki(Mt,Kn),Ue&&he.fog===!0&&Le.refreshFogUniforms(Mt,Ue),Le.refreshMaterialUniforms(Mt,he,Y,ne,_.state.transmissionRenderTarget[N.id]),Qu.upload(X,Mi(nt),Mt,z)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Qu.upload(X,Mi(nt),Mt,z),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&Gt.setValue(X,"center",ie.center),Gt.setValue(X,"modelViewMatrix",ie.modelViewMatrix),Gt.setValue(X,"normalMatrix",ie.normalMatrix),Gt.setValue(X,"modelMatrix",ie.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const fn=he.uniformsGroups;for(let Rn=0,Bn=fn.length;Rn<Bn;Rn++){const si=fn[Rn];Z.update(si,hn),Z.bind(si,hn)}}return hn}function Ki(N,$){N.ambientLightColor.needsUpdate=$,N.lightProbe.needsUpdate=$,N.directionalLights.needsUpdate=$,N.directionalLightShadows.needsUpdate=$,N.pointLights.needsUpdate=$,N.pointLightShadows.needsUpdate=$,N.spotLights.needsUpdate=$,N.spotLightShadows.needsUpdate=$,N.rectAreaLights.needsUpdate=$,N.hemisphereLights.needsUpdate=$}function kt(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(N,$,ue){const he=Ze.get(N);he.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),Ze.get(N.texture).__webglTexture=$,Ze.get(N.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:ue,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,$){const ue=Ze.get(N);ue.__webglFramebuffer=$,ue.__useDefaultFramebuffer=$===void 0};const Gs=X.createFramebuffer();this.setRenderTarget=function(N,$=0,ue=0){I=N,F=$,j=ue;let he=!0,ie=null,Ue=!1,Pe=!1;if(N){const We=Ze.get(N);if(We.__useDefaultFramebuffer!==void 0)Je.bindFramebuffer(X.FRAMEBUFFER,null),he=!1;else if(We.__webglFramebuffer===void 0)z.setupRenderTarget(N);else if(We.__hasExternalTextures)z.rebindTextures(N,Ze.get(N.texture).__webglTexture,Ze.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const tt=N.depthTexture;if(We.__boundDepthTexture!==tt){if(tt!==null&&Ze.has(tt)&&(N.width!==tt.image.width||N.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(N)}}const ot=N.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Pe=!0);const st=Ze.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(st[$])?ie=st[$][ue]:ie=st[$],Ue=!0):N.samples>0&&z.useMultisampledRTT(N)===!1?ie=Ze.get(N).__webglMultisampledFramebuffer:Array.isArray(st)?ie=st[ue]:ie=st,B.copy(N.viewport),J.copy(N.scissor),ae=N.scissorTest}else B.copy(se).multiplyScalar(Y).floor(),J.copy(Ae).multiplyScalar(Y).floor(),ae=Ne;if(ue!==0&&(ie=Gs),Je.bindFramebuffer(X.FRAMEBUFFER,ie)&&he&&Je.drawBuffers(N,ie),Je.viewport(B),Je.scissor(J),Je.setScissorTest(ae),Ue){const We=Ze.get(N.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+$,We.__webglTexture,ue)}else if(Pe){const We=Ze.get(N.texture),ot=$;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,We.__webglTexture,ue,ot)}else if(N!==null&&ue!==0){const We=Ze.get(N.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,We.__webglTexture,ue)}D=-1},this.readRenderTargetPixels=function(N,$,ue,he,ie,Ue,Pe){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ze.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ge=Ge[Pe]),Ge){Je.bindFramebuffer(X.FRAMEBUFFER,Ge);try{const We=N.texture,ot=We.format,st=We.type;if(!lt.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=N.width-he&&ue>=0&&ue<=N.height-ie&&X.readPixels($,ue,he,ie,at.convert(ot),at.convert(st),Ue)}finally{const We=I!==null?Ze.get(I).__webglFramebuffer:null;Je.bindFramebuffer(X.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(N,$,ue,he,ie,Ue,Pe){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Ze.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ge=Ge[Pe]),Ge)if($>=0&&$<=N.width-he&&ue>=0&&ue<=N.height-ie){Je.bindFramebuffer(X.FRAMEBUFFER,Ge);const We=N.texture,ot=We.format,st=We.type;if(!lt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,tt),X.bufferData(X.PIXEL_PACK_BUFFER,Ue.byteLength,X.STREAM_READ),X.readPixels($,ue,he,ie,at.convert(ot),at.convert(st),0);const xt=I!==null?Ze.get(I).__webglFramebuffer:null;Je.bindFramebuffer(X.FRAMEBUFFER,xt);const Bt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await eb(X,Bt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,tt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ue),X.deleteBuffer(tt),X.deleteSync(Bt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,$=null,ue=0){const he=Math.pow(2,-ue),ie=Math.floor(N.image.width*he),Ue=Math.floor(N.image.height*he),Pe=$!==null?$.x:0,Ge=$!==null?$.y:0;z.setTexture2D(N,0),X.copyTexSubImage2D(X.TEXTURE_2D,ue,0,0,Pe,Ge,ie,Ue),Je.unbindTexture()};const Rr=X.createFramebuffer(),bi=X.createFramebuffer();this.copyTextureToTexture=function(N,$,ue=null,he=null,ie=0,Ue=null){Ue===null&&(ie!==0?(Ku("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=ie,ie=0):Ue=0);let Pe,Ge,We,ot,st,tt,xt,Bt,nn;const Rt=N.isCompressedTexture?N.mipmaps[Ue]:N.image;if(ue!==null)Pe=ue.max.x-ue.min.x,Ge=ue.max.y-ue.min.y,We=ue.isBox3?ue.max.z-ue.min.z:1,ot=ue.min.x,st=ue.min.y,tt=ue.isBox3?ue.min.z:0;else{const pn=Math.pow(2,-ie);Pe=Math.floor(Rt.width*pn),Ge=Math.floor(Rt.height*pn),N.isDataArrayTexture?We=Rt.depth:N.isData3DTexture?We=Math.floor(Rt.depth*pn):We=1,ot=0,st=0,tt=0}he!==null?(xt=he.x,Bt=he.y,nn=he.z):(xt=0,Bt=0,nn=0);const Ct=at.convert($.format),nt=at.convert($.type);let an;$.isData3DTexture?(z.setTexture3D($,0),an=X.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(z.setTexture2DArray($,0),an=X.TEXTURE_2D_ARRAY):(z.setTexture2D($,0),an=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,$.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,$.unpackAlignment);const Lt=X.getParameter(X.UNPACK_ROW_LENGTH),hn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Qi=X.getParameter(X.UNPACK_SKIP_PIXELS),Ht=X.getParameter(X.UNPACK_SKIP_ROWS),Kn=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Rt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Rt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ot),X.pixelStorei(X.UNPACK_SKIP_ROWS,st),X.pixelStorei(X.UNPACK_SKIP_IMAGES,tt);const Gt=N.isDataArrayTexture||N.isData3DTexture,Mt=$.isDataArrayTexture||$.isData3DTexture;if(N.isDepthTexture){const pn=Ze.get(N),fn=Ze.get($),Rn=Ze.get(pn.__renderTarget),Bn=Ze.get(fn.__renderTarget);Je.bindFramebuffer(X.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Je.bindFramebuffer(X.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let si=0;si<We;si++)Gt&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ze.get(N).__webglTexture,ie,tt+si),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ze.get($).__webglTexture,Ue,nn+si)),X.blitFramebuffer(ot,st,Pe,Ge,xt,Bt,Pe,Ge,X.DEPTH_BUFFER_BIT,X.NEAREST);Je.bindFramebuffer(X.READ_FRAMEBUFFER,null),Je.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ie!==0||N.isRenderTargetTexture||Ze.has(N)){const pn=Ze.get(N),fn=Ze.get($);Je.bindFramebuffer(X.READ_FRAMEBUFFER,Rr),Je.bindFramebuffer(X.DRAW_FRAMEBUFFER,bi);for(let Rn=0;Rn<We;Rn++)Gt?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,pn.__webglTexture,ie,tt+Rn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,pn.__webglTexture,ie),Mt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,fn.__webglTexture,Ue,nn+Rn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,fn.__webglTexture,Ue),ie!==0?X.blitFramebuffer(ot,st,Pe,Ge,xt,Bt,Pe,Ge,X.COLOR_BUFFER_BIT,X.NEAREST):Mt?X.copyTexSubImage3D(an,Ue,xt,Bt,nn+Rn,ot,st,Pe,Ge):X.copyTexSubImage2D(an,Ue,xt,Bt,ot,st,Pe,Ge);Je.bindFramebuffer(X.READ_FRAMEBUFFER,null),Je.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Mt?N.isDataTexture||N.isData3DTexture?X.texSubImage3D(an,Ue,xt,Bt,nn,Pe,Ge,We,Ct,nt,Rt.data):$.isCompressedArrayTexture?X.compressedTexSubImage3D(an,Ue,xt,Bt,nn,Pe,Ge,We,Ct,Rt.data):X.texSubImage3D(an,Ue,xt,Bt,nn,Pe,Ge,We,Ct,nt,Rt):N.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ue,xt,Bt,Pe,Ge,Ct,nt,Rt.data):N.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ue,xt,Bt,Rt.width,Rt.height,Ct,Rt.data):X.texSubImage2D(X.TEXTURE_2D,Ue,xt,Bt,Pe,Ge,Ct,nt,Rt);X.pixelStorei(X.UNPACK_ROW_LENGTH,Lt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,hn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Qi),X.pixelStorei(X.UNPACK_SKIP_ROWS,Ht),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Kn),Ue===0&&$.generateMipmaps&&X.generateMipmap(an),Je.unbindTexture()},this.copyTextureToTexture3D=function(N,$,ue=null,he=null,ie=0){return Ku('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,$,ue,he,ie)},this.initRenderTarget=function(N){Ze.get(N).__webglFramebuffer===void 0&&z.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?z.setTextureCube(N,0):N.isData3DTexture?z.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?z.setTexture2DArray(N,0):z.setTexture2D(N,0),Je.unbindTexture()},this.resetState=function(){F=0,j=0,I=null,Je.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ja}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Vt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Vt._getUnpackColorSpace()}}const Lv={type:"change"},em={type:"start"},xx={type:"end"},Fu=new qp,Ov=new Ps,A2=Math.cos(70*JM.DEG2RAD),On=new re,_i=2*Math.PI,$t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hh=1e-6;class R2 extends jb{constructor(e,i=null){super(e,i),this.state=$t.NONE,this.target=new re,this.cursor=new re,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$a.ROTATE,MIDDLE:$a.DOLLY,RIGHT:$a.PAN},this.touches={ONE:Is.ROTATE,TWO:Is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new re,this._lastQuaternion=new br,this._lastTargetPosition=new re,this._quat=new br().setFromUnitVectors(e.up,new re(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ov,this._sphericalDelta=new ov,this._scale=1,this._panOffset=new re,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new re,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=w2.bind(this),this._onPointerDown=C2.bind(this),this._onPointerUp=D2.bind(this),this._onContextMenu=I2.bind(this),this._onMouseWheel=L2.bind(this),this._onKeyDown=O2.bind(this),this._onTouchStart=P2.bind(this),this._onTouchMove=z2.bind(this),this._onMouseDown=N2.bind(this),this._onMouseMove=U2.bind(this),this._interceptControlDown=B2.bind(this),this._interceptControlUp=F2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lv),this.update(),this.state=$t.NONE}update(e=null){const i=this.object.position;On.copy(i).sub(this.target),On.applyQuaternion(this._quat),this._spherical.setFromVector3(On),this.autoRotate&&this.state===$t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=_i:s>Math.PI&&(s-=_i),l<-Math.PI?l+=_i:l>Math.PI&&(l-=_i),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(On.setFromSpherical(this._spherical),On.applyQuaternion(this._quatInverse),i.copy(this.target).add(On),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=On.length();f=this._clampDistance(h*this._scale);const p=h-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const h=new re(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const m=new re(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(h),this.object.updateMatrixWorld(),f=On.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Fu.origin.copy(this.object.position),Fu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fu.direction))<A2?this.object.lookAt(this.target):(Ov.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fu.intersectPlane(Ov,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Hh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hh||this._lastTargetPosition.distanceToSquared(this.target)>Hh?(this.dispatchEvent(Lv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_i/60*this.autoRotateSpeed*e:_i/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){On.setFromMatrixColumn(i,0),On.multiplyScalar(-e),this._panOffset.add(On)}_panUp(e,i){this.screenSpacePanning===!0?On.setFromMatrixColumn(i,1):(On.setFromMatrixColumn(i,0),On.crossVectors(this.object.up,On)),On.multiplyScalar(e),this._panOffset.add(On)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;On.copy(l).sub(this.target);let c=On.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,c=i-s.top,f=s.width,h=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(_i*this._rotateDelta.x/i.clientHeight),this._rotateUp(_i*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_i*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_i*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_i*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_i*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(_i*this._rotateDelta.x/i.clientHeight),this._rotateUp(_i*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(e.pageX+i.x)*.5,h=(e.pageY+i.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new pt,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function C2(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function w2(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function D2(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xx),this.state=$t.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function N2(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $a.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=$t.DOLLY;break;case $a.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=$t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=$t.ROTATE}break;case $a.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=$t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=$t.PAN}break;default:this.state=$t.NONE}this.state!==$t.NONE&&this.dispatchEvent(em)}function U2(r){switch(this.state){case $t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case $t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case $t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function L2(r){this.enabled===!1||this.enableZoom===!1||this.state!==$t.NONE||(r.preventDefault(),this.dispatchEvent(em),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(xx))}function O2(r){this.enabled!==!1&&this._handleKeyDown(r)}function P2(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Is.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=$t.TOUCH_ROTATE;break;case Is.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=$t.TOUCH_PAN;break;default:this.state=$t.NONE}break;case 2:switch(this.touches.TWO){case Is.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=$t.TOUCH_DOLLY_PAN;break;case Is.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=$t.TOUCH_DOLLY_ROTATE;break;default:this.state=$t.NONE}break;default:this.state=$t.NONE}this.state!==$t.NONE&&this.dispatchEvent(em)}function z2(r){switch(this._trackPointer(r),this.state){case $t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case $t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case $t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case $t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=$t.NONE}}function I2(r){this.enabled!==!1&&r.preventDefault()}function B2(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function F2(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ql=new re;function Zi(r,e,i,s,l,c){const f=2*Math.PI*l/4,h=Math.max(c-2*l,0),p=Math.PI/4;ql.copy(e),ql[s]=0,ql.normalize();const m=.5*f/(f+h),v=1-ql.angleTo(r)/p;return Math.sign(ql[i])===1?v*m:h/(f+h)+m+m*(1-v)}class H2 extends ba{constructor(e=1,i=1,s=1,l=2,c=.1){if(l=l*2+1,c=Math.min(e/2,i/2,s/2,c),super(1,1,1,l,l,l),l===1)return;const f=this.toNonIndexed();this.index=null,this.attributes.position=f.attributes.position,this.attributes.normal=f.attributes.normal,this.attributes.uv=f.attributes.uv;const h=new re,p=new re,m=new re(e,i,s).divideScalar(2).subScalar(c),v=this.attributes.position.array,y=this.attributes.normal.array,S=this.attributes.uv.array,M=v.length/6,E=new re,w=.5/l;for(let x=0,_=0;x<v.length;x+=3,_+=2)switch(h.fromArray(v,x),p.copy(h),p.x-=Math.sign(p.x)*w,p.y-=Math.sign(p.y)*w,p.z-=Math.sign(p.z)*w,p.normalize(),v[x+0]=m.x*Math.sign(h.x)+p.x*c,v[x+1]=m.y*Math.sign(h.y)+p.y*c,v[x+2]=m.z*Math.sign(h.z)+p.z*c,y[x+0]=p.x,y[x+1]=p.y,y[x+2]=p.z,Math.floor(x/M)){case 0:E.set(1,0,0),S[_+0]=Zi(E,p,"z","y",c,s),S[_+1]=1-Zi(E,p,"y","z",c,i);break;case 1:E.set(-1,0,0),S[_+0]=1-Zi(E,p,"z","y",c,s),S[_+1]=1-Zi(E,p,"y","z",c,i);break;case 2:E.set(0,1,0),S[_+0]=1-Zi(E,p,"x","z",c,e),S[_+1]=Zi(E,p,"z","x",c,s);break;case 3:E.set(0,-1,0),S[_+0]=1-Zi(E,p,"x","z",c,e),S[_+1]=1-Zi(E,p,"z","x",c,s);break;case 4:E.set(0,0,1),S[_+0]=1-Zi(E,p,"x","y",c,e),S[_+1]=1-Zi(E,p,"y","x",c,i);break;case 5:E.set(0,0,-1),S[_+0]=Zi(E,p,"x","y",c,e),S[_+1]=1-Zi(E,p,"y","x",c,i);break}}}const yx=[[4.5,3],[10.5,3],[4.5,8],[10.5,8],[18.5,3],[18.5,14]],G2=[[4,4],[10,4],[4,9],[10,9],[18,4],[18,15]],j2=[[2,14],[4,14],[6,14],[8,14],[10,14],[11,16]],Sx=[[1.5,1.5],[13.5,1.5],[1.5,10.5],[21.5,6.5],[13.5,18.5],[21.5,18.5]],Mx=2.5;function V2(r){r.blockRect(0,0,24,1),r.blockRect(0,0,1,20),r.blockRect(0,12,13,1);for(const[e,i]of yx)r.blockRect(e-1.85,i-.825,3.7,1.65),r.blockRect(e-.5,i+Mx-.5,1,1);r.blockRect(3,15,7,3);for(const e of[4.2,6.5,8.8])r.blockRect(e-.5,18.2,1,1.3);r.blockRect(17,8,4,2),r.blockRect(18,10,2,1),r.blockRect(22,13,2,4);for(const[e,i]of Sx)r.blockRect(e-.5,i-.5,1,1);return r}class k2{constructor(){Wi(this,"geometries",new Map);Wi(this,"materials",new Map);Wi(this,"textures",[])}material(e,i=.38,s=.03){const l=`${e}:${i}:${s}`;return this.materials.has(l)||this.materials.set(l,new Qp({color:e,roughness:i,metalness:s})),this.materials.get(l)}geometry(e,i){return this.geometries.has(e)||this.geometries.set(e,i()),this.geometries.get(e)}box(e,i,s,l,c,f,h,p,m=.06){const v=this.geometry(`box:${i}:${s}:${l}:${m}`,()=>m?new H2(i,s,l,2,Math.min(m,i/4,s/4,l/4)):new ba(i,s,l)),y=new rn(v,this.material(p));return y.position.set(c,f,h),y.castShadow=!0,y.receiveShadow=!0,e.add(y),y}cylinder(e,i,s,l,c,f,h,p){const m=this.geometry(`cyl:${i}:${s}:${l}`,()=>new Zp(i,s,l,20)),v=new rn(m,this.material(p,.29));return v.position.set(c,f,h),v.castShadow=!0,v.receiveShadow=!0,e.add(v),v}sphere(e,i,s,l,c,f){const h=this.geometry(`sphere:${i}`,()=>new sf(i,16,12)),p=new rn(h,this.material(f));return p.position.set(s,l,c),p.castShadow=!0,e.add(p),p}dispose(){for(const e of this.geometries.values())e.dispose();for(const e of this.materials.values())e.dispose();for(const e of this.textures)e.dispose()}}function X2(r,e,i){const s=document.createElement("canvas");s.width=256,s.height=160;const l=s.getContext("2d");if(l.fillStyle="#24283c",l.fillRect(0,0,256,160),l.fillStyle="#3e4159",l.fillRect(0,0,256,17),l.fillStyle=i,l.fillRect(12,6,5,5),l.fillStyle="#8390a9",l.fillRect(24,6,68,4),e==="iris")for(let f=0;f<5;f++)l.fillStyle=["#9d88d8","#83bbaa","#d9a3be"][f%3],l.fillRect(28+f*41,136-[39,70,58,94,85][f],26,[39,70,58,94,85][f]);else for(let f=0;f<7;f++)l.fillStyle=f%3===0?i:"#8490a7",l.globalAlpha=.8,l.fillRect(17,31+f*15,70+f*31%143,4),l.globalAlpha=1;const c=new fx(s);return c.colorSpace=ci,r.textures.push(c),c}function q2(r,e,i){V2(i);const s=e.box(r,24.7,.42,20.7,12,-.26,10,"#c7b29d",.14);e.box(r,24.2,.1,20.2,12,-.005,10,"#f0ddc4",.04).userData.walkable=!0;const l=e.geometry("plank",()=>new ba(1.98,.035,.98)),c=new Db(l,e.material("#ecd4b5",.62),240);let f=0;const h=new kn,p=["#efddc6","#ecd5b9","#e5caa8","#f5e3ca","#e8cfb0"];for(let x=0;x<20;x++)for(let _=0;_<12;_++)h.position.set(_*2+1,.061,x+.5),h.updateMatrix(),c.setMatrixAt(f,h.matrix),c.setColorAt(f,new Ut(p[(_*7+x*3)%5])),f++;c.receiveShadow=!0,c.userData.walkable=!0,r.add(c),e.box(r,12.3,.045,10.3,7.1,.1,6,"#ccb8ea",.12).userData.walkable=!0,e.box(r,7.3,.045,7.8,19.3,.1,4.6,"#d4e2d2",.12).userData.walkable=!0,e.box(r,7.3,.045,7.8,19.3,.1,15.4,"#e2d3ed",.12).userData.walkable=!0,e.box(r,24.5,3,.18,12,1.55,-.03,"#e8e3ed",.04),e.box(r,.18,3,20,-.03,1.55,10,"#eee9f0",.04);const m=new Ob({color:"#b8dfe5",transparent:!0,opacity:.34,roughness:.14,metalness:.04,side:ya,depthWrite:!1}),v=e.geometry("window",()=>new ba(3.5,1.85,.035));for(let x=2.3;x<24;x+=4.6){const _=new rn(v,m);_.position.set(x,1.9,.09),r.add(_),e.box(r,3.65,.1,.16,x,.94,.12,"#fafaff",.02),e.box(r,3.65,.1,.16,x,2.87,.12,"#fafaff",.02),e.box(r,.08,1.95,.12,x,1.9,.15,"#f6f8fb",.01),e.box(r,.08,1.95,.12,x-1.8,1.9,.15,"#f6f8fb",.01),e.box(r,.08,1.95,.12,x+1.8,1.9,.15,"#f6f8fb",.01)}for(let x=2.8;x<20;x+=4.6){const _=new rn(v,m);_.rotation.y=Math.PI/2,_.position.set(.1,1.9,x),r.add(_),e.box(r,.16,.1,3.65,.12,.94,x,"#fafaff",.02),e.box(r,.16,.1,3.65,.12,2.87,x,"#fafaff",.02)}for(let x=1.5;x<11;x+=3){const _=new rn(e.geometry("partition",()=>new ba(2.85,2.35,.045)),m);_.position.set(x,1.3,12.2),r.add(_),e.box(r,.055,2.5,.06,x-1.46,1.3,12.2,"#c8c0d2",.01),e.box(r,2.9,.05,.07,x,2.55,12.2,"#cec8d6",.01)}r.userData.extraMaterials=[m];const y=G2,S=yx,M=["anto","atlas","vera","bruno","iris","leo"],E=["#b58aee","#eeae67","#74b9a7","#799acb","#e995b9","#d7bb73"];S.forEach(([x,_],P)=>{const L=E[P];e.box(r,3.7,.15,1.65,x,1.3,_,"#f7eddf",.1);for(const j of[-1.5,1.5])for(const I of[-.58,.58])e.box(r,.12,1.2,.12,x+j,.66,_+I,"#cbbba8",.025);e.box(r,1.4,.88,.1,x,2.03,_-.28,"#454554",.055),e.box(r,.15,.25,.12,x,1.5,_-.28,"#5a5867",.025),e.box(r,.7,.05,.36,x,1.4,_-.22,"#a9a6b5",.035);const U=new rn(e.geometry("display",()=>new Ar(1.27,.72)),new Po({map:X2(e,M[P],L)}));U.position.set(x,2.04,_-.219),r.add(U),r.userData.extraMaterials.push(U.material),e.box(r,1.08,.045,.4,x,1.408,_+.47,"#e0dbe7",.025);for(let j=0;j<3;j++)e.box(r,.92,.015,.025,x,1.436,_+.36+j*.11,"#a4a0af",.006);e.box(r,.22,.05,.35,x+.83,1.43,_+.46,"#c8c1d4",.06),e.cylinder(r,.13,.105,.26,x+1.36,1.5,_+.3,L),e.cylinder(r,.105,.105,.012,x+1.36,1.638,_+.3,"#6c5646");const G=new rn(e.geometry("handle",()=>new Jl(.09,.025,7,12)),e.material(L));G.position.set(x+1.5,1.51,_+.3),G.rotation.y=Math.PI/2,r.add(G),e.box(r,.45,.04,.6,x-1.25,1.43,_+.3,"#c9b5e6",.02);const F=_+Mx;e.cylinder(r,.07,.07,.65,x,.47,F,"#73707d"),e.box(r,.95,.15,.85,x,.8,F,L,.12),e.box(r,.95,.85,.15,x,1.19,F+.38,L,.12),e.box(r,1.1,.065,.12,x,.19,F,"#96909e",.03),e.box(r,.12,.065,1.1,x,.19,F,"#96909e",.03);for(const j of[-.45,.45])for(const I of[-.45,.45])e.sphere(r,.075,x+j,.12,F+I,"#625e6c")}),e.box(r,6.7,.18,2.4,6.5,1.28,16.5,"#efe1c9",.25);for(const x of[4,9])e.box(r,.2,1.2,1.8,x,.64,16.5,"#c2b39f",.03);for(const x of[4.2,6.5,8.8])e.box(r,1,.16,.8,x,.75,18.7,"#9f8db9",.12),e.box(r,1,.75,.15,x,1.1,19.05,"#a996c4",.1),e.cylinder(r,.08,.08,.65,x,.38,18.7,"#80788c");e.box(r,.9,.05,.65,5.5,1.405,16.5,"#84679f",.04),e.box(r,.65,.05,.8,7.1,1.405,16.4,"#fff8ee",.03);for(const x of[3.9,8.8])e.cylinder(r,.12,.09,.23,x,1.52,16.1,"#bca5d7");e.box(r,3.3,.5,1,19,.45,8.5,"#83ab95",.2),e.box(r,3.3,.82,.22,19,.87,8.92,"#93b59f",.16),e.box(r,.22,.67,1,17.4,.78,8.5,"#92b49d",.12),e.box(r,.22,.67,1,20.6,.78,8.5,"#92b49d",.12),e.box(r,1.6,.13,.8,19,.52,10.4,"#e2d3ba",.1);for(const x of[-.6,.6])e.box(r,.09,.48,.09,19+x,.24,10.4,"#b0a18c",.02);e.box(r,.7,2.4,3.2,22.8,1.27,14.8,"#e2d6c4",.05);for(let x=0;x<4;x++){e.box(r,.8,.07,3.2,22.8,.35+x*.57,14.8,"#cbbda9",.02);for(let _=0;_<5;_++)e.box(r,.35,.38,.16,22.7,.57+x*.57,13.5+_*.42,["#9f86bd","#cfaa8a","#8baea0","#d4b7d2"][_%4],.01)}function w(x,_,P=!1){const L=P?1.55:1;e.cylinder(r,.39,.29,.62,x,.39,_,"#eee5d9"),e.cylinder(r,.35,.35,.035,x,.72,_,"#746053");for(let U=0;U<7;U++){const G=U*2.4,F=new vi;F.position.set(x,.7,_),F.rotation.y=G,r.add(F);const j=e.sphere(F,.23,0,L*.5,.18,["#669c7a","#84ad8d","#4c8267"][U%3]);j.scale.set(.58,L*1.9,1.05),j.rotation.x=.35+U%3*.22,j.position.y=L*.42}}Sx.forEach(([x,_],P)=>w(x,_,P%2===0));for(let x=1;x<24;x+=1.4)e.cylinder(r,.16,.16,.07,x,-.01,20.35,"#d5c2aa");return{floor:s,homes:y,meeting:j2}}function W2(r,e,i){const s=new vi,l=new vi;s.add(l);const c=["#edbd88","#ecc49a","#e4b38a","#ce9d73","#f0c8a3","#d9ad85"][i],f=[new vi,new vi];f.forEach((G,F)=>{G.position.set(F?.205:-.205,.73,0),l.add(G),r.box(G,.34,.57,.39,0,-.285,0,"#454655",.055),r.box(G,.36,.18,.54,0,-.59,.065,"#4a4958",.045)}),r.box(l,.8,.19,.44,0,.78,0,"#4b485c",.035),r.box(l,.85,.7,.47,0,1.19,0,e.color,.105),r.box(l,.025,.6,.015,0,1.2,.244,"#ffffff",.004);const h=r.box(l,.2,.15,.02,-.19,1.24,.25,"#f7effc",.02);h.rotation.z=.08,r.box(l,.11,.028,.025,-.19,1.25,.266,i%2?"#7c6c91":"#a89bbc",.004);const p=[new vi,new vi];p.forEach((G,F)=>{const j=F?1:-1;G.position.set(j*.53,1.42,0),l.add(G),r.cylinder(G,.15,.13,.48,0,-.23,0,e.color),r.sphere(G,.15,0,-.03,0,e.color);const I=new rn(r.geometry("claw",()=>new Jl(.115,.055,8,15,Math.PI*1.62)),r.material(c,.3));I.position.set(0,-.58,.015),I.rotation.z=F?.2:2.9,I.castShadow=!0,G.add(I),r.cylinder(G,.075,.075,.14,0,-.49,0,c)});const m=new vi;m.position.y=1.79,l.add(m),r.cylinder(m,.31,.31,.48,0,0,0,c),r.cylinder(m,.13,.13,.105,0,.29,0,c),r.cylinder(l,.14,.14,.18,0,1.53,0,c);const v=document.createElement("canvas");v.width=256,v.height=192;const y=v.getContext("2d");y.fillStyle="#403841",y.beginPath(),y.ellipse(83,77,9,13,0,0,Math.PI*2),y.ellipse(173,77,9,13,0,0,Math.PI*2),y.fill(),y.strokeStyle="#765344",y.lineWidth=6,y.lineCap="round",y.beginPath(),y.arc(128,111,34,.17,Math.PI-.17),y.stroke(),y.fillStyle="#f7ddbf",y.beginPath(),y.arc(80,72,2.5,0,Math.PI*2),y.arc(170,72,2.5,0,Math.PI*2),y.fill(),(i===1||i===3)&&(y.strokeStyle="#423e4a",y.lineWidth=6,y.strokeRect(53,53,61,44),y.strokeRect(142,53,61,44),y.beginPath(),y.moveTo(114,68),y.lineTo(142,68),y.stroke());const S=new fx(v);S.colorSpace=ci,r.textures.push(S);const M=new Po({map:S,transparent:!0,depthWrite:!1,side:ts}),E=new rn(r.geometry("face",()=>new Ar(.54,.41)),M);E.position.set(0,-.005,.316),m.add(E),s.userData.extraMaterials=[M];const w=["#433b50","#715441","#493e46","#564741","#ae758f","#866244"][i];r.cylinder(m,.325,.325,.16,0,.2,-.015,w);const x=r.sphere(m,.3,0,.27,-.035,w);if(x.scale.y=.48,i===0||i===2||i===4){r.box(m,.12,.37,.26,-.28,.06,-.08,w,.06),r.box(m,.12,.37,.26,.28,.06,-.08,w,.06);const G=r.sphere(m,.21,0,.08,-.34,w);G.scale.y=1.3}else{const G=r.box(m,.46,.12,.22,-.03,.21,.2,w,.045);G.rotation.z=.1}const _=new Po({color:"#8f63d4",transparent:!0,opacity:.82}),P=new rn(r.geometry("selection",()=>new Jl(.65,.045,8,40)),_);P.rotation.x=-Math.PI/2,P.position.y=.08,s.add(P);const L=new Qp({color:"#8fbea5",emissive:"#8fbea5",emissiveIntensity:.25,roughness:.3}),U=new rn(r.geometry("status-orb",()=>new sf(.09,12,8)),L);return U.position.set(.49,2.18,0),s.add(U),s.userData.extraMaterials.push(_,L),s.scale.setScalar(1.08),{root:s,body:l,head:m,arms:p,legs:f,ring:P,orb:U,agent:e}}const qt=([r,e])=>`${r},${e}`,va=r=>[r[0],r[1]],Pv=([r,e])=>[[r+1,e],[r,e+1],[r-1,e],[r,e-1]];class Y2{constructor(e=24,i=20){Wi(this,"width");Wi(this,"height");Wi(this,"walls",new Set);Wi(this,"occupants",new Map);Wi(this,"positions",new Map);Wi(this,"reservations",new Map);Wi(this,"steps",new Map);if(!Number.isInteger(e)||!Number.isInteger(i)||e<1||i<1||e>256||i>256)throw new RangeError("La cuadrícula debe medir entre 1 y 256 celdas por lado.");this.width=e,this.height=i}get blockedCount(){return this.walls.size}inBounds(e){return Number.isInteger(e[0])&&Number.isInteger(e[1])&&e[0]>=0&&e[0]<this.width&&e[1]>=0&&e[1]<this.height}isBlocked(e){return!this.inBounds(e)||this.walls.has(qt(e))}blockRect(e,i,s,l){if(![e,i,s,l].every(Number.isFinite)||s<=0||l<=0)throw new RangeError("El obstáculo debe ser un rectángulo finito de tamaño positivo.");const c=[];for(let f=Math.max(0,Math.floor(e));f<Math.min(this.width,Math.ceil(e+s));f++)for(let h=Math.max(0,Math.floor(i));h<Math.min(this.height,Math.ceil(i+l));h++){const p=qt([f,h]);if(this.occupants.has(p)||this.reservations.has(p))throw new Error("El obstáculo invadiría un personaje.");c.push(p)}for(const f of c)this.walls.add(f)}isFree(e,i){if(this.isBlocked(e))return!1;for(let s=-1;s<=1;s++)for(let l=-1;l<=1;l++){const c=qt([e[0]+s,e[1]+l]),f=this.occupants.get(c),h=this.reservations.get(c);if(f!==void 0&&f!==i||h!==void 0&&h!==i)return!1}return!0}register(e,i){if(!e||!this.isFree(i,e))return!1;const s=this.positions.get(e);return s?qt(s)===qt(i):(this.positions.set(e,va(i)),this.occupants.set(qt(i),e),!0)}position(e){const i=this.positions.get(e);return i?va(i):void 0}path(e,i){const s=this.positions.get(e);if(!s||!this.isFree(i,e))return[];const l=qt(s),c=qt(i);if(l===c)return[];const f=[va(s)],h=new Map([[l,null]]);for(let v=0;v<f.length;v++){const y=f[v];if(qt(y)===c)break;for(const S of Pv(y)){const M=qt(S);h.has(M)||!this.isFree(S,e)||(h.set(M,y),f.push(S))}}if(!h.has(c))return[];const p=[];let m=va(i);for(;m&&qt(m)!==l;)p.unshift(va(m)),m=h.get(qt(m))??null;return p}reserveNext(e,i){const s=this.positions.get(e);if(!s||Math.abs(s[0]-i[0])+Math.abs(s[1]-i[1])!==1||!this.isFree(i,e))return!1;const l=this.steps.get(e);return l?qt(l)===qt(i):(this.steps.set(e,va(i)),this.reservations.set(qt(i),e),!0)}arrive(e){const i=this.steps.get(e),s=this.positions.get(e);if(s)return i?(this.occupants.delete(qt(s)),this.occupants.set(qt(i),e),this.positions.set(e,va(i)),this.reservations.delete(qt(i)),this.steps.delete(e),va(i)):va(s)}cancel(e){const i=this.steps.get(e);i&&this.reservations.delete(qt(i)),this.steps.delete(e)}remove(e){this.cancel(e);const i=this.positions.get(e);i&&this.occupants.delete(qt(i)),this.positions.delete(e)}nearestFree(e,i){if(!e.every(Number.isFinite))return null;const s=[Math.max(0,Math.min(this.width-1,Math.round(e[0]))),Math.max(0,Math.min(this.height-1,Math.round(e[1])))],l=[s],c=new Set([qt(s)]);for(let f=0;f<l.length;f++){const h=l[f];if(this.isFree(h,i))return va(h);for(const p of Pv(h)){const m=qt(p);this.inBounds(p)&&!c.has(m)&&(c.add(m),l.push(p))}}return null}}class Z2{constructor(){Wi(this,"claims",new Map)}claim(e,i){if(!e||i.length===0)return!1;const s=new Set;for(const[l,c]of i){if(!Number.isInteger(l)||!Number.isInteger(c))return!1;for(let f=-1;f<=1;f++)for(let h=-1;h<=1;h++)s.add(qt([l+f,c+h]))}for(const[l,c]of this.claims)if(l!==e){for(const f of s)if(c.has(f))return!1}return this.claims.set(e,s),!0}release(e){this.claims.delete(e)}}const ra=r=>["En ejecución","En corrección"].includes(r),K2=r=>r==="Fallido"?"#d66a76":["Espera aprobación","Requiere información","Espera revisión"].includes(r)?"#d8a54d":ra(r)?"#56aa8b":r==="Interrumpido"||r==="Cancelado"?"#a79da8":"#9d87c3",Q2=r=>ra(r)?"Trabajando":r,Hu={background:"#fffc",border:"1px solid #e7dff0",borderRadius:7,padding:"6px 9px",fontSize:9,color:"#816694",boxShadow:"0 2px 8px #58426709",cursor:"pointer"};function J2(r){const e=Me.useRef(null),i=Me.useRef(null),s=Me.useRef(r),l=Me.useRef(()=>{}),[c,f]=Me.useState("Selecciona un agente y haz clic en una zona libre para moverlo."),[h,p]=Me.useState("");s.current=r,Me.useEffect(()=>{const y=i.current,S=e.current;let M;const E=navigator.deviceMemory,w=navigator.hardwareConcurrency>0&&navigator.hardwareConcurrency<=4||E!==void 0&&E<=4;try{M=new T2({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{p("Tu navegador no pudo iniciar WebGL. Prueba Chrome o Edge con aceleración gráfica; puedes seleccionar el equipo desde la lista inferior.");return}p(""),S.dataset.rendererReady="false",S.dataset.sceneVersion="3d",M.setPixelRatio(Math.min(window.devicePixelRatio,w||s.current.reduced?1.15:1.6)),M.shadowMap.enabled=!0,M.shadowMap.type=kv,M.shadowMap.autoUpdate=!1,M.shadowMap.needsUpdate=!0,M.outputColorSpace=ci,M.toneMapping=qv,M.toneMappingExposure=1.22,M.setClearColor("#f5f2f8",0),y.appendChild(M.domElement),M.domElement.setAttribute("aria-label","Oficina 3D interactiva. Arrastra para girar, rueda para acercar, clic en agente para seleccionar o en suelo para mover.");const x=new Rb,_=new k2,P=new Y2(24,20),L=new Z2,U=new vi;U.position.set(-12,0,-10),x.add(U);const G=new Ib("#fff5e9","#a4a2bc",2.7);x.add(G);const F=new av("#fff6df",3.2);F.position.set(-8,24,14),F.castShadow=!0,F.shadow.mapSize.set(1024,1024),F.shadow.camera.left=-20,F.shadow.camera.right=20,F.shadow.camera.top=20,F.shadow.camera.bottom=-20,F.shadow.camera.near=.1,F.shadow.camera.far=65,F.shadow.normalBias=.035,F.shadow.bias=-1e-4,F.shadow.radius=4,x.add(F);const j=new av("#d9d9ff",1.6);j.position.set(16,12,-10),x.add(j);const I=new rn(new Ar(140,140),new Lb({color:"#9b87ae",opacity:.14}));I.rotation.x=-Math.PI/2,I.position.y=-.5,I.receiveShadow=!0,x.add(I);const{homes:D,meeting:R}=q2(U,_,P),B=new Jp(-25,25,14,-14,.1,180);B.position.set(29,28,35);const J=new R2(B,M.domElement);J.target.set(0,.45,.2),J.enableDamping=!0,J.dampingFactor=.075,J.enablePan=!0,J.screenSpacePanning=!0,J.minPolarAngle=Math.PI*.15,J.maxPolarAngle=Math.PI*.44,J.minZoom=.7,J.maxZoom=3,J.rotateSpeed=.55,J.zoomSpeed=.75,J.panSpeed=.7,J.mouseButtons={LEFT:$a.ROTATE,MIDDLE:$a.DOLLY,RIGHT:$a.PAN},J.touches={ONE:Is.ROTATE,TWO:Is.DOLLY_PAN},J.update(),J.saveState();const ae=document.createElement("div");ae.style.cssText="position:absolute;inset:0;overflow:hidden;pointer-events:none;",y.appendChild(ae);const _e=s.current.agents.map((k,Q)=>{const me=W2(_,k,Q),pe=P.nearestFree(D[Q],k.id)||D[Q];P.register(k.id,pe),me.root.position.set(pe[0]+.5,.14,pe[1]+.5),me.root.rotation.y=.7,U.add(me.root),me.root.traverse(we=>{we instanceof rn&&(we.userData.agentId=k.id)}),me.ring.userData.ignorePick=!0;const Oe=document.createElement("button");Oe.dataset.agentId=k.id,Oe.dataset.agentLabel="true",Oe.setAttribute("aria-label",`${k.name} · ${k.role} · Disponible`),Oe.style.cssText="position:absolute;left:0;top:0;transform:translate(-50%,-100%);display:flex;align-items:center;gap:5px;white-space:nowrap;border:1px solid #e9dff2;background:#fffffff0;border-radius:7px;padding:4px 7px;box-shadow:0 2px 8px #56406c12;font:600 9px system-ui;color:#6a507e;cursor:pointer;pointer-events:auto;";const Le=document.createElement("i");Le.style.cssText=`width:5px;height:5px;flex-shrink:0;border-radius:50%;background:${k.color}`;const q=document.createElement("span");q.textContent=k.name;const Ye=document.createElement("small");return Ye.style.cssText="font-weight:400;font-size:7px;color:#9a85aa",Ye.textContent="Disponible",Oe.append(Le,q,Ye),Oe.addEventListener("click",we=>{we.stopPropagation(),s.current.onSelect(k.id)}),ae.appendChild(Oe),{...me,cell:pe,path:[],step:null,target:null,pending:null,label:Oe,status:"Disponible",waveUntil:0,walkPhase:Q,wait:0,home:D[Q],meeting:R[Q]}}),fe=new vi;U.add(fe);const H=new Po({color:"#a580d4",transparent:!0,opacity:.48}),ne=new Kp(.09,.14,12);function Y(k){for(;fe.children.length;)fe.remove(fe.children[0]);if(k)for(const Q of k.path){const me=new rn(ne,H);me.rotation.x=-Math.PI/2,me.position.set(Q[0]+.5,.153,Q[1]+.5),me.userData.ignorePick=!0,fe.add(me)}}function Ee(k){f(k)}function O(k,Q,me=!1){if(me&&ra(k.status)){Ee(`${k.agent.name} está trabajando. El movimiento manual estará disponible cuando termine.`);return}if(P.isBlocked(Q)){me&&Ee("Esa zona contiene un mueble o una división. Elige suelo libre.");return}if(k.step){k.pending=Q;return}if(!P.isFree(Q,k.agent.id)){L.release(k.agent.id),k.path=[],k.target=Q,k.wait=0,s.current.selected===k.agent.id&&Y(k),me&&Ee(`${k.agent.name} espera a que se libere el destino. Puedes elegir otro punto para cambiar la orden.`);return}const pe=P.path(k.agent.id,Q);if(pe.length===0&&qt(Q)!==qt(k.cell)){L.release(k.agent.id),k.path=[],k.target=Q,k.wait=0,me&&Ee(`${k.agent.name} espera a que quede libre el paso. Se moverá al destino cuando haya una ruta segura.`);return}if(pe.length&&!L.claim(k.agent.id,[k.cell,...pe])){L.release(k.agent.id),k.path=[],k.target=Q,k.wait=0,me&&Ee(`${k.agent.name} espera su turno en el pasillo compartido. La orden de movimiento está conservada.`);return}pe.length||L.release(k.agent.id),k.path=pe,k.target=Q,k.wait=0,s.current.reduced&&pe.length&&Ee("Movimiento reducido: traslado sin animación continua; las reservas siguen evitando colisiones."),s.current.selected===k.agent.id&&Y(k),me&&Ee(pe.length?`${k.agent.name} se dirige al punto elegido. Esto solo mueve al personaje; las tareas se gestionan en el tablero.`:`${k.agent.name} ya está en ese lugar.`)}l.current=k=>{const Q=_e.find(me=>me.agent.id===s.current.selected);if(Q){if(k==="stop"){Q.pending=null,Q.target=Q.step||Q.cell,Q.path=Q.step?[Q.step]:[],Q.waveUntil=0,s.current.selected===Q.agent.id&&Y(Q),Ee(`${Q.agent.name} detiene el desplazamiento al alcanzar una posición segura. Las tareas de IA se gestionan en el tablero.`);return}if(k==="wave"){if(ra(Q.status)){Ee(`${Q.agent.name} está trabajando. Puedes saludar cuando termine.`);return}Q.root.rotation.y=.7,Q.waveUntil=performance.now()/1e3+2.8,Ee(`${Q.agent.name} te saluda. Es un gesto visual, no una respuesta de IA.`);return}O(Q,k==="desk"?Q.home:Q.meeting,!0)}};const se=new Gb,Ae=new pt;let Ne={x:0,y:0,time:0};const ee=k=>{k.button===0&&(Ne={x:k.clientX,y:k.clientY,time:performance.now()})},K=k=>{if(k.button!==0||Math.hypot(k.clientX-Ne.x,k.clientY-Ne.y)>5||performance.now()-Ne.time>700)return;const Q=M.domElement.getBoundingClientRect();Ae.set((k.clientX-Q.left)/Q.width*2-1,-(k.clientY-Q.top)/Q.height*2+1),se.setFromCamera(Ae,B);const pe=se.intersectObjects(U.children,!0).filter(q=>{const Ye=q.object,we=Ye.material;return!Ye.userData.ignorePick&&!(we!=null&&we.transparent&&we.opacity<.5)})[0];if(!pe)return;if(pe.object.userData.agentId){s.current.onSelect(pe.object.userData.agentId);return}const Oe=_e.find(q=>q.agent.id===s.current.selected);if(!Oe)return;if(!pe.object.userData.walkable){Ee("Selecciona un personaje o haz clic en una zona libre del suelo.");return}const Le=U.worldToLocal(pe.point.clone());O(Oe,[Math.floor(Le.x),Math.floor(Le.z)],!0)};M.domElement.addEventListener("pointerdown",ee),M.domElement.addEventListener("pointerup",K);const ce=k=>{k.preventDefault(),p("Se perdió el contexto gráfico. Recarga la vista de oficina para recuperar la escena; tus datos siguen guardados.")};M.domElement.addEventListener("webglcontextlost",ce);let Se=1,Te=1,Qe=s.current.reset,Ie=s.current.zoom,ke=s.current.selected,St=0,qe=0,X=!1,ln=performance.now()/1e3,gt=0,lt=!0;function Je(){Se=Math.max(1,y.clientWidth),Te=Math.max(1,y.clientHeight);const k=Se/Te,Q=Math.max(21.5,38/k);B.left=-Q*k/2,B.right=Q*k/2,B.top=Q/2,B.bottom=-Q/2,B.updateProjectionMatrix(),M.setSize(Se,Te)}const Pt=new ResizeObserver(Je);Pt.observe(y),Je();const Ze=new re,z=new re;function A(k){var Le;if(!lt)return;St=requestAnimationFrame(A);const Q=k/1e3,me=s.current;if(document.hidden){ln=Q;return}if((w||me.reduced)&&k-gt<1e3/30-1)return;gt=k;const pe=Math.min(.5,Math.max(0,Q-ln));ln=Q,J.enableDamping=!me.reduced,me.reset!==Qe&&(J.reset(),B.zoom=me.zoom,B.updateProjectionMatrix(),Qe=me.reset,Ie=me.zoom),me.zoom!==Ie&&(B.zoom=me.zoom,B.updateProjectionMatrix(),Ie=me.zoom),ke!==me.selected&&(ke=me.selected,Y(_e.find(q=>q.agent.id===me.selected)));for(const q of _e){const Ye=me.states[q.agent.id]||"Disponible";if(Ye!==q.status){q.status=Ye;const ye=K2(Ye);q.orb.material.color.set(ye),q.orb.material.emissive.set(ye),q.label.firstChild.style.background=ye,q.label.lastChild.textContent=Q2(Ye),q.label.setAttribute("aria-label",`${q.agent.name} · ${q.agent.role} · ${Ye}`),ra(Ye)&&O(q,q.home)}const we=q.agent.id===me.selected;if(q.ring.visible=we,q.label.style.borderColor=we?"#bb93e2":"#e9dff2",q.label.style.zIndex=we?"4":"2",q.wait+=pe,!q.step&&q.pending){const ye=q.pending;q.pending=null,O(q,ye)}if(!q.step&&!q.path.length&&q.target&&qt(q.cell)!==qt(q.target)&&q.wait>.5){const ye=P.path(q.agent.id,q.target);ye.length&&L.claim(q.agent.id,[q.cell,...ye])&&(q.path=ye,q.wait=0,we&&Y(q))}let Xe=me.reduced?Number.POSITIVE_INFINITY:pe*2.2,et=0,$e=0;for(;Xe>1e-5&&$e++<64;){if(!q.step){if(!q.path.length)break;const Mn=q.path[0];if(P.reserveNext(q.agent.id,Mn))q.step=Mn,q.wait=0;else{if(q.wait>1&&q.target){const un=P.path(q.agent.id,q.target);q.path=un.length&&L.claim(q.agent.id,[q.cell,...un])?un:[],q.path.length||L.release(q.agent.id),q.wait=0,we&&Y(q)}break}}const ye=q.step,He=ye[0]+.5-q.root.position.x,Fe=ye[1]+.5-q.root.position.z,ct=Math.hypot(He,Fe),It=Math.min(ct,Xe),cn=Math.atan2(He,Fe),At=Math.atan2(Math.sin(cn-q.root.rotation.y),Math.cos(cn-q.root.rotation.y));if(q.root.rotation.y+=At*Math.min(1,pe*12),ct<=It+1e-4?(q.root.position.x=ye[0]+.5,q.root.position.z=ye[1]+.5,q.cell=P.arrive(q.agent.id),q.step=null,q.path.shift(),we&&Y(q)):(q.root.position.x+=He/ct*It,q.root.position.z+=Fe/ct*It),et+=It,Xe-=It,q.step)break;if(q.pending){const Mn=q.pending;q.pending=null,O(q,Mn)}}!q.step&&!q.path.length&&q.target&&qt(q.cell)===qt(q.target)&&L.release(q.agent.id);const ze=et>1e-5||!!q.step;q.walkPhase+=ze?et*4.5:pe*1.2;const ht=q.walkPhase,at=ra(q.status),zt=Q<q.waveUntil&&!at&&!ze,Z=ze&&!me.reduced?Math.sin(ht)*.53:0;if(q.legs[0].rotation.x=Z,q.legs[1].rotation.x=-Z,q.body.position.y=ze&&!me.reduced?Math.abs(Math.sin(ht))*.045:at&&!me.reduced?Math.sin(Q*5)*.008:0,q.arms[0].rotation.x=at&&!ze?-.92+(me.reduced?0:Math.sin(Q*9)*.08):-Z*.7,q.arms[1].rotation.x=at&&!ze?-.88+(me.reduced?0:Math.sin(Q*9+1)*.08):Z*.7,q.arms[0].rotation.z=.1,q.arms[1].rotation.z=zt?-2.4+(me.reduced?0:Math.sin(Q*11)*.23):-.1,q.head.rotation.y=!ze&&!me.reduced?Math.sin(Q*.7+q.walkPhase)*.055:0,q.head.rotation.z=q.status==="Fallido"?.13:0,q.orb.scale.setScalar(at&&!me.reduced?1+Math.sin(Q*4)*.15:1),!ze){const ye=at?Math.PI:Math.atan2(B.position.x-(q.root.position.x-12),B.position.z-(q.root.position.z-10));q.root.rotation.y+=Math.atan2(Math.sin(ye-q.root.rotation.y),Math.cos(ye-q.root.rotation.y))*Math.min(1,pe*6)}q.label.dataset.walking=String(ze),q.label.dataset.waiting=String(!ze&&!!q.target&&qt(q.cell)!==qt(q.target)),q.label.dataset.remaining=String(q.path.length),q.label.dataset.target=((Le=q.target)==null?void 0:Le.join(","))||"",q.label.dataset.gesture=zt?"saludando":"ninguno",q.label.dataset.worldX=q.root.position.x.toFixed(3),q.label.dataset.worldZ=q.root.position.z.toFixed(3),q.label.dataset.agentState=Ye,q.root.getWorldPosition(z),Ze.copy(z).add(new re(0,2.75,0)).project(B);const Be=(Ze.x*.5+.5)*Se,ve=(-Ze.y*.5+.5)*Te;q.label.style.left=`${Be}px`,q.label.style.top=`${ve}px`,q.label.style.display=Ze.z<-1||Ze.z>1||Be<0||Be>Se||ve<0||ve>Te?"none":"flex"}J.update();const Oe=_e.some(q=>q.step||q.path.length||Q<q.waveUntil||ra(q.status));Q>=qe&&(Oe||X)&&(M.shadowMap.needsUpdate=!0,qe=Q+.12),X=Oe,M.render(x,B),S.dataset.rendererReady!=="true"&&(S.dataset.rendererReady="true")}return St=requestAnimationFrame(A),()=>{lt=!1,cancelAnimationFrame(St),Pt.disconnect(),l.current=()=>{},M.domElement.removeEventListener("pointerdown",ee),M.domElement.removeEventListener("pointerup",K),M.domElement.removeEventListener("webglcontextlost",ce),J.dispose();for(const k of _e)for(const Q of k.root.userData.extraMaterials||[])Q.dispose();for(const k of U.userData.extraMaterials||[])k.dispose();ne.dispose(),H.dispose(),I.geometry.dispose(),I.material.dispose(),_.dispose(),M.dispose(),M.forceContextLoss(),ae.remove(),M.domElement.remove(),S.dataset.rendererReady="false"}},[]);const m=r.agents.find(y=>y.id===r.selected),v=r.states[r.selected]||"Disponible";return g.jsxs("div",{ref:e,className:"office-canvas","data-renderer-ready":"false","aria-label":"Oficina 3D interactiva de seis agentes",children:[g.jsx("div",{ref:i,style:{position:"absolute",inset:0}}),h?g.jsx("div",{role:"alert",style:{position:"absolute",inset:"30% 8% auto",background:"#fff9",padding:18,borderRadius:12,fontSize:12,color:"#82668f",lineHeight:1.7},children:h}):g.jsxs("div",{className:"scene-3d-actions",style:{position:"absolute",top:61,right:12,zIndex:5,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:5,pointerEvents:"auto"},children:[g.jsxs("div",{style:{fontSize:8,color:"#9a81ad",background:"#ffffffc9",borderRadius:5,padding:"4px 7px"},children:[m==null?void 0:m.name," · ",v]}),g.jsxs("div",{style:{display:"flex",gap:4},children:[g.jsx("button",{style:Hu,onClick:()=>l.current("desk"),title:"Mover visualmente al escritorio",disabled:ra(v),children:"Escritorio"}),g.jsx("button",{style:Hu,onClick:()=>l.current("meeting"),title:"Mover visualmente a la sala de reunión",disabled:ra(v),children:"Reunión"}),g.jsx("button",{style:Hu,onClick:()=>l.current("wave"),title:"Animación visual de saludo",disabled:ra(v),children:"Saludar"}),g.jsx("button",{style:Hu,onClick:()=>l.current("stop"),title:"Detener desplazamiento visual",disabled:ra(v),children:"Detener"})]})]}),g.jsx("p",{className:"scene-3d-feedback",role:"status","aria-live":"polite",style:{position:"absolute",left:12,right:170,bottom:47,fontSize:8,lineHeight:1.5,color:"#96809f",padding:"5px 7px",margin:0,borderRadius:5,background:"#fbf8fdca",pointerEvents:"none",maxWidth:430},children:c})]})}const Gu={gemini:{name:"Google Gemini",secret:"STUDIO_GEMINI_API_KEY",model:"gemini-2.5-flash-lite",link:"https://aistudio.google.com/apikey"},groq:{name:"Groq",secret:"STUDIO_GROQ_API_KEY",model:"openai/gpt-oss-20b",link:"https://console.groq.com/keys"}};async function Ka(r,e,i){const s=await ec("/api"+r,{method:i||(e?"POST":"GET"),headers:{"Content-Type":"application/json"},body:e?JSON.stringify(e):void 0});return $l(s)}function $2(r){const[e,i]=Me.useState(r.provider),[s,l]=Me.useState(r.agents),[c,f]=Me.useState(!1),[h,p]=Me.useState(null),[m,v]=Me.useState(""),[y,S]=Me.useState(""),[M,E]=Me.useState(),[w,x]=Me.useState();Me.useEffect(()=>{let I=!0;return v(""),Ka("/credentials/"+e).then(D=>{I&&E(D)}).catch(()=>{I&&E(void 0)}),()=>{I=!1}},[e]),Me.useEffect(()=>{i(r.provider),l(r.agents)},[r.provider,r.agents]);const _=Gu[e]||Gu.gemini,P=e!==r.provider&&(w==null?void 0:w.provider)===e?w:r.status,L=P.provider===e;function U(I){S(""),v(""),E(void 0),x(void 0),i(I),p(null),l(D=>D.map(R=>({...R,model:Gu[I].model})))}async function G(I){f(!0),p(null),r.onError("");try{if(I==="check"){const B=await Ka("/models?provider="+e);x(B),e===r.provider&&r.onStatus(B),r.onNotice(B.connected?"Catálogo actualizado. Tus cambios siguen sin guardar.":B.error||"Comprueba la clave y tu conexión.");return}if(I==="test"){const B=await Ka("/connect",{provider:e,agent:"anto",agents:s});r.onSaved(B.settings),r.onStatus(B.status,!0),x(B.status),l(B.settings.agents),p(B.proof),r.onNotice("Listo. Configuración guardada; ya puedes conversar.");return}await Ka("/settings",{provider:e,agents:s,ollama_url:r.ollama,openai_url:r.openai},"PUT");const D=await Ka("/settings");r.onSaved(D),l(D.agents);const R=await Ka("/models");x(R),r.onStatus(R,!0),r.onNotice(R.connected?"Configuración guardada. La API responde.":"Configuración guardada. "+(R.error||"Comprueba la clave y tu conexión."))}catch(D){r.onError(D.message)}finally{f(!1)}}async function F(){S(""),f(!0),p(null),r.onError("");try{const I=await Ka("/credentials",{provider:e,api_key:m});v(""),E(I.credential),r.onSaved(I.settings),r.onStatus(I.status,!0),x(I.status),l(I.settings.agents),p(I.proof),r.onNotice("Clave guardada en el servidor. Ya puedes conversar.")}catch(I){S(I.message)}finally{f(!1)}}async function j(){f(!0),p(null),r.onError("");try{E(await Ka("/credentials/"+e,void 0,"DELETE")),v(""),x(void 0),r.onStatus(await Ka("/models"),!0),r.onNotice("Clave quitada de la aplicación. Un secreto de Codespaces, si existe, sigue disponible.")}catch(I){r.onError(I.message)}finally{f(!1)}}return g.jsx("section",{className:"content-card settings-card",children:g.jsxs("fieldset",{disabled:c,style:{border:0,padding:0,margin:0,minWidth:0},children:[g.jsxs("div",{className:"section-title",children:[g.jsxs("div",{children:[g.jsx("div",{className:"eyebrow",children:"IA EN LA NUBE"}),g.jsx("h2",{children:"APIs y modelos"})]}),g.jsx("span",{className:"pill",children:"Sin modelos locales"})]}),g.jsx("div",{className:"provider-options",role:"group","aria-label":"Proveedor de IA",children:["gemini","groq"].map(I=>g.jsxs("button",{className:"provider-option "+(e===I?"selected":""),onClick:()=>U(I),children:[g.jsx("strong",{children:Gu[I].name}),g.jsx("small",{children:"API en la nube · cuota gratuita según tu cuenta"})]},I))}),g.jsxs("div",{className:"integration-note",children:[g.jsxs("h3",{children:["Tu clave de ",_.name]}),g.jsx("p",{children:"Pega tu clave aquí y pulsa Guardar clave y conectar. Se comprobará antes de reemplazar una clave que ya funciona."}),g.jsxs("label",{children:["Clave API de ",_.name,g.jsx("input",{type:"password","aria-label":"Clave API",value:m,onChange:I=>{v(I.target.value),S("")},autoComplete:"new-password",autoCapitalize:"none",spellCheck:!1,onKeyDown:I=>{I.key==="Enter"&&m.trim()&&!c&&(I.preventDefault(),F())},maxLength:4096,placeholder:M!=null&&M.configured?"Ya hay una clave configurada. Pega otra para cambiarla.":"Pega tu clave de API"})]}),g.jsxs("div",{className:"api-config-row",children:[g.jsx("button",{className:"button primary",disabled:!m.trim(),onClick:F,children:c?"Comprobando…":"Guardar clave y conectar"}),(M==null?void 0:M.saved_in_app)&&g.jsx("button",{className:"button secondary",onClick:j,children:"Eliminar clave guardada"})]}),y&&g.jsx("p",{className:"chat-error",role:"alert",children:y}),g.jsxs("p",{children:[M!=null&&M.saved_in_app?"Tienes una clave guardada en esta aplicación.":M!=null&&M.configured?"Se está usando tu secreto de Codespaces.":"Todavía no hay una clave guardada."," El valor queda en un archivo privado del servidor y no vuelve a mostrarse. No se incluye en Git ni en las entregas ZIP."]}),g.jsx("a",{href:_.link,target:"_blank",rel:"noreferrer",children:"Obtener una clave en el sitio oficial"})]}),g.jsxs("details",{className:"integration-note",children:[g.jsx("summary",{children:"Usar un secreto de Codespaces"}),g.jsxs("p",{children:["También puedes guardar ",g.jsx("code",{children:_.secret})," en Settings → Codespaces → Secrets, autorizar este repositorio y reiniciar el Codespace. Se reconocen además ",g.jsx("code",{children:e==="gemini"?"GEMINI_API_KEY o GOOGLE_API_KEY":"GROQ_API_KEY"}),". La clave guardada en la aplicación tiene prioridad."]})]}),g.jsx("div",{className:"settings-connection "+(L&&P.connected?"ok":""),children:g.jsx("strong",{children:L&&P.connected?"API conectada":L?P.error||"Conexión pendiente":"Proveedor pendiente de comprobar"})}),L&&!P.credential&&g.jsx("div",{className:"notice",role:"status",children:"El servidor sigue usando una versión anterior. Reinicia el Codespace para cargar la nueva conexión de IA."}),L&&P.credential&&g.jsxs("div",{className:"integration-note",role:"status",children:[g.jsx("strong",{children:P.credential.configured?P.credential.saved_in_app?"Clave guardada en la aplicación":"Secreto recibido por el servidor: "+P.credential.source:"El servidor todavía no recibe el secreto"}),g.jsx("p",{children:P.credential.configured?P.credential.valid_format?"La presencia del secreto no confirma que el proveedor lo acepte. Comprueba la API o prueba una respuesta.":"El valor contiene caracteres no válidos. Guarda solo la clave, sin comillas ni prefijos.":"Pega tu clave en el campo de arriba y pulsa Guardar clave y conectar."})]}),g.jsx("p",{className:"muted",children:"No se descarga ni ejecuta un modelo en tu PC. Los mensajes y el contexto que uses se envían al proveedor elegido. Sus límites y condiciones pueden cambiar; no se promete uso ilimitado ni acceso gratuito a GPT de OpenAI."}),g.jsxs("label",{children:["Modelo para todo el equipo",g.jsxs("select",{"aria-label":"Modelo compartido",value:"",onChange:I=>{I.target.value&&(l(D=>D.map(R=>({...R,model:I.target.value}))),p(null))},children:[g.jsx("option",{value:"",children:"Seleccionar un modelo del catálogo"}),(L?P.models:[]).map(I=>g.jsx("option",{children:I},I))]})]}),g.jsxs("details",{children:[g.jsx("summary",{children:"Ajustes avanzados del equipo"}),g.jsx("div",{className:"agent-settings",children:s.map(I=>g.jsxs("article",{children:[g.jsxs("h3",{children:[I.name,g.jsx("small",{children:I.role})]}),g.jsxs("label",{children:["Modelo de ",I.name,g.jsx("input",{"aria-label":"Modelo de "+I.name,value:I.model,maxLength:200,onChange:D=>{l(R=>R.map(B=>B.id===I.id?{...B,model:D.target.value}:B)),p(null)}})]}),g.jsxs("label",{children:["Instrucciones de ",I.name,g.jsx("textarea",{value:I.instructions,maxLength:6e3,onChange:D=>l(R=>R.map(B=>B.id===I.id?{...B,instructions:D.target.value}:B))})]})]},I.id))})]}),g.jsxs("div",{className:"api-config-row",children:[g.jsxs("button",{className:"button primary",onClick:()=>G("save"),children:[g.jsx(qh,{size:15}),"Guardar configuración"]}),g.jsxs("button",{className:"button secondary",onClick:()=>G("check"),children:[g.jsx(Ju,{size:15}),"Actualizar catálogo"]}),g.jsxs("button",{className:"button secondary",onClick:()=>G("test"),children:[g.jsx(OS,{size:15}),"Conectar ",_.name]})]}),h&&g.jsxs("div",{className:"probe-result",role:"status",children:[g.jsx("strong",{children:"Respuesta recibida del proveedor"}),g.jsx("p",{children:h.response}),g.jsxs("small",{children:[h.model," · ",h.latency_ms," ms"]})]}),g.jsx("p",{className:"muted",children:"Para volver a entrar, abre el mismo Codespace y el puerto 8765. No necesitas reinstalar. Los proveedores mantienen su infraestructura; puedes actualizar el catálogo y elegir nuevos modelos. Las correcciones guardadas aportan contexto, sin reentrenar el modelo."}),g.jsxs("label",{className:"checkbox",children:[g.jsx("input",{type:"checkbox",checked:r.reduced,onChange:I=>r.onReduced(I.target.checked)}),"Reducir movimiento"]})]})})}function Gh(r,e){return r===e||!!(r&&e&&r.daily_requests===e.daily_requests&&r.max_output_tokens===e.max_output_tokens&&r.concise===e.concise)}async function Os(r,e,i,s){const l=await ec("/api"+r,{method:i||(e?"POST":"GET"),headers:e instanceof FormData?{}:{"Content-Type":"application/json"},body:e instanceof FormData?e:e?JSON.stringify(e):void 0,signal:s});return $l(l)}function eR(r){const[e,i]=Me.useState(null),[s,l]=Me.useState(null),[c,f]=Me.useState(null),[h,p]=Me.useState(""),[m,v]=Me.useState(""),[y,S]=Me.useState(!1),[M,E]=Me.useState(""),[w,x]=Me.useState(""),[_,P]=Me.useState(0),[L,U]=Me.useState(""),[G,F]=Me.useState(null),[j,I]=Me.useState(""),D=Me.useRef(r);D.current=r;const R=Me.useRef(null),B=Me.useRef(new Map),J=!Gh(s,c),ae=y&&M===r.project,_e=h.trim()!==m,fe=(G==null?void 0:G.project)===r.project?G:null;Me.useEffect(()=>{const K=new AbortController;let ce=!0;return Os("/usage",void 0,void 0,K.signal).then(Se=>{ce&&(i(Se),f(Se.policy),l(Te=>Te||Se.policy))}).catch(Se=>{ce&&Se.name!=="AbortError"&&D.current.onError(Se.message)}),()=>{ce=!1,K.abort()}},[]),Me.useEffect(()=>{var Qe;const K=new AbortController,ce=r.project;let Se=!0;(Qe=R.current)==null||Qe.abort(),R.current=null,U(""),S(!1),x(""),E(ce),F(null),I("");const Te=B.current.get(ce);return p((Te==null?void 0:Te.draft)||""),v((Te==null?void 0:Te.saved)||""),ce&&Os("/projects/"+encodeURIComponent(ce)+"/memory",void 0,void 0,K.signal).then(Ie=>{if(!Se||D.current.project!==ce)return;const ke=Ie.summary||"",St=B.current.get(ce),qe=St&&St.draft.trim()!==St.saved?St.draft:ke;B.current.set(ce,{saved:ke,draft:qe}),p(qe),v(ke),S(!0)}).catch(Ie=>{Se&&D.current.project===ce&&Ie.name!=="AbortError"&&(x(Ie.message),D.current.onError(Ie.message))}),()=>{var Ie;Se=!1,K.abort(),(Ie=R.current)==null||Ie.abort(),R.current=null}},[r.project,_]);async function H(K,ce){if(R.current)return;const Se=new AbortController,Te=r.project;R.current=Se,U(K),r.onError("");const Qe=()=>!Se.signal.aborted&&R.current===Se&&D.current.project===Te;try{await ce(Se.signal,Qe)}catch(Ie){Ie.name!=="AbortError"&&Qe()&&D.current.onError(Ie.message)}finally{R.current===Se&&(R.current=null,U(""))}}async function ne(){await H("usage",async(K,ce)=>{const Se=await Os("/usage",void 0,void 0,K);ce()&&(i(Se),l(Te=>!Te||Gh(Te,c)?Se.policy:Te),f(Se.policy))})}async function Y(){if(!s||!J)return;const K=s;await H("policy",async(ce,Se)=>{const Te=await Os("/usage/policy",K,"PUT",ce);if(!Se())return;const Qe=Te.policy||Te;f(Qe),l(Ie=>Gh(Ie,K)?Qe:Ie),D.current.onNotice("Límites del estudio guardados.");try{const Ie=await Os("/usage",void 0,void 0,ce);Se()&&i(Ie)}catch(Ie){Se()&&Ie.name!=="AbortError"&&D.current.onNotice("Límites guardados. No se pudieron actualizar los contadores; pulsa Actualizar uso.")}})}function Ee(K){p(K),B.current.set(r.project,{saved:m,draft:K}),I("")}async function O(){if(!r.project||!ae||!_e)return;const K=r.project,ce=h;await H("memory",async(Se,Te)=>{const Qe=await Os("/projects/"+encodeURIComponent(K)+"/memory",{summary:ce},"PUT",Se);if(!Te())return;const Ie=typeof Qe.summary=="string"?Qe.summary:ce.trim();B.current.set(K,{saved:Ie,draft:Ie}),p(Ie),v(Ie),D.current.onNotice("Nota compartida guardada para este proyecto.")})}async function se(){if(!r.project||!ae)return;const K=r.project;I(""),await H("context",async(ce,Se)=>{const Te=await Os("/projects/"+encodeURIComponent(K)+"/context-draft",void 0,void 0,ce);if(Se()){if(typeof Te.draft!="string"||!Array.isArray(Te.sources)||Te.method!=="extractive")throw Error("No se pudo leer la propuesta de contexto. Vuelve a prepararla.");F({project:K,value:Te,text:Te.draft,added:!1}),D.current.onNotice("Contexto preparado con extractos locales. Revísalo antes de añadirlo; tu nota sigue igual.")}})}function Ae(){if(!fe||fe.added||!ae||R.current||!fe.text.trim())return;const K=h?h+`

`+fe.text:fe.text;if(K.length>6e3){I("La nota y el contexto suman "+K.length+" caracteres; el máximo es 6000. Tu nota no cambió. Recorta la vista previa o copia solo los fragmentos que necesites.");return}Ee(K),F({...fe,added:!0}),D.current.onNotice("Contexto añadido al borrador. Revisa la nota y pulsa Guardar nota para conservarlo.")}async function Ne(){const K=r.project;K&&await H("backup",async(ce,Se)=>{const Te=await ec("/api/projects/"+encodeURIComponent(K)+"/backup",{signal:ce});if(!Te.ok){await $l(Te);return}const Qe=await Te.blob();if(!Se())return;const Ie=URL.createObjectURL(Qe),ke=document.createElement("a");try{ke.href=Ie,ke.download="studio-de-anto-"+K+".zip",document.body.appendChild(ke),ke.click()}finally{ke.remove(),setTimeout(()=>URL.revokeObjectURL(Ie),1e3)}})}async function ee(K){if(!/\.zip$/i.test(K.name)){r.onError("Selecciona una copia de proyecto en formato ZIP.");return}if(K.size>25*1024*1024){r.onError("La copia ZIP puede ocupar hasta 25 MB.");return}await H("import",async(ce,Se)=>{const Te=new FormData;Te.append("file",K);const Qe=await Os("/projects/import",Te,void 0,ce);Se()&&(D.current.onImported(Qe),D.current.onNotice("Copia importada en un proyecto nuevo. Ya está seleccionado."))})}return g.jsxs("section",{className:"content-card settings-card studio-controls",children:[g.jsxs("div",{className:"section-title",children:[g.jsx("h2",{children:"Uso y continuidad del estudio"}),g.jsxs("button",{className:"button secondary",disabled:!!L,onClick:ne,children:[g.jsx(Ju,{size:15}),"Actualizar uso"]})]}),g.jsx("p",{className:"muted",children:"Estos contadores pertenecen a esta aplicación. La cuota y la facturación de Gemini o Groq se consultan en tu cuenta del proveedor."}),e&&g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"usage-stats",role:"status",children:[g.jsxs("div",{children:[g.jsx("strong",{children:e.attempted}),g.jsx("span",{children:"intentos de hoy UTC"}),g.jsx("small",{children:e.day})]}),g.jsxs("div",{children:[g.jsx("strong",{children:e.remaining}),g.jsx("span",{children:"intentos disponibles en el estudio"})]}),g.jsxs("div",{children:[g.jsx("strong",{children:e.total_tokens.toLocaleString("es")}),g.jsx("span",{children:"tokens informados por el proveedor"}),g.jsxs("small",{children:[e.input_tokens.toLocaleString("es")," entrada · ",e.output_tokens.toLocaleString("es")," salida"]})]})]}),e.unknown_attempts>0&&g.jsxs("p",{className:"caption",children:["Recuento de tokens parcial: ",e.unknown_attempts," intento(s) sin uso informado por el proveedor."]})]}),s&&g.jsxs("form",{className:"studio-form",onSubmit:K=>{K.preventDefault(),Y()},children:[g.jsxs("div",{className:"two-col",children:[g.jsxs("label",{children:["Máximo de intentos diarios UTC",g.jsx("input",{type:"number",min:1,max:1e4,step:1,required:!0,value:s.daily_requests,onChange:K=>l({...s,daily_requests:Number(K.target.value)})})]}),g.jsxs("label",{children:["Máximo de tokens por respuesta de chat",g.jsx("input",{type:"number",min:512,max:4096,step:1,required:!0,value:s.max_output_tokens,onChange:K=>l({...s,max_output_tokens:Number(K.target.value)})})]})]}),g.jsxs("label",{className:"checkbox",children:[g.jsx("input",{type:"checkbox",checked:s.concise,onChange:K=>l({...s,concise:K.target.checked})}),"Pedir respuestas concisas en el chat"]}),g.jsx("p",{className:"caption",role:"status",children:J?"Hay cambios de límites sin guardar.":"Límites guardados."}),g.jsxs("button",{className:"button secondary",disabled:!!L||!J,children:[g.jsx(C_,{size:15}),L==="policy"?"Guardando…":"Guardar límites"]})]}),g.jsx("div",{className:"studio-divider"}),g.jsxs("form",{className:"studio-form",onSubmit:K=>{K.preventDefault(),O()},children:[g.jsx("h3",{children:"Nota compartida del proyecto"}),g.jsx("p",{className:"muted",children:"Los agentes reciben esta nota como contexto. Guarda objetivos, decisiones o preferencias que quieras conservar."}),g.jsxs("label",{children:["Contexto para todo el equipo",g.jsx("textarea",{"aria-label":"Nota compartida del proyecto",value:M===r.project?h:"",maxLength:6e3,disabled:!ae||!!L,onChange:K=>Ee(K.target.value),placeholder:"Objetivo, decisiones y preferencias del proyecto…"})]}),g.jsx("p",{className:"caption",role:"status",children:r.project?w?"No se pudo cargar la nota. El borrador se conserva mientras sigas en Configuración.":ae?_e?"Nota con cambios sin guardar. El borrador se conserva al cambiar de proyecto en esta pantalla.":"Nota guardada para este proyecto.":"Cargando nota del proyecto…":"Selecciona un proyecto para usar su nota."}),w&&g.jsx("button",{type:"button",className:"button secondary",disabled:!!L,onClick:()=>{r.onError(""),P(K=>K+1)},children:"Volver a cargar nota"}),g.jsxs("div",{className:"studio-actions",children:[g.jsxs("span",{className:"caption",children:[M===r.project?h.length:0,"/6000 caracteres"]}),g.jsxs("button",{className:"button secondary",disabled:!r.project||!ae||!!L||!_e,children:[g.jsx(C_,{size:15}),L==="memory"?"Guardando…":"Guardar nota"]})]})]}),g.jsx("div",{className:"studio-divider"}),g.jsxs("div",{className:"studio-form",children:[g.jsx("h3",{children:"Preparar contexto desde la actividad"}),g.jsx("p",{className:"muted",children:"Reúne extractos de tus solicitudes, el estado de trabajos y los nombres de archivos de este proyecto. No llama a una IA. Revisa y ajusta la propuesta antes de añadirla a tu nota."}),g.jsxs("button",{type:"button",className:"button secondary",disabled:!r.project||!ae||!!L,onClick:se,children:[g.jsx(Ju,{size:15}),L==="context"?"Preparando contexto…":"Preparar contexto sin IA"]}),fe&&g.jsxs(g.Fragment,{children:[g.jsxs("label",{children:["Vista previa editable del contexto",g.jsx("textarea",{"aria-label":"Vista previa del contexto",value:fe.text,maxLength:6e3,disabled:!!L||!ae,onChange:K=>{F({...fe,text:K.target.value,added:!1}),I("")}})]}),g.jsxs("p",{className:"caption",children:[fe.text.length,"/6000 caracteres. La propuesta no se guarda automáticamente."]}),fe.value.omitted&&g.jsx("p",{className:"caption",children:"La propuesta incluye una selección de la actividad. Puede haber información que no aparezca aquí."}),g.jsxs("details",{className:"context-sources",children:[g.jsxs("summary",{children:["Ver fuentes (",fe.value.sources.length,")"]}),g.jsx("ol",{children:fe.value.sources.map((K,ce)=>g.jsxs("li",{children:[g.jsxs("strong",{children:[K.reference?K.reference+" ":"",K.kind==="message"?"Mensaje":K.kind==="run"?"Trabajo":"Archivo",K.name?" · "+K.name:K.agent?" · "+K.agent.toUpperCase():""]}),g.jsx("p",{children:K.excerpt}),g.jsx("small",{children:Number.isNaN(Date.parse(K.created))?K.created:new Date(K.created).toLocaleString("es-PE",{timeZone:"America/Lima"})})]},K.kind+":"+K.id+":"+ce))})]}),j&&g.jsx("p",{className:"chat-error",role:"alert",children:j}),g.jsx("button",{type:"button",className:"button secondary",disabled:!ae||!!L||fe.added||!fe.text.trim(),onClick:Ae,children:fe.added?"Añadido a mi borrador":"Añadir a mi borrador"})]})]}),g.jsx("div",{className:"studio-divider"}),g.jsx("h3",{children:"Copia del proyecto"}),g.jsx("p",{className:"muted",children:"Descarga una copia ZIP para conservar el proyecto y sus archivos. Las claves de API no se incluyen. Al importar, se crea un proyecto nuevo y se conservan los existentes."}),g.jsxs("div",{className:"studio-actions backup-actions",children:[g.jsxs("button",{className:"button secondary",disabled:!r.project||!!L,onClick:Ne,children:[g.jsx(ju,{size:15}),L==="backup"?"Preparando copia…":"Descargar copia ZIP"]}),g.jsxs("label",{className:"button secondary backup-upload "+(L?"disabled":""),children:[g.jsx(jv,{size:15}),L==="import"?"Importando…":"Importar como proyecto nuevo",g.jsx("input",{type:"file",accept:".zip,application/zip","aria-label":"Importar copia de proyecto",disabled:!!L,onChange:K=>{var Se;const ce=(Se=K.target.files)==null?void 0:Se[0];K.target.value="",ce&&ee(ce)}})]})]}),g.jsx("p",{className:"caption",children:"Copia ZIP de hasta 25 MB. Se validará su contenido antes de crear el proyecto."})]})}const zv=12e3;function Iv(){const r=window;return r.SpeechRecognition||r.webkitSpeechRecognition}function jh(r){return{"not-allowed":"Permite el micrófono en los permisos de este sitio y vuelve a pulsar Dictar. También puedes escribir tu mensaje.","service-not-allowed":"El navegador no permite su servicio de dictado. Puedes escribir el mensaje o probar un navegador compatible.","audio-capture":"No se encuentra un micrófono disponible. Revisa su conexión y los permisos del navegador.","no-speech":"No se detectó voz. Pulsa Dictar para volver a intentarlo o escribe tu mensaje.",network:"El servicio de dictado del navegador no respondió. Revisa la conexión o escribe tu mensaje.","language-not-supported":"Este navegador no admite dictado en español. Puedes escribir tu mensaje."}[r]||"No se pudo completar el dictado. Tu texto se conserva; puedes escribir o intentarlo de nuevo."}function tR(r){const[e,i]=Me.useState("idle"),[s,l]=Me.useState(""),[c,f]=Me.useState(""),h=Me.useRef(r);h.current=r;const p=Me.useRef(null),m=!!Iv(),v=window.isSecureContext!==!1;function y(){const w=p.current;if(p.current=null,!w)return;clearTimeout(w.timer);const x=w.recognition;x.onstart=null,x.onresult=null,x.onerror=null,x.onend=null;try{x.abort()}catch{}}Me.useEffect(()=>(y(),i("idle"),l(""),f(""),y),[r.contextKey,r.disabled]);function S(){if(r.disabled||p.current)return;const w=Iv();if(!w||!v)return;let x;try{x=new w}catch{f(jh(""));return}x.lang="es-PE",x.continuous=!0,x.interimResults=!0,x.maxAlternatives=1;const _={recognition:x,contextKey:r.contextKey,finalized:new Set};p.current=_,f(""),l(""),i("starting");const P=()=>p.current===_&&h.current.contextKey===_.contextKey&&!h.current.disabled,L=()=>{p.current===_&&(y(),i("idle"),l(""))};x.onstart=()=>{P()?i("listening"):L()},x.onend=L,x.onerror=U=>{P()&&(U.error!=="aborted"&&f(jh(U.error)),L())},x.onresult=U=>{var j,I;if(!P())return;const G=[],F=[];for(let D=U.resultIndex;D<U.results.length;D++){const R=U.results[D],B=(I=(j=R[0])==null?void 0:j.transcript)==null?void 0:I.trim();B&&(R.isFinal?_.finalized.has(D)||(_.finalized.add(D),G.push(B)):F.push(B))}if(l(F.join(" ")),G.length){const D=h.current.value,R=D&&!/\s$/.test(D)?" ":"",B=D+R+G.join(" ");h.current={...h.current,value:B.slice(0,zv)},h.current.onChange(h.current.value),B.length>zv&&(f("El mensaje llegó al máximo de 12000 caracteres. Revisa el texto antes de enviarlo."),L())}};try{x.start()}catch(U){f(jh(U instanceof DOMException&&U.name==="NotAllowedError"?"not-allowed":"")),L()}}function M(){const w=p.current;if(w){i("stopping");try{w.recognition.stop()}catch{y(),i("idle"),l("");return}p.current===w&&(w.timer=setTimeout(()=>{p.current===w&&(y(),i("idle"),l(""))},3e3))}}const E=e!=="idle";return g.jsxs("div",{className:"voice-input",children:[g.jsxs("div",{className:"voice-actions",children:[g.jsxs("button",{type:"button",className:"button secondary","aria-label":E?"Detener dictado":"Dictar mensaje","aria-pressed":E,disabled:!!r.disabled||!m||!v||e==="stopping",onClick:E?M:S,children:[E?g.jsx($u,{size:14}):g.jsx(XS,{size:15}),g.jsx("span",{children:e==="stopping"?"Terminando…":E?"Detener dictado":"Dictar"})]}),g.jsx("span",{className:"voice-status",role:"status",children:e==="starting"?"Activando micrófono…":e==="listening"?"Escuchando en español…":e==="stopping"?"Terminando dictado…":""})]}),m?v?g.jsx("p",{className:"voice-privacy",children:"El navegador puede procesar el audio en su servicio de voz. Revisa el texto antes de pulsar Enviar; el dictado no lo envía automáticamente."}):g.jsx("p",{className:"voice-unavailable",children:"Abre la aplicación por HTTPS para usar el micrófono. Puedes seguir escribiendo."}):g.jsx("p",{className:"voice-unavailable",children:"El dictado no está disponible en este navegador. Puedes escribir tu mensaje."}),s&&g.jsx("p",{className:"voice-interim","aria-label":"Dictado provisional",children:s}),c&&g.jsx("p",{className:"chat-error",role:"alert",children:c})]})}let Yn=null;function nR(r){let e=r.replace(/\s+/g," ").trim();const i=[];for(;e.length>240;){const s=e.lastIndexOf(" ",240),l=s>0?s:240;i.push(e.slice(0,l)),e=e.slice(l).trimStart()}return e&&i.push(e),i}function iR(r){const[e,i]=Me.useState(!1),[s,l]=Me.useState(""),c=Me.useRef(Symbol("response-voice")),f=typeof window.speechSynthesis<"u"&&typeof window.SpeechSynthesisUtterance<"u";Me.useEffect(()=>(i(!1),l(""),()=>{(Yn==null?void 0:Yn.owner)===c.current&&Yn.cancel(!1)}),[r.contextKey,r.text]);function h(){if(!f||!r.text.trim())return;if((Yn==null?void 0:Yn.owner)===c.current){Yn.cancel();return}Yn==null||Yn.cancel();const p=window.speechSynthesis,m=nR(r.text);let v=null;const y={owner:c.current,cancel:(M=!0)=>{Yn===y&&(Yn=null,v&&(v.onend=null,v.onerror=null),p.cancel(),M&&i(!1))}};Yn=y,i(!0),l("");function S(M){if(Yn!==y)return;if(M>=m.length){Yn=null,i(!1);return}v=new window.SpeechSynthesisUtterance(m[M]),v.lang="es-PE";const E=p.getVoices(),w=E.find(x=>x.lang.toLowerCase()==="es-pe")||E.find(x=>x.lang.toLowerCase().startsWith("es"));w&&(v.voice=w),v.onend=()=>S(M+1),v.onerror=x=>{Yn===y&&(y.cancel(),x.error!=="interrupted"&&x.error!=="canceled"&&l("El navegador no pudo leer esta respuesta. Puedes copiarla o probar otra voz del sistema."))};try{p.speak(v)}catch{y.cancel(),l("No se pudo iniciar la lectura en este navegador. La respuesta sigue disponible como texto.")}}try{p.cancel(),S(0)}catch{y.cancel(),l("No se pudo iniciar la lectura en este navegador.")}}return g.jsxs("span",{className:"speech-control",children:[g.jsxs("button",{type:"button",className:"retry speech-button","aria-label":e?"Detener lectura":"Escuchar respuesta","aria-pressed":e,disabled:!f||!r.text.trim(),onClick:h,title:f?"Lee esta respuesta con las voces de tu navegador":"Este navegador no ofrece lectura en voz alta",children:[e?g.jsx($u,{size:12}):g.jsx(lM,{size:13}),g.jsx("span",{children:e?"Detener lectura":"Escuchar"})]}),!f&&g.jsx("small",{className:"voice-unavailable",children:"Lectura de voz no disponible."}),s&&g.jsx("small",{className:"chat-error",role:"alert",children:s})]})}async function _n(r,e,i,s){const l=await ec("/api"+r,{method:i||(e?"POST":"GET"),headers:e instanceof FormData?{}:{"Content-Type":"application/json"},body:e instanceof FormData?e:e?JSON.stringify(e):void 0,signal:s});return $l(l)}const Bv=[["office","Oficina",vS],["projects","Proyectos",Gv],["tasks","Tareas",Vu],["data","Datos",wS],["deliverables","Entregables",Wh],["settings","Configuración",iM]],Fv=".csv,.xlsx,.pdf,.jpg,.jpeg,.png,.webp",sa=r=>r.kind||(/\.(pdf)$/i.test(r.name)?"document":/\.(jpe?g|png|webp)$/i.test(r.name)?"image":"table"),Vh=(r=0)=>r>=1024*1024?(r/(1024*1024)).toFixed(1)+" MB":Math.ceil(r/1024)+" KB",kh=(r,e=!1)=>"/api/files/"+encodeURIComponent(r)+"/content"+(e?"?download=true":""),Xh=(r,e)=>{const i=s=>s.normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"").toLocaleLowerCase();return i(r).includes(i(e.trim()))};function aR(){var lc;const[r,e]=Me.useState("office"),[i,s]=Me.useState([]),[l,c]=Me.useState(""),[f,h]=Me.useState([]),[p,m]=Me.useState("anto"),[v,y]=Me.useState(!1),[S,M]=Me.useState("http://127.0.0.1:11434"),[E,w]=Me.useState("gemini"),[x,_]=Me.useState("http://127.0.0.1:1234/v1"),[P,L]=Me.useState({connected:!1,models:[]}),[U,G]=Me.useState({}),[F,j]=Me.useState([]),[I,D]=Me.useState([]),[R,B]=Me.useState([]),[J,ae]=Me.useState(""),[_e,fe]=Me.useState(null),[H,ne]=Me.useState([]),[Y,Ee]=Me.useState([]),[O,se]=Me.useState(""),[Ae,Ne]=Me.useState(""),[ee,K]=Me.useState(!1),[ce,Se]=Me.useState(!1),[Te,Qe]=Me.useState(!1),[Ie,ke]=Me.useState(""),[St,qe]=Me.useState(""),[X,ln]=Me.useState(!0),[gt,lt]=Me.useState(!0),[Je,Pt]=Me.useState(1),[Ze,z]=Me.useState(0),[A,k]=Me.useState(matchMedia("(prefers-reduced-motion: reduce)").matches),[Q,me]=Me.useState(""),[pe,Oe]=Me.useState(""),[Le,q]=Me.useState(""),[Ye,we]=Me.useState(""),[Xe,et]=Me.useState("sum"),[$e,ze]=Me.useState(!1),[ht,at]=Me.useState(""),[zt,Z]=Me.useState(""),[Be,ve]=Me.useState(""),[ye,He]=Me.useState(""),[Fe,ct]=Me.useState("Unidades"),[It,cn]=Me.useState("bar"),[At,Mn]=Me.useState(""),[un,bn]=Me.useState(","),[An,Zn]=Me.useState("utf-8-sig"),[zi,Aa]=Me.useState([]),[Ra,yi]=Me.useState(null),[da,Si]=Me.useState(null),[Mi,ui]=Me.useState(""),[Ca,Ki]=Me.useState({}),[kt,Gs]=Me.useState(!1),[Rr,bi]=Me.useState("waiting"),[N,$]=Me.useState(0),[ue,he]=Me.useState([]),[ie,Ue]=Me.useState(!1),[Pe,Ge]=Me.useState(!1),[We,ot]=Me.useState(!1),[st,tt]=Me.useState(""),[xt,Bt]=Me.useState(""),[nn,Rt]=Me.useState(""),[Ct,nt]=Me.useState(null),[an,Lt]=Me.useState(""),[hn,Qi]=Me.useState(!1),Ht=Me.useRef(null),Kn=Me.useRef(null),Gt=Me.useRef(null),Mt=Me.useRef(0),pn=Me.useRef(0),fn=Me.useRef(!1),Rn=Me.useRef(0),Bn=Me.useRef(0),si=Me.useRef(null),Qn=Me.useRef({project:l,agent:p});Qn.current={project:l,agent:p};const Fo=Me.useRef(null),wt=f.find(T=>T.id===p),ns=i.find(T=>T.id===l),Cr=Y[Y.length-1],wr=(Cr==null?void 0:Cr.role)==="assistant"&&Cr.status==="complete",Nn=_e&&"columns"in _e?_e:null,Fn=_e&&"name"in _e?_e:null,Ji=R.filter(T=>sa(T)==="table"),wa=R.filter(T=>sa(T)!=="table"),Dr=i.filter(T=>Xh(T.name,st)),js=R.filter(T=>Xh(T.name,xt)),Nr=H.filter(T=>Xh(T.name,nn)),Ii=Ji.some(T=>T.id===J)?J:"",fi=U,Ur=P.provider==="groq"?"Groq":"Gemini";function Da(T,xe=!1){L(Ce=>({...T,inference_verified:!!T.inference_verified||!!(!xe&&Ce.inference_verified&&T.connected&&Ce.provider===T.provider&&Ce.endpoint===T.endpoint)})),y(T.connected)}function Bi(T){h(T.agents),w(T.provider),M(T.ollama_url),_(T.openai_url)}function Lr(T=!1){var Ce,Ve;pn.current++,(Ce=Kn.current)==null||Ce.abort(),Kn.current=null;const xe=fn.current;(Ve=Ht.current)==null||Ve.abort(),Ht.current=null,fn.current=!1,Se(!1),Ee(rt=>rt.map(mt=>mt.status==="streaming"?{...mt,status:"cancelled",persisted:!1}:mt)),T&&xe&&qe("Conversación cancelada. La respuesta parcial no se guarda como completada.")}function Vs(T,xe){var Ce;Qn.current.project===T&&Qn.current.agent===xe||(Mt.current++,Lr(!0),Qn.current={project:T,agent:xe},Bn.current++,(Ce=si.current)==null||Ce.abort(),he([]),Ue(!1),l!==T&&(B([]),ae(""),fe(null),D([]),ne([])),Ee([]),Aa([]),yi(null),Si(null),ui(""),Qe(!0),c(T),m(xe))}function is(T){Vs(T,Qn.current.agent)}function as(T){Vs(Qn.current.project,T)}async function Or(T){const xe=an.trim();if(!(!xe||hn)){Qi(!0),ke("");try{const Ce=await _n("/projects/"+encodeURIComponent(T),{name:xe},"PUT");s(Ve=>Ve.map(rt=>rt.id===Ce.id?Ce:rt)),nt(null),qe("Nombre del proyecto actualizado. Sus archivos y conversaciones se conservan.")}catch(Ce){ke(Ce.message)}finally{Qi(!1)}}}async function ac(T){try{await navigator.clipboard.writeText(T),qe("Respuesta copiada.")}catch{ke("El navegador no permitió copiar. Selecciona el texto de la respuesta para copiarlo.")}}function Jn(){const T=[...Y].reverse().find(Ve=>Ve.role==="user");if(!T)return;se(T.content),ke("");const xe=T.attachments||[],Ce=xe.map(Ve=>R.find(rt=>rt.id===Ve.id)).filter(Ve=>!!Ve);if(he([]),Ce.length!==xe.length){qe("Texto recuperado. Algunos adjuntos ya no están en la biblioteca; vuelve a elegir los archivos antes de enviar.");return}if(Ce.length>3||Ce.reduce((Ve,rt)=>Ve+(rt.size||0),0)>12*1024*1024){qe("Texto recuperado. Elige hasta 3 adjuntos que sumen como máximo 12 MB antes de enviar.");return}if(Ce.length&&E!=="gemini"){qe("Texto recuperado. Selecciona Gemini y vuelve a elegir los adjuntos antes de enviar.");return}he(Ce.map(Ve=>({...Ve,kind:sa(Ve)}))),qe("Mensaje recuperado. Revisa el texto y los adjuntos y pulsa Enviar cuando esté listo.")}function Na(){var en;const T=Y.filter(vn=>vn.content.trim());if(!T.length)return;const xe=new Date,Ce=["# Conversación · "+((ns==null?void 0:ns.name)||"Proyecto"),"Agente: "+((wt==null?void 0:wt.name)||p),"Exportada: "+xe.toLocaleString("es-PE"),"Copia del texto visible. Los originales adjuntos se conservan en el proyecto."];for(const vn of T)Ce.push("## "+(vn.role==="user"?"Tú":(wt==null?void 0:wt.name)||"Agente")+(vn.status&&vn.status!=="complete"?" · respuesta "+(vn.status==="cancelled"?"cancelada":vn.status==="error"?"incompleta":"en curso"):""),vn.content),(en=vn.attachments)!=null&&en.length&&Ce.push("Adjuntos: "+vn.attachments.map(rs=>rs.name).join(", "));const Ve=new Blob([Ce.join(`

`)+`
`],{type:"text/markdown;charset=utf-8"}),rt=URL.createObjectURL(Ve),mt=document.createElement("a");mt.href=rt,mt.download="conversacion-"+p+"-"+xe.toISOString().slice(0,10)+".md",document.body.append(mt),mt.click(),mt.remove(),setTimeout(()=>URL.revokeObjectURL(rt),1e3),qe("Conversación descargada en Markdown.")}async function ri(T){const xe=Mt.current;ke(""),K(!0);try{await T()}catch(Ce){Ce.name!=="AbortError"&&xe===Mt.current&&ke(Ce.message)}finally{K(!1)}}async function di(T=l){var Ve;if(!T)return;const xe=++Rn.current;(Ve=Gt.current)==null||Ve.abort();const Ce=new AbortController;Gt.current=Ce;try{const[rt,mt,en]=await Promise.all([_n("/runs?project="+T,void 0,void 0,Ce.signal),_n("/files?project="+T,void 0,void 0,Ce.signal),_n("/artifacts?project="+T,void 0,void 0,Ce.signal)]),vn=await Promise.all(rt.map(rs=>_n("/runs/"+rs.id,void 0,void 0,Ce.signal)));if(Ce.signal.aborted||xe!==Rn.current||Qn.current.project!==T)return;D(vn),B(mt),ne(en)}catch(rt){if(rt.name!=="AbortError")throw rt}}async function sc(){if(!kt){Gs(!0),ke("");try{const T=await _n("/connect",{provider:E,agent:p});Bi(T.settings),Da(T.status),qe("Listo. Ya puedes conversar con tu equipo.")}catch(T){const xe=T.message;ke(xe),L(Ce=>({...Ce,inference_verified:!1,error:xe}))}finally{Gs(!1)}}}async function Pr(){const T=await _n("/models");Da(T)}Me.useEffect(()=>{let T=!0;return K(!0),(async()=>{var xe;try{const[Ce,Ve]=await Promise.all([_n("/projects"),_n("/settings")]);if(!T)return;s(Ce),Bi(Ve),is(((xe=Ce[0])==null?void 0:xe.id)||""),await Pr()}catch(Ce){T&&ke(Ce.message)}finally{T&&K(!1)}})(),()=>{T=!1}},[]),Me.useEffect(()=>{if(!l)return;let T=!0;ae(""),fe(null),j([]),G({}),Ki({}),Oe(""),ri(()=>di(l));const xe=new EventSource("/api/events?project="+l);xe.onmessage=Ve=>{if(!(!T||Qn.current.project!==l))try{const rt=JSON.parse(Ve.data),mt=JSON.parse(rt.payload);rt.agent&&(mt.agent_status||mt.status)&&G(en=>({...en,[rt.agent]:mt.agent_status||mt.status})),rt.kind==="task"&&rt.run&&mt.logical_id&&mt.status&&Ki(en=>({...en,[rt.run+":"+mt.logical_id]:mt.status})),j(en=>[...en,rt].slice(-100)),["run","file","plan"].includes(rt.kind)&&di(l).catch(en=>{T&&ke(en.message)})}catch{ke("No se pudo interpretar un evento del servidor.")}};const Ce=setInterval(()=>Pr().catch(()=>y(!1)),15e3);return()=>{var Ve;T=!1,xe.close(),clearInterval(Ce),(Ve=Gt.current)==null||Ve.abort()}},[l]),Me.useEffect(()=>{var Ve;if(!l)return;const T=Mt.current,xe=new AbortController;(Ve=Kn.current)==null||Ve.abort(),Kn.current=xe,Qe(!0);const Ce="?project="+encodeURIComponent(l)+"&agent="+encodeURIComponent(p);return Promise.all([_n("/messages"+Ce,void 0,void 0,xe.signal),_n("/feedback"+Ce,void 0,void 0,xe.signal)]).then(([rt,mt])=>{xe.signal.aborted||T!==Mt.current||fn.current||(Ee(rt.map(en=>({...en,key:en.id,persisted:!0,status:"complete"}))),Aa(mt))}).catch(rt=>{rt.name!=="AbortError"&&T===Mt.current&&ke(rt.message)}).finally(()=>{!xe.signal.aborted&&T===Mt.current&&Qe(!1)}),()=>xe.abort()},[l,p]),Me.useEffect(()=>{if(!ce)return;const T=Date.now();$(0);const xe=setInterval(()=>$(Math.floor((Date.now()-T)/1e3)),1e3);return()=>clearInterval(xe)},[ce]),Me.useEffect(()=>{var T;(T=Fo.current)==null||T.scrollIntoView({behavior:A?"instant":"smooth",block:"nearest"})},[Y]),Me.useEffect(()=>()=>{var T,xe,Ce,Ve;(T=Ht.current)==null||T.abort(),(xe=Kn.current)==null||xe.abort(),(Ce=Gt.current)==null||Ce.abort(),(Ve=si.current)==null||Ve.abort()},[]);async function ks(T){var rt;const xe=Qn.current.project,Ce=++Bn.current,Ve=await _n("/files/"+encodeURIComponent(T)+"/preview");Qn.current.project!==xe||Ce!==Bn.current||(ae(T),fe(Ve),Mn("sheets"in Ve&&((rt=Ve.sheets)==null?void 0:rt[0])||""),q(""),we(""),at(""),Z(""),ve(""),He(""),ze(!1))}function ss(T){return E!=="gemini"?(ke("Para leer PDF o imágenes, elige Gemini en Configuración."),!1):ue.some(xe=>xe.id===T.id)?!0:ue.length>=3?(ke("Puedes adjuntar hasta 3 archivos por mensaje."),!1):ue.reduce((xe,Ce)=>xe+(Ce.size||0),0)+(T.size||0)>12*1024*1024?(ke("Los adjuntos de un mensaje pueden sumar hasta 12 MB. El archivo permanece en tu biblioteca."),!1):(he(xe=>[...xe,T]),!0)}function Xs(T){ss({...T,kind:sa(T)})&&(e("office"),ln(!0),Ue(!1),qe("Archivo adjunto al próximo mensaje. Escribe qué quieres consultar; se enviará a Gemini cuando pulses Enviar."))}async function zr(T,xe=!1){if(Pe||!l)return;if(!/\.(csv|xlsx|pdf|jpe?g|png|webp)$/i.test(T.name)){ke("Usa CSV, XLSX, PDF, JPG, PNG o WebP.");return}if(T.size>20*1024*1024){ke("El archivo supera el límite de 20 MB.");return}const Ce=l,Ve=Mt.current,rt=new AbortController;si.current=rt,Ge(!0),ke("");try{const mt=new FormData;mt.append("project",Ce),mt.append("file",T);const en=await _n("/files",mt,void 0,rt.signal);if(rt.signal.aborted||Qn.current.project!==Ce||Ve!==Mt.current||(await di(Ce),rt.signal.aborted||Ve!==Mt.current))return;const vn=en.kind||sa({id:en.id,name:T.name});if(xe&&vn!=="table")Xs({id:en.id,name:T.name,kind:vn,size:T.size,mime:T.type});else{if(await ks(en.id),rt.signal.aborted||Ve!==Mt.current)return;e("data"),qe(vn==="table"?"Archivo original conservado. Revisa hoja, columnas y valores faltantes.":"Archivo conservado. Puedes descargar el original o adjuntarlo a una consulta con Gemini.")}}catch(mt){mt.name!=="AbortError"&&Ve===Mt.current&&ke(mt.message)}finally{si.current===rt&&(si.current=null,Ge(!1))}}function of(){var Ve;const T=O.trim()||((Ve=[...Y].reverse().find(rt=>rt.role==="user"))==null?void 0:Ve.content)||"";if(!T.trim()){qe("Escribe un objetivo o envía primero un mensaje para preparar una tarea.");return}Ne(T);const xe=Ji.find(rt=>T.toLocaleLowerCase().includes(rt.name.toLocaleLowerCase())),Ce=(xe==null?void 0:xe.id)||Ii||"";Ce!==J&&(Bn.current++,fe(null),ae(Ce)),e("tasks"),qe("Objetivo preparado. Elige una tabla si corresponde y revisa el plan antes de aprobarlo.")}async function Ho(T=O,xe=!0){var fc,dc;if(T=T.trim(),!T||!l)return;if(kt){qe("Estoy conectando tu equipo. Tu mensaje permanece escrito; envíalo cuando termine.");return}if(Pe){qe("Espera a que termine de subir el archivo antes de enviar tu mensaje.");return}if(fn.current){qe("La respuesta sigue en curso. Tu nuevo mensaje permanece escrito; envíalo cuando termine o pulsa Detener.");return}if(Te){qe("Espera a que termine de cargar tu conversación.");return}if(!((fc=f.find(mn=>mn.id===p))!=null&&fc.model)){ke("Selecciona un modelo para este agente en Configuración antes de conversar.");return}const Ce=xe?[...ue]:[];if(Ce.length&&E!=="gemini"){ke("Para enviar PDF o imágenes, elige Gemini o retira los adjuntos.");return}if(Ce.length>3||Ce.reduce((mn,Ei)=>mn+(Ei.size||0),0)>12*1024*1024){ke("Selecciona hasta 3 adjuntos que sumen como máximo 12 MB.");return}bi("waiting"),qe(""),(dc=Kn.current)==null||dc.abort(),se(""),ke(""),Se(!0),fn.current=!0;const Ve=++pn.current,rt=Mt.current,mt=()=>Ve===pn.current&&rt===Mt.current,en=crypto.randomUUID(),vn=crypto.randomUUID(),rs=new AbortController;Ht.current=rs;const jo=f.find(mn=>mn.id===p),cc={project:l,agent:p,content:T,run:pe||null,attachments:Ce.map(mn=>mn.id)};Ee(mn=>[...mn,{id:en,key:en,role:"user",content:T,attachments:Ce,status:"complete"},{id:vn,key:vn,role:"assistant",content:"",model:jo==null?void 0:jo.model,provider:E,status:"streaming",persisted:!1}]);function Vo(mn){mt()&&Ee(Ei=>Ei.map(Ti=>Ti.key===vn?mn(Ti):Ti))}let ko=!1,uc=!1;try{const mn=await ec("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(cc),signal:rs.signal});if(!mn.ok)throw await $l(mn),Error("No se pudo iniciar la conversación");if(!mn.body)throw Error("El servidor no abrió el flujo de respuesta.");const Ei=mn.body.getReader(),Ti=new TextDecoder;let Ws="";for(;;){const{done:Xo,value:Ys}=await Ei.read();if(Xo)break;if(!mt()){await Ei.cancel();return}Ws+=Ti.decode(Ys,{stream:!0});let qo;for(;(qo=Ws.indexOf(`

`))>=0;){const Wo=Ws.slice(0,qo);if(Ws=Ws.slice(qo+2),!Wo.startsWith("data: "))continue;const $n=JSON.parse(Wo.slice(6));if($n.error)throw Error($n.error);if(($n.status==="waiting"||$n.status==="generating")&&mt()&&bi($n.status),typeof $n.token=="string"&&$n.token&&(uc=!0,mt()&&bi("generating"),Vo(Fi=>({...Fi,content:Fi.content+$n.token}))),$n.done){if(!uc)throw Error("El proveedor terminó sin texto.");ko=!0,Vo(Fi=>({...Fi,id:$n.message_id||Fi.id,persisted:!!$n.message_id,status:"complete",model:$n.model||Fi.model,provider:$n.provider||Fi.provider})),mt()&&he(Fi=>Fi.filter(hc=>!Ce.some(pc=>pc.id===hc.id)))}}}if(!ko)throw Error("La conexión terminó antes de confirmar la respuesta. El texto parcial no está guardado como respuesta completa.")}catch(mn){if(mt()){const Ei=mn.name==="AbortError";Ei||L(Ti=>({...Ti,inference_verified:!1,error:mn.message})),Vo(Ti=>({...Ti,status:Ei?"cancelled":"error",persisted:!1,error:Ei?void 0:mn.message})),ko||se(Ti=>Ti||T),Ei?qe("Conversación cancelada. La respuesta parcial no se guarda como completada."):ke(mn.message)}}finally{mt()&&(Se(!1),fn.current=!1,Ht.current=null)}}async function rc(T,xe){if(!T.persisted||T.status!=="complete")return;const Ce=Mt.current;yi(T.id),ke("");try{const Ve=await _n("/feedback",{message_id:T.id,rating:xe,...xe==="correction"?{correction:Mi.trim()}:{}});if(Ce!==Mt.current)return;Aa(rt=>[Ve,...rt.filter(mt=>mt.message_id!==T.id)]),Si(null),ui(""),qe(xe==="correction"?"Corrección guardada para futuras conversaciones de este agente. Mejora contexto, no reentrena el modelo.":"Valoración guardada.")}catch(Ve){Ce===Mt.current&&ke(Ve.message)}finally{Ce===Mt.current&&yi(null)}}async function Go(T){const xe=Mt.current;yi(T.message_id);try{if(await _n("/feedback/"+T.id,void 0,"DELETE"),xe!==Mt.current)return;Aa(Ce=>Ce.filter(Ve=>Ve.id!==T.id)),qe("Corrección eliminada de la memoria de este agente.")}catch(Ce){xe===Mt.current&&ke(Ce.message)}finally{xe===Mt.current&&yi(null)}}function lf(T,xe){var Ve,rt;const Ce=(rt=(Ve=T.tasks)==null?void 0:Ve.find(mt=>{try{return JSON.parse(mt.payload).id===xe}catch{return!1}}))==null?void 0:rt.status;return Ce&&["Completado","Fallido","Cancelado","Interrumpido"].includes(Ce)?Ce:Ca[T.id+":"+xe]||Ce||"Estado no disponible"}async function oc(T=!1){const xe=l;await ri(async()=>{let Ce={project:xe,request:Ae||"Analizar las operaciones seleccionadas",file:Ii||null};T&&(Ce.analysis={metric:$e?"ingresos":Le,group_by:Ye?[Ye]:[],aggregation:Xe,derived:$e?{name:"ingresos",left:ht,right:zt,op:"multiply"}:null,filters:Be?[{column:Be,op:"eq",value:ye}]:[],sort:"descending",chart:It,title:Ae||"Análisis de datos",unit:Fe});const Ve=await _n(T?"/tools/plan":"/plans",Ce);Qn.current.project===xe&&(Oe(Ve.id),await di(xe),e("tasks"),qe("Plan preparado. Revisa los argumentos antes de aprobar."))})}const qs=g.jsxs(g.Fragment,{children:[g.jsx("option",{value:"",children:"Seleccionar columna"}),Nn==null?void 0:Nn.columns.map(T=>g.jsx("option",{children:T.name},T.name))]});return g.jsxs("div",{className:"app",children:[g.jsxs("aside",{className:"sidebar",children:[g.jsx("a",{className:"brandmark",href:"#",onClick:()=>e("office"),"aria-label":"Oficina",children:g.jsx(sh,{size:27})}),g.jsx("div",{className:"nav-items",children:Bv.map(([T,xe,Ce])=>g.jsxs("button",{title:xe,className:r===T?"nav active":"nav",onClick:()=>e(T),children:[g.jsx(Ce,{size:21}),g.jsx("span",{children:xe})]},T))}),g.jsx("button",{className:"sidebar-bottom",onClick:()=>e("settings"),title:"Configuración",children:"AN"})]}),g.jsxs("div",{className:"workspace",children:[g.jsxs("header",{className:"topbar",children:[g.jsxs("div",{className:"wordmark",children:["STUDIO ",g.jsx("span",{children:"DE"})," ANTO",g.jsx("small",{children:"UN ESPACIO PARA CREAR EN EQUIPO"})]}),g.jsx("div",{className:"header-divider"}),g.jsx("select",{className:"project-select",value:l,onChange:T=>is(T.target.value),"aria-label":"Proyecto activo",children:i.map(T=>g.jsx("option",{value:T.id,children:T.name},T.id))}),g.jsx("span",{className:"local-tag",children:"ESTUDIO"}),g.jsxs("div",{className:"top-right",children:[g.jsxs("button",{className:"connection "+(P.inference_verified?"online":""),disabled:kt,onClick:()=>P.inference_verified?e("settings"):sc(),children:[g.jsx("i",{}),kt?"Conectando…":P.inference_verified?Ur+" · listo":"Conectar "+Ur]}),g.jsx("span",{className:"avatar small",children:"AN"})]})]}),g.jsxs("main",{children:[Ie&&g.jsxs("div",{role:"alert",className:"alert",children:[g.jsx(uM,{size:17}),g.jsx("span",{children:Ie}),g.jsx("button",{onClick:()=>ke(""),"aria-label":"Cerrar error",children:g.jsx(Bl,{size:16})})]}),St&&g.jsxs("div",{role:"status",className:"notice",children:[g.jsx(RS,{size:16}),St,g.jsx("button",{onClick:()=>qe(""),"aria-label":"Cerrar aviso",children:g.jsx(Bl,{size:15})})]}),g.jsxs("div",{className:"page-heading",children:[g.jsxs("div",{children:[g.jsx("div",{className:"eyebrow",children:"TU EQUIPO, EN UN MISMO LUGAR"}),g.jsxs("h1",{children:[(lc=Bv.find(T=>T[0]===r))==null?void 0:lc[1],g.jsx("span",{className:"heading-dot"})]}),g.jsx("p",{children:r==="office"?"Las buenas ideas se construyen juntos. Dale vida a la próxima.":r==="data"?"De los archivos a la evidencia. Tú eliges qué calcular.":r==="tasks"?"Un objetivo compartido, pasos claros y resultados verificables.":r==="settings"?"Tus modelos, tus datos y tu equipo en el entorno que elijas.":r==="projects"?"Un espacio propio para cada idea.":"El trabajo de tu equipo, listo para llevar."})]}),g.jsxs("div",{className:"heading-actions",children:[g.jsxs("button",{className:"button secondary",onClick:()=>{lt(!gt),e("office")},children:[g.jsx(E_,{size:16}),"Actividad"]}),g.jsxs("button",{className:"button primary",onClick:()=>e("projects"),children:[g.jsx(gu,{size:17}),"Nuevo proyecto"]})]})]}),r==="office"&&g.jsxs("div",{className:"office-layout "+(X?"":"no-panel"),children:[g.jsxs("section",{className:"office-card",children:[g.jsxs("div",{className:"office-bar",children:[g.jsxs("div",{children:[g.jsx("span",{className:"live-dot"}),"EL ESTUDIO ",g.jsx("span",{className:"subtle",children:"/"}),g.jsx("span",{className:"office-name",children:ns==null?void 0:ns.name})]}),g.jsxs("span",{className:"office-badge",children:["6 agentes · ",Object.values(fi).filter(T=>T==="En ejecución").length," trabajando"]}),g.jsx("button",{className:"icon-button",onClick:()=>ln(!X),title:"Mostrar u ocultar conversación",children:g.jsx(KS,{size:18})})]}),g.jsxs("div",{className:"scene-wrap",children:[f.length===6&&g.jsx(J2,{agents:f,selected:p,onSelect:T=>{as(T),ln(!0)},states:fi,reduced:A,zoom:Je,reset:Ze}),g.jsxs("div",{className:"scene-caption",children:[g.jsx("span",{className:"scene-caption-icon",children:g.jsx(ch,{size:16})}),g.jsxs("div",{children:["Espacio para grandes ideas",g.jsx("small",{children:"Selecciona un agente para empezar a colaborar"})]})]}),g.jsxs("div",{className:"scene-controls",children:[g.jsx("button",{title:"Alejar",onClick:()=>Pt(Math.max(.6,Je-.1)),children:g.jsx(R_,{size:15})}),g.jsxs("span",{children:[Math.round(Je*100),"%"]}),g.jsx("button",{title:"Acercar",onClick:()=>Pt(Math.min(1.8,Je+.1)),children:g.jsx(gu,{size:15})}),g.jsx("b",{}),g.jsx("button",{title:"Restablecer vista",onClick:()=>{Pt(1),z(Ze+1)},children:g.jsx(VS,{size:15})})]}),g.jsxs("div",{className:"pan-help",children:[g.jsx(YS,{size:13}),"Arrastra para girar · clic en suelo para mover · rueda para zoom"]})]}),g.jsxs("div",{className:"team-strip",children:[g.jsxs("div",{className:"team-label",children:["EN EL ESTUDIO",g.jsx("small",{children:"Tu equipo de agentes"})]}),f.map(T=>g.jsxs("button",{className:"team-person "+(p===T.id?"chosen":""),onClick:()=>{as(T.id),ln(!0)},children:[g.jsxs("span",{className:"agent-avatar",style:{background:T.color+"35",color:T.color},children:[g.jsx("span",{className:"mini-head"}),g.jsx("span",{className:"mini-body"})]}),g.jsxs("span",{children:[g.jsx("strong",{children:T.name}),g.jsx("small",{children:T.role})]}),g.jsx("i",{className:fi[T.id]==="En ejecución"?"working":""})]},T.id))]})]}),X&&g.jsxs("aside",{className:"chat-panel",children:[g.jsxs("div",{className:"panel-title",children:[g.jsx("span",{children:"Conversa con tu equipo"}),g.jsx("button",{className:"conversation-export",onClick:Na,disabled:Te||ce||!Y.some(T=>T.content.trim()),title:"Descargar conversación en Markdown","aria-label":"Descargar conversación en Markdown",children:g.jsx(ju,{size:15})}),g.jsx("button",{onClick:()=>ln(!1),title:"Cerrar conversación",children:g.jsx(Bl,{size:17})})]}),g.jsxs("div",{className:"agent-intro",children:[g.jsxs("span",{className:"agent-avatar large",style:{background:((wt==null?void 0:wt.color)||"#aaa")+"30",color:wt==null?void 0:wt.color},children:[g.jsx("span",{className:"mini-head"}),g.jsx("span",{className:"mini-body"})]}),g.jsxs("div",{children:[g.jsxs("h3",{children:[wt==null?void 0:wt.name,g.jsx("span",{className:"role-badge",children:wt==null?void 0:wt.role})]}),g.jsxs("p",{children:[g.jsx("i",{className:"live-dot"}),fi[p]||"Disponible"]})]})]}),g.jsxs("div",{className:"model-line",children:[g.jsx(sh,{size:13}),(wt==null?void 0:wt.model)||"Sin modelo asignado",g.jsxs("button",{onClick:()=>e("settings"),children:["Configurar",g.jsx(Il,{size:12})]})]}),g.jsxs("div",{className:"chat-body",children:[!Y.length&&g.jsxs("div",{className:"chat-empty",children:[g.jsx("span",{className:"empty-spark",children:g.jsx(ch,{size:27})}),g.jsx("h3",{children:"¿Qué tienes en mente?"}),g.jsxs("p",{children:["Cuéntame tu idea o comparte un archivo.",g.jsx("br",{}),"Daremos el siguiente paso juntos."]}),g.jsx("div",{className:"truth-tag",children:v&&(wt!=null&&wt.model)?"Conversación mediante API en la nube":"Conecta un modelo para conversar"}),g.jsx("p",{children:"Conversa, resuelve dudas o pide ayuda para escribir. No necesitas subir un archivo."}),g.jsxs("button",{className:"suggestion",onClick:()=>se("Hola, ¿en qué puedes ayudarme?"),children:["Empezar una conversación",g.jsx(Il,{size:14})]}),g.jsxs("button",{className:"suggestion",onClick:()=>e("data"),children:["Explorar mis datos",g.jsx(Il,{size:14})]})]}),Te&&g.jsx("p",{className:"quiet",role:"status",children:"Cargando historial…"}),Y.map(T=>{var Ce;const xe=zi.find(Ve=>Ve.message_id===T.id);return g.jsxs("div",{className:"message "+T.role,children:[g.jsxs("small",{children:[T.role==="user"?"TÚ":wt==null?void 0:wt.name,T.model?" · "+T.model:"",T.provider?" · "+T.provider:""]}),g.jsx("p",{children:T.content||(T.status==="streaming"?"Esperando al modelo…":T.error||"Sin respuesta recibida")}),(Ce=T.attachments)!=null&&Ce.length?g.jsx("div",{className:"message-attachments",children:T.attachments.map(Ve=>g.jsxs("a",{href:kh(Ve.id,!0),download:!0,children:[g.jsx(mu,{size:12}),Ve.name]},Ve.id))}):null,T.status==="cancelled"&&g.jsx("small",{children:"Respuesta parcial cancelada · sin guardar"}),T.status==="error"&&g.jsxs(g.Fragment,{children:[g.jsx("small",{children:"Respuesta incompleta o fallida · sin guardar"}),T.content&&T.error&&g.jsx("p",{className:"chat-error",role:"status",children:T.error}),g.jsx("button",{className:"retry",onClick:()=>{e("settings"),ke("")},children:"Revisar conexión"})]}),T.role==="assistant"&&!!T.content.trim()&&g.jsxs("div",{className:"feedback-toolbar",children:[g.jsx("button",{className:"button secondary",onClick:()=>ac(T.content),children:"Copiar respuesta"}),T.status==="complete"&&g.jsx(iR,{text:T.content,contextKey:l+":"+p}),T.persisted&&T.status==="complete"&&g.jsxs(g.Fragment,{children:[g.jsx("button",{className:"button secondary","aria-pressed":(xe==null?void 0:xe.rating)==="useful",disabled:Ra===T.id,onClick:()=>rc(T,"useful"),children:"Útil"}),g.jsx("button",{className:"button secondary",disabled:Ra===T.id,onClick:()=>{Si(T.id),ui((xe==null?void 0:xe.correction)||"")},children:"Guardar corrección"}),(xe==null?void 0:xe.rating)==="correction"&&g.jsx("small",{children:"Corrección guardada"})]})]}),da===T.id&&T.persisted&&g.jsxs("form",{className:"feedback-form",onSubmit:Ve=>{Ve.preventDefault(),rc(T,"correction")},children:[g.jsxs("label",{children:["Corrección para la respuesta",g.jsx("textarea",{"aria-label":"Corrección para la respuesta",value:Mi,onChange:Ve=>ui(Ve.target.value),minLength:3,maxLength:2e3,required:!0,placeholder:"Escribe la información correcta que debe recordar este agente…"})]}),g.jsx("p",{children:"Se usará como contexto del mismo proyecto y agente. No reentrena el modelo."}),g.jsxs("div",{children:[g.jsx("button",{className:"button primary",disabled:Ra===T.id||Mi.trim().length<3,children:"Confirmar corrección"}),g.jsx("button",{className:"button secondary",type:"button",onClick:()=>Si(null),children:"Cancelar"})]})]})]},T.key||T.id)}),g.jsxs("details",{className:"feedback-memory",children:[g.jsxs("summary",{children:["Correcciones guardadas (",zi.filter(T=>T.rating==="correction").length,")"]}),g.jsx("p",{children:"Mejora contexto, no reentrena el modelo. Puedes revisar y eliminar cada corrección."}),zi.filter(T=>T.rating==="correction").map(T=>g.jsxs("div",{className:"feedback-entry",children:[g.jsx("p",{children:T.correction}),g.jsx("button",{className:"button secondary",disabled:Ra===T.message_id,onClick:()=>Go(T),children:"Eliminar corrección"})]},T.id)),!zi.some(T=>T.rating==="correction")&&g.jsx("p",{children:"Aún no hay correcciones guardadas para este agente y proyecto."})]}),g.jsx("div",{ref:Fo})]}),g.jsxs("div",{className:"chat-compose",children:[(!P.inference_verified||!v)&&g.jsxs("div",{className:"chat-connection-error",role:"status",children:[g.jsx("strong",{children:"Conecta tu equipo para conversar"}),P.error&&g.jsx("p",{children:P.error}),g.jsx("button",{className:"button primary",disabled:kt,onClick:sc,children:kt?"Conectando…":E==="groq"?"Conectar Groq":"Conectar Gemini"}),g.jsx("button",{className:"button secondary",onClick:()=>e("settings"),children:"Añadir mi clave"})]}),ce&&g.jsxs("div",{className:"chat-progress",children:[g.jsx(A_,{size:14,className:"spin"}),g.jsx("span",{role:"status",children:Rr==="generating"?"Recibiendo respuesta…":"Esperando respuesta del modelo…"}),g.jsxs("time",{"aria-label":"Tiempo transcurrido",children:[Math.floor(N/60),":",String(N%60).padStart(2,"0")]})]}),I.length>0&&g.jsxs("select",{value:pe,onChange:T=>Oe(T.target.value),"aria-label":"Contexto de ejecución",children:[g.jsx("option",{value:"",children:"Sin contexto de ejecución"}),I.map(T=>g.jsx("option",{value:T.id,children:T.request.slice(0,40)},T.id))]}),g.jsx("textarea",{value:O,maxLength:12e3,onChange:T=>se(T.target.value),placeholder:"Pregunta o pide algo a "+((wt==null?void 0:wt.name)||"tu equipo")+"…","aria-label":"Mensaje",onKeyDown:T=>{T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),Ho())}}),ue.length>0&&g.jsxs("div",{className:"attachment-chips","aria-label":"Adjuntos del próximo mensaje",children:[ue.map(T=>g.jsxs("span",{className:"attachment-chip",children:[g.jsx(mu,{size:13}),g.jsx("span",{children:T.name}),g.jsx("button",{type:"button",disabled:ce,"aria-label":"Quitar adjunto "+T.name,onClick:()=>he(xe=>xe.filter(Ce=>Ce.id!==T.id)),children:g.jsx(Bl,{size:14})})]},T.id)),g.jsxs("small",{children:[Vh(ue.reduce((T,xe)=>T+(xe.size||0),0))," de 12 MB"]})]}),ie&&g.jsxs("div",{className:"attachment-chooser",children:[g.jsxs("div",{children:[g.jsx("strong",{children:"Elegir PDF o imagen del proyecto"}),g.jsx("button",{"aria-label":"Cerrar selector de adjuntos",onClick:()=>Ue(!1),children:g.jsx(Bl,{size:14})})]}),!wa.length&&g.jsx("p",{children:"Aún no hay PDF ni imágenes. Usa el clip para subir uno."}),wa.map(T=>g.jsxs("button",{className:"attachment-choice",disabled:ce||Pe||ue.some(xe=>xe.id===T.id),onClick:()=>ss({...T,kind:sa(T)}),children:[sa(T)==="image"?g.jsx(T_,{size:15}):g.jsx(oh,{size:15}),g.jsx("span",{children:T.name}),ue.some(xe=>xe.id===T.id)?g.jsx(qh,{size:14}):g.jsx(gu,{size:14})]},T.id))]}),g.jsx(tR,{value:O,onChange:se,contextKey:l+":"+p,disabled:ce||Pe||kt}),g.jsxs("div",{className:"compose-tools",children:[g.jsxs("label",{title:"Subir archivo","aria-label":"Subir archivo al chat",children:[g.jsx(mu,{size:18}),g.jsx("input",{type:"file",accept:Fv,disabled:ce||Pe,onChange:T=>{var Ce;const xe=(Ce=T.target.files)==null?void 0:Ce[0];T.target.value="",xe&&zr(xe,!0)}})]}),g.jsx("button",{className:"choose-attachment",title:"Elegir PDF o imagen existente","aria-label":"Elegir PDF o imagen existente",disabled:ce||Pe,onClick:()=>Ue(!ie),children:g.jsx(Wh,{size:17})}),g.jsx("span",{children:Pe?"Subiendo…":"Enter para enviar · Shift+Enter para otra línea"}),ce?g.jsx("button",{className:"send",title:"Cancelar conversación",onClick:()=>Lr(!0),children:g.jsx($u,{size:14})}):g.jsx("button",{className:"send",title:"Enviar",disabled:!O.trim()||Te||kt||Pe,onClick:()=>Ho(),children:g.jsx(SS,{size:18})})]}),g.jsx("p",{className:"conversation-hint",children:"PDF e imágenes: solo Gemini, hasta 3 adjuntos y 12 MB por mensaje. Se envían únicamente los archivos seleccionados; vuelve a elegirlos para otra consulta."}),g.jsxs("button",{className:"retry",onClick:()=>Ho("Continúa desde tu respuesta anterior sin repetirla. Si ya terminaste, propón un siguiente paso útil para mi solicitud.",!1),disabled:ce||kt||Te||!wr,children:[g.jsx(lh,{size:11}),"Continuar conversación"]}),g.jsxs("button",{className:"retry",disabled:ce||!(O.trim()||Y.some(T=>T.role==="user")),onClick:of,children:[g.jsx(Vu,{size:12}),"Preparar tarea"]}),g.jsxs("button",{className:"retry",onClick:Jn,disabled:ce||kt||Te||Pe||!Y.some(T=>T.role==="user"),children:[g.jsx(Ju,{size:11}),"Reutilizar último mensaje"]})]}),g.jsxs("div",{className:"privacy",children:[g.jsx(HS,{size:12}),"IA en la nube · cuotas del proveedor."]})]}),gt&&g.jsxs("section",{className:"activity-panel",children:[g.jsxs("div",{className:"activity-title",children:[g.jsx(E_,{size:15}),g.jsx("strong",{children:"Actividad del equipo"}),g.jsx("span",{children:"EN VIVO"}),g.jsx("button",{onClick:()=>lt(!1),title:"Ocultar actividad",children:g.jsx(R_,{size:16})})]}),g.jsx("div",{className:"activity-entries",children:F.length?F.slice(-4).reverse().map(T=>{var Ce;const xe=JSON.parse(T.payload);return g.jsxs("div",{children:[g.jsx("span",{className:"event-dot"}),g.jsx("time",{children:new Date(T.created).toLocaleTimeString("es-PE",{hour:"2-digit",minute:"2-digit"})}),g.jsx("strong",{children:((Ce=T.agent)==null?void 0:Ce.toUpperCase())||"ESTUDIO"}),g.jsxs("span",{children:[xe.task||xe.objective||xe.name||xe.message||"Conversación",xe.status?" · "+xe.status:""]})]},T.seq)}):g.jsx("p",{className:"quiet",children:"Aquí aparecerán las tareas y resultados reales de tu equipo."})})]})]}),r==="projects"&&g.jsxs("section",{className:"content-card",children:[g.jsxs("div",{className:"section-title",children:[g.jsx("h2",{children:"Tus proyectos"}),g.jsx(Gv,{size:20})]}),g.jsxs("form",{className:"new-project",onSubmit:T=>{T.preventDefault(),ri(async()=>{const xe=await _n("/projects",{name:Q});s([...i,xe]),is(xe.id),me(""),e("office")})},children:[g.jsx("input",{placeholder:"Nombre de tu próximo proyecto","aria-label":"Nombre del nuevo proyecto",value:Q,onChange:T=>me(T.target.value),maxLength:120,required:!0}),g.jsxs("button",{className:"button primary",disabled:ee,children:[g.jsx(gu,{size:16}),"Crear proyecto"]})]}),g.jsxs("div",{className:"collection-search",children:[g.jsxs("label",{children:["Buscar proyectos",g.jsx("input",{type:"search",value:st,onChange:T=>tt(T.target.value),placeholder:"Nombre del proyecto"})]}),g.jsxs("span",{role:"status",children:[Dr.length," de ",i.length," proyectos"]})]}),!Dr.length&&g.jsx("p",{className:"search-empty",role:"status",children:"No hay proyectos que coincidan con tu búsqueda."}),g.jsx("div",{className:"project-grid",children:Dr.map(T=>g.jsxs("article",{className:"project-card "+(T.id===l?"current":""),children:[g.jsxs("button",{className:"project-open",onClick:()=>{is(T.id),e("office")},"aria-label":"Abrir proyecto "+T.name,children:[g.jsx("span",{className:"project-art",children:g.jsx(sh,{size:42})}),g.jsx("h3",{children:T.name}),g.jsx("p",{children:T.id===l?"Proyecto activo":"Abrir espacio de trabajo"}),g.jsx(Il,{size:19})]}),Ct===T.id?g.jsxs("form",{className:"project-rename",onSubmit:xe=>{xe.preventDefault(),Or(T.id)},children:[g.jsxs("label",{children:["Nuevo nombre",g.jsx("input",{"aria-label":"Nuevo nombre de "+T.name,value:an,onChange:xe=>Lt(xe.target.value),maxLength:120,required:!0,autoFocus:!0,disabled:hn})]}),g.jsxs("div",{children:[g.jsx("button",{className:"button primary",type:"submit",disabled:hn||!an.trim(),children:hn?"Guardando…":"Guardar nombre"}),g.jsx("button",{className:"button secondary",type:"button",disabled:hn,onClick:()=>nt(null),children:"Cancelar"})]})]}):g.jsx("button",{className:"project-rename-trigger",disabled:hn,onClick:()=>{nt(T.id),Lt(T.name)},"aria-label":"Renombrar proyecto "+T.name,children:"Renombrar"})]},T.id))})]}),r==="data"&&g.jsxs("div",{className:"data-layout",children:[g.jsxs("section",{className:"content-card",children:[g.jsxs("div",{className:"section-title",children:[g.jsx("h2",{children:"Biblioteca del proyecto"}),g.jsx("span",{children:"CSV · XLSX · PDF · JPG · PNG · WebP · hasta 20 MB"})]}),g.jsxs("label",{className:"dropzone "+(We?"dragging":""),onDragOver:T=>{T.preventDefault(),Pe||ot(!0)},onDragLeave:()=>ot(!1),onDrop:T=>{T.preventDefault(),ot(!1),!ee&&!Pe&&T.dataTransfer.files[0]&&zr(T.dataTransfer.files[0])},children:[g.jsx(jv,{size:26}),g.jsx("strong",{children:Pe?"Subiendo archivo…":"Trae tus archivos al estudio"}),g.jsx("span",{children:"Arrastra un archivo o selecciónalo aquí"}),g.jsx("input",{type:"file",accept:Fv,disabled:ee||Pe,onChange:T=>{var Ce;const xe=(Ce=T.target.files)==null?void 0:Ce[0];T.target.value="",xe&&zr(xe)}})]}),g.jsxs("div",{className:"collection-search",children:[g.jsxs("label",{children:["Buscar archivos",g.jsx("input",{type:"search",value:xt,onChange:T=>Bt(T.target.value),placeholder:"Nombre del archivo"})]}),g.jsxs("span",{role:"status",children:[js.length," de ",R.length," archivos"]})]}),!js.length&&g.jsx("p",{className:"search-empty",role:"status",children:R.length?"No hay archivos que coincidan con tu búsqueda.":"Tu biblioteca está vacía. Sube un archivo para empezar."}),g.jsx("div",{className:"file-list",children:js.map(T=>g.jsxs("button",{className:J===T.id?"selected":"",onClick:()=>ri(()=>ks(T.id)),children:[sa(T)==="table"?g.jsx(rh,{size:18}):sa(T)==="image"?g.jsx(T_,{size:18}):g.jsx(oh,{size:18}),g.jsxs("span",{children:[T.name,g.jsxs("small",{children:[sa(T)==="table"?"Tabla":sa(T)==="image"?"Imagen":"Documento PDF",T.size!==void 0?" · "+Vh(T.size):""]})]}),g.jsx(TS,{size:16})]},T.id))}),Ii&&Nn&&g.jsxs("div",{className:"import-options",children:[Nn.sheets.length?g.jsxs("label",{children:["Hoja",g.jsx("select",{value:At,onChange:T=>Mn(T.target.value),children:Nn.sheets.map(T=>g.jsx("option",{children:T},T))})]}):g.jsxs(g.Fragment,{children:[g.jsxs("label",{children:["Separador",g.jsxs("select",{value:un,onChange:T=>bn(T.target.value),children:[g.jsx("option",{value:",",children:"Coma"}),g.jsx("option",{value:";",children:"Punto y coma"}),g.jsx("option",{value:"	",children:"Tabulación"}),g.jsx("option",{value:"|",children:"Barra"})]})]}),g.jsxs("label",{children:["Codificación",g.jsx("select",{value:An,onChange:T=>Zn(T.target.value),children:["utf-8-sig","utf-8","latin-1","cp1252"].map(T=>g.jsx("option",{children:T},T))})]})]}),g.jsx("button",{className:"button secondary",onClick:()=>ri(async()=>{const T=Bn.current,xe=l,Ce=await _n("/files/"+Ii+"/options",{sheet:At||null,separator:un,encoding:An},"PUT");T===Bn.current&&Qn.current.project===xe&&fe({...Ce,sheets:Nn.sheets})}),children:"Aplicar lectura"})]}),Nn&&g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"data-stats",children:[g.jsxs("span",{children:[g.jsx("strong",{children:Nn.rows}),"filas"]}),g.jsxs("span",{children:[g.jsx("strong",{children:Nn.columns.length}),"columnas"]}),g.jsxs("span",{children:[g.jsx("strong",{children:Nn.duplicates}),"duplicados conservados"]}),g.jsxs("span",{children:[g.jsx("strong",{children:Nn.columns.reduce((T,xe)=>T+xe.missing,0)}),"valores faltantes"]})]}),g.jsx("div",{className:"table-scroll",children:g.jsxs("table",{children:[g.jsx("thead",{children:g.jsx("tr",{children:Nn.columns.map(T=>g.jsxs("th",{children:[T.name,g.jsxs("small",{children:[T.type," · ",T.missing," faltantes"]})]},T.name))})}),g.jsx("tbody",{children:Nn.preview.map((T,xe)=>g.jsx("tr",{children:Nn.columns.map(Ce=>g.jsx("td",{children:T[Ce.name]===null?g.jsx("em",{children:"Vacío"}):String(T[Ce.name])},Ce.name))},xe))})]})}),g.jsx("p",{className:"caption",children:"Vista previa de hasta 12 filas. El original permanece intacto."})]}),Fn&&g.jsxs("div",{className:"asset-preview",children:[Fn.kind==="image"?g.jsx("img",{src:kh(J),alt:"Vista previa de "+Fn.name,loading:"lazy"}):g.jsxs("div",{className:"pdf-preview",children:[g.jsx(oh,{size:42}),g.jsx("strong",{children:"Documento PDF"}),g.jsx("span",{children:"Descarga el original para verlo o consúltalo con Gemini."})]}),g.jsx("h3",{children:Fn.name}),g.jsxs("p",{className:"muted",children:[Fn.mime," · ",Vh(Fn.size),Fn.width&&Fn.height?" · "+Fn.width+" × "+Fn.height+" px":""]}),g.jsxs("div",{className:"asset-actions",children:[g.jsxs("a",{className:"button secondary",href:kh(J,!0),download:!0,children:[g.jsx(ju,{size:15}),"Descargar original"]}),g.jsxs("button",{className:"button primary",onClick:()=>Xs(R.find(T=>T.id===J)||{id:J,name:Fn.name,kind:Fn.kind,size:Fn.size}),children:[g.jsx(mu,{size:15}),"Consultar con ",(wt==null?void 0:wt.name)||"tu agente"]})]}),g.jsx("p",{className:"caption",children:"El archivo se enviará a Gemini al enviar tu mensaje. Los cálculos con columnas requieren CSV o XLSX."})]})]}),g.jsx("section",{className:"content-card tool-card",children:Fn?g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"eyebrow",children:"LECTURA CON GEMINI"}),g.jsx("h2",{children:"Consulta tu documento o imagen"}),g.jsx("p",{className:"muted",children:"Adjunta este archivo a una conversación para resumirlo, extraer información o hacer preguntas. Elige qué deseas consultar antes de enviar."}),g.jsx("p",{className:"caption",children:"Para cálculos verificables por columnas, selecciona una tabla CSV o XLSX de la biblioteca."}),g.jsxs("button",{className:"button secondary",onClick:()=>{const T=Ji[0];T?ri(()=>ks(T.id)):qe("Sube un CSV o XLSX para usar el modo herramientas.")},children:[g.jsx(rh,{size:16}),"Elegir una tabla"]})]}):g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"eyebrow",children:"SIN MODELO NECESARIO"}),g.jsx("h2",{children:"Modo herramientas"}),g.jsx("p",{className:"muted",children:"Operaciones explícitas, números calculados por Python y revisión independiente."}),g.jsxs("label",{children:["Objetivo",g.jsx("textarea",{value:Ae,onChange:T=>Ne(T.target.value),placeholder:"¿Qué quieres analizar?"})]}),g.jsxs("label",{children:["Agrupar por",g.jsx("select",{"aria-label":"Agrupar por",value:Ye,onChange:T=>we(T.target.value),children:qs})]}),g.jsxs("label",{className:"checkbox",children:[g.jsx("input",{type:"checkbox",checked:$e,onChange:T=>ze(T.target.checked)}),"Calcular ingresos = cantidad × precio"]}),$e?g.jsxs("div",{className:"two-col",children:[g.jsxs("label",{children:["Cantidad",g.jsx("select",{"aria-label":"Cantidad",value:ht,onChange:T=>at(T.target.value),children:qs})]}),g.jsxs("label",{children:["Precio",g.jsx("select",{"aria-label":"Precio",value:zt,onChange:T=>Z(T.target.value),children:qs})]})]}):g.jsxs("label",{children:["Métrica",g.jsx("select",{"aria-label":"Métrica",value:Le,onChange:T=>q(T.target.value),children:qs})]}),g.jsxs("div",{className:"two-col",children:[g.jsxs("label",{children:["Operación",g.jsx("select",{value:Xe,onChange:T=>et(T.target.value),children:[["sum","Suma"],["mean","Media"],["median","Mediana"],["min","Mínimo"],["max","Máximo"],["count","Conteo"]].map(([T,xe])=>g.jsx("option",{value:T,children:xe},T))})]}),g.jsxs("label",{children:["Unidad",g.jsx("input",{value:Fe,onChange:T=>ct(T.target.value)})]})]}),g.jsxs("label",{children:["Filtro opcional · columna",g.jsx("select",{value:Be,onChange:T=>ve(T.target.value),children:qs})]}),Be&&g.jsxs("label",{children:["Igual a",g.jsx("input",{value:ye,onChange:T=>He(T.target.value)})]}),g.jsxs("label",{children:["Gráfico",g.jsxs("select",{value:It,onChange:T=>cn(T.target.value),children:[g.jsx("option",{value:"bar",children:"Barras"}),g.jsx("option",{value:"line",children:"Líneas (confirma orden temporal)"}),g.jsx("option",{value:"none",children:"Sin gráfico"})]})]}),g.jsxs("button",{className:"button primary full",disabled:ee||!Ii||!$e&&!Le||$e&&(!ht||!zt),onClick:()=>oc(!0),children:[g.jsx(lh,{size:15}),"Preparar plan de cálculo"]}),g.jsx("p",{className:"caption",children:"No es inferencia de IA. Revisa definición, filtros y unidades antes de aprobar."})]})})]}),r==="tasks"&&g.jsxs("div",{className:"tasks-layout",children:[g.jsxs("section",{className:"content-card",children:[g.jsxs("div",{className:"section-title",children:[g.jsx("h2",{children:"Un nuevo objetivo"}),g.jsx("span",{className:"pill",children:"ATLAS · Coordinación"})]}),g.jsx("textarea",{className:"goal-input",placeholder:"Compara ingresos por producto y región, identifica faltantes y prepara un informe…",value:Ae,onChange:T=>Ne(T.target.value)}),g.jsxs("div",{className:"plan-bottom",children:[g.jsxs("select",{value:Ii,"aria-label":"Tabla para la tarea",onChange:T=>{Bn.current++,fe(null),ae(T.target.value)},children:[g.jsx("option",{value:"",children:"Sin archivo · organizar proyecto"}),Ji.map(T=>g.jsx("option",{value:T.id,children:T.name},T.id))]}),g.jsxs("button",{className:"button primary",disabled:ee||Ae.length<3,onClick:()=>oc(),children:[ee?g.jsx(A_,{className:"spin",size:16}):g.jsx(ch,{size:16}),"Proponer plan con API"]})]}),g.jsx("p",{className:"caption",children:"El plan usa el modelo asignado a ATLAS. Sin conexión, puedes usar los controles de Datos."})]}),g.jsxs("section",{className:"content-card",children:[g.jsx("h2",{children:"Planes y ejecuciones"}),!I.length&&g.jsxs("div",{className:"empty-state",children:[g.jsx(Vu,{size:35}),g.jsx("h3",{children:"Tu próximo objetivo empieza aquí"}),g.jsx("p",{children:"Describe una tarea o prepara un cálculo desde Datos."})]}),I.map(T=>{const xe=JSON.parse(T.plan);return g.jsxs("article",{className:"run-card",children:[g.jsxs("div",{className:"run-head",children:[g.jsx("h3",{children:T.request}),g.jsx("span",{className:"status "+(T.status==="Completado"?"success":""),children:T.status})]}),g.jsxs("small",{children:["Ejecución ",T.id.slice(0,10)," · ",xe.mode==="tools"?"Modo herramientas · sin inferencia":"Plan propuesto mediante API"]}),xe.clarification&&g.jsxs("p",{className:"clarification",children:["Se necesita aclaración: ",xe.clarification]}),g.jsx("div",{className:"task-chain",children:xe.tasks.map(Ce=>{var Ve;return g.jsxs("div",{children:[g.jsx("span",{className:"task-agent",style:{background:((Ve=f.find(rt=>rt.id===Ce.agent))==null?void 0:Ve.color)+"30"},children:Ce.agent.toUpperCase()}),g.jsxs("p",{children:[Ce.description,g.jsx("small",{children:Ce.depends_on.length?"Después de "+Ce.depends_on.join(", "):"Sin dependencias"}),g.jsx("span",{className:"task-current-status",children:lf(T,Ce.id)})]})]},Ce.id)})}),xe.analysis&&g.jsxs("details",{children:[g.jsx("summary",{children:"Operaciones y criterios aprobables"}),g.jsx("pre",{children:JSON.stringify(xe,null,2)})]}),g.jsxs("div",{className:"run-actions",children:[T.status==="Espera aprobación"&&g.jsxs("button",{className:"button primary",disabled:ee,onClick:()=>ri(async()=>{await _n("/runs/"+T.id+"/approve",{}),await di()}),children:[g.jsx(qh,{size:15}),"Aprobar y ejecutar"]}),T.status==="Interrumpido"&&g.jsxs("button",{className:"button primary",disabled:ee,onClick:()=>ri(async()=>{await _n("/runs/"+T.id+"/resume",{}),await di()}),children:[g.jsx(lh,{size:15}),"Reanudar desde el último paso guardado"]}),!["Completado","Fallido","Cancelado","Interrumpido"].includes(T.status)&&g.jsxs("button",{className:"button secondary",onClick:()=>ri(async()=>{await _n("/runs/"+T.id+"/cancel",{}),await di()}),children:[g.jsx($u,{size:14}),"Cancelar"]}),g.jsx("button",{className:"button secondary",onClick:()=>{Oe(T.id),as("bruno"),e("office"),ln(!0)},children:"Consultar a BRUNO"}),g.jsx("button",{className:"button secondary",disabled:ee||!Ae,onClick:()=>ri(async()=>{await _n("/runs/"+T.id+"/correction",{name:Ae.slice(0,120)}),await di()}),children:"Solicitar corrección"})]}),T.result&&g.jsxs("div",{className:"result-summary "+(T.status==="Completado"?"":"provisional"),children:[T.status!=="Completado"&&g.jsxs("p",{children:[g.jsxs("strong",{children:["Resultado provisional · ejecución ",T.status.toLowerCase(),"."]})," Las cifras conservadas no constituyen un entregable aprobado."]}),"Estadístico: ",g.jsx("strong",{children:JSON.parse(T.result).total})," · ",JSON.parse(T.result).rows_after," filas analizadas"]})]},T.id)})]})]}),r==="deliverables"&&g.jsxs("section",{className:"content-card",children:[g.jsxs("div",{className:"section-title",children:[g.jsx("h2",{children:"Resultados con evidencia"}),g.jsxs("span",{children:[H.length," archivos generados"]})]}),g.jsxs("div",{className:"collection-search",children:[g.jsxs("label",{children:["Buscar entregables",g.jsx("input",{type:"search",value:nn,onChange:T=>Rt(T.target.value),placeholder:"Nombre del entregable"})]}),g.jsxs("span",{role:"status",children:[Nr.length," de ",H.length," entregables"]})]}),!!H.length&&!Nr.length&&g.jsx("p",{className:"search-empty",role:"status",children:"No hay entregables que coincidan con tu búsqueda."}),H.length?g.jsx("div",{className:"artifact-grid",children:Nr.map(T=>g.jsxs("a",{className:"artifact",href:"/api/artifacts/"+T.id,download:!0,children:[g.jsx("span",{className:"artifact-icon",children:T.name.endsWith(".png")?g.jsx(Vu,{}):g.jsx(rh,{})}),g.jsxs("div",{children:[g.jsx("strong",{children:T.name}),g.jsxs("small",{children:["Ejecución ",T.run.slice(0,10)," · versión 1"]})]}),g.jsx(ju,{size:17})]},T.id))}):g.jsxs("div",{className:"empty-state",children:[g.jsx(Wh,{size:40}),g.jsx("h3",{children:"Tus entregables tendrán su lugar aquí"}),g.jsx("p",{children:"Ejecuta y verifica un análisis para generar tablas, gráficos e informes."}),g.jsxs("button",{className:"button secondary",onClick:()=>e("data"),children:["Ir a Datos",g.jsx(Il,{size:15})]})]})]}),r==="settings"&&g.jsxs(g.Fragment,{children:[g.jsx($2,{agents:f,provider:E,ollama:S,openai:x,onSaved:Bi,status:P,onStatus:Da,reduced:A,onReduced:k,onNotice:qe,onError:ke}),g.jsx(eR,{project:l,onNotice:qe,onError:ke,onImported:T=>{s(xe=>[...xe,T]),is(T.id),_n("/projects").then(s).catch(xe=>ke(xe.message))}})]})]}),g.jsxs("footer",{className:"app-footer",children:[g.jsxs("span",{children:[g.jsx("span",{className:"live-dot"}),"Tu estudio · datos en el servidor"]}),g.jsxs("span",{children:["Hecho para pensar, crear y colaborar.",g.jsx("span",{className:"footer-star",children:"✧"})]}),g.jsxs("span",{children:["STUDIO DE ANTO ",g.jsx("span",{className:"version",children:"v1.3 · contexto"})]})]})]})]})}uS.createRoot(document.getElementById("root")).render(g.jsx(iS.StrictMode,{children:g.jsx(aR,{})}));
