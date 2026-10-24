var Ny=Object.defineProperty;var Ly=(r,t,i)=>t in r?Ny(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var Ii=(r,t,i)=>Ly(r,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Oy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var lh={exports:{}},il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function Py(){if(Mg)return il;Mg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return il.Fragment=t,il.jsx=i,il.jsxs=i,il}var Eg;function zy(){return Eg||(Eg=1,lh.exports=Py()),lh.exports}var E=zy(),ch={exports:{}},me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function Iy(){if(bg)return me;bg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,R={};function v(L,nt,St){this.props=L,this.context=nt,this.refs=R,this.updater=St||S}v.prototype.isReactComponent={},v.prototype.setState=function(L,nt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,nt,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function g(){}g.prototype=v.prototype;function I(L,nt,St){this.props=L,this.context=nt,this.refs=R,this.updater=St||S}var P=I.prototype=new g;P.constructor=I,b(P,v.prototype),P.isPureReactComponent=!0;var U=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function H(L,nt,St,Tt,tt,gt){return St=gt.ref,{$$typeof:r,type:L,key:nt,ref:St!==void 0?St:null,props:gt}}function q(L,nt){return H(L.type,nt,void 0,void 0,void 0,L.props)}function N(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function C(L){var nt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(St){return nt[St]})}var j=/\/+/g;function at(L,nt){return typeof L=="object"&&L!==null&&L.key!=null?C(""+L.key):nt.toString(36)}function ot(){}function ft(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(ot,ot):(L.status="pending",L.then(function(nt){L.status==="pending"&&(L.status="fulfilled",L.value=nt)},function(nt){L.status==="pending"&&(L.status="rejected",L.reason=nt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function mt(L,nt,St,Tt,tt){var gt=typeof L;(gt==="undefined"||gt==="boolean")&&(L=null);var xt=!1;if(L===null)xt=!0;else switch(gt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(L.$$typeof){case r:case t:xt=!0;break;case _:return xt=L._init,mt(xt(L._payload),nt,St,Tt,tt)}}if(xt)return tt=tt(L),xt=Tt===""?"."+at(L,0):Tt,U(tt)?(St="",xt!=null&&(St=xt.replace(j,"$&/")+"/"),mt(tt,nt,St,"",function(ue){return ue})):tt!=null&&(N(tt)&&(tt=q(tt,St+(tt.key==null||L&&L.key===tt.key?"":(""+tt.key).replace(j,"$&/")+"/")+xt)),nt.push(tt)),1;xt=0;var Dt=Tt===""?".":Tt+":";if(U(L))for(var Lt=0;Lt<L.length;Lt++)Tt=L[Lt],gt=Dt+at(Tt,Lt),xt+=mt(Tt,nt,St,gt,tt);else if(Lt=y(L),typeof Lt=="function")for(L=Lt.call(L),Lt=0;!(Tt=L.next()).done;)Tt=Tt.value,gt=Dt+at(Tt,Lt++),xt+=mt(Tt,nt,St,gt,tt);else if(gt==="object"){if(typeof L.then=="function")return mt(ft(L),nt,St,Tt,tt);throw nt=String(L),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return xt}function B(L,nt,St){if(L==null)return L;var Tt=[],tt=0;return mt(L,Tt,"","",function(gt){return nt.call(St,gt,tt++)}),Tt}function Q(L){if(L._status===-1){var nt=L._result;nt=nt(),nt.then(function(St){(L._status===0||L._status===-1)&&(L._status=1,L._result=St)},function(St){(L._status===0||L._status===-1)&&(L._status=2,L._result=St)}),L._status===-1&&(L._status=0,L._result=nt)}if(L._status===1)return L._result.default;throw L._result}var Z=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function bt(){}return me.Children={map:B,forEach:function(L,nt,St){B(L,function(){nt.apply(this,arguments)},St)},count:function(L){var nt=0;return B(L,function(){nt++}),nt},toArray:function(L){return B(L,function(nt){return nt})||[]},only:function(L){if(!N(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},me.Component=v,me.Fragment=i,me.Profiler=l,me.PureComponent=I,me.StrictMode=s,me.Suspense=p,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,me.__COMPILER_RUNTIME={__proto__:null,c:function(L){return G.H.useMemoCache(L)}},me.cache=function(L){return function(){return L.apply(null,arguments)}},me.cloneElement=function(L,nt,St){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Tt=b({},L.props),tt=L.key,gt=void 0;if(nt!=null)for(xt in nt.ref!==void 0&&(gt=void 0),nt.key!==void 0&&(tt=""+nt.key),nt)!F.call(nt,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&nt.ref===void 0||(Tt[xt]=nt[xt]);var xt=arguments.length-2;if(xt===1)Tt.children=St;else if(1<xt){for(var Dt=Array(xt),Lt=0;Lt<xt;Lt++)Dt[Lt]=arguments[Lt+2];Tt.children=Dt}return H(L.type,tt,void 0,void 0,gt,Tt)},me.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},me.createElement=function(L,nt,St){var Tt,tt={},gt=null;if(nt!=null)for(Tt in nt.key!==void 0&&(gt=""+nt.key),nt)F.call(nt,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(tt[Tt]=nt[Tt]);var xt=arguments.length-2;if(xt===1)tt.children=St;else if(1<xt){for(var Dt=Array(xt),Lt=0;Lt<xt;Lt++)Dt[Lt]=arguments[Lt+2];tt.children=Dt}if(L&&L.defaultProps)for(Tt in xt=L.defaultProps,xt)tt[Tt]===void 0&&(tt[Tt]=xt[Tt]);return H(L,gt,void 0,void 0,null,tt)},me.createRef=function(){return{current:null}},me.forwardRef=function(L){return{$$typeof:d,render:L}},me.isValidElement=N,me.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:Q}},me.memo=function(L,nt){return{$$typeof:m,type:L,compare:nt===void 0?null:nt}},me.startTransition=function(L){var nt=G.T,St={};G.T=St;try{var Tt=L(),tt=G.S;tt!==null&&tt(St,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(bt,Z)}catch(gt){Z(gt)}finally{G.T=nt}},me.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},me.use=function(L){return G.H.use(L)},me.useActionState=function(L,nt,St){return G.H.useActionState(L,nt,St)},me.useCallback=function(L,nt){return G.H.useCallback(L,nt)},me.useContext=function(L){return G.H.useContext(L)},me.useDebugValue=function(){},me.useDeferredValue=function(L,nt){return G.H.useDeferredValue(L,nt)},me.useEffect=function(L,nt,St){var Tt=G.H;if(typeof St=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Tt.useEffect(L,nt)},me.useId=function(){return G.H.useId()},me.useImperativeHandle=function(L,nt,St){return G.H.useImperativeHandle(L,nt,St)},me.useInsertionEffect=function(L,nt){return G.H.useInsertionEffect(L,nt)},me.useLayoutEffect=function(L,nt){return G.H.useLayoutEffect(L,nt)},me.useMemo=function(L,nt){return G.H.useMemo(L,nt)},me.useOptimistic=function(L,nt){return G.H.useOptimistic(L,nt)},me.useReducer=function(L,nt,St){return G.H.useReducer(L,nt,St)},me.useRef=function(L){return G.H.useRef(L)},me.useState=function(L){return G.H.useState(L)},me.useSyncExternalStore=function(L,nt,St){return G.H.useSyncExternalStore(L,nt,St)},me.useTransition=function(){return G.H.useTransition()},me.version="19.1.0",me}var Tg;function Id(){return Tg||(Tg=1,ch.exports=Iy()),ch.exports}var Ot=Id();const By=Oy(Ot);var uh={exports:{}},al={},fh={exports:{}},hh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function Fy(){return Ag||(Ag=1,(function(r){function t(B,Q){var Z=B.length;B.push(Q);t:for(;0<Z;){var bt=Z-1>>>1,L=B[bt];if(0<l(L,Q))B[bt]=Q,B[Z]=L,Z=bt;else break t}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var Q=B[0],Z=B.pop();if(Z!==Q){B[0]=Z;t:for(var bt=0,L=B.length,nt=L>>>1;bt<nt;){var St=2*(bt+1)-1,Tt=B[St],tt=St+1,gt=B[tt];if(0>l(Tt,Z))tt<L&&0>l(gt,Tt)?(B[bt]=gt,B[tt]=Z,bt=tt):(B[bt]=Tt,B[St]=Z,bt=St);else if(tt<L&&0>l(gt,Z))B[bt]=gt,B[tt]=Z,bt=tt;else break t}}return Q}function l(B,Q){var Z=B.sortIndex-Q.sortIndex;return Z!==0?Z:B.id-Q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var p=[],m=[],_=1,x=null,y=3,S=!1,b=!1,R=!1,v=!1,g=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function U(B){for(var Q=i(m);Q!==null;){if(Q.callback===null)s(m);else if(Q.startTime<=B)s(m),Q.sortIndex=Q.expirationTime,t(p,Q);else break;Q=i(m)}}function G(B){if(R=!1,U(B),!b)if(i(p)!==null)b=!0,F||(F=!0,at());else{var Q=i(m);Q!==null&&mt(G,Q.startTime-B)}}var F=!1,H=-1,q=5,N=-1;function C(){return v?!0:!(r.unstable_now()-N<q)}function j(){if(v=!1,F){var B=r.unstable_now();N=B;var Q=!0;try{t:{b=!1,R&&(R=!1,I(H),H=-1),S=!0;var Z=y;try{e:{for(U(B),x=i(p);x!==null&&!(x.expirationTime>B&&C());){var bt=x.callback;if(typeof bt=="function"){x.callback=null,y=x.priorityLevel;var L=bt(x.expirationTime<=B);if(B=r.unstable_now(),typeof L=="function"){x.callback=L,U(B),Q=!0;break e}x===i(p)&&s(p),U(B)}else s(p);x=i(p)}if(x!==null)Q=!0;else{var nt=i(m);nt!==null&&mt(G,nt.startTime-B),Q=!1}}break t}finally{x=null,y=Z,S=!1}Q=void 0}}finally{Q?at():F=!1}}}var at;if(typeof P=="function")at=function(){P(j)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,ft=ot.port2;ot.port1.onmessage=j,at=function(){ft.postMessage(null)}}else at=function(){g(j,0)};function mt(B,Q){H=g(function(){B(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(B){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var Z=y;y=Q;try{return B()}finally{y=Z}},r.unstable_requestPaint=function(){v=!0},r.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=y;y=B;try{return Q()}finally{y=Z}},r.unstable_scheduleCallback=function(B,Q,Z){var bt=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?bt+Z:bt):Z=bt,B){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Z+L,B={id:_++,callback:Q,priorityLevel:B,startTime:Z,expirationTime:L,sortIndex:-1},Z>bt?(B.sortIndex=Z,t(m,B),i(p)===null&&B===i(m)&&(R?(I(H),H=-1):R=!0,mt(G,Z-bt))):(B.sortIndex=L,t(p,B),b||S||(b=!0,F||(F=!0,at()))),B},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(B){var Q=y;return function(){var Z=y;y=Q;try{return B.apply(this,arguments)}finally{y=Z}}}})(hh)),hh}var Rg;function Hy(){return Rg||(Rg=1,fh.exports=Fy()),fh.exports}var dh={exports:{}},Yn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function Gy(){if(Cg)return Yn;Cg=1;var r=Id();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:p,containerInfo:m,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Yn.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,_)},Yn.flushSync=function(p){var m=h.T,_=s.p;try{if(h.T=null,s.p=2,p)return p()}finally{h.T=m,s.p=_,s.d.f()}},Yn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Yn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Yn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,x=d(_,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:S}):_==="script"&&s.d.X(p,{crossOrigin:x,integrity:y,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Yn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Yn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,x=d(_,m.crossOrigin);s.d.L(p,_,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Yn.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=d(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Yn.requestFormReset=function(p){s.d.r(p)},Yn.unstable_batchedUpdates=function(p,m){return p(m)},Yn.useFormState=function(p,m,_){return h.H.useFormState(p,m,_)},Yn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Yn.version="19.1.0",Yn}var wg;function Vy(){if(wg)return dh.exports;wg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),dh.exports=Gy(),dh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function ky(){if(Dg)return al;Dg=1;var r=Hy(),t=Id(),i=Vy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===o)return d(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var M=!1,A=u.child;A;){if(A===a){M=!0,a=u,o=f;break}if(A===o){M=!0,o=u,a=f;break}A=A.sibling}if(!M){for(A=f.child;A;){if(A===a){M=!0,a=f,o=u;break}if(A===o){M=!0,o=f,a=u;break}A=A.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),P=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function at(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case v:return"Profiler";case R:return"StrictMode";case G:return"Suspense";case F:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case P:return(e.displayName||"Context")+".Provider";case I:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case q:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var mt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},bt=[],L=-1;function nt(e){return{current:e}}function St(e){0>L||(e.current=bt[L],bt[L]=null,L--)}function Tt(e,n){L++,bt[L]=e.current,e.current=n}var tt=nt(null),gt=nt(null),xt=nt(null),Dt=nt(null);function Lt(e,n){switch(Tt(xt,n),Tt(gt,e),Tt(tt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?K0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=K0(n),e=Q0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}St(tt),Tt(tt,e)}function ue(){St(tt),St(gt),St(xt)}function Kt(e){e.memoizedState!==null&&Tt(Dt,e);var n=tt.current,a=Q0(n,e.type);n!==a&&(Tt(gt,e),Tt(tt,a))}function he(e){gt.current===e&&(St(tt),St(gt)),Dt.current===e&&(St(Dt),Jo._currentValue=Z)}var ze=Object.prototype.hasOwnProperty,ie=r.unstable_scheduleCallback,k=r.unstable_cancelCallback,ln=r.unstable_shouldYield,pe=r.unstable_requestPaint,ne=r.unstable_now,Yt=r.unstable_getCurrentPriorityLevel,De=r.unstable_ImmediatePriority,ht=r.unstable_UserBlockingPriority,w=r.unstable_NormalPriority,T=r.unstable_LowPriority,Y=r.unstable_IdlePriority,pt=r.log,Et=r.unstable_setDisableYieldValue,z=null,Ut=null;function Rt(e){if(typeof pt=="function"&&Et(e),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(z,e)}catch{}}var jt=Math.clz32?Math.clz32:Bt,Qt=Math.log,Ct=Math.LN2;function Bt(e){return e>>>=0,e===0?32:31-(Qt(e)/Ct|0)|0}var Jt=256,qt=4194304;function Ht(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function oe(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Ht(o):(M&=A,M!==0?u=Ht(M):a||(a=A&~e,a!==0&&(u=Ht(a))))):(A=o&~f,A!==0?u=Ht(A):M!==0?u=Ht(M):a||(a=o&~e,a!==0&&(u=Ht(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function ae(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function we(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Jt;return Jt<<=1,(Jt&4194048)===0&&(Jt=256),e}function Pt(){var e=qt;return qt<<=1,(qt&62914560)===0&&(qt=4194304),e}function dt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function vt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ft(e,n,a,o,u,f){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,V=e.expirationTimes,st=e.hiddenUpdates;for(a=M&~a;0<a;){var _t=31-jt(a),Mt=1<<_t;A[_t]=0,V[_t]=-1;var lt=st[_t];if(lt!==null)for(st[_t]=null,_t=0;_t<lt.length;_t++){var ut=lt[_t];ut!==null&&(ut.lane&=-536870913)}a&=~Mt}o!==0&&zt(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(M&~n))}function zt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-jt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function le(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-jt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ne(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $e(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ue(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:gg(e.type))}function jn(e,n){var a=Q.p;try{return Q.p=e,n()}finally{Q.p=a}}var mn=Math.random().toString(36).slice(2),gn="__reactFiber$"+mn,Sn="__reactProps$"+mn,Xn="__reactContainer$"+mn,Ei="__reactEvents$"+mn,ma="__reactListeners$"+mn,ga="__reactHandles$"+mn,ui="__reactResources$"+mn,ta="__reactMarker$"+mn;function fi(e){delete e[gn],delete e[Sn],delete e[Ei],delete e[ma],delete e[ga]}function hi(e){var n=e[gn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Xn]||a[gn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=eg(e);e!==null;){if(a=e[gn])return a;e=eg(e)}return n}e=a,a=e.parentNode}return null}function ni(e){if(e=e[gn]||e[Xn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function _a(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Hi(e){var n=e[ui];return n||(n=e[ui]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function un(e){e[ta]=!0}var Ga=new Set,bs={};function bi(e,n){D(e,n),D(e+"Capture",n)}function D(e,n){for(bs[e]=n,e=0;e<n.length;e++)Ga.add(n[e])}var K=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ct={},rt={};function $(e){return ze.call(rt,e)?!0:ze.call(ct,e)?!1:K.test(e)?rt[e]=!0:(ct[e]=!0,!1)}function At(e,n,a){if($(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function It(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Xt,Vt;function $t(e){if(Xt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Xt=n&&n[1]||"",Vt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xt+e+Vt}var Zt=!1;function ve(e,n){if(!e||Zt)return"";Zt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(ut){var lt=ut}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(ut){lt=ut}e.call(Mt.prototype)}}else{try{throw Error()}catch(ut){lt=ut}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(ut){if(ut&&lt&&typeof ut.stack=="string")return[ut.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),M=f[0],A=f[1];if(M&&A){var V=M.split(`
`),st=A.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<st.length&&!st[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===st.length)for(o=V.length-1,u=st.length-1;1<=o&&0<=u&&V[o]!==st[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==st[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==st[u]){var _t=`
`+V[o].replace(" at new "," at ");return e.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",e.displayName)),_t}while(1<=o&&0<=u);break}}}finally{Zt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?$t(a):""}function Te(e){switch(e.tag){case 26:case 27:case 5:return $t(e.type);case 16:return $t("Lazy");case 13:return $t("Suspense");case 19:return $t("SuspenseList");case 0:case 15:return ve(e.type,!1);case 11:return ve(e.type.render,!1);case 1:return ve(e.type,!0);case 31:return $t("Activity");default:return""}}function an(e){try{var n="";do n+=Te(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ye(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Se(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ee(e){var n=Se(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,f.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function sn(e){e._valueTracker||(e._valueTracker=ee(e))}function Me(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Se(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pn=/[\n"\\]/g;function Le(e){return e.replace(Pn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ti(e,n,a,o,u,f,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ye(n)):e.value!==""+ye(n)&&(e.value=""+ye(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?An(e,M,ye(n)):a!=null?An(e,M,ye(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ye(A):e.removeAttribute("name")}function Ge(e,n,a,o,u,f,M,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ye(a):"",n=n!=null?""+ye(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function An(e,n,a){n==="number"&&Mn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function rn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ye(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function _n(e,n,a){if(n!=null&&(n=""+ye(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ye(a):""}function Rn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(mt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ye(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Ai(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ri=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Va(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ri.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function co(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Va(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Va(e,f,n[f])}function O(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function de(e){return kt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Oe=null;function Xe(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,Ci=null;function ar(e){var n=ni(e);if(n&&(e=n.stateNode)){var a=e[Sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ti(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Le(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Sn]||null;if(!u)throw Error(s(90));Ti(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Me(o)}break t;case"textarea":_n(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&rn(e,!!a.multiple,n,!1)}}}var Ts=!1;function uo(e,n,a){if(Ts)return e(n,a);Ts=!0;try{var o=e(n);return o}finally{if(Ts=!1,(fn!==null||Ci!==null)&&(ac(),fn&&(n=fn,e=Ci,Ci=fn=null,ar(n),e)))for(n=0;n<e.length;n++)ar(e[n])}}function ka(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Sn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sr=!1;if(wi)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){sr=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{sr=!1}var qn=null,Gi=null,ea=null;function rr(){if(ea)return ea;var e,n=Gi,a=n.length,o,u="value"in qn?qn.value:qn.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[f-o];o++);return ea=u.slice(e,1<o?1-o:void 0)}function or(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ja(){return!0}function fo(){return!1}function qe(e){function n(a,o,u,f,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ja:fo,this.isPropagationStopped=fo,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ja)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ja)},persist:function(){},isPersistent:ja}),n}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=qe(Jn),ho=_({},Jn,{view:0,detail:0}),Nv=qe(ho),hu,du,po,bl=_({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==po&&(po&&e.type==="mousemove"?(hu=e.screenX-po.screenX,du=e.screenY-po.screenY):du=hu=0,po=e),hu)},movementY:function(e){return"movementY"in e?e.movementY:du}}),np=qe(bl),Lv=_({},bl,{dataTransfer:0}),Ov=qe(Lv),Pv=_({},ho,{relatedTarget:0}),pu=qe(Pv),zv=_({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=qe(zv),Bv=_({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fv=qe(Bv),Hv=_({},Jn,{data:0}),ip=qe(Hv),Gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=kv[e])?!!n[e]:!1}function mu(){return jv}var Xv=_({},ho,{key:function(e){if(e.key){var n=Gv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(e){return e.type==="keypress"?or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qv=qe(Xv),Wv=_({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ap=qe(Wv),Yv=_({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),Zv=qe(Yv),Kv=_({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qv=qe(Kv),Jv=_({},bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$v=qe(Jv),tx=_({},Jn,{newState:0,oldState:0}),ex=qe(tx),nx=[9,13,27,32],gu=wi&&"CompositionEvent"in window,mo=null;wi&&"documentMode"in document&&(mo=document.documentMode);var ix=wi&&"TextEvent"in window&&!mo,sp=wi&&(!gu||mo&&8<mo&&11>=mo),rp=" ",op=!1;function lp(e,n){switch(e){case"keyup":return nx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lr=!1;function ax(e,n){switch(e){case"compositionend":return cp(n);case"keypress":return n.which!==32?null:(op=!0,rp);case"textInput":return e=n.data,e===rp&&op?null:e;default:return null}}function sx(e,n){if(lr)return e==="compositionend"||!gu&&lp(e,n)?(e=rr(),ea=Gi=qn=null,lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sp&&n.locale!=="ko"?null:n.data;default:return null}}var rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!rx[e.type]:n==="textarea"}function fp(e,n,a,o){fn?Ci?Ci.push(o):Ci=[o]:fn=o,n=uc(n,"onChange"),0<n.length&&(a=new El("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var go=null,_o=null;function ox(e){X0(e,0)}function Tl(e){var n=_a(e);if(Me(n))return e}function hp(e,n){if(e==="change")return n}var dp=!1;if(wi){var _u;if(wi){var vu="oninput"in document;if(!vu){var pp=document.createElement("div");pp.setAttribute("oninput","return;"),vu=typeof pp.oninput=="function"}_u=vu}else _u=!1;dp=_u&&(!document.documentMode||9<document.documentMode)}function mp(){go&&(go.detachEvent("onpropertychange",gp),_o=go=null)}function gp(e){if(e.propertyName==="value"&&Tl(_o)){var n=[];fp(n,_o,e,Xe(e)),uo(ox,n)}}function lx(e,n,a){e==="focusin"?(mp(),go=n,_o=a,go.attachEvent("onpropertychange",gp)):e==="focusout"&&mp()}function cx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tl(_o)}function ux(e,n){if(e==="click")return Tl(n)}function fx(e,n){if(e==="input"||e==="change")return Tl(n)}function hx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var di=typeof Object.is=="function"?Object.is:hx;function vo(e,n){if(di(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ze.call(n,u)||!di(e[u],n[u]))return!1}return!0}function _p(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vp(e,n){var a=_p(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=_p(a)}}function xp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?xp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function yp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Mn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Mn(e.document)}return n}function xu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var dx=wi&&"documentMode"in document&&11>=document.documentMode,cr=null,yu=null,xo=null,Su=!1;function Sp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Su||cr==null||cr!==Mn(o)||(o=cr,"selectionStart"in o&&xu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),xo&&vo(xo,o)||(xo=o,o=uc(yu,"onSelect"),0<o.length&&(n=new El("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=cr)))}function As(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ur={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionrun:As("Transition","TransitionRun"),transitionstart:As("Transition","TransitionStart"),transitioncancel:As("Transition","TransitionCancel"),transitionend:As("Transition","TransitionEnd")},Mu={},Mp={};wi&&(Mp=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function Rs(e){if(Mu[e])return Mu[e];if(!ur[e])return e;var n=ur[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Mp)return Mu[e]=n[a];return e}var Ep=Rs("animationend"),bp=Rs("animationiteration"),Tp=Rs("animationstart"),px=Rs("transitionrun"),mx=Rs("transitionstart"),gx=Rs("transitioncancel"),Ap=Rs("transitionend"),Rp=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function Vi(e,n){Rp.set(e,n),bi(n,[e])}var Cp=new WeakMap;function Di(e,n){if(typeof e=="object"&&e!==null){var a=Cp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:an(n)},Cp.set(e,n),n)}return{value:e,source:n,stack:an(n)}}var Ui=[],fr=0,bu=0;function Al(){for(var e=fr,n=bu=fr=0;n<e;){var a=Ui[n];Ui[n++]=null;var o=Ui[n];Ui[n++]=null;var u=Ui[n];Ui[n++]=null;var f=Ui[n];if(Ui[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}f!==0&&wp(a,u,f)}}function Rl(e,n,a,o){Ui[fr++]=e,Ui[fr++]=n,Ui[fr++]=a,Ui[fr++]=o,bu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Tu(e,n,a,o){return Rl(e,n,a,o),Cl(e)}function hr(e,n){return Rl(e,null,null,n),Cl(e)}function wp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-jt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Cl(e){if(50<jo)throw jo=0,Nf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var dr={};function _x(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,n,a,o){return new _x(e,n,a,o)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function va(e,n){var a=e.alternate;return a===null?(a=pi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Dp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function wl(e,n,a,o,u,f){var M=0;if(o=e,typeof e=="function")Au(e)&&(M=1);else if(typeof e=="string")M=xy(e,a,tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=pi(31,a,n,u),e.elementType=N,e.lanes=f,e;case b:return Cs(a.children,u,f,n);case R:M=8,u|=24;break;case v:return e=pi(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case G:return e=pi(13,a,n,u),e.elementType=G,e.lanes=f,e;case F:return e=pi(19,a,n,u),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case P:M=10;break t;case I:M=9;break t;case U:M=11;break t;case H:M=14;break t;case q:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=pi(M,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Cs(e,n,a,o){return e=pi(7,e,o,n),e.lanes=a,e}function Ru(e,n,a){return e=pi(6,e,null,n),e.lanes=a,e}function Cu(e,n,a){return n=pi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var pr=[],mr=0,Dl=null,Ul=0,Ni=[],Li=0,ws=null,xa=1,ya="";function Ds(e,n){pr[mr++]=Ul,pr[mr++]=Dl,Dl=e,Ul=n}function Up(e,n,a){Ni[Li++]=xa,Ni[Li++]=ya,Ni[Li++]=ws,ws=e;var o=xa;e=ya;var u=32-jt(o)-1;o&=~(1<<u),a+=1;var f=32-jt(n)+u;if(30<f){var M=u-u%5;f=(o&(1<<M)-1).toString(32),o>>=M,u-=M,xa=1<<32-jt(n)+u|a<<u|o,ya=f+e}else xa=1<<f|a<<u|o,ya=e}function wu(e){e.return!==null&&(Ds(e,1),Up(e,1,0))}function Du(e){for(;e===Dl;)Dl=pr[--mr],pr[mr]=null,Ul=pr[--mr],pr[mr]=null;for(;e===ws;)ws=Ni[--Li],Ni[Li]=null,ya=Ni[--Li],Ni[Li]=null,xa=Ni[--Li],Ni[Li]=null}var $n=null,hn=null,Fe=!1,Us=null,na=!1,Uu=Error(s(519));function Ns(e){var n=Error(s(418,""));throw Mo(Di(n,e)),Uu}function Np(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[gn]=e,n[Sn]=o,a){case"dialog":Re("cancel",n),Re("close",n);break;case"iframe":case"object":case"embed":Re("load",n);break;case"video":case"audio":for(a=0;a<qo.length;a++)Re(qo[a],n);break;case"source":Re("error",n);break;case"img":case"image":case"link":Re("error",n),Re("load",n);break;case"details":Re("toggle",n);break;case"input":Re("invalid",n),Ge(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),sn(n);break;case"select":Re("invalid",n);break;case"textarea":Re("invalid",n),Rn(n,o.value,o.defaultValue,o.children),sn(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Z0(n.textContent,a)?(o.popover!=null&&(Re("beforetoggle",n),Re("toggle",n)),o.onScroll!=null&&Re("scroll",n),o.onScrollEnd!=null&&Re("scrollend",n),o.onClick!=null&&(n.onclick=fc),n=!0):n=!1,n||Ns(e)}function Lp(e){for($n=e.return;$n;)switch($n.tag){case 5:case 13:na=!1;return;case 27:case 3:na=!0;return;default:$n=$n.return}}function yo(e){if(e!==$n)return!1;if(!Fe)return Lp(e),Fe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Yf(e.type,e.memoizedProps)),a=!a),a&&hn&&Ns(e),Lp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){hn=ji(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}hn=null}}else n===27?(n=hn,rs(e.type)?(e=Jf,Jf=null,hn=e):hn=n):hn=$n?ji(e.stateNode.nextSibling):null;return!0}function So(){hn=$n=null,Fe=!1}function Op(){var e=Us;return e!==null&&(si===null?si=e:si.push.apply(si,e),Us=null),e}function Mo(e){Us===null?Us=[e]:Us.push(e)}var Nu=nt(null),Ls=null,Sa=null;function Xa(e,n,a){Tt(Nu,n._currentValue),n._currentValue=a}function Ma(e){e._currentValue=Nu.current,St(Nu)}function Lu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Ou(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var M=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var V=0;V<n.length;V++)if(A.context===n[V]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Lu(f.return,a,e),o||(M=null);break t}f=A.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),Lu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Eo(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var A=u.type;di(u.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(u===Dt.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Jo):e=[Jo])}u=u.return}e!==null&&Ou(n,e,a,o),n.flags|=262144}function Nl(e){for(e=e.firstContext;e!==null;){if(!di(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Os(e){Ls=e,Sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Wn(e){return Pp(Ls,e)}function Ll(e,n){return Ls===null&&Os(e),Pp(e,n)}function Pp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Sa===null){if(e===null)throw Error(s(308));Sa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Sa=Sa.next=n;return a}var vx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},xx=r.unstable_scheduleCallback,yx=r.unstable_NormalPriority,Cn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pu(){return{controller:new vx,data:new Map,refCount:0}}function bo(e){e.refCount--,e.refCount===0&&xx(yx,function(){e.controller.abort()})}var To=null,zu=0,gr=0,_r=null;function Sx(e,n){if(To===null){var a=To=[];zu=0,gr=Ff(),_r={status:"pending",value:void 0,then:function(o){a.push(o)}}}return zu++,n.then(zp,zp),n}function zp(){if(--zu===0&&To!==null){_r!==null&&(_r.status="fulfilled");var e=To;To=null,gr=0,_r=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Mx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Ip=B.S;B.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Sx(e,n),Ip!==null&&Ip(e,n)};var Ps=nt(null);function Iu(){var e=Ps.current;return e!==null?e:tn.pooledCache}function Ol(e,n){n===null?Tt(Ps,Ps.current):Tt(Ps,n.pool)}function Bp(){var e=Iu();return e===null?null:{parent:Cn._currentValue,pool:e}}var Ao=Error(s(460)),Fp=Error(s(474)),Pl=Error(s(542)),Bu={then:function(){}};function Hp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zl(){}function Gp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(zl,zl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,kp(e),e;default:if(typeof n.status=="string")n.then(zl,zl);else{if(e=tn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,kp(e),e}throw Ro=n,Ao}}var Ro=null;function Vp(){if(Ro===null)throw Error(s(459));var e=Ro;return Ro=null,e}function kp(e){if(e===Ao||e===Pl)throw Error(s(483))}var qa=!1;function Fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ke&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Cl(e),wp(e,null,a),n}return Rl(e,o,n,a),Cl(e)}function Co(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,le(e,a)}}function Gu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Vu=!1;function wo(){if(Vu){var e=_r;if(e!==null)throw e}}function Do(e,n,a,o){Vu=!1;var u=e.updateQueue;qa=!1;var f=u.firstBaseUpdate,M=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var V=A,st=V.next;V.next=null,M===null?f=st:M.next=st,M=V;var _t=e.alternate;_t!==null&&(_t=_t.updateQueue,A=_t.lastBaseUpdate,A!==M&&(A===null?_t.firstBaseUpdate=st:A.next=st,_t.lastBaseUpdate=V))}if(f!==null){var Mt=u.baseState;M=0,_t=st=V=null,A=f;do{var lt=A.lane&-536870913,ut=lt!==A.lane;if(ut?(Pe&lt)===lt:(o&lt)===lt){lt!==0&&lt===gr&&(Vu=!0),_t!==null&&(_t=_t.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ce=e,se=A;lt=n;var Ze=a;switch(se.tag){case 1:if(ce=se.payload,typeof ce=="function"){Mt=ce.call(Ze,Mt,lt);break t}Mt=ce;break t;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=se.payload,lt=typeof ce=="function"?ce.call(Ze,Mt,lt):ce,lt==null)break t;Mt=_({},Mt,lt);break t;case 2:qa=!0}}lt=A.callback,lt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[lt]:ut.push(lt))}else ut={lane:lt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},_t===null?(st=_t=ut,V=Mt):_t=_t.next=ut,M|=lt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ut=A,A=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);_t===null&&(V=Mt),u.baseState=V,u.firstBaseUpdate=st,u.lastBaseUpdate=_t,f===null&&(u.shared.lanes=0),ns|=M,e.lanes=M,e.memoizedState=Mt}}function jp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Xp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)jp(a[e],n)}var vr=nt(null),Il=nt(0);function qp(e,n){e=wa,Tt(Il,e),Tt(vr,n),wa=e|n.baseLanes}function ku(){Tt(Il,wa),Tt(vr,vr.current)}function ju(){wa=Il.current,St(vr),St(Il)}var Za=0,xe=null,We=null,En=null,Bl=!1,xr=!1,zs=!1,Fl=0,Uo=0,yr=null,Ex=0;function xn(){throw Error(s(321))}function Xu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!di(e[a],n[a]))return!1;return!0}function qu(e,n,a,o,u,f){return Za=f,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?wm:Dm,zs=!1,f=a(o,u),zs=!1,xr&&(f=Yp(n,a,o,u)),Wp(e),f}function Wp(e){B.H=Xl;var n=We!==null&&We.next!==null;if(Za=0,En=We=xe=null,Bl=!1,Uo=0,yr=null,n)throw Error(s(300));e===null||zn||(e=e.dependencies,e!==null&&Nl(e)&&(zn=!0))}function Yp(e,n,a,o){xe=e;var u=0;do{if(xr&&(yr=null),Uo=0,xr=!1,25<=u)throw Error(s(301));if(u+=1,En=We=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=Dx,f=n(a,o)}while(xr);return f}function bx(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?No(n):n,e=e.useState()[0],(We!==null?We.memoizedState:null)!==e&&(xe.flags|=1024),n}function Wu(){var e=Fl!==0;return Fl=0,e}function Yu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Zu(e){if(Bl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Bl=!1}Za=0,En=We=xe=null,xr=!1,Uo=Fl=0,yr=null}function ii(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?xe.memoizedState=En=e:En=En.next=e,En}function bn(){if(We===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var n=En===null?xe.memoizedState:En.next;if(n!==null)En=n,We=e;else{if(e===null)throw xe.alternate===null?Error(s(467)):Error(s(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},En===null?xe.memoizedState=En=e:En=En.next=e}return En}function Ku(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var n=Uo;return Uo+=1,yr===null&&(yr=[]),e=Gp(yr,e,n),n=xe,(En===null?n.memoizedState:En.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?wm:Dm),e}function Hl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return No(e);if(e.$$typeof===P)return Wn(e)}throw Error(s(438,String(e)))}function Qu(e){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=xe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ku(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function Ea(e,n){return typeof n=="function"?n(e):n}function Gl(e){var n=bn();return Ju(n,We,e)}function Ju(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var M=u.next;u.next=f.next,f.next=M}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=M=null,V=null,st=n,_t=!1;do{var Mt=st.lane&-536870913;if(Mt!==st.lane?(Pe&Mt)===Mt:(Za&Mt)===Mt){var lt=st.revertLane;if(lt===0)V!==null&&(V=V.next={lane:0,revertLane:0,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),Mt===gr&&(_t=!0);else if((Za&lt)===lt){st=st.next,lt===gr&&(_t=!0);continue}else Mt={lane:0,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},V===null?(A=V=Mt,M=f):V=V.next=Mt,xe.lanes|=lt,ns|=lt;Mt=st.action,zs&&a(f,Mt),f=st.hasEagerState?st.eagerState:a(f,Mt)}else lt={lane:Mt,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},V===null?(A=V=lt,M=f):V=V.next=lt,xe.lanes|=Mt,ns|=Mt;st=st.next}while(st!==null&&st!==n);if(V===null?M=f:V.next=A,!di(f,e.memoizedState)&&(zn=!0,_t&&(a=_r,a!==null)))throw a;e.memoizedState=f,e.baseState=M,e.baseQueue=V,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function $u(e){var n=bn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do f=e(f,M.action),M=M.next;while(M!==u);di(f,n.memoizedState)||(zn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Zp(e,n,a){var o=xe,u=bn(),f=Fe;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!di((We||u).memoizedState,a);M&&(u.memoizedState=a,zn=!0),u=u.queue;var A=Jp.bind(null,o,u,e);if(Lo(2048,8,A,[e]),u.getSnapshot!==n||M||En!==null&&En.memoizedState.tag&1){if(o.flags|=2048,Sr(9,Vl(),Qp.bind(null,o,u,a,n),null),tn===null)throw Error(s(349));f||(Za&124)!==0||Kp(o,n,a)}return a}function Kp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=Ku(),xe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Qp(e,n,a,o){n.value=a,n.getSnapshot=o,$p(n)&&tm(e)}function Jp(e,n,a){return a(function(){$p(n)&&tm(e)})}function $p(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!di(e,a)}catch{return!0}}function tm(e){var n=hr(e,2);n!==null&&xi(n,e,2)}function tf(e){var n=ii();if(typeof e=="function"){var a=e;if(e=a(),zs){Rt(!0);try{a()}finally{Rt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:e},n}function em(e,n,a,o){return e.baseState=a,Ju(e,We,typeof o=="function"?o:Ea)}function Tx(e,n,a,o,u){if(jl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,nm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function nm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=B.T,M={};B.T=M;try{var A=a(u,o),V=B.S;V!==null&&V(M,A),im(e,n,A)}catch(st){ef(e,n,st)}finally{B.T=f}}else try{f=a(u,o),im(e,n,f)}catch(st){ef(e,n,st)}}function im(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){am(e,n,o)},function(o){return ef(e,n,o)}):am(e,n,a)}function am(e,n,a){n.status="fulfilled",n.value=a,sm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,nm(e,a)))}function ef(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,sm(n),n=n.next;while(n!==o)}e.action=null}function sm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function rm(e,n){return n}function om(e,n){if(Fe){var a=tn.formState;if(a!==null){t:{var o=xe;if(Fe){if(hn){e:{for(var u=hn,f=na;u.nodeType!==8;){if(!f){u=null;break e}if(u=ji(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){hn=ji(u.nextSibling),o=u.data==="F!";break t}}Ns(o)}o=!1}o&&(n=a[0])}}return a=ii(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rm,lastRenderedState:n},a.queue=o,a=Am.bind(null,xe,o),o.dispatch=a,o=tf(!1),f=of.bind(null,xe,!1,o.queue),o=ii(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Tx.bind(null,xe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function lm(e){var n=bn();return cm(n,We,e)}function cm(e,n,a){if(n=Ju(e,n,rm)[0],e=Gl(Ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=No(n)}catch(M){throw M===Ao?Pl:M}else o=n;n=bn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(xe.flags|=2048,Sr(9,Vl(),Ax.bind(null,u,a),null)),[o,f,e]}function Ax(e,n){e.action=n}function um(e){var n=bn(),a=We;if(a!==null)return cm(n,a,e);bn(),n=n.memoizedState,a=bn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Sr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=xe.updateQueue,n===null&&(n=Ku(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Vl(){return{destroy:void 0,resource:void 0}}function fm(){return bn().memoizedState}function kl(e,n,a,o){var u=ii();o=o===void 0?null:o,xe.flags|=e,u.memoizedState=Sr(1|n,Vl(),a,o)}function Lo(e,n,a,o){var u=bn();o=o===void 0?null:o;var f=u.memoizedState.inst;We!==null&&o!==null&&Xu(o,We.memoizedState.deps)?u.memoizedState=Sr(n,f,a,o):(xe.flags|=e,u.memoizedState=Sr(1|n,f,a,o))}function hm(e,n){kl(8390656,8,e,n)}function dm(e,n){Lo(2048,8,e,n)}function pm(e,n){return Lo(4,2,e,n)}function mm(e,n){return Lo(4,4,e,n)}function gm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function _m(e,n,a){a=a!=null?a.concat([e]):null,Lo(4,4,gm.bind(null,n,e),a)}function nf(){}function vm(e,n){var a=bn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Xu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function xm(e,n){var a=bn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Xu(n,o[1]))return o[0];if(o=e(),zs){Rt(!0);try{e()}finally{Rt(!1)}}return a.memoizedState=[o,n],o}function af(e,n,a){return a===void 0||(Za&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=M0(),xe.lanes|=e,ns|=e,a)}function ym(e,n,a,o){return di(a,n)?a:vr.current!==null?(e=af(e,a,o),di(e,n)||(zn=!0),e):(Za&42)===0?(zn=!0,e.memoizedState=a):(e=M0(),xe.lanes|=e,ns|=e,n)}function Sm(e,n,a,o,u){var f=Q.p;Q.p=f!==0&&8>f?f:8;var M=B.T,A={};B.T=A,of(e,!1,n,a);try{var V=u(),st=B.S;if(st!==null&&st(A,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var _t=Mx(V,o);Oo(e,n,_t,vi(e))}else Oo(e,n,o,vi(e))}catch(Mt){Oo(e,n,{then:function(){},status:"rejected",reason:Mt},vi())}finally{Q.p=f,B.T=M}}function Rx(){}function sf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Mm(e).queue;Sm(e,u,n,Z,a===null?Rx:function(){return Em(e),a(o)})}function Mm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Em(e){var n=Mm(e).next.queue;Oo(e,n,{},vi())}function rf(){return Wn(Jo)}function bm(){return bn().memoizedState}function Tm(){return bn().memoizedState}function Cx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=vi();e=Wa(a);var o=Ya(n,e,a);o!==null&&(xi(o,n,a),Co(o,n,a)),n={cache:Pu()},e.payload=n;return}n=n.return}}function wx(e,n,a){var o=vi();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},jl(e)?Rm(n,a):(a=Tu(e,n,a,o),a!==null&&(xi(a,e,o),Cm(a,n,o)))}function Am(e,n,a){var o=vi();Oo(e,n,a,o)}function Oo(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(jl(e))Rm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,A=f(M,a);if(u.hasEagerState=!0,u.eagerState=A,di(A,M))return Rl(e,n,u,0),tn===null&&Al(),!1}catch{}finally{}if(a=Tu(e,n,u,o),a!==null)return xi(a,e,o),Cm(a,n,o),!0}return!1}function of(e,n,a,o){if(o={lane:2,revertLane:Ff(),action:o,hasEagerState:!1,eagerState:null,next:null},jl(e)){if(n)throw Error(s(479))}else n=Tu(e,a,o,2),n!==null&&xi(n,e,2)}function jl(e){var n=e.alternate;return e===xe||n!==null&&n===xe}function Rm(e,n){xr=Bl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Cm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,le(e,a)}}var Xl={readContext:Wn,use:Hl,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn},wm={readContext:Wn,use:Hl,useCallback:function(e,n){return ii().memoizedState=[e,n===void 0?null:n],e},useContext:Wn,useEffect:hm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,kl(4194308,4,gm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return kl(4194308,4,e,n)},useInsertionEffect:function(e,n){kl(4,2,e,n)},useMemo:function(e,n){var a=ii();n=n===void 0?null:n;var o=e();if(zs){Rt(!0);try{e()}finally{Rt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=ii();if(a!==void 0){var u=a(n);if(zs){Rt(!0);try{a(n)}finally{Rt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=wx.bind(null,xe,e),[o.memoizedState,e]},useRef:function(e){var n=ii();return e={current:e},n.memoizedState=e},useState:function(e){e=tf(e);var n=e.queue,a=Am.bind(null,xe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(e,n){var a=ii();return af(a,e,n)},useTransition:function(){var e=tf(!1);return e=Sm.bind(null,xe,e.queue,!0,!1),ii().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=xe,u=ii();if(Fe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),tn===null)throw Error(s(349));(Pe&124)!==0||Kp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,hm(Jp.bind(null,o,f,e),[e]),o.flags|=2048,Sr(9,Vl(),Qp.bind(null,o,f,a,n),null),a},useId:function(){var e=ii(),n=tn.identifierPrefix;if(Fe){var a=ya,o=xa;a=(o&~(1<<32-jt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Fl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Ex++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:rf,useFormState:om,useActionState:om,useOptimistic:function(e){var n=ii();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,xe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Qu,useCacheRefresh:function(){return ii().memoizedState=Cx.bind(null,xe)}},Dm={readContext:Wn,use:Hl,useCallback:vm,useContext:Wn,useEffect:dm,useImperativeHandle:_m,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:xm,useReducer:Gl,useRef:fm,useState:function(){return Gl(Ea)},useDebugValue:nf,useDeferredValue:function(e,n){var a=bn();return ym(a,We.memoizedState,e,n)},useTransition:function(){var e=Gl(Ea)[0],n=bn().memoizedState;return[typeof e=="boolean"?e:No(e),n]},useSyncExternalStore:Zp,useId:bm,useHostTransitionStatus:rf,useFormState:lm,useActionState:lm,useOptimistic:function(e,n){var a=bn();return em(a,We,e,n)},useMemoCache:Qu,useCacheRefresh:Tm},Dx={readContext:Wn,use:Hl,useCallback:vm,useContext:Wn,useEffect:dm,useImperativeHandle:_m,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:xm,useReducer:$u,useRef:fm,useState:function(){return $u(Ea)},useDebugValue:nf,useDeferredValue:function(e,n){var a=bn();return We===null?af(a,e,n):ym(a,We.memoizedState,e,n)},useTransition:function(){var e=$u(Ea)[0],n=bn().memoizedState;return[typeof e=="boolean"?e:No(e),n]},useSyncExternalStore:Zp,useId:bm,useHostTransitionStatus:rf,useFormState:um,useActionState:um,useOptimistic:function(e,n){var a=bn();return We!==null?em(a,We,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Qu,useCacheRefresh:Tm},Mr=null,Po=0;function ql(e){var n=Po;return Po+=1,Mr===null&&(Mr=[]),Gp(Mr,e,n)}function zo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Wl(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Um(e){var n=e._init;return n(e._payload)}function Nm(e){function n(J,W){if(e){var it=J.deletions;it===null?(J.deletions=[W],J.flags|=16):it.push(W)}}function a(J,W){if(!e)return null;for(;W!==null;)n(J,W),W=W.sibling;return null}function o(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function u(J,W){return J=va(J,W),J.index=0,J.sibling=null,J}function f(J,W,it){return J.index=it,e?(it=J.alternate,it!==null?(it=it.index,it<W?(J.flags|=67108866,W):it):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function M(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function A(J,W,it,yt){return W===null||W.tag!==6?(W=Ru(it,J.mode,yt),W.return=J,W):(W=u(W,it),W.return=J,W)}function V(J,W,it,yt){var Wt=it.type;return Wt===b?_t(J,W,it.props.children,yt,it.key):W!==null&&(W.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===q&&Um(Wt)===W.type)?(W=u(W,it.props),zo(W,it),W.return=J,W):(W=wl(it.type,it.key,it.props,null,J.mode,yt),zo(W,it),W.return=J,W)}function st(J,W,it,yt){return W===null||W.tag!==4||W.stateNode.containerInfo!==it.containerInfo||W.stateNode.implementation!==it.implementation?(W=Cu(it,J.mode,yt),W.return=J,W):(W=u(W,it.children||[]),W.return=J,W)}function _t(J,W,it,yt,Wt){return W===null||W.tag!==7?(W=Cs(it,J.mode,yt,Wt),W.return=J,W):(W=u(W,it),W.return=J,W)}function Mt(J,W,it){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Ru(""+W,J.mode,it),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return it=wl(W.type,W.key,W.props,null,J.mode,it),zo(it,W),it.return=J,it;case S:return W=Cu(W,J.mode,it),W.return=J,W;case q:var yt=W._init;return W=yt(W._payload),Mt(J,W,it)}if(mt(W)||at(W))return W=Cs(W,J.mode,it,null),W.return=J,W;if(typeof W.then=="function")return Mt(J,ql(W),it);if(W.$$typeof===P)return Mt(J,Ll(J,W),it);Wl(J,W)}return null}function lt(J,W,it,yt){var Wt=W!==null?W.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return Wt!==null?null:A(J,W,""+it,yt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case y:return it.key===Wt?V(J,W,it,yt):null;case S:return it.key===Wt?st(J,W,it,yt):null;case q:return Wt=it._init,it=Wt(it._payload),lt(J,W,it,yt)}if(mt(it)||at(it))return Wt!==null?null:_t(J,W,it,yt,null);if(typeof it.then=="function")return lt(J,W,ql(it),yt);if(it.$$typeof===P)return lt(J,W,Ll(J,it),yt);Wl(J,it)}return null}function ut(J,W,it,yt,Wt){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return J=J.get(it)||null,A(W,J,""+yt,Wt);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case y:return J=J.get(yt.key===null?it:yt.key)||null,V(W,J,yt,Wt);case S:return J=J.get(yt.key===null?it:yt.key)||null,st(W,J,yt,Wt);case q:var Ee=yt._init;return yt=Ee(yt._payload),ut(J,W,it,yt,Wt)}if(mt(yt)||at(yt))return J=J.get(it)||null,_t(W,J,yt,Wt,null);if(typeof yt.then=="function")return ut(J,W,it,ql(yt),Wt);if(yt.$$typeof===P)return ut(J,W,it,Ll(W,yt),Wt);Wl(W,yt)}return null}function ce(J,W,it,yt){for(var Wt=null,Ee=null,te=W,re=W=0,Bn=null;te!==null&&re<it.length;re++){te.index>re?(Bn=te,te=null):Bn=te.sibling;var Ie=lt(J,te,it[re],yt);if(Ie===null){te===null&&(te=Bn);break}e&&te&&Ie.alternate===null&&n(J,te),W=f(Ie,W,re),Ee===null?Wt=Ie:Ee.sibling=Ie,Ee=Ie,te=Bn}if(re===it.length)return a(J,te),Fe&&Ds(J,re),Wt;if(te===null){for(;re<it.length;re++)te=Mt(J,it[re],yt),te!==null&&(W=f(te,W,re),Ee===null?Wt=te:Ee.sibling=te,Ee=te);return Fe&&Ds(J,re),Wt}for(te=o(te);re<it.length;re++)Bn=ut(te,J,re,it[re],yt),Bn!==null&&(e&&Bn.alternate!==null&&te.delete(Bn.key===null?re:Bn.key),W=f(Bn,W,re),Ee===null?Wt=Bn:Ee.sibling=Bn,Ee=Bn);return e&&te.forEach(function(fs){return n(J,fs)}),Fe&&Ds(J,re),Wt}function se(J,W,it,yt){if(it==null)throw Error(s(151));for(var Wt=null,Ee=null,te=W,re=W=0,Bn=null,Ie=it.next();te!==null&&!Ie.done;re++,Ie=it.next()){te.index>re?(Bn=te,te=null):Bn=te.sibling;var fs=lt(J,te,Ie.value,yt);if(fs===null){te===null&&(te=Bn);break}e&&te&&fs.alternate===null&&n(J,te),W=f(fs,W,re),Ee===null?Wt=fs:Ee.sibling=fs,Ee=fs,te=Bn}if(Ie.done)return a(J,te),Fe&&Ds(J,re),Wt;if(te===null){for(;!Ie.done;re++,Ie=it.next())Ie=Mt(J,Ie.value,yt),Ie!==null&&(W=f(Ie,W,re),Ee===null?Wt=Ie:Ee.sibling=Ie,Ee=Ie);return Fe&&Ds(J,re),Wt}for(te=o(te);!Ie.done;re++,Ie=it.next())Ie=ut(te,J,re,Ie.value,yt),Ie!==null&&(e&&Ie.alternate!==null&&te.delete(Ie.key===null?re:Ie.key),W=f(Ie,W,re),Ee===null?Wt=Ie:Ee.sibling=Ie,Ee=Ie);return e&&te.forEach(function(Uy){return n(J,Uy)}),Fe&&Ds(J,re),Wt}function Ze(J,W,it,yt){if(typeof it=="object"&&it!==null&&it.type===b&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case y:t:{for(var Wt=it.key;W!==null;){if(W.key===Wt){if(Wt=it.type,Wt===b){if(W.tag===7){a(J,W.sibling),yt=u(W,it.props.children),yt.return=J,J=yt;break t}}else if(W.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===q&&Um(Wt)===W.type){a(J,W.sibling),yt=u(W,it.props),zo(yt,it),yt.return=J,J=yt;break t}a(J,W);break}else n(J,W);W=W.sibling}it.type===b?(yt=Cs(it.props.children,J.mode,yt,it.key),yt.return=J,J=yt):(yt=wl(it.type,it.key,it.props,null,J.mode,yt),zo(yt,it),yt.return=J,J=yt)}return M(J);case S:t:{for(Wt=it.key;W!==null;){if(W.key===Wt)if(W.tag===4&&W.stateNode.containerInfo===it.containerInfo&&W.stateNode.implementation===it.implementation){a(J,W.sibling),yt=u(W,it.children||[]),yt.return=J,J=yt;break t}else{a(J,W);break}else n(J,W);W=W.sibling}yt=Cu(it,J.mode,yt),yt.return=J,J=yt}return M(J);case q:return Wt=it._init,it=Wt(it._payload),Ze(J,W,it,yt)}if(mt(it))return ce(J,W,it,yt);if(at(it)){if(Wt=at(it),typeof Wt!="function")throw Error(s(150));return it=Wt.call(it),se(J,W,it,yt)}if(typeof it.then=="function")return Ze(J,W,ql(it),yt);if(it.$$typeof===P)return Ze(J,W,Ll(J,it),yt);Wl(J,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,W!==null&&W.tag===6?(a(J,W.sibling),yt=u(W,it),yt.return=J,J=yt):(a(J,W),yt=Ru(it,J.mode,yt),yt.return=J,J=yt),M(J)):a(J,W)}return function(J,W,it,yt){try{Po=0;var Wt=Ze(J,W,it,yt);return Mr=null,Wt}catch(te){if(te===Ao||te===Pl)throw te;var Ee=pi(29,te,null,J.mode);return Ee.lanes=yt,Ee.return=J,Ee}finally{}}}var Er=Nm(!0),Lm=Nm(!1),Oi=nt(null),ia=null;function Ka(e){var n=e.alternate;Tt(wn,wn.current&1),Tt(Oi,e),ia===null&&(n===null||vr.current!==null||n.memoizedState!==null)&&(ia=e)}function Om(e){if(e.tag===22){if(Tt(wn,wn.current),Tt(Oi,e),ia===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(ia=e)}}else Qa()}function Qa(){Tt(wn,wn.current),Tt(Oi,Oi.current)}function ba(e){St(Oi),ia===e&&(ia=null),St(wn)}var wn=nt(0);function Yl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Qf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function lf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var cf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=vi(),u=Wa(o);u.payload=n,a!=null&&(u.callback=a),n=Ya(e,u,o),n!==null&&(xi(n,e,o),Co(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=vi(),u=Wa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ya(e,u,o),n!==null&&(xi(n,e,o),Co(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=vi(),o=Wa(a);o.tag=2,n!=null&&(o.callback=n),n=Ya(e,o,a),n!==null&&(xi(n,e,a),Co(n,e,a))}};function Pm(e,n,a,o,u,f,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,M):n.prototype&&n.prototype.isPureReactComponent?!vo(a,o)||!vo(u,f):!0}function zm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&cf.enqueueReplaceState(n,n.state,null)}function Is(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Zl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Im(e){Zl(e)}function Bm(e){console.error(e)}function Fm(e){Zl(e)}function Kl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Hm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function uf(e,n,a){return a=Wa(a),a.tag=3,a.payload={element:null},a.callback=function(){Kl(e,n)},a}function Gm(e){return e=Wa(e),e.tag=3,e}function Vm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Hm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Hm(n,a,o),typeof u!="function"&&(is===null?is=new Set([this]):is.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Ux(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Eo(n,a,u,!0),a=Oi.current,a!==null){switch(a.tag){case 13:return ia===null?Of():a.alternate===null&&dn===0&&(dn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Bu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),zf(e,o,u)),!1;case 22:return a.flags|=65536,o===Bu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),zf(e,o,u)),!1}throw Error(s(435,a.tag))}return zf(e,o,u),Of(),!1}if(Fe)return n=Oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Uu&&(e=Error(s(422),{cause:o}),Mo(Di(e,a)))):(o!==Uu&&(n=Error(s(423),{cause:o}),Mo(Di(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Di(o,a),u=uf(e.stateNode,o,u),Gu(e,u),dn!==4&&(dn=2)),!1;var f=Error(s(520),{cause:o});if(f=Di(f,a),ko===null?ko=[f]:ko.push(f),dn!==4&&(dn=2),n===null)return!0;o=Di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=uf(a.stateNode,o,e),Gu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(is===null||!is.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Gm(u),Vm(u,e,a,o),Gu(a,u),!1}a=a.return}while(a!==null);return!1}var km=Error(s(461)),zn=!1;function Gn(e,n,a,o){n.child=e===null?Lm(n,null,a,o):Er(n,e.child,a,o)}function jm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var M={};for(var A in o)A!=="ref"&&(M[A]=o[A])}else M=o;return Os(n),o=qu(e,n,a,M,f,u),A=Wu(),e!==null&&!zn?(Yu(e,n,u),Ta(e,n,u)):(Fe&&A&&wu(n),n.flags|=1,Gn(e,n,o,u),n.child)}function Xm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Au(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,qm(e,n,f,o,u)):(e=wl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!vf(e,u)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:vo,a(M,o)&&e.ref===n.ref)return Ta(e,n,u)}return n.flags|=1,e=va(f,o),e.ref=n.ref,e.return=n,n.child=e}function qm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(vo(f,o)&&e.ref===n.ref)if(zn=!1,n.pendingProps=o=f,vf(e,u))(e.flags&131072)!==0&&(zn=!0);else return n.lanes=e.lanes,Ta(e,n,u)}return ff(e,n,a,o,u)}function Wm(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Ym(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ol(n,f!==null?f.cachePool:null),f!==null?qp(n,f):ku(),Om(n);else return n.lanes=n.childLanes=536870912,Ym(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(Ol(n,f.cachePool),qp(n,f),Qa(),n.memoizedState=null):(e!==null&&Ol(n,null),ku(),Qa());return Gn(e,n,u,a),n.child}function Ym(e,n,a,o){var u=Iu();return u=u===null?null:{parent:Cn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Ol(n,null),ku(),Om(n),e!==null&&Eo(e,n,o,!0),null}function Ql(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ff(e,n,a,o,u){return Os(n),a=qu(e,n,a,o,void 0,u),o=Wu(),e!==null&&!zn?(Yu(e,n,u),Ta(e,n,u)):(Fe&&o&&wu(n),n.flags|=1,Gn(e,n,a,u),n.child)}function Zm(e,n,a,o,u,f){return Os(n),n.updateQueue=null,a=Yp(n,o,a,u),Wp(e),o=Wu(),e!==null&&!zn?(Yu(e,n,f),Ta(e,n,f)):(Fe&&o&&wu(n),n.flags|=1,Gn(e,n,a,f),n.child)}function Km(e,n,a,o,u){if(Os(n),n.stateNode===null){var f=dr,M=a.contextType;typeof M=="object"&&M!==null&&(f=Wn(M)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=cf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Fu(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?Wn(M):dr,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(lf(n,a,M,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&cf.enqueueReplaceState(f,f.state,null),Do(n,o,f,u),wo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,V=Is(a,A);f.props=V;var st=f.context,_t=a.contextType;M=dr,typeof _t=="object"&&_t!==null&&(M=Wn(_t));var Mt=a.getDerivedStateFromProps;_t=typeof Mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,_t||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||st!==M)&&zm(n,f,o,M),qa=!1;var lt=n.memoizedState;f.state=lt,Do(n,o,f,u),wo(),st=n.memoizedState,A||lt!==st||qa?(typeof Mt=="function"&&(lf(n,a,Mt,o),st=n.memoizedState),(V=qa||Pm(n,a,V,o,lt,st,M))?(_t||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=st),f.props=o,f.state=st,f.context=M,o=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Hu(e,n),M=n.memoizedProps,_t=Is(a,M),f.props=_t,Mt=n.pendingProps,lt=f.context,st=a.contextType,V=dr,typeof st=="object"&&st!==null&&(V=Wn(st)),A=a.getDerivedStateFromProps,(st=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==Mt||lt!==V)&&zm(n,f,o,V),qa=!1,lt=n.memoizedState,f.state=lt,Do(n,o,f,u),wo();var ut=n.memoizedState;M!==Mt||lt!==ut||qa||e!==null&&e.dependencies!==null&&Nl(e.dependencies)?(typeof A=="function"&&(lf(n,a,A,o),ut=n.memoizedState),(_t=qa||Pm(n,a,_t,o,lt,ut,V)||e!==null&&e.dependencies!==null&&Nl(e.dependencies))?(st||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ut,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ut,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),f.props=o,f.state=ut,f.context=V,o=_t):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ql(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Er(n,e.child,null,u),n.child=Er(n,null,a,u)):Gn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Ta(e,n,u),e}function Qm(e,n,a,o){return So(),n.flags|=256,Gn(e,n,a,o),n.child}var hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function df(e){return{baseLanes:e,cachePool:Bp()}}function pf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Pi),e}function Jm(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=e!==null&&e.memoizedState===null?!1:(wn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Fe){if(u?Ka(n):Qa(),Fe){var A=hn,V;if(V=A){t:{for(V=A,A=na;V.nodeType!==8;){if(!A){A=null;break t}if(V=ji(V.nextSibling),V===null){A=null;break t}}A=V}A!==null?(n.memoizedState={dehydrated:A,treeContext:ws!==null?{id:xa,overflow:ya}:null,retryLane:536870912,hydrationErrors:null},V=pi(18,null,null,0),V.stateNode=A,V.return=n,n.child=V,$n=n,hn=null,V=!0):V=!1}V||Ns(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Qf(A)?n.lanes=32:n.lanes=536870912,null;ba(n)}return A=o.children,o=o.fallback,u?(Qa(),u=n.mode,A=Jl({mode:"hidden",children:A},u),o=Cs(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,u=n.child,u.memoizedState=df(a),u.childLanes=pf(e,M,a),n.memoizedState=hf,o):(Ka(n),mf(n,A))}if(V=e.memoizedState,V!==null&&(A=V.dehydrated,A!==null)){if(f)n.flags&256?(Ka(n),n.flags&=-257,n=gf(e,n,a)):n.memoizedState!==null?(Qa(),n.child=e.child,n.flags|=128,n=null):(Qa(),u=o.fallback,A=n.mode,o=Jl({mode:"visible",children:o.children},A),u=Cs(u,A,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Er(n,e.child,null,a),o=n.child,o.memoizedState=df(a),o.childLanes=pf(e,M,a),n.memoizedState=hf,n=u);else if(Ka(n),Qf(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var st=M.dgst;M=st,o=Error(s(419)),o.stack="",o.digest=M,Mo({value:o,source:null,stack:null}),n=gf(e,n,a)}else if(zn||Eo(e,n,a,!1),M=(a&e.childLanes)!==0,zn||M){if(M=tn,M!==null&&(o=a&-a,o=(o&42)!==0?1:Ne(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==V.retryLane))throw V.retryLane=o,hr(e,o),xi(M,e,o),km;A.data==="$?"||Of(),n=gf(e,n,a)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,hn=ji(A.nextSibling),$n=n,Fe=!0,Us=null,na=!1,e!==null&&(Ni[Li++]=xa,Ni[Li++]=ya,Ni[Li++]=ws,xa=e.id,ya=e.overflow,ws=n),n=mf(n,o.children),n.flags|=4096);return n}return u?(Qa(),u=o.fallback,A=n.mode,V=e.child,st=V.sibling,o=va(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,st!==null?u=va(st,u):(u=Cs(u,A,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,A=e.child.memoizedState,A===null?A=df(a):(V=A.cachePool,V!==null?(st=Cn._currentValue,V=V.parent!==st?{parent:st,pool:st}:V):V=Bp(),A={baseLanes:A.baseLanes|a,cachePool:V}),u.memoizedState=A,u.childLanes=pf(e,M,a),n.memoizedState=hf,o):(Ka(n),a=e.child,e=a.sibling,a=va(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function mf(e,n){return n=Jl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Jl(e,n){return e=pi(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function gf(e,n,a){return Er(n,e.child,null,a),e=mf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function $m(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Lu(e.return,n,a)}function _f(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function t0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(Gn(e,n,o.children,a),o=wn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$m(e,a,n);else if(e.tag===19)$m(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Tt(wn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Yl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),_f(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Yl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}_f(n,!0,a,null,f);break;case"together":_f(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ta(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ns|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Eo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=va(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=va(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function vf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Nl(e)))}function Nx(e,n,a){switch(n.tag){case 3:Lt(n,n.stateNode.containerInfo),Xa(n,Cn,e.memoizedState.cache),So();break;case 27:case 5:Kt(n);break;case 4:Lt(n,n.stateNode.containerInfo);break;case 10:Xa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ka(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Jm(e,n,a):(Ka(n),e=Ta(e,n,a),e!==null?e.sibling:null);Ka(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Eo(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return t0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Tt(wn,wn.current),o)break;return null;case 22:case 23:return n.lanes=0,Wm(e,n,a);case 24:Xa(n,Cn,e.memoizedState.cache)}return Ta(e,n,a)}function e0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)zn=!0;else{if(!vf(e,a)&&(n.flags&128)===0)return zn=!1,Nx(e,n,a);zn=(e.flags&131072)!==0}else zn=!1,Fe&&(n.flags&1048576)!==0&&Up(n,Ul,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Au(o)?(e=Is(o,e),n.tag=1,n=Km(null,n,o,e,a)):(n.tag=0,n=ff(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===U){n.tag=11,n=jm(null,n,o,e,a);break t}else if(u===H){n.tag=14,n=Xm(null,n,o,e,a);break t}}throw n=ft(o)||o,Error(s(306,n,""))}}return n;case 0:return ff(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Is(o,n.pendingProps),Km(e,n,o,u,a);case 3:t:{if(Lt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Hu(e,n),Do(n,o,null,a);var M=n.memoizedState;if(o=M.cache,Xa(n,Cn,o),o!==f.cache&&Ou(n,[Cn],a,!0),wo(),o=M.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Qm(e,n,o,a);break t}else if(o!==u){u=Di(Error(s(424)),n),Mo(u),n=Qm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(hn=ji(e.firstChild),$n=n,Fe=!0,Us=null,na=!0,a=Lm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(So(),o===u){n=Ta(e,n,a);break t}Gn(e,n,o,a)}n=n.child}return n;case 26:return Ql(e,n),e===null?(a=sg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Fe||(a=n.type,e=n.pendingProps,o=hc(xt.current).createElement(a),o[gn]=n,o[Sn]=e,kn(o,a,e),un(o),n.stateNode=o):n.memoizedState=sg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Kt(n),e===null&&Fe&&(o=n.stateNode=ng(n.type,n.pendingProps,xt.current),$n=n,na=!0,u=hn,rs(n.type)?(Jf=u,hn=ji(o.firstChild)):hn=u),Gn(e,n,n.pendingProps.children,a),Ql(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Fe&&((u=o=hn)&&(o=ry(o,n.type,n.pendingProps,na),o!==null?(n.stateNode=o,$n=n,hn=ji(o.firstChild),na=!1,u=!0):u=!1),u||Ns(n)),Kt(n),u=n.type,f=n.pendingProps,M=e!==null?e.memoizedProps:null,o=f.children,Yf(u,f)?o=null:M!==null&&Yf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=qu(e,n,bx,null,null,a),Jo._currentValue=u),Ql(e,n),Gn(e,n,o,a),n.child;case 6:return e===null&&Fe&&((e=a=hn)&&(a=oy(a,n.pendingProps,na),a!==null?(n.stateNode=a,$n=n,hn=null,e=!0):e=!1),e||Ns(n)),null;case 13:return Jm(e,n,a);case 4:return Lt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Er(n,null,o,a):Gn(e,n,o,a),n.child;case 11:return jm(e,n,n.type,n.pendingProps,a);case 7:return Gn(e,n,n.pendingProps,a),n.child;case 8:return Gn(e,n,n.pendingProps.children,a),n.child;case 12:return Gn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Xa(n,n.type,o.value),Gn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Os(n),u=Wn(u),o=o(u),n.flags|=1,Gn(e,n,o,a),n.child;case 14:return Xm(e,n,n.type,n.pendingProps,a);case 15:return qm(e,n,n.type,n.pendingProps,a);case 19:return t0(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Jl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=va(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Wm(e,n,a);case 24:return Os(n),o=Wn(Cn),e===null?(u=Iu(),u===null&&(u=tn,f=Pu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Fu(n),Xa(n,Cn,u)):((e.lanes&a)!==0&&(Hu(e,n),Do(n,null,null,a),wo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Xa(n,Cn,o)):(o=f.cache,Xa(n,Cn,o),o!==u.cache&&Ou(n,[Cn],a,!0))),Gn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Aa(e){e.flags|=4}function n0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ug(n)){if(n=Oi.current,n!==null&&((Pe&4194048)===Pe?ia!==null:(Pe&62914560)!==Pe&&(Pe&536870912)===0||n!==ia))throw Ro=Bu,Fp;e.flags|=8192}}function $l(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pt():536870912,e.lanes|=n,Rr|=n)}function Io(e,n){if(!Fe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function cn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Lx(e,n,a){var o=n.pendingProps;switch(Du(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(n),null;case 1:return cn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ma(Cn),ue(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(yo(n)?Aa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Op())),cn(n),null;case 26:return a=n.memoizedState,e===null?(Aa(n),a!==null?(cn(n),n0(n,a)):(cn(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Aa(n),cn(n),n0(n,a)):(cn(n),n.flags&=-16777217):(e.memoizedProps!==o&&Aa(n),cn(n),n.flags&=-16777217),null;case 27:he(n),a=xt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return cn(n),null}e=tt.current,yo(n)?Np(n):(e=ng(u,o,a),n.stateNode=e,Aa(n))}return cn(n),null;case 5:if(he(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return cn(n),null}if(e=tt.current,yo(n))Np(n);else{switch(u=hc(xt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[gn]=n,e[Sn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(kn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Aa(n)}}return cn(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=xt.current,yo(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=$n,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[gn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Z0(e.nodeValue,a)),e||Ns(n)}else e=hc(e).createTextNode(o),e[gn]=n,n.stateNode=e}return cn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=yo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[gn]=n}else So(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;cn(n),u=!1}else u=Op(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ba(n),n):(ba(n),null)}if(ba(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),$l(n,n.updateQueue),cn(n),null;case 4:return ue(),e===null&&kf(n.stateNode.containerInfo),cn(n),null;case 10:return Ma(n.type),cn(n),null;case 19:if(St(wn),u=n.memoizedState,u===null)return cn(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)Io(u,!1);else{if(dn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Yl(e),f!==null){for(n.flags|=128,Io(u,!1),e=f.updateQueue,n.updateQueue=e,$l(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Dp(a,e),a=a.sibling;return Tt(wn,wn.current&1|2),n.child}e=e.sibling}u.tail!==null&&ne()>nc&&(n.flags|=128,o=!0,Io(u,!1),n.lanes=4194304)}else{if(!o)if(e=Yl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,$l(n,e),Io(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Fe)return cn(n),null}else 2*ne()-u.renderingStartTime>nc&&a!==536870912&&(n.flags|=128,o=!0,Io(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=ne(),n.sibling=null,e=wn.current,Tt(wn,o?e&1|2:e&1),n):(cn(n),null);case 22:case 23:return ba(n),ju(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(cn(n),n.subtreeFlags&6&&(n.flags|=8192)):cn(n),a=n.updateQueue,a!==null&&$l(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&St(Ps),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ma(Cn),cn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ox(e,n){switch(Du(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ma(Cn),ue(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 13:if(ba(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));So()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return St(wn),null;case 4:return ue(),null;case 10:return Ma(n.type),null;case 22:case 23:return ba(n),ju(),e!==null&&St(Ps),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ma(Cn),null;case 25:return null;default:return null}}function i0(e,n){switch(Du(n),n.tag){case 3:Ma(Cn),ue();break;case 26:case 27:case 5:he(n);break;case 4:ue();break;case 13:ba(n);break;case 19:St(wn);break;case 10:Ma(n.type);break;case 22:case 23:ba(n),ju(),e!==null&&St(Ps);break;case 24:Ma(Cn)}}function Bo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,M=a.inst;o=f(),M.destroy=o}a=a.next}while(a!==u)}}catch(A){Je(n,n.return,A)}}function Ja(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var M=o.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,u=n;var V=a,st=A;try{st()}catch(_t){Je(u,V,_t)}}}o=o.next}while(o!==f)}}catch(_t){Je(n,n.return,_t)}}function a0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Xp(n,a)}catch(o){Je(e,e.return,o)}}}function s0(e,n,a){a.props=Is(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Je(e,n,o)}}function Fo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Je(e,n,u)}}function aa(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Je(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Je(e,n,u)}else a.current=null}function r0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Je(e,e.return,u)}}function xf(e,n,a){try{var o=e.stateNode;ey(o,e.type,a,n),o[Sn]=n}catch(u){Je(e,e.return,u)}}function o0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rs(e.type)||e.tag===4}function yf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||o0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=fc));else if(o!==4&&(o===27&&rs(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Sf(e,n,a),e=e.sibling;e!==null;)Sf(e,n,a),e=e.sibling}function tc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&rs(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(tc(e,n,a),e=e.sibling;e!==null;)tc(e,n,a),e=e.sibling}function l0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);kn(n,o,a),n[gn]=e,n[Sn]=a}catch(f){Je(e,e.return,f)}}var Ra=!1,yn=!1,Mf=!1,c0=typeof WeakSet=="function"?WeakSet:Set,In=null;function Px(e,n){if(e=e.containerInfo,qf=vc,e=yp(e),xu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var M=0,A=-1,V=-1,st=0,_t=0,Mt=e,lt=null;e:for(;;){for(var ut;Mt!==a||u!==0&&Mt.nodeType!==3||(A=M+u),Mt!==f||o!==0&&Mt.nodeType!==3||(V=M+o),Mt.nodeType===3&&(M+=Mt.nodeValue.length),(ut=Mt.firstChild)!==null;)lt=Mt,Mt=ut;for(;;){if(Mt===e)break e;if(lt===a&&++st===u&&(A=M),lt===f&&++_t===o&&(V=M),(ut=Mt.nextSibling)!==null)break;Mt=lt,lt=Mt.parentNode}Mt=ut}a=A===-1||V===-1?null:{start:A,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wf={focusedElem:e,selectionRange:a},vc=!1,In=n;In!==null;)if(n=In,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,In=e;else for(;In!==null;){switch(n=In,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ce=Is(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ce,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(se){Je(a,a.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Kf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,In=e;break}In=n.return}}function u0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:$a(e,a),o&4&&Bo(5,a);break;case 1:if($a(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Je(a,a.return,M)}else{var u=Is(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Je(a,a.return,M)}}o&64&&a0(a),o&512&&Fo(a,a.return);break;case 3:if($a(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Xp(e,n)}catch(M){Je(a,a.return,M)}}break;case 27:n===null&&o&4&&l0(a);case 26:case 5:$a(e,a),n===null&&o&4&&r0(a),o&512&&Fo(a,a.return);break;case 12:$a(e,a);break;case 13:$a(e,a),o&4&&d0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=jx.bind(null,a),ly(e,a))));break;case 22:if(o=a.memoizedState!==null||Ra,!o){n=n!==null&&n.memoizedState!==null||yn,u=Ra;var f=yn;Ra=o,(yn=n)&&!f?ts(e,a,(a.subtreeFlags&8772)!==0):$a(e,a),Ra=u,yn=f}break;case 30:break;default:$a(e,a)}}function f0(e){var n=e.alternate;n!==null&&(e.alternate=null,f0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&fi(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var on=null,ai=!1;function Ca(e,n,a){for(a=a.child;a!==null;)h0(e,n,a),a=a.sibling}function h0(e,n,a){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(z,a)}catch{}switch(a.tag){case 26:yn||aa(a,n),Ca(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:yn||aa(a,n);var o=on,u=ai;rs(a.type)&&(on=a.stateNode,ai=!1),Ca(e,n,a),Yo(a.stateNode),on=o,ai=u;break;case 5:yn||aa(a,n);case 6:if(o=on,u=ai,on=null,Ca(e,n,a),on=o,ai=u,on!==null)if(ai)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(a.stateNode)}catch(f){Je(a,n,f)}else try{on.removeChild(a.stateNode)}catch(f){Je(a,n,f)}break;case 18:on!==null&&(ai?(e=on,tg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),nl(e)):tg(on,a.stateNode));break;case 4:o=on,u=ai,on=a.stateNode.containerInfo,ai=!0,Ca(e,n,a),on=o,ai=u;break;case 0:case 11:case 14:case 15:yn||Ja(2,a,n),yn||Ja(4,a,n),Ca(e,n,a);break;case 1:yn||(aa(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&s0(a,n,o)),Ca(e,n,a);break;case 21:Ca(e,n,a);break;case 22:yn=(o=yn)||a.memoizedState!==null,Ca(e,n,a),yn=o;break;default:Ca(e,n,a)}}function d0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{nl(e)}catch(a){Je(n,n.return,a)}}function zx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new c0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new c0),n;default:throw Error(s(435,e.tag))}}function Ef(e,n){var a=zx(e);n.forEach(function(o){var u=Xx.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function mi(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,M=n,A=M;t:for(;A!==null;){switch(A.tag){case 27:if(rs(A.type)){on=A.stateNode,ai=!1;break t}break;case 5:on=A.stateNode,ai=!1;break t;case 3:case 4:on=A.stateNode.containerInfo,ai=!0;break t}A=A.return}if(on===null)throw Error(s(160));h0(f,M,u),on=null,ai=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)p0(n,e),n=n.sibling}var ki=null;function p0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mi(n,e),gi(e),o&4&&(Ja(3,e,e.return),Bo(3,e),Ja(5,e,e.return));break;case 1:mi(n,e),gi(e),o&512&&(yn||a===null||aa(a,a.return)),o&64&&Ra&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=ki;if(mi(n,e),gi(e),o&512&&(yn||a===null||aa(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ta]||f[gn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),kn(f,o,a),f[gn]=e,un(f),o=f;break t;case"link":var M=lg("link","href",u).get(o+(a.href||""));if(M){for(var A=0;A<M.length;A++)if(f=M[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(A,1);break e}}f=u.createElement(o),kn(f,o,a),u.head.appendChild(f);break;case"meta":if(M=lg("meta","content",u).get(o+(a.content||""))){for(A=0;A<M.length;A++)if(f=M[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(A,1);break e}}f=u.createElement(o),kn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[gn]=e,un(f),o=f}e.stateNode=o}else cg(u,e.type,e.stateNode);else e.stateNode=og(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?cg(u,e.type,e.stateNode):og(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&xf(e,e.memoizedProps,a.memoizedProps)}break;case 27:mi(n,e),gi(e),o&512&&(yn||a===null||aa(a,a.return)),a!==null&&o&4&&xf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(mi(n,e),gi(e),o&512&&(yn||a===null||aa(a,a.return)),e.flags&32){u=e.stateNode;try{Ai(u,"")}catch(ut){Je(e,e.return,ut)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,xf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Mf=!0);break;case 6:if(mi(n,e),gi(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ut){Je(e,e.return,ut)}}break;case 3:if(mc=null,u=ki,ki=dc(n.containerInfo),mi(n,e),ki=u,gi(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{nl(n.containerInfo)}catch(ut){Je(e,e.return,ut)}Mf&&(Mf=!1,m0(e));break;case 4:o=ki,ki=dc(e.stateNode.containerInfo),mi(n,e),gi(e),ki=o;break;case 12:mi(n,e),gi(e);break;case 13:mi(n,e),gi(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wf=ne()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ef(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,st=Ra,_t=yn;if(Ra=st||u,yn=_t||V,mi(n,e),yn=_t,Ra=st,gi(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||Ra||yn||Bs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=V.stateNode;var Mt=V.memoizedProps.style,lt=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;A.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(ut){Je(V,V.return,ut)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(ut){Je(V,V.return,ut)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ef(e,a))));break;case 19:mi(n,e),gi(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ef(e,o)));break;case 30:break;case 21:break;default:mi(n,e),gi(e)}}function gi(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(o0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=yf(e);tc(e,f,u);break;case 5:var M=a.stateNode;a.flags&32&&(Ai(M,""),a.flags&=-33);var A=yf(e);tc(e,A,M);break;case 3:case 4:var V=a.stateNode.containerInfo,st=yf(e);Sf(e,st,V);break;default:throw Error(s(161))}}catch(_t){Je(e,e.return,_t)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function m0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;m0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function $a(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)u0(e,n.alternate,n),n=n.sibling}function Bs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ja(4,n,n.return),Bs(n);break;case 1:aa(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&s0(n,n.return,a),Bs(n);break;case 27:Yo(n.stateNode);case 26:case 5:aa(n,n.return),Bs(n);break;case 22:n.memoizedState===null&&Bs(n);break;case 30:Bs(n);break;default:Bs(n)}e=e.sibling}}function ts(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:ts(u,f,a),Bo(4,f);break;case 1:if(ts(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){Je(o,o.return,st)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)jp(V[u],A)}catch(st){Je(o,o.return,st)}}a&&M&64&&a0(f),Fo(f,f.return);break;case 27:l0(f);case 26:case 5:ts(u,f,a),a&&o===null&&M&4&&r0(f),Fo(f,f.return);break;case 12:ts(u,f,a);break;case 13:ts(u,f,a),a&&M&4&&d0(u,f);break;case 22:f.memoizedState===null&&ts(u,f,a),Fo(f,f.return);break;case 30:break;default:ts(u,f,a)}n=n.sibling}}function bf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&bo(a))}function Tf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&bo(e))}function sa(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)g0(e,n,a,o),n=n.sibling}function g0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:sa(e,n,a,o),u&2048&&Bo(9,n);break;case 1:sa(e,n,a,o);break;case 3:sa(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&bo(e)));break;case 12:if(u&2048){sa(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,M=f.id,A=f.onPostCommit;typeof A=="function"&&A(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Je(n,n.return,V)}}else sa(e,n,a,o);break;case 13:sa(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?sa(e,n,a,o):Ho(e,n):f._visibility&2?sa(e,n,a,o):(f._visibility|=2,br(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&bf(M,n);break;case 24:sa(e,n,a,o),u&2048&&Tf(n.alternate,n);break;default:sa(e,n,a,o)}}function br(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,M=n,A=a,V=o,st=M.flags;switch(M.tag){case 0:case 11:case 15:br(f,M,A,V,u),Bo(8,M);break;case 23:break;case 22:var _t=M.stateNode;M.memoizedState!==null?_t._visibility&2?br(f,M,A,V,u):Ho(f,M):(_t._visibility|=2,br(f,M,A,V,u)),u&&st&2048&&bf(M.alternate,M);break;case 24:br(f,M,A,V,u),u&&st&2048&&Tf(M.alternate,M);break;default:br(f,M,A,V,u)}n=n.sibling}}function Ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Ho(a,o),u&2048&&bf(o.alternate,o);break;case 24:Ho(a,o),u&2048&&Tf(o.alternate,o);break;default:Ho(a,o)}n=n.sibling}}var Go=8192;function Tr(e){if(e.subtreeFlags&Go)for(e=e.child;e!==null;)_0(e),e=e.sibling}function _0(e){switch(e.tag){case 26:Tr(e),e.flags&Go&&e.memoizedState!==null&&Sy(ki,e.memoizedState,e.memoizedProps);break;case 5:Tr(e);break;case 3:case 4:var n=ki;ki=dc(e.stateNode.containerInfo),Tr(e),ki=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Go,Go=16777216,Tr(e),Go=n):Tr(e));break;default:Tr(e)}}function v0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];In=o,y0(o,e)}v0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)x0(e),e=e.sibling}function x0(e){switch(e.tag){case 0:case 11:case 15:Vo(e),e.flags&2048&&Ja(9,e,e.return);break;case 3:Vo(e);break;case 12:Vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ec(e)):Vo(e);break;default:Vo(e)}}function ec(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];In=o,y0(o,e)}v0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ja(8,n,n.return),ec(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ec(n));break;default:ec(n)}e=e.sibling}}function y0(e,n){for(;In!==null;){var a=In;switch(a.tag){case 0:case 11:case 15:Ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:bo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,In=o;else t:for(a=e;In!==null;){o=In;var u=o.sibling,f=o.return;if(f0(o),o===a){In=null;break t}if(u!==null){u.return=f,In=u;break t}In=f}}}var Ix={getCacheForType:function(e){var n=Wn(Cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Bx=typeof WeakMap=="function"?WeakMap:Map,ke=0,tn=null,Ae=null,Pe=0,je=0,_i=null,es=!1,Ar=!1,Af=!1,wa=0,dn=0,ns=0,Fs=0,Rf=0,Pi=0,Rr=0,ko=null,si=null,Cf=!1,wf=0,nc=1/0,ic=null,is=null,Vn=0,as=null,Cr=null,wr=0,Df=0,Uf=null,S0=null,jo=0,Nf=null;function vi(){if((ke&2)!==0&&Pe!==0)return Pe&-Pe;if(B.T!==null){var e=gr;return e!==0?e:Ff()}return Ue()}function M0(){Pi===0&&(Pi=(Pe&536870912)===0||Fe?X():536870912);var e=Oi.current;return e!==null&&(e.flags|=32),Pi}function xi(e,n,a){(e===tn&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(Dr(e,0),ss(e,Pe,Pi,!1)),vt(e,a),((ke&2)===0||e!==tn)&&(e===tn&&((ke&2)===0&&(Fs|=a),dn===4&&ss(e,Pe,Pi,!1)),ra(e))}function E0(e,n,a){if((ke&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||ae(e,n),u=o?Gx(e,n):Pf(e,n,!0),f=o;do{if(u===0){Ar&&!o&&ss(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Fx(a)){u=Pf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var A=e;u=ko;var V=A.current.memoizedState.isDehydrated;if(V&&(Dr(A,M).flags|=256),M=Pf(A,M,!1),M!==2){if(Af&&!V){A.errorRecoveryDisabledLanes|=f,Fs|=f,u=4;break t}f=si,si=u,f!==null&&(si===null?si=f:si.push.apply(si,f))}u=M}if(f=!1,u!==2)continue}}if(u===1){Dr(e,0),ss(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ss(o,n,Pi,!es);break t;case 2:si=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=wf+300-ne(),10<u)){if(ss(o,n,Pi,!es),oe(o,0,!0)!==0)break t;o.timeoutHandle=J0(b0.bind(null,o,a,si,ic,Cf,n,Pi,Fs,Rr,es,f,2,-0,0),u);break t}b0(o,a,si,ic,Cf,n,Pi,Fs,Rr,es,f,0,-0,0)}}break}while(!0);ra(e)}function b0(e,n,a,o,u,f,M,A,V,st,_t,Mt,lt,ut){if(e.timeoutHandle=-1,Mt=n.subtreeFlags,(Mt&8192||(Mt&16785408)===16785408)&&(Qo={stylesheets:null,count:0,unsuspend:yy},_0(n),Mt=My(),Mt!==null)){e.cancelPendingCommit=Mt(U0.bind(null,e,n,f,a,o,u,M,A,V,_t,1,lt,ut)),ss(e,f,M,!st);return}U0(e,n,f,a,o,u,M,A,V)}function Fx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!di(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ss(e,n,a,o){n&=~Rf,n&=~Fs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-jt(u),M=1<<f;o[f]=-1,u&=~M}a!==0&&zt(e,a,n)}function ac(){return(ke&6)===0?(Xo(0),!1):!0}function Lf(){if(Ae!==null){if(je===0)var e=Ae.return;else e=Ae,Sa=Ls=null,Zu(e),Mr=null,Po=0,e=Ae;for(;e!==null;)i0(e.alternate,e),e=e.return;Ae=null}}function Dr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,iy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Lf(),tn=e,Ae=a=va(e.current,null),Pe=n,je=0,_i=null,es=!1,Ar=ae(e,n),Af=!1,Rr=Pi=Rf=Fs=ns=dn=0,si=ko=null,Cf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-jt(o),f=1<<u;n|=e[u],o&=~f}return wa=n,Al(),a}function T0(e,n){xe=null,B.H=Xl,n===Ao||n===Pl?(n=Vp(),je=3):n===Fp?(n=Vp(),je=4):je=n===km?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,_i=n,Ae===null&&(dn=1,Kl(e,Di(n,e.current)))}function A0(){var e=B.H;return B.H=Xl,e===null?Xl:e}function R0(){var e=B.A;return B.A=Ix,e}function Of(){dn=4,es||(Pe&4194048)!==Pe&&Oi.current!==null||(Ar=!0),(ns&134217727)===0&&(Fs&134217727)===0||tn===null||ss(tn,Pe,Pi,!1)}function Pf(e,n,a){var o=ke;ke|=2;var u=A0(),f=R0();(tn!==e||Pe!==n)&&(ic=null,Dr(e,n)),n=!1;var M=dn;t:do try{if(je!==0&&Ae!==null){var A=Ae,V=_i;switch(je){case 8:Lf(),M=6;break t;case 3:case 2:case 9:case 6:Oi.current===null&&(n=!0);var st=je;if(je=0,_i=null,Ur(e,A,V,st),a&&Ar){M=0;break t}break;default:st=je,je=0,_i=null,Ur(e,A,V,st)}}Hx(),M=dn;break}catch(_t){T0(e,_t)}while(!0);return n&&e.shellSuspendCounter++,Sa=Ls=null,ke=o,B.H=u,B.A=f,Ae===null&&(tn=null,Pe=0,Al()),M}function Hx(){for(;Ae!==null;)C0(Ae)}function Gx(e,n){var a=ke;ke|=2;var o=A0(),u=R0();tn!==e||Pe!==n?(ic=null,nc=ne()+500,Dr(e,n)):Ar=ae(e,n);t:do try{if(je!==0&&Ae!==null){n=Ae;var f=_i;e:switch(je){case 1:je=0,_i=null,Ur(e,n,f,1);break;case 2:case 9:if(Hp(f)){je=0,_i=null,w0(n);break}n=function(){je!==2&&je!==9||tn!==e||(je=7),ra(e)},f.then(n,n);break t;case 3:je=7;break t;case 4:je=5;break t;case 7:Hp(f)?(je=0,_i=null,w0(n)):(je=0,_i=null,Ur(e,n,f,7));break;case 5:var M=null;switch(Ae.tag){case 26:M=Ae.memoizedState;case 5:case 27:var A=Ae;if(!M||ug(M)){je=0,_i=null;var V=A.sibling;if(V!==null)Ae=V;else{var st=A.return;st!==null?(Ae=st,sc(st)):Ae=null}break e}}je=0,_i=null,Ur(e,n,f,5);break;case 6:je=0,_i=null,Ur(e,n,f,6);break;case 8:Lf(),dn=6;break t;default:throw Error(s(462))}}Vx();break}catch(_t){T0(e,_t)}while(!0);return Sa=Ls=null,B.H=o,B.A=u,ke=a,Ae!==null?0:(tn=null,Pe=0,Al(),dn)}function Vx(){for(;Ae!==null&&!ln();)C0(Ae)}function C0(e){var n=e0(e.alternate,e,wa);e.memoizedProps=e.pendingProps,n===null?sc(e):Ae=n}function w0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Zm(a,n,n.pendingProps,n.type,void 0,Pe);break;case 11:n=Zm(a,n,n.pendingProps,n.type.render,n.ref,Pe);break;case 5:Zu(n);default:i0(a,n),n=Ae=Dp(n,wa),n=e0(a,n,wa)}e.memoizedProps=e.pendingProps,n===null?sc(e):Ae=n}function Ur(e,n,a,o){Sa=Ls=null,Zu(n),Mr=null,Po=0;var u=n.return;try{if(Ux(e,u,n,a,Pe)){dn=1,Kl(e,Di(a,e.current)),Ae=null;return}}catch(f){if(u!==null)throw Ae=u,f;dn=1,Kl(e,Di(a,e.current)),Ae=null;return}n.flags&32768?(Fe||o===1?e=!0:Ar||(Pe&536870912)!==0?e=!1:(es=e=!0,(o===2||o===9||o===3||o===6)&&(o=Oi.current,o!==null&&o.tag===13&&(o.flags|=16384))),D0(n,e)):sc(n)}function sc(e){var n=e;do{if((n.flags&32768)!==0){D0(n,es);return}e=n.return;var a=Lx(n.alternate,n,wa);if(a!==null){Ae=a;return}if(n=n.sibling,n!==null){Ae=n;return}Ae=n=e}while(n!==null);dn===0&&(dn=5)}function D0(e,n){do{var a=Ox(e.alternate,e);if(a!==null){a.flags&=32767,Ae=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=a}while(e!==null);dn=6,Ae=null}function U0(e,n,a,o,u,f,M,A,V){e.cancelPendingCommit=null;do rc();while(Vn!==0);if((ke&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=bu,Ft(e,a,f,M,A,V),e===tn&&(Ae=tn=null,Pe=0),Cr=n,as=e,wr=a,Df=f,Uf=u,S0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,qx(w,function(){return z0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=Q.p,Q.p=2,M=ke,ke|=4;try{Px(e,n,a)}finally{ke=M,Q.p=u,B.T=o}}Vn=1,N0(),L0(),O0()}}function N0(){if(Vn===1){Vn=0;var e=as,n=Cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=Q.p;Q.p=2;var u=ke;ke|=4;try{p0(n,e);var f=Wf,M=yp(e.containerInfo),A=f.focusedElem,V=f.selectionRange;if(M!==A&&A&&A.ownerDocument&&xp(A.ownerDocument.documentElement,A)){if(V!==null&&xu(A)){var st=V.start,_t=V.end;if(_t===void 0&&(_t=st),"selectionStart"in A)A.selectionStart=st,A.selectionEnd=Math.min(_t,A.value.length);else{var Mt=A.ownerDocument||document,lt=Mt&&Mt.defaultView||window;if(lt.getSelection){var ut=lt.getSelection(),ce=A.textContent.length,se=Math.min(V.start,ce),Ze=V.end===void 0?se:Math.min(V.end,ce);!ut.extend&&se>Ze&&(M=Ze,Ze=se,se=M);var J=vp(A,se),W=vp(A,Ze);if(J&&W&&(ut.rangeCount!==1||ut.anchorNode!==J.node||ut.anchorOffset!==J.offset||ut.focusNode!==W.node||ut.focusOffset!==W.offset)){var it=Mt.createRange();it.setStart(J.node,J.offset),ut.removeAllRanges(),se>Ze?(ut.addRange(it),ut.extend(W.node,W.offset)):(it.setEnd(W.node,W.offset),ut.addRange(it))}}}}for(Mt=[],ut=A;ut=ut.parentNode;)ut.nodeType===1&&Mt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Mt.length;A++){var yt=Mt[A];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}vc=!!qf,Wf=qf=null}finally{ke=u,Q.p=o,B.T=a}}e.current=n,Vn=2}}function L0(){if(Vn===2){Vn=0;var e=as,n=Cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=Q.p;Q.p=2;var u=ke;ke|=4;try{u0(e,n.alternate,n)}finally{ke=u,Q.p=o,B.T=a}}Vn=3}}function O0(){if(Vn===4||Vn===3){Vn=0,pe();var e=as,n=Cr,a=wr,o=S0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Vn=5:(Vn=0,Cr=as=null,P0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(is=null),$e(a),n=n.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(z,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=Q.p,Q.p=2,B.T=null;try{for(var f=e.onRecoverableError,M=0;M<o.length;M++){var A=o[M];f(A.value,{componentStack:A.stack})}}finally{B.T=n,Q.p=u}}(wr&3)!==0&&rc(),ra(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Nf?jo++:(jo=0,Nf=e):jo=0,Xo(0)}}function P0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,bo(n)))}function rc(e){return N0(),L0(),O0(),z0()}function z0(){if(Vn!==5)return!1;var e=as,n=Df;Df=0;var a=$e(wr),o=B.T,u=Q.p;try{Q.p=32>a?32:a,B.T=null,a=Uf,Uf=null;var f=as,M=wr;if(Vn=0,Cr=as=null,wr=0,(ke&6)!==0)throw Error(s(331));var A=ke;if(ke|=4,x0(f.current),g0(f,f.current,M,a),ke=A,Xo(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(z,f)}catch{}return!0}finally{Q.p=u,B.T=o,P0(e,n)}}function I0(e,n,a){n=Di(a,n),n=uf(e.stateNode,n,2),e=Ya(e,n,2),e!==null&&(vt(e,2),ra(e))}function Je(e,n,a){if(e.tag===3)I0(e,e,a);else for(;n!==null;){if(n.tag===3){I0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(is===null||!is.has(o))){e=Di(a,e),a=Gm(2),o=Ya(n,a,2),o!==null&&(Vm(a,o,n,e),vt(o,2),ra(o));break}}n=n.return}}function zf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Bx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Af=!0,u.add(a),e=kx.bind(null,e,n,a),n.then(e,e))}function kx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,tn===e&&(Pe&a)===a&&(dn===4||dn===3&&(Pe&62914560)===Pe&&300>ne()-wf?(ke&2)===0&&Dr(e,0):Rf|=a,Rr===Pe&&(Rr=0)),ra(e)}function B0(e,n){n===0&&(n=Pt()),e=hr(e,n),e!==null&&(vt(e,n),ra(e))}function jx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),B0(e,a)}function Xx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),B0(e,a)}function qx(e,n){return ie(e,n)}var oc=null,Nr=null,If=!1,lc=!1,Bf=!1,Hs=0;function ra(e){e!==Nr&&e.next===null&&(Nr===null?oc=Nr=e:Nr=Nr.next=e),lc=!0,If||(If=!0,Yx())}function Xo(e,n){if(!Bf&&lc){Bf=!0;do for(var a=!1,o=oc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var M=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-jt(42|e)+1)-1,f&=u&~(M&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,V0(o,f))}else f=Pe,f=oe(o,o===tn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||ae(o,f)||(a=!0,V0(o,f));o=o.next}while(a);Bf=!1}}function Wx(){F0()}function F0(){lc=If=!1;var e=0;Hs!==0&&(ny()&&(e=Hs),Hs=0);for(var n=ne(),a=null,o=oc;o!==null;){var u=o.next,f=H0(o,n);f===0?(o.next=null,a===null?oc=u:a.next=u,u===null&&(Nr=a)):(a=o,(e!==0||(f&3)!==0)&&(lc=!0)),o=u}Xo(e)}function H0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var M=31-jt(f),A=1<<M,V=u[M];V===-1?((A&a)===0||(A&o)!==0)&&(u[M]=we(A,n)):V<=n&&(e.expiredLanes|=A),f&=~A}if(n=tn,a=Pe,a=oe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(je===2||je===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&k(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ae(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&k(o),$e(a)){case 2:case 8:a=ht;break;case 32:a=w;break;case 268435456:a=Y;break;default:a=w}return o=G0.bind(null,e),a=ie(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&k(o),e.callbackPriority=2,e.callbackNode=null,2}function G0(e,n){if(Vn!==0&&Vn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(rc()&&e.callbackNode!==a)return null;var o=Pe;return o=oe(e,e===tn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(E0(e,o,n),H0(e,ne()),e.callbackNode!=null&&e.callbackNode===a?G0.bind(null,e):null)}function V0(e,n){if(rc())return null;E0(e,n,!0)}function Yx(){ay(function(){(ke&6)!==0?ie(De,Wx):F0()})}function Ff(){return Hs===0&&(Hs=X()),Hs}function k0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:de(""+e)}function j0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Zx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=k0((u[Sn]||null).action),M=o.submitter;M&&(n=(n=M[Sn]||null)?k0(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var A=new El("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Hs!==0){var V=M?j0(u,M):new FormData(u);sf(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(A.preventDefault(),V=M?j0(u,M):new FormData(u),sf(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var Hf=0;Hf<Eu.length;Hf++){var Gf=Eu[Hf],Kx=Gf.toLowerCase(),Qx=Gf[0].toUpperCase()+Gf.slice(1);Vi(Kx,"on"+Qx)}Vi(Ep,"onAnimationEnd"),Vi(bp,"onAnimationIteration"),Vi(Tp,"onAnimationStart"),Vi("dblclick","onDoubleClick"),Vi("focusin","onFocus"),Vi("focusout","onBlur"),Vi(px,"onTransitionRun"),Vi(mx,"onTransitionStart"),Vi(gx,"onTransitionCancel"),Vi(Ap,"onTransitionEnd"),D("onMouseEnter",["mouseout","mouseover"]),D("onMouseLeave",["mouseout","mouseover"]),D("onPointerEnter",["pointerout","pointerover"]),D("onPointerLeave",["pointerout","pointerover"]),bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bi("onBeforeInput",["compositionend","keypress","textInput","paste"]),bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qo));function X0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var M=o.length-1;0<=M;M--){var A=o[M],V=A.instance,st=A.currentTarget;if(A=A.listener,V!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=st;try{f(u)}catch(_t){Zl(_t)}u.currentTarget=null,f=V}else for(M=0;M<o.length;M++){if(A=o[M],V=A.instance,st=A.currentTarget,A=A.listener,V!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=st;try{f(u)}catch(_t){Zl(_t)}u.currentTarget=null,f=V}}}}function Re(e,n){var a=n[Ei];a===void 0&&(a=n[Ei]=new Set);var o=e+"__bubble";a.has(o)||(q0(n,e,2,!1),a.add(o))}function Vf(e,n,a){var o=0;n&&(o|=4),q0(a,e,o,n)}var cc="_reactListening"+Math.random().toString(36).slice(2);function kf(e){if(!e[cc]){e[cc]=!0,Ga.forEach(function(a){a!=="selectionchange"&&(Jx.has(a)||Vf(a,!1,e),Vf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[cc]||(n[cc]=!0,Vf("selectionchange",!1,n))}}function q0(e,n,a,o){switch(gg(n)){case 2:var u=Ty;break;case 8:u=Ay;break;default:u=ih}a=u.bind(null,n,a,e),u=void 0,!sr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function jf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var A=o.stateNode.containerInfo;if(A===u)break;if(M===4)for(M=o.return;M!==null;){var V=M.tag;if((V===3||V===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;A!==null;){if(M=hi(A),M===null)return;if(V=M.tag,V===5||V===6||V===26||V===27){o=f=M;continue t}A=A.parentNode}}o=o.return}uo(function(){var st=f,_t=Xe(a),Mt=[];t:{var lt=Rp.get(e);if(lt!==void 0){var ut=El,ce=e;switch(e){case"keypress":if(or(a)===0)break t;case"keydown":case"keyup":ut=qv;break;case"focusin":ce="focus",ut=pu;break;case"focusout":ce="blur",ut=pu;break;case"beforeblur":case"afterblur":ut=pu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Zv;break;case Ep:case bp:case Tp:ut=Iv;break;case Ap:ut=Qv;break;case"scroll":case"scrollend":ut=Nv;break;case"wheel":ut=$v;break;case"copy":case"cut":case"paste":ut=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=ap;break;case"toggle":case"beforetoggle":ut=ex}var se=(n&4)!==0,Ze=!se&&(e==="scroll"||e==="scrollend"),J=se?lt!==null?lt+"Capture":null:lt;se=[];for(var W=st,it;W!==null;){var yt=W;if(it=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||it===null||J===null||(yt=ka(W,J),yt!=null&&se.push(Wo(W,yt,it))),Ze)break;W=W.return}0<se.length&&(lt=new ut(lt,ce,null,a,_t),Mt.push({event:lt,listeners:se}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",lt&&a!==Oe&&(ce=a.relatedTarget||a.fromElement)&&(hi(ce)||ce[Xn]))break t;if((ut||lt)&&(lt=_t.window===_t?_t:(lt=_t.ownerDocument)?lt.defaultView||lt.parentWindow:window,ut?(ce=a.relatedTarget||a.toElement,ut=st,ce=ce?hi(ce):null,ce!==null&&(Ze=c(ce),se=ce.tag,ce!==Ze||se!==5&&se!==27&&se!==6)&&(ce=null)):(ut=null,ce=st),ut!==ce)){if(se=np,yt="onMouseLeave",J="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(se=ap,yt="onPointerLeave",J="onPointerEnter",W="pointer"),Ze=ut==null?lt:_a(ut),it=ce==null?lt:_a(ce),lt=new se(yt,W+"leave",ut,a,_t),lt.target=Ze,lt.relatedTarget=it,yt=null,hi(_t)===st&&(se=new se(J,W+"enter",ce,a,_t),se.target=it,se.relatedTarget=Ze,yt=se),Ze=yt,ut&&ce)e:{for(se=ut,J=ce,W=0,it=se;it;it=Lr(it))W++;for(it=0,yt=J;yt;yt=Lr(yt))it++;for(;0<W-it;)se=Lr(se),W--;for(;0<it-W;)J=Lr(J),it--;for(;W--;){if(se===J||J!==null&&se===J.alternate)break e;se=Lr(se),J=Lr(J)}se=null}else se=null;ut!==null&&W0(Mt,lt,ut,se,!1),ce!==null&&Ze!==null&&W0(Mt,Ze,ce,se,!0)}}t:{if(lt=st?_a(st):window,ut=lt.nodeName&&lt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&lt.type==="file")var Wt=hp;else if(up(lt))if(dp)Wt=fx;else{Wt=cx;var Ee=lx}else ut=lt.nodeName,!ut||ut.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?st&&O(st.elementType)&&(Wt=hp):Wt=ux;if(Wt&&(Wt=Wt(e,st))){fp(Mt,Wt,a,_t);break t}Ee&&Ee(e,lt,st),e==="focusout"&&st&&lt.type==="number"&&st.memoizedProps.value!=null&&An(lt,"number",lt.value)}switch(Ee=st?_a(st):window,e){case"focusin":(up(Ee)||Ee.contentEditable==="true")&&(cr=Ee,yu=st,xo=null);break;case"focusout":xo=yu=cr=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,Sp(Mt,a,_t);break;case"selectionchange":if(dx)break;case"keydown":case"keyup":Sp(Mt,a,_t)}var te;if(gu)t:{switch(e){case"compositionstart":var re="onCompositionStart";break t;case"compositionend":re="onCompositionEnd";break t;case"compositionupdate":re="onCompositionUpdate";break t}re=void 0}else lr?lp(e,a)&&(re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(sp&&a.locale!=="ko"&&(lr||re!=="onCompositionStart"?re==="onCompositionEnd"&&lr&&(te=rr()):(qn=_t,Gi="value"in qn?qn.value:qn.textContent,lr=!0)),Ee=uc(st,re),0<Ee.length&&(re=new ip(re,e,null,a,_t),Mt.push({event:re,listeners:Ee}),te?re.data=te:(te=cp(a),te!==null&&(re.data=te)))),(te=ix?ax(e,a):sx(e,a))&&(re=uc(st,"onBeforeInput"),0<re.length&&(Ee=new ip("onBeforeInput","beforeinput",null,a,_t),Mt.push({event:Ee,listeners:re}),Ee.data=te)),Zx(Mt,e,st,a,_t)}X0(Mt,n)})}function Wo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function uc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ka(e,a),u!=null&&o.unshift(Wo(e,u,f)),u=ka(e,n),u!=null&&o.push(Wo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function W0(e,n,a,o,u){for(var f=n._reactName,M=[];a!==null&&a!==o;){var A=a,V=A.alternate,st=A.stateNode;if(A=A.tag,V!==null&&V===o)break;A!==5&&A!==26&&A!==27||st===null||(V=st,u?(st=ka(a,f),st!=null&&M.unshift(Wo(a,st,V))):u||(st=ka(a,f),st!=null&&M.push(Wo(a,st,V)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var $x=/\r\n?/g,ty=/\u0000|\uFFFD/g;function Y0(e){return(typeof e=="string"?e:""+e).replace($x,`
`).replace(ty,"")}function Z0(e,n){return n=Y0(n),Y0(e)===n}function fc(){}function Ye(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ai(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ai(e,""+o);break;case"className":It(e,"class",o);break;case"tabIndex":It(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":It(e,a,o);break;case"style":co(e,o,f);break;case"data":if(n!=="object"){It(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=de(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ye(e,n,"name",u.name,u,null),Ye(e,n,"formEncType",u.formEncType,u,null),Ye(e,n,"formMethod",u.formMethod,u,null),Ye(e,n,"formTarget",u.formTarget,u,null)):(Ye(e,n,"encType",u.encType,u,null),Ye(e,n,"method",u.method,u,null),Ye(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=de(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=fc);break;case"onScroll":o!=null&&Re("scroll",e);break;case"onScrollEnd":o!=null&&Re("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=de(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Re("beforetoggle",e),Re("toggle",e),At(e,"popover",o);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":At(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wt.get(a)||a,At(e,a,o))}}function Xf(e,n,a,o,u,f){switch(a){case"style":co(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ai(e,o):(typeof o=="number"||typeof o=="bigint")&&Ai(e,""+o);break;case"onScroll":o!=null&&Re("scroll",e);break;case"onScrollEnd":o!=null&&Re("scrollend",e);break;case"onClick":o!=null&&(e.onclick=fc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bs.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):At(e,a,o)}}}function kn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",e),Re("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(e,n,f,M,a,null)}}u&&Ye(e,n,"srcSet",a.srcSet,a,null),o&&Ye(e,n,"src",a.src,a,null);return;case"input":Re("invalid",e);var A=f=M=u=null,V=null,st=null;for(o in a)if(a.hasOwnProperty(o)){var _t=a[o];if(_t!=null)switch(o){case"name":u=_t;break;case"type":M=_t;break;case"checked":V=_t;break;case"defaultChecked":st=_t;break;case"value":f=_t;break;case"defaultValue":A=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(s(137,n));break;default:Ye(e,n,o,_t,a,null)}}Ge(e,f,A,V,st,M,u,!1),sn(e);return;case"select":Re("invalid",e),o=M=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":M=A;break;case"multiple":o=A;default:Ye(e,n,u,A,a,null)}n=f,a=M,e.multiple=!!o,n!=null?rn(e,!!o,n,!1):a!=null&&rn(e,!!o,a,!0);return;case"textarea":Re("invalid",e),f=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(A=a[M],A!=null))switch(M){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ye(e,n,M,A,a,null)}Rn(e,o,u,f),sn(e);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ye(e,n,V,o,a,null)}return;case"dialog":Re("beforetoggle",e),Re("toggle",e),Re("cancel",e),Re("close",e);break;case"iframe":case"object":Re("load",e);break;case"video":case"audio":for(o=0;o<qo.length;o++)Re(qo[o],e);break;case"image":Re("error",e),Re("load",e);break;case"details":Re("toggle",e);break;case"embed":case"source":case"link":Re("error",e),Re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in a)if(a.hasOwnProperty(st)&&(o=a[st],o!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(e,n,st,o,a,null)}return;default:if(O(n)){for(_t in a)a.hasOwnProperty(_t)&&(o=a[_t],o!==void 0&&Xf(e,n,_t,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Ye(e,n,A,o,a,null))}function ey(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,M=null,A=null,V=null,st=null,_t=null;for(ut in a){var Mt=a[ut];if(a.hasOwnProperty(ut)&&Mt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":V=Mt;default:o.hasOwnProperty(ut)||Ye(e,n,ut,null,o,Mt)}}for(var lt in o){var ut=o[lt];if(Mt=a[lt],o.hasOwnProperty(lt)&&(ut!=null||Mt!=null))switch(lt){case"type":f=ut;break;case"name":u=ut;break;case"checked":st=ut;break;case"defaultChecked":_t=ut;break;case"value":M=ut;break;case"defaultValue":A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==Mt&&Ye(e,n,lt,ut,o,Mt)}}Ti(e,M,A,V,st,_t,f,u);return;case"select":ut=M=A=lt=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":ut=V;default:o.hasOwnProperty(f)||Ye(e,n,f,null,o,V)}for(u in o)if(f=o[u],V=a[u],o.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":lt=f;break;case"defaultValue":A=f;break;case"multiple":M=f;default:f!==V&&Ye(e,n,u,f,o,V)}n=A,a=M,o=ut,lt!=null?rn(e,!!a,lt,!1):!!o!=!!a&&(n!=null?rn(e,!!a,n,!0):rn(e,!!a,a?[]:"",!1));return;case"textarea":ut=lt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ye(e,n,A,null,o,u)}for(M in o)if(u=o[M],f=a[M],o.hasOwnProperty(M)&&(u!=null||f!=null))switch(M){case"value":lt=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ye(e,n,M,u,o,f)}_n(e,lt,ut);return;case"option":for(var ce in a)if(lt=a[ce],a.hasOwnProperty(ce)&&lt!=null&&!o.hasOwnProperty(ce))switch(ce){case"selected":e.selected=!1;break;default:Ye(e,n,ce,null,o,lt)}for(V in o)if(lt=o[V],ut=a[V],o.hasOwnProperty(V)&&lt!==ut&&(lt!=null||ut!=null))switch(V){case"selected":e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:Ye(e,n,V,lt,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)lt=a[se],a.hasOwnProperty(se)&&lt!=null&&!o.hasOwnProperty(se)&&Ye(e,n,se,null,o,lt);for(st in o)if(lt=o[st],ut=a[st],o.hasOwnProperty(st)&&lt!==ut&&(lt!=null||ut!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:Ye(e,n,st,lt,o,ut)}return;default:if(O(n)){for(var Ze in a)lt=a[Ze],a.hasOwnProperty(Ze)&&lt!==void 0&&!o.hasOwnProperty(Ze)&&Xf(e,n,Ze,void 0,o,lt);for(_t in o)lt=o[_t],ut=a[_t],!o.hasOwnProperty(_t)||lt===ut||lt===void 0&&ut===void 0||Xf(e,n,_t,lt,o,ut);return}}for(var J in a)lt=a[J],a.hasOwnProperty(J)&&lt!=null&&!o.hasOwnProperty(J)&&Ye(e,n,J,null,o,lt);for(Mt in o)lt=o[Mt],ut=a[Mt],!o.hasOwnProperty(Mt)||lt===ut||lt==null&&ut==null||Ye(e,n,Mt,lt,o,ut)}var qf=null,Wf=null;function hc(e){return e.nodeType===9?e:e.ownerDocument}function K0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Q0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Yf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zf=null;function ny(){var e=window.event;return e&&e.type==="popstate"?e===Zf?!1:(Zf=e,!0):(Zf=null,!1)}var J0=typeof setTimeout=="function"?setTimeout:void 0,iy=typeof clearTimeout=="function"?clearTimeout:void 0,$0=typeof Promise=="function"?Promise:void 0,ay=typeof queueMicrotask=="function"?queueMicrotask:typeof $0<"u"?function(e){return $0.resolve(null).then(e).catch(sy)}:J0;function sy(e){setTimeout(function(){throw e})}function rs(e){return e==="head"}function tg(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&Yo(M.documentElement),a&2&&Yo(M.body),a&4)for(a=M.head,Yo(a),M=a.firstChild;M;){var A=M.nextSibling,V=M.nodeName;M[ta]||V==="SCRIPT"||V==="STYLE"||V==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=A}}if(u===0){e.removeChild(f),nl(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);nl(n)}function Kf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),fi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ry(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ta])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ji(e.nextSibling),e===null)break}return null}function oy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ji(e.nextSibling),e===null))return null;return e}function Qf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function ly(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ji(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Jf=null;function eg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function ng(e,n,a){switch(n=hc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Yo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);fi(e)}var zi=new Map,ig=new Set;function dc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Da=Q.d;Q.d={f:cy,r:uy,D:fy,C:hy,L:dy,m:py,X:gy,S:my,M:_y};function cy(){var e=Da.f(),n=ac();return e||n}function uy(e){var n=ni(e);n!==null&&n.tag===5&&n.type==="form"?Em(n):Da.r(e)}var Or=typeof document>"u"?null:document;function ag(e,n,a){var o=Or;if(o&&typeof n=="string"&&n){var u=Le(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),ig.has(u)||(ig.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),kn(n,"link",e),un(n),o.head.appendChild(n)))}}function fy(e){Da.D(e),ag("dns-prefetch",e,null)}function hy(e,n){Da.C(e,n),ag("preconnect",e,n)}function dy(e,n,a){Da.L(e,n,a);var o=Or;if(o&&e&&n){var u='link[rel="preload"][as="'+Le(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Le(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Le(a.imageSizes)+'"]')):u+='[href="'+Le(e)+'"]';var f=u;switch(n){case"style":f=Pr(e);break;case"script":f=zr(e)}zi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),zi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Zo(f))||n==="script"&&o.querySelector(Ko(f))||(n=o.createElement("link"),kn(n,"link",e),un(n),o.head.appendChild(n)))}}function py(e,n){Da.m(e,n);var a=Or;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Le(o)+'"][href="'+Le(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=zr(e)}if(!zi.has(f)&&(e=_({rel:"modulepreload",href:e},n),zi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ko(f)))return}o=a.createElement("link"),kn(o,"link",e),un(o),a.head.appendChild(o)}}}function my(e,n,a){Da.S(e,n,a);var o=Or;if(o&&e){var u=Hi(o).hoistableStyles,f=Pr(e);n=n||"default";var M=u.get(f);if(!M){var A={loading:0,preload:null};if(M=o.querySelector(Zo(f)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=zi.get(f))&&$f(e,a);var V=M=o.createElement("link");un(V),kn(V,"link",e),V._p=new Promise(function(st,_t){V.onload=st,V.onerror=_t}),V.addEventListener("load",function(){A.loading|=1}),V.addEventListener("error",function(){A.loading|=2}),A.loading|=4,pc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:A},u.set(f,M)}}}function gy(e,n){Da.X(e,n);var a=Or;if(a&&e){var o=Hi(a).hoistableScripts,u=zr(e),f=o.get(u);f||(f=a.querySelector(Ko(u)),f||(e=_({src:e,async:!0},n),(n=zi.get(u))&&th(e,n),f=a.createElement("script"),un(f),kn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function _y(e,n){Da.M(e,n);var a=Or;if(a&&e){var o=Hi(a).hoistableScripts,u=zr(e),f=o.get(u);f||(f=a.querySelector(Ko(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=zi.get(u))&&th(e,n),f=a.createElement("script"),un(f),kn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function sg(e,n,a,o){var u=(u=xt.current)?dc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Pr(a.href),a=Hi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Pr(a.href);var f=Hi(u).hoistableStyles,M=f.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,M),(f=u.querySelector(Zo(e)))&&!f._p&&(M.instance=f,M.state.loading=5),zi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},zi.set(e,a),f||vy(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=zr(a),a=Hi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Pr(e){return'href="'+Le(e)+'"'}function Zo(e){return'link[rel="stylesheet"]['+e+"]"}function rg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function vy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),kn(n,"link",a),un(n),e.head.appendChild(n))}function zr(e){return'[src="'+Le(e)+'"]'}function Ko(e){return"script[async]"+e}function og(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Le(a.href)+'"]');if(o)return n.instance=o,un(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),un(o),kn(o,"style",u),pc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Pr(a.href);var f=e.querySelector(Zo(u));if(f)return n.state.loading|=4,n.instance=f,un(f),f;o=rg(a),(u=zi.get(u))&&$f(o,u),f=(e.ownerDocument||e).createElement("link"),un(f);var M=f;return M._p=new Promise(function(A,V){M.onload=A,M.onerror=V}),kn(f,"link",o),n.state.loading|=4,pc(f,a.precedence,e),n.instance=f;case"script":return f=zr(a.src),(u=e.querySelector(Ko(f)))?(n.instance=u,un(u),u):(o=a,(u=zi.get(f))&&(o=_({},a),th(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),un(u),kn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,pc(o,a.precedence,e));return n.instance}function pc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,M=0;M<o.length;M++){var A=o[M];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function $f(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function th(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var mc=null;function lg(e,n,a){if(mc===null){var o=new Map,u=mc=new Map;u.set(a,o)}else u=mc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ta]||f[gn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=e+M;var A=o.get(M);A?A.push(f):o.set(M,[f])}}return o}function cg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function xy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ug(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Qo=null;function yy(){}function Sy(e,n,a){if(Qo===null)throw Error(s(475));var o=Qo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Pr(a.href),f=e.querySelector(Zo(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=gc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,un(f);return}f=e.ownerDocument||e,a=rg(a),(u=zi.get(u))&&$f(a,u),f=f.createElement("link"),un(f);var M=f;M._p=new Promise(function(A,V){M.onload=A,M.onerror=V}),kn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=gc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function My(){if(Qo===null)throw Error(s(475));var e=Qo;return e.stylesheets&&e.count===0&&eh(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&eh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function gc(){if(this.count--,this.count===0){if(this.stylesheets)eh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _c=null;function eh(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_c=new Map,n.forEach(Ey,e),_c=null,gc.call(e))}function Ey(e,n){if(!(n.state.loading&4)){var a=_c.get(e);if(a)var o=a.get(null);else{a=new Map,_c.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var M=u[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),f=a.get(M)||o,f===o&&a.set(null,u),a.set(M,u),this.count++,o=gc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Jo={$$typeof:P,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function by(e,n,a,o,u,f,M,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dt(0),this.hiddenUpdates=dt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function fg(e,n,a,o,u,f,M,A,V,st,_t,Mt){return e=new by(e,n,a,M,A,V,st,Mt),n=1,f===!0&&(n|=24),f=pi(3,null,null,n),e.current=f,f.stateNode=e,n=Pu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Fu(f),e}function hg(e){return e?(e=dr,e):dr}function dg(e,n,a,o,u,f){u=hg(u),o.context===null?o.context=u:o.pendingContext=u,o=Wa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ya(e,o,n),a!==null&&(xi(a,e,n),Co(a,e,n))}function pg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function nh(e,n){pg(e,n),(e=e.alternate)&&pg(e,n)}function mg(e){if(e.tag===13){var n=hr(e,67108864);n!==null&&xi(n,e,67108864),nh(e,67108864)}}var vc=!0;function Ty(e,n,a,o){var u=B.T;B.T=null;var f=Q.p;try{Q.p=2,ih(e,n,a,o)}finally{Q.p=f,B.T=u}}function Ay(e,n,a,o){var u=B.T;B.T=null;var f=Q.p;try{Q.p=8,ih(e,n,a,o)}finally{Q.p=f,B.T=u}}function ih(e,n,a,o){if(vc){var u=ah(o);if(u===null)jf(e,n,o,xc,a),_g(e,o);else if(Cy(u,e,n,a,o))o.stopPropagation();else if(_g(e,o),n&4&&-1<Ry.indexOf(e)){for(;u!==null;){var f=ni(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=Ht(f.pendingLanes);if(M!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var V=1<<31-jt(M);A.entanglements[1]|=V,M&=~V}ra(f),(ke&6)===0&&(nc=ne()+500,Xo(0))}}break;case 13:A=hr(f,2),A!==null&&xi(A,f,2),ac(),nh(f,2)}if(f=ah(o),f===null&&jf(e,n,o,xc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else jf(e,n,o,null,a)}}function ah(e){return e=Xe(e),sh(e)}var xc=null;function sh(e){if(xc=null,e=hi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return xc=e,null}function gg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Yt()){case De:return 2;case ht:return 8;case w:case T:return 32;case Y:return 268435456;default:return 32}default:return 32}}var rh=!1,os=null,ls=null,cs=null,$o=new Map,tl=new Map,us=[],Ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _g(e,n){switch(e){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":$o.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":tl.delete(n.pointerId)}}function el(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ni(n),n!==null&&mg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Cy(e,n,a,o,u){switch(n){case"focusin":return os=el(os,e,n,a,o,u),!0;case"dragenter":return ls=el(ls,e,n,a,o,u),!0;case"mouseover":return cs=el(cs,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return $o.set(f,el($o.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,tl.set(f,el(tl.get(f)||null,e,n,a,o,u)),!0}return!1}function vg(e){var n=hi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,jn(e.priority,function(){if(a.tag===13){var o=vi();o=Ne(o);var u=hr(a,o);u!==null&&xi(u,a,o),nh(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ah(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Oe=o,a.target.dispatchEvent(o),Oe=null}else return n=ni(a),n!==null&&mg(n),e.blockedOn=a,!1;n.shift()}return!0}function xg(e,n,a){yc(e)&&a.delete(n)}function wy(){rh=!1,os!==null&&yc(os)&&(os=null),ls!==null&&yc(ls)&&(ls=null),cs!==null&&yc(cs)&&(cs=null),$o.forEach(xg),tl.forEach(xg)}function Sc(e,n){e.blockedOn===n&&(e.blockedOn=null,rh||(rh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,wy)))}var Mc=null;function yg(e){Mc!==e&&(Mc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Mc===e&&(Mc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(sh(o||a)===null)continue;break}var f=ni(a);f!==null&&(e.splice(n,3),n-=3,sf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function nl(e){function n(V){return Sc(V,e)}os!==null&&Sc(os,e),ls!==null&&Sc(ls,e),cs!==null&&Sc(cs,e),$o.forEach(n),tl.forEach(n);for(var a=0;a<us.length;a++){var o=us[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<us.length&&(a=us[0],a.blockedOn===null);)vg(a),a.blockedOn===null&&us.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],M=u[Sn]||null;if(typeof f=="function")M||yg(a);else if(M){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,M=f[Sn]||null)A=M.formAction;else if(sh(u)!==null)continue}else A=M.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),yg(a)}}}function oh(e){this._internalRoot=e}Ec.prototype.render=oh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=vi();dg(a,o,e,n,null,null)},Ec.prototype.unmount=oh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;dg(e.current,2,null,e,null,null),ac(),n[Xn]=null}};function Ec(e){this._internalRoot=e}Ec.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ue();e={blockedOn:null,target:e,priority:n};for(var a=0;a<us.length&&n!==0&&n<us[a].priority;a++);us.splice(a,0,e),a===0&&vg(e)}};var Sg=t.version;if(Sg!=="19.1.0")throw Error(s(527,Sg,"19.1.0"));Q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var Dy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{z=bc.inject(Dy),Ut=bc}catch{}}return al.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Im,f=Bm,M=Fm,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=fg(e,1,!1,null,null,a,o,u,f,M,A,null),e[Xn]=n.current,kf(e),new oh(n)},al.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=Im,M=Bm,A=Fm,V=null,st=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(V=a.unstable_transitionCallbacks),a.formState!==void 0&&(st=a.formState)),n=fg(e,1,!0,n,a??null,o,u,f,M,A,V,st),n.context=hg(null),a=n.current,o=vi(),o=Ne(o),u=Wa(o),u.callback=null,Ya(a,u,o),a=o,n.current.lanes=a,vt(n,a),ra(n),e[Xn]=n.current,kf(e),new Ec(n)},al.version="19.1.0",al}var Ug;function jy(){if(Ug)return uh.exports;Ug=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),uh.exports=ky(),uh.exports}var Xy=jy();/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wy=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),Ng=r=>{const t=Wy(r);return t.charAt(0).toUpperCase()+t.slice(1)},W_=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),Yy=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=Ot.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},p)=>Ot.createElement("svg",{ref:p,...Zy,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:W_("lucide",l),...!c&&!Yy(d)&&{"aria-hidden":"true"},...d},[...h.map(([m,_])=>Ot.createElement(m,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=(r,t)=>{const i=Ot.forwardRef(({className:s,...l},c)=>Ot.createElement(Ky,{ref:c,iconNode:t,className:W_(`lucide-${qy(Ng(r))}`,`lucide-${r}`,s),...l}));return i.displayName=Ng(r),i};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Lg=Ve("activity",Qy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"1qyhux"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]],$y=Ve("armchair",Jy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],sl=Ve("arrow-up-right",tS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],nS=Ve("arrow-up",eS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],ph=Ve("boxes",iS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Y_=Ve("check",aS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],rS=Ve("chevron-right",sS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],lS=Ve("circle-check",oS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],uS=Ve("database",cS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],hS=Ve("download",fS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],Og=Ve("file-spreadsheet",dS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],mS=Ve("flask-conical",pS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Z_=Ve("folder-open",gS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],K_=Ve("layers",_S);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Yh=Ve("layout-grid",vS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],yS=Ve("leaf",xS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Pg=Ve("loader-circle",SS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],ES=Ve("maximize",MS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"M5 12h14",key:"1ays0h"}]],zg=Ve("minus",bS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],AS=Ve("move",TS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]],CS=Ve("panel-right-close",RS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Ig=Ve("play",wS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Tc=Ve("plus",DS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Q_=Ve("refresh-cw",US);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],LS=Ve("settings",NS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],mh=Ve("sparkles",OS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Bg=Ve("square",PS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],IS=Ve("upload",zS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],FS=Ve("wifi-off",BS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],gh=Ve("x",HS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bd="176",Ba={ROTATE:0,DOLLY:1,PAN:2},ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},GS=0,Fg=1,VS=2,J_=1,$_=2,za=3,Ha=0,ci=1,ca=2,Ss=0,$r=1,Hg=2,Gg=3,Vg=4,kS=5,Ys=100,jS=101,XS=102,qS=103,WS=104,YS=200,ZS=201,KS=202,QS=203,Zh=204,Kh=205,JS=206,$S=207,tM=208,eM=209,nM=210,iM=211,aM=212,sM=213,rM=214,Qh=0,Jh=1,$h=2,eo=3,td=4,ed=5,nd=6,id=7,tv=0,oM=1,lM=2,Ms=0,cM=1,uM=2,fM=3,ev=4,hM=5,dM=6,pM=7,nv=300,no=301,io=302,ad=303,sd=304,cu=306,rd=1e3,Ks=1001,od=1002,Mi=1003,mM=1004,Ac=1005,ua=1006,_h=1007,Qs=1008,da=1009,iv=1010,av=1011,ml=1012,Fd=1013,Js=1014,fa=1015,yl=1016,Hd=1017,Gd=1018,gl=1020,sv=35902,rv=1021,ov=1022,Qi=1023,_l=1026,vl=1027,Vd=1028,kd=1029,lv=1030,jd=1031,Xd=1033,Jc=33776,$c=33777,tu=33778,eu=33779,ld=35840,cd=35841,ud=35842,fd=35843,hd=36196,dd=37492,pd=37496,md=37808,gd=37809,_d=37810,vd=37811,xd=37812,yd=37813,Sd=37814,Md=37815,Ed=37816,bd=37817,Td=37818,Ad=37819,Rd=37820,Cd=37821,nu=36492,wd=36494,Dd=36495,cv=36283,Ud=36284,Nd=36285,Ld=36286,gM=3200,_M=3201,uv=0,vM=1,xs="",ei="srgb",ao="srgb-linear",ru="linear",Ke="srgb",Ir=7680,kg=519,xM=512,yM=513,SM=514,fv=515,MM=516,EM=517,bM=518,TM=519,jg=35044,Xg="300 es",Ia=2e3,ou=2001;class er{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],iu=Math.PI/180,Od=180/Math.PI;function Sl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Zn[r&255]+Zn[r>>8&255]+Zn[r>>16&255]+Zn[r>>24&255]+"-"+Zn[t&255]+Zn[t>>8&255]+"-"+Zn[t>>16&15|64]+Zn[t>>24&255]+"-"+Zn[i&63|128]+Zn[i>>8&255]+"-"+Zn[i>>16&255]+Zn[i>>24&255]+Zn[s&255]+Zn[s>>8&255]+Zn[s>>16&255]+Zn[s>>24&255]).toLowerCase()}function be(r,t,i){return Math.max(t,Math.min(i,r))}function AM(r,t){return(r%t+t)%t}function vh(r,t,i){return(1-i)*r+i*t}function rl(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ri(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const RM={DEG2RAD:iu};class fe{constructor(t=0,i=0){fe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(be(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ge{constructor(t,i,s,l,c,h,d,p,m){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,p,m)}set(t,i,s,l,c,h,d,p,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=p,_[6]=s,_[7]=h,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],_=s[4],x=s[7],y=s[2],S=s[5],b=s[8],R=l[0],v=l[3],g=l[6],I=l[1],P=l[4],U=l[7],G=l[2],F=l[5],H=l[8];return c[0]=h*R+d*I+p*G,c[3]=h*v+d*P+p*F,c[6]=h*g+d*U+p*H,c[1]=m*R+_*I+x*G,c[4]=m*v+_*P+x*F,c[7]=m*g+_*U+x*H,c[2]=y*R+S*I+b*G,c[5]=y*v+S*P+b*F,c[8]=y*g+S*U+b*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8];return i*h*_-i*d*m-s*c*_+s*d*p+l*c*m-l*h*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8],x=_*h-d*m,y=d*p-_*c,S=m*c-h*p,b=i*x+s*y+l*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=x*R,t[1]=(l*m-_*s)*R,t[2]=(d*s-l*h)*R,t[3]=y*R,t[4]=(_*i-l*p)*R,t[5]=(l*c-d*i)*R,t[6]=S*R,t[7]=(s*p-m*i)*R,t[8]=(h*i-s*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(xh.makeScale(t,i)),this}rotate(t){return this.premultiply(xh.makeRotation(-t)),this}translate(t,i){return this.premultiply(xh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xh=new ge;function hv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function lu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function CM(){const r=lu("canvas");return r.style.display="block",r}const qg={};function au(r){r in qg||(qg[r]=!0,console.warn(r))}function wM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function DM(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function UM(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Wg=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yg=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NM(){const r={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ke&&(l.r=Fa(l.r),l.g=Fa(l.g),l.b=Fa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ke&&(l.r=to(l.r),l.g=to(l.g),l.b=to(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===xs?ru:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ao]:{primaries:t,whitePoint:s,transfer:ru,toXYZ:Wg,fromXYZ:Yg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:t,whitePoint:s,transfer:Ke,toXYZ:Wg,fromXYZ:Yg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),r}const Be=NM();function Fa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function to(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Br;class LM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Br===void 0&&(Br=lu("canvas")),Br.width=t.width,Br.height=t.height;const l=Br.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Br}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=lu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Fa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Fa(i[s]/255)*255):i[s]=Fa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let OM=0;class qd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Sl(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(yh(l[h].image)):c.push(yh(l[h]))}else c=yh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function yh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?LM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PM=0;class Qn extends er{constructor(t=Qn.DEFAULT_IMAGE,i=Qn.DEFAULT_MAPPING,s=Ks,l=Ks,c=ua,h=Qs,d=Qi,p=da,m=Qn.DEFAULT_ANISOTROPY,_=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Sl(),this.name="",this.source=new qd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rd:t.x=t.x-Math.floor(t.x);break;case Ks:t.x=t.x<0?0:1;break;case od:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rd:t.y=t.y-Math.floor(t.y);break;case Ks:t.y=t.y<0?0:1;break;case od:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=nv;Qn.DEFAULT_ANISOTROPY=1;class pn{constructor(t=0,i=0,s=0,l=1){pn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const p=t.elements,m=p[0],_=p[4],x=p[8],y=p[1],S=p[5],b=p[9],R=p[2],v=p[6],g=p[10];if(Math.abs(_-y)<.01&&Math.abs(x-R)<.01&&Math.abs(b-v)<.01){if(Math.abs(_+y)<.1&&Math.abs(x+R)<.1&&Math.abs(b+v)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(m+1)/2,U=(S+1)/2,G=(g+1)/2,F=(_+y)/4,H=(x+R)/4,q=(b+v)/4;return P>U&&P>G?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=F/s,c=H/s):U>G?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=F/l,c=q/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=H/c,l=q/c),this.set(s,l,c,i),this}let I=Math.sqrt((v-b)*(v-b)+(x-R)*(x-R)+(y-_)*(y-_));return Math.abs(I)<.001&&(I=1),this.x=(v-b)/I,this.y=(x-R)/I,this.z=(y-_)/I,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this.w=be(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this.w=be(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zM extends er{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth?s.depth:1,this.scissor=new pn(0,0,t,i),this.scissorTest=!1,this.viewport=new pn(0,0,t,i);const l={width:t,height:i,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ua,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const c=new Qn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new qd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $s extends zM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class dv extends Qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class IM extends Qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let p=s[l+0],m=s[l+1],_=s[l+2],x=s[l+3];const y=c[h+0],S=c[h+1],b=c[h+2],R=c[h+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=_,t[i+3]=x;return}if(d===1){t[i+0]=y,t[i+1]=S,t[i+2]=b,t[i+3]=R;return}if(x!==R||p!==y||m!==S||_!==b){let v=1-d;const g=p*y+m*S+_*b+x*R,I=g>=0?1:-1,P=1-g*g;if(P>Number.EPSILON){const G=Math.sqrt(P),F=Math.atan2(G,g*I);v=Math.sin(v*F)/G,d=Math.sin(d*F)/G}const U=d*I;if(p=p*v+y*U,m=m*v+S*U,_=_*v+b*U,x=x*v+R*U,v===1-d){const G=1/Math.sqrt(p*p+m*m+_*_+x*x);p*=G,m*=G,_*=G,x*=G}}t[i]=p,t[i+1]=m,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],p=s[l+1],m=s[l+2],_=s[l+3],x=c[h],y=c[h+1],S=c[h+2],b=c[h+3];return t[i]=d*b+_*x+p*S-m*y,t[i+1]=p*b+_*y+m*x-d*S,t[i+2]=m*b+_*S+d*y-p*x,t[i+3]=_*b-d*x-p*y-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(s/2),_=d(l/2),x=d(c/2),y=p(s/2),S=p(l/2),b=p(c/2);switch(h){case"XYZ":this._x=y*_*x+m*S*b,this._y=m*S*x-y*_*b,this._z=m*_*b+y*S*x,this._w=m*_*x-y*S*b;break;case"YXZ":this._x=y*_*x+m*S*b,this._y=m*S*x-y*_*b,this._z=m*_*b-y*S*x,this._w=m*_*x+y*S*b;break;case"ZXY":this._x=y*_*x-m*S*b,this._y=m*S*x+y*_*b,this._z=m*_*b+y*S*x,this._w=m*_*x-y*S*b;break;case"ZYX":this._x=y*_*x-m*S*b,this._y=m*S*x+y*_*b,this._z=m*_*b-y*S*x,this._w=m*_*x+y*S*b;break;case"YZX":this._x=y*_*x+m*S*b,this._y=m*S*x+y*_*b,this._z=m*_*b-y*S*x,this._w=m*_*x-y*S*b;break;case"XZY":this._x=y*_*x-m*S*b,this._y=m*S*x-y*_*b,this._z=m*_*b+y*S*x,this._w=m*_*x+y*S*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],_=i[6],x=i[10],y=s+d+x;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-m)*S,this._z=(h-l)*S}else if(s>d&&s>x){const S=2*Math.sqrt(1+s-d-x);this._w=(_-p)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+m)/S}else if(d>x){const S=2*Math.sqrt(1+d-s-x);this._w=(c-m)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+x-s-d);this._w=(h-l)/S,this._x=(c+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,p=i._y,m=i._z,_=i._w;return this._x=s*_+h*d+l*m-c*p,this._y=l*_+h*p+c*d-s*m,this._z=c*_+h*m+s*p-l*d,this._w=h*_-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),x=Math.sin((1-i)*_)/m,y=Math.sin(i*_)/m;return this._w=h*x+this._w*y,this._x=s*x+this._x*y,this._y=l*x+this._y*y,this._z=c*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,i=0,s=0){et.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Zg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Zg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*s),_=2*(d*i-c*l),x=2*(c*s-h*i);return this.x=i+p*m+h*x-d*_,this.y=s+p*_+d*m-c*x,this.z=l+p*x+c*_-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-s*p,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Sh.copy(this).projectOnVector(t),this.sub(Sh)}reflect(t){return this.sub(Sh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(be(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sh=new et,Zg=new tr;class nr{constructor(t=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Xi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Xi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Xi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Xi):Xi.fromBufferAttribute(c,h),Xi.applyMatrix4(t.matrixWorld),this.expandByPoint(Xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Rc.copy(s.boundingBox)),Rc.applyMatrix4(t.matrixWorld),this.union(Rc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xi),Xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ol),Cc.subVectors(this.max,ol),Fr.subVectors(t.a,ol),Hr.subVectors(t.b,ol),Gr.subVectors(t.c,ol),hs.subVectors(Hr,Fr),ds.subVectors(Gr,Hr),Gs.subVectors(Fr,Gr);let i=[0,-hs.z,hs.y,0,-ds.z,ds.y,0,-Gs.z,Gs.y,hs.z,0,-hs.x,ds.z,0,-ds.x,Gs.z,0,-Gs.x,-hs.y,hs.x,0,-ds.y,ds.x,0,-Gs.y,Gs.x,0];return!Mh(i,Fr,Hr,Gr,Cc)||(i=[1,0,0,0,1,0,0,0,1],!Mh(i,Fr,Hr,Gr,Cc))?!1:(wc.crossVectors(hs,ds),i=[wc.x,wc.y,wc.z],Mh(i,Fr,Hr,Gr,Cc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ua),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ua=[new et,new et,new et,new et,new et,new et,new et,new et],Xi=new et,Rc=new nr,Fr=new et,Hr=new et,Gr=new et,hs=new et,ds=new et,Gs=new et,ol=new et,Cc=new et,wc=new et,Vs=new et;function Mh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Vs.fromArray(r,c);const d=l.x*Math.abs(Vs.x)+l.y*Math.abs(Vs.y)+l.z*Math.abs(Vs.z),p=t.dot(Vs),m=i.dot(Vs),_=s.dot(Vs);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const BM=new nr,ll=new et,Eh=new et;class Ml{constructor(t=new et,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):BM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ll.subVectors(t,this.center);const i=ll.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(ll,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ll.copy(t.center).add(Eh)),this.expandByPoint(ll.copy(t.center).sub(Eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Na=new et,bh=new et,Dc=new et,ps=new et,Th=new et,Uc=new et,Ah=new et;class Wd{constructor(t=new et,i=new et(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Na)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Na.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Na.copy(this.origin).addScaledVector(this.direction,i),Na.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){bh.copy(t).add(i).multiplyScalar(.5),Dc.copy(i).sub(t).normalize(),ps.copy(this.origin).sub(bh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Dc),d=ps.dot(this.direction),p=-ps.dot(Dc),m=ps.lengthSq(),_=Math.abs(1-h*h);let x,y,S,b;if(_>0)if(x=h*p-d,y=h*d-p,b=c*_,x>=0)if(y>=-b)if(y<=b){const R=1/_;x*=R,y*=R,S=x*(x+h*y+2*d)+y*(h*x+y+2*p)+m}else y=c,x=Math.max(0,-(h*y+d)),S=-x*x+y*(y+2*p)+m;else y=-c,x=Math.max(0,-(h*y+d)),S=-x*x+y*(y+2*p)+m;else y<=-b?(x=Math.max(0,-(-h*c+d)),y=x>0?-c:Math.min(Math.max(-c,-p),c),S=-x*x+y*(y+2*p)+m):y<=b?(x=0,y=Math.min(Math.max(-c,-p),c),S=y*(y+2*p)+m):(x=Math.max(0,-(h*c+d)),y=x>0?c:Math.min(Math.max(-c,-p),c),S=-x*x+y*(y+2*p)+m);else y=h>0?-c:c,x=Math.max(0,-(h*y+d)),S=-x*x+y*(y+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(bh).addScaledVector(Dc,y),S}intersectSphere(t,i){Na.subVectors(t.center,this.origin);const s=Na.dot(this.direction),l=Na.dot(Na)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,p;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,y=this.origin;return m>=0?(s=(t.min.x-y.x)*m,l=(t.max.x-y.x)*m):(s=(t.max.x-y.x)*m,l=(t.min.x-y.x)*m),_>=0?(c=(t.min.y-y.y)*_,h=(t.max.y-y.y)*_):(c=(t.max.y-y.y)*_,h=(t.min.y-y.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-y.z)*x,p=(t.max.z-y.z)*x):(d=(t.max.z-y.z)*x,p=(t.min.z-y.z)*x),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Na)!==null}intersectTriangle(t,i,s,l,c){Th.subVectors(i,t),Uc.subVectors(s,t),Ah.crossVectors(Th,Uc);let h=this.direction.dot(Ah),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ps.subVectors(this.origin,t);const p=d*this.direction.dot(Uc.crossVectors(ps,Uc));if(p<0)return null;const m=d*this.direction.dot(Th.cross(ps));if(m<0||p+m>h)return null;const _=-d*ps.dot(Ah);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(t,i,s,l,c,h,d,p,m,_,x,y,S,b,R,v){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,p,m,_,x,y,S,b,R,v)}set(t,i,s,l,c,h,d,p,m,_,x,y,S,b,R,v){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=x,g[14]=y,g[3]=S,g[7]=b,g[11]=R,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/Vr.setFromMatrixColumn(t,0).length(),c=1/Vr.setFromMatrixColumn(t,1).length(),h=1/Vr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const y=h*_,S=h*x,b=d*_,R=d*x;i[0]=p*_,i[4]=-p*x,i[8]=m,i[1]=S+b*m,i[5]=y-R*m,i[9]=-d*p,i[2]=R-y*m,i[6]=b+S*m,i[10]=h*p}else if(t.order==="YXZ"){const y=p*_,S=p*x,b=m*_,R=m*x;i[0]=y+R*d,i[4]=b*d-S,i[8]=h*m,i[1]=h*x,i[5]=h*_,i[9]=-d,i[2]=S*d-b,i[6]=R+y*d,i[10]=h*p}else if(t.order==="ZXY"){const y=p*_,S=p*x,b=m*_,R=m*x;i[0]=y-R*d,i[4]=-h*x,i[8]=b+S*d,i[1]=S+b*d,i[5]=h*_,i[9]=R-y*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const y=h*_,S=h*x,b=d*_,R=d*x;i[0]=p*_,i[4]=b*m-S,i[8]=y*m+R,i[1]=p*x,i[5]=R*m+y,i[9]=S*m-b,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const y=h*p,S=h*m,b=d*p,R=d*m;i[0]=p*_,i[4]=R-y*x,i[8]=b*x+S,i[1]=x,i[5]=h*_,i[9]=-d*_,i[2]=-m*_,i[6]=S*x+b,i[10]=y-R*x}else if(t.order==="XZY"){const y=h*p,S=h*m,b=d*p,R=d*m;i[0]=p*_,i[4]=-x,i[8]=m*_,i[1]=y*x+R,i[5]=h*_,i[9]=S*x-b,i[2]=b*x-S,i[6]=d*_,i[10]=R*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(FM,t,HM)}lookAt(t,i,s){const l=this.elements;return yi.subVectors(t,i),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),ms.crossVectors(s,yi),ms.lengthSq()===0&&(Math.abs(s.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),ms.crossVectors(s,yi)),ms.normalize(),Nc.crossVectors(yi,ms),l[0]=ms.x,l[4]=Nc.x,l[8]=yi.x,l[1]=ms.y,l[5]=Nc.y,l[9]=yi.y,l[2]=ms.z,l[6]=Nc.z,l[10]=yi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],_=s[1],x=s[5],y=s[9],S=s[13],b=s[2],R=s[6],v=s[10],g=s[14],I=s[3],P=s[7],U=s[11],G=s[15],F=l[0],H=l[4],q=l[8],N=l[12],C=l[1],j=l[5],at=l[9],ot=l[13],ft=l[2],mt=l[6],B=l[10],Q=l[14],Z=l[3],bt=l[7],L=l[11],nt=l[15];return c[0]=h*F+d*C+p*ft+m*Z,c[4]=h*H+d*j+p*mt+m*bt,c[8]=h*q+d*at+p*B+m*L,c[12]=h*N+d*ot+p*Q+m*nt,c[1]=_*F+x*C+y*ft+S*Z,c[5]=_*H+x*j+y*mt+S*bt,c[9]=_*q+x*at+y*B+S*L,c[13]=_*N+x*ot+y*Q+S*nt,c[2]=b*F+R*C+v*ft+g*Z,c[6]=b*H+R*j+v*mt+g*bt,c[10]=b*q+R*at+v*B+g*L,c[14]=b*N+R*ot+v*Q+g*nt,c[3]=I*F+P*C+U*ft+G*Z,c[7]=I*H+P*j+U*mt+G*bt,c[11]=I*q+P*at+U*B+G*L,c[15]=I*N+P*ot+U*Q+G*nt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],p=t[9],m=t[13],_=t[2],x=t[6],y=t[10],S=t[14],b=t[3],R=t[7],v=t[11],g=t[15];return b*(+c*p*x-l*m*x-c*d*y+s*m*y+l*d*S-s*p*S)+R*(+i*p*S-i*m*y+c*h*y-l*h*S+l*m*_-c*p*_)+v*(+i*m*x-i*d*S-c*h*x+s*h*S+c*d*_-s*m*_)+g*(-l*d*_-i*p*x+i*d*y+l*h*x-s*h*y+s*p*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8],x=t[9],y=t[10],S=t[11],b=t[12],R=t[13],v=t[14],g=t[15],I=x*v*m-R*y*m+R*p*S-d*v*S-x*p*g+d*y*g,P=b*y*m-_*v*m-b*p*S+h*v*S+_*p*g-h*y*g,U=_*R*m-b*x*m+b*d*S-h*R*S-_*d*g+h*x*g,G=b*x*p-_*R*p-b*d*y+h*R*y+_*d*v-h*x*v,F=i*I+s*P+l*U+c*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/F;return t[0]=I*H,t[1]=(R*y*c-x*v*c-R*l*S+s*v*S+x*l*g-s*y*g)*H,t[2]=(d*v*c-R*p*c+R*l*m-s*v*m-d*l*g+s*p*g)*H,t[3]=(x*p*c-d*y*c-x*l*m+s*y*m+d*l*S-s*p*S)*H,t[4]=P*H,t[5]=(_*v*c-b*y*c+b*l*S-i*v*S-_*l*g+i*y*g)*H,t[6]=(b*p*c-h*v*c-b*l*m+i*v*m+h*l*g-i*p*g)*H,t[7]=(h*y*c-_*p*c+_*l*m-i*y*m-h*l*S+i*p*S)*H,t[8]=U*H,t[9]=(b*x*c-_*R*c-b*s*S+i*R*S+_*s*g-i*x*g)*H,t[10]=(h*R*c-b*d*c+b*s*m-i*R*m-h*s*g+i*d*g)*H,t[11]=(_*d*c-h*x*c-_*s*m+i*x*m+h*s*S-i*d*S)*H,t[12]=G*H,t[13]=(_*R*l-b*x*l+b*s*y-i*R*y-_*s*v+i*x*v)*H,t[14]=(b*d*l-h*R*l-b*s*p+i*R*p+h*s*v-i*d*v)*H,t[15]=(h*x*l-_*d*l+_*s*p-i*x*p-h*s*y+i*d*y)*H,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,p=t.z,m=c*h,_=c*d;return this.set(m*h+s,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+s,_*p-l*h,0,m*p-l*d,_*p+l*h,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,_=h+h,x=d+d,y=c*m,S=c*_,b=c*x,R=h*_,v=h*x,g=d*x,I=p*m,P=p*_,U=p*x,G=s.x,F=s.y,H=s.z;return l[0]=(1-(R+g))*G,l[1]=(S+U)*G,l[2]=(b-P)*G,l[3]=0,l[4]=(S-U)*F,l[5]=(1-(y+g))*F,l[6]=(v+I)*F,l[7]=0,l[8]=(b+P)*H,l[9]=(v-I)*H,l[10]=(1-(y+R))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=Vr.set(l[0],l[1],l[2]).length();const h=Vr.set(l[4],l[5],l[6]).length(),d=Vr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],qi.copy(this);const m=1/c,_=1/h,x=1/d;return qi.elements[0]*=m,qi.elements[1]*=m,qi.elements[2]*=m,qi.elements[4]*=_,qi.elements[5]*=_,qi.elements[6]*=_,qi.elements[8]*=x,qi.elements[9]*=x,qi.elements[10]*=x,i.setFromRotationMatrix(qi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Ia){const p=this.elements,m=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),y=(s+l)/(s-l);let S,b;if(d===Ia)S=-(h+c)/(h-c),b=-2*h*c/(h-c);else if(d===ou)S=-h/(h-c),b=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Ia){const p=this.elements,m=1/(i-t),_=1/(s-l),x=1/(h-c),y=(i+t)*m,S=(s+l)*_;let b,R;if(d===Ia)b=(h+c)*x,R=-2*x;else if(d===ou)b=c*x,R=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=R,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Vr=new et,qi=new nn,FM=new et(0,0,0),HM=new et(1,1,1),ms=new et,Nc=new et,yi=new et,Kg=new nn,Qg=new tr;class pa{constructor(t=0,i=0,s=0,l=pa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],_=l[9],x=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-be(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(be(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-be(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(be(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Kg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Qg.setFromEuler(this),this.setFromQuaternion(Qg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pa.DEFAULT_ORDER="XYZ";class Yd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let GM=0;const Jg=new et,kr=new tr,La=new nn,Lc=new et,cl=new et,VM=new et,kM=new tr,$g=new et(1,0,0),t_=new et(0,1,0),e_=new et(0,0,1),n_={type:"added"},jM={type:"removed"},jr={type:"childadded",child:null},Rh={type:"childremoved",child:null};class Hn extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=Sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const t=new et,i=new pa,s=new tr,l=new et(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new ge}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return kr.setFromAxisAngle(t,i),this.quaternion.multiply(kr),this}rotateOnWorldAxis(t,i){return kr.setFromAxisAngle(t,i),this.quaternion.premultiply(kr),this}rotateX(t){return this.rotateOnAxis($g,t)}rotateY(t){return this.rotateOnAxis(t_,t)}rotateZ(t){return this.rotateOnAxis(e_,t)}translateOnAxis(t,i){return Jg.copy(t).applyQuaternion(this.quaternion),this.position.add(Jg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis($g,t)}translateY(t){return this.translateOnAxis(t_,t)}translateZ(t){return this.translateOnAxis(e_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(La.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Lc.copy(t):Lc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?La.lookAt(cl,Lc,this.up):La.lookAt(Lc,cl,this.up),this.quaternion.setFromRotationMatrix(La),l&&(La.extractRotation(l.matrixWorld),kr.setFromRotationMatrix(La),this.quaternion.premultiply(kr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(n_),jr.child=t,this.dispatchEvent(jr),jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(jM),Rh.child=t,this.dispatchEvent(Rh),Rh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),La.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),La.multiply(t.parent.matrixWorld)),t.applyMatrix4(La),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(n_),jr.child=t,this.dispatchEvent(jr),jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,t,VM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,kM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const x=p[m];c(t.shapes,x)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),_=h(t.images),x=h(t.shapes),y=h(t.skeletons),S=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new et(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wi=new et,Oa=new et,Ch=new et,Pa=new et,Xr=new et,qr=new et,i_=new et,wh=new et,Dh=new et,Uh=new et,Nh=new pn,Lh=new pn,Oh=new pn;class Ki{constructor(t=new et,i=new et,s=new et){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Wi.subVectors(t,i),l.cross(Wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Wi.subVectors(l,i),Oa.subVectors(s,i),Ch.subVectors(t,i);const h=Wi.dot(Wi),d=Wi.dot(Oa),p=Wi.dot(Ch),m=Oa.dot(Oa),_=Oa.dot(Ch),x=h*m-d*d;if(x===0)return c.set(0,0,0),null;const y=1/x,S=(m*p-d*_)*y,b=(h*_-d*p)*y;return c.set(1-S-b,b,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Pa)===null?!1:Pa.x>=0&&Pa.y>=0&&Pa.x+Pa.y<=1}static getInterpolation(t,i,s,l,c,h,d,p){return this.getBarycoord(t,i,s,l,Pa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Pa.x),p.addScaledVector(h,Pa.y),p.addScaledVector(d,Pa.z),p)}static getInterpolatedAttribute(t,i,s,l,c,h){return Nh.setScalar(0),Lh.setScalar(0),Oh.setScalar(0),Nh.fromBufferAttribute(t,i),Lh.fromBufferAttribute(t,s),Oh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Nh,c.x),h.addScaledVector(Lh,c.y),h.addScaledVector(Oh,c.z),h}static isFrontFacing(t,i,s,l){return Wi.subVectors(s,i),Oa.subVectors(t,i),Wi.cross(Oa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wi.subVectors(this.c,this.b),Oa.subVectors(this.a,this.b),Wi.cross(Oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ki.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ki.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ki.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ki.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ki.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Xr.subVectors(l,s),qr.subVectors(c,s),wh.subVectors(t,s);const p=Xr.dot(wh),m=qr.dot(wh);if(p<=0&&m<=0)return i.copy(s);Dh.subVectors(t,l);const _=Xr.dot(Dh),x=qr.dot(Dh);if(_>=0&&x<=_)return i.copy(l);const y=p*x-_*m;if(y<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(s).addScaledVector(Xr,h);Uh.subVectors(t,c);const S=Xr.dot(Uh),b=qr.dot(Uh);if(b>=0&&S<=b)return i.copy(c);const R=S*m-p*b;if(R<=0&&m>=0&&b<=0)return d=m/(m-b),i.copy(s).addScaledVector(qr,d);const v=_*b-S*x;if(v<=0&&x-_>=0&&S-b>=0)return i_.subVectors(c,l),d=(x-_)/(x-_+(S-b)),i.copy(l).addScaledVector(i_,d);const g=1/(v+R+y);return h=R*g,d=y*g,i.copy(s).addScaledVector(Xr,h).addScaledVector(qr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},Oc={h:0,s:0,l:0};function Ph(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ce{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Be.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Be.workingColorSpace){return this.r=t,this.g=i,this.b=s,Be.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Be.workingColorSpace){if(t=AM(t,1),i=be(i,0,1),s=be(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Ph(h,c,t+1/3),this.g=Ph(h,c,t),this.b=Ph(h,c,t-1/3)}return Be.toWorkingColorSpace(this,l),this}setStyle(t,i=ei){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ei){const s=pv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fa(t.r),this.g=Fa(t.g),this.b=Fa(t.b),this}copyLinearToSRGB(t){return this.r=to(t.r),this.g=to(t.g),this.b=to(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ei){return Be.fromWorkingColorSpace(Kn.copy(this),t),Math.round(be(Kn.r*255,0,255))*65536+Math.round(be(Kn.g*255,0,255))*256+Math.round(be(Kn.b*255,0,255))}getHexString(t=ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Be.workingColorSpace){Be.fromWorkingColorSpace(Kn.copy(this),i);const s=Kn.r,l=Kn.g,c=Kn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const _=(d+h)/2;if(d===h)p=0,m=0;else{const x=h-d;switch(m=_<=.5?x/(h+d):x/(2-h-d),h){case s:p=(l-c)/x+(l<c?6:0);break;case l:p=(c-s)/x+2;break;case c:p=(s-l)/x+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,i=Be.workingColorSpace){return Be.fromWorkingColorSpace(Kn.copy(this),i),t.r=Kn.r,t.g=Kn.g,t.b=Kn.b,t}getStyle(t=ei){Be.fromWorkingColorSpace(Kn.copy(this),t);const i=Kn.r,s=Kn.g,l=Kn.b;return t!==ei?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(gs),this.setHSL(gs.h+t,gs.s+i,gs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(gs),t.getHSL(Oc);const s=vh(gs.h,Oc.h,i),l=vh(gs.s,Oc.s,i),c=vh(gs.l,Oc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new Ce;Ce.NAMES=pv;let XM=0;class oo extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=Sl(),this.name="",this.type="Material",this.blending=$r,this.side=Ha,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=Kh,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(s.blending=this.blending),this.side!==Ha&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Zh&&(s.blendSrc=this.blendSrc),this.blendDst!==Kh&&(s.blendDst=this.blendDst),this.blendEquation!==Ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class so extends oo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pa,this.combine=tv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Tn=new et,Pc=new fe;let qM=0;class Ji{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=jg,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Pc.fromBufferAttribute(this,i),Pc.applyMatrix3(t),this.setXY(i,Pc.x,Pc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyMatrix3(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyMatrix4(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyNormalMatrix(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.transformDirection(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=rl(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ri(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=rl(i,this.array)),i}setX(t,i){return this.normalized&&(i=ri(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=rl(i,this.array)),i}setY(t,i){return this.normalized&&(i=ri(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=rl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ri(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=rl(i,this.array)),i}setW(t,i){return this.normalized&&(i=ri(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=ri(i,this.array),s=ri(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=ri(i,this.array),s=ri(s,this.array),l=ri(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=ri(i,this.array),s=ri(s,this.array),l=ri(l,this.array),c=ri(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jg&&(t.usage=this.usage),t}}class mv extends Ji{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class gv extends Ji{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Nn extends Ji{constructor(t,i,s){super(new Float32Array(t),i,s)}}let WM=0;const Bi=new nn,zh=new Hn,Wr=new et,Si=new nr,ul=new nr,Fn=new et;class $i extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=Sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hv(t)?gv:mv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ge().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Bi.makeRotationFromQuaternion(t),this.applyMatrix4(Bi),this}rotateX(t){return Bi.makeRotationX(t),this.applyMatrix4(Bi),this}rotateY(t){return Bi.makeRotationY(t),this.applyMatrix4(Bi),this}rotateZ(t){return Bi.makeRotationZ(t),this.applyMatrix4(Bi),this}translate(t,i,s){return Bi.makeTranslation(t,i,s),this.applyMatrix4(Bi),this}scale(t,i,s){return Bi.makeScale(t,i,s),this.applyMatrix4(Bi),this}lookAt(t){return zh.lookAt(t),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Nn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Si.setFromBufferAttribute(c),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ml);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const s=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];ul.setFromBufferAttribute(d),this.morphTargetsRelative?(Fn.addVectors(Si.min,ul.min),Si.expandByPoint(Fn),Fn.addVectors(Si.max,ul.max),Si.expandByPoint(Fn)):(Si.expandByPoint(ul.min),Si.expandByPoint(ul.max))}Si.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Fn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Fn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)Fn.fromBufferAttribute(d,m),p&&(Wr.fromBufferAttribute(t,m),Fn.add(Wr)),l=Math.max(l,s.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ji(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let q=0;q<s.count;q++)d[q]=new et,p[q]=new et;const m=new et,_=new et,x=new et,y=new fe,S=new fe,b=new fe,R=new et,v=new et;function g(q,N,C){m.fromBufferAttribute(s,q),_.fromBufferAttribute(s,N),x.fromBufferAttribute(s,C),y.fromBufferAttribute(c,q),S.fromBufferAttribute(c,N),b.fromBufferAttribute(c,C),_.sub(m),x.sub(m),S.sub(y),b.sub(y);const j=1/(S.x*b.y-b.x*S.y);isFinite(j)&&(R.copy(_).multiplyScalar(b.y).addScaledVector(x,-S.y).multiplyScalar(j),v.copy(x).multiplyScalar(S.x).addScaledVector(_,-b.x).multiplyScalar(j),d[q].add(R),d[N].add(R),d[C].add(R),p[q].add(v),p[N].add(v),p[C].add(v))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let q=0,N=I.length;q<N;++q){const C=I[q],j=C.start,at=C.count;for(let ot=j,ft=j+at;ot<ft;ot+=3)g(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const P=new et,U=new et,G=new et,F=new et;function H(q){G.fromBufferAttribute(l,q),F.copy(G);const N=d[q];P.copy(N),P.sub(G.multiplyScalar(G.dot(N))).normalize(),U.crossVectors(F,N);const j=U.dot(p[q])<0?-1:1;h.setXYZW(q,P.x,P.y,P.z,j)}for(let q=0,N=I.length;q<N;++q){const C=I[q],j=C.start,at=C.count;for(let ot=j,ft=j+at;ot<ft;ot+=3)H(t.getX(ot+0)),H(t.getX(ot+1)),H(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ji(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const l=new et,c=new et,h=new et,d=new et,p=new et,m=new et,_=new et,x=new et;if(t)for(let y=0,S=t.count;y<S;y+=3){const b=t.getX(y+0),R=t.getX(y+1),v=t.getX(y+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,v),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,R),m.fromBufferAttribute(s,v),d.add(_),p.add(_),m.add(_),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(R,p.x,p.y,p.z),s.setXYZ(v,m.x,m.y,m.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Fn.fromBufferAttribute(t,i),Fn.normalize(),t.setXYZ(i,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function t(d,p){const m=d.array,_=d.itemSize,x=d.normalized,y=new m.constructor(p.length*_);let S=0,b=0;for(let R=0,v=p.length;R<v;R++){d.isInterleavedBufferAttribute?S=p[R]*d.data.stride+d.offset:S=p[R]*_;for(let g=0;g<_;g++)y[b++]=m[S++]}return new Ji(y,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $i,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let _=0,x=m.length;_<x;_++){const y=m[_],S=t(y,s);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let x=0,y=m.length;x<y;x++){const S=m[x];_.push(S.toJSON(t.data))}_.length>0&&(l[p]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const c=t.morphAttributes;for(const m in c){const _=[],x=c[m];for(let y=0,S=x.length;y<S;y++)_.push(x[y].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,_=h.length;m<_;m++){const x=h[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const a_=new nn,ks=new Wd,zc=new Ml,s_=new et,Ic=new et,Bc=new et,Fc=new et,Ih=new et,Hc=new et,r_=new et,Gc=new et;class en extends Hn{constructor(t=new $i,i=new so){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Hc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=d[p],x=c[p];_!==0&&(Ih.fromBufferAttribute(x,t),h?Hc.addScaledVector(Ih,_):Hc.addScaledVector(Ih.sub(i),_))}i.add(Hc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),zc.copy(s.boundingSphere),zc.applyMatrix4(c),ks.copy(t.ray).recast(t.near),!(zc.containsPoint(ks.origin)===!1&&(ks.intersectSphere(zc,s_)===null||ks.origin.distanceToSquared(s_)>(t.far-t.near)**2))&&(a_.copy(c).invert(),ks.copy(t.ray).applyMatrix4(a_),!(s.boundingBox!==null&&ks.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ks)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=y.length;b<R;b++){const v=y[b],g=h[v.materialIndex],I=Math.max(v.start,S.start),P=Math.min(d.count,Math.min(v.start+v.count,S.start+S.count));for(let U=I,G=P;U<G;U+=3){const F=d.getX(U),H=d.getX(U+1),q=d.getX(U+2);l=Vc(this,g,t,s,m,_,x,F,H,q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let v=b,g=R;v<g;v+=3){const I=d.getX(v),P=d.getX(v+1),U=d.getX(v+2);l=Vc(this,h,t,s,m,_,x,I,P,U),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let b=0,R=y.length;b<R;b++){const v=y[b],g=h[v.materialIndex],I=Math.max(v.start,S.start),P=Math.min(p.count,Math.min(v.start+v.count,S.start+S.count));for(let U=I,G=P;U<G;U+=3){const F=U,H=U+1,q=U+2;l=Vc(this,g,t,s,m,_,x,F,H,q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let v=b,g=R;v<g;v+=3){const I=v,P=v+1,U=v+2;l=Vc(this,h,t,s,m,_,x,I,P,U),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function YM(r,t,i,s,l,c,h,d){let p;if(t.side===ci?p=s.intersectTriangle(h,c,l,!0,d):p=s.intersectTriangle(l,c,h,t.side===Ha,d),p===null)return null;Gc.copy(d),Gc.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(Gc);return m<i.near||m>i.far?null:{distance:m,point:Gc.clone(),object:r}}function Vc(r,t,i,s,l,c,h,d,p,m){r.getVertexPosition(d,Ic),r.getVertexPosition(p,Bc),r.getVertexPosition(m,Fc);const _=YM(r,t,i,s,Ic,Bc,Fc,r_);if(_){const x=new et;Ki.getBarycoord(r_,Ic,Bc,Fc,x),l&&(_.uv=Ki.getInterpolatedAttribute(l,d,p,m,x,new fe)),c&&(_.uv1=Ki.getInterpolatedAttribute(c,d,p,m,x,new fe)),h&&(_.normal=Ki.getInterpolatedAttribute(h,d,p,m,x,new et),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new et,materialIndex:0};Ki.getNormal(Ic,Bc,Fc,y.normal),_.face=y,_.barycoord=x}return _}class ha extends $i{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],_=[],x=[];let y=0,S=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Nn(m,3)),this.setAttribute("normal",new Nn(_,3)),this.setAttribute("uv",new Nn(x,2));function b(R,v,g,I,P,U,G,F,H,q,N){const C=U/H,j=G/q,at=U/2,ot=G/2,ft=F/2,mt=H+1,B=q+1;let Q=0,Z=0;const bt=new et;for(let L=0;L<B;L++){const nt=L*j-ot;for(let St=0;St<mt;St++){const Tt=St*C-at;bt[R]=Tt*I,bt[v]=nt*P,bt[g]=ft,m.push(bt.x,bt.y,bt.z),bt[R]=0,bt[v]=0,bt[g]=F>0?1:-1,_.push(bt.x,bt.y,bt.z),x.push(St/H),x.push(1-L/q),Q+=1}}for(let L=0;L<q;L++)for(let nt=0;nt<H;nt++){const St=y+nt+mt*L,Tt=y+nt+mt*(L+1),tt=y+(nt+1)+mt*(L+1),gt=y+(nt+1)+mt*L;p.push(St,Tt,gt),p.push(Tt,tt,gt),Z+=6}d.addGroup(S,Z,N),S+=Z,y+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ha(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ro(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function ti(r){const t={};for(let i=0;i<r.length;i++){const s=ro(r[i]);for(const l in s)t[l]=s[l]}return t}function ZM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function _v(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Be.workingColorSpace}const KM={clone:ro,merge:ti};var QM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Es extends oo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QM,this.fragmentShader=JM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ro(t.uniforms),this.uniformsGroups=ZM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class vv extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Ia}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _s=new et,o_=new fe,l_=new fe;class Zi extends vv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Od*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(iu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_s.x,_s.y).multiplyScalar(-t/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(_s.x,_s.y).multiplyScalar(-t/_s.z)}getViewSize(t,i){return this.getViewBounds(t,o_,l_),i.subVectors(l_,o_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(iu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*s/m,l*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Yr=-90,Zr=1;class $M extends Hn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Zi(Yr,Zr,t,i);l.layers=this.layers,this.add(l);const c=new Zi(Yr,Zr,t,i);c.layers=this.layers,this.add(c);const h=new Zi(Yr,Zr,t,i);h.layers=this.layers,this.add(h);const d=new Zi(Yr,Zr,t,i);d.layers=this.layers,this.add(d);const p=new Zi(Yr,Zr,t,i);p.layers=this.layers,this.add(p);const m=new Zi(Yr,Zr,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(t===Ia)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===ou)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,_]=this.children,x=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(x,y,S),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class xv extends Qn{constructor(t=[],i=no,s,l,c,h,d,p,m,_){super(t,i,s,l,c,h,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class t1 extends $s{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new xv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ua}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ha(5,5,5),c=new Es({name:"CubemapFromEquirect",uniforms:ro(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ci,blending:Ss});c.uniforms.tEquirect.value=i;const h=new en(l,c),d=i.minFilter;return i.minFilter===Qs&&(i.minFilter=ua),new $M(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class li extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e1={type:"move"};class Bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const R of t.hand.values()){const v=i.getJointPose(R,s),g=this._getHandJoint(m,R);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],y=_.position.distanceTo(x.position),S=.02,b=.005;m.inputState.pinching&&y>S+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&y<=S-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(e1)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new li;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class n1 extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pa,this.environmentIntensity=1,this.environmentRotation=new pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class i1 extends Qn{constructor(t=null,i=1,s=1,l,c,h,d,p,m=Mi,_=Mi,x,y){super(null,h,d,p,m,_,l,c,x,y),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class c_ extends Ji{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Kr=new nn,u_=new nn,kc=[],f_=new nr,a1=new nn,fl=new en,hl=new Ml;class s1 extends en{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new c_(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,a1)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new nr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Kr),f_.copy(t.boundingBox).applyMatrix4(Kr),this.boundingBox.union(f_)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ml),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Kr),hl.copy(t.boundingSphere).applyMatrix4(Kr),this.boundingSphere.union(hl)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(fl.geometry=this.geometry,fl.material=this.material,fl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hl.copy(this.boundingSphere),hl.applyMatrix4(s),t.ray.intersectsSphere(hl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Kr),u_.multiplyMatrices(s,Kr),fl.matrixWorld=u_,fl.raycast(t,kc);for(let h=0,d=kc.length;h<d;h++){const p=kc[h];p.instanceId=c,p.object=this,i.push(p)}kc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new c_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new i1(new Float32Array(l*this.count),l,this.count,Vd,fa));const c=this.morphTexture.source.data.data;let h=0;for(let m=0;m<s.length;m++)h+=s[m];const d=this.geometry.morphTargetsRelative?1:1-h,p=l*t;c[p]=d,c.set(s,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fh=new et,r1=new et,o1=new ge;class vs{constructor(t=new et(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Fh.subVectors(s,i).cross(r1.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Fh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||o1.getNormalMatrix(t),l=this.coplanarPoint(Fh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const js=new Ml,jc=new et;class Zd{constructor(t=new vs,i=new vs,s=new vs,l=new vs,c=new vs,h=new vs){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ia){const s=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],p=l[3],m=l[4],_=l[5],x=l[6],y=l[7],S=l[8],b=l[9],R=l[10],v=l[11],g=l[12],I=l[13],P=l[14],U=l[15];if(s[0].setComponents(p-c,y-m,v-S,U-g).normalize(),s[1].setComponents(p+c,y+m,v+S,U+g).normalize(),s[2].setComponents(p+h,y+_,v+b,U+I).normalize(),s[3].setComponents(p-h,y-_,v-b,U-I).normalize(),s[4].setComponents(p-d,y-x,v-R,U-P).normalize(),i===Ia)s[5].setComponents(p+d,y+x,v+R,U+P).normalize();else if(i===ou)s[5].setComponents(d,x,R,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),js.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(t){return js.center.set(0,0,0),js.radius=.7071067811865476,js.applyMatrix4(t.matrixWorld),this.intersectsSphere(js)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(jc.x=l.normal.x>0?t.max.x:t.min.x,jc.y=l.normal.y>0?t.max.y:t.min.y,jc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(jc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yv extends Qn{constructor(t,i,s,l,c,h,d,p,m){super(t,i,s,l,c,h,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sv extends Qn{constructor(t,i,s=Js,l,c,h,d=Mi,p=Mi,m,_=_l){if(_!==_l&&_!==vl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,h,d,p,_,s,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Kd extends $i{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const _=[],x=[],y=[],S=[];let b=0;const R=[],v=s/2;let g=0;I(),h===!1&&(t>0&&P(!0),i>0&&P(!1)),this.setIndex(_),this.setAttribute("position",new Nn(x,3)),this.setAttribute("normal",new Nn(y,3)),this.setAttribute("uv",new Nn(S,2));function I(){const U=new et,G=new et;let F=0;const H=(i-t)/s;for(let q=0;q<=c;q++){const N=[],C=q/c,j=C*(i-t)+t;for(let at=0;at<=l;at++){const ot=at/l,ft=ot*p+d,mt=Math.sin(ft),B=Math.cos(ft);G.x=j*mt,G.y=-C*s+v,G.z=j*B,x.push(G.x,G.y,G.z),U.set(mt,H,B).normalize(),y.push(U.x,U.y,U.z),S.push(ot,1-C),N.push(b++)}R.push(N)}for(let q=0;q<l;q++)for(let N=0;N<c;N++){const C=R[N][q],j=R[N+1][q],at=R[N+1][q+1],ot=R[N][q+1];(t>0||N!==0)&&(_.push(C,j,ot),F+=3),(i>0||N!==c-1)&&(_.push(j,at,ot),F+=3)}m.addGroup(g,F,0),g+=F}function P(U){const G=b,F=new fe,H=new et;let q=0;const N=U===!0?t:i,C=U===!0?1:-1;for(let at=1;at<=l;at++)x.push(0,v*C,0),y.push(0,C,0),S.push(.5,.5),b++;const j=b;for(let at=0;at<=l;at++){const ft=at/l*p+d,mt=Math.cos(ft),B=Math.sin(ft);H.x=N*B,H.y=v*C,H.z=N*mt,x.push(H.x,H.y,H.z),y.push(0,C,0),F.x=mt*.5+.5,F.y=B*.5*C+.5,S.push(F.x,F.y),b++}for(let at=0;at<l;at++){const ot=G+at,ft=j+at;U===!0?_.push(ft,ft+1,ot):_.push(ft+1,ft,ot),q+=3}m.addGroup(g,q,U===!0?1:2),g+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ir extends $i{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,_=p+1,x=t/d,y=i/p,S=[],b=[],R=[],v=[];for(let g=0;g<_;g++){const I=g*y-h;for(let P=0;P<m;P++){const U=P*x-c;b.push(U,-I,0),R.push(0,0,1),v.push(P/d),v.push(1-g/p)}}for(let g=0;g<p;g++)for(let I=0;I<d;I++){const P=I+m*g,U=I+m*(g+1),G=I+1+m*(g+1),F=I+1+m*g;S.push(P,U,F),S.push(U,G,F)}this.setIndex(S),this.setAttribute("position",new Nn(b,3)),this.setAttribute("normal",new Nn(R,3)),this.setAttribute("uv",new Nn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.width,t.height,t.widthSegments,t.heightSegments)}}class Qd extends $i{constructor(t=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],m=[],_=[];let x=t;const y=(i-t)/l,S=new et,b=new fe;for(let R=0;R<=l;R++){for(let v=0;v<=s;v++){const g=c+v/s*h;S.x=x*Math.cos(g),S.y=x*Math.sin(g),p.push(S.x,S.y,S.z),m.push(0,0,1),b.x=(S.x/i+1)/2,b.y=(S.y/i+1)/2,_.push(b.x,b.y)}x+=y}for(let R=0;R<l;R++){const v=R*(s+1);for(let g=0;g<s;g++){const I=g+v,P=I,U=I+s+1,G=I+s+2,F=I+1;d.push(P,U,F),d.push(U,G,F)}}this.setIndex(d),this.setAttribute("position",new Nn(p,3)),this.setAttribute("normal",new Nn(m,3)),this.setAttribute("uv",new Nn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qd(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class uu extends $i{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let m=0;const _=[],x=new et,y=new et,S=[],b=[],R=[],v=[];for(let g=0;g<=s;g++){const I=[],P=g/s;let U=0;g===0&&h===0?U=.5/i:g===s&&p===Math.PI&&(U=-.5/i);for(let G=0;G<=i;G++){const F=G/i;x.x=-t*Math.cos(l+F*c)*Math.sin(h+P*d),x.y=t*Math.cos(h+P*d),x.z=t*Math.sin(l+F*c)*Math.sin(h+P*d),b.push(x.x,x.y,x.z),y.copy(x).normalize(),R.push(y.x,y.y,y.z),v.push(F+U,1-P),I.push(m++)}_.push(I)}for(let g=0;g<s;g++)for(let I=0;I<i;I++){const P=_[g][I+1],U=_[g][I],G=_[g+1][I],F=_[g+1][I+1];(g!==0||h>0)&&S.push(P,U,F),(g!==s-1||p<Math.PI)&&S.push(U,G,F)}this.setIndex(S),this.setAttribute("position",new Nn(b,3)),this.setAttribute("normal",new Nn(R,3)),this.setAttribute("uv",new Nn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xl extends $i{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],p=[],m=[],_=new et,x=new et,y=new et;for(let S=0;S<=s;S++)for(let b=0;b<=l;b++){const R=b/l*c,v=S/s*Math.PI*2;x.x=(t+i*Math.cos(v))*Math.cos(R),x.y=(t+i*Math.cos(v))*Math.sin(R),x.z=i*Math.sin(v),d.push(x.x,x.y,x.z),_.x=t*Math.cos(R),_.y=t*Math.sin(R),y.subVectors(x,_).normalize(),p.push(y.x,y.y,y.z),m.push(b/l),m.push(S/s)}for(let S=1;S<=s;S++)for(let b=1;b<=l;b++){const R=(l+1)*S+b-1,v=(l+1)*(S-1)+b-1,g=(l+1)*(S-1)+b,I=(l+1)*S+b;h.push(R,v,I),h.push(v,g,I)}this.setIndex(h),this.setAttribute("position",new Nn(d,3)),this.setAttribute("normal",new Nn(p,3)),this.setAttribute("uv",new Nn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class l1 extends oo{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ce(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Jd extends oo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uv,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class c1 extends Jd{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class u1 extends oo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class f1 extends oo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Mv extends Hn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class h1 extends Mv{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Hh=new nn,h_=new et,d_=new et;class d1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=da,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zd,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;h_.setFromMatrixPosition(t.matrixWorld),i.position.copy(h_),d_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(d_),i.updateMatrixWorld(),Hh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Hh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class $d extends vv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class p1 extends d1{constructor(){super(new $d(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class p_ extends Mv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Hn.DEFAULT_UP),this.updateMatrix(),this.target=new Hn,this.shadow=new p1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class m1 extends Zi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const m_=new nn;class g1{constructor(t,i,s=0,l=1/0){this.ray=new Wd(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Yd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return m_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(m_),this}intersectObject(t,i=!0,s=[]){return Pd(t,this,s,i),s.sort(g_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Pd(t[l],this,s,i);return s.sort(g_),s}}function g_(r,t){return r.distance-t.distance}function Pd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)Pd(c[h],t,i,!0)}}class __{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(be(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _1 extends er{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function v_(r,t,i,s){const l=v1(s);switch(i){case rv:return r*t;case Vd:return r*t/l.components*l.byteLength;case kd:return r*t/l.components*l.byteLength;case lv:return r*t*2/l.components*l.byteLength;case jd:return r*t*2/l.components*l.byteLength;case ov:return r*t*3/l.components*l.byteLength;case Qi:return r*t*4/l.components*l.byteLength;case Xd:return r*t*4/l.components*l.byteLength;case Jc:case $c:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case tu:case eu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cd:case fd:return Math.max(r,16)*Math.max(t,8)/4;case ld:case ud:return Math.max(r,8)*Math.max(t,8)/2;case hd:case dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case pd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case md:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case gd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case _d:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case vd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case xd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case yd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Md:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ed:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case bd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Td:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ad:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Rd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Cd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case nu:case wd:case Dd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case cv:case Ud:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Nd:case Ld:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function v1(r){switch(r){case da:case iv:return{byteLength:1,components:1};case ml:case av:case yl:return{byteLength:2,components:1};case Hd:case Gd:return{byteLength:2,components:4};case Js:case Fd:case fa:return{byteLength:4,components:1};case sv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ev(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function x1(r){const t=new WeakMap;function i(d,p){const m=d.array,_=d.usage,x=m.byteLength,y=r.createBuffer();r.bindBuffer(p,y),r.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=r.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=r.SHORT;else if(m instanceof Uint32Array)S=r.UNSIGNED_INT;else if(m instanceof Int32Array)S=r.INT;else if(m instanceof Int8Array)S=r.BYTE;else if(m instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,p,m){const _=p.array,x=p.updateRanges;if(r.bindBuffer(m,d),x.length===0)r.bufferSubData(m,0,_);else{x.sort((S,b)=>S.start-b.start);let y=0;for(let S=1;S<x.length;S++){const b=x[y],R=x[S];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++y,x[y]=R)}x.length=y+1;for(let S=0,b=x.length;S<b;S++){const R=x[S];r.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(r.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}var y1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S1=`#ifdef USE_ALPHAHASH
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
#endif`,M1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A1=`#ifdef USE_AOMAP
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
#endif`,R1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C1=`#ifdef USE_BATCHING
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
#endif`,w1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L1=`#ifdef USE_IRIDESCENCE
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
#endif`,O1=`#ifdef USE_BUMPMAP
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
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,H1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,V1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,k1=`#define PI 3.141592653589793
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
} // validated`,j1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,X1=`vec3 transformedNormal = objectNormal;
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
#endif`,q1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J1=`#ifdef USE_ENVMAP
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
#endif`,$1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tE=`#ifdef USE_ENVMAP
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
#endif`,eE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
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
#endif`,iE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oE=`#ifdef USE_GRADIENTMAP
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
}`,lE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fE=`uniform bool receiveShadow;
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
#endif`,hE=`#ifdef USE_ENVMAP
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
#endif`,dE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_E=`PhysicalMaterial material;
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
#endif`,vE=`struct PhysicalMaterial {
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
}`,xE=`
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
#endif`,yE=`#if defined( RE_IndirectDiffuse )
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
#endif`,SE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ME=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wE=`#if defined( USE_POINTS_UV )
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
#endif`,DE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PE=`#ifdef USE_MORPHTARGETS
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
#endif`,zE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VE=`#ifdef USE_NORMALMAP
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
#endif`,kE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$E=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
}`,_e={alphahash_fragment:y1,alphahash_pars_fragment:S1,alphamap_fragment:M1,alphamap_pars_fragment:E1,alphatest_fragment:b1,alphatest_pars_fragment:T1,aomap_fragment:A1,aomap_pars_fragment:R1,batching_pars_vertex:C1,batching_vertex:w1,begin_vertex:D1,beginnormal_vertex:U1,bsdfs:N1,iridescence_fragment:L1,bumpmap_pars_fragment:O1,clipping_planes_fragment:P1,clipping_planes_pars_fragment:z1,clipping_planes_pars_vertex:I1,clipping_planes_vertex:B1,color_fragment:F1,color_pars_fragment:H1,color_pars_vertex:G1,color_vertex:V1,common:k1,cube_uv_reflection_fragment:j1,defaultnormal_vertex:X1,displacementmap_pars_vertex:q1,displacementmap_vertex:W1,emissivemap_fragment:Y1,emissivemap_pars_fragment:Z1,colorspace_fragment:K1,colorspace_pars_fragment:Q1,envmap_fragment:J1,envmap_common_pars_fragment:$1,envmap_pars_fragment:tE,envmap_pars_vertex:eE,envmap_physical_pars_fragment:hE,envmap_vertex:nE,fog_vertex:iE,fog_pars_vertex:aE,fog_fragment:sE,fog_pars_fragment:rE,gradientmap_pars_fragment:oE,lightmap_pars_fragment:lE,lights_lambert_fragment:cE,lights_lambert_pars_fragment:uE,lights_pars_begin:fE,lights_toon_fragment:dE,lights_toon_pars_fragment:pE,lights_phong_fragment:mE,lights_phong_pars_fragment:gE,lights_physical_fragment:_E,lights_physical_pars_fragment:vE,lights_fragment_begin:xE,lights_fragment_maps:yE,lights_fragment_end:SE,logdepthbuf_fragment:ME,logdepthbuf_pars_fragment:EE,logdepthbuf_pars_vertex:bE,logdepthbuf_vertex:TE,map_fragment:AE,map_pars_fragment:RE,map_particle_fragment:CE,map_particle_pars_fragment:wE,metalnessmap_fragment:DE,metalnessmap_pars_fragment:UE,morphinstance_vertex:NE,morphcolor_vertex:LE,morphnormal_vertex:OE,morphtarget_pars_vertex:PE,morphtarget_vertex:zE,normal_fragment_begin:IE,normal_fragment_maps:BE,normal_pars_fragment:FE,normal_pars_vertex:HE,normal_vertex:GE,normalmap_pars_fragment:VE,clearcoat_normal_fragment_begin:kE,clearcoat_normal_fragment_maps:jE,clearcoat_pars_fragment:XE,iridescence_pars_fragment:qE,opaque_fragment:WE,packing:YE,premultiplied_alpha_fragment:ZE,project_vertex:KE,dithering_fragment:QE,dithering_pars_fragment:JE,roughnessmap_fragment:$E,roughnessmap_pars_fragment:tb,shadowmap_pars_fragment:eb,shadowmap_pars_vertex:nb,shadowmap_vertex:ib,shadowmask_pars_fragment:ab,skinbase_vertex:sb,skinning_pars_vertex:rb,skinning_vertex:ob,skinnormal_vertex:lb,specularmap_fragment:cb,specularmap_pars_fragment:ub,tonemapping_fragment:fb,tonemapping_pars_fragment:hb,transmission_fragment:db,transmission_pars_fragment:pb,uv_pars_fragment:mb,uv_pars_vertex:gb,uv_vertex:_b,worldpos_vertex:vb,background_vert:xb,background_frag:yb,backgroundCube_vert:Sb,backgroundCube_frag:Mb,cube_vert:Eb,cube_frag:bb,depth_vert:Tb,depth_frag:Ab,distanceRGBA_vert:Rb,distanceRGBA_frag:Cb,equirect_vert:wb,equirect_frag:Db,linedashed_vert:Ub,linedashed_frag:Nb,meshbasic_vert:Lb,meshbasic_frag:Ob,meshlambert_vert:Pb,meshlambert_frag:zb,meshmatcap_vert:Ib,meshmatcap_frag:Bb,meshnormal_vert:Fb,meshnormal_frag:Hb,meshphong_vert:Gb,meshphong_frag:Vb,meshphysical_vert:kb,meshphysical_frag:jb,meshtoon_vert:Xb,meshtoon_frag:qb,points_vert:Wb,points_frag:Yb,shadow_vert:Zb,shadow_frag:Kb,sprite_vert:Qb,sprite_frag:Jb},Gt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},la={basic:{uniforms:ti([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:ti([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:ti([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:ti([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:ti([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:ti([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:ti([Gt.points,Gt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:ti([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:ti([Gt.common,Gt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:ti([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:ti([Gt.sprite,Gt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:ti([Gt.common,Gt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:ti([Gt.lights,Gt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};la.physical={uniforms:ti([la.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Xc={r:0,b:0,g:0},Xs=new pa,$b=new nn;function tT(r,t,i,s,l,c,h){const d=new Ce(0);let p=c===!0?0:1,m,_,x=null,y=0,S=null;function b(P){let U=P.isScene===!0?P.background:null;return U&&U.isTexture&&(U=(P.backgroundBlurriness>0?i:t).get(U)),U}function R(P){let U=!1;const G=b(P);G===null?g(d,p):G&&G.isColor&&(g(G,1),U=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(P,U){const G=b(U);G&&(G.isCubeTexture||G.mapping===cu)?(_===void 0&&(_=new en(new ha(1,1,1),new Es({name:"BackgroundCubeMaterial",uniforms:ro(la.backgroundCube.uniforms),vertexShader:la.backgroundCube.vertexShader,fragmentShader:la.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,H,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Xs.copy(U.backgroundRotation),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),_.material.uniforms.envMap.value=G,_.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4($b.makeRotationFromEuler(Xs)),_.material.toneMapped=Be.getTransfer(G.colorSpace)!==Ke,(x!==G||y!==G.version||S!==r.toneMapping)&&(_.material.needsUpdate=!0,x=G,y=G.version,S=r.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null)):G&&G.isTexture&&(m===void 0&&(m=new en(new ir(2,2),new Es({name:"BackgroundMaterial",uniforms:ro(la.background.uniforms),vertexShader:la.background.vertexShader,fragmentShader:la.background.fragmentShader,side:Ha,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=G,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Be.getTransfer(G.colorSpace)!==Ke,G.matrixAutoUpdate===!0&&G.updateMatrix(),m.material.uniforms.uvTransform.value.copy(G.matrix),(x!==G||y!==G.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,x=G,y=G.version,S=r.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function g(P,U){P.getRGB(Xc,_v(r)),s.buffers.color.setClear(Xc.r,Xc.g,Xc.b,U,h)}function I(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,U=1){d.set(P),p=U,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(P){p=P,g(d,p)},render:R,addToRenderList:v,dispose:I}}function eT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,h=!1;function d(C,j,at,ot,ft){let mt=!1;const B=x(ot,at,j);c!==B&&(c=B,m(c.object)),mt=S(C,ot,at,ft),mt&&b(C,ot,at,ft),ft!==null&&t.update(ft,r.ELEMENT_ARRAY_BUFFER),(mt||h)&&(h=!1,U(C,j,at,ot),ft!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function p(){return r.createVertexArray()}function m(C){return r.bindVertexArray(C)}function _(C){return r.deleteVertexArray(C)}function x(C,j,at){const ot=at.wireframe===!0;let ft=s[C.id];ft===void 0&&(ft={},s[C.id]=ft);let mt=ft[j.id];mt===void 0&&(mt={},ft[j.id]=mt);let B=mt[ot];return B===void 0&&(B=y(p()),mt[ot]=B),B}function y(C){const j=[],at=[],ot=[];for(let ft=0;ft<i;ft++)j[ft]=0,at[ft]=0,ot[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:at,attributeDivisors:ot,object:C,attributes:{},index:null}}function S(C,j,at,ot){const ft=c.attributes,mt=j.attributes;let B=0;const Q=at.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const L=ft[Z];let nt=mt[Z];if(nt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(nt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(nt=C.instanceColor)),L===void 0||L.attribute!==nt||nt&&L.data!==nt.data)return!0;B++}return c.attributesNum!==B||c.index!==ot}function b(C,j,at,ot){const ft={},mt=j.attributes;let B=0;const Q=at.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let L=mt[Z];L===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(L=C.instanceColor));const nt={};nt.attribute=L,L&&L.data&&(nt.data=L.data),ft[Z]=nt,B++}c.attributes=ft,c.attributesNum=B,c.index=ot}function R(){const C=c.newAttributes;for(let j=0,at=C.length;j<at;j++)C[j]=0}function v(C){g(C,0)}function g(C,j){const at=c.newAttributes,ot=c.enabledAttributes,ft=c.attributeDivisors;at[C]=1,ot[C]===0&&(r.enableVertexAttribArray(C),ot[C]=1),ft[C]!==j&&(r.vertexAttribDivisor(C,j),ft[C]=j)}function I(){const C=c.newAttributes,j=c.enabledAttributes;for(let at=0,ot=j.length;at<ot;at++)j[at]!==C[at]&&(r.disableVertexAttribArray(at),j[at]=0)}function P(C,j,at,ot,ft,mt,B){B===!0?r.vertexAttribIPointer(C,j,at,ft,mt):r.vertexAttribPointer(C,j,at,ot,ft,mt)}function U(C,j,at,ot){R();const ft=ot.attributes,mt=at.getAttributes(),B=j.defaultAttributeValues;for(const Q in mt){const Z=mt[Q];if(Z.location>=0){let bt=ft[Q];if(bt===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(bt=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(bt=C.instanceColor)),bt!==void 0){const L=bt.normalized,nt=bt.itemSize,St=t.get(bt);if(St===void 0)continue;const Tt=St.buffer,tt=St.type,gt=St.bytesPerElement,xt=tt===r.INT||tt===r.UNSIGNED_INT||bt.gpuType===Fd;if(bt.isInterleavedBufferAttribute){const Dt=bt.data,Lt=Dt.stride,ue=bt.offset;if(Dt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<Z.locationSize;Kt++)g(Z.location+Kt,Dt.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let Kt=0;Kt<Z.locationSize;Kt++)v(Z.location+Kt);r.bindBuffer(r.ARRAY_BUFFER,Tt);for(let Kt=0;Kt<Z.locationSize;Kt++)P(Z.location+Kt,nt/Z.locationSize,tt,L,Lt*gt,(ue+nt/Z.locationSize*Kt)*gt,xt)}else{if(bt.isInstancedBufferAttribute){for(let Dt=0;Dt<Z.locationSize;Dt++)g(Z.location+Dt,bt.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Dt=0;Dt<Z.locationSize;Dt++)v(Z.location+Dt);r.bindBuffer(r.ARRAY_BUFFER,Tt);for(let Dt=0;Dt<Z.locationSize;Dt++)P(Z.location+Dt,nt/Z.locationSize,tt,L,nt*gt,nt/Z.locationSize*Dt*gt,xt)}}else if(B!==void 0){const L=B[Q];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(Z.location,L);break;case 3:r.vertexAttrib3fv(Z.location,L);break;case 4:r.vertexAttrib4fv(Z.location,L);break;default:r.vertexAttrib1fv(Z.location,L)}}}}I()}function G(){q();for(const C in s){const j=s[C];for(const at in j){const ot=j[at];for(const ft in ot)_(ot[ft].object),delete ot[ft];delete j[at]}delete s[C]}}function F(C){if(s[C.id]===void 0)return;const j=s[C.id];for(const at in j){const ot=j[at];for(const ft in ot)_(ot[ft].object),delete ot[ft];delete j[at]}delete s[C.id]}function H(C){for(const j in s){const at=s[j];if(at[C.id]===void 0)continue;const ot=at[C.id];for(const ft in ot)_(ot[ft].object),delete ot[ft];delete at[C.id]}}function q(){N(),h=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:N,dispose:G,releaseStatesOfGeometry:F,releaseStatesOfProgram:H,initAttributes:R,enableAttribute:v,disableUnusedAttributes:I}}function nT(r,t,i){let s;function l(m){s=m}function c(m,_){r.drawArrays(s,m,_),i.update(_,s,1)}function h(m,_,x){x!==0&&(r.drawArraysInstanced(s,m,_,x),i.update(_,s,x))}function d(m,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,_,0,x);let S=0;for(let b=0;b<x;b++)S+=_[b];i.update(S,s,1)}function p(m,_,x,y){if(x===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<m.length;b++)h(m[b],_[b],y[b]);else{S.multiDrawArraysInstancedWEBGL(s,m,0,_,0,y,0,x);let b=0;for(let R=0;R<x;R++)b+=_[R]*y[R];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function iT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(H){return!(H!==Qi&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const q=H===yl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==da&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==fa&&!q)}function p(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=b>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:U,vertexTextures:G,maxSamples:F}}function aT(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new vs,d=new ge,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const S=x.length!==0||y||s!==0||l;return l=y,s=x.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,y){i=_(x,y,0)},this.setState=function(x,y,S){const b=x.clippingPlanes,R=x.clipIntersection,v=x.clipShadows,g=r.get(x);if(!l||b===null||b.length===0||c&&!v)c?_(null):m();else{const I=c?0:s,P=I*4;let U=g.clippingState||null;p.value=U,U=_(b,y,P,S);for(let G=0;G!==P;++G)U[G]=i[G];g.clippingState=U,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(x,y,S,b){const R=x!==null?x.length:0;let v=null;if(R!==0){if(v=p.value,b!==!0||v===null){const g=S+R*4,I=y.matrixWorldInverse;d.getNormalMatrix(I),(v===null||v.length<g)&&(v=new Float32Array(g));for(let P=0,U=S;P!==R;++P,U+=4)h.copy(x[P]).applyMatrix4(I,d),h.normal.toArray(v,U),v[U+3]=h.constant}p.value=v,p.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,v}}function sT(r){let t=new WeakMap;function i(h,d){return d===ad?h.mapping=no:d===sd&&(h.mapping=io),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===ad||d===sd)if(t.has(h)){const p=t.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new t1(p.height);return m.fromEquirectangularTexture(r,h),t.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Jr=4,x_=[.125,.215,.35,.446,.526,.582],Zs=20,Gh=new $d,y_=new Ce;let Vh=null,kh=0,jh=0,Xh=!1;const Ws=(1+Math.sqrt(5))/2,Qr=1/Ws,S_=[new et(-Ws,Qr,0),new et(Ws,Qr,0),new et(-Qr,0,Ws),new et(Qr,0,Ws),new et(0,Ws,-Qr),new et(0,Ws,Qr),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)],rT=new et;class M_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=rT}=c;Vh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=b_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vh,kh,jh),this._renderer.xr.enabled=Xh,t.scissorTest=!1,qc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===no||t.mapping===io?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ua,minFilter:ua,generateMipmaps:!1,type:yl,format:Qi,colorSpace:ao,depthBuffer:!1},l=E_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E_(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oT(c)),this._blurMaterial=lT(c,t,i)}return l}_compileMaterial(t){const i=new en(this._lodPlanes[0],t);this._renderer.compile(i,Gh)}_sceneToCubeUV(t,i,s,l,c){const p=new Zi(90,1,i,s),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,y=x.autoClear,S=x.toneMapping;x.getClearColor(y_),x.toneMapping=Ms,x.autoClear=!1;const b=new so({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1}),R=new en(new ha,b);let v=!1;const g=t.background;g?g.isColor&&(b.color.copy(g),t.background=null,v=!0):(b.color.copy(y_),v=!0);for(let I=0;I<6;I++){const P=I%3;P===0?(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[I],c.y,c.z)):P===1?(p.up.set(0,0,m[I]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[I],c.z)):(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[I]));const U=this._cubeSize;qc(l,P*U,I>2?U:0,U,U),x.setRenderTarget(l),v&&x.render(R,p),x.render(t,p)}R.geometry.dispose(),R.material.dispose(),x.toneMapping=S,x.autoClear=y,t.background=g}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===no||t.mapping===io;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=T_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=b_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new en(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;qc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,Gh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=S_[(l-c-1)%S_.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new en(this._lodPlanes[l],m),y=m.uniforms,S=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Zs-1),R=c/b,v=isFinite(c)?1+Math.floor(_*R):Zs;v>Zs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Zs}`);const g=[];let I=0;for(let H=0;H<Zs;++H){const q=H/R,N=Math.exp(-q*q/2);g.push(N),H===0?I+=N:H<v&&(I+=2*N)}for(let H=0;H<g.length;H++)g[H]=g[H]/I;y.envMap.value=t.texture,y.samples.value=v,y.weights.value=g,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:P}=this;y.dTheta.value=b,y.mipInt.value=P-s;const U=this._sizeLods[l],G=3*U*(l>P-Jr?l-P+Jr:0),F=4*(this._cubeSize-U);qc(i,G,F,3*U,2*U),p.setRenderTarget(i),p.render(x,Gh)}}function oT(r){const t=[],i=[],s=[];let l=r;const c=r-Jr+1+x_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>r-Jr?p=x_[h-r+Jr-1]:h===0&&(p=0),s.push(p);const m=1/(d-2),_=-m,x=1+m,y=[_,_,x,_,x,x,_,_,x,x,_,x],S=6,b=6,R=3,v=2,g=1,I=new Float32Array(R*b*S),P=new Float32Array(v*b*S),U=new Float32Array(g*b*S);for(let F=0;F<S;F++){const H=F%3*2/3-1,q=F>2?0:-1,N=[H,q,0,H+2/3,q,0,H+2/3,q+1,0,H,q,0,H+2/3,q+1,0,H,q+1,0];I.set(N,R*b*F),P.set(y,v*b*F);const C=[F,F,F,F,F,F];U.set(C,g*b*F)}const G=new $i;G.setAttribute("position",new Ji(I,R)),G.setAttribute("uv",new Ji(P,v)),G.setAttribute("faceIndex",new Ji(U,g)),t.push(G),l>Jr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function E_(r,t,i){const s=new $s(r,t,i);return s.texture.mapping=cu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function qc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function lT(r,t,i){const s=new Float32Array(Zs),l=new et(0,1,0);return new Es({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:tp(),fragmentShader:`

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
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function b_(){return new Es({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tp(),fragmentShader:`

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
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function T_(){return new Es({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function tp(){return`

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
	`}function cT(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===ad||p===sd,_=p===no||p===io;if(m||_){let x=t.get(d);const y=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new M_(r)),x=m?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new M_(r)),x=m?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function l(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function uT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&au("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function fT(r,t,i,s){const l={},c=new WeakMap;function h(x){const y=x.target;y.index!==null&&t.remove(y.index);for(const b in y.attributes)t.remove(y.attributes[b]);y.removeEventListener("dispose",h),delete l[y.id];const S=c.get(y);S&&(t.remove(S),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(x,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function p(x){const y=x.attributes;for(const S in y)t.update(y[S],r.ARRAY_BUFFER)}function m(x){const y=[],S=x.index,b=x.attributes.position;let R=0;if(S!==null){const I=S.array;R=S.version;for(let P=0,U=I.length;P<U;P+=3){const G=I[P+0],F=I[P+1],H=I[P+2];y.push(G,F,F,H,H,G)}}else if(b!==void 0){const I=b.array;R=b.version;for(let P=0,U=I.length/3-1;P<U;P+=3){const G=P+0,F=P+1,H=P+2;y.push(G,F,F,H,H,G)}}else return;const v=new(hv(y)?gv:mv)(y,1);v.version=R;const g=c.get(x);g&&t.remove(g),c.set(x,v)}function _(x){const y=c.get(x);if(y){const S=x.index;S!==null&&y.version<S.version&&m(x)}else m(x);return c.get(x)}return{get:d,update:p,getWireframeAttribute:_}}function hT(r,t,i){let s;function l(y){s=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function p(y,S){r.drawElements(s,S,c,y*h),i.update(S,s,1)}function m(y,S,b){b!==0&&(r.drawElementsInstanced(s,S,c,y*h,b),i.update(S,s,b))}function _(y,S,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,y,0,b);let v=0;for(let g=0;g<b;g++)v+=S[g];i.update(v,s,1)}function x(y,S,b,R){if(b===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<y.length;g++)m(y[g]/h,S[g],R[g]);else{v.multiDrawElementsInstancedWEBGL(s,S,0,c,y,0,R,0,b);let g=0;for(let I=0;I<b;I++)g+=S[I]*R[I];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function dT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function pT(r,t,i){const s=new WeakMap,l=new pn;function c(h,d,p){const m=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let y=s.get(d);if(y===void 0||y.count!==x){let C=function(){q.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),R===!0&&(U=2),v===!0&&(U=3);let G=d.attributes.position.count*U,F=1;G>t.maxTextureSize&&(F=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const H=new Float32Array(G*F*4*x),q=new dv(H,G,F,x);q.type=fa,q.needsUpdate=!0;const N=U*4;for(let j=0;j<x;j++){const at=g[j],ot=I[j],ft=P[j],mt=G*F*4*j;for(let B=0;B<at.count;B++){const Q=B*N;b===!0&&(l.fromBufferAttribute(at,B),H[mt+Q+0]=l.x,H[mt+Q+1]=l.y,H[mt+Q+2]=l.z,H[mt+Q+3]=0),R===!0&&(l.fromBufferAttribute(ot,B),H[mt+Q+4]=l.x,H[mt+Q+5]=l.y,H[mt+Q+6]=l.z,H[mt+Q+7]=0),v===!0&&(l.fromBufferAttribute(ft,B),H[mt+Q+8]=l.x,H[mt+Q+9]=l.y,H[mt+Q+10]=l.z,H[mt+Q+11]=ft.itemSize===4?l.w:1)}}y={count:x,texture:q,size:new fe(G,F)},s.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let v=0;v<m.length;v++)b+=m[v];const R=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(r,"morphTargetBaseInfluence",R),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function mT(r,t,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,_=p.geometry,x=t.get(p,_);if(l.get(x)!==m&&(t.update(x),l.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return x}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}const bv=new Qn,A_=new Sv(1,1),Tv=new dv,Av=new IM,Rv=new xv,R_=[],C_=[],w_=new Float32Array(16),D_=new Float32Array(9),U_=new Float32Array(4);function lo(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=R_[l];if(c===void 0&&(c=new Float32Array(l),R_[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function Ln(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function On(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function fu(r,t){let i=C_[t];i===void 0&&(i=new Int32Array(t),C_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function gT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function _T(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ln(i,t))return;r.uniform2fv(this.addr,t),On(i,t)}}function vT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Ln(i,t))return;r.uniform3fv(this.addr,t),On(i,t)}}function xT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ln(i,t))return;r.uniform4fv(this.addr,t),On(i,t)}}function yT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Ln(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),On(i,t)}else{if(Ln(i,s))return;U_.set(s),r.uniformMatrix2fv(this.addr,!1,U_),On(i,s)}}function ST(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Ln(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),On(i,t)}else{if(Ln(i,s))return;D_.set(s),r.uniformMatrix3fv(this.addr,!1,D_),On(i,s)}}function MT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Ln(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),On(i,t)}else{if(Ln(i,s))return;w_.set(s),r.uniformMatrix4fv(this.addr,!1,w_),On(i,s)}}function ET(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function bT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ln(i,t))return;r.uniform2iv(this.addr,t),On(i,t)}}function TT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Ln(i,t))return;r.uniform3iv(this.addr,t),On(i,t)}}function AT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ln(i,t))return;r.uniform4iv(this.addr,t),On(i,t)}}function RT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function CT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ln(i,t))return;r.uniform2uiv(this.addr,t),On(i,t)}}function wT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Ln(i,t))return;r.uniform3uiv(this.addr,t),On(i,t)}}function DT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ln(i,t))return;r.uniform4uiv(this.addr,t),On(i,t)}}function UT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(A_.compareFunction=fv,c=A_):c=bv,i.setTexture2D(t||c,l)}function NT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Av,l)}function LT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Rv,l)}function OT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Tv,l)}function PT(r){switch(r){case 5126:return gT;case 35664:return _T;case 35665:return vT;case 35666:return xT;case 35674:return yT;case 35675:return ST;case 35676:return MT;case 5124:case 35670:return ET;case 35667:case 35671:return bT;case 35668:case 35672:return TT;case 35669:case 35673:return AT;case 5125:return RT;case 36294:return CT;case 36295:return wT;case 36296:return DT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return OT}}function zT(r,t){r.uniform1fv(this.addr,t)}function IT(r,t){const i=lo(t,this.size,2);r.uniform2fv(this.addr,i)}function BT(r,t){const i=lo(t,this.size,3);r.uniform3fv(this.addr,i)}function FT(r,t){const i=lo(t,this.size,4);r.uniform4fv(this.addr,i)}function HT(r,t){const i=lo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function GT(r,t){const i=lo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function VT(r,t){const i=lo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function kT(r,t){r.uniform1iv(this.addr,t)}function jT(r,t){r.uniform2iv(this.addr,t)}function XT(r,t){r.uniform3iv(this.addr,t)}function qT(r,t){r.uniform4iv(this.addr,t)}function WT(r,t){r.uniform1uiv(this.addr,t)}function YT(r,t){r.uniform2uiv(this.addr,t)}function ZT(r,t){r.uniform3uiv(this.addr,t)}function KT(r,t){r.uniform4uiv(this.addr,t)}function QT(r,t,i){const s=this.cache,l=t.length,c=fu(i,l);Ln(s,c)||(r.uniform1iv(this.addr,c),On(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||bv,c[h])}function JT(r,t,i){const s=this.cache,l=t.length,c=fu(i,l);Ln(s,c)||(r.uniform1iv(this.addr,c),On(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Av,c[h])}function $T(r,t,i){const s=this.cache,l=t.length,c=fu(i,l);Ln(s,c)||(r.uniform1iv(this.addr,c),On(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Rv,c[h])}function tA(r,t,i){const s=this.cache,l=t.length,c=fu(i,l);Ln(s,c)||(r.uniform1iv(this.addr,c),On(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Tv,c[h])}function eA(r){switch(r){case 5126:return zT;case 35664:return IT;case 35665:return BT;case 35666:return FT;case 35674:return HT;case 35675:return GT;case 35676:return VT;case 5124:case 35670:return kT;case 35667:case 35671:return jT;case 35668:case 35672:return XT;case 35669:case 35673:return qT;case 5125:return WT;case 36294:return YT;case 36295:return ZT;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return QT;case 35679:case 36299:case 36307:return JT;case 35680:case 36300:case 36308:case 36293:return $T;case 36289:case 36303:case 36311:case 36292:return tA}}class nA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=PT(i.type)}}class iA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=eA(i.type)}}class aA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const qh=/(\w+)(\])?(\[|\.)?/g;function N_(r,t){r.seq.push(t),r.map[t.id]=t}function sA(r,t,i){const s=r.name,l=s.length;for(qh.lastIndex=0;;){const c=qh.exec(s),h=qh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){N_(i,m===void 0?new nA(d,r,t):new iA(d,r,t));break}else{let x=i.map[d];x===void 0&&(x=new aA(d),N_(i,x)),i=x}}}class su{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);sA(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function L_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const rA=37297;let oA=0;function lA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const O_=new ge;function cA(r){Be._getMatrix(O_,Be.workingColorSpace,r);const t=`mat3( ${O_.elements.map(i=>i.toFixed(4))} )`;switch(Be.getTransfer(r)){case ru:return[t,"LinearTransferOETF"];case Ke:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function P_(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+lA(r.getShaderSource(t),h)}else return l}function uA(r,t){const i=cA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function fA(r,t){let i;switch(t){case cM:i="Linear";break;case uM:i="Reinhard";break;case fM:i="Cineon";break;case ev:i="ACESFilmic";break;case dM:i="AgX";break;case pM:i="Neutral";break;case hM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new et;function hA(){Be.getLuminanceCoefficients(Wc);const r=Wc.x.toFixed(4),t=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pl).join(`
`)}function pA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function mA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function pl(r){return r!==""}function z_(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function I_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gA=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(r){return r.replace(gA,vA)}const _A=new Map;function vA(r,t){let i=_e[t];if(i===void 0){const s=_A.get(t);if(s!==void 0)i=_e[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return zd(i)}const xA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B_(r){return r.replace(xA,yA)}function yA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function F_(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function SA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===J_?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===$_?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===za&&(t="SHADOWMAP_TYPE_VSM"),t}function MA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case no:case io:t="ENVMAP_TYPE_CUBE";break;case cu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function EA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case io:t="ENVMAP_MODE_REFRACTION";break}return t}function bA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case tv:t="ENVMAP_BLENDING_MULTIPLY";break;case oM:t="ENVMAP_BLENDING_MIX";break;case lM:t="ENVMAP_BLENDING_ADD";break}return t}function TA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function AA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=SA(i),m=MA(i),_=EA(i),x=bA(i),y=TA(i),S=dA(i),b=pA(c),R=l.createProgram();let v,g,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(pl).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(pl).join(`
`),g.length>0&&(g+=`
`)):(v=[F_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pl).join(`
`),g=[F_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ms?"#define TONE_MAPPING":"",i.toneMapping!==Ms?_e.tonemapping_pars_fragment:"",i.toneMapping!==Ms?fA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,uA("linearToOutputTexel",i.outputColorSpace),hA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(pl).join(`
`)),h=zd(h),h=z_(h,i),h=I_(h,i),d=zd(d),d=z_(d,i),d=I_(d,i),h=B_(h),d=B_(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,v=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",i.glslVersion===Xg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Xg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const P=I+v+h,U=I+g+d,G=L_(l,l.VERTEX_SHADER,P),F=L_(l,l.FRAGMENT_SHADER,U);l.attachShader(R,G),l.attachShader(R,F),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function H(j){if(r.debug.checkShaderErrors){const at=l.getProgramInfoLog(R).trim(),ot=l.getShaderInfoLog(G).trim(),ft=l.getShaderInfoLog(F).trim();let mt=!0,B=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(mt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,G,F);else{const Q=P_(l,G,"vertex"),Z=P_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+at+`
`+Q+`
`+Z)}else at!==""?console.warn("THREE.WebGLProgram: Program Info Log:",at):(ot===""||ft==="")&&(B=!1);B&&(j.diagnostics={runnable:mt,programLog:at,vertexShader:{log:ot,prefix:v},fragmentShader:{log:ft,prefix:g}})}l.deleteShader(G),l.deleteShader(F),q=new su(l,R),N=mA(l,R)}let q;this.getUniforms=function(){return q===void 0&&H(this),q};let N;this.getAttributes=function(){return N===void 0&&H(this),N};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,rA)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=oA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=G,this.fragmentShader=F,this}let RA=0;class CA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new wA(t),i.set(t,s)),s}}class wA{constructor(t){this.id=RA++,this.code=t,this.usedTimes=0}}function DA(r,t,i,s,l,c,h){const d=new Yd,p=new CA,m=new Set,_=[],x=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(N){return m.add(N),N===0?"uv":`uv${N}`}function v(N,C,j,at,ot){const ft=at.fog,mt=ot.geometry,B=N.isMeshStandardMaterial?at.environment:null,Q=(N.isMeshStandardMaterial?i:t).get(N.envMap||B),Z=Q&&Q.mapping===cu?Q.image.height:null,bt=b[N.type];N.precision!==null&&(S=l.getMaxPrecision(N.precision),S!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",S,"instead."));const L=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,nt=L!==void 0?L.length:0;let St=0;mt.morphAttributes.position!==void 0&&(St=1),mt.morphAttributes.normal!==void 0&&(St=2),mt.morphAttributes.color!==void 0&&(St=3);let Tt,tt,gt,xt;if(bt){const Ue=la[bt];Tt=Ue.vertexShader,tt=Ue.fragmentShader}else Tt=N.vertexShader,tt=N.fragmentShader,p.update(N),gt=p.getVertexShaderID(N),xt=p.getFragmentShaderID(N);const Dt=r.getRenderTarget(),Lt=r.state.buffers.depth.getReversed(),ue=ot.isInstancedMesh===!0,Kt=ot.isBatchedMesh===!0,he=!!N.map,ze=!!N.matcap,ie=!!Q,k=!!N.aoMap,ln=!!N.lightMap,pe=!!N.bumpMap,ne=!!N.normalMap,Yt=!!N.displacementMap,De=!!N.emissiveMap,ht=!!N.metalnessMap,w=!!N.roughnessMap,T=N.anisotropy>0,Y=N.clearcoat>0,pt=N.dispersion>0,Et=N.iridescence>0,z=N.sheen>0,Ut=N.transmission>0,Rt=T&&!!N.anisotropyMap,jt=Y&&!!N.clearcoatMap,Qt=Y&&!!N.clearcoatNormalMap,Ct=Y&&!!N.clearcoatRoughnessMap,Bt=Et&&!!N.iridescenceMap,Jt=Et&&!!N.iridescenceThicknessMap,qt=z&&!!N.sheenColorMap,Ht=z&&!!N.sheenRoughnessMap,oe=!!N.specularMap,ae=!!N.specularColorMap,we=!!N.specularIntensityMap,X=Ut&&!!N.transmissionMap,Pt=Ut&&!!N.thicknessMap,dt=!!N.gradientMap,vt=!!N.alphaMap,Ft=N.alphaTest>0,zt=!!N.alphaHash,le=!!N.extensions;let Ne=Ms;N.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(Ne=r.toneMapping);const $e={shaderID:bt,shaderType:N.type,shaderName:N.name,vertexShader:Tt,fragmentShader:tt,defines:N.defines,customVertexShaderID:gt,customFragmentShaderID:xt,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:S,batching:Kt,batchingColor:Kt&&ot._colorsTexture!==null,instancing:ue,instancingColor:ue&&ot.instanceColor!==null,instancingMorph:ue&&ot.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Dt===null?r.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:ao,alphaToCoverage:!!N.alphaToCoverage,map:he,matcap:ze,envMap:ie,envMapMode:ie&&Q.mapping,envMapCubeUVHeight:Z,aoMap:k,lightMap:ln,bumpMap:pe,normalMap:ne,displacementMap:y&&Yt,emissiveMap:De,normalMapObjectSpace:ne&&N.normalMapType===vM,normalMapTangentSpace:ne&&N.normalMapType===uv,metalnessMap:ht,roughnessMap:w,anisotropy:T,anisotropyMap:Rt,clearcoat:Y,clearcoatMap:jt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:Ct,dispersion:pt,iridescence:Et,iridescenceMap:Bt,iridescenceThicknessMap:Jt,sheen:z,sheenColorMap:qt,sheenRoughnessMap:Ht,specularMap:oe,specularColorMap:ae,specularIntensityMap:we,transmission:Ut,transmissionMap:X,thicknessMap:Pt,gradientMap:dt,opaque:N.transparent===!1&&N.blending===$r&&N.alphaToCoverage===!1,alphaMap:vt,alphaTest:Ft,alphaHash:zt,combine:N.combine,mapUv:he&&R(N.map.channel),aoMapUv:k&&R(N.aoMap.channel),lightMapUv:ln&&R(N.lightMap.channel),bumpMapUv:pe&&R(N.bumpMap.channel),normalMapUv:ne&&R(N.normalMap.channel),displacementMapUv:Yt&&R(N.displacementMap.channel),emissiveMapUv:De&&R(N.emissiveMap.channel),metalnessMapUv:ht&&R(N.metalnessMap.channel),roughnessMapUv:w&&R(N.roughnessMap.channel),anisotropyMapUv:Rt&&R(N.anisotropyMap.channel),clearcoatMapUv:jt&&R(N.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&R(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&R(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&R(N.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&R(N.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&R(N.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&R(N.sheenRoughnessMap.channel),specularMapUv:oe&&R(N.specularMap.channel),specularColorMapUv:ae&&R(N.specularColorMap.channel),specularIntensityMapUv:we&&R(N.specularIntensityMap.channel),transmissionMapUv:X&&R(N.transmissionMap.channel),thicknessMapUv:Pt&&R(N.thicknessMap.channel),alphaMapUv:vt&&R(N.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(ne||T),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!mt.attributes.uv&&(he||vt),fog:!!ft,useFog:N.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Lt,skinning:ot.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:St,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:N.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ne,decodeVideoTexture:he&&N.map.isVideoTexture===!0&&Be.getTransfer(N.map.colorSpace)===Ke,decodeVideoTextureEmissive:De&&N.emissiveMap.isVideoTexture===!0&&Be.getTransfer(N.emissiveMap.colorSpace)===Ke,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===ca,flipSided:N.side===ci,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:le&&N.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&N.extensions.multiDraw===!0||Kt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return $e.vertexUv1s=m.has(1),$e.vertexUv2s=m.has(2),$e.vertexUv3s=m.has(3),m.clear(),$e}function g(N){const C=[];if(N.shaderID?C.push(N.shaderID):(C.push(N.customVertexShaderID),C.push(N.customFragmentShaderID)),N.defines!==void 0)for(const j in N.defines)C.push(j),C.push(N.defines[j]);return N.isRawShaderMaterial===!1&&(I(C,N),P(C,N),C.push(r.outputColorSpace)),C.push(N.customProgramCacheKey),C.join()}function I(N,C){N.push(C.precision),N.push(C.outputColorSpace),N.push(C.envMapMode),N.push(C.envMapCubeUVHeight),N.push(C.mapUv),N.push(C.alphaMapUv),N.push(C.lightMapUv),N.push(C.aoMapUv),N.push(C.bumpMapUv),N.push(C.normalMapUv),N.push(C.displacementMapUv),N.push(C.emissiveMapUv),N.push(C.metalnessMapUv),N.push(C.roughnessMapUv),N.push(C.anisotropyMapUv),N.push(C.clearcoatMapUv),N.push(C.clearcoatNormalMapUv),N.push(C.clearcoatRoughnessMapUv),N.push(C.iridescenceMapUv),N.push(C.iridescenceThicknessMapUv),N.push(C.sheenColorMapUv),N.push(C.sheenRoughnessMapUv),N.push(C.specularMapUv),N.push(C.specularColorMapUv),N.push(C.specularIntensityMapUv),N.push(C.transmissionMapUv),N.push(C.thicknessMapUv),N.push(C.combine),N.push(C.fogExp2),N.push(C.sizeAttenuation),N.push(C.morphTargetsCount),N.push(C.morphAttributeCount),N.push(C.numDirLights),N.push(C.numPointLights),N.push(C.numSpotLights),N.push(C.numSpotLightMaps),N.push(C.numHemiLights),N.push(C.numRectAreaLights),N.push(C.numDirLightShadows),N.push(C.numPointLightShadows),N.push(C.numSpotLightShadows),N.push(C.numSpotLightShadowsWithMaps),N.push(C.numLightProbes),N.push(C.shadowMapType),N.push(C.toneMapping),N.push(C.numClippingPlanes),N.push(C.numClipIntersection),N.push(C.depthPacking)}function P(N,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),N.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),N.push(d.mask)}function U(N){const C=b[N.type];let j;if(C){const at=la[C];j=KM.clone(at.uniforms)}else j=N.uniforms;return j}function G(N,C){let j;for(let at=0,ot=_.length;at<ot;at++){const ft=_[at];if(ft.cacheKey===C){j=ft,++j.usedTimes;break}}return j===void 0&&(j=new AA(r,C,N,c),_.push(j)),j}function F(N){if(--N.usedTimes===0){const C=_.indexOf(N);_[C]=_[_.length-1],_.pop(),N.destroy()}}function H(N){p.remove(N)}function q(){p.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:U,acquireProgram:G,releaseProgram:F,releaseShaderCache:H,programs:_,dispose:q}}function UA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,p){r.get(h)[d]=p}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function NA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function H_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function G_(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(x,y,S,b,R,v){let g=r[t];return g===void 0?(g={id:x.id,object:x,geometry:y,material:S,groupOrder:b,renderOrder:x.renderOrder,z:R,group:v},r[t]=g):(g.id=x.id,g.object=x,g.geometry=y,g.material=S,g.groupOrder=b,g.renderOrder=x.renderOrder,g.z=R,g.group=v),t++,g}function d(x,y,S,b,R,v){const g=h(x,y,S,b,R,v);S.transmission>0?s.push(g):S.transparent===!0?l.push(g):i.push(g)}function p(x,y,S,b,R,v){const g=h(x,y,S,b,R,v);S.transmission>0?s.unshift(g):S.transparent===!0?l.unshift(g):i.unshift(g)}function m(x,y){i.length>1&&i.sort(x||NA),s.length>1&&s.sort(y||H_),l.length>1&&l.sort(y||H_)}function _(){for(let x=t,y=r.length;x<y;x++){const S=r[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:_,sort:m}}function LA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new G_,r.set(s,[h])):l>=c.length?(h=new G_,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function OA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new et,color:new Ce};break;case"SpotLight":i={position:new et,direction:new et,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new et,halfWidth:new et,halfHeight:new et};break}return r[t.id]=i,i}}}function PA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let zA=0;function IA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function BA(r){const t=new OA,i=PA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new et);const l=new et,c=new nn,h=new nn;function d(m){let _=0,x=0,y=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let S=0,b=0,R=0,v=0,g=0,I=0,P=0,U=0,G=0,F=0,H=0;m.sort(IA);for(let N=0,C=m.length;N<C;N++){const j=m[N],at=j.color,ot=j.intensity,ft=j.distance,mt=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)_+=at.r*ot,x+=at.g*ot,y+=at.b*ot;else if(j.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(j.sh.coefficients[B],ot);H++}else if(j.isDirectionalLight){const B=t.get(j);if(B.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const Q=j.shadow,Z=i.get(j);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,s.directionalShadow[S]=Z,s.directionalShadowMap[S]=mt,s.directionalShadowMatrix[S]=j.shadow.matrix,I++}s.directional[S]=B,S++}else if(j.isSpotLight){const B=t.get(j);B.position.setFromMatrixPosition(j.matrixWorld),B.color.copy(at).multiplyScalar(ot),B.distance=ft,B.coneCos=Math.cos(j.angle),B.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),B.decay=j.decay,s.spot[R]=B;const Q=j.shadow;if(j.map&&(s.spotLightMap[G]=j.map,G++,Q.updateMatrices(j),j.castShadow&&F++),s.spotLightMatrix[R]=Q.matrix,j.castShadow){const Z=i.get(j);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,s.spotShadow[R]=Z,s.spotShadowMap[R]=mt,U++}R++}else if(j.isRectAreaLight){const B=t.get(j);B.color.copy(at).multiplyScalar(ot),B.halfWidth.set(j.width*.5,0,0),B.halfHeight.set(0,j.height*.5,0),s.rectArea[v]=B,v++}else if(j.isPointLight){const B=t.get(j);if(B.color.copy(j.color).multiplyScalar(j.intensity),B.distance=j.distance,B.decay=j.decay,j.castShadow){const Q=j.shadow,Z=i.get(j);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,Z.shadowCameraNear=Q.camera.near,Z.shadowCameraFar=Q.camera.far,s.pointShadow[b]=Z,s.pointShadowMap[b]=mt,s.pointShadowMatrix[b]=j.shadow.matrix,P++}s.point[b]=B,b++}else if(j.isHemisphereLight){const B=t.get(j);B.skyColor.copy(j.color).multiplyScalar(ot),B.groundColor.copy(j.groundColor).multiplyScalar(ot),s.hemi[g]=B,g++}}v>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Gt.LTC_FLOAT_1,s.rectAreaLTC2=Gt.LTC_FLOAT_2):(s.rectAreaLTC1=Gt.LTC_HALF_1,s.rectAreaLTC2=Gt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=y;const q=s.hash;(q.directionalLength!==S||q.pointLength!==b||q.spotLength!==R||q.rectAreaLength!==v||q.hemiLength!==g||q.numDirectionalShadows!==I||q.numPointShadows!==P||q.numSpotShadows!==U||q.numSpotMaps!==G||q.numLightProbes!==H)&&(s.directional.length=S,s.spot.length=R,s.rectArea.length=v,s.point.length=b,s.hemi.length=g,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=U+G-F,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=H,q.directionalLength=S,q.pointLength=b,q.spotLength=R,q.rectAreaLength=v,q.hemiLength=g,q.numDirectionalShadows=I,q.numPointShadows=P,q.numSpotShadows=U,q.numSpotMaps=G,q.numLightProbes=H,s.version=zA++)}function p(m,_){let x=0,y=0,S=0,b=0,R=0;const v=_.matrixWorldInverse;for(let g=0,I=m.length;g<I;g++){const P=m[g];if(P.isDirectionalLight){const U=s.directional[x];U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(v),x++}else if(P.isSpotLight){const U=s.spot[S];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(v),U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(v),S++}else if(P.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(v),h.identity(),c.copy(P.matrixWorld),c.premultiply(v),h.extractRotation(c),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(P.isPointLight){const U=s.point[y];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(v),y++}else if(P.isHemisphereLight){const U=s.hemi[R];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(v),R++}}}return{setup:d,setupView:p,state:s}}function V_(r){const t=new BA(r),i=[],s=[];function l(_){m.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function p(_){t.setupView(i,_)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function FA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new V_(r),t.set(l,[d])):c>=h.length?(d=new V_(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const HA=`void main() {
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
}`;function VA(r,t,i){let s=new Zd;const l=new fe,c=new fe,h=new pn,d=new u1({depthPacking:_M}),p=new f1,m={},_=i.maxTextureSize,x={[Ha]:ci,[ci]:Ha,[ca]:ca},y=new Es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:HA,fragmentShader:GA}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const b=new $i;b.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new en(b,y),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J_;let g=this.type;this.render=function(F,H,q){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||F.length===0)return;const N=r.getRenderTarget(),C=r.getActiveCubeFace(),j=r.getActiveMipmapLevel(),at=r.state;at.setBlending(Ss),at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const ot=g!==za&&this.type===za,ft=g===za&&this.type!==za;for(let mt=0,B=F.length;mt<B;mt++){const Q=F[mt],Z=Q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const bt=Z.getFrameExtents();if(l.multiply(bt),c.copy(Z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/bt.x),l.x=c.x*bt.x,Z.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/bt.y),l.y=c.y*bt.y,Z.mapSize.y=c.y)),Z.map===null||ot===!0||ft===!0){const nt=this.type!==za?{minFilter:Mi,magFilter:Mi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new $s(l.x,l.y,nt),Z.map.texture.name=Q.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const L=Z.getViewportCount();for(let nt=0;nt<L;nt++){const St=Z.getViewport(nt);h.set(c.x*St.x,c.y*St.y,c.x*St.z,c.y*St.w),at.viewport(h),Z.updateMatrices(Q,nt),s=Z.getFrustum(),U(H,q,Z.camera,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===za&&I(Z,q),Z.needsUpdate=!1}g=this.type,v.needsUpdate=!1,r.setRenderTarget(N,C,j)};function I(F,H){const q=t.update(R);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new $s(l.x,l.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(H,null,q,y,R,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(H,null,q,S,R,null)}function P(F,H,q,N){let C=null;const j=q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(j!==void 0)C=j;else if(C=q.isPointLight===!0?p:d,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const at=C.uuid,ot=H.uuid;let ft=m[at];ft===void 0&&(ft={},m[at]=ft);let mt=ft[ot];mt===void 0&&(mt=C.clone(),ft[ot]=mt,H.addEventListener("dispose",G)),C=mt}if(C.visible=H.visible,C.wireframe=H.wireframe,N===za?C.side=H.shadowSide!==null?H.shadowSide:H.side:C.side=H.shadowSide!==null?H.shadowSide:x[H.side],C.alphaMap=H.alphaMap,C.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,C.map=H.map,C.clipShadows=H.clipShadows,C.clippingPlanes=H.clippingPlanes,C.clipIntersection=H.clipIntersection,C.displacementMap=H.displacementMap,C.displacementScale=H.displacementScale,C.displacementBias=H.displacementBias,C.wireframeLinewidth=H.wireframeLinewidth,C.linewidth=H.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const at=r.properties.get(C);at.light=q}return C}function U(F,H,q,N,C){if(F.visible===!1)return;if(F.layers.test(H.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===za)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,F.matrixWorld);const ot=t.update(F),ft=F.material;if(Array.isArray(ft)){const mt=ot.groups;for(let B=0,Q=mt.length;B<Q;B++){const Z=mt[B],bt=ft[Z.materialIndex];if(bt&&bt.visible){const L=P(F,bt,N,C);F.onBeforeShadow(r,F,H,q,ot,L,Z),r.renderBufferDirect(q,null,ot,L,F,Z),F.onAfterShadow(r,F,H,q,ot,L,Z)}}}else if(ft.visible){const mt=P(F,ft,N,C);F.onBeforeShadow(r,F,H,q,ot,mt,null),r.renderBufferDirect(q,null,ot,mt,F,null),F.onAfterShadow(r,F,H,q,ot,mt,null)}}const at=F.children;for(let ot=0,ft=at.length;ot<ft;ot++)U(at[ot],H,q,N,C)}function G(F){F.target.removeEventListener("dispose",G);for(const q in m){const N=m[q],C=F.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}const kA={[Qh]:Jh,[$h]:nd,[td]:id,[eo]:ed,[Jh]:Qh,[nd]:$h,[id]:td,[ed]:eo};function jA(r,t){function i(){let X=!1;const Pt=new pn;let dt=null;const vt=new pn(0,0,0,0);return{setMask:function(Ft){dt!==Ft&&!X&&(r.colorMask(Ft,Ft,Ft,Ft),dt=Ft)},setLocked:function(Ft){X=Ft},setClear:function(Ft,zt,le,Ne,$e){$e===!0&&(Ft*=Ne,zt*=Ne,le*=Ne),Pt.set(Ft,zt,le,Ne),vt.equals(Pt)===!1&&(r.clearColor(Ft,zt,le,Ne),vt.copy(Pt))},reset:function(){X=!1,dt=null,vt.set(-1,0,0,0)}}}function s(){let X=!1,Pt=!1,dt=null,vt=null,Ft=null;return{setReversed:function(zt){if(Pt!==zt){const le=t.get("EXT_clip_control");zt?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),Pt=zt;const Ne=Ft;Ft=null,this.setClear(Ne)}},getReversed:function(){return Pt},setTest:function(zt){zt?Dt(r.DEPTH_TEST):Lt(r.DEPTH_TEST)},setMask:function(zt){dt!==zt&&!X&&(r.depthMask(zt),dt=zt)},setFunc:function(zt){if(Pt&&(zt=kA[zt]),vt!==zt){switch(zt){case Qh:r.depthFunc(r.NEVER);break;case Jh:r.depthFunc(r.ALWAYS);break;case $h:r.depthFunc(r.LESS);break;case eo:r.depthFunc(r.LEQUAL);break;case td:r.depthFunc(r.EQUAL);break;case ed:r.depthFunc(r.GEQUAL);break;case nd:r.depthFunc(r.GREATER);break;case id:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}vt=zt}},setLocked:function(zt){X=zt},setClear:function(zt){Ft!==zt&&(Pt&&(zt=1-zt),r.clearDepth(zt),Ft=zt)},reset:function(){X=!1,dt=null,vt=null,Ft=null,Pt=!1}}}function l(){let X=!1,Pt=null,dt=null,vt=null,Ft=null,zt=null,le=null,Ne=null,$e=null;return{setTest:function(Ue){X||(Ue?Dt(r.STENCIL_TEST):Lt(r.STENCIL_TEST))},setMask:function(Ue){Pt!==Ue&&!X&&(r.stencilMask(Ue),Pt=Ue)},setFunc:function(Ue,jn,mn){(dt!==Ue||vt!==jn||Ft!==mn)&&(r.stencilFunc(Ue,jn,mn),dt=Ue,vt=jn,Ft=mn)},setOp:function(Ue,jn,mn){(zt!==Ue||le!==jn||Ne!==mn)&&(r.stencilOp(Ue,jn,mn),zt=Ue,le=jn,Ne=mn)},setLocked:function(Ue){X=Ue},setClear:function(Ue){$e!==Ue&&(r.clearStencil(Ue),$e=Ue)},reset:function(){X=!1,Pt=null,dt=null,vt=null,Ft=null,zt=null,le=null,Ne=null,$e=null}}}const c=new i,h=new s,d=new l,p=new WeakMap,m=new WeakMap;let _={},x={},y=new WeakMap,S=[],b=null,R=!1,v=null,g=null,I=null,P=null,U=null,G=null,F=null,H=new Ce(0,0,0),q=0,N=!1,C=null,j=null,at=null,ot=null,ft=null;const mt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Q=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),B=Q>=1):Z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),B=Q>=2);let bt=null,L={};const nt=r.getParameter(r.SCISSOR_BOX),St=r.getParameter(r.VIEWPORT),Tt=new pn().fromArray(nt),tt=new pn().fromArray(St);function gt(X,Pt,dt,vt){const Ft=new Uint8Array(4),zt=r.createTexture();r.bindTexture(X,zt),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let le=0;le<dt;le++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Pt,0,r.RGBA,1,1,vt,0,r.RGBA,r.UNSIGNED_BYTE,Ft):r.texImage2D(Pt+le,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ft);return zt}const xt={};xt[r.TEXTURE_2D]=gt(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[r.TEXTURE_2D_ARRAY]=gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Dt(r.DEPTH_TEST),h.setFunc(eo),pe(!1),ne(Fg),Dt(r.CULL_FACE),k(Ss);function Dt(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function Lt(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function ue(X,Pt){return x[X]!==Pt?(r.bindFramebuffer(X,Pt),x[X]=Pt,X===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Pt),X===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Kt(X,Pt){let dt=S,vt=!1;if(X){dt=y.get(Pt),dt===void 0&&(dt=[],y.set(Pt,dt));const Ft=X.textures;if(dt.length!==Ft.length||dt[0]!==r.COLOR_ATTACHMENT0){for(let zt=0,le=Ft.length;zt<le;zt++)dt[zt]=r.COLOR_ATTACHMENT0+zt;dt.length=Ft.length,vt=!0}}else dt[0]!==r.BACK&&(dt[0]=r.BACK,vt=!0);vt&&r.drawBuffers(dt)}function he(X){return b!==X?(r.useProgram(X),b=X,!0):!1}const ze={[Ys]:r.FUNC_ADD,[jS]:r.FUNC_SUBTRACT,[XS]:r.FUNC_REVERSE_SUBTRACT};ze[qS]=r.MIN,ze[WS]=r.MAX;const ie={[YS]:r.ZERO,[ZS]:r.ONE,[KS]:r.SRC_COLOR,[Zh]:r.SRC_ALPHA,[nM]:r.SRC_ALPHA_SATURATE,[tM]:r.DST_COLOR,[JS]:r.DST_ALPHA,[QS]:r.ONE_MINUS_SRC_COLOR,[Kh]:r.ONE_MINUS_SRC_ALPHA,[eM]:r.ONE_MINUS_DST_COLOR,[$S]:r.ONE_MINUS_DST_ALPHA,[iM]:r.CONSTANT_COLOR,[aM]:r.ONE_MINUS_CONSTANT_COLOR,[sM]:r.CONSTANT_ALPHA,[rM]:r.ONE_MINUS_CONSTANT_ALPHA};function k(X,Pt,dt,vt,Ft,zt,le,Ne,$e,Ue){if(X===Ss){R===!0&&(Lt(r.BLEND),R=!1);return}if(R===!1&&(Dt(r.BLEND),R=!0),X!==kS){if(X!==v||Ue!==N){if((g!==Ys||U!==Ys)&&(r.blendEquation(r.FUNC_ADD),g=Ys,U=Ys),Ue)switch(X){case $r:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hg:r.blendFunc(r.ONE,r.ONE);break;case Gg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vg:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case $r:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hg:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Gg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vg:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}I=null,P=null,G=null,F=null,H.set(0,0,0),q=0,v=X,N=Ue}return}Ft=Ft||Pt,zt=zt||dt,le=le||vt,(Pt!==g||Ft!==U)&&(r.blendEquationSeparate(ze[Pt],ze[Ft]),g=Pt,U=Ft),(dt!==I||vt!==P||zt!==G||le!==F)&&(r.blendFuncSeparate(ie[dt],ie[vt],ie[zt],ie[le]),I=dt,P=vt,G=zt,F=le),(Ne.equals(H)===!1||$e!==q)&&(r.blendColor(Ne.r,Ne.g,Ne.b,$e),H.copy(Ne),q=$e),v=X,N=!1}function ln(X,Pt){X.side===ca?Lt(r.CULL_FACE):Dt(r.CULL_FACE);let dt=X.side===ci;Pt&&(dt=!dt),pe(dt),X.blending===$r&&X.transparent===!1?k(Ss):k(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const vt=X.stencilWrite;d.setTest(vt),vt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),De(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Dt(r.SAMPLE_ALPHA_TO_COVERAGE):Lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function pe(X){C!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),C=X)}function ne(X){X!==GS?(Dt(r.CULL_FACE),X!==j&&(X===Fg?r.cullFace(r.BACK):X===VS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Lt(r.CULL_FACE),j=X}function Yt(X){X!==at&&(B&&r.lineWidth(X),at=X)}function De(X,Pt,dt){X?(Dt(r.POLYGON_OFFSET_FILL),(ot!==Pt||ft!==dt)&&(r.polygonOffset(Pt,dt),ot=Pt,ft=dt)):Lt(r.POLYGON_OFFSET_FILL)}function ht(X){X?Dt(r.SCISSOR_TEST):Lt(r.SCISSOR_TEST)}function w(X){X===void 0&&(X=r.TEXTURE0+mt-1),bt!==X&&(r.activeTexture(X),bt=X)}function T(X,Pt,dt){dt===void 0&&(bt===null?dt=r.TEXTURE0+mt-1:dt=bt);let vt=L[dt];vt===void 0&&(vt={type:void 0,texture:void 0},L[dt]=vt),(vt.type!==X||vt.texture!==Pt)&&(bt!==dt&&(r.activeTexture(dt),bt=dt),r.bindTexture(X,Pt||xt[X]),vt.type=X,vt.texture=Pt)}function Y(){const X=L[bt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function pt(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function z(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qt(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Jt(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(X){Tt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Tt.copy(X))}function Ht(X){tt.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),tt.copy(X))}function oe(X,Pt){let dt=m.get(Pt);dt===void 0&&(dt=new WeakMap,m.set(Pt,dt));let vt=dt.get(X);vt===void 0&&(vt=r.getUniformBlockIndex(Pt,X.name),dt.set(X,vt))}function ae(X,Pt){const vt=m.get(Pt).get(X);p.get(Pt)!==vt&&(r.uniformBlockBinding(Pt,vt,X.__bindingPointIndex),p.set(Pt,vt))}function we(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},bt=null,L={},x={},y=new WeakMap,S=[],b=null,R=!1,v=null,g=null,I=null,P=null,U=null,G=null,F=null,H=new Ce(0,0,0),q=0,N=!1,C=null,j=null,at=null,ot=null,ft=null,Tt.set(0,0,r.canvas.width,r.canvas.height),tt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Dt,disable:Lt,bindFramebuffer:ue,drawBuffers:Kt,useProgram:he,setBlending:k,setMaterial:ln,setFlipSided:pe,setCullFace:ne,setLineWidth:Yt,setPolygonOffset:De,setScissorTest:ht,activeTexture:w,bindTexture:T,unbindTexture:Y,compressedTexImage2D:pt,compressedTexImage3D:Et,texImage2D:Bt,texImage3D:Jt,updateUBOMapping:oe,uniformBlockBinding:ae,texStorage2D:Qt,texStorage3D:Ct,texSubImage2D:z,texSubImage3D:Ut,compressedTexSubImage2D:Rt,compressedTexSubImage3D:jt,scissor:qt,viewport:Ht,reset:we}}function XA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new fe,_=new WeakMap;let x;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,T){return S?new OffscreenCanvas(w,T):lu("canvas")}function R(w,T,Y){let pt=1;const Et=ht(w);if((Et.width>Y||Et.height>Y)&&(pt=Y/Math.max(Et.width,Et.height)),pt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const z=Math.floor(pt*Et.width),Ut=Math.floor(pt*Et.height);x===void 0&&(x=b(z,Ut));const Rt=T?b(z,Ut):x;return Rt.width=z,Rt.height=Ut,Rt.getContext("2d").drawImage(w,0,0,z,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+z+"x"+Ut+")."),Rt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),w;return w}function v(w){return w.generateMipmaps}function g(w){r.generateMipmap(w)}function I(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(w,T,Y,pt,Et=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let z=T;if(T===r.RED&&(Y===r.FLOAT&&(z=r.R32F),Y===r.HALF_FLOAT&&(z=r.R16F),Y===r.UNSIGNED_BYTE&&(z=r.R8)),T===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(z=r.R8UI),Y===r.UNSIGNED_SHORT&&(z=r.R16UI),Y===r.UNSIGNED_INT&&(z=r.R32UI),Y===r.BYTE&&(z=r.R8I),Y===r.SHORT&&(z=r.R16I),Y===r.INT&&(z=r.R32I)),T===r.RG&&(Y===r.FLOAT&&(z=r.RG32F),Y===r.HALF_FLOAT&&(z=r.RG16F),Y===r.UNSIGNED_BYTE&&(z=r.RG8)),T===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(z=r.RG8UI),Y===r.UNSIGNED_SHORT&&(z=r.RG16UI),Y===r.UNSIGNED_INT&&(z=r.RG32UI),Y===r.BYTE&&(z=r.RG8I),Y===r.SHORT&&(z=r.RG16I),Y===r.INT&&(z=r.RG32I)),T===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(z=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(z=r.RGB16UI),Y===r.UNSIGNED_INT&&(z=r.RGB32UI),Y===r.BYTE&&(z=r.RGB8I),Y===r.SHORT&&(z=r.RGB16I),Y===r.INT&&(z=r.RGB32I)),T===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(z=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(z=r.RGBA16UI),Y===r.UNSIGNED_INT&&(z=r.RGBA32UI),Y===r.BYTE&&(z=r.RGBA8I),Y===r.SHORT&&(z=r.RGBA16I),Y===r.INT&&(z=r.RGBA32I)),T===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(z=r.RGB9_E5),T===r.RGBA){const Ut=Et?ru:Be.getTransfer(pt);Y===r.FLOAT&&(z=r.RGBA32F),Y===r.HALF_FLOAT&&(z=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(z=Ut===Ke?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(z=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(z=r.RGB5_A1)}return(z===r.R16F||z===r.R32F||z===r.RG16F||z===r.RG32F||z===r.RGBA16F||z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function U(w,T){let Y;return w?T===null||T===Js||T===gl?Y=r.DEPTH24_STENCIL8:T===fa?Y=r.DEPTH32F_STENCIL8:T===ml&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Js||T===gl?Y=r.DEPTH_COMPONENT24:T===fa?Y=r.DEPTH_COMPONENT32F:T===ml&&(Y=r.DEPTH_COMPONENT16),Y}function G(w,T){return v(w)===!0||w.isFramebufferTexture&&w.minFilter!==Mi&&w.minFilter!==ua?Math.log2(Math.max(T.width,T.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?T.mipmaps.length:1}function F(w){const T=w.target;T.removeEventListener("dispose",F),q(T),T.isVideoTexture&&_.delete(T)}function H(w){const T=w.target;T.removeEventListener("dispose",H),C(T)}function q(w){const T=s.get(w);if(T.__webglInit===void 0)return;const Y=w.source,pt=y.get(Y);if(pt){const Et=pt[T.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&N(w),Object.keys(pt).length===0&&y.delete(Y)}s.remove(w)}function N(w){const T=s.get(w);r.deleteTexture(T.__webglTexture);const Y=w.source,pt=y.get(Y);delete pt[T.__cacheKey],h.memory.textures--}function C(w){const T=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(T.__webglFramebuffer[pt]))for(let Et=0;Et<T.__webglFramebuffer[pt].length;Et++)r.deleteFramebuffer(T.__webglFramebuffer[pt][Et]);else r.deleteFramebuffer(T.__webglFramebuffer[pt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[pt])}else{if(Array.isArray(T.__webglFramebuffer))for(let pt=0;pt<T.__webglFramebuffer.length;pt++)r.deleteFramebuffer(T.__webglFramebuffer[pt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pt=0;pt<T.__webglColorRenderbuffer.length;pt++)T.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[pt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=w.textures;for(let pt=0,Et=Y.length;pt<Et;pt++){const z=s.get(Y[pt]);z.__webglTexture&&(r.deleteTexture(z.__webglTexture),h.memory.textures--),s.remove(Y[pt])}s.remove(w)}let j=0;function at(){j=0}function ot(){const w=j;return w>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),j+=1,w}function ft(w){const T=[];return T.push(w.wrapS),T.push(w.wrapT),T.push(w.wrapR||0),T.push(w.magFilter),T.push(w.minFilter),T.push(w.anisotropy),T.push(w.internalFormat),T.push(w.format),T.push(w.type),T.push(w.generateMipmaps),T.push(w.premultiplyAlpha),T.push(w.flipY),T.push(w.unpackAlignment),T.push(w.colorSpace),T.join()}function mt(w,T){const Y=s.get(w);if(w.isVideoTexture&&Yt(w),w.isRenderTargetTexture===!1&&w.version>0&&Y.__version!==w.version){const pt=w.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(Y,w,T);return}}i.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+T)}function B(w,T){const Y=s.get(w);if(w.version>0&&Y.__version!==w.version){tt(Y,w,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+T)}function Q(w,T){const Y=s.get(w);if(w.version>0&&Y.__version!==w.version){tt(Y,w,T);return}i.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+T)}function Z(w,T){const Y=s.get(w);if(w.version>0&&Y.__version!==w.version){gt(Y,w,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+T)}const bt={[rd]:r.REPEAT,[Ks]:r.CLAMP_TO_EDGE,[od]:r.MIRRORED_REPEAT},L={[Mi]:r.NEAREST,[mM]:r.NEAREST_MIPMAP_NEAREST,[Ac]:r.NEAREST_MIPMAP_LINEAR,[ua]:r.LINEAR,[_h]:r.LINEAR_MIPMAP_NEAREST,[Qs]:r.LINEAR_MIPMAP_LINEAR},nt={[xM]:r.NEVER,[TM]:r.ALWAYS,[yM]:r.LESS,[fv]:r.LEQUAL,[SM]:r.EQUAL,[bM]:r.GEQUAL,[MM]:r.GREATER,[EM]:r.NOTEQUAL};function St(w,T){if(T.type===fa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===ua||T.magFilter===_h||T.magFilter===Ac||T.magFilter===Qs||T.minFilter===ua||T.minFilter===_h||T.minFilter===Ac||T.minFilter===Qs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,bt[T.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,bt[T.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,bt[T.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,L[T.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,nt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Mi||T.minFilter!==Ac&&T.minFilter!==Qs||T.type===fa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(w,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Tt(w,T){let Y=!1;w.__webglInit===void 0&&(w.__webglInit=!0,T.addEventListener("dispose",F));const pt=T.source;let Et=y.get(pt);Et===void 0&&(Et={},y.set(pt,Et));const z=ft(T);if(z!==w.__cacheKey){Et[z]===void 0&&(Et[z]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,Y=!0),Et[z].usedTimes++;const Ut=Et[w.__cacheKey];Ut!==void 0&&(Et[w.__cacheKey].usedTimes--,Ut.usedTimes===0&&N(T)),w.__cacheKey=z,w.__webglTexture=Et[z].texture}return Y}function tt(w,T,Y){let pt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pt=r.TEXTURE_3D);const Et=Tt(w,T),z=T.source;i.bindTexture(pt,w.__webglTexture,r.TEXTURE0+Y);const Ut=s.get(z);if(z.version!==Ut.__version||Et===!0){i.activeTexture(r.TEXTURE0+Y);const Rt=Be.getPrimaries(Be.workingColorSpace),jt=T.colorSpace===xs?null:Be.getPrimaries(T.colorSpace),Qt=T.colorSpace===xs||Rt===jt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let Ct=R(T.image,!1,l.maxTextureSize);Ct=De(T,Ct);const Bt=c.convert(T.format,T.colorSpace),Jt=c.convert(T.type);let qt=P(T.internalFormat,Bt,Jt,T.colorSpace,T.isVideoTexture);St(pt,T);let Ht;const oe=T.mipmaps,ae=T.isVideoTexture!==!0,we=Ut.__version===void 0||Et===!0,X=z.dataReady,Pt=G(T,Ct);if(T.isDepthTexture)qt=U(T.format===vl,T.type),we&&(ae?i.texStorage2D(r.TEXTURE_2D,1,qt,Ct.width,Ct.height):i.texImage2D(r.TEXTURE_2D,0,qt,Ct.width,Ct.height,0,Bt,Jt,null));else if(T.isDataTexture)if(oe.length>0){ae&&we&&i.texStorage2D(r.TEXTURE_2D,Pt,qt,oe[0].width,oe[0].height);for(let dt=0,vt=oe.length;dt<vt;dt++)Ht=oe[dt],ae?X&&i.texSubImage2D(r.TEXTURE_2D,dt,0,0,Ht.width,Ht.height,Bt,Jt,Ht.data):i.texImage2D(r.TEXTURE_2D,dt,qt,Ht.width,Ht.height,0,Bt,Jt,Ht.data);T.generateMipmaps=!1}else ae?(we&&i.texStorage2D(r.TEXTURE_2D,Pt,qt,Ct.width,Ct.height),X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ct.width,Ct.height,Bt,Jt,Ct.data)):i.texImage2D(r.TEXTURE_2D,0,qt,Ct.width,Ct.height,0,Bt,Jt,Ct.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ae&&we&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Pt,qt,oe[0].width,oe[0].height,Ct.depth);for(let dt=0,vt=oe.length;dt<vt;dt++)if(Ht=oe[dt],T.format!==Qi)if(Bt!==null)if(ae){if(X)if(T.layerUpdates.size>0){const Ft=v_(Ht.width,Ht.height,T.format,T.type);for(const zt of T.layerUpdates){const le=Ht.data.subarray(zt*Ft/Ht.data.BYTES_PER_ELEMENT,(zt+1)*Ft/Ht.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,zt,Ht.width,Ht.height,1,Bt,le)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,0,Ht.width,Ht.height,Ct.depth,Bt,Ht.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,dt,qt,Ht.width,Ht.height,Ct.depth,0,Ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?X&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,0,Ht.width,Ht.height,Ct.depth,Bt,Jt,Ht.data):i.texImage3D(r.TEXTURE_2D_ARRAY,dt,qt,Ht.width,Ht.height,Ct.depth,0,Bt,Jt,Ht.data)}else{ae&&we&&i.texStorage2D(r.TEXTURE_2D,Pt,qt,oe[0].width,oe[0].height);for(let dt=0,vt=oe.length;dt<vt;dt++)Ht=oe[dt],T.format!==Qi?Bt!==null?ae?X&&i.compressedTexSubImage2D(r.TEXTURE_2D,dt,0,0,Ht.width,Ht.height,Bt,Ht.data):i.compressedTexImage2D(r.TEXTURE_2D,dt,qt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?X&&i.texSubImage2D(r.TEXTURE_2D,dt,0,0,Ht.width,Ht.height,Bt,Jt,Ht.data):i.texImage2D(r.TEXTURE_2D,dt,qt,Ht.width,Ht.height,0,Bt,Jt,Ht.data)}else if(T.isDataArrayTexture)if(ae){if(we&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Pt,qt,Ct.width,Ct.height,Ct.depth),X)if(T.layerUpdates.size>0){const dt=v_(Ct.width,Ct.height,T.format,T.type);for(const vt of T.layerUpdates){const Ft=Ct.data.subarray(vt*dt/Ct.data.BYTES_PER_ELEMENT,(vt+1)*dt/Ct.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,vt,Ct.width,Ct.height,1,Bt,Jt,Ft)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,Bt,Jt,Ct.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,qt,Ct.width,Ct.height,Ct.depth,0,Bt,Jt,Ct.data);else if(T.isData3DTexture)ae?(we&&i.texStorage3D(r.TEXTURE_3D,Pt,qt,Ct.width,Ct.height,Ct.depth),X&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,Bt,Jt,Ct.data)):i.texImage3D(r.TEXTURE_3D,0,qt,Ct.width,Ct.height,Ct.depth,0,Bt,Jt,Ct.data);else if(T.isFramebufferTexture){if(we)if(ae)i.texStorage2D(r.TEXTURE_2D,Pt,qt,Ct.width,Ct.height);else{let dt=Ct.width,vt=Ct.height;for(let Ft=0;Ft<Pt;Ft++)i.texImage2D(r.TEXTURE_2D,Ft,qt,dt,vt,0,Bt,Jt,null),dt>>=1,vt>>=1}}else if(oe.length>0){if(ae&&we){const dt=ht(oe[0]);i.texStorage2D(r.TEXTURE_2D,Pt,qt,dt.width,dt.height)}for(let dt=0,vt=oe.length;dt<vt;dt++)Ht=oe[dt],ae?X&&i.texSubImage2D(r.TEXTURE_2D,dt,0,0,Bt,Jt,Ht):i.texImage2D(r.TEXTURE_2D,dt,qt,Bt,Jt,Ht);T.generateMipmaps=!1}else if(ae){if(we){const dt=ht(Ct);i.texStorage2D(r.TEXTURE_2D,Pt,qt,dt.width,dt.height)}X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Bt,Jt,Ct)}else i.texImage2D(r.TEXTURE_2D,0,qt,Bt,Jt,Ct);v(T)&&g(pt),Ut.__version=z.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function gt(w,T,Y){if(T.image.length!==6)return;const pt=Tt(w,T),Et=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+Y);const z=s.get(Et);if(Et.version!==z.__version||pt===!0){i.activeTexture(r.TEXTURE0+Y);const Ut=Be.getPrimaries(Be.workingColorSpace),Rt=T.colorSpace===xs?null:Be.getPrimaries(T.colorSpace),jt=T.colorSpace===xs||Ut===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const Qt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ct=T.image[0]&&T.image[0].isDataTexture,Bt=[];for(let vt=0;vt<6;vt++)!Qt&&!Ct?Bt[vt]=R(T.image[vt],!0,l.maxCubemapSize):Bt[vt]=Ct?T.image[vt].image:T.image[vt],Bt[vt]=De(T,Bt[vt]);const Jt=Bt[0],qt=c.convert(T.format,T.colorSpace),Ht=c.convert(T.type),oe=P(T.internalFormat,qt,Ht,T.colorSpace),ae=T.isVideoTexture!==!0,we=z.__version===void 0||pt===!0,X=Et.dataReady;let Pt=G(T,Jt);St(r.TEXTURE_CUBE_MAP,T);let dt;if(Qt){ae&&we&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Pt,oe,Jt.width,Jt.height);for(let vt=0;vt<6;vt++){dt=Bt[vt].mipmaps;for(let Ft=0;Ft<dt.length;Ft++){const zt=dt[Ft];T.format!==Qi?qt!==null?ae?X&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,0,0,zt.width,zt.height,qt,zt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,oe,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,0,0,zt.width,zt.height,qt,Ht,zt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,oe,zt.width,zt.height,0,qt,Ht,zt.data)}}}else{if(dt=T.mipmaps,ae&&we){dt.length>0&&Pt++;const vt=ht(Bt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Pt,oe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Ct){ae?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Bt[vt].width,Bt[vt].height,qt,Ht,Bt[vt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Bt[vt].width,Bt[vt].height,0,qt,Ht,Bt[vt].data);for(let Ft=0;Ft<dt.length;Ft++){const le=dt[Ft].image[vt].image;ae?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,0,0,le.width,le.height,qt,Ht,le.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,oe,le.width,le.height,0,qt,Ht,le.data)}}else{ae?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,qt,Ht,Bt[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,qt,Ht,Bt[vt]);for(let Ft=0;Ft<dt.length;Ft++){const zt=dt[Ft];ae?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,0,0,qt,Ht,zt.image[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,oe,qt,Ht,zt.image[vt])}}}v(T)&&g(r.TEXTURE_CUBE_MAP),z.__version=Et.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function xt(w,T,Y,pt,Et,z){const Ut=c.convert(Y.format,Y.colorSpace),Rt=c.convert(Y.type),jt=P(Y.internalFormat,Ut,Rt,Y.colorSpace),Qt=s.get(T),Ct=s.get(Y);if(Ct.__renderTarget=T,!Qt.__hasExternalTextures){const Bt=Math.max(1,T.width>>z),Jt=Math.max(1,T.height>>z);Et===r.TEXTURE_3D||Et===r.TEXTURE_2D_ARRAY?i.texImage3D(Et,z,jt,Bt,Jt,T.depth,0,Ut,Rt,null):i.texImage2D(Et,z,jt,Bt,Jt,0,Ut,Rt,null)}i.bindFramebuffer(r.FRAMEBUFFER,w),ne(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,Et,Ct.__webglTexture,0,pe(T)):(Et===r.TEXTURE_2D||Et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pt,Et,Ct.__webglTexture,z),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(w,T,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,w),T.depthBuffer){const pt=T.depthTexture,Et=pt&&pt.isDepthTexture?pt.type:null,z=U(T.stencilBuffer,Et),Ut=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=pe(T);ne(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt,z,T.width,T.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,z,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,z,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ut,r.RENDERBUFFER,w)}else{const pt=T.textures;for(let Et=0;Et<pt.length;Et++){const z=pt[Et],Ut=c.convert(z.format,z.colorSpace),Rt=c.convert(z.type),jt=P(z.internalFormat,Ut,Rt,z.colorSpace),Qt=pe(T);Y&&ne(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt,jt,T.width,T.height):ne(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qt,jt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,jt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Lt(w,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,w),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=s.get(T.depthTexture);pt.__renderTarget=T,(!pt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),mt(T.depthTexture,0);const Et=pt.__webglTexture,z=pe(T);if(T.depthTexture.format===_l)ne(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Et,0,z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Et,0);else if(T.depthTexture.format===vl)ne(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Et,0,z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function ue(w){const T=s.get(w),Y=w.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==w.depthTexture){const pt=w.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pt){const Et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pt.removeEventListener("dispose",Et)};pt.addEventListener("dispose",Et),T.__depthDisposeCallback=Et}T.__boundDepthTexture=pt}if(w.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const pt=w.texture.mipmaps;pt&&pt.length>0?Lt(T.__webglFramebuffer[0],w):Lt(T.__webglFramebuffer,w)}else if(Y){T.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[pt]),T.__webglDepthbuffer[pt]===void 0)T.__webglDepthbuffer[pt]=r.createRenderbuffer(),Dt(T.__webglDepthbuffer[pt],w,!1);else{const Et=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,z=T.__webglDepthbuffer[pt];r.bindRenderbuffer(r.RENDERBUFFER,z),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,z)}}else{const pt=w.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Dt(T.__webglDepthbuffer,w,!1);else{const Et=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,z=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,z),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,z)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Kt(w,T,Y){const pt=s.get(w);T!==void 0&&xt(pt.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&ue(w)}function he(w){const T=w.texture,Y=s.get(w),pt=s.get(T);w.addEventListener("dispose",H);const Et=w.textures,z=w.isWebGLCubeRenderTarget===!0,Ut=Et.length>1;if(Ut||(pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture()),pt.__version=T.version,h.memory.textures++),z){Y.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[Rt]=[];for(let jt=0;jt<T.mipmaps.length;jt++)Y.__webglFramebuffer[Rt][jt]=r.createFramebuffer()}else Y.__webglFramebuffer[Rt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Rt=0;Rt<T.mipmaps.length;Rt++)Y.__webglFramebuffer[Rt]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Ut)for(let Rt=0,jt=Et.length;Rt<jt;Rt++){const Qt=s.get(Et[Rt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=r.createTexture(),h.memory.textures++)}if(w.samples>0&&ne(w)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Rt=0;Rt<Et.length;Rt++){const jt=Et[Rt];Y.__webglColorRenderbuffer[Rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Rt]);const Qt=c.convert(jt.format,jt.colorSpace),Ct=c.convert(jt.type),Bt=P(jt.internalFormat,Qt,Ct,jt.colorSpace,w.isXRRenderTarget===!0),Jt=pe(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt,Bt,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),Dt(Y.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(z){i.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),St(r.TEXTURE_CUBE_MAP,T);for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0)for(let jt=0;jt<T.mipmaps.length;jt++)xt(Y.__webglFramebuffer[Rt][jt],w,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,jt);else xt(Y.__webglFramebuffer[Rt],w,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);v(T)&&g(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ut){for(let Rt=0,jt=Et.length;Rt<jt;Rt++){const Qt=Et[Rt],Ct=s.get(Qt);i.bindTexture(r.TEXTURE_2D,Ct.__webglTexture),St(r.TEXTURE_2D,Qt),xt(Y.__webglFramebuffer,w,Qt,r.COLOR_ATTACHMENT0+Rt,r.TEXTURE_2D,0),v(Qt)&&g(r.TEXTURE_2D)}i.unbindTexture()}else{let Rt=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Rt=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Rt,pt.__webglTexture),St(Rt,T),T.mipmaps&&T.mipmaps.length>0)for(let jt=0;jt<T.mipmaps.length;jt++)xt(Y.__webglFramebuffer[jt],w,T,r.COLOR_ATTACHMENT0,Rt,jt);else xt(Y.__webglFramebuffer,w,T,r.COLOR_ATTACHMENT0,Rt,0);v(T)&&g(Rt),i.unbindTexture()}w.depthBuffer&&ue(w)}function ze(w){const T=w.textures;for(let Y=0,pt=T.length;Y<pt;Y++){const Et=T[Y];if(v(Et)){const z=I(w),Ut=s.get(Et).__webglTexture;i.bindTexture(z,Ut),g(z),i.unbindTexture()}}}const ie=[],k=[];function ln(w){if(w.samples>0){if(ne(w)===!1){const T=w.textures,Y=w.width,pt=w.height;let Et=r.COLOR_BUFFER_BIT;const z=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=s.get(w),Rt=T.length>1;if(Rt)for(let Qt=0;Qt<T.length;Qt++)i.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const jt=w.texture.mipmaps;jt&&jt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Qt=0;Qt<T.length;Qt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Et|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Et|=r.STENCIL_BUFFER_BIT)),Rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ut.__webglColorRenderbuffer[Qt]);const Ct=s.get(T[Qt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ct,0)}r.blitFramebuffer(0,0,Y,pt,0,0,Y,pt,Et,r.NEAREST),p===!0&&(ie.length=0,k.length=0,ie.push(r.COLOR_ATTACHMENT0+Qt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ie.push(z),k.push(z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,k)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Rt)for(let Qt=0;Qt<T.length;Qt++){i.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qt,r.RENDERBUFFER,Ut.__webglColorRenderbuffer[Qt]);const Ct=s.get(T[Qt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qt,r.TEXTURE_2D,Ct,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&p){const T=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function pe(w){return Math.min(l.maxSamples,w.samples)}function ne(w){const T=s.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Yt(w){const T=h.render.frame;_.get(w)!==T&&(_.set(w,T),w.update())}function De(w,T){const Y=w.colorSpace,pt=w.format,Et=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||Y!==ao&&Y!==xs&&(Be.getTransfer(Y)===Ke?(pt!==Qi||Et!==da)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}function ht(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(m.width=w.naturalWidth||w.width,m.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(m.width=w.displayWidth,m.height=w.displayHeight):(m.width=w.width,m.height=w.height),m}this.allocateTextureUnit=ot,this.resetTextureUnits=at,this.setTexture2D=mt,this.setTexture2DArray=B,this.setTexture3D=Q,this.setTextureCube=Z,this.rebindTextures=Kt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=ne}function qA(r,t){function i(s,l=xs){let c;const h=Be.getTransfer(l);if(s===da)return r.UNSIGNED_BYTE;if(s===Hd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Gd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===sv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===iv)return r.BYTE;if(s===av)return r.SHORT;if(s===ml)return r.UNSIGNED_SHORT;if(s===Fd)return r.INT;if(s===Js)return r.UNSIGNED_INT;if(s===fa)return r.FLOAT;if(s===yl)return r.HALF_FLOAT;if(s===rv)return r.ALPHA;if(s===ov)return r.RGB;if(s===Qi)return r.RGBA;if(s===_l)return r.DEPTH_COMPONENT;if(s===vl)return r.DEPTH_STENCIL;if(s===Vd)return r.RED;if(s===kd)return r.RED_INTEGER;if(s===lv)return r.RG;if(s===jd)return r.RG_INTEGER;if(s===Xd)return r.RGBA_INTEGER;if(s===Jc||s===$c||s===tu||s===eu)if(h===Ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ld||s===cd||s===ud||s===fd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ld)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ud)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hd||s===dd||s===pd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===hd||s===dd)return h===Ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===pd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===md||s===gd||s===_d||s===vd||s===xd||s===yd||s===Sd||s===Md||s===Ed||s===bd||s===Td||s===Ad||s===Rd||s===Cd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===md)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_d)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Sd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Md)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ed)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Td)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ad)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Cd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===nu||s===wd||s===Dd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===nu)return h===Ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===wd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Dd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cv||s===Ud||s===Nd||s===Ld)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===nu)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ud)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Nd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ld)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===gl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const WA=`
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

}`;class ZA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Qn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Es({vertexShader:WA,fragmentShader:YA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new en(new ir(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KA extends er{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,_=null,x=null,y=null,S=null,b=null;const R=new ZA,v=i.getContextAttributes();let g=null,I=null;const P=[],U=[],G=new fe;let F=null;const H=new Zi;H.viewport=new pn;const q=new Zi;q.viewport=new pn;const N=[H,q],C=new m1;let j=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let gt=P[tt];return gt===void 0&&(gt=new Bh,P[tt]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(tt){let gt=P[tt];return gt===void 0&&(gt=new Bh,P[tt]=gt),gt.getGripSpace()},this.getHand=function(tt){let gt=P[tt];return gt===void 0&&(gt=new Bh,P[tt]=gt),gt.getHandSpace()};function ot(tt){const gt=U.indexOf(tt.inputSource);if(gt===-1)return;const xt=P[gt];xt!==void 0&&(xt.update(tt.inputSource,tt.frame,m||h),xt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function ft(){l.removeEventListener("select",ot),l.removeEventListener("selectstart",ot),l.removeEventListener("selectend",ot),l.removeEventListener("squeeze",ot),l.removeEventListener("squeezestart",ot),l.removeEventListener("squeezeend",ot),l.removeEventListener("end",ft),l.removeEventListener("inputsourceschange",mt);for(let tt=0;tt<P.length;tt++){const gt=U[tt];gt!==null&&(U[tt]=null,P[tt].disconnect(gt))}j=null,at=null,R.reset(),t.setRenderTarget(g),S=null,y=null,x=null,l=null,I=null,Tt.stop(),s.isPresenting=!1,t.setPixelRatio(F),t.setSize(G.width,G.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(tt){m=tt},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",ot),l.addEventListener("selectstart",ot),l.addEventListener("selectend",ot),l.addEventListener("squeeze",ot),l.addEventListener("squeezestart",ot),l.addEventListener("squeezeend",ot),l.addEventListener("end",ft),l.addEventListener("inputsourceschange",mt),v.xrCompatible!==!0&&await i.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Dt=null,Lt=null;v.depth&&(Lt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=v.stencil?vl:_l,Dt=v.stencil?gl:Js);const ue={colorFormat:i.RGBA8,depthFormat:Lt,scaleFactor:c};x=new XRWebGLBinding(l,i),y=x.createProjectionLayer(ue),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),I=new $s(y.textureWidth,y.textureHeight,{format:Qi,type:da,depthTexture:new Sv(y.textureWidth,y.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const xt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new $s(S.framebufferWidth,S.framebufferHeight,{format:Qi,type:da,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),Tt.setContext(l),Tt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function mt(tt){for(let gt=0;gt<tt.removed.length;gt++){const xt=tt.removed[gt],Dt=U.indexOf(xt);Dt>=0&&(U[Dt]=null,P[Dt].disconnect(xt))}for(let gt=0;gt<tt.added.length;gt++){const xt=tt.added[gt];let Dt=U.indexOf(xt);if(Dt===-1){for(let ue=0;ue<P.length;ue++)if(ue>=U.length){U.push(xt),Dt=ue;break}else if(U[ue]===null){U[ue]=xt,Dt=ue;break}if(Dt===-1)break}const Lt=P[Dt];Lt&&Lt.connect(xt)}}const B=new et,Q=new et;function Z(tt,gt,xt){B.setFromMatrixPosition(gt.matrixWorld),Q.setFromMatrixPosition(xt.matrixWorld);const Dt=B.distanceTo(Q),Lt=gt.projectionMatrix.elements,ue=xt.projectionMatrix.elements,Kt=Lt[14]/(Lt[10]-1),he=Lt[14]/(Lt[10]+1),ze=(Lt[9]+1)/Lt[5],ie=(Lt[9]-1)/Lt[5],k=(Lt[8]-1)/Lt[0],ln=(ue[8]+1)/ue[0],pe=Kt*k,ne=Kt*ln,Yt=Dt/(-k+ln),De=Yt*-k;if(gt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(De),tt.translateZ(Yt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Lt[10]===-1)tt.projectionMatrix.copy(gt.projectionMatrix),tt.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const ht=Kt+Yt,w=he+Yt,T=pe-De,Y=ne+(Dt-De),pt=ze*he/w*ht,Et=ie*he/w*ht;tt.projectionMatrix.makePerspective(T,Y,pt,Et,ht,w),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function bt(tt,gt){gt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(gt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let gt=tt.near,xt=tt.far;R.texture!==null&&(R.depthNear>0&&(gt=R.depthNear),R.depthFar>0&&(xt=R.depthFar)),C.near=q.near=H.near=gt,C.far=q.far=H.far=xt,(j!==C.near||at!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),j=C.near,at=C.far),H.layers.mask=tt.layers.mask|2,q.layers.mask=tt.layers.mask|4,C.layers.mask=H.layers.mask|q.layers.mask;const Dt=tt.parent,Lt=C.cameras;bt(C,Dt);for(let ue=0;ue<Lt.length;ue++)bt(Lt[ue],Dt);Lt.length===2?Z(C,H,q):C.projectionMatrix.copy(H.projectionMatrix),L(tt,C,Dt)};function L(tt,gt,xt){xt===null?tt.matrix.copy(gt.matrixWorld):(tt.matrix.copy(xt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(gt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(gt.projectionMatrix),tt.projectionMatrixInverse.copy(gt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Od*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(tt){p=tt,y!==null&&(y.fixedFoveation=tt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=tt)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let nt=null;function St(tt,gt){if(_=gt.getViewerPose(m||h),b=gt,_!==null){const xt=_.views;S!==null&&(t.setRenderTargetFramebuffer(I,S.framebuffer),t.setRenderTarget(I));let Dt=!1;xt.length!==C.cameras.length&&(C.cameras.length=0,Dt=!0);for(let Kt=0;Kt<xt.length;Kt++){const he=xt[Kt];let ze=null;if(S!==null)ze=S.getViewport(he);else{const k=x.getViewSubImage(y,he);ze=k.viewport,Kt===0&&(t.setRenderTargetTextures(I,k.colorTexture,k.depthStencilTexture),t.setRenderTarget(I))}let ie=N[Kt];ie===void 0&&(ie=new Zi,ie.layers.enable(Kt),ie.viewport=new pn,N[Kt]=ie),ie.matrix.fromArray(he.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(he.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ze.x,ze.y,ze.width,ze.height),Kt===0&&(C.matrix.copy(ie.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Dt===!0&&C.cameras.push(ie)}const Lt=l.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const Kt=x.getDepthInformation(xt[0]);Kt&&Kt.isValid&&Kt.texture&&R.init(t,Kt,l.renderState)}}for(let xt=0;xt<P.length;xt++){const Dt=U[xt],Lt=P[xt];Dt!==null&&Lt!==void 0&&Lt.update(Dt,gt,m||h)}nt&&nt(tt,gt),gt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:gt}),b=null}const Tt=new Ev;Tt.setAnimationLoop(St),this.setAnimationLoop=function(tt){nt=tt},this.dispose=function(){}}}const qs=new pa,QA=new nn;function JA(r,t){function i(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function s(v,g){g.color.getRGB(v.fogColor.value,_v(r)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function l(v,g,I,P,U){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(v,g):g.isMeshToonMaterial?(c(v,g),x(v,g)):g.isMeshPhongMaterial?(c(v,g),_(v,g)):g.isMeshStandardMaterial?(c(v,g),y(v,g),g.isMeshPhysicalMaterial&&S(v,g,U)):g.isMeshMatcapMaterial?(c(v,g),b(v,g)):g.isMeshDepthMaterial?c(v,g):g.isMeshDistanceMaterial?(c(v,g),R(v,g)):g.isMeshNormalMaterial?c(v,g):g.isLineBasicMaterial?(h(v,g),g.isLineDashedMaterial&&d(v,g)):g.isPointsMaterial?p(v,g,I,P):g.isSpriteMaterial?m(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,i(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,i(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,i(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===ci&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,i(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===ci&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,i(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,i(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const I=t.get(g),P=I.envMap,U=I.envMapRotation;P&&(v.envMap.value=P,qs.copy(U),qs.x*=-1,qs.y*=-1,qs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),v.envMapRotation.value.setFromMatrix4(QA.makeRotationFromEuler(qs)),v.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,v.aoMapTransform))}function h(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,i(g.map,v.mapTransform))}function d(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function p(v,g,I,P){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*I,v.scale.value=P*.5,g.map&&(v.map.value=g.map,i(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,i(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function m(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,i(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,i(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function _(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function x(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function y(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function S(v,g,I){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ci&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=I.texture,v.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,v.specularIntensityMapTransform))}function b(v,g){g.matcap&&(v.matcap.value=g.matcap)}function R(v,g){const I=t.get(g).light;v.referencePosition.value.setFromMatrixPosition(I.matrixWorld),v.nearDistance.value=I.shadow.camera.near,v.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function $A(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,P){const U=P.program;s.uniformBlockBinding(I,U)}function m(I,P){let U=l[I.id];U===void 0&&(b(I),U=_(I),l[I.id]=U,I.addEventListener("dispose",v));const G=P.program;s.updateUBOMapping(I,G);const F=t.render.frame;c[I.id]!==F&&(y(I),c[I.id]=F)}function _(I){const P=x();I.__bindingPointIndex=P;const U=r.createBuffer(),G=I.__size,F=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,G,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,U),U}function x(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const P=l[I.id],U=I.uniforms,G=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let F=0,H=U.length;F<H;F++){const q=Array.isArray(U[F])?U[F]:[U[F]];for(let N=0,C=q.length;N<C;N++){const j=q[N];if(S(j,F,N,G)===!0){const at=j.__offset,ot=Array.isArray(j.value)?j.value:[j.value];let ft=0;for(let mt=0;mt<ot.length;mt++){const B=ot[mt],Q=R(B);typeof B=="number"||typeof B=="boolean"?(j.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,at+ft,j.__data)):B.isMatrix3?(j.__data[0]=B.elements[0],j.__data[1]=B.elements[1],j.__data[2]=B.elements[2],j.__data[3]=0,j.__data[4]=B.elements[3],j.__data[5]=B.elements[4],j.__data[6]=B.elements[5],j.__data[7]=0,j.__data[8]=B.elements[6],j.__data[9]=B.elements[7],j.__data[10]=B.elements[8],j.__data[11]=0):(B.toArray(j.__data,ft),ft+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,at,j.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(I,P,U,G){const F=I.value,H=P+"_"+U;if(G[H]===void 0)return typeof F=="number"||typeof F=="boolean"?G[H]=F:G[H]=F.clone(),!0;{const q=G[H];if(typeof F=="number"||typeof F=="boolean"){if(q!==F)return G[H]=F,!0}else if(q.equals(F)===!1)return q.copy(F),!0}return!1}function b(I){const P=I.uniforms;let U=0;const G=16;for(let H=0,q=P.length;H<q;H++){const N=Array.isArray(P[H])?P[H]:[P[H]];for(let C=0,j=N.length;C<j;C++){const at=N[C],ot=Array.isArray(at.value)?at.value:[at.value];for(let ft=0,mt=ot.length;ft<mt;ft++){const B=ot[ft],Q=R(B),Z=U%G,bt=Z%Q.boundary,L=Z+bt;U+=bt,L!==0&&G-L<Q.storage&&(U+=G-L),at.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=U,U+=Q.storage}}}const F=U%G;return F>0&&(U+=G-F),I.__size=U,I.__cache={},this}function R(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function v(I){const P=I.target;P.removeEventListener("dispose",v);const U=h.indexOf(P.__bindingPointIndex);h.splice(U,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function g(){for(const I in l)r.deleteBuffer(l[I]);h=[],l={},c={}}return{bind:p,update:m,dispose:g}}class t2{constructor(t={}){const{canvas:i=CM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const b=new Uint32Array(4),R=new Int32Array(4);let v=null,g=null;const I=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ms,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let G=!1;this._outputColorSpace=ei;let F=0,H=0,q=null,N=-1,C=null;const j=new pn,at=new pn;let ot=null;const ft=new Ce(0);let mt=0,B=i.width,Q=i.height,Z=1,bt=null,L=null;const nt=new pn(0,0,B,Q),St=new pn(0,0,B,Q);let Tt=!1;const tt=new Zd;let gt=!1,xt=!1;const Dt=new nn,Lt=new nn,ue=new et,Kt=new pn,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function ie(){return q===null?Z:1}let k=s;function ln(D,K){return i.getContext(D,K)}try{const D={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Bd}`),i.addEventListener("webglcontextlost",vt,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",zt,!1),k===null){const K="webgl2";if(k=ln(K,D),k===null)throw ln(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let pe,ne,Yt,De,ht,w,T,Y,pt,Et,z,Ut,Rt,jt,Qt,Ct,Bt,Jt,qt,Ht,oe,ae,we,X;function Pt(){pe=new uT(k),pe.init(),ae=new qA(k,pe),ne=new iT(k,pe,t,ae),Yt=new jA(k,pe),ne.reverseDepthBuffer&&y&&Yt.buffers.depth.setReversed(!0),De=new dT(k),ht=new UA,w=new XA(k,pe,Yt,ht,ne,ae,De),T=new sT(U),Y=new cT(U),pt=new x1(k),we=new eT(k,pt),Et=new fT(k,pt,De,we),z=new mT(k,Et,pt,De),qt=new pT(k,ne,w),Ct=new aT(ht),Ut=new DA(U,T,Y,pe,ne,we,Ct),Rt=new JA(U,ht),jt=new LA,Qt=new FA(pe),Jt=new tT(U,T,Y,Yt,z,S,p),Bt=new VA(U,z,ne),X=new $A(k,De,ne,Yt),Ht=new nT(k,pe,De),oe=new hT(k,pe,De),De.programs=Ut.programs,U.capabilities=ne,U.extensions=pe,U.properties=ht,U.renderLists=jt,U.shadowMap=Bt,U.state=Yt,U.info=De}Pt();const dt=new KA(U,k);this.xr=dt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const D=pe.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=pe.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(D){D!==void 0&&(Z=D,this.setSize(B,Q,!1))},this.getSize=function(D){return D.set(B,Q)},this.setSize=function(D,K,ct=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=D,Q=K,i.width=Math.floor(D*Z),i.height=Math.floor(K*Z),ct===!0&&(i.style.width=D+"px",i.style.height=K+"px"),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(B*Z,Q*Z).floor()},this.setDrawingBufferSize=function(D,K,ct){B=D,Q=K,Z=ct,i.width=Math.floor(D*ct),i.height=Math.floor(K*ct),this.setViewport(0,0,D,K)},this.getCurrentViewport=function(D){return D.copy(j)},this.getViewport=function(D){return D.copy(nt)},this.setViewport=function(D,K,ct,rt){D.isVector4?nt.set(D.x,D.y,D.z,D.w):nt.set(D,K,ct,rt),Yt.viewport(j.copy(nt).multiplyScalar(Z).round())},this.getScissor=function(D){return D.copy(St)},this.setScissor=function(D,K,ct,rt){D.isVector4?St.set(D.x,D.y,D.z,D.w):St.set(D,K,ct,rt),Yt.scissor(at.copy(St).multiplyScalar(Z).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(D){Yt.setScissorTest(Tt=D)},this.setOpaqueSort=function(D){bt=D},this.setTransparentSort=function(D){L=D},this.getClearColor=function(D){return D.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(D=!0,K=!0,ct=!0){let rt=0;if(D){let $=!1;if(q!==null){const At=q.texture.format;$=At===Xd||At===jd||At===kd}if($){const At=q.texture.type,It=At===da||At===Js||At===ml||At===gl||At===Hd||At===Gd,Nt=Jt.getClearColor(),Xt=Jt.getClearAlpha(),Vt=Nt.r,$t=Nt.g,Zt=Nt.b;It?(b[0]=Vt,b[1]=$t,b[2]=Zt,b[3]=Xt,k.clearBufferuiv(k.COLOR,0,b)):(R[0]=Vt,R[1]=$t,R[2]=Zt,R[3]=Xt,k.clearBufferiv(k.COLOR,0,R))}else rt|=k.COLOR_BUFFER_BIT}K&&(rt|=k.DEPTH_BUFFER_BIT),ct&&(rt|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",vt,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",zt,!1),Jt.dispose(),jt.dispose(),Qt.dispose(),ht.dispose(),T.dispose(),Y.dispose(),z.dispose(),we.dispose(),X.dispose(),Ut.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",gn),dt.removeEventListener("sessionend",Sn),Xn.stop()};function vt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const D=De.autoReset,K=Bt.enabled,ct=Bt.autoUpdate,rt=Bt.needsUpdate,$=Bt.type;Pt(),De.autoReset=D,Bt.enabled=K,Bt.autoUpdate=ct,Bt.needsUpdate=rt,Bt.type=$}function zt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function le(D){const K=D.target;K.removeEventListener("dispose",le),Ne(K)}function Ne(D){$e(D),ht.remove(D)}function $e(D){const K=ht.get(D).programs;K!==void 0&&(K.forEach(function(ct){Ut.releaseProgram(ct)}),D.isShaderMaterial&&Ut.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,ct,rt,$,At){K===null&&(K=he);const It=$.isMesh&&$.matrixWorld.determinant()<0,Nt=_a(D,K,ct,rt,$);Yt.setMaterial(rt,It);let Xt=ct.index,Vt=1;if(rt.wireframe===!0){if(Xt=Et.getWireframeAttribute(ct),Xt===void 0)return;Vt=2}const $t=ct.drawRange,Zt=ct.attributes.position;let ve=$t.start*Vt,Te=($t.start+$t.count)*Vt;At!==null&&(ve=Math.max(ve,At.start*Vt),Te=Math.min(Te,(At.start+At.count)*Vt)),Xt!==null?(ve=Math.max(ve,0),Te=Math.min(Te,Xt.count)):Zt!=null&&(ve=Math.max(ve,0),Te=Math.min(Te,Zt.count));const an=Te-ve;if(an<0||an===1/0)return;we.setup($,rt,Nt,ct,Xt);let ye,Se=Ht;if(Xt!==null&&(ye=pt.get(Xt),Se=oe,Se.setIndex(ye)),$.isMesh)rt.wireframe===!0?(Yt.setLineWidth(rt.wireframeLinewidth*ie()),Se.setMode(k.LINES)):Se.setMode(k.TRIANGLES);else if($.isLine){let ee=rt.linewidth;ee===void 0&&(ee=1),Yt.setLineWidth(ee*ie()),$.isLineSegments?Se.setMode(k.LINES):$.isLineLoop?Se.setMode(k.LINE_LOOP):Se.setMode(k.LINE_STRIP)}else $.isPoints?Se.setMode(k.POINTS):$.isSprite&&Se.setMode(k.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)au("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Se.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))Se.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const ee=$._multiDrawStarts,sn=$._multiDrawCounts,Me=$._multiDrawCount,Mn=Xt?pt.get(Xt).bytesPerElement:1,Pn=ht.get(rt).currentProgram.getUniforms();for(let Le=0;Le<Me;Le++)Pn.setValue(k,"_gl_DrawID",Le),Se.render(ee[Le]/Mn,sn[Le])}else if($.isInstancedMesh)Se.renderInstances(ve,an,$.count);else if(ct.isInstancedBufferGeometry){const ee=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,sn=Math.min(ct.instanceCount,ee);Se.renderInstances(ve,an,sn)}else Se.render(ve,an)};function Ue(D,K,ct){D.transparent===!0&&D.side===ca&&D.forceSinglePass===!1?(D.side=ci,D.needsUpdate=!0,fi(D,K,ct),D.side=Ha,D.needsUpdate=!0,fi(D,K,ct),D.side=ca):fi(D,K,ct)}this.compile=function(D,K,ct=null){ct===null&&(ct=D),g=Qt.get(ct),g.init(K),P.push(g),ct.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),D!==ct&&D.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),g.setupLights();const rt=new Set;return D.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const At=$.material;if(At)if(Array.isArray(At))for(let It=0;It<At.length;It++){const Nt=At[It];Ue(Nt,ct,$),rt.add(Nt)}else Ue(At,ct,$),rt.add(At)}),g=P.pop(),rt},this.compileAsync=function(D,K,ct=null){const rt=this.compile(D,K,ct);return new Promise($=>{function At(){if(rt.forEach(function(It){ht.get(It).currentProgram.isReady()&&rt.delete(It)}),rt.size===0){$(D);return}setTimeout(At,10)}pe.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let jn=null;function mn(D){jn&&jn(D)}function gn(){Xn.stop()}function Sn(){Xn.start()}const Xn=new Ev;Xn.setAnimationLoop(mn),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(D){jn=D,dt.setAnimationLoop(D),D===null?Xn.stop():Xn.start()},dt.addEventListener("sessionstart",gn),dt.addEventListener("sessionend",Sn),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(K),K=dt.getCamera()),D.isScene===!0&&D.onBeforeRender(U,D,K,q),g=Qt.get(D,P.length),g.init(K),P.push(g),Lt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),tt.setFromProjectionMatrix(Lt),xt=this.localClippingEnabled,gt=Ct.init(this.clippingPlanes,xt),v=jt.get(D,I.length),v.init(),I.push(v),dt.enabled===!0&&dt.isPresenting===!0){const At=U.xr.getDepthSensingMesh();At!==null&&Ei(At,K,-1/0,U.sortObjects)}Ei(D,K,0,U.sortObjects),v.finish(),U.sortObjects===!0&&v.sort(bt,L),ze=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,ze&&Jt.addToRenderList(v,D),this.info.render.frame++,gt===!0&&Ct.beginShadows();const ct=g.state.shadowsArray;Bt.render(ct,D,K),gt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=v.opaque,$=v.transmissive;if(g.setupLights(),K.isArrayCamera){const At=K.cameras;if($.length>0)for(let It=0,Nt=At.length;It<Nt;It++){const Xt=At[It];ga(rt,$,D,Xt)}ze&&Jt.render(D);for(let It=0,Nt=At.length;It<Nt;It++){const Xt=At[It];ma(v,D,Xt,Xt.viewport)}}else $.length>0&&ga(rt,$,D,K),ze&&Jt.render(D),ma(v,D,K);q!==null&&H===0&&(w.updateMultisampleRenderTarget(q),w.updateRenderTargetMipmap(q)),D.isScene===!0&&D.onAfterRender(U,D,K),we.resetDefaultState(),N=-1,C=null,P.pop(),P.length>0?(g=P[P.length-1],gt===!0&&Ct.setGlobalState(U.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?v=I[I.length-1]:v=null};function Ei(D,K,ct,rt){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)ct=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)g.pushLight(D),D.castShadow&&g.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||tt.intersectsSprite(D)){rt&&Kt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Lt);const It=z.update(D),Nt=D.material;Nt.visible&&v.push(D,It,Nt,ct,Kt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||tt.intersectsObject(D))){const It=z.update(D),Nt=D.material;if(rt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Kt.copy(D.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Kt.copy(It.boundingSphere.center)),Kt.applyMatrix4(D.matrixWorld).applyMatrix4(Lt)),Array.isArray(Nt)){const Xt=It.groups;for(let Vt=0,$t=Xt.length;Vt<$t;Vt++){const Zt=Xt[Vt],ve=Nt[Zt.materialIndex];ve&&ve.visible&&v.push(D,It,ve,ct,Kt.z,Zt)}}else Nt.visible&&v.push(D,It,Nt,ct,Kt.z,null)}}const At=D.children;for(let It=0,Nt=At.length;It<Nt;It++)Ei(At[It],K,ct,rt)}function ma(D,K,ct,rt){const $=D.opaque,At=D.transmissive,It=D.transparent;g.setupLightsView(ct),gt===!0&&Ct.setGlobalState(U.clippingPlanes,ct),rt&&Yt.viewport(j.copy(rt)),$.length>0&&ui($,K,ct),At.length>0&&ui(At,K,ct),It.length>0&&ui(It,K,ct),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function ga(D,K,ct,rt){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[rt.id]===void 0&&(g.state.transmissionRenderTarget[rt.id]=new $s(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?yl:da,minFilter:Qs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Be.workingColorSpace}));const At=g.state.transmissionRenderTarget[rt.id],It=rt.viewport||j;At.setSize(It.z*U.transmissionResolutionScale,It.w*U.transmissionResolutionScale);const Nt=U.getRenderTarget();U.setRenderTarget(At),U.getClearColor(ft),mt=U.getClearAlpha(),mt<1&&U.setClearColor(16777215,.5),U.clear(),ze&&Jt.render(ct);const Xt=U.toneMapping;U.toneMapping=Ms;const Vt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),g.setupLightsView(rt),gt===!0&&Ct.setGlobalState(U.clippingPlanes,rt),ui(D,ct,rt),w.updateMultisampleRenderTarget(At),w.updateRenderTargetMipmap(At),pe.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Zt=0,ve=K.length;Zt<ve;Zt++){const Te=K[Zt],an=Te.object,ye=Te.geometry,Se=Te.material,ee=Te.group;if(Se.side===ca&&an.layers.test(rt.layers)){const sn=Se.side;Se.side=ci,Se.needsUpdate=!0,ta(an,ct,rt,ye,Se,ee),Se.side=sn,Se.needsUpdate=!0,$t=!0}}$t===!0&&(w.updateMultisampleRenderTarget(At),w.updateRenderTargetMipmap(At))}U.setRenderTarget(Nt),U.setClearColor(ft,mt),Vt!==void 0&&(rt.viewport=Vt),U.toneMapping=Xt}function ui(D,K,ct){const rt=K.isScene===!0?K.overrideMaterial:null;for(let $=0,At=D.length;$<At;$++){const It=D[$],Nt=It.object,Xt=It.geometry,Vt=It.group;let $t=It.material;$t.allowOverride===!0&&rt!==null&&($t=rt),Nt.layers.test(ct.layers)&&ta(Nt,K,ct,Xt,$t,Vt)}}function ta(D,K,ct,rt,$,At){D.onBeforeRender(U,K,ct,rt,$,At),D.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),$.onBeforeRender(U,K,ct,rt,D,At),$.transparent===!0&&$.side===ca&&$.forceSinglePass===!1?($.side=ci,$.needsUpdate=!0,U.renderBufferDirect(ct,K,rt,$,D,At),$.side=Ha,$.needsUpdate=!0,U.renderBufferDirect(ct,K,rt,$,D,At),$.side=ca):U.renderBufferDirect(ct,K,rt,$,D,At),D.onAfterRender(U,K,ct,rt,$,At)}function fi(D,K,ct){K.isScene!==!0&&(K=he);const rt=ht.get(D),$=g.state.lights,At=g.state.shadowsArray,It=$.state.version,Nt=Ut.getParameters(D,$.state,At,K,ct),Xt=Ut.getProgramCacheKey(Nt);let Vt=rt.programs;rt.environment=D.isMeshStandardMaterial?K.environment:null,rt.fog=K.fog,rt.envMap=(D.isMeshStandardMaterial?Y:T).get(D.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&D.envMap===null?K.environmentRotation:D.envMapRotation,Vt===void 0&&(D.addEventListener("dispose",le),Vt=new Map,rt.programs=Vt);let $t=Vt.get(Xt);if($t!==void 0){if(rt.currentProgram===$t&&rt.lightsStateVersion===It)return ni(D,Nt),$t}else Nt.uniforms=Ut.getUniforms(D),D.onBeforeCompile(Nt,U),$t=Ut.acquireProgram(Nt,Xt),Vt.set(Xt,$t),rt.uniforms=Nt.uniforms;const Zt=rt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Zt.clippingPlanes=Ct.uniform),ni(D,Nt),rt.needsLights=un(D),rt.lightsStateVersion=It,rt.needsLights&&(Zt.ambientLightColor.value=$.state.ambient,Zt.lightProbe.value=$.state.probe,Zt.directionalLights.value=$.state.directional,Zt.directionalLightShadows.value=$.state.directionalShadow,Zt.spotLights.value=$.state.spot,Zt.spotLightShadows.value=$.state.spotShadow,Zt.rectAreaLights.value=$.state.rectArea,Zt.ltc_1.value=$.state.rectAreaLTC1,Zt.ltc_2.value=$.state.rectAreaLTC2,Zt.pointLights.value=$.state.point,Zt.pointLightShadows.value=$.state.pointShadow,Zt.hemisphereLights.value=$.state.hemi,Zt.directionalShadowMap.value=$.state.directionalShadowMap,Zt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Zt.spotShadowMap.value=$.state.spotShadowMap,Zt.spotLightMatrix.value=$.state.spotLightMatrix,Zt.spotLightMap.value=$.state.spotLightMap,Zt.pointShadowMap.value=$.state.pointShadowMap,Zt.pointShadowMatrix.value=$.state.pointShadowMatrix),rt.currentProgram=$t,rt.uniformsList=null,$t}function hi(D){if(D.uniformsList===null){const K=D.currentProgram.getUniforms();D.uniformsList=su.seqWithValue(K.seq,D.uniforms)}return D.uniformsList}function ni(D,K){const ct=ht.get(D);ct.outputColorSpace=K.outputColorSpace,ct.batching=K.batching,ct.batchingColor=K.batchingColor,ct.instancing=K.instancing,ct.instancingColor=K.instancingColor,ct.instancingMorph=K.instancingMorph,ct.skinning=K.skinning,ct.morphTargets=K.morphTargets,ct.morphNormals=K.morphNormals,ct.morphColors=K.morphColors,ct.morphTargetsCount=K.morphTargetsCount,ct.numClippingPlanes=K.numClippingPlanes,ct.numIntersection=K.numClipIntersection,ct.vertexAlphas=K.vertexAlphas,ct.vertexTangents=K.vertexTangents,ct.toneMapping=K.toneMapping}function _a(D,K,ct,rt,$){K.isScene!==!0&&(K=he),w.resetTextureUnits();const At=K.fog,It=rt.isMeshStandardMaterial?K.environment:null,Nt=q===null?U.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ao,Xt=(rt.isMeshStandardMaterial?Y:T).get(rt.envMap||It),Vt=rt.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,$t=!!ct.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Zt=!!ct.morphAttributes.position,ve=!!ct.morphAttributes.normal,Te=!!ct.morphAttributes.color;let an=Ms;rt.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(an=U.toneMapping);const ye=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Se=ye!==void 0?ye.length:0,ee=ht.get(rt),sn=g.state.lights;if(gt===!0&&(xt===!0||D!==C)){const _n=D===C&&rt.id===N;Ct.setState(rt,D,_n)}let Me=!1;rt.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==sn.state.version||ee.outputColorSpace!==Nt||$.isBatchedMesh&&ee.batching===!1||!$.isBatchedMesh&&ee.batching===!0||$.isBatchedMesh&&ee.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ee.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ee.instancing===!1||!$.isInstancedMesh&&ee.instancing===!0||$.isSkinnedMesh&&ee.skinning===!1||!$.isSkinnedMesh&&ee.skinning===!0||$.isInstancedMesh&&ee.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ee.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ee.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ee.instancingMorph===!1&&$.morphTexture!==null||ee.envMap!==Xt||rt.fog===!0&&ee.fog!==At||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==Ct.numPlanes||ee.numIntersection!==Ct.numIntersection)||ee.vertexAlphas!==Vt||ee.vertexTangents!==$t||ee.morphTargets!==Zt||ee.morphNormals!==ve||ee.morphColors!==Te||ee.toneMapping!==an||ee.morphTargetsCount!==Se)&&(Me=!0):(Me=!0,ee.__version=rt.version);let Mn=ee.currentProgram;Me===!0&&(Mn=fi(rt,K,$));let Pn=!1,Le=!1,Ti=!1;const Ge=Mn.getUniforms(),An=ee.uniforms;if(Yt.useProgram(Mn.program)&&(Pn=!0,Le=!0,Ti=!0),rt.id!==N&&(N=rt.id,Le=!0),Pn||C!==D){Yt.buffers.depth.getReversed()?(Dt.copy(D.projectionMatrix),DM(Dt),UM(Dt),Ge.setValue(k,"projectionMatrix",Dt)):Ge.setValue(k,"projectionMatrix",D.projectionMatrix),Ge.setValue(k,"viewMatrix",D.matrixWorldInverse);const Rn=Ge.map.cameraPosition;Rn!==void 0&&Rn.setValue(k,ue.setFromMatrixPosition(D.matrixWorld)),ne.logarithmicDepthBuffer&&Ge.setValue(k,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ge.setValue(k,"isOrthographic",D.isOrthographicCamera===!0),C!==D&&(C=D,Le=!0,Ti=!0)}if($.isSkinnedMesh){Ge.setOptional(k,$,"bindMatrix"),Ge.setOptional(k,$,"bindMatrixInverse");const _n=$.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Ge.setValue(k,"boneTexture",_n.boneTexture,w))}$.isBatchedMesh&&(Ge.setOptional(k,$,"batchingTexture"),Ge.setValue(k,"batchingTexture",$._matricesTexture,w),Ge.setOptional(k,$,"batchingIdTexture"),Ge.setValue(k,"batchingIdTexture",$._indirectTexture,w),Ge.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&Ge.setValue(k,"batchingColorTexture",$._colorsTexture,w));const rn=ct.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&qt.update($,ct,Mn),(Le||ee.receiveShadow!==$.receiveShadow)&&(ee.receiveShadow=$.receiveShadow,Ge.setValue(k,"receiveShadow",$.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(An.envMap.value=Xt,An.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&K.environment!==null&&(An.envMapIntensity.value=K.environmentIntensity),Le&&(Ge.setValue(k,"toneMappingExposure",U.toneMappingExposure),ee.needsLights&&Hi(An,Ti),At&&rt.fog===!0&&Rt.refreshFogUniforms(An,At),Rt.refreshMaterialUniforms(An,rt,Z,Q,g.state.transmissionRenderTarget[D.id]),su.upload(k,hi(ee),An,w)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(su.upload(k,hi(ee),An,w),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ge.setValue(k,"center",$.center),Ge.setValue(k,"modelViewMatrix",$.modelViewMatrix),Ge.setValue(k,"normalMatrix",$.normalMatrix),Ge.setValue(k,"modelMatrix",$.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const _n=rt.uniformsGroups;for(let Rn=0,Ai=_n.length;Rn<Ai;Rn++){const Ri=_n[Rn];X.update(Ri,Mn),X.bind(Ri,Mn)}}return Mn}function Hi(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function un(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(D,K,ct){const rt=ht.get(D);rt.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),ht.get(D.texture).__webglTexture=K,ht.get(D.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ct,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,K){const ct=ht.get(D);ct.__webglFramebuffer=K,ct.__useDefaultFramebuffer=K===void 0};const Ga=k.createFramebuffer();this.setRenderTarget=function(D,K=0,ct=0){q=D,F=K,H=ct;let rt=!0,$=null,At=!1,It=!1;if(D){const Xt=ht.get(D);if(Xt.__useDefaultFramebuffer!==void 0)Yt.bindFramebuffer(k.FRAMEBUFFER,null),rt=!1;else if(Xt.__webglFramebuffer===void 0)w.setupRenderTarget(D);else if(Xt.__hasExternalTextures)w.rebindTextures(D,ht.get(D.texture).__webglTexture,ht.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Zt=D.depthTexture;if(Xt.__boundDepthTexture!==Zt){if(Zt!==null&&ht.has(Zt)&&(D.width!==Zt.image.width||D.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(D)}}const Vt=D.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(It=!0);const $t=ht.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray($t[K])?$=$t[K][ct]:$=$t[K],At=!0):D.samples>0&&w.useMultisampledRTT(D)===!1?$=ht.get(D).__webglMultisampledFramebuffer:Array.isArray($t)?$=$t[ct]:$=$t,j.copy(D.viewport),at.copy(D.scissor),ot=D.scissorTest}else j.copy(nt).multiplyScalar(Z).floor(),at.copy(St).multiplyScalar(Z).floor(),ot=Tt;if(ct!==0&&($=Ga),Yt.bindFramebuffer(k.FRAMEBUFFER,$)&&rt&&Yt.drawBuffers(D,$),Yt.viewport(j),Yt.scissor(at),Yt.setScissorTest(ot),At){const Xt=ht.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+K,Xt.__webglTexture,ct)}else if(It){const Xt=ht.get(D.texture),Vt=K;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xt.__webglTexture,ct,Vt)}else if(D!==null&&ct!==0){const Xt=ht.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Xt.__webglTexture,ct)}N=-1},this.readRenderTargetPixels=function(D,K,ct,rt,$,At,It){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=ht.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&It!==void 0&&(Nt=Nt[It]),Nt){Yt.bindFramebuffer(k.FRAMEBUFFER,Nt);try{const Xt=D.texture,Vt=Xt.format,$t=Xt.type;if(!ne.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-rt&&ct>=0&&ct<=D.height-$&&k.readPixels(K,ct,rt,$,ae.convert(Vt),ae.convert($t),At)}finally{const Xt=q!==null?ht.get(q).__webglFramebuffer:null;Yt.bindFramebuffer(k.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(D,K,ct,rt,$,At,It){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=ht.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&It!==void 0&&(Nt=Nt[It]),Nt)if(K>=0&&K<=D.width-rt&&ct>=0&&ct<=D.height-$){Yt.bindFramebuffer(k.FRAMEBUFFER,Nt);const Xt=D.texture,Vt=Xt.format,$t=Xt.type;if(!ne.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Zt),k.bufferData(k.PIXEL_PACK_BUFFER,At.byteLength,k.STREAM_READ),k.readPixels(K,ct,rt,$,ae.convert(Vt),ae.convert($t),0);const ve=q!==null?ht.get(q).__webglFramebuffer:null;Yt.bindFramebuffer(k.FRAMEBUFFER,ve);const Te=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await wM(k,Te,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Zt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,At),k.deleteBuffer(Zt),k.deleteSync(Te),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,K=null,ct=0){const rt=Math.pow(2,-ct),$=Math.floor(D.image.width*rt),At=Math.floor(D.image.height*rt),It=K!==null?K.x:0,Nt=K!==null?K.y:0;w.setTexture2D(D,0),k.copyTexSubImage2D(k.TEXTURE_2D,ct,0,0,It,Nt,$,At),Yt.unbindTexture()};const bs=k.createFramebuffer(),bi=k.createFramebuffer();this.copyTextureToTexture=function(D,K,ct=null,rt=null,$=0,At=null){At===null&&($!==0?(au("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=$,$=0):At=0);let It,Nt,Xt,Vt,$t,Zt,ve,Te,an;const ye=D.isCompressedTexture?D.mipmaps[At]:D.image;if(ct!==null)It=ct.max.x-ct.min.x,Nt=ct.max.y-ct.min.y,Xt=ct.isBox3?ct.max.z-ct.min.z:1,Vt=ct.min.x,$t=ct.min.y,Zt=ct.isBox3?ct.min.z:0;else{const rn=Math.pow(2,-$);It=Math.floor(ye.width*rn),Nt=Math.floor(ye.height*rn),D.isDataArrayTexture?Xt=ye.depth:D.isData3DTexture?Xt=Math.floor(ye.depth*rn):Xt=1,Vt=0,$t=0,Zt=0}rt!==null?(ve=rt.x,Te=rt.y,an=rt.z):(ve=0,Te=0,an=0);const Se=ae.convert(K.format),ee=ae.convert(K.type);let sn;K.isData3DTexture?(w.setTexture3D(K,0),sn=k.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(w.setTexture2DArray(K,0),sn=k.TEXTURE_2D_ARRAY):(w.setTexture2D(K,0),sn=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,K.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,K.unpackAlignment);const Me=k.getParameter(k.UNPACK_ROW_LENGTH),Mn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Pn=k.getParameter(k.UNPACK_SKIP_PIXELS),Le=k.getParameter(k.UNPACK_SKIP_ROWS),Ti=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ye.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ye.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Vt),k.pixelStorei(k.UNPACK_SKIP_ROWS,$t),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Zt);const Ge=D.isDataArrayTexture||D.isData3DTexture,An=K.isDataArrayTexture||K.isData3DTexture;if(D.isDepthTexture){const rn=ht.get(D),_n=ht.get(K),Rn=ht.get(rn.__renderTarget),Ai=ht.get(_n.__renderTarget);Yt.bindFramebuffer(k.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Ri=0;Ri<Xt;Ri++)Ge&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ht.get(D).__webglTexture,$,Zt+Ri),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ht.get(K).__webglTexture,At,an+Ri)),k.blitFramebuffer(Vt,$t,It,Nt,ve,Te,It,Nt,k.DEPTH_BUFFER_BIT,k.NEAREST);Yt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||D.isRenderTargetTexture||ht.has(D)){const rn=ht.get(D),_n=ht.get(K);Yt.bindFramebuffer(k.READ_FRAMEBUFFER,bs),Yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,bi);for(let Rn=0;Rn<Xt;Rn++)Ge?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,rn.__webglTexture,$,Zt+Rn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,rn.__webglTexture,$),An?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,_n.__webglTexture,At,an+Rn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,_n.__webglTexture,At),$!==0?k.blitFramebuffer(Vt,$t,It,Nt,ve,Te,It,Nt,k.COLOR_BUFFER_BIT,k.NEAREST):An?k.copyTexSubImage3D(sn,At,ve,Te,an+Rn,Vt,$t,It,Nt):k.copyTexSubImage2D(sn,At,ve,Te,Vt,$t,It,Nt);Yt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else An?D.isDataTexture||D.isData3DTexture?k.texSubImage3D(sn,At,ve,Te,an,It,Nt,Xt,Se,ee,ye.data):K.isCompressedArrayTexture?k.compressedTexSubImage3D(sn,At,ve,Te,an,It,Nt,Xt,Se,ye.data):k.texSubImage3D(sn,At,ve,Te,an,It,Nt,Xt,Se,ee,ye):D.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,At,ve,Te,It,Nt,Se,ee,ye.data):D.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,At,ve,Te,ye.width,ye.height,Se,ye.data):k.texSubImage2D(k.TEXTURE_2D,At,ve,Te,It,Nt,Se,ee,ye);k.pixelStorei(k.UNPACK_ROW_LENGTH,Me),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Pn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Le),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ti),At===0&&K.generateMipmaps&&k.generateMipmap(sn),Yt.unbindTexture()},this.copyTextureToTexture3D=function(D,K,ct=null,rt=null,$=0){return au('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,K,ct,rt,$)},this.initRenderTarget=function(D){ht.get(D).__webglFramebuffer===void 0&&w.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?w.setTextureCube(D,0):D.isData3DTexture?w.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?w.setTexture2DArray(D,0):w.setTexture2D(D,0),Yt.unbindTexture()},this.resetState=function(){F=0,H=0,q=null,Yt.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Be._getDrawingBufferColorSpace(t),i.unpackColorSpace=Be._getUnpackColorSpace()}}const k_={type:"change"},ep={type:"start"},Cv={type:"end"},Yc=new Wd,j_=new vs,e2=Math.cos(70*RM.DEG2RAD),Dn=new et,oi=2*Math.PI,Qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wh=1e-6;class n2 extends _1{constructor(t,i=null){super(t,i),this.state=Qe.NONE,this.target=new et,this.cursor=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ba.ROTATE,MIDDLE:Ba.DOLLY,RIGHT:Ba.PAN},this.touches={ONE:ys.ROTATE,TWO:ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new et,this._lastQuaternion=new tr,this._lastTargetPosition=new et,this._quat=new tr().setFromUnitVectors(t.up,new et(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new __,this._sphericalDelta=new __,this._scale=1,this._panOffset=new et,this._rotateStart=new fe,this._rotateEnd=new fe,this._rotateDelta=new fe,this._panStart=new fe,this._panEnd=new fe,this._panDelta=new fe,this._dollyStart=new fe,this._dollyEnd=new fe,this._dollyDelta=new fe,this._dollyDirection=new et,this._mouse=new fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=a2.bind(this),this._onPointerDown=i2.bind(this),this._onPointerUp=s2.bind(this),this._onContextMenu=h2.bind(this),this._onMouseWheel=l2.bind(this),this._onKeyDown=c2.bind(this),this._onTouchStart=u2.bind(this),this._onTouchMove=f2.bind(this),this._onMouseDown=r2.bind(this),this._onMouseMove=o2.bind(this),this._interceptControlDown=d2.bind(this),this._interceptControlUp=p2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(k_),this.update(),this.state=Qe.NONE}update(t=null){const i=this.object.position;Dn.copy(i).sub(this.target),Dn.applyQuaternion(this._quat),this._spherical.setFromVector3(Dn),this.autoRotate&&this.state===Qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=oi:s>Math.PI&&(s-=oi),l<-Math.PI?l+=oi:l>Math.PI&&(l-=oi),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(Dn.setFromSpherical(this._spherical),Dn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=Dn.length();h=this._clampDistance(d*this._scale);const p=d-h;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const d=new et(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const m=new et(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),h=Dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Yc.origin.copy(this.object.position),Yc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yc.direction))<e2?this.object.lookAt(this.target):(j_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yc.intersectPlane(j_,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Wh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wh||this._lastTargetPosition.distanceToSquared(this.target)>Wh?(this.dispatchEvent(k_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?oi/60*this.autoRotateSpeed*t:oi/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Dn.setFromMatrixColumn(i,0),Dn.multiplyScalar(-t),this._panOffset.add(Dn)}_panUp(t,i){this.screenSpacePanning===!0?Dn.setFromMatrixColumn(i,1):(Dn.setFromMatrixColumn(i,0),Dn.crossVectors(this.object.up,Dn)),Dn.multiplyScalar(t),this._panOffset.add(Dn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Dn.copy(l).sub(this.target);let c=Dn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(oi*this._rotateDelta.x/i.clientHeight),this._rotateUp(oi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(oi*this._rotateDelta.x/i.clientHeight),this._rotateUp(oi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new fe,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function i2(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function a2(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function s2(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cv),this.state=Qe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function r2(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ba.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Qe.DOLLY;break;case Ba.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Qe.ROTATE}break;case Ba.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Qe.PAN}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(ep)}function o2(r){switch(this.state){case Qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function l2(r){this.enabled===!1||this.enableZoom===!1||this.state!==Qe.NONE||(r.preventDefault(),this.dispatchEvent(ep),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Cv))}function c2(r){this.enabled!==!1&&this._handleKeyDown(r)}function u2(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Qe.TOUCH_ROTATE;break;case ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Qe.TOUCH_PAN;break;default:this.state=Qe.NONE}break;case 2:switch(this.touches.TWO){case ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Qe.TOUCH_DOLLY_PAN;break;case ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Qe.TOUCH_DOLLY_ROTATE;break;default:this.state=Qe.NONE}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(ep)}function f2(r){switch(this._trackPointer(r),this.state){case Qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Qe.NONE}}function h2(r){this.enabled!==!1&&r.preventDefault()}function d2(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function p2(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const dl=new et;function Fi(r,t,i,s,l,c){const h=2*Math.PI*l/4,d=Math.max(c-2*l,0),p=Math.PI/4;dl.copy(t),dl[s]=0,dl.normalize();const m=.5*h/(h+d),_=1-dl.angleTo(r)/p;return Math.sign(dl[i])===1?_*m:d/(h+d)+m+m*(1-_)}class m2 extends ha{constructor(t=1,i=1,s=1,l=2,c=.1){if(l=l*2+1,c=Math.min(t/2,i/2,s/2,c),super(1,1,1,l,l,l),l===1)return;const h=this.toNonIndexed();this.index=null,this.attributes.position=h.attributes.position,this.attributes.normal=h.attributes.normal,this.attributes.uv=h.attributes.uv;const d=new et,p=new et,m=new et(t,i,s).divideScalar(2).subScalar(c),_=this.attributes.position.array,x=this.attributes.normal.array,y=this.attributes.uv.array,S=_.length/6,b=new et,R=.5/l;for(let v=0,g=0;v<_.length;v+=3,g+=2)switch(d.fromArray(_,v),p.copy(d),p.x-=Math.sign(p.x)*R,p.y-=Math.sign(p.y)*R,p.z-=Math.sign(p.z)*R,p.normalize(),_[v+0]=m.x*Math.sign(d.x)+p.x*c,_[v+1]=m.y*Math.sign(d.y)+p.y*c,_[v+2]=m.z*Math.sign(d.z)+p.z*c,x[v+0]=p.x,x[v+1]=p.y,x[v+2]=p.z,Math.floor(v/S)){case 0:b.set(1,0,0),y[g+0]=Fi(b,p,"z","y",c,s),y[g+1]=1-Fi(b,p,"y","z",c,i);break;case 1:b.set(-1,0,0),y[g+0]=1-Fi(b,p,"z","y",c,s),y[g+1]=1-Fi(b,p,"y","z",c,i);break;case 2:b.set(0,1,0),y[g+0]=1-Fi(b,p,"x","z",c,t),y[g+1]=Fi(b,p,"z","x",c,s);break;case 3:b.set(0,-1,0),y[g+0]=1-Fi(b,p,"x","z",c,t),y[g+1]=1-Fi(b,p,"z","x",c,s);break;case 4:b.set(0,0,1),y[g+0]=1-Fi(b,p,"x","y",c,t),y[g+1]=1-Fi(b,p,"y","x",c,i);break;case 5:b.set(0,0,-1),y[g+0]=Fi(b,p,"x","y",c,t),y[g+1]=1-Fi(b,p,"y","x",c,i);break}}}const wv=[[4.5,3],[10.5,3],[4.5,8],[10.5,8],[18.5,3],[18.5,14]],g2=[[4,4],[10,4],[4,9],[10,9],[18,4],[18,15]],_2=[[2,14],[4,14],[6,14],[8,14],[10,14],[11,16]],Dv=[[1.5,1.5],[13.5,1.5],[1.5,10.5],[21.5,6.5],[13.5,18.5],[21.5,18.5]],Uv=2.5;function v2(r){r.blockRect(0,0,24,1),r.blockRect(0,0,1,20),r.blockRect(0,12,13,1);for(const[t,i]of wv)r.blockRect(t-1.85,i-.825,3.7,1.65),r.blockRect(t-.5,i+Uv-.5,1,1);r.blockRect(3,15,7,3);for(const t of[4.2,6.5,8.8])r.blockRect(t-.5,18.2,1,1.3);r.blockRect(17,8,4,2),r.blockRect(18,10,2,1),r.blockRect(22,13,2,4);for(const[t,i]of Dv)r.blockRect(t-.5,i-.5,1,1);return r}class x2{constructor(){Ii(this,"geometries",new Map);Ii(this,"materials",new Map);Ii(this,"textures",[])}material(t,i=.38,s=.03){const l=`${t}:${i}:${s}`;return this.materials.has(l)||this.materials.set(l,new Jd({color:t,roughness:i,metalness:s})),this.materials.get(l)}geometry(t,i){return this.geometries.has(t)||this.geometries.set(t,i()),this.geometries.get(t)}box(t,i,s,l,c,h,d,p,m=.06){const _=this.geometry(`box:${i}:${s}:${l}:${m}`,()=>m?new m2(i,s,l,2,Math.min(m,i/4,s/4,l/4)):new ha(i,s,l)),x=new en(_,this.material(p));return x.position.set(c,h,d),x.castShadow=!0,x.receiveShadow=!0,t.add(x),x}cylinder(t,i,s,l,c,h,d,p){const m=this.geometry(`cyl:${i}:${s}:${l}`,()=>new Kd(i,s,l,20)),_=new en(m,this.material(p,.29));return _.position.set(c,h,d),_.castShadow=!0,_.receiveShadow=!0,t.add(_),_}sphere(t,i,s,l,c,h){const d=this.geometry(`sphere:${i}`,()=>new uu(i,16,12)),p=new en(d,this.material(h));return p.position.set(s,l,c),p.castShadow=!0,t.add(p),p}dispose(){for(const t of this.geometries.values())t.dispose();for(const t of this.materials.values())t.dispose();for(const t of this.textures)t.dispose()}}function y2(r,t,i){const s=document.createElement("canvas");s.width=256,s.height=160;const l=s.getContext("2d");if(l.fillStyle="#24283c",l.fillRect(0,0,256,160),l.fillStyle="#3e4159",l.fillRect(0,0,256,17),l.fillStyle=i,l.fillRect(12,6,5,5),l.fillStyle="#8390a9",l.fillRect(24,6,68,4),t==="iris")for(let h=0;h<5;h++)l.fillStyle=["#9d88d8","#83bbaa","#d9a3be"][h%3],l.fillRect(28+h*41,136-[39,70,58,94,85][h],26,[39,70,58,94,85][h]);else for(let h=0;h<7;h++)l.fillStyle=h%3===0?i:"#8490a7",l.globalAlpha=.8,l.fillRect(17,31+h*15,70+h*31%143,4),l.globalAlpha=1;const c=new yv(s);return c.colorSpace=ei,r.textures.push(c),c}function S2(r,t,i){v2(i);const s=t.box(r,24.7,.42,20.7,12,-.26,10,"#c7b29d",.14);t.box(r,24.2,.1,20.2,12,-.005,10,"#f0ddc4",.04).userData.walkable=!0;const l=t.geometry("plank",()=>new ha(1.98,.035,.98)),c=new s1(l,t.material("#ecd4b5",.62),240);let h=0;const d=new Hn,p=["#efddc6","#ecd5b9","#e5caa8","#f5e3ca","#e8cfb0"];for(let v=0;v<20;v++)for(let g=0;g<12;g++)d.position.set(g*2+1,.061,v+.5),d.updateMatrix(),c.setMatrixAt(h,d.matrix),c.setColorAt(h,new Ce(p[(g*7+v*3)%5])),h++;c.receiveShadow=!0,c.userData.walkable=!0,r.add(c),t.box(r,12.3,.045,10.3,7.1,.1,6,"#ccb8ea",.12).userData.walkable=!0,t.box(r,7.3,.045,7.8,19.3,.1,4.6,"#d4e2d2",.12).userData.walkable=!0,t.box(r,7.3,.045,7.8,19.3,.1,15.4,"#e2d3ed",.12).userData.walkable=!0,t.box(r,24.5,3,.18,12,1.55,-.03,"#e8e3ed",.04),t.box(r,.18,3,20,-.03,1.55,10,"#eee9f0",.04);const m=new c1({color:"#b8dfe5",transparent:!0,opacity:.34,roughness:.14,metalness:.04,side:ca,depthWrite:!1}),_=t.geometry("window",()=>new ha(3.5,1.85,.035));for(let v=2.3;v<24;v+=4.6){const g=new en(_,m);g.position.set(v,1.9,.09),r.add(g),t.box(r,3.65,.1,.16,v,.94,.12,"#fafaff",.02),t.box(r,3.65,.1,.16,v,2.87,.12,"#fafaff",.02),t.box(r,.08,1.95,.12,v,1.9,.15,"#f6f8fb",.01),t.box(r,.08,1.95,.12,v-1.8,1.9,.15,"#f6f8fb",.01),t.box(r,.08,1.95,.12,v+1.8,1.9,.15,"#f6f8fb",.01)}for(let v=2.8;v<20;v+=4.6){const g=new en(_,m);g.rotation.y=Math.PI/2,g.position.set(.1,1.9,v),r.add(g),t.box(r,.16,.1,3.65,.12,.94,v,"#fafaff",.02),t.box(r,.16,.1,3.65,.12,2.87,v,"#fafaff",.02)}for(let v=1.5;v<11;v+=3){const g=new en(t.geometry("partition",()=>new ha(2.85,2.35,.045)),m);g.position.set(v,1.3,12.2),r.add(g),t.box(r,.055,2.5,.06,v-1.46,1.3,12.2,"#c8c0d2",.01),t.box(r,2.9,.05,.07,v,2.55,12.2,"#cec8d6",.01)}r.userData.extraMaterials=[m];const x=g2,y=wv,S=["anto","atlas","vera","bruno","iris","leo"],b=["#b58aee","#eeae67","#74b9a7","#799acb","#e995b9","#d7bb73"];y.forEach(([v,g],I)=>{const P=b[I];t.box(r,3.7,.15,1.65,v,1.3,g,"#f7eddf",.1);for(const H of[-1.5,1.5])for(const q of[-.58,.58])t.box(r,.12,1.2,.12,v+H,.66,g+q,"#cbbba8",.025);t.box(r,1.4,.88,.1,v,2.03,g-.28,"#454554",.055),t.box(r,.15,.25,.12,v,1.5,g-.28,"#5a5867",.025),t.box(r,.7,.05,.36,v,1.4,g-.22,"#a9a6b5",.035);const U=new en(t.geometry("display",()=>new ir(1.27,.72)),new so({map:y2(t,S[I],P)}));U.position.set(v,2.04,g-.219),r.add(U),r.userData.extraMaterials.push(U.material),t.box(r,1.08,.045,.4,v,1.408,g+.47,"#e0dbe7",.025);for(let H=0;H<3;H++)t.box(r,.92,.015,.025,v,1.436,g+.36+H*.11,"#a4a0af",.006);t.box(r,.22,.05,.35,v+.83,1.43,g+.46,"#c8c1d4",.06),t.cylinder(r,.13,.105,.26,v+1.36,1.5,g+.3,P),t.cylinder(r,.105,.105,.012,v+1.36,1.638,g+.3,"#6c5646");const G=new en(t.geometry("handle",()=>new xl(.09,.025,7,12)),t.material(P));G.position.set(v+1.5,1.51,g+.3),G.rotation.y=Math.PI/2,r.add(G),t.box(r,.45,.04,.6,v-1.25,1.43,g+.3,"#c9b5e6",.02);const F=g+Uv;t.cylinder(r,.07,.07,.65,v,.47,F,"#73707d"),t.box(r,.95,.15,.85,v,.8,F,P,.12),t.box(r,.95,.85,.15,v,1.19,F+.38,P,.12),t.box(r,1.1,.065,.12,v,.19,F,"#96909e",.03),t.box(r,.12,.065,1.1,v,.19,F,"#96909e",.03);for(const H of[-.45,.45])for(const q of[-.45,.45])t.sphere(r,.075,v+H,.12,F+q,"#625e6c")}),t.box(r,6.7,.18,2.4,6.5,1.28,16.5,"#efe1c9",.25);for(const v of[4,9])t.box(r,.2,1.2,1.8,v,.64,16.5,"#c2b39f",.03);for(const v of[4.2,6.5,8.8])t.box(r,1,.16,.8,v,.75,18.7,"#9f8db9",.12),t.box(r,1,.75,.15,v,1.1,19.05,"#a996c4",.1),t.cylinder(r,.08,.08,.65,v,.38,18.7,"#80788c");t.box(r,.9,.05,.65,5.5,1.405,16.5,"#84679f",.04),t.box(r,.65,.05,.8,7.1,1.405,16.4,"#fff8ee",.03);for(const v of[3.9,8.8])t.cylinder(r,.12,.09,.23,v,1.52,16.1,"#bca5d7");t.box(r,3.3,.5,1,19,.45,8.5,"#83ab95",.2),t.box(r,3.3,.82,.22,19,.87,8.92,"#93b59f",.16),t.box(r,.22,.67,1,17.4,.78,8.5,"#92b49d",.12),t.box(r,.22,.67,1,20.6,.78,8.5,"#92b49d",.12),t.box(r,1.6,.13,.8,19,.52,10.4,"#e2d3ba",.1);for(const v of[-.6,.6])t.box(r,.09,.48,.09,19+v,.24,10.4,"#b0a18c",.02);t.box(r,.7,2.4,3.2,22.8,1.27,14.8,"#e2d6c4",.05);for(let v=0;v<4;v++){t.box(r,.8,.07,3.2,22.8,.35+v*.57,14.8,"#cbbda9",.02);for(let g=0;g<5;g++)t.box(r,.35,.38,.16,22.7,.57+v*.57,13.5+g*.42,["#9f86bd","#cfaa8a","#8baea0","#d4b7d2"][g%4],.01)}function R(v,g,I=!1){const P=I?1.55:1;t.cylinder(r,.39,.29,.62,v,.39,g,"#eee5d9"),t.cylinder(r,.35,.35,.035,v,.72,g,"#746053");for(let U=0;U<7;U++){const G=U*2.4,F=new li;F.position.set(v,.7,g),F.rotation.y=G,r.add(F);const H=t.sphere(F,.23,0,P*.5,.18,["#669c7a","#84ad8d","#4c8267"][U%3]);H.scale.set(.58,P*1.9,1.05),H.rotation.x=.35+U%3*.22,H.position.y=P*.42}}Dv.forEach(([v,g],I)=>R(v,g,I%2===0));for(let v=1;v<24;v+=1.4)t.cylinder(r,.16,.16,.07,v,-.01,20.35,"#d5c2aa");return{floor:s,homes:x,meeting:_2}}function M2(r,t,i){const s=new li,l=new li;s.add(l);const c=["#edbd88","#ecc49a","#e4b38a","#ce9d73","#f0c8a3","#d9ad85"][i],h=[new li,new li];h.forEach((G,F)=>{G.position.set(F?.205:-.205,.73,0),l.add(G),r.box(G,.34,.57,.39,0,-.285,0,"#454655",.055),r.box(G,.36,.18,.54,0,-.59,.065,"#4a4958",.045)}),r.box(l,.8,.19,.44,0,.78,0,"#4b485c",.035),r.box(l,.85,.7,.47,0,1.19,0,t.color,.105),r.box(l,.025,.6,.015,0,1.2,.244,"#ffffff",.004);const d=r.box(l,.2,.15,.02,-.19,1.24,.25,"#f7effc",.02);d.rotation.z=.08,r.box(l,.11,.028,.025,-.19,1.25,.266,i%2?"#7c6c91":"#a89bbc",.004);const p=[new li,new li];p.forEach((G,F)=>{const H=F?1:-1;G.position.set(H*.53,1.42,0),l.add(G),r.cylinder(G,.15,.13,.48,0,-.23,0,t.color),r.sphere(G,.15,0,-.03,0,t.color);const q=new en(r.geometry("claw",()=>new xl(.115,.055,8,15,Math.PI*1.62)),r.material(c,.3));q.position.set(0,-.58,.015),q.rotation.z=F?.2:2.9,q.castShadow=!0,G.add(q),r.cylinder(G,.075,.075,.14,0,-.49,0,c)});const m=new li;m.position.y=1.79,l.add(m),r.cylinder(m,.31,.31,.48,0,0,0,c),r.cylinder(m,.13,.13,.105,0,.29,0,c),r.cylinder(l,.14,.14,.18,0,1.53,0,c);const _=document.createElement("canvas");_.width=256,_.height=192;const x=_.getContext("2d");x.fillStyle="#403841",x.beginPath(),x.ellipse(83,77,9,13,0,0,Math.PI*2),x.ellipse(173,77,9,13,0,0,Math.PI*2),x.fill(),x.strokeStyle="#765344",x.lineWidth=6,x.lineCap="round",x.beginPath(),x.arc(128,111,34,.17,Math.PI-.17),x.stroke(),x.fillStyle="#f7ddbf",x.beginPath(),x.arc(80,72,2.5,0,Math.PI*2),x.arc(170,72,2.5,0,Math.PI*2),x.fill(),(i===1||i===3)&&(x.strokeStyle="#423e4a",x.lineWidth=6,x.strokeRect(53,53,61,44),x.strokeRect(142,53,61,44),x.beginPath(),x.moveTo(114,68),x.lineTo(142,68),x.stroke());const y=new yv(_);y.colorSpace=ei,r.textures.push(y);const S=new so({map:y,transparent:!0,depthWrite:!1,side:Ha}),b=new en(r.geometry("face",()=>new ir(.54,.41)),S);b.position.set(0,-.005,.316),m.add(b),s.userData.extraMaterials=[S];const R=["#433b50","#715441","#493e46","#564741","#ae758f","#866244"][i];r.cylinder(m,.325,.325,.16,0,.2,-.015,R);const v=r.sphere(m,.3,0,.27,-.035,R);if(v.scale.y=.48,i===0||i===2||i===4){r.box(m,.12,.37,.26,-.28,.06,-.08,R,.06),r.box(m,.12,.37,.26,.28,.06,-.08,R,.06);const G=r.sphere(m,.21,0,.08,-.34,R);G.scale.y=1.3}else{const G=r.box(m,.46,.12,.22,-.03,.21,.2,R,.045);G.rotation.z=.1}const g=new so({color:"#8f63d4",transparent:!0,opacity:.82}),I=new en(r.geometry("selection",()=>new xl(.65,.045,8,40)),g);I.rotation.x=-Math.PI/2,I.position.y=.08,s.add(I);const P=new Jd({color:"#8fbea5",emissive:"#8fbea5",emissiveIntensity:.25,roughness:.3}),U=new en(r.geometry("status-orb",()=>new uu(.09,12,8)),P);return U.position.set(.49,2.18,0),s.add(U),s.userData.extraMaterials.push(g,P),s.scale.setScalar(1.08),{root:s,body:l,head:m,arms:p,legs:h,ring:I,orb:U,agent:t}}const He=([r,t])=>`${r},${t}`,oa=r=>[r[0],r[1]],X_=([r,t])=>[[r+1,t],[r,t+1],[r-1,t],[r,t-1]];class E2{constructor(t=24,i=20){Ii(this,"width");Ii(this,"height");Ii(this,"walls",new Set);Ii(this,"occupants",new Map);Ii(this,"positions",new Map);Ii(this,"reservations",new Map);Ii(this,"steps",new Map);if(!Number.isInteger(t)||!Number.isInteger(i)||t<1||i<1||t>256||i>256)throw new RangeError("La cuadrícula debe medir entre 1 y 256 celdas por lado.");this.width=t,this.height=i}get blockedCount(){return this.walls.size}inBounds(t){return Number.isInteger(t[0])&&Number.isInteger(t[1])&&t[0]>=0&&t[0]<this.width&&t[1]>=0&&t[1]<this.height}isBlocked(t){return!this.inBounds(t)||this.walls.has(He(t))}blockRect(t,i,s,l){if(![t,i,s,l].every(Number.isFinite)||s<=0||l<=0)throw new RangeError("El obstáculo debe ser un rectángulo finito de tamaño positivo.");const c=[];for(let h=Math.max(0,Math.floor(t));h<Math.min(this.width,Math.ceil(t+s));h++)for(let d=Math.max(0,Math.floor(i));d<Math.min(this.height,Math.ceil(i+l));d++){const p=He([h,d]);if(this.occupants.has(p)||this.reservations.has(p))throw new Error("El obstáculo invadiría un personaje.");c.push(p)}for(const h of c)this.walls.add(h)}isFree(t,i){if(this.isBlocked(t))return!1;for(let s=-1;s<=1;s++)for(let l=-1;l<=1;l++){const c=He([t[0]+s,t[1]+l]),h=this.occupants.get(c),d=this.reservations.get(c);if(h!==void 0&&h!==i||d!==void 0&&d!==i)return!1}return!0}register(t,i){if(!t||!this.isFree(i,t))return!1;const s=this.positions.get(t);return s?He(s)===He(i):(this.positions.set(t,oa(i)),this.occupants.set(He(i),t),!0)}position(t){const i=this.positions.get(t);return i?oa(i):void 0}path(t,i){const s=this.positions.get(t);if(!s||!this.isFree(i,t))return[];const l=He(s),c=He(i);if(l===c)return[];const h=[oa(s)],d=new Map([[l,null]]);for(let _=0;_<h.length;_++){const x=h[_];if(He(x)===c)break;for(const y of X_(x)){const S=He(y);d.has(S)||!this.isFree(y,t)||(d.set(S,x),h.push(y))}}if(!d.has(c))return[];const p=[];let m=oa(i);for(;m&&He(m)!==l;)p.unshift(oa(m)),m=d.get(He(m))??null;return p}reserveNext(t,i){const s=this.positions.get(t);if(!s||Math.abs(s[0]-i[0])+Math.abs(s[1]-i[1])!==1||!this.isFree(i,t))return!1;const l=this.steps.get(t);return l?He(l)===He(i):(this.steps.set(t,oa(i)),this.reservations.set(He(i),t),!0)}arrive(t){const i=this.steps.get(t),s=this.positions.get(t);if(s)return i?(this.occupants.delete(He(s)),this.occupants.set(He(i),t),this.positions.set(t,oa(i)),this.reservations.delete(He(i)),this.steps.delete(t),oa(i)):oa(s)}cancel(t){const i=this.steps.get(t);i&&this.reservations.delete(He(i)),this.steps.delete(t)}remove(t){this.cancel(t);const i=this.positions.get(t);i&&this.occupants.delete(He(i)),this.positions.delete(t)}nearestFree(t,i){if(!t.every(Number.isFinite))return null;const s=[Math.max(0,Math.min(this.width-1,Math.round(t[0]))),Math.max(0,Math.min(this.height-1,Math.round(t[1])))],l=[s],c=new Set([He(s)]);for(let h=0;h<l.length;h++){const d=l[h];if(this.isFree(d,i))return oa(d);for(const p of X_(d)){const m=He(p);this.inBounds(p)&&!c.has(m)&&(c.add(m),l.push(p))}}return null}}class b2{constructor(){Ii(this,"claims",new Map)}claim(t,i){if(!t||i.length===0)return!1;const s=new Set;for(const[l,c]of i){if(!Number.isInteger(l)||!Number.isInteger(c))return!1;for(let h=-1;h<=1;h++)for(let d=-1;d<=1;d++)s.add(He([l+h,c+d]))}for(const[l,c]of this.claims)if(l!==t){for(const h of s)if(c.has(h))return!1}return this.claims.set(t,s),!0}release(t){this.claims.delete(t)}}const Yi=r=>["En ejecución","En corrección"].includes(r),T2=r=>r==="Fallido"?"#d66a76":["Espera aprobación","Requiere información","Espera revisión"].includes(r)?"#d8a54d":Yi(r)?"#56aa8b":r==="Interrumpido"||r==="Cancelado"?"#a79da8":"#9d87c3",A2=r=>Yi(r)?"Trabajando":r,Zc={background:"#fffc",border:"1px solid #e7dff0",borderRadius:7,padding:"6px 9px",fontSize:9,color:"#816694",boxShadow:"0 2px 8px #58426709",cursor:"pointer"};function R2(r){const t=Ot.useRef(null),i=Ot.useRef(null),s=Ot.useRef(r),l=Ot.useRef(()=>{}),[c,h]=Ot.useState("Selecciona un agente y haz clic en una zona libre para moverlo."),[d,p]=Ot.useState("");s.current=r,Ot.useEffect(()=>{const x=i.current,y=t.current;let S;try{S=new t2({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{p("Tu navegador no pudo iniciar WebGL. Prueba Chrome o Edge con aceleración gráfica; puedes seleccionar el equipo desde la lista inferior.");return}p(""),y.dataset.rendererReady="false",y.dataset.sceneVersion="3d",S.setPixelRatio(Math.min(window.devicePixelRatio,1.6)),S.shadowMap.enabled=!0,S.shadowMap.type=$_,S.shadowMap.autoUpdate=!1,S.shadowMap.needsUpdate=!0,S.outputColorSpace=ei,S.toneMapping=ev,S.toneMappingExposure=1.22,S.setClearColor("#f5f2f8",0),x.appendChild(S.domElement),S.domElement.setAttribute("aria-label","Oficina 3D interactiva. Arrastra para girar, rueda para acercar, clic en agente para seleccionar o en suelo para mover.");const b=new n1,R=new x2,v=new E2(24,20),g=new b2,I=new li;I.position.set(-12,0,-10),b.add(I);const P=new h1("#fff5e9","#a4a2bc",2.7);b.add(P);const U=new p_("#fff6df",3.2);U.position.set(-8,24,14),U.castShadow=!0,U.shadow.mapSize.set(1024,1024),U.shadow.camera.left=-20,U.shadow.camera.right=20,U.shadow.camera.top=20,U.shadow.camera.bottom=-20,U.shadow.camera.near=.1,U.shadow.camera.far=65,U.shadow.normalBias=.035,U.shadow.bias=-1e-4,U.shadow.radius=4,b.add(U);const G=new p_("#d9d9ff",1.6);G.position.set(16,12,-10),b.add(G);const F=new en(new ir(140,140),new l1({color:"#9b87ae",opacity:.14}));F.rotation.x=-Math.PI/2,F.position.y=-.5,F.receiveShadow=!0,b.add(F);const{homes:H,meeting:q}=S2(I,R,v),N=new $d(-25,25,14,-14,.1,180);N.position.set(29,28,35);const C=new n2(N,S.domElement);C.target.set(0,.45,.2),C.enableDamping=!0,C.dampingFactor=.075,C.enablePan=!0,C.screenSpacePanning=!0,C.minPolarAngle=Math.PI*.15,C.maxPolarAngle=Math.PI*.44,C.minZoom=.7,C.maxZoom=3,C.rotateSpeed=.55,C.zoomSpeed=.75,C.panSpeed=.7,C.mouseButtons={LEFT:Ba.ROTATE,MIDDLE:Ba.DOLLY,RIGHT:Ba.PAN},C.touches={ONE:ys.ROTATE,TWO:ys.DOLLY_PAN},C.update(),C.saveState();const j=document.createElement("div");j.style.cssText="position:absolute;inset:0;overflow:hidden;pointer-events:none;",x.appendChild(j);const at=s.current.agents.map((ht,w)=>{const T=M2(R,ht,w),Y=v.nearestFree(H[w],ht.id)||H[w];v.register(ht.id,Y),T.root.position.set(Y[0]+.5,.14,Y[1]+.5),T.root.rotation.y=.7,I.add(T.root),T.root.traverse(Rt=>{Rt instanceof en&&(Rt.userData.agentId=ht.id)}),T.ring.userData.ignorePick=!0;const pt=document.createElement("button");pt.dataset.agentId=ht.id,pt.dataset.agentLabel="true",pt.setAttribute("aria-label",`${ht.name} · ${ht.role} · Disponible`),pt.style.cssText="position:absolute;left:0;top:0;transform:translate(-50%,-100%);display:flex;align-items:center;gap:5px;white-space:nowrap;border:1px solid #e9dff2;background:#fffffff0;border-radius:7px;padding:4px 7px;box-shadow:0 2px 8px #56406c12;font:600 9px system-ui;color:#6a507e;cursor:pointer;pointer-events:auto;";const Et=document.createElement("i");Et.style.cssText=`width:5px;height:5px;flex-shrink:0;border-radius:50%;background:${ht.color}`;const z=document.createElement("span");z.textContent=ht.name;const Ut=document.createElement("small");return Ut.style.cssText="font-weight:400;font-size:7px;color:#9a85aa",Ut.textContent="Disponible",pt.append(Et,z,Ut),pt.addEventListener("click",Rt=>{Rt.stopPropagation(),s.current.onSelect(ht.id)}),j.appendChild(pt),{...T,cell:Y,path:[],step:null,target:null,pending:null,label:pt,status:"Disponible",waveUntil:0,walkPhase:w,wait:0,home:H[w],meeting:q[w]}}),ot=new li;I.add(ot);const ft=new so({color:"#a580d4",transparent:!0,opacity:.48}),mt=new Qd(.09,.14,12);function B(ht){for(;ot.children.length;)ot.remove(ot.children[0]);if(ht)for(const w of ht.path){const T=new en(mt,ft);T.rotation.x=-Math.PI/2,T.position.set(w[0]+.5,.153,w[1]+.5),T.userData.ignorePick=!0,ot.add(T)}}function Q(ht){h(ht)}function Z(ht,w,T=!1){if(T&&Yi(ht.status)){Q(`${ht.agent.name} está trabajando. El movimiento manual estará disponible cuando termine.`);return}if(v.isBlocked(w)){T&&Q("Esa zona contiene un mueble o una división. Elige suelo libre.");return}if(ht.step){ht.pending=w;return}if(!v.isFree(w,ht.agent.id)){g.release(ht.agent.id),ht.path=[],ht.target=w,ht.wait=0,s.current.selected===ht.agent.id&&B(ht),T&&Q(`${ht.agent.name} espera a que se libere el destino. Puedes elegir otro punto para cambiar la orden.`);return}const Y=v.path(ht.agent.id,w);if(Y.length===0&&He(w)!==He(ht.cell)){g.release(ht.agent.id),ht.path=[],ht.target=w,ht.wait=0,T&&Q(`${ht.agent.name} espera a que quede libre el paso. Se moverá al destino cuando haya una ruta segura.`);return}if(Y.length&&!g.claim(ht.agent.id,[ht.cell,...Y])){g.release(ht.agent.id),ht.path=[],ht.target=w,ht.wait=0,T&&Q(`${ht.agent.name} espera su turno en el pasillo compartido. La orden de movimiento está conservada.`);return}Y.length||g.release(ht.agent.id),ht.path=Y,ht.target=w,ht.wait=0,s.current.reduced&&Y.length&&Q("Movimiento reducido: traslado sin animación continua; las reservas siguen evitando colisiones."),s.current.selected===ht.agent.id&&B(ht),T&&Q(Y.length?`${ht.agent.name} se dirige al punto elegido. Esto solo mueve al personaje; las tareas se gestionan en el tablero.`:`${ht.agent.name} ya está en ese lugar.`)}l.current=ht=>{const w=at.find(T=>T.agent.id===s.current.selected);if(w){if(ht==="stop"){w.pending=null,w.target=w.step||w.cell,w.path=w.step?[w.step]:[],w.waveUntil=0,s.current.selected===w.agent.id&&B(w),Q(`${w.agent.name} detiene el desplazamiento al alcanzar una posición segura. Las tareas de IA se gestionan en el tablero.`);return}if(ht==="wave"){if(Yi(w.status)){Q(`${w.agent.name} está trabajando. Puedes saludar cuando termine.`);return}w.root.rotation.y=.7,w.waveUntil=performance.now()/1e3+2.8,Q(`${w.agent.name} te saluda. Es un gesto visual, no una respuesta de IA.`);return}Z(w,ht==="desk"?w.home:w.meeting,!0)}};const bt=new g1,L=new fe;let nt={x:0,y:0,time:0};const St=ht=>{ht.button===0&&(nt={x:ht.clientX,y:ht.clientY,time:performance.now()})},Tt=ht=>{if(ht.button!==0||Math.hypot(ht.clientX-nt.x,ht.clientY-nt.y)>5||performance.now()-nt.time>700)return;const w=S.domElement.getBoundingClientRect();L.set((ht.clientX-w.left)/w.width*2-1,-(ht.clientY-w.top)/w.height*2+1),bt.setFromCamera(L,N);const Y=bt.intersectObjects(I.children,!0).filter(z=>{const Ut=z.object,Rt=Ut.material;return!Ut.userData.ignorePick&&!(Rt!=null&&Rt.transparent&&Rt.opacity<.5)})[0];if(!Y)return;if(Y.object.userData.agentId){s.current.onSelect(Y.object.userData.agentId);return}const pt=at.find(z=>z.agent.id===s.current.selected);if(!pt)return;if(!Y.object.userData.walkable){Q("Selecciona un personaje o haz clic en una zona libre del suelo.");return}const Et=I.worldToLocal(Y.point.clone());Z(pt,[Math.floor(Et.x),Math.floor(Et.z)],!0)};S.domElement.addEventListener("pointerdown",St),S.domElement.addEventListener("pointerup",Tt);const tt=ht=>{ht.preventDefault(),p("Se perdió el contexto gráfico. Recarga la vista de oficina para recuperar la escena; tus datos siguen guardados.")};S.domElement.addEventListener("webglcontextlost",tt);let gt=1,xt=1,Dt=s.current.reset,Lt=s.current.zoom,ue=s.current.selected,Kt=0,he=0,ze=!1,ie=performance.now()/1e3,k=!0;function ln(){gt=Math.max(1,x.clientWidth),xt=Math.max(1,x.clientHeight);const ht=gt/xt,w=Math.max(21.5,38/ht);N.left=-w*ht/2,N.right=w*ht/2,N.top=w/2,N.bottom=-w/2,N.updateProjectionMatrix(),S.setSize(gt,xt)}const pe=new ResizeObserver(ln);pe.observe(x),ln();const ne=new et,Yt=new et;function De(ht){var Et;if(!k)return;Kt=requestAnimationFrame(De);const w=ht/1e3,T=Math.min(.5,Math.max(0,w-ie));ie=w;const Y=s.current;C.enableDamping=!Y.reduced,Y.reset!==Dt&&(C.reset(),N.zoom=Y.zoom,N.updateProjectionMatrix(),Dt=Y.reset,Lt=Y.zoom),Y.zoom!==Lt&&(N.zoom=Y.zoom,N.updateProjectionMatrix(),Lt=Y.zoom),ue!==Y.selected&&(ue=Y.selected,B(at.find(z=>z.agent.id===Y.selected)));for(const z of at){const Ut=Y.states[z.agent.id]||"Disponible";if(Ut!==z.status){z.status=Ut;const X=T2(Ut);z.orb.material.color.set(X),z.orb.material.emissive.set(X),z.label.firstChild.style.background=X,z.label.lastChild.textContent=A2(Ut),z.label.setAttribute("aria-label",`${z.agent.name} · ${z.agent.role} · ${Ut}`),Yi(Ut)&&Z(z,z.home)}const Rt=z.agent.id===Y.selected;if(z.ring.visible=Rt,z.label.style.borderColor=Rt?"#bb93e2":"#e9dff2",z.label.style.zIndex=Rt?"4":"2",z.wait+=T,!z.step&&z.pending){const X=z.pending;z.pending=null,Z(z,X)}if(!z.step&&!z.path.length&&z.target&&He(z.cell)!==He(z.target)&&z.wait>.5){const X=v.path(z.agent.id,z.target);X.length&&g.claim(z.agent.id,[z.cell,...X])&&(z.path=X,z.wait=0,Rt&&B(z))}let jt=Y.reduced?Number.POSITIVE_INFINITY:T*2.2,Qt=0,Ct=0;for(;jt>1e-5&&Ct++<64;){if(!z.step){if(!z.path.length)break;const Ne=z.path[0];if(v.reserveNext(z.agent.id,Ne))z.step=Ne,z.wait=0;else{if(z.wait>1&&z.target){const $e=v.path(z.agent.id,z.target);z.path=$e.length&&g.claim(z.agent.id,[z.cell,...$e])?$e:[],z.path.length||g.release(z.agent.id),z.wait=0,Rt&&B(z)}break}}const X=z.step,Pt=X[0]+.5-z.root.position.x,dt=X[1]+.5-z.root.position.z,vt=Math.hypot(Pt,dt),Ft=Math.min(vt,jt),zt=Math.atan2(Pt,dt),le=Math.atan2(Math.sin(zt-z.root.rotation.y),Math.cos(zt-z.root.rotation.y));if(z.root.rotation.y+=le*Math.min(1,T*12),vt<=Ft+1e-4?(z.root.position.x=X[0]+.5,z.root.position.z=X[1]+.5,z.cell=v.arrive(z.agent.id),z.step=null,z.path.shift(),Rt&&B(z)):(z.root.position.x+=Pt/vt*Ft,z.root.position.z+=dt/vt*Ft),Qt+=Ft,jt-=Ft,z.step)break;if(z.pending){const Ne=z.pending;z.pending=null,Z(z,Ne)}}!z.step&&!z.path.length&&z.target&&He(z.cell)===He(z.target)&&g.release(z.agent.id);const Bt=Qt>1e-5||!!z.step;z.walkPhase+=Bt?Qt*4.5:T*1.2;const Jt=z.walkPhase,qt=Yi(z.status),Ht=w<z.waveUntil&&!qt&&!Bt,oe=Bt&&!Y.reduced?Math.sin(Jt)*.53:0;if(z.legs[0].rotation.x=oe,z.legs[1].rotation.x=-oe,z.body.position.y=Bt&&!Y.reduced?Math.abs(Math.sin(Jt))*.045:qt&&!Y.reduced?Math.sin(w*5)*.008:0,z.arms[0].rotation.x=qt&&!Bt?-.92+(Y.reduced?0:Math.sin(w*9)*.08):-oe*.7,z.arms[1].rotation.x=qt&&!Bt?-.88+(Y.reduced?0:Math.sin(w*9+1)*.08):oe*.7,z.arms[0].rotation.z=.1,z.arms[1].rotation.z=Ht?-2.4+(Y.reduced?0:Math.sin(w*11)*.23):-.1,z.head.rotation.y=!Bt&&!Y.reduced?Math.sin(w*.7+z.walkPhase)*.055:0,z.head.rotation.z=z.status==="Fallido"?.13:0,z.orb.scale.setScalar(qt&&!Y.reduced?1+Math.sin(w*4)*.15:1),!Bt){const X=qt?Math.PI:Math.atan2(N.position.x-(z.root.position.x-12),N.position.z-(z.root.position.z-10));z.root.rotation.y+=Math.atan2(Math.sin(X-z.root.rotation.y),Math.cos(X-z.root.rotation.y))*Math.min(1,T*6)}z.label.dataset.walking=String(Bt),z.label.dataset.waiting=String(!Bt&&!!z.target&&He(z.cell)!==He(z.target)),z.label.dataset.remaining=String(z.path.length),z.label.dataset.target=((Et=z.target)==null?void 0:Et.join(","))||"",z.label.dataset.gesture=Ht?"saludando":"ninguno",z.label.dataset.worldX=z.root.position.x.toFixed(3),z.label.dataset.worldZ=z.root.position.z.toFixed(3),z.label.dataset.agentState=Ut,z.root.getWorldPosition(Yt),ne.copy(Yt).add(new et(0,2.75,0)).project(N);const ae=(ne.x*.5+.5)*gt,we=(-ne.y*.5+.5)*xt;z.label.style.left=`${ae}px`,z.label.style.top=`${we}px`,z.label.style.display=ne.z<-1||ne.z>1||ae<0||ae>gt||we<0||we>xt?"none":"flex"}C.update();const pt=at.some(z=>z.step||z.path.length||w<z.waveUntil||Yi(z.status));w>=he&&(pt||ze)&&(S.shadowMap.needsUpdate=!0,he=w+.12),ze=pt,S.render(b,N),y.dataset.rendererReady!=="true"&&(y.dataset.rendererReady="true")}return Kt=requestAnimationFrame(De),()=>{k=!1,cancelAnimationFrame(Kt),pe.disconnect(),l.current=()=>{},S.domElement.removeEventListener("pointerdown",St),S.domElement.removeEventListener("pointerup",Tt),S.domElement.removeEventListener("webglcontextlost",tt),C.dispose();for(const ht of at)for(const w of ht.root.userData.extraMaterials||[])w.dispose();for(const ht of I.userData.extraMaterials||[])ht.dispose();mt.dispose(),ft.dispose(),F.geometry.dispose(),F.material.dispose(),R.dispose(),S.dispose(),S.forceContextLoss(),j.remove(),S.domElement.remove(),y.dataset.rendererReady="false"}},[]);const m=r.agents.find(x=>x.id===r.selected),_=r.states[r.selected]||"Disponible";return E.jsxs("div",{ref:t,className:"office-canvas","data-renderer-ready":"false","aria-label":"Oficina 3D interactiva de seis agentes",children:[E.jsx("div",{ref:i,style:{position:"absolute",inset:0}}),d?E.jsx("div",{role:"alert",style:{position:"absolute",inset:"30% 8% auto",background:"#fff9",padding:18,borderRadius:12,fontSize:12,color:"#82668f",lineHeight:1.7},children:d}):E.jsxs("div",{className:"scene-3d-actions",style:{position:"absolute",top:61,right:12,zIndex:5,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:5,pointerEvents:"auto"},children:[E.jsxs("div",{style:{fontSize:8,color:"#9a81ad",background:"#ffffffc9",borderRadius:5,padding:"4px 7px"},children:[m==null?void 0:m.name," · ",_]}),E.jsxs("div",{style:{display:"flex",gap:4},children:[E.jsx("button",{style:Zc,onClick:()=>l.current("desk"),title:"Mover visualmente al escritorio",disabled:Yi(_),children:"Escritorio"}),E.jsx("button",{style:Zc,onClick:()=>l.current("meeting"),title:"Mover visualmente a la sala de reunión",disabled:Yi(_),children:"Reunión"}),E.jsx("button",{style:Zc,onClick:()=>l.current("wave"),title:"Animación visual de saludo",disabled:Yi(_),children:"Saludar"}),E.jsx("button",{style:Zc,onClick:()=>l.current("stop"),title:"Detener desplazamiento visual",disabled:Yi(_),children:"Detener"})]})]}),E.jsx("p",{className:"scene-3d-feedback",role:"status","aria-live":"polite",style:{position:"absolute",left:12,right:170,bottom:47,fontSize:8,lineHeight:1.5,color:"#96809f",padding:"5px 7px",margin:0,borderRadius:5,background:"#fbf8fdca",pointerEvents:"none",maxWidth:430},children:c})]})}const Kc={gemini:{name:"Google Gemini",secret:"STUDIO_GEMINI_API_KEY",model:"gemini-2.5-flash-lite",link:"https://aistudio.google.com/apikey"},groq:{name:"Groq",secret:"STUDIO_GROQ_API_KEY",model:"openai/gpt-oss-20b",link:"https://console.groq.com/keys"}};async function Qc(r,t,i){const s=await fetch("/api"+r,{method:i||(t?"POST":"GET"),headers:{"Content-Type":"application/json"},body:t?JSON.stringify(t):void 0}),l=await s.json();if(!s.ok)throw Error(typeof l.detail=="string"?l.detail:JSON.stringify(l.detail||l));return l}function C2(r){const[t,i]=Ot.useState(r.provider),[s,l]=Ot.useState(r.agents),[c,h]=Ot.useState(!1),[d,p]=Ot.useState(null),m=Kc[t]||Kc.gemini,_=r.status.provider===t;function x(S){i(S),p(null),l(b=>b.map(R=>({...R,model:Kc[S].model})))}async function y(S){h(!0),p(null),r.onError("");try{await Qc("/settings",{provider:t,agents:s,ollama_url:r.ollama,openai_url:r.openai},"PUT");const b=await Qc("/settings");r.onSaved(b),l(b.agents);const R=await Qc("/models");r.onStatus(R),S==="test"&&p(await Qc("/models/test",{agent:"anto"})),r.onNotice(S==="test"?"Respuesta real recibida del proveedor.":R.connected?"Configuración guardada. La API responde.":"Configuración guardada. "+(R.error||"Comprueba la clave y tu conexión."))}catch(b){r.onError(b.message)}finally{h(!1)}}return E.jsx("section",{className:"content-card settings-card",children:E.jsxs("fieldset",{disabled:c,style:{border:0,padding:0,margin:0,minWidth:0},children:[E.jsxs("div",{className:"section-title",children:[E.jsxs("div",{children:[E.jsx("div",{className:"eyebrow",children:"IA EN LA NUBE"}),E.jsx("h2",{children:"APIs y modelos"})]}),E.jsx("span",{className:"pill",children:"Sin modelos locales"})]}),E.jsx("div",{className:"provider-options",role:"group","aria-label":"Proveedor de IA",children:["gemini","groq"].map(S=>E.jsxs("button",{className:"provider-option "+(t===S?"selected":""),onClick:()=>x(S),children:[E.jsx("strong",{children:Kc[S].name}),E.jsx("small",{children:"API en la nube · cuota gratuita según tu cuenta"})]},S))}),E.jsxs("div",{className:"integration-note",children:[E.jsxs("h3",{children:["Conectar ",m.name]}),E.jsxs("p",{children:["Crea tu clave en ",E.jsx("a",{href:m.link,target:"_blank",rel:"noreferrer",children:"el sitio oficial"}),". En GitHub, abre Settings → Codespaces → Secrets y añade ",E.jsx("code",{children:m.secret})," para este repositorio. Detén y vuelve a abrir el Codespace para cargarla."]}),E.jsx("p",{children:"La clave permanece en el servidor. No la pegues en conversaciones ni archivos del proyecto. Aquí no se solicitan datos de pago."})]}),E.jsx("div",{className:"settings-connection "+(_&&r.status.connected?"ok":""),children:E.jsx("strong",{children:_&&r.status.connected?"API conectada":_?r.status.error||"Conexión pendiente":"Proveedor pendiente de comprobar"})}),E.jsx("p",{className:"muted",children:"No se descarga ni ejecuta un modelo en tu PC. Los mensajes y el contexto que uses se envían al proveedor elegido. Sus límites y condiciones pueden cambiar; no se promete uso ilimitado ni acceso gratuito a GPT de OpenAI."}),E.jsxs("label",{children:["Modelo para todo el equipo",E.jsxs("select",{"aria-label":"Modelo compartido",value:"",onChange:S=>{S.target.value&&(l(b=>b.map(R=>({...R,model:S.target.value}))),p(null))},children:[E.jsx("option",{value:"",children:"Seleccionar un modelo del catálogo"}),(_?r.status.models:[]).map(S=>E.jsx("option",{children:S},S))]})]}),E.jsx("div",{className:"agent-settings",children:s.map(S=>E.jsxs("article",{children:[E.jsxs("h3",{children:[S.name,E.jsx("small",{children:S.role})]}),E.jsxs("label",{children:["Modelo de ",S.name,E.jsx("input",{"aria-label":"Modelo de "+S.name,value:S.model,maxLength:200,onChange:b=>{l(R=>R.map(v=>v.id===S.id?{...v,model:b.target.value}:v)),p(null)}})]}),E.jsxs("label",{children:["Instrucciones de ",S.name,E.jsx("textarea",{value:S.instructions,maxLength:6e3,onChange:b=>l(R=>R.map(v=>v.id===S.id?{...v,instructions:b.target.value}:v))})]})]},S.id))}),E.jsxs("div",{className:"api-config-row",children:[E.jsxs("button",{className:"button primary",onClick:()=>y("save"),children:[E.jsx(Y_,{size:15}),"Guardar configuración"]}),E.jsxs("button",{className:"button secondary",onClick:()=>y("check"),children:[E.jsx(Q_,{size:15}),"Guardar y comprobar API"]}),E.jsxs("button",{className:"button secondary",onClick:()=>y("test"),children:[E.jsx(mS,{size:15}),"Guardar y probar respuesta"]})]}),d&&E.jsxs("div",{className:"probe-result",role:"status",children:[E.jsx("strong",{children:"Respuesta recibida del proveedor"}),E.jsx("p",{children:d.response}),E.jsxs("small",{children:[d.model," · ",d.latency_ms," ms"]})]}),E.jsx("p",{className:"muted",children:"Para volver a entrar, abre el mismo Codespace y el puerto 8765. No necesitas reinstalar. Los proveedores mantienen su infraestructura; puedes actualizar el catálogo y elegir nuevos modelos. Las correcciones guardadas aportan contexto, sin reentrenar el modelo."}),E.jsxs("label",{className:"checkbox",children:[E.jsx("input",{type:"checkbox",checked:r.reduced,onChange:S=>r.onReduced(S.target.checked)}),"Reducir movimiento"]})]})})}async function Un(r,t,i,s){const l=await fetch("/api"+r,{method:i||(t?"POST":"GET"),headers:t instanceof FormData?{}:{"Content-Type":"application/json"},body:t instanceof FormData?t:t?JSON.stringify(t):void 0,signal:s}),c=await l.json();if(!l.ok)throw Error(typeof c.detail=="string"?c.detail:JSON.stringify(c.detail||c));return c}const q_=[["office","Oficina",$y],["projects","Proyectos",K_],["tasks","Tareas",Yh],["data","Datos",uS],["deliverables","Entregables",Z_],["settings","Configuración",LS]];function w2(){var co;const[r,t]=Ot.useState("office"),[i,s]=Ot.useState([]),[l,c]=Ot.useState(""),[h,d]=Ot.useState([]),[p,m]=Ot.useState("anto"),[_,x]=Ot.useState(!1),[y,S]=Ot.useState("http://127.0.0.1:11434"),[b,R]=Ot.useState("gemini"),[v,g]=Ot.useState("http://127.0.0.1:1234/v1"),[I,P]=Ot.useState({connected:!1,models:[]}),[U,G]=Ot.useState({}),[F,H]=Ot.useState([]),[q,N]=Ot.useState([]),[C,j]=Ot.useState([]),[at,ot]=Ot.useState(""),[ft,mt]=Ot.useState(null),[B,Q]=Ot.useState([]),[Z,bt]=Ot.useState([]),[L,nt]=Ot.useState(""),[St,Tt]=Ot.useState(""),[tt,gt]=Ot.useState(!1),[xt,Dt]=Ot.useState(!1),[Lt,ue]=Ot.useState(!1),[Kt,he]=Ot.useState(""),[ze,ie]=Ot.useState(""),[k,ln]=Ot.useState(!0),[pe,ne]=Ot.useState(!0),[Yt,De]=Ot.useState(1),[ht,w]=Ot.useState(0),[T,Y]=Ot.useState(matchMedia("(prefers-reduced-motion: reduce)").matches),[pt,Et]=Ot.useState(""),[z,Ut]=Ot.useState(""),[Rt,jt]=Ot.useState(""),[Qt,Ct]=Ot.useState(""),[Bt,Jt]=Ot.useState("sum"),[qt,Ht]=Ot.useState(!1),[oe,ae]=Ot.useState(""),[we,X]=Ot.useState(""),[Pt,dt]=Ot.useState(""),[vt,Ft]=Ot.useState(""),[zt,le]=Ot.useState("Unidades"),[Ne,$e]=Ot.useState("bar"),[Ue,jn]=Ot.useState(""),[mn,gn]=Ot.useState(","),[Sn,Xn]=Ot.useState("utf-8-sig"),[Ei,ma]=Ot.useState([]),[ga,ui]=Ot.useState(null),[ta,fi]=Ot.useState(null),[hi,ni]=Ot.useState(""),[_a,Hi]=Ot.useState({}),[un,Ga]=Ot.useState("waiting"),[bs,bi]=Ot.useState(0),D=Ot.useRef(null),K=Ot.useRef(null),ct=Ot.useRef(null),rt=Ot.useRef(0),$=Ot.useRef(0),At=Ot.useRef(!1),It=Ot.useRef(0),Nt=Ot.useRef({project:l,agent:p});Nt.current={project:l,agent:p};const Xt=Ot.useRef(null),Vt=h.find(O=>O.id===p),$t=i.find(O=>O.id===l),Zt=Z[Z.length-1],ve=(Zt==null?void 0:Zt.role)==="assistant"&&Zt.status==="complete",Te=U,an=I.provider==="groq"?"Groq":"Gemini";function ye(O){P(O),x(O.connected)}function Se(O){d(O.agents),R(O.provider),S(O.ollama_url),g(O.openai_url)}function ee(O=!1){var kt,de;$.current++,(kt=K.current)==null||kt.abort(),K.current=null;const wt=At.current;(de=D.current)==null||de.abort(),D.current=null,At.current=!1,Dt(!1),bt(Oe=>Oe.map(Xe=>Xe.status==="streaming"?{...Xe,status:"cancelled",persisted:!1}:Xe)),O&&wt&&ie("Conversación cancelada. La respuesta parcial no se guarda como completada.")}function sn(O,wt){Nt.current.project===O&&Nt.current.agent===wt||(rt.current++,ee(!0),Nt.current={project:O,agent:wt},bt([]),ma([]),ui(null),fi(null),ni(""),ue(!0),c(O),m(wt))}function Me(O){sn(O,Nt.current.agent)}function Mn(O){sn(Nt.current.project,O)}async function Pn(O){he(""),gt(!0);try{await O()}catch(wt){wt.name!=="AbortError"&&he(wt.message)}finally{gt(!1)}}async function Le(O=l){var de;if(!O)return;const wt=++It.current;(de=ct.current)==null||de.abort();const kt=new AbortController;ct.current=kt;try{const[Oe,Xe,fn]=await Promise.all([Un("/runs?project="+O,void 0,void 0,kt.signal),Un("/files?project="+O,void 0,void 0,kt.signal),Un("/artifacts?project="+O,void 0,void 0,kt.signal)]),Ci=await Promise.all(Oe.map(ar=>Un("/runs/"+ar.id,void 0,void 0,kt.signal)));if(kt.signal.aborted||wt!==It.current||Nt.current.project!==O)return;N(Ci),j(Xe),Q(fn)}catch(Oe){if(Oe.name!=="AbortError")throw Oe}}async function Ti(){const O=await Un("/models");ye(O)}Ot.useEffect(()=>{let O=!0;return gt(!0),(async()=>{var wt;try{const[kt,de]=await Promise.all([Un("/projects"),Un("/settings")]);if(!O)return;s(kt),Se(de),Me(((wt=kt[0])==null?void 0:wt.id)||""),await Ti()}catch(kt){O&&he(kt.message)}finally{O&&gt(!1)}})(),()=>{O=!1}},[]),Ot.useEffect(()=>{if(!l)return;let O=!0;ot(""),mt(null),H([]),G({}),Hi({}),Ut(""),Pn(()=>Le(l));const wt=new EventSource("/api/events?project="+l);wt.onmessage=de=>{if(!(!O||Nt.current.project!==l))try{const Oe=JSON.parse(de.data),Xe=JSON.parse(Oe.payload);Oe.agent&&(Xe.agent_status||Xe.status)&&G(fn=>({...fn,[Oe.agent]:Xe.agent_status||Xe.status})),Oe.kind==="task"&&Oe.run&&Xe.logical_id&&Xe.status&&Hi(fn=>({...fn,[Oe.run+":"+Xe.logical_id]:Xe.status})),H(fn=>[...fn,Oe].slice(-100)),["run","file","plan"].includes(Oe.kind)&&Le(l).catch(fn=>{O&&he(fn.message)})}catch{he("No se pudo interpretar un evento del servidor.")}};const kt=setInterval(()=>Ti().catch(()=>x(!1)),15e3);return()=>{var de;O=!1,wt.close(),clearInterval(kt),(de=ct.current)==null||de.abort()}},[l]),Ot.useEffect(()=>{var de;if(!l)return;const O=rt.current,wt=new AbortController;(de=K.current)==null||de.abort(),K.current=wt,ue(!0);const kt="?project="+encodeURIComponent(l)+"&agent="+encodeURIComponent(p);return Promise.all([Un("/messages"+kt,void 0,void 0,wt.signal),Un("/feedback"+kt,void 0,void 0,wt.signal)]).then(([Oe,Xe])=>{wt.signal.aborted||O!==rt.current||At.current||(bt(Oe.map(fn=>({...fn,key:fn.id,persisted:!0,status:"complete"}))),ma(Xe))}).catch(Oe=>{Oe.name!=="AbortError"&&O===rt.current&&he(Oe.message)}).finally(()=>{!wt.signal.aborted&&O===rt.current&&ue(!1)}),()=>wt.abort()},[l,p]),Ot.useEffect(()=>{if(!xt)return;const O=Date.now();bi(0);const wt=setInterval(()=>bi(Math.floor((Date.now()-O)/1e3)),1e3);return()=>clearInterval(wt)},[xt]),Ot.useEffect(()=>{var O;(O=Xt.current)==null||O.scrollIntoView({behavior:T?"instant":"smooth",block:"nearest"})},[Z]),Ot.useEffect(()=>()=>{var O,wt,kt;(O=D.current)==null||O.abort(),(wt=K.current)==null||wt.abort(),(kt=ct.current)==null||kt.abort()},[]);async function Ge(O){const wt=Nt.current.project,kt=await Un("/files/"+O+"/preview");Nt.current.project===wt&&(ot(O),mt(kt),jn(kt.sheets[0]||""),jt(""),Ct(""))}async function An(O){const wt=l;await Pn(async()=>{const kt=new FormData;kt.append("project",wt),kt.append("file",O);const de=await Un("/files",kt);Nt.current.project===wt&&(await Le(wt),await Ge(de.id),t("data"),ie("Archivo original conservado. Revisa hoja, columnas y valores faltantes."))})}async function rn(O=L){var wi,sr;if(O=O.trim(),!O||!l)return;if(At.current){ie("La respuesta sigue en curso. Tu nuevo mensaje permanece escrito; envíalo cuando termine o pulsa Detener.");return}if(Lt){ie("Espera a que termine de cargar tu conversación.");return}if(!((wi=h.find(vn=>vn.id===p))!=null&&wi.model)){he("Selecciona un modelo para este agente en Configuración antes de conversar.");return}Ga("waiting"),ie(""),(sr=K.current)==null||sr.abort(),nt(""),he(""),Dt(!0),At.current=!0;const wt=++$.current,kt=rt.current,de=()=>wt===$.current&&kt===rt.current,Oe=crypto.randomUUID(),Xe=crypto.randomUUID(),fn=new AbortController;D.current=fn;const Ci=h.find(vn=>vn.id===p),ar={project:l,agent:p,content:O,run:z||null};bt(vn=>[...vn,{id:Oe,key:Oe,role:"user",content:O,status:"complete"},{id:Xe,key:Xe,role:"assistant",content:"",model:Ci==null?void 0:Ci.model,provider:b,status:"streaming",persisted:!1}]);function Ts(vn){de()&&bt(qn=>qn.map(Gi=>Gi.key===Xe?vn(Gi):Gi))}let uo=!1,ka=!1;try{const vn=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ar),signal:fn.signal});if(!vn.ok){const rr=await vn.json();throw Error(rr.detail||"No se pudo iniciar la conversación")}if(!vn.body)throw Error("El servidor no abrió el flujo de respuesta.");const qn=vn.body.getReader(),Gi=new TextDecoder;let ea="";for(;;){const{done:rr,value:or}=await qn.read();if(rr)break;if(!de()){await qn.cancel();return}ea+=Gi.decode(or,{stream:!0});let ja;for(;(ja=ea.indexOf(`

`))>=0;){const fo=ea.slice(0,ja);if(ea=ea.slice(ja+2),!fo.startsWith("data: "))continue;const qe=JSON.parse(fo.slice(6));if(qe.error)throw Error(qe.error);if((qe.status==="waiting"||qe.status==="generating")&&de()&&Ga(qe.status),typeof qe.token=="string"&&qe.token&&(ka=!0,de()&&Ga("generating"),Ts(Jn=>({...Jn,content:Jn.content+qe.token}))),qe.done){if(!ka)throw Error("El proveedor terminó sin texto.");uo=!0,Ts(Jn=>({...Jn,id:qe.message_id||Jn.id,persisted:!!qe.message_id,status:"complete",model:qe.model||Jn.model,provider:qe.provider||Jn.provider}))}}}if(!uo)throw Error("La conexión terminó antes de confirmar la respuesta. El texto parcial no está guardado como respuesta completa.")}catch(vn){if(de()){const qn=vn.name==="AbortError";Ts(Gi=>({...Gi,status:qn?"cancelled":"error",persisted:!1})),qn?ie("Conversación cancelada. La respuesta parcial no se guarda como completada."):he(vn.message)}}finally{de()&&(Dt(!1),At.current=!1,D.current=null)}}async function _n(O,wt){if(!O.persisted||O.status!=="complete")return;const kt=rt.current;ui(O.id),he("");try{const de=await Un("/feedback",{message_id:O.id,rating:wt,...wt==="correction"?{correction:hi.trim()}:{}});if(kt!==rt.current)return;ma(Oe=>[de,...Oe.filter(Xe=>Xe.message_id!==O.id)]),fi(null),ni(""),ie(wt==="correction"?"Corrección guardada para futuras conversaciones de este agente. Mejora contexto, no reentrena el modelo.":"Valoración guardada.")}catch(de){kt===rt.current&&he(de.message)}finally{kt===rt.current&&ui(null)}}async function Rn(O){const wt=rt.current;ui(O.message_id);try{if(await Un("/feedback/"+O.id,void 0,"DELETE"),wt!==rt.current)return;ma(kt=>kt.filter(de=>de.id!==O.id)),ie("Corrección eliminada de la memoria de este agente.")}catch(kt){wt===rt.current&&he(kt.message)}finally{wt===rt.current&&ui(null)}}function Ai(O,wt){var de,Oe;const kt=(Oe=(de=O.tasks)==null?void 0:de.find(Xe=>{try{return JSON.parse(Xe.payload).id===wt}catch{return!1}}))==null?void 0:Oe.status;return kt&&["Completado","Fallido","Cancelado","Interrumpido"].includes(kt)?kt:_a[O.id+":"+wt]||kt||"Estado no disponible"}async function Ri(O=!1){const wt=l;await Pn(async()=>{let kt={project:wt,request:St||"Analizar las operaciones seleccionadas",file:at||null};O&&(kt.analysis={metric:qt?"ingresos":Rt,group_by:Qt?[Qt]:[],aggregation:Bt,derived:qt?{name:"ingresos",left:oe,right:we,op:"multiply"}:null,filters:Pt?[{column:Pt,op:"eq",value:vt}]:[],sort:"descending",chart:Ne,title:St||"Análisis de datos",unit:zt});const de=await Un(O?"/tools/plan":"/plans",kt);Nt.current.project===wt&&(Ut(de.id),await Le(wt),t("tasks"),ie("Plan preparado. Revisa los argumentos antes de aprobar."))})}const Va=E.jsxs(E.Fragment,{children:[E.jsx("option",{value:"",children:"Seleccionar columna"}),ft==null?void 0:ft.columns.map(O=>E.jsx("option",{children:O.name},O.name))]});return E.jsxs("div",{className:"app",children:[E.jsxs("aside",{className:"sidebar",children:[E.jsx("a",{className:"brandmark",href:"#",onClick:()=>t("office"),"aria-label":"Oficina",children:E.jsx(ph,{size:27})}),E.jsx("div",{className:"nav-items",children:q_.map(([O,wt,kt])=>E.jsxs("button",{title:wt,className:r===O?"nav active":"nav",onClick:()=>t(O),children:[E.jsx(kt,{size:21}),E.jsx("span",{children:wt})]},O))}),E.jsx("button",{className:"sidebar-bottom",onClick:()=>t("settings"),title:"Configuración",children:"AN"})]}),E.jsxs("div",{className:"workspace",children:[E.jsxs("header",{className:"topbar",children:[E.jsxs("div",{className:"wordmark",children:["STUDIO ",E.jsx("span",{children:"DE"})," ANTO",E.jsx("small",{children:"UN ESPACIO PARA CREAR EN EQUIPO"})]}),E.jsx("div",{className:"header-divider"}),E.jsx("select",{className:"project-select",value:l,onChange:O=>Me(O.target.value),"aria-label":"Proyecto activo",children:i.map(O=>E.jsx("option",{value:O.id,children:O.name},O.id))}),E.jsx("span",{className:"local-tag",children:"ESTUDIO"}),E.jsxs("div",{className:"top-right",children:[E.jsxs("button",{className:"connection "+(_?"online":""),onClick:()=>t("settings"),children:[E.jsx("i",{}),_?an+" · API conectada":"Modelo no conectado"]}),E.jsx("span",{className:"avatar small",children:"AN"})]})]}),E.jsxs("main",{children:[Kt&&E.jsxs("div",{role:"alert",className:"alert",children:[E.jsx(FS,{size:17}),E.jsx("span",{children:Kt}),E.jsx("button",{onClick:()=>he(""),"aria-label":"Cerrar error",children:E.jsx(gh,{size:16})})]}),ze&&E.jsxs("div",{role:"status",className:"notice",children:[E.jsx(lS,{size:16}),ze,E.jsx("button",{onClick:()=>ie(""),"aria-label":"Cerrar aviso",children:E.jsx(gh,{size:15})})]}),E.jsxs("div",{className:"page-heading",children:[E.jsxs("div",{children:[E.jsx("div",{className:"eyebrow",children:"TU EQUIPO, EN UN MISMO LUGAR"}),E.jsxs("h1",{children:[(co=q_.find(O=>O[0]===r))==null?void 0:co[1],E.jsx("span",{className:"heading-dot"})]}),E.jsx("p",{children:r==="office"?"Las buenas ideas se construyen juntos. Dale vida a la próxima.":r==="data"?"De los archivos a la evidencia. Tú eliges qué calcular.":r==="tasks"?"Un objetivo compartido, pasos claros y resultados verificables.":r==="settings"?"Tus modelos, tus datos y tu equipo en el entorno que elijas.":r==="projects"?"Un espacio propio para cada idea.":"El trabajo de tu equipo, listo para llevar."})]}),E.jsxs("div",{className:"heading-actions",children:[E.jsxs("button",{className:"button secondary",onClick:()=>{ne(!pe),t("office")},children:[E.jsx(Lg,{size:16}),"Actividad"]}),E.jsxs("button",{className:"button primary",onClick:()=>t("projects"),children:[E.jsx(Tc,{size:17}),"Nuevo proyecto"]})]})]}),r==="office"&&E.jsxs("div",{className:"office-layout "+(k?"":"no-panel"),children:[E.jsxs("section",{className:"office-card",children:[E.jsxs("div",{className:"office-bar",children:[E.jsxs("div",{children:[E.jsx("span",{className:"live-dot"}),"EL ESTUDIO ",E.jsx("span",{className:"subtle",children:"/"}),E.jsx("span",{className:"office-name",children:$t==null?void 0:$t.name})]}),E.jsxs("span",{className:"office-badge",children:["6 agentes · ",Object.values(Te).filter(O=>O==="En ejecución").length," trabajando"]}),E.jsx("button",{className:"icon-button",onClick:()=>ln(!k),title:"Mostrar u ocultar conversación",children:E.jsx(CS,{size:18})})]}),E.jsxs("div",{className:"scene-wrap",children:[h.length===6&&E.jsx(R2,{agents:h,selected:p,onSelect:O=>{Mn(O),ln(!0)},states:Te,reduced:T,zoom:Yt,reset:ht}),E.jsxs("div",{className:"scene-caption",children:[E.jsx("span",{className:"scene-caption-icon",children:E.jsx(mh,{size:16})}),E.jsxs("div",{children:["Espacio para grandes ideas",E.jsx("small",{children:"Selecciona un agente para empezar a colaborar"})]})]}),E.jsxs("div",{className:"scene-controls",children:[E.jsx("button",{title:"Alejar",onClick:()=>De(Math.max(.6,Yt-.1)),children:E.jsx(zg,{size:15})}),E.jsxs("span",{children:[Math.round(Yt*100),"%"]}),E.jsx("button",{title:"Acercar",onClick:()=>De(Math.min(1.8,Yt+.1)),children:E.jsx(Tc,{size:15})}),E.jsx("b",{}),E.jsx("button",{title:"Restablecer vista",onClick:()=>{De(1),w(ht+1)},children:E.jsx(ES,{size:15})})]}),E.jsxs("div",{className:"pan-help",children:[E.jsx(AS,{size:13}),"Arrastra para girar · clic en suelo para mover · rueda para zoom"]})]}),E.jsxs("div",{className:"team-strip",children:[E.jsxs("div",{className:"team-label",children:["EN EL ESTUDIO",E.jsx("small",{children:"Tu equipo de agentes"})]}),h.map(O=>E.jsxs("button",{className:"team-person "+(p===O.id?"chosen":""),onClick:()=>{Mn(O.id),ln(!0)},children:[E.jsxs("span",{className:"agent-avatar",style:{background:O.color+"35",color:O.color},children:[E.jsx("span",{className:"mini-head"}),E.jsx("span",{className:"mini-body"})]}),E.jsxs("span",{children:[E.jsx("strong",{children:O.name}),E.jsx("small",{children:O.role})]}),E.jsx("i",{className:Te[O.id]==="En ejecución"?"working":""})]},O.id))]})]}),k&&E.jsxs("aside",{className:"chat-panel",children:[E.jsxs("div",{className:"panel-title",children:[E.jsx("span",{children:"Conversa con tu equipo"}),E.jsx("button",{onClick:()=>ln(!1),title:"Cerrar conversación",children:E.jsx(gh,{size:17})})]}),E.jsxs("div",{className:"agent-intro",children:[E.jsxs("span",{className:"agent-avatar large",style:{background:((Vt==null?void 0:Vt.color)||"#aaa")+"30",color:Vt==null?void 0:Vt.color},children:[E.jsx("span",{className:"mini-head"}),E.jsx("span",{className:"mini-body"})]}),E.jsxs("div",{children:[E.jsxs("h3",{children:[Vt==null?void 0:Vt.name,E.jsx("span",{className:"role-badge",children:Vt==null?void 0:Vt.role})]}),E.jsxs("p",{children:[E.jsx("i",{className:"live-dot"}),Te[p]||"Disponible"]})]})]}),E.jsxs("div",{className:"model-line",children:[E.jsx(ph,{size:13}),(Vt==null?void 0:Vt.model)||"Sin modelo asignado",E.jsxs("button",{onClick:()=>t("settings"),children:["Configurar",E.jsx(sl,{size:12})]})]}),E.jsxs("div",{className:"chat-body",children:[!Z.length&&E.jsxs("div",{className:"chat-empty",children:[E.jsx("span",{className:"empty-spark",children:E.jsx(mh,{size:27})}),E.jsx("h3",{children:"¿Qué tienes en mente?"}),E.jsxs("p",{children:["Cuéntame tu idea o comparte un archivo.",E.jsx("br",{}),"Daremos el siguiente paso juntos."]}),E.jsx("div",{className:"truth-tag",children:_&&(Vt!=null&&Vt.model)?"Conversación mediante API en la nube":"Conecta un modelo para conversar"}),E.jsx("p",{children:"Conversa, resuelve dudas o pide ayuda para escribir. No necesitas subir un archivo."}),E.jsxs("button",{className:"suggestion",onClick:()=>nt("Hola, ¿en qué puedes ayudarme?"),children:["Empezar una conversación",E.jsx(sl,{size:14})]}),E.jsxs("button",{className:"suggestion",onClick:()=>t("data"),children:["Explorar mis datos",E.jsx(sl,{size:14})]})]}),Lt&&E.jsx("p",{className:"quiet",role:"status",children:"Cargando historial…"}),Z.map(O=>{const wt=Ei.find(kt=>kt.message_id===O.id);return E.jsxs("div",{className:"message "+O.role,children:[E.jsxs("small",{children:[O.role==="user"?"TÚ":Vt==null?void 0:Vt.name,O.model?" · "+O.model:"",O.provider?" · "+O.provider:""]}),E.jsx("p",{children:O.content||(O.status==="streaming"?"Esperando al modelo…":"Sin respuesta recibida")}),O.status==="cancelled"&&E.jsx("small",{children:"Respuesta parcial cancelada · sin guardar"}),O.status==="error"&&E.jsx("small",{children:"Respuesta incompleta o fallida · sin guardar"}),O.role==="assistant"&&O.persisted&&O.status==="complete"&&E.jsxs("div",{className:"feedback-toolbar",children:[E.jsx("button",{className:"button secondary","aria-pressed":(wt==null?void 0:wt.rating)==="useful",disabled:ga===O.id,onClick:()=>_n(O,"useful"),children:"Útil"}),E.jsx("button",{className:"button secondary",disabled:ga===O.id,onClick:()=>{fi(O.id),ni((wt==null?void 0:wt.correction)||"")},children:"Guardar corrección"}),(wt==null?void 0:wt.rating)==="correction"&&E.jsx("small",{children:"Corrección guardada"})]}),ta===O.id&&O.persisted&&E.jsxs("form",{className:"feedback-form",onSubmit:kt=>{kt.preventDefault(),_n(O,"correction")},children:[E.jsxs("label",{children:["Corrección para la respuesta",E.jsx("textarea",{"aria-label":"Corrección para la respuesta",value:hi,onChange:kt=>ni(kt.target.value),minLength:3,maxLength:2e3,required:!0,placeholder:"Escribe la información correcta que debe recordar este agente…"})]}),E.jsx("p",{children:"Se usará como contexto del mismo proyecto y agente. No reentrena el modelo."}),E.jsxs("div",{children:[E.jsx("button",{className:"button primary",disabled:ga===O.id||hi.trim().length<3,children:"Confirmar corrección"}),E.jsx("button",{className:"button secondary",type:"button",onClick:()=>fi(null),children:"Cancelar"})]})]})]},O.key||O.id)}),E.jsxs("details",{className:"feedback-memory",children:[E.jsxs("summary",{children:["Correcciones guardadas (",Ei.filter(O=>O.rating==="correction").length,")"]}),E.jsx("p",{children:"Mejora contexto, no reentrena el modelo. Puedes revisar y eliminar cada corrección."}),Ei.filter(O=>O.rating==="correction").map(O=>E.jsxs("div",{className:"feedback-entry",children:[E.jsx("p",{children:O.correction}),E.jsx("button",{className:"button secondary",disabled:ga===O.message_id,onClick:()=>Rn(O),children:"Eliminar corrección"})]},O.id)),!Ei.some(O=>O.rating==="correction")&&E.jsx("p",{children:"Aún no hay correcciones guardadas para este agente y proyecto."})]}),E.jsx("div",{ref:Xt})]}),E.jsxs("div",{className:"chat-compose",children:[xt&&E.jsxs("div",{className:"chat-progress",children:[E.jsx(Pg,{size:14,className:"spin"}),E.jsx("span",{role:"status",children:un==="generating"?"Recibiendo respuesta…":"Esperando respuesta del modelo…"}),E.jsxs("time",{"aria-label":"Tiempo transcurrido",children:[Math.floor(bs/60),":",String(bs%60).padStart(2,"0")]})]}),q.length>0&&E.jsxs("select",{value:z,onChange:O=>Ut(O.target.value),"aria-label":"Contexto de ejecución",children:[E.jsx("option",{value:"",children:"Sin contexto de ejecución"}),q.map(O=>E.jsx("option",{value:O.id,children:O.request.slice(0,40)},O.id))]}),E.jsx("textarea",{value:L,maxLength:12e3,onChange:O=>nt(O.target.value),placeholder:"Pregunta o pide algo a "+((Vt==null?void 0:Vt.name)||"tu equipo")+"…","aria-label":"Mensaje",onKeyDown:O=>{O.key==="Enter"&&!O.shiftKey&&(O.preventDefault(),rn())}}),E.jsxs("div",{className:"compose-tools",children:[E.jsxs("label",{title:"Subir CSV o Excel",children:[E.jsx(Tc,{size:18}),E.jsx("input",{type:"file",accept:".csv,.xlsx",onChange:O=>{var wt;return((wt=O.target.files)==null?void 0:wt[0])&&An(O.target.files[0])}})]}),E.jsx("span",{children:"Enter para enviar · Shift+Enter para otra línea"}),xt?E.jsx("button",{className:"send",title:"Cancelar conversación",onClick:()=>ee(!0),children:E.jsx(Bg,{size:14})}):E.jsx("button",{className:"send",title:"Enviar",disabled:!L.trim()||Lt,onClick:()=>rn(),children:E.jsx(nS,{size:18})})]}),E.jsx("p",{className:"conversation-hint",children:"El historial se conserva por proyecto y agente; la respuesta usa el contexto reciente."}),E.jsxs("button",{className:"retry",onClick:()=>rn("Continúa desde tu respuesta anterior sin repetirla. Si ya terminaste, propón un siguiente paso útil para mi solicitud."),disabled:xt||Lt||!ve,children:[E.jsx(Ig,{size:11}),"Continuar conversación"]}),E.jsxs("button",{className:"retry",onClick:()=>{const O=[...Z].reverse().find(wt=>wt.role==="user");O&&rn(O.content)},disabled:xt||Lt||!Z.some(O=>O.role==="user"),children:[E.jsx(Q_,{size:11}),"Reintentar último mensaje"]})]}),E.jsxs("div",{className:"privacy",children:[E.jsx(yS,{size:12}),"IA en la nube · cuotas del proveedor."]})]}),pe&&E.jsxs("section",{className:"activity-panel",children:[E.jsxs("div",{className:"activity-title",children:[E.jsx(Lg,{size:15}),E.jsx("strong",{children:"Actividad del equipo"}),E.jsx("span",{children:"EN VIVO"}),E.jsx("button",{onClick:()=>ne(!1),title:"Ocultar actividad",children:E.jsx(zg,{size:16})})]}),E.jsx("div",{className:"activity-entries",children:F.length?F.slice(-4).reverse().map(O=>{var kt;const wt=JSON.parse(O.payload);return E.jsxs("div",{children:[E.jsx("span",{className:"event-dot"}),E.jsx("time",{children:new Date(O.created).toLocaleTimeString("es-PE",{hour:"2-digit",minute:"2-digit"})}),E.jsx("strong",{children:((kt=O.agent)==null?void 0:kt.toUpperCase())||"ESTUDIO"}),E.jsxs("span",{children:[wt.task||wt.objective||wt.name||wt.message||"Conversación",wt.status?" · "+wt.status:""]})]},O.seq)}):E.jsx("p",{className:"quiet",children:"Aquí aparecerán las tareas y resultados reales de tu equipo."})})]})]}),r==="projects"&&E.jsxs("section",{className:"content-card",children:[E.jsxs("div",{className:"section-title",children:[E.jsx("h2",{children:"Tus proyectos"}),E.jsx(K_,{size:20})]}),E.jsxs("form",{className:"new-project",onSubmit:O=>{O.preventDefault(),Pn(async()=>{const wt=await Un("/projects",{name:pt});s([...i,wt]),Me(wt.id),Et(""),t("office")})},children:[E.jsx("input",{placeholder:"Nombre de tu próximo proyecto",value:pt,onChange:O=>Et(O.target.value),maxLength:120,required:!0}),E.jsxs("button",{className:"button primary",disabled:tt,children:[E.jsx(Tc,{size:16}),"Crear proyecto"]})]}),E.jsx("div",{className:"project-grid",children:i.map(O=>E.jsxs("button",{className:"project-card "+(O.id===l?"current":""),onClick:()=>{Me(O.id),t("office")},children:[E.jsx("span",{className:"project-art",children:E.jsx(ph,{size:42})}),E.jsx("h3",{children:O.name}),E.jsx("p",{children:O.id===l?"Proyecto activo":"Abrir espacio de trabajo"}),E.jsx(sl,{size:19})]},O.id))})]}),r==="data"&&E.jsxs("div",{className:"data-layout",children:[E.jsxs("section",{className:"content-card",children:[E.jsxs("div",{className:"section-title",children:[E.jsx("h2",{children:"Biblioteca de datos"}),E.jsx("span",{children:"CSV · XLSX · hasta 20 MB"})]}),E.jsxs("label",{className:"dropzone",children:[E.jsx(IS,{size:26}),E.jsx("strong",{children:"Trae tus datos al estudio"}),E.jsx("span",{children:"Selecciona un archivo CSV o Excel"}),E.jsx("input",{type:"file",accept:".csv,.xlsx",disabled:tt,onChange:O=>{var wt;return((wt=O.target.files)==null?void 0:wt[0])&&An(O.target.files[0])}})]}),E.jsx("div",{className:"file-list",children:C.map(O=>E.jsxs("button",{className:at===O.id?"selected":"",onClick:()=>Pn(()=>Ge(O.id)),children:[E.jsx(Og,{size:18}),O.name,E.jsx(rS,{size:16})]},O.id))}),at&&E.jsxs("div",{className:"import-options",children:[ft!=null&&ft.sheets.length?E.jsxs("label",{children:["Hoja",E.jsx("select",{value:Ue,onChange:O=>jn(O.target.value),children:ft.sheets.map(O=>E.jsx("option",{children:O},O))})]}):E.jsxs(E.Fragment,{children:[E.jsxs("label",{children:["Separador",E.jsxs("select",{value:mn,onChange:O=>gn(O.target.value),children:[E.jsx("option",{value:",",children:"Coma"}),E.jsx("option",{value:";",children:"Punto y coma"}),E.jsx("option",{value:"	",children:"Tabulación"}),E.jsx("option",{value:"|",children:"Barra"})]})]}),E.jsxs("label",{children:["Codificación",E.jsx("select",{value:Sn,onChange:O=>Xn(O.target.value),children:["utf-8-sig","utf-8","latin-1","cp1252"].map(O=>E.jsx("option",{children:O},O))})]})]}),E.jsx("button",{className:"button secondary",onClick:()=>Pn(async()=>{const O=await Un("/files/"+at+"/options",{sheet:Ue||null,separator:mn,encoding:Sn},"PUT");mt({...O,sheets:(ft==null?void 0:ft.sheets)||[]})}),children:"Aplicar lectura"})]}),ft&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"data-stats",children:[E.jsxs("span",{children:[E.jsx("strong",{children:ft.rows}),"filas"]}),E.jsxs("span",{children:[E.jsx("strong",{children:ft.columns.length}),"columnas"]}),E.jsxs("span",{children:[E.jsx("strong",{children:ft.duplicates}),"duplicados conservados"]}),E.jsxs("span",{children:[E.jsx("strong",{children:ft.columns.reduce((O,wt)=>O+wt.missing,0)}),"valores faltantes"]})]}),E.jsx("div",{className:"table-scroll",children:E.jsxs("table",{children:[E.jsx("thead",{children:E.jsx("tr",{children:ft.columns.map(O=>E.jsxs("th",{children:[O.name,E.jsxs("small",{children:[O.type," · ",O.missing," faltantes"]})]},O.name))})}),E.jsx("tbody",{children:ft.preview.map((O,wt)=>E.jsx("tr",{children:ft.columns.map(kt=>E.jsx("td",{children:O[kt.name]===null?E.jsx("em",{children:"Vacío"}):String(O[kt.name])},kt.name))},wt))})]})}),E.jsx("p",{className:"caption",children:"Vista previa de hasta 12 filas. El original permanece intacto."})]})]}),E.jsxs("section",{className:"content-card tool-card",children:[E.jsx("div",{className:"eyebrow",children:"SIN MODELO NECESARIO"}),E.jsx("h2",{children:"Modo herramientas"}),E.jsx("p",{className:"muted",children:"Operaciones explícitas, números calculados por Python y revisión independiente."}),E.jsxs("label",{children:["Objetivo",E.jsx("textarea",{value:St,onChange:O=>Tt(O.target.value),placeholder:"¿Qué quieres analizar?"})]}),E.jsxs("label",{children:["Agrupar por",E.jsx("select",{"aria-label":"Agrupar por",value:Qt,onChange:O=>Ct(O.target.value),children:Va})]}),E.jsxs("label",{className:"checkbox",children:[E.jsx("input",{type:"checkbox",checked:qt,onChange:O=>Ht(O.target.checked)}),"Calcular ingresos = cantidad × precio"]}),qt?E.jsxs("div",{className:"two-col",children:[E.jsxs("label",{children:["Cantidad",E.jsx("select",{"aria-label":"Cantidad",value:oe,onChange:O=>ae(O.target.value),children:Va})]}),E.jsxs("label",{children:["Precio",E.jsx("select",{"aria-label":"Precio",value:we,onChange:O=>X(O.target.value),children:Va})]})]}):E.jsxs("label",{children:["Métrica",E.jsx("select",{"aria-label":"Métrica",value:Rt,onChange:O=>jt(O.target.value),children:Va})]}),E.jsxs("div",{className:"two-col",children:[E.jsxs("label",{children:["Operación",E.jsx("select",{value:Bt,onChange:O=>Jt(O.target.value),children:[["sum","Suma"],["mean","Media"],["median","Mediana"],["min","Mínimo"],["max","Máximo"],["count","Conteo"]].map(([O,wt])=>E.jsx("option",{value:O,children:wt},O))})]}),E.jsxs("label",{children:["Unidad",E.jsx("input",{value:zt,onChange:O=>le(O.target.value)})]})]}),E.jsxs("label",{children:["Filtro opcional · columna",E.jsx("select",{value:Pt,onChange:O=>dt(O.target.value),children:Va})]}),Pt&&E.jsxs("label",{children:["Igual a",E.jsx("input",{value:vt,onChange:O=>Ft(O.target.value)})]}),E.jsxs("label",{children:["Gráfico",E.jsxs("select",{value:Ne,onChange:O=>$e(O.target.value),children:[E.jsx("option",{value:"bar",children:"Barras"}),E.jsx("option",{value:"line",children:"Líneas (confirma orden temporal)"}),E.jsx("option",{value:"none",children:"Sin gráfico"})]})]}),E.jsxs("button",{className:"button primary full",disabled:tt||!at||!qt&&!Rt||qt&&(!oe||!we),onClick:()=>Ri(!0),children:[E.jsx(Ig,{size:15}),"Preparar plan de cálculo"]}),E.jsx("p",{className:"caption",children:"No es inferencia de IA. Revisa definición, filtros y unidades antes de aprobar."})]})]}),r==="tasks"&&E.jsxs("div",{className:"tasks-layout",children:[E.jsxs("section",{className:"content-card",children:[E.jsxs("div",{className:"section-title",children:[E.jsx("h2",{children:"Un nuevo objetivo"}),E.jsx("span",{className:"pill",children:"ATLAS · Coordinación"})]}),E.jsx("textarea",{className:"goal-input",placeholder:"Compara ingresos por producto y región, identifica faltantes y prepara un informe…",value:St,onChange:O=>Tt(O.target.value)}),E.jsxs("div",{className:"plan-bottom",children:[E.jsxs("select",{value:at,onChange:O=>ot(O.target.value),children:[E.jsx("option",{value:"",children:"Sin archivo · organizar proyecto"}),C.map(O=>E.jsx("option",{value:O.id,children:O.name},O.id))]}),E.jsxs("button",{className:"button primary",disabled:tt||St.length<3,onClick:()=>Ri(),children:[tt?E.jsx(Pg,{className:"spin",size:16}):E.jsx(mh,{size:16}),"Proponer plan con API"]})]}),E.jsx("p",{className:"caption",children:"El plan usa el modelo asignado a ATLAS. Sin conexión, puedes usar los controles de Datos."})]}),E.jsxs("section",{className:"content-card",children:[E.jsx("h2",{children:"Planes y ejecuciones"}),!q.length&&E.jsxs("div",{className:"empty-state",children:[E.jsx(Yh,{size:35}),E.jsx("h3",{children:"Tu próximo objetivo empieza aquí"}),E.jsx("p",{children:"Describe una tarea o prepara un cálculo desde Datos."})]}),q.map(O=>{const wt=JSON.parse(O.plan);return E.jsxs("article",{className:"run-card",children:[E.jsxs("div",{className:"run-head",children:[E.jsx("h3",{children:O.request}),E.jsx("span",{className:"status "+(O.status==="Completado"?"success":""),children:O.status})]}),E.jsxs("small",{children:["Ejecución ",O.id.slice(0,10)," · ",wt.mode==="tools"?"Modo herramientas · sin inferencia":"Plan propuesto mediante API"]}),wt.clarification&&E.jsxs("p",{className:"clarification",children:["Se necesita aclaración: ",wt.clarification]}),E.jsx("div",{className:"task-chain",children:wt.tasks.map(kt=>{var de;return E.jsxs("div",{children:[E.jsx("span",{className:"task-agent",style:{background:((de=h.find(Oe=>Oe.id===kt.agent))==null?void 0:de.color)+"30"},children:kt.agent.toUpperCase()}),E.jsxs("p",{children:[kt.description,E.jsx("small",{children:kt.depends_on.length?"Después de "+kt.depends_on.join(", "):"Sin dependencias"}),E.jsx("span",{className:"task-current-status",children:Ai(O,kt.id)})]})]},kt.id)})}),wt.analysis&&E.jsxs("details",{children:[E.jsx("summary",{children:"Operaciones y criterios aprobables"}),E.jsx("pre",{children:JSON.stringify(wt,null,2)})]}),E.jsxs("div",{className:"run-actions",children:[O.status==="Espera aprobación"&&E.jsxs("button",{className:"button primary",disabled:tt,onClick:()=>Pn(async()=>{await Un("/runs/"+O.id+"/approve",{}),await Le()}),children:[E.jsx(Y_,{size:15}),"Aprobar y ejecutar"]}),!["Completado","Fallido","Cancelado","Interrumpido"].includes(O.status)&&E.jsxs("button",{className:"button secondary",onClick:()=>Pn(async()=>{await Un("/runs/"+O.id+"/cancel",{}),await Le()}),children:[E.jsx(Bg,{size:14}),"Cancelar"]}),E.jsx("button",{className:"button secondary",onClick:()=>{Ut(O.id),Mn("bruno"),t("office"),ln(!0)},children:"Consultar a BRUNO"}),E.jsx("button",{className:"button secondary",disabled:tt||!St,onClick:()=>Pn(async()=>{await Un("/runs/"+O.id+"/correction",{name:St.slice(0,120)}),await Le()}),children:"Solicitar corrección"})]}),O.result&&E.jsxs("div",{className:"result-summary "+(O.status==="Completado"?"":"provisional"),children:[O.status!=="Completado"&&E.jsxs("p",{children:[E.jsxs("strong",{children:["Resultado provisional · ejecución ",O.status.toLowerCase(),"."]})," Las cifras conservadas no constituyen un entregable aprobado."]}),"Estadístico: ",E.jsx("strong",{children:JSON.parse(O.result).total})," · ",JSON.parse(O.result).rows_after," filas analizadas"]})]},O.id)})]})]}),r==="deliverables"&&E.jsxs("section",{className:"content-card",children:[E.jsxs("div",{className:"section-title",children:[E.jsx("h2",{children:"Resultados con evidencia"}),E.jsxs("span",{children:[B.length," archivos generados"]})]}),B.length?E.jsx("div",{className:"artifact-grid",children:B.map(O=>E.jsxs("a",{className:"artifact",href:"/api/artifacts/"+O.id,download:!0,children:[E.jsx("span",{className:"artifact-icon",children:O.name.endsWith(".png")?E.jsx(Yh,{}):E.jsx(Og,{})}),E.jsxs("div",{children:[E.jsx("strong",{children:O.name}),E.jsxs("small",{children:["Ejecución ",O.run.slice(0,10)," · versión 1"]})]}),E.jsx(hS,{size:17})]},O.id))}):E.jsxs("div",{className:"empty-state",children:[E.jsx(Z_,{size:40}),E.jsx("h3",{children:"Tus entregables tendrán su lugar aquí"}),E.jsx("p",{children:"Ejecuta y verifica un análisis para generar tablas, gráficos e informes."}),E.jsxs("button",{className:"button secondary",onClick:()=>t("data"),children:["Ir a Datos",E.jsx(sl,{size:15})]})]})]}),r==="settings"&&E.jsx(C2,{agents:h,provider:b,ollama:y,openai:v,onSaved:Se,status:I,onStatus:ye,reduced:T,onReduced:Y,onNotice:ie,onError:he})]}),E.jsxs("footer",{className:"app-footer",children:[E.jsxs("span",{children:[E.jsx("span",{className:"live-dot"}),"Tu estudio · datos en el servidor"]}),E.jsxs("span",{children:["Hecho para pensar, crear y colaborar.",E.jsx("span",{className:"footer-star",children:"✧"})]}),E.jsxs("span",{children:["STUDIO DE ANTO ",E.jsx("span",{className:"version",children:"v1.1 · 3D"})]})]})]})]})}Xy.createRoot(document.getElementById("root")).render(E.jsx(By.StrictMode,{children:E.jsx(w2,{})}));
