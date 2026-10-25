var Xy=Object.defineProperty;var qy=(r,e,i)=>e in r?Xy(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i;var Hi=(r,e,i)=>qy(r,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Wy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Uh={exports:{}},xl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function Yy(){if(Q0)return xl;Q0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return xl.Fragment=e,xl.jsx=i,xl.jsxs=i,xl}var J0;function Zy(){return J0||(J0=1,Uh.exports=Yy()),Uh.exports}var v=Zy();async function Il(r){const e=await r.text();if(r.status===204)return null;let i;try{i=JSON.parse(e)}catch{throw r.status===401||r.status===403?Error("No se pudo acceder al Codespace. Vuelve a abrir la aplicación desde el puerto 8765 e inicia sesión en GitHub."):r.status===502||r.status===503||r.status===504?Error("El servidor no está disponible o tardó demasiado (HTTP "+r.status+"). Espera a que termine de arrancar y vuelve a probar."):r.status>=500?Error("El servidor tuvo un error interno (HTTP "+r.status+"). Reinicia la aplicación del Codespace y vuelve a probar."):Error("La respuesta del servidor no contiene los datos esperados. Abre la aplicación desde el puerto 8765 y recarga la página.")}if(!r.ok){const s=i&&typeof i.detail=="string"?i.detail:"La solicitud no pudo completarse (HTTP "+r.status+").";throw Error(s)}return i}async function Bl(r,e){try{return await fetch(r,e)}catch(i){throw i.name==="AbortError"?i:Error("No se pudo contactar con el servidor. Revisa que tu Codespace siga encendido y vuelve a abrir la aplicación.")}}var Lh={exports:{}},yt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function Ky(){if($0)return yt;$0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function S(P){return P===null||typeof P!="object"?null:(P=x&&P[x]||P["@@iterator"],typeof P=="function"?P:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(P,ae,Ee){this.props=P,this.context=ae,this.refs=w,this.updater=Ee||M}y.prototype.isReactComponent={},y.prototype.setState=function(P,ae){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ae,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function g(){}g.prototype=y.prototype;function O(P,ae,Ee){this.props=P,this.context=ae,this.refs=w,this.updater=Ee||M}var L=O.prototype=new g;L.constructor=O,E(L,y.prototype),L.isPureReactComponent=!0;var N=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function V(P,ae,Ee,Re,ee,ye){return Ee=ye.ref,{$$typeof:r,type:P,key:ae,ref:Ee!==void 0?Ee:null,props:ye}}function B(P,ae){return V(P.type,ae,void 0,void 0,void 0,P.props)}function U(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function C(P){var ae={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Ee){return ae[Ee]})}var H=/\/+/g;function $(P,ae){return typeof P=="object"&&P!==null&&P.key!=null?C(""+P.key):ae.toString(36)}function oe(){}function _e(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(oe,oe):(P.status="pending",P.then(function(ae){P.status==="pending"&&(P.status="fulfilled",P.value=ae)},function(ae){P.status==="pending"&&(P.status="rejected",P.reason=ae)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function ge(P,ae,Ee,Re,ee){var ye=typeof P;(ye==="undefined"||ye==="boolean")&&(P=null);var Se=!1;if(P===null)Se=!0;else switch(ye){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(P.$$typeof){case r:case e:Se=!0;break;case _:return Se=P._init,ge(Se(P._payload),ae,Ee,Re,ee)}}if(Se)return ee=ee(P),Se=Re===""?"."+$(P,0):Re,N(ee)?(Ee="",Se!=null&&(Ee=Se.replace(H,"$&/")+"/"),ge(ee,ae,Ee,"",function(dt){return dt})):ee!=null&&(U(ee)&&(ee=B(ee,Ee+(ee.key==null||P&&P.key===ee.key?"":(""+ee.key).replace(H,"$&/")+"/")+Se)),ae.push(ee)),1;Se=0;var Ne=Re===""?".":Re+":";if(N(P))for(var Pe=0;Pe<P.length;Pe++)Re=P[Pe],ye=Ne+$(Re,Pe),Se+=ge(Re,ae,Ee,ye,ee);else if(Pe=S(P),typeof Pe=="function")for(P=Pe.call(P),Pe=0;!(Re=P.next()).done;)Re=Re.value,ye=Ne+$(Re,Pe++),Se+=ge(Re,ae,Ee,ye,ee);else if(ye==="object"){if(typeof P.then=="function")return ge(_e(P),ae,Ee,Re,ee);throw ae=String(P),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return Se}function G(P,ae,Ee){if(P==null)return P;var Re=[],ee=0;return ge(P,Re,"","",function(ye){return ae.call(Ee,ye,ee++)}),Re}function ne(P){if(P._status===-1){var ae=P._result;ae=ae(),ae.then(function(Ee){(P._status===0||P._status===-1)&&(P._status=1,P._result=Ee)},function(Ee){(P._status===0||P._status===-1)&&(P._status=2,P._result=Ee)}),P._status===-1&&(P._status=0,P._result=ae)}if(P._status===1)return P._result.default;throw P._result}var Z=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Me(){}return yt.Children={map:G,forEach:function(P,ae,Ee){G(P,function(){ae.apply(this,arguments)},Ee)},count:function(P){var ae=0;return G(P,function(){ae++}),ae},toArray:function(P){return G(P,function(ae){return ae})||[]},only:function(P){if(!U(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},yt.Component=y,yt.Fragment=i,yt.Profiler=l,yt.PureComponent=O,yt.StrictMode=s,yt.Suspense=p,yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,yt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return F.H.useMemoCache(P)}},yt.cache=function(P){return function(){return P.apply(null,arguments)}},yt.cloneElement=function(P,ae,Ee){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Re=E({},P.props),ee=P.key,ye=void 0;if(ae!=null)for(Se in ae.ref!==void 0&&(ye=void 0),ae.key!==void 0&&(ee=""+ae.key),ae)!I.call(ae,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&ae.ref===void 0||(Re[Se]=ae[Se]);var Se=arguments.length-2;if(Se===1)Re.children=Ee;else if(1<Se){for(var Ne=Array(Se),Pe=0;Pe<Se;Pe++)Ne[Pe]=arguments[Pe+2];Re.children=Ne}return V(P.type,ee,void 0,void 0,ye,Re)},yt.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},yt.createElement=function(P,ae,Ee){var Re,ee={},ye=null;if(ae!=null)for(Re in ae.key!==void 0&&(ye=""+ae.key),ae)I.call(ae,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(ee[Re]=ae[Re]);var Se=arguments.length-2;if(Se===1)ee.children=Ee;else if(1<Se){for(var Ne=Array(Se),Pe=0;Pe<Se;Pe++)Ne[Pe]=arguments[Pe+2];ee.children=Ne}if(P&&P.defaultProps)for(Re in Se=P.defaultProps,Se)ee[Re]===void 0&&(ee[Re]=Se[Re]);return V(P,ye,void 0,void 0,null,ee)},yt.createRef=function(){return{current:null}},yt.forwardRef=function(P){return{$$typeof:d,render:P}},yt.isValidElement=U,yt.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:ne}},yt.memo=function(P,ae){return{$$typeof:m,type:P,compare:ae===void 0?null:ae}},yt.startTransition=function(P){var ae=F.T,Ee={};F.T=Ee;try{var Re=P(),ee=F.S;ee!==null&&ee(Ee,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(Me,Z)}catch(ye){Z(ye)}finally{F.T=ae}},yt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},yt.use=function(P){return F.H.use(P)},yt.useActionState=function(P,ae,Ee){return F.H.useActionState(P,ae,Ee)},yt.useCallback=function(P,ae){return F.H.useCallback(P,ae)},yt.useContext=function(P){return F.H.useContext(P)},yt.useDebugValue=function(){},yt.useDeferredValue=function(P,ae){return F.H.useDeferredValue(P,ae)},yt.useEffect=function(P,ae,Ee){var Re=F.H;if(typeof Ee=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Re.useEffect(P,ae)},yt.useId=function(){return F.H.useId()},yt.useImperativeHandle=function(P,ae,Ee){return F.H.useImperativeHandle(P,ae,Ee)},yt.useInsertionEffect=function(P,ae){return F.H.useInsertionEffect(P,ae)},yt.useLayoutEffect=function(P,ae){return F.H.useLayoutEffect(P,ae)},yt.useMemo=function(P,ae){return F.H.useMemo(P,ae)},yt.useOptimistic=function(P,ae){return F.H.useOptimistic(P,ae)},yt.useReducer=function(P,ae,Ee){return F.H.useReducer(P,ae,Ee)},yt.useRef=function(P){return F.H.useRef(P)},yt.useState=function(P){return F.H.useState(P)},yt.useSyncExternalStore=function(P,ae,Ee){return F.H.useSyncExternalStore(P,ae,Ee)},yt.useTransition=function(){return F.H.useTransition()},yt.version="19.1.0",yt}var e_;function dp(){return e_||(e_=1,Lh.exports=Ky()),Lh.exports}var we=dp();const Qy=Wy(we);var Oh={exports:{}},yl={},Ph={exports:{}},zh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function Jy(){return t_||(t_=1,(function(r){function e(G,ne){var Z=G.length;G.push(ne);e:for(;0<Z;){var Me=Z-1>>>1,P=G[Me];if(0<l(P,ne))G[Me]=ne,G[Z]=P,Z=Me;else break e}}function i(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var ne=G[0],Z=G.pop();if(Z!==ne){G[0]=Z;e:for(var Me=0,P=G.length,ae=P>>>1;Me<ae;){var Ee=2*(Me+1)-1,Re=G[Ee],ee=Ee+1,ye=G[ee];if(0>l(Re,Z))ee<P&&0>l(ye,Re)?(G[Me]=ye,G[ee]=Z,Me=ee):(G[Me]=Re,G[Ee]=Z,Me=Ee);else if(ee<P&&0>l(ye,Z))G[Me]=ye,G[ee]=Z,Me=ee;else break e}}return ne}function l(G,ne){var Z=G.sortIndex-ne.sortIndex;return Z!==0?Z:G.id-ne.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var p=[],m=[],_=1,x=null,S=3,M=!1,E=!1,w=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(G){for(var ne=i(m);ne!==null;){if(ne.callback===null)s(m);else if(ne.startTime<=G)s(m),ne.sortIndex=ne.expirationTime,e(p,ne);else break;ne=i(m)}}function F(G){if(w=!1,N(G),!E)if(i(p)!==null)E=!0,I||(I=!0,$());else{var ne=i(m);ne!==null&&ge(F,ne.startTime-G)}}var I=!1,V=-1,B=5,U=-1;function C(){return y?!0:!(r.unstable_now()-U<B)}function H(){if(y=!1,I){var G=r.unstable_now();U=G;var ne=!0;try{e:{E=!1,w&&(w=!1,O(V),V=-1),M=!0;var Z=S;try{t:{for(N(G),x=i(p);x!==null&&!(x.expirationTime>G&&C());){var Me=x.callback;if(typeof Me=="function"){x.callback=null,S=x.priorityLevel;var P=Me(x.expirationTime<=G);if(G=r.unstable_now(),typeof P=="function"){x.callback=P,N(G),ne=!0;break t}x===i(p)&&s(p),N(G)}else s(p);x=i(p)}if(x!==null)ne=!0;else{var ae=i(m);ae!==null&&ge(F,ae.startTime-G),ne=!1}}break e}finally{x=null,S=Z,M=!1}ne=void 0}}finally{ne?$():I=!1}}}var $;if(typeof L=="function")$=function(){L(H)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,_e=oe.port2;oe.port1.onmessage=H,$=function(){_e.postMessage(null)}}else $=function(){g(H,0)};function ge(G,ne){V=g(function(){G(r.unstable_now())},ne)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(G){switch(S){case 1:case 2:case 3:var ne=3;break;default:ne=S}var Z=S;S=ne;try{return G()}finally{S=Z}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(G,ne){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var Z=S;S=G;try{return ne()}finally{S=Z}},r.unstable_scheduleCallback=function(G,ne,Z){var Me=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Me+Z:Me):Z=Me,G){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=Z+P,G={id:_++,callback:ne,priorityLevel:G,startTime:Z,expirationTime:P,sortIndex:-1},Z>Me?(G.sortIndex=Z,e(m,G),i(p)===null&&G===i(m)&&(w?(O(V),V=-1):w=!0,ge(F,Z-Me))):(G.sortIndex=P,e(p,G),E||M||(E=!0,I||(I=!0,$()))),G},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(G){var ne=S;return function(){var Z=S;S=ne;try{return G.apply(this,arguments)}finally{S=Z}}}})(zh)),zh}var n_;function $y(){return n_||(n_=1,Ph.exports=Jy()),Ph.exports}var Ih={exports:{}},Wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function eS(){if(i_)return Wn;i_=1;var r=dp();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:p,containerInfo:m,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Wn.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,_)},Wn.flushSync=function(p){var m=h.T,_=s.p;try{if(h.T=null,s.p=2,p)return p()}finally{h.T=m,s.p=_,s.d.f()}},Wn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Wn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Wn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,x=d(_,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:M}):_==="script"&&s.d.X(p,{crossOrigin:x,integrity:S,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Wn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Wn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,x=d(_,m.crossOrigin);s.d.L(p,_,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Wn.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=d(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Wn.requestFormReset=function(p){s.d.r(p)},Wn.unstable_batchedUpdates=function(p,m){return p(m)},Wn.useFormState=function(p,m,_){return h.H.useFormState(p,m,_)},Wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Wn.version="19.1.0",Wn}var a_;function tS(){if(a_)return Ih.exports;a_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ih.exports=eS(),Ih.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function nS(){if(s_)return yl;s_=1;var r=$y(),e=dp(),i=tS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),t;if(f===o)return d(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var b=!1,R=u.child;R;){if(R===a){b=!0,a=u,o=f;break}if(R===o){b=!0,o=u,a=f;break}R=R.sibling}if(!b){for(R=f.child;R;){if(R===a){b=!0,a=f,o=u;break}if(R===o){b=!0,o=f,a=u;break}R=R.sibling}if(!b)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function _e(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case y:return"Profiler";case w:return"StrictMode";case F:return"Suspense";case I:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case L:return(t.displayName||"Context")+".Provider";case O:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V:return n=t.displayName||null,n!==null?n:_e(t.type)||"Memo";case B:n=t._payload,t=t._init;try{return _e(t(n))}catch{}}return null}var ge=Array.isArray,G=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Me=[],P=-1;function ae(t){return{current:t}}function Ee(t){0>P||(t.current=Me[P],Me[P]=null,P--)}function Re(t,n){P++,Me[P]=t.current,t.current=n}var ee=ae(null),ye=ae(null),Se=ae(null),Ne=ae(null);function Pe(t,n){switch(Re(Se,n),Re(ye,t),Re(ee,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?T0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=T0(n),t=A0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ee(ee),Re(ee,t)}function dt(){Ee(ee),Ee(ye),Ee(Se)}function nt(t){t.memoizedState!==null&&Re(Ne,t);var n=ee.current,a=A0(n,t.type);n!==a&&(Re(ye,t),Re(ee,a))}function et(t){ye.current===t&&(Ee(ee),Ee(ye)),Ne.current===t&&(Ee(Ne),pl._currentValue=Z)}var zt=Object.prototype.hasOwnProperty,Ze=r.unstable_scheduleCallback,X=r.unstable_cancelCallback,ln=r.unstable_shouldYield,xt=r.unstable_requestPaint,ot=r.unstable_now,We=r.unstable_getCurrentPriorityLevel,Lt=r.unstable_ImmediatePriority,Xe=r.unstable_UserBlockingPriority,z=r.unstable_NormalPriority,T=r.unstable_LowPriority,k=r.unstable_IdlePriority,K=r.log,fe=r.unstable_setDisableYieldValue,ue=null,Le=null;function Ue(t){if(typeof K=="function"&&fe(t),Le&&typeof Le.setStrictMode=="function")try{Le.setStrictMode(ue,t)}catch{}}var q=Math.clz32?Math.clz32:Ve,ke=Math.log,Te=Math.LN2;function Ve(t){return t>>>=0,t===0?32:31-(ke(t)/Te|0)|0}var tt=256,Je=4194304;function ze(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function mt(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=ze(o):(b&=R,b!==0?u=ze(b):a||(a=R&~t,a!==0&&(u=ze(a))))):(R=o&~f,R!==0?u=ze(R):b!==0?u=ze(b):a||(a=o&~t,a!==0&&(u=ze(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function at(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ot(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y(){var t=tt;return tt<<=1,(tt&4194048)===0&&(tt=256),t}function Ie(){var t=Je;return Je<<=1,(Je&62914560)===0&&(Je=4194304),t}function pe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Fe(t,n,a,o,u,f){var b=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,j=t.expirationTimes,re=t.hiddenUpdates;for(a=b&~a;0<a;){var xe=31-q(a),Ae=1<<xe;R[xe]=0,j[xe]=-1;var ce=re[xe];if(ce!==null)for(re[xe]=null,xe=0;xe<ce.length;xe++){var de=ce[xe];de!==null&&(de.lane&=-536870913)}a&=~Ae}o!==0&&Be(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(b&~n))}function Be(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-q(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function lt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-q(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Pt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function cn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Rt(){var t=ne.p;return t!==0?t:(t=window.event,t===void 0?32:X0(t.type))}function yn(t,n){var a=ne.p;try{return ne.p=t,n()}finally{ne.p=a}}var un=Math.random().toString(36).slice(2),Sn="__reactFiber$"+un,En="__reactProps$"+un,Xn="__reactContainer$"+un,Ui="__reactEvents$"+un,Ma="__reactListeners$"+un,ba="__reactHandles$"+un,di="__reactResources$"+un,ia="__reactMarker$"+un;function pi(t){delete t[Sn],delete t[En],delete t[Ui],delete t[Ma],delete t[ba]}function mi(t){var n=t[Sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Xn]||a[Sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=D0(t);t!==null;){if(a=t[Sn])return a;t=D0(t)}return n}t=a,a=t.parentNode}return null}function ni(t){if(t=t[Sn]||t[Xn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ea(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function ji(t){var n=t[di];return n||(n=t[di]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Xt(t){t[ia]=!0}var Ns=new Set,gr={};function gi(t,n){D(t,n),D(t+"Capture",n)}function D(t,n){for(gr[t]=n,t=0;t<n.length;t++)Ns.add(n[t])}var Q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),le={},he={};function te(t){return zt.call(he,t)?!0:zt.call(le,t)?!1:Q.test(t)?he[t]=!0:(le[t]=!0,!1)}function De(t,n,a){if(te(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Oe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function He(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var je,rt;function $e(t){if(je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);je=n&&n[1]||"",rt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+je+t+rt}var Ye=!1;function _t(t,n){if(!t||Ye)return"";Ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Ae=function(){throw Error()};if(Object.defineProperty(Ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ae,[])}catch(de){var ce=de}Reflect.construct(t,[],Ae)}else{try{Ae.call()}catch(de){ce=de}t.call(Ae.prototype)}}else{try{throw Error()}catch(de){ce=de}(Ae=t())&&typeof Ae.catch=="function"&&Ae.catch(function(){})}}catch(de){if(de&&ce&&typeof de.stack=="string")return[de.stack,ce.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),b=f[0],R=f[1];if(b&&R){var j=b.split(`
`),re=R.split(`
`);for(u=o=0;o<j.length&&!j[o].includes("DetermineComponentFrameRoot");)o++;for(;u<re.length&&!re[u].includes("DetermineComponentFrameRoot");)u++;if(o===j.length||u===re.length)for(o=j.length-1,u=re.length-1;1<=o&&0<=u&&j[o]!==re[u];)u--;for(;1<=o&&0<=u;o--,u--)if(j[o]!==re[u]){if(o!==1||u!==1)do if(o--,u--,0>u||j[o]!==re[u]){var xe=`
`+j[o].replace(" at new "," at ");return t.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",t.displayName)),xe}while(1<=o&&0<=u);break}}}finally{Ye=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?$e(a):""}function st(t){switch(t.tag){case 26:case 27:case 5:return $e(t.type);case 16:return $e("Lazy");case 13:return $e("Suspense");case 19:return $e("SuspenseList");case 0:case 15:return _t(t.type,!1);case 11:return _t(t.type.render,!1);case 1:return _t(t.type,!0);case 31:return $e("Activity");default:return""}}function nn(t){try{var n="";do n+=st(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function vt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Et(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(t){var n=Et(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){o=""+b,f.call(this,b)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(b){o=""+b},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Kt(t){t._valueTracker||(t._valueTracker=Ke(t))}function pt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Et(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function wn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ut=/[\n"\\]/g;function qt(t){return t.replace(Ut,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ii(t,n,a,o,u,f,b,R){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),n!=null?b==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+vt(n)):t.value!==""+vt(n)&&(t.value=""+vt(n)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),n!=null?Ht(t,b,vt(n)):a!=null?Ht(t,b,vt(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+vt(R):t.removeAttribute("name")}function Wt(t,n,a,o,u,f,b,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+vt(a):"",n=n!=null?""+vt(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b)}function Ht(t,n,a){n==="number"&&wn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function It(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+vt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function dn(t,n,a){if(n!=null&&(n=""+vt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+vt(a):""}function Tn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ge(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=vt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function Gn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var ai=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mo(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||ai.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function _r(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Mo(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Mo(t,f,n[f])}function Us(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vl=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jl=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function aa(t){return jl.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ls=null;function si(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qn=null,Ta=null;function bo(t){var n=ni(t);if(n&&(t=n.stateNode)){var a=t[En]||null;e:switch(t=n.stateNode,n.type){case"input":if(ii(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[En]||null;if(!u)throw Error(s(90));ii(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&pt(o)}break e;case"textarea":dn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&It(t,!!a.multiple,n,!1)}}}var Os=!1;function Eo(t,n,a){if(Os)return t(n,a);Os=!0;try{var o=t(n);return o}finally{if(Os=!1,(Qn!==null||Ta!==null)&&(Cc(),Qn&&(n=Qn,t=Ta,Ta=Qn=null,bo(n),t)))for(n=0;n<t.length;n++)bo(t[n])}}function Ka(t,n){var a=t.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var _i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),To=!1;if(_i)try{var sa={};Object.defineProperty(sa,"passive",{get:function(){To=!0}}),window.addEventListener("test",sa,sa),window.removeEventListener("test",sa,sa)}catch{To=!1}var ki=null,Ao=null,vr=null;function Ro(){if(vr)return vr;var t,n=Ao,a=n.length,o,u="value"in ki?ki.value:ki.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var b=a-t;for(o=1;o<=b&&n[a-o]===u[f-o];o++);return vr=u.slice(t,1<o?1-o:void 0)}function ra(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ps(){return!0}function A(){return!1}function me(t){function n(a,o,u,f,b){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=b,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ps:A,this.isPropagationStopped=A,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ps)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ps)},persist:function(){},isPersistent:Ps}),n}var Ce={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qe=me(Ce),ft=_({},Ce,{view:0,detail:0}),Ct=me(ft),fn,vi,oa,Qa=_({},ft,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Si,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oa&&(oa&&t.type==="mousemove"?(fn=t.screenX-oa.screenX,vi=t.screenY-oa.screenY):vi=fn=0,oa=t),fn)},movementY:function(t){return"movementY"in t?t.movementY:vi}}),kl=me(Qa),Co=_({},Qa,{dataTransfer:0}),wo=me(Co),Xl=_({},ft,{relatedTarget:0}),xr=me(Xl),ql=_({},Ce,{animationName:0,elapsedTime:0,pseudoElement:0}),pn=me(ql),xi=_({},Ce,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yi=me(xi),zs=_({},Ce,{data:0}),Wl=me(zs),Iu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Do={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jn(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Yl[t])?!!n[t]:!1}function Si(){return Jn}var Bu=_({},ft,{key:function(t){if(t.key){var n=Iu[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ra(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Do[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Si,charCode:function(t){return t.type==="keypress"?ra(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ra(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fu=me(Bu),rx=_({},Qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=me(rx),ox=_({},ft,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Si}),lx=me(ox),cx=_({},Ce,{propertyName:0,elapsedTime:0,pseudoElement:0}),ux=me(cx),fx=_({},Qa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hx=me(fx),dx=_({},Ce,{newState:0,oldState:0}),px=me(dx),mx=[9,13,27,32],Hu=_i&&"CompositionEvent"in window,No=null;_i&&"documentMode"in document&&(No=document.documentMode);var gx=_i&&"TextEvent"in window&&!No,Op=_i&&(!Hu||No&&8<No&&11>=No),Pp=" ",zp=!1;function Ip(t,n){switch(t){case"keyup":return mx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yr=!1;function _x(t,n){switch(t){case"compositionend":return Bp(n);case"keypress":return n.which!==32?null:(zp=!0,Pp);case"textInput":return t=n.data,t===Pp&&zp?null:t;default:return null}}function vx(t,n){if(yr)return t==="compositionend"||!Hu&&Ip(t,n)?(t=Ro(),vr=Ao=ki=null,yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Op&&n.locale!=="ko"?null:n.data;default:return null}}var xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!xx[t.type]:n==="textarea"}function Hp(t,n,a,o){Qn?Ta?Ta.push(o):Ta=[o]:Qn=o,n=Oc(n,"onChange"),0<n.length&&(a=new Qe("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Uo=null,Lo=null;function yx(t){y0(t,0)}function Zl(t){var n=Ea(t);if(pt(n))return t}function Gp(t,n){if(t==="change")return n}var Vp=!1;if(_i){var Gu;if(_i){var Vu="oninput"in document;if(!Vu){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),Vu=typeof jp.oninput=="function"}Gu=Vu}else Gu=!1;Vp=Gu&&(!document.documentMode||9<document.documentMode)}function kp(){Uo&&(Uo.detachEvent("onpropertychange",Xp),Lo=Uo=null)}function Xp(t){if(t.propertyName==="value"&&Zl(Lo)){var n=[];Hp(n,Lo,t,si(t)),Eo(yx,n)}}function Sx(t,n,a){t==="focusin"?(kp(),Uo=n,Lo=a,Uo.attachEvent("onpropertychange",Xp)):t==="focusout"&&kp()}function Mx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zl(Lo)}function bx(t,n){if(t==="click")return Zl(n)}function Ex(t,n){if(t==="input"||t==="change")return Zl(n)}function Tx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Mi=typeof Object.is=="function"?Object.is:Tx;function Oo(t,n){if(Mi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!zt.call(n,u)||!Mi(t[u],n[u]))return!1}return!0}function qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wp(t,n){var a=qp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qp(a)}}function Yp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Yp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Zp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=wn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=wn(t.document)}return n}function ju(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ax=_i&&"documentMode"in document&&11>=document.documentMode,Sr=null,ku=null,Po=null,Xu=!1;function Kp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xu||Sr==null||Sr!==wn(o)||(o=Sr,"selectionStart"in o&&ju(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Po&&Oo(Po,o)||(Po=o,o=Oc(ku,"onSelect"),0<o.length&&(n=new Qe("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Sr)))}function Is(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Mr={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionrun:Is("Transition","TransitionRun"),transitionstart:Is("Transition","TransitionStart"),transitioncancel:Is("Transition","TransitionCancel"),transitionend:Is("Transition","TransitionEnd")},qu={},Qp={};_i&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function Bs(t){if(qu[t])return qu[t];if(!Mr[t])return t;var n=Mr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Qp)return qu[t]=n[a];return t}var Jp=Bs("animationend"),$p=Bs("animationiteration"),em=Bs("animationstart"),Rx=Bs("transitionrun"),Cx=Bs("transitionstart"),wx=Bs("transitioncancel"),tm=Bs("transitionend"),nm=new Map,Wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wu.push("scrollEnd");function Xi(t,n){nm.set(t,n),gi(n,[t])}var im=new WeakMap;function Li(t,n){if(typeof t=="object"&&t!==null){var a=im.get(t);return a!==void 0?a:(n={value:t,source:n,stack:nn(n)},im.set(t,n),n)}return{value:t,source:n,stack:nn(n)}}var Oi=[],br=0,Yu=0;function Kl(){for(var t=br,n=Yu=br=0;n<t;){var a=Oi[n];Oi[n++]=null;var o=Oi[n];Oi[n++]=null;var u=Oi[n];Oi[n++]=null;var f=Oi[n];if(Oi[n++]=null,o!==null&&u!==null){var b=o.pending;b===null?u.next=u:(u.next=b.next,b.next=u),o.pending=u}f!==0&&am(a,u,f)}}function Ql(t,n,a,o){Oi[br++]=t,Oi[br++]=n,Oi[br++]=a,Oi[br++]=o,Yu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Zu(t,n,a,o){return Ql(t,n,a,o),Jl(t)}function Er(t,n){return Ql(t,null,null,n),Jl(t)}function am(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-q(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Jl(t){if(50<rl)throw rl=0,nh=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Tr={};function Dx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bi(t,n,a,o){return new Dx(t,n,a,o)}function Ku(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Aa(t,n){var a=t.alternate;return a===null?(a=bi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function sm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function $l(t,n,a,o,u,f){var b=0;if(o=t,typeof t=="function")Ku(t)&&(b=1);else if(typeof t=="string")b=Uy(t,a,ee.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=bi(31,a,n,u),t.elementType=U,t.lanes=f,t;case E:return Fs(a.children,u,f,n);case w:b=8,u|=24;break;case y:return t=bi(12,a,n,u|2),t.elementType=y,t.lanes=f,t;case F:return t=bi(13,a,n,u),t.elementType=F,t.lanes=f,t;case I:return t=bi(19,a,n,u),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case g:case L:b=10;break e;case O:b=9;break e;case N:b=11;break e;case V:b=14;break e;case B:b=16,o=null;break e}b=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=bi(b,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function Fs(t,n,a,o){return t=bi(7,t,o,n),t.lanes=a,t}function Qu(t,n,a){return t=bi(6,t,null,n),t.lanes=a,t}function Ju(t,n,a){return n=bi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ar=[],Rr=0,ec=null,tc=0,Pi=[],zi=0,Hs=null,Ra=1,Ca="";function Gs(t,n){Ar[Rr++]=tc,Ar[Rr++]=ec,ec=t,tc=n}function rm(t,n,a){Pi[zi++]=Ra,Pi[zi++]=Ca,Pi[zi++]=Hs,Hs=t;var o=Ra;t=Ca;var u=32-q(o)-1;o&=~(1<<u),a+=1;var f=32-q(n)+u;if(30<f){var b=u-u%5;f=(o&(1<<b)-1).toString(32),o>>=b,u-=b,Ra=1<<32-q(n)+u|a<<u|o,Ca=f+t}else Ra=1<<f|a<<u|o,Ca=t}function $u(t){t.return!==null&&(Gs(t,1),rm(t,1,0))}function ef(t){for(;t===ec;)ec=Ar[--Rr],Ar[Rr]=null,tc=Ar[--Rr],Ar[Rr]=null;for(;t===Hs;)Hs=Pi[--zi],Pi[zi]=null,Ca=Pi[--zi],Pi[zi]=null,Ra=Pi[--zi],Pi[zi]=null}var $n=null,gn=null,jt=!1,Vs=null,la=!1,tf=Error(s(519));function js(t){var n=Error(s(418,""));throw Bo(Li(n,t)),tf}function om(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[Sn]=t,n[En]=o,a){case"dialog":Dt("cancel",n),Dt("close",n);break;case"iframe":case"object":case"embed":Dt("load",n);break;case"video":case"audio":for(a=0;a<ll.length;a++)Dt(ll[a],n);break;case"source":Dt("error",n);break;case"img":case"image":case"link":Dt("error",n),Dt("load",n);break;case"details":Dt("toggle",n);break;case"input":Dt("invalid",n),Wt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Kt(n);break;case"select":Dt("invalid",n);break;case"textarea":Dt("invalid",n),Tn(n,o.value,o.defaultValue,o.children),Kt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||E0(n.textContent,a)?(o.popover!=null&&(Dt("beforetoggle",n),Dt("toggle",n)),o.onScroll!=null&&Dt("scroll",n),o.onScrollEnd!=null&&Dt("scrollend",n),o.onClick!=null&&(n.onclick=Pc),n=!0):n=!1,n||js(t)}function lm(t){for($n=t.return;$n;)switch($n.tag){case 5:case 13:la=!1;return;case 27:case 3:la=!0;return;default:$n=$n.return}}function zo(t){if(t!==$n)return!1;if(!jt)return lm(t),jt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vh(t.type,t.memoizedProps)),a=!a),a&&gn&&js(t),lm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){gn=Wi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}gn=null}}else n===27?(n=gn,ds(t.type)?(t=Mh,Mh=null,gn=t):gn=n):gn=$n?Wi(t.stateNode.nextSibling):null;return!0}function Io(){gn=$n=null,jt=!1}function cm(){var t=Vs;return t!==null&&(li===null?li=t:li.push.apply(li,t),Vs=null),t}function Bo(t){Vs===null?Vs=[t]:Vs.push(t)}var nf=ae(null),ks=null,wa=null;function Ja(t,n,a){Re(nf,n._currentValue),n._currentValue=a}function Da(t){t._currentValue=nf.current,Ee(nf)}function af(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function sf(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var b=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var j=0;j<n.length;j++)if(R.context===n[j]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),af(f.return,a,t),o||(b=null);break e}f=R.next}}else if(u.tag===18){if(b=u.return,b===null)throw Error(s(341));b.lanes|=a,f=b.alternate,f!==null&&(f.lanes|=a),af(b,a,t),b=null}else b=u.child;if(b!==null)b.return=u;else for(b=u;b!==null;){if(b===t){b=null;break}if(u=b.sibling,u!==null){u.return=b.return,b=u;break}b=b.return}u=b}}function Fo(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var b=u.alternate;if(b===null)throw Error(s(387));if(b=b.memoizedProps,b!==null){var R=u.type;Mi(u.pendingProps.value,b.value)||(t!==null?t.push(R):t=[R])}}else if(u===Ne.current){if(b=u.alternate,b===null)throw Error(s(387));b.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(pl):t=[pl])}u=u.return}t!==null&&sf(n,t,a,o),n.flags|=262144}function nc(t){for(t=t.firstContext;t!==null;){if(!Mi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Xs(t){ks=t,wa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function qn(t){return um(ks,t)}function ic(t,n){return ks===null&&Xs(t),um(t,n)}function um(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},wa===null){if(t===null)throw Error(s(308));wa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else wa=wa.next=n;return a}var Nx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Ux=r.unstable_scheduleCallback,Lx=r.unstable_NormalPriority,Dn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rf(){return{controller:new Nx,data:new Map,refCount:0}}function Ho(t){t.refCount--,t.refCount===0&&Ux(Lx,function(){t.controller.abort()})}var Go=null,of=0,Cr=0,wr=null;function Ox(t,n){if(Go===null){var a=Go=[];of=0,Cr=ch(),wr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return of++,n.then(fm,fm),n}function fm(){if(--of===0&&Go!==null){wr!==null&&(wr.status="fulfilled");var t=Go;Go=null,Cr=0,wr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Px(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var hm=G.S;G.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ox(t,n),hm!==null&&hm(t,n)};var qs=ae(null);function lf(){var t=qs.current;return t!==null?t:sn.pooledCache}function ac(t,n){n===null?Re(qs,qs.current):Re(qs,n.pool)}function dm(){var t=lf();return t===null?null:{parent:Dn._currentValue,pool:t}}var Vo=Error(s(460)),pm=Error(s(474)),sc=Error(s(542)),cf={then:function(){}};function mm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function rc(){}function gm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(rc,rc),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,vm(t),t;default:if(typeof n.status=="string")n.then(rc,rc);else{if(t=sn,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,vm(t),t}throw jo=n,Vo}}var jo=null;function _m(){if(jo===null)throw Error(s(459));var t=jo;return jo=null,t}function vm(t){if(t===Vo||t===sc)throw Error(s(483))}var $a=!1;function uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function es(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ts(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Yt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Jl(t),am(t,null,a),n}return Ql(t,o,n,a),Jl(t)}function ko(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,lt(t,a)}}function hf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=b:f=f.next=b,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var df=!1;function Xo(){if(df){var t=wr;if(t!==null)throw t}}function qo(t,n,a,o){df=!1;var u=t.updateQueue;$a=!1;var f=u.firstBaseUpdate,b=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var j=R,re=j.next;j.next=null,b===null?f=re:b.next=re,b=j;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,R=xe.lastBaseUpdate,R!==b&&(R===null?xe.firstBaseUpdate=re:R.next=re,xe.lastBaseUpdate=j))}if(f!==null){var Ae=u.baseState;b=0,xe=re=j=null,R=f;do{var ce=R.lane&-536870913,de=ce!==R.lane;if(de?(Bt&ce)===ce:(o&ce)===ce){ce!==0&&ce===Cr&&(df=!0),xe!==null&&(xe=xe.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var ht=t,ct=R;ce=n;var $t=a;switch(ct.tag){case 1:if(ht=ct.payload,typeof ht=="function"){Ae=ht.call($t,Ae,ce);break e}Ae=ht;break e;case 3:ht.flags=ht.flags&-65537|128;case 0:if(ht=ct.payload,ce=typeof ht=="function"?ht.call($t,Ae,ce):ht,ce==null)break e;Ae=_({},Ae,ce);break e;case 2:$a=!0}}ce=R.callback,ce!==null&&(t.flags|=64,de&&(t.flags|=8192),de=u.callbacks,de===null?u.callbacks=[ce]:de.push(ce))}else de={lane:ce,tag:R.tag,payload:R.payload,callback:R.callback,next:null},xe===null?(re=xe=de,j=Ae):xe=xe.next=de,b|=ce;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;de=R,R=de.next,de.next=null,u.lastBaseUpdate=de,u.shared.pending=null}}while(!0);xe===null&&(j=Ae),u.baseState=j,u.firstBaseUpdate=re,u.lastBaseUpdate=xe,f===null&&(u.shared.lanes=0),cs|=b,t.lanes=b,t.memoizedState=Ae}}function xm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function ym(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)xm(a[t],n)}var Dr=ae(null),oc=ae(0);function Sm(t,n){t=Ia,Re(oc,t),Re(Dr,n),Ia=t|n.baseLanes}function pf(){Re(oc,Ia),Re(Dr,Dr.current)}function mf(){Ia=oc.current,Ee(Dr),Ee(oc)}var ns=0,bt=null,Qt=null,An=null,lc=!1,Nr=!1,Ws=!1,cc=0,Wo=0,Ur=null,zx=0;function Mn(){throw Error(s(321))}function gf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Mi(t[a],n[a]))return!1;return!0}function _f(t,n,a,o,u,f){return ns=f,bt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,G.H=t===null||t.memoizedState===null?ag:sg,Ws=!1,f=a(o,u),Ws=!1,Nr&&(f=bm(n,a,o,u)),Mm(t),f}function Mm(t){G.H=mc;var n=Qt!==null&&Qt.next!==null;if(ns=0,An=Qt=bt=null,lc=!1,Wo=0,Ur=null,n)throw Error(s(300));t===null||zn||(t=t.dependencies,t!==null&&nc(t)&&(zn=!0))}function bm(t,n,a,o){bt=t;var u=0;do{if(Nr&&(Ur=null),Wo=0,Nr=!1,25<=u)throw Error(s(301));if(u+=1,An=Qt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}G.H=jx,f=n(a,o)}while(Nr);return f}function Ix(){var t=G.H,n=t.useState()[0];return n=typeof n.then=="function"?Yo(n):n,t=t.useState()[0],(Qt!==null?Qt.memoizedState:null)!==t&&(bt.flags|=1024),n}function vf(){var t=cc!==0;return cc=0,t}function xf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function yf(t){if(lc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}lc=!1}ns=0,An=Qt=bt=null,Nr=!1,Wo=cc=0,Ur=null}function ri(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?bt.memoizedState=An=t:An=An.next=t,An}function Rn(){if(Qt===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var n=An===null?bt.memoizedState:An.next;if(n!==null)An=n,Qt=t;else{if(t===null)throw bt.alternate===null?Error(s(467)):Error(s(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},An===null?bt.memoizedState=An=t:An=An.next=t}return An}function Sf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yo(t){var n=Wo;return Wo+=1,Ur===null&&(Ur=[]),t=gm(Ur,t,n),n=bt,(An===null?n.memoizedState:An.next)===null&&(n=n.alternate,G.H=n===null||n.memoizedState===null?ag:sg),t}function uc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Yo(t);if(t.$$typeof===L)return qn(t)}throw Error(s(438,String(t)))}function Mf(t){var n=null,a=bt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=bt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Sf(),bt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=C;return n.index++,a}function Na(t,n){return typeof n=="function"?n(t):n}function fc(t){var n=Rn();return bf(n,Qt,t)}function bf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var b=u.next;u.next=f.next,f.next=b}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=b=null,j=null,re=n,xe=!1;do{var Ae=re.lane&-536870913;if(Ae!==re.lane?(Bt&Ae)===Ae:(ns&Ae)===Ae){var ce=re.revertLane;if(ce===0)j!==null&&(j=j.next={lane:0,revertLane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),Ae===Cr&&(xe=!0);else if((ns&ce)===ce){re=re.next,ce===Cr&&(xe=!0);continue}else Ae={lane:0,revertLane:re.revertLane,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},j===null?(R=j=Ae,b=f):j=j.next=Ae,bt.lanes|=ce,cs|=ce;Ae=re.action,Ws&&a(f,Ae),f=re.hasEagerState?re.eagerState:a(f,Ae)}else ce={lane:Ae,revertLane:re.revertLane,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},j===null?(R=j=ce,b=f):j=j.next=ce,bt.lanes|=Ae,cs|=Ae;re=re.next}while(re!==null&&re!==n);if(j===null?b=f:j.next=R,!Mi(f,t.memoizedState)&&(zn=!0,xe&&(a=wr,a!==null)))throw a;t.memoizedState=f,t.baseState=b,t.baseQueue=j,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Ef(t){var n=Rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do f=t(f,b.action),b=b.next;while(b!==u);Mi(f,n.memoizedState)||(zn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Em(t,n,a){var o=bt,u=Rn(),f=jt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var b=!Mi((Qt||u).memoizedState,a);b&&(u.memoizedState=a,zn=!0),u=u.queue;var R=Rm.bind(null,o,u,t);if(Zo(2048,8,R,[t]),u.getSnapshot!==n||b||An!==null&&An.memoizedState.tag&1){if(o.flags|=2048,Lr(9,hc(),Am.bind(null,o,u,a,n),null),sn===null)throw Error(s(349));f||(ns&124)!==0||Tm(o,n,a)}return a}function Tm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=bt.updateQueue,n===null?(n=Sf(),bt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Am(t,n,a,o){n.value=a,n.getSnapshot=o,Cm(n)&&wm(t)}function Rm(t,n,a){return a(function(){Cm(n)&&wm(t)})}function Cm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Mi(t,a)}catch{return!0}}function wm(t){var n=Er(t,2);n!==null&&Ci(n,t,2)}function Tf(t){var n=ri();if(typeof t=="function"){var a=t;if(t=a(),Ws){Ue(!0);try{a()}finally{Ue(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:t},n}function Dm(t,n,a,o){return t.baseState=a,bf(t,Qt,typeof o=="function"?o:Na)}function Bx(t,n,a,o,u){if(pc(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){f.listeners.push(b)}};G.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Nm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Nm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=G.T,b={};G.T=b;try{var R=a(u,o),j=G.S;j!==null&&j(b,R),Um(t,n,R)}catch(re){Af(t,n,re)}finally{G.T=f}}else try{f=a(u,o),Um(t,n,f)}catch(re){Af(t,n,re)}}function Um(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Lm(t,n,o)},function(o){return Af(t,n,o)}):Lm(t,n,a)}function Lm(t,n,a){n.status="fulfilled",n.value=a,Om(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Nm(t,a)))}function Af(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Om(n),n=n.next;while(n!==o)}t.action=null}function Om(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Pm(t,n){return n}function zm(t,n){if(jt){var a=sn.formState;if(a!==null){e:{var o=bt;if(jt){if(gn){t:{for(var u=gn,f=la;u.nodeType!==8;){if(!f){u=null;break t}if(u=Wi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){gn=Wi(u.nextSibling),o=u.data==="F!";break e}}js(o)}o=!1}o&&(n=a[0])}}return a=ri(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pm,lastRenderedState:n},a.queue=o,a=tg.bind(null,bt,o),o.dispatch=a,o=Tf(!1),f=Nf.bind(null,bt,!1,o.queue),o=ri(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Bx.bind(null,bt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Im(t){var n=Rn();return Bm(n,Qt,t)}function Bm(t,n,a){if(n=bf(t,n,Pm)[0],t=fc(Na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Yo(n)}catch(b){throw b===Vo?sc:b}else o=n;n=Rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(bt.flags|=2048,Lr(9,hc(),Fx.bind(null,u,a),null)),[o,f,t]}function Fx(t,n){t.action=n}function Fm(t){var n=Rn(),a=Qt;if(a!==null)return Bm(n,a,t);Rn(),n=n.memoizedState,a=Rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Lr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=bt.updateQueue,n===null&&(n=Sf(),bt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function hc(){return{destroy:void 0,resource:void 0}}function Hm(){return Rn().memoizedState}function dc(t,n,a,o){var u=ri();o=o===void 0?null:o,bt.flags|=t,u.memoizedState=Lr(1|n,hc(),a,o)}function Zo(t,n,a,o){var u=Rn();o=o===void 0?null:o;var f=u.memoizedState.inst;Qt!==null&&o!==null&&gf(o,Qt.memoizedState.deps)?u.memoizedState=Lr(n,f,a,o):(bt.flags|=t,u.memoizedState=Lr(1|n,f,a,o))}function Gm(t,n){dc(8390656,8,t,n)}function Vm(t,n){Zo(2048,8,t,n)}function jm(t,n){return Zo(4,2,t,n)}function km(t,n){return Zo(4,4,t,n)}function Xm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function qm(t,n,a){a=a!=null?a.concat([t]):null,Zo(4,4,Xm.bind(null,n,t),a)}function Rf(){}function Wm(t,n){var a=Rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&gf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Ym(t,n){var a=Rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&gf(n,o[1]))return o[0];if(o=t(),Ws){Ue(!0);try{t()}finally{Ue(!1)}}return a.memoizedState=[o,n],o}function Cf(t,n,a){return a===void 0||(ns&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Qg(),bt.lanes|=t,cs|=t,a)}function Zm(t,n,a,o){return Mi(a,n)?a:Dr.current!==null?(t=Cf(t,a,o),Mi(t,n)||(zn=!0),t):(ns&42)===0?(zn=!0,t.memoizedState=a):(t=Qg(),bt.lanes|=t,cs|=t,n)}function Km(t,n,a,o,u){var f=ne.p;ne.p=f!==0&&8>f?f:8;var b=G.T,R={};G.T=R,Nf(t,!1,n,a);try{var j=u(),re=G.S;if(re!==null&&re(R,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var xe=Px(j,o);Ko(t,n,xe,Ri(t))}else Ko(t,n,o,Ri(t))}catch(Ae){Ko(t,n,{then:function(){},status:"rejected",reason:Ae},Ri())}finally{ne.p=f,G.T=b}}function Hx(){}function wf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Qm(t).queue;Km(t,u,n,Z,a===null?Hx:function(){return Jm(t),a(o)})}function Qm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Jm(t){var n=Qm(t).next.queue;Ko(t,n,{},Ri())}function Df(){return qn(pl)}function $m(){return Rn().memoizedState}function eg(){return Rn().memoizedState}function Gx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ri();t=es(a);var o=ts(n,t,a);o!==null&&(Ci(o,n,a),ko(o,n,a)),n={cache:rf()},t.payload=n;return}n=n.return}}function Vx(t,n,a){var o=Ri();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},pc(t)?ng(n,a):(a=Zu(t,n,a,o),a!==null&&(Ci(a,t,o),ig(a,n,o)))}function tg(t,n,a){var o=Ri();Ko(t,n,a,o)}function Ko(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(pc(t))ng(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var b=n.lastRenderedState,R=f(b,a);if(u.hasEagerState=!0,u.eagerState=R,Mi(R,b))return Ql(t,n,u,0),sn===null&&Kl(),!1}catch{}finally{}if(a=Zu(t,n,u,o),a!==null)return Ci(a,t,o),ig(a,n,o),!0}return!1}function Nf(t,n,a,o){if(o={lane:2,revertLane:ch(),action:o,hasEagerState:!1,eagerState:null,next:null},pc(t)){if(n)throw Error(s(479))}else n=Zu(t,a,o,2),n!==null&&Ci(n,t,2)}function pc(t){var n=t.alternate;return t===bt||n!==null&&n===bt}function ng(t,n){Nr=lc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function ig(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,lt(t,a)}}var mc={readContext:qn,use:uc,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useLayoutEffect:Mn,useInsertionEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useSyncExternalStore:Mn,useId:Mn,useHostTransitionStatus:Mn,useFormState:Mn,useActionState:Mn,useOptimistic:Mn,useMemoCache:Mn,useCacheRefresh:Mn},ag={readContext:qn,use:uc,useCallback:function(t,n){return ri().memoizedState=[t,n===void 0?null:n],t},useContext:qn,useEffect:Gm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,dc(4194308,4,Xm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return dc(4194308,4,t,n)},useInsertionEffect:function(t,n){dc(4,2,t,n)},useMemo:function(t,n){var a=ri();n=n===void 0?null:n;var o=t();if(Ws){Ue(!0);try{t()}finally{Ue(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=ri();if(a!==void 0){var u=a(n);if(Ws){Ue(!0);try{a(n)}finally{Ue(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Vx.bind(null,bt,t),[o.memoizedState,t]},useRef:function(t){var n=ri();return t={current:t},n.memoizedState=t},useState:function(t){t=Tf(t);var n=t.queue,a=tg.bind(null,bt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Rf,useDeferredValue:function(t,n){var a=ri();return Cf(a,t,n)},useTransition:function(){var t=Tf(!1);return t=Km.bind(null,bt,t.queue,!0,!1),ri().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=bt,u=ri();if(jt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),sn===null)throw Error(s(349));(Bt&124)!==0||Tm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Gm(Rm.bind(null,o,f,t),[t]),o.flags|=2048,Lr(9,hc(),Am.bind(null,o,f,a,n),null),a},useId:function(){var t=ri(),n=sn.identifierPrefix;if(jt){var a=Ca,o=Ra;a=(o&~(1<<32-q(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=cc++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=zx++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Df,useFormState:zm,useActionState:zm,useOptimistic:function(t){var n=ri();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Nf.bind(null,bt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Mf,useCacheRefresh:function(){return ri().memoizedState=Gx.bind(null,bt)}},sg={readContext:qn,use:uc,useCallback:Wm,useContext:qn,useEffect:Vm,useImperativeHandle:qm,useInsertionEffect:jm,useLayoutEffect:km,useMemo:Ym,useReducer:fc,useRef:Hm,useState:function(){return fc(Na)},useDebugValue:Rf,useDeferredValue:function(t,n){var a=Rn();return Zm(a,Qt.memoizedState,t,n)},useTransition:function(){var t=fc(Na)[0],n=Rn().memoizedState;return[typeof t=="boolean"?t:Yo(t),n]},useSyncExternalStore:Em,useId:$m,useHostTransitionStatus:Df,useFormState:Im,useActionState:Im,useOptimistic:function(t,n){var a=Rn();return Dm(a,Qt,t,n)},useMemoCache:Mf,useCacheRefresh:eg},jx={readContext:qn,use:uc,useCallback:Wm,useContext:qn,useEffect:Vm,useImperativeHandle:qm,useInsertionEffect:jm,useLayoutEffect:km,useMemo:Ym,useReducer:Ef,useRef:Hm,useState:function(){return Ef(Na)},useDebugValue:Rf,useDeferredValue:function(t,n){var a=Rn();return Qt===null?Cf(a,t,n):Zm(a,Qt.memoizedState,t,n)},useTransition:function(){var t=Ef(Na)[0],n=Rn().memoizedState;return[typeof t=="boolean"?t:Yo(t),n]},useSyncExternalStore:Em,useId:$m,useHostTransitionStatus:Df,useFormState:Fm,useActionState:Fm,useOptimistic:function(t,n){var a=Rn();return Qt!==null?Dm(a,Qt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Mf,useCacheRefresh:eg},Or=null,Qo=0;function gc(t){var n=Qo;return Qo+=1,Or===null&&(Or=[]),gm(Or,t,n)}function Jo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function _c(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function rg(t){var n=t._init;return n(t._payload)}function og(t){function n(J,W){if(t){var se=J.deletions;se===null?(J.deletions=[W],J.flags|=16):se.push(W)}}function a(J,W){if(!t)return null;for(;W!==null;)n(J,W),W=W.sibling;return null}function o(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function u(J,W){return J=Aa(J,W),J.index=0,J.sibling=null,J}function f(J,W,se){return J.index=se,t?(se=J.alternate,se!==null?(se=se.index,se<W?(J.flags|=67108866,W):se):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function b(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function R(J,W,se,be){return W===null||W.tag!==6?(W=Qu(se,J.mode,be),W.return=J,W):(W=u(W,se),W.return=J,W)}function j(J,W,se,be){var qe=se.type;return qe===E?xe(J,W,se.props.children,be,se.key):W!==null&&(W.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===B&&rg(qe)===W.type)?(W=u(W,se.props),Jo(W,se),W.return=J,W):(W=$l(se.type,se.key,se.props,null,J.mode,be),Jo(W,se),W.return=J,W)}function re(J,W,se,be){return W===null||W.tag!==4||W.stateNode.containerInfo!==se.containerInfo||W.stateNode.implementation!==se.implementation?(W=Ju(se,J.mode,be),W.return=J,W):(W=u(W,se.children||[]),W.return=J,W)}function xe(J,W,se,be,qe){return W===null||W.tag!==7?(W=Fs(se,J.mode,be,qe),W.return=J,W):(W=u(W,se),W.return=J,W)}function Ae(J,W,se){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Qu(""+W,J.mode,se),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return se=$l(W.type,W.key,W.props,null,J.mode,se),Jo(se,W),se.return=J,se;case M:return W=Ju(W,J.mode,se),W.return=J,W;case B:var be=W._init;return W=be(W._payload),Ae(J,W,se)}if(ge(W)||$(W))return W=Fs(W,J.mode,se,null),W.return=J,W;if(typeof W.then=="function")return Ae(J,gc(W),se);if(W.$$typeof===L)return Ae(J,ic(J,W),se);_c(J,W)}return null}function ce(J,W,se,be){var qe=W!==null?W.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return qe!==null?null:R(J,W,""+se,be);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case S:return se.key===qe?j(J,W,se,be):null;case M:return se.key===qe?re(J,W,se,be):null;case B:return qe=se._init,se=qe(se._payload),ce(J,W,se,be)}if(ge(se)||$(se))return qe!==null?null:xe(J,W,se,be,null);if(typeof se.then=="function")return ce(J,W,gc(se),be);if(se.$$typeof===L)return ce(J,W,ic(J,se),be);_c(J,se)}return null}function de(J,W,se,be,qe){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return J=J.get(se)||null,R(W,J,""+be,qe);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case S:return J=J.get(be.key===null?se:be.key)||null,j(W,J,be,qe);case M:return J=J.get(be.key===null?se:be.key)||null,re(W,J,be,qe);case B:var Tt=be._init;return be=Tt(be._payload),de(J,W,se,be,qe)}if(ge(be)||$(be))return J=J.get(se)||null,xe(W,J,be,qe,null);if(typeof be.then=="function")return de(J,W,se,gc(be),qe);if(be.$$typeof===L)return de(J,W,se,ic(W,be),qe);_c(W,be)}return null}function ht(J,W,se,be){for(var qe=null,Tt=null,it=W,ut=W=0,Bn=null;it!==null&&ut<se.length;ut++){it.index>ut?(Bn=it,it=null):Bn=it.sibling;var Gt=ce(J,it,se[ut],be);if(Gt===null){it===null&&(it=Bn);break}t&&it&&Gt.alternate===null&&n(J,it),W=f(Gt,W,ut),Tt===null?qe=Gt:Tt.sibling=Gt,Tt=Gt,it=Bn}if(ut===se.length)return a(J,it),jt&&Gs(J,ut),qe;if(it===null){for(;ut<se.length;ut++)it=Ae(J,se[ut],be),it!==null&&(W=f(it,W,ut),Tt===null?qe=it:Tt.sibling=it,Tt=it);return jt&&Gs(J,ut),qe}for(it=o(it);ut<se.length;ut++)Bn=de(it,J,ut,se[ut],be),Bn!==null&&(t&&Bn.alternate!==null&&it.delete(Bn.key===null?ut:Bn.key),W=f(Bn,W,ut),Tt===null?qe=Bn:Tt.sibling=Bn,Tt=Bn);return t&&it.forEach(function(vs){return n(J,vs)}),jt&&Gs(J,ut),qe}function ct(J,W,se,be){if(se==null)throw Error(s(151));for(var qe=null,Tt=null,it=W,ut=W=0,Bn=null,Gt=se.next();it!==null&&!Gt.done;ut++,Gt=se.next()){it.index>ut?(Bn=it,it=null):Bn=it.sibling;var vs=ce(J,it,Gt.value,be);if(vs===null){it===null&&(it=Bn);break}t&&it&&vs.alternate===null&&n(J,it),W=f(vs,W,ut),Tt===null?qe=vs:Tt.sibling=vs,Tt=vs,it=Bn}if(Gt.done)return a(J,it),jt&&Gs(J,ut),qe;if(it===null){for(;!Gt.done;ut++,Gt=se.next())Gt=Ae(J,Gt.value,be),Gt!==null&&(W=f(Gt,W,ut),Tt===null?qe=Gt:Tt.sibling=Gt,Tt=Gt);return jt&&Gs(J,ut),qe}for(it=o(it);!Gt.done;ut++,Gt=se.next())Gt=de(it,J,ut,Gt.value,be),Gt!==null&&(t&&Gt.alternate!==null&&it.delete(Gt.key===null?ut:Gt.key),W=f(Gt,W,ut),Tt===null?qe=Gt:Tt.sibling=Gt,Tt=Gt);return t&&it.forEach(function(ky){return n(J,ky)}),jt&&Gs(J,ut),qe}function $t(J,W,se,be){if(typeof se=="object"&&se!==null&&se.type===E&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case S:e:{for(var qe=se.key;W!==null;){if(W.key===qe){if(qe=se.type,qe===E){if(W.tag===7){a(J,W.sibling),be=u(W,se.props.children),be.return=J,J=be;break e}}else if(W.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===B&&rg(qe)===W.type){a(J,W.sibling),be=u(W,se.props),Jo(be,se),be.return=J,J=be;break e}a(J,W);break}else n(J,W);W=W.sibling}se.type===E?(be=Fs(se.props.children,J.mode,be,se.key),be.return=J,J=be):(be=$l(se.type,se.key,se.props,null,J.mode,be),Jo(be,se),be.return=J,J=be)}return b(J);case M:e:{for(qe=se.key;W!==null;){if(W.key===qe)if(W.tag===4&&W.stateNode.containerInfo===se.containerInfo&&W.stateNode.implementation===se.implementation){a(J,W.sibling),be=u(W,se.children||[]),be.return=J,J=be;break e}else{a(J,W);break}else n(J,W);W=W.sibling}be=Ju(se,J.mode,be),be.return=J,J=be}return b(J);case B:return qe=se._init,se=qe(se._payload),$t(J,W,se,be)}if(ge(se))return ht(J,W,se,be);if($(se)){if(qe=$(se),typeof qe!="function")throw Error(s(150));return se=qe.call(se),ct(J,W,se,be)}if(typeof se.then=="function")return $t(J,W,gc(se),be);if(se.$$typeof===L)return $t(J,W,ic(J,se),be);_c(J,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,W!==null&&W.tag===6?(a(J,W.sibling),be=u(W,se),be.return=J,J=be):(a(J,W),be=Qu(se,J.mode,be),be.return=J,J=be),b(J)):a(J,W)}return function(J,W,se,be){try{Qo=0;var qe=$t(J,W,se,be);return Or=null,qe}catch(it){if(it===Vo||it===sc)throw it;var Tt=bi(29,it,null,J.mode);return Tt.lanes=be,Tt.return=J,Tt}finally{}}}var Pr=og(!0),lg=og(!1),Ii=ae(null),ca=null;function is(t){var n=t.alternate;Re(Nn,Nn.current&1),Re(Ii,t),ca===null&&(n===null||Dr.current!==null||n.memoizedState!==null)&&(ca=t)}function cg(t){if(t.tag===22){if(Re(Nn,Nn.current),Re(Ii,t),ca===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(ca=t)}}else as()}function as(){Re(Nn,Nn.current),Re(Ii,Ii.current)}function Ua(t){Ee(Ii),ca===t&&(ca=null),Ee(Nn)}var Nn=ae(0);function vc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Sh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Uf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Lf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Ri(),u=es(o);u.payload=n,a!=null&&(u.callback=a),n=ts(t,u,o),n!==null&&(Ci(n,t,o),ko(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Ri(),u=es(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ts(t,u,o),n!==null&&(Ci(n,t,o),ko(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Ri(),o=es(a);o.tag=2,n!=null&&(o.callback=n),n=ts(t,o,a),n!==null&&(Ci(n,t,a),ko(n,t,a))}};function ug(t,n,a,o,u,f,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,b):n.prototype&&n.prototype.isPureReactComponent?!Oo(a,o)||!Oo(u,f):!0}function fg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Lf.enqueueReplaceState(n,n.state,null)}function Ys(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var xc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function hg(t){xc(t)}function dg(t){console.error(t)}function pg(t){xc(t)}function yc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function mg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Of(t,n,a){return a=es(a),a.tag=3,a.payload={element:null},a.callback=function(){yc(t,n)},a}function gg(t){return t=es(t),t.tag=3,t}function _g(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){mg(n,a,o)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){mg(n,a,o),typeof u!="function"&&(us===null?us=new Set([this]):us.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function kx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Fo(n,a,u,!0),a=Ii.current,a!==null){switch(a.tag){case 13:return ca===null?ah():a.alternate===null&&_n===0&&(_n=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===cf?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),rh(t,o,u)),!1;case 22:return a.flags|=65536,o===cf?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),rh(t,o,u)),!1}throw Error(s(435,a.tag))}return rh(t,o,u),ah(),!1}if(jt)return n=Ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==tf&&(t=Error(s(422),{cause:o}),Bo(Li(t,a)))):(o!==tf&&(n=Error(s(423),{cause:o}),Bo(Li(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Li(o,a),u=Of(t.stateNode,o,u),hf(t,u),_n!==4&&(_n=2)),!1;var f=Error(s(520),{cause:o});if(f=Li(f,a),sl===null?sl=[f]:sl.push(f),_n!==4&&(_n=2),n===null)return!0;o=Li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Of(a.stateNode,o,t),hf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(us===null||!us.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=gg(u),_g(u,t,a,o),hf(a,u),!1}a=a.return}while(a!==null);return!1}var vg=Error(s(461)),zn=!1;function Vn(t,n,a,o){n.child=t===null?lg(n,null,a,o):Pr(n,t.child,a,o)}function xg(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var b={};for(var R in o)R!=="ref"&&(b[R]=o[R])}else b=o;return Xs(n),o=_f(t,n,a,b,f,u),R=vf(),t!==null&&!zn?(xf(t,n,u),La(t,n,u)):(jt&&R&&$u(n),n.flags|=1,Vn(t,n,o,u),n.child)}function yg(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Ku(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Sg(t,n,f,o,u)):(t=$l(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Vf(t,u)){var b=f.memoizedProps;if(a=a.compare,a=a!==null?a:Oo,a(b,o)&&t.ref===n.ref)return La(t,n,u)}return n.flags|=1,t=Aa(f,o),t.ref=n.ref,t.return=n,n.child=t}function Sg(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(Oo(f,o)&&t.ref===n.ref)if(zn=!1,n.pendingProps=o=f,Vf(t,u))(t.flags&131072)!==0&&(zn=!0);else return n.lanes=t.lanes,La(t,n,u)}return Pf(t,n,a,o,u)}function Mg(t,n,a){var o=n.pendingProps,u=o.children,f=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,t!==null){for(u=n.child=t.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return bg(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ac(n,f!==null?f.cachePool:null),f!==null?Sm(n,f):pf(),cg(n);else return n.lanes=n.childLanes=536870912,bg(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(ac(n,f.cachePool),Sm(n,f),as(),n.memoizedState=null):(t!==null&&ac(n,null),pf(),as());return Vn(t,n,u,a),n.child}function bg(t,n,a,o){var u=lf();return u=u===null?null:{parent:Dn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&ac(n,null),pf(),cg(n),t!==null&&Fo(t,n,o,!0),null}function Sc(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Pf(t,n,a,o,u){return Xs(n),a=_f(t,n,a,o,void 0,u),o=vf(),t!==null&&!zn?(xf(t,n,u),La(t,n,u)):(jt&&o&&$u(n),n.flags|=1,Vn(t,n,a,u),n.child)}function Eg(t,n,a,o,u,f){return Xs(n),n.updateQueue=null,a=bm(n,o,a,u),Mm(t),o=vf(),t!==null&&!zn?(xf(t,n,f),La(t,n,f)):(jt&&o&&$u(n),n.flags|=1,Vn(t,n,a,f),n.child)}function Tg(t,n,a,o,u){if(Xs(n),n.stateNode===null){var f=Tr,b=a.contextType;typeof b=="object"&&b!==null&&(f=qn(b)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Lf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},uf(n),b=a.contextType,f.context=typeof b=="object"&&b!==null?qn(b):Tr,f.state=n.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(Uf(n,a,b,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(b=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),b!==f.state&&Lf.enqueueReplaceState(f,f.state,null),qo(n,o,f,u),Xo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,j=Ys(a,R);f.props=j;var re=f.context,xe=a.contextType;b=Tr,typeof xe=="object"&&xe!==null&&(b=qn(xe));var Ae=a.getDerivedStateFromProps;xe=typeof Ae=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,xe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||re!==b)&&fg(n,f,o,b),$a=!1;var ce=n.memoizedState;f.state=ce,qo(n,o,f,u),Xo(),re=n.memoizedState,R||ce!==re||$a?(typeof Ae=="function"&&(Uf(n,a,Ae,o),re=n.memoizedState),(j=$a||ug(n,a,j,o,ce,re,b))?(xe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=re),f.props=o,f.state=re,f.context=b,o=j):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,ff(t,n),b=n.memoizedProps,xe=Ys(a,b),f.props=xe,Ae=n.pendingProps,ce=f.context,re=a.contextType,j=Tr,typeof re=="object"&&re!==null&&(j=qn(re)),R=a.getDerivedStateFromProps,(re=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b!==Ae||ce!==j)&&fg(n,f,o,j),$a=!1,ce=n.memoizedState,f.state=ce,qo(n,o,f,u),Xo();var de=n.memoizedState;b!==Ae||ce!==de||$a||t!==null&&t.dependencies!==null&&nc(t.dependencies)?(typeof R=="function"&&(Uf(n,a,R,o),de=n.memoizedState),(xe=$a||ug(n,a,xe,o,ce,de,j)||t!==null&&t.dependencies!==null&&nc(t.dependencies))?(re||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,de,j),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,de,j)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||b===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=de),f.props=o,f.state=de,f.context=j,o=xe):(typeof f.componentDidUpdate!="function"||b===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Sc(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Pr(n,t.child,null,u),n.child=Pr(n,null,a,u)):Vn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=La(t,n,u),t}function Ag(t,n,a,o){return Io(),n.flags|=256,Vn(t,n,a,o),n.child}var zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function If(t){return{baseLanes:t,cachePool:dm()}}function Bf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Bi),t}function Rg(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,b;if((b=f)||(b=t!==null&&t.memoizedState===null?!1:(Nn.current&2)!==0),b&&(u=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,t===null){if(jt){if(u?is(n):as(),jt){var R=gn,j;if(j=R){e:{for(j=R,R=la;j.nodeType!==8;){if(!R){R=null;break e}if(j=Wi(j.nextSibling),j===null){R=null;break e}}R=j}R!==null?(n.memoizedState={dehydrated:R,treeContext:Hs!==null?{id:Ra,overflow:Ca}:null,retryLane:536870912,hydrationErrors:null},j=bi(18,null,null,0),j.stateNode=R,j.return=n,n.child=j,$n=n,gn=null,j=!0):j=!1}j||js(n)}if(R=n.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return Sh(R)?n.lanes=32:n.lanes=536870912,null;Ua(n)}return R=o.children,o=o.fallback,u?(as(),u=n.mode,R=Mc({mode:"hidden",children:R},u),o=Fs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,u=n.child,u.memoizedState=If(a),u.childLanes=Bf(t,b,a),n.memoizedState=zf,o):(is(n),Ff(n,R))}if(j=t.memoizedState,j!==null&&(R=j.dehydrated,R!==null)){if(f)n.flags&256?(is(n),n.flags&=-257,n=Hf(t,n,a)):n.memoizedState!==null?(as(),n.child=t.child,n.flags|=128,n=null):(as(),u=o.fallback,R=n.mode,o=Mc({mode:"visible",children:o.children},R),u=Fs(u,R,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Pr(n,t.child,null,a),o=n.child,o.memoizedState=If(a),o.childLanes=Bf(t,b,a),n.memoizedState=zf,n=u);else if(is(n),Sh(R)){if(b=R.nextSibling&&R.nextSibling.dataset,b)var re=b.dgst;b=re,o=Error(s(419)),o.stack="",o.digest=b,Bo({value:o,source:null,stack:null}),n=Hf(t,n,a)}else if(zn||Fo(t,n,a,!1),b=(a&t.childLanes)!==0,zn||b){if(b=sn,b!==null&&(o=a&-a,o=(o&42)!==0?1:Pt(o),o=(o&(b.suspendedLanes|a))!==0?0:o,o!==0&&o!==j.retryLane))throw j.retryLane=o,Er(t,o),Ci(b,t,o),vg;R.data==="$?"||ah(),n=Hf(t,n,a)}else R.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=j.treeContext,gn=Wi(R.nextSibling),$n=n,jt=!0,Vs=null,la=!1,t!==null&&(Pi[zi++]=Ra,Pi[zi++]=Ca,Pi[zi++]=Hs,Ra=t.id,Ca=t.overflow,Hs=n),n=Ff(n,o.children),n.flags|=4096);return n}return u?(as(),u=o.fallback,R=n.mode,j=t.child,re=j.sibling,o=Aa(j,{mode:"hidden",children:o.children}),o.subtreeFlags=j.subtreeFlags&65011712,re!==null?u=Aa(re,u):(u=Fs(u,R,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,R=t.child.memoizedState,R===null?R=If(a):(j=R.cachePool,j!==null?(re=Dn._currentValue,j=j.parent!==re?{parent:re,pool:re}:j):j=dm(),R={baseLanes:R.baseLanes|a,cachePool:j}),u.memoizedState=R,u.childLanes=Bf(t,b,a),n.memoizedState=zf,o):(is(n),a=t.child,t=a.sibling,a=Aa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(b=n.deletions,b===null?(n.deletions=[t],n.flags|=16):b.push(t)),n.child=a,n.memoizedState=null,a)}function Ff(t,n){return n=Mc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Mc(t,n){return t=bi(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Hf(t,n,a){return Pr(n,t.child,null,a),t=Ff(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Cg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),af(t.return,n,a)}function Gf(t,n,a,o,u){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function wg(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(Vn(t,n,o.children,a),o=Nn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cg(t,a,n);else if(t.tag===19)Cg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Re(Nn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&vc(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Gf(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&vc(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Gf(n,!0,a,null,f);break;case"together":Gf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function La(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),cs|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Fo(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Aa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Aa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Vf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&nc(t)))}function Xx(t,n,a){switch(n.tag){case 3:Pe(n,n.stateNode.containerInfo),Ja(n,Dn,t.memoizedState.cache),Io();break;case 27:case 5:nt(n);break;case 4:Pe(n,n.stateNode.containerInfo);break;case 10:Ja(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(is(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Rg(t,n,a):(is(n),t=La(t,n,a),t!==null?t.sibling:null);is(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Fo(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return wg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Re(Nn,Nn.current),o)break;return null;case 22:case 23:return n.lanes=0,Mg(t,n,a);case 24:Ja(n,Dn,t.memoizedState.cache)}return La(t,n,a)}function Dg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)zn=!0;else{if(!Vf(t,a)&&(n.flags&128)===0)return zn=!1,Xx(t,n,a);zn=(t.flags&131072)!==0}else zn=!1,jt&&(n.flags&1048576)!==0&&rm(n,tc,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Ku(o)?(t=Ys(o,t),n.tag=1,n=Tg(null,n,o,t,a)):(n.tag=0,n=Pf(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===N){n.tag=11,n=xg(null,n,o,t,a);break e}else if(u===V){n.tag=14,n=yg(null,n,o,t,a);break e}}throw n=_e(o)||o,Error(s(306,n,""))}}return n;case 0:return Pf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ys(o,n.pendingProps),Tg(t,n,o,u,a);case 3:e:{if(Pe(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,ff(t,n),qo(n,o,null,a);var b=n.memoizedState;if(o=b.cache,Ja(n,Dn,o),o!==f.cache&&sf(n,[Dn],a,!0),Xo(),o=b.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Ag(t,n,o,a);break e}else if(o!==u){u=Li(Error(s(424)),n),Bo(u),n=Ag(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(gn=Wi(t.firstChild),$n=n,jt=!0,Vs=null,la=!0,a=lg(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Io(),o===u){n=La(t,n,a);break e}Vn(t,n,o,a)}n=n.child}return n;case 26:return Sc(t,n),t===null?(a=O0(n.type,null,n.pendingProps,null))?n.memoizedState=a:jt||(a=n.type,t=n.pendingProps,o=zc(Se.current).createElement(a),o[Sn]=n,o[En]=t,kn(o,a,t),Xt(o),n.stateNode=o):n.memoizedState=O0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&jt&&(o=n.stateNode=N0(n.type,n.pendingProps,Se.current),$n=n,la=!0,u=gn,ds(n.type)?(Mh=u,gn=Wi(o.firstChild)):gn=u),Vn(t,n,n.pendingProps.children,a),Sc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&jt&&((u=o=gn)&&(o=xy(o,n.type,n.pendingProps,la),o!==null?(n.stateNode=o,$n=n,gn=Wi(o.firstChild),la=!1,u=!0):u=!1),u||js(n)),nt(n),u=n.type,f=n.pendingProps,b=t!==null?t.memoizedProps:null,o=f.children,vh(u,f)?o=null:b!==null&&vh(u,b)&&(n.flags|=32),n.memoizedState!==null&&(u=_f(t,n,Ix,null,null,a),pl._currentValue=u),Sc(t,n),Vn(t,n,o,a),n.child;case 6:return t===null&&jt&&((t=a=gn)&&(a=yy(a,n.pendingProps,la),a!==null?(n.stateNode=a,$n=n,gn=null,t=!0):t=!1),t||js(n)),null;case 13:return Rg(t,n,a);case 4:return Pe(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Pr(n,null,o,a):Vn(t,n,o,a),n.child;case 11:return xg(t,n,n.type,n.pendingProps,a);case 7:return Vn(t,n,n.pendingProps,a),n.child;case 8:return Vn(t,n,n.pendingProps.children,a),n.child;case 12:return Vn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ja(n,n.type,o.value),Vn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Xs(n),u=qn(u),o=o(u),n.flags|=1,Vn(t,n,o,a),n.child;case 14:return yg(t,n,n.type,n.pendingProps,a);case 15:return Sg(t,n,n.type,n.pendingProps,a);case 19:return wg(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Mc(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Aa(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Mg(t,n,a);case 24:return Xs(n),o=qn(Dn),t===null?(u=lf(),u===null&&(u=sn,f=rf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},uf(n),Ja(n,Dn,u)):((t.lanes&a)!==0&&(ff(t,n),qo(n,null,null,a),Xo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ja(n,Dn,o)):(o=f.cache,Ja(n,Dn,o),o!==u.cache&&sf(n,[Dn],a,!0))),Vn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Oa(t){t.flags|=4}function Ng(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!F0(n)){if(n=Ii.current,n!==null&&((Bt&4194048)===Bt?ca!==null:(Bt&62914560)!==Bt&&(Bt&536870912)===0||n!==ca))throw jo=cf,pm;t.flags|=8192}}function bc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ie():536870912,t.lanes|=n,Fr|=n)}function $o(t,n){if(!jt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function mn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function qx(t,n,a){var o=n.pendingProps;switch(ef(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(n),null;case 1:return mn(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Da(Dn),dt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(zo(n)?Oa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,cm())),mn(n),null;case 26:return a=n.memoizedState,t===null?(Oa(n),a!==null?(mn(n),Ng(n,a)):(mn(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Oa(n),mn(n),Ng(n,a)):(mn(n),n.flags&=-16777217):(t.memoizedProps!==o&&Oa(n),mn(n),n.flags&=-16777217),null;case 27:et(n),a=Se.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return mn(n),null}t=ee.current,zo(n)?om(n):(t=N0(u,o,a),n.stateNode=t,Oa(n))}return mn(n),null;case 5:if(et(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return mn(n),null}if(t=ee.current,zo(n))om(n);else{switch(u=zc(Se.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[Sn]=n,t[En]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(kn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Oa(n)}}return mn(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Oa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=Se.current,zo(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=$n,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[Sn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||E0(t.nodeValue,a)),t||js(n)}else t=zc(t).createTextNode(o),t[Sn]=n,n.stateNode=t}return mn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=zo(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Sn]=n}else Io(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;mn(n),u=!1}else u=cm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ua(n),n):(Ua(n),null)}if(Ua(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),bc(n,n.updateQueue),mn(n),null;case 4:return dt(),t===null&&dh(n.stateNode.containerInfo),mn(n),null;case 10:return Da(n.type),mn(n),null;case 19:if(Ee(Nn),u=n.memoizedState,u===null)return mn(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)$o(u,!1);else{if(_n!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=vc(t),f!==null){for(n.flags|=128,$o(u,!1),t=f.updateQueue,n.updateQueue=t,bc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)sm(a,t),a=a.sibling;return Re(Nn,Nn.current&1|2),n.child}t=t.sibling}u.tail!==null&&ot()>Ac&&(n.flags|=128,o=!0,$o(u,!1),n.lanes=4194304)}else{if(!o)if(t=vc(f),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,bc(n,t),$o(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!jt)return mn(n),null}else 2*ot()-u.renderingStartTime>Ac&&a!==536870912&&(n.flags|=128,o=!0,$o(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(t=u.last,t!==null?t.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=ot(),n.sibling=null,t=Nn.current,Re(Nn,o?t&1|2:t&1),n):(mn(n),null);case 22:case 23:return Ua(n),mf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(mn(n),n.subtreeFlags&6&&(n.flags|=8192)):mn(n),a=n.updateQueue,a!==null&&bc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Ee(qs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Da(Dn),mn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Wx(t,n){switch(ef(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Da(Dn),dt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return et(n),null;case 13:if(Ua(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Io()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Ee(Nn),null;case 4:return dt(),null;case 10:return Da(n.type),null;case 22:case 23:return Ua(n),mf(),t!==null&&Ee(qs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Da(Dn),null;case 25:return null;default:return null}}function Ug(t,n){switch(ef(n),n.tag){case 3:Da(Dn),dt();break;case 26:case 27:case 5:et(n);break;case 4:dt();break;case 13:Ua(n);break;case 19:Ee(Nn);break;case 10:Da(n.type);break;case 22:case 23:Ua(n),mf(),t!==null&&Ee(qs);break;case 24:Da(Dn)}}function el(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,b=a.inst;o=f(),b.destroy=o}a=a.next}while(a!==u)}}catch(R){an(n,n.return,R)}}function ss(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var b=o.inst,R=b.destroy;if(R!==void 0){b.destroy=void 0,u=n;var j=a,re=R;try{re()}catch(xe){an(u,j,xe)}}}o=o.next}while(o!==f)}}catch(xe){an(n,n.return,xe)}}function Lg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{ym(n,a)}catch(o){an(t,t.return,o)}}}function Og(t,n,a){a.props=Ys(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){an(t,n,o)}}function tl(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){an(t,n,u)}}function ua(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){an(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){an(t,n,u)}else a.current=null}function Pg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){an(t,t.return,u)}}function jf(t,n,a){try{var o=t.stateNode;py(o,t.type,a,n),o[En]=n}catch(u){an(t,t.return,u)}}function zg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ds(t.type)||t.tag===4}function kf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ds(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pc));else if(o!==4&&(o===27&&ds(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Xf(t,n,a),t=t.sibling;t!==null;)Xf(t,n,a),t=t.sibling}function Ec(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&ds(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ec(t,n,a),t=t.sibling;t!==null;)Ec(t,n,a),t=t.sibling}function Ig(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);kn(n,o,a),n[Sn]=t,n[En]=a}catch(f){an(t,t.return,f)}}var Pa=!1,bn=!1,qf=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,In=null;function Yx(t,n){if(t=t.containerInfo,gh=Vc,t=Zp(t),ju(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var b=0,R=-1,j=-1,re=0,xe=0,Ae=t,ce=null;t:for(;;){for(var de;Ae!==a||u!==0&&Ae.nodeType!==3||(R=b+u),Ae!==f||o!==0&&Ae.nodeType!==3||(j=b+o),Ae.nodeType===3&&(b+=Ae.nodeValue.length),(de=Ae.firstChild)!==null;)ce=Ae,Ae=de;for(;;){if(Ae===t)break t;if(ce===a&&++re===u&&(R=b),ce===f&&++xe===o&&(j=b),(de=Ae.nextSibling)!==null)break;Ae=ce,ce=Ae.parentNode}Ae=de}a=R===-1||j===-1?null:{start:R,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(_h={focusedElem:t,selectionRange:a},Vc=!1,In=n;In!==null;)if(n=In,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,In=t;else for(;In!==null;){switch(n=In,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ht=Ys(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(ht,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(ct){an(a,a.return,ct)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)yh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":yh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,In=t;break}In=n.return}}function Fg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:rs(t,a),o&4&&el(5,a);break;case 1:if(rs(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(b){an(a,a.return,b)}else{var u=Ys(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(b){an(a,a.return,b)}}o&64&&Lg(a),o&512&&tl(a,a.return);break;case 3:if(rs(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ym(t,n)}catch(b){an(a,a.return,b)}}break;case 27:n===null&&o&4&&Ig(a);case 26:case 5:rs(t,a),n===null&&o&4&&Pg(a),o&512&&tl(a,a.return);break;case 12:rs(t,a);break;case 13:rs(t,a),o&4&&Vg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=iy.bind(null,a),Sy(t,a))));break;case 22:if(o=a.memoizedState!==null||Pa,!o){n=n!==null&&n.memoizedState!==null||bn,u=Pa;var f=bn;Pa=o,(bn=n)&&!f?os(t,a,(a.subtreeFlags&8772)!==0):rs(t,a),Pa=u,bn=f}break;case 30:break;default:rs(t,a)}}function Hg(t){var n=t.alternate;n!==null&&(t.alternate=null,Hg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&pi(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var hn=null,oi=!1;function za(t,n,a){for(a=a.child;a!==null;)Gg(t,n,a),a=a.sibling}function Gg(t,n,a){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(ue,a)}catch{}switch(a.tag){case 26:bn||ua(a,n),za(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:bn||ua(a,n);var o=hn,u=oi;ds(a.type)&&(hn=a.stateNode,oi=!1),za(t,n,a),ul(a.stateNode),hn=o,oi=u;break;case 5:bn||ua(a,n);case 6:if(o=hn,u=oi,hn=null,za(t,n,a),hn=o,oi=u,hn!==null)if(oi)try{(hn.nodeType===9?hn.body:hn.nodeName==="HTML"?hn.ownerDocument.body:hn).removeChild(a.stateNode)}catch(f){an(a,n,f)}else try{hn.removeChild(a.stateNode)}catch(f){an(a,n,f)}break;case 18:hn!==null&&(oi?(t=hn,w0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),vl(t)):w0(hn,a.stateNode));break;case 4:o=hn,u=oi,hn=a.stateNode.containerInfo,oi=!0,za(t,n,a),hn=o,oi=u;break;case 0:case 11:case 14:case 15:bn||ss(2,a,n),bn||ss(4,a,n),za(t,n,a);break;case 1:bn||(ua(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Og(a,n,o)),za(t,n,a);break;case 21:za(t,n,a);break;case 22:bn=(o=bn)||a.memoizedState!==null,za(t,n,a),bn=o;break;default:za(t,n,a)}}function Vg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vl(t)}catch(a){an(n,n.return,a)}}function Zx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Bg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Bg),n;default:throw Error(s(435,t.tag))}}function Wf(t,n){var a=Zx(t);n.forEach(function(o){var u=ay.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function Ei(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,b=n,R=b;e:for(;R!==null;){switch(R.tag){case 27:if(ds(R.type)){hn=R.stateNode,oi=!1;break e}break;case 5:hn=R.stateNode,oi=!1;break e;case 3:case 4:hn=R.stateNode.containerInfo,oi=!0;break e}R=R.return}if(hn===null)throw Error(s(160));Gg(f,b,u),hn=null,oi=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)jg(n,t),n=n.sibling}var qi=null;function jg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ei(n,t),Ti(t),o&4&&(ss(3,t,t.return),el(3,t),ss(5,t,t.return));break;case 1:Ei(n,t),Ti(t),o&512&&(bn||a===null||ua(a,a.return)),o&64&&Pa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=qi;if(Ei(n,t),Ti(t),o&512&&(bn||a===null||ua(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ia]||f[Sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),kn(f,o,a),f[Sn]=t,Xt(f),o=f;break e;case"link":var b=I0("link","href",u).get(o+(a.href||""));if(b){for(var R=0;R<b.length;R++)if(f=b[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(R,1);break t}}f=u.createElement(o),kn(f,o,a),u.head.appendChild(f);break;case"meta":if(b=I0("meta","content",u).get(o+(a.content||""))){for(R=0;R<b.length;R++)if(f=b[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(R,1);break t}}f=u.createElement(o),kn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[Sn]=t,Xt(f),o=f}t.stateNode=o}else B0(u,t.type,t.stateNode);else t.stateNode=z0(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?B0(u,t.type,t.stateNode):z0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&jf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Ei(n,t),Ti(t),o&512&&(bn||a===null||ua(a,a.return)),a!==null&&o&4&&jf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Ei(n,t),Ti(t),o&512&&(bn||a===null||ua(a,a.return)),t.flags&32){u=t.stateNode;try{Gn(u,"")}catch(de){an(t,t.return,de)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,jf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(qf=!0);break;case 6:if(Ei(n,t),Ti(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(de){an(t,t.return,de)}}break;case 3:if(Fc=null,u=qi,qi=Ic(n.containerInfo),Ei(n,t),qi=u,Ti(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{vl(n.containerInfo)}catch(de){an(t,t.return,de)}qf&&(qf=!1,kg(t));break;case 4:o=qi,qi=Ic(t.stateNode.containerInfo),Ei(n,t),Ti(t),qi=o;break;case 12:Ei(n,t),Ti(t);break;case 13:Ei(n,t),Ti(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($f=ot()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wf(t,o)));break;case 22:u=t.memoizedState!==null;var j=a!==null&&a.memoizedState!==null,re=Pa,xe=bn;if(Pa=re||u,bn=xe||j,Ei(n,t),bn=xe,Pa=re,Ti(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||j||Pa||bn||Zs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){j=a=n;try{if(f=j.stateNode,u)b=f.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{R=j.stateNode;var Ae=j.memoizedProps.style,ce=Ae!=null&&Ae.hasOwnProperty("display")?Ae.display:null;R.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(de){an(j,j.return,de)}}}else if(n.tag===6){if(a===null){j=n;try{j.stateNode.nodeValue=u?"":j.memoizedProps}catch(de){an(j,j.return,de)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Wf(t,a))));break;case 19:Ei(n,t),Ti(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wf(t,o)));break;case 30:break;case 21:break;default:Ei(n,t),Ti(t)}}function Ti(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(zg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=kf(t);Ec(t,f,u);break;case 5:var b=a.stateNode;a.flags&32&&(Gn(b,""),a.flags&=-33);var R=kf(t);Ec(t,R,b);break;case 3:case 4:var j=a.stateNode.containerInfo,re=kf(t);Xf(t,re,j);break;default:throw Error(s(161))}}catch(xe){an(t,t.return,xe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function kg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;kg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function rs(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Fg(t,n.alternate,n),n=n.sibling}function Zs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ss(4,n,n.return),Zs(n);break;case 1:ua(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Og(n,n.return,a),Zs(n);break;case 27:ul(n.stateNode);case 26:case 5:ua(n,n.return),Zs(n);break;case 22:n.memoizedState===null&&Zs(n);break;case 30:Zs(n);break;default:Zs(n)}t=t.sibling}}function os(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,b=f.flags;switch(f.tag){case 0:case 11:case 15:os(u,f,a),el(4,f);break;case 1:if(os(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(re){an(o,o.return,re)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)xm(j[u],R)}catch(re){an(o,o.return,re)}}a&&b&64&&Lg(f),tl(f,f.return);break;case 27:Ig(f);case 26:case 5:os(u,f,a),a&&o===null&&b&4&&Pg(f),tl(f,f.return);break;case 12:os(u,f,a);break;case 13:os(u,f,a),a&&b&4&&Vg(u,f);break;case 22:f.memoizedState===null&&os(u,f,a),tl(f,f.return);break;case 30:break;default:os(u,f,a)}n=n.sibling}}function Yf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ho(a))}function Zf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ho(t))}function fa(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Xg(t,n,a,o),n=n.sibling}function Xg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:fa(t,n,a,o),u&2048&&el(9,n);break;case 1:fa(t,n,a,o);break;case 3:fa(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ho(t)));break;case 12:if(u&2048){fa(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,b=f.id,R=f.onPostCommit;typeof R=="function"&&R(b,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(j){an(n,n.return,j)}}else fa(t,n,a,o);break;case 13:fa(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,b=n.alternate,n.memoizedState!==null?f._visibility&2?fa(t,n,a,o):nl(t,n):f._visibility&2?fa(t,n,a,o):(f._visibility|=2,zr(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Yf(b,n);break;case 24:fa(t,n,a,o),u&2048&&Zf(n.alternate,n);break;default:fa(t,n,a,o)}}function zr(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,b=n,R=a,j=o,re=b.flags;switch(b.tag){case 0:case 11:case 15:zr(f,b,R,j,u),el(8,b);break;case 23:break;case 22:var xe=b.stateNode;b.memoizedState!==null?xe._visibility&2?zr(f,b,R,j,u):nl(f,b):(xe._visibility|=2,zr(f,b,R,j,u)),u&&re&2048&&Yf(b.alternate,b);break;case 24:zr(f,b,R,j,u),u&&re&2048&&Zf(b.alternate,b);break;default:zr(f,b,R,j,u)}n=n.sibling}}function nl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:nl(a,o),u&2048&&Yf(o.alternate,o);break;case 24:nl(a,o),u&2048&&Zf(o.alternate,o);break;default:nl(a,o)}n=n.sibling}}var il=8192;function Ir(t){if(t.subtreeFlags&il)for(t=t.child;t!==null;)qg(t),t=t.sibling}function qg(t){switch(t.tag){case 26:Ir(t),t.flags&il&&t.memoizedState!==null&&Oy(qi,t.memoizedState,t.memoizedProps);break;case 5:Ir(t);break;case 3:case 4:var n=qi;qi=Ic(t.stateNode.containerInfo),Ir(t),qi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=il,il=16777216,Ir(t),il=n):Ir(t));break;default:Ir(t)}}function Wg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function al(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];In=o,Zg(o,t)}Wg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Yg(t),t=t.sibling}function Yg(t){switch(t.tag){case 0:case 11:case 15:al(t),t.flags&2048&&ss(9,t,t.return);break;case 3:al(t);break;case 12:al(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Tc(t)):al(t);break;default:al(t)}}function Tc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];In=o,Zg(o,t)}Wg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ss(8,n,n.return),Tc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Tc(n));break;default:Tc(n)}t=t.sibling}}function Zg(t,n){for(;In!==null;){var a=In;switch(a.tag){case 0:case 11:case 15:ss(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ho(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,In=o;else e:for(a=t;In!==null;){o=In;var u=o.sibling,f=o.return;if(Hg(o),o===a){In=null;break e}if(u!==null){u.return=f,In=u;break e}In=f}}}var Kx={getCacheForType:function(t){var n=qn(Dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Qx=typeof WeakMap=="function"?WeakMap:Map,Yt=0,sn=null,wt=null,Bt=0,Zt=0,Ai=null,ls=!1,Br=!1,Kf=!1,Ia=0,_n=0,cs=0,Ks=0,Qf=0,Bi=0,Fr=0,sl=null,li=null,Jf=!1,$f=0,Ac=1/0,Rc=null,us=null,jn=0,fs=null,Hr=null,Gr=0,eh=0,th=null,Kg=null,rl=0,nh=null;function Ri(){if((Yt&2)!==0&&Bt!==0)return Bt&-Bt;if(G.T!==null){var t=Cr;return t!==0?t:ch()}return Rt()}function Qg(){Bi===0&&(Bi=(Bt&536870912)===0||jt?Y():536870912);var t=Ii.current;return t!==null&&(t.flags|=32),Bi}function Ci(t,n,a){(t===sn&&(Zt===2||Zt===9)||t.cancelPendingCommit!==null)&&(Vr(t,0),hs(t,Bt,Bi,!1)),ve(t,a),((Yt&2)===0||t!==sn)&&(t===sn&&((Yt&2)===0&&(Ks|=a),_n===4&&hs(t,Bt,Bi,!1)),ha(t))}function Jg(t,n,a){if((Yt&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||at(t,n),u=o?ey(t,n):sh(t,n,!0),f=o;do{if(u===0){Br&&!o&&hs(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Jx(a)){u=sh(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;e:{var R=t;u=sl;var j=R.current.memoizedState.isDehydrated;if(j&&(Vr(R,b).flags|=256),b=sh(R,b,!1),b!==2){if(Kf&&!j){R.errorRecoveryDisabledLanes|=f,Ks|=f,u=4;break e}f=li,li=u,f!==null&&(li===null?li=f:li.push.apply(li,f))}u=b}if(f=!1,u!==2)continue}}if(u===1){Vr(t,0),hs(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:hs(o,n,Bi,!ls);break e;case 2:li=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=$f+300-ot(),10<u)){if(hs(o,n,Bi,!ls),mt(o,0,!0)!==0)break e;o.timeoutHandle=R0($g.bind(null,o,a,li,Rc,Jf,n,Bi,Ks,Fr,ls,f,2,-0,0),u);break e}$g(o,a,li,Rc,Jf,n,Bi,Ks,Fr,ls,f,0,-0,0)}}break}while(!0);ha(t)}function $g(t,n,a,o,u,f,b,R,j,re,xe,Ae,ce,de){if(t.timeoutHandle=-1,Ae=n.subtreeFlags,(Ae&8192||(Ae&16785408)===16785408)&&(dl={stylesheets:null,count:0,unsuspend:Ly},qg(n),Ae=Py(),Ae!==null)){t.cancelPendingCommit=Ae(r0.bind(null,t,n,f,a,o,u,b,R,j,xe,1,ce,de)),hs(t,f,b,!re);return}r0(t,n,f,a,o,u,b,R,j)}function Jx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Mi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function hs(t,n,a,o){n&=~Qf,n&=~Ks,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-q(u),b=1<<f;o[f]=-1,u&=~b}a!==0&&Be(t,a,n)}function Cc(){return(Yt&6)===0?(ol(0),!1):!0}function ih(){if(wt!==null){if(Zt===0)var t=wt.return;else t=wt,wa=ks=null,yf(t),Or=null,Qo=0,t=wt;for(;t!==null;)Ug(t.alternate,t),t=t.return;wt=null}}function Vr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,gy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ih(),sn=t,wt=a=Aa(t.current,null),Bt=n,Zt=0,Ai=null,ls=!1,Br=at(t,n),Kf=!1,Fr=Bi=Qf=Ks=cs=_n=0,li=sl=null,Jf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-q(o),f=1<<u;n|=t[u],o&=~f}return Ia=n,Kl(),a}function e0(t,n){bt=null,G.H=mc,n===Vo||n===sc?(n=_m(),Zt=3):n===pm?(n=_m(),Zt=4):Zt=n===vg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ai=n,wt===null&&(_n=1,yc(t,Li(n,t.current)))}function t0(){var t=G.H;return G.H=mc,t===null?mc:t}function n0(){var t=G.A;return G.A=Kx,t}function ah(){_n=4,ls||(Bt&4194048)!==Bt&&Ii.current!==null||(Br=!0),(cs&134217727)===0&&(Ks&134217727)===0||sn===null||hs(sn,Bt,Bi,!1)}function sh(t,n,a){var o=Yt;Yt|=2;var u=t0(),f=n0();(sn!==t||Bt!==n)&&(Rc=null,Vr(t,n)),n=!1;var b=_n;e:do try{if(Zt!==0&&wt!==null){var R=wt,j=Ai;switch(Zt){case 8:ih(),b=6;break e;case 3:case 2:case 9:case 6:Ii.current===null&&(n=!0);var re=Zt;if(Zt=0,Ai=null,jr(t,R,j,re),a&&Br){b=0;break e}break;default:re=Zt,Zt=0,Ai=null,jr(t,R,j,re)}}$x(),b=_n;break}catch(xe){e0(t,xe)}while(!0);return n&&t.shellSuspendCounter++,wa=ks=null,Yt=o,G.H=u,G.A=f,wt===null&&(sn=null,Bt=0,Kl()),b}function $x(){for(;wt!==null;)i0(wt)}function ey(t,n){var a=Yt;Yt|=2;var o=t0(),u=n0();sn!==t||Bt!==n?(Rc=null,Ac=ot()+500,Vr(t,n)):Br=at(t,n);e:do try{if(Zt!==0&&wt!==null){n=wt;var f=Ai;t:switch(Zt){case 1:Zt=0,Ai=null,jr(t,n,f,1);break;case 2:case 9:if(mm(f)){Zt=0,Ai=null,a0(n);break}n=function(){Zt!==2&&Zt!==9||sn!==t||(Zt=7),ha(t)},f.then(n,n);break e;case 3:Zt=7;break e;case 4:Zt=5;break e;case 7:mm(f)?(Zt=0,Ai=null,a0(n)):(Zt=0,Ai=null,jr(t,n,f,7));break;case 5:var b=null;switch(wt.tag){case 26:b=wt.memoizedState;case 5:case 27:var R=wt;if(!b||F0(b)){Zt=0,Ai=null;var j=R.sibling;if(j!==null)wt=j;else{var re=R.return;re!==null?(wt=re,wc(re)):wt=null}break t}}Zt=0,Ai=null,jr(t,n,f,5);break;case 6:Zt=0,Ai=null,jr(t,n,f,6);break;case 8:ih(),_n=6;break e;default:throw Error(s(462))}}ty();break}catch(xe){e0(t,xe)}while(!0);return wa=ks=null,G.H=o,G.A=u,Yt=a,wt!==null?0:(sn=null,Bt=0,Kl(),_n)}function ty(){for(;wt!==null&&!ln();)i0(wt)}function i0(t){var n=Dg(t.alternate,t,Ia);t.memoizedProps=t.pendingProps,n===null?wc(t):wt=n}function a0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Eg(a,n,n.pendingProps,n.type,void 0,Bt);break;case 11:n=Eg(a,n,n.pendingProps,n.type.render,n.ref,Bt);break;case 5:yf(n);default:Ug(a,n),n=wt=sm(n,Ia),n=Dg(a,n,Ia)}t.memoizedProps=t.pendingProps,n===null?wc(t):wt=n}function jr(t,n,a,o){wa=ks=null,yf(n),Or=null,Qo=0;var u=n.return;try{if(kx(t,u,n,a,Bt)){_n=1,yc(t,Li(a,t.current)),wt=null;return}}catch(f){if(u!==null)throw wt=u,f;_n=1,yc(t,Li(a,t.current)),wt=null;return}n.flags&32768?(jt||o===1?t=!0:Br||(Bt&536870912)!==0?t=!1:(ls=t=!0,(o===2||o===9||o===3||o===6)&&(o=Ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),s0(n,t)):wc(n)}function wc(t){var n=t;do{if((n.flags&32768)!==0){s0(n,ls);return}t=n.return;var a=qx(n.alternate,n,Ia);if(a!==null){wt=a;return}if(n=n.sibling,n!==null){wt=n;return}wt=n=t}while(n!==null);_n===0&&(_n=5)}function s0(t,n){do{var a=Wx(t.alternate,t);if(a!==null){a.flags&=32767,wt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){wt=t;return}wt=t=a}while(t!==null);_n=6,wt=null}function r0(t,n,a,o,u,f,b,R,j){t.cancelPendingCommit=null;do Dc();while(jn!==0);if((Yt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Yu,Fe(t,a,f,b,R,j),t===sn&&(wt=sn=null,Bt=0),Hr=n,fs=t,Gr=a,eh=f,th=u,Kg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sy(z,function(){return f0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=G.T,G.T=null,u=ne.p,ne.p=2,b=Yt,Yt|=4;try{Yx(t,n,a)}finally{Yt=b,ne.p=u,G.T=o}}jn=1,o0(),l0(),c0()}}function o0(){if(jn===1){jn=0;var t=fs,n=Hr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=G.T,G.T=null;var o=ne.p;ne.p=2;var u=Yt;Yt|=4;try{jg(n,t);var f=_h,b=Zp(t.containerInfo),R=f.focusedElem,j=f.selectionRange;if(b!==R&&R&&R.ownerDocument&&Yp(R.ownerDocument.documentElement,R)){if(j!==null&&ju(R)){var re=j.start,xe=j.end;if(xe===void 0&&(xe=re),"selectionStart"in R)R.selectionStart=re,R.selectionEnd=Math.min(xe,R.value.length);else{var Ae=R.ownerDocument||document,ce=Ae&&Ae.defaultView||window;if(ce.getSelection){var de=ce.getSelection(),ht=R.textContent.length,ct=Math.min(j.start,ht),$t=j.end===void 0?ct:Math.min(j.end,ht);!de.extend&&ct>$t&&(b=$t,$t=ct,ct=b);var J=Wp(R,ct),W=Wp(R,$t);if(J&&W&&(de.rangeCount!==1||de.anchorNode!==J.node||de.anchorOffset!==J.offset||de.focusNode!==W.node||de.focusOffset!==W.offset)){var se=Ae.createRange();se.setStart(J.node,J.offset),de.removeAllRanges(),ct>$t?(de.addRange(se),de.extend(W.node,W.offset)):(se.setEnd(W.node,W.offset),de.addRange(se))}}}}for(Ae=[],de=R;de=de.parentNode;)de.nodeType===1&&Ae.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Ae.length;R++){var be=Ae[R];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}Vc=!!gh,_h=gh=null}finally{Yt=u,ne.p=o,G.T=a}}t.current=n,jn=2}}function l0(){if(jn===2){jn=0;var t=fs,n=Hr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=G.T,G.T=null;var o=ne.p;ne.p=2;var u=Yt;Yt|=4;try{Fg(t,n.alternate,n)}finally{Yt=u,ne.p=o,G.T=a}}jn=3}}function c0(){if(jn===4||jn===3){jn=0,xt();var t=fs,n=Hr,a=Gr,o=Kg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?jn=5:(jn=0,Hr=fs=null,u0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(us=null),cn(a),n=n.stateNode,Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(ue,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=G.T,u=ne.p,ne.p=2,G.T=null;try{for(var f=t.onRecoverableError,b=0;b<o.length;b++){var R=o[b];f(R.value,{componentStack:R.stack})}}finally{G.T=n,ne.p=u}}(Gr&3)!==0&&Dc(),ha(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===nh?rl++:(rl=0,nh=t):rl=0,ol(0)}}function u0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ho(n)))}function Dc(t){return o0(),l0(),c0(),f0()}function f0(){if(jn!==5)return!1;var t=fs,n=eh;eh=0;var a=cn(Gr),o=G.T,u=ne.p;try{ne.p=32>a?32:a,G.T=null,a=th,th=null;var f=fs,b=Gr;if(jn=0,Hr=fs=null,Gr=0,(Yt&6)!==0)throw Error(s(331));var R=Yt;if(Yt|=4,Yg(f.current),Xg(f,f.current,b,a),Yt=R,ol(0,!1),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(ue,f)}catch{}return!0}finally{ne.p=u,G.T=o,u0(t,n)}}function h0(t,n,a){n=Li(a,n),n=Of(t.stateNode,n,2),t=ts(t,n,2),t!==null&&(ve(t,2),ha(t))}function an(t,n,a){if(t.tag===3)h0(t,t,a);else for(;n!==null;){if(n.tag===3){h0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(us===null||!us.has(o))){t=Li(a,t),a=gg(2),o=ts(n,a,2),o!==null&&(_g(a,o,n,t),ve(o,2),ha(o));break}}n=n.return}}function rh(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Qx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Kf=!0,u.add(a),t=ny.bind(null,t,n,a),n.then(t,t))}function ny(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,sn===t&&(Bt&a)===a&&(_n===4||_n===3&&(Bt&62914560)===Bt&&300>ot()-$f?(Yt&2)===0&&Vr(t,0):Qf|=a,Fr===Bt&&(Fr=0)),ha(t)}function d0(t,n){n===0&&(n=Ie()),t=Er(t,n),t!==null&&(ve(t,n),ha(t))}function iy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),d0(t,a)}function ay(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),d0(t,a)}function sy(t,n){return Ze(t,n)}var Nc=null,kr=null,oh=!1,Uc=!1,lh=!1,Qs=0;function ha(t){t!==kr&&t.next===null&&(kr===null?Nc=kr=t:kr=kr.next=t),Uc=!0,oh||(oh=!0,oy())}function ol(t,n){if(!lh&&Uc){lh=!0;do for(var a=!1,o=Nc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var b=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-q(42|t)+1)-1,f&=u&~(b&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,_0(o,f))}else f=Bt,f=mt(o,o===sn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||at(o,f)||(a=!0,_0(o,f));o=o.next}while(a);lh=!1}}function ry(){p0()}function p0(){Uc=oh=!1;var t=0;Qs!==0&&(my()&&(t=Qs),Qs=0);for(var n=ot(),a=null,o=Nc;o!==null;){var u=o.next,f=m0(o,n);f===0?(o.next=null,a===null?Nc=u:a.next=u,u===null&&(kr=a)):(a=o,(t!==0||(f&3)!==0)&&(Uc=!0)),o=u}ol(t)}function m0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var b=31-q(f),R=1<<b,j=u[b];j===-1?((R&a)===0||(R&o)!==0)&&(u[b]=Ot(R,n)):j<=n&&(t.expiredLanes|=R),f&=~R}if(n=sn,a=Bt,a=mt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Zt===2||Zt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&X(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||at(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&X(o),cn(a)){case 2:case 8:a=Xe;break;case 32:a=z;break;case 268435456:a=k;break;default:a=z}return o=g0.bind(null,t),a=Ze(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&X(o),t.callbackPriority=2,t.callbackNode=null,2}function g0(t,n){if(jn!==0&&jn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Dc()&&t.callbackNode!==a)return null;var o=Bt;return o=mt(t,t===sn?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Jg(t,o,n),m0(t,ot()),t.callbackNode!=null&&t.callbackNode===a?g0.bind(null,t):null)}function _0(t,n){if(Dc())return null;Jg(t,n,!0)}function oy(){_y(function(){(Yt&6)!==0?Ze(Lt,ry):p0()})}function ch(){return Qs===0&&(Qs=Y()),Qs}function v0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:aa(""+t)}function x0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function ly(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=v0((u[En]||null).action),b=o.submitter;b&&(n=(n=b[En]||null)?v0(n.formAction):b.getAttribute("formAction"),n!==null&&(f=n,b=null));var R=new Qe("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Qs!==0){var j=b?x0(u,b):new FormData(u);wf(a,{pending:!0,data:j,method:u.method,action:f},null,j)}}else typeof f=="function"&&(R.preventDefault(),j=b?x0(u,b):new FormData(u),wf(a,{pending:!0,data:j,method:u.method,action:f},f,j))},currentTarget:u}]})}}for(var uh=0;uh<Wu.length;uh++){var fh=Wu[uh],cy=fh.toLowerCase(),uy=fh[0].toUpperCase()+fh.slice(1);Xi(cy,"on"+uy)}Xi(Jp,"onAnimationEnd"),Xi($p,"onAnimationIteration"),Xi(em,"onAnimationStart"),Xi("dblclick","onDoubleClick"),Xi("focusin","onFocus"),Xi("focusout","onBlur"),Xi(Rx,"onTransitionRun"),Xi(Cx,"onTransitionStart"),Xi(wx,"onTransitionCancel"),Xi(tm,"onTransitionEnd"),D("onMouseEnter",["mouseout","mouseover"]),D("onMouseLeave",["mouseout","mouseover"]),D("onPointerEnter",["pointerout","pointerover"]),D("onPointerLeave",["pointerout","pointerover"]),gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gi("onBeforeInput",["compositionend","keypress","textInput","paste"]),gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ll));function y0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var b=o.length-1;0<=b;b--){var R=o[b],j=R.instance,re=R.currentTarget;if(R=R.listener,j!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=re;try{f(u)}catch(xe){xc(xe)}u.currentTarget=null,f=j}else for(b=0;b<o.length;b++){if(R=o[b],j=R.instance,re=R.currentTarget,R=R.listener,j!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=re;try{f(u)}catch(xe){xc(xe)}u.currentTarget=null,f=j}}}}function Dt(t,n){var a=n[Ui];a===void 0&&(a=n[Ui]=new Set);var o=t+"__bubble";a.has(o)||(S0(n,t,2,!1),a.add(o))}function hh(t,n,a){var o=0;n&&(o|=4),S0(a,t,o,n)}var Lc="_reactListening"+Math.random().toString(36).slice(2);function dh(t){if(!t[Lc]){t[Lc]=!0,Ns.forEach(function(a){a!=="selectionchange"&&(fy.has(a)||hh(a,!1,t),hh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Lc]||(n[Lc]=!0,hh("selectionchange",!1,n))}}function S0(t,n,a,o){switch(X0(n)){case 2:var u=By;break;case 8:u=Fy;break;default:u=Rh}a=u.bind(null,n,a,t),u=void 0,!To||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ph(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var R=o.stateNode.containerInfo;if(R===u)break;if(b===4)for(b=o.return;b!==null;){var j=b.tag;if((j===3||j===4)&&b.stateNode.containerInfo===u)return;b=b.return}for(;R!==null;){if(b=mi(R),b===null)return;if(j=b.tag,j===5||j===6||j===26||j===27){o=f=b;continue e}R=R.parentNode}}o=o.return}Eo(function(){var re=f,xe=si(a),Ae=[];e:{var ce=nm.get(t);if(ce!==void 0){var de=Qe,ht=t;switch(t){case"keypress":if(ra(a)===0)break e;case"keydown":case"keyup":de=Fu;break;case"focusin":ht="focus",de=xr;break;case"focusout":ht="blur",de=xr;break;case"beforeblur":case"afterblur":de=xr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=kl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=wo;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=lx;break;case Jp:case $p:case em:de=pn;break;case tm:de=ux;break;case"scroll":case"scrollend":de=Ct;break;case"wheel":de=hx;break;case"copy":case"cut":case"paste":de=yi;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Lp;break;case"toggle":case"beforetoggle":de=px}var ct=(n&4)!==0,$t=!ct&&(t==="scroll"||t==="scrollend"),J=ct?ce!==null?ce+"Capture":null:ce;ct=[];for(var W=re,se;W!==null;){var be=W;if(se=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||se===null||J===null||(be=Ka(W,J),be!=null&&ct.push(cl(W,be,se))),$t)break;W=W.return}0<ct.length&&(ce=new de(ce,ht,null,a,xe),Ae.push({event:ce,listeners:ct}))}}if((n&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",ce&&a!==Ls&&(ht=a.relatedTarget||a.fromElement)&&(mi(ht)||ht[Xn]))break e;if((de||ce)&&(ce=xe.window===xe?xe:(ce=xe.ownerDocument)?ce.defaultView||ce.parentWindow:window,de?(ht=a.relatedTarget||a.toElement,de=re,ht=ht?mi(ht):null,ht!==null&&($t=c(ht),ct=ht.tag,ht!==$t||ct!==5&&ct!==27&&ct!==6)&&(ht=null)):(de=null,ht=re),de!==ht)){if(ct=kl,be="onMouseLeave",J="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(ct=Lp,be="onPointerLeave",J="onPointerEnter",W="pointer"),$t=de==null?ce:Ea(de),se=ht==null?ce:Ea(ht),ce=new ct(be,W+"leave",de,a,xe),ce.target=$t,ce.relatedTarget=se,be=null,mi(xe)===re&&(ct=new ct(J,W+"enter",ht,a,xe),ct.target=se,ct.relatedTarget=$t,be=ct),$t=be,de&&ht)t:{for(ct=de,J=ht,W=0,se=ct;se;se=Xr(se))W++;for(se=0,be=J;be;be=Xr(be))se++;for(;0<W-se;)ct=Xr(ct),W--;for(;0<se-W;)J=Xr(J),se--;for(;W--;){if(ct===J||J!==null&&ct===J.alternate)break t;ct=Xr(ct),J=Xr(J)}ct=null}else ct=null;de!==null&&M0(Ae,ce,de,ct,!1),ht!==null&&$t!==null&&M0(Ae,$t,ht,ct,!0)}}e:{if(ce=re?Ea(re):window,de=ce.nodeName&&ce.nodeName.toLowerCase(),de==="select"||de==="input"&&ce.type==="file")var qe=Gp;else if(Fp(ce))if(Vp)qe=Ex;else{qe=Mx;var Tt=Sx}else de=ce.nodeName,!de||de.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?re&&Us(re.elementType)&&(qe=Gp):qe=bx;if(qe&&(qe=qe(t,re))){Hp(Ae,qe,a,xe);break e}Tt&&Tt(t,ce,re),t==="focusout"&&re&&ce.type==="number"&&re.memoizedProps.value!=null&&Ht(ce,"number",ce.value)}switch(Tt=re?Ea(re):window,t){case"focusin":(Fp(Tt)||Tt.contentEditable==="true")&&(Sr=Tt,ku=re,Po=null);break;case"focusout":Po=ku=Sr=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,Kp(Ae,a,xe);break;case"selectionchange":if(Ax)break;case"keydown":case"keyup":Kp(Ae,a,xe)}var it;if(Hu)e:{switch(t){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else yr?Ip(t,a)&&(ut="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ut="onCompositionStart");ut&&(Op&&a.locale!=="ko"&&(yr||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&yr&&(it=Ro()):(ki=xe,Ao="value"in ki?ki.value:ki.textContent,yr=!0)),Tt=Oc(re,ut),0<Tt.length&&(ut=new Wl(ut,t,null,a,xe),Ae.push({event:ut,listeners:Tt}),it?ut.data=it:(it=Bp(a),it!==null&&(ut.data=it)))),(it=gx?_x(t,a):vx(t,a))&&(ut=Oc(re,"onBeforeInput"),0<ut.length&&(Tt=new Wl("onBeforeInput","beforeinput",null,a,xe),Ae.push({event:Tt,listeners:ut}),Tt.data=it)),ly(Ae,t,re,a,xe)}y0(Ae,n)})}function cl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Oc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ka(t,a),u!=null&&o.unshift(cl(t,u,f)),u=Ka(t,n),u!=null&&o.push(cl(t,u,f))),t.tag===3)return o;t=t.return}return[]}function Xr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function M0(t,n,a,o,u){for(var f=n._reactName,b=[];a!==null&&a!==o;){var R=a,j=R.alternate,re=R.stateNode;if(R=R.tag,j!==null&&j===o)break;R!==5&&R!==26&&R!==27||re===null||(j=re,u?(re=Ka(a,f),re!=null&&b.unshift(cl(a,re,j))):u||(re=Ka(a,f),re!=null&&b.push(cl(a,re,j)))),a=a.return}b.length!==0&&t.push({event:n,listeners:b})}var hy=/\r\n?/g,dy=/\u0000|\uFFFD/g;function b0(t){return(typeof t=="string"?t:""+t).replace(hy,`
`).replace(dy,"")}function E0(t,n){return n=b0(n),b0(t)===n}function Pc(){}function Jt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Gn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Gn(t,""+o);break;case"className":Oe(t,"class",o);break;case"tabIndex":Oe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Oe(t,a,o);break;case"style":_r(t,o,f);break;case"data":if(n!=="object"){Oe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=aa(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Jt(t,n,"name",u.name,u,null),Jt(t,n,"formEncType",u.formEncType,u,null),Jt(t,n,"formMethod",u.formMethod,u,null),Jt(t,n,"formTarget",u.formTarget,u,null)):(Jt(t,n,"encType",u.encType,u,null),Jt(t,n,"method",u.method,u,null),Jt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=aa(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Pc);break;case"onScroll":o!=null&&Dt("scroll",t);break;case"onScrollEnd":o!=null&&Dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=aa(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Dt("beforetoggle",t),Dt("toggle",t),De(t,"popover",o);break;case"xlinkActuate":He(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":He(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":He(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":He(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":He(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":He(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":He(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":He(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":He(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":De(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Vl.get(a)||a,De(t,a,o))}}function mh(t,n,a,o,u,f){switch(a){case"style":_r(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Gn(t,o):(typeof o=="number"||typeof o=="bigint")&&Gn(t,""+o);break;case"onScroll":o!=null&&Dt("scroll",t);break;case"onScrollEnd":o!=null&&Dt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Pc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!gr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):De(t,a,o)}}}function kn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Dt("error",t),Dt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var b=a[f];if(b!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Jt(t,n,f,b,a,null)}}u&&Jt(t,n,"srcSet",a.srcSet,a,null),o&&Jt(t,n,"src",a.src,a,null);return;case"input":Dt("invalid",t);var R=f=b=u=null,j=null,re=null;for(o in a)if(a.hasOwnProperty(o)){var xe=a[o];if(xe!=null)switch(o){case"name":u=xe;break;case"type":b=xe;break;case"checked":j=xe;break;case"defaultChecked":re=xe;break;case"value":f=xe;break;case"defaultValue":R=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(s(137,n));break;default:Jt(t,n,o,xe,a,null)}}Wt(t,f,R,j,re,b,u,!1),Kt(t);return;case"select":Dt("invalid",t),o=b=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":b=R;break;case"multiple":o=R;default:Jt(t,n,u,R,a,null)}n=f,a=b,t.multiple=!!o,n!=null?It(t,!!o,n,!1):a!=null&&It(t,!!o,a,!0);return;case"textarea":Dt("invalid",t),f=u=o=null;for(b in a)if(a.hasOwnProperty(b)&&(R=a[b],R!=null))switch(b){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Jt(t,n,b,R,a,null)}Tn(t,o,u,f),Kt(t);return;case"option":for(j in a)if(a.hasOwnProperty(j)&&(o=a[j],o!=null))switch(j){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Jt(t,n,j,o,a,null)}return;case"dialog":Dt("beforetoggle",t),Dt("toggle",t),Dt("cancel",t),Dt("close",t);break;case"iframe":case"object":Dt("load",t);break;case"video":case"audio":for(o=0;o<ll.length;o++)Dt(ll[o],t);break;case"image":Dt("error",t),Dt("load",t);break;case"details":Dt("toggle",t);break;case"embed":case"source":case"link":Dt("error",t),Dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in a)if(a.hasOwnProperty(re)&&(o=a[re],o!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Jt(t,n,re,o,a,null)}return;default:if(Us(n)){for(xe in a)a.hasOwnProperty(xe)&&(o=a[xe],o!==void 0&&mh(t,n,xe,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Jt(t,n,R,o,a,null))}function py(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,b=null,R=null,j=null,re=null,xe=null;for(de in a){var Ae=a[de];if(a.hasOwnProperty(de)&&Ae!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":j=Ae;default:o.hasOwnProperty(de)||Jt(t,n,de,null,o,Ae)}}for(var ce in o){var de=o[ce];if(Ae=a[ce],o.hasOwnProperty(ce)&&(de!=null||Ae!=null))switch(ce){case"type":f=de;break;case"name":u=de;break;case"checked":re=de;break;case"defaultChecked":xe=de;break;case"value":b=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:de!==Ae&&Jt(t,n,ce,de,o,Ae)}}ii(t,b,R,j,re,xe,f,u);return;case"select":de=b=R=ce=null;for(f in a)if(j=a[f],a.hasOwnProperty(f)&&j!=null)switch(f){case"value":break;case"multiple":de=j;default:o.hasOwnProperty(f)||Jt(t,n,f,null,o,j)}for(u in o)if(f=o[u],j=a[u],o.hasOwnProperty(u)&&(f!=null||j!=null))switch(u){case"value":ce=f;break;case"defaultValue":R=f;break;case"multiple":b=f;default:f!==j&&Jt(t,n,u,f,o,j)}n=R,a=b,o=de,ce!=null?It(t,!!a,ce,!1):!!o!=!!a&&(n!=null?It(t,!!a,n,!0):It(t,!!a,a?[]:"",!1));return;case"textarea":de=ce=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Jt(t,n,R,null,o,u)}for(b in o)if(u=o[b],f=a[b],o.hasOwnProperty(b)&&(u!=null||f!=null))switch(b){case"value":ce=u;break;case"defaultValue":de=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Jt(t,n,b,u,o,f)}dn(t,ce,de);return;case"option":for(var ht in a)if(ce=a[ht],a.hasOwnProperty(ht)&&ce!=null&&!o.hasOwnProperty(ht))switch(ht){case"selected":t.selected=!1;break;default:Jt(t,n,ht,null,o,ce)}for(j in o)if(ce=o[j],de=a[j],o.hasOwnProperty(j)&&ce!==de&&(ce!=null||de!=null))switch(j){case"selected":t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:Jt(t,n,j,ce,o,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in a)ce=a[ct],a.hasOwnProperty(ct)&&ce!=null&&!o.hasOwnProperty(ct)&&Jt(t,n,ct,null,o,ce);for(re in o)if(ce=o[re],de=a[re],o.hasOwnProperty(re)&&ce!==de&&(ce!=null||de!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:Jt(t,n,re,ce,o,de)}return;default:if(Us(n)){for(var $t in a)ce=a[$t],a.hasOwnProperty($t)&&ce!==void 0&&!o.hasOwnProperty($t)&&mh(t,n,$t,void 0,o,ce);for(xe in o)ce=o[xe],de=a[xe],!o.hasOwnProperty(xe)||ce===de||ce===void 0&&de===void 0||mh(t,n,xe,ce,o,de);return}}for(var J in a)ce=a[J],a.hasOwnProperty(J)&&ce!=null&&!o.hasOwnProperty(J)&&Jt(t,n,J,null,o,ce);for(Ae in o)ce=o[Ae],de=a[Ae],!o.hasOwnProperty(Ae)||ce===de||ce==null&&de==null||Jt(t,n,Ae,ce,o,de)}var gh=null,_h=null;function zc(t){return t.nodeType===9?t:t.ownerDocument}function T0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xh=null;function my(){var t=window.event;return t&&t.type==="popstate"?t===xh?!1:(xh=t,!0):(xh=null,!1)}var R0=typeof setTimeout=="function"?setTimeout:void 0,gy=typeof clearTimeout=="function"?clearTimeout:void 0,C0=typeof Promise=="function"?Promise:void 0,_y=typeof queueMicrotask=="function"?queueMicrotask:typeof C0<"u"?function(t){return C0.resolve(null).then(t).catch(vy)}:R0;function vy(t){setTimeout(function(){throw t})}function ds(t){return t==="head"}function w0(t,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var b=t.ownerDocument;if(a&1&&ul(b.documentElement),a&2&&ul(b.body),a&4)for(a=b.head,ul(a),b=a.firstChild;b;){var R=b.nextSibling,j=b.nodeName;b[ia]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&b.rel.toLowerCase()==="stylesheet"||a.removeChild(b),b=R}}if(u===0){t.removeChild(f),vl(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);vl(n)}function yh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":yh(a),pi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function xy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ia])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Wi(t.nextSibling),t===null)break}return null}function yy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Wi(t.nextSibling),t===null))return null;return t}function Sh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Sy(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Wi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Mh=null;function D0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function N0(t,n,a){switch(n=zc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function ul(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);pi(t)}var Fi=new Map,U0=new Set;function Ic(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ba=ne.d;ne.d={f:My,r:by,D:Ey,C:Ty,L:Ay,m:Ry,X:wy,S:Cy,M:Dy};function My(){var t=Ba.f(),n=Cc();return t||n}function by(t){var n=ni(t);n!==null&&n.tag===5&&n.type==="form"?Jm(n):Ba.r(t)}var qr=typeof document>"u"?null:document;function L0(t,n,a){var o=qr;if(o&&typeof n=="string"&&n){var u=qt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),U0.has(u)||(U0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),kn(n,"link",t),Xt(n),o.head.appendChild(n)))}}function Ey(t){Ba.D(t),L0("dns-prefetch",t,null)}function Ty(t,n){Ba.C(t,n),L0("preconnect",t,n)}function Ay(t,n,a){Ba.L(t,n,a);var o=qr;if(o&&t&&n){var u='link[rel="preload"][as="'+qt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+qt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+qt(a.imageSizes)+'"]')):u+='[href="'+qt(t)+'"]';var f=u;switch(n){case"style":f=Wr(t);break;case"script":f=Yr(t)}Fi.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Fi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(fl(f))||n==="script"&&o.querySelector(hl(f))||(n=o.createElement("link"),kn(n,"link",t),Xt(n),o.head.appendChild(n)))}}function Ry(t,n){Ba.m(t,n);var a=qr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+qt(o)+'"][href="'+qt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Yr(t)}if(!Fi.has(f)&&(t=_({rel:"modulepreload",href:t},n),Fi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hl(f)))return}o=a.createElement("link"),kn(o,"link",t),Xt(o),a.head.appendChild(o)}}}function Cy(t,n,a){Ba.S(t,n,a);var o=qr;if(o&&t){var u=ji(o).hoistableStyles,f=Wr(t);n=n||"default";var b=u.get(f);if(!b){var R={loading:0,preload:null};if(b=o.querySelector(fl(f)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Fi.get(f))&&bh(t,a);var j=b=o.createElement("link");Xt(j),kn(j,"link",t),j._p=new Promise(function(re,xe){j.onload=re,j.onerror=xe}),j.addEventListener("load",function(){R.loading|=1}),j.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Bc(b,n,o)}b={type:"stylesheet",instance:b,count:1,state:R},u.set(f,b)}}}function wy(t,n){Ba.X(t,n);var a=qr;if(a&&t){var o=ji(a).hoistableScripts,u=Yr(t),f=o.get(u);f||(f=a.querySelector(hl(u)),f||(t=_({src:t,async:!0},n),(n=Fi.get(u))&&Eh(t,n),f=a.createElement("script"),Xt(f),kn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Dy(t,n){Ba.M(t,n);var a=qr;if(a&&t){var o=ji(a).hoistableScripts,u=Yr(t),f=o.get(u);f||(f=a.querySelector(hl(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=Fi.get(u))&&Eh(t,n),f=a.createElement("script"),Xt(f),kn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function O0(t,n,a,o){var u=(u=Se.current)?Ic(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Wr(a.href),a=ji(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Wr(a.href);var f=ji(u).hoistableStyles,b=f.get(t);if(b||(u=u.ownerDocument||u,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,b),(f=u.querySelector(fl(t)))&&!f._p&&(b.instance=f,b.state.loading=5),Fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Fi.set(t,a),f||Ny(u,t,a,b.state))),n&&o===null)throw Error(s(528,""));return b}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Yr(a),a=ji(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Wr(t){return'href="'+qt(t)+'"'}function fl(t){return'link[rel="stylesheet"]['+t+"]"}function P0(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Ny(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),kn(n,"link",a),Xt(n),t.head.appendChild(n))}function Yr(t){return'[src="'+qt(t)+'"]'}function hl(t){return"script[async]"+t}function z0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+qt(a.href)+'"]');if(o)return n.instance=o,Xt(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Xt(o),kn(o,"style",u),Bc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Wr(a.href);var f=t.querySelector(fl(u));if(f)return n.state.loading|=4,n.instance=f,Xt(f),f;o=P0(a),(u=Fi.get(u))&&bh(o,u),f=(t.ownerDocument||t).createElement("link"),Xt(f);var b=f;return b._p=new Promise(function(R,j){b.onload=R,b.onerror=j}),kn(f,"link",o),n.state.loading|=4,Bc(f,a.precedence,t),n.instance=f;case"script":return f=Yr(a.src),(u=t.querySelector(hl(f)))?(n.instance=u,Xt(u),u):(o=a,(u=Fi.get(f))&&(o=_({},a),Eh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),Xt(u),kn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Bc(o,a.precedence,t));return n.instance}function Bc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,b=0;b<o.length;b++){var R=o[b];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function bh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Eh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Fc=null;function I0(t,n,a){if(Fc===null){var o=new Map,u=Fc=new Map;u.set(a,o)}else u=Fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ia]||f[Sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var b=f.getAttribute(n)||"";b=t+b;var R=o.get(b);R?R.push(f):o.set(b,[f])}}return o}function B0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Uy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function F0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var dl=null;function Ly(){}function Oy(t,n,a){if(dl===null)throw Error(s(475));var o=dl;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Wr(a.href),f=t.querySelector(fl(u));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=Hc.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=f,Xt(f);return}f=t.ownerDocument||t,a=P0(a),(u=Fi.get(u))&&bh(a,u),f=f.createElement("link"),Xt(f);var b=f;b._p=new Promise(function(R,j){b.onload=R,b.onerror=j}),kn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Hc.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function Py(){if(dl===null)throw Error(s(475));var t=dl;return t.stylesheets&&t.count===0&&Th(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Th(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Hc(){if(this.count--,this.count===0){if(this.stylesheets)Th(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Gc=null;function Th(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gc=new Map,n.forEach(zy,t),Gc=null,Hc.call(t))}function zy(t,n){if(!(n.state.loading&4)){var a=Gc.get(t);if(a)var o=a.get(null);else{a=new Map,Gc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var b=u[f];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),o=b)}o&&a.set(null,o)}u=n.instance,b=u.getAttribute("data-precedence"),f=a.get(b)||o,f===o&&a.set(null,u),a.set(b,u),this.count++,o=Hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var pl={$$typeof:L,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Iy(t,n,a,o,u,f,b,R){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pe(0),this.hiddenUpdates=pe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function H0(t,n,a,o,u,f,b,R,j,re,xe,Ae){return t=new Iy(t,n,a,b,R,j,re,Ae),n=1,f===!0&&(n|=24),f=bi(3,null,null,n),t.current=f,f.stateNode=t,n=rf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},uf(f),t}function G0(t){return t?(t=Tr,t):Tr}function V0(t,n,a,o,u,f){u=G0(u),o.context===null?o.context=u:o.pendingContext=u,o=es(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ts(t,o,n),a!==null&&(Ci(a,t,n),ko(a,t,n))}function j0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Ah(t,n){j0(t,n),(t=t.alternate)&&j0(t,n)}function k0(t){if(t.tag===13){var n=Er(t,67108864);n!==null&&Ci(n,t,67108864),Ah(t,67108864)}}var Vc=!0;function By(t,n,a,o){var u=G.T;G.T=null;var f=ne.p;try{ne.p=2,Rh(t,n,a,o)}finally{ne.p=f,G.T=u}}function Fy(t,n,a,o){var u=G.T;G.T=null;var f=ne.p;try{ne.p=8,Rh(t,n,a,o)}finally{ne.p=f,G.T=u}}function Rh(t,n,a,o){if(Vc){var u=Ch(o);if(u===null)ph(t,n,o,jc,a),q0(t,o);else if(Gy(u,t,n,a,o))o.stopPropagation();else if(q0(t,o),n&4&&-1<Hy.indexOf(t)){for(;u!==null;){var f=ni(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var b=ze(f.pendingLanes);if(b!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;b;){var j=1<<31-q(b);R.entanglements[1]|=j,b&=~j}ha(f),(Yt&6)===0&&(Ac=ot()+500,ol(0))}}break;case 13:R=Er(f,2),R!==null&&Ci(R,f,2),Cc(),Ah(f,2)}if(f=Ch(o),f===null&&ph(t,n,o,jc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else ph(t,n,o,null,a)}}function Ch(t){return t=si(t),wh(t)}var jc=null;function wh(t){if(jc=null,t=mi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return jc=t,null}function X0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(We()){case Lt:return 2;case Xe:return 8;case z:case T:return 32;case k:return 268435456;default:return 32}default:return 32}}var Dh=!1,ps=null,ms=null,gs=null,ml=new Map,gl=new Map,_s=[],Hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q0(t,n){switch(t){case"focusin":case"focusout":ps=null;break;case"dragenter":case"dragleave":ms=null;break;case"mouseover":case"mouseout":gs=null;break;case"pointerover":case"pointerout":ml.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(n.pointerId)}}function _l(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ni(n),n!==null&&k0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Gy(t,n,a,o,u){switch(n){case"focusin":return ps=_l(ps,t,n,a,o,u),!0;case"dragenter":return ms=_l(ms,t,n,a,o,u),!0;case"mouseover":return gs=_l(gs,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return ml.set(f,_l(ml.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,gl.set(f,_l(gl.get(f)||null,t,n,a,o,u)),!0}return!1}function W0(t){var n=mi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,yn(t.priority,function(){if(a.tag===13){var o=Ri();o=Pt(o);var u=Er(a,o);u!==null&&Ci(u,a,o),Ah(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ch(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Ls=o,a.target.dispatchEvent(o),Ls=null}else return n=ni(a),n!==null&&k0(n),t.blockedOn=a,!1;n.shift()}return!0}function Y0(t,n,a){kc(t)&&a.delete(n)}function Vy(){Dh=!1,ps!==null&&kc(ps)&&(ps=null),ms!==null&&kc(ms)&&(ms=null),gs!==null&&kc(gs)&&(gs=null),ml.forEach(Y0),gl.forEach(Y0)}function Xc(t,n){t.blockedOn===n&&(t.blockedOn=null,Dh||(Dh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Vy)))}var qc=null;function Z0(t){qc!==t&&(qc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){qc===t&&(qc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(wh(o||a)===null)continue;break}var f=ni(a);f!==null&&(t.splice(n,3),n-=3,wf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function vl(t){function n(j){return Xc(j,t)}ps!==null&&Xc(ps,t),ms!==null&&Xc(ms,t),gs!==null&&Xc(gs,t),ml.forEach(n),gl.forEach(n);for(var a=0;a<_s.length;a++){var o=_s[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<_s.length&&(a=_s[0],a.blockedOn===null);)W0(a),a.blockedOn===null&&_s.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],b=u[En]||null;if(typeof f=="function")b||Z0(a);else if(b){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,b=f[En]||null)R=b.formAction;else if(wh(u)!==null)continue}else R=b.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Z0(a)}}}function Nh(t){this._internalRoot=t}Wc.prototype.render=Nh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Ri();V0(a,o,t,n,null,null)},Wc.prototype.unmount=Nh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;V0(t.current,2,null,t,null,null),Cc(),n[Xn]=null}};function Wc(t){this._internalRoot=t}Wc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Rt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<_s.length&&n!==0&&n<_s[a].priority;a++);_s.splice(a,0,t),a===0&&W0(t)}};var K0=e.version;if(K0!=="19.1.0")throw Error(s(527,K0,"19.1.0"));ne.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var jy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yc.isDisabled&&Yc.supportsFiber)try{ue=Yc.inject(jy),Le=Yc}catch{}}return yl.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=hg,f=dg,b=pg,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(R=n.unstable_transitionCallbacks)),n=H0(t,1,!1,null,null,a,o,u,f,b,R,null),t[Xn]=n.current,dh(t),new Nh(n)},yl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=hg,b=dg,R=pg,j=null,re=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(j=a.unstable_transitionCallbacks),a.formState!==void 0&&(re=a.formState)),n=H0(t,1,!0,n,a??null,o,u,f,b,R,j,re),n.context=G0(null),a=n.current,o=Ri(),o=Pt(o),u=es(o),u.callback=null,ts(a,u,o),a=o,n.current.lanes=a,ve(n,a),ha(n),t[Xn]=n.current,dh(t),new Wc(n)},yl.version="19.1.0",yl}var r_;function iS(){if(r_)return Oh.exports;r_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Oh.exports=nS(),Oh.exports}var aS=iS();/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rS=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),o_=r=>{const e=rS(r);return e.charAt(0).toUpperCase()+e.slice(1)},bv=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),oS=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=we.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},p)=>we.createElement("svg",{ref:p,...lS,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:bv("lucide",l),...!c&&!oS(d)&&{"aria-hidden":"true"},...d},[...h.map(([m,_])=>we.createElement(m,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=(r,e)=>{const i=we.forwardRef(({className:s,...l},c)=>we.createElement(cS,{ref:c,iconNode:e,className:bv(`lucide-${sS(o_(r))}`,`lucide-${r}`,s),...l}));return i.displayName=o_(r),i};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],l_=Ft("activity",uS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"1qyhux"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]],hS=Ft("armchair",fS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Sl=Ft("arrow-up-right",dS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],mS=Ft("arrow-up",pS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],Bh=Ft("boxes",gS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Md=Ft("check",_S);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],xS=Ft("chevron-right",vS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],SS=Ft("circle-check",yS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],bS=Ft("database",MS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],bd=Ft("download",ES);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],Fh=Ft("file-spreadsheet",TS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Hh=Ft("file-text",AS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],CS=Ft("flask-conical",RS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Ed=Ft("folder-open",wS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],c_=Ft("image",DS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Ev=Ft("layers",NS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Mu=Ft("layout-grid",US);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],OS=Ft("leaf",LS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],u_=Ft("loader-circle",PS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],IS=Ft("maximize",zS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M5 12h14",key:"1ays0h"}]],f_=Ft("minus",BS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],HS=Ft("move",FS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]],VS=Ft("panel-right-close",GS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]],Zc=Ft("paperclip",jS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Gh=Ft("play",kS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Kc=Ft("plus",XS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],pp=Ft("refresh-cw",qS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],h_=Ft("save",WS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ZS=Ft("settings",YS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Vh=Ft("sparkles",KS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],d_=Ft("square",QS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Tv=Ft("upload",JS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],eM=Ft("wifi-off",$S);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ml=Ft("x",tM);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mp="176",Wa={ROTATE:0,DOLLY:1,PAN:2},Rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nM=0,p_=1,iM=2,Av=1,Rv=2,Xa=3,Za=0,hi=1,ga=2,Cs=0,fo=1,m_=2,g_=3,__=4,aM=5,rr=100,sM=101,rM=102,oM=103,lM=104,cM=200,uM=201,fM=202,hM=203,Td=204,Ad=205,dM=206,pM=207,mM=208,gM=209,_M=210,vM=211,xM=212,yM=213,SM=214,Rd=0,Cd=1,wd=2,po=3,Dd=4,Nd=5,Ud=6,Ld=7,Cv=0,MM=1,bM=2,ws=0,EM=1,TM=2,AM=3,wv=4,RM=5,CM=6,wM=7,Dv=300,mo=301,go=302,Od=303,Pd=304,Ou=306,zd=1e3,lr=1001,Id=1002,Ni=1003,DM=1004,Qc=1005,_a=1006,jh=1007,cr=1008,ya=1009,Nv=1010,Uv=1011,Ul=1012,gp=1013,ur=1014,va=1015,Fl=1016,_p=1017,vp=1018,Ll=1020,Lv=35902,Ov=1021,Pv=1022,ea=1023,Ol=1026,Pl=1027,xp=1028,yp=1029,zv=1030,Sp=1031,Mp=1033,bu=33776,Eu=33777,Tu=33778,Au=33779,Bd=35840,Fd=35841,Hd=35842,Gd=35843,Vd=36196,jd=37492,kd=37496,Xd=37808,qd=37809,Wd=37810,Yd=37811,Zd=37812,Kd=37813,Qd=37814,Jd=37815,$d=37816,ep=37817,tp=37818,np=37819,ip=37820,ap=37821,Ru=36492,sp=36494,rp=36495,Iv=36283,op=36284,lp=36285,cp=36286,NM=3200,UM=3201,Bv=0,LM=1,As="",ti="srgb",_o="srgb-linear",Nu="linear",en="srgb",Zr=7680,v_=519,OM=512,PM=513,zM=514,Fv=515,IM=516,BM=517,FM=518,HM=519,x_=35044,y_="300 es",qa=2e3,Uu=2001;class dr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cu=Math.PI/180,up=180/Math.PI;function Hl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Yn[r&255]+Yn[r>>8&255]+Yn[r>>16&255]+Yn[r>>24&255]+"-"+Yn[e&255]+Yn[e>>8&255]+"-"+Yn[e>>16&15|64]+Yn[e>>24&255]+"-"+Yn[i&63|128]+Yn[i>>8&255]+"-"+Yn[i>>16&255]+Yn[i>>24&255]+Yn[s&255]+Yn[s>>8&255]+Yn[s>>16&255]+Yn[s>>24&255]).toLowerCase()}function At(r,e,i){return Math.max(e,Math.min(i,r))}function GM(r,e){return(r%e+e)%e}function kh(r,e,i){return(1-i)*r+i*e}function bl(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ci(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const VM={DEG2RAD:Cu};class gt{constructor(e=0,i=0){gt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(At(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class St{constructor(e,i,s,l,c,h,d,p,m){St.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,p,m)}set(e,i,s,l,c,h,d,p,m){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=p,_[6]=s,_[7]=h,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],_=s[4],x=s[7],S=s[2],M=s[5],E=s[8],w=l[0],y=l[3],g=l[6],O=l[1],L=l[4],N=l[7],F=l[2],I=l[5],V=l[8];return c[0]=h*w+d*O+p*F,c[3]=h*y+d*L+p*I,c[6]=h*g+d*N+p*V,c[1]=m*w+_*O+x*F,c[4]=m*y+_*L+x*I,c[7]=m*g+_*N+x*V,c[2]=S*w+M*O+E*F,c[5]=S*y+M*L+E*I,c[8]=S*g+M*N+E*V,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return i*h*_-i*d*m-s*c*_+s*d*p+l*c*m-l*h*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],_=e[8],x=_*h-d*m,S=d*p-_*c,M=m*c-h*p,E=i*x+s*S+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=x*w,e[1]=(l*m-_*s)*w,e[2]=(d*s-l*h)*w,e[3]=S*w,e[4]=(_*i-l*p)*w,e[5]=(l*c-d*i)*w,e[6]=M*w,e[7]=(s*p-m*i)*w,e[8]=(h*i-s*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Xh.makeScale(e,i)),this}rotate(e){return this.premultiply(Xh.makeRotation(-e)),this}translate(e,i){return this.premultiply(Xh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xh=new St;function Hv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Lu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function jM(){const r=Lu("canvas");return r.style.display="block",r}const S_={};function wu(r){r in S_||(S_[r]=!0,console.warn(r))}function kM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function XM(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qM(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const M_=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b_=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function WM(){const r={enabled:!0,workingColorSpace:_o,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===en&&(l.r=Ya(l.r),l.g=Ya(l.g),l.b=Ya(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===en&&(l.r=ho(l.r),l.g=ho(l.g),l.b=ho(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===As?Nu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[_o]:{primaries:e,whitePoint:s,transfer:Nu,toXYZ:M_,fromXYZ:b_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:s,transfer:en,toXYZ:M_,fromXYZ:b_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),r}const Vt=WM();function Ya(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ho(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Kr;class YM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Kr===void 0&&(Kr=Lu("canvas")),Kr.width=e.width,Kr.height=e.height;const l=Kr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Kr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Lu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ya(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ya(i[s]/255)*255):i[s]=Ya(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZM=0;class bp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Hl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(qh(l[h].image)):c.push(qh(l[h]))}else c=qh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function qh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?YM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let KM=0;class Kn extends dr{constructor(e=Kn.DEFAULT_IMAGE,i=Kn.DEFAULT_MAPPING,s=lr,l=lr,c=_a,h=cr,d=ea,p=ya,m=Kn.DEFAULT_ANISOTROPY,_=As){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Hl(),this.name="",this.source=new bp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zd:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zd:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=Dv;Kn.DEFAULT_ANISOTROPY=1;class xn{constructor(e=0,i=0,s=0,l=1){xn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const p=e.elements,m=p[0],_=p[4],x=p[8],S=p[1],M=p[5],E=p[9],w=p[2],y=p[6],g=p[10];if(Math.abs(_-S)<.01&&Math.abs(x-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+S)<.1&&Math.abs(x+w)<.1&&Math.abs(E+y)<.1&&Math.abs(m+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,N=(M+1)/2,F=(g+1)/2,I=(_+S)/4,V=(x+w)/4,B=(E+y)/4;return L>N&&L>F?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=I/s,c=V/s):N>F?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=I/l,c=B/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=V/c,l=B/c),this.set(s,l,c,i),this}let O=Math.sqrt((y-E)*(y-E)+(x-w)*(x-w)+(S-_)*(S-_));return Math.abs(O)<.001&&(O=1),this.x=(y-E)/O,this.y=(x-w)/O,this.z=(S-_)/O,this.w=Math.acos((m+M+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this.z=At(this.z,e.z,i.z),this.w=At(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this.z=At(this.z,e,i),this.w=At(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QM extends dr{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth?s.depth:1,this.scissor=new xn(0,0,e,i),this.scissorTest=!1,this.viewport=new xn(0,0,e,i);const l={width:e,height:i,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_a,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const c=new Kn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new bp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fr extends QM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Gv extends Kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ni,this.minFilter=Ni,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JM extends Kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ni,this.minFilter=Ni,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let p=s[l+0],m=s[l+1],_=s[l+2],x=s[l+3];const S=c[h+0],M=c[h+1],E=c[h+2],w=c[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=_,e[i+3]=x;return}if(d===1){e[i+0]=S,e[i+1]=M,e[i+2]=E,e[i+3]=w;return}if(x!==w||p!==S||m!==M||_!==E){let y=1-d;const g=p*S+m*M+_*E+x*w,O=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const F=Math.sqrt(L),I=Math.atan2(F,g*O);y=Math.sin(y*I)/F,d=Math.sin(d*I)/F}const N=d*O;if(p=p*y+S*N,m=m*y+M*N,_=_*y+E*N,x=x*y+w*N,y===1-d){const F=1/Math.sqrt(p*p+m*m+_*_+x*x);p*=F,m*=F,_*=F,x*=F}}e[i]=p,e[i+1]=m,e[i+2]=_,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],p=s[l+1],m=s[l+2],_=s[l+3],x=c[h],S=c[h+1],M=c[h+2],E=c[h+3];return e[i]=d*E+_*x+p*M-m*S,e[i+1]=p*E+_*S+m*x-d*M,e[i+2]=m*E+_*M+d*S-p*x,e[i+3]=_*E-d*x-p*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(s/2),_=d(l/2),x=d(c/2),S=p(s/2),M=p(l/2),E=p(c/2);switch(h){case"XYZ":this._x=S*_*x+m*M*E,this._y=m*M*x-S*_*E,this._z=m*_*E+S*M*x,this._w=m*_*x-S*M*E;break;case"YXZ":this._x=S*_*x+m*M*E,this._y=m*M*x-S*_*E,this._z=m*_*E-S*M*x,this._w=m*_*x+S*M*E;break;case"ZXY":this._x=S*_*x-m*M*E,this._y=m*M*x+S*_*E,this._z=m*_*E+S*M*x,this._w=m*_*x-S*M*E;break;case"ZYX":this._x=S*_*x-m*M*E,this._y=m*M*x+S*_*E,this._z=m*_*E-S*M*x,this._w=m*_*x+S*M*E;break;case"YZX":this._x=S*_*x+m*M*E,this._y=m*M*x+S*_*E,this._z=m*_*E-S*M*x,this._w=m*_*x-S*M*E;break;case"XZY":this._x=S*_*x-m*M*E,this._y=m*M*x-S*_*E,this._z=m*_*E+S*M*x,this._w=m*_*x+S*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],_=i[6],x=i[10],S=s+d+x;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(_-p)*M,this._y=(c-m)*M,this._z=(h-l)*M}else if(s>d&&s>x){const M=2*Math.sqrt(1+s-d-x);this._w=(_-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+m)/M}else if(d>x){const M=2*Math.sqrt(1+d-s-x);this._w=(c-m)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+x-s-d);this._w=(h-l)/M,this._x=(c+m)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,p=i._y,m=i._z,_=i._w;return this._x=s*_+h*d+l*m-c*p,this._y=l*_+h*p+c*d-s*m,this._z=c*_+h*m+s*p-l*d,this._w=h*_-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),x=Math.sin((1-i)*_)/m,S=Math.sin(i*_)/m;return this._w=h*x+this._w*S,this._x=s*x+this._x*S,this._y=l*x+this._y*S,this._z=c*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,i=0,s=0){ie.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(E_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(E_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*s),_=2*(d*i-c*l),x=2*(c*s-h*i);return this.x=i+p*m+h*x-d*_,this.y=s+p*_+d*m-c*x,this.z=l+p*x+c*_-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this.z=At(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this.z=At(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-s*p,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Wh.copy(this).projectOnVector(e),this.sub(Wh)}reflect(e){return this.sub(Wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(At(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wh=new ie,E_=new hr;class pr{constructor(e=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Yi):Yi.fromBufferAttribute(c,h),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Jc.copy(s.boundingBox)),Jc.applyMatrix4(e.matrixWorld),this.union(Jc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(El),$c.subVectors(this.max,El),Qr.subVectors(e.a,El),Jr.subVectors(e.b,El),$r.subVectors(e.c,El),xs.subVectors(Jr,Qr),ys.subVectors($r,Jr),Js.subVectors(Qr,$r);let i=[0,-xs.z,xs.y,0,-ys.z,ys.y,0,-Js.z,Js.y,xs.z,0,-xs.x,ys.z,0,-ys.x,Js.z,0,-Js.x,-xs.y,xs.x,0,-ys.y,ys.x,0,-Js.y,Js.x,0];return!Yh(i,Qr,Jr,$r,$c)||(i=[1,0,0,0,1,0,0,0,1],!Yh(i,Qr,Jr,$r,$c))?!1:(eu.crossVectors(xs,ys),i=[eu.x,eu.y,eu.z],Yh(i,Qr,Jr,$r,$c))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fa=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Yi=new ie,Jc=new pr,Qr=new ie,Jr=new ie,$r=new ie,xs=new ie,ys=new ie,Js=new ie,El=new ie,$c=new ie,eu=new ie,$s=new ie;function Yh(r,e,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){$s.fromArray(r,c);const d=l.x*Math.abs($s.x)+l.y*Math.abs($s.y)+l.z*Math.abs($s.z),p=e.dot($s),m=i.dot($s),_=s.dot($s);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const $M=new pr,Tl=new ie,Zh=new ie;class Gl{constructor(e=new ie,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):$M.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tl.subVectors(e,this.center);const i=Tl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Tl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tl.copy(e.center).add(Zh)),this.expandByPoint(Tl.copy(e.center).sub(Zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ha=new ie,Kh=new ie,tu=new ie,Ss=new ie,Qh=new ie,nu=new ie,Jh=new ie;class Ep{constructor(e=new ie,i=new ie(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ha)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ha.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ha.copy(this.origin).addScaledVector(this.direction,i),Ha.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Kh.copy(e).add(i).multiplyScalar(.5),tu.copy(i).sub(e).normalize(),Ss.copy(this.origin).sub(Kh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(tu),d=Ss.dot(this.direction),p=-Ss.dot(tu),m=Ss.lengthSq(),_=Math.abs(1-h*h);let x,S,M,E;if(_>0)if(x=h*p-d,S=h*d-p,E=c*_,x>=0)if(S>=-E)if(S<=E){const w=1/_;x*=w,S*=w,M=x*(x+h*S+2*d)+S*(h*x+S+2*p)+m}else S=c,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*p)+m;else S=-c,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*p)+m;else S<=-E?(x=Math.max(0,-(-h*c+d)),S=x>0?-c:Math.min(Math.max(-c,-p),c),M=-x*x+S*(S+2*p)+m):S<=E?(x=0,S=Math.min(Math.max(-c,-p),c),M=S*(S+2*p)+m):(x=Math.max(0,-(h*c+d)),S=x>0?c:Math.min(Math.max(-c,-p),c),M=-x*x+S*(S+2*p)+m);else S=h>0?-c:c,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Kh).addScaledVector(tu,S),M}intersectSphere(e,i){Ha.subVectors(e.center,this.origin);const s=Ha.dot(this.direction),l=Ha.dot(Ha)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,p;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,S=this.origin;return m>=0?(s=(e.min.x-S.x)*m,l=(e.max.x-S.x)*m):(s=(e.max.x-S.x)*m,l=(e.min.x-S.x)*m),_>=0?(c=(e.min.y-S.y)*_,h=(e.max.y-S.y)*_):(c=(e.max.y-S.y)*_,h=(e.min.y-S.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(e.min.z-S.z)*x,p=(e.max.z-S.z)*x):(d=(e.max.z-S.z)*x,p=(e.min.z-S.z)*x),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ha)!==null}intersectTriangle(e,i,s,l,c){Qh.subVectors(i,e),nu.subVectors(s,e),Jh.crossVectors(Qh,nu);let h=this.direction.dot(Jh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ss.subVectors(this.origin,e);const p=d*this.direction.dot(nu.crossVectors(Ss,nu));if(p<0)return null;const m=d*this.direction.dot(Qh.cross(Ss));if(m<0||p+m>h)return null;const _=-d*Ss.dot(Jh);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(e,i,s,l,c,h,d,p,m,_,x,S,M,E,w,y){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,p,m,_,x,S,M,E,w,y)}set(e,i,s,l,c,h,d,p,m,_,x,S,M,E,w,y){const g=this.elements;return g[0]=e,g[4]=i,g[8]=s,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=x,g[14]=S,g[3]=M,g[7]=E,g[11]=w,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/eo.setFromMatrixColumn(e,0).length(),c=1/eo.setFromMatrixColumn(e,1).length(),h=1/eo.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const S=h*_,M=h*x,E=d*_,w=d*x;i[0]=p*_,i[4]=-p*x,i[8]=m,i[1]=M+E*m,i[5]=S-w*m,i[9]=-d*p,i[2]=w-S*m,i[6]=E+M*m,i[10]=h*p}else if(e.order==="YXZ"){const S=p*_,M=p*x,E=m*_,w=m*x;i[0]=S+w*d,i[4]=E*d-M,i[8]=h*m,i[1]=h*x,i[5]=h*_,i[9]=-d,i[2]=M*d-E,i[6]=w+S*d,i[10]=h*p}else if(e.order==="ZXY"){const S=p*_,M=p*x,E=m*_,w=m*x;i[0]=S-w*d,i[4]=-h*x,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*_,i[9]=w-S*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const S=h*_,M=h*x,E=d*_,w=d*x;i[0]=p*_,i[4]=E*m-M,i[8]=S*m+w,i[1]=p*x,i[5]=w*m+S,i[9]=M*m-E,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const S=h*p,M=h*m,E=d*p,w=d*m;i[0]=p*_,i[4]=w-S*x,i[8]=E*x+M,i[1]=x,i[5]=h*_,i[9]=-d*_,i[2]=-m*_,i[6]=M*x+E,i[10]=S-w*x}else if(e.order==="XZY"){const S=h*p,M=h*m,E=d*p,w=d*m;i[0]=p*_,i[4]=-x,i[8]=m*_,i[1]=S*x+w,i[5]=h*_,i[9]=M*x-E,i[2]=E*x-M,i[6]=d*_,i[10]=w*x+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eb,e,tb)}lookAt(e,i,s){const l=this.elements;return wi.subVectors(e,i),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),Ms.crossVectors(s,wi),Ms.lengthSq()===0&&(Math.abs(s.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),Ms.crossVectors(s,wi)),Ms.normalize(),iu.crossVectors(wi,Ms),l[0]=Ms.x,l[4]=iu.x,l[8]=wi.x,l[1]=Ms.y,l[5]=iu.y,l[9]=wi.y,l[2]=Ms.z,l[6]=iu.z,l[10]=wi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],_=s[1],x=s[5],S=s[9],M=s[13],E=s[2],w=s[6],y=s[10],g=s[14],O=s[3],L=s[7],N=s[11],F=s[15],I=l[0],V=l[4],B=l[8],U=l[12],C=l[1],H=l[5],$=l[9],oe=l[13],_e=l[2],ge=l[6],G=l[10],ne=l[14],Z=l[3],Me=l[7],P=l[11],ae=l[15];return c[0]=h*I+d*C+p*_e+m*Z,c[4]=h*V+d*H+p*ge+m*Me,c[8]=h*B+d*$+p*G+m*P,c[12]=h*U+d*oe+p*ne+m*ae,c[1]=_*I+x*C+S*_e+M*Z,c[5]=_*V+x*H+S*ge+M*Me,c[9]=_*B+x*$+S*G+M*P,c[13]=_*U+x*oe+S*ne+M*ae,c[2]=E*I+w*C+y*_e+g*Z,c[6]=E*V+w*H+y*ge+g*Me,c[10]=E*B+w*$+y*G+g*P,c[14]=E*U+w*oe+y*ne+g*ae,c[3]=O*I+L*C+N*_e+F*Z,c[7]=O*V+L*H+N*ge+F*Me,c[11]=O*B+L*$+N*G+F*P,c[15]=O*U+L*oe+N*ne+F*ae,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],p=e[9],m=e[13],_=e[2],x=e[6],S=e[10],M=e[14],E=e[3],w=e[7],y=e[11],g=e[15];return E*(+c*p*x-l*m*x-c*d*S+s*m*S+l*d*M-s*p*M)+w*(+i*p*M-i*m*S+c*h*S-l*h*M+l*m*_-c*p*_)+y*(+i*m*x-i*d*M-c*h*x+s*h*M+c*d*_-s*m*_)+g*(-l*d*_-i*p*x+i*d*S+l*h*x-s*h*S+s*p*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],_=e[8],x=e[9],S=e[10],M=e[11],E=e[12],w=e[13],y=e[14],g=e[15],O=x*y*m-w*S*m+w*p*M-d*y*M-x*p*g+d*S*g,L=E*S*m-_*y*m-E*p*M+h*y*M+_*p*g-h*S*g,N=_*w*m-E*x*m+E*d*M-h*w*M-_*d*g+h*x*g,F=E*x*p-_*w*p-E*d*S+h*w*S+_*d*y-h*x*y,I=i*O+s*L+l*N+c*F;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/I;return e[0]=O*V,e[1]=(w*S*c-x*y*c-w*l*M+s*y*M+x*l*g-s*S*g)*V,e[2]=(d*y*c-w*p*c+w*l*m-s*y*m-d*l*g+s*p*g)*V,e[3]=(x*p*c-d*S*c-x*l*m+s*S*m+d*l*M-s*p*M)*V,e[4]=L*V,e[5]=(_*y*c-E*S*c+E*l*M-i*y*M-_*l*g+i*S*g)*V,e[6]=(E*p*c-h*y*c-E*l*m+i*y*m+h*l*g-i*p*g)*V,e[7]=(h*S*c-_*p*c+_*l*m-i*S*m-h*l*M+i*p*M)*V,e[8]=N*V,e[9]=(E*x*c-_*w*c-E*s*M+i*w*M+_*s*g-i*x*g)*V,e[10]=(h*w*c-E*d*c+E*s*m-i*w*m-h*s*g+i*d*g)*V,e[11]=(_*d*c-h*x*c-_*s*m+i*x*m+h*s*M-i*d*M)*V,e[12]=F*V,e[13]=(_*w*l-E*x*l+E*s*S-i*w*S-_*s*y+i*x*y)*V,e[14]=(E*d*l-h*w*l-E*s*p+i*w*p+h*s*y-i*d*y)*V,e[15]=(h*x*l-_*d*l+_*s*p-i*x*p-h*s*S+i*d*S)*V,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,p=e.z,m=c*h,_=c*d;return this.set(m*h+s,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+s,_*p-l*h,0,m*p-l*d,_*p+l*h,c*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,_=h+h,x=d+d,S=c*m,M=c*_,E=c*x,w=h*_,y=h*x,g=d*x,O=p*m,L=p*_,N=p*x,F=s.x,I=s.y,V=s.z;return l[0]=(1-(w+g))*F,l[1]=(M+N)*F,l[2]=(E-L)*F,l[3]=0,l[4]=(M-N)*I,l[5]=(1-(S+g))*I,l[6]=(y+O)*I,l[7]=0,l[8]=(E+L)*V,l[9]=(y-O)*V,l[10]=(1-(S+w))*V,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=eo.set(l[0],l[1],l[2]).length();const h=eo.set(l[4],l[5],l[6]).length(),d=eo.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Zi.copy(this);const m=1/c,_=1/h,x=1/d;return Zi.elements[0]*=m,Zi.elements[1]*=m,Zi.elements[2]*=m,Zi.elements[4]*=_,Zi.elements[5]*=_,Zi.elements[6]*=_,Zi.elements[8]*=x,Zi.elements[9]*=x,Zi.elements[10]*=x,i.setFromRotationMatrix(Zi),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=qa){const p=this.elements,m=2*c/(i-e),_=2*c/(s-l),x=(i+e)/(i-e),S=(s+l)/(s-l);let M,E;if(d===qa)M=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===Uu)M=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=qa){const p=this.elements,m=1/(i-e),_=1/(s-l),x=1/(h-c),S=(i+e)*m,M=(s+l)*_;let E,w;if(d===qa)E=(h+c)*x,w=-2*x;else if(d===Uu)E=c*x,w=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=w,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const eo=new ie,Zi=new on,eb=new ie(0,0,0),tb=new ie(1,1,1),Ms=new ie,iu=new ie,wi=new ie,T_=new on,A_=new hr;class Sa{constructor(e=0,i=0,s=0,l=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],_=l[9],x=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-At(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(At(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-At(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(At(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return T_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(T_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return A_.setFromEuler(this),this.setFromQuaternion(A_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class Tp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nb=0;const R_=new ie,to=new hr,Ga=new on,au=new ie,Al=new ie,ib=new ie,ab=new hr,C_=new ie(1,0,0),w_=new ie(0,1,0),D_=new ie(0,0,1),N_={type:"added"},sb={type:"removed"},no={type:"childadded",child:null},$h={type:"childremoved",child:null};class Hn extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=Hl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new ie,i=new Sa,s=new hr,l=new ie(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new St}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return to.setFromAxisAngle(e,i),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,i){return to.setFromAxisAngle(e,i),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(C_,e)}rotateY(e){return this.rotateOnAxis(w_,e)}rotateZ(e){return this.rotateOnAxis(D_,e)}translateOnAxis(e,i){return R_.copy(e).applyQuaternion(this.quaternion),this.position.add(R_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(C_,e)}translateY(e){return this.translateOnAxis(w_,e)}translateZ(e){return this.translateOnAxis(D_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ga.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?au.copy(e):au.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ga.lookAt(Al,au,this.up):Ga.lookAt(au,Al,this.up),this.quaternion.setFromRotationMatrix(Ga),l&&(Ga.extractRotation(l.matrixWorld),to.setFromRotationMatrix(Ga),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(N_),no.child=e,this.dispatchEvent(no),no.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(sb),$h.child=e,this.dispatchEvent($h),$h.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ga.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ga.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ga),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(N_),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,e,ib),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,ab,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const x=p[m];c(e.shapes,x)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),_=h(e.images),x=h(e.shapes),S=h(e.skeletons),M=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new ie(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ki=new ie,Va=new ie,ed=new ie,ja=new ie,io=new ie,ao=new ie,U_=new ie,td=new ie,nd=new ie,id=new ie,ad=new xn,sd=new xn,rd=new xn;class $i{constructor(e=new ie,i=new ie,s=new ie){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ki.subVectors(e,i),l.cross(Ki);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ki.subVectors(l,i),Va.subVectors(s,i),ed.subVectors(e,i);const h=Ki.dot(Ki),d=Ki.dot(Va),p=Ki.dot(ed),m=Va.dot(Va),_=Va.dot(ed),x=h*m-d*d;if(x===0)return c.set(0,0,0),null;const S=1/x,M=(m*p-d*_)*S,E=(h*_-d*p)*S;return c.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ja)===null?!1:ja.x>=0&&ja.y>=0&&ja.x+ja.y<=1}static getInterpolation(e,i,s,l,c,h,d,p){return this.getBarycoord(e,i,s,l,ja)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ja.x),p.addScaledVector(h,ja.y),p.addScaledVector(d,ja.z),p)}static getInterpolatedAttribute(e,i,s,l,c,h){return ad.setScalar(0),sd.setScalar(0),rd.setScalar(0),ad.fromBufferAttribute(e,i),sd.fromBufferAttribute(e,s),rd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(ad,c.x),h.addScaledVector(sd,c.y),h.addScaledVector(rd,c.z),h}static isFrontFacing(e,i,s,l){return Ki.subVectors(s,i),Va.subVectors(e,i),Ki.cross(Va).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ki.subVectors(this.c,this.b),Va.subVectors(this.a,this.b),Ki.cross(Va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return $i.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return $i.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return $i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;io.subVectors(l,s),ao.subVectors(c,s),td.subVectors(e,s);const p=io.dot(td),m=ao.dot(td);if(p<=0&&m<=0)return i.copy(s);nd.subVectors(e,l);const _=io.dot(nd),x=ao.dot(nd);if(_>=0&&x<=_)return i.copy(l);const S=p*x-_*m;if(S<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(s).addScaledVector(io,h);id.subVectors(e,c);const M=io.dot(id),E=ao.dot(id);if(E>=0&&M<=E)return i.copy(c);const w=M*m-p*E;if(w<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(s).addScaledVector(ao,d);const y=_*E-M*x;if(y<=0&&x-_>=0&&M-E>=0)return U_.subVectors(c,l),d=(x-_)/(x-_+(M-E)),i.copy(l).addScaledVector(U_,d);const g=1/(y+w+S);return h=w*g,d=S*g,i.copy(s).addScaledVector(io,h).addScaledVector(ao,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bs={h:0,s:0,l:0},su={h:0,s:0,l:0};function od(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Nt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Vt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Vt.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Vt.workingColorSpace){if(e=GM(e,1),i=At(i,0,1),s=At(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=od(h,c,e+1/3),this.g=od(h,c,e),this.b=od(h,c,e-1/3)}return Vt.toWorkingColorSpace(this,l),this}setStyle(e,i=ti){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ti){const s=Vv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Vt.fromWorkingColorSpace(Zn.copy(this),e),Math.round(At(Zn.r*255,0,255))*65536+Math.round(At(Zn.g*255,0,255))*256+Math.round(At(Zn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Vt.workingColorSpace){Vt.fromWorkingColorSpace(Zn.copy(this),i);const s=Zn.r,l=Zn.g,c=Zn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const _=(d+h)/2;if(d===h)p=0,m=0;else{const x=h-d;switch(m=_<=.5?x/(h+d):x/(2-h-d),h){case s:p=(l-c)/x+(l<c?6:0);break;case l:p=(c-s)/x+2;break;case c:p=(s-l)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,i=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(Zn.copy(this),i),e.r=Zn.r,e.g=Zn.g,e.b=Zn.b,e}getStyle(e=ti){Vt.fromWorkingColorSpace(Zn.copy(this),e);const i=Zn.r,s=Zn.g,l=Zn.b;return e!==ti?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(bs),this.setHSL(bs.h+e,bs.s+i,bs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(bs),e.getHSL(su);const s=kh(bs.h,su.h,i),l=kh(bs.s,su.s,i),c=kh(bs.l,su.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zn=new Nt;Nt.NAMES=Vv;let rb=0;class yo extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=Hl(),this.name="",this.type="Material",this.blending=fo,this.side=Za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=Ad,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(s.blending=this.blending),this.side!==Za&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Td&&(s.blendSrc=this.blendSrc),this.blendDst!==Ad&&(s.blendDst=this.blendDst),this.blendEquation!==rr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vo extends yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sa,this.combine=Cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cn=new ie,ru=new gt;let ob=0;class ta{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ob++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=x_,this.updateRanges=[],this.gpuType=va,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)ru.fromBufferAttribute(this,i),ru.applyMatrix3(e),this.setXY(i,ru.x,ru.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Cn.fromBufferAttribute(this,i),Cn.applyMatrix3(e),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Cn.fromBufferAttribute(this,i),Cn.applyMatrix4(e),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Cn.fromBufferAttribute(this,i),Cn.applyNormalMatrix(e),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Cn.fromBufferAttribute(this,i),Cn.transformDirection(e),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=bl(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ci(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=bl(i,this.array)),i}setX(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=bl(i,this.array)),i}setY(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=bl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=bl(i,this.array)),i}setW(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array),l=ci(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array),l=ci(l,this.array),c=ci(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==x_&&(e.usage=this.usage),e}}class jv extends ta{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class kv extends ta{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ln extends ta{constructor(e,i,s){super(new Float32Array(e),i,s)}}let lb=0;const Gi=new on,ld=new Hn,so=new ie,Di=new pr,Rl=new pr,Fn=new ie;class na extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=Hl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hv(e)?kv:jv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new St().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gi.makeRotationFromQuaternion(e),this.applyMatrix4(Gi),this}rotateX(e){return Gi.makeRotationX(e),this.applyMatrix4(Gi),this}rotateY(e){return Gi.makeRotationY(e),this.applyMatrix4(Gi),this}rotateZ(e){return Gi.makeRotationZ(e),this.applyMatrix4(Gi),this}translate(e,i,s){return Gi.makeTranslation(e,i,s),this.applyMatrix4(Gi),this}scale(e,i,s){return Gi.makeScale(e,i,s),this.applyMatrix4(Gi),this}lookAt(e){return ld.lookAt(e),ld.updateMatrix(),this.applyMatrix4(ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ln(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Di.setFromBufferAttribute(c),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Di.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Di.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Di.min),this.boundingBox.expandByPoint(Di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const s=this.boundingSphere.center;if(Di.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Rl.setFromBufferAttribute(d),this.morphTargetsRelative?(Fn.addVectors(Di.min,Rl.min),Di.expandByPoint(Fn),Fn.addVectors(Di.max,Rl.max),Di.expandByPoint(Fn)):(Di.expandByPoint(Rl.min),Di.expandByPoint(Rl.max))}Di.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)Fn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Fn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)Fn.fromBufferAttribute(d,m),p&&(so.fromBufferAttribute(e,m),Fn.add(so)),l=Math.max(l,s.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ta(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let B=0;B<s.count;B++)d[B]=new ie,p[B]=new ie;const m=new ie,_=new ie,x=new ie,S=new gt,M=new gt,E=new gt,w=new ie,y=new ie;function g(B,U,C){m.fromBufferAttribute(s,B),_.fromBufferAttribute(s,U),x.fromBufferAttribute(s,C),S.fromBufferAttribute(c,B),M.fromBufferAttribute(c,U),E.fromBufferAttribute(c,C),_.sub(m),x.sub(m),M.sub(S),E.sub(S);const H=1/(M.x*E.y-E.x*M.y);isFinite(H)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(x,-M.y).multiplyScalar(H),y.copy(x).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(H),d[B].add(w),d[U].add(w),d[C].add(w),p[B].add(y),p[U].add(y),p[C].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let B=0,U=O.length;B<U;++B){const C=O[B],H=C.start,$=C.count;for(let oe=H,_e=H+$;oe<_e;oe+=3)g(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const L=new ie,N=new ie,F=new ie,I=new ie;function V(B){F.fromBufferAttribute(l,B),I.copy(F);const U=d[B];L.copy(U),L.sub(F.multiplyScalar(F.dot(U))).normalize(),N.crossVectors(I,U);const H=N.dot(p[B])<0?-1:1;h.setXYZW(B,L.x,L.y,L.z,H)}for(let B=0,U=O.length;B<U;++B){const C=O[B],H=C.start,$=C.count;for(let oe=H,_e=H+$;oe<_e;oe+=3)V(e.getX(oe+0)),V(e.getX(oe+1)),V(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ta(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new ie,c=new ie,h=new ie,d=new ie,p=new ie,m=new ie,_=new ie,x=new ie;if(e)for(let S=0,M=e.count;S<M;S+=3){const E=e.getX(S+0),w=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,y),d.add(_),p.add(_),m.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Fn.fromBufferAttribute(e,i),Fn.normalize(),e.setXYZ(i,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,x=d.normalized,S=new m.constructor(p.length*_);let M=0,E=0;for(let w=0,y=p.length;w<y;w++){d.isInterleavedBufferAttribute?M=p[w]*d.data.stride+d.offset:M=p[w]*_;for(let g=0;g<_;g++)S[E++]=m[M++]}return new ta(S,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new na,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let _=0,x=m.length;_<x;_++){const S=m[_],M=e(S,s);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let x=0,S=m.length;x<S;x++){const M=m[x];_.push(M.toJSON(e.data))}_.length>0&&(l[p]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const c=e.morphAttributes;for(const m in c){const _=[],x=c[m];for(let S=0,M=x.length;S<M;S++)_.push(x[S].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,_=h.length;m<_;m++){const x=h[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const L_=new on,er=new Ep,ou=new Gl,O_=new ie,lu=new ie,cu=new ie,uu=new ie,cd=new ie,fu=new ie,P_=new ie,hu=new ie;class rn extends Hn{constructor(e=new na,i=new vo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){fu.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=d[p],x=c[p];_!==0&&(cd.fromBufferAttribute(x,e),h?fu.addScaledVector(cd,_):fu.addScaledVector(cd.sub(i),_))}i.add(fu)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ou.copy(s.boundingSphere),ou.applyMatrix4(c),er.copy(e.ray).recast(e.near),!(ou.containsPoint(er.origin)===!1&&(er.intersectSphere(ou,O_)===null||er.origin.distanceToSquared(O_)>(e.far-e.near)**2))&&(L_.copy(c).invert(),er.copy(e.ray).applyMatrix4(L_),!(s.boundingBox!==null&&er.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,er)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,S=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,w=S.length;E<w;E++){const y=S[E],g=h[y.materialIndex],O=Math.max(y.start,M.start),L=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let N=O,F=L;N<F;N+=3){const I=d.getX(N),V=d.getX(N+1),B=d.getX(N+2);l=du(this,g,e,s,m,_,x,I,V,B),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let y=E,g=w;y<g;y+=3){const O=d.getX(y),L=d.getX(y+1),N=d.getX(y+2);l=du(this,h,e,s,m,_,x,O,L,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,w=S.length;E<w;E++){const y=S[E],g=h[y.materialIndex],O=Math.max(y.start,M.start),L=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let N=O,F=L;N<F;N+=3){const I=N,V=N+1,B=N+2;l=du(this,g,e,s,m,_,x,I,V,B),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let y=E,g=w;y<g;y+=3){const O=y,L=y+1,N=y+2;l=du(this,h,e,s,m,_,x,O,L,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function cb(r,e,i,s,l,c,h,d){let p;if(e.side===hi?p=s.intersectTriangle(h,c,l,!0,d):p=s.intersectTriangle(l,c,h,e.side===Za,d),p===null)return null;hu.copy(d),hu.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(hu);return m<i.near||m>i.far?null:{distance:m,point:hu.clone(),object:r}}function du(r,e,i,s,l,c,h,d,p,m){r.getVertexPosition(d,lu),r.getVertexPosition(p,cu),r.getVertexPosition(m,uu);const _=cb(r,e,i,s,lu,cu,uu,P_);if(_){const x=new ie;$i.getBarycoord(P_,lu,cu,uu,x),l&&(_.uv=$i.getInterpolatedAttribute(l,d,p,m,x,new gt)),c&&(_.uv1=$i.getInterpolatedAttribute(c,d,p,m,x,new gt)),h&&(_.normal=$i.getInterpolatedAttribute(h,d,p,m,x,new ie),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:p,c:m,normal:new ie,materialIndex:0};$i.getNormal(lu,cu,uu,S.normal),_.face=S,_.barycoord=x}return _}class xa extends na{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],_=[],x=[];let S=0,M=0;E("z","y","x",-1,-1,s,i,e,h,c,0),E("z","y","x",1,-1,s,i,-e,h,c,1),E("x","z","y",1,1,e,s,i,l,h,2),E("x","z","y",1,-1,e,s,-i,l,h,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Ln(m,3)),this.setAttribute("normal",new Ln(_,3)),this.setAttribute("uv",new Ln(x,2));function E(w,y,g,O,L,N,F,I,V,B,U){const C=N/V,H=F/B,$=N/2,oe=F/2,_e=I/2,ge=V+1,G=B+1;let ne=0,Z=0;const Me=new ie;for(let P=0;P<G;P++){const ae=P*H-oe;for(let Ee=0;Ee<ge;Ee++){const Re=Ee*C-$;Me[w]=Re*O,Me[y]=ae*L,Me[g]=_e,m.push(Me.x,Me.y,Me.z),Me[w]=0,Me[y]=0,Me[g]=I>0?1:-1,_.push(Me.x,Me.y,Me.z),x.push(Ee/V),x.push(1-P/B),ne+=1}}for(let P=0;P<B;P++)for(let ae=0;ae<V;ae++){const Ee=S+ae+ge*P,Re=S+ae+ge*(P+1),ee=S+(ae+1)+ge*(P+1),ye=S+(ae+1)+ge*P;p.push(Ee,Re,ye),p.push(Re,ee,ye),Z+=6}d.addGroup(M,Z,U),M+=Z,S+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xo(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function ei(r){const e={};for(let i=0;i<r.length;i++){const s=xo(r[i]);for(const l in s)e[l]=s[l]}return e}function ub(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Xv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Vt.workingColorSpace}const fb={clone:xo,merge:ei};var hb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,db=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ds extends yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hb,this.fragmentShader=db,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=ub(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class qv extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=qa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Es=new ie,z_=new gt,I_=new gt;class Ji extends qv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=up*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return up*2*Math.atan(Math.tan(Cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Es.x,Es.y).multiplyScalar(-e/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Es.x,Es.y).multiplyScalar(-e/Es.z)}getViewSize(e,i){return this.getViewBounds(e,z_,I_),i.subVectors(I_,z_)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Cu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*s/m,l*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ro=-90,oo=1;class pb extends Hn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ji(ro,oo,e,i);l.layers=this.layers,this.add(l);const c=new Ji(ro,oo,e,i);c.layers=this.layers,this.add(c);const h=new Ji(ro,oo,e,i);h.layers=this.layers,this.add(h);const d=new Ji(ro,oo,e,i);d.layers=this.layers,this.add(d);const p=new Ji(ro,oo,e,i);p.layers=this.layers,this.add(p);const m=new Ji(ro,oo,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(e===qa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Uu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,_]=this.children,x=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,m),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(x,S,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Wv extends Kn{constructor(e=[],i=mo,s,l,c,h,d,p,m,_){super(e,i,s,l,c,h,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mb extends fr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Wv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:_a}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new xa(5,5,5),c=new Ds({name:"CubemapFromEquirect",uniforms:xo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:hi,blending:Cs});c.uniforms.tEquirect.value=i;const h=new rn(l,c),d=i.minFilter;return i.minFilter===cr&&(i.minFilter=_a),new pb(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class fi extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gb={type:"move"};class ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,s),g=this._getHandJoint(m,w);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],S=_.position.distanceTo(x.position),M=.02,E=.005;m.inputState.pinching&&S>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(gb)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new fi;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class _b extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sa,this.environmentIntensity=1,this.environmentRotation=new Sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class vb extends Kn{constructor(e=null,i=1,s=1,l,c,h,d,p,m=Ni,_=Ni,x,S){super(null,h,d,p,m,_,l,c,x,S),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class B_ extends ta{constructor(e,i,s,l=1){super(e,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const lo=new on,F_=new on,pu=[],H_=new pr,xb=new on,Cl=new rn,wl=new Gl;class yb extends rn{constructor(e,i,s){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new B_(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,xb)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new pr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,lo),H_.copy(e.boundingBox).applyMatrix4(lo),this.boundingBox.union(H_)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gl),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,lo),wl.copy(e.boundingSphere).applyMatrix4(lo),this.boundingSphere.union(wl)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=e*c+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(e,i){const s=this.matrixWorld,l=this.count;if(Cl.geometry=this.geometry,Cl.material=this.material,Cl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wl.copy(this.boundingSphere),wl.applyMatrix4(s),e.ray.intersectsSphere(wl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,lo),F_.multiplyMatrices(s,lo),Cl.matrixWorld=F_,Cl.raycast(e,pu);for(let h=0,d=pu.length;h<d;h++){const p=pu[h];p.instanceId=c,p.object=this,i.push(p)}pu.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new B_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new vb(new Float32Array(l*this.count),l,this.count,xp,va));const c=this.morphTexture.source.data.data;let h=0;for(let m=0;m<s.length;m++)h+=s[m];const d=this.geometry.morphTargetsRelative?1:1-h,p=l*e;c[p]=d,c.set(s,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const fd=new ie,Sb=new ie,Mb=new St;class Ts{constructor(e=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=fd.subVectors(s,i).cross(Sb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(fd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Mb.getNormalMatrix(e),l=this.coplanarPoint(fd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new Gl,mu=new ie;class Ap{constructor(e=new Ts,i=new Ts,s=new Ts,l=new Ts,c=new Ts,h=new Ts){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=qa){const s=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],p=l[3],m=l[4],_=l[5],x=l[6],S=l[7],M=l[8],E=l[9],w=l[10],y=l[11],g=l[12],O=l[13],L=l[14],N=l[15];if(s[0].setComponents(p-c,S-m,y-M,N-g).normalize(),s[1].setComponents(p+c,S+m,y+M,N+g).normalize(),s[2].setComponents(p+h,S+_,y+E,N+O).normalize(),s[3].setComponents(p-h,S-_,y-E,N-O).normalize(),s[4].setComponents(p-d,S-x,y-w,N-L).normalize(),i===qa)s[5].setComponents(p+d,S+x,y+w,N+L).normalize();else if(i===Uu)s[5].setComponents(d,x,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),tr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(mu.x=l.normal.x>0?e.max.x:e.min.x,mu.y=l.normal.y>0?e.max.y:e.min.y,mu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(mu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yv extends Kn{constructor(e,i,s,l,c,h,d,p,m){super(e,i,s,l,c,h,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zv extends Kn{constructor(e,i,s=ur,l,c,h,d=Ni,p=Ni,m,_=Ol){if(_!==Ol&&_!==Pl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,h,d,p,_,s,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Rp extends na{constructor(e=1,i=1,s=1,l=32,c=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const _=[],x=[],S=[],M=[];let E=0;const w=[],y=s/2;let g=0;O(),h===!1&&(e>0&&L(!0),i>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new Ln(x,3)),this.setAttribute("normal",new Ln(S,3)),this.setAttribute("uv",new Ln(M,2));function O(){const N=new ie,F=new ie;let I=0;const V=(i-e)/s;for(let B=0;B<=c;B++){const U=[],C=B/c,H=C*(i-e)+e;for(let $=0;$<=l;$++){const oe=$/l,_e=oe*p+d,ge=Math.sin(_e),G=Math.cos(_e);F.x=H*ge,F.y=-C*s+y,F.z=H*G,x.push(F.x,F.y,F.z),N.set(ge,V,G).normalize(),S.push(N.x,N.y,N.z),M.push(oe,1-C),U.push(E++)}w.push(U)}for(let B=0;B<l;B++)for(let U=0;U<c;U++){const C=w[U][B],H=w[U+1][B],$=w[U+1][B+1],oe=w[U][B+1];(e>0||U!==0)&&(_.push(C,H,oe),I+=3),(i>0||U!==c-1)&&(_.push(H,$,oe),I+=3)}m.addGroup(g,I,0),g+=I}function L(N){const F=E,I=new gt,V=new ie;let B=0;const U=N===!0?e:i,C=N===!0?1:-1;for(let $=1;$<=l;$++)x.push(0,y*C,0),S.push(0,C,0),M.push(.5,.5),E++;const H=E;for(let $=0;$<=l;$++){const _e=$/l*p+d,ge=Math.cos(_e),G=Math.sin(_e);V.x=U*G,V.y=y*C,V.z=U*ge,x.push(V.x,V.y,V.z),S.push(0,C,0),I.x=ge*.5+.5,I.y=G*.5*C+.5,M.push(I.x,I.y),E++}for(let $=0;$<l;$++){const oe=F+$,_e=H+$;N===!0?_.push(_e,_e+1,oe):_.push(_e+1,_e,oe),B+=3}m.addGroup(g,B,N===!0?1:2),g+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mr extends na{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,_=p+1,x=e/d,S=i/p,M=[],E=[],w=[],y=[];for(let g=0;g<_;g++){const O=g*S-h;for(let L=0;L<m;L++){const N=L*x-c;E.push(N,-O,0),w.push(0,0,1),y.push(L/d),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let O=0;O<d;O++){const L=O+m*g,N=O+m*(g+1),F=O+1+m*(g+1),I=O+1+m*g;M.push(L,N,I),M.push(N,F,I)}this.setIndex(M),this.setAttribute("position",new Ln(E,3)),this.setAttribute("normal",new Ln(w,3)),this.setAttribute("uv",new Ln(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cp extends na{constructor(e=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],m=[],_=[];let x=e;const S=(i-e)/l,M=new ie,E=new gt;for(let w=0;w<=l;w++){for(let y=0;y<=s;y++){const g=c+y/s*h;M.x=x*Math.cos(g),M.y=x*Math.sin(g),p.push(M.x,M.y,M.z),m.push(0,0,1),E.x=(M.x/i+1)/2,E.y=(M.y/i+1)/2,_.push(E.x,E.y)}x+=S}for(let w=0;w<l;w++){const y=w*(s+1);for(let g=0;g<s;g++){const O=g+y,L=O,N=O+s+1,F=O+s+2,I=O+1;d.push(L,N,I),d.push(N,F,I)}}this.setIndex(d),this.setAttribute("position",new Ln(p,3)),this.setAttribute("normal",new Ln(m,3)),this.setAttribute("uv",new Ln(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Pu extends na{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let m=0;const _=[],x=new ie,S=new ie,M=[],E=[],w=[],y=[];for(let g=0;g<=s;g++){const O=[],L=g/s;let N=0;g===0&&h===0?N=.5/i:g===s&&p===Math.PI&&(N=-.5/i);for(let F=0;F<=i;F++){const I=F/i;x.x=-e*Math.cos(l+I*c)*Math.sin(h+L*d),x.y=e*Math.cos(h+L*d),x.z=e*Math.sin(l+I*c)*Math.sin(h+L*d),E.push(x.x,x.y,x.z),S.copy(x).normalize(),w.push(S.x,S.y,S.z),y.push(I+N,1-L),O.push(m++)}_.push(O)}for(let g=0;g<s;g++)for(let O=0;O<i;O++){const L=_[g][O+1],N=_[g][O],F=_[g+1][O],I=_[g+1][O+1];(g!==0||h>0)&&M.push(L,N,I),(g!==s-1||p<Math.PI)&&M.push(N,F,I)}this.setIndex(M),this.setAttribute("position",new Ln(E,3)),this.setAttribute("normal",new Ln(w,3)),this.setAttribute("uv",new Ln(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zl extends na{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],p=[],m=[],_=new ie,x=new ie,S=new ie;for(let M=0;M<=s;M++)for(let E=0;E<=l;E++){const w=E/l*c,y=M/s*Math.PI*2;x.x=(e+i*Math.cos(y))*Math.cos(w),x.y=(e+i*Math.cos(y))*Math.sin(w),x.z=i*Math.sin(y),d.push(x.x,x.y,x.z),_.x=e*Math.cos(w),_.y=e*Math.sin(w),S.subVectors(x,_).normalize(),p.push(S.x,S.y,S.z),m.push(E/l),m.push(M/s)}for(let M=1;M<=s;M++)for(let E=1;E<=l;E++){const w=(l+1)*M+E-1,y=(l+1)*(M-1)+E-1,g=(l+1)*(M-1)+E,O=(l+1)*M+E;h.push(w,y,O),h.push(y,g,O)}this.setIndex(h),this.setAttribute("position",new Ln(d,3)),this.setAttribute("normal",new Ln(p,3)),this.setAttribute("uv",new Ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class bb extends yo{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Nt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class wp extends yo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bv,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Eb extends wp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tb extends yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ab extends yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kv extends Hn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class Rb extends Kv{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const hd=new on,G_=new ie,V_=new ie;class Cb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=ya,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ap,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new xn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;G_.setFromMatrixPosition(e.matrixWorld),i.position.copy(G_),V_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(V_),i.updateMatrixWorld(),hd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dp extends qv{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class wb extends Cb{constructor(){super(new Dp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class j_ extends Kv{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Hn.DEFAULT_UP),this.updateMatrix(),this.target=new Hn,this.shadow=new wb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Db extends Ji{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const k_=new on;class Nb{constructor(e,i,s=0,l=1/0){this.ray=new Ep(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new Tp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return k_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(k_),this}intersectObject(e,i=!0,s=[]){return fp(e,this,s,i),s.sort(X_),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)fp(e[l],this,s,i);return s.sort(X_),s}}function X_(r,e){return r.distance-e.distance}function fp(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)fp(c[h],e,i,!0)}}class q_{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=At(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(At(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ub extends dr{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function W_(r,e,i,s){const l=Lb(s);switch(i){case Ov:return r*e;case xp:return r*e/l.components*l.byteLength;case yp:return r*e/l.components*l.byteLength;case zv:return r*e*2/l.components*l.byteLength;case Sp:return r*e*2/l.components*l.byteLength;case Pv:return r*e*3/l.components*l.byteLength;case ea:return r*e*4/l.components*l.byteLength;case Mp:return r*e*4/l.components*l.byteLength;case bu:case Eu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Tu:case Au:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fd:case Gd:return Math.max(r,16)*Math.max(e,8)/4;case Bd:case Hd:return Math.max(r,8)*Math.max(e,8)/2;case Vd:case jd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case $d:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ep:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case tp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case np:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ip:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ap:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ru:case sp:case rp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Iv:case op:return Math.ceil(r/4)*Math.ceil(e/4)*8;case lp:case cp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Lb(r){switch(r){case ya:case Nv:return{byteLength:1,components:1};case Ul:case Uv:case Fl:return{byteLength:2,components:1};case _p:case vp:return{byteLength:2,components:4};case ur:case gp:case va:return{byteLength:4,components:1};case Lv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qv(){let r=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Ob(r){const e=new WeakMap;function i(d,p){const m=d.array,_=d.usage,x=m.byteLength,S=r.createBuffer();r.bindBuffer(p,S),r.bufferData(p,m,_),d.onUploadCallback();let M;if(m instanceof Float32Array)M=r.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=r.SHORT;else if(m instanceof Uint32Array)M=r.UNSIGNED_INT;else if(m instanceof Int32Array)M=r.INT;else if(m instanceof Int8Array)M=r.BYTE;else if(m instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,p,m){const _=p.array,x=p.updateRanges;if(r.bindBuffer(m,d),x.length===0)r.bufferSubData(m,0,_);else{x.sort((M,E)=>M.start-E.start);let S=0;for(let M=1;M<x.length;M++){const E=x[S],w=x[M];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++S,x[S]=w)}x.length=S+1;for(let M=0,E=x.length;M<E;M++){const w=x[M];r.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(r.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}var Pb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zb=`#ifdef USE_ALPHAHASH
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
#endif`,Ib=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gb=`#ifdef USE_AOMAP
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
#endif`,Vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jb=`#ifdef USE_BATCHING
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
#endif`,kb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yb=`#ifdef USE_IRIDESCENCE
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
#endif`,Zb=`#ifdef USE_BUMPMAP
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
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,a1=`#define PI 3.141592653589793
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
} // validated`,s1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,r1=`vec3 transformedNormal = objectNormal;
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
#endif`,o1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f1="gl_FragColor = linearToOutputTexel( gl_FragColor );",h1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d1=`#ifdef USE_ENVMAP
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
#endif`,p1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m1=`#ifdef USE_ENVMAP
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
#endif`,g1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
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
#endif`,v1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M1=`#ifdef USE_GRADIENTMAP
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
}`,b1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A1=`uniform bool receiveShadow;
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
#endif`,R1=`#ifdef USE_ENVMAP
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
#endif`,C1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U1=`PhysicalMaterial material;
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
#endif`,L1=`struct PhysicalMaterial {
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
}`,O1=`
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
#endif`,P1=`#if defined( RE_IndirectDiffuse )
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
#endif`,z1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k1=`#if defined( USE_POINTS_UV )
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
#endif`,X1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K1=`#ifdef USE_MORPHTARGETS
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
#endif`,Q1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iE=`#ifdef USE_NORMALMAP
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
#endif`,aE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_E=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xE=`float getShadowMask() {
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
}`,yE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SE=`#ifdef USE_SKINNING
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
#endif`,ME=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bE=`#ifdef USE_SKINNING
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
#endif`,EE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,CE=`#ifdef USE_TRANSMISSION
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
#endif`,wE=`#ifdef USE_TRANSMISSION
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
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PE=`uniform sampler2D t2D;
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
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`#include <common>
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
}`,GE=`#if DEPTH_PACKING == 3200
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
}`,VE=`#define DISTANCE
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
}`,jE=`#define DISTANCE
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
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`uniform float scale;
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
}`,WE=`uniform vec3 diffuse;
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
}`,YE=`#include <common>
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
}`,ZE=`uniform vec3 diffuse;
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
}`,KE=`#define LAMBERT
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
}`,QE=`#define LAMBERT
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
}`,JE=`#define MATCAP
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
}`,$E=`#define MATCAP
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
}`,eT=`#define NORMAL
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
}`,tT=`#define NORMAL
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
}`,nT=`#define PHONG
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
}`,iT=`#define PHONG
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
}`,aT=`#define STANDARD
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
}`,sT=`#define STANDARD
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
}`,rT=`#define TOON
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
}`,oT=`#define TOON
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
}`,lT=`uniform float size;
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
}`,cT=`uniform vec3 diffuse;
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
}`,uT=`#include <common>
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
}`,fT=`uniform vec3 color;
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
}`,hT=`uniform float rotation;
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
}`,dT=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:Pb,alphahash_pars_fragment:zb,alphamap_fragment:Ib,alphamap_pars_fragment:Bb,alphatest_fragment:Fb,alphatest_pars_fragment:Hb,aomap_fragment:Gb,aomap_pars_fragment:Vb,batching_pars_vertex:jb,batching_vertex:kb,begin_vertex:Xb,beginnormal_vertex:qb,bsdfs:Wb,iridescence_fragment:Yb,bumpmap_pars_fragment:Zb,clipping_planes_fragment:Kb,clipping_planes_pars_fragment:Qb,clipping_planes_pars_vertex:Jb,clipping_planes_vertex:$b,color_fragment:e1,color_pars_fragment:t1,color_pars_vertex:n1,color_vertex:i1,common:a1,cube_uv_reflection_fragment:s1,defaultnormal_vertex:r1,displacementmap_pars_vertex:o1,displacementmap_vertex:l1,emissivemap_fragment:c1,emissivemap_pars_fragment:u1,colorspace_fragment:f1,colorspace_pars_fragment:h1,envmap_fragment:d1,envmap_common_pars_fragment:p1,envmap_pars_fragment:m1,envmap_pars_vertex:g1,envmap_physical_pars_fragment:R1,envmap_vertex:_1,fog_vertex:v1,fog_pars_vertex:x1,fog_fragment:y1,fog_pars_fragment:S1,gradientmap_pars_fragment:M1,lightmap_pars_fragment:b1,lights_lambert_fragment:E1,lights_lambert_pars_fragment:T1,lights_pars_begin:A1,lights_toon_fragment:C1,lights_toon_pars_fragment:w1,lights_phong_fragment:D1,lights_phong_pars_fragment:N1,lights_physical_fragment:U1,lights_physical_pars_fragment:L1,lights_fragment_begin:O1,lights_fragment_maps:P1,lights_fragment_end:z1,logdepthbuf_fragment:I1,logdepthbuf_pars_fragment:B1,logdepthbuf_pars_vertex:F1,logdepthbuf_vertex:H1,map_fragment:G1,map_pars_fragment:V1,map_particle_fragment:j1,map_particle_pars_fragment:k1,metalnessmap_fragment:X1,metalnessmap_pars_fragment:q1,morphinstance_vertex:W1,morphcolor_vertex:Y1,morphnormal_vertex:Z1,morphtarget_pars_vertex:K1,morphtarget_vertex:Q1,normal_fragment_begin:J1,normal_fragment_maps:$1,normal_pars_fragment:eE,normal_pars_vertex:tE,normal_vertex:nE,normalmap_pars_fragment:iE,clearcoat_normal_fragment_begin:aE,clearcoat_normal_fragment_maps:sE,clearcoat_pars_fragment:rE,iridescence_pars_fragment:oE,opaque_fragment:lE,packing:cE,premultiplied_alpha_fragment:uE,project_vertex:fE,dithering_fragment:hE,dithering_pars_fragment:dE,roughnessmap_fragment:pE,roughnessmap_pars_fragment:mE,shadowmap_pars_fragment:gE,shadowmap_pars_vertex:_E,shadowmap_vertex:vE,shadowmask_pars_fragment:xE,skinbase_vertex:yE,skinning_pars_vertex:SE,skinning_vertex:ME,skinnormal_vertex:bE,specularmap_fragment:EE,specularmap_pars_fragment:TE,tonemapping_fragment:AE,tonemapping_pars_fragment:RE,transmission_fragment:CE,transmission_pars_fragment:wE,uv_pars_fragment:DE,uv_pars_vertex:NE,uv_vertex:UE,worldpos_vertex:LE,background_vert:OE,background_frag:PE,backgroundCube_vert:zE,backgroundCube_frag:IE,cube_vert:BE,cube_frag:FE,depth_vert:HE,depth_frag:GE,distanceRGBA_vert:VE,distanceRGBA_frag:jE,equirect_vert:kE,equirect_frag:XE,linedashed_vert:qE,linedashed_frag:WE,meshbasic_vert:YE,meshbasic_frag:ZE,meshlambert_vert:KE,meshlambert_frag:QE,meshmatcap_vert:JE,meshmatcap_frag:$E,meshnormal_vert:eT,meshnormal_frag:tT,meshphong_vert:nT,meshphong_frag:iT,meshphysical_vert:aT,meshphysical_frag:sT,meshtoon_vert:rT,meshtoon_frag:oT,points_vert:lT,points_frag:cT,shadow_vert:uT,shadow_frag:fT,sprite_vert:hT,sprite_frag:dT},Ge={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},ma={basic:{uniforms:ei([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:ei([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:ei([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:ei([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:ei([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:ei([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:ei([Ge.points,Ge.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:ei([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:ei([Ge.common,Ge.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:ei([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:ei([Ge.sprite,Ge.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:ei([Ge.common,Ge.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:ei([Ge.lights,Ge.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};ma.physical={uniforms:ei([ma.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const gu={r:0,b:0,g:0},nr=new Sa,pT=new on;function mT(r,e,i,s,l,c,h){const d=new Nt(0);let p=c===!0?0:1,m,_,x=null,S=0,M=null;function E(L){let N=L.isScene===!0?L.background:null;return N&&N.isTexture&&(N=(L.backgroundBlurriness>0?i:e).get(N)),N}function w(L){let N=!1;const F=E(L);F===null?g(d,p):F&&F.isColor&&(g(F,1),N=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(L,N){const F=E(N);F&&(F.isCubeTexture||F.mapping===Ou)?(_===void 0&&(_=new rn(new xa(1,1,1),new Ds({name:"BackgroundCubeMaterial",uniforms:xo(ma.backgroundCube.uniforms),vertexShader:ma.backgroundCube.vertexShader,fragmentShader:ma.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(I,V,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),nr.copy(N.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),_.material.uniforms.envMap.value=F,_.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(pT.makeRotationFromEuler(nr)),_.material.toneMapped=Vt.getTransfer(F.colorSpace)!==en,(x!==F||S!==F.version||M!==r.toneMapping)&&(_.material.needsUpdate=!0,x=F,S=F.version,M=r.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):F&&F.isTexture&&(m===void 0&&(m=new rn(new mr(2,2),new Ds({name:"BackgroundMaterial",uniforms:xo(ma.background.uniforms),vertexShader:ma.background.vertexShader,fragmentShader:ma.background.fragmentShader,side:Za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=F,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Vt.getTransfer(F.colorSpace)!==en,F.matrixAutoUpdate===!0&&F.updateMatrix(),m.material.uniforms.uvTransform.value.copy(F.matrix),(x!==F||S!==F.version||M!==r.toneMapping)&&(m.material.needsUpdate=!0,x=F,S=F.version,M=r.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function g(L,N){L.getRGB(gu,Xv(r)),s.buffers.color.setClear(gu.r,gu.g,gu.b,N,h)}function O(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,N=1){d.set(L),p=N,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,g(d,p)},render:w,addToRenderList:y,dispose:O}}function gT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(C,H,$,oe,_e){let ge=!1;const G=x(oe,$,H);c!==G&&(c=G,m(c.object)),ge=M(C,oe,$,_e),ge&&E(C,oe,$,_e),_e!==null&&e.update(_e,r.ELEMENT_ARRAY_BUFFER),(ge||h)&&(h=!1,N(C,H,$,oe),_e!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(_e).buffer))}function p(){return r.createVertexArray()}function m(C){return r.bindVertexArray(C)}function _(C){return r.deleteVertexArray(C)}function x(C,H,$){const oe=$.wireframe===!0;let _e=s[C.id];_e===void 0&&(_e={},s[C.id]=_e);let ge=_e[H.id];ge===void 0&&(ge={},_e[H.id]=ge);let G=ge[oe];return G===void 0&&(G=S(p()),ge[oe]=G),G}function S(C){const H=[],$=[],oe=[];for(let _e=0;_e<i;_e++)H[_e]=0,$[_e]=0,oe[_e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:oe,object:C,attributes:{},index:null}}function M(C,H,$,oe){const _e=c.attributes,ge=H.attributes;let G=0;const ne=$.getAttributes();for(const Z in ne)if(ne[Z].location>=0){const P=_e[Z];let ae=ge[Z];if(ae===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor)),P===void 0||P.attribute!==ae||ae&&P.data!==ae.data)return!0;G++}return c.attributesNum!==G||c.index!==oe}function E(C,H,$,oe){const _e={},ge=H.attributes;let G=0;const ne=$.getAttributes();for(const Z in ne)if(ne[Z].location>=0){let P=ge[Z];P===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(P=C.instanceColor));const ae={};ae.attribute=P,P&&P.data&&(ae.data=P.data),_e[Z]=ae,G++}c.attributes=_e,c.attributesNum=G,c.index=oe}function w(){const C=c.newAttributes;for(let H=0,$=C.length;H<$;H++)C[H]=0}function y(C){g(C,0)}function g(C,H){const $=c.newAttributes,oe=c.enabledAttributes,_e=c.attributeDivisors;$[C]=1,oe[C]===0&&(r.enableVertexAttribArray(C),oe[C]=1),_e[C]!==H&&(r.vertexAttribDivisor(C,H),_e[C]=H)}function O(){const C=c.newAttributes,H=c.enabledAttributes;for(let $=0,oe=H.length;$<oe;$++)H[$]!==C[$]&&(r.disableVertexAttribArray($),H[$]=0)}function L(C,H,$,oe,_e,ge,G){G===!0?r.vertexAttribIPointer(C,H,$,_e,ge):r.vertexAttribPointer(C,H,$,oe,_e,ge)}function N(C,H,$,oe){w();const _e=oe.attributes,ge=$.getAttributes(),G=H.defaultAttributeValues;for(const ne in ge){const Z=ge[ne];if(Z.location>=0){let Me=_e[ne];if(Me===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(Me=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(Me=C.instanceColor)),Me!==void 0){const P=Me.normalized,ae=Me.itemSize,Ee=e.get(Me);if(Ee===void 0)continue;const Re=Ee.buffer,ee=Ee.type,ye=Ee.bytesPerElement,Se=ee===r.INT||ee===r.UNSIGNED_INT||Me.gpuType===gp;if(Me.isInterleavedBufferAttribute){const Ne=Me.data,Pe=Ne.stride,dt=Me.offset;if(Ne.isInstancedInterleavedBuffer){for(let nt=0;nt<Z.locationSize;nt++)g(Z.location+nt,Ne.meshPerAttribute);C.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let nt=0;nt<Z.locationSize;nt++)y(Z.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let nt=0;nt<Z.locationSize;nt++)L(Z.location+nt,ae/Z.locationSize,ee,P,Pe*ye,(dt+ae/Z.locationSize*nt)*ye,Se)}else{if(Me.isInstancedBufferAttribute){for(let Ne=0;Ne<Z.locationSize;Ne++)g(Z.location+Ne,Me.meshPerAttribute);C.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ne=0;Ne<Z.locationSize;Ne++)y(Z.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let Ne=0;Ne<Z.locationSize;Ne++)L(Z.location+Ne,ae/Z.locationSize,ee,P,ae*ye,ae/Z.locationSize*Ne*ye,Se)}}else if(G!==void 0){const P=G[ne];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(Z.location,P);break;case 3:r.vertexAttrib3fv(Z.location,P);break;case 4:r.vertexAttrib4fv(Z.location,P);break;default:r.vertexAttrib1fv(Z.location,P)}}}}O()}function F(){B();for(const C in s){const H=s[C];for(const $ in H){const oe=H[$];for(const _e in oe)_(oe[_e].object),delete oe[_e];delete H[$]}delete s[C]}}function I(C){if(s[C.id]===void 0)return;const H=s[C.id];for(const $ in H){const oe=H[$];for(const _e in oe)_(oe[_e].object),delete oe[_e];delete H[$]}delete s[C.id]}function V(C){for(const H in s){const $=s[H];if($[C.id]===void 0)continue;const oe=$[C.id];for(const _e in oe)_(oe[_e].object),delete oe[_e];delete $[C.id]}}function B(){U(),h=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:B,resetDefaultState:U,dispose:F,releaseStatesOfGeometry:I,releaseStatesOfProgram:V,initAttributes:w,enableAttribute:y,disableUnusedAttributes:O}}function _T(r,e,i){let s;function l(m){s=m}function c(m,_){r.drawArrays(s,m,_),i.update(_,s,1)}function h(m,_,x){x!==0&&(r.drawArraysInstanced(s,m,_,x),i.update(_,s,x))}function d(m,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,_,0,x);let M=0;for(let E=0;E<x;E++)M+=_[E];i.update(M,s,1)}function p(m,_,x,S){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)h(m[E],_[E],S[E]);else{M.multiDrawArraysInstancedWEBGL(s,m,0,_,0,S,0,x);let E=0;for(let w=0;w<x;w++)E+=_[w]*S[w];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function vT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(V){return!(V!==ea&&s.convert(V)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(V){const B=V===Fl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==ya&&s.convert(V)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==va&&!B)}function p(V){if(V==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,I=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:O,maxVaryings:L,maxFragmentUniforms:N,vertexTextures:F,maxSamples:I}}function xT(r){const e=this;let i=null,s=0,l=!1,c=!1;const h=new Ts,d=new St,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const M=x.length!==0||S||s!==0||l;return l=S,s=x.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,S){i=_(x,S,0)},this.setState=function(x,S,M){const E=x.clippingPlanes,w=x.clipIntersection,y=x.clipShadows,g=r.get(x);if(!l||E===null||E.length===0||c&&!y)c?_(null):m();else{const O=c?0:s,L=O*4;let N=g.clippingState||null;p.value=N,N=_(E,S,L,M);for(let F=0;F!==L;++F)N[F]=i[F];g.clippingState=N,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(x,S,M,E){const w=x!==null?x.length:0;let y=null;if(w!==0){if(y=p.value,E!==!0||y===null){const g=M+w*4,O=S.matrixWorldInverse;d.getNormalMatrix(O),(y===null||y.length<g)&&(y=new Float32Array(g));for(let L=0,N=M;L!==w;++L,N+=4)h.copy(x[L]).applyMatrix4(O,d),h.normal.toArray(y,N),y[N+3]=h.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function yT(r){let e=new WeakMap;function i(h,d){return d===Od?h.mapping=mo:d===Pd&&(h.mapping=go),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Od||d===Pd)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new mb(p.height);return m.fromEquirectangularTexture(r,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const uo=4,Y_=[.125,.215,.35,.446,.526,.582],or=20,dd=new Dp,Z_=new Nt;let pd=null,md=0,gd=0,_d=!1;const sr=(1+Math.sqrt(5))/2,co=1/sr,K_=[new ie(-sr,co,0),new ie(sr,co,0),new ie(-co,0,sr),new ie(co,0,sr),new ie(0,sr,-co),new ie(0,sr,co),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)],ST=new ie;class Q_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=ST}=c;pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pd,md,gd),this._renderer.xr.enabled=_d,e.scissorTest=!1,_u(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===mo||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:_a,minFilter:_a,generateMipmaps:!1,type:Fl,format:ea,colorSpace:_o,depthBuffer:!1},l=J_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=J_(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MT(c)),this._blurMaterial=bT(c,e,i)}return l}_compileMaterial(e){const i=new rn(this._lodPlanes[0],e);this._renderer.compile(i,dd)}_sceneToCubeUV(e,i,s,l,c){const p=new Ji(90,1,i,s),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,S=x.autoClear,M=x.toneMapping;x.getClearColor(Z_),x.toneMapping=ws,x.autoClear=!1;const E=new vo({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1}),w=new rn(new xa,E);let y=!1;const g=e.background;g?g.isColor&&(E.color.copy(g),e.background=null,y=!0):(E.color.copy(Z_),y=!0);for(let O=0;O<6;O++){const L=O%3;L===0?(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[O],c.y,c.z)):L===1?(p.up.set(0,0,m[O]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[O],c.z)):(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[O]));const N=this._cubeSize;_u(l,L*N,O>2?N:0,N,N),x.setRenderTarget(l),y&&x.render(w,p),x.render(e,p)}w.geometry.dispose(),w.material.dispose(),x.toneMapping=M,x.autoClear=S,e.background=g}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===mo||e.mapping===go;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new rn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;_u(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,dd)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=K_[(l-c-1)%K_.length];this._blur(e,c-1,c,h,d)}i.autoClear=s}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new rn(this._lodPlanes[l],m),S=m.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*or-1),w=c/E,y=isFinite(c)?1+Math.floor(_*w):or;y>or&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${or}`);const g=[];let O=0;for(let V=0;V<or;++V){const B=V/w,U=Math.exp(-B*B/2);g.push(U),V===0?O+=U:V<y&&(O+=2*U)}for(let V=0;V<g.length;V++)g[V]=g[V]/O;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=g,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:L}=this;S.dTheta.value=E,S.mipInt.value=L-s;const N=this._sizeLods[l],F=3*N*(l>L-uo?l-L+uo:0),I=4*(this._cubeSize-N);_u(i,F,I,3*N,2*N),p.setRenderTarget(i),p.render(x,dd)}}function MT(r){const e=[],i=[],s=[];let l=r;const c=r-uo+1+Y_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>r-uo?p=Y_[h-r+uo-1]:h===0&&(p=0),s.push(p);const m=1/(d-2),_=-m,x=1+m,S=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,E=6,w=3,y=2,g=1,O=new Float32Array(w*E*M),L=new Float32Array(y*E*M),N=new Float32Array(g*E*M);for(let I=0;I<M;I++){const V=I%3*2/3-1,B=I>2?0:-1,U=[V,B,0,V+2/3,B,0,V+2/3,B+1,0,V,B,0,V+2/3,B+1,0,V,B+1,0];O.set(U,w*E*I),L.set(S,y*E*I);const C=[I,I,I,I,I,I];N.set(C,g*E*I)}const F=new na;F.setAttribute("position",new ta(O,w)),F.setAttribute("uv",new ta(L,y)),F.setAttribute("faceIndex",new ta(N,g)),e.push(F),l>uo&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function J_(r,e,i){const s=new fr(r,e,i);return s.texture.mapping=Ou,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function _u(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function bT(r,e,i){const s=new Float32Array(or),l=new ie(0,1,0);return new Ds({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Np(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function $_(){return new Ds({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Np(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function ev(){return new Ds({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function Np(){return`

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
	`}function ET(r){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Od||p===Pd,_=p===mo||p===go;if(m||_){let x=e.get(d);const S=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new Q_(r)),x=m?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return m&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new Q_(r)),x=m?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function l(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function TT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&wu("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function AT(r,e,i,s){const l={},c=new WeakMap;function h(x){const S=x.target;S.index!==null&&e.remove(S.index);for(const E in S.attributes)e.remove(S.attributes[E]);S.removeEventListener("dispose",h),delete l[S.id];const M=c.get(S);M&&(e.remove(M),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(x,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function p(x){const S=x.attributes;for(const M in S)e.update(S[M],r.ARRAY_BUFFER)}function m(x){const S=[],M=x.index,E=x.attributes.position;let w=0;if(M!==null){const O=M.array;w=M.version;for(let L=0,N=O.length;L<N;L+=3){const F=O[L+0],I=O[L+1],V=O[L+2];S.push(F,I,I,V,V,F)}}else if(E!==void 0){const O=E.array;w=E.version;for(let L=0,N=O.length/3-1;L<N;L+=3){const F=L+0,I=L+1,V=L+2;S.push(F,I,I,V,V,F)}}else return;const y=new(Hv(S)?kv:jv)(S,1);y.version=w;const g=c.get(x);g&&e.remove(g),c.set(x,y)}function _(x){const S=c.get(x);if(S){const M=x.index;M!==null&&S.version<M.version&&m(x)}else m(x);return c.get(x)}return{get:d,update:p,getWireframeAttribute:_}}function RT(r,e,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function p(S,M){r.drawElements(s,M,c,S*h),i.update(M,s,1)}function m(S,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,S*h,E),i.update(M,s,E))}function _(S,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,S,0,E);let y=0;for(let g=0;g<E;g++)y+=M[g];i.update(y,s,1)}function x(S,M,E,w){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<S.length;g++)m(S[g]/h,M[g],w[g]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,S,0,w,0,E);let g=0;for(let O=0;O<E;O++)g+=M[O]*w[O];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function CT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function wT(r,e,i){const s=new WeakMap,l=new xn;function c(h,d,p){const m=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let S=s.get(d);if(S===void 0||S.count!==x){let C=function(){B.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let N=0;E===!0&&(N=1),w===!0&&(N=2),y===!0&&(N=3);let F=d.attributes.position.count*N,I=1;F>e.maxTextureSize&&(I=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const V=new Float32Array(F*I*4*x),B=new Gv(V,F,I,x);B.type=va,B.needsUpdate=!0;const U=N*4;for(let H=0;H<x;H++){const $=g[H],oe=O[H],_e=L[H],ge=F*I*4*H;for(let G=0;G<$.count;G++){const ne=G*U;E===!0&&(l.fromBufferAttribute($,G),V[ge+ne+0]=l.x,V[ge+ne+1]=l.y,V[ge+ne+2]=l.z,V[ge+ne+3]=0),w===!0&&(l.fromBufferAttribute(oe,G),V[ge+ne+4]=l.x,V[ge+ne+5]=l.y,V[ge+ne+6]=l.z,V[ge+ne+7]=0),y===!0&&(l.fromBufferAttribute(_e,G),V[ge+ne+8]=l.x,V[ge+ne+9]=l.y,V[ge+ne+10]=l.z,V[ge+ne+11]=_e.itemSize===4?l.w:1)}}S={count:x,texture:B,size:new gt(F,I)},s.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const w=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",w),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",S.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:c}}function DT(r,e,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,_=p.geometry,x=e.get(p,_);if(l.get(x)!==m&&(e.update(x),l.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return x}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}const Jv=new Kn,tv=new Zv(1,1),$v=new Gv,ex=new JM,tx=new Wv,nv=[],iv=[],av=new Float32Array(16),sv=new Float32Array(9),rv=new Float32Array(4);function So(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=nv[l];if(c===void 0&&(c=new Float32Array(l),nv[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,r[h].toArray(c,d)}return c}function On(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Pn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function zu(r,e){let i=iv[e];i===void 0&&(i=new Int32Array(e),iv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function NT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function UT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;r.uniform2fv(this.addr,e),Pn(i,e)}}function LT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(On(i,e))return;r.uniform3fv(this.addr,e),Pn(i,e)}}function OT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;r.uniform4fv(this.addr,e),Pn(i,e)}}function PT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(On(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,s))return;rv.set(s),r.uniformMatrix2fv(this.addr,!1,rv),Pn(i,s)}}function zT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(On(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,s))return;sv.set(s),r.uniformMatrix3fv(this.addr,!1,sv),Pn(i,s)}}function IT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(On(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,s))return;av.set(s),r.uniformMatrix4fv(this.addr,!1,av),Pn(i,s)}}function BT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function FT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;r.uniform2iv(this.addr,e),Pn(i,e)}}function HT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;r.uniform3iv(this.addr,e),Pn(i,e)}}function GT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;r.uniform4iv(this.addr,e),Pn(i,e)}}function VT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function jT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;r.uniform2uiv(this.addr,e),Pn(i,e)}}function kT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;r.uniform3uiv(this.addr,e),Pn(i,e)}}function XT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;r.uniform4uiv(this.addr,e),Pn(i,e)}}function qT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(tv.compareFunction=Fv,c=tv):c=Jv,i.setTexture2D(e||c,l)}function WT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||ex,l)}function YT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||tx,l)}function ZT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||$v,l)}function KT(r){switch(r){case 5126:return NT;case 35664:return UT;case 35665:return LT;case 35666:return OT;case 35674:return PT;case 35675:return zT;case 35676:return IT;case 5124:case 35670:return BT;case 35667:case 35671:return FT;case 35668:case 35672:return HT;case 35669:case 35673:return GT;case 5125:return VT;case 36294:return jT;case 36295:return kT;case 36296:return XT;case 35678:case 36198:case 36298:case 36306:case 35682:return qT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return YT;case 36289:case 36303:case 36311:case 36292:return ZT}}function QT(r,e){r.uniform1fv(this.addr,e)}function JT(r,e){const i=So(e,this.size,2);r.uniform2fv(this.addr,i)}function $T(r,e){const i=So(e,this.size,3);r.uniform3fv(this.addr,i)}function eA(r,e){const i=So(e,this.size,4);r.uniform4fv(this.addr,i)}function tA(r,e){const i=So(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function nA(r,e){const i=So(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function iA(r,e){const i=So(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function aA(r,e){r.uniform1iv(this.addr,e)}function sA(r,e){r.uniform2iv(this.addr,e)}function rA(r,e){r.uniform3iv(this.addr,e)}function oA(r,e){r.uniform4iv(this.addr,e)}function lA(r,e){r.uniform1uiv(this.addr,e)}function cA(r,e){r.uniform2uiv(this.addr,e)}function uA(r,e){r.uniform3uiv(this.addr,e)}function fA(r,e){r.uniform4uiv(this.addr,e)}function hA(r,e,i){const s=this.cache,l=e.length,c=zu(i,l);On(s,c)||(r.uniform1iv(this.addr,c),Pn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Jv,c[h])}function dA(r,e,i){const s=this.cache,l=e.length,c=zu(i,l);On(s,c)||(r.uniform1iv(this.addr,c),Pn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||ex,c[h])}function pA(r,e,i){const s=this.cache,l=e.length,c=zu(i,l);On(s,c)||(r.uniform1iv(this.addr,c),Pn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||tx,c[h])}function mA(r,e,i){const s=this.cache,l=e.length,c=zu(i,l);On(s,c)||(r.uniform1iv(this.addr,c),Pn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||$v,c[h])}function gA(r){switch(r){case 5126:return QT;case 35664:return JT;case 35665:return $T;case 35666:return eA;case 35674:return tA;case 35675:return nA;case 35676:return iA;case 5124:case 35670:return aA;case 35667:case 35671:return sA;case 35668:case 35672:return rA;case 35669:case 35673:return oA;case 5125:return lA;case 36294:return cA;case 36295:return uA;case 36296:return fA;case 35678:case 36198:case 36298:case 36306:case 35682:return hA;case 35679:case 36299:case 36307:return dA;case 35680:case 36300:case 36308:case 36293:return pA;case 36289:case 36303:case 36311:case 36292:return mA}}class _A{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=KT(i.type)}}class vA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=gA(i.type)}}class xA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const vd=/(\w+)(\])?(\[|\.)?/g;function ov(r,e){r.seq.push(e),r.map[e.id]=e}function yA(r,e,i){const s=r.name,l=s.length;for(vd.lastIndex=0;;){const c=vd.exec(s),h=vd.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){ov(i,m===void 0?new _A(d,r,e):new vA(d,r,e));break}else{let x=i.map[d];x===void 0&&(x=new xA(d),ov(i,x)),i=x}}}class Du{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);yA(c,h,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function lv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const SA=37297;let MA=0;function bA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const cv=new St;function EA(r){Vt._getMatrix(cv,Vt.workingColorSpace,r);const e=`mat3( ${cv.elements.map(i=>i.toFixed(4))} )`;switch(Vt.getTransfer(r)){case Nu:return[e,"LinearTransferOETF"];case en:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function uv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=r.getShaderInfoLog(e).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+bA(r.getShaderSource(e),h)}else return l}function TA(r,e){const i=EA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function AA(r,e){let i;switch(e){case EM:i="Linear";break;case TM:i="Reinhard";break;case AM:i="Cineon";break;case wv:i="ACESFilmic";break;case CM:i="AgX";break;case wM:i="Neutral";break;case RM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const vu=new ie;function RA(){Vt.getLuminanceCoefficients(vu);const r=vu.x.toFixed(4),e=vu.y.toFixed(4),i=vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nl).join(`
`)}function wA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function DA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(e,h),locationSize:d}}return i}function Nl(r){return r!==""}function fv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NA=/^[ \t]*#include +<([\w\d./]+)>/gm;function hp(r){return r.replace(NA,LA)}const UA=new Map;function LA(r,e){let i=Mt[e];if(i===void 0){const s=UA.get(e);if(s!==void 0)i=Mt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return hp(i)}const OA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dv(r){return r.replace(OA,PA)}function PA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function pv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function zA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Av?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Rv?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Xa&&(e="SHADOWMAP_TYPE_VSM"),e}function IA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case mo:case go:e="ENVMAP_TYPE_CUBE";break;case Ou:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case go:e="ENVMAP_MODE_REFRACTION";break}return e}function FA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Cv:e="ENVMAP_BLENDING_MULTIPLY";break;case MM:e="ENVMAP_BLENDING_MIX";break;case bM:e="ENVMAP_BLENDING_ADD";break}return e}function HA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function GA(r,e,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=zA(i),m=IA(i),_=BA(i),x=FA(i),S=HA(i),M=CA(i),E=wA(c),w=l.createProgram();let y,g,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Nl).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Nl).join(`
`),g.length>0&&(g+=`
`)):(y=[pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nl).join(`
`),g=[pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ws?"#define TONE_MAPPING":"",i.toneMapping!==ws?Mt.tonemapping_pars_fragment:"",i.toneMapping!==ws?AA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,TA("linearToOutputTexel",i.outputColorSpace),RA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Nl).join(`
`)),h=hp(h),h=fv(h,i),h=hv(h,i),d=hp(d),d=fv(d,i),d=hv(d,i),h=dv(h),d=dv(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===y_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===y_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=O+y+h,N=O+g+d,F=lv(l,l.VERTEX_SHADER,L),I=lv(l,l.FRAGMENT_SHADER,N);l.attachShader(w,F),l.attachShader(w,I),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function V(H){if(r.debug.checkShaderErrors){const $=l.getProgramInfoLog(w).trim(),oe=l.getShaderInfoLog(F).trim(),_e=l.getShaderInfoLog(I).trim();let ge=!0,G=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ge=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,F,I);else{const ne=uv(l,F,"vertex"),Z=uv(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+$+`
`+ne+`
`+Z)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(oe===""||_e==="")&&(G=!1);G&&(H.diagnostics={runnable:ge,programLog:$,vertexShader:{log:oe,prefix:y},fragmentShader:{log:_e,prefix:g}})}l.deleteShader(F),l.deleteShader(I),B=new Du(l,w),U=DA(l,w)}let B;this.getUniforms=function(){return B===void 0&&V(this),B};let U;this.getAttributes=function(){return U===void 0&&V(this),U};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(w,SA)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=MA++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=I,this}let VA=0;class jA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new kA(e),i.set(e,s)),s}}class kA{constructor(e){this.id=VA++,this.code=e,this.usedTimes=0}}function XA(r,e,i,s,l,c,h){const d=new Tp,p=new jA,m=new Set,_=[],x=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(U){return m.add(U),U===0?"uv":`uv${U}`}function y(U,C,H,$,oe){const _e=$.fog,ge=oe.geometry,G=U.isMeshStandardMaterial?$.environment:null,ne=(U.isMeshStandardMaterial?i:e).get(U.envMap||G),Z=ne&&ne.mapping===Ou?ne.image.height:null,Me=E[U.type];U.precision!==null&&(M=l.getMaxPrecision(U.precision),M!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",M,"instead."));const P=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,ae=P!==void 0?P.length:0;let Ee=0;ge.morphAttributes.position!==void 0&&(Ee=1),ge.morphAttributes.normal!==void 0&&(Ee=2),ge.morphAttributes.color!==void 0&&(Ee=3);let Re,ee,ye,Se;if(Me){const Rt=ma[Me];Re=Rt.vertexShader,ee=Rt.fragmentShader}else Re=U.vertexShader,ee=U.fragmentShader,p.update(U),ye=p.getVertexShaderID(U),Se=p.getFragmentShaderID(U);const Ne=r.getRenderTarget(),Pe=r.state.buffers.depth.getReversed(),dt=oe.isInstancedMesh===!0,nt=oe.isBatchedMesh===!0,et=!!U.map,zt=!!U.matcap,Ze=!!ne,X=!!U.aoMap,ln=!!U.lightMap,xt=!!U.bumpMap,ot=!!U.normalMap,We=!!U.displacementMap,Lt=!!U.emissiveMap,Xe=!!U.metalnessMap,z=!!U.roughnessMap,T=U.anisotropy>0,k=U.clearcoat>0,K=U.dispersion>0,fe=U.iridescence>0,ue=U.sheen>0,Le=U.transmission>0,Ue=T&&!!U.anisotropyMap,q=k&&!!U.clearcoatMap,ke=k&&!!U.clearcoatNormalMap,Te=k&&!!U.clearcoatRoughnessMap,Ve=fe&&!!U.iridescenceMap,tt=fe&&!!U.iridescenceThicknessMap,Je=ue&&!!U.sheenColorMap,ze=ue&&!!U.sheenRoughnessMap,mt=!!U.specularMap,at=!!U.specularColorMap,Ot=!!U.specularIntensityMap,Y=Le&&!!U.transmissionMap,Ie=Le&&!!U.thicknessMap,pe=!!U.gradientMap,ve=!!U.alphaMap,Fe=U.alphaTest>0,Be=!!U.alphaHash,lt=!!U.extensions;let Pt=ws;U.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(Pt=r.toneMapping);const cn={shaderID:Me,shaderType:U.type,shaderName:U.name,vertexShader:Re,fragmentShader:ee,defines:U.defines,customVertexShaderID:ye,customFragmentShaderID:Se,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:M,batching:nt,batchingColor:nt&&oe._colorsTexture!==null,instancing:dt,instancingColor:dt&&oe.instanceColor!==null,instancingMorph:dt&&oe.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Ne===null?r.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:_o,alphaToCoverage:!!U.alphaToCoverage,map:et,matcap:zt,envMap:Ze,envMapMode:Ze&&ne.mapping,envMapCubeUVHeight:Z,aoMap:X,lightMap:ln,bumpMap:xt,normalMap:ot,displacementMap:S&&We,emissiveMap:Lt,normalMapObjectSpace:ot&&U.normalMapType===LM,normalMapTangentSpace:ot&&U.normalMapType===Bv,metalnessMap:Xe,roughnessMap:z,anisotropy:T,anisotropyMap:Ue,clearcoat:k,clearcoatMap:q,clearcoatNormalMap:ke,clearcoatRoughnessMap:Te,dispersion:K,iridescence:fe,iridescenceMap:Ve,iridescenceThicknessMap:tt,sheen:ue,sheenColorMap:Je,sheenRoughnessMap:ze,specularMap:mt,specularColorMap:at,specularIntensityMap:Ot,transmission:Le,transmissionMap:Y,thicknessMap:Ie,gradientMap:pe,opaque:U.transparent===!1&&U.blending===fo&&U.alphaToCoverage===!1,alphaMap:ve,alphaTest:Fe,alphaHash:Be,combine:U.combine,mapUv:et&&w(U.map.channel),aoMapUv:X&&w(U.aoMap.channel),lightMapUv:ln&&w(U.lightMap.channel),bumpMapUv:xt&&w(U.bumpMap.channel),normalMapUv:ot&&w(U.normalMap.channel),displacementMapUv:We&&w(U.displacementMap.channel),emissiveMapUv:Lt&&w(U.emissiveMap.channel),metalnessMapUv:Xe&&w(U.metalnessMap.channel),roughnessMapUv:z&&w(U.roughnessMap.channel),anisotropyMapUv:Ue&&w(U.anisotropyMap.channel),clearcoatMapUv:q&&w(U.clearcoatMap.channel),clearcoatNormalMapUv:ke&&w(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&w(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&w(U.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&w(U.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&w(U.sheenColorMap.channel),sheenRoughnessMapUv:ze&&w(U.sheenRoughnessMap.channel),specularMapUv:mt&&w(U.specularMap.channel),specularColorMapUv:at&&w(U.specularColorMap.channel),specularIntensityMapUv:Ot&&w(U.specularIntensityMap.channel),transmissionMapUv:Y&&w(U.transmissionMap.channel),thicknessMapUv:Ie&&w(U.thicknessMap.channel),alphaMapUv:ve&&w(U.alphaMap.channel),vertexTangents:!!ge.attributes.tangent&&(ot||T),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!ge.attributes.uv&&(et||ve),fog:!!_e,useFog:U.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Pe,skinning:oe.isSkinnedMesh===!0,morphTargets:ge.morphAttributes.position!==void 0,morphNormals:ge.morphAttributes.normal!==void 0,morphColors:ge.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Ee,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:U.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:Pt,decodeVideoTexture:et&&U.map.isVideoTexture===!0&&Vt.getTransfer(U.map.colorSpace)===en,decodeVideoTextureEmissive:Lt&&U.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(U.emissiveMap.colorSpace)===en,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===ga,flipSided:U.side===hi,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:lt&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&U.extensions.multiDraw===!0||nt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return cn.vertexUv1s=m.has(1),cn.vertexUv2s=m.has(2),cn.vertexUv3s=m.has(3),m.clear(),cn}function g(U){const C=[];if(U.shaderID?C.push(U.shaderID):(C.push(U.customVertexShaderID),C.push(U.customFragmentShaderID)),U.defines!==void 0)for(const H in U.defines)C.push(H),C.push(U.defines[H]);return U.isRawShaderMaterial===!1&&(O(C,U),L(C,U),C.push(r.outputColorSpace)),C.push(U.customProgramCacheKey),C.join()}function O(U,C){U.push(C.precision),U.push(C.outputColorSpace),U.push(C.envMapMode),U.push(C.envMapCubeUVHeight),U.push(C.mapUv),U.push(C.alphaMapUv),U.push(C.lightMapUv),U.push(C.aoMapUv),U.push(C.bumpMapUv),U.push(C.normalMapUv),U.push(C.displacementMapUv),U.push(C.emissiveMapUv),U.push(C.metalnessMapUv),U.push(C.roughnessMapUv),U.push(C.anisotropyMapUv),U.push(C.clearcoatMapUv),U.push(C.clearcoatNormalMapUv),U.push(C.clearcoatRoughnessMapUv),U.push(C.iridescenceMapUv),U.push(C.iridescenceThicknessMapUv),U.push(C.sheenColorMapUv),U.push(C.sheenRoughnessMapUv),U.push(C.specularMapUv),U.push(C.specularColorMapUv),U.push(C.specularIntensityMapUv),U.push(C.transmissionMapUv),U.push(C.thicknessMapUv),U.push(C.combine),U.push(C.fogExp2),U.push(C.sizeAttenuation),U.push(C.morphTargetsCount),U.push(C.morphAttributeCount),U.push(C.numDirLights),U.push(C.numPointLights),U.push(C.numSpotLights),U.push(C.numSpotLightMaps),U.push(C.numHemiLights),U.push(C.numRectAreaLights),U.push(C.numDirLightShadows),U.push(C.numPointLightShadows),U.push(C.numSpotLightShadows),U.push(C.numSpotLightShadowsWithMaps),U.push(C.numLightProbes),U.push(C.shadowMapType),U.push(C.toneMapping),U.push(C.numClippingPlanes),U.push(C.numClipIntersection),U.push(C.depthPacking)}function L(U,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),U.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),U.push(d.mask)}function N(U){const C=E[U.type];let H;if(C){const $=ma[C];H=fb.clone($.uniforms)}else H=U.uniforms;return H}function F(U,C){let H;for(let $=0,oe=_.length;$<oe;$++){const _e=_[$];if(_e.cacheKey===C){H=_e,++H.usedTimes;break}}return H===void 0&&(H=new GA(r,C,U,c),_.push(H)),H}function I(U){if(--U.usedTimes===0){const C=_.indexOf(U);_[C]=_[_.length-1],_.pop(),U.destroy()}}function V(U){p.remove(U)}function B(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:N,acquireProgram:F,releaseProgram:I,releaseShaderCache:V,programs:_,dispose:B}}function qA(){let r=new WeakMap;function e(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,p){r.get(h)[d]=p}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function WA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function mv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function gv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(x,S,M,E,w,y){let g=r[e];return g===void 0?(g={id:x.id,object:x,geometry:S,material:M,groupOrder:E,renderOrder:x.renderOrder,z:w,group:y},r[e]=g):(g.id=x.id,g.object=x,g.geometry=S,g.material=M,g.groupOrder=E,g.renderOrder=x.renderOrder,g.z=w,g.group=y),e++,g}function d(x,S,M,E,w,y){const g=h(x,S,M,E,w,y);M.transmission>0?s.push(g):M.transparent===!0?l.push(g):i.push(g)}function p(x,S,M,E,w,y){const g=h(x,S,M,E,w,y);M.transmission>0?s.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function m(x,S){i.length>1&&i.sort(x||WA),s.length>1&&s.sort(S||mv),l.length>1&&l.sort(S||mv)}function _(){for(let x=e,S=r.length;x<S;x++){const M=r[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:_,sort:m}}function YA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let h;return c===void 0?(h=new gv,r.set(s,[h])):l>=c.length?(h=new gv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:e,dispose:i}}function ZA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ie,color:new Nt};break;case"SpotLight":i={position:new ie,direction:new ie,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":i={color:new Nt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=i,i}}}function KA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let QA=0;function JA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function $A(r){const e=new ZA,i=KA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new ie);const l=new ie,c=new on,h=new on;function d(m){let _=0,x=0,S=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let M=0,E=0,w=0,y=0,g=0,O=0,L=0,N=0,F=0,I=0,V=0;m.sort(JA);for(let U=0,C=m.length;U<C;U++){const H=m[U],$=H.color,oe=H.intensity,_e=H.distance,ge=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=$.r*oe,x+=$.g*oe,S+=$.b*oe;else if(H.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(H.sh.coefficients[G],oe);V++}else if(H.isDirectionalLight){const G=e.get(H);if(G.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ne=H.shadow,Z=i.get(H);Z.shadowIntensity=ne.intensity,Z.shadowBias=ne.bias,Z.shadowNormalBias=ne.normalBias,Z.shadowRadius=ne.radius,Z.shadowMapSize=ne.mapSize,s.directionalShadow[M]=Z,s.directionalShadowMap[M]=ge,s.directionalShadowMatrix[M]=H.shadow.matrix,O++}s.directional[M]=G,M++}else if(H.isSpotLight){const G=e.get(H);G.position.setFromMatrixPosition(H.matrixWorld),G.color.copy($).multiplyScalar(oe),G.distance=_e,G.coneCos=Math.cos(H.angle),G.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),G.decay=H.decay,s.spot[w]=G;const ne=H.shadow;if(H.map&&(s.spotLightMap[F]=H.map,F++,ne.updateMatrices(H),H.castShadow&&I++),s.spotLightMatrix[w]=ne.matrix,H.castShadow){const Z=i.get(H);Z.shadowIntensity=ne.intensity,Z.shadowBias=ne.bias,Z.shadowNormalBias=ne.normalBias,Z.shadowRadius=ne.radius,Z.shadowMapSize=ne.mapSize,s.spotShadow[w]=Z,s.spotShadowMap[w]=ge,N++}w++}else if(H.isRectAreaLight){const G=e.get(H);G.color.copy($).multiplyScalar(oe),G.halfWidth.set(H.width*.5,0,0),G.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=G,y++}else if(H.isPointLight){const G=e.get(H);if(G.color.copy(H.color).multiplyScalar(H.intensity),G.distance=H.distance,G.decay=H.decay,H.castShadow){const ne=H.shadow,Z=i.get(H);Z.shadowIntensity=ne.intensity,Z.shadowBias=ne.bias,Z.shadowNormalBias=ne.normalBias,Z.shadowRadius=ne.radius,Z.shadowMapSize=ne.mapSize,Z.shadowCameraNear=ne.camera.near,Z.shadowCameraFar=ne.camera.far,s.pointShadow[E]=Z,s.pointShadowMap[E]=ge,s.pointShadowMatrix[E]=H.shadow.matrix,L++}s.point[E]=G,E++}else if(H.isHemisphereLight){const G=e.get(H);G.skyColor.copy(H.color).multiplyScalar(oe),G.groundColor.copy(H.groundColor).multiplyScalar(oe),s.hemi[g]=G,g++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ge.LTC_FLOAT_1,s.rectAreaLTC2=Ge.LTC_FLOAT_2):(s.rectAreaLTC1=Ge.LTC_HALF_1,s.rectAreaLTC2=Ge.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=S;const B=s.hash;(B.directionalLength!==M||B.pointLength!==E||B.spotLength!==w||B.rectAreaLength!==y||B.hemiLength!==g||B.numDirectionalShadows!==O||B.numPointShadows!==L||B.numSpotShadows!==N||B.numSpotMaps!==F||B.numLightProbes!==V)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=y,s.point.length=E,s.hemi.length=g,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=N+F-I,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=V,B.directionalLength=M,B.pointLength=E,B.spotLength=w,B.rectAreaLength=y,B.hemiLength=g,B.numDirectionalShadows=O,B.numPointShadows=L,B.numSpotShadows=N,B.numSpotMaps=F,B.numLightProbes=V,s.version=QA++)}function p(m,_){let x=0,S=0,M=0,E=0,w=0;const y=_.matrixWorldInverse;for(let g=0,O=m.length;g<O;g++){const L=m[g];if(L.isDirectionalLight){const N=s.directional[x];N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),x++}else if(L.isSpotLight){const N=s.spot[M];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const N=s.rectArea[E];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(y),h.identity(),c.copy(L.matrixWorld),c.premultiply(y),h.extractRotation(c),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const N=s.point[S];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(y),S++}else if(L.isHemisphereLight){const N=s.hemi[w];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(y),w++}}}return{setup:d,setupView:p,state:s}}function _v(r){const e=new $A(r),i=[],s=[];function l(_){m.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){e.setup(i)}function p(_){e.setupView(i,_)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function e2(r){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new _v(r),e.set(l,[d])):c>=h.length?(d=new _v(r),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const t2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n2=`uniform sampler2D shadow_pass;
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
}`;function i2(r,e,i){let s=new Ap;const l=new gt,c=new gt,h=new xn,d=new Tb({depthPacking:UM}),p=new Ab,m={},_=i.maxTextureSize,x={[Za]:hi,[hi]:Za,[ga]:ga},S=new Ds({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:t2,fragmentShader:n2}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const E=new na;E.setAttribute("position",new ta(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new rn(E,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Av;let g=this.type;this.render=function(I,V,B){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const U=r.getRenderTarget(),C=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),$=r.state;$.setBlending(Cs),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const oe=g!==Xa&&this.type===Xa,_e=g===Xa&&this.type!==Xa;for(let ge=0,G=I.length;ge<G;ge++){const ne=I[ge],Z=ne.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const Me=Z.getFrameExtents();if(l.multiply(Me),c.copy(Z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/Me.x),l.x=c.x*Me.x,Z.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/Me.y),l.y=c.y*Me.y,Z.mapSize.y=c.y)),Z.map===null||oe===!0||_e===!0){const ae=this.type!==Xa?{minFilter:Ni,magFilter:Ni}:{};Z.map!==null&&Z.map.dispose(),Z.map=new fr(l.x,l.y,ae),Z.map.texture.name=ne.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const P=Z.getViewportCount();for(let ae=0;ae<P;ae++){const Ee=Z.getViewport(ae);h.set(c.x*Ee.x,c.y*Ee.y,c.x*Ee.z,c.y*Ee.w),$.viewport(h),Z.updateMatrices(ne,ae),s=Z.getFrustum(),N(V,B,Z.camera,ne,this.type)}Z.isPointLightShadow!==!0&&this.type===Xa&&O(Z,B),Z.needsUpdate=!1}g=this.type,y.needsUpdate=!1,r.setRenderTarget(U,C,H)};function O(I,V){const B=e.update(w);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new fr(l.x,l.y)),S.uniforms.shadow_pass.value=I.map.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(V,null,B,S,w,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(V,null,B,M,w,null)}function L(I,V,B,U){let C=null;const H=B.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)C=H;else if(C=B.isPointLight===!0?p:d,r.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const $=C.uuid,oe=V.uuid;let _e=m[$];_e===void 0&&(_e={},m[$]=_e);let ge=_e[oe];ge===void 0&&(ge=C.clone(),_e[oe]=ge,V.addEventListener("dispose",F)),C=ge}if(C.visible=V.visible,C.wireframe=V.wireframe,U===Xa?C.side=V.shadowSide!==null?V.shadowSide:V.side:C.side=V.shadowSide!==null?V.shadowSide:x[V.side],C.alphaMap=V.alphaMap,C.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,C.map=V.map,C.clipShadows=V.clipShadows,C.clippingPlanes=V.clippingPlanes,C.clipIntersection=V.clipIntersection,C.displacementMap=V.displacementMap,C.displacementScale=V.displacementScale,C.displacementBias=V.displacementBias,C.wireframeLinewidth=V.wireframeLinewidth,C.linewidth=V.linewidth,B.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const $=r.properties.get(C);$.light=B}return C}function N(I,V,B,U,C){if(I.visible===!1)return;if(I.layers.test(V.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===Xa)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld);const oe=e.update(I),_e=I.material;if(Array.isArray(_e)){const ge=oe.groups;for(let G=0,ne=ge.length;G<ne;G++){const Z=ge[G],Me=_e[Z.materialIndex];if(Me&&Me.visible){const P=L(I,Me,U,C);I.onBeforeShadow(r,I,V,B,oe,P,Z),r.renderBufferDirect(B,null,oe,P,I,Z),I.onAfterShadow(r,I,V,B,oe,P,Z)}}}else if(_e.visible){const ge=L(I,_e,U,C);I.onBeforeShadow(r,I,V,B,oe,ge,null),r.renderBufferDirect(B,null,oe,ge,I,null),I.onAfterShadow(r,I,V,B,oe,ge,null)}}const $=I.children;for(let oe=0,_e=$.length;oe<_e;oe++)N($[oe],V,B,U,C)}function F(I){I.target.removeEventListener("dispose",F);for(const B in m){const U=m[B],C=I.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}const a2={[Rd]:Cd,[wd]:Ud,[Dd]:Ld,[po]:Nd,[Cd]:Rd,[Ud]:wd,[Ld]:Dd,[Nd]:po};function s2(r,e){function i(){let Y=!1;const Ie=new xn;let pe=null;const ve=new xn(0,0,0,0);return{setMask:function(Fe){pe!==Fe&&!Y&&(r.colorMask(Fe,Fe,Fe,Fe),pe=Fe)},setLocked:function(Fe){Y=Fe},setClear:function(Fe,Be,lt,Pt,cn){cn===!0&&(Fe*=Pt,Be*=Pt,lt*=Pt),Ie.set(Fe,Be,lt,Pt),ve.equals(Ie)===!1&&(r.clearColor(Fe,Be,lt,Pt),ve.copy(Ie))},reset:function(){Y=!1,pe=null,ve.set(-1,0,0,0)}}}function s(){let Y=!1,Ie=!1,pe=null,ve=null,Fe=null;return{setReversed:function(Be){if(Ie!==Be){const lt=e.get("EXT_clip_control");Be?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT),Ie=Be;const Pt=Fe;Fe=null,this.setClear(Pt)}},getReversed:function(){return Ie},setTest:function(Be){Be?Ne(r.DEPTH_TEST):Pe(r.DEPTH_TEST)},setMask:function(Be){pe!==Be&&!Y&&(r.depthMask(Be),pe=Be)},setFunc:function(Be){if(Ie&&(Be=a2[Be]),ve!==Be){switch(Be){case Rd:r.depthFunc(r.NEVER);break;case Cd:r.depthFunc(r.ALWAYS);break;case wd:r.depthFunc(r.LESS);break;case po:r.depthFunc(r.LEQUAL);break;case Dd:r.depthFunc(r.EQUAL);break;case Nd:r.depthFunc(r.GEQUAL);break;case Ud:r.depthFunc(r.GREATER);break;case Ld:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ve=Be}},setLocked:function(Be){Y=Be},setClear:function(Be){Fe!==Be&&(Ie&&(Be=1-Be),r.clearDepth(Be),Fe=Be)},reset:function(){Y=!1,pe=null,ve=null,Fe=null,Ie=!1}}}function l(){let Y=!1,Ie=null,pe=null,ve=null,Fe=null,Be=null,lt=null,Pt=null,cn=null;return{setTest:function(Rt){Y||(Rt?Ne(r.STENCIL_TEST):Pe(r.STENCIL_TEST))},setMask:function(Rt){Ie!==Rt&&!Y&&(r.stencilMask(Rt),Ie=Rt)},setFunc:function(Rt,yn,un){(pe!==Rt||ve!==yn||Fe!==un)&&(r.stencilFunc(Rt,yn,un),pe=Rt,ve=yn,Fe=un)},setOp:function(Rt,yn,un){(Be!==Rt||lt!==yn||Pt!==un)&&(r.stencilOp(Rt,yn,un),Be=Rt,lt=yn,Pt=un)},setLocked:function(Rt){Y=Rt},setClear:function(Rt){cn!==Rt&&(r.clearStencil(Rt),cn=Rt)},reset:function(){Y=!1,Ie=null,pe=null,ve=null,Fe=null,Be=null,lt=null,Pt=null,cn=null}}}const c=new i,h=new s,d=new l,p=new WeakMap,m=new WeakMap;let _={},x={},S=new WeakMap,M=[],E=null,w=!1,y=null,g=null,O=null,L=null,N=null,F=null,I=null,V=new Nt(0,0,0),B=0,U=!1,C=null,H=null,$=null,oe=null,_e=null;const ge=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ne=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=ne>=1):Z.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=ne>=2);let Me=null,P={};const ae=r.getParameter(r.SCISSOR_BOX),Ee=r.getParameter(r.VIEWPORT),Re=new xn().fromArray(ae),ee=new xn().fromArray(Ee);function ye(Y,Ie,pe,ve){const Fe=new Uint8Array(4),Be=r.createTexture();r.bindTexture(Y,Be),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let lt=0;lt<pe;lt++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Ie,0,r.RGBA,1,1,ve,0,r.RGBA,r.UNSIGNED_BYTE,Fe):r.texImage2D(Ie+lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Fe);return Be}const Se={};Se[r.TEXTURE_2D]=ye(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Ne(r.DEPTH_TEST),h.setFunc(po),xt(!1),ot(p_),Ne(r.CULL_FACE),X(Cs);function Ne(Y){_[Y]!==!0&&(r.enable(Y),_[Y]=!0)}function Pe(Y){_[Y]!==!1&&(r.disable(Y),_[Y]=!1)}function dt(Y,Ie){return x[Y]!==Ie?(r.bindFramebuffer(Y,Ie),x[Y]=Ie,Y===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Ie),Y===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Ie),!0):!1}function nt(Y,Ie){let pe=M,ve=!1;if(Y){pe=S.get(Ie),pe===void 0&&(pe=[],S.set(Ie,pe));const Fe=Y.textures;if(pe.length!==Fe.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let Be=0,lt=Fe.length;Be<lt;Be++)pe[Be]=r.COLOR_ATTACHMENT0+Be;pe.length=Fe.length,ve=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,ve=!0);ve&&r.drawBuffers(pe)}function et(Y){return E!==Y?(r.useProgram(Y),E=Y,!0):!1}const zt={[rr]:r.FUNC_ADD,[sM]:r.FUNC_SUBTRACT,[rM]:r.FUNC_REVERSE_SUBTRACT};zt[oM]=r.MIN,zt[lM]=r.MAX;const Ze={[cM]:r.ZERO,[uM]:r.ONE,[fM]:r.SRC_COLOR,[Td]:r.SRC_ALPHA,[_M]:r.SRC_ALPHA_SATURATE,[mM]:r.DST_COLOR,[dM]:r.DST_ALPHA,[hM]:r.ONE_MINUS_SRC_COLOR,[Ad]:r.ONE_MINUS_SRC_ALPHA,[gM]:r.ONE_MINUS_DST_COLOR,[pM]:r.ONE_MINUS_DST_ALPHA,[vM]:r.CONSTANT_COLOR,[xM]:r.ONE_MINUS_CONSTANT_COLOR,[yM]:r.CONSTANT_ALPHA,[SM]:r.ONE_MINUS_CONSTANT_ALPHA};function X(Y,Ie,pe,ve,Fe,Be,lt,Pt,cn,Rt){if(Y===Cs){w===!0&&(Pe(r.BLEND),w=!1);return}if(w===!1&&(Ne(r.BLEND),w=!0),Y!==aM){if(Y!==y||Rt!==U){if((g!==rr||N!==rr)&&(r.blendEquation(r.FUNC_ADD),g=rr,N=rr),Rt)switch(Y){case fo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case m_:r.blendFunc(r.ONE,r.ONE);break;case g_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case __:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case fo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case m_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case g_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case __:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}O=null,L=null,F=null,I=null,V.set(0,0,0),B=0,y=Y,U=Rt}return}Fe=Fe||Ie,Be=Be||pe,lt=lt||ve,(Ie!==g||Fe!==N)&&(r.blendEquationSeparate(zt[Ie],zt[Fe]),g=Ie,N=Fe),(pe!==O||ve!==L||Be!==F||lt!==I)&&(r.blendFuncSeparate(Ze[pe],Ze[ve],Ze[Be],Ze[lt]),O=pe,L=ve,F=Be,I=lt),(Pt.equals(V)===!1||cn!==B)&&(r.blendColor(Pt.r,Pt.g,Pt.b,cn),V.copy(Pt),B=cn),y=Y,U=!1}function ln(Y,Ie){Y.side===ga?Pe(r.CULL_FACE):Ne(r.CULL_FACE);let pe=Y.side===hi;Ie&&(pe=!pe),xt(pe),Y.blending===fo&&Y.transparent===!1?X(Cs):X(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),h.setFunc(Y.depthFunc),h.setTest(Y.depthTest),h.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const ve=Y.stencilWrite;d.setTest(ve),ve&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Lt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Ne(r.SAMPLE_ALPHA_TO_COVERAGE):Pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function xt(Y){C!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),C=Y)}function ot(Y){Y!==nM?(Ne(r.CULL_FACE),Y!==H&&(Y===p_?r.cullFace(r.BACK):Y===iM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pe(r.CULL_FACE),H=Y}function We(Y){Y!==$&&(G&&r.lineWidth(Y),$=Y)}function Lt(Y,Ie,pe){Y?(Ne(r.POLYGON_OFFSET_FILL),(oe!==Ie||_e!==pe)&&(r.polygonOffset(Ie,pe),oe=Ie,_e=pe)):Pe(r.POLYGON_OFFSET_FILL)}function Xe(Y){Y?Ne(r.SCISSOR_TEST):Pe(r.SCISSOR_TEST)}function z(Y){Y===void 0&&(Y=r.TEXTURE0+ge-1),Me!==Y&&(r.activeTexture(Y),Me=Y)}function T(Y,Ie,pe){pe===void 0&&(Me===null?pe=r.TEXTURE0+ge-1:pe=Me);let ve=P[pe];ve===void 0&&(ve={type:void 0,texture:void 0},P[pe]=ve),(ve.type!==Y||ve.texture!==Ie)&&(Me!==pe&&(r.activeTexture(pe),Me=pe),r.bindTexture(Y,Ie||Se[Y]),ve.type=Y,ve.texture=Ie)}function k(){const Y=P[Me];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function K(){try{r.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function fe(){try{r.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ue(){try{r.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Le(){try{r.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ue(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function q(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ke(){try{r.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Te(){try{r.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ve(){try{r.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function tt(){try{r.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Je(Y){Re.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),Re.copy(Y))}function ze(Y){ee.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),ee.copy(Y))}function mt(Y,Ie){let pe=m.get(Ie);pe===void 0&&(pe=new WeakMap,m.set(Ie,pe));let ve=pe.get(Y);ve===void 0&&(ve=r.getUniformBlockIndex(Ie,Y.name),pe.set(Y,ve))}function at(Y,Ie){const ve=m.get(Ie).get(Y);p.get(Ie)!==ve&&(r.uniformBlockBinding(Ie,ve,Y.__bindingPointIndex),p.set(Ie,ve))}function Ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},Me=null,P={},x={},S=new WeakMap,M=[],E=null,w=!1,y=null,g=null,O=null,L=null,N=null,F=null,I=null,V=new Nt(0,0,0),B=0,U=!1,C=null,H=null,$=null,oe=null,_e=null,Re.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Ne,disable:Pe,bindFramebuffer:dt,drawBuffers:nt,useProgram:et,setBlending:X,setMaterial:ln,setFlipSided:xt,setCullFace:ot,setLineWidth:We,setPolygonOffset:Lt,setScissorTest:Xe,activeTexture:z,bindTexture:T,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:fe,texImage2D:Ve,texImage3D:tt,updateUBOMapping:mt,uniformBlockBinding:at,texStorage2D:ke,texStorage3D:Te,texSubImage2D:ue,texSubImage3D:Le,compressedTexSubImage2D:Ue,compressedTexSubImage3D:q,scissor:Je,viewport:ze,reset:Ot}}function r2(r,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new gt,_=new WeakMap;let x;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(z,T){return M?new OffscreenCanvas(z,T):Lu("canvas")}function w(z,T,k){let K=1;const fe=Xe(z);if((fe.width>k||fe.height>k)&&(K=k/Math.max(fe.width,fe.height)),K<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ue=Math.floor(K*fe.width),Le=Math.floor(K*fe.height);x===void 0&&(x=E(ue,Le));const Ue=T?E(ue,Le):x;return Ue.width=ue,Ue.height=Le,Ue.getContext("2d").drawImage(z,0,0,ue,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+ue+"x"+Le+")."),Ue}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),z;return z}function y(z){return z.generateMipmaps}function g(z){r.generateMipmap(z)}function O(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(z,T,k,K,fe=!1){if(z!==null){if(r[z]!==void 0)return r[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ue=T;if(T===r.RED&&(k===r.FLOAT&&(ue=r.R32F),k===r.HALF_FLOAT&&(ue=r.R16F),k===r.UNSIGNED_BYTE&&(ue=r.R8)),T===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(ue=r.R8UI),k===r.UNSIGNED_SHORT&&(ue=r.R16UI),k===r.UNSIGNED_INT&&(ue=r.R32UI),k===r.BYTE&&(ue=r.R8I),k===r.SHORT&&(ue=r.R16I),k===r.INT&&(ue=r.R32I)),T===r.RG&&(k===r.FLOAT&&(ue=r.RG32F),k===r.HALF_FLOAT&&(ue=r.RG16F),k===r.UNSIGNED_BYTE&&(ue=r.RG8)),T===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(ue=r.RG8UI),k===r.UNSIGNED_SHORT&&(ue=r.RG16UI),k===r.UNSIGNED_INT&&(ue=r.RG32UI),k===r.BYTE&&(ue=r.RG8I),k===r.SHORT&&(ue=r.RG16I),k===r.INT&&(ue=r.RG32I)),T===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(ue=r.RGB8UI),k===r.UNSIGNED_SHORT&&(ue=r.RGB16UI),k===r.UNSIGNED_INT&&(ue=r.RGB32UI),k===r.BYTE&&(ue=r.RGB8I),k===r.SHORT&&(ue=r.RGB16I),k===r.INT&&(ue=r.RGB32I)),T===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(ue=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(ue=r.RGBA16UI),k===r.UNSIGNED_INT&&(ue=r.RGBA32UI),k===r.BYTE&&(ue=r.RGBA8I),k===r.SHORT&&(ue=r.RGBA16I),k===r.INT&&(ue=r.RGBA32I)),T===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(ue=r.RGB9_E5),T===r.RGBA){const Le=fe?Nu:Vt.getTransfer(K);k===r.FLOAT&&(ue=r.RGBA32F),k===r.HALF_FLOAT&&(ue=r.RGBA16F),k===r.UNSIGNED_BYTE&&(ue=Le===en?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function N(z,T){let k;return z?T===null||T===ur||T===Ll?k=r.DEPTH24_STENCIL8:T===va?k=r.DEPTH32F_STENCIL8:T===Ul&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ur||T===Ll?k=r.DEPTH_COMPONENT24:T===va?k=r.DEPTH_COMPONENT32F:T===Ul&&(k=r.DEPTH_COMPONENT16),k}function F(z,T){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==Ni&&z.minFilter!==_a?Math.log2(Math.max(T.width,T.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?T.mipmaps.length:1}function I(z){const T=z.target;T.removeEventListener("dispose",I),B(T),T.isVideoTexture&&_.delete(T)}function V(z){const T=z.target;T.removeEventListener("dispose",V),C(T)}function B(z){const T=s.get(z);if(T.__webglInit===void 0)return;const k=z.source,K=S.get(k);if(K){const fe=K[T.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&U(z),Object.keys(K).length===0&&S.delete(k)}s.remove(z)}function U(z){const T=s.get(z);r.deleteTexture(T.__webglTexture);const k=z.source,K=S.get(k);delete K[T.__cacheKey],h.memory.textures--}function C(z){const T=s.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),s.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(T.__webglFramebuffer[K]))for(let fe=0;fe<T.__webglFramebuffer[K].length;fe++)r.deleteFramebuffer(T.__webglFramebuffer[K][fe]);else r.deleteFramebuffer(T.__webglFramebuffer[K]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[K])}else{if(Array.isArray(T.__webglFramebuffer))for(let K=0;K<T.__webglFramebuffer.length;K++)r.deleteFramebuffer(T.__webglFramebuffer[K]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let K=0;K<T.__webglColorRenderbuffer.length;K++)T.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[K]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const k=z.textures;for(let K=0,fe=k.length;K<fe;K++){const ue=s.get(k[K]);ue.__webglTexture&&(r.deleteTexture(ue.__webglTexture),h.memory.textures--),s.remove(k[K])}s.remove(z)}let H=0;function $(){H=0}function oe(){const z=H;return z>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),H+=1,z}function _e(z){const T=[];return T.push(z.wrapS),T.push(z.wrapT),T.push(z.wrapR||0),T.push(z.magFilter),T.push(z.minFilter),T.push(z.anisotropy),T.push(z.internalFormat),T.push(z.format),T.push(z.type),T.push(z.generateMipmaps),T.push(z.premultiplyAlpha),T.push(z.flipY),T.push(z.unpackAlignment),T.push(z.colorSpace),T.join()}function ge(z,T){const k=s.get(z);if(z.isVideoTexture&&We(z),z.isRenderTargetTexture===!1&&z.version>0&&k.__version!==z.version){const K=z.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(k,z,T);return}}i.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+T)}function G(z,T){const k=s.get(z);if(z.version>0&&k.__version!==z.version){ee(k,z,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+T)}function ne(z,T){const k=s.get(z);if(z.version>0&&k.__version!==z.version){ee(k,z,T);return}i.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+T)}function Z(z,T){const k=s.get(z);if(z.version>0&&k.__version!==z.version){ye(k,z,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+T)}const Me={[zd]:r.REPEAT,[lr]:r.CLAMP_TO_EDGE,[Id]:r.MIRRORED_REPEAT},P={[Ni]:r.NEAREST,[DM]:r.NEAREST_MIPMAP_NEAREST,[Qc]:r.NEAREST_MIPMAP_LINEAR,[_a]:r.LINEAR,[jh]:r.LINEAR_MIPMAP_NEAREST,[cr]:r.LINEAR_MIPMAP_LINEAR},ae={[OM]:r.NEVER,[HM]:r.ALWAYS,[PM]:r.LESS,[Fv]:r.LEQUAL,[zM]:r.EQUAL,[FM]:r.GEQUAL,[IM]:r.GREATER,[BM]:r.NOTEQUAL};function Ee(z,T){if(T.type===va&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===_a||T.magFilter===jh||T.magFilter===Qc||T.magFilter===cr||T.minFilter===_a||T.minFilter===jh||T.minFilter===Qc||T.minFilter===cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,Me[T.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,Me[T.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,Me[T.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,P[T.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,P[T.minFilter]),T.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,ae[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ni||T.minFilter!==Qc&&T.minFilter!==cr||T.type===va&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(z,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Re(z,T){let k=!1;z.__webglInit===void 0&&(z.__webglInit=!0,T.addEventListener("dispose",I));const K=T.source;let fe=S.get(K);fe===void 0&&(fe={},S.set(K,fe));const ue=_e(T);if(ue!==z.__cacheKey){fe[ue]===void 0&&(fe[ue]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,k=!0),fe[ue].usedTimes++;const Le=fe[z.__cacheKey];Le!==void 0&&(fe[z.__cacheKey].usedTimes--,Le.usedTimes===0&&U(T)),z.__cacheKey=ue,z.__webglTexture=fe[ue].texture}return k}function ee(z,T,k){let K=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=r.TEXTURE_3D);const fe=Re(z,T),ue=T.source;i.bindTexture(K,z.__webglTexture,r.TEXTURE0+k);const Le=s.get(ue);if(ue.version!==Le.__version||fe===!0){i.activeTexture(r.TEXTURE0+k);const Ue=Vt.getPrimaries(Vt.workingColorSpace),q=T.colorSpace===As?null:Vt.getPrimaries(T.colorSpace),ke=T.colorSpace===As||Ue===q?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let Te=w(T.image,!1,l.maxTextureSize);Te=Lt(T,Te);const Ve=c.convert(T.format,T.colorSpace),tt=c.convert(T.type);let Je=L(T.internalFormat,Ve,tt,T.colorSpace,T.isVideoTexture);Ee(K,T);let ze;const mt=T.mipmaps,at=T.isVideoTexture!==!0,Ot=Le.__version===void 0||fe===!0,Y=ue.dataReady,Ie=F(T,Te);if(T.isDepthTexture)Je=N(T.format===Pl,T.type),Ot&&(at?i.texStorage2D(r.TEXTURE_2D,1,Je,Te.width,Te.height):i.texImage2D(r.TEXTURE_2D,0,Je,Te.width,Te.height,0,Ve,tt,null));else if(T.isDataTexture)if(mt.length>0){at&&Ot&&i.texStorage2D(r.TEXTURE_2D,Ie,Je,mt[0].width,mt[0].height);for(let pe=0,ve=mt.length;pe<ve;pe++)ze=mt[pe],at?Y&&i.texSubImage2D(r.TEXTURE_2D,pe,0,0,ze.width,ze.height,Ve,tt,ze.data):i.texImage2D(r.TEXTURE_2D,pe,Je,ze.width,ze.height,0,Ve,tt,ze.data);T.generateMipmaps=!1}else at?(Ot&&i.texStorage2D(r.TEXTURE_2D,Ie,Je,Te.width,Te.height),Y&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Te.width,Te.height,Ve,tt,Te.data)):i.texImage2D(r.TEXTURE_2D,0,Je,Te.width,Te.height,0,Ve,tt,Te.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){at&&Ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,Je,mt[0].width,mt[0].height,Te.depth);for(let pe=0,ve=mt.length;pe<ve;pe++)if(ze=mt[pe],T.format!==ea)if(Ve!==null)if(at){if(Y)if(T.layerUpdates.size>0){const Fe=W_(ze.width,ze.height,T.format,T.type);for(const Be of T.layerUpdates){const lt=ze.data.subarray(Be*Fe/ze.data.BYTES_PER_ELEMENT,(Be+1)*Fe/ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,Be,ze.width,ze.height,1,Ve,lt)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,ze.width,ze.height,Te.depth,Ve,ze.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,Je,ze.width,ze.height,Te.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Y&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,ze.width,ze.height,Te.depth,Ve,tt,ze.data):i.texImage3D(r.TEXTURE_2D_ARRAY,pe,Je,ze.width,ze.height,Te.depth,0,Ve,tt,ze.data)}else{at&&Ot&&i.texStorage2D(r.TEXTURE_2D,Ie,Je,mt[0].width,mt[0].height);for(let pe=0,ve=mt.length;pe<ve;pe++)ze=mt[pe],T.format!==ea?Ve!==null?at?Y&&i.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,ze.width,ze.height,Ve,ze.data):i.compressedTexImage2D(r.TEXTURE_2D,pe,Je,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Y&&i.texSubImage2D(r.TEXTURE_2D,pe,0,0,ze.width,ze.height,Ve,tt,ze.data):i.texImage2D(r.TEXTURE_2D,pe,Je,ze.width,ze.height,0,Ve,tt,ze.data)}else if(T.isDataArrayTexture)if(at){if(Ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,Je,Te.width,Te.height,Te.depth),Y)if(T.layerUpdates.size>0){const pe=W_(Te.width,Te.height,T.format,T.type);for(const ve of T.layerUpdates){const Fe=Te.data.subarray(ve*pe/Te.data.BYTES_PER_ELEMENT,(ve+1)*pe/Te.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ve,Te.width,Te.height,1,Ve,tt,Fe)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Ve,tt,Te.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Je,Te.width,Te.height,Te.depth,0,Ve,tt,Te.data);else if(T.isData3DTexture)at?(Ot&&i.texStorage3D(r.TEXTURE_3D,Ie,Je,Te.width,Te.height,Te.depth),Y&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Ve,tt,Te.data)):i.texImage3D(r.TEXTURE_3D,0,Je,Te.width,Te.height,Te.depth,0,Ve,tt,Te.data);else if(T.isFramebufferTexture){if(Ot)if(at)i.texStorage2D(r.TEXTURE_2D,Ie,Je,Te.width,Te.height);else{let pe=Te.width,ve=Te.height;for(let Fe=0;Fe<Ie;Fe++)i.texImage2D(r.TEXTURE_2D,Fe,Je,pe,ve,0,Ve,tt,null),pe>>=1,ve>>=1}}else if(mt.length>0){if(at&&Ot){const pe=Xe(mt[0]);i.texStorage2D(r.TEXTURE_2D,Ie,Je,pe.width,pe.height)}for(let pe=0,ve=mt.length;pe<ve;pe++)ze=mt[pe],at?Y&&i.texSubImage2D(r.TEXTURE_2D,pe,0,0,Ve,tt,ze):i.texImage2D(r.TEXTURE_2D,pe,Je,Ve,tt,ze);T.generateMipmaps=!1}else if(at){if(Ot){const pe=Xe(Te);i.texStorage2D(r.TEXTURE_2D,Ie,Je,pe.width,pe.height)}Y&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ve,tt,Te)}else i.texImage2D(r.TEXTURE_2D,0,Je,Ve,tt,Te);y(T)&&g(K),Le.__version=ue.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function ye(z,T,k){if(T.image.length!==6)return;const K=Re(z,T),fe=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+k);const ue=s.get(fe);if(fe.version!==ue.__version||K===!0){i.activeTexture(r.TEXTURE0+k);const Le=Vt.getPrimaries(Vt.workingColorSpace),Ue=T.colorSpace===As?null:Vt.getPrimaries(T.colorSpace),q=T.colorSpace===As||Le===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);const ke=T.isCompressedTexture||T.image[0].isCompressedTexture,Te=T.image[0]&&T.image[0].isDataTexture,Ve=[];for(let ve=0;ve<6;ve++)!ke&&!Te?Ve[ve]=w(T.image[ve],!0,l.maxCubemapSize):Ve[ve]=Te?T.image[ve].image:T.image[ve],Ve[ve]=Lt(T,Ve[ve]);const tt=Ve[0],Je=c.convert(T.format,T.colorSpace),ze=c.convert(T.type),mt=L(T.internalFormat,Je,ze,T.colorSpace),at=T.isVideoTexture!==!0,Ot=ue.__version===void 0||K===!0,Y=fe.dataReady;let Ie=F(T,tt);Ee(r.TEXTURE_CUBE_MAP,T);let pe;if(ke){at&&Ot&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,mt,tt.width,tt.height);for(let ve=0;ve<6;ve++){pe=Ve[ve].mipmaps;for(let Fe=0;Fe<pe.length;Fe++){const Be=pe[Fe];T.format!==ea?Je!==null?at?Y&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,Be.width,Be.height,Je,Be.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,mt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,Be.width,Be.height,Je,ze,Be.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,mt,Be.width,Be.height,0,Je,ze,Be.data)}}}else{if(pe=T.mipmaps,at&&Ot){pe.length>0&&Ie++;const ve=Xe(Ve[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,mt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Te){at?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ve[ve].width,Ve[ve].height,Je,ze,Ve[ve].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,mt,Ve[ve].width,Ve[ve].height,0,Je,ze,Ve[ve].data);for(let Fe=0;Fe<pe.length;Fe++){const lt=pe[Fe].image[ve].image;at?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,lt.width,lt.height,Je,ze,lt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,mt,lt.width,lt.height,0,Je,ze,lt.data)}}else{at?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Je,ze,Ve[ve]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,mt,Je,ze,Ve[ve]);for(let Fe=0;Fe<pe.length;Fe++){const Be=pe[Fe];at?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,Je,ze,Be.image[ve]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,mt,Je,ze,Be.image[ve])}}}y(T)&&g(r.TEXTURE_CUBE_MAP),ue.__version=fe.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function Se(z,T,k,K,fe,ue){const Le=c.convert(k.format,k.colorSpace),Ue=c.convert(k.type),q=L(k.internalFormat,Le,Ue,k.colorSpace),ke=s.get(T),Te=s.get(k);if(Te.__renderTarget=T,!ke.__hasExternalTextures){const Ve=Math.max(1,T.width>>ue),tt=Math.max(1,T.height>>ue);fe===r.TEXTURE_3D||fe===r.TEXTURE_2D_ARRAY?i.texImage3D(fe,ue,q,Ve,tt,T.depth,0,Le,Ue,null):i.texImage2D(fe,ue,q,Ve,tt,0,Le,Ue,null)}i.bindFramebuffer(r.FRAMEBUFFER,z),ot(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,fe,Te.__webglTexture,0,xt(T)):(fe===r.TEXTURE_2D||fe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,fe,Te.__webglTexture,ue),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(z,T,k){if(r.bindRenderbuffer(r.RENDERBUFFER,z),T.depthBuffer){const K=T.depthTexture,fe=K&&K.isDepthTexture?K.type:null,ue=N(T.stencilBuffer,fe),Le=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=xt(T);ot(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ue,ue,T.width,T.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,ue,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ue,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,z)}else{const K=T.textures;for(let fe=0;fe<K.length;fe++){const ue=K[fe],Le=c.convert(ue.format,ue.colorSpace),Ue=c.convert(ue.type),q=L(ue.internalFormat,Le,Ue,ue.colorSpace),ke=xt(T);k&&ot(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,q,T.width,T.height):ot(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ke,q,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,q,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(z,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,z),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=s.get(T.depthTexture);K.__renderTarget=T,(!K.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ge(T.depthTexture,0);const fe=K.__webglTexture,ue=xt(T);if(T.depthTexture.format===Ol)ot(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,fe,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,fe,0);else if(T.depthTexture.format===Pl)ot(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,fe,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function dt(z){const T=s.get(z),k=z.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==z.depthTexture){const K=z.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),K){const fe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,K.removeEventListener("dispose",fe)};K.addEventListener("dispose",fe),T.__depthDisposeCallback=fe}T.__boundDepthTexture=K}if(z.depthTexture&&!T.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const K=z.texture.mipmaps;K&&K.length>0?Pe(T.__webglFramebuffer[0],z):Pe(T.__webglFramebuffer,z)}else if(k){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]===void 0)T.__webglDepthbuffer[K]=r.createRenderbuffer(),Ne(T.__webglDepthbuffer[K],z,!1);else{const fe=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,ue)}}else{const K=z.texture.mipmaps;if(K&&K.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Ne(T.__webglDepthbuffer,z,!1);else{const fe=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,ue)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function nt(z,T,k){const K=s.get(z);T!==void 0&&Se(K.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&dt(z)}function et(z){const T=z.texture,k=s.get(z),K=s.get(T);z.addEventListener("dispose",V);const fe=z.textures,ue=z.isWebGLCubeRenderTarget===!0,Le=fe.length>1;if(Le||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=T.version,h.memory.textures++),ue){k.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer[Ue]=[];for(let q=0;q<T.mipmaps.length;q++)k.__webglFramebuffer[Ue][q]=r.createFramebuffer()}else k.__webglFramebuffer[Ue]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)k.__webglFramebuffer[Ue]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(Le)for(let Ue=0,q=fe.length;Ue<q;Ue++){const ke=s.get(fe[Ue]);ke.__webglTexture===void 0&&(ke.__webglTexture=r.createTexture(),h.memory.textures++)}if(z.samples>0&&ot(z)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Ue=0;Ue<fe.length;Ue++){const q=fe[Ue];k.__webglColorRenderbuffer[Ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[Ue]);const ke=c.convert(q.format,q.colorSpace),Te=c.convert(q.type),Ve=L(q.internalFormat,ke,Te,q.colorSpace,z.isXRRenderTarget===!0),tt=xt(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,Ve,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,k.__webglColorRenderbuffer[Ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Ne(k.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){i.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Ee(r.TEXTURE_CUBE_MAP,T);for(let Ue=0;Ue<6;Ue++)if(T.mipmaps&&T.mipmaps.length>0)for(let q=0;q<T.mipmaps.length;q++)Se(k.__webglFramebuffer[Ue][q],z,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,q);else Se(k.__webglFramebuffer[Ue],z,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);y(T)&&g(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let Ue=0,q=fe.length;Ue<q;Ue++){const ke=fe[Ue],Te=s.get(ke);i.bindTexture(r.TEXTURE_2D,Te.__webglTexture),Ee(r.TEXTURE_2D,ke),Se(k.__webglFramebuffer,z,ke,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,0),y(ke)&&g(r.TEXTURE_2D)}i.unbindTexture()}else{let Ue=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ue=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ue,K.__webglTexture),Ee(Ue,T),T.mipmaps&&T.mipmaps.length>0)for(let q=0;q<T.mipmaps.length;q++)Se(k.__webglFramebuffer[q],z,T,r.COLOR_ATTACHMENT0,Ue,q);else Se(k.__webglFramebuffer,z,T,r.COLOR_ATTACHMENT0,Ue,0);y(T)&&g(Ue),i.unbindTexture()}z.depthBuffer&&dt(z)}function zt(z){const T=z.textures;for(let k=0,K=T.length;k<K;k++){const fe=T[k];if(y(fe)){const ue=O(z),Le=s.get(fe).__webglTexture;i.bindTexture(ue,Le),g(ue),i.unbindTexture()}}}const Ze=[],X=[];function ln(z){if(z.samples>0){if(ot(z)===!1){const T=z.textures,k=z.width,K=z.height;let fe=r.COLOR_BUFFER_BIT;const ue=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=s.get(z),Ue=T.length>1;if(Ue)for(let ke=0;ke<T.length;ke++)i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const q=z.texture.mipmaps;q&&q.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let ke=0;ke<T.length;ke++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(fe|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(fe|=r.STENCIL_BUFFER_BIT)),Ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[ke]);const Te=s.get(T[ke]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Te,0)}r.blitFramebuffer(0,0,k,K,0,0,k,K,fe,r.NEAREST),p===!0&&(Ze.length=0,X.length=0,Ze.push(r.COLOR_ATTACHMENT0+ke),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Ze.push(ue),X.push(ue),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,X)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ze))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ue)for(let ke=0;ke<T.length;ke++){i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,Le.__webglColorRenderbuffer[ke]);const Te=s.get(T[ke]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,Te,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&p){const T=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function xt(z){return Math.min(l.maxSamples,z.samples)}function ot(z){const T=s.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function We(z){const T=h.render.frame;_.get(z)!==T&&(_.set(z,T),z.update())}function Lt(z,T){const k=z.colorSpace,K=z.format,fe=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||k!==_o&&k!==As&&(Vt.getTransfer(k)===en?(K!==ea||fe!==ya)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),T}function Xe(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(m.width=z.naturalWidth||z.width,m.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(m.width=z.displayWidth,m.height=z.displayHeight):(m.width=z.width,m.height=z.height),m}this.allocateTextureUnit=oe,this.resetTextureUnits=$,this.setTexture2D=ge,this.setTexture2DArray=G,this.setTexture3D=ne,this.setTextureCube=Z,this.rebindTextures=nt,this.setupRenderTarget=et,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ot}function o2(r,e){function i(s,l=As){let c;const h=Vt.getTransfer(l);if(s===ya)return r.UNSIGNED_BYTE;if(s===_p)return r.UNSIGNED_SHORT_4_4_4_4;if(s===vp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Lv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Nv)return r.BYTE;if(s===Uv)return r.SHORT;if(s===Ul)return r.UNSIGNED_SHORT;if(s===gp)return r.INT;if(s===ur)return r.UNSIGNED_INT;if(s===va)return r.FLOAT;if(s===Fl)return r.HALF_FLOAT;if(s===Ov)return r.ALPHA;if(s===Pv)return r.RGB;if(s===ea)return r.RGBA;if(s===Ol)return r.DEPTH_COMPONENT;if(s===Pl)return r.DEPTH_STENCIL;if(s===xp)return r.RED;if(s===yp)return r.RED_INTEGER;if(s===zv)return r.RG;if(s===Sp)return r.RG_INTEGER;if(s===Mp)return r.RGBA_INTEGER;if(s===bu||s===Eu||s===Tu||s===Au)if(h===en)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===bu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===bu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Au)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bd||s===Fd||s===Hd||s===Gd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Bd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vd||s===jd||s===kd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Vd||s===jd)return h===en?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===kd)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xd||s===qd||s===Wd||s===Yd||s===Zd||s===Kd||s===Qd||s===Jd||s===$d||s===ep||s===tp||s===np||s===ip||s===ap)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Xd)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qd)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wd)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yd)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zd)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Kd)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qd)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jd)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$d)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ep)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===tp)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===np)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ip)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ap)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ru||s===sp||s===rp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Ru)return h===en?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===sp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===rp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Iv||s===op||s===lp||s===cp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ru)return c.COMPRESSED_RED_RGTC1_EXT;if(s===op)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===lp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===cp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ll?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const l2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c2=`
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

}`;class u2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new Kn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ds({vertexShader:l2,fragmentShader:c2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new rn(new mr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f2 extends dr{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,_=null,x=null,S=null,M=null,E=null;const w=new u2,y=i.getContextAttributes();let g=null,O=null;const L=[],N=[],F=new gt;let I=null;const V=new Ji;V.viewport=new xn;const B=new Ji;B.viewport=new xn;const U=[V,B],C=new Db;let H=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ye=L[ee];return ye===void 0&&(ye=new ud,L[ee]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ee){let ye=L[ee];return ye===void 0&&(ye=new ud,L[ee]=ye),ye.getGripSpace()},this.getHand=function(ee){let ye=L[ee];return ye===void 0&&(ye=new ud,L[ee]=ye),ye.getHandSpace()};function oe(ee){const ye=N.indexOf(ee.inputSource);if(ye===-1)return;const Se=L[ye];Se!==void 0&&(Se.update(ee.inputSource,ee.frame,m||h),Se.dispatchEvent({type:ee.type,data:ee.inputSource}))}function _e(){l.removeEventListener("select",oe),l.removeEventListener("selectstart",oe),l.removeEventListener("selectend",oe),l.removeEventListener("squeeze",oe),l.removeEventListener("squeezestart",oe),l.removeEventListener("squeezeend",oe),l.removeEventListener("end",_e),l.removeEventListener("inputsourceschange",ge);for(let ee=0;ee<L.length;ee++){const ye=N[ee];ye!==null&&(N[ee]=null,L[ee].disconnect(ye))}H=null,$=null,w.reset(),e.setRenderTarget(g),M=null,S=null,x=null,l=null,O=null,Re.stop(),s.isPresenting=!1,e.setPixelRatio(I),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){d=ee,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(ee){m=ee},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(g=e.getRenderTarget(),l.addEventListener("select",oe),l.addEventListener("selectstart",oe),l.addEventListener("selectend",oe),l.addEventListener("squeeze",oe),l.addEventListener("squeezestart",oe),l.addEventListener("squeezeend",oe),l.addEventListener("end",_e),l.addEventListener("inputsourceschange",ge),y.xrCompatible!==!0&&await i.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ne=null,Pe=null;y.depth&&(Pe=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Se=y.stencil?Pl:Ol,Ne=y.stencil?Ll:ur);const dt={colorFormat:i.RGBA8,depthFormat:Pe,scaleFactor:c};x=new XRWebGLBinding(l,i),S=x.createProjectionLayer(dt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),O=new fr(S.textureWidth,S.textureHeight,{format:ea,type:ya,depthTexture:new Zv(S.textureWidth,S.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Se),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new fr(M.framebufferWidth,M.framebufferHeight,{format:ea,type:ya,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),Re.setContext(l),Re.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ge(ee){for(let ye=0;ye<ee.removed.length;ye++){const Se=ee.removed[ye],Ne=N.indexOf(Se);Ne>=0&&(N[Ne]=null,L[Ne].disconnect(Se))}for(let ye=0;ye<ee.added.length;ye++){const Se=ee.added[ye];let Ne=N.indexOf(Se);if(Ne===-1){for(let dt=0;dt<L.length;dt++)if(dt>=N.length){N.push(Se),Ne=dt;break}else if(N[dt]===null){N[dt]=Se,Ne=dt;break}if(Ne===-1)break}const Pe=L[Ne];Pe&&Pe.connect(Se)}}const G=new ie,ne=new ie;function Z(ee,ye,Se){G.setFromMatrixPosition(ye.matrixWorld),ne.setFromMatrixPosition(Se.matrixWorld);const Ne=G.distanceTo(ne),Pe=ye.projectionMatrix.elements,dt=Se.projectionMatrix.elements,nt=Pe[14]/(Pe[10]-1),et=Pe[14]/(Pe[10]+1),zt=(Pe[9]+1)/Pe[5],Ze=(Pe[9]-1)/Pe[5],X=(Pe[8]-1)/Pe[0],ln=(dt[8]+1)/dt[0],xt=nt*X,ot=nt*ln,We=Ne/(-X+ln),Lt=We*-X;if(ye.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Lt),ee.translateZ(We),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Pe[10]===-1)ee.projectionMatrix.copy(ye.projectionMatrix),ee.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const Xe=nt+We,z=et+We,T=xt-Lt,k=ot+(Ne-Lt),K=zt*et/z*Xe,fe=Ze*et/z*Xe;ee.projectionMatrix.makePerspective(T,k,K,fe,Xe,z),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Me(ee,ye){ye===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ye.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let ye=ee.near,Se=ee.far;w.texture!==null&&(w.depthNear>0&&(ye=w.depthNear),w.depthFar>0&&(Se=w.depthFar)),C.near=B.near=V.near=ye,C.far=B.far=V.far=Se,(H!==C.near||$!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,$=C.far),V.layers.mask=ee.layers.mask|2,B.layers.mask=ee.layers.mask|4,C.layers.mask=V.layers.mask|B.layers.mask;const Ne=ee.parent,Pe=C.cameras;Me(C,Ne);for(let dt=0;dt<Pe.length;dt++)Me(Pe[dt],Ne);Pe.length===2?Z(C,V,B):C.projectionMatrix.copy(V.projectionMatrix),P(ee,C,Ne)};function P(ee,ye,Se){Se===null?ee.matrix.copy(ye.matrixWorld):(ee.matrix.copy(Se.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ye.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ye.projectionMatrix),ee.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=up*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(ee){p=ee,S!==null&&(S.fixedFoveation=ee),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ee)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let ae=null;function Ee(ee,ye){if(_=ye.getViewerPose(m||h),E=ye,_!==null){const Se=_.views;M!==null&&(e.setRenderTargetFramebuffer(O,M.framebuffer),e.setRenderTarget(O));let Ne=!1;Se.length!==C.cameras.length&&(C.cameras.length=0,Ne=!0);for(let nt=0;nt<Se.length;nt++){const et=Se[nt];let zt=null;if(M!==null)zt=M.getViewport(et);else{const X=x.getViewSubImage(S,et);zt=X.viewport,nt===0&&(e.setRenderTargetTextures(O,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(O))}let Ze=U[nt];Ze===void 0&&(Ze=new Ji,Ze.layers.enable(nt),Ze.viewport=new xn,U[nt]=Ze),Ze.matrix.fromArray(et.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(et.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(zt.x,zt.y,zt.width,zt.height),nt===0&&(C.matrix.copy(Ze.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ne===!0&&C.cameras.push(Ze)}const Pe=l.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const nt=x.getDepthInformation(Se[0]);nt&&nt.isValid&&nt.texture&&w.init(e,nt,l.renderState)}}for(let Se=0;Se<L.length;Se++){const Ne=N[Se],Pe=L[Se];Ne!==null&&Pe!==void 0&&Pe.update(Ne,ye,m||h)}ae&&ae(ee,ye),ye.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ye}),E=null}const Re=new Qv;Re.setAnimationLoop(Ee),this.setAnimationLoop=function(ee){ae=ee},this.dispose=function(){}}}const ir=new Sa,h2=new on;function d2(r,e){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function s(y,g){g.color.getRGB(y.fogColor.value,Xv(r)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,O,L,N){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),x(y,g)):g.isMeshPhongMaterial?(c(y,g),_(y,g)):g.isMeshStandardMaterial?(c(y,g),S(y,g),g.isMeshPhysicalMaterial&&M(y,g,N)):g.isMeshMatcapMaterial?(c(y,g),E(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),w(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(h(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?p(y,g,O,L):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===hi&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===hi&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const O=e.get(g),L=O.envMap,N=O.envMapRotation;L&&(y.envMap.value=L,ir.copy(N),ir.x*=-1,ir.y*=-1,ir.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),y.envMapRotation.value.setFromMatrix4(h2.makeRotationFromEuler(ir)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function h(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,O,L){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*O,y.scale.value=L*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function x(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function S(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,O){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===hi&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function w(y,g){const O=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function p2(r,e,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,L){const N=L.program;s.uniformBlockBinding(O,N)}function m(O,L){let N=l[O.id];N===void 0&&(E(O),N=_(O),l[O.id]=N,O.addEventListener("dispose",y));const F=L.program;s.updateUBOMapping(O,F);const I=e.render.frame;c[O.id]!==I&&(S(O),c[O.id]=I)}function _(O){const L=x();O.__bindingPointIndex=L;const N=r.createBuffer(),F=O.__size,I=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,F,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,N),N}function x(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(O){const L=l[O.id],N=O.uniforms,F=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let I=0,V=N.length;I<V;I++){const B=Array.isArray(N[I])?N[I]:[N[I]];for(let U=0,C=B.length;U<C;U++){const H=B[U];if(M(H,I,U,F)===!0){const $=H.__offset,oe=Array.isArray(H.value)?H.value:[H.value];let _e=0;for(let ge=0;ge<oe.length;ge++){const G=oe[ge],ne=w(G);typeof G=="number"||typeof G=="boolean"?(H.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,$+_e,H.__data)):G.isMatrix3?(H.__data[0]=G.elements[0],H.__data[1]=G.elements[1],H.__data[2]=G.elements[2],H.__data[3]=0,H.__data[4]=G.elements[3],H.__data[5]=G.elements[4],H.__data[6]=G.elements[5],H.__data[7]=0,H.__data[8]=G.elements[6],H.__data[9]=G.elements[7],H.__data[10]=G.elements[8],H.__data[11]=0):(G.toArray(H.__data,_e),_e+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,$,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(O,L,N,F){const I=O.value,V=L+"_"+N;if(F[V]===void 0)return typeof I=="number"||typeof I=="boolean"?F[V]=I:F[V]=I.clone(),!0;{const B=F[V];if(typeof I=="number"||typeof I=="boolean"){if(B!==I)return F[V]=I,!0}else if(B.equals(I)===!1)return B.copy(I),!0}return!1}function E(O){const L=O.uniforms;let N=0;const F=16;for(let V=0,B=L.length;V<B;V++){const U=Array.isArray(L[V])?L[V]:[L[V]];for(let C=0,H=U.length;C<H;C++){const $=U[C],oe=Array.isArray($.value)?$.value:[$.value];for(let _e=0,ge=oe.length;_e<ge;_e++){const G=oe[_e],ne=w(G),Z=N%F,Me=Z%ne.boundary,P=Z+Me;N+=Me,P!==0&&F-P<ne.storage&&(N+=F-P),$.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=N,N+=ne.storage}}}const I=N%F;return I>0&&(N+=F-I),O.__size=N,O.__cache={},this}function w(O){const L={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(L.boundary=4,L.storage=4):O.isVector2?(L.boundary=8,L.storage=8):O.isVector3||O.isColor?(L.boundary=16,L.storage=12):O.isVector4?(L.boundary=16,L.storage=16):O.isMatrix3?(L.boundary=48,L.storage=48):O.isMatrix4?(L.boundary=64,L.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),L}function y(O){const L=O.target;L.removeEventListener("dispose",y);const N=h.indexOf(L.__bindingPointIndex);h.splice(N,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function g(){for(const O in l)r.deleteBuffer(l[O]);h=[],l={},c={}}return{bind:p,update:m,dispose:g}}class m2{constructor(e={}){const{canvas:i=jM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),w=new Int32Array(4);let y=null,g=null;const O=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ws,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let F=!1;this._outputColorSpace=ti;let I=0,V=0,B=null,U=-1,C=null;const H=new xn,$=new xn;let oe=null;const _e=new Nt(0);let ge=0,G=i.width,ne=i.height,Z=1,Me=null,P=null;const ae=new xn(0,0,G,ne),Ee=new xn(0,0,G,ne);let Re=!1;const ee=new Ap;let ye=!1,Se=!1;const Ne=new on,Pe=new on,dt=new ie,nt=new xn,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function Ze(){return B===null?Z:1}let X=s;function ln(D,Q){return i.getContext(D,Q)}try{const D={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${mp}`),i.addEventListener("webglcontextlost",ve,!1),i.addEventListener("webglcontextrestored",Fe,!1),i.addEventListener("webglcontextcreationerror",Be,!1),X===null){const Q="webgl2";if(X=ln(Q,D),X===null)throw ln(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let xt,ot,We,Lt,Xe,z,T,k,K,fe,ue,Le,Ue,q,ke,Te,Ve,tt,Je,ze,mt,at,Ot,Y;function Ie(){xt=new TT(X),xt.init(),at=new o2(X,xt),ot=new vT(X,xt,e,at),We=new s2(X,xt),ot.reverseDepthBuffer&&S&&We.buffers.depth.setReversed(!0),Lt=new CT(X),Xe=new qA,z=new r2(X,xt,We,Xe,ot,at,Lt),T=new yT(N),k=new ET(N),K=new Ob(X),Ot=new gT(X,K),fe=new AT(X,K,Lt,Ot),ue=new DT(X,fe,K,Lt),Je=new wT(X,ot,z),Te=new xT(Xe),Le=new XA(N,T,k,xt,ot,Ot,Te),Ue=new d2(N,Xe),q=new YA,ke=new e2(xt),tt=new mT(N,T,k,We,ue,M,p),Ve=new i2(N,ue,ot),Y=new p2(X,Lt,ot,We),ze=new _T(X,xt,Lt),mt=new RT(X,xt,Lt),Lt.programs=Le.programs,N.capabilities=ot,N.extensions=xt,N.properties=Xe,N.renderLists=q,N.shadowMap=Ve,N.state=We,N.info=Lt}Ie();const pe=new f2(N,X);this.xr=pe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const D=xt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=xt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(D){D!==void 0&&(Z=D,this.setSize(G,ne,!1))},this.getSize=function(D){return D.set(G,ne)},this.setSize=function(D,Q,le=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=D,ne=Q,i.width=Math.floor(D*Z),i.height=Math.floor(Q*Z),le===!0&&(i.style.width=D+"px",i.style.height=Q+"px"),this.setViewport(0,0,D,Q)},this.getDrawingBufferSize=function(D){return D.set(G*Z,ne*Z).floor()},this.setDrawingBufferSize=function(D,Q,le){G=D,ne=Q,Z=le,i.width=Math.floor(D*le),i.height=Math.floor(Q*le),this.setViewport(0,0,D,Q)},this.getCurrentViewport=function(D){return D.copy(H)},this.getViewport=function(D){return D.copy(ae)},this.setViewport=function(D,Q,le,he){D.isVector4?ae.set(D.x,D.y,D.z,D.w):ae.set(D,Q,le,he),We.viewport(H.copy(ae).multiplyScalar(Z).round())},this.getScissor=function(D){return D.copy(Ee)},this.setScissor=function(D,Q,le,he){D.isVector4?Ee.set(D.x,D.y,D.z,D.w):Ee.set(D,Q,le,he),We.scissor($.copy(Ee).multiplyScalar(Z).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(D){We.setScissorTest(Re=D)},this.setOpaqueSort=function(D){Me=D},this.setTransparentSort=function(D){P=D},this.getClearColor=function(D){return D.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(D=!0,Q=!0,le=!0){let he=0;if(D){let te=!1;if(B!==null){const De=B.texture.format;te=De===Mp||De===Sp||De===yp}if(te){const De=B.texture.type,Oe=De===ya||De===ur||De===Ul||De===Ll||De===_p||De===vp,He=tt.getClearColor(),je=tt.getClearAlpha(),rt=He.r,$e=He.g,Ye=He.b;Oe?(E[0]=rt,E[1]=$e,E[2]=Ye,E[3]=je,X.clearBufferuiv(X.COLOR,0,E)):(w[0]=rt,w[1]=$e,w[2]=Ye,w[3]=je,X.clearBufferiv(X.COLOR,0,w))}else he|=X.COLOR_BUFFER_BIT}Q&&(he|=X.DEPTH_BUFFER_BIT),le&&(he|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ve,!1),i.removeEventListener("webglcontextrestored",Fe,!1),i.removeEventListener("webglcontextcreationerror",Be,!1),tt.dispose(),q.dispose(),ke.dispose(),Xe.dispose(),T.dispose(),k.dispose(),ue.dispose(),Ot.dispose(),Y.dispose(),Le.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Sn),pe.removeEventListener("sessionend",En),Xn.stop()};function ve(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const D=Lt.autoReset,Q=Ve.enabled,le=Ve.autoUpdate,he=Ve.needsUpdate,te=Ve.type;Ie(),Lt.autoReset=D,Ve.enabled=Q,Ve.autoUpdate=le,Ve.needsUpdate=he,Ve.type=te}function Be(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function lt(D){const Q=D.target;Q.removeEventListener("dispose",lt),Pt(Q)}function Pt(D){cn(D),Xe.remove(D)}function cn(D){const Q=Xe.get(D).programs;Q!==void 0&&(Q.forEach(function(le){Le.releaseProgram(le)}),D.isShaderMaterial&&Le.releaseShaderCache(D))}this.renderBufferDirect=function(D,Q,le,he,te,De){Q===null&&(Q=et);const Oe=te.isMesh&&te.matrixWorld.determinant()<0,He=Ea(D,Q,le,he,te);We.setMaterial(he,Oe);let je=le.index,rt=1;if(he.wireframe===!0){if(je=fe.getWireframeAttribute(le),je===void 0)return;rt=2}const $e=le.drawRange,Ye=le.attributes.position;let _t=$e.start*rt,st=($e.start+$e.count)*rt;De!==null&&(_t=Math.max(_t,De.start*rt),st=Math.min(st,(De.start+De.count)*rt)),je!==null?(_t=Math.max(_t,0),st=Math.min(st,je.count)):Ye!=null&&(_t=Math.max(_t,0),st=Math.min(st,Ye.count));const nn=st-_t;if(nn<0||nn===1/0)return;Ot.setup(te,he,He,le,je);let vt,Et=ze;if(je!==null&&(vt=K.get(je),Et=mt,Et.setIndex(vt)),te.isMesh)he.wireframe===!0?(We.setLineWidth(he.wireframeLinewidth*Ze()),Et.setMode(X.LINES)):Et.setMode(X.TRIANGLES);else if(te.isLine){let Ke=he.linewidth;Ke===void 0&&(Ke=1),We.setLineWidth(Ke*Ze()),te.isLineSegments?Et.setMode(X.LINES):te.isLineLoop?Et.setMode(X.LINE_LOOP):Et.setMode(X.LINE_STRIP)}else te.isPoints?Et.setMode(X.POINTS):te.isSprite&&Et.setMode(X.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)wu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))Et.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Ke=te._multiDrawStarts,Kt=te._multiDrawCounts,pt=te._multiDrawCount,wn=je?K.get(je).bytesPerElement:1,Ut=Xe.get(he).currentProgram.getUniforms();for(let qt=0;qt<pt;qt++)Ut.setValue(X,"_gl_DrawID",qt),Et.render(Ke[qt]/wn,Kt[qt])}else if(te.isInstancedMesh)Et.renderInstances(_t,nn,te.count);else if(le.isInstancedBufferGeometry){const Ke=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Kt=Math.min(le.instanceCount,Ke);Et.renderInstances(_t,nn,Kt)}else Et.render(_t,nn)};function Rt(D,Q,le){D.transparent===!0&&D.side===ga&&D.forceSinglePass===!1?(D.side=hi,D.needsUpdate=!0,pi(D,Q,le),D.side=Za,D.needsUpdate=!0,pi(D,Q,le),D.side=ga):pi(D,Q,le)}this.compile=function(D,Q,le=null){le===null&&(le=D),g=ke.get(le),g.init(Q),L.push(g),le.traverseVisible(function(te){te.isLight&&te.layers.test(Q.layers)&&(g.pushLight(te),te.castShadow&&g.pushShadow(te))}),D!==le&&D.traverseVisible(function(te){te.isLight&&te.layers.test(Q.layers)&&(g.pushLight(te),te.castShadow&&g.pushShadow(te))}),g.setupLights();const he=new Set;return D.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const De=te.material;if(De)if(Array.isArray(De))for(let Oe=0;Oe<De.length;Oe++){const He=De[Oe];Rt(He,le,te),he.add(He)}else Rt(De,le,te),he.add(De)}),g=L.pop(),he},this.compileAsync=function(D,Q,le=null){const he=this.compile(D,Q,le);return new Promise(te=>{function De(){if(he.forEach(function(Oe){Xe.get(Oe).currentProgram.isReady()&&he.delete(Oe)}),he.size===0){te(D);return}setTimeout(De,10)}xt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let yn=null;function un(D){yn&&yn(D)}function Sn(){Xn.stop()}function En(){Xn.start()}const Xn=new Qv;Xn.setAnimationLoop(un),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(D){yn=D,pe.setAnimationLoop(D),D===null?Xn.stop():Xn.start()},pe.addEventListener("sessionstart",Sn),pe.addEventListener("sessionend",En),this.render=function(D,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(Q),Q=pe.getCamera()),D.isScene===!0&&D.onBeforeRender(N,D,Q,B),g=ke.get(D,L.length),g.init(Q),L.push(g),Pe.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ee.setFromProjectionMatrix(Pe),Se=this.localClippingEnabled,ye=Te.init(this.clippingPlanes,Se),y=q.get(D,O.length),y.init(),O.push(y),pe.enabled===!0&&pe.isPresenting===!0){const De=N.xr.getDepthSensingMesh();De!==null&&Ui(De,Q,-1/0,N.sortObjects)}Ui(D,Q,0,N.sortObjects),y.finish(),N.sortObjects===!0&&y.sort(Me,P),zt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,zt&&tt.addToRenderList(y,D),this.info.render.frame++,ye===!0&&Te.beginShadows();const le=g.state.shadowsArray;Ve.render(le,D,Q),ye===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const he=y.opaque,te=y.transmissive;if(g.setupLights(),Q.isArrayCamera){const De=Q.cameras;if(te.length>0)for(let Oe=0,He=De.length;Oe<He;Oe++){const je=De[Oe];ba(he,te,D,je)}zt&&tt.render(D);for(let Oe=0,He=De.length;Oe<He;Oe++){const je=De[Oe];Ma(y,D,je,je.viewport)}}else te.length>0&&ba(he,te,D,Q),zt&&tt.render(D),Ma(y,D,Q);B!==null&&V===0&&(z.updateMultisampleRenderTarget(B),z.updateRenderTargetMipmap(B)),D.isScene===!0&&D.onAfterRender(N,D,Q),Ot.resetDefaultState(),U=-1,C=null,L.pop(),L.length>0?(g=L[L.length-1],ye===!0&&Te.setGlobalState(N.clippingPlanes,g.state.camera)):g=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function Ui(D,Q,le,he){if(D.visible===!1)return;if(D.layers.test(Q.layers)){if(D.isGroup)le=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Q);else if(D.isLight)g.pushLight(D),D.castShadow&&g.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ee.intersectsSprite(D)){he&&nt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Pe);const Oe=ue.update(D),He=D.material;He.visible&&y.push(D,Oe,He,le,nt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ee.intersectsObject(D))){const Oe=ue.update(D),He=D.material;if(he&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),nt.copy(D.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),nt.copy(Oe.boundingSphere.center)),nt.applyMatrix4(D.matrixWorld).applyMatrix4(Pe)),Array.isArray(He)){const je=Oe.groups;for(let rt=0,$e=je.length;rt<$e;rt++){const Ye=je[rt],_t=He[Ye.materialIndex];_t&&_t.visible&&y.push(D,Oe,_t,le,nt.z,Ye)}}else He.visible&&y.push(D,Oe,He,le,nt.z,null)}}const De=D.children;for(let Oe=0,He=De.length;Oe<He;Oe++)Ui(De[Oe],Q,le,he)}function Ma(D,Q,le,he){const te=D.opaque,De=D.transmissive,Oe=D.transparent;g.setupLightsView(le),ye===!0&&Te.setGlobalState(N.clippingPlanes,le),he&&We.viewport(H.copy(he)),te.length>0&&di(te,Q,le),De.length>0&&di(De,Q,le),Oe.length>0&&di(Oe,Q,le),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function ba(D,Q,le,he){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[he.id]===void 0&&(g.state.transmissionRenderTarget[he.id]=new fr(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?Fl:ya,minFilter:cr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));const De=g.state.transmissionRenderTarget[he.id],Oe=he.viewport||H;De.setSize(Oe.z*N.transmissionResolutionScale,Oe.w*N.transmissionResolutionScale);const He=N.getRenderTarget();N.setRenderTarget(De),N.getClearColor(_e),ge=N.getClearAlpha(),ge<1&&N.setClearColor(16777215,.5),N.clear(),zt&&tt.render(le);const je=N.toneMapping;N.toneMapping=ws;const rt=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),g.setupLightsView(he),ye===!0&&Te.setGlobalState(N.clippingPlanes,he),di(D,le,he),z.updateMultisampleRenderTarget(De),z.updateRenderTargetMipmap(De),xt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ye=0,_t=Q.length;Ye<_t;Ye++){const st=Q[Ye],nn=st.object,vt=st.geometry,Et=st.material,Ke=st.group;if(Et.side===ga&&nn.layers.test(he.layers)){const Kt=Et.side;Et.side=hi,Et.needsUpdate=!0,ia(nn,le,he,vt,Et,Ke),Et.side=Kt,Et.needsUpdate=!0,$e=!0}}$e===!0&&(z.updateMultisampleRenderTarget(De),z.updateRenderTargetMipmap(De))}N.setRenderTarget(He),N.setClearColor(_e,ge),rt!==void 0&&(he.viewport=rt),N.toneMapping=je}function di(D,Q,le){const he=Q.isScene===!0?Q.overrideMaterial:null;for(let te=0,De=D.length;te<De;te++){const Oe=D[te],He=Oe.object,je=Oe.geometry,rt=Oe.group;let $e=Oe.material;$e.allowOverride===!0&&he!==null&&($e=he),He.layers.test(le.layers)&&ia(He,Q,le,je,$e,rt)}}function ia(D,Q,le,he,te,De){D.onBeforeRender(N,Q,le,he,te,De),D.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),te.onBeforeRender(N,Q,le,he,D,De),te.transparent===!0&&te.side===ga&&te.forceSinglePass===!1?(te.side=hi,te.needsUpdate=!0,N.renderBufferDirect(le,Q,he,te,D,De),te.side=Za,te.needsUpdate=!0,N.renderBufferDirect(le,Q,he,te,D,De),te.side=ga):N.renderBufferDirect(le,Q,he,te,D,De),D.onAfterRender(N,Q,le,he,te,De)}function pi(D,Q,le){Q.isScene!==!0&&(Q=et);const he=Xe.get(D),te=g.state.lights,De=g.state.shadowsArray,Oe=te.state.version,He=Le.getParameters(D,te.state,De,Q,le),je=Le.getProgramCacheKey(He);let rt=he.programs;he.environment=D.isMeshStandardMaterial?Q.environment:null,he.fog=Q.fog,he.envMap=(D.isMeshStandardMaterial?k:T).get(D.envMap||he.environment),he.envMapRotation=he.environment!==null&&D.envMap===null?Q.environmentRotation:D.envMapRotation,rt===void 0&&(D.addEventListener("dispose",lt),rt=new Map,he.programs=rt);let $e=rt.get(je);if($e!==void 0){if(he.currentProgram===$e&&he.lightsStateVersion===Oe)return ni(D,He),$e}else He.uniforms=Le.getUniforms(D),D.onBeforeCompile(He,N),$e=Le.acquireProgram(He,je),rt.set(je,$e),he.uniforms=He.uniforms;const Ye=he.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ye.clippingPlanes=Te.uniform),ni(D,He),he.needsLights=Xt(D),he.lightsStateVersion=Oe,he.needsLights&&(Ye.ambientLightColor.value=te.state.ambient,Ye.lightProbe.value=te.state.probe,Ye.directionalLights.value=te.state.directional,Ye.directionalLightShadows.value=te.state.directionalShadow,Ye.spotLights.value=te.state.spot,Ye.spotLightShadows.value=te.state.spotShadow,Ye.rectAreaLights.value=te.state.rectArea,Ye.ltc_1.value=te.state.rectAreaLTC1,Ye.ltc_2.value=te.state.rectAreaLTC2,Ye.pointLights.value=te.state.point,Ye.pointLightShadows.value=te.state.pointShadow,Ye.hemisphereLights.value=te.state.hemi,Ye.directionalShadowMap.value=te.state.directionalShadowMap,Ye.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ye.spotShadowMap.value=te.state.spotShadowMap,Ye.spotLightMatrix.value=te.state.spotLightMatrix,Ye.spotLightMap.value=te.state.spotLightMap,Ye.pointShadowMap.value=te.state.pointShadowMap,Ye.pointShadowMatrix.value=te.state.pointShadowMatrix),he.currentProgram=$e,he.uniformsList=null,$e}function mi(D){if(D.uniformsList===null){const Q=D.currentProgram.getUniforms();D.uniformsList=Du.seqWithValue(Q.seq,D.uniforms)}return D.uniformsList}function ni(D,Q){const le=Xe.get(D);le.outputColorSpace=Q.outputColorSpace,le.batching=Q.batching,le.batchingColor=Q.batchingColor,le.instancing=Q.instancing,le.instancingColor=Q.instancingColor,le.instancingMorph=Q.instancingMorph,le.skinning=Q.skinning,le.morphTargets=Q.morphTargets,le.morphNormals=Q.morphNormals,le.morphColors=Q.morphColors,le.morphTargetsCount=Q.morphTargetsCount,le.numClippingPlanes=Q.numClippingPlanes,le.numIntersection=Q.numClipIntersection,le.vertexAlphas=Q.vertexAlphas,le.vertexTangents=Q.vertexTangents,le.toneMapping=Q.toneMapping}function Ea(D,Q,le,he,te){Q.isScene!==!0&&(Q=et),z.resetTextureUnits();const De=Q.fog,Oe=he.isMeshStandardMaterial?Q.environment:null,He=B===null?N.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:_o,je=(he.isMeshStandardMaterial?k:T).get(he.envMap||Oe),rt=he.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,$e=!!le.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),Ye=!!le.morphAttributes.position,_t=!!le.morphAttributes.normal,st=!!le.morphAttributes.color;let nn=ws;he.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(nn=N.toneMapping);const vt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Et=vt!==void 0?vt.length:0,Ke=Xe.get(he),Kt=g.state.lights;if(ye===!0&&(Se===!0||D!==C)){const dn=D===C&&he.id===U;Te.setState(he,D,dn)}let pt=!1;he.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Kt.state.version||Ke.outputColorSpace!==He||te.isBatchedMesh&&Ke.batching===!1||!te.isBatchedMesh&&Ke.batching===!0||te.isBatchedMesh&&Ke.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Ke.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Ke.instancing===!1||!te.isInstancedMesh&&Ke.instancing===!0||te.isSkinnedMesh&&Ke.skinning===!1||!te.isSkinnedMesh&&Ke.skinning===!0||te.isInstancedMesh&&Ke.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ke.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ke.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ke.instancingMorph===!1&&te.morphTexture!==null||Ke.envMap!==je||he.fog===!0&&Ke.fog!==De||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Te.numPlanes||Ke.numIntersection!==Te.numIntersection)||Ke.vertexAlphas!==rt||Ke.vertexTangents!==$e||Ke.morphTargets!==Ye||Ke.morphNormals!==_t||Ke.morphColors!==st||Ke.toneMapping!==nn||Ke.morphTargetsCount!==Et)&&(pt=!0):(pt=!0,Ke.__version=he.version);let wn=Ke.currentProgram;pt===!0&&(wn=pi(he,Q,te));let Ut=!1,qt=!1,ii=!1;const Wt=wn.getUniforms(),Ht=Ke.uniforms;if(We.useProgram(wn.program)&&(Ut=!0,qt=!0,ii=!0),he.id!==U&&(U=he.id,qt=!0),Ut||C!==D){We.buffers.depth.getReversed()?(Ne.copy(D.projectionMatrix),XM(Ne),qM(Ne),Wt.setValue(X,"projectionMatrix",Ne)):Wt.setValue(X,"projectionMatrix",D.projectionMatrix),Wt.setValue(X,"viewMatrix",D.matrixWorldInverse);const Tn=Wt.map.cameraPosition;Tn!==void 0&&Tn.setValue(X,dt.setFromMatrixPosition(D.matrixWorld)),ot.logarithmicDepthBuffer&&Wt.setValue(X,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&Wt.setValue(X,"isOrthographic",D.isOrthographicCamera===!0),C!==D&&(C=D,qt=!0,ii=!0)}if(te.isSkinnedMesh){Wt.setOptional(X,te,"bindMatrix"),Wt.setOptional(X,te,"bindMatrixInverse");const dn=te.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Wt.setValue(X,"boneTexture",dn.boneTexture,z))}te.isBatchedMesh&&(Wt.setOptional(X,te,"batchingTexture"),Wt.setValue(X,"batchingTexture",te._matricesTexture,z),Wt.setOptional(X,te,"batchingIdTexture"),Wt.setValue(X,"batchingIdTexture",te._indirectTexture,z),Wt.setOptional(X,te,"batchingColorTexture"),te._colorsTexture!==null&&Wt.setValue(X,"batchingColorTexture",te._colorsTexture,z));const It=le.morphAttributes;if((It.position!==void 0||It.normal!==void 0||It.color!==void 0)&&Je.update(te,le,wn),(qt||Ke.receiveShadow!==te.receiveShadow)&&(Ke.receiveShadow=te.receiveShadow,Wt.setValue(X,"receiveShadow",te.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(Ht.envMap.value=je,Ht.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),he.isMeshStandardMaterial&&he.envMap===null&&Q.environment!==null&&(Ht.envMapIntensity.value=Q.environmentIntensity),qt&&(Wt.setValue(X,"toneMappingExposure",N.toneMappingExposure),Ke.needsLights&&ji(Ht,ii),De&&he.fog===!0&&Ue.refreshFogUniforms(Ht,De),Ue.refreshMaterialUniforms(Ht,he,Z,ne,g.state.transmissionRenderTarget[D.id]),Du.upload(X,mi(Ke),Ht,z)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Du.upload(X,mi(Ke),Ht,z),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&Wt.setValue(X,"center",te.center),Wt.setValue(X,"modelViewMatrix",te.modelViewMatrix),Wt.setValue(X,"normalMatrix",te.normalMatrix),Wt.setValue(X,"modelMatrix",te.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const dn=he.uniformsGroups;for(let Tn=0,Gn=dn.length;Tn<Gn;Tn++){const ai=dn[Tn];Y.update(ai,wn),Y.bind(ai,wn)}}return wn}function ji(D,Q){D.ambientLightColor.needsUpdate=Q,D.lightProbe.needsUpdate=Q,D.directionalLights.needsUpdate=Q,D.directionalLightShadows.needsUpdate=Q,D.pointLights.needsUpdate=Q,D.pointLightShadows.needsUpdate=Q,D.spotLights.needsUpdate=Q,D.spotLightShadows.needsUpdate=Q,D.rectAreaLights.needsUpdate=Q,D.hemisphereLights.needsUpdate=Q}function Xt(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(D,Q,le){const he=Xe.get(D);he.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),Xe.get(D.texture).__webglTexture=Q,Xe.get(D.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:le,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Q){const le=Xe.get(D);le.__webglFramebuffer=Q,le.__useDefaultFramebuffer=Q===void 0};const Ns=X.createFramebuffer();this.setRenderTarget=function(D,Q=0,le=0){B=D,I=Q,V=le;let he=!0,te=null,De=!1,Oe=!1;if(D){const je=Xe.get(D);if(je.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(X.FRAMEBUFFER,null),he=!1;else if(je.__webglFramebuffer===void 0)z.setupRenderTarget(D);else if(je.__hasExternalTextures)z.rebindTextures(D,Xe.get(D.texture).__webglTexture,Xe.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Ye=D.depthTexture;if(je.__boundDepthTexture!==Ye){if(Ye!==null&&Xe.has(Ye)&&(D.width!==Ye.image.width||D.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(D)}}const rt=D.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Oe=!0);const $e=Xe.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray($e[Q])?te=$e[Q][le]:te=$e[Q],De=!0):D.samples>0&&z.useMultisampledRTT(D)===!1?te=Xe.get(D).__webglMultisampledFramebuffer:Array.isArray($e)?te=$e[le]:te=$e,H.copy(D.viewport),$.copy(D.scissor),oe=D.scissorTest}else H.copy(ae).multiplyScalar(Z).floor(),$.copy(Ee).multiplyScalar(Z).floor(),oe=Re;if(le!==0&&(te=Ns),We.bindFramebuffer(X.FRAMEBUFFER,te)&&he&&We.drawBuffers(D,te),We.viewport(H),We.scissor($),We.setScissorTest(oe),De){const je=Xe.get(D.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Q,je.__webglTexture,le)}else if(Oe){const je=Xe.get(D.texture),rt=Q;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,je.__webglTexture,le,rt)}else if(D!==null&&le!==0){const je=Xe.get(D.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,je.__webglTexture,le)}U=-1},this.readRenderTargetPixels=function(D,Q,le,he,te,De,Oe){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Xe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Oe!==void 0&&(He=He[Oe]),He){We.bindFramebuffer(X.FRAMEBUFFER,He);try{const je=D.texture,rt=je.format,$e=je.type;if(!ot.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=D.width-he&&le>=0&&le<=D.height-te&&X.readPixels(Q,le,he,te,at.convert(rt),at.convert($e),De)}finally{const je=B!==null?Xe.get(B).__webglFramebuffer:null;We.bindFramebuffer(X.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(D,Q,le,he,te,De,Oe){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Xe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Oe!==void 0&&(He=He[Oe]),He)if(Q>=0&&Q<=D.width-he&&le>=0&&le<=D.height-te){We.bindFramebuffer(X.FRAMEBUFFER,He);const je=D.texture,rt=je.format,$e=je.type;if(!ot.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ye),X.bufferData(X.PIXEL_PACK_BUFFER,De.byteLength,X.STREAM_READ),X.readPixels(Q,le,he,te,at.convert(rt),at.convert($e),0);const _t=B!==null?Xe.get(B).__webglFramebuffer:null;We.bindFramebuffer(X.FRAMEBUFFER,_t);const st=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await kM(X,st,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ye),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,De),X.deleteBuffer(Ye),X.deleteSync(st),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Q=null,le=0){const he=Math.pow(2,-le),te=Math.floor(D.image.width*he),De=Math.floor(D.image.height*he),Oe=Q!==null?Q.x:0,He=Q!==null?Q.y:0;z.setTexture2D(D,0),X.copyTexSubImage2D(X.TEXTURE_2D,le,0,0,Oe,He,te,De),We.unbindTexture()};const gr=X.createFramebuffer(),gi=X.createFramebuffer();this.copyTextureToTexture=function(D,Q,le=null,he=null,te=0,De=null){De===null&&(te!==0?(wu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=te,te=0):De=0);let Oe,He,je,rt,$e,Ye,_t,st,nn;const vt=D.isCompressedTexture?D.mipmaps[De]:D.image;if(le!==null)Oe=le.max.x-le.min.x,He=le.max.y-le.min.y,je=le.isBox3?le.max.z-le.min.z:1,rt=le.min.x,$e=le.min.y,Ye=le.isBox3?le.min.z:0;else{const It=Math.pow(2,-te);Oe=Math.floor(vt.width*It),He=Math.floor(vt.height*It),D.isDataArrayTexture?je=vt.depth:D.isData3DTexture?je=Math.floor(vt.depth*It):je=1,rt=0,$e=0,Ye=0}he!==null?(_t=he.x,st=he.y,nn=he.z):(_t=0,st=0,nn=0);const Et=at.convert(Q.format),Ke=at.convert(Q.type);let Kt;Q.isData3DTexture?(z.setTexture3D(Q,0),Kt=X.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(z.setTexture2DArray(Q,0),Kt=X.TEXTURE_2D_ARRAY):(z.setTexture2D(Q,0),Kt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Q.unpackAlignment);const pt=X.getParameter(X.UNPACK_ROW_LENGTH),wn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Ut=X.getParameter(X.UNPACK_SKIP_PIXELS),qt=X.getParameter(X.UNPACK_SKIP_ROWS),ii=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,vt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,vt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,rt),X.pixelStorei(X.UNPACK_SKIP_ROWS,$e),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ye);const Wt=D.isDataArrayTexture||D.isData3DTexture,Ht=Q.isDataArrayTexture||Q.isData3DTexture;if(D.isDepthTexture){const It=Xe.get(D),dn=Xe.get(Q),Tn=Xe.get(It.__renderTarget),Gn=Xe.get(dn.__renderTarget);We.bindFramebuffer(X.READ_FRAMEBUFFER,Tn.__webglFramebuffer),We.bindFramebuffer(X.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let ai=0;ai<je;ai++)Wt&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Xe.get(D).__webglTexture,te,Ye+ai),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Xe.get(Q).__webglTexture,De,nn+ai)),X.blitFramebuffer(rt,$e,Oe,He,_t,st,Oe,He,X.DEPTH_BUFFER_BIT,X.NEAREST);We.bindFramebuffer(X.READ_FRAMEBUFFER,null),We.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(te!==0||D.isRenderTargetTexture||Xe.has(D)){const It=Xe.get(D),dn=Xe.get(Q);We.bindFramebuffer(X.READ_FRAMEBUFFER,gr),We.bindFramebuffer(X.DRAW_FRAMEBUFFER,gi);for(let Tn=0;Tn<je;Tn++)Wt?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,It.__webglTexture,te,Ye+Tn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,It.__webglTexture,te),Ht?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,dn.__webglTexture,De,nn+Tn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,dn.__webglTexture,De),te!==0?X.blitFramebuffer(rt,$e,Oe,He,_t,st,Oe,He,X.COLOR_BUFFER_BIT,X.NEAREST):Ht?X.copyTexSubImage3D(Kt,De,_t,st,nn+Tn,rt,$e,Oe,He):X.copyTexSubImage2D(Kt,De,_t,st,rt,$e,Oe,He);We.bindFramebuffer(X.READ_FRAMEBUFFER,null),We.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ht?D.isDataTexture||D.isData3DTexture?X.texSubImage3D(Kt,De,_t,st,nn,Oe,He,je,Et,Ke,vt.data):Q.isCompressedArrayTexture?X.compressedTexSubImage3D(Kt,De,_t,st,nn,Oe,He,je,Et,vt.data):X.texSubImage3D(Kt,De,_t,st,nn,Oe,He,je,Et,Ke,vt):D.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,De,_t,st,Oe,He,Et,Ke,vt.data):D.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,De,_t,st,vt.width,vt.height,Et,vt.data):X.texSubImage2D(X.TEXTURE_2D,De,_t,st,Oe,He,Et,Ke,vt);X.pixelStorei(X.UNPACK_ROW_LENGTH,pt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,wn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ut),X.pixelStorei(X.UNPACK_SKIP_ROWS,qt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ii),De===0&&Q.generateMipmaps&&X.generateMipmap(Kt),We.unbindTexture()},this.copyTextureToTexture3D=function(D,Q,le=null,he=null,te=0){return wu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,Q,le,he,te)},this.initRenderTarget=function(D){Xe.get(D).__webglFramebuffer===void 0&&z.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?z.setTextureCube(D,0):D.isData3DTexture?z.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?z.setTexture2DArray(D,0):z.setTexture2D(D,0),We.unbindTexture()},this.resetState=function(){I=0,V=0,B=null,We.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Vt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Vt._getUnpackColorSpace()}}const vv={type:"change"},Up={type:"start"},nx={type:"end"},xu=new Ep,xv=new Ts,g2=Math.cos(70*VM.DEG2RAD),Un=new ie,ui=2*Math.PI,tn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xd=1e-6;class _2 extends Ub{constructor(e,i=null){super(e,i),this.state=tn.NONE,this.target=new ie,this.cursor=new ie,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wa.ROTATE,MIDDLE:Wa.DOLLY,RIGHT:Wa.PAN},this.touches={ONE:Rs.ROTATE,TWO:Rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new ie,this._lastQuaternion=new hr,this._lastTargetPosition=new ie,this._quat=new hr().setFromUnitVectors(e.up,new ie(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new q_,this._sphericalDelta=new q_,this._scale=1,this._panOffset=new ie,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new ie,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=x2.bind(this),this._onPointerDown=v2.bind(this),this._onPointerUp=y2.bind(this),this._onContextMenu=R2.bind(this),this._onMouseWheel=b2.bind(this),this._onKeyDown=E2.bind(this),this._onTouchStart=T2.bind(this),this._onTouchMove=A2.bind(this),this._onMouseDown=S2.bind(this),this._onMouseMove=M2.bind(this),this._interceptControlDown=C2.bind(this),this._interceptControlUp=w2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vv),this.update(),this.state=tn.NONE}update(e=null){const i=this.object.position;Un.copy(i).sub(this.target),Un.applyQuaternion(this._quat),this._spherical.setFromVector3(Un),this.autoRotate&&this.state===tn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ui:s>Math.PI&&(s-=ui),l<-Math.PI?l+=ui:l>Math.PI&&(l-=ui),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(Un.setFromSpherical(this._spherical),Un.applyQuaternion(this._quatInverse),i.copy(this.target).add(Un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=Un.length();h=this._clampDistance(d*this._scale);const p=d-h;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const d=new ie(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const m=new ie(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),h=Un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(xu.origin.copy(this.object.position),xu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xu.direction))<g2?this.object.lookAt(this.target):(xv.setFromNormalAndCoplanarPoint(this.object.up,this.target),xu.intersectPlane(xv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>xd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xd||this._lastTargetPosition.distanceToSquared(this.target)>xd?(this.dispatchEvent(vv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ui/60*this.autoRotateSpeed*e:ui/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){Un.setFromMatrixColumn(i,0),Un.multiplyScalar(-e),this._panOffset.add(Un)}_panUp(e,i){this.screenSpacePanning===!0?Un.setFromMatrixColumn(i,1):(Un.setFromMatrixColumn(i,0),Un.crossVectors(this.object.up,Un)),Un.multiplyScalar(e),this._panOffset.add(Un)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Un.copy(l).sub(this.target);let c=Un.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/i.clientHeight),this._rotateUp(ui*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/i.clientHeight),this._rotateUp(ui*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new gt,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function v2(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function x2(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function y2(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nx),this.state=tn.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function S2(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Wa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=tn.DOLLY;break;case Wa.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=tn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=tn.ROTATE}break;case Wa.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=tn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=tn.PAN}break;default:this.state=tn.NONE}this.state!==tn.NONE&&this.dispatchEvent(Up)}function M2(r){switch(this.state){case tn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case tn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case tn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function b2(r){this.enabled===!1||this.enableZoom===!1||this.state!==tn.NONE||(r.preventDefault(),this.dispatchEvent(Up),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(nx))}function E2(r){this.enabled!==!1&&this._handleKeyDown(r)}function T2(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Rs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=tn.TOUCH_ROTATE;break;case Rs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=tn.TOUCH_PAN;break;default:this.state=tn.NONE}break;case 2:switch(this.touches.TWO){case Rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=tn.TOUCH_DOLLY_PAN;break;case Rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=tn.TOUCH_DOLLY_ROTATE;break;default:this.state=tn.NONE}break;default:this.state=tn.NONE}this.state!==tn.NONE&&this.dispatchEvent(Up)}function A2(r){switch(this._trackPointer(r),this.state){case tn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case tn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case tn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case tn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=tn.NONE}}function R2(r){this.enabled!==!1&&r.preventDefault()}function C2(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function w2(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Dl=new ie;function Vi(r,e,i,s,l,c){const h=2*Math.PI*l/4,d=Math.max(c-2*l,0),p=Math.PI/4;Dl.copy(e),Dl[s]=0,Dl.normalize();const m=.5*h/(h+d),_=1-Dl.angleTo(r)/p;return Math.sign(Dl[i])===1?_*m:d/(h+d)+m+m*(1-_)}class D2 extends xa{constructor(e=1,i=1,s=1,l=2,c=.1){if(l=l*2+1,c=Math.min(e/2,i/2,s/2,c),super(1,1,1,l,l,l),l===1)return;const h=this.toNonIndexed();this.index=null,this.attributes.position=h.attributes.position,this.attributes.normal=h.attributes.normal,this.attributes.uv=h.attributes.uv;const d=new ie,p=new ie,m=new ie(e,i,s).divideScalar(2).subScalar(c),_=this.attributes.position.array,x=this.attributes.normal.array,S=this.attributes.uv.array,M=_.length/6,E=new ie,w=.5/l;for(let y=0,g=0;y<_.length;y+=3,g+=2)switch(d.fromArray(_,y),p.copy(d),p.x-=Math.sign(p.x)*w,p.y-=Math.sign(p.y)*w,p.z-=Math.sign(p.z)*w,p.normalize(),_[y+0]=m.x*Math.sign(d.x)+p.x*c,_[y+1]=m.y*Math.sign(d.y)+p.y*c,_[y+2]=m.z*Math.sign(d.z)+p.z*c,x[y+0]=p.x,x[y+1]=p.y,x[y+2]=p.z,Math.floor(y/M)){case 0:E.set(1,0,0),S[g+0]=Vi(E,p,"z","y",c,s),S[g+1]=1-Vi(E,p,"y","z",c,i);break;case 1:E.set(-1,0,0),S[g+0]=1-Vi(E,p,"z","y",c,s),S[g+1]=1-Vi(E,p,"y","z",c,i);break;case 2:E.set(0,1,0),S[g+0]=1-Vi(E,p,"x","z",c,e),S[g+1]=Vi(E,p,"z","x",c,s);break;case 3:E.set(0,-1,0),S[g+0]=1-Vi(E,p,"x","z",c,e),S[g+1]=1-Vi(E,p,"z","x",c,s);break;case 4:E.set(0,0,1),S[g+0]=1-Vi(E,p,"x","y",c,e),S[g+1]=1-Vi(E,p,"y","x",c,i);break;case 5:E.set(0,0,-1),S[g+0]=Vi(E,p,"x","y",c,e),S[g+1]=1-Vi(E,p,"y","x",c,i);break}}}const ix=[[4.5,3],[10.5,3],[4.5,8],[10.5,8],[18.5,3],[18.5,14]],N2=[[4,4],[10,4],[4,9],[10,9],[18,4],[18,15]],U2=[[2,14],[4,14],[6,14],[8,14],[10,14],[11,16]],ax=[[1.5,1.5],[13.5,1.5],[1.5,10.5],[21.5,6.5],[13.5,18.5],[21.5,18.5]],sx=2.5;function L2(r){r.blockRect(0,0,24,1),r.blockRect(0,0,1,20),r.blockRect(0,12,13,1);for(const[e,i]of ix)r.blockRect(e-1.85,i-.825,3.7,1.65),r.blockRect(e-.5,i+sx-.5,1,1);r.blockRect(3,15,7,3);for(const e of[4.2,6.5,8.8])r.blockRect(e-.5,18.2,1,1.3);r.blockRect(17,8,4,2),r.blockRect(18,10,2,1),r.blockRect(22,13,2,4);for(const[e,i]of ax)r.blockRect(e-.5,i-.5,1,1);return r}class O2{constructor(){Hi(this,"geometries",new Map);Hi(this,"materials",new Map);Hi(this,"textures",[])}material(e,i=.38,s=.03){const l=`${e}:${i}:${s}`;return this.materials.has(l)||this.materials.set(l,new wp({color:e,roughness:i,metalness:s})),this.materials.get(l)}geometry(e,i){return this.geometries.has(e)||this.geometries.set(e,i()),this.geometries.get(e)}box(e,i,s,l,c,h,d,p,m=.06){const _=this.geometry(`box:${i}:${s}:${l}:${m}`,()=>m?new D2(i,s,l,2,Math.min(m,i/4,s/4,l/4)):new xa(i,s,l)),x=new rn(_,this.material(p));return x.position.set(c,h,d),x.castShadow=!0,x.receiveShadow=!0,e.add(x),x}cylinder(e,i,s,l,c,h,d,p){const m=this.geometry(`cyl:${i}:${s}:${l}`,()=>new Rp(i,s,l,20)),_=new rn(m,this.material(p,.29));return _.position.set(c,h,d),_.castShadow=!0,_.receiveShadow=!0,e.add(_),_}sphere(e,i,s,l,c,h){const d=this.geometry(`sphere:${i}`,()=>new Pu(i,16,12)),p=new rn(d,this.material(h));return p.position.set(s,l,c),p.castShadow=!0,e.add(p),p}dispose(){for(const e of this.geometries.values())e.dispose();for(const e of this.materials.values())e.dispose();for(const e of this.textures)e.dispose()}}function P2(r,e,i){const s=document.createElement("canvas");s.width=256,s.height=160;const l=s.getContext("2d");if(l.fillStyle="#24283c",l.fillRect(0,0,256,160),l.fillStyle="#3e4159",l.fillRect(0,0,256,17),l.fillStyle=i,l.fillRect(12,6,5,5),l.fillStyle="#8390a9",l.fillRect(24,6,68,4),e==="iris")for(let h=0;h<5;h++)l.fillStyle=["#9d88d8","#83bbaa","#d9a3be"][h%3],l.fillRect(28+h*41,136-[39,70,58,94,85][h],26,[39,70,58,94,85][h]);else for(let h=0;h<7;h++)l.fillStyle=h%3===0?i:"#8490a7",l.globalAlpha=.8,l.fillRect(17,31+h*15,70+h*31%143,4),l.globalAlpha=1;const c=new Yv(s);return c.colorSpace=ti,r.textures.push(c),c}function z2(r,e,i){L2(i);const s=e.box(r,24.7,.42,20.7,12,-.26,10,"#c7b29d",.14);e.box(r,24.2,.1,20.2,12,-.005,10,"#f0ddc4",.04).userData.walkable=!0;const l=e.geometry("plank",()=>new xa(1.98,.035,.98)),c=new yb(l,e.material("#ecd4b5",.62),240);let h=0;const d=new Hn,p=["#efddc6","#ecd5b9","#e5caa8","#f5e3ca","#e8cfb0"];for(let y=0;y<20;y++)for(let g=0;g<12;g++)d.position.set(g*2+1,.061,y+.5),d.updateMatrix(),c.setMatrixAt(h,d.matrix),c.setColorAt(h,new Nt(p[(g*7+y*3)%5])),h++;c.receiveShadow=!0,c.userData.walkable=!0,r.add(c),e.box(r,12.3,.045,10.3,7.1,.1,6,"#ccb8ea",.12).userData.walkable=!0,e.box(r,7.3,.045,7.8,19.3,.1,4.6,"#d4e2d2",.12).userData.walkable=!0,e.box(r,7.3,.045,7.8,19.3,.1,15.4,"#e2d3ed",.12).userData.walkable=!0,e.box(r,24.5,3,.18,12,1.55,-.03,"#e8e3ed",.04),e.box(r,.18,3,20,-.03,1.55,10,"#eee9f0",.04);const m=new Eb({color:"#b8dfe5",transparent:!0,opacity:.34,roughness:.14,metalness:.04,side:ga,depthWrite:!1}),_=e.geometry("window",()=>new xa(3.5,1.85,.035));for(let y=2.3;y<24;y+=4.6){const g=new rn(_,m);g.position.set(y,1.9,.09),r.add(g),e.box(r,3.65,.1,.16,y,.94,.12,"#fafaff",.02),e.box(r,3.65,.1,.16,y,2.87,.12,"#fafaff",.02),e.box(r,.08,1.95,.12,y,1.9,.15,"#f6f8fb",.01),e.box(r,.08,1.95,.12,y-1.8,1.9,.15,"#f6f8fb",.01),e.box(r,.08,1.95,.12,y+1.8,1.9,.15,"#f6f8fb",.01)}for(let y=2.8;y<20;y+=4.6){const g=new rn(_,m);g.rotation.y=Math.PI/2,g.position.set(.1,1.9,y),r.add(g),e.box(r,.16,.1,3.65,.12,.94,y,"#fafaff",.02),e.box(r,.16,.1,3.65,.12,2.87,y,"#fafaff",.02)}for(let y=1.5;y<11;y+=3){const g=new rn(e.geometry("partition",()=>new xa(2.85,2.35,.045)),m);g.position.set(y,1.3,12.2),r.add(g),e.box(r,.055,2.5,.06,y-1.46,1.3,12.2,"#c8c0d2",.01),e.box(r,2.9,.05,.07,y,2.55,12.2,"#cec8d6",.01)}r.userData.extraMaterials=[m];const x=N2,S=ix,M=["anto","atlas","vera","bruno","iris","leo"],E=["#b58aee","#eeae67","#74b9a7","#799acb","#e995b9","#d7bb73"];S.forEach(([y,g],O)=>{const L=E[O];e.box(r,3.7,.15,1.65,y,1.3,g,"#f7eddf",.1);for(const V of[-1.5,1.5])for(const B of[-.58,.58])e.box(r,.12,1.2,.12,y+V,.66,g+B,"#cbbba8",.025);e.box(r,1.4,.88,.1,y,2.03,g-.28,"#454554",.055),e.box(r,.15,.25,.12,y,1.5,g-.28,"#5a5867",.025),e.box(r,.7,.05,.36,y,1.4,g-.22,"#a9a6b5",.035);const N=new rn(e.geometry("display",()=>new mr(1.27,.72)),new vo({map:P2(e,M[O],L)}));N.position.set(y,2.04,g-.219),r.add(N),r.userData.extraMaterials.push(N.material),e.box(r,1.08,.045,.4,y,1.408,g+.47,"#e0dbe7",.025);for(let V=0;V<3;V++)e.box(r,.92,.015,.025,y,1.436,g+.36+V*.11,"#a4a0af",.006);e.box(r,.22,.05,.35,y+.83,1.43,g+.46,"#c8c1d4",.06),e.cylinder(r,.13,.105,.26,y+1.36,1.5,g+.3,L),e.cylinder(r,.105,.105,.012,y+1.36,1.638,g+.3,"#6c5646");const F=new rn(e.geometry("handle",()=>new zl(.09,.025,7,12)),e.material(L));F.position.set(y+1.5,1.51,g+.3),F.rotation.y=Math.PI/2,r.add(F),e.box(r,.45,.04,.6,y-1.25,1.43,g+.3,"#c9b5e6",.02);const I=g+sx;e.cylinder(r,.07,.07,.65,y,.47,I,"#73707d"),e.box(r,.95,.15,.85,y,.8,I,L,.12),e.box(r,.95,.85,.15,y,1.19,I+.38,L,.12),e.box(r,1.1,.065,.12,y,.19,I,"#96909e",.03),e.box(r,.12,.065,1.1,y,.19,I,"#96909e",.03);for(const V of[-.45,.45])for(const B of[-.45,.45])e.sphere(r,.075,y+V,.12,I+B,"#625e6c")}),e.box(r,6.7,.18,2.4,6.5,1.28,16.5,"#efe1c9",.25);for(const y of[4,9])e.box(r,.2,1.2,1.8,y,.64,16.5,"#c2b39f",.03);for(const y of[4.2,6.5,8.8])e.box(r,1,.16,.8,y,.75,18.7,"#9f8db9",.12),e.box(r,1,.75,.15,y,1.1,19.05,"#a996c4",.1),e.cylinder(r,.08,.08,.65,y,.38,18.7,"#80788c");e.box(r,.9,.05,.65,5.5,1.405,16.5,"#84679f",.04),e.box(r,.65,.05,.8,7.1,1.405,16.4,"#fff8ee",.03);for(const y of[3.9,8.8])e.cylinder(r,.12,.09,.23,y,1.52,16.1,"#bca5d7");e.box(r,3.3,.5,1,19,.45,8.5,"#83ab95",.2),e.box(r,3.3,.82,.22,19,.87,8.92,"#93b59f",.16),e.box(r,.22,.67,1,17.4,.78,8.5,"#92b49d",.12),e.box(r,.22,.67,1,20.6,.78,8.5,"#92b49d",.12),e.box(r,1.6,.13,.8,19,.52,10.4,"#e2d3ba",.1);for(const y of[-.6,.6])e.box(r,.09,.48,.09,19+y,.24,10.4,"#b0a18c",.02);e.box(r,.7,2.4,3.2,22.8,1.27,14.8,"#e2d6c4",.05);for(let y=0;y<4;y++){e.box(r,.8,.07,3.2,22.8,.35+y*.57,14.8,"#cbbda9",.02);for(let g=0;g<5;g++)e.box(r,.35,.38,.16,22.7,.57+y*.57,13.5+g*.42,["#9f86bd","#cfaa8a","#8baea0","#d4b7d2"][g%4],.01)}function w(y,g,O=!1){const L=O?1.55:1;e.cylinder(r,.39,.29,.62,y,.39,g,"#eee5d9"),e.cylinder(r,.35,.35,.035,y,.72,g,"#746053");for(let N=0;N<7;N++){const F=N*2.4,I=new fi;I.position.set(y,.7,g),I.rotation.y=F,r.add(I);const V=e.sphere(I,.23,0,L*.5,.18,["#669c7a","#84ad8d","#4c8267"][N%3]);V.scale.set(.58,L*1.9,1.05),V.rotation.x=.35+N%3*.22,V.position.y=L*.42}}ax.forEach(([y,g],O)=>w(y,g,O%2===0));for(let y=1;y<24;y+=1.4)e.cylinder(r,.16,.16,.07,y,-.01,20.35,"#d5c2aa");return{floor:s,homes:x,meeting:U2}}function I2(r,e,i){const s=new fi,l=new fi;s.add(l);const c=["#edbd88","#ecc49a","#e4b38a","#ce9d73","#f0c8a3","#d9ad85"][i],h=[new fi,new fi];h.forEach((F,I)=>{F.position.set(I?.205:-.205,.73,0),l.add(F),r.box(F,.34,.57,.39,0,-.285,0,"#454655",.055),r.box(F,.36,.18,.54,0,-.59,.065,"#4a4958",.045)}),r.box(l,.8,.19,.44,0,.78,0,"#4b485c",.035),r.box(l,.85,.7,.47,0,1.19,0,e.color,.105),r.box(l,.025,.6,.015,0,1.2,.244,"#ffffff",.004);const d=r.box(l,.2,.15,.02,-.19,1.24,.25,"#f7effc",.02);d.rotation.z=.08,r.box(l,.11,.028,.025,-.19,1.25,.266,i%2?"#7c6c91":"#a89bbc",.004);const p=[new fi,new fi];p.forEach((F,I)=>{const V=I?1:-1;F.position.set(V*.53,1.42,0),l.add(F),r.cylinder(F,.15,.13,.48,0,-.23,0,e.color),r.sphere(F,.15,0,-.03,0,e.color);const B=new rn(r.geometry("claw",()=>new zl(.115,.055,8,15,Math.PI*1.62)),r.material(c,.3));B.position.set(0,-.58,.015),B.rotation.z=I?.2:2.9,B.castShadow=!0,F.add(B),r.cylinder(F,.075,.075,.14,0,-.49,0,c)});const m=new fi;m.position.y=1.79,l.add(m),r.cylinder(m,.31,.31,.48,0,0,0,c),r.cylinder(m,.13,.13,.105,0,.29,0,c),r.cylinder(l,.14,.14,.18,0,1.53,0,c);const _=document.createElement("canvas");_.width=256,_.height=192;const x=_.getContext("2d");x.fillStyle="#403841",x.beginPath(),x.ellipse(83,77,9,13,0,0,Math.PI*2),x.ellipse(173,77,9,13,0,0,Math.PI*2),x.fill(),x.strokeStyle="#765344",x.lineWidth=6,x.lineCap="round",x.beginPath(),x.arc(128,111,34,.17,Math.PI-.17),x.stroke(),x.fillStyle="#f7ddbf",x.beginPath(),x.arc(80,72,2.5,0,Math.PI*2),x.arc(170,72,2.5,0,Math.PI*2),x.fill(),(i===1||i===3)&&(x.strokeStyle="#423e4a",x.lineWidth=6,x.strokeRect(53,53,61,44),x.strokeRect(142,53,61,44),x.beginPath(),x.moveTo(114,68),x.lineTo(142,68),x.stroke());const S=new Yv(_);S.colorSpace=ti,r.textures.push(S);const M=new vo({map:S,transparent:!0,depthWrite:!1,side:Za}),E=new rn(r.geometry("face",()=>new mr(.54,.41)),M);E.position.set(0,-.005,.316),m.add(E),s.userData.extraMaterials=[M];const w=["#433b50","#715441","#493e46","#564741","#ae758f","#866244"][i];r.cylinder(m,.325,.325,.16,0,.2,-.015,w);const y=r.sphere(m,.3,0,.27,-.035,w);if(y.scale.y=.48,i===0||i===2||i===4){r.box(m,.12,.37,.26,-.28,.06,-.08,w,.06),r.box(m,.12,.37,.26,.28,.06,-.08,w,.06);const F=r.sphere(m,.21,0,.08,-.34,w);F.scale.y=1.3}else{const F=r.box(m,.46,.12,.22,-.03,.21,.2,w,.045);F.rotation.z=.1}const g=new vo({color:"#8f63d4",transparent:!0,opacity:.82}),O=new rn(r.geometry("selection",()=>new zl(.65,.045,8,40)),g);O.rotation.x=-Math.PI/2,O.position.y=.08,s.add(O);const L=new wp({color:"#8fbea5",emissive:"#8fbea5",emissiveIntensity:.25,roughness:.3}),N=new rn(r.geometry("status-orb",()=>new Pu(.09,12,8)),L);return N.position.set(.49,2.18,0),s.add(N),s.userData.extraMaterials.push(g,L),s.scale.setScalar(1.08),{root:s,body:l,head:m,arms:p,legs:h,ring:O,orb:N,agent:e}}const kt=([r,e])=>`${r},${e}`,da=r=>[r[0],r[1]],yv=([r,e])=>[[r+1,e],[r,e+1],[r-1,e],[r,e-1]];class B2{constructor(e=24,i=20){Hi(this,"width");Hi(this,"height");Hi(this,"walls",new Set);Hi(this,"occupants",new Map);Hi(this,"positions",new Map);Hi(this,"reservations",new Map);Hi(this,"steps",new Map);if(!Number.isInteger(e)||!Number.isInteger(i)||e<1||i<1||e>256||i>256)throw new RangeError("La cuadrícula debe medir entre 1 y 256 celdas por lado.");this.width=e,this.height=i}get blockedCount(){return this.walls.size}inBounds(e){return Number.isInteger(e[0])&&Number.isInteger(e[1])&&e[0]>=0&&e[0]<this.width&&e[1]>=0&&e[1]<this.height}isBlocked(e){return!this.inBounds(e)||this.walls.has(kt(e))}blockRect(e,i,s,l){if(![e,i,s,l].every(Number.isFinite)||s<=0||l<=0)throw new RangeError("El obstáculo debe ser un rectángulo finito de tamaño positivo.");const c=[];for(let h=Math.max(0,Math.floor(e));h<Math.min(this.width,Math.ceil(e+s));h++)for(let d=Math.max(0,Math.floor(i));d<Math.min(this.height,Math.ceil(i+l));d++){const p=kt([h,d]);if(this.occupants.has(p)||this.reservations.has(p))throw new Error("El obstáculo invadiría un personaje.");c.push(p)}for(const h of c)this.walls.add(h)}isFree(e,i){if(this.isBlocked(e))return!1;for(let s=-1;s<=1;s++)for(let l=-1;l<=1;l++){const c=kt([e[0]+s,e[1]+l]),h=this.occupants.get(c),d=this.reservations.get(c);if(h!==void 0&&h!==i||d!==void 0&&d!==i)return!1}return!0}register(e,i){if(!e||!this.isFree(i,e))return!1;const s=this.positions.get(e);return s?kt(s)===kt(i):(this.positions.set(e,da(i)),this.occupants.set(kt(i),e),!0)}position(e){const i=this.positions.get(e);return i?da(i):void 0}path(e,i){const s=this.positions.get(e);if(!s||!this.isFree(i,e))return[];const l=kt(s),c=kt(i);if(l===c)return[];const h=[da(s)],d=new Map([[l,null]]);for(let _=0;_<h.length;_++){const x=h[_];if(kt(x)===c)break;for(const S of yv(x)){const M=kt(S);d.has(M)||!this.isFree(S,e)||(d.set(M,x),h.push(S))}}if(!d.has(c))return[];const p=[];let m=da(i);for(;m&&kt(m)!==l;)p.unshift(da(m)),m=d.get(kt(m))??null;return p}reserveNext(e,i){const s=this.positions.get(e);if(!s||Math.abs(s[0]-i[0])+Math.abs(s[1]-i[1])!==1||!this.isFree(i,e))return!1;const l=this.steps.get(e);return l?kt(l)===kt(i):(this.steps.set(e,da(i)),this.reservations.set(kt(i),e),!0)}arrive(e){const i=this.steps.get(e),s=this.positions.get(e);if(s)return i?(this.occupants.delete(kt(s)),this.occupants.set(kt(i),e),this.positions.set(e,da(i)),this.reservations.delete(kt(i)),this.steps.delete(e),da(i)):da(s)}cancel(e){const i=this.steps.get(e);i&&this.reservations.delete(kt(i)),this.steps.delete(e)}remove(e){this.cancel(e);const i=this.positions.get(e);i&&this.occupants.delete(kt(i)),this.positions.delete(e)}nearestFree(e,i){if(!e.every(Number.isFinite))return null;const s=[Math.max(0,Math.min(this.width-1,Math.round(e[0]))),Math.max(0,Math.min(this.height-1,Math.round(e[1])))],l=[s],c=new Set([kt(s)]);for(let h=0;h<l.length;h++){const d=l[h];if(this.isFree(d,i))return da(d);for(const p of yv(d)){const m=kt(p);this.inBounds(p)&&!c.has(m)&&(c.add(m),l.push(p))}}return null}}class F2{constructor(){Hi(this,"claims",new Map)}claim(e,i){if(!e||i.length===0)return!1;const s=new Set;for(const[l,c]of i){if(!Number.isInteger(l)||!Number.isInteger(c))return!1;for(let h=-1;h<=1;h++)for(let d=-1;d<=1;d++)s.add(kt([l+h,c+d]))}for(const[l,c]of this.claims)if(l!==e){for(const h of s)if(c.has(h))return!1}return this.claims.set(e,s),!0}release(e){this.claims.delete(e)}}const Qi=r=>["En ejecución","En corrección"].includes(r),H2=r=>r==="Fallido"?"#d66a76":["Espera aprobación","Requiere información","Espera revisión"].includes(r)?"#d8a54d":Qi(r)?"#56aa8b":r==="Interrumpido"||r==="Cancelado"?"#a79da8":"#9d87c3",G2=r=>Qi(r)?"Trabajando":r,yu={background:"#fffc",border:"1px solid #e7dff0",borderRadius:7,padding:"6px 9px",fontSize:9,color:"#816694",boxShadow:"0 2px 8px #58426709",cursor:"pointer"};function V2(r){const e=we.useRef(null),i=we.useRef(null),s=we.useRef(r),l=we.useRef(()=>{}),[c,h]=we.useState("Selecciona un agente y haz clic en una zona libre para moverlo."),[d,p]=we.useState("");s.current=r,we.useEffect(()=>{const x=i.current,S=e.current;let M;const E=navigator.deviceMemory,w=navigator.hardwareConcurrency>0&&navigator.hardwareConcurrency<=4||E!==void 0&&E<=4;try{M=new m2({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{p("Tu navegador no pudo iniciar WebGL. Prueba Chrome o Edge con aceleración gráfica; puedes seleccionar el equipo desde la lista inferior.");return}p(""),S.dataset.rendererReady="false",S.dataset.sceneVersion="3d",M.setPixelRatio(Math.min(window.devicePixelRatio,w||s.current.reduced?1.15:1.6)),M.shadowMap.enabled=!0,M.shadowMap.type=Rv,M.shadowMap.autoUpdate=!1,M.shadowMap.needsUpdate=!0,M.outputColorSpace=ti,M.toneMapping=wv,M.toneMappingExposure=1.22,M.setClearColor("#f5f2f8",0),x.appendChild(M.domElement),M.domElement.setAttribute("aria-label","Oficina 3D interactiva. Arrastra para girar, rueda para acercar, clic en agente para seleccionar o en suelo para mover.");const y=new _b,g=new O2,O=new B2(24,20),L=new F2,N=new fi;N.position.set(-12,0,-10),y.add(N);const F=new Rb("#fff5e9","#a4a2bc",2.7);y.add(F);const I=new j_("#fff6df",3.2);I.position.set(-8,24,14),I.castShadow=!0,I.shadow.mapSize.set(1024,1024),I.shadow.camera.left=-20,I.shadow.camera.right=20,I.shadow.camera.top=20,I.shadow.camera.bottom=-20,I.shadow.camera.near=.1,I.shadow.camera.far=65,I.shadow.normalBias=.035,I.shadow.bias=-1e-4,I.shadow.radius=4,y.add(I);const V=new j_("#d9d9ff",1.6);V.position.set(16,12,-10),y.add(V);const B=new rn(new mr(140,140),new bb({color:"#9b87ae",opacity:.14}));B.rotation.x=-Math.PI/2,B.position.y=-.5,B.receiveShadow=!0,y.add(B);const{homes:U,meeting:C}=z2(N,g,O),H=new Dp(-25,25,14,-14,.1,180);H.position.set(29,28,35);const $=new _2(H,M.domElement);$.target.set(0,.45,.2),$.enableDamping=!0,$.dampingFactor=.075,$.enablePan=!0,$.screenSpacePanning=!0,$.minPolarAngle=Math.PI*.15,$.maxPolarAngle=Math.PI*.44,$.minZoom=.7,$.maxZoom=3,$.rotateSpeed=.55,$.zoomSpeed=.75,$.panSpeed=.7,$.mouseButtons={LEFT:Wa.ROTATE,MIDDLE:Wa.DOLLY,RIGHT:Wa.PAN},$.touches={ONE:Rs.ROTATE,TWO:Rs.DOLLY_PAN},$.update(),$.saveState();const oe=document.createElement("div");oe.style.cssText="position:absolute;inset:0;overflow:hidden;pointer-events:none;",x.appendChild(oe);const _e=s.current.agents.map((k,K)=>{const fe=I2(g,k,K),ue=O.nearestFree(U[K],k.id)||U[K];O.register(k.id,ue),fe.root.position.set(ue[0]+.5,.14,ue[1]+.5),fe.root.rotation.y=.7,N.add(fe.root),fe.root.traverse(Te=>{Te instanceof rn&&(Te.userData.agentId=k.id)}),fe.ring.userData.ignorePick=!0;const Le=document.createElement("button");Le.dataset.agentId=k.id,Le.dataset.agentLabel="true",Le.setAttribute("aria-label",`${k.name} · ${k.role} · Disponible`),Le.style.cssText="position:absolute;left:0;top:0;transform:translate(-50%,-100%);display:flex;align-items:center;gap:5px;white-space:nowrap;border:1px solid #e9dff2;background:#fffffff0;border-radius:7px;padding:4px 7px;box-shadow:0 2px 8px #56406c12;font:600 9px system-ui;color:#6a507e;cursor:pointer;pointer-events:auto;";const Ue=document.createElement("i");Ue.style.cssText=`width:5px;height:5px;flex-shrink:0;border-radius:50%;background:${k.color}`;const q=document.createElement("span");q.textContent=k.name;const ke=document.createElement("small");return ke.style.cssText="font-weight:400;font-size:7px;color:#9a85aa",ke.textContent="Disponible",Le.append(Ue,q,ke),Le.addEventListener("click",Te=>{Te.stopPropagation(),s.current.onSelect(k.id)}),oe.appendChild(Le),{...fe,cell:ue,path:[],step:null,target:null,pending:null,label:Le,status:"Disponible",waveUntil:0,walkPhase:K,wait:0,home:U[K],meeting:C[K]}}),ge=new fi;N.add(ge);const G=new vo({color:"#a580d4",transparent:!0,opacity:.48}),ne=new Cp(.09,.14,12);function Z(k){for(;ge.children.length;)ge.remove(ge.children[0]);if(k)for(const K of k.path){const fe=new rn(ne,G);fe.rotation.x=-Math.PI/2,fe.position.set(K[0]+.5,.153,K[1]+.5),fe.userData.ignorePick=!0,ge.add(fe)}}function Me(k){h(k)}function P(k,K,fe=!1){if(fe&&Qi(k.status)){Me(`${k.agent.name} está trabajando. El movimiento manual estará disponible cuando termine.`);return}if(O.isBlocked(K)){fe&&Me("Esa zona contiene un mueble o una división. Elige suelo libre.");return}if(k.step){k.pending=K;return}if(!O.isFree(K,k.agent.id)){L.release(k.agent.id),k.path=[],k.target=K,k.wait=0,s.current.selected===k.agent.id&&Z(k),fe&&Me(`${k.agent.name} espera a que se libere el destino. Puedes elegir otro punto para cambiar la orden.`);return}const ue=O.path(k.agent.id,K);if(ue.length===0&&kt(K)!==kt(k.cell)){L.release(k.agent.id),k.path=[],k.target=K,k.wait=0,fe&&Me(`${k.agent.name} espera a que quede libre el paso. Se moverá al destino cuando haya una ruta segura.`);return}if(ue.length&&!L.claim(k.agent.id,[k.cell,...ue])){L.release(k.agent.id),k.path=[],k.target=K,k.wait=0,fe&&Me(`${k.agent.name} espera su turno en el pasillo compartido. La orden de movimiento está conservada.`);return}ue.length||L.release(k.agent.id),k.path=ue,k.target=K,k.wait=0,s.current.reduced&&ue.length&&Me("Movimiento reducido: traslado sin animación continua; las reservas siguen evitando colisiones."),s.current.selected===k.agent.id&&Z(k),fe&&Me(ue.length?`${k.agent.name} se dirige al punto elegido. Esto solo mueve al personaje; las tareas se gestionan en el tablero.`:`${k.agent.name} ya está en ese lugar.`)}l.current=k=>{const K=_e.find(fe=>fe.agent.id===s.current.selected);if(K){if(k==="stop"){K.pending=null,K.target=K.step||K.cell,K.path=K.step?[K.step]:[],K.waveUntil=0,s.current.selected===K.agent.id&&Z(K),Me(`${K.agent.name} detiene el desplazamiento al alcanzar una posición segura. Las tareas de IA se gestionan en el tablero.`);return}if(k==="wave"){if(Qi(K.status)){Me(`${K.agent.name} está trabajando. Puedes saludar cuando termine.`);return}K.root.rotation.y=.7,K.waveUntil=performance.now()/1e3+2.8,Me(`${K.agent.name} te saluda. Es un gesto visual, no una respuesta de IA.`);return}P(K,k==="desk"?K.home:K.meeting,!0)}};const ae=new Nb,Ee=new gt;let Re={x:0,y:0,time:0};const ee=k=>{k.button===0&&(Re={x:k.clientX,y:k.clientY,time:performance.now()})},ye=k=>{if(k.button!==0||Math.hypot(k.clientX-Re.x,k.clientY-Re.y)>5||performance.now()-Re.time>700)return;const K=M.domElement.getBoundingClientRect();Ee.set((k.clientX-K.left)/K.width*2-1,-(k.clientY-K.top)/K.height*2+1),ae.setFromCamera(Ee,H);const ue=ae.intersectObjects(N.children,!0).filter(q=>{const ke=q.object,Te=ke.material;return!ke.userData.ignorePick&&!(Te!=null&&Te.transparent&&Te.opacity<.5)})[0];if(!ue)return;if(ue.object.userData.agentId){s.current.onSelect(ue.object.userData.agentId);return}const Le=_e.find(q=>q.agent.id===s.current.selected);if(!Le)return;if(!ue.object.userData.walkable){Me("Selecciona un personaje o haz clic en una zona libre del suelo.");return}const Ue=N.worldToLocal(ue.point.clone());P(Le,[Math.floor(Ue.x),Math.floor(Ue.z)],!0)};M.domElement.addEventListener("pointerdown",ee),M.domElement.addEventListener("pointerup",ye);const Se=k=>{k.preventDefault(),p("Se perdió el contexto gráfico. Recarga la vista de oficina para recuperar la escena; tus datos siguen guardados.")};M.domElement.addEventListener("webglcontextlost",Se);let Ne=1,Pe=1,dt=s.current.reset,nt=s.current.zoom,et=s.current.selected,zt=0,Ze=0,X=!1,ln=performance.now()/1e3,xt=0,ot=!0;function We(){Ne=Math.max(1,x.clientWidth),Pe=Math.max(1,x.clientHeight);const k=Ne/Pe,K=Math.max(21.5,38/k);H.left=-K*k/2,H.right=K*k/2,H.top=K/2,H.bottom=-K/2,H.updateProjectionMatrix(),M.setSize(Ne,Pe)}const Lt=new ResizeObserver(We);Lt.observe(x),We();const Xe=new ie,z=new ie;function T(k){var Ue;if(!ot)return;zt=requestAnimationFrame(T);const K=k/1e3,fe=s.current;if(document.hidden){ln=K;return}if((w||fe.reduced)&&k-xt<1e3/30-1)return;xt=k;const ue=Math.min(.5,Math.max(0,K-ln));ln=K,$.enableDamping=!fe.reduced,fe.reset!==dt&&($.reset(),H.zoom=fe.zoom,H.updateProjectionMatrix(),dt=fe.reset,nt=fe.zoom),fe.zoom!==nt&&(H.zoom=fe.zoom,H.updateProjectionMatrix(),nt=fe.zoom),et!==fe.selected&&(et=fe.selected,Z(_e.find(q=>q.agent.id===fe.selected)));for(const q of _e){const ke=fe.states[q.agent.id]||"Disponible";if(ke!==q.status){q.status=ke;const ve=H2(ke);q.orb.material.color.set(ve),q.orb.material.emissive.set(ve),q.label.firstChild.style.background=ve,q.label.lastChild.textContent=G2(ke),q.label.setAttribute("aria-label",`${q.agent.name} · ${q.agent.role} · ${ke}`),Qi(ke)&&P(q,q.home)}const Te=q.agent.id===fe.selected;if(q.ring.visible=Te,q.label.style.borderColor=Te?"#bb93e2":"#e9dff2",q.label.style.zIndex=Te?"4":"2",q.wait+=ue,!q.step&&q.pending){const ve=q.pending;q.pending=null,P(q,ve)}if(!q.step&&!q.path.length&&q.target&&kt(q.cell)!==kt(q.target)&&q.wait>.5){const ve=O.path(q.agent.id,q.target);ve.length&&L.claim(q.agent.id,[q.cell,...ve])&&(q.path=ve,q.wait=0,Te&&Z(q))}let Ve=fe.reduced?Number.POSITIVE_INFINITY:ue*2.2,tt=0,Je=0;for(;Ve>1e-5&&Je++<64;){if(!q.step){if(!q.path.length)break;const yn=q.path[0];if(O.reserveNext(q.agent.id,yn))q.step=yn,q.wait=0;else{if(q.wait>1&&q.target){const un=O.path(q.agent.id,q.target);q.path=un.length&&L.claim(q.agent.id,[q.cell,...un])?un:[],q.path.length||L.release(q.agent.id),q.wait=0,Te&&Z(q)}break}}const ve=q.step,Fe=ve[0]+.5-q.root.position.x,Be=ve[1]+.5-q.root.position.z,lt=Math.hypot(Fe,Be),Pt=Math.min(lt,Ve),cn=Math.atan2(Fe,Be),Rt=Math.atan2(Math.sin(cn-q.root.rotation.y),Math.cos(cn-q.root.rotation.y));if(q.root.rotation.y+=Rt*Math.min(1,ue*12),lt<=Pt+1e-4?(q.root.position.x=ve[0]+.5,q.root.position.z=ve[1]+.5,q.cell=O.arrive(q.agent.id),q.step=null,q.path.shift(),Te&&Z(q)):(q.root.position.x+=Fe/lt*Pt,q.root.position.z+=Be/lt*Pt),tt+=Pt,Ve-=Pt,q.step)break;if(q.pending){const yn=q.pending;q.pending=null,P(q,yn)}}!q.step&&!q.path.length&&q.target&&kt(q.cell)===kt(q.target)&&L.release(q.agent.id);const ze=tt>1e-5||!!q.step;q.walkPhase+=ze?tt*4.5:ue*1.2;const mt=q.walkPhase,at=Qi(q.status),Ot=K<q.waveUntil&&!at&&!ze,Y=ze&&!fe.reduced?Math.sin(mt)*.53:0;if(q.legs[0].rotation.x=Y,q.legs[1].rotation.x=-Y,q.body.position.y=ze&&!fe.reduced?Math.abs(Math.sin(mt))*.045:at&&!fe.reduced?Math.sin(K*5)*.008:0,q.arms[0].rotation.x=at&&!ze?-.92+(fe.reduced?0:Math.sin(K*9)*.08):-Y*.7,q.arms[1].rotation.x=at&&!ze?-.88+(fe.reduced?0:Math.sin(K*9+1)*.08):Y*.7,q.arms[0].rotation.z=.1,q.arms[1].rotation.z=Ot?-2.4+(fe.reduced?0:Math.sin(K*11)*.23):-.1,q.head.rotation.y=!ze&&!fe.reduced?Math.sin(K*.7+q.walkPhase)*.055:0,q.head.rotation.z=q.status==="Fallido"?.13:0,q.orb.scale.setScalar(at&&!fe.reduced?1+Math.sin(K*4)*.15:1),!ze){const ve=at?Math.PI:Math.atan2(H.position.x-(q.root.position.x-12),H.position.z-(q.root.position.z-10));q.root.rotation.y+=Math.atan2(Math.sin(ve-q.root.rotation.y),Math.cos(ve-q.root.rotation.y))*Math.min(1,ue*6)}q.label.dataset.walking=String(ze),q.label.dataset.waiting=String(!ze&&!!q.target&&kt(q.cell)!==kt(q.target)),q.label.dataset.remaining=String(q.path.length),q.label.dataset.target=((Ue=q.target)==null?void 0:Ue.join(","))||"",q.label.dataset.gesture=Ot?"saludando":"ninguno",q.label.dataset.worldX=q.root.position.x.toFixed(3),q.label.dataset.worldZ=q.root.position.z.toFixed(3),q.label.dataset.agentState=ke,q.root.getWorldPosition(z),Xe.copy(z).add(new ie(0,2.75,0)).project(H);const Ie=(Xe.x*.5+.5)*Ne,pe=(-Xe.y*.5+.5)*Pe;q.label.style.left=`${Ie}px`,q.label.style.top=`${pe}px`,q.label.style.display=Xe.z<-1||Xe.z>1||Ie<0||Ie>Ne||pe<0||pe>Pe?"none":"flex"}$.update();const Le=_e.some(q=>q.step||q.path.length||K<q.waveUntil||Qi(q.status));K>=Ze&&(Le||X)&&(M.shadowMap.needsUpdate=!0,Ze=K+.12),X=Le,M.render(y,H),S.dataset.rendererReady!=="true"&&(S.dataset.rendererReady="true")}return zt=requestAnimationFrame(T),()=>{ot=!1,cancelAnimationFrame(zt),Lt.disconnect(),l.current=()=>{},M.domElement.removeEventListener("pointerdown",ee),M.domElement.removeEventListener("pointerup",ye),M.domElement.removeEventListener("webglcontextlost",Se),$.dispose();for(const k of _e)for(const K of k.root.userData.extraMaterials||[])K.dispose();for(const k of N.userData.extraMaterials||[])k.dispose();ne.dispose(),G.dispose(),B.geometry.dispose(),B.material.dispose(),g.dispose(),M.dispose(),M.forceContextLoss(),oe.remove(),M.domElement.remove(),S.dataset.rendererReady="false"}},[]);const m=r.agents.find(x=>x.id===r.selected),_=r.states[r.selected]||"Disponible";return v.jsxs("div",{ref:e,className:"office-canvas","data-renderer-ready":"false","aria-label":"Oficina 3D interactiva de seis agentes",children:[v.jsx("div",{ref:i,style:{position:"absolute",inset:0}}),d?v.jsx("div",{role:"alert",style:{position:"absolute",inset:"30% 8% auto",background:"#fff9",padding:18,borderRadius:12,fontSize:12,color:"#82668f",lineHeight:1.7},children:d}):v.jsxs("div",{className:"scene-3d-actions",style:{position:"absolute",top:61,right:12,zIndex:5,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:5,pointerEvents:"auto"},children:[v.jsxs("div",{style:{fontSize:8,color:"#9a81ad",background:"#ffffffc9",borderRadius:5,padding:"4px 7px"},children:[m==null?void 0:m.name," · ",_]}),v.jsxs("div",{style:{display:"flex",gap:4},children:[v.jsx("button",{style:yu,onClick:()=>l.current("desk"),title:"Mover visualmente al escritorio",disabled:Qi(_),children:"Escritorio"}),v.jsx("button",{style:yu,onClick:()=>l.current("meeting"),title:"Mover visualmente a la sala de reunión",disabled:Qi(_),children:"Reunión"}),v.jsx("button",{style:yu,onClick:()=>l.current("wave"),title:"Animación visual de saludo",disabled:Qi(_),children:"Saludar"}),v.jsx("button",{style:yu,onClick:()=>l.current("stop"),title:"Detener desplazamiento visual",disabled:Qi(_),children:"Detener"})]})]}),v.jsx("p",{className:"scene-3d-feedback",role:"status","aria-live":"polite",style:{position:"absolute",left:12,right:170,bottom:47,fontSize:8,lineHeight:1.5,color:"#96809f",padding:"5px 7px",margin:0,borderRadius:5,background:"#fbf8fdca",pointerEvents:"none",maxWidth:430},children:c})]})}const Su={gemini:{name:"Google Gemini",secret:"STUDIO_GEMINI_API_KEY",model:"gemini-2.5-flash-lite",link:"https://aistudio.google.com/apikey"},groq:{name:"Groq",secret:"STUDIO_GROQ_API_KEY",model:"openai/gpt-oss-20b",link:"https://console.groq.com/keys"}};async function ka(r,e,i){const s=await Bl("/api"+r,{method:i||(e?"POST":"GET"),headers:{"Content-Type":"application/json"},body:e?JSON.stringify(e):void 0});return Il(s)}function j2(r){const[e,i]=we.useState(r.provider),[s,l]=we.useState(r.agents),[c,h]=we.useState(!1),[d,p]=we.useState(null),[m,_]=we.useState(""),[x,S]=we.useState(""),[M,E]=we.useState(),[w,y]=we.useState();we.useEffect(()=>{let B=!0;return _(""),ka("/credentials/"+e).then(U=>{B&&E(U)}).catch(()=>{B&&E(void 0)}),()=>{B=!1}},[e]),we.useEffect(()=>{i(r.provider),l(r.agents)},[r.provider,r.agents]);const g=Su[e]||Su.gemini,O=e!==r.provider&&(w==null?void 0:w.provider)===e?w:r.status,L=O.provider===e;function N(B){S(""),_(""),E(void 0),y(void 0),i(B),p(null),l(U=>U.map(C=>({...C,model:Su[B].model})))}async function F(B){h(!0),p(null),r.onError("");try{if(B==="check"){const H=await ka("/models?provider="+e);y(H),e===r.provider&&r.onStatus(H),r.onNotice(H.connected?"Catálogo actualizado. Tus cambios siguen sin guardar.":H.error||"Comprueba la clave y tu conexión.");return}if(B==="test"){const H=await ka("/connect",{provider:e,agent:"anto",agents:s});r.onSaved(H.settings),r.onStatus(H.status,!0),y(H.status),l(H.settings.agents),p(H.proof),r.onNotice("Listo. Configuración guardada; ya puedes conversar.");return}await ka("/settings",{provider:e,agents:s,ollama_url:r.ollama,openai_url:r.openai},"PUT");const U=await ka("/settings");r.onSaved(U),l(U.agents);const C=await ka("/models");y(C),r.onStatus(C,!0),r.onNotice(C.connected?"Configuración guardada. La API responde.":"Configuración guardada. "+(C.error||"Comprueba la clave y tu conexión."))}catch(U){r.onError(U.message)}finally{h(!1)}}async function I(){S(""),h(!0),p(null),r.onError("");try{const B=await ka("/credentials",{provider:e,api_key:m});_(""),E(B.credential),r.onSaved(B.settings),r.onStatus(B.status,!0),y(B.status),l(B.settings.agents),p(B.proof),r.onNotice("Clave guardada en el servidor. Ya puedes conversar.")}catch(B){S(B.message)}finally{h(!1)}}async function V(){h(!0),p(null),r.onError("");try{E(await ka("/credentials/"+e,void 0,"DELETE")),_(""),y(void 0),r.onStatus(await ka("/models"),!0),r.onNotice("Clave quitada de la aplicación. Un secreto de Codespaces, si existe, sigue disponible.")}catch(B){r.onError(B.message)}finally{h(!1)}}return v.jsx("section",{className:"content-card settings-card",children:v.jsxs("fieldset",{disabled:c,style:{border:0,padding:0,margin:0,minWidth:0},children:[v.jsxs("div",{className:"section-title",children:[v.jsxs("div",{children:[v.jsx("div",{className:"eyebrow",children:"IA EN LA NUBE"}),v.jsx("h2",{children:"APIs y modelos"})]}),v.jsx("span",{className:"pill",children:"Sin modelos locales"})]}),v.jsx("div",{className:"provider-options",role:"group","aria-label":"Proveedor de IA",children:["gemini","groq"].map(B=>v.jsxs("button",{className:"provider-option "+(e===B?"selected":""),onClick:()=>N(B),children:[v.jsx("strong",{children:Su[B].name}),v.jsx("small",{children:"API en la nube · cuota gratuita según tu cuenta"})]},B))}),v.jsxs("div",{className:"integration-note",children:[v.jsxs("h3",{children:["Tu clave de ",g.name]}),v.jsx("p",{children:"Pega tu clave aquí y pulsa Guardar clave y conectar. Se comprobará antes de reemplazar una clave que ya funciona."}),v.jsxs("label",{children:["Clave API de ",g.name,v.jsx("input",{type:"password","aria-label":"Clave API",value:m,onChange:B=>{_(B.target.value),S("")},autoComplete:"new-password",autoCapitalize:"none",spellCheck:!1,onKeyDown:B=>{B.key==="Enter"&&m.trim()&&!c&&(B.preventDefault(),I())},maxLength:4096,placeholder:M!=null&&M.configured?"Ya hay una clave configurada. Pega otra para cambiarla.":"Pega tu clave de API"})]}),v.jsxs("div",{className:"api-config-row",children:[v.jsx("button",{className:"button primary",disabled:!m.trim(),onClick:I,children:c?"Comprobando…":"Guardar clave y conectar"}),(M==null?void 0:M.saved_in_app)&&v.jsx("button",{className:"button secondary",onClick:V,children:"Eliminar clave guardada"})]}),x&&v.jsx("p",{className:"chat-error",role:"alert",children:x}),v.jsxs("p",{children:[M!=null&&M.saved_in_app?"Tienes una clave guardada en esta aplicación.":M!=null&&M.configured?"Se está usando tu secreto de Codespaces.":"Todavía no hay una clave guardada."," El valor queda en un archivo privado del servidor y no vuelve a mostrarse. No se incluye en Git ni en las entregas ZIP."]}),v.jsx("a",{href:g.link,target:"_blank",rel:"noreferrer",children:"Obtener una clave en el sitio oficial"})]}),v.jsxs("details",{className:"integration-note",children:[v.jsx("summary",{children:"Usar un secreto de Codespaces"}),v.jsxs("p",{children:["También puedes guardar ",v.jsx("code",{children:g.secret})," en Settings → Codespaces → Secrets, autorizar este repositorio y reiniciar el Codespace. Se reconocen además ",v.jsx("code",{children:e==="gemini"?"GEMINI_API_KEY o GOOGLE_API_KEY":"GROQ_API_KEY"}),". La clave guardada en la aplicación tiene prioridad."]})]}),v.jsx("div",{className:"settings-connection "+(L&&O.connected?"ok":""),children:v.jsx("strong",{children:L&&O.connected?"API conectada":L?O.error||"Conexión pendiente":"Proveedor pendiente de comprobar"})}),L&&!O.credential&&v.jsx("div",{className:"notice",role:"status",children:"El servidor sigue usando una versión anterior. Reinicia el Codespace para cargar la nueva conexión de IA."}),L&&O.credential&&v.jsxs("div",{className:"integration-note",role:"status",children:[v.jsx("strong",{children:O.credential.configured?O.credential.saved_in_app?"Clave guardada en la aplicación":"Secreto recibido por el servidor: "+O.credential.source:"El servidor todavía no recibe el secreto"}),v.jsx("p",{children:O.credential.configured?O.credential.valid_format?"La presencia del secreto no confirma que el proveedor lo acepte. Comprueba la API o prueba una respuesta.":"El valor contiene caracteres no válidos. Guarda solo la clave, sin comillas ni prefijos.":"Pega tu clave en el campo de arriba y pulsa Guardar clave y conectar."})]}),v.jsx("p",{className:"muted",children:"No se descarga ni ejecuta un modelo en tu PC. Los mensajes y el contexto que uses se envían al proveedor elegido. Sus límites y condiciones pueden cambiar; no se promete uso ilimitado ni acceso gratuito a GPT de OpenAI."}),v.jsxs("label",{children:["Modelo para todo el equipo",v.jsxs("select",{"aria-label":"Modelo compartido",value:"",onChange:B=>{B.target.value&&(l(U=>U.map(C=>({...C,model:B.target.value}))),p(null))},children:[v.jsx("option",{value:"",children:"Seleccionar un modelo del catálogo"}),(L?O.models:[]).map(B=>v.jsx("option",{children:B},B))]})]}),v.jsxs("details",{children:[v.jsx("summary",{children:"Ajustes avanzados del equipo"}),v.jsx("div",{className:"agent-settings",children:s.map(B=>v.jsxs("article",{children:[v.jsxs("h3",{children:[B.name,v.jsx("small",{children:B.role})]}),v.jsxs("label",{children:["Modelo de ",B.name,v.jsx("input",{"aria-label":"Modelo de "+B.name,value:B.model,maxLength:200,onChange:U=>{l(C=>C.map(H=>H.id===B.id?{...H,model:U.target.value}:H)),p(null)}})]}),v.jsxs("label",{children:["Instrucciones de ",B.name,v.jsx("textarea",{value:B.instructions,maxLength:6e3,onChange:U=>l(C=>C.map(H=>H.id===B.id?{...H,instructions:U.target.value}:H))})]})]},B.id))})]}),v.jsxs("div",{className:"api-config-row",children:[v.jsxs("button",{className:"button primary",onClick:()=>F("save"),children:[v.jsx(Md,{size:15}),"Guardar configuración"]}),v.jsxs("button",{className:"button secondary",onClick:()=>F("check"),children:[v.jsx(pp,{size:15}),"Actualizar catálogo"]}),v.jsxs("button",{className:"button secondary",onClick:()=>F("test"),children:[v.jsx(CS,{size:15}),"Conectar ",g.name]})]}),d&&v.jsxs("div",{className:"probe-result",role:"status",children:[v.jsx("strong",{children:"Respuesta recibida del proveedor"}),v.jsx("p",{children:d.response}),v.jsxs("small",{children:[d.model," · ",d.latency_ms," ms"]})]}),v.jsx("p",{className:"muted",children:"Para volver a entrar, abre el mismo Codespace y el puerto 8765. No necesitas reinstalar. Los proveedores mantienen su infraestructura; puedes actualizar el catálogo y elegir nuevos modelos. Las correcciones guardadas aportan contexto, sin reentrenar el modelo."}),v.jsxs("label",{className:"checkbox",children:[v.jsx("input",{type:"checkbox",checked:r.reduced,onChange:B=>r.onReduced(B.target.checked)}),"Reducir movimiento"]})]})})}async function ar(r,e,i,s){const l=await Bl("/api"+r,{method:i||(e?"POST":"GET"),headers:e instanceof FormData?{}:{"Content-Type":"application/json"},body:e instanceof FormData?e:e?JSON.stringify(e):void 0,signal:s});return Il(l)}function k2(r){const[e,i]=we.useState(null),[s,l]=we.useState(null),[c,h]=we.useState(""),[d,p]=we.useState(!1),[m,_]=we.useState(""),x=we.useRef(r);x.current=r;const S=we.useRef(null);we.useEffect(()=>{var L;const g=new AbortController;let O=!0;return(L=S.current)==null||L.abort(),_(""),h(""),p(!1),Promise.allSettled([ar("/usage",void 0,void 0,g.signal),r.project?ar("/projects/"+encodeURIComponent(r.project)+"/memory",void 0,void 0,g.signal):Promise.resolve(null)]).then(N=>{if(!O)return;const[F,I]=N;F.status==="fulfilled"?(i(F.value),l(F.value.policy)):F.reason.name!=="AbortError"&&x.current.onError(F.reason.message),I.status==="fulfilled"&&I.value?(h(I.value.summary||""),p(!0)):I.status==="rejected"&&I.reason.name!=="AbortError"&&x.current.onError(I.reason.message)}),()=>{var N;O=!1,g.abort(),(N=S.current)==null||N.abort()}},[r.project]);async function M(g,O){if(m)return;const L=new AbortController;S.current=L,_(g),r.onError("");try{await O(L.signal)}catch(N){N.name!=="AbortError"&&!L.signal.aborted&&x.current.onError(N.message)}finally{S.current===L&&(S.current=null,_(""))}}async function E(){await M("usage",async g=>{const O=await ar("/usage",void 0,void 0,g);g.aborted||(i(O),l(O.policy))})}async function w(){const g=r.project;g&&await M("backup",async O=>{const L=await Bl("/api/projects/"+encodeURIComponent(g)+"/backup",{signal:O});if(!L.ok){await Il(L);return}const N=await L.blob();if(O.aborted)return;const F=URL.createObjectURL(N),I=document.createElement("a");try{I.href=F,I.download="studio-de-anto-"+g+".zip",document.body.appendChild(I),I.click()}finally{I.remove(),setTimeout(()=>URL.revokeObjectURL(F),1e3)}})}async function y(g){if(!/\.zip$/i.test(g.name)){r.onError("Selecciona una copia de proyecto en formato ZIP.");return}if(g.size>25*1024*1024){r.onError("La copia ZIP puede ocupar hasta 25 MB.");return}await M("import",async O=>{const L=new FormData;L.append("file",g);const N=await ar("/projects/import",L,void 0,O);O.aborted||(x.current.onImported(N),x.current.onNotice("Copia importada en un proyecto nuevo. Ya está seleccionado."))})}return v.jsxs("section",{className:"content-card settings-card studio-controls",children:[v.jsxs("div",{className:"section-title",children:[v.jsx("h2",{children:"Uso y continuidad del estudio"}),v.jsxs("button",{className:"button secondary",disabled:!!m,onClick:E,children:[v.jsx(pp,{size:15}),"Actualizar uso"]})]}),v.jsx("p",{className:"muted",children:"Estos contadores pertenecen a esta aplicación. La cuota y la facturación de Gemini o Groq se consultan en tu cuenta del proveedor."}),e&&v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"usage-stats",role:"status",children:[v.jsxs("div",{children:[v.jsx("strong",{children:e.attempted}),v.jsx("span",{children:"intentos de hoy UTC"}),v.jsx("small",{children:e.day})]}),v.jsxs("div",{children:[v.jsx("strong",{children:e.remaining}),v.jsx("span",{children:"intentos disponibles en el estudio"})]}),v.jsxs("div",{children:[v.jsx("strong",{children:e.total_tokens.toLocaleString("es")}),v.jsx("span",{children:"tokens informados por el proveedor"}),v.jsxs("small",{children:[e.input_tokens.toLocaleString("es")," entrada · ",e.output_tokens.toLocaleString("es")," salida"]})]})]}),e.unknown_attempts>0&&v.jsxs("p",{className:"caption",children:["Recuento de tokens parcial: ",e.unknown_attempts," intento(s) sin uso informado por el proveedor."]})]}),s&&v.jsxs("form",{className:"studio-form",onSubmit:g=>{g.preventDefault(),M("policy",async O=>{const L=await ar("/usage/policy",s,"PUT",O);if(O.aborted)return;l(L.policy||L);const N=await ar("/usage",void 0,void 0,O);O.aborted||(i(N),r.onNotice("Límites del estudio guardados."))})},children:[v.jsxs("div",{className:"two-col",children:[v.jsxs("label",{children:["Máximo de intentos diarios UTC",v.jsx("input",{type:"number",min:1,max:1e4,step:1,required:!0,value:s.daily_requests,onChange:g=>l({...s,daily_requests:Number(g.target.value)})})]}),v.jsxs("label",{children:["Máximo de tokens por respuesta de chat",v.jsx("input",{type:"number",min:512,max:4096,step:1,required:!0,value:s.max_output_tokens,onChange:g=>l({...s,max_output_tokens:Number(g.target.value)})})]})]}),v.jsxs("label",{className:"checkbox",children:[v.jsx("input",{type:"checkbox",checked:s.concise,onChange:g=>l({...s,concise:g.target.checked})}),"Pedir respuestas concisas en el chat"]}),v.jsxs("button",{className:"button secondary",disabled:!!m,children:[v.jsx(h_,{size:15}),m==="policy"?"Guardando…":"Guardar límites"]})]}),v.jsx("div",{className:"studio-divider"}),v.jsxs("form",{className:"studio-form",onSubmit:g=>{g.preventDefault();const O=r.project;M("memory",async L=>{await ar("/projects/"+encodeURIComponent(O)+"/memory",{summary:c},"PUT",L),L.aborted||r.onNotice("Nota compartida guardada para este proyecto.")})},children:[v.jsx("h3",{children:"Nota compartida del proyecto"}),v.jsx("p",{className:"muted",children:"Los agentes reciben esta nota como contexto. Guarda objetivos, decisiones o preferencias que quieras conservar."}),v.jsxs("label",{children:["Contexto para todo el equipo",v.jsx("textarea",{"aria-label":"Nota compartida del proyecto",value:c,maxLength:6e3,disabled:!d||!!m,onChange:g=>h(g.target.value),placeholder:"Objetivo, decisiones y preferencias del proyecto…"})]}),v.jsxs("div",{className:"studio-actions",children:[v.jsxs("span",{className:"caption",children:[c.length,"/6000 caracteres"]}),v.jsxs("button",{className:"button secondary",disabled:!r.project||!d||!!m,children:[v.jsx(h_,{size:15}),m==="memory"?"Guardando…":"Guardar nota"]})]})]}),v.jsx("div",{className:"studio-divider"}),v.jsx("h3",{children:"Copia del proyecto"}),v.jsx("p",{className:"muted",children:"Descarga una copia ZIP para conservar el proyecto y sus archivos. Las claves de API no se incluyen. Al importar, se crea un proyecto nuevo y se conservan los existentes."}),v.jsxs("div",{className:"studio-actions backup-actions",children:[v.jsxs("button",{className:"button secondary",disabled:!r.project||!!m,onClick:w,children:[v.jsx(bd,{size:15}),m==="backup"?"Preparando copia…":"Descargar copia ZIP"]}),v.jsxs("label",{className:"button secondary backup-upload "+(m?"disabled":""),children:[v.jsx(Tv,{size:15}),m==="import"?"Importando…":"Importar como proyecto nuevo",v.jsx("input",{type:"file",accept:".zip,application/zip","aria-label":"Importar copia de proyecto",disabled:!!m,onChange:g=>{var L;const O=(L=g.target.files)==null?void 0:L[0];g.target.value="",O&&y(O)}})]})]}),v.jsx("p",{className:"caption",children:"Copia ZIP de hasta 25 MB. Se validará su contenido antes de crear el proyecto."})]})}async function vn(r,e,i,s){const l=await Bl("/api"+r,{method:i||(e?"POST":"GET"),headers:e instanceof FormData?{}:{"Content-Type":"application/json"},body:e instanceof FormData?e:e?JSON.stringify(e):void 0,signal:s});return Il(l)}const Sv=[["office","Oficina",hS],["projects","Proyectos",Ev],["tasks","Tareas",Mu],["data","Datos",bS],["deliverables","Entregables",Ed],["settings","Configuración",ZS]],Mv=".csv,.xlsx,.pdf,.jpg,.jpeg,.png,.webp",pa=r=>r.kind||(/\.(pdf)$/i.test(r.name)?"document":/\.(jpe?g|png|webp)$/i.test(r.name)?"image":"table"),yd=(r=0)=>r>=1024*1024?(r/(1024*1024)).toFixed(1)+" MB":Math.ceil(r/1024)+" KB",Sd=(r,e=!1)=>"/api/files/"+encodeURIComponent(r)+"/content"+(e?"?download=true":"");function X2(){var Ps;const[r,e]=we.useState("office"),[i,s]=we.useState([]),[l,c]=we.useState(""),[h,d]=we.useState([]),[p,m]=we.useState("anto"),[_,x]=we.useState(!1),[S,M]=we.useState("http://127.0.0.1:11434"),[E,w]=we.useState("gemini"),[y,g]=we.useState("http://127.0.0.1:1234/v1"),[O,L]=we.useState({connected:!1,models:[]}),[N,F]=we.useState({}),[I,V]=we.useState([]),[B,U]=we.useState([]),[C,H]=we.useState([]),[$,oe]=we.useState(""),[_e,ge]=we.useState(null),[G,ne]=we.useState([]),[Z,Me]=we.useState([]),[P,ae]=we.useState(""),[Ee,Re]=we.useState(""),[ee,ye]=we.useState(!1),[Se,Ne]=we.useState(!1),[Pe,dt]=we.useState(!1),[nt,et]=we.useState(""),[zt,Ze]=we.useState(""),[X,ln]=we.useState(!0),[xt,ot]=we.useState(!0),[We,Lt]=we.useState(1),[Xe,z]=we.useState(0),[T,k]=we.useState(matchMedia("(prefers-reduced-motion: reduce)").matches),[K,fe]=we.useState(""),[ue,Le]=we.useState(""),[Ue,q]=we.useState(""),[ke,Te]=we.useState(""),[Ve,tt]=we.useState("sum"),[Je,ze]=we.useState(!1),[mt,at]=we.useState(""),[Ot,Y]=we.useState(""),[Ie,pe]=we.useState(""),[ve,Fe]=we.useState(""),[Be,lt]=we.useState("Unidades"),[Pt,cn]=we.useState("bar"),[Rt,yn]=we.useState(""),[un,Sn]=we.useState(","),[En,Xn]=we.useState("utf-8-sig"),[Ui,Ma]=we.useState([]),[ba,di]=we.useState(null),[ia,pi]=we.useState(null),[mi,ni]=we.useState(""),[Ea,ji]=we.useState({}),[Xt,Ns]=we.useState(!1),[gr,gi]=we.useState("waiting"),[D,Q]=we.useState(0),[le,he]=we.useState([]),[te,De]=we.useState(!1),[Oe,He]=we.useState(!1),[je,rt]=we.useState(!1),$e=we.useRef(null),Ye=we.useRef(null),_t=we.useRef(null),st=we.useRef(0),nn=we.useRef(0),vt=we.useRef(!1),Et=we.useRef(0),Ke=we.useRef(0),Kt=we.useRef(null),pt=we.useRef({project:l,agent:p});pt.current={project:l,agent:p};const wn=we.useRef(null),Ut=h.find(A=>A.id===p),qt=i.find(A=>A.id===l),ii=Z[Z.length-1],Wt=(ii==null?void 0:ii.role)==="assistant"&&ii.status==="complete",Ht=_e&&"columns"in _e?_e:null,It=_e&&"name"in _e?_e:null,dn=C.filter(A=>pa(A)==="table"),Tn=C.filter(A=>pa(A)!=="table"),Gn=dn.some(A=>A.id===$)?$:"",ai=N,Mo=O.provider==="groq"?"Groq":"Gemini";function _r(A,me=!1){L(Ce=>({...A,inference_verified:!!A.inference_verified||!!(!me&&Ce.inference_verified&&A.connected&&Ce.provider===A.provider&&Ce.endpoint===A.endpoint)})),x(A.connected)}function Us(A){d(A.agents),w(A.provider),M(A.ollama_url),g(A.openai_url)}function Vl(A=!1){var Ce,Qe;nn.current++,(Ce=Ye.current)==null||Ce.abort(),Ye.current=null;const me=vt.current;(Qe=$e.current)==null||Qe.abort(),$e.current=null,vt.current=!1,Ne(!1),Me(ft=>ft.map(Ct=>Ct.status==="streaming"?{...Ct,status:"cancelled",persisted:!1}:Ct)),A&&me&&Ze("Conversación cancelada. La respuesta parcial no se guarda como completada.")}function jl(A,me){var Ce;pt.current.project===A&&pt.current.agent===me||(st.current++,Vl(!0),pt.current={project:A,agent:me},Ke.current++,(Ce=Kt.current)==null||Ce.abort(),he([]),De(!1),l!==A&&(H([]),oe(""),ge(null),U([]),ne([])),Me([]),Ma([]),di(null),pi(null),ni(""),dt(!0),c(A),m(me))}function aa(A){jl(A,pt.current.agent)}function Ls(A){jl(pt.current.project,A)}async function si(A){const me=st.current;et(""),ye(!0);try{await A()}catch(Ce){Ce.name!=="AbortError"&&me===st.current&&et(Ce.message)}finally{ye(!1)}}async function Qn(A=l){var Qe;if(!A)return;const me=++Et.current;(Qe=_t.current)==null||Qe.abort();const Ce=new AbortController;_t.current=Ce;try{const[ft,Ct,fn]=await Promise.all([vn("/runs?project="+A,void 0,void 0,Ce.signal),vn("/files?project="+A,void 0,void 0,Ce.signal),vn("/artifacts?project="+A,void 0,void 0,Ce.signal)]),vi=await Promise.all(ft.map(oa=>vn("/runs/"+oa.id,void 0,void 0,Ce.signal)));if(Ce.signal.aborted||me!==Et.current||pt.current.project!==A)return;U(vi),H(Ct),ne(fn)}catch(ft){if(ft.name!=="AbortError")throw ft}}async function Ta(){if(!Xt){Ns(!0),et("");try{const A=await vn("/connect",{provider:E,agent:p});Us(A.settings),_r(A.status),Ze("Listo. Ya puedes conversar con tu equipo.")}catch(A){const me=A.message;et(me),L(Ce=>({...Ce,inference_verified:!1,error:me}))}finally{Ns(!1)}}}async function bo(){const A=await vn("/models");_r(A)}we.useEffect(()=>{let A=!0;return ye(!0),(async()=>{var me;try{const[Ce,Qe]=await Promise.all([vn("/projects"),vn("/settings")]);if(!A)return;s(Ce),Us(Qe),aa(((me=Ce[0])==null?void 0:me.id)||""),await bo()}catch(Ce){A&&et(Ce.message)}finally{A&&ye(!1)}})(),()=>{A=!1}},[]),we.useEffect(()=>{if(!l)return;let A=!0;oe(""),ge(null),V([]),F({}),ji({}),Le(""),si(()=>Qn(l));const me=new EventSource("/api/events?project="+l);me.onmessage=Qe=>{if(!(!A||pt.current.project!==l))try{const ft=JSON.parse(Qe.data),Ct=JSON.parse(ft.payload);ft.agent&&(Ct.agent_status||Ct.status)&&F(fn=>({...fn,[ft.agent]:Ct.agent_status||Ct.status})),ft.kind==="task"&&ft.run&&Ct.logical_id&&Ct.status&&ji(fn=>({...fn,[ft.run+":"+Ct.logical_id]:Ct.status})),V(fn=>[...fn,ft].slice(-100)),["run","file","plan"].includes(ft.kind)&&Qn(l).catch(fn=>{A&&et(fn.message)})}catch{et("No se pudo interpretar un evento del servidor.")}};const Ce=setInterval(()=>bo().catch(()=>x(!1)),15e3);return()=>{var Qe;A=!1,me.close(),clearInterval(Ce),(Qe=_t.current)==null||Qe.abort()}},[l]),we.useEffect(()=>{var Qe;if(!l)return;const A=st.current,me=new AbortController;(Qe=Ye.current)==null||Qe.abort(),Ye.current=me,dt(!0);const Ce="?project="+encodeURIComponent(l)+"&agent="+encodeURIComponent(p);return Promise.all([vn("/messages"+Ce,void 0,void 0,me.signal),vn("/feedback"+Ce,void 0,void 0,me.signal)]).then(([ft,Ct])=>{me.signal.aborted||A!==st.current||vt.current||(Me(ft.map(fn=>({...fn,key:fn.id,persisted:!0,status:"complete"}))),Ma(Ct))}).catch(ft=>{ft.name!=="AbortError"&&A===st.current&&et(ft.message)}).finally(()=>{!me.signal.aborted&&A===st.current&&dt(!1)}),()=>me.abort()},[l,p]),we.useEffect(()=>{if(!Se)return;const A=Date.now();Q(0);const me=setInterval(()=>Q(Math.floor((Date.now()-A)/1e3)),1e3);return()=>clearInterval(me)},[Se]),we.useEffect(()=>{var A;(A=wn.current)==null||A.scrollIntoView({behavior:T?"instant":"smooth",block:"nearest"})},[Z]),we.useEffect(()=>()=>{var A,me,Ce,Qe;(A=$e.current)==null||A.abort(),(me=Ye.current)==null||me.abort(),(Ce=_t.current)==null||Ce.abort(),(Qe=Kt.current)==null||Qe.abort()},[]);async function Os(A){var ft;const me=pt.current.project,Ce=++Ke.current,Qe=await vn("/files/"+encodeURIComponent(A)+"/preview");pt.current.project!==me||Ce!==Ke.current||(oe(A),ge(Qe),yn("sheets"in Qe&&((ft=Qe.sheets)==null?void 0:ft[0])||""),q(""),Te(""),at(""),Y(""),pe(""),Fe(""),ze(!1))}function Eo(A){return E!=="gemini"?(et("Para leer PDF o imágenes, elige Gemini en Configuración."),!1):le.some(me=>me.id===A.id)?!0:le.length>=3?(et("Puedes adjuntar hasta 3 archivos por mensaje."),!1):le.reduce((me,Ce)=>me+(Ce.size||0),0)+(A.size||0)>12*1024*1024?(et("Los adjuntos de un mensaje pueden sumar hasta 12 MB. El archivo permanece en tu biblioteca."),!1):(he(me=>[...me,A]),!0)}function Ka(A){Eo({...A,kind:pa(A)})&&(e("office"),ln(!0),De(!1),Ze("Archivo adjunto al próximo mensaje. Escribe qué quieres consultar; se enviará a Gemini cuando pulses Enviar."))}async function _i(A,me=!1){if(Oe||!l)return;if(!/\.(csv|xlsx|pdf|jpe?g|png|webp)$/i.test(A.name)){et("Usa CSV, XLSX, PDF, JPG, PNG o WebP.");return}if(A.size>20*1024*1024){et("El archivo supera el límite de 20 MB.");return}const Ce=l,Qe=st.current,ft=new AbortController;Kt.current=ft,He(!0),et("");try{const Ct=new FormData;Ct.append("project",Ce),Ct.append("file",A);const fn=await vn("/files",Ct,void 0,ft.signal);if(ft.signal.aborted||pt.current.project!==Ce||Qe!==st.current||(await Qn(Ce),ft.signal.aborted||Qe!==st.current))return;const vi=fn.kind||pa({id:fn.id,name:A.name});if(me&&vi!=="table")Ka({id:fn.id,name:A.name,kind:vi,size:A.size,mime:A.type});else{if(await Os(fn.id),ft.signal.aborted||Qe!==st.current)return;e("data"),Ze(vi==="table"?"Archivo original conservado. Revisa hoja, columnas y valores faltantes.":"Archivo conservado. Puedes descargar el original o adjuntarlo a una consulta con Gemini.")}}catch(Ct){Ct.name!=="AbortError"&&Qe===st.current&&et(Ct.message)}finally{Kt.current===ft&&(Kt.current=null,He(!1))}}function To(){var Qe;const A=P.trim()||((Qe=[...Z].reverse().find(ft=>ft.role==="user"))==null?void 0:Qe.content)||"";if(!A.trim()){Ze("Escribe un objetivo o envía primero un mensaje para preparar una tarea.");return}Re(A);const me=dn.find(ft=>A.toLocaleLowerCase().includes(ft.name.toLocaleLowerCase())),Ce=(me==null?void 0:me.id)||Gn||"";Ce!==$&&(Ke.current++,ge(null),oe(Ce)),e("tasks"),Ze("Objetivo preparado. Elige una tabla si corresponde y revisa el plan antes de aprobarlo.")}async function sa(A=P,me=!0){var xr,ql;if(A=A.trim(),!A||!l)return;if(Xt){Ze("Estoy conectando tu equipo. Tu mensaje permanece escrito; envíalo cuando termine.");return}if(Oe){Ze("Espera a que termine de subir el archivo antes de enviar tu mensaje.");return}if(vt.current){Ze("La respuesta sigue en curso. Tu nuevo mensaje permanece escrito; envíalo cuando termine o pulsa Detener.");return}if(Pe){Ze("Espera a que termine de cargar tu conversación.");return}if(!((xr=h.find(pn=>pn.id===p))!=null&&xr.model)){et("Selecciona un modelo para este agente en Configuración antes de conversar.");return}const Ce=me?[...le]:[];if(Ce.length&&E!=="gemini"){et("Para enviar PDF o imágenes, elige Gemini o retira los adjuntos.");return}if(Ce.length>3||Ce.reduce((pn,xi)=>pn+(xi.size||0),0)>12*1024*1024){et("Selecciona hasta 3 adjuntos que sumen como máximo 12 MB.");return}gi("waiting"),Ze(""),(ql=Ye.current)==null||ql.abort(),ae(""),et(""),Ne(!0),vt.current=!0;const Qe=++nn.current,ft=st.current,Ct=()=>Qe===nn.current&&ft===st.current,fn=crypto.randomUUID(),vi=crypto.randomUUID(),oa=new AbortController;$e.current=oa;const Qa=h.find(pn=>pn.id===p),kl={project:l,agent:p,content:A,run:ue||null,attachments:Ce.map(pn=>pn.id)};Me(pn=>[...pn,{id:fn,key:fn,role:"user",content:A,attachments:Ce,status:"complete"},{id:vi,key:vi,role:"assistant",content:"",model:Qa==null?void 0:Qa.model,provider:E,status:"streaming",persisted:!1}]);function Co(pn){Ct()&&Me(xi=>xi.map(yi=>yi.key===vi?pn(yi):yi))}let wo=!1,Xl=!1;try{const pn=await Bl("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(kl),signal:oa.signal});if(!pn.ok)throw await Il(pn),Error("No se pudo iniciar la conversación");if(!pn.body)throw Error("El servidor no abrió el flujo de respuesta.");const xi=pn.body.getReader(),yi=new TextDecoder;let zs="";for(;;){const{done:Wl,value:Iu}=await xi.read();if(Wl)break;if(!Ct()){await xi.cancel();return}zs+=yi.decode(Iu,{stream:!0});let Do;for(;(Do=zs.indexOf(`

`))>=0;){const Yl=zs.slice(0,Do);if(zs=zs.slice(Do+2),!Yl.startsWith("data: "))continue;const Jn=JSON.parse(Yl.slice(6));if(Jn.error)throw Error(Jn.error);if((Jn.status==="waiting"||Jn.status==="generating")&&Ct()&&gi(Jn.status),typeof Jn.token=="string"&&Jn.token&&(Xl=!0,Ct()&&gi("generating"),Co(Si=>({...Si,content:Si.content+Jn.token}))),Jn.done){if(!Xl)throw Error("El proveedor terminó sin texto.");wo=!0,Co(Si=>({...Si,id:Jn.message_id||Si.id,persisted:!!Jn.message_id,status:"complete",model:Jn.model||Si.model,provider:Jn.provider||Si.provider})),Ct()&&he(Si=>Si.filter(Bu=>!Ce.some(Fu=>Fu.id===Bu.id)))}}}if(!wo)throw Error("La conexión terminó antes de confirmar la respuesta. El texto parcial no está guardado como respuesta completa.")}catch(pn){if(Ct()){const xi=pn.name==="AbortError";xi||L(yi=>({...yi,inference_verified:!1,error:pn.message})),Co(yi=>({...yi,status:xi?"cancelled":"error",persisted:!1,error:xi?void 0:pn.message})),wo||ae(yi=>yi||A),xi?Ze("Conversación cancelada. La respuesta parcial no se guarda como completada."):et(pn.message)}}finally{Ct()&&(Ne(!1),vt.current=!1,$e.current=null)}}async function ki(A,me){if(!A.persisted||A.status!=="complete")return;const Ce=st.current;di(A.id),et("");try{const Qe=await vn("/feedback",{message_id:A.id,rating:me,...me==="correction"?{correction:mi.trim()}:{}});if(Ce!==st.current)return;Ma(ft=>[Qe,...ft.filter(Ct=>Ct.message_id!==A.id)]),pi(null),ni(""),Ze(me==="correction"?"Corrección guardada para futuras conversaciones de este agente. Mejora contexto, no reentrena el modelo.":"Valoración guardada.")}catch(Qe){Ce===st.current&&et(Qe.message)}finally{Ce===st.current&&di(null)}}async function Ao(A){const me=st.current;di(A.message_id);try{if(await vn("/feedback/"+A.id,void 0,"DELETE"),me!==st.current)return;Ma(Ce=>Ce.filter(Qe=>Qe.id!==A.id)),Ze("Corrección eliminada de la memoria de este agente.")}catch(Ce){me===st.current&&et(Ce.message)}finally{me===st.current&&di(null)}}function vr(A,me){var Qe,ft;const Ce=(ft=(Qe=A.tasks)==null?void 0:Qe.find(Ct=>{try{return JSON.parse(Ct.payload).id===me}catch{return!1}}))==null?void 0:ft.status;return Ce&&["Completado","Fallido","Cancelado","Interrumpido"].includes(Ce)?Ce:Ea[A.id+":"+me]||Ce||"Estado no disponible"}async function Ro(A=!1){const me=l;await si(async()=>{let Ce={project:me,request:Ee||"Analizar las operaciones seleccionadas",file:Gn||null};A&&(Ce.analysis={metric:Je?"ingresos":Ue,group_by:ke?[ke]:[],aggregation:Ve,derived:Je?{name:"ingresos",left:mt,right:Ot,op:"multiply"}:null,filters:Ie?[{column:Ie,op:"eq",value:ve}]:[],sort:"descending",chart:Pt,title:Ee||"Análisis de datos",unit:Be});const Qe=await vn(A?"/tools/plan":"/plans",Ce);pt.current.project===me&&(Le(Qe.id),await Qn(me),e("tasks"),Ze("Plan preparado. Revisa los argumentos antes de aprobar."))})}const ra=v.jsxs(v.Fragment,{children:[v.jsx("option",{value:"",children:"Seleccionar columna"}),Ht==null?void 0:Ht.columns.map(A=>v.jsx("option",{children:A.name},A.name))]});return v.jsxs("div",{className:"app",children:[v.jsxs("aside",{className:"sidebar",children:[v.jsx("a",{className:"brandmark",href:"#",onClick:()=>e("office"),"aria-label":"Oficina",children:v.jsx(Bh,{size:27})}),v.jsx("div",{className:"nav-items",children:Sv.map(([A,me,Ce])=>v.jsxs("button",{title:me,className:r===A?"nav active":"nav",onClick:()=>e(A),children:[v.jsx(Ce,{size:21}),v.jsx("span",{children:me})]},A))}),v.jsx("button",{className:"sidebar-bottom",onClick:()=>e("settings"),title:"Configuración",children:"AN"})]}),v.jsxs("div",{className:"workspace",children:[v.jsxs("header",{className:"topbar",children:[v.jsxs("div",{className:"wordmark",children:["STUDIO ",v.jsx("span",{children:"DE"})," ANTO",v.jsx("small",{children:"UN ESPACIO PARA CREAR EN EQUIPO"})]}),v.jsx("div",{className:"header-divider"}),v.jsx("select",{className:"project-select",value:l,onChange:A=>aa(A.target.value),"aria-label":"Proyecto activo",children:i.map(A=>v.jsx("option",{value:A.id,children:A.name},A.id))}),v.jsx("span",{className:"local-tag",children:"ESTUDIO"}),v.jsxs("div",{className:"top-right",children:[v.jsxs("button",{className:"connection "+(O.inference_verified?"online":""),disabled:Xt,onClick:()=>O.inference_verified?e("settings"):Ta(),children:[v.jsx("i",{}),Xt?"Conectando…":O.inference_verified?Mo+" · listo":"Conectar "+Mo]}),v.jsx("span",{className:"avatar small",children:"AN"})]})]}),v.jsxs("main",{children:[nt&&v.jsxs("div",{role:"alert",className:"alert",children:[v.jsx(eM,{size:17}),v.jsx("span",{children:nt}),v.jsx("button",{onClick:()=>et(""),"aria-label":"Cerrar error",children:v.jsx(Ml,{size:16})})]}),zt&&v.jsxs("div",{role:"status",className:"notice",children:[v.jsx(SS,{size:16}),zt,v.jsx("button",{onClick:()=>Ze(""),"aria-label":"Cerrar aviso",children:v.jsx(Ml,{size:15})})]}),v.jsxs("div",{className:"page-heading",children:[v.jsxs("div",{children:[v.jsx("div",{className:"eyebrow",children:"TU EQUIPO, EN UN MISMO LUGAR"}),v.jsxs("h1",{children:[(Ps=Sv.find(A=>A[0]===r))==null?void 0:Ps[1],v.jsx("span",{className:"heading-dot"})]}),v.jsx("p",{children:r==="office"?"Las buenas ideas se construyen juntos. Dale vida a la próxima.":r==="data"?"De los archivos a la evidencia. Tú eliges qué calcular.":r==="tasks"?"Un objetivo compartido, pasos claros y resultados verificables.":r==="settings"?"Tus modelos, tus datos y tu equipo en el entorno que elijas.":r==="projects"?"Un espacio propio para cada idea.":"El trabajo de tu equipo, listo para llevar."})]}),v.jsxs("div",{className:"heading-actions",children:[v.jsxs("button",{className:"button secondary",onClick:()=>{ot(!xt),e("office")},children:[v.jsx(l_,{size:16}),"Actividad"]}),v.jsxs("button",{className:"button primary",onClick:()=>e("projects"),children:[v.jsx(Kc,{size:17}),"Nuevo proyecto"]})]})]}),r==="office"&&v.jsxs("div",{className:"office-layout "+(X?"":"no-panel"),children:[v.jsxs("section",{className:"office-card",children:[v.jsxs("div",{className:"office-bar",children:[v.jsxs("div",{children:[v.jsx("span",{className:"live-dot"}),"EL ESTUDIO ",v.jsx("span",{className:"subtle",children:"/"}),v.jsx("span",{className:"office-name",children:qt==null?void 0:qt.name})]}),v.jsxs("span",{className:"office-badge",children:["6 agentes · ",Object.values(ai).filter(A=>A==="En ejecución").length," trabajando"]}),v.jsx("button",{className:"icon-button",onClick:()=>ln(!X),title:"Mostrar u ocultar conversación",children:v.jsx(VS,{size:18})})]}),v.jsxs("div",{className:"scene-wrap",children:[h.length===6&&v.jsx(V2,{agents:h,selected:p,onSelect:A=>{Ls(A),ln(!0)},states:ai,reduced:T,zoom:We,reset:Xe}),v.jsxs("div",{className:"scene-caption",children:[v.jsx("span",{className:"scene-caption-icon",children:v.jsx(Vh,{size:16})}),v.jsxs("div",{children:["Espacio para grandes ideas",v.jsx("small",{children:"Selecciona un agente para empezar a colaborar"})]})]}),v.jsxs("div",{className:"scene-controls",children:[v.jsx("button",{title:"Alejar",onClick:()=>Lt(Math.max(.6,We-.1)),children:v.jsx(f_,{size:15})}),v.jsxs("span",{children:[Math.round(We*100),"%"]}),v.jsx("button",{title:"Acercar",onClick:()=>Lt(Math.min(1.8,We+.1)),children:v.jsx(Kc,{size:15})}),v.jsx("b",{}),v.jsx("button",{title:"Restablecer vista",onClick:()=>{Lt(1),z(Xe+1)},children:v.jsx(IS,{size:15})})]}),v.jsxs("div",{className:"pan-help",children:[v.jsx(HS,{size:13}),"Arrastra para girar · clic en suelo para mover · rueda para zoom"]})]}),v.jsxs("div",{className:"team-strip",children:[v.jsxs("div",{className:"team-label",children:["EN EL ESTUDIO",v.jsx("small",{children:"Tu equipo de agentes"})]}),h.map(A=>v.jsxs("button",{className:"team-person "+(p===A.id?"chosen":""),onClick:()=>{Ls(A.id),ln(!0)},children:[v.jsxs("span",{className:"agent-avatar",style:{background:A.color+"35",color:A.color},children:[v.jsx("span",{className:"mini-head"}),v.jsx("span",{className:"mini-body"})]}),v.jsxs("span",{children:[v.jsx("strong",{children:A.name}),v.jsx("small",{children:A.role})]}),v.jsx("i",{className:ai[A.id]==="En ejecución"?"working":""})]},A.id))]})]}),X&&v.jsxs("aside",{className:"chat-panel",children:[v.jsxs("div",{className:"panel-title",children:[v.jsx("span",{children:"Conversa con tu equipo"}),v.jsx("button",{onClick:()=>ln(!1),title:"Cerrar conversación",children:v.jsx(Ml,{size:17})})]}),v.jsxs("div",{className:"agent-intro",children:[v.jsxs("span",{className:"agent-avatar large",style:{background:((Ut==null?void 0:Ut.color)||"#aaa")+"30",color:Ut==null?void 0:Ut.color},children:[v.jsx("span",{className:"mini-head"}),v.jsx("span",{className:"mini-body"})]}),v.jsxs("div",{children:[v.jsxs("h3",{children:[Ut==null?void 0:Ut.name,v.jsx("span",{className:"role-badge",children:Ut==null?void 0:Ut.role})]}),v.jsxs("p",{children:[v.jsx("i",{className:"live-dot"}),ai[p]||"Disponible"]})]})]}),v.jsxs("div",{className:"model-line",children:[v.jsx(Bh,{size:13}),(Ut==null?void 0:Ut.model)||"Sin modelo asignado",v.jsxs("button",{onClick:()=>e("settings"),children:["Configurar",v.jsx(Sl,{size:12})]})]}),v.jsxs("div",{className:"chat-body",children:[!Z.length&&v.jsxs("div",{className:"chat-empty",children:[v.jsx("span",{className:"empty-spark",children:v.jsx(Vh,{size:27})}),v.jsx("h3",{children:"¿Qué tienes en mente?"}),v.jsxs("p",{children:["Cuéntame tu idea o comparte un archivo.",v.jsx("br",{}),"Daremos el siguiente paso juntos."]}),v.jsx("div",{className:"truth-tag",children:_&&(Ut!=null&&Ut.model)?"Conversación mediante API en la nube":"Conecta un modelo para conversar"}),v.jsx("p",{children:"Conversa, resuelve dudas o pide ayuda para escribir. No necesitas subir un archivo."}),v.jsxs("button",{className:"suggestion",onClick:()=>ae("Hola, ¿en qué puedes ayudarme?"),children:["Empezar una conversación",v.jsx(Sl,{size:14})]}),v.jsxs("button",{className:"suggestion",onClick:()=>e("data"),children:["Explorar mis datos",v.jsx(Sl,{size:14})]})]}),Pe&&v.jsx("p",{className:"quiet",role:"status",children:"Cargando historial…"}),Z.map(A=>{var Ce;const me=Ui.find(Qe=>Qe.message_id===A.id);return v.jsxs("div",{className:"message "+A.role,children:[v.jsxs("small",{children:[A.role==="user"?"TÚ":Ut==null?void 0:Ut.name,A.model?" · "+A.model:"",A.provider?" · "+A.provider:""]}),v.jsx("p",{children:A.content||(A.status==="streaming"?"Esperando al modelo…":A.error||"Sin respuesta recibida")}),(Ce=A.attachments)!=null&&Ce.length?v.jsx("div",{className:"message-attachments",children:A.attachments.map(Qe=>v.jsxs("a",{href:Sd(Qe.id,!0),download:!0,children:[v.jsx(Zc,{size:12}),Qe.name]},Qe.id))}):null,A.status==="cancelled"&&v.jsx("small",{children:"Respuesta parcial cancelada · sin guardar"}),A.status==="error"&&v.jsxs(v.Fragment,{children:[v.jsx("small",{children:"Respuesta incompleta o fallida · sin guardar"}),A.content&&A.error&&v.jsx("p",{className:"chat-error",role:"status",children:A.error}),v.jsx("button",{className:"retry",onClick:()=>{e("settings"),et("")},children:"Revisar conexión"})]}),A.role==="assistant"&&A.persisted&&A.status==="complete"&&v.jsxs("div",{className:"feedback-toolbar",children:[v.jsx("button",{className:"button secondary","aria-pressed":(me==null?void 0:me.rating)==="useful",disabled:ba===A.id,onClick:()=>ki(A,"useful"),children:"Útil"}),v.jsx("button",{className:"button secondary",disabled:ba===A.id,onClick:()=>{pi(A.id),ni((me==null?void 0:me.correction)||"")},children:"Guardar corrección"}),(me==null?void 0:me.rating)==="correction"&&v.jsx("small",{children:"Corrección guardada"})]}),ia===A.id&&A.persisted&&v.jsxs("form",{className:"feedback-form",onSubmit:Qe=>{Qe.preventDefault(),ki(A,"correction")},children:[v.jsxs("label",{children:["Corrección para la respuesta",v.jsx("textarea",{"aria-label":"Corrección para la respuesta",value:mi,onChange:Qe=>ni(Qe.target.value),minLength:3,maxLength:2e3,required:!0,placeholder:"Escribe la información correcta que debe recordar este agente…"})]}),v.jsx("p",{children:"Se usará como contexto del mismo proyecto y agente. No reentrena el modelo."}),v.jsxs("div",{children:[v.jsx("button",{className:"button primary",disabled:ba===A.id||mi.trim().length<3,children:"Confirmar corrección"}),v.jsx("button",{className:"button secondary",type:"button",onClick:()=>pi(null),children:"Cancelar"})]})]})]},A.key||A.id)}),v.jsxs("details",{className:"feedback-memory",children:[v.jsxs("summary",{children:["Correcciones guardadas (",Ui.filter(A=>A.rating==="correction").length,")"]}),v.jsx("p",{children:"Mejora contexto, no reentrena el modelo. Puedes revisar y eliminar cada corrección."}),Ui.filter(A=>A.rating==="correction").map(A=>v.jsxs("div",{className:"feedback-entry",children:[v.jsx("p",{children:A.correction}),v.jsx("button",{className:"button secondary",disabled:ba===A.message_id,onClick:()=>Ao(A),children:"Eliminar corrección"})]},A.id)),!Ui.some(A=>A.rating==="correction")&&v.jsx("p",{children:"Aún no hay correcciones guardadas para este agente y proyecto."})]}),v.jsx("div",{ref:wn})]}),v.jsxs("div",{className:"chat-compose",children:[(!O.inference_verified||!_)&&v.jsxs("div",{className:"chat-connection-error",role:"status",children:[v.jsx("strong",{children:"Conecta tu equipo para conversar"}),O.error&&v.jsx("p",{children:O.error}),v.jsx("button",{className:"button primary",disabled:Xt,onClick:Ta,children:Xt?"Conectando…":E==="groq"?"Conectar Groq":"Conectar Gemini"}),v.jsx("button",{className:"button secondary",onClick:()=>e("settings"),children:"Añadir mi clave"})]}),Se&&v.jsxs("div",{className:"chat-progress",children:[v.jsx(u_,{size:14,className:"spin"}),v.jsx("span",{role:"status",children:gr==="generating"?"Recibiendo respuesta…":"Esperando respuesta del modelo…"}),v.jsxs("time",{"aria-label":"Tiempo transcurrido",children:[Math.floor(D/60),":",String(D%60).padStart(2,"0")]})]}),B.length>0&&v.jsxs("select",{value:ue,onChange:A=>Le(A.target.value),"aria-label":"Contexto de ejecución",children:[v.jsx("option",{value:"",children:"Sin contexto de ejecución"}),B.map(A=>v.jsx("option",{value:A.id,children:A.request.slice(0,40)},A.id))]}),v.jsx("textarea",{value:P,maxLength:12e3,onChange:A=>ae(A.target.value),placeholder:"Pregunta o pide algo a "+((Ut==null?void 0:Ut.name)||"tu equipo")+"…","aria-label":"Mensaje",onKeyDown:A=>{A.key==="Enter"&&!A.shiftKey&&(A.preventDefault(),sa())}}),le.length>0&&v.jsxs("div",{className:"attachment-chips","aria-label":"Adjuntos del próximo mensaje",children:[le.map(A=>v.jsxs("span",{className:"attachment-chip",children:[v.jsx(Zc,{size:13}),v.jsx("span",{children:A.name}),v.jsx("button",{type:"button",disabled:Se,"aria-label":"Quitar adjunto "+A.name,onClick:()=>he(me=>me.filter(Ce=>Ce.id!==A.id)),children:v.jsx(Ml,{size:14})})]},A.id)),v.jsxs("small",{children:[yd(le.reduce((A,me)=>A+(me.size||0),0))," de 12 MB"]})]}),te&&v.jsxs("div",{className:"attachment-chooser",children:[v.jsxs("div",{children:[v.jsx("strong",{children:"Elegir PDF o imagen del proyecto"}),v.jsx("button",{"aria-label":"Cerrar selector de adjuntos",onClick:()=>De(!1),children:v.jsx(Ml,{size:14})})]}),!Tn.length&&v.jsx("p",{children:"Aún no hay PDF ni imágenes. Usa el clip para subir uno."}),Tn.map(A=>v.jsxs("button",{className:"attachment-choice",disabled:Se||Oe||le.some(me=>me.id===A.id),onClick:()=>Eo({...A,kind:pa(A)}),children:[pa(A)==="image"?v.jsx(c_,{size:15}):v.jsx(Hh,{size:15}),v.jsx("span",{children:A.name}),le.some(me=>me.id===A.id)?v.jsx(Md,{size:14}):v.jsx(Kc,{size:14})]},A.id))]}),v.jsxs("div",{className:"compose-tools",children:[v.jsxs("label",{title:"Subir archivo","aria-label":"Subir archivo al chat",children:[v.jsx(Zc,{size:18}),v.jsx("input",{type:"file",accept:Mv,disabled:Se||Oe,onChange:A=>{var Ce;const me=(Ce=A.target.files)==null?void 0:Ce[0];A.target.value="",me&&_i(me,!0)}})]}),v.jsx("button",{className:"choose-attachment",title:"Elegir PDF o imagen existente","aria-label":"Elegir PDF o imagen existente",disabled:Se||Oe,onClick:()=>De(!te),children:v.jsx(Ed,{size:17})}),v.jsx("span",{children:Oe?"Subiendo…":"Enter para enviar · Shift+Enter para otra línea"}),Se?v.jsx("button",{className:"send",title:"Cancelar conversación",onClick:()=>Vl(!0),children:v.jsx(d_,{size:14})}):v.jsx("button",{className:"send",title:"Enviar",disabled:!P.trim()||Pe||Xt||Oe,onClick:()=>sa(),children:v.jsx(mS,{size:18})})]}),v.jsx("p",{className:"conversation-hint",children:"PDF e imágenes: solo Gemini, hasta 3 adjuntos y 12 MB por mensaje. Se envían únicamente los archivos seleccionados; vuelve a elegirlos para otra consulta."}),v.jsxs("button",{className:"retry",onClick:()=>sa("Continúa desde tu respuesta anterior sin repetirla. Si ya terminaste, propón un siguiente paso útil para mi solicitud.",!1),disabled:Se||Xt||Pe||!Wt,children:[v.jsx(Gh,{size:11}),"Continuar conversación"]}),v.jsxs("button",{className:"retry",disabled:Se||!(P.trim()||Z.some(A=>A.role==="user")),onClick:To,children:[v.jsx(Mu,{size:12}),"Preparar tarea"]}),v.jsxs("button",{className:"retry",onClick:()=>{const A=[...Z].reverse().find(me=>me.role==="user");A&&sa(A.content)},disabled:Se||Xt||Pe||!Z.some(A=>A.role==="user"),children:[v.jsx(pp,{size:11}),"Reintentar último mensaje"]})]}),v.jsxs("div",{className:"privacy",children:[v.jsx(OS,{size:12}),"IA en la nube · cuotas del proveedor."]})]}),xt&&v.jsxs("section",{className:"activity-panel",children:[v.jsxs("div",{className:"activity-title",children:[v.jsx(l_,{size:15}),v.jsx("strong",{children:"Actividad del equipo"}),v.jsx("span",{children:"EN VIVO"}),v.jsx("button",{onClick:()=>ot(!1),title:"Ocultar actividad",children:v.jsx(f_,{size:16})})]}),v.jsx("div",{className:"activity-entries",children:I.length?I.slice(-4).reverse().map(A=>{var Ce;const me=JSON.parse(A.payload);return v.jsxs("div",{children:[v.jsx("span",{className:"event-dot"}),v.jsx("time",{children:new Date(A.created).toLocaleTimeString("es-PE",{hour:"2-digit",minute:"2-digit"})}),v.jsx("strong",{children:((Ce=A.agent)==null?void 0:Ce.toUpperCase())||"ESTUDIO"}),v.jsxs("span",{children:[me.task||me.objective||me.name||me.message||"Conversación",me.status?" · "+me.status:""]})]},A.seq)}):v.jsx("p",{className:"quiet",children:"Aquí aparecerán las tareas y resultados reales de tu equipo."})})]})]}),r==="projects"&&v.jsxs("section",{className:"content-card",children:[v.jsxs("div",{className:"section-title",children:[v.jsx("h2",{children:"Tus proyectos"}),v.jsx(Ev,{size:20})]}),v.jsxs("form",{className:"new-project",onSubmit:A=>{A.preventDefault(),si(async()=>{const me=await vn("/projects",{name:K});s([...i,me]),aa(me.id),fe(""),e("office")})},children:[v.jsx("input",{placeholder:"Nombre de tu próximo proyecto",value:K,onChange:A=>fe(A.target.value),maxLength:120,required:!0}),v.jsxs("button",{className:"button primary",disabled:ee,children:[v.jsx(Kc,{size:16}),"Crear proyecto"]})]}),v.jsx("div",{className:"project-grid",children:i.map(A=>v.jsxs("button",{className:"project-card "+(A.id===l?"current":""),onClick:()=>{aa(A.id),e("office")},children:[v.jsx("span",{className:"project-art",children:v.jsx(Bh,{size:42})}),v.jsx("h3",{children:A.name}),v.jsx("p",{children:A.id===l?"Proyecto activo":"Abrir espacio de trabajo"}),v.jsx(Sl,{size:19})]},A.id))})]}),r==="data"&&v.jsxs("div",{className:"data-layout",children:[v.jsxs("section",{className:"content-card",children:[v.jsxs("div",{className:"section-title",children:[v.jsx("h2",{children:"Biblioteca del proyecto"}),v.jsx("span",{children:"CSV · XLSX · PDF · JPG · PNG · WebP · hasta 20 MB"})]}),v.jsxs("label",{className:"dropzone "+(je?"dragging":""),onDragOver:A=>{A.preventDefault(),Oe||rt(!0)},onDragLeave:()=>rt(!1),onDrop:A=>{A.preventDefault(),rt(!1),!ee&&!Oe&&A.dataTransfer.files[0]&&_i(A.dataTransfer.files[0])},children:[v.jsx(Tv,{size:26}),v.jsx("strong",{children:Oe?"Subiendo archivo…":"Trae tus archivos al estudio"}),v.jsx("span",{children:"Arrastra un archivo o selecciónalo aquí"}),v.jsx("input",{type:"file",accept:Mv,disabled:ee||Oe,onChange:A=>{var Ce;const me=(Ce=A.target.files)==null?void 0:Ce[0];A.target.value="",me&&_i(me)}})]}),v.jsx("div",{className:"file-list",children:C.map(A=>v.jsxs("button",{className:$===A.id?"selected":"",onClick:()=>si(()=>Os(A.id)),children:[pa(A)==="table"?v.jsx(Fh,{size:18}):pa(A)==="image"?v.jsx(c_,{size:18}):v.jsx(Hh,{size:18}),v.jsxs("span",{children:[A.name,v.jsxs("small",{children:[pa(A)==="table"?"Tabla":pa(A)==="image"?"Imagen":"Documento PDF",A.size!==void 0?" · "+yd(A.size):""]})]}),v.jsx(xS,{size:16})]},A.id))}),Gn&&Ht&&v.jsxs("div",{className:"import-options",children:[Ht.sheets.length?v.jsxs("label",{children:["Hoja",v.jsx("select",{value:Rt,onChange:A=>yn(A.target.value),children:Ht.sheets.map(A=>v.jsx("option",{children:A},A))})]}):v.jsxs(v.Fragment,{children:[v.jsxs("label",{children:["Separador",v.jsxs("select",{value:un,onChange:A=>Sn(A.target.value),children:[v.jsx("option",{value:",",children:"Coma"}),v.jsx("option",{value:";",children:"Punto y coma"}),v.jsx("option",{value:"	",children:"Tabulación"}),v.jsx("option",{value:"|",children:"Barra"})]})]}),v.jsxs("label",{children:["Codificación",v.jsx("select",{value:En,onChange:A=>Xn(A.target.value),children:["utf-8-sig","utf-8","latin-1","cp1252"].map(A=>v.jsx("option",{children:A},A))})]})]}),v.jsx("button",{className:"button secondary",onClick:()=>si(async()=>{const A=Ke.current,me=l,Ce=await vn("/files/"+Gn+"/options",{sheet:Rt||null,separator:un,encoding:En},"PUT");A===Ke.current&&pt.current.project===me&&ge({...Ce,sheets:Ht.sheets})}),children:"Aplicar lectura"})]}),Ht&&v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"data-stats",children:[v.jsxs("span",{children:[v.jsx("strong",{children:Ht.rows}),"filas"]}),v.jsxs("span",{children:[v.jsx("strong",{children:Ht.columns.length}),"columnas"]}),v.jsxs("span",{children:[v.jsx("strong",{children:Ht.duplicates}),"duplicados conservados"]}),v.jsxs("span",{children:[v.jsx("strong",{children:Ht.columns.reduce((A,me)=>A+me.missing,0)}),"valores faltantes"]})]}),v.jsx("div",{className:"table-scroll",children:v.jsxs("table",{children:[v.jsx("thead",{children:v.jsx("tr",{children:Ht.columns.map(A=>v.jsxs("th",{children:[A.name,v.jsxs("small",{children:[A.type," · ",A.missing," faltantes"]})]},A.name))})}),v.jsx("tbody",{children:Ht.preview.map((A,me)=>v.jsx("tr",{children:Ht.columns.map(Ce=>v.jsx("td",{children:A[Ce.name]===null?v.jsx("em",{children:"Vacío"}):String(A[Ce.name])},Ce.name))},me))})]})}),v.jsx("p",{className:"caption",children:"Vista previa de hasta 12 filas. El original permanece intacto."})]}),It&&v.jsxs("div",{className:"asset-preview",children:[It.kind==="image"?v.jsx("img",{src:Sd($),alt:"Vista previa de "+It.name,loading:"lazy"}):v.jsxs("div",{className:"pdf-preview",children:[v.jsx(Hh,{size:42}),v.jsx("strong",{children:"Documento PDF"}),v.jsx("span",{children:"Descarga el original para verlo o consúltalo con Gemini."})]}),v.jsx("h3",{children:It.name}),v.jsxs("p",{className:"muted",children:[It.mime," · ",yd(It.size),It.width&&It.height?" · "+It.width+" × "+It.height+" px":""]}),v.jsxs("div",{className:"asset-actions",children:[v.jsxs("a",{className:"button secondary",href:Sd($,!0),download:!0,children:[v.jsx(bd,{size:15}),"Descargar original"]}),v.jsxs("button",{className:"button primary",onClick:()=>Ka(C.find(A=>A.id===$)||{id:$,name:It.name,kind:It.kind,size:It.size}),children:[v.jsx(Zc,{size:15}),"Consultar con ",(Ut==null?void 0:Ut.name)||"tu agente"]})]}),v.jsx("p",{className:"caption",children:"El archivo se enviará a Gemini al enviar tu mensaje. Los cálculos con columnas requieren CSV o XLSX."})]})]}),v.jsx("section",{className:"content-card tool-card",children:It?v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"eyebrow",children:"LECTURA CON GEMINI"}),v.jsx("h2",{children:"Consulta tu documento o imagen"}),v.jsx("p",{className:"muted",children:"Adjunta este archivo a una conversación para resumirlo, extraer información o hacer preguntas. Elige qué deseas consultar antes de enviar."}),v.jsx("p",{className:"caption",children:"Para cálculos verificables por columnas, selecciona una tabla CSV o XLSX de la biblioteca."}),v.jsxs("button",{className:"button secondary",onClick:()=>{const A=dn[0];A?si(()=>Os(A.id)):Ze("Sube un CSV o XLSX para usar el modo herramientas.")},children:[v.jsx(Fh,{size:16}),"Elegir una tabla"]})]}):v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"eyebrow",children:"SIN MODELO NECESARIO"}),v.jsx("h2",{children:"Modo herramientas"}),v.jsx("p",{className:"muted",children:"Operaciones explícitas, números calculados por Python y revisión independiente."}),v.jsxs("label",{children:["Objetivo",v.jsx("textarea",{value:Ee,onChange:A=>Re(A.target.value),placeholder:"¿Qué quieres analizar?"})]}),v.jsxs("label",{children:["Agrupar por",v.jsx("select",{"aria-label":"Agrupar por",value:ke,onChange:A=>Te(A.target.value),children:ra})]}),v.jsxs("label",{className:"checkbox",children:[v.jsx("input",{type:"checkbox",checked:Je,onChange:A=>ze(A.target.checked)}),"Calcular ingresos = cantidad × precio"]}),Je?v.jsxs("div",{className:"two-col",children:[v.jsxs("label",{children:["Cantidad",v.jsx("select",{"aria-label":"Cantidad",value:mt,onChange:A=>at(A.target.value),children:ra})]}),v.jsxs("label",{children:["Precio",v.jsx("select",{"aria-label":"Precio",value:Ot,onChange:A=>Y(A.target.value),children:ra})]})]}):v.jsxs("label",{children:["Métrica",v.jsx("select",{"aria-label":"Métrica",value:Ue,onChange:A=>q(A.target.value),children:ra})]}),v.jsxs("div",{className:"two-col",children:[v.jsxs("label",{children:["Operación",v.jsx("select",{value:Ve,onChange:A=>tt(A.target.value),children:[["sum","Suma"],["mean","Media"],["median","Mediana"],["min","Mínimo"],["max","Máximo"],["count","Conteo"]].map(([A,me])=>v.jsx("option",{value:A,children:me},A))})]}),v.jsxs("label",{children:["Unidad",v.jsx("input",{value:Be,onChange:A=>lt(A.target.value)})]})]}),v.jsxs("label",{children:["Filtro opcional · columna",v.jsx("select",{value:Ie,onChange:A=>pe(A.target.value),children:ra})]}),Ie&&v.jsxs("label",{children:["Igual a",v.jsx("input",{value:ve,onChange:A=>Fe(A.target.value)})]}),v.jsxs("label",{children:["Gráfico",v.jsxs("select",{value:Pt,onChange:A=>cn(A.target.value),children:[v.jsx("option",{value:"bar",children:"Barras"}),v.jsx("option",{value:"line",children:"Líneas (confirma orden temporal)"}),v.jsx("option",{value:"none",children:"Sin gráfico"})]})]}),v.jsxs("button",{className:"button primary full",disabled:ee||!Gn||!Je&&!Ue||Je&&(!mt||!Ot),onClick:()=>Ro(!0),children:[v.jsx(Gh,{size:15}),"Preparar plan de cálculo"]}),v.jsx("p",{className:"caption",children:"No es inferencia de IA. Revisa definición, filtros y unidades antes de aprobar."})]})})]}),r==="tasks"&&v.jsxs("div",{className:"tasks-layout",children:[v.jsxs("section",{className:"content-card",children:[v.jsxs("div",{className:"section-title",children:[v.jsx("h2",{children:"Un nuevo objetivo"}),v.jsx("span",{className:"pill",children:"ATLAS · Coordinación"})]}),v.jsx("textarea",{className:"goal-input",placeholder:"Compara ingresos por producto y región, identifica faltantes y prepara un informe…",value:Ee,onChange:A=>Re(A.target.value)}),v.jsxs("div",{className:"plan-bottom",children:[v.jsxs("select",{value:Gn,"aria-label":"Tabla para la tarea",onChange:A=>{Ke.current++,ge(null),oe(A.target.value)},children:[v.jsx("option",{value:"",children:"Sin archivo · organizar proyecto"}),dn.map(A=>v.jsx("option",{value:A.id,children:A.name},A.id))]}),v.jsxs("button",{className:"button primary",disabled:ee||Ee.length<3,onClick:()=>Ro(),children:[ee?v.jsx(u_,{className:"spin",size:16}):v.jsx(Vh,{size:16}),"Proponer plan con API"]})]}),v.jsx("p",{className:"caption",children:"El plan usa el modelo asignado a ATLAS. Sin conexión, puedes usar los controles de Datos."})]}),v.jsxs("section",{className:"content-card",children:[v.jsx("h2",{children:"Planes y ejecuciones"}),!B.length&&v.jsxs("div",{className:"empty-state",children:[v.jsx(Mu,{size:35}),v.jsx("h3",{children:"Tu próximo objetivo empieza aquí"}),v.jsx("p",{children:"Describe una tarea o prepara un cálculo desde Datos."})]}),B.map(A=>{const me=JSON.parse(A.plan);return v.jsxs("article",{className:"run-card",children:[v.jsxs("div",{className:"run-head",children:[v.jsx("h3",{children:A.request}),v.jsx("span",{className:"status "+(A.status==="Completado"?"success":""),children:A.status})]}),v.jsxs("small",{children:["Ejecución ",A.id.slice(0,10)," · ",me.mode==="tools"?"Modo herramientas · sin inferencia":"Plan propuesto mediante API"]}),me.clarification&&v.jsxs("p",{className:"clarification",children:["Se necesita aclaración: ",me.clarification]}),v.jsx("div",{className:"task-chain",children:me.tasks.map(Ce=>{var Qe;return v.jsxs("div",{children:[v.jsx("span",{className:"task-agent",style:{background:((Qe=h.find(ft=>ft.id===Ce.agent))==null?void 0:Qe.color)+"30"},children:Ce.agent.toUpperCase()}),v.jsxs("p",{children:[Ce.description,v.jsx("small",{children:Ce.depends_on.length?"Después de "+Ce.depends_on.join(", "):"Sin dependencias"}),v.jsx("span",{className:"task-current-status",children:vr(A,Ce.id)})]})]},Ce.id)})}),me.analysis&&v.jsxs("details",{children:[v.jsx("summary",{children:"Operaciones y criterios aprobables"}),v.jsx("pre",{children:JSON.stringify(me,null,2)})]}),v.jsxs("div",{className:"run-actions",children:[A.status==="Espera aprobación"&&v.jsxs("button",{className:"button primary",disabled:ee,onClick:()=>si(async()=>{await vn("/runs/"+A.id+"/approve",{}),await Qn()}),children:[v.jsx(Md,{size:15}),"Aprobar y ejecutar"]}),A.status==="Interrumpido"&&v.jsxs("button",{className:"button primary",disabled:ee,onClick:()=>si(async()=>{await vn("/runs/"+A.id+"/resume",{}),await Qn()}),children:[v.jsx(Gh,{size:15}),"Reanudar desde el último paso guardado"]}),!["Completado","Fallido","Cancelado","Interrumpido"].includes(A.status)&&v.jsxs("button",{className:"button secondary",onClick:()=>si(async()=>{await vn("/runs/"+A.id+"/cancel",{}),await Qn()}),children:[v.jsx(d_,{size:14}),"Cancelar"]}),v.jsx("button",{className:"button secondary",onClick:()=>{Le(A.id),Ls("bruno"),e("office"),ln(!0)},children:"Consultar a BRUNO"}),v.jsx("button",{className:"button secondary",disabled:ee||!Ee,onClick:()=>si(async()=>{await vn("/runs/"+A.id+"/correction",{name:Ee.slice(0,120)}),await Qn()}),children:"Solicitar corrección"})]}),A.result&&v.jsxs("div",{className:"result-summary "+(A.status==="Completado"?"":"provisional"),children:[A.status!=="Completado"&&v.jsxs("p",{children:[v.jsxs("strong",{children:["Resultado provisional · ejecución ",A.status.toLowerCase(),"."]})," Las cifras conservadas no constituyen un entregable aprobado."]}),"Estadístico: ",v.jsx("strong",{children:JSON.parse(A.result).total})," · ",JSON.parse(A.result).rows_after," filas analizadas"]})]},A.id)})]})]}),r==="deliverables"&&v.jsxs("section",{className:"content-card",children:[v.jsxs("div",{className:"section-title",children:[v.jsx("h2",{children:"Resultados con evidencia"}),v.jsxs("span",{children:[G.length," archivos generados"]})]}),G.length?v.jsx("div",{className:"artifact-grid",children:G.map(A=>v.jsxs("a",{className:"artifact",href:"/api/artifacts/"+A.id,download:!0,children:[v.jsx("span",{className:"artifact-icon",children:A.name.endsWith(".png")?v.jsx(Mu,{}):v.jsx(Fh,{})}),v.jsxs("div",{children:[v.jsx("strong",{children:A.name}),v.jsxs("small",{children:["Ejecución ",A.run.slice(0,10)," · versión 1"]})]}),v.jsx(bd,{size:17})]},A.id))}):v.jsxs("div",{className:"empty-state",children:[v.jsx(Ed,{size:40}),v.jsx("h3",{children:"Tus entregables tendrán su lugar aquí"}),v.jsx("p",{children:"Ejecuta y verifica un análisis para generar tablas, gráficos e informes."}),v.jsxs("button",{className:"button secondary",onClick:()=>e("data"),children:["Ir a Datos",v.jsx(Sl,{size:15})]})]})]}),r==="settings"&&v.jsxs(v.Fragment,{children:[v.jsx(j2,{agents:h,provider:E,ollama:S,openai:y,onSaved:Us,status:O,onStatus:_r,reduced:T,onReduced:k,onNotice:Ze,onError:et}),v.jsx(k2,{project:l,onNotice:Ze,onError:et,onImported:A=>{s(me=>[...me,A]),aa(A.id),vn("/projects").then(s).catch(me=>et(me.message))}})]})]}),v.jsxs("footer",{className:"app-footer",children:[v.jsxs("span",{children:[v.jsx("span",{className:"live-dot"}),"Tu estudio · datos en el servidor"]}),v.jsxs("span",{children:["Hecho para pensar, crear y colaborar.",v.jsx("span",{className:"footer-star",children:"✧"})]}),v.jsxs("span",{children:["STUDIO DE ANTO ",v.jsx("span",{className:"version",children:"v1.1 · 3D"})]})]})]})]})}aS.createRoot(document.getElementById("root")).render(v.jsx(Qy.StrictMode,{children:v.jsx(X2,{})}));
