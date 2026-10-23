var Oy=Object.defineProperty;var Py=(r,t,i)=>t in r?Oy(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var Ci=(r,t,i)=>Py(r,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function zy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var lh={exports:{}},Jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function Iy(){if(bg)return Jo;bg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Jo.Fragment=t,Jo.jsx=i,Jo.jsxs=i,Jo}var Tg;function By(){return Tg||(Tg=1,lh.exports=Iy()),lh.exports}var E=By(),ch={exports:{}},_e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function Fy(){if(Ag)return _e;Ag=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=x&&P[x]||P["@@iterator"],typeof P=="function"?P:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,w={};function v(P,nt,St){this.props=P,this.context=nt,this.refs=w,this.updater=St||S}v.prototype.isReactComponent={},v.prototype.setState=function(P,nt){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,nt,"setState")},v.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function g(){}g.prototype=v.prototype;function I(P,nt,St){this.props=P,this.context=nt,this.refs=w,this.updater=St||S}var L=I.prototype=new g;L.constructor=I,b(L,v.prototype),L.isPureReactComponent=!0;var U=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function G(P,nt,St,Rt,tt,gt){return St=gt.ref,{$$typeof:r,type:P,key:nt,ref:St!==void 0?St:null,props:gt}}function q(P,nt){return G(P.type,nt,void 0,void 0,void 0,P.props)}function N(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function R(P){var nt={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(St){return nt[St]})}var j=/\/+/g;function at(P,nt){return typeof P=="object"&&P!==null&&P.key!=null?R(""+P.key):nt.toString(36)}function rt(){}function ft(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(rt,rt):(P.status="pending",P.then(function(nt){P.status==="pending"&&(P.status="fulfilled",P.value=nt)},function(nt){P.status==="pending"&&(P.status="rejected",P.reason=nt)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function mt(P,nt,St,Rt,tt){var gt=typeof P;(gt==="undefined"||gt==="boolean")&&(P=null);var Mt=!1;if(P===null)Mt=!0;else switch(gt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(P.$$typeof){case r:case t:Mt=!0;break;case _:return Mt=P._init,mt(Mt(P._payload),nt,St,Rt,tt)}}if(Mt)return tt=tt(P),Mt=Rt===""?"."+at(P,0):Rt,U(tt)?(St="",Mt!=null&&(St=Mt.replace(j,"$&/")+"/"),mt(tt,nt,St,"",function(ue){return ue})):tt!=null&&(N(tt)&&(tt=q(tt,St+(tt.key==null||P&&P.key===tt.key?"":(""+tt.key).replace(j,"$&/")+"/")+Mt)),nt.push(tt)),1;Mt=0;var Dt=Rt===""?".":Rt+":";if(U(P))for(var Lt=0;Lt<P.length;Lt++)Rt=P[Lt],gt=Dt+at(Rt,Lt),Mt+=mt(Rt,nt,St,gt,tt);else if(Lt=y(P),typeof Lt=="function")for(P=Lt.call(P),Lt=0;!(Rt=P.next()).done;)Rt=Rt.value,gt=Dt+at(Rt,Lt++),Mt+=mt(Rt,nt,St,gt,tt);else if(gt==="object"){if(typeof P.then=="function")return mt(ft(P),nt,St,Rt,tt);throw nt=String(P),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function F(P,nt,St){if(P==null)return P;var Rt=[],tt=0;return mt(P,Rt,"","",function(gt){return nt.call(St,gt,tt++)}),Rt}function Q(P){if(P._status===-1){var nt=P._result;nt=nt(),nt.then(function(St){(P._status===0||P._status===-1)&&(P._status=1,P._result=St)},function(St){(P._status===0||P._status===-1)&&(P._status=2,P._result=St)}),P._status===-1&&(P._status=0,P._result=nt)}if(P._status===1)return P._result.default;throw P._result}var Z=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function At(){}return _e.Children={map:F,forEach:function(P,nt,St){F(P,function(){nt.apply(this,arguments)},St)},count:function(P){var nt=0;return F(P,function(){nt++}),nt},toArray:function(P){return F(P,function(nt){return nt})||[]},only:function(P){if(!N(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},_e.Component=v,_e.Fragment=i,_e.Profiler=l,_e.PureComponent=I,_e.StrictMode=s,_e.Suspense=p,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,_e.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},_e.cache=function(P){return function(){return P.apply(null,arguments)}},_e.cloneElement=function(P,nt,St){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Rt=b({},P.props),tt=P.key,gt=void 0;if(nt!=null)for(Mt in nt.ref!==void 0&&(gt=void 0),nt.key!==void 0&&(tt=""+nt.key),nt)!H.call(nt,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&nt.ref===void 0||(Rt[Mt]=nt[Mt]);var Mt=arguments.length-2;if(Mt===1)Rt.children=St;else if(1<Mt){for(var Dt=Array(Mt),Lt=0;Lt<Mt;Lt++)Dt[Lt]=arguments[Lt+2];Rt.children=Dt}return G(P.type,tt,void 0,void 0,gt,Rt)},_e.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},_e.createElement=function(P,nt,St){var Rt,tt={},gt=null;if(nt!=null)for(Rt in nt.key!==void 0&&(gt=""+nt.key),nt)H.call(nt,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(tt[Rt]=nt[Rt]);var Mt=arguments.length-2;if(Mt===1)tt.children=St;else if(1<Mt){for(var Dt=Array(Mt),Lt=0;Lt<Mt;Lt++)Dt[Lt]=arguments[Lt+2];tt.children=Dt}if(P&&P.defaultProps)for(Rt in Mt=P.defaultProps,Mt)tt[Rt]===void 0&&(tt[Rt]=Mt[Rt]);return G(P,gt,void 0,void 0,null,tt)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(P){return{$$typeof:d,render:P}},_e.isValidElement=N,_e.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:Q}},_e.memo=function(P,nt){return{$$typeof:m,type:P,compare:nt===void 0?null:nt}},_e.startTransition=function(P){var nt=B.T,St={};B.T=St;try{var Rt=P(),tt=B.S;tt!==null&&tt(St,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(At,Z)}catch(gt){Z(gt)}finally{B.T=nt}},_e.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},_e.use=function(P){return B.H.use(P)},_e.useActionState=function(P,nt,St){return B.H.useActionState(P,nt,St)},_e.useCallback=function(P,nt){return B.H.useCallback(P,nt)},_e.useContext=function(P){return B.H.useContext(P)},_e.useDebugValue=function(){},_e.useDeferredValue=function(P,nt){return B.H.useDeferredValue(P,nt)},_e.useEffect=function(P,nt,St){var Rt=B.H;if(typeof St=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Rt.useEffect(P,nt)},_e.useId=function(){return B.H.useId()},_e.useImperativeHandle=function(P,nt,St){return B.H.useImperativeHandle(P,nt,St)},_e.useInsertionEffect=function(P,nt){return B.H.useInsertionEffect(P,nt)},_e.useLayoutEffect=function(P,nt){return B.H.useLayoutEffect(P,nt)},_e.useMemo=function(P,nt){return B.H.useMemo(P,nt)},_e.useOptimistic=function(P,nt){return B.H.useOptimistic(P,nt)},_e.useReducer=function(P,nt,St){return B.H.useReducer(P,nt,St)},_e.useRef=function(P){return B.H.useRef(P)},_e.useState=function(P){return B.H.useState(P)},_e.useSyncExternalStore=function(P,nt,St){return B.H.useSyncExternalStore(P,nt,St)},_e.useTransition=function(){return B.H.useTransition()},_e.version="19.1.0",_e}var Rg;function Id(){return Rg||(Rg=1,ch.exports=Fy()),ch.exports}var Nt=Id();const Hy=zy(Nt);var uh={exports:{}},$o={},fh={exports:{}},hh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function Gy(){return Cg||(Cg=1,(function(r){function t(F,Q){var Z=F.length;F.push(Q);t:for(;0<Z;){var At=Z-1>>>1,P=F[At];if(0<l(P,Q))F[At]=Q,F[Z]=P,Z=At;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var Q=F[0],Z=F.pop();if(Z!==Q){F[0]=Z;t:for(var At=0,P=F.length,nt=P>>>1;At<nt;){var St=2*(At+1)-1,Rt=F[St],tt=St+1,gt=F[tt];if(0>l(Rt,Z))tt<P&&0>l(gt,Rt)?(F[At]=gt,F[tt]=Z,At=tt):(F[At]=Rt,F[St]=Z,At=St);else if(tt<P&&0>l(gt,Z))F[At]=gt,F[tt]=Z,At=tt;else break t}}return Q}function l(F,Q){var Z=F.sortIndex-Q.sortIndex;return Z!==0?Z:F.id-Q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var p=[],m=[],_=1,x=null,y=3,S=!1,b=!1,w=!1,v=!1,g=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(F){for(var Q=i(m);Q!==null;){if(Q.callback===null)s(m);else if(Q.startTime<=F)s(m),Q.sortIndex=Q.expirationTime,t(p,Q);else break;Q=i(m)}}function B(F){if(w=!1,U(F),!b)if(i(p)!==null)b=!0,H||(H=!0,at());else{var Q=i(m);Q!==null&&mt(B,Q.startTime-F)}}var H=!1,G=-1,q=5,N=-1;function R(){return v?!0:!(r.unstable_now()-N<q)}function j(){if(v=!1,H){var F=r.unstable_now();N=F;var Q=!0;try{t:{b=!1,w&&(w=!1,I(G),G=-1),S=!0;var Z=y;try{e:{for(U(F),x=i(p);x!==null&&!(x.expirationTime>F&&R());){var At=x.callback;if(typeof At=="function"){x.callback=null,y=x.priorityLevel;var P=At(x.expirationTime<=F);if(F=r.unstable_now(),typeof P=="function"){x.callback=P,U(F),Q=!0;break e}x===i(p)&&s(p),U(F)}else s(p);x=i(p)}if(x!==null)Q=!0;else{var nt=i(m);nt!==null&&mt(B,nt.startTime-F),Q=!1}}break t}finally{x=null,y=Z,S=!1}Q=void 0}}finally{Q?at():H=!1}}}var at;if(typeof L=="function")at=function(){L(j)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ft=rt.port2;rt.port1.onmessage=j,at=function(){ft.postMessage(null)}}else at=function(){g(j,0)};function mt(F,Q){G=g(function(){F(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(F){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var Z=y;y=Q;try{return F()}finally{y=Z}},r.unstable_requestPaint=function(){v=!0},r.unstable_runWithPriority=function(F,Q){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Z=y;y=F;try{return Q()}finally{y=Z}},r.unstable_scheduleCallback=function(F,Q,Z){var At=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?At+Z:At):Z=At,F){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=Z+P,F={id:_++,callback:Q,priorityLevel:F,startTime:Z,expirationTime:P,sortIndex:-1},Z>At?(F.sortIndex=Z,t(m,F),i(p)===null&&F===i(m)&&(w?(I(G),G=-1):w=!0,mt(B,Z-At))):(F.sortIndex=P,t(p,F),b||S||(b=!0,H||(H=!0,at()))),F},r.unstable_shouldYield=R,r.unstable_wrapCallback=function(F){var Q=y;return function(){var Z=y;y=Q;try{return F.apply(this,arguments)}finally{y=Z}}}})(hh)),hh}var wg;function Vy(){return wg||(wg=1,fh.exports=Gy()),fh.exports}var dh={exports:{}},Xn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function ky(){if(Dg)return Xn;Dg=1;var r=Id();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:p,containerInfo:m,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Xn.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,_)},Xn.flushSync=function(p){var m=h.T,_=s.p;try{if(h.T=null,s.p=2,p)return p()}finally{h.T=m,s.p=_,s.d.f()}},Xn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Xn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Xn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,x=d(_,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:S}):_==="script"&&s.d.X(p,{crossOrigin:x,integrity:y,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Xn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Xn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,x=d(_,m.crossOrigin);s.d.L(p,_,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Xn.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=d(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Xn.requestFormReset=function(p){s.d.r(p)},Xn.unstable_batchedUpdates=function(p,m){return p(m)},Xn.useFormState=function(p,m,_){return h.H.useFormState(p,m,_)},Xn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Xn.version="19.1.0",Xn}var Ug;function jy(){if(Ug)return dh.exports;Ug=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),dh.exports=ky(),dh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function Xy(){if(Ng)return $o;Ng=1;var r=Vy(),t=Id(),i=jy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===o)return d(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var M=!1,A=u.child;A;){if(A===a){M=!0,a=u,o=f;break}if(A===o){M=!0,o=u,a=f;break}A=A.sibling}if(!M){for(A=f.child;A;){if(A===a){M=!0,a=f,o=u;break}if(A===o){M=!0,o=f,a=u;break}A=A.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function at(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case v:return"Profiler";case w:return"StrictMode";case B:return"Suspense";case H:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case L:return(e.displayName||"Context")+".Provider";case I:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case q:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var mt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},At=[],P=-1;function nt(e){return{current:e}}function St(e){0>P||(e.current=At[P],At[P]=null,P--)}function Rt(e,n){P++,At[P]=e.current,e.current=n}var tt=nt(null),gt=nt(null),Mt=nt(null),Dt=nt(null);function Lt(e,n){switch(Rt(Mt,n),Rt(gt,e),Rt(tt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?J0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=J0(n),e=$0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}St(tt),Rt(tt,e)}function ue(){St(tt),St(gt),St(Mt)}function Zt(e){e.memoizedState!==null&&Rt(Dt,e);var n=tt.current,a=$0(n,e.type);n!==a&&(Rt(gt,e),Rt(tt,a))}function pe(e){gt.current===e&&(St(tt),St(gt)),Dt.current===e&&(St(Dt),Wo._currentValue=Z)}var Oe=Object.prototype.hasOwnProperty,se=r.unstable_scheduleCallback,k=r.unstable_cancelCallback,ln=r.unstable_shouldYield,ge=r.unstable_requestPaint,ee=r.unstable_now,Wt=r.unstable_getCurrentPriorityLevel,De=r.unstable_ImmediatePriority,ht=r.unstable_UserBlockingPriority,C=r.unstable_NormalPriority,T=r.unstable_LowPriority,Y=r.unstable_IdlePriority,pt=r.log,bt=r.unstable_setDisableYieldValue,z=null,Ut=null;function Ct(e){if(typeof pt=="function"&&bt(e),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(z,e)}catch{}}var kt=Math.clz32?Math.clz32:Ft,Kt=Math.log,wt=Math.LN2;function Ft(e){return e>>>=0,e===0?32:31-(Kt(e)/wt|0)|0}var Qt=256,Xt=4194304;function Gt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function oe(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Gt(o):(M&=A,M!==0?u=Gt(M):a||(a=A&~e,a!==0&&(u=Gt(a))))):(A=o&~f,A!==0?u=Gt(A):M!==0?u=Gt(M):a||(a=o&~e,a!==0&&(u=Gt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function ne(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ce(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Qt;return Qt<<=1,(Qt&4194048)===0&&(Qt=256),e}function Ot(){var e=Xt;return Xt<<=1,(Xt&62914560)===0&&(Xt=4194304),e}function dt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function vt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ht(e,n,a,o,u,f){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,V=e.expirationTimes,st=e.hiddenUpdates;for(a=M&~a;0<a;){var _t=31-kt(a),Et=1<<_t;A[_t]=0,V[_t]=-1;var lt=st[_t];if(lt!==null)for(st[_t]=null,_t=0;_t<lt.length;_t++){var ut=lt[_t];ut!==null&&(ut.lane&=-536870913)}a&=~Et}o!==0&&It(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(M&~n))}function It(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-kt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function le(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-kt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ne(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $e(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ue(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:vg(e.type))}function Vn(e,n){var a=Q.p;try{return Q.p=e,n()}finally{Q.p=a}}var mn=Math.random().toString(36).slice(2),gn="__reactFiber$"+mn,xn="__reactProps$"+mn,kn="__reactContainer$"+mn,yi="__reactEvents$"+mn,fa="__reactListeners$"+mn,ha="__reactHandles$"+mn,oi="__reactResources$"+mn,Ki="__reactMarker$"+mn;function li(e){delete e[gn],delete e[xn],delete e[yi],delete e[fa],delete e[ha]}function ci(e){var n=e[gn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[kn]||a[gn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=ig(e);e!==null;){if(a=e[gn])return a;e=ig(e)}return n}e=a,a=e.parentNode}return null}function Jn(e){if(e=e[gn]||e[kn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function da(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ui(e){var n=e[oi];return n||(n=e[oi]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(e){e[Ki]=!0}var Ni=new Set,pa={};function sn(e,n){D(e,n),D(e+"Capture",n)}function D(e,n){for(pa[e]=n,e=0;e<n.length;e++)Ni.add(n[e])}var K=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ct={},ot={};function $(e){return Oe.call(ot,e)?!0:Oe.call(ct,e)?!1:K.test(e)?ot[e]=!0:(ct[e]=!0,!1)}function xt(e,n,a){if($(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Pt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Bt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var jt,ie;function $t(e){if(jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);jt=n&&n[1]||"",ie=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+e+ie}var Yt=!1;function xe(e,n){if(!e||Yt)return"";Yt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Et=function(){throw Error()};if(Object.defineProperty(Et.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Et,[])}catch(ut){var lt=ut}Reflect.construct(e,[],Et)}else{try{Et.call()}catch(ut){lt=ut}e.call(Et.prototype)}}else{try{throw Error()}catch(ut){lt=ut}(Et=e())&&typeof Et.catch=="function"&&Et.catch(function(){})}}catch(ut){if(ut&&lt&&typeof ut.stack=="string")return[ut.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),M=f[0],A=f[1];if(M&&A){var V=M.split(`
`),st=A.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<st.length&&!st[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===st.length)for(o=V.length-1,u=st.length-1;1<=o&&0<=u&&V[o]!==st[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==st[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==st[u]){var _t=`
`+V[o].replace(" at new "," at ");return e.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",e.displayName)),_t}while(1<=o&&0<=u);break}}}finally{Yt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?$t(a):""}function be(e){switch(e.tag){case 26:case 27:case 5:return $t(e.type);case 16:return $t("Lazy");case 13:return $t("Suspense");case 19:return $t("SuspenseList");case 0:case 15:return xe(e.type,!1);case 11:return xe(e.type.render,!1);case 1:return xe(e.type,!0);case 31:return $t("Activity");default:return""}}function Ke(e){try{var n="";do n+=be(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function te(e){var n=me(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,f.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function rn(e){e._valueTracker||(e._valueTracker=te(e))}function we(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=me(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function yn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Li=/[\n"\\]/g;function je(e){return e.replace(Li,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oi(e,n,a,o,u,f,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+he(n)):e.value!==""+he(n)&&(e.value=""+he(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?un(e,M,he(n)):a!=null?un(e,M,he(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+he(A):e.removeAttribute("name")}function Ge(e,n,a,o,u,f,M,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+he(a):"",n=n!=null?""+he(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function un(e,n,a){n==="number"&&yn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function fn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+he(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function O(e,n,a){if(n!=null&&(n=""+he(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+he(a):""}function Tt(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(mt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=he(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function zt(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var fe=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pe(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||fe.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Qe(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Pe(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Pe(e,f,n[f])}function Tn(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ms=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ro=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ha(e){return ro.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ir=null;function ar(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ma=null,Sn=null;function Qi(e){var n=Jn(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Oi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+je(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[xn]||null;if(!u)throw Error(s(90));Oi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&we(o)}break t;case"textarea":O(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&fn(e,!!a.multiple,n,!1)}}}var Pi=!1;function Ga(e,n,a){if(Pi)return e(n,a);Pi=!0;try{var o=e(n);return o}finally{if(Pi=!1,(ma!==null||Sn!==null)&&(ic(),ma&&(n=ma,e=Sn,Sn=ma=null,Qi(n),e)))for(n=0;n<e.length;n++)Qi(e[n])}}function ga(e,n){var a=e.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Es=!1;if(zi)try{var Va={};Object.defineProperty(Va,"passive",{get:function(){Es=!0}}),window.addEventListener("test",Va,Va),window.removeEventListener("test",Va,Va)}catch{Es=!1}var An=null,Ii=null,xl=null;function np(){if(xl)return xl;var e,n=Ii,a=n.length,o,u="value"in An?An.value:An.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[f-o];o++);return xl=u.slice(e,1<o?1-o:void 0)}function yl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Sl(){return!0}function ip(){return!1}function $n(e){function n(a,o,u,f,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Sl:ip,this.isPropagationStopped=ip,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),n}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=$n(bs),oo=_({},bs,{view:0,detail:0}),Ov=$n(oo),hu,du,lo,El=_({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lo&&(lo&&e.type==="mousemove"?(hu=e.screenX-lo.screenX,du=e.screenY-lo.screenY):du=hu=0,lo=e),hu)},movementY:function(e){return"movementY"in e?e.movementY:du}}),ap=$n(El),Pv=_({},El,{dataTransfer:0}),zv=$n(Pv),Iv=_({},oo,{relatedTarget:0}),pu=$n(Iv),Bv=_({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),Fv=$n(Bv),Hv=_({},bs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gv=$n(Hv),Vv=_({},bs,{data:0}),sp=$n(Vv),kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Xv[e])?!!n[e]:!1}function mu(){return qv}var Wv=_({},oo,{key:function(e){if(e.key){var n=kv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=yl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(e){return e.type==="keypress"?yl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yv=$n(Wv),Zv=_({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=$n(Zv),Kv=_({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),Qv=$n(Kv),Jv=_({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),$v=$n(Jv),tx=_({},El,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ex=$n(tx),nx=_({},bs,{newState:0,oldState:0}),ix=$n(nx),ax=[9,13,27,32],gu=zi&&"CompositionEvent"in window,co=null;zi&&"documentMode"in document&&(co=document.documentMode);var sx=zi&&"TextEvent"in window&&!co,op=zi&&(!gu||co&&8<co&&11>=co),lp=" ",cp=!1;function up(e,n){switch(e){case"keyup":return ax.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sr=!1;function rx(e,n){switch(e){case"compositionend":return fp(n);case"keypress":return n.which!==32?null:(cp=!0,lp);case"textInput":return e=n.data,e===lp&&cp?null:e;default:return null}}function ox(e,n){if(sr)return e==="compositionend"||!gu&&up(e,n)?(e=np(),xl=Ii=An=null,sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return op&&n.locale!=="ko"?null:n.data;default:return null}}var lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!lx[e.type]:n==="textarea"}function dp(e,n,a,o){ma?Sn?Sn.push(o):Sn=[o]:ma=o,n=cc(n,"onChange"),0<n.length&&(a=new Ml("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var uo=null,fo=null;function cx(e){W0(e,0)}function bl(e){var n=da(e);if(we(n))return e}function pp(e,n){if(e==="change")return n}var mp=!1;if(zi){var _u;if(zi){var vu="oninput"in document;if(!vu){var gp=document.createElement("div");gp.setAttribute("oninput","return;"),vu=typeof gp.oninput=="function"}_u=vu}else _u=!1;mp=_u&&(!document.documentMode||9<document.documentMode)}function _p(){uo&&(uo.detachEvent("onpropertychange",vp),fo=uo=null)}function vp(e){if(e.propertyName==="value"&&bl(fo)){var n=[];dp(n,fo,e,ar(e)),Ga(cx,n)}}function ux(e,n,a){e==="focusin"?(_p(),uo=n,fo=a,uo.attachEvent("onpropertychange",vp)):e==="focusout"&&_p()}function fx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bl(fo)}function hx(e,n){if(e==="click")return bl(n)}function dx(e,n){if(e==="input"||e==="change")return bl(n)}function px(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ui=typeof Object.is=="function"?Object.is:px;function ho(e,n){if(ui(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Oe.call(n,u)||!ui(e[u],n[u]))return!1}return!0}function xp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yp(e,n){var a=xp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=xp(a)}}function Sp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Sp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Mp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=yn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=yn(e.document)}return n}function xu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var mx=zi&&"documentMode"in document&&11>=document.documentMode,rr=null,yu=null,po=null,Su=!1;function Ep(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Su||rr==null||rr!==yn(o)||(o=rr,"selectionStart"in o&&xu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),po&&ho(po,o)||(po=o,o=cc(yu,"onSelect"),0<o.length&&(n=new Ml("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=rr)))}function Ts(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var or={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionrun:Ts("Transition","TransitionRun"),transitionstart:Ts("Transition","TransitionStart"),transitioncancel:Ts("Transition","TransitionCancel"),transitionend:Ts("Transition","TransitionEnd")},Mu={},bp={};zi&&(bp=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function As(e){if(Mu[e])return Mu[e];if(!or[e])return e;var n=or[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in bp)return Mu[e]=n[a];return e}var Tp=As("animationend"),Ap=As("animationiteration"),Rp=As("animationstart"),gx=As("transitionrun"),_x=As("transitionstart"),vx=As("transitioncancel"),Cp=As("transitionend"),wp=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function Bi(e,n){wp.set(e,n),sn(n,[e])}var Dp=new WeakMap;function Si(e,n){if(typeof e=="object"&&e!==null){var a=Dp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ke(n)},Dp.set(e,n),n)}return{value:e,source:n,stack:Ke(n)}}var Mi=[],lr=0,bu=0;function Tl(){for(var e=lr,n=bu=lr=0;n<e;){var a=Mi[n];Mi[n++]=null;var o=Mi[n];Mi[n++]=null;var u=Mi[n];Mi[n++]=null;var f=Mi[n];if(Mi[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}f!==0&&Up(a,u,f)}}function Al(e,n,a,o){Mi[lr++]=e,Mi[lr++]=n,Mi[lr++]=a,Mi[lr++]=o,bu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Tu(e,n,a,o){return Al(e,n,a,o),Rl(e)}function cr(e,n){return Al(e,null,null,n),Rl(e)}function Up(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-kt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Rl(e){if(50<Fo)throw Fo=0,Nf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ur={};function xx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(e,n,a,o){return new xx(e,n,a,o)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _a(e,n){var a=e.alternate;return a===null?(a=fi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Np(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Cl(e,n,a,o,u,f){var M=0;if(o=e,typeof e=="function")Au(e)&&(M=1);else if(typeof e=="string")M=Sy(e,a,tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=fi(31,a,n,u),e.elementType=N,e.lanes=f,e;case b:return Rs(a.children,u,f,n);case w:M=8,u|=24;break;case v:return e=fi(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case B:return e=fi(13,a,n,u),e.elementType=B,e.lanes=f,e;case H:return e=fi(19,a,n,u),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case L:M=10;break t;case I:M=9;break t;case U:M=11;break t;case G:M=14;break t;case q:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=fi(M,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Rs(e,n,a,o){return e=fi(7,e,o,n),e.lanes=a,e}function Ru(e,n,a){return e=fi(6,e,null,n),e.lanes=a,e}function Cu(e,n,a){return n=fi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var fr=[],hr=0,wl=null,Dl=0,Ei=[],bi=0,Cs=null,va=1,xa="";function ws(e,n){fr[hr++]=Dl,fr[hr++]=wl,wl=e,Dl=n}function Lp(e,n,a){Ei[bi++]=va,Ei[bi++]=xa,Ei[bi++]=Cs,Cs=e;var o=va;e=xa;var u=32-kt(o)-1;o&=~(1<<u),a+=1;var f=32-kt(n)+u;if(30<f){var M=u-u%5;f=(o&(1<<M)-1).toString(32),o>>=M,u-=M,va=1<<32-kt(n)+u|a<<u|o,xa=f+e}else va=1<<f|a<<u|o,xa=e}function wu(e){e.return!==null&&(ws(e,1),Lp(e,1,0))}function Du(e){for(;e===wl;)wl=fr[--hr],fr[hr]=null,Dl=fr[--hr],fr[hr]=null;for(;e===Cs;)Cs=Ei[--bi],Ei[bi]=null,xa=Ei[--bi],Ei[bi]=null,va=Ei[--bi],Ei[bi]=null}var Zn=null,hn=null,Fe=!1,Ds=null,Ji=!1,Uu=Error(s(519));function Us(e){var n=Error(s(418,""));throw _o(Si(n,e)),Uu}function Op(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[gn]=e,n[xn]=o,a){case"dialog":Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":case"embed":Ae("load",n);break;case"video":case"audio":for(a=0;a<Go.length;a++)Ae(Go[a],n);break;case"source":Ae("error",n);break;case"img":case"image":case"link":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"input":Ae("invalid",n),Ge(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),rn(n);break;case"select":Ae("invalid",n);break;case"textarea":Ae("invalid",n),Tt(n,o.value,o.defaultValue,o.children),rn(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Q0(n.textContent,a)?(o.popover!=null&&(Ae("beforetoggle",n),Ae("toggle",n)),o.onScroll!=null&&Ae("scroll",n),o.onScrollEnd!=null&&Ae("scrollend",n),o.onClick!=null&&(n.onclick=uc),n=!0):n=!1,n||Us(e)}function Pp(e){for(Zn=e.return;Zn;)switch(Zn.tag){case 5:case 13:Ji=!1;return;case 27:case 3:Ji=!0;return;default:Zn=Zn.return}}function mo(e){if(e!==Zn)return!1;if(!Fe)return Pp(e),Fe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Yf(e.type,e.memoizedProps)),a=!a),a&&hn&&Us(e),Pp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){hn=Hi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}hn=null}}else n===27?(n=hn,as(e.type)?(e=Jf,Jf=null,hn=e):hn=n):hn=Zn?Hi(e.stateNode.nextSibling):null;return!0}function go(){hn=Zn=null,Fe=!1}function zp(){var e=Ds;return e!==null&&(ni===null?ni=e:ni.push.apply(ni,e),Ds=null),e}function _o(e){Ds===null?Ds=[e]:Ds.push(e)}var Nu=nt(null),Ns=null,ya=null;function ka(e,n,a){Rt(Nu,n._currentValue),n._currentValue=a}function Sa(e){e._currentValue=Nu.current,St(Nu)}function Lu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Ou(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var M=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var V=0;V<n.length;V++)if(A.context===n[V]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Lu(f.return,a,e),o||(M=null);break t}f=A.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),Lu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function vo(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var A=u.type;ui(u.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(u===Dt.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Wo):e=[Wo])}u=u.return}e!==null&&Ou(n,e,a,o),n.flags|=262144}function Ul(e){for(e=e.firstContext;e!==null;){if(!ui(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ls(e){Ns=e,ya=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function jn(e){return Ip(Ns,e)}function Nl(e,n){return Ns===null&&Ls(e),Ip(e,n)}function Ip(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ya===null){if(e===null)throw Error(s(308));ya=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ya=ya.next=n;return a}var yx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Sx=r.unstable_scheduleCallback,Mx=r.unstable_NormalPriority,Rn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pu(){return{controller:new yx,data:new Map,refCount:0}}function xo(e){e.refCount--,e.refCount===0&&Sx(Mx,function(){e.controller.abort()})}var yo=null,zu=0,dr=0,pr=null;function Ex(e,n){if(yo===null){var a=yo=[];zu=0,dr=Ff(),pr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return zu++,n.then(Bp,Bp),n}function Bp(){if(--zu===0&&yo!==null){pr!==null&&(pr.status="fulfilled");var e=yo;yo=null,dr=0,pr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function bx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Fp=F.S;F.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ex(e,n),Fp!==null&&Fp(e,n)};var Os=nt(null);function Iu(){var e=Os.current;return e!==null?e:en.pooledCache}function Ll(e,n){n===null?Rt(Os,Os.current):Rt(Os,n.pool)}function Hp(){var e=Iu();return e===null?null:{parent:Rn._currentValue,pool:e}}var So=Error(s(460)),Gp=Error(s(474)),Ol=Error(s(542)),Bu={then:function(){}};function Vp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pl(){}function kp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Pl,Pl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xp(e),e;default:if(typeof n.status=="string")n.then(Pl,Pl);else{if(e=en,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xp(e),e}throw Mo=n,So}}var Mo=null;function jp(){if(Mo===null)throw Error(s(459));var e=Mo;return Mo=null,e}function Xp(e){if(e===So||e===Ol)throw Error(s(483))}var ja=!1;function Fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ve&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Rl(e),Up(e,null,a),n}return Al(e,o,n,a),Rl(e)}function Eo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,le(e,a)}}function Gu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Vu=!1;function bo(){if(Vu){var e=pr;if(e!==null)throw e}}function To(e,n,a,o){Vu=!1;var u=e.updateQueue;ja=!1;var f=u.firstBaseUpdate,M=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var V=A,st=V.next;V.next=null,M===null?f=st:M.next=st,M=V;var _t=e.alternate;_t!==null&&(_t=_t.updateQueue,A=_t.lastBaseUpdate,A!==M&&(A===null?_t.firstBaseUpdate=st:A.next=st,_t.lastBaseUpdate=V))}if(f!==null){var Et=u.baseState;M=0,_t=st=V=null,A=f;do{var lt=A.lane&-536870913,ut=lt!==A.lane;if(ut?(Le&lt)===lt:(o&lt)===lt){lt!==0&&lt===dr&&(Vu=!0),_t!==null&&(_t=_t.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ce=e,ae=A;lt=n;var We=a;switch(ae.tag){case 1:if(ce=ae.payload,typeof ce=="function"){Et=ce.call(We,Et,lt);break t}Et=ce;break t;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=ae.payload,lt=typeof ce=="function"?ce.call(We,Et,lt):ce,lt==null)break t;Et=_({},Et,lt);break t;case 2:ja=!0}}lt=A.callback,lt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[lt]:ut.push(lt))}else ut={lane:lt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},_t===null?(st=_t=ut,V=Et):_t=_t.next=ut,M|=lt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ut=A,A=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);_t===null&&(V=Et),u.baseState=V,u.firstBaseUpdate=st,u.lastBaseUpdate=_t,f===null&&(u.shared.lanes=0),ts|=M,e.lanes=M,e.memoizedState=Et}}function qp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Wp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)qp(a[e],n)}var mr=nt(null),zl=nt(0);function Yp(e,n){e=Ca,Rt(zl,e),Rt(mr,n),Ca=e|n.baseLanes}function ku(){Rt(zl,Ca),Rt(mr,mr.current)}function ju(){Ca=zl.current,St(mr),St(zl)}var Wa=0,Se=null,Xe=null,Mn=null,Il=!1,gr=!1,Ps=!1,Bl=0,Ao=0,_r=null,Tx=0;function _n(){throw Error(s(321))}function Xu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ui(e[a],n[a]))return!1;return!0}function qu(e,n,a,o,u,f){return Wa=f,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?Um:Nm,Ps=!1,f=a(o,u),Ps=!1,gr&&(f=Kp(n,a,o,u)),Zp(e),f}function Zp(e){F.H=jl;var n=Xe!==null&&Xe.next!==null;if(Wa=0,Mn=Xe=Se=null,Il=!1,Ao=0,_r=null,n)throw Error(s(300));e===null||On||(e=e.dependencies,e!==null&&Ul(e)&&(On=!0))}function Kp(e,n,a,o){Se=e;var u=0;do{if(gr&&(_r=null),Ao=0,gr=!1,25<=u)throw Error(s(301));if(u+=1,Mn=Xe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=Nx,f=n(a,o)}while(gr);return f}function Ax(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?Ro(n):n,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(Se.flags|=1024),n}function Wu(){var e=Bl!==0;return Bl=0,e}function Yu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Zu(e){if(Il){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Il=!1}Wa=0,Mn=Xe=Se=null,gr=!1,Ao=Bl=0,_r=null}function ti(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?Se.memoizedState=Mn=e:Mn=Mn.next=e,Mn}function En(){if(Xe===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var n=Mn===null?Se.memoizedState:Mn.next;if(n!==null)Mn=n,Xe=e;else{if(e===null)throw Se.alternate===null?Error(s(467)):Error(s(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},Mn===null?Se.memoizedState=Mn=e:Mn=Mn.next=e}return Mn}function Ku(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(e){var n=Ao;return Ao+=1,_r===null&&(_r=[]),e=kp(_r,e,n),n=Se,(Mn===null?n.memoizedState:Mn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?Um:Nm),e}function Fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ro(e);if(e.$$typeof===L)return jn(e)}throw Error(s(438,String(e)))}function Qu(e){var n=null,a=Se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Se.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ku(),Se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=R;return n.index++,a}function Ma(e,n){return typeof n=="function"?n(e):n}function Hl(e){var n=En();return Ju(n,Xe,e)}function Ju(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var M=u.next;u.next=f.next,f.next=M}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=M=null,V=null,st=n,_t=!1;do{var Et=st.lane&-536870913;if(Et!==st.lane?(Le&Et)===Et:(Wa&Et)===Et){var lt=st.revertLane;if(lt===0)V!==null&&(V=V.next={lane:0,revertLane:0,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),Et===dr&&(_t=!0);else if((Wa&lt)===lt){st=st.next,lt===dr&&(_t=!0);continue}else Et={lane:0,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},V===null?(A=V=Et,M=f):V=V.next=Et,Se.lanes|=lt,ts|=lt;Et=st.action,Ps&&a(f,Et),f=st.hasEagerState?st.eagerState:a(f,Et)}else lt={lane:Et,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},V===null?(A=V=lt,M=f):V=V.next=lt,Se.lanes|=Et,ts|=Et;st=st.next}while(st!==null&&st!==n);if(V===null?M=f:V.next=A,!ui(f,e.memoizedState)&&(On=!0,_t&&(a=pr,a!==null)))throw a;e.memoizedState=f,e.baseState=M,e.baseQueue=V,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function $u(e){var n=En(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do f=e(f,M.action),M=M.next;while(M!==u);ui(f,n.memoizedState)||(On=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Qp(e,n,a){var o=Se,u=En(),f=Fe;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!ui((Xe||u).memoizedState,a);M&&(u.memoizedState=a,On=!0),u=u.queue;var A=tm.bind(null,o,u,e);if(Co(2048,8,A,[e]),u.getSnapshot!==n||M||Mn!==null&&Mn.memoizedState.tag&1){if(o.flags|=2048,vr(9,Gl(),$p.bind(null,o,u,a,n),null),en===null)throw Error(s(349));f||(Wa&124)!==0||Jp(o,n,a)}return a}function Jp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Se.updateQueue,n===null?(n=Ku(),Se.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function $p(e,n,a,o){n.value=a,n.getSnapshot=o,em(n)&&nm(e)}function tm(e,n,a){return a(function(){em(n)&&nm(e)})}function em(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ui(e,a)}catch{return!0}}function nm(e){var n=cr(e,2);n!==null&&gi(n,e,2)}function tf(e){var n=ti();if(typeof e=="function"){var a=e;if(e=a(),Ps){Ct(!0);try{a()}finally{Ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:e},n}function im(e,n,a,o){return e.baseState=a,Ju(e,Xe,typeof o=="function"?o:Ma)}function Rx(e,n,a,o,u){if(kl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};F.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,am(n,f)):(f.next=a.next,n.pending=a.next=f)}}function am(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=F.T,M={};F.T=M;try{var A=a(u,o),V=F.S;V!==null&&V(M,A),sm(e,n,A)}catch(st){ef(e,n,st)}finally{F.T=f}}else try{f=a(u,o),sm(e,n,f)}catch(st){ef(e,n,st)}}function sm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){rm(e,n,o)},function(o){return ef(e,n,o)}):rm(e,n,a)}function rm(e,n,a){n.status="fulfilled",n.value=a,om(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,am(e,a)))}function ef(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,om(n),n=n.next;while(n!==o)}e.action=null}function om(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function lm(e,n){return n}function cm(e,n){if(Fe){var a=en.formState;if(a!==null){t:{var o=Se;if(Fe){if(hn){e:{for(var u=hn,f=Ji;u.nodeType!==8;){if(!f){u=null;break e}if(u=Hi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){hn=Hi(u.nextSibling),o=u.data==="F!";break t}}Us(o)}o=!1}o&&(n=a[0])}}return a=ti(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lm,lastRenderedState:n},a.queue=o,a=Cm.bind(null,Se,o),o.dispatch=a,o=tf(!1),f=of.bind(null,Se,!1,o.queue),o=ti(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Rx.bind(null,Se,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function um(e){var n=En();return fm(n,Xe,e)}function fm(e,n,a){if(n=Ju(e,n,lm)[0],e=Hl(Ma)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ro(n)}catch(M){throw M===So?Ol:M}else o=n;n=En();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Se.flags|=2048,vr(9,Gl(),Cx.bind(null,u,a),null)),[o,f,e]}function Cx(e,n){e.action=n}function hm(e){var n=En(),a=Xe;if(a!==null)return fm(n,a,e);En(),n=n.memoizedState,a=En();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function vr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Se.updateQueue,n===null&&(n=Ku(),Se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Gl(){return{destroy:void 0,resource:void 0}}function dm(){return En().memoizedState}function Vl(e,n,a,o){var u=ti();o=o===void 0?null:o,Se.flags|=e,u.memoizedState=vr(1|n,Gl(),a,o)}function Co(e,n,a,o){var u=En();o=o===void 0?null:o;var f=u.memoizedState.inst;Xe!==null&&o!==null&&Xu(o,Xe.memoizedState.deps)?u.memoizedState=vr(n,f,a,o):(Se.flags|=e,u.memoizedState=vr(1|n,f,a,o))}function pm(e,n){Vl(8390656,8,e,n)}function mm(e,n){Co(2048,8,e,n)}function gm(e,n){return Co(4,2,e,n)}function _m(e,n){return Co(4,4,e,n)}function vm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xm(e,n,a){a=a!=null?a.concat([e]):null,Co(4,4,vm.bind(null,n,e),a)}function nf(){}function ym(e,n){var a=En();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Xu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Sm(e,n){var a=En();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Xu(n,o[1]))return o[0];if(o=e(),Ps){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[o,n],o}function af(e,n,a){return a===void 0||(Wa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=b0(),Se.lanes|=e,ts|=e,a)}function Mm(e,n,a,o){return ui(a,n)?a:mr.current!==null?(e=af(e,a,o),ui(e,n)||(On=!0),e):(Wa&42)===0?(On=!0,e.memoizedState=a):(e=b0(),Se.lanes|=e,ts|=e,n)}function Em(e,n,a,o,u){var f=Q.p;Q.p=f!==0&&8>f?f:8;var M=F.T,A={};F.T=A,of(e,!1,n,a);try{var V=u(),st=F.S;if(st!==null&&st(A,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var _t=bx(V,o);wo(e,n,_t,mi(e))}else wo(e,n,o,mi(e))}catch(Et){wo(e,n,{then:function(){},status:"rejected",reason:Et},mi())}finally{Q.p=f,F.T=M}}function wx(){}function sf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=bm(e).queue;Em(e,u,n,Z,a===null?wx:function(){return Tm(e),a(o)})}function bm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Tm(e){var n=bm(e).next.queue;wo(e,n,{},mi())}function rf(){return jn(Wo)}function Am(){return En().memoizedState}function Rm(){return En().memoizedState}function Dx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=mi();e=Xa(a);var o=qa(n,e,a);o!==null&&(gi(o,n,a),Eo(o,n,a)),n={cache:Pu()},e.payload=n;return}n=n.return}}function Ux(e,n,a){var o=mi();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},kl(e)?wm(n,a):(a=Tu(e,n,a,o),a!==null&&(gi(a,e,o),Dm(a,n,o)))}function Cm(e,n,a){var o=mi();wo(e,n,a,o)}function wo(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(kl(e))wm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,A=f(M,a);if(u.hasEagerState=!0,u.eagerState=A,ui(A,M))return Al(e,n,u,0),en===null&&Tl(),!1}catch{}finally{}if(a=Tu(e,n,u,o),a!==null)return gi(a,e,o),Dm(a,n,o),!0}return!1}function of(e,n,a,o){if(o={lane:2,revertLane:Ff(),action:o,hasEagerState:!1,eagerState:null,next:null},kl(e)){if(n)throw Error(s(479))}else n=Tu(e,a,o,2),n!==null&&gi(n,e,2)}function kl(e){var n=e.alternate;return e===Se||n!==null&&n===Se}function wm(e,n){gr=Il=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Dm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,le(e,a)}}var jl={readContext:jn,use:Fl,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useLayoutEffect:_n,useInsertionEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useSyncExternalStore:_n,useId:_n,useHostTransitionStatus:_n,useFormState:_n,useActionState:_n,useOptimistic:_n,useMemoCache:_n,useCacheRefresh:_n},Um={readContext:jn,use:Fl,useCallback:function(e,n){return ti().memoizedState=[e,n===void 0?null:n],e},useContext:jn,useEffect:pm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Vl(4194308,4,vm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Vl(4194308,4,e,n)},useInsertionEffect:function(e,n){Vl(4,2,e,n)},useMemo:function(e,n){var a=ti();n=n===void 0?null:n;var o=e();if(Ps){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=ti();if(a!==void 0){var u=a(n);if(Ps){Ct(!0);try{a(n)}finally{Ct(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Ux.bind(null,Se,e),[o.memoizedState,e]},useRef:function(e){var n=ti();return e={current:e},n.memoizedState=e},useState:function(e){e=tf(e);var n=e.queue,a=Cm.bind(null,Se,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(e,n){var a=ti();return af(a,e,n)},useTransition:function(){var e=tf(!1);return e=Em.bind(null,Se,e.queue,!0,!1),ti().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Se,u=ti();if(Fe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),en===null)throw Error(s(349));(Le&124)!==0||Jp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,pm(tm.bind(null,o,f,e),[e]),o.flags|=2048,vr(9,Gl(),$p.bind(null,o,f,a,n),null),a},useId:function(){var e=ti(),n=en.identifierPrefix;if(Fe){var a=xa,o=va;a=(o&~(1<<32-kt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Bl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Tx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:rf,useFormState:cm,useActionState:cm,useOptimistic:function(e){var n=ti();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,Se,!0,a),a.dispatch=n,[e,n]},useMemoCache:Qu,useCacheRefresh:function(){return ti().memoizedState=Dx.bind(null,Se)}},Nm={readContext:jn,use:Fl,useCallback:ym,useContext:jn,useEffect:mm,useImperativeHandle:xm,useInsertionEffect:gm,useLayoutEffect:_m,useMemo:Sm,useReducer:Hl,useRef:dm,useState:function(){return Hl(Ma)},useDebugValue:nf,useDeferredValue:function(e,n){var a=En();return Mm(a,Xe.memoizedState,e,n)},useTransition:function(){var e=Hl(Ma)[0],n=En().memoizedState;return[typeof e=="boolean"?e:Ro(e),n]},useSyncExternalStore:Qp,useId:Am,useHostTransitionStatus:rf,useFormState:um,useActionState:um,useOptimistic:function(e,n){var a=En();return im(a,Xe,e,n)},useMemoCache:Qu,useCacheRefresh:Rm},Nx={readContext:jn,use:Fl,useCallback:ym,useContext:jn,useEffect:mm,useImperativeHandle:xm,useInsertionEffect:gm,useLayoutEffect:_m,useMemo:Sm,useReducer:$u,useRef:dm,useState:function(){return $u(Ma)},useDebugValue:nf,useDeferredValue:function(e,n){var a=En();return Xe===null?af(a,e,n):Mm(a,Xe.memoizedState,e,n)},useTransition:function(){var e=$u(Ma)[0],n=En().memoizedState;return[typeof e=="boolean"?e:Ro(e),n]},useSyncExternalStore:Qp,useId:Am,useHostTransitionStatus:rf,useFormState:hm,useActionState:hm,useOptimistic:function(e,n){var a=En();return Xe!==null?im(a,Xe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Qu,useCacheRefresh:Rm},xr=null,Do=0;function Xl(e){var n=Do;return Do+=1,xr===null&&(xr=[]),kp(xr,e,n)}function Uo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ql(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Lm(e){var n=e._init;return n(e._payload)}function Om(e){function n(J,W){if(e){var it=J.deletions;it===null?(J.deletions=[W],J.flags|=16):it.push(W)}}function a(J,W){if(!e)return null;for(;W!==null;)n(J,W),W=W.sibling;return null}function o(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function u(J,W){return J=_a(J,W),J.index=0,J.sibling=null,J}function f(J,W,it){return J.index=it,e?(it=J.alternate,it!==null?(it=it.index,it<W?(J.flags|=67108866,W):it):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function M(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function A(J,W,it,yt){return W===null||W.tag!==6?(W=Ru(it,J.mode,yt),W.return=J,W):(W=u(W,it),W.return=J,W)}function V(J,W,it,yt){var qt=it.type;return qt===b?_t(J,W,it.props.children,yt,it.key):W!==null&&(W.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===q&&Lm(qt)===W.type)?(W=u(W,it.props),Uo(W,it),W.return=J,W):(W=Cl(it.type,it.key,it.props,null,J.mode,yt),Uo(W,it),W.return=J,W)}function st(J,W,it,yt){return W===null||W.tag!==4||W.stateNode.containerInfo!==it.containerInfo||W.stateNode.implementation!==it.implementation?(W=Cu(it,J.mode,yt),W.return=J,W):(W=u(W,it.children||[]),W.return=J,W)}function _t(J,W,it,yt,qt){return W===null||W.tag!==7?(W=Rs(it,J.mode,yt,qt),W.return=J,W):(W=u(W,it),W.return=J,W)}function Et(J,W,it){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Ru(""+W,J.mode,it),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return it=Cl(W.type,W.key,W.props,null,J.mode,it),Uo(it,W),it.return=J,it;case S:return W=Cu(W,J.mode,it),W.return=J,W;case q:var yt=W._init;return W=yt(W._payload),Et(J,W,it)}if(mt(W)||at(W))return W=Rs(W,J.mode,it,null),W.return=J,W;if(typeof W.then=="function")return Et(J,Xl(W),it);if(W.$$typeof===L)return Et(J,Nl(J,W),it);ql(J,W)}return null}function lt(J,W,it,yt){var qt=W!==null?W.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return qt!==null?null:A(J,W,""+it,yt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case y:return it.key===qt?V(J,W,it,yt):null;case S:return it.key===qt?st(J,W,it,yt):null;case q:return qt=it._init,it=qt(it._payload),lt(J,W,it,yt)}if(mt(it)||at(it))return qt!==null?null:_t(J,W,it,yt,null);if(typeof it.then=="function")return lt(J,W,Xl(it),yt);if(it.$$typeof===L)return lt(J,W,Nl(J,it),yt);ql(J,it)}return null}function ut(J,W,it,yt,qt){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return J=J.get(it)||null,A(W,J,""+yt,qt);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case y:return J=J.get(yt.key===null?it:yt.key)||null,V(W,J,yt,qt);case S:return J=J.get(yt.key===null?it:yt.key)||null,st(W,J,yt,qt);case q:var Me=yt._init;return yt=Me(yt._payload),ut(J,W,it,yt,qt)}if(mt(yt)||at(yt))return J=J.get(it)||null,_t(W,J,yt,qt,null);if(typeof yt.then=="function")return ut(J,W,it,Xl(yt),qt);if(yt.$$typeof===L)return ut(J,W,it,Nl(W,yt),qt);ql(W,yt)}return null}function ce(J,W,it,yt){for(var qt=null,Me=null,Jt=W,re=W=0,zn=null;Jt!==null&&re<it.length;re++){Jt.index>re?(zn=Jt,Jt=null):zn=Jt.sibling;var ze=lt(J,Jt,it[re],yt);if(ze===null){Jt===null&&(Jt=zn);break}e&&Jt&&ze.alternate===null&&n(J,Jt),W=f(ze,W,re),Me===null?qt=ze:Me.sibling=ze,Me=ze,Jt=zn}if(re===it.length)return a(J,Jt),Fe&&ws(J,re),qt;if(Jt===null){for(;re<it.length;re++)Jt=Et(J,it[re],yt),Jt!==null&&(W=f(Jt,W,re),Me===null?qt=Jt:Me.sibling=Jt,Me=Jt);return Fe&&ws(J,re),qt}for(Jt=o(Jt);re<it.length;re++)zn=ut(Jt,J,re,it[re],yt),zn!==null&&(e&&zn.alternate!==null&&Jt.delete(zn.key===null?re:zn.key),W=f(zn,W,re),Me===null?qt=zn:Me.sibling=zn,Me=zn);return e&&Jt.forEach(function(cs){return n(J,cs)}),Fe&&ws(J,re),qt}function ae(J,W,it,yt){if(it==null)throw Error(s(151));for(var qt=null,Me=null,Jt=W,re=W=0,zn=null,ze=it.next();Jt!==null&&!ze.done;re++,ze=it.next()){Jt.index>re?(zn=Jt,Jt=null):zn=Jt.sibling;var cs=lt(J,Jt,ze.value,yt);if(cs===null){Jt===null&&(Jt=zn);break}e&&Jt&&cs.alternate===null&&n(J,Jt),W=f(cs,W,re),Me===null?qt=cs:Me.sibling=cs,Me=cs,Jt=zn}if(ze.done)return a(J,Jt),Fe&&ws(J,re),qt;if(Jt===null){for(;!ze.done;re++,ze=it.next())ze=Et(J,ze.value,yt),ze!==null&&(W=f(ze,W,re),Me===null?qt=ze:Me.sibling=ze,Me=ze);return Fe&&ws(J,re),qt}for(Jt=o(Jt);!ze.done;re++,ze=it.next())ze=ut(Jt,J,re,ze.value,yt),ze!==null&&(e&&ze.alternate!==null&&Jt.delete(ze.key===null?re:ze.key),W=f(ze,W,re),Me===null?qt=ze:Me.sibling=ze,Me=ze);return e&&Jt.forEach(function(Ly){return n(J,Ly)}),Fe&&ws(J,re),qt}function We(J,W,it,yt){if(typeof it=="object"&&it!==null&&it.type===b&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case y:t:{for(var qt=it.key;W!==null;){if(W.key===qt){if(qt=it.type,qt===b){if(W.tag===7){a(J,W.sibling),yt=u(W,it.props.children),yt.return=J,J=yt;break t}}else if(W.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===q&&Lm(qt)===W.type){a(J,W.sibling),yt=u(W,it.props),Uo(yt,it),yt.return=J,J=yt;break t}a(J,W);break}else n(J,W);W=W.sibling}it.type===b?(yt=Rs(it.props.children,J.mode,yt,it.key),yt.return=J,J=yt):(yt=Cl(it.type,it.key,it.props,null,J.mode,yt),Uo(yt,it),yt.return=J,J=yt)}return M(J);case S:t:{for(qt=it.key;W!==null;){if(W.key===qt)if(W.tag===4&&W.stateNode.containerInfo===it.containerInfo&&W.stateNode.implementation===it.implementation){a(J,W.sibling),yt=u(W,it.children||[]),yt.return=J,J=yt;break t}else{a(J,W);break}else n(J,W);W=W.sibling}yt=Cu(it,J.mode,yt),yt.return=J,J=yt}return M(J);case q:return qt=it._init,it=qt(it._payload),We(J,W,it,yt)}if(mt(it))return ce(J,W,it,yt);if(at(it)){if(qt=at(it),typeof qt!="function")throw Error(s(150));return it=qt.call(it),ae(J,W,it,yt)}if(typeof it.then=="function")return We(J,W,Xl(it),yt);if(it.$$typeof===L)return We(J,W,Nl(J,it),yt);ql(J,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,W!==null&&W.tag===6?(a(J,W.sibling),yt=u(W,it),yt.return=J,J=yt):(a(J,W),yt=Ru(it,J.mode,yt),yt.return=J,J=yt),M(J)):a(J,W)}return function(J,W,it,yt){try{Do=0;var qt=We(J,W,it,yt);return xr=null,qt}catch(Jt){if(Jt===So||Jt===Ol)throw Jt;var Me=fi(29,Jt,null,J.mode);return Me.lanes=yt,Me.return=J,Me}finally{}}}var yr=Om(!0),Pm=Om(!1),Ti=nt(null),$i=null;function Ya(e){var n=e.alternate;Rt(Cn,Cn.current&1),Rt(Ti,e),$i===null&&(n===null||mr.current!==null||n.memoizedState!==null)&&($i=e)}function zm(e){if(e.tag===22){if(Rt(Cn,Cn.current),Rt(Ti,e),$i===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&($i=e)}}else Za()}function Za(){Rt(Cn,Cn.current),Rt(Ti,Ti.current)}function Ea(e){St(Ti),$i===e&&($i=null),St(Cn)}var Cn=nt(0);function Wl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Qf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function lf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var cf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=mi(),u=Xa(o);u.payload=n,a!=null&&(u.callback=a),n=qa(e,u,o),n!==null&&(gi(n,e,o),Eo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=mi(),u=Xa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=qa(e,u,o),n!==null&&(gi(n,e,o),Eo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=mi(),o=Xa(a);o.tag=2,n!=null&&(o.callback=n),n=qa(e,o,a),n!==null&&(gi(n,e,a),Eo(n,e,a))}};function Im(e,n,a,o,u,f,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,M):n.prototype&&n.prototype.isPureReactComponent?!ho(a,o)||!ho(u,f):!0}function Bm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&cf.enqueueReplaceState(n,n.state,null)}function zs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Fm(e){Yl(e)}function Hm(e){console.error(e)}function Gm(e){Yl(e)}function Zl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Vm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function uf(e,n,a){return a=Xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Zl(e,n)},a}function km(e){return e=Xa(e),e.tag=3,e}function jm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Vm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Vm(n,a,o),typeof u!="function"&&(es===null?es=new Set([this]):es.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Lx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&vo(n,a,u,!0),a=Ti.current,a!==null){switch(a.tag){case 13:return $i===null?Of():a.alternate===null&&dn===0&&(dn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Bu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),zf(e,o,u)),!1;case 22:return a.flags|=65536,o===Bu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),zf(e,o,u)),!1}throw Error(s(435,a.tag))}return zf(e,o,u),Of(),!1}if(Fe)return n=Ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Uu&&(e=Error(s(422),{cause:o}),_o(Si(e,a)))):(o!==Uu&&(n=Error(s(423),{cause:o}),_o(Si(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Si(o,a),u=uf(e.stateNode,o,u),Gu(e,u),dn!==4&&(dn=2)),!1;var f=Error(s(520),{cause:o});if(f=Si(f,a),Bo===null?Bo=[f]:Bo.push(f),dn!==4&&(dn=2),n===null)return!0;o=Si(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=uf(a.stateNode,o,e),Gu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(es===null||!es.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=km(u),jm(u,e,a,o),Gu(a,u),!1}a=a.return}while(a!==null);return!1}var Xm=Error(s(461)),On=!1;function Fn(e,n,a,o){n.child=e===null?Pm(n,null,a,o):yr(n,e.child,a,o)}function qm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var M={};for(var A in o)A!=="ref"&&(M[A]=o[A])}else M=o;return Ls(n),o=qu(e,n,a,M,f,u),A=Wu(),e!==null&&!On?(Yu(e,n,u),ba(e,n,u)):(Fe&&A&&wu(n),n.flags|=1,Fn(e,n,o,u),n.child)}function Wm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Au(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Ym(e,n,f,o,u)):(e=Cl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!vf(e,u)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:ho,a(M,o)&&e.ref===n.ref)return ba(e,n,u)}return n.flags|=1,e=_a(f,o),e.ref=n.ref,e.return=n,n.child=e}function Ym(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(ho(f,o)&&e.ref===n.ref)if(On=!1,n.pendingProps=o=f,vf(e,u))(e.flags&131072)!==0&&(On=!0);else return n.lanes=e.lanes,ba(e,n,u)}return ff(e,n,a,o,u)}function Zm(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Km(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ll(n,f!==null?f.cachePool:null),f!==null?Yp(n,f):ku(),zm(n);else return n.lanes=n.childLanes=536870912,Km(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(Ll(n,f.cachePool),Yp(n,f),Za(),n.memoizedState=null):(e!==null&&Ll(n,null),ku(),Za());return Fn(e,n,u,a),n.child}function Km(e,n,a,o){var u=Iu();return u=u===null?null:{parent:Rn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Ll(n,null),ku(),zm(n),e!==null&&vo(e,n,o,!0),null}function Kl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ff(e,n,a,o,u){return Ls(n),a=qu(e,n,a,o,void 0,u),o=Wu(),e!==null&&!On?(Yu(e,n,u),ba(e,n,u)):(Fe&&o&&wu(n),n.flags|=1,Fn(e,n,a,u),n.child)}function Qm(e,n,a,o,u,f){return Ls(n),n.updateQueue=null,a=Kp(n,o,a,u),Zp(e),o=Wu(),e!==null&&!On?(Yu(e,n,f),ba(e,n,f)):(Fe&&o&&wu(n),n.flags|=1,Fn(e,n,a,f),n.child)}function Jm(e,n,a,o,u){if(Ls(n),n.stateNode===null){var f=ur,M=a.contextType;typeof M=="object"&&M!==null&&(f=jn(M)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=cf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Fu(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?jn(M):ur,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(lf(n,a,M,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&cf.enqueueReplaceState(f,f.state,null),To(n,o,f,u),bo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,V=zs(a,A);f.props=V;var st=f.context,_t=a.contextType;M=ur,typeof _t=="object"&&_t!==null&&(M=jn(_t));var Et=a.getDerivedStateFromProps;_t=typeof Et=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,_t||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||st!==M)&&Bm(n,f,o,M),ja=!1;var lt=n.memoizedState;f.state=lt,To(n,o,f,u),bo(),st=n.memoizedState,A||lt!==st||ja?(typeof Et=="function"&&(lf(n,a,Et,o),st=n.memoizedState),(V=ja||Im(n,a,V,o,lt,st,M))?(_t||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=st),f.props=o,f.state=st,f.context=M,o=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Hu(e,n),M=n.memoizedProps,_t=zs(a,M),f.props=_t,Et=n.pendingProps,lt=f.context,st=a.contextType,V=ur,typeof st=="object"&&st!==null&&(V=jn(st)),A=a.getDerivedStateFromProps,(st=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==Et||lt!==V)&&Bm(n,f,o,V),ja=!1,lt=n.memoizedState,f.state=lt,To(n,o,f,u),bo();var ut=n.memoizedState;M!==Et||lt!==ut||ja||e!==null&&e.dependencies!==null&&Ul(e.dependencies)?(typeof A=="function"&&(lf(n,a,A,o),ut=n.memoizedState),(_t=ja||Im(n,a,_t,o,lt,ut,V)||e!==null&&e.dependencies!==null&&Ul(e.dependencies))?(st||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ut,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ut,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),f.props=o,f.state=ut,f.context=V,o=_t):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Kl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=yr(n,e.child,null,u),n.child=yr(n,null,a,u)):Fn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ba(e,n,u),e}function $m(e,n,a,o){return go(),n.flags|=256,Fn(e,n,a,o),n.child}var hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function df(e){return{baseLanes:e,cachePool:Hp()}}function pf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Ai),e}function t0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=e!==null&&e.memoizedState===null?!1:(Cn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Fe){if(u?Ya(n):Za(),Fe){var A=hn,V;if(V=A){t:{for(V=A,A=Ji;V.nodeType!==8;){if(!A){A=null;break t}if(V=Hi(V.nextSibling),V===null){A=null;break t}}A=V}A!==null?(n.memoizedState={dehydrated:A,treeContext:Cs!==null?{id:va,overflow:xa}:null,retryLane:536870912,hydrationErrors:null},V=fi(18,null,null,0),V.stateNode=A,V.return=n,n.child=V,Zn=n,hn=null,V=!0):V=!1}V||Us(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Qf(A)?n.lanes=32:n.lanes=536870912,null;Ea(n)}return A=o.children,o=o.fallback,u?(Za(),u=n.mode,A=Ql({mode:"hidden",children:A},u),o=Rs(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,u=n.child,u.memoizedState=df(a),u.childLanes=pf(e,M,a),n.memoizedState=hf,o):(Ya(n),mf(n,A))}if(V=e.memoizedState,V!==null&&(A=V.dehydrated,A!==null)){if(f)n.flags&256?(Ya(n),n.flags&=-257,n=gf(e,n,a)):n.memoizedState!==null?(Za(),n.child=e.child,n.flags|=128,n=null):(Za(),u=o.fallback,A=n.mode,o=Ql({mode:"visible",children:o.children},A),u=Rs(u,A,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,yr(n,e.child,null,a),o=n.child,o.memoizedState=df(a),o.childLanes=pf(e,M,a),n.memoizedState=hf,n=u);else if(Ya(n),Qf(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var st=M.dgst;M=st,o=Error(s(419)),o.stack="",o.digest=M,_o({value:o,source:null,stack:null}),n=gf(e,n,a)}else if(On||vo(e,n,a,!1),M=(a&e.childLanes)!==0,On||M){if(M=en,M!==null&&(o=a&-a,o=(o&42)!==0?1:Ne(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==V.retryLane))throw V.retryLane=o,cr(e,o),gi(M,e,o),Xm;A.data==="$?"||Of(),n=gf(e,n,a)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,hn=Hi(A.nextSibling),Zn=n,Fe=!0,Ds=null,Ji=!1,e!==null&&(Ei[bi++]=va,Ei[bi++]=xa,Ei[bi++]=Cs,va=e.id,xa=e.overflow,Cs=n),n=mf(n,o.children),n.flags|=4096);return n}return u?(Za(),u=o.fallback,A=n.mode,V=e.child,st=V.sibling,o=_a(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,st!==null?u=_a(st,u):(u=Rs(u,A,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,A=e.child.memoizedState,A===null?A=df(a):(V=A.cachePool,V!==null?(st=Rn._currentValue,V=V.parent!==st?{parent:st,pool:st}:V):V=Hp(),A={baseLanes:A.baseLanes|a,cachePool:V}),u.memoizedState=A,u.childLanes=pf(e,M,a),n.memoizedState=hf,o):(Ya(n),a=e.child,e=a.sibling,a=_a(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function mf(e,n){return n=Ql({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ql(e,n){return e=fi(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function gf(e,n,a){return yr(n,e.child,null,a),e=mf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function e0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Lu(e.return,n,a)}function _f(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function n0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(Fn(e,n,o.children,a),o=Cn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&e0(e,a,n);else if(e.tag===19)e0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Rt(Cn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Wl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),_f(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Wl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}_f(n,!0,a,null,f);break;case"together":_f(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ba(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ts|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(vo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=_a(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=_a(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function vf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ul(e)))}function Ox(e,n,a){switch(n.tag){case 3:Lt(n,n.stateNode.containerInfo),ka(n,Rn,e.memoizedState.cache),go();break;case 27:case 5:Zt(n);break;case 4:Lt(n,n.stateNode.containerInfo);break;case 10:ka(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?t0(e,n,a):(Ya(n),e=ba(e,n,a),e!==null?e.sibling:null);Ya(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(vo(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return n0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Rt(Cn,Cn.current),o)break;return null;case 22:case 23:return n.lanes=0,Zm(e,n,a);case 24:ka(n,Rn,e.memoizedState.cache)}return ba(e,n,a)}function i0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)On=!0;else{if(!vf(e,a)&&(n.flags&128)===0)return On=!1,Ox(e,n,a);On=(e.flags&131072)!==0}else On=!1,Fe&&(n.flags&1048576)!==0&&Lp(n,Dl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Au(o)?(e=zs(o,e),n.tag=1,n=Jm(null,n,o,e,a)):(n.tag=0,n=ff(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===U){n.tag=11,n=qm(null,n,o,e,a);break t}else if(u===G){n.tag=14,n=Wm(null,n,o,e,a);break t}}throw n=ft(o)||o,Error(s(306,n,""))}}return n;case 0:return ff(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=zs(o,n.pendingProps),Jm(e,n,o,u,a);case 3:t:{if(Lt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Hu(e,n),To(n,o,null,a);var M=n.memoizedState;if(o=M.cache,ka(n,Rn,o),o!==f.cache&&Ou(n,[Rn],a,!0),bo(),o=M.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=$m(e,n,o,a);break t}else if(o!==u){u=Si(Error(s(424)),n),_o(u),n=$m(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(hn=Hi(e.firstChild),Zn=n,Fe=!0,Ds=null,Ji=!0,a=Pm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(go(),o===u){n=ba(e,n,a);break t}Fn(e,n,o,a)}n=n.child}return n;case 26:return Kl(e,n),e===null?(a=og(n.type,null,n.pendingProps,null))?n.memoizedState=a:Fe||(a=n.type,e=n.pendingProps,o=fc(Mt.current).createElement(a),o[gn]=n,o[xn]=e,Gn(o,a,e),tn(o),n.stateNode=o):n.memoizedState=og(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Zt(n),e===null&&Fe&&(o=n.stateNode=ag(n.type,n.pendingProps,Mt.current),Zn=n,Ji=!0,u=hn,as(n.type)?(Jf=u,hn=Hi(o.firstChild)):hn=u),Fn(e,n,n.pendingProps.children,a),Kl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Fe&&((u=o=hn)&&(o=ly(o,n.type,n.pendingProps,Ji),o!==null?(n.stateNode=o,Zn=n,hn=Hi(o.firstChild),Ji=!1,u=!0):u=!1),u||Us(n)),Zt(n),u=n.type,f=n.pendingProps,M=e!==null?e.memoizedProps:null,o=f.children,Yf(u,f)?o=null:M!==null&&Yf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=qu(e,n,Ax,null,null,a),Wo._currentValue=u),Kl(e,n),Fn(e,n,o,a),n.child;case 6:return e===null&&Fe&&((e=a=hn)&&(a=cy(a,n.pendingProps,Ji),a!==null?(n.stateNode=a,Zn=n,hn=null,e=!0):e=!1),e||Us(n)),null;case 13:return t0(e,n,a);case 4:return Lt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=yr(n,null,o,a):Fn(e,n,o,a),n.child;case 11:return qm(e,n,n.type,n.pendingProps,a);case 7:return Fn(e,n,n.pendingProps,a),n.child;case 8:return Fn(e,n,n.pendingProps.children,a),n.child;case 12:return Fn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ka(n,n.type,o.value),Fn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ls(n),u=jn(u),o=o(u),n.flags|=1,Fn(e,n,o,a),n.child;case 14:return Wm(e,n,n.type,n.pendingProps,a);case 15:return Ym(e,n,n.type,n.pendingProps,a);case 19:return n0(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Ql(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=_a(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Zm(e,n,a);case 24:return Ls(n),o=jn(Rn),e===null?(u=Iu(),u===null&&(u=en,f=Pu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Fu(n),ka(n,Rn,u)):((e.lanes&a)!==0&&(Hu(e,n),To(n,null,null,a),bo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ka(n,Rn,o)):(o=f.cache,ka(n,Rn,o),o!==u.cache&&Ou(n,[Rn],a,!0))),Fn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ta(e){e.flags|=4}function a0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hg(n)){if(n=Ti.current,n!==null&&((Le&4194048)===Le?$i!==null:(Le&62914560)!==Le&&(Le&536870912)===0||n!==$i))throw Mo=Bu,Gp;e.flags|=8192}}function Jl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ot():536870912,e.lanes|=n,br|=n)}function No(e,n){if(!Fe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function cn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Px(e,n,a){var o=n.pendingProps;switch(Du(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(n),null;case 1:return cn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Sa(Rn),ue(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(mo(n)?Ta(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zp())),cn(n),null;case 26:return a=n.memoizedState,e===null?(Ta(n),a!==null?(cn(n),a0(n,a)):(cn(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Ta(n),cn(n),a0(n,a)):(cn(n),n.flags&=-16777217):(e.memoizedProps!==o&&Ta(n),cn(n),n.flags&=-16777217),null;case 27:pe(n),a=Mt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ta(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return cn(n),null}e=tt.current,mo(n)?Op(n):(e=ag(u,o,a),n.stateNode=e,Ta(n))}return cn(n),null;case 5:if(pe(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ta(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return cn(n),null}if(e=tt.current,mo(n))Op(n);else{switch(u=fc(Mt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[gn]=n,e[xn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Gn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ta(n)}}return cn(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ta(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=Mt.current,mo(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Zn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[gn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Q0(e.nodeValue,a)),e||Us(n)}else e=fc(e).createTextNode(o),e[gn]=n,n.stateNode=e}return cn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=mo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[gn]=n}else go(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;cn(n),u=!1}else u=zp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ea(n),n):(Ea(n),null)}if(Ea(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Jl(n,n.updateQueue),cn(n),null;case 4:return ue(),e===null&&kf(n.stateNode.containerInfo),cn(n),null;case 10:return Sa(n.type),cn(n),null;case 19:if(St(Cn),u=n.memoizedState,u===null)return cn(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)No(u,!1);else{if(dn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Wl(e),f!==null){for(n.flags|=128,No(u,!1),e=f.updateQueue,n.updateQueue=e,Jl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Np(a,e),a=a.sibling;return Rt(Cn,Cn.current&1|2),n.child}e=e.sibling}u.tail!==null&&ee()>ec&&(n.flags|=128,o=!0,No(u,!1),n.lanes=4194304)}else{if(!o)if(e=Wl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Jl(n,e),No(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Fe)return cn(n),null}else 2*ee()-u.renderingStartTime>ec&&a!==536870912&&(n.flags|=128,o=!0,No(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=ee(),n.sibling=null,e=Cn.current,Rt(Cn,o?e&1|2:e&1),n):(cn(n),null);case 22:case 23:return Ea(n),ju(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(cn(n),n.subtreeFlags&6&&(n.flags|=8192)):cn(n),a=n.updateQueue,a!==null&&Jl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&St(Os),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Sa(Rn),cn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function zx(e,n){switch(Du(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Sa(Rn),ue(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return pe(n),null;case 13:if(Ea(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));go()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return St(Cn),null;case 4:return ue(),null;case 10:return Sa(n.type),null;case 22:case 23:return Ea(n),ju(),e!==null&&St(Os),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Sa(Rn),null;case 25:return null;default:return null}}function s0(e,n){switch(Du(n),n.tag){case 3:Sa(Rn),ue();break;case 26:case 27:case 5:pe(n);break;case 4:ue();break;case 13:Ea(n);break;case 19:St(Cn);break;case 10:Sa(n.type);break;case 22:case 23:Ea(n),ju(),e!==null&&St(Os);break;case 24:Sa(Rn)}}function Lo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,M=a.inst;o=f(),M.destroy=o}a=a.next}while(a!==u)}}catch(A){Je(n,n.return,A)}}function Ka(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var M=o.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,u=n;var V=a,st=A;try{st()}catch(_t){Je(u,V,_t)}}}o=o.next}while(o!==f)}}catch(_t){Je(n,n.return,_t)}}function r0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Wp(n,a)}catch(o){Je(e,e.return,o)}}}function o0(e,n,a){a.props=zs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Je(e,n,o)}}function Oo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Je(e,n,u)}}function ta(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Je(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Je(e,n,u)}else a.current=null}function l0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Je(e,e.return,u)}}function xf(e,n,a){try{var o=e.stateNode;iy(o,e.type,a,n),o[xn]=n}catch(u){Je(e,e.return,u)}}function c0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&as(e.type)||e.tag===4}function yf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||c0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&as(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=uc));else if(o!==4&&(o===27&&as(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Sf(e,n,a),e=e.sibling;e!==null;)Sf(e,n,a),e=e.sibling}function $l(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&as(e.type)&&(a=e.stateNode),e=e.child,e!==null))for($l(e,n,a),e=e.sibling;e!==null;)$l(e,n,a),e=e.sibling}function u0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Gn(n,o,a),n[gn]=e,n[xn]=a}catch(f){Je(e,e.return,f)}}var Aa=!1,vn=!1,Mf=!1,f0=typeof WeakSet=="function"?WeakSet:Set,Pn=null;function Ix(e,n){if(e=e.containerInfo,qf=_c,e=Mp(e),xu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var M=0,A=-1,V=-1,st=0,_t=0,Et=e,lt=null;e:for(;;){for(var ut;Et!==a||u!==0&&Et.nodeType!==3||(A=M+u),Et!==f||o!==0&&Et.nodeType!==3||(V=M+o),Et.nodeType===3&&(M+=Et.nodeValue.length),(ut=Et.firstChild)!==null;)lt=Et,Et=ut;for(;;){if(Et===e)break e;if(lt===a&&++st===u&&(A=M),lt===f&&++_t===o&&(V=M),(ut=Et.nextSibling)!==null)break;Et=lt,lt=Et.parentNode}Et=ut}a=A===-1||V===-1?null:{start:A,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wf={focusedElem:e,selectionRange:a},_c=!1,Pn=n;Pn!==null;)if(n=Pn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Pn=e;else for(;Pn!==null;){switch(n=Pn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ce=zs(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ce,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Je(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Kf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Pn=e;break}Pn=n.return}}function h0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Qa(e,a),o&4&&Lo(5,a);break;case 1:if(Qa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Je(a,a.return,M)}else{var u=zs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Je(a,a.return,M)}}o&64&&r0(a),o&512&&Oo(a,a.return);break;case 3:if(Qa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Wp(e,n)}catch(M){Je(a,a.return,M)}}break;case 27:n===null&&o&4&&u0(a);case 26:case 5:Qa(e,a),n===null&&o&4&&l0(a),o&512&&Oo(a,a.return);break;case 12:Qa(e,a);break;case 13:Qa(e,a),o&4&&m0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=qx.bind(null,a),uy(e,a))));break;case 22:if(o=a.memoizedState!==null||Aa,!o){n=n!==null&&n.memoizedState!==null||vn,u=Aa;var f=vn;Aa=o,(vn=n)&&!f?Ja(e,a,(a.subtreeFlags&8772)!==0):Qa(e,a),Aa=u,vn=f}break;case 30:break;default:Qa(e,a)}}function d0(e){var n=e.alternate;n!==null&&(e.alternate=null,d0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&li(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var on=null,ei=!1;function Ra(e,n,a){for(a=a.child;a!==null;)p0(e,n,a),a=a.sibling}function p0(e,n,a){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(z,a)}catch{}switch(a.tag){case 26:vn||ta(a,n),Ra(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vn||ta(a,n);var o=on,u=ei;as(a.type)&&(on=a.stateNode,ei=!1),Ra(e,n,a),ko(a.stateNode),on=o,ei=u;break;case 5:vn||ta(a,n);case 6:if(o=on,u=ei,on=null,Ra(e,n,a),on=o,ei=u,on!==null)if(ei)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(a.stateNode)}catch(f){Je(a,n,f)}else try{on.removeChild(a.stateNode)}catch(f){Je(a,n,f)}break;case 18:on!==null&&(ei?(e=on,ng(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Qo(e)):ng(on,a.stateNode));break;case 4:o=on,u=ei,on=a.stateNode.containerInfo,ei=!0,Ra(e,n,a),on=o,ei=u;break;case 0:case 11:case 14:case 15:vn||Ka(2,a,n),vn||Ka(4,a,n),Ra(e,n,a);break;case 1:vn||(ta(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&o0(a,n,o)),Ra(e,n,a);break;case 21:Ra(e,n,a);break;case 22:vn=(o=vn)||a.memoizedState!==null,Ra(e,n,a),vn=o;break;default:Ra(e,n,a)}}function m0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qo(e)}catch(a){Je(n,n.return,a)}}function Bx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new f0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new f0),n;default:throw Error(s(435,e.tag))}}function Ef(e,n){var a=Bx(e);n.forEach(function(o){var u=Wx.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function hi(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,M=n,A=M;t:for(;A!==null;){switch(A.tag){case 27:if(as(A.type)){on=A.stateNode,ei=!1;break t}break;case 5:on=A.stateNode,ei=!1;break t;case 3:case 4:on=A.stateNode.containerInfo,ei=!0;break t}A=A.return}if(on===null)throw Error(s(160));p0(f,M,u),on=null,ei=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)g0(n,e),n=n.sibling}var Fi=null;function g0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hi(n,e),di(e),o&4&&(Ka(3,e,e.return),Lo(3,e),Ka(5,e,e.return));break;case 1:hi(n,e),di(e),o&512&&(vn||a===null||ta(a,a.return)),o&64&&Aa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Fi;if(hi(n,e),di(e),o&512&&(vn||a===null||ta(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ki]||f[gn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Gn(f,o,a),f[gn]=e,tn(f),o=f;break t;case"link":var M=ug("link","href",u).get(o+(a.href||""));if(M){for(var A=0;A<M.length;A++)if(f=M[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(A,1);break e}}f=u.createElement(o),Gn(f,o,a),u.head.appendChild(f);break;case"meta":if(M=ug("meta","content",u).get(o+(a.content||""))){for(A=0;A<M.length;A++)if(f=M[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(A,1);break e}}f=u.createElement(o),Gn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[gn]=e,tn(f),o=f}e.stateNode=o}else fg(u,e.type,e.stateNode);else e.stateNode=cg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?fg(u,e.type,e.stateNode):cg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&xf(e,e.memoizedProps,a.memoizedProps)}break;case 27:hi(n,e),di(e),o&512&&(vn||a===null||ta(a,a.return)),a!==null&&o&4&&xf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(hi(n,e),di(e),o&512&&(vn||a===null||ta(a,a.return)),e.flags&32){u=e.stateNode;try{zt(u,"")}catch(ut){Je(e,e.return,ut)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,xf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Mf=!0);break;case 6:if(hi(n,e),di(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ut){Je(e,e.return,ut)}}break;case 3:if(pc=null,u=Fi,Fi=hc(n.containerInfo),hi(n,e),Fi=u,di(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Qo(n.containerInfo)}catch(ut){Je(e,e.return,ut)}Mf&&(Mf=!1,_0(e));break;case 4:o=Fi,Fi=hc(e.stateNode.containerInfo),hi(n,e),di(e),Fi=o;break;case 12:hi(n,e),di(e);break;case 13:hi(n,e),di(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wf=ee()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ef(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,st=Aa,_t=vn;if(Aa=st||u,vn=_t||V,hi(n,e),vn=_t,Aa=st,di(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||Aa||vn||Is(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=V.stateNode;var Et=V.memoizedProps.style,lt=Et!=null&&Et.hasOwnProperty("display")?Et.display:null;A.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(ut){Je(V,V.return,ut)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(ut){Je(V,V.return,ut)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ef(e,a))));break;case 19:hi(n,e),di(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ef(e,o)));break;case 30:break;case 21:break;default:hi(n,e),di(e)}}function di(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(c0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=yf(e);$l(e,f,u);break;case 5:var M=a.stateNode;a.flags&32&&(zt(M,""),a.flags&=-33);var A=yf(e);$l(e,A,M);break;case 3:case 4:var V=a.stateNode.containerInfo,st=yf(e);Sf(e,st,V);break;default:throw Error(s(161))}}catch(_t){Je(e,e.return,_t)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function _0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;_0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Qa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)h0(e,n.alternate,n),n=n.sibling}function Is(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ka(4,n,n.return),Is(n);break;case 1:ta(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&o0(n,n.return,a),Is(n);break;case 27:ko(n.stateNode);case 26:case 5:ta(n,n.return),Is(n);break;case 22:n.memoizedState===null&&Is(n);break;case 30:Is(n);break;default:Is(n)}e=e.sibling}}function Ja(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:Ja(u,f,a),Lo(4,f);break;case 1:if(Ja(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){Je(o,o.return,st)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)qp(V[u],A)}catch(st){Je(o,o.return,st)}}a&&M&64&&r0(f),Oo(f,f.return);break;case 27:u0(f);case 26:case 5:Ja(u,f,a),a&&o===null&&M&4&&l0(f),Oo(f,f.return);break;case 12:Ja(u,f,a);break;case 13:Ja(u,f,a),a&&M&4&&m0(u,f);break;case 22:f.memoizedState===null&&Ja(u,f,a),Oo(f,f.return);break;case 30:break;default:Ja(u,f,a)}n=n.sibling}}function bf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&xo(a))}function Tf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&xo(e))}function ea(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)v0(e,n,a,o),n=n.sibling}function v0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ea(e,n,a,o),u&2048&&Lo(9,n);break;case 1:ea(e,n,a,o);break;case 3:ea(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&xo(e)));break;case 12:if(u&2048){ea(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,M=f.id,A=f.onPostCommit;typeof A=="function"&&A(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Je(n,n.return,V)}}else ea(e,n,a,o);break;case 13:ea(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?ea(e,n,a,o):Po(e,n):f._visibility&2?ea(e,n,a,o):(f._visibility|=2,Sr(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&bf(M,n);break;case 24:ea(e,n,a,o),u&2048&&Tf(n.alternate,n);break;default:ea(e,n,a,o)}}function Sr(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,M=n,A=a,V=o,st=M.flags;switch(M.tag){case 0:case 11:case 15:Sr(f,M,A,V,u),Lo(8,M);break;case 23:break;case 22:var _t=M.stateNode;M.memoizedState!==null?_t._visibility&2?Sr(f,M,A,V,u):Po(f,M):(_t._visibility|=2,Sr(f,M,A,V,u)),u&&st&2048&&bf(M.alternate,M);break;case 24:Sr(f,M,A,V,u),u&&st&2048&&Tf(M.alternate,M);break;default:Sr(f,M,A,V,u)}n=n.sibling}}function Po(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Po(a,o),u&2048&&bf(o.alternate,o);break;case 24:Po(a,o),u&2048&&Tf(o.alternate,o);break;default:Po(a,o)}n=n.sibling}}var zo=8192;function Mr(e){if(e.subtreeFlags&zo)for(e=e.child;e!==null;)x0(e),e=e.sibling}function x0(e){switch(e.tag){case 26:Mr(e),e.flags&zo&&e.memoizedState!==null&&Ey(Fi,e.memoizedState,e.memoizedProps);break;case 5:Mr(e);break;case 3:case 4:var n=Fi;Fi=hc(e.stateNode.containerInfo),Mr(e),Fi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=zo,zo=16777216,Mr(e),zo=n):Mr(e));break;default:Mr(e)}}function y0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Io(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Pn=o,M0(o,e)}y0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)S0(e),e=e.sibling}function S0(e){switch(e.tag){case 0:case 11:case 15:Io(e),e.flags&2048&&Ka(9,e,e.return);break;case 3:Io(e);break;case 12:Io(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,tc(e)):Io(e);break;default:Io(e)}}function tc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Pn=o,M0(o,e)}y0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ka(8,n,n.return),tc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,tc(n));break;default:tc(n)}e=e.sibling}}function M0(e,n){for(;Pn!==null;){var a=Pn;switch(a.tag){case 0:case 11:case 15:Ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:xo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Pn=o;else t:for(a=e;Pn!==null;){o=Pn;var u=o.sibling,f=o.return;if(d0(o),o===a){Pn=null;break t}if(u!==null){u.return=f,Pn=u;break t}Pn=f}}}var Fx={getCacheForType:function(e){var n=jn(Rn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Hx=typeof WeakMap=="function"?WeakMap:Map,Ve=0,en=null,Te=null,Le=0,ke=0,pi=null,$a=!1,Er=!1,Af=!1,Ca=0,dn=0,ts=0,Bs=0,Rf=0,Ai=0,br=0,Bo=null,ni=null,Cf=!1,wf=0,ec=1/0,nc=null,es=null,Hn=0,ns=null,Tr=null,Ar=0,Df=0,Uf=null,E0=null,Fo=0,Nf=null;function mi(){if((Ve&2)!==0&&Le!==0)return Le&-Le;if(F.T!==null){var e=dr;return e!==0?e:Ff()}return Ue()}function b0(){Ai===0&&(Ai=(Le&536870912)===0||Fe?X():536870912);var e=Ti.current;return e!==null&&(e.flags|=32),Ai}function gi(e,n,a){(e===en&&(ke===2||ke===9)||e.cancelPendingCommit!==null)&&(Rr(e,0),is(e,Le,Ai,!1)),vt(e,a),((Ve&2)===0||e!==en)&&(e===en&&((Ve&2)===0&&(Bs|=a),dn===4&&is(e,Le,Ai,!1)),na(e))}function T0(e,n,a){if((Ve&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||ne(e,n),u=o?kx(e,n):Pf(e,n,!0),f=o;do{if(u===0){Er&&!o&&is(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Gx(a)){u=Pf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var A=e;u=Bo;var V=A.current.memoizedState.isDehydrated;if(V&&(Rr(A,M).flags|=256),M=Pf(A,M,!1),M!==2){if(Af&&!V){A.errorRecoveryDisabledLanes|=f,Bs|=f,u=4;break t}f=ni,ni=u,f!==null&&(ni===null?ni=f:ni.push.apply(ni,f))}u=M}if(f=!1,u!==2)continue}}if(u===1){Rr(e,0),is(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:is(o,n,Ai,!$a);break t;case 2:ni=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=wf+300-ee(),10<u)){if(is(o,n,Ai,!$a),oe(o,0,!0)!==0)break t;o.timeoutHandle=tg(A0.bind(null,o,a,ni,nc,Cf,n,Ai,Bs,br,$a,f,2,-0,0),u);break t}A0(o,a,ni,nc,Cf,n,Ai,Bs,br,$a,f,0,-0,0)}}break}while(!0);na(e)}function A0(e,n,a,o,u,f,M,A,V,st,_t,Et,lt,ut){if(e.timeoutHandle=-1,Et=n.subtreeFlags,(Et&8192||(Et&16785408)===16785408)&&(qo={stylesheets:null,count:0,unsuspend:My},x0(n),Et=by(),Et!==null)){e.cancelPendingCommit=Et(L0.bind(null,e,n,f,a,o,u,M,A,V,_t,1,lt,ut)),is(e,f,M,!st);return}L0(e,n,f,a,o,u,M,A,V)}function Gx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ui(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function is(e,n,a,o){n&=~Rf,n&=~Bs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-kt(u),M=1<<f;o[f]=-1,u&=~M}a!==0&&It(e,a,n)}function ic(){return(Ve&6)===0?(Ho(0),!1):!0}function Lf(){if(Te!==null){if(ke===0)var e=Te.return;else e=Te,ya=Ns=null,Zu(e),xr=null,Do=0,e=Te;for(;e!==null;)s0(e.alternate,e),e=e.return;Te=null}}function Rr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,sy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Lf(),en=e,Te=a=_a(e.current,null),Le=n,ke=0,pi=null,$a=!1,Er=ne(e,n),Af=!1,br=Ai=Rf=Bs=ts=dn=0,ni=Bo=null,Cf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-kt(o),f=1<<u;n|=e[u],o&=~f}return Ca=n,Tl(),a}function R0(e,n){Se=null,F.H=jl,n===So||n===Ol?(n=jp(),ke=3):n===Gp?(n=jp(),ke=4):ke=n===Xm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,pi=n,Te===null&&(dn=1,Zl(e,Si(n,e.current)))}function C0(){var e=F.H;return F.H=jl,e===null?jl:e}function w0(){var e=F.A;return F.A=Fx,e}function Of(){dn=4,$a||(Le&4194048)!==Le&&Ti.current!==null||(Er=!0),(ts&134217727)===0&&(Bs&134217727)===0||en===null||is(en,Le,Ai,!1)}function Pf(e,n,a){var o=Ve;Ve|=2;var u=C0(),f=w0();(en!==e||Le!==n)&&(nc=null,Rr(e,n)),n=!1;var M=dn;t:do try{if(ke!==0&&Te!==null){var A=Te,V=pi;switch(ke){case 8:Lf(),M=6;break t;case 3:case 2:case 9:case 6:Ti.current===null&&(n=!0);var st=ke;if(ke=0,pi=null,Cr(e,A,V,st),a&&Er){M=0;break t}break;default:st=ke,ke=0,pi=null,Cr(e,A,V,st)}}Vx(),M=dn;break}catch(_t){R0(e,_t)}while(!0);return n&&e.shellSuspendCounter++,ya=Ns=null,Ve=o,F.H=u,F.A=f,Te===null&&(en=null,Le=0,Tl()),M}function Vx(){for(;Te!==null;)D0(Te)}function kx(e,n){var a=Ve;Ve|=2;var o=C0(),u=w0();en!==e||Le!==n?(nc=null,ec=ee()+500,Rr(e,n)):Er=ne(e,n);t:do try{if(ke!==0&&Te!==null){n=Te;var f=pi;e:switch(ke){case 1:ke=0,pi=null,Cr(e,n,f,1);break;case 2:case 9:if(Vp(f)){ke=0,pi=null,U0(n);break}n=function(){ke!==2&&ke!==9||en!==e||(ke=7),na(e)},f.then(n,n);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:Vp(f)?(ke=0,pi=null,U0(n)):(ke=0,pi=null,Cr(e,n,f,7));break;case 5:var M=null;switch(Te.tag){case 26:M=Te.memoizedState;case 5:case 27:var A=Te;if(!M||hg(M)){ke=0,pi=null;var V=A.sibling;if(V!==null)Te=V;else{var st=A.return;st!==null?(Te=st,ac(st)):Te=null}break e}}ke=0,pi=null,Cr(e,n,f,5);break;case 6:ke=0,pi=null,Cr(e,n,f,6);break;case 8:Lf(),dn=6;break t;default:throw Error(s(462))}}jx();break}catch(_t){R0(e,_t)}while(!0);return ya=Ns=null,F.H=o,F.A=u,Ve=a,Te!==null?0:(en=null,Le=0,Tl(),dn)}function jx(){for(;Te!==null&&!ln();)D0(Te)}function D0(e){var n=i0(e.alternate,e,Ca);e.memoizedProps=e.pendingProps,n===null?ac(e):Te=n}function U0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Qm(a,n,n.pendingProps,n.type,void 0,Le);break;case 11:n=Qm(a,n,n.pendingProps,n.type.render,n.ref,Le);break;case 5:Zu(n);default:s0(a,n),n=Te=Np(n,Ca),n=i0(a,n,Ca)}e.memoizedProps=e.pendingProps,n===null?ac(e):Te=n}function Cr(e,n,a,o){ya=Ns=null,Zu(n),xr=null,Do=0;var u=n.return;try{if(Lx(e,u,n,a,Le)){dn=1,Zl(e,Si(a,e.current)),Te=null;return}}catch(f){if(u!==null)throw Te=u,f;dn=1,Zl(e,Si(a,e.current)),Te=null;return}n.flags&32768?(Fe||o===1?e=!0:Er||(Le&536870912)!==0?e=!1:($a=e=!0,(o===2||o===9||o===3||o===6)&&(o=Ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),N0(n,e)):ac(n)}function ac(e){var n=e;do{if((n.flags&32768)!==0){N0(n,$a);return}e=n.return;var a=Px(n.alternate,n,Ca);if(a!==null){Te=a;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=e}while(n!==null);dn===0&&(dn=5)}function N0(e,n){do{var a=zx(e.alternate,e);if(a!==null){a.flags&=32767,Te=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Te=e;return}Te=e=a}while(e!==null);dn=6,Te=null}function L0(e,n,a,o,u,f,M,A,V){e.cancelPendingCommit=null;do sc();while(Hn!==0);if((Ve&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=bu,Ht(e,a,f,M,A,V),e===en&&(Te=en=null,Le=0),Tr=n,ns=e,Ar=a,Df=f,Uf=u,E0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Yx(C,function(){return B0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=Q.p,Q.p=2,M=Ve,Ve|=4;try{Ix(e,n,a)}finally{Ve=M,Q.p=u,F.T=o}}Hn=1,O0(),P0(),z0()}}function O0(){if(Hn===1){Hn=0;var e=ns,n=Tr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=Q.p;Q.p=2;var u=Ve;Ve|=4;try{g0(n,e);var f=Wf,M=Mp(e.containerInfo),A=f.focusedElem,V=f.selectionRange;if(M!==A&&A&&A.ownerDocument&&Sp(A.ownerDocument.documentElement,A)){if(V!==null&&xu(A)){var st=V.start,_t=V.end;if(_t===void 0&&(_t=st),"selectionStart"in A)A.selectionStart=st,A.selectionEnd=Math.min(_t,A.value.length);else{var Et=A.ownerDocument||document,lt=Et&&Et.defaultView||window;if(lt.getSelection){var ut=lt.getSelection(),ce=A.textContent.length,ae=Math.min(V.start,ce),We=V.end===void 0?ae:Math.min(V.end,ce);!ut.extend&&ae>We&&(M=We,We=ae,ae=M);var J=yp(A,ae),W=yp(A,We);if(J&&W&&(ut.rangeCount!==1||ut.anchorNode!==J.node||ut.anchorOffset!==J.offset||ut.focusNode!==W.node||ut.focusOffset!==W.offset)){var it=Et.createRange();it.setStart(J.node,J.offset),ut.removeAllRanges(),ae>We?(ut.addRange(it),ut.extend(W.node,W.offset)):(it.setEnd(W.node,W.offset),ut.addRange(it))}}}}for(Et=[],ut=A;ut=ut.parentNode;)ut.nodeType===1&&Et.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Et.length;A++){var yt=Et[A];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}_c=!!qf,Wf=qf=null}finally{Ve=u,Q.p=o,F.T=a}}e.current=n,Hn=2}}function P0(){if(Hn===2){Hn=0;var e=ns,n=Tr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=Q.p;Q.p=2;var u=Ve;Ve|=4;try{h0(e,n.alternate,n)}finally{Ve=u,Q.p=o,F.T=a}}Hn=3}}function z0(){if(Hn===4||Hn===3){Hn=0,ge();var e=ns,n=Tr,a=Ar,o=E0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Hn=5:(Hn=0,Tr=ns=null,I0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(es=null),$e(a),n=n.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(z,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=Q.p,Q.p=2,F.T=null;try{for(var f=e.onRecoverableError,M=0;M<o.length;M++){var A=o[M];f(A.value,{componentStack:A.stack})}}finally{F.T=n,Q.p=u}}(Ar&3)!==0&&sc(),na(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Nf?Fo++:(Fo=0,Nf=e):Fo=0,Ho(0)}}function I0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,xo(n)))}function sc(e){return O0(),P0(),z0(),B0()}function B0(){if(Hn!==5)return!1;var e=ns,n=Df;Df=0;var a=$e(Ar),o=F.T,u=Q.p;try{Q.p=32>a?32:a,F.T=null,a=Uf,Uf=null;var f=ns,M=Ar;if(Hn=0,Tr=ns=null,Ar=0,(Ve&6)!==0)throw Error(s(331));var A=Ve;if(Ve|=4,S0(f.current),v0(f,f.current,M,a),Ve=A,Ho(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(z,f)}catch{}return!0}finally{Q.p=u,F.T=o,I0(e,n)}}function F0(e,n,a){n=Si(a,n),n=uf(e.stateNode,n,2),e=qa(e,n,2),e!==null&&(vt(e,2),na(e))}function Je(e,n,a){if(e.tag===3)F0(e,e,a);else for(;n!==null;){if(n.tag===3){F0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(es===null||!es.has(o))){e=Si(a,e),a=km(2),o=qa(n,a,2),o!==null&&(jm(a,o,n,e),vt(o,2),na(o));break}}n=n.return}}function zf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Hx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Af=!0,u.add(a),e=Xx.bind(null,e,n,a),n.then(e,e))}function Xx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,en===e&&(Le&a)===a&&(dn===4||dn===3&&(Le&62914560)===Le&&300>ee()-wf?(Ve&2)===0&&Rr(e,0):Rf|=a,br===Le&&(br=0)),na(e)}function H0(e,n){n===0&&(n=Ot()),e=cr(e,n),e!==null&&(vt(e,n),na(e))}function qx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),H0(e,a)}function Wx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),H0(e,a)}function Yx(e,n){return se(e,n)}var rc=null,wr=null,If=!1,oc=!1,Bf=!1,Fs=0;function na(e){e!==wr&&e.next===null&&(wr===null?rc=wr=e:wr=wr.next=e),oc=!0,If||(If=!0,Kx())}function Ho(e,n){if(!Bf&&oc){Bf=!0;do for(var a=!1,o=rc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var M=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-kt(42|e)+1)-1,f&=u&~(M&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,j0(o,f))}else f=Le,f=oe(o,o===en?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||ne(o,f)||(a=!0,j0(o,f));o=o.next}while(a);Bf=!1}}function Zx(){G0()}function G0(){oc=If=!1;var e=0;Fs!==0&&(ay()&&(e=Fs),Fs=0);for(var n=ee(),a=null,o=rc;o!==null;){var u=o.next,f=V0(o,n);f===0?(o.next=null,a===null?rc=u:a.next=u,u===null&&(wr=a)):(a=o,(e!==0||(f&3)!==0)&&(oc=!0)),o=u}Ho(e)}function V0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var M=31-kt(f),A=1<<M,V=u[M];V===-1?((A&a)===0||(A&o)!==0)&&(u[M]=Ce(A,n)):V<=n&&(e.expiredLanes|=A),f&=~A}if(n=en,a=Le,a=oe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(ke===2||ke===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&k(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ne(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&k(o),$e(a)){case 2:case 8:a=ht;break;case 32:a=C;break;case 268435456:a=Y;break;default:a=C}return o=k0.bind(null,e),a=se(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&k(o),e.callbackPriority=2,e.callbackNode=null,2}function k0(e,n){if(Hn!==0&&Hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(sc()&&e.callbackNode!==a)return null;var o=Le;return o=oe(e,e===en?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(T0(e,o,n),V0(e,ee()),e.callbackNode!=null&&e.callbackNode===a?k0.bind(null,e):null)}function j0(e,n){if(sc())return null;T0(e,n,!0)}function Kx(){ry(function(){(Ve&6)!==0?se(De,Zx):G0()})}function Ff(){return Fs===0&&(Fs=X()),Fs}function X0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ha(""+e)}function q0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Qx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=X0((u[xn]||null).action),M=o.submitter;M&&(n=(n=M[xn]||null)?X0(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var A=new Ml("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Fs!==0){var V=M?q0(u,M):new FormData(u);sf(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(A.preventDefault(),V=M?q0(u,M):new FormData(u),sf(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var Hf=0;Hf<Eu.length;Hf++){var Gf=Eu[Hf],Jx=Gf.toLowerCase(),$x=Gf[0].toUpperCase()+Gf.slice(1);Bi(Jx,"on"+$x)}Bi(Tp,"onAnimationEnd"),Bi(Ap,"onAnimationIteration"),Bi(Rp,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(gx,"onTransitionRun"),Bi(_x,"onTransitionStart"),Bi(vx,"onTransitionCancel"),Bi(Cp,"onTransitionEnd"),D("onMouseEnter",["mouseout","mouseover"]),D("onMouseLeave",["mouseout","mouseover"]),D("onPointerEnter",["pointerout","pointerover"]),D("onPointerLeave",["pointerout","pointerover"]),sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),sn("onBeforeInput",["compositionend","keypress","textInput","paste"]),sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ty=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Go));function W0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var M=o.length-1;0<=M;M--){var A=o[M],V=A.instance,st=A.currentTarget;if(A=A.listener,V!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=st;try{f(u)}catch(_t){Yl(_t)}u.currentTarget=null,f=V}else for(M=0;M<o.length;M++){if(A=o[M],V=A.instance,st=A.currentTarget,A=A.listener,V!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=st;try{f(u)}catch(_t){Yl(_t)}u.currentTarget=null,f=V}}}}function Ae(e,n){var a=n[yi];a===void 0&&(a=n[yi]=new Set);var o=e+"__bubble";a.has(o)||(Y0(n,e,2,!1),a.add(o))}function Vf(e,n,a){var o=0;n&&(o|=4),Y0(a,e,o,n)}var lc="_reactListening"+Math.random().toString(36).slice(2);function kf(e){if(!e[lc]){e[lc]=!0,Ni.forEach(function(a){a!=="selectionchange"&&(ty.has(a)||Vf(a,!1,e),Vf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[lc]||(n[lc]=!0,Vf("selectionchange",!1,n))}}function Y0(e,n,a,o){switch(vg(n)){case 2:var u=Ry;break;case 8:u=Cy;break;default:u=ih}a=u.bind(null,n,a,e),u=void 0,!Es||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function jf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var A=o.stateNode.containerInfo;if(A===u)break;if(M===4)for(M=o.return;M!==null;){var V=M.tag;if((V===3||V===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;A!==null;){if(M=ci(A),M===null)return;if(V=M.tag,V===5||V===6||V===26||V===27){o=f=M;continue t}A=A.parentNode}}o=o.return}Ga(function(){var st=f,_t=ar(a),Et=[];t:{var lt=wp.get(e);if(lt!==void 0){var ut=Ml,ce=e;switch(e){case"keypress":if(yl(a)===0)break t;case"keydown":case"keyup":ut=Yv;break;case"focusin":ce="focus",ut=pu;break;case"focusout":ce="blur",ut=pu;break;case"beforeblur":case"afterblur":ut=pu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=zv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Qv;break;case Tp:case Ap:case Rp:ut=Fv;break;case Cp:ut=$v;break;case"scroll":case"scrollend":ut=Ov;break;case"wheel":ut=ex;break;case"copy":case"cut":case"paste":ut=Gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=rp;break;case"toggle":case"beforetoggle":ut=ix}var ae=(n&4)!==0,We=!ae&&(e==="scroll"||e==="scrollend"),J=ae?lt!==null?lt+"Capture":null:lt;ae=[];for(var W=st,it;W!==null;){var yt=W;if(it=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||it===null||J===null||(yt=ga(W,J),yt!=null&&ae.push(Vo(W,yt,it))),We)break;W=W.return}0<ae.length&&(lt=new ut(lt,ce,null,a,_t),Et.push({event:lt,listeners:ae}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",lt&&a!==ir&&(ce=a.relatedTarget||a.fromElement)&&(ci(ce)||ce[kn]))break t;if((ut||lt)&&(lt=_t.window===_t?_t:(lt=_t.ownerDocument)?lt.defaultView||lt.parentWindow:window,ut?(ce=a.relatedTarget||a.toElement,ut=st,ce=ce?ci(ce):null,ce!==null&&(We=c(ce),ae=ce.tag,ce!==We||ae!==5&&ae!==27&&ae!==6)&&(ce=null)):(ut=null,ce=st),ut!==ce)){if(ae=ap,yt="onMouseLeave",J="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(ae=rp,yt="onPointerLeave",J="onPointerEnter",W="pointer"),We=ut==null?lt:da(ut),it=ce==null?lt:da(ce),lt=new ae(yt,W+"leave",ut,a,_t),lt.target=We,lt.relatedTarget=it,yt=null,ci(_t)===st&&(ae=new ae(J,W+"enter",ce,a,_t),ae.target=it,ae.relatedTarget=We,yt=ae),We=yt,ut&&ce)e:{for(ae=ut,J=ce,W=0,it=ae;it;it=Dr(it))W++;for(it=0,yt=J;yt;yt=Dr(yt))it++;for(;0<W-it;)ae=Dr(ae),W--;for(;0<it-W;)J=Dr(J),it--;for(;W--;){if(ae===J||J!==null&&ae===J.alternate)break e;ae=Dr(ae),J=Dr(J)}ae=null}else ae=null;ut!==null&&Z0(Et,lt,ut,ae,!1),ce!==null&&We!==null&&Z0(Et,We,ce,ae,!0)}}t:{if(lt=st?da(st):window,ut=lt.nodeName&&lt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&lt.type==="file")var qt=pp;else if(hp(lt))if(mp)qt=dx;else{qt=fx;var Me=ux}else ut=lt.nodeName,!ut||ut.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?st&&Tn(st.elementType)&&(qt=pp):qt=hx;if(qt&&(qt=qt(e,st))){dp(Et,qt,a,_t);break t}Me&&Me(e,lt,st),e==="focusout"&&st&&lt.type==="number"&&st.memoizedProps.value!=null&&un(lt,"number",lt.value)}switch(Me=st?da(st):window,e){case"focusin":(hp(Me)||Me.contentEditable==="true")&&(rr=Me,yu=st,po=null);break;case"focusout":po=yu=rr=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,Ep(Et,a,_t);break;case"selectionchange":if(mx)break;case"keydown":case"keyup":Ep(Et,a,_t)}var Jt;if(gu)t:{switch(e){case"compositionstart":var re="onCompositionStart";break t;case"compositionend":re="onCompositionEnd";break t;case"compositionupdate":re="onCompositionUpdate";break t}re=void 0}else sr?up(e,a)&&(re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(op&&a.locale!=="ko"&&(sr||re!=="onCompositionStart"?re==="onCompositionEnd"&&sr&&(Jt=np()):(An=_t,Ii="value"in An?An.value:An.textContent,sr=!0)),Me=cc(st,re),0<Me.length&&(re=new sp(re,e,null,a,_t),Et.push({event:re,listeners:Me}),Jt?re.data=Jt:(Jt=fp(a),Jt!==null&&(re.data=Jt)))),(Jt=sx?rx(e,a):ox(e,a))&&(re=cc(st,"onBeforeInput"),0<re.length&&(Me=new sp("onBeforeInput","beforeinput",null,a,_t),Et.push({event:Me,listeners:re}),Me.data=Jt)),Qx(Et,e,st,a,_t)}W0(Et,n)})}function Vo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function cc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ga(e,a),u!=null&&o.unshift(Vo(e,u,f)),u=ga(e,n),u!=null&&o.push(Vo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Z0(e,n,a,o,u){for(var f=n._reactName,M=[];a!==null&&a!==o;){var A=a,V=A.alternate,st=A.stateNode;if(A=A.tag,V!==null&&V===o)break;A!==5&&A!==26&&A!==27||st===null||(V=st,u?(st=ga(a,f),st!=null&&M.unshift(Vo(a,st,V))):u||(st=ga(a,f),st!=null&&M.push(Vo(a,st,V)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var ey=/\r\n?/g,ny=/\u0000|\uFFFD/g;function K0(e){return(typeof e=="string"?e:""+e).replace(ey,`
`).replace(ny,"")}function Q0(e,n){return n=K0(n),K0(e)===n}function uc(){}function qe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zt(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zt(e,""+o);break;case"className":Pt(e,"class",o);break;case"tabIndex":Pt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Pt(e,a,o);break;case"style":Qe(e,o,f);break;case"data":if(n!=="object"){Pt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ha(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&qe(e,n,"name",u.name,u,null),qe(e,n,"formEncType",u.formEncType,u,null),qe(e,n,"formMethod",u.formMethod,u,null),qe(e,n,"formTarget",u.formTarget,u,null)):(qe(e,n,"encType",u.encType,u,null),qe(e,n,"method",u.method,u,null),qe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ha(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=uc);break;case"onScroll":o!=null&&Ae("scroll",e);break;case"onScrollEnd":o!=null&&Ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ha(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ae("beforetoggle",e),Ae("toggle",e),xt(e,"popover",o);break;case"xlinkActuate":Bt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Bt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Bt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Bt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Bt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Bt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":xt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ms.get(a)||a,xt(e,a,o))}}function Xf(e,n,a,o,u,f){switch(a){case"style":Qe(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?zt(e,o):(typeof o=="number"||typeof o=="bigint")&&zt(e,""+o);break;case"onScroll":o!=null&&Ae("scroll",e);break;case"onScrollEnd":o!=null&&Ae("scrollend",e);break;case"onClick":o!=null&&(e.onclick=uc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pa.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):xt(e,a,o)}}}function Gn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",e),Ae("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(e,n,f,M,a,null)}}u&&qe(e,n,"srcSet",a.srcSet,a,null),o&&qe(e,n,"src",a.src,a,null);return;case"input":Ae("invalid",e);var A=f=M=u=null,V=null,st=null;for(o in a)if(a.hasOwnProperty(o)){var _t=a[o];if(_t!=null)switch(o){case"name":u=_t;break;case"type":M=_t;break;case"checked":V=_t;break;case"defaultChecked":st=_t;break;case"value":f=_t;break;case"defaultValue":A=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(s(137,n));break;default:qe(e,n,o,_t,a,null)}}Ge(e,f,A,V,st,M,u,!1),rn(e);return;case"select":Ae("invalid",e),o=M=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":M=A;break;case"multiple":o=A;default:qe(e,n,u,A,a,null)}n=f,a=M,e.multiple=!!o,n!=null?fn(e,!!o,n,!1):a!=null&&fn(e,!!o,a,!0);return;case"textarea":Ae("invalid",e),f=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(A=a[M],A!=null))switch(M){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:qe(e,n,M,A,a,null)}Tt(e,o,u,f),rn(e);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:qe(e,n,V,o,a,null)}return;case"dialog":Ae("beforetoggle",e),Ae("toggle",e),Ae("cancel",e),Ae("close",e);break;case"iframe":case"object":Ae("load",e);break;case"video":case"audio":for(o=0;o<Go.length;o++)Ae(Go[o],e);break;case"image":Ae("error",e),Ae("load",e);break;case"details":Ae("toggle",e);break;case"embed":case"source":case"link":Ae("error",e),Ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in a)if(a.hasOwnProperty(st)&&(o=a[st],o!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(e,n,st,o,a,null)}return;default:if(Tn(n)){for(_t in a)a.hasOwnProperty(_t)&&(o=a[_t],o!==void 0&&Xf(e,n,_t,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&qe(e,n,A,o,a,null))}function iy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,M=null,A=null,V=null,st=null,_t=null;for(ut in a){var Et=a[ut];if(a.hasOwnProperty(ut)&&Et!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":V=Et;default:o.hasOwnProperty(ut)||qe(e,n,ut,null,o,Et)}}for(var lt in o){var ut=o[lt];if(Et=a[lt],o.hasOwnProperty(lt)&&(ut!=null||Et!=null))switch(lt){case"type":f=ut;break;case"name":u=ut;break;case"checked":st=ut;break;case"defaultChecked":_t=ut;break;case"value":M=ut;break;case"defaultValue":A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==Et&&qe(e,n,lt,ut,o,Et)}}Oi(e,M,A,V,st,_t,f,u);return;case"select":ut=M=A=lt=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":ut=V;default:o.hasOwnProperty(f)||qe(e,n,f,null,o,V)}for(u in o)if(f=o[u],V=a[u],o.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":lt=f;break;case"defaultValue":A=f;break;case"multiple":M=f;default:f!==V&&qe(e,n,u,f,o,V)}n=A,a=M,o=ut,lt!=null?fn(e,!!a,lt,!1):!!o!=!!a&&(n!=null?fn(e,!!a,n,!0):fn(e,!!a,a?[]:"",!1));return;case"textarea":ut=lt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:qe(e,n,A,null,o,u)}for(M in o)if(u=o[M],f=a[M],o.hasOwnProperty(M)&&(u!=null||f!=null))switch(M){case"value":lt=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&qe(e,n,M,u,o,f)}O(e,lt,ut);return;case"option":for(var ce in a)if(lt=a[ce],a.hasOwnProperty(ce)&&lt!=null&&!o.hasOwnProperty(ce))switch(ce){case"selected":e.selected=!1;break;default:qe(e,n,ce,null,o,lt)}for(V in o)if(lt=o[V],ut=a[V],o.hasOwnProperty(V)&&lt!==ut&&(lt!=null||ut!=null))switch(V){case"selected":e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:qe(e,n,V,lt,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)lt=a[ae],a.hasOwnProperty(ae)&&lt!=null&&!o.hasOwnProperty(ae)&&qe(e,n,ae,null,o,lt);for(st in o)if(lt=o[st],ut=a[st],o.hasOwnProperty(st)&&lt!==ut&&(lt!=null||ut!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:qe(e,n,st,lt,o,ut)}return;default:if(Tn(n)){for(var We in a)lt=a[We],a.hasOwnProperty(We)&&lt!==void 0&&!o.hasOwnProperty(We)&&Xf(e,n,We,void 0,o,lt);for(_t in o)lt=o[_t],ut=a[_t],!o.hasOwnProperty(_t)||lt===ut||lt===void 0&&ut===void 0||Xf(e,n,_t,lt,o,ut);return}}for(var J in a)lt=a[J],a.hasOwnProperty(J)&&lt!=null&&!o.hasOwnProperty(J)&&qe(e,n,J,null,o,lt);for(Et in o)lt=o[Et],ut=a[Et],!o.hasOwnProperty(Et)||lt===ut||lt==null&&ut==null||qe(e,n,Et,lt,o,ut)}var qf=null,Wf=null;function fc(e){return e.nodeType===9?e:e.ownerDocument}function J0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Yf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zf=null;function ay(){var e=window.event;return e&&e.type==="popstate"?e===Zf?!1:(Zf=e,!0):(Zf=null,!1)}var tg=typeof setTimeout=="function"?setTimeout:void 0,sy=typeof clearTimeout=="function"?clearTimeout:void 0,eg=typeof Promise=="function"?Promise:void 0,ry=typeof queueMicrotask=="function"?queueMicrotask:typeof eg<"u"?function(e){return eg.resolve(null).then(e).catch(oy)}:tg;function oy(e){setTimeout(function(){throw e})}function as(e){return e==="head"}function ng(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&ko(M.documentElement),a&2&&ko(M.body),a&4)for(a=M.head,ko(a),M=a.firstChild;M;){var A=M.nextSibling,V=M.nodeName;M[Ki]||V==="SCRIPT"||V==="STYLE"||V==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=A}}if(u===0){e.removeChild(f),Qo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Qo(n)}function Kf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),li(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ly(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ki])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Hi(e.nextSibling),e===null)break}return null}function cy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Hi(e.nextSibling),e===null))return null;return e}function Qf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function uy(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Jf=null;function ig(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function ag(e,n,a){switch(n=fc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ko(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);li(e)}var Ri=new Map,sg=new Set;function hc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var wa=Q.d;Q.d={f:fy,r:hy,D:dy,C:py,L:my,m:gy,X:vy,S:_y,M:xy};function fy(){var e=wa.f(),n=ic();return e||n}function hy(e){var n=Jn(e);n!==null&&n.tag===5&&n.type==="form"?Tm(n):wa.r(e)}var Ur=typeof document>"u"?null:document;function rg(e,n,a){var o=Ur;if(o&&typeof n=="string"&&n){var u=je(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),sg.has(u)||(sg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Gn(n,"link",e),tn(n),o.head.appendChild(n)))}}function dy(e){wa.D(e),rg("dns-prefetch",e,null)}function py(e,n){wa.C(e,n),rg("preconnect",e,n)}function my(e,n,a){wa.L(e,n,a);var o=Ur;if(o&&e&&n){var u='link[rel="preload"][as="'+je(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+je(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+je(a.imageSizes)+'"]')):u+='[href="'+je(e)+'"]';var f=u;switch(n){case"style":f=Nr(e);break;case"script":f=Lr(e)}Ri.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ri.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(jo(f))||n==="script"&&o.querySelector(Xo(f))||(n=o.createElement("link"),Gn(n,"link",e),tn(n),o.head.appendChild(n)))}}function gy(e,n){wa.m(e,n);var a=Ur;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+je(o)+'"][href="'+je(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Lr(e)}if(!Ri.has(f)&&(e=_({rel:"modulepreload",href:e},n),Ri.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Xo(f)))return}o=a.createElement("link"),Gn(o,"link",e),tn(o),a.head.appendChild(o)}}}function _y(e,n,a){wa.S(e,n,a);var o=Ur;if(o&&e){var u=Ui(o).hoistableStyles,f=Nr(e);n=n||"default";var M=u.get(f);if(!M){var A={loading:0,preload:null};if(M=o.querySelector(jo(f)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ri.get(f))&&$f(e,a);var V=M=o.createElement("link");tn(V),Gn(V,"link",e),V._p=new Promise(function(st,_t){V.onload=st,V.onerror=_t}),V.addEventListener("load",function(){A.loading|=1}),V.addEventListener("error",function(){A.loading|=2}),A.loading|=4,dc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:A},u.set(f,M)}}}function vy(e,n){wa.X(e,n);var a=Ur;if(a&&e){var o=Ui(a).hoistableScripts,u=Lr(e),f=o.get(u);f||(f=a.querySelector(Xo(u)),f||(e=_({src:e,async:!0},n),(n=Ri.get(u))&&th(e,n),f=a.createElement("script"),tn(f),Gn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function xy(e,n){wa.M(e,n);var a=Ur;if(a&&e){var o=Ui(a).hoistableScripts,u=Lr(e),f=o.get(u);f||(f=a.querySelector(Xo(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=Ri.get(u))&&th(e,n),f=a.createElement("script"),tn(f),Gn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function og(e,n,a,o){var u=(u=Mt.current)?hc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Nr(a.href),a=Ui(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Nr(a.href);var f=Ui(u).hoistableStyles,M=f.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,M),(f=u.querySelector(jo(e)))&&!f._p&&(M.instance=f,M.state.loading=5),Ri.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ri.set(e,a),f||yy(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Lr(a),a=Ui(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Nr(e){return'href="'+je(e)+'"'}function jo(e){return'link[rel="stylesheet"]['+e+"]"}function lg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function yy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Gn(n,"link",a),tn(n),e.head.appendChild(n))}function Lr(e){return'[src="'+je(e)+'"]'}function Xo(e){return"script[async]"+e}function cg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+je(a.href)+'"]');if(o)return n.instance=o,tn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),tn(o),Gn(o,"style",u),dc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Nr(a.href);var f=e.querySelector(jo(u));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;o=lg(a),(u=Ri.get(u))&&$f(o,u),f=(e.ownerDocument||e).createElement("link"),tn(f);var M=f;return M._p=new Promise(function(A,V){M.onload=A,M.onerror=V}),Gn(f,"link",o),n.state.loading|=4,dc(f,a.precedence,e),n.instance=f;case"script":return f=Lr(a.src),(u=e.querySelector(Xo(f)))?(n.instance=u,tn(u),u):(o=a,(u=Ri.get(f))&&(o=_({},a),th(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),tn(u),Gn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,dc(o,a.precedence,e));return n.instance}function dc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,M=0;M<o.length;M++){var A=o[M];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function $f(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function th(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var pc=null;function ug(e,n,a){if(pc===null){var o=new Map,u=pc=new Map;u.set(a,o)}else u=pc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ki]||f[gn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=e+M;var A=o.get(M);A?A.push(f):o.set(M,[f])}}return o}function fg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Sy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function hg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var qo=null;function My(){}function Ey(e,n,a){if(qo===null)throw Error(s(475));var o=qo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Nr(a.href),f=e.querySelector(jo(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=mc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,tn(f);return}f=e.ownerDocument||e,a=lg(a),(u=Ri.get(u))&&$f(a,u),f=f.createElement("link"),tn(f);var M=f;M._p=new Promise(function(A,V){M.onload=A,M.onerror=V}),Gn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=mc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function by(){if(qo===null)throw Error(s(475));var e=qo;return e.stylesheets&&e.count===0&&eh(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&eh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function mc(){if(this.count--,this.count===0){if(this.stylesheets)eh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gc=null;function eh(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gc=new Map,n.forEach(Ty,e),gc=null,mc.call(e))}function Ty(e,n){if(!(n.state.loading&4)){var a=gc.get(e);if(a)var o=a.get(null);else{a=new Map,gc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var M=u[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),f=a.get(M)||o,f===o&&a.set(null,u),a.set(M,u),this.count++,o=mc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Wo={$$typeof:L,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Ay(e,n,a,o,u,f,M,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dt(0),this.hiddenUpdates=dt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function dg(e,n,a,o,u,f,M,A,V,st,_t,Et){return e=new Ay(e,n,a,M,A,V,st,Et),n=1,f===!0&&(n|=24),f=fi(3,null,null,n),e.current=f,f.stateNode=e,n=Pu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Fu(f),e}function pg(e){return e?(e=ur,e):ur}function mg(e,n,a,o,u,f){u=pg(u),o.context===null?o.context=u:o.pendingContext=u,o=Xa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=qa(e,o,n),a!==null&&(gi(a,e,n),Eo(a,e,n))}function gg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function nh(e,n){gg(e,n),(e=e.alternate)&&gg(e,n)}function _g(e){if(e.tag===13){var n=cr(e,67108864);n!==null&&gi(n,e,67108864),nh(e,67108864)}}var _c=!0;function Ry(e,n,a,o){var u=F.T;F.T=null;var f=Q.p;try{Q.p=2,ih(e,n,a,o)}finally{Q.p=f,F.T=u}}function Cy(e,n,a,o){var u=F.T;F.T=null;var f=Q.p;try{Q.p=8,ih(e,n,a,o)}finally{Q.p=f,F.T=u}}function ih(e,n,a,o){if(_c){var u=ah(o);if(u===null)jf(e,n,o,vc,a),xg(e,o);else if(Dy(u,e,n,a,o))o.stopPropagation();else if(xg(e,o),n&4&&-1<wy.indexOf(e)){for(;u!==null;){var f=Jn(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=Gt(f.pendingLanes);if(M!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var V=1<<31-kt(M);A.entanglements[1]|=V,M&=~V}na(f),(Ve&6)===0&&(ec=ee()+500,Ho(0))}}break;case 13:A=cr(f,2),A!==null&&gi(A,f,2),ic(),nh(f,2)}if(f=ah(o),f===null&&jf(e,n,o,vc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else jf(e,n,o,null,a)}}function ah(e){return e=ar(e),sh(e)}var vc=null;function sh(e){if(vc=null,e=ci(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return vc=e,null}function vg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wt()){case De:return 2;case ht:return 8;case C:case T:return 32;case Y:return 268435456;default:return 32}default:return 32}}var rh=!1,ss=null,rs=null,os=null,Yo=new Map,Zo=new Map,ls=[],wy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xg(e,n){switch(e){case"focusin":case"focusout":ss=null;break;case"dragenter":case"dragleave":rs=null;break;case"mouseover":case"mouseout":os=null;break;case"pointerover":case"pointerout":Yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(n.pointerId)}}function Ko(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Jn(n),n!==null&&_g(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Dy(e,n,a,o,u){switch(n){case"focusin":return ss=Ko(ss,e,n,a,o,u),!0;case"dragenter":return rs=Ko(rs,e,n,a,o,u),!0;case"mouseover":return os=Ko(os,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Yo.set(f,Ko(Yo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Zo.set(f,Ko(Zo.get(f)||null,e,n,a,o,u)),!0}return!1}function yg(e){var n=ci(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Vn(e.priority,function(){if(a.tag===13){var o=mi();o=Ne(o);var u=cr(a,o);u!==null&&gi(u,a,o),nh(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ah(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ir=o,a.target.dispatchEvent(o),ir=null}else return n=Jn(a),n!==null&&_g(n),e.blockedOn=a,!1;n.shift()}return!0}function Sg(e,n,a){xc(e)&&a.delete(n)}function Uy(){rh=!1,ss!==null&&xc(ss)&&(ss=null),rs!==null&&xc(rs)&&(rs=null),os!==null&&xc(os)&&(os=null),Yo.forEach(Sg),Zo.forEach(Sg)}function yc(e,n){e.blockedOn===n&&(e.blockedOn=null,rh||(rh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Uy)))}var Sc=null;function Mg(e){Sc!==e&&(Sc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Sc===e&&(Sc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(sh(o||a)===null)continue;break}var f=Jn(a);f!==null&&(e.splice(n,3),n-=3,sf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Qo(e){function n(V){return yc(V,e)}ss!==null&&yc(ss,e),rs!==null&&yc(rs,e),os!==null&&yc(os,e),Yo.forEach(n),Zo.forEach(n);for(var a=0;a<ls.length;a++){var o=ls[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ls.length&&(a=ls[0],a.blockedOn===null);)yg(a),a.blockedOn===null&&ls.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],M=u[xn]||null;if(typeof f=="function")M||Mg(a);else if(M){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,M=f[xn]||null)A=M.formAction;else if(sh(u)!==null)continue}else A=M.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Mg(a)}}}function oh(e){this._internalRoot=e}Mc.prototype.render=oh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=mi();mg(a,o,e,n,null,null)},Mc.prototype.unmount=oh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;mg(e.current,2,null,e,null,null),ic(),n[kn]=null}};function Mc(e){this._internalRoot=e}Mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ue();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ls.length&&n!==0&&n<ls[a].priority;a++);ls.splice(a,0,e),a===0&&yg(e)}};var Eg=t.version;if(Eg!=="19.1.0")throw Error(s(527,Eg,"19.1.0"));Q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var Ny={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{z=Ec.inject(Ny),Ut=Ec}catch{}}return $o.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Fm,f=Hm,M=Gm,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=dg(e,1,!1,null,null,a,o,u,f,M,A,null),e[kn]=n.current,kf(e),new oh(n)},$o.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=Fm,M=Hm,A=Gm,V=null,st=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(V=a.unstable_transitionCallbacks),a.formState!==void 0&&(st=a.formState)),n=dg(e,1,!0,n,a??null,o,u,f,M,A,V,st),n.context=pg(null),a=n.current,o=mi(),o=Ne(o),u=Xa(o),u.callback=null,qa(a,u,o),a=o,n.current.lanes=a,vt(n,a),na(n),e[kn]=n.current,kf(e),new Mc(n)},$o.version="19.1.0",$o}var Lg;function qy(){if(Lg)return uh.exports;Lg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),uh.exports=Xy(),uh.exports}var Wy=qy();/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Zy=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),Og=r=>{const t=Zy(r);return t.charAt(0).toUpperCase()+t.slice(1)},Y_=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),Ky=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=Nt.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},p)=>Nt.createElement("svg",{ref:p,...Qy,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:Y_("lucide",l),...!c&&!Ky(d)&&{"aria-hidden":"true"},...d},[...h.map(([m,_])=>Nt.createElement(m,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=(r,t)=>{const i=Nt.forwardRef(({className:s,...l},c)=>Nt.createElement(Jy,{ref:c,iconNode:t,className:Y_(`lucide-${Yy(Og(r))}`,`lucide-${r}`,s),...l}));return i.displayName=Og(r),i};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Pg=Be("activity",$y);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"1qyhux"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]],eS=Be("armchair",tS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],tl=Be("arrow-up-right",nS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],aS=Be("arrow-up",iS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],ph=Be("boxes",sS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Z_=Be("check",rS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],lS=Be("chevron-right",oS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],uS=Be("circle-check",cS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],hS=Be("database",fS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],pS=Be("download",dS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],zg=Be("file-spreadsheet",mS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Ig=Be("flask-conical",gS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],K_=Be("folder-open",_S);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Q_=Be("layers",vS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Yh=Be("layout-grid",xS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],SS=Be("leaf",yS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],J_=Be("loader-circle",MS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],bS=Be("maximize",ES);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"M5 12h14",key:"1ays0h"}]],Bg=Be("minus",TS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],RS=Be("move",AS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]],wS=Be("panel-right-close",CS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],US=Be("play",DS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]],LS=Be("plug-zap",NS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],bc=Be("plus",OS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],$_=Be("refresh-cw",PS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],IS=Be("settings",zS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],FS=Be("shield-check",BS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],mh=Be("sparkles",HS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Fg=Be("square",GS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],kS=Be("upload",VS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],XS=Be("wifi-off",jS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],gh=Be("x",qS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bd="176",Ia={ROTATE:0,DOLLY:1,PAN:2},vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},WS=0,Hg=1,YS=2,tv=1,ev=2,Pa=3,Fa=0,ri=1,sa=2,xs=0,Kr=1,Gg=2,Vg=3,kg=4,ZS=5,Ws=100,KS=101,QS=102,JS=103,$S=104,tM=200,eM=201,nM=202,iM=203,Zh=204,Kh=205,aM=206,sM=207,rM=208,oM=209,lM=210,cM=211,uM=212,fM=213,hM=214,Qh=0,Jh=1,$h=2,Jr=3,td=4,ed=5,nd=6,id=7,nv=0,dM=1,pM=2,ys=0,mM=1,gM=2,_M=3,iv=4,vM=5,xM=6,yM=7,av=300,$r=301,to=302,ad=303,sd=304,cu=306,rd=1e3,Zs=1001,od=1002,xi=1003,SM=1004,Tc=1005,ra=1006,_h=1007,Ks=1008,ca=1009,sv=1010,rv=1011,fl=1012,Fd=1013,Qs=1014,oa=1015,gl=1016,Hd=1017,Gd=1018,hl=1020,ov=35902,lv=1021,cv=1022,Wi=1023,dl=1026,pl=1027,Vd=1028,kd=1029,uv=1030,jd=1031,Xd=1033,Qc=33776,Jc=33777,$c=33778,tu=33779,ld=35840,cd=35841,ud=35842,fd=35843,hd=36196,dd=37492,pd=37496,md=37808,gd=37809,_d=37810,vd=37811,xd=37812,yd=37813,Sd=37814,Md=37815,Ed=37816,bd=37817,Td=37818,Ad=37819,Rd=37820,Cd=37821,eu=36492,wd=36494,Dd=36495,fv=36283,Ud=36284,Nd=36285,Ld=36286,MM=3200,EM=3201,hv=0,bM=1,_s="",Qn="srgb",eo="srgb-linear",su="linear",Ye="srgb",Or=7680,jg=519,TM=512,AM=513,RM=514,dv=515,CM=516,wM=517,DM=518,UM=519,Xg=35044,qg="300 es",za=2e3,ru=2001;class tr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nu=Math.PI/180,Od=180/Math.PI;function _l(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(qn[r&255]+qn[r>>8&255]+qn[r>>16&255]+qn[r>>24&255]+"-"+qn[t&255]+qn[t>>8&255]+"-"+qn[t>>16&15|64]+qn[t>>24&255]+"-"+qn[i&63|128]+qn[i>>8&255]+"-"+qn[i>>16&255]+qn[i>>24&255]+qn[s&255]+qn[s>>8&255]+qn[s>>16&255]+qn[s>>24&255]).toLowerCase()}function Ee(r,t,i){return Math.max(t,Math.min(i,r))}function NM(r,t){return(r%t+t)%t}function vh(r,t,i){return(1-i)*r+i*t}function el(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ii(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const LM={DEG2RAD:nu};class de{constructor(t=0,i=0){de.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ve{constructor(t,i,s,l,c,h,d,p,m){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,p,m)}set(t,i,s,l,c,h,d,p,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=p,_[6]=s,_[7]=h,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],_=s[4],x=s[7],y=s[2],S=s[5],b=s[8],w=l[0],v=l[3],g=l[6],I=l[1],L=l[4],U=l[7],B=l[2],H=l[5],G=l[8];return c[0]=h*w+d*I+p*B,c[3]=h*v+d*L+p*H,c[6]=h*g+d*U+p*G,c[1]=m*w+_*I+x*B,c[4]=m*v+_*L+x*H,c[7]=m*g+_*U+x*G,c[2]=y*w+S*I+b*B,c[5]=y*v+S*L+b*H,c[8]=y*g+S*U+b*G,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8];return i*h*_-i*d*m-s*c*_+s*d*p+l*c*m-l*h*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8],x=_*h-d*m,y=d*p-_*c,S=m*c-h*p,b=i*x+s*y+l*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=x*w,t[1]=(l*m-_*s)*w,t[2]=(d*s-l*h)*w,t[3]=y*w,t[4]=(_*i-l*p)*w,t[5]=(l*c-d*i)*w,t[6]=S*w,t[7]=(s*p-m*i)*w,t[8]=(h*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(xh.makeScale(t,i)),this}rotate(t){return this.premultiply(xh.makeRotation(-t)),this}translate(t,i){return this.premultiply(xh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xh=new ve;function pv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ou(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function OM(){const r=ou("canvas");return r.style.display="block",r}const Wg={};function iu(r){r in Wg||(Wg[r]=!0,console.warn(r))}function PM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function zM(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function IM(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yg=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zg=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BM(){const r={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ye&&(l.r=Ba(l.r),l.g=Ba(l.g),l.b=Ba(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ye&&(l.r=Qr(l.r),l.g=Qr(l.g),l.b=Qr(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===_s?su:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[eo]:{primaries:t,whitePoint:s,transfer:su,toXYZ:Yg,fromXYZ:Zg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:t,whitePoint:s,transfer:Ye,toXYZ:Yg,fromXYZ:Zg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),r}const Ie=BM();function Ba(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Qr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Pr;class FM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Pr===void 0&&(Pr=ou("canvas")),Pr.width=t.width,Pr.height=t.height;const l=Pr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Pr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ou("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ba(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ba(i[s]/255)*255):i[s]=Ba(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let HM=0;class qd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=_l(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(yh(l[h].image)):c.push(yh(l[h]))}else c=yh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function yh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?FM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GM=0;class Yn extends tr{constructor(t=Yn.DEFAULT_IMAGE,i=Yn.DEFAULT_MAPPING,s=Zs,l=Zs,c=ra,h=Ks,d=Wi,p=ca,m=Yn.DEFAULT_ANISOTROPY,_=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=_l(),this.name="",this.source=new qd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==av)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rd:t.x=t.x-Math.floor(t.x);break;case Zs:t.x=t.x<0?0:1;break;case od:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rd:t.y=t.y-Math.floor(t.y);break;case Zs:t.y=t.y<0?0:1;break;case od:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=av;Yn.DEFAULT_ANISOTROPY=1;class pn{constructor(t=0,i=0,s=0,l=1){pn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const p=t.elements,m=p[0],_=p[4],x=p[8],y=p[1],S=p[5],b=p[9],w=p[2],v=p[6],g=p[10];if(Math.abs(_-y)<.01&&Math.abs(x-w)<.01&&Math.abs(b-v)<.01){if(Math.abs(_+y)<.1&&Math.abs(x+w)<.1&&Math.abs(b+v)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,U=(S+1)/2,B=(g+1)/2,H=(_+y)/4,G=(x+w)/4,q=(b+v)/4;return L>U&&L>B?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=H/s,c=G/s):U>B?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=H/l,c=q/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=G/c,l=q/c),this.set(s,l,c,i),this}let I=Math.sqrt((v-b)*(v-b)+(x-w)*(x-w)+(y-_)*(y-_));return Math.abs(I)<.001&&(I=1),this.x=(v-b)/I,this.y=(x-w)/I,this.z=(y-_)/I,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this.w=Ee(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this.w=Ee(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VM extends tr{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth?s.depth:1,this.scissor=new pn(0,0,t,i),this.scissorTest=!1,this.viewport=new pn(0,0,t,i);const l={width:t,height:i,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ra,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const c=new Yn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new qd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Js extends VM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class mv extends Yn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=Zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kM extends Yn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=Zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $s{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let p=s[l+0],m=s[l+1],_=s[l+2],x=s[l+3];const y=c[h+0],S=c[h+1],b=c[h+2],w=c[h+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=_,t[i+3]=x;return}if(d===1){t[i+0]=y,t[i+1]=S,t[i+2]=b,t[i+3]=w;return}if(x!==w||p!==y||m!==S||_!==b){let v=1-d;const g=p*y+m*S+_*b+x*w,I=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const B=Math.sqrt(L),H=Math.atan2(B,g*I);v=Math.sin(v*H)/B,d=Math.sin(d*H)/B}const U=d*I;if(p=p*v+y*U,m=m*v+S*U,_=_*v+b*U,x=x*v+w*U,v===1-d){const B=1/Math.sqrt(p*p+m*m+_*_+x*x);p*=B,m*=B,_*=B,x*=B}}t[i]=p,t[i+1]=m,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],p=s[l+1],m=s[l+2],_=s[l+3],x=c[h],y=c[h+1],S=c[h+2],b=c[h+3];return t[i]=d*b+_*x+p*S-m*y,t[i+1]=p*b+_*y+m*x-d*S,t[i+2]=m*b+_*S+d*y-p*x,t[i+3]=_*b-d*x-p*y-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(s/2),_=d(l/2),x=d(c/2),y=p(s/2),S=p(l/2),b=p(c/2);switch(h){case"XYZ":this._x=y*_*x+m*S*b,this._y=m*S*x-y*_*b,this._z=m*_*b+y*S*x,this._w=m*_*x-y*S*b;break;case"YXZ":this._x=y*_*x+m*S*b,this._y=m*S*x-y*_*b,this._z=m*_*b-y*S*x,this._w=m*_*x+y*S*b;break;case"ZXY":this._x=y*_*x-m*S*b,this._y=m*S*x+y*_*b,this._z=m*_*b+y*S*x,this._w=m*_*x-y*S*b;break;case"ZYX":this._x=y*_*x-m*S*b,this._y=m*S*x+y*_*b,this._z=m*_*b-y*S*x,this._w=m*_*x+y*S*b;break;case"YZX":this._x=y*_*x+m*S*b,this._y=m*S*x+y*_*b,this._z=m*_*b-y*S*x,this._w=m*_*x-y*S*b;break;case"XZY":this._x=y*_*x-m*S*b,this._y=m*S*x-y*_*b,this._z=m*_*b+y*S*x,this._w=m*_*x+y*S*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],_=i[6],x=i[10],y=s+d+x;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-m)*S,this._z=(h-l)*S}else if(s>d&&s>x){const S=2*Math.sqrt(1+s-d-x);this._w=(_-p)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+m)/S}else if(d>x){const S=2*Math.sqrt(1+d-s-x);this._w=(c-m)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+x-s-d);this._w=(h-l)/S,this._x=(c+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,p=i._y,m=i._z,_=i._w;return this._x=s*_+h*d+l*m-c*p,this._y=l*_+h*p+c*d-s*m,this._z=c*_+h*m+s*p-l*d,this._w=h*_-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),x=Math.sin((1-i)*_)/m,y=Math.sin(i*_)/m;return this._w=h*x+this._w*y,this._x=s*x+this._x*y,this._y=l*x+this._y*y,this._z=c*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,i=0,s=0){et.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Kg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Kg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*s),_=2*(d*i-c*l),x=2*(c*s-h*i);return this.x=i+p*m+h*x-d*_,this.y=s+p*_+d*m-c*x,this.z=l+p*x+c*_-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-s*p,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Sh.copy(this).projectOnVector(t),this.sub(Sh)}reflect(t){return this.sub(Sh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sh=new et,Kg=new $s;class er{constructor(t=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Gi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Gi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Gi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Gi):Gi.fromBufferAttribute(c,h),Gi.applyMatrix4(t.matrixWorld),this.expandByPoint(Gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ac.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ac.copy(s.boundingBox)),Ac.applyMatrix4(t.matrixWorld),this.union(Ac)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gi),Gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nl),Rc.subVectors(this.max,nl),zr.subVectors(t.a,nl),Ir.subVectors(t.b,nl),Br.subVectors(t.c,nl),us.subVectors(Ir,zr),fs.subVectors(Br,Ir),Hs.subVectors(zr,Br);let i=[0,-us.z,us.y,0,-fs.z,fs.y,0,-Hs.z,Hs.y,us.z,0,-us.x,fs.z,0,-fs.x,Hs.z,0,-Hs.x,-us.y,us.x,0,-fs.y,fs.x,0,-Hs.y,Hs.x,0];return!Mh(i,zr,Ir,Br,Rc)||(i=[1,0,0,0,1,0,0,0,1],!Mh(i,zr,Ir,Br,Rc))?!1:(Cc.crossVectors(us,fs),i=[Cc.x,Cc.y,Cc.z],Mh(i,zr,Ir,Br,Rc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Da),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Da=[new et,new et,new et,new et,new et,new et,new et,new et],Gi=new et,Ac=new er,zr=new et,Ir=new et,Br=new et,us=new et,fs=new et,Hs=new et,nl=new et,Rc=new et,Cc=new et,Gs=new et;function Mh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Gs.fromArray(r,c);const d=l.x*Math.abs(Gs.x)+l.y*Math.abs(Gs.y)+l.z*Math.abs(Gs.z),p=t.dot(Gs),m=i.dot(Gs),_=s.dot(Gs);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const jM=new er,il=new et,Eh=new et;class vl{constructor(t=new et,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):jM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;il.subVectors(t,this.center);const i=il.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(il,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(il.copy(t.center).add(Eh)),this.expandByPoint(il.copy(t.center).sub(Eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ua=new et,bh=new et,wc=new et,hs=new et,Th=new et,Dc=new et,Ah=new et;class Wd{constructor(t=new et,i=new et(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ua)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ua.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ua.copy(this.origin).addScaledVector(this.direction,i),Ua.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){bh.copy(t).add(i).multiplyScalar(.5),wc.copy(i).sub(t).normalize(),hs.copy(this.origin).sub(bh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(wc),d=hs.dot(this.direction),p=-hs.dot(wc),m=hs.lengthSq(),_=Math.abs(1-h*h);let x,y,S,b;if(_>0)if(x=h*p-d,y=h*d-p,b=c*_,x>=0)if(y>=-b)if(y<=b){const w=1/_;x*=w,y*=w,S=x*(x+h*y+2*d)+y*(h*x+y+2*p)+m}else y=c,x=Math.max(0,-(h*y+d)),S=-x*x+y*(y+2*p)+m;else y=-c,x=Math.max(0,-(h*y+d)),S=-x*x+y*(y+2*p)+m;else y<=-b?(x=Math.max(0,-(-h*c+d)),y=x>0?-c:Math.min(Math.max(-c,-p),c),S=-x*x+y*(y+2*p)+m):y<=b?(x=0,y=Math.min(Math.max(-c,-p),c),S=y*(y+2*p)+m):(x=Math.max(0,-(h*c+d)),y=x>0?c:Math.min(Math.max(-c,-p),c),S=-x*x+y*(y+2*p)+m);else y=h>0?-c:c,x=Math.max(0,-(h*y+d)),S=-x*x+y*(y+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(bh).addScaledVector(wc,y),S}intersectSphere(t,i){Ua.subVectors(t.center,this.origin);const s=Ua.dot(this.direction),l=Ua.dot(Ua)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,p;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,y=this.origin;return m>=0?(s=(t.min.x-y.x)*m,l=(t.max.x-y.x)*m):(s=(t.max.x-y.x)*m,l=(t.min.x-y.x)*m),_>=0?(c=(t.min.y-y.y)*_,h=(t.max.y-y.y)*_):(c=(t.max.y-y.y)*_,h=(t.min.y-y.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-y.z)*x,p=(t.max.z-y.z)*x):(d=(t.max.z-y.z)*x,p=(t.min.z-y.z)*x),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ua)!==null}intersectTriangle(t,i,s,l,c){Th.subVectors(i,t),Dc.subVectors(s,t),Ah.crossVectors(Th,Dc);let h=this.direction.dot(Ah),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;hs.subVectors(this.origin,t);const p=d*this.direction.dot(Dc.crossVectors(hs,Dc));if(p<0)return null;const m=d*this.direction.dot(Th.cross(hs));if(m<0||p+m>h)return null;const _=-d*hs.dot(Ah);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(t,i,s,l,c,h,d,p,m,_,x,y,S,b,w,v){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,p,m,_,x,y,S,b,w,v)}set(t,i,s,l,c,h,d,p,m,_,x,y,S,b,w,v){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=x,g[14]=y,g[3]=S,g[7]=b,g[11]=w,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/Fr.setFromMatrixColumn(t,0).length(),c=1/Fr.setFromMatrixColumn(t,1).length(),h=1/Fr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const y=h*_,S=h*x,b=d*_,w=d*x;i[0]=p*_,i[4]=-p*x,i[8]=m,i[1]=S+b*m,i[5]=y-w*m,i[9]=-d*p,i[2]=w-y*m,i[6]=b+S*m,i[10]=h*p}else if(t.order==="YXZ"){const y=p*_,S=p*x,b=m*_,w=m*x;i[0]=y+w*d,i[4]=b*d-S,i[8]=h*m,i[1]=h*x,i[5]=h*_,i[9]=-d,i[2]=S*d-b,i[6]=w+y*d,i[10]=h*p}else if(t.order==="ZXY"){const y=p*_,S=p*x,b=m*_,w=m*x;i[0]=y-w*d,i[4]=-h*x,i[8]=b+S*d,i[1]=S+b*d,i[5]=h*_,i[9]=w-y*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const y=h*_,S=h*x,b=d*_,w=d*x;i[0]=p*_,i[4]=b*m-S,i[8]=y*m+w,i[1]=p*x,i[5]=w*m+y,i[9]=S*m-b,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const y=h*p,S=h*m,b=d*p,w=d*m;i[0]=p*_,i[4]=w-y*x,i[8]=b*x+S,i[1]=x,i[5]=h*_,i[9]=-d*_,i[2]=-m*_,i[6]=S*x+b,i[10]=y-w*x}else if(t.order==="XZY"){const y=h*p,S=h*m,b=d*p,w=d*m;i[0]=p*_,i[4]=-x,i[8]=m*_,i[1]=y*x+w,i[5]=h*_,i[9]=S*x-b,i[2]=b*x-S,i[6]=d*_,i[10]=w*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(XM,t,qM)}lookAt(t,i,s){const l=this.elements;return _i.subVectors(t,i),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),ds.crossVectors(s,_i),ds.lengthSq()===0&&(Math.abs(s.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),ds.crossVectors(s,_i)),ds.normalize(),Uc.crossVectors(_i,ds),l[0]=ds.x,l[4]=Uc.x,l[8]=_i.x,l[1]=ds.y,l[5]=Uc.y,l[9]=_i.y,l[2]=ds.z,l[6]=Uc.z,l[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],_=s[1],x=s[5],y=s[9],S=s[13],b=s[2],w=s[6],v=s[10],g=s[14],I=s[3],L=s[7],U=s[11],B=s[15],H=l[0],G=l[4],q=l[8],N=l[12],R=l[1],j=l[5],at=l[9],rt=l[13],ft=l[2],mt=l[6],F=l[10],Q=l[14],Z=l[3],At=l[7],P=l[11],nt=l[15];return c[0]=h*H+d*R+p*ft+m*Z,c[4]=h*G+d*j+p*mt+m*At,c[8]=h*q+d*at+p*F+m*P,c[12]=h*N+d*rt+p*Q+m*nt,c[1]=_*H+x*R+y*ft+S*Z,c[5]=_*G+x*j+y*mt+S*At,c[9]=_*q+x*at+y*F+S*P,c[13]=_*N+x*rt+y*Q+S*nt,c[2]=b*H+w*R+v*ft+g*Z,c[6]=b*G+w*j+v*mt+g*At,c[10]=b*q+w*at+v*F+g*P,c[14]=b*N+w*rt+v*Q+g*nt,c[3]=I*H+L*R+U*ft+B*Z,c[7]=I*G+L*j+U*mt+B*At,c[11]=I*q+L*at+U*F+B*P,c[15]=I*N+L*rt+U*Q+B*nt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],p=t[9],m=t[13],_=t[2],x=t[6],y=t[10],S=t[14],b=t[3],w=t[7],v=t[11],g=t[15];return b*(+c*p*x-l*m*x-c*d*y+s*m*y+l*d*S-s*p*S)+w*(+i*p*S-i*m*y+c*h*y-l*h*S+l*m*_-c*p*_)+v*(+i*m*x-i*d*S-c*h*x+s*h*S+c*d*_-s*m*_)+g*(-l*d*_-i*p*x+i*d*y+l*h*x-s*h*y+s*p*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8],x=t[9],y=t[10],S=t[11],b=t[12],w=t[13],v=t[14],g=t[15],I=x*v*m-w*y*m+w*p*S-d*v*S-x*p*g+d*y*g,L=b*y*m-_*v*m-b*p*S+h*v*S+_*p*g-h*y*g,U=_*w*m-b*x*m+b*d*S-h*w*S-_*d*g+h*x*g,B=b*x*p-_*w*p-b*d*y+h*w*y+_*d*v-h*x*v,H=i*I+s*L+l*U+c*B;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/H;return t[0]=I*G,t[1]=(w*y*c-x*v*c-w*l*S+s*v*S+x*l*g-s*y*g)*G,t[2]=(d*v*c-w*p*c+w*l*m-s*v*m-d*l*g+s*p*g)*G,t[3]=(x*p*c-d*y*c-x*l*m+s*y*m+d*l*S-s*p*S)*G,t[4]=L*G,t[5]=(_*v*c-b*y*c+b*l*S-i*v*S-_*l*g+i*y*g)*G,t[6]=(b*p*c-h*v*c-b*l*m+i*v*m+h*l*g-i*p*g)*G,t[7]=(h*y*c-_*p*c+_*l*m-i*y*m-h*l*S+i*p*S)*G,t[8]=U*G,t[9]=(b*x*c-_*w*c-b*s*S+i*w*S+_*s*g-i*x*g)*G,t[10]=(h*w*c-b*d*c+b*s*m-i*w*m-h*s*g+i*d*g)*G,t[11]=(_*d*c-h*x*c-_*s*m+i*x*m+h*s*S-i*d*S)*G,t[12]=B*G,t[13]=(_*w*l-b*x*l+b*s*y-i*w*y-_*s*v+i*x*v)*G,t[14]=(b*d*l-h*w*l-b*s*p+i*w*p+h*s*v-i*d*v)*G,t[15]=(h*x*l-_*d*l+_*s*p-i*x*p-h*s*y+i*d*y)*G,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,p=t.z,m=c*h,_=c*d;return this.set(m*h+s,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+s,_*p-l*h,0,m*p-l*d,_*p+l*h,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,_=h+h,x=d+d,y=c*m,S=c*_,b=c*x,w=h*_,v=h*x,g=d*x,I=p*m,L=p*_,U=p*x,B=s.x,H=s.y,G=s.z;return l[0]=(1-(w+g))*B,l[1]=(S+U)*B,l[2]=(b-L)*B,l[3]=0,l[4]=(S-U)*H,l[5]=(1-(y+g))*H,l[6]=(v+I)*H,l[7]=0,l[8]=(b+L)*G,l[9]=(v-I)*G,l[10]=(1-(y+w))*G,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=Fr.set(l[0],l[1],l[2]).length();const h=Fr.set(l[4],l[5],l[6]).length(),d=Fr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Vi.copy(this);const m=1/c,_=1/h,x=1/d;return Vi.elements[0]*=m,Vi.elements[1]*=m,Vi.elements[2]*=m,Vi.elements[4]*=_,Vi.elements[5]*=_,Vi.elements[6]*=_,Vi.elements[8]*=x,Vi.elements[9]*=x,Vi.elements[10]*=x,i.setFromRotationMatrix(Vi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=za){const p=this.elements,m=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),y=(s+l)/(s-l);let S,b;if(d===za)S=-(h+c)/(h-c),b=-2*h*c/(h-c);else if(d===ru)S=-h/(h-c),b=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=za){const p=this.elements,m=1/(i-t),_=1/(s-l),x=1/(h-c),y=(i+t)*m,S=(s+l)*_;let b,w;if(d===za)b=(h+c)*x,w=-2*x;else if(d===ru)b=c*x,w=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=w,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Fr=new et,Vi=new an,XM=new et(0,0,0),qM=new et(1,1,1),ds=new et,Uc=new et,_i=new et,Qg=new an,Jg=new $s;class ua{constructor(t=0,i=0,s=0,l=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],_=l[9],x=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ee(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Ee(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Qg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Jg.setFromEuler(this),this.setFromQuaternion(Jg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class Yd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let WM=0;const $g=new et,Hr=new $s,Na=new an,Nc=new et,al=new et,YM=new et,ZM=new $s,t_=new et(1,0,0),e_=new et(0,1,0),n_=new et(0,0,1),i_={type:"added"},KM={type:"removed"},Gr={type:"childadded",child:null},Rh={type:"childremoved",child:null};class Bn extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=_l(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const t=new et,i=new ua,s=new $s,l=new et(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new ve}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Hr.setFromAxisAngle(t,i),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(t,i){return Hr.setFromAxisAngle(t,i),this.quaternion.premultiply(Hr),this}rotateX(t){return this.rotateOnAxis(t_,t)}rotateY(t){return this.rotateOnAxis(e_,t)}rotateZ(t){return this.rotateOnAxis(n_,t)}translateOnAxis(t,i){return $g.copy(t).applyQuaternion(this.quaternion),this.position.add($g.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(t_,t)}translateY(t){return this.translateOnAxis(e_,t)}translateZ(t){return this.translateOnAxis(n_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Na.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Nc.copy(t):Nc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Na.lookAt(al,Nc,this.up):Na.lookAt(Nc,al,this.up),this.quaternion.setFromRotationMatrix(Na),l&&(Na.extractRotation(l.matrixWorld),Hr.setFromRotationMatrix(Na),this.quaternion.premultiply(Hr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(i_),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(KM),Rh.child=t,this.dispatchEvent(Rh),Rh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Na.multiply(t.parent.matrixWorld)),t.applyMatrix4(Na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(i_),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,t,YM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,ZM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const x=p[m];c(t.shapes,x)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),_=h(t.images),x=h(t.shapes),y=h(t.skeletons),S=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new et(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ki=new et,La=new et,Ch=new et,Oa=new et,Vr=new et,kr=new et,a_=new et,wh=new et,Dh=new et,Uh=new et,Nh=new pn,Lh=new pn,Oh=new pn;class qi{constructor(t=new et,i=new et,s=new et){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),ki.subVectors(t,i),l.cross(ki);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){ki.subVectors(l,i),La.subVectors(s,i),Ch.subVectors(t,i);const h=ki.dot(ki),d=ki.dot(La),p=ki.dot(Ch),m=La.dot(La),_=La.dot(Ch),x=h*m-d*d;if(x===0)return c.set(0,0,0),null;const y=1/x,S=(m*p-d*_)*y,b=(h*_-d*p)*y;return c.set(1-S-b,b,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Oa)===null?!1:Oa.x>=0&&Oa.y>=0&&Oa.x+Oa.y<=1}static getInterpolation(t,i,s,l,c,h,d,p){return this.getBarycoord(t,i,s,l,Oa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Oa.x),p.addScaledVector(h,Oa.y),p.addScaledVector(d,Oa.z),p)}static getInterpolatedAttribute(t,i,s,l,c,h){return Nh.setScalar(0),Lh.setScalar(0),Oh.setScalar(0),Nh.fromBufferAttribute(t,i),Lh.fromBufferAttribute(t,s),Oh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Nh,c.x),h.addScaledVector(Lh,c.y),h.addScaledVector(Oh,c.z),h}static isFrontFacing(t,i,s,l){return ki.subVectors(s,i),La.subVectors(t,i),ki.cross(La).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ki.subVectors(this.c,this.b),La.subVectors(this.a,this.b),ki.cross(La).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return qi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return qi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return qi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Vr.subVectors(l,s),kr.subVectors(c,s),wh.subVectors(t,s);const p=Vr.dot(wh),m=kr.dot(wh);if(p<=0&&m<=0)return i.copy(s);Dh.subVectors(t,l);const _=Vr.dot(Dh),x=kr.dot(Dh);if(_>=0&&x<=_)return i.copy(l);const y=p*x-_*m;if(y<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(s).addScaledVector(Vr,h);Uh.subVectors(t,c);const S=Vr.dot(Uh),b=kr.dot(Uh);if(b>=0&&S<=b)return i.copy(c);const w=S*m-p*b;if(w<=0&&m>=0&&b<=0)return d=m/(m-b),i.copy(s).addScaledVector(kr,d);const v=_*b-S*x;if(v<=0&&x-_>=0&&S-b>=0)return a_.subVectors(c,l),d=(x-_)/(x-_+(S-b)),i.copy(l).addScaledVector(a_,d);const g=1/(v+w+y);return h=w*g,d=y*g,i.copy(s).addScaledVector(Vr,h).addScaledVector(kr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Ph(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Re{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Ie.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ie.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Ie.workingColorSpace){if(t=NM(t,1),i=Ee(i,0,1),s=Ee(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Ph(h,c,t+1/3),this.g=Ph(h,c,t),this.b=Ph(h,c,t-1/3)}return Ie.toWorkingColorSpace(this,l),this}setStyle(t,i=Qn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Qn){const s=gv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ba(t.r),this.g=Ba(t.g),this.b=Ba(t.b),this}copyLinearToSRGB(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qn){return Ie.fromWorkingColorSpace(Wn.copy(this),t),Math.round(Ee(Wn.r*255,0,255))*65536+Math.round(Ee(Wn.g*255,0,255))*256+Math.round(Ee(Wn.b*255,0,255))}getHexString(t=Qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ie.workingColorSpace){Ie.fromWorkingColorSpace(Wn.copy(this),i);const s=Wn.r,l=Wn.g,c=Wn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const _=(d+h)/2;if(d===h)p=0,m=0;else{const x=h-d;switch(m=_<=.5?x/(h+d):x/(2-h-d),h){case s:p=(l-c)/x+(l<c?6:0);break;case l:p=(c-s)/x+2;break;case c:p=(s-l)/x+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,i=Ie.workingColorSpace){return Ie.fromWorkingColorSpace(Wn.copy(this),i),t.r=Wn.r,t.g=Wn.g,t.b=Wn.b,t}getStyle(t=Qn){Ie.fromWorkingColorSpace(Wn.copy(this),t);const i=Wn.r,s=Wn.g,l=Wn.b;return t!==Qn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ps),this.setHSL(ps.h+t,ps.s+i,ps.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ps),t.getHSL(Lc);const s=vh(ps.h,Lc.h,i),l=vh(ps.s,Lc.s,i),c=vh(ps.l,Lc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new Re;Re.NAMES=gv;let QM=0;class ao extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=_l(),this.name="",this.type="Material",this.blending=Kr,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=Kh,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(s.blending=this.blending),this.side!==Fa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Zh&&(s.blendSrc=this.blendSrc),this.blendDst!==Kh&&(s.blendDst=this.blendDst),this.blendEquation!==Ws&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Jr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class no extends ao{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const bn=new et,Oc=new de;let JM=0;class Yi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:JM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Xg,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Oc.fromBufferAttribute(this,i),Oc.applyMatrix3(t),this.setXY(i,Oc.x,Oc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)bn.fromBufferAttribute(this,i),bn.applyMatrix3(t),this.setXYZ(i,bn.x,bn.y,bn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)bn.fromBufferAttribute(this,i),bn.applyMatrix4(t),this.setXYZ(i,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)bn.fromBufferAttribute(this,i),bn.applyNormalMatrix(t),this.setXYZ(i,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)bn.fromBufferAttribute(this,i),bn.transformDirection(t),this.setXYZ(i,bn.x,bn.y,bn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=el(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ii(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=el(i,this.array)),i}setX(t,i){return this.normalized&&(i=ii(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=el(i,this.array)),i}setY(t,i){return this.normalized&&(i=ii(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=el(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ii(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=el(i,this.array)),i}setW(t,i){return this.normalized&&(i=ii(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=ii(i,this.array),s=ii(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=ii(i,this.array),s=ii(s,this.array),l=ii(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=ii(i,this.array),s=ii(s,this.array),l=ii(l,this.array),c=ii(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xg&&(t.usage=this.usage),t}}class _v extends Yi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class vv extends Yi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Un extends Yi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let $M=0;const wi=new an,zh=new Bn,jr=new et,vi=new er,sl=new er,In=new et;class Zi extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=_l(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pv(t)?vv:_v)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ve().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,i,s){return wi.makeTranslation(t,i,s),this.applyMatrix4(wi),this}scale(t,i,s){return wi.makeScale(t,i,s),this.applyMatrix4(wi),this}lookAt(t){return zh.lookAt(t),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Un(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];vi.setFromBufferAttribute(c),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const s=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];sl.setFromBufferAttribute(d),this.morphTargetsRelative?(In.addVectors(vi.min,sl.min),vi.expandByPoint(In),In.addVectors(vi.max,sl.max),vi.expandByPoint(In)):(vi.expandByPoint(sl.min),vi.expandByPoint(sl.max))}vi.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)In.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(In));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)In.fromBufferAttribute(d,m),p&&(jr.fromBufferAttribute(t,m),In.add(jr)),l=Math.max(l,s.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let q=0;q<s.count;q++)d[q]=new et,p[q]=new et;const m=new et,_=new et,x=new et,y=new de,S=new de,b=new de,w=new et,v=new et;function g(q,N,R){m.fromBufferAttribute(s,q),_.fromBufferAttribute(s,N),x.fromBufferAttribute(s,R),y.fromBufferAttribute(c,q),S.fromBufferAttribute(c,N),b.fromBufferAttribute(c,R),_.sub(m),x.sub(m),S.sub(y),b.sub(y);const j=1/(S.x*b.y-b.x*S.y);isFinite(j)&&(w.copy(_).multiplyScalar(b.y).addScaledVector(x,-S.y).multiplyScalar(j),v.copy(x).multiplyScalar(S.x).addScaledVector(_,-b.x).multiplyScalar(j),d[q].add(w),d[N].add(w),d[R].add(w),p[q].add(v),p[N].add(v),p[R].add(v))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let q=0,N=I.length;q<N;++q){const R=I[q],j=R.start,at=R.count;for(let rt=j,ft=j+at;rt<ft;rt+=3)g(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const L=new et,U=new et,B=new et,H=new et;function G(q){B.fromBufferAttribute(l,q),H.copy(B);const N=d[q];L.copy(N),L.sub(B.multiplyScalar(B.dot(N))).normalize(),U.crossVectors(H,N);const j=U.dot(p[q])<0?-1:1;h.setXYZW(q,L.x,L.y,L.z,j)}for(let q=0,N=I.length;q<N;++q){const R=I[q],j=R.start,at=R.count;for(let rt=j,ft=j+at;rt<ft;rt+=3)G(t.getX(rt+0)),G(t.getX(rt+1)),G(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Yi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const l=new et,c=new et,h=new et,d=new et,p=new et,m=new et,_=new et,x=new et;if(t)for(let y=0,S=t.count;y<S;y+=3){const b=t.getX(y+0),w=t.getX(y+1),v=t.getX(y+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,v),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,v),d.add(_),p.add(_),m.add(_),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(v,m.x,m.y,m.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)In.fromBufferAttribute(t,i),In.normalize(),t.setXYZ(i,In.x,In.y,In.z)}toNonIndexed(){function t(d,p){const m=d.array,_=d.itemSize,x=d.normalized,y=new m.constructor(p.length*_);let S=0,b=0;for(let w=0,v=p.length;w<v;w++){d.isInterleavedBufferAttribute?S=p[w]*d.data.stride+d.offset:S=p[w]*_;for(let g=0;g<_;g++)y[b++]=m[S++]}return new Yi(y,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Zi,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let _=0,x=m.length;_<x;_++){const y=m[_],S=t(y,s);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let x=0,y=m.length;x<y;x++){const S=m[x];_.push(S.toJSON(t.data))}_.length>0&&(l[p]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const c=t.morphAttributes;for(const m in c){const _=[],x=c[m];for(let y=0,S=x.length;y<S;y++)_.push(x[y].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,_=h.length;m<_;m++){const x=h[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const s_=new an,Vs=new Wd,Pc=new vl,r_=new et,zc=new et,Ic=new et,Bc=new et,Ih=new et,Fc=new et,o_=new et,Hc=new et;class nn extends Bn{constructor(t=new Zi,i=new no){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Fc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=d[p],x=c[p];_!==0&&(Ih.fromBufferAttribute(x,t),h?Fc.addScaledVector(Ih,_):Fc.addScaledVector(Ih.sub(i),_))}i.add(Fc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(c),Vs.copy(t.ray).recast(t.near),!(Pc.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere(Pc,r_)===null||Vs.origin.distanceToSquared(r_)>(t.far-t.near)**2))&&(s_.copy(c).invert(),Vs.copy(t.ray).applyMatrix4(s_),!(s.boundingBox!==null&&Vs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Vs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,w=y.length;b<w;b++){const v=y[b],g=h[v.materialIndex],I=Math.max(v.start,S.start),L=Math.min(d.count,Math.min(v.start+v.count,S.start+S.count));for(let U=I,B=L;U<B;U+=3){const H=d.getX(U),G=d.getX(U+1),q=d.getX(U+2);l=Gc(this,g,t,s,m,_,x,H,G,q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let v=b,g=w;v<g;v+=3){const I=d.getX(v),L=d.getX(v+1),U=d.getX(v+2);l=Gc(this,h,t,s,m,_,x,I,L,U),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let b=0,w=y.length;b<w;b++){const v=y[b],g=h[v.materialIndex],I=Math.max(v.start,S.start),L=Math.min(p.count,Math.min(v.start+v.count,S.start+S.count));for(let U=I,B=L;U<B;U+=3){const H=U,G=U+1,q=U+2;l=Gc(this,g,t,s,m,_,x,H,G,q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),w=Math.min(p.count,S.start+S.count);for(let v=b,g=w;v<g;v+=3){const I=v,L=v+1,U=v+2;l=Gc(this,h,t,s,m,_,x,I,L,U),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function t1(r,t,i,s,l,c,h,d){let p;if(t.side===ri?p=s.intersectTriangle(h,c,l,!0,d):p=s.intersectTriangle(l,c,h,t.side===Fa,d),p===null)return null;Hc.copy(d),Hc.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(Hc);return m<i.near||m>i.far?null:{distance:m,point:Hc.clone(),object:r}}function Gc(r,t,i,s,l,c,h,d,p,m){r.getVertexPosition(d,zc),r.getVertexPosition(p,Ic),r.getVertexPosition(m,Bc);const _=t1(r,t,i,s,zc,Ic,Bc,o_);if(_){const x=new et;qi.getBarycoord(o_,zc,Ic,Bc,x),l&&(_.uv=qi.getInterpolatedAttribute(l,d,p,m,x,new de)),c&&(_.uv1=qi.getInterpolatedAttribute(c,d,p,m,x,new de)),h&&(_.normal=qi.getInterpolatedAttribute(h,d,p,m,x,new et),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new et,materialIndex:0};qi.getNormal(zc,Ic,Bc,y.normal),_.face=y,_.barycoord=x}return _}class la extends Zi{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],_=[],x=[];let y=0,S=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Un(m,3)),this.setAttribute("normal",new Un(_,3)),this.setAttribute("uv",new Un(x,2));function b(w,v,g,I,L,U,B,H,G,q,N){const R=U/G,j=B/q,at=U/2,rt=B/2,ft=H/2,mt=G+1,F=q+1;let Q=0,Z=0;const At=new et;for(let P=0;P<F;P++){const nt=P*j-rt;for(let St=0;St<mt;St++){const Rt=St*R-at;At[w]=Rt*I,At[v]=nt*L,At[g]=ft,m.push(At.x,At.y,At.z),At[w]=0,At[v]=0,At[g]=H>0?1:-1,_.push(At.x,At.y,At.z),x.push(St/G),x.push(1-P/q),Q+=1}}for(let P=0;P<q;P++)for(let nt=0;nt<G;nt++){const St=y+nt+mt*P,Rt=y+nt+mt*(P+1),tt=y+(nt+1)+mt*(P+1),gt=y+(nt+1)+mt*P;p.push(St,Rt,gt),p.push(Rt,tt,gt),Z+=6}d.addGroup(S,Z,N),S+=Z,y+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function io(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Kn(r){const t={};for(let i=0;i<r.length;i++){const s=io(r[i]);for(const l in s)t[l]=s[l]}return t}function e1(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function xv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}const n1={clone:io,merge:Kn};var i1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ss extends ao{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i1,this.fragmentShader=a1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=io(t.uniforms),this.uniformsGroups=e1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class yv extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=za}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ms=new et,l_=new de,c_=new de;class Xi extends yv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Od*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ms.x,ms.y).multiplyScalar(-t/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ms.x,ms.y).multiplyScalar(-t/ms.z)}getViewSize(t,i){return this.getViewBounds(t,l_,c_),i.subVectors(c_,l_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(nu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*s/m,l*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Xr=-90,qr=1;class s1 extends Bn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Xi(Xr,qr,t,i);l.layers=this.layers,this.add(l);const c=new Xi(Xr,qr,t,i);c.layers=this.layers,this.add(c);const h=new Xi(Xr,qr,t,i);h.layers=this.layers,this.add(h);const d=new Xi(Xr,qr,t,i);d.layers=this.layers,this.add(d);const p=new Xi(Xr,qr,t,i);p.layers=this.layers,this.add(p);const m=new Xi(Xr,qr,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(t===za)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===ru)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,_]=this.children,x=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(x,y,S),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Sv extends Yn{constructor(t=[],i=$r,s,l,c,h,d,p,m,_){super(t,i,s,l,c,h,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class r1 extends Js{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Sv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ra}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new la(5,5,5),c=new Ss({name:"CubemapFromEquirect",uniforms:io(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ri,blending:xs});c.uniforms.tEquirect.value=i;const h=new nn(l,c),d=i.minFilter;return i.minFilter===Ks&&(i.minFilter=ra),new s1(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class si extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o1={type:"move"};class Bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const w of t.hand.values()){const v=i.getJointPose(w,s),g=this._getHandJoint(m,w);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],y=_.position.distanceTo(x.position),S=.02,b=.005;m.inputState.pinching&&y>S+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&y<=S-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(o1)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new si;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class l1 extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class c1 extends Yn{constructor(t=null,i=1,s=1,l,c,h,d,p,m=xi,_=xi,x,y){super(null,h,d,p,m,_,l,c,x,y),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class u_ extends Yi{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wr=new an,f_=new an,Vc=[],h_=new er,u1=new an,rl=new nn,ol=new vl;class f1 extends nn{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new u_(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,u1)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new er),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Wr),h_.copy(t.boundingBox).applyMatrix4(Wr),this.boundingBox.union(h_)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new vl),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Wr),ol.copy(t.boundingSphere).applyMatrix4(Wr),this.boundingSphere.union(ol)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(rl.geometry=this.geometry,rl.material=this.material,rl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ol.copy(this.boundingSphere),ol.applyMatrix4(s),t.ray.intersectsSphere(ol)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Wr),f_.multiplyMatrices(s,Wr),rl.matrixWorld=f_,rl.raycast(t,Vc);for(let h=0,d=Vc.length;h<d;h++){const p=Vc[h];p.instanceId=c,p.object=this,i.push(p)}Vc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new u_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new c1(new Float32Array(l*this.count),l,this.count,Vd,oa));const c=this.morphTexture.source.data.data;let h=0;for(let m=0;m<s.length;m++)h+=s[m];const d=this.geometry.morphTargetsRelative?1:1-h,p=l*t;c[p]=d,c.set(s,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fh=new et,h1=new et,d1=new ve;class gs{constructor(t=new et(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Fh.subVectors(s,i).cross(h1.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Fh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||d1.getNormalMatrix(t),l=this.coplanarPoint(Fh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ks=new vl,kc=new et;class Zd{constructor(t=new gs,i=new gs,s=new gs,l=new gs,c=new gs,h=new gs){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=za){const s=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],p=l[3],m=l[4],_=l[5],x=l[6],y=l[7],S=l[8],b=l[9],w=l[10],v=l[11],g=l[12],I=l[13],L=l[14],U=l[15];if(s[0].setComponents(p-c,y-m,v-S,U-g).normalize(),s[1].setComponents(p+c,y+m,v+S,U+g).normalize(),s[2].setComponents(p+h,y+_,v+b,U+I).normalize(),s[3].setComponents(p-h,y-_,v-b,U-I).normalize(),s[4].setComponents(p-d,y-x,v-w,U-L).normalize(),i===za)s[5].setComponents(p+d,y+x,v+w,U+L).normalize();else if(i===ru)s[5].setComponents(d,x,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(t){return ks.center.set(0,0,0),ks.radius=.7071067811865476,ks.applyMatrix4(t.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(kc.x=l.normal.x>0?t.max.x:t.min.x,kc.y=l.normal.y>0?t.max.y:t.min.y,kc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(kc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mv extends Yn{constructor(t,i,s,l,c,h,d,p,m){super(t,i,s,l,c,h,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ev extends Yn{constructor(t,i,s=Qs,l,c,h,d=xi,p=xi,m,_=dl){if(_!==dl&&_!==pl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,h,d,p,_,s,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Kd extends Zi{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const _=[],x=[],y=[],S=[];let b=0;const w=[],v=s/2;let g=0;I(),h===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new Un(x,3)),this.setAttribute("normal",new Un(y,3)),this.setAttribute("uv",new Un(S,2));function I(){const U=new et,B=new et;let H=0;const G=(i-t)/s;for(let q=0;q<=c;q++){const N=[],R=q/c,j=R*(i-t)+t;for(let at=0;at<=l;at++){const rt=at/l,ft=rt*p+d,mt=Math.sin(ft),F=Math.cos(ft);B.x=j*mt,B.y=-R*s+v,B.z=j*F,x.push(B.x,B.y,B.z),U.set(mt,G,F).normalize(),y.push(U.x,U.y,U.z),S.push(rt,1-R),N.push(b++)}w.push(N)}for(let q=0;q<l;q++)for(let N=0;N<c;N++){const R=w[N][q],j=w[N+1][q],at=w[N+1][q+1],rt=w[N][q+1];(t>0||N!==0)&&(_.push(R,j,rt),H+=3),(i>0||N!==c-1)&&(_.push(j,at,rt),H+=3)}m.addGroup(g,H,0),g+=H}function L(U){const B=b,H=new de,G=new et;let q=0;const N=U===!0?t:i,R=U===!0?1:-1;for(let at=1;at<=l;at++)x.push(0,v*R,0),y.push(0,R,0),S.push(.5,.5),b++;const j=b;for(let at=0;at<=l;at++){const ft=at/l*p+d,mt=Math.cos(ft),F=Math.sin(ft);G.x=N*F,G.y=v*R,G.z=N*mt,x.push(G.x,G.y,G.z),y.push(0,R,0),H.x=mt*.5+.5,H.y=F*.5*R+.5,S.push(H.x,H.y),b++}for(let at=0;at<l;at++){const rt=B+at,ft=j+at;U===!0?_.push(ft,ft+1,rt):_.push(ft+1,ft,rt),q+=3}m.addGroup(g,q,U===!0?1:2),g+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class nr extends Zi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,_=p+1,x=t/d,y=i/p,S=[],b=[],w=[],v=[];for(let g=0;g<_;g++){const I=g*y-h;for(let L=0;L<m;L++){const U=L*x-c;b.push(U,-I,0),w.push(0,0,1),v.push(L/d),v.push(1-g/p)}}for(let g=0;g<p;g++)for(let I=0;I<d;I++){const L=I+m*g,U=I+m*(g+1),B=I+1+m*(g+1),H=I+1+m*g;S.push(L,U,H),S.push(U,B,H)}this.setIndex(S),this.setAttribute("position",new Un(b,3)),this.setAttribute("normal",new Un(w,3)),this.setAttribute("uv",new Un(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Qd extends Zi{constructor(t=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],m=[],_=[];let x=t;const y=(i-t)/l,S=new et,b=new de;for(let w=0;w<=l;w++){for(let v=0;v<=s;v++){const g=c+v/s*h;S.x=x*Math.cos(g),S.y=x*Math.sin(g),p.push(S.x,S.y,S.z),m.push(0,0,1),b.x=(S.x/i+1)/2,b.y=(S.y/i+1)/2,_.push(b.x,b.y)}x+=y}for(let w=0;w<l;w++){const v=w*(s+1);for(let g=0;g<s;g++){const I=g+v,L=I,U=I+s+1,B=I+s+2,H=I+1;d.push(L,U,H),d.push(U,B,H)}}this.setIndex(d),this.setAttribute("position",new Un(p,3)),this.setAttribute("normal",new Un(m,3)),this.setAttribute("uv",new Un(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qd(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class uu extends Zi{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let m=0;const _=[],x=new et,y=new et,S=[],b=[],w=[],v=[];for(let g=0;g<=s;g++){const I=[],L=g/s;let U=0;g===0&&h===0?U=.5/i:g===s&&p===Math.PI&&(U=-.5/i);for(let B=0;B<=i;B++){const H=B/i;x.x=-t*Math.cos(l+H*c)*Math.sin(h+L*d),x.y=t*Math.cos(h+L*d),x.z=t*Math.sin(l+H*c)*Math.sin(h+L*d),b.push(x.x,x.y,x.z),y.copy(x).normalize(),w.push(y.x,y.y,y.z),v.push(H+U,1-L),I.push(m++)}_.push(I)}for(let g=0;g<s;g++)for(let I=0;I<i;I++){const L=_[g][I+1],U=_[g][I],B=_[g+1][I],H=_[g+1][I+1];(g!==0||h>0)&&S.push(L,U,H),(g!==s-1||p<Math.PI)&&S.push(U,B,H)}this.setIndex(S),this.setAttribute("position",new Un(b,3)),this.setAttribute("normal",new Un(w,3)),this.setAttribute("uv",new Un(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ml extends Zi{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],p=[],m=[],_=new et,x=new et,y=new et;for(let S=0;S<=s;S++)for(let b=0;b<=l;b++){const w=b/l*c,v=S/s*Math.PI*2;x.x=(t+i*Math.cos(v))*Math.cos(w),x.y=(t+i*Math.cos(v))*Math.sin(w),x.z=i*Math.sin(v),d.push(x.x,x.y,x.z),_.x=t*Math.cos(w),_.y=t*Math.sin(w),y.subVectors(x,_).normalize(),p.push(y.x,y.y,y.z),m.push(b/l),m.push(S/s)}for(let S=1;S<=s;S++)for(let b=1;b<=l;b++){const w=(l+1)*S+b-1,v=(l+1)*(S-1)+b-1,g=(l+1)*(S-1)+b,I=(l+1)*S+b;h.push(w,v,I),h.push(v,g,I)}this.setIndex(h),this.setAttribute("position",new Un(d,3)),this.setAttribute("normal",new Un(p,3)),this.setAttribute("uv",new Un(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ml(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class p1 extends ao{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Re(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Jd extends ao{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hv,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class m1 extends Jd{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class g1 extends ao{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _1 extends ao{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class bv extends Bn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class v1 extends bv{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Hh=new an,d_=new et,p_=new et;class x1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=ca,this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zd,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;d_.setFromMatrixPosition(t.matrixWorld),i.position.copy(d_),p_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(p_),i.updateMatrixWorld(),Hh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Hh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class $d extends yv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class y1 extends x1{constructor(){super(new $d(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class m_ extends bv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new y1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class S1 extends Xi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const g_=new an;class M1{constructor(t,i,s=0,l=1/0){this.ray=new Wd(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Yd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return g_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(g_),this}intersectObject(t,i=!0,s=[]){return Pd(t,this,s,i),s.sort(__),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Pd(t[l],this,s,i);return s.sort(__),s}}function __(r,t){return r.distance-t.distance}function Pd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)Pd(c[h],t,i,!0)}}class v_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Ee(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class E1 extends tr{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function x_(r,t,i,s){const l=b1(s);switch(i){case lv:return r*t;case Vd:return r*t/l.components*l.byteLength;case kd:return r*t/l.components*l.byteLength;case uv:return r*t*2/l.components*l.byteLength;case jd:return r*t*2/l.components*l.byteLength;case cv:return r*t*3/l.components*l.byteLength;case Wi:return r*t*4/l.components*l.byteLength;case Xd:return r*t*4/l.components*l.byteLength;case Qc:case Jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case $c:case tu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cd:case fd:return Math.max(r,16)*Math.max(t,8)/4;case ld:case ud:return Math.max(r,8)*Math.max(t,8)/2;case hd:case dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case pd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case md:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case gd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case _d:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case vd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case xd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case yd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Md:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ed:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case bd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Td:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ad:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Rd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Cd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case eu:case wd:case Dd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case fv:case Ud:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Nd:case Ld:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function b1(r){switch(r){case ca:case sv:return{byteLength:1,components:1};case fl:case rv:case gl:return{byteLength:2,components:1};case Hd:case Gd:return{byteLength:2,components:4};case Qs:case Fd:case oa:return{byteLength:4,components:1};case ov:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tv(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function T1(r){const t=new WeakMap;function i(d,p){const m=d.array,_=d.usage,x=m.byteLength,y=r.createBuffer();r.bindBuffer(p,y),r.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=r.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=r.SHORT;else if(m instanceof Uint32Array)S=r.UNSIGNED_INT;else if(m instanceof Int32Array)S=r.INT;else if(m instanceof Int8Array)S=r.BYTE;else if(m instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,p,m){const _=p.array,x=p.updateRanges;if(r.bindBuffer(m,d),x.length===0)r.bufferSubData(m,0,_);else{x.sort((S,b)=>S.start-b.start);let y=0;for(let S=1;S<x.length;S++){const b=x[y],w=x[S];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++y,x[y]=w)}x.length=y+1;for(let S=0,b=x.length;S<b;S++){const w=x[S];r.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(r.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}var A1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R1=`#ifdef USE_ALPHAHASH
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
#endif`,C1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N1=`#ifdef USE_AOMAP
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
#endif`,L1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O1=`#ifdef USE_BATCHING
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
#endif`,P1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,F1=`#ifdef USE_IRIDESCENCE
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
#endif`,H1=`#ifdef USE_BUMPMAP
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
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Z1=`#define PI 3.141592653589793
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
} // validated`,K1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Q1=`vec3 transformedNormal = objectNormal;
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
#endif`,J1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nE="gl_FragColor = linearToOutputTexel( gl_FragColor );",iE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aE=`#ifdef USE_ENVMAP
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
#endif`,sE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rE=`#ifdef USE_ENVMAP
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
#endif`,oE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lE=`#ifdef USE_ENVMAP
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
#endif`,cE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dE=`#ifdef USE_GRADIENTMAP
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
}`,pE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_E=`uniform bool receiveShadow;
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
#endif`,vE=`#ifdef USE_ENVMAP
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
#endif`,xE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ME=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EE=`PhysicalMaterial material;
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
#endif`,bE=`struct PhysicalMaterial {
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
}`,TE=`
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
#endif`,AE=`#if defined( RE_IndirectDiffuse )
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
#endif`,RE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,PE=`#if defined( USE_POINTS_UV )
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
#endif`,zE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GE=`#ifdef USE_MORPHTARGETS
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
#endif`,VE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,XE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YE=`#ifdef USE_NORMALMAP
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
#endif`,ZE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$E=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ib=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ab=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ob=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ub=`float getShadowMask() {
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
}`,fb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hb=`#ifdef USE_SKINNING
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
#endif`,db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pb=`#ifdef USE_SKINNING
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
#endif`,mb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_b=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xb=`#ifdef USE_TRANSMISSION
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
#endif`,yb=`#ifdef USE_TRANSMISSION
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
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ab=`uniform sampler2D t2D;
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
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Db=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`#include <common>
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
}`,Nb=`#if DEPTH_PACKING == 3200
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
}`,Lb=`#define DISTANCE
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
}`,Ob=`#define DISTANCE
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
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`uniform float scale;
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
}`,Bb=`uniform vec3 diffuse;
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
}`,Fb=`#include <common>
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
}`,Hb=`uniform vec3 diffuse;
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
}`,Gb=`#define LAMBERT
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
}`,Vb=`#define LAMBERT
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
}`,kb=`#define MATCAP
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
}`,jb=`#define MATCAP
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
}`,Xb=`#define NORMAL
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
}`,qb=`#define NORMAL
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
}`,Wb=`#define PHONG
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
}`,Yb=`#define PHONG
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
}`,Zb=`#define STANDARD
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
}`,Kb=`#define STANDARD
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
}`,Qb=`#define TOON
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
}`,Jb=`#define TOON
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
}`,$b=`uniform float size;
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
}`,tT=`uniform vec3 diffuse;
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
}`,eT=`#include <common>
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
}`,nT=`uniform vec3 color;
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
}`,iT=`uniform float rotation;
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
}`,aT=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:A1,alphahash_pars_fragment:R1,alphamap_fragment:C1,alphamap_pars_fragment:w1,alphatest_fragment:D1,alphatest_pars_fragment:U1,aomap_fragment:N1,aomap_pars_fragment:L1,batching_pars_vertex:O1,batching_vertex:P1,begin_vertex:z1,beginnormal_vertex:I1,bsdfs:B1,iridescence_fragment:F1,bumpmap_pars_fragment:H1,clipping_planes_fragment:G1,clipping_planes_pars_fragment:V1,clipping_planes_pars_vertex:k1,clipping_planes_vertex:j1,color_fragment:X1,color_pars_fragment:q1,color_pars_vertex:W1,color_vertex:Y1,common:Z1,cube_uv_reflection_fragment:K1,defaultnormal_vertex:Q1,displacementmap_pars_vertex:J1,displacementmap_vertex:$1,emissivemap_fragment:tE,emissivemap_pars_fragment:eE,colorspace_fragment:nE,colorspace_pars_fragment:iE,envmap_fragment:aE,envmap_common_pars_fragment:sE,envmap_pars_fragment:rE,envmap_pars_vertex:oE,envmap_physical_pars_fragment:vE,envmap_vertex:lE,fog_vertex:cE,fog_pars_vertex:uE,fog_fragment:fE,fog_pars_fragment:hE,gradientmap_pars_fragment:dE,lightmap_pars_fragment:pE,lights_lambert_fragment:mE,lights_lambert_pars_fragment:gE,lights_pars_begin:_E,lights_toon_fragment:xE,lights_toon_pars_fragment:yE,lights_phong_fragment:SE,lights_phong_pars_fragment:ME,lights_physical_fragment:EE,lights_physical_pars_fragment:bE,lights_fragment_begin:TE,lights_fragment_maps:AE,lights_fragment_end:RE,logdepthbuf_fragment:CE,logdepthbuf_pars_fragment:wE,logdepthbuf_pars_vertex:DE,logdepthbuf_vertex:UE,map_fragment:NE,map_pars_fragment:LE,map_particle_fragment:OE,map_particle_pars_fragment:PE,metalnessmap_fragment:zE,metalnessmap_pars_fragment:IE,morphinstance_vertex:BE,morphcolor_vertex:FE,morphnormal_vertex:HE,morphtarget_pars_vertex:GE,morphtarget_vertex:VE,normal_fragment_begin:kE,normal_fragment_maps:jE,normal_pars_fragment:XE,normal_pars_vertex:qE,normal_vertex:WE,normalmap_pars_fragment:YE,clearcoat_normal_fragment_begin:ZE,clearcoat_normal_fragment_maps:KE,clearcoat_pars_fragment:QE,iridescence_pars_fragment:JE,opaque_fragment:$E,packing:tb,premultiplied_alpha_fragment:eb,project_vertex:nb,dithering_fragment:ib,dithering_pars_fragment:ab,roughnessmap_fragment:sb,roughnessmap_pars_fragment:rb,shadowmap_pars_fragment:ob,shadowmap_pars_vertex:lb,shadowmap_vertex:cb,shadowmask_pars_fragment:ub,skinbase_vertex:fb,skinning_pars_vertex:hb,skinning_vertex:db,skinnormal_vertex:pb,specularmap_fragment:mb,specularmap_pars_fragment:gb,tonemapping_fragment:_b,tonemapping_pars_fragment:vb,transmission_fragment:xb,transmission_pars_fragment:yb,uv_pars_fragment:Sb,uv_pars_vertex:Mb,uv_vertex:Eb,worldpos_vertex:bb,background_vert:Tb,background_frag:Ab,backgroundCube_vert:Rb,backgroundCube_frag:Cb,cube_vert:wb,cube_frag:Db,depth_vert:Ub,depth_frag:Nb,distanceRGBA_vert:Lb,distanceRGBA_frag:Ob,equirect_vert:Pb,equirect_frag:zb,linedashed_vert:Ib,linedashed_frag:Bb,meshbasic_vert:Fb,meshbasic_frag:Hb,meshlambert_vert:Gb,meshlambert_frag:Vb,meshmatcap_vert:kb,meshmatcap_frag:jb,meshnormal_vert:Xb,meshnormal_frag:qb,meshphong_vert:Wb,meshphong_frag:Yb,meshphysical_vert:Zb,meshphysical_frag:Kb,meshtoon_vert:Qb,meshtoon_frag:Jb,points_vert:$b,points_frag:tT,shadow_vert:eT,shadow_frag:nT,sprite_vert:iT,sprite_frag:aT},Vt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},aa={basic:{uniforms:Kn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Kn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Re(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Kn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Kn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Kn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new Re(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Kn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Kn([Vt.points,Vt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Kn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Kn([Vt.common,Vt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Kn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Kn([Vt.sprite,Vt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:Kn([Vt.common,Vt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:Kn([Vt.lights,Vt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};aa.physical={uniforms:Kn([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const jc={r:0,b:0,g:0},js=new ua,sT=new an;function rT(r,t,i,s,l,c,h){const d=new Re(0);let p=c===!0?0:1,m,_,x=null,y=0,S=null;function b(L){let U=L.isScene===!0?L.background:null;return U&&U.isTexture&&(U=(L.backgroundBlurriness>0?i:t).get(U)),U}function w(L){let U=!1;const B=b(L);B===null?g(d,p):B&&B.isColor&&(g(B,1),U=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(L,U){const B=b(U);B&&(B.isCubeTexture||B.mapping===cu)?(_===void 0&&(_=new nn(new la(1,1,1),new Ss({name:"BackgroundCubeMaterial",uniforms:io(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(H,G,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),js.copy(U.backgroundRotation),js.x*=-1,js.y*=-1,js.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),_.material.uniforms.envMap.value=B,_.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(sT.makeRotationFromEuler(js)),_.material.toneMapped=Ie.getTransfer(B.colorSpace)!==Ye,(x!==B||y!==B.version||S!==r.toneMapping)&&(_.material.needsUpdate=!0,x=B,y=B.version,S=r.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):B&&B.isTexture&&(m===void 0&&(m=new nn(new nr(2,2),new Ss({name:"BackgroundMaterial",uniforms:io(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=B,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Ie.getTransfer(B.colorSpace)!==Ye,B.matrixAutoUpdate===!0&&B.updateMatrix(),m.material.uniforms.uvTransform.value.copy(B.matrix),(x!==B||y!==B.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,x=B,y=B.version,S=r.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function g(L,U){L.getRGB(jc,xv(r)),s.buffers.color.setClear(jc.r,jc.g,jc.b,U,h)}function I(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,U=1){d.set(L),p=U,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,g(d,p)},render:w,addToRenderList:v,dispose:I}}function oT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,h=!1;function d(R,j,at,rt,ft){let mt=!1;const F=x(rt,at,j);c!==F&&(c=F,m(c.object)),mt=S(R,rt,at,ft),mt&&b(R,rt,at,ft),ft!==null&&t.update(ft,r.ELEMENT_ARRAY_BUFFER),(mt||h)&&(h=!1,U(R,j,at,rt),ft!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function p(){return r.createVertexArray()}function m(R){return r.bindVertexArray(R)}function _(R){return r.deleteVertexArray(R)}function x(R,j,at){const rt=at.wireframe===!0;let ft=s[R.id];ft===void 0&&(ft={},s[R.id]=ft);let mt=ft[j.id];mt===void 0&&(mt={},ft[j.id]=mt);let F=mt[rt];return F===void 0&&(F=y(p()),mt[rt]=F),F}function y(R){const j=[],at=[],rt=[];for(let ft=0;ft<i;ft++)j[ft]=0,at[ft]=0,rt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:at,attributeDivisors:rt,object:R,attributes:{},index:null}}function S(R,j,at,rt){const ft=c.attributes,mt=j.attributes;let F=0;const Q=at.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const P=ft[Z];let nt=mt[Z];if(nt===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(nt=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(nt=R.instanceColor)),P===void 0||P.attribute!==nt||nt&&P.data!==nt.data)return!0;F++}return c.attributesNum!==F||c.index!==rt}function b(R,j,at,rt){const ft={},mt=j.attributes;let F=0;const Q=at.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let P=mt[Z];P===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(P=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(P=R.instanceColor));const nt={};nt.attribute=P,P&&P.data&&(nt.data=P.data),ft[Z]=nt,F++}c.attributes=ft,c.attributesNum=F,c.index=rt}function w(){const R=c.newAttributes;for(let j=0,at=R.length;j<at;j++)R[j]=0}function v(R){g(R,0)}function g(R,j){const at=c.newAttributes,rt=c.enabledAttributes,ft=c.attributeDivisors;at[R]=1,rt[R]===0&&(r.enableVertexAttribArray(R),rt[R]=1),ft[R]!==j&&(r.vertexAttribDivisor(R,j),ft[R]=j)}function I(){const R=c.newAttributes,j=c.enabledAttributes;for(let at=0,rt=j.length;at<rt;at++)j[at]!==R[at]&&(r.disableVertexAttribArray(at),j[at]=0)}function L(R,j,at,rt,ft,mt,F){F===!0?r.vertexAttribIPointer(R,j,at,ft,mt):r.vertexAttribPointer(R,j,at,rt,ft,mt)}function U(R,j,at,rt){w();const ft=rt.attributes,mt=at.getAttributes(),F=j.defaultAttributeValues;for(const Q in mt){const Z=mt[Q];if(Z.location>=0){let At=ft[Q];if(At===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(At=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(At=R.instanceColor)),At!==void 0){const P=At.normalized,nt=At.itemSize,St=t.get(At);if(St===void 0)continue;const Rt=St.buffer,tt=St.type,gt=St.bytesPerElement,Mt=tt===r.INT||tt===r.UNSIGNED_INT||At.gpuType===Fd;if(At.isInterleavedBufferAttribute){const Dt=At.data,Lt=Dt.stride,ue=At.offset;if(Dt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<Z.locationSize;Zt++)g(Z.location+Zt,Dt.meshPerAttribute);R.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let Zt=0;Zt<Z.locationSize;Zt++)v(Z.location+Zt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Zt=0;Zt<Z.locationSize;Zt++)L(Z.location+Zt,nt/Z.locationSize,tt,P,Lt*gt,(ue+nt/Z.locationSize*Zt)*gt,Mt)}else{if(At.isInstancedBufferAttribute){for(let Dt=0;Dt<Z.locationSize;Dt++)g(Z.location+Dt,At.meshPerAttribute);R.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Dt=0;Dt<Z.locationSize;Dt++)v(Z.location+Dt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Dt=0;Dt<Z.locationSize;Dt++)L(Z.location+Dt,nt/Z.locationSize,tt,P,nt*gt,nt/Z.locationSize*Dt*gt,Mt)}}else if(F!==void 0){const P=F[Q];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(Z.location,P);break;case 3:r.vertexAttrib3fv(Z.location,P);break;case 4:r.vertexAttrib4fv(Z.location,P);break;default:r.vertexAttrib1fv(Z.location,P)}}}}I()}function B(){q();for(const R in s){const j=s[R];for(const at in j){const rt=j[at];for(const ft in rt)_(rt[ft].object),delete rt[ft];delete j[at]}delete s[R]}}function H(R){if(s[R.id]===void 0)return;const j=s[R.id];for(const at in j){const rt=j[at];for(const ft in rt)_(rt[ft].object),delete rt[ft];delete j[at]}delete s[R.id]}function G(R){for(const j in s){const at=s[j];if(at[R.id]===void 0)continue;const rt=at[R.id];for(const ft in rt)_(rt[ft].object),delete rt[ft];delete at[R.id]}}function q(){N(),h=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:N,dispose:B,releaseStatesOfGeometry:H,releaseStatesOfProgram:G,initAttributes:w,enableAttribute:v,disableUnusedAttributes:I}}function lT(r,t,i){let s;function l(m){s=m}function c(m,_){r.drawArrays(s,m,_),i.update(_,s,1)}function h(m,_,x){x!==0&&(r.drawArraysInstanced(s,m,_,x),i.update(_,s,x))}function d(m,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,_,0,x);let S=0;for(let b=0;b<x;b++)S+=_[b];i.update(S,s,1)}function p(m,_,x,y){if(x===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<m.length;b++)h(m[b],_[b],y[b]);else{S.multiDrawArraysInstancedWEBGL(s,m,0,_,0,y,0,x);let b=0;for(let w=0;w<x;w++)b+=_[w]*y[w];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function cT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const G=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(G){return!(G!==Wi&&s.convert(G)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(G){const q=G===gl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(G!==ca&&s.convert(G)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==oa&&!q)}function p(G){if(G==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=b>0,H=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:U,vertexTextures:B,maxSamples:H}}function uT(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new gs,d=new ve,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const S=x.length!==0||y||s!==0||l;return l=y,s=x.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,y){i=_(x,y,0)},this.setState=function(x,y,S){const b=x.clippingPlanes,w=x.clipIntersection,v=x.clipShadows,g=r.get(x);if(!l||b===null||b.length===0||c&&!v)c?_(null):m();else{const I=c?0:s,L=I*4;let U=g.clippingState||null;p.value=U,U=_(b,y,L,S);for(let B=0;B!==L;++B)U[B]=i[B];g.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(x,y,S,b){const w=x!==null?x.length:0;let v=null;if(w!==0){if(v=p.value,b!==!0||v===null){const g=S+w*4,I=y.matrixWorldInverse;d.getNormalMatrix(I),(v===null||v.length<g)&&(v=new Float32Array(g));for(let L=0,U=S;L!==w;++L,U+=4)h.copy(x[L]).applyMatrix4(I,d),h.normal.toArray(v,U),v[U+3]=h.constant}p.value=v,p.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,v}}function fT(r){let t=new WeakMap;function i(h,d){return d===ad?h.mapping=$r:d===sd&&(h.mapping=to),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===ad||d===sd)if(t.has(h)){const p=t.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new r1(p.height);return m.fromEquirectangularTexture(r,h),t.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Zr=4,y_=[.125,.215,.35,.446,.526,.582],Ys=20,Gh=new $d,S_=new Re;let Vh=null,kh=0,jh=0,Xh=!1;const qs=(1+Math.sqrt(5))/2,Yr=1/qs,M_=[new et(-qs,Yr,0),new et(qs,Yr,0),new et(-Yr,0,qs),new et(Yr,0,qs),new et(0,qs,-Yr),new et(0,qs,Yr),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)],hT=new et;class E_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=hT}=c;Vh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=A_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vh,kh,jh),this._renderer.xr.enabled=Xh,t.scissorTest=!1,Xc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===$r||t.mapping===to?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ra,minFilter:ra,generateMipmaps:!1,type:gl,format:Wi,colorSpace:eo,depthBuffer:!1},l=b_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=b_(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dT(c)),this._blurMaterial=pT(c,t,i)}return l}_compileMaterial(t){const i=new nn(this._lodPlanes[0],t);this._renderer.compile(i,Gh)}_sceneToCubeUV(t,i,s,l,c){const p=new Xi(90,1,i,s),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,y=x.autoClear,S=x.toneMapping;x.getClearColor(S_),x.toneMapping=ys,x.autoClear=!1;const b=new no({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1}),w=new nn(new la,b);let v=!1;const g=t.background;g?g.isColor&&(b.color.copy(g),t.background=null,v=!0):(b.color.copy(S_),v=!0);for(let I=0;I<6;I++){const L=I%3;L===0?(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[I],c.y,c.z)):L===1?(p.up.set(0,0,m[I]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[I],c.z)):(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[I]));const U=this._cubeSize;Xc(l,L*U,I>2?U:0,U,U),x.setRenderTarget(l),v&&x.render(w,p),x.render(t,p)}w.geometry.dispose(),w.material.dispose(),x.toneMapping=S,x.autoClear=y,t.background=g}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===$r||t.mapping===to;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=A_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=T_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new nn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;Xc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,Gh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=M_[(l-c-1)%M_.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new nn(this._lodPlanes[l],m),y=m.uniforms,S=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Ys-1),w=c/b,v=isFinite(c)?1+Math.floor(_*w):Ys;v>Ys&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ys}`);const g=[];let I=0;for(let G=0;G<Ys;++G){const q=G/w,N=Math.exp(-q*q/2);g.push(N),G===0?I+=N:G<v&&(I+=2*N)}for(let G=0;G<g.length;G++)g[G]=g[G]/I;y.envMap.value=t.texture,y.samples.value=v,y.weights.value=g,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=b,y.mipInt.value=L-s;const U=this._sizeLods[l],B=3*U*(l>L-Zr?l-L+Zr:0),H=4*(this._cubeSize-U);Xc(i,B,H,3*U,2*U),p.setRenderTarget(i),p.render(x,Gh)}}function dT(r){const t=[],i=[],s=[];let l=r;const c=r-Zr+1+y_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>r-Zr?p=y_[h-r+Zr-1]:h===0&&(p=0),s.push(p);const m=1/(d-2),_=-m,x=1+m,y=[_,_,x,_,x,x,_,_,x,x,_,x],S=6,b=6,w=3,v=2,g=1,I=new Float32Array(w*b*S),L=new Float32Array(v*b*S),U=new Float32Array(g*b*S);for(let H=0;H<S;H++){const G=H%3*2/3-1,q=H>2?0:-1,N=[G,q,0,G+2/3,q,0,G+2/3,q+1,0,G,q,0,G+2/3,q+1,0,G,q+1,0];I.set(N,w*b*H),L.set(y,v*b*H);const R=[H,H,H,H,H,H];U.set(R,g*b*H)}const B=new Zi;B.setAttribute("position",new Yi(I,w)),B.setAttribute("uv",new Yi(L,v)),B.setAttribute("faceIndex",new Yi(U,g)),t.push(B),l>Zr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function b_(r,t,i){const s=new Js(r,t,i);return s.texture.mapping=cu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Xc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function pT(r,t,i){const s=new Float32Array(Ys),l=new et(0,1,0);return new Ss({name:"SphericalGaussianBlur",defines:{n:Ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:tp(),fragmentShader:`

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
		`,blending:xs,depthTest:!1,depthWrite:!1})}function T_(){return new Ss({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tp(),fragmentShader:`

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
		`,blending:xs,depthTest:!1,depthWrite:!1})}function A_(){return new Ss({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function tp(){return`

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
	`}function mT(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===ad||p===sd,_=p===$r||p===to;if(m||_){let x=t.get(d);const y=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new E_(r)),x=m?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new E_(r)),x=m?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function l(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function gT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&iu("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function _T(r,t,i,s){const l={},c=new WeakMap;function h(x){const y=x.target;y.index!==null&&t.remove(y.index);for(const b in y.attributes)t.remove(y.attributes[b]);y.removeEventListener("dispose",h),delete l[y.id];const S=c.get(y);S&&(t.remove(S),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(x,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function p(x){const y=x.attributes;for(const S in y)t.update(y[S],r.ARRAY_BUFFER)}function m(x){const y=[],S=x.index,b=x.attributes.position;let w=0;if(S!==null){const I=S.array;w=S.version;for(let L=0,U=I.length;L<U;L+=3){const B=I[L+0],H=I[L+1],G=I[L+2];y.push(B,H,H,G,G,B)}}else if(b!==void 0){const I=b.array;w=b.version;for(let L=0,U=I.length/3-1;L<U;L+=3){const B=L+0,H=L+1,G=L+2;y.push(B,H,H,G,G,B)}}else return;const v=new(pv(y)?vv:_v)(y,1);v.version=w;const g=c.get(x);g&&t.remove(g),c.set(x,v)}function _(x){const y=c.get(x);if(y){const S=x.index;S!==null&&y.version<S.version&&m(x)}else m(x);return c.get(x)}return{get:d,update:p,getWireframeAttribute:_}}function vT(r,t,i){let s;function l(y){s=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function p(y,S){r.drawElements(s,S,c,y*h),i.update(S,s,1)}function m(y,S,b){b!==0&&(r.drawElementsInstanced(s,S,c,y*h,b),i.update(S,s,b))}function _(y,S,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,y,0,b);let v=0;for(let g=0;g<b;g++)v+=S[g];i.update(v,s,1)}function x(y,S,b,w){if(b===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<y.length;g++)m(y[g]/h,S[g],w[g]);else{v.multiDrawElementsInstancedWEBGL(s,S,0,c,y,0,w,0,b);let g=0;for(let I=0;I<b;I++)g+=S[I]*w[I];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function xT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function yT(r,t,i){const s=new WeakMap,l=new pn;function c(h,d,p){const m=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let y=s.get(d);if(y===void 0||y.count!==x){let R=function(){q.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var S=R;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),w===!0&&(U=2),v===!0&&(U=3);let B=d.attributes.position.count*U,H=1;B>t.maxTextureSize&&(H=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const G=new Float32Array(B*H*4*x),q=new mv(G,B,H,x);q.type=oa,q.needsUpdate=!0;const N=U*4;for(let j=0;j<x;j++){const at=g[j],rt=I[j],ft=L[j],mt=B*H*4*j;for(let F=0;F<at.count;F++){const Q=F*N;b===!0&&(l.fromBufferAttribute(at,F),G[mt+Q+0]=l.x,G[mt+Q+1]=l.y,G[mt+Q+2]=l.z,G[mt+Q+3]=0),w===!0&&(l.fromBufferAttribute(rt,F),G[mt+Q+4]=l.x,G[mt+Q+5]=l.y,G[mt+Q+6]=l.z,G[mt+Q+7]=0),v===!0&&(l.fromBufferAttribute(ft,F),G[mt+Q+8]=l.x,G[mt+Q+9]=l.y,G[mt+Q+10]=l.z,G[mt+Q+11]=ft.itemSize===4?l.w:1)}}y={count:x,texture:q,size:new de(B,H)},s.set(d,y),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let v=0;v<m.length;v++)b+=m[v];const w=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(r,"morphTargetBaseInfluence",w),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function ST(r,t,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,_=p.geometry,x=t.get(p,_);if(l.get(x)!==m&&(t.update(x),l.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return x}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}const Av=new Yn,R_=new Ev(1,1),Rv=new mv,Cv=new kM,wv=new Sv,C_=[],w_=[],D_=new Float32Array(16),U_=new Float32Array(9),N_=new Float32Array(4);function so(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=C_[l];if(c===void 0&&(c=new Float32Array(l),C_[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function Nn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Ln(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function fu(r,t){let i=w_[t];i===void 0&&(i=new Int32Array(t),w_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function MT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function ET(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Nn(i,t))return;r.uniform2fv(this.addr,t),Ln(i,t)}}function bT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Nn(i,t))return;r.uniform3fv(this.addr,t),Ln(i,t)}}function TT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Nn(i,t))return;r.uniform4fv(this.addr,t),Ln(i,t)}}function AT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Nn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ln(i,t)}else{if(Nn(i,s))return;N_.set(s),r.uniformMatrix2fv(this.addr,!1,N_),Ln(i,s)}}function RT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Nn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ln(i,t)}else{if(Nn(i,s))return;U_.set(s),r.uniformMatrix3fv(this.addr,!1,U_),Ln(i,s)}}function CT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Nn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ln(i,t)}else{if(Nn(i,s))return;D_.set(s),r.uniformMatrix4fv(this.addr,!1,D_),Ln(i,s)}}function wT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function DT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Nn(i,t))return;r.uniform2iv(this.addr,t),Ln(i,t)}}function UT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Nn(i,t))return;r.uniform3iv(this.addr,t),Ln(i,t)}}function NT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Nn(i,t))return;r.uniform4iv(this.addr,t),Ln(i,t)}}function LT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function OT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Nn(i,t))return;r.uniform2uiv(this.addr,t),Ln(i,t)}}function PT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Nn(i,t))return;r.uniform3uiv(this.addr,t),Ln(i,t)}}function zT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Nn(i,t))return;r.uniform4uiv(this.addr,t),Ln(i,t)}}function IT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(R_.compareFunction=dv,c=R_):c=Av,i.setTexture2D(t||c,l)}function BT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Cv,l)}function FT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||wv,l)}function HT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Rv,l)}function GT(r){switch(r){case 5126:return MT;case 35664:return ET;case 35665:return bT;case 35666:return TT;case 35674:return AT;case 35675:return RT;case 35676:return CT;case 5124:case 35670:return wT;case 35667:case 35671:return DT;case 35668:case 35672:return UT;case 35669:case 35673:return NT;case 5125:return LT;case 36294:return OT;case 36295:return PT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return HT}}function VT(r,t){r.uniform1fv(this.addr,t)}function kT(r,t){const i=so(t,this.size,2);r.uniform2fv(this.addr,i)}function jT(r,t){const i=so(t,this.size,3);r.uniform3fv(this.addr,i)}function XT(r,t){const i=so(t,this.size,4);r.uniform4fv(this.addr,i)}function qT(r,t){const i=so(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function WT(r,t){const i=so(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function YT(r,t){const i=so(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function ZT(r,t){r.uniform1iv(this.addr,t)}function KT(r,t){r.uniform2iv(this.addr,t)}function QT(r,t){r.uniform3iv(this.addr,t)}function JT(r,t){r.uniform4iv(this.addr,t)}function $T(r,t){r.uniform1uiv(this.addr,t)}function tA(r,t){r.uniform2uiv(this.addr,t)}function eA(r,t){r.uniform3uiv(this.addr,t)}function nA(r,t){r.uniform4uiv(this.addr,t)}function iA(r,t,i){const s=this.cache,l=t.length,c=fu(i,l);Nn(s,c)||(r.uniform1iv(this.addr,c),Ln(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Av,c[h])}function aA(r,t,i){const s=this.cache,l=t.length,c=fu(i,l);Nn(s,c)||(r.uniform1iv(this.addr,c),Ln(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Cv,c[h])}function sA(r,t,i){const s=this.cache,l=t.length,c=fu(i,l);Nn(s,c)||(r.uniform1iv(this.addr,c),Ln(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||wv,c[h])}function rA(r,t,i){const s=this.cache,l=t.length,c=fu(i,l);Nn(s,c)||(r.uniform1iv(this.addr,c),Ln(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Rv,c[h])}function oA(r){switch(r){case 5126:return VT;case 35664:return kT;case 35665:return jT;case 35666:return XT;case 35674:return qT;case 35675:return WT;case 35676:return YT;case 5124:case 35670:return ZT;case 35667:case 35671:return KT;case 35668:case 35672:return QT;case 35669:case 35673:return JT;case 5125:return $T;case 36294:return tA;case 36295:return eA;case 36296:return nA;case 35678:case 36198:case 36298:case 36306:case 35682:return iA;case 35679:case 36299:case 36307:return aA;case 35680:case 36300:case 36308:case 36293:return sA;case 36289:case 36303:case 36311:case 36292:return rA}}class lA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=GT(i.type)}}class cA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=oA(i.type)}}class uA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const qh=/(\w+)(\])?(\[|\.)?/g;function L_(r,t){r.seq.push(t),r.map[t.id]=t}function fA(r,t,i){const s=r.name,l=s.length;for(qh.lastIndex=0;;){const c=qh.exec(s),h=qh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){L_(i,m===void 0?new lA(d,r,t):new cA(d,r,t));break}else{let x=i.map[d];x===void 0&&(x=new uA(d),L_(i,x)),i=x}}}class au{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);fA(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function O_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const hA=37297;let dA=0;function pA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const P_=new ve;function mA(r){Ie._getMatrix(P_,Ie.workingColorSpace,r);const t=`mat3( ${P_.elements.map(i=>i.toFixed(4))} )`;switch(Ie.getTransfer(r)){case su:return[t,"LinearTransferOETF"];case Ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function z_(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+pA(r.getShaderSource(t),h)}else return l}function gA(r,t){const i=mA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function _A(r,t){let i;switch(t){case mM:i="Linear";break;case gM:i="Reinhard";break;case _M:i="Cineon";break;case iv:i="ACESFilmic";break;case xM:i="AgX";break;case yM:i="Neutral";break;case vM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const qc=new et;function vA(){Ie.getLuminanceCoefficients(qc);const r=qc.x.toFixed(4),t=qc.y.toFixed(4),i=qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function yA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function SA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function cl(r){return r!==""}function I_(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function B_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const MA=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(r){return r.replace(MA,bA)}const EA=new Map;function bA(r,t){let i=ye[t];if(i===void 0){const s=EA.get(t);if(s!==void 0)i=ye[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return zd(i)}const TA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F_(r){return r.replace(TA,AA)}function AA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function H_(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function RA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===tv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===ev?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pa&&(t="SHADOWMAP_TYPE_VSM"),t}function CA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case $r:case to:t="ENVMAP_TYPE_CUBE";break;case cu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case to:t="ENVMAP_MODE_REFRACTION";break}return t}function DA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case nv:t="ENVMAP_BLENDING_MULTIPLY";break;case dM:t="ENVMAP_BLENDING_MIX";break;case pM:t="ENVMAP_BLENDING_ADD";break}return t}function UA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function NA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=RA(i),m=CA(i),_=wA(i),x=DA(i),y=UA(i),S=xA(i),b=yA(c),w=l.createProgram();let v,g,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(cl).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(cl).join(`
`),g.length>0&&(g+=`
`)):(v=[H_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),g=[H_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ys?"#define TONE_MAPPING":"",i.toneMapping!==ys?ye.tonemapping_pars_fragment:"",i.toneMapping!==ys?_A("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,gA("linearToOutputTexel",i.outputColorSpace),vA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(cl).join(`
`)),h=zd(h),h=I_(h,i),h=B_(h,i),d=zd(d),d=I_(d,i),d=B_(d,i),h=F_(h),d=F_(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,v=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",i.glslVersion===qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=I+v+h,U=I+g+d,B=O_(l,l.VERTEX_SHADER,L),H=O_(l,l.FRAGMENT_SHADER,U);l.attachShader(w,B),l.attachShader(w,H),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function G(j){if(r.debug.checkShaderErrors){const at=l.getProgramInfoLog(w).trim(),rt=l.getShaderInfoLog(B).trim(),ft=l.getShaderInfoLog(H).trim();let mt=!0,F=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(mt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,B,H);else{const Q=z_(l,B,"vertex"),Z=z_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+at+`
`+Q+`
`+Z)}else at!==""?console.warn("THREE.WebGLProgram: Program Info Log:",at):(rt===""||ft==="")&&(F=!1);F&&(j.diagnostics={runnable:mt,programLog:at,vertexShader:{log:rt,prefix:v},fragmentShader:{log:ft,prefix:g}})}l.deleteShader(B),l.deleteShader(H),q=new au(l,w),N=SA(l,w)}let q;this.getUniforms=function(){return q===void 0&&G(this),q};let N;this.getAttributes=function(){return N===void 0&&G(this),N};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(w,hA)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=dA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=B,this.fragmentShader=H,this}let LA=0;class OA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new PA(t),i.set(t,s)),s}}class PA{constructor(t){this.id=LA++,this.code=t,this.usedTimes=0}}function zA(r,t,i,s,l,c,h){const d=new Yd,p=new OA,m=new Set,_=[],x=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(N){return m.add(N),N===0?"uv":`uv${N}`}function v(N,R,j,at,rt){const ft=at.fog,mt=rt.geometry,F=N.isMeshStandardMaterial?at.environment:null,Q=(N.isMeshStandardMaterial?i:t).get(N.envMap||F),Z=Q&&Q.mapping===cu?Q.image.height:null,At=b[N.type];N.precision!==null&&(S=l.getMaxPrecision(N.precision),S!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",S,"instead."));const P=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,nt=P!==void 0?P.length:0;let St=0;mt.morphAttributes.position!==void 0&&(St=1),mt.morphAttributes.normal!==void 0&&(St=2),mt.morphAttributes.color!==void 0&&(St=3);let Rt,tt,gt,Mt;if(At){const Ue=aa[At];Rt=Ue.vertexShader,tt=Ue.fragmentShader}else Rt=N.vertexShader,tt=N.fragmentShader,p.update(N),gt=p.getVertexShaderID(N),Mt=p.getFragmentShaderID(N);const Dt=r.getRenderTarget(),Lt=r.state.buffers.depth.getReversed(),ue=rt.isInstancedMesh===!0,Zt=rt.isBatchedMesh===!0,pe=!!N.map,Oe=!!N.matcap,se=!!Q,k=!!N.aoMap,ln=!!N.lightMap,ge=!!N.bumpMap,ee=!!N.normalMap,Wt=!!N.displacementMap,De=!!N.emissiveMap,ht=!!N.metalnessMap,C=!!N.roughnessMap,T=N.anisotropy>0,Y=N.clearcoat>0,pt=N.dispersion>0,bt=N.iridescence>0,z=N.sheen>0,Ut=N.transmission>0,Ct=T&&!!N.anisotropyMap,kt=Y&&!!N.clearcoatMap,Kt=Y&&!!N.clearcoatNormalMap,wt=Y&&!!N.clearcoatRoughnessMap,Ft=bt&&!!N.iridescenceMap,Qt=bt&&!!N.iridescenceThicknessMap,Xt=z&&!!N.sheenColorMap,Gt=z&&!!N.sheenRoughnessMap,oe=!!N.specularMap,ne=!!N.specularColorMap,Ce=!!N.specularIntensityMap,X=Ut&&!!N.transmissionMap,Ot=Ut&&!!N.thicknessMap,dt=!!N.gradientMap,vt=!!N.alphaMap,Ht=N.alphaTest>0,It=!!N.alphaHash,le=!!N.extensions;let Ne=ys;N.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(Ne=r.toneMapping);const $e={shaderID:At,shaderType:N.type,shaderName:N.name,vertexShader:Rt,fragmentShader:tt,defines:N.defines,customVertexShaderID:gt,customFragmentShaderID:Mt,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:S,batching:Zt,batchingColor:Zt&&rt._colorsTexture!==null,instancing:ue,instancingColor:ue&&rt.instanceColor!==null,instancingMorph:ue&&rt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Dt===null?r.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:eo,alphaToCoverage:!!N.alphaToCoverage,map:pe,matcap:Oe,envMap:se,envMapMode:se&&Q.mapping,envMapCubeUVHeight:Z,aoMap:k,lightMap:ln,bumpMap:ge,normalMap:ee,displacementMap:y&&Wt,emissiveMap:De,normalMapObjectSpace:ee&&N.normalMapType===bM,normalMapTangentSpace:ee&&N.normalMapType===hv,metalnessMap:ht,roughnessMap:C,anisotropy:T,anisotropyMap:Ct,clearcoat:Y,clearcoatMap:kt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:wt,dispersion:pt,iridescence:bt,iridescenceMap:Ft,iridescenceThicknessMap:Qt,sheen:z,sheenColorMap:Xt,sheenRoughnessMap:Gt,specularMap:oe,specularColorMap:ne,specularIntensityMap:Ce,transmission:Ut,transmissionMap:X,thicknessMap:Ot,gradientMap:dt,opaque:N.transparent===!1&&N.blending===Kr&&N.alphaToCoverage===!1,alphaMap:vt,alphaTest:Ht,alphaHash:It,combine:N.combine,mapUv:pe&&w(N.map.channel),aoMapUv:k&&w(N.aoMap.channel),lightMapUv:ln&&w(N.lightMap.channel),bumpMapUv:ge&&w(N.bumpMap.channel),normalMapUv:ee&&w(N.normalMap.channel),displacementMapUv:Wt&&w(N.displacementMap.channel),emissiveMapUv:De&&w(N.emissiveMap.channel),metalnessMapUv:ht&&w(N.metalnessMap.channel),roughnessMapUv:C&&w(N.roughnessMap.channel),anisotropyMapUv:Ct&&w(N.anisotropyMap.channel),clearcoatMapUv:kt&&w(N.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&w(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&w(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&w(N.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&w(N.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&w(N.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&w(N.sheenRoughnessMap.channel),specularMapUv:oe&&w(N.specularMap.channel),specularColorMapUv:ne&&w(N.specularColorMap.channel),specularIntensityMapUv:Ce&&w(N.specularIntensityMap.channel),transmissionMapUv:X&&w(N.transmissionMap.channel),thicknessMapUv:Ot&&w(N.thicknessMap.channel),alphaMapUv:vt&&w(N.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(ee||T),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!mt.attributes.uv&&(pe||vt),fog:!!ft,useFog:N.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Lt,skinning:rt.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:St,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:N.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ne,decodeVideoTexture:pe&&N.map.isVideoTexture===!0&&Ie.getTransfer(N.map.colorSpace)===Ye,decodeVideoTextureEmissive:De&&N.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(N.emissiveMap.colorSpace)===Ye,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===sa,flipSided:N.side===ri,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:le&&N.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&N.extensions.multiDraw===!0||Zt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return $e.vertexUv1s=m.has(1),$e.vertexUv2s=m.has(2),$e.vertexUv3s=m.has(3),m.clear(),$e}function g(N){const R=[];if(N.shaderID?R.push(N.shaderID):(R.push(N.customVertexShaderID),R.push(N.customFragmentShaderID)),N.defines!==void 0)for(const j in N.defines)R.push(j),R.push(N.defines[j]);return N.isRawShaderMaterial===!1&&(I(R,N),L(R,N),R.push(r.outputColorSpace)),R.push(N.customProgramCacheKey),R.join()}function I(N,R){N.push(R.precision),N.push(R.outputColorSpace),N.push(R.envMapMode),N.push(R.envMapCubeUVHeight),N.push(R.mapUv),N.push(R.alphaMapUv),N.push(R.lightMapUv),N.push(R.aoMapUv),N.push(R.bumpMapUv),N.push(R.normalMapUv),N.push(R.displacementMapUv),N.push(R.emissiveMapUv),N.push(R.metalnessMapUv),N.push(R.roughnessMapUv),N.push(R.anisotropyMapUv),N.push(R.clearcoatMapUv),N.push(R.clearcoatNormalMapUv),N.push(R.clearcoatRoughnessMapUv),N.push(R.iridescenceMapUv),N.push(R.iridescenceThicknessMapUv),N.push(R.sheenColorMapUv),N.push(R.sheenRoughnessMapUv),N.push(R.specularMapUv),N.push(R.specularColorMapUv),N.push(R.specularIntensityMapUv),N.push(R.transmissionMapUv),N.push(R.thicknessMapUv),N.push(R.combine),N.push(R.fogExp2),N.push(R.sizeAttenuation),N.push(R.morphTargetsCount),N.push(R.morphAttributeCount),N.push(R.numDirLights),N.push(R.numPointLights),N.push(R.numSpotLights),N.push(R.numSpotLightMaps),N.push(R.numHemiLights),N.push(R.numRectAreaLights),N.push(R.numDirLightShadows),N.push(R.numPointLightShadows),N.push(R.numSpotLightShadows),N.push(R.numSpotLightShadowsWithMaps),N.push(R.numLightProbes),N.push(R.shadowMapType),N.push(R.toneMapping),N.push(R.numClippingPlanes),N.push(R.numClipIntersection),N.push(R.depthPacking)}function L(N,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),N.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),N.push(d.mask)}function U(N){const R=b[N.type];let j;if(R){const at=aa[R];j=n1.clone(at.uniforms)}else j=N.uniforms;return j}function B(N,R){let j;for(let at=0,rt=_.length;at<rt;at++){const ft=_[at];if(ft.cacheKey===R){j=ft,++j.usedTimes;break}}return j===void 0&&(j=new NA(r,R,N,c),_.push(j)),j}function H(N){if(--N.usedTimes===0){const R=_.indexOf(N);_[R]=_[_.length-1],_.pop(),N.destroy()}}function G(N){p.remove(N)}function q(){p.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:U,acquireProgram:B,releaseProgram:H,releaseShaderCache:G,programs:_,dispose:q}}function IA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,p){r.get(h)[d]=p}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function BA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function G_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function V_(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(x,y,S,b,w,v){let g=r[t];return g===void 0?(g={id:x.id,object:x,geometry:y,material:S,groupOrder:b,renderOrder:x.renderOrder,z:w,group:v},r[t]=g):(g.id=x.id,g.object=x,g.geometry=y,g.material=S,g.groupOrder=b,g.renderOrder=x.renderOrder,g.z=w,g.group=v),t++,g}function d(x,y,S,b,w,v){const g=h(x,y,S,b,w,v);S.transmission>0?s.push(g):S.transparent===!0?l.push(g):i.push(g)}function p(x,y,S,b,w,v){const g=h(x,y,S,b,w,v);S.transmission>0?s.unshift(g):S.transparent===!0?l.unshift(g):i.unshift(g)}function m(x,y){i.length>1&&i.sort(x||BA),s.length>1&&s.sort(y||G_),l.length>1&&l.sort(y||G_)}function _(){for(let x=t,y=r.length;x<y;x++){const S=r[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:_,sort:m}}function FA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new V_,r.set(s,[h])):l>=c.length?(h=new V_,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function HA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new et,color:new Re};break;case"SpotLight":i={position:new et,direction:new et,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new et,halfWidth:new et,halfHeight:new et};break}return r[t.id]=i,i}}}function GA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let VA=0;function kA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function jA(r){const t=new HA,i=GA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new et);const l=new et,c=new an,h=new an;function d(m){let _=0,x=0,y=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let S=0,b=0,w=0,v=0,g=0,I=0,L=0,U=0,B=0,H=0,G=0;m.sort(kA);for(let N=0,R=m.length;N<R;N++){const j=m[N],at=j.color,rt=j.intensity,ft=j.distance,mt=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)_+=at.r*rt,x+=at.g*rt,y+=at.b*rt;else if(j.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(j.sh.coefficients[F],rt);G++}else if(j.isDirectionalLight){const F=t.get(j);if(F.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const Q=j.shadow,Z=i.get(j);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,s.directionalShadow[S]=Z,s.directionalShadowMap[S]=mt,s.directionalShadowMatrix[S]=j.shadow.matrix,I++}s.directional[S]=F,S++}else if(j.isSpotLight){const F=t.get(j);F.position.setFromMatrixPosition(j.matrixWorld),F.color.copy(at).multiplyScalar(rt),F.distance=ft,F.coneCos=Math.cos(j.angle),F.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),F.decay=j.decay,s.spot[w]=F;const Q=j.shadow;if(j.map&&(s.spotLightMap[B]=j.map,B++,Q.updateMatrices(j),j.castShadow&&H++),s.spotLightMatrix[w]=Q.matrix,j.castShadow){const Z=i.get(j);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,s.spotShadow[w]=Z,s.spotShadowMap[w]=mt,U++}w++}else if(j.isRectAreaLight){const F=t.get(j);F.color.copy(at).multiplyScalar(rt),F.halfWidth.set(j.width*.5,0,0),F.halfHeight.set(0,j.height*.5,0),s.rectArea[v]=F,v++}else if(j.isPointLight){const F=t.get(j);if(F.color.copy(j.color).multiplyScalar(j.intensity),F.distance=j.distance,F.decay=j.decay,j.castShadow){const Q=j.shadow,Z=i.get(j);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,Z.shadowCameraNear=Q.camera.near,Z.shadowCameraFar=Q.camera.far,s.pointShadow[b]=Z,s.pointShadowMap[b]=mt,s.pointShadowMatrix[b]=j.shadow.matrix,L++}s.point[b]=F,b++}else if(j.isHemisphereLight){const F=t.get(j);F.skyColor.copy(j.color).multiplyScalar(rt),F.groundColor.copy(j.groundColor).multiplyScalar(rt),s.hemi[g]=F,g++}}v>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Vt.LTC_FLOAT_1,s.rectAreaLTC2=Vt.LTC_FLOAT_2):(s.rectAreaLTC1=Vt.LTC_HALF_1,s.rectAreaLTC2=Vt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=y;const q=s.hash;(q.directionalLength!==S||q.pointLength!==b||q.spotLength!==w||q.rectAreaLength!==v||q.hemiLength!==g||q.numDirectionalShadows!==I||q.numPointShadows!==L||q.numSpotShadows!==U||q.numSpotMaps!==B||q.numLightProbes!==G)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=v,s.point.length=b,s.hemi.length=g,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=U+B-H,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=G,q.directionalLength=S,q.pointLength=b,q.spotLength=w,q.rectAreaLength=v,q.hemiLength=g,q.numDirectionalShadows=I,q.numPointShadows=L,q.numSpotShadows=U,q.numSpotMaps=B,q.numLightProbes=G,s.version=VA++)}function p(m,_){let x=0,y=0,S=0,b=0,w=0;const v=_.matrixWorldInverse;for(let g=0,I=m.length;g<I;g++){const L=m[g];if(L.isDirectionalLight){const U=s.directional[x];U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(v),x++}else if(L.isSpotLight){const U=s.spot[S];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(v),U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(v),S++}else if(L.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(v),h.identity(),c.copy(L.matrixWorld),c.premultiply(v),h.extractRotation(c),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(L.isPointLight){const U=s.point[y];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(v),y++}else if(L.isHemisphereLight){const U=s.hemi[w];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(v),w++}}}return{setup:d,setupView:p,state:s}}function k_(r){const t=new jA(r),i=[],s=[];function l(_){m.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function p(_){t.setupView(i,_)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function XA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new k_(r),t.set(l,[d])):c>=h.length?(d=new k_(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const qA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WA=`uniform sampler2D shadow_pass;
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
}`;function YA(r,t,i){let s=new Zd;const l=new de,c=new de,h=new pn,d=new g1({depthPacking:EM}),p=new _1,m={},_=i.maxTextureSize,x={[Fa]:ri,[ri]:Fa,[sa]:sa},y=new Ss({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:qA,fragmentShader:WA}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const b=new Zi;b.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new nn(b,y),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tv;let g=this.type;this.render=function(H,G,q){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||H.length===0)return;const N=r.getRenderTarget(),R=r.getActiveCubeFace(),j=r.getActiveMipmapLevel(),at=r.state;at.setBlending(xs),at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const rt=g!==Pa&&this.type===Pa,ft=g===Pa&&this.type!==Pa;for(let mt=0,F=H.length;mt<F;mt++){const Q=H[mt],Z=Q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const At=Z.getFrameExtents();if(l.multiply(At),c.copy(Z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/At.x),l.x=c.x*At.x,Z.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/At.y),l.y=c.y*At.y,Z.mapSize.y=c.y)),Z.map===null||rt===!0||ft===!0){const nt=this.type!==Pa?{minFilter:xi,magFilter:xi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Js(l.x,l.y,nt),Z.map.texture.name=Q.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const P=Z.getViewportCount();for(let nt=0;nt<P;nt++){const St=Z.getViewport(nt);h.set(c.x*St.x,c.y*St.y,c.x*St.z,c.y*St.w),at.viewport(h),Z.updateMatrices(Q,nt),s=Z.getFrustum(),U(G,q,Z.camera,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===Pa&&I(Z,q),Z.needsUpdate=!1}g=this.type,v.needsUpdate=!1,r.setRenderTarget(N,R,j)};function I(H,G){const q=t.update(w);y.defines.VSM_SAMPLES!==H.blurSamples&&(y.defines.VSM_SAMPLES=H.blurSamples,S.defines.VSM_SAMPLES=H.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Js(l.x,l.y)),y.uniforms.shadow_pass.value=H.map.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(G,null,q,y,w,null),S.uniforms.shadow_pass.value=H.mapPass.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(G,null,q,S,w,null)}function L(H,G,q,N){let R=null;const j=q.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(j!==void 0)R=j;else if(R=q.isPointLight===!0?p:d,r.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){const at=R.uuid,rt=G.uuid;let ft=m[at];ft===void 0&&(ft={},m[at]=ft);let mt=ft[rt];mt===void 0&&(mt=R.clone(),ft[rt]=mt,G.addEventListener("dispose",B)),R=mt}if(R.visible=G.visible,R.wireframe=G.wireframe,N===Pa?R.side=G.shadowSide!==null?G.shadowSide:G.side:R.side=G.shadowSide!==null?G.shadowSide:x[G.side],R.alphaMap=G.alphaMap,R.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,R.map=G.map,R.clipShadows=G.clipShadows,R.clippingPlanes=G.clippingPlanes,R.clipIntersection=G.clipIntersection,R.displacementMap=G.displacementMap,R.displacementScale=G.displacementScale,R.displacementBias=G.displacementBias,R.wireframeLinewidth=G.wireframeLinewidth,R.linewidth=G.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const at=r.properties.get(R);at.light=q}return R}function U(H,G,q,N,R){if(H.visible===!1)return;if(H.layers.test(G.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&R===Pa)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,H.matrixWorld);const rt=t.update(H),ft=H.material;if(Array.isArray(ft)){const mt=rt.groups;for(let F=0,Q=mt.length;F<Q;F++){const Z=mt[F],At=ft[Z.materialIndex];if(At&&At.visible){const P=L(H,At,N,R);H.onBeforeShadow(r,H,G,q,rt,P,Z),r.renderBufferDirect(q,null,rt,P,H,Z),H.onAfterShadow(r,H,G,q,rt,P,Z)}}}else if(ft.visible){const mt=L(H,ft,N,R);H.onBeforeShadow(r,H,G,q,rt,mt,null),r.renderBufferDirect(q,null,rt,mt,H,null),H.onAfterShadow(r,H,G,q,rt,mt,null)}}const at=H.children;for(let rt=0,ft=at.length;rt<ft;rt++)U(at[rt],G,q,N,R)}function B(H){H.target.removeEventListener("dispose",B);for(const q in m){const N=m[q],R=H.target.uuid;R in N&&(N[R].dispose(),delete N[R])}}}const ZA={[Qh]:Jh,[$h]:nd,[td]:id,[Jr]:ed,[Jh]:Qh,[nd]:$h,[id]:td,[ed]:Jr};function KA(r,t){function i(){let X=!1;const Ot=new pn;let dt=null;const vt=new pn(0,0,0,0);return{setMask:function(Ht){dt!==Ht&&!X&&(r.colorMask(Ht,Ht,Ht,Ht),dt=Ht)},setLocked:function(Ht){X=Ht},setClear:function(Ht,It,le,Ne,$e){$e===!0&&(Ht*=Ne,It*=Ne,le*=Ne),Ot.set(Ht,It,le,Ne),vt.equals(Ot)===!1&&(r.clearColor(Ht,It,le,Ne),vt.copy(Ot))},reset:function(){X=!1,dt=null,vt.set(-1,0,0,0)}}}function s(){let X=!1,Ot=!1,dt=null,vt=null,Ht=null;return{setReversed:function(It){if(Ot!==It){const le=t.get("EXT_clip_control");It?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),Ot=It;const Ne=Ht;Ht=null,this.setClear(Ne)}},getReversed:function(){return Ot},setTest:function(It){It?Dt(r.DEPTH_TEST):Lt(r.DEPTH_TEST)},setMask:function(It){dt!==It&&!X&&(r.depthMask(It),dt=It)},setFunc:function(It){if(Ot&&(It=ZA[It]),vt!==It){switch(It){case Qh:r.depthFunc(r.NEVER);break;case Jh:r.depthFunc(r.ALWAYS);break;case $h:r.depthFunc(r.LESS);break;case Jr:r.depthFunc(r.LEQUAL);break;case td:r.depthFunc(r.EQUAL);break;case ed:r.depthFunc(r.GEQUAL);break;case nd:r.depthFunc(r.GREATER);break;case id:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}vt=It}},setLocked:function(It){X=It},setClear:function(It){Ht!==It&&(Ot&&(It=1-It),r.clearDepth(It),Ht=It)},reset:function(){X=!1,dt=null,vt=null,Ht=null,Ot=!1}}}function l(){let X=!1,Ot=null,dt=null,vt=null,Ht=null,It=null,le=null,Ne=null,$e=null;return{setTest:function(Ue){X||(Ue?Dt(r.STENCIL_TEST):Lt(r.STENCIL_TEST))},setMask:function(Ue){Ot!==Ue&&!X&&(r.stencilMask(Ue),Ot=Ue)},setFunc:function(Ue,Vn,mn){(dt!==Ue||vt!==Vn||Ht!==mn)&&(r.stencilFunc(Ue,Vn,mn),dt=Ue,vt=Vn,Ht=mn)},setOp:function(Ue,Vn,mn){(It!==Ue||le!==Vn||Ne!==mn)&&(r.stencilOp(Ue,Vn,mn),It=Ue,le=Vn,Ne=mn)},setLocked:function(Ue){X=Ue},setClear:function(Ue){$e!==Ue&&(r.clearStencil(Ue),$e=Ue)},reset:function(){X=!1,Ot=null,dt=null,vt=null,Ht=null,It=null,le=null,Ne=null,$e=null}}}const c=new i,h=new s,d=new l,p=new WeakMap,m=new WeakMap;let _={},x={},y=new WeakMap,S=[],b=null,w=!1,v=null,g=null,I=null,L=null,U=null,B=null,H=null,G=new Re(0,0,0),q=0,N=!1,R=null,j=null,at=null,rt=null,ft=null;const mt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Q=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),F=Q>=1):Z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),F=Q>=2);let At=null,P={};const nt=r.getParameter(r.SCISSOR_BOX),St=r.getParameter(r.VIEWPORT),Rt=new pn().fromArray(nt),tt=new pn().fromArray(St);function gt(X,Ot,dt,vt){const Ht=new Uint8Array(4),It=r.createTexture();r.bindTexture(X,It),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let le=0;le<dt;le++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Ot,0,r.RGBA,1,1,vt,0,r.RGBA,r.UNSIGNED_BYTE,Ht):r.texImage2D(Ot+le,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ht);return It}const Mt={};Mt[r.TEXTURE_2D]=gt(r.TEXTURE_2D,r.TEXTURE_2D,1),Mt[r.TEXTURE_CUBE_MAP]=gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[r.TEXTURE_2D_ARRAY]=gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Mt[r.TEXTURE_3D]=gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Dt(r.DEPTH_TEST),h.setFunc(Jr),ge(!1),ee(Hg),Dt(r.CULL_FACE),k(xs);function Dt(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function Lt(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function ue(X,Ot){return x[X]!==Ot?(r.bindFramebuffer(X,Ot),x[X]=Ot,X===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Ot),X===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Zt(X,Ot){let dt=S,vt=!1;if(X){dt=y.get(Ot),dt===void 0&&(dt=[],y.set(Ot,dt));const Ht=X.textures;if(dt.length!==Ht.length||dt[0]!==r.COLOR_ATTACHMENT0){for(let It=0,le=Ht.length;It<le;It++)dt[It]=r.COLOR_ATTACHMENT0+It;dt.length=Ht.length,vt=!0}}else dt[0]!==r.BACK&&(dt[0]=r.BACK,vt=!0);vt&&r.drawBuffers(dt)}function pe(X){return b!==X?(r.useProgram(X),b=X,!0):!1}const Oe={[Ws]:r.FUNC_ADD,[KS]:r.FUNC_SUBTRACT,[QS]:r.FUNC_REVERSE_SUBTRACT};Oe[JS]=r.MIN,Oe[$S]=r.MAX;const se={[tM]:r.ZERO,[eM]:r.ONE,[nM]:r.SRC_COLOR,[Zh]:r.SRC_ALPHA,[lM]:r.SRC_ALPHA_SATURATE,[rM]:r.DST_COLOR,[aM]:r.DST_ALPHA,[iM]:r.ONE_MINUS_SRC_COLOR,[Kh]:r.ONE_MINUS_SRC_ALPHA,[oM]:r.ONE_MINUS_DST_COLOR,[sM]:r.ONE_MINUS_DST_ALPHA,[cM]:r.CONSTANT_COLOR,[uM]:r.ONE_MINUS_CONSTANT_COLOR,[fM]:r.CONSTANT_ALPHA,[hM]:r.ONE_MINUS_CONSTANT_ALPHA};function k(X,Ot,dt,vt,Ht,It,le,Ne,$e,Ue){if(X===xs){w===!0&&(Lt(r.BLEND),w=!1);return}if(w===!1&&(Dt(r.BLEND),w=!0),X!==ZS){if(X!==v||Ue!==N){if((g!==Ws||U!==Ws)&&(r.blendEquation(r.FUNC_ADD),g=Ws,U=Ws),Ue)switch(X){case Kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gg:r.blendFunc(r.ONE,r.ONE);break;case Vg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kg:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gg:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Vg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kg:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}I=null,L=null,B=null,H=null,G.set(0,0,0),q=0,v=X,N=Ue}return}Ht=Ht||Ot,It=It||dt,le=le||vt,(Ot!==g||Ht!==U)&&(r.blendEquationSeparate(Oe[Ot],Oe[Ht]),g=Ot,U=Ht),(dt!==I||vt!==L||It!==B||le!==H)&&(r.blendFuncSeparate(se[dt],se[vt],se[It],se[le]),I=dt,L=vt,B=It,H=le),(Ne.equals(G)===!1||$e!==q)&&(r.blendColor(Ne.r,Ne.g,Ne.b,$e),G.copy(Ne),q=$e),v=X,N=!1}function ln(X,Ot){X.side===sa?Lt(r.CULL_FACE):Dt(r.CULL_FACE);let dt=X.side===ri;Ot&&(dt=!dt),ge(dt),X.blending===Kr&&X.transparent===!1?k(xs):k(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const vt=X.stencilWrite;d.setTest(vt),vt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),De(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Dt(r.SAMPLE_ALPHA_TO_COVERAGE):Lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ge(X){R!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),R=X)}function ee(X){X!==WS?(Dt(r.CULL_FACE),X!==j&&(X===Hg?r.cullFace(r.BACK):X===YS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Lt(r.CULL_FACE),j=X}function Wt(X){X!==at&&(F&&r.lineWidth(X),at=X)}function De(X,Ot,dt){X?(Dt(r.POLYGON_OFFSET_FILL),(rt!==Ot||ft!==dt)&&(r.polygonOffset(Ot,dt),rt=Ot,ft=dt)):Lt(r.POLYGON_OFFSET_FILL)}function ht(X){X?Dt(r.SCISSOR_TEST):Lt(r.SCISSOR_TEST)}function C(X){X===void 0&&(X=r.TEXTURE0+mt-1),At!==X&&(r.activeTexture(X),At=X)}function T(X,Ot,dt){dt===void 0&&(At===null?dt=r.TEXTURE0+mt-1:dt=At);let vt=P[dt];vt===void 0&&(vt={type:void 0,texture:void 0},P[dt]=vt),(vt.type!==X||vt.texture!==Ot)&&(At!==dt&&(r.activeTexture(dt),At=dt),r.bindTexture(X,Ot||Mt[X]),vt.type=X,vt.texture=Ot)}function Y(){const X=P[At];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function pt(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function z(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function kt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Kt(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ft(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qt(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(X){Rt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Rt.copy(X))}function Gt(X){tt.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),tt.copy(X))}function oe(X,Ot){let dt=m.get(Ot);dt===void 0&&(dt=new WeakMap,m.set(Ot,dt));let vt=dt.get(X);vt===void 0&&(vt=r.getUniformBlockIndex(Ot,X.name),dt.set(X,vt))}function ne(X,Ot){const vt=m.get(Ot).get(X);p.get(Ot)!==vt&&(r.uniformBlockBinding(Ot,vt,X.__bindingPointIndex),p.set(Ot,vt))}function Ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},At=null,P={},x={},y=new WeakMap,S=[],b=null,w=!1,v=null,g=null,I=null,L=null,U=null,B=null,H=null,G=new Re(0,0,0),q=0,N=!1,R=null,j=null,at=null,rt=null,ft=null,Rt.set(0,0,r.canvas.width,r.canvas.height),tt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Dt,disable:Lt,bindFramebuffer:ue,drawBuffers:Zt,useProgram:pe,setBlending:k,setMaterial:ln,setFlipSided:ge,setCullFace:ee,setLineWidth:Wt,setPolygonOffset:De,setScissorTest:ht,activeTexture:C,bindTexture:T,unbindTexture:Y,compressedTexImage2D:pt,compressedTexImage3D:bt,texImage2D:Ft,texImage3D:Qt,updateUBOMapping:oe,uniformBlockBinding:ne,texStorage2D:Kt,texStorage3D:wt,texSubImage2D:z,texSubImage3D:Ut,compressedTexSubImage2D:Ct,compressedTexSubImage3D:kt,scissor:Xt,viewport:Gt,reset:Ce}}function QA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new de,_=new WeakMap;let x;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,T){return S?new OffscreenCanvas(C,T):ou("canvas")}function w(C,T,Y){let pt=1;const bt=ht(C);if((bt.width>Y||bt.height>Y)&&(pt=Y/Math.max(bt.width,bt.height)),pt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const z=Math.floor(pt*bt.width),Ut=Math.floor(pt*bt.height);x===void 0&&(x=b(z,Ut));const Ct=T?b(z,Ut):x;return Ct.width=z,Ct.height=Ut,Ct.getContext("2d").drawImage(C,0,0,z,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+z+"x"+Ut+")."),Ct}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),C;return C}function v(C){return C.generateMipmaps}function g(C){r.generateMipmap(C)}function I(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(C,T,Y,pt,bt=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let z=T;if(T===r.RED&&(Y===r.FLOAT&&(z=r.R32F),Y===r.HALF_FLOAT&&(z=r.R16F),Y===r.UNSIGNED_BYTE&&(z=r.R8)),T===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(z=r.R8UI),Y===r.UNSIGNED_SHORT&&(z=r.R16UI),Y===r.UNSIGNED_INT&&(z=r.R32UI),Y===r.BYTE&&(z=r.R8I),Y===r.SHORT&&(z=r.R16I),Y===r.INT&&(z=r.R32I)),T===r.RG&&(Y===r.FLOAT&&(z=r.RG32F),Y===r.HALF_FLOAT&&(z=r.RG16F),Y===r.UNSIGNED_BYTE&&(z=r.RG8)),T===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(z=r.RG8UI),Y===r.UNSIGNED_SHORT&&(z=r.RG16UI),Y===r.UNSIGNED_INT&&(z=r.RG32UI),Y===r.BYTE&&(z=r.RG8I),Y===r.SHORT&&(z=r.RG16I),Y===r.INT&&(z=r.RG32I)),T===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(z=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(z=r.RGB16UI),Y===r.UNSIGNED_INT&&(z=r.RGB32UI),Y===r.BYTE&&(z=r.RGB8I),Y===r.SHORT&&(z=r.RGB16I),Y===r.INT&&(z=r.RGB32I)),T===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(z=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(z=r.RGBA16UI),Y===r.UNSIGNED_INT&&(z=r.RGBA32UI),Y===r.BYTE&&(z=r.RGBA8I),Y===r.SHORT&&(z=r.RGBA16I),Y===r.INT&&(z=r.RGBA32I)),T===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(z=r.RGB9_E5),T===r.RGBA){const Ut=bt?su:Ie.getTransfer(pt);Y===r.FLOAT&&(z=r.RGBA32F),Y===r.HALF_FLOAT&&(z=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(z=Ut===Ye?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(z=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(z=r.RGB5_A1)}return(z===r.R16F||z===r.R32F||z===r.RG16F||z===r.RG32F||z===r.RGBA16F||z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function U(C,T){let Y;return C?T===null||T===Qs||T===hl?Y=r.DEPTH24_STENCIL8:T===oa?Y=r.DEPTH32F_STENCIL8:T===fl&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Qs||T===hl?Y=r.DEPTH_COMPONENT24:T===oa?Y=r.DEPTH_COMPONENT32F:T===fl&&(Y=r.DEPTH_COMPONENT16),Y}function B(C,T){return v(C)===!0||C.isFramebufferTexture&&C.minFilter!==xi&&C.minFilter!==ra?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function H(C){const T=C.target;T.removeEventListener("dispose",H),q(T),T.isVideoTexture&&_.delete(T)}function G(C){const T=C.target;T.removeEventListener("dispose",G),R(T)}function q(C){const T=s.get(C);if(T.__webglInit===void 0)return;const Y=C.source,pt=y.get(Y);if(pt){const bt=pt[T.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&N(C),Object.keys(pt).length===0&&y.delete(Y)}s.remove(C)}function N(C){const T=s.get(C);r.deleteTexture(T.__webglTexture);const Y=C.source,pt=y.get(Y);delete pt[T.__cacheKey],h.memory.textures--}function R(C){const T=s.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),s.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(T.__webglFramebuffer[pt]))for(let bt=0;bt<T.__webglFramebuffer[pt].length;bt++)r.deleteFramebuffer(T.__webglFramebuffer[pt][bt]);else r.deleteFramebuffer(T.__webglFramebuffer[pt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[pt])}else{if(Array.isArray(T.__webglFramebuffer))for(let pt=0;pt<T.__webglFramebuffer.length;pt++)r.deleteFramebuffer(T.__webglFramebuffer[pt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pt=0;pt<T.__webglColorRenderbuffer.length;pt++)T.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[pt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=C.textures;for(let pt=0,bt=Y.length;pt<bt;pt++){const z=s.get(Y[pt]);z.__webglTexture&&(r.deleteTexture(z.__webglTexture),h.memory.textures--),s.remove(Y[pt])}s.remove(C)}let j=0;function at(){j=0}function rt(){const C=j;return C>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l.maxTextures),j+=1,C}function ft(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function mt(C,T){const Y=s.get(C);if(C.isVideoTexture&&Wt(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const pt=C.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(Y,C,T);return}}i.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+T)}function F(C,T){const Y=s.get(C);if(C.version>0&&Y.__version!==C.version){tt(Y,C,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+T)}function Q(C,T){const Y=s.get(C);if(C.version>0&&Y.__version!==C.version){tt(Y,C,T);return}i.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+T)}function Z(C,T){const Y=s.get(C);if(C.version>0&&Y.__version!==C.version){gt(Y,C,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+T)}const At={[rd]:r.REPEAT,[Zs]:r.CLAMP_TO_EDGE,[od]:r.MIRRORED_REPEAT},P={[xi]:r.NEAREST,[SM]:r.NEAREST_MIPMAP_NEAREST,[Tc]:r.NEAREST_MIPMAP_LINEAR,[ra]:r.LINEAR,[_h]:r.LINEAR_MIPMAP_NEAREST,[Ks]:r.LINEAR_MIPMAP_LINEAR},nt={[TM]:r.NEVER,[UM]:r.ALWAYS,[AM]:r.LESS,[dv]:r.LEQUAL,[RM]:r.EQUAL,[DM]:r.GEQUAL,[CM]:r.GREATER,[wM]:r.NOTEQUAL};function St(C,T){if(T.type===oa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===ra||T.magFilter===_h||T.magFilter===Tc||T.magFilter===Ks||T.minFilter===ra||T.minFilter===_h||T.minFilter===Tc||T.minFilter===Ks)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,At[T.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,At[T.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,At[T.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,P[T.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,P[T.minFilter]),T.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,nt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===xi||T.minFilter!==Tc&&T.minFilter!==Ks||T.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Rt(C,T){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",H));const pt=T.source;let bt=y.get(pt);bt===void 0&&(bt={},y.set(pt,bt));const z=ft(T);if(z!==C.__cacheKey){bt[z]===void 0&&(bt[z]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,Y=!0),bt[z].usedTimes++;const Ut=bt[C.__cacheKey];Ut!==void 0&&(bt[C.__cacheKey].usedTimes--,Ut.usedTimes===0&&N(T)),C.__cacheKey=z,C.__webglTexture=bt[z].texture}return Y}function tt(C,T,Y){let pt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pt=r.TEXTURE_3D);const bt=Rt(C,T),z=T.source;i.bindTexture(pt,C.__webglTexture,r.TEXTURE0+Y);const Ut=s.get(z);if(z.version!==Ut.__version||bt===!0){i.activeTexture(r.TEXTURE0+Y);const Ct=Ie.getPrimaries(Ie.workingColorSpace),kt=T.colorSpace===_s?null:Ie.getPrimaries(T.colorSpace),Kt=T.colorSpace===_s||Ct===kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let wt=w(T.image,!1,l.maxTextureSize);wt=De(T,wt);const Ft=c.convert(T.format,T.colorSpace),Qt=c.convert(T.type);let Xt=L(T.internalFormat,Ft,Qt,T.colorSpace,T.isVideoTexture);St(pt,T);let Gt;const oe=T.mipmaps,ne=T.isVideoTexture!==!0,Ce=Ut.__version===void 0||bt===!0,X=z.dataReady,Ot=B(T,wt);if(T.isDepthTexture)Xt=U(T.format===pl,T.type),Ce&&(ne?i.texStorage2D(r.TEXTURE_2D,1,Xt,wt.width,wt.height):i.texImage2D(r.TEXTURE_2D,0,Xt,wt.width,wt.height,0,Ft,Qt,null));else if(T.isDataTexture)if(oe.length>0){ne&&Ce&&i.texStorage2D(r.TEXTURE_2D,Ot,Xt,oe[0].width,oe[0].height);for(let dt=0,vt=oe.length;dt<vt;dt++)Gt=oe[dt],ne?X&&i.texSubImage2D(r.TEXTURE_2D,dt,0,0,Gt.width,Gt.height,Ft,Qt,Gt.data):i.texImage2D(r.TEXTURE_2D,dt,Xt,Gt.width,Gt.height,0,Ft,Qt,Gt.data);T.generateMipmaps=!1}else ne?(Ce&&i.texStorage2D(r.TEXTURE_2D,Ot,Xt,wt.width,wt.height),X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,wt.width,wt.height,Ft,Qt,wt.data)):i.texImage2D(r.TEXTURE_2D,0,Xt,wt.width,wt.height,0,Ft,Qt,wt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ne&&Ce&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ot,Xt,oe[0].width,oe[0].height,wt.depth);for(let dt=0,vt=oe.length;dt<vt;dt++)if(Gt=oe[dt],T.format!==Wi)if(Ft!==null)if(ne){if(X)if(T.layerUpdates.size>0){const Ht=x_(Gt.width,Gt.height,T.format,T.type);for(const It of T.layerUpdates){const le=Gt.data.subarray(It*Ht/Gt.data.BYTES_PER_ELEMENT,(It+1)*Ht/Gt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,It,Gt.width,Gt.height,1,Ft,le)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,0,Gt.width,Gt.height,wt.depth,Ft,Gt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,dt,Xt,Gt.width,Gt.height,wt.depth,0,Gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?X&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,0,Gt.width,Gt.height,wt.depth,Ft,Qt,Gt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,dt,Xt,Gt.width,Gt.height,wt.depth,0,Ft,Qt,Gt.data)}else{ne&&Ce&&i.texStorage2D(r.TEXTURE_2D,Ot,Xt,oe[0].width,oe[0].height);for(let dt=0,vt=oe.length;dt<vt;dt++)Gt=oe[dt],T.format!==Wi?Ft!==null?ne?X&&i.compressedTexSubImage2D(r.TEXTURE_2D,dt,0,0,Gt.width,Gt.height,Ft,Gt.data):i.compressedTexImage2D(r.TEXTURE_2D,dt,Xt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?X&&i.texSubImage2D(r.TEXTURE_2D,dt,0,0,Gt.width,Gt.height,Ft,Qt,Gt.data):i.texImage2D(r.TEXTURE_2D,dt,Xt,Gt.width,Gt.height,0,Ft,Qt,Gt.data)}else if(T.isDataArrayTexture)if(ne){if(Ce&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ot,Xt,wt.width,wt.height,wt.depth),X)if(T.layerUpdates.size>0){const dt=x_(wt.width,wt.height,T.format,T.type);for(const vt of T.layerUpdates){const Ht=wt.data.subarray(vt*dt/wt.data.BYTES_PER_ELEMENT,(vt+1)*dt/wt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,vt,wt.width,wt.height,1,Ft,Qt,Ht)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Ft,Qt,wt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Xt,wt.width,wt.height,wt.depth,0,Ft,Qt,wt.data);else if(T.isData3DTexture)ne?(Ce&&i.texStorage3D(r.TEXTURE_3D,Ot,Xt,wt.width,wt.height,wt.depth),X&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Ft,Qt,wt.data)):i.texImage3D(r.TEXTURE_3D,0,Xt,wt.width,wt.height,wt.depth,0,Ft,Qt,wt.data);else if(T.isFramebufferTexture){if(Ce)if(ne)i.texStorage2D(r.TEXTURE_2D,Ot,Xt,wt.width,wt.height);else{let dt=wt.width,vt=wt.height;for(let Ht=0;Ht<Ot;Ht++)i.texImage2D(r.TEXTURE_2D,Ht,Xt,dt,vt,0,Ft,Qt,null),dt>>=1,vt>>=1}}else if(oe.length>0){if(ne&&Ce){const dt=ht(oe[0]);i.texStorage2D(r.TEXTURE_2D,Ot,Xt,dt.width,dt.height)}for(let dt=0,vt=oe.length;dt<vt;dt++)Gt=oe[dt],ne?X&&i.texSubImage2D(r.TEXTURE_2D,dt,0,0,Ft,Qt,Gt):i.texImage2D(r.TEXTURE_2D,dt,Xt,Ft,Qt,Gt);T.generateMipmaps=!1}else if(ne){if(Ce){const dt=ht(wt);i.texStorage2D(r.TEXTURE_2D,Ot,Xt,dt.width,dt.height)}X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ft,Qt,wt)}else i.texImage2D(r.TEXTURE_2D,0,Xt,Ft,Qt,wt);v(T)&&g(pt),Ut.__version=z.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function gt(C,T,Y){if(T.image.length!==6)return;const pt=Rt(C,T),bt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+Y);const z=s.get(bt);if(bt.version!==z.__version||pt===!0){i.activeTexture(r.TEXTURE0+Y);const Ut=Ie.getPrimaries(Ie.workingColorSpace),Ct=T.colorSpace===_s?null:Ie.getPrimaries(T.colorSpace),kt=T.colorSpace===_s||Ut===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const Kt=T.isCompressedTexture||T.image[0].isCompressedTexture,wt=T.image[0]&&T.image[0].isDataTexture,Ft=[];for(let vt=0;vt<6;vt++)!Kt&&!wt?Ft[vt]=w(T.image[vt],!0,l.maxCubemapSize):Ft[vt]=wt?T.image[vt].image:T.image[vt],Ft[vt]=De(T,Ft[vt]);const Qt=Ft[0],Xt=c.convert(T.format,T.colorSpace),Gt=c.convert(T.type),oe=L(T.internalFormat,Xt,Gt,T.colorSpace),ne=T.isVideoTexture!==!0,Ce=z.__version===void 0||pt===!0,X=bt.dataReady;let Ot=B(T,Qt);St(r.TEXTURE_CUBE_MAP,T);let dt;if(Kt){ne&&Ce&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ot,oe,Qt.width,Qt.height);for(let vt=0;vt<6;vt++){dt=Ft[vt].mipmaps;for(let Ht=0;Ht<dt.length;Ht++){const It=dt[Ht];T.format!==Wi?Xt!==null?ne?X&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,0,0,It.width,It.height,Xt,It.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,oe,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,0,0,It.width,It.height,Xt,Gt,It.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,oe,It.width,It.height,0,Xt,Gt,It.data)}}}else{if(dt=T.mipmaps,ne&&Ce){dt.length>0&&Ot++;const vt=ht(Ft[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ot,oe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(wt){ne?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ft[vt].width,Ft[vt].height,Xt,Gt,Ft[vt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Ft[vt].width,Ft[vt].height,0,Xt,Gt,Ft[vt].data);for(let Ht=0;Ht<dt.length;Ht++){const le=dt[Ht].image[vt].image;ne?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,0,0,le.width,le.height,Xt,Gt,le.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,oe,le.width,le.height,0,Xt,Gt,le.data)}}else{ne?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Xt,Gt,Ft[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Xt,Gt,Ft[vt]);for(let Ht=0;Ht<dt.length;Ht++){const It=dt[Ht];ne?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,0,0,Xt,Gt,It.image[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,oe,Xt,Gt,It.image[vt])}}}v(T)&&g(r.TEXTURE_CUBE_MAP),z.__version=bt.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Mt(C,T,Y,pt,bt,z){const Ut=c.convert(Y.format,Y.colorSpace),Ct=c.convert(Y.type),kt=L(Y.internalFormat,Ut,Ct,Y.colorSpace),Kt=s.get(T),wt=s.get(Y);if(wt.__renderTarget=T,!Kt.__hasExternalTextures){const Ft=Math.max(1,T.width>>z),Qt=Math.max(1,T.height>>z);bt===r.TEXTURE_3D||bt===r.TEXTURE_2D_ARRAY?i.texImage3D(bt,z,kt,Ft,Qt,T.depth,0,Ut,Ct,null):i.texImage2D(bt,z,kt,Ft,Qt,0,Ut,Ct,null)}i.bindFramebuffer(r.FRAMEBUFFER,C),ee(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,bt,wt.__webglTexture,0,ge(T)):(bt===r.TEXTURE_2D||bt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pt,bt,wt.__webglTexture,z),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(C,T,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,C),T.depthBuffer){const pt=T.depthTexture,bt=pt&&pt.isDepthTexture?pt.type:null,z=U(T.stencilBuffer,bt),Ut=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ct=ge(T);ee(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ct,z,T.width,T.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct,z,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,z,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ut,r.RENDERBUFFER,C)}else{const pt=T.textures;for(let bt=0;bt<pt.length;bt++){const z=pt[bt],Ut=c.convert(z.format,z.colorSpace),Ct=c.convert(z.type),kt=L(z.internalFormat,Ut,Ct,z.colorSpace),Kt=ge(T);Y&&ee(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Kt,kt,T.width,T.height):ee(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Kt,kt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,kt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Lt(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=s.get(T.depthTexture);pt.__renderTarget=T,(!pt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),mt(T.depthTexture,0);const bt=pt.__webglTexture,z=ge(T);if(T.depthTexture.format===dl)ee(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,bt,0,z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,bt,0);else if(T.depthTexture.format===pl)ee(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,bt,0,z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function ue(C){const T=s.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const pt=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pt){const bt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pt.removeEventListener("dispose",bt)};pt.addEventListener("dispose",bt),T.__depthDisposeCallback=bt}T.__boundDepthTexture=pt}if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const pt=C.texture.mipmaps;pt&&pt.length>0?Lt(T.__webglFramebuffer[0],C):Lt(T.__webglFramebuffer,C)}else if(Y){T.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[pt]),T.__webglDepthbuffer[pt]===void 0)T.__webglDepthbuffer[pt]=r.createRenderbuffer(),Dt(T.__webglDepthbuffer[pt],C,!1);else{const bt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,z=T.__webglDepthbuffer[pt];r.bindRenderbuffer(r.RENDERBUFFER,z),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,z)}}else{const pt=C.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Dt(T.__webglDepthbuffer,C,!1);else{const bt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,z=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,z),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,z)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Zt(C,T,Y){const pt=s.get(C);T!==void 0&&Mt(pt.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&ue(C)}function pe(C){const T=C.texture,Y=s.get(C),pt=s.get(T);C.addEventListener("dispose",G);const bt=C.textures,z=C.isWebGLCubeRenderTarget===!0,Ut=bt.length>1;if(Ut||(pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture()),pt.__version=T.version,h.memory.textures++),z){Y.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[Ct]=[];for(let kt=0;kt<T.mipmaps.length;kt++)Y.__webglFramebuffer[Ct][kt]=r.createFramebuffer()}else Y.__webglFramebuffer[Ct]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)Y.__webglFramebuffer[Ct]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Ut)for(let Ct=0,kt=bt.length;Ct<kt;Ct++){const Kt=s.get(bt[Ct]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=r.createTexture(),h.memory.textures++)}if(C.samples>0&&ee(C)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ct=0;Ct<bt.length;Ct++){const kt=bt[Ct];Y.__webglColorRenderbuffer[Ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Ct]);const Kt=c.convert(kt.format,kt.colorSpace),wt=c.convert(kt.type),Ft=L(kt.internalFormat,Kt,wt,kt.colorSpace,C.isXRRenderTarget===!0),Qt=ge(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt,Ft,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),Dt(Y.__webglDepthRenderbuffer,C,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(z){i.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),St(r.TEXTURE_CUBE_MAP,T);for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let kt=0;kt<T.mipmaps.length;kt++)Mt(Y.__webglFramebuffer[Ct][kt],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,kt);else Mt(Y.__webglFramebuffer[Ct],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);v(T)&&g(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ut){for(let Ct=0,kt=bt.length;Ct<kt;Ct++){const Kt=bt[Ct],wt=s.get(Kt);i.bindTexture(r.TEXTURE_2D,wt.__webglTexture),St(r.TEXTURE_2D,Kt),Mt(Y.__webglFramebuffer,C,Kt,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,0),v(Kt)&&g(r.TEXTURE_2D)}i.unbindTexture()}else{let Ct=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ct=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ct,pt.__webglTexture),St(Ct,T),T.mipmaps&&T.mipmaps.length>0)for(let kt=0;kt<T.mipmaps.length;kt++)Mt(Y.__webglFramebuffer[kt],C,T,r.COLOR_ATTACHMENT0,Ct,kt);else Mt(Y.__webglFramebuffer,C,T,r.COLOR_ATTACHMENT0,Ct,0);v(T)&&g(Ct),i.unbindTexture()}C.depthBuffer&&ue(C)}function Oe(C){const T=C.textures;for(let Y=0,pt=T.length;Y<pt;Y++){const bt=T[Y];if(v(bt)){const z=I(C),Ut=s.get(bt).__webglTexture;i.bindTexture(z,Ut),g(z),i.unbindTexture()}}}const se=[],k=[];function ln(C){if(C.samples>0){if(ee(C)===!1){const T=C.textures,Y=C.width,pt=C.height;let bt=r.COLOR_BUFFER_BIT;const z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=s.get(C),Ct=T.length>1;if(Ct)for(let Kt=0;Kt<T.length;Kt++)i.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Kt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Kt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const kt=C.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Kt=0;Kt<T.length;Kt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(bt|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(bt|=r.STENCIL_BUFFER_BIT)),Ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ut.__webglColorRenderbuffer[Kt]);const wt=s.get(T[Kt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,wt,0)}r.blitFramebuffer(0,0,Y,pt,0,0,Y,pt,bt,r.NEAREST),p===!0&&(se.length=0,k.length=0,se.push(r.COLOR_ATTACHMENT0+Kt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(se.push(z),k.push(z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,k)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,se))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ct)for(let Kt=0;Kt<T.length;Kt++){i.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Kt,r.RENDERBUFFER,Ut.__webglColorRenderbuffer[Kt]);const wt=s.get(T[Kt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Kt,r.TEXTURE_2D,wt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&p){const T=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function ge(C){return Math.min(l.maxSamples,C.samples)}function ee(C){const T=s.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Wt(C){const T=h.render.frame;_.get(C)!==T&&(_.set(C,T),C.update())}function De(C,T){const Y=C.colorSpace,pt=C.format,bt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==eo&&Y!==_s&&(Ie.getTransfer(Y)===Ye?(pt!==Wi||bt!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}function ht(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(m.width=C.naturalWidth||C.width,m.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(m.width=C.displayWidth,m.height=C.displayHeight):(m.width=C.width,m.height=C.height),m}this.allocateTextureUnit=rt,this.resetTextureUnits=at,this.setTexture2D=mt,this.setTexture2DArray=F,this.setTexture3D=Q,this.setTextureCube=Z,this.rebindTextures=Zt,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=ee}function JA(r,t){function i(s,l=_s){let c;const h=Ie.getTransfer(l);if(s===ca)return r.UNSIGNED_BYTE;if(s===Hd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Gd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ov)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===sv)return r.BYTE;if(s===rv)return r.SHORT;if(s===fl)return r.UNSIGNED_SHORT;if(s===Fd)return r.INT;if(s===Qs)return r.UNSIGNED_INT;if(s===oa)return r.FLOAT;if(s===gl)return r.HALF_FLOAT;if(s===lv)return r.ALPHA;if(s===cv)return r.RGB;if(s===Wi)return r.RGBA;if(s===dl)return r.DEPTH_COMPONENT;if(s===pl)return r.DEPTH_STENCIL;if(s===Vd)return r.RED;if(s===kd)return r.RED_INTEGER;if(s===uv)return r.RG;if(s===jd)return r.RG_INTEGER;if(s===Xd)return r.RGBA_INTEGER;if(s===Qc||s===Jc||s===$c||s===tu)if(h===Ye)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ld||s===cd||s===ud||s===fd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ld)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ud)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hd||s===dd||s===pd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===hd||s===dd)return h===Ye?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===pd)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===md||s===gd||s===_d||s===vd||s===xd||s===yd||s===Sd||s===Md||s===Ed||s===bd||s===Td||s===Ad||s===Rd||s===Cd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===md)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gd)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_d)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vd)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xd)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yd)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Sd)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Md)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ed)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bd)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Td)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ad)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rd)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Cd)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===eu||s===wd||s===Dd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===eu)return h===Ye?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===wd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Dd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===fv||s===Ud||s===Nd||s===Ld)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===eu)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ud)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Nd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ld)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const $A=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t2=`
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

}`;class e2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Yn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ss({vertexShader:$A,fragmentShader:t2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new nn(new nr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n2 extends tr{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,_=null,x=null,y=null,S=null,b=null;const w=new e2,v=i.getContextAttributes();let g=null,I=null;const L=[],U=[],B=new de;let H=null;const G=new Xi;G.viewport=new pn;const q=new Xi;q.viewport=new pn;const N=[G,q],R=new S1;let j=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let gt=L[tt];return gt===void 0&&(gt=new Bh,L[tt]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(tt){let gt=L[tt];return gt===void 0&&(gt=new Bh,L[tt]=gt),gt.getGripSpace()},this.getHand=function(tt){let gt=L[tt];return gt===void 0&&(gt=new Bh,L[tt]=gt),gt.getHandSpace()};function rt(tt){const gt=U.indexOf(tt.inputSource);if(gt===-1)return;const Mt=L[gt];Mt!==void 0&&(Mt.update(tt.inputSource,tt.frame,m||h),Mt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function ft(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",ft),l.removeEventListener("inputsourceschange",mt);for(let tt=0;tt<L.length;tt++){const gt=U[tt];gt!==null&&(U[tt]=null,L[tt].disconnect(gt))}j=null,at=null,w.reset(),t.setRenderTarget(g),S=null,y=null,x=null,l=null,I=null,Rt.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(tt){m=tt},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",ft),l.addEventListener("inputsourceschange",mt),v.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Dt=null,Lt=null;v.depth&&(Lt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=v.stencil?pl:dl,Dt=v.stencil?hl:Qs);const ue={colorFormat:i.RGBA8,depthFormat:Lt,scaleFactor:c};x=new XRWebGLBinding(l,i),y=x.createProjectionLayer(ue),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),I=new Js(y.textureWidth,y.textureHeight,{format:Wi,type:ca,depthTexture:new Ev(y.textureWidth,y.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Mt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new Js(S.framebufferWidth,S.framebufferHeight,{format:Wi,type:ca,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),Rt.setContext(l),Rt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function mt(tt){for(let gt=0;gt<tt.removed.length;gt++){const Mt=tt.removed[gt],Dt=U.indexOf(Mt);Dt>=0&&(U[Dt]=null,L[Dt].disconnect(Mt))}for(let gt=0;gt<tt.added.length;gt++){const Mt=tt.added[gt];let Dt=U.indexOf(Mt);if(Dt===-1){for(let ue=0;ue<L.length;ue++)if(ue>=U.length){U.push(Mt),Dt=ue;break}else if(U[ue]===null){U[ue]=Mt,Dt=ue;break}if(Dt===-1)break}const Lt=L[Dt];Lt&&Lt.connect(Mt)}}const F=new et,Q=new et;function Z(tt,gt,Mt){F.setFromMatrixPosition(gt.matrixWorld),Q.setFromMatrixPosition(Mt.matrixWorld);const Dt=F.distanceTo(Q),Lt=gt.projectionMatrix.elements,ue=Mt.projectionMatrix.elements,Zt=Lt[14]/(Lt[10]-1),pe=Lt[14]/(Lt[10]+1),Oe=(Lt[9]+1)/Lt[5],se=(Lt[9]-1)/Lt[5],k=(Lt[8]-1)/Lt[0],ln=(ue[8]+1)/ue[0],ge=Zt*k,ee=Zt*ln,Wt=Dt/(-k+ln),De=Wt*-k;if(gt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(De),tt.translateZ(Wt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Lt[10]===-1)tt.projectionMatrix.copy(gt.projectionMatrix),tt.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const ht=Zt+Wt,C=pe+Wt,T=ge-De,Y=ee+(Dt-De),pt=Oe*pe/C*ht,bt=se*pe/C*ht;tt.projectionMatrix.makePerspective(T,Y,pt,bt,ht,C),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function At(tt,gt){gt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(gt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let gt=tt.near,Mt=tt.far;w.texture!==null&&(w.depthNear>0&&(gt=w.depthNear),w.depthFar>0&&(Mt=w.depthFar)),R.near=q.near=G.near=gt,R.far=q.far=G.far=Mt,(j!==R.near||at!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),j=R.near,at=R.far),G.layers.mask=tt.layers.mask|2,q.layers.mask=tt.layers.mask|4,R.layers.mask=G.layers.mask|q.layers.mask;const Dt=tt.parent,Lt=R.cameras;At(R,Dt);for(let ue=0;ue<Lt.length;ue++)At(Lt[ue],Dt);Lt.length===2?Z(R,G,q):R.projectionMatrix.copy(G.projectionMatrix),P(tt,R,Dt)};function P(tt,gt,Mt){Mt===null?tt.matrix.copy(gt.matrixWorld):(tt.matrix.copy(Mt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(gt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(gt.projectionMatrix),tt.projectionMatrixInverse.copy(gt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Od*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(tt){p=tt,y!==null&&(y.fixedFoveation=tt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=tt)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let nt=null;function St(tt,gt){if(_=gt.getViewerPose(m||h),b=gt,_!==null){const Mt=_.views;S!==null&&(t.setRenderTargetFramebuffer(I,S.framebuffer),t.setRenderTarget(I));let Dt=!1;Mt.length!==R.cameras.length&&(R.cameras.length=0,Dt=!0);for(let Zt=0;Zt<Mt.length;Zt++){const pe=Mt[Zt];let Oe=null;if(S!==null)Oe=S.getViewport(pe);else{const k=x.getViewSubImage(y,pe);Oe=k.viewport,Zt===0&&(t.setRenderTargetTextures(I,k.colorTexture,k.depthStencilTexture),t.setRenderTarget(I))}let se=N[Zt];se===void 0&&(se=new Xi,se.layers.enable(Zt),se.viewport=new pn,N[Zt]=se),se.matrix.fromArray(pe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(pe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Zt===0&&(R.matrix.copy(se.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Dt===!0&&R.cameras.push(se)}const Lt=l.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const Zt=x.getDepthInformation(Mt[0]);Zt&&Zt.isValid&&Zt.texture&&w.init(t,Zt,l.renderState)}}for(let Mt=0;Mt<L.length;Mt++){const Dt=U[Mt],Lt=L[Mt];Dt!==null&&Lt!==void 0&&Lt.update(Dt,gt,m||h)}nt&&nt(tt,gt),gt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:gt}),b=null}const Rt=new Tv;Rt.setAnimationLoop(St),this.setAnimationLoop=function(tt){nt=tt},this.dispose=function(){}}}const Xs=new ua,i2=new an;function a2(r,t){function i(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function s(v,g){g.color.getRGB(v.fogColor.value,xv(r)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function l(v,g,I,L,U){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(v,g):g.isMeshToonMaterial?(c(v,g),x(v,g)):g.isMeshPhongMaterial?(c(v,g),_(v,g)):g.isMeshStandardMaterial?(c(v,g),y(v,g),g.isMeshPhysicalMaterial&&S(v,g,U)):g.isMeshMatcapMaterial?(c(v,g),b(v,g)):g.isMeshDepthMaterial?c(v,g):g.isMeshDistanceMaterial?(c(v,g),w(v,g)):g.isMeshNormalMaterial?c(v,g):g.isLineBasicMaterial?(h(v,g),g.isLineDashedMaterial&&d(v,g)):g.isPointsMaterial?p(v,g,I,L):g.isSpriteMaterial?m(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,i(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,i(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,i(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===ri&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,i(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===ri&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,i(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,i(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const I=t.get(g),L=I.envMap,U=I.envMapRotation;L&&(v.envMap.value=L,Xs.copy(U),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),v.envMapRotation.value.setFromMatrix4(i2.makeRotationFromEuler(Xs)),v.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,v.aoMapTransform))}function h(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,i(g.map,v.mapTransform))}function d(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function p(v,g,I,L){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*I,v.scale.value=L*.5,g.map&&(v.map.value=g.map,i(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,i(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function m(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,i(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,i(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function _(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function x(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function y(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function S(v,g,I){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ri&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=I.texture,v.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,v.specularIntensityMapTransform))}function b(v,g){g.matcap&&(v.matcap.value=g.matcap)}function w(v,g){const I=t.get(g).light;v.referencePosition.value.setFromMatrixPosition(I.matrixWorld),v.nearDistance.value=I.shadow.camera.near,v.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function s2(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,L){const U=L.program;s.uniformBlockBinding(I,U)}function m(I,L){let U=l[I.id];U===void 0&&(b(I),U=_(I),l[I.id]=U,I.addEventListener("dispose",v));const B=L.program;s.updateUBOMapping(I,B);const H=t.render.frame;c[I.id]!==H&&(y(I),c[I.id]=H)}function _(I){const L=x();I.__bindingPointIndex=L;const U=r.createBuffer(),B=I.__size,H=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,B,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,U),U}function x(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const L=l[I.id],U=I.uniforms,B=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let H=0,G=U.length;H<G;H++){const q=Array.isArray(U[H])?U[H]:[U[H]];for(let N=0,R=q.length;N<R;N++){const j=q[N];if(S(j,H,N,B)===!0){const at=j.__offset,rt=Array.isArray(j.value)?j.value:[j.value];let ft=0;for(let mt=0;mt<rt.length;mt++){const F=rt[mt],Q=w(F);typeof F=="number"||typeof F=="boolean"?(j.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,at+ft,j.__data)):F.isMatrix3?(j.__data[0]=F.elements[0],j.__data[1]=F.elements[1],j.__data[2]=F.elements[2],j.__data[3]=0,j.__data[4]=F.elements[3],j.__data[5]=F.elements[4],j.__data[6]=F.elements[5],j.__data[7]=0,j.__data[8]=F.elements[6],j.__data[9]=F.elements[7],j.__data[10]=F.elements[8],j.__data[11]=0):(F.toArray(j.__data,ft),ft+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,at,j.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(I,L,U,B){const H=I.value,G=L+"_"+U;if(B[G]===void 0)return typeof H=="number"||typeof H=="boolean"?B[G]=H:B[G]=H.clone(),!0;{const q=B[G];if(typeof H=="number"||typeof H=="boolean"){if(q!==H)return B[G]=H,!0}else if(q.equals(H)===!1)return q.copy(H),!0}return!1}function b(I){const L=I.uniforms;let U=0;const B=16;for(let G=0,q=L.length;G<q;G++){const N=Array.isArray(L[G])?L[G]:[L[G]];for(let R=0,j=N.length;R<j;R++){const at=N[R],rt=Array.isArray(at.value)?at.value:[at.value];for(let ft=0,mt=rt.length;ft<mt;ft++){const F=rt[ft],Q=w(F),Z=U%B,At=Z%Q.boundary,P=Z+At;U+=At,P!==0&&B-P<Q.storage&&(U+=B-P),at.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=U,U+=Q.storage}}}const H=U%B;return H>0&&(U+=B-H),I.__size=U,I.__cache={},this}function w(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function v(I){const L=I.target;L.removeEventListener("dispose",v);const U=h.indexOf(L.__bindingPointIndex);h.splice(U,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function g(){for(const I in l)r.deleteBuffer(l[I]);h=[],l={},c={}}return{bind:p,update:m,dispose:g}}class r2{constructor(t={}){const{canvas:i=OM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const b=new Uint32Array(4),w=new Int32Array(4);let v=null,g=null;const I=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ys,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let B=!1;this._outputColorSpace=Qn;let H=0,G=0,q=null,N=-1,R=null;const j=new pn,at=new pn;let rt=null;const ft=new Re(0);let mt=0,F=i.width,Q=i.height,Z=1,At=null,P=null;const nt=new pn(0,0,F,Q),St=new pn(0,0,F,Q);let Rt=!1;const tt=new Zd;let gt=!1,Mt=!1;const Dt=new an,Lt=new an,ue=new et,Zt=new pn,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function se(){return q===null?Z:1}let k=s;function ln(D,K){return i.getContext(D,K)}try{const D={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Bd}`),i.addEventListener("webglcontextlost",vt,!1),i.addEventListener("webglcontextrestored",Ht,!1),i.addEventListener("webglcontextcreationerror",It,!1),k===null){const K="webgl2";if(k=ln(K,D),k===null)throw ln(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ge,ee,Wt,De,ht,C,T,Y,pt,bt,z,Ut,Ct,kt,Kt,wt,Ft,Qt,Xt,Gt,oe,ne,Ce,X;function Ot(){ge=new gT(k),ge.init(),ne=new JA(k,ge),ee=new cT(k,ge,t,ne),Wt=new KA(k,ge),ee.reverseDepthBuffer&&y&&Wt.buffers.depth.setReversed(!0),De=new xT(k),ht=new IA,C=new QA(k,ge,Wt,ht,ee,ne,De),T=new fT(U),Y=new mT(U),pt=new T1(k),Ce=new oT(k,pt),bt=new _T(k,pt,De,Ce),z=new ST(k,bt,pt,De),Xt=new yT(k,ee,C),wt=new uT(ht),Ut=new zA(U,T,Y,ge,ee,Ce,wt),Ct=new a2(U,ht),kt=new FA,Kt=new XA(ge),Qt=new rT(U,T,Y,Wt,z,S,p),Ft=new YA(U,z,ee),X=new s2(k,De,ee,Wt),Gt=new lT(k,ge,De),oe=new vT(k,ge,De),De.programs=Ut.programs,U.capabilities=ee,U.extensions=ge,U.properties=ht,U.renderLists=kt,U.shadowMap=Ft,U.state=Wt,U.info=De}Ot();const dt=new n2(U,k);this.xr=dt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const D=ge.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ge.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(D){D!==void 0&&(Z=D,this.setSize(F,Q,!1))},this.getSize=function(D){return D.set(F,Q)},this.setSize=function(D,K,ct=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=D,Q=K,i.width=Math.floor(D*Z),i.height=Math.floor(K*Z),ct===!0&&(i.style.width=D+"px",i.style.height=K+"px"),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(F*Z,Q*Z).floor()},this.setDrawingBufferSize=function(D,K,ct){F=D,Q=K,Z=ct,i.width=Math.floor(D*ct),i.height=Math.floor(K*ct),this.setViewport(0,0,D,K)},this.getCurrentViewport=function(D){return D.copy(j)},this.getViewport=function(D){return D.copy(nt)},this.setViewport=function(D,K,ct,ot){D.isVector4?nt.set(D.x,D.y,D.z,D.w):nt.set(D,K,ct,ot),Wt.viewport(j.copy(nt).multiplyScalar(Z).round())},this.getScissor=function(D){return D.copy(St)},this.setScissor=function(D,K,ct,ot){D.isVector4?St.set(D.x,D.y,D.z,D.w):St.set(D,K,ct,ot),Wt.scissor(at.copy(St).multiplyScalar(Z).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(D){Wt.setScissorTest(Rt=D)},this.setOpaqueSort=function(D){At=D},this.setTransparentSort=function(D){P=D},this.getClearColor=function(D){return D.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(D=!0,K=!0,ct=!0){let ot=0;if(D){let $=!1;if(q!==null){const xt=q.texture.format;$=xt===Xd||xt===jd||xt===kd}if($){const xt=q.texture.type,Pt=xt===ca||xt===Qs||xt===fl||xt===hl||xt===Hd||xt===Gd,Bt=Qt.getClearColor(),jt=Qt.getClearAlpha(),ie=Bt.r,$t=Bt.g,Yt=Bt.b;Pt?(b[0]=ie,b[1]=$t,b[2]=Yt,b[3]=jt,k.clearBufferuiv(k.COLOR,0,b)):(w[0]=ie,w[1]=$t,w[2]=Yt,w[3]=jt,k.clearBufferiv(k.COLOR,0,w))}else ot|=k.COLOR_BUFFER_BIT}K&&(ot|=k.DEPTH_BUFFER_BIT),ct&&(ot|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",vt,!1),i.removeEventListener("webglcontextrestored",Ht,!1),i.removeEventListener("webglcontextcreationerror",It,!1),Qt.dispose(),kt.dispose(),Kt.dispose(),ht.dispose(),T.dispose(),Y.dispose(),z.dispose(),Ce.dispose(),X.dispose(),Ut.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",gn),dt.removeEventListener("sessionend",xn),kn.stop()};function vt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Ht(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const D=De.autoReset,K=Ft.enabled,ct=Ft.autoUpdate,ot=Ft.needsUpdate,$=Ft.type;Ot(),De.autoReset=D,Ft.enabled=K,Ft.autoUpdate=ct,Ft.needsUpdate=ot,Ft.type=$}function It(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function le(D){const K=D.target;K.removeEventListener("dispose",le),Ne(K)}function Ne(D){$e(D),ht.remove(D)}function $e(D){const K=ht.get(D).programs;K!==void 0&&(K.forEach(function(ct){Ut.releaseProgram(ct)}),D.isShaderMaterial&&Ut.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,ct,ot,$,xt){K===null&&(K=pe);const Pt=$.isMesh&&$.matrixWorld.determinant()<0,Bt=da(D,K,ct,ot,$);Wt.setMaterial(ot,Pt);let jt=ct.index,ie=1;if(ot.wireframe===!0){if(jt=bt.getWireframeAttribute(ct),jt===void 0)return;ie=2}const $t=ct.drawRange,Yt=ct.attributes.position;let xe=$t.start*ie,be=($t.start+$t.count)*ie;xt!==null&&(xe=Math.max(xe,xt.start*ie),be=Math.min(be,(xt.start+xt.count)*ie)),jt!==null?(xe=Math.max(xe,0),be=Math.min(be,jt.count)):Yt!=null&&(xe=Math.max(xe,0),be=Math.min(be,Yt.count));const Ke=be-xe;if(Ke<0||Ke===1/0)return;Ce.setup($,ot,Bt,ct,jt);let he,me=Gt;if(jt!==null&&(he=pt.get(jt),me=oe,me.setIndex(he)),$.isMesh)ot.wireframe===!0?(Wt.setLineWidth(ot.wireframeLinewidth*se()),me.setMode(k.LINES)):me.setMode(k.TRIANGLES);else if($.isLine){let te=ot.linewidth;te===void 0&&(te=1),Wt.setLineWidth(te*se()),$.isLineSegments?me.setMode(k.LINES):$.isLineLoop?me.setMode(k.LINE_LOOP):me.setMode(k.LINE_STRIP)}else $.isPoints?me.setMode(k.POINTS):$.isSprite&&me.setMode(k.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)iu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))me.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const te=$._multiDrawStarts,rn=$._multiDrawCounts,we=$._multiDrawCount,yn=jt?pt.get(jt).bytesPerElement:1,Li=ht.get(ot).currentProgram.getUniforms();for(let je=0;je<we;je++)Li.setValue(k,"_gl_DrawID",je),me.render(te[je]/yn,rn[je])}else if($.isInstancedMesh)me.renderInstances(xe,Ke,$.count);else if(ct.isInstancedBufferGeometry){const te=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,rn=Math.min(ct.instanceCount,te);me.renderInstances(xe,Ke,rn)}else me.render(xe,Ke)};function Ue(D,K,ct){D.transparent===!0&&D.side===sa&&D.forceSinglePass===!1?(D.side=ri,D.needsUpdate=!0,li(D,K,ct),D.side=Fa,D.needsUpdate=!0,li(D,K,ct),D.side=sa):li(D,K,ct)}this.compile=function(D,K,ct=null){ct===null&&(ct=D),g=Kt.get(ct),g.init(K),L.push(g),ct.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),D!==ct&&D.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),g.setupLights();const ot=new Set;return D.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const xt=$.material;if(xt)if(Array.isArray(xt))for(let Pt=0;Pt<xt.length;Pt++){const Bt=xt[Pt];Ue(Bt,ct,$),ot.add(Bt)}else Ue(xt,ct,$),ot.add(xt)}),g=L.pop(),ot},this.compileAsync=function(D,K,ct=null){const ot=this.compile(D,K,ct);return new Promise($=>{function xt(){if(ot.forEach(function(Pt){ht.get(Pt).currentProgram.isReady()&&ot.delete(Pt)}),ot.size===0){$(D);return}setTimeout(xt,10)}ge.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Vn=null;function mn(D){Vn&&Vn(D)}function gn(){kn.stop()}function xn(){kn.start()}const kn=new Tv;kn.setAnimationLoop(mn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(D){Vn=D,dt.setAnimationLoop(D),D===null?kn.stop():kn.start()},dt.addEventListener("sessionstart",gn),dt.addEventListener("sessionend",xn),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(K),K=dt.getCamera()),D.isScene===!0&&D.onBeforeRender(U,D,K,q),g=Kt.get(D,L.length),g.init(K),L.push(g),Lt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),tt.setFromProjectionMatrix(Lt),Mt=this.localClippingEnabled,gt=wt.init(this.clippingPlanes,Mt),v=kt.get(D,I.length),v.init(),I.push(v),dt.enabled===!0&&dt.isPresenting===!0){const xt=U.xr.getDepthSensingMesh();xt!==null&&yi(xt,K,-1/0,U.sortObjects)}yi(D,K,0,U.sortObjects),v.finish(),U.sortObjects===!0&&v.sort(At,P),Oe=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Oe&&Qt.addToRenderList(v,D),this.info.render.frame++,gt===!0&&wt.beginShadows();const ct=g.state.shadowsArray;Ft.render(ct,D,K),gt===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=v.opaque,$=v.transmissive;if(g.setupLights(),K.isArrayCamera){const xt=K.cameras;if($.length>0)for(let Pt=0,Bt=xt.length;Pt<Bt;Pt++){const jt=xt[Pt];ha(ot,$,D,jt)}Oe&&Qt.render(D);for(let Pt=0,Bt=xt.length;Pt<Bt;Pt++){const jt=xt[Pt];fa(v,D,jt,jt.viewport)}}else $.length>0&&ha(ot,$,D,K),Oe&&Qt.render(D),fa(v,D,K);q!==null&&G===0&&(C.updateMultisampleRenderTarget(q),C.updateRenderTargetMipmap(q)),D.isScene===!0&&D.onAfterRender(U,D,K),Ce.resetDefaultState(),N=-1,R=null,L.pop(),L.length>0?(g=L[L.length-1],gt===!0&&wt.setGlobalState(U.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?v=I[I.length-1]:v=null};function yi(D,K,ct,ot){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)ct=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)g.pushLight(D),D.castShadow&&g.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||tt.intersectsSprite(D)){ot&&Zt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Lt);const Pt=z.update(D),Bt=D.material;Bt.visible&&v.push(D,Pt,Bt,ct,Zt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||tt.intersectsObject(D))){const Pt=z.update(D),Bt=D.material;if(ot&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Zt.copy(D.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Zt.copy(Pt.boundingSphere.center)),Zt.applyMatrix4(D.matrixWorld).applyMatrix4(Lt)),Array.isArray(Bt)){const jt=Pt.groups;for(let ie=0,$t=jt.length;ie<$t;ie++){const Yt=jt[ie],xe=Bt[Yt.materialIndex];xe&&xe.visible&&v.push(D,Pt,xe,ct,Zt.z,Yt)}}else Bt.visible&&v.push(D,Pt,Bt,ct,Zt.z,null)}}const xt=D.children;for(let Pt=0,Bt=xt.length;Pt<Bt;Pt++)yi(xt[Pt],K,ct,ot)}function fa(D,K,ct,ot){const $=D.opaque,xt=D.transmissive,Pt=D.transparent;g.setupLightsView(ct),gt===!0&&wt.setGlobalState(U.clippingPlanes,ct),ot&&Wt.viewport(j.copy(ot)),$.length>0&&oi($,K,ct),xt.length>0&&oi(xt,K,ct),Pt.length>0&&oi(Pt,K,ct),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function ha(D,K,ct,ot){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ot.id]===void 0&&(g.state.transmissionRenderTarget[ot.id]=new Js(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?gl:ca,minFilter:Ks,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ie.workingColorSpace}));const xt=g.state.transmissionRenderTarget[ot.id],Pt=ot.viewport||j;xt.setSize(Pt.z*U.transmissionResolutionScale,Pt.w*U.transmissionResolutionScale);const Bt=U.getRenderTarget();U.setRenderTarget(xt),U.getClearColor(ft),mt=U.getClearAlpha(),mt<1&&U.setClearColor(16777215,.5),U.clear(),Oe&&Qt.render(ct);const jt=U.toneMapping;U.toneMapping=ys;const ie=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),g.setupLightsView(ot),gt===!0&&wt.setGlobalState(U.clippingPlanes,ot),oi(D,ct,ot),C.updateMultisampleRenderTarget(xt),C.updateRenderTargetMipmap(xt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Yt=0,xe=K.length;Yt<xe;Yt++){const be=K[Yt],Ke=be.object,he=be.geometry,me=be.material,te=be.group;if(me.side===sa&&Ke.layers.test(ot.layers)){const rn=me.side;me.side=ri,me.needsUpdate=!0,Ki(Ke,ct,ot,he,me,te),me.side=rn,me.needsUpdate=!0,$t=!0}}$t===!0&&(C.updateMultisampleRenderTarget(xt),C.updateRenderTargetMipmap(xt))}U.setRenderTarget(Bt),U.setClearColor(ft,mt),ie!==void 0&&(ot.viewport=ie),U.toneMapping=jt}function oi(D,K,ct){const ot=K.isScene===!0?K.overrideMaterial:null;for(let $=0,xt=D.length;$<xt;$++){const Pt=D[$],Bt=Pt.object,jt=Pt.geometry,ie=Pt.group;let $t=Pt.material;$t.allowOverride===!0&&ot!==null&&($t=ot),Bt.layers.test(ct.layers)&&Ki(Bt,K,ct,jt,$t,ie)}}function Ki(D,K,ct,ot,$,xt){D.onBeforeRender(U,K,ct,ot,$,xt),D.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),$.onBeforeRender(U,K,ct,ot,D,xt),$.transparent===!0&&$.side===sa&&$.forceSinglePass===!1?($.side=ri,$.needsUpdate=!0,U.renderBufferDirect(ct,K,ot,$,D,xt),$.side=Fa,$.needsUpdate=!0,U.renderBufferDirect(ct,K,ot,$,D,xt),$.side=sa):U.renderBufferDirect(ct,K,ot,$,D,xt),D.onAfterRender(U,K,ct,ot,$,xt)}function li(D,K,ct){K.isScene!==!0&&(K=pe);const ot=ht.get(D),$=g.state.lights,xt=g.state.shadowsArray,Pt=$.state.version,Bt=Ut.getParameters(D,$.state,xt,K,ct),jt=Ut.getProgramCacheKey(Bt);let ie=ot.programs;ot.environment=D.isMeshStandardMaterial?K.environment:null,ot.fog=K.fog,ot.envMap=(D.isMeshStandardMaterial?Y:T).get(D.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&D.envMap===null?K.environmentRotation:D.envMapRotation,ie===void 0&&(D.addEventListener("dispose",le),ie=new Map,ot.programs=ie);let $t=ie.get(jt);if($t!==void 0){if(ot.currentProgram===$t&&ot.lightsStateVersion===Pt)return Jn(D,Bt),$t}else Bt.uniforms=Ut.getUniforms(D),D.onBeforeCompile(Bt,U),$t=Ut.acquireProgram(Bt,jt),ie.set(jt,$t),ot.uniforms=Bt.uniforms;const Yt=ot.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Yt.clippingPlanes=wt.uniform),Jn(D,Bt),ot.needsLights=tn(D),ot.lightsStateVersion=Pt,ot.needsLights&&(Yt.ambientLightColor.value=$.state.ambient,Yt.lightProbe.value=$.state.probe,Yt.directionalLights.value=$.state.directional,Yt.directionalLightShadows.value=$.state.directionalShadow,Yt.spotLights.value=$.state.spot,Yt.spotLightShadows.value=$.state.spotShadow,Yt.rectAreaLights.value=$.state.rectArea,Yt.ltc_1.value=$.state.rectAreaLTC1,Yt.ltc_2.value=$.state.rectAreaLTC2,Yt.pointLights.value=$.state.point,Yt.pointLightShadows.value=$.state.pointShadow,Yt.hemisphereLights.value=$.state.hemi,Yt.directionalShadowMap.value=$.state.directionalShadowMap,Yt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Yt.spotShadowMap.value=$.state.spotShadowMap,Yt.spotLightMatrix.value=$.state.spotLightMatrix,Yt.spotLightMap.value=$.state.spotLightMap,Yt.pointShadowMap.value=$.state.pointShadowMap,Yt.pointShadowMatrix.value=$.state.pointShadowMatrix),ot.currentProgram=$t,ot.uniformsList=null,$t}function ci(D){if(D.uniformsList===null){const K=D.currentProgram.getUniforms();D.uniformsList=au.seqWithValue(K.seq,D.uniforms)}return D.uniformsList}function Jn(D,K){const ct=ht.get(D);ct.outputColorSpace=K.outputColorSpace,ct.batching=K.batching,ct.batchingColor=K.batchingColor,ct.instancing=K.instancing,ct.instancingColor=K.instancingColor,ct.instancingMorph=K.instancingMorph,ct.skinning=K.skinning,ct.morphTargets=K.morphTargets,ct.morphNormals=K.morphNormals,ct.morphColors=K.morphColors,ct.morphTargetsCount=K.morphTargetsCount,ct.numClippingPlanes=K.numClippingPlanes,ct.numIntersection=K.numClipIntersection,ct.vertexAlphas=K.vertexAlphas,ct.vertexTangents=K.vertexTangents,ct.toneMapping=K.toneMapping}function da(D,K,ct,ot,$){K.isScene!==!0&&(K=pe),C.resetTextureUnits();const xt=K.fog,Pt=ot.isMeshStandardMaterial?K.environment:null,Bt=q===null?U.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:eo,jt=(ot.isMeshStandardMaterial?Y:T).get(ot.envMap||Pt),ie=ot.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,$t=!!ct.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Yt=!!ct.morphAttributes.position,xe=!!ct.morphAttributes.normal,be=!!ct.morphAttributes.color;let Ke=ys;ot.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ke=U.toneMapping);const he=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,me=he!==void 0?he.length:0,te=ht.get(ot),rn=g.state.lights;if(gt===!0&&(Mt===!0||D!==R)){const O=D===R&&ot.id===N;wt.setState(ot,D,O)}let we=!1;ot.version===te.__version?(te.needsLights&&te.lightsStateVersion!==rn.state.version||te.outputColorSpace!==Bt||$.isBatchedMesh&&te.batching===!1||!$.isBatchedMesh&&te.batching===!0||$.isBatchedMesh&&te.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&te.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&te.instancing===!1||!$.isInstancedMesh&&te.instancing===!0||$.isSkinnedMesh&&te.skinning===!1||!$.isSkinnedMesh&&te.skinning===!0||$.isInstancedMesh&&te.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&te.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&te.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&te.instancingMorph===!1&&$.morphTexture!==null||te.envMap!==jt||ot.fog===!0&&te.fog!==xt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==wt.numPlanes||te.numIntersection!==wt.numIntersection)||te.vertexAlphas!==ie||te.vertexTangents!==$t||te.morphTargets!==Yt||te.morphNormals!==xe||te.morphColors!==be||te.toneMapping!==Ke||te.morphTargetsCount!==me)&&(we=!0):(we=!0,te.__version=ot.version);let yn=te.currentProgram;we===!0&&(yn=li(ot,K,$));let Li=!1,je=!1,Oi=!1;const Ge=yn.getUniforms(),un=te.uniforms;if(Wt.useProgram(yn.program)&&(Li=!0,je=!0,Oi=!0),ot.id!==N&&(N=ot.id,je=!0),Li||R!==D){Wt.buffers.depth.getReversed()?(Dt.copy(D.projectionMatrix),zM(Dt),IM(Dt),Ge.setValue(k,"projectionMatrix",Dt)):Ge.setValue(k,"projectionMatrix",D.projectionMatrix),Ge.setValue(k,"viewMatrix",D.matrixWorldInverse);const Tt=Ge.map.cameraPosition;Tt!==void 0&&Tt.setValue(k,ue.setFromMatrixPosition(D.matrixWorld)),ee.logarithmicDepthBuffer&&Ge.setValue(k,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ge.setValue(k,"isOrthographic",D.isOrthographicCamera===!0),R!==D&&(R=D,je=!0,Oi=!0)}if($.isSkinnedMesh){Ge.setOptional(k,$,"bindMatrix"),Ge.setOptional(k,$,"bindMatrixInverse");const O=$.skeleton;O&&(O.boneTexture===null&&O.computeBoneTexture(),Ge.setValue(k,"boneTexture",O.boneTexture,C))}$.isBatchedMesh&&(Ge.setOptional(k,$,"batchingTexture"),Ge.setValue(k,"batchingTexture",$._matricesTexture,C),Ge.setOptional(k,$,"batchingIdTexture"),Ge.setValue(k,"batchingIdTexture",$._indirectTexture,C),Ge.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&Ge.setValue(k,"batchingColorTexture",$._colorsTexture,C));const fn=ct.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Xt.update($,ct,yn),(je||te.receiveShadow!==$.receiveShadow)&&(te.receiveShadow=$.receiveShadow,Ge.setValue(k,"receiveShadow",$.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(un.envMap.value=jt,un.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&K.environment!==null&&(un.envMapIntensity.value=K.environmentIntensity),je&&(Ge.setValue(k,"toneMappingExposure",U.toneMappingExposure),te.needsLights&&Ui(un,Oi),xt&&ot.fog===!0&&Ct.refreshFogUniforms(un,xt),Ct.refreshMaterialUniforms(un,ot,Z,Q,g.state.transmissionRenderTarget[D.id]),au.upload(k,ci(te),un,C)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(au.upload(k,ci(te),un,C),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ge.setValue(k,"center",$.center),Ge.setValue(k,"modelViewMatrix",$.modelViewMatrix),Ge.setValue(k,"normalMatrix",$.normalMatrix),Ge.setValue(k,"modelMatrix",$.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const O=ot.uniformsGroups;for(let Tt=0,zt=O.length;Tt<zt;Tt++){const fe=O[Tt];X.update(fe,yn),X.bind(fe,yn)}}return yn}function Ui(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function tn(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(D,K,ct){const ot=ht.get(D);ot.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),ht.get(D.texture).__webglTexture=K,ht.get(D.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ct,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,K){const ct=ht.get(D);ct.__webglFramebuffer=K,ct.__useDefaultFramebuffer=K===void 0};const Ni=k.createFramebuffer();this.setRenderTarget=function(D,K=0,ct=0){q=D,H=K,G=ct;let ot=!0,$=null,xt=!1,Pt=!1;if(D){const jt=ht.get(D);if(jt.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(k.FRAMEBUFFER,null),ot=!1;else if(jt.__webglFramebuffer===void 0)C.setupRenderTarget(D);else if(jt.__hasExternalTextures)C.rebindTextures(D,ht.get(D.texture).__webglTexture,ht.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Yt=D.depthTexture;if(jt.__boundDepthTexture!==Yt){if(Yt!==null&&ht.has(Yt)&&(D.width!==Yt.image.width||D.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(D)}}const ie=D.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Pt=!0);const $t=ht.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray($t[K])?$=$t[K][ct]:$=$t[K],xt=!0):D.samples>0&&C.useMultisampledRTT(D)===!1?$=ht.get(D).__webglMultisampledFramebuffer:Array.isArray($t)?$=$t[ct]:$=$t,j.copy(D.viewport),at.copy(D.scissor),rt=D.scissorTest}else j.copy(nt).multiplyScalar(Z).floor(),at.copy(St).multiplyScalar(Z).floor(),rt=Rt;if(ct!==0&&($=Ni),Wt.bindFramebuffer(k.FRAMEBUFFER,$)&&ot&&Wt.drawBuffers(D,$),Wt.viewport(j),Wt.scissor(at),Wt.setScissorTest(rt),xt){const jt=ht.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+K,jt.__webglTexture,ct)}else if(Pt){const jt=ht.get(D.texture),ie=K;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,jt.__webglTexture,ct,ie)}else if(D!==null&&ct!==0){const jt=ht.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,jt.__webglTexture,ct)}N=-1},this.readRenderTargetPixels=function(D,K,ct,ot,$,xt,Pt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=ht.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Pt!==void 0&&(Bt=Bt[Pt]),Bt){Wt.bindFramebuffer(k.FRAMEBUFFER,Bt);try{const jt=D.texture,ie=jt.format,$t=jt.type;if(!ee.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-ot&&ct>=0&&ct<=D.height-$&&k.readPixels(K,ct,ot,$,ne.convert(ie),ne.convert($t),xt)}finally{const jt=q!==null?ht.get(q).__webglFramebuffer:null;Wt.bindFramebuffer(k.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(D,K,ct,ot,$,xt,Pt){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=ht.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Pt!==void 0&&(Bt=Bt[Pt]),Bt)if(K>=0&&K<=D.width-ot&&ct>=0&&ct<=D.height-$){Wt.bindFramebuffer(k.FRAMEBUFFER,Bt);const jt=D.texture,ie=jt.format,$t=jt.type;if(!ee.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Yt),k.bufferData(k.PIXEL_PACK_BUFFER,xt.byteLength,k.STREAM_READ),k.readPixels(K,ct,ot,$,ne.convert(ie),ne.convert($t),0);const xe=q!==null?ht.get(q).__webglFramebuffer:null;Wt.bindFramebuffer(k.FRAMEBUFFER,xe);const be=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await PM(k,be,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Yt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,xt),k.deleteBuffer(Yt),k.deleteSync(be),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,K=null,ct=0){const ot=Math.pow(2,-ct),$=Math.floor(D.image.width*ot),xt=Math.floor(D.image.height*ot),Pt=K!==null?K.x:0,Bt=K!==null?K.y:0;C.setTexture2D(D,0),k.copyTexSubImage2D(k.TEXTURE_2D,ct,0,0,Pt,Bt,$,xt),Wt.unbindTexture()};const pa=k.createFramebuffer(),sn=k.createFramebuffer();this.copyTextureToTexture=function(D,K,ct=null,ot=null,$=0,xt=null){xt===null&&($!==0?(iu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=$,$=0):xt=0);let Pt,Bt,jt,ie,$t,Yt,xe,be,Ke;const he=D.isCompressedTexture?D.mipmaps[xt]:D.image;if(ct!==null)Pt=ct.max.x-ct.min.x,Bt=ct.max.y-ct.min.y,jt=ct.isBox3?ct.max.z-ct.min.z:1,ie=ct.min.x,$t=ct.min.y,Yt=ct.isBox3?ct.min.z:0;else{const fn=Math.pow(2,-$);Pt=Math.floor(he.width*fn),Bt=Math.floor(he.height*fn),D.isDataArrayTexture?jt=he.depth:D.isData3DTexture?jt=Math.floor(he.depth*fn):jt=1,ie=0,$t=0,Yt=0}ot!==null?(xe=ot.x,be=ot.y,Ke=ot.z):(xe=0,be=0,Ke=0);const me=ne.convert(K.format),te=ne.convert(K.type);let rn;K.isData3DTexture?(C.setTexture3D(K,0),rn=k.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(C.setTexture2DArray(K,0),rn=k.TEXTURE_2D_ARRAY):(C.setTexture2D(K,0),rn=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,K.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,K.unpackAlignment);const we=k.getParameter(k.UNPACK_ROW_LENGTH),yn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Li=k.getParameter(k.UNPACK_SKIP_PIXELS),je=k.getParameter(k.UNPACK_SKIP_ROWS),Oi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,he.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,he.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ie),k.pixelStorei(k.UNPACK_SKIP_ROWS,$t),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Yt);const Ge=D.isDataArrayTexture||D.isData3DTexture,un=K.isDataArrayTexture||K.isData3DTexture;if(D.isDepthTexture){const fn=ht.get(D),O=ht.get(K),Tt=ht.get(fn.__renderTarget),zt=ht.get(O.__renderTarget);Wt.bindFramebuffer(k.READ_FRAMEBUFFER,Tt.__webglFramebuffer),Wt.bindFramebuffer(k.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let fe=0;fe<jt;fe++)Ge&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ht.get(D).__webglTexture,$,Yt+fe),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ht.get(K).__webglTexture,xt,Ke+fe)),k.blitFramebuffer(ie,$t,Pt,Bt,xe,be,Pt,Bt,k.DEPTH_BUFFER_BIT,k.NEAREST);Wt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||D.isRenderTargetTexture||ht.has(D)){const fn=ht.get(D),O=ht.get(K);Wt.bindFramebuffer(k.READ_FRAMEBUFFER,pa),Wt.bindFramebuffer(k.DRAW_FRAMEBUFFER,sn);for(let Tt=0;Tt<jt;Tt++)Ge?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,fn.__webglTexture,$,Yt+Tt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,fn.__webglTexture,$),un?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,O.__webglTexture,xt,Ke+Tt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,O.__webglTexture,xt),$!==0?k.blitFramebuffer(ie,$t,Pt,Bt,xe,be,Pt,Bt,k.COLOR_BUFFER_BIT,k.NEAREST):un?k.copyTexSubImage3D(rn,xt,xe,be,Ke+Tt,ie,$t,Pt,Bt):k.copyTexSubImage2D(rn,xt,xe,be,ie,$t,Pt,Bt);Wt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else un?D.isDataTexture||D.isData3DTexture?k.texSubImage3D(rn,xt,xe,be,Ke,Pt,Bt,jt,me,te,he.data):K.isCompressedArrayTexture?k.compressedTexSubImage3D(rn,xt,xe,be,Ke,Pt,Bt,jt,me,he.data):k.texSubImage3D(rn,xt,xe,be,Ke,Pt,Bt,jt,me,te,he):D.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,xt,xe,be,Pt,Bt,me,te,he.data):D.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,xt,xe,be,he.width,he.height,me,he.data):k.texSubImage2D(k.TEXTURE_2D,xt,xe,be,Pt,Bt,me,te,he);k.pixelStorei(k.UNPACK_ROW_LENGTH,we),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,yn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Li),k.pixelStorei(k.UNPACK_SKIP_ROWS,je),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Oi),xt===0&&K.generateMipmaps&&k.generateMipmap(rn),Wt.unbindTexture()},this.copyTextureToTexture3D=function(D,K,ct=null,ot=null,$=0){return iu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,K,ct,ot,$)},this.initRenderTarget=function(D){ht.get(D).__webglFramebuffer===void 0&&C.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?C.setTextureCube(D,0):D.isData3DTexture?C.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?C.setTexture2DArray(D,0):C.setTexture2D(D,0),Wt.unbindTexture()},this.resetState=function(){H=0,G=0,q=null,Wt.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return za}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ie._getUnpackColorSpace()}}const j_={type:"change"},ep={type:"start"},Dv={type:"end"},Wc=new Wd,X_=new gs,o2=Math.cos(70*LM.DEG2RAD),wn=new et,ai=2*Math.PI,Ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wh=1e-6;class l2 extends E1{constructor(t,i=null){super(t,i),this.state=Ze.NONE,this.target=new et,this.cursor=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ia.ROTATE,MIDDLE:Ia.DOLLY,RIGHT:Ia.PAN},this.touches={ONE:vs.ROTATE,TWO:vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new et,this._lastQuaternion=new $s,this._lastTargetPosition=new et,this._quat=new $s().setFromUnitVectors(t.up,new et(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new v_,this._sphericalDelta=new v_,this._scale=1,this._panOffset=new et,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new et,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=u2.bind(this),this._onPointerDown=c2.bind(this),this._onPointerUp=f2.bind(this),this._onContextMenu=v2.bind(this),this._onMouseWheel=p2.bind(this),this._onKeyDown=m2.bind(this),this._onTouchStart=g2.bind(this),this._onTouchMove=_2.bind(this),this._onMouseDown=h2.bind(this),this._onMouseMove=d2.bind(this),this._interceptControlDown=x2.bind(this),this._interceptControlUp=y2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(j_),this.update(),this.state=Ze.NONE}update(t=null){const i=this.object.position;wn.copy(i).sub(this.target),wn.applyQuaternion(this._quat),this._spherical.setFromVector3(wn),this.autoRotate&&this.state===Ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ai:s>Math.PI&&(s-=ai),l<-Math.PI?l+=ai:l>Math.PI&&(l-=ai),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(wn.setFromSpherical(this._spherical),wn.applyQuaternion(this._quatInverse),i.copy(this.target).add(wn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=wn.length();h=this._clampDistance(d*this._scale);const p=d-h;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const d=new et(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const m=new et(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),h=wn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Wc.origin.copy(this.object.position),Wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wc.direction))<o2?this.object.lookAt(this.target):(X_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wc.intersectPlane(X_,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Wh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wh||this._lastTargetPosition.distanceToSquared(this.target)>Wh?(this.dispatchEvent(j_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ai/60*this.autoRotateSpeed*t:ai/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){wn.setFromMatrixColumn(i,0),wn.multiplyScalar(-t),this._panOffset.add(wn)}_panUp(t,i){this.screenSpacePanning===!0?wn.setFromMatrixColumn(i,1):(wn.setFromMatrixColumn(i,0),wn.crossVectors(this.object.up,wn)),wn.multiplyScalar(t),this._panOffset.add(wn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;wn.copy(l).sub(this.target);let c=wn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ai*this._rotateDelta.x/i.clientHeight),this._rotateUp(ai*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ai*this._rotateDelta.x/i.clientHeight),this._rotateUp(ai*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new de,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function c2(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function u2(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function f2(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dv),this.state=Ze.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function h2(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ia.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ze.DOLLY;break;case Ia.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ze.ROTATE}break;case Ia.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ze.PAN}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(ep)}function d2(r){switch(this.state){case Ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function p2(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ze.NONE||(r.preventDefault(),this.dispatchEvent(ep),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Dv))}function m2(r){this.enabled!==!1&&this._handleKeyDown(r)}function g2(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case vs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ze.TOUCH_ROTATE;break;case vs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ze.TOUCH_PAN;break;default:this.state=Ze.NONE}break;case 2:switch(this.touches.TWO){case vs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ze.TOUCH_DOLLY_PAN;break;case vs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ze.TOUCH_DOLLY_ROTATE;break;default:this.state=Ze.NONE}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(ep)}function _2(r){switch(this._trackPointer(r),this.state){case Ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ze.NONE}}function v2(r){this.enabled!==!1&&r.preventDefault()}function x2(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function y2(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ll=new et;function Di(r,t,i,s,l,c){const h=2*Math.PI*l/4,d=Math.max(c-2*l,0),p=Math.PI/4;ll.copy(t),ll[s]=0,ll.normalize();const m=.5*h/(h+d),_=1-ll.angleTo(r)/p;return Math.sign(ll[i])===1?_*m:d/(h+d)+m+m*(1-_)}class S2 extends la{constructor(t=1,i=1,s=1,l=2,c=.1){if(l=l*2+1,c=Math.min(t/2,i/2,s/2,c),super(1,1,1,l,l,l),l===1)return;const h=this.toNonIndexed();this.index=null,this.attributes.position=h.attributes.position,this.attributes.normal=h.attributes.normal,this.attributes.uv=h.attributes.uv;const d=new et,p=new et,m=new et(t,i,s).divideScalar(2).subScalar(c),_=this.attributes.position.array,x=this.attributes.normal.array,y=this.attributes.uv.array,S=_.length/6,b=new et,w=.5/l;for(let v=0,g=0;v<_.length;v+=3,g+=2)switch(d.fromArray(_,v),p.copy(d),p.x-=Math.sign(p.x)*w,p.y-=Math.sign(p.y)*w,p.z-=Math.sign(p.z)*w,p.normalize(),_[v+0]=m.x*Math.sign(d.x)+p.x*c,_[v+1]=m.y*Math.sign(d.y)+p.y*c,_[v+2]=m.z*Math.sign(d.z)+p.z*c,x[v+0]=p.x,x[v+1]=p.y,x[v+2]=p.z,Math.floor(v/S)){case 0:b.set(1,0,0),y[g+0]=Di(b,p,"z","y",c,s),y[g+1]=1-Di(b,p,"y","z",c,i);break;case 1:b.set(-1,0,0),y[g+0]=1-Di(b,p,"z","y",c,s),y[g+1]=1-Di(b,p,"y","z",c,i);break;case 2:b.set(0,1,0),y[g+0]=1-Di(b,p,"x","z",c,t),y[g+1]=Di(b,p,"z","x",c,s);break;case 3:b.set(0,-1,0),y[g+0]=1-Di(b,p,"x","z",c,t),y[g+1]=1-Di(b,p,"z","x",c,s);break;case 4:b.set(0,0,1),y[g+0]=1-Di(b,p,"x","y",c,t),y[g+1]=1-Di(b,p,"y","x",c,i);break;case 5:b.set(0,0,-1),y[g+0]=Di(b,p,"x","y",c,t),y[g+1]=1-Di(b,p,"y","x",c,i);break}}}const Uv=[[4.5,3],[10.5,3],[4.5,8],[10.5,8],[18.5,3],[18.5,14]],M2=[[4,4],[10,4],[4,9],[10,9],[18,4],[18,15]],E2=[[2,14],[4,14],[6,14],[8,14],[10,14],[11,16]],Nv=[[1.5,1.5],[13.5,1.5],[1.5,10.5],[21.5,6.5],[13.5,18.5],[21.5,18.5]],Lv=2.5;function b2(r){r.blockRect(0,0,24,1),r.blockRect(0,0,1,20),r.blockRect(0,12,13,1);for(const[t,i]of Uv)r.blockRect(t-1.85,i-.825,3.7,1.65),r.blockRect(t-.5,i+Lv-.5,1,1);r.blockRect(3,15,7,3);for(const t of[4.2,6.5,8.8])r.blockRect(t-.5,18.2,1,1.3);r.blockRect(17,8,4,2),r.blockRect(18,10,2,1),r.blockRect(22,13,2,4);for(const[t,i]of Nv)r.blockRect(t-.5,i-.5,1,1);return r}class T2{constructor(){Ci(this,"geometries",new Map);Ci(this,"materials",new Map);Ci(this,"textures",[])}material(t,i=.38,s=.03){const l=`${t}:${i}:${s}`;return this.materials.has(l)||this.materials.set(l,new Jd({color:t,roughness:i,metalness:s})),this.materials.get(l)}geometry(t,i){return this.geometries.has(t)||this.geometries.set(t,i()),this.geometries.get(t)}box(t,i,s,l,c,h,d,p,m=.06){const _=this.geometry(`box:${i}:${s}:${l}:${m}`,()=>m?new S2(i,s,l,2,Math.min(m,i/4,s/4,l/4)):new la(i,s,l)),x=new nn(_,this.material(p));return x.position.set(c,h,d),x.castShadow=!0,x.receiveShadow=!0,t.add(x),x}cylinder(t,i,s,l,c,h,d,p){const m=this.geometry(`cyl:${i}:${s}:${l}`,()=>new Kd(i,s,l,20)),_=new nn(m,this.material(p,.29));return _.position.set(c,h,d),_.castShadow=!0,_.receiveShadow=!0,t.add(_),_}sphere(t,i,s,l,c,h){const d=this.geometry(`sphere:${i}`,()=>new uu(i,16,12)),p=new nn(d,this.material(h));return p.position.set(s,l,c),p.castShadow=!0,t.add(p),p}dispose(){for(const t of this.geometries.values())t.dispose();for(const t of this.materials.values())t.dispose();for(const t of this.textures)t.dispose()}}function A2(r,t,i){const s=document.createElement("canvas");s.width=256,s.height=160;const l=s.getContext("2d");if(l.fillStyle="#24283c",l.fillRect(0,0,256,160),l.fillStyle="#3e4159",l.fillRect(0,0,256,17),l.fillStyle=i,l.fillRect(12,6,5,5),l.fillStyle="#8390a9",l.fillRect(24,6,68,4),t==="iris")for(let h=0;h<5;h++)l.fillStyle=["#9d88d8","#83bbaa","#d9a3be"][h%3],l.fillRect(28+h*41,136-[39,70,58,94,85][h],26,[39,70,58,94,85][h]);else for(let h=0;h<7;h++)l.fillStyle=h%3===0?i:"#8490a7",l.globalAlpha=.8,l.fillRect(17,31+h*15,70+h*31%143,4),l.globalAlpha=1;const c=new Mv(s);return c.colorSpace=Qn,r.textures.push(c),c}function R2(r,t,i){b2(i);const s=t.box(r,24.7,.42,20.7,12,-.26,10,"#c7b29d",.14);t.box(r,24.2,.1,20.2,12,-.005,10,"#f0ddc4",.04).userData.walkable=!0;const l=t.geometry("plank",()=>new la(1.98,.035,.98)),c=new f1(l,t.material("#ecd4b5",.62),240);let h=0;const d=new Bn,p=["#efddc6","#ecd5b9","#e5caa8","#f5e3ca","#e8cfb0"];for(let v=0;v<20;v++)for(let g=0;g<12;g++)d.position.set(g*2+1,.061,v+.5),d.updateMatrix(),c.setMatrixAt(h,d.matrix),c.setColorAt(h,new Re(p[(g*7+v*3)%5])),h++;c.receiveShadow=!0,c.userData.walkable=!0,r.add(c),t.box(r,12.3,.045,10.3,7.1,.1,6,"#ccb8ea",.12).userData.walkable=!0,t.box(r,7.3,.045,7.8,19.3,.1,4.6,"#d4e2d2",.12).userData.walkable=!0,t.box(r,7.3,.045,7.8,19.3,.1,15.4,"#e2d3ed",.12).userData.walkable=!0,t.box(r,24.5,3,.18,12,1.55,-.03,"#e8e3ed",.04),t.box(r,.18,3,20,-.03,1.55,10,"#eee9f0",.04);const m=new m1({color:"#b8dfe5",transparent:!0,opacity:.34,roughness:.14,metalness:.04,side:sa,depthWrite:!1}),_=t.geometry("window",()=>new la(3.5,1.85,.035));for(let v=2.3;v<24;v+=4.6){const g=new nn(_,m);g.position.set(v,1.9,.09),r.add(g),t.box(r,3.65,.1,.16,v,.94,.12,"#fafaff",.02),t.box(r,3.65,.1,.16,v,2.87,.12,"#fafaff",.02),t.box(r,.08,1.95,.12,v,1.9,.15,"#f6f8fb",.01),t.box(r,.08,1.95,.12,v-1.8,1.9,.15,"#f6f8fb",.01),t.box(r,.08,1.95,.12,v+1.8,1.9,.15,"#f6f8fb",.01)}for(let v=2.8;v<20;v+=4.6){const g=new nn(_,m);g.rotation.y=Math.PI/2,g.position.set(.1,1.9,v),r.add(g),t.box(r,.16,.1,3.65,.12,.94,v,"#fafaff",.02),t.box(r,.16,.1,3.65,.12,2.87,v,"#fafaff",.02)}for(let v=1.5;v<11;v+=3){const g=new nn(t.geometry("partition",()=>new la(2.85,2.35,.045)),m);g.position.set(v,1.3,12.2),r.add(g),t.box(r,.055,2.5,.06,v-1.46,1.3,12.2,"#c8c0d2",.01),t.box(r,2.9,.05,.07,v,2.55,12.2,"#cec8d6",.01)}r.userData.extraMaterials=[m];const x=M2,y=Uv,S=["anto","atlas","vera","bruno","iris","leo"],b=["#b58aee","#eeae67","#74b9a7","#799acb","#e995b9","#d7bb73"];y.forEach(([v,g],I)=>{const L=b[I];t.box(r,3.7,.15,1.65,v,1.3,g,"#f7eddf",.1);for(const G of[-1.5,1.5])for(const q of[-.58,.58])t.box(r,.12,1.2,.12,v+G,.66,g+q,"#cbbba8",.025);t.box(r,1.4,.88,.1,v,2.03,g-.28,"#454554",.055),t.box(r,.15,.25,.12,v,1.5,g-.28,"#5a5867",.025),t.box(r,.7,.05,.36,v,1.4,g-.22,"#a9a6b5",.035);const U=new nn(t.geometry("display",()=>new nr(1.27,.72)),new no({map:A2(t,S[I],L)}));U.position.set(v,2.04,g-.219),r.add(U),r.userData.extraMaterials.push(U.material),t.box(r,1.08,.045,.4,v,1.408,g+.47,"#e0dbe7",.025);for(let G=0;G<3;G++)t.box(r,.92,.015,.025,v,1.436,g+.36+G*.11,"#a4a0af",.006);t.box(r,.22,.05,.35,v+.83,1.43,g+.46,"#c8c1d4",.06),t.cylinder(r,.13,.105,.26,v+1.36,1.5,g+.3,L),t.cylinder(r,.105,.105,.012,v+1.36,1.638,g+.3,"#6c5646");const B=new nn(t.geometry("handle",()=>new ml(.09,.025,7,12)),t.material(L));B.position.set(v+1.5,1.51,g+.3),B.rotation.y=Math.PI/2,r.add(B),t.box(r,.45,.04,.6,v-1.25,1.43,g+.3,"#c9b5e6",.02);const H=g+Lv;t.cylinder(r,.07,.07,.65,v,.47,H,"#73707d"),t.box(r,.95,.15,.85,v,.8,H,L,.12),t.box(r,.95,.85,.15,v,1.19,H+.38,L,.12),t.box(r,1.1,.065,.12,v,.19,H,"#96909e",.03),t.box(r,.12,.065,1.1,v,.19,H,"#96909e",.03);for(const G of[-.45,.45])for(const q of[-.45,.45])t.sphere(r,.075,v+G,.12,H+q,"#625e6c")}),t.box(r,6.7,.18,2.4,6.5,1.28,16.5,"#efe1c9",.25);for(const v of[4,9])t.box(r,.2,1.2,1.8,v,.64,16.5,"#c2b39f",.03);for(const v of[4.2,6.5,8.8])t.box(r,1,.16,.8,v,.75,18.7,"#9f8db9",.12),t.box(r,1,.75,.15,v,1.1,19.05,"#a996c4",.1),t.cylinder(r,.08,.08,.65,v,.38,18.7,"#80788c");t.box(r,.9,.05,.65,5.5,1.405,16.5,"#84679f",.04),t.box(r,.65,.05,.8,7.1,1.405,16.4,"#fff8ee",.03);for(const v of[3.9,8.8])t.cylinder(r,.12,.09,.23,v,1.52,16.1,"#bca5d7");t.box(r,3.3,.5,1,19,.45,8.5,"#83ab95",.2),t.box(r,3.3,.82,.22,19,.87,8.92,"#93b59f",.16),t.box(r,.22,.67,1,17.4,.78,8.5,"#92b49d",.12),t.box(r,.22,.67,1,20.6,.78,8.5,"#92b49d",.12),t.box(r,1.6,.13,.8,19,.52,10.4,"#e2d3ba",.1);for(const v of[-.6,.6])t.box(r,.09,.48,.09,19+v,.24,10.4,"#b0a18c",.02);t.box(r,.7,2.4,3.2,22.8,1.27,14.8,"#e2d6c4",.05);for(let v=0;v<4;v++){t.box(r,.8,.07,3.2,22.8,.35+v*.57,14.8,"#cbbda9",.02);for(let g=0;g<5;g++)t.box(r,.35,.38,.16,22.7,.57+v*.57,13.5+g*.42,["#9f86bd","#cfaa8a","#8baea0","#d4b7d2"][g%4],.01)}function w(v,g,I=!1){const L=I?1.55:1;t.cylinder(r,.39,.29,.62,v,.39,g,"#eee5d9"),t.cylinder(r,.35,.35,.035,v,.72,g,"#746053");for(let U=0;U<7;U++){const B=U*2.4,H=new si;H.position.set(v,.7,g),H.rotation.y=B,r.add(H);const G=t.sphere(H,.23,0,L*.5,.18,["#669c7a","#84ad8d","#4c8267"][U%3]);G.scale.set(.58,L*1.9,1.05),G.rotation.x=.35+U%3*.22,G.position.y=L*.42}}Nv.forEach(([v,g],I)=>w(v,g,I%2===0));for(let v=1;v<24;v+=1.4)t.cylinder(r,.16,.16,.07,v,-.01,20.35,"#d5c2aa");return{floor:s,homes:x,meeting:E2}}function C2(r,t,i){const s=new si,l=new si;s.add(l);const c=["#edbd88","#ecc49a","#e4b38a","#ce9d73","#f0c8a3","#d9ad85"][i],h=[new si,new si];h.forEach((B,H)=>{B.position.set(H?.205:-.205,.73,0),l.add(B),r.box(B,.34,.57,.39,0,-.285,0,"#454655",.055),r.box(B,.36,.18,.54,0,-.59,.065,"#4a4958",.045)}),r.box(l,.8,.19,.44,0,.78,0,"#4b485c",.035),r.box(l,.85,.7,.47,0,1.19,0,t.color,.105),r.box(l,.025,.6,.015,0,1.2,.244,"#ffffff",.004);const d=r.box(l,.2,.15,.02,-.19,1.24,.25,"#f7effc",.02);d.rotation.z=.08,r.box(l,.11,.028,.025,-.19,1.25,.266,i%2?"#7c6c91":"#a89bbc",.004);const p=[new si,new si];p.forEach((B,H)=>{const G=H?1:-1;B.position.set(G*.53,1.42,0),l.add(B),r.cylinder(B,.15,.13,.48,0,-.23,0,t.color),r.sphere(B,.15,0,-.03,0,t.color);const q=new nn(r.geometry("claw",()=>new ml(.115,.055,8,15,Math.PI*1.62)),r.material(c,.3));q.position.set(0,-.58,.015),q.rotation.z=H?.2:2.9,q.castShadow=!0,B.add(q),r.cylinder(B,.075,.075,.14,0,-.49,0,c)});const m=new si;m.position.y=1.79,l.add(m),r.cylinder(m,.31,.31,.48,0,0,0,c),r.cylinder(m,.13,.13,.105,0,.29,0,c),r.cylinder(l,.14,.14,.18,0,1.53,0,c);const _=document.createElement("canvas");_.width=256,_.height=192;const x=_.getContext("2d");x.fillStyle="#403841",x.beginPath(),x.ellipse(83,77,9,13,0,0,Math.PI*2),x.ellipse(173,77,9,13,0,0,Math.PI*2),x.fill(),x.strokeStyle="#765344",x.lineWidth=6,x.lineCap="round",x.beginPath(),x.arc(128,111,34,.17,Math.PI-.17),x.stroke(),x.fillStyle="#f7ddbf",x.beginPath(),x.arc(80,72,2.5,0,Math.PI*2),x.arc(170,72,2.5,0,Math.PI*2),x.fill(),(i===1||i===3)&&(x.strokeStyle="#423e4a",x.lineWidth=6,x.strokeRect(53,53,61,44),x.strokeRect(142,53,61,44),x.beginPath(),x.moveTo(114,68),x.lineTo(142,68),x.stroke());const y=new Mv(_);y.colorSpace=Qn,r.textures.push(y);const S=new no({map:y,transparent:!0,depthWrite:!1,side:Fa}),b=new nn(r.geometry("face",()=>new nr(.54,.41)),S);b.position.set(0,-.005,.316),m.add(b),s.userData.extraMaterials=[S];const w=["#433b50","#715441","#493e46","#564741","#ae758f","#866244"][i];r.cylinder(m,.325,.325,.16,0,.2,-.015,w);const v=r.sphere(m,.3,0,.27,-.035,w);if(v.scale.y=.48,i===0||i===2||i===4){r.box(m,.12,.37,.26,-.28,.06,-.08,w,.06),r.box(m,.12,.37,.26,.28,.06,-.08,w,.06);const B=r.sphere(m,.21,0,.08,-.34,w);B.scale.y=1.3}else{const B=r.box(m,.46,.12,.22,-.03,.21,.2,w,.045);B.rotation.z=.1}const g=new no({color:"#8f63d4",transparent:!0,opacity:.82}),I=new nn(r.geometry("selection",()=>new ml(.65,.045,8,40)),g);I.rotation.x=-Math.PI/2,I.position.y=.08,s.add(I);const L=new Jd({color:"#8fbea5",emissive:"#8fbea5",emissiveIntensity:.25,roughness:.3}),U=new nn(r.geometry("status-orb",()=>new uu(.09,12,8)),L);return U.position.set(.49,2.18,0),s.add(U),s.userData.extraMaterials.push(g,L),s.scale.setScalar(1.08),{root:s,body:l,head:m,arms:p,legs:h,ring:I,orb:U,agent:t}}const He=([r,t])=>`${r},${t}`,ia=r=>[r[0],r[1]],q_=([r,t])=>[[r+1,t],[r,t+1],[r-1,t],[r,t-1]];class w2{constructor(t=24,i=20){Ci(this,"width");Ci(this,"height");Ci(this,"walls",new Set);Ci(this,"occupants",new Map);Ci(this,"positions",new Map);Ci(this,"reservations",new Map);Ci(this,"steps",new Map);if(!Number.isInteger(t)||!Number.isInteger(i)||t<1||i<1||t>256||i>256)throw new RangeError("La cuadrícula debe medir entre 1 y 256 celdas por lado.");this.width=t,this.height=i}get blockedCount(){return this.walls.size}inBounds(t){return Number.isInteger(t[0])&&Number.isInteger(t[1])&&t[0]>=0&&t[0]<this.width&&t[1]>=0&&t[1]<this.height}isBlocked(t){return!this.inBounds(t)||this.walls.has(He(t))}blockRect(t,i,s,l){if(![t,i,s,l].every(Number.isFinite)||s<=0||l<=0)throw new RangeError("El obstáculo debe ser un rectángulo finito de tamaño positivo.");const c=[];for(let h=Math.max(0,Math.floor(t));h<Math.min(this.width,Math.ceil(t+s));h++)for(let d=Math.max(0,Math.floor(i));d<Math.min(this.height,Math.ceil(i+l));d++){const p=He([h,d]);if(this.occupants.has(p)||this.reservations.has(p))throw new Error("El obstáculo invadiría un personaje.");c.push(p)}for(const h of c)this.walls.add(h)}isFree(t,i){if(this.isBlocked(t))return!1;for(let s=-1;s<=1;s++)for(let l=-1;l<=1;l++){const c=He([t[0]+s,t[1]+l]),h=this.occupants.get(c),d=this.reservations.get(c);if(h!==void 0&&h!==i||d!==void 0&&d!==i)return!1}return!0}register(t,i){if(!t||!this.isFree(i,t))return!1;const s=this.positions.get(t);return s?He(s)===He(i):(this.positions.set(t,ia(i)),this.occupants.set(He(i),t),!0)}position(t){const i=this.positions.get(t);return i?ia(i):void 0}path(t,i){const s=this.positions.get(t);if(!s||!this.isFree(i,t))return[];const l=He(s),c=He(i);if(l===c)return[];const h=[ia(s)],d=new Map([[l,null]]);for(let _=0;_<h.length;_++){const x=h[_];if(He(x)===c)break;for(const y of q_(x)){const S=He(y);d.has(S)||!this.isFree(y,t)||(d.set(S,x),h.push(y))}}if(!d.has(c))return[];const p=[];let m=ia(i);for(;m&&He(m)!==l;)p.unshift(ia(m)),m=d.get(He(m))??null;return p}reserveNext(t,i){const s=this.positions.get(t);if(!s||Math.abs(s[0]-i[0])+Math.abs(s[1]-i[1])!==1||!this.isFree(i,t))return!1;const l=this.steps.get(t);return l?He(l)===He(i):(this.steps.set(t,ia(i)),this.reservations.set(He(i),t),!0)}arrive(t){const i=this.steps.get(t),s=this.positions.get(t);if(s)return i?(this.occupants.delete(He(s)),this.occupants.set(He(i),t),this.positions.set(t,ia(i)),this.reservations.delete(He(i)),this.steps.delete(t),ia(i)):ia(s)}cancel(t){const i=this.steps.get(t);i&&this.reservations.delete(He(i)),this.steps.delete(t)}remove(t){this.cancel(t);const i=this.positions.get(t);i&&this.occupants.delete(He(i)),this.positions.delete(t)}nearestFree(t,i){if(!t.every(Number.isFinite))return null;const s=[Math.max(0,Math.min(this.width-1,Math.round(t[0]))),Math.max(0,Math.min(this.height-1,Math.round(t[1])))],l=[s],c=new Set([He(s)]);for(let h=0;h<l.length;h++){const d=l[h];if(this.isFree(d,i))return ia(d);for(const p of q_(d)){const m=He(p);this.inBounds(p)&&!c.has(m)&&(c.add(m),l.push(p))}}return null}}class D2{constructor(){Ci(this,"claims",new Map)}claim(t,i){if(!t||i.length===0)return!1;const s=new Set;for(const[l,c]of i){if(!Number.isInteger(l)||!Number.isInteger(c))return!1;for(let h=-1;h<=1;h++)for(let d=-1;d<=1;d++)s.add(He([l+h,c+d]))}for(const[l,c]of this.claims)if(l!==t){for(const h of s)if(c.has(h))return!1}return this.claims.set(t,s),!0}release(t){this.claims.delete(t)}}const ji=r=>["En ejecución","En corrección"].includes(r),U2=r=>r==="Fallido"?"#d66a76":["Espera aprobación","Requiere información","Espera revisión"].includes(r)?"#d8a54d":ji(r)?"#56aa8b":r==="Interrumpido"||r==="Cancelado"?"#a79da8":"#9d87c3",N2=r=>ji(r)?"Trabajando":r,Yc={background:"#fffc",border:"1px solid #e7dff0",borderRadius:7,padding:"6px 9px",fontSize:9,color:"#816694",boxShadow:"0 2px 8px #58426709",cursor:"pointer"};function L2(r){const t=Nt.useRef(null),i=Nt.useRef(null),s=Nt.useRef(r),l=Nt.useRef(()=>{}),[c,h]=Nt.useState("Selecciona un agente y haz clic en una zona libre para moverlo."),[d,p]=Nt.useState("");s.current=r,Nt.useEffect(()=>{const x=i.current,y=t.current;let S;try{S=new r2({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{p("Tu navegador no pudo iniciar WebGL. Prueba Chrome o Edge con aceleración gráfica; puedes seleccionar el equipo desde la lista inferior.");return}p(""),y.dataset.rendererReady="false",y.dataset.sceneVersion="3d",S.setPixelRatio(Math.min(window.devicePixelRatio,1.6)),S.shadowMap.enabled=!0,S.shadowMap.type=ev,S.shadowMap.autoUpdate=!1,S.shadowMap.needsUpdate=!0,S.outputColorSpace=Qn,S.toneMapping=iv,S.toneMappingExposure=1.22,S.setClearColor("#f5f2f8",0),x.appendChild(S.domElement),S.domElement.setAttribute("aria-label","Oficina 3D interactiva. Arrastra para girar, rueda para acercar, clic en agente para seleccionar o en suelo para mover.");const b=new l1,w=new T2,v=new w2(24,20),g=new D2,I=new si;I.position.set(-12,0,-10),b.add(I);const L=new v1("#fff5e9","#a4a2bc",2.7);b.add(L);const U=new m_("#fff6df",3.2);U.position.set(-8,24,14),U.castShadow=!0,U.shadow.mapSize.set(1024,1024),U.shadow.camera.left=-20,U.shadow.camera.right=20,U.shadow.camera.top=20,U.shadow.camera.bottom=-20,U.shadow.camera.near=.1,U.shadow.camera.far=65,U.shadow.normalBias=.035,U.shadow.bias=-1e-4,U.shadow.radius=4,b.add(U);const B=new m_("#d9d9ff",1.6);B.position.set(16,12,-10),b.add(B);const H=new nn(new nr(140,140),new p1({color:"#9b87ae",opacity:.14}));H.rotation.x=-Math.PI/2,H.position.y=-.5,H.receiveShadow=!0,b.add(H);const{homes:G,meeting:q}=R2(I,w,v),N=new $d(-25,25,14,-14,.1,180);N.position.set(29,28,35);const R=new l2(N,S.domElement);R.target.set(0,.45,.2),R.enableDamping=!0,R.dampingFactor=.075,R.enablePan=!0,R.screenSpacePanning=!0,R.minPolarAngle=Math.PI*.15,R.maxPolarAngle=Math.PI*.44,R.minZoom=.7,R.maxZoom=3,R.rotateSpeed=.55,R.zoomSpeed=.75,R.panSpeed=.7,R.mouseButtons={LEFT:Ia.ROTATE,MIDDLE:Ia.DOLLY,RIGHT:Ia.PAN},R.touches={ONE:vs.ROTATE,TWO:vs.DOLLY_PAN},R.update(),R.saveState();const j=document.createElement("div");j.style.cssText="position:absolute;inset:0;overflow:hidden;pointer-events:none;",x.appendChild(j);const at=s.current.agents.map((ht,C)=>{const T=C2(w,ht,C),Y=v.nearestFree(G[C],ht.id)||G[C];v.register(ht.id,Y),T.root.position.set(Y[0]+.5,.14,Y[1]+.5),T.root.rotation.y=.7,I.add(T.root),T.root.traverse(Ct=>{Ct instanceof nn&&(Ct.userData.agentId=ht.id)}),T.ring.userData.ignorePick=!0;const pt=document.createElement("button");pt.dataset.agentId=ht.id,pt.dataset.agentLabel="true",pt.setAttribute("aria-label",`${ht.name} · ${ht.role} · Disponible`),pt.style.cssText="position:absolute;left:0;top:0;transform:translate(-50%,-100%);display:flex;align-items:center;gap:5px;white-space:nowrap;border:1px solid #e9dff2;background:#fffffff0;border-radius:7px;padding:4px 7px;box-shadow:0 2px 8px #56406c12;font:600 9px system-ui;color:#6a507e;cursor:pointer;pointer-events:auto;";const bt=document.createElement("i");bt.style.cssText=`width:5px;height:5px;flex-shrink:0;border-radius:50%;background:${ht.color}`;const z=document.createElement("span");z.textContent=ht.name;const Ut=document.createElement("small");return Ut.style.cssText="font-weight:400;font-size:7px;color:#9a85aa",Ut.textContent="Disponible",pt.append(bt,z,Ut),pt.addEventListener("click",Ct=>{Ct.stopPropagation(),s.current.onSelect(ht.id)}),j.appendChild(pt),{...T,cell:Y,path:[],step:null,target:null,pending:null,label:pt,status:"Disponible",waveUntil:0,walkPhase:C,wait:0,home:G[C],meeting:q[C]}}),rt=new si;I.add(rt);const ft=new no({color:"#a580d4",transparent:!0,opacity:.48}),mt=new Qd(.09,.14,12);function F(ht){for(;rt.children.length;)rt.remove(rt.children[0]);if(ht)for(const C of ht.path){const T=new nn(mt,ft);T.rotation.x=-Math.PI/2,T.position.set(C[0]+.5,.153,C[1]+.5),T.userData.ignorePick=!0,rt.add(T)}}function Q(ht){h(ht)}function Z(ht,C,T=!1){if(T&&ji(ht.status)){Q(`${ht.agent.name} está trabajando. El movimiento manual estará disponible cuando termine.`);return}if(v.isBlocked(C)){T&&Q("Esa zona contiene un mueble o una división. Elige suelo libre.");return}if(ht.step){ht.pending=C;return}if(!v.isFree(C,ht.agent.id)){g.release(ht.agent.id),ht.path=[],ht.target=C,ht.wait=0,s.current.selected===ht.agent.id&&F(ht),T&&Q(`${ht.agent.name} espera a que se libere el destino. Puedes elegir otro punto para cambiar la orden.`);return}const Y=v.path(ht.agent.id,C);if(Y.length===0&&He(C)!==He(ht.cell)){g.release(ht.agent.id),ht.path=[],ht.target=C,ht.wait=0,T&&Q(`${ht.agent.name} espera a que quede libre el paso. Se moverá al destino cuando haya una ruta segura.`);return}if(Y.length&&!g.claim(ht.agent.id,[ht.cell,...Y])){g.release(ht.agent.id),ht.path=[],ht.target=C,ht.wait=0,T&&Q(`${ht.agent.name} espera su turno en el pasillo compartido. La orden de movimiento está conservada.`);return}Y.length||g.release(ht.agent.id),ht.path=Y,ht.target=C,ht.wait=0,s.current.reduced&&Y.length&&Q("Movimiento reducido: traslado sin animación continua; las reservas siguen evitando colisiones."),s.current.selected===ht.agent.id&&F(ht),T&&Q(Y.length?`${ht.agent.name} se dirige al punto elegido. Esto solo mueve al personaje; las tareas se gestionan en el tablero.`:`${ht.agent.name} ya está en ese lugar.`)}l.current=ht=>{const C=at.find(T=>T.agent.id===s.current.selected);if(C){if(ht==="stop"){C.pending=null,C.target=C.step||C.cell,C.path=C.step?[C.step]:[],C.waveUntil=0,s.current.selected===C.agent.id&&F(C),Q(`${C.agent.name} detiene el desplazamiento al alcanzar una posición segura. Las tareas de IA se gestionan en el tablero.`);return}if(ht==="wave"){if(ji(C.status)){Q(`${C.agent.name} está trabajando. Puedes saludar cuando termine.`);return}C.root.rotation.y=.7,C.waveUntil=performance.now()/1e3+2.8,Q(`${C.agent.name} te saluda. Es un gesto visual, no una respuesta de IA.`);return}Z(C,ht==="desk"?C.home:C.meeting,!0)}};const At=new M1,P=new de;let nt={x:0,y:0,time:0};const St=ht=>{ht.button===0&&(nt={x:ht.clientX,y:ht.clientY,time:performance.now()})},Rt=ht=>{if(ht.button!==0||Math.hypot(ht.clientX-nt.x,ht.clientY-nt.y)>5||performance.now()-nt.time>700)return;const C=S.domElement.getBoundingClientRect();P.set((ht.clientX-C.left)/C.width*2-1,-(ht.clientY-C.top)/C.height*2+1),At.setFromCamera(P,N);const Y=At.intersectObjects(I.children,!0).filter(z=>{const Ut=z.object,Ct=Ut.material;return!Ut.userData.ignorePick&&!(Ct!=null&&Ct.transparent&&Ct.opacity<.5)})[0];if(!Y)return;if(Y.object.userData.agentId){s.current.onSelect(Y.object.userData.agentId);return}const pt=at.find(z=>z.agent.id===s.current.selected);if(!pt)return;if(!Y.object.userData.walkable){Q("Selecciona un personaje o haz clic en una zona libre del suelo.");return}const bt=I.worldToLocal(Y.point.clone());Z(pt,[Math.floor(bt.x),Math.floor(bt.z)],!0)};S.domElement.addEventListener("pointerdown",St),S.domElement.addEventListener("pointerup",Rt);const tt=ht=>{ht.preventDefault(),p("Se perdió el contexto gráfico. Recarga la vista de oficina para recuperar la escena; tus datos siguen guardados.")};S.domElement.addEventListener("webglcontextlost",tt);let gt=1,Mt=1,Dt=s.current.reset,Lt=s.current.zoom,ue=s.current.selected,Zt=0,pe=0,Oe=!1,se=performance.now()/1e3,k=!0;function ln(){gt=Math.max(1,x.clientWidth),Mt=Math.max(1,x.clientHeight);const ht=gt/Mt,C=Math.max(21.5,38/ht);N.left=-C*ht/2,N.right=C*ht/2,N.top=C/2,N.bottom=-C/2,N.updateProjectionMatrix(),S.setSize(gt,Mt)}const ge=new ResizeObserver(ln);ge.observe(x),ln();const ee=new et,Wt=new et;function De(ht){var bt;if(!k)return;Zt=requestAnimationFrame(De);const C=ht/1e3,T=Math.min(.5,Math.max(0,C-se));se=C;const Y=s.current;R.enableDamping=!Y.reduced,Y.reset!==Dt&&(R.reset(),N.zoom=Y.zoom,N.updateProjectionMatrix(),Dt=Y.reset,Lt=Y.zoom),Y.zoom!==Lt&&(N.zoom=Y.zoom,N.updateProjectionMatrix(),Lt=Y.zoom),ue!==Y.selected&&(ue=Y.selected,F(at.find(z=>z.agent.id===Y.selected)));for(const z of at){const Ut=Y.states[z.agent.id]||"Disponible";if(Ut!==z.status){z.status=Ut;const X=U2(Ut);z.orb.material.color.set(X),z.orb.material.emissive.set(X),z.label.firstChild.style.background=X,z.label.lastChild.textContent=N2(Ut),z.label.setAttribute("aria-label",`${z.agent.name} · ${z.agent.role} · ${Ut}`),ji(Ut)&&Z(z,z.home)}const Ct=z.agent.id===Y.selected;if(z.ring.visible=Ct,z.label.style.borderColor=Ct?"#bb93e2":"#e9dff2",z.label.style.zIndex=Ct?"4":"2",z.wait+=T,!z.step&&z.pending){const X=z.pending;z.pending=null,Z(z,X)}if(!z.step&&!z.path.length&&z.target&&He(z.cell)!==He(z.target)&&z.wait>.5){const X=v.path(z.agent.id,z.target);X.length&&g.claim(z.agent.id,[z.cell,...X])&&(z.path=X,z.wait=0,Ct&&F(z))}let kt=Y.reduced?Number.POSITIVE_INFINITY:T*2.2,Kt=0,wt=0;for(;kt>1e-5&&wt++<64;){if(!z.step){if(!z.path.length)break;const Ne=z.path[0];if(v.reserveNext(z.agent.id,Ne))z.step=Ne,z.wait=0;else{if(z.wait>1&&z.target){const $e=v.path(z.agent.id,z.target);z.path=$e.length&&g.claim(z.agent.id,[z.cell,...$e])?$e:[],z.path.length||g.release(z.agent.id),z.wait=0,Ct&&F(z)}break}}const X=z.step,Ot=X[0]+.5-z.root.position.x,dt=X[1]+.5-z.root.position.z,vt=Math.hypot(Ot,dt),Ht=Math.min(vt,kt),It=Math.atan2(Ot,dt),le=Math.atan2(Math.sin(It-z.root.rotation.y),Math.cos(It-z.root.rotation.y));if(z.root.rotation.y+=le*Math.min(1,T*12),vt<=Ht+1e-4?(z.root.position.x=X[0]+.5,z.root.position.z=X[1]+.5,z.cell=v.arrive(z.agent.id),z.step=null,z.path.shift(),Ct&&F(z)):(z.root.position.x+=Ot/vt*Ht,z.root.position.z+=dt/vt*Ht),Kt+=Ht,kt-=Ht,z.step)break;if(z.pending){const Ne=z.pending;z.pending=null,Z(z,Ne)}}!z.step&&!z.path.length&&z.target&&He(z.cell)===He(z.target)&&g.release(z.agent.id);const Ft=Kt>1e-5||!!z.step;z.walkPhase+=Ft?Kt*4.5:T*1.2;const Qt=z.walkPhase,Xt=ji(z.status),Gt=C<z.waveUntil&&!Xt&&!Ft,oe=Ft&&!Y.reduced?Math.sin(Qt)*.53:0;if(z.legs[0].rotation.x=oe,z.legs[1].rotation.x=-oe,z.body.position.y=Ft&&!Y.reduced?Math.abs(Math.sin(Qt))*.045:Xt&&!Y.reduced?Math.sin(C*5)*.008:0,z.arms[0].rotation.x=Xt&&!Ft?-.92+(Y.reduced?0:Math.sin(C*9)*.08):-oe*.7,z.arms[1].rotation.x=Xt&&!Ft?-.88+(Y.reduced?0:Math.sin(C*9+1)*.08):oe*.7,z.arms[0].rotation.z=.1,z.arms[1].rotation.z=Gt?-2.4+(Y.reduced?0:Math.sin(C*11)*.23):-.1,z.head.rotation.y=!Ft&&!Y.reduced?Math.sin(C*.7+z.walkPhase)*.055:0,z.head.rotation.z=z.status==="Fallido"?.13:0,z.orb.scale.setScalar(Xt&&!Y.reduced?1+Math.sin(C*4)*.15:1),!Ft){const X=Xt?Math.PI:Math.atan2(N.position.x-(z.root.position.x-12),N.position.z-(z.root.position.z-10));z.root.rotation.y+=Math.atan2(Math.sin(X-z.root.rotation.y),Math.cos(X-z.root.rotation.y))*Math.min(1,T*6)}z.label.dataset.walking=String(Ft),z.label.dataset.waiting=String(!Ft&&!!z.target&&He(z.cell)!==He(z.target)),z.label.dataset.remaining=String(z.path.length),z.label.dataset.target=((bt=z.target)==null?void 0:bt.join(","))||"",z.label.dataset.gesture=Gt?"saludando":"ninguno",z.label.dataset.worldX=z.root.position.x.toFixed(3),z.label.dataset.worldZ=z.root.position.z.toFixed(3),z.label.dataset.agentState=Ut,z.root.getWorldPosition(Wt),ee.copy(Wt).add(new et(0,2.75,0)).project(N);const ne=(ee.x*.5+.5)*gt,Ce=(-ee.y*.5+.5)*Mt;z.label.style.left=`${ne}px`,z.label.style.top=`${Ce}px`,z.label.style.display=ee.z<-1||ee.z>1||ne<0||ne>gt||Ce<0||Ce>Mt?"none":"flex"}R.update();const pt=at.some(z=>z.step||z.path.length||C<z.waveUntil||ji(z.status));C>=pe&&(pt||Oe)&&(S.shadowMap.needsUpdate=!0,pe=C+.12),Oe=pt,S.render(b,N),y.dataset.rendererReady!=="true"&&(y.dataset.rendererReady="true")}return Zt=requestAnimationFrame(De),()=>{k=!1,cancelAnimationFrame(Zt),ge.disconnect(),l.current=()=>{},S.domElement.removeEventListener("pointerdown",St),S.domElement.removeEventListener("pointerup",Rt),S.domElement.removeEventListener("webglcontextlost",tt),R.dispose();for(const ht of at)for(const C of ht.root.userData.extraMaterials||[])C.dispose();for(const ht of I.userData.extraMaterials||[])ht.dispose();mt.dispose(),ft.dispose(),H.geometry.dispose(),H.material.dispose(),w.dispose(),S.dispose(),S.forceContextLoss(),j.remove(),S.domElement.remove(),y.dataset.rendererReady="false"}},[]);const m=r.agents.find(x=>x.id===r.selected),_=r.states[r.selected]||"Disponible";return E.jsxs("div",{ref:t,className:"office-canvas","data-renderer-ready":"false","aria-label":"Oficina 3D interactiva de seis agentes",children:[E.jsx("div",{ref:i,style:{position:"absolute",inset:0}}),d?E.jsx("div",{role:"alert",style:{position:"absolute",inset:"30% 8% auto",background:"#fff9",padding:18,borderRadius:12,fontSize:12,color:"#82668f",lineHeight:1.7},children:d}):E.jsxs("div",{className:"scene-3d-actions",style:{position:"absolute",top:61,right:12,zIndex:5,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:5,pointerEvents:"auto"},children:[E.jsxs("div",{style:{fontSize:8,color:"#9a81ad",background:"#ffffffc9",borderRadius:5,padding:"4px 7px"},children:[m==null?void 0:m.name," · ",_]}),E.jsxs("div",{style:{display:"flex",gap:4},children:[E.jsx("button",{style:Yc,onClick:()=>l.current("desk"),title:"Mover visualmente al escritorio",disabled:ji(_),children:"Escritorio"}),E.jsx("button",{style:Yc,onClick:()=>l.current("meeting"),title:"Mover visualmente a la sala de reunión",disabled:ji(_),children:"Reunión"}),E.jsx("button",{style:Yc,onClick:()=>l.current("wave"),title:"Animación visual de saludo",disabled:ji(_),children:"Saludar"}),E.jsx("button",{style:Yc,onClick:()=>l.current("stop"),title:"Detener desplazamiento visual",disabled:ji(_),children:"Detener"})]})]}),E.jsx("p",{className:"scene-3d-feedback",role:"status","aria-live":"polite",style:{position:"absolute",left:12,right:170,bottom:47,fontSize:8,lineHeight:1.5,color:"#96809f",padding:"5px 7px",margin:0,borderRadius:5,background:"#fbf8fdca",pointerEvents:"none",maxWidth:430},children:c})]})}async function Zc(r,t,i){const s=await fetch("/api"+r,{method:i||(t?"POST":"GET"),headers:{"Content-Type":"application/json"},body:t?JSON.stringify(t):void 0}),l=await s.json();if(!s.ok)throw Error(typeof l.detail=="string"?l.detail:JSON.stringify(l.detail||l));return l}const lu=r=>r.trim().replace(/\/+$/,"");function ul(r){return{provider:r.provider,ollama_url:lu(r.ollama_url),openai_url:lu(r.openai_url),agents:r.agents.map(t=>({...t}))}}const Kc=r=>JSON.stringify(ul(r));function O2(r){var I;const t={agents:r.agents,provider:r.provider,ollama_url:r.ollama,openai_url:r.openai},[i,s]=Nt.useState(()=>ul(t)),[l,c]=Nt.useState(!1),[h,d]=Nt.useState(null),[p,m]=Nt.useState("anto"),_=Nt.useRef(!0),x=Nt.useRef(0);Nt.useEffect(()=>(_.current=!0,()=>{_.current=!1,x.current++}),[]),Nt.useEffect(()=>{s(ul({agents:r.agents,provider:r.provider,ollama_url:r.ollama,openai_url:r.openai}))},[r.agents,r.provider,r.ollama,r.openai]);const y=Kc(i)!==Kc(t),S=r.status.provider===i.provider&&lu(r.status.endpoint||"")===lu(i.provider==="ollama"?i.ollama_url:i.openai_url),b=S?r.status.models:[];function w(L){s(L),d(null)}async function v(L){const U=++x.current;c(!0),r.onError(""),d(null);try{await Zc("/settings",ul(i),"PUT");const B=await Zc("/settings");if(r.onSaved(B),_.current&&U===x.current&&s(ul(B)),L==="probe"){const G=await Zc("/models/test",{agent:p});_.current&&U===x.current&&d({value:G,signature:Kc(B),agent:p}),r.onNotice(G.verified?"El proveedor devolvió una respuesta a la prueba. Esto no certifica la calidad de sus análisis.":"El proveedor no devolvió contenido verificable.")}const H=await Zc("/models");r.onStatus(H),L==="save"?r.onNotice("Configuración de agentes y API guardada."):L==="check"&&r.onNotice(H.connected?"La API responde. La inferencia se comprueba por separado.":"Configuración guardada; la API todavía no responde.")}catch(B){r.onError(B.message)}finally{_.current&&U===x.current&&c(!1)}}const g=h&&h.signature===Kc(i)&&h.agent===p?h.value:null;return E.jsx("section",{className:"content-card settings-card",children:E.jsxs("fieldset",{className:"settings-fields",disabled:l,style:{border:0,padding:0,margin:0,minWidth:0},children:[E.jsxs("div",{className:"section-title",children:[E.jsxs("div",{children:[E.jsx("div",{className:"eyebrow",children:"CONEXIONES REALES · SIN MODELOS DESCARGADOS AUTOMÁTICAMENTE"}),E.jsx("h2",{children:"APIs y modelos"})]}),E.jsx("span",{className:"pill",children:"Una inferencia a la vez"})]}),E.jsxs("div",{className:"provider-options",role:"group","aria-label":"Proveedor de modelos",children:[E.jsxs("button",{className:i.provider==="ollama"?"provider-option selected":"provider-option",onClick:()=>w({...i,provider:"ollama"}),children:[E.jsx("span",{className:"provider-symbol",children:E.jsx(LS,{size:23})}),E.jsx("strong",{children:"Ollama · recomendado"}),E.jsx("small",{children:"API nativa local · streaming · planes JSON"}),E.jsx("span",{className:"provider-chip",children:"SIN API DE PAGO"})]}),E.jsxs("button",{className:i.provider==="openai_local"?"provider-option selected":"provider-option",onClick:()=>w({...i,provider:"openai_local"}),children:[E.jsx("span",{className:"provider-symbol",children:E.jsx(FS,{size:23})}),E.jsx("strong",{children:"API local compatible"}),E.jsx("small",{children:"LM Studio / llama.cpp · formato OpenAI"}),E.jsx("span",{className:"provider-chip",children:"EJECUTADO EN TU EQUIPO"})]})]}),E.jsxs("div",{className:"api-config-row",children:[E.jsxs("label",{children:[i.provider==="ollama"?"URL de la API de Ollama":"URL base de la API local compatible",E.jsx("input",{"aria-label":"URL de la API",value:i.provider==="ollama"?i.ollama_url:i.openai_url,onChange:L=>w({...i,...i.provider==="ollama"?{ollama_url:L.target.value}:{openai_url:L.target.value}}),spellCheck:!1})]}),E.jsxs("button",{className:"button secondary",onClick:()=>v("check"),children:[l?E.jsx(J_,{size:15,className:"spin"}):E.jsx($_,{size:15}),"Guardar y comprobar API"]})]}),y&&E.jsx("div",{className:"notice",role:"status",children:"Hay cambios sin guardar. Las conversaciones siguen usando la configuración guardada."}),E.jsxs("div",{className:"settings-connection "+(r.status.connected&&S?"ok":""),children:[E.jsx("span",{className:"live-dot"}),S?r.status.connected?"API conectada · "+b.length+" modelos disponibles":"Modelo no conectado":"Dirección pendiente de comprobar",E.jsx("span",{children:S?r.status.error||"La conexión confirma la API, no la inferencia.":"Guarda y comprueba la dirección del borrador."})]}),E.jsxs("p",{className:"muted",children:[i.provider==="ollama"?E.jsxs(E.Fragment,{children:["Ollama es la opción local recomendada por simplicidad; la calidad depende del modelo y de tus recursos. Inícialo en el equipo que ejecuta el servidor y consulta los modelos instalados con ",E.jsx("code",{children:"ollama list"}),"."]}):E.jsx(E.Fragment,{children:"En LM Studio activa el servidor local y carga un modelo. Con llama.cpp habilita su servidor compatible. La gestión de memoria corresponde a ese servidor."})," Si usas Codespaces, esta dirección apunta al Codespace; no a tu computadora. Las claves de APIs comerciales no se solicitan ni se guardan aquí."]}),i.provider==="ollama"&&b.length===0&&E.jsxs("div",{className:"integration-note",children:[E.jsx("h3",{children:"Preparar el primer modelo"}),E.jsxs("p",{children:["En otra terminal del servidor, desde la carpeta del proyecto, ejecuta ",E.jsx("code",{children:"python scripts/setup-model.py --download --test"}),". Prepara Qwen 2.5 de 3B para los agentes sin modelo y comprueba una respuesta real. Los pesos requieren aproximadamente 1,9 GB de descarga. Consulta README si falta Ollama o la red bloquea el registro."]})]}),E.jsx("p",{className:"muted",children:"Compatible con OpenAI describe el formato de la API; no incluye acceso a los modelos GPT de OpenAI. La API no aprende ni mejora automáticamente al conectarla. Las correcciones guardadas mejoran el contexto de futuras conversaciones, sin reentrenar el modelo."}),E.jsxs("label",{children:["Modelo compartido por los seis agentes",E.jsxs("select",{"aria-label":"Modelo compartido",value:"",onChange:L=>{L.target.value&&w({...i,agents:i.agents.map(U=>({...U,model:L.target.value}))})},children:[E.jsx("option",{value:"",children:"Selecciona un modelo disponible"}),b.map(L=>E.jsx("option",{children:L},L))]})]}),E.jsx("div",{className:"agent-settings",children:i.agents.map(L=>E.jsxs("article",{children:[E.jsxs("div",{children:[E.jsx("span",{className:"agent-dot",style:{background:L.color}}),E.jsxs("h3",{children:[L.name,E.jsx("small",{children:L.role})]}),E.jsxs("select",{"aria-label":"Modelo de "+L.name,value:L.model,onChange:U=>w({...i,agents:i.agents.map(B=>B.id===L.id?{...B,model:U.target.value}:B)}),children:[E.jsx("option",{value:"",children:"Sin modelo"}),[...new Set([...b,...L.model?[L.model]:[]])].map(U=>E.jsxs("option",{value:U,children:[U,b.includes(U)?"":" (configurado; comprobar)"]},U))]})]}),E.jsxs("label",{children:["Instrucciones de ",L.name,E.jsx("textarea",{value:L.instructions,maxLength:6e3,onChange:U=>w({...i,agents:i.agents.map(B=>B.id===L.id?{...B,instructions:U.target.value}:B)})})]}),E.jsxs("small",{children:["Herramientas permitidas: ",L.tools.join(", ")]})]},L.id))}),E.jsxs("div",{className:"probe-card",children:[E.jsxs("div",{className:"section-title",children:[E.jsxs("h3",{children:[E.jsx(Ig,{size:17}),"Comprobar una inferencia real"]}),E.jsx("span",{className:"pill",children:"Sin datos de tus archivos"})]}),E.jsx("p",{children:"Guarda la configuración y envía una petición breve al modelo. La respuesta y el tiempo proceden del proveedor; una API desconectada muestra el error."}),E.jsxs("div",{className:"api-config-row",children:[E.jsxs("label",{children:["Agente para la prueba",E.jsx("select",{"aria-label":"Agente para la prueba",value:p,onChange:L=>{m(L.target.value),d(null)},children:i.agents.map(L=>E.jsxs("option",{value:L.id,children:[L.name," · ",L.model||"sin modelo"]},L.id))})]}),E.jsxs("button",{className:"button secondary",disabled:!((I=i.agents.find(L=>L.id===p))!=null&&I.model),onClick:()=>v("probe"),children:[E.jsx(Ig,{size:15}),"Guardar y probar inferencia"]})]}),g&&E.jsxs("div",{className:"probe-result",role:"status",children:[E.jsx("strong",{children:g.verified?"Respuesta recibida del proveedor":"Prueba sin respuesta"}),E.jsx("p",{children:g.response||"Sin contenido"}),E.jsxs("small",{children:[g.model," · ",g.provider," · ",g.latency_ms," ms"]})]})]}),E.jsxs("label",{className:"checkbox",children:[E.jsx("input",{type:"checkbox",checked:r.reduced,onChange:L=>r.onReduced(L.target.checked)}),"Reducir movimiento de los personajes y la cámara"]}),E.jsxs("button",{className:"button primary",onClick:()=>v("save"),children:[E.jsx(Z_,{size:16}),"Guardar configuración"]}),E.jsxs("div",{className:"integration-note",children:[E.jsx("h3",{children:"Diseño creativo · ComfyUI"}),E.jsx("p",{children:"Integración opcional pendiente. El análisis y la oficina funcionan de forma independiente."})]})]})})}async function Dn(r,t,i,s){const l=await fetch("/api"+r,{method:i||(t?"POST":"GET"),headers:t instanceof FormData?{}:{"Content-Type":"application/json"},body:t instanceof FormData?t:t?JSON.stringify(t):void 0,signal:s}),c=await l.json();if(!l.ok)throw Error(typeof c.detail=="string"?c.detail:JSON.stringify(c.detail||c));return c}const W_=[["office","Oficina",eS],["projects","Proyectos",Q_],["tasks","Tareas",Yh],["data","Datos",hS],["deliverables","Entregables",K_],["settings","Configuración",IS]];function P2(){var fn;const[r,t]=Nt.useState("office"),[i,s]=Nt.useState([]),[l,c]=Nt.useState(""),[h,d]=Nt.useState([]),[p,m]=Nt.useState("anto"),[_,x]=Nt.useState(!1),[y,S]=Nt.useState("http://127.0.0.1:11434"),[b,w]=Nt.useState("ollama"),[v,g]=Nt.useState("http://127.0.0.1:1234/v1"),[I,L]=Nt.useState({connected:!1,models:[]}),[U,B]=Nt.useState({}),[H,G]=Nt.useState([]),[q,N]=Nt.useState([]),[R,j]=Nt.useState([]),[at,rt]=Nt.useState(""),[ft,mt]=Nt.useState(null),[F,Q]=Nt.useState([]),[Z,At]=Nt.useState([]),[P,nt]=Nt.useState(""),[St,Rt]=Nt.useState(""),[tt,gt]=Nt.useState(!1),[Mt,Dt]=Nt.useState(!1),[Lt,ue]=Nt.useState(!1),[Zt,pe]=Nt.useState(""),[Oe,se]=Nt.useState(""),[k,ln]=Nt.useState(!0),[ge,ee]=Nt.useState(!0),[Wt,De]=Nt.useState(1),[ht,C]=Nt.useState(0),[T,Y]=Nt.useState(matchMedia("(prefers-reduced-motion: reduce)").matches),[pt,bt]=Nt.useState(""),[z,Ut]=Nt.useState(""),[Ct,kt]=Nt.useState(""),[Kt,wt]=Nt.useState(""),[Ft,Qt]=Nt.useState("sum"),[Xt,Gt]=Nt.useState(!1),[oe,ne]=Nt.useState(""),[Ce,X]=Nt.useState(""),[Ot,dt]=Nt.useState(""),[vt,Ht]=Nt.useState(""),[It,le]=Nt.useState("Unidades"),[Ne,$e]=Nt.useState("bar"),[Ue,Vn]=Nt.useState(""),[mn,gn]=Nt.useState(","),[xn,kn]=Nt.useState("utf-8-sig"),[yi,fa]=Nt.useState([]),[ha,oi]=Nt.useState(null),[Ki,li]=Nt.useState(null),[ci,Jn]=Nt.useState(""),[da,Ui]=Nt.useState({}),tn=Nt.useRef(null),Ni=Nt.useRef(null),pa=Nt.useRef(null),sn=Nt.useRef(0),D=Nt.useRef(0),K=Nt.useRef(!1),ct=Nt.useRef(0),ot=Nt.useRef({project:l,agent:p});ot.current={project:l,agent:p};const $=Nt.useRef(null),xt=h.find(O=>O.id===p),Pt=i.find(O=>O.id===l),Bt=U,jt=I.provider==="openai_local"?"API local":"Ollama";function ie(O){L(O),x(O.connected)}function $t(O){d(O.agents),w(O.provider),S(O.ollama_url),g(O.openai_url)}function Yt(O=!1){var zt,fe;D.current++,(zt=Ni.current)==null||zt.abort(),Ni.current=null;const Tt=K.current;(fe=tn.current)==null||fe.abort(),tn.current=null,K.current=!1,Dt(!1),At(Pe=>Pe.map(Qe=>Qe.status==="streaming"?{...Qe,status:"cancelled",persisted:!1}:Qe)),O&&Tt&&se("Conversación cancelada. La respuesta parcial no se guarda como completada.")}function xe(O,Tt){ot.current.project===O&&ot.current.agent===Tt||(sn.current++,Yt(!0),ot.current={project:O,agent:Tt},At([]),fa([]),oi(null),li(null),Jn(""),ue(!0),c(O),m(Tt))}function be(O){xe(O,ot.current.agent)}function Ke(O){xe(ot.current.project,O)}async function he(O){pe(""),gt(!0);try{await O()}catch(Tt){Tt.name!=="AbortError"&&pe(Tt.message)}finally{gt(!1)}}async function me(O=l){var fe;if(!O)return;const Tt=++ct.current;(fe=pa.current)==null||fe.abort();const zt=new AbortController;pa.current=zt;try{const[Pe,Qe,Tn]=await Promise.all([Dn("/runs?project="+O,void 0,void 0,zt.signal),Dn("/files?project="+O,void 0,void 0,zt.signal),Dn("/artifacts?project="+O,void 0,void 0,zt.signal)]),Ms=await Promise.all(Pe.map(ro=>Dn("/runs/"+ro.id,void 0,void 0,zt.signal)));if(zt.signal.aborted||Tt!==ct.current||ot.current.project!==O)return;N(Ms),j(Qe),Q(Tn)}catch(Pe){if(Pe.name!=="AbortError")throw Pe}}async function te(){const O=await Dn("/models");ie(O)}Nt.useEffect(()=>{let O=!0;return gt(!0),(async()=>{var Tt;try{const[zt,fe]=await Promise.all([Dn("/projects"),Dn("/settings")]);if(!O)return;s(zt),$t(fe),be(((Tt=zt[0])==null?void 0:Tt.id)||""),await te()}catch(zt){O&&pe(zt.message)}finally{O&&gt(!1)}})(),()=>{O=!1}},[]),Nt.useEffect(()=>{if(!l)return;let O=!0;rt(""),mt(null),G([]),B({}),Ui({}),Ut(""),he(()=>me(l));const Tt=new EventSource("/api/events?project="+l);Tt.onmessage=fe=>{if(!(!O||ot.current.project!==l))try{const Pe=JSON.parse(fe.data),Qe=JSON.parse(Pe.payload);Pe.agent&&(Qe.agent_status||Qe.status)&&B(Tn=>({...Tn,[Pe.agent]:Qe.agent_status||Qe.status})),Pe.kind==="task"&&Pe.run&&Qe.logical_id&&Qe.status&&Ui(Tn=>({...Tn,[Pe.run+":"+Qe.logical_id]:Qe.status})),G(Tn=>[...Tn,Pe].slice(-100)),["run","file","plan"].includes(Pe.kind)&&me(l).catch(Tn=>{O&&pe(Tn.message)})}catch{pe("No se pudo interpretar un evento del servidor.")}};const zt=setInterval(()=>te().catch(()=>x(!1)),15e3);return()=>{var fe;O=!1,Tt.close(),clearInterval(zt),(fe=pa.current)==null||fe.abort()}},[l]),Nt.useEffect(()=>{var fe;if(!l)return;const O=sn.current,Tt=new AbortController;(fe=Ni.current)==null||fe.abort(),Ni.current=Tt,ue(!0);const zt="?project="+encodeURIComponent(l)+"&agent="+encodeURIComponent(p);return Promise.all([Dn("/messages"+zt,void 0,void 0,Tt.signal),Dn("/feedback"+zt,void 0,void 0,Tt.signal)]).then(([Pe,Qe])=>{Tt.signal.aborted||O!==sn.current||K.current||(At(Pe.map(Tn=>({...Tn,key:Tn.id,persisted:!0,status:"complete"}))),fa(Qe))}).catch(Pe=>{Pe.name!=="AbortError"&&O===sn.current&&pe(Pe.message)}).finally(()=>{!Tt.signal.aborted&&O===sn.current&&ue(!1)}),()=>Tt.abort()},[l,p]),Nt.useEffect(()=>{var O;(O=$.current)==null||O.scrollIntoView({behavior:T?"instant":"smooth",block:"nearest"})},[Z]),Nt.useEffect(()=>()=>{var O,Tt,zt;(O=tn.current)==null||O.abort(),(Tt=Ni.current)==null||Tt.abort(),(zt=pa.current)==null||zt.abort()},[]);async function rn(O){const Tt=ot.current.project,zt=await Dn("/files/"+O+"/preview");ot.current.project===Tt&&(rt(O),mt(zt),Vn(zt.sheets[0]||""),kt(""),wt(""))}async function we(O){const Tt=l;await he(async()=>{const zt=new FormData;zt.append("project",Tt),zt.append("file",O);const fe=await Dn("/files",zt);ot.current.project===Tt&&(await me(Tt),await rn(fe.id),t("data"),se("Archivo original conservado. Revisa hoja, columnas y valores faltantes."))})}async function yn(O=P){var ma;if(!O.trim()||K.current||Lt||!l)return;(ma=Ni.current)==null||ma.abort(),nt(""),pe(""),Dt(!0),K.current=!0;const Tt=++D.current,zt=sn.current,fe=()=>Tt===D.current&&zt===sn.current,Pe=crypto.randomUUID(),Qe=crypto.randomUUID(),Tn=new AbortController;tn.current=Tn;const Ms=h.find(Sn=>Sn.id===p),ro={project:l,agent:p,content:O,run:z||null};At(Sn=>[...Sn,{id:Pe,key:Pe,role:"user",content:O,status:"complete"},{id:Qe,key:Qe,role:"assistant",content:"",model:Ms==null?void 0:Ms.model,provider:b,status:"streaming",persisted:!1}]);function Ha(Sn){fe()&&At(Qi=>Qi.map(Pi=>Pi.key===Qe?Sn(Pi):Pi))}let ir=!1,ar=!1;try{const Sn=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ro),signal:Tn.signal});if(!Sn.ok){const ga=await Sn.json();throw Error(ga.detail||"No se pudo iniciar la conversación")}if(!Sn.body)throw Error("El servidor no abrió el flujo de respuesta.");const Qi=Sn.body.getReader(),Pi=new TextDecoder;let Ga="";for(;;){const{done:ga,value:zi}=await Qi.read();if(ga)break;if(!fe()){await Qi.cancel();return}Ga+=Pi.decode(zi,{stream:!0});let Es;for(;(Es=Ga.indexOf(`

`))>=0;){const Va=Ga.slice(0,Es);if(Ga=Ga.slice(Es+2),!Va.startsWith("data: "))continue;const An=JSON.parse(Va.slice(6));if(An.error)throw Error(An.error);if(typeof An.token=="string"&&An.token&&(ar=!0,Ha(Ii=>({...Ii,content:Ii.content+An.token}))),An.done){if(!ar)throw Error("El proveedor terminó sin texto.");ir=!0,Ha(Ii=>({...Ii,id:An.message_id||Ii.id,persisted:!!An.message_id,status:"complete",model:An.model||Ii.model,provider:An.provider||Ii.provider}))}}}if(!ir)throw Error("La conexión terminó antes de confirmar la respuesta. El texto parcial no está guardado como respuesta completa.")}catch(Sn){if(fe()){const Qi=Sn.name==="AbortError";Ha(Pi=>({...Pi,status:Qi?"cancelled":"error",persisted:!1})),Qi?se("Conversación cancelada. La respuesta parcial no se guarda como completada."):pe(Sn.message)}}finally{fe()&&(Dt(!1),K.current=!1,tn.current=null)}}async function Li(O,Tt){if(!O.persisted||O.status!=="complete")return;const zt=sn.current;oi(O.id),pe("");try{const fe=await Dn("/feedback",{message_id:O.id,rating:Tt,...Tt==="correction"?{correction:ci.trim()}:{}});if(zt!==sn.current)return;fa(Pe=>[fe,...Pe.filter(Qe=>Qe.message_id!==O.id)]),li(null),Jn(""),se(Tt==="correction"?"Corrección guardada para futuras conversaciones de este agente. Mejora contexto, no reentrena el modelo.":"Valoración guardada.")}catch(fe){zt===sn.current&&pe(fe.message)}finally{zt===sn.current&&oi(null)}}async function je(O){const Tt=sn.current;oi(O.message_id);try{if(await Dn("/feedback/"+O.id,void 0,"DELETE"),Tt!==sn.current)return;fa(zt=>zt.filter(fe=>fe.id!==O.id)),se("Corrección eliminada de la memoria de este agente.")}catch(zt){Tt===sn.current&&pe(zt.message)}finally{Tt===sn.current&&oi(null)}}function Oi(O,Tt){var fe,Pe;const zt=(Pe=(fe=O.tasks)==null?void 0:fe.find(Qe=>{try{return JSON.parse(Qe.payload).id===Tt}catch{return!1}}))==null?void 0:Pe.status;return zt&&["Completado","Fallido","Cancelado","Interrumpido"].includes(zt)?zt:da[O.id+":"+Tt]||zt||"Estado no disponible"}async function Ge(O=!1){const Tt=l;await he(async()=>{let zt={project:Tt,request:St||"Analizar las operaciones seleccionadas",file:at||null};O&&(zt.analysis={metric:Xt?"ingresos":Ct,group_by:Kt?[Kt]:[],aggregation:Ft,derived:Xt?{name:"ingresos",left:oe,right:Ce,op:"multiply"}:null,filters:Ot?[{column:Ot,op:"eq",value:vt}]:[],sort:"descending",chart:Ne,title:St||"Análisis de datos",unit:It});const fe=await Dn(O?"/tools/plan":"/plans",zt);ot.current.project===Tt&&(Ut(fe.id),await me(Tt),t("tasks"),se("Plan preparado. Revisa los argumentos antes de aprobar."))})}const un=E.jsxs(E.Fragment,{children:[E.jsx("option",{value:"",children:"Seleccionar columna"}),ft==null?void 0:ft.columns.map(O=>E.jsx("option",{children:O.name},O.name))]});return E.jsxs("div",{className:"app",children:[E.jsxs("aside",{className:"sidebar",children:[E.jsx("a",{className:"brandmark",href:"#",onClick:()=>t("office"),"aria-label":"Oficina",children:E.jsx(ph,{size:27})}),E.jsx("div",{className:"nav-items",children:W_.map(([O,Tt,zt])=>E.jsxs("button",{title:Tt,className:r===O?"nav active":"nav",onClick:()=>t(O),children:[E.jsx(zt,{size:21}),E.jsx("span",{children:Tt})]},O))}),E.jsx("button",{className:"sidebar-bottom",onClick:()=>t("settings"),title:"Configuración",children:"AN"})]}),E.jsxs("div",{className:"workspace",children:[E.jsxs("header",{className:"topbar",children:[E.jsxs("div",{className:"wordmark",children:["STUDIO ",E.jsx("span",{children:"DE"})," ANTO",E.jsx("small",{children:"UN ESPACIO PARA CREAR EN EQUIPO"})]}),E.jsx("div",{className:"header-divider"}),E.jsx("select",{className:"project-select",value:l,onChange:O=>be(O.target.value),"aria-label":"Proyecto activo",children:i.map(O=>E.jsx("option",{value:O.id,children:O.name},O.id))}),E.jsx("span",{className:"local-tag",children:"ESTUDIO"}),E.jsxs("div",{className:"top-right",children:[E.jsxs("button",{className:"connection "+(_?"online":""),onClick:()=>t("settings"),children:[E.jsx("i",{}),_?jt+" · API conectada":"Modelo no conectado"]}),E.jsx("span",{className:"avatar small",children:"AN"})]})]}),E.jsxs("main",{children:[Zt&&E.jsxs("div",{role:"alert",className:"alert",children:[E.jsx(XS,{size:17}),E.jsx("span",{children:Zt}),E.jsx("button",{onClick:()=>pe(""),"aria-label":"Cerrar error",children:E.jsx(gh,{size:16})})]}),Oe&&E.jsxs("div",{role:"status",className:"notice",children:[E.jsx(uS,{size:16}),Oe,E.jsx("button",{onClick:()=>se(""),"aria-label":"Cerrar aviso",children:E.jsx(gh,{size:15})})]}),E.jsxs("div",{className:"page-heading",children:[E.jsxs("div",{children:[E.jsx("div",{className:"eyebrow",children:"TU EQUIPO, EN UN MISMO LUGAR"}),E.jsxs("h1",{children:[(fn=W_.find(O=>O[0]===r))==null?void 0:fn[1],E.jsx("span",{className:"heading-dot"})]}),E.jsx("p",{children:r==="office"?"Las buenas ideas se construyen juntos. Dale vida a la próxima.":r==="data"?"De los archivos a la evidencia. Tú eliges qué calcular.":r==="tasks"?"Un objetivo compartido, pasos claros y resultados verificables.":r==="settings"?"Tus modelos, tus datos y tu equipo en el entorno que elijas.":r==="projects"?"Un espacio propio para cada idea.":"El trabajo de tu equipo, listo para llevar."})]}),E.jsxs("div",{className:"heading-actions",children:[E.jsxs("button",{className:"button secondary",onClick:()=>{ee(!ge),t("office")},children:[E.jsx(Pg,{size:16}),"Actividad"]}),E.jsxs("button",{className:"button primary",onClick:()=>t("projects"),children:[E.jsx(bc,{size:17}),"Nuevo proyecto"]})]})]}),r==="office"&&E.jsxs("div",{className:"office-layout "+(k?"":"no-panel"),children:[E.jsxs("section",{className:"office-card",children:[E.jsxs("div",{className:"office-bar",children:[E.jsxs("div",{children:[E.jsx("span",{className:"live-dot"}),"EL ESTUDIO ",E.jsx("span",{className:"subtle",children:"/"}),E.jsx("span",{className:"office-name",children:Pt==null?void 0:Pt.name})]}),E.jsxs("span",{className:"office-badge",children:["6 agentes · ",Object.values(Bt).filter(O=>O==="En ejecución").length," trabajando"]}),E.jsx("button",{className:"icon-button",onClick:()=>ln(!k),title:"Mostrar u ocultar conversación",children:E.jsx(wS,{size:18})})]}),E.jsxs("div",{className:"scene-wrap",children:[h.length===6&&E.jsx(L2,{agents:h,selected:p,onSelect:O=>{Ke(O),ln(!0)},states:Bt,reduced:T,zoom:Wt,reset:ht}),E.jsxs("div",{className:"scene-caption",children:[E.jsx("span",{className:"scene-caption-icon",children:E.jsx(mh,{size:16})}),E.jsxs("div",{children:["Espacio para grandes ideas",E.jsx("small",{children:"Selecciona un agente para empezar a colaborar"})]})]}),E.jsxs("div",{className:"scene-controls",children:[E.jsx("button",{title:"Alejar",onClick:()=>De(Math.max(.6,Wt-.1)),children:E.jsx(Bg,{size:15})}),E.jsxs("span",{children:[Math.round(Wt*100),"%"]}),E.jsx("button",{title:"Acercar",onClick:()=>De(Math.min(1.8,Wt+.1)),children:E.jsx(bc,{size:15})}),E.jsx("b",{}),E.jsx("button",{title:"Restablecer vista",onClick:()=>{De(1),C(ht+1)},children:E.jsx(bS,{size:15})})]}),E.jsxs("div",{className:"pan-help",children:[E.jsx(RS,{size:13}),"Arrastra para girar · clic en suelo para mover · rueda para zoom"]})]}),E.jsxs("div",{className:"team-strip",children:[E.jsxs("div",{className:"team-label",children:["EN EL ESTUDIO",E.jsx("small",{children:"Tu equipo de agentes"})]}),h.map(O=>E.jsxs("button",{className:"team-person "+(p===O.id?"chosen":""),onClick:()=>{Ke(O.id),ln(!0)},children:[E.jsxs("span",{className:"agent-avatar",style:{background:O.color+"35",color:O.color},children:[E.jsx("span",{className:"mini-head"}),E.jsx("span",{className:"mini-body"})]}),E.jsxs("span",{children:[E.jsx("strong",{children:O.name}),E.jsx("small",{children:O.role})]}),E.jsx("i",{className:Bt[O.id]==="En ejecución"?"working":""})]},O.id))]})]}),k&&E.jsxs("aside",{className:"chat-panel",children:[E.jsxs("div",{className:"panel-title",children:[E.jsx("span",{children:"Conversa con tu equipo"}),E.jsx("button",{onClick:()=>ln(!1),title:"Cerrar conversación",children:E.jsx(gh,{size:17})})]}),E.jsxs("div",{className:"agent-intro",children:[E.jsxs("span",{className:"agent-avatar large",style:{background:((xt==null?void 0:xt.color)||"#aaa")+"30",color:xt==null?void 0:xt.color},children:[E.jsx("span",{className:"mini-head"}),E.jsx("span",{className:"mini-body"})]}),E.jsxs("div",{children:[E.jsxs("h3",{children:[xt==null?void 0:xt.name,E.jsx("span",{className:"role-badge",children:xt==null?void 0:xt.role})]}),E.jsxs("p",{children:[E.jsx("i",{className:"live-dot"}),Bt[p]||"Disponible"]})]})]}),E.jsxs("div",{className:"model-line",children:[E.jsx(ph,{size:13}),(xt==null?void 0:xt.model)||"Sin modelo asignado",E.jsxs("button",{onClick:()=>t("settings"),children:["Configurar",E.jsx(tl,{size:12})]})]}),E.jsxs("div",{className:"chat-body",children:[!Z.length&&E.jsxs("div",{className:"chat-empty",children:[E.jsx("span",{className:"empty-spark",children:E.jsx(mh,{size:27})}),E.jsx("h3",{children:"¿Qué construimos hoy?"}),E.jsxs("p",{children:["Cuéntame tu idea o comparte un archivo.",E.jsx("br",{}),"Daremos el siguiente paso juntos."]}),E.jsx("div",{className:"truth-tag",children:_&&(xt!=null&&xt.model)?"Conversación mediante API local":"Conecta un modelo para conversar"}),E.jsxs("button",{className:"suggestion",onClick:()=>nt("Ayúdame a organizar un nuevo proyecto"),children:["Organizar una idea",E.jsx(tl,{size:14})]}),E.jsxs("button",{className:"suggestion",onClick:()=>t("data"),children:["Explorar mis datos",E.jsx(tl,{size:14})]})]}),Lt&&E.jsx("p",{className:"quiet",role:"status",children:"Cargando historial…"}),Z.map(O=>{const Tt=yi.find(zt=>zt.message_id===O.id);return E.jsxs("div",{className:"message "+O.role,children:[E.jsxs("small",{children:[O.role==="user"?"TÚ":xt==null?void 0:xt.name,O.model?" · "+O.model:"",O.provider?" · "+O.provider:""]}),E.jsx("p",{children:O.content||(O.status==="streaming"?"Esperando al modelo…":"Sin respuesta recibida")}),O.status==="cancelled"&&E.jsx("small",{children:"Respuesta parcial cancelada · sin guardar"}),O.status==="error"&&E.jsx("small",{children:"Respuesta incompleta o fallida · sin guardar"}),O.role==="assistant"&&O.persisted&&O.status==="complete"&&E.jsxs("div",{className:"feedback-toolbar",children:[E.jsx("button",{className:"button secondary","aria-pressed":(Tt==null?void 0:Tt.rating)==="useful",disabled:ha===O.id,onClick:()=>Li(O,"useful"),children:"Útil"}),E.jsx("button",{className:"button secondary",disabled:ha===O.id,onClick:()=>{li(O.id),Jn((Tt==null?void 0:Tt.correction)||"")},children:"Guardar corrección"}),(Tt==null?void 0:Tt.rating)==="correction"&&E.jsx("small",{children:"Corrección guardada"})]}),Ki===O.id&&O.persisted&&E.jsxs("form",{className:"feedback-form",onSubmit:zt=>{zt.preventDefault(),Li(O,"correction")},children:[E.jsxs("label",{children:["Corrección para la respuesta",E.jsx("textarea",{"aria-label":"Corrección para la respuesta",value:ci,onChange:zt=>Jn(zt.target.value),minLength:3,maxLength:2e3,required:!0,placeholder:"Escribe la información correcta que debe recordar este agente…"})]}),E.jsx("p",{children:"Se usará como contexto del mismo proyecto y agente. No reentrena el modelo."}),E.jsxs("div",{children:[E.jsx("button",{className:"button primary",disabled:ha===O.id||ci.trim().length<3,children:"Confirmar corrección"}),E.jsx("button",{className:"button secondary",type:"button",onClick:()=>li(null),children:"Cancelar"})]})]})]},O.key||O.id)}),E.jsxs("details",{className:"feedback-memory",children:[E.jsxs("summary",{children:["Correcciones guardadas (",yi.filter(O=>O.rating==="correction").length,")"]}),E.jsx("p",{children:"Mejora contexto, no reentrena el modelo. Puedes revisar y eliminar cada corrección."}),yi.filter(O=>O.rating==="correction").map(O=>E.jsxs("div",{className:"feedback-entry",children:[E.jsx("p",{children:O.correction}),E.jsx("button",{className:"button secondary",disabled:ha===O.message_id,onClick:()=>je(O),children:"Eliminar corrección"})]},O.id)),!yi.some(O=>O.rating==="correction")&&E.jsx("p",{children:"Aún no hay correcciones guardadas para este agente y proyecto."})]}),E.jsx("div",{ref:$})]}),E.jsxs("div",{className:"chat-compose",children:[q.length>0&&E.jsxs("select",{value:z,onChange:O=>Ut(O.target.value),"aria-label":"Contexto de ejecución",children:[E.jsx("option",{value:"",children:"Sin contexto de ejecución"}),q.map(O=>E.jsx("option",{value:O.id,children:O.request.slice(0,40)},O.id))]}),E.jsx("textarea",{value:P,onChange:O=>nt(O.target.value),placeholder:"Escribe a "+(xt==null?void 0:xt.name)+"…","aria-label":"Mensaje",onKeyDown:O=>{O.key==="Enter"&&!O.shiftKey&&(O.preventDefault(),yn())}}),E.jsxs("div",{className:"compose-tools",children:[E.jsxs("label",{title:"Subir CSV o Excel",children:[E.jsx(bc,{size:18}),E.jsx("input",{type:"file",accept:".csv,.xlsx",onChange:O=>{var Tt;return((Tt=O.target.files)==null?void 0:Tt[0])&&we(O.target.files[0])}})]}),E.jsx("span",{children:"Tu espacio. Tus ideas."}),Mt?E.jsx("button",{className:"send",title:"Cancelar conversación",onClick:()=>Yt(!0),children:E.jsx(Fg,{size:14})}):E.jsx("button",{className:"send",title:"Enviar",disabled:!P.trim()||Lt,onClick:()=>yn(),children:E.jsx(aS,{size:18})})]}),E.jsxs("button",{className:"retry",onClick:()=>{const O=[...Z].reverse().find(Tt=>Tt.role==="user");O&&yn(O.content)},disabled:Mt||Lt||!Z.some(O=>O.role==="user"),children:[E.jsx($_,{size:11}),"Reintentar último mensaje"]})]}),E.jsxs("div",{className:"privacy",children:[E.jsx(SS,{size:12}),"Inferencia local. Sin APIs de pago."]})]}),ge&&E.jsxs("section",{className:"activity-panel",children:[E.jsxs("div",{className:"activity-title",children:[E.jsx(Pg,{size:15}),E.jsx("strong",{children:"Actividad del equipo"}),E.jsx("span",{children:"EN VIVO"}),E.jsx("button",{onClick:()=>ee(!1),title:"Ocultar actividad",children:E.jsx(Bg,{size:16})})]}),E.jsx("div",{className:"activity-entries",children:H.length?H.slice(-4).reverse().map(O=>{var zt;const Tt=JSON.parse(O.payload);return E.jsxs("div",{children:[E.jsx("span",{className:"event-dot"}),E.jsx("time",{children:new Date(O.created).toLocaleTimeString("es-PE",{hour:"2-digit",minute:"2-digit"})}),E.jsx("strong",{children:((zt=O.agent)==null?void 0:zt.toUpperCase())||"ESTUDIO"}),E.jsxs("span",{children:[Tt.task||Tt.objective||Tt.name||Tt.message||"Conversación",Tt.status?" · "+Tt.status:""]})]},O.seq)}):E.jsx("p",{className:"quiet",children:"Aquí aparecerán las tareas y resultados reales de tu equipo."})})]})]}),r==="projects"&&E.jsxs("section",{className:"content-card",children:[E.jsxs("div",{className:"section-title",children:[E.jsx("h2",{children:"Tus proyectos"}),E.jsx(Q_,{size:20})]}),E.jsxs("form",{className:"new-project",onSubmit:O=>{O.preventDefault(),he(async()=>{const Tt=await Dn("/projects",{name:pt});s([...i,Tt]),be(Tt.id),bt(""),t("office")})},children:[E.jsx("input",{placeholder:"Nombre de tu próximo proyecto",value:pt,onChange:O=>bt(O.target.value),maxLength:120,required:!0}),E.jsxs("button",{className:"button primary",disabled:tt,children:[E.jsx(bc,{size:16}),"Crear proyecto"]})]}),E.jsx("div",{className:"project-grid",children:i.map(O=>E.jsxs("button",{className:"project-card "+(O.id===l?"current":""),onClick:()=>{be(O.id),t("office")},children:[E.jsx("span",{className:"project-art",children:E.jsx(ph,{size:42})}),E.jsx("h3",{children:O.name}),E.jsx("p",{children:O.id===l?"Proyecto activo":"Abrir espacio de trabajo"}),E.jsx(tl,{size:19})]},O.id))})]}),r==="data"&&E.jsxs("div",{className:"data-layout",children:[E.jsxs("section",{className:"content-card",children:[E.jsxs("div",{className:"section-title",children:[E.jsx("h2",{children:"Biblioteca de datos"}),E.jsx("span",{children:"CSV · XLSX · hasta 20 MB"})]}),E.jsxs("label",{className:"dropzone",children:[E.jsx(kS,{size:26}),E.jsx("strong",{children:"Trae tus datos al estudio"}),E.jsx("span",{children:"Selecciona un archivo CSV o Excel"}),E.jsx("input",{type:"file",accept:".csv,.xlsx",disabled:tt,onChange:O=>{var Tt;return((Tt=O.target.files)==null?void 0:Tt[0])&&we(O.target.files[0])}})]}),E.jsx("div",{className:"file-list",children:R.map(O=>E.jsxs("button",{className:at===O.id?"selected":"",onClick:()=>he(()=>rn(O.id)),children:[E.jsx(zg,{size:18}),O.name,E.jsx(lS,{size:16})]},O.id))}),at&&E.jsxs("div",{className:"import-options",children:[ft!=null&&ft.sheets.length?E.jsxs("label",{children:["Hoja",E.jsx("select",{value:Ue,onChange:O=>Vn(O.target.value),children:ft.sheets.map(O=>E.jsx("option",{children:O},O))})]}):E.jsxs(E.Fragment,{children:[E.jsxs("label",{children:["Separador",E.jsxs("select",{value:mn,onChange:O=>gn(O.target.value),children:[E.jsx("option",{value:",",children:"Coma"}),E.jsx("option",{value:";",children:"Punto y coma"}),E.jsx("option",{value:"	",children:"Tabulación"}),E.jsx("option",{value:"|",children:"Barra"})]})]}),E.jsxs("label",{children:["Codificación",E.jsx("select",{value:xn,onChange:O=>kn(O.target.value),children:["utf-8-sig","utf-8","latin-1","cp1252"].map(O=>E.jsx("option",{children:O},O))})]})]}),E.jsx("button",{className:"button secondary",onClick:()=>he(async()=>{const O=await Dn("/files/"+at+"/options",{sheet:Ue||null,separator:mn,encoding:xn},"PUT");mt({...O,sheets:(ft==null?void 0:ft.sheets)||[]})}),children:"Aplicar lectura"})]}),ft&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"data-stats",children:[E.jsxs("span",{children:[E.jsx("strong",{children:ft.rows}),"filas"]}),E.jsxs("span",{children:[E.jsx("strong",{children:ft.columns.length}),"columnas"]}),E.jsxs("span",{children:[E.jsx("strong",{children:ft.duplicates}),"duplicados conservados"]}),E.jsxs("span",{children:[E.jsx("strong",{children:ft.columns.reduce((O,Tt)=>O+Tt.missing,0)}),"valores faltantes"]})]}),E.jsx("div",{className:"table-scroll",children:E.jsxs("table",{children:[E.jsx("thead",{children:E.jsx("tr",{children:ft.columns.map(O=>E.jsxs("th",{children:[O.name,E.jsxs("small",{children:[O.type," · ",O.missing," faltantes"]})]},O.name))})}),E.jsx("tbody",{children:ft.preview.map((O,Tt)=>E.jsx("tr",{children:ft.columns.map(zt=>E.jsx("td",{children:O[zt.name]===null?E.jsx("em",{children:"Vacío"}):String(O[zt.name])},zt.name))},Tt))})]})}),E.jsx("p",{className:"caption",children:"Vista previa de hasta 12 filas. El original permanece intacto."})]})]}),E.jsxs("section",{className:"content-card tool-card",children:[E.jsx("div",{className:"eyebrow",children:"SIN MODELO NECESARIO"}),E.jsx("h2",{children:"Modo herramientas"}),E.jsx("p",{className:"muted",children:"Operaciones explícitas, números calculados por Python y revisión independiente."}),E.jsxs("label",{children:["Objetivo",E.jsx("textarea",{value:St,onChange:O=>Rt(O.target.value),placeholder:"¿Qué quieres analizar?"})]}),E.jsxs("label",{children:["Agrupar por",E.jsx("select",{"aria-label":"Agrupar por",value:Kt,onChange:O=>wt(O.target.value),children:un})]}),E.jsxs("label",{className:"checkbox",children:[E.jsx("input",{type:"checkbox",checked:Xt,onChange:O=>Gt(O.target.checked)}),"Calcular ingresos = cantidad × precio"]}),Xt?E.jsxs("div",{className:"two-col",children:[E.jsxs("label",{children:["Cantidad",E.jsx("select",{"aria-label":"Cantidad",value:oe,onChange:O=>ne(O.target.value),children:un})]}),E.jsxs("label",{children:["Precio",E.jsx("select",{"aria-label":"Precio",value:Ce,onChange:O=>X(O.target.value),children:un})]})]}):E.jsxs("label",{children:["Métrica",E.jsx("select",{"aria-label":"Métrica",value:Ct,onChange:O=>kt(O.target.value),children:un})]}),E.jsxs("div",{className:"two-col",children:[E.jsxs("label",{children:["Operación",E.jsx("select",{value:Ft,onChange:O=>Qt(O.target.value),children:[["sum","Suma"],["mean","Media"],["median","Mediana"],["min","Mínimo"],["max","Máximo"],["count","Conteo"]].map(([O,Tt])=>E.jsx("option",{value:O,children:Tt},O))})]}),E.jsxs("label",{children:["Unidad",E.jsx("input",{value:It,onChange:O=>le(O.target.value)})]})]}),E.jsxs("label",{children:["Filtro opcional · columna",E.jsx("select",{value:Ot,onChange:O=>dt(O.target.value),children:un})]}),Ot&&E.jsxs("label",{children:["Igual a",E.jsx("input",{value:vt,onChange:O=>Ht(O.target.value)})]}),E.jsxs("label",{children:["Gráfico",E.jsxs("select",{value:Ne,onChange:O=>$e(O.target.value),children:[E.jsx("option",{value:"bar",children:"Barras"}),E.jsx("option",{value:"line",children:"Líneas (confirma orden temporal)"}),E.jsx("option",{value:"none",children:"Sin gráfico"})]})]}),E.jsxs("button",{className:"button primary full",disabled:tt||!at||!Xt&&!Ct||Xt&&(!oe||!Ce),onClick:()=>Ge(!0),children:[E.jsx(US,{size:15}),"Preparar plan de cálculo"]}),E.jsx("p",{className:"caption",children:"No es inferencia de IA. Revisa definición, filtros y unidades antes de aprobar."})]})]}),r==="tasks"&&E.jsxs("div",{className:"tasks-layout",children:[E.jsxs("section",{className:"content-card",children:[E.jsxs("div",{className:"section-title",children:[E.jsx("h2",{children:"Un nuevo objetivo"}),E.jsx("span",{className:"pill",children:"ATLAS · Coordinación"})]}),E.jsx("textarea",{className:"goal-input",placeholder:"Compara ingresos por producto y región, identifica faltantes y prepara un informe…",value:St,onChange:O=>Rt(O.target.value)}),E.jsxs("div",{className:"plan-bottom",children:[E.jsxs("select",{value:at,onChange:O=>rt(O.target.value),children:[E.jsx("option",{value:"",children:"Sin archivo · organizar proyecto"}),R.map(O=>E.jsx("option",{value:O.id,children:O.name},O.id))]}),E.jsxs("button",{className:"button primary",disabled:tt||St.length<3,onClick:()=>Ge(),children:[tt?E.jsx(J_,{className:"spin",size:16}):E.jsx(mh,{size:16}),"Proponer plan con API"]})]}),E.jsx("p",{className:"caption",children:"El plan usa el modelo asignado a ATLAS. Sin conexión, puedes usar los controles de Datos."})]}),E.jsxs("section",{className:"content-card",children:[E.jsx("h2",{children:"Planes y ejecuciones"}),!q.length&&E.jsxs("div",{className:"empty-state",children:[E.jsx(Yh,{size:35}),E.jsx("h3",{children:"Tu próximo objetivo empieza aquí"}),E.jsx("p",{children:"Describe una tarea o prepara un cálculo desde Datos."})]}),q.map(O=>{const Tt=JSON.parse(O.plan);return E.jsxs("article",{className:"run-card",children:[E.jsxs("div",{className:"run-head",children:[E.jsx("h3",{children:O.request}),E.jsx("span",{className:"status "+(O.status==="Completado"?"success":""),children:O.status})]}),E.jsxs("small",{children:["Ejecución ",O.id.slice(0,10)," · ",Tt.mode==="tools"?"Modo herramientas · sin inferencia":"Plan propuesto mediante API"]}),Tt.clarification&&E.jsxs("p",{className:"clarification",children:["Se necesita aclaración: ",Tt.clarification]}),E.jsx("div",{className:"task-chain",children:Tt.tasks.map(zt=>{var fe;return E.jsxs("div",{children:[E.jsx("span",{className:"task-agent",style:{background:((fe=h.find(Pe=>Pe.id===zt.agent))==null?void 0:fe.color)+"30"},children:zt.agent.toUpperCase()}),E.jsxs("p",{children:[zt.description,E.jsx("small",{children:zt.depends_on.length?"Después de "+zt.depends_on.join(", "):"Sin dependencias"}),E.jsx("span",{className:"task-current-status",children:Oi(O,zt.id)})]})]},zt.id)})}),Tt.analysis&&E.jsxs("details",{children:[E.jsx("summary",{children:"Operaciones y criterios aprobables"}),E.jsx("pre",{children:JSON.stringify(Tt,null,2)})]}),E.jsxs("div",{className:"run-actions",children:[O.status==="Espera aprobación"&&E.jsxs("button",{className:"button primary",disabled:tt,onClick:()=>he(async()=>{await Dn("/runs/"+O.id+"/approve",{}),await me()}),children:[E.jsx(Z_,{size:15}),"Aprobar y ejecutar"]}),!["Completado","Fallido","Cancelado","Interrumpido"].includes(O.status)&&E.jsxs("button",{className:"button secondary",onClick:()=>he(async()=>{await Dn("/runs/"+O.id+"/cancel",{}),await me()}),children:[E.jsx(Fg,{size:14}),"Cancelar"]}),E.jsx("button",{className:"button secondary",onClick:()=>{Ut(O.id),Ke("bruno"),t("office"),ln(!0)},children:"Consultar a BRUNO"}),E.jsx("button",{className:"button secondary",disabled:tt||!St,onClick:()=>he(async()=>{await Dn("/runs/"+O.id+"/correction",{name:St.slice(0,120)}),await me()}),children:"Solicitar corrección"})]}),O.result&&E.jsxs("div",{className:"result-summary "+(O.status==="Completado"?"":"provisional"),children:[O.status!=="Completado"&&E.jsxs("p",{children:[E.jsxs("strong",{children:["Resultado provisional · ejecución ",O.status.toLowerCase(),"."]})," Las cifras conservadas no constituyen un entregable aprobado."]}),"Estadístico: ",E.jsx("strong",{children:JSON.parse(O.result).total})," · ",JSON.parse(O.result).rows_after," filas analizadas"]})]},O.id)})]})]}),r==="deliverables"&&E.jsxs("section",{className:"content-card",children:[E.jsxs("div",{className:"section-title",children:[E.jsx("h2",{children:"Resultados con evidencia"}),E.jsxs("span",{children:[F.length," archivos generados"]})]}),F.length?E.jsx("div",{className:"artifact-grid",children:F.map(O=>E.jsxs("a",{className:"artifact",href:"/api/artifacts/"+O.id,download:!0,children:[E.jsx("span",{className:"artifact-icon",children:O.name.endsWith(".png")?E.jsx(Yh,{}):E.jsx(zg,{})}),E.jsxs("div",{children:[E.jsx("strong",{children:O.name}),E.jsxs("small",{children:["Ejecución ",O.run.slice(0,10)," · versión 1"]})]}),E.jsx(pS,{size:17})]},O.id))}):E.jsxs("div",{className:"empty-state",children:[E.jsx(K_,{size:40}),E.jsx("h3",{children:"Tus entregables tendrán su lugar aquí"}),E.jsx("p",{children:"Ejecuta y verifica un análisis para generar tablas, gráficos e informes."}),E.jsxs("button",{className:"button secondary",onClick:()=>t("data"),children:["Ir a Datos",E.jsx(tl,{size:15})]})]})]}),r==="settings"&&E.jsx(O2,{agents:h,provider:b,ollama:y,openai:v,onSaved:$t,status:I,onStatus:ie,reduced:T,onReduced:Y,onNotice:se,onError:pe})]}),E.jsxs("footer",{className:"app-footer",children:[E.jsxs("span",{children:[E.jsx("span",{className:"live-dot"}),"Tu estudio · datos en el servidor"]}),E.jsxs("span",{children:["Hecho para pensar, crear y colaborar.",E.jsx("span",{className:"footer-star",children:"✧"})]}),E.jsxs("span",{children:["STUDIO DE ANTO ",E.jsx("span",{className:"version",children:"v1.1 · 3D"})]})]})]})]})}Wy.createRoot(document.getElementById("root")).render(E.jsx(Hy.StrictMode,{children:E.jsx(P2,{})}));
