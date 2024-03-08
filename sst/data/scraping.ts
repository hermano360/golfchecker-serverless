export const SCRAPE_TEXT = ` <!DOCTYPE html><html lang="en" data-ng-app="ezLinks" data-ng-controller="generalController as generalController" data-ng-init="generalController.init()" class="ng-scope"><head><style type="text/css">.uib-tab > div{position:relative;display:block;padding:10px 15px;outline:0;color:#337ab7;}.uib-tab > div:focus,.uib-tab > div:hover{background-color:#eee;color:#23527c;}.uib-tab.disabled > div{color:#777;}.uib-tab.disabled > div:focus,.uib-tab.disabled > div:hover{color:#777;cursor:not-allowed;background-color:transparent;}.nav-tabs > .uib-tab > div{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0;}.nav-tabs > .uib-tab > div:hover{border-color:#eee #eee #ddd;}.nav-tabs > .uib-tab.active > div,.nav-tabs > .uib-tab.active > div:focus,.nav-tabs > .uib-tab.active > div:hover{color:#555;cursor:default;background-color:#fff;border-color:#ddd #ddd transparent #ddd;}.nav-pills > .uib-tab > div{border-radius:4px;}.nav-pills > .uib-tab.active > div,.nav-pills > .uib-tab.active > div:focus,.nav-pills > .uib-tab.active > div:hover{color:#fff;background-color:#337ab7;}</style><style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style><style type="text/css">@charset "UTF-8";[ng\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>
<base href="/">
<meta charset="utf-8"><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.eu01.nr-data.net","errorBeacon":"bam.eu01.nr-data.net","licenseKey":"NRJS-b3f930c5e10ff2652f0","applicationID":"294822683","transactionName":"MhBSZQoZWUBTUUcMCQtadkQWG0NaXVwcBBYVW1FBEVZfR19ebBYFFxRAVApWX0dfXmwWBRcUQFQKQl9HX15sFgUXFEBUCg==","queueTime":0,"applicationTime":83188,"agent":""};
(window.NREUM||(NREUM={})).init={privacy:{cookies_enabled:true},ajax:{deny_list:["bam.eu01.nr-data.net"]},distributed_tracing:{enabled:true}};(window.NREUM||(NREUM={})).loader_config={agentID:"324491838",accountID:"3433380",trustKey:"3433380",xpid:"VwIEUlVbCBACXVVaBQMBXlc=",licenseKey:"NRJS-b3f930c5e10ff2652f0",applicationID:"294822683"};;/*! For license information please see nr-loader-spa-1.252.0.min.js.LICENSE.txt */
(()=>{var e,t,r={234:(e,t,r)=>{"use strict";r.d(t,{P_:()=>m,Mt:()=>b,C5:()=>s,DL:()=>w,OP:()=>D,lF:()=>O,Yu:()=>E,Dg:()=>v,CX:()=>c,GE:()=>x,sU:()=>N});var n=r(8632),i=r(9567);const o={beacon:n.ce.beacon,errorBeacon:n.ce.errorBeacon,licenseKey:void 0,applicationID:void 0,sa:void 0,queueTime:void 0,applicationTime:void 0,ttGuid:void 0,user:void 0,account:void 0,product:void 0,extra:void 0,jsAttributes:{},userAttributes:void 0,atts:void 0,transactionName:void 0,tNamePlain:void 0},a={};function s(e){if(!e)throw new Error("All info objects require an agent identifier!");if(!a[e])throw new Error("Info for ".concat(e," was never set"));return a[e]}function c(e,t){if(!e)throw new Error("All info objects require an agent identifier!");a[e]=(0,i.D)(t,o);const r=(0,n.ek)(e);r&&(r.info=a[e])}const u=e=>{if(!e||"string"!=typeof e)return!1;try{document.createDocumentFragment().querySelector(e)}catch{return!1}return!0};var d=r(7056),l=r(50);const f="[data-nr-mask]",h=()=>{const e={mask_selector:"*",block_selector:"[data-nr-block]",mask_input_options:{color:!1,date:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:!1,search:!1,tel:!1,text:!1,time:!1,url:!1,week:!1,textarea:!1,select:!1,password:!0}};return{feature_flags:[],proxy:{assets:void 0,beacon:void 0},privacy:{cookies_enabled:!0},ajax:{deny_list:void 0,block_internal:!0,enabled:!0,harvestTimeSeconds:10,autoStart:!0},distributed_tracing:{enabled:void 0,exclude_newrelic_header:void 0,cors_use_newrelic_header:void 0,cors_use_tracecontext_headers:void 0,allowed_origins:void 0},session:{domain:void 0,expiresMs:d.oD,inactiveMs:d.Hb},ssl:void 0,obfuscate:void 0,jserrors:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},metrics:{enabled:!0,autoStart:!0},page_action:{enabled:!0,harvestTimeSeconds:30,autoStart:!0},page_view_event:{enabled:!0,autoStart:!0},page_view_timing:{enabled:!0,harvestTimeSeconds:30,long_task:!1,autoStart:!0},session_trace:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},harvest:{tooManyRequestsDelay:60},session_replay:{autoStart:!0,enabled:!1,harvestTimeSeconds:60,sampling_rate:10,error_sampling_rate:100,collect_fonts:!1,inline_images:!1,inline_stylesheet:!0,mask_all_inputs:!0,get mask_text_selector(){return e.mask_selector},set mask_text_selector(t){u(t)?e.mask_selector="".concat(t,",").concat(f):""===t||null===t?e.mask_selector=f:(0,l.Z)("An invalid session_replay.mask_selector was provided. '*' will be used.",t)},get block_class(){return"nr-block"},get ignore_class(){return"nr-ignore"},get mask_text_class(){return"nr-mask"},get block_selector(){return e.block_selector},set block_selector(t){u(t)?e.block_selector+=",".concat(t):""!==t&&(0,l.Z)("An invalid session_replay.block_selector was provided and will not be used",t)},get mask_input_options(){return e.mask_input_options},set mask_input_options(t){t&&"object"==typeof t?e.mask_input_options={...t,password:!0}:(0,l.Z)("An invalid session_replay.mask_input_option was provided and will not be used",t)}},spa:{enabled:!0,harvestTimeSeconds:10,autoStart:!0}}},p={},g="All configuration objects require an agent identifier!";function m(e){if(!e)throw new Error(g);if(!p[e])throw new Error("Configuration for ".concat(e," was never set"));return p[e]}function v(e,t){if(!e)throw new Error(g);p[e]=(0,i.D)(t,h());const r=(0,n.ek)(e);r&&(r.init=p[e])}function b(e,t){if(!e)throw new Error(g);var r=m(e);if(r){for(var n=t.split("."),i=0;i<n.length-1;i++)if("object"!=typeof(r=r[n[i]]))return;r=r[n[n.length-1]]}return r}const y={accountID:void 0,trustKey:void 0,agentID:void 0,licenseKey:void 0,applicationID:void 0,xpid:void 0},A={};function w(e){if(!e)throw new Error("All loader-config objects require an agent identifier!");if(!A[e])throw new Error("LoaderConfig for ".concat(e," was never set"));return A[e]}function x(e,t){if(!e)throw new Error("All loader-config objects require an agent identifier!");A[e]=(0,i.D)(t,y);const r=(0,n.ek)(e);r&&(r.loader_config=A[e])}const E=(0,n.mF)().o;var _=r(385),T=r(6818);const S={buildEnv:T.Re,customTransaction:void 0,disabled:!1,distMethod:T.gF,isolatedBacklog:!1,loaderType:void 0,maxBytes:3e4,offset:Math.floor(_._A?.performance?.timeOrigin||_._A?.performance?.timing?.navigationStart||Date.now()),onerror:void 0,origin:""+_._A.location,ptid:void 0,releaseIds:{},session:void 0,xhrWrappable:"function"==typeof _._A.XMLHttpRequest?.prototype?.addEventListener,version:T.q4,denyList:void 0},R={};function D(e){if(!e)throw new Error("All runtime objects require an agent identifier!");if(!R[e])throw new Error("Runtime for ".concat(e," was never set"));return R[e]}function N(e,t){if(!e)throw new Error("All runtime objects require an agent identifier!");R[e]=(0,i.D)(t,S);const r=(0,n.ek)(e);r&&(r.runtime=R[e])}function O(e){return function(e){try{const t=s(e);return!!t.licenseKey&&!!t.errorBeacon&&!!t.applicationID}catch(e){return!1}}(e)}},9567:(e,t,r)=>{"use strict";r.d(t,{D:()=>i});var n=r(50);function i(e,t){try{if(!e||"object"!=typeof e)return(0,n.Z)("Setting a Configurable requires an object as input");if(!t||"object"!=typeof t)return(0,n.Z)("Setting a Configurable requires a model to set its initial properties");const r=Object.create(Object.getPrototypeOf(t),Object.getOwnPropertyDescriptors(t)),o=0===Object.keys(r).length?e:r;for(let a in o)if(void 0!==e[a])try{Array.isArray(e[a])&&Array.isArray(t[a])?r[a]=Array.from(new Set([...e[a],...t[a]])):"object"==typeof e[a]&&"object"==typeof t[a]?r[a]=i(e[a],t[a]):r[a]=e[a]}catch(e){(0,n.Z)("An error occurred while setting a property of a Configurable",e)}return r}catch(e){(0,n.Z)("An error occured while setting a Configurable",e)}}},6818:(e,t,r)=>{"use strict";r.d(t,{Re:()=>i,gF:()=>o,lF:()=>a,q4:()=>n});const n="1.252.0",i="PROD",o="CDN",a="2.0.0-alpha.11"},385:(e,t,r)=>{"use strict";r.d(t,{FN:()=>c,IF:()=>l,LW:()=>a,Nk:()=>h,Tt:()=>u,_A:()=>o,cv:()=>p,iS:()=>s,il:()=>n,ux:()=>d,v6:()=>i,w1:()=>f});const n="undefined"!=typeof window&&!!window.document,i="undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self.navigator instanceof WorkerNavigator||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis.navigator instanceof WorkerNavigator),o=n?window:"undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis),a="complete"===o?.document?.readyState,s=Boolean("hidden"===o?.document?.visibilityState),c=""+o?.location,u=/iPad|iPhone|iPod/.test(o.navigator?.userAgent),d=u&&"undefined"==typeof SharedWorker,l=(()=>{const e=o.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);return Array.isArray(e)&&e.length>=2?+e[1]:0})(),f=Boolean(n&&window.document.documentMode),h=!!o.navigator?.sendBeacon,p=Math.floor(o?.performance?.timeOrigin||o?.performance?.timing?.navigationStart||Date.now())},1117:(e,t,r)=>{"use strict";r.d(t,{w:()=>o});var n=r(50);const i={agentIdentifier:"",ee:void 0};class o{constructor(e){try{if("object"!=typeof e)return(0,n.Z)("shared context requires an object as input");this.sharedContext={},Object.assign(this.sharedContext,i),Object.entries(e).forEach((e=>{let[t,r]=e;Object.keys(i).includes(t)&&(this.sharedContext[t]=r)}))}catch(e){(0,n.Z)("An error occured while setting SharedContext",e)}}}},8e3:(e,t,r)=>{"use strict";r.d(t,{L:()=>d,R:()=>c});var n=r(8325),i=r(1284),o=r(4322),a=r(3325);const s={};function c(e,t){const r={staged:!1,priority:a.p[t]||0};u(e),s[e].get(t)||s[e].set(t,r)}function u(e){e&&(s[e]||(s[e]=new Map))}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"feature",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(u(e),!e||!s[e].get(t)||r)return c(t);s[e].get(t).staged=!0;const a=[...s[e]];function c(t){const r=e?n.ee.get(e):n.ee,a=o.X.handlers;if(r.backlog&&a){var s=r.backlog[t],c=a[t];if(c){for(var u=0;s&&u<s.length;++u)l(s[u],c);(0,i.D)(c,(function(e,t){(0,i.D)(t,(function(t,r){r[0].on(e,r[1])}))}))}delete a[t],r.backlog[t]=null,r.emit("drain-"+t,[])}}a.every((e=>{let[t,r]=e;return r.staged}))&&(a.sort(((e,t)=>e[1].priority-t[1].priority)),a.forEach((t=>{let[r]=t;s[e].delete(r),c(r)})))}function l(e,t){var r=e[1];(0,i.D)(t[r],(function(t,r){var n=e[0];if(r[0]===n){var i=r[1],o=e[3],a=e[2];i.apply(o,a)}}))}},8325:(e,t,r)=>{"use strict";r.d(t,{A:()=>c,ee:()=>u});var n=r(8632),i=r(2210),o=r(234);class a{constructor(e){this.contextId=e}}var s=r(3117);const c="nr@context:".concat(s.a),u=function e(t,r){var n={},s={},d={},f=!1;try{f=16===r.length&&(0,o.OP)(r).isolatedBacklog}catch(e){}var h={on:g,addEventListener:g,removeEventListener:function(e,t){var r=n[e];if(!r)return;for(var i=0;i<r.length;i++)r[i]===t&&r.splice(i,1)},emit:function(e,r,n,i,o){!1!==o&&(o=!0);if(u.aborted&&!i)return;t&&o&&t.emit(e,r,n);for(var a=p(n),c=m(e),d=c.length,l=0;l<d;l++)c[l].apply(a,r);var f=b()[s[e]];f&&f.push([h,e,r,a]);return a},get:v,listeners:m,context:p,buffer:function(e,t){const r=b();if(t=t||"feature",h.aborted)return;Object.entries(e||{}).forEach((e=>{let[n,i]=e;s[i]=t,t in r||(r[t]=[])}))},abort:l,aborted:!1,isBuffering:function(e){return!!b()[s[e]]},debugId:r,backlog:f?{}:t&&"object"==typeof t.backlog?t.backlog:{}};return h;function p(e){return e&&e instanceof a?e:e?(0,i.X)(e,c,(()=>new a(c))):new a(c)}function g(e,t){n[e]=m(e).concat(t)}function m(e){return n[e]||[]}function v(t){return d[t]=d[t]||e(h,t)}function b(){return h.backlog}}(void 0,"globalEE"),d=(0,n.fP)();function l(){u.aborted=!0,Object.keys(u.backlog).forEach((e=>{delete u.backlog[e]}))}d.ee||(d.ee=u)},5546:(e,t,r)=>{"use strict";r.d(t,{E:()=>n,p:()=>i});var n=r(8325).ee.get("handle");function i(e,t,r,i,o){o?(o.buffer([e],i),o.emit(e,t,r)):(n.buffer([e],i),n.emit(e,t,r))}},4322:(e,t,r)=>{"use strict";r.d(t,{X:()=>o});var n=r(5546);o.on=a;var i=o.handlers={};function o(e,t,r,o){a(o||n.E,i,e,t,r)}function a(e,t,r,i,o){o||(o="feature"),e||(e=n.E);var a=t[o]=t[o]||{};(a[r]=a[r]||[]).push([e,i])}},3239:(e,t,r)=>{"use strict";r.d(t,{bP:()=>s,iz:()=>c,m$:()=>a});var n=r(385);let i=!1,o=!1;try{const e={get passive(){return i=!0,!1},get signal(){return o=!0,!1}};n._A.addEventListener("test",null,e),n._A.removeEventListener("test",null,e)}catch(e){}function a(e,t){return i||o?{capture:!!e,passive:i,signal:t}:!!e}function s(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;window.addEventListener(e,t,a(r,n))}function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;document.addEventListener(e,t,a(r,n))}},3117:(e,t,r)=>{"use strict";r.d(t,{a:()=>n});const n=(0,r(4402).Rl)()},4402:(e,t,r)=>{"use strict";r.d(t,{Ht:()=>u,M:()=>c,Rl:()=>a,ky:()=>s});var n=r(385);const i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";function o(e,t){return e?15&e[t]:16*Math.random()|0}function a(){const e=n._A?.crypto||n._A?.msCrypto;let t,r=0;return e&&e.getRandomValues&&(t=e.getRandomValues(new Uint8Array(30))),i.split("").map((e=>"x"===e?o(t,r++).toString(16):"y"===e?(3&o()|8).toString(16):e)).join("")}function s(e){const t=n._A?.crypto||n._A?.msCrypto;let r,i=0;t&&t.getRandomValues&&(r=t.getRandomValues(new Uint8Array(e)));const a=[];for(var s=0;s<e;s++)a.push(o(r,i++).toString(16));return a.join("")}function c(){return s(16)}function u(){return s(32)}},7056:(e,t,r)=>{"use strict";r.d(t,{Bq:()=>n,Hb:()=>o,IK:()=>c,oD:()=>i,uT:()=>s,wO:()=>a});const n="NRBA",i=144e5,o=18e5,a={PAUSE:"session-pause",RESET:"session-reset",RESUME:"session-resume",UPDATE:"session-update"},s={SAME_TAB:"same-tab",CROSS_TAB:"cross-tab"},c={OFF:0,FULL:1,ERROR:2}},7894:(e,t,r)=>{"use strict";function n(){return Math.round(performance.now())}r.d(t,{z:()=>n})},7243:(e,t,r)=>{"use strict";r.d(t,{e:()=>i});var n=r(385);function i(e){if(0===(e||"").indexOf("data:"))return{protocol:"data"};try{const t=new URL(e,location.href),r={port:t.port,hostname:t.hostname,pathname:t.pathname,search:t.search,protocol:t.protocol.slice(0,t.protocol.indexOf(":")),sameOrigin:t.protocol===n._A?.location?.protocol&&t.host===n._A?.location?.host};return r.port&&""!==r.port||("http:"===t.protocol&&(r.port="80"),"https:"===t.protocol&&(r.port="443")),r.pathname&&""!==r.pathname?r.pathname.startsWith("/")||(r.pathname="/".concat(r.pathname)):r.pathname="/",r}catch(e){return{}}}},50:(e,t,r)=>{"use strict";function n(e,t){"function"==typeof console.warn&&(console.warn("New Relic: ".concat(e)),t&&console.warn(t))}r.d(t,{Z:()=>n})},2825:(e,t,r)=>{"use strict";r.d(t,{N:()=>d,T:()=>l});var n=r(8325),i=r(5546),o=r(3325),a=r(385);const s="newrelic";const c={stn:[o.D.sessionTrace],err:[o.D.jserrors,o.D.metrics],ins:[o.D.pageAction],spa:[o.D.spa],sr:[o.D.sessionReplay,o.D.sessionTrace]},u=new Set;function d(e,t){const r=n.ee.get(t);e&&"object"==typeof e&&(u.has(t)||(Object.entries(e).forEach((e=>{let[t,n]=e;c[t]?c[t].forEach((e=>{n?(0,i.p)("feat-"+t,[],void 0,e,r):(0,i.p)("block-"+t,[],void 0,e,r),(0,i.p)("rumresp-"+t,[Boolean(n)],void 0,e,r)})):n&&(0,i.p)("feat-"+t,[],void 0,void 0,r),l[t]=Boolean(n)})),Object.keys(c).forEach((e=>{void 0===l[e]&&(c[e]?.forEach((t=>(0,i.p)("rumresp-"+e,[!1],void 0,t,r))),l[e]=!1)})),u.add(t),function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{a._A.dispatchEvent(new CustomEvent(s,{detail:e}))}catch(e){}}({loaded:!0})))}const l={}},2210:(e,t,r)=>{"use strict";r.d(t,{X:()=>i});var n=Object.prototype.hasOwnProperty;function i(e,t,r){if(n.call(e,t))return e[t];var i=r();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:i,writable:!0,enumerable:!1}),i}catch(e){}return e[t]=i,i}},1284:(e,t,r)=>{"use strict";r.d(t,{D:()=>n});const n=(e,t)=>Object.entries(e||{}).map((e=>{let[r,n]=e;return t(r,n)}))},4351:(e,t,r)=>{"use strict";r.d(t,{P:()=>o});var n=r(8325);const i=()=>{const e=new WeakSet;return(t,r)=>{if("object"==typeof r&&null!==r){if(e.has(r))return;e.add(r)}return r}};function o(e){try{return JSON.stringify(e,i())}catch(e){try{n.ee.emit("internal-error",[e])}catch(e){}}}},3960:(e,t,r)=>{"use strict";r.d(t,{KB:()=>a,b2:()=>o});var n=r(3239);function i(){return"undefined"==typeof document||"complete"===document.readyState}function o(e,t){if(i())return e();(0,n.bP)("load",e,t)}function a(e){if(i())return e();(0,n.iz)("DOMContentLoaded",e)}},8632:(e,t,r)=>{"use strict";r.d(t,{EZ:()=>d,ce:()=>o,ek:()=>u,fP:()=>a,gG:()=>l,h5:()=>c,mF:()=>s});var n=r(7894),i=r(385);const o={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net"};function a(){return i._A.NREUM||(i._A.NREUM={}),void 0===i._A.newrelic&&(i._A.newrelic=i._A.NREUM),i._A.NREUM}function s(){let e=a();return e.o||(e.o={ST:i._A.setTimeout,SI:i._A.setImmediate,CT:i._A.clearTimeout,XHR:i._A.XMLHttpRequest,REQ:i._A.Request,EV:i._A.Event,PR:i._A.Promise,MO:i._A.MutationObserver,FETCH:i._A.fetch}),e}function c(e,t){let r=a();r.initializedAgents??={},t.initializedAt={ms:(0,n.z)(),date:new Date},r.initializedAgents[e]=t}function u(e){let t=a();return t.initializedAgents?.[e]}function d(e,t){a()[e]=t}function l(){return function(){let e=a();const t=e.info||{};e.info={beacon:o.beacon,errorBeacon:o.errorBeacon,...t}}(),function(){let e=a();const t=e.init||{};e.init={...t}}(),s(),function(){let e=a();const t=e.loader_config||{};e.loader_config={...t}}(),a()}},7956:(e,t,r)=>{"use strict";r.d(t,{N:()=>i});var n=r(3239);function i(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;(0,n.iz)("visibilitychange",(function(){if(t)return void("hidden"===document.visibilityState&&e());e(document.visibilityState)}),r,i)}},1214:(e,t,r)=>{"use strict";r.d(t,{em:()=>b,u5:()=>R,QU:()=>O,_L:()=>P,Gm:()=>M,Lg:()=>L,BV:()=>Z,Kf:()=>Y});var n=r(8325),i=r(3117);const o="nr@original:".concat(i.a);var a=Object.prototype.hasOwnProperty,s=!1;function c(e,t){return e||(e=n.ee),r.inPlace=function(e,t,n,i,o){n||(n="");const a="-"===n.charAt(0);for(let s=0;s<t.length;s++){const c=t[s],u=e[c];d(u)||(e[c]=r(u,a?c+n:n,i,c,o))}},r.flag=o,r;function r(t,r,n,s,c){return d(t)?t:(r||(r=""),nrWrapper[o]=t,function(e,t,r){if(Object.defineProperty&&Object.keys)try{return Object.keys(e).forEach((function(r){Object.defineProperty(t,r,{get:function(){return e[r]},set:function(t){return e[r]=t,t}})})),t}catch(e){u([e],r)}for(var n in e)a.call(e,n)&&(t[n]=e[n])}(t,nrWrapper,e),nrWrapper);function nrWrapper(){var o,a,d,l;try{a=this,o=[...arguments],d="function"==typeof n?n(o,a):n||{}}catch(t){u([t,"",[o,a,s],d],e)}i(r+"start",[o,a,s],d,c);try{return l=t.apply(a,o)}catch(e){throw i(r+"err",[o,a,e],d,c),e}finally{i(r+"end",[o,a,l],d,c)}}}function i(r,n,i,o){if(!s||t){var a=s;s=!0;try{e.emit(r,n,i,t,o)}catch(t){u([t,r,n,i],e)}s=a}}}function u(e,t){t||(t=n.ee);try{t.emit("internal-error",e)}catch(e){}}function d(e){return!(e&&"function"==typeof e&&e.apply&&!e[o])}var l=r(2210),f=r(385);const h={},p=f._A.XMLHttpRequest,g="addEventListener",m="removeEventListener",v="nr@wrapped:".concat(n.A);function b(e){var t=function(e){return(e||n.ee).get("events")}(e);if(h[t.debugId]++)return t;h[t.debugId]=1;var r=c(t,!0);function i(e){r.inPlace(e,[g,m],"-",o)}function o(e,t){return e[1]}return"getPrototypeOf"in Object&&(f.il&&y(document,i),y(f._A,i),y(p.prototype,i)),t.on(g+"-start",(function(e,t){var n=e[1];if(null!==n&&("function"==typeof n||"object"==typeof n)){var i=(0,l.X)(n,v,(function(){var e={object:function(){if("function"!=typeof n.handleEvent)return;return n.handleEvent.apply(n,arguments)},function:n}[typeof n];return e?r(e,"fn-",null,e.name||"anonymous"):n}));this.wrapped=e[1]=i}})),t.on(m+"-start",(function(e){e[1]=this.wrapped||e[1]})),t}function y(e,t){let r=e;for(;"object"==typeof r&&!Object.prototype.hasOwnProperty.call(r,g);)r=Object.getPrototypeOf(r);for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];r&&t(r,...i)}var A="fetch-",w=A+"body-",x=["arrayBuffer","blob","json","text","formData"],E=f._A.Request,_=f._A.Response,T="prototype";const S={};function R(e){const t=function(e){return(e||n.ee).get("fetch")}(e);if(!(E&&_&&f._A.fetch))return t;if(S[t.debugId]++)return t;function r(e,r,i){var o=e[r];"function"==typeof o&&(e[r]=function(){var e,r=[...arguments],a={};t.emit(i+"before-start",[r],a),a[n.A]&&a[n.A].dt&&(e=a[n.A].dt);var s=o.apply(this,r);return t.emit(i+"start",[r,e],s),s.then((function(e){return t.emit(i+"end",[null,e],s),e}),(function(e){throw t.emit(i+"end",[e],s),e}))})}return S[t.debugId]=1,x.forEach((e=>{r(E[T],e,w),r(_[T],e,w)})),r(f._A,"fetch",A),t.on(A+"end",(function(e,r){var n=this;if(r){var i=r.headers.get("content-length");null!==i&&(n.rxSize=i),t.emit(A+"done",[null,r],n)}else t.emit(A+"done",[e],n)})),t}const D={},N=["pushState","replaceState"];function O(e){const t=function(e){return(e||n.ee).get("history")}(e);return!f.il||D[t.debugId]++||(D[t.debugId]=1,c(t).inPlace(window.history,N,"-")),t}var I=r(3239);const j={},C=["appendChild","insertBefore","replaceChild"];function P(e){const t=function(e){return(e||n.ee).get("jsonp")}(e);if(!f.il||j[t.debugId])return t;j[t.debugId]=!0;var r=c(t),i=/[?&](?:callback|cb)=([^&#]+)/,o=/(.*)\.([^.]+)/,a=/^(\w+)(\.|$)(.*)$/;function s(e,t){if(!e)return t;const r=e.match(a),n=r[1];return s(r[3],t[n])}return r.inPlace(Node.prototype,C,"dom-"),t.on("dom-start",(function(e){!function(e){if(!e||"string"!=typeof e.nodeName||"script"!==e.nodeName.toLowerCase())return;if("function"!=typeof e.addEventListener)return;var n=(a=e.src,c=a.match(i),c?c[1]:null);var a,c;if(!n)return;var u=function(e){var t=e.match(o);if(t&&t.length>=3)return{key:t[2],parent:s(t[1],window)};return{key:e,parent:window}}(n);if("function"!=typeof u.parent[u.key])return;var d={};function l(){t.emit("jsonp-end",[],d),e.removeEventListener("load",l,(0,I.m$)(!1)),e.removeEventListener("error",f,(0,I.m$)(!1))}function f(){t.emit("jsonp-error",[],d),t.emit("jsonp-end",[],d),e.removeEventListener("load",l,(0,I.m$)(!1)),e.removeEventListener("error",f,(0,I.m$)(!1))}r.inPlace(u.parent,[u.key],"cb-",d),e.addEventListener("load",l,(0,I.m$)(!1)),e.addEventListener("error",f,(0,I.m$)(!1)),t.emit("new-jsonp",[e.src],d)}(e[0])})),t}const k={};function M(e){const t=function(e){return(e||n.ee).get("mutation")}(e);if(!f.il||k[t.debugId])return t;k[t.debugId]=!0;var r=c(t),i=f._A.MutationObserver;return i&&(window.MutationObserver=function(e){return this instanceof i?new i(r(e,"fn-")):i.apply(this,arguments)},MutationObserver.prototype=i.prototype),t}const H={};function L(e){const t=function(e){return(e||n.ee).get("promise")}(e);if(H[t.debugId])return t;H[t.debugId]=!0;var r=t.context,i=c(t),a=f._A.Promise;return a&&function(){function e(r){var n=t.context(),o=i(r,"executor-",n,null,!1);const s=Reflect.construct(a,[o],e);return t.context(s).getCtx=function(){return n},s}f._A.Promise=e,Object.defineProperty(e,"name",{value:"Promise"}),e.toString=function(){return a.toString()},Object.setPrototypeOf(e,a),["all","race"].forEach((function(r){const n=a[r];e[r]=function(e){let i=!1;[...e||[]].forEach((e=>{this.resolve(e).then(a("all"===r),a(!1))}));const o=n.apply(this,arguments);return o;function a(e){return function(){t.emit("propagate",[null,!i],o,!1,!1),i=i||!e}}}})),["resolve","reject"].forEach((function(r){const n=a[r];e[r]=function(e){const r=n.apply(this,arguments);return e!==r&&t.emit("propagate",[e,!0],r,!1,!1),r}})),e.prototype=a.prototype;const n=a.prototype.then;a.prototype.then=function(){var e=this,o=r(e);o.promise=e;for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];s[0]=i(s[0],"cb-",o,null,!1),s[1]=i(s[1],"cb-",o,null,!1);const u=n.apply(this,s);return o.nextPromise=u,t.emit("propagate",[e,!0],u,!1,!1),u},a.prototype.then[o]=n,t.on("executor-start",(function(e){e[0]=i(e[0],"resolve-",this,null,!1),e[1]=i(e[1],"resolve-",this,null,!1)})),t.on("executor-err",(function(e,t,r){e[1](r)})),t.on("cb-end",(function(e,r,n){t.emit("propagate",[n,!0],this.nextPromise,!1,!1)})),t.on("propagate",(function(e,r,n){this.getCtx&&!r||(this.getCtx=function(){if(e instanceof Promise)var r=t.context(e);return r&&r.getCtx?r.getCtx():this})}))}(),t}const z={},F="setTimeout",B="setInterval",U="clearTimeout",V="-start",q="-",G=[F,"setImmediate",B,U,"clearImmediate"];function Z(e){const t=function(e){return(e||n.ee).get("timer")}(e);if(z[t.debugId]++)return t;z[t.debugId]=1;var r=c(t);return r.inPlace(f._A,G.slice(0,2),F+q),r.inPlace(f._A,G.slice(2,3),B+q),r.inPlace(f._A,G.slice(3),U+q),t.on(B+V,(function(e,t,n){e[0]=r(e[0],"fn-",null,n)})),t.on(F+V,(function(e,t,n){this.method=n,this.timerDuration=isNaN(e[1])?0:+e[1],e[0]=r(e[0],"fn-",this,n)})),t}var W=r(50);const X={},K=["open","send"];function Y(e){var t=e||n.ee;const r=function(e){return(e||n.ee).get("xhr")}(t);if(X[r.debugId]++)return r;X[r.debugId]=1,b(t);var i=c(r),o=f._A.XMLHttpRequest,a=f._A.MutationObserver,s=f._A.Promise,u=f._A.setInterval,d="readystatechange",l=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],h=[],p=f._A.XMLHttpRequest=function(e){const t=new o(e),n=r.context(t);try{r.emit("new-xhr",[t],n),t.addEventListener(d,(a=n,function(){var e=this;e.readyState>3&&!a.resolved&&(a.resolved=!0,r.emit("xhr-resolved",[],e)),i.inPlace(e,l,"fn-",w)}),(0,I.m$)(!1))}catch(e){(0,W.Z)("An error occurred while intercepting XHR",e);try{r.emit("internal-error",[e])}catch(e){}}var a;return t};function g(e,t){i.inPlace(t,["onreadystatechange"],"fn-",w)}if(function(e,t){for(var r in e)t[r]=e[r]}(o,p),p.prototype=o.prototype,i.inPlace(p.prototype,K,"-xhr-",w),r.on("send-xhr-start",(function(e,t){g(e,t),function(e){h.push(e),a&&(m?m.then(A):u?u(A):(v=-v,y.data=v))}(t)})),r.on("open-xhr-start",g),a){var m=s&&s.resolve();if(!u&&!s){var v=1,y=document.createTextNode(v);new a(A).observe(y,{characterData:!0})}}else t.on("fn-end",(function(e){e[0]&&e[0].type===d||A()}));function A(){for(var e=0;e<h.length;e++)g(0,h[e]);h.length&&(h=[])}function w(e,t){return t}return r}},7825:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.ajax},6660:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.jserrors},3081:(e,t,r)=>{"use strict";r.d(t,{gF:()=>o,mY:()=>i,t9:()=>n,vz:()=>s,xS:()=>a});const n=r(3325).D.metrics,i="sm",o="cm",a="storeSupportabilityMetrics",s="storeEventMetrics"},4649:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageAction},7633:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageViewEvent},9251:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageViewTiming},7144:(e,t,r)=>{"use strict";r.d(t,{J0:()=>l,Mi:()=>d,Vb:()=>o,Ye:()=>s,fm:()=>c,i9:()=>a,t9:()=>i,u0:()=>u});var n=r(7056);const i=r(3325).D.sessionReplay,o=.12,a={DomContentLoaded:0,Load:1,FullSnapshot:2,IncrementalSnapshot:3,Meta:4,Custom:5},s=1e6,c=64e3,u={[n.IK.ERROR]:15e3,[n.IK.FULL]:3e5,[n.IK.OFF]:0},d={RESET:{message:"Session was reset",sm:"Reset"},IMPORT:{message:"Recorder failed to import",sm:"Import"},TOO_MANY:{message:"429: Too Many Requests",sm:"Too-Many"},TOO_BIG:{message:"Payload was too large",sm:"Too-Big"},CROSS_TAB:{message:"Session Entity was set to OFF on another tab",sm:"Cross-Tab"},ENTITLEMENTS:{message:"Session Replay is not allowed and will not be started",sm:"Entitlement"}},l=5e3},3614:(e,t,r)=>{"use strict";r.d(t,{BST_RESOURCE:()=>i,END:()=>s,FEATURE_NAME:()=>n,FN_END:()=>u,FN_START:()=>c,PUSH_STATE:()=>d,RESOURCE:()=>o,START:()=>a});const n=r(3325).D.sessionTrace,i="bstResource",o="resource",a="-start",s="-end",c="fn"+a,u="fn"+s,d="pushState"},7836:(e,t,r)=>{"use strict";r.d(t,{BODY:()=>x,CB_END:()=>E,CB_START:()=>u,END:()=>w,FEATURE_NAME:()=>i,FETCH:()=>T,FETCH_BODY:()=>v,FETCH_DONE:()=>m,FETCH_START:()=>g,FN_END:()=>c,FN_START:()=>s,INTERACTION:()=>f,INTERACTION_API:()=>d,INTERACTION_EVENTS:()=>o,JSONP_END:()=>b,JSONP_NODE:()=>p,JS_TIME:()=>_,MAX_TIMER_BUDGET:()=>a,REMAINING:()=>l,SPA_NODE:()=>h,START:()=>A,originalSetTimeout:()=>y});var n=r(234);const i=r(3325).D.spa,o=["click","submit","keypress","keydown","keyup","change"],a=999,s="fn-start",c="fn-end",u="cb-start",d="api-ixn-",l="remaining",f="interaction",h="spaNode",p="jsonpNode",g="fetch-start",m="fetch-done",v="fetch-body-",b="jsonp-end",y=n.Yu.ST,A="-start",w="-end",x="-body",E="cb"+w,_="jsTime",T="fetch"},5938:(e,t,r)=>{"use strict";r.d(t,{W:()=>i});var n=r(8325);class i{constructor(e,t,r){this.agentIdentifier=e,this.aggregator=t,this.ee=n.ee.get(e),this.featureName=r,this.blocked=!1}}},7530:(e,t,r)=>{"use strict";r.d(t,{j:()=>b});var n=r(3325),i=r(234),o=r(5546),a=r(8325),s=r(7894),c=r(8e3),u=r(3960),d=r(385),l=r(50),f=r(3081),h=r(8632);function p(){const e=(0,h.gG)();["setErrorHandler","finished","addToTrace","addRelease","addPageAction","setCurrentRouteName","setPageViewName","setCustomAttribute","interaction","noticeError","setUserId","setApplicationVersion","start","recordReplay","pauseReplay"].forEach((t=>{e[t]=function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];let o=[];return Object.values(e.initializedAgents).forEach((e=>{e.exposed&&e.api[t]&&o.push(e.api[t](...n))})),o.length>1?o:o[0]}(t,...n)}}))}var g=r(2825);const m=e=>{const t=e.startsWith("http");e+="/",r.p=t?e:"https://"+e};let v=!1;function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},b=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0,{init:A,info:w,loader_config:x,runtime:E={loaderType:b},exposed:_=!0}=t;const T=(0,h.gG)();w||(A=T.init,w=T.info,x=T.loader_config),(0,i.Dg)(e.agentIdentifier,A||{}),(0,i.GE)(e.agentIdentifier,x||{}),w.jsAttributes??={},d.v6&&(w.jsAttributes.isWorker=!0),(0,i.CX)(e.agentIdentifier,w);const S=(0,i.P_)(e.agentIdentifier),R=[w.beacon,w.errorBeacon];v||(S.proxy.assets&&(m(S.proxy.assets),R.push(S.proxy.assets)),S.proxy.beacon&&R.push(S.proxy.beacon),p(),(0,h.EZ)("activatedFeatures",g.T)),E.denyList=[...S.ajax.deny_list||[],...S.ajax.block_internal?R:[]],(0,i.sU)(e.agentIdentifier,E),void 0===e.api&&(e.api=function(e,t){t||(0,c.R)(e,"api");const h={};var p=a.ee.get(e),g=p.get("tracer"),m="api-",v=m+"ixn-";function b(t,r,n,o){const a=(0,i.C5)(e);return null===r?delete a.jsAttributes[t]:(0,i.CX)(e,{...a,jsAttributes:{...a.jsAttributes,[t]:r}}),w(m,n,!0,o||null===r?"session":void 0)(t,r)}function y(){}["setErrorHandler","finished","addToTrace","addRelease"].forEach((e=>{h[e]=w(m,e,!0,"api")})),h.addPageAction=w(m,"addPageAction",!0,n.D.pageAction),h.setCurrentRouteName=w(m,"routeName",!0,n.D.spa),h.setPageViewName=function(t,r){if("string"==typeof t)return"/"!==t.charAt(0)&&(t="/"+t),(0,i.OP)(e).customTransaction=(r||"http://custom.transaction")+t,w(m,"setPageViewName",!0)()},h.setCustomAttribute=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"==typeof e){if(["string","number","boolean"].includes(typeof t)||null===t)return b(e,t,"setCustomAttribute",r);(0,l.Z)("Failed to execute setCustomAttribute.\nNon-null value must be a string, number or boolean type, but a type of <".concat(typeof t,"> was provided."))}else(0,l.Z)("Failed to execute setCustomAttribute.\nName must be a string type, but a type of <".concat(typeof e,"> was provided."))},h.setUserId=function(e){if("string"==typeof e||null===e)return b("enduser.id",e,"setUserId",!0);(0,l.Z)("Failed to execute setUserId.\nNon-null value must be a string type, but a type of <".concat(typeof e,"> was provided."))},h.setApplicationVersion=function(e){if("string"==typeof e||null===e)return b("application.version",e,"setApplicationVersion",!1);(0,l.Z)("Failed to execute setApplicationVersion. Expected <String | null>, but got <".concat(typeof e,">."))},h.start=e=>{try{const t=e?"defined":"undefined";(0,o.p)(f.xS,["API/start/".concat(t,"/called")],void 0,n.D.metrics,p);const r=Object.values(n.D);if(void 0===e)e=r;else{if((e=Array.isArray(e)&&e.length?e:[e]).some((e=>!r.includes(e))))return(0,l.Z)("Invalid feature name supplied. Acceptable feature names are: ".concat(r));e.includes(n.D.pageViewEvent)||e.push(n.D.pageViewEvent)}e.forEach((e=>{p.emit("".concat(e,"-opt-in"))}))}catch(e){(0,l.Z)("An unexpected issue occurred",e)}},h.recordReplay=function(){(0,o.p)(f.xS,["API/recordReplay/called"],void 0,n.D.metrics,p),(0,o.p)("recordReplay",[],void 0,n.D.sessionReplay,p)},h.pauseReplay=function(){(0,o.p)(f.xS,["API/pauseReplay/called"],void 0,n.D.metrics,p),(0,o.p)("pauseReplay",[],void 0,n.D.sessionReplay,p)},h.interaction=function(){return(new y).get()};var A=y.prototype={createTracer:function(e,t){var r={},i=this,a="function"==typeof t;return(0,o.p)(f.xS,["API/createTracer/called"],void 0,n.D.metrics,p),(0,o.p)(v+"tracer",[(0,s.z)(),e,r],i,n.D.spa,p),function(){if(g.emit((a?"":"no-")+"fn-start",[(0,s.z)(),i,a],r),a)try{return t.apply(this,arguments)}catch(e){throw g.emit("fn-err",[arguments,this,e],r),e}finally{g.emit("fn-end",[(0,s.z)()],r)}}}};function w(e,t,r,i){return function(){return(0,o.p)(f.xS,["API/"+t+"/called"],void 0,n.D.metrics,p),i&&(0,o.p)(e+t,[(0,s.z)(),...arguments],r?null:this,i,p),r?void 0:this}}function x(){r.e(111).then(r.bind(r,7438)).then((t=>{let{setAPI:r}=t;r(e),(0,c.L)(e,"api")})).catch((()=>{(0,l.Z)("Downloading runtime APIs failed..."),(0,c.L)(e,"api",!0)}))}return["actionText","setName","setAttribute","save","ignore","onEnd","getContext","end","get"].forEach((e=>{A[e]=w(v,e,void 0,n.D.spa)})),h.noticeError=function(e,t){"string"==typeof e&&(e=new Error(e)),(0,o.p)(f.xS,["API/noticeError/called"],void 0,n.D.metrics,p),(0,o.p)("err",[e,(0,s.z)(),!1,t],void 0,n.D.jserrors,p)},d.il?(0,u.b2)((()=>x()),!0):x(),h}(e.agentIdentifier,y)),void 0===e.exposed&&(e.exposed=_),v=!0}},1926:(e,t,r)=>{r.nc=(()=>{try{return document?.currentScript?.nonce}catch(e){}return""})()},3325:(e,t,r)=>{"use strict";r.d(t,{D:()=>n,p:()=>i});const n={ajax:"ajax",jserrors:"jserrors",metrics:"metrics",pageAction:"page_action",pageViewEvent:"page_view_event",pageViewTiming:"page_view_timing",sessionReplay:"session_replay",sessionTrace:"session_trace",spa:"spa"},i={[n.pageViewEvent]:1,[n.pageViewTiming]:2,[n.metrics]:3,[n.jserrors]:4,[n.ajax]:5,[n.sessionTrace]:6,[n.pageAction]:7,[n.spa]:8,[n.sessionReplay]:9}}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.m=r,i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>({111:"nr-spa",164:"nr-spa-compressor",433:"nr-spa-recorder"}[e]+"-1.252.0.min.js"),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="NRBA-1.252.0.PROD:",i.l=(r,n,o,a)=>{if(e[r])e[r].push(n);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+o){s=l;break}}if(!s){c=!0;var f={111:"sha512-EIHTFh/PyMHLspjr+lbpdxFHzJXOF7HH8nedLZZTJSO0SyJ4rECM57ibYM67sib1O2FH0nhyrm4QKgl30mtD8w==",433:"sha512-wCJ0jwoj4FyJOrl6z7VLilNolSSxqqm/5L08FBzY2sXjVPFpnyu6p3obblBOv9lj2u9awQrvcEGqvjyYflheow==",164:"sha512-we5lwLCaVV8XgmWsFLhIuQ0Ja0mW9HH9YHLBzjhalvM84n3Rpvmg1iFz7BOZeYnHrjU5dcWOHrtqxvdjDNy2ag=="};(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+o),s.src=r,0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous"),f[a]&&(s.integrity=f[a])}e[r]=[n];var h=(t,n)=>{s.onerror=s.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="https://js-agent.newrelic.com/",(()=>{var e={801:0,92:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,i)=>n=e[t]=[r,i]));r.push(n[2]=o);var a=i.p+i.u(t),s=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,s,c]=r,u=0;if(a.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(c)c(i)}for(t&&t(r);u<a.length;u++)o=a[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self["webpackChunk:NRBA-1.252.0.PROD"]=self["webpackChunk:NRBA-1.252.0.PROD"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";i(1926);var e=i(50);class t{#e(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];if("function"==typeof this.api?.[t])return this.api[t](...n);(0,e.Z)("Call to agent api ".concat(t," failed. The API is not currently initialized."))}addPageAction(e,t){return this.#e("addPageAction",e,t)}setPageViewName(e,t){return this.#e("setPageViewName",e,t)}setCustomAttribute(e,t,r){return this.#e("setCustomAttribute",e,t,r)}noticeError(e,t){return this.#e("noticeError",e,t)}setUserId(e){return this.#e("setUserId",e)}setApplicationVersion(e){return this.#e("setApplicationVersion",e)}setErrorHandler(e){return this.#e("setErrorHandler",e)}finished(e){return this.#e("finished",e)}addRelease(e,t){return this.#e("addRelease",e,t)}start(e){return this.#e("start",e)}recordReplay(){return this.#e("recordReplay")}pauseReplay(){return this.#e("pauseReplay")}addToTrace(e){return this.#e("addToTrace",e)}setCurrentRouteName(e){return this.#e("setCurrentRouteName",e)}interaction(){return this.#e("interaction")}}var r=i(3325),n=i(234);const o=Object.values(r.D);function a(e){const t={};return o.forEach((r=>{t[r]=function(e,t){return!1!==(0,n.Mt)(t,"".concat(e,".enabled"))}(r,e)})),t}var s=i(7530);var c=i(8e3),u=i(5938),d=i(3960),l=i(385);class f extends u.W{constructor(e,t,r){let i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];super(e,t,r),this.auto=i,this.abortHandler=void 0,this.featAggregate=void 0,this.onAggregateImported=void 0,!1===(0,n.Mt)(this.agentIdentifier,"".concat(this.featureName,".autoStart"))&&(this.auto=!1),this.auto&&(0,c.R)(e,r)}importAggregator(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.featAggregate)return;if(!this.auto)return void this.ee.on("".concat(this.featureName,"-opt-in"),(()=>{(0,c.R)(this.agentIdentifier,this.featureName),this.auto=!0,this.importAggregator()}));const r=l.il&&!0===(0,n.Mt)(this.agentIdentifier,"privacy.cookies_enabled");let o;this.onAggregateImported=new Promise((e=>{o=e}));const a=async()=>{let n;try{if(r){const{setupAgentSession:e}=await i.e(111).then(i.bind(i,1656));n=e(this.agentIdentifier)}}catch(t){(0,e.Z)("A problem occurred when starting up session manager. This page will not start or extend any session.",t)}try{if(!this.shouldImportAgg(this.featureName,n))return(0,c.L)(this.agentIdentifier,this.featureName),void o(!1);const{lazyFeatureLoader:e}=await i.e(111).then(i.bind(i,8582)),{Aggregate:r}=await e(this.featureName,"aggregate");this.featAggregate=new r(this.agentIdentifier,this.aggregator,t),o(!0)}catch(t){(0,e.Z)("Downloading and initializing ".concat(this.featureName," failed..."),t),this.abortHandler?.(),(0,c.L)(this.agentIdentifier,this.featureName,!0),o(!1)}};l.il?(0,d.b2)((()=>a()),!0):a()}shouldImportAgg(e,t){return e!==r.D.sessionReplay||!!n.Yu.MO&&(!1!==(0,n.Mt)(this.agentIdentifier,"session_trace.enabled")&&(!!t?.isNew||!!t?.state.sessionReplayMode))}}var h=i(7633);class p extends f{static featureName=h.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,h.t,r),this.importAggregator()}}var g=i(1117),m=i(1284);class v extends g.w{constructor(e){super(e),this.aggregatedData={}}store(e,t,r,n,i){var o=this.getBucket(e,t,r,i);return o.metrics=function(e,t){t||(t={count:0});return t.count+=1,(0,m.D)(e,(function(e,r){t[e]=b(r,t[e])})),t}(n,o.metrics),o}merge(e,t,r,n,i){var o=this.getBucket(e,t,n,i);if(o.metrics){var a=o.metrics;a.count+=r.count,(0,m.D)(r,(function(e,t){if("count"!==e){var n=a[e],i=r[e];i&&!i.c?a[e]=b(i.t,n):a[e]=function(e,t){if(!t)return e;t.c||(t=y(t.t));return t.min=Math.min(e.min,t.min),t.max=Math.max(e.max,t.max),t.t+=e.t,t.sos+=e.sos,t.c+=e.c,t}(i,a[e])}}))}else o.metrics=r}storeMetric(e,t,r,n){var i=this.getBucket(e,t,r);return i.stats=b(n,i.stats),i}getBucket(e,t,r,n){this.aggregatedData[e]||(this.aggregatedData[e]={});var i=this.aggregatedData[e][t];return i||(i=this.aggregatedData[e][t]={params:r||{}},n&&(i.custom=n)),i}get(e,t){return t?this.aggregatedData[e]&&this.aggregatedData[e][t]:this.aggregatedData[e]}take(e){for(var t={},r="",n=!1,i=0;i<e.length;i++)t[r=e[i]]=A(this.aggregatedData[r]),t[r].length&&(n=!0),delete this.aggregatedData[r];return n?t:null}}function b(e,t){return null==e?function(e){e?e.c++:e={c:1};return e}(t):t?(t.c||(t=y(t.t)),t.c+=1,t.t+=e,t.sos+=e*e,e>t.max&&(t.max=e),e<t.min&&(t.min=e),t):{t:e}}function y(e){return{t:e,min:e,max:e,sos:e*e,c:1}}function A(e){return"object"!=typeof e?[]:(0,m.D)(e,w)}function w(e,t){return t}var x=i(8632),E=i(4402),_=i(4351);var T=i(5546),S=i(7956),R=i(3239),D=i(7894),N=i(9251);class O extends f{static featureName=N.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,N.t,r),l.il&&((0,S.N)((()=>(0,T.p)("docHidden",[(0,D.z)()],void 0,N.t,this.ee)),!0),(0,R.bP)("pagehide",(()=>(0,T.p)("winPagehide",[(0,D.z)()],void 0,N.t,this.ee))),this.importAggregator())}}var I=i(3081);class j extends f{static featureName=I.t9;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,I.t9,r),this.importAggregator()}}var C=i(6660);class P{constructor(e,t,r,n){this.name="UncaughtError",this.message=e,this.sourceURL=t,this.line=r,this.column=n}}class k extends f{static featureName=C.t;#t=new Set;constructor(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,C.t,n);try{this.removeOnAbort=new AbortController}catch(e){}this.ee.on("fn-err",((e,t,n)=>{this.abortHandler&&!this.#t.has(n)&&(this.#t.add(n),(0,T.p)("err",[this.#r(n),(0,D.z)()],void 0,r.D.jserrors,this.ee))})),this.ee.on("internal-error",(e=>{this.abortHandler&&(0,T.p)("ierr",[this.#r(e),(0,D.z)(),!0],void 0,r.D.jserrors,this.ee)})),l._A.addEventListener("unhandledrejection",(e=>{this.abortHandler&&(0,T.p)("err",[this.#n(e),(0,D.z)(),!1,{unhandledPromiseRejection:1}],void 0,r.D.jserrors,this.ee)}),(0,R.m$)(!1,this.removeOnAbort?.signal)),l._A.addEventListener("error",(e=>{this.abortHandler&&(this.#t.has(e.error)?this.#t.delete(e.error):(0,T.p)("err",[this.#i(e),(0,D.z)()],void 0,r.D.jserrors,this.ee))}),(0,R.m$)(!1,this.removeOnAbort?.signal)),this.abortHandler=this.#o,this.importAggregator()}#o(){this.removeOnAbort?.abort(),this.#t.clear(),this.abortHandler=void 0}#r(e){return e instanceof Error?e:void 0!==e?.message?new P(e.message,e.filename||e.sourceURL,e.lineno||e.line,e.colno||e.col):new P("string"==typeof e?e:(0,_.P)(e))}#n(e){let t="Unhandled Promise Rejection: ";if(e?.reason instanceof Error)try{return e.reason.message=t+e.reason.message,e.reason}catch(t){return e.reason}if(void 0===e.reason)return new P(t);const r=this.#r(e.reason);return r.message=t+r.message,r}#i(e){if(e.error instanceof SyntaxError&&!/:\d+$/.test(e.error.stack?.trim())){const t=new P(e.message,e.filename,e.lineno,e.colno);return t.name=SyntaxError.name,t}return e.error instanceof Error?e.error:new P(e.message,e.filename,e.lineno,e.colno)}}var M=i(2210);let H=1;const L="nr@id";function z(e){const t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===l._A?0:(0,M.X)(e,L,(function(){return H++}))}function F(e){if("string"==typeof e&&e.length)return e.length;if("object"==typeof e){if("undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer&&e.byteLength)return e.byteLength;if("undefined"!=typeof Blob&&e instanceof Blob&&e.size)return e.size;if(!("undefined"!=typeof FormData&&e instanceof FormData))try{return(0,_.P)(e).length}catch(e){return}}}var B=i(1214),U=i(7243);class V{constructor(e){this.agentIdentifier=e}generateTracePayload(e){if(!this.shouldGenerateTrace(e))return null;var t=(0,n.DL)(this.agentIdentifier);if(!t)return null;var r=(t.accountID||"").toString()||null,i=(t.agentID||"").toString()||null,o=(t.trustKey||"").toString()||null;if(!r||!i)return null;var a=(0,E.M)(),s=(0,E.Ht)(),c=Date.now(),u={spanId:a,traceId:s,timestamp:c};return(e.sameOrigin||this.isAllowedOrigin(e)&&this.useTraceContextHeadersForCors())&&(u.traceContextParentHeader=this.generateTraceContextParentHeader(a,s),u.traceContextStateHeader=this.generateTraceContextStateHeader(a,c,r,i,o)),(e.sameOrigin&&!this.excludeNewrelicHeader()||!e.sameOrigin&&this.isAllowedOrigin(e)&&this.useNewrelicHeaderForCors())&&(u.newrelicHeader=this.generateTraceHeader(a,s,c,r,i,o)),u}generateTraceContextParentHeader(e,t){return"00-"+t+"-"+e+"-01"}generateTraceContextStateHeader(e,t,r,n,i){return i+"@nr=0-1-"+r+"-"+n+"-"+e+"----"+t}generateTraceHeader(e,t,r,n,i,o){if(!("function"==typeof l._A?.btoa))return null;var a={v:[0,1],d:{ty:"Browser",ac:n,ap:i,id:e,tr:t,ti:r}};return o&&n!==o&&(a.d.tk=o),btoa((0,_.P)(a))}shouldGenerateTrace(e){return this.isDtEnabled()&&this.isAllowedOrigin(e)}isAllowedOrigin(e){var t=!1,r={};if((0,n.Mt)(this.agentIdentifier,"distributed_tracing")&&(r=(0,n.P_)(this.agentIdentifier).distributed_tracing),e.sameOrigin)t=!0;else if(r.allowed_origins instanceof Array)for(var i=0;i<r.allowed_origins.length;i++){var o=(0,U.e)(r.allowed_origins[i]);if(e.hostname===o.hostname&&e.protocol===o.protocol&&e.port===o.port){t=!0;break}}return t}isDtEnabled(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.enabled}excludeNewrelicHeader(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.exclude_newrelic_header}useNewrelicHeaderForCors(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!1!==e.cors_use_newrelic_header}useTraceContextHeadersForCors(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.cors_use_tracecontext_headers}}var q=i(7825),G=["load","error","abort","timeout"],Z=G.length,W=n.Yu.REQ,X=n.Yu.XHR;class K extends f{static featureName=q.t;constructor(e,t){let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(super(e,t,q.t,i),(0,n.OP)(e).xhrWrappable){this.dt=new V(e),this.handler=(e,t,r,n)=>(0,T.p)(e,t,r,n,this.ee);try{const e={xmlhttprequest:"xhr",fetch:"fetch",beacon:"beacon"};l._A?.performance?.getEntriesByType("resource").forEach((t=>{if(t.initiatorType in e&&0!==t.responseStatus){const n={status:t.responseStatus},i={rxSize:t.transferSize,duration:Math.floor(t.duration),cbTime:0};Y(n,t.name),this.handler("xhr",[n,i,t.startTime,t.responseEnd,e[t.initiatorType]],void 0,r.D.ajax)}}))}catch(e){}(0,B.u5)(this.ee),(0,B.Kf)(this.ee),function(e,t,i,o){function a(e){var t=this;t.totalCbs=0,t.called=0,t.cbTime=0,t.end=x,t.ended=!1,t.xhrGuids={},t.lastSize=null,t.loadCaptureCalled=!1,t.params=this.params||{},t.metrics=this.metrics||{},e.addEventListener("load",(function(r){E(t,e)}),(0,R.m$)(!1)),l.IF||e.addEventListener("progress",(function(e){t.lastSize=e.loaded}),(0,R.m$)(!1))}function s(e){this.params={method:e[0]},Y(this,e[1]),this.metrics={}}function c(t,r){var i=(0,n.DL)(e);i.xpid&&this.sameOrigin&&r.setRequestHeader("X-NewRelic-ID",i.xpid);var a=o.generateTracePayload(this.parsedOrigin);if(a){var s=!1;a.newrelicHeader&&(r.setRequestHeader("newrelic",a.newrelicHeader),s=!0),a.traceContextParentHeader&&(r.setRequestHeader("traceparent",a.traceContextParentHeader),a.traceContextStateHeader&&r.setRequestHeader("tracestate",a.traceContextStateHeader),s=!0),s&&(this.dt=a)}}function u(e,r){var n=this.metrics,i=e[0],o=this;if(n&&i){var a=F(i);a&&(n.txSize=a)}this.startTime=(0,D.z)(),this.body=i,this.listener=function(e){try{"abort"!==e.type||o.loadCaptureCalled||(o.params.aborted=!0),("load"!==e.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof r.onload)&&"function"==typeof o.end)&&o.end(r)}catch(e){try{t.emit("internal-error",[e])}catch(e){}}};for(var s=0;s<Z;s++)r.addEventListener(G[s],this.listener,(0,R.m$)(!1))}function d(e,t,r){this.cbTime+=e,t?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof r.onload||"function"!=typeof this.end||this.end(r)}function f(e,t){var r=""+z(e)+!!t;this.xhrGuids&&!this.xhrGuids[r]&&(this.xhrGuids[r]=!0,this.totalCbs+=1)}function h(e,t){var r=""+z(e)+!!t;this.xhrGuids&&this.xhrGuids[r]&&(delete this.xhrGuids[r],this.totalCbs-=1)}function p(){this.endTime=(0,D.z)()}function g(e,r){r instanceof X&&"load"===e[0]&&t.emit("xhr-load-added",[e[1],e[2]],r)}function m(e,r){r instanceof X&&"load"===e[0]&&t.emit("xhr-load-removed",[e[1],e[2]],r)}function v(e,t,r){t instanceof X&&("onload"===r&&(this.onload=!0),("load"===(e[0]&&e[0].type)||this.onload)&&(this.xhrCbStart=(0,D.z)()))}function b(e,r){this.xhrCbStart&&t.emit("xhr-cb-time",[(0,D.z)()-this.xhrCbStart,this.onload,r],r)}function y(e){var t,r=e[1]||{};if("string"==typeof e[0]?0===(t=e[0]).length&&l.il&&(t=""+l._A.location.href):e[0]&&e[0].url?t=e[0].url:l._A?.URL&&e[0]&&e[0]instanceof URL?t=e[0].href:"function"==typeof e[0].toString&&(t=e[0].toString()),"string"==typeof t&&0!==t.length){t&&(this.parsedOrigin=(0,U.e)(t),this.sameOrigin=this.parsedOrigin.sameOrigin);var n=o.generateTracePayload(this.parsedOrigin);if(n&&(n.newrelicHeader||n.traceContextParentHeader))if(e[0]&&e[0].headers)s(e[0].headers,n)&&(this.dt=n);else{var i={};for(var a in r)i[a]=r[a];i.headers=new Headers(r.headers||{}),s(i.headers,n)&&(this.dt=n),e.length>1?e[1]=i:e.push(i)}}function s(e,t){var r=!1;return t.newrelicHeader&&(e.set("newrelic",t.newrelicHeader),r=!0),t.traceContextParentHeader&&(e.set("traceparent",t.traceContextParentHeader),t.traceContextStateHeader&&e.set("tracestate",t.traceContextStateHeader),r=!0),r}}function A(e,t){this.params={},this.metrics={},this.startTime=(0,D.z)(),this.dt=t,e.length>=1&&(this.target=e[0]),e.length>=2&&(this.opts=e[1]);var r,n=this.opts||{},i=this.target;"string"==typeof i?r=i:"object"==typeof i&&i instanceof W?r=i.url:l._A?.URL&&"object"==typeof i&&i instanceof URL&&(r=i.href),Y(this,r);var o=(""+(i&&i instanceof W&&i.method||n.method||"GET")).toUpperCase();this.params.method=o,this.body=n.body,this.txSize=F(n.body)||0}function w(e,t){var n;this.endTime=(0,D.z)(),this.params||(this.params={}),this.params.status=t?t.status:0,"string"==typeof this.rxSize&&this.rxSize.length>0&&(n=+this.rxSize);var o={txSize:this.txSize,rxSize:n,duration:(0,D.z)()-this.startTime};i("xhr",[this.params,o,this.startTime,this.endTime,"fetch"],this,r.D.ajax)}function x(e){var t=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var o=0;o<Z;o++)e.removeEventListener(G[o],this.listener,!1);t.aborted||(n.duration=(0,D.z)()-this.startTime,this.loadCaptureCalled||4!==e.readyState?null==t.status&&(t.status=0):E(this,e),n.cbTime=this.cbTime,i("xhr",[t,n,this.startTime,this.endTime,"xhr"],this,r.D.ajax))}}function E(e,n){e.params.status=n.status;var i=function(e,t){var r=e.responseType;return"json"===r&&null!==t?t:"arraybuffer"===r||"blob"===r||"json"===r?F(e.response):"text"===r||""===r||void 0===r?F(e.responseText):void 0}(n,e.lastSize);if(i&&(e.metrics.rxSize=i),e.sameOrigin){var o=n.getResponseHeader("X-NewRelic-App-Data");o&&((0,T.p)(I.mY,["Ajax/CrossApplicationTracing/Header/Seen"],void 0,r.D.metrics,t),e.params.cat=o.split(", ").pop())}e.loadCaptureCalled=!0}t.on("new-xhr",a),t.on("open-xhr-start",s),t.on("open-xhr-end",c),t.on("send-xhr-start",u),t.on("xhr-cb-time",d),t.on("xhr-load-added",f),t.on("xhr-load-removed",h),t.on("xhr-resolved",p),t.on("addEventListener-end",g),t.on("removeEventListener-end",m),t.on("fn-end",b),t.on("fetch-before-start",y),t.on("fetch-start",A),t.on("fn-start",v),t.on("fetch-done",w)}(e,this.ee,this.handler,this.dt),this.importAggregator()}}}function Y(e,t){var r=(0,U.e)(t),n=e.params||e;n.hostname=r.hostname,n.port=r.port,n.protocol=r.protocol,n.host=r.hostname+":"+r.port,n.pathname=r.pathname,e.parsedOrigin=r,e.sameOrigin=r.sameOrigin}var J=i(3614);const{BST_RESOURCE:Q,RESOURCE:ee,START:te,END:re,FEATURE_NAME:ne,FN_END:ie,FN_START:oe,PUSH_STATE:ae}=J;var se=i(7056),ce=i(7144);class ue extends f{static featureName=ce.t9;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,ce.t9,r);try{const e=JSON.parse(localStorage.getItem("NRBA_SESSION"));e.sessionReplayMode!==se.IK.OFF?this.#a(e.sessionReplayMode):this.importAggregator({})}catch(e){this.importAggregator({})}}async#a(e){const{Recorder:t}=await Promise.all([i.e(111),i.e(433)]).then(i.bind(i,4136));this.recorder=new t({mode:e,agentIdentifier:this.agentIdentifier}),this.recorder.startRecording(),this.importAggregator({recorder:this.recorder})}}var de=i(7836);const{FEATURE_NAME:le,START:fe,END:he,BODY:pe,CB_END:ge,JS_TIME:me,FETCH:ve,FN_START:be,CB_START:ye,FN_END:Ae}=de;var we=i(4649);class xe extends f{static featureName=we.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,we.t,r),this.importAggregator()}}new class extends t{constructor(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,E.ky)(16);super(),l._A?(this.agentIdentifier=r,this.sharedAggregator=new v({agentIdentifier:this.agentIdentifier}),this.features={},(0,x.h5)(r,this),this.desiredFeatures=new Set(t.features||[]),this.desiredFeatures.add(p),(0,s.j)(this,t,t.loaderType||"agent"),this.run()):(0,e.Z)("Failed to initial the agent. Could not determine the runtime environment.")}get config(){return{info:(0,n.C5)(this.agentIdentifier),init:(0,n.P_)(this.agentIdentifier),loader_config:(0,n.DL)(this.agentIdentifier),runtime:(0,n.OP)(this.agentIdentifier)}}run(){try{const t=a(this.agentIdentifier),n=[...this.desiredFeatures];n.sort(((e,t)=>r.p[e.featureName]-r.p[t.featureName])),n.forEach((n=>{if(t[n.featureName]||n.featureName===r.D.pageViewEvent){const i=function(e){switch(e){case r.D.ajax:return[r.D.jserrors];case r.D.sessionTrace:return[r.D.ajax,r.D.pageViewEvent];case r.D.sessionReplay:return[r.D.sessionTrace];case r.D.pageViewTiming:return[r.D.pageViewEvent];default:return[]}}(n.featureName);i.every((e=>t[e]))||(0,e.Z)("".concat(n.featureName," is enabled but one or more dependent features has been disabled (").concat((0,_.P)(i),"). This may cause unintended consequences or missing data...")),this.features[n.featureName]=new n(this.agentIdentifier,this.sharedAggregator)}}))}catch(t){(0,e.Z)("Failed to initialize all enabled instrument classes (agent aborted) -",t);for(const e in this.features)this.features[e].abortHandler?.();const r=(0,x.fP)();return delete r.initializedAgents[this.agentIdentifier]?.api,delete r.initializedAgents[this.agentIdentifier]?.features,delete this.sharedAggregator,r.ee?.abort(),delete r.ee?.get(this.agentIdentifier),!1}}}({features:[K,p,O,class extends f{static featureName=ne;constructor(e,t){if(super(e,t,ne,!(arguments.length>2&&void 0!==arguments[2])||arguments[2]),!l.il)return;const n=this.ee;let i;(0,B.QU)(n),this.eventsEE=(0,B.em)(n),this.eventsEE.on(oe,(function(e,t){this.bstStart=(0,D.z)()})),this.eventsEE.on(ie,(function(e,t){(0,T.p)("bst",[e[0],t,this.bstStart,(0,D.z)()],void 0,r.D.sessionTrace,n)})),n.on(ae+te,(function(e){this.time=(0,D.z)(),this.startPath=location.pathname+location.hash})),n.on(ae+re,(function(e){(0,T.p)("bstHist",[location.pathname+location.hash,this.startPath,this.time],void 0,r.D.sessionTrace,n)}));try{i=new PerformanceObserver((e=>{const t=e.getEntries();(0,T.p)(Q,[t],void 0,r.D.sessionTrace,n)})),i.observe({type:ee,buffered:!0})}catch(e){}this.importAggregator({resourceObserver:i})}},ue,j,xe,k,class extends f{static featureName=le;constructor(e,t){if(super(e,t,le,!(arguments.length>2&&void 0!==arguments[2])||arguments[2]),!l.il)return;if(!(0,n.OP)(e).xhrWrappable)return;try{this.removeOnAbort=new AbortController}catch(e){}let r,i=0;const o=this.ee.get("tracer"),a=(0,B._L)(this.ee),s=(0,B.Lg)(this.ee),c=(0,B.BV)(this.ee),u=(0,B.Kf)(this.ee),d=this.ee.get("events"),f=(0,B.u5)(this.ee),h=(0,B.QU)(this.ee),p=(0,B.Gm)(this.ee);function g(e,t){h.emit("newURL",[""+window.location,t])}function m(){i++,r=window.location.hash,this[be]=(0,D.z)()}function v(){i--,window.location.hash!==r&&g(0,!0);var e=(0,D.z)();this[me]=~~this[me]+e-this[be],this[Ae]=e}function b(e,t){e.on(t,(function(){this[t]=(0,D.z)()}))}this.ee.on(be,m),s.on(ye,m),a.on(ye,m),this.ee.on(Ae,v),s.on(ge,v),a.on(ge,v),this.ee.buffer([be,Ae,"xhr-resolved"],this.featureName),d.buffer([be],this.featureName),c.buffer(["setTimeout"+he,"clearTimeout"+fe,be],this.featureName),u.buffer([be,"new-xhr","send-xhr"+fe],this.featureName),f.buffer([ve+fe,ve+"-done",ve+pe+fe,ve+pe+he],this.featureName),h.buffer(["newURL"],this.featureName),p.buffer([be],this.featureName),s.buffer(["propagate",ye,ge,"executor-err","resolve"+fe],this.featureName),o.buffer([be,"no-"+be],this.featureName),a.buffer(["new-jsonp","cb-start","jsonp-error","jsonp-end"],this.featureName),b(f,ve+fe),b(f,ve+"-done"),b(a,"new-jsonp"),b(a,"jsonp-end"),b(a,"cb-start"),h.on("pushState-end",g),h.on("replaceState-end",g),window.addEventListener("hashchange",g,(0,R.m$)(!0,this.removeOnAbort?.signal)),window.addEventListener("load",g,(0,R.m$)(!0,this.removeOnAbort?.signal)),window.addEventListener("popstate",(function(){g(0,i>1)}),(0,R.m$)(!0,this.removeOnAbort?.signal)),this.abortHandler=this.#o,this.importAggregator()}#o(){this.removeOnAbort?.abort(),this.abortHandler=void 0}}],loaderType:"spa"})})()})();</script>
<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,user-scalable=no">
<meta http-equiv="Cache-Control" content="no-cache, must-revalidate">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Pragma-directive: no-cache">
<meta http-equiv="Cache-directive: no-cache">
<meta http-equiv="Expires" content="0">
<!-- ngIf: facebookDomainVerification -->
<title>City of LA - Public - Online tee times made EZ</title>
<link rel="stylesheet" href="assets/css/main.min.css">

<link rel="stylesheet" href="app/all-23b5108923.min.css">
<link rel="stylesheet" href="assets/css/font-awesome.min.css">
<link rel="stylesheet" href="bower_components/angular-busy/angular-busy.min.css">
<style type="text/css">@font-face {font-family:Arvo;font-style:normal;font-weight:400;src:url(/cf-fonts/s/arvo/5.0.18/latin/400/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}</style>
<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script async="" src="//www.googletagmanager.com/gtm.js?id=GTM-TC3W9J"></script><script type="text/javascript">
        var dataLayer = [{ 'Event': 'Load', 'Page Hostname': window.location.hostname }];
    </script>
<script type="text/javascript">
        (function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                    '//www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-TC3W9J');
    </script>
</head>
<body>

<noscript>
        <iframe src="//www.googletagmanager.com/ns.html?id=GTM-TC3W9J"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>

<script type="text/javascript">
        // fix for IE9
        (function () {
            window.console = window.console || {};
            window.console.log = window.console.log || function () { };
        })();
    </script>
<script type="text/ng-template" id="loading.html">
        <div style="{{loadingIndicatorStyle}}">
            <div class="loading-indicator">
                <i class="fa-li fa fa-spinner fa-spin"></i>
            </div>
        </div>
    </script>
<!-- ngInclude: 'app/styles.html' --><div data-ng-include="'app/styles.html'" class="ng-scope"><style class="ng-binding ng-scope">
    .filter li .date-input {
        background-image: -ms-linear-gradient(top, #339f33 1%, #339f33 100%);
        background-image: -moz-linear-gradient(top, #339f33 1%, #339f33 100%);
        background-image: -o-linear-gradient(top, #339f33 1%, #339f33 100%);
        background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0.01, #339f33), color-stop(1, #339f33));
        background-image: -webkit-linear-gradient(top, #339f33 0%, #339f33 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#339f33', endColorstr='#339f33'); zoom: 1;

        background-image: linear-gradient(to bottom, #339f33 1%, #339f33 100%);
    }

    .in-box {
        border: 1px solid #339f33;
    }

    /* line 8, ../scss/modules/_home.scss */
    .horizontal-separator {
        border-top: 1px solid #339f33;
    }

    /* line 12, ../scss/modules/_home.scss */
    .vertical-separator {
        border-right: 1px solid #339f33;
    }

    .btn-default {
        background-image: -ms-linear-gradient(top, #339f33 1%, #339f33 100%);
        background-image: -moz-linear-gradient(top, #339f33 1%, #339f33 100%);
        background-image: -o-linear-gradient(top, #339f33 1%, #339f33 100%);
        background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0.01, #339f33), color-stop(1, #339f33));
        background-image: -webkit-linear-gradient(top, #339f33 0%, #339f33 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#339f33', endColorstr='#339f33'); zoom: 1;

        background-image: linear-gradient(to bottom, #339f33 1%, #339f33 100%);
    }

    .or-spacer .mask:after {
        box-shadow: 0 0 8px #339f33;
    }

    .or-spacer .mask:after {
        box-shadow: 0 0 8px #339f33;
    }

    .or-spacer-vertical.left .mask:after {
        box-shadow: 0 0 8px #339f33;
    }

    .or-spacer-vertical.right .mask:before {
        box-shadow: 0 0 8px #339f33;
    }

    .filter li .date-input {
        background-image: -ms-linear-gradient(top, #339f33 1%, #339f33 100%);
        background-image: -moz-linear-gradient(top, #339f33 1%, #339f33 100%);
        background-image: -o-linear-gradient(top, #339f33 1%, #339f33 100%);
        background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0.01, #339f33), color-stop(1, #339f33));
        background-image: -webkit-linear-gradient(top, #339f33 0%, #339f33 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#339f33', endColorstr='#339f33'); zoom: 1;

        background-image: linear-gradient(to bottom, #339f33 1%, #339f33 100%);
    }

    .ui-widget-header {
        background: #339f33 !important;
    }

    .primary-btn {
        background-image: -ms-linear-gradient(top, #339f33 1%, #339f33 100%);
        background-image: -moz-linear-gradient(top, #339f33 1%, #339f33 100%);
        background-image: -o-linear-gradient(top, #339f33 1%, #339f33 100%);
        background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0.01, #339f33), color-stop(1, #339f33));
        background-image: -webkit-linear-gradient(top, #339f33 0%, #339f33 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#339f33', endColorstr='#339f33'); zoom: 1;

        background-image: linear-gradient(to bottom, #339f33 1%, #339f33 100%);
    }

    .select-pricing-modal .pricing-players label.active {
        background: #339f33;
    }

    .select-pricing-modal .price-listing:hover, .select-pricing-modal .price-listing.active {
        background: #339f33;
    }

    .ui-widget-header {
        background: #339f33 !important;
    }

    .ui-widget-header .ui-datepicker-prev, .ui-widget-header .ui-datepicker-next {
        color: #fff !important;
        background: #339f33 !important;
        }

    .ngrs-range-slider .ngrs-join {
        background-color: #339f33;
        background-image: linear-gradient(#339f33, #339f33);
    }

    a {
        color: #339f33;
    }

    .filter li .filter-window .ui-widget-header {
        background: #339f33;
    }

    .top-nav .account-menu ul li:hover {
        background-color: #339f33;
    }

    .top-nav .account-menu .account-details a:hover {
        color: #339f33;
    }

    .select-pricing-modal .pricing-players label.active {
        background: #339f33;
    }

    .select-pricing-modal ul.selectPricingList li .price-listing:hover, .select-pricing-modal ul.selectPricingList li .price-listing.active {
        background: #339f33;
    }

    .confirmation-page h1 .num, .cart-page h1 .num {
        background: #339f33;
        box-shadow: 0px 0px 2px #339f33,inset -1px 0px 2px #fff;
    }

    .page-header {
        border-bottom: solid 5px #339f33;
    }

    .reservations .reservation-list .actions i {
        color: #339f33;
    }

    .internal-footer a {
        color: #339f33;
    }

    .course {
        background-color: #808080 !important;
        color: #FFFFFF !important;
    }

    header {
        border-bottom: 3px solid #339f33;
    }

    footer {
        border-top: 3px solid #339f33;
    }

    .teeSheetHeader {
        background-image: -ms-linear-gradient(top, #339f33 1%, #339f33 100%);
        background-image: -moz-linear-gradient(top, #339f33 1%, #339f33 100%);
        background-image: -o-linear-gradient(top, #339f33 1%, #339f33 100%);
        background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0.01, #339f33), color-stop(1, #339f33));
        background-image: -webkit-linear-gradient(top, #339f33 0%, #339f33 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#339f33', endColorstr='#339f33');
        zoom: 1;
        background-image: linear-gradient(to bottom, #339f33 1%, #339f33 100%);
    }

    @media (max-width: 767px) {
        header {
            background: url() center no-repeat;
            height: 60px;
            display: none;
        }

        header .logo {
            max-height: 57px;
        }

        footer {
            background: url() center no-repeat;
            height: 60px;
            display: none;
        }
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        header {
            background: url() center no-repeat;
            height: 100px;
            display: none;
        }

        header .logo {
            max-height: 97px;
        }

        footer {
            background: url() center no-repeat;
            height: 100px;
            display: none;
        }
    }

    @media (min-width: 1201px) {
        header {
            background: url() center no-repeat;
            height: 100px;
            display: none;
        }

        header .logo {
            max-height: 97px;
        }

        footer {
            background: url() center no-repeat;
            height: 100px;
            display: none;
        }
    }
</style>
<script defer="" src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon="{&quot;rayId&quot;:&quot;85cf41c3bce77cf6&quot;,&quot;version&quot;:&quot;2024.2.1&quot;,&quot;token&quot;:&quot;0f41094787234f798612ac92c11e032f&quot;}" crossorigin="anonymous" class="ng-scope"></script>
</div>
<!-- ngInclude: 'app/modals.html' --><div data-ng-include="'app/modals.html'" class="ng-scope"><!-- alert (OK) alert -->
<script type="text/ng-template" id="alert.html" class="ng-scope">
    <div class="col-xs-12 p-b-10 p-t-10 confirm-modal">
        <!-- body -->
        <div class="col-xs-12">
            <h1 title="title" style="width: inherit"><strong data-ng-bind-html="ec.title"></strong>&shy;</h1>
            <div data-ng-bind-html="ec.html" ></div>
        </div>

        <!-- button(s) -->
        <div class="col-xs-12 center">
            <button class="btn btn-10 btn-default" data-ng-click="ec.onYesClick()" data-ng-enter="ec.onYesClick()">OK</button>
        </div>
    </div>
</script>

<script type="text/ng-template" id="confirm.html" class="ng-scope">
    <div class="col-xs-12 p-b-10 p-t-10 confirm-modal" data-ng-enter="ec.onYesClick()">
        <!-- title + body -->
        <div class="col-xs-12">
            <h2 title="title"><strong data-ng-bind="ec.title"></strong>&shy;</h2>
            <div class="m-b-15" data-ng-bind-html="ec.html" ></div>
        </div>

        <!-- button(s) -->
        <div class="col-xs-12">
            <div class="col-xs-6 right">
                <button class="btn btn-10 btn-default" data-ng-click="ec.onYesClick()">Yes</button>
            </div>
            <div class="col-xs-6 left">
                <button class="btn btn-10 btn-default gray" data-ng-click="ec.onNoClick()">No</button>
            </div>
        </div>
    </div>
</script>

<script type="text/ng-template" id="alertSkillSet.html" class="ng-scope">
    <div class="col-xs-12 p-b-10 p-t-10 confirm-modal">
        <div class="col-xs-12" title="To learn more about Find a Game please go to: http://www.findagame.io/">
            <a href="http://www.findagame.io/" target="_blank">
                <h1><strong data-ng-bind-html="ec.title" ></strong></h1>
            </a>
            <div data-ng-bind-html="ec.html"></div>
        </div>
        <div class="col-xs-12 m-t-05 min-h-30">
            <div class="col-xs-12">
                <select name="SkillLevelID" class="edit" data-ng-model="ec.skillLevelId" ng-change="ec.onSkillSetUpdate();" autofocus>
                    <option value="" disabled>Undefined</option>
                    <option value="1">70's</option>
                    <option value="2">80's</option>
                    <option value="3">90's</option>
                    <option value="4">100's</option>
                    <option value="0">Prefer not to share</option>
                </select>

                <span data-ng-bind="ec.skillLevelBinding()" class="read hide"></span>
            </div>
        </div>
        <div class="col-xs-12 center">
            <button id="fgOKButton" class="btn btn-10 btn-default" data-ng-disabled="!ec.validSkillSet" data-ng-click="ec.onSkillSetSubmitClick()">OK</button>
        </div>
    </div>
</script>

<script type="text/ng-template" id="alertModifyReservation.html" controller="ec" class="ng-scope">
    <div class="col-xs-12 p-b-10 p-t-10 confirm-modal">
        <h1><strong data-ng-bind-html="ec.title" ></strong></h1>
        <div class="col-xs-12" title="To change the number of golfers in your reservation, select a number to delete from reservation.">
            <div data-ng-bind-html="ec.html"></div>
        </div>
        <div class="col-xs-12 m-t-05 min-h-30">
            <div class="col-xs-12">
                <select id="numGolfers" name="numberOfPlayers" class="preSearch-select-player" data-ng-model="ec.numGolfers"
                        ng-options="golferNumList.value as golferNumList.value for golferNumList in ec.golferNumList"
                        ng-init="ec.golferNumList[$index] = ec.golferNumList[$index].value" title="Select Number of Players to Remove From Reservation" ></select>
            </div>
        </div>
        <div class="col-xs-6  center">
            <button class="btn btn-10 btn-default gray" data-ng-click="ec.onNoClick()">Cancel</button>
        </div>
        <div class="col-xs-6 center">
            <button class="btn btn-10 btn-default" data-ng-click="ec.onModifyReservationOKClick()">OK</button>
        </div>
    </div>
</script>

<script type="text/ng-template" id="alertSendToCalendar.html" class="ng-scope">
    <div class="col-xs-12 p-b-10 p-t-10 confirm-modal center" data-ng-enter="ec.onNoClick()">
        <div class="col-xs-12 center" title="Choose a Calendar to Update">
            <h1>
                <strong>{{message}}</strong>
            </h1>
        </div>
        <div class="add-to-calendar center" id="calendarAnchors">
            <div>
                <a target="_blank" href="{{hrefGoogleCalendar}}">Google Calendar</a><br />
            </div>
            <div class="{{showYahoo}}">
                <a target="_blank" href="{{hrefYahooCalendar}}">Yahoo Calendar</a><br />
            </div>
            <div class="{{showOutlook}}">
                <a target="_blank" href="{{hrefOutlookCalendar}}">Outlook Calendar</a><br />
            </div>
            <div>
                <a href="" data-ng-click="downloadIcs()" download="TeeTimeEvent.ics">{{iCal}}</a><br />
            </div>
        </div>
        <br />
        <div class="col-xs-12 center">
            <button class="btn btn-10 btn-default green center" data-ng-click="ec.onNoClick()">Go Back</button>
        </div>
    </div>
</script>

<script type="text/ng-template" id="enterGolferName.html" controller="ec" class="ng-scope">
    <div class="col-xs-12 p-b-10 p-t-10 confirm-modal">
        <h1><strong data-ng-bind-html="ec.title" ></strong></h1>
        <div class="col-xs-12" title="Please type in the name of a player">
            <div data-ng-bind-html="ec.html" ></div>
        </div>
        <div class="col-xs-12 m-t-05 min-h-30">
            <div class="col-xs-12">
                <input type="text" placeholder="Last Name, First Name" id="golferName"
                       data-ng-model="ec.golferName" maxlength="50"
                       data-ng-model-options="{ debounce: 500 }"
                       class="form-control player-text-box"
                       title="Enter Golfer Name" />
            </div>
        </div>
        <div class="col-xs-6  center">
            <button class="btn btn-10 btn-default dark" data-ng-click="ec.onCancelClick()">Cancel</button>
        </div>
        <div class="col-xs-6 center">
            <button class="btn btn-10 btn-default" data-ng-click="ec.onOKClick()">OK</button>
        </div>
    </div>
</script><script defer="" src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon="{&quot;rayId&quot;:&quot;85cf41c3bce97cf6&quot;,&quot;version&quot;:&quot;2024.2.1&quot;,&quot;token&quot;:&quot;0f41094787234f798612ac92c11e032f&quot;}" crossorigin="anonymous" class="ng-scope"></script>
</div>
<div>
<div class="loading-div" cg-busy="gcIsLoadingDfd"><div class="cg-busy cg-busy-backdrop cg-busy-backdrop-animation ng-scope ng-hide" ng-show="$cgBusyIsActive() === true"></div><div class="cg-busy cg-busy-animation ng-scope ng-hide" ng-show="$cgBusyIsActive() === true">
        <div style="">
            <div class="loading-indicator">
                <i class="fa-li fa fa-spinner fa-spin"></i>
            </div>
        </div>
    </div></div>
<div data-ng-show="!isLoading" class="">
<!-- ngIf: !isSafariIniFrame --><!-- ngInclude: 'app/shared/header/header.html' --><div ng-if="!isSafariIniFrame" class="hidden-print ng-scope" data-ng-include="'app/shared/header/header.html'"><div data-ng-controller="headerController" class="container m-b-10 col-xs-12 nopadding ng-scope" data-ng-init="init()">    
    <header class="m-b-10" data-ng-click="customerURL()"></header>
</div>
</div><!-- end ngIf: !isSafariIniFrame -->
<div class="container nopadding-xs">
<!-- ngIf: !hideCurrentTime -->
<!-- uiView: undefined --><ui-view name="mainView" class="col-xs-12 nopadding ng-scope"><div class="search-result ng-scope" ng-app="ezLinks" ng-controller="searchController as ec" cg-busy="ec.isLoadingDfd" style="position: relative;">
    <!-- ngIf: !ec.isSafariIniFrame --><div data-ng-if="!ec.isSafariIniFrame" class="row row-offcanvas row-offcanvas-left col-xs-12 nopadding ng-scope" data-ng-class="{ 'active': ec.showMobileFilters }">
        <input type="hidden" id="csrfToken" value="06683009-a394-4df2-8fd4-dc45ebea3bf3">

        <!-- ngIf: ec.isInMoveReservationState -->

        <div class="col-xs-6 col-sm-3 sidebar-offcanvas nopadding search-filter-height" data-ng-class="ec.filterHeightClass()" id="sidebar" role="navigation">

            <ul class="filter">
                <!-- date-and-time picker (desktop and search-and-hold) -->
                <li data-ng-class="ec.isHideDateTimePicker()" class="hidden-xs">
                    <div class="date-input">
                        <!-- calendar -->
                        <input type="text" datepicker="" id="pickerDate" name="pickerDate" data-ng-model="ec.filterSettings.date" title="Select a date to reserve a tee time" alt="Select a date to reserve a tee time" placeholder="Click here for date" data-ng-change="ec.onDateChange()" min-date="ec.minDate" max-date="ec.maxDate" aria-describedby="pickerDate" aria-labelledby="pickerDate" style="margin-bottom: 0px" ng-disabled="ec.isLoading" class="ng-pristine ng-untouched ng-valid ng-isolate-scope hasDatepicker">
                        <label aria-labelledby="pickerDate" for="pickerDate" title="Select a date to reserve a tee time" aria-describedby="pickerDate" class="btn" onclick="javascript:void(0)" style="padding-top: 5px; padding-bottom: 0px; border-top: 0px; border-bottom: 0px; height: 0px;">
                            <i alt="Select a date to reserve a tee time" class="fa fa-calendar" title="Select a date to reserve a tee time" aria-describedby="pickerDate" aria-labelledby="pickerDate"></i>­
                        </label>

                        <!-- time range slider -->
                        <label style="color: #ffffff; text-align: center; top: 0px;" class="ng-binding">5:00 AM–7:00 PM</label>
                        <div class="ngrs-range-slider ng-isolate-scope" range-slider="" style="margin: 10px 0 0px;" on-handle-up="ec.onTeeTimeFilterHandleUp()" pin-handle="none" prevent-equal-min-max="!ec.isSearchAndHold" min="ec.timeRange.min" max="ec.timeRange.max" model-min="ec.timeRange.userMinOne" model-max="ec.timeRange.userMaxOne" step="30" ng-class="{ 'div-disabled': ec.isLoading}"><div class="ngrs-runner"><div class="ngrs-handle ngrs-handle-min" style="left: 0%; display: block;"><i></i></div><div class="ngrs-handle ngrs-handle-max" style="left: 100%; display: block;"><i></i></div><div class="ngrs-join" style="left: 0%; right: 0%;"></div></div><div class="ngrs-value-runner"><div class="ngrs-value ngrs-value-min ng-hide" ng-show="showValues"><div class="ng-binding">300</div></div><div class="ngrs-value ngrs-value-max ng-hide" ng-show="showValues"><div class="ng-binding">1140</div></div></div></div>
                        <div class="search-timeofplayhint ng-binding" style="color: #ffffff; text-align: center;"></div>
                    </div>
                </li>

                <!-- time-of-day filter (mobile only) -->
                <!-- ngIf: ec.canShowTimeOfDayFilter() --><li class="visible-xs ng-scope" data-ng-class="ec.timeOfDayFilterClass()" data-ng-if="ec.canShowTimeOfDayFilter()">
                    <filterheader data-ng-click="ec.onTimeOfDayFilterClick()">
                        Time of Day<i class="fa toggle-arrow fa-chevron-up" data-ng-class="ec.timeOfDayHeaderArrowClass()"></i>
                    </filterheader>
                    <div class="filter-window slider filter-body in collapse" uib-collapse="ec.isTimeOfDayFilterCollapsed" aria-expanded="true" aria-hidden="false" style="height: auto;">
                        <label class="ng-binding">5:00 AM–7:00 PM</label>
                        <div class="ngrs-range-slider ng-isolate-scope" range-slider="" on-handle-up="ec.onTimeOfDaySliderHandleUp()" pin-handle="none" prevent-equal-min-max="!ec.isSearchAndHold" min="ec.timeRange.min" max="ec.timeRange.max" model-min="ec.timeRange.userMinOne" model-max="ec.timeRange.userMaxOne" step="30" ng-class="{ 'div-disabled': ec.isLoading}"><div class="ngrs-runner"><div class="ngrs-handle ngrs-handle-min" style="left: 0%; display: block;"><i></i></div><div class="ngrs-handle ngrs-handle-max" style="left: 100%; display: block;"><i></i></div><div class="ngrs-join" style="left: 0%; right: 0%;"></div></div><div class="ngrs-value-runner"><div class="ngrs-value ngrs-value-min ng-hide" ng-show="showValues"><div class="ng-binding">300</div></div><div class="ngrs-value ngrs-value-max ng-hide" ng-show="showValues"><div class="ng-binding">1140</div></div></div></div>
                    </div>
                </li><!-- end ngIf: ec.canShowTimeOfDayFilter() -->

                <!-- players filter-->
                <!-- ngIf: ec.showPlayersFilter --><li data-ng-class="ec.playersFilterClass()" data-ng-if="ec.showPlayersFilter" class="ng-scope">
                    <filterheader data-ng-click="ec.onPlayersFilterArrowClick()">
                        Players<i class="fa toggle-arrow fa-chevron-up" data-ng-class="ec.playersHeaderArrowClass()"></i>
                    </filterheader>
                    <div uib-collapse="ec.isPlayersFilterCollapsed" class="in collapse" aria-expanded="true" aria-hidden="false" style="height: auto;">
                        <div class="btn-group col-xs-12 menu-dropdown dropdown" uib-dropdown="">
                            <button id="players-button" type="button" class="btn btn-white col-xs-12 dropdown-toggle" uib-dropdown-toggle="" ng-disabled="ec.isLoading" aria-haspopup="true" aria-expanded="false">
                                <div class="dropdown-selected-item col-xs-6">
                                    <span data-ng-bind="ec.playersFilterDataBinding()" class="ng-binding">4</span>
                                </div>
                                <div class="dropdown-selected-item-caret col-xs-6">
                                    <span class="caret"></span>
                                </div>
                            </button>
                            <ul uib-dropdown-menu="" role="menu" aria-labelledby="players-button" class="col-sm-12 dropdown-menu">
                                <!-- ngRepeat: p in ec.data.NumPlayersList --><li data-ng-repeat="p in ec.data.NumPlayersList" role="menuitem" data-ng-click="ec.onPlayersFilterChange($index)" class="ng-scope">
                                    <a href="javascript:void(0)" data-ng-bind="p" class="ng-binding">1</a>
                                </li><!-- end ngRepeat: p in ec.data.NumPlayersList --><li data-ng-repeat="p in ec.data.NumPlayersList" role="menuitem" data-ng-click="ec.onPlayersFilterChange($index)" class="ng-scope">
                                    <a href="javascript:void(0)" data-ng-bind="p" class="ng-binding">2</a>
                                </li><!-- end ngRepeat: p in ec.data.NumPlayersList --><li data-ng-repeat="p in ec.data.NumPlayersList" role="menuitem" data-ng-click="ec.onPlayersFilterChange($index)" class="ng-scope">
                                    <a href="javascript:void(0)" data-ng-bind="p" class="ng-binding">3</a>
                                </li><!-- end ngRepeat: p in ec.data.NumPlayersList --><li data-ng-repeat="p in ec.data.NumPlayersList" role="menuitem" data-ng-click="ec.onPlayersFilterChange($index)" class="ng-scope">
                                    <a href="javascript:void(0)" data-ng-bind="p" class="ng-binding">4</a>
                                </li><!-- end ngRepeat: p in ec.data.NumPlayersList --><li data-ng-repeat="p in ec.data.NumPlayersList" role="menuitem" data-ng-click="ec.onPlayersFilterChange($index)" class="ng-scope">
                                    <a href="javascript:void(0)" data-ng-bind="p" class="ng-binding">5</a>
                                </li><!-- end ngRepeat: p in ec.data.NumPlayersList -->
                            </ul>
                        </div>
                        <hr class="clear" style="margin-bottom: 0">

                    </div>
                </li><!-- end ngIf: ec.showPlayersFilter -->

                <!-- holes filter -->
                <!-- ngIf: ec.showHolesFilter --><li data-ng-class="ec.holesFilterClass()" data-ng-if="ec.showHolesFilter" class="ng-scope">
                    <filterheader data-ng-click="ec.onHolesFilterArrowClick()">
                        Holes
                        <i class="fa toggle-arrow fa-chevron-up" data-ng-class="ec.holesHeaderArrowClass()"></i>
                    </filterheader>
                    <div uib-collapse="ec.isHolesFilterCollapsed" class="in collapse" aria-expanded="true" aria-hidden="false" style="height: auto;">
                        <div class="btn-group col-xs-12 menu-dropdown dropdown" uib-dropdown="">
                            <button id="holes-button" type="button" class="btn btn-white col-xs-12 dropdown-toggle" uib-dropdown-toggle="" ng-disabled="ec.isLoading" aria-haspopup="true" aria-expanded="false">
                                <div class="dropdown-selected-item col-xs-6">
                                    <span data-ng-bind="ec.holesFilterDataBinding()" class="ng-binding">Any</span>
                                </div>
                                <div class="dropdown-selected-item-caret col-xs-6">
                                    <span class="caret"></span>
                                </div>
                            </button>
                            <ul uib-dropdown-menu="" role="menu" aria-labelledby="holes-button" class="col-sm-12 dropdown-menu">
                                <!-- ngRepeat: h in ec.data.HolesList --><li data-ng-repeat="h in ec.data.HolesList" role="menuitem" data-ng-click="ec.onHolesFilterChange($index)" class="ng-scope">
                                    <a href="javascript:void(0)" data-ng-bind="h" class="ng-binding">Any</a>
                                </li><!-- end ngRepeat: h in ec.data.HolesList --><li data-ng-repeat="h in ec.data.HolesList" role="menuitem" data-ng-click="ec.onHolesFilterChange($index)" class="ng-scope">
                                    <a href="javascript:void(0)" data-ng-bind="h" class="ng-binding">18</a>
                                </li><!-- end ngRepeat: h in ec.data.HolesList --><li data-ng-repeat="h in ec.data.HolesList" role="menuitem" data-ng-click="ec.onHolesFilterChange($index)" class="ng-scope">
                                    <a href="javascript:void(0)" data-ng-bind="h" class="ng-binding">9</a>
                                </li><!-- end ngRepeat: h in ec.data.HolesList -->
                            </ul>
                        </div>
                        <hr class="clear" style="margin-bottom: 0">
                    </div>
                </li><!-- end ngIf: ec.showHolesFilter -->

                <!-- price option filter -->
                <!-- ngIf: ec.showPriceOptionsFilter -->

                <!-- Country filter -->
                <!-- ngIf: ec.showCountryFilter -->

                <!-- State filter -->
                <!-- ngIf: ec.showStateFilter -->

                <!-- City filter -->
                <!-- ngIf: ec.showCityFilter -->

                <!-- Course filter -->
                <!-- ngIf: ec.showCourseFilter --><li data-ng-class="ec.courseFilterClass()" data-ng-if="ec.showCourseFilter" class="ng-scope">
                    <!-- Course -->
                    <filterheader data-ng-click="ec.onCourseFilterArrowClick()">
                        Course <i class="fa toggle-arrow fa-chevron-up" data-ng-class="ec.courseFilterHeaderArrowClass()"></i>
                    </filterheader>

                    <!-- checkboxes -->
                    <div class="checklist filter-body m-b-05 in collapse" uib-collapse="ec.isCourseFilterCollapsed" aria-expanded="true" aria-hidden="false" style="height: auto;">
                        <!-- ngIf: ec.showCourseSelectAllControls --><div class="search-select-div ng-scope" data-ng-if="ec.showCourseSelectAllControls">
                            <a href="javascript:void(0)" ng-click="ec.onCourseFilterSelectAllClick()" class="search-select-all" ng-disabled="ec.isLoading">Select All</a>|
                            <a href="javascript:void(0)" ng-click="ec.onCourseFilterClearAllClick()" class="search-clear-all" ng-disabled="ec.isLoading">Clear All</a>
                        </div><!-- end ngIf: ec.showCourseSelectAllControls -->
                        <ul class="automationPadding">
                            <!-- ngRepeat: cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name' --><li ng-repeat="cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name'" class="clear ng-scope">
                                <div>
                                    <div style="float: left; display: inline; padding-right: 8px;">
                                        <input id="courseName_Griffith Park - Harding" type="checkbox" aria-lbelledby="courseLabel_Griffith Park - Harding" title="Select a course" data-ng-value="cf.courseID" data-ng-model="cf.checked" ng-click="ec.onCourseFilterChanged(cf)" ng-disabled="ec.isLoading" class="ng-pristine ng-untouched ng-valid" value="5997">
                                    </div>
                                    <div style="float: left; display: inline; width: 80%;">
                                        <label id="courseLabel_Griffith Park - Harding" for="courseName_Griffith Park - Harding" title="Select a course" data-ng-bind="cf.name" ng-disabled="ec.isLoading" class="ng-binding">Griffith Park - Harding</label>
                                    </div>
                                </div>
                            </li><!-- end ngRepeat: cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name' --><li ng-repeat="cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name'" class="clear ng-scope">
                                <div>
                                    <div style="float: left; display: inline; padding-right: 8px;">
                                        <input id="courseName_Griffith Park - Wilson" type="checkbox" aria-lbelledby="courseLabel_Griffith Park - Wilson" title="Select a course" data-ng-value="cf.courseID" data-ng-model="cf.checked" ng-click="ec.onCourseFilterChanged(cf)" ng-disabled="ec.isLoading" class="ng-pristine ng-untouched ng-valid" value="5998">
                                    </div>
                                    <div style="float: left; display: inline; width: 80%;">
                                        <label id="courseLabel_Griffith Park - Wilson" for="courseName_Griffith Park - Wilson" title="Select a course" data-ng-bind="cf.name" ng-disabled="ec.isLoading" class="ng-binding">Griffith Park - Wilson</label>
                                    </div>
                                </div>
                            </li><!-- end ngRepeat: cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name' --><li ng-repeat="cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name'" class="clear ng-scope">
                                <div>
                                    <div style="float: left; display: inline; padding-right: 8px;">
                                        <input id="courseName_Hansen Dam" type="checkbox" aria-lbelledby="courseLabel_Hansen Dam" title="Select a course" data-ng-value="cf.courseID" data-ng-model="cf.checked" ng-click="ec.onCourseFilterChanged(cf)" ng-disabled="ec.isLoading" class="ng-pristine ng-untouched ng-valid" value="5995">
                                    </div>
                                    <div style="float: left; display: inline; width: 80%;">
                                        <label id="courseLabel_Hansen Dam" for="courseName_Hansen Dam" title="Select a course" data-ng-bind="cf.name" ng-disabled="ec.isLoading" class="ng-binding">Hansen Dam</label>
                                    </div>
                                </div>
                            </li><!-- end ngRepeat: cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name' --><li ng-repeat="cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name'" class="clear ng-scope">
                                <div>
                                    <div style="float: left; display: inline; padding-right: 8px;">
                                        <input id="courseName_Hansen Dam (Back 9)" type="checkbox" aria-lbelledby="courseLabel_Hansen Dam (Back 9)" title="Select a course" data-ng-value="cf.courseID" data-ng-model="cf.checked" ng-click="ec.onCourseFilterChanged(cf)" ng-disabled="ec.isLoading" class="ng-pristine ng-untouched ng-valid" value="23128">
                                    </div>
                                    <div style="float: left; display: inline; width: 80%;">
                                        <label id="courseLabel_Hansen Dam (Back 9)" for="courseName_Hansen Dam (Back 9)" title="Select a course" data-ng-bind="cf.name" ng-disabled="ec.isLoading" class="ng-binding">Hansen Dam (Back 9)</label>
                                    </div>
                                </div>
                            </li><!-- end ngRepeat: cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name' --><li ng-repeat="cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name'" class="clear ng-scope">
                                <div>
                                    <div style="float: left; display: inline; padding-right: 8px;">
                                        <input id="courseName_Harbor Park" type="checkbox" aria-lbelledby="courseLabel_Harbor Park" title="Select a course" data-ng-value="cf.courseID" data-ng-model="cf.checked" ng-click="ec.onCourseFilterChanged(cf)" ng-disabled="ec.isLoading" class="ng-pristine ng-untouched ng-valid" value="5996">
                                    </div>
                                    <div style="float: left; display: inline; width: 80%;">
                                        <label id="courseLabel_Harbor Park" for="courseName_Harbor Park" title="Select a course" data-ng-bind="cf.name" ng-disabled="ec.isLoading" class="ng-binding">Harbor Park</label>
                                    </div>
                                </div>
                            </li><!-- end ngRepeat: cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name' --><li ng-repeat="cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name'" class="clear ng-scope">
                                <div>
                                    <div style="float: left; display: inline; padding-right: 8px;">
                                        <input id="courseName_Los Feliz 3-Par" type="checkbox" aria-lbelledby="courseLabel_Los Feliz 3-Par" title="Select a course" data-ng-value="cf.courseID" data-ng-model="cf.checked" ng-click="ec.onCourseFilterChanged(cf)" ng-disabled="ec.isLoading" class="ng-pristine ng-untouched ng-valid" value="17679">
                                    </div>
                                    <div style="float: left; display: inline; width: 80%;">
                                        <label id="courseLabel_Los Feliz 3-Par" for="courseName_Los Feliz 3-Par" title="Select a course" data-ng-bind="cf.name" ng-disabled="ec.isLoading" class="ng-binding">Los Feliz 3-Par</label>
                                    </div>
                                </div>
                            </li><!-- end ngRepeat: cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name' --><li ng-repeat="cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name'" class="clear ng-scope">
                                <div>
                                    <div style="float: left; display: inline; padding-right: 8px;">
                                        <input id="courseName_Penmar" type="checkbox" aria-lbelledby="courseLabel_Penmar" title="Select a course" data-ng-value="cf.courseID" data-ng-model="cf.checked" ng-click="ec.onCourseFilterChanged(cf)" ng-disabled="ec.isLoading" class="ng-pristine ng-untouched ng-valid" value="6171">
                                    </div>
                                    <div style="float: left; display: inline; width: 80%;">
                                        <label id="courseLabel_Penmar" for="courseName_Penmar" title="Select a course" data-ng-bind="cf.name" ng-disabled="ec.isLoading" class="ng-binding">Penmar</label>
                                    </div>
                                </div>
                            </li><!-- end ngRepeat: cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name' --><li ng-repeat="cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name'" class="clear ng-scope">
                                <div>
                                    <div style="float: left; display: inline; padding-right: 8px;">
                                        <input id="courseName_Rancho Park" type="checkbox" aria-lbelledby="courseLabel_Rancho Park" title="Select a course" data-ng-value="cf.courseID" data-ng-model="cf.checked" ng-click="ec.onCourseFilterChanged(cf)" ng-disabled="ec.isLoading" class="ng-pristine ng-untouched ng-valid" value="6204">
                                    </div>
                                    <div style="float: left; display: inline; width: 80%;">
                                        <label id="courseLabel_Rancho Park" for="courseName_Rancho Park" title="Select a course" data-ng-bind="cf.name" ng-disabled="ec.isLoading" class="ng-binding">Rancho Park</label>
                                    </div>
                                </div>
                            </li><!-- end ngRepeat: cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name' --><li ng-repeat="cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name'" class="clear ng-scope">
                                <div>
                                    <div style="float: left; display: inline; padding-right: 8px;">
                                        <input id="courseName_Rancho Park (Back 9)" type="checkbox" aria-lbelledby="courseLabel_Rancho Park (Back 9)" title="Select a course" data-ng-value="cf.courseID" data-ng-model="cf.checked" ng-click="ec.onCourseFilterChanged(cf)" ng-disabled="ec.isLoading" class="ng-pristine ng-untouched ng-valid" value="23129">
                                    </div>
                                    <div style="float: left; display: inline; width: 80%;">
                                        <label id="courseLabel_Rancho Park (Back 9)" for="courseName_Rancho Park (Back 9)" title="Select a course" data-ng-bind="cf.name" ng-disabled="ec.isLoading" class="ng-binding">Rancho Park (Back 9)</label>
                                    </div>
                                </div>
                            </li><!-- end ngRepeat: cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name' --><li ng-repeat="cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name'" class="clear ng-scope">
                                <div>
                                    <div style="float: left; display: inline; padding-right: 8px;">
                                        <input id="courseName_Rancho Park 3-Par" type="checkbox" aria-lbelledby="courseLabel_Rancho Park 3-Par" title="Select a course" data-ng-value="cf.courseID" data-ng-model="cf.checked" ng-click="ec.onCourseFilterChanged(cf)" ng-disabled="ec.isLoading" class="ng-pristine ng-untouched ng-valid" value="6205">
                                    </div>
                                    <div style="float: left; display: inline; width: 80%;">
                                        <label id="courseLabel_Rancho Park 3-Par" for="courseName_Rancho Park 3-Par" title="Select a course" data-ng-bind="cf.name" ng-disabled="ec.isLoading" class="ng-binding">Rancho Park 3-Par</label>
                                    </div>
                                </div>
                            </li><!-- end ngRepeat: cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name' --><li ng-repeat="cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name'" class="clear ng-scope">
                                <div>
                                    <div style="float: left; display: inline; padding-right: 8px;">
                                        <input id="courseName_Roosevelt" type="checkbox" aria-lbelledby="courseLabel_Roosevelt" title="Select a course" data-ng-value="cf.courseID" data-ng-model="cf.checked" ng-click="ec.onCourseFilterChanged(cf)" ng-disabled="ec.isLoading" class="ng-pristine ng-untouched ng-valid" value="6226">
                                    </div>
                                    <div style="float: left; display: inline; width: 80%;">
                                        <label id="courseLabel_Roosevelt" for="courseName_Roosevelt" title="Select a course" data-ng-bind="cf.name" ng-disabled="ec.isLoading" class="ng-binding">Roosevelt</label>
                                    </div>
                                </div>
                            </li><!-- end ngRepeat: cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name' --><li ng-repeat="cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name'" class="clear ng-scope">
                                <div>
                                    <div style="float: left; display: inline; padding-right: 8px;">
                                        <input id="courseName_Sepulveda - Balboa" type="checkbox" aria-lbelledby="courseLabel_Sepulveda - Balboa" title="Select a course" data-ng-value="cf.courseID" data-ng-model="cf.checked" ng-click="ec.onCourseFilterChanged(cf)" ng-disabled="ec.isLoading" class="ng-pristine ng-untouched ng-valid" value="6264">
                                    </div>
                                    <div style="float: left; display: inline; width: 80%;">
                                        <label id="courseLabel_Sepulveda - Balboa" for="courseName_Sepulveda - Balboa" title="Select a course" data-ng-bind="cf.name" ng-disabled="ec.isLoading" class="ng-binding">Sepulveda - Balboa</label>
                                    </div>
                                </div>
                            </li><!-- end ngRepeat: cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name' --><li ng-repeat="cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name'" class="clear ng-scope">
                                <div>
                                    <div style="float: left; display: inline; padding-right: 8px;">
                                        <input id="courseName_Sepulveda - Balboa (Back 9)" type="checkbox" aria-lbelledby="courseLabel_Sepulveda - Balboa (Back 9)" title="Select a course" data-ng-value="cf.courseID" data-ng-model="cf.checked" ng-click="ec.onCourseFilterChanged(cf)" ng-disabled="ec.isLoading" class="ng-pristine ng-untouched ng-valid" value="23131">
                                    </div>
                                    <div style="float: left; display: inline; width: 80%;">
                                        <label id="courseLabel_Sepulveda - Balboa (Back 9)" for="courseName_Sepulveda - Balboa (Back 9)" title="Select a course" data-ng-bind="cf.name" ng-disabled="ec.isLoading" class="ng-binding">Sepulveda - Balboa (Back 9)</label>
                                    </div>
                                </div>
                            </li><!-- end ngRepeat: cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name' --><li ng-repeat="cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name'" class="clear ng-scope">
                                <div>
                                    <div style="float: left; display: inline; padding-right: 8px;">
                                        <input id="courseName_Sepulveda - Encino" type="checkbox" aria-lbelledby="courseLabel_Sepulveda - Encino" title="Select a course" data-ng-value="cf.courseID" data-ng-model="cf.checked" ng-click="ec.onCourseFilterChanged(cf)" ng-disabled="ec.isLoading" class="ng-pristine ng-untouched ng-valid" value="6263">
                                    </div>
                                    <div style="float: left; display: inline; width: 80%;">
                                        <label id="courseLabel_Sepulveda - Encino" for="courseName_Sepulveda - Encino" title="Select a course" data-ng-bind="cf.name" ng-disabled="ec.isLoading" class="ng-binding">Sepulveda - Encino</label>
                                    </div>
                                </div>
                            </li><!-- end ngRepeat: cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name' --><li ng-repeat="cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name'" class="clear ng-scope">
                                <div>
                                    <div style="float: left; display: inline; padding-right: 8px;">
                                        <input id="courseName_Sepulveda - Encino (Back 9)" type="checkbox" aria-lbelledby="courseLabel_Sepulveda - Encino (Back 9)" title="Select a course" data-ng-value="cf.courseID" data-ng-model="cf.checked" ng-click="ec.onCourseFilterChanged(cf)" ng-disabled="ec.isLoading" class="ng-pristine ng-untouched ng-valid" value="23130">
                                    </div>
                                    <div style="float: left; display: inline; width: 80%;">
                                        <label id="courseLabel_Sepulveda - Encino (Back 9)" for="courseName_Sepulveda - Encino (Back 9)" title="Select a course" data-ng-bind="cf.name" ng-disabled="ec.isLoading" class="ng-binding">Sepulveda - Encino (Back 9)</label>
                                    </div>
                                </div>
                            </li><!-- end ngRepeat: cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name' --><li ng-repeat="cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name'" class="clear ng-scope">
                                <div>
                                    <div style="float: left; display: inline; padding-right: 8px;">
                                        <input id="courseName_Woodley Lakes" type="checkbox" aria-lbelledby="courseLabel_Woodley Lakes" title="Select a course" data-ng-value="cf.courseID" data-ng-model="cf.checked" ng-click="ec.onCourseFilterChanged(cf)" ng-disabled="ec.isLoading" class="ng-pristine ng-untouched ng-valid" value="6380">
                                    </div>
                                    <div style="float: left; display: inline; width: 80%;">
                                        <label id="courseLabel_Woodley Lakes" for="courseName_Woodley Lakes" title="Select a course" data-ng-bind="cf.name" ng-disabled="ec.isLoading" class="ng-binding">Woodley Lakes</label>
                                    </div>
                                </div>
                            </li><!-- end ngRepeat: cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name' --><li ng-repeat="cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name'" class="clear ng-scope">
                                <div>
                                    <div style="float: left; display: inline; padding-right: 8px;">
                                        <input id="courseName_Woodley Lakes (Back 9)" type="checkbox" aria-lbelledby="courseLabel_Woodley Lakes (Back 9)" title="Select a course" data-ng-value="cf.courseID" data-ng-model="cf.checked" ng-click="ec.onCourseFilterChanged(cf)" ng-disabled="ec.isLoading" class="ng-pristine ng-untouched ng-valid" value="23132">
                                    </div>
                                    <div style="float: left; display: inline; width: 80%;">
                                        <label id="courseLabel_Woodley Lakes (Back 9)" for="courseName_Woodley Lakes (Back 9)" title="Select a course" data-ng-bind="cf.name" ng-disabled="ec.isLoading" class="ng-binding">Woodley Lakes (Back 9)</label>
                                    </div>
                                </div>
                            </li><!-- end ngRepeat: cf in ec.courseFilters | filter: { visible: true } | orderBy: 'name' -->
                        </ul>
                    </div>
                </li><!-- end ngIf: ec.showCourseFilter -->

                <!-- Price Range filter -->
                <!-- ngIf: ec.canShowPriceRangeFilter() -->
            </ul>

            <!-- -- search button ---->
            <!-- ngIf: ec.isSearchAndHold -->
            <!--/div>-->
        </div>

        <div class="col-xs-12 col-sm-9 content top-menu xs-nopadding-x">

            <!-- nav tag is used for screen readers to aid the disabled -- generally used with big blocks of links being presented (probably original developer code) -->
            <nav class="top-nav col-xs-12">

                <!-- search result data -->
                <!-- ngIf: !ec.isSearchAndHold --><div class="search-result-data col-sm-7 col-xs-12 ng-scope" data-ng-if="!ec.isSearchAndHold">
                    <div>
                        <strong data-ng-bind="ec.dateAndPlayersReadout()" class="ng-binding">02/29/2024 / 4 players</strong>
                    </div>
                    <div>
                        <strong data-ng-bind="ec.teetimeCountReadout()" class="ng-binding">220 tee times</strong>
                    </div>
                    <!-- ngIf: ec.canShowHolesReadout() -->
                    <!-- ngIf: ec.canShowPricingOptionReadout() -->
                    <!-- ngIf: ec.canShowCourseNameReadout() -->
                </div><!-- end ngIf: !ec.isSearchAndHold -->
                <!-- ngIf: ec.isSearchAndHold -->

                <!-- filters button and date picker, mobile (non-search-and-hold) -->
                <!-- ngIf: !ec.isSearchAndHold --><div class="visible-xs col-xs-10 ng-scope" data-ng-if="!ec.isSearchAndHold">
                                
                    <!-- +/- FILTERS -->
                    <div class="col-xs-4 nopadding-x m-t-05">
                        <a class="primary-btn filters" href="javascript:void(0)" data-ng-click="ec.onMobileFiltersClick()">
                            <i class="fa fa-plus" data-ng-class="ec.mobileFiltersHeaderIconClass()"></i> Filters
                        </a>
                    </div>

                    <!-- date picker (mobile only) -->
                    <div class="col-xs-8 date-input"> <!-- note: in Search-and-Hold mode, mobile uses date-picker INSIDE the filter section (see top of file) -->
                        <input type="text" placeholder="Select Date" datepicker="" name="mobilePickerDate" id="mobilePickerDate" ng-readonly="ec.filterSettings.date" data-ng-model="ec.filterSettings.date" data-ng-change="ec.onDateChange()" class="m-b-0 ng-pristine ng-untouched ng-valid ng-isolate-scope hasDatepicker" min-date="ec.minDate" max-date="ec.maxDate" aria-describedby="mobilePickerDate" readonly="readonly">
                        <label aria-labelledby="mobilePickerDate" for="mobilePickerDate" onclick="javascript:void(0)" title="Select a date to reserve a tee time" aria-describedby="mobilePickerDate" class="btn m-b-0" alt="Select a date to reserve a tee time">
                            <i alt="Select a date to reserve a tee time" class="fa fa-calendar"></i>­
                        </label>
                    </div>
                </div><!-- end ngIf: !ec.isSearchAndHold -->
                <!-- create space to place fly-out menu properly, mobile (search-and-hold) -->
                <!-- ngIf: ec.isSearchAndHold -->

                <!-- fly-out menu, mobile -->
                <fly-out-menu hide-search="true" hide-login-registration="ec.isInMoveReservationState" class="col-sm-5 col-xs-2 nopadding-x p-t-10 p-t-00-xs ng-isolate-scope"><div class="top-nav col-xs-12 p-t-10 p-t-00-xs right fly-out-menu nopadding-x hidden-print">
    <div class="hidden-xs">
        <!-- ngIf: (hideLoginRegistration || hideRegistration) && !hideSearch -->

        <!-- ngIf: !isCurrentUser() --><div data-ng-if="!isCurrentUser()" class="ng-scope">
            <!-- Create New Account / Sign In -->
            <!-- ngIf: !hideLoginRegistration && !hideRegistration && allowsNewRegistration --><a href="#/create-account" ui-sref="create-account" data-ng-if="!hideLoginRegistration &amp;&amp; !hideRegistration &amp;&amp; allowsNewRegistration" class="ng-scope"><i class="fa fa-user"></i> Create New Account</a><!-- end ngIf: !hideLoginRegistration && !hideRegistration && allowsNewRegistration -->
            <!-- ngIf: !hideLoginRegistration || hideRegistration --><a href="#/login" ui-sref="login" class="m-l-15 ng-scope" data-ng-if="!hideLoginRegistration || hideRegistration">Sign In</a><!-- end ngIf: !hideLoginRegistration || hideRegistration -->
        </div><!-- end ngIf: !isCurrentUser() -->

        <!-- ngIf: isCurrentUser() && !hideLoginRegistration -->
    </div>
    <div class="visible-xs m-r-10">
        <span data-ng-click="toggleMenu = !toggleMenu"><i class="fa fa-bars primary-btn"></i></span>

        <!-- My Account / Tee Time Search / Your reservations / Pending / Historic / Contact Information / Membership / Payment Information / View Tee Sheet / Sign Out -->
        <div class="account-menu account-dekstop-menu ng-hide" data-ng-show="toggleMenu">
            <!-- ngIf: isCurrentUser() && !hideLoginRegistration -->

            <!-- Tee Time Search / Create New Account / Sign In -->
            <!-- ngIf: !isCurrentUser() --><ul data-ng-if="!isCurrentUser()" class="ng-scope">
                <!-- ngIf: hideLoginRegistration || hideRegistration -->
                <!-- ngIf: !hideLoginRegistration && !hideRegistration && allowsNewRegistration --><li data-ng-if="!hideLoginRegistration &amp;&amp; !hideRegistration &amp;&amp; allowsNewRegistration" class="ng-scope">
                    <a href="#/create-account" ui-sref="create-account">Create New Account</a>
                </li><!-- end ngIf: !hideLoginRegistration && !hideRegistration && allowsNewRegistration -->
                <!-- ngIf: !hideLoginRegistration || hideRegistration --><li data-ng-if="!hideLoginRegistration || hideRegistration" class="ng-scope">
                    <a href="#/login" ui-sref="login">Sign In</a>
                </li><!-- end ngIf: !hideLoginRegistration || hideRegistration -->
            </ul><!-- end ngIf: !isCurrentUser() -->
        </div>
    </div>
</div>
</fly-out-menu></nav>

            <!-- ngIf: ec.isInit -->

            <!-- ngIf: !ec.isSearchAndHold --><div data-ng-if="!ec.isSearchAndHold" class="ng-scope">
                <!-- banner message -->
                <div class="col-xs-12 nopadding ng-hide" data-ng-show="ec.showBannerMessage &amp;&amp; !ec.isFinalDBtimeout">
                    <div id="bannerMessage" class="col-sm-12 col-xs-12">
                    </div>
                </div>

                <!-- tee time grid -->
                <!-- ngIf: !ec.isInit && !ec.isDBtimeout --><div data-ng-if="!ec.isInit &amp;&amp; !ec.isDBtimeout" class="ng-scope">
                    <div class="col-xs-12 nopadding-sm main-content ng-pristine ng-untouched ng-valid" ng-model="ec.filterSettings" infinite-scroll="ec.loadData(false)">
                        <ul class="tee-time-block">
                            <!-- ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">6:05 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">6:10 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">6:15 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Hansen Dam (Back 9)</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">6:20 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$17.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">6:20 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Balboa (Back 9)</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">6:20 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Woodley Lakes (Back 9)</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">6:20 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$17.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">6:25 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">6:30 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">6:40 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">6:45 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Hansen Dam (Back 9)</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">6:50 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$17.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">6:50 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">6:55 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">7:00 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">7:10 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">7:10 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">7:20 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">7:25 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">7:30 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">7:40 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">7:40 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">7:45 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">7:50 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">7:50 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">7:55 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">8:00 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">8:00 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">8:10 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">8:10 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">8:20 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">8:20 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">8:30 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">8:30 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">8:35 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">8:40 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">8:40 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">8:50 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">8:50 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">9:00 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">9:10 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">9:20 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">9:20 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">9:30 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">9:50 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">9:50 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">10:00 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">10:00 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">10:10 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">10:20 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">10:20 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">10:30 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">10:40 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">10:50 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">10:50 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">11:00 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">11:00 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">11:10 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">11:10 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">11:20 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">11:20 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">11:30 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">11:30 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">11:40 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">11:40 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">11:45 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">11:50 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">11:55 AM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">12:00 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">12:10 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">12:10 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">12:15 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">12:20 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">12:20 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">12:25 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">12:30 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">12:35 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">12:40 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">12:50 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">12:50 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">12:55 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">1:00 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">1:00 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">1:10 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">1:10 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">1:15 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">1:20 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">1:20 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">1:30 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">1:30 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">1:40 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">1:40 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">1:50 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">1:50 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">2:00 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">2:05 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">2:10 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">2:10 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">2:20 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">2:20 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">2:30 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">2:30 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Balboa</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">2:30 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$22.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="18 holes">
                                            <img alt="Tee Time feature: 18 holes" data-ng-src="assets/images/icons/icon_18.png" src="assets/images/icons/icon_18.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">2:35 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">2:40 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">2:40 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Balboa</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">2:40 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$22.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="18 holes">
                                            <img alt="Tee Time feature: 18 holes" data-ng-src="assets/images/icons/icon_18.png" src="assets/images/icons/icon_18.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">2:45 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">2:50 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">2:50 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Balboa</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">2:50 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$22.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="18 holes">
                                            <img alt="Tee Time feature: 18 holes" data-ng-src="assets/images/icons/icon_18.png" src="assets/images/icons/icon_18.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">2:55 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">3:00 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">3:00 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Hansen Dam</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">3:10 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$14.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="18 holes">
                                            <img alt="Tee Time feature: 18 holes" data-ng-src="assets/images/icons/icon_18.png" src="assets/images/icons/icon_18.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">3:10 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Rancho Park 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">3:10 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$10.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Sepulveda - Encino</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">3:15 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$18.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Griffith Park - Harding</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">3:20 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$14.50</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="18 holes">
                                            <img alt="Tee Time feature: 18 holes" data-ng-src="assets/images/icons/icon_18.png" src="assets/images/icons/icon_18.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–4 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes --><li ng-repeat="t in ec.teetimes" class="ng-scope">
                                <!-- course name and rotation -->
                                <!-- ngIf: ec.showPodHatCourseName --><div ng-class="ec.courseNameClass" data-ng-if="ec.showPodHatCourseName" class="ng-scope course X2CourseName">
                                    <span data-ng-bind="ec.teetimeCourseName(t)" class="ng-binding">Los Feliz 3-Par</span>
                                    <!-- ngIf: ec.isShowTeetimeRotationNames(t) -->
                                </div><!-- end ngIf: ec.showPodHatCourseName -->

                                <!-- tee time -->
                                <span class="time ng-binding" data-ng-bind="ec.teetimeTimeDisplay(t)">3:20 PM</span>

                                <!-- price, save display, icons -->
                                <!-- ngIf: !ec.data.ResponsiveHidePricing --><div ng-class="ec.priceClass" data-ng-if="!ec.data.ResponsiveHidePricing" class="ng-scope price">
                                    <strong class="ec.priceRangeClass ng-binding" data-ng-class="ec.doubleHeightPriceClass()" data-ng-bind="ec.teetimePriceDisplay(t)">$9.00</strong>
                                    <!-- ngIf: !ec.data.ResponsiveHideSpecials --><strong class="savings ng-binding ng-scope" data-ng-if="!ec.data.ResponsiveHideSpecials" data-ng-bind="ec.teetimeSavingsDisplay(t)"></strong><!-- end ngIf: !ec.data.ResponsiveHideSpecials -->
                                    <!-- ngIf: ec.showIconsOnSearchPage --><div ng-class="ec.iconClass" data-ng-if="ec.showIconsOnSearchPage" class="ng-scope X1Icons">
                                        <!-- ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Alert">
                                            <img alt="Tee Time feature: Alert" data-ng-src="assets/images/icons/icon_alert_red.png" src="assets/images/icons/icon_alert_red.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="9 holes">
                                            <img alt="Tee Time feature: 9 holes" data-ng-src="assets/images/icons/icon_9.png" src="assets/images/icons/icon_9.png">
                                        </div><!-- end ngRepeat: i in t.IconList --><div data-ng-repeat="i in t.IconList" data-ng-attr-title="{{i.Title}}" style="display: inline;" class="ng-scope" title="Walking">
                                            <img alt="Tee Time feature: Walking" data-ng-src="assets/images/icons/icon_walk.png" src="assets/images/icons/icon_walk.png">
                                        </div><!-- end ngRepeat: i in t.IconList -->
                                    </div><!-- end ngIf: ec.showIconsOnSearchPage -->
                                </div><!-- end ngIf: !ec.data.ResponsiveHidePricing -->

                                <!-- player display text, [View/Move To] button -->
                                <div class="player-info">
                                    <span class="players ng-binding" data-ng-bind="ec.teetimePlayerDisplayText(t)">1–5 Players</span>
                                    <button class="primary-btn ng-pristine ng-untouched ng-valid ng-binding" ng-model="t.time" ng-click="ec.onPodButtonClick(t)" value="t.time">View</button>
                                </div>
                            </li><!-- end ngRepeat: t in ec.teetimes -->
                        </ul>
                        <div ng-show="ec.isShowNoResultsDisplay() &amp;&amp; !ec.isFinalDBtimeout" class="no-results ng-hide">
                            <strong ng-bind-html="ec.data.NoTeeTimePrimaryMessage" class="ng-binding">There are no reservations available that meet your search criteria for one of the following reasons:</strong><br>
                            <span ng-bind-html="ec.data.NoTeeTimeSecondaryMessage" class="ng-binding">The course may be full or closed.  You may be searching too far in advance.  Or an applied search filter may be too narrow.</span>
                        </div>
                    </div>
                </div><!-- end ngIf: !ec.isInit && !ec.isDBtimeout -->

                <!-- timeout message -->
                <!-- ngIf: ec.isDBtimeout -->

                <!-- timed-out message -->
                <!-- ngIf: ec.isFinalDBtimeout -->
            </div><!-- end ngIf: !ec.isSearchAndHold -->

            <!-- white space on mobile to push footer down past filter area -->
            <!-- ngIf: ec.isSearchAndHold -->
        </div>
    </div><!-- end ngIf: !ec.isSafariIniFrame -->
    <!-- ngIf: ec.isSafariIniFrame -->
<div class="cg-busy cg-busy-backdrop cg-busy-backdrop-animation ng-scope ng-hide" ng-show="$cgBusyIsActive() === true"></div><div class="cg-busy cg-busy-animation ng-scope ng-hide" ng-show="$cgBusyIsActive() === true">
        <div style="">
            <div class="loading-indicator">
                <i class="fa-li fa fa-spinner fa-spin"></i>
            </div>
        </div>
    </div></div>﻿</ui-view>
</div>
<br>
<br>
<!-- ngIf: !isSafariIniFrame --><!-- ngInclude: 'app/shared/footer/sub-footer.html' --><div ng-if="!isSafariIniFrame" class="hidden-print ng-scope" data-ng-include="'app/shared/footer/sub-footer.html'"><div class="container ng-scope" data-ng-controller="footerController" data-ng-init="initFooter()">
    <div class="hidden-xs">
        <div class="col-xs-12 nopadding">
            <div class="col-sm-6 left nopadding">
                <div>
                    <a data-ng-href="http://www.ezlinks.com/infodisplay/solutioncenter/privacypolicydefault.html" target="_blank" class="anchor-link" href="http://www.ezlinks.com/infodisplay/solutioncenter/privacypolicydefault.html">Terms</a>
                </div>
            </div>
            <div class="col-sm-6 right nopadding">
                <span data-ng-bind="PersonalAssistanceText" class="ng-binding"></span> <span data-ng-bind="PersonalAssistancePhone" class="ng-binding"></span>
            </div>
        </div>
        <div class="nopadding">
            <div class="col-sm-6 col-xs-12 left center-xs nopadding ng-binding">
                Copyright © 2024 GolfNow. All Rights Reserved.
            </div>
            <div class="col-sm-6 right nopadding">
                <a href="mailto:" class="ng-binding">­</a>
            </div>
            <div class="col-sm-6 col-xs-12 left center-xs nopadding versionTextAlign ng-binding">
                Version: 
            </div>
        </div>
    </div>
    <div class="visible-xs">
        <div class="col-xs-12 center">
            <span data-ng-bind="PersonalAssistanceText" class="ng-binding"></span>
        </div>
        <div class="col-xs-12 center">
            <a href="tel:" data-ng-bind="PersonalAssistancePhone + '.'" alt="Contact Phone" class="ng-binding">.</a>
        </div>
        <div class="col-xs-12 center">
            <a href="mailto:" class="ng-binding">­ </a>
        </div>
        <div class="col-xs-12 center ng-binding">
            Copyright © 2024 GolfNow. All Rights Reserved.
        </div>
        <div class="col-xs-12 center ng-binding">
            Version: 
        </div>
        <div class="col-xs-12 center">
            <a data-ng-href="http://www.ezlinks.com/infodisplay/solutioncenter/privacypolicydefault.html" target="_blank" class="anchor-link" href="http://www.ezlinks.com/infodisplay/solutioncenter/privacypolicydefault.html">Terms</a>
        </div>
    </div>
</div>
</div><!-- end ngIf: !isSafariIniFrame -->
<!-- ngIf: !isSafariIniFrame --><!-- ngInclude: 'app/shared/footer/footer.html' --><div ng-if="!isSafariIniFrame" data-ng-include="'app/shared/footer/footer.html'" class="ng-scope"><!--<footer class="footer" ng-init="initFooter()">
    <div class="bottom-footer">
        <div class="row nopadding">
            <div class="footer-image">
                <img class="img-responsive center-block" src={{footerlogo}}/>
            </div>
        </div>
    </div>
</footer>-->


<footer ng-init="initFooter()" class="col-xs-12 nopadding ng-scope"></footer></div><!-- end ngIf: !isSafariIniFrame -->
</div>
</div>

<script defer="" src="app/all-adb5d35140.min.js" type="text/javascript"></script>
<script defer="" src="app/editUserInfo/services/edit-user-info-service.js" type="text/javascript"></script>
<script defer="" src="app/confirmation/controllers/confirmation-controller.js" type="text/javascript"></script>
<script defer="" src="app/search/data-model/http-interceptor.js" type="text/javascript"></script>
<script>(function(){var js = "window['__CF$cv$params']={r:'85cf41b73c367cf6',t:'MTcwOTE5MjQwMC41NTIwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();</script><iframe height="1" width="1" style="position: absolute; top: 0px; left: 0px; border: none; visibility: hidden;"></iframe><script defer="" src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon="{&quot;rayId&quot;:&quot;85cf41b73c367cf6&quot;,&quot;version&quot;:&quot;2024.2.1&quot;,&quot;token&quot;:&quot;0f41094787234f798612ac92c11e032f&quot;}" crossorigin="anonymous"></script>


<div id="ui-datepicker-div" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" style="position: absolute; top: 149.391px; left: 812.469px; z-index: 1; display: none;"><div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all"><a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title=""><span class="fa fa-arrow-circle-right"></span></a><a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title=""><span class="fa fa-arrow-circle-right"></span></a><div class="ui-datepicker-title"><select class="ui-datepicker-month" data-handler="selectMonth" data-event="change"><option value="1" selected="selected">Feb</option><option value="2">Mar</option></select><select class="ui-datepicker-year" data-handler="selectYear" data-event="change"><option value="2024" selected="selected">2024</option></select></div></div><table class="ui-datepicker-calendar"><thead><tr><th scope="col" class="ui-datepicker-week-end"><span title="Sunday">Su</span></th><th scope="col"><span title="Monday">Mo</span></th><th scope="col"><span title="Tuesday">Tu</span></th><th scope="col"><span title="Wednesday">We</span></th><th scope="col"><span title="Thursday">Th</span></th><th scope="col"><span title="Friday">Fr</span></th><th scope="col" class="ui-datepicker-week-end"><span title="Saturday">Sa</span></th></tr></thead><tbody><tr><td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">1</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">2</span></td><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">3</span></td></tr><tr><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">4</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">5</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">6</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">7</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">8</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">9</span></td><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">10</span></td></tr><tr><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">11</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">12</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">13</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">14</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">15</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">16</span></td><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">17</span></td></tr><tr><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">18</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">19</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">20</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">21</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">22</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">23</span></td><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">24</span></td></tr><tr><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">25</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">26</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">27</span></td><td class=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">28</a></td><td class=" ui-datepicker-days-cell-over  ui-datepicker-current-day ui-datepicker-today" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default ui-state-highlight ui-state-active ui-state-hover" href="#">29</a></td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td></tr></tbody></table></div></body></html>`;
