var Ny=Object.defineProperty;var Ly=(r,e,i)=>e in r?Ny(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i;var Ii=(r,e,i)=>Ly(r,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Oy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ch={exports:{}},il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0;function Py(){if(E0)return il;E0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return il.Fragment=e,il.jsx=i,il.jsxs=i,il}var b0;function zy(){return b0||(b0=1,ch.exports=Py()),ch.exports}var E=zy(),uh={exports:{}},gt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0;function Iy(){if(T0)return gt;T0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,U={};function x(P,ne,Se){this.props=P,this.context=ne,this.refs=U,this.updater=Se||S}x.prototype.isReactComponent={},x.prototype.setState=function(P,ne){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ne,"setState")},x.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function g(){}g.prototype=x.prototype;function z(P,ne,Se){this.props=P,this.context=ne,this.refs=U,this.updater=Se||S}var N=z.prototype=new g;N.constructor=z,b(N,x.prototype),N.isPureReactComponent=!0;var w=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function G(P,ne,Se,Ae,ee,ge){return Se=ge.ref,{$$typeof:r,type:P,key:ne,ref:Se!==void 0?Se:null,props:ge}}function q(P,ne){return G(P.type,ne,void 0,void 0,void 0,P.props)}function L(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function R(P){var ne={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Se){return ne[Se]})}var j=/\/+/g;function ae(P,ne){return typeof P=="object"&&P!==null&&P.key!=null?R(""+P.key):ne.toString(36)}function re(){}function fe(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(re,re):(P.status="pending",P.then(function(ne){P.status==="pending"&&(P.status="fulfilled",P.value=ne)},function(ne){P.status==="pending"&&(P.status="rejected",P.reason=ne)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function me(P,ne,Se,Ae,ee){var ge=typeof P;(ge==="undefined"||ge==="boolean")&&(P=null);var xe=!1;if(P===null)xe=!0;else switch(ge){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(P.$$typeof){case r:case e:xe=!0;break;case _:return xe=P._init,me(xe(P._payload),ne,Se,Ae,ee)}}if(xe)return ee=ee(P),xe=Ae===""?"."+ae(P,0):Ae,w(ee)?(Se="",xe!=null&&(Se=xe.replace(j,"$&/")+"/"),me(ee,ne,Se,"",function(ut){return ut})):ee!=null&&(L(ee)&&(ee=q(ee,Se+(ee.key==null||P&&P.key===ee.key?"":(""+ee.key).replace(j,"$&/")+"/")+xe)),ne.push(ee)),1;xe=0;var De=Ae===""?".":Ae+":";if(w(P))for(var Le=0;Le<P.length;Le++)Ae=P[Le],ge=De+ae(Ae,Le),xe+=me(Ae,ne,Se,ge,ee);else if(Le=y(P),typeof Le=="function")for(P=Le.call(P),Le=0;!(Ae=P.next()).done;)Ae=Ae.value,ge=De+ae(Ae,Le++),xe+=me(Ae,ne,Se,ge,ee);else if(ge==="object"){if(typeof P.then=="function")return me(fe(P),ne,Se,Ae,ee);throw ne=String(P),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return xe}function H(P,ne,Se){if(P==null)return P;var Ae=[],ee=0;return me(P,Ae,"","",function(ge){return ne.call(Se,ge,ee++)}),Ae}function K(P){if(P._status===-1){var ne=P._result;ne=ne(),ne.then(function(Se){(P._status===0||P._status===-1)&&(P._status=1,P._result=Se)},function(Se){(P._status===0||P._status===-1)&&(P._status=2,P._result=Se)}),P._status===-1&&(P._status=0,P._result=ne)}if(P._status===1)return P._result.default;throw P._result}var Z=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Te(){}return gt.Children={map:H,forEach:function(P,ne,Se){H(P,function(){ne.apply(this,arguments)},Se)},count:function(P){var ne=0;return H(P,function(){ne++}),ne},toArray:function(P){return H(P,function(ne){return ne})||[]},only:function(P){if(!L(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},gt.Component=x,gt.Fragment=i,gt.Profiler=l,gt.PureComponent=z,gt.StrictMode=s,gt.Suspense=p,gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,gt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return F.H.useMemoCache(P)}},gt.cache=function(P){return function(){return P.apply(null,arguments)}},gt.cloneElement=function(P,ne,Se){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ae=b({},P.props),ee=P.key,ge=void 0;if(ne!=null)for(xe in ne.ref!==void 0&&(ge=void 0),ne.key!==void 0&&(ee=""+ne.key),ne)!B.call(ne,xe)||xe==="key"||xe==="__self"||xe==="__source"||xe==="ref"&&ne.ref===void 0||(Ae[xe]=ne[xe]);var xe=arguments.length-2;if(xe===1)Ae.children=Se;else if(1<xe){for(var De=Array(xe),Le=0;Le<xe;Le++)De[Le]=arguments[Le+2];Ae.children=De}return G(P.type,ee,void 0,void 0,ge,Ae)},gt.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},gt.createElement=function(P,ne,Se){var Ae,ee={},ge=null;if(ne!=null)for(Ae in ne.key!==void 0&&(ge=""+ne.key),ne)B.call(ne,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(ee[Ae]=ne[Ae]);var xe=arguments.length-2;if(xe===1)ee.children=Se;else if(1<xe){for(var De=Array(xe),Le=0;Le<xe;Le++)De[Le]=arguments[Le+2];ee.children=De}if(P&&P.defaultProps)for(Ae in xe=P.defaultProps,xe)ee[Ae]===void 0&&(ee[Ae]=xe[Ae]);return G(P,ge,void 0,void 0,null,ee)},gt.createRef=function(){return{current:null}},gt.forwardRef=function(P){return{$$typeof:d,render:P}},gt.isValidElement=L,gt.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:K}},gt.memo=function(P,ne){return{$$typeof:m,type:P,compare:ne===void 0?null:ne}},gt.startTransition=function(P){var ne=F.T,Se={};F.T=Se;try{var Ae=P(),ee=F.S;ee!==null&&ee(Se,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(Te,Z)}catch(ge){Z(ge)}finally{F.T=ne}},gt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},gt.use=function(P){return F.H.use(P)},gt.useActionState=function(P,ne,Se){return F.H.useActionState(P,ne,Se)},gt.useCallback=function(P,ne){return F.H.useCallback(P,ne)},gt.useContext=function(P){return F.H.useContext(P)},gt.useDebugValue=function(){},gt.useDeferredValue=function(P,ne){return F.H.useDeferredValue(P,ne)},gt.useEffect=function(P,ne,Se){var Ae=F.H;if(typeof Se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Ae.useEffect(P,ne)},gt.useId=function(){return F.H.useId()},gt.useImperativeHandle=function(P,ne,Se){return F.H.useImperativeHandle(P,ne,Se)},gt.useInsertionEffect=function(P,ne){return F.H.useInsertionEffect(P,ne)},gt.useLayoutEffect=function(P,ne){return F.H.useLayoutEffect(P,ne)},gt.useMemo=function(P,ne){return F.H.useMemo(P,ne)},gt.useOptimistic=function(P,ne){return F.H.useOptimistic(P,ne)},gt.useReducer=function(P,ne,Se){return F.H.useReducer(P,ne,Se)},gt.useRef=function(P){return F.H.useRef(P)},gt.useState=function(P){return F.H.useState(P)},gt.useSyncExternalStore=function(P,ne,Se){return F.H.useSyncExternalStore(P,ne,Se)},gt.useTransition=function(){return F.H.useTransition()},gt.version="19.1.0",gt}var A0;function Bd(){return A0||(A0=1,uh.exports=Iy()),uh.exports}var Ne=Bd();const By=Oy(Ne);var fh={exports:{}},al={},hh={exports:{}},dh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0;function Fy(){return R0||(R0=1,(function(r){function e(H,K){var Z=H.length;H.push(K);e:for(;0<Z;){var Te=Z-1>>>1,P=H[Te];if(0<l(P,K))H[Te]=K,H[Z]=P,Z=Te;else break e}}function i(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var K=H[0],Z=H.pop();if(Z!==K){H[0]=Z;e:for(var Te=0,P=H.length,ne=P>>>1;Te<ne;){var Se=2*(Te+1)-1,Ae=H[Se],ee=Se+1,ge=H[ee];if(0>l(Ae,Z))ee<P&&0>l(ge,Ae)?(H[Te]=ge,H[ee]=Z,Te=ee):(H[Te]=Ae,H[Se]=Z,Te=Se);else if(ee<P&&0>l(ge,Z))H[Te]=ge,H[ee]=Z,Te=ee;else break e}}return K}function l(H,K){var Z=H.sortIndex-K.sortIndex;return Z!==0?Z:H.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var p=[],m=[],_=1,v=null,y=3,S=!1,b=!1,U=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function w(H){for(var K=i(m);K!==null;){if(K.callback===null)s(m);else if(K.startTime<=H)s(m),K.sortIndex=K.expirationTime,e(p,K);else break;K=i(m)}}function F(H){if(U=!1,w(H),!b)if(i(p)!==null)b=!0,B||(B=!0,ae());else{var K=i(m);K!==null&&me(F,K.startTime-H)}}var B=!1,G=-1,q=5,L=-1;function R(){return x?!0:!(r.unstable_now()-L<q)}function j(){if(x=!1,B){var H=r.unstable_now();L=H;var K=!0;try{e:{b=!1,U&&(U=!1,z(G),G=-1),S=!0;var Z=y;try{t:{for(w(H),v=i(p);v!==null&&!(v.expirationTime>H&&R());){var Te=v.callback;if(typeof Te=="function"){v.callback=null,y=v.priorityLevel;var P=Te(v.expirationTime<=H);if(H=r.unstable_now(),typeof P=="function"){v.callback=P,w(H),K=!0;break t}v===i(p)&&s(p),w(H)}else s(p);v=i(p)}if(v!==null)K=!0;else{var ne=i(m);ne!==null&&me(F,ne.startTime-H),K=!1}}break e}finally{v=null,y=Z,S=!1}K=void 0}}finally{K?ae():B=!1}}}var ae;if(typeof N=="function")ae=function(){N(j)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,fe=re.port2;re.port1.onmessage=j,ae=function(){fe.postMessage(null)}}else ae=function(){g(j,0)};function me(H,K){G=g(function(){H(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(H){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var Z=y;y=K;try{return H()}finally{y=Z}},r.unstable_requestPaint=function(){x=!0},r.unstable_runWithPriority=function(H,K){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Z=y;y=H;try{return K()}finally{y=Z}},r.unstable_scheduleCallback=function(H,K,Z){var Te=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Te+Z:Te):Z=Te,H){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=Z+P,H={id:_++,callback:K,priorityLevel:H,startTime:Z,expirationTime:P,sortIndex:-1},Z>Te?(H.sortIndex=Z,e(m,H),i(p)===null&&H===i(m)&&(U?(z(G),G=-1):U=!0,me(F,Z-Te))):(H.sortIndex=P,e(p,H),b||S||(b=!0,B||(B=!0,ae()))),H},r.unstable_shouldYield=R,r.unstable_wrapCallback=function(H){var K=y;return function(){var Z=y;y=K;try{return H.apply(this,arguments)}finally{y=Z}}}})(dh)),dh}var C0;function Hy(){return C0||(C0=1,hh.exports=Fy()),hh.exports}var ph={exports:{}},Yn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0;function Gy(){if(w0)return Yn;w0=1;var r=Bd();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Yn.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,_)},Yn.flushSync=function(p){var m=h.T,_=s.p;try{if(h.T=null,s.p=2,p)return p()}finally{h.T=m,s.p=_,s.d.f()}},Yn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Yn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Yn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:S}):_==="script"&&s.d.X(p,{crossOrigin:v,integrity:y,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Yn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Yn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin);s.d.L(p,_,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Yn.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=d(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Yn.requestFormReset=function(p){s.d.r(p)},Yn.unstable_batchedUpdates=function(p,m){return p(m)},Yn.useFormState=function(p,m,_){return h.H.useFormState(p,m,_)},Yn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Yn.version="19.1.0",Yn}var D0;function Vy(){if(D0)return ph.exports;D0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ph.exports=Gy(),ph.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function ky(){if(U0)return al;U0=1;var r=Hy(),e=Bd(),i=Vy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),t;if(f===o)return d(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var M=!1,A=u.child;A;){if(A===a){M=!0,a=u,o=f;break}if(A===o){M=!0,o=u,a=f;break}A=A.sibling}if(!M){for(A=f.child;A;){if(A===a){M=!0,a=f,o=u;break}if(A===o){M=!0,o=f,a=u;break}A=A.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),N=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var re=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===re?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case x:return"Profiler";case U:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case N:return(t.displayName||"Context")+".Provider";case z:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case G:return n=t.displayName||null,n!==null?n:fe(t.type)||"Memo";case q:n=t._payload,t=t._init;try{return fe(t(n))}catch{}}return null}var me=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Te=[],P=-1;function ne(t){return{current:t}}function Se(t){0>P||(t.current=Te[P],Te[P]=null,P--)}function Ae(t,n){P++,Te[P]=t.current,t.current=n}var ee=ne(null),ge=ne(null),xe=ne(null),De=ne(null);function Le(t,n){switch(Ae(xe,n),Ae(ge,t),Ae(ee,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Qg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Qg(n),t=Jg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Se(ee),Ae(ee,t)}function ut(){Se(ee),Se(ge),Se(xe)}function Ke(t){t.memoizedState!==null&&Ae(De,t);var n=ee.current,a=Jg(n,t.type);n!==a&&(Ae(ge,t),Ae(ee,a))}function ft(t){ge.current===t&&(Se(ee),Se(ge)),De.current===t&&(Se(De),Jo._currentValue=Z)}var zt=Object.prototype.hasOwnProperty,nt=r.unstable_scheduleCallback,k=r.unstable_cancelCallback,on=r.unstable_shouldYield,pt=r.unstable_requestPaint,it=r.unstable_now,Ye=r.unstable_getCurrentPriorityLevel,Ut=r.unstable_ImmediatePriority,he=r.unstable_UserBlockingPriority,C=r.unstable_NormalPriority,T=r.unstable_LowPriority,Y=r.unstable_IdlePriority,pe=r.log,Ee=r.unstable_setDisableYieldValue,I=null,Ue=null;function Ce(t){if(typeof pe=="function"&&Ee(t),Ue&&typeof Ue.setStrictMode=="function")try{Ue.setStrictMode(I,t)}catch{}}var je=Math.clz32?Math.clz32:He,Qe=Math.log,we=Math.LN2;function He(t){return t>>>=0,t===0?32:31-(Qe(t)/we|0)|0}var Je=256,qe=4194304;function Ve(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ot(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Ve(o):(M&=A,M!==0?u=Ve(M):a||(a=A&~t,a!==0&&(u=Ve(a))))):(A=o&~f,A!==0?u=Ve(A):M!==0?u=Ve(M):a||(a=o&~t,a!==0&&(u=Ve(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function at(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function wt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=Je;return Je<<=1,(Je&4194048)===0&&(Je=256),t}function Oe(){var t=qe;return qe<<=1,(qe&62914560)===0&&(qe=4194304),t}function de(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ge(t,n,a,o,u,f){var M=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,V=t.expirationTimes,se=t.hiddenUpdates;for(a=M&~a;0<a;){var _e=31-je(a),Me=1<<_e;A[_e]=0,V[_e]=-1;var oe=se[_e];if(oe!==null)for(se[_e]=null,_e=0;_e<oe.length;_e++){var ue=oe[_e];ue!==null&&(ue.lane&=-536870913)}a&=~Me}o!==0&&Be(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(M&~n))}function Be(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-je(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function lt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-je(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Ot(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $t(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Nt(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:_0(t.type))}function jn(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var pn=Math.random().toString(36).slice(2),mn="__reactFiber$"+pn,xn="__reactProps$"+pn,Xn="__reactContainer$"+pn,Ri="__reactEvents$"+pn,ga="__reactListeners$"+pn,_a="__reactHandles$"+pn,fi="__reactResources$"+pn,ta="__reactMarker$"+pn;function hi(t){delete t[mn],delete t[xn],delete t[Ri],delete t[ga],delete t[_a]}function di(t){var n=t[mn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Xn]||a[mn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=n0(t);t!==null;){if(a=t[mn])return a;t=n0(t)}return n}t=a,a=t.parentNode}return null}function ni(t){if(t=t[mn]||t[Xn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function va(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Hi(t){var n=t[fi];return n||(n=t[fi]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Gt(t){t[ta]=!0}var As=new Set,or={};function pi(t,n){D(t,n),D(t+"Capture",n)}function D(t,n){for(or[t]=n,t=0;t<n.length;t++)As.add(n[t])}var Q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),le={},ce={};function J(t){return zt.call(ce,t)?!0:zt.call(le,t)?!1:Q.test(t)?ce[t]=!0:(le[t]=!0,!1)}function be(t,n,a){if(J(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ze(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Pe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var Xe,Ze;function tt(t){if(Xe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Xe=n&&n[1]||"",Ze=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xe+t+Ze}var Ie=!1;function mt(t,n){if(!t||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(ue){var oe=ue}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(ue){oe=ue}t.call(Me.prototype)}}else{try{throw Error()}catch(ue){oe=ue}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(ue){if(ue&&oe&&typeof ue.stack=="string")return[ue.stack,oe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),M=f[0],A=f[1];if(M&&A){var V=M.split(`
`),se=A.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<se.length&&!se[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===se.length)for(o=V.length-1,u=se.length-1;1<=o&&0<=u&&V[o]!==se[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==se[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==se[u]){var _e=`
`+V[o].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=o&&0<=u);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?tt(a):""}function bt(t){switch(t.tag){case 26:case 27:case 5:return tt(t.type);case 16:return tt("Lazy");case 13:return tt("Suspense");case 19:return tt("SuspenseList");case 0:case 15:return mt(t.type,!1);case 11:return mt(t.type.render,!1);case 1:return mt(t.type,!0);case 31:return tt("Activity");default:return""}}function sn(t){try{var n="";do n+=bt(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function vt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function St(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(t){var n=St(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,f.call(this,M)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function en(t){t._valueTracker||(t._valueTracker=$e(t))}function Dt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=St(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Tn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var mi=/[\n"\\]/g;function Vt(t){return t.replace(mi,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function An(t,n,a,o,u,f,M,A){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+vt(n)):t.value!==""+vt(n)&&(t.value=""+vt(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?Rn(t,M,vt(n)):a!=null?Rn(t,M,vt(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+vt(A):t.removeAttribute("name")}function Lt(t,n,a,o,u,f,M,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+vt(a):"",n=n!=null?""+vt(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function Rn(t,n,a){n==="number"&&Tn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function cn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+vt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function gn(t,n,a){if(n!=null&&(n=""+vt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+vt(a):""}function yn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(me(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=vt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function Jn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ci=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function El(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ci.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function bl(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&El(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&El(t,f,n[f])}function lr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rs=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tl=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function O(t){return Tl.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Re=null;function Fe(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ht=null,Tt=null;function Qt(t){var n=ni(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;e:switch(t=n.stateNode,n.type){case"input":if(An(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[xn]||null;if(!u)throw Error(s(90));An(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Dt(o)}break e;case"textarea":gn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&cn(t,!!a.multiple,n,!1)}}}var Cn=!1;function ja(t,n,a){if(Cn)return t(n,a);Cn=!0;try{var o=t(n);return o}finally{if(Cn=!1,(ht!==null||Tt!==null)&&(rc(),ht&&(n=ht,t=Tt,Tt=ht=null,Qt(n),t)))for(n=0;n<t.length;n++)Qt(t[n])}}function xa(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cr=!1;if(gi)try{var Xa={};Object.defineProperty(Xa,"passive",{get:function(){cr=!0}}),window.addEventListener("test",Xa,Xa),window.removeEventListener("test",Xa,Xa)}catch{cr=!1}var Gi=null,ur=null,un=null;function wi(){if(un)return un;var t,n=ur,a=n.length,o,u="value"in Gi?Gi.value:Gi.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var M=a-t;for(o=1;o<=M&&n[a-o]===u[f-o];o++);return un=u.slice(t,1<o?1-o:void 0)}function ii(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function na(){return!0}function fr(){return!1}function qn(t){function n(a,o,u,f,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?na:fr,this.isPropagationStopped=fr,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),n}var Vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cs=qn(Vi),wn=_({},Vi,{view:0,detail:0}),ya=qn(wn),du,pu,po,Al=_({},wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(du=t.screenX-po.screenX,pu=t.screenY-po.screenY):pu=du=0,po=t),du)},movementY:function(t){return"movementY"in t?t.movementY:pu}}),ip=qn(Al),Lv=_({},Al,{dataTransfer:0}),Ov=qn(Lv),Pv=_({},wn,{relatedTarget:0}),mu=qn(Pv),zv=_({},Vi,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=qn(zv),Bv=_({},Vi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fv=qn(Bv),Hv=_({},Vi,{data:0}),ap=qn(Hv),Gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=kv[t])?!!n[t]:!1}function gu(){return jv}var Xv=_({},wn,{key:function(t){if(t.key){var n=Gv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ii(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(t){return t.type==="keypress"?ii(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ii(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qv=qn(Xv),Wv=_({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sp=qn(Wv),Yv=_({},wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),Zv=qn(Yv),Kv=_({},Vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qv=qn(Kv),Jv=_({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$v=qn(Jv),ex=_({},Vi,{newState:0,oldState:0}),tx=qn(ex),nx=[9,13,27,32],_u=gi&&"CompositionEvent"in window,mo=null;gi&&"documentMode"in document&&(mo=document.documentMode);var ix=gi&&"TextEvent"in window&&!mo,rp=gi&&(!_u||mo&&8<mo&&11>=mo),op=" ",lp=!1;function cp(t,n){switch(t){case"keyup":return nx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hr=!1;function ax(t,n){switch(t){case"compositionend":return up(n);case"keypress":return n.which!==32?null:(lp=!0,op);case"textInput":return t=n.data,t===op&&lp?null:t;default:return null}}function sx(t,n){if(hr)return t==="compositionend"||!_u&&cp(t,n)?(t=wi(),un=ur=Gi=null,hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rp&&n.locale!=="ko"?null:n.data;default:return null}}var rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!rx[t.type]:n==="textarea"}function hp(t,n,a,o){ht?Tt?Tt.push(o):Tt=[o]:ht=o,n=hc(n,"onChange"),0<n.length&&(a=new Cs("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var go=null,_o=null;function ox(t){qg(t,0)}function Rl(t){var n=va(t);if(Dt(n))return t}function dp(t,n){if(t==="change")return n}var pp=!1;if(gi){var vu;if(gi){var xu="oninput"in document;if(!xu){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),xu=typeof mp.oninput=="function"}vu=xu}else vu=!1;pp=vu&&(!document.documentMode||9<document.documentMode)}function gp(){go&&(go.detachEvent("onpropertychange",_p),_o=go=null)}function _p(t){if(t.propertyName==="value"&&Rl(_o)){var n=[];hp(n,_o,t,Fe(t)),ja(ox,n)}}function lx(t,n,a){t==="focusin"?(gp(),go=n,_o=a,go.attachEvent("onpropertychange",_p)):t==="focusout"&&gp()}function cx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rl(_o)}function ux(t,n){if(t==="click")return Rl(n)}function fx(t,n){if(t==="input"||t==="change")return Rl(n)}function hx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var _i=typeof Object.is=="function"?Object.is:hx;function vo(t,n){if(_i(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!zt.call(n,u)||!_i(t[u],n[u]))return!1}return!0}function vp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xp(t,n){var a=vp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vp(a)}}function yp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?yp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Sp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Tn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Tn(t.document)}return n}function yu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var dx=gi&&"documentMode"in document&&11>=document.documentMode,dr=null,Su=null,xo=null,Mu=!1;function Mp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mu||dr==null||dr!==Tn(o)||(o=dr,"selectionStart"in o&&yu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),xo&&vo(xo,o)||(xo=o,o=hc(Su,"onSelect"),0<o.length&&(n=new Cs("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=dr)))}function ws(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var pr={animationend:ws("Animation","AnimationEnd"),animationiteration:ws("Animation","AnimationIteration"),animationstart:ws("Animation","AnimationStart"),transitionrun:ws("Transition","TransitionRun"),transitionstart:ws("Transition","TransitionStart"),transitioncancel:ws("Transition","TransitionCancel"),transitionend:ws("Transition","TransitionEnd")},Eu={},Ep={};gi&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function Ds(t){if(Eu[t])return Eu[t];if(!pr[t])return t;var n=pr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ep)return Eu[t]=n[a];return t}var bp=Ds("animationend"),Tp=Ds("animationiteration"),Ap=Ds("animationstart"),px=Ds("transitionrun"),mx=Ds("transitionstart"),gx=Ds("transitioncancel"),Rp=Ds("transitionend"),Cp=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function ki(t,n){Cp.set(t,n),pi(n,[t])}var wp=new WeakMap;function Di(t,n){if(typeof t=="object"&&t!==null){var a=wp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:sn(n)},wp.set(t,n),n)}return{value:t,source:n,stack:sn(n)}}var Ui=[],mr=0,Tu=0;function Cl(){for(var t=mr,n=Tu=mr=0;n<t;){var a=Ui[n];Ui[n++]=null;var o=Ui[n];Ui[n++]=null;var u=Ui[n];Ui[n++]=null;var f=Ui[n];if(Ui[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}f!==0&&Dp(a,u,f)}}function wl(t,n,a,o){Ui[mr++]=t,Ui[mr++]=n,Ui[mr++]=a,Ui[mr++]=o,Tu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Au(t,n,a,o){return wl(t,n,a,o),Dl(t)}function gr(t,n){return wl(t,null,null,n),Dl(t)}function Dp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-je(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Dl(t){if(50<jo)throw jo=0,Lf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var _r={};function _x(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(t,n,a,o){return new _x(t,n,a,o)}function Ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sa(t,n){var a=t.alternate;return a===null?(a=vi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Up(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ul(t,n,a,o,u,f){var M=0;if(o=t,typeof t=="function")Ru(t)&&(M=1);else if(typeof t=="string")M=xy(t,a,ee.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=vi(31,a,n,u),t.elementType=L,t.lanes=f,t;case b:return Us(a.children,u,f,n);case U:M=8,u|=24;break;case x:return t=vi(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case F:return t=vi(13,a,n,u),t.elementType=F,t.lanes=f,t;case B:return t=vi(19,a,n,u),t.elementType=B,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case g:case N:M=10;break e;case z:M=9;break e;case w:M=11;break e;case G:M=14;break e;case q:M=16,o=null;break e}M=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=vi(M,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function Us(t,n,a,o){return t=vi(7,t,o,n),t.lanes=a,t}function Cu(t,n,a){return t=vi(6,t,null,n),t.lanes=a,t}function wu(t,n,a){return n=vi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var vr=[],xr=0,Nl=null,Ll=0,Ni=[],Li=0,Ns=null,Ma=1,Ea="";function Ls(t,n){vr[xr++]=Ll,vr[xr++]=Nl,Nl=t,Ll=n}function Np(t,n,a){Ni[Li++]=Ma,Ni[Li++]=Ea,Ni[Li++]=Ns,Ns=t;var o=Ma;t=Ea;var u=32-je(o)-1;o&=~(1<<u),a+=1;var f=32-je(n)+u;if(30<f){var M=u-u%5;f=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Ma=1<<32-je(n)+u|a<<u|o,Ea=f+t}else Ma=1<<f|a<<u|o,Ea=t}function Du(t){t.return!==null&&(Ls(t,1),Np(t,1,0))}function Uu(t){for(;t===Nl;)Nl=vr[--xr],vr[xr]=null,Ll=vr[--xr],vr[xr]=null;for(;t===Ns;)Ns=Ni[--Li],Ni[Li]=null,Ea=Ni[--Li],Ni[Li]=null,Ma=Ni[--Li],Ni[Li]=null}var $n=null,fn=null,Ft=!1,Os=null,ia=!1,Nu=Error(s(519));function Ps(t){var n=Error(s(418,""));throw Mo(Di(n,t)),Nu}function Lp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[mn]=t,n[xn]=o,a){case"dialog":Rt("cancel",n),Rt("close",n);break;case"iframe":case"object":case"embed":Rt("load",n);break;case"video":case"audio":for(a=0;a<qo.length;a++)Rt(qo[a],n);break;case"source":Rt("error",n);break;case"img":case"image":case"link":Rt("error",n),Rt("load",n);break;case"details":Rt("toggle",n);break;case"input":Rt("invalid",n),Lt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),en(n);break;case"select":Rt("invalid",n);break;case"textarea":Rt("invalid",n),yn(n,o.value,o.defaultValue,o.children),en(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Kg(n.textContent,a)?(o.popover!=null&&(Rt("beforetoggle",n),Rt("toggle",n)),o.onScroll!=null&&Rt("scroll",n),o.onScrollEnd!=null&&Rt("scrollend",n),o.onClick!=null&&(n.onclick=dc),n=!0):n=!1,n||Ps(t)}function Op(t){for($n=t.return;$n;)switch($n.tag){case 5:case 13:ia=!1;return;case 27:case 3:ia=!0;return;default:$n=$n.return}}function yo(t){if(t!==$n)return!1;if(!Ft)return Op(t),Ft=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Zf(t.type,t.memoizedProps)),a=!a),a&&fn&&Ps(t),Op(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){fn=Xi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}fn=null}}else n===27?(n=fn,os(t.type)?(t=$f,$f=null,fn=t):fn=n):fn=$n?Xi(t.stateNode.nextSibling):null;return!0}function So(){fn=$n=null,Ft=!1}function Pp(){var t=Os;return t!==null&&(ri===null?ri=t:ri.push.apply(ri,t),Os=null),t}function Mo(t){Os===null?Os=[t]:Os.push(t)}var Lu=ne(null),zs=null,ba=null;function qa(t,n,a){Ae(Lu,n._currentValue),n._currentValue=a}function Ta(t){t._currentValue=Lu.current,Se(Lu)}function Ou(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Pu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var M=u.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=u;for(var V=0;V<n.length;V++)if(A.context===n[V]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Ou(f.return,a,t),o||(M=null);break e}f=A.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),Ou(M,a,t),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===t){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Eo(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var A=u.type;_i(u.pendingProps.value,M.value)||(t!==null?t.push(A):t=[A])}}else if(u===De.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Jo):t=[Jo])}u=u.return}t!==null&&Pu(n,t,a,o),n.flags|=262144}function Ol(t){for(t=t.firstContext;t!==null;){if(!_i(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Is(t){zs=t,ba=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Wn(t){return zp(zs,t)}function Pl(t,n){return zs===null&&Is(t),zp(t,n)}function zp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ba===null){if(t===null)throw Error(s(308));ba=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ba=ba.next=n;return a}var vx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},xx=r.unstable_scheduleCallback,yx=r.unstable_NormalPriority,Dn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zu(){return{controller:new vx,data:new Map,refCount:0}}function bo(t){t.refCount--,t.refCount===0&&xx(yx,function(){t.controller.abort()})}var To=null,Iu=0,yr=0,Sr=null;function Sx(t,n){if(To===null){var a=To=[];Iu=0,yr=Hf(),Sr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Iu++,n.then(Ip,Ip),n}function Ip(){if(--Iu===0&&To!==null){Sr!==null&&(Sr.status="fulfilled");var t=To;To=null,yr=0,Sr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Mx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Bp=H.S;H.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Sx(t,n),Bp!==null&&Bp(t,n)};var Bs=ne(null);function Bu(){var t=Bs.current;return t!==null?t:tn.pooledCache}function zl(t,n){n===null?Ae(Bs,Bs.current):Ae(Bs,n.pool)}function Fp(){var t=Bu();return t===null?null:{parent:Dn._currentValue,pool:t}}var Ao=Error(s(460)),Hp=Error(s(474)),Il=Error(s(542)),Fu={then:function(){}};function Gp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Bl(){}function Vp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Bl,Bl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,jp(t),t;default:if(typeof n.status=="string")n.then(Bl,Bl);else{if(t=tn,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,jp(t),t}throw Ro=n,Ao}}var Ro=null;function kp(){if(Ro===null)throw Error(s(459));var t=Ro;return Ro=null,t}function jp(t){if(t===Ao||t===Il)throw Error(s(483))}var Wa=!1;function Hu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ya(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Za(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(jt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Dl(t),Dp(t,null,a),n}return wl(t,o,n,a),Dl(t)}function Co(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,lt(t,a)}}function Vu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var ku=!1;function wo(){if(ku){var t=Sr;if(t!==null)throw t}}function Do(t,n,a,o){ku=!1;var u=t.updateQueue;Wa=!1;var f=u.firstBaseUpdate,M=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var V=A,se=V.next;V.next=null,M===null?f=se:M.next=se,M=V;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,A=_e.lastBaseUpdate,A!==M&&(A===null?_e.firstBaseUpdate=se:A.next=se,_e.lastBaseUpdate=V))}if(f!==null){var Me=u.baseState;M=0,_e=se=V=null,A=f;do{var oe=A.lane&-536870913,ue=oe!==A.lane;if(ue?(Pt&oe)===oe:(o&oe)===oe){oe!==0&&oe===yr&&(ku=!0),_e!==null&&(_e=_e.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var ct=t,st=A;oe=n;var Yt=a;switch(st.tag){case 1:if(ct=st.payload,typeof ct=="function"){Me=ct.call(Yt,Me,oe);break e}Me=ct;break e;case 3:ct.flags=ct.flags&-65537|128;case 0:if(ct=st.payload,oe=typeof ct=="function"?ct.call(Yt,Me,oe):ct,oe==null)break e;Me=_({},Me,oe);break e;case 2:Wa=!0}}oe=A.callback,oe!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[oe]:ue.push(oe))}else ue={lane:oe,tag:A.tag,payload:A.payload,callback:A.callback,next:null},_e===null?(se=_e=ue,V=Me):_e=_e.next=ue,M|=oe;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ue=A,A=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);_e===null&&(V=Me),u.baseState=V,u.firstBaseUpdate=se,u.lastBaseUpdate=_e,f===null&&(u.shared.lanes=0),is|=M,t.lanes=M,t.memoizedState=Me}}function Xp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function qp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Xp(a[t],n)}var Mr=ne(null),Fl=ne(0);function Wp(t,n){t=Na,Ae(Fl,t),Ae(Mr,n),Na=t|n.baseLanes}function ju(){Ae(Fl,Na),Ae(Mr,Mr.current)}function Xu(){Na=Fl.current,Se(Mr),Se(Fl)}var Ka=0,yt=null,qt=null,Sn=null,Hl=!1,Er=!1,Fs=!1,Gl=0,Uo=0,br=null,Ex=0;function _n(){throw Error(s(321))}function qu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!_i(t[a],n[a]))return!1;return!0}function Wu(t,n,a,o,u,f){return Ka=f,yt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=t===null||t.memoizedState===null?Dm:Um,Fs=!1,f=a(o,u),Fs=!1,Er&&(f=Zp(n,a,o,u)),Yp(t),f}function Yp(t){H.H=Wl;var n=qt!==null&&qt.next!==null;if(Ka=0,Sn=qt=yt=null,Hl=!1,Uo=0,br=null,n)throw Error(s(300));t===null||zn||(t=t.dependencies,t!==null&&Ol(t)&&(zn=!0))}function Zp(t,n,a,o){yt=t;var u=0;do{if(Er&&(br=null),Uo=0,Er=!1,25<=u)throw Error(s(301));if(u+=1,Sn=qt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}H.H=Dx,f=n(a,o)}while(Er);return f}function bx(){var t=H.H,n=t.useState()[0];return n=typeof n.then=="function"?No(n):n,t=t.useState()[0],(qt!==null?qt.memoizedState:null)!==t&&(yt.flags|=1024),n}function Yu(){var t=Gl!==0;return Gl=0,t}function Zu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ku(t){if(Hl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Hl=!1}Ka=0,Sn=qt=yt=null,Er=!1,Uo=Gl=0,br=null}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?yt.memoizedState=Sn=t:Sn=Sn.next=t,Sn}function Mn(){if(qt===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var n=Sn===null?yt.memoizedState:Sn.next;if(n!==null)Sn=n,qt=t;else{if(t===null)throw yt.alternate===null?Error(s(467)):Error(s(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},Sn===null?yt.memoizedState=Sn=t:Sn=Sn.next=t}return Sn}function Qu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(t){var n=Uo;return Uo+=1,br===null&&(br=[]),t=Vp(br,t,n),n=yt,(Sn===null?n.memoizedState:Sn.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?Dm:Um),t}function Vl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return No(t);if(t.$$typeof===N)return Wn(t)}throw Error(s(438,String(t)))}function Ju(t){var n=null,a=yt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=yt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Qu(),yt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=R;return n.index++,a}function Aa(t,n){return typeof n=="function"?n(t):n}function kl(t){var n=Mn();return $u(n,qt,t)}function $u(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var M=u.next;u.next=f.next,f.next=M}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var A=M=null,V=null,se=n,_e=!1;do{var Me=se.lane&-536870913;if(Me!==se.lane?(Pt&Me)===Me:(Ka&Me)===Me){var oe=se.revertLane;if(oe===0)V!==null&&(V=V.next={lane:0,revertLane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),Me===yr&&(_e=!0);else if((Ka&oe)===oe){se=se.next,oe===yr&&(_e=!0);continue}else Me={lane:0,revertLane:se.revertLane,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},V===null?(A=V=Me,M=f):V=V.next=Me,yt.lanes|=oe,is|=oe;Me=se.action,Fs&&a(f,Me),f=se.hasEagerState?se.eagerState:a(f,Me)}else oe={lane:Me,revertLane:se.revertLane,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},V===null?(A=V=oe,M=f):V=V.next=oe,yt.lanes|=Me,is|=Me;se=se.next}while(se!==null&&se!==n);if(V===null?M=f:V.next=A,!_i(f,t.memoizedState)&&(zn=!0,_e&&(a=Sr,a!==null)))throw a;t.memoizedState=f,t.baseState=M,t.baseQueue=V,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function ef(t){var n=Mn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do f=t(f,M.action),M=M.next;while(M!==u);_i(f,n.memoizedState)||(zn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Kp(t,n,a){var o=yt,u=Mn(),f=Ft;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!_i((qt||u).memoizedState,a);M&&(u.memoizedState=a,zn=!0),u=u.queue;var A=$p.bind(null,o,u,t);if(Lo(2048,8,A,[t]),u.getSnapshot!==n||M||Sn!==null&&Sn.memoizedState.tag&1){if(o.flags|=2048,Tr(9,jl(),Jp.bind(null,o,u,a,n),null),tn===null)throw Error(s(349));f||(Ka&124)!==0||Qp(o,n,a)}return a}function Qp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=yt.updateQueue,n===null?(n=Qu(),yt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Jp(t,n,a,o){n.value=a,n.getSnapshot=o,em(n)&&tm(t)}function $p(t,n,a){return a(function(){em(n)&&tm(t)})}function em(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!_i(t,a)}catch{return!0}}function tm(t){var n=gr(t,2);n!==null&&Ei(n,t,2)}function tf(t){var n=ai();if(typeof t=="function"){var a=t;if(t=a(),Fs){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:t},n}function nm(t,n,a,o){return t.baseState=a,$u(t,qt,typeof o=="function"?o:Aa)}function Tx(t,n,a,o,u){if(ql(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};H.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,im(n,f)):(f.next=a.next,n.pending=a.next=f)}}function im(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=H.T,M={};H.T=M;try{var A=a(u,o),V=H.S;V!==null&&V(M,A),am(t,n,A)}catch(se){nf(t,n,se)}finally{H.T=f}}else try{f=a(u,o),am(t,n,f)}catch(se){nf(t,n,se)}}function am(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){sm(t,n,o)},function(o){return nf(t,n,o)}):sm(t,n,a)}function sm(t,n,a){n.status="fulfilled",n.value=a,rm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,im(t,a)))}function nf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,rm(n),n=n.next;while(n!==o)}t.action=null}function rm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function om(t,n){return n}function lm(t,n){if(Ft){var a=tn.formState;if(a!==null){e:{var o=yt;if(Ft){if(fn){t:{for(var u=fn,f=ia;u.nodeType!==8;){if(!f){u=null;break t}if(u=Xi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){fn=Xi(u.nextSibling),o=u.data==="F!";break e}}Ps(o)}o=!1}o&&(n=a[0])}}return a=ai(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:om,lastRenderedState:n},a.queue=o,a=Rm.bind(null,yt,o),o.dispatch=a,o=tf(!1),f=lf.bind(null,yt,!1,o.queue),o=ai(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Tx.bind(null,yt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function cm(t){var n=Mn();return um(n,qt,t)}function um(t,n,a){if(n=$u(t,n,om)[0],t=kl(Aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=No(n)}catch(M){throw M===Ao?Il:M}else o=n;n=Mn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(yt.flags|=2048,Tr(9,jl(),Ax.bind(null,u,a),null)),[o,f,t]}function Ax(t,n){t.action=n}function fm(t){var n=Mn(),a=qt;if(a!==null)return um(n,a,t);Mn(),n=n.memoizedState,a=Mn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Tr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=yt.updateQueue,n===null&&(n=Qu(),yt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function jl(){return{destroy:void 0,resource:void 0}}function hm(){return Mn().memoizedState}function Xl(t,n,a,o){var u=ai();o=o===void 0?null:o,yt.flags|=t,u.memoizedState=Tr(1|n,jl(),a,o)}function Lo(t,n,a,o){var u=Mn();o=o===void 0?null:o;var f=u.memoizedState.inst;qt!==null&&o!==null&&qu(o,qt.memoizedState.deps)?u.memoizedState=Tr(n,f,a,o):(yt.flags|=t,u.memoizedState=Tr(1|n,f,a,o))}function dm(t,n){Xl(8390656,8,t,n)}function pm(t,n){Lo(2048,8,t,n)}function mm(t,n){return Lo(4,2,t,n)}function gm(t,n){return Lo(4,4,t,n)}function _m(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function vm(t,n,a){a=a!=null?a.concat([t]):null,Lo(4,4,_m.bind(null,n,t),a)}function af(){}function xm(t,n){var a=Mn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&qu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function ym(t,n){var a=Mn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&qu(n,o[1]))return o[0];if(o=t(),Fs){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o}function sf(t,n,a){return a===void 0||(Ka&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Eg(),yt.lanes|=t,is|=t,a)}function Sm(t,n,a,o){return _i(a,n)?a:Mr.current!==null?(t=sf(t,a,o),_i(t,n)||(zn=!0),t):(Ka&42)===0?(zn=!0,t.memoizedState=a):(t=Eg(),yt.lanes|=t,is|=t,n)}function Mm(t,n,a,o,u){var f=K.p;K.p=f!==0&&8>f?f:8;var M=H.T,A={};H.T=A,lf(t,!1,n,a);try{var V=u(),se=H.S;if(se!==null&&se(A,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var _e=Mx(V,o);Oo(t,n,_e,Mi(t))}else Oo(t,n,o,Mi(t))}catch(Me){Oo(t,n,{then:function(){},status:"rejected",reason:Me},Mi())}finally{K.p=f,H.T=M}}function Rx(){}function rf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Em(t).queue;Mm(t,u,n,Z,a===null?Rx:function(){return bm(t),a(o)})}function Em(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function bm(t){var n=Em(t).next.queue;Oo(t,n,{},Mi())}function of(){return Wn(Jo)}function Tm(){return Mn().memoizedState}function Am(){return Mn().memoizedState}function Cx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Mi();t=Ya(a);var o=Za(n,t,a);o!==null&&(Ei(o,n,a),Co(o,n,a)),n={cache:zu()},t.payload=n;return}n=n.return}}function wx(t,n,a){var o=Mi();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ql(t)?Cm(n,a):(a=Au(t,n,a,o),a!==null&&(Ei(a,t,o),wm(a,n,o)))}function Rm(t,n,a){var o=Mi();Oo(t,n,a,o)}function Oo(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ql(t))Cm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,A=f(M,a);if(u.hasEagerState=!0,u.eagerState=A,_i(A,M))return wl(t,n,u,0),tn===null&&Cl(),!1}catch{}finally{}if(a=Au(t,n,u,o),a!==null)return Ei(a,t,o),wm(a,n,o),!0}return!1}function lf(t,n,a,o){if(o={lane:2,revertLane:Hf(),action:o,hasEagerState:!1,eagerState:null,next:null},ql(t)){if(n)throw Error(s(479))}else n=Au(t,a,o,2),n!==null&&Ei(n,t,2)}function ql(t){var n=t.alternate;return t===yt||n!==null&&n===yt}function Cm(t,n){Er=Hl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function wm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,lt(t,a)}}var Wl={readContext:Wn,use:Vl,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useLayoutEffect:_n,useInsertionEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useSyncExternalStore:_n,useId:_n,useHostTransitionStatus:_n,useFormState:_n,useActionState:_n,useOptimistic:_n,useMemoCache:_n,useCacheRefresh:_n},Dm={readContext:Wn,use:Vl,useCallback:function(t,n){return ai().memoizedState=[t,n===void 0?null:n],t},useContext:Wn,useEffect:dm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Xl(4194308,4,_m.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Xl(4194308,4,t,n)},useInsertionEffect:function(t,n){Xl(4,2,t,n)},useMemo:function(t,n){var a=ai();n=n===void 0?null:n;var o=t();if(Fs){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=ai();if(a!==void 0){var u=a(n);if(Fs){Ce(!0);try{a(n)}finally{Ce(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=wx.bind(null,yt,t),[o.memoizedState,t]},useRef:function(t){var n=ai();return t={current:t},n.memoizedState=t},useState:function(t){t=tf(t);var n=t.queue,a=Rm.bind(null,yt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:af,useDeferredValue:function(t,n){var a=ai();return sf(a,t,n)},useTransition:function(){var t=tf(!1);return t=Mm.bind(null,yt,t.queue,!0,!1),ai().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=yt,u=ai();if(Ft){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),tn===null)throw Error(s(349));(Pt&124)!==0||Qp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,dm($p.bind(null,o,f,t),[t]),o.flags|=2048,Tr(9,jl(),Jp.bind(null,o,f,a,n),null),a},useId:function(){var t=ai(),n=tn.identifierPrefix;if(Ft){var a=Ea,o=Ma;a=(o&~(1<<32-je(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Gl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Ex++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:of,useFormState:lm,useActionState:lm,useOptimistic:function(t){var n=ai();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=lf.bind(null,yt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ju,useCacheRefresh:function(){return ai().memoizedState=Cx.bind(null,yt)}},Um={readContext:Wn,use:Vl,useCallback:xm,useContext:Wn,useEffect:pm,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:ym,useReducer:kl,useRef:hm,useState:function(){return kl(Aa)},useDebugValue:af,useDeferredValue:function(t,n){var a=Mn();return Sm(a,qt.memoizedState,t,n)},useTransition:function(){var t=kl(Aa)[0],n=Mn().memoizedState;return[typeof t=="boolean"?t:No(t),n]},useSyncExternalStore:Kp,useId:Tm,useHostTransitionStatus:of,useFormState:cm,useActionState:cm,useOptimistic:function(t,n){var a=Mn();return nm(a,qt,t,n)},useMemoCache:Ju,useCacheRefresh:Am},Dx={readContext:Wn,use:Vl,useCallback:xm,useContext:Wn,useEffect:pm,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:ym,useReducer:ef,useRef:hm,useState:function(){return ef(Aa)},useDebugValue:af,useDeferredValue:function(t,n){var a=Mn();return qt===null?sf(a,t,n):Sm(a,qt.memoizedState,t,n)},useTransition:function(){var t=ef(Aa)[0],n=Mn().memoizedState;return[typeof t=="boolean"?t:No(t),n]},useSyncExternalStore:Kp,useId:Tm,useHostTransitionStatus:of,useFormState:fm,useActionState:fm,useOptimistic:function(t,n){var a=Mn();return qt!==null?nm(a,qt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:Am},Ar=null,Po=0;function Yl(t){var n=Po;return Po+=1,Ar===null&&(Ar=[]),Vp(Ar,t,n)}function zo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Zl(t,n){throw n.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Nm(t){var n=t._init;return n(t._payload)}function Lm(t){function n($,W){if(t){var ie=$.deletions;ie===null?($.deletions=[W],$.flags|=16):ie.push(W)}}function a($,W){if(!t)return null;for(;W!==null;)n($,W),W=W.sibling;return null}function o($){for(var W=new Map;$!==null;)$.key!==null?W.set($.key,$):W.set($.index,$),$=$.sibling;return W}function u($,W){return $=Sa($,W),$.index=0,$.sibling=null,$}function f($,W,ie){return $.index=ie,t?(ie=$.alternate,ie!==null?(ie=ie.index,ie<W?($.flags|=67108866,W):ie):($.flags|=67108866,W)):($.flags|=1048576,W)}function M($){return t&&$.alternate===null&&($.flags|=67108866),$}function A($,W,ie,ye){return W===null||W.tag!==6?(W=Cu(ie,$.mode,ye),W.return=$,W):(W=u(W,ie),W.return=$,W)}function V($,W,ie,ye){var We=ie.type;return We===b?_e($,W,ie.props.children,ye,ie.key):W!==null&&(W.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===q&&Nm(We)===W.type)?(W=u(W,ie.props),zo(W,ie),W.return=$,W):(W=Ul(ie.type,ie.key,ie.props,null,$.mode,ye),zo(W,ie),W.return=$,W)}function se($,W,ie,ye){return W===null||W.tag!==4||W.stateNode.containerInfo!==ie.containerInfo||W.stateNode.implementation!==ie.implementation?(W=wu(ie,$.mode,ye),W.return=$,W):(W=u(W,ie.children||[]),W.return=$,W)}function _e($,W,ie,ye,We){return W===null||W.tag!==7?(W=Us(ie,$.mode,ye,We),W.return=$,W):(W=u(W,ie),W.return=$,W)}function Me($,W,ie){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Cu(""+W,$.mode,ie),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return ie=Ul(W.type,W.key,W.props,null,$.mode,ie),zo(ie,W),ie.return=$,ie;case S:return W=wu(W,$.mode,ie),W.return=$,W;case q:var ye=W._init;return W=ye(W._payload),Me($,W,ie)}if(me(W)||ae(W))return W=Us(W,$.mode,ie,null),W.return=$,W;if(typeof W.then=="function")return Me($,Yl(W),ie);if(W.$$typeof===N)return Me($,Pl($,W),ie);Zl($,W)}return null}function oe($,W,ie,ye){var We=W!==null?W.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return We!==null?null:A($,W,""+ie,ye);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case y:return ie.key===We?V($,W,ie,ye):null;case S:return ie.key===We?se($,W,ie,ye):null;case q:return We=ie._init,ie=We(ie._payload),oe($,W,ie,ye)}if(me(ie)||ae(ie))return We!==null?null:_e($,W,ie,ye,null);if(typeof ie.then=="function")return oe($,W,Yl(ie),ye);if(ie.$$typeof===N)return oe($,W,Pl($,ie),ye);Zl($,ie)}return null}function ue($,W,ie,ye,We){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return $=$.get(ie)||null,A(W,$,""+ye,We);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case y:return $=$.get(ye.key===null?ie:ye.key)||null,V(W,$,ye,We);case S:return $=$.get(ye.key===null?ie:ye.key)||null,se(W,$,ye,We);case q:var Mt=ye._init;return ye=Mt(ye._payload),ue($,W,ie,ye,We)}if(me(ye)||ae(ye))return $=$.get(ie)||null,_e(W,$,ye,We,null);if(typeof ye.then=="function")return ue($,W,ie,Yl(ye),We);if(ye.$$typeof===N)return ue($,W,ie,Pl(W,ye),We);Zl(W,ye)}return null}function ct($,W,ie,ye){for(var We=null,Mt=null,et=W,rt=W=0,Bn=null;et!==null&&rt<ie.length;rt++){et.index>rt?(Bn=et,et=null):Bn=et.sibling;var It=oe($,et,ie[rt],ye);if(It===null){et===null&&(et=Bn);break}t&&et&&It.alternate===null&&n($,et),W=f(It,W,rt),Mt===null?We=It:Mt.sibling=It,Mt=It,et=Bn}if(rt===ie.length)return a($,et),Ft&&Ls($,rt),We;if(et===null){for(;rt<ie.length;rt++)et=Me($,ie[rt],ye),et!==null&&(W=f(et,W,rt),Mt===null?We=et:Mt.sibling=et,Mt=et);return Ft&&Ls($,rt),We}for(et=o(et);rt<ie.length;rt++)Bn=ue(et,$,rt,ie[rt],ye),Bn!==null&&(t&&Bn.alternate!==null&&et.delete(Bn.key===null?rt:Bn.key),W=f(Bn,W,rt),Mt===null?We=Bn:Mt.sibling=Bn,Mt=Bn);return t&&et.forEach(function(hs){return n($,hs)}),Ft&&Ls($,rt),We}function st($,W,ie,ye){if(ie==null)throw Error(s(151));for(var We=null,Mt=null,et=W,rt=W=0,Bn=null,It=ie.next();et!==null&&!It.done;rt++,It=ie.next()){et.index>rt?(Bn=et,et=null):Bn=et.sibling;var hs=oe($,et,It.value,ye);if(hs===null){et===null&&(et=Bn);break}t&&et&&hs.alternate===null&&n($,et),W=f(hs,W,rt),Mt===null?We=hs:Mt.sibling=hs,Mt=hs,et=Bn}if(It.done)return a($,et),Ft&&Ls($,rt),We;if(et===null){for(;!It.done;rt++,It=ie.next())It=Me($,It.value,ye),It!==null&&(W=f(It,W,rt),Mt===null?We=It:Mt.sibling=It,Mt=It);return Ft&&Ls($,rt),We}for(et=o(et);!It.done;rt++,It=ie.next())It=ue(et,$,rt,It.value,ye),It!==null&&(t&&It.alternate!==null&&et.delete(It.key===null?rt:It.key),W=f(It,W,rt),Mt===null?We=It:Mt.sibling=It,Mt=It);return t&&et.forEach(function(Uy){return n($,Uy)}),Ft&&Ls($,rt),We}function Yt($,W,ie,ye){if(typeof ie=="object"&&ie!==null&&ie.type===b&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case y:e:{for(var We=ie.key;W!==null;){if(W.key===We){if(We=ie.type,We===b){if(W.tag===7){a($,W.sibling),ye=u(W,ie.props.children),ye.return=$,$=ye;break e}}else if(W.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===q&&Nm(We)===W.type){a($,W.sibling),ye=u(W,ie.props),zo(ye,ie),ye.return=$,$=ye;break e}a($,W);break}else n($,W);W=W.sibling}ie.type===b?(ye=Us(ie.props.children,$.mode,ye,ie.key),ye.return=$,$=ye):(ye=Ul(ie.type,ie.key,ie.props,null,$.mode,ye),zo(ye,ie),ye.return=$,$=ye)}return M($);case S:e:{for(We=ie.key;W!==null;){if(W.key===We)if(W.tag===4&&W.stateNode.containerInfo===ie.containerInfo&&W.stateNode.implementation===ie.implementation){a($,W.sibling),ye=u(W,ie.children||[]),ye.return=$,$=ye;break e}else{a($,W);break}else n($,W);W=W.sibling}ye=wu(ie,$.mode,ye),ye.return=$,$=ye}return M($);case q:return We=ie._init,ie=We(ie._payload),Yt($,W,ie,ye)}if(me(ie))return ct($,W,ie,ye);if(ae(ie)){if(We=ae(ie),typeof We!="function")throw Error(s(150));return ie=We.call(ie),st($,W,ie,ye)}if(typeof ie.then=="function")return Yt($,W,Yl(ie),ye);if(ie.$$typeof===N)return Yt($,W,Pl($,ie),ye);Zl($,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,W!==null&&W.tag===6?(a($,W.sibling),ye=u(W,ie),ye.return=$,$=ye):(a($,W),ye=Cu(ie,$.mode,ye),ye.return=$,$=ye),M($)):a($,W)}return function($,W,ie,ye){try{Po=0;var We=Yt($,W,ie,ye);return Ar=null,We}catch(et){if(et===Ao||et===Il)throw et;var Mt=vi(29,et,null,$.mode);return Mt.lanes=ye,Mt.return=$,Mt}finally{}}}var Rr=Lm(!0),Om=Lm(!1),Oi=ne(null),aa=null;function Qa(t){var n=t.alternate;Ae(Un,Un.current&1),Ae(Oi,t),aa===null&&(n===null||Mr.current!==null||n.memoizedState!==null)&&(aa=t)}function Pm(t){if(t.tag===22){if(Ae(Un,Un.current),Ae(Oi,t),aa===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(aa=t)}}else Ja()}function Ja(){Ae(Un,Un.current),Ae(Oi,Oi.current)}function Ra(t){Se(Oi),aa===t&&(aa=null),Se(Un)}var Un=ne(0);function Kl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Jf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function cf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var uf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Mi(),u=Ya(o);u.payload=n,a!=null&&(u.callback=a),n=Za(t,u,o),n!==null&&(Ei(n,t,o),Co(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Mi(),u=Ya(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Za(t,u,o),n!==null&&(Ei(n,t,o),Co(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Mi(),o=Ya(a);o.tag=2,n!=null&&(o.callback=n),n=Za(t,o,a),n!==null&&(Ei(n,t,a),Co(n,t,a))}};function zm(t,n,a,o,u,f,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,M):n.prototype&&n.prototype.isPureReactComponent?!vo(a,o)||!vo(u,f):!0}function Im(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&uf.enqueueReplaceState(n,n.state,null)}function Hs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Ql=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Bm(t){Ql(t)}function Fm(t){console.error(t)}function Hm(t){Ql(t)}function Jl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Gm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ff(t,n,a){return a=Ya(a),a.tag=3,a.payload={element:null},a.callback=function(){Jl(t,n)},a}function Vm(t){return t=Ya(t),t.tag=3,t}function km(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Gm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){Gm(n,a,o),typeof u!="function"&&(as===null?as=new Set([this]):as.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Ux(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Eo(n,a,u,!0),a=Oi.current,a!==null){switch(a.tag){case 13:return aa===null?Pf():a.alternate===null&&hn===0&&(hn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Fu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),If(t,o,u)),!1;case 22:return a.flags|=65536,o===Fu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),If(t,o,u)),!1}throw Error(s(435,a.tag))}return If(t,o,u),Pf(),!1}if(Ft)return n=Oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Nu&&(t=Error(s(422),{cause:o}),Mo(Di(t,a)))):(o!==Nu&&(n=Error(s(423),{cause:o}),Mo(Di(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Di(o,a),u=ff(t.stateNode,o,u),Vu(t,u),hn!==4&&(hn=2)),!1;var f=Error(s(520),{cause:o});if(f=Di(f,a),ko===null?ko=[f]:ko.push(f),hn!==4&&(hn=2),n===null)return!0;o=Di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=ff(a.stateNode,o,t),Vu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(as===null||!as.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Vm(u),km(u,t,a,o),Vu(a,u),!1}a=a.return}while(a!==null);return!1}var jm=Error(s(461)),zn=!1;function Gn(t,n,a,o){n.child=t===null?Om(n,null,a,o):Rr(n,t.child,a,o)}function Xm(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var M={};for(var A in o)A!=="ref"&&(M[A]=o[A])}else M=o;return Is(n),o=Wu(t,n,a,M,f,u),A=Yu(),t!==null&&!zn?(Zu(t,n,u),Ca(t,n,u)):(Ft&&A&&Du(n),n.flags|=1,Gn(t,n,o,u),n.child)}function qm(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Ru(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Wm(t,n,f,o,u)):(t=Ul(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!xf(t,u)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:vo,a(M,o)&&t.ref===n.ref)return Ca(t,n,u)}return n.flags|=1,t=Sa(f,o),t.ref=n.ref,t.return=n,n.child=t}function Wm(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(vo(f,o)&&t.ref===n.ref)if(zn=!1,n.pendingProps=o=f,xf(t,u))(t.flags&131072)!==0&&(zn=!0);else return n.lanes=t.lanes,Ca(t,n,u)}return hf(t,n,a,o,u)}function Ym(t,n,a){var o=n.pendingProps,u=o.children,f=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,t!==null){for(u=n.child=t.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Zm(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&zl(n,f!==null?f.cachePool:null),f!==null?Wp(n,f):ju(),Pm(n);else return n.lanes=n.childLanes=536870912,Zm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(zl(n,f.cachePool),Wp(n,f),Ja(),n.memoizedState=null):(t!==null&&zl(n,null),ju(),Ja());return Gn(t,n,u,a),n.child}function Zm(t,n,a,o){var u=Bu();return u=u===null?null:{parent:Dn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&zl(n,null),ju(),Pm(n),t!==null&&Eo(t,n,o,!0),null}function $l(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function hf(t,n,a,o,u){return Is(n),a=Wu(t,n,a,o,void 0,u),o=Yu(),t!==null&&!zn?(Zu(t,n,u),Ca(t,n,u)):(Ft&&o&&Du(n),n.flags|=1,Gn(t,n,a,u),n.child)}function Km(t,n,a,o,u,f){return Is(n),n.updateQueue=null,a=Zp(n,o,a,u),Yp(t),o=Yu(),t!==null&&!zn?(Zu(t,n,f),Ca(t,n,f)):(Ft&&o&&Du(n),n.flags|=1,Gn(t,n,a,f),n.child)}function Qm(t,n,a,o,u){if(Is(n),n.stateNode===null){var f=_r,M=a.contextType;typeof M=="object"&&M!==null&&(f=Wn(M)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=uf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Hu(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?Wn(M):_r,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(cf(n,a,M,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&uf.enqueueReplaceState(f,f.state,null),Do(n,o,f,u),wo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,V=Hs(a,A);f.props=V;var se=f.context,_e=a.contextType;M=_r,typeof _e=="object"&&_e!==null&&(M=Wn(_e));var Me=a.getDerivedStateFromProps;_e=typeof Me=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,_e||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||se!==M)&&Im(n,f,o,M),Wa=!1;var oe=n.memoizedState;f.state=oe,Do(n,o,f,u),wo(),se=n.memoizedState,A||oe!==se||Wa?(typeof Me=="function"&&(cf(n,a,Me,o),se=n.memoizedState),(V=Wa||zm(n,a,V,o,oe,se,M))?(_e||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=se),f.props=o,f.state=se,f.context=M,o=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Gu(t,n),M=n.memoizedProps,_e=Hs(a,M),f.props=_e,Me=n.pendingProps,oe=f.context,se=a.contextType,V=_r,typeof se=="object"&&se!==null&&(V=Wn(se)),A=a.getDerivedStateFromProps,(se=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==Me||oe!==V)&&Im(n,f,o,V),Wa=!1,oe=n.memoizedState,f.state=oe,Do(n,o,f,u),wo();var ue=n.memoizedState;M!==Me||oe!==ue||Wa||t!==null&&t.dependencies!==null&&Ol(t.dependencies)?(typeof A=="function"&&(cf(n,a,A,o),ue=n.memoizedState),(_e=Wa||zm(n,a,_e,o,oe,ue,V)||t!==null&&t.dependencies!==null&&Ol(t.dependencies))?(se||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ue,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ue,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ue),f.props=o,f.state=ue,f.context=V,o=_e):(typeof f.componentDidUpdate!="function"||M===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,$l(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Rr(n,t.child,null,u),n.child=Rr(n,null,a,u)):Gn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Ca(t,n,u),t}function Jm(t,n,a,o){return So(),n.flags|=256,Gn(t,n,a,o),n.child}var df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pf(t){return{baseLanes:t,cachePool:Fp()}}function mf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Pi),t}function $m(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=t!==null&&t.memoizedState===null?!1:(Un.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ft){if(u?Qa(n):Ja(),Ft){var A=fn,V;if(V=A){e:{for(V=A,A=ia;V.nodeType!==8;){if(!A){A=null;break e}if(V=Xi(V.nextSibling),V===null){A=null;break e}}A=V}A!==null?(n.memoizedState={dehydrated:A,treeContext:Ns!==null?{id:Ma,overflow:Ea}:null,retryLane:536870912,hydrationErrors:null},V=vi(18,null,null,0),V.stateNode=A,V.return=n,n.child=V,$n=n,fn=null,V=!0):V=!1}V||Ps(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Jf(A)?n.lanes=32:n.lanes=536870912,null;Ra(n)}return A=o.children,o=o.fallback,u?(Ja(),u=n.mode,A=ec({mode:"hidden",children:A},u),o=Us(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,u=n.child,u.memoizedState=pf(a),u.childLanes=mf(t,M,a),n.memoizedState=df,o):(Qa(n),gf(n,A))}if(V=t.memoizedState,V!==null&&(A=V.dehydrated,A!==null)){if(f)n.flags&256?(Qa(n),n.flags&=-257,n=_f(t,n,a)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,n=null):(Ja(),u=o.fallback,A=n.mode,o=ec({mode:"visible",children:o.children},A),u=Us(u,A,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Rr(n,t.child,null,a),o=n.child,o.memoizedState=pf(a),o.childLanes=mf(t,M,a),n.memoizedState=df,n=u);else if(Qa(n),Jf(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var se=M.dgst;M=se,o=Error(s(419)),o.stack="",o.digest=M,Mo({value:o,source:null,stack:null}),n=_f(t,n,a)}else if(zn||Eo(t,n,a,!1),M=(a&t.childLanes)!==0,zn||M){if(M=tn,M!==null&&(o=a&-a,o=(o&42)!==0?1:Ot(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==V.retryLane))throw V.retryLane=o,gr(t,o),Ei(M,t,o),jm;A.data==="$?"||Pf(),n=_f(t,n,a)}else A.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,fn=Xi(A.nextSibling),$n=n,Ft=!0,Os=null,ia=!1,t!==null&&(Ni[Li++]=Ma,Ni[Li++]=Ea,Ni[Li++]=Ns,Ma=t.id,Ea=t.overflow,Ns=n),n=gf(n,o.children),n.flags|=4096);return n}return u?(Ja(),u=o.fallback,A=n.mode,V=t.child,se=V.sibling,o=Sa(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,se!==null?u=Sa(se,u):(u=Us(u,A,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,A=t.child.memoizedState,A===null?A=pf(a):(V=A.cachePool,V!==null?(se=Dn._currentValue,V=V.parent!==se?{parent:se,pool:se}:V):V=Fp(),A={baseLanes:A.baseLanes|a,cachePool:V}),u.memoizedState=A,u.childLanes=mf(t,M,a),n.memoizedState=df,o):(Qa(n),a=t.child,t=a.sibling,a=Sa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=a,n.memoizedState=null,a)}function gf(t,n){return n=ec({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ec(t,n){return t=vi(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function _f(t,n,a){return Rr(n,t.child,null,a),t=gf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function eg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ou(t.return,n,a)}function vf(t,n,a,o,u){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function tg(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(Gn(t,n,o.children,a),o=Un.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&eg(t,a,n);else if(t.tag===19)eg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Ae(Un,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Kl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),vf(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Kl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}vf(n,!0,a,null,f);break;case"together":vf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ca(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),is|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Eo(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Sa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Sa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function xf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ol(t)))}function Nx(t,n,a){switch(n.tag){case 3:Le(n,n.stateNode.containerInfo),qa(n,Dn,t.memoizedState.cache),So();break;case 27:case 5:Ke(n);break;case 4:Le(n,n.stateNode.containerInfo);break;case 10:qa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Qa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?$m(t,n,a):(Qa(n),t=Ca(t,n,a),t!==null?t.sibling:null);Qa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Eo(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return tg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ae(Un,Un.current),o)break;return null;case 22:case 23:return n.lanes=0,Ym(t,n,a);case 24:qa(n,Dn,t.memoizedState.cache)}return Ca(t,n,a)}function ng(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)zn=!0;else{if(!xf(t,a)&&(n.flags&128)===0)return zn=!1,Nx(t,n,a);zn=(t.flags&131072)!==0}else zn=!1,Ft&&(n.flags&1048576)!==0&&Np(n,Ll,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Ru(o)?(t=Hs(o,t),n.tag=1,n=Qm(null,n,o,t,a)):(n.tag=0,n=hf(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===w){n.tag=11,n=Xm(null,n,o,t,a);break e}else if(u===G){n.tag=14,n=qm(null,n,o,t,a);break e}}throw n=fe(o)||o,Error(s(306,n,""))}}return n;case 0:return hf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Hs(o,n.pendingProps),Qm(t,n,o,u,a);case 3:e:{if(Le(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Gu(t,n),Do(n,o,null,a);var M=n.memoizedState;if(o=M.cache,qa(n,Dn,o),o!==f.cache&&Pu(n,[Dn],a,!0),wo(),o=M.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Jm(t,n,o,a);break e}else if(o!==u){u=Di(Error(s(424)),n),Mo(u),n=Jm(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(fn=Xi(t.firstChild),$n=n,Ft=!0,Os=null,ia=!0,a=Om(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(So(),o===u){n=Ca(t,n,a);break e}Gn(t,n,o,a)}n=n.child}return n;case 26:return $l(t,n),t===null?(a=r0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ft||(a=n.type,t=n.pendingProps,o=pc(xe.current).createElement(a),o[mn]=n,o[xn]=t,kn(o,a,t),Gt(o),n.stateNode=o):n.memoizedState=r0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ke(n),t===null&&Ft&&(o=n.stateNode=i0(n.type,n.pendingProps,xe.current),$n=n,ia=!0,u=fn,os(n.type)?($f=u,fn=Xi(o.firstChild)):fn=u),Gn(t,n,n.pendingProps.children,a),$l(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ft&&((u=o=fn)&&(o=ry(o,n.type,n.pendingProps,ia),o!==null?(n.stateNode=o,$n=n,fn=Xi(o.firstChild),ia=!1,u=!0):u=!1),u||Ps(n)),Ke(n),u=n.type,f=n.pendingProps,M=t!==null?t.memoizedProps:null,o=f.children,Zf(u,f)?o=null:M!==null&&Zf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Wu(t,n,bx,null,null,a),Jo._currentValue=u),$l(t,n),Gn(t,n,o,a),n.child;case 6:return t===null&&Ft&&((t=a=fn)&&(a=oy(a,n.pendingProps,ia),a!==null?(n.stateNode=a,$n=n,fn=null,t=!0):t=!1),t||Ps(n)),null;case 13:return $m(t,n,a);case 4:return Le(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Rr(n,null,o,a):Gn(t,n,o,a),n.child;case 11:return Xm(t,n,n.type,n.pendingProps,a);case 7:return Gn(t,n,n.pendingProps,a),n.child;case 8:return Gn(t,n,n.pendingProps.children,a),n.child;case 12:return Gn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,qa(n,n.type,o.value),Gn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Is(n),u=Wn(u),o=o(u),n.flags|=1,Gn(t,n,o,a),n.child;case 14:return qm(t,n,n.type,n.pendingProps,a);case 15:return Wm(t,n,n.type,n.pendingProps,a);case 19:return tg(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=ec(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Sa(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Ym(t,n,a);case 24:return Is(n),o=Wn(Dn),t===null?(u=Bu(),u===null&&(u=tn,f=zu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Hu(n),qa(n,Dn,u)):((t.lanes&a)!==0&&(Gu(t,n),Do(n,null,null,a),wo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),qa(n,Dn,o)):(o=f.cache,qa(n,Dn,o),o!==u.cache&&Pu(n,[Dn],a,!0))),Gn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function wa(t){t.flags|=4}function ig(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!f0(n)){if(n=Oi.current,n!==null&&((Pt&4194048)===Pt?aa!==null:(Pt&62914560)!==Pt&&(Pt&536870912)===0||n!==aa))throw Ro=Fu,Hp;t.flags|=8192}}function tc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Oe():536870912,t.lanes|=n,Ur|=n)}function Io(t,n){if(!Ft)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function ln(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Lx(t,n,a){var o=n.pendingProps;switch(Uu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(n),null;case 1:return ln(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ta(Dn),ut(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(yo(n)?wa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Pp())),ln(n),null;case 26:return a=n.memoizedState,t===null?(wa(n),a!==null?(ln(n),ig(n,a)):(ln(n),n.flags&=-16777217)):a?a!==t.memoizedState?(wa(n),ln(n),ig(n,a)):(ln(n),n.flags&=-16777217):(t.memoizedProps!==o&&wa(n),ln(n),n.flags&=-16777217),null;case 27:ft(n),a=xe.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&wa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return ln(n),null}t=ee.current,yo(n)?Lp(n):(t=i0(u,o,a),n.stateNode=t,wa(n))}return ln(n),null;case 5:if(ft(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&wa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return ln(n),null}if(t=ee.current,yo(n))Lp(n);else{switch(u=pc(xe.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[mn]=n,t[xn]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(kn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&wa(n)}}return ln(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&wa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=xe.current,yo(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=$n,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[mn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Kg(t.nodeValue,a)),t||Ps(n)}else t=pc(t).createTextNode(o),t[mn]=n,n.stateNode=t}return ln(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=yo(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[mn]=n}else So(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),u=!1}else u=Pp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ra(n),n):(Ra(n),null)}if(Ra(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),tc(n,n.updateQueue),ln(n),null;case 4:return ut(),t===null&&jf(n.stateNode.containerInfo),ln(n),null;case 10:return Ta(n.type),ln(n),null;case 19:if(Se(Un),u=n.memoizedState,u===null)return ln(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)Io(u,!1);else{if(hn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Kl(t),f!==null){for(n.flags|=128,Io(u,!1),t=f.updateQueue,n.updateQueue=t,tc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Up(a,t),a=a.sibling;return Ae(Un,Un.current&1|2),n.child}t=t.sibling}u.tail!==null&&it()>ac&&(n.flags|=128,o=!0,Io(u,!1),n.lanes=4194304)}else{if(!o)if(t=Kl(f),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,tc(n,t),Io(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Ft)return ln(n),null}else 2*it()-u.renderingStartTime>ac&&a!==536870912&&(n.flags|=128,o=!0,Io(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(t=u.last,t!==null?t.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=it(),n.sibling=null,t=Un.current,Ae(Un,o?t&1|2:t&1),n):(ln(n),null);case 22:case 23:return Ra(n),Xu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(ln(n),n.subtreeFlags&6&&(n.flags|=8192)):ln(n),a=n.updateQueue,a!==null&&tc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Se(Bs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ta(Dn),ln(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ox(t,n){switch(Uu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ta(Dn),ut(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ft(n),null;case 13:if(Ra(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));So()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Se(Un),null;case 4:return ut(),null;case 10:return Ta(n.type),null;case 22:case 23:return Ra(n),Xu(),t!==null&&Se(Bs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ta(Dn),null;case 25:return null;default:return null}}function ag(t,n){switch(Uu(n),n.tag){case 3:Ta(Dn),ut();break;case 26:case 27:case 5:ft(n);break;case 4:ut();break;case 13:Ra(n);break;case 19:Se(Un);break;case 10:Ta(n.type);break;case 22:case 23:Ra(n),Xu(),t!==null&&Se(Bs);break;case 24:Ta(Dn)}}function Bo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,M=a.inst;o=f(),M.destroy=o}a=a.next}while(a!==u)}}catch(A){Jt(n,n.return,A)}}function $a(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var M=o.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,u=n;var V=a,se=A;try{se()}catch(_e){Jt(u,V,_e)}}}o=o.next}while(o!==f)}}catch(_e){Jt(n,n.return,_e)}}function sg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{qp(n,a)}catch(o){Jt(t,t.return,o)}}}function rg(t,n,a){a.props=Hs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Jt(t,n,o)}}function Fo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Jt(t,n,u)}}function sa(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Jt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Jt(t,n,u)}else a.current=null}function og(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Jt(t,t.return,u)}}function yf(t,n,a){try{var o=t.stateNode;ty(o,t.type,a,n),o[xn]=n}catch(u){Jt(t,t.return,u)}}function lg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&os(t.type)||t.tag===4}function Sf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&os(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=dc));else if(o!==4&&(o===27&&os(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Mf(t,n,a),t=t.sibling;t!==null;)Mf(t,n,a),t=t.sibling}function nc(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&os(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(nc(t,n,a),t=t.sibling;t!==null;)nc(t,n,a),t=t.sibling}function cg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);kn(n,o,a),n[mn]=t,n[xn]=a}catch(f){Jt(t,t.return,f)}}var Da=!1,vn=!1,Ef=!1,ug=typeof WeakSet=="function"?WeakSet:Set,In=null;function Px(t,n){if(t=t.containerInfo,Wf=yc,t=Sp(t),yu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var M=0,A=-1,V=-1,se=0,_e=0,Me=t,oe=null;t:for(;;){for(var ue;Me!==a||u!==0&&Me.nodeType!==3||(A=M+u),Me!==f||o!==0&&Me.nodeType!==3||(V=M+o),Me.nodeType===3&&(M+=Me.nodeValue.length),(ue=Me.firstChild)!==null;)oe=Me,Me=ue;for(;;){if(Me===t)break t;if(oe===a&&++se===u&&(A=M),oe===f&&++_e===o&&(V=M),(ue=Me.nextSibling)!==null)break;Me=oe,oe=Me.parentNode}Me=ue}a=A===-1||V===-1?null:{start:A,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yf={focusedElem:t,selectionRange:a},yc=!1,In=n;In!==null;)if(n=In,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,In=t;else for(;In!==null;){switch(n=In,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ct=Hs(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(ct,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(st){Jt(a,a.return,st)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Qf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Qf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,In=t;break}In=n.return}}function fg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:es(t,a),o&4&&Bo(5,a);break;case 1:if(es(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(M){Jt(a,a.return,M)}else{var u=Hs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Jt(a,a.return,M)}}o&64&&sg(a),o&512&&Fo(a,a.return);break;case 3:if(es(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{qp(t,n)}catch(M){Jt(a,a.return,M)}}break;case 27:n===null&&o&4&&cg(a);case 26:case 5:es(t,a),n===null&&o&4&&og(a),o&512&&Fo(a,a.return);break;case 12:es(t,a);break;case 13:es(t,a),o&4&&pg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=jx.bind(null,a),ly(t,a))));break;case 22:if(o=a.memoizedState!==null||Da,!o){n=n!==null&&n.memoizedState!==null||vn,u=Da;var f=vn;Da=o,(vn=n)&&!f?ts(t,a,(a.subtreeFlags&8772)!==0):es(t,a),Da=u,vn=f}break;case 30:break;default:es(t,a)}}function hg(t){var n=t.alternate;n!==null&&(t.alternate=null,hg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&hi(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,si=!1;function Ua(t,n,a){for(a=a.child;a!==null;)dg(t,n,a),a=a.sibling}function dg(t,n,a){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(I,a)}catch{}switch(a.tag){case 26:vn||sa(a,n),Ua(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vn||sa(a,n);var o=rn,u=si;os(a.type)&&(rn=a.stateNode,si=!1),Ua(t,n,a),Yo(a.stateNode),rn=o,si=u;break;case 5:vn||sa(a,n);case 6:if(o=rn,u=si,rn=null,Ua(t,n,a),rn=o,si=u,rn!==null)if(si)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode)}catch(f){Jt(a,n,f)}else try{rn.removeChild(a.stateNode)}catch(f){Jt(a,n,f)}break;case 18:rn!==null&&(si?(t=rn,t0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),nl(t)):t0(rn,a.stateNode));break;case 4:o=rn,u=si,rn=a.stateNode.containerInfo,si=!0,Ua(t,n,a),rn=o,si=u;break;case 0:case 11:case 14:case 15:vn||$a(2,a,n),vn||$a(4,a,n),Ua(t,n,a);break;case 1:vn||(sa(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&rg(a,n,o)),Ua(t,n,a);break;case 21:Ua(t,n,a);break;case 22:vn=(o=vn)||a.memoizedState!==null,Ua(t,n,a),vn=o;break;default:Ua(t,n,a)}}function pg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{nl(t)}catch(a){Jt(n,n.return,a)}}function zx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ug),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ug),n;default:throw Error(s(435,t.tag))}}function bf(t,n){var a=zx(t);n.forEach(function(o){var u=Xx.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function xi(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,M=n,A=M;e:for(;A!==null;){switch(A.tag){case 27:if(os(A.type)){rn=A.stateNode,si=!1;break e}break;case 5:rn=A.stateNode,si=!1;break e;case 3:case 4:rn=A.stateNode.containerInfo,si=!0;break e}A=A.return}if(rn===null)throw Error(s(160));dg(f,M,u),rn=null,si=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)mg(n,t),n=n.sibling}var ji=null;function mg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:xi(n,t),yi(t),o&4&&($a(3,t,t.return),Bo(3,t),$a(5,t,t.return));break;case 1:xi(n,t),yi(t),o&512&&(vn||a===null||sa(a,a.return)),o&64&&Da&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=ji;if(xi(n,t),yi(t),o&512&&(vn||a===null||sa(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ta]||f[mn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),kn(f,o,a),f[mn]=t,Gt(f),o=f;break e;case"link":var M=c0("link","href",u).get(o+(a.href||""));if(M){for(var A=0;A<M.length;A++)if(f=M[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(A,1);break t}}f=u.createElement(o),kn(f,o,a),u.head.appendChild(f);break;case"meta":if(M=c0("meta","content",u).get(o+(a.content||""))){for(A=0;A<M.length;A++)if(f=M[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(A,1);break t}}f=u.createElement(o),kn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[mn]=t,Gt(f),o=f}t.stateNode=o}else u0(u,t.type,t.stateNode);else t.stateNode=l0(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?u0(u,t.type,t.stateNode):l0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&yf(t,t.memoizedProps,a.memoizedProps)}break;case 27:xi(n,t),yi(t),o&512&&(vn||a===null||sa(a,a.return)),a!==null&&o&4&&yf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(xi(n,t),yi(t),o&512&&(vn||a===null||sa(a,a.return)),t.flags&32){u=t.stateNode;try{Jn(u,"")}catch(ue){Jt(t,t.return,ue)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,yf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Ef=!0);break;case 6:if(xi(n,t),yi(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ue){Jt(t,t.return,ue)}}break;case 3:if(_c=null,u=ji,ji=mc(n.containerInfo),xi(n,t),ji=u,yi(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{nl(n.containerInfo)}catch(ue){Jt(t,t.return,ue)}Ef&&(Ef=!1,gg(t));break;case 4:o=ji,ji=mc(t.stateNode.containerInfo),xi(n,t),yi(t),ji=o;break;case 12:xi(n,t),yi(t);break;case 13:xi(n,t),yi(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Df=it()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,bf(t,o)));break;case 22:u=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,se=Da,_e=vn;if(Da=se||u,vn=_e||V,xi(n,t),vn=_e,Da=se,yi(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||Da||vn||Gs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=V.stateNode;var Me=V.memoizedProps.style,oe=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;A.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(ue){Jt(V,V.return,ue)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(ue){Jt(V,V.return,ue)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,bf(t,a))));break;case 19:xi(n,t),yi(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,bf(t,o)));break;case 30:break;case 21:break;default:xi(n,t),yi(t)}}function yi(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(lg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Sf(t);nc(t,f,u);break;case 5:var M=a.stateNode;a.flags&32&&(Jn(M,""),a.flags&=-33);var A=Sf(t);nc(t,A,M);break;case 3:case 4:var V=a.stateNode.containerInfo,se=Sf(t);Mf(t,se,V);break;default:throw Error(s(161))}}catch(_e){Jt(t,t.return,_e)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function gg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;gg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function es(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)fg(t,n.alternate,n),n=n.sibling}function Gs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:$a(4,n,n.return),Gs(n);break;case 1:sa(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&rg(n,n.return,a),Gs(n);break;case 27:Yo(n.stateNode);case 26:case 5:sa(n,n.return),Gs(n);break;case 22:n.memoizedState===null&&Gs(n);break;case 30:Gs(n);break;default:Gs(n)}t=t.sibling}}function ts(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:ts(u,f,a),Bo(4,f);break;case 1:if(ts(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(se){Jt(o,o.return,se)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)Xp(V[u],A)}catch(se){Jt(o,o.return,se)}}a&&M&64&&sg(f),Fo(f,f.return);break;case 27:cg(f);case 26:case 5:ts(u,f,a),a&&o===null&&M&4&&og(f),Fo(f,f.return);break;case 12:ts(u,f,a);break;case 13:ts(u,f,a),a&&M&4&&pg(u,f);break;case 22:f.memoizedState===null&&ts(u,f,a),Fo(f,f.return);break;case 30:break;default:ts(u,f,a)}n=n.sibling}}function Tf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&bo(a))}function Af(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&bo(t))}function ra(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)_g(t,n,a,o),n=n.sibling}function _g(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ra(t,n,a,o),u&2048&&Bo(9,n);break;case 1:ra(t,n,a,o);break;case 3:ra(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&bo(t)));break;case 12:if(u&2048){ra(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,M=f.id,A=f.onPostCommit;typeof A=="function"&&A(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Jt(n,n.return,V)}}else ra(t,n,a,o);break;case 13:ra(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?ra(t,n,a,o):Ho(t,n):f._visibility&2?ra(t,n,a,o):(f._visibility|=2,Cr(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Tf(M,n);break;case 24:ra(t,n,a,o),u&2048&&Af(n.alternate,n);break;default:ra(t,n,a,o)}}function Cr(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,M=n,A=a,V=o,se=M.flags;switch(M.tag){case 0:case 11:case 15:Cr(f,M,A,V,u),Bo(8,M);break;case 23:break;case 22:var _e=M.stateNode;M.memoizedState!==null?_e._visibility&2?Cr(f,M,A,V,u):Ho(f,M):(_e._visibility|=2,Cr(f,M,A,V,u)),u&&se&2048&&Tf(M.alternate,M);break;case 24:Cr(f,M,A,V,u),u&&se&2048&&Af(M.alternate,M);break;default:Cr(f,M,A,V,u)}n=n.sibling}}function Ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ho(a,o),u&2048&&Tf(o.alternate,o);break;case 24:Ho(a,o),u&2048&&Af(o.alternate,o);break;default:Ho(a,o)}n=n.sibling}}var Go=8192;function wr(t){if(t.subtreeFlags&Go)for(t=t.child;t!==null;)vg(t),t=t.sibling}function vg(t){switch(t.tag){case 26:wr(t),t.flags&Go&&t.memoizedState!==null&&Sy(ji,t.memoizedState,t.memoizedProps);break;case 5:wr(t);break;case 3:case 4:var n=ji;ji=mc(t.stateNode.containerInfo),wr(t),ji=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Go,Go=16777216,wr(t),Go=n):wr(t));break;default:wr(t)}}function xg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Vo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];In=o,Sg(o,t)}xg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yg(t),t=t.sibling}function yg(t){switch(t.tag){case 0:case 11:case 15:Vo(t),t.flags&2048&&$a(9,t,t.return);break;case 3:Vo(t);break;case 12:Vo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ic(t)):Vo(t);break;default:Vo(t)}}function ic(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];In=o,Sg(o,t)}xg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),ic(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ic(n));break;default:ic(n)}t=t.sibling}}function Sg(t,n){for(;In!==null;){var a=In;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:bo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,In=o;else e:for(a=t;In!==null;){o=In;var u=o.sibling,f=o.return;if(hg(o),o===a){In=null;break e}if(u!==null){u.return=f,In=u;break e}In=f}}}var Ix={getCacheForType:function(t){var n=Wn(Dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Bx=typeof WeakMap=="function"?WeakMap:Map,jt=0,tn=null,At=null,Pt=0,Xt=0,Si=null,ns=!1,Dr=!1,Rf=!1,Na=0,hn=0,is=0,Vs=0,Cf=0,Pi=0,Ur=0,ko=null,ri=null,wf=!1,Df=0,ac=1/0,sc=null,as=null,Vn=0,ss=null,Nr=null,Lr=0,Uf=0,Nf=null,Mg=null,jo=0,Lf=null;function Mi(){if((jt&2)!==0&&Pt!==0)return Pt&-Pt;if(H.T!==null){var t=yr;return t!==0?t:Hf()}return Nt()}function Eg(){Pi===0&&(Pi=(Pt&536870912)===0||Ft?X():536870912);var t=Oi.current;return t!==null&&(t.flags|=32),Pi}function Ei(t,n,a){(t===tn&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)&&(Or(t,0),rs(t,Pt,Pi,!1)),ve(t,a),((jt&2)===0||t!==tn)&&(t===tn&&((jt&2)===0&&(Vs|=a),hn===4&&rs(t,Pt,Pi,!1)),oa(t))}function bg(t,n,a){if((jt&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||at(t,n),u=o?Gx(t,n):zf(t,n,!0),f=o;do{if(u===0){Dr&&!o&&rs(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Fx(a)){u=zf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var A=t;u=ko;var V=A.current.memoizedState.isDehydrated;if(V&&(Or(A,M).flags|=256),M=zf(A,M,!1),M!==2){if(Rf&&!V){A.errorRecoveryDisabledLanes|=f,Vs|=f,u=4;break e}f=ri,ri=u,f!==null&&(ri===null?ri=f:ri.push.apply(ri,f))}u=M}if(f=!1,u!==2)continue}}if(u===1){Or(t,0),rs(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:rs(o,n,Pi,!ns);break e;case 2:ri=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Df+300-it(),10<u)){if(rs(o,n,Pi,!ns),ot(o,0,!0)!==0)break e;o.timeoutHandle=$g(Tg.bind(null,o,a,ri,sc,wf,n,Pi,Vs,Ur,ns,f,2,-0,0),u);break e}Tg(o,a,ri,sc,wf,n,Pi,Vs,Ur,ns,f,0,-0,0)}}break}while(!0);oa(t)}function Tg(t,n,a,o,u,f,M,A,V,se,_e,Me,oe,ue){if(t.timeoutHandle=-1,Me=n.subtreeFlags,(Me&8192||(Me&16785408)===16785408)&&(Qo={stylesheets:null,count:0,unsuspend:yy},vg(n),Me=My(),Me!==null)){t.cancelPendingCommit=Me(Ng.bind(null,t,n,f,a,o,u,M,A,V,_e,1,oe,ue)),rs(t,f,M,!se);return}Ng(t,n,f,a,o,u,M,A,V)}function Fx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!_i(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rs(t,n,a,o){n&=~Cf,n&=~Vs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-je(u),M=1<<f;o[f]=-1,u&=~M}a!==0&&Be(t,a,n)}function rc(){return(jt&6)===0?(Xo(0),!1):!0}function Of(){if(At!==null){if(Xt===0)var t=At.return;else t=At,ba=zs=null,Ku(t),Ar=null,Po=0,t=At;for(;t!==null;)ag(t.alternate,t),t=t.return;At=null}}function Or(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,iy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Of(),tn=t,At=a=Sa(t.current,null),Pt=n,Xt=0,Si=null,ns=!1,Dr=at(t,n),Rf=!1,Ur=Pi=Cf=Vs=is=hn=0,ri=ko=null,wf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-je(o),f=1<<u;n|=t[u],o&=~f}return Na=n,Cl(),a}function Ag(t,n){yt=null,H.H=Wl,n===Ao||n===Il?(n=kp(),Xt=3):n===Hp?(n=kp(),Xt=4):Xt=n===jm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Si=n,At===null&&(hn=1,Jl(t,Di(n,t.current)))}function Rg(){var t=H.H;return H.H=Wl,t===null?Wl:t}function Cg(){var t=H.A;return H.A=Ix,t}function Pf(){hn=4,ns||(Pt&4194048)!==Pt&&Oi.current!==null||(Dr=!0),(is&134217727)===0&&(Vs&134217727)===0||tn===null||rs(tn,Pt,Pi,!1)}function zf(t,n,a){var o=jt;jt|=2;var u=Rg(),f=Cg();(tn!==t||Pt!==n)&&(sc=null,Or(t,n)),n=!1;var M=hn;e:do try{if(Xt!==0&&At!==null){var A=At,V=Si;switch(Xt){case 8:Of(),M=6;break e;case 3:case 2:case 9:case 6:Oi.current===null&&(n=!0);var se=Xt;if(Xt=0,Si=null,Pr(t,A,V,se),a&&Dr){M=0;break e}break;default:se=Xt,Xt=0,Si=null,Pr(t,A,V,se)}}Hx(),M=hn;break}catch(_e){Ag(t,_e)}while(!0);return n&&t.shellSuspendCounter++,ba=zs=null,jt=o,H.H=u,H.A=f,At===null&&(tn=null,Pt=0,Cl()),M}function Hx(){for(;At!==null;)wg(At)}function Gx(t,n){var a=jt;jt|=2;var o=Rg(),u=Cg();tn!==t||Pt!==n?(sc=null,ac=it()+500,Or(t,n)):Dr=at(t,n);e:do try{if(Xt!==0&&At!==null){n=At;var f=Si;t:switch(Xt){case 1:Xt=0,Si=null,Pr(t,n,f,1);break;case 2:case 9:if(Gp(f)){Xt=0,Si=null,Dg(n);break}n=function(){Xt!==2&&Xt!==9||tn!==t||(Xt=7),oa(t)},f.then(n,n);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:Gp(f)?(Xt=0,Si=null,Dg(n)):(Xt=0,Si=null,Pr(t,n,f,7));break;case 5:var M=null;switch(At.tag){case 26:M=At.memoizedState;case 5:case 27:var A=At;if(!M||f0(M)){Xt=0,Si=null;var V=A.sibling;if(V!==null)At=V;else{var se=A.return;se!==null?(At=se,oc(se)):At=null}break t}}Xt=0,Si=null,Pr(t,n,f,5);break;case 6:Xt=0,Si=null,Pr(t,n,f,6);break;case 8:Of(),hn=6;break e;default:throw Error(s(462))}}Vx();break}catch(_e){Ag(t,_e)}while(!0);return ba=zs=null,H.H=o,H.A=u,jt=a,At!==null?0:(tn=null,Pt=0,Cl(),hn)}function Vx(){for(;At!==null&&!on();)wg(At)}function wg(t){var n=ng(t.alternate,t,Na);t.memoizedProps=t.pendingProps,n===null?oc(t):At=n}function Dg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Km(a,n,n.pendingProps,n.type,void 0,Pt);break;case 11:n=Km(a,n,n.pendingProps,n.type.render,n.ref,Pt);break;case 5:Ku(n);default:ag(a,n),n=At=Up(n,Na),n=ng(a,n,Na)}t.memoizedProps=t.pendingProps,n===null?oc(t):At=n}function Pr(t,n,a,o){ba=zs=null,Ku(n),Ar=null,Po=0;var u=n.return;try{if(Ux(t,u,n,a,Pt)){hn=1,Jl(t,Di(a,t.current)),At=null;return}}catch(f){if(u!==null)throw At=u,f;hn=1,Jl(t,Di(a,t.current)),At=null;return}n.flags&32768?(Ft||o===1?t=!0:Dr||(Pt&536870912)!==0?t=!1:(ns=t=!0,(o===2||o===9||o===3||o===6)&&(o=Oi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Ug(n,t)):oc(n)}function oc(t){var n=t;do{if((n.flags&32768)!==0){Ug(n,ns);return}t=n.return;var a=Lx(n.alternate,n,Na);if(a!==null){At=a;return}if(n=n.sibling,n!==null){At=n;return}At=n=t}while(n!==null);hn===0&&(hn=5)}function Ug(t,n){do{var a=Ox(t.alternate,t);if(a!==null){a.flags&=32767,At=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){At=t;return}At=t=a}while(t!==null);hn=6,At=null}function Ng(t,n,a,o,u,f,M,A,V){t.cancelPendingCommit=null;do lc();while(Vn!==0);if((jt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Tu,Ge(t,a,f,M,A,V),t===tn&&(At=tn=null,Pt=0),Nr=n,ss=t,Lr=a,Uf=f,Nf=u,Mg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,qx(C,function(){return Ig(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,u=K.p,K.p=2,M=jt,jt|=4;try{Px(t,n,a)}finally{jt=M,K.p=u,H.T=o}}Vn=1,Lg(),Og(),Pg()}}function Lg(){if(Vn===1){Vn=0;var t=ss,n=Nr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var o=K.p;K.p=2;var u=jt;jt|=4;try{mg(n,t);var f=Yf,M=Sp(t.containerInfo),A=f.focusedElem,V=f.selectionRange;if(M!==A&&A&&A.ownerDocument&&yp(A.ownerDocument.documentElement,A)){if(V!==null&&yu(A)){var se=V.start,_e=V.end;if(_e===void 0&&(_e=se),"selectionStart"in A)A.selectionStart=se,A.selectionEnd=Math.min(_e,A.value.length);else{var Me=A.ownerDocument||document,oe=Me&&Me.defaultView||window;if(oe.getSelection){var ue=oe.getSelection(),ct=A.textContent.length,st=Math.min(V.start,ct),Yt=V.end===void 0?st:Math.min(V.end,ct);!ue.extend&&st>Yt&&(M=Yt,Yt=st,st=M);var $=xp(A,st),W=xp(A,Yt);if($&&W&&(ue.rangeCount!==1||ue.anchorNode!==$.node||ue.anchorOffset!==$.offset||ue.focusNode!==W.node||ue.focusOffset!==W.offset)){var ie=Me.createRange();ie.setStart($.node,$.offset),ue.removeAllRanges(),st>Yt?(ue.addRange(ie),ue.extend(W.node,W.offset)):(ie.setEnd(W.node,W.offset),ue.addRange(ie))}}}}for(Me=[],ue=A;ue=ue.parentNode;)ue.nodeType===1&&Me.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Me.length;A++){var ye=Me[A];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}yc=!!Wf,Yf=Wf=null}finally{jt=u,K.p=o,H.T=a}}t.current=n,Vn=2}}function Og(){if(Vn===2){Vn=0;var t=ss,n=Nr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var o=K.p;K.p=2;var u=jt;jt|=4;try{fg(t,n.alternate,n)}finally{jt=u,K.p=o,H.T=a}}Vn=3}}function Pg(){if(Vn===4||Vn===3){Vn=0,pt();var t=ss,n=Nr,a=Lr,o=Mg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Vn=5:(Vn=0,Nr=ss=null,zg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(as=null),$t(a),n=n.stateNode,Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(I,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=H.T,u=K.p,K.p=2,H.T=null;try{for(var f=t.onRecoverableError,M=0;M<o.length;M++){var A=o[M];f(A.value,{componentStack:A.stack})}}finally{H.T=n,K.p=u}}(Lr&3)!==0&&lc(),oa(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Lf?jo++:(jo=0,Lf=t):jo=0,Xo(0)}}function zg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,bo(n)))}function lc(t){return Lg(),Og(),Pg(),Ig()}function Ig(){if(Vn!==5)return!1;var t=ss,n=Uf;Uf=0;var a=$t(Lr),o=H.T,u=K.p;try{K.p=32>a?32:a,H.T=null,a=Nf,Nf=null;var f=ss,M=Lr;if(Vn=0,Nr=ss=null,Lr=0,(jt&6)!==0)throw Error(s(331));var A=jt;if(jt|=4,yg(f.current),_g(f,f.current,M,a),jt=A,Xo(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(I,f)}catch{}return!0}finally{K.p=u,H.T=o,zg(t,n)}}function Bg(t,n,a){n=Di(a,n),n=ff(t.stateNode,n,2),t=Za(t,n,2),t!==null&&(ve(t,2),oa(t))}function Jt(t,n,a){if(t.tag===3)Bg(t,t,a);else for(;n!==null;){if(n.tag===3){Bg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(as===null||!as.has(o))){t=Di(a,t),a=Vm(2),o=Za(n,a,2),o!==null&&(km(a,o,n,t),ve(o,2),oa(o));break}}n=n.return}}function If(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Bx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Rf=!0,u.add(a),t=kx.bind(null,t,n,a),n.then(t,t))}function kx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,tn===t&&(Pt&a)===a&&(hn===4||hn===3&&(Pt&62914560)===Pt&&300>it()-Df?(jt&2)===0&&Or(t,0):Cf|=a,Ur===Pt&&(Ur=0)),oa(t)}function Fg(t,n){n===0&&(n=Oe()),t=gr(t,n),t!==null&&(ve(t,n),oa(t))}function jx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Fg(t,a)}function Xx(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Fg(t,a)}function qx(t,n){return nt(t,n)}var cc=null,zr=null,Bf=!1,uc=!1,Ff=!1,ks=0;function oa(t){t!==zr&&t.next===null&&(zr===null?cc=zr=t:zr=zr.next=t),uc=!0,Bf||(Bf=!0,Yx())}function Xo(t,n){if(!Ff&&uc){Ff=!0;do for(var a=!1,o=cc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var M=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-je(42|t)+1)-1,f&=u&~(M&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,kg(o,f))}else f=Pt,f=ot(o,o===tn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||at(o,f)||(a=!0,kg(o,f));o=o.next}while(a);Ff=!1}}function Wx(){Hg()}function Hg(){uc=Bf=!1;var t=0;ks!==0&&(ny()&&(t=ks),ks=0);for(var n=it(),a=null,o=cc;o!==null;){var u=o.next,f=Gg(o,n);f===0?(o.next=null,a===null?cc=u:a.next=u,u===null&&(zr=a)):(a=o,(t!==0||(f&3)!==0)&&(uc=!0)),o=u}Xo(t)}function Gg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var M=31-je(f),A=1<<M,V=u[M];V===-1?((A&a)===0||(A&o)!==0)&&(u[M]=wt(A,n)):V<=n&&(t.expiredLanes|=A),f&=~A}if(n=tn,a=Pt,a=ot(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&k(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||at(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&k(o),$t(a)){case 2:case 8:a=he;break;case 32:a=C;break;case 268435456:a=Y;break;default:a=C}return o=Vg.bind(null,t),a=nt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&k(o),t.callbackPriority=2,t.callbackNode=null,2}function Vg(t,n){if(Vn!==0&&Vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(lc()&&t.callbackNode!==a)return null;var o=Pt;return o=ot(t,t===tn?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(bg(t,o,n),Gg(t,it()),t.callbackNode!=null&&t.callbackNode===a?Vg.bind(null,t):null)}function kg(t,n){if(lc())return null;bg(t,n,!0)}function Yx(){ay(function(){(jt&6)!==0?nt(Ut,Wx):Hg()})}function Hf(){return ks===0&&(ks=X()),ks}function jg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:O(""+t)}function Xg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Zx(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=jg((u[xn]||null).action),M=o.submitter;M&&(n=(n=M[xn]||null)?jg(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var A=new Cs("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ks!==0){var V=M?Xg(u,M):new FormData(u);rf(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(A.preventDefault(),V=M?Xg(u,M):new FormData(u),rf(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var Gf=0;Gf<bu.length;Gf++){var Vf=bu[Gf],Kx=Vf.toLowerCase(),Qx=Vf[0].toUpperCase()+Vf.slice(1);ki(Kx,"on"+Qx)}ki(bp,"onAnimationEnd"),ki(Tp,"onAnimationIteration"),ki(Ap,"onAnimationStart"),ki("dblclick","onDoubleClick"),ki("focusin","onFocus"),ki("focusout","onBlur"),ki(px,"onTransitionRun"),ki(mx,"onTransitionStart"),ki(gx,"onTransitionCancel"),ki(Rp,"onTransitionEnd"),D("onMouseEnter",["mouseout","mouseover"]),D("onMouseLeave",["mouseout","mouseover"]),D("onPointerEnter",["pointerout","pointerover"]),D("onPointerLeave",["pointerout","pointerover"]),pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pi("onBeforeInput",["compositionend","keypress","textInput","paste"]),pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qo));function qg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var M=o.length-1;0<=M;M--){var A=o[M],V=A.instance,se=A.currentTarget;if(A=A.listener,V!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=se;try{f(u)}catch(_e){Ql(_e)}u.currentTarget=null,f=V}else for(M=0;M<o.length;M++){if(A=o[M],V=A.instance,se=A.currentTarget,A=A.listener,V!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=se;try{f(u)}catch(_e){Ql(_e)}u.currentTarget=null,f=V}}}}function Rt(t,n){var a=n[Ri];a===void 0&&(a=n[Ri]=new Set);var o=t+"__bubble";a.has(o)||(Wg(n,t,2,!1),a.add(o))}function kf(t,n,a){var o=0;n&&(o|=4),Wg(a,t,o,n)}var fc="_reactListening"+Math.random().toString(36).slice(2);function jf(t){if(!t[fc]){t[fc]=!0,As.forEach(function(a){a!=="selectionchange"&&(Jx.has(a)||kf(a,!1,t),kf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[fc]||(n[fc]=!0,kf("selectionchange",!1,n))}}function Wg(t,n,a,o){switch(_0(n)){case 2:var u=Ty;break;case 8:u=Ay;break;default:u=ah}a=u.bind(null,n,a,t),u=void 0,!cr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Xf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var A=o.stateNode.containerInfo;if(A===u)break;if(M===4)for(M=o.return;M!==null;){var V=M.tag;if((V===3||V===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;A!==null;){if(M=di(A),M===null)return;if(V=M.tag,V===5||V===6||V===26||V===27){o=f=M;continue e}A=A.parentNode}}o=o.return}ja(function(){var se=f,_e=Fe(a),Me=[];e:{var oe=Cp.get(t);if(oe!==void 0){var ue=Cs,ct=t;switch(t){case"keypress":if(ii(a)===0)break e;case"keydown":case"keyup":ue=qv;break;case"focusin":ct="focus",ue=mu;break;case"focusout":ct="blur",ue=mu;break;case"beforeblur":case"afterblur":ue=mu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=Zv;break;case bp:case Tp:case Ap:ue=Iv;break;case Rp:ue=Qv;break;case"scroll":case"scrollend":ue=ya;break;case"wheel":ue=$v;break;case"copy":case"cut":case"paste":ue=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=sp;break;case"toggle":case"beforetoggle":ue=tx}var st=(n&4)!==0,Yt=!st&&(t==="scroll"||t==="scrollend"),$=st?oe!==null?oe+"Capture":null:oe;st=[];for(var W=se,ie;W!==null;){var ye=W;if(ie=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||ie===null||$===null||(ye=xa(W,$),ye!=null&&st.push(Wo(W,ye,ie))),Yt)break;W=W.return}0<st.length&&(oe=new ue(oe,ct,null,a,_e),Me.push({event:oe,listeners:st}))}}if((n&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",oe&&a!==Re&&(ct=a.relatedTarget||a.fromElement)&&(di(ct)||ct[Xn]))break e;if((ue||oe)&&(oe=_e.window===_e?_e:(oe=_e.ownerDocument)?oe.defaultView||oe.parentWindow:window,ue?(ct=a.relatedTarget||a.toElement,ue=se,ct=ct?di(ct):null,ct!==null&&(Yt=c(ct),st=ct.tag,ct!==Yt||st!==5&&st!==27&&st!==6)&&(ct=null)):(ue=null,ct=se),ue!==ct)){if(st=ip,ye="onMouseLeave",$="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(st=sp,ye="onPointerLeave",$="onPointerEnter",W="pointer"),Yt=ue==null?oe:va(ue),ie=ct==null?oe:va(ct),oe=new st(ye,W+"leave",ue,a,_e),oe.target=Yt,oe.relatedTarget=ie,ye=null,di(_e)===se&&(st=new st($,W+"enter",ct,a,_e),st.target=ie,st.relatedTarget=Yt,ye=st),Yt=ye,ue&&ct)t:{for(st=ue,$=ct,W=0,ie=st;ie;ie=Ir(ie))W++;for(ie=0,ye=$;ye;ye=Ir(ye))ie++;for(;0<W-ie;)st=Ir(st),W--;for(;0<ie-W;)$=Ir($),ie--;for(;W--;){if(st===$||$!==null&&st===$.alternate)break t;st=Ir(st),$=Ir($)}st=null}else st=null;ue!==null&&Yg(Me,oe,ue,st,!1),ct!==null&&Yt!==null&&Yg(Me,Yt,ct,st,!0)}}e:{if(oe=se?va(se):window,ue=oe.nodeName&&oe.nodeName.toLowerCase(),ue==="select"||ue==="input"&&oe.type==="file")var We=dp;else if(fp(oe))if(pp)We=fx;else{We=cx;var Mt=lx}else ue=oe.nodeName,!ue||ue.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?se&&lr(se.elementType)&&(We=dp):We=ux;if(We&&(We=We(t,se))){hp(Me,We,a,_e);break e}Mt&&Mt(t,oe,se),t==="focusout"&&se&&oe.type==="number"&&se.memoizedProps.value!=null&&Rn(oe,"number",oe.value)}switch(Mt=se?va(se):window,t){case"focusin":(fp(Mt)||Mt.contentEditable==="true")&&(dr=Mt,Su=se,xo=null);break;case"focusout":xo=Su=dr=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Mp(Me,a,_e);break;case"selectionchange":if(dx)break;case"keydown":case"keyup":Mp(Me,a,_e)}var et;if(_u)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else hr?cp(t,a)&&(rt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(rp&&a.locale!=="ko"&&(hr||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&hr&&(et=wi()):(Gi=_e,ur="value"in Gi?Gi.value:Gi.textContent,hr=!0)),Mt=hc(se,rt),0<Mt.length&&(rt=new ap(rt,t,null,a,_e),Me.push({event:rt,listeners:Mt}),et?rt.data=et:(et=up(a),et!==null&&(rt.data=et)))),(et=ix?ax(t,a):sx(t,a))&&(rt=hc(se,"onBeforeInput"),0<rt.length&&(Mt=new ap("onBeforeInput","beforeinput",null,a,_e),Me.push({event:Mt,listeners:rt}),Mt.data=et)),Zx(Me,t,se,a,_e)}qg(Me,n)})}function Wo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function hc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=xa(t,a),u!=null&&o.unshift(Wo(t,u,f)),u=xa(t,n),u!=null&&o.push(Wo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function Ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Yg(t,n,a,o,u){for(var f=n._reactName,M=[];a!==null&&a!==o;){var A=a,V=A.alternate,se=A.stateNode;if(A=A.tag,V!==null&&V===o)break;A!==5&&A!==26&&A!==27||se===null||(V=se,u?(se=xa(a,f),se!=null&&M.unshift(Wo(a,se,V))):u||(se=xa(a,f),se!=null&&M.push(Wo(a,se,V)))),a=a.return}M.length!==0&&t.push({event:n,listeners:M})}var $x=/\r\n?/g,ey=/\u0000|\uFFFD/g;function Zg(t){return(typeof t=="string"?t:""+t).replace($x,`
`).replace(ey,"")}function Kg(t,n){return n=Zg(n),Zg(t)===n}function dc(){}function Wt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Jn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Jn(t,""+o);break;case"className":ze(t,"class",o);break;case"tabIndex":ze(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ze(t,a,o);break;case"style":bl(t,o,f);break;case"data":if(n!=="object"){ze(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=O(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Wt(t,n,"name",u.name,u,null),Wt(t,n,"formEncType",u.formEncType,u,null),Wt(t,n,"formMethod",u.formMethod,u,null),Wt(t,n,"formTarget",u.formTarget,u,null)):(Wt(t,n,"encType",u.encType,u,null),Wt(t,n,"method",u.method,u,null),Wt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=O(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=dc);break;case"onScroll":o!=null&&Rt("scroll",t);break;case"onScrollEnd":o!=null&&Rt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=O(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Rt("beforetoggle",t),Rt("toggle",t),be(t,"popover",o);break;case"xlinkActuate":Pe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Pe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Pe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Pe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Pe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Pe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":be(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Rs.get(a)||a,be(t,a,o))}}function qf(t,n,a,o,u,f){switch(a){case"style":bl(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Jn(t,o):(typeof o=="number"||typeof o=="bigint")&&Jn(t,""+o);break;case"onScroll":o!=null&&Rt("scroll",t);break;case"onScrollEnd":o!=null&&Rt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=dc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!or.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):be(t,a,o)}}}function kn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Rt("error",t),Rt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(t,n,f,M,a,null)}}u&&Wt(t,n,"srcSet",a.srcSet,a,null),o&&Wt(t,n,"src",a.src,a,null);return;case"input":Rt("invalid",t);var A=f=M=u=null,V=null,se=null;for(o in a)if(a.hasOwnProperty(o)){var _e=a[o];if(_e!=null)switch(o){case"name":u=_e;break;case"type":M=_e;break;case"checked":V=_e;break;case"defaultChecked":se=_e;break;case"value":f=_e;break;case"defaultValue":A=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(s(137,n));break;default:Wt(t,n,o,_e,a,null)}}Lt(t,f,A,V,se,M,u,!1),en(t);return;case"select":Rt("invalid",t),o=M=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":M=A;break;case"multiple":o=A;default:Wt(t,n,u,A,a,null)}n=f,a=M,t.multiple=!!o,n!=null?cn(t,!!o,n,!1):a!=null&&cn(t,!!o,a,!0);return;case"textarea":Rt("invalid",t),f=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(A=a[M],A!=null))switch(M){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Wt(t,n,M,A,a,null)}yn(t,o,u,f),en(t);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Wt(t,n,V,o,a,null)}return;case"dialog":Rt("beforetoggle",t),Rt("toggle",t),Rt("cancel",t),Rt("close",t);break;case"iframe":case"object":Rt("load",t);break;case"video":case"audio":for(o=0;o<qo.length;o++)Rt(qo[o],t);break;case"image":Rt("error",t),Rt("load",t);break;case"details":Rt("toggle",t);break;case"embed":case"source":case"link":Rt("error",t),Rt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(se in a)if(a.hasOwnProperty(se)&&(o=a[se],o!=null))switch(se){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(t,n,se,o,a,null)}return;default:if(lr(n)){for(_e in a)a.hasOwnProperty(_e)&&(o=a[_e],o!==void 0&&qf(t,n,_e,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Wt(t,n,A,o,a,null))}function ty(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,M=null,A=null,V=null,se=null,_e=null;for(ue in a){var Me=a[ue];if(a.hasOwnProperty(ue)&&Me!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":V=Me;default:o.hasOwnProperty(ue)||Wt(t,n,ue,null,o,Me)}}for(var oe in o){var ue=o[oe];if(Me=a[oe],o.hasOwnProperty(oe)&&(ue!=null||Me!=null))switch(oe){case"type":f=ue;break;case"name":u=ue;break;case"checked":se=ue;break;case"defaultChecked":_e=ue;break;case"value":M=ue;break;case"defaultValue":A=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:ue!==Me&&Wt(t,n,oe,ue,o,Me)}}An(t,M,A,V,se,_e,f,u);return;case"select":ue=M=A=oe=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":ue=V;default:o.hasOwnProperty(f)||Wt(t,n,f,null,o,V)}for(u in o)if(f=o[u],V=a[u],o.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":oe=f;break;case"defaultValue":A=f;break;case"multiple":M=f;default:f!==V&&Wt(t,n,u,f,o,V)}n=A,a=M,o=ue,oe!=null?cn(t,!!a,oe,!1):!!o!=!!a&&(n!=null?cn(t,!!a,n,!0):cn(t,!!a,a?[]:"",!1));return;case"textarea":ue=oe=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Wt(t,n,A,null,o,u)}for(M in o)if(u=o[M],f=a[M],o.hasOwnProperty(M)&&(u!=null||f!=null))switch(M){case"value":oe=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Wt(t,n,M,u,o,f)}gn(t,oe,ue);return;case"option":for(var ct in a)if(oe=a[ct],a.hasOwnProperty(ct)&&oe!=null&&!o.hasOwnProperty(ct))switch(ct){case"selected":t.selected=!1;break;default:Wt(t,n,ct,null,o,oe)}for(V in o)if(oe=o[V],ue=a[V],o.hasOwnProperty(V)&&oe!==ue&&(oe!=null||ue!=null))switch(V){case"selected":t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:Wt(t,n,V,oe,o,ue)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in a)oe=a[st],a.hasOwnProperty(st)&&oe!=null&&!o.hasOwnProperty(st)&&Wt(t,n,st,null,o,oe);for(se in o)if(oe=o[se],ue=a[se],o.hasOwnProperty(se)&&oe!==ue&&(oe!=null||ue!=null))switch(se){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(s(137,n));break;default:Wt(t,n,se,oe,o,ue)}return;default:if(lr(n)){for(var Yt in a)oe=a[Yt],a.hasOwnProperty(Yt)&&oe!==void 0&&!o.hasOwnProperty(Yt)&&qf(t,n,Yt,void 0,o,oe);for(_e in o)oe=o[_e],ue=a[_e],!o.hasOwnProperty(_e)||oe===ue||oe===void 0&&ue===void 0||qf(t,n,_e,oe,o,ue);return}}for(var $ in a)oe=a[$],a.hasOwnProperty($)&&oe!=null&&!o.hasOwnProperty($)&&Wt(t,n,$,null,o,oe);for(Me in o)oe=o[Me],ue=a[Me],!o.hasOwnProperty(Me)||oe===ue||oe==null&&ue==null||Wt(t,n,Me,oe,o,ue)}var Wf=null,Yf=null;function pc(t){return t.nodeType===9?t:t.ownerDocument}function Qg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Zf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kf=null;function ny(){var t=window.event;return t&&t.type==="popstate"?t===Kf?!1:(Kf=t,!0):(Kf=null,!1)}var $g=typeof setTimeout=="function"?setTimeout:void 0,iy=typeof clearTimeout=="function"?clearTimeout:void 0,e0=typeof Promise=="function"?Promise:void 0,ay=typeof queueMicrotask=="function"?queueMicrotask:typeof e0<"u"?function(t){return e0.resolve(null).then(t).catch(sy)}:$g;function sy(t){setTimeout(function(){throw t})}function os(t){return t==="head"}function t0(t,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var M=t.ownerDocument;if(a&1&&Yo(M.documentElement),a&2&&Yo(M.body),a&4)for(a=M.head,Yo(a),M=a.firstChild;M;){var A=M.nextSibling,V=M.nodeName;M[ta]||V==="SCRIPT"||V==="STYLE"||V==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=A}}if(u===0){t.removeChild(f),nl(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);nl(n)}function Qf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qf(a),hi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ry(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ta])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Xi(t.nextSibling),t===null)break}return null}function oy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Xi(t.nextSibling),t===null))return null;return t}function Jf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function ly(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Xi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var $f=null;function n0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function i0(t,n,a){switch(n=pc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Yo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);hi(t)}var zi=new Map,a0=new Set;function mc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var La=K.d;K.d={f:cy,r:uy,D:fy,C:hy,L:dy,m:py,X:gy,S:my,M:_y};function cy(){var t=La.f(),n=rc();return t||n}function uy(t){var n=ni(t);n!==null&&n.tag===5&&n.type==="form"?bm(n):La.r(t)}var Br=typeof document>"u"?null:document;function s0(t,n,a){var o=Br;if(o&&typeof n=="string"&&n){var u=Vt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),a0.has(u)||(a0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),kn(n,"link",t),Gt(n),o.head.appendChild(n)))}}function fy(t){La.D(t),s0("dns-prefetch",t,null)}function hy(t,n){La.C(t,n),s0("preconnect",t,n)}function dy(t,n,a){La.L(t,n,a);var o=Br;if(o&&t&&n){var u='link[rel="preload"][as="'+Vt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Vt(a.imageSizes)+'"]')):u+='[href="'+Vt(t)+'"]';var f=u;switch(n){case"style":f=Fr(t);break;case"script":f=Hr(t)}zi.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),zi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Zo(f))||n==="script"&&o.querySelector(Ko(f))||(n=o.createElement("link"),kn(n,"link",t),Gt(n),o.head.appendChild(n)))}}function py(t,n){La.m(t,n);var a=Br;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Vt(o)+'"][href="'+Vt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Hr(t)}if(!zi.has(f)&&(t=_({rel:"modulepreload",href:t},n),zi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ko(f)))return}o=a.createElement("link"),kn(o,"link",t),Gt(o),a.head.appendChild(o)}}}function my(t,n,a){La.S(t,n,a);var o=Br;if(o&&t){var u=Hi(o).hoistableStyles,f=Fr(t);n=n||"default";var M=u.get(f);if(!M){var A={loading:0,preload:null};if(M=o.querySelector(Zo(f)))A.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=zi.get(f))&&eh(t,a);var V=M=o.createElement("link");Gt(V),kn(V,"link",t),V._p=new Promise(function(se,_e){V.onload=se,V.onerror=_e}),V.addEventListener("load",function(){A.loading|=1}),V.addEventListener("error",function(){A.loading|=2}),A.loading|=4,gc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:A},u.set(f,M)}}}function gy(t,n){La.X(t,n);var a=Br;if(a&&t){var o=Hi(a).hoistableScripts,u=Hr(t),f=o.get(u);f||(f=a.querySelector(Ko(u)),f||(t=_({src:t,async:!0},n),(n=zi.get(u))&&th(t,n),f=a.createElement("script"),Gt(f),kn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function _y(t,n){La.M(t,n);var a=Br;if(a&&t){var o=Hi(a).hoistableScripts,u=Hr(t),f=o.get(u);f||(f=a.querySelector(Ko(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=zi.get(u))&&th(t,n),f=a.createElement("script"),Gt(f),kn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function r0(t,n,a,o){var u=(u=xe.current)?mc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Fr(a.href),a=Hi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Fr(a.href);var f=Hi(u).hoistableStyles,M=f.get(t);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,M),(f=u.querySelector(Zo(t)))&&!f._p&&(M.instance=f,M.state.loading=5),zi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},zi.set(t,a),f||vy(u,t,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Hr(a),a=Hi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Fr(t){return'href="'+Vt(t)+'"'}function Zo(t){return'link[rel="stylesheet"]['+t+"]"}function o0(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function vy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),kn(n,"link",a),Gt(n),t.head.appendChild(n))}function Hr(t){return'[src="'+Vt(t)+'"]'}function Ko(t){return"script[async]"+t}function l0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(o)return n.instance=o,Gt(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Gt(o),kn(o,"style",u),gc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Fr(a.href);var f=t.querySelector(Zo(u));if(f)return n.state.loading|=4,n.instance=f,Gt(f),f;o=o0(a),(u=zi.get(u))&&eh(o,u),f=(t.ownerDocument||t).createElement("link"),Gt(f);var M=f;return M._p=new Promise(function(A,V){M.onload=A,M.onerror=V}),kn(f,"link",o),n.state.loading|=4,gc(f,a.precedence,t),n.instance=f;case"script":return f=Hr(a.src),(u=t.querySelector(Ko(f)))?(n.instance=u,Gt(u),u):(o=a,(u=zi.get(f))&&(o=_({},a),th(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),Gt(u),kn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,gc(o,a.precedence,t));return n.instance}function gc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,M=0;M<o.length;M++){var A=o[M];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function eh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function th(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var _c=null;function c0(t,n,a){if(_c===null){var o=new Map,u=_c=new Map;u.set(a,o)}else u=_c,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ta]||f[mn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=t+M;var A=o.get(M);A?A.push(f):o.set(M,[f])}}return o}function u0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function xy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function f0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Qo=null;function yy(){}function Sy(t,n,a){if(Qo===null)throw Error(s(475));var o=Qo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Fr(a.href),f=t.querySelector(Zo(u));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=vc.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=f,Gt(f);return}f=t.ownerDocument||t,a=o0(a),(u=zi.get(u))&&eh(a,u),f=f.createElement("link"),Gt(f);var M=f;M._p=new Promise(function(A,V){M.onload=A,M.onerror=V}),kn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=vc.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function My(){if(Qo===null)throw Error(s(475));var t=Qo;return t.stylesheets&&t.count===0&&nh(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&nh(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function vc(){if(this.count--,this.count===0){if(this.stylesheets)nh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var xc=null;function nh(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,xc=new Map,n.forEach(Ey,t),xc=null,vc.call(t))}function Ey(t,n){if(!(n.state.loading&4)){var a=xc.get(t);if(a)var o=a.get(null);else{a=new Map,xc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var M=u[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),f=a.get(M)||o,f===o&&a.set(null,u),a.set(M,u),this.count++,o=vc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Jo={$$typeof:N,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function by(t,n,a,o,u,f,M,A){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=de(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=de(0),this.hiddenUpdates=de(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function h0(t,n,a,o,u,f,M,A,V,se,_e,Me){return t=new by(t,n,a,M,A,V,se,Me),n=1,f===!0&&(n|=24),f=vi(3,null,null,n),t.current=f,f.stateNode=t,n=zu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Hu(f),t}function d0(t){return t?(t=_r,t):_r}function p0(t,n,a,o,u,f){u=d0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ya(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Za(t,o,n),a!==null&&(Ei(a,t,n),Co(a,t,n))}function m0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ih(t,n){m0(t,n),(t=t.alternate)&&m0(t,n)}function g0(t){if(t.tag===13){var n=gr(t,67108864);n!==null&&Ei(n,t,67108864),ih(t,67108864)}}var yc=!0;function Ty(t,n,a,o){var u=H.T;H.T=null;var f=K.p;try{K.p=2,ah(t,n,a,o)}finally{K.p=f,H.T=u}}function Ay(t,n,a,o){var u=H.T;H.T=null;var f=K.p;try{K.p=8,ah(t,n,a,o)}finally{K.p=f,H.T=u}}function ah(t,n,a,o){if(yc){var u=sh(o);if(u===null)Xf(t,n,o,Sc,a),v0(t,o);else if(Cy(u,t,n,a,o))o.stopPropagation();else if(v0(t,o),n&4&&-1<Ry.indexOf(t)){for(;u!==null;){var f=ni(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=Ve(f.pendingLanes);if(M!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var V=1<<31-je(M);A.entanglements[1]|=V,M&=~V}oa(f),(jt&6)===0&&(ac=it()+500,Xo(0))}}break;case 13:A=gr(f,2),A!==null&&Ei(A,f,2),rc(),ih(f,2)}if(f=sh(o),f===null&&Xf(t,n,o,Sc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Xf(t,n,o,null,a)}}function sh(t){return t=Fe(t),rh(t)}var Sc=null;function rh(t){if(Sc=null,t=di(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Sc=t,null}function _0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ye()){case Ut:return 2;case he:return 8;case C:case T:return 32;case Y:return 268435456;default:return 32}default:return 32}}var oh=!1,ls=null,cs=null,us=null,$o=new Map,el=new Map,fs=[],Ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function v0(t,n){switch(t){case"focusin":case"focusout":ls=null;break;case"dragenter":case"dragleave":cs=null;break;case"mouseover":case"mouseout":us=null;break;case"pointerover":case"pointerout":$o.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(n.pointerId)}}function tl(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ni(n),n!==null&&g0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Cy(t,n,a,o,u){switch(n){case"focusin":return ls=tl(ls,t,n,a,o,u),!0;case"dragenter":return cs=tl(cs,t,n,a,o,u),!0;case"mouseover":return us=tl(us,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return $o.set(f,tl($o.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,el.set(f,tl(el.get(f)||null,t,n,a,o,u)),!0}return!1}function x0(t){var n=di(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,jn(t.priority,function(){if(a.tag===13){var o=Mi();o=Ot(o);var u=gr(a,o);u!==null&&Ei(u,a,o),ih(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=sh(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Re=o,a.target.dispatchEvent(o),Re=null}else return n=ni(a),n!==null&&g0(n),t.blockedOn=a,!1;n.shift()}return!0}function y0(t,n,a){Mc(t)&&a.delete(n)}function wy(){oh=!1,ls!==null&&Mc(ls)&&(ls=null),cs!==null&&Mc(cs)&&(cs=null),us!==null&&Mc(us)&&(us=null),$o.forEach(y0),el.forEach(y0)}function Ec(t,n){t.blockedOn===n&&(t.blockedOn=null,oh||(oh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,wy)))}var bc=null;function S0(t){bc!==t&&(bc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){bc===t&&(bc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(rh(o||a)===null)continue;break}var f=ni(a);f!==null&&(t.splice(n,3),n-=3,rf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function nl(t){function n(V){return Ec(V,t)}ls!==null&&Ec(ls,t),cs!==null&&Ec(cs,t),us!==null&&Ec(us,t),$o.forEach(n),el.forEach(n);for(var a=0;a<fs.length;a++){var o=fs[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<fs.length&&(a=fs[0],a.blockedOn===null);)x0(a),a.blockedOn===null&&fs.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],M=u[xn]||null;if(typeof f=="function")M||S0(a);else if(M){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,M=f[xn]||null)A=M.formAction;else if(rh(u)!==null)continue}else A=M.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),S0(a)}}}function lh(t){this._internalRoot=t}Tc.prototype.render=lh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Mi();p0(a,o,t,n,null,null)},Tc.prototype.unmount=lh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;p0(t.current,2,null,t,null,null),rc(),n[Xn]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Nt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<fs.length&&n!==0&&n<fs[a].priority;a++);fs.splice(a,0,t),a===0&&x0(t)}};var M0=e.version;if(M0!=="19.1.0")throw Error(s(527,M0,"19.1.0"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Dy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{I=Ac.inject(Dy),Ue=Ac}catch{}}return al.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Bm,f=Fm,M=Hm,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=h0(t,1,!1,null,null,a,o,u,f,M,A,null),t[Xn]=n.current,jf(t),new lh(n)},al.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=Bm,M=Fm,A=Hm,V=null,se=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(V=a.unstable_transitionCallbacks),a.formState!==void 0&&(se=a.formState)),n=h0(t,1,!0,n,a??null,o,u,f,M,A,V,se),n.context=d0(null),a=n.current,o=Mi(),o=Ot(o),u=Ya(o),u.callback=null,Za(a,u,o),a=o,n.current.lanes=a,ve(n,a),oa(n),t[Xn]=n.current,jf(t),new Tc(n)},al.version="19.1.0",al}var N0;function jy(){if(N0)return fh.exports;N0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),fh.exports=ky(),fh.exports}var Xy=jy();/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wy=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),L0=r=>{const e=Wy(r);return e.charAt(0).toUpperCase()+e.slice(1)},Y_=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),Yy=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=Ne.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},p)=>Ne.createElement("svg",{ref:p,...Zy,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:Y_("lucide",l),...!c&&!Yy(d)&&{"aria-hidden":"true"},...d},[...h.map(([m,_])=>Ne.createElement(m,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=(r,e)=>{const i=Ne.forwardRef(({className:s,...l},c)=>Ne.createElement(Ky,{ref:c,iconNode:e,className:Y_(`lucide-${qy(L0(r))}`,`lucide-${r}`,s),...l}));return i.displayName=L0(r),i};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],O0=kt("activity",Qy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"1qyhux"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]],$y=kt("armchair",Jy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],sl=kt("arrow-up-right",eS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],nS=kt("arrow-up",tS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],mh=kt("boxes",iS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Z_=kt("check",aS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],rS=kt("chevron-right",sS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],lS=kt("circle-check",oS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],uS=kt("database",cS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],hS=kt("download",fS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],P0=kt("file-spreadsheet",dS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],mS=kt("flask-conical",pS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],K_=kt("folder-open",gS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Q_=kt("layers",_S);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Zh=kt("layout-grid",vS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],yS=kt("leaf",xS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],z0=kt("loader-circle",SS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],ES=kt("maximize",MS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"M5 12h14",key:"1ays0h"}]],I0=kt("minus",bS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],AS=kt("move",TS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]],CS=kt("panel-right-close",RS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],B0=kt("play",wS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Rc=kt("plus",DS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],J_=kt("refresh-cw",US);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],LS=kt("settings",NS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],gh=kt("sparkles",OS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],F0=kt("square",PS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],IS=kt("upload",zS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],FS=kt("wifi-off",BS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_h=kt("x",HS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fd="176",Ga={ROTATE:0,DOLLY:1,PAN:2},Ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},GS=0,H0=1,VS=2,$_=1,ev=2,Fa=3,ka=0,ui=1,ua=2,Es=0,io=1,G0=2,V0=3,k0=4,kS=5,Qs=100,jS=101,XS=102,qS=103,WS=104,YS=200,ZS=201,KS=202,QS=203,Kh=204,Qh=205,JS=206,$S=207,eM=208,tM=209,nM=210,iM=211,aM=212,sM=213,rM=214,Jh=0,$h=1,ed=2,so=3,td=4,nd=5,id=6,ad=7,tv=0,oM=1,lM=2,bs=0,cM=1,uM=2,fM=3,nv=4,hM=5,dM=6,pM=7,iv=300,ro=301,oo=302,sd=303,rd=304,uu=306,od=1e3,$s=1001,ld=1002,Ai=1003,mM=1004,Cc=1005,fa=1006,vh=1007,er=1008,pa=1009,av=1010,sv=1011,ml=1012,Hd=1013,tr=1014,ha=1015,yl=1016,Gd=1017,Vd=1018,gl=1020,rv=35902,ov=1021,lv=1022,Ji=1023,_l=1026,vl=1027,kd=1028,jd=1029,cv=1030,Xd=1031,qd=1033,$c=33776,eu=33777,tu=33778,nu=33779,cd=35840,ud=35841,fd=35842,hd=35843,dd=36196,pd=37492,md=37496,gd=37808,_d=37809,vd=37810,xd=37811,yd=37812,Sd=37813,Md=37814,Ed=37815,bd=37816,Td=37817,Ad=37818,Rd=37819,Cd=37820,wd=37821,iu=36492,Dd=36494,Ud=36495,uv=36283,Nd=36284,Ld=36285,Od=36286,gM=3200,_M=3201,fv=0,vM=1,Ss="",ti="srgb",lo="srgb-linear",ou="linear",Zt="srgb",Gr=7680,j0=519,xM=512,yM=513,SM=514,hv=515,MM=516,EM=517,bM=518,TM=519,X0=35044,q0="300 es",Ha=2e3,lu=2001;class ar{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],au=Math.PI/180,Pd=180/Math.PI;function Sl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Zn[r&255]+Zn[r>>8&255]+Zn[r>>16&255]+Zn[r>>24&255]+"-"+Zn[e&255]+Zn[e>>8&255]+"-"+Zn[e>>16&15|64]+Zn[e>>24&255]+"-"+Zn[i&63|128]+Zn[i>>8&255]+"-"+Zn[i>>16&255]+Zn[i>>24&255]+Zn[s&255]+Zn[s>>8&255]+Zn[s>>16&255]+Zn[s>>24&255]).toLowerCase()}function Et(r,e,i){return Math.max(e,Math.min(i,r))}function AM(r,e){return(r%e+e)%e}function xh(r,e,i){return(1-i)*r+i*e}function rl(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function oi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const RM={DEG2RAD:au};class dt{constructor(e=0,i=0){dt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _t{constructor(e,i,s,l,c,h,d,p,m){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,p,m)}set(e,i,s,l,c,h,d,p,m){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=p,_[6]=s,_[7]=h,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],_=s[4],v=s[7],y=s[2],S=s[5],b=s[8],U=l[0],x=l[3],g=l[6],z=l[1],N=l[4],w=l[7],F=l[2],B=l[5],G=l[8];return c[0]=h*U+d*z+p*F,c[3]=h*x+d*N+p*B,c[6]=h*g+d*w+p*G,c[1]=m*U+_*z+v*F,c[4]=m*x+_*N+v*B,c[7]=m*g+_*w+v*G,c[2]=y*U+S*z+b*F,c[5]=y*x+S*N+b*B,c[8]=y*g+S*w+b*G,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return i*h*_-i*d*m-s*c*_+s*d*p+l*c*m-l*h*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=_*h-d*m,y=d*p-_*c,S=m*c-h*p,b=i*v+s*y+l*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const U=1/b;return e[0]=v*U,e[1]=(l*m-_*s)*U,e[2]=(d*s-l*h)*U,e[3]=y*U,e[4]=(_*i-l*p)*U,e[5]=(l*c-d*i)*U,e[6]=S*U,e[7]=(s*p-m*i)*U,e[8]=(h*i-s*c)*U,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(yh.makeScale(e,i)),this}rotate(e){return this.premultiply(yh.makeRotation(-e)),this}translate(e,i){return this.premultiply(yh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yh=new _t;function dv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function cu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function CM(){const r=cu("canvas");return r.style.display="block",r}const W0={};function su(r){r in W0||(W0[r]=!0,console.warn(r))}function wM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function DM(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function UM(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Y0=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Z0=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NM(){const r={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Zt&&(l.r=Va(l.r),l.g=Va(l.g),l.b=Va(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Zt&&(l.r=ao(l.r),l.g=ao(l.g),l.b=ao(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ss?ou:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[lo]:{primaries:e,whitePoint:s,transfer:ou,toXYZ:Y0,fromXYZ:Z0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:s,transfer:Zt,toXYZ:Y0,fromXYZ:Z0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),r}const Bt=NM();function Va(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ao(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Vr;class LM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Vr===void 0&&(Vr=cu("canvas")),Vr.width=e.width,Vr.height=e.height;const l=Vr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Vr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=cu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Va(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Va(i[s]/255)*255):i[s]=Va(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OM=0;class Wd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Sl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Sh(l[h].image)):c.push(Sh(l[h]))}else c=Sh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Sh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?LM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PM=0;class Qn extends ar{constructor(e=Qn.DEFAULT_IMAGE,i=Qn.DEFAULT_MAPPING,s=$s,l=$s,c=fa,h=er,d=Ji,p=pa,m=Qn.DEFAULT_ANISOTROPY,_=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Sl(),this.name="",this.source=new Wd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case od:e.x=e.x-Math.floor(e.x);break;case $s:e.x=e.x<0?0:1;break;case ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case od:e.y=e.y-Math.floor(e.y);break;case $s:e.y=e.y<0?0:1;break;case ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=iv;Qn.DEFAULT_ANISOTROPY=1;class dn{constructor(e=0,i=0,s=0,l=1){dn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const p=e.elements,m=p[0],_=p[4],v=p[8],y=p[1],S=p[5],b=p[9],U=p[2],x=p[6],g=p[10];if(Math.abs(_-y)<.01&&Math.abs(v-U)<.01&&Math.abs(b-x)<.01){if(Math.abs(_+y)<.1&&Math.abs(v+U)<.1&&Math.abs(b+x)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(m+1)/2,w=(S+1)/2,F=(g+1)/2,B=(_+y)/4,G=(v+U)/4,q=(b+x)/4;return N>w&&N>F?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=B/s,c=G/s):w>F?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=B/l,c=q/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=G/c,l=q/c),this.set(s,l,c,i),this}let z=Math.sqrt((x-b)*(x-b)+(v-U)*(v-U)+(y-_)*(y-_));return Math.abs(z)<.001&&(z=1),this.x=(x-b)/z,this.y=(v-U)/z,this.z=(y-_)/z,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zM extends ar{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth?s.depth:1,this.scissor=new dn(0,0,e,i),this.scissorTest=!1,this.viewport=new dn(0,0,e,i);const l={width:e,height:i,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const c=new Qn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Wd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends zM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class pv extends Qn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=$s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class IM extends Qn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=$s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ir{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let p=s[l+0],m=s[l+1],_=s[l+2],v=s[l+3];const y=c[h+0],S=c[h+1],b=c[h+2],U=c[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=_,e[i+3]=v;return}if(d===1){e[i+0]=y,e[i+1]=S,e[i+2]=b,e[i+3]=U;return}if(v!==U||p!==y||m!==S||_!==b){let x=1-d;const g=p*y+m*S+_*b+v*U,z=g>=0?1:-1,N=1-g*g;if(N>Number.EPSILON){const F=Math.sqrt(N),B=Math.atan2(F,g*z);x=Math.sin(x*B)/F,d=Math.sin(d*B)/F}const w=d*z;if(p=p*x+y*w,m=m*x+S*w,_=_*x+b*w,v=v*x+U*w,x===1-d){const F=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=F,m*=F,_*=F,v*=F}}e[i]=p,e[i+1]=m,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],p=s[l+1],m=s[l+2],_=s[l+3],v=c[h],y=c[h+1],S=c[h+2],b=c[h+3];return e[i]=d*b+_*v+p*S-m*y,e[i+1]=p*b+_*y+m*v-d*S,e[i+2]=m*b+_*S+d*y-p*v,e[i+3]=_*b-d*v-p*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(s/2),_=d(l/2),v=d(c/2),y=p(s/2),S=p(l/2),b=p(c/2);switch(h){case"XYZ":this._x=y*_*v+m*S*b,this._y=m*S*v-y*_*b,this._z=m*_*b+y*S*v,this._w=m*_*v-y*S*b;break;case"YXZ":this._x=y*_*v+m*S*b,this._y=m*S*v-y*_*b,this._z=m*_*b-y*S*v,this._w=m*_*v+y*S*b;break;case"ZXY":this._x=y*_*v-m*S*b,this._y=m*S*v+y*_*b,this._z=m*_*b+y*S*v,this._w=m*_*v-y*S*b;break;case"ZYX":this._x=y*_*v-m*S*b,this._y=m*S*v+y*_*b,this._z=m*_*b-y*S*v,this._w=m*_*v+y*S*b;break;case"YZX":this._x=y*_*v+m*S*b,this._y=m*S*v+y*_*b,this._z=m*_*b-y*S*v,this._w=m*_*v-y*S*b;break;case"XZY":this._x=y*_*v-m*S*b,this._y=m*S*v-y*_*b,this._z=m*_*b+y*S*v,this._w=m*_*v+y*S*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],_=i[6],v=i[10],y=s+d+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-m)*S,this._z=(h-l)*S}else if(s>d&&s>v){const S=2*Math.sqrt(1+s-d-v);this._w=(_-p)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+m)/S}else if(d>v){const S=2*Math.sqrt(1+d-s-v);this._w=(c-m)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+v-s-d);this._w=(h-l)/S,this._x=(c+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,p=i._y,m=i._z,_=i._w;return this._x=s*_+h*d+l*m-c*p,this._y=l*_+h*p+c*d-s*m,this._z=c*_+h*m+s*p-l*d,this._w=h*_-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),v=Math.sin((1-i)*_)/m,y=Math.sin(i*_)/m;return this._w=h*v+this._w*y,this._x=s*v+this._x*y,this._y=l*v+this._y*y,this._z=c*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,i=0,s=0){te.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(K0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(K0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*s),_=2*(d*i-c*l),v=2*(c*s-h*i);return this.x=i+p*m+h*v-d*_,this.y=s+p*_+d*m-c*v,this.z=l+p*v+c*_-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-s*p,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mh=new te,K0=new ir;class sr{constructor(e=new te(1/0,1/0,1/0),i=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(qi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(qi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=qi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,qi):qi.fromBufferAttribute(c,h),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wc.copy(s.boundingBox)),wc.applyMatrix4(e.matrixWorld),this.union(wc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ol),Dc.subVectors(this.max,ol),kr.subVectors(e.a,ol),jr.subVectors(e.b,ol),Xr.subVectors(e.c,ol),ds.subVectors(jr,kr),ps.subVectors(Xr,jr),js.subVectors(kr,Xr);let i=[0,-ds.z,ds.y,0,-ps.z,ps.y,0,-js.z,js.y,ds.z,0,-ds.x,ps.z,0,-ps.x,js.z,0,-js.x,-ds.y,ds.x,0,-ps.y,ps.x,0,-js.y,js.x,0];return!Eh(i,kr,jr,Xr,Dc)||(i=[1,0,0,0,1,0,0,0,1],!Eh(i,kr,jr,Xr,Dc))?!1:(Uc.crossVectors(ds,ps),i=[Uc.x,Uc.y,Uc.z],Eh(i,kr,jr,Xr,Dc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oa=[new te,new te,new te,new te,new te,new te,new te,new te],qi=new te,wc=new sr,kr=new te,jr=new te,Xr=new te,ds=new te,ps=new te,js=new te,ol=new te,Dc=new te,Uc=new te,Xs=new te;function Eh(r,e,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Xs.fromArray(r,c);const d=l.x*Math.abs(Xs.x)+l.y*Math.abs(Xs.y)+l.z*Math.abs(Xs.z),p=e.dot(Xs),m=i.dot(Xs),_=s.dot(Xs);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const BM=new sr,ll=new te,bh=new te;class Ml{constructor(e=new te,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):BM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ll.subVectors(e,this.center);const i=ll.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(ll,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ll.copy(e.center).add(bh)),this.expandByPoint(ll.copy(e.center).sub(bh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pa=new te,Th=new te,Nc=new te,ms=new te,Ah=new te,Lc=new te,Rh=new te;class Yd{constructor(e=new te,i=new te(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Pa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Pa.copy(this.origin).addScaledVector(this.direction,i),Pa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Th.copy(e).add(i).multiplyScalar(.5),Nc.copy(i).sub(e).normalize(),ms.copy(this.origin).sub(Th);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Nc),d=ms.dot(this.direction),p=-ms.dot(Nc),m=ms.lengthSq(),_=Math.abs(1-h*h);let v,y,S,b;if(_>0)if(v=h*p-d,y=h*d-p,b=c*_,v>=0)if(y>=-b)if(y<=b){const U=1/_;v*=U,y*=U,S=v*(v+h*y+2*d)+y*(h*v+y+2*p)+m}else y=c,v=Math.max(0,-(h*y+d)),S=-v*v+y*(y+2*p)+m;else y=-c,v=Math.max(0,-(h*y+d)),S=-v*v+y*(y+2*p)+m;else y<=-b?(v=Math.max(0,-(-h*c+d)),y=v>0?-c:Math.min(Math.max(-c,-p),c),S=-v*v+y*(y+2*p)+m):y<=b?(v=0,y=Math.min(Math.max(-c,-p),c),S=y*(y+2*p)+m):(v=Math.max(0,-(h*c+d)),y=v>0?c:Math.min(Math.max(-c,-p),c),S=-v*v+y*(y+2*p)+m);else y=h>0?-c:c,v=Math.max(0,-(h*y+d)),S=-v*v+y*(y+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Th).addScaledVector(Nc,y),S}intersectSphere(e,i){Pa.subVectors(e.center,this.origin);const s=Pa.dot(this.direction),l=Pa.dot(Pa)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(s=(e.min.x-y.x)*m,l=(e.max.x-y.x)*m):(s=(e.max.x-y.x)*m,l=(e.min.x-y.x)*m),_>=0?(c=(e.min.y-y.y)*_,h=(e.max.y-y.y)*_):(c=(e.max.y-y.y)*_,h=(e.min.y-y.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-y.z)*v,p=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,p=(e.min.z-y.z)*v),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Pa)!==null}intersectTriangle(e,i,s,l,c){Ah.subVectors(i,e),Lc.subVectors(s,e),Rh.crossVectors(Ah,Lc);let h=this.direction.dot(Rh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ms.subVectors(this.origin,e);const p=d*this.direction.dot(Lc.crossVectors(ms,Lc));if(p<0)return null;const m=d*this.direction.dot(Ah.cross(ms));if(m<0||p+m>h)return null;const _=-d*ms.dot(Rh);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(e,i,s,l,c,h,d,p,m,_,v,y,S,b,U,x){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,p,m,_,v,y,S,b,U,x)}set(e,i,s,l,c,h,d,p,m,_,v,y,S,b,U,x){const g=this.elements;return g[0]=e,g[4]=i,g[8]=s,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=y,g[3]=S,g[7]=b,g[11]=U,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/qr.setFromMatrixColumn(e,0).length(),c=1/qr.setFromMatrixColumn(e,1).length(),h=1/qr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const y=h*_,S=h*v,b=d*_,U=d*v;i[0]=p*_,i[4]=-p*v,i[8]=m,i[1]=S+b*m,i[5]=y-U*m,i[9]=-d*p,i[2]=U-y*m,i[6]=b+S*m,i[10]=h*p}else if(e.order==="YXZ"){const y=p*_,S=p*v,b=m*_,U=m*v;i[0]=y+U*d,i[4]=b*d-S,i[8]=h*m,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=S*d-b,i[6]=U+y*d,i[10]=h*p}else if(e.order==="ZXY"){const y=p*_,S=p*v,b=m*_,U=m*v;i[0]=y-U*d,i[4]=-h*v,i[8]=b+S*d,i[1]=S+b*d,i[5]=h*_,i[9]=U-y*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const y=h*_,S=h*v,b=d*_,U=d*v;i[0]=p*_,i[4]=b*m-S,i[8]=y*m+U,i[1]=p*v,i[5]=U*m+y,i[9]=S*m-b,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const y=h*p,S=h*m,b=d*p,U=d*m;i[0]=p*_,i[4]=U-y*v,i[8]=b*v+S,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-m*_,i[6]=S*v+b,i[10]=y-U*v}else if(e.order==="XZY"){const y=h*p,S=h*m,b=d*p,U=d*m;i[0]=p*_,i[4]=-v,i[8]=m*_,i[1]=y*v+U,i[5]=h*_,i[9]=S*v-b,i[2]=b*v-S,i[6]=d*_,i[10]=U*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FM,e,HM)}lookAt(e,i,s){const l=this.elements;return bi.subVectors(e,i),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),gs.crossVectors(s,bi),gs.lengthSq()===0&&(Math.abs(s.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),gs.crossVectors(s,bi)),gs.normalize(),Oc.crossVectors(bi,gs),l[0]=gs.x,l[4]=Oc.x,l[8]=bi.x,l[1]=gs.y,l[5]=Oc.y,l[9]=bi.y,l[2]=gs.z,l[6]=Oc.z,l[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],_=s[1],v=s[5],y=s[9],S=s[13],b=s[2],U=s[6],x=s[10],g=s[14],z=s[3],N=s[7],w=s[11],F=s[15],B=l[0],G=l[4],q=l[8],L=l[12],R=l[1],j=l[5],ae=l[9],re=l[13],fe=l[2],me=l[6],H=l[10],K=l[14],Z=l[3],Te=l[7],P=l[11],ne=l[15];return c[0]=h*B+d*R+p*fe+m*Z,c[4]=h*G+d*j+p*me+m*Te,c[8]=h*q+d*ae+p*H+m*P,c[12]=h*L+d*re+p*K+m*ne,c[1]=_*B+v*R+y*fe+S*Z,c[5]=_*G+v*j+y*me+S*Te,c[9]=_*q+v*ae+y*H+S*P,c[13]=_*L+v*re+y*K+S*ne,c[2]=b*B+U*R+x*fe+g*Z,c[6]=b*G+U*j+x*me+g*Te,c[10]=b*q+U*ae+x*H+g*P,c[14]=b*L+U*re+x*K+g*ne,c[3]=z*B+N*R+w*fe+F*Z,c[7]=z*G+N*j+w*me+F*Te,c[11]=z*q+N*ae+w*H+F*P,c[15]=z*L+N*re+w*K+F*ne,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],p=e[9],m=e[13],_=e[2],v=e[6],y=e[10],S=e[14],b=e[3],U=e[7],x=e[11],g=e[15];return b*(+c*p*v-l*m*v-c*d*y+s*m*y+l*d*S-s*p*S)+U*(+i*p*S-i*m*y+c*h*y-l*h*S+l*m*_-c*p*_)+x*(+i*m*v-i*d*S-c*h*v+s*h*S+c*d*_-s*m*_)+g*(-l*d*_-i*p*v+i*d*y+l*h*v-s*h*y+s*p*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=e[9],y=e[10],S=e[11],b=e[12],U=e[13],x=e[14],g=e[15],z=v*x*m-U*y*m+U*p*S-d*x*S-v*p*g+d*y*g,N=b*y*m-_*x*m-b*p*S+h*x*S+_*p*g-h*y*g,w=_*U*m-b*v*m+b*d*S-h*U*S-_*d*g+h*v*g,F=b*v*p-_*U*p-b*d*y+h*U*y+_*d*x-h*v*x,B=i*z+s*N+l*w+c*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/B;return e[0]=z*G,e[1]=(U*y*c-v*x*c-U*l*S+s*x*S+v*l*g-s*y*g)*G,e[2]=(d*x*c-U*p*c+U*l*m-s*x*m-d*l*g+s*p*g)*G,e[3]=(v*p*c-d*y*c-v*l*m+s*y*m+d*l*S-s*p*S)*G,e[4]=N*G,e[5]=(_*x*c-b*y*c+b*l*S-i*x*S-_*l*g+i*y*g)*G,e[6]=(b*p*c-h*x*c-b*l*m+i*x*m+h*l*g-i*p*g)*G,e[7]=(h*y*c-_*p*c+_*l*m-i*y*m-h*l*S+i*p*S)*G,e[8]=w*G,e[9]=(b*v*c-_*U*c-b*s*S+i*U*S+_*s*g-i*v*g)*G,e[10]=(h*U*c-b*d*c+b*s*m-i*U*m-h*s*g+i*d*g)*G,e[11]=(_*d*c-h*v*c-_*s*m+i*v*m+h*s*S-i*d*S)*G,e[12]=F*G,e[13]=(_*U*l-b*v*l+b*s*y-i*U*y-_*s*x+i*v*x)*G,e[14]=(b*d*l-h*U*l-b*s*p+i*U*p+h*s*x-i*d*x)*G,e[15]=(h*v*l-_*d*l+_*s*p-i*v*p-h*s*y+i*d*y)*G,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,p=e.z,m=c*h,_=c*d;return this.set(m*h+s,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+s,_*p-l*h,0,m*p-l*d,_*p+l*h,c*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,_=h+h,v=d+d,y=c*m,S=c*_,b=c*v,U=h*_,x=h*v,g=d*v,z=p*m,N=p*_,w=p*v,F=s.x,B=s.y,G=s.z;return l[0]=(1-(U+g))*F,l[1]=(S+w)*F,l[2]=(b-N)*F,l[3]=0,l[4]=(S-w)*B,l[5]=(1-(y+g))*B,l[6]=(x+z)*B,l[7]=0,l[8]=(b+N)*G,l[9]=(x-z)*G,l[10]=(1-(y+U))*G,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=qr.set(l[0],l[1],l[2]).length();const h=qr.set(l[4],l[5],l[6]).length(),d=qr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Wi.copy(this);const m=1/c,_=1/h,v=1/d;return Wi.elements[0]*=m,Wi.elements[1]*=m,Wi.elements[2]*=m,Wi.elements[4]*=_,Wi.elements[5]*=_,Wi.elements[6]*=_,Wi.elements[8]*=v,Wi.elements[9]*=v,Wi.elements[10]*=v,i.setFromRotationMatrix(Wi),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=Ha){const p=this.elements,m=2*c/(i-e),_=2*c/(s-l),v=(i+e)/(i-e),y=(s+l)/(s-l);let S,b;if(d===Ha)S=-(h+c)/(h-c),b=-2*h*c/(h-c);else if(d===lu)S=-h/(h-c),b=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=Ha){const p=this.elements,m=1/(i-e),_=1/(s-l),v=1/(h-c),y=(i+e)*m,S=(s+l)*_;let b,U;if(d===Ha)b=(h+c)*v,U=-2*v;else if(d===lu)b=c*v,U=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=U,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const qr=new te,Wi=new an,FM=new te(0,0,0),HM=new te(1,1,1),gs=new te,Oc=new te,bi=new te,Q0=new an,J0=new ir;class ma{constructor(e=0,i=0,s=0,l=ma.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],_=l[9],v=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Q0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Q0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return J0.setFromEuler(this),this.setFromQuaternion(J0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ma.DEFAULT_ORDER="XYZ";class Zd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GM=0;const $0=new te,Wr=new ir,za=new an,Pc=new te,cl=new te,VM=new te,kM=new ir,e_=new te(1,0,0),t_=new te(0,1,0),n_=new te(0,0,1),i_={type:"added"},jM={type:"removed"},Yr={type:"childadded",child:null},Ch={type:"childremoved",child:null};class Hn extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=Sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new te,i=new ma,s=new ir,l=new te(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new _t}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Wr.setFromAxisAngle(e,i),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,i){return Wr.setFromAxisAngle(e,i),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(e_,e)}rotateY(e){return this.rotateOnAxis(t_,e)}rotateZ(e){return this.rotateOnAxis(n_,e)}translateOnAxis(e,i){return $0.copy(e).applyQuaternion(this.quaternion),this.position.add($0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(e_,e)}translateY(e){return this.translateOnAxis(t_,e)}translateZ(e){return this.translateOnAxis(n_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(za.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Pc.copy(e):Pc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?za.lookAt(cl,Pc,this.up):za.lookAt(Pc,cl,this.up),this.quaternion.setFromRotationMatrix(za),l&&(za.extractRotation(l.matrixWorld),Wr.setFromRotationMatrix(za),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(i_),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(jM),Ch.child=e,this.dispatchEvent(Ch),Ch.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),za.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),za.multiply(e.parent.matrixWorld)),e.applyMatrix4(za),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(i_),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,e,VM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,kM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];c(e.shapes,v)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),_=h(e.images),v=h(e.shapes),y=h(e.skeletons),S=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new te(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yi=new te,Ia=new te,wh=new te,Ba=new te,Zr=new te,Kr=new te,a_=new te,Dh=new te,Uh=new te,Nh=new te,Lh=new dn,Oh=new dn,Ph=new dn;class Qi{constructor(e=new te,i=new te,s=new te){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Yi.subVectors(e,i),l.cross(Yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Yi.subVectors(l,i),Ia.subVectors(s,i),wh.subVectors(e,i);const h=Yi.dot(Yi),d=Yi.dot(Ia),p=Yi.dot(wh),m=Ia.dot(Ia),_=Ia.dot(wh),v=h*m-d*d;if(v===0)return c.set(0,0,0),null;const y=1/v,S=(m*p-d*_)*y,b=(h*_-d*p)*y;return c.set(1-S-b,b,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ba)===null?!1:Ba.x>=0&&Ba.y>=0&&Ba.x+Ba.y<=1}static getInterpolation(e,i,s,l,c,h,d,p){return this.getBarycoord(e,i,s,l,Ba)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ba.x),p.addScaledVector(h,Ba.y),p.addScaledVector(d,Ba.z),p)}static getInterpolatedAttribute(e,i,s,l,c,h){return Lh.setScalar(0),Oh.setScalar(0),Ph.setScalar(0),Lh.fromBufferAttribute(e,i),Oh.fromBufferAttribute(e,s),Ph.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Lh,c.x),h.addScaledVector(Oh,c.y),h.addScaledVector(Ph,c.z),h}static isFrontFacing(e,i,s,l){return Yi.subVectors(s,i),Ia.subVectors(e,i),Yi.cross(Ia).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),Ia.subVectors(this.a,this.b),Yi.cross(Ia).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Qi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Qi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;Zr.subVectors(l,s),Kr.subVectors(c,s),Dh.subVectors(e,s);const p=Zr.dot(Dh),m=Kr.dot(Dh);if(p<=0&&m<=0)return i.copy(s);Uh.subVectors(e,l);const _=Zr.dot(Uh),v=Kr.dot(Uh);if(_>=0&&v<=_)return i.copy(l);const y=p*v-_*m;if(y<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(s).addScaledVector(Zr,h);Nh.subVectors(e,c);const S=Zr.dot(Nh),b=Kr.dot(Nh);if(b>=0&&S<=b)return i.copy(c);const U=S*m-p*b;if(U<=0&&m>=0&&b<=0)return d=m/(m-b),i.copy(s).addScaledVector(Kr,d);const x=_*b-S*v;if(x<=0&&v-_>=0&&S-b>=0)return a_.subVectors(c,l),d=(v-_)/(v-_+(S-b)),i.copy(l).addScaledVector(a_,d);const g=1/(x+U+y);return h=U*g,d=y*g,i.copy(s).addScaledVector(Zr,h).addScaledVector(Kr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},zc={h:0,s:0,l:0};function zh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Ct{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Bt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Bt.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Bt.workingColorSpace){if(e=AM(e,1),i=Et(i,0,1),s=Et(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=zh(h,c,e+1/3),this.g=zh(h,c,e),this.b=zh(h,c,e-1/3)}return Bt.toWorkingColorSpace(this,l),this}setStyle(e,i=ti){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ti){const s=mv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Va(e.r),this.g=Va(e.g),this.b=Va(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Bt.fromWorkingColorSpace(Kn.copy(this),e),Math.round(Et(Kn.r*255,0,255))*65536+Math.round(Et(Kn.g*255,0,255))*256+Math.round(Et(Kn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Bt.workingColorSpace){Bt.fromWorkingColorSpace(Kn.copy(this),i);const s=Kn.r,l=Kn.g,c=Kn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const _=(d+h)/2;if(d===h)p=0,m=0;else{const v=h-d;switch(m=_<=.5?v/(h+d):v/(2-h-d),h){case s:p=(l-c)/v+(l<c?6:0);break;case l:p=(c-s)/v+2;break;case c:p=(s-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,i=Bt.workingColorSpace){return Bt.fromWorkingColorSpace(Kn.copy(this),i),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=ti){Bt.fromWorkingColorSpace(Kn.copy(this),e);const i=Kn.r,s=Kn.g,l=Kn.b;return e!==ti?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(_s),this.setHSL(_s.h+e,_s.s+i,_s.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(_s),e.getHSL(zc);const s=xh(_s.h,zc.h,i),l=xh(_s.s,zc.s,i),c=xh(_s.l,zc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new Ct;Ct.NAMES=mv;let XM=0;class fo extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=Sl(),this.name="",this.type="Material",this.blending=io,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kh,this.blendDst=Qh,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(s.blending=this.blending),this.side!==ka&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Kh&&(s.blendSrc=this.blendSrc),this.blendDst!==Qh&&(s.blendDst=this.blendDst),this.blendEquation!==Qs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==j0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class co extends fo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=tv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const En=new te,Ic=new dt;let qM=0;class $i{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=X0,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ic.fromBufferAttribute(this,i),Ic.applyMatrix3(e),this.setXY(i,Ic.x,Ic.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyMatrix3(e),this.setXYZ(i,En.x,En.y,En.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyMatrix4(e),this.setXYZ(i,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyNormalMatrix(e),this.setXYZ(i,En.x,En.y,En.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.transformDirection(e),this.setXYZ(i,En.x,En.y,En.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=rl(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=oi(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=rl(i,this.array)),i}setX(e,i){return this.normalized&&(i=oi(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=rl(i,this.array)),i}setY(e,i){return this.normalized&&(i=oi(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=rl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=oi(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=rl(i,this.array)),i}setW(e,i){return this.normalized&&(i=oi(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=oi(i,this.array),s=oi(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=oi(i,this.array),s=oi(s,this.array),l=oi(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=oi(i,this.array),s=oi(s,this.array),l=oi(l,this.array),c=oi(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==X0&&(e.usage=this.usage),e}}class gv extends $i{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class _v extends $i{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ln extends $i{constructor(e,i,s){super(new Float32Array(e),i,s)}}let WM=0;const Bi=new an,Ih=new Hn,Qr=new te,Ti=new sr,ul=new sr,Fn=new te;class ea extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=Sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dv(e)?_v:gv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new _t().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bi.makeRotationFromQuaternion(e),this.applyMatrix4(Bi),this}rotateX(e){return Bi.makeRotationX(e),this.applyMatrix4(Bi),this}rotateY(e){return Bi.makeRotationY(e),this.applyMatrix4(Bi),this}rotateZ(e){return Bi.makeRotationZ(e),this.applyMatrix4(Bi),this}translate(e,i,s){return Bi.makeTranslation(e,i,s),this.applyMatrix4(Bi),this}scale(e,i,s){return Bi.makeScale(e,i,s),this.applyMatrix4(Bi),this}lookAt(e){return Ih.lookAt(e),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ln(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Ti.setFromBufferAttribute(c),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ml);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const s=this.boundingSphere.center;if(Ti.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];ul.setFromBufferAttribute(d),this.morphTargetsRelative?(Fn.addVectors(Ti.min,ul.min),Ti.expandByPoint(Fn),Fn.addVectors(Ti.max,ul.max),Ti.expandByPoint(Fn)):(Ti.expandByPoint(ul.min),Ti.expandByPoint(ul.max))}Ti.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)Fn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Fn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)Fn.fromBufferAttribute(d,m),p&&(Qr.fromBufferAttribute(e,m),Fn.add(Qr)),l=Math.max(l,s.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $i(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let q=0;q<s.count;q++)d[q]=new te,p[q]=new te;const m=new te,_=new te,v=new te,y=new dt,S=new dt,b=new dt,U=new te,x=new te;function g(q,L,R){m.fromBufferAttribute(s,q),_.fromBufferAttribute(s,L),v.fromBufferAttribute(s,R),y.fromBufferAttribute(c,q),S.fromBufferAttribute(c,L),b.fromBufferAttribute(c,R),_.sub(m),v.sub(m),S.sub(y),b.sub(y);const j=1/(S.x*b.y-b.x*S.y);isFinite(j)&&(U.copy(_).multiplyScalar(b.y).addScaledVector(v,-S.y).multiplyScalar(j),x.copy(v).multiplyScalar(S.x).addScaledVector(_,-b.x).multiplyScalar(j),d[q].add(U),d[L].add(U),d[R].add(U),p[q].add(x),p[L].add(x),p[R].add(x))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let q=0,L=z.length;q<L;++q){const R=z[q],j=R.start,ae=R.count;for(let re=j,fe=j+ae;re<fe;re+=3)g(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const N=new te,w=new te,F=new te,B=new te;function G(q){F.fromBufferAttribute(l,q),B.copy(F);const L=d[q];N.copy(L),N.sub(F.multiplyScalar(F.dot(L))).normalize(),w.crossVectors(B,L);const j=w.dot(p[q])<0?-1:1;h.setXYZW(q,N.x,N.y,N.z,j)}for(let q=0,L=z.length;q<L;++q){const R=z[q],j=R.start,ae=R.count;for(let re=j,fe=j+ae;re<fe;re+=3)G(e.getX(re+0)),G(e.getX(re+1)),G(e.getX(re+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new $i(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const l=new te,c=new te,h=new te,d=new te,p=new te,m=new te,_=new te,v=new te;if(e)for(let y=0,S=e.count;y<S;y+=3){const b=e.getX(y+0),U=e.getX(y+1),x=e.getX(y+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,x),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,U),m.fromBufferAttribute(s,x),d.add(_),p.add(_),m.add(_),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(U,p.x,p.y,p.z),s.setXYZ(x,m.x,m.y,m.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Fn.fromBufferAttribute(e,i),Fn.normalize(),e.setXYZ(i,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,v=d.normalized,y=new m.constructor(p.length*_);let S=0,b=0;for(let U=0,x=p.length;U<x;U++){d.isInterleavedBufferAttribute?S=p[U]*d.data.stride+d.offset:S=p[U]*_;for(let g=0;g<_;g++)y[b++]=m[S++]}return new $i(y,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ea,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let _=0,v=m.length;_<v;_++){const y=m[_],S=e(y,s);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,y=m.length;v<y;v++){const S=m[v];_.push(S.toJSON(e.data))}_.length>0&&(l[p]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const c=e.morphAttributes;for(const m in c){const _=[],v=c[m];for(let y=0,S=v.length;y<S;y++)_.push(v[y].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,_=h.length;m<_;m++){const v=h[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const s_=new an,qs=new Yd,Bc=new Ml,r_=new te,Fc=new te,Hc=new te,Gc=new te,Bh=new te,Vc=new te,o_=new te,kc=new te;class nn extends Hn{constructor(e=new ea,i=new co){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Vc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=d[p],v=c[p];_!==0&&(Bh.fromBufferAttribute(v,e),h?Vc.addScaledVector(Bh,_):Vc.addScaledVector(Bh.sub(i),_))}i.add(Vc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(c),qs.copy(e.ray).recast(e.near),!(Bc.containsPoint(qs.origin)===!1&&(qs.intersectSphere(Bc,r_)===null||qs.origin.distanceToSquared(r_)>(e.far-e.near)**2))&&(s_.copy(c).invert(),qs.copy(e.ray).applyMatrix4(s_),!(s.boundingBox!==null&&qs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,qs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,U=y.length;b<U;b++){const x=y[b],g=h[x.materialIndex],z=Math.max(x.start,S.start),N=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let w=z,F=N;w<F;w+=3){const B=d.getX(w),G=d.getX(w+1),q=d.getX(w+2);l=jc(this,g,e,s,m,_,v,B,G,q),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),U=Math.min(d.count,S.start+S.count);for(let x=b,g=U;x<g;x+=3){const z=d.getX(x),N=d.getX(x+1),w=d.getX(x+2);l=jc(this,h,e,s,m,_,v,z,N,w),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let b=0,U=y.length;b<U;b++){const x=y[b],g=h[x.materialIndex],z=Math.max(x.start,S.start),N=Math.min(p.count,Math.min(x.start+x.count,S.start+S.count));for(let w=z,F=N;w<F;w+=3){const B=w,G=w+1,q=w+2;l=jc(this,g,e,s,m,_,v,B,G,q),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),U=Math.min(p.count,S.start+S.count);for(let x=b,g=U;x<g;x+=3){const z=x,N=x+1,w=x+2;l=jc(this,h,e,s,m,_,v,z,N,w),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function YM(r,e,i,s,l,c,h,d){let p;if(e.side===ui?p=s.intersectTriangle(h,c,l,!0,d):p=s.intersectTriangle(l,c,h,e.side===ka,d),p===null)return null;kc.copy(d),kc.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(kc);return m<i.near||m>i.far?null:{distance:m,point:kc.clone(),object:r}}function jc(r,e,i,s,l,c,h,d,p,m){r.getVertexPosition(d,Fc),r.getVertexPosition(p,Hc),r.getVertexPosition(m,Gc);const _=YM(r,e,i,s,Fc,Hc,Gc,o_);if(_){const v=new te;Qi.getBarycoord(o_,Fc,Hc,Gc,v),l&&(_.uv=Qi.getInterpolatedAttribute(l,d,p,m,v,new dt)),c&&(_.uv1=Qi.getInterpolatedAttribute(c,d,p,m,v,new dt)),h&&(_.normal=Qi.getInterpolatedAttribute(h,d,p,m,v,new te),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new te,materialIndex:0};Qi.getNormal(Fc,Hc,Gc,y.normal),_.face=y,_.barycoord=v}return _}class da extends ea{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],_=[],v=[];let y=0,S=0;b("z","y","x",-1,-1,s,i,e,h,c,0),b("z","y","x",1,-1,s,i,-e,h,c,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,c,4),b("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Ln(m,3)),this.setAttribute("normal",new Ln(_,3)),this.setAttribute("uv",new Ln(v,2));function b(U,x,g,z,N,w,F,B,G,q,L){const R=w/G,j=F/q,ae=w/2,re=F/2,fe=B/2,me=G+1,H=q+1;let K=0,Z=0;const Te=new te;for(let P=0;P<H;P++){const ne=P*j-re;for(let Se=0;Se<me;Se++){const Ae=Se*R-ae;Te[U]=Ae*z,Te[x]=ne*N,Te[g]=fe,m.push(Te.x,Te.y,Te.z),Te[U]=0,Te[x]=0,Te[g]=B>0?1:-1,_.push(Te.x,Te.y,Te.z),v.push(Se/G),v.push(1-P/q),K+=1}}for(let P=0;P<q;P++)for(let ne=0;ne<G;ne++){const Se=y+ne+me*P,Ae=y+ne+me*(P+1),ee=y+(ne+1)+me*(P+1),ge=y+(ne+1)+me*P;p.push(Se,Ae,ge),p.push(Ae,ee,ge),Z+=6}d.addGroup(S,Z,L),S+=Z,y+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function uo(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function ei(r){const e={};for(let i=0;i<r.length;i++){const s=uo(r[i]);for(const l in s)e[l]=s[l]}return e}function ZM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function vv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}const KM={clone:uo,merge:ei};var QM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ts extends fo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QM,this.fragmentShader=JM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=ZM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class xv extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Ha}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vs=new te,l_=new dt,c_=new dt;class Ki extends xv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Pd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(au*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pd*2*Math.atan(Math.tan(au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,i){return this.getViewBounds(e,l_,c_),i.subVectors(c_,l_)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(au*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*s/m,l*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Jr=-90,$r=1;class $M extends Hn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ki(Jr,$r,e,i);l.layers=this.layers,this.add(l);const c=new Ki(Jr,$r,e,i);c.layers=this.layers,this.add(c);const h=new Ki(Jr,$r,e,i);h.layers=this.layers,this.add(h);const d=new Ki(Jr,$r,e,i);d.layers=this.layers,this.add(d);const p=new Ki(Jr,$r,e,i);p.layers=this.layers,this.add(p);const m=new Ki(Jr,$r,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(e===Ha)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===lu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,_]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const U=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,m),s.texture.generateMipmaps=U,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(v,y,S),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class yv extends Qn{constructor(e=[],i=ro,s,l,c,h,d,p,m,_){super(e,i,s,l,c,h,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eE extends nr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new yv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:fa}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new da(5,5,5),c=new Ts({name:"CubemapFromEquirect",uniforms:uo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ui,blending:Es});c.uniforms.tEquirect.value=i;const h=new nn(l,c),d=i.minFilter;return i.minFilter===er&&(i.minFilter=fa),new $M(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class ci extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tE={type:"move"};class Fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const U of e.hand.values()){const x=i.getJointPose(U,s),g=this._getHandJoint(m,U);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=_.position.distanceTo(v.position),S=.02,b=.005;m.inputState.pinching&&y>S+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(tE)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new ci;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class nE extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ma,this.environmentIntensity=1,this.environmentRotation=new ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class iE extends Qn{constructor(e=null,i=1,s=1,l,c,h,d,p,m=Ai,_=Ai,v,y){super(null,h,d,p,m,_,l,c,v,y),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class u_ extends $i{constructor(e,i,s,l=1){super(e,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const eo=new an,f_=new an,Xc=[],h_=new sr,aE=new an,fl=new nn,hl=new Ml;class sE extends nn{constructor(e,i,s){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new u_(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,aE)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new sr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,eo),h_.copy(e.boundingBox).applyMatrix4(eo),this.boundingBox.union(h_)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ml),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,eo),hl.copy(e.boundingSphere).applyMatrix4(eo),this.boundingSphere.union(hl)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=e*c+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(e,i){const s=this.matrixWorld,l=this.count;if(fl.geometry=this.geometry,fl.material=this.material,fl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hl.copy(this.boundingSphere),hl.applyMatrix4(s),e.ray.intersectsSphere(hl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,eo),f_.multiplyMatrices(s,eo),fl.matrixWorld=f_,fl.raycast(e,Xc);for(let h=0,d=Xc.length;h<d;h++){const p=Xc[h];p.instanceId=c,p.object=this,i.push(p)}Xc.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new u_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new iE(new Float32Array(l*this.count),l,this.count,kd,ha));const c=this.morphTexture.source.data.data;let h=0;for(let m=0;m<s.length;m++)h+=s[m];const d=this.geometry.morphTargetsRelative?1:1-h,p=l*e;c[p]=d,c.set(s,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Hh=new te,rE=new te,oE=new _t;class ys{constructor(e=new te(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Hh.subVectors(s,i).cross(rE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Hh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||oE.getNormalMatrix(e),l=this.coplanarPoint(Hh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ws=new Ml,qc=new te;class Kd{constructor(e=new ys,i=new ys,s=new ys,l=new ys,c=new ys,h=new ys){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Ha){const s=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],p=l[3],m=l[4],_=l[5],v=l[6],y=l[7],S=l[8],b=l[9],U=l[10],x=l[11],g=l[12],z=l[13],N=l[14],w=l[15];if(s[0].setComponents(p-c,y-m,x-S,w-g).normalize(),s[1].setComponents(p+c,y+m,x+S,w+g).normalize(),s[2].setComponents(p+h,y+_,x+b,w+z).normalize(),s[3].setComponents(p-h,y-_,x-b,w-z).normalize(),s[4].setComponents(p-d,y-v,x-U,w-N).normalize(),i===Ha)s[5].setComponents(p+d,y+v,x+U,w+N).normalize();else if(i===lu)s[5].setComponents(d,v,U,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(e){return Ws.center.set(0,0,0),Ws.radius=.7071067811865476,Ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(qc.x=l.normal.x>0?e.max.x:e.min.x,qc.y=l.normal.y>0?e.max.y:e.min.y,qc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(qc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sv extends Qn{constructor(e,i,s,l,c,h,d,p,m){super(e,i,s,l,c,h,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mv extends Qn{constructor(e,i,s=tr,l,c,h,d=Ai,p=Ai,m,_=_l){if(_!==_l&&_!==vl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,h,d,p,_,s,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Qd extends ea{constructor(e=1,i=1,s=1,l=32,c=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const _=[],v=[],y=[],S=[];let b=0;const U=[],x=s/2;let g=0;z(),h===!1&&(e>0&&N(!0),i>0&&N(!1)),this.setIndex(_),this.setAttribute("position",new Ln(v,3)),this.setAttribute("normal",new Ln(y,3)),this.setAttribute("uv",new Ln(S,2));function z(){const w=new te,F=new te;let B=0;const G=(i-e)/s;for(let q=0;q<=c;q++){const L=[],R=q/c,j=R*(i-e)+e;for(let ae=0;ae<=l;ae++){const re=ae/l,fe=re*p+d,me=Math.sin(fe),H=Math.cos(fe);F.x=j*me,F.y=-R*s+x,F.z=j*H,v.push(F.x,F.y,F.z),w.set(me,G,H).normalize(),y.push(w.x,w.y,w.z),S.push(re,1-R),L.push(b++)}U.push(L)}for(let q=0;q<l;q++)for(let L=0;L<c;L++){const R=U[L][q],j=U[L+1][q],ae=U[L+1][q+1],re=U[L][q+1];(e>0||L!==0)&&(_.push(R,j,re),B+=3),(i>0||L!==c-1)&&(_.push(j,ae,re),B+=3)}m.addGroup(g,B,0),g+=B}function N(w){const F=b,B=new dt,G=new te;let q=0;const L=w===!0?e:i,R=w===!0?1:-1;for(let ae=1;ae<=l;ae++)v.push(0,x*R,0),y.push(0,R,0),S.push(.5,.5),b++;const j=b;for(let ae=0;ae<=l;ae++){const fe=ae/l*p+d,me=Math.cos(fe),H=Math.sin(fe);G.x=L*H,G.y=x*R,G.z=L*me,v.push(G.x,G.y,G.z),y.push(0,R,0),B.x=me*.5+.5,B.y=H*.5*R+.5,S.push(B.x,B.y),b++}for(let ae=0;ae<l;ae++){const re=F+ae,fe=j+ae;w===!0?_.push(fe,fe+1,re):_.push(fe+1,fe,re),q+=3}m.addGroup(g,q,w===!0?1:2),g+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rr extends ea{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,_=p+1,v=e/d,y=i/p,S=[],b=[],U=[],x=[];for(let g=0;g<_;g++){const z=g*y-h;for(let N=0;N<m;N++){const w=N*v-c;b.push(w,-z,0),U.push(0,0,1),x.push(N/d),x.push(1-g/p)}}for(let g=0;g<p;g++)for(let z=0;z<d;z++){const N=z+m*g,w=z+m*(g+1),F=z+1+m*(g+1),B=z+1+m*g;S.push(N,w,B),S.push(w,F,B)}this.setIndex(S),this.setAttribute("position",new Ln(b,3)),this.setAttribute("normal",new Ln(U,3)),this.setAttribute("uv",new Ln(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jd extends ea{constructor(e=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],m=[],_=[];let v=e;const y=(i-e)/l,S=new te,b=new dt;for(let U=0;U<=l;U++){for(let x=0;x<=s;x++){const g=c+x/s*h;S.x=v*Math.cos(g),S.y=v*Math.sin(g),p.push(S.x,S.y,S.z),m.push(0,0,1),b.x=(S.x/i+1)/2,b.y=(S.y/i+1)/2,_.push(b.x,b.y)}v+=y}for(let U=0;U<l;U++){const x=U*(s+1);for(let g=0;g<s;g++){const z=g+x,N=z,w=z+s+1,F=z+s+2,B=z+1;d.push(N,w,B),d.push(w,F,B)}}this.setIndex(d),this.setAttribute("position",new Ln(p,3)),this.setAttribute("normal",new Ln(m,3)),this.setAttribute("uv",new Ln(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class fu extends ea{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let m=0;const _=[],v=new te,y=new te,S=[],b=[],U=[],x=[];for(let g=0;g<=s;g++){const z=[],N=g/s;let w=0;g===0&&h===0?w=.5/i:g===s&&p===Math.PI&&(w=-.5/i);for(let F=0;F<=i;F++){const B=F/i;v.x=-e*Math.cos(l+B*c)*Math.sin(h+N*d),v.y=e*Math.cos(h+N*d),v.z=e*Math.sin(l+B*c)*Math.sin(h+N*d),b.push(v.x,v.y,v.z),y.copy(v).normalize(),U.push(y.x,y.y,y.z),x.push(B+w,1-N),z.push(m++)}_.push(z)}for(let g=0;g<s;g++)for(let z=0;z<i;z++){const N=_[g][z+1],w=_[g][z],F=_[g+1][z],B=_[g+1][z+1];(g!==0||h>0)&&S.push(N,w,B),(g!==s-1||p<Math.PI)&&S.push(w,F,B)}this.setIndex(S),this.setAttribute("position",new Ln(b,3)),this.setAttribute("normal",new Ln(U,3)),this.setAttribute("uv",new Ln(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xl extends ea{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],p=[],m=[],_=new te,v=new te,y=new te;for(let S=0;S<=s;S++)for(let b=0;b<=l;b++){const U=b/l*c,x=S/s*Math.PI*2;v.x=(e+i*Math.cos(x))*Math.cos(U),v.y=(e+i*Math.cos(x))*Math.sin(U),v.z=i*Math.sin(x),d.push(v.x,v.y,v.z),_.x=e*Math.cos(U),_.y=e*Math.sin(U),y.subVectors(v,_).normalize(),p.push(y.x,y.y,y.z),m.push(b/l),m.push(S/s)}for(let S=1;S<=s;S++)for(let b=1;b<=l;b++){const U=(l+1)*S+b-1,x=(l+1)*(S-1)+b-1,g=(l+1)*(S-1)+b,z=(l+1)*S+b;h.push(U,x,z),h.push(x,g,z)}this.setIndex(h),this.setAttribute("position",new Ln(d,3)),this.setAttribute("normal",new Ln(p,3)),this.setAttribute("uv",new Ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class lE extends fo{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ct(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class $d extends fo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fv,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cE extends $d{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class uE extends fo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fE extends fo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ev extends Hn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class hE extends Ev{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Gh=new an,d_=new te,p_=new te;class dE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=pa,this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kd,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;d_.setFromMatrixPosition(e.matrixWorld),i.position.copy(d_),p_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(p_),i.updateMatrixWorld(),Gh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ep extends xv{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class pE extends dE{constructor(){super(new ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class m_ extends Ev{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Hn.DEFAULT_UP),this.updateMatrix(),this.target=new Hn,this.shadow=new pE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mE extends Ki{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const g_=new an;class gE{constructor(e,i,s=0,l=1/0){this.ray=new Yd(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new Zd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return g_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(g_),this}intersectObject(e,i=!0,s=[]){return zd(e,this,s,i),s.sort(__),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)zd(e[l],this,s,i);return s.sort(__),s}}function __(r,e){return r.distance-e.distance}function zd(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)zd(c[h],e,i,!0)}}class v_{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Et(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _E extends ar{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function x_(r,e,i,s){const l=vE(s);switch(i){case ov:return r*e;case kd:return r*e/l.components*l.byteLength;case jd:return r*e/l.components*l.byteLength;case cv:return r*e*2/l.components*l.byteLength;case Xd:return r*e*2/l.components*l.byteLength;case lv:return r*e*3/l.components*l.byteLength;case Ji:return r*e*4/l.components*l.byteLength;case qd:return r*e*4/l.components*l.byteLength;case $c:case eu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case tu:case nu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ud:case hd:return Math.max(r,16)*Math.max(e,8)/4;case cd:case fd:return Math.max(r,8)*Math.max(e,8)/2;case dd:case pd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case md:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _d:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case vd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case xd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case yd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Md:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case bd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Td:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Rd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Cd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case wd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case iu:case Dd:case Ud:return Math.ceil(r/4)*Math.ceil(e/4)*16;case uv:case Nd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ld:case Od:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function vE(r){switch(r){case pa:case av:return{byteLength:1,components:1};case ml:case sv:case yl:return{byteLength:2,components:1};case Gd:case Vd:return{byteLength:2,components:4};case tr:case Hd:case ha:return{byteLength:4,components:1};case rv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bv(){let r=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function xE(r){const e=new WeakMap;function i(d,p){const m=d.array,_=d.usage,v=m.byteLength,y=r.createBuffer();r.bindBuffer(p,y),r.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=r.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=r.SHORT;else if(m instanceof Uint32Array)S=r.UNSIGNED_INT;else if(m instanceof Int32Array)S=r.INT;else if(m instanceof Int8Array)S=r.BYTE;else if(m instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,p,m){const _=p.array,v=p.updateRanges;if(r.bindBuffer(m,d),v.length===0)r.bufferSubData(m,0,_);else{v.sort((S,b)=>S.start-b.start);let y=0;for(let S=1;S<v.length;S++){const b=v[y],U=v[S];U.start<=b.start+b.count+1?b.count=Math.max(b.count,U.start+U.count-b.start):(++y,v[y]=U)}v.length=y+1;for(let S=0,b=v.length;S<b;S++){const U=v[S];r.bufferSubData(m,U.start*_.BYTES_PER_ELEMENT,_,U.start,U.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(r.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}var yE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SE=`#ifdef USE_ALPHAHASH
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
#endif`,ME=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AE=`#ifdef USE_AOMAP
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
#endif`,RE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CE=`#ifdef USE_BATCHING
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
#endif`,wE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LE=`#ifdef USE_IRIDESCENCE
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
#endif`,OE=`#ifdef USE_BUMPMAP
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
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,VE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kE=`#define PI 3.141592653589793
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
} // validated`,jE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,XE=`vec3 transformedNormal = objectNormal;
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
#endif`,qE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KE="gl_FragColor = linearToOutputTexel( gl_FragColor );",QE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JE=`#ifdef USE_ENVMAP
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
#endif`,$E=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e1=`#ifdef USE_ENVMAP
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
#endif`,t1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o1=`#ifdef USE_GRADIENTMAP
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
}`,l1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f1=`uniform bool receiveShadow;
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
#endif`,h1=`#ifdef USE_ENVMAP
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
#endif`,d1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_1=`PhysicalMaterial material;
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
#endif`,v1=`struct PhysicalMaterial {
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
}`,x1=`
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
#endif`,y1=`#if defined( RE_IndirectDiffuse )
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
#endif`,S1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w1=`#if defined( USE_POINTS_UV )
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
#endif`,D1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P1=`#ifdef USE_MORPHTARGETS
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
#endif`,z1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,B1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V1=`#ifdef USE_NORMALMAP
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
#endif`,k1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ib=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ab=`float getShadowMask() {
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
}`,sb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rb=`#ifdef USE_SKINNING
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
#endif`,ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lb=`#ifdef USE_SKINNING
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
#endif`,cb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ub=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,db=`#ifdef USE_TRANSMISSION
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
#endif`,pb=`#ifdef USE_TRANSMISSION
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
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yb=`uniform sampler2D t2D;
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
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`#include <common>
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
}`,Ab=`#if DEPTH_PACKING == 3200
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
}`,Rb=`#define DISTANCE
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
}`,Cb=`#define DISTANCE
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
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Db=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`uniform float scale;
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
}`,Nb=`uniform vec3 diffuse;
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
}`,Lb=`#include <common>
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
}`,Ob=`uniform vec3 diffuse;
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
}`,Pb=`#define LAMBERT
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
}`,zb=`#define LAMBERT
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
}`,Ib=`#define MATCAP
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
}`,Bb=`#define MATCAP
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
}`,Fb=`#define NORMAL
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
}`,Hb=`#define NORMAL
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
}`,Gb=`#define PHONG
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
}`,Vb=`#define PHONG
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
}`,kb=`#define STANDARD
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
}`,jb=`#define STANDARD
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
}`,Xb=`#define TOON
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
}`,qb=`#define TOON
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
}`,Wb=`uniform float size;
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
}`,Yb=`uniform vec3 diffuse;
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
}`,Zb=`#include <common>
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
}`,Kb=`uniform vec3 color;
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
}`,Qb=`uniform float rotation;
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
}`,Jb=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:yE,alphahash_pars_fragment:SE,alphamap_fragment:ME,alphamap_pars_fragment:EE,alphatest_fragment:bE,alphatest_pars_fragment:TE,aomap_fragment:AE,aomap_pars_fragment:RE,batching_pars_vertex:CE,batching_vertex:wE,begin_vertex:DE,beginnormal_vertex:UE,bsdfs:NE,iridescence_fragment:LE,bumpmap_pars_fragment:OE,clipping_planes_fragment:PE,clipping_planes_pars_fragment:zE,clipping_planes_pars_vertex:IE,clipping_planes_vertex:BE,color_fragment:FE,color_pars_fragment:HE,color_pars_vertex:GE,color_vertex:VE,common:kE,cube_uv_reflection_fragment:jE,defaultnormal_vertex:XE,displacementmap_pars_vertex:qE,displacementmap_vertex:WE,emissivemap_fragment:YE,emissivemap_pars_fragment:ZE,colorspace_fragment:KE,colorspace_pars_fragment:QE,envmap_fragment:JE,envmap_common_pars_fragment:$E,envmap_pars_fragment:e1,envmap_pars_vertex:t1,envmap_physical_pars_fragment:h1,envmap_vertex:n1,fog_vertex:i1,fog_pars_vertex:a1,fog_fragment:s1,fog_pars_fragment:r1,gradientmap_pars_fragment:o1,lightmap_pars_fragment:l1,lights_lambert_fragment:c1,lights_lambert_pars_fragment:u1,lights_pars_begin:f1,lights_toon_fragment:d1,lights_toon_pars_fragment:p1,lights_phong_fragment:m1,lights_phong_pars_fragment:g1,lights_physical_fragment:_1,lights_physical_pars_fragment:v1,lights_fragment_begin:x1,lights_fragment_maps:y1,lights_fragment_end:S1,logdepthbuf_fragment:M1,logdepthbuf_pars_fragment:E1,logdepthbuf_pars_vertex:b1,logdepthbuf_vertex:T1,map_fragment:A1,map_pars_fragment:R1,map_particle_fragment:C1,map_particle_pars_fragment:w1,metalnessmap_fragment:D1,metalnessmap_pars_fragment:U1,morphinstance_vertex:N1,morphcolor_vertex:L1,morphnormal_vertex:O1,morphtarget_pars_vertex:P1,morphtarget_vertex:z1,normal_fragment_begin:I1,normal_fragment_maps:B1,normal_pars_fragment:F1,normal_pars_vertex:H1,normal_vertex:G1,normalmap_pars_fragment:V1,clearcoat_normal_fragment_begin:k1,clearcoat_normal_fragment_maps:j1,clearcoat_pars_fragment:X1,iridescence_pars_fragment:q1,opaque_fragment:W1,packing:Y1,premultiplied_alpha_fragment:Z1,project_vertex:K1,dithering_fragment:Q1,dithering_pars_fragment:J1,roughnessmap_fragment:$1,roughnessmap_pars_fragment:eb,shadowmap_pars_fragment:tb,shadowmap_pars_vertex:nb,shadowmap_vertex:ib,shadowmask_pars_fragment:ab,skinbase_vertex:sb,skinning_pars_vertex:rb,skinning_vertex:ob,skinnormal_vertex:lb,specularmap_fragment:cb,specularmap_pars_fragment:ub,tonemapping_fragment:fb,tonemapping_pars_fragment:hb,transmission_fragment:db,transmission_pars_fragment:pb,uv_pars_fragment:mb,uv_pars_vertex:gb,uv_vertex:_b,worldpos_vertex:vb,background_vert:xb,background_frag:yb,backgroundCube_vert:Sb,backgroundCube_frag:Mb,cube_vert:Eb,cube_frag:bb,depth_vert:Tb,depth_frag:Ab,distanceRGBA_vert:Rb,distanceRGBA_frag:Cb,equirect_vert:wb,equirect_frag:Db,linedashed_vert:Ub,linedashed_frag:Nb,meshbasic_vert:Lb,meshbasic_frag:Ob,meshlambert_vert:Pb,meshlambert_frag:zb,meshmatcap_vert:Ib,meshmatcap_frag:Bb,meshnormal_vert:Fb,meshnormal_frag:Hb,meshphong_vert:Gb,meshphong_frag:Vb,meshphysical_vert:kb,meshphysical_frag:jb,meshtoon_vert:Xb,meshtoon_frag:qb,points_vert:Wb,points_frag:Yb,shadow_vert:Zb,shadow_frag:Kb,sprite_vert:Qb,sprite_frag:Jb},ke={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},ca={basic:{uniforms:ei([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:ei([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:ei([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:ei([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:ei([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:ei([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:ei([ke.points,ke.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:ei([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:ei([ke.common,ke.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:ei([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:ei([ke.sprite,ke.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:ei([ke.common,ke.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:ei([ke.lights,ke.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};ca.physical={uniforms:ei([ca.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Wc={r:0,b:0,g:0},Ys=new ma,$b=new an;function eT(r,e,i,s,l,c,h){const d=new Ct(0);let p=c===!0?0:1,m,_,v=null,y=0,S=null;function b(N){let w=N.isScene===!0?N.background:null;return w&&w.isTexture&&(w=(N.backgroundBlurriness>0?i:e).get(w)),w}function U(N){let w=!1;const F=b(N);F===null?g(d,p):F&&F.isColor&&(g(F,1),w=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(N,w){const F=b(w);F&&(F.isCubeTexture||F.mapping===uu)?(_===void 0&&(_=new nn(new da(1,1,1),new Ts({name:"BackgroundCubeMaterial",uniforms:uo(ca.backgroundCube.uniforms),vertexShader:ca.backgroundCube.vertexShader,fragmentShader:ca.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(B,G,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Ys.copy(w.backgroundRotation),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),_.material.uniforms.envMap.value=F,_.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4($b.makeRotationFromEuler(Ys)),_.material.toneMapped=Bt.getTransfer(F.colorSpace)!==Zt,(v!==F||y!==F.version||S!==r.toneMapping)&&(_.material.needsUpdate=!0,v=F,y=F.version,S=r.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):F&&F.isTexture&&(m===void 0&&(m=new nn(new rr(2,2),new Ts({name:"BackgroundMaterial",uniforms:uo(ca.background.uniforms),vertexShader:ca.background.vertexShader,fragmentShader:ca.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=F,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.toneMapped=Bt.getTransfer(F.colorSpace)!==Zt,F.matrixAutoUpdate===!0&&F.updateMatrix(),m.material.uniforms.uvTransform.value.copy(F.matrix),(v!==F||y!==F.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,v=F,y=F.version,S=r.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function g(N,w){N.getRGB(Wc,vv(r)),s.buffers.color.setClear(Wc.r,Wc.g,Wc.b,w,h)}function z(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,w=1){d.set(N),p=w,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,g(d,p)},render:U,addToRenderList:x,dispose:z}}function tT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,h=!1;function d(R,j,ae,re,fe){let me=!1;const H=v(re,ae,j);c!==H&&(c=H,m(c.object)),me=S(R,re,ae,fe),me&&b(R,re,ae,fe),fe!==null&&e.update(fe,r.ELEMENT_ARRAY_BUFFER),(me||h)&&(h=!1,w(R,j,ae,re),fe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function p(){return r.createVertexArray()}function m(R){return r.bindVertexArray(R)}function _(R){return r.deleteVertexArray(R)}function v(R,j,ae){const re=ae.wireframe===!0;let fe=s[R.id];fe===void 0&&(fe={},s[R.id]=fe);let me=fe[j.id];me===void 0&&(me={},fe[j.id]=me);let H=me[re];return H===void 0&&(H=y(p()),me[re]=H),H}function y(R){const j=[],ae=[],re=[];for(let fe=0;fe<i;fe++)j[fe]=0,ae[fe]=0,re[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ae,attributeDivisors:re,object:R,attributes:{},index:null}}function S(R,j,ae,re){const fe=c.attributes,me=j.attributes;let H=0;const K=ae.getAttributes();for(const Z in K)if(K[Z].location>=0){const P=fe[Z];let ne=me[Z];if(ne===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor)),P===void 0||P.attribute!==ne||ne&&P.data!==ne.data)return!0;H++}return c.attributesNum!==H||c.index!==re}function b(R,j,ae,re){const fe={},me=j.attributes;let H=0;const K=ae.getAttributes();for(const Z in K)if(K[Z].location>=0){let P=me[Z];P===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(P=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(P=R.instanceColor));const ne={};ne.attribute=P,P&&P.data&&(ne.data=P.data),fe[Z]=ne,H++}c.attributes=fe,c.attributesNum=H,c.index=re}function U(){const R=c.newAttributes;for(let j=0,ae=R.length;j<ae;j++)R[j]=0}function x(R){g(R,0)}function g(R,j){const ae=c.newAttributes,re=c.enabledAttributes,fe=c.attributeDivisors;ae[R]=1,re[R]===0&&(r.enableVertexAttribArray(R),re[R]=1),fe[R]!==j&&(r.vertexAttribDivisor(R,j),fe[R]=j)}function z(){const R=c.newAttributes,j=c.enabledAttributes;for(let ae=0,re=j.length;ae<re;ae++)j[ae]!==R[ae]&&(r.disableVertexAttribArray(ae),j[ae]=0)}function N(R,j,ae,re,fe,me,H){H===!0?r.vertexAttribIPointer(R,j,ae,fe,me):r.vertexAttribPointer(R,j,ae,re,fe,me)}function w(R,j,ae,re){U();const fe=re.attributes,me=ae.getAttributes(),H=j.defaultAttributeValues;for(const K in me){const Z=me[K];if(Z.location>=0){let Te=fe[K];if(Te===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(Te=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(Te=R.instanceColor)),Te!==void 0){const P=Te.normalized,ne=Te.itemSize,Se=e.get(Te);if(Se===void 0)continue;const Ae=Se.buffer,ee=Se.type,ge=Se.bytesPerElement,xe=ee===r.INT||ee===r.UNSIGNED_INT||Te.gpuType===Hd;if(Te.isInterleavedBufferAttribute){const De=Te.data,Le=De.stride,ut=Te.offset;if(De.isInstancedInterleavedBuffer){for(let Ke=0;Ke<Z.locationSize;Ke++)g(Z.location+Ke,De.meshPerAttribute);R.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let Ke=0;Ke<Z.locationSize;Ke++)x(Z.location+Ke);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let Ke=0;Ke<Z.locationSize;Ke++)N(Z.location+Ke,ne/Z.locationSize,ee,P,Le*ge,(ut+ne/Z.locationSize*Ke)*ge,xe)}else{if(Te.isInstancedBufferAttribute){for(let De=0;De<Z.locationSize;De++)g(Z.location+De,Te.meshPerAttribute);R.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let De=0;De<Z.locationSize;De++)x(Z.location+De);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let De=0;De<Z.locationSize;De++)N(Z.location+De,ne/Z.locationSize,ee,P,ne*ge,ne/Z.locationSize*De*ge,xe)}}else if(H!==void 0){const P=H[K];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(Z.location,P);break;case 3:r.vertexAttrib3fv(Z.location,P);break;case 4:r.vertexAttrib4fv(Z.location,P);break;default:r.vertexAttrib1fv(Z.location,P)}}}}z()}function F(){q();for(const R in s){const j=s[R];for(const ae in j){const re=j[ae];for(const fe in re)_(re[fe].object),delete re[fe];delete j[ae]}delete s[R]}}function B(R){if(s[R.id]===void 0)return;const j=s[R.id];for(const ae in j){const re=j[ae];for(const fe in re)_(re[fe].object),delete re[fe];delete j[ae]}delete s[R.id]}function G(R){for(const j in s){const ae=s[j];if(ae[R.id]===void 0)continue;const re=ae[R.id];for(const fe in re)_(re[fe].object),delete re[fe];delete ae[R.id]}}function q(){L(),h=!0,c!==l&&(c=l,m(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:L,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:G,initAttributes:U,enableAttribute:x,disableUnusedAttributes:z}}function nT(r,e,i){let s;function l(m){s=m}function c(m,_){r.drawArrays(s,m,_),i.update(_,s,1)}function h(m,_,v){v!==0&&(r.drawArraysInstanced(s,m,_,v),i.update(_,s,v))}function d(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,_,0,v);let S=0;for(let b=0;b<v;b++)S+=_[b];i.update(S,s,1)}function p(m,_,v,y){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<m.length;b++)h(m[b],_[b],y[b]);else{S.multiDrawArraysInstancedWEBGL(s,m,0,_,0,y,0,v);let b=0;for(let U=0;U<v;U++)b+=_[U]*y[U];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function iT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(G){return!(G!==Ji&&s.convert(G)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(G){const q=G===yl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(G!==pa&&s.convert(G)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==ha&&!q)}function p(G){if(G==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),z=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=b>0,B=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:b,maxTextureSize:U,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:z,maxVaryings:N,maxFragmentUniforms:w,vertexTextures:F,maxSamples:B}}function aT(r){const e=this;let i=null,s=0,l=!1,c=!1;const h=new ys,d=new _t,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||s!==0||l;return l=y,s=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,y){i=_(v,y,0)},this.setState=function(v,y,S){const b=v.clippingPlanes,U=v.clipIntersection,x=v.clipShadows,g=r.get(v);if(!l||b===null||b.length===0||c&&!x)c?_(null):m();else{const z=c?0:s,N=z*4;let w=g.clippingState||null;p.value=w,w=_(b,y,N,S);for(let F=0;F!==N;++F)w[F]=i[F];g.clippingState=w,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=z}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(v,y,S,b){const U=v!==null?v.length:0;let x=null;if(U!==0){if(x=p.value,b!==!0||x===null){const g=S+U*4,z=y.matrixWorldInverse;d.getNormalMatrix(z),(x===null||x.length<g)&&(x=new Float32Array(g));for(let N=0,w=S;N!==U;++N,w+=4)h.copy(v[N]).applyMatrix4(z,d),h.normal.toArray(x,w),x[w+3]=h.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=U,e.numIntersection=0,x}}function sT(r){let e=new WeakMap;function i(h,d){return d===sd?h.mapping=ro:d===rd&&(h.mapping=oo),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===sd||d===rd)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new eE(p.height);return m.fromEquirectangularTexture(r,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const no=4,y_=[.125,.215,.35,.446,.526,.582],Js=20,Vh=new ep,S_=new Ct;let kh=null,jh=0,Xh=0,qh=!1;const Ks=(1+Math.sqrt(5))/2,to=1/Ks,M_=[new te(-Ks,to,0),new te(Ks,to,0),new te(-to,0,Ks),new te(to,0,Ks),new te(0,Ks,-to),new te(0,Ks,to),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)],rT=new te;class E_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=rT}=c;kh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=A_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kh,jh,Xh),this._renderer.xr.enabled=qh,e.scissorTest=!1,Yc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ro||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:fa,minFilter:fa,generateMipmaps:!1,type:yl,format:Ji,colorSpace:lo,depthBuffer:!1},l=b_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=b_(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oT(c)),this._blurMaterial=lT(c,e,i)}return l}_compileMaterial(e){const i=new nn(this._lodPlanes[0],e);this._renderer.compile(i,Vh)}_sceneToCubeUV(e,i,s,l,c){const p=new Ki(90,1,i,s),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(S_),v.toneMapping=bs,v.autoClear=!1;const b=new co({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1}),U=new nn(new da,b);let x=!1;const g=e.background;g?g.isColor&&(b.color.copy(g),e.background=null,x=!0):(b.color.copy(S_),x=!0);for(let z=0;z<6;z++){const N=z%3;N===0?(p.up.set(0,m[z],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[z],c.y,c.z)):N===1?(p.up.set(0,0,m[z]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[z],c.z)):(p.up.set(0,m[z],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[z]));const w=this._cubeSize;Yc(l,N*w,z>2?w:0,w,w),v.setRenderTarget(l),x&&v.render(U,p),v.render(e,p)}U.geometry.dispose(),U.material.dispose(),v.toneMapping=S,v.autoClear=y,e.background=g}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===ro||e.mapping===oo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=A_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=T_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new nn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Yc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,Vh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=M_[(l-c-1)%M_.length];this._blur(e,c-1,c,h,d)}i.autoClear=s}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new nn(this._lodPlanes[l],m),y=m.uniforms,S=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Js-1),U=c/b,x=isFinite(c)?1+Math.floor(_*U):Js;x>Js&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Js}`);const g=[];let z=0;for(let G=0;G<Js;++G){const q=G/U,L=Math.exp(-q*q/2);g.push(L),G===0?z+=L:G<x&&(z+=2*L)}for(let G=0;G<g.length;G++)g[G]=g[G]/z;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=g,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:N}=this;y.dTheta.value=b,y.mipInt.value=N-s;const w=this._sizeLods[l],F=3*w*(l>N-no?l-N+no:0),B=4*(this._cubeSize-w);Yc(i,F,B,3*w,2*w),p.setRenderTarget(i),p.render(v,Vh)}}function oT(r){const e=[],i=[],s=[];let l=r;const c=r-no+1+y_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>r-no?p=y_[h-r+no-1]:h===0&&(p=0),s.push(p);const m=1/(d-2),_=-m,v=1+m,y=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,b=6,U=3,x=2,g=1,z=new Float32Array(U*b*S),N=new Float32Array(x*b*S),w=new Float32Array(g*b*S);for(let B=0;B<S;B++){const G=B%3*2/3-1,q=B>2?0:-1,L=[G,q,0,G+2/3,q,0,G+2/3,q+1,0,G,q,0,G+2/3,q+1,0,G,q+1,0];z.set(L,U*b*B),N.set(y,x*b*B);const R=[B,B,B,B,B,B];w.set(R,g*b*B)}const F=new ea;F.setAttribute("position",new $i(z,U)),F.setAttribute("uv",new $i(N,x)),F.setAttribute("faceIndex",new $i(w,g)),e.push(F),l>no&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function b_(r,e,i){const s=new nr(r,e,i);return s.texture.mapping=uu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Yc(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function lT(r,e,i){const s=new Float32Array(Js),l=new te(0,1,0);return new Ts({name:"SphericalGaussianBlur",defines:{n:Js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:tp(),fragmentShader:`

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
		`,blending:Es,depthTest:!1,depthWrite:!1})}function T_(){return new Ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tp(),fragmentShader:`

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
		`,blending:Es,depthTest:!1,depthWrite:!1})}function A_(){return new Ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Es,depthTest:!1,depthWrite:!1})}function tp(){return`

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
	`}function cT(r){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===sd||p===rd,_=p===ro||p===oo;if(m||_){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new E_(r)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new E_(r)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function uT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&su("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function fT(r,e,i,s){const l={},c=new WeakMap;function h(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);y.removeEventListener("dispose",h),delete l[y.id];const S=c.get(y);S&&(e.remove(S),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(v,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function p(v){const y=v.attributes;for(const S in y)e.update(y[S],r.ARRAY_BUFFER)}function m(v){const y=[],S=v.index,b=v.attributes.position;let U=0;if(S!==null){const z=S.array;U=S.version;for(let N=0,w=z.length;N<w;N+=3){const F=z[N+0],B=z[N+1],G=z[N+2];y.push(F,B,B,G,G,F)}}else if(b!==void 0){const z=b.array;U=b.version;for(let N=0,w=z.length/3-1;N<w;N+=3){const F=N+0,B=N+1,G=N+2;y.push(F,B,B,G,G,F)}}else return;const x=new(dv(y)?_v:gv)(y,1);x.version=U;const g=c.get(v);g&&e.remove(g),c.set(v,x)}function _(v){const y=c.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&m(v)}else m(v);return c.get(v)}return{get:d,update:p,getWireframeAttribute:_}}function hT(r,e,i){let s;function l(y){s=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function p(y,S){r.drawElements(s,S,c,y*h),i.update(S,s,1)}function m(y,S,b){b!==0&&(r.drawElementsInstanced(s,S,c,y*h,b),i.update(S,s,b))}function _(y,S,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,y,0,b);let x=0;for(let g=0;g<b;g++)x+=S[g];i.update(x,s,1)}function v(y,S,b,U){if(b===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<y.length;g++)m(y[g]/h,S[g],U[g]);else{x.multiDrawElementsInstancedWEBGL(s,S,0,c,y,0,U,0,b);let g=0;for(let z=0;z<b;z++)g+=S[z]*U[z];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function dT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function pT(r,e,i){const s=new WeakMap,l=new dn;function c(h,d,p){const m=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let y=s.get(d);if(y===void 0||y.count!==v){let R=function(){q.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var S=R;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,U=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let w=0;b===!0&&(w=1),U===!0&&(w=2),x===!0&&(w=3);let F=d.attributes.position.count*w,B=1;F>e.maxTextureSize&&(B=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const G=new Float32Array(F*B*4*v),q=new pv(G,F,B,v);q.type=ha,q.needsUpdate=!0;const L=w*4;for(let j=0;j<v;j++){const ae=g[j],re=z[j],fe=N[j],me=F*B*4*j;for(let H=0;H<ae.count;H++){const K=H*L;b===!0&&(l.fromBufferAttribute(ae,H),G[me+K+0]=l.x,G[me+K+1]=l.y,G[me+K+2]=l.z,G[me+K+3]=0),U===!0&&(l.fromBufferAttribute(re,H),G[me+K+4]=l.x,G[me+K+5]=l.y,G[me+K+6]=l.z,G[me+K+7]=0),x===!0&&(l.fromBufferAttribute(fe,H),G[me+K+8]=l.x,G[me+K+9]=l.y,G[me+K+10]=l.z,G[me+K+11]=fe.itemSize===4?l.w:1)}}y={count:v,texture:q,size:new dt(F,B)},s.set(d,y),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let x=0;x<m.length;x++)b+=m[x];const U=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(r,"morphTargetBaseInfluence",U),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function mT(r,e,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,_=p.geometry,v=e.get(p,_);if(l.get(v)!==m&&(e.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return v}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}const Tv=new Qn,R_=new Mv(1,1),Av=new pv,Rv=new IM,Cv=new yv,C_=[],w_=[],D_=new Float32Array(16),U_=new Float32Array(9),N_=new Float32Array(4);function ho(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=C_[l];if(c===void 0&&(c=new Float32Array(l),C_[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,r[h].toArray(c,d)}return c}function On(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Pn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function hu(r,e){let i=w_[e];i===void 0&&(i=new Int32Array(e),w_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function gT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function _T(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;r.uniform2fv(this.addr,e),Pn(i,e)}}function vT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(On(i,e))return;r.uniform3fv(this.addr,e),Pn(i,e)}}function xT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;r.uniform4fv(this.addr,e),Pn(i,e)}}function yT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(On(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,s))return;N_.set(s),r.uniformMatrix2fv(this.addr,!1,N_),Pn(i,s)}}function ST(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(On(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,s))return;U_.set(s),r.uniformMatrix3fv(this.addr,!1,U_),Pn(i,s)}}function MT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(On(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,s))return;D_.set(s),r.uniformMatrix4fv(this.addr,!1,D_),Pn(i,s)}}function ET(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function bT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;r.uniform2iv(this.addr,e),Pn(i,e)}}function TT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;r.uniform3iv(this.addr,e),Pn(i,e)}}function AT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;r.uniform4iv(this.addr,e),Pn(i,e)}}function RT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function CT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;r.uniform2uiv(this.addr,e),Pn(i,e)}}function wT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;r.uniform3uiv(this.addr,e),Pn(i,e)}}function DT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;r.uniform4uiv(this.addr,e),Pn(i,e)}}function UT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(R_.compareFunction=hv,c=R_):c=Tv,i.setTexture2D(e||c,l)}function NT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Rv,l)}function LT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Cv,l)}function OT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Av,l)}function PT(r){switch(r){case 5126:return gT;case 35664:return _T;case 35665:return vT;case 35666:return xT;case 35674:return yT;case 35675:return ST;case 35676:return MT;case 5124:case 35670:return ET;case 35667:case 35671:return bT;case 35668:case 35672:return TT;case 35669:case 35673:return AT;case 5125:return RT;case 36294:return CT;case 36295:return wT;case 36296:return DT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return OT}}function zT(r,e){r.uniform1fv(this.addr,e)}function IT(r,e){const i=ho(e,this.size,2);r.uniform2fv(this.addr,i)}function BT(r,e){const i=ho(e,this.size,3);r.uniform3fv(this.addr,i)}function FT(r,e){const i=ho(e,this.size,4);r.uniform4fv(this.addr,i)}function HT(r,e){const i=ho(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function GT(r,e){const i=ho(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function VT(r,e){const i=ho(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function kT(r,e){r.uniform1iv(this.addr,e)}function jT(r,e){r.uniform2iv(this.addr,e)}function XT(r,e){r.uniform3iv(this.addr,e)}function qT(r,e){r.uniform4iv(this.addr,e)}function WT(r,e){r.uniform1uiv(this.addr,e)}function YT(r,e){r.uniform2uiv(this.addr,e)}function ZT(r,e){r.uniform3uiv(this.addr,e)}function KT(r,e){r.uniform4uiv(this.addr,e)}function QT(r,e,i){const s=this.cache,l=e.length,c=hu(i,l);On(s,c)||(r.uniform1iv(this.addr,c),Pn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Tv,c[h])}function JT(r,e,i){const s=this.cache,l=e.length,c=hu(i,l);On(s,c)||(r.uniform1iv(this.addr,c),Pn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Rv,c[h])}function $T(r,e,i){const s=this.cache,l=e.length,c=hu(i,l);On(s,c)||(r.uniform1iv(this.addr,c),Pn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Cv,c[h])}function eA(r,e,i){const s=this.cache,l=e.length,c=hu(i,l);On(s,c)||(r.uniform1iv(this.addr,c),Pn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Av,c[h])}function tA(r){switch(r){case 5126:return zT;case 35664:return IT;case 35665:return BT;case 35666:return FT;case 35674:return HT;case 35675:return GT;case 35676:return VT;case 5124:case 35670:return kT;case 35667:case 35671:return jT;case 35668:case 35672:return XT;case 35669:case 35673:return qT;case 5125:return WT;case 36294:return YT;case 36295:return ZT;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return QT;case 35679:case 36299:case 36307:return JT;case 35680:case 36300:case 36308:case 36293:return $T;case 36289:case 36303:case 36311:case 36292:return eA}}class nA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=PT(i.type)}}class iA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=tA(i.type)}}class aA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const Wh=/(\w+)(\])?(\[|\.)?/g;function L_(r,e){r.seq.push(e),r.map[e.id]=e}function sA(r,e,i){const s=r.name,l=s.length;for(Wh.lastIndex=0;;){const c=Wh.exec(s),h=Wh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){L_(i,m===void 0?new nA(d,r,e):new iA(d,r,e));break}else{let v=i.map[d];v===void 0&&(v=new aA(d),L_(i,v)),i=v}}}class ru{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);sA(c,h,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function O_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const rA=37297;let oA=0;function lA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const P_=new _t;function cA(r){Bt._getMatrix(P_,Bt.workingColorSpace,r);const e=`mat3( ${P_.elements.map(i=>i.toFixed(4))} )`;switch(Bt.getTransfer(r)){case ou:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function z_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=r.getShaderInfoLog(e).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+lA(r.getShaderSource(e),h)}else return l}function uA(r,e){const i=cA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function fA(r,e){let i;switch(e){case cM:i="Linear";break;case uM:i="Reinhard";break;case fM:i="Cineon";break;case nv:i="ACESFilmic";break;case dM:i="AgX";break;case pM:i="Neutral";break;case hM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Zc=new te;function hA(){Bt.getLuminanceCoefficients(Zc);const r=Zc.x.toFixed(4),e=Zc.y.toFixed(4),i=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pl).join(`
`)}function pA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function mA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(e,h),locationSize:d}}return i}function pl(r){return r!==""}function I_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function B_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(r){return r.replace(gA,vA)}const _A=new Map;function vA(r,e){let i=xt[e];if(i===void 0){const s=_A.get(e);if(s!==void 0)i=xt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Id(i)}const xA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F_(r){return r.replace(xA,yA)}function yA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function H_(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function SA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===$_?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ev?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Fa&&(e="SHADOWMAP_TYPE_VSM"),e}function MA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ro:case oo:e="ENVMAP_TYPE_CUBE";break;case uu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function EA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case oo:e="ENVMAP_MODE_REFRACTION";break}return e}function bA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case tv:e="ENVMAP_BLENDING_MULTIPLY";break;case oM:e="ENVMAP_BLENDING_MIX";break;case lM:e="ENVMAP_BLENDING_ADD";break}return e}function TA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function AA(r,e,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=SA(i),m=MA(i),_=EA(i),v=bA(i),y=TA(i),S=dA(i),b=pA(c),U=l.createProgram();let x,g,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(pl).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(pl).join(`
`),g.length>0&&(g+=`
`)):(x=[H_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pl).join(`
`),g=[H_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==bs?"#define TONE_MAPPING":"",i.toneMapping!==bs?xt.tonemapping_pars_fragment:"",i.toneMapping!==bs?fA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,uA("linearToOutputTexel",i.outputColorSpace),hA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(pl).join(`
`)),h=Id(h),h=I_(h,i),h=B_(h,i),d=Id(d),d=I_(d,i),d=B_(d,i),h=F_(h),d=F_(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",i.glslVersion===q0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===q0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const N=z+x+h,w=z+g+d,F=O_(l,l.VERTEX_SHADER,N),B=O_(l,l.FRAGMENT_SHADER,w);l.attachShader(U,F),l.attachShader(U,B),i.index0AttributeName!==void 0?l.bindAttribLocation(U,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(U,0,"position"),l.linkProgram(U);function G(j){if(r.debug.checkShaderErrors){const ae=l.getProgramInfoLog(U).trim(),re=l.getShaderInfoLog(F).trim(),fe=l.getShaderInfoLog(B).trim();let me=!0,H=!0;if(l.getProgramParameter(U,l.LINK_STATUS)===!1)if(me=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,U,F,B);else{const K=z_(l,F,"vertex"),Z=z_(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(U,l.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+ae+`
`+K+`
`+Z)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(re===""||fe==="")&&(H=!1);H&&(j.diagnostics={runnable:me,programLog:ae,vertexShader:{log:re,prefix:x},fragmentShader:{log:fe,prefix:g}})}l.deleteShader(F),l.deleteShader(B),q=new ru(l,U),L=mA(l,U)}let q;this.getUniforms=function(){return q===void 0&&G(this),q};let L;this.getAttributes=function(){return L===void 0&&G(this),L};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(U,rA)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(U),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=oA++,this.cacheKey=e,this.usedTimes=1,this.program=U,this.vertexShader=F,this.fragmentShader=B,this}let RA=0;class CA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new wA(e),i.set(e,s)),s}}class wA{constructor(e){this.id=RA++,this.code=e,this.usedTimes=0}}function DA(r,e,i,s,l,c,h){const d=new Zd,p=new CA,m=new Set,_=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function U(L){return m.add(L),L===0?"uv":`uv${L}`}function x(L,R,j,ae,re){const fe=ae.fog,me=re.geometry,H=L.isMeshStandardMaterial?ae.environment:null,K=(L.isMeshStandardMaterial?i:e).get(L.envMap||H),Z=K&&K.mapping===uu?K.image.height:null,Te=b[L.type];L.precision!==null&&(S=l.getMaxPrecision(L.precision),S!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",S,"instead."));const P=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,ne=P!==void 0?P.length:0;let Se=0;me.morphAttributes.position!==void 0&&(Se=1),me.morphAttributes.normal!==void 0&&(Se=2),me.morphAttributes.color!==void 0&&(Se=3);let Ae,ee,ge,xe;if(Te){const Nt=ca[Te];Ae=Nt.vertexShader,ee=Nt.fragmentShader}else Ae=L.vertexShader,ee=L.fragmentShader,p.update(L),ge=p.getVertexShaderID(L),xe=p.getFragmentShaderID(L);const De=r.getRenderTarget(),Le=r.state.buffers.depth.getReversed(),ut=re.isInstancedMesh===!0,Ke=re.isBatchedMesh===!0,ft=!!L.map,zt=!!L.matcap,nt=!!K,k=!!L.aoMap,on=!!L.lightMap,pt=!!L.bumpMap,it=!!L.normalMap,Ye=!!L.displacementMap,Ut=!!L.emissiveMap,he=!!L.metalnessMap,C=!!L.roughnessMap,T=L.anisotropy>0,Y=L.clearcoat>0,pe=L.dispersion>0,Ee=L.iridescence>0,I=L.sheen>0,Ue=L.transmission>0,Ce=T&&!!L.anisotropyMap,je=Y&&!!L.clearcoatMap,Qe=Y&&!!L.clearcoatNormalMap,we=Y&&!!L.clearcoatRoughnessMap,He=Ee&&!!L.iridescenceMap,Je=Ee&&!!L.iridescenceThicknessMap,qe=I&&!!L.sheenColorMap,Ve=I&&!!L.sheenRoughnessMap,ot=!!L.specularMap,at=!!L.specularColorMap,wt=!!L.specularIntensityMap,X=Ue&&!!L.transmissionMap,Oe=Ue&&!!L.thicknessMap,de=!!L.gradientMap,ve=!!L.alphaMap,Ge=L.alphaTest>0,Be=!!L.alphaHash,lt=!!L.extensions;let Ot=bs;L.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(Ot=r.toneMapping);const $t={shaderID:Te,shaderType:L.type,shaderName:L.name,vertexShader:Ae,fragmentShader:ee,defines:L.defines,customVertexShaderID:ge,customFragmentShaderID:xe,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:S,batching:Ke,batchingColor:Ke&&re._colorsTexture!==null,instancing:ut,instancingColor:ut&&re.instanceColor!==null,instancingMorph:ut&&re.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:De===null?r.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:lo,alphaToCoverage:!!L.alphaToCoverage,map:ft,matcap:zt,envMap:nt,envMapMode:nt&&K.mapping,envMapCubeUVHeight:Z,aoMap:k,lightMap:on,bumpMap:pt,normalMap:it,displacementMap:y&&Ye,emissiveMap:Ut,normalMapObjectSpace:it&&L.normalMapType===vM,normalMapTangentSpace:it&&L.normalMapType===fv,metalnessMap:he,roughnessMap:C,anisotropy:T,anisotropyMap:Ce,clearcoat:Y,clearcoatMap:je,clearcoatNormalMap:Qe,clearcoatRoughnessMap:we,dispersion:pe,iridescence:Ee,iridescenceMap:He,iridescenceThicknessMap:Je,sheen:I,sheenColorMap:qe,sheenRoughnessMap:Ve,specularMap:ot,specularColorMap:at,specularIntensityMap:wt,transmission:Ue,transmissionMap:X,thicknessMap:Oe,gradientMap:de,opaque:L.transparent===!1&&L.blending===io&&L.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ge,alphaHash:Be,combine:L.combine,mapUv:ft&&U(L.map.channel),aoMapUv:k&&U(L.aoMap.channel),lightMapUv:on&&U(L.lightMap.channel),bumpMapUv:pt&&U(L.bumpMap.channel),normalMapUv:it&&U(L.normalMap.channel),displacementMapUv:Ye&&U(L.displacementMap.channel),emissiveMapUv:Ut&&U(L.emissiveMap.channel),metalnessMapUv:he&&U(L.metalnessMap.channel),roughnessMapUv:C&&U(L.roughnessMap.channel),anisotropyMapUv:Ce&&U(L.anisotropyMap.channel),clearcoatMapUv:je&&U(L.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&U(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&U(L.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&U(L.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&U(L.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&U(L.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&U(L.sheenRoughnessMap.channel),specularMapUv:ot&&U(L.specularMap.channel),specularColorMapUv:at&&U(L.specularColorMap.channel),specularIntensityMapUv:wt&&U(L.specularIntensityMap.channel),transmissionMapUv:X&&U(L.transmissionMap.channel),thicknessMapUv:Oe&&U(L.thicknessMap.channel),alphaMapUv:ve&&U(L.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(it||T),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!me.attributes.uv&&(ft||ve),fog:!!fe,useFog:L.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Le,skinning:re.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Se,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:L.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ot,decodeVideoTexture:ft&&L.map.isVideoTexture===!0&&Bt.getTransfer(L.map.colorSpace)===Zt,decodeVideoTextureEmissive:Ut&&L.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(L.emissiveMap.colorSpace)===Zt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===ua,flipSided:L.side===ui,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:lt&&L.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&L.extensions.multiDraw===!0||Ke)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return $t.vertexUv1s=m.has(1),$t.vertexUv2s=m.has(2),$t.vertexUv3s=m.has(3),m.clear(),$t}function g(L){const R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(const j in L.defines)R.push(j),R.push(L.defines[j]);return L.isRawShaderMaterial===!1&&(z(R,L),N(R,L),R.push(r.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function z(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function N(L,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),L.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),L.push(d.mask)}function w(L){const R=b[L.type];let j;if(R){const ae=ca[R];j=KM.clone(ae.uniforms)}else j=L.uniforms;return j}function F(L,R){let j;for(let ae=0,re=_.length;ae<re;ae++){const fe=_[ae];if(fe.cacheKey===R){j=fe,++j.usedTimes;break}}return j===void 0&&(j=new AA(r,R,L,c),_.push(j)),j}function B(L){if(--L.usedTimes===0){const R=_.indexOf(L);_[R]=_[_.length-1],_.pop(),L.destroy()}}function G(L){p.remove(L)}function q(){p.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:w,acquireProgram:F,releaseProgram:B,releaseShaderCache:G,programs:_,dispose:q}}function UA(){let r=new WeakMap;function e(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,p){r.get(h)[d]=p}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function NA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function G_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function V_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(v,y,S,b,U,x){let g=r[e];return g===void 0?(g={id:v.id,object:v,geometry:y,material:S,groupOrder:b,renderOrder:v.renderOrder,z:U,group:x},r[e]=g):(g.id=v.id,g.object=v,g.geometry=y,g.material=S,g.groupOrder=b,g.renderOrder=v.renderOrder,g.z=U,g.group=x),e++,g}function d(v,y,S,b,U,x){const g=h(v,y,S,b,U,x);S.transmission>0?s.push(g):S.transparent===!0?l.push(g):i.push(g)}function p(v,y,S,b,U,x){const g=h(v,y,S,b,U,x);S.transmission>0?s.unshift(g):S.transparent===!0?l.unshift(g):i.unshift(g)}function m(v,y){i.length>1&&i.sort(v||NA),s.length>1&&s.sort(y||G_),l.length>1&&l.sort(y||G_)}function _(){for(let v=e,y=r.length;v<y;v++){const S=r[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:_,sort:m}}function LA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let h;return c===void 0?(h=new V_,r.set(s,[h])):l>=c.length?(h=new V_,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:e,dispose:i}}function OA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new te,color:new Ct};break;case"SpotLight":i={position:new te,direction:new te,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new te,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":i={direction:new te,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":i={color:new Ct,position:new te,halfWidth:new te,halfHeight:new te};break}return r[e.id]=i,i}}}function PA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let zA=0;function IA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function BA(r){const e=new OA,i=PA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new te);const l=new te,c=new an,h=new an;function d(m){let _=0,v=0,y=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let S=0,b=0,U=0,x=0,g=0,z=0,N=0,w=0,F=0,B=0,G=0;m.sort(IA);for(let L=0,R=m.length;L<R;L++){const j=m[L],ae=j.color,re=j.intensity,fe=j.distance,me=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)_+=ae.r*re,v+=ae.g*re,y+=ae.b*re;else if(j.isLightProbe){for(let H=0;H<9;H++)s.probe[H].addScaledVector(j.sh.coefficients[H],re);G++}else if(j.isDirectionalLight){const H=e.get(j);if(H.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const K=j.shadow,Z=i.get(j);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.directionalShadow[S]=Z,s.directionalShadowMap[S]=me,s.directionalShadowMatrix[S]=j.shadow.matrix,z++}s.directional[S]=H,S++}else if(j.isSpotLight){const H=e.get(j);H.position.setFromMatrixPosition(j.matrixWorld),H.color.copy(ae).multiplyScalar(re),H.distance=fe,H.coneCos=Math.cos(j.angle),H.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),H.decay=j.decay,s.spot[U]=H;const K=j.shadow;if(j.map&&(s.spotLightMap[F]=j.map,F++,K.updateMatrices(j),j.castShadow&&B++),s.spotLightMatrix[U]=K.matrix,j.castShadow){const Z=i.get(j);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.spotShadow[U]=Z,s.spotShadowMap[U]=me,w++}U++}else if(j.isRectAreaLight){const H=e.get(j);H.color.copy(ae).multiplyScalar(re),H.halfWidth.set(j.width*.5,0,0),H.halfHeight.set(0,j.height*.5,0),s.rectArea[x]=H,x++}else if(j.isPointLight){const H=e.get(j);if(H.color.copy(j.color).multiplyScalar(j.intensity),H.distance=j.distance,H.decay=j.decay,j.castShadow){const K=j.shadow,Z=i.get(j);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,s.pointShadow[b]=Z,s.pointShadowMap[b]=me,s.pointShadowMatrix[b]=j.shadow.matrix,N++}s.point[b]=H,b++}else if(j.isHemisphereLight){const H=e.get(j);H.skyColor.copy(j.color).multiplyScalar(re),H.groundColor.copy(j.groundColor).multiplyScalar(re),s.hemi[g]=H,g++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ke.LTC_FLOAT_1,s.rectAreaLTC2=ke.LTC_FLOAT_2):(s.rectAreaLTC1=ke.LTC_HALF_1,s.rectAreaLTC2=ke.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=y;const q=s.hash;(q.directionalLength!==S||q.pointLength!==b||q.spotLength!==U||q.rectAreaLength!==x||q.hemiLength!==g||q.numDirectionalShadows!==z||q.numPointShadows!==N||q.numSpotShadows!==w||q.numSpotMaps!==F||q.numLightProbes!==G)&&(s.directional.length=S,s.spot.length=U,s.rectArea.length=x,s.point.length=b,s.hemi.length=g,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=w+F-B,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=G,q.directionalLength=S,q.pointLength=b,q.spotLength=U,q.rectAreaLength=x,q.hemiLength=g,q.numDirectionalShadows=z,q.numPointShadows=N,q.numSpotShadows=w,q.numSpotMaps=F,q.numLightProbes=G,s.version=zA++)}function p(m,_){let v=0,y=0,S=0,b=0,U=0;const x=_.matrixWorldInverse;for(let g=0,z=m.length;g<z;g++){const N=m[g];if(N.isDirectionalLight){const w=s.directional[v];w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(x),v++}else if(N.isSpotLight){const w=s.spot[S];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(x),S++}else if(N.isRectAreaLight){const w=s.rectArea[b];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(x),h.identity(),c.copy(N.matrixWorld),c.premultiply(x),h.extractRotation(c),w.halfWidth.set(N.width*.5,0,0),w.halfHeight.set(0,N.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const w=s.point[y];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(x),y++}else if(N.isHemisphereLight){const w=s.hemi[U];w.direction.setFromMatrixPosition(N.matrixWorld),w.direction.transformDirection(x),U++}}}return{setup:d,setupView:p,state:s}}function k_(r){const e=new BA(r),i=[],s=[];function l(_){m.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){e.setup(i)}function p(_){e.setupView(i,_)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function FA(r){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new k_(r),e.set(l,[d])):c>=h.length?(d=new k_(r),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const HA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GA=`uniform sampler2D shadow_pass;
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
}`;function VA(r,e,i){let s=new Kd;const l=new dt,c=new dt,h=new dn,d=new uE({depthPacking:_M}),p=new fE,m={},_=i.maxTextureSize,v={[ka]:ui,[ui]:ka,[ua]:ua},y=new Ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:HA,fragmentShader:GA}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const b=new ea;b.setAttribute("position",new $i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new nn(b,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$_;let g=this.type;this.render=function(B,G,q){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||B.length===0)return;const L=r.getRenderTarget(),R=r.getActiveCubeFace(),j=r.getActiveMipmapLevel(),ae=r.state;ae.setBlending(Es),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const re=g!==Fa&&this.type===Fa,fe=g===Fa&&this.type!==Fa;for(let me=0,H=B.length;me<H;me++){const K=B[me],Z=K.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const Te=Z.getFrameExtents();if(l.multiply(Te),c.copy(Z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/Te.x),l.x=c.x*Te.x,Z.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/Te.y),l.y=c.y*Te.y,Z.mapSize.y=c.y)),Z.map===null||re===!0||fe===!0){const ne=this.type!==Fa?{minFilter:Ai,magFilter:Ai}:{};Z.map!==null&&Z.map.dispose(),Z.map=new nr(l.x,l.y,ne),Z.map.texture.name=K.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const P=Z.getViewportCount();for(let ne=0;ne<P;ne++){const Se=Z.getViewport(ne);h.set(c.x*Se.x,c.y*Se.y,c.x*Se.z,c.y*Se.w),ae.viewport(h),Z.updateMatrices(K,ne),s=Z.getFrustum(),w(G,q,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===Fa&&z(Z,q),Z.needsUpdate=!1}g=this.type,x.needsUpdate=!1,r.setRenderTarget(L,R,j)};function z(B,G){const q=e.update(U);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new nr(l.x,l.y)),y.uniforms.shadow_pass.value=B.map.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(G,null,q,y,U,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(G,null,q,S,U,null)}function N(B,G,q,L){let R=null;const j=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(j!==void 0)R=j;else if(R=q.isPointLight===!0?p:d,r.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){const ae=R.uuid,re=G.uuid;let fe=m[ae];fe===void 0&&(fe={},m[ae]=fe);let me=fe[re];me===void 0&&(me=R.clone(),fe[re]=me,G.addEventListener("dispose",F)),R=me}if(R.visible=G.visible,R.wireframe=G.wireframe,L===Fa?R.side=G.shadowSide!==null?G.shadowSide:G.side:R.side=G.shadowSide!==null?G.shadowSide:v[G.side],R.alphaMap=G.alphaMap,R.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,R.map=G.map,R.clipShadows=G.clipShadows,R.clippingPlanes=G.clippingPlanes,R.clipIntersection=G.clipIntersection,R.displacementMap=G.displacementMap,R.displacementScale=G.displacementScale,R.displacementBias=G.displacementBias,R.wireframeLinewidth=G.wireframeLinewidth,R.linewidth=G.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ae=r.properties.get(R);ae.light=q}return R}function w(B,G,q,L,R){if(B.visible===!1)return;if(B.layers.test(G.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===Fa)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const re=e.update(B),fe=B.material;if(Array.isArray(fe)){const me=re.groups;for(let H=0,K=me.length;H<K;H++){const Z=me[H],Te=fe[Z.materialIndex];if(Te&&Te.visible){const P=N(B,Te,L,R);B.onBeforeShadow(r,B,G,q,re,P,Z),r.renderBufferDirect(q,null,re,P,B,Z),B.onAfterShadow(r,B,G,q,re,P,Z)}}}else if(fe.visible){const me=N(B,fe,L,R);B.onBeforeShadow(r,B,G,q,re,me,null),r.renderBufferDirect(q,null,re,me,B,null),B.onAfterShadow(r,B,G,q,re,me,null)}}const ae=B.children;for(let re=0,fe=ae.length;re<fe;re++)w(ae[re],G,q,L,R)}function F(B){B.target.removeEventListener("dispose",F);for(const q in m){const L=m[q],R=B.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}const kA={[Jh]:$h,[ed]:id,[td]:ad,[so]:nd,[$h]:Jh,[id]:ed,[ad]:td,[nd]:so};function jA(r,e){function i(){let X=!1;const Oe=new dn;let de=null;const ve=new dn(0,0,0,0);return{setMask:function(Ge){de!==Ge&&!X&&(r.colorMask(Ge,Ge,Ge,Ge),de=Ge)},setLocked:function(Ge){X=Ge},setClear:function(Ge,Be,lt,Ot,$t){$t===!0&&(Ge*=Ot,Be*=Ot,lt*=Ot),Oe.set(Ge,Be,lt,Ot),ve.equals(Oe)===!1&&(r.clearColor(Ge,Be,lt,Ot),ve.copy(Oe))},reset:function(){X=!1,de=null,ve.set(-1,0,0,0)}}}function s(){let X=!1,Oe=!1,de=null,ve=null,Ge=null;return{setReversed:function(Be){if(Oe!==Be){const lt=e.get("EXT_clip_control");Be?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT),Oe=Be;const Ot=Ge;Ge=null,this.setClear(Ot)}},getReversed:function(){return Oe},setTest:function(Be){Be?De(r.DEPTH_TEST):Le(r.DEPTH_TEST)},setMask:function(Be){de!==Be&&!X&&(r.depthMask(Be),de=Be)},setFunc:function(Be){if(Oe&&(Be=kA[Be]),ve!==Be){switch(Be){case Jh:r.depthFunc(r.NEVER);break;case $h:r.depthFunc(r.ALWAYS);break;case ed:r.depthFunc(r.LESS);break;case so:r.depthFunc(r.LEQUAL);break;case td:r.depthFunc(r.EQUAL);break;case nd:r.depthFunc(r.GEQUAL);break;case id:r.depthFunc(r.GREATER);break;case ad:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ve=Be}},setLocked:function(Be){X=Be},setClear:function(Be){Ge!==Be&&(Oe&&(Be=1-Be),r.clearDepth(Be),Ge=Be)},reset:function(){X=!1,de=null,ve=null,Ge=null,Oe=!1}}}function l(){let X=!1,Oe=null,de=null,ve=null,Ge=null,Be=null,lt=null,Ot=null,$t=null;return{setTest:function(Nt){X||(Nt?De(r.STENCIL_TEST):Le(r.STENCIL_TEST))},setMask:function(Nt){Oe!==Nt&&!X&&(r.stencilMask(Nt),Oe=Nt)},setFunc:function(Nt,jn,pn){(de!==Nt||ve!==jn||Ge!==pn)&&(r.stencilFunc(Nt,jn,pn),de=Nt,ve=jn,Ge=pn)},setOp:function(Nt,jn,pn){(Be!==Nt||lt!==jn||Ot!==pn)&&(r.stencilOp(Nt,jn,pn),Be=Nt,lt=jn,Ot=pn)},setLocked:function(Nt){X=Nt},setClear:function(Nt){$t!==Nt&&(r.clearStencil(Nt),$t=Nt)},reset:function(){X=!1,Oe=null,de=null,ve=null,Ge=null,Be=null,lt=null,Ot=null,$t=null}}}const c=new i,h=new s,d=new l,p=new WeakMap,m=new WeakMap;let _={},v={},y=new WeakMap,S=[],b=null,U=!1,x=null,g=null,z=null,N=null,w=null,F=null,B=null,G=new Ct(0,0,0),q=0,L=!1,R=null,j=null,ae=null,re=null,fe=null;const me=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,K=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=K>=2);let Te=null,P={};const ne=r.getParameter(r.SCISSOR_BOX),Se=r.getParameter(r.VIEWPORT),Ae=new dn().fromArray(ne),ee=new dn().fromArray(Se);function ge(X,Oe,de,ve){const Ge=new Uint8Array(4),Be=r.createTexture();r.bindTexture(X,Be),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let lt=0;lt<de;lt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Oe,0,r.RGBA,1,1,ve,0,r.RGBA,r.UNSIGNED_BYTE,Ge):r.texImage2D(Oe+lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ge);return Be}const xe={};xe[r.TEXTURE_2D]=ge(r.TEXTURE_2D,r.TEXTURE_2D,1),xe[r.TEXTURE_CUBE_MAP]=ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[r.TEXTURE_2D_ARRAY]=ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xe[r.TEXTURE_3D]=ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),De(r.DEPTH_TEST),h.setFunc(so),pt(!1),it(H0),De(r.CULL_FACE),k(Es);function De(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function Le(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function ut(X,Oe){return v[X]!==Oe?(r.bindFramebuffer(X,Oe),v[X]=Oe,X===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Oe),X===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Oe),!0):!1}function Ke(X,Oe){let de=S,ve=!1;if(X){de=y.get(Oe),de===void 0&&(de=[],y.set(Oe,de));const Ge=X.textures;if(de.length!==Ge.length||de[0]!==r.COLOR_ATTACHMENT0){for(let Be=0,lt=Ge.length;Be<lt;Be++)de[Be]=r.COLOR_ATTACHMENT0+Be;de.length=Ge.length,ve=!0}}else de[0]!==r.BACK&&(de[0]=r.BACK,ve=!0);ve&&r.drawBuffers(de)}function ft(X){return b!==X?(r.useProgram(X),b=X,!0):!1}const zt={[Qs]:r.FUNC_ADD,[jS]:r.FUNC_SUBTRACT,[XS]:r.FUNC_REVERSE_SUBTRACT};zt[qS]=r.MIN,zt[WS]=r.MAX;const nt={[YS]:r.ZERO,[ZS]:r.ONE,[KS]:r.SRC_COLOR,[Kh]:r.SRC_ALPHA,[nM]:r.SRC_ALPHA_SATURATE,[eM]:r.DST_COLOR,[JS]:r.DST_ALPHA,[QS]:r.ONE_MINUS_SRC_COLOR,[Qh]:r.ONE_MINUS_SRC_ALPHA,[tM]:r.ONE_MINUS_DST_COLOR,[$S]:r.ONE_MINUS_DST_ALPHA,[iM]:r.CONSTANT_COLOR,[aM]:r.ONE_MINUS_CONSTANT_COLOR,[sM]:r.CONSTANT_ALPHA,[rM]:r.ONE_MINUS_CONSTANT_ALPHA};function k(X,Oe,de,ve,Ge,Be,lt,Ot,$t,Nt){if(X===Es){U===!0&&(Le(r.BLEND),U=!1);return}if(U===!1&&(De(r.BLEND),U=!0),X!==kS){if(X!==x||Nt!==L){if((g!==Qs||w!==Qs)&&(r.blendEquation(r.FUNC_ADD),g=Qs,w=Qs),Nt)switch(X){case io:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case G0:r.blendFunc(r.ONE,r.ONE);break;case V0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case k0:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case io:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case G0:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case V0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case k0:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}z=null,N=null,F=null,B=null,G.set(0,0,0),q=0,x=X,L=Nt}return}Ge=Ge||Oe,Be=Be||de,lt=lt||ve,(Oe!==g||Ge!==w)&&(r.blendEquationSeparate(zt[Oe],zt[Ge]),g=Oe,w=Ge),(de!==z||ve!==N||Be!==F||lt!==B)&&(r.blendFuncSeparate(nt[de],nt[ve],nt[Be],nt[lt]),z=de,N=ve,F=Be,B=lt),(Ot.equals(G)===!1||$t!==q)&&(r.blendColor(Ot.r,Ot.g,Ot.b,$t),G.copy(Ot),q=$t),x=X,L=!1}function on(X,Oe){X.side===ua?Le(r.CULL_FACE):De(r.CULL_FACE);let de=X.side===ui;Oe&&(de=!de),pt(de),X.blending===io&&X.transparent===!1?k(Es):k(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const ve=X.stencilWrite;d.setTest(ve),ve&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ut(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?De(r.SAMPLE_ALPHA_TO_COVERAGE):Le(r.SAMPLE_ALPHA_TO_COVERAGE)}function pt(X){R!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),R=X)}function it(X){X!==GS?(De(r.CULL_FACE),X!==j&&(X===H0?r.cullFace(r.BACK):X===VS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Le(r.CULL_FACE),j=X}function Ye(X){X!==ae&&(H&&r.lineWidth(X),ae=X)}function Ut(X,Oe,de){X?(De(r.POLYGON_OFFSET_FILL),(re!==Oe||fe!==de)&&(r.polygonOffset(Oe,de),re=Oe,fe=de)):Le(r.POLYGON_OFFSET_FILL)}function he(X){X?De(r.SCISSOR_TEST):Le(r.SCISSOR_TEST)}function C(X){X===void 0&&(X=r.TEXTURE0+me-1),Te!==X&&(r.activeTexture(X),Te=X)}function T(X,Oe,de){de===void 0&&(Te===null?de=r.TEXTURE0+me-1:de=Te);let ve=P[de];ve===void 0&&(ve={type:void 0,texture:void 0},P[de]=ve),(ve.type!==X||ve.texture!==Oe)&&(Te!==de&&(r.activeTexture(de),Te=de),r.bindTexture(X,Oe||xe[X]),ve.type=X,ve.texture=Oe)}function Y(){const X=P[Te];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function pe(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ee(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function I(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ue(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function je(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qe(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Je(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qe(X){Ae.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Ae.copy(X))}function Ve(X){ee.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),ee.copy(X))}function ot(X,Oe){let de=m.get(Oe);de===void 0&&(de=new WeakMap,m.set(Oe,de));let ve=de.get(X);ve===void 0&&(ve=r.getUniformBlockIndex(Oe,X.name),de.set(X,ve))}function at(X,Oe){const ve=m.get(Oe).get(X);p.get(Oe)!==ve&&(r.uniformBlockBinding(Oe,ve,X.__bindingPointIndex),p.set(Oe,ve))}function wt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},Te=null,P={},v={},y=new WeakMap,S=[],b=null,U=!1,x=null,g=null,z=null,N=null,w=null,F=null,B=null,G=new Ct(0,0,0),q=0,L=!1,R=null,j=null,ae=null,re=null,fe=null,Ae.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:De,disable:Le,bindFramebuffer:ut,drawBuffers:Ke,useProgram:ft,setBlending:k,setMaterial:on,setFlipSided:pt,setCullFace:it,setLineWidth:Ye,setPolygonOffset:Ut,setScissorTest:he,activeTexture:C,bindTexture:T,unbindTexture:Y,compressedTexImage2D:pe,compressedTexImage3D:Ee,texImage2D:He,texImage3D:Je,updateUBOMapping:ot,uniformBlockBinding:at,texStorage2D:Qe,texStorage3D:we,texSubImage2D:I,texSubImage3D:Ue,compressedTexSubImage2D:Ce,compressedTexSubImage3D:je,scissor:qe,viewport:Ve,reset:wt}}function XA(r,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new dt,_=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,T){return S?new OffscreenCanvas(C,T):cu("canvas")}function U(C,T,Y){let pe=1;const Ee=he(C);if((Ee.width>Y||Ee.height>Y)&&(pe=Y/Math.max(Ee.width,Ee.height)),pe<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const I=Math.floor(pe*Ee.width),Ue=Math.floor(pe*Ee.height);v===void 0&&(v=b(I,Ue));const Ce=T?b(I,Ue):v;return Ce.width=I,Ce.height=Ue,Ce.getContext("2d").drawImage(C,0,0,I,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+I+"x"+Ue+")."),Ce}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),C;return C}function x(C){return C.generateMipmaps}function g(C){r.generateMipmap(C)}function z(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(C,T,Y,pe,Ee=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let I=T;if(T===r.RED&&(Y===r.FLOAT&&(I=r.R32F),Y===r.HALF_FLOAT&&(I=r.R16F),Y===r.UNSIGNED_BYTE&&(I=r.R8)),T===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(I=r.R8UI),Y===r.UNSIGNED_SHORT&&(I=r.R16UI),Y===r.UNSIGNED_INT&&(I=r.R32UI),Y===r.BYTE&&(I=r.R8I),Y===r.SHORT&&(I=r.R16I),Y===r.INT&&(I=r.R32I)),T===r.RG&&(Y===r.FLOAT&&(I=r.RG32F),Y===r.HALF_FLOAT&&(I=r.RG16F),Y===r.UNSIGNED_BYTE&&(I=r.RG8)),T===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(I=r.RG8UI),Y===r.UNSIGNED_SHORT&&(I=r.RG16UI),Y===r.UNSIGNED_INT&&(I=r.RG32UI),Y===r.BYTE&&(I=r.RG8I),Y===r.SHORT&&(I=r.RG16I),Y===r.INT&&(I=r.RG32I)),T===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(I=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(I=r.RGB16UI),Y===r.UNSIGNED_INT&&(I=r.RGB32UI),Y===r.BYTE&&(I=r.RGB8I),Y===r.SHORT&&(I=r.RGB16I),Y===r.INT&&(I=r.RGB32I)),T===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(I=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(I=r.RGBA16UI),Y===r.UNSIGNED_INT&&(I=r.RGBA32UI),Y===r.BYTE&&(I=r.RGBA8I),Y===r.SHORT&&(I=r.RGBA16I),Y===r.INT&&(I=r.RGBA32I)),T===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(I=r.RGB9_E5),T===r.RGBA){const Ue=Ee?ou:Bt.getTransfer(pe);Y===r.FLOAT&&(I=r.RGBA32F),Y===r.HALF_FLOAT&&(I=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(I=Ue===Zt?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(I=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(I=r.RGB5_A1)}return(I===r.R16F||I===r.R32F||I===r.RG16F||I===r.RG32F||I===r.RGBA16F||I===r.RGBA32F)&&e.get("EXT_color_buffer_float"),I}function w(C,T){let Y;return C?T===null||T===tr||T===gl?Y=r.DEPTH24_STENCIL8:T===ha?Y=r.DEPTH32F_STENCIL8:T===ml&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===tr||T===gl?Y=r.DEPTH_COMPONENT24:T===ha?Y=r.DEPTH_COMPONENT32F:T===ml&&(Y=r.DEPTH_COMPONENT16),Y}function F(C,T){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ai&&C.minFilter!==fa?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function B(C){const T=C.target;T.removeEventListener("dispose",B),q(T),T.isVideoTexture&&_.delete(T)}function G(C){const T=C.target;T.removeEventListener("dispose",G),R(T)}function q(C){const T=s.get(C);if(T.__webglInit===void 0)return;const Y=C.source,pe=y.get(Y);if(pe){const Ee=pe[T.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&L(C),Object.keys(pe).length===0&&y.delete(Y)}s.remove(C)}function L(C){const T=s.get(C);r.deleteTexture(T.__webglTexture);const Y=C.source,pe=y.get(Y);delete pe[T.__cacheKey],h.memory.textures--}function R(C){const T=s.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),s.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let Ee=0;Ee<T.__webglFramebuffer[pe].length;Ee++)r.deleteFramebuffer(T.__webglFramebuffer[pe][Ee]);else r.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)r.deleteFramebuffer(T.__webglFramebuffer[pe]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=C.textures;for(let pe=0,Ee=Y.length;pe<Ee;pe++){const I=s.get(Y[pe]);I.__webglTexture&&(r.deleteTexture(I.__webglTexture),h.memory.textures--),s.remove(Y[pe])}s.remove(C)}let j=0;function ae(){j=0}function re(){const C=j;return C>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l.maxTextures),j+=1,C}function fe(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function me(C,T){const Y=s.get(C);if(C.isVideoTexture&&Ye(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const pe=C.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(Y,C,T);return}}i.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+T)}function H(C,T){const Y=s.get(C);if(C.version>0&&Y.__version!==C.version){ee(Y,C,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+T)}function K(C,T){const Y=s.get(C);if(C.version>0&&Y.__version!==C.version){ee(Y,C,T);return}i.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+T)}function Z(C,T){const Y=s.get(C);if(C.version>0&&Y.__version!==C.version){ge(Y,C,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+T)}const Te={[od]:r.REPEAT,[$s]:r.CLAMP_TO_EDGE,[ld]:r.MIRRORED_REPEAT},P={[Ai]:r.NEAREST,[mM]:r.NEAREST_MIPMAP_NEAREST,[Cc]:r.NEAREST_MIPMAP_LINEAR,[fa]:r.LINEAR,[vh]:r.LINEAR_MIPMAP_NEAREST,[er]:r.LINEAR_MIPMAP_LINEAR},ne={[xM]:r.NEVER,[TM]:r.ALWAYS,[yM]:r.LESS,[hv]:r.LEQUAL,[SM]:r.EQUAL,[bM]:r.GEQUAL,[MM]:r.GREATER,[EM]:r.NOTEQUAL};function Se(C,T){if(T.type===ha&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===fa||T.magFilter===vh||T.magFilter===Cc||T.magFilter===er||T.minFilter===fa||T.minFilter===vh||T.minFilter===Cc||T.minFilter===er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Te[T.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Te[T.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Te[T.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,P[T.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,P[T.minFilter]),T.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ne[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ai||T.minFilter!==Cc&&T.minFilter!==er||T.type===ha&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Ae(C,T){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",B));const pe=T.source;let Ee=y.get(pe);Ee===void 0&&(Ee={},y.set(pe,Ee));const I=fe(T);if(I!==C.__cacheKey){Ee[I]===void 0&&(Ee[I]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,Y=!0),Ee[I].usedTimes++;const Ue=Ee[C.__cacheKey];Ue!==void 0&&(Ee[C.__cacheKey].usedTimes--,Ue.usedTimes===0&&L(T)),C.__cacheKey=I,C.__webglTexture=Ee[I].texture}return Y}function ee(C,T,Y){let pe=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=r.TEXTURE_3D);const Ee=Ae(C,T),I=T.source;i.bindTexture(pe,C.__webglTexture,r.TEXTURE0+Y);const Ue=s.get(I);if(I.version!==Ue.__version||Ee===!0){i.activeTexture(r.TEXTURE0+Y);const Ce=Bt.getPrimaries(Bt.workingColorSpace),je=T.colorSpace===Ss?null:Bt.getPrimaries(T.colorSpace),Qe=T.colorSpace===Ss||Ce===je?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let we=U(T.image,!1,l.maxTextureSize);we=Ut(T,we);const He=c.convert(T.format,T.colorSpace),Je=c.convert(T.type);let qe=N(T.internalFormat,He,Je,T.colorSpace,T.isVideoTexture);Se(pe,T);let Ve;const ot=T.mipmaps,at=T.isVideoTexture!==!0,wt=Ue.__version===void 0||Ee===!0,X=I.dataReady,Oe=F(T,we);if(T.isDepthTexture)qe=w(T.format===vl,T.type),wt&&(at?i.texStorage2D(r.TEXTURE_2D,1,qe,we.width,we.height):i.texImage2D(r.TEXTURE_2D,0,qe,we.width,we.height,0,He,Je,null));else if(T.isDataTexture)if(ot.length>0){at&&wt&&i.texStorage2D(r.TEXTURE_2D,Oe,qe,ot[0].width,ot[0].height);for(let de=0,ve=ot.length;de<ve;de++)Ve=ot[de],at?X&&i.texSubImage2D(r.TEXTURE_2D,de,0,0,Ve.width,Ve.height,He,Je,Ve.data):i.texImage2D(r.TEXTURE_2D,de,qe,Ve.width,Ve.height,0,He,Je,Ve.data);T.generateMipmaps=!1}else at?(wt&&i.texStorage2D(r.TEXTURE_2D,Oe,qe,we.width,we.height),X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,we.width,we.height,He,Je,we.data)):i.texImage2D(r.TEXTURE_2D,0,qe,we.width,we.height,0,He,Je,we.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){at&&wt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,qe,ot[0].width,ot[0].height,we.depth);for(let de=0,ve=ot.length;de<ve;de++)if(Ve=ot[de],T.format!==Ji)if(He!==null)if(at){if(X)if(T.layerUpdates.size>0){const Ge=x_(Ve.width,Ve.height,T.format,T.type);for(const Be of T.layerUpdates){const lt=Ve.data.subarray(Be*Ge/Ve.data.BYTES_PER_ELEMENT,(Be+1)*Ge/Ve.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,Be,Ve.width,Ve.height,1,He,lt)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,Ve.width,Ve.height,we.depth,He,Ve.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,de,qe,Ve.width,Ve.height,we.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?X&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,Ve.width,Ve.height,we.depth,He,Je,Ve.data):i.texImage3D(r.TEXTURE_2D_ARRAY,de,qe,Ve.width,Ve.height,we.depth,0,He,Je,Ve.data)}else{at&&wt&&i.texStorage2D(r.TEXTURE_2D,Oe,qe,ot[0].width,ot[0].height);for(let de=0,ve=ot.length;de<ve;de++)Ve=ot[de],T.format!==Ji?He!==null?at?X&&i.compressedTexSubImage2D(r.TEXTURE_2D,de,0,0,Ve.width,Ve.height,He,Ve.data):i.compressedTexImage2D(r.TEXTURE_2D,de,qe,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?X&&i.texSubImage2D(r.TEXTURE_2D,de,0,0,Ve.width,Ve.height,He,Je,Ve.data):i.texImage2D(r.TEXTURE_2D,de,qe,Ve.width,Ve.height,0,He,Je,Ve.data)}else if(T.isDataArrayTexture)if(at){if(wt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,qe,we.width,we.height,we.depth),X)if(T.layerUpdates.size>0){const de=x_(we.width,we.height,T.format,T.type);for(const ve of T.layerUpdates){const Ge=we.data.subarray(ve*de/we.data.BYTES_PER_ELEMENT,(ve+1)*de/we.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ve,we.width,we.height,1,He,Je,Ge)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,He,Je,we.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,qe,we.width,we.height,we.depth,0,He,Je,we.data);else if(T.isData3DTexture)at?(wt&&i.texStorage3D(r.TEXTURE_3D,Oe,qe,we.width,we.height,we.depth),X&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,He,Je,we.data)):i.texImage3D(r.TEXTURE_3D,0,qe,we.width,we.height,we.depth,0,He,Je,we.data);else if(T.isFramebufferTexture){if(wt)if(at)i.texStorage2D(r.TEXTURE_2D,Oe,qe,we.width,we.height);else{let de=we.width,ve=we.height;for(let Ge=0;Ge<Oe;Ge++)i.texImage2D(r.TEXTURE_2D,Ge,qe,de,ve,0,He,Je,null),de>>=1,ve>>=1}}else if(ot.length>0){if(at&&wt){const de=he(ot[0]);i.texStorage2D(r.TEXTURE_2D,Oe,qe,de.width,de.height)}for(let de=0,ve=ot.length;de<ve;de++)Ve=ot[de],at?X&&i.texSubImage2D(r.TEXTURE_2D,de,0,0,He,Je,Ve):i.texImage2D(r.TEXTURE_2D,de,qe,He,Je,Ve);T.generateMipmaps=!1}else if(at){if(wt){const de=he(we);i.texStorage2D(r.TEXTURE_2D,Oe,qe,de.width,de.height)}X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,He,Je,we)}else i.texImage2D(r.TEXTURE_2D,0,qe,He,Je,we);x(T)&&g(pe),Ue.__version=I.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ge(C,T,Y){if(T.image.length!==6)return;const pe=Ae(C,T),Ee=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+Y);const I=s.get(Ee);if(Ee.version!==I.__version||pe===!0){i.activeTexture(r.TEXTURE0+Y);const Ue=Bt.getPrimaries(Bt.workingColorSpace),Ce=T.colorSpace===Ss?null:Bt.getPrimaries(T.colorSpace),je=T.colorSpace===Ss||Ue===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const Qe=T.isCompressedTexture||T.image[0].isCompressedTexture,we=T.image[0]&&T.image[0].isDataTexture,He=[];for(let ve=0;ve<6;ve++)!Qe&&!we?He[ve]=U(T.image[ve],!0,l.maxCubemapSize):He[ve]=we?T.image[ve].image:T.image[ve],He[ve]=Ut(T,He[ve]);const Je=He[0],qe=c.convert(T.format,T.colorSpace),Ve=c.convert(T.type),ot=N(T.internalFormat,qe,Ve,T.colorSpace),at=T.isVideoTexture!==!0,wt=I.__version===void 0||pe===!0,X=Ee.dataReady;let Oe=F(T,Je);Se(r.TEXTURE_CUBE_MAP,T);let de;if(Qe){at&&wt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,ot,Je.width,Je.height);for(let ve=0;ve<6;ve++){de=He[ve].mipmaps;for(let Ge=0;Ge<de.length;Ge++){const Be=de[Ge];T.format!==Ji?qe!==null?at?X&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge,0,0,Be.width,Be.height,qe,Be.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge,ot,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge,0,0,Be.width,Be.height,qe,Ve,Be.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge,ot,Be.width,Be.height,0,qe,Ve,Be.data)}}}else{if(de=T.mipmaps,at&&wt){de.length>0&&Oe++;const ve=he(He[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,ot,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(we){at?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,He[ve].width,He[ve].height,qe,Ve,He[ve].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ot,He[ve].width,He[ve].height,0,qe,Ve,He[ve].data);for(let Ge=0;Ge<de.length;Ge++){const lt=de[Ge].image[ve].image;at?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge+1,0,0,lt.width,lt.height,qe,Ve,lt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge+1,ot,lt.width,lt.height,0,qe,Ve,lt.data)}}else{at?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,qe,Ve,He[ve]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ot,qe,Ve,He[ve]);for(let Ge=0;Ge<de.length;Ge++){const Be=de[Ge];at?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge+1,0,0,qe,Ve,Be.image[ve]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge+1,ot,qe,Ve,Be.image[ve])}}}x(T)&&g(r.TEXTURE_CUBE_MAP),I.__version=Ee.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function xe(C,T,Y,pe,Ee,I){const Ue=c.convert(Y.format,Y.colorSpace),Ce=c.convert(Y.type),je=N(Y.internalFormat,Ue,Ce,Y.colorSpace),Qe=s.get(T),we=s.get(Y);if(we.__renderTarget=T,!Qe.__hasExternalTextures){const He=Math.max(1,T.width>>I),Je=Math.max(1,T.height>>I);Ee===r.TEXTURE_3D||Ee===r.TEXTURE_2D_ARRAY?i.texImage3D(Ee,I,je,He,Je,T.depth,0,Ue,Ce,null):i.texImage2D(Ee,I,je,He,Je,0,Ue,Ce,null)}i.bindFramebuffer(r.FRAMEBUFFER,C),it(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,Ee,we.__webglTexture,0,pt(T)):(Ee===r.TEXTURE_2D||Ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pe,Ee,we.__webglTexture,I),i.bindFramebuffer(r.FRAMEBUFFER,null)}function De(C,T,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,C),T.depthBuffer){const pe=T.depthTexture,Ee=pe&&pe.isDepthTexture?pe.type:null,I=w(T.stencilBuffer,Ee),Ue=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=pt(T);it(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,I,T.width,T.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,I,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,I,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ue,r.RENDERBUFFER,C)}else{const pe=T.textures;for(let Ee=0;Ee<pe.length;Ee++){const I=pe[Ee],Ue=c.convert(I.format,I.colorSpace),Ce=c.convert(I.type),je=N(I.internalFormat,Ue,Ce,I.colorSpace),Qe=pt(T);Y&&it(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe,je,T.width,T.height):it(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qe,je,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,je,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Le(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=s.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),me(T.depthTexture,0);const Ee=pe.__webglTexture,I=pt(T);if(T.depthTexture.format===_l)it(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ee,0,I):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ee,0);else if(T.depthTexture.format===vl)it(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ee,0,I):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function ut(C){const T=s.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const pe=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const Ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",Ee)};pe.addEventListener("dispose",Ee),T.__depthDisposeCallback=Ee}T.__boundDepthTexture=pe}if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const pe=C.texture.mipmaps;pe&&pe.length>0?Le(T.__webglFramebuffer[0],C):Le(T.__webglFramebuffer,C)}else if(Y){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=r.createRenderbuffer(),De(T.__webglDepthbuffer[pe],C,!1);else{const Ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,I=T.__webglDepthbuffer[pe];r.bindRenderbuffer(r.RENDERBUFFER,I),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,I)}}else{const pe=C.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),De(T.__webglDepthbuffer,C,!1);else{const Ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,I=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,I),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,I)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(C,T,Y){const pe=s.get(C);T!==void 0&&xe(pe.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&ut(C)}function ft(C){const T=C.texture,Y=s.get(C),pe=s.get(T);C.addEventListener("dispose",G);const Ee=C.textures,I=C.isWebGLCubeRenderTarget===!0,Ue=Ee.length>1;if(Ue||(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=T.version,h.memory.textures++),I){Y.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[Ce]=[];for(let je=0;je<T.mipmaps.length;je++)Y.__webglFramebuffer[Ce][je]=r.createFramebuffer()}else Y.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)Y.__webglFramebuffer[Ce]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Ue)for(let Ce=0,je=Ee.length;Ce<je;Ce++){const Qe=s.get(Ee[Ce]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=r.createTexture(),h.memory.textures++)}if(C.samples>0&&it(C)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ce=0;Ce<Ee.length;Ce++){const je=Ee[Ce];Y.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Ce]);const Qe=c.convert(je.format,je.colorSpace),we=c.convert(je.type),He=N(je.internalFormat,Qe,we,je.colorSpace,C.isXRRenderTarget===!0),Je=pt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,He,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),De(Y.__webglDepthRenderbuffer,C,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(I){i.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),Se(r.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let je=0;je<T.mipmaps.length;je++)xe(Y.__webglFramebuffer[Ce][je],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,je);else xe(Y.__webglFramebuffer[Ce],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);x(T)&&g(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let Ce=0,je=Ee.length;Ce<je;Ce++){const Qe=Ee[Ce],we=s.get(Qe);i.bindTexture(r.TEXTURE_2D,we.__webglTexture),Se(r.TEXTURE_2D,Qe),xe(Y.__webglFramebuffer,C,Qe,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),x(Qe)&&g(r.TEXTURE_2D)}i.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ce=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ce,pe.__webglTexture),Se(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let je=0;je<T.mipmaps.length;je++)xe(Y.__webglFramebuffer[je],C,T,r.COLOR_ATTACHMENT0,Ce,je);else xe(Y.__webglFramebuffer,C,T,r.COLOR_ATTACHMENT0,Ce,0);x(T)&&g(Ce),i.unbindTexture()}C.depthBuffer&&ut(C)}function zt(C){const T=C.textures;for(let Y=0,pe=T.length;Y<pe;Y++){const Ee=T[Y];if(x(Ee)){const I=z(C),Ue=s.get(Ee).__webglTexture;i.bindTexture(I,Ue),g(I),i.unbindTexture()}}}const nt=[],k=[];function on(C){if(C.samples>0){if(it(C)===!1){const T=C.textures,Y=C.width,pe=C.height;let Ee=r.COLOR_BUFFER_BIT;const I=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=s.get(C),Ce=T.length>1;if(Ce)for(let Qe=0;Qe<T.length;Qe++)i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const je=C.texture.mipmaps;je&&je.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Qe=0;Qe<T.length;Qe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Ee|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Ee|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Qe]);const we=s.get(T[Qe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,we,0)}r.blitFramebuffer(0,0,Y,pe,0,0,Y,pe,Ee,r.NEAREST),p===!0&&(nt.length=0,k.length=0,nt.push(r.COLOR_ATTACHMENT0+Qe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(nt.push(I),k.push(I),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,k)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,nt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Qe=0;Qe<T.length;Qe++){i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Qe]);const we=s.get(T[Qe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,we,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&p){const T=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function pt(C){return Math.min(l.maxSamples,C.samples)}function it(C){const T=s.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ye(C){const T=h.render.frame;_.get(C)!==T&&(_.set(C,T),C.update())}function Ut(C,T){const Y=C.colorSpace,pe=C.format,Ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==lo&&Y!==Ss&&(Bt.getTransfer(Y)===Zt?(pe!==Ji||Ee!==pa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}function he(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(m.width=C.naturalWidth||C.width,m.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(m.width=C.displayWidth,m.height=C.displayHeight):(m.width=C.width,m.height=C.height),m}this.allocateTextureUnit=re,this.resetTextureUnits=ae,this.setTexture2D=me,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=Ke,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=it}function qA(r,e){function i(s,l=Ss){let c;const h=Bt.getTransfer(l);if(s===pa)return r.UNSIGNED_BYTE;if(s===Gd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Vd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===rv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===av)return r.BYTE;if(s===sv)return r.SHORT;if(s===ml)return r.UNSIGNED_SHORT;if(s===Hd)return r.INT;if(s===tr)return r.UNSIGNED_INT;if(s===ha)return r.FLOAT;if(s===yl)return r.HALF_FLOAT;if(s===ov)return r.ALPHA;if(s===lv)return r.RGB;if(s===Ji)return r.RGBA;if(s===_l)return r.DEPTH_COMPONENT;if(s===vl)return r.DEPTH_STENCIL;if(s===kd)return r.RED;if(s===jd)return r.RED_INTEGER;if(s===cv)return r.RG;if(s===Xd)return r.RG_INTEGER;if(s===qd)return r.RGBA_INTEGER;if(s===$c||s===eu||s===tu||s===nu)if(h===Zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===$c)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===$c)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cd||s===ud||s===fd||s===hd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===cd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ud)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dd||s===pd||s===md)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===dd||s===pd)return h===Zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===md)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===gd||s===_d||s===vd||s===xd||s===yd||s===Sd||s===Md||s===Ed||s===bd||s===Td||s===Ad||s===Rd||s===Cd||s===wd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===gd)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===_d)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vd)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xd)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===yd)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sd)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Md)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ed)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bd)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Td)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ad)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rd)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Cd)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wd)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===iu||s===Dd||s===Ud)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===iu)return h===Zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Dd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ud)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===uv||s===Nd||s===Ld||s===Od)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===iu)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Nd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ld)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Od)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===gl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const WA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YA=`
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

}`;class ZA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new Qn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ts({vertexShader:WA,fragmentShader:YA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new nn(new rr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KA extends ar{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,_=null,v=null,y=null,S=null,b=null;const U=new ZA,x=i.getContextAttributes();let g=null,z=null;const N=[],w=[],F=new dt;let B=null;const G=new Ki;G.viewport=new dn;const q=new Ki;q.viewport=new dn;const L=[G,q],R=new mE;let j=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ge=N[ee];return ge===void 0&&(ge=new Fh,N[ee]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ee){let ge=N[ee];return ge===void 0&&(ge=new Fh,N[ee]=ge),ge.getGripSpace()},this.getHand=function(ee){let ge=N[ee];return ge===void 0&&(ge=new Fh,N[ee]=ge),ge.getHandSpace()};function re(ee){const ge=w.indexOf(ee.inputSource);if(ge===-1)return;const xe=N[ge];xe!==void 0&&(xe.update(ee.inputSource,ee.frame,m||h),xe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function fe(){l.removeEventListener("select",re),l.removeEventListener("selectstart",re),l.removeEventListener("selectend",re),l.removeEventListener("squeeze",re),l.removeEventListener("squeezestart",re),l.removeEventListener("squeezeend",re),l.removeEventListener("end",fe),l.removeEventListener("inputsourceschange",me);for(let ee=0;ee<N.length;ee++){const ge=w[ee];ge!==null&&(w[ee]=null,N[ee].disconnect(ge))}j=null,ae=null,U.reset(),e.setRenderTarget(g),S=null,y=null,v=null,l=null,z=null,Ae.stop(),s.isPresenting=!1,e.setPixelRatio(B),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){d=ee,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(ee){m=ee},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(g=e.getRenderTarget(),l.addEventListener("select",re),l.addEventListener("selectstart",re),l.addEventListener("selectend",re),l.addEventListener("squeeze",re),l.addEventListener("squeezestart",re),l.addEventListener("squeezeend",re),l.addEventListener("end",fe),l.addEventListener("inputsourceschange",me),x.xrCompatible!==!0&&await i.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,De=null,Le=null;x.depth&&(Le=x.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xe=x.stencil?vl:_l,De=x.stencil?gl:tr);const ut={colorFormat:i.RGBA8,depthFormat:Le,scaleFactor:c};v=new XRWebGLBinding(l,i),y=v.createProjectionLayer(ut),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),z=new nr(y.textureWidth,y.textureHeight,{format:Ji,type:pa,depthTexture:new Mv(y.textureWidth,y.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const xe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,xe),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),z=new nr(S.framebufferWidth,S.framebufferHeight,{format:Ji,type:pa,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),Ae.setContext(l),Ae.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return U.getDepthTexture()};function me(ee){for(let ge=0;ge<ee.removed.length;ge++){const xe=ee.removed[ge],De=w.indexOf(xe);De>=0&&(w[De]=null,N[De].disconnect(xe))}for(let ge=0;ge<ee.added.length;ge++){const xe=ee.added[ge];let De=w.indexOf(xe);if(De===-1){for(let ut=0;ut<N.length;ut++)if(ut>=w.length){w.push(xe),De=ut;break}else if(w[ut]===null){w[ut]=xe,De=ut;break}if(De===-1)break}const Le=N[De];Le&&Le.connect(xe)}}const H=new te,K=new te;function Z(ee,ge,xe){H.setFromMatrixPosition(ge.matrixWorld),K.setFromMatrixPosition(xe.matrixWorld);const De=H.distanceTo(K),Le=ge.projectionMatrix.elements,ut=xe.projectionMatrix.elements,Ke=Le[14]/(Le[10]-1),ft=Le[14]/(Le[10]+1),zt=(Le[9]+1)/Le[5],nt=(Le[9]-1)/Le[5],k=(Le[8]-1)/Le[0],on=(ut[8]+1)/ut[0],pt=Ke*k,it=Ke*on,Ye=De/(-k+on),Ut=Ye*-k;if(ge.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ut),ee.translateZ(Ye),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Le[10]===-1)ee.projectionMatrix.copy(ge.projectionMatrix),ee.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const he=Ke+Ye,C=ft+Ye,T=pt-Ut,Y=it+(De-Ut),pe=zt*ft/C*he,Ee=nt*ft/C*he;ee.projectionMatrix.makePerspective(T,Y,pe,Ee,he,C),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Te(ee,ge){ge===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ge.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let ge=ee.near,xe=ee.far;U.texture!==null&&(U.depthNear>0&&(ge=U.depthNear),U.depthFar>0&&(xe=U.depthFar)),R.near=q.near=G.near=ge,R.far=q.far=G.far=xe,(j!==R.near||ae!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),j=R.near,ae=R.far),G.layers.mask=ee.layers.mask|2,q.layers.mask=ee.layers.mask|4,R.layers.mask=G.layers.mask|q.layers.mask;const De=ee.parent,Le=R.cameras;Te(R,De);for(let ut=0;ut<Le.length;ut++)Te(Le[ut],De);Le.length===2?Z(R,G,q):R.projectionMatrix.copy(G.projectionMatrix),P(ee,R,De)};function P(ee,ge,xe){xe===null?ee.matrix.copy(ge.matrixWorld):(ee.matrix.copy(xe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ge.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ge.projectionMatrix),ee.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Pd*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(ee){p=ee,y!==null&&(y.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return U.texture!==null},this.getDepthSensingMesh=function(){return U.getMesh(R)};let ne=null;function Se(ee,ge){if(_=ge.getViewerPose(m||h),b=ge,_!==null){const xe=_.views;S!==null&&(e.setRenderTargetFramebuffer(z,S.framebuffer),e.setRenderTarget(z));let De=!1;xe.length!==R.cameras.length&&(R.cameras.length=0,De=!0);for(let Ke=0;Ke<xe.length;Ke++){const ft=xe[Ke];let zt=null;if(S!==null)zt=S.getViewport(ft);else{const k=v.getViewSubImage(y,ft);zt=k.viewport,Ke===0&&(e.setRenderTargetTextures(z,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(z))}let nt=L[Ke];nt===void 0&&(nt=new Ki,nt.layers.enable(Ke),nt.viewport=new dn,L[Ke]=nt),nt.matrix.fromArray(ft.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(ft.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(zt.x,zt.y,zt.width,zt.height),Ke===0&&(R.matrix.copy(nt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),De===!0&&R.cameras.push(nt)}const Le=l.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Ke=v.getDepthInformation(xe[0]);Ke&&Ke.isValid&&Ke.texture&&U.init(e,Ke,l.renderState)}}for(let xe=0;xe<N.length;xe++){const De=w[xe],Le=N[xe];De!==null&&Le!==void 0&&Le.update(De,ge,m||h)}ne&&ne(ee,ge),ge.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ge}),b=null}const Ae=new bv;Ae.setAnimationLoop(Se),this.setAnimationLoop=function(ee){ne=ee},this.dispose=function(){}}}const Zs=new ma,QA=new an;function JA(r,e){function i(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function s(x,g){g.color.getRGB(x.fogColor.value,vv(r)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function l(x,g,z,N,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(x,g):g.isMeshToonMaterial?(c(x,g),v(x,g)):g.isMeshPhongMaterial?(c(x,g),_(x,g)):g.isMeshStandardMaterial?(c(x,g),y(x,g),g.isMeshPhysicalMaterial&&S(x,g,w)):g.isMeshMatcapMaterial?(c(x,g),b(x,g)):g.isMeshDepthMaterial?c(x,g):g.isMeshDistanceMaterial?(c(x,g),U(x,g)):g.isMeshNormalMaterial?c(x,g):g.isLineBasicMaterial?(h(x,g),g.isLineDashedMaterial&&d(x,g)):g.isPointsMaterial?p(x,g,z,N):g.isSpriteMaterial?m(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,i(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,i(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===ui&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,i(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===ui&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,i(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,i(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const z=e.get(g),N=z.envMap,w=z.envMapRotation;N&&(x.envMap.value=N,Zs.copy(w),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),x.envMapRotation.value.setFromMatrix4(QA.makeRotationFromEuler(Zs)),x.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,x.aoMapTransform))}function h(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,i(g.map,x.mapTransform))}function d(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function p(x,g,z,N){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*z,x.scale.value=N*.5,g.map&&(x.map.value=g.map,i(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function m(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,i(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function _(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function v(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function y(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function S(x,g,z){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ui&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=z.texture,x.transmissionSamplerSize.value.set(z.width,z.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,g){g.matcap&&(x.matcap.value=g.matcap)}function U(x,g){const z=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(z.matrixWorld),x.nearDistance.value=z.shadow.camera.near,x.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function $A(r,e,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(z,N){const w=N.program;s.uniformBlockBinding(z,w)}function m(z,N){let w=l[z.id];w===void 0&&(b(z),w=_(z),l[z.id]=w,z.addEventListener("dispose",x));const F=N.program;s.updateUBOMapping(z,F);const B=e.render.frame;c[z.id]!==B&&(y(z),c[z.id]=B)}function _(z){const N=v();z.__bindingPointIndex=N;const w=r.createBuffer(),F=z.__size,B=z.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,F,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,w),w}function v(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(z){const N=l[z.id],w=z.uniforms,F=z.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let B=0,G=w.length;B<G;B++){const q=Array.isArray(w[B])?w[B]:[w[B]];for(let L=0,R=q.length;L<R;L++){const j=q[L];if(S(j,B,L,F)===!0){const ae=j.__offset,re=Array.isArray(j.value)?j.value:[j.value];let fe=0;for(let me=0;me<re.length;me++){const H=re[me],K=U(H);typeof H=="number"||typeof H=="boolean"?(j.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,ae+fe,j.__data)):H.isMatrix3?(j.__data[0]=H.elements[0],j.__data[1]=H.elements[1],j.__data[2]=H.elements[2],j.__data[3]=0,j.__data[4]=H.elements[3],j.__data[5]=H.elements[4],j.__data[6]=H.elements[5],j.__data[7]=0,j.__data[8]=H.elements[6],j.__data[9]=H.elements[7],j.__data[10]=H.elements[8],j.__data[11]=0):(H.toArray(j.__data,fe),fe+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ae,j.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(z,N,w,F){const B=z.value,G=N+"_"+w;if(F[G]===void 0)return typeof B=="number"||typeof B=="boolean"?F[G]=B:F[G]=B.clone(),!0;{const q=F[G];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return F[G]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function b(z){const N=z.uniforms;let w=0;const F=16;for(let G=0,q=N.length;G<q;G++){const L=Array.isArray(N[G])?N[G]:[N[G]];for(let R=0,j=L.length;R<j;R++){const ae=L[R],re=Array.isArray(ae.value)?ae.value:[ae.value];for(let fe=0,me=re.length;fe<me;fe++){const H=re[fe],K=U(H),Z=w%F,Te=Z%K.boundary,P=Z+Te;w+=Te,P!==0&&F-P<K.storage&&(w+=F-P),ae.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=w,w+=K.storage}}}const B=w%F;return B>0&&(w+=F-B),z.__size=w,z.__cache={},this}function U(z){const N={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(N.boundary=4,N.storage=4):z.isVector2?(N.boundary=8,N.storage=8):z.isVector3||z.isColor?(N.boundary=16,N.storage=12):z.isVector4?(N.boundary=16,N.storage=16):z.isMatrix3?(N.boundary=48,N.storage=48):z.isMatrix4?(N.boundary=64,N.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),N}function x(z){const N=z.target;N.removeEventListener("dispose",x);const w=h.indexOf(N.__bindingPointIndex);h.splice(w,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function g(){for(const z in l)r.deleteBuffer(l[z]);h=[],l={},c={}}return{bind:p,update:m,dispose:g}}class e2{constructor(e={}){const{canvas:i=CM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const b=new Uint32Array(4),U=new Int32Array(4);let x=null,g=null;const z=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let F=!1;this._outputColorSpace=ti;let B=0,G=0,q=null,L=-1,R=null;const j=new dn,ae=new dn;let re=null;const fe=new Ct(0);let me=0,H=i.width,K=i.height,Z=1,Te=null,P=null;const ne=new dn(0,0,H,K),Se=new dn(0,0,H,K);let Ae=!1;const ee=new Kd;let ge=!1,xe=!1;const De=new an,Le=new an,ut=new te,Ke=new dn,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function nt(){return q===null?Z:1}let k=s;function on(D,Q){return i.getContext(D,Q)}try{const D={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fd}`),i.addEventListener("webglcontextlost",ve,!1),i.addEventListener("webglcontextrestored",Ge,!1),i.addEventListener("webglcontextcreationerror",Be,!1),k===null){const Q="webgl2";if(k=on(Q,D),k===null)throw on(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let pt,it,Ye,Ut,he,C,T,Y,pe,Ee,I,Ue,Ce,je,Qe,we,He,Je,qe,Ve,ot,at,wt,X;function Oe(){pt=new uT(k),pt.init(),at=new qA(k,pt),it=new iT(k,pt,e,at),Ye=new jA(k,pt),it.reverseDepthBuffer&&y&&Ye.buffers.depth.setReversed(!0),Ut=new dT(k),he=new UA,C=new XA(k,pt,Ye,he,it,at,Ut),T=new sT(w),Y=new cT(w),pe=new xE(k),wt=new tT(k,pe),Ee=new fT(k,pe,Ut,wt),I=new mT(k,Ee,pe,Ut),qe=new pT(k,it,C),we=new aT(he),Ue=new DA(w,T,Y,pt,it,wt,we),Ce=new JA(w,he),je=new LA,Qe=new FA(pt),Je=new eT(w,T,Y,Ye,I,S,p),He=new VA(w,I,it),X=new $A(k,Ut,it,Ye),Ve=new nT(k,pt,Ut),ot=new hT(k,pt,Ut),Ut.programs=Ue.programs,w.capabilities=it,w.extensions=pt,w.properties=he,w.renderLists=je,w.shadowMap=He,w.state=Ye,w.info=Ut}Oe();const de=new KA(w,k);this.xr=de,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const D=pt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=pt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(D){D!==void 0&&(Z=D,this.setSize(H,K,!1))},this.getSize=function(D){return D.set(H,K)},this.setSize=function(D,Q,le=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=D,K=Q,i.width=Math.floor(D*Z),i.height=Math.floor(Q*Z),le===!0&&(i.style.width=D+"px",i.style.height=Q+"px"),this.setViewport(0,0,D,Q)},this.getDrawingBufferSize=function(D){return D.set(H*Z,K*Z).floor()},this.setDrawingBufferSize=function(D,Q,le){H=D,K=Q,Z=le,i.width=Math.floor(D*le),i.height=Math.floor(Q*le),this.setViewport(0,0,D,Q)},this.getCurrentViewport=function(D){return D.copy(j)},this.getViewport=function(D){return D.copy(ne)},this.setViewport=function(D,Q,le,ce){D.isVector4?ne.set(D.x,D.y,D.z,D.w):ne.set(D,Q,le,ce),Ye.viewport(j.copy(ne).multiplyScalar(Z).round())},this.getScissor=function(D){return D.copy(Se)},this.setScissor=function(D,Q,le,ce){D.isVector4?Se.set(D.x,D.y,D.z,D.w):Se.set(D,Q,le,ce),Ye.scissor(ae.copy(Se).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(D){Ye.setScissorTest(Ae=D)},this.setOpaqueSort=function(D){Te=D},this.setTransparentSort=function(D){P=D},this.getClearColor=function(D){return D.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(D=!0,Q=!0,le=!0){let ce=0;if(D){let J=!1;if(q!==null){const be=q.texture.format;J=be===qd||be===Xd||be===jd}if(J){const be=q.texture.type,ze=be===pa||be===tr||be===ml||be===gl||be===Gd||be===Vd,Pe=Je.getClearColor(),Xe=Je.getClearAlpha(),Ze=Pe.r,tt=Pe.g,Ie=Pe.b;ze?(b[0]=Ze,b[1]=tt,b[2]=Ie,b[3]=Xe,k.clearBufferuiv(k.COLOR,0,b)):(U[0]=Ze,U[1]=tt,U[2]=Ie,U[3]=Xe,k.clearBufferiv(k.COLOR,0,U))}else ce|=k.COLOR_BUFFER_BIT}Q&&(ce|=k.DEPTH_BUFFER_BIT),le&&(ce|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ve,!1),i.removeEventListener("webglcontextrestored",Ge,!1),i.removeEventListener("webglcontextcreationerror",Be,!1),Je.dispose(),je.dispose(),Qe.dispose(),he.dispose(),T.dispose(),Y.dispose(),I.dispose(),wt.dispose(),X.dispose(),Ue.dispose(),de.dispose(),de.removeEventListener("sessionstart",mn),de.removeEventListener("sessionend",xn),Xn.stop()};function ve(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Ge(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const D=Ut.autoReset,Q=He.enabled,le=He.autoUpdate,ce=He.needsUpdate,J=He.type;Oe(),Ut.autoReset=D,He.enabled=Q,He.autoUpdate=le,He.needsUpdate=ce,He.type=J}function Be(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function lt(D){const Q=D.target;Q.removeEventListener("dispose",lt),Ot(Q)}function Ot(D){$t(D),he.remove(D)}function $t(D){const Q=he.get(D).programs;Q!==void 0&&(Q.forEach(function(le){Ue.releaseProgram(le)}),D.isShaderMaterial&&Ue.releaseShaderCache(D))}this.renderBufferDirect=function(D,Q,le,ce,J,be){Q===null&&(Q=ft);const ze=J.isMesh&&J.matrixWorld.determinant()<0,Pe=va(D,Q,le,ce,J);Ye.setMaterial(ce,ze);let Xe=le.index,Ze=1;if(ce.wireframe===!0){if(Xe=Ee.getWireframeAttribute(le),Xe===void 0)return;Ze=2}const tt=le.drawRange,Ie=le.attributes.position;let mt=tt.start*Ze,bt=(tt.start+tt.count)*Ze;be!==null&&(mt=Math.max(mt,be.start*Ze),bt=Math.min(bt,(be.start+be.count)*Ze)),Xe!==null?(mt=Math.max(mt,0),bt=Math.min(bt,Xe.count)):Ie!=null&&(mt=Math.max(mt,0),bt=Math.min(bt,Ie.count));const sn=bt-mt;if(sn<0||sn===1/0)return;wt.setup(J,ce,Pe,le,Xe);let vt,St=Ve;if(Xe!==null&&(vt=pe.get(Xe),St=ot,St.setIndex(vt)),J.isMesh)ce.wireframe===!0?(Ye.setLineWidth(ce.wireframeLinewidth*nt()),St.setMode(k.LINES)):St.setMode(k.TRIANGLES);else if(J.isLine){let $e=ce.linewidth;$e===void 0&&($e=1),Ye.setLineWidth($e*nt()),J.isLineSegments?St.setMode(k.LINES):J.isLineLoop?St.setMode(k.LINE_LOOP):St.setMode(k.LINE_STRIP)}else J.isPoints?St.setMode(k.POINTS):J.isSprite&&St.setMode(k.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)su("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))St.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const $e=J._multiDrawStarts,en=J._multiDrawCounts,Dt=J._multiDrawCount,Tn=Xe?pe.get(Xe).bytesPerElement:1,mi=he.get(ce).currentProgram.getUniforms();for(let Vt=0;Vt<Dt;Vt++)mi.setValue(k,"_gl_DrawID",Vt),St.render($e[Vt]/Tn,en[Vt])}else if(J.isInstancedMesh)St.renderInstances(mt,sn,J.count);else if(le.isInstancedBufferGeometry){const $e=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,en=Math.min(le.instanceCount,$e);St.renderInstances(mt,sn,en)}else St.render(mt,sn)};function Nt(D,Q,le){D.transparent===!0&&D.side===ua&&D.forceSinglePass===!1?(D.side=ui,D.needsUpdate=!0,hi(D,Q,le),D.side=ka,D.needsUpdate=!0,hi(D,Q,le),D.side=ua):hi(D,Q,le)}this.compile=function(D,Q,le=null){le===null&&(le=D),g=Qe.get(le),g.init(Q),N.push(g),le.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),D!==le&&D.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),g.setupLights();const ce=new Set;return D.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const be=J.material;if(be)if(Array.isArray(be))for(let ze=0;ze<be.length;ze++){const Pe=be[ze];Nt(Pe,le,J),ce.add(Pe)}else Nt(be,le,J),ce.add(be)}),g=N.pop(),ce},this.compileAsync=function(D,Q,le=null){const ce=this.compile(D,Q,le);return new Promise(J=>{function be(){if(ce.forEach(function(ze){he.get(ze).currentProgram.isReady()&&ce.delete(ze)}),ce.size===0){J(D);return}setTimeout(be,10)}pt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let jn=null;function pn(D){jn&&jn(D)}function mn(){Xn.stop()}function xn(){Xn.start()}const Xn=new bv;Xn.setAnimationLoop(pn),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(D){jn=D,de.setAnimationLoop(D),D===null?Xn.stop():Xn.start()},de.addEventListener("sessionstart",mn),de.addEventListener("sessionend",xn),this.render=function(D,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(Q),Q=de.getCamera()),D.isScene===!0&&D.onBeforeRender(w,D,Q,q),g=Qe.get(D,N.length),g.init(Q),N.push(g),Le.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ee.setFromProjectionMatrix(Le),xe=this.localClippingEnabled,ge=we.init(this.clippingPlanes,xe),x=je.get(D,z.length),x.init(),z.push(x),de.enabled===!0&&de.isPresenting===!0){const be=w.xr.getDepthSensingMesh();be!==null&&Ri(be,Q,-1/0,w.sortObjects)}Ri(D,Q,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(Te,P),zt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,zt&&Je.addToRenderList(x,D),this.info.render.frame++,ge===!0&&we.beginShadows();const le=g.state.shadowsArray;He.render(le,D,Q),ge===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=x.opaque,J=x.transmissive;if(g.setupLights(),Q.isArrayCamera){const be=Q.cameras;if(J.length>0)for(let ze=0,Pe=be.length;ze<Pe;ze++){const Xe=be[ze];_a(ce,J,D,Xe)}zt&&Je.render(D);for(let ze=0,Pe=be.length;ze<Pe;ze++){const Xe=be[ze];ga(x,D,Xe,Xe.viewport)}}else J.length>0&&_a(ce,J,D,Q),zt&&Je.render(D),ga(x,D,Q);q!==null&&G===0&&(C.updateMultisampleRenderTarget(q),C.updateRenderTargetMipmap(q)),D.isScene===!0&&D.onAfterRender(w,D,Q),wt.resetDefaultState(),L=-1,R=null,N.pop(),N.length>0?(g=N[N.length-1],ge===!0&&we.setGlobalState(w.clippingPlanes,g.state.camera)):g=null,z.pop(),z.length>0?x=z[z.length-1]:x=null};function Ri(D,Q,le,ce){if(D.visible===!1)return;if(D.layers.test(Q.layers)){if(D.isGroup)le=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Q);else if(D.isLight)g.pushLight(D),D.castShadow&&g.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ee.intersectsSprite(D)){ce&&Ke.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Le);const ze=I.update(D),Pe=D.material;Pe.visible&&x.push(D,ze,Pe,le,Ke.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ee.intersectsObject(D))){const ze=I.update(D),Pe=D.material;if(ce&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ke.copy(D.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Ke.copy(ze.boundingSphere.center)),Ke.applyMatrix4(D.matrixWorld).applyMatrix4(Le)),Array.isArray(Pe)){const Xe=ze.groups;for(let Ze=0,tt=Xe.length;Ze<tt;Ze++){const Ie=Xe[Ze],mt=Pe[Ie.materialIndex];mt&&mt.visible&&x.push(D,ze,mt,le,Ke.z,Ie)}}else Pe.visible&&x.push(D,ze,Pe,le,Ke.z,null)}}const be=D.children;for(let ze=0,Pe=be.length;ze<Pe;ze++)Ri(be[ze],Q,le,ce)}function ga(D,Q,le,ce){const J=D.opaque,be=D.transmissive,ze=D.transparent;g.setupLightsView(le),ge===!0&&we.setGlobalState(w.clippingPlanes,le),ce&&Ye.viewport(j.copy(ce)),J.length>0&&fi(J,Q,le),be.length>0&&fi(be,Q,le),ze.length>0&&fi(ze,Q,le),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function _a(D,Q,le,ce){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ce.id]===void 0&&(g.state.transmissionRenderTarget[ce.id]=new nr(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?yl:pa,minFilter:er,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace}));const be=g.state.transmissionRenderTarget[ce.id],ze=ce.viewport||j;be.setSize(ze.z*w.transmissionResolutionScale,ze.w*w.transmissionResolutionScale);const Pe=w.getRenderTarget();w.setRenderTarget(be),w.getClearColor(fe),me=w.getClearAlpha(),me<1&&w.setClearColor(16777215,.5),w.clear(),zt&&Je.render(le);const Xe=w.toneMapping;w.toneMapping=bs;const Ze=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),g.setupLightsView(ce),ge===!0&&we.setGlobalState(w.clippingPlanes,ce),fi(D,le,ce),C.updateMultisampleRenderTarget(be),C.updateRenderTargetMipmap(be),pt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ie=0,mt=Q.length;Ie<mt;Ie++){const bt=Q[Ie],sn=bt.object,vt=bt.geometry,St=bt.material,$e=bt.group;if(St.side===ua&&sn.layers.test(ce.layers)){const en=St.side;St.side=ui,St.needsUpdate=!0,ta(sn,le,ce,vt,St,$e),St.side=en,St.needsUpdate=!0,tt=!0}}tt===!0&&(C.updateMultisampleRenderTarget(be),C.updateRenderTargetMipmap(be))}w.setRenderTarget(Pe),w.setClearColor(fe,me),Ze!==void 0&&(ce.viewport=Ze),w.toneMapping=Xe}function fi(D,Q,le){const ce=Q.isScene===!0?Q.overrideMaterial:null;for(let J=0,be=D.length;J<be;J++){const ze=D[J],Pe=ze.object,Xe=ze.geometry,Ze=ze.group;let tt=ze.material;tt.allowOverride===!0&&ce!==null&&(tt=ce),Pe.layers.test(le.layers)&&ta(Pe,Q,le,Xe,tt,Ze)}}function ta(D,Q,le,ce,J,be){D.onBeforeRender(w,Q,le,ce,J,be),D.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),J.onBeforeRender(w,Q,le,ce,D,be),J.transparent===!0&&J.side===ua&&J.forceSinglePass===!1?(J.side=ui,J.needsUpdate=!0,w.renderBufferDirect(le,Q,ce,J,D,be),J.side=ka,J.needsUpdate=!0,w.renderBufferDirect(le,Q,ce,J,D,be),J.side=ua):w.renderBufferDirect(le,Q,ce,J,D,be),D.onAfterRender(w,Q,le,ce,J,be)}function hi(D,Q,le){Q.isScene!==!0&&(Q=ft);const ce=he.get(D),J=g.state.lights,be=g.state.shadowsArray,ze=J.state.version,Pe=Ue.getParameters(D,J.state,be,Q,le),Xe=Ue.getProgramCacheKey(Pe);let Ze=ce.programs;ce.environment=D.isMeshStandardMaterial?Q.environment:null,ce.fog=Q.fog,ce.envMap=(D.isMeshStandardMaterial?Y:T).get(D.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&D.envMap===null?Q.environmentRotation:D.envMapRotation,Ze===void 0&&(D.addEventListener("dispose",lt),Ze=new Map,ce.programs=Ze);let tt=Ze.get(Xe);if(tt!==void 0){if(ce.currentProgram===tt&&ce.lightsStateVersion===ze)return ni(D,Pe),tt}else Pe.uniforms=Ue.getUniforms(D),D.onBeforeCompile(Pe,w),tt=Ue.acquireProgram(Pe,Xe),Ze.set(Xe,tt),ce.uniforms=Pe.uniforms;const Ie=ce.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ie.clippingPlanes=we.uniform),ni(D,Pe),ce.needsLights=Gt(D),ce.lightsStateVersion=ze,ce.needsLights&&(Ie.ambientLightColor.value=J.state.ambient,Ie.lightProbe.value=J.state.probe,Ie.directionalLights.value=J.state.directional,Ie.directionalLightShadows.value=J.state.directionalShadow,Ie.spotLights.value=J.state.spot,Ie.spotLightShadows.value=J.state.spotShadow,Ie.rectAreaLights.value=J.state.rectArea,Ie.ltc_1.value=J.state.rectAreaLTC1,Ie.ltc_2.value=J.state.rectAreaLTC2,Ie.pointLights.value=J.state.point,Ie.pointLightShadows.value=J.state.pointShadow,Ie.hemisphereLights.value=J.state.hemi,Ie.directionalShadowMap.value=J.state.directionalShadowMap,Ie.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ie.spotShadowMap.value=J.state.spotShadowMap,Ie.spotLightMatrix.value=J.state.spotLightMatrix,Ie.spotLightMap.value=J.state.spotLightMap,Ie.pointShadowMap.value=J.state.pointShadowMap,Ie.pointShadowMatrix.value=J.state.pointShadowMatrix),ce.currentProgram=tt,ce.uniformsList=null,tt}function di(D){if(D.uniformsList===null){const Q=D.currentProgram.getUniforms();D.uniformsList=ru.seqWithValue(Q.seq,D.uniforms)}return D.uniformsList}function ni(D,Q){const le=he.get(D);le.outputColorSpace=Q.outputColorSpace,le.batching=Q.batching,le.batchingColor=Q.batchingColor,le.instancing=Q.instancing,le.instancingColor=Q.instancingColor,le.instancingMorph=Q.instancingMorph,le.skinning=Q.skinning,le.morphTargets=Q.morphTargets,le.morphNormals=Q.morphNormals,le.morphColors=Q.morphColors,le.morphTargetsCount=Q.morphTargetsCount,le.numClippingPlanes=Q.numClippingPlanes,le.numIntersection=Q.numClipIntersection,le.vertexAlphas=Q.vertexAlphas,le.vertexTangents=Q.vertexTangents,le.toneMapping=Q.toneMapping}function va(D,Q,le,ce,J){Q.isScene!==!0&&(Q=ft),C.resetTextureUnits();const be=Q.fog,ze=ce.isMeshStandardMaterial?Q.environment:null,Pe=q===null?w.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:lo,Xe=(ce.isMeshStandardMaterial?Y:T).get(ce.envMap||ze),Ze=ce.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,tt=!!le.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Ie=!!le.morphAttributes.position,mt=!!le.morphAttributes.normal,bt=!!le.morphAttributes.color;let sn=bs;ce.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(sn=w.toneMapping);const vt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,St=vt!==void 0?vt.length:0,$e=he.get(ce),en=g.state.lights;if(ge===!0&&(xe===!0||D!==R)){const gn=D===R&&ce.id===L;we.setState(ce,D,gn)}let Dt=!1;ce.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==en.state.version||$e.outputColorSpace!==Pe||J.isBatchedMesh&&$e.batching===!1||!J.isBatchedMesh&&$e.batching===!0||J.isBatchedMesh&&$e.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&$e.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&$e.instancing===!1||!J.isInstancedMesh&&$e.instancing===!0||J.isSkinnedMesh&&$e.skinning===!1||!J.isSkinnedMesh&&$e.skinning===!0||J.isInstancedMesh&&$e.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&$e.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&$e.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&$e.instancingMorph===!1&&J.morphTexture!==null||$e.envMap!==Xe||ce.fog===!0&&$e.fog!==be||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==we.numPlanes||$e.numIntersection!==we.numIntersection)||$e.vertexAlphas!==Ze||$e.vertexTangents!==tt||$e.morphTargets!==Ie||$e.morphNormals!==mt||$e.morphColors!==bt||$e.toneMapping!==sn||$e.morphTargetsCount!==St)&&(Dt=!0):(Dt=!0,$e.__version=ce.version);let Tn=$e.currentProgram;Dt===!0&&(Tn=hi(ce,Q,J));let mi=!1,Vt=!1,An=!1;const Lt=Tn.getUniforms(),Rn=$e.uniforms;if(Ye.useProgram(Tn.program)&&(mi=!0,Vt=!0,An=!0),ce.id!==L&&(L=ce.id,Vt=!0),mi||R!==D){Ye.buffers.depth.getReversed()?(De.copy(D.projectionMatrix),DM(De),UM(De),Lt.setValue(k,"projectionMatrix",De)):Lt.setValue(k,"projectionMatrix",D.projectionMatrix),Lt.setValue(k,"viewMatrix",D.matrixWorldInverse);const yn=Lt.map.cameraPosition;yn!==void 0&&yn.setValue(k,ut.setFromMatrixPosition(D.matrixWorld)),it.logarithmicDepthBuffer&&Lt.setValue(k,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Lt.setValue(k,"isOrthographic",D.isOrthographicCamera===!0),R!==D&&(R=D,Vt=!0,An=!0)}if(J.isSkinnedMesh){Lt.setOptional(k,J,"bindMatrix"),Lt.setOptional(k,J,"bindMatrixInverse");const gn=J.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Lt.setValue(k,"boneTexture",gn.boneTexture,C))}J.isBatchedMesh&&(Lt.setOptional(k,J,"batchingTexture"),Lt.setValue(k,"batchingTexture",J._matricesTexture,C),Lt.setOptional(k,J,"batchingIdTexture"),Lt.setValue(k,"batchingIdTexture",J._indirectTexture,C),Lt.setOptional(k,J,"batchingColorTexture"),J._colorsTexture!==null&&Lt.setValue(k,"batchingColorTexture",J._colorsTexture,C));const cn=le.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&qe.update(J,le,Tn),(Vt||$e.receiveShadow!==J.receiveShadow)&&($e.receiveShadow=J.receiveShadow,Lt.setValue(k,"receiveShadow",J.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(Rn.envMap.value=Xe,Rn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&Q.environment!==null&&(Rn.envMapIntensity.value=Q.environmentIntensity),Vt&&(Lt.setValue(k,"toneMappingExposure",w.toneMappingExposure),$e.needsLights&&Hi(Rn,An),be&&ce.fog===!0&&Ce.refreshFogUniforms(Rn,be),Ce.refreshMaterialUniforms(Rn,ce,Z,K,g.state.transmissionRenderTarget[D.id]),ru.upload(k,di($e),Rn,C)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(ru.upload(k,di($e),Rn,C),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Lt.setValue(k,"center",J.center),Lt.setValue(k,"modelViewMatrix",J.modelViewMatrix),Lt.setValue(k,"normalMatrix",J.normalMatrix),Lt.setValue(k,"modelMatrix",J.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const gn=ce.uniformsGroups;for(let yn=0,Jn=gn.length;yn<Jn;yn++){const Ci=gn[yn];X.update(Ci,Tn),X.bind(Ci,Tn)}}return Tn}function Hi(D,Q){D.ambientLightColor.needsUpdate=Q,D.lightProbe.needsUpdate=Q,D.directionalLights.needsUpdate=Q,D.directionalLightShadows.needsUpdate=Q,D.pointLights.needsUpdate=Q,D.pointLightShadows.needsUpdate=Q,D.spotLights.needsUpdate=Q,D.spotLightShadows.needsUpdate=Q,D.rectAreaLights.needsUpdate=Q,D.hemisphereLights.needsUpdate=Q}function Gt(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(D,Q,le){const ce=he.get(D);ce.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),he.get(D.texture).__webglTexture=Q,he.get(D.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:le,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Q){const le=he.get(D);le.__webglFramebuffer=Q,le.__useDefaultFramebuffer=Q===void 0};const As=k.createFramebuffer();this.setRenderTarget=function(D,Q=0,le=0){q=D,B=Q,G=le;let ce=!0,J=null,be=!1,ze=!1;if(D){const Xe=he.get(D);if(Xe.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(k.FRAMEBUFFER,null),ce=!1;else if(Xe.__webglFramebuffer===void 0)C.setupRenderTarget(D);else if(Xe.__hasExternalTextures)C.rebindTextures(D,he.get(D.texture).__webglTexture,he.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Ie=D.depthTexture;if(Xe.__boundDepthTexture!==Ie){if(Ie!==null&&he.has(Ie)&&(D.width!==Ie.image.width||D.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(D)}}const Ze=D.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(ze=!0);const tt=he.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(tt[Q])?J=tt[Q][le]:J=tt[Q],be=!0):D.samples>0&&C.useMultisampledRTT(D)===!1?J=he.get(D).__webglMultisampledFramebuffer:Array.isArray(tt)?J=tt[le]:J=tt,j.copy(D.viewport),ae.copy(D.scissor),re=D.scissorTest}else j.copy(ne).multiplyScalar(Z).floor(),ae.copy(Se).multiplyScalar(Z).floor(),re=Ae;if(le!==0&&(J=As),Ye.bindFramebuffer(k.FRAMEBUFFER,J)&&ce&&Ye.drawBuffers(D,J),Ye.viewport(j),Ye.scissor(ae),Ye.setScissorTest(re),be){const Xe=he.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Xe.__webglTexture,le)}else if(ze){const Xe=he.get(D.texture),Ze=Q;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xe.__webglTexture,le,Ze)}else if(D!==null&&le!==0){const Xe=he.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Xe.__webglTexture,le)}L=-1},this.readRenderTargetPixels=function(D,Q,le,ce,J,be,ze){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=he.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ze!==void 0&&(Pe=Pe[ze]),Pe){Ye.bindFramebuffer(k.FRAMEBUFFER,Pe);try{const Xe=D.texture,Ze=Xe.format,tt=Xe.type;if(!it.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=D.width-ce&&le>=0&&le<=D.height-J&&k.readPixels(Q,le,ce,J,at.convert(Ze),at.convert(tt),be)}finally{const Xe=q!==null?he.get(q).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(D,Q,le,ce,J,be,ze){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=he.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ze!==void 0&&(Pe=Pe[ze]),Pe)if(Q>=0&&Q<=D.width-ce&&le>=0&&le<=D.height-J){Ye.bindFramebuffer(k.FRAMEBUFFER,Pe);const Xe=D.texture,Ze=Xe.format,tt=Xe.type;if(!it.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ie),k.bufferData(k.PIXEL_PACK_BUFFER,be.byteLength,k.STREAM_READ),k.readPixels(Q,le,ce,J,at.convert(Ze),at.convert(tt),0);const mt=q!==null?he.get(q).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,mt);const bt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await wM(k,bt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ie),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,be),k.deleteBuffer(Ie),k.deleteSync(bt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Q=null,le=0){const ce=Math.pow(2,-le),J=Math.floor(D.image.width*ce),be=Math.floor(D.image.height*ce),ze=Q!==null?Q.x:0,Pe=Q!==null?Q.y:0;C.setTexture2D(D,0),k.copyTexSubImage2D(k.TEXTURE_2D,le,0,0,ze,Pe,J,be),Ye.unbindTexture()};const or=k.createFramebuffer(),pi=k.createFramebuffer();this.copyTextureToTexture=function(D,Q,le=null,ce=null,J=0,be=null){be===null&&(J!==0?(su("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=J,J=0):be=0);let ze,Pe,Xe,Ze,tt,Ie,mt,bt,sn;const vt=D.isCompressedTexture?D.mipmaps[be]:D.image;if(le!==null)ze=le.max.x-le.min.x,Pe=le.max.y-le.min.y,Xe=le.isBox3?le.max.z-le.min.z:1,Ze=le.min.x,tt=le.min.y,Ie=le.isBox3?le.min.z:0;else{const cn=Math.pow(2,-J);ze=Math.floor(vt.width*cn),Pe=Math.floor(vt.height*cn),D.isDataArrayTexture?Xe=vt.depth:D.isData3DTexture?Xe=Math.floor(vt.depth*cn):Xe=1,Ze=0,tt=0,Ie=0}ce!==null?(mt=ce.x,bt=ce.y,sn=ce.z):(mt=0,bt=0,sn=0);const St=at.convert(Q.format),$e=at.convert(Q.type);let en;Q.isData3DTexture?(C.setTexture3D(Q,0),en=k.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(C.setTexture2DArray(Q,0),en=k.TEXTURE_2D_ARRAY):(C.setTexture2D(Q,0),en=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Q.unpackAlignment);const Dt=k.getParameter(k.UNPACK_ROW_LENGTH),Tn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),mi=k.getParameter(k.UNPACK_SKIP_PIXELS),Vt=k.getParameter(k.UNPACK_SKIP_ROWS),An=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,vt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ze),k.pixelStorei(k.UNPACK_SKIP_ROWS,tt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ie);const Lt=D.isDataArrayTexture||D.isData3DTexture,Rn=Q.isDataArrayTexture||Q.isData3DTexture;if(D.isDepthTexture){const cn=he.get(D),gn=he.get(Q),yn=he.get(cn.__renderTarget),Jn=he.get(gn.__renderTarget);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,yn.__webglFramebuffer),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Ci=0;Ci<Xe;Ci++)Lt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,he.get(D).__webglTexture,J,Ie+Ci),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,he.get(Q).__webglTexture,be,sn+Ci)),k.blitFramebuffer(Ze,tt,ze,Pe,mt,bt,ze,Pe,k.DEPTH_BUFFER_BIT,k.NEAREST);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(J!==0||D.isRenderTargetTexture||he.has(D)){const cn=he.get(D),gn=he.get(Q);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,or),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,pi);for(let yn=0;yn<Xe;yn++)Lt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,cn.__webglTexture,J,Ie+yn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,cn.__webglTexture,J),Rn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,gn.__webglTexture,be,sn+yn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,gn.__webglTexture,be),J!==0?k.blitFramebuffer(Ze,tt,ze,Pe,mt,bt,ze,Pe,k.COLOR_BUFFER_BIT,k.NEAREST):Rn?k.copyTexSubImage3D(en,be,mt,bt,sn+yn,Ze,tt,ze,Pe):k.copyTexSubImage2D(en,be,mt,bt,Ze,tt,ze,Pe);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Rn?D.isDataTexture||D.isData3DTexture?k.texSubImage3D(en,be,mt,bt,sn,ze,Pe,Xe,St,$e,vt.data):Q.isCompressedArrayTexture?k.compressedTexSubImage3D(en,be,mt,bt,sn,ze,Pe,Xe,St,vt.data):k.texSubImage3D(en,be,mt,bt,sn,ze,Pe,Xe,St,$e,vt):D.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,be,mt,bt,ze,Pe,St,$e,vt.data):D.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,be,mt,bt,vt.width,vt.height,St,vt.data):k.texSubImage2D(k.TEXTURE_2D,be,mt,bt,ze,Pe,St,$e,vt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Dt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Tn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,mi),k.pixelStorei(k.UNPACK_SKIP_ROWS,Vt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,An),be===0&&Q.generateMipmaps&&k.generateMipmap(en),Ye.unbindTexture()},this.copyTextureToTexture3D=function(D,Q,le=null,ce=null,J=0){return su('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,Q,le,ce,J)},this.initRenderTarget=function(D){he.get(D).__webglFramebuffer===void 0&&C.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?C.setTextureCube(D,0):D.isData3DTexture?C.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?C.setTexture2DArray(D,0):C.setTexture2D(D,0),Ye.unbindTexture()},this.resetState=function(){B=0,G=0,q=null,Ye.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ha}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Bt._getUnpackColorSpace()}}const j_={type:"change"},np={type:"start"},wv={type:"end"},Kc=new Yd,X_=new ys,t2=Math.cos(70*RM.DEG2RAD),Nn=new te,li=2*Math.PI,Kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yh=1e-6;class n2 extends _E{constructor(e,i=null){super(e,i),this.state=Kt.NONE,this.target=new te,this.cursor=new te,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ga.ROTATE,MIDDLE:Ga.DOLLY,RIGHT:Ga.PAN},this.touches={ONE:Ms.ROTATE,TWO:Ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new te,this._lastQuaternion=new ir,this._lastTargetPosition=new te,this._quat=new ir().setFromUnitVectors(e.up,new te(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new v_,this._sphericalDelta=new v_,this._scale=1,this._panOffset=new te,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new te,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=a2.bind(this),this._onPointerDown=i2.bind(this),this._onPointerUp=s2.bind(this),this._onContextMenu=h2.bind(this),this._onMouseWheel=l2.bind(this),this._onKeyDown=c2.bind(this),this._onTouchStart=u2.bind(this),this._onTouchMove=f2.bind(this),this._onMouseDown=r2.bind(this),this._onMouseMove=o2.bind(this),this._interceptControlDown=d2.bind(this),this._interceptControlUp=p2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(j_),this.update(),this.state=Kt.NONE}update(e=null){const i=this.object.position;Nn.copy(i).sub(this.target),Nn.applyQuaternion(this._quat),this._spherical.setFromVector3(Nn),this.autoRotate&&this.state===Kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=li:s>Math.PI&&(s-=li),l<-Math.PI?l+=li:l>Math.PI&&(l-=li),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(Nn.setFromSpherical(this._spherical),Nn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Nn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=Nn.length();h=this._clampDistance(d*this._scale);const p=d-h;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const d=new te(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const m=new te(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),h=Nn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Kc.origin.copy(this.object.position),Kc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Kc.direction))<t2?this.object.lookAt(this.target):(X_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Kc.intersectPlane(X_,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Yh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yh||this._lastTargetPosition.distanceToSquared(this.target)>Yh?(this.dispatchEvent(j_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?li/60*this.autoRotateSpeed*e:li/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){Nn.setFromMatrixColumn(i,0),Nn.multiplyScalar(-e),this._panOffset.add(Nn)}_panUp(e,i){this.screenSpacePanning===!0?Nn.setFromMatrixColumn(i,1):(Nn.setFromMatrixColumn(i,0),Nn.crossVectors(this.object.up,Nn)),Nn.multiplyScalar(e),this._panOffset.add(Nn)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Nn.copy(l).sub(this.target);let c=Nn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(li*this._rotateDelta.x/i.clientHeight),this._rotateUp(li*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(li*this._rotateDelta.x/i.clientHeight),this._rotateUp(li*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new dt,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function i2(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function a2(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function s2(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wv),this.state=Kt.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function r2(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ga.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Kt.DOLLY;break;case Ga.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Kt.ROTATE}break;case Ga.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Kt.PAN}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(np)}function o2(r){switch(this.state){case Kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function l2(r){this.enabled===!1||this.enableZoom===!1||this.state!==Kt.NONE||(r.preventDefault(),this.dispatchEvent(np),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(wv))}function c2(r){this.enabled!==!1&&this._handleKeyDown(r)}function u2(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ms.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Kt.TOUCH_ROTATE;break;case Ms.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Kt.TOUCH_PAN;break;default:this.state=Kt.NONE}break;case 2:switch(this.touches.TWO){case Ms.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Kt.TOUCH_DOLLY_PAN;break;case Ms.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Kt.TOUCH_DOLLY_ROTATE;break;default:this.state=Kt.NONE}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(np)}function f2(r){switch(this._trackPointer(r),this.state){case Kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Kt.NONE}}function h2(r){this.enabled!==!1&&r.preventDefault()}function d2(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function p2(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const dl=new te;function Fi(r,e,i,s,l,c){const h=2*Math.PI*l/4,d=Math.max(c-2*l,0),p=Math.PI/4;dl.copy(e),dl[s]=0,dl.normalize();const m=.5*h/(h+d),_=1-dl.angleTo(r)/p;return Math.sign(dl[i])===1?_*m:d/(h+d)+m+m*(1-_)}class m2 extends da{constructor(e=1,i=1,s=1,l=2,c=.1){if(l=l*2+1,c=Math.min(e/2,i/2,s/2,c),super(1,1,1,l,l,l),l===1)return;const h=this.toNonIndexed();this.index=null,this.attributes.position=h.attributes.position,this.attributes.normal=h.attributes.normal,this.attributes.uv=h.attributes.uv;const d=new te,p=new te,m=new te(e,i,s).divideScalar(2).subScalar(c),_=this.attributes.position.array,v=this.attributes.normal.array,y=this.attributes.uv.array,S=_.length/6,b=new te,U=.5/l;for(let x=0,g=0;x<_.length;x+=3,g+=2)switch(d.fromArray(_,x),p.copy(d),p.x-=Math.sign(p.x)*U,p.y-=Math.sign(p.y)*U,p.z-=Math.sign(p.z)*U,p.normalize(),_[x+0]=m.x*Math.sign(d.x)+p.x*c,_[x+1]=m.y*Math.sign(d.y)+p.y*c,_[x+2]=m.z*Math.sign(d.z)+p.z*c,v[x+0]=p.x,v[x+1]=p.y,v[x+2]=p.z,Math.floor(x/S)){case 0:b.set(1,0,0),y[g+0]=Fi(b,p,"z","y",c,s),y[g+1]=1-Fi(b,p,"y","z",c,i);break;case 1:b.set(-1,0,0),y[g+0]=1-Fi(b,p,"z","y",c,s),y[g+1]=1-Fi(b,p,"y","z",c,i);break;case 2:b.set(0,1,0),y[g+0]=1-Fi(b,p,"x","z",c,e),y[g+1]=Fi(b,p,"z","x",c,s);break;case 3:b.set(0,-1,0),y[g+0]=1-Fi(b,p,"x","z",c,e),y[g+1]=1-Fi(b,p,"z","x",c,s);break;case 4:b.set(0,0,1),y[g+0]=1-Fi(b,p,"x","y",c,e),y[g+1]=1-Fi(b,p,"y","x",c,i);break;case 5:b.set(0,0,-1),y[g+0]=Fi(b,p,"x","y",c,e),y[g+1]=1-Fi(b,p,"y","x",c,i);break}}}const Dv=[[4.5,3],[10.5,3],[4.5,8],[10.5,8],[18.5,3],[18.5,14]],g2=[[4,4],[10,4],[4,9],[10,9],[18,4],[18,15]],_2=[[2,14],[4,14],[6,14],[8,14],[10,14],[11,16]],Uv=[[1.5,1.5],[13.5,1.5],[1.5,10.5],[21.5,6.5],[13.5,18.5],[21.5,18.5]],Nv=2.5;function v2(r){r.blockRect(0,0,24,1),r.blockRect(0,0,1,20),r.blockRect(0,12,13,1);for(const[e,i]of Dv)r.blockRect(e-1.85,i-.825,3.7,1.65),r.blockRect(e-.5,i+Nv-.5,1,1);r.blockRect(3,15,7,3);for(const e of[4.2,6.5,8.8])r.blockRect(e-.5,18.2,1,1.3);r.blockRect(17,8,4,2),r.blockRect(18,10,2,1),r.blockRect(22,13,2,4);for(const[e,i]of Uv)r.blockRect(e-.5,i-.5,1,1);return r}class x2{constructor(){Ii(this,"geometries",new Map);Ii(this,"materials",new Map);Ii(this,"textures",[])}material(e,i=.38,s=.03){const l=`${e}:${i}:${s}`;return this.materials.has(l)||this.materials.set(l,new $d({color:e,roughness:i,metalness:s})),this.materials.get(l)}geometry(e,i){return this.geometries.has(e)||this.geometries.set(e,i()),this.geometries.get(e)}box(e,i,s,l,c,h,d,p,m=.06){const _=this.geometry(`box:${i}:${s}:${l}:${m}`,()=>m?new m2(i,s,l,2,Math.min(m,i/4,s/4,l/4)):new da(i,s,l)),v=new nn(_,this.material(p));return v.position.set(c,h,d),v.castShadow=!0,v.receiveShadow=!0,e.add(v),v}cylinder(e,i,s,l,c,h,d,p){const m=this.geometry(`cyl:${i}:${s}:${l}`,()=>new Qd(i,s,l,20)),_=new nn(m,this.material(p,.29));return _.position.set(c,h,d),_.castShadow=!0,_.receiveShadow=!0,e.add(_),_}sphere(e,i,s,l,c,h){const d=this.geometry(`sphere:${i}`,()=>new fu(i,16,12)),p=new nn(d,this.material(h));return p.position.set(s,l,c),p.castShadow=!0,e.add(p),p}dispose(){for(const e of this.geometries.values())e.dispose();for(const e of this.materials.values())e.dispose();for(const e of this.textures)e.dispose()}}function y2(r,e,i){const s=document.createElement("canvas");s.width=256,s.height=160;const l=s.getContext("2d");if(l.fillStyle="#24283c",l.fillRect(0,0,256,160),l.fillStyle="#3e4159",l.fillRect(0,0,256,17),l.fillStyle=i,l.fillRect(12,6,5,5),l.fillStyle="#8390a9",l.fillRect(24,6,68,4),e==="iris")for(let h=0;h<5;h++)l.fillStyle=["#9d88d8","#83bbaa","#d9a3be"][h%3],l.fillRect(28+h*41,136-[39,70,58,94,85][h],26,[39,70,58,94,85][h]);else for(let h=0;h<7;h++)l.fillStyle=h%3===0?i:"#8490a7",l.globalAlpha=.8,l.fillRect(17,31+h*15,70+h*31%143,4),l.globalAlpha=1;const c=new Sv(s);return c.colorSpace=ti,r.textures.push(c),c}function S2(r,e,i){v2(i);const s=e.box(r,24.7,.42,20.7,12,-.26,10,"#c7b29d",.14);e.box(r,24.2,.1,20.2,12,-.005,10,"#f0ddc4",.04).userData.walkable=!0;const l=e.geometry("plank",()=>new da(1.98,.035,.98)),c=new sE(l,e.material("#ecd4b5",.62),240);let h=0;const d=new Hn,p=["#efddc6","#ecd5b9","#e5caa8","#f5e3ca","#e8cfb0"];for(let x=0;x<20;x++)for(let g=0;g<12;g++)d.position.set(g*2+1,.061,x+.5),d.updateMatrix(),c.setMatrixAt(h,d.matrix),c.setColorAt(h,new Ct(p[(g*7+x*3)%5])),h++;c.receiveShadow=!0,c.userData.walkable=!0,r.add(c),e.box(r,12.3,.045,10.3,7.1,.1,6,"#ccb8ea",.12).userData.walkable=!0,e.box(r,7.3,.045,7.8,19.3,.1,4.6,"#d4e2d2",.12).userData.walkable=!0,e.box(r,7.3,.045,7.8,19.3,.1,15.4,"#e2d3ed",.12).userData.walkable=!0,e.box(r,24.5,3,.18,12,1.55,-.03,"#e8e3ed",.04),e.box(r,.18,3,20,-.03,1.55,10,"#eee9f0",.04);const m=new cE({color:"#b8dfe5",transparent:!0,opacity:.34,roughness:.14,metalness:.04,side:ua,depthWrite:!1}),_=e.geometry("window",()=>new da(3.5,1.85,.035));for(let x=2.3;x<24;x+=4.6){const g=new nn(_,m);g.position.set(x,1.9,.09),r.add(g),e.box(r,3.65,.1,.16,x,.94,.12,"#fafaff",.02),e.box(r,3.65,.1,.16,x,2.87,.12,"#fafaff",.02),e.box(r,.08,1.95,.12,x,1.9,.15,"#f6f8fb",.01),e.box(r,.08,1.95,.12,x-1.8,1.9,.15,"#f6f8fb",.01),e.box(r,.08,1.95,.12,x+1.8,1.9,.15,"#f6f8fb",.01)}for(let x=2.8;x<20;x+=4.6){const g=new nn(_,m);g.rotation.y=Math.PI/2,g.position.set(.1,1.9,x),r.add(g),e.box(r,.16,.1,3.65,.12,.94,x,"#fafaff",.02),e.box(r,.16,.1,3.65,.12,2.87,x,"#fafaff",.02)}for(let x=1.5;x<11;x+=3){const g=new nn(e.geometry("partition",()=>new da(2.85,2.35,.045)),m);g.position.set(x,1.3,12.2),r.add(g),e.box(r,.055,2.5,.06,x-1.46,1.3,12.2,"#c8c0d2",.01),e.box(r,2.9,.05,.07,x,2.55,12.2,"#cec8d6",.01)}r.userData.extraMaterials=[m];const v=g2,y=Dv,S=["anto","atlas","vera","bruno","iris","leo"],b=["#b58aee","#eeae67","#74b9a7","#799acb","#e995b9","#d7bb73"];y.forEach(([x,g],z)=>{const N=b[z];e.box(r,3.7,.15,1.65,x,1.3,g,"#f7eddf",.1);for(const G of[-1.5,1.5])for(const q of[-.58,.58])e.box(r,.12,1.2,.12,x+G,.66,g+q,"#cbbba8",.025);e.box(r,1.4,.88,.1,x,2.03,g-.28,"#454554",.055),e.box(r,.15,.25,.12,x,1.5,g-.28,"#5a5867",.025),e.box(r,.7,.05,.36,x,1.4,g-.22,"#a9a6b5",.035);const w=new nn(e.geometry("display",()=>new rr(1.27,.72)),new co({map:y2(e,S[z],N)}));w.position.set(x,2.04,g-.219),r.add(w),r.userData.extraMaterials.push(w.material),e.box(r,1.08,.045,.4,x,1.408,g+.47,"#e0dbe7",.025);for(let G=0;G<3;G++)e.box(r,.92,.015,.025,x,1.436,g+.36+G*.11,"#a4a0af",.006);e.box(r,.22,.05,.35,x+.83,1.43,g+.46,"#c8c1d4",.06),e.cylinder(r,.13,.105,.26,x+1.36,1.5,g+.3,N),e.cylinder(r,.105,.105,.012,x+1.36,1.638,g+.3,"#6c5646");const F=new nn(e.geometry("handle",()=>new xl(.09,.025,7,12)),e.material(N));F.position.set(x+1.5,1.51,g+.3),F.rotation.y=Math.PI/2,r.add(F),e.box(r,.45,.04,.6,x-1.25,1.43,g+.3,"#c9b5e6",.02);const B=g+Nv;e.cylinder(r,.07,.07,.65,x,.47,B,"#73707d"),e.box(r,.95,.15,.85,x,.8,B,N,.12),e.box(r,.95,.85,.15,x,1.19,B+.38,N,.12),e.box(r,1.1,.065,.12,x,.19,B,"#96909e",.03),e.box(r,.12,.065,1.1,x,.19,B,"#96909e",.03);for(const G of[-.45,.45])for(const q of[-.45,.45])e.sphere(r,.075,x+G,.12,B+q,"#625e6c")}),e.box(r,6.7,.18,2.4,6.5,1.28,16.5,"#efe1c9",.25);for(const x of[4,9])e.box(r,.2,1.2,1.8,x,.64,16.5,"#c2b39f",.03);for(const x of[4.2,6.5,8.8])e.box(r,1,.16,.8,x,.75,18.7,"#9f8db9",.12),e.box(r,1,.75,.15,x,1.1,19.05,"#a996c4",.1),e.cylinder(r,.08,.08,.65,x,.38,18.7,"#80788c");e.box(r,.9,.05,.65,5.5,1.405,16.5,"#84679f",.04),e.box(r,.65,.05,.8,7.1,1.405,16.4,"#fff8ee",.03);for(const x of[3.9,8.8])e.cylinder(r,.12,.09,.23,x,1.52,16.1,"#bca5d7");e.box(r,3.3,.5,1,19,.45,8.5,"#83ab95",.2),e.box(r,3.3,.82,.22,19,.87,8.92,"#93b59f",.16),e.box(r,.22,.67,1,17.4,.78,8.5,"#92b49d",.12),e.box(r,.22,.67,1,20.6,.78,8.5,"#92b49d",.12),e.box(r,1.6,.13,.8,19,.52,10.4,"#e2d3ba",.1);for(const x of[-.6,.6])e.box(r,.09,.48,.09,19+x,.24,10.4,"#b0a18c",.02);e.box(r,.7,2.4,3.2,22.8,1.27,14.8,"#e2d6c4",.05);for(let x=0;x<4;x++){e.box(r,.8,.07,3.2,22.8,.35+x*.57,14.8,"#cbbda9",.02);for(let g=0;g<5;g++)e.box(r,.35,.38,.16,22.7,.57+x*.57,13.5+g*.42,["#9f86bd","#cfaa8a","#8baea0","#d4b7d2"][g%4],.01)}function U(x,g,z=!1){const N=z?1.55:1;e.cylinder(r,.39,.29,.62,x,.39,g,"#eee5d9"),e.cylinder(r,.35,.35,.035,x,.72,g,"#746053");for(let w=0;w<7;w++){const F=w*2.4,B=new ci;B.position.set(x,.7,g),B.rotation.y=F,r.add(B);const G=e.sphere(B,.23,0,N*.5,.18,["#669c7a","#84ad8d","#4c8267"][w%3]);G.scale.set(.58,N*1.9,1.05),G.rotation.x=.35+w%3*.22,G.position.y=N*.42}}Uv.forEach(([x,g],z)=>U(x,g,z%2===0));for(let x=1;x<24;x+=1.4)e.cylinder(r,.16,.16,.07,x,-.01,20.35,"#d5c2aa");return{floor:s,homes:v,meeting:_2}}function M2(r,e,i){const s=new ci,l=new ci;s.add(l);const c=["#edbd88","#ecc49a","#e4b38a","#ce9d73","#f0c8a3","#d9ad85"][i],h=[new ci,new ci];h.forEach((F,B)=>{F.position.set(B?.205:-.205,.73,0),l.add(F),r.box(F,.34,.57,.39,0,-.285,0,"#454655",.055),r.box(F,.36,.18,.54,0,-.59,.065,"#4a4958",.045)}),r.box(l,.8,.19,.44,0,.78,0,"#4b485c",.035),r.box(l,.85,.7,.47,0,1.19,0,e.color,.105),r.box(l,.025,.6,.015,0,1.2,.244,"#ffffff",.004);const d=r.box(l,.2,.15,.02,-.19,1.24,.25,"#f7effc",.02);d.rotation.z=.08,r.box(l,.11,.028,.025,-.19,1.25,.266,i%2?"#7c6c91":"#a89bbc",.004);const p=[new ci,new ci];p.forEach((F,B)=>{const G=B?1:-1;F.position.set(G*.53,1.42,0),l.add(F),r.cylinder(F,.15,.13,.48,0,-.23,0,e.color),r.sphere(F,.15,0,-.03,0,e.color);const q=new nn(r.geometry("claw",()=>new xl(.115,.055,8,15,Math.PI*1.62)),r.material(c,.3));q.position.set(0,-.58,.015),q.rotation.z=B?.2:2.9,q.castShadow=!0,F.add(q),r.cylinder(F,.075,.075,.14,0,-.49,0,c)});const m=new ci;m.position.y=1.79,l.add(m),r.cylinder(m,.31,.31,.48,0,0,0,c),r.cylinder(m,.13,.13,.105,0,.29,0,c),r.cylinder(l,.14,.14,.18,0,1.53,0,c);const _=document.createElement("canvas");_.width=256,_.height=192;const v=_.getContext("2d");v.fillStyle="#403841",v.beginPath(),v.ellipse(83,77,9,13,0,0,Math.PI*2),v.ellipse(173,77,9,13,0,0,Math.PI*2),v.fill(),v.strokeStyle="#765344",v.lineWidth=6,v.lineCap="round",v.beginPath(),v.arc(128,111,34,.17,Math.PI-.17),v.stroke(),v.fillStyle="#f7ddbf",v.beginPath(),v.arc(80,72,2.5,0,Math.PI*2),v.arc(170,72,2.5,0,Math.PI*2),v.fill(),(i===1||i===3)&&(v.strokeStyle="#423e4a",v.lineWidth=6,v.strokeRect(53,53,61,44),v.strokeRect(142,53,61,44),v.beginPath(),v.moveTo(114,68),v.lineTo(142,68),v.stroke());const y=new Sv(_);y.colorSpace=ti,r.textures.push(y);const S=new co({map:y,transparent:!0,depthWrite:!1,side:ka}),b=new nn(r.geometry("face",()=>new rr(.54,.41)),S);b.position.set(0,-.005,.316),m.add(b),s.userData.extraMaterials=[S];const U=["#433b50","#715441","#493e46","#564741","#ae758f","#866244"][i];r.cylinder(m,.325,.325,.16,0,.2,-.015,U);const x=r.sphere(m,.3,0,.27,-.035,U);if(x.scale.y=.48,i===0||i===2||i===4){r.box(m,.12,.37,.26,-.28,.06,-.08,U,.06),r.box(m,.12,.37,.26,.28,.06,-.08,U,.06);const F=r.sphere(m,.21,0,.08,-.34,U);F.scale.y=1.3}else{const F=r.box(m,.46,.12,.22,-.03,.21,.2,U,.045);F.rotation.z=.1}const g=new co({color:"#8f63d4",transparent:!0,opacity:.82}),z=new nn(r.geometry("selection",()=>new xl(.65,.045,8,40)),g);z.rotation.x=-Math.PI/2,z.position.y=.08,s.add(z);const N=new $d({color:"#8fbea5",emissive:"#8fbea5",emissiveIntensity:.25,roughness:.3}),w=new nn(r.geometry("status-orb",()=>new fu(.09,12,8)),N);return w.position.set(.49,2.18,0),s.add(w),s.userData.extraMaterials.push(g,N),s.scale.setScalar(1.08),{root:s,body:l,head:m,arms:p,legs:h,ring:z,orb:w,agent:e}}const Ht=([r,e])=>`${r},${e}`,la=r=>[r[0],r[1]],q_=([r,e])=>[[r+1,e],[r,e+1],[r-1,e],[r,e-1]];class E2{constructor(e=24,i=20){Ii(this,"width");Ii(this,"height");Ii(this,"walls",new Set);Ii(this,"occupants",new Map);Ii(this,"positions",new Map);Ii(this,"reservations",new Map);Ii(this,"steps",new Map);if(!Number.isInteger(e)||!Number.isInteger(i)||e<1||i<1||e>256||i>256)throw new RangeError("La cuadrícula debe medir entre 1 y 256 celdas por lado.");this.width=e,this.height=i}get blockedCount(){return this.walls.size}inBounds(e){return Number.isInteger(e[0])&&Number.isInteger(e[1])&&e[0]>=0&&e[0]<this.width&&e[1]>=0&&e[1]<this.height}isBlocked(e){return!this.inBounds(e)||this.walls.has(Ht(e))}blockRect(e,i,s,l){if(![e,i,s,l].every(Number.isFinite)||s<=0||l<=0)throw new RangeError("El obstáculo debe ser un rectángulo finito de tamaño positivo.");const c=[];for(let h=Math.max(0,Math.floor(e));h<Math.min(this.width,Math.ceil(e+s));h++)for(let d=Math.max(0,Math.floor(i));d<Math.min(this.height,Math.ceil(i+l));d++){const p=Ht([h,d]);if(this.occupants.has(p)||this.reservations.has(p))throw new Error("El obstáculo invadiría un personaje.");c.push(p)}for(const h of c)this.walls.add(h)}isFree(e,i){if(this.isBlocked(e))return!1;for(let s=-1;s<=1;s++)for(let l=-1;l<=1;l++){const c=Ht([e[0]+s,e[1]+l]),h=this.occupants.get(c),d=this.reservations.get(c);if(h!==void 0&&h!==i||d!==void 0&&d!==i)return!1}return!0}register(e,i){if(!e||!this.isFree(i,e))return!1;const s=this.positions.get(e);return s?Ht(s)===Ht(i):(this.positions.set(e,la(i)),this.occupants.set(Ht(i),e),!0)}position(e){const i=this.positions.get(e);return i?la(i):void 0}path(e,i){const s=this.positions.get(e);if(!s||!this.isFree(i,e))return[];const l=Ht(s),c=Ht(i);if(l===c)return[];const h=[la(s)],d=new Map([[l,null]]);for(let _=0;_<h.length;_++){const v=h[_];if(Ht(v)===c)break;for(const y of q_(v)){const S=Ht(y);d.has(S)||!this.isFree(y,e)||(d.set(S,v),h.push(y))}}if(!d.has(c))return[];const p=[];let m=la(i);for(;m&&Ht(m)!==l;)p.unshift(la(m)),m=d.get(Ht(m))??null;return p}reserveNext(e,i){const s=this.positions.get(e);if(!s||Math.abs(s[0]-i[0])+Math.abs(s[1]-i[1])!==1||!this.isFree(i,e))return!1;const l=this.steps.get(e);return l?Ht(l)===Ht(i):(this.steps.set(e,la(i)),this.reservations.set(Ht(i),e),!0)}arrive(e){const i=this.steps.get(e),s=this.positions.get(e);if(s)return i?(this.occupants.delete(Ht(s)),this.occupants.set(Ht(i),e),this.positions.set(e,la(i)),this.reservations.delete(Ht(i)),this.steps.delete(e),la(i)):la(s)}cancel(e){const i=this.steps.get(e);i&&this.reservations.delete(Ht(i)),this.steps.delete(e)}remove(e){this.cancel(e);const i=this.positions.get(e);i&&this.occupants.delete(Ht(i)),this.positions.delete(e)}nearestFree(e,i){if(!e.every(Number.isFinite))return null;const s=[Math.max(0,Math.min(this.width-1,Math.round(e[0]))),Math.max(0,Math.min(this.height-1,Math.round(e[1])))],l=[s],c=new Set([Ht(s)]);for(let h=0;h<l.length;h++){const d=l[h];if(this.isFree(d,i))return la(d);for(const p of q_(d)){const m=Ht(p);this.inBounds(p)&&!c.has(m)&&(c.add(m),l.push(p))}}return null}}class b2{constructor(){Ii(this,"claims",new Map)}claim(e,i){if(!e||i.length===0)return!1;const s=new Set;for(const[l,c]of i){if(!Number.isInteger(l)||!Number.isInteger(c))return!1;for(let h=-1;h<=1;h++)for(let d=-1;d<=1;d++)s.add(Ht([l+h,c+d]))}for(const[l,c]of this.claims)if(l!==e){for(const h of s)if(c.has(h))return!1}return this.claims.set(e,s),!0}release(e){this.claims.delete(e)}}const Zi=r=>["En ejecución","En corrección"].includes(r),T2=r=>r==="Fallido"?"#d66a76":["Espera aprobación","Requiere información","Espera revisión"].includes(r)?"#d8a54d":Zi(r)?"#56aa8b":r==="Interrumpido"||r==="Cancelado"?"#a79da8":"#9d87c3",A2=r=>Zi(r)?"Trabajando":r,Qc={background:"#fffc",border:"1px solid #e7dff0",borderRadius:7,padding:"6px 9px",fontSize:9,color:"#816694",boxShadow:"0 2px 8px #58426709",cursor:"pointer"};function R2(r){const e=Ne.useRef(null),i=Ne.useRef(null),s=Ne.useRef(r),l=Ne.useRef(()=>{}),[c,h]=Ne.useState("Selecciona un agente y haz clic en una zona libre para moverlo."),[d,p]=Ne.useState("");s.current=r,Ne.useEffect(()=>{const v=i.current,y=e.current;let S;try{S=new e2({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{p("Tu navegador no pudo iniciar WebGL. Prueba Chrome o Edge con aceleración gráfica; puedes seleccionar el equipo desde la lista inferior.");return}p(""),y.dataset.rendererReady="false",y.dataset.sceneVersion="3d",S.setPixelRatio(Math.min(window.devicePixelRatio,1.6)),S.shadowMap.enabled=!0,S.shadowMap.type=ev,S.shadowMap.autoUpdate=!1,S.shadowMap.needsUpdate=!0,S.outputColorSpace=ti,S.toneMapping=nv,S.toneMappingExposure=1.22,S.setClearColor("#f5f2f8",0),v.appendChild(S.domElement),S.domElement.setAttribute("aria-label","Oficina 3D interactiva. Arrastra para girar, rueda para acercar, clic en agente para seleccionar o en suelo para mover.");const b=new nE,U=new x2,x=new E2(24,20),g=new b2,z=new ci;z.position.set(-12,0,-10),b.add(z);const N=new hE("#fff5e9","#a4a2bc",2.7);b.add(N);const w=new m_("#fff6df",3.2);w.position.set(-8,24,14),w.castShadow=!0,w.shadow.mapSize.set(1024,1024),w.shadow.camera.left=-20,w.shadow.camera.right=20,w.shadow.camera.top=20,w.shadow.camera.bottom=-20,w.shadow.camera.near=.1,w.shadow.camera.far=65,w.shadow.normalBias=.035,w.shadow.bias=-1e-4,w.shadow.radius=4,b.add(w);const F=new m_("#d9d9ff",1.6);F.position.set(16,12,-10),b.add(F);const B=new nn(new rr(140,140),new lE({color:"#9b87ae",opacity:.14}));B.rotation.x=-Math.PI/2,B.position.y=-.5,B.receiveShadow=!0,b.add(B);const{homes:G,meeting:q}=S2(z,U,x),L=new ep(-25,25,14,-14,.1,180);L.position.set(29,28,35);const R=new n2(L,S.domElement);R.target.set(0,.45,.2),R.enableDamping=!0,R.dampingFactor=.075,R.enablePan=!0,R.screenSpacePanning=!0,R.minPolarAngle=Math.PI*.15,R.maxPolarAngle=Math.PI*.44,R.minZoom=.7,R.maxZoom=3,R.rotateSpeed=.55,R.zoomSpeed=.75,R.panSpeed=.7,R.mouseButtons={LEFT:Ga.ROTATE,MIDDLE:Ga.DOLLY,RIGHT:Ga.PAN},R.touches={ONE:Ms.ROTATE,TWO:Ms.DOLLY_PAN},R.update(),R.saveState();const j=document.createElement("div");j.style.cssText="position:absolute;inset:0;overflow:hidden;pointer-events:none;",v.appendChild(j);const ae=s.current.agents.map((he,C)=>{const T=M2(U,he,C),Y=x.nearestFree(G[C],he.id)||G[C];x.register(he.id,Y),T.root.position.set(Y[0]+.5,.14,Y[1]+.5),T.root.rotation.y=.7,z.add(T.root),T.root.traverse(Ce=>{Ce instanceof nn&&(Ce.userData.agentId=he.id)}),T.ring.userData.ignorePick=!0;const pe=document.createElement("button");pe.dataset.agentId=he.id,pe.dataset.agentLabel="true",pe.setAttribute("aria-label",`${he.name} · ${he.role} · Disponible`),pe.style.cssText="position:absolute;left:0;top:0;transform:translate(-50%,-100%);display:flex;align-items:center;gap:5px;white-space:nowrap;border:1px solid #e9dff2;background:#fffffff0;border-radius:7px;padding:4px 7px;box-shadow:0 2px 8px #56406c12;font:600 9px system-ui;color:#6a507e;cursor:pointer;pointer-events:auto;";const Ee=document.createElement("i");Ee.style.cssText=`width:5px;height:5px;flex-shrink:0;border-radius:50%;background:${he.color}`;const I=document.createElement("span");I.textContent=he.name;const Ue=document.createElement("small");return Ue.style.cssText="font-weight:400;font-size:7px;color:#9a85aa",Ue.textContent="Disponible",pe.append(Ee,I,Ue),pe.addEventListener("click",Ce=>{Ce.stopPropagation(),s.current.onSelect(he.id)}),j.appendChild(pe),{...T,cell:Y,path:[],step:null,target:null,pending:null,label:pe,status:"Disponible",waveUntil:0,walkPhase:C,wait:0,home:G[C],meeting:q[C]}}),re=new ci;z.add(re);const fe=new co({color:"#a580d4",transparent:!0,opacity:.48}),me=new Jd(.09,.14,12);function H(he){for(;re.children.length;)re.remove(re.children[0]);if(he)for(const C of he.path){const T=new nn(me,fe);T.rotation.x=-Math.PI/2,T.position.set(C[0]+.5,.153,C[1]+.5),T.userData.ignorePick=!0,re.add(T)}}function K(he){h(he)}function Z(he,C,T=!1){if(T&&Zi(he.status)){K(`${he.agent.name} está trabajando. El movimiento manual estará disponible cuando termine.`);return}if(x.isBlocked(C)){T&&K("Esa zona contiene un mueble o una división. Elige suelo libre.");return}if(he.step){he.pending=C;return}if(!x.isFree(C,he.agent.id)){g.release(he.agent.id),he.path=[],he.target=C,he.wait=0,s.current.selected===he.agent.id&&H(he),T&&K(`${he.agent.name} espera a que se libere el destino. Puedes elegir otro punto para cambiar la orden.`);return}const Y=x.path(he.agent.id,C);if(Y.length===0&&Ht(C)!==Ht(he.cell)){g.release(he.agent.id),he.path=[],he.target=C,he.wait=0,T&&K(`${he.agent.name} espera a que quede libre el paso. Se moverá al destino cuando haya una ruta segura.`);return}if(Y.length&&!g.claim(he.agent.id,[he.cell,...Y])){g.release(he.agent.id),he.path=[],he.target=C,he.wait=0,T&&K(`${he.agent.name} espera su turno en el pasillo compartido. La orden de movimiento está conservada.`);return}Y.length||g.release(he.agent.id),he.path=Y,he.target=C,he.wait=0,s.current.reduced&&Y.length&&K("Movimiento reducido: traslado sin animación continua; las reservas siguen evitando colisiones."),s.current.selected===he.agent.id&&H(he),T&&K(Y.length?`${he.agent.name} se dirige al punto elegido. Esto solo mueve al personaje; las tareas se gestionan en el tablero.`:`${he.agent.name} ya está en ese lugar.`)}l.current=he=>{const C=ae.find(T=>T.agent.id===s.current.selected);if(C){if(he==="stop"){C.pending=null,C.target=C.step||C.cell,C.path=C.step?[C.step]:[],C.waveUntil=0,s.current.selected===C.agent.id&&H(C),K(`${C.agent.name} detiene el desplazamiento al alcanzar una posición segura. Las tareas de IA se gestionan en el tablero.`);return}if(he==="wave"){if(Zi(C.status)){K(`${C.agent.name} está trabajando. Puedes saludar cuando termine.`);return}C.root.rotation.y=.7,C.waveUntil=performance.now()/1e3+2.8,K(`${C.agent.name} te saluda. Es un gesto visual, no una respuesta de IA.`);return}Z(C,he==="desk"?C.home:C.meeting,!0)}};const Te=new gE,P=new dt;let ne={x:0,y:0,time:0};const Se=he=>{he.button===0&&(ne={x:he.clientX,y:he.clientY,time:performance.now()})},Ae=he=>{if(he.button!==0||Math.hypot(he.clientX-ne.x,he.clientY-ne.y)>5||performance.now()-ne.time>700)return;const C=S.domElement.getBoundingClientRect();P.set((he.clientX-C.left)/C.width*2-1,-(he.clientY-C.top)/C.height*2+1),Te.setFromCamera(P,L);const Y=Te.intersectObjects(z.children,!0).filter(I=>{const Ue=I.object,Ce=Ue.material;return!Ue.userData.ignorePick&&!(Ce!=null&&Ce.transparent&&Ce.opacity<.5)})[0];if(!Y)return;if(Y.object.userData.agentId){s.current.onSelect(Y.object.userData.agentId);return}const pe=ae.find(I=>I.agent.id===s.current.selected);if(!pe)return;if(!Y.object.userData.walkable){K("Selecciona un personaje o haz clic en una zona libre del suelo.");return}const Ee=z.worldToLocal(Y.point.clone());Z(pe,[Math.floor(Ee.x),Math.floor(Ee.z)],!0)};S.domElement.addEventListener("pointerdown",Se),S.domElement.addEventListener("pointerup",Ae);const ee=he=>{he.preventDefault(),p("Se perdió el contexto gráfico. Recarga la vista de oficina para recuperar la escena; tus datos siguen guardados.")};S.domElement.addEventListener("webglcontextlost",ee);let ge=1,xe=1,De=s.current.reset,Le=s.current.zoom,ut=s.current.selected,Ke=0,ft=0,zt=!1,nt=performance.now()/1e3,k=!0;function on(){ge=Math.max(1,v.clientWidth),xe=Math.max(1,v.clientHeight);const he=ge/xe,C=Math.max(21.5,38/he);L.left=-C*he/2,L.right=C*he/2,L.top=C/2,L.bottom=-C/2,L.updateProjectionMatrix(),S.setSize(ge,xe)}const pt=new ResizeObserver(on);pt.observe(v),on();const it=new te,Ye=new te;function Ut(he){var Ee;if(!k)return;Ke=requestAnimationFrame(Ut);const C=he/1e3,T=Math.min(.5,Math.max(0,C-nt));nt=C;const Y=s.current;R.enableDamping=!Y.reduced,Y.reset!==De&&(R.reset(),L.zoom=Y.zoom,L.updateProjectionMatrix(),De=Y.reset,Le=Y.zoom),Y.zoom!==Le&&(L.zoom=Y.zoom,L.updateProjectionMatrix(),Le=Y.zoom),ut!==Y.selected&&(ut=Y.selected,H(ae.find(I=>I.agent.id===Y.selected)));for(const I of ae){const Ue=Y.states[I.agent.id]||"Disponible";if(Ue!==I.status){I.status=Ue;const X=T2(Ue);I.orb.material.color.set(X),I.orb.material.emissive.set(X),I.label.firstChild.style.background=X,I.label.lastChild.textContent=A2(Ue),I.label.setAttribute("aria-label",`${I.agent.name} · ${I.agent.role} · ${Ue}`),Zi(Ue)&&Z(I,I.home)}const Ce=I.agent.id===Y.selected;if(I.ring.visible=Ce,I.label.style.borderColor=Ce?"#bb93e2":"#e9dff2",I.label.style.zIndex=Ce?"4":"2",I.wait+=T,!I.step&&I.pending){const X=I.pending;I.pending=null,Z(I,X)}if(!I.step&&!I.path.length&&I.target&&Ht(I.cell)!==Ht(I.target)&&I.wait>.5){const X=x.path(I.agent.id,I.target);X.length&&g.claim(I.agent.id,[I.cell,...X])&&(I.path=X,I.wait=0,Ce&&H(I))}let je=Y.reduced?Number.POSITIVE_INFINITY:T*2.2,Qe=0,we=0;for(;je>1e-5&&we++<64;){if(!I.step){if(!I.path.length)break;const Ot=I.path[0];if(x.reserveNext(I.agent.id,Ot))I.step=Ot,I.wait=0;else{if(I.wait>1&&I.target){const $t=x.path(I.agent.id,I.target);I.path=$t.length&&g.claim(I.agent.id,[I.cell,...$t])?$t:[],I.path.length||g.release(I.agent.id),I.wait=0,Ce&&H(I)}break}}const X=I.step,Oe=X[0]+.5-I.root.position.x,de=X[1]+.5-I.root.position.z,ve=Math.hypot(Oe,de),Ge=Math.min(ve,je),Be=Math.atan2(Oe,de),lt=Math.atan2(Math.sin(Be-I.root.rotation.y),Math.cos(Be-I.root.rotation.y));if(I.root.rotation.y+=lt*Math.min(1,T*12),ve<=Ge+1e-4?(I.root.position.x=X[0]+.5,I.root.position.z=X[1]+.5,I.cell=x.arrive(I.agent.id),I.step=null,I.path.shift(),Ce&&H(I)):(I.root.position.x+=Oe/ve*Ge,I.root.position.z+=de/ve*Ge),Qe+=Ge,je-=Ge,I.step)break;if(I.pending){const Ot=I.pending;I.pending=null,Z(I,Ot)}}!I.step&&!I.path.length&&I.target&&Ht(I.cell)===Ht(I.target)&&g.release(I.agent.id);const He=Qe>1e-5||!!I.step;I.walkPhase+=He?Qe*4.5:T*1.2;const Je=I.walkPhase,qe=Zi(I.status),Ve=C<I.waveUntil&&!qe&&!He,ot=He&&!Y.reduced?Math.sin(Je)*.53:0;if(I.legs[0].rotation.x=ot,I.legs[1].rotation.x=-ot,I.body.position.y=He&&!Y.reduced?Math.abs(Math.sin(Je))*.045:qe&&!Y.reduced?Math.sin(C*5)*.008:0,I.arms[0].rotation.x=qe&&!He?-.92+(Y.reduced?0:Math.sin(C*9)*.08):-ot*.7,I.arms[1].rotation.x=qe&&!He?-.88+(Y.reduced?0:Math.sin(C*9+1)*.08):ot*.7,I.arms[0].rotation.z=.1,I.arms[1].rotation.z=Ve?-2.4+(Y.reduced?0:Math.sin(C*11)*.23):-.1,I.head.rotation.y=!He&&!Y.reduced?Math.sin(C*.7+I.walkPhase)*.055:0,I.head.rotation.z=I.status==="Fallido"?.13:0,I.orb.scale.setScalar(qe&&!Y.reduced?1+Math.sin(C*4)*.15:1),!He){const X=qe?Math.PI:Math.atan2(L.position.x-(I.root.position.x-12),L.position.z-(I.root.position.z-10));I.root.rotation.y+=Math.atan2(Math.sin(X-I.root.rotation.y),Math.cos(X-I.root.rotation.y))*Math.min(1,T*6)}I.label.dataset.walking=String(He),I.label.dataset.waiting=String(!He&&!!I.target&&Ht(I.cell)!==Ht(I.target)),I.label.dataset.remaining=String(I.path.length),I.label.dataset.target=((Ee=I.target)==null?void 0:Ee.join(","))||"",I.label.dataset.gesture=Ve?"saludando":"ninguno",I.label.dataset.worldX=I.root.position.x.toFixed(3),I.label.dataset.worldZ=I.root.position.z.toFixed(3),I.label.dataset.agentState=Ue,I.root.getWorldPosition(Ye),it.copy(Ye).add(new te(0,2.75,0)).project(L);const at=(it.x*.5+.5)*ge,wt=(-it.y*.5+.5)*xe;I.label.style.left=`${at}px`,I.label.style.top=`${wt}px`,I.label.style.display=it.z<-1||it.z>1||at<0||at>ge||wt<0||wt>xe?"none":"flex"}R.update();const pe=ae.some(I=>I.step||I.path.length||C<I.waveUntil||Zi(I.status));C>=ft&&(pe||zt)&&(S.shadowMap.needsUpdate=!0,ft=C+.12),zt=pe,S.render(b,L),y.dataset.rendererReady!=="true"&&(y.dataset.rendererReady="true")}return Ke=requestAnimationFrame(Ut),()=>{k=!1,cancelAnimationFrame(Ke),pt.disconnect(),l.current=()=>{},S.domElement.removeEventListener("pointerdown",Se),S.domElement.removeEventListener("pointerup",Ae),S.domElement.removeEventListener("webglcontextlost",ee),R.dispose();for(const he of ae)for(const C of he.root.userData.extraMaterials||[])C.dispose();for(const he of z.userData.extraMaterials||[])he.dispose();me.dispose(),fe.dispose(),B.geometry.dispose(),B.material.dispose(),U.dispose(),S.dispose(),S.forceContextLoss(),j.remove(),S.domElement.remove(),y.dataset.rendererReady="false"}},[]);const m=r.agents.find(v=>v.id===r.selected),_=r.states[r.selected]||"Disponible";return E.jsxs("div",{ref:e,className:"office-canvas","data-renderer-ready":"false","aria-label":"Oficina 3D interactiva de seis agentes",children:[E.jsx("div",{ref:i,style:{position:"absolute",inset:0}}),d?E.jsx("div",{role:"alert",style:{position:"absolute",inset:"30% 8% auto",background:"#fff9",padding:18,borderRadius:12,fontSize:12,color:"#82668f",lineHeight:1.7},children:d}):E.jsxs("div",{className:"scene-3d-actions",style:{position:"absolute",top:61,right:12,zIndex:5,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:5,pointerEvents:"auto"},children:[E.jsxs("div",{style:{fontSize:8,color:"#9a81ad",background:"#ffffffc9",borderRadius:5,padding:"4px 7px"},children:[m==null?void 0:m.name," · ",_]}),E.jsxs("div",{style:{display:"flex",gap:4},children:[E.jsx("button",{style:Qc,onClick:()=>l.current("desk"),title:"Mover visualmente al escritorio",disabled:Zi(_),children:"Escritorio"}),E.jsx("button",{style:Qc,onClick:()=>l.current("meeting"),title:"Mover visualmente a la sala de reunión",disabled:Zi(_),children:"Reunión"}),E.jsx("button",{style:Qc,onClick:()=>l.current("wave"),title:"Animación visual de saludo",disabled:Zi(_),children:"Saludar"}),E.jsx("button",{style:Qc,onClick:()=>l.current("stop"),title:"Detener desplazamiento visual",disabled:Zi(_),children:"Detener"})]})]}),E.jsx("p",{className:"scene-3d-feedback",role:"status","aria-live":"polite",style:{position:"absolute",left:12,right:170,bottom:47,fontSize:8,lineHeight:1.5,color:"#96809f",padding:"5px 7px",margin:0,borderRadius:5,background:"#fbf8fdca",pointerEvents:"none",maxWidth:430},children:c})]})}const Jc={gemini:{name:"Google Gemini",secret:"STUDIO_GEMINI_API_KEY",model:"gemini-2.5-flash-lite",link:"https://aistudio.google.com/apikey"},groq:{name:"Groq",secret:"STUDIO_GROQ_API_KEY",model:"openai/gpt-oss-20b",link:"https://console.groq.com/keys"}};async function xs(r,e,i){const s=await fetch("/api"+r,{method:i||(e?"POST":"GET"),headers:{"Content-Type":"application/json"},body:e?JSON.stringify(e):void 0}),l=await s.json();if(!s.ok)throw Error(typeof l.detail=="string"?l.detail:JSON.stringify(l.detail||l));return l}function C2(r){const[e,i]=Ne.useState(r.provider),[s,l]=Ne.useState(r.agents),[c,h]=Ne.useState(!1),[d,p]=Ne.useState(null),[m,_]=Ne.useState(""),[v,y]=Ne.useState();Ne.useEffect(()=>{let N=!0;return _(""),xs("/credentials/"+e).then(w=>{N&&y(w)}).catch(()=>{N&&y(void 0)}),()=>{N=!1}},[e]),Ne.useEffect(()=>{i(r.provider),l(r.agents)},[r.provider,r.agents]);const S=Jc[e]||Jc.gemini,b=r.status.provider===e;function U(N){_(""),y(void 0),i(N),p(null),l(w=>w.map(F=>({...F,model:Jc[N].model})))}async function x(N){h(!0),p(null),r.onError("");try{if(await xs("/settings",{provider:e,agents:s,ollama_url:r.ollama,openai_url:r.openai},"PUT"),N==="test"){const B=await xs("/connect",{provider:e,agent:"anto"});r.onSaved(B.settings),r.onStatus(B.status),l(B.settings.agents),p(B.proof),r.onNotice("Listo. Ya puedes conversar.");return}const w=await xs("/settings");r.onSaved(w),l(w.agents);const F=await xs("/models");r.onStatus(F),r.onNotice(F.connected?"Configuración guardada. La API responde.":"Configuración guardada. "+(F.error||"Comprueba la clave y tu conexión."))}catch(w){r.onError(w.message)}finally{h(!1)}}async function g(){h(!0),p(null),r.onError("");try{const N=await xs("/credentials",{provider:e,api_key:m});_(""),y(N.credential),r.onSaved(N.settings),r.onStatus(N.status,!0),l(N.settings.agents),p(N.proof),r.onNotice("Clave guardada en el servidor. Ya puedes conversar.")}catch(N){r.onError(N.message)}finally{h(!1)}}async function z(){h(!0),p(null),r.onError("");try{y(await xs("/credentials/"+e,void 0,"DELETE")),_(""),r.onStatus(await xs("/models"),!0),r.onNotice("Clave quitada de la aplicación. Un secreto de Codespaces, si existe, sigue disponible.")}catch(N){r.onError(N.message)}finally{h(!1)}}return E.jsx("section",{className:"content-card settings-card",children:E.jsxs("fieldset",{disabled:c,style:{border:0,padding:0,margin:0,minWidth:0},children:[E.jsxs("div",{className:"section-title",children:[E.jsxs("div",{children:[E.jsx("div",{className:"eyebrow",children:"IA EN LA NUBE"}),E.jsx("h2",{children:"APIs y modelos"})]}),E.jsx("span",{className:"pill",children:"Sin modelos locales"})]}),E.jsx("div",{className:"provider-options",role:"group","aria-label":"Proveedor de IA",children:["gemini","groq"].map(N=>E.jsxs("button",{className:"provider-option "+(e===N?"selected":""),onClick:()=>U(N),children:[E.jsx("strong",{children:Jc[N].name}),E.jsx("small",{children:"API en la nube · cuota gratuita según tu cuenta"})]},N))}),E.jsxs("div",{className:"integration-note",children:[E.jsxs("h3",{children:["Tu clave de ",S.name]}),E.jsx("p",{children:"Pega tu clave aquí y pulsa Guardar clave y conectar. Se comprobará antes de reemplazar una clave que ya funciona."}),E.jsxs("label",{children:["Clave API de ",S.name,E.jsx("input",{type:"password","aria-label":"Clave API",value:m,onChange:N=>_(N.target.value),autoComplete:"new-password",autoCapitalize:"none",spellCheck:!1,onKeyDown:N=>{N.key==="Enter"&&m.trim()&&!c&&(N.preventDefault(),g())},maxLength:4096,placeholder:v!=null&&v.configured?"Ya hay una clave configurada. Pega otra para cambiarla.":"Pega tu clave de API"})]}),E.jsxs("div",{className:"api-config-row",children:[E.jsx("button",{className:"button primary",disabled:!m.trim(),onClick:g,children:c?"Comprobando…":"Guardar clave y conectar"}),(v==null?void 0:v.saved_in_app)&&E.jsx("button",{className:"button secondary",onClick:z,children:"Eliminar clave guardada"})]}),E.jsxs("p",{children:[v!=null&&v.saved_in_app?"Tienes una clave guardada en esta aplicación.":v!=null&&v.configured?"Se está usando tu secreto de Codespaces.":"Todavía no hay una clave guardada."," El valor queda en un archivo privado del servidor y no vuelve a mostrarse. No se incluye en Git ni en las entregas ZIP."]}),E.jsx("a",{href:S.link,target:"_blank",rel:"noreferrer",children:"Obtener una clave en el sitio oficial"})]}),E.jsxs("details",{className:"integration-note",children:[E.jsx("summary",{children:"Usar un secreto de Codespaces"}),E.jsxs("p",{children:["También puedes guardar ",E.jsx("code",{children:S.secret})," en Settings → Codespaces → Secrets, autorizar este repositorio y reiniciar el Codespace. Se reconocen además ",E.jsx("code",{children:e==="gemini"?"GEMINI_API_KEY o GOOGLE_API_KEY":"GROQ_API_KEY"}),". La clave guardada en la aplicación tiene prioridad."]})]}),E.jsx("div",{className:"settings-connection "+(b&&r.status.connected?"ok":""),children:E.jsx("strong",{children:b&&r.status.connected?"API conectada":b?r.status.error||"Conexión pendiente":"Proveedor pendiente de comprobar"})}),b&&!r.status.credential&&E.jsx("div",{className:"notice",role:"status",children:"El servidor sigue usando una versión anterior. Reinicia el Codespace para cargar la nueva conexión de IA."}),b&&r.status.credential&&E.jsxs("div",{className:"integration-note",role:"status",children:[E.jsx("strong",{children:r.status.credential.configured?r.status.credential.saved_in_app?"Clave guardada en la aplicación":"Secreto recibido por el servidor: "+r.status.credential.source:"El servidor todavía no recibe el secreto"}),E.jsx("p",{children:r.status.credential.configured?r.status.credential.valid_format?"La presencia del secreto no confirma que el proveedor lo acepte. Comprueba la API o prueba una respuesta.":"El valor contiene caracteres no válidos. Guarda solo la clave, sin comillas ni prefijos.":"Pega tu clave en el campo de arriba y pulsa Guardar clave y conectar."})]}),E.jsx("p",{className:"muted",children:"No se descarga ni ejecuta un modelo en tu PC. Los mensajes y el contexto que uses se envían al proveedor elegido. Sus límites y condiciones pueden cambiar; no se promete uso ilimitado ni acceso gratuito a GPT de OpenAI."}),E.jsxs("label",{children:["Modelo para todo el equipo",E.jsxs("select",{"aria-label":"Modelo compartido",value:"",onChange:N=>{N.target.value&&(l(w=>w.map(F=>({...F,model:N.target.value}))),p(null))},children:[E.jsx("option",{value:"",children:"Seleccionar un modelo del catálogo"}),(b?r.status.models:[]).map(N=>E.jsx("option",{children:N},N))]})]}),E.jsxs("details",{children:[E.jsx("summary",{children:"Ajustes avanzados del equipo"}),E.jsx("div",{className:"agent-settings",children:s.map(N=>E.jsxs("article",{children:[E.jsxs("h3",{children:[N.name,E.jsx("small",{children:N.role})]}),E.jsxs("label",{children:["Modelo de ",N.name,E.jsx("input",{"aria-label":"Modelo de "+N.name,value:N.model,maxLength:200,onChange:w=>{l(F=>F.map(B=>B.id===N.id?{...B,model:w.target.value}:B)),p(null)}})]}),E.jsxs("label",{children:["Instrucciones de ",N.name,E.jsx("textarea",{value:N.instructions,maxLength:6e3,onChange:w=>l(F=>F.map(B=>B.id===N.id?{...B,instructions:w.target.value}:B))})]})]},N.id))})]}),E.jsxs("div",{className:"api-config-row",children:[E.jsxs("button",{className:"button primary",onClick:()=>x("save"),children:[E.jsx(Z_,{size:15}),"Guardar configuración"]}),E.jsxs("button",{className:"button secondary",onClick:()=>x("check"),children:[E.jsx(J_,{size:15}),"Actualizar catálogo"]}),E.jsxs("button",{className:"button secondary",onClick:()=>x("test"),children:[E.jsx(mS,{size:15}),"Conectar ",S.name]})]}),d&&E.jsxs("div",{className:"probe-result",role:"status",children:[E.jsx("strong",{children:"Respuesta recibida del proveedor"}),E.jsx("p",{children:d.response}),E.jsxs("small",{children:[d.model," · ",d.latency_ms," ms"]})]}),E.jsx("p",{className:"muted",children:"Para volver a entrar, abre el mismo Codespace y el puerto 8765. No necesitas reinstalar. Los proveedores mantienen su infraestructura; puedes actualizar el catálogo y elegir nuevos modelos. Las correcciones guardadas aportan contexto, sin reentrenar el modelo."}),E.jsxs("label",{className:"checkbox",children:[E.jsx("input",{type:"checkbox",checked:r.reduced,onChange:N=>r.onReduced(N.target.checked)}),"Reducir movimiento"]})]})})}async function bn(r,e,i,s){const l=await fetch("/api"+r,{method:i||(e?"POST":"GET"),headers:e instanceof FormData?{}:{"Content-Type":"application/json"},body:e instanceof FormData?e:e?JSON.stringify(e):void 0,signal:s}),c=await l.json();if(!l.ok)throw Error(typeof c.detail=="string"?c.detail:JSON.stringify(c.detail||c));return c}const W_=[["office","Oficina",$y],["projects","Proyectos",Q_],["tasks","Tareas",Zh],["data","Datos",uS],["deliverables","Entregables",K_],["settings","Configuración",LS]];function w2(){var Tl;const[r,e]=Ne.useState("office"),[i,s]=Ne.useState([]),[l,c]=Ne.useState(""),[h,d]=Ne.useState([]),[p,m]=Ne.useState("anto"),[_,v]=Ne.useState(!1),[y,S]=Ne.useState("http://127.0.0.1:11434"),[b,U]=Ne.useState("gemini"),[x,g]=Ne.useState("http://127.0.0.1:1234/v1"),[z,N]=Ne.useState({connected:!1,models:[]}),[w,F]=Ne.useState({}),[B,G]=Ne.useState([]),[q,L]=Ne.useState([]),[R,j]=Ne.useState([]),[ae,re]=Ne.useState(""),[fe,me]=Ne.useState(null),[H,K]=Ne.useState([]),[Z,Te]=Ne.useState([]),[P,ne]=Ne.useState(""),[Se,Ae]=Ne.useState(""),[ee,ge]=Ne.useState(!1),[xe,De]=Ne.useState(!1),[Le,ut]=Ne.useState(!1),[Ke,ft]=Ne.useState(""),[zt,nt]=Ne.useState(""),[k,on]=Ne.useState(!0),[pt,it]=Ne.useState(!0),[Ye,Ut]=Ne.useState(1),[he,C]=Ne.useState(0),[T,Y]=Ne.useState(matchMedia("(prefers-reduced-motion: reduce)").matches),[pe,Ee]=Ne.useState(""),[I,Ue]=Ne.useState(""),[Ce,je]=Ne.useState(""),[Qe,we]=Ne.useState(""),[He,Je]=Ne.useState("sum"),[qe,Ve]=Ne.useState(!1),[ot,at]=Ne.useState(""),[wt,X]=Ne.useState(""),[Oe,de]=Ne.useState(""),[ve,Ge]=Ne.useState(""),[Be,lt]=Ne.useState("Unidades"),[Ot,$t]=Ne.useState("bar"),[Nt,jn]=Ne.useState(""),[pn,mn]=Ne.useState(","),[xn,Xn]=Ne.useState("utf-8-sig"),[Ri,ga]=Ne.useState([]),[_a,fi]=Ne.useState(null),[ta,hi]=Ne.useState(null),[di,ni]=Ne.useState(""),[va,Hi]=Ne.useState({}),[Gt,As]=Ne.useState(!1),[or,pi]=Ne.useState("waiting"),[D,Q]=Ne.useState(0),le=Ne.useRef(null),ce=Ne.useRef(null),J=Ne.useRef(null),be=Ne.useRef(0),ze=Ne.useRef(0),Pe=Ne.useRef(!1),Xe=Ne.useRef(0),Ze=Ne.useRef({project:l,agent:p});Ze.current={project:l,agent:p};const tt=Ne.useRef(null),Ie=h.find(O=>O.id===p),mt=i.find(O=>O.id===l),bt=Z[Z.length-1],sn=(bt==null?void 0:bt.role)==="assistant"&&bt.status==="complete",vt=w,St=z.provider==="groq"?"Groq":"Gemini";function $e(O,Re=!1){N(Fe=>({...O,inference_verified:!!O.inference_verified||!!(!Re&&Fe.inference_verified&&O.connected&&Fe.provider===O.provider&&Fe.endpoint===O.endpoint)})),v(O.connected)}function en(O){d(O.agents),U(O.provider),S(O.ollama_url),g(O.openai_url)}function Dt(O=!1){var Fe,ht;ze.current++,(Fe=ce.current)==null||Fe.abort(),ce.current=null;const Re=Pe.current;(ht=le.current)==null||ht.abort(),le.current=null,Pe.current=!1,De(!1),Te(Tt=>Tt.map(Qt=>Qt.status==="streaming"?{...Qt,status:"cancelled",persisted:!1}:Qt)),O&&Re&&nt("Conversación cancelada. La respuesta parcial no se guarda como completada.")}function Tn(O,Re){Ze.current.project===O&&Ze.current.agent===Re||(be.current++,Dt(!0),Ze.current={project:O,agent:Re},Te([]),ga([]),fi(null),hi(null),ni(""),ut(!0),c(O),m(Re))}function mi(O){Tn(O,Ze.current.agent)}function Vt(O){Tn(Ze.current.project,O)}async function An(O){ft(""),ge(!0);try{await O()}catch(Re){Re.name!=="AbortError"&&ft(Re.message)}finally{ge(!1)}}async function Lt(O=l){var ht;if(!O)return;const Re=++Xe.current;(ht=J.current)==null||ht.abort();const Fe=new AbortController;J.current=Fe;try{const[Tt,Qt,Cn]=await Promise.all([bn("/runs?project="+O,void 0,void 0,Fe.signal),bn("/files?project="+O,void 0,void 0,Fe.signal),bn("/artifacts?project="+O,void 0,void 0,Fe.signal)]),ja=await Promise.all(Tt.map(xa=>bn("/runs/"+xa.id,void 0,void 0,Fe.signal)));if(Fe.signal.aborted||Re!==Xe.current||Ze.current.project!==O)return;L(ja),j(Qt),K(Cn)}catch(Tt){if(Tt.name!=="AbortError")throw Tt}}async function Rn(){if(!Gt){As(!0),ft("");try{const O=await bn("/connect",{provider:b,agent:p});en(O.settings),$e(O.status),nt("Listo. Ya puedes conversar con tu equipo.")}catch(O){const Re=O.message;ft(Re),N(Fe=>({...Fe,inference_verified:!1,error:Re}))}finally{As(!1)}}}async function cn(){const O=await bn("/models");$e(O)}Ne.useEffect(()=>{let O=!0;return ge(!0),(async()=>{var Re;try{const[Fe,ht]=await Promise.all([bn("/projects"),bn("/settings")]);if(!O)return;s(Fe),en(ht),mi(((Re=Fe[0])==null?void 0:Re.id)||""),await cn()}catch(Fe){O&&ft(Fe.message)}finally{O&&ge(!1)}})(),()=>{O=!1}},[]),Ne.useEffect(()=>{if(!l)return;let O=!0;re(""),me(null),G([]),F({}),Hi({}),Ue(""),An(()=>Lt(l));const Re=new EventSource("/api/events?project="+l);Re.onmessage=ht=>{if(!(!O||Ze.current.project!==l))try{const Tt=JSON.parse(ht.data),Qt=JSON.parse(Tt.payload);Tt.agent&&(Qt.agent_status||Qt.status)&&F(Cn=>({...Cn,[Tt.agent]:Qt.agent_status||Qt.status})),Tt.kind==="task"&&Tt.run&&Qt.logical_id&&Qt.status&&Hi(Cn=>({...Cn,[Tt.run+":"+Qt.logical_id]:Qt.status})),G(Cn=>[...Cn,Tt].slice(-100)),["run","file","plan"].includes(Tt.kind)&&Lt(l).catch(Cn=>{O&&ft(Cn.message)})}catch{ft("No se pudo interpretar un evento del servidor.")}};const Fe=setInterval(()=>cn().catch(()=>v(!1)),15e3);return()=>{var ht;O=!1,Re.close(),clearInterval(Fe),(ht=J.current)==null||ht.abort()}},[l]),Ne.useEffect(()=>{var ht;if(!l)return;const O=be.current,Re=new AbortController;(ht=ce.current)==null||ht.abort(),ce.current=Re,ut(!0);const Fe="?project="+encodeURIComponent(l)+"&agent="+encodeURIComponent(p);return Promise.all([bn("/messages"+Fe,void 0,void 0,Re.signal),bn("/feedback"+Fe,void 0,void 0,Re.signal)]).then(([Tt,Qt])=>{Re.signal.aborted||O!==be.current||Pe.current||(Te(Tt.map(Cn=>({...Cn,key:Cn.id,persisted:!0,status:"complete"}))),ga(Qt))}).catch(Tt=>{Tt.name!=="AbortError"&&O===be.current&&ft(Tt.message)}).finally(()=>{!Re.signal.aborted&&O===be.current&&ut(!1)}),()=>Re.abort()},[l,p]),Ne.useEffect(()=>{if(!xe)return;const O=Date.now();Q(0);const Re=setInterval(()=>Q(Math.floor((Date.now()-O)/1e3)),1e3);return()=>clearInterval(Re)},[xe]),Ne.useEffect(()=>{var O;(O=tt.current)==null||O.scrollIntoView({behavior:T?"instant":"smooth",block:"nearest"})},[Z]),Ne.useEffect(()=>()=>{var O,Re,Fe;(O=le.current)==null||O.abort(),(Re=ce.current)==null||Re.abort(),(Fe=J.current)==null||Fe.abort()},[]);async function gn(O){const Re=Ze.current.project,Fe=await bn("/files/"+O+"/preview");Ze.current.project===Re&&(re(O),me(Fe),jn(Fe.sheets[0]||""),je(""),we(""))}async function yn(O){const Re=l;await An(async()=>{const Fe=new FormData;Fe.append("project",Re),Fe.append("file",O);const ht=await bn("/files",Fe);Ze.current.project===Re&&(await Lt(Re),await gn(ht.id),e("data"),nt("Archivo original conservado. Revisa hoja, columnas y valores faltantes."))})}async function Jn(O=P){var Gi,ur;if(O=O.trim(),!O||!l)return;if(Gt){nt("Estoy conectando tu equipo. Tu mensaje permanece escrito; envíalo cuando termine.");return}if(Pe.current){nt("La respuesta sigue en curso. Tu nuevo mensaje permanece escrito; envíalo cuando termine o pulsa Detener.");return}if(Le){nt("Espera a que termine de cargar tu conversación.");return}if(!((Gi=h.find(un=>un.id===p))!=null&&Gi.model)){ft("Selecciona un modelo para este agente en Configuración antes de conversar.");return}pi("waiting"),nt(""),(ur=ce.current)==null||ur.abort(),ne(""),ft(""),De(!0),Pe.current=!0;const Re=++ze.current,Fe=be.current,ht=()=>Re===ze.current&&Fe===be.current,Tt=crypto.randomUUID(),Qt=crypto.randomUUID(),Cn=new AbortController;le.current=Cn;const ja=h.find(un=>un.id===p),xa={project:l,agent:p,content:O,run:I||null};Te(un=>[...un,{id:Tt,key:Tt,role:"user",content:O,status:"complete"},{id:Qt,key:Qt,role:"assistant",content:"",model:ja==null?void 0:ja.model,provider:b,status:"streaming",persisted:!1}]);function gi(un){ht()&&Te(wi=>wi.map(ii=>ii.key===Qt?un(ii):ii))}let cr=!1,Xa=!1;try{const un=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(xa),signal:Cn.signal});if(!un.ok){const fr=await un.json();throw Error(fr.detail||"No se pudo iniciar la conversación")}if(!un.body)throw Error("El servidor no abrió el flujo de respuesta.");const wi=un.body.getReader(),ii=new TextDecoder;let na="";for(;;){const{done:fr,value:qn}=await wi.read();if(fr)break;if(!ht()){await wi.cancel();return}na+=ii.decode(qn,{stream:!0});let Vi;for(;(Vi=na.indexOf(`

`))>=0;){const Cs=na.slice(0,Vi);if(na=na.slice(Vi+2),!Cs.startsWith("data: "))continue;const wn=JSON.parse(Cs.slice(6));if(wn.error)throw Error(wn.error);if((wn.status==="waiting"||wn.status==="generating")&&ht()&&pi(wn.status),typeof wn.token=="string"&&wn.token&&(Xa=!0,ht()&&pi("generating"),gi(ya=>({...ya,content:ya.content+wn.token}))),wn.done){if(!Xa)throw Error("El proveedor terminó sin texto.");cr=!0,gi(ya=>({...ya,id:wn.message_id||ya.id,persisted:!!wn.message_id,status:"complete",model:wn.model||ya.model,provider:wn.provider||ya.provider}))}}}if(!cr)throw Error("La conexión terminó antes de confirmar la respuesta. El texto parcial no está guardado como respuesta completa.")}catch(un){if(ht()){const wi=un.name==="AbortError";wi||N(ii=>({...ii,inference_verified:!1,error:un.message})),gi(ii=>({...ii,status:wi?"cancelled":"error",persisted:!1,error:wi?void 0:un.message})),wi?nt("Conversación cancelada. La respuesta parcial no se guarda como completada."):ft(un.message)}}finally{ht()&&(De(!1),Pe.current=!1,le.current=null)}}async function Ci(O,Re){if(!O.persisted||O.status!=="complete")return;const Fe=be.current;fi(O.id),ft("");try{const ht=await bn("/feedback",{message_id:O.id,rating:Re,...Re==="correction"?{correction:di.trim()}:{}});if(Fe!==be.current)return;ga(Tt=>[ht,...Tt.filter(Qt=>Qt.message_id!==O.id)]),hi(null),ni(""),nt(Re==="correction"?"Corrección guardada para futuras conversaciones de este agente. Mejora contexto, no reentrena el modelo.":"Valoración guardada.")}catch(ht){Fe===be.current&&ft(ht.message)}finally{Fe===be.current&&fi(null)}}async function El(O){const Re=be.current;fi(O.message_id);try{if(await bn("/feedback/"+O.id,void 0,"DELETE"),Re!==be.current)return;ga(Fe=>Fe.filter(ht=>ht.id!==O.id)),nt("Corrección eliminada de la memoria de este agente.")}catch(Fe){Re===be.current&&ft(Fe.message)}finally{Re===be.current&&fi(null)}}function bl(O,Re){var ht,Tt;const Fe=(Tt=(ht=O.tasks)==null?void 0:ht.find(Qt=>{try{return JSON.parse(Qt.payload).id===Re}catch{return!1}}))==null?void 0:Tt.status;return Fe&&["Completado","Fallido","Cancelado","Interrumpido"].includes(Fe)?Fe:va[O.id+":"+Re]||Fe||"Estado no disponible"}async function lr(O=!1){const Re=l;await An(async()=>{let Fe={project:Re,request:Se||"Analizar las operaciones seleccionadas",file:ae||null};O&&(Fe.analysis={metric:qe?"ingresos":Ce,group_by:Qe?[Qe]:[],aggregation:He,derived:qe?{name:"ingresos",left:ot,right:wt,op:"multiply"}:null,filters:Oe?[{column:Oe,op:"eq",value:ve}]:[],sort:"descending",chart:Ot,title:Se||"Análisis de datos",unit:Be});const ht=await bn(O?"/tools/plan":"/plans",Fe);Ze.current.project===Re&&(Ue(ht.id),await Lt(Re),e("tasks"),nt("Plan preparado. Revisa los argumentos antes de aprobar."))})}const Rs=E.jsxs(E.Fragment,{children:[E.jsx("option",{value:"",children:"Seleccionar columna"}),fe==null?void 0:fe.columns.map(O=>E.jsx("option",{children:O.name},O.name))]});return E.jsxs("div",{className:"app",children:[E.jsxs("aside",{className:"sidebar",children:[E.jsx("a",{className:"brandmark",href:"#",onClick:()=>e("office"),"aria-label":"Oficina",children:E.jsx(mh,{size:27})}),E.jsx("div",{className:"nav-items",children:W_.map(([O,Re,Fe])=>E.jsxs("button",{title:Re,className:r===O?"nav active":"nav",onClick:()=>e(O),children:[E.jsx(Fe,{size:21}),E.jsx("span",{children:Re})]},O))}),E.jsx("button",{className:"sidebar-bottom",onClick:()=>e("settings"),title:"Configuración",children:"AN"})]}),E.jsxs("div",{className:"workspace",children:[E.jsxs("header",{className:"topbar",children:[E.jsxs("div",{className:"wordmark",children:["STUDIO ",E.jsx("span",{children:"DE"})," ANTO",E.jsx("small",{children:"UN ESPACIO PARA CREAR EN EQUIPO"})]}),E.jsx("div",{className:"header-divider"}),E.jsx("select",{className:"project-select",value:l,onChange:O=>mi(O.target.value),"aria-label":"Proyecto activo",children:i.map(O=>E.jsx("option",{value:O.id,children:O.name},O.id))}),E.jsx("span",{className:"local-tag",children:"ESTUDIO"}),E.jsxs("div",{className:"top-right",children:[E.jsxs("button",{className:"connection "+(z.inference_verified?"online":""),disabled:Gt,onClick:()=>z.inference_verified?e("settings"):Rn(),children:[E.jsx("i",{}),Gt?"Conectando…":z.inference_verified?St+" · listo":"Conectar "+St]}),E.jsx("span",{className:"avatar small",children:"AN"})]})]}),E.jsxs("main",{children:[Ke&&E.jsxs("div",{role:"alert",className:"alert",children:[E.jsx(FS,{size:17}),E.jsx("span",{children:Ke}),E.jsx("button",{onClick:()=>ft(""),"aria-label":"Cerrar error",children:E.jsx(_h,{size:16})})]}),zt&&E.jsxs("div",{role:"status",className:"notice",children:[E.jsx(lS,{size:16}),zt,E.jsx("button",{onClick:()=>nt(""),"aria-label":"Cerrar aviso",children:E.jsx(_h,{size:15})})]}),E.jsxs("div",{className:"page-heading",children:[E.jsxs("div",{children:[E.jsx("div",{className:"eyebrow",children:"TU EQUIPO, EN UN MISMO LUGAR"}),E.jsxs("h1",{children:[(Tl=W_.find(O=>O[0]===r))==null?void 0:Tl[1],E.jsx("span",{className:"heading-dot"})]}),E.jsx("p",{children:r==="office"?"Las buenas ideas se construyen juntos. Dale vida a la próxima.":r==="data"?"De los archivos a la evidencia. Tú eliges qué calcular.":r==="tasks"?"Un objetivo compartido, pasos claros y resultados verificables.":r==="settings"?"Tus modelos, tus datos y tu equipo en el entorno que elijas.":r==="projects"?"Un espacio propio para cada idea.":"El trabajo de tu equipo, listo para llevar."})]}),E.jsxs("div",{className:"heading-actions",children:[E.jsxs("button",{className:"button secondary",onClick:()=>{it(!pt),e("office")},children:[E.jsx(O0,{size:16}),"Actividad"]}),E.jsxs("button",{className:"button primary",onClick:()=>e("projects"),children:[E.jsx(Rc,{size:17}),"Nuevo proyecto"]})]})]}),r==="office"&&E.jsxs("div",{className:"office-layout "+(k?"":"no-panel"),children:[E.jsxs("section",{className:"office-card",children:[E.jsxs("div",{className:"office-bar",children:[E.jsxs("div",{children:[E.jsx("span",{className:"live-dot"}),"EL ESTUDIO ",E.jsx("span",{className:"subtle",children:"/"}),E.jsx("span",{className:"office-name",children:mt==null?void 0:mt.name})]}),E.jsxs("span",{className:"office-badge",children:["6 agentes · ",Object.values(vt).filter(O=>O==="En ejecución").length," trabajando"]}),E.jsx("button",{className:"icon-button",onClick:()=>on(!k),title:"Mostrar u ocultar conversación",children:E.jsx(CS,{size:18})})]}),E.jsxs("div",{className:"scene-wrap",children:[h.length===6&&E.jsx(R2,{agents:h,selected:p,onSelect:O=>{Vt(O),on(!0)},states:vt,reduced:T,zoom:Ye,reset:he}),E.jsxs("div",{className:"scene-caption",children:[E.jsx("span",{className:"scene-caption-icon",children:E.jsx(gh,{size:16})}),E.jsxs("div",{children:["Espacio para grandes ideas",E.jsx("small",{children:"Selecciona un agente para empezar a colaborar"})]})]}),E.jsxs("div",{className:"scene-controls",children:[E.jsx("button",{title:"Alejar",onClick:()=>Ut(Math.max(.6,Ye-.1)),children:E.jsx(I0,{size:15})}),E.jsxs("span",{children:[Math.round(Ye*100),"%"]}),E.jsx("button",{title:"Acercar",onClick:()=>Ut(Math.min(1.8,Ye+.1)),children:E.jsx(Rc,{size:15})}),E.jsx("b",{}),E.jsx("button",{title:"Restablecer vista",onClick:()=>{Ut(1),C(he+1)},children:E.jsx(ES,{size:15})})]}),E.jsxs("div",{className:"pan-help",children:[E.jsx(AS,{size:13}),"Arrastra para girar · clic en suelo para mover · rueda para zoom"]})]}),E.jsxs("div",{className:"team-strip",children:[E.jsxs("div",{className:"team-label",children:["EN EL ESTUDIO",E.jsx("small",{children:"Tu equipo de agentes"})]}),h.map(O=>E.jsxs("button",{className:"team-person "+(p===O.id?"chosen":""),onClick:()=>{Vt(O.id),on(!0)},children:[E.jsxs("span",{className:"agent-avatar",style:{background:O.color+"35",color:O.color},children:[E.jsx("span",{className:"mini-head"}),E.jsx("span",{className:"mini-body"})]}),E.jsxs("span",{children:[E.jsx("strong",{children:O.name}),E.jsx("small",{children:O.role})]}),E.jsx("i",{className:vt[O.id]==="En ejecución"?"working":""})]},O.id))]})]}),k&&E.jsxs("aside",{className:"chat-panel",children:[E.jsxs("div",{className:"panel-title",children:[E.jsx("span",{children:"Conversa con tu equipo"}),E.jsx("button",{onClick:()=>on(!1),title:"Cerrar conversación",children:E.jsx(_h,{size:17})})]}),E.jsxs("div",{className:"agent-intro",children:[E.jsxs("span",{className:"agent-avatar large",style:{background:((Ie==null?void 0:Ie.color)||"#aaa")+"30",color:Ie==null?void 0:Ie.color},children:[E.jsx("span",{className:"mini-head"}),E.jsx("span",{className:"mini-body"})]}),E.jsxs("div",{children:[E.jsxs("h3",{children:[Ie==null?void 0:Ie.name,E.jsx("span",{className:"role-badge",children:Ie==null?void 0:Ie.role})]}),E.jsxs("p",{children:[E.jsx("i",{className:"live-dot"}),vt[p]||"Disponible"]})]})]}),E.jsxs("div",{className:"model-line",children:[E.jsx(mh,{size:13}),(Ie==null?void 0:Ie.model)||"Sin modelo asignado",E.jsxs("button",{onClick:()=>e("settings"),children:["Configurar",E.jsx(sl,{size:12})]})]}),E.jsxs("div",{className:"chat-body",children:[!Z.length&&E.jsxs("div",{className:"chat-empty",children:[E.jsx("span",{className:"empty-spark",children:E.jsx(gh,{size:27})}),E.jsx("h3",{children:"¿Qué tienes en mente?"}),E.jsxs("p",{children:["Cuéntame tu idea o comparte un archivo.",E.jsx("br",{}),"Daremos el siguiente paso juntos."]}),E.jsx("div",{className:"truth-tag",children:_&&(Ie!=null&&Ie.model)?"Conversación mediante API en la nube":"Conecta un modelo para conversar"}),E.jsx("p",{children:"Conversa, resuelve dudas o pide ayuda para escribir. No necesitas subir un archivo."}),E.jsxs("button",{className:"suggestion",onClick:()=>ne("Hola, ¿en qué puedes ayudarme?"),children:["Empezar una conversación",E.jsx(sl,{size:14})]}),E.jsxs("button",{className:"suggestion",onClick:()=>e("data"),children:["Explorar mis datos",E.jsx(sl,{size:14})]})]}),Le&&E.jsx("p",{className:"quiet",role:"status",children:"Cargando historial…"}),Z.map(O=>{const Re=Ri.find(Fe=>Fe.message_id===O.id);return E.jsxs("div",{className:"message "+O.role,children:[E.jsxs("small",{children:[O.role==="user"?"TÚ":Ie==null?void 0:Ie.name,O.model?" · "+O.model:"",O.provider?" · "+O.provider:""]}),E.jsx("p",{children:O.content||(O.status==="streaming"?"Esperando al modelo…":O.error||"Sin respuesta recibida")}),O.status==="cancelled"&&E.jsx("small",{children:"Respuesta parcial cancelada · sin guardar"}),O.status==="error"&&E.jsxs(E.Fragment,{children:[E.jsx("small",{children:"Respuesta incompleta o fallida · sin guardar"}),O.content&&O.error&&E.jsx("p",{className:"chat-error",role:"status",children:O.error}),E.jsx("button",{className:"retry",onClick:()=>{e("settings"),ft("")},children:"Revisar conexión"})]}),O.role==="assistant"&&O.persisted&&O.status==="complete"&&E.jsxs("div",{className:"feedback-toolbar",children:[E.jsx("button",{className:"button secondary","aria-pressed":(Re==null?void 0:Re.rating)==="useful",disabled:_a===O.id,onClick:()=>Ci(O,"useful"),children:"Útil"}),E.jsx("button",{className:"button secondary",disabled:_a===O.id,onClick:()=>{hi(O.id),ni((Re==null?void 0:Re.correction)||"")},children:"Guardar corrección"}),(Re==null?void 0:Re.rating)==="correction"&&E.jsx("small",{children:"Corrección guardada"})]}),ta===O.id&&O.persisted&&E.jsxs("form",{className:"feedback-form",onSubmit:Fe=>{Fe.preventDefault(),Ci(O,"correction")},children:[E.jsxs("label",{children:["Corrección para la respuesta",E.jsx("textarea",{"aria-label":"Corrección para la respuesta",value:di,onChange:Fe=>ni(Fe.target.value),minLength:3,maxLength:2e3,required:!0,placeholder:"Escribe la información correcta que debe recordar este agente…"})]}),E.jsx("p",{children:"Se usará como contexto del mismo proyecto y agente. No reentrena el modelo."}),E.jsxs("div",{children:[E.jsx("button",{className:"button primary",disabled:_a===O.id||di.trim().length<3,children:"Confirmar corrección"}),E.jsx("button",{className:"button secondary",type:"button",onClick:()=>hi(null),children:"Cancelar"})]})]})]},O.key||O.id)}),E.jsxs("details",{className:"feedback-memory",children:[E.jsxs("summary",{children:["Correcciones guardadas (",Ri.filter(O=>O.rating==="correction").length,")"]}),E.jsx("p",{children:"Mejora contexto, no reentrena el modelo. Puedes revisar y eliminar cada corrección."}),Ri.filter(O=>O.rating==="correction").map(O=>E.jsxs("div",{className:"feedback-entry",children:[E.jsx("p",{children:O.correction}),E.jsx("button",{className:"button secondary",disabled:_a===O.message_id,onClick:()=>El(O),children:"Eliminar corrección"})]},O.id)),!Ri.some(O=>O.rating==="correction")&&E.jsx("p",{children:"Aún no hay correcciones guardadas para este agente y proyecto."})]}),E.jsx("div",{ref:tt})]}),E.jsxs("div",{className:"chat-compose",children:[(!z.inference_verified||!_)&&E.jsxs("div",{className:"chat-connection-error",role:"status",children:[E.jsx("strong",{children:"Conecta tu equipo para conversar"}),z.error&&E.jsx("p",{children:z.error}),E.jsx("button",{className:"button primary",disabled:Gt,onClick:Rn,children:Gt?"Conectando…":b==="groq"?"Conectar Groq":"Conectar Gemini"}),E.jsx("button",{className:"button secondary",onClick:()=>e("settings"),children:"Añadir mi clave"})]}),xe&&E.jsxs("div",{className:"chat-progress",children:[E.jsx(z0,{size:14,className:"spin"}),E.jsx("span",{role:"status",children:or==="generating"?"Recibiendo respuesta…":"Esperando respuesta del modelo…"}),E.jsxs("time",{"aria-label":"Tiempo transcurrido",children:[Math.floor(D/60),":",String(D%60).padStart(2,"0")]})]}),q.length>0&&E.jsxs("select",{value:I,onChange:O=>Ue(O.target.value),"aria-label":"Contexto de ejecución",children:[E.jsx("option",{value:"",children:"Sin contexto de ejecución"}),q.map(O=>E.jsx("option",{value:O.id,children:O.request.slice(0,40)},O.id))]}),E.jsx("textarea",{value:P,maxLength:12e3,onChange:O=>ne(O.target.value),placeholder:"Pregunta o pide algo a "+((Ie==null?void 0:Ie.name)||"tu equipo")+"…","aria-label":"Mensaje",onKeyDown:O=>{O.key==="Enter"&&!O.shiftKey&&(O.preventDefault(),Jn())}}),E.jsxs("div",{className:"compose-tools",children:[E.jsxs("label",{title:"Subir CSV o Excel",children:[E.jsx(Rc,{size:18}),E.jsx("input",{type:"file",accept:".csv,.xlsx",onChange:O=>{var Re;return((Re=O.target.files)==null?void 0:Re[0])&&yn(O.target.files[0])}})]}),E.jsx("span",{children:"Enter para enviar · Shift+Enter para otra línea"}),xe?E.jsx("button",{className:"send",title:"Cancelar conversación",onClick:()=>Dt(!0),children:E.jsx(F0,{size:14})}):E.jsx("button",{className:"send",title:"Enviar",disabled:!P.trim()||Le||Gt,onClick:()=>Jn(),children:E.jsx(nS,{size:18})})]}),E.jsx("p",{className:"conversation-hint",children:"El historial se conserva por proyecto y agente; la respuesta usa el contexto reciente."}),E.jsxs("button",{className:"retry",onClick:()=>Jn("Continúa desde tu respuesta anterior sin repetirla. Si ya terminaste, propón un siguiente paso útil para mi solicitud."),disabled:xe||Gt||Le||!sn,children:[E.jsx(B0,{size:11}),"Continuar conversación"]}),E.jsxs("button",{className:"retry",onClick:()=>{const O=[...Z].reverse().find(Re=>Re.role==="user");O&&Jn(O.content)},disabled:xe||Gt||Le||!Z.some(O=>O.role==="user"),children:[E.jsx(J_,{size:11}),"Reintentar último mensaje"]})]}),E.jsxs("div",{className:"privacy",children:[E.jsx(yS,{size:12}),"IA en la nube · cuotas del proveedor."]})]}),pt&&E.jsxs("section",{className:"activity-panel",children:[E.jsxs("div",{className:"activity-title",children:[E.jsx(O0,{size:15}),E.jsx("strong",{children:"Actividad del equipo"}),E.jsx("span",{children:"EN VIVO"}),E.jsx("button",{onClick:()=>it(!1),title:"Ocultar actividad",children:E.jsx(I0,{size:16})})]}),E.jsx("div",{className:"activity-entries",children:B.length?B.slice(-4).reverse().map(O=>{var Fe;const Re=JSON.parse(O.payload);return E.jsxs("div",{children:[E.jsx("span",{className:"event-dot"}),E.jsx("time",{children:new Date(O.created).toLocaleTimeString("es-PE",{hour:"2-digit",minute:"2-digit"})}),E.jsx("strong",{children:((Fe=O.agent)==null?void 0:Fe.toUpperCase())||"ESTUDIO"}),E.jsxs("span",{children:[Re.task||Re.objective||Re.name||Re.message||"Conversación",Re.status?" · "+Re.status:""]})]},O.seq)}):E.jsx("p",{className:"quiet",children:"Aquí aparecerán las tareas y resultados reales de tu equipo."})})]})]}),r==="projects"&&E.jsxs("section",{className:"content-card",children:[E.jsxs("div",{className:"section-title",children:[E.jsx("h2",{children:"Tus proyectos"}),E.jsx(Q_,{size:20})]}),E.jsxs("form",{className:"new-project",onSubmit:O=>{O.preventDefault(),An(async()=>{const Re=await bn("/projects",{name:pe});s([...i,Re]),mi(Re.id),Ee(""),e("office")})},children:[E.jsx("input",{placeholder:"Nombre de tu próximo proyecto",value:pe,onChange:O=>Ee(O.target.value),maxLength:120,required:!0}),E.jsxs("button",{className:"button primary",disabled:ee,children:[E.jsx(Rc,{size:16}),"Crear proyecto"]})]}),E.jsx("div",{className:"project-grid",children:i.map(O=>E.jsxs("button",{className:"project-card "+(O.id===l?"current":""),onClick:()=>{mi(O.id),e("office")},children:[E.jsx("span",{className:"project-art",children:E.jsx(mh,{size:42})}),E.jsx("h3",{children:O.name}),E.jsx("p",{children:O.id===l?"Proyecto activo":"Abrir espacio de trabajo"}),E.jsx(sl,{size:19})]},O.id))})]}),r==="data"&&E.jsxs("div",{className:"data-layout",children:[E.jsxs("section",{className:"content-card",children:[E.jsxs("div",{className:"section-title",children:[E.jsx("h2",{children:"Biblioteca de datos"}),E.jsx("span",{children:"CSV · XLSX · hasta 20 MB"})]}),E.jsxs("label",{className:"dropzone",children:[E.jsx(IS,{size:26}),E.jsx("strong",{children:"Trae tus datos al estudio"}),E.jsx("span",{children:"Selecciona un archivo CSV o Excel"}),E.jsx("input",{type:"file",accept:".csv,.xlsx",disabled:ee,onChange:O=>{var Re;return((Re=O.target.files)==null?void 0:Re[0])&&yn(O.target.files[0])}})]}),E.jsx("div",{className:"file-list",children:R.map(O=>E.jsxs("button",{className:ae===O.id?"selected":"",onClick:()=>An(()=>gn(O.id)),children:[E.jsx(P0,{size:18}),O.name,E.jsx(rS,{size:16})]},O.id))}),ae&&E.jsxs("div",{className:"import-options",children:[fe!=null&&fe.sheets.length?E.jsxs("label",{children:["Hoja",E.jsx("select",{value:Nt,onChange:O=>jn(O.target.value),children:fe.sheets.map(O=>E.jsx("option",{children:O},O))})]}):E.jsxs(E.Fragment,{children:[E.jsxs("label",{children:["Separador",E.jsxs("select",{value:pn,onChange:O=>mn(O.target.value),children:[E.jsx("option",{value:",",children:"Coma"}),E.jsx("option",{value:";",children:"Punto y coma"}),E.jsx("option",{value:"	",children:"Tabulación"}),E.jsx("option",{value:"|",children:"Barra"})]})]}),E.jsxs("label",{children:["Codificación",E.jsx("select",{value:xn,onChange:O=>Xn(O.target.value),children:["utf-8-sig","utf-8","latin-1","cp1252"].map(O=>E.jsx("option",{children:O},O))})]})]}),E.jsx("button",{className:"button secondary",onClick:()=>An(async()=>{const O=await bn("/files/"+ae+"/options",{sheet:Nt||null,separator:pn,encoding:xn},"PUT");me({...O,sheets:(fe==null?void 0:fe.sheets)||[]})}),children:"Aplicar lectura"})]}),fe&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"data-stats",children:[E.jsxs("span",{children:[E.jsx("strong",{children:fe.rows}),"filas"]}),E.jsxs("span",{children:[E.jsx("strong",{children:fe.columns.length}),"columnas"]}),E.jsxs("span",{children:[E.jsx("strong",{children:fe.duplicates}),"duplicados conservados"]}),E.jsxs("span",{children:[E.jsx("strong",{children:fe.columns.reduce((O,Re)=>O+Re.missing,0)}),"valores faltantes"]})]}),E.jsx("div",{className:"table-scroll",children:E.jsxs("table",{children:[E.jsx("thead",{children:E.jsx("tr",{children:fe.columns.map(O=>E.jsxs("th",{children:[O.name,E.jsxs("small",{children:[O.type," · ",O.missing," faltantes"]})]},O.name))})}),E.jsx("tbody",{children:fe.preview.map((O,Re)=>E.jsx("tr",{children:fe.columns.map(Fe=>E.jsx("td",{children:O[Fe.name]===null?E.jsx("em",{children:"Vacío"}):String(O[Fe.name])},Fe.name))},Re))})]})}),E.jsx("p",{className:"caption",children:"Vista previa de hasta 12 filas. El original permanece intacto."})]})]}),E.jsxs("section",{className:"content-card tool-card",children:[E.jsx("div",{className:"eyebrow",children:"SIN MODELO NECESARIO"}),E.jsx("h2",{children:"Modo herramientas"}),E.jsx("p",{className:"muted",children:"Operaciones explícitas, números calculados por Python y revisión independiente."}),E.jsxs("label",{children:["Objetivo",E.jsx("textarea",{value:Se,onChange:O=>Ae(O.target.value),placeholder:"¿Qué quieres analizar?"})]}),E.jsxs("label",{children:["Agrupar por",E.jsx("select",{"aria-label":"Agrupar por",value:Qe,onChange:O=>we(O.target.value),children:Rs})]}),E.jsxs("label",{className:"checkbox",children:[E.jsx("input",{type:"checkbox",checked:qe,onChange:O=>Ve(O.target.checked)}),"Calcular ingresos = cantidad × precio"]}),qe?E.jsxs("div",{className:"two-col",children:[E.jsxs("label",{children:["Cantidad",E.jsx("select",{"aria-label":"Cantidad",value:ot,onChange:O=>at(O.target.value),children:Rs})]}),E.jsxs("label",{children:["Precio",E.jsx("select",{"aria-label":"Precio",value:wt,onChange:O=>X(O.target.value),children:Rs})]})]}):E.jsxs("label",{children:["Métrica",E.jsx("select",{"aria-label":"Métrica",value:Ce,onChange:O=>je(O.target.value),children:Rs})]}),E.jsxs("div",{className:"two-col",children:[E.jsxs("label",{children:["Operación",E.jsx("select",{value:He,onChange:O=>Je(O.target.value),children:[["sum","Suma"],["mean","Media"],["median","Mediana"],["min","Mínimo"],["max","Máximo"],["count","Conteo"]].map(([O,Re])=>E.jsx("option",{value:O,children:Re},O))})]}),E.jsxs("label",{children:["Unidad",E.jsx("input",{value:Be,onChange:O=>lt(O.target.value)})]})]}),E.jsxs("label",{children:["Filtro opcional · columna",E.jsx("select",{value:Oe,onChange:O=>de(O.target.value),children:Rs})]}),Oe&&E.jsxs("label",{children:["Igual a",E.jsx("input",{value:ve,onChange:O=>Ge(O.target.value)})]}),E.jsxs("label",{children:["Gráfico",E.jsxs("select",{value:Ot,onChange:O=>$t(O.target.value),children:[E.jsx("option",{value:"bar",children:"Barras"}),E.jsx("option",{value:"line",children:"Líneas (confirma orden temporal)"}),E.jsx("option",{value:"none",children:"Sin gráfico"})]})]}),E.jsxs("button",{className:"button primary full",disabled:ee||!ae||!qe&&!Ce||qe&&(!ot||!wt),onClick:()=>lr(!0),children:[E.jsx(B0,{size:15}),"Preparar plan de cálculo"]}),E.jsx("p",{className:"caption",children:"No es inferencia de IA. Revisa definición, filtros y unidades antes de aprobar."})]})]}),r==="tasks"&&E.jsxs("div",{className:"tasks-layout",children:[E.jsxs("section",{className:"content-card",children:[E.jsxs("div",{className:"section-title",children:[E.jsx("h2",{children:"Un nuevo objetivo"}),E.jsx("span",{className:"pill",children:"ATLAS · Coordinación"})]}),E.jsx("textarea",{className:"goal-input",placeholder:"Compara ingresos por producto y región, identifica faltantes y prepara un informe…",value:Se,onChange:O=>Ae(O.target.value)}),E.jsxs("div",{className:"plan-bottom",children:[E.jsxs("select",{value:ae,onChange:O=>re(O.target.value),children:[E.jsx("option",{value:"",children:"Sin archivo · organizar proyecto"}),R.map(O=>E.jsx("option",{value:O.id,children:O.name},O.id))]}),E.jsxs("button",{className:"button primary",disabled:ee||Se.length<3,onClick:()=>lr(),children:[ee?E.jsx(z0,{className:"spin",size:16}):E.jsx(gh,{size:16}),"Proponer plan con API"]})]}),E.jsx("p",{className:"caption",children:"El plan usa el modelo asignado a ATLAS. Sin conexión, puedes usar los controles de Datos."})]}),E.jsxs("section",{className:"content-card",children:[E.jsx("h2",{children:"Planes y ejecuciones"}),!q.length&&E.jsxs("div",{className:"empty-state",children:[E.jsx(Zh,{size:35}),E.jsx("h3",{children:"Tu próximo objetivo empieza aquí"}),E.jsx("p",{children:"Describe una tarea o prepara un cálculo desde Datos."})]}),q.map(O=>{const Re=JSON.parse(O.plan);return E.jsxs("article",{className:"run-card",children:[E.jsxs("div",{className:"run-head",children:[E.jsx("h3",{children:O.request}),E.jsx("span",{className:"status "+(O.status==="Completado"?"success":""),children:O.status})]}),E.jsxs("small",{children:["Ejecución ",O.id.slice(0,10)," · ",Re.mode==="tools"?"Modo herramientas · sin inferencia":"Plan propuesto mediante API"]}),Re.clarification&&E.jsxs("p",{className:"clarification",children:["Se necesita aclaración: ",Re.clarification]}),E.jsx("div",{className:"task-chain",children:Re.tasks.map(Fe=>{var ht;return E.jsxs("div",{children:[E.jsx("span",{className:"task-agent",style:{background:((ht=h.find(Tt=>Tt.id===Fe.agent))==null?void 0:ht.color)+"30"},children:Fe.agent.toUpperCase()}),E.jsxs("p",{children:[Fe.description,E.jsx("small",{children:Fe.depends_on.length?"Después de "+Fe.depends_on.join(", "):"Sin dependencias"}),E.jsx("span",{className:"task-current-status",children:bl(O,Fe.id)})]})]},Fe.id)})}),Re.analysis&&E.jsxs("details",{children:[E.jsx("summary",{children:"Operaciones y criterios aprobables"}),E.jsx("pre",{children:JSON.stringify(Re,null,2)})]}),E.jsxs("div",{className:"run-actions",children:[O.status==="Espera aprobación"&&E.jsxs("button",{className:"button primary",disabled:ee,onClick:()=>An(async()=>{await bn("/runs/"+O.id+"/approve",{}),await Lt()}),children:[E.jsx(Z_,{size:15}),"Aprobar y ejecutar"]}),!["Completado","Fallido","Cancelado","Interrumpido"].includes(O.status)&&E.jsxs("button",{className:"button secondary",onClick:()=>An(async()=>{await bn("/runs/"+O.id+"/cancel",{}),await Lt()}),children:[E.jsx(F0,{size:14}),"Cancelar"]}),E.jsx("button",{className:"button secondary",onClick:()=>{Ue(O.id),Vt("bruno"),e("office"),on(!0)},children:"Consultar a BRUNO"}),E.jsx("button",{className:"button secondary",disabled:ee||!Se,onClick:()=>An(async()=>{await bn("/runs/"+O.id+"/correction",{name:Se.slice(0,120)}),await Lt()}),children:"Solicitar corrección"})]}),O.result&&E.jsxs("div",{className:"result-summary "+(O.status==="Completado"?"":"provisional"),children:[O.status!=="Completado"&&E.jsxs("p",{children:[E.jsxs("strong",{children:["Resultado provisional · ejecución ",O.status.toLowerCase(),"."]})," Las cifras conservadas no constituyen un entregable aprobado."]}),"Estadístico: ",E.jsx("strong",{children:JSON.parse(O.result).total})," · ",JSON.parse(O.result).rows_after," filas analizadas"]})]},O.id)})]})]}),r==="deliverables"&&E.jsxs("section",{className:"content-card",children:[E.jsxs("div",{className:"section-title",children:[E.jsx("h2",{children:"Resultados con evidencia"}),E.jsxs("span",{children:[H.length," archivos generados"]})]}),H.length?E.jsx("div",{className:"artifact-grid",children:H.map(O=>E.jsxs("a",{className:"artifact",href:"/api/artifacts/"+O.id,download:!0,children:[E.jsx("span",{className:"artifact-icon",children:O.name.endsWith(".png")?E.jsx(Zh,{}):E.jsx(P0,{})}),E.jsxs("div",{children:[E.jsx("strong",{children:O.name}),E.jsxs("small",{children:["Ejecución ",O.run.slice(0,10)," · versión 1"]})]}),E.jsx(hS,{size:17})]},O.id))}):E.jsxs("div",{className:"empty-state",children:[E.jsx(K_,{size:40}),E.jsx("h3",{children:"Tus entregables tendrán su lugar aquí"}),E.jsx("p",{children:"Ejecuta y verifica un análisis para generar tablas, gráficos e informes."}),E.jsxs("button",{className:"button secondary",onClick:()=>e("data"),children:["Ir a Datos",E.jsx(sl,{size:15})]})]})]}),r==="settings"&&E.jsx(C2,{agents:h,provider:b,ollama:y,openai:x,onSaved:en,status:z,onStatus:$e,reduced:T,onReduced:Y,onNotice:nt,onError:ft})]}),E.jsxs("footer",{className:"app-footer",children:[E.jsxs("span",{children:[E.jsx("span",{className:"live-dot"}),"Tu estudio · datos en el servidor"]}),E.jsxs("span",{children:["Hecho para pensar, crear y colaborar.",E.jsx("span",{className:"footer-star",children:"✧"})]}),E.jsxs("span",{children:["STUDIO DE ANTO ",E.jsx("span",{className:"version",children:"v1.1 · 3D"})]})]})]})]})}Xy.createRoot(document.getElementById("root")).render(E.jsx(By.StrictMode,{children:E.jsx(w2,{})}));
