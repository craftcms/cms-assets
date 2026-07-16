const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./bg-BG-DnVjRYqE.js","./bg-BZKr43e2.js","./bg-IqOjZrqY.js","./cs-CZ-BmViElvu.js","./cs-nZZSw-pw.js","./cs-DeWzxCvI.js","./de-DE-CgOonbYS.js","./de-BNI3crOC.js","./de-DRxhYBlu.js","./en-AU-Cpovt45U.js","./en-DlblJ6Cl.js","./en-GB-DqqBxd4Q.js","./en-US-Cdu42gwa.js","./en-slJbruSe.js","./es-ES-CmhUBtrf.js","./es-DHsrgB72.js","./es-Buf35OkP.js","./fr-FR-BMvu4Gmu.js","./fr-DW7XmGy2.js","./fr-BE-CEvpKIC1.js","./fr-BGPE6HCB.js","./hu-HU-U2lC-ajV.js","./hu-1BQO7ah4.js","./hu-DfbMkeAh.js","./it-IT-D_JjaRHX.js","./it-nF8CbPA4.js","./it-Cp8AIejG.js","./nl-BE-B87OiBua.js","./nl-aMWz0Nmh.js","./nl-NL-CHMyMcji.js","./nl-BR1vAE3X.js","./pl-PL-BSu6QYBE.js","./pl-BVv1nlWF.js","./pl-r0wtefEn.js","./ro-RO-Cgj-h3KE.js","./ro-ufrFXKw2.js","./ro-DhfWASix.js","./ru-RU-Ds2knHxA.js","./ru-DFEKxv-7.js","./ru-CzPsFw36.js","./sk-SK-C_9mHuZ1.js","./sk-DsuOV-Xf.js","./sk-CKTzJEwH.js","./tr-TR-NFGEUoaC.js","./tr-CwhMTrDG.js","./tr-CmuVwvcH.js","./uk-UA-CXb2OQ8x.js","./uk-0pvR4S4u.js","./uk-IytIKkJy.js","./bg-BG-Bn9SAzJe.js","./bg-cnp2XWrN.js","./bg-SsgDDkMC.js","./cs-CZ-4fSQr3f_.js","./cs-Bk5gWHXv.js","./cs-DZhNKUgr.js","./de-DE-ChrX89DZ.js","./de-ZUPs4YQd.js","./de-CCHroSks.js","./en-AU-CoEGY67j.js","./en-uHbWtCPV.js","./en-GB-BSipNe3f.js","./en-US-BGXT22sU.js","./en-B3VAMG8J.js","./es-ES--SmkGNhH.js","./es-C2n7l6wD.js","./es-BRO5jEDv.js","./fr-FR-CUTiXp9I.js","./fr-CpXmz6yw.js","./fr-BE-B_0I3HTa.js","./fr-CJdDA3iB.js","./hu-HU-DhD2wKEQ.js","./hu-BoYuGTPd.js","./hu-BXB0KCno.js","./id-ID-CiU6JOHY.js","./id-B9SblKLm.js","./id-BCbsB7UU.js","./it-IT-uqh9o-D4.js","./it-BGFZbKpq.js","./it-BwGhXjgy.js","./nl-BE-BgxudImH.js","./nl-prVZyJdq.js","./nl-NL-OIA7zTRT.js","./nl-BQCfuM9c.js","./pl-PL-CTP5JGG_.js","./pl-hR_41Kyt.js","./pl-BjtGkPK3.js","./ro-RO-CuFs3Jtd.js","./ro-Dns1Vt4c.js","./ro-Cl1Dvqmt.js","./ru-RU-BNeew_WS.js","./ru-DcOEbaAq.js","./ru-CrAHcf5Z.js","./sk-SK-C6n1yx5m.js","./sk-CpLl3HN5.js","./sk-BN4cErFR.js","./uk-UA-DpnVXK1r.js","./uk-CwFmpvCp.js","./uk-9cteiHR0.js"])))=>i.map(i=>d[i]);
import{r as e}from"./chunk-BCz-6Eeh.js";import{c as t,d as n,i as r,l as i,n as a,o,r as s,s as c,u as l}from"./nav-item-WegLRBLq-DazoeTHk.js";import{a as u,i as d,l as f,n as p,o as m,r as h,t as g,u as _}from"./lit-DrXmpO9_.js";import{a as v,i as y,r as b,t as ee}from"./decorators-Cw2Sd_kC.js";import"./nav-list.ts-Dyc-1AQn.js";var x={Pending:1,Reserved:2,Done:3,Failed:4,Delayed:5,Cancelled:6},te={Idle:`idle`,Loading:`loading`,Success:`success`,Error:`error`};function ne(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function S(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}function C(e,t){ne(e,t),t.add(e)}function w(e,t,n){ne(e,t),t.set(e,n)}function T(e,t,n){return e.set(S(e,t),n),n}function E(e,t){return e.get(S(e,t))}var D=new WeakMap,re=new WeakSet,ie=class e{constructor(){C(this,re),w(this,D,new Map)}static getInstance(t={}){return oe._||=new e,oe._}static resetInstance(){oe._&&=null}initialize(e={}){T(D,this,new Map(Object.entries(e)))}getCpUrl(e){return S(re,this,ae).call(this,E(D,this).get(`baseCpUrl`),e)}getActionUrl(e){return S(re,this,ae).call(this,E(D,this).get(`actionUrl`),e)}all(){return E(D,this)}set(e,t){E(D,this).set(e,t)}get(e,t=null){return E(D,this).has(e)?E(D,this).get(e):t}};function ae(e,t){let n=new URL(e),r=t.startsWith(`/`)?t.slice(1):t;return n.pathname=`${n.pathname}/${r}`,n.toString()}var oe={_:null};function se(e,t){return function(){return e.apply(t,arguments)}}var{toString:ce}=Object.prototype,{getPrototypeOf:le}=Object,{iterator:ue,toStringTag:de}=Symbol,fe=(e=>t=>{let n=ce.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),pe=e=>(e=e.toLowerCase(),t=>fe(t)===e),me=e=>t=>typeof t===e,{isArray:he}=Array,ge=me(`undefined`);function _e(e){return e!==null&&!ge(e)&&e.constructor!==null&&!ge(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var ve=pe(`ArrayBuffer`);function ye(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&ve(e.buffer),t}var be=me(`string`),O=me(`function`),xe=me(`number`),Se=e=>typeof e==`object`&&!!e,Ce=e=>e===!0||e===!1,we=e=>{if(fe(e)!==`object`)return!1;let t=le(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(de in e)&&!(ue in e)},Te=e=>{if(!Se(e)||_e(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Ee=pe(`Date`),De=pe(`File`),Oe=e=>!!(e&&e.uri!==void 0),ke=e=>e&&e.getParts!==void 0,Ae=pe(`Blob`),je=pe(`FileList`),Me=e=>Se(e)&&O(e.pipe);function Ne(){return typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}}var Pe=Ne(),Fe=Pe.FormData===void 0?void 0:Pe.FormData,Ie=e=>{if(!e)return!1;if(Fe&&e instanceof Fe)return!0;let t=le(e);if(!t||t===Object.prototype||!O(e.append))return!1;let n=fe(e);return n===`formdata`||n===`object`&&O(e.toString)&&e.toString()===`[object FormData]`},Le=pe(`URLSearchParams`),[Re,ze,Be,Ve]=[`ReadableStream`,`Request`,`Response`,`Headers`].map(pe),He=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function Ue(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),he(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(_e(e))return;let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function We(e,t){if(_e(e))return null;t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}var Ge=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,Ke=e=>!ge(e)&&e!==Ge;function qe(...e){let{caseless:t,skipUndefined:n}=Ke(this)&&this||{},r={},i=(e,i)=>{if(i===`__proto__`||i===`constructor`||i===`prototype`)return;let a=t&&typeof i==`string`&&We(r,i)||i,o=at(r,a)?r[a]:void 0;we(o)&&we(e)?r[a]=qe(o,e):we(e)?r[a]=qe({},e):he(e)?r[a]=e.slice():(!n||!ge(e))&&(r[a]=e)};for(let t=0,n=e.length;t<n;t++){let n=e[t];if(!n||_e(n)||(Ue(n,i),typeof n!=`object`||he(n)))continue;let r=Object.getOwnPropertySymbols(n);for(let e=0;e<r.length;e++){let t=r[e];ot.call(n,t)&&i(n[t],t)}}return r}var Je=(e,t,n,{allOwnKeys:r}={})=>(Ue(t,(t,r)=>{n&&O(t)?Object.defineProperty(e,r,{__proto__:null,value:se(t,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,r,{__proto__:null,value:t,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),Ye=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Xe=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,`constructor`,{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,`super`,{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},Ze=(e,t,n,r)=>{let i,a,o,s={};if(t||={},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&le(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Qe=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},$e=e=>{if(!e)return null;if(he(e))return e;let t=e.length;if(!xe(t))return null;let n=Array(t);for(;t-- >0;)n[t]=e[t];return n},et=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&le(Uint8Array)),tt=(e,t)=>{let n=(e&&e[ue]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},nt=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},rt=pe(`HTMLFormElement`),it=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),at=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),{propertyIsEnumerable:ot}=Object.prototype,st=pe(`RegExp`),ct=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};Ue(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},lt=e=>{ct(e,(t,n)=>{if(O(e)&&[`arguments`,`caller`,`callee`].includes(n))return!1;let r=e[n];if(O(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},ut=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return he(e)?r(e):r(String(e).split(t)),n},dt=()=>{},ft=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function pt(e){return!!(e&&O(e.append)&&e[de]===`FormData`&&e[ue])}var mt=e=>{let t=new WeakSet,n=e=>{if(Se(e)){if(t.has(e))return;if(_e(e))return e;if(!(`toJSON`in e)){t.add(e);let r=he(e)?[]:{};return Ue(e,(e,t)=>{let i=n(e);!ge(i)&&(r[t]=i)}),t.delete(e),r}}return e};return n(e)},ht=pe(`AsyncFunction`),gt=e=>e&&(Se(e)||O(e))&&O(e.then)&&O(e.catch),_t=((e,t)=>e?setImmediate:t?((e,t)=>(Ge.addEventListener(`message`,({source:n,data:r})=>{n===Ge&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),Ge.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,O(Ge.postMessage)),k={isArray:he,isArrayBuffer:ve,isBuffer:_e,isFormData:Ie,isArrayBufferView:ye,isString:be,isNumber:xe,isBoolean:Ce,isObject:Se,isPlainObject:we,isEmptyObject:Te,isReadableStream:Re,isRequest:ze,isResponse:Be,isHeaders:Ve,isUndefined:ge,isDate:Ee,isFile:De,isReactNativeBlob:Oe,isReactNative:ke,isBlob:Ae,isRegExp:st,isFunction:O,isStream:Me,isURLSearchParams:Le,isTypedArray:et,isFileList:je,forEach:Ue,merge:qe,extend:Je,trim:He,stripBOM:Ye,inherits:Xe,toFlatObject:Ze,kindOf:fe,kindOfTest:pe,endsWith:Qe,toArray:$e,forEachEntry:tt,matchAll:nt,isHTMLForm:rt,hasOwnProperty:at,hasOwnProp:at,reduceDescriptors:ct,freezeMethods:lt,toObjectSet:ut,toCamelCase:it,noop:dt,toFiniteNumber:ft,findKey:We,global:Ge,isContextDefined:Ke,isSpecCompliantForm:pt,toJSONObject:mt,isAsyncFn:ht,isThenable:gt,setImmediate:_t,asap:typeof queueMicrotask<`u`?queueMicrotask.bind(Ge):typeof process<`u`&&process.nextTick||_t,isIterable:e=>e!=null&&O(e[ue])},vt=k.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),yt=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!(!n||t[n]&&vt[n])&&(n===`set-cookie`?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+`, `+r:r)}),t};function bt(e){let t=0,n=e.length;for(;t<n;){let n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;n>t;){let t=e.charCodeAt(n-1);if(t!==9&&t!==32)break;--n}return t===0&&n===e.length?e:e.slice(t,n)}var xt=RegExp(`[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+`,`g`),St=RegExp(`[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+`,`g`);function Ct(e,t){return k.isArray(e)?e.map(e=>Ct(e,t)):bt(String(e).replace(t,``))}var wt=e=>Ct(e,xt),Tt=e=>Ct(e,St);function Et(e){let t=Object.create(null);return k.forEach(e.toJSON(),(e,n)=>{t[n]=Tt(e)}),t}var Dt=Symbol(`internals`);function Ot(e){return e&&String(e).trim().toLowerCase()}function kt(e){return e===!1||e==null?e:k.isArray(e)?e.map(kt):wt(String(e))}function At(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var jt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Mt(e,t,n,r,i){if(k.isFunction(r))return r.call(this,t,n);if(i&&(t=n),k.isString(t)){if(k.isString(r))return t.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(t)}}function Nt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function Pt(e,t){let n=k.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{__proto__:null,value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var A=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=Ot(t);if(!i)return;let a=k.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(r[a||t]=kt(e))}let a=(e,t)=>k.forEach(e,(e,n)=>i(e,n,t));if(k.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(k.isString(e)&&(e=e.trim())&&!jt(e))a(yt(e),t);else if(k.isObject(e)&&k.isIterable(e)){let n={},r,i;for(let t of e){if(!k.isArray(t))throw TypeError(`Object iterator must return a key-value pair`);n[i=t[0]]=(r=n[i])?k.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}a(n,t)}else e!=null&&i(t,e,n);return this}get(e,t){if(e=Ot(e),e){let n=k.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return At(e);if(k.isFunction(t))return t.call(this,e,n);if(k.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=Ot(e),e){let n=k.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||Mt(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=Ot(e),e){let i=k.findKey(n,e);i&&(!t||Mt(n,n[i],i,t))&&(delete n[i],r=!0)}}return k.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||Mt(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return k.forEach(this,(r,i)=>{let a=k.findKey(n,i);if(a){t[a]=kt(r),delete t[i];return}let o=e?Nt(i):String(i).trim();o!==i&&delete t[i],t[o]=kt(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return k.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&k.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}getSetCookie(){return this.get(`set-cookie`)||[]}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[Dt]=this[Dt]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=Ot(e);t[r]||(Pt(n,e),t[r]=!0)}return k.isArray(e)?e.forEach(r):r(e),this}};A.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),k.reduceDescriptors(A.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),k.freezeMethods(A);var Ft=`[REDACTED ****]`;function It(e){if(k.hasOwnProp(e,`toJSON`))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(k.hasOwnProp(t,`toJSON`))return!0;t=Object.getPrototypeOf(t)}return!1}function Lt(e,t){let n=new Set(t.map(e=>String(e).toLowerCase())),r=[],i=e=>{if(typeof e!=`object`||!e||k.isBuffer(e))return e;if(r.indexOf(e)!==-1)return;e instanceof A&&(e=e.toJSON()),r.push(e);let t;if(k.isArray(e))t=[],e.forEach((e,n)=>{let r=i(e);k.isUndefined(r)||(t[n]=r)});else{if(!k.isPlainObject(e)&&It(e))return r.pop(),e;t=Object.create(null);for(let[r,a]of Object.entries(e)){let e=n.has(r.toLowerCase())?Ft:i(a);k.isUndefined(e)||(t[r]=e)}}return r.pop(),t};return i(e)}var j=class e extends Error{static from(t,n,r,i,a,o){let s=new e(t.message,n||t.code,r,i,a);return s.cause=t,s.name=t.name,t.status!=null&&s.status==null&&(s.status=t.status),o&&Object.assign(s,o),s}constructor(e,t,n,r,i){super(e),Object.defineProperty(this,`message`,{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name=`AxiosError`,this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status)}toJSON(){let e=this.config,t=e&&k.hasOwnProp(e,`redact`)?e.redact:void 0,n=k.isArray(t)&&t.length>0?Lt(e,t):k.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n,code:this.code,status:this.status}}};j.ERR_BAD_OPTION_VALUE=`ERR_BAD_OPTION_VALUE`,j.ERR_BAD_OPTION=`ERR_BAD_OPTION`,j.ECONNABORTED=`ECONNABORTED`,j.ETIMEDOUT=`ETIMEDOUT`,j.ECONNREFUSED=`ECONNREFUSED`,j.ERR_NETWORK=`ERR_NETWORK`,j.ERR_FR_TOO_MANY_REDIRECTS=`ERR_FR_TOO_MANY_REDIRECTS`,j.ERR_DEPRECATED=`ERR_DEPRECATED`,j.ERR_BAD_RESPONSE=`ERR_BAD_RESPONSE`,j.ERR_BAD_REQUEST=`ERR_BAD_REQUEST`,j.ERR_CANCELED=`ERR_CANCELED`,j.ERR_NOT_SUPPORT=`ERR_NOT_SUPPORT`,j.ERR_INVALID_URL=`ERR_INVALID_URL`,j.ERR_FORM_DATA_DEPTH_EXCEEDED=`ERR_FORM_DATA_DEPTH_EXCEEDED`;function Rt(e){return k.isPlainObject(e)||k.isArray(e)}function zt(e){return k.endsWith(e,`[]`)?e.slice(0,-2):e}function Bt(e,t,n){return e?e.concat(t).map(function(e,t){return e=zt(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function Vt(e){return k.isArray(e)&&!e.some(Rt)}var Ht=k.toFlatObject(k,{},null,function(e){return/^is[A-Z]/.test(e)});function Ut(e,t,n){if(!k.isObject(e))throw TypeError(`target must be an object`);t||=new FormData,n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!k.isUndefined(t[e])});let r=n.metaTokens,i=n.visitor||d,a=n.dots,o=n.indexes,s=n.Blob||typeof Blob<`u`&&Blob,c=n.maxDepth===void 0?100:n.maxDepth,l=s&&k.isSpecCompliantForm(t);if(!k.isFunction(i))throw TypeError(`visitor must be a function`);function u(e){if(e===null)return``;if(k.isDate(e))return e.toISOString();if(k.isBoolean(e))return e.toString();if(!l&&k.isBlob(e))throw new j(`Blob is not supported. Use a Buffer instead.`);return k.isArrayBuffer(e)||k.isTypedArray(e)?l&&typeof Blob==`function`?new Blob([e]):Buffer.from(e):e}function d(e,n,i){let s=e;if(k.isReactNative(t)&&k.isReactNativeBlob(e))return t.append(Bt(i,n,a),u(e)),!1;if(e&&!i&&typeof e==`object`){if(k.endsWith(n,`{}`))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(k.isArray(e)&&Vt(e)||(k.isFileList(e)||k.endsWith(n,`[]`))&&(s=k.toArray(e)))return n=zt(n),s.forEach(function(e,r){!(k.isUndefined(e)||e===null)&&t.append(o===!0?Bt([n],r,a):o===null?n:n+`[]`,u(e))}),!1}return Rt(e)?!0:(t.append(Bt(i,n,a),u(e)),!1)}let f=[],p=Object.assign(Ht,{defaultVisitor:d,convertValue:u,isVisitable:Rt});function m(e,n,r=0){if(!k.isUndefined(e)){if(r>c)throw new j(`Object is too deeply nested (`+r+` levels). Max depth: `+c,j.ERR_FORM_DATA_DEPTH_EXCEEDED);if(f.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));f.push(e),k.forEach(e,function(e,a){(!(k.isUndefined(e)||e===null)&&i.call(t,e,k.isString(a)?a.trim():a,n,p))===!0&&m(e,n?n.concat(a):[a],r+1)}),f.pop()}}if(!k.isObject(e))throw TypeError(`data must be an object`);return m(e),t}function Wt(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(e){return t[e]})}function Gt(e,t){this._pairs=[],e&&Ut(e,this,t)}var Kt=Gt.prototype;Kt.append=function(e,t){this._pairs.push([e,t])},Kt.toString=function(e){let t=e?function(t){return e.call(this,t,Wt)}:Wt;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};function qt(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`)}function Jt(e,t,n){if(!t)return e;let r=n&&n.encode||qt,i=k.isFunction(n)?{serialize:n}:n,a=i&&i.serialize,o;if(o=a?a(t,i):k.isURLSearchParams(t)?t.toString():new Gt(t,i).toString(r),o){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+o}return e}var Yt=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&=[]}forEach(e){k.forEach(this.handlers,function(t){t!==null&&e(t)})}},Xt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1},Zt={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:Gt,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},Qt=e({hasBrowserEnv:()=>$t,hasStandardBrowserEnv:()=>tn,hasStandardBrowserWebWorkerEnv:()=>nn,navigator:()=>en,origin:()=>rn}),$t=typeof window<`u`&&typeof document<`u`,en=typeof navigator==`object`&&navigator||void 0,tn=$t&&(!en||[`ReactNative`,`NativeScript`,`NS`].indexOf(en.product)<0),nn=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`,rn=$t&&window.location.href||`http://localhost`,M={...Qt,...Zt};function an(e,t){return Ut(e,new M.classes.URLSearchParams,{visitor:function(e,t,n,r){return M.isNode&&k.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)},...t})}function on(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(e=>e[0]===`[]`?``:e[1]||e[0])}function sn(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function cn(e){function t(e,n,r,i){let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&k.isArray(r)?r.length:a,s?(k.hasOwnProp(r,a)?r[a]=k.isArray(r[a])?r[a].concat(n):[r[a],n]:r[a]=n,!o):((!k.hasOwnProp(r,a)||!k.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&k.isArray(r[a])&&(r[a]=sn(r[a])),!o)}if(k.isFormData(e)&&k.isFunction(e.entries)){let n={};return k.forEachEntry(e,(e,r)=>{t(on(e),r,n,0)}),n}return null}var ln=(e,t)=>e!=null&&k.hasOwnProp(e,t)?e[t]:void 0;function un(e,t,n){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var dn={transitional:Xt,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=k.isObject(e);if(i&&k.isHTMLForm(e)&&(e=new FormData(e)),k.isFormData(e))return r?JSON.stringify(cn(e)):e;if(k.isArrayBuffer(e)||k.isBuffer(e)||k.isStream(e)||k.isFile(e)||k.isBlob(e)||k.isReadableStream(e))return e;if(k.isArrayBufferView(e))return e.buffer;if(k.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){let t=ln(this,`formSerializer`);if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return an(e,t).toString();if((a=k.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let n=ln(this,`env`),r=n&&n.FormData;return Ut(a?{"files[]":e}:e,r&&new r,t)}}return i||r?(t.setContentType(`application/json`,!1),un(e)):e}],transformResponse:[function(e){let t=ln(this,`transitional`)||dn.transitional,n=t&&t.forcedJSONParsing,r=ln(this,`responseType`),i=r===`json`;if(k.isResponse(e)||k.isReadableStream(e))return e;if(e&&k.isString(e)&&(n&&!r||i)){let n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e,ln(this,`parseReviver`))}catch(e){if(n)throw e.name===`SyntaxError`?j.from(e,j.ERR_BAD_RESPONSE,this,null,ln(this,`response`)):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:M.classes.FormData,Blob:M.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};k.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`],e=>{dn.headers[e]={}});function fn(e,t){let n=this||dn,r=t||n,i=A.from(r.headers),a=r.data;return k.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function pn(e){return!!(e&&e.__CANCEL__)}var mn=class extends j{constructor(e,t,n){super(e??`canceled`,j.ERR_CANCELED,t,n),this.name=`CanceledError`,this.__CANCEL__=!0}};function hn(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new j(`Request failed with status code `+n.status,n.status>=400&&n.status<500?j.ERR_BAD_REQUEST:j.ERR_BAD_RESPONSE,n.config,n.request,n))}function gn(e){let t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||``}function _n(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}function vn(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e(...t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i)]}var yn=(e,t,n=3)=>{let r=0,i=_n(50,250);return vn(n=>{if(!n||typeof n.loaded!=`number`)return;let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=o==null?a:Math.min(a,o),c=Math.max(0,s-r),l=i(c);r=Math.max(r,s),e({loaded:s,total:o,progress:o?s/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o?(o-s)/l:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0})},n)},bn=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},xn=e=>(...t)=>k.asap(()=>e(...t)),Sn=M.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,M.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(M.origin),M.navigator&&/(msie|trident)/i.test(M.navigator.userAgent)):()=>!0,Cn=M.hasStandardBrowserEnv?{write(e,t,n,r,i,a,o){if(typeof document>`u`)return;let s=[`${e}=${encodeURIComponent(t)}`];k.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),k.isString(r)&&s.push(`path=${r}`),k.isString(i)&&s.push(`domain=${i}`),a===!0&&s.push(`secure`),k.isString(o)&&s.push(`SameSite=${o}`),document.cookie=s.join(`; `)},read(e){if(typeof document>`u`)return null;let t=document.cookie.split(`;`);for(let n=0;n<t.length;n++){let r=t[n].replace(/^\s+/,``),i=r.indexOf(`=`);if(i!==-1&&r.slice(0,i)===e)return decodeURIComponent(r.slice(i+1))}return null},remove(e){this.write(e,``,Date.now()-864e5,`/`)}}:{write(){},read(){return null},remove(){}};function wn(e){return typeof e==`string`?/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e):!1}function Tn(e,t){return t?e.replace(/\/?\/$/,``)+`/`+t.replace(/^\/+/,``):e}function En(e,t,n){let r=!wn(t);return e&&(r||n===!1)?Tn(e,t):t}var Dn=e=>e instanceof A?{...e}:e;function On(e,t){t||={};let n=Object.create(null);Object.defineProperty(n,`hasOwnProperty`,{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(e,t,n,r){return k.isPlainObject(e)&&k.isPlainObject(t)?k.merge.call({caseless:r},e,t):k.isPlainObject(t)?k.merge({},t):k.isArray(t)?t.slice():t}function i(e,t,n,i){if(!k.isUndefined(t))return r(e,t,n,i);if(!k.isUndefined(e))return r(void 0,e,n,i)}function a(e,t){if(!k.isUndefined(t))return r(void 0,t)}function o(e,t){if(!k.isUndefined(t))return r(void 0,t);if(!k.isUndefined(e))return r(void 0,e)}function s(n,i,a){if(k.hasOwnProp(t,a))return r(n,i);if(k.hasOwnProp(e,a))return r(void 0,n)}let c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:s,headers:(e,t,n)=>i(Dn(e),Dn(t),n,!0)};return k.forEach(Object.keys({...e,...t}),function(r){if(r===`__proto__`||r===`constructor`||r===`prototype`)return;let a=k.hasOwnProp(c,r)?c[r]:i,o=a(k.hasOwnProp(e,r)?e[r]:void 0,k.hasOwnProp(t,r)?t[r]:void 0,r);k.isUndefined(o)&&a!==s||(n[r]=o)}),n}var kn=[`content-type`,`content-length`];function An(e,t,n){if(n!==`content-only`){e.set(t);return}Object.entries(t).forEach(([t,n])=>{kn.includes(t.toLowerCase())&&e.set(t,n)})}var jn=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16)));function Mn(e){let t=On({},e),n=e=>k.hasOwnProp(t,e)?t[e]:void 0,r=n(`data`),i=n(`withXSRFToken`),a=n(`xsrfHeaderName`),o=n(`xsrfCookieName`),s=n(`headers`),c=n(`auth`),l=n(`baseURL`),u=n(`allowAbsoluteUrls`),d=n(`url`);if(t.headers=s=A.from(s),t.url=Jt(En(l,d,u),n(`params`),n(`paramsSerializer`)),c&&s.set(`Authorization`,`Basic `+btoa((c.username||``)+`:`+(c.password?jn(c.password):``))),k.isFormData(r)&&(M.hasStandardBrowserEnv||M.hasStandardBrowserWebWorkerEnv||k.isReactNative(r)?s.setContentType(void 0):k.isFunction(r.getHeaders)&&An(s,r.getHeaders(),n(`formDataHeaderPolicy`))),M.hasStandardBrowserEnv&&(k.isFunction(i)&&(i=i(t)),i===!0||i==null&&Sn(t.url))){let e=a&&o&&Cn.read(o);e&&s.set(a,e)}return t}var Nn=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=Mn(e),i=r.data,a=A.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p;function m(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function g(){if(!h)return;let r=A.from(`getAllResponseHeaders`in h&&h.getAllResponseHeaders());hn(function(e){t(e),m()},function(e){n(e),m()},{data:!o||o===`text`||o===`json`?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}`onloadend`in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.startsWith(`file:`))||setTimeout(g)},h.onabort=function(){h&&=(n(new j(`Request aborted`,j.ECONNABORTED,e,h)),m(),null)},h.onerror=function(t){let r=new j(t&&t.message?t.message:`Network Error`,j.ERR_NETWORK,e,h);r.event=t||null,n(r),m(),h=null},h.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||Xt;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new j(t,i.clarifyTimeoutError?j.ETIMEDOUT:j.ECONNABORTED,e,h)),m(),h=null},i===void 0&&a.setContentType(null),`setRequestHeader`in h&&k.forEach(Et(a),function(e,t){h.setRequestHeader(t,e)}),k.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),o&&o!==`json`&&(h.responseType=r.responseType),c&&([d,p]=yn(c,!0),h.addEventListener(`progress`,d)),s&&h.upload&&([u,f]=yn(s),h.upload.addEventListener(`progress`,u),h.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{h&&=(n(!t||t.type?new mn(null,e,h):t),h.abort(),m(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let _=gn(r.url);if(_&&!M.protocols.includes(_)){n(new j(`Unsupported protocol `+_+`:`,j.ERR_BAD_REQUEST,e));return}h.send(i||null)})},Pn=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;let n=new AbortController,r=!1,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof j?t:new mn(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new j(`timeout of ${t}ms exceeded`,j.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>e.addEventListener(`abort`,i));let{signal:s}=n;return s.unsubscribe=()=>k.asap(o),s},Fn=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},In=async function*(e,t){for await(let n of Ln(e))yield*Fn(n,t)},Ln=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Rn=(e,t,n,r)=>{let i=In(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;n&&n(a+=o),e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})};function zn(e){if(!e||typeof e!=`string`||!e.startsWith(`data:`))return 0;let t=e.indexOf(`,`);if(t<0)return 0;let n=e.slice(5,t),r=e.slice(t+1);if(/;base64/i.test(n)){let e=r.length,t=r.length;for(let n=0;n<t;n++)if(r.charCodeAt(n)===37&&n+2<t){let t=r.charCodeAt(n+1),i=r.charCodeAt(n+2);(t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102)&&(i>=48&&i<=57||i>=65&&i<=70||i>=97&&i<=102)&&(e-=2,n+=2)}let n=0,i=t-1,a=e=>e>=2&&r.charCodeAt(e-2)===37&&r.charCodeAt(e-1)===51&&(r.charCodeAt(e)===68||r.charCodeAt(e)===100);i>=0&&(r.charCodeAt(i)===61?(n++,i--):a(i)&&(n++,i-=3)),n===1&&i>=0&&(r.charCodeAt(i)===61||a(i))&&n++;let o=Math.floor(e/4)*3-(n||0);return o>0?o:0}if(typeof Buffer<`u`&&typeof Buffer.byteLength==`function`)return Buffer.byteLength(r,`utf8`);let i=0;for(let e=0,t=r.length;e<t;e++){let n=r.charCodeAt(e);if(n<128)i+=1;else if(n<2048)i+=2;else if(n>=55296&&n<=56319&&e+1<t){let t=r.charCodeAt(e+1);t>=56320&&t<=57343?(i+=4,e++):i+=3}else i+=3}return i}var Bn=`1.17.0`,Vn=64*1024,{isFunction:Hn}=k,Un=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),Wn=e=>{if(!k.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},Gn=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Kn=e=>{let t=e.indexOf(`://`),n=e;return t!==-1&&(n=n.slice(t+3)),n.includes(`@`)||n.includes(`:`)},qn=e=>{let t=k.global!==void 0&&k.global!==null?k.global:globalThis,{ReadableStream:n,TextEncoder:r}=t;e=k.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);let{fetch:i,Request:a,Response:o}=e,s=i?Hn(i):typeof fetch==`function`,c=Hn(a),l=Hn(o);if(!s)return!1;let u=s&&Hn(n),d=s&&(typeof r==`function`?(e=>t=>e.encode(t))(new r):async e=>new Uint8Array(await new a(e).arrayBuffer())),f=c&&u&&Gn(()=>{let e=!1,t=new a(M.origin,{body:new n,method:`POST`,get duplex(){return e=!0,`half`}}),r=t.headers.has(`Content-Type`);return t.body!=null&&t.body.cancel(),e&&!r}),p=l&&u&&Gn(()=>k.isReadableStream(new o(``).body)),m={stream:p&&(e=>e.body)};s&&[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(e=>{!m[e]&&(m[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new j(`Response type '${e}' is not supported`,j.ERR_NOT_SUPPORT,n)})});let h=async e=>{if(e==null)return 0;if(k.isBlob(e))return e.size;if(k.isSpecCompliantForm(e))return(await new a(M.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(k.isArrayBufferView(e)||k.isArrayBuffer(e))return e.byteLength;if(k.isURLSearchParams(e)&&(e+=``),k.isString(e))return(await d(e)).byteLength},g=async(e,t)=>k.toFiniteNumber(e.getContentLength())??h(t);return async e=>{let{url:t,method:n,data:s,signal:l,cancelToken:u,timeout:d,onDownloadProgress:h,onUploadProgress:_,responseType:v,headers:y,withCredentials:b=`same-origin`,fetchOptions:ee,maxContentLength:x,maxBodyLength:te}=Mn(e),ne=k.isNumber(x)&&x>-1,S=k.isNumber(te)&&te>-1,C=t=>k.hasOwnProp(e,t)?e[t]:void 0,w=i||fetch;v=v?(v+``).toLowerCase():`text`;let T=Pn([l,u&&u.toAbortSignal()],d),E=null,D=T&&T.unsubscribe&&(()=>{T.unsubscribe()}),re;try{let i,l=C(`auth`);if(l&&(i={username:l.username||``,password:l.password||``}),Kn(t)){let e=new URL(t,M.origin);!i&&(e.username||e.password)&&(i={username:Wn(e.username),password:Wn(e.password)}),(e.username||e.password)&&(e.username=``,e.password=``,t=e.href)}if(i&&(y.delete(`authorization`),y.set(`Authorization`,`Basic `+btoa(Un((i.username||``)+`:`+(i.password||``))))),ne&&typeof t==`string`&&t.startsWith(`data:`)&&zn(t)>x)throw new j(`maxContentLength size of `+x+` exceeded`,j.ERR_BAD_RESPONSE,e,E);if(S&&n!==`get`&&n!==`head`){let t=await g(y,s);if(typeof t==`number`&&isFinite(t)&&t>te)throw new j(`Request body larger than maxBodyLength limit`,j.ERR_BAD_REQUEST,e,E)}if(_&&f&&n!==`get`&&n!==`head`&&(re=await g(y,s))!==0){let e=new a(t,{method:`POST`,body:s,duplex:`half`}),n;if(k.isFormData(s)&&(n=e.headers.get(`content-type`))&&y.setContentType(n),e.body){let[t,n]=bn(re,yn(xn(_)));s=Rn(e.body,Vn,t,n)}}k.isString(b)||(b=b?`include`:`omit`);let u=c&&`credentials`in a.prototype;if(k.isFormData(s)){let e=y.getContentType();e&&/^multipart\/form-data/i.test(e)&&!/boundary=/i.test(e)&&y.delete(`content-type`)}y.set(`User-Agent`,`axios/`+Bn,!1);let d={...ee,signal:T,method:n.toUpperCase(),headers:Et(y.normalize()),body:s,duplex:`half`,credentials:u?b:void 0};E=c&&new a(t,d);let ie=await(c?w(E,ee):w(t,d));if(ne){let t=k.toFiniteNumber(ie.headers.get(`content-length`));if(t!=null&&t>x)throw new j(`maxContentLength size of `+x+` exceeded`,j.ERR_BAD_RESPONSE,e,E)}let ae=p&&(v===`stream`||v===`response`);if(p&&ie.body&&(h||ne||ae&&D)){let t={};[`status`,`statusText`,`headers`].forEach(e=>{t[e]=ie[e]});let n=k.toFiniteNumber(ie.headers.get(`content-length`)),[r,i]=h&&bn(n,yn(xn(h),!0))||[],a=0;ie=new o(Rn(ie.body,Vn,t=>{if(ne&&(a=t,a>x))throw new j(`maxContentLength size of `+x+` exceeded`,j.ERR_BAD_RESPONSE,e,E);r&&r(t)},()=>{i&&i(),D&&D()}),t)}v||=`text`;let oe=await m[k.findKey(m,v)||`text`](ie,e);if(ne&&!p&&!ae){let t;if(oe!=null&&(typeof oe.byteLength==`number`?t=oe.byteLength:typeof oe.size==`number`?t=oe.size:typeof oe==`string`&&(t=typeof r==`function`?new r().encode(oe).byteLength:oe.length)),typeof t==`number`&&t>x)throw new j(`maxContentLength size of `+x+` exceeded`,j.ERR_BAD_RESPONSE,e,E)}return!ae&&D&&D(),await new Promise((t,n)=>{hn(t,n,{data:oe,headers:A.from(ie.headers),status:ie.status,statusText:ie.statusText,config:e,request:E})})}catch(t){if(D&&D(),T&&T.aborted&&T.reason instanceof j){let n=T.reason;throw n.config=e,E&&(n.request=E),t!==n&&(n.cause=t),n}throw t&&t.name===`TypeError`&&/Load failed|fetch/i.test(t.message)?Object.assign(new j(`Network Error`,j.ERR_NETWORK,e,E,t&&t.response),{cause:t.cause||t}):j.from(t,t&&t.code,e,E,t&&t.response)}}},Jn=new Map,Yn=e=>{let t=e&&e.env||{},{fetch:n,Request:r,Response:i}=t,a=[r,i,n],o=a.length,s,c,l=Jn;for(;o--;)s=a[o],c=l.get(s),c===void 0&&l.set(s,c=o?new Map:qn(t)),l=c;return c};Yn();var Xn={http:null,xhr:Nn,fetch:{get:Yn}};k.forEach(Xn,(e,t)=>{if(e){try{Object.defineProperty(e,`name`,{__proto__:null,value:t})}catch{}Object.defineProperty(e,`adapterName`,{__proto__:null,value:t})}});var Zn=e=>`- ${e}`,Qn=e=>k.isFunction(e)||e===null||e===!1;function $n(e,t){e=k.isArray(e)?e:[e];let{length:n}=e,r,i,a={};for(let o=0;o<n;o++){r=e[o];let n;if(i=r,!Qn(r)&&(i=Xn[(n=String(r)).toLowerCase()],i===void 0))throw new j(`Unknown adapter '${n}'`);if(i&&(k.isFunction(i)||(i=i.get(t))))break;a[n||`#`+o]=i}if(!i){let e=Object.entries(a).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`));throw new j(`There is no suitable adapter to dispatch the request `+(n?e.length>1?`since :
`+e.map(Zn).join(`
`):` `+Zn(e[0]):`as no adapter specified`),`ERR_NOT_SUPPORT`)}return i}var er={getAdapter:$n,adapters:Xn};function tr(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new mn(null,e)}function nr(e){return tr(e),e.headers=A.from(e.headers),e.data=fn.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),er.getAdapter(e.adapter||dn.adapter,e)(e).then(function(t){tr(e),e.response=t;try{t.data=fn.call(e,e.transformResponse,t)}finally{delete e.response}return t.headers=A.from(t.headers),t},function(t){if(!pn(t)&&(tr(e),t&&t.response)){e.response=t.response;try{t.response.data=fn.call(e,e.transformResponse,t.response)}finally{delete e.response}t.response.headers=A.from(t.response.headers)}return Promise.reject(t)})}var rr={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{rr[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var ir={};rr.transitional=function(e,t,n){function r(e,t){return`[Axios v`+Bn+`] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new j(r(i,` has been removed`+(t?` in `+t:``)),j.ERR_DEPRECATED);return t&&!ir[i]&&(ir[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),e?e(n,i,a):!0}},rr.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function ar(e,t,n){if(typeof e!=`object`)throw new j(`options must be an object`,j.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-- >0;){let a=r[i],o=Object.prototype.hasOwnProperty.call(t,a)?t[a]:void 0;if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new j(`option `+a+` must be `+n,j.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new j(`Unknown option `+a,j.ERR_BAD_OPTION)}}var or={assertOptions:ar,validators:rr},N=or.validators,sr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Yt,response:new Yt}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let n=(()=>{if(!t.stack)return``;let e=t.stack.indexOf(`
`);return e===-1?``:t.stack.slice(e+1)})();try{if(!e.stack)e.stack=n;else if(n){let t=n.indexOf(`
`),r=t===-1?-1:n.indexOf(`
`,t+1),i=r===-1?``:n.slice(r+1);String(e.stack).endsWith(i)||(e.stack+=`
`+n)}}catch{}}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=On(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&or.assertOptions(n,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean),legacyInterceptorReqResOrdering:N.transitional(N.boolean),advertiseZstdAcceptEncoding:N.transitional(N.boolean)},!1),r!=null&&(k.isFunction(r)?t.paramsSerializer={serialize:r}:or.assertOptions(r,{encode:N.function,serialize:N.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls===void 0?t.allowAbsoluteUrls=!0:t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls),or.assertOptions(t,{baseUrl:N.spelling(`baseURL`),withXsrfToken:N.spelling(`withXSRFToken`)},!0),t.method=(t.method||this.defaults.method||`get`).toLowerCase();let a=i&&k.merge(i.common,i[t.method]);i&&k.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`,`common`],e=>{delete i[e]}),t.headers=A.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){if(typeof e.runWhen==`function`&&e.runWhen(t)===!1)return;s&&=e.synchronous;let n=t.transitional||Xt;n&&n.legacyInterceptorReqResOrdering?o.unshift(e.fulfilled,e.rejected):o.push(e.fulfilled,e.rejected)});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[nr.bind(this),void 0];for(e.unshift(...o),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(;u<d;){let e=o[u++],t=o[u++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=nr.call(this,f)}catch(e){return Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return e=On(this.defaults,e),Jt(En(e.baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}};k.forEach([`delete`,`get`,`head`,`options`],function(e){sr.prototype[e]=function(t,n){return this.request(On(n||{},{method:e,url:t,data:(n||{}).data}))}}),k.forEach([`post`,`put`,`patch`,`query`],function(e){function t(t){return function(n,r,i){return this.request(On(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}sr.prototype[e]=t(),e!==`query`&&(sr.prototype[e+`Form`]=t(!0))});var cr=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new mn(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function lr(e){return function(t){return e.apply(null,t)}}function ur(e){return k.isObject(e)&&e.isAxiosError===!0}var dr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(dr).forEach(([e,t])=>{dr[t]=e});function fr(e){let t=new sr(e),n=se(sr.prototype.request,t);return k.extend(n,sr.prototype,t,{allOwnKeys:!0}),k.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return fr(On(e,t))},n}var P=fr(dn);P.Axios=sr,P.CanceledError=mn,P.CancelToken=cr,P.isCancel=pn,P.VERSION=Bn,P.toFormData=Ut,P.AxiosError=j,P.Cancel=P.CanceledError,P.all=function(e){return Promise.all(e)},P.spread=lr,P.isAxiosError=ur,P.mergeConfig=On,P.AxiosHeaders=A,P.formToJSON=e=>cn(k.isHTMLForm(e)?new FormData(e):e),P.getAdapter=er.getAdapter,P.HttpStatusCode=dr,P.default=P;var pr=new WeakMap,mr=new WeakMap,hr=new WeakMap,gr=new WeakMap,_r=new WeakMap,vr=new WeakMap,yr=new WeakMap,F=new WeakSet,br=class e extends EventTarget{constructor(...e){super(...e),C(this,F),w(this,pr,Math.random().toString(36).slice(2)),this.enabled=!0,w(this,mr,``),this.canAccessQueueManager=!1,w(this,hr,!0),this.totalJobs=0,this.jobInfo=[],this.displayedJob=null,this.displayedJobUnchangedCount=1,w(this,gr,null),this.isTracking=!1,w(this,_r,null),w(this,vr,null),w(this,yr,ie.getInstance())}static getInstance(){return Mr._||=new e,Mr._}static resetInstance(){Mr._&&=(Mr._.stopTracking(),E(vr,Mr._)?.close(),null)}initialize(e={}){T(mr,this,e.appId??``),this.canAccessQueueManager=e.canAccessQueueManager??!1,T(hr,this,e.runAutomatically??!0),S(F,this,xr).call(this)}async runQueue(){if(!E(hr,this)){this.startTracking(!1,!0);return}try{await P.post(E(yr,this).getActionUrl(`queue/run`))}catch(e){console.error(e)}this.startTracking(!1,!0)}startTracking(e=!1,t=!1){if(this.isTracking&&!t)return;E(gr,this)&&(clearTimeout(E(gr,this)),T(gr,this,null));let n=0;e===!0?n=S(F,this,wr).call(this):typeof e==`number`&&(n=e),n>0?T(gr,this,setTimeout(()=>{S(F,this,Tr).call(this)},n)):S(F,this,Tr).call(this)}stopTracking(){this.isTracking=!1,E(gr,this)&&(clearTimeout(E(gr,this)),T(gr,this,null)),E(_r,this)&&(E(_r,this).abort(),T(_r,this,null))}setJobData(e){this.totalJobs=e.length,S(F,this,Dr).call(this,e)}};function xr(){if(typeof BroadcastChannel>`u`||!E(mr,this))return;let e=`CraftCMS:${E(mr,this)}:queue`;T(vr,this,new BroadcastChannel(e)),E(vr,this).addEventListener(`message`,e=>{S(F,this,Sr).call(this,e.data)})}function Sr(e){if(e.instanceId!==E(pr,this))switch(e.event){case`beforeTrackJobProgress`:this.stopTracking();break;case`trackJobProgress`:if(e.jobData&&this.setJobData(e.jobData.jobs),this.displayedJob!==null){let e=S(F,this,wr).call(this)+1e3;this.startTracking(e)}break}}function Cr(e,t){E(vr,this)?.postMessage({event:e,instanceId:E(pr,this),...t})}function wr(){return Math.min(6e4,this.displayedJobUnchangedCount*500)}async function Tr(){S(F,this,Cr).call(this,`beforeTrackJobProgress`),this.isTracking=!0,T(_r,this,new AbortController);try{let e=await P.get(E(yr,this).getActionUrl(`queue/get-job-info`),{params:{dontExtendSession:1},signal:E(_r,this).signal});this.setJobData(e.data.jobs),S(F,this,Cr).call(this,`trackJobProgress`,{jobData:e.data}),this.displayedJob!==null&&this.startTracking(!0,!0)}catch(e){if(e instanceof Error&&e.name===`CanceledError`)return;let t=e;if(t.response?.status===400||t.response?.status===403){this.stopTracking();return}this.displayedJob!==null&&this.startTracking(!0,!0)}finally{this.isTracking=!1,T(_r,this,null)}}function Er(e,t){return e===null&&t===null?!0:e===null||t===null?!1:e.id===t.id&&e.progress===t.progress&&e.progressLabel===t.progressLabel&&e.status===t.status}function Dr(e){let t=this.displayedJob;this.jobInfo=e,this.displayedJob=S(F,this,Or).call(this),S(F,this,Er).call(this,t,this.displayedJob)?this.displayedJobUnchangedCount++:this.displayedJobUnchangedCount=1,S(F,this,kr).call(this),this.displayedJob?.status.value===x.Failed&&S(F,this,jr).call(this,this.displayedJob),this.displayedJob===null&&t&&S(F,this,Ar).call(this)}function Or(){if(this.jobInfo?.length===0)return null;let e=[x.Reserved,x.Failed,x.Pending];for(let t of e){let e=this.jobInfo.find(e=>e.status.value===t?!(t===x.Pending&&e.delay>0):!1);if(e)return e}return null}function kr(){let e={totalJobs:this.totalJobs,jobInfo:this.jobInfo,displayedJob:this.displayedJob};this.dispatchEvent(new CustomEvent(`job-update`,{detail:e}))}function Ar(){this.dispatchEvent(new CustomEvent(`job-complete`))}function jr(e){let t={job:e};this.dispatchEvent(new CustomEvent(`job-failed`,{detail:t}))}var Mr={_:null},Nr=_`
  :host([variant='default']) {
    --c-color-fill-loud: var(--c-color-neutral-fill-loud);
    --c-color-fill-normal: var(--c-color-neutral-fill-normal);
    --c-color-fill-quiet: var(--c-color-neutral-fill-quiet);
    --c-color-border-loud: var(--c-color-neutral-border-loud);
    --c-color-border-normal: var(--c-color-neutral-border-normal);
    --c-color-border-quiet: var(--c-color-neutral-border-quiet);
    --c-color-on-loud: var(--c-color-neutral-on-loud);
    --c-color-on-normal: var(--c-color-neutral-on-normal);
    --c-color-on-quiet: var(--c-color-neutral-on-quiet);
  }

  :host([variant='danger']) {
    --c-color-fill-loud: var(--c-color-danger-fill-loud);
    --c-color-fill-normal: var(--c-color-danger-fill-normal);
    --c-color-fill-quiet: var(--c-color-danger-fill-quiet);
    --c-color-border-loud: var(--c-color-danger-border-loud);
    --c-color-border-normal: var(--c-color-danger-border-normal);
    --c-color-border-quiet: var(--c-color-danger-border-quiet);
    --c-color-on-loud: var(--c-color-danger-on-loud);
    --c-color-on-normal: var(--c-color-danger-on-normal);
    --c-color-on-quiet: var(--c-color-danger-on-quiet);
  }

  :host([variant='info']) {
    --c-color-fill-loud: var(--c-color-info-fill-loud);
    --c-color-fill-normal: var(--c-color-info-fill-normal);
    --c-color-fill-quiet: var(--c-color-info-fill-quiet);
    --c-color-border-loud: var(--c-color-info-border-loud);
    --c-color-border-normal: var(--c-color-info-border-normal);
    --c-color-border-quiet: var(--c-color-info-border-quiet);
    --c-color-on-loud: var(--c-color-info-on-loud);
    --c-color-on-normal: var(--c-color-info-on-normal);
    --c-color-on-quiet: var(--c-color-info-on-quiet);
  }

  :host([variant='warning']) {
    --c-color-fill-loud: var(--c-color-warning-fill-loud);
    --c-color-fill-normal: var(--c-color-warning-fill-normal);
    --c-color-fill-quiet: var(--c-color-warning-fill-quiet);
    --c-color-border-loud: var(--c-color-warning-border-loud);
    --c-color-border-normal: var(--c-color-warning-border-normal);
    --c-color-border-quiet: var(--c-color-warning-border-quiet);
    --c-color-on-loud: var(--c-color-warning-on-loud);
    --c-color-on-normal: var(--c-color-warning-on-normal);
    --c-color-on-quiet: var(--c-color-warning-on-quiet);
  }

  :host([variant='success']) {
    --c-color-fill-loud: var(--c-color-success-fill-loud);
    --c-color-fill-normal: var(--c-color-success-fill-normal);
    --c-color-fill-quiet: var(--c-color-success-fill-quiet);
    --c-color-border-loud: var(--c-color-success-border-loud);
    --c-color-border-normal: var(--c-color-success-border-normal);
    --c-color-border-quiet: var(--c-color-success-border-quiet);
    --c-color-on-loud: var(--c-color-success-on-loud);
    --c-color-on-normal: var(--c-color-success-on-normal);
    --c-color-on-quiet: var(--c-color-success-on-quiet);
  }
`,Pr=class extends g{constructor(){super(),this.alt=!1,this.shift=!1,this.os=`Unknown`,this.os=this.detectOS()}connectedCallback(){super.connectedCallback(),this.os===`Unknown`&&(this.os=this.detectOS())}detectOS(){let e=navigator.platform.toLowerCase();return e.includes(`mac`)||/iphone|ipad|ipod/.test(e)?`Mac`:e.includes(`win`)?`Windows`:e.includes(`linux`)?`Linux`:`Unknown`}renderShortcutPrefix(){switch(this.os){case`Mac`:return`${this.alt?`⌥`:``}${this.shift?`⇧`:``}⌘`;case`Linux`:return`Super+${this.alt?`Alt+`:``}${this.shift?`Shift+`:``}`;default:return`Ctrl+${this.alt?`Alt+`:``}${this.shift?`Shift+`:``}`}}render(){return m`<span class="shortcut"
      >${this.renderShortcutPrefix()}<slot></slot
    ></span>`}};Pr.styles=_`
    :host {
      display: inline-flex;
    }

    .shortcut {
      font-size: 0.9em;
      padding: 0 var(--c-spacing-sm);
      background-color: var(--c-color-neutral-fill-quiet);
      border: 1px solid var(--c-color-neutral-border-quiet);
      border-radius: var(--c-radius-sm);
      box-shadow: var(--c-shadow-sm);
    }
  `,n([v({type:Boolean})],Pr.prototype,`alt`,void 0),n([v({type:Boolean})],Pr.prototype,`shift`,void 0),n([v()],Pr.prototype,`os`,void 0),customElements.get(`craft-shortcut`)||customElements.define(`craft-shortcut`,Pr);async function Fr(e){switch(e.type){case`clipboard`:await navigator.clipboard.writeText(e.value);break;case`http`:{if(e.confirm&&!confirm(e.confirm))return;let t=await fetch(e.url,{method:e.method||`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:e.body?JSON.stringify(e.body):void 0}),n=await t.json().catch(()=>({}));if(!t.ok)throw Error(n.message??`Request failed`);typeof n.redirect==`string`&&n.redirect&&Ir(n.redirect);break}case`event`:if(e.confirm&&!confirm(e.confirm))return;window.dispatchEvent(new CustomEvent(e.name,{detail:e.detail??{}}));break;case`download`:{let t=document.createElement(`a`);t.href=e.url,t.download=e.filename??``,t.click();break}default:throw Error(`Unknown action type: ${e.type}`)}}function Ir(e){window.dispatchEvent(new CustomEvent(`action:redirect`,{cancelable:!0,detail:{url:e}}))&&window.location.assign(e)}var Lr={Neutral:`neutral`,Success:`success`,Warning:`warning`,Danger:`danger`,Info:`info`},Rr=Object.values(Lr),zr=_`
  :host {
    display: contents;
  }

  .action-item {
    border-color: var(--c-color-border-quiet, transparent);
    color: var(--c-color-on-quiet, inherit);
    background-color: transparent;

    font: inherit;
    text-align: left;
    display: flex;
    width: 100%;
    align-items: center;
    text-decoration: none;
    padding-inline: var(--c-spacing-sm);
    padding-block: var(--c-spacing-sm);
    border-radius: var(--c-radius-md);
    position: relative;
    border-width: 0;
    border-style: solid;
  }

  @media (hover: hover) {
    :host(:hover) .action-item:not(:disabled) {
      background-color: var(
        --c-color-fill-quiet,
        var(--c-color-neutral-fill-quiet)
      );
      color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
    }
  }

  :host([active]) .action-item {
    background-color: var(--c-color-fill-loud);
    color: var(--c-color-on-loud);
  }

  .action-item:disabled {
    opacity: 0.5;
  }

  .action-item:not(:disabled) {
    cursor: pointer;
  }

  .action-item__check,
  .action-item__icon,
  .action-item__suffix {
    min-height: 1lh;
  }

  .action-item__check,
  .action-item__icon {
    min-width: 1lh;
    display: inline-grid;
    place-items: center;
    align-self: start;
  }

  .action-item__check {
    aspect-ratio: 1;
  }

  .action-item__suffix {
    align-self: center;
  }

  craft-shortcut {
    margin-inline-start: var(--c-spacing-sm);
  }

  .action-item__label {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-inline: var(--c-spacing-sm);
  }

  :host([variant='danger']) .action-item {
    color: var(--c-color-on-quiet);
  }

  @media (hover: hover) {
    :host(:hover[variant='danger']) .action-item:not(:disabled) {
      background-color: var(--c-color-fill-quiet);
      color: var(--c-color-on-quiet);
    }
  }
`,I=class extends g{constructor(...e){super(...e),this.icon=null,this.iconColor=null,this.href=null,this.disabled=!1,this.variant=Lr.Neutral,this.checked=!1,this.active=!1,this.type=`button`,this.action=null,this.feedback=null,this.feedbackDuration=1e3,this.confirm=null,this.state=te.Idle,this.feedbackMessage=null,this.shortcut=null}renderShortcut(){return typeof this.shortcut==`string`?m`<craft-shortcut>${this.shortcut}</craft-shortcut>`:this.shortcut===null?h:m`<craft-shortcut
        ?alt="${this.shortcut.alt??!1}"
        ?shift="${this.shortcut.shift??!1}"
        >${this.shortcut.key}</craft-shortcut
      >`}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this)}setState(e,t={}){this.state=e,this.feedbackMessage=t.message??null,this.dispatchEvent(new CustomEvent(`action:change-state`,{bubbles:!0,composed:!0,detail:{state:e,actionType:this.action?.type,...t}}))}async handleEvent(e){if(this.disabled){e.preventDefault();return}if(e.type===`click`&&this.action){this.action.type===`http`&&this.setState(te.Loading);try{await Fr(this.action),this.setState(te.Success,this.feedback?.success)}catch(e){this.setState(te.Error,{message:e.message,...this.feedback?.error||{}})}finally{setTimeout(()=>{this.setState(te.Idle)},this.feedbackDuration)}}}renderCheckbox(){return m`<span class="action-item__check">
      <slot name="checkmark">
        ${this.checked?m`<craft-icon name="check"></craft-icon>`:h}
      </slot>
    </span>`}renderIcon(){switch(this.state){case te.Loading:return m`<craft-spinner style="--size: 0.8em"></craft-spinner>`;case te.Success:return m`<craft-icon
          name="check"
          style="color: var(--c-color-success-on-normal)"
        ></craft-icon>`;case te.Error:return m`<craft-icon
          name="xmark"
          style="color: var(--c-color-danger-on-normal)"
        ></craft-icon>`;default:return m`
          <slot name="icon">
            ${this.icon?m`<craft-icon
                  name="${this.icon}"
                  style="${this.iconColor?`color: var(--c-color-${this.iconColor}-on-normal, currentColor)`:h}"
                ></craft-icon>`:h}
          </slot>
        `}}renderPrefix(){let e=!!this.querySelector(`[slot="icon"]`)||!!this.icon;return m`
      ${this.type===`checkbox`?this.renderCheckbox():h}
      ${e?m`<div class="action-item__icon">${this.renderIcon()}</div>`:h}
    `}renderBody(){return m`
      ${this.renderPrefix()}

      <span class="action-item__label">
        ${this.feedbackMessage?this.feedbackMessage:m`<slot></slot>`}
      </span>

      <span class="action-item__suffix">
        <slot name="suffix"></slot>
        ${this.shortcut?this.renderShortcut():h}
      </span>
    `}render(){return this.href?m`
          <a
            class="${c({"action-item":!0,"action-item--checkbox":this.type===`checkbox`})}"
            href="${this.href}"
          >
            ${this.renderBody()}
          </a>
        `:m`
          <button
            type="button"
            class="${c({"action-item":!0,"action-item--checkbox":this.type===`checkbox`})}"
            ?disabled="${this.disabled}"
          >
            ${this.renderBody()}
          </button>
        `}};I.styles=[Nr,zr],n([v()],I.prototype,`icon`,void 0),n([v()],I.prototype,`iconColor`,void 0),n([v()],I.prototype,`href`,void 0),n([v({type:Boolean})],I.prototype,`disabled`,void 0),n([v({reflect:!0})],I.prototype,`variant`,void 0),n([v({type:Boolean})],I.prototype,`checked`,void 0),n([v({type:Boolean})],I.prototype,`active`,void 0),n([v()],I.prototype,`type`,void 0),n([v({type:Object})],I.prototype,`action`,void 0),n([v({type:Object})],I.prototype,`feedback`,void 0),n([v({type:Number})],I.prototype,`feedbackDuration`,void 0),n([v()],I.prototype,`confirm`,void 0),n([y()],I.prototype,`state`,void 0),n([y()],I.prototype,`feedbackMessage`,void 0),n([v({converter:{fromAttribute(e){if(e===null)return null;try{let t=JSON.parse(e);if(typeof t==`object`&&t)return t}catch{}return e},toAttribute(e){return e===null?null:typeof e==`string`?e:JSON.stringify(e)}}})],I.prototype,`shortcut`,void 0),customElements.get(`craft-action-item`)||customElements.define(`craft-action-item`,I);function Br(e){let t=!!e.opened;e.addEventListener(`opened-changed`,()=>{let n=!!e.opened;if(n===t)return;t=n,e.dispatchEvent(new CustomEvent(n?`craft-show`:`craft-hide`,{bubbles:!0,composed:!0}));let r=n;e.updateComplete.then(()=>{!!e.opened===r&&e.dispatchEvent(new CustomEvent(r?`craft-after-show`:`craft-after-hide`,{bubbles:!0,composed:!0}))})})}var Vr=new WeakMap;function Hr(e,t){let n=t;for(;n;){if(Vr.get(n)===e)return!0;n=Object.getPrototypeOf(n)}return!1}function L(e){return t=>{if(Hr(e,t))return t;let n=e(t);return Vr.set(n,e),n}}var Ur=L(e=>class extends e{static get properties(){return{disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this._requestedToBeDisabled=!1,this.__isUserSettingDisabled=!0,this.__restoreDisabledTo=!1,this.disabled=!1}makeRequestToBeDisabled(){this._requestedToBeDisabled===!1&&(this._requestedToBeDisabled=!0,this.__restoreDisabledTo=this.disabled,this.__internalSetDisabled(!0))}retractRequestToBeDisabled(){this._requestedToBeDisabled===!0&&(this._requestedToBeDisabled=!1,this.__internalSetDisabled(this.__restoreDisabledTo))}__internalSetDisabled(e){this.__isUserSettingDisabled=!1,this.disabled=e,this.__isUserSettingDisabled=!0}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`disabled`&&(this.__isUserSettingDisabled&&(this.__restoreDisabledTo=this.disabled),this.disabled===!1&&this._requestedToBeDisabled===!0&&this.__internalSetDisabled(!0))}click(){this.disabled||super.click()}}),Wr=L(e=>class extends Ur(e){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:`tabindex`}}}constructor(){super(),this.__isUserSettingTabIndex=!0,this.__restoreTabIndexTo=0,this.__internalSetTabIndex(0)}makeRequestToBeDisabled(){super.makeRequestToBeDisabled(),this._requestedToBeDisabled===!1&&this.tabIndex!=null&&(this.__restoreTabIndexTo=this.tabIndex)}retractRequestToBeDisabled(){super.retractRequestToBeDisabled(),this._requestedToBeDisabled===!0&&this.__internalSetTabIndex(this.__restoreTabIndexTo)}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];__internalSetTabIndex(e){this.__isUserSettingTabIndex=!1,this.tabIndex=e,this.__isUserSettingTabIndex=!0}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`disabled`&&(this.disabled?this.__internalSetTabIndex(-1):this.__internalSetTabIndex(this.__restoreTabIndexTo)),e===`tabIndex`&&(this.__isUserSettingTabIndex&&this.tabIndex!=null&&(this.__restoreTabIndexTo=this.tabIndex),this.tabIndex!==-1&&this._requestedToBeDisabled===!0&&this.__internalSetTabIndex(-1))}firstUpdated(e){super.firstUpdated(e),this.disabled&&this.__internalSetTabIndex(-1)}}),{I:Gr}=u,Kr=e=>e===null||typeof e!=`object`&&typeof e!=`function`,qr=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,Jr=e=>e.strings===void 0,Yr=()=>document.createComment(``),Xr=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new Gr(r.insertBefore(Yr(),i),r.insertBefore(Yr(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=e.nextSibling;r.insertBefore(e,i),e=t}}}return n},Zr=(e,t,n=e)=>(e._$AI(t,n),e),Qr={},$r=(e,t=Qr)=>e._$AH=t,ei=e=>e._$AH,ti=e=>{e._$AR(),e._$AA.remove()};function ni(e,t){let n=!1;Array.from(e.childNodes).forEach(e=>{let r=e.hasAttribute&&e.hasAttribute(`slot`);if(e.nodeType===Node.COMMENT_NODE&&!n&&(n=e.textContent.includes(`_start_slot_`)),n){e.textContent.includes(`_end_slot_`)&&(n=!1);return}r||t.appendChild(e)})}function ri(e){return e instanceof Node?`node`:qr(e)?`template-result`:!Array.isArray(e)&&typeof e==`object`&&`template`in e?`slot-rerender-object`:null}var ii=L(e=>class extends e{get slots(){return{}}constructor(){super(),this.__renderMetaPerSlot=new Map,this.__slotsThatNeedRerender=new Set,this.__slotsProvidedByUserOnFirstConnected=new Set,this.__privateSlots=new Set}connectedCallback(){super.connectedCallback(),this._connectSlotMixin()}__rerenderSlot(e){let t=this.slots[e]();this.__renderTemplateInScopedContext({renderAsDirectHostChild:t.renderAsDirectHostChild,template:t.template,slotName:e}),t.afterRender?.()}update(e){super.update(e);for(let e of this.__slotsThatNeedRerender)this.__rerenderSlot(e)}__renderTemplateInScopedContext({template:e,slotName:t,renderAsDirectHostChild:n}){if(!this.__renderMetaPerSlot.has(t)){let r=!!ShadowRoot.prototype.createElement;this.shadowRoot||console.error(`[SlotMixin] No shadowRoot was found`);let i=(r?this.shadowRoot:document).createElement(`div`),a=document.createComment(`_start_slot_${t}_`),o=document.createComment(`_end_slot_${t}_`);i.appendChild(a),i.appendChild(o);let{creationScope:s,host:c}=this.renderOptions;if(p(e,i,{renderBefore:o,creationScope:s,host:c}),n){let e=Array.from(i.childNodes);this.__appendNodes({nodes:e,renderParent:this,slotName:t})}else i.slot=t,this.appendChild(i);this.__renderMetaPerSlot.set(t,{renderTargetThatRespectsShadowRootScoping:i,renderBefore:o});return}let{renderBefore:r,renderTargetThatRespectsShadowRootScoping:i}=this.__renderMetaPerSlot.get(t),a=n?this:i,{creationScope:o,host:s}=this.renderOptions;p(e,a,{creationScope:o,host:s,renderBefore:r}),n&&r.previousElementSibling&&!r.previousElementSibling.slot&&(r.previousElementSibling.slot=t)}__appendNodes({nodes:e,renderParent:t=this,slotName:n}){for(let r of e)r instanceof Element&&n&&n!==``&&r.setAttribute(`slot`,n),t.appendChild(r)}__initSlots(e){for(let t of e){if(this.__slotsProvidedByUserOnFirstConnected.has(t))continue;let e=this.slots[t]();if(e!==void 0)switch(this.__isConnectedSlotMixin||this.__privateSlots.add(t),ri(e)){case`template-result`:this.__renderTemplateInScopedContext({template:e,renderAsDirectHostChild:!0,slotName:t});break;case`node`:this.__appendNodes({nodes:[e],renderParent:this,slotName:t});break;case`slot-rerender-object`:this.__slotsThatNeedRerender.add(t),e.firstRenderOnConnected&&this.__rerenderSlot(t);break;default:throw Error(`Slot "${t}" configured inside "get slots()" (in prototype) of ${this.constructor.name} may return these types: TemplateResult | Node | {template:TemplateResult, afterRender?:function} | undefined.
              You provided: ${e}`)}}}_connectSlotMixin(){if(this.__isConnectedSlotMixin)return;let e=Object.keys(this.slots);for(let t of e)(t===``?Array.from(this.children).find(e=>!e.hasAttribute(`slot`)):Array.from(this.children).find(e=>e.slot===t))&&this.__slotsProvidedByUserOnFirstConnected.add(t);this.__initSlots(e),this.__isConnectedSlotMixin=!0}_isPrivateSlot(e){return this.__privateSlots.has(e)}});function ai(e=`google-chrome`){let t=globalThis.navigator,n=!!t.userAgentData&&t.userAgentData.brands.some(e=>e.brand===`Chromium`);if(e===`chromium`)return n;let r=globalThis.navigator?.vendor,i=globalThis.opr!==void 0,a=globalThis.userAgent?.indexOf(`Edge`)>-1,o=globalThis.userAgent?.match(`CriOS`);if(e===`ios`)return o;if(e===`google-chrome`)return n!=null&&r===`Google Inc.`&&i===!1&&a===!1}var oi={isIE11:/Trident/.test(globalThis.navigator?.userAgent),isChrome:ai(),isIOSChrome:ai(`ios`),isChromium:ai(`chromium`),isFirefox:globalThis.navigator?.userAgent.toLowerCase().indexOf(`firefox`)>-1,isMac:globalThis.navigator?.appVersion?.indexOf(`Mac`)!==-1,isIOS:/iPhone|iPad|iPod/i.test(globalThis.navigator?.userAgent),isMacSafari:globalThis.navigator?.vendor&&globalThis.navigator?.vendor.indexOf(`Apple`)>-1&&globalThis.navigator?.userAgent&&globalThis.navigator?.userAgent.indexOf(`CriOS`)===-1&&globalThis.navigator?.userAgent.indexOf(`FxiOS`)===-1&&globalThis.navigator?.appVersion.indexOf(`Mac`)!==-1};function si(e=``){return`${e.length>0?`${e}-`:``}${Math.random().toString(36).substr(2,10)}`}var ci=_`
  body > *[inert] {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
  }

  body.overlays-scroll-lock {
    overflow: hidden;
  }

  body.overlays-scroll-lock-ios-fix {
    position: fixed;
    width: 100%;
  }

  html.overlays-scroll-lock-ios-fix {
    height: 100vh;
  }
`,li=class e{static __createGlobalStyleNode(){let e=document.createElement(`style`);return e.setAttribute(`data-overlays`,``),e.textContent=ci.cssText,document.head.appendChild(e),e}get list(){return this.__list}get shownList(){return this.__shownList}constructor(){this.__list=[],this.__shownList=[],this._siblingsInert=!1,this.__blockingMap=new WeakMap,e.__globalStyleNode||=e.__createGlobalStyleNode()}add(e){if(this.list.find(t=>e===t))throw Error(`controller instance is already added`);return this.list.push(e),e}remove(e){if(!this.list.find(t=>e===t))throw Error(`could not find controller to remove`);this.__list=this.list.filter(t=>t!==e),this.__shownList=this.shownList.filter(t=>t!==e)}show(e){this.list.find(t=>e===t)&&this.hide(e),this.__shownList.unshift(e),Array.from(this.__shownList).reverse().forEach((e,t)=>{e.elevation=t+1})}hide(e){if(!this.list.find(t=>e===t))throw Error(`could not find controller to hide`);this.__shownList=this.shownList.filter(t=>t!==e)}teardown(){this.list.forEach(e=>{e.teardown()}),this.__list=[],this.__shownList=[],this._siblingsInert=!1,e.__globalStyleNode&&=(document.head.removeChild(e.__globalStyleNode),void 0)}get siblingsInert(){return this._siblingsInert}requestToPreventScroll(){let{isIOS:e,isMacSafari:t}=oi;document.body.classList.add(`overlays-scroll-lock`),(e||t)&&document.body.classList.add(`overlays-scroll-lock-ios-fix`),e&&document.documentElement.classList.add(`overlays-scroll-lock-ios-fix`)}requestToEnableScroll(e){if((e?this.shownList.filter(t=>t!==e):this.shownList).some(e=>e.preventsScroll===!0))return;let{isIOS:t,isMacSafari:n}=oi;document.body.classList.remove(`overlays-scroll-lock`),(t||n)&&document.body.classList.remove(`overlays-scroll-lock-ios-fix`),t&&document.documentElement.classList.remove(`overlays-scroll-lock-ios-fix`)}requestToShowOnly(e){let t=this.shownList.filter(t=>t!==e);t.forEach(e=>e.hide()),this.__blockingMap.set(e,t)}retractRequestToShowOnly(e){this.__blockingMap.has(e)&&this.__blockingMap.get(e).forEach(e=>e.show())}};li.__globalStyleNode=void 0;var ui=Symbol.for(`lion::SingletonManagerClassStorage`),di=globalThis||window,fi=class{constructor(){this._map=di[ui]?di[ui]:di[ui]=new Map}set(e,t){this.has(e)||this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}},pi=e=>{let t=null,n=()=>(t===null&&(t=e()),t);return new Proxy({},{get(e,t){let r=n();return t===`addEventListener`||t===`removeEventListener`?Reflect.get(r,t).bind(r):t===`__instance_for_testing`?r:Reflect.get(r,t,r)},set(e,t,r){return Reflect.set(n(),t,r)},getOwnPropertyDescriptor(e,t){return Reflect.getOwnPropertyDescriptor(n(),t)},getPrototypeOf(){return Reflect.getPrototypeOf(n())}})},mi=new fi;function hi(){if(!mi.has(`@lion/ui::overlays::0.x`)){let e=new li;mi.set(`@lion/ui::overlays::0.x`,e)}return mi.get(`@lion/ui::overlays::0.x`)}var gi=pi(hi);function _i(e,t,n={}){function r(e){return`getAttribute`in e}function i(e){if(!r(e))return null;let t=e.getAttribute(`slot`),i=null;if(t){let r=n[t];r&&(i=r.filter(t=>t?.element===e)[0]||null)}return i}let a=i(e);if(a)return a.deepContains;function o(t){if(!r(e))return;let i=e.getAttribute(`slot`);i&&(n[i]=n[i]||[],n[i].push({element:e,deepContains:t}))}let s=e.contains(t);if(s)return o(!0),!0;function c(e){return e.tagName===`SLOT`}function l(e){return c(e)?e.assignedElements():[]}function u(e){return e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function d(e){let i=!1;for(let a=0;a<e.length;a+=1){let o=e[a];if(o&&(r(o)||u(o))&&_i(o,t,n)){i=!0;break}}return i}function f(e){for(let t=0;t<e.children.length;t+=1){let n=e.children[t],r=i(n);if(r){s=r.deepContains||s;break}let a=l(n);if(d([n.shadowRoot,...a])){s=!0;break}n.children.length>0&&f(n)}}return e instanceof HTMLElement&&e.shadowRoot&&(s=_i(e.shadowRoot,t,n),s)?(o(!0),!0):(f(e),o(s),s)}var vi=_`
  .overlays {
    position: fixed;
    z-index: 200;
  }

  .overlays__overlay-container {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .overlays__overlay-container::backdrop {
    display: none;
  }

  .overlays__overlay-container--top-left {
    justify-content: flex-start;
    align-items: flex-start;
  }

  .overlays__overlay-container--top {
    justify-content: center;
    align-items: flex-start;
  }

  .overlays__overlay-container--top-right {
    justify-content: flex-end;
    align-items: flex-start;
  }

  .overlays__overlay-container--right {
    justify-content: flex-end;
    align-items: center;
  }

  .overlays__overlay-container--bottom-left {
    justify-content: flex-start;
    align-items: flex-end;
  }

  .overlays__overlay-container--bottom {
    justify-content: center;
    align-items: flex-end;
  }

  .overlays__overlay-container--bottom-right {
    justify-content: flex-end;
    align-items: flex-end;
  }

  .overlays__overlay-container--left {
    justify-content: flex-start;
    align-items: center;
  }

  .overlays__overlay-container--center {
    justify-content: center;
    align-items: center;
  }

  .overlays__overlay--bottom-sheet {
    width: 100%;
  }

  ::slotted(.overlays__overlay),
  .overlays__overlay {
    pointer-events: auto;
  }

  .overlays__backdrop {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #333333;
    display: none;
  }

  .overlays__backdrop--visible {
    display: block;
  }

  .overlays__backdrop--animation-in {
    animation: overlays-backdrop-fade-in 300ms;
    opacity: 0.3;
  }

  .overlays__backdrop--animation-out {
    animation: overlays-backdrop-fade-out 300ms;
    opacity: 0;
  }

  @keyframes overlays-backdrop-fade-in {
    from {
      opacity: 0;
    }
  }

  @keyframes overlays-backdrop-fade-out {
    from {
      opacity: 0.3;
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    .overlays .overlays__backdrop--animation-in {
      animation: overlays-backdrop-fade-in 1ms;
    }

    .overlays .overlays__backdrop--animation-out {
      animation: overlays-backdrop-fade-out 1ms;
    }
  }

  dialog[data-overlay-outer-wrapper] {
    background-image: none;
    border-style: none;
    padding: 0px;
  }

  /** 
   * We don't want to use pseudo el ::backdrop.  
   * We have our own, that creates more flexibility wrt scrolling etc.
   */
  dialog[data-overlay-outer-wrapper]::backdrop {
    display: none;
  }
`,yi={supportsAdoptingStyleSheets:window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,adoptStyle:void 0,adoptStyles:void 0},bi=new WeakMap;function xi(e){return Array.from(e.cssRules).map(e=>e.cssText).join(``)}function Si(e,t,{teardown:n=!1}={}){let r=e===document?document.body:e,i=t.cssText||xi(t);if(n){let e=Array.from(r.querySelectorAll(`style`));for(let t of e)if(t.textContent===i){t.remove();break}}else{let e=document.createElement(`style`),t=window.litNonce;t!==void 0&&e.setAttribute(`nonce`,t),e.textContent=i,r.appendChild(e)}}function Ci(e,t,{teardown:n=!1}={}){let r=!1;e&&!bi.has(e)&&bi.set(e,[]);let i=bi.get(e)??[],a=i.find(e=>t===e);return a&&n?i.splice(i.indexOf(t),1):!a&&!n?i.push(t):(a&&!n||!a&&n)&&(r=!0),{haltFurtherExecution:r}}function wi(e,t,{teardown:n=!1}={}){let{haltFurtherExecution:r}=Ci(e,t,{teardown:n});if(r)return;if(!yi.supportsAdoptingStyleSheets||oi.isIOS){Si(e,t,{teardown:n});return}let i=t instanceof CSSStyleSheet?t:t.styleSheet;if(!i)throw Error(`Please provide a CSSResultOrNative style`);n?e.adoptedStyleSheets.includes(i)&&e.adoptedStyleSheets.splice(e.adoptedStyleSheets.indexOf(i),1):e.adoptedStyleSheets=[...e.adoptedStyleSheets,i]}function Ti(e,t,{teardown:n=!1}={}){for(let r of t)yi.adoptStyle(e,r,{teardown:n})}yi.adoptStyle=wi,yi.adoptStyles=Ti;var Ei=({visibility:e,display:t})=>e!==`hidden`&&t!==`none`,Di=({display:e})=>e===`contents`;function Oi(e){if(!e||!e.isConnected||!Ei(e.style))return!1;let t=window.getComputedStyle(e);return Ei(t)?Di(t)?!0:!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length):!1}function ki(e,t){let n=Math.max(e.tabIndex,0),r=Math.max(t.tabIndex,0);return n===0||r===0?r>n:n>r}function Ai(e,t){let n=[];for(;e.length>0&&t.length>0;)ki(e[0],t[0])?n.push(t.shift()):n.push(e.shift());return[...n,...e,...t]}function ji(e){let t=e.length;if(t<2)return e;let n=Math.ceil(t/2);return Ai(ji(e.slice(0,n)),ji(e.slice(n)))}var Mi=`matches`in Element.prototype?`matches`:`msMatchesSelector`;function Ni(e){return e[Mi](`input, select, textarea, button, object`)?e[Mi](`:not([disabled])`):e[Mi](`a[href], area[href], iframe, [tabindex], [contentEditable]`)}function Pi(e){return Ni(e)?Number(e.getAttribute(`tabindex`)||0):-1}function Fi(e){if(e.localName===`slot`)return e.assignedNodes({flatten:!0});let{children:t}=e.shadowRoot||e;return t||[]}function Ii(e){return e.nodeType===Node.ELEMENT_NODE?e.localName===`slot`?!0:Oi(e):!1}function Li(e,t){if(!Ii(e))return!1;let n=e,r=Pi(n),i=r>0;r>=0&&t.push(n);let a=Fi(n);for(let e=0;e<a.length;e+=1)i=Li(a[e],t)||i;return i}function Ri(e){let t=[];return Li(e,t)?ji(t):t}var zi=`modulepreload`,Bi=function(e,t){return new URL(e,t).href},Vi={},R=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Bi(t,n),t in Vi)return;Vi[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:zi,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function Hi({wrappingDialogNodeL1:e,contentWrapperNodeL2:t,contentNodeL3:n}){if(!(t.isConnected||n.isConnected))throw Error(`[OverlayController] Could not find a render target, since the provided contentNode is not connected to the DOM. Make sure that it is connected, e.g. by doing "document.body.appendChild(contentNode)", before passing it on.`);let r,i=document.createComment(`tempMarker`);t.isConnected?(r=t.parentElement||t.getRootNode(),r.insertBefore(i,t),e.appendChild(t)):n.assignedSlot?(r=n.assignedSlot.parentElement||n.assignedSlot.getRootNode(),r.insertBefore(i,n.assignedSlot),e.appendChild(t),t.appendChild(n.assignedSlot)):(r=n.parentElement||n.getRootNode(),r.insertBefore(i,n),e.appendChild(t),t.appendChild(n)),r.insertBefore(e,i),r?.removeChild(i)}async function Ui(){return R(()=>import(`./popper-CDzT33h4.js`),[],import.meta.url)}var Wi=new WeakMap,Gi=class e extends EventTarget{#e=!1;constructor(e={},t=gi){super(),this.manager=t,this.__sharedConfig=e,this.__activeElementRightBeforeHide=null,this.config={},this._defaultConfig={placementMode:void 0,contentNode:e.contentNode,contentWrapperNode:e.contentWrapperNode,invokerNode:e.invokerNode,backdropNode:e.backdropNode,referenceNode:void 0,elementToFocusAfterHide:e.invokerNode,inheritsReferenceWidth:`none`,hasBackdrop:!1,isBlocking:!1,preventsScroll:!1,trapsKeyboardFocus:!1,hidesOnEsc:!1,hidesOnOutsideEsc:!1,hidesOnOutsideClick:!1,isTooltip:!1,isAlertDialog:!1,invokerRelation:`description`,visibilityTriggerFunction:void 0,handlesAccessibility:!1,popperConfig:{placement:`top`,strategy:`fixed`,modifiers:[{name:`preventOverflow`,enabled:!0,options:{boundariesElement:`viewport`,padding:8}},{name:`flip`,options:{boundariesElement:`viewport`,padding:16}},{name:`offset`,enabled:!0,options:{offset:[0,8]}},{name:`arrow`,enabled:!1}]},viewportConfig:{placement:`center`},zIndex:9999},this._contentId=`overlay-content--${Math.random().toString(36).slice(2,10)}`,this.__originalAttrs=new Map,this.__escKeyHandler=this.__escKeyHandler.bind(this),this.updateConfig(e),this.__hasActiveBackdrop=!0,this.__cancelHandler=this.__cancelHandler.bind(this),this.__escKeyHandlerCalled=!1}get invoker(){return this.invokerNode}get content(){return this.__wrappingDialogNode}get placementMode(){return this.config?.placementMode}get invokerNode(){return this.config?.invokerNode}get referenceNode(){return this.config?.referenceNode}get contentNode(){return this.config?.contentNode}get contentWrapperNode(){return this.__contentWrapperNode||this.config?.contentWrapperNode}get backdropNode(){return this.__backdropNode||this.config?.backdropNode}get elementToFocusAfterHide(){return this.__elementToFocusAfterHide||this.config?.elementToFocusAfterHide}get hasBackdrop(){return!!this.backdropNode||this.config?.hasBackdrop}get isBlocking(){return this.config?.isBlocking}get preventsScroll(){return this.config?.preventsScroll}get trapsKeyboardFocus(){return this.config?.trapsKeyboardFocus}get hidesOnEsc(){return this.config?.hidesOnEsc}get hidesOnOutsideClick(){return this.config?.hidesOnOutsideClick}get hidesOnOutsideEsc(){return this.config?.hidesOnOutsideEsc}get inheritsReferenceWidth(){return this.config?.inheritsReferenceWidth}get handlesAccessibility(){return this.config?.handlesAccessibility}get isTooltip(){return this.config?.isTooltip}get isAlertDialog(){return this.config?.isAlertDialog}get invokerRelation(){return this.config?.invokerRelation}get popperConfig(){return this.config?.popperConfig}get viewportConfig(){return this.config?.viewportConfig}get visibilityTriggerFunction(){return this.config?.visibilityTriggerFunction}get _referenceNode(){return this.referenceNode||this.invokerNode}set elevation(e){this.__wrappingDialogNode.style.zIndex=`${this.config.zIndex+e}`}get elevation(){return Number(this.contentWrapperNode?.style.zIndex)}updateConfig(e){this.teardown(),this.__prevConfig=this.config,this.config={...this._defaultConfig,...this.__sharedConfig,...e,popperConfig:{...this._defaultConfig.popperConfig||{},...this.__sharedConfig.popperConfig||{},...e.popperConfig||{},modifiers:[...this._defaultConfig.popperConfig?.modifiers||[],...this.__sharedConfig.popperConfig?.modifiers||[],...e.popperConfig?.modifiers||[]]}},this.__validateConfiguration(this.config),this._init(),this.__elementToFocusAfterHide=void 0,this.#t()||this.manager.add(this)}#t(){return!!this.manager.list.find(e=>this===e)}__validateConfiguration(e){if(!e.placementMode)throw Error(`[OverlayController] You need to provide a .placementMode ("global"|"local")`);if(![`global`,`local`].includes(e.placementMode))throw Error(`[OverlayController] "${e.placementMode}" is not a valid .placementMode, use ("global"|"local")`);if(!e.contentNode)throw Error(`[OverlayController] You need to provide a .contentNode`);if(e.isTooltip&&!e.handlesAccessibility)throw Error(`[OverlayController] .isTooltip only takes effect when .handlesAccessibility is enabled`)}_init(){this.__contentHasBeenInitialized||=(this.__initContentDomStructure(),!0),this.contentWrapperNode.removeAttribute(`style`),this.contentWrapperNode.removeAttribute(`class`),this.placementMode===`local`&&(e.popperModule||=Ui()),this.__handleOverlayStyles({phase:`init`}),this._handleFeatures({phase:`init`})}__handleOverlayStyles({phase:e}){let t=this.contentWrapperNode?.getRootNode();e===`init`?yi.adoptStyle(t,vi):e===`teardown`&&yi.adoptStyle(t,vi,{teardown:!0})}__initContentDomStructure(){let e=document.createElement(`dialog`);e.setAttribute(`role`,`none`),e.setAttribute(`data-overlay-outer-wrapper`,``),e.style.cssText=`display:none; z-index: ${this.config.zIndex}; padding: 0;`,this.__wrappingDialogNode=e,this.config?.contentWrapperNode||(this.__contentWrapperNode=document.createElement(`div`)),this.contentWrapperNode.setAttribute(`data-id`,`content-wrapper`),Hi({wrappingDialogNodeL1:e,contentWrapperNodeL2:this.contentWrapperNode,contentNodeL3:this.contentNode}),e.open=!0,this.isTooltip&&e.setAttribute(`tabindex`,`-1`),this.__wrappingDialogNode.style.display=`none`,this.contentWrapperNode.style.zIndex=`1`,getComputedStyle(this.contentNode).position===`absolute`&&(this.contentNode.style.position=`static`),HTMLDialogElement&&`closedBy`in HTMLDialogElement.prototype?e.closedBy=`none`:(e.addEventListener(`keydown`,e=>{e.key===`Escape`&&e.preventDefault()}),e.addEventListener(`keyup`,e=>{e.key===`Escape`&&e.preventDefault()}),e.addEventListener(`cancel`,e=>{e.stopPropagation()}),e.addEventListener(`close`,e=>{e.stopPropagation()}))}_handleZIndex({phase:e}){if(this.placementMode===`local`&&e===`setup`){let e=Number(getComputedStyle(this.contentNode).zIndex);(e<1||Number.isNaN(e))&&(this.contentNode.style.zIndex=`1`)}}__setupTeardownAccessibility({phase:e}){if(e===`init`){this.__storeOriginalAttrs(this.contentNode,[`role`,`id`]);let e=this.trapsKeyboardFocus;if(this.invokerNode){let t=[`aria-labelledby`,`aria-describedby`];e||t.push(`aria-expanded`),this.__storeOriginalAttrs(this.invokerNode,t)}this.contentNode.id||this.contentNode.setAttribute(`id`,this._contentId),this.isTooltip?(this.invokerNode&&this.invokerNode.setAttribute(this.invokerRelation===`label`?`aria-labelledby`:`aria-describedby`,this._contentId),this.contentNode.setAttribute(`role`,`tooltip`)):(this.invokerNode&&!e&&this.invokerNode.setAttribute(`aria-expanded`,`${this.isShown}`),this.isAlertDialog?this.contentNode.setAttribute(`role`,`alertdialog`):this.contentNode.getAttribute(`role`)||this.contentNode.setAttribute(`role`,`dialog`))}else e===`teardown`&&this.__restoreOriginalAttrs()}__storeOriginalAttrs(e,t){let n={};t.forEach(t=>{n[t]=e.getAttribute(t)}),this.__originalAttrs.set(e,n)}__restoreOriginalAttrs(){for(let[e,t]of this.__originalAttrs)Object.entries(t).forEach(([t,n])=>{n===null?e.removeAttribute(t):e.setAttribute(t,n)});this.__originalAttrs.clear()}get isShown(){return this.__wrappingDialogNode?.style.display!==`none`}async show(e=this.elementToFocusAfterHide){if(this._showComplete&&await this._showComplete,this._showComplete=new Promise(e=>{this._showResolve=e}),this.manager&&this.manager.show(this),this.isShown){this._showResolve();return}let t=new CustomEvent(`before-show`,{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented||(`HTMLDialogElement`in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&(this.__wrappingDialogNode.open=!0),this.__wrappingDialogNode.style.display=``,this._keepBodySize({phase:`before-show`}),await this._handleFeatures({phase:`show`}),this._keepBodySize({phase:`show`}),await this._handlePosition({phase:`show`}),this.__elementToFocusAfterHide=e,this.dispatchEvent(new Event(`show`)),await this._transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode})),this._showResolve()}async _handlePosition({phase:e}){if(this.placementMode===`global`){let t=`overlays__overlay-container--${this.viewportConfig.placement}`;e===`show`?(this.contentWrapperNode.classList.add(`overlays__overlay-container`),this.contentWrapperNode.classList.add(t),this.contentNode.classList.add(`overlays__overlay`)):e===`hide`&&(this.contentWrapperNode.classList.remove(`overlays__overlay-container`),this.contentWrapperNode.classList.remove(t),this.contentNode.classList.remove(`overlays__overlay`))}else this.placementMode===`local`&&e===`show`&&(await this.__createPopperInstance(),this._popper.forceUpdate())}_keepBodySize({phase:e}){if(this.preventsScroll)switch(e){case`before-show`:this.__bodyClientWidth=document.body.clientWidth,this.__bodyClientHeight=document.body.clientHeight,this.__bodyMarginRightInline=document.body.style.marginRight,this.__bodyMarginBottomInline=document.body.style.marginBottom;break;case`show`:{if(window.getComputedStyle){let e=window.getComputedStyle(document.body);this.__bodyMarginRight=parseInt(e.getPropertyValue(`margin-right`),10),this.__bodyMarginBottom=parseInt(e.getPropertyValue(`margin-bottom`),10)}else this.__bodyMarginRight=0,this.__bodyMarginBottom=0;let e=document.body.clientWidth-this.__bodyClientWidth,t=document.body.clientHeight-this.__bodyClientHeight,n=this.__bodyMarginRight+e,r=this.__bodyMarginBottom+t;window.CSS?.number&&document.body.attributeStyleMap?.set?(document.body.attributeStyleMap.set(`margin-right`,CSS.px(n)),document.body.attributeStyleMap.set(`margin-bottom`,CSS.px(r))):(document.body.style.marginRight=`${n}px`,document.body.style.marginBottom=`${r}px`);break}case`hide`:document.body.style.marginRight=this.__bodyMarginRightInline||``,document.body.style.marginBottom=this.__bodyMarginBottomInline||``;break}}async hide(){if(this._hideComplete=new Promise(e=>{this._hideResolve=e}),this.__activeElementRightBeforeHide=this.contentNode.getRootNode().activeElement,this.manager&&this.#t()&&this.manager.hide(this),!this.isShown){this._hideResolve();return}let e=new CustomEvent(`before-hide`,{cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(await this._transitionHide({backdropNode:this.backdropNode,contentNode:this.contentNode}),`HTMLDialogElement`in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&this.__wrappingDialogNode.close(),this.__wrappingDialogNode.style.display=`none`,this._handleFeatures({phase:`hide`}),this._keepBodySize({phase:`hide`}),this.dispatchEvent(new Event(`hide`)),this._restoreFocus()),this._hideResolve()}async transitionHide(e){}async _transitionHide({backdropNode:e,contentNode:t}){await this.transitionHide({backdropNode:e,contentNode:t}),this._handlePosition({phase:`hide`}),e&&e.classList.remove(`overlays__backdrop--animation-in`)}async transitionShow(e){}async _transitionShow(e){await this.transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode}),e.backdropNode&&e.backdropNode.classList.add(`overlays__backdrop--animation-in`)}_restoreFocus(){this.__activeElementRightBeforeHide instanceof HTMLElement&&this.contentNode.contains(this.__activeElementRightBeforeHide)&&(this.elementToFocusAfterHide instanceof HTMLElement?(this.elementToFocusAfterHide.focus(),this.elementToFocusAfterHide.scrollIntoView({block:`nearest`})):this.__activeElementRightBeforeHide.blur())}async toggle(){return this.isShown?this.hide():this.show()}_handleFeatures({phase:e}){this._handleZIndex({phase:e}),this.preventsScroll&&this._handlePreventsScroll({phase:e}),this.isBlocking&&this._handleBlocking({phase:e}),this.hasBackdrop&&this._handleBackdrop({phase:e}),this.trapsKeyboardFocus&&this._handleTrapsKeyboardFocus({phase:e}),this.hidesOnEsc&&this._handleHidesOnEsc({phase:e}),this.hidesOnOutsideEsc&&this._handleHidesOnOutsideEsc({phase:e}),this.hidesOnOutsideClick&&this._handleHidesOnOutsideClick({phase:e}),this.handlesAccessibility&&this._handleAccessibility({phase:e}),this.inheritsReferenceWidth&&this._handleInheritsReferenceWidth(),this.visibilityTriggerFunction&&this._handleVisibilityTriggers({phase:e})}_handleVisibilityTriggers({phase:e}){typeof this.visibilityTriggerFunction==`function`&&(e===`init`&&(this.__visibilityTriggerHandler=this.visibilityTriggerFunction({phase:e,controller:this})),this.__visibilityTriggerHandler[e]&&this.__visibilityTriggerHandler[e]())}_handlePreventsScroll({phase:e}){switch(e){case`show`:this.manager.requestToPreventScroll();break;case`hide`:this.manager.requestToEnableScroll();break;case`teardown`:this.manager.requestToEnableScroll(this);break}}_handleBlocking({phase:e}){switch(e){case`show`:this.manager.requestToShowOnly(this);break;case`hide`:this.manager.retractRequestToShowOnly(this);break}}get hasActiveBackdrop(){return this.__hasActiveBackdrop}_handleBackdrop({phase:e}){switch(e){case`init`:this.__backdropInitialized||=(this.config?.backdropNode||(this.__backdropNode=document.createElement(`div`),this.__backdropNode.classList.add(`overlays__backdrop`)),this.__wrappingDialogNode.prepend(this.backdropNode),!0);break;case`show`:this.config.hasBackdrop&&this.backdropNode.classList.add(`overlays__backdrop--visible`),this.__hasActiveBackdrop=!0;break;case`hide`:case`teardown`:this.backdropNode.classList.remove(`overlays__backdrop--visible`),this.__hasActiveBackdrop=!1;break}}#n=e=>{e.key===`Shift`&&(this.#e=!0)};#r=e=>{e.key===`Shift`&&(this.#e=!1)};#i=()=>{window.addEventListener(`keydown`,this.#n),window.addEventListener(`keyup`,this.#r)};#a=()=>{window.removeEventListener(`keydown`,this.#n),window.removeEventListener(`keyup`,this.#r)};#o=()=>Ri(this.contentNode).find(e=>e.hasAttribute(`autofocus`))||this.contentNode;#s=()=>{this.__wrappingDialogNode?.addEventListener(`focus`,()=>{this.#e||this.#o().focus()})};_handleTrapsKeyboardFocus({phase:e}){e===`init`&&(this.contentNode.style.outline=`none`,this.contentNode.tabIndex=-1,this.contentNode.shadowRoot&&console.warn(`[overlays]: For best accessibility (compatibility with Safari + VoiceOver), provide a contentNode that is not a host for a shadow root`)),e===`show`&&(this.#i(),this.#s(),this.__wrappingDialogNode?.close(),this.__wrappingDialogNode?.showModal(),this.#o().focus()),e===`hide`&&this.#a()}__cancelHandler(e){e.preventDefault()}__escKeyHandler(e){e.key!==`Escape`||Wi.has(e)||!this.isShown&&this.__escKeyHandlerCalled||this.#c(e)&&(this.__escKeyHandlerCalled=!0,this.hide(),Wi.set(e,this))}#c=e=>e.composedPath().includes(this.__wrappingDialogNode)||this.invokerNode&&e.composedPath().includes(this.invokerNode)||_i(this.contentNode,e.target);#l=e=>{e.key===`Escape`&&(this.#c(e)||this.hide())};_handleHidesOnEsc({phase:e}){e===`init`&&(this.contentNode.removeEventListener(`keyup`,this.__escKeyHandler),this.contentNode.addEventListener(`keyup`,this.__escKeyHandler),this.invokerNode&&this.invokerNode.addEventListener(`keyup`,this.__escKeyHandler)),e===`show`&&(this.__escKeyHandlerCalled=!1),e===`teardown`&&(this.contentNode.removeEventListener(`keyup`,this.__escKeyHandler),this.invokerNode&&this.invokerNode.removeEventListener(`keyup`,this.__escKeyHandler))}_handleHidesOnOutsideEsc({phase:e}){e===`init`?(document.removeEventListener(`keyup`,this.#l),document.addEventListener(`keyup`,this.#l)):e===`teardown`&&document.removeEventListener(`keyup`,this.#l)}_handleInheritsReferenceWidth(){if(!this._referenceNode||this.placementMode===`global`)return;let e=`${this._referenceNode.getBoundingClientRect().width}px`;switch(this.inheritsReferenceWidth){case`max`:this.contentWrapperNode.style.maxWidth=e;break;case`full`:this.contentWrapperNode.style.width=e;break;case`min`:this.contentWrapperNode.style.minWidth=e,this.contentWrapperNode.style.width=`auto`;break}}_handleHidesOnOutsideClick({phase:e}){let t=e===`show`?`addEventListener`:`removeEventListener`;if(e===`show`){let e=!1,t=!1;this.__onInsideMouseDown=()=>{e=!0},this.__onInsideMouseUp=()=>{t=!0},this.__onDocumentMouseUp=()=>{setTimeout(()=>{!e&&!t&&this.hide(),e=!1,t=!1})},this.__onWindowBlur=()=>{setTimeout(()=>{this.hide()})}}this.contentWrapperNode[t](`mousedown`,this.__onInsideMouseDown,!0),this.contentWrapperNode[t](`mouseup`,this.__onInsideMouseUp,!0),this.invokerNode&&(this.invokerNode[t](`mousedown`,this.__onInsideMouseDown,!0),this.invokerNode[t](`mouseup`,this.__onInsideMouseUp,!0)),document.documentElement[t](`mouseup`,this.__onDocumentMouseUp,!0),window[t](`blur`,this.__onWindowBlur)}_handleAccessibility({phase:e}){(e===`init`||e===`teardown`)&&this.__setupTeardownAccessibility({phase:e});let t=this.trapsKeyboardFocus;this.invokerNode&&!this.isTooltip&&!t&&this.invokerNode.setAttribute(`aria-expanded`,`${e===`show`}`)}teardown(){this.__handleOverlayStyles({phase:`teardown`}),this._handleFeatures({phase:`teardown`}),this.#t()&&this.manager.remove(this)}async __createPopperInstance(){if(this._popper&&=(this._popper.destroy(),void 0),e.popperModule!==void 0){let{createPopper:t}=await e.popperModule;this._popper=t(this._referenceNode,this.contentWrapperNode,{...this.config?.popperConfig})}}_hasDisabledInvoker(){return this.invokerNode?this.invokerNode.disabled||this.invokerNode.getAttribute(`aria-disabled`)===`true`:!1}};Gi.popperModule=void 0;function Ki(e,t){if(typeof e!=`object`||typeof t!=`object`||e===null||t===null)return e===t;let n=Object.keys(e),r=Object.keys(t);return n.length===r.length?n.every(n=>Ki(e[n],t[n])):!1}var qi=L(e=>class extends e{static get properties(){return{opened:{type:Boolean,reflect:!0}}}#e=!1;constructor(){super(),this.opened=!1,this.config={},this.toggle=this.toggle.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this)}get config(){return this.__config}set config(e){let t=!Ki(this.config,e);this._overlayCtrl&&t&&this._overlayCtrl.updateConfig(e),this.__config=e,this._overlayCtrl&&t&&this.__syncToOverlayController()}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`opened`&&this.opened!==t&&this.dispatchEvent(new CustomEvent(`opened-changed`,{detail:{opened:this.opened}}))}_defineOverlay({contentNode:e,invokerNode:t,referenceNode:n,backdropNode:r,contentWrapperNode:i}){let a=this._defineOverlayConfig()||{};return new Gi({contentNode:e,invokerNode:t,referenceNode:n,backdropNode:r,contentWrapperNode:i,...a,...this.config,popperConfig:{...a.popperConfig||{},...this.config?.popperConfig||{},modifiers:[...a.popperConfig?.modifiers||[],...this.config?.popperConfig?.modifiers||[]]}})}_defineOverlayConfig(){return{placementMode:`local`}}updated(e){super.updated(e),e.has(`opened`)&&this._overlayCtrl&&!this.__blockSyncToOverlayCtrl&&this.__syncToOverlayController()}_setupOpenCloseListeners(){this.__closeEventInContentNodeHandler=e=>{e.stopPropagation(),this._overlayCtrl.hide()},this._overlayContentNode&&this._overlayContentNode.addEventListener(`close-overlay`,this.__closeEventInContentNodeHandler)}_teardownOpenCloseListeners(){this._overlayContentNode&&this._overlayContentNode.removeEventListener(`close-overlay`,this.__closeEventInContentNodeHandler)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.isConnected&&(this.#e||=(this._setupOverlayCtrl(),!0))})}async disconnectedCallback(){super.disconnectedCallback(),await this._isPermanentlyDisconnected()&&(this._teardownOverlayCtrl(),this.#e=!1)}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];get _overlayInvokerNode(){return Array.from(this.children).find(e=>e.slot===`invoker`)}get _overlayReferenceNode(){}get _overlayBackdropNode(){return this.__cachedOverlayBackdropNode||=Array.from(this.children).find(e=>e.slot===`backdrop`),this.__cachedOverlayBackdropNode}get _overlayContentNode(){return this._cachedOverlayContentNode||=Array.from(this.children).find(e=>e.slot===`content`)||this.config.contentNode,this._cachedOverlayContentNode}get _overlayContentWrapperNode(){return this.shadowRoot?.querySelector(`#overlay-content-node-wrapper`)}_setupOverlayCtrl(){if(this.#e)return;let e={contentNode:this._overlayContentNode,contentWrapperNode:this._overlayContentWrapperNode,invokerNode:this._overlayInvokerNode,referenceNode:this._overlayReferenceNode,backdropNode:this._overlayBackdropNode};this._overlayCtrl?this._overlayCtrl.updateConfig(e):this._overlayCtrl=this._defineOverlay(e),this.__syncToOverlayController(),this.__setupSyncFromOverlayController(),this._setupOpenCloseListeners()}_teardownOverlayCtrl(){this._overlayCtrl&&(this._teardownOpenCloseListeners(),this.__teardownSyncFromOverlayController(),this._overlayCtrl.teardown())}async _setOpenedWithoutPropertyEffects(e){this.__blockSyncToOverlayCtrl=!0,this.opened=e,await this.updateComplete,this.__blockSyncToOverlayCtrl=!1}__setupSyncFromOverlayController(){this.__onOverlayCtrlShow=()=>{this.opened=!0},this.__onOverlayCtrlHide=()=>{this.opened=!1},this.__onBeforeShow=e=>{let t=new CustomEvent(`before-opened`,{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),e.preventDefault())},this.__onBeforeHide=e=>{let t=new CustomEvent(`before-closed`,{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),e.preventDefault())},this._overlayCtrl.addEventListener(`show`,this.__onOverlayCtrlShow),this._overlayCtrl.addEventListener(`hide`,this.__onOverlayCtrlHide),this._overlayCtrl.addEventListener(`before-show`,this.__onBeforeShow),this._overlayCtrl.addEventListener(`before-hide`,this.__onBeforeHide)}__teardownSyncFromOverlayController(){this._overlayCtrl.removeEventListener(`show`,this.__onOverlayCtrlShow),this._overlayCtrl.removeEventListener(`hide`,this.__onOverlayCtrlHide),this._overlayCtrl.removeEventListener(`before-show`,this.__onBeforeShow),this._overlayCtrl.removeEventListener(`before-hide`,this.__onBeforeHide)}__syncToOverlayController(){this.opened?this._overlayCtrl.show():this._overlayCtrl.hide()}async toggle(){await this._overlayCtrl.toggle()}async open(){await this._overlayCtrl.show()}async close(){await this._overlayCtrl.hide()}repositionOverlay(){let e=this._overlayCtrl;e.placementMode===`local`&&e._popper&&e._popper.update()}async _isPermanentlyDisconnected(){return await this.updateComplete,!this.isConnected}}),Ji=L(e=>class extends qi(e){static get properties(){return{hasArrow:{type:Boolean,reflect:!0,attribute:`has-arrow`}}}static get styles(){return[...super.styles||[],_`
          :host {
            --tooltip-arrow-width: 12px;
            --tooltip-arrow-height: 8px;
          }

          .arrow svg {
            display: block;
          }

          .arrow {
            position: absolute;
            width: var(--tooltip-arrow-width);
            height: var(--tooltip-arrow-height);
          }

          .arrow__graphic {
            display: block;
          }

          [data-popper-placement^='top'] .arrow {
            bottom: calc(-1 * var(--tooltip-arrow-height));
          }

          [data-popper-placement^='bottom'] .arrow {
            top: calc(-1 * var(--tooltip-arrow-height));
          }

          [data-popper-placement^='bottom'] .arrow__graphic {
            transform: rotate(180deg);
          }

          [data-popper-placement^='left'] .arrow {
            right: calc(
              -1 *
                (
                  var(--tooltip-arrow-height) +
                    (var(--tooltip-arrow-width) - var(--tooltip-arrow-height)) / 2
                )
            );
          }

          [data-popper-placement^='left'] .arrow__graphic {
            transform: rotate(270deg);
          }

          [data-popper-placement^='right'] .arrow {
            left: calc(
              -1 *
                (
                  var(--tooltip-arrow-height) +
                    (var(--tooltip-arrow-width) - var(--tooltip-arrow-height)) / 2
                )
            );
          }

          [data-popper-placement^='right'] .arrow__graphic {
            transform: rotate(90deg);
          }

          :host(:not([has-arrow])) .arrow {
            display: none;
          }
        `]}constructor(){super(),this.hasArrow=!0,this.__setupRepositionCompletePromise()}render(){return m`
        <slot name="invoker"></slot>
        <div id="overlay-content-node-wrapper">
          <slot name="content"></slot>
          ${this._arrowNodeTemplate()}
        </div>
      `}_arrowNodeTemplate(){return m`
        <div class="arrow" aria-hidden="true" data-popper-arrow>${this._arrowTemplate()}</div>
      `}_arrowTemplate(){return m`
        <svg viewBox="0 0 12 8" class="arrow__graphic">
          <path d="M 0,0 h 12 L 6,8 z"></path>
        </svg>
      `}_defineOverlayConfig(){let e=super._defineOverlayConfig()||{};return this.hasArrow?{...e,popperConfig:{...this._getPopperArrowConfig(e.popperConfig)}}:e}_getPopperArrowConfig(e){return{...e||{},placement:`top`,modifiers:[{name:`arrow`,enabled:!0,options:{padding:8}},{name:`offset`,enabled:!0,options:{offset:[0,8]}},...e&&e.modifiers||[]],onFirstUpdate:e=>{this.__syncFromPopperState(e)},afterWrite:e=>{this.__syncFromPopperState(e)}}}__setupRepositionCompletePromise(){this.repositionComplete=new Promise(e=>{this.__repositionCompleteResolver=e})}get _arrowNode(){return this.shadowRoot.querySelector(`[data-popper-arrow]`)}__syncFromPopperState(e){e&&this._arrowNode&&e.placement!==this._arrowNode.placement&&(this.__repositionCompleteResolver(e.placement),this.__setupRepositionCompletePromise())}});function Yi(){return{visibilityTriggerFunction:({controller:e})=>{function t(){e._hasDisabledInvoker()||e.toggle()}return{init:()=>{e.invokerNode?.addEventListener(`click`,t)},teardown:()=>{e.invokerNode?.removeEventListener(`click`,t)}}}}}var Xi=()=>({placementMode:`global`,viewportConfig:{placement:`center`},hasBackdrop:!0,preventsScroll:!0,trapsKeyboardFocus:!0,hidesOnEsc:!0,handlesAccessibility:!0,...Yi()}),Zi=()=>({placementMode:`local`,inheritsReferenceWidth:`min`,hidesOnOutsideClick:!0,hidesOnEsc:!0,popperConfig:{placement:`bottom-start`,modifiers:[{name:`offset`,enabled:!1}]},handlesAccessibility:!0,...Yi()});function Qi({delayIn:e=0,delayOut:t=300}){return{visibilityTriggerFunction:({controller:n})=>{let r=!1,i=!1,a;function o(){r=!1,i=!1}function s(o){let{type:s}=o;clearTimeout(a),r=s===`focusout`?!1:r||s===`focusin`,i=s===`mouseleave`?!1:i||s===`mouseenter`,a=(r||i)&&!n._hasDisabledInvoker()?setTimeout(()=>{n.show()},e):setTimeout(()=>{n.hide()},t)}return{init:()=>{n.addEventListener(`hide`,o),n.contentNode?.addEventListener(`mouseenter`,s),n.contentNode?.addEventListener(`mouseleave`,s),n.invokerNode?.addEventListener(`mouseenter`,s),n.invokerNode?.addEventListener(`mouseleave`,s),n.invokerNode?.addEventListener(`focusin`,s),n.invokerNode?.addEventListener(`focusout`,s)},teardown:()=>{n.removeEventListener(`hide`,o),n.contentNode?.removeEventListener(`mouseenter`,s),n.contentNode?.removeEventListener(`mouseleave`,s),n.invokerNode?.removeEventListener(`mouseenter`,s),n.invokerNode?.removeEventListener(`mouseleave`,s),n.invokerNode?.removeEventListener(`focusin`,s),n.invokerNode?.removeEventListener(`focusout`,s)}}}}}var $i=({invokerRelation:e=`description`,delayIn:t=300,delayOut:n=300}={})=>({placementMode:`local`,elementToFocusAfterHide:void 0,hidesOnEsc:!0,handlesAccessibility:!0,isTooltip:!0,invokerRelation:e,popperConfig:{strategy:`absolute`},...Qi({delayIn:t,delayOut:n})}),ea=_`
  :host {
    display: contents;
    position: relative;
  }

  .popover-pane {
    border: 1px solid var(--c-color-neutral-border-quiet);
    border-radius: var(--c-radius-md);
    background-color: var(--c-surface-overlay);
    box-shadow: var(--c-shadow-sm);
    min-width: calc(180rem / 16);
    max-width: calc(320rem / 16);
    overflow: auto;
    max-height: 40vh;
  }

  ::slotted([slot='content-body']) {
    padding: var(--c-spacing-md);
    display: grid;
    font-size: var(--c-text-base);
    font-weight: 400;
  }

  ::slotted([slot='content-footer']) {
    background-color: var(--c-color-neutral-fill-quiet);
    padding: var(--c-spacing-md);
    position: sticky;
    inset-block-end: 0;
    inset-inline-start: 0;
    inset-inline-end: 0;
  }
`,ta=new WeakMap,na=new WeakSet,ra=class extends qi(g){constructor(){super(),C(this,na),this.placement=`bottom-start`,this.distance=4,this.matchInvokerWidth=!1,this.withoutArrow=!1,w(this,ta,null),Br(this)}_defineOverlayConfig(){return{...Zi(),inheritsReferenceWidth:this.matchInvokerWidth?`min`:`none`,popperConfig:{strategy:`fixed`,placement:this.placement,modifiers:[{name:`offset`,options:{offset:[0,this.distance]}},{name:`computeStyles`,options:{gpuAcceleration:!1}}]}}}get _overlayContentNode(){return this.shadowRoot?.querySelector(`.popover-pane`)}get _overlayInvokerNode(){if(this.anchor)return this.anchor;if(this.for){let e=this.getRootNode();return typeof e.getElementById==`function`?e.getElementById(this.for)??void 0:void 0}return super._overlayInvokerNode}render(){return m`
      <slot name="invoker"></slot>
      <slot name="backdrop"></slot>
      <div id="overlay-content-node-wrapper">
        <div class="popover-pane">
          <slot name="content">
            <slot name="content-body"></slot>
            <slot name="content-footer"></slot>
          </slot>
        </div>
      </div>
    `}connectedCallback(){S(na,this,ia).call(this),super.connectedCallback()}updated(e){super.updated(e),(e.has(`for`)||e.has(`anchor`))&&(e.get(`for`)!==void 0||e.get(`anchor`)!==void 0)&&this._overlayCtrl&&this._overlayCtrl.updateConfig({invokerNode:this._overlayInvokerNode})}async show(){this.opened=!0,await this.updateComplete}async hide(){this.opened=!1,await this.updateComplete}};function ia(){if(E(ta,this)?.isConnected)return;let e=Array.from(this.childNodes).filter(e=>e instanceof Element?e.slot===``:(e.textContent??``).trim()!==``);if(!e.length)return;let t=document.createElement(`div`);t.slot=`content`,t.append(...e),this.append(t),T(ta,this,t)}ra.styles=[ea],n([v({reflect:!0})],ra.prototype,`for`,void 0),n([v({attribute:!1})],ra.prototype,`anchor`,void 0),n([v({reflect:!0})],ra.prototype,`placement`,void 0),n([v({type:Number})],ra.prototype,`distance`,void 0),n([v({attribute:`match-invoker-width`,type:Boolean})],ra.prototype,`matchInvokerWidth`,void 0),n([v({type:Boolean,attribute:`without-arrow`})],ra.prototype,`withoutArrow`,void 0),customElements.get(`craft-popover`)||customElements.define(`craft-popover`,ra);var aa=class extends ra{constructor(...e){super(...e),this.label=o(`Actions`),this.icon=`ellipsis`,this.disabled=!1,this.uid=si(),this._generatedInvoker=null,this._generatedContent=null,this._onInvokerSlotChange=()=>{if(this.actions===void 0)return;let e=!!this._generatedInvoker;this._renderDataDrivenMenu(),e!==!!this._generatedInvoker&&this._overlayCtrl&&(this._overlayCtrl.updateConfig({invokerNode:this._overlayInvokerNode}),this._setupInvoker())}}_addEventListeners(){let e=this.contentNodes[0];e&&e.querySelectorAll(`craft-action-item`).forEach(e=>{e.addEventListener(`click`,()=>{this.opened=!1,this.actions===void 0&&this._dispatchChange(e)})})}_dispatchChange(e){this.dispatchEvent(new CustomEvent(`change`,{bubbles:!0,composed:!0,detail:{item:e}}))}_setupInvoker(){let e=this.invokerNodes[0];e&&(e.setAttribute(`id`,`invoker-${this.uid}`),e.setAttribute(`aria-controls`,`content-${this.uid}`),e.setAttribute(`aria-haspopup`,`true`)),this._syncInvokerDisabled()}_syncInvokerDisabled(){let e=this.invokerNodes[0];e&&(this.disabled?e.setAttribute(`aria-disabled`,`true`):e.removeAttribute(`aria-disabled`))}_setupContent(){let e=this.contentNodes[0];e&&(e.setAttribute(`id`,`content-${this.uid}`),e.setAttribute(`role`,`none`))}_setupOverlayCtrl(){super._setupOverlayCtrl(),this._setupInvoker(),this._setupContent(),this._addEventListeners()}firstUpdated(e){super.firstUpdated(e),this.shadowRoot?.querySelector(`slot[name="invoker"]`)?.addEventListener(`slotchange`,this._onInvokerSlotChange)}willUpdate(e){if(super.willUpdate(e),e.has(`opened`)&&this.opened&&this.disabled){this.opened=!1;return}if(this.actions===void 0){this._removeGeneratedNodes();return}let t=e.has(`opened`)&&this.opened&&this._hasActionsProvider();(e.has(`actions`)||e.has(`label`)||e.has(`icon`)||e.has(`disabled`)||t||!this._generatedContent)&&this._renderDataDrivenMenu()}updated(e){super.updated(e),e.has(`disabled`)&&this._syncInvokerDisabled(),this.actions!==void 0&&(e.has(`opened`)&&this.opened&&this._hasActionsProvider()&&(this._setupContent(),this._addEventListeners()),(e.has(`actions`)||e.has(`label`)||e.has(`icon`))&&this._rewireGeneratedMenu())}_rewireGeneratedMenu(){this._overlayCtrl&&this._overlayCtrl.updateConfig({contentNode:this._overlayContentNode,invokerNode:this._overlayInvokerNode}),this._setupInvoker(),this._setupContent(),this._addEventListeners()}_hasSlottedInvoker(){return Array.from(this.children).some(e=>e.slot===`invoker`&&e!==this._generatedInvoker)}_removeGeneratedNodes(){this._generatedInvoker?.isConnected&&this._generatedInvoker.remove(),this._generatedContent?.isConnected&&this._generatedContent.remove(),this._generatedInvoker=null,this._generatedContent=null}_normalizeActions(e){return e.map(e=>e.type===`hr`||e.type===`display`?e:`href`in e&&e.href?{...e,type:`link`,label:e.label??``}:{...e,type:e.type??`button`,label:e.label??``})}_sortActions(e){return[...e].sort((e,t)=>(`variant`in e&&e.variant===Lr.Danger)-+(`variant`in t&&t.variant===Lr.Danger))}_applyItemProps(e,t){let n=new Set([`type`,`label`,`onClick`,`href`]);for(let[r,i]of Object.entries(t))n.has(r)||i===void 0||(e[r]=i)}_renderItem(e){if(e.type===`hr`){let e=document.createElement(`hr`);return e.className=`action-menu__separator`,Object.assign(e.style,{margin:`0`,border:`0`,borderBlockStart:`1px solid var(--c-color-neutral-border-quiet)`}),e}if(e.type===`display`)return typeof e.node==`function`?e.node():e.node;let t=document.createElement(`craft-action-item`);if(e.type===`link`&&(t.href=e.href),this._applyItemProps(t,e),e.label&&(t.textContent=e.label),typeof e.onClick==`function`){let n=e.onClick;t.addEventListener(`click`,e=>n(e))}return t.addEventListener(`click`,()=>this._dispatchChange(e)),t}_resolveActions(){return typeof this.actions==`function`?this.actions():this.actions??[]}_hasActionsProvider(){return typeof this.actions==`function`}_renderDataDrivenMenu(){let e=this._sortActions(this._normalizeActions(this._resolveActions()));if(this._hasSlottedInvoker())this._generatedInvoker?.isConnected&&this._generatedInvoker.remove(),this._generatedInvoker=null;else{if(!this._generatedInvoker){let e=document.createElement(`craft-button`);e.setAttribute(`slot`,`invoker`),e.setAttribute(`type`,`button`),e.setAttribute(`icon`,``),e.setAttribute(`size`,`small`),e.setAttribute(`variant`,`inherit`),e.setAttribute(`appearance`,`plain`),this._generatedInvoker=e,this.appendChild(e)}this._generatedInvoker.disabled=this.disabled,this._generatedInvoker.toggleAttribute(`disabled`,this.disabled),p(m`<craft-icon
          name="${this.icon}"
          label="${this.label}"
        ></craft-icon>`,this._generatedInvoker)}if(!this._generatedContent){let e=document.createElement(`div`);e.setAttribute(`slot`,`content`),this._generatedContent=e,this.appendChild(e)}let t=this._generatedContent;t.replaceChildren();for(let n of e){let e=this._renderItem(n);e&&t.appendChild(e)}}};aa.styles=[...ra.styles,_`
      ::slotted([slot='content']) {
        display: grid;
        gap: var(--c-spacing-xs);
        padding: var(--c-spacing-sm);
        font-size: var(--c-text-base);
        font-weight: 400;
      }

      ::slotted([slot='content']) hr {
        margin: 0;
      }

      :host([disabled]) ::slotted([slot='invoker']) {
        cursor: not-allowed;
        opacity: 0.5;
        pointer-events: none;
      }
    `],n([v({attribute:!1})],aa.prototype,`actions`,void 0),n([v()],aa.prototype,`label`,void 0),n([v()],aa.prototype,`icon`,void 0),n([v({type:Boolean,reflect:!0})],aa.prototype,`disabled`,void 0),n([ee({slot:`invoker`})],aa.prototype,`invokerNodes`,void 0),n([ee({slot:`content`})],aa.prototype,`contentNodes`,void 0),customElements.get(`craft-action-menu`)||customElements.define(`craft-action-menu`,aa);var oa=_`
  :host {
    --color-start: red;
    --color-end: blue;
    --color-text: inherit;

    --size: calc(30rem / 16);
    display: contents;
  }

  .avatar {
    display: inline-flex;
    width: var(--size);
    aspect-ratio: 1;
    background-color: white;
    border-radius: var(--c-radius-full);
  }

  .avatar__text {
    line-height: 1;
    font-weight: 500;
    font-family: var(--c-font-body, sans-serif);
    text-anchor: middle;
    fill: currentColor;
    user-select: none;
    pointer-events: none;
  }
`,sa=class extends g{constructor(...e){super(...e),this.label=null,this._gradientId=null}connectedCallback(){super.connectedCallback(),this._gradientId=`avatar-gradient-${Math.random().toString(36).slice(2,8)}`}text(){return this.label?this.label.split(` `).map(e=>e.charAt(0).toUpperCase()).join(``):`?`}render(){return m`
      <span class="avatar">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          ${this.label?m`<title>${this.label}</title>`:``}
          <defs>
            <linearGradient
              id="${this._gradientId}"
              x1="0"
              y1="1"
              x2="1"
              y2="0"
            >
              <stop offset="0%" style="stop-color:var(--color-start)"></stop>
              <stop offset="100%" style="stop-color:var(--color-end)"></stop>
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="50"
            fill="url(#${this._gradientId})"
            opacity="0.25"
          ></circle>
          <text class="avatar__text" x="50" y="64" font-size="44">
            ${this.text()}
          </text>
        </svg>
      </span>
    `}};sa.styles=[oa],n([v()],sa.prototype,`label`,void 0),n([y()],sa.prototype,`_gradientId`,void 0),customElements.get(`craft-avatar`)||customElements.define(`craft-avatar`,sa);var ca={Red:`red`,Orange:`orange`,Amber:`amber`,Yellow:`yellow`,Lime:`lime`,Green:`green`,Emerald:`emerald`,Teal:`teal`,Cyan:`cyan`,Sky:`sky`,Blue:`blue`,Indigo:`indigo`,Violet:`violet`,Purple:`purple`,Fuchsia:`fuchsia`,Pink:`pink`,Rose:`rose`,White:`white`,Gray:`gray`,Black:`black`,Neutral:`slate`,Accent:`red`,Success:`emerald`,Warning:`orange`,Danger:`red`,Info:`blue`,Pending:`orange`,Off:`red`,Suspended:`red`,Expired:`red`,Disabled:`gray`,Inactive:`gray`,On:`emerald`},la=Object.values(ca),ua=class extends g{constructor(...e){super(...e),this.size=`md`,this.fill=`var(--c-color-fill-loud)`,this.label=null,this.appearance=r.OutlineFill}getFill(){return la.includes(this.fill)||Rr.includes(this.fill)?`var(--c-color-${this.fill}-fill-loud)`:this.fill}getSize(){switch(this.size){case`md`:return`0.6em`;case`lg`:return`1em`;default:return this.size}}render(){return m`<span
      style="--fill: ${this.getFill()}; --size: ${this.getSize()}"
      aria-label="${this.label??h}"
      role="${this.label?`img`:h}"
      class="${c({indicator:!0,"indicator--outline":this.appearance===r.Outline})}"
    ></span>`}};ua.styles=[Nr,_`
      .indicator {
        --_fill: var(--fill, var(--c-color-fill-loud));
        --_size: var(--size, 0.5em);
        display: inline-flex;
        aspect-ratio: 1;
        width: var(--_size);
        border-radius: var(--c-radius-full);
        background: var(--_fill);
        border: 1px solid var(--_fill);
      }

      /* Appearances */
      :host([appearance~='outline-fill']) .indicator {
        background: var(--_fill);
        border: 1px solid rgba(0, 0, 0, 0.5);
      }

      :host([appearance~='solid']) .indicator {
        background: var(--_fill);
        border-color: transparent;
      }

      :host([appearance~='outline']) .indicator {
        background: transparent;
        border: 2px solid var(--_fill);
      }
    `],n([v()],ua.prototype,`size`,void 0),n([v({reflect:!0})],ua.prototype,`fill`,void 0),n([v()],ua.prototype,`label`,void 0),n([v({reflect:!0})],ua.prototype,`appearance`,void 0),customElements.get(`craft-indicator`)||customElements.define(`craft-indicator`,ua);var da=_`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    background-color: var(--c-color-fill-quiet);
    border: 1px solid var(--c-color-border-quiet);
    color: var(--c-color-on-quiet);
    border-radius: var(--c-radius-full);
    font-size: 0.9em;
  }

  .badge__prefix {
    padding-inline: calc(var(--c-spacing-md) / 2);
  }

  .badge__suffix {
    padding-inline: calc(var(--c-spacing-md) / 2);
  }
`,fa=class extends g{constructor(...e){super(...e),this.fill=ca.Gray}getFill(){return this.fill}willUpdate(e){e.has(`fill`)&&(this.dataset.color=this.getFill())}render(){return m`
      <span
        part="badge"
        class="${c({badge:!0})}"
      >
        <span class="badge__prefix">
          <slot name="prefix" part="prefix">
            <craft-indicator
              part="indicator"
              fill=${this.getFill()}
            ></craft-indicator>
          </slot>
        </span>
        <slot></slot>
        <span class="badge__suffix">
          <slot name="suffix" part="suffix"></slot>
        </span>
      </span>
    `}};fa.styles=[da],n([v({reflect:!0})],fa.prototype,`fill`,void 0),customElements.get(`craft-badge`)||customElements.define(`craft-badge`,fa);var pa=class extends g{constructor(...e){super(...e),this.rel=`noreferrer noopener`}render(){return m`
      <slot name="start" part="start"></slot>
      ${this.href?m`<a
          part="label"
          class="label"
          href=${this.href}
          target=${this.target??h}
          rel=${this.target?this.rel:h}
          ><slot></slot
        ></a>`:m`<span part="label" class="label"><slot></slot></span>`}
      <slot name="end" part="end"></slot>
      <slot name="separator" part="separator" aria-hidden="true"></slot>
    `}};pa.styles=_`
    :host {
      white-space: nowrap;
      display: inline-flex;
      align-items: center;
      color: inherit;
    }

    .label {
      display: inline-flex;
      align-items: center;
      font-weight: 400;
      color: inherit;
      text-decoration: none;
    }

    a.label:hover {
      text-decoration: underline;
    }

    slot[name='start']::slotted(*) {
      margin-inline-end: var(--c-spacing-sm);
    }

    slot[name='end']::slotted(*) {
      margin-inline-start: var(--c-spacing-sm);
    }

    slot[name='separator']::slotted(*) {
      color: var(--c-text-quiet);
      margin: 0 var(--c-spacing-md);
    }
  `,n([v({reflect:!0})],pa.prototype,`href`,void 0),n([v()],pa.prototype,`target`,void 0),n([v()],pa.prototype,`rel`,void 0),customElements.get(`craft-breadcrumb-item`)||customElements.define(`craft-breadcrumb-item`,pa);var ma=class{constructor(){this.__iconResolvers=new Map}addIconResolver(e,t){if(this.__iconResolvers.has(e))throw Error(`An icon resolver has already been registered for namespace: ${e}`);this.__iconResolvers.set(e,t)}removeIconResolver(e){this.__iconResolvers.delete(e)}resolveIcon(e,t,n){let r=this.__iconResolvers.get(e);if(r)return r(t,n);throw Error(`Could not find any icon resolver for namespace ${e}.`)}resolveIconForId(e){let t=e.split(`:`);if(t.length!==3)throw Error(`Incorrect iconId: ${e}. Format: <namespace>:<iconset>:<icon>`);return this.resolveIcon(t[0],t[1],t[2])}};function ha(){if(!mi.has(`@lion/ui::icons::0.x`)){let e=new ma;mi.set(`@lion/ui::icons::0.x`,e)}return mi.get(`@lion/ui::icons::0.x`)}var ga=pi(ha),_a=class extends i{constructor(e){if(super(e),this.it=h,e.type!==l.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===h||e==null)return this._t=void 0,this.it=e;if(e===d)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};_a.directiveName=`unsafeHTML`,_a.resultType=1;var va=t(_a),ya=class extends _a{};ya.directiveName=`unsafeSVG`,ya.resultType=2;var ba=t(ya),xa=`craft`,Sa=new Map;function Ca(e,t){return`${e}/${t}`}function wa(e){let[t=`classic`,n=`regular`]=e.split(`/`);return{family:t,variant:n}}async function Ta(e){try{let t=await fetch(e,{mode:`cors`});if(!t.ok)return h;let n=document.createElement(`div`);n.innerHTML=await t.text();let r=n.firstElementChild;return r?.tagName?.toLowerCase()===`svg`?(r.setAttribute(`fill`,`currentColor`),r.setAttribute(`part`,`svg`),m`${ba(r.outerHTML)}`):h}catch{return h}}function Ea(e,t=`classic`,n=`regular`,r=`/vendor/craft/icons`){let i=`solid`,a=n,o=e.endsWith(`.svg`)?e.split(`.svg`)[0]:e;if(e.includes(`/`)){let[t,...n]=e.split(`/`);a=t??a,o=n.join(`/`)}return a===`thin`?i=`thin`:a===`light`?i=`light`:a===`regular`?i=`regular`:a===`solid`&&(i=`solid`),t===`brands`&&(i=`brands`),(t===`custom-icons`||a===`custom-icons`)&&(i=`custom-icons`),`${r}/${i}/${o}.svg`}function Da(e){return(t,n,r)=>{let i=e(t,n,r);if(i===null)return h;let a=Sa.get(i);return a||(a=Ta(i),Sa.set(i,a)),a.then(e=>(e===h&&Sa.delete(i),e))}}var Oa=Da(Ea);function ka(e){ga.removeIconResolver(xa),ga.addIconResolver(xa,(t,n)=>{let{family:r,variant:i}=wa(t);return e(n,r,i)})}function Aa(e,t=`classic`,n=`regular`){return Promise.resolve(ga.resolveIcon(xa,Ca(t,n),e))}ka(Oa);var ja=new WeakSet,Ma=class extends g{constructor(...e){super(...e),C(this,ja),this.appearance=`plain`,this._svg=h,this._hasSlottedContent=!1}connectedCallback(){super.connectedCallback(),this.appearance===`badge`&&!this.getAttribute(`data-color`)&&this.setAttribute(`data-color`,`warning`),this._hasSlottedContent=this.childElementCount>0}firstUpdated(){S(ja,this,Fa).call(this)}updated(e){super.updated(e),(e.has(`name`)||e.has(`family`)||e.has(`variant`))&&S(ja,this,Pa).call(this),e.has(`label`)&&this.hasUpdated&&S(ja,this,Fa).call(this)}_handleSlotChange(e){let t=e.target;this._hasSlottedContent=t.assignedElements({flatten:!0}).length>0}render(){return m`
      <slot @slotchange=${this._handleSlotChange}></slot>
      ${this._hasSlottedContent?h:this._svg}
    `}static get styles(){return[_`
        :host {
          box-sizing: content-box;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: -0.125em;
          width: 1.25em;
          height: 1em;
          font-size: 0.8em;
        }

        svg,
        ::slotted(svg) {
          height: 1em;
          width: auto;
          overflow: visible;
        }

        :host([appearance~='badge']) {
          border: 1px solid var(--c-color-border-quiet);
          color: var(--c-color-on-quiet);
          background-color: var(--c-color-fill-quiet);
          border-radius: var(--c-radius-sm);
          width: 1.6em;
          height: 1.6em;

          svg {
            width: 0.9em;
          }
        }

        :host([appearance~='badge']) ::slotted(svg) {
          width: 0.9em;
        }
      `]}};function Na(){return this.name?{name:this.name,family:this.family??`classic`,variant:this.variant??`solid`}:null}async function Pa(){let e=S(ja,this,Na).call(this);if(e===null){this._svg=h;return}let t;try{t=await Aa(e.name,e.family,e.variant)}catch(e){console.error(e),t=h}let n=S(ja,this,Na).call(this);n===null||e.name!==n.name||e.family!==n.family||e.variant!==n.variant||(this._svg=t)}function Fa(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}n([v({reflect:!0})],Ma.prototype,`name`,void 0),n([v({reflect:!0})],Ma.prototype,`family`,void 0),n([v({reflect:!0})],Ma.prototype,`variant`,void 0),n([v()],Ma.prototype,`label`,void 0),n([v({reflect:!0})],Ma.prototype,`appearance`,void 0),n([y()],Ma.prototype,`_svg`,void 0),n([y()],Ma.prototype,`_hasSlottedContent`,void 0),customElements.get(`craft-icon`)||customElements.define(`craft-icon`,Ma);var Ia=_`
  .breadcrumbs {
    display: flex;
    align-items: center;
  }
`,La=class extends g{constructor(...e){super(...e),this.label=o(`Breadcrumbs`),this.items=[],this.visibleItems=0,this.firstRender=!0}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll(`[id]`)].forEach(e=>e.removeAttribute(`id`)),e.setAttribute(`data-default`,``),e.slot=`separator`,e}calculateBreadcrumbItemsWidth(){this.items=this.breadcrumbsElements.map((e,t)=>{let n=e.offsetWidth;return e.hasAttribute(`hidden`)&&(e.removeAttribute(`hidden`),n=e.offsetWidth,e.setAttribute(`hidden`,``)),{label:e.innerText,href:e.href,value:t.toString(),offsetWidth:n,isVisible:!0}})}async handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()===`craft-breadcrumb-item`);if(e.forEach((t,n)=>{let r=t.querySelector(`[slot="separator"]`);r===null?t.append(this.getSeparator()):r.hasAttribute(`data-default`)&&r.replaceWith(this.getSeparator()),n===e.length-1?t.setAttribute(`aria-current`,`page`):t.removeAttribute(`aria-current`)}),this.breadcrumbsElements.length===0){this.items=[],this.visibleItems=0;return}await Promise.all(this.breadcrumbsElements.map(e=>e.updateComplete)),this.calculateBreadcrumbItemsWidth(),this.visibleItems=0,this.adjustOverflow()}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{if(this.firstRender){this.firstRender=!1;return}this.adjustOverflow()}),this.resizeObserver.observe(this)}adjustOverflow(){let e=this.getBoundingClientRect().width;console.log({availableSpace:e})}disconnectedCallback(){this.resizeObserver?.unobserve(this),super.disconnectedCallback()}render(){return m`
      <nav class="breadcrumbs" aria-label="${this.label}">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator"><span class="separator">/</span></slot>
      </span>
    `}};La.styles=[Ia],n([b(`slot`)],La.prototype,`defaultSlot`,void 0),n([b(`slot[name="separator"]`)],La.prototype,`separatorSlot`,void 0),n([ee({selector:`craft-breadcrumb-item`})],La.prototype,`breadcrumbsElements`,void 0),n([v()],La.prototype,`label`,void 0),n([y()],La.prototype,`items`,void 0),n([y()],La.prototype,`visibleItems`,void 0),customElements.get(`craft-breadcrumbs`)||customElements.define(`craft-breadcrumbs`,La);var Ra=_`
  :host {
    display: flex;
  }

  ::slotted(craft-button),
  ::slotted(button) {
    border-radius: 0;
  }

  ::slotted(craft-button:first-child) {
    border-start-start-radius: var(--c-radius-sm);
    border-end-start-radius: var(--c-radius-sm);
  }

  ::slotted(craft-button:last-child) {
    border-start-end-radius: var(--c-radius-sm);
    border-end-end-radius: var(--c-radius-sm);
  }
`,za=class extends g{constructor(){super(),this._handleClick=e=>{let t=e.composedPath().find(e=>e instanceof Element&&e.hasAttribute(`value`)&&e!==this);if(!t)return;let n=t.getAttribute(`value`)??``;n!==this.value&&(this.value=n,this._syncChildren(),this.dispatchEvent(new CustomEvent(`change`,{bubbles:!0,composed:!0,detail:{value:n}})))},this._internals=this.attachInternals()}firstUpdated(e){super.firstUpdated(e),this.name&&this._setupRadioMode()}updated(e){e.has(`name`)&&(this.name?this._setupRadioMode():this._teardownRadioMode()),e.has(`value`)&&this.name&&this._syncChildren()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this._handleClick)}_setupRadioMode(){this.setAttribute(`role`,`radiogroup`),this.removeEventListener(`click`,this._handleClick),this.addEventListener(`click`,this._handleClick),this._syncChildren()}_teardownRadioMode(){this.removeAttribute(`role`),this.removeEventListener(`click`,this._handleClick)}_syncChildren(){this.querySelectorAll(`craft-button`).forEach(e=>{e.getAttribute(`type`)!==`button`&&e.setAttribute(`type`,`button`);let t=e.getAttribute(`value`)===this.value;e.toggleAttribute(`active`,t),e.setAttribute(`aria-pressed`,String(t))}),this._internals.setFormValue(this.value??null)}render(){return m`<slot @slotchange=${this._onSlotChange}></slot>`}_onSlotChange(){this.name&&this._syncChildren()}};za.styles=[Ra],za.formAssociated=!0,n([v({reflect:!0})],za.prototype,`name`,void 0),n([v({reflect:!0})],za.prototype,`value`,void 0),customElements.get(`craft-button-group`)||customElements.define(`craft-button-group`,za);var Ba=class extends Ji(qi(g)){static get properties(){return{invokerRelation:{type:String,attribute:`invoker-relation`}}}static get styles(){return[...super.styles,_`
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none;
        }

        ::slotted([slot='content']) {
          width: max-content;
        }
      `]}constructor(){super(),this.hasArrow=!1,this.invokerRelation=`description`}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];_defineOverlayConfig(){let e=super._defineOverlayConfig(),t=$i({invokerRelation:this.invokerRelation});return{...e,...t,popperConfig:{...e.popperConfig||{},...t.popperConfig||{},modifiers:[...e.popperConfig?.modifiers||[],...t.popperConfig?.modifiers||[]]}}}},Va=new WeakMap,Ha=new WeakMap,Ua=new WeakSet,Wa=class extends Ba{constructor(){super(),C(this,Ua),this.placement=`top`,this.trigger=`hover focus`,w(this,Va,null),w(this,Ha,()=>{this.opened=!this.opened}),Br(this)}static get styles(){return[...super.styles,_`
        ::slotted([slot='content']) {
          background-color: var(--c-color-black-fill-loud);
          border: 1px solid var(--c-color-black-border-loud);
          color: var(--c-color-black-on-loud);
          padding: var(--c-tooltip-padding, calc(4rem / 16) calc(8rem / 16));
          font-family: var(--c-font-body);
          font-size: var(--c-text-base);
          font-weight: 400;
          line-height: 1.3;
          border-radius: var(--c-radius-sm);
          box-shadow: var(--c-shadow-md);
          width: max-content;
        }
      `]}connectedCallback(){S(Ua,this,Ga).call(this),super.connectedCallback()}get _overlayInvokerNode(){if(this.for){let e=this.getRootNode();return typeof e.getElementById==`function`?e.getElementById(this.for)??void 0:void 0}return super._overlayInvokerNode}_defineOverlayConfig(){let e={...super._defineOverlayConfig()};return(Ka.call(S(Ua,this))||qa.call(S(Ua,this)))&&delete e.visibilityTriggerFunction,{...e,popperConfig:{...e.popperConfig,placement:this.placement}}}_setupOpenCloseListeners(){super._setupOpenCloseListeners(),Ka.call(S(Ua,this))&&this._overlayInvokerNode?.addEventListener(`click`,E(Ha,this))}_teardownOpenCloseListeners(){super._teardownOpenCloseListeners(),this._overlayInvokerNode?.removeEventListener(`click`,E(Ha,this))}updated(e){super.updated(e),e.has(`for`)&&e.get(`for`)!==void 0&&this._overlayCtrl&&this._overlayCtrl.updateConfig({invokerNode:this._overlayInvokerNode})}async show(){this.opened=!0,await this.updateComplete}async hide(){this.opened=!1,await this.updateComplete}};function Ga(){if(E(Va,this)?.isConnected)return;let e=document.createElement(`div`);e.slot=`content`,e.append(...Array.from(this.childNodes).filter(e=>!(e instanceof Element)||e.slot===``)),this.append(e),T(Va,this,e)}function Ka(){return this.trigger.split(` `).includes(`click`)}function qa(){return this.trigger.split(` `).includes(`manual`)}n([v({reflect:!0})],Wa.prototype,`for`,void 0),n([v({reflect:!0})],Wa.prototype,`placement`,void 0),n([v({reflect:!0})],Wa.prototype,`trigger`,void 0),customElements.get(`craft-tooltip`)||customElements.define(`craft-tooltip`,Wa);var Ja=e=>e.key===` `||e.key===`Enter`,Ya=e=>e.key===` `,Xa=class extends Wr(g){static get properties(){return{active:{type:Boolean,reflect:!0},type:{type:String,reflect:!0}}}render(){return m` <div class="button-content"><slot></slot></div> `}static get styles(){return[_`
        :host {
          position: relative;
          display: inline-flex;
          box-sizing: border-box;
          vertical-align: middle;
          line-height: 24px;
          background-color: #eee; /* minimal styling to make it recognizable as btn */
          padding: 8px; /* padding to fix with min-height */
          outline: none; /* focus style handled below */
          cursor: default; /* we should always see the default arrow, never a caret */
          /* TODO: remove, native button also allows selection. Could be usability concern... */
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        :host::before {
          content: '';

          /* center vertically and horizontally */
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          /* Minimum click area to meet [WCAG Success Criterion 2.5.5 Target Size (Enhanced)](https://www.w3.org/TR/WCAG22/#target-size-enhanced) */
          min-height: 44px;
          min-width: 44px;
          width: 100%;
          height: 100%;
        }

        .button-content {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Show focus styles on keyboard focus. */
        :host(:focus:not([disabled])),
        :host(:focus-visible) {
          /* if you extend, please overwrite */
          outline: 2px solid #bde4ff;
        }

        /* Hide focus styles if they're not needed, for example,
        when an element receives focus via the mouse. */
        :host(:focus:not(:focus-visible)) {
          outline: 0;
        }

        :host(:hover) {
          /* if you extend, please overwrite */
          background: #f4f6f7;
        }

        :host(:active), /* keep native :active to render quickly where possible */
        :host([active]) /* use custom [active] to fix IE11 */ {
          /* if you extend, please overwrite */
          background: gray;
        }

        :host([hidden]) {
          display: none;
        }

        :host([disabled]) {
          pointer-events: none;
          /* if you extend, please overwrite */
          background: lightgray;
          color: #adadad;
          fill: #adadad;
        }
      `]}constructor(){super(),this.type=`button`,this.active=!1,this.__setupEvents()}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`button`)}updated(e){super.updated(e),e.has(`disabled`)&&(this.disabled?this.setAttribute(`aria-disabled`,`true`):this.getAttribute(`aria-disabled`)!==null&&this.removeAttribute(`aria-disabled`))}__setupEvents(){this.addEventListener(`mousedown`,this.__mousedownHandler),this.addEventListener(`keydown`,this.__keydownHandler),this.addEventListener(`keyup`,this.__keyupHandler)}__mousedownHandler(){this.active=!0;let e=()=>{this.active=!1,document.removeEventListener(`mouseup`,e),this.removeEventListener(`mouseup`,e)};document.addEventListener(`mouseup`,e),this.addEventListener(`mouseup`,e)}__keydownHandler(e){if(this.active||!Ja(e)){Ya(e)&&e.preventDefault();return}Ya(e)&&e.preventDefault(),this.active=!0;let t=e=>{Ja(e)&&(this.active=!1,document.removeEventListener(`keyup`,t,!0))};document.addEventListener(`keyup`,t,!0)}__keyupHandler(e){if(Ja(e)){if(e.target&&e.target!==this)return;this.click()}}},Za=class extends Xa{constructor(){super(),this.type=`reset`,this.__setupDelegationInConstructor(),this.__submitAndResetHelperButton=document.createElement(`button`),this.__preventEventLeakage=this.__preventEventLeakage.bind(this)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._setupSubmitAndResetHelperOnConnected()})}disconnectedCallback(){super.disconnectedCallback(),this._teardownSubmitAndResetHelperOnDisconnected()}__preventEventLeakage(e){e.target===this.__submitAndResetHelperButton&&e.stopImmediatePropagation()}_setupSubmitAndResetHelperOnConnected(){this.appendChild(this.__submitAndResetHelperButton),this._form=this.__submitAndResetHelperButton.form,this.removeChild(this.__submitAndResetHelperButton),this._form&&this._form.addEventListener(`click`,this.__preventEventLeakage)}_teardownSubmitAndResetHelperOnDisconnected(){this._form&&this._form.removeEventListener(`click`,this.__preventEventLeakage)}async __clickDelegationHandler(e){this._form||await this.updateComplete,(this.type===`submit`||this.type===`reset`)&&e.target===this&&this._form&&(this.__submitAndResetHelperButton.type=this.type,this._form.appendChild(this.__submitAndResetHelperButton),this.__submitAndResetHelperButton.click(),this._form.removeChild(this.__submitAndResetHelperButton))}__setupDelegationInConstructor(){this.addEventListener(`click`,this.__clickDelegationHandler,!0)}},Qa=new WeakMap;function $a(){let e=document.createElement(`button`);return e.tabIndex=-1,e.type=`submit`,e.setAttribute(`aria-hidden`,`true`),e.style.cssText=`
    position: absolute;
    top: 0;
    left: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
    height: 1px;
    width: 1px;
    padding: 0; /* reset default agent styles */
    border: 0; /* reset default agent styles */
  `,e}var eo=class extends Za{get _nativeButtonNode(){return Qa.get(this._form)?.helper||null}constructor(){super(),this.type=`submit`,this.__implicitSubmitHelperButton=null}_setupSubmitAndResetHelperOnConnected(){if(super._setupSubmitAndResetHelperOnConnected(),!this._form||this.type!==`submit`)return;let e=this._form;if(!Qa.get(this._form)){let t=$a(),n=document.createElement(`div`);n.appendChild(t),Qa.set(this._form,{lionButtons:new Set,helper:t,observer:new MutationObserver(()=>{e.appendChild(n)})}),e.appendChild(n),Qa.get(e)?.observer.observe(n,{childList:!0})}Qa.get(e)?.lionButtons.add(this)}_teardownSubmitAndResetHelperOnDisconnected(){if(super._teardownSubmitAndResetHelperOnDisconnected(),this._form){let e=Qa.get(this._form);e&&(e.lionButtons.delete(this),e.lionButtons.size||(this._form.contains(e.helper)&&e.helper.remove(),Qa.get(this._form)?.observer.disconnect(),Qa.delete(this._form)))}}},to=_`
  :host {
    /* Necessary to use variables here to override the default active style specificity */
    --_active-background-color: hsl(
      from var(--c-color-fill-loud, var(--c-color-neutral-fill-normal)) h s
        calc(l - 10)
    );
    --_active-color: var(--c-color-on-loud);
    --_active-border-color: var(--c-color-border-loud);
    cursor: pointer;
    font: inherit;
    display: inline-flex;
    justify-content: center;
    gap: var(--c-spacing-sm);
    align-items: center;
    border-radius: var(--c-button-radius, var(--c-form-control-radius));
    padding-inline: var(
      --c-button-spacing-inline,
      var(--c-form-control-spacing-inline)
    );
    padding-block: 0;
    width: auto;
    min-height: var(--c-button-height, var(--c-size-control-md));
    min-width: var(--c-button-width, var(--c-size-control-md));
    white-space: nowrap;
    border-width: var(--c-button-border-width, 1px);
    border-style: var(--c-button-border-style, solid);

    /* Colorable styles */
    color: var(--c-color-on-loud, var(--c-color-neutral-on-loud));
    border-color: var(
      --c-color-border-loud,
      var(--c-color-neutral-border-loud)
    );
    background-color: var(
      --c-color-fill-loud,
      var(--c-color-neutral-fill-loud)
    );
  }

  @media (hover: hover) {
    :host(:hover) {
      background-color: hsl(
        from var(--c-color-fill-loud, var(--c-button-default-fill)) h s
          calc(l - 5)
      );
      color: var(--c-color-on-loud);
    }
  }

  :host(:not(:disabled):not(.loading):active),
  :host(.is-active:not(:disabled):not(.loading)) {
    color: var(--_active-color);
    background-color: var(--_active-background-color);
    box-shadow: inset 0 1px 3px var(--c-color-mix-active);
  }

  :host(:not(:disabled):not(.loading)[active]),
  :host(.is-active:not(:disabled):not(.loading)) {
    color: var(--c-color-on-loud);
    background-color: var(--c-color-fill-loud);
    border-color: var(--c-color-border-loud);
  }

  /*
  Sizes
   */
  :host([size~='zero']) {
    min-width: 0;
    min-height: 0;
    padding-inline: 0;
  }

  :host([size~='small']) {
    padding-inline: var(--c-spacing-sm);
    min-width: var(--c-size-control-sm);
    min-height: var(--c-size-control-sm);
    font-size: 0.9em;
  }

  :host([size~='large']) {
    padding-inline: var(--c-spacing-lg);
    min-height: var(--c-size-control-lg);
    min-width: var(--c-size-control-lg);
  }

  :host([loading]) {
    position: relative;

    .prefix,
    .label,
    .suffix {
      visibility: hidden;
    }

    craft-spinner {
      --size: 1.25em;
      position: absolute;
      inset-block-start: calc(50% - var(--size) / 2);
      inset-inline-start: calc(50% - var(--size) / 2);
    }
  }

  /*
  Icon
   */
  :host([icon='']) {
    aspect-ratio: 1;
    padding-inline: 0;
    padding-block: 0;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1;
  }

  :host([icon][size~='small']) {
    font-size: 0.8em;
  }

  /*
  Appearances
   */

  /* Inline */
  :host([appearance~='inline']) {
    display: inline;
    appearance: none;
    background-color: transparent;
    border-color: currentColor;
    color: inherit;
    font: inherit;
    padding: 0;
    min-height: auto;
    min-width: auto;

    &::before {
      /* remove the sizer added by lion */
      display: none;
    }

    .button-content {
      padding: 0;
    }
  }

  :host([appearance='inline']:not(:disabled):not(.loading):hover) {
    background-color: color-mix(
      in oklab,
      var(--c-color-fill-quiet, var(--c-button-default-fill)),
      var(--c-color-mix-hover)
    );
    color: var(--c-color-on-quiet);
  }

  :host([appearance='inline']:not(:disabled):not(.loading):active) {
    color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
    background-color: color-mix(
      in oklab,
      var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)),
      var(--c-color-mix-active)
    );
  }

  :host([appearance='inline'][active]) {
    background-color: var(
      --c-color-fill-normal,
      var(--c-color-neutral-fill-normal)
    );
    border-color: var(
      --c-color-border-normal,
      var(--c-color-neutral-border-normal)
    );
    color: var(--c-color-on-normal, var(--c-color-neutral-on-normal));
    box-shadow: none;
  }

  /* Plain & Outline (Shared) */
  :host([appearance~='plain']),
  :host([appearance~='outline']) {
    background-color: transparent;
    color: var(--c-color-on-quiet);
  }

  :host([appearance~='plain']:hover),
  :host([appearance~='outline']:hover) {
    background-color: hsl(
      from var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)) h s
        calc(l - 5)
    );
  }

  :host([appearance~='plain']:active),
  :host([appearance~='outline']:active) {
    --_active-background-color: hsl(
      from var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)) h s
        calc(l - 8)
    );
    --_active-color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
  }

  :host([appearance~='plain'][active]),
  :host([appearance~='outline'][active]) {
    background-color: var(--c-color-fill-loud);
    color: var(--c-color-on-loud);
    border-color: var(--c-color-border-loud);
  }

  /* Plain */
  :host([appearance~='plain']) {
    border-color: transparent;
    color: inherit;

    &:before {
      display: none;
    }
  }

  :host([appearance='plain']:not(:disabled):not(.loading):hover) {
    background-color: color-mix(
      in oklab,
      var(--c-color-fill-quiet, var(--c-button-default-fill)),
      var(--c-color-mix-hover)
    );
    color: var(--c-color-on-quiet);
  }

  :host([appearance='plain']:not(:disabled):not(.loading):active) {
    color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
    background-color: color-mix(
      in oklab,
      var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)),
      var(--c-color-mix-active)
    );
  }

  :host([appearance='plain'][active]) {
    background-color: var(--c-color-fill-normal);
    border-color: var(--c-color-border-normal);
    color: var(--c-color-on-normal);
    box-shadow: none;
  }

  /* Outline */
  :host([appearance='outline']) {
    border-color: var(--c-color-border-loud);
  }

  /* Solid */
  :host([appearance~='solid']) {
    background-color: var(
      --c-color-fill-loud,
      var(--c-color-neutral-fill-loud)
    );
    border-color: transparent;
    color: var(--c-color-on-loud, var(--c-color-neutral-on-loud));
  }

  :host([appearance='solid']:hover) {
    background-color: hsl(
      from var(--c-color-fill-loud, var(--c-color-neutral-fill-loud)) h s
        calc(l - 5)
    );
    color: var(--c-color-on-loud, var(--c-color-neutral-on-loud));
  }

  :host([appearance='solid']:active) {
    --_active-background-color: hsl(
      from var(--c-color-fill-loud, var(--c-color-neutral-fill-loud)) h s
        calc(l - 10)
    );
    --_active-color: var(--c-color-on-loud, var(--c-color-neutral-on-loud));
  }

  /* Fill */
  :host([appearance~='fill']) {
    border-color: transparent;
    background-color: var(
      --c-color-fill-normal,
      var(--c-color-neutral-fill-normal)
    );
    border-color: transparent;
    color: var(--c-color-on-normal, var(--c-color-neutral-on-normal));
  }

  :host([appearance='fill']:hover) {
    background-color: hsl(
      from var(--c-color-fill-normal, var(--c-color-neutral-fill-normal)) h s
        calc(l - 5)
    );
    color: var(--c-color-on-normal, var(--c-color-neutral-on-normal));
  }

  :host([appearance='fill'][active]),
  :host([appearance='fill']:active) {
    --_active-background-color: hsl(
      from var(--c-color-fill-normal, var(--c-color-neutral-fill-normal)) h s
        calc(l - 10)
    );
    --_active-color: var(--c-color-on-normal, var(--c-color-neutral-on-normal));
  }

  .button-content {
    display: flex;
    align-items: center;
    gap: 0.25em;
    width: 100%;
  }

  .prefix,
  .suffix {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button-content--start {
    justify-content: start;
  }

  .button-content--end {
    justify-content: end;
  }

  craft-button-group craft-button {
    border-radius: 0;
  }

  craft-button-reset,
  craft-button-submit {
    /* Temporarily make it very obvious when these are used */
    outline: 10px solid var(--c-button-danger-border);
  }

  .a11y-error {
    position: relative;
    outline: 2px solid var(--c-color-danger-border-normal) !important;
    background-color: rgba(255, 0, 0, 0.1) !important;

    &:after {
      content: '!';
      position: absolute;
      display: inline-flex;
      font-size: calc(11rem / 16);
      padding: 0.125em 0.5em 0.25em;
      inset-block-start: -2px;
      inset-inline-start: 0;
      background: var(--c-color-danger-bg-emphasis);
      color: white;
      transform: translateX(-100%);
    }
  }

  /*
  Link mode: the inner <a> is the full interactive surface.
  Move inline padding from :host to the anchor so the whole button is clickable.
   */
  :host([href]:not([disabled])) {
    padding-inline: 0;

    /* Lion's minimum-click-target overlay is positioned, so it paints above
       the (non-positioned) anchor and swallows every pointer click before it
       can activate the link. Recreate the overlay on the anchor instead, so
       the full target navigates. */
    &::before {
      display: none;
    }
  }

  .link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: inherit;
    gap: inherit;
    inline-size: 100%;
    /* Stretch to the host's full cross size so the whole button (including
       block padding) is the clickable link. The host's height is indefinite
       (min-height), so a percentage min-block-size would not resolve. */
    align-self: stretch;
    color: inherit;
    font: inherit;
    text-decoration: none;
    padding-inline: var(
      --c-button-spacing-inline,
      var(--c-form-control-spacing-inline)
    );

    /* Same minimum click area as Lion's :host::before (WCAG 2.5.5), but as
       part of the anchor so clicks on it follow the link. */
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-height: 44px;
      min-width: 44px;
      width: 100%;
      height: 100%;
    }
  }

  :host([href][size~='small']:not([disabled])) .link {
    padding-inline: var(--c-spacing-sm);
  }

  :host([href][size~='large']:not([disabled])) .link {
    padding-inline: var(--c-spacing-lg);
  }

  :host([href][size~='zero']:not([disabled])) .link,
  :host([href][icon]:not([disabled])) .link {
    padding-inline: 0;
  }
`,no=_`
  :host {
    --_size: var(--size, 24px);
  }

  .wrapper {
    display: inline-flex;
    justify-content: center;
  }

  .hidden {
    display: none;
  }

  @keyframes rotator {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(1turn);
    }
  }

  .spinner {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--_size);
    height: var(--_size);
  }

  .spinner:before {
    display: block;
    content: '';
    font-size: 0;
    animation: rotator 0.7s linear infinite;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid transparent;
    border-inline-end-color: currentcolor;
    border-block-end-color: currentcolor;
    opacity: 0.8;
  }
`,ro=_`
  .cp-visually-hidden:not(:focus-within) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,io=new WeakMap,ao=class extends g{constructor(...e){super(...e),this.label=o(`More Info`),this.icon=`circle-info`,this.disabled=!1,this.status=``,w(this,io,new AbortController)}connectedCallback(){super.connectedCallback(),E(io,this).signal.aborted&&T(io,this,new AbortController),this.id||=`info-icon-${Math.random().toString(36).slice(2,8)}`;let{signal:e}=E(io,this);this.addEventListener(`craft-show`,()=>{oo._&&oo._!==this&&oo._.renderRoot.querySelector(`craft-tooltip`)?.hide(),oo._=this},{signal:e}),this.addEventListener(`craft-after-show`,()=>{this.status=``,setTimeout(()=>{this.status=`Some new status`},200)},{signal:e}),this.addEventListener(`craft-after-hide`,()=>{oo._===this&&(oo._=null),this.status=``},{signal:e})}disconnectedCallback(){oo._===this&&(oo._=null),E(io,this).abort(),super.disconnectedCallback()}render(){return m`
      <div class="cp-info-icon">
        <craft-visually-hidden role="status">
          ${this.status}
        </craft-visually-hidden>

        <craft-button
          type="button"
          icon
          size="zero"
          appearance="plain"
          id="${this.id}"
        >
          <craft-icon name="${this.icon}" label="${this.label}"></craft-icon>
        </craft-button>

        <craft-tooltip trigger="click" for="${this.id}"
          ><slot></slot
        ></craft-tooltip>
      </div>
    `}};ao.styles=_`
    :host {
      display: inline-flex;
    }
  `;var oo={_:null};n([v()],ao.prototype,`label`,void 0),n([v()],ao.prototype,`icon`,void 0),n([v({type:Boolean,reflect:!0})],ao.prototype,`disabled`,void 0),n([v()],ao.prototype,`id`,void 0),n([y()],ao.prototype,`status`,void 0),n([b(`craft-tooltip`)],ao.prototype,`tooltip`,void 0),customElements.get(`craft-info-icon`)||customElements.define(`craft-info-icon`,ao);var so=class extends g{constructor(...e){super(...e),this.debug=!1}render(){return m`<slot></slot>`}};so.styles=_`
    :host(:not([debug])) {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }
  `,n([v({type:Boolean,reflect:!0})],so.prototype,`debug`,void 0),customElements.get(`craft-visually-hidden`)||customElements.define(`craft-visually-hidden`,so);var co=class extends g{constructor(...e){super(...e),this.visible=!0}show(){this.visible=!0,this.dispatchEvent(new CustomEvent(`show`))}hide(){this.visible=!1,this.dispatchEvent(new CustomEvent(`hide`))}focus(){this.wrapper?.focus()}render(){return m`
      <div
        tabindex="-1"
        class="${c({wrapper:!0,hidden:!this.visible})}"
      >
        <div class="spinner"></div>
        <span class="cp-visually-hidden"><slot /></span>
      </div>
    `}};co.styles=[ro,no],n([v({reflect:!0,type:Boolean})],co.prototype,`visible`,void 0),n([b(`.wrapper`)],co.prototype,`wrapper`,void 0),customElements.get(`craft-spinner`)||customElements.define(`craft-spinner`,co);var lo=Object.prototype.toString;function uo(e){return typeof e==`function`||lo.call(e)===`[object Function]`}function fo(e){var t=Number(e);return isNaN(t)?0:t===0||!isFinite(t)?t:(t>0?1:-1)*Math.floor(Math.abs(t))}var po=2**53-1;function mo(e){var t=fo(e);return Math.min(Math.max(t,0),po)}function ho(e,t){var n=Array,r=Object(e);if(e==null)throw TypeError(`Array.from requires an array-like object - not null or undefined`);if(t!==void 0&&!uo(t))throw TypeError(`Array.from: when provided, the second argument must be a function`);for(var i=mo(r.length),a=uo(n)?Object(new n(i)):Array(i),o=0,s;o<i;)s=r[o],t?a[o]=t(s,o):a[o]=s,o+=1;return a.length=i,a}function go(e){"@babel/helpers - typeof";return go=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},go(e)}function _o(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function vo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,xo(r.key),r)}}function yo(e,t,n){return t&&vo(e.prototype,t),n&&vo(e,n),Object.defineProperty(e,`prototype`,{writable:!1}),e}function bo(e,t,n){return t=xo(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xo(e){var t=So(e,`string`);return go(t)==`symbol`?t:t+``}function So(e,t){if(go(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(go(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Co=typeof Set>`u`?Set:function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];_o(this,e),bo(this,`items`,void 0),this.items=t}return yo(e,[{key:`add`,value:function(e){return this.has(e)===!1&&this.items.push(e),this}},{key:`clear`,value:function(){this.items=[]}},{key:`delete`,value:function(e){var t=this.items.length;return this.items=this.items.filter(function(t){return t!==e}),t!==this.items.length}},{key:`forEach`,value:function(e){var t=this;this.items.forEach(function(n){e(n,n,t)})}},{key:`has`,value:function(e){return this.items.indexOf(e)!==-1}},{key:`size`,get:function(){return this.items.length}}])}();function z(e){return e.localName??e.tagName.toLowerCase()}var wo={article:`article`,aside:`complementary`,button:`button`,datalist:`listbox`,dd:`definition`,details:`group`,dialog:`dialog`,dt:`term`,fieldset:`group`,figure:`figure`,form:`form`,footer:`contentinfo`,h1:`heading`,h2:`heading`,h3:`heading`,h4:`heading`,h5:`heading`,h6:`heading`,header:`banner`,hr:`separator`,html:`document`,legend:`legend`,li:`listitem`,math:`math`,main:`main`,menu:`list`,nav:`navigation`,ol:`list`,optgroup:`group`,option:`option`,output:`status`,progress:`progressbar`,section:`region`,summary:`button`,table:`table`,tbody:`rowgroup`,textarea:`textbox`,tfoot:`rowgroup`,td:`cell`,th:`columnheader`,thead:`rowgroup`,tr:`row`,ul:`list`},To={caption:new Set([`aria-label`,`aria-labelledby`]),code:new Set([`aria-label`,`aria-labelledby`]),deletion:new Set([`aria-label`,`aria-labelledby`]),emphasis:new Set([`aria-label`,`aria-labelledby`]),generic:new Set([`aria-label`,`aria-labelledby`,`aria-roledescription`]),insertion:new Set([`aria-label`,`aria-labelledby`]),none:new Set([`aria-label`,`aria-labelledby`]),paragraph:new Set([`aria-label`,`aria-labelledby`]),presentation:new Set([`aria-label`,`aria-labelledby`]),strong:new Set([`aria-label`,`aria-labelledby`]),subscript:new Set([`aria-label`,`aria-labelledby`]),superscript:new Set([`aria-label`,`aria-labelledby`])};function Eo(e,t){return[`aria-atomic`,`aria-busy`,`aria-controls`,`aria-current`,`aria-description`,`aria-describedby`,`aria-details`,`aria-dropeffect`,`aria-flowto`,`aria-grabbed`,`aria-hidden`,`aria-keyshortcuts`,`aria-label`,`aria-labelledby`,`aria-live`,`aria-owns`,`aria-relevant`,`aria-roledescription`].some(function(n){var r;return e.hasAttribute(n)&&!((r=To[t])!=null&&r.has(n))})}function Do(e,t){return Eo(e,t)}function Oo(e){var t=Ao(e);if(t===null||jo.indexOf(t)!==-1){var n=ko(e);if(jo.indexOf(t||``)===-1||Do(e,n||``))return n}return t}function ko(e){var t=wo[z(e)];if(t!==void 0)return t;switch(z(e)){case`a`:case`area`:case`link`:if(e.hasAttribute(`href`))return`link`;break;case`img`:return e.getAttribute(`alt`)===``&&!Do(e,`img`)?`presentation`:`img`;case`input`:var n=e.type;switch(n){case`button`:case`image`:case`reset`:case`submit`:return`button`;case`checkbox`:case`radio`:return n;case`range`:return`slider`;case`email`:case`tel`:case`text`:case`url`:return e.hasAttribute(`list`)?`combobox`:`textbox`;case`search`:return e.hasAttribute(`list`)?`combobox`:`searchbox`;case`number`:return`spinbutton`;default:return null}case`select`:return e.hasAttribute(`multiple`)||e.size>1?`listbox`:`combobox`}return null}function Ao(e){var t=e.getAttribute(`role`);if(t!==null){var n=t.trim().split(` `)[0];if(n.length>0)return n}return null}var jo=[`presentation`,`none`];function B(e){return e!==null&&e.nodeType===e.ELEMENT_NODE}function Mo(e){return B(e)&&z(e)===`caption`}function No(e){return B(e)&&z(e)===`input`}function Po(e){return B(e)&&z(e)===`optgroup`}function Fo(e){return B(e)&&z(e)===`select`}function Io(e){return B(e)&&z(e)===`table`}function Lo(e){return B(e)&&z(e)===`textarea`}function Ro(e){var t=(e.ownerDocument===null?e:e.ownerDocument).defaultView;if(t===null)throw TypeError(`no window available`);return t}function zo(e){return B(e)&&z(e)===`fieldset`}function Bo(e){return B(e)&&z(e)===`legend`}function Vo(e){return B(e)&&z(e)===`slot`}function Ho(e){return B(e)&&e.ownerSVGElement!==void 0}function Uo(e){return B(e)&&z(e)===`svg`}function Wo(e){return Ho(e)&&z(e)===`title`}function Go(e,t){if(B(e)&&e.hasAttribute(t)){var n=e.getAttribute(t).split(` `),r=e.getRootNode?e.getRootNode():e.ownerDocument;return n.map(function(e){return r.getElementById(e)}).filter(function(e){return e!==null})}return[]}function Ko(e,t){return B(e)?t.indexOf(Oo(e))!==-1:!1}function qo(e){return e.trim().replace(/\s\s+/g,` `)}function Jo(e,t){if(!B(e))return!1;if(e.hasAttribute(`hidden`)||e.getAttribute(`aria-hidden`)===`true`)return!0;var n=t(e);return n.getPropertyValue(`display`)===`none`||n.getPropertyValue(`visibility`)===`hidden`}function Yo(e){return Ko(e,[`button`,`combobox`,`listbox`,`textbox`])||Xo(e,`range`)}function Xo(e,t){if(!B(e))return!1;switch(t){case`range`:return Ko(e,[`meter`,`progressbar`,`scrollbar`,`slider`,`spinbutton`]);default:throw TypeError(`No knowledge about abstract role '${t}'. This is likely a bug :(`)}}function Zo(e,t){var n=ho(e.querySelectorAll(t));return Go(e,`aria-owns`).forEach(function(e){n.push.apply(n,ho(e.querySelectorAll(t)))}),n}function Qo(e){return Fo(e)?e.selectedOptions||Zo(e,`[selected]`):Zo(e,`[aria-selected="true"]`)}function $o(e){return Ko(e,jo)}function es(e){return Mo(e)}function ts(e){return Ko(e,[`button`,`cell`,`checkbox`,`columnheader`,`gridcell`,`heading`,`label`,`legend`,`link`,`menuitem`,`menuitemcheckbox`,`menuitemradio`,`option`,`radio`,`row`,`rowheader`,`switch`,`tab`,`tooltip`,`treeitem`])}function ns(e){return!1}function rs(e){return No(e)||Lo(e)?e.value:e.textContent||``}function is(e){var t=e.getPropertyValue(`content`);return/^["'].*["']$/.test(t)?t.slice(1,-1):``}function as(e){var t=z(e);return t===`button`||t===`input`&&e.getAttribute(`type`)!==`hidden`||t===`meter`||t===`output`||t===`progress`||t===`select`||t===`textarea`}function os(e){if(as(e))return e;var t=null;return e.childNodes.forEach(function(e){if(t===null&&B(e)){var n=os(e);n!==null&&(t=n)}}),t}function ss(e){if(e.control!==void 0)return e.control;var t=e.getAttribute(`for`);return t===null?os(e):e.ownerDocument.getElementById(t)}function cs(e){var t=e.labels;if(t===null)return t;if(t!==void 0)return ho(t);if(!as(e))return null;var n=e.ownerDocument;return ho(n.querySelectorAll(`label`)).filter(function(t){return ss(t)===e})}function ls(e){var t=e.assignedNodes();return t.length===0?ho(e.childNodes):t}function us(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=new Co,r=typeof Map>`u`?void 0:new Map,i=Ro(e),a=t.compute,o=a===void 0?`name`:a,s=t.computedStyleSupportsPseudoElements,c=s===void 0?t.getComputedStyle!==void 0:s,l=t.getComputedStyle,u=l===void 0?i.getComputedStyle.bind(i):l,d=t.hidden,f=d===void 0?!1:d,p=function(e,t){if(t!==void 0)throw Error(`use uncachedGetComputedStyle directly for pseudo elements`);if(r===void 0)return u(e);var n=r.get(e);if(n)return n;var i=u(e,t);return r.set(e,i),i};function m(e,t){var n=``;if(B(e)&&c&&(n=`${is(u(e,`::before`))} ${n}`),(Vo(e)?ls(e):ho(e.childNodes).concat(Go(e,`aria-owns`))).forEach(function(e){var r=v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1,recursion:!0}),i=(B(e)?p(e).getPropertyValue(`display`):`inline`)===`inline`?``:` `;n+=`${i}${r}${i}`}),B(e)&&c){var r=is(u(e,`::after`));n=`${n} ${r}`}return n.trim()}function h(e,t){var r=e.getAttributeNode(t);return r!==null&&!n.has(r)&&r.value.trim()!==``?(n.add(r),r.value):null}function g(e){return B(e)?h(e,`title`):null}function _(e){if(!B(e))return null;if(zo(e)){n.add(e);for(var t=ho(e.childNodes),r=0;r<t.length;r+=1){var i=t[r];if(Bo(i))return v(i,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else if(Io(e)){n.add(e);for(var a=ho(e.childNodes),o=0;o<a.length;o+=1){var s=a[o];if(Mo(s))return v(s,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else if(Uo(e)){n.add(e);for(var c=ho(e.childNodes),l=0;l<c.length;l+=1){var u=c[l];if(Wo(u))return u.textContent}return null}else if(z(e)===`img`||z(e)===`area`){var d=h(e,`alt`);if(d!==null)return d}else if(Po(e)){var f=h(e,`label`);if(f!==null)return f}if(No(e)&&(e.type===`button`||e.type===`submit`||e.type===`reset`)){var p=h(e,`value`);if(p!==null)return p;if(e.type===`submit`)return`Submit`;if(e.type===`reset`)return`Reset`}var g=cs(e);if(g!==null&&g.length!==0)return n.add(e),ho(g).map(function(e){return v(e,{isEmbeddedInLabel:!0,isReferenced:!1,recursion:!0})}).filter(function(e){return e.length>0}).join(` `);if(No(e)&&e.type===`image`){var _=h(e,`alt`);if(_!==null)return _;var y=h(e,`title`);return y===null?`Submit Query`:y}if(Ko(e,[`button`])){var b=m(e,{isEmbeddedInLabel:!1,isReferenced:!1});if(b!==``)return b}return null}function v(e,t){if(n.has(e))return``;if(!f&&Jo(e,p)&&!t.isReferenced)return n.add(e),``;var r=B(e)?e.getAttributeNode(`aria-labelledby`):null,i=r!==null&&!n.has(r)?Go(e,`aria-labelledby`):[];if(o===`name`&&!t.isReferenced&&i.length>0)return n.add(r),i.map(function(e){return v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!0,recursion:!1})}).join(` `);var a=t.recursion&&Yo(e)&&o===`name`;if(!a){var s=(B(e)&&e.getAttribute(`aria-label`)||``).trim();if(s!==``&&o===`name`)return n.add(e),s;if(!$o(e)){var c=_(e);if(c!==null)return n.add(e),c}}if(Ko(e,[`menu`]))return n.add(e),``;if(a||t.isEmbeddedInLabel||t.isReferenced){if(Ko(e,[`combobox`,`listbox`])){n.add(e);var l=Qo(e);return l.length===0?No(e)?e.value:``:ho(l).map(function(e){return v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1,recursion:!0})}).join(` `)}if(Xo(e,`range`))return n.add(e),e.hasAttribute(`aria-valuetext`)?e.getAttribute(`aria-valuetext`):e.hasAttribute(`aria-valuenow`)?e.getAttribute(`aria-valuenow`):e.getAttribute(`value`)||``;if(Ko(e,[`textbox`]))return n.add(e),rs(e)}if(ts(e)||B(e)&&t.isReferenced||es(e)||ns(e)){var u=m(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1});if(u!==``)return n.add(e),u}if(e.nodeType===e.TEXT_NODE)return n.add(e),e.textContent||``;if(t.recursion)return n.add(e),m(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1});var d=g(e);return d===null?(n.add(e),``):(n.add(e),d)}return qo(v(e,{isEmbeddedInLabel:!1,isReferenced:o===`description`,recursion:!1}))}function ds(e){return Ko(e,[`caption`,`code`,`deletion`,`emphasis`,`generic`,`insertion`,`none`,`paragraph`,`presentation`,`strong`,`subscript`,`superscript`])}function fs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ds(e)?``:us(e,t)}var ps={Solid:`solid`,Fill:`fill`,Outline:`outline`,Plain:`plain`},ms={Accent:`accent`,Neutral:`neutral`,Danger:`danger`},V=class extends eo{constructor(...e){super(...e),this.appearance=`solid`,this.variant=`neutral`,this.size=`medium`,this.active=!1,this.loading=!1,this.align=`center`,this.icon=null,this.href=null,this.target=null,this.rel=null,this.download=null,this.iconPosition=`prefix`,this._hasAccessibilityError=!1,this.linkHostStateApplied=!1}static get styles(){return[...super.styles,Nr,to]}connectedCallback(){this.href&&!this.disabled&&(this.type=`button`,this.setAttribute(`role`,`presentation`)),super.connectedCallback(),this.syncLinkHostState()}updated(e){super.updated(e),(e.has(`href`)||e.has(`disabled`))&&this.syncLinkHostState()}syncLinkHostState(){this.isLink?(this.setAttribute(`role`,`presentation`),this.tabIndex=-1,this.type=`button`,this.linkHostStateApplied=!0):this.linkHostStateApplied&&=(this.setAttribute(`role`,`button`),this.type=`submit`,this.disabled||(this.tabIndex=0),!1)}async firstUpdated(e){super.firstUpdated(e),await this.updateComplete;let t=this.querySelectorAll(`craft-icon, craft-spinner`);if(await Promise.all(Array.from(t).map(e=>e.updateComplete)),!this.accessibleName){let e=this.isLink?this.shadowRoot?.querySelector(`a.link`)??this:this;this.accessibleName=fs(e)}this._hasAccessibilityError=!this.accessibleName||this.accessibleName.trim()===``}get isLink(){return!!this.href&&!this.disabled}get computedRel(){if(this.target===`_blank`){let e=new Set((this.rel??``).split(/\s+/).filter(Boolean));return e.add(`noopener`),Array.from(e).join(` `)}return this.rel}render(){let e=m`
      <div
        class="${c({"button-content":!0,"button-content--start":this.align===`start`,"button-content--end":this.align===`end`,"a11y-error":this._hasAccessibilityError})}"
        part="content"
      >
        <slot name="prefix" class="prefix" part="prefix">
          ${this.icon&&this.iconPosition===`prefix`?m`<craft-icon name="${this.icon}"></craft-icon>`:h}
        </slot>
        <slot class="label" part="label"></slot>
        <slot name="suffix" class="suffix" part="suffix">
          ${this.icon&&this.iconPosition===`suffix`?m`<craft-icon name="${this.icon}"></craft-icon>`:h}
        </slot>
      </div>
      ${this.loading?m`<craft-spinner part="spinner"></craft-spinner>`:h}
    `;return this.isLink?m`
        <a
          class="link"
          part="link"
          href="${this.href}"
          target="${this.target??h}"
          rel="${this.computedRel??h}"
          download="${this.download??h}"
          >${e}</a
        >
      `:e}};n([v()],V.prototype,`accessibleName`,void 0),n([v({reflect:!0})],V.prototype,`appearance`,void 0),n([v({reflect:!0})],V.prototype,`variant`,void 0),n([v({reflect:!0})],V.prototype,`size`,void 0),n([v({reflect:!0})],V.prototype,`value`,void 0),n([v({reflect:!0,type:Boolean})],V.prototype,`active`,void 0),n([v({reflect:!0,type:Boolean})],V.prototype,`loading`,void 0),n([v()],V.prototype,`align`,void 0),n([v()],V.prototype,`icon`,void 0),n([v({reflect:!0})],V.prototype,`href`,void 0),n([v()],V.prototype,`target`,void 0),n([v()],V.prototype,`rel`,void 0),n([v()],V.prototype,`download`,void 0),n([v({attribute:`icon-position`})],V.prototype,`iconPosition`,void 0),n([y()],V.prototype,`_hasAccessibilityError`,void 0),customElements.get(`craft-button`)||customElements.define(`craft-button`,V);var hs=_`
  :host {
    --c-color-fill-loud: var(--c-color-neutral-fill-loud);
    --c-color-fill-normal: var(--c-color-neutral-fill-normal);
    --c-color-fill-quiet: var(--c-color-neutral-fill-quiet);
    --c-color-border-loud: var(--c-color-neutral-border-loud);
    --c-color-border-normal: var(--c-color-neutral-border-normal);
    --c-color-border-quiet: var(--c-color-neutral-border-quiet);
    --c-color-on-loud: var(--c-color-neutral-on-loud);
    --c-color-on-normal: var(--c-color-neutral-on-normal);
    --c-color-on-quiet: var(--c-color-neutral-on-quiet);
    --_radius: var(--c-callout-radius, var(--c-radius-md));
    display: flex;
    gap: var(--c-spacing-sm);
    align-items: start;
    padding: var(--c-spacing-sm) var(--c-spacing-md);
    border: 1px solid transparent;
  }

  .callout__body {
    display: grid;
    gap: var(--c-spacing-sm);
  }

  .callout__title {
    font-weight: bold;
  }

  .callout__icon {
    width: auto;
    height: 1lh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ::slotted(code) {
    font-size: 0.9em;
    display: inline-flex;
    padding: 0 var(--c-spacing-sm);
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: var(--c-radius-sm);
  }

  :host([inline]) {
    display: inline-flex;
    padding-inline: var(--c-spacing-sm);
    padding-block: 0;
    line-height: 1.25rem;
    font-size: 0.9em;
  }

  :host([rounded~='all']) {
    border-radius: var(--_radius);
  }

  :host([rounded~='none']) {
    border-radius: 0;
  }

  :host([rounded~='start']) {
    border-start-start-radius: var(--_radius);
    border-start-end-radius: var(--_radius);
  }

  :host([rounded~='end']) {
    border-end-start-radius: var(--_radius);
    border-end-end-radius: var(--_radius);
  }

  :host([appearance~='solid']) {
    --c-text-link: var(--c-color-on-loud);
    background-color: var(--c-color-fill-loud);
    color: var(--c-color-on-loud);
    border-color: var(--c-color-border-loud);
  }

  :host([appearance~='fill']) {
    --c-text-link: var(--c-color-on-normal);
    border-color: transparent;
    background-color: var(--c-color-fill-normal);
    color: var(--c-color-on-normal);
  }

  :host([appearance~='outline-fill']) {
    --c-text-link: var(--c-color-on-normal);
    border-color: var(--c-color-border-normal);
    background-color: var(--c-color-fill-normal);
    color: var(--c-color-on-normal);
  }

  :host([appearance~='outline']) {
    --c-text-link: var(--c-color-on-quiet);
    border-color: var(--c-color-border-quiet);
    background-color: transparent;
    color: var(--c-color-on-quiet);
  }

  :host([appearance~='plain']) {
    --c-text-link: var(--c-color-on-quiet);
    background-color: transparent;
    border-color: transparent;
    color: var(--c-color-on-quiet);
  }
`,gs=class extends g{constructor(...e){super(...e),this.variant=Lr.Neutral,this.appearance=r.OutlineFill,this.title=``,this.icon=null,this.rounded=`all`,this.inline=!1}getDefaultIcon(){switch(this.variant){case Lr.Info:return`lightbulb`;case Lr.Success:return`circle-check`;case Lr.Warning:return`circle-exclamation`;case Lr.Danger:return`triangle-exclamation`;default:return null}}render(){return m`
      ${this.icon||this.querySelector(`[slot="icon"]`)?m`<slot name="icon" class="callout__icon">
            <craft-icon
              name="${this.getDefaultIcon()}"
              style="font-size: 0.9em"
            ></craft-icon>
          </slot>`:h}
      <div class="callout__body">
        <slot name="title" class="callout__title">${this.title}</slot>
        <div class="callout__description">
          <slot></slot>
        </div>
      </div>
    `}};gs.styles=[Nr,hs],n([v({reflect:!0})],gs.prototype,`variant`,void 0),n([v({reflect:!0})],gs.prototype,`appearance`,void 0),n([v()],gs.prototype,`title`,void 0),n([v()],gs.prototype,`icon`,void 0),n([v({reflect:!0})],gs.prototype,`rounded`,void 0),n([v({reflect:!0,type:Boolean})],gs.prototype,`inline`,void 0),customElements.get(`craft-callout`)||customElements.define(`craft-callout`,gs);var _s=_`
  :host {
    display: block;
  }

  :host([active]) .card {
    color: var(--c-color-on-quiet);
    background-color: color-mix(var(--c-color-fill-quiet), transparent 40%);
    border-color: var(--c-color-border-loud);

    .card__header,
    .card__footer {
      background-color: var(--c-color-fill-loud);
      border-color: var(--c-color-border-loud);
      color: var(--c-color-on-loud);
    }
  }

  .card {
    color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
    background-color: color-mix(
      var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)),
      transparent 70%
    );
    border: 1px solid
      var(--c-color-border-quiet, var(--c-color-neutral-border-quiet));
    border-radius: var(--c-card-radius, var(--c-radius-md));
    box-shadow: var(--c-card-shadow, var(--c-shadow-sm));
    position: relative;
  }

  .card__header,
  .card__footer {
    font-size: 0.875em;
    padding-block: var(--c-card-padding-block, var(--c-spacing-sm));
    padding-inline-start: var(--c-card-padding-inline, var(--c-spacing-md));
    padding-inline-end: var(--c-card-padding-inline, var(--c-spacing-sm));
    background-color: var(--c-color-fill-quiet);
    border-width: 0;
    border-color: var(--c-color-border-quiet);
    border-style: solid;
  }

  .card__footer {
    border-block-start-width: 1px;
    border-end-start-radius: var(--c-card-radius, var(--c-radius-md));
    border-end-end-radius: var(--c-card-radius, var(--c-radius-md));
  }

  .card__header {
    min-height: 1lh;
    border-start-start-radius: var(--c-card-radius, var(--c-radius-md));
    border-start-end-radius: var(--c-card-radius, var(--c-radius-md));
    border-block-end-width: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card__actions {
    display: flex;
    gap: var(--c-spacing-sm);
  }

  .card-body {
    gap: var(--c-spacing-md);
    padding-inline: var(--c-card-padding-inline, var(--c-spacing-md));
    padding-block: var(--c-card-padding-block, var(--c-spacing-md));
  }

  .card-body--thumb-start {
    display: grid;
    grid-template-areas: 'thumbnail main';
    grid-template-columns: calc(120rem / 16) minmax(0, 1fr);
  }

  .card-body--thumb-end {
    display: grid;
    grid-template-areas: 'main thumbnail';
    grid-template-columns: minmax(0, 1fr) calc(120rem / 16);
  }

  .card-body__main {
    grid-area: main;
  }

  .card-body__thumbnail {
    grid-area: thumbnail;
  }
`,vs=class extends g{constructor(...e){super(...e),this.label=``,this.active=!1,this.showThumb=!0,this.thumbAlignment=`start`,this._hasThumbnail=!1}_handleThumbnailSlotChange(e){let t=e.target;this._hasThumbnail=t.assignedElements({flatten:!0}).length>0}render(){let e=!!this.label||!!this.querySelector(`[slot="header"]`)||!!this.querySelector(`[slot="label"]`)||!!this.querySelector(`[slot="actions"]`),t=!!this.querySelector(`[slot="footer"]`);return m`
      <div
        class="${c({card:!0,"card--has-thumbnail":this._hasThumbnail})}"
      >
        ${e?m`<div class="card__header">
              <slot name="header">
                <slot name="label" class="card__label" part="label"
                  >${this.label}</slot
                >
                <slot name="actions"></slot>
              </slot>
            </div>`:h}

        <div
          class="${c({"card-body":!0,"card-body--thumb-start":this._hasThumbnail&&this.thumbAlignment===`start`,"card-body--thumb-end":this._hasThumbnail&&this.thumbAlignment===`end`})}"
        >
          <div class="card-body__thumb">
            <slot
              name="thumbnail"
              @slotchange="${this._handleThumbnailSlotChange}"
            ></slot>
          </div>

          <div class="card-body__main">
            <slot></slot>
          </div>
        </div>

        ${t?m`<div class="card__footer"><slot name="footer"></slot></div>`:h}
      </div>
    `}};vs.styles=[_s],n([v()],vs.prototype,`label`,void 0),n([v({type:Boolean,reflect:!0})],vs.prototype,`active`,void 0),n([v({attribute:`show-thumb`})],vs.prototype,`showThumb`,void 0),n([v({attribute:`thumb-alignment`})],vs.prototype,`thumbAlignment`,void 0),n([y()],vs.prototype,`_hasThumbnail`,void 0),customElements.get(`craft-card`)||customElements.define(`craft-card`,vs);var ys=window,bs=new WeakMap;function xs(e){ys.applyFocusVisiblePolyfill&&!bs.has(e)&&(ys.applyFocusVisiblePolyfill(e),bs.set(e,void 0))}var Ss=L(e=>class extends e{static get properties(){return{focused:{type:Boolean,reflect:!0},focusedVisible:{type:Boolean,reflect:!0,attribute:`focused-visible`},autofocus:{type:Boolean,reflect:!0}}}constructor(){super(),this.focused=!1,this.focusedVisible=!1,this.autofocus=!1}firstUpdated(e){super.firstUpdated(e),this.__registerEventsForFocusMixin(),this.__syncAutofocusToFocusableElement()}disconnectedCallback(){super.disconnectedCallback(),this.__teardownEventsForFocusMixin()}updated(e){super.updated(e),e.has(`autofocus`)&&this.__syncAutofocusToFocusableElement()}__syncAutofocusToFocusableElement(){this._focusableNode&&(this.hasAttribute(`autofocus`)?this._focusableNode.setAttribute(`autofocus`,``):this._focusableNode.removeAttribute(`autofocus`))}focus(){this._focusableNode?.focus()}blur(){this._focusableNode?.blur()}get _focusableNode(){return this._inputNode||document.createElement(`input`)}__onFocus(){if(this.focused=!0,typeof ys.applyFocusVisiblePolyfill==`function`)this.focusedVisible=this._focusableNode.hasAttribute(`data-focus-visible-added`);else try{this.focusedVisible=this._focusableNode.matches(`:focus-visible`)}catch{this.focusedVisible=!1}}__onBlur(){this.focused=!1,this.focusedVisible=!1}__registerEventsForFocusMixin(){xs(this.getRootNode()),this.__redispatchFocus=e=>{e.stopPropagation(),this.dispatchEvent(new Event(`focus`))},this._focusableNode.addEventListener(`focus`,this.__redispatchFocus),this.__redispatchBlur=e=>{e.stopPropagation(),this.dispatchEvent(new Event(`blur`))},this._focusableNode.addEventListener(`blur`,this.__redispatchBlur),this.__redispatchFocusin=e=>{e.stopPropagation(),this.__onFocus(),this.dispatchEvent(new Event(`focusin`,{bubbles:!0,composed:!0}))},this._focusableNode.addEventListener(`focusin`,this.__redispatchFocusin),this.__redispatchFocusout=e=>{e.stopPropagation(),this.__onBlur(),this.dispatchEvent(new Event(`focusout`,{bubbles:!0,composed:!0}))},this._focusableNode.addEventListener(`focusout`,this.__redispatchFocusout)}__teardownEventsForFocusMixin(){this._focusableNode&&(this._focusableNode?.removeEventListener(`focus`,this.__redispatchFocus),this._focusableNode?.removeEventListener(`blur`,this.__redispatchBlur),this._focusableNode?.removeEventListener(`focusin`,this.__redispatchFocusin),this._focusableNode?.removeEventListener(`focusout`,this.__redispatchFocusout))}});function Cs(e,t){return t={exports:{}},e(t,t.exports),t.exports}var ws=`long`,Ts=`short`,Es=`narrow`,H=`numeric`,Ds=`2-digit`,Os={number:{decimal:{style:`decimal`},integer:{style:`decimal`,maximumFractionDigits:0},currency:{style:`currency`,currency:`USD`},percent:{style:`percent`},default:{style:`decimal`}},date:{short:{month:H,day:H,year:Ds},medium:{month:Ts,day:H,year:H},long:{month:ws,day:H,year:H},full:{month:ws,day:H,year:H,weekday:ws},default:{month:Ts,day:H,year:H}},time:{short:{hour:H,minute:H},medium:{hour:H,minute:H,second:H},long:{hour:H,minute:H,second:H,timeZoneName:Ts},full:{hour:H,minute:H,second:H,timeZoneName:Ts},default:{hour:H,minute:H,second:H}},duration:{default:{hours:{minimumIntegerDigits:1,maximumFractionDigits:0},minutes:{minimumIntegerDigits:2,maximumFractionDigits:0},seconds:{minimumIntegerDigits:2,maximumFractionDigits:3}}},parseNumberPattern:function(e){if(e){var t={},n=e.match(/\b[A-Z]{3}\b/i),r=e.replace(/[^¤]/g,``).length;if(!r&&n&&(r=1),r?(t.style=`currency`,t.currencyDisplay=r===1?`symbol`:r===2?`code`:`name`,t.currency=n?n[0].toUpperCase():`USD`):e.indexOf(`%`)>=0&&(t.style=`percent`),!/[@#0]/.test(e))return t.style?t:void 0;if(t.useGrouping=e.indexOf(`,`)>=0,/E\+?[@#0]+/i.test(e)||e.indexOf(`@`)>=0){var i=e.replace(/E\+?[@#0]+|[^@#0]/gi,``);t.minimumSignificantDigits=Math.min(Math.max(i.replace(/[^@0]/g,``).length,1),21),t.maximumSignificantDigits=Math.min(Math.max(i.length,1),21)}else{for(var a=e.replace(/[^#0.]/g,``).split(`.`),o=a[0],s=o.length-1;o[s]===`0`;)--s;t.minimumIntegerDigits=Math.min(Math.max(o.length-1-s,1),21);var c=a[1]||``;for(s=0;c[s]===`0`;)++s;for(t.minimumFractionDigits=Math.min(Math.max(s,0),20);c[s]===`#`;)++s;t.maximumFractionDigits=Math.min(Math.max(s,0),20)}return t}},parseDatePattern:function(e){if(e){for(var t={},n=0;n<e.length;){for(var r=e[n],i=1;e[++n]===r;)++i;switch(r){case`G`:t.era=i===5?Es:i===4?ws:Ts;break;case`y`:case`Y`:t.year=i===2?Ds:H;break;case`M`:case`L`:i=Math.min(Math.max(i-1,0),4),t.month=[H,Ds,Ts,ws,Es][i];break;case`E`:case`e`:case`c`:t.weekday=i===5?Es:i===4?ws:Ts;break;case`d`:case`D`:t.day=i===2?Ds:H;break;case`h`:case`K`:t.hour12=!0,t.hour=i===2?Ds:H;break;case`H`:case`k`:t.hour12=!1,t.hour=i===2?Ds:H;break;case`m`:t.minute=i===2?Ds:H;break;case`s`:case`S`:t.second=i===2?Ds:H;break;case`z`:case`Z`:case`v`:case`V`:t.timeZoneName=i===1?Ts:ws;break}}return Object.keys(t).length?t:void 0}}},ks=function(e,t){if(typeof e==`string`&&t[e])return e;for(var n=[].concat(e||[]),r=0,i=n.length;r<i;++r)for(var a=n[r].split(`-`);a.length;){var o=a.join(`-`);if(t[o])return o;a.pop()}},As=`zero`,U=`one`,W=`two`,G=`few`,K=`many`,q=`other`,J=[function(e){return+e==1?U:q},function(e){var t=+e;return 0<=t&&t<=1?U:q},function(e){var t=Math.floor(Math.abs(+e)),n=+e;return t===0||n===1?U:q},function(e){var t=+e;return t===0?As:t===1?U:t===2?W:3<=t%100&&t%100<=10?G:11<=t%100&&t%100<=99?K:q},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length;return t===1&&n===0?U:q},function(e){var t=+e;return t%10==1&&t%100!=11?U:2<=t%10&&t%10<=4&&(t%100<12||14<t%100)?G:t%10==0||5<=t%10&&t%10<=9||11<=t%100&&t%100<=14?K:q},function(e){var t=+e;return t%10==1&&t%100!=11&&t%100!=71&&t%100!=91?U:t%10==2&&t%100!=12&&t%100!=72&&t%100!=92?W:(3<=t%10&&t%10<=4||t%10==9)&&(t%100<10||19<t%100)&&(t%100<70||79<t%100)&&(t%100<90||99<t%100)?G:t!==0&&t%1e6==0?K:q},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length,r=+(e+`.`).split(`.`)[1];return n===0&&t%10==1&&t%100!=11||r%10==1&&r%100!=11?U:n===0&&2<=t%10&&t%10<=4&&(t%100<12||14<t%100)||2<=r%10&&r%10<=4&&(r%100<12||14<r%100)?G:q},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length;return t===1&&n===0?U:2<=t&&t<=4&&n===0?G:n===0?q:K},function(e){var t=+e;return t===0?As:t===1?U:t===2?W:t===3?G:t===6?K:q},function(e){var t=Math.floor(Math.abs(+e)),n=+(``+e).replace(/^[^.]*.?|0+$/g,``);return+e==1||n!==0&&(t===0||t===1)?U:q},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length,r=+(e+`.`).split(`.`)[1];return n===0&&t%100==1||r%100==1?U:n===0&&t%100==2||r%100==2?W:n===0&&3<=t%100&&t%100<=4||3<=r%100&&r%100<=4?G:q},function(e){var t=Math.floor(Math.abs(+e));return t===0||t===1?U:q},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length,r=+(e+`.`).split(`.`)[1];return n===0&&(t===1||t===2||t===3)||n===0&&t%10!=4&&t%10!=6&&t%10!=9||n!==0&&r%10!=4&&r%10!=6&&r%10!=9?U:q},function(e){var t=+e;return t===1?U:t===2?W:3<=t&&t<=6?G:7<=t&&t<=10?K:q},function(e){var t=+e;return t===1||t===11?U:t===2||t===12?W:3<=t&&t<=10||13<=t&&t<=19?G:q},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length;return n===0&&t%10==1?U:n===0&&t%10==2?W:n===0&&(t%100==0||t%100==20||t%100==40||t%100==60||t%100==80)?G:n===0?q:K},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length,r=+e;return t===1&&n===0?U:t===2&&n===0?W:n===0&&(r<0||10<r)&&r%10==0?K:q},function(e){var t=Math.floor(Math.abs(+e)),n=+(``+e).replace(/^[^.]*.?|0+$/g,``);return n===0&&t%10==1&&t%100!=11||n!==0?U:q},function(e){var t=+e;return t===1?U:t===2?W:q},function(e){var t=+e;return t===0?As:t===1?U:q},function(e){var t=Math.floor(Math.abs(+e)),n=+e;return n===0?As:(t===0||t===1)&&n!==0?U:q},function(e){var t=+(e+`.`).split(`.`)[1],n=+e;return n%10==1&&(n%100<11||19<n%100)?U:2<=n%10&&n%10<=9&&(n%100<11||19<n%100)?G:t===0?q:K},function(e){var t=(e+`.`).split(`.`)[1].length,n=+(e+`.`).split(`.`)[1],r=+e;return r%10==0||11<=r%100&&r%100<=19||t===2&&11<=n%100&&n%100<=19?As:r%10==1&&r%100!=11||t===2&&n%10==1&&n%100!=11||t!==2&&n%10==1?U:q},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length,r=+(e+`.`).split(`.`)[1];return n===0&&t%10==1&&t%100!=11||r%10==1&&r%100!=11?U:q},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length,r=+e;return t===1&&n===0?U:n!==0||r===0||r!==1&&1<=r%100&&r%100<=19?G:q},function(e){var t=+e;return t===1?U:t===0||2<=t%100&&t%100<=10?G:11<=t%100&&t%100<=19?K:q},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length;return t===1&&n===0?U:n===0&&2<=t%10&&t%10<=4&&(t%100<12||14<t%100)?G:n===0&&t!==1&&0<=t%10&&t%10<=1||n===0&&5<=t%10&&t%10<=9||n===0&&12<=t%100&&t%100<=14?K:q},function(e){var t=Math.floor(Math.abs(+e));return 0<=t&&t<=1?U:q},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length;return n===0&&t%10==1&&t%100!=11?U:n===0&&2<=t%10&&t%10<=4&&(t%100<12||14<t%100)?G:n===0&&t%10==0||n===0&&5<=t%10&&t%10<=9||n===0&&11<=t%100&&t%100<=14?K:q},function(e){var t=Math.floor(Math.abs(+e)),n=+e;return t===0||n===1?U:2<=n&&n<=10?G:q},function(e){var t=Math.floor(Math.abs(+e)),n=+(e+`.`).split(`.`)[1],r=+e;return r===0||r===1||t===0&&n===1?U:q},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length;return n===0&&t%100==1?U:n===0&&t%100==2?W:n===0&&3<=t%100&&t%100<=4||n!==0?G:q},function(e){var t=+e;return 0<=t&&t<=1||11<=t&&t<=99?U:q},function(e){var t=+e;return t===1||t===5||t===7||t===8||t===9||t===10?U:t===2||t===3?W:t===4?G:t===6?K:q},function(e){var t=Math.floor(Math.abs(+e));return t%10==1||t%10==2||t%10==5||t%10==7||t%10==8||t%100==20||t%100==50||t%100==70||t%100==80?U:t%10==3||t%10==4||t%1e3==100||t%1e3==200||t%1e3==300||t%1e3==400||t%1e3==500||t%1e3==600||t%1e3==700||t%1e3==800||t%1e3==900?G:t===0||t%10==6||t%100==40||t%100==60||t%100==90?K:q},function(e){var t=+e;return(t%10==2||t%10==3)&&t%100!=12&&t%100!=13?G:q},function(e){var t=+e;return t===1||t===3?U:t===2?W:t===4?G:q},function(e){var t=+e;return t===0||t===7||t===8||t===9?As:t===1?U:t===2?W:t===3||t===4?G:t===5||t===6?K:q},function(e){var t=+e;return t%10==1&&t%100!=11?U:t%10==2&&t%100!=12?W:t%10==3&&t%100!=13?G:q},function(e){var t=+e;return t===1||t===11?U:t===2||t===12?W:t===3||t===13?G:q},function(e){var t=+e;return t===1?U:t===2||t===3?W:t===4?G:t===6?K:q},function(e){var t=+e;return t===1||t===5?U:q},function(e){var t=+e;return t===11||t===8||t===80||t===800?K:q},function(e){var t=Math.floor(Math.abs(+e));return t===1?U:t===0||2<=t%100&&t%100<=20||t%100==40||t%100==60||t%100==80?K:q},function(e){var t=+e;return t%10==6||t%10==9||t%10==0&&t!==0?K:q},function(e){var t=Math.floor(Math.abs(+e));return t%10==1&&t%100!=11?U:t%10==2&&t%100!=12?W:(t%10==7||t%10==8)&&t%100!=17&&t%100!=18?K:q},function(e){var t=+e;return t===1?U:t===2||t===3?W:t===4?G:q},function(e){var t=+e;return 1<=t&&t<=4?U:q},function(e){var t=+e;return t===1||t===5||7<=t&&t<=9?U:t===2||t===3?W:t===4?G:t===6?K:q},function(e){var t=+e;return t===1?U:t%10==4&&t%100!=14?K:q},function(e){var t=+e;return(t%10==1||t%10==2)&&t%100!=11&&t%100!=12?U:q},function(e){var t=+e;return t%10==6||t%10==9||t===10?G:q},function(e){var t=+e;return t%10==3&&t%100!=13?G:q}],js={af:{cardinal:J[0]},ak:{cardinal:J[1]},am:{cardinal:J[2]},ar:{cardinal:J[3]},ars:{cardinal:J[3]},as:{cardinal:J[2],ordinal:J[34]},asa:{cardinal:J[0]},ast:{cardinal:J[4]},az:{cardinal:J[0],ordinal:J[35]},be:{cardinal:J[5],ordinal:J[36]},bem:{cardinal:J[0]},bez:{cardinal:J[0]},bg:{cardinal:J[0]},bh:{cardinal:J[1]},bn:{cardinal:J[2],ordinal:J[34]},br:{cardinal:J[6]},brx:{cardinal:J[0]},bs:{cardinal:J[7]},ca:{cardinal:J[4],ordinal:J[37]},ce:{cardinal:J[0]},cgg:{cardinal:J[0]},chr:{cardinal:J[0]},ckb:{cardinal:J[0]},cs:{cardinal:J[8]},cy:{cardinal:J[9],ordinal:J[38]},da:{cardinal:J[10]},de:{cardinal:J[4]},dsb:{cardinal:J[11]},dv:{cardinal:J[0]},ee:{cardinal:J[0]},el:{cardinal:J[0]},en:{cardinal:J[4],ordinal:J[39]},eo:{cardinal:J[0]},es:{cardinal:J[0]},et:{cardinal:J[4]},eu:{cardinal:J[0]},fa:{cardinal:J[2]},ff:{cardinal:J[12]},fi:{cardinal:J[4]},fil:{cardinal:J[13],ordinal:J[0]},fo:{cardinal:J[0]},fr:{cardinal:J[12],ordinal:J[0]},fur:{cardinal:J[0]},fy:{cardinal:J[4]},ga:{cardinal:J[14],ordinal:J[0]},gd:{cardinal:J[15],ordinal:J[40]},gl:{cardinal:J[4]},gsw:{cardinal:J[0]},gu:{cardinal:J[2],ordinal:J[41]},guw:{cardinal:J[1]},gv:{cardinal:J[16]},ha:{cardinal:J[0]},haw:{cardinal:J[0]},he:{cardinal:J[17]},hi:{cardinal:J[2],ordinal:J[41]},hr:{cardinal:J[7]},hsb:{cardinal:J[11]},hu:{cardinal:J[0],ordinal:J[42]},hy:{cardinal:J[12],ordinal:J[0]},ia:{cardinal:J[4]},io:{cardinal:J[4]},is:{cardinal:J[18]},it:{cardinal:J[4],ordinal:J[43]},iu:{cardinal:J[19]},iw:{cardinal:J[17]},jgo:{cardinal:J[0]},ji:{cardinal:J[4]},jmc:{cardinal:J[0]},ka:{cardinal:J[0],ordinal:J[44]},kab:{cardinal:J[12]},kaj:{cardinal:J[0]},kcg:{cardinal:J[0]},kk:{cardinal:J[0],ordinal:J[45]},kkj:{cardinal:J[0]},kl:{cardinal:J[0]},kn:{cardinal:J[2]},ks:{cardinal:J[0]},ksb:{cardinal:J[0]},ksh:{cardinal:J[20]},ku:{cardinal:J[0]},kw:{cardinal:J[19]},ky:{cardinal:J[0]},lag:{cardinal:J[21]},lb:{cardinal:J[0]},lg:{cardinal:J[0]},ln:{cardinal:J[1]},lt:{cardinal:J[22]},lv:{cardinal:J[23]},mas:{cardinal:J[0]},mg:{cardinal:J[1]},mgo:{cardinal:J[0]},mk:{cardinal:J[24],ordinal:J[46]},ml:{cardinal:J[0]},mn:{cardinal:J[0]},mo:{cardinal:J[25],ordinal:J[0]},mr:{cardinal:J[2],ordinal:J[47]},mt:{cardinal:J[26]},nah:{cardinal:J[0]},naq:{cardinal:J[19]},nb:{cardinal:J[0]},nd:{cardinal:J[0]},ne:{cardinal:J[0],ordinal:J[48]},nl:{cardinal:J[4]},nn:{cardinal:J[0]},nnh:{cardinal:J[0]},no:{cardinal:J[0]},nr:{cardinal:J[0]},nso:{cardinal:J[1]},ny:{cardinal:J[0]},nyn:{cardinal:J[0]},om:{cardinal:J[0]},or:{cardinal:J[0],ordinal:J[49]},os:{cardinal:J[0]},pa:{cardinal:J[1]},pap:{cardinal:J[0]},pl:{cardinal:J[27]},prg:{cardinal:J[23]},ps:{cardinal:J[0]},pt:{cardinal:J[28]},"pt-PT":{cardinal:J[4]},rm:{cardinal:J[0]},ro:{cardinal:J[25],ordinal:J[0]},rof:{cardinal:J[0]},ru:{cardinal:J[29]},rwk:{cardinal:J[0]},saq:{cardinal:J[0]},sc:{cardinal:J[4],ordinal:J[43]},scn:{cardinal:J[4],ordinal:J[43]},sd:{cardinal:J[0]},sdh:{cardinal:J[0]},se:{cardinal:J[19]},seh:{cardinal:J[0]},sh:{cardinal:J[7]},shi:{cardinal:J[30]},si:{cardinal:J[31]},sk:{cardinal:J[8]},sl:{cardinal:J[32]},sma:{cardinal:J[19]},smi:{cardinal:J[19]},smj:{cardinal:J[19]},smn:{cardinal:J[19]},sms:{cardinal:J[19]},sn:{cardinal:J[0]},so:{cardinal:J[0]},sq:{cardinal:J[0],ordinal:J[50]},sr:{cardinal:J[7]},ss:{cardinal:J[0]},ssy:{cardinal:J[0]},st:{cardinal:J[0]},sv:{cardinal:J[4],ordinal:J[51]},sw:{cardinal:J[4]},syr:{cardinal:J[0]},ta:{cardinal:J[0]},te:{cardinal:J[0]},teo:{cardinal:J[0]},ti:{cardinal:J[1]},tig:{cardinal:J[0]},tk:{cardinal:J[0],ordinal:J[52]},tl:{cardinal:J[13],ordinal:J[0]},tn:{cardinal:J[0]},tr:{cardinal:J[0]},ts:{cardinal:J[0]},tzm:{cardinal:J[33]},ug:{cardinal:J[0]},uk:{cardinal:J[29],ordinal:J[53]},ur:{cardinal:J[4]},uz:{cardinal:J[0]},ve:{cardinal:J[0]},vo:{cardinal:J[0]},vun:{cardinal:J[0]},wa:{cardinal:J[1]},wae:{cardinal:J[0]},xh:{cardinal:J[0]},xog:{cardinal:J[0]},yi:{cardinal:J[4]},zu:{cardinal:J[2]},lo:{ordinal:J[0]},ms:{ordinal:J[0]},vi:{ordinal:J[0]}},Ms=Cs(function(e,t){t=e.exports=function(e,t,r){return n(e,null,t||`en`,r||{},!0)},t.toParts=function(e,t,r){return n(e,null,t||`en`,r||{},!1)};function n(e,t,n,i,a){var o=e.map(function(e){return r(e,t,n,i,a)});return a?o.length===1?o[0]:function(e){for(var t=``,n=0;n<o.length;++n)t+=o[n](e);return t}:function(e){return o.reduce(function(t,n){return t.concat(n(e))},[])}}function r(e,t,r,a,o){if(typeof e==`string`){var s=e;return function(){return s}}var c=e[0],l=e[1];if(t&&e[0]===`#`){c=t[0];var u=t[2],f=(a.number||d.number)([c,`number`],r);return function(e){return f(i(c,e)-u,e)}}var p;l===`plural`||l===`selectordinal`?(p={},Object.keys(e[3]).forEach(function(t){p[t]=n(e[3][t],e,r,a,o)}),e=[e[0],e[1],e[2],p]):e[2]&&typeof e[2]==`object`&&(p={},Object.keys(e[2]).forEach(function(t){p[t]=n(e[2][t],e,r,a,o)}),e=[e[0],e[1],p]);var m=l&&(a[l]||d[l]);if(m){var h=m(e,r);return function(e){return h(i(c,e),e)}}return o?function(e){return String(i(c,e))}:function(e){return i(c,e)}}function i(e,t){if(t&&e in t)return t[e];for(var n=e.split(`.`),r=t,i=0,a=n.length;r&&i<a;++i)r=r[n[i]];return r}function a(e,t){var n=e[2],r=Os.number[n]||Os.parseNumberPattern(n)||Os.number.default;return new Intl.NumberFormat(t,r).format}function o(e,t){var n=e[2],r=Os.duration[n]||Os.duration.default,i=new Intl.NumberFormat(t,r.seconds).format,a=new Intl.NumberFormat(t,r.minutes).format,o=new Intl.NumberFormat(t,r.hours).format,s=/^fi$|^fi-|^da/.test(String(t))?`.`:`:`;return function(e,t){if(e=+e,!isFinite(e))return i(e);var n=~~(e/60/60),r=~~(e/60%60),c=(n?o(Math.abs(n))+s:``)+a(Math.abs(r))+s+i(Math.abs(e%60));return e<0?o(-1).replace(o(1),c):c}}function s(e,t){var n=e[1],r=e[2],i=Os[n][r]||Os.parseDatePattern(r)||Os[n].default;return new Intl.DateTimeFormat(t,i).format}function c(e,t){var n=e[1]===`selectordinal`?`ordinal`:`cardinal`,r=e[2],i=e[3],a;if(Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf(t).length>0)a=new Intl.PluralRules(t,{type:n});else{var o=ks(t,js);a={select:o&&js[o][n]||l}}return function(e,t){return(i[`=`+ +e]||i[a.select(e-r)]||i.other)(t)}}function l(){return`other`}function u(e,t){var n=e[2];return function(e,t){return(n[e]||n.other)(t)}}var d={number:a,ordinal:a,spellout:a,duration:o,date:s,time:s,plural:c,selectordinal:c,select:u};t.types=d});Ms.toParts,Ms.types;var Ns=Cs(function(e,t){var n=`{`,r=`}`,i=`,`,a=`#`,o=`<`,s=`>`,c=`</`,l=`/>`,u=`'`,d=`offset:`,f=[`number`,`date`,`time`,`ordinal`,`duration`,`spellout`],p=[`plural`,`select`,`selectordinal`];t=e.exports=function(e,t){return m({pattern:String(e),index:0,tagsType:t&&t.tagsType||null,tokens:t&&t.tokens||null},``)};function m(e,t){var n=e.pattern,i=n.length,a=[],o=e.index,s=h(e,t);for(s&&a.push(s),s&&e.tokens&&e.tokens.push([`text`,n.slice(o,e.index)]);e.index<i;){if(n[e.index]===r){if(!t)throw C(e);break}if(t&&e.tagsType&&n.slice(e.index,e.index+c.length)===c)break;a.push(v(e)),o=e.index,s=h(e,t),s&&a.push(s),s&&e.tokens&&e.tokens.push([`text`,n.slice(o,e.index)])}return a}function h(e,t){for(var i=e.pattern,s=i.length,c=t===`plural`||t===`selectordinal`,l=!!e.tagsType,d=t===`{style}`,f=``;e.index<s;){var p=i[e.index];if(p===n||p===r||c&&p===a||l&&p===o||d&&g(p.charCodeAt(0)))break;if(p===u)if(p=i[++e.index],p===u)f+=p,++e.index;else if(p===n||p===r||c&&p===a||l&&p===o||d)for(f+=p;++e.index<s;)if(p=i[e.index],p===u&&i[e.index+1]===u)f+=u,++e.index;else if(p===u){++e.index;break}else f+=p;else f+=u;else f+=p,++e.index}return f}function g(e){return e>=9&&e<=13||e===32||e===133||e===160||e===6158||e>=8192&&e<=8205||e===8232||e===8233||e===8239||e===8287||e===8288||e===12288||e===65279}function _(e){for(var t=e.pattern,n=t.length,r=e.index;e.index<n&&g(t.charCodeAt(e.index));)++e.index;r<e.index&&e.tokens&&e.tokens.push([`space`,e.pattern.slice(r,e.index)])}function v(e){var t=e.pattern;if(t[e.index]===a)return e.tokens&&e.tokens.push([`syntax`,a]),++e.index,[a];var o=y(e);if(o)return o;if(t[e.index]!==n)throw C(e,n);e.tokens&&e.tokens.push([`syntax`,n]),++e.index,_(e);var s=b(e);if(!s)throw C(e,`placeholder id`);e.tokens&&e.tokens.push([`id`,s]),_(e);var c=t[e.index];if(c===r)return e.tokens&&e.tokens.push([`syntax`,r]),++e.index,[s];if(c!==i)throw C(e,i+` or `+r);e.tokens&&e.tokens.push([`syntax`,i]),++e.index,_(e);var l=b(e);if(!l)throw C(e,`placeholder type`);if(e.tokens&&e.tokens.push([`type`,l]),_(e),c=t[e.index],c===r){if(e.tokens&&e.tokens.push([`syntax`,r]),l===`plural`||l===`selectordinal`||l===`select`)throw C(e,l+` sub-messages`);return++e.index,[s,l]}if(c!==i)throw C(e,i+` or `+r);e.tokens&&e.tokens.push([`syntax`,i]),++e.index,_(e);var u;if(l===`plural`||l===`selectordinal`){var d=x(e);_(e),u=[s,l,d,ne(e,l)]}else if(l===`select`)u=[s,l,ne(e,l)];else if(f.indexOf(l)>=0)u=[s,l,ee(e)];else{var p=e.index,m=ee(e);_(e),t[e.index]===n&&(e.index=p,m=ne(e,l)),u=[s,l,m]}if(_(e),t[e.index]!==r)throw C(e,r);return e.tokens&&e.tokens.push([`syntax`,r]),++e.index,u}function y(e){var t=e.tagsType;if(!(!t||e.pattern[e.index]!==o)){if(e.pattern.slice(e.index,e.index+c.length)===c)throw C(e,null,`closing tag without matching opening tag`);e.tokens&&e.tokens.push([`syntax`,o]),++e.index;var n=b(e,!0);if(!n)throw C(e,`placeholder id`);if(e.tokens&&e.tokens.push([`id`,n]),_(e),e.pattern.slice(e.index,e.index+l.length)===l)return e.tokens&&e.tokens.push([`syntax`,l]),e.index+=l.length,[n,t];if(e.pattern[e.index]!==s)throw C(e,s);e.tokens&&e.tokens.push([`syntax`,s]),++e.index;var r=m(e,t),i=e.index;if(e.pattern.slice(e.index,e.index+c.length)!==c)throw C(e,c+n+s);e.tokens&&e.tokens.push([`syntax`,c]),e.index+=c.length;var a=b(e,!0);if(a&&e.tokens&&e.tokens.push([`id`,a]),n!==a)throw e.index=i,C(e,c+n+s,c+a+s);if(_(e),e.pattern[e.index]!==s)throw C(e,s);return e.tokens&&e.tokens.push([`syntax`,s]),++e.index,[n,t,{children:r}]}}function b(e,t){for(var c=e.pattern,l=c.length,d=``;e.index<l;){var f=c[e.index];if(f===n||f===r||f===i||f===a||f===u||g(f.charCodeAt(0))||t&&(f===o||f===s||f===`/`))break;d+=f,++e.index}return d}function ee(e){var t=e.index,n=h(e,`{style}`);if(!n)throw C(e,`placeholder style name`);return e.tokens&&e.tokens.push([`style`,e.pattern.slice(t,e.index)]),n}function x(e){var t=e.pattern,n=t.length,r=0;if(t.slice(e.index,e.index+d.length)===d){e.tokens&&e.tokens.push([`offset`,`offset`],[`syntax`,`:`]),e.index+=d.length,_(e);for(var i=e.index;e.index<n&&te(t.charCodeAt(e.index));)++e.index;if(i===e.index)throw C(e,`offset number`);e.tokens&&e.tokens.push([`number`,t.slice(i,e.index)]),r=+t.slice(i,e.index)}return r}function te(e){return e>=48&&e<=57}function ne(e,t){for(var n=e.pattern,i=n.length,a={};e.index<i&&n[e.index]!==r;){var o=b(e);if(!o)throw C(e,`sub-message selector`);e.tokens&&e.tokens.push([`selector`,o]),_(e),a[o]=S(e,t),_(e)}if(!a.other&&p.indexOf(t)>=0)throw C(e,null,null,`"other" sub-message must be specified in `+t);return a}function S(e,t){if(e.pattern[e.index]!==n)throw C(e,n+` to start sub-message`);e.tokens&&e.tokens.push([`syntax`,n]),++e.index;var i=m(e,t);if(e.pattern[e.index]!==r)throw C(e,r+` to end sub-message`);return e.tokens&&e.tokens.push([`syntax`,r]),++e.index,i}function C(e,t,n,r){var i=e.pattern,a=i.slice(0,e.index).split(/\r?\n/),o=e.index,s=a.length,c=a.slice(-1)[0].length;return n||=e.index>=i.length?`end of message pattern`:b(e)||i[e.index],r||=w(t,n),r+=` in `+i.replace(/\r?\n/g,`
`),new T(r,t,n,o,s,c)}function w(e,t){return e?`Expected `+e+` but found `+t:`Unexpected `+t+` found`}function T(e,t,n,r,i,a){Error.call(this,e),this.name=`SyntaxError`,this.message=e,this.expected=t,this.found=n,this.offset=r,this.line=i,this.column=a}T.prototype=Object.create(Error.prototype),t.SyntaxError=T});Ns.SyntaxError;var Ps=RegExp(`^(`+Object.keys(js).join(`|`)+`)\\b`),Fs=new WeakMap;function Is(e,t,n){if(!(this instanceof Is)||Fs.has(this))throw TypeError(`calling MessageFormat constructor without new is invalid`);var r=Ns(e);Fs.set(this,{ast:r,format:Ms(r,t,n&&n.types),locale:Is.supportedLocalesOf(t)[0]||`en`,locales:t,options:n})}var Ls=Is;Object.defineProperties(Is.prototype,{format:{configurable:!0,get:function(){var e=Fs.get(this);if(!e)throw TypeError(`MessageFormat.prototype.format called on value that's not an object initialized as a MessageFormat`);return e.format}},formatToParts:{configurable:!0,writable:!0,value:function(e){var t=Fs.get(this);if(!t)throw TypeError(`MessageFormat.prototype.formatToParts called on value that's not an object initialized as a MessageFormat`);return(t.toParts||=Ms.toParts(t.ast,t.locales,t.options&&t.options.types))(e)}},resolvedOptions:{configurable:!0,writable:!0,value:function(){var e=Fs.get(this);if(!e)throw TypeError(`MessageFormat.prototype.resolvedOptions called on value that's not an object initialized as a MessageFormat`);return{locale:e.locale}}}}),typeof Symbol<`u`&&Object.defineProperty(Is.prototype,Symbol.toStringTag,{value:`Object`}),Object.defineProperties(Is,{supportedLocalesOf:{configurable:!0,writable:!0,value:function(e){return[].concat(Intl.NumberFormat.supportedLocalesOf(e),Intl.DateTimeFormat.supportedLocalesOf(e),Intl.PluralRules?Intl.PluralRules.supportedLocalesOf(e):[],[].concat(e||[]).filter(function(e){return Ps.test(e)})).filter(function(e,t,n){return n.indexOf(e)===t})}}});function Rs(e){return!!(e&&e.default&&typeof e.default==`object`&&Object.keys(e).length===1)}var zs=globalThis.document?.documentElement,Bs=class extends EventTarget{formatNumberOptions={returnIfNaN:``,postProcessors:new Map};formatDateOptions={postProcessors:new Map};#e=!1;#t=``;#n=null;__storage={};__namespacePatternsMap=new Map;__namespaceLoadersCache={};__namespaceLoaderPromisesCache={};get locale(){return this.#e?this.#t||``:zs.lang||``}set locale(e){if(this.#r(e),!this.#e){let t=zs.lang;this._setHtmlLangAttribute(e),this._onLocaleChanged(e,t);return}let t=this.#t;this.#t=e,this.#n===null&&this._setHtmlLangAttribute(e),this._onLocaleChanged(e,t)}get loadingComplete(){return typeof this.__namespaceLoaderPromisesCache[this.locale]==`object`?Promise.all(Object.values(this.__namespaceLoaderPromisesCache[this.locale])):Promise.resolve()}constructor({allowOverridesForExistingNamespaces:e=!1,autoLoadOnLocaleChange:t=!1,showKeyAsFallback:n=!1,fallbackLocale:r=``}={}){super(),this.__allowOverridesForExistingNamespaces=e,this._autoLoadOnLocaleChange=!!t,this._showKeyAsFallback=n,this._fallbackLocale=r;let i=zs.getAttribute(`data-localize-lang`);this.#e=!!i,this.#e&&(this.locale=i,this._setupTranslationToolSupport()),zs.lang||=this.locale||`en-GB`,this._setupHtmlLangAttributeObserver()}addData(e,t,n){if(!this.__allowOverridesForExistingNamespaces&&this._isNamespaceInCache(e,t))throw Error(`Namespace "${t}" has been already added for the locale "${e}".`);this.__storage[e]=this.__storage[e]||{},this.__allowOverridesForExistingNamespaces?this.__storage[e][t]={...this.__storage[e][t],...n}:this.__storage[e][t]=n}setupNamespaceLoader(e,t){this.__namespacePatternsMap.set(e,t)}loadNamespaces(e,{locale:t}={}){return Promise.all(e.map(e=>this.loadNamespace(e,{locale:t})))}loadNamespace(e,{locale:t=this.locale}={locale:this.locale}){let n=typeof e==`object`,r=n?Object.keys(e)[0]:e;return this._isNamespaceInCache(t,r)?Promise.resolve():this._getCachedNamespaceLoaderPromise(t,r)||this._loadNamespaceData(t,e,n,r)}msg(e,t,n={}){let r=n.locale?n.locale:this.locale,i=this._getMessageForKeys(e,r);return i?new Ls(i,r).format(t):``}teardown(){this._teardownHtmlLangAttributeObserver()}reset(){this.__storage={},this.__namespacePatternsMap=new Map,this.__namespaceLoadersCache={},this.__namespaceLoaderPromisesCache={}}setDatePostProcessorForLocale({locale:e,postProcessor:t}){this.formatDateOptions?.postProcessors.set(e,t)}setNumberPostProcessorForLocale({locale:e,postProcessor:t}){this.formatNumberOptions?.postProcessors.set(e,t)}_setupTranslationToolSupport(){this.#n=zs.lang||null}_setHtmlLangAttribute(e){this._teardownHtmlLangAttributeObserver(),zs.lang=e,this._setupHtmlLangAttributeObserver()}_setupHtmlLangAttributeObserver(){this._htmlLangAttributeObserver||=new MutationObserver(e=>{e.forEach(e=>{this.#e?zs.lang===`auto`?(this.#n=null,this._setHtmlLangAttribute(this.locale)):this.#n=document.documentElement.lang:this._onLocaleChanged(document.documentElement.lang,e.oldValue||``)})}),this._htmlLangAttributeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:[`lang`],attributeOldValue:!0})}_teardownHtmlLangAttributeObserver(){this._htmlLangAttributeObserver&&this._htmlLangAttributeObserver.disconnect()}_isNamespaceInCache(e,t){return!!(this.__storage[e]&&this.__storage[e][t])}_getCachedNamespaceLoaderPromise(e,t){return this.__namespaceLoaderPromisesCache[e]?this.__namespaceLoaderPromisesCache[e][t]:null}_loadNamespaceData(e,t,n,r){let i=this._getNamespaceLoader(t,n,r),a=this._getNamespaceLoaderPromise(i,e,r);return this._cacheNamespaceLoaderPromise(e,r,a),a.then(t=>{if(this.__namespaceLoaderPromisesCache[e]&&this.__namespaceLoaderPromisesCache[e][r]===a){let n=Rs(t)?t.default:t;this.addData(e,r,n)}})}_getNamespaceLoader(e,t,n){let r=this.__namespaceLoadersCache[n];if(r||(t?(r=e[n],this.__namespaceLoadersCache[n]=r):(r=this._lookupNamespaceLoader(n),this.__namespaceLoadersCache[n]=r)),!r)throw Error(`Namespace "${n}" was not properly setup.`);return this.__namespaceLoadersCache[n]=r,r}_getNamespaceLoaderPromise(e,t,n,r=this._fallbackLocale){return e(t,n).catch(()=>{let i=this._getLangFromLocale(t);return e(i,n).catch(()=>{if(r)return this._getNamespaceLoaderPromise(e,r,n,``).catch(()=>{let e=this._getLangFromLocale(r);throw Error(`Data for namespace "${n}" and current locale "${t}" or fallback locale "${r}" could not be loaded. Make sure you have data either for locale "${t}" (and/or generic language "${i}") or for fallback "${r}" (and/or "${e}").`)});throw Error(`Data for namespace "${n}" and locale "${t}" could not be loaded. Make sure you have data for locale "${t}" (and/or generic language "${i}").`)})})}_cacheNamespaceLoaderPromise(e,t,n){this.__namespaceLoaderPromisesCache[e]||(this.__namespaceLoaderPromisesCache[e]={}),this.__namespaceLoaderPromisesCache[e][t]=n}_lookupNamespaceLoader(e){for(let[t,n]of this.__namespacePatternsMap){let r=typeof t==`string`&&t===e,i=typeof t==`object`&&t.constructor.name===`RegExp`&&t.test(e);if(r||i)return n}return null}_getLangFromLocale(e){return e.substring(0,2)}_onLocaleChanged(e,t){this.dispatchEvent(new CustomEvent(`__localeChanging`)),e!==t&&(this._autoLoadOnLocaleChange?(this._loadAllMissing(e,t),this.loadingComplete.then(()=>{this.dispatchEvent(new CustomEvent(`localeChanged`,{detail:{newLocale:e,oldLocale:t}}))})):this.dispatchEvent(new CustomEvent(`localeChanged`,{detail:{newLocale:e,oldLocale:t}})))}_loadAllMissing(e,t){let n=this.__storage[t]||{},r=this.__storage[e]||{};Object.keys(n).forEach(t=>{r[t]||this.loadNamespace(t,{locale:e})})}_getMessageForKeys(e,t){if(typeof e==`string`)return this._getMessageForKey(e,t);let n=Array.from(e).reverse(),r,i;for(;n.length;)if(r=n.pop(),i=this._getMessageForKey(r,t),i)return i}_getMessageForKey(e,t){if(!e||e.indexOf(`:`)===-1)throw Error(`Namespace is missing in the key "${e}". The format for keys is "namespace:name".`);let[n,r]=e.split(`:`),i=this.__storage[t],a=i?i[n]:{},o=r.split(`.`).reduce((e,t)=>typeof e==`object`?e[t]:e,a);return String(o||(this._showKeyAsFallback?e:``))}#r(e){if(!e.includes(`-`))throw Error(`
      Locale was set to ${e}.
      Language only locales are not allowed, please use the full language locale e.g. 'en-GB' instead of 'en'.
      See https://github.com/ing-bank/lion/issues/187 for more information.
    `)}get _supportExternalTranslationTools(){return this.#e}set _supportExternalTranslationTools(e){this.#e=e}get _langAttrSetByTranslationTool(){return this.#t}set _langAttrSetByTranslationTool(e){this.#t=e}};function Vs(){if(!mi.has(`@lion/ui::localize::0.x`)){let e=new Bs({autoLoadOnLocaleChange:!0,fallbackLocale:`en-GB`});mi.set(`@lion/ui::localize::0.x`,e)}return mi.get(`@lion/ui::localize::0.x`)}function Hs(){return pi(Vs)}var Us=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),Us(e,t);return!0},Ws=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Gs=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Js(t)}};function Ks(e){this._$AN===void 0?this._$AM=e:(Ws(this),this._$AM=e,Gs(this))}function qs(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)Us(r[e],!1),Ws(r[e]);else r!=null&&(Us(r,!1),Ws(r));else Us(this,e)}var Js=e=>{e.type==l.CHILD&&(e._$AP??=qs,e._$AQ??=Ks)},Ys=class extends i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Gs(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Us(this,e),Ws(this))}setValue(e){if(Jr(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Xs=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},Zs=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise((e=>this.Z=e))}resume(){this.Z?.(),this.Y=this.Z=void 0}},Qs=e=>!Kr(e)&&typeof e.then==`function`,$s=1073741823,ec=t(class extends Ys{constructor(){super(...arguments),this._$Cwt=$s,this._$Cbt=[],this._$CK=new Xs(this),this._$CX=new Zs}render(...e){return e.find((e=>!Qs(e)))??d}update(e,t){let n=this._$Cbt,r=n.length;this._$Cbt=t;let i=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let o=t[e];if(!Qs(o))return this._$Cwt=e,o;e<r&&o===n[e]||(this._$Cwt=$s,r=0,Promise.resolve(o).then((async e=>{for(;a.get();)await a.get();let t=i.deref();if(t!==void 0){let n=t._$Cbt.indexOf(o);n>-1&&n<t._$Cwt&&(t._$Cwt=n,t.setValue(e))}})))}return d}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),tc=L(e=>class extends e{static get localizeNamespaces(){return[]}static get waitForLocalizeNamespaces(){return!0}constructor(){super(),this._localizeManager=Hs(),this.__boundLocalizeOnLocaleChanged=(...e)=>{let t=Array.from(e)[0];this.__localizeOnLocaleChanged(t)},this.__boundLocalizeOnLocaleChanging=()=>{this.__localizeOnLocaleChanging()},this.__localizeStartLoadingNamespaces(),this.localizeNamespacesLoaded&&this.localizeNamespacesLoaded.then(()=>{this.__localizeMessageSync=!0})}async scheduleUpdate(){Object.getPrototypeOf(this).constructor.waitForLocalizeNamespaces&&await this.localizeNamespacesLoaded,super.scheduleUpdate()}connectedCallback(){super.connectedCallback(),this.localizeNamespacesLoaded&&this.localizeNamespacesLoaded.then(()=>this.onLocaleReady()),this._localizeManager.addEventListener(`__localeChanging`,this.__boundLocalizeOnLocaleChanging),this._localizeManager.addEventListener(`localeChanged`,this.__boundLocalizeOnLocaleChanged)}disconnectedCallback(){super.disconnectedCallback(),this._localizeManager.removeEventListener(`__localeChanging`,this.__boundLocalizeOnLocaleChanging),this._localizeManager.removeEventListener(`localeChanged`,this.__boundLocalizeOnLocaleChanged)}msgLit(e,t,n){return this.__localizeMessageSync?this._localizeManager.msg(e,t,n):this.localizeNamespacesLoaded?ec(this.localizeNamespacesLoaded.then(()=>this._localizeManager.msg(e,t,n)),h):``}__getUniqueNamespaces(){let e=[],t=new Set;return Object.getPrototypeOf(this).constructor.localizeNamespaces.forEach(t.add.bind(t)),t.forEach(t=>{e.push(t)}),e}__localizeStartLoadingNamespaces(){this.localizeNamespacesLoaded=this._localizeManager.loadNamespaces(this.__getUniqueNamespaces())}__localizeOnLocaleChanging(){this.__localizeStartLoadingNamespaces()}__localizeOnLocaleChanged(e){this.onLocaleChanged(e.detail.newLocale,e.detail.oldLocale)}onLocaleReady(){this.onLocaleUpdated()}onLocaleChanged(e,t){this.onLocaleUpdated(),this.requestUpdate()}onLocaleUpdated(){}}),nc=`3.0.0`,rc=window.scopedElementsVersions||(window.scopedElementsVersions=[]);rc.includes(nc)||rc.push(nc);var ic=L(e=>class extends e{static scopedElements;static get scopedElementsVersion(){return nc}static __registry;get registry(){return this.constructor.__registry}set registry(e){this.constructor.__registry=e}attachShadow(e){let{scopedElements:t}=this.constructor;if(!this.registry||this.registry===this.constructor.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,`__registry`)){this.registry=new CustomElementRegistry;for(let[e,n]of Object.entries(t??{}))this.registry.define(e,n)}return super.attachShadow({...e,customElements:this.registry,registry:this.registry})}}),ac=L(e=>class extends ic(e){createRenderRoot(){let{shadowRootOptions:e,elementStyles:t}=this.constructor,n=this.attachShadow(e);return this.renderOptions.creationScope=n,f(n,t),this.renderOptions.renderBefore??=n.firstChild,n}});function oc(){return!!(globalThis.ShadowRoot?.prototype.createElement&&globalThis.ShadowRoot?.prototype.importNode)}var sc=L(e=>class extends ac(e){constructor(){super()}createScopedElement(e){return(oc()?this.shadowRoot:document).createElement(e)}defineScopedElement(e,t){let n=this.registry.get(e),r=n&&n!==t;return!oc()&&r&&console.error([`You are trying to re-register the "${e}" custom element with a different class via ScopedElementsMixin.`,`This is only possible with a CustomElementRegistry.`,`Your browser does not support this feature so you will need to load a polyfill for it.`,`Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.`,`e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.`,`For more details you can visit https://open-wc.org/docs/development/scoped-elements/`].join(`
`)),n?this.registry.get(e):this.registry.define(e,t)}attachShadow(e){let{scopedElements:t}=this.constructor;if(!this.registry||this.registry===this.constructor.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,`__registry`)){this.registry=oc()?new CustomElementRegistry:customElements;for(let[e,n]of Object.entries(t??{}))this.defineScopedElement(e,n)}return Element.prototype.attachShadow.call(this,{...e,customElements:this.registry,registry:this.registry})}createRenderRoot(){let{shadowRootOptions:e,elementStyles:t}=this.constructor,n=this.attachShadow(e);return oc()&&(this.renderOptions.creationScope=n),n instanceof ShadowRoot&&(f(n,t),this.renderOptions.renderBefore=this.renderOptions.renderBefore||n.firstChild),n}}),cc=[Node.DOCUMENT_POSITION_PRECEDING,Node.DOCUMENT_POSITION_CONTAINS,Node.DOCUMENT_POSITION_CONTAINS|Node.DOCUMENT_POSITION_PRECEDING];function lc(e,{reverse:t}={}){let n=(e,t)=>{let n=e.compareDocumentPosition(t);return cc.includes(n)?1:-1},r=e.filter(e=>e);return r.sort(n),t&&r.reverse(),r}var uc=class{constructor(e){this.type=`unparseable`,this.viewValue=e}toString(){return JSON.stringify({type:this.type,viewValue:this.viewValue})}},dc=L(e=>class extends e{constructor(){super(),this.name=``,this._parentFormGroup=void 0,this.allowCrossRootRegistration=!1}get name(){return this.__name||``}set name(e){let t=this.name;this.__name=e.toString(),this.requestUpdate(`name`,t)}static get properties(){return{name:{type:String,reflect:!0},allowCrossRootRegistration:{type:Boolean,attribute:`allow-cross-root-registration`}}}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent(`form-element-register`,{detail:{element:this},bubbles:!0,composed:!!this.allowCrossRootRegistration}))}disconnectedCallback(){super.disconnectedCallback(),this.__unregisterFormElement()}__unregisterFormElement(){this._parentFormGroup&&this._parentFormGroup.removeFormElement(this)}}),fc=L(e=>class extends dc(Ur(ii(e))){static get properties(){return{readOnly:{type:Boolean,attribute:`readonly`,reflect:!0},label:String,labelSrOnly:{type:Boolean,attribute:`label-sr-only`,reflect:!0},helpText:{type:String,attribute:`help-text`},modelValue:{attribute:!1},_ariaLabelledNodes:{attribute:!1},_ariaDescribedNodes:{attribute:!1},_repropagationRole:{attribute:!1},_isRepropagationEndpoint:{attribute:!1}}}get label(){return this.__label??(this._labelNode?.textContent||``)}set label(e){let t=this.label;this.__label=e,this.requestUpdate(`label`,t)}get helpText(){return this.__helpText??(this._helpTextNode?.textContent||``)}set helpText(e){let t=this.helpText;this.__helpText=e,this.requestUpdate(`helpText`,t)}get fieldName(){return this.__fieldName||this.label||this.name||``}set fieldName(e){this.__fieldName=e}get slots(){return{...super.slots,label:()=>{let e=document.createElement(`label`);return e.textContent=this.label,e},"help-text":()=>{let e=document.createElement(`div`);return e.textContent=this.helpText,e}}}get _inputNode(){return this.__getDirectSlotChild(`input`)}get _labelNode(){return this.__getDirectSlotChild(`label`)}get _helpTextNode(){return this.__getDirectSlotChild(`help-text`)}get _feedbackNode(){return this.__getDirectSlotChild(`feedback`)}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];constructor(){super(),this.readOnly=!1,this.labelSrOnly=!1,this._inputId=si(this.localName),this._ariaLabelledNodes=[],this._ariaDescribedNodes=[],this._repropagationRole=`child`,this._isRepropagationEndpoint=!1,this.addEventListener(`model-value-changed`,this.__repropagateChildrenValues),this._onLabelClick=this._onLabelClick.bind(this)}connectedCallback(){super.connectedCallback(),this._enhanceLightDomClasses(),this._enhanceLightDomA11y(),this._triggerInitialModelValueChangedEvent(),this._labelNode&&this._labelNode.addEventListener(`click`,this._onLabelClick)}disconnectedCallback(){super.disconnectedCallback(),this._labelNode&&this._labelNode.removeEventListener(`click`,this._onLabelClick)}updated(e){super.updated(e),e.has(`disabled`)&&this._inputNode?.setAttribute(`aria-disabled`,`${!!this.disabled}`),e.has(`_ariaLabelledNodes`)&&this.__reflectAriaAttr(`aria-labelledby`,this._ariaLabelledNodes,this.__reorderAriaLabelledNodes),e.has(`_ariaDescribedNodes`)&&this.__reflectAriaAttr(`aria-describedby`,this._ariaDescribedNodes,this.__reorderAriaDescribedNodes),e.has(`label`)&&this.__label!==void 0&&this._labelNode&&(this._labelNode.textContent=this.label),e.has(`helpText`)&&this.__helpText!==void 0&&this._helpTextNode&&(this._helpTextNode.textContent=this.helpText),e.has(`name`)&&this.dispatchEvent(new CustomEvent(`form-element-name-changed`,{detail:{oldName:e.get(`name`),newName:this.name},bubbles:!0}))}_triggerInitialModelValueChangedEvent(){this._dispatchInitialModelValueChangedEvent()}_enhanceLightDomClasses(){this._inputNode&&this._inputNode.classList.add(`form-control`)}_enhanceLightDomA11y(){let{_inputNode:e,_labelNode:t,_helpTextNode:n,_feedbackNode:r}=this;e&&(e.id=e.id||this._inputId),t&&(t.setAttribute(`for`,this._inputId),this.addToAriaLabelledBy(t,{idPrefix:`label`})),n&&this.addToAriaDescribedBy(n,{idPrefix:`help-text`}),r&&(this.addEventListener(`focusin`,()=>{r.setAttribute(`aria-live`,`polite`)}),this.addEventListener(`focusout`,()=>{r.setAttribute(`aria-live`,`assertive`)}),this.addToAriaDescribedBy(r,{idPrefix:`feedback`})),this._enhanceLightDomA11yForAdditionalSlots()}_enhanceLightDomA11yForAdditionalSlots(e=[`prefix`,`suffix`,`before`,`after`]){e.forEach(e=>{let t=this.__getDirectSlotChild(e);t&&(t.hasAttribute(`data-label`)&&this.addToAriaLabelledBy(t,{idPrefix:e}),t.hasAttribute(`data-description`)&&this.addToAriaDescribedBy(t,{idPrefix:e}))})}__reflectAriaAttr(e,t,n){if(this._inputNode){if(n){let e=t.filter(e=>this.contains(e)),n=t.filter(e=>!this.contains(e)),r=[...lc(e.map(e=>e.assignedSlot||e))],i=[];r.forEach(t=>{e.forEach(e=>{t.name===e.slot&&i.push(e)})}),t=[...i,...n]}let r=t.map(e=>e.id).join(` `);this._inputNode.setAttribute(e,r)}}render(){return m`
        <div class="form-field__group-one">${this._groupOneTemplate()}</div>
        <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
      `}_groupOneTemplate(){return m` ${this._labelTemplate()} ${this._helpTextTemplate()} `}_groupTwoTemplate(){return m` ${this._inputGroupTemplate()} ${this._feedbackTemplate()} `}_labelTemplate(){return m`
        <div class="form-field__label">
          <slot name="label"></slot>
        </div>
      `}_helpTextTemplate(){return m`
        <small class="form-field__help-text">
          <slot name="help-text"></slot>
        </small>
      `}_inputGroupTemplate(){return m`
        <div class="input-group">
          ${this._inputGroupBeforeTemplate()}
          <div class="input-group__container">
            ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
            ${this._inputGroupSuffixTemplate()}
          </div>
          ${this._inputGroupAfterTemplate()}
        </div>
      `}_inputGroupBeforeTemplate(){return m`
        <div class="input-group__before">
          <slot name="before"></slot>
        </div>
      `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(e=>e.slot===`prefix`)?m`
            <div class="input-group__prefix">
              <slot name="prefix"></slot>
            </div>
          `:h}_inputGroupInputTemplate(){return m`
        <div class="input-group__input">
          <slot name="input"></slot>
        </div>
      `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(e=>e.slot===`suffix`)?m`
            <div class="input-group__suffix">
              <slot name="suffix"></slot>
            </div>
          `:h}_inputGroupAfterTemplate(){return m`
        <div class="input-group__after">
          <slot name="after"></slot>
        </div>
      `}_feedbackTemplate(){return m`
        <div class="form-field__feedback">
          <slot name="feedback"></slot>
        </div>
      `}_isEmpty(e=this.modelValue){let t=e;return this.modelValue instanceof uc&&(t=this.modelValue.viewValue),typeof t==`object`&&t&&!(t instanceof Date)?!Object.keys(t).length:!t&&!(typeof t==`number`&&(t===0||Number.isNaN(t)))&&!(typeof t==`boolean`&&t===!1)}static get styles(){return[_`
          /**********************
            {block} .form-field
           ********************/

          :host {
            display: block;
          }

          :host([hidden]) {
            display: none;
          }

          :host([disabled]) {
            pointer-events: none;
          }

          :host([disabled]) .form-field__label ::slotted(*),
          :host([disabled]) .form-field__help-text ::slotted(*) {
            color: var(--disabled-text-color, #767676);
          }

          :host([label-sr-only]) .form-field__label {
            position: absolute;
            top: 0;
            width: 1px;
            height: 1px;
            overflow: hidden;
            clip-path: inset(100%);
            clip: rect(1px, 1px, 1px, 1px);
            white-space: nowrap;
            border: 0;
            margin: 0;
            padding: 0;
          }

          /***********************
            {block} .input-group
           *********************/

          .input-group__container {
            display: flex;
          }

          .input-group__input {
            flex: 1;
            display: flex;
          }

          /***** {state} :disabled *****/
          :host([disabled]) .input-group ::slotted([slot='input']) {
            color: var(--disabled-text-color, #767676);
          }

          /***********************
            {block} .form-control
           **********************/

          .input-group__container > .input-group__input ::slotted(.form-control) {
            flex: 1 1 auto;
            margin: 0; /* remove input margin in Safari */
            font-size: 100%; /* normalize default input font-size */
          }
        `]}_getAriaDescriptionElements(){return[this._helpTextNode,this._feedbackNode]}addToAriaLabelledBy(e,{idPrefix:t=``,reorder:n=!0}={}){e.id=e.id||`${t}-${this._inputId}`,this._ariaLabelledNodes.includes(e)||(this._ariaLabelledNodes=[...this._ariaLabelledNodes,e],this.__reorderAriaLabelledNodes=!!n)}removeFromAriaLabelledBy(e){this._ariaLabelledNodes.includes(e)&&(this._ariaLabelledNodes.splice(this._ariaLabelledNodes.indexOf(e),1),this._ariaLabelledNodes=[...this._ariaLabelledNodes],this.__reorderAriaLabelledNodes=!1)}addToAriaDescribedBy(e,{idPrefix:t=``,reorder:n=!0}={}){e.id=e.id||`${t}-${this._inputId}`,this._ariaDescribedNodes.includes(e)||(this._ariaDescribedNodes=[...this._ariaDescribedNodes,e],this.__reorderAriaDescribedNodes=!!n)}removeFromAriaDescribedBy(e){this._ariaDescribedNodes.includes(e)&&(this._ariaDescribedNodes.splice(this._ariaDescribedNodes.indexOf(e),1),this._ariaDescribedNodes=[...this._ariaDescribedNodes],this.__reorderAriaLabelledNodes=!1)}__getDirectSlotChild(e){return Array.from(this.children).find(t=>t.slot===e)}_dispatchInitialModelValueChangedEvent(){this._repropagationRole!==`child`&&(this.__repropagateChildrenInitialized=!0,this.dispatchEvent(new CustomEvent(`model-value-changed`,{bubbles:!0,detail:{formPath:[this],initialize:!0,isTriggeredByUser:!1}})))}_onBeforeRepropagateChildrenValues(e){}__repropagateChildrenValues(e){this._onBeforeRepropagateChildrenValues(e);let t=e.detail&&e.detail.element||e.target,n=this._isRepropagationEndpoint||this._repropagationRole===`choice-group`;if(t===this)return;e.stopImmediatePropagation();let r=this._repropagationRole!==`child`&&!this.__repropagateChildrenInitialized,i=e.detail&&e.detail.initialize;if(r||i||!this._repropagationCondition(t))return;let a=[];n||(a=e.detail&&e.detail.formPath||[t]);let o=[...a,this];this.dispatchEvent(new CustomEvent(`model-value-changed`,{bubbles:!0,detail:{formPath:o,isTriggeredByUser:!!e.detail?.isTriggeredByUser}}))}_repropagationCondition(e){return!!e}_onLabelClick(){}}),pc=class{constructor(){this.__running=!1,this.__queue=[]}add(e){this.__queue.push(e),this.__running||(this.complete=new Promise(e=>{this.__callComplete=e}),this.__run())}async __run(){this.__running=!0,await this.__queue[0](),this.__queue.shift(),this.__queue.length>0?this.__run():(this.__running=!1,this.__callComplete&&this.__callComplete())}};function mc(e){return e.charAt(0).toUpperCase()+e.slice(1)}var hc=L(e=>class extends e{constructor(){super(),this.__SyncUpdatableNamespace={}}firstUpdated(e){super.firstUpdated(e),this.__syncUpdatableInitialize()}connectedCallback(){super.connectedCallback(),this.__SyncUpdatableNamespace.connected=!0}disconnectedCallback(){super.disconnectedCallback(),this.__SyncUpdatableNamespace.connected=!1}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];static __syncUpdatableHasChanged(e,t,n){let r=this.elementProperties;return r.get(e)&&r.get(e).hasChanged?r.get(e).hasChanged(t,n):t!==n}__syncUpdatableInitialize(){let e=this.__SyncUpdatableNamespace,t=this.constructor;e.initialized=!0,e.queue&&Array.from(e.queue).forEach(e=>{t.__syncUpdatableHasChanged(e,this[e],void 0)&&this.updateSync(e,void 0)})}requestUpdate(e,t,n){if(super.requestUpdate(e,t,n),e===void 0)return;this.__SyncUpdatableNamespace=this.__SyncUpdatableNamespace||{};let r=this.__SyncUpdatableNamespace,i=this.constructor;r.initialized?i.__syncUpdatableHasChanged(e,this[e],t)&&this.updateSync(e,t):(r.queue=r.queue||new Set,r.queue.add(e))}updateSync(e,t){}}),gc=e=>{switch(e){case`bg-BG`:return R(()=>import(`./bg-BG-DnVjRYqE.js`),__vite__mapDeps([0,1]),import.meta.url);case`bg`:return R(()=>import(`./bg-IqOjZrqY.js`),__vite__mapDeps([2,1]),import.meta.url);case`cs-CZ`:return R(()=>import(`./cs-CZ-BmViElvu.js`),__vite__mapDeps([3,4]),import.meta.url);case`cs`:return R(()=>import(`./cs-DeWzxCvI.js`),__vite__mapDeps([5,4]),import.meta.url);case`de-DE`:return R(()=>import(`./de-DE-CgOonbYS.js`),__vite__mapDeps([6,7]),import.meta.url);case`de`:return R(()=>import(`./de-DRxhYBlu.js`),__vite__mapDeps([8,7]),import.meta.url);case`en-AU`:return R(()=>import(`./en-AU-Cpovt45U.js`),__vite__mapDeps([9,10]),import.meta.url);case`en-GB`:return R(()=>import(`./en-GB-DqqBxd4Q.js`),__vite__mapDeps([11,10]),import.meta.url);case`en-US`:return R(()=>import(`./en-US-Cdu42gwa.js`),__vite__mapDeps([12,10]),import.meta.url);case`en-PH`:case`en`:return R(()=>import(`./en-slJbruSe.js`),__vite__mapDeps([13,10]),import.meta.url);case`es-ES`:return R(()=>import(`./es-ES-CmhUBtrf.js`),__vite__mapDeps([14,15]),import.meta.url);case`es`:return R(()=>import(`./es-Buf35OkP.js`),__vite__mapDeps([16,15]),import.meta.url);case`fr-FR`:return R(()=>import(`./fr-FR-BMvu4Gmu.js`),__vite__mapDeps([17,18]),import.meta.url);case`fr-BE`:return R(()=>import(`./fr-BE-CEvpKIC1.js`),__vite__mapDeps([19,18]),import.meta.url);case`fr`:return R(()=>import(`./fr-BGPE6HCB.js`),__vite__mapDeps([20,18]),import.meta.url);case`hu-HU`:return R(()=>import(`./hu-HU-U2lC-ajV.js`),__vite__mapDeps([21,22]),import.meta.url);case`hu`:return R(()=>import(`./hu-DfbMkeAh.js`),__vite__mapDeps([23,22]),import.meta.url);case`it-IT`:return R(()=>import(`./it-IT-D_JjaRHX.js`),__vite__mapDeps([24,25]),import.meta.url);case`it`:return R(()=>import(`./it-Cp8AIejG.js`),__vite__mapDeps([26,25]),import.meta.url);case`nl-BE`:return R(()=>import(`./nl-BE-B87OiBua.js`),__vite__mapDeps([27,28]),import.meta.url);case`nl-NL`:return R(()=>import(`./nl-NL-CHMyMcji.js`),__vite__mapDeps([29,28]),import.meta.url);case`nl`:return R(()=>import(`./nl-BR1vAE3X.js`),__vite__mapDeps([30,28]),import.meta.url);case`pl-PL`:return R(()=>import(`./pl-PL-BSu6QYBE.js`),__vite__mapDeps([31,32]),import.meta.url);case`pl`:return R(()=>import(`./pl-r0wtefEn.js`),__vite__mapDeps([33,32]),import.meta.url);case`ro-RO`:return R(()=>import(`./ro-RO-Cgj-h3KE.js`),__vite__mapDeps([34,35]),import.meta.url);case`ro`:return R(()=>import(`./ro-DhfWASix.js`),__vite__mapDeps([36,35]),import.meta.url);case`ru-RU`:return R(()=>import(`./ru-RU-Ds2knHxA.js`),__vite__mapDeps([37,38]),import.meta.url);case`ru`:return R(()=>import(`./ru-CzPsFw36.js`),__vite__mapDeps([39,38]),import.meta.url);case`sk-SK`:return R(()=>import(`./sk-SK-C_9mHuZ1.js`),__vite__mapDeps([40,41]),import.meta.url);case`sk`:return R(()=>import(`./sk-CKTzJEwH.js`),__vite__mapDeps([42,41]),import.meta.url);case`tr-TR`:return R(()=>import(`./tr-TR-NFGEUoaC.js`),__vite__mapDeps([43,44]),import.meta.url);case`tr`:return R(()=>import(`./tr-CmuVwvcH.js`),__vite__mapDeps([45,44]),import.meta.url);case`uk-UA`:return R(()=>import(`./uk-UA-CXb2OQ8x.js`),__vite__mapDeps([46,47]),import.meta.url);case`uk`:return R(()=>import(`./uk-IytIKkJy.js`),__vite__mapDeps([48,47]),import.meta.url);case`zh-CN`:case`zh`:return R(()=>import(`./zh-B_yWZ1bF.js`),[],import.meta.url);default:return R(()=>import(`./en-slJbruSe.js`),__vite__mapDeps([13,10]),import.meta.url)}},_c=e=>`${e[0].toUpperCase()}${e.slice(1)}`,vc=class extends tc(g){static get properties(){return{feedbackData:{attribute:!1}}}static localizeNamespaces=[{"lion-form-core":gc},...super.localizeNamespaces];static get styles(){return[_`
        .validation-feedback__type {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(100%);
          clip: rect(1px, 1px, 1px, 1px);
          white-space: nowrap;
          border: 0;
          margin: 0;
          padding: 0;
        }
      `]}constructor(){super(),this.feedbackData=void 0}_messageTemplate({message:e}){return e}updated(e){super.updated(e),this.feedbackData&&this.feedbackData[0]?(this.setAttribute(`type`,this.feedbackData[0].type),this.currentType=this.feedbackData[0].type):this.currentType!==`success`&&this.removeAttribute(`type`)}render(){return m`
      ${this.feedbackData&&this.feedbackData.map(({message:e,type:t,validator:n})=>m`
          <span class="validation-feedback__type">
            ${e&&t?this._localizeManager.msg(`lion-form-core:validation${_c(t)}`):h}
          </span>
          ${this._messageTemplate({message:e,type:t,validator:n})}
        `)}
    `}},yc=class extends EventTarget{constructor(e,t){super(),this.__param=e,this.__config=t||{},this.type=t?.type||`error`}static _$isValidator$=!0;static validatorName=``;static async=!1;execute(e,t,n){if(!this.constructor.validatorName)throw Error(`A validator needs to have a name! Please set it via "static get validatorName() { return 'IsCat'; }"`);return!0}set param(e){this.__param=e,this.dispatchEvent(new Event(`param-changed`))}get param(){return this.__param}set config(e){this.__config=e,this.dispatchEvent(new Event(`config-changed`))}get config(){return this.__config}async _getMessage(e){let t=this.constructor,n={name:t.validatorName,type:this.type,params:this.param,config:this.config,...e};if(this.config.getMessage){if(typeof this.config.getMessage==`function`)return this.config.getMessage(n);throw Error(`You must provide a value for getMessage of type 'function', you provided a value of type: ${typeof this.config.getMessage}`)}return t.getMessage(n)}static async getMessage(e){return`Please configure an error message for "${this.name}" by overriding "static async getMessage()"`}onFormControlConnect(e){}onFormControlDisconnect(e){}abortExecution(){}};function bc(e=[],t=[]){return e.filter(e=>!t.includes(e)).concat(t.filter(t=>!e.includes(t)))}function xc(e){return e instanceof uc?e.viewValue:e}var Sc=L(e=>class extends fc(hc(Ur(ii(sc(e))))){static get scopedElements(){return{...super.scopedElements,"lion-validation-feedback":vc}}static get properties(){return{validators:{attribute:!1},hasFeedbackFor:{attribute:!1},shouldShowFeedbackFor:{attribute:!1},showsFeedbackFor:{type:Array,attribute:`shows-feedback-for`,reflect:!0,converter:{fromAttribute:e=>e.split(`,`),toAttribute:e=>e.join(`,`)}},validationStates:{attribute:!1},isPending:{type:Boolean,attribute:`is-pending`,reflect:!0},defaultValidators:{attribute:!1},_visibleMessagesAmount:{attribute:!1},__childModelValueChanged:{attribute:!1}}}static get validationTypes(){return[`error`]}get operationMode(){return`enter`}get slots(){return{...super.slots,feedback:()=>{let e=this.createScopedElement(`lion-validation-feedback`);return e.setAttribute(`data-tag-name`,`lion-validation-feedback`),e}}}get _allValidators(){return[...this.validators,...this.defaultValidators]}constructor(){super(),this.hasFeedbackFor=[],this.showsFeedbackFor=[],this.shouldShowFeedbackFor=[],this.validationStates={},this.isPending=!1,this.validators=[],this.defaultValidators=[],this._visibleMessagesAmount=1,this.__syncValidationResult=[],this.__asyncValidationResult=[],this.__validationResult=[],this.__prevValidationResult=[],this.__prevShownValidationResult=[],this.__childModelValueChanged=!1,this._onValidatorUpdated=this._onValidatorUpdated.bind(this),this._updateFeedbackComponent=this._updateFeedbackComponent.bind(this)}connectedCallback(){super.connectedCallback(),Hs().addEventListener(`localeChanged`,this._updateFeedbackComponent)}disconnectedCallback(){super.disconnectedCallback(),Hs().removeEventListener(`localeChanged`,this._updateFeedbackComponent)}firstUpdated(e){super.firstUpdated(e),this.__isValidateInitialized=!0,this.validate(),this._repropagationRole!==`child`&&this.addEventListener(`model-value-changed`,()=>{this.__childModelValueChanged=!0})}updateSync(e,t){if(super.updateSync(e,t),e===`validators`?(this.__setupValidators(),this.validate({clearCurrentResult:!0})):e===`modelValue`&&this.validate({clearCurrentResult:!0}),[`touched`,`dirty`,`prefilled`,`focused`,`submitted`,`hasFeedbackFor`,`filled`].includes(e)&&this._updateShouldShowFeedbackFor(),e===`showsFeedbackFor`){this._inputNode&&this._inputNode.setAttribute(`aria-invalid`,`${this._hasFeedbackVisibleFor(`error`)}`);let e=bc(this.showsFeedbackFor,t);e.length>0&&this.dispatchEvent(new Event(`showsFeedbackForChanged`,{bubbles:!0})),e.forEach(e=>{this.dispatchEvent(new Event(`showsFeedbackFor${mc(e)}Changed`,{bubbles:!0}))})}e===`shouldShowFeedbackFor`&&bc(this.shouldShowFeedbackFor,t).length>0&&this.dispatchEvent(new Event(`shouldShowFeedbackForChanged`,{bubbles:!0}))}async validate({clearCurrentResult:e=!1}={}){if(this.validateComplete=new Promise(e=>{this.__validateCompleteResolve=e}),this.disabled||this.readOnly){this.__clearValidationResults(),this.__finishValidationPass(),this._updateFeedbackComponent();return}this.__isValidateInitialized&&(this.__prevValidationResult=this.__validationResult,e&&this.__clearValidationResults(),await this.__executeValidators())}#e(e){let t=e;for(;t;){if(t.constructor.validatorName===`Required`)return!0;t=Object.getPrototypeOf(t)}return!1}async __executeValidators(){let e=xc(this.modelValue),t=this.__isEmpty(e);if(this.__syncValidationResult=[],t){let e=!this._isFormOrFieldset,t=this._allValidators.find(e=>e.constructor?.validatorName===`Required`);if(t&&(this.__syncValidationResult=[{validator:t,outcome:!0}]),e){this.__finishValidationPass({syncValidationResult:this.__syncValidationResult});return}}let n=[],r=[],i=[];for(let e of this._allValidators)e?.executeOnResults?n.push(e):this.#e(e)||(e.constructor.async?i.push(e):r.push(e));let a=!!i.length;this.__syncValidationResult=[...this.__syncValidationResult,...this.__executeSyncValidators(r,e)],this.__finishValidationPass({syncValidationResult:this.__syncValidationResult,metaValidators:n}),a?(this.isPending=!0,this.__asyncValidationResult=await this.__executeAsyncValidators(i,e),this.isPending=!1,this.__finishValidationPass({syncValidationResult:this.__syncValidationResult,asyncValidationResult:this.__asyncValidationResult,metaValidators:n}),this.__validateCompleteResolve?.(!0)):this.__validateCompleteResolve?.(!0)}__executeSyncValidators(e,t){return e.map(e=>({validator:e,outcome:e.execute(t,e.param,{node:this})})).filter(e=>!!e.outcome)}async __executeAsyncValidators(e,t){let n=e.map(e=>e.execute(t,e.param,{node:this})),r=await Promise.all(n);return r.map((t,n)=>({validator:e[n],outcome:r[n]})).filter(e=>!!e.outcome)}__executeMetaValidators(e,t){return t.length?this._isEmpty(this.modelValue)?(this.__prevShownValidationResult=[],[]):t.map(t=>({validator:t,outcome:t.executeOnResults({regularValidationResult:e.map(e=>e.validator),prevValidationResult:this.__prevValidationResult.map(e=>e.validator),prevShownValidationResult:this.__prevShownValidationResult.map(e=>e.validator)})})).filter(e=>!!e.outcome):[]}__finishValidationPass({syncValidationResult:e=[],asyncValidationResult:t=[],metaValidators:n=[]}={}){let r=[...e,...t],i=this.__executeMetaValidators(r,n);this.__validationResult=[...i,...r];let a=this.constructor.validationTypes.reduce((e,t)=>({...e,[t]:{}}),{});for(let{validator:e,outcome:t}of this.__validationResult){a[e.type]||(a[e.type]={});let n=e.constructor;a[e.type][n.validatorName]=t}this.validationStates=a,this.hasFeedbackFor=[...new Set(this.__validationResult.map(({validator:e})=>e.type))],this.dispatchEvent(new Event(`validate-performed`,{bubbles:!0}))}__clearValidationResults(){this.__syncValidationResult=[],this.__asyncValidationResult=[]}_onValidatorUpdated(e){(e.type===`param-changed`||e.type===`config-changed`)&&this.validate()}__setupValidators(){let e=[`param-changed`,`config-changed`];for(let t of this.__prevValidators||[]){for(let n of e)t.removeEventListener?.(n,this._onValidatorUpdated);t.onFormControlDisconnect(this)}for(let t of this._allValidators){if(t.constructor._$isValidator$===void 0){let e=`Validators array only accepts class instances of Validator. Type "${Array.isArray(t)?`array`:typeof t}" found. This may be caused by having multiple installations of "@lion/ui/form-core.js".`;throw console.error(e,this),Error(e)}let n=this.constructor,r=t.constructor;if(n.validationTypes.indexOf(t.type)===-1){let e=`This component does not support the validator type "${t.type}" used in "${r.validatorName}". You may change your validators type or add it to the components "static get validationTypes() {}".`;throw console.error(e,this),Error(e)}for(let n of e)t.addEventListener?.(n,e=>{this._onValidatorUpdated(e,{validator:t})});t.onFormControlConnect(this)}this.__prevValidators=this._allValidators}__isEmpty(e){return typeof this._isEmpty==`function`?this._isEmpty(e):this.modelValue===null||this.modelValue===void 0||this.modelValue===``}async __getFeedbackMessages(e){let t=await this.fieldName;return Promise.all(e.map(async({validator:e,outcome:n})=>(e.config.fieldName&&(t=await e.config.fieldName),{message:await e._getMessage({modelValue:this.modelValue,formControl:this,fieldName:t,outcome:n}),type:e.type,validator:e,visibilityDuration:e.config?.visibilityDuration||3e3})))}_updateFeedbackComponent(){window.clearTimeout(this.removeMessage);let{_feedbackNode:e}=this;e&&(this.__feedbackQueue||=new pc,this.showsFeedbackFor.length>0?this.__feedbackQueue.add(async()=>{let t=this._prioritizeAndFilterFeedback({validationResult:this.__validationResult.map(e=>e.validator)});this.__prioritizedResult=t.map(e=>this.__validationResult.find(t=>e===t.validator)).filter(Boolean),this.__prioritizedResult.length>0&&(this.__prevShownValidationResult=this.__prioritizedResult);let n=await this.__getFeedbackMessages(this.__prioritizedResult);e.feedbackData=n||[],n?.[0]&&n[0].type===`success`&&n[0].visibilityDuration!==1/0&&(this.removeMessage=window.setTimeout(()=>{e.removeAttribute(`type`),e.feedbackData=[]},n[0].visibilityDuration))}):this.__feedbackQueue.add(async()=>{e.feedbackData=[]}),this.feedbackComplete=this.__feedbackQueue.complete)}_showFeedbackConditionFor(e,t){return!0}get _feedbackConditionMeta(){return{modelValue:this.modelValue,el:this}}feedbackCondition(e,t=this._feedbackConditionMeta,n=this._showFeedbackConditionFor.bind(this)){return n(e,t)}_hasFeedbackVisibleFor(e){return this.hasFeedbackFor?.includes(e)&&this.shouldShowFeedbackFor?.includes(e)}updated(e){if(super.updated(e),e.has(`shouldShowFeedbackFor`)||e.has(`hasFeedbackFor`)){let e=this.constructor;this.showsFeedbackFor=e.validationTypes.map(e=>this._hasFeedbackVisibleFor(e)?e:void 0).filter(Boolean),this._updateFeedbackComponent()}if(e.has(`__childModelValueChanged`)&&this.__childModelValueChanged&&(this.validate({clearCurrentResult:!0}),this.__childModelValueChanged=!1),e.has(`validationStates`)){let t=e.get(`validationStates`);t&&Object.entries(this.validationStates).forEach(([e,n])=>{t[e]&&JSON.stringify(n)!==JSON.stringify(t[e])&&this.dispatchEvent(new CustomEvent(`${e}StateChanged`,{detail:n}))})}}_updateShouldShowFeedbackFor(){let e=this.constructor.validationTypes.map(e=>this.feedbackCondition(e,this._feedbackConditionMeta,this._showFeedbackConditionFor.bind(this))?e:void 0).filter(Boolean);JSON.stringify(this.shouldShowFeedbackFor)!==JSON.stringify(e)&&(this.shouldShowFeedbackFor=e)}_prioritizeAndFilterFeedback({validationResult:e}){let t=this.constructor.validationTypes;return e.filter(e=>this.feedbackCondition(e.type,this._feedbackConditionMeta,this._showFeedbackConditionFor.bind(this))).sort((e,n)=>t.indexOf(e.type)-t.indexOf(n.type)).slice(0,this._visibleMessagesAmount)}}),Cc=L(e=>class extends Sc(fc(e)){static get properties(){return{formattedValue:{attribute:!1},serializedValue:{attribute:!1},formatOptions:{attribute:!1}}}#e={didFormatterOutputSyncToView:!1,didFormatterRun:!1};requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`modelValue`&&this.modelValue!==t&&this._onModelValueChanged({modelValue:this.modelValue},{modelValue:t}),e===`serializedValue`&&this.serializedValue!==t&&this._calculateValues({source:`serialized`}),e===`formattedValue`&&this.formattedValue!==t&&this._calculateValues({source:`formatted`})}get value(){return this._inputNode?.value||this.__value||``}set value(e){this._inputNode?(this._inputNode.value=e,this.__value=void 0):this.__value=e}preprocessor(e,t){}parser(e,t){return e}formatter(e,t){return e}serializer(e){return e===void 0?``:e}deserializer(e){return e===void 0?``:e}_calculateValues({source:e}={source:null}){this.__preventRecursiveTrigger||(this.__preventRecursiveTrigger=!0,e!==`model`&&(e===`serialized`?this.modelValue=this.deserializer(this.serializedValue):e===`formatted`&&(this.modelValue=this._callParser())),e!==`formatted`&&(this.formattedValue=this._callFormatter()),e!==`serialized`&&(this.serializedValue=this.serializer(this.modelValue)),this._reflectBackFormattedValueToUser(),this.__preventRecursiveTrigger=!1,this.__prevViewValue=this.value)}_callParser(e=this.formattedValue){if(e===``)return``;if(typeof e!=`string`)return;let t=this.parser(e,{...this.formatOptions,mode:this.#t(),viewValueStates:this.#n()});return t===void 0?new uc(e):t}_callFormatter(){return this.#e.didFormatterRun=!1,this._isHandlingUserInput&&this.hasFeedbackFor?.includes(`error`)&&this._inputNode?this.value:this.modelValue instanceof uc?this.modelValue.viewValue:(this.#e.didFormatterRun=!0,this.formatter(this.modelValue,{...this.formatOptions,mode:this.#t(),viewValueStates:this.#n()}))}_onModelValueChanged(...e){this._calculateValues({source:`model`}),this._dispatchModelValueChangedEvent(...e)}_dispatchModelValueChangedEvent(...e){this.dispatchEvent(new CustomEvent(`model-value-changed`,{bubbles:!0,detail:{formPath:[this],isTriggeredByUser:!!this._isHandlingUserInput}}))}_syncValueUpwards(){this.__isHandlingComposition||this.__handlePreprocessor();let e=this.formattedValue;this.modelValue=this._callParser(this.value),e===this.formattedValue&&this.__prevViewValue!==this.value&&this._calculateValues()}__handlePreprocessor(){let e=this.value.length;this._inputNode&&`selectionStart`in this._inputNode&&this._inputNode?.type!==`range`&&(e=this._inputNode.selectionStart);let t=this.preprocessor(this.value,{...this.formatOptions,currentCaretIndex:e,prevViewValue:this.__prevViewValue});if(t!==void 0){if(typeof t==`string`)this.value=t;else if(typeof t==`object`){let{viewValue:e,caretIndex:n}=t;this.value=e,n&&this._inputNode&&`selectionStart`in this._inputNode&&(this._inputNode.selectionStart=n,this._inputNode.selectionEnd=n)}}}_reflectBackFormattedValueToUser(){this._reflectBackOn()&&(this.value=this.formattedValue===void 0?``:this.formattedValue,this.#e.didFormatterOutputSyncToView=!!this.formattedValue&&this.#e.didFormatterRun)}_reflectBackOn(){return!this._isHandlingUserInput}_proxyInputEvent(){this.dispatchEvent(new Event(`user-input-changed`,{bubbles:!0}))}_onUserInputChanged(){this._isHandlingUserInput=!0,this._syncValueUpwards(),this._isHandlingUserInput=!1}__onCompositionEvent({type:e}){e===`compositionstart`?this.__isHandlingComposition=!0:e===`compositionend`&&(this.__isHandlingComposition=!1,this._syncValueUpwards())}constructor(){super(),this.formatOn=`change`,this.formatOptions={mode:`auto`},this.formattedValue=void 0,this.serializedValue=void 0,this._isPasting=!1,this._isHandlingUserInput=!1,this.__prevViewValue=``,this.__onCompositionEvent=this.__onCompositionEvent.bind(this),this.addEventListener(`user-input-changed`,this._onUserInputChanged),this.addEventListener(`paste`,this.__onPaste),this._reflectBackFormattedValueToUser=this._reflectBackFormattedValueToUser.bind(this),this._reflectBackFormattedValueDebounced=()=>{setTimeout(this._reflectBackFormattedValueToUser)}}__onPaste(){this._isPasting=!0,setTimeout(()=>{this._isPasting=!1})}connectedCallback(){super.connectedCallback(),this.modelValue===void 0&&this._syncValueUpwards(),this.__prevViewValue=this.value,this._reflectBackFormattedValueToUser(),this._inputNode&&(this._inputNode.addEventListener(this.formatOn,this._reflectBackFormattedValueDebounced),this._inputNode.addEventListener(`input`,this._proxyInputEvent),this._inputNode.addEventListener(`compositionstart`,this.__onCompositionEvent),this._inputNode.addEventListener(`compositionend`,this.__onCompositionEvent))}disconnectedCallback(){super.disconnectedCallback(),this._inputNode&&(this._inputNode.removeEventListener(`input`,this._proxyInputEvent),this._inputNode.removeEventListener(this.formatOn,this._reflectBackFormattedValueDebounced),this._inputNode.removeEventListener(`compositionstart`,this.__onCompositionEvent),this._inputNode.removeEventListener(`compositionend`,this.__onCompositionEvent))}#t(){return this._isPasting?`pasted`:this._isHandlingUserInput&&this.__prevViewValue?`user-edited`:`auto`}#n(){let e=[];return this.#e.didFormatterOutputSyncToView&&e.push(`formatted`),e}}),wc=L(e=>class extends fc(e){static get properties(){return{touched:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},filled:{type:Boolean,reflect:!0},prefilled:{attribute:!1},submitted:{attribute:!1}}}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`touched`&&this.touched!==t&&this._onTouchedChanged(),e===`modelValue`&&(this.filled=!this._isEmpty()),e===`dirty`&&this.dirty!==t&&this._onDirtyChanged()}constructor(){super(),this.touched=!1,this.dirty=!1,this.prefilled=!1,this.filled=!1,this._leaveEvent=`blur`,this._valueChangedEvent=`model-value-changed`,this._iStateOnLeave=this._iStateOnLeave.bind(this),this._iStateOnValueChange=this._iStateOnValueChange.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(this._leaveEvent,this._iStateOnLeave),this.addEventListener(this._valueChangedEvent,this._iStateOnValueChange),this.initInteractionState()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(this._leaveEvent,this._iStateOnLeave),this.removeEventListener(this._valueChangedEvent,this._iStateOnValueChange)}initInteractionState(){this.dirty=!1,this.prefilled=!this._isEmpty()}_iStateOnLeave(){this.touched=!0,this.prefilled=!this._isEmpty()}_iStateOnValueChange(){this.dirty=!0}resetInteractionState(){this.touched=!1,this.submitted=!1,this.dirty=!1,this.prefilled=!this._isEmpty()}_onTouchedChanged(){this.dispatchEvent(new Event(`touched-changed`,{bubbles:!0,composed:!0}))}_onDirtyChanged(){this.dispatchEvent(new Event(`dirty-changed`,{bubbles:!0,composed:!0}))}_showFeedbackConditionFor(e,t){return t.touched&&t.dirty||t.prefilled||t.submitted}get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,submitted:this.submitted,touched:this.touched,dirty:this.dirty,filled:this.filled,prefilled:this.prefilled}}}),Tc=class extends fc(wc(Ss(Cc(Sc(ii(g)))))){firstUpdated(e){super.firstUpdated(e),this._initialModelValue=this.modelValue}connectedCallback(){super.connectedCallback(),this._onChange=this._onChange.bind(this),this._inputNode.addEventListener(`change`,this._onChange),this.classList.add(`form-field`)}disconnectedCallback(){super.disconnectedCallback(),this._inputNode?.removeEventListener(`change`,this._onChange)}resetInteractionState(){super.resetInteractionState(),this.submitted=!1}reset(){this.modelValue=this._initialModelValue,this.resetInteractionState()}clear(){this.modelValue=``}_onChange(e){this.dispatchEvent(new Event(`user-input-changed`,{bubbles:!0}))}get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,focused:this.focused}}get _focusableNode(){return this._inputNode}},Ec=class extends Array{_keys(){return Object.keys(this).filter(e=>Number.isNaN(Number(e)))}},Dc=L(e=>class extends dc(e){static get properties(){return{_isFormOrFieldset:{type:Boolean}}}constructor(){super(),this.formElements=new Ec,this._isFormOrFieldset=!1,this._onRequestToAddFormElement=this._onRequestToAddFormElement.bind(this),this._onRequestToChangeFormElementName=this._onRequestToChangeFormElementName.bind(this),this.addEventListener(`form-element-register`,this._onRequestToAddFormElement),this.addEventListener(`form-element-name-changed`,this._onRequestToChangeFormElementName),this.initComplete=new Promise((e,t)=>{this.__resolveInitComplete=e,this.__rejectInitComplete=t}),this.registrationComplete=new Promise((e,t)=>{this.__resolveRegistrationComplete=e,this.__rejectRegistrationComplete=t}),this.registrationComplete.done=!1,this.registrationComplete.then(()=>{this.registrationComplete.done=!0,this.__resolveInitComplete(void 0)},()=>{throw this.registrationComplete.done=!0,this.__rejectInitComplete(void 0),Error(`Registration could not finish. Please use await el.registrationComplete;`)})}connectedCallback(){super.connectedCallback(),this._completeRegistration()}_completeRegistration(){Promise.resolve().then(()=>this.__resolveRegistrationComplete(void 0))}disconnectedCallback(){super.disconnectedCallback(),this.registrationComplete.done===!1&&Promise.resolve().then(()=>{Promise.resolve().then(()=>{this.__rejectRegistrationComplete()})})}isRegisteredFormElement(e){return this.formElements.some(t=>t===e)}addFormElement(e,t){if(e._parentFormGroup=this,t>=0?this.formElements.splice(t,0,e):this.formElements.push(e),this._isFormOrFieldset){let{name:n}=e;if(n===this.name)throw console.info(`Error Node:`,e),TypeError(`You can not have the same name "${n}" as your parent`);if(n.substr(-2)===`[]`)Array.isArray(this.formElements[n])||(this.formElements[n]=new Ec),t>0?this.formElements[n].splice(t,0,e):this.formElements[n].push(e);else if(!this.formElements[n])this.formElements[n]=e;else throw console.info(`Error Node:`,e),TypeError(`Name "${n}" is already registered - if you want an array add [] to the end`)}}removeFormElement(e){let t=this.formElements.indexOf(e);if(t>-1&&this.formElements.splice(t,1),this._isFormOrFieldset){let{name:t}=e;if(t.substr(-2)===`[]`&&this.formElements[t]){let n=this.formElements[t].indexOf(e);n>-1&&this.formElements[t].splice(n,1)}else this.formElements[t]&&delete this.formElements[t]}}_onRequestToAddFormElement(e){let t=e.detail.element;if(t===this||this.isRegisteredFormElement(t))return;e.stopPropagation();let n=-1;if(this.formElements&&Array.isArray(this.formElements)){for(let[e,r]of this.formElements.entries())if(!(r.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING)){n=e;break}}this.addFormElement(t,n)}_onRequestToChangeFormElementName(e){let t=this.formElements[e.detail.oldName];t&&(this.formElements[e.detail.newName]=t,delete this.formElements[e.detail.oldName])}_onRequestToRemoveFormElement(e){let t=e.detail.element;t!==this&&this.isRegisteredFormElement(t)&&(e.stopPropagation(),this.removeFormElement(t))}}),Oc=L(e=>class extends e{constructor(){super(),this.registrationTarget=void 0,this.__redispatchEventForFormRegistrarPortalMixin=this.__redispatchEventForFormRegistrarPortalMixin.bind(this),this.addEventListener(`form-element-register`,this.__redispatchEventForFormRegistrarPortalMixin)}__redispatchEventForFormRegistrarPortalMixin(e){if(e.stopPropagation(),!this.registrationTarget)throw Error(`A FormRegistrarPortal element requires a .registrationTarget`);this.registrationTarget.dispatchEvent(new CustomEvent(`form-element-register`,{detail:{element:e.detail.element},bubbles:!0}))}}),kc=L(e=>class extends Cc(Ss(fc(e))){static get properties(){return{autocomplete:{type:String,reflect:!0}}}constructor(){super(),this.autocomplete=void 0}get _inputNode(){return super._inputNode}get selectionStart(){let e=this._inputNode;return e&&e.selectionStart?e.selectionStart:0}set selectionStart(e){let t=this._inputNode;t&&t.selectionStart&&(t.selectionStart=e)}get selectionEnd(){let e=this._inputNode;return e&&e.selectionEnd?e.selectionEnd:0}set selectionEnd(e){let t=this._inputNode;t&&t.selectionEnd&&(t.selectionEnd=e)}get value(){return this._inputNode&&this._inputNode.value||this.__value||``}set value(e){this._inputNode?(this._inputNode.value!==e&&this._setValueAndPreserveCaret(e),this.__value=void 0):this.__value=e}_setValueAndPreserveCaret(e){if(this.focused)try{if(!(this._inputNode instanceof HTMLSelectElement)){let t=this._inputNode.selectionStart;this._inputNode.value=e,this._inputNode.selectionStart=t,this._inputNode.selectionEnd=t}}catch{this._inputNode.value=e}else this._inputNode.value=e}_reflectBackFormattedValueToUser(){if(super._reflectBackFormattedValueToUser(),this._reflectBackOn()&&this.focused)try{this._inputNode.selectionStart=this._inputNode.value.length}catch{}}get _focusableNode(){return this._inputNode}}),Ac=L(e=>class extends Dc(Sc(wc(e))){static get properties(){return{multipleChoice:{type:Boolean,attribute:`multiple-choice`}}}get modelValue(){let e=this._getCheckedElements();return this.multipleChoice?e.map(e=>e.choiceValue):e[0]?e[0].choiceValue:``}set modelValue(e){let t=(t,n)=>typeof t.choiceValue==`object`?JSON.stringify(t.choiceValue)===JSON.stringify(e):t.choiceValue===n;this.__isInitialModelValue?this.registrationComplete.then(()=>{this.__isInitialModelValue=!1,this._setCheckedElements(e,t),this.requestUpdate(`modelValue`,this._oldModelValue)}):(this._setCheckedElements(e,t),this.requestUpdate(`modelValue`,this._oldModelValue)),this._oldModelValue=this.modelValue}get serializedValue(){let e=this._getCheckedElements();return this.multipleChoice?e.map(e=>e.serializedValue.value):e[0]?e[0].serializedValue.value:``}set serializedValue(e){let t=(e,t)=>e.serializedValue.value===t;this.__isInitialSerializedValue?this.registrationComplete.then(()=>{this.__isInitialSerializedValue=!1,this._setCheckedElements(e,t),this.requestUpdate(`serializedValue`)}):(this._setCheckedElements(e,t),this.requestUpdate(`serializedValue`))}get formattedValue(){let e=this._getCheckedElements();return this.multipleChoice?e.map(e=>e.formattedValue):e[0]?e[0].formattedValue:``}set formattedValue(e){let t=(e,t)=>e.formattedValue===t;this.__isInitialFormattedValue?this.registrationComplete.then(()=>{this.__isInitialFormattedValue=!1,this._setCheckedElements(e,t)}):this._setCheckedElements(e,t)}get operationMode(){return this._repropagationRole===`choice-group`?`select`:`enter`}constructor(){super(),this.multipleChoice=!1,this._repropagationRole=`choice-group`,this.__isInitialModelValue=!0,this.__isInitialSerializedValue=!0,this.__isInitialFormattedValue=!0}connectedCallback(){super.connectedCallback(),this.registrationComplete.then(()=>{this.__isInitialModelValue=!1,this.__isInitialSerializedValue=!1,this.__isInitialFormattedValue=!1})}_completeRegistration(){Promise.resolve().then(()=>super._completeRegistration())}updated(e){super.updated(e),e.has(`name`)&&this.name!==e.get(`name`)&&this.formElements.forEach(e=>{e.name=this.name})}addFormElement(e,t){this._throwWhenInvalidChildModelValue(e),e.name=this.name,super.addFormElement(e,t)}clear(){this.multipleChoice?this.modelValue=[]:this.modelValue=``}_triggerInitialModelValueChangedEvent(){this.registrationComplete.then(()=>{this._dispatchInitialModelValueChangedEvent()})}_getFromAllFormElementsFilter(e,t){return!0}_getFromAllFormElements(e,t){let n=t||this._getFromAllFormElementsFilter;if(e===`modelValue`||e===`serializedValue`||e===`formattedValue`)return this[e];let r=this.formElements.filter(t=>n(t,e));return e===`_initialModelValue`?this.multipleChoice?r.filter(t=>t[e].checked).map(t=>t[e].value):r.find(t=>t[e].checked)?.value:r.map(t=>t[e])}_throwWhenInvalidChildModelValue(e){if(typeof e.modelValue.checked!=`boolean`||!Object.prototype.hasOwnProperty.call(e.modelValue,`value`))throw Error(`The ${this.tagName.toLowerCase()} name="${this.name}" does not allow to register ${e.tagName.toLowerCase()} with .modelValue="${e.modelValue}" - The modelValue should represent an Object { value: "foo", checked: false }`)}_isEmpty(){return this.multipleChoice?this.modelValue.length===0:typeof this.modelValue==`string`&&this.modelValue===``||this.modelValue===void 0||this.modelValue===null}_checkSingleChoiceElements(e){let{target:t}=e;if(t.checked===!1)return;let n=t.name;this.formElements.filter(e=>e.name===n).forEach(e=>{e!==t&&(e.checked=!1)})}_getCheckedElements(){return this.formElements.filter(e=>e.checked&&!e.disabled)}_setCheckedElements(e,t){if(e==null){this.formElements.forEach(e=>e.checked=!1);return}for(let n=0;n<this.formElements.length;n+=1)if(this.multipleChoice){let t=e.includes(this.formElements[n].modelValue.value);typeof this.formElements[n].modelValue.value==`object`&&(t=e.map(e=>JSON.stringify(e)).includes(JSON.stringify(this.formElements[n].modelValue.value))),this.formElements[n].checked=t}else t(this.formElements[n],e)?this.formElements[n].checked=!0:this.formElements[n].checked=!1}__setChoiceGroupTouched(){let e=this.modelValue;e!=null&&e!==this.__previousCheckedValue&&(this.touched=!0,this.__previousCheckedValue=e)}_onBeforeRepropagateChildrenValues(e){let t=e.detail&&e.detail.element||e.target;this.multipleChoice||!t.checked||(this.formElements.forEach(e=>{t.choiceValue!==e.choiceValue&&(e.checked=!1)}),this.__setChoiceGroupTouched(),this.requestUpdate(`modelValue`,this._oldModelValue),this._oldModelValue=this.modelValue)}_repropagationCondition(e){return!(this._repropagationRole===`choice-group`&&!this.multipleChoice&&!e.checked)}}),jc=(e,t={})=>e.value!==t.value||e.checked!==t.checked,Mc=L(e=>class extends Cc(e){static get properties(){return{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},modelValue:{type:Object,hasChanged:jc},choiceValue:{type:Object}}}get choiceValue(){return this.modelValue.value}set choiceValue(e){this.requestUpdate(`choiceValue`,this.choiceValue),this.modelValue.value!==e&&(this.modelValue={value:e,checked:this.modelValue.checked})}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`modelValue`?this.modelValue.checked!==this.checked&&this.__syncModelCheckedToChecked(this.modelValue.checked):e===`checked`&&this.modelValue.checked!==this.checked&&this.__syncCheckedToModel(this.checked)}firstUpdated(e){super.firstUpdated(e),e.has(`checked`)&&this.__syncCheckedToInputElement()}updated(e){super.updated(e),e.has(`modelValue`)&&this.__syncCheckedToInputElement(),e.has(`name`)&&this._parentFormGroup&&this._parentFormGroup.name!==this.name&&this._syncNameToParentFormGroup()}constructor(){super(),this.modelValue={value:``,checked:!1},this.disabled=!1,this._preventDuplicateLabelClick=this._preventDuplicateLabelClick.bind(this),this._toggleChecked=this._toggleChecked.bind(this)}static get styles(){return[...super.styles||[],_`
          :host {
            display: flex;
            flex-wrap: wrap;
          }

          :host([hidden]) {
            display: none;
          }

          .choice-field__graphic-container {
            display: none;
          }
          .choice-field__help-text {
            display: block;
            flex-basis: 100%;
          }
        `]}render(){return m`
        <slot name="input"></slot>
        <div class="choice-field__graphic-container" aria-hidden="true">
          ${this._choiceGraphicTemplate()}
        </div>
        <div class="choice-field__label">
          <slot name="label"></slot>
        </div>
        <small class="choice-field__help-text">
          <slot name="help-text"></slot>
        </small>
        ${this._afterTemplate()}
      `}_choiceGraphicTemplate(){return h}_afterTemplate(){return h}connectedCallback(){super.connectedCallback(),this._labelNode&&this._labelNode.addEventListener(`click`,this._preventDuplicateLabelClick),this.addEventListener(`user-input-changed`,this._toggleChecked)}disconnectedCallback(){super.disconnectedCallback(),this._labelNode&&this._labelNode.removeEventListener(`click`,this._preventDuplicateLabelClick),this.removeEventListener(`user-input-changed`,this._toggleChecked)}_preventDuplicateLabelClick(e){let t=e=>{e.stopImmediatePropagation(),this._inputNode.removeEventListener(`click`,t)};this._inputNode.addEventListener(`click`,t)}_toggleChecked(e){this.disabled||(this._isHandlingUserInput=!0,this.checked=!this.checked,this._isHandlingUserInput=!1)}_syncNameToParentFormGroup(){this._parentFormGroup.tagName.includes(this.tagName)&&(this.name=this._parentFormGroup?.name||``)}__syncModelCheckedToChecked(e){this.checked=e}__syncCheckedToModel(e){this.modelValue={value:this.choiceValue,checked:e}}__syncCheckedToInputElement(){this._inputNode&&(this._inputNode.checked=this.checked)}_proxyInputEvent(){}_onModelValueChanged({modelValue:e},t){let n;t&&t.modelValue&&(n=t.modelValue),this.constructor.elementProperties.get(`modelValue`).hasChanged(e,n)&&super._onModelValueChanged({modelValue:e})}parser(){return this.modelValue}formatter(e){return e&&e.value!==void 0?e.value:e}clear(){this.checked=!1}_isEmpty(){return!this.checked}_syncValueUpwards(){}}),Nc=class extends yc{static get validatorName(){return`FormElementsHaveNoError`}execute(e,t,n){return n?.node._anyFormElementHasFeedbackFor(`error`)}static async getMessage(){return``}},Pc=L(e=>class extends Dc(fc(Sc(Ur(ii(e))))){static get properties(){return{submitted:{type:Boolean,reflect:!0},focused:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},touched:{type:Boolean,reflect:!0},prefilled:{type:Boolean,reflect:!0}}}get _inputNode(){return this}get modelValue(){return this._getFromAllFormElements(`modelValue`)}set modelValue(e){this.__isInitialModelValue?(this.__isInitialModelValue=!1,this.registrationComplete.then(()=>{this._setValueMapForAllFormElements(`modelValue`,e)})):this._setValueMapForAllFormElements(`modelValue`,e)}get serializedValue(){return this._getFromAllFormElements(`serializedValue`)}set serializedValue(e){this.__isInitialSerializedValue?(this.__isInitialSerializedValue=!1,this.registrationComplete.then(()=>{this._setValueMapForAllFormElements(`serializedValue`,e)})):this._setValueMapForAllFormElements(`serializedValue`,e)}get formattedValue(){return this._getFromAllFormElements(`formattedValue`)}set formattedValue(e){this._setValueMapForAllFormElements(`formattedValue`,e)}get prefilled(){return this._everyFormElementHas(`prefilled`)}constructor(){super(),this.value=``,this.disabled=!1,this.submitted=!1,this.dirty=!1,this.touched=!1,this.focused=!1,this.__addedSubValidators=!1,this.__isInitialModelValue=!0,this.__isInitialSerializedValue=!0,this._checkForOutsideClick=this._checkForOutsideClick.bind(this),this.addEventListener(`focusin`,this._syncFocused),this.addEventListener(`focusout`,this._onFocusOut),this.addEventListener(`dirty-changed`,this._syncDirty),this.addEventListener(`validate-performed`,this.__onChildValidatePerformed),this.defaultValidators=[new Nc],this.__descriptionElementsInParentChain=new Set,this.__pendingValues={modelValue:{},serializedValue:{}}}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`group`),this.initComplete.then(()=>{this.__isInitialModelValue=!1,this.__isInitialSerializedValue=!1,this.__initInteractionStates()})}disconnectedCallback(){super.disconnectedCallback(),this.__hasActiveOutsideClickHandling&&=(document.removeEventListener(`click`,this._checkForOutsideClick),!1),this.__descriptionElementsInParentChain.clear()}__initInteractionStates(){this.formElements.forEach(e=>{typeof e.initInteractionState==`function`&&e.initInteractionState()})}_triggerInitialModelValueChangedEvent(){this.registrationComplete.then(()=>{this._dispatchInitialModelValueChangedEvent()})}updated(e){super.updated(e),e.has(`disabled`)&&(this.disabled?this.__requestChildrenToBeDisabled():this.__retractRequestChildrenToBeDisabled()),e.has(`focused`)&&this.focused===!0&&this.__setupOutsideClickHandling()}__setupOutsideClickHandling(){this.__hasActiveOutsideClickHandling||=(document.addEventListener(`click`,this._checkForOutsideClick),!0)}_checkForOutsideClick(e){this.contains(e.target)||(this.touched=!0)}__requestChildrenToBeDisabled(){this.formElements.forEach(e=>{e.makeRequestToBeDisabled&&e.makeRequestToBeDisabled()})}__retractRequestChildrenToBeDisabled(){this.formElements.forEach(e=>{e.retractRequestToBeDisabled&&e.retractRequestToBeDisabled()})}_inputGroupTemplate(){return m`
        <div class="input-group">
          <slot></slot>
        </div>
      `}submitGroup(){this.submitted=!0,this.formElements.forEach(e=>{typeof e.submitGroup==`function`?e.submitGroup():e.submitted=!0})}resetGroup(){this.formElements.forEach(e=>{typeof e.resetGroup==`function`?e.resetGroup():typeof e.reset==`function`&&e.reset()}),this.resetInteractionState()}clearGroup(){this.formElements.forEach(e=>{typeof e.clearGroup==`function`?e.clearGroup():typeof e.clear==`function`&&e.clear()}),this.resetInteractionState()}resetInteractionState(){this.submitted=!1,this.touched=!1,this.dirty=!1,this.formElements.forEach(e=>{typeof e.resetInteractionState==`function`&&e.resetInteractionState()})}_getFromAllFormElementsFilter(e,t){return!e.disabled}_getFromAllFormElements(e,t){let n={},r=t||this._getFromAllFormElementsFilter;return this.formElements._keys().forEach(t=>{let i=this.formElements[t];i instanceof Ec?n[t]=i.filter(t=>r(t,e)).map(t=>t[e]):r(i,e)&&(typeof i._getFromAllFormElements==`function`?n[t]=i._getFromAllFormElements(e):n[t]=i[e])}),n}_setValueForAllFormElements(e,t){this.formElements.forEach(n=>{n[e]=t})}_setValueMapForAllFormElements(e,t){t&&typeof t==`object`&&Object.keys(t).forEach(n=>{Array.isArray(this.formElements[n])&&this.formElements[n].forEach((r,i)=>{r[e]=t[n][i]}),this.formElements[n]?this.formElements[n][e]=t[n]:this.__pendingValues[e][n]=t[n]})}_anyFormElementHas(e){return Object.keys(this.formElements).some(t=>Array.isArray(this.formElements[t])?this.formElements[t].some(t=>!!t[e]):!!this.formElements[t][e])}_anyFormElementHasFeedbackFor(e){return Object.keys(this.formElements).some(t=>Array.isArray(this.formElements[t])?this.formElements[t].some(t=>!!(t.hasFeedbackFor&&t.hasFeedbackFor.includes(e))):!!(this.formElements[t].hasFeedbackFor&&this.formElements[t].hasFeedbackFor.includes(e)))}_everyFormElementHas(e){return Object.keys(this.formElements).every(t=>Array.isArray(this.formElements[t])?this.formElements[t].every(t=>!!t[e]):!!this.formElements[t][e])}__onChildValidatePerformed(e){e&&this.isRegisteredFormElement(e.target)&&this.validate()}_syncFocused(){this.focused=this._anyFormElementHas(`focused`)}_onFocusOut(e){let t=this.formElements[this.formElements.length-1];e.target===t&&(this.touched=!0),this.focused=!1}_syncDirty(){this.dirty=this._anyFormElementHas(`dirty`)}__storeAllDescriptionElementsInParentChain(){let e=this;for(;e;)lc(e._getAriaDescriptionElements(),{reverse:!0}).forEach(e=>{e.getAttribute(`slot`)===`feedback`&&this.__descriptionElementsInParentChain.add(e)}),e=e._parentFormGroup}__linkParentMessages(e){this.__descriptionElementsInParentChain.forEach(t=>{typeof e.addToAriaDescribedBy==`function`&&e.addToAriaDescribedBy(t,{reorder:!1})})}__unlinkParentMessages(e){this.__descriptionElementsInParentChain.forEach(t=>{typeof e.removeFromAriaDescribedBy==`function`&&e.removeFromAriaDescribedBy(t)})}addFormElement(e,t){if(super.addFormElement(e,t),this.disabled&&e.makeRequestToBeDisabled(),this.__descriptionElementsInParentChain.size||this.__storeAllDescriptionElementsInParentChain(),this.__linkParentMessages(e),this.validate({clearCurrentResult:!0}),!e.modelValue){let t=this.__pendingValues;t.modelValue&&t.modelValue[e.name]?e.modelValue=t.modelValue[e.name]:t.serializedValue&&t.serializedValue[e.name]&&(e.serializedValue=t.serializedValue[e.name])}}get _initialModelValue(){return this._getFromAllFormElements(`_initialModelValue`)}removeFormElement(e){super.removeFormElement(e),this.validate({clearCurrentResult:!0}),typeof e.removeFromAriaLabelledBy==`function`&&this._labelNode&&e.removeFromAriaLabelledBy(this._labelNode,{reorder:!1}),this.__unlinkParentMessages(e)}_isEmpty(){return this.formElements.every(e=>e._isEmpty?.())}}),Fc=class extends Ac(Pc(g)){constructor(){super(),this.multipleChoice=!0}},Ic=class extends kc(Tc){static get properties(){return{readOnly:{type:Boolean,attribute:`readonly`,reflect:!0},type:{type:String,reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`),t=this.getAttribute(`value`);return t&&e.setAttribute(`value`,t),e}}}get _inputNode(){return super._inputNode}constructor(){super(),this.readOnly=!1,this.type=`text`,this.placeholder=``}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`readOnly`&&this.__delegateReadOnly()}firstUpdated(e){super.firstUpdated(e),this.__delegateReadOnly()}updated(e){super.updated(e),e.has(`type`)&&(this._inputNode.type=this.type),e.has(`placeholder`)&&(this._inputNode.placeholder=this.placeholder),e.has(`disabled`)&&(this._inputNode.disabled=this.disabled,this.validate()),e.has(`name`)&&(this._inputNode.name=this.name),e.has(`autocomplete`)&&(this._inputNode.autocomplete=this.autocomplete)}__delegateReadOnly(){this._inputNode&&(this._inputNode.readOnly=this.readOnly)}},Lc=class extends Mc(Ic){connectedCallback(){super.connectedCallback(),this.type=`checkbox`}},Rc=class extends Lc{static get styles(){return[...super.styles||[],_`
        :host .choice-field__nested-checkboxes {
          display: block;
        }
        ::slotted(*) {
          padding-left: 8px;
        }
      `]}static get properties(){return{indeterminate:{type:Boolean,reflect:!0},mixedState:{type:Boolean,reflect:!0,attribute:`mixed-state`}}}get _checkboxGroupNode(){return this._parentFormGroup}get _subCheckboxes(){return this.__subCheckboxes}_storeIndeterminateState(){this._indeterminateSubStates=this._subCheckboxes.map(e=>e.checked)}_setOldState(){this.indeterminate?this._oldState=`indeterminate`:this._oldState=this.checked?`checked`:`unchecked`}_setOwnCheckedState(){let e=this._subCheckboxes;if(!e.length)return;this.__settingOwnChecked=!0;let t=e.filter(e=>e.checked);switch(e.length-t.length){case 0:this.indeterminate=!1,this.checked=!0;break;case e.length:this.indeterminate=!1,this.checked=!1;break;default:{this.indeterminate=!0;let n=e.filter(e=>e.disabled&&e.checked===!1);this.checked=e.length-t.length-n.length===0}}this.updateComplete.then(()=>{this.__settingOwnChecked=!1})}_setBasedOnMixedState(){switch(this._oldState){case`checked`:this.checked=!1,this.indeterminate=!1;break;case`unchecked`:this.checked=!1,this.indeterminate=!0;break;case`indeterminate`:this.checked=!0,this.indeterminate=!1;break}}__onModelValueChanged(e){if(!this.disabled){if(e.detail.formPath[0]===this&&!this.__settingOwnChecked){this.mixedState&&!(e=>e.every(t=>t===e[0]))(this._indeterminateSubStates)&&this._setBasedOnMixedState(),this.__settingOwnSubs=!0;let e=this._subCheckboxes,t=e.filter(e=>e.checked),n=e.filter(e=>e.disabled),r=e.length>0&&e.length===t.length;e.length>0&&e.length===n.length&&(this.checked=r),this.indeterminate&&this.mixedState?this._subCheckboxes.forEach((e,t)=>{e.checked=this._indeterminateSubStates[t]}):this._subCheckboxes.filter(e=>!e.disabled).forEach(e=>{e.checked=this._inputNode.checked}),this.updateComplete.then(()=>{this.__settingOwnSubs=!1})}else this._setOwnCheckedState(),this.updateComplete.then(()=>{!this.__settingOwnSubs&&!this.__settingOwnChecked&&this.mixedState&&this._storeIndeterminateState()});this.mixedState&&this._setOldState()}}_afterTemplate(){return m`
      <div class="choice-field__nested-checkboxes" role="list">
        <slot></slot>
      </div>
    `}_onRequestToAddFormElement(e){e.target.hasAttribute(`role`)||e.target?.setAttribute(`role`,`listitem`),this.__addToSubCheckboxes(e.detail.element),this._setOwnCheckedState()}_onRequestToRemoveFormElement(e){e.target.getAttribute(`role`)===`listitem`&&e.target?.removeAttribute(`role`),this.__removeFromSubCheckboxes(e.detail.element)}__addToSubCheckboxes(e){e!==this&&this.contains(e)&&this.__subCheckboxes.push(e)}__removeFromSubCheckboxes(e){let t=this.__subCheckboxes.indexOf(e);t!==-1&&this.__subCheckboxes.splice(t,1)}constructor(){super(),this.indeterminate=!1,this._onRequestToAddFormElement=this._onRequestToAddFormElement.bind(this),this.__onModelValueChanged=this.__onModelValueChanged.bind(this),this.__subCheckboxes=[],this._indeterminateSubStates=[],this.mixedState=!1}connectedCallback(){super.connectedCallback(),this.addEventListener(`model-value-changed`,this.__onModelValueChanged),this.addEventListener(`form-element-register`,this._onRequestToAddFormElement)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`model-value-changed`,this.__onModelValueChanged),this.removeEventListener(`form-element-register`,this._onRequestToAddFormElement)}firstUpdated(e){super.firstUpdated(e),this._setOldState(),this.indeterminate&&this._storeIndeterminateState()}updated(e){super.updated(e),(e.has(`indeterminate`)||e.has(`checked`))&&(this._inputNode.indeterminate=this.indeterminate)}},zc=class extends Fc{static get styles(){return[...Fc.styles,_`
        .input-group {
          display: grid;
          gap: var(--c-spacing-sm);
        }

        .form-field__group-two {
          margin-top: var(--c-spacing-sm);
        }

        ::slotted(label) {
          font-weight: bold;
        }
      `]}};customElements.get(`craft-checkbox-group`)||customElements.define(`craft-checkbox-group`,zc);var Bc=class extends Rc{static get styles(){return[...Rc.styles,_`
        :host {
          display: flex;
          align-items: center;
          gap: 0 var(--c-spacing-md);
        }

        ::slotted(label) {
          font-weight: bold;
        }

        ::slotted(*) {
          padding-left: 0;
        }
      `]}};customElements.get(`craft-checkbox-indeterminate`)||customElements.define(`craft-checkbox-indeterminate`,Bc);var Vc=class extends Lc{constructor(...e){super(...e),this.indeterminate=!1}updated(e){super.updated(e);let t=this._inputNode;t&&(t.indeterminate=this.indeterminate)}static get styles(){return[...Lc.styles,_`
        /* same as radio, potentially consolidate */
        :host(:not([label-sr-only])) {
          --_gap-x: var(--gap-x, var(--c-spacing-md));
          display: grid;
          align-items: center;
          gap: 0 var(--_gap-x);
          grid-template-areas: 'input label' '. help-text';
          grid-template-columns: auto 1fr;
          grid-template-rows: repeat(2, auto);
        }

        /*
         * Choice inputs render their label/help-text in \`.choice-field__*\`, so
         * Lion's built-in \`label-sr-only\` rule (which targets
         * \`.form-field__label\`) never matches. When the label is hidden we also
         * hide the help text, but both stay available to screen readers: Lion
         * associates the help text with the input via \`aria-describedby\`, and we
         * clip rather than use \`display:none\`/\`visibility:hidden\` so the content
         * remains in the accessibility tree (WCAG 1.3.1 / 4.1.2). \`white-space:
         * nowrap\` avoids clipped multi-line text being announced oddly, and the
         * \`:not(:focus-within)\` guard reveals any focusable help-text content
         * (e.g. links) when focused (WCAG 2.4.7).
         */
        :host([label-sr-only]) .choice-field__label,
        :host([label-sr-only]) .choice-field__help-text:not(:focus-within) {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(100%);
          clip: rect(1px, 1px, 1px, 1px);
          white-space: nowrap;
          border: 0;
          margin: 0;
          padding: 0;
        }

        ::slotted(label) {
          font: inherit;
          grid-area: label;
        }

        ::slotted([slot='input']) {
          background-color: var(--c-input-fill, var(--c-form-control-fill));
          border-width: var(
            --c-input-border-width,
            var(--c-form-control-border-width)
          );
          border-style: var(
            --c-input-border-style,
            var(--c-form-control-border-style)
          );
          border-color: var(
            --c-input-border-color,
            var(--c-form-control-border-color)
          );
          border-radius: var(--c-input-radius, var(--c-radius-sm));
          width: var(--c-size-control-2xs);
          height: var(--c-size-control-2xs);
        }

        .choice-field__help-text {
          font-size: 1em;
          color: var(--c-text-quiet);
          grid-area: help-text;
        }
      `]}};n([v({type:Boolean,reflect:!0})],Vc.prototype,`indeterminate`,void 0),customElements.get(`craft-checkbox`)||customElements.define(`craft-checkbox`,Vc);var Hc=null,Uc=null;function Wc(e){return new Promise(t=>{e.addEventListener(`load`,()=>t(),{once:!0}),e.addEventListener(`error`,()=>t(),{once:!0})})}async function Gc(e,t){let n=[],r=[],i=[],a=()=>{for(let e of n)e.parentNode?.removeChild(e);if(Hc)for(let e of r){let t=Hc.indexOf(e);t!==-1&&Hc.splice(t,1)}if(Uc)for(let e of i){let t=Uc.indexOf(e);t!==-1&&Uc.splice(t,1)}};if(!e)return a;let o=document.createElement(`div`);o.innerHTML=e.trim();let s=Array.from(o.childNodes);for(let e of s){if(e instanceof HTMLLinkElement&&e.href){Hc||=Array.from(document.querySelectorAll(`link[href]`)).map(e=>e.href.replace(/&/g,`&amp;`));let i=e.href.replace(/&/g,`&amp;`);if(Hc.includes(i))continue;Hc.push(i),r.push(i);let a=document.createElement(`link`);Array.from(e.attributes).forEach(e=>{a.setAttribute(e.name,e.value)}),t.appendChild(a),n.push(a);continue}if(e instanceof HTMLScriptElement){let r=document.createElement(`script`),a=null;if(Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)}),e.src){Uc||=Array.from(document.querySelectorAll(`script[src]`)).map(e=>e.src.replace(/&/g,`&amp;`));let t=e.src.replace(/&/g,`&amp;`);if(Uc.includes(t))continue;Uc.push(t),i.push(t),r.async=!1,a=Wc(r)}else r.textContent=e.textContent;t.appendChild(r),n.push(r),a&&await a;continue}let a=e.cloneNode(!0);t.appendChild(a),n.push(a)}return a}async function Kc(e){return Gc(e,document.head)}async function qc(e){return Gc(e,document.body)}function Jc(e){return typeof e.checkVisibility==`function`?e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0}):e.offsetWidth>0||e.offsetHeight>0}function Yc(e){let t=new URLSearchParams,n=e.querySelectorAll(`input[name], select[name], textarea[name]`);for(let e of n)if(!e.disabled&&!(e instanceof HTMLInputElement&&([`file`,`submit`,`button`,`reset`,`image`].includes(e.type)||(e.type===`checkbox`||e.type===`radio`)&&!e.checked))){if(e instanceof HTMLSelectElement&&e.multiple){for(let n of e.selectedOptions)t.append(e.name,n.value);continue}t.append(e.name,e.value)}return t.toString()}var Xc={Á:`A`,á:`a`,Ä:`A`,ä:`a`,À:`A`,à:`a`,Â:`A`,â:`a`,É:`E`,é:`e`,Ë:`E`,ë:`e`,È:`E`,è:`e`,Ê:`E`,ê:`e`,Í:`I`,í:`i`,Ï:`I`,ï:`i`,Ì:`I`,ì:`i`,Î:`I`,î:`i`,Ó:`O`,ó:`o`,Ö:`O`,ö:`o`,Ò:`O`,ò:`o`,Ô:`O`,ô:`o`,Ú:`U`,ú:`u`,Ü:`U`,ü:`u`,Ù:`U`,ù:`u`,Û:`U`,û:`u`,Ý:`Y`,ý:`y`,Ÿ:`Y`,А:`A`,Б:`B`,В:`V`,Г:`G`,Д:`D`,Ѓ:`Gj`,Е:`E`,Ж:`Z`,З:`Z`,Ѕ:`Dz`,И:`I`,Ј:`j`,К:`K`,Л:`L`,Љ:`Lj`,М:`M`,Н:`N`,Њ:`Nj`,О:`O`,П:`P`,Р:`R`,С:`S`,Т:`T`,Ќ:`Kj`,У:`U`,Ф:`F`,Х:`X`,Ц:`C`,Ч:`C`,Џ:`Dz`,Ш:`S`,а:`a`,б:`b`,в:`v`,г:`g`,д:`d`,ѓ:`gj`,е:`e`,ж:`z`,з:`z`,ѕ:`dz`,и:`i`,ј:`j`,к:`k`,л:`l`,љ:`lj`,м:`m`,н:`n`,њ:`nj`,о:`o`,п:`p`,р:`r`,с:`s`,т:`t`,ќ:`kj`,у:`u`,ф:`f`,х:`x`,ц:`c`,ч:`c`,џ:`dz`,ш:`s`,æ:`ae`,ǽ:`ae`,Ã:`A`,Å:`A`,Ǻ:`A`,Ă:`A`,Ǎ:`A`,Æ:`AE`,Ǽ:`AE`,ã:`a`,å:`a`,ǻ:`a`,ă:`a`,ǎ:`a`,ª:`a`,Ĉ:`C`,Ċ:`C`,Ç:`C`,ç:`c`,ĉ:`c`,ċ:`c`,Ð:`D`,Đ:`D`,ð:`d`,đ:`d`,Ĕ:`E`,Ė:`E`,ĕ:`e`,ė:`e`,ƒ:`f`,Ĝ:`G`,Ġ:`G`,ĝ:`g`,ġ:`g`,Ĥ:`H`,Ħ:`H`,ĥ:`h`,ħ:`h`,Ĩ:`I`,Ĭ:`I`,Ǐ:`I`,Į:`I`,Ĳ:`IJ`,ĩ:`i`,ĭ:`i`,ǐ:`i`,į:`i`,ĳ:`ij`,Ĵ:`J`,ĵ:`j`,Ĺ:`L`,Ľ:`L`,Ŀ:`L`,ĺ:`l`,ľ:`l`,ŀ:`l`,Ñ:`N`,ñ:`n`,ŉ:`n`,Õ:`O`,Ō:`O`,Ŏ:`O`,Ǒ:`O`,Ő:`O`,Ơ:`O`,Ø:`O`,Ǿ:`O`,Œ:`OE`,õ:`o`,ō:`o`,ŏ:`o`,ǒ:`o`,ő:`o`,ơ:`o`,ø:`o`,ǿ:`o`,º:`o`,œ:`oe`,Ŕ:`R`,Ŗ:`R`,ŕ:`r`,ŗ:`r`,Ŝ:`S`,Ș:`S`,ŝ:`s`,ș:`s`,ſ:`s`,Ţ:`T`,Ț:`T`,Ŧ:`T`,Þ:`TH`,ţ:`t`,ț:`t`,ŧ:`t`,þ:`th`,Ũ:`U`,Ŭ:`U`,Ű:`U`,Ų:`U`,Ư:`U`,Ǔ:`U`,Ǖ:`U`,Ǘ:`U`,Ǚ:`U`,Ǜ:`U`,ũ:`u`,ŭ:`u`,ű:`u`,ų:`u`,ư:`u`,ǔ:`u`,ǖ:`u`,ǘ:`u`,ǚ:`u`,ǜ:`u`,Ŵ:`W`,ŵ:`w`,Ŷ:`Y`,ÿ:`y`,ŷ:`y`,ΑΥ:`AU`,ΑΎ:`AU`,Αυ:`Au`,Αύ:`Au`,ΕΊ:`I`,ΕΙ:`I`,Ει:`Ei`,ΕΥ:`EF`,ΕΎ:`EU`,Εί:`I`,Ευ:`Ef`,Εύ:`Eu`,ΟΙ:`I`,ΟΊ:`I`,ΟΥ:`U`,ΟΎ:`OU`,Οι:`Oi`,Οί:`I`,Ου:`Oy`,Ού:`Ou`,ΥΙ:`I`,ΎΙ:`I`,Υι:`Yi`,Ύι:`I`,ΥΊ:`I`,Υί:`I`,αυ:`au`,αύ:`au`,εί:`i`,ει:`ei`,ευ:`ef`,εύ:`eu`,οι:`oi`,οί:`i`,ου:`oy`,ού:`ou`,υι:`yi`,ύι:`i`,υί:`i`,Α:`A`,Ά:`A`,Β:`B`,Δ:`D`,Ε:`E`,Έ:`E`,Φ:`F`,Γ:`G`,Η:`H`,Ή:`I`,Ι:`I`,Ί:`I`,Ϊ:`I`,Κ:`K`,Ξ:`Ks`,Λ:`L`,Μ:`M`,Ν:`N`,Π:`P`,Ο:`O`,Ό:`O`,Ψ:`Ps`,Ρ:`R`,Σ:`S`,Τ:`T`,Θ:`Th`,Ω:`O`,Ώ:`W`,Χ:`X`,ϒ:`Y`,Υ:`Y`,Ύ:`Y`,Ϋ:`Y`,Ζ:`Z`,α:`a`,ά:`a`,β:`v`,δ:`d`,ε:`e`,έ:`e`,φ:`f`,γ:`gh`,η:`i`,ή:`i`,ι:`i`,ί:`i`,ϊ:`i`,ΐ:`i`,κ:`k`,ξ:`ks`,λ:`l`,μ:`m`,ν:`n`,ο:`o`,ό:`o`,π:`p`,ψ:`ps`,ρ:`r`,σ:`s`,ς:`s`,τ:`t`,ϑ:`th`,θ:`th`,ϐ:`v`,ω:`o`,ώ:`w`,χ:`kh`,υ:`i`,ύ:`y`,ΰ:`y`,ϋ:`y`,ζ:`z`,अ:`a`,आ:`aa`,ए:`e`,ई:`ii`,ऍ:`ei`,ऎ:`ae`,ऐ:`ai`,इ:`i`,ओ:`o`,ऑ:`oi`,ऒ:`oii`,ऊ:`uu`,औ:`ou`,उ:`u`,ब:`B`,भ:`Bha`,च:`Ca`,छ:`Chha`,ड:`Da`,ढ:`Dha`,फ:`Fa`,फ़:`Fi`,ग:`Ga`,घ:`Gha`,ग़:`Ghi`,ह:`Ha`,ज:`Ja`,झ:`Jha`,क:`Ka`,ख:`Kha`,ख़:`Khi`,ल:`L`,ळ:`Li`,ऌ:`Li`,ऴ:`Lii`,ॡ:`Lii`,म:`Ma`,न:`Na`,ङ:`Na`,ञ:`Nia`,ण:`Nae`,ऩ:`Ni`,ॐ:`oms`,प:`Pa`,क़:`Qi`,र:`Ra`,ऋ:`Ri`,ॠ:`Ri`,ऱ:`Ri`,स:`Sa`,श:`Sha`,ष:`Shha`,ट:`Ta`,त:`Ta`,ठ:`Tha`,द:`Tha`,थ:`Tha`,ध:`Thha`,ड़:`ugDha`,ढ़:`ugDhha`,व:`Va`,य:`Ya`,य़:`Yi`,ज़:`Za`,Ա:`A`,Բ:`B`,Գ:`G`,Դ:`D`,Ե:`E`,Զ:`Z`,Է:`E`,Ը:`Y`,Թ:`Th`,Ժ:`Zh`,Ի:`I`,Լ:`L`,Խ:`Kh`,Ծ:`Ts`,Կ:`K`,Հ:`H`,Ձ:`Dz`,Ղ:`Gh`,Ճ:`Tch`,Մ:`M`,Յ:`Y`,Ն:`N`,Շ:`Sh`,Ո:`Vo`,Չ:`Ch`,Պ:`P`,Ջ:`J`,Ռ:`R`,Ս:`S`,Վ:`V`,Տ:`T`,Ր:`R`,Ց:`C`,Ւ:`u`,Փ:`Ph`,Ք:`Q`,և:`ev`,Օ:`O`,Ֆ:`F`,ա:`a`,բ:`b`,գ:`g`,դ:`d`,ե:`e`,զ:`z`,է:`e`,ը:`y`,թ:`th`,ժ:`zh`,ի:`i`,լ:`l`,խ:`kh`,ծ:`ts`,կ:`k`,հ:`h`,ձ:`dz`,ղ:`gh`,ճ:`tch`,մ:`m`,յ:`y`,ն:`n`,շ:`sh`,ո:`vo`,չ:`ch`,պ:`p`,ջ:`j`,ռ:`r`,ս:`s`,վ:`v`,տ:`t`,ր:`r`,ց:`c`,ւ:`u`,փ:`ph`,ք:`q`,օ:`o`,ֆ:`f`,Ž:`Z`,Ň:`N`,Ş:`S`,ž:`z`,ň:`n`,ş:`s`,ı:`i`,İ:`I`,ğ:`g`,Ğ:`G`,ьо:`yo`,Й:`i`,Щ:`Shh`,Ъ:`Ie`,Ь:``,Ю:`Iu`,Я:`Ia`,й:`i`,щ:`shh`,ъ:`ie`,ь:``,ю:`iu`,я:`ia`,Ē:`E`,ē:`e`,န်ုပ်:`nub`,"ောင်":`aung`,"ိုက်":`aik`,"ိုဒ်":`ok`,"ိုင်":`aing`,"ိုလ်":`ol`,"ေါင်":`aung`,သြော:`aw`,"ောက်":`auk`,"ိတ်":`eik`,"ုတ်":`ok`,"ုန်":`on`,"ေတ်":`it`,"ုဒ်":`ait`,"ာန်":`an`,"ိန်":`ein`,"ွတ်":`ut`,"ေါ်":`aw`,"ွန်":`un`,"ိပ်":`eik`,"ုပ်":`ok`,"ွပ်":`ut`,"ိမ်":`ein`,"ုမ်":`on`,"ော်":`aw`,"ွမ်":`un`,က်:`et`,"ေါ":`aw`,"ော":`aw`,"ျွ":`ywa`,"ြွ":`yw`,"ို":`o`,"ုံ":`on`,တ်:`at`,င်:`in`,ည်:`i`,ဒ်:`d`,န်:`an`,ပ်:`at`,မ်:`an`,စျ:`za`,ယ်:`e`,ဉ်:`in`,စ်:`it`,"ိံ":`ein`,"ဲ":`e`,"း":``,"ာ":`a`,"ါ":`a`,"ေ":`e`,"ံ":`an`,"ိ":`i`,"ီ":`i`,"ု":`u`,"ူ":`u`,"်":`at`,"္":``,"့":``,က:`k`,"၉":`9`,တ:`t`,ရ:`ya`,ယ:`y`,မ:`m`,ဘ:`ba`,ဗ:`b`,ဖ:`pa`,ပ:`p`,န:`n`,ဓ:`da`,ဒ:`d`,ထ:`ta`,ဏ:`na`,ဝ:`w`,ဎ:`da`,ဍ:`d`,ဌ:`ta`,ဋ:`t`,ည:`ny`,ဇ:`z`,ဆ:`sa`,စ:`s`,င:`ng`,ဃ:`ga`,ဂ:`g`,လ:`l`,သ:`th`,"၈":`8`,ဩ:`aw`,ခ:`kh`,"၆":`6`,"၅":`5`,"၄":`4`,"၃":`3`,"၂":`2`,"၁":`1`,"၀":`0`,"၌":`hnaik`,"၍":`ywae`,ဪ:`aw`,ဦ:`-u`,ဟ:`h`,ဉ:`u`,ဤ:`-i`,ဣ:`i`,"၏":`-e`,ဧ:`e`,"ှ":`h`,"ွ":`w`,"ျ":`ya`,"ြ":`y`,အ:`a`,ဠ:`la`,"၇":`7`,DŽ:`DZ`,Dž:`Dz`,dž:`dz`,Ǳ:`DZ`,ǲ:`Dz`,ǳ:`dz`,Ǉ:`LJ`,ǈ:`Lj`,ǉ:`lj`,Ǌ:`NJ`,ǋ:`Nj`,ǌ:`nj`,č:`c`,Č:`C`,ć:`c`,Ć:`C`,š:`s`,Š:`S`,ა:`a`,ბ:`b`,გ:`g`,დ:`d`,ე:`e`,ვ:`v`,ზ:`z`,თ:`t`,ი:`i`,კ:`k`,ლ:`l`,მ:`m`,ნ:`n`,ო:`o`,პ:`p`,ჟ:`zh`,რ:`r`,ს:`s`,ტ:`t`,უ:`u`,ფ:`f`,ქ:`q`,ღ:`gh`,ყ:`y`,შ:`sh`,ჩ:`ch`,ც:`ts`,ძ:`dz`,წ:`ts`,ჭ:`ch`,ხ:`kh`,ჯ:`j`,ჰ:`h`,Ё:`E`,ё:`e`,Ы:`Y`,ы:`y`,Э:`E`,э:`e`,І:`I`,і:`i`,Ѳ:`F`,ѳ:`f`,Ѣ:`E`,ѣ:`e`,Ѵ:`I`,ѵ:`i`,Є:`Je`,є:`je`,Ѥ:`Je`,ѥ:`je`,Ꙋ:`U`,ꙋ:`u`,Ѡ:`O`,ѡ:`o`,Ѿ:`Ot`,ѿ:`ot`,Ѫ:`U`,ѫ:`u`,Ѧ:`Ja`,ѧ:`ja`,Ѭ:`Ju`,ѭ:`ju`,Ѩ:`Ja`,ѩ:`Ja`,Ѯ:`Ks`,ѯ:`ks`,Ѱ:`Ps`,ѱ:`ps`,Ґ:`G`,ґ:`g`,Ї:`Yi`,ї:`yi`,Ә:`A`,Ғ:`G`,Қ:`Q`,Ң:`N`,Ө:`O`,Ұ:`U`,Ү:`U`,Һ:`H`,ә:`a`,ғ:`g`,қ:`q`,ң:`n`,ө:`o`,ұ:`u`,ү:`u`,һ:`h`,ď:`d`,Ď:`D`,ě:`e`,Ě:`E`,ř:`r`,Ř:`R`,ť:`t`,Ť:`T`,ů:`u`,Ů:`U`,ą:`a`,ę:`e`,ł:`l`,ń:`n`,ś:`s`,ź:`z`,ż:`z`,Ą:`A`,Ę:`E`,Ł:`L`,Ń:`N`,Ś:`S`,Ź:`Z`,Ż:`Z`,ā:`a`,ģ:`g`,ī:`i`,ķ:`k`,ļ:`l`,ņ:`n`,ū:`u`,Ā:`A`,Ģ:`G`,Ī:`I`,Ķ:`k`,Ļ:`L`,Ņ:`N`,Ū:`U`,Ả:`A`,Ạ:`A`,Ắ:`A`,Ằ:`A`,Ẳ:`A`,Ẵ:`A`,Ặ:`A`,Ấ:`A`,Ầ:`A`,Ẩ:`A`,Ẫ:`A`,Ậ:`A`,ả:`a`,ạ:`a`,ắ:`a`,ằ:`a`,ẳ:`a`,ẵ:`a`,ặ:`a`,ấ:`a`,ầ:`a`,ẩ:`a`,ẫ:`a`,ậ:`a`,Ẻ:`E`,Ẽ:`E`,Ẹ:`E`,Ế:`E`,Ề:`E`,Ể:`E`,Ễ:`E`,Ệ:`E`,ẻ:`e`,ẽ:`e`,ẹ:`e`,ế:`e`,ề:`e`,ể:`e`,ễ:`e`,ệ:`e`,Ỉ:`I`,Ị:`I`,ỉ:`i`,ị:`i`,Ỏ:`O`,Ọ:`O`,Ố:`O`,Ồ:`O`,Ổ:`O`,Ỗ:`O`,Ộ:`O`,Ớ:`O`,Ờ:`O`,Ở:`O`,Ỡ:`O`,Ợ:`O`,ỏ:`o`,ọ:`o`,ố:`o`,ồ:`o`,ổ:`o`,ỗ:`o`,ộ:`o`,ớ:`o`,ờ:`o`,ở:`o`,ỡ:`o`,ợ:`o`,Ủ:`U`,Ụ:`U`,Ứ:`U`,Ừ:`U`,Ử:`U`,Ữ:`U`,Ự:`U`,ủ:`u`,ụ:`u`,ứ:`u`,ừ:`u`,ử:`u`,ữ:`u`,ự:`u`,Ỳ:`Y`,Ỷ:`Y`,Ỹ:`Y`,Ỵ:`Y`,ỳ:`y`,ỷ:`y`,ỹ:`y`,ỵ:`y`,ا:`a`,ب:`b`,پ:`p`,ت:`t`,ث:`th`,ج:`g`,چ:`ch`,ح:`h`,خ:`kh`,د:`d`,ذ:`th`,ر:`r`,ز:`z`,س:`s`,ش:`sh`,ص:`s`,ض:`d`,ط:`t`,ظ:`th`,ع:`aa`,غ:`gh`,ف:`f`,ق:`k`,ک:`k`,گ:`g`,ل:`l`,ژ:`zh`,ك:`k`,م:`m`,ن:`n`,ه:`h`,و:`o`,ی:`y`,آ:`a`,"٠":`0`,"١":`1`,"٢":`2`,"٣":`3`,"٤":`4`,"٥":`5`,"٦":`6`,"٧":`7`,"٨":`8`,"٩":`9`,أ:`a`,ي:`y`,إ:`a`,ؤ:`o`,ئ:`y`,ء:`aa`,ђ:`dj`,ћ:`c`,Ђ:`Dj`,Ћ:`C`,ə:`e`,Ə:`E`,ß:`ss`,ẞ:`SS`,ভ্ল:`vl`,পশ:`psh`,ব্ধ:`bdh`,ব্জ:`bj`,ব্দ:`bd`,ব্ব:`bb`,ব্ল:`bl`,ভ:`v`,ব:`b`,চ্ঞ:`cNG`,চ্ছ:`cch`,চ্চ:`cc`,ছ:`ch`,চ:`c`,ধ্ন:`dhn`,ধ্ম:`dhm`,দ্ঘ:`dgh`,দ্ধ:`ddh`,দ্ভ:`dv`,দ্ম:`dm`,ড্ড:`DD`,ঢ:`Dh`,ধ:`dh`,দ্গ:`dg`,দ্দ:`dd`,ড:`D`,দ:`d`,"।":`.`,ঘ্ন:`Ghn`,গ্ধ:`Gdh`,গ্ণ:`GN`,গ্ন:`Gn`,গ্ম:`Gm`,গ্ল:`Gl`,জ্ঞ:`jNG`,ঘ:`Gh`,গ:`g`,হ্ণ:`hN`,হ্ন:`hn`,হ্ম:`hm`,হ্ল:`hl`,হ:`h`,জ্ঝ:`jjh`,ঝ:`jh`,জ্জ:`jj`,জ:`j`,ক্ষ্ণ:`kxN`,ক্ষ্ম:`kxm`,ক্ষ:`ksh`,কশ:`ksh`,ক্ক:`kk`,ক্ট:`kT`,ক্ত:`kt`,ক্ল:`kl`,ক্স:`ks`,খ:`kh`,ক:`k`,ল্ভ:`lv`,ল্ধ:`ldh`,লখ:`lkh`,লঘ:`lgh`,লফ:`lph`,ল্ক:`lk`,ল্গ:`lg`,ল্ট:`lT`,ল্ড:`lD`,ল্প:`lp`,ল্ম:`lm`,ল্ল:`ll`,ল্ব:`lb`,ল:`l`,ম্থ:`mth`,ম্ফ:`mf`,ম্ভ:`mv`,মপ্ল:`mpl`,ম্ন:`mn`,ম্প:`mp`,ম্ম:`mm`,ম্ল:`ml`,ম্ব:`mb`,ম:`m`,"০":`0`,"১":`1`,"২":`2`,"৩":`3`,"৪":`4`,"৫":`5`,"৬":`6`,"৭":`7`,"৮":`8`,"৯":`9`,ঙ্ক্ষ:`Ngkx`,ঞ্ছ:`nch`,ঙ্ঘ:`ngh`,ঙ্খ:`nkh`,ঞ্ঝ:`njh`,ঙ্গৌ:`ngOU`,ঙ্গৈ:`ngOI`,ঞ্চ:`nc`,ঙ্ক:`nk`,ঙ্ষ:`Ngx`,ঙ্গ:`ngo`,ঙ্ম:`Ngm`,ঞ্জ:`nj`,ন্ধ:`ndh`,ন্ঠ:`nTh`,ণ্ঠ:`NTh`,ন্থ:`nth`,ঙ্গা:`nga`,ঙ্গি:`ngi`,ঙ্গী:`ngI`,ঙ্গু:`ngu`,ঙ্গূ:`ngU`,ঙ্গে:`nge`,ঙ্গো:`ngO`,ণ্ঢ:`NDh`,নশ:`nsh`,ঙর:`Ngr`,ঞর:`NGr`,"ংর":`ngr`,ঙ:`Ng`,ঞ:`NG`,"ং":`ng`,ন্ন:`nn`,ণ্ণ:`NN`,ণ্ন:`Nn`,ন্ম:`nm`,ণ্ম:`Nm`,ন্দ:`nd`,ন্ট:`nT`,ণ্ট:`NT`,ন্ড:`nD`,ণ্ড:`ND`,ন্ত:`nt`,ন্স:`ns`,ন:`n`,ণ:`N`,"ৈ":`OI`,"ৌ":`OU`,"ো":`O`,ঐ:`OI`,ঔ:`OU`,অ:`o`,ও:`oo`,ফ্ল:`fl`,প্ট:`pT`,প্ত:`pt`,প্ন:`pn`,প্প:`pp`,প্ল:`pl`,প্স:`ps`,ফ:`f`,প:`p`,"ৃ":`rri`,ঋ:`rri`,রর‍্য:`rry`,"্র্য":`ry`,"্রর":`rr`,ড়্গ:`Rg`,ঢ়:`Rh`,ড়:`R`,র:`r`,"্র":`r`,শ্ছ:`Sch`,ষ্ঠ:`ShTh`,ষ্ফ:`Shf`,স্ক্ল:`skl`,স্খ:`skh`,স্থ:`sth`,স্ফ:`sf`,শ্চ:`Sc`,শ্ত:`St`,শ্ন:`Sn`,শ্ম:`Sm`,শ্ল:`Sl`,ষ্ক:`Shk`,ষ্ট:`ShT`,ষ্ণ:`ShN`,ষ্প:`Shp`,ষ্ম:`Shm`,স্প্ল:`spl`,স্ক:`sk`,স্ট:`sT`,স্ত:`st`,স্ন:`sn`,স্প:`sp`,স্ম:`sm`,স্ল:`sl`,শ:`S`,ষ:`Sh`,স:`s`,"ু":`u`,উ:`u`,অ্য:`oZ`,ত্থ:`tth`,ৎ:`tt`,ট্ট:`TT`,ট্ম:`Tm`,ঠ:`Th`,ত্ন:`tn`,ত্ম:`tm`,থ:`th`,ত্ত:`tt`,ট:`T`,ত:`t`,অ্যা:`AZ`,"া":`a`,আ:`a`,য়া:`ya`,য়:`y`,"ি":`i`,ই:`i`,"ী":`ee`,ঈ:`ee`,"ূ":`uu`,ঊ:`uu`,"ে":`e`,এ:`e`,য:`z`,"্য":`Z`,ইয়:`y`,ওয়:`w`,"্ব":`w`,এক্স:`x`,"ঃ":`:`,"ঁ":`nn`,"্‌":``,"˚":`0`,"¹":`1`,"²":`2`,"³":`3`,"⁴":`4`,"⁵":`5`,"⁶":`6`,"⁷":`7`,"⁸":`8`,"⁹":`9`,"₀":`0`,"₁":`1`,"₂":`2`,"₃":`3`,"₄":`4`,"₅":`5`,"₆":`6`,"₇":`7`,"₈":`8`,"₉":`9`,"௦":`0`,"௧":`1`,"௨":`2`,"௩":`3`,"௪":`4`,"௫":`5`,"௬":`6`,"௭":`7`,"௮":`8`,"௯":`9`,"௰":`10`,"௱":`100`,"௲":`1000`,Ꜳ:`AA`,ꜳ:`aa`,Ꜵ:`AO`,ꜵ:`ao`,Ꜷ:`AU`,ꜷ:`au`,Ꜹ:`AV`,ꜹ:`av`,Ꜻ:`av`,ꜻ:`av`,Ꜽ:`AY`,ꜽ:`ay`,ȸ:`db`,ʣ:`dz`,ʥ:`dz`,ʤ:`dezh`,"🙰":`et`,ﬀ:`ff`,ﬃ:`ffi`,ﬄ:`ffl`,ﬁ:`fi`,ﬂ:`fl`,ʩ:`feng`,ʪ:`ls`,ʫ:`lz`,ɮ:`lezh`,ȹ:`qp`,ʨ:`tc`,ʦ:`ts`,ʧ:`tesh`,Ꝏ:`OO`,ꝏ:`oo`,ﬆ:`st`,ﬅ:`st`,Ꜩ:`TZ`,ꜩ:`tz`,ᵫ:`ue`,Aι:`Ai`,αι:`ai`,ἀ:`a`,ἁ:`a`,ἂ:`a`,ἃ:`a`,ἄ:`a`,ἅ:`a`,ἆ:`a`,ἇ:`a`,Ἀ:`A`,Ἁ:`A`,Ἂ:`A`,Ἃ:`A`,Ἄ:`A`,Ἅ:`A`,Ἆ:`A`,Ἇ:`A`,ᾰ:`a`,ᾱ:`a`,ᾲ:`a`,ᾳ:`a`,ᾴ:`a`,ᾶ:`a`,ᾷ:`a`,Ᾰ:`A`,Ᾱ:`A`,Ὰ:`A`,Ά:`A`,ᾼ:`A`,A̧:`A`,a̧:`a`,Ⱥ:`A`,ⱥ:`a`,Ȧ:`A`,ȧ:`a`,Ɓ:`B`,C̈:`C`,c̈:`c`,C̨:`C`,c̨:`c`,Ȼ:`C`,ȼ:`c`,C̀:`C`,c̀:`c`,C̣:`C`,c̣:`c`,C̄:`C`,c̄:`c`,C̃:`C`,c̃:`c`,Ȩ:`E`,ȩ:`e`,Ɇ:`E`,ɇ:`e`,I̧:`I`,i̧:`i`,Ɨ:`I`,ɨ:`i`,i:`i`,J́́:`J`,j́:`j`,J̀̀:`J`,j̀:`j`,J̈:`J`,j̈:`j`,J̧:`J`,j̧:`j`,J̨:`J`,j̨:`j`,Ɉ:`J`,ɉ:`j`,J̌:`J`,ǰ:`j`,J̇:`J`,j:`j`,J̣:`J`,j̣:`j`,J̄:`J`,j̄:`j`,J̃:`J`,j̃:`j`,ĸ:`k`,L̀:`L`,l̀:`l`,L̂:`L`,l̂:`l`,L̈:`L`,l̈:`l`,L̨:`L`,l̨:`l`,Ƚ:`L`,ƚ:`l`,L̇:`L`,l̇:`l`,Ḷ:`L`,ḷ:`l`,L̄:`L`,l̄:`l`,L̃:`L`,l̃:`l`,Ŋ:`N`,ŋ:`n`,Ǹ:`N`,ǹ:`n`,N̂:`N`,n̂:`n`,N̈:`N`,n̈:`n`,N̨:`N`,n̨:`n`,Ꞥ:`N`,ꞥ:`n`,Ṅ:`N`,ṅ:`n`,Ṇ:`N`,ṇ:`n`,N̄:`N`,n̄:`n`,O̧:`O`,o̧:`o`,Ǫ:`O`,ǫ:`o`,Ɵ:`O`,ɵ:`o`,Ȯ:`O`,ȯ:`o`,S̀:`S`,s̀:`s`,Ŝ̀:`S`,S̈:`S`,s̈:`s`,S̨:`S`,s̨:`s`,Ꞩ:`S`,ꞩ:`s`,Ṡ:`S`,ṡ:`s`,Ṣ:`S`,ṣ:`s`,S̄:`S`,s̄:`s`,S̃:`S`,s̃:`s`,T́:`T`,t́:`t`,T̀:`T`,t̀:`t`,T̂:`T`,t̂:`t`,T̈:`T`,ẗ:`t`,T̨:`T`,t̨:`t`,Ⱦ:`T`,ⱦ:`t`,Ṫ:`T`,ṫ:`t`,Ṭ:`T`,ṭ:`t`,T̄:`T`,t̄:`t`,T̃:`T`,t̃:`t`,U̧:`U`,u̧:`u`,Ʉ:`U`,ʉ:`u`,U̇:`U`,u̇:`u`,Ʊ:`U`,ʊ:`u`,Ẁ:`W`,ẁ:`w`,Ẃ:`W`,ẃ:`w`,Ẅ:`W`,ẅ:`w`,Ꙗ:`Ja`,ꙗ:`ja`,Y̧:`Y`,y̧:`y`,Y̨:`Y`,y̨:`y`,Ɏ:`Y`,ɏ:`y`,Y̌:`Y`,y̌:`y`,Ẏ:`Y`,ẏ:`y`,Ȳ:`Y`,ȳ:`y`,Z̀:`Z`,z̀:`z`,Ẑ:`Z`,ẑ:`z`,Z̈:`Z`,z̈:`z`,Z̧:`Z`,z̧:`z`,Z̨:`Z`,z̨:`z`,Ƶ:`Z`,ƶ:`z`,Ẓ:`Z`,ẓ:`z`,Z̄:`Z`,z̄:`z`,Z̃:`Z`,z̃:`z`,"\xA0":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `,"\u2028":` `,"\u2029":` `,"​":` `," ":` `," ":` `,"　":` `,ﾠ:` `,"«":`<<`,"»":`>>`,"‘":`'`,"’":`'`,"‚":`'`,"‛":`'`,"“":`"`,"”":`"`,"„":`"`,"‟":`"`,"‹":`'`,"›":`'`,"–":`-`,"—":`-`,"…":`...`,"€":`EUR`,$:`$`,"₢":`Cr`,"₣":`Fr.`,"£":`PS`,"₤":`L.`,ℳ:`M`,"₥":`mil`,"₦":`N`,"₧":`Pts`,"₨":`Rs`,රු:`LKR`,ரூ:`LKR`,"௹":`Rs`,रू:`NPR`,"₹":`Rs`,"૱":`Rs`,"₩":`W`,"₪":`NS`,"₸":`KZT`,"₫":`D`,"֏":`AMD`,"₭":`K`,"₺":`TL`,"₼":`AZN`,"₮":`T`,"₯":`Dr`,"₲":`PYG`,"₾":`GEL`,"₳":`ARA`,"₴":`UAH`,"₽":`RUB`,"₵":`GHS`,"₡":`CL`,"¢":`c`,"¥":`YEN`,円:`JPY`,"৳":`BDT`,元:`CNY`,"﷼":`SAR`,"៛":`KR`,"₠":`ECU`,"¤":`$?`,"฿":`THB`,"؋":`AFN`};function Zc(e,t=Xc){e=e.normalize(`NFC`);let n=``,r;for(let i=0;i<e.length;i++)r=e.charAt(i),n+=typeof t[r]==`string`?t[r]:r;return n}function Qc(e,t={}){let n={allowNonAlphaStart:!1,handleCasing:`camel`,...t};var r=e.replace(/<(.*?)>/g,``);r=r.replace(/['"‘’“”ʻ\[\]\(\)\{\}:]/g,``),r=r.toLowerCase(),r=Zc(r),n.allowNonAlphaStart||(r=r.replace(/^[^a-z]+/,``));let i=r.split(/[^a-z0-9]+/).filter(Boolean);if(r=``,n.handleCasing===`snake`)return i.join(`_`);for(let e=0;e<i.length;e++)n.handleCasing!==`pascal`&&e===0?r+=i[e]:r+=i[e].charAt(0).toUpperCase()+i[e].substring(1);return r}function $c(e,t={}){let n={prefix:``,suffix:``,...t},r=Qc(e,{handleCasing:`snake`}).toUpperCase();return r?`${n.prefix}${r}${n.suffix}`:``}function el(e){let t=e.replace(/<(.*?)>/g,``);return t=t.toLowerCase(),t=Zc(t),t=t.replace(/^[^a-z]+/,``),t=t.replace(/[^a-z0-9]+$/,``),t.split(/[^a-z0-9]+/).filter(Boolean).join(`-`)}function tl(e){return e.charAt(0).toUpperCase()+e.slice(1)}function nl(){return Math.floor(Math.random()*1e6)}var rl=new WeakMap,il=class e{constructor(){this.queue=[],this.workers=[],w(this,rl,null),T(rl,this,new AbortController);for(let e=0;e<3;e++)this.workers.push(new cl(this))}load(t=document,n=`[data-sizes]`){t.querySelectorAll(n).forEach(t=>{if(Jc(t))this.addToQueue(t);else{let n=`thumb${nl()}`;e.invisibleThumbs[n]=[this,t];let r=()=>{e.invisibleThumbs[n]&&Jc(t)&&(delete e.invisibleThumbs[n],this.addToQueue(t))};document.addEventListener(`scroll`,r,{signal:E(rl,this)?.signal}),window.addEventListener(`resize`,r,{signal:E(rl,this)?.signal})}})}addToQueue(e){this.queue.push(e),this.workers.forEach(e=>{e.active||e.loadNext()})}static retryAll(){for(let t in e.invisibleThumbs){let n=e.invisibleThumbs[t];if(!n)continue;let[r,i]=n;delete e.invisibleThumbs[t],r.load(i.parentElement??document)}}destroy(){this.workers.forEach(e=>e.deactivate()),E(rl,this)?.abort()}};il.invisibleThumbs={};var al=new WeakMap,ol=new WeakMap,sl=new WeakMap,cl=class{constructor(e){this.active=!1,this.container=void 0,w(this,al,null),w(this,ol,null),w(this,sl,null),T(al,this,e)}activate(){this.active||(this.active=!0,this.clearInterval(),T(ol,this,setInterval(()=>{this.loadNextIfRemoved()},500)))}deactivate(){this.active&&(this.active=!1,this.clearInterval(),this.clearTimeout())}clearInterval(){E(ol,this)&&(clearInterval(E(ol,this)),T(ol,this,null))}clearTimeout(){E(sl,this)&&(clearTimeout(E(sl,this)),T(sl,this,null))}loadNext(){if(this.clearTimeout(),this.container=E(al,this)?.queue.shift(),this.container===void 0){this.deactivate();return}if(this.loadNextIfRemoved())return;if(this.container.querySelectorAll(`img`).length>0){this.loadNext();return}this.activate(),T(sl,this,setTimeout(()=>{this.loadNext()},3e4));let e=document.createElement(`img`);e.sizes=this.container.getAttribute(`data-sizes`)??``,e.srcset=this.container.getAttribute(`data-srcset`)??``,e.alt=this.container.getAttribute(`data-alt`)??``,e.setAttribute(`data-animated`,this.container.getAttribute(`data-animated`)??``),e.src=this.container.getAttribute(`data-src`)??``,e.onload=()=>this.loadNext(),e.onabort=()=>this.loadNext(),e.onerror=()=>this.loadNext(),this.container.appendChild(e)}loadNextIfRemoved(){return this.container&&!document.body.contains(this.container)?(this.loadNext(),!0):!1}},ll=_`
  :host {
    display: contents;
  }

  .cp-chip {
    --_min-height: var(--c-chip-height, none);
    --_thumb-size: calc(24rem / 16);
    --_radius: var(--c-chip-radius, var(--c-radius-md));
    --_fill: var(--c-color-fill-quiet, var(--c-surface-raised));
    padding: 0;
    display: inline-flex;
    min-width: auto;
    border-radius: var(--_radius);
    align-items: center;
    box-shadow: var(--c-chip-shadow, var(--c-shadow-sm));

    /* colorable styles */
    color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
    border-width: var(--c-chip-border-width, 1px);
    border-style: var(--c-chip-border-style, solid);
    border-color: var(
      --c-color-border-quiet,
      var(--c-color-neutral-border-quiet)
    );
    background-color: var(--c-color-fill-quiet, var(--c-surface-raised));
    overflow: clip;
  }

  .cp-chip__body ::slotted(a) {
    text-decoration: none;
    font-weight: bold;
    display: flex;
  }

  .cp-chip[appearance='plain'],
  .cp-chip--plain {
    --_min-height: none;
    padding-block: 0;
    padding-inline: 0;
    border-color: transparent;
    background-color: transparent;
    box-shadow: none;
  }

  .cp-chip[size='small'],
  .cp-chip--small {
    /*padding-block: calc(var(--c-spacing-xs) / 2);*/
  }

  .cp-chip[size='medium'],
  .cp-chip--medium {
    padding-block: 0;
    min-height: var(--c-size-control-md);
  }

  .cp-chip__prefix,
  .cp-chip__body,
  .cp-chip__suffix {
    display: inline-flex;
    flex-direction: column;
    min-height: var(--_min-height);
  }

  .cp-chip__body {
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .cp-chip__prefix {
    padding-inline-end: var(--c-spacing-sm);
  }

  .cp-chip__suffix {
    padding-inline-start: var(--c-spacing-md);
  }

  .cp-chip__indicator {
    display: inline-flex;
    padding-inline: var(--c-spacing-sm);
  }

  .cp-chip__thumbnail {
    padding: var(--c-spacing-sm);
    /*border-radius: calc(var(--_radius) - var(--c-spacing-xs));*/
  }
`,ul=new WeakMap,dl=class extends g{constructor(...e){super(...e),this.size=``,this.variant=Lr.Neutral,this.appearance=r.OutlineFill,this.icon=null,w(this,ul,new il)}renderPrefix(){let e=!!this.querySelector(`[slot="thumbnail"]`),t=!!this.querySelector(`[slot="indicator"]`);return m` <div class="cp-chip__prefix" part="prefix">
      <slot name="prefix">
        ${e?m`<slot class="cp-chip__thumbnail" name="thumbnail"></slot>`:h}
        ${t?m`<slot class="cp-chip__indicator" name="indicator"></slot>`:h}
        <slot class="cp-chip__icon" name="icon">
          ${this.icon?m` <craft-icon name="${this.icon}"></craft-icon>`:h}
        </slot>
      </slot>
    </div>`}firstUpdated(e){super.firstUpdated(e),E(ul,this).load(this)}render(){let e=!!this.querySelector(`[slot="prefix"]`)||!!this.querySelector(`[slot="icon"]`)||!!this.querySelector(`[slot="thumbnail"]`)||!!this.querySelector(`[slot="indicator"]`)||this.icon,t=!!this.querySelector(`[slot="suffix"]`);return m`
      <div
        part="chip"
        class="${c({"cp-chip":!0,"cp-chip--small":this.size===`small`,"cp-chip--medium":this.size===`medium`,"cp-chip--large":this.size===`large`,"cp-chip--plain":this.appearance===r.Plain})}"
      >
        ${e?this.renderPrefix():h}
        <div class="cp-chip__body">
          <slot></slot>
        </div>
        ${t?m` <div class="cp-chip__suffix" part="suffix">
              <slot name="suffix"></slot>
            </div>`:h}
      </div>
    `}};dl.styles=[ll],n([v()],dl.prototype,`size`,void 0),n([v({reflect:!0})],dl.prototype,`variant`,void 0),n([v({reflect:!0})],dl.prototype,`appearance`,void 0),n([v()],dl.prototype,`icon`,void 0),customElements.get(`craft-chip`)||customElements.define(`craft-chip`,dl);var fl=_`
  --_border-width: var(
    --c-input-border-width,
    var(--c-form-control-border-width)
  );
  font: inherit;
  color: var(--c-input-text, var(--c-text-default));
  position: relative;
  min-height: calc(
    var(--c-input-height, var(--c-size-control-md)) - 2 * var(--_border-width)
  );
  border-width: var(--_border-width);
  border-style: var(--c-input-border-style, var(--c-form-control-border-style));
  border-color: var(--c-input-border-color, var(--c-form-control-border-color));
  border-radius: var(--c-input-radius, var(--c-radius-sm));
  padding-block: 0;
  width: 100%;
  flex: 1 1 auto;
  background-color: var(--c-input-fill, var(--c-form-control-fill));
  box-shadow: var(--c-input-shadow);
  overflow: clip;

  /* Detect mobile devices and up the font size of inputs to avoid zoom on focus */
  @media (pointer: none), (pointer: coarse) {
    font-size: 1rem;
  }
`,pl=_`
  :host(:not([label-sr-only]))
    .form-field__group-one
    .form-field__label
    slot:not(:empty) {
    margin-block-end: var(--c-spacing-sm);
  }

  :host([has-feedback-for='error']) {
    color: var(--c-color-danger-on-normal);

    ::slotted([slot='input']) {
      border-color: var(--c-color-danger-border-loud);
    }
  }

  ::slotted(label) {
    line-height: 1;
    font-weight: bold;
    font-size: var(--text-sm);
  }

  .form-field__help-text {
    font-size: 1em;
    color: var(--c-text-quiet);
  }

  ::slotted([slot='after']) {
    margin-block-start: var(--c-spacing-sm);
  }
`,ml=_`
  ${pl}

  :host([monospace]) .input-group__container {
    font-family: var(--c-font-mono);
    font-size: 0.9em;
  }

  ::slotted([slot='input']) {
    font: inherit;
    padding-block: 0;
    border: none;
    appearance: none;
    padding-inline: var(--c-input-spacing-inline);
    background-color: transparent;
  }

  .input-group__container {
    ${fl}
  }

  .input-group__prefix,
  .input-group__suffix {
    padding-inline: var(--c-input-spacing-inline);
    display: grid;
    place-items: center;
  }

  .input-group__prefix + .input-group__input {
    border-radius-start-start: 0;
    border-radius-start-end: 0;
  }

  :host([size~='small']) ::slotted([slot='input']) {
    --c-input-height: var(--c-size-control-sm);
    --c-input-spacing-inline: var(--c-spacing-sm);
  }

  :host([center]) ::slotted([slot='input']) {
    text-align: center;
  }

  ::slotted([slot='input']) {
    width: 100%;
  }
`,hl=class extends Oc(g){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:`tabindex`}}}constructor(){super(),this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`listbox`)}createRenderRoot(){return this}},gl=L(e=>class extends fc(sc(Ac(ii(Dc(e))))){static get properties(){return{orientation:String,selectionFollowsFocus:{type:Boolean,attribute:`selection-follows-focus`},rotateKeyboardNavigation:{type:Boolean,attribute:`rotate-keyboard-navigation`},hasNoDefaultSelected:{type:Boolean,reflect:!0,attribute:`has-no-default-selected`},_noTypeAhead:{type:Boolean}}}static get styles(){return[...super.styles||[],_`
          :host {
            display: block;
          }

          :host([hidden]) {
            display: none;
          }

          :host([disabled]) {
            color: #adadad;
          }

          :host([orientation='horizontal']) ::slotted([role='listbox']) {
            display: flex;
          }
        `]}_inputGroupInputTemplate(){return m`
        <div class="input-group__input">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      `}static get scopedElements(){return{...super.scopedElements,"lion-options":hl}}get slots(){return{...super.slots,input:()=>{let e=this.createScopedElement(`lion-options`);return e.setAttribute(`data-tag-name`,`lion-options`),e.registrationTarget=this,e}}}get _inputNode(){return this.querySelector(`[slot="input"]`)}get _listboxNode(){return this._inputNode}get _listboxActiveDescendantNode(){return this._listboxNode.querySelector(`#${this._listboxActiveDescendant}`)}get _listboxSlot(){return this.shadowRoot.querySelector(`slot[name=input]`)}get _scrollTargetNode(){return this._listboxNode}get _activeDescendantOwnerNode(){return this._listboxNode}get activeIndex(){return this.formElements.findIndex(e=>e.active===!0)}set activeIndex(e){if(this.formElements[e]){let t=this.formElements[e];this.__setChildActive(t)}else this.__setChildActive(null)}get checkedIndex(){let e=this.formElements;return this.multipleChoice?e.filter(e=>e.checked).map(t=>e.indexOf(t)):e.indexOf(e.find(e=>e.checked))}set checkedIndex(e){this.setCheckedIndex(e)}constructor(){super(),this.hasNoDefaultSelected=!1,this.orientation=`vertical`,this.rotateKeyboardNavigation=!1,this.selectionFollowsFocus=!1,this._noTypeAhead=!1,this._typeAheadTimeout=1e3,this._listboxActiveDescendant=null,this.__hasInitialSelectedFormElement=!1,this._repropagationRole=`choice-group`,this._listboxReceivesNoFocus=!1,this._oldModelValue=void 0,this._listboxOnKeyDown=this._listboxOnKeyDown.bind(this),this._listboxOnClick=this._listboxOnClick.bind(this),this._listboxOnKeyUp=this._listboxOnKeyUp.bind(this),this._onChildActiveChanged=this._onChildActiveChanged.bind(this),this.__proxyChildModelValueChanged=this.__proxyChildModelValueChanged.bind(this),this.__preventScrollingWithArrowKeys=this.__preventScrollingWithArrowKeys.bind(this),this.__typedChars=[]}connectedCallback(){this._listboxNode&&(this._listboxNode.registrationTarget=this),super.connectedCallback(),this._setupListboxNode(),this.__setupEventListeners(),this.registrationComplete.then(()=>{this.__initInteractionStates()})}firstUpdated(e){super.firstUpdated(e),this.__moveOptionsToListboxNode(),this.registrationComplete.then(()=>{this._initialModelValue=this.modelValue}),new MutationObserver(()=>{this._onListboxContentChanged()}).observe(this._listboxNode,{childList:!0})}updated(e){super.updated(e),e.has(`disabled`)&&(this.disabled?this.__requestOptionsToBeDisabled():this.__retractRequestOptionsToBeDisabled())}disconnectedCallback(){super.disconnectedCallback(),this._teardownListboxNode(),this.__teardownEventListeners()}setCheckedIndex(e){if(this.multipleChoice&&Array.isArray(e)){this._uncheckChildren(this.formElements.filter(t=>t===e)),e.forEach(e=>{this.formElements[e]&&(this.formElements[e].checked=!this.formElements[e].checked)});return}typeof e==`number`&&(e===-1&&this._uncheckChildren(),this.formElements[e]&&(this.formElements[e].disabled?this._uncheckChildren():this.multipleChoice?this.formElements[e].checked=!this.formElements[e].checked:this.formElements[e].checked=!0))}addFormElement(e,t){super.addFormElement(e,t),e.id=e.id||`${this.localName}-option-${si()}`,this.disabled&&e.makeRequestToBeDisabled(),this.__setAttributeForAllFormElements(`aria-setsize`,this.formElements.length),this.formElements.forEach((e,t)=>{e.setAttribute(`aria-posinset`,t+1)}),this.__proxyChildModelValueChanged({target:e}),this.resetInteractionState()}resetInteractionState(){super.resetInteractionState(),this.submitted=!1}reset(){this.modelValue=this._initialModelValue,this.activeIndex=-1,this.resetInteractionState()}clear(){super.clear(),this.setCheckedIndex(-1)}_handleTypeAhead(e,{setAsChecked:t}){let{key:n,code:r}=e;if(r.startsWith(`Key`)||r.startsWith(`Digit`)||r.startsWith(`Numpad`)){e.preventDefault(),this.__typedChars.push(n);let r=this.__typedChars.join(``),i=this.formElements.findIndex(e=>e.modelValue.value.toLowerCase().startsWith(r));i>=0&&(t&&this.setCheckedIndex(i),this.activeIndex=i),this.__pendingTypeAheadTimeout&&window.clearTimeout(this.__pendingTypeAheadTimeout),this.__pendingTypeAheadTimeout=setTimeout(()=>{this.__typedChars=[]},this._typeAheadTimeout)}}_getCheckedElements(){return this.formElements.filter(e=>e.checked)}_setupListboxNode(){this._listboxNode?this.__setupListboxNodeInteractions():this._listboxSlot&&this._listboxSlot.addEventListener(`slotchange`,()=>{this.__setupListboxNodeInteractions()})}_onListboxContentChanged(){}_teardownListboxNode(){this._listboxNode&&(this._listboxNode.removeEventListener(`keydown`,this._listboxOnKeyDown),this._listboxNode.removeEventListener(`click`,this._listboxOnClick),this._listboxNode.removeEventListener(`keyup`,this._listboxOnKeyUp))}_getNextEnabledOption(e,t=1){return this.__getEnabledOption(e,t)}_getPreviousEnabledOption(e,t=-1){return this.__getEnabledOption(e,t)}_onChildActiveChanged({target:e}){e.active===!0&&this.__setChildActive(e)}_listboxOnKeyDown(e){if(this.disabled)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});let{key:t}=e;switch(t){case` `:case`Enter`:if(t===` `&&this._listboxReceivesNoFocus||(t===` `&&e.preventDefault(),!this.formElements[this.activeIndex])||this.formElements[this.activeIndex].disabled)return;this.formElements[this.activeIndex].href&&this.formElements[this.activeIndex].click(),this.setCheckedIndex(this.activeIndex);break;case`ArrowUp`:e.preventDefault(),this.orientation===`vertical`&&(this.activeIndex=this._getPreviousEnabledOption(this.activeIndex));break;case`ArrowLeft`:if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.orientation===`horizontal`&&(this.activeIndex=this._getPreviousEnabledOption(this.activeIndex));break;case`ArrowDown`:e.preventDefault(),this.orientation===`vertical`&&(this.activeIndex=this._getNextEnabledOption(this.activeIndex));break;case`ArrowRight`:if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.orientation===`horizontal`&&(this.activeIndex=this._getNextEnabledOption(this.activeIndex));break;case`Home`:if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.activeIndex=this._getNextEnabledOption(0,0);break;case`End`:if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.activeIndex=this._getPreviousEnabledOption(this.formElements.length-1,0);break;default:this._noTypeAhead||this._handleTypeAhead(e,{setAsChecked:this.selectionFollowsFocus&&!this.multipleChoice})}[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Home`,`End`].includes(t)&&this.selectionFollowsFocus&&!this.multipleChoice&&this.setCheckedIndex(this.activeIndex)}_listboxOnClick(e){}_listboxOnKeyUp(e){if(this.disabled)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});let{key:t}=e;switch(t){case`ArrowUp`:case`ArrowDown`:case`Home`:case`End`:case`Enter`:e.preventDefault()}}_onLabelClick(){this._listboxNode.focus()}_scrollIntoView(e,t){e.scrollIntoView({behavior:`smooth`,block:`nearest`})}__setupEventListeners(){this._listboxNode.addEventListener(`active-changed`,this._onChildActiveChanged),this._listboxNode.addEventListener(`model-value-changed`,this.__proxyChildModelValueChanged)}__teardownEventListeners(){this._listboxNode.removeEventListener(`active-changed`,this._onChildActiveChanged),this._listboxNode.removeEventListener(`model-value-changed`,this.__proxyChildModelValueChanged)}__setChildActive(e){if(this.formElements.forEach(t=>{t.active=e===t}),!e){this._activeDescendantOwnerNode.removeAttribute(`aria-activedescendant`);return}this._activeDescendantOwnerNode.setAttribute(`aria-activedescendant`,e.id),this._scrollIntoView(e,this._scrollTargetNode)}_uncheckChildren(e=[]){let t=Array.isArray(e)?e:[e];this.formElements.forEach(e=>{t.includes(e)||(e.checked=!1)})}__onChildCheckedChanged(e){let{target:t}=e;e.stopPropagation&&e.stopPropagation(),t.checked&&!this.multipleChoice&&this._uncheckChildren(t)}__setAttributeForAllFormElements(e,t){this.formElements.forEach(n=>{n.setAttribute(e,t)})}__proxyChildModelValueChanged(e){e.stopPropagation&&e.stopPropagation(),this.__onChildCheckedChanged(e),this.requestUpdate(`modelValue`,this._oldModelValue),e.detail&&e.detail.formPath&&this.dispatchEvent(new CustomEvent(`model-value-changed`,{detail:{formPath:e.detail.formPath,isTriggeredByUser:e.detail.isTriggeredByUser||this._isHandlingUserInput,element:e.target}})),this._oldModelValue=this.modelValue}__getEnabledOption(e,t){let n=e=>t===1?e<this.formElements.length:e>=0;for(let r=e+t;n(r);r+=t)if(this.formElements[r]&&!this.formElements[r].hasAttribute(`aria-hidden`))return r;if(this.rotateKeyboardNavigation){let e=t===-1?this.formElements.length-1:0;for(let r=e;n(r);r+=t)if(this.formElements[r]&&!this.formElements[r].hasAttribute(`aria-hidden`))return r}return e}__moveOptionsToListboxNode(){let e=this.shadowRoot.getElementById(`options-outlet`);e&&(ni(this,this._listboxNode),e.addEventListener(`slotchange`,()=>{ni(this,this._listboxNode)}))}__preventScrollingWithArrowKeys(e){if(this.disabled)return;let{key:t}=e;switch(t){case`ArrowUp`:case`ArrowDown`:case`Home`:case`End`:e.preventDefault()}}__setupListboxNodeInteractions(){this._listboxNode.setAttribute(`role`,`listbox`),this._listboxNode.setAttribute(`aria-orientation`,this.orientation),this._listboxNode.setAttribute(`aria-multiselectable`,`${this.multipleChoice}`),this._listboxNode.setAttribute(`tabindex`,`0`),this._listboxNode.addEventListener(`click`,this._listboxOnClick),this._listboxNode.addEventListener(`keyup`,this._listboxOnKeyUp),this._listboxNode.addEventListener(`keydown`,this._listboxOnKeyDown),this._scrollTargetNode.addEventListener(`keydown`,this.__preventScrollingWithArrowKeys)}__requestOptionsToBeDisabled(){this.formElements.forEach(e=>{e.makeRequestToBeDisabled&&e.makeRequestToBeDisabled()})}__retractRequestOptionsToBeDisabled(){this.formElements.forEach(e=>{e.retractRequestToBeDisabled&&e.retractRequestToBeDisabled()})}__initInteractionStates(){this.initInteractionState()}}),_l=class extends gl(Ss(wc(Sc(g)))){get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,focused:this.focused}}get _focusableNode(){return this._inputNode}},vl=class extends Ur(Mc(dc(ii(g)))){static get properties(){return{active:{type:Boolean,reflect:!0}}}static get styles(){return[_`
        :host {
          display: block;
          background-color: white;
          padding: 4px;
          cursor: default;
        }

        :host([hidden]) {
          display: none;
        }

        :host(:hover) {
          background-color: #eee;
        }
        :host([active]) {
          background-color: #ddd;
        }

        :host([checked]) {
          background-color: #bde4ff;
        }

        :host([disabled]) {
          color: #adadad;
        }
      `]}get slots(){return{}}constructor(){super(),this.active=!1,this.__onClick=this.__onClick.bind(this),this.__registerEventListeners()}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`active`&&this.active!==t&&this.dispatchEvent(new Event(`active-changed`,{bubbles:!0}))}updated(e){super.updated(e),e.has(`checked`)&&this.setAttribute(`aria-selected`,`${this.checked}`),e.has(`disabled`)&&this.setAttribute(`aria-disabled`,`${this.disabled}`)}render(){return m`
      <div class="choice-field__label">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`)}__registerEventListeners(){this.addEventListener(`click`,this.__onClick)}__unRegisterEventListeners(){this.removeEventListener(`click`,this.__onClick)}__onClick(){if(this.disabled)return;let e=this._parentFormGroup;this._isHandlingUserInput=!0,e&&e.multipleChoice?(this.checked=!this.checked,this.active=!this.active):(this.checked=!0,this.active=!0),this._isHandlingUserInput=!1}},yl=_`
  :host([checked]) {
    background-color: var(--c-color-neutral-fill-loud);
    color: var(--c-color-neutral-on-loud);
  }

  :host {
    --c-option-wide-threshold: 640;
    padding-inline: var(--c-spacing-md);
    padding-block: var(--c-spacing-sm);
    font: inherit;
    border-radius: var(--c-radius-sm);
  }

  :host(:hover) {
    background-color: var(--c-color-neutral-fill-normal);
    color: var(--c-color-neutral-on-normal);
  }

  :host([active]) {
    background-color: var(--c-color-neutral-fill-loud);
    color: var(--c-color-neutral-on-loud);
  }

  :host([checked]) {
    background-color: var(--c-color-neutral-fill-loud);
    color: var(--c-color-neutral-on-loud);
  }

  :host([disabled]) {
    color: var(--c-color-neutral-on-normal);
  }

  .hint {
    color: color-mix(in srgb, currentColor, transparent 25%);
    align-self: end;
    font-size: 0.8em;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  :host([active]) .hint {
    color: var(--c-color-neutral-on-loud);
  }

  .choice-field__label {
    display: grid;
    max-width: 100%;
  }

  :host([wide]) .choice-field__label {
    align-items: baseline;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,bl=new WeakMap,xl=class extends vl{static get styles(){return[...vl.styles,yl]}constructor(){super(),this.hint=null,w(this,bl,640),T(bl,this,parseInt(getComputedStyle(this).getPropertyValue(`--c-option-wide-threshold`)||`640`,10))}connectedCallback(){super.connectedCallback();let e=this.getBoundingClientRect().width??0;this.toggleAttribute(`wide`,e>=E(bl,this))}render(){return m`
      <div class="choice-field__label">
        <slot></slot>
        ${this.hint?m`<span class="hint">${this.hint}</span>`:h}
        <slot name="suffix"></slot>
      </div>
    `}};n([v()],xl.prototype,`hint`,void 0),customElements.get(`craft-option`)||customElements.define(`craft-option`,xl);var Sl=new WeakMap;function Cl(e,t){Array.from(e.childNodes).forEach(n=>{if(n.nodeName===`#text`){let r=RegExp(`^(.*?)(${t})(.*)$`,`i`),i=n.nodeValue.match(r);if(i){let t=document.createTextNode(i[1]);e.appendChild(t);let r=document.createElement(`b`);r.textContent=i[2],e.appendChild(r);let a=document.createTextNode(i[3]);e.appendChild(a),e.removeChild(n),Sl.set(e,()=>{e.appendChild(n),e.contains(t)&&t.parentNode!==null&&t.parentNode.removeChild(t),e.contains(r)&&r.parentNode!==null&&r.parentNode.removeChild(r),e.contains(a)&&a.parentNode!==null&&a.parentNode.removeChild(a)})}}else Cl(n,t)})}function wl(e){Sl.has(e)&&Sl.get(e)(),Array.from(e.childNodes).forEach(e=>{e.nodeName===`#text`?Sl.has(e)&&Sl.get(e)():wl(e)})}var Tl=class extends yc{static get validatorName(){return`MatchesOption`}execute(e,t,n){return n?.node.modelValue instanceof uc}};function El(e){return Array.isArray(e)?e:[e]}var Dl=L(e=>class extends Ac(e){static get properties(){return{allowCustomChoice:{type:Boolean,attribute:`allow-custom-choice`},modelValue:{type:Object}}}get modelValue(){return this.__getChoicesFrom(super.modelValue)}set modelValue(e){if(super.modelValue=e,e==null||e===``)this._customChoices=new Set;else if(this.allowCustomChoice){let t=this.modelValue;this._customChoices=new Set(El(e)),this.requestUpdate(`modelValue`,t)}}get formattedValue(){return this.__getChoicesFrom(super.formattedValue)}set formattedValue(e){if(super.formattedValue=e,e==null)this._customChoices=new Set;else if(this.allowCustomChoice){let t=this.modelValue;this._customChoices=new Set(El(e).map(e=>this.formElements.find(t=>t.formattedValue===e)?.modelValue||e)),this.requestUpdate(`modelValue`,t)}}get serializedValue(){return this.__getChoicesFrom(super.serializedValue)}set serializedValue(e){if(super.serializedValue=e,e==null)this._customChoices=new Set;else if(this.allowCustomChoice){let t=this.modelValue;this._customChoices=new Set(El(e).map(e=>this.formElements.find(t=>t.serializedValue===e)?.modelValue||e)),this.requestUpdate(`modelValue`,t)}}get customChoices(){if(!this.allowCustomChoice)return[];let e=this._getCheckedElements();return Array.from(this._customChoices).filter(t=>!e.some(e=>e.choiceValue===t))}constructor(){super(),this.allowCustomChoice=!1,this._customChoices=new Set}__getChoicesFrom(e){let t=e;return this.allowCustomChoice?this.multipleChoice?[...El(t),...this.customChoices]:t===``?this._customChoices.values().next().value||``:t:t}_isEmpty(){return super._isEmpty()&&this._customChoices.size===0}clear(){this._customChoices=new Set,super.clear()}parser(e){return this.allowCustomChoice&&Array.isArray(e)?e.filter(e=>e.trim()!==``):e}}),Ol=new WeakMap,kl=class extends tc(qi(Dl(_l))){static get properties(){return{autocomplete:{type:String,reflect:!0},matchMode:{type:String,attribute:`match-mode`},showAllOnEmpty:{type:Boolean,attribute:`show-all-on-empty`},requireOptionMatch:{type:Boolean},allowCustomChoice:{type:Boolean,attribute:`allow-custom-choice`},__shouldAutocompleteNextUpdate:Boolean}}static get styles(){return[...super.styles,_`
        .input-group__input {
          display: flex;
          flex: 1;
        }

        .input-group__container {
          display: flex;
          border-bottom: 1px solid;
        }

        * > ::slotted([slot='input']) {
          outline: none;
          flex: 1;
          box-sizing: border-box;
          border: none;
          width: 100%;
          /* border-bottom: 1px solid; */
        }

        * > ::slotted([role='listbox']) {
          max-height: 200px;
          display: block;
          overflow: auto;
          z-index: 1;
          background: white;
        }
      `]}static get localizeNamespaces(){return[{"lion-combobox":e=>{switch(e){case`bg-BG`:case`bg`:return R(()=>import(`./bg-AbONN6Co.js`),[],import.meta.url);case`cs-CZ`:case`cs`:return R(()=>import(`./cs-DpdlZluk.js`),[],import.meta.url);case`de-AT`:case`de-DE`:case`de`:return R(()=>import(`./de-Bz72izuu.js`),[],import.meta.url);case`en-AU`:case`en-GB`:case`en-PH`:case`en-US`:case`en`:return R(()=>import(`./en-BgKlCugn.js`),[],import.meta.url);case`es-ES`:case`es`:return R(()=>import(`./es-CJG3jF-4.js`),[],import.meta.url);case`fr-FR`:case`fr-BE`:case`fr`:return R(()=>import(`./fr-ClGGXjuh.js`),[],import.meta.url);case`hu-HU`:case`hu`:return R(()=>import(`./hu-CN2nqsNi.js`),[],import.meta.url);case`it-IT`:case`it`:return R(()=>import(`./it-C6A7h3X-.js`),[],import.meta.url);case`nl-BE`:case`nl-NL`:case`nl`:return R(()=>import(`./nl-Dv6RWDka.js`),[],import.meta.url);case`pl-PL`:case`pl`:return R(()=>import(`./pl-KmNvtlVr.js`),[],import.meta.url);case`ro-RO`:case`ro`:return R(()=>import(`./ro-BC8wvSGQ.js`),[],import.meta.url);case`ru-RU`:case`ru`:return R(()=>import(`./ru-BeJook4w.js`),[],import.meta.url);case`sk-SK`:case`sk`:return R(()=>import(`./sk-V4Jk6H3Q.js`),[],import.meta.url);case`uk-UA`:case`uk`:return R(()=>import(`./uk-Co9bQAs6.js`),[],import.meta.url);case`zh-CN`:case`zh`:return R(()=>import(`./zh-Bxi-OtlN.js`),[],import.meta.url);default:return R(()=>import(`./en-BgKlCugn.js`),[],import.meta.url)}}},...super.localizeNamespaces]}get modelValue(){let e=super.modelValue;return e===``?this.parser(this.value):e}set modelValue(e){super.modelValue=e}get value(){return this._inputNode?.value||this.__value||``}set value(e){this._inputNode?(this._inputNode.value=e,this.__value=void 0):this.__value=e}reset(){super.reset(),this.multipleChoice||(this.value=this._initialModelValue),this._resetListboxOptions()}_resetListboxOptions(){this.formElements.forEach((e,t)=>{this._unhighlightMatchedOption(e),!this.showAllOnEmpty||!this.opened?e.style.display=`none`:(e.style.display=``,e.setAttribute(`aria-posinset`,`${t+1}`),e.setAttribute(`aria-setsize`,`${this.formElements.length}`),e.removeAttribute(`aria-hidden`))})}_inputGroupInputTemplate(){return m`
      <div class="input-group__input">
        <slot name="selection-display"></slot>
        <slot name="input"></slot>
      </div>
    `}_overlayListboxTemplate(){return m`
      <div
        id="overlay-content-node-wrapper"
        role="dialog"
        aria-label="${this.msgLit(`lion-combobox:optionsPopup`)}"
      >
        <slot name="listbox"></slot>
      </div>
      <slot id="options-outlet"></slot>
    `}_groupTwoTemplate(){return m` ${super._groupTwoTemplate()} ${this._overlayListboxTemplate()}`}get slots(){return{...super.slots,input:()=>{if(this._ariaVersion===`1.1`){let e=document.createElement(`div`),t=document.createElement(`input`);return t.style.cssText=`
          border: none;
          outline: none;
          width: 100%;
          height: 100%;
          font: inherit;
          background: inherit;
          color: inherit;
          border-radius: inherit;
          box-sizing: border-box;
          padding: 0;`,e.appendChild(t),e}return document.createElement(`input`)},listbox:super.slots.input}}get _comboboxNode(){return this.querySelector(`[slot="input"]`)}get _selectionDisplayNode(){return this.querySelector(`[slot="selection-display"]`)}get _inputNode(){return this._ariaVersion===`1.1`&&this._comboboxNode&&this._comboboxNode.querySelector(`input`)||this._comboboxNode}get _overlayContentNode(){return this._listboxNode}get _overlayReferenceNode(){return this.shadowRoot.querySelector(`.input-group__container`)}get _overlayInvokerNode(){return this._inputNode}get _listboxNode(){return this._overlayCtrl&&this._overlayCtrl.contentNode||Array.from(this.children).find(e=>e.slot===`listbox`)}get _activeDescendantOwnerNode(){return this._inputNode}get requireOptionMatch(){return!this.allowCustomChoice}set requireOptionMatch(e){this.allowCustomChoice=!e}constructor(){super(),this.autocomplete=`both`,this.matchMode=`all`,this.showAllOnEmpty=!1,this.requireOptionMatch=!0,this.rotateKeyboardNavigation=!0,this.selectionFollowsFocus=!0,this.defaultValidators.push(new Tl),this._ariaVersion=oi.isChromium?`1.1`:`1.0`,this._listboxReceivesNoFocus=!0,this._noTypeAhead=!0,this.__prevCboxValueNonSelected=``,this.__prevCboxValue=``,this.__hadUserIntendsInlineAutoFill=!1,this.__listboxContentChanged=!1,this._onKeyUp=this._onKeyUp.bind(this),this._textboxOnClick=this._textboxOnClick.bind(this),this._textboxOnInput=this._textboxOnInput.bind(this),this._textboxOnKeydown=this._textboxOnKeydown.bind(this)}connectedCallback(){super.connectedCallback(),this._selectionDisplayNode&&(this._selectionDisplayNode.comboboxElement=this),(this.disabled||this.readOnly)&&this.__setComboboxDisabledAndReadOnly()}requestUpdate(e,t,n){if(super.requestUpdate(e,t,n),(e===`disabled`||e===`readOnly`)&&this.__setComboboxDisabledAndReadOnly(),e===`modelValue`&&this.modelValue&&this.modelValue!==t&&this._syncToTextboxCondition(this.modelValue,this._oldModelValue))if(this.multipleChoice)this._syncToTextboxMultiple(this.modelValue,this._oldModelValue);else{let e=this._getTextboxValueFromOption(this.formElements[this.checkedIndex]);this._setTextboxValue(e)}}parser(e){return this.requireOptionMatch&&this.checkedIndex===-1&&e!==``&&!Array.isArray(e)?new uc(e):super.parser(e)}__unsyncCheckedIndexOnInputChange(){let e=this._autoSelectCondition(),t=this.formElements[this.checkedIndex];if(!this.multipleChoice&&!e&&t){let e=this._getTextboxValueFromOption(t);this._inputNode.value.startsWith(e)||this.setCheckedIndex(-1)}}updated(e){super.updated(e),e.has(`__shouldAutocompleteNextUpdate`)&&this.__unsyncCheckedIndexOnInputChange(),e.has(`opened`)&&(this.opened&&(this.activeIndex=-1),!this.opened&&e.get(`opened`)!==void 0&&(this.__onOverlayClose(),this.activeIndex=-1)),e.has(`autocomplete`)&&this._inputNode.setAttribute(`aria-autocomplete`,this.autocomplete),e.has(`disabled`)&&this.setAttribute(`aria-disabled`,`${this.disabled}`),e.has(`__shouldAutocompleteNextUpdate`)&&this.__shouldAutocompleteNextUpdate&&(this._handleAutocompletion(),this.__shouldAutocompleteNextUpdate=!1,this.__listboxContentChanged=!1),typeof this._selectionDisplayNode?.onComboboxElementUpdated==`function`&&this._selectionDisplayNode.onComboboxElementUpdated(e)}matchCondition(e,t){let n=-1,r=this._getTextboxValueFromOption(e);return typeof r==`string`&&typeof t==`string`&&(n=r.toLowerCase().indexOf(t.toLowerCase())),this.matchMode===`all`?n>-1:n===0}_showOverlayCondition({lastKey:e}){return this.disabled||this.readOnly||e&&([`Tab`,`Escape`].includes(e)||!this.multipleChoice&&[`Enter`].includes(e))?!1:this.filled||this.showAllOnEmpty||!this.filled&&this.multipleChoice&&this.__prevCboxValueNonSelected?!0:this.opened}_getTextboxValueFromOption(e){return e?e.choiceValue:this.modelValue instanceof uc?this.modelValue.viewValue:this.modelValue}_onListboxContentChanged(){super._onListboxContentChanged(),this.__shouldAutocompleteNextUpdate=!0,this.__listboxContentChanged=!0}_textboxOnInput(e){this.__shouldAutocompleteNextUpdate=!0,this.opened=this._showOverlayCondition({})}_textboxOnKeydown(e){e.key===`Tab`&&(this.opened=!1)}_listboxOnClick(e){super._listboxOnClick(e),this._inputNode.focus(),this.multipleChoice?(this._inputNode.value=``,this._resetListboxOptions()):(this.activeIndex=-1,this.opened=!1)}_setTextboxValue(e){this._inputNode&&this._inputNode.value!==e&&(this._inputNode.value=e)}__onOverlayClose(){this.multipleChoice?this._syncToTextboxMultiple(this.modelValue,this._oldModelValue):this.checkedIndex!==-1&&this._syncToTextboxCondition(this.modelValue,this._oldModelValue,{phase:`overlay-close`})&&(this._inputNode.value=this._getTextboxValueFromOption(this.formElements[this.checkedIndex]))}_repropagationCondition(e){return super._repropagationCondition(e)||this.formElements.every(e=>!e.checked)}_onFilterMatch(e,t){this._highlightMatchedOption(e,t),e.style.display=``}_highlightMatchedOption(e,t){if(Cl(e,t),e.textContent){let t=document.createElement(`span`);t.setAttribute(`aria-label`,e.textContent.replace(/\s+/g,` `)),Array.from(e.childNodes).forEach(e=>{t.appendChild(e)}),e.appendChild(t),Ol.set(e,()=>{Array.from(t.childNodes).forEach(t=>{e.appendChild(t)}),e.contains(t)&&e.removeChild(t)})}}_onFilterUnmatch(e,t,n){this._unhighlightMatchedOption(e),e.style.display=`none`}_unhighlightMatchedOption(e){wl(e),Ol.has(e)&&Ol.get(e)()}__computeUserIntendsAutoFill({prevValue:e,curValue:t}){let n=e.length<t.length,r=e.length&&t.length&&e[0].toLowerCase()!==t[0].toLowerCase();return n||r||this.__listboxContentChanged&&this.__hadUserIntendsInlineAutoFill}_handleAutocompletion(){let e=this._inputNode.selectionStart!==this._inputNode.selectionEnd&&this._inputNode.value.length!==this._inputNode.selectionStart,t=this._inputNode.value,n=this._inputNode.selectionStart,r=e&&n?t.slice(0,n):t,i=e||this.__hadSelectionLastAutofill?this.__prevCboxValueNonSelected:this.__prevCboxValue,a=!r,o=[],s=!1,c=this.__computeUserIntendsAutoFill({prevValue:i,curValue:r}),l=this.autocomplete===`both`||this.autocomplete===`inline`,u=this._autoSelectCondition(),d=this.autocomplete===`inline`||this.autocomplete===`none`;this.formElements.forEach((e,t)=>{let n=this.matchCondition(e,r),f=!1;if(f=a?this.showAllOnEmpty:d||n,u&&!s&&n&&!e.disabled){let n=()=>{this.activeIndex=t,this.selectionFollowsFocus&&!this.multipleChoice&&this.setCheckedIndex(this.activeIndex),s=!0};if(c)if(l){let t=this._getTextboxValueFromOption(e);typeof t==`string`&&t!==``&&typeof r==`string`&&r!==``&&t.toLowerCase().indexOf(r.toLowerCase())===0&&(this.__textboxInlineComplete(e),n())}else n()}e.onFilterUnmatch?e.onFilterUnmatch(r,i):this._onFilterUnmatch(e,r,i),e.setAttribute(`aria-hidden`,`true`),e.removeAttribute(`aria-posinset`),e.removeAttribute(`aria-setsize`),f&&(o.push(e),e.onFilterMatch?e.onFilterMatch(r):this._onFilterMatch(e,r))});let f=o.length;o.forEach((e,t)=>{e.setAttribute(`aria-posinset`,`${t+1}`),e.setAttribute(`aria-setsize`,`${f}`),e.removeAttribute(`aria-hidden`)}),u&&!s&&!this.multipleChoice&&(this.setCheckedIndex(-1),i!==r&&(this.activeIndex=-1),this.modelValue=this.parser(t)),this.__prevCboxValueNonSelected=r,this.__prevCboxValue=this._inputNode.value,this.__hadSelectionLastAutofill=this._inputNode.value.length!==this._inputNode.selectionStart,this.__hadUserIntendsInlineAutoFill=c,this._overlayCtrl&&this._overlayCtrl._popper&&this._overlayCtrl._popper.update()}__textboxInlineComplete(e=this.formElements[this.activeIndex]){let t=this._getTextboxValueFromOption(e);if(this._inputNode.value!==t){let e=this._inputNode.value.length;this._inputNode.value=t,this._inputNode.selectionStart=e,this._inputNode.selectionEnd=this._inputNode.value.length}}_autoSelectCondition(){return this.autocomplete===`both`||this.autocomplete===`inline`}_setupListboxNode(){super._setupListboxNode(),this._listboxNode.removeAttribute(`tabindex`)}_defineOverlayConfig(){return{...Zi(),elementToFocusAfterHide:void 0,invokerNode:this._comboboxNode,visibilityTriggerFunction:void 0}}_setupOverlayCtrl(){super._setupOverlayCtrl(),this.__shouldAutocompleteNextUpdate=!0,this.__setupCombobox()}_teardownOverlayCtrl(){super._teardownOverlayCtrl(),this.__teardownCombobox()}_setupOpenCloseListeners(){super._setupOpenCloseListeners(),this._inputNode.addEventListener(`keyup`,this._onKeyUp),this._inputNode.addEventListener(`click`,this._textboxOnClick)}_teardownOpenCloseListeners(){super._teardownOpenCloseListeners(),this._inputNode.removeEventListener(`keyup`,this._onKeyUp),this._inputNode.removeEventListener(`click`,this._textboxOnClick)}_listboxOnKeyDown(e){let{key:t}=e;switch(t){case`Escape`:this.opened=!1,super._listboxOnKeyDown(e),this._setTextboxValue(``);break;case`Backspace`:case`Delete`:this.requireOptionMatch?super._listboxOnKeyDown(e):this.opened=!1;break;case`Enter`:this.opened&&e.preventDefault(),!this.requireOptionMatch&&this.multipleChoice&&(!this.formElements[this.activeIndex]||this.formElements[this.activeIndex].hasAttribute(`aria-hidden`)||!this.opened)?(this.modelValue=this.parser([...this.modelValue,this._inputNode.value]),this._inputNode.value=``,this.opened=!1):(super._listboxOnKeyDown(e),this._resetListboxOptions()),this.multipleChoice?this._inputNode.value=``:this.opened=!1;break;default:super._listboxOnKeyDown(e);break}}_syncToTextboxCondition(e,t,{phase:n}={}){return this.autocomplete===`both`||this.autocomplete===`inline`||!this.focused}_syncToTextboxMultiple(e,t=[]){if(this.requireOptionMatch){let n=e.filter(e=>!t.includes(e)),r=this.formElements.filter(e=>n.includes(e.choiceValue)).map(e=>this._getTextboxValueFromOption(e)).join(` `);this._setTextboxValue(r)}}_enhanceLightDomClasses(){let e=this.querySelector(`[slot=input]`);e&&e.classList.add(`form-control`)}__setComboboxDisabledAndReadOnly(){this._comboboxNode&&(this._comboboxNode.toggleAttribute(`disabled`,this.disabled),this._comboboxNode.setAttribute(`aria-disabled`,`${this.disabled}`),this._comboboxNode.toggleAttribute(`readonly`,this.readOnly),this._comboboxNode.setAttribute(`aria-readonly`,`${this.readOnly}`)),this._inputNode&&(this._inputNode.toggleAttribute(`disabled`,this.disabled),this._inputNode.toggleAttribute(`readOnly`,this.readOnly),this._inputNode.setAttribute(`aria-readonly`,`${this.readOnly}`),this._inputNode.tabIndex=this.disabled?-1:0)}__setupCombobox(){this._comboboxNode.setAttribute(`role`,`combobox`),this._comboboxNode.setAttribute(`aria-haspopup`,`listbox`),this._inputNode.setAttribute(`aria-autocomplete`,this.autocomplete),this._comboboxNode.setAttribute(`aria-controls`,this._listboxNode.id),this._ariaVersion===`1.1`?this._comboboxNode.setAttribute(`aria-owns`,this._listboxNode.id):this._inputNode.setAttribute(`aria-owns`,this._listboxNode.id),this._listboxNode.setAttribute(`aria-labelledby`,this._labelNode.id),this._inputNode.addEventListener(`keydown`,this._listboxOnKeyDown),this._inputNode.addEventListener(`input`,this._textboxOnInput),this._inputNode.addEventListener(`keydown`,this._textboxOnKeydown)}__teardownCombobox(){this._inputNode.removeEventListener(`keydown`,this._listboxOnKeyDown),this._inputNode.removeEventListener(`input`,this._textboxOnInput),this._inputNode.removeEventListener(`keydown`,this._textboxOnKeydown)}_onKeyUp(e){let t=e&&e.key;this.opened=this._showOverlayCondition({lastKey:t,currentValue:this._inputNode.value})}_textboxOnClick(e){this.opened=this._showOverlayCondition({})}clear(){this.value=``,super.clear(),this.__shouldAutocompleteNextUpdate=!0}},Al=_`
  ${pl}

  :host {
    width: 100%;
  }

  ::slotted(.form-control) {
    width: 100%;
    height: 100%;
    appearance: none;
    border: 0;
    min-height: none;
    padding-inline: var(--c-input-spacing-inline)
      calc(var(--c-input-spacing-inline) * 1.5 + 1em);
    border-radius: var(--c-input-radius);
  }

  ::slotted([slot='listbox']) {
    display: grid;
    gap: var(--c-spacing-xs);
    border: 1px solid var(--c-color-neutral-border-quiet);
    border-radius: var(--c-radius-md);
    background-color: var(--c-surface-overlay);
    box-shadow: var(--c-shadow-sm);
    padding: var(--c-spacing-sm);
  }

  .input-group__input {
    ${fl}
    padding-inline: 0;
    position: relative;
    min-height: calc(var(--c-input-height, var(--c-size-control-md)) - 2px);
  }

  .input-group__container {
    border: 0;
  }

  .indicator {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: var(--c-input-spacing-inline);
    transform: translateY(-50%);
    width: 1em;
    height: 1em;
  }
`,jl=class extends kl{static get styles(){return[...super.styles,Al]}constructor(){super(),this.defaultValidators=[]}_inputGroupInputTemplate(){return m`
      <div class="input-group__input">
        <slot name="input"></slot>
        <craft-icon
          class="indicator"
          name="chevron-down"
          style="font-size: 0.8em"
        ></craft-icon>
      </div>
    `}parser(e){return e===``?super.parser(e):e}_getTextboxValueFromOption(e){return e?e.textContent?.trim()||``:super._getTextboxValueFromOption(e)}};customElements.get(`craft-combobox`)||customElements.define(`craft-combobox`,jl);var Ml=_`
  :host {
    display: inline-block;
  }

  .copy-button {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background-color: transparent;
    appearance: none;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    border: none;
    cursor: pointer;
  }

  .icon {
    display: inline-block;
    width: 0.9em;
    height: 0.9em;
  }

  svg {
    fill: currentColor;
    width: 100%;
    height: 100%;
  }
`,Nl={"icon.in":{keyframes:[{scale:.25,opacity:.25},{scale:1,opacity:1}],options:{duration:100}},"icon.out":{keyframes:[{scale:1,opacity:1},{scale:.25,opacity:.25}],options:{duration:100}}},Pl=class extends g{constructor(...e){super(...e),this.isCopying=!1,this.status=`rest`,this.value=``,this.disabled=!1,this.feedbackDuration=1e3,this.tooltipLabel=null}async copyValue(){if(!(this.status===`copying`||this.disabled)){this.status=`copying`;try{await navigator.clipboard.writeText(this.value),this.dispatchEvent(new CustomEvent(`craft-copy`,{bubbles:!0,cancelable:!1,composed:!0,detail:{value:this.value}}))}catch{this.dispatchEvent(new CustomEvent(`craft-error`,{cancelable:!1,composed:!0,bubbles:!0}))}finally{this.isCopying=!1}}}async showStatus(e){let t=e===`success`?this.successIconEl:this.errorIconEl;this.tooltipLabel=e===`success`?`Copied`:`Copy failed`,await t.animate(Nl[`icon.out`].keyframes,Nl[`icon.out`].options),this.copyIconEl.hidden=!0,t.hidden=!1,await t.animate(Nl[`icon.in`].keyframes,Nl[`icon.in`].options),this.status=e,setTimeout(async()=>{await t.animate(Nl[`icon.out`].keyframes,Nl[`icon.out`].options),t.hidden=!0,this.copyIconEl.hidden=!1,await this.copyIconEl.animate(Nl[`icon.in`].keyframes,Nl[`icon.in`].options),this.status=`rest`,this.tooltipLabel=`Copy`},this.feedbackDuration)}connectedCallback(){super.connectedCallback(),this.tooltipLabel=this.getAttribute(`tooltip-label`)||o(`Copy`),this.id||=`copy-${Math.floor(Math.random()*1e8)}`,this.addEventListener(`craft-copy`,()=>{this.showStatus(`success`)}),this.addEventListener(`craft-error`,()=>{this.showStatus(`error`)})}render(){return m`
      <craft-tooltip for="${this.id}">${this.tooltipLabel}</craft-tooltip>
      <button
        type="button"
        id="${this.id}"
        @click="${this.copyValue}"
        ?disabled=${this.disabled}
        class="copy-button"
        part="button"
      >
        <slot></slot>
        <slot name="copy-icon">
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M288 448H64V224h64v-64H64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64v-64h-64v64zM160 130h64v92h-64v-92zm288 0h64v92h-64v-92zM290 352v-64h92v64h-92zm0-288V0h92v64h-92zM224 98V64h34V0h-34c-35.3 0-64 28.7-64 64v34M414 64h34v34h64V64c0-35.3-28.7-64-64-64h-34m34 254v34h-34v64h34c35.3 0 64-28.7 64-64v-34M258 288h-34v-34h-64v34c0 35.3 28.7 64 64 64h34"
              />
            </svg>
          </span>
        </slot>

        <slot name="success-icon" part="success-icon" hidden>
          <craft-icon name="check"></craft-icon>
        </slot>

        <slot name="error-icon" part="error-icon" hidden>
          <craft-icon name="x"></craft-icon>
        </slot>

        <craft-visually-hidden>Copy to clipboard</craft-visually-hidden>
      </button>
    `}};Pl.styles=[Ml],n([y()],Pl.prototype,`isCopying`,void 0),n([y()],Pl.prototype,`status`,void 0),n([b(`slot[name="copy-icon"]`)],Pl.prototype,`copyIconEl`,void 0),n([b(`slot[name="success-icon"]`)],Pl.prototype,`successIconEl`,void 0),n([b(`slot[name="error-icon"]`)],Pl.prototype,`errorIconEl`,void 0),n([v({type:String})],Pl.prototype,`value`,void 0),n([v({type:Boolean})],Pl.prototype,`disabled`,void 0),n([v({attribute:`feedback-duration`,type:Number})],Pl.prototype,`feedbackDuration`,void 0),n([v()],Pl.prototype,`tooltipLabel`,void 0),customElements.get(`craft-copy-button`)||customElements.define(`craft-copy-button`,Pl);var Fl=_`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Il=_`
  :host {
    --craft-tooltip-font-size: calc(12rem / 16);
    display: inline-block;
  }

  slot {
    display: inline-flex;
  }

  .copy-attribute {
    font-family: var(--font-mono);
    font-size: var(--c-copy-attribute-font-size, var(--c-text-sm));
    flex-wrap: nowrap;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .copy-attribute::part(button) {
    --_border: var(
      --c-copy-attribute-border,
      1px solid hsla(209, 20%, 25%, 0.1)
    );
    border-radius: var(--c-copy-attribute-radius, 4px);
    background-color: var(--c-copy-attribute-fill, transparent);
    color: var(--c-copy-attribute-text, inherit);
    border: var(--_border);
    padding-inline: 5px;
    min-height: calc(20rem / 16);
  }

  .copy-attribute::part(button):not(.copy-attribute--success):not(
      .copy-attribute--error
    ):hover,
  .copy-attribute::part(button):not(.copy-attribute--success):not(
      .copy-attribute--error
    ):focus {
    border-color: var(--c-color-neutral-border-quiet);
    color: var(--c-text-default);
  }

  .copy-attribute--success::part(button) {
    background-color: var(
      --c-copy-attribute-success-fill,
      var(--c-copy-attribute-fill)
    );
    color: var(--c-copy-attribute-success-text, var(--c-copy-attribute-text));
    border: var(--c-copy-attribute-success-border, var(--_border));
  }

  .copy-attribute--error::part(button) {
    background-color: var(
      --c-copy-attribute-error-fill,
      var(--c-copy-attribute-fill)
    );
    color: var(--c-copy-attribute-error-text, var(--c-copy-attribute-text));
    border: var(--c-copy-attribute-error-border, var(--_border));
  }
`,Ll=class extends g{constructor(...e){super(...e),this.value=``,this.disabled=!1}getId(){return`attribute-${this.value.replace(/([a-z])([A-Z])/g,`$1-$2`).replace(/[\s_]+/g,`-`).toLowerCase()}`}render(){return m`
      <craft-copy-button
        id="${this.getId()}"
        value="${this.value}"
        class=${c({"copy-attribute":!0})}
      >
        ${this.value}
      </craft-copy-button>
    `}};Ll.styles=[Fl,Il],n([b(`craft-copy-button`)],Ll.prototype,`copyButtonEl`,void 0),n([v({type:String})],Ll.prototype,`value`,void 0),n([v({type:Boolean,reflect:!0})],Ll.prototype,`disabled`,void 0),customElements.get(`craft-copy-attribute`)||customElements.define(`craft-copy-attribute`,Ll);var Rl=class extends qi(g){static get properties(){return{isAlertDialog:{type:Boolean,attribute:`is-alert-dialog`}}}constructor(){super(),this.isAlertDialog=!1}_defineOverlayConfig(){return{...Xi(),isAlertDialog:this.isAlertDialog}}render(){return m`
      <slot name="invoker"></slot>
      <div id="overlay-content-node-wrapper">
        <slot name="content"></slot>
      </div>
    `}},zl=typeof CSSStyleSheet<`u`?new CSSStyleSheet:null;zl?.replaceSync(`
  .craft-dialog {
    background-color: var(--c-surface-raised);
    border-radius: var(--c-radius-md);
    box-shadow: var(--c-shadow-lg);
    min-width: min(90vw, 24rem);
    max-width: min(90vw, 40rem);
  }

  .craft-dialog__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--c-spacing-md);
    padding-inline: var(--c-spacing-lg);
    padding-block-start: var(--c-spacing-lg);
    padding-block-end: var(--c-spacing-md);
  }

  .craft-dialog__title {
    font-size: 1.25em;
    margin: 0;
  }

  .craft-dialog__close {
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    padding: var(--c-spacing-xs);
    line-height: 1;
  }

  .craft-dialog__body {
    padding-inline: var(--c-spacing-lg);
    padding-block-end: var(--c-spacing-lg);
  }

  .craft-dialog__footer {
    display: flex;
    justify-content: flex-end;
    gap: var(--c-spacing-sm);
    padding-inline: var(--c-spacing-lg);
    padding-block-end: var(--c-spacing-lg);
  }
`);var Bl=new WeakMap,Vl=new WeakMap,Hl=new WeakSet,Ul=class extends Rl{constructor(){super(),C(this,Hl),this.openAttribute=!1,this.label=``,w(this,Bl,null),w(this,Vl,null),Br(this),this.addEventListener(`opened-changed`,()=>{let e=!!this.opened;this.openAttribute!==e&&(this.openAttribute=e)})}static get styles(){return[_`
        :host {
          display: contents;
        }

        dialog::backdrop {
          background-color: rgb(0 0 0 / 0.25);
        }
      `]}connectedCallback(){S(Hl,this,Wl).call(this),S(Hl,this,Gl).call(this),super.connectedCallback()}updated(e){super.updated(e),e.has(`openAttribute`)&&this.openAttribute!==this.opened&&(this.opened=this.openAttribute),e.has(`label`)&&E(Vl,this)&&(E(Vl,this).textContent=this.label)}};function Wl(){let e=this.getRootNode();zl&&(e instanceof Document||e instanceof ShadowRoot)&&!e.adoptedStyleSheets.includes(zl)&&(e.adoptedStyleSheets=[...e.adoptedStyleSheets,zl])}function Gl(){if(E(Bl,this)?.isConnected)return;let e=document.createElement(`div`);e.slot=`content`,e.classList.add(`craft-dialog`);let t=document.createElement(`div`);t.classList.add(`craft-dialog__body`),t.append(...Array.from(this.childNodes).filter(e=>!(e instanceof Element)||e.slot===``));let n=Array.from(this.children).filter(e=>e.slot===`footer`);if(e.append(S(Hl,this,Kl).call(this),t),n.length>0){let t=document.createElement(`footer`);t.classList.add(`craft-dialog__footer`),t.append(...n),e.append(t)}e.addEventListener(`click`,e=>{e.target.closest?.(`[data-dialog="close"]`)&&(this.opened=!1)}),this.append(e),T(Bl,this,e)}function Kl(){let e=document.createElement(`header`);e.classList.add(`craft-dialog__header`);let t=document.createElement(`h2`);t.classList.add(`craft-dialog__title`),t.textContent=this.label,T(Vl,this,t);let n=document.createElement(`button`);n.type=`button`,n.classList.add(`craft-dialog__close`),n.setAttribute(`aria-label`,o(`Close`)),n.setAttribute(`data-dialog`,`close`);let r=document.createElement(`craft-icon`);return r.setAttribute(`name`,`xmark`),n.append(r),e.append(t,n),e}n([v({type:Boolean,attribute:`open`,reflect:!0})],Ul.prototype,`openAttribute`,void 0),n([v()],Ul.prototype,`label`,void 0),customElements.get(`craft-dialog`)||customElements.define(`craft-dialog`,Ul);var ql=class extends HTMLElement{constructor(...e){super(...e),this.cookieName=null,this.state=`collapsed`,this.expanded=!1,this.handleOpen=()=>{this.trigger?.setAttribute(`aria-expanded`,`true`),this.expanded=!0,this.dispatchEvent(new CustomEvent(`open`)),this.target&&(this.target.dataset.state=`expanded`),this.cookieName&&window.Craft?.setCookie(this.cookieName,`expanded`)},this.handleClose=()=>{this.trigger?.setAttribute(`aria-expanded`,`false`),this.expanded=!1,this.dispatchEvent(new CustomEvent(`close`)),this.target&&(this.target.dataset.state=`collapsed`),this.cookieName&&window.Craft?.setCookie(this.cookieName,`collapsed`)}}get trigger(){return this.querySelector(`button[type="button"]`)}get target(){if(!this.trigger)return console.warn(`No trigger found for disclosure.`),null;let e=this.trigger.getAttribute(`aria-controls`);return e?document.getElementById(e):(console.warn(`No target selector found for disclosure.`),null)}connectedCallback(){if(!this.trigger){console.error(`craft-disclosure elements must include a button`,this);return}if(!this.target){console.error(`No target with id ${this.trigger.getAttribute(`aria-controls`)} found for disclosure. `,this.trigger);return}this.cookieName=this.getAttribute(`cookie-name`),this.state=this.getAttribute(`state`)??`expanded`,this.trigger.setAttribute(`aria-expanded`,this.state===`expanded`?`true`:`false`),this.trigger.addEventListener(`click`,this.toggle.bind(this)),this.state===`expanded`?this.open():this.close()}disconnectedCallback(){this.open(),this.trigger?.removeEventListener(`click`,this.toggle.bind(this))}attributeChangedCallback(e,t,n){e===`state`&&(n===`expanded`?this.handleOpen():this.handleClose())}toggle(){this.expanded?this.close():this.open()}open(){this.setAttribute(`state`,`expanded`)}close(){this.setAttribute(`state`,`collapsed`)}};ql.observedAttributes=[`state`],customElements.get(`craft-disclosure`)||customElements.define(`craft-disclosure`,ql);var Jl=class extends g{render(){return m`
      <style>
        craft-field-group {
          display: grid;
          gap: var(--gap, var(--c-spacing-lg));
        }
      </style>
      <slot></slot>
    `}createRenderRoot(){return this}};customElements.get(`craft-field-group`)||customElements.define(`craft-field-group`,Jl);var Yl=_`
  ${pl}

  :host {
    display: block;
  }

  .input-color {
    display: grid;
    gap: var(--c-spacing-sm);
  }

  .input-color__control {
    display: flex;
    align-items: center;
    gap: var(--c-spacing-sm);
  }

  .input-color__swatch {
    position: relative;
    display: block;
    flex: 0 0 auto;
    inline-size: var(--c-input-height, var(--c-size-control-md));
    block-size: var(--c-input-height, var(--c-size-control-md));
    border-radius: 50%;
    overflow: hidden;
    background:
      linear-gradient(
        45deg,
        var(--c-color-neutral-fill-quiet) 25%,
        transparent 25%
      ),
      linear-gradient(
        -45deg,
        var(--c-color-neutral-fill-quiet) 25%,
        transparent 25%
      ),
      linear-gradient(
        45deg,
        transparent 75%,
        var(--c-color-neutral-fill-quiet) 75%
      ),
      linear-gradient(
        -45deg,
        transparent 75%,
        var(--c-color-neutral-fill-quiet) 75%
      );
    background-position:
      0 0,
      0 0.375rem,
      0.375rem -0.375rem,
      -0.375rem 0;
    background-size: 0.75rem 0.75rem;
  }

  :host(:not([disabled])) .input-color__swatch {
    cursor: pointer;
  }

  .input-color__swatch:focus-within {
    box-shadow: var(
      --focus-ring,
      0 0 0 2px var(--c-color-accent-border-normal)
    );
  }

  .input-color__preview {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 15%);
  }

  .input-color__picker {
    position: absolute;
    inset: 0;
    inline-size: 100%;
    block-size: 100%;
    border: 0;
    margin: 0;
    padding: 0;
    opacity: 0;
  }

  .input-group__container {
    ${fl}
    flex: 0 0 7.25rem;
    inline-size: 7.25rem;
    max-inline-size: 100%;
  }

  .input-group__input {
    display: flex;
    flex: 1 1 auto;
  }

  .input-group__prefix {
    color: var(--c-text-quiet);
    user-select: none;
    font-family: var(--c-font-mono);
    padding-inline: var(--c-input-spacing-inline) 0;
    display: grid;
    place-items: center;
  }

  ::slotted([slot='input']) {
    width: 100%;
    min-inline-size: 0;
    font: inherit;
    font-family: var(--c-font-mono);
    padding-block: 0;
    padding-inline: var(--c-spacing-xs) var(--c-input-spacing-inline);
    border: 0;
    appearance: none;
    background-color: transparent;
  }
`,Xl=/^[0-9a-f]{6}$/i,Zl=/^[0-9a-f]{3}$/i,Ql={fromAttribute(e){if(!e)return[];try{let t=JSON.parse(e);return Array.isArray(t)?t.map(e=>String(e)):[]}catch{return[]}}};function $l(e){return String(e??``).trim().replace(/^#/,``)}function eu(e){let t=$l(e);return Zl.test(t)?t.split(``).map(e=>e+e).join(``):Xl.test(t)?t:null}var tu=class e extends Ic{static get styles(){return[...super.styles,ml,Yl]}constructor(){super(),this.presets=[],this._pickerListId=`${this._inputId}-presets`,this.type=`text`}static doesBrowserSupportColorInputs(){if(e._browserSupportsColorInputs===null){let t=document.createElement(`input`);t.setAttribute(`type`,`color`),e._browserSupportsColorInputs=t.type===`color`}return e._browserSupportsColorInputs}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`),t=this.getAttribute(`value`);return e.type=`text`,e.inputMode=`text`,e.spellcheck=!1,e.setAttribute(`autocorrect`,`off`),e.setAttribute(`autocapitalize`,`off`),t&&e.setAttribute(`value`,$l(t)),e}}}parser(e){return $l(e)}formatter(e){return $l(e)}serializer(e){return $l(e)}deserializer(e){return $l(e)}preprocessor(e){let t=$l(e);if(t!==e)return t}get _expandedHexValue(){return eu(this.modelValue)}get _pickerValue(){return this._expandedHexValue?`#${this._expandedHexValue}`:`#ffffff`}get _validPresets(){return this.presets.map(e=>eu(e)).filter(e=>e!==null).map(e=>`#${e}`)}_handlePickerInput(e){let t=e.target,n=$l(t.value),r=this._isHandlingUserInput;this._isHandlingUserInput=!0,this.modelValue=n,this.value=n,this._isHandlingUserInput=r}_pickerTemplate(){if(!e.doesBrowserSupportColorInputs())return h;let t=this._validPresets;return m`
      <input
        class="input-color__picker"
        type="color"
        aria-controls="${this._inputId}"
        aria-label="${o(`Color picker`)}"
        .value="${this._pickerValue}"
        ?disabled="${this.disabled}"
        list=${t.length?this._pickerListId:h}
        @input="${this._handlePickerInput}"
      />
      ${t.length?m`
            <datalist id="${this._pickerListId}">
              ${t.map(e=>m`<option value="${e}"></option>`)}
            </datalist>
          `:h}
    `}_swatchTemplate(){return m`
      <label class="input-color__swatch">
        <span class="input-color__preview" style="${this._expandedHexValue?`background-color: #${this._expandedHexValue}`:``}"></span>
        ${this._pickerTemplate()}
      </label>
    `}_inputGroupTemplate(){return m`
      <div class="input-color">
        ${this._inputGroupBeforeTemplate()}
        <div class="input-color__control">
          ${this._swatchTemplate()}
          <div class="input-group__container">
            <div class="input-group__prefix" aria-hidden="true">#</div>
            ${this._inputGroupInputTemplate()}
            ${this._inputGroupSuffixTemplate()}
          </div>
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}};tu._browserSupportsColorInputs=null,n([v({converter:Ql})],tu.prototype,`presets`,void 0),customElements.get(`craft-input-color`)||customElements.define(`craft-input-color`,tu);var nu=class extends yc{static validatorName=`IsAcceptedFile`;static checkFileSize(e,t){return e<=t}static getExtension(e){return e?.slice(e.lastIndexOf(`.`))}static isExtensionAllowed(e,t){return t?.find(t=>t.toUpperCase()===e.toUpperCase())}static isFileTypeAllowed(e,t){return t?.find(t=>t.toUpperCase()===e.toUpperCase())}execute(e,t=this.param){let n,r,i=this.constructor,{allowedFileTypes:a,allowedFileExtensions:o,maxFileSize:s}=t;return a?.length?(n=e.some(e=>!i.isFileTypeAllowed(e.type,a)),n):o?.length?(r=e.some(e=>!i.isExtensionAllowed(i.getExtension(e.name),o)),r):e.findIndex(e=>!i.checkFileSize(e.size,s))>-1}static async getMessage(){return``}},ru=class extends yc{static validatorName=`DuplicateFileNames`;constructor(e,t){super(e,t),this.type=`info`}execute(e,t=this.param){return t.show}static async getMessage(){return Hs().msg(`lion-input-file:uploadTextDuplicateFileName`)}},iu=524288e3,au={type:`FILE_TYPE`,size:`FILE_SIZE`},ou={fail:`FAIL`,pass:`SUCCESS`},su=class{constructor(e,t){this.failedProp=[],this.systemFile=e,this._acceptCriteria=t,this.uploadFileStatus(),this.failedProp.length===0&&this.createDownloadUrl(e)}_getFileNameExtension(e){return e.slice(e.lastIndexOf(`.`))}uploadFileStatus(){if(this._acceptCriteria.allowedFileExtensions.length){let e=this._getFileNameExtension(this.systemFile.name);nu.isExtensionAllowed(e,this._acceptCriteria.allowedFileExtensions)||(this.status=ou.fail,this.failedProp.push(au.type))}else if(this._acceptCriteria.allowedFileTypes.length){let e=this.systemFile.type;nu.isFileTypeAllowed(e,this._acceptCriteria.allowedFileTypes)||(this.status=ou.fail,this.failedProp.push(au.type))}nu.checkFileSize(this.systemFile.size,this._acceptCriteria.maxFileSize)?this.status!==ou.fail&&(this.status=ou.pass):(this.status=ou.fail,this.failedProp.push(au.size))}createDownloadUrl(e){this.downloadUrl=window.URL.createObjectURL(e)}},cu=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},lu=t(class extends i{constructor(e){if(super(e),e.type!==l.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=ei(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,f=0,p=i.length-1,m=0,h=a.length-1;for(;f<=p&&m<=h;)if(i[f]===null)f++;else if(i[p]===null)p--;else if(s[f]===o[m])c[m]=Zr(i[f],a[m]),f++,m++;else if(s[p]===o[h])c[h]=Zr(i[p],a[h]),p--,h--;else if(s[f]===o[h])c[h]=Zr(i[f],a[h]),Xr(e,c[h+1],i[f]),f++,h--;else if(s[p]===o[m])c[m]=Zr(i[p],a[m]),Xr(e,i[f],i[p]),p--,m++;else if(l===void 0&&(l=cu(o,m,h),u=cu(s,f,p)),l.has(s[f]))if(l.has(s[p])){let t=u.get(o[m]),n=t===void 0?null:i[t];if(n===null){let t=Xr(e,i[f]);Zr(t,a[m]),c[m]=t}else c[m]=Zr(n,a[m]),Xr(e,i[f],n),i[t]=null;m++}else ti(i[p]),p--;else ti(i[f]),f++;for(;m<=h;){let t=Xr(e,c[h+1]);Zr(t,a[m]),c[m++]=t}for(;f<=p;){let e=i[f++];e!==null&&ti(e)}return this.ut=o,$r(e,c),d}}),uu=e=>{switch(e){case`bg-BG`:return R(()=>import(`./bg-BG-Bn9SAzJe.js`),__vite__mapDeps([49,50]),import.meta.url);case`bg`:return R(()=>import(`./bg-SsgDDkMC.js`),__vite__mapDeps([51,50]),import.meta.url);case`cs-CZ`:return R(()=>import(`./cs-CZ-4fSQr3f_.js`),__vite__mapDeps([52,53]),import.meta.url);case`cs`:return R(()=>import(`./cs-DZhNKUgr.js`),__vite__mapDeps([54,53]),import.meta.url);case`de-DE`:return R(()=>import(`./de-DE-ChrX89DZ.js`),__vite__mapDeps([55,56]),import.meta.url);case`de`:return R(()=>import(`./de-CCHroSks.js`),__vite__mapDeps([57,56]),import.meta.url);case`en-AU`:return R(()=>import(`./en-AU-CoEGY67j.js`),__vite__mapDeps([58,59]),import.meta.url);case`en-GB`:return R(()=>import(`./en-GB-BSipNe3f.js`),__vite__mapDeps([60,59]),import.meta.url);case`en-US`:return R(()=>import(`./en-US-BGXT22sU.js`),__vite__mapDeps([61,59]),import.meta.url);case`en-PH`:case`en`:return R(()=>import(`./en-B3VAMG8J.js`),__vite__mapDeps([62,59]),import.meta.url);case`es-ES`:return R(()=>import(`./es-ES--SmkGNhH.js`),__vite__mapDeps([63,64]),import.meta.url);case`es`:return R(()=>import(`./es-BRO5jEDv.js`),__vite__mapDeps([65,64]),import.meta.url);case`fr-FR`:return R(()=>import(`./fr-FR-CUTiXp9I.js`),__vite__mapDeps([66,67]),import.meta.url);case`fr-BE`:return R(()=>import(`./fr-BE-B_0I3HTa.js`),__vite__mapDeps([68,67]),import.meta.url);case`fr`:return R(()=>import(`./fr-CJdDA3iB.js`),__vite__mapDeps([69,67]),import.meta.url);case`hu-HU`:return R(()=>import(`./hu-HU-DhD2wKEQ.js`),__vite__mapDeps([70,71]),import.meta.url);case`hu`:return R(()=>import(`./hu-BXB0KCno.js`),__vite__mapDeps([72,71]),import.meta.url);case`id-ID`:return R(()=>import(`./id-ID-CiU6JOHY.js`),__vite__mapDeps([73,74]),import.meta.url);case`id`:return R(()=>import(`./id-BCbsB7UU.js`),__vite__mapDeps([75,74]),import.meta.url);case`it-IT`:return R(()=>import(`./it-IT-uqh9o-D4.js`),__vite__mapDeps([76,77]),import.meta.url);case`it`:return R(()=>import(`./it-BwGhXjgy.js`),__vite__mapDeps([78,77]),import.meta.url);case`nl-BE`:return R(()=>import(`./nl-BE-BgxudImH.js`),__vite__mapDeps([79,80]),import.meta.url);case`nl-NL`:return R(()=>import(`./nl-NL-OIA7zTRT.js`),__vite__mapDeps([81,80]),import.meta.url);case`nl`:return R(()=>import(`./nl-BQCfuM9c.js`),__vite__mapDeps([82,80]),import.meta.url);case`pl-PL`:return R(()=>import(`./pl-PL-CTP5JGG_.js`),__vite__mapDeps([83,84]),import.meta.url);case`pl`:return R(()=>import(`./pl-BjtGkPK3.js`),__vite__mapDeps([85,84]),import.meta.url);case`ro-RO`:return R(()=>import(`./ro-RO-CuFs3Jtd.js`),__vite__mapDeps([86,87]),import.meta.url);case`ro`:return R(()=>import(`./ro-Cl1Dvqmt.js`),__vite__mapDeps([88,87]),import.meta.url);case`ru-RU`:return R(()=>import(`./ru-RU-BNeew_WS.js`),__vite__mapDeps([89,90]),import.meta.url);case`ru`:return R(()=>import(`./ru-CrAHcf5Z.js`),__vite__mapDeps([91,90]),import.meta.url);case`sk-SK`:return R(()=>import(`./sk-SK-C6n1yx5m.js`),__vite__mapDeps([92,93]),import.meta.url);case`sk`:return R(()=>import(`./sk-BN4cErFR.js`),__vite__mapDeps([94,93]),import.meta.url);case`uk-UA`:return R(()=>import(`./uk-UA-DpnVXK1r.js`),__vite__mapDeps([95,96]),import.meta.url);case`uk`:return R(()=>import(`./uk-9cteiHR0.js`),__vite__mapDeps([97,96]),import.meta.url);case`zh-CN`:case`zh`:return R(()=>import(`./zh-DpwFsslj.js`),[],import.meta.url);default:return R(()=>import(`./en-B3VAMG8J.js`),__vite__mapDeps([62,59]),import.meta.url)}},du=class extends tc(sc(g)){static get scopedElements(){return{...super.scopedElements,"lion-validation-feedback":vc}}static get properties(){return{fileList:{type:Array},multiple:{type:Boolean}}}static localizeNamespaces=[{"lion-input-file":uu},...super.localizeNamespaces];constructor(){super(),this.fileList=[],this.multiple=!1}updated(e){super.updated(e),e.has(`fileList`)&&this._enhanceLightDomA11y()}_enhanceLightDomA11y(){let e=this.shadowRoot?.querySelectorAll(`[id^="file-feedback"]`),t=this.parentNode?.parentNode;e?.forEach(e=>{t?.addEventListener(`focusin`,()=>{e.setAttribute(`aria-live`,`polite`)}),t?.addEventListener(`focusout`,()=>{e.setAttribute(`aria-live`,`assertive`)})})}_removeFile(e){this.dispatchEvent(new CustomEvent(`file-remove-requested`,{detail:{removedFile:e,status:e.status,uploadResponse:e.response}}))}_validationFeedbackTemplate(e,t){return m`
      <lion-validation-feedback
        id="file-feedback-${t}"
        .feedbackData="${e}"
        aria-live="assertive"
      ></lion-validation-feedback>
    `}_listItemBeforeTemplate(e){return h}_listItemAfterTemplate(e,t){return m`
      <button
        class="selected__list__item__remove-button"
        aria-label="${this.msgLit(`lion-input-file:removeButtonLabel`,{fileName:e.systemFile.name})}"
        @click=${()=>this._removeFile(e)}
      >
        ${this._removeButtonContentTemplate()}
      </button>
    `}_removeButtonContentTemplate(){return m`✖️`}_selectedListItemTemplate(e){let t=si();return m`
      <div class="selected__list__item" status="${e.status?e.status.toLowerCase():``}">
        <div class="selected__list__item__label">
          ${this._listItemBeforeTemplate(e)}
          <span id="selected-list-item-label-${t}" class="selected__list__item__label__text">
            <span class="sr-only">${this.msgLit(`lion-input-file:fileNameDescriptionLabel`)}</span>
            ${e.downloadUrl&&e.status!==`LOADING`?m`
                  <a
                    class="selected__list__item__label__link"
                    href="${e.downloadUrl}"
                    target="${e.downloadUrl.startsWith(`blob`)?`_blank`:``}"
                    rel="${s(e.downloadUrl.startsWith(`blob`)?`noopener noreferrer`:void 0)}"
                    >${e.systemFile?.name}</a
                  >
                `:e.systemFile?.name}
          </span>
          ${this._listItemAfterTemplate(e,t)}
        </div>
        ${e.status===`FAIL`&&e.validationFeedback?m`
              ${lu(e.validationFeedback,e=>m`
                  ${this._validationFeedbackTemplate([e],t)}
                `)}
            `:h}
      </div>
    `}render(){return this.fileList?.length?m`
          ${this.multiple?m`
                <ul class="selected__list">
                  ${this.fileList.map(e=>m` <li>${this._selectedListItemTemplate(e)}</li> `)}
                </ul>
              `:m` ${this._selectedListItemTemplate(this.fileList[0])} `}
        `:h}static get styles(){return[_`
        .selected__list {
          list-style-type: none;
          margin-block-start: 0;
          margin-block-end: 0;
          padding-inline-start: 0;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(100%);
          clip: rect(1px, 1px, 1px, 1px);
          white-space: nowrap;
          border: 0;
          margin: 0;
          padding: 0;
        }
      `]}};function fu(e,t=2){if(!+e)return`0 Bytes`;let n=1024,r=t<0?0:t,i=[` bytes`,`KB`,`MB`,`GB`,`TB`,`PB`,`EB`,`ZB`,`YB`],a=Math.floor(Math.log(e)/Math.log(n));return`${parseFloat((e/n**a).toFixed(r))}${i[a]}`}var pu=class extends sc(tc(Tc)){static get scopedElements(){return{...super.scopedElements,"lion-selected-file-list":du}}static get properties(){return{accept:{type:String},multiple:{type:Boolean,reflect:!0},buttonLabel:{type:String,attribute:`button-label`},maxFileSize:{type:Number,attribute:`max-file-size`},enableDropZone:{type:Boolean,attribute:`enable-drop-zone`},uploadOnSelect:{type:Boolean,attribute:`upload-on-select`},isDragging:{type:Boolean,attribute:`is-dragging`,reflect:!0},uploadResponse:{type:Array,state:!1},_selectedFilesMetaData:{type:Array,state:!0}}}static localizeNamespaces=[{"lion-input-file":uu},...super.localizeNamespaces];static get validationTypes(){return[`error`,`info`]}get slots(){return{...super.slots,input:()=>m`<input .value="${s(this.getAttribute(`value`))}" />`,"file-select-button":()=>m`<button
          type="button"
          id="select-button-${this._inputId}"
          @click="${this.__openDialogOnBtnClick}"
        >
          ${this.buttonLabel}
        </button>`,after:()=>m`<div data-description></div>`,"selected-file-list":()=>({template:m`
          <lion-selected-file-list
            .fileList=${this._selectedFilesMetaData}
            .multiple=${this.multiple}
          ></lion-selected-file-list>
        `,renderAsDirectHostChild:!0})}}get _inputNode(){return super._inputNode}get _buttonNode(){return this.querySelector(`#select-button-${this._inputId}`)}get buttonLabel(){return this.__buttonLabel||this._buttonNode?.textContent?.trim()||``}set buttonLabel(e){let t=this.buttonLabel;this.__buttonLabel=e,this.requestUpdate(`buttonLabel`,t)}get _focusableNode(){return this._buttonNode}get _isDragAndDropSupported(){return`draggable`in document.createElement(`div`)}constructor(){super(),this.type=`file`,this._selectedFilesMetaData=[],this.uploadResponse=[],this.__initialUploadResponse=this.uploadResponse,this.uploadOnSelect=!1,this.multiple=!1,this.enableDropZone=!1,this.maxFileSize=iu,this.accept=``,this.buttonLabel=``,this._initialButtonLabel=``,this.modelValue=[],this._onRemoveFile=this._onRemoveFile.bind(this),this.__duplicateFileNamesValidator=new ru({show:!1}),this.__previouslyParsedFiles=null}get _fileListNode(){return Array.from(this.children).find(e=>e.slot===`selected-file-list`)}connectedCallback(){super.connectedCallback(),this.__initialUploadResponse=this.uploadResponse,this._initialButtonLabel=this.buttonLabel,this._inputNode.addEventListener(`change`,this._onChange),this._inputNode.addEventListener(`click`,this._onClick)}disconnectedCallback(){super.disconnectedCallback(),this._inputNode.removeEventListener(`change`,this._onChange),this._inputNode.removeEventListener(`click`,this._onClick)}onLocaleUpdated(){super.onLocaleUpdated(),this.multiple?this.buttonLabel=this._initialButtonLabel||this.msgLit(`lion-input-file:selectTextMultipleFile`):this.buttonLabel=this._initialButtonLabel||this.msgLit(`lion-input-file:selectTextSingleFile`)}get operationMode(){return`upload`}get _acceptCriteria(){let e=[],t=[];if(this.accept){let n=this.accept.replace(/\s+/g,``).split(`,`);e=n.filter(e=>e.includes(`/`)),t=n.filter(e=>!e.includes(`/`))}return{allowedFileTypes:e,allowedFileExtensions:t,maxFileSize:this.maxFileSize}}reset(){super.reset(),this._selectedFilesMetaData=[],this.uploadResponse=this.__initialUploadResponse,this.modelValue=[],this.dirty=!1}clear(){this._selectedFilesMetaData=[],this.uploadResponse=[],this.modelValue=[]}_showFeedbackConditionFor(e,t){return super._showFeedbackConditionFor(e,t)&&!(this.validationStates.error?.FileTypeAllowed||this.validationStates.error?.FileSizeAllowed)}parser(){if(this.__previouslyParsedFiles===this._inputNode.files)return this.modelValue;this.__previouslyParsedFiles=this._inputNode.files;let e=this._inputNode.files?Array.from(this._inputNode.files):[];return this.multiple?[...this.modelValue??[],...e]:e}formatter(e){return this._inputNode?.value||``}__setupDragDropEventListeners(){let e=this.shadowRoot?.querySelector(`.input-file__drop-zone`);[`dragenter`,`dragover`,`dragleave`].forEach(t=>{e?.addEventListener(t,e=>{e.preventDefault(),e.stopPropagation(),this.isDragging=t!==`dragleave`},!1)}),window.addEventListener(`drop`,e=>{e.target===this._inputNode&&e.preventDefault(),this.isDragging=!1},!1)}firstUpdated(e){super.firstUpdated(e),this.__setupFileValidators(),this._inputNode&&(this._inputNode.type=this.type,this._inputNode.setAttribute(`tabindex`,`-1`),this._inputNode.multiple=this.multiple,this.accept.length&&(this._inputNode.accept=this.accept)),this.enableDropZone&&this._isDragAndDropSupported&&(this.__setupDragDropEventListeners(),this.setAttribute(`drop-zone`,``)),this._fileListNode.addEventListener(`file-remove-requested`,this._onRemoveFile)}updated(e){super.updated(e),e.has(`disabled`)&&(this._inputNode.disabled=this.disabled,this.validate()),e.has(`buttonLabel`)&&this._buttonNode&&(this._buttonNode.textContent=this.buttonLabel),e.has(`name`)&&(this._inputNode.name=this.name),e.has(`_ariaLabelledNodes`)&&this.__syncAriaLabelledByAttributesToButton(),e.has(`_ariaDescribedNodes`)&&this.__syncAriaDescribedByAttributesToButton(),e.has(`uploadResponse`)&&(this._selectedFilesMetaData.length===0&&this.uploadResponse.forEach(e=>{let t={systemFile:{name:e.name},response:e,status:e.status,validationFeedback:[{message:e.errorMessage}]};this._selectedFilesMetaData=[...this._selectedFilesMetaData,t]}),this._selectedFilesMetaData.forEach(e=>{!this.uploadResponse.some(t=>t.name===e.systemFile.name)&&this.uploadOnSelect?this.__removeFileFromList(e):(this.uploadResponse.forEach(t=>{t.name===e.systemFile.name&&(e.response=t,e.downloadUrl=t.downloadUrl?t.downloadUrl:e.downloadUrl,e.status=t.status,e.validationFeedback=[{type:typeof t.errorMessage==`string`&&t.errorMessage?.length>0?`error`:`success`,message:t.errorMessage??``}])}),this._selectedFilesMetaData=[...this._selectedFilesMetaData])}),this._updateUploadButtonDescription())}__computeNewAddedFiles(e){let t=e.filter(e=>this._selectedFilesMetaData.findIndex(t=>t.systemFile.name===e.name)===-1);return this.__duplicateFileNamesValidator.param={show:e.length!==t.length},this.validate(),t}_processDroppedFiles(e){if(e.preventDefault(),this.isDragging=!1,!(e.dataTransfer&&e.dataTransfer.items.length>1&&!this.multiple||!e.dataTransfer?.files)){if(this._inputNode.files=e.dataTransfer.files,this.multiple){let t=this.__computeNewAddedFiles(Array.from(e.dataTransfer.files));this.modelValue=[...this.modelValue??[],...t]}else this.modelValue=Array.from(e.dataTransfer.files);this._processFiles(Array.from(e.dataTransfer.files))}}_onChange(e){this.touched=!0,this._onUserInputChanged(),this._processFiles(e?.target?.files)}_onClick(e){e.target.value=``}__syncAriaLabelledByAttributesToButton(){if(this._inputNode.hasAttribute(`aria-labelledby`)){let e=this._inputNode.getAttribute(`aria-labelledby`);this._buttonNode?.setAttribute(`aria-labelledby`,`select-button-${this._inputId} ${e}`)}}__syncAriaDescribedByAttributesToButton(){if(this._inputNode.hasAttribute(`aria-describedby`)){let e=this._inputNode.getAttribute(`aria-describedby`)||``;this._buttonNode?.setAttribute(`aria-describedby`,e)}}__setupFileValidators(){this.defaultValidators=[new nu(this._acceptCriteria),this.__duplicateFileNamesValidator]}_processFiles(e){let t=this.__computeNewAddedFiles(Array.from(e));!this.multiple&&t.length>0&&(this._selectedFilesMetaData=[],this.uploadResponse=[]);let n;for(let e of t.values())n=new su(e,this._acceptCriteria),n.failedProp?.length?(this._handleErroredFiles(n),this.uploadResponse=[...this.uploadResponse,{name:n.systemFile.name,status:`FAIL`,errorMessage:n.validationFeedback[0].message}]):this.uploadResponse=[...this.uploadResponse,{name:n.systemFile.name,status:`SUCCESS`}],this._selectedFilesMetaData=[...this._selectedFilesMetaData,n],this._handleErrors();let r=this._selectedFilesMetaData.filter(({systemFile:e,status:n})=>t.includes(e)&&n===`SUCCESS`).map(({systemFile:e})=>e);r.length>0&&this._dispatchFileListChangeEvent(r)}_dispatchFileListChangeEvent(e){this.dispatchEvent(new CustomEvent(`file-list-changed`,{detail:{newFiles:e}}))}_handleErrors(){let e=!1;if(this._selectedFilesMetaData.forEach(t=>{t.failedProp&&t.failedProp.length>0&&(e=!0)}),e)this.hasFeedbackFor?.push(`error`),this.shouldShowFeedbackFor.push(`error`);else if(this._prevHasErrors&&this.hasFeedbackFor.includes(`error`)){let e=this.hasFeedbackFor.indexOf(`error`);this.hasFeedbackFor.slice(e,e+1);let t=this.shouldShowFeedbackFor.indexOf(`error`);this.shouldShowFeedbackFor.slice(t,t+1)}this._prevHasErrors=e}_handleErroredFiles(e){e.validationFeedback=[];let{allowedFileExtensions:t,allowedFileTypes:n}=this._acceptCriteria,r=[],i=0,a;t.length?(r=t,a=r.pop(),i=r.length):n.length&&(n.forEach(e=>{if(e.endsWith(`/*`))r.push(e.slice(0,-2));else if(e===`text/plain`)r.push(`text`);else{let t=e.indexOf(`/`),n=e.slice(t+1);if(!n.includes(`+`))r.push(`.${n}`);else{let e=n.split(`+`);r.push(`.${e[0]}`)}}}),a=r.pop(),i=r.length);let o=``;o=a?i?`${this.msgLit(`lion-input-file:allowedFileValidatorComplex`,{allowedTypesArray:r.join(`, `),allowedTypesLastItem:a,maxSize:fu(this.maxFileSize)})}`:`${this.msgLit(`lion-input-file:allowedFileValidatorSimple`,{allowedType:a,maxSize:fu(this.maxFileSize)})}`:`${this.msgLit(`lion-input-file:allowedFileSize`,{maxSize:fu(this.maxFileSize)})}`;let s={message:o,type:`error`};e.validationFeedback?.push(s)}_updateUploadButtonDescription(){let e=[],t;this._selectedFilesMetaData.forEach(n=>{n.status===`FAIL`&&(t=n.validationFeedback?n.validationFeedback[0].message.toString():``,e.push(n.systemFile.name))});let n=this.querySelector(`[slot="after"]`);if(n)if(!this._selectedFilesMetaData||this._selectedFilesMetaData.length===0)this.uploadOnSelect?n.textContent=this.msgLit(`lion-input-file:noFilesUploaded`):n.textContent=this.msgLit(`lion-input-file:noFilesSelected`);else if(this._selectedFilesMetaData.length===1){let{name:e}=this._selectedFilesMetaData[0].systemFile;this.uploadOnSelect?n.textContent=t||this.msgLit(`lion-input-file:fileUploaded`)+(e??``):n.textContent=t||this.msgLit(`lion-input-file:fileSelected`)+(e??``)}else this.uploadOnSelect?n.textContent=`${this.msgLit(`lion-input-file:filesUploaded`,{numberOfFiles:this._selectedFilesMetaData.length})} ${t?this.msgLit(`lion-input-file:generalValidatorMessage`,{validatorMessage:t,listOfErroneousFiles:e.join(`, `)}):``}`:n.textContent=`${this.msgLit(`lion-input-file:filesSelected`,{numberOfFiles:this._selectedFilesMetaData.length})} ${t?this.msgLit(`lion-input-file:generalValidatorMessage`,{validatorMessage:t,listOfErroneousFiles:e.join(`, `)}):``}`}__removeFileFromList(e){this._selectedFilesMetaData=this._selectedFilesMetaData.filter(t=>t.systemFile.name!==e.systemFile.name),this.modelValue&&=this.modelValue.filter(t=>t.name!==e.systemFile.name),this._inputNode.value=``,this._handleErrors(),this._updateUploadButtonDescription()}_onRemoveFile(e){if(this.disabled)return;let{removedFile:t}=e.detail;!this.uploadOnSelect&&t&&this.__removeFileFromList(t),this._removeFile(t)}_removeFile(e){this.dispatchEvent(new CustomEvent(`file-removed`,{detail:{removedFile:e,status:e.status,uploadResponse:e.response}}))}_reflectBackOn(){return!1}_isEmpty(){return this.modelValue?.length===0}_dropZoneTemplate(){return m`
      <div @drop="${this._processDroppedFiles}" class="input-file__drop-zone">
        <div class="input-file__drop-zone__text">
          ${this.msgLit(`lion-input-file:dragAndDropText`)}
        </div>
        <slot name="file-select-button"></slot>
      </div>
    `}_inputGroupAfterTemplate(){return m` <slot name="selected-file-list"></slot> `}_inputGroupInputTemplate(){return m`
      <slot name="input"> </slot>
      <slot name="after"> </slot>
      ${this.enableDropZone&&this._isDragAndDropSupported?this._dropZoneTemplate():m`
            <div class="input-group__file-select-button">
              <slot name="file-select-button"></slot>
            </div>
          `}
    `}static get styles(){return[super.styles,_`
        .input-group__container {
          position: relative;
          display: flex;
          flex-direction: column;
          width: fit-content;
        }

        :host([drop-zone]) .input-group__container {
          width: auto;
        }

        .input-group__container ::slotted(input[type='file']) {
          /** Invisible, since means of interaction is button */
          position: absolute;
          opacity: 0;
          /** Full cover positioned, so it will be a drag and drop surface */
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .input-file__drop-zone {
          display: flex;
          position: relative;
          flex-direction: column;
          align-items: center;
          border: dashed 2px black;
          padding: 24px 0;
        }

        .input-group__container ::slotted([slot='after']) {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(100%);
          clip: rect(1px, 1px, 1px, 1px);
          white-space: nowrap;
          border: 0;
          margin: 0;
          padding: 0;
        }
      `]}__openDialogOnBtnClick(e){e.preventDefault(),e.stopPropagation(),this._inputNode.click()}},mu=class extends du{static get styles(){return[...super.styles,_`
        ul {
          display: flex;
          flex-direction: column;
          gap: var(--c-spacing-sm);
        }

        li {
          display: flex;
          align-items: center;
          gap: var(--c-spacing-sm);
          padding: var(--c-spacing-sm);
          border: 1px solid var(--c-color-neutral-border-quiet);
          border-radius: var(--c-radius-sm);
          background-color: var(--c-surface-default);
        }

        .file-name {
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .remove-button {
          flex-shrink: 0;
        }

        .preview-thumb {
          width: var(--thumbnail-size, calc(120rem / 16));
          height: auto;
        }

        .selected__list__item__label {
          display: flex;
          align-items: center;
          gap: var(--c-spacing-sm);
        }

        .selected__list__item__remove-button {
          margin-inline-start: var(--c-spacing-md);
        }
      `]}_listItemAfterTemplate(e,t){return m`
      <craft-button
        icon
        size="small"
        variant="plain"
        class="selected__list__item__remove-button"
        aria-label="${this.msgLit(`lion-input-file:removeButtonLabel`,{fileName:e.systemFile.name})}"
        @click=${()=>this._removeFile(e)}
      >
        ${this._removeButtonContentTemplate()}
      </craft-button>
    `}_removeButtonContentTemplate(){return m`<craft-icon name="x"></craft-icon>`}_listItemBeforeTemplate(e){return m`<img src="${e.downloadUrl}" alt="" class="preview-thumb" />`}},hu=_`
  /* Add any craft-specific styles for input-file here */
  ::slotted([slot='selected-file-list']) {
    margin-block-start: var(--c-spacing-lg);
  }
`,gu=class extends pu{static get styles(){return[...super.styles,ml,hu]}get slots(){return{...super.slots,"file-select-button":()=>m`<craft-button
          type="button"
          id="select-button-${this._inputId}"
          @click="${this.__openDialogOnBtnClick}"
        >
          ${this.buttonLabel}
        </craft-button>`}}static get scopedElements(){return{...super.scopedElements,"lion-selected-file-list":mu}}};customElements.get(`craft-input-file`)||customElements.define(`craft-input-file`,gu);var _u=_`
  craft-input input[type='checkbox'],
  craft-input input[type='radio'] {
    background-color: var(--c-input-fill, var(--c-form-control-fill));
    border-width: var(
      --c-input-border-width,
      var(--c-form-control-border-width)
    );
    border-style: var(
      --c-input-border-style,
      var(--c-form-control-border-style)
    );
    border-color: var(
      --c-input-border-color,
      var(--c-form-control-border-color)
    );
    border-radius: var(--c-input-radius, var(--c-radius-sm));
  }

  [slot='help-text'] {
    font-size: var(--c-text-base);
    color: var(--c-text-quiet);
  }

  :host([hidden-input]) .input-group__container {
    display: none;
  }
`,vu=class extends Ic{constructor(...e){super(...e),this.size=`medium`,this.small=!1,this.center=!1,this.monospace=!1,this.hiddenInput=!1}static get styles(){return[...super.styles,ml,_u]}connectedCallback(){super.connectedCallback(),this._inputNode&&this.maxlength&&this.maxlength>0&&(this._inputNode.maxLength=this.maxlength)}};n([v({type:Number,reflect:!0})],vu.prototype,`maxlength`,void 0),n([v({type:String,reflect:!0})],vu.prototype,`size`,void 0),n([v({reflect:!0,type:Boolean})],vu.prototype,`small`,void 0),n([v({reflect:!0,type:Boolean})],vu.prototype,`center`,void 0),n([v({reflect:!0,type:Boolean})],vu.prototype,`monospace`,void 0),n([v({reflect:!0,type:Boolean,attribute:`hidden-input`})],vu.prototype,`hiddenInput`,void 0),customElements.get(`craft-input`)||customElements.define(`craft-input`,vu);var yu=class extends vu{constructor(...e){super(...e),this.autocorrect=!1,this.autocapitalize=`off`}static get styles(){return[...super.styles,_`
        .input-group__input {
          font-family: var(--c-font-mono);
          font-size: 0.9em;
        }
      `]}firstUpdated(e){super.firstUpdated(e),this._inputNode?.setAttribute(`autocorrect`,this.autocorrect?`on`:`off`),this._inputNode?.setAttribute(`autocapitalize`,this.autocapitalize)}};n([v({reflect:!0})],yu.prototype,`autocorrect`,void 0),n([v({reflect:!0,type:String})],yu.prototype,`autocapitalize`,void 0),customElements.get(`craft-input-handle`)||customElements.define(`craft-input-handle`,yu);var bu=class extends Ic{static get styles(){return[...super.styles,ml,_`
        .input-group__container {
          position: relative;
        }

        .input-group__suffix {
          position: absolute;
          inset-inline-end: var(--c-input-spacing-inline);
          inset-block-start: 50%;
          transform: translateY(calc(-50%));
        }
      `]}constructor(){super(),this._visible=!1,this.reveal=()=>{this._visible=!this._visible,this.type=this._visible?`text`:`password`},this.renderSuffix=()=>m`
      <craft-button
        type="button"
        icon
        size="small"
        variant="plain"
        @click="${this.reveal}"
        appearance="plain"
      >
        <span class="icon"
          >${this._visible?m`<craft-icon
                name="eye-slash"
                label="${o(`Hide`)}"
              ></craft-icon>`:m`<craft-icon name="eye" label="${o(`Show`)}"></craft-icon>`}
        </span>
      </craft-button>
    `,this.type=`password`}get slots(){return{...super.slots,suffix:()=>({template:this.renderSuffix()})}}};n([y()],bu.prototype,`_visible`,void 0),customElements.get(`craft-input-password`)||customElements.define(`craft-input-password`,bu);var xu=class extends g{constructor(...e){super(...e),this.appearance=`raised`,this.size=`lg`}render(){return m`<div
      class="${c({"cp-pane":!0,"cp-pane--raised":this.appearance===`raised`,"cp-pane--sunken":this.appearance===`sunken`,"cp-pane--lg":this.size===`lg`,"cp-pane--md":this.size===`md`,"cp-pane--sm":this.size===`sm`})}"
    >
      <slot></slot>
    </div>`}};xu.styles=[_`
      .cp-pane {
        display: block;
        border: 1px solid var(--c-color-border-quiet);
        border-radius: var(--c-radius-md);
      }

      .cp-pane--lg {
        padding: var(--c-spacing-lg);
      }

      .cp-pane--raised {
        background-color: var(--c-surface-raised);
        box-shadow: var(--c-shadow-raised);
      }
    `],n([v()],xu.prototype,`appearance`,void 0),n([v()],xu.prototype,`size`,void 0),customElements.get(`craft-pane`)||customElements.define(`craft-pane`,xu);var Su=_`
  :host {
    --_height: var(--c-progress-bar-height, 0.375rem);
    --_radius: var(--c-progress-bar-radius, var(--c-radius-full));
    --_track-color: var(
      --c-progress-bar-track-color,
      var(--c-color-neutral-fill-quiet)
    );
    --_fill-color: var(
      --c-progress-bar-fill-color,
      var(--c-color-accent-border-normal)
    );

    display: block;
  }

  :host([show-status]) {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 0.5em;
  }

  :host([hidden]) {
    display: none;
  }

  .progress-bar {
    border-radius: var(--_radius);
    border: 2px solid var(--_fill-color);
    padding: 2px;
    max-width: 100%;
    height: var(--_height);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .progress-bar__fill {
    border-radius: calc(var(--_radius) - 4px);
    height: 100%;
    background-color: var(--_fill-color);
  }

  .progress-bar__fill--smooth {
    transition: width 0.2s ease-out;
  }

  .progress-bar--pending .progress-bar__fill {
    width: 100%;
    background: repeating-linear-gradient(
      -45deg,
      var(--_fill-color),
      var(--_fill-color) 10px,
      var(--_track-color) 10px,
      var(--_track-color) 20px
    );
    background-size: 300% 100%;
    background-position: 0 0;
    animation: progress-bar-pending 1s linear infinite;
  }

  @keyframes progress-bar-pending {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 28.28px 0; /* sqrt(2) * 20px for 45deg stripes */
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .progress-bar--pending .progress-bar__fill {
      animation: none;
    }

    .progress-bar__fill--smooth {
      transition: none;
    }
  }

  .progress-bar__status {
    font-size: 0.9em;
    fon
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Cu=new WeakMap,wu=class extends g{constructor(...e){super(...e),this.progress=0,this.total=0,this.processed=0,this.showStatus=!1,this.pending=!1,this.smooth=!1,this.label=`Progress`,w(this,Cu,0)}updated(e){if((e.has(`total`)||e.has(`processed`))&&this.total>0){let e=Math.min(100,Math.round(this.processed/this.total*100));e>=100&&E(Cu,this)<100&&this.dispatchEvent(new CustomEvent(`complete`,{bubbles:!0,composed:!0})),this.progress=e}e.has(`progress`)&&(this.progress>0&&this.pending&&(this.pending=!1),T(Cu,this,this.progress))}get progressPercent(){return Math.min(100,Math.max(0,this.progress))}get statusText(){return this.total>0?`${this.processed} / ${this.total}`:`${this.progressPercent}%`}reset(){this.progress=0,this.processed=0,this.pending=!0,T(Cu,this,0)}show(){this.hidden=!1}hide(){this.hidden=!0}render(){let e={width:this.pending?`100%`:`${this.progressPercent}%`};return m`
      <div
        class=${c({"progress-bar":!0,"progress-bar--pending":this.pending})}
        part="track"
        role="progressbar"
        aria-valuenow=${this.pending?h:this.progressPercent}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.label}
      >
        <div
          class=${c({"progress-bar__fill":!0,"progress-bar__fill--smooth":this.smooth&&!this.pending})}
          part="fill"
          style=${a(e)}
        ></div>
      </div>
      ${this.showStatus?m`<div class="progress-bar__status" part="status">
            ${this.statusText}
          </div>`:h}
      <span class="visually-hidden">
        ${this.pending?`Loading`:`${this.progressPercent}%`}
      </span>
    `}};wu.styles=[Su],n([v({type:Number})],wu.prototype,`progress`,void 0),n([v({type:Number})],wu.prototype,`total`,void 0),n([v({type:Number})],wu.prototype,`processed`,void 0),n([v({type:Boolean,attribute:`show-status`})],wu.prototype,`showStatus`,void 0),n([v({type:Boolean,reflect:!0})],wu.prototype,`pending`,void 0),n([v({type:Boolean})],wu.prototype,`smooth`,void 0),n([v({type:String})],wu.prototype,`label`,void 0),customElements.get(`craft-progress-bar`)||customElements.define(`craft-progress-bar`,wu);var Tu=new WeakMap,Eu=new WeakMap,Du=new WeakMap,Ou=new WeakMap,ku=new WeakMap,Au=new WeakMap,ju=new WeakMap,Mu=new WeakMap,Nu=new WeakMap,Pu=new WeakMap,Fu=new WeakMap,Y=new WeakSet,Iu=class extends g{constructor(...e){super(...e),C(this,Y),this.progress=0,this.failed=!1,this.color=`currentColor`,this.bgColor=`#a3afbb`,this.failColor=`#da5a47`,this.label=`Progress`,this.autoComplete=!1,w(this,Tu,null),w(this,Eu,0),w(this,Du,0),w(this,Ou,0),w(this,ku,0),w(this,Au,0),w(this,ju,null),w(this,Mu,0),w(this,Nu,null),w(this,Pu,0),w(this,Fu,!1)}connectedCallback(){super.connectedCallback(),T(Fu,this,window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)}disconnectedCallback(){super.disconnectedCallback(),S(Y,this,Uu).call(this)}firstUpdated(){T(Tu,this,this.renderRoot.querySelector(`canvas`)),S(Y,this,Lu).call(this),S(Y,this,Ru).call(this)}updated(e){e.has(`progress`)?S(Y,this,Ru).call(this):(e.has(`color`)||e.has(`bgColor`)||e.has(`failColor`)||e.has(`failed`))&&S(Y,this,Bu).call(this)}get canvas(){return E(Tu,this)}get prefersReducedMotion(){return E(Fu,this)}runCompleteAnimation(){return new Promise(e=>{if(E(Fu,this)){T(Au,this,1),E(Tu,this)&&(E(Tu,this).style.opacity=`0`),S(Y,this,Bu).call(this),e();return}S(Y,this,Hu).call(this,1,()=>{E(Tu,this)&&(E(Tu,this).style.transition=`opacity 0.4s`,E(Tu,this).style.opacity=`0`),setTimeout(e,400)})})}async complete(){await this.runCompleteAnimation(),this.dispatchEvent(new CustomEvent(`complete`,{bubbles:!0,composed:!0}))}render(){return m`
      <canvas
        part="canvas"
        role="progressbar"
        aria-valuenow=${(this.progress>=0?this.progress:void 0)??``}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.label}
      ></canvas>
      <span class="visually-hidden">
        ${this.failed?`Failed`:this.progress<0?`Loading`:`${this.progress}%`}
      </span>
    `}};function Lu(){let e=getComputedStyle(this),t=parseFloat(e.getPropertyValue(`--_size`)),n=parseFloat(e.getPropertyValue(`--_stroke-width`)),r=window.devicePixelRatio>1?2:1;T(Eu,this,t*r),T(Du,this,E(Eu,this)/2),T(ku,this,n*r),T(Ou,this,(t/2-n/2)*r),E(Tu,this)&&(E(Tu,this).width=E(Eu,this),E(Tu,this).height=E(Eu,this))}function Ru(){if(this.progress>=0&&E(Nu,this)!==null&&(cancelAnimationFrame(E(Nu,this)),T(Nu,this,null),T(Mu,this,0)),this.progress<0){E(Nu,this)===null&&S(Y,this,zu).call(this);return}let e=this.progress/100;if(this.autoComplete&&this.progress>=100&&E(Pu,this)<100){T(Pu,this,this.progress),this.complete();return}E(Pu,this)>0&&this.progress>E(Pu,this)&&!E(Fu,this)?S(Y,this,Hu).call(this,e):(T(Au,this,e),S(Y,this,Bu).call(this)),T(Pu,this,this.progress)}function zu(){if(E(Fu,this)){T(Au,this,.25),S(Y,this,Bu).call(this);return}let e=()=>{T(Mu,this,E(Mu,this)+.05),T(Au,this,.15+.1*Math.sin(E(Mu,this)*3)),S(Y,this,Bu).call(this),T(Nu,this,requestAnimationFrame(e))};T(Nu,this,requestAnimationFrame(e))}function Bu(){let e=E(Tu,this)?.getContext(`2d`);if(e){if(e.clearRect(0,0,E(Eu,this),E(Eu,this)),this.failed){S(Y,this,Vu).call(this,e,this.failColor,1,0);return}if(S(Y,this,Vu).call(this,e,this.bgColor,1,0),E(Au,this)>0){let t=this.progress<0?E(Mu,this):-Math.PI/2;S(Y,this,Vu).call(this,e,this.color,E(Au,this),t)}}}function Vu(e,t,n,r){e.strokeStyle=t,e.lineWidth=E(ku,this),e.lineCap=`round`,e.beginPath(),e.arc(E(Du,this),E(Du,this),E(Ou,this),r,r+n*2*Math.PI),e.stroke()}function Hu(e,t){S(Y,this,Uu).call(this);let n=performance.now(),r=E(Au,this),i=a=>{let o=a-n,s=Math.min(o/500,1),c=1-(1-s)**3;T(Au,this,r+(e-r)*c),S(Y,this,Bu).call(this),s<1?T(ju,this,requestAnimationFrame(i)):(T(ju,this,null),t?.())};T(ju,this,requestAnimationFrame(i))}function Uu(){E(ju,this)!==null&&(cancelAnimationFrame(E(ju,this)),T(ju,this,null)),E(Nu,this)!==null&&(cancelAnimationFrame(E(Nu,this)),T(Nu,this,null))}Iu.styles=_`
    :host {
      --_size: var(--c-progress-size, 16px);
      --_stroke-width: var(--c-progress-stroke-width, 3px);

      display: inline-block;
      position: relative;
      width: var(--_size);
      height: var(--_size);
    }

    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: var(--_size);
      height: var(--_size);
    }

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  `,n([v({type:Number})],Iu.prototype,`progress`,void 0),n([v({type:Boolean})],Iu.prototype,`failed`,void 0),n([v({type:String})],Iu.prototype,`color`,void 0),n([v({type:String,attribute:`bg-color`})],Iu.prototype,`bgColor`,void 0),n([v({type:String,attribute:`fail-color`})],Iu.prototype,`failColor`,void 0),n([v({type:String})],Iu.prototype,`label`,void 0),n([v({type:Boolean,attribute:`auto-complete`})],Iu.prototype,`autoComplete`,void 0),customElements.get(`craft-progress`)||customElements.define(`craft-progress`,Iu);var Wu=class extends Ac(Pc(g)){connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`radiogroup`)}resetGroup(){let e;this.formElements.forEach(t=>{typeof t.resetGroup==`function`?t.resetGroup():typeof t.reset==`function`&&(t.reset(),t.checked&&(e=t.choiceValue))}),this.modelValue=e,this.resetInteractionState()}},Gu=class extends Mc(Ic){connectedCallback(){super.connectedCallback(),this.type=`radio`}},Ku=class extends Wu{static get styles(){return[...super.styles,ml,_`
        .input-group {
          display: grid;
          gap: var(--c-spacing-xs);
        }
      `]}};customElements.get(`craft-radio-group`)||customElements.define(`craft-radio-group`,Ku);var qu=class extends Gu{static get styles(){return[...super.styles,_`
        /* same as checkbox, potentially consolidate */
        :host {
          gap: var(--c-spacing-sm);
        }
      `]}};customElements.get(`craft-radio`)||customElements.define(`craft-radio`,qu);var Ju=_`
  craft-button {
    cursor: move;
  }

  :host([disabled]) {
    cursor: default;
    opacity: 0.25;
    pointer-events: none;
  }
`,Yu=class extends g{constructor(...e){super(...e),this.label=null,this.position=`middle`,this.variant=`neutral`,this.disabled=!1}updated(e){super.updated(e),e.has(`disabled`)&&(this.disabled?this.setAttribute(`aria-disabled`,`true`):this.removeAttribute(`aria-disabled`))}_reorder(e){this.disabled||e===`up`&&this.position===`first`||e===`down`&&this.position===`last`||this.dispatchEvent(new CustomEvent(`reorder`,{detail:{direction:e}}))}render(){let e=this.label??o(`Reorder`);return m`
      <craft-action-menu ?disabled="${this.disabled}">
        <craft-button
          slot="invoker"
          type="button"
          icon
          size="small"
          appearance="plain"
          variant="${this.variant}"
          ?disabled="${this.disabled}"
        >
          <craft-icon label="${e}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M71.3 295.6c-21.9-21.9-21.9-57.3 0-79.2s57.3-21.9 79.2 0 21.9 57.3 0 79.2-57.4 21.9-79.2 0Zm113.1-113.1c-21.9-21.9-21.9-57.3 0-79.2s57.3-21.9 79.2 0c21.9 21.9 21.9 57.3 0 79.2s-57.3 21.8-79.2 0Zm0 147c21.9-21.9 57.3-21.9 79.2 0 21.9 21.9 21.9 57.3 0 79.2s-57.3 21.9-79.2 0c-21.9-21.8-21.9-57.3 0-79.2Zm113.1-113.1c21.9-21.9 57.3-21.9 79.2 0s21.9 57.3 0 79.2-57.3 21.9-79.2 0c-21.8-21.9-21.8-57.3 0-79.2Z"
              />
            </svg>
          </craft-icon>
        </craft-button>

        <div slot="content">
          <craft-action-item
            icon="arrow-up"
            ?disabled="${this.position===`first`}"
            @click="${()=>this._reorder(`up`)}"
            data-action="moveUp"
            command="--move-up"
            >${o(`Move up`)}</craft-action-item
          >
          <craft-action-item
            icon="arrow-down"
            ?disabled="${this.position===`last`}"
            @click="${()=>this._reorder(`down`)}"
            data-action="moveDown"
            command="--move-down"
            >${o(`Move down`)}</craft-action-item
          >
        </div>
      </craft-action-menu>
    `}};Yu.styles=[Ju],n([v()],Yu.prototype,`label`,void 0),n([v({reflect:!0})],Yu.prototype,`position`,void 0),n([v({reflect:!0})],Yu.prototype,`variant`,void 0),n([v({reflect:!0,type:Boolean})],Yu.prototype,`disabled`,void 0),customElements.get(`craft-reorder-button`)||customElements.define(`craft-reorder-button`,Yu);var Xu=class extends ii(Xa){static get styles(){return[...super.styles,_`
        :host {
          justify-content: space-between;
          align-items: center;
        }

        #content-wrapper {
          position: relative;
          pointer-events: none;
        }
      `]}static get properties(){return{selectedElement:{type:Object},hostElement:{type:Object},readOnly:{type:Boolean,reflect:!0,attribute:`readonly`},singleOption:{type:Boolean,reflect:!0,attribute:`single-option`}}}get slots(){return{...super.slots,after:()=>{let e=document.createElement(`span`);return e.textContent=`▼`,e.setAttribute(`role`,`img`),e.setAttribute(`aria-hidden`,`true`),e}}}get _contentWrapperNode(){return this.shadowRoot.getElementById(`content-wrapper`)}constructor(){super(),this.readOnly=!1,this.selectedElement=null,this.hostElement=null,this.singleOption=!1,this.type=`button`}__handleKeydown(e){switch(e.key){case`ArrowDown`:case`ArrowUp`:e.preventDefault()}}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this.__handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.__handleKeydown)}_contentTemplate(){if(this.selectedElement){let e=Array.from(this.selectedElement.childNodes);return e.length>0?e.map(e=>e.cloneNode(!0)):this.selectedElement.textContent}return this._noSelectionTemplate()}render(){return m` ${this._beforeTemplate()} ${super.render()} ${this._afterTemplate()} `}_noSelectionTemplate(){return m``}_beforeTemplate(){return m` <div id="content-wrapper">${this._contentTemplate()}</div> `}_afterTemplate(){return m`${this.singleOption?``:m`<slot name="after"></slot>`}`}};function Zu(){return oi.isMac?`mac`:`windows/linux`}var Qu=class extends ii(sc(qi(_l))){static get scopedElements(){return{...super.scopedElements,"lion-select-invoker":Xu}}static get properties(){return{navigateWithinInvoker:{type:Boolean,attribute:`navigate-within-invoker`},interactionMode:{type:String,attribute:`interaction-mode`},singleOption:{type:Boolean,reflect:!0,attribute:`single-option`}}}_inputGroupInputTemplate(){return m`
      <div class="input-group__input">
        <slot name="invoker"></slot>
        <div id="overlay-content-node-wrapper">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      </div>
    `}get slots(){return{...super.slots,invoker:()=>m`<lion-select-invoker></lion-select-invoker>`}}get _invokerNode(){return Array.from(this.children).find(e=>e.slot===`invoker`)}get _focusableNode(){return this._invokerNode}get _scrollTargetNode(){return this._overlayContentNode._scrollTargetNode||this._overlayContentNode}constructor(){super(),this.navigateWithinInvoker=!1,this.interactionMode=`auto`,this.singleOption=!1,this._arrowWidth=28,this.__onKeyUp=this.__onKeyUp.bind(this),this.__invokerOnBlur=this.__invokerOnBlur.bind(this),this.__overlayOnHide=this.__overlayOnHide.bind(this),this.__overlayOnShow=this.__overlayOnShow.bind(this),this.__invokerOnClick=this.__invokerOnClick.bind(this),this.__overlayBeforeShow=this.__overlayBeforeShow.bind(this),this._listboxOnClick=this._listboxOnClick.bind(this)}connectedCallback(){super.connectedCallback(),this.registrationComplete.then(()=>{this._invokerNode.selectedElement=this.formElements[this.checkedIndex]}),this._invokerNode.hostElement=this,this.__setupInvokerNode(),this.__toggleInvokerDisabled(),this.addEventListener(`keyup`,this.__onKeyUp)}disconnectedCallback(){super.disconnectedCallback(),this.__teardownInvokerNode(),this.removeEventListener(`keyup`,this.__onKeyUp)}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`interactionMode`&&(this.interactionMode===`auto`?this.interactionMode=Zu():(this.selectionFollowsFocus=this.interactionMode===`windows/linux`,this.navigateWithinInvoker=this.interactionMode===`windows/linux`)),(e===`disabled`||e===`readOnly`)&&this.__toggleInvokerDisabled()}updated(e){super.updated(e),e.has(`disabled`)&&(this.disabled?this._invokerNode.makeRequestToBeDisabled():this._invokerNode.retractRequestToBeDisabled()),e.has(`singleOption`)&&(this.singleOption?(this._invokerNode.removeAttribute(`role`),this._invokerNode.removeAttribute(`aria-haspopup`),this._invokerNode.removeAttribute(`aria-expanded`)):(this._invokerNode.setAttribute(`role`,`button`),this._invokerNode.setAttribute(`aria-haspopup`,`listbox`),this._invokerNode.setAttribute(`aria-expanded`,`${this.opened}`))),this._inputNode&&this._invokerNode&&(e.has(`_ariaLabelledNodes`)&&this._invokerNode.setAttribute(`aria-labelledby`,`${this._inputNode.getAttribute(`aria-labelledby`)} ${this._invokerNode.id}`),e.has(`_ariaDescribedNodes`)&&this._invokerNode.setAttribute(`aria-describedby`,this._inputNode.getAttribute(`aria-describedby`)),e.has(`showsFeedbackFor`)&&this._invokerNode.setAttribute(`aria-invalid`,`${this._hasFeedbackVisibleFor(`error`)}`)),e.has(`modelValue`)&&this.__syncInvokerElement()}addFormElement(e,t){super.addFormElement(e,t),!this.hasNoDefaultSelected&&!this.__hasInitialSelectedFormElement&&(!e.disabled||this.disabled)&&(e.active=!0,e.checked=!0,this.__hasInitialSelectedFormElement=!0),this._alignInvokerWidth(),this._onFormElementsChanged()}removeFormElement(e){super.removeFormElement(e),this._alignInvokerWidth(),this._onFormElementsChanged()}_getCheckedElements(){return this.formElements.filter(e=>e.checked)}_onFormElementsChanged(){this.singleOption=this.formElements.length===1&&!this.hasNoDefaultSelected,this._invokerNode.singleOption=this.singleOption}__initInteractionStates(){this.initInteractionState()}__toggleInvokerDisabled(){this._invokerNode&&(this._invokerNode.disabled=this.disabled,this._invokerNode.readOnly=this.readOnly)}__syncInvokerElement(){this._invokerNode&&(this._invokerNode.selectedElement=this.formElements[this.checkedIndex],this._invokerNode.requestUpdate(`selectedElement`))}__setupInvokerNode(){this._invokerNode.id=`invoker-${this._inputId}`,this._invokerNode.setAttribute(`aria-haspopup`,`listbox`),this.__setupInvokerNodeEventListener()}__invokerOnClick(){!this.disabled&&!this.readOnly&&!this.singleOption&&!this.__blockListShow&&this._overlayCtrl.toggle()}__invokerOnBlur(){this.dispatchEvent(new Event(`blur`))}__setupInvokerNodeEventListener(){this._invokerNode.addEventListener(`click`,this.__invokerOnClick),this._invokerNode.addEventListener(`blur`,this.__invokerOnBlur)}__teardownInvokerNode(){this._invokerNode.removeEventListener(`click`,this.__invokerOnClick),this._invokerNode.removeEventListener(`blur`,this.__invokerOnBlur)}_defineOverlayConfig(){return{...Zi(),visibilityTriggerFunction:void 0}}_noDefaultSelectedInheritsWidth(){this.checkedIndex===-1?this._overlayCtrl.updateConfig({inheritsReferenceWidth:`min`}):this._overlayCtrl.updateConfig({inheritsReferenceWidth:this._initialInheritsReferenceWidth})}__overlayBeforeShow(){this.hasNoDefaultSelected&&this._noDefaultSelectedInheritsWidth(),this._listboxNode.setAttribute(`autofocus`,``)}__overlayOnShow(){this.checkedIndex!=null&&(this.activeIndex=this.checkedIndex),this._listboxNode.focus()}__overlayOnHide(){this._invokerNode.focus(),this._listboxNode.removeAttribute(`autofocus`)}_setupOverlayCtrl(){super._setupOverlayCtrl(),this._initialInheritsReferenceWidth=this._overlayCtrl.inheritsReferenceWidth,this._alignInvokerWidth(),this._overlayCtrl.addEventListener(`before-show`,this.__overlayBeforeShow),this._overlayCtrl.addEventListener(`show`,this.__overlayOnShow),this._overlayCtrl.addEventListener(`hide`,this.__overlayOnHide)}_teardownOverlayCtrl(){super._teardownOverlayCtrl(),this._overlayCtrl.removeEventListener(`show`,this.__overlayOnShow),this._overlayCtrl.removeEventListener(`before-show`,this.__overlayBeforeShow),this._overlayCtrl.removeEventListener(`hide`,this.__overlayOnHide)}async _alignInvokerWidth(){if(await this.updateComplete,!this._overlayCtrl?.content)return;let e=this._overlayCtrl.content.style.display,t=this._overlayCtrl.contentWrapperNode.style.minWidth,n=this._overlayCtrl.contentWrapperNode.style.width;this._overlayCtrl.content.style.display=``,this._overlayCtrl.contentWrapperNode.style.minWidth=`auto`,this._overlayCtrl.contentWrapperNode.style.width=`auto`;let r=this._overlayCtrl.contentWrapperNode.getBoundingClientRect().width;r>0&&(this._invokerNode.style.width=`${r+this._arrowWidth}px`),this._overlayCtrl.content.style.display=e,this._overlayCtrl.contentWrapperNode.style.minWidth=t,this._overlayCtrl.contentWrapperNode.style.width=n}_onLabelClick(){this._invokerNode.focus()}get _overlayInvokerNode(){return this._invokerNode}get _overlayContentNode(){return this._listboxNode}__onKeyUp(e){if(this.disabled||this.readOnly||this.singleOption||this.opened)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});let{key:t}=e;switch(t){case`ArrowUp`:e.preventDefault(),this.navigateWithinInvoker?this.setCheckedIndex(this._getPreviousEnabledOption(this.checkedIndex)):this.opened=!0;break;case`ArrowDown`:e.preventDefault(),this.navigateWithinInvoker?this.setCheckedIndex(this._getNextEnabledOption(this.checkedIndex)):this.opened=!0;break;case`ArrowLeft`:e.preventDefault(),this.navigateWithinInvoker&&this.setCheckedIndex(this._getPreviousEnabledOption(this.checkedIndex));break;case`ArrowRight`:e.preventDefault(),this.navigateWithinInvoker&&this.setCheckedIndex(this._getNextEnabledOption(this.checkedIndex));break;default:this._noTypeAhead||this._handleTypeAhead(e,{setAsChecked:!0})}}_listboxOnKeyDown(e){if(super._listboxOnKeyDown(e),this.disabled)return;let{key:t}=e;switch(t){case`Tab`:if(this._overlayCtrl.config.trapsKeyboardFocus===!0)return;this.opened=!1;break;case`Escape`:this.opened=!1,this.__blockListShowDuringTransition();break;case`Enter`:case` `:this.opened=!1,this.__blockListShowDuringTransition();break}}_listboxOnClick(){this.opened=!1}_setupListboxNode(){super._setupListboxNode(),this._listboxNode.addEventListener(`click`,this._listboxOnClick)}_teardownListboxNode(){super._teardownListboxNode(),this._listboxNode&&this._listboxNode.removeEventListener(`click`,this._listboxOnClick)}__blockListShowDuringTransition(){this.__blockListShow=!0,setTimeout(()=>{this.__blockListShow=!1},200)}},$u=_`
  :host {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--c-spacing-sm);
    width: 100%;
    cursor: pointer;
    padding-block: 0;
    padding-inline: var(--c-input-spacing-inline);
    min-height: calc(var(--c-input-height, var(--c-size-control-md)) - 2px);
    font: inherit;
    overflow: clip;
  }

  :host([disabled]) {
    cursor: not-allowed;
    opacity: 0.5;
  }

  #content-wrapper {
    position: relative;
    pointer-events: none;
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .indicator {
    flex: 0 0 auto;
    font-size: 0.8em;
  }
`,ed=class extends Xu{static get styles(){return[...super.styles,$u]}_afterTemplate(){return m`${this.singleOption?``:m`<craft-icon class="indicator" name="chevron-down"></craft-icon>`}`}},td=_`
  ${pl}

  :host {
    width: 100%;
  }

  :host([small]) .input-group__input {
    --c-input-height: calc(var(--c-size-control-sm) - 2px);
  }

  .input-group__input {
    ${fl}
    padding-inline: 0;
    position: relative;
    min-height: calc(var(--c-input-height, var(--c-size-control-md)) - 2px);
    background-color: transparent;
  }

  #overlay-content-node-wrapper {
    position: absolute;
    width: 100%;
  }

  ::slotted([slot='input']) {
    display: grid;
    gap: var(--c-spacing-xs);
    border: 1px solid var(--c-color-neutral-border-quiet);
    border-radius: var(--c-radius-md);
    background-color: var(--c-surface-overlay);
    box-shadow: var(--c-shadow-sm);
    padding: var(--c-spacing-sm);
    max-height: calc(var(--c-spacing) * 60);
    overflow: auto;
  }
`,nd=class extends Qu{constructor(...e){super(...e),this.small=!1}static get styles(){return[...super.styles,td]}static get scopedElements(){return{...super.scopedElements,"lion-select-invoker":ed}}async _alignInvokerWidth(){if(await this.updateComplete,!this._overlayCtrl?.content)return;let e=this._overlayCtrl.content.style.display,t=this._overlayCtrl.contentWrapperNode.style.minWidth,n=this._overlayCtrl.contentWrapperNode.style.width;this._overlayCtrl.content.style.display=``,this._overlayCtrl.contentWrapperNode.style.minWidth=`auto`,this._overlayCtrl.contentWrapperNode.style.width=`auto`;let r=this._overlayCtrl.contentWrapperNode.getBoundingClientRect().width;r>0&&(this._invokerNode.style.minWidth=`${r}px`,this._invokerNode.style.width=``),this._overlayCtrl.content.style.display=e,this._overlayCtrl.contentWrapperNode.style.minWidth=t,this._overlayCtrl.contentWrapperNode.style.width=n}_inputGroupInputTemplate(){return m`
      <div class="input-group__input">
        <slot name="invoker"></slot>
        <div id="overlay-content-node-wrapper">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      </div>
    `}};n([v({reflect:!0,type:Boolean})],nd.prototype,`small`,void 0),customElements.get(`craft-select-rich`)||customElements.define(`craft-select-rich`,nd);var rd=_`
  :host {
    display: block;
  }
`;function id(e){return e.charAt(0).toUpperCase()+e.slice(1)}var ad=class extends g{constructor(...e){super(...e),this.label=``,this.name=``,this.modelValue=null,this.allowTransparent=!1}_swatchTemplate(e){return m`<span
      class="select-color__swatch"
      style="${e===`__blank__`?`flex:0 0 auto;inline-size:1rem;block-size:1rem;border-radius:var(--c-radius-full);box-shadow:inset 0 0 0 1px rgb(0 0 0 / 15%);background:linear-gradient(45deg, var(--c-color-neutral-fill-quiet) 25%, transparent 25%),linear-gradient(-45deg, var(--c-color-neutral-fill-quiet) 25%, transparent 25%),linear-gradient(45deg, transparent 75%, var(--c-color-neutral-fill-quiet) 75%),linear-gradient(-45deg, transparent 75%, var(--c-color-neutral-fill-quiet) 75%);background-position:0 0, 0 0.25rem, 0.25rem -0.25rem, -0.25rem 0;background-size:0.5rem 0.5rem;`:`flex:0 0 auto;inline-size:1rem;block-size:1rem;border-radius:var(--c-radius-full);box-shadow:inset 0 0 0 1px rgb(0 0 0 / 15%);background-color:var(--c-color-${e}-fill-loud);`}"
      aria-hidden="true"
    ></span>`}_optionTemplate(e,t){return m`<craft-option .choiceValue=${e}>
      <span
        class="select-color__option"
        style="display:flex;align-items:center;gap:var(--c-spacing-sm);"
      >
        ${this._swatchTemplate(e)}
        <span class="select-color__label" style="white-space:nowrap;"
          >${t}</span
        >
      </span>
    </craft-option>`}_handleModelValueChanged(e){e.stopPropagation();let t=e.target;this.modelValue=t?.modelValue??null,this.dispatchEvent(new CustomEvent(`model-value-changed`,{bubbles:!0,composed:!0}))}render(){return m`
      <craft-select-rich
        label=${this.label}
        name=${this.name}
        .modelValue=${this.modelValue}
        @model-value-changed=${this._handleModelValueChanged}
      >
        ${this.allowTransparent?this._optionTemplate(`__blank__`,o(`Transparent`)):``}
        ${la.map(e=>this._optionTemplate(e,o(id(e))))}
      </craft-select-rich>
    `}};ad.styles=[rd],n([v()],ad.prototype,`label`,void 0),n([v()],ad.prototype,`name`,void 0),n([v()],ad.prototype,`modelValue`,void 0),n([v({type:Boolean,reflect:!0,attribute:`allow-transparent`})],ad.prototype,`allowTransparent`,void 0),customElements.get(`craft-select-color`)||customElements.define(`craft-select-color`,ad);var od=class extends Tc{static get properties(){return{autocomplete:{type:String}}}constructor(){super(),this.autocomplete=void 0}get _inputNode(){return Array.from(this.children).find(e=>e.slot===`input`)}},sd=class extends od{get operationMode(){return`select`}connectedCallback(){super.connectedCallback(),this._inputNode.addEventListener(`change`,this._proxyChangeEvent),this.__selectObserver=new MutationObserver(()=>{this._syncValueUpwards(),this._calculateValues({source:`model`})}),this.__selectObserver.observe(this._inputNode,{attributes:!0,childList:!0,subtree:!0})}updated(e){super.updated(e),e.has(`disabled`)&&(this._inputNode.disabled=this.disabled,this.validate()),e.has(`name`)&&(this._inputNode.name=this.name),e.has(`autocomplete`)&&(this._inputNode.autocomplete=this.autocomplete)}disconnectedCallback(){super.disconnectedCallback(),this._inputNode.removeEventListener(`change`,this._proxyChangeEvent),this.__selectObserver?.disconnect()}formatter(e){let t=Array.from(this._inputNode.options).find(t=>t.value===e);return t?t.text:``}_reflectBackFormattedValueToUser(){this._reflectBackOn()&&(this.value=this.modelValue===void 0?``:this.modelValue)}_proxyChangeEvent(){this.dispatchEvent(new CustomEvent(`user-input-changed`,{bubbles:!0,composed:!0}))}},cd=_`
  ${pl}

  :host {
    width: 100%;
  }

  :host([small]) .input-group__input {
    --c-input-height: calc(var(--c-size-control-sm) - 2px);
  }

  ::slotted(.form-control) {
    width: 100%;
    height: 100%;
    appearance: none;
    border: 0;
    min-height: none;
    padding-inline: var(--c-input-spacing-inline)
      calc(var(--c-input-spacing-inline) * 1.5 + 1em);
    border-radius: var(--c-input-radius);
  }

  .input-group__input {
    ${fl}
    padding-inline: 0;
    position: relative;
    min-height: calc(var(--c-input-height, var(--c-size-control-md)) - 2px);
  }

  .indicator {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: var(--c-input-spacing-inline);
    transform: translateY(-50%);
    width: 1em;
    height: 1em;
  }
`,ld=class extends sd{constructor(...e){super(...e),this.small=!1}static get styles(){return[...super.styles,cd]}_inputGroupInputTemplate(){return m`
      <div class="input-group__input">
        <slot name="input"></slot>
        <craft-icon
          class="indicator"
          name="chevron-down"
          style="font-size: 0.8em"
        ></craft-icon>
      </div>
    `}};n([v({reflect:!0,type:Boolean})],ld.prototype,`small`,void 0),customElements.get(`craft-select`)||customElements.define(`craft-select`,ld);var ud=_`
  :host {
    display: inline-flex;
    --size: var(--c-size-icon-xs);
  }

  .status {
    display: inline-flex;
    width: var(--size);
    aspect-ratio: 1;
    border-radius: var(--c-radius-full);
    border: 1px solid transparent;
  }

  .status--live {
    background-color: var(--c-status-live-fill);
    border-color: var(--c-status-live-border);
  }

  .status--enabled {
    background-color: var(--c-status-enabled-fill);
    border-color: var(--c-status-enabled-border);
  }

  .status--pending {
    background-color: var(--c-status-pending-fill);
    border-color: var(--c-status-pending-border);
  }

  .status--expired {
    background-color: var(--c-status-expired-fill);
    border-color: var(--c-status-expired-border);
  }

  .status--disabled {
    background-color: var(--c-status-disabled-fill);
    border: 1px solid var(--c-status-disabled-border);
  }
`,dd=class extends g{constructor(...e){super(...e),this.label=null,this.status=null}getLabel(){return!this.label&&this.status?`Status: ${this.status}`:this.label}render(){return m`
      <span
        class="${c({status:!0,"status--live":this.status===`live`,"status--enabled":this.status===`enabled`,"status--pending":this.status===`pending`,"status--expired":this.status===`expired`,"status--disabled":this.status===`disabled`})}"
        role="img"
        aria-label="${this.getLabel()}"
      ></span>
    `}};dd.styles=[ud],n([v()],dd.prototype,`label`,void 0),n([v()],dd.prototype,`status`,void 0),customElements.get(`craft-status`)||customElements.define(`craft-status`,dd);var fd=class extends Wr(g){static get properties(){return{checked:{type:Boolean,reflect:!0}}}static get styles(){return[_`
        :host {
          display: inline-block;
          position: relative;
          width: 36px;
          height: 16px;
          outline: 0;
        }

        :host([hidden]) {
          display: none;
        }

        .btn {
          position: relative;
          height: 100%;
          outline: 0;
        }

        :host(:focus:not([disabled])) .switch-button__thumb {
          /* if you extend, please overwrite */
          outline: 2px solid #bde4ff;
        }

        .switch-button__track {
          background: #eee;
          width: 100%;
          height: 100%;
        }

        .switch-button__thumb {
          background: #ccc;
          width: 50%;
          height: 100%;
          position: absolute;
          top: 0;
        }

        :host([checked]) .switch-button__thumb {
          right: 0;
        }
      `]}render(){return m`
      <div class="btn">
        <div class="switch-button__track"></div>
        <div class="switch-button__thumb"></div>
      </div>
    `}constructor(){super(),this.value=``,this.checked=!1,this.__initialized=!1,this._toggleChecked=this._toggleChecked.bind(this),this.__handleKeydown=this._handleKeydown.bind(this),this.__handleKeyup=this._handleKeyup.bind(this)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`switch`),this.setAttribute(`aria-checked`,`${this.checked}`),this.addEventListener(`click`,this._toggleChecked),this.addEventListener(`keydown`,this.__handleKeydown),this.addEventListener(`keyup`,this.__handleKeyup)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this._toggleChecked),this.removeEventListener(`keydown`,this.__handleKeydown),this.removeEventListener(`keyup`,this.__handleKeyup)}_toggleChecked(){this.disabled||(this.focus(),this.checked=!this.checked)}__checkedStateChange(){this.dispatchEvent(new Event(`checked-changed`,{bubbles:!0})),this.setAttribute(`aria-checked`,`${this.checked}`)}_handleKeydown(e){e.key===` `&&e.preventDefault()}_handleKeyup(e){[` `,`Enter`].includes(e.key)&&this._toggleChecked()}updated(e){super.updated(e),e.has(`disabled`)&&this.setAttribute(`aria-disabled`,`${this.disabled}`)}requestUpdate(e,t,n){super.requestUpdate(e,t,n),this.__initialized&&this.isConnected&&e===`checked`&&this.checked!==t&&!this.disabled&&this.__checkedStateChange()}firstUpdated(e){super.firstUpdated(e),this.__initialized=!0}},pd=class extends sc(Mc(Tc)){static get styles(){return[...super.styles,_`
        :host([hidden]) {
          display: none;
        }

        :host([disabled]) {
          color: #adadad;
        }
      `]}static get scopedElements(){return{...super.scopedElements,"lion-switch-button":fd}}get _inputNode(){return Array.from(this.children).find(e=>e.slot===`input`)}get slots(){return{...super.slots,input:()=>{let e=this.createScopedElement(`lion-switch-button`);return e.setAttribute(`data-tag-name`,`lion-switch-button`),e}}}render(){return m`
      <div class="form-field__group-one">${this._groupOneTemplate()}</div>
      <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
    `}_groupOneTemplate(){return m`${this._labelTemplate()} ${this._helpTextTemplate()} ${this._feedbackTemplate()}`}_groupTwoTemplate(){return m`${this._inputGroupTemplate()}`}constructor(){super(),this.checked=!1,this.__handleButtonSwitchCheckedChanged=this.__handleButtonSwitchCheckedChanged.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(`checked-changed`,this.__handleButtonSwitchCheckedChanged),this._labelNode&&this._labelNode.addEventListener(`click`,this._toggleChecked),this._syncButtonSwitch()}disconnectedCallback(){super.disconnectedCallback(),this._inputNode&&this.removeEventListener(`checked-changed`,this.__handleButtonSwitchCheckedChanged),this._labelNode&&this._labelNode.removeEventListener(`click`,this._toggleChecked)}updated(e){super.updated(e),e.has(`disabled`)&&this._syncButtonSwitch()}_toggleChecked(e){e.preventDefault(),super._toggleChecked(e)}_isEmpty(){return!1}__handleButtonSwitchCheckedChanged(e){e.stopPropagation(),this._isHandlingUserInput=!0,this.checked=this._inputNode.checked,this._isHandlingUserInput=!1}_syncButtonSwitch(){this._inputNode.disabled=this.disabled}_onLabelClick(){this.disabled||this._inputNode.focus()}},md=class extends fd{constructor(...e){super(...e),this.indeterminate=!1}updated(e){super.updated(e),(e.has(`indeterminate`)||e.has(`checked`))&&this.setAttribute(`aria-checked`,this.checked?`true`:this.indeterminate?`mixed`:`false`)}static get styles(){return[...super.styles,_`
        :host {
          --c-switch-height: var(--c-size-control-sm);
          --c-switch-thumb-offset: 6px;
          --c-switch-thumb-height: calc(
            var(--c-switch-height) - var(--c-switch-thumb-offset)
          );
          display: flex;
          height: var(--c-switch-height);
          width: calc(var(--c-switch-height) * 2);
          margin: -1px;
        }

        :host([size='small']) {
          --c-switch-height: var(--c-size-control-xs);
          --c-switch-thumb-offset: 4px;
        }

        .btn {
          width: 100%;
        }

        .switch-button__track {
          --tw-inset-shadow-color: var(--color-slate-300);
          margin-inline: -1px;
          background-color: var(--c-color-neutral-fill-quiet);
          border-radius: var(--c-radius-full);
          border: 1px solid var(--c-form-control-border-color);
          box-shadow: var(--c-input-shadow);
        }

        .switch-button__thumb {
          height: var(--c-switch-thumb-height);
          width: auto;
          aspect-ratio: 1;
          border-radius: var(--c-radius-full);
          border: 1px solid var(--c-form-control-border-color);
          background-color: var(--c-switch-thumb-fill, var(--c-surface-raised));
          inset-block-start: calc(var(--c-switch-thumb-offset) / 2);
          inset-inline-start: calc(var(--c-switch-thumb-offset) / 2);
          inset-inline-end: auto;
        }

        :host([indeterminate]:not([checked])) .switch-button__thumb {
          inset-inline-start: calc(50% - (var(--c-switch-thumb-height) / 2));
          inset-inline-end: auto;
        }

        :host([checked]) .switch-button__track {
          background-color: var(--c-color-static-success-fill);
        }

        :host([checked]) .switch-button__thumb {
          border: 1px solid var(--c-color-success-border-loud);
          inset-inline-start: auto;
          inset-inline-end: calc(
            (var(--c-switch-height) - var(--c-switch-thumb-height)) / 2
          );
        }

        :host([checked]) .switch-button__thumb:after {
          content: '';
          position: absolute;
          inset-block-start: 3px;
          inset-inline-start: 4px;
          mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--%3E%3Cpath d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z'/%3E%3C/svg%3E");
          mask-repeat: no-repeat;
          width: calc(var(--c-switch-thumb-height) - 6px);
          aspect-ratio: 1;
          background-color: var(--c-color-success-on-normal);
        }
      `]}};n([v({type:Boolean,reflect:!0})],md.prototype,`indeterminate`,void 0),customElements.get(`craft-switch-button`)||customElements.define(`craft-switch-button`,md);var hd=_`
  :host {
    display: grid;
  }

  .input-group {
    display: inline-flex;
    align-items: center;
  }

  ::slotted(label) {
    font-weight: bold;
  }

  .state-label {
    cursor: pointer;
    user-select: none;
  }

  .state-label[data-state='off'] {
    margin-inline-end: var(--c-spacing-sm);
  }

  .state-label[data-state='on'] {
    margin-inline-start: var(--c-spacing-sm);
  }

  ::slotted([slot='state-description']) {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
  }
`;function gd(e){return(e??``).split(/\s+/).filter(Boolean)}function _d(e){return typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e}var vd=Symbol.for(`craft-switch-synthetic-change`),yd=class extends pd{constructor(...e){super(...e),this.size=`medium`,this.onLabel=``,this.offLabel=``,this.checkedValue=`1`,this.indeterminateValue=`-`,this.indeterminate=!1,this.__externalLabelledByNodes=[],this.__externalDescribedByNodes=[],this.__clickableExternalLabels=new Set,this.__onKeydown=e=>{if(e.key!==`ArrowLeft`&&e.key!==`ArrowRight`||this.disabled||e.target!==this._inputNode)return;e.preventDefault();let t=getComputedStyle(this).direction===`rtl`;this._setCheckedState(e.key===(t?`ArrowLeft`:`ArrowRight`))},this.__forwardNativeChange=e=>{e.target===this._inputNode&&this.__dispatchNativeChange()},this.__onExternalLabelClick=e=>{this.disabled||e.composedPath().includes(this)||this._inputNode?.click()}}static get styles(){return[...super.styles,pl,hd]}get slots(){return{...super.slots,input:()=>{let e=this.createScopedElement(`craft-switch-button`);return e.setAttribute(`size`,this.size),e.setAttribute(`data-tag-name`,`craft-switch-button`),e},"state-description":()=>{let e=document.createElement(`div`);return e.textContent=this._stateDescriptionText,e},"hidden-input":()=>{if(!this.name)return;let e=document.createElement(`input`);return e.type=`hidden`,e.name=this.name,e.value=this._postedValue,e.disabled=this.disabled,e}}}static get scopedElements(){return{...super.scopedElements,"craft-switch-button":md}}connectedCallback(){super.connectedCallback(),this.__adoptExternalAria(),this.addEventListener(`checked-changed`,this.__forwardNativeChange),this.addEventListener(`keydown`,this.__onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`checked-changed`,this.__forwardNativeChange),this.removeEventListener(`keydown`,this.__onKeydown),this.__teardownExternalLabelClicks()}get _hiddenInputNode(){return Array.from(this.children).find(e=>e instanceof HTMLInputElement&&e.slot===`hidden-input`)}get _postedValue(){return this.checked?this.checkedValue:this.indeterminate?this.indeterminateValue:``}get _stateDescriptionNode(){return Array.from(this.children).find(e=>e.slot===`state-description`)}get _stateDescriptionText(){return[this.onLabel?o(`Check for {onLabel}.`,{onLabel:this.onLabel}):``,this.offLabel?o(`Uncheck for {offLabel}.`,{offLabel:this.offLabel}):``].filter(Boolean).join(` `)}updated(e){super.updated(e),e.has(`checked`)&&this.checked&&this.indeterminate&&(this.indeterminate=!1),(e.has(`onLabel`)||e.has(`offLabel`))&&this.__syncStateDescription(),[`checked`,`indeterminate`,`checkedValue`,`indeterminateValue`,`disabled`,`size`].some(t=>e.has(t))&&(this.__syncSwitchButton(),this.__syncHiddenInput()),(e.has(`checked`)||e.has(`indeterminate`))&&this.__syncToggleTargets()}__syncToggleTargets(){let e=this._inputNode;if(!e)return;let t=e.getAttribute(`data-target`),n=e.getAttribute(`data-reverse-target`);if(!t&&!n)return;let r=window.jQuery;r&&r(e).data?.(`fieldtoggle`)||(this.__toggleTargets(t,this.checked),this.__toggleTargets(n,!this.checked))}__toggleTargets(e,t){if(!e)return;let n=/^[#.]/.test(e)?e:`#${e}`,r=this.getRootNode(),i=!1;for(let e of r.querySelectorAll(n))e.classList.contains(`hidden`)===t&&(e.classList.toggle(`hidden`,!t),i=!0);i&&t&&window.dispatchEvent(new Event(`resize`))}_setCheckedState(e){if(this.disabled)return;let t=this.indeterminate;this.checked===e&&!t||(this.indeterminate=!1,this.checked===e?t&&this.__dispatchNativeChange():this.checked=e)}__dispatchNativeChange(){let e=new Event(`change`,{bubbles:!0});e[vd]=!0,this._inputNode?.dispatchEvent(e)}_onChange(e){e&&vd in e||super._onChange(e)}__adoptExternalAria(){let e=this._inputNode;if(!e)return;let t=this.getRootNode();for(let n of gd(e.getAttribute(`aria-labelledby`))){let e=t.getElementById(n);e&&!this.__externalLabelledByNodes.includes(e)&&(this.addToAriaLabelledBy(e,{reorder:!1}),this.__externalLabelledByNodes.push(e))}for(let n of gd(e.getAttribute(`aria-describedby`))){let e=t.getElementById(n);e&&!this.__externalDescribedByNodes.includes(e)&&(this.addToAriaDescribedBy(e,{reorder:!1}),this.__externalDescribedByNodes.push(e))}this.__setupExternalLabelClicks()}__setupExternalLabelClicks(){let e=this._inputNode;if(!e)return;let t=this.getRootNode(),n=new Set(this.__externalLabelledByNodes.filter(e=>e instanceof HTMLLabelElement));if(e.id)for(let r of t.querySelectorAll(`label[for="${_d(e.id)}"]`))n.add(r);for(let e of n)this.__clickableExternalLabels.has(e)||(e.addEventListener(`click`,this.__onExternalLabelClick),this.__clickableExternalLabels.add(e))}__teardownExternalLabelClicks(){for(let e of this.__clickableExternalLabels)e.removeEventListener(`click`,this.__onExternalLabelClick);this.__clickableExternalLabels.clear()}__syncSwitchButton(){let e=this._inputNode;if(!e)return;e.getAttribute(`size`)!==this.size&&e.setAttribute(`size`,this.size);let t=this.indeterminate&&!this.checked;e.indeterminate!==t&&(e.indeterminate=t)}__syncHiddenInput(){let e=this._hiddenInputNode;e&&(e.value=this._postedValue,e.disabled=this.disabled,this.name&&e.name!==this.name&&(e.name=this.name))}__syncStateDescription(){let e=this._stateDescriptionNode;if(!e)return;let t=this._stateDescriptionText;e.textContent=t,t?this.addToAriaDescribedBy(e,{idPrefix:`state-description`,reorder:!1}):this.removeFromAriaDescribedBy(e)}_groupOneTemplate(){return m`${super._groupOneTemplate()} ${this._stateDescriptionTemplate()}`}_stateDescriptionTemplate(){return m`<slot name="state-description"></slot>`}_stateLabelTemplate(e){let t=e===`on`?this.onLabel:this.offLabel;return t?m`<span
      class="state-label"
      data-state=${e}
      aria-hidden="true"
      @click=${()=>this._setCheckedState(e===`on`)}
      >${t}</span
    >`:h}_inputGroupBeforeTemplate(){return m`
      <div class="input-group__before">
        <slot name="before"></slot>
        ${this._stateLabelTemplate(`off`)}
      </div>
    `}_inputGroupAfterTemplate(){return m`
      <div class="input-group__after">
        ${this._stateLabelTemplate(`on`)}
        <slot name="after"></slot>
      </div>
    `}};n([v({type:String,reflect:!0})],yd.prototype,`size`,void 0),n([v({type:String,attribute:`on-label`})],yd.prototype,`onLabel`,void 0),n([v({type:String,attribute:`off-label`})],yd.prototype,`offLabel`,void 0),n([v({attribute:`value`})],yd.prototype,`checkedValue`,void 0),n([v({attribute:`indeterminate-value`})],yd.prototype,`indeterminateValue`,void 0),n([v({type:Boolean,reflect:!0})],yd.prototype,`indeterminate`,void 0),customElements.get(`craft-switch`)||customElements.define(`craft-switch`,yd);function bd({el:e,uid:t}){e.setAttribute(`id`,`panel-${t}`),e.setAttribute(`role`,`tabpanel`),e.setAttribute(`aria-labelledby`,`button-${t}`),e.hasAttribute(`tabindex`)||e.setAttribute(`tabindex`,`0`)}function xd(e){e.setAttribute(`selected`,`true`)}function Sd(e){e.removeAttribute(`selected`)}function Cd({el:e,uid:t,clickHandler:n,keydownHandler:r,keyupHandler:i}){e.setAttribute(`id`,`button-${t}`),e.setAttribute(`role`,`tab`),e.setAttribute(`aria-controls`,`panel-${t}`),e.addEventListener(`click`,n),e.addEventListener(`keyup`,i),e.addEventListener(`keydown`,r)}function wd({el:e,clickHandler:t,keydownHandler:n,keyupHandler:r}){e.removeAttribute(`id`),e.removeAttribute(`role`),e.removeAttribute(`aria-controls`),e.removeEventListener(`click`,t),e.removeEventListener(`keyup`,r),e.removeEventListener(`keydown`,n)}function Td(e,t=!1){t&&e.focus(),e.setAttribute(`selected`,`true`),e.setAttribute(`aria-selected`,`true`),e.setAttribute(`tabindex`,`0`)}function Ed(e){e.removeAttribute(`selected`),e.setAttribute(`aria-selected`,`false`),e.setAttribute(`tabindex`,`-1`)}function Dd(e){let t=e;switch(t.key){case`ArrowDown`:case`ArrowRight`:case`ArrowUp`:case`ArrowLeft`:case`Home`:case`End`:t.preventDefault()}}var Od=class extends g{static get properties(){return{selectedIndex:{type:Number,attribute:`selected-index`,reflect:!0}}}static get styles(){return[_`
        .tabs__tab-group {
          display: flex;
        }

        .tabs__tab-group ::slotted([slot='tab'][selected]) {
          font-weight: bold;
        }

        .tabs__panels ::slotted([slot='panel']) {
          visibility: hidden;
          display: none;
        }

        .tabs__panels ::slotted([slot='panel'][selected]) {
          visibility: visible;
          display: block;
        }

        .tabs__panels {
          display: block;
        }
      `]}render(){return m`
      <div class="tabs__tab-group" role="tablist">
        <slot name="tab"></slot>
      </div>
      <div class="tabs__panels">
        <slot name="panel"></slot>
      </div>
    `}constructor(){super(),this.selectedIndex=0}firstUpdated(e){super.firstUpdated(e),this.__setupSlots(),this.tabs[0]?.disabled&&(this.selectedIndex=this.tabs.findIndex(e=>!e.disabled))}get tabs(){return Array.from(this.children).filter(e=>e.slot===`tab`)}get panels(){return Array.from(this.children).filter(e=>e.slot===`panel`)}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];__setupSlots(){if(this.shadowRoot){let e=this.shadowRoot.querySelector(`slot[name=tab]`);e&&e.addEventListener(`slotchange`,()=>{this.__cleanStore(),this.__setupStore(),this.__updateSelected(!1)})}}__setupStore(){this.__store=[],this.tabs.length!==this.panels.length&&console.warn(`The amount of tabs (${this.tabs.length}) doesn't match the amount of panels (${this.panels.length}).`),this.tabs.forEach((e,t)=>{let n={uid:si(),el:e,button:e,panel:this.panels[t],clickHandler:this.__createButtonClickHandler(t),keydownHandler:Dd.bind(this),keyupHandler:this.__handleButtonKeyup.bind(this)};bd({...n,el:n.panel}),Cd(n),Sd(n.panel),Ed(n.button),this.__store&&this.__store.push(n)})}__cleanStore(){this.__store&&=(this.__store.forEach(e=>{wd(e)}),[])}__getNextNotDisabledTab(e,t,n){let r=[],i=e.filter((e,t)=>!e.disabled&&t>this.selectedIndex),a=e.filter((e,t)=>!e.disabled&&t<this.selectedIndex);return r=n===`right`?[...i,...a]:[...a.reverse(),...i.reverse()],r[0]}__getNextAvailableIndex(e,t){let n=this.tabs[this.selectedIndex];if(this.tabs.every(e=>!e.disabled))return e;if(t===`ArrowRight`||t===`ArrowDown`){let e=this.__getNextNotDisabledTab(this.tabs,n,`right`);return this.tabs.findIndex(t=>e===t)}if(t===`ArrowLeft`||t===`ArrowUp`){let e=this.__getNextNotDisabledTab(this.tabs,n,`left`);return this.tabs.findIndex(t=>e===t)}if(t===`Home`)return this.tabs.findIndex(e=>!e.disabled);if(t===`End`){let e=this.tabs.map((e,t)=>({disabled:e.disabled,index:t})).filter(e=>!e.disabled);return e[e.length-1].index}return-1}__createButtonClickHandler(e){return()=>{this._setSelectedIndexWithFocus(e)}}__handleButtonKeyup(e){let t=e;if(typeof this.selectedIndex==`number`)switch(t.key){case`ArrowDown`:case`ArrowRight`:this.selectedIndex+1>=this._pairCount?this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(0,t.key)):this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this.selectedIndex+1,t.key));break;case`ArrowUp`:case`ArrowLeft`:this.selectedIndex<=0?this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this._pairCount-1,t.key)):this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this.selectedIndex-1,t.key));break;case`Home`:this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(0,t.key));break;case`End`:this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this._pairCount-1,t.key));break}}get selectedIndex(){return this.__selectedIndex||0}set selectedIndex(e){if(e===this.__selectedIndex)return;let t=this.__selectedIndex;this.__selectedIndex=e,this.__updateSelected(!1),this.dispatchEvent(new Event(`selected-changed`)),this.requestUpdate(`selectedIndex`,t)}_setSelectedIndexWithFocus(e){if(e===-1)return;let t=this.__selectedIndex;this.__selectedIndex=e,this.__updateSelected(!0),this.dispatchEvent(new Event(`selected-changed`)),this.requestUpdate(`selectedIndex`,t)}get _pairCount(){return this.__store&&this.__store.length||0}__updateSelected(e=!1){if(!(this.__store&&typeof this.selectedIndex==`number`&&this.__store[this.selectedIndex]))return;let t=this.tabs.find(e=>e.hasAttribute(`selected`)),n=this.panels.find(e=>e.hasAttribute(`selected`));t&&Ed(t),n&&Sd(n);let{button:r,panel:i}=this.__store[this.selectedIndex];r&&Td(r,e),i&&xd(i)}},kd=_`
  :host {
    display: block;
  }

  :host([layout='vertical']) .tabs__tab-group {
    flex-direction: column;
  }

  .tabs__panels {
    padding-block-start: var(--c-spacing-lg);
  }

  .tabs__tab-group {
    gap: var(--c-spacing-md);
    border-bottom: 1px solid
      var(--c-tabs-border-end, var(--c-color-neutral-border-quiet));
  }
`,Ad=class extends Od{static get styles(){return[...super.styles,kd]}};customElements.get(`craft-tabs`)||customElements.define(`craft-tabs`,Ad);var jd=_`
  :host {
    display: inline-flex;
    padding-inline: var(--c-tab-spacing-inline, 1em);
    padding-block: var(--c-tab-spacing-block, 0.5em);
    position: relative;
    cursor: pointer;

    &:after {
      content: '';
      position: absolute;
      inset-block-end: -1px;
      inset-inline: 0;
      display: block;
      width: 100%;
      height: calc(2rem / 16);
      background-color: transparent;
    }
  }

  :host([selected]) {
    font-weight: 400;

    &:after {
      background-color: var(
        --c-tab-border-active,
        var(--c-color-accent-border-loud)
      );
    }
  }
`,Md=class extends g{render(){return m`<slot></slot> `}};Md.styles=[jd],customElements.get(`craft-tab`)||customElements.define(`craft-tab`,Md);var Nd=new Map;function Pd(e){var t=Nd.get(e);t&&t.destroy()}function Fd(e){var t=Nd.get(e);t&&t.update()}var Id=null;typeof window>`u`?((Id=function(e){return e}).destroy=function(e){return e},Id.update=function(e){return e}):((Id=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return function(e){if(e&&e.nodeName&&e.nodeName===`TEXTAREA`&&!Nd.has(e)){var t,n=null,r=window.getComputedStyle(e),i=(t=e.value,function(){o({testForHeightReduction:t===``||!e.value.startsWith(t),restoreTextAlign:null}),t=e.value}),a=function(t){e.removeEventListener(`autosize:destroy`,a),e.removeEventListener(`autosize:update`,s),e.removeEventListener(`input`,i),window.removeEventListener(`resize`,s),Object.keys(t).forEach(function(n){return e.style[n]=t[n]}),Nd.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,textAlign:e.style.textAlign,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener(`autosize:destroy`,a),e.addEventListener(`autosize:update`,s),e.addEventListener(`input`,i),window.addEventListener(`resize`,s),e.style.overflowX=`hidden`,e.style.wordWrap=`break-word`,Nd.set(e,{destroy:a,update:s}),s()}function o(t){var i,a,s=t.restoreTextAlign,c=s===void 0?null:s,l=t.testForHeightReduction,u=l===void 0||l,d=r.overflowY;if(e.scrollHeight!==0&&(r.resize===`vertical`?e.style.resize=`none`:r.resize===`both`&&(e.style.resize=`horizontal`),u&&(i=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push([e.parentNode,e.parentNode.scrollTop]),e=e.parentNode;return function(){return t.forEach(function(e){var t=e[0],n=e[1];t.style.scrollBehavior=`auto`,t.scrollTop=n,t.style.scrollBehavior=null})}}(e),e.style.height=``),a=r.boxSizing===`content-box`?e.scrollHeight-(parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)):e.scrollHeight+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),r.maxHeight!==`none`&&a>parseFloat(r.maxHeight)?(r.overflowY===`hidden`&&(e.style.overflow=`scroll`),a=parseFloat(r.maxHeight)):r.overflowY!==`hidden`&&(e.style.overflow=`hidden`),e.style.height=a+`px`,c&&(e.style.textAlign=c),i&&i(),n!==a&&(e.dispatchEvent(new Event(`autosize:resized`,{bubbles:!0})),n=a),d!==r.overflow&&!c)){var f=r.textAlign;r.overflow===`hidden`&&(e.style.textAlign=f===`start`?`end`:`start`),o({restoreTextAlign:f,testForHeightReduction:!0})}}function s(){o({testForHeightReduction:!0,restoreTextAlign:null})}}(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],Pd),e},Id.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],Fd),e});var Ld=Id,Rd=class extends Tc{get _inputNode(){return Array.from(this.children).find(e=>e.slot===`input`)}},zd=class extends kc(Rd){static get properties(){return{maxRows:{type:Number,attribute:`max-rows`},rows:{type:Number,reflect:!0},readOnly:{type:Boolean,attribute:`readonly`,reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`textarea`);return e.style.resize!==void 0&&(e.style.resize=`none`),e}}}constructor(){super(),this.rows=2,this.maxRows=6,this.readOnly=!1,this.placeholder=``}connectedCallback(){super.connectedCallback(),this.__initializeAutoresize(),this.__intersectionObserver=new IntersectionObserver(()=>this.resizeTextarea()),this.__intersectionObserver.observe(this)}updated(e){if(super.updated(e),e.has(`name`)&&(this._inputNode.name=this.name),e.has(`autocomplete`)&&(this._inputNode.autocomplete=this.autocomplete),e.has(`disabled`)&&(this._inputNode.disabled=this.disabled,this.validate()),e.has(`rows`)){let e=this._inputNode;e&&(e.rows=this.rows)}if(e.has(`readOnly`)){let e=this._inputNode;e&&(e.readOnly=this.readOnly)}if(e.has(`placeholder`)){let e=this._inputNode;e&&(e.placeholder=this.placeholder)}e.has(`modelValue`)&&this.resizeTextarea(),(e.has(`maxRows`)||e.has(`rows`))&&this.setTextareaMaxHeight()}disconnectedCallback(){super.disconnectedCallback(),Ld.destroy(this._inputNode)}setTextareaMaxHeight(){let{value:e}=this._inputNode;this._inputNode.value=``,this.resizeTextarea();let t=window.getComputedStyle(this._inputNode,null),n=parseFloat(t.lineHeight)||parseFloat(t.height)/this.rows,r=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),i=parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),a=t.boxSizing===`border-box`?r+i:0;this._inputNode.style.maxHeight=`${n*this.maxRows+a}px`,this._inputNode.value=e,this.resizeTextarea()}static get styles(){return[...super.styles,_`
        .input-group__container > .input-group__input ::slotted(.form-control) {
          box-sizing: content-box;
          overflow-x: hidden; /* for FF adds height to the TextArea to reserve place for scroll-bars */
        }

        /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
        :host([disabled]) ::slotted(textarea) {
          user-select: none;
        }
      `]}get updateComplete(){return this.__textareaUpdateComplete?Promise.all([this.__textareaUpdateComplete,super.updateComplete]):super.updateComplete}resizeTextarea(){Ld.update(this._inputNode)}__initializeAutoresize(){this.__shady_native_contains?this.__textareaUpdateComplete=this.__waitForTextareaRenderedInRealDOM().then(()=>{this.__startAutoresize(),this.__textareaUpdateComplete=null}):this.__startAutoresize()}async __waitForTextareaRenderedInRealDOM(){let e=3;for(;e!==0&&!this.__shady_native_contains(this._inputNode);)await new Promise(e=>setTimeout(e)),--e}__startAutoresize(){Ld(this._inputNode),this.setTextareaMaxHeight()}},Bd=_`
  :host(:not([label-sr-only])) .form-field__group-one {
    margin-bottom: var(--c-spacing-sm);
  }

  :host([monospace]) ::slotted([slot='input']) {
    font-family: var(--c-font-mono, monospace) !important;
    font-size: var(--c-text-sm);
  }

  ::slotted(label) {
    font-weight: bold;
  }

  ::slotted([slot='input']) {
    padding-block: var(--c-spacing-md);
    line-height: var(--leading-normal);
  }
`,Vd=class extends zd{constructor(...e){super(...e),this.monospace=!1}static get styles(){return[...super.styles,ml,Bd]}};n([v({type:Boolean,reflect:!0})],Vd.prototype,`monospace`,void 0),customElements.get(`craft-textarea`)||customElements.define(`craft-textarea`,Vd);var Hd=_`
  :host {
    /* Overall size of the thumbnail box. */
    --c-thumbnail-size: calc(34rem / 16);
    /* Corner radius applied when [rounded] is set. Defaults to a full circle. */
    --c-thumbnail-radius: var(--c-radius-full);
    /* Size of a single checker square. */
    --c-thumbnail-checker-size: 8px;
    /* Color of the checker squares. Matches the Craft 5 \`.thumb.checkered\` pattern. */
    --c-thumbnail-checker-color: hsl(211 13% 65% / 0.25);

    --_checker-half: calc(var(--c-thumbnail-checker-size) / 2);

    display: inline-flex;
  }

  .thumbnail {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--c-thumbnail-size);
    height: var(--c-thumbnail-size);
    overflow: clip;
    max-width: 100%;
    max-height: 100%;
  }

  .thumbnail__image,
  ::slotted(img),
  ::slotted(svg) {
    display: block;
    flex-shrink: 0;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  /* h/t https://gist.github.com/dfrankland/f6fed3e3ccc42e3de482b324126f9542 */
  .thumbnail--checkered .thumbnail__image,
  .thumbnail--checkered ::slotted(img) {
    background-image:
      linear-gradient(
        45deg,
        var(--c-thumbnail-checker-color) 25%,
        transparent 25%
      ),
      linear-gradient(
        135deg,
        var(--c-thumbnail-checker-color) 25%,
        transparent 25%
      ),
      linear-gradient(
        45deg,
        transparent 75%,
        var(--c-thumbnail-checker-color) 75%
      ),
      linear-gradient(
        135deg,
        transparent 75%,
        var(--c-thumbnail-checker-color) 75%
      );
    background-size: var(--c-thumbnail-checker-size)
      var(--c-thumbnail-checker-size);
    background-position:
      0 0,
      var(--_checker-half) 0,
      var(--_checker-half) calc(-1 * var(--_checker-half)),
      0 var(--_checker-half);
  }

  .thumbnail--rounded .thumbnail__image,
  .thumbnail--rounded ::slotted(img),
  .thumbnail--rounded ::slotted(svg) {
    border-radius: var(--c-thumbnail-radius);
  }
`,Ud={fromAttribute:e=>e!==null&&e!==`false`,toAttribute:e=>e?``:null},Wd=class extends g{constructor(...e){super(...e),this.src=null,this.srcset=null,this.sizes=null,this.alt=``,this.width=null,this.height=null,this.loading=`lazy`,this.checkered=!0,this.rounded=!1}render(){return m`
      <div class="${c({thumbnail:!0,"thumbnail--checkered":this.checkered,"thumbnail--rounded":this.rounded})}" part="thumbnail">
        ${this.src?m`<img
              class="thumbnail__image"
              part="image"
              src="${this.src}"
              srcset="${s(this.srcset??void 0)}"
              sizes="${s(this.sizes??void 0)}"
              width="${s(this.width??void 0)}"
              height="${s(this.height??void 0)}"
              alt="${this.alt}"
              loading="${this.loading}"
              decoding="async"
            />`:h}
        <slot></slot>
      </div>
    `}};Wd.styles=[Hd],n([v()],Wd.prototype,`src`,void 0),n([v()],Wd.prototype,`srcset`,void 0),n([v()],Wd.prototype,`sizes`,void 0),n([v()],Wd.prototype,`alt`,void 0),n([v({type:Number})],Wd.prototype,`width`,void 0),n([v({type:Number})],Wd.prototype,`height`,void 0),n([v()],Wd.prototype,`loading`,void 0),n([v({reflect:!0,converter:Ud})],Wd.prototype,`checkered`,void 0),n([v({type:Boolean,reflect:!0})],Wd.prototype,`rounded`,void 0),customElements.get(`craft-thumbnail`)||customElements.define(`craft-thumbnail`,Wd);var Gd=new WeakMap,Kd=new WeakSet,qd=class extends HTMLElement{constructor(...e){super(...e),C(this,Kd),w(this,Gd,null)}connectedCallback(){S(Kd,this,Jd).call(this)}disconnectedCallback(){E(Gd,this)?.destroy(),T(Gd,this,null)}};function Jd(){if(!(E(Gd,this)||!this.isConnected)){if(!this.querySelector(`[data-sizes]`)){requestAnimationFrame(()=>S(Kd,this,Jd).call(this));return}T(Gd,this,new il),E(Gd,this).load(this)}}customElements.get(`craft-thumbnail-loader`)||customElements.define(`craft-thumbnail-loader`,qd);var Yd=class e{constructor(t={}){this.config={...e.defaultCookieOptions,...t}}set(e,t,n={}){let{path:r,domain:i,maxAge:a,expires:o,secure:s,sameSite:c,prefix:l}=Object.assign({},this.config,n),u=`${this.config.prefix}:${e}=${encodeURIComponent(t)}`;r&&(u+=`;path=${r}`),i&&(u+=`;domain=${i}`),a?u+=`;max-age-in-seconds=${a}`:o&&(u+=`;expires=${o.toUTCString()}`),s&&(u+=`;secure`),document.cookie=u}get(e){return document.cookie.replace(RegExp(`(?:(?:^|.*;\\s*)${this.config.prefix}:${e}\\s*\\=\\s*([^;]*).*$)|^.*$`),`$1`)}remove(e){this.set(e,``,{expires:new Date(`1970-01-01T00:00:00`)})}};Yd.defaultCookieOptions={path:`/`,domain:null,secure:!1,sameSite:`strict`,prefix:`Craft`};var Xd=class{constructor(){this.refreshPromise=null,this.tokenName=null,this.tokenValue=null,this.refreshPromise=null}async getToken(){return this.tokenValue||await this.refreshToken(),this.tokenValue}async refreshToken(){return this.refreshPromise||=$d.get(`users/session-info`).then(({data:e})=>{let{csrfTokenName:t,csrfTokenValue:n}=e;return this.tokenName=t??null,this.tokenValue=n??null,this.tokenValue}).finally(()=>{this.refreshPromise=null}),this.refreshPromise}clearToken(){this.tokenValue=null}};function Zd(e=``){return ie.getInstance().getActionUrl(e)}function Qd(){return{"X-Registered-Asset-Bundles":[...new Set(Cp.registeredAssetBundles)].join(`,`),"X-Registered-Js-Files":[...new Set(Cp.registeredJsFiles)].join(`,`)}}var $d=P.create(),ef=new Xd;$d.interceptors.request.use(async e=>{e.baseURL=Zd(),e.headers.set(`X-Requested-With`,`XMLHttpRequest`);let t=Qd();return Object.entries(t).forEach(([t,n])=>{e.headers.set(t,n)}),e}),$d.interceptors.response.use(e=>e,async e=>{let t=e.config;if(e.response?.status===419||e.response?.status===403&&!t._retry){t._retry=!0;try{return ef.clearToken(),t.headers[`X-CSRF-Token`]=await ef.refreshToken(),P(t)}catch(e){return console.error(`Failed to refresh CSRF token:`,e),Promise.reject(e)}}return Promise.reject(e)});var tf=!1,nf=null;async function rf(e){if(!tf){if(nf)return nf;tf=!0;try{return(await $d.post(`app/api-headers`,void 0,{cancelToken:e})).data}catch{}finally{tf=!1}}}var af=P.create({baseURL:`https://api.craftcms.com/v1/`});async function of(e){return nf?Object.entries(nf).forEach(([t,n])=>{e.headers.set(t,n)}):(e.params=e.params||{},e.params.processCraftHeaders=1),e}async function sf(e,t){if(nf)return;let{data:n}=await $d.post(`app/process-api-response-headers`,{headers:e},{cancelToken:t});return nf=n,tf=!1,nf}async function cf(e){return await sf(e.headers,e.config.cancelToken),e}af.interceptors.request.use(async e=>{let{cancelToken:t}=e,n=await rf(t);n&&Object.entries(n).forEach(([t,n])=>{e.headers.set(t,n)});let r={...e,params:{...Cp.apiParams||{},...e.params,v:new Date().getTime()}};return n||(r.params.processCraftHeaders=1),Cp.httpProxy&&(r.proxy=Cp.httpProxy),r}),af.interceptors.request.use(of),af.interceptors.response.use(cf);var lf={START:`asset-indexes/start-indexing`,STOP:`asset-indexes/stop-indexing-session`,PROCESS:`asset-indexes/process-indexing-session`,OVERVIEW:`asset-indexes/indexing-session-overview`,FINISH:`asset-indexes/finish-indexing-session`},uf=new WeakMap,X=new WeakMap,df=new WeakMap,ff=new WeakMap,pf=new WeakMap,mf=new WeakMap,hf=new WeakMap,Z=new WeakSet,gf=class{constructor(e={}){C(this,Z),w(this,uf,new Map),w(this,X,null),w(this,df,0),w(this,ff,[]),w(this,pf,[]),w(this,mf,new Set),w(this,hf,new Map);let{existingSessions:t=[],maxConcurrentConnections:n=3,autoResume:r=!0}=e;this.maxConcurrentConnections=n;for(let e of t)E(uf,this).set(e.id,e);r&&(S(Z,this,bf).call(this),E(X,this)!==null&&S(Z,this,xf).call(this))}getSessions(){return Array.from(E(uf,this).values())}getCurrentSessionId(){return E(X,this)}isProcessing(){return E(df,this)>0}on(e,t){return E(hf,this).has(e)||E(hf,this).set(e,new Set),E(hf,this).get(e).add(t),()=>{E(hf,this).get(e)?.delete(t)}}async startIndexing(e){let t=await $d.post(lf.START,e),{data:n}=t;return n.session&&(E(uf,this).set(n.session.id,n.session),T(X,this,n.session.id),S(Z,this,vf).call(this),n.stop||S(Z,this,xf).call(this)),n.stop&&S(Z,this,yf).call(this,n.stop),t}stopSession(e){S(Z,this,Sf).call(this,e),S(Z,this,Cf).call(this,{sessionId:e,action:lf.STOP,params:{sessionId:e},priority:!0})}getSessionOverview(e){S(Z,this,Cf).call(this,{sessionId:e,action:lf.OVERVIEW,params:{sessionId:e},priority:!0})}finishSession(e){S(Z,this,Cf).call(this,{sessionId:e.sessionId,action:lf.FINISH,params:e,priority:!0})}destroy(){E(uf,this).clear(),T(ff,this,[]),T(pf,this,[]),E(hf,this).clear(),T(X,this,null),T(df,this,0)}};function _f(e,t){E(hf,this).get(e)?.forEach(e=>e(t))}function vf(e){S(Z,this,_f).call(this,`change`,{sessions:this.getSessions(),currentSessionId:E(X,this),reviewSessionId:e})}function yf(e){E(uf,this).delete(e),E(X,this)===e&&T(X,this,null),S(Z,this,vf).call(this)}function bf(){for(let[e,t]of E(uf,this))if(!t.actionRequired&&!E(mf,this).has(e)){T(X,this,e);return}T(X,this,null)}function xf(){if(E(X,this)||S(Z,this,bf).call(this),!E(X,this))return;let e=E(uf,this).get(E(X,this));if(!e)return;let t=e.totalEntries-e.processedEntries,n=this.maxConcurrentConnections-E(df,this),r=Math.min(n,t);for(let t=0;t<r;t++)S(Z,this,Cf).call(this,{sessionId:e.id,action:lf.PROCESS,params:{sessionId:E(X,this)},priority:!1});e.processIfRootEmpty&&S(Z,this,Cf).call(this,{sessionId:e.id,action:lf.PROCESS,params:{sessionId:E(X,this)},priority:!1})}function Sf(e){E(mf,this).add(e),T(ff,this,E(ff,this).filter(t=>t.sessionId!==e))}function Cf(e){e.priority?E(pf,this).push(e):E(ff,this).push(e),S(Z,this,wf).call(this)}function wf(){if(!(E(ff,this).length+E(pf,this).length===0||E(df,this)>=this.maxConcurrentConnections))for(;E(ff,this).length+E(pf,this).length>0&&E(df,this)<this.maxConcurrentConnections;){var e;T(df,this,(e=E(df,this),e++,e));let t=E(pf,this).length>0?E(pf,this).shift():E(ff,this).shift();S(Z,this,Tf).call(this,t)}}async function Tf(e){try{let t=await $d.post(e.action,e.params);S(Z,this,Ef).call(this,t.data)}catch(t){S(Z,this,Df).call(this,t,e)}finally{var t;T(df,this,(t=E(df,this),t--,t)),S(Z,this,wf).call(this)}}function Ef(e){let t;e.session&&(E(uf,this).set(e.session.id,e.session),S(Z,this,bf).call(this),e.session.actionRequired&&!e.skipDialog?E(mf,this).has(e.session.id)||(t=e.session.id):E(mf,this).has(e.session.id)||S(Z,this,xf).call(this)),S(Z,this,bf).call(this),e.stop&&(E(uf,this).delete(e.stop),E(X,this)===e.stop&&T(X,this,null)),S(Z,this,vf).call(this,t),E(uf,this).size===0&&S(Z,this,_f).call(this,`complete`,{})}function Df(e,t){S(Z,this,bf).call(this);let n=e?.response?.data?.message||e.message||`An error occurred during indexing.`;S(Z,this,_f).call(this,`error`,{message:n,sessionId:t.sessionId}),S(Z,this,wf).call(this)}var Of=function(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n},kf=function(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)},Af,jf=class{formatToParts(e){let t=[];for(let n of e)t.push({type:`element`,value:n}),t.push({type:`literal`,value:`, `});return t.slice(0,-1)}},Mf=typeof Intl<`u`&&Intl.ListFormat||jf,Nf=[[`years`,`year`],[`months`,`month`],[`weeks`,`week`],[`days`,`day`],[`hours`,`hour`],[`minutes`,`minute`],[`seconds`,`second`],[`milliseconds`,`millisecond`]],Pf={minimumIntegerDigits:2},Ff=class{constructor(e,t={}){Af.set(this,void 0);let n=String(t.style||`short`);n!==`long`&&n!==`short`&&n!==`narrow`&&n!==`digital`&&(n=`short`);let r=n===`digital`?`numeric`:n,i=t.hours||r;r=i===`2-digit`?`numeric`:i;let a=t.minutes||r;r=a===`2-digit`?`numeric`:a;let o=t.seconds||r;r=o===`2-digit`?`numeric`:o;let s=t.milliseconds||r;Of(this,Af,{locale:e,style:n,years:t.years||n===`digital`?`short`:n,yearsDisplay:t.yearsDisplay===`always`?`always`:`auto`,months:t.months||n===`digital`?`short`:n,monthsDisplay:t.monthsDisplay===`always`?`always`:`auto`,weeks:t.weeks||n===`digital`?`short`:n,weeksDisplay:t.weeksDisplay===`always`?`always`:`auto`,days:t.days||n===`digital`?`short`:n,daysDisplay:t.daysDisplay===`always`?`always`:`auto`,hours:i,hoursDisplay:t.hoursDisplay===`always`||n===`digital`?`always`:`auto`,minutes:a,minutesDisplay:t.minutesDisplay===`always`||n===`digital`?`always`:`auto`,seconds:o,secondsDisplay:t.secondsDisplay===`always`||n===`digital`?`always`:`auto`,milliseconds:s,millisecondsDisplay:t.millisecondsDisplay===`always`?`always`:`auto`},`f`)}resolvedOptions(){return kf(this,Af,`f`)}formatToParts(e){let t=[],n=kf(this,Af,`f`),r=n.style,i=n.locale;for(let[a,o]of Nf){let s=e[a];if(n[`${a}Display`]===`auto`&&!s)continue;let c=n[a],l=c===`2-digit`?Pf:c===`numeric`?{}:{style:`unit`,unit:o,unitDisplay:c},u=new Intl.NumberFormat(i,l).format(s);a===`months`&&(c===`narrow`||r===`narrow`&&u.endsWith(`m`))&&(u=u.replace(/(\d+)m$/,`$1mo`)),t.push(u)}return new Mf(i,{type:`unit`,style:r===`digital`?`short`:r}).formatToParts(t)}format(e){return this.formatToParts(e).map(e=>e.value).join(``)}};Af=new WeakMap;var If=/^[-+]?P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/,Lf=[`year`,`month`,`week`,`day`,`hour`,`minute`,`second`,`millisecond`],Rf=e=>If.test(e),zf=class e{constructor(e=0,t=0,n=0,r=0,i=0,a=0,o=0,s=0){this.years=e,this.months=t,this.weeks=n,this.days=r,this.hours=i,this.minutes=a,this.seconds=o,this.milliseconds=s,this.years||=0,this.sign||=Math.sign(this.years),this.months||=0,this.sign||=Math.sign(this.months),this.weeks||=0,this.sign||=Math.sign(this.weeks),this.days||=0,this.sign||=Math.sign(this.days),this.hours||=0,this.sign||=Math.sign(this.hours),this.minutes||=0,this.sign||=Math.sign(this.minutes),this.seconds||=0,this.sign||=Math.sign(this.seconds),this.milliseconds||=0,this.sign||=Math.sign(this.milliseconds),this.blank=this.sign===0}abs(){return new e(Math.abs(this.years),Math.abs(this.months),Math.abs(this.weeks),Math.abs(this.days),Math.abs(this.hours),Math.abs(this.minutes),Math.abs(this.seconds),Math.abs(this.milliseconds))}static from(t){if(typeof t==`string`){let n=String(t).trim(),r=n.startsWith(`-`)?-1:1,i=n.match(If)?.slice(1).map(e=>(Number(e)||0)*r);return i?new e(...i):new e}else if(typeof t==`object`){let{years:n,months:r,weeks:i,days:a,hours:o,minutes:s,seconds:c,milliseconds:l}=t;return new e(n,r,i,a,o,s,c,l)}throw RangeError(`invalid duration`)}static compare(t,n){let r=Date.now(),i=Math.abs(Bf(r,e.from(t)).getTime()-r),a=Math.abs(Bf(r,e.from(n)).getTime()-r);return i>a?-1:+(i<a)}toLocaleString(e,t){return new Ff(e,t).format(this)}};function Bf(e,t){let n=new Date(e);return t.sign<0?(n.setUTCSeconds(n.getUTCSeconds()+t.seconds),n.setUTCMinutes(n.getUTCMinutes()+t.minutes),n.setUTCHours(n.getUTCHours()+t.hours),n.setUTCDate(n.getUTCDate()+t.weeks*7+t.days),n.setUTCMonth(n.getUTCMonth()+t.months),n.setUTCFullYear(n.getUTCFullYear()+t.years)):(n.setUTCFullYear(n.getUTCFullYear()+t.years),n.setUTCMonth(n.getUTCMonth()+t.months),n.setUTCDate(n.getUTCDate()+t.weeks*7+t.days),n.setUTCHours(n.getUTCHours()+t.hours),n.setUTCMinutes(n.getUTCMinutes()+t.minutes),n.setUTCSeconds(n.getUTCSeconds()+t.seconds)),n}function Vf(e,t=`second`,n=Date.now()){let r=e.getTime()-n;if(r===0)return new zf;let i=Math.sign(r),a=Math.abs(r),o=Math.floor(a/1e3),s=Math.floor(o/60),c=Math.floor(s/60),l=Math.floor(c/24),u=Math.floor(l/30),d=Math.floor(u/12),f=Lf.indexOf(t)||Lf.length;return new zf(f>=0?d*i:0,f>=1?(u-d*12)*i:0,0,f>=3?(l-u*30)*i:0,f>=4?(c-l*24)*i:0,f>=5?(s-c*60)*i:0,f>=6?(o-s*60)*i:0,f>=7?(a-o*1e3)*i:0)}function Hf(e,{relativeTo:t=Date.now()}={}){if(t=new Date(t),e.blank)return e;let n=e.sign,r=Math.abs(e.years),i=Math.abs(e.months),a=Math.abs(e.weeks),o=Math.abs(e.days),s=Math.abs(e.hours),c=Math.abs(e.minutes),l=Math.abs(e.seconds),u=Math.abs(e.milliseconds);u>=900&&(l+=Math.round(u/1e3)),(l||c||s||o||a||i||r)&&(u=0),l>=55&&(c+=Math.round(l/60)),(c||s||o||a||i||r)&&(l=0),c>=55&&(s+=Math.round(c/60)),(s||o||a||i||r)&&(c=0),o&&s>=12&&(o+=Math.round(s/24)),!o&&s>=21&&(o+=Math.round(s/24)),(o||a||i||r)&&(s=0);let d=t.getFullYear(),f=t.getMonth(),p=t.getDate();if(o>=27||r+i+o){let e=new Date(t);e.setDate(1),e.setMonth(f+i*n+1),e.setDate(0);let s=Math.max(0,p-e.getDate()),c=new Date(t);c.setFullYear(d+r*n),c.setDate(p-s),c.setMonth(f+i*n),c.setDate(p-s+o*n);let l=c.getFullYear()-t.getFullYear(),u=c.getMonth()-t.getMonth(),m=Math.abs(Math.round((Number(c)-Number(t))/864e5))+s,h=Math.abs(l*12+u);m<27?(o>=6?(a+=Math.round(o/7),o=0):o=m,i=r=0):h<=11?(i=h,r=0):(i=0,r=l*n),(i||r)&&(o=0)}return r&&(i=0),a>=4&&(i+=Math.round(a/4)),(i||r)&&(a=0),o&&a&&!i&&!r&&(a+=Math.round(o/7),o=0),new zf(r*n,i*n,a*n,o*n,s*n,c*n,l*n,u*n)}function Uf(e,t){let n=Hf(e,t);if(n.blank)return[0,`second`];for(let e of Lf){if(e===`millisecond`)continue;let t=n[`${e}s`];if(t)return[t,e]}return[0,`second`]}var Q=function(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)},Wf=function(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n},$,Gf,Kf,qf,Jf,Yf,Xf,Zf,Qf,$f,ep,tp,np,rp,ip,ap,op=globalThis.HTMLElement||null,sp=new zf,cp=new zf(0,0,0,0,0,1),lp=class extends Event{constructor(e,t,n,r){super(`relative-time-updated`,{bubbles:!0,composed:!0}),this.oldText=e,this.newText=t,this.oldTitle=n,this.newTitle=r}};function up(e){if(!e.date)return 1/0;if(e.format===`duration`||e.format===`elapsed`){let t=e.precision;if(t===`second`)return 1e3;if(t===`minute`)return 60*1e3}let t=Math.abs(Date.now()-e.date.getTime());return t<60*1e3?1e3:t<3600*1e3?60*1e3:3600*1e3}var dp=new class{constructor(){this.elements=new Set,this.time=1/0,this.timer=-1}observe(e){if(this.elements.has(e))return;this.elements.add(e);let t=e.date;if(t&&t.getTime()){let t=up(e),n=Date.now()+t;n<this.time&&(clearTimeout(this.timer),this.timer=setTimeout(()=>this.update(),t),this.time=n)}}unobserve(e){this.elements.has(e)&&this.elements.delete(e)}update(){if(clearTimeout(this.timer),!this.elements.size)return;let e=1/0;for(let t of this.elements)e=Math.min(e,up(t)),t.update();this.time=Math.min(3600*1e3,e),this.timer=setTimeout(()=>this.update(),this.time),this.time+=Date.now()}},fp=class extends op{constructor(){super(...arguments),$.add(this),Gf.set(this,!1),Kf.set(this,!1),Jf.set(this,this.shadowRoot?this.shadowRoot:this.attachShadow?this.attachShadow({mode:`open`}):this),ap.set(this,null)}static define(e=`relative-time`,t=customElements){return t.define(e,this),this}get timeZone(){return this.closest(`[time-zone]`)?.getAttribute(`time-zone`)||this.ownerDocument.documentElement.getAttribute(`time-zone`)||void 0}static get observedAttributes(){return[`second`,`minute`,`hour`,`weekday`,`day`,`month`,`year`,`time-zone-name`,`prefix`,`threshold`,`tense`,`precision`,`format`,`format-style`,`no-title`,`datetime`,`lang`,`title`,`aria-hidden`,`time-zone`]}get onRelativeTimeUpdated(){return Q(this,ap,`f`)}set onRelativeTimeUpdated(e){Q(this,ap,`f`)&&this.removeEventListener(`relative-time-updated`,Q(this,ap,`f`)),Wf(this,ap,typeof e==`object`||typeof e==`function`?e:null,`f`),typeof e==`function`&&this.addEventListener(`relative-time-updated`,e)}get second(){let e=this.getAttribute(`second`);if(e===`numeric`||e===`2-digit`)return e}set second(e){this.setAttribute(`second`,e||``)}get minute(){let e=this.getAttribute(`minute`);if(e===`numeric`||e===`2-digit`)return e}set minute(e){this.setAttribute(`minute`,e||``)}get hour(){let e=this.getAttribute(`hour`);if(e===`numeric`||e===`2-digit`)return e}set hour(e){this.setAttribute(`hour`,e||``)}get weekday(){let e=this.getAttribute(`weekday`);if(e===`long`||e===`short`||e===`narrow`)return e;if(this.format===`datetime`&&e!==``)return this.formatStyle}set weekday(e){this.setAttribute(`weekday`,e||``)}get day(){let e=this.getAttribute(`day`)??`numeric`;if(e===`numeric`||e===`2-digit`)return e}set day(e){this.setAttribute(`day`,e||``)}get month(){let e=this.format,t=this.getAttribute(`month`);if(t!==``&&(t??=e===`datetime`?this.formatStyle:`short`,t===`numeric`||t===`2-digit`||t===`short`||t===`long`||t===`narrow`))return t}set month(e){this.setAttribute(`month`,e||``)}get year(){let e=this.getAttribute(`year`);if(e===`numeric`||e===`2-digit`)return e;if(!this.hasAttribute(`year`)&&new Date().getUTCFullYear()!==this.date?.getUTCFullYear())return`numeric`}set year(e){this.setAttribute(`year`,e||``)}get timeZoneName(){let e=this.getAttribute(`time-zone-name`);if(e===`long`||e===`short`||e===`shortOffset`||e===`longOffset`||e===`shortGeneric`||e===`longGeneric`)return e}set timeZoneName(e){this.setAttribute(`time-zone-name`,e||``)}get prefix(){return this.getAttribute(`prefix`)??(this.format===`datetime`?``:`on`)}set prefix(e){this.setAttribute(`prefix`,e)}get threshold(){let e=this.getAttribute(`threshold`);return e&&Rf(e)?e:`P30D`}set threshold(e){this.setAttribute(`threshold`,e)}get tense(){let e=this.getAttribute(`tense`);return e===`past`?`past`:e===`future`?`future`:`auto`}set tense(e){this.setAttribute(`tense`,e)}get precision(){let e=this.getAttribute(`precision`);return Lf.includes(e)?e:this.format===`micro`?`minute`:`second`}set precision(e){this.setAttribute(`precision`,e)}get format(){let e=this.getAttribute(`format`);return e===`datetime`?`datetime`:e===`relative`?`relative`:e===`duration`?`duration`:e===`micro`?`micro`:e===`elapsed`?`elapsed`:`auto`}set format(e){this.setAttribute(`format`,e)}get formatStyle(){let e=this.getAttribute(`format-style`);if(e===`long`)return`long`;if(e===`short`)return`short`;if(e===`narrow`)return`narrow`;let t=this.format;return t===`elapsed`||t===`micro`?`narrow`:t===`datetime`?`short`:`long`}set formatStyle(e){this.setAttribute(`format-style`,e)}get noTitle(){return this.hasAttribute(`no-title`)}set noTitle(e){this.toggleAttribute(`no-title`,e)}get datetime(){return this.getAttribute(`datetime`)||``}set datetime(e){this.setAttribute(`datetime`,e)}get date(){let e=Date.parse(this.datetime);return Number.isNaN(e)?null:new Date(e)}set date(e){this.datetime=e?.toISOString()||``}connectedCallback(){this.update()}disconnectedCallback(){dp.unobserve(this)}attributeChangedCallback(e,t,n){t!==n&&(e===`title`&&Wf(this,Gf,n!==null&&(this.date&&Q(this,$,`m`,Yf).call(this,this.date))!==n,`f`),!Q(this,Kf,`f`)&&!(e===`title`&&Q(this,Gf,`f`))&&Wf(this,Kf,(async()=>{await Promise.resolve(),this.update(),Wf(this,Kf,!1,`f`)})(),`f`))}update(){let e=Q(this,Jf,`f`).textContent||this.textContent||``,t=this.getAttribute(`title`)||``,n=t,r=this.date;if(typeof Intl>`u`||!Intl.DateTimeFormat||!r){Q(this,Jf,`f`).textContent=e;return}let i=Date.now();Q(this,Gf,`f`)||(n=Q(this,$,`m`,Yf).call(this,r)||``,n&&!this.noTitle&&this.setAttribute(`title`,n));let a=Vf(r,this.precision,i),o=Q(this,$,`m`,Xf).call(this,a),s=e,c=Q(this,$,`m`,ip).call(this,o);s=c?Q(this,$,`m`,np).call(this,r):o===`duration`?Q(this,$,`m`,Zf).call(this,a):o===`relative`?Q(this,$,`m`,Qf).call(this,a):Q(this,$,`m`,$f).call(this,r),s?Q(this,$,`m`,rp).call(this,s):this.shadowRoot===Q(this,Jf,`f`)&&this.textContent&&Q(this,$,`m`,rp).call(this,this.textContent),(s!==e||n!==t)&&this.dispatchEvent(new lp(e,s,t,n)),o===`relative`||o===`duration`||c&&(Q(this,$,`m`,ep).call(this,r)||Q(this,$,`m`,tp).call(this,r))?dp.observe(this):dp.unobserve(this)}};Gf=new WeakMap,Kf=new WeakMap,Jf=new WeakMap,ap=new WeakMap,$=new WeakSet,qf=function(){let e=this.closest(`[lang]`)?.getAttribute(`lang`)||this.ownerDocument.documentElement.getAttribute(`lang`);try{return new Intl.Locale(e??``).toString()}catch{return`default`}},Yf=function(e){return new Intl.DateTimeFormat(Q(this,$,`a`,qf),{day:`numeric`,month:`short`,year:`numeric`,hour:`numeric`,minute:`2-digit`,timeZoneName:`short`,timeZone:this.timeZone}).format(e)},Xf=function(e){let t=this.format;if(t===`datetime`)return`datetime`;if(t===`duration`||t===`elapsed`||t===`micro`)return`duration`;if((t===`auto`||t===`relative`)&&typeof Intl<`u`&&Intl.RelativeTimeFormat){let t=this.tense;if(t===`past`||t===`future`||zf.compare(e,this.threshold)===1)return`relative`}return`datetime`},Zf=function(e){let t=Q(this,$,`a`,qf),n=this.format,r=this.formatStyle,i=this.tense,a=sp;n===`micro`?(e=Hf(e),a=cp,e.months===0&&(this.tense===`past`&&e.sign!==-1||this.tense===`future`&&e.sign!==1)&&(e=cp)):(i===`past`&&e.sign!==-1||i===`future`&&e.sign!==1)&&(e=a);let o=`${this.precision}sDisplay`;return e.blank?a.toLocaleString(t,{style:r,[o]:`always`}):e.abs().toLocaleString(t,{style:r})},Qf=function(e){let t=new Intl.RelativeTimeFormat(Q(this,$,`a`,qf),{numeric:`auto`,style:this.formatStyle}),n=this.tense;n===`future`&&e.sign!==1&&(e=sp),n===`past`&&e.sign!==-1&&(e=sp);let[r,i]=Uf(e);return i===`second`&&r<10?t.format(0,this.precision===`millisecond`?`second`:this.precision):t.format(r,i)},$f=function(e){let t=new Intl.DateTimeFormat(Q(this,$,`a`,qf),{second:this.second,minute:this.minute,hour:this.hour,weekday:this.weekday,day:this.day,month:this.month,year:this.year,timeZoneName:this.timeZoneName,timeZone:this.timeZone});return`${this.prefix} ${t.format(e)}`.trim()},ep=function(e){let t=new Date,n=new Intl.DateTimeFormat(Q(this,$,`a`,qf),{timeZone:this.timeZone,year:`numeric`,month:`2-digit`,day:`2-digit`});return n.format(t)===n.format(e)},tp=function(e){let t=new Date,n=new Intl.DateTimeFormat(Q(this,$,`a`,qf),{timeZone:this.timeZone,year:`numeric`});return n.format(t)===n.format(e)},np=function(e){let t={hour:`numeric`,minute:`2-digit`,timeZoneName:`short`,timeZone:this.timeZone};if(Q(this,$,`m`,ep).call(this,e)){let n=new Intl.RelativeTimeFormat(Q(this,$,`a`,qf),{numeric:`auto`}).format(0,`day`);n=n.charAt(0).toLocaleUpperCase(Q(this,$,`a`,qf))+n.slice(1);let r=new Intl.DateTimeFormat(Q(this,$,`a`,qf),t).format(e);return`${n} ${r}`}let n=Object.assign(Object.assign({},t),{day:`numeric`,month:`short`});return Q(this,$,`m`,tp).call(this,e)?new Intl.DateTimeFormat(Q(this,$,`a`,qf),n).format(e):new Intl.DateTimeFormat(Q(this,$,`a`,qf),Object.assign(Object.assign({},n),{year:`numeric`})).format(e)},rp=function(e){if(this.hasAttribute(`aria-hidden`)&&this.getAttribute(`aria-hidden`)===`true`){let t=document.createElement(`span`);t.setAttribute(`aria-hidden`,`true`),t.textContent=e,Q(this,Jf,`f`).replaceChildren(t)}else Q(this,Jf,`f`).textContent=e},ip=function(e){return e===`duration`?!1:this.ownerDocument.documentElement.getAttribute(`data-prefers-absolute-time`)===`true`||this.ownerDocument.body?.getAttribute(`data-prefers-absolute-time`)===`true`};var pp=typeof globalThis<`u`?globalThis:window;try{pp.RelativeTimeElement=fp.define()}catch(e){if(!(pp.DOMException&&e instanceof DOMException&&e.name===`NotSupportedError`)&&!(e instanceof ReferenceError))throw e}var mp=new Map,hp=class extends g{constructor(...e){super(...e),this.returnUrl=``,this._state=`idle`}firstUpdated(){this._input?.focus()}async _onSubmit(e){e.preventDefault(),await this._submit(this._input?.value??``)}async _submit(e){if(this._state!==`loading`){this._state=`loading`;try{await $d.post(this.endpoint,{code:e}),this.dispatchEvent(new CustomEvent(`login-verified`,{bubbles:!0,composed:!0,detail:{returnUrl:this.returnUrl}})),this._state=`success`,setTimeout(()=>{this._state=`idle`},2e3)}catch(e){this._state=`error`,this.dispatchEvent(new CustomEvent(`login-failed`,{bubbles:!0,composed:!0,detail:{message:e?.response?.data?.message??o(`A server error occurred.`)}}))}}}renderInput(){return m`<slot name="input">
      <div>
        ${o(`Implement the renderInput() method or provide an input slot`)}
      </div>
    </slot>`}renderFields(){return m`
      <slot name="fields">
        ${this.renderInput()}
        <slot name="submit-button">
          <craft-button
            slot="after"
            type="submit"
            variant="primary"
            ?loading="${this._state===`loading`}"
          >
            ${o(`Verify`)}
          </craft-button>
        </slot>
      </slot>
    `}render(){return m`
      <form
        class="login-form"
        accept-charset="UTF-8"
        @submit="${this._onSubmit}"
      >
        <div class="login-form__fields">${this.renderFields()}</div>
      </form>
    `}static register(e,t){customElements.get(e)||customElements.define(e,t),mp.set(t.METHOD,t)}static isNative(e){return mp.has(e)}};hp.styles=[_`
      :host {
        display: block;
        width: 100%;
      }

      .spinner-overlay {
        display: grid;
        place-items: center;
      }

      .login-form__fields {
        display: flex;
        gap: var(--c-spacing-md);
        align-items: end;
      }

      .login-form__actions {
        margin-block-start: var(--c-spacing-lg);
      }

      .login-form__error {
        margin-block-start: var(--c-spacing-md);
      }

      .alternative-login-methods {
        margin-block-start: var(--c-spacing-lg);
      }

      hr {
        margin-block: var(--c-spacing-lg);
        border: none;
        border-block-end: 1px solid var(--c-color-border-quiet);
      }
    `],n([v({attribute:`return-url`})],hp.prototype,`returnUrl`,void 0),n([y()],hp.prototype,`_state`,void 0),n([b(`craft-input`)],hp.prototype,`_input`,void 0);function gp(e,t={}){let n={};if(!e)return n;let r=new Set(t.exclude??[]);for(let[t,i]of Object.entries(e))if(!r.has(t)&&!(i===null||i===!1))if(t===`class`)n.class=Array.isArray(i)||typeof i!=`object`?i:Object.values(i);else if(t===`style`)n.style=i;else if(typeof i==`object`&&!Array.isArray(i))for(let[e,r]of Object.entries(i))r===null||r===!1||(n[`${t}-${e}`]=typeof r==`object`&&r?JSON.stringify(r):r);else n[t]=i;return n}export{P as C,br as S,x as T,ka as _,$d as a,va as b,Qc as c,Kc as d,Gc as f,ps as g,ro as h,af as i,$c as l,ms as m,hp as n,tl as o,Yc as p,gf as r,el as s,gp as t,qc as u,Ea as v,ie as w,R as x,Da as y};