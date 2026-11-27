import{i as e,n as t}from"./translate.ts-DW16fAdu.js";import{n,r}from"./decorators-B_wqftM0.js";import{t as i}from"./custom-element-Bov83m9_.js";import"./cp-CeBFHYQD.js";import{m as a}from"./dist-BftnOi5A.js";import{n as o}from"./shortcuts-DfDl8PAs.js";import{t as s}from"./decorate-B3KLIx2E.js";import{i as c}from"./element-instances-DMOZlNoG.js";import"./popover.ts-DpilB2IH.js";import{t as l}from"./create-element-selector-modal-Blfz2-4s.js";import"./craft-link-field-CZLY-90U.js";import{n as u}from"./useMessages-CRgSQISc.js";import{t as d}from"./upload-client-DWpqOXGO.js";import{n as f,t as p}from"./uploads-CLvP1nW0.js";var m=Object.defineProperty,h=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t)m(e,n,{get:t[n],enumerable:!0})},_=(e,t,n)=>(h(e,typeof t==`symbol`?t:t+``,n),n);function v(e){let t=/^( {0,3})(#{1,6})(?:([\t ]+)(.*)|$)/.exec(e);if(!t)return null;let n=t[1],r=t[2],i=t[3]??``,a=t[4]??``,o=/^(#+)[\t ]*$/.exec(a),s=/([\t ]+)(#+)([\t ]*)$/.exec(a),c=o||s;return{type:`heading`,level:r.length,indent:n,marker:r,separator:i,content:o?``:c?a.slice(0,s.index):a,closing:o?a:c?s[0]:``}}function y(e){let t=/^( {0,3})([*_-])([\t *_-]*)$/.exec(e);if(!t)return null;let n=t[2],r=t[3];return[...r].some(e=>e!==n&&e!==` `&&e!==`	`)||1+[...r].filter(e=>e===n).length<3?null:{type:`thematic-break`,marker:n,source:e}}function ee(e){let t=/^( {0,3})>([\t ]?)(.*)$/.exec(e);return!t||t[2]===``&&t[3].startsWith(`>`)?null:{type:`blockquote`,indent:t[1],marker:`>`,separator:t[2],content:t[3]}}function b(e){let t=/^( *)([-*+])([\t ]+)(.*)$/.exec(e);if(t)return{type:`list-item`,listType:`bullet`,indent:t[1],marker:t[2],separator:t[3],content:t[4]};let n=/^( *)([-*+])$/.exec(e);if(n)return{type:`list-item`,listType:`bullet`,indent:n[1],marker:n[2],separator:``,content:``};let r=/^( *)(\d{1,9}\.)([\t ]+)(.*)$/.exec(e);if(r)return{type:`list-item`,listType:`ordered`,indent:r[1],marker:r[2],separator:r[3],content:r[4]};let i=/^( *)(\d{1,9}\.)$/.exec(e);return i?{type:`list-item`,listType:`ordered`,indent:i[1],marker:i[2],separator:``,content:``}:null}function x(e){let t=/^( {0,3})(`{3,})([^`]*)$/.exec(e);return t?{type:`fence-open`,indent:t[1],marker:t[2],length:t[2].length,info:t[3].trim(),source:e}:null}function S(e,t){let n=/^( {0,3})(`{3,})[\t ]*$/.exec(e);return!n||n[2].length<t.length?null:{type:`fence-close`,indent:n[1],marker:n[2],length:n[2].length,source:e}}var C=/[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/,w=/^&(?:amp|lt|gt|quot|#39);/,te={"&amp;":`&`,"&lt;":`<`,"&gt;":`>`,"&quot;":`"`,"&#39;":`'`};function ne(e,t){return function(n){if(n>=e.length)return[null,0];if(t&&e.charCodeAt(n)===38){let t=w.exec(e.slice(n,n+6));if(t)return[te[t[0]],t[0].length]}return[e[n],1]}}function re(e,t){let n=0;for(;t>0&&e[--t]===`\\`;)n++;return n%2==1}var ie=e=>e===` `||e===`	`,ae=e=>e!==null&&(e.charCodeAt(0)<32||e.charCodeAt(0)===127);function oe(e,t,n,r){let[i,a]=n(t);if(i!==`(`)return null;for(t+=a;ie(i=n(t)[0]);)t+=n(t)[1];let o=null;if([i,a]=n(t),i===`<`){let r=t,s=``;for(t+=a;;){if([i,a]=n(t),i===null||i===`<`||i===`
`)return null;if(i===`\\`){let[e,r]=n(t+a);if(e!==null&&C.test(e)){s+=e,t+=a+r;continue}}if(i===`>`){t+=a;break}s+=i,t+=a}o={start:r,end:t,raw:e.slice(r,t),value:s}}else if(i!==`)`){let s=t,c=0,l=``;for(;[i,a]=n(t),!(i===null||i===`
`||ie(i));){if(ae(i))return null;if(i===`\\`){let[e,r]=n(t+a);if(e!==null&&C.test(e)){l+=e,t+=a+r;continue}l+=i,t+=a;continue}if(i===`(`){if(c++,c>r)return null;l+=i,t+=a;continue}if(i===`)`){if(c===0)break;c--,l+=i,t+=a;continue}l+=i,t+=a}if(c!==0)return null;o={start:s,end:t,raw:e.slice(s,t),value:l}}let s=t;for(;ie(i=n(t)[0]);)t+=n(t)[1];let c=null;if([i,a]=n(t),i===`"`||i===`'`||i===`(`){if(o&&t===s)return null;let r=i===`(`?`)`:i,l=t,u=``;for(t+=a;;){if([i,a]=n(t),i===null||i===`
`)return null;if(i===`\\`){let[e,r]=n(t+a);if(e!==null&&C.test(e)){u+=e,t+=a+r;continue}u+=i,t+=a;continue}if(i===r){t+=a;break}if(r===`)`&&i===`(`)return null;u+=i,t+=a}for(c={start:l,end:t,raw:e.slice(l,t),value:u,delimiter:r===`)`?`(`:r};ie(i=n(t)[0]);)t+=n(t)[1]}return[i,a]=n(t),i===`)`?{end:t+a,destination:o,title:c}:null}function se(e,t,n){for(;n<e.length&&e[n].end<=t;)n++;let r=e[n];return{range:r&&r.start<=t&&t<r.end?r:null,rangeIndex:n}}function ce(e,{htmlEntities:t=!1,maxParenDepth:n=32,ignoreRanges:r=[]}={}){let i=ne(e,t),a=[...r].sort((e,t)=>e.start-t.start),o=[],s=[],c=0,l=0;for(;l<e.length;){let t=se(a,l,c);if(c=t.rangeIndex,t.range){l=t.range.end;continue}let[r,u]=i(l);if(r===`\\`){let[e,t]=i(l+u);l+=e!==null&&C.test(e)?u+t:u;continue}if(r===`
`){s.length=0,l+=u;continue}if(r===`[`){let t=l>0&&e[l-1]===`!`&&!re(e,l-1);s.push({index:l,image:t}),l+=u;continue}if(r===`]`){let t=s.pop();if(t){let r=oe(e,l+u,i,n);if(r){o.push({start:t.index,end:r.end,image:t.image,text:{start:t.index+1,end:l,raw:e.slice(t.index+1,l)},destination:r.destination,title:r.title}),s.length=0,l=r.end;continue}}}l+=u}return o}function le(e,t=[]){let n=[],r=[],i=0;for(;i<e.length;){if(e[i]!=="`"){i++;continue}let t=i;for(;e[i]==="`";)i++;n.push({start:t,end:i,length:i-t})}let a=Array(n.length),o=new Map;for(let e=n.length-1;e>=0;e--){let t=n[e];a[e]=o.get(t.length),o.set(t.length,e)}for(let i=0;i<n.length;){let o=n[i],s=re(e,o.start)||t.some(e=>o.start>=e.start&&o.start<e.end),c=a[i];if(s||c===void 0){i++;continue}let l=n[c];r.push({start:o.start,end:l.end,raw:e.slice(o.start,l.end),openTicks:e.slice(o.start,o.end),content:e.slice(o.end,l.start),closeTicks:e.slice(l.start,l.end)}),i=c+1}return r}function ue(e,t){return{...e,start:e.start+t,end:e.end+t,text:{...e.text,start:e.text.start+t,end:e.text.end+t},destination:e.destination&&{...e.destination,start:e.destination.start+t,end:e.destination.end+t},title:e.title&&{...e.title,start:e.title.start+t,end:e.title.end+t}}}function de(e,t){if(!e.includes(`[`))return[];let n=ce(e,t),r=new Set;for(;;){let i=n.map(e=>`${e.start}:${e.end}`).join(`,`);if(r.has(i))return n;r.add(i);let a=le(e,n.map(e=>({start:e.text.end,end:e.end}))),o=ce(e,{...t,ignoreRanges:a});if(o.map(e=>`${e.start}:${e.end}`).join(`,`)===i)return o;n=o}}function fe(e,t={}){let{fences:n=!0,...r}=t,i=[],a=e.split(`
`),o=null,s=0;for(let e of a){if(o)S(e,o)&&(o=null);else{let t=n&&x(e);t?o=t:i.push(...de(e,r).map(e=>ue(e,s)))}s+=e.length+1}return i}var pe={"&amp;":`&`,"&lt;":`<`,"&gt;":`>`,"&quot;":`"`,"&#39;":`'`},me=/^&(amp|lt|gt|quot|#39);/,he=/^[!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~]$/,ge=/^[\u00a1-\u00a9\u00ab-\u00ac\u00ae-\u00b1\u00b4\u00b6-\u00b8\u00bb\u00bf\u00d7\u00f7\u02c2-\u02c5\u02d2-\u02df\u02e5-\u02eb\u02ed\u02ef-\u02ff\u0375\u037e\u0384-\u0385\u0387\u03f6\u0482\u055a-\u055f\u0589-\u058a\u058d-\u058f\u05be\u05c0\u05c3\u05c6\u05f3-\u05f4\u0606-\u060f\u061b\u061d-\u061f\u066a-\u066d\u06d4\u06de\u06e9\u06fd-\u06fe\u0700-\u070d\u07f6-\u07f9\u07fe-\u07ff\u0830-\u083e\u085e\u0888\u0964-\u0965\u0970\u09f2-\u09f3\u09fa-\u09fb\u09fd\u0a76\u0af0-\u0af1\u0b70\u0bf3-\u0bfa\u0c77\u0c7f\u0c84\u0d4f\u0d79\u0df4\u0e3f\u0e4f\u0e5a-\u0e5b\u0f01-\u0f17\u0f1a-\u0f1f\u0f34\u0f36\u0f38\u0f3a-\u0f3d\u0f85\u0fbe-\u0fc5\u0fc7-\u0fcc\u0fce-\u0fda\u104a-\u104f\u109e-\u109f\u10fb\u1360-\u1368\u1390-\u1399\u1400\u166d-\u166e\u169b-\u169c\u16eb-\u16ed\u1735-\u1736\u17d4-\u17d6\u17d8-\u17db\u1800-\u180a\u1940\u1944-\u1945\u19de-\u19ff\u1a1e-\u1a1f\u1aa0-\u1aa6\u1aa8-\u1aad\u1b4e-\u1b4f\u1b5a-\u1b6a\u1b74-\u1b7f\u1bfc-\u1bff\u1c3b-\u1c3f\u1c7e-\u1c7f\u1cc0-\u1cc7\u1cd3\u1fbd\u1fbf-\u1fc1\u1fcd-\u1fcf\u1fdd-\u1fdf\u1fed-\u1fef\u1ffd-\u1ffe\u2010-\u2027\u2030-\u205e\u207a-\u207e\u208a-\u208e\u20a0-\u20c0\u2100-\u2101\u2103-\u2106\u2108-\u2109\u2114\u2116-\u2118\u211e-\u2123\u2125\u2127\u2129\u212e\u213a-\u213b\u2140-\u2144\u214a-\u214d\u214f\u218a-\u218b\u2190-\u2429\u2440-\u244a\u249c-\u24e9\u2500-\u2775\u2794-\u2b73\u2b76-\u2b95\u2b97-\u2bff\u2ce5-\u2cea\u2cf9-\u2cfc\u2cfe-\u2cff\u2d70\u2e00-\u2e2e\u2e30-\u2e5d\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u2ff0-\u2fff\u3001-\u3004\u3008-\u3020\u3030\u3036-\u3037\u303d-\u303f\u309b-\u309c\u30a0\u30fb\u3190-\u3191\u3196-\u319f\u31c0-\u31e5\u31ef\u3200-\u321e\u322a-\u3247\u3250\u3260-\u327f\u328a-\u32b0\u32c0-\u33ff\u4dc0-\u4dff\ua490-\ua4c6\ua4fe-\ua4ff\ua60d-\ua60f\ua673\ua67e\ua6f2-\ua6f7\ua700-\ua716\ua720-\ua721\ua789-\ua78a\ua828-\ua82b\ua836-\ua839\ua874-\ua877\ua8ce-\ua8cf\ua8f8-\ua8fa\ua8fc\ua92e-\ua92f\ua95f\ua9c1-\ua9cd\ua9de-\ua9df\uaa5c-\uaa5f\uaa77-\uaa79\uaade-\uaadf\uaaf0-\uaaf1\uab5b\uab6a-\uab6b\uabeb\ufb29\ufbb2-\ufbc2\ufd3e-\ufd4f\ufdcf\ufdfc-\ufdff\ufe10-\ufe19\ufe30-\ufe52\ufe54-\ufe66\ufe68-\ufe6b\uff01-\uff0f\uff1a-\uff20\uff3b-\uff40\uff5b-\uff65\uffe0-\uffe6\uffe8-\uffee\ufffc-\ufffd]$/,_e=/^\uE000\d+\uE001/;function ve(){try{return RegExp(`^[\\p{P}\\p{S}]$`,`u`)}catch{return ge}}var ye=ve();function be(e){return e!==null&&(he.test(e)||ye.test(e))}function xe(e,t,n){if(t>=e.length)return[null,0];if(e[t]===``){let n=_e.exec(e.slice(t));if(n)return["`",n[0].length]}if(n&&e[t]===`&`){let n=me.exec(e.slice(t,t+6));if(n)return[pe[n[0]],n[0].length]}let r=String.fromCodePoint(e.codePointAt(t));return[r,r.length]}function Se(e,t){let n=0;for(;t>0&&e[--t]===`\\`;)n++;return n%2==1}function Ce(e,t){if(e[t]!==`<`)return t;let n=e.indexOf(`>`,t+1);return n===-1?t:n+1}function we(e,t,n){let r=t;for(;r<e.length;){let t=Ce(e,r);if(t!==r){r=t;continue}return xe(e,r,n)[0]}return`
`}function Te(e,t,n){let r=/\s/u.test(t),i=/\s/u.test(n),a=be(t),o=be(n),s=!i&&(!o||r||a),c=!r&&(!a||i||o);return e===`_`?{canOpen:s&&(!c||a),canClose:c&&(!s||o)}:{canOpen:s,canClose:c}}function Ee(e,t){let n=[],r=`
`,i=0;for(;i<e.length;){let a=Ce(e,i);if(a!==i){i=a;continue}let[o,s]=xe(e,i,t);if((o===`*`||o===`_`)&&!Se(e,i)){let a=i,s=0;for(;e[i]===o&&!Se(e,i);)s++,i++;let c=Te(o,r,we(e,i,t)),l={marker:o,start:a,original:s,remaining:s,usedAsOpener:0,usedAsCloser:0,...c,previous:n.length>0?n[n.length-1]:null,next:null};l.previous&&(l.previous.next=l),n.push(l),r=o;continue}r=o,i+=s}return n}function De(e,t){t.previous?t.previous.next=t.next:e.head=t.next,t.next&&(t.next.previous=t.previous),t.previous=null,t.next=null}function Oe(e,t){let n=e.next;for(;n&&n!==t;){let e=n.next;n.previous=null,n.next=null,n=e}e.next=t,t.previous=e}function ke(e,{htmlEntities:t=!1}={}){let n={head:Ee(e,t)[0]??null},r=[],i=n.head;for(;i;){if(!i.canClose){i=i.next;continue}let e=i.previous;for(;e;){let t=(i.canOpen||e.canClose)&&(e.original%3!=0||i.original%3!=0)&&(e.original+i.original)%3==0;if(e.marker===i.marker&&e.canOpen&&!t)break;e=e.previous}if(!e){let e=i.next;i.canOpen||De(n,i),i=e;continue}let t=e.remaining>=2&&i.remaining>=2?2:1,a=e.start+e.original-e.usedAsOpener-t,o=i.start+i.usedAsCloser;r.push({type:t===2?`strong`:`em`,openStart:a,openEnd:a+t,closeStart:o,closeEnd:o+t}),e.remaining-=t,i.remaining-=t,e.usedAsOpener+=t,i.usedAsCloser+=t,Oe(e,i);let s=i.next;e.remaining===0&&De(n,e),i.remaining===0&&(De(n,i),i=s)}return r.sort((e,t)=>e.openStart-t.openStart||t.closeEnd-e.closeEnd)}function Ae(e,t={}){let{includeEm:n=!0,includeStrong:r=!0}=t,i=ke(e,t).filter(e=>e.type===`em`?n:r);if(i.length===0)return e;let a=new Map,o=e=>(a.has(e)||a.set(e,{openEnd:[],closeEnd:[],openStart:[],closeStart:[]}),a.get(e));for(let e of i){let t=e.type;o(e.openStart).openStart.push(`<${t}><span class="syntax-marker">`),o(e.openEnd).openEnd.push(`</span>`),o(e.closeStart).closeStart.push(`<span class="syntax-marker">`),o(e.closeEnd).closeEnd.push(`</span></${t}>`)}let s=``,c=0;for(let t of[...a.keys()].sort((e,t)=>e-t)){s+=e.slice(c,t);let n=a.get(t);s+=n.openEnd.join(``),s+=n.closeEnd.join(``),s+=n.openStart.join(``),s+=n.closeStart.join(``),c=t}return s+e.slice(c)}var je=[`http://`,`https://`,`mailto:`,`ftp://`,`ftps://`];function Me(e){let t=e.trim().toLowerCase();return je.some(e=>t.startsWith(e))}function T(e){return e.replace(/&nbsp;/g,` `).replace(/&quot;/g,`"`).replace(/&#39;/g,`'`).replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/&amp;/g,`&`)}var E=class{static resolveDisabled(e){if(!e||e.length===0)return this.noneDisabled;let t=new Set(e);return t.has(`headings`)&&[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`].forEach(e=>t.add(e)),t.has(`lists`)&&t.add(`tasks`),t}static resetLinkIndex(){this.linkIndex=0}static setCodeHighlighter(e){this.codeHighlighter=e}static setCustomSyntax(e){this.customSyntax=e}static applyCustomSyntax(e,t=this.customSyntax){return typeof t==`function`?t(e):e}static escapeHtml(e){let t={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`};return e.replace(/[&<>"']/g,e=>t[e])}static preserveIndentation(e,t){let n=t.match(/^(\s*)/)[1].replace(/ /g,`&nbsp;`);return e.replace(/^\s*/,n)}static parseHeader(e){let t=v(T(e));if(!t)return e;let n=t.indent.replace(/ /g,`&nbsp;`),r=this.escapeHtml(t.marker+t.separator),i=this.parseInlineElements(this.escapeHtml(t.content)),a=t.closing?`<span class="syntax-marker">${this.escapeHtml(t.closing)}</span>`:``;return`<h${t.level}>${n}<span class="syntax-marker">${r}</span>${i}${a}</h${t.level}>`}static parseHorizontalRule(e){let t=T(e);return y(t)?`<div><span class="hr-marker">${this.preserveIndentation(this.escapeHtml(t),t)}</span></div>`:null}static parseBlockquote(e){let t=ee(T(e));return t?`${t.indent.replace(/ /g,`&nbsp;`)}<span class="blockquote"><span class="syntax-marker">${this.escapeHtml(t.marker)}</span>${this.escapeHtml(t.separator)}${this.parseInlineElements(this.escapeHtml(t.content))}</span>`:e}static parseBulletList(e){let t=T(e);if(y(t))return e;let n=b(t);return!n||n.listType!==`bullet`?e:`${n.indent.replace(/ /g,`&nbsp;`)}<li class="bullet-list"><span class="syntax-marker">${this.escapeHtml(n.marker+n.separator)}</span>${this.parseInlineElements(this.escapeHtml(n.content))}</li>`}static parseTaskList(e,t=!1){return e.replace(/^((?:&nbsp;)*)-(\s+)\[([ xX])\](\s*)(.*)$/,(e,n,r,i,a,o)=>a===``&&o!==``?e:(o=this.parseInlineElements(o),t?`<li class="task-list">${n}<input type="checkbox" ${i.toLowerCase()===`x`?`checked`:``}> ${o}</li>`:`<li class="task-list">${n}<span class="syntax-marker">-${r}[${i}]${a}</span>${o}</li>`))}static parseNumberedList(e){let t=b(T(e));return!t||t.listType!==`ordered`?e:`${t.indent.replace(/ /g,`&nbsp;`)}<li class="ordered-list"><span class="syntax-marker">${this.escapeHtml(t.marker+t.separator)}</span>${this.parseInlineElements(this.escapeHtml(t.content))}</li>`}static parseCodeBlock(e){let t=x(T(e));return t?this.renderFence(t):null}static renderFence(e,t=!1){let n=this.preserveIndentation(this.escapeHtml(e.source),e.source);return`<div${t?` class="raw-line"`:``}><span class="code-fence">${n}</span></div>`}static renderCodeContent(e,t,n,r=0,i=-1){let a=e.map(e=>{let t=0;for(;t<r&&e[t]===` `;)t++;return{source:e,prefix:e.slice(0,t),content:e.slice(t)}}),o=a.map(e=>e.content).join(`
`),s=e=>e?`<span class="syntax-marker">${this.escapeHtml(e)}</span>`:``,c=a.map((e,t)=>t===i?`<span class="raw-line">${this.escapeHtml(e.source)||`&nbsp;`}</span>`:e.prefix===``&&e.content===``?`<span class="syntax-marker">&nbsp;</span>`:s(e.prefix)+this.escapeHtml(e.content)).join(`
`),l=t.split(/[\t ]/,1)[0],u=l?` class="language-${this.escapeHtml(l)}"`:``,d=n||this.codeHighlighter,f=c;if(d)try{let e=d(o,l);if(e&&typeof e.then==`function`)console.warn(`Async highlighters are not supported in parse() because it returns an HTML string. Use synchronous highlighters only.`);else if(e&&typeof e==`string`&&e.trim()){let t=e.split(`
`);t.length===a.length+1&&t[t.length-1]===``&&t.pop(),t.length===a.length?f=t.map((e,t)=>t===i?`<span class="raw-line">${this.escapeHtml(a[t].source)||`&nbsp;`}</span>`:s(a[t].prefix)+e).join(`
`):console.warn(`Code highlighter output line count does not match the source. Using unhighlighted code to preserve alignment.`)}}catch(e){console.warn(`Code highlighting failed:`,e)}return`<pre class="code-block"><code${u}>${f}</code></pre>`}static parseBold(e){return Ae(e,{htmlEntities:!0,includeEm:!1})}static parseItalic(e){return Ae(e,{htmlEntities:!0,includeStrong:!1})}static parseEmphasis(e){return Ae(e,{htmlEntities:!0})}static parseStrikethrough(e){return e=e.replace(RegExp(`(?<!~)~~(?!~)(.+?)(?<!~)~~(?!~)`,`g`),`<del><span class="syntax-marker">~~</span>$1<span class="syntax-marker">~~</span></del>`),e=e.replace(RegExp(`(?<!~)~(?!~)(.+?)(?<!~)~(?!~)`,`g`),`<del><span class="syntax-marker">~</span>$1<span class="syntax-marker">~</span></del>`),e}static parseInlineCode(e){let t=le(e);for(let n of t.reverse()){let t=`<code><span class="syntax-marker">${n.openTicks}</span>${n.content}<span class="syntax-marker">${n.closeTicks}</span></code>`;e=e.slice(0,n.start)+t+e.slice(n.end)}return e}static sanitizeUrl(e){let t=e.trim(),n=t.startsWith(`/`)||t.startsWith(`#`)||t.startsWith(`?`)||t.startsWith(`.`)||!t.includes(`:`)&&!t.includes(`//`);return Me(e)||n?e:`#`}static hasSafeProtocol(e){return Me(e)}static findLinks(e,t={}){let{allowEmptyText:n=!1,...r}=t;return ce(e,r).filter(e=>(n||e.text.raw.length>0)&&e.destination!==null&&e.destination.value.length>0)}static findRenderableLinks(e,t={}){let{allowEmptyText:n=!1,...r}=t;return fe(e,r).filter(e=>(n||e.text.raw.length>0)&&e.destination!==null&&e.destination.value.length>0)}static parseLinks(e){let t=this.findLinks(e,{htmlEntities:!0});t.forEach(e=>{e.anchorName=`--link-${this.linkIndex++}`});for(let n of t.reverse()){let t=this.escapeHtml(this.sanitizeUrl(n.destination.value)),r=n.title===null?``:` title="${this.escapeHtml(n.title.value)}"`,i=e.slice(n.text.start,n.text.end),a=e.slice(n.text.end,n.end),o=`<a href="${t}"${r} style="anchor-name: ${n.anchorName}"><span class="syntax-marker">[</span>${i}<span class="syntax-marker url-part">${a}</span></a>`;e=e.slice(0,n.start)+o+e.slice(n.end)}return e}static identifyAndProtectSanctuaries(e){let t=new Map,n=0,r=e,i=le(e,(e.includes(`[`)?this.findRenderableLinks(e,{htmlEntities:!0}):[]).map(e=>({start:e.text.end,end:e.end})));i.sort((e,t)=>t.start-e.start),i.forEach(e=>{let i=`\uE000${n++}\uE001`;t.set(i,{type:`code`,original:e.raw,openTicks:e.openTicks,content:e.content,closeTicks:e.closeTicks}),r=r.substring(0,e.start)+i+r.substring(e.end)});let a=[...t.keys()];return(r.includes(`[`)?this.findLinks(r,{htmlEntities:!0}):[]).filter(e=>{let t=r.slice(e.text.end,e.end);return a.every(e=>!t.includes(e))}).sort((e,t)=>t.start-e.start).forEach(e=>{let i=`\uE000${n++}\uE001`;t.set(i,{type:`link`,original:r.slice(e.start,e.end),linkText:r.slice(e.text.start,e.text.end),tail:r.slice(e.text.end,e.end),url:e.destination.value,title:e.title?.value??null}),r=r.slice(0,e.start)+i+r.slice(e.end)}),{protectedText:r,sanctuaries:t}}static restoreAndTransformSanctuaries(e,t){return Array.from(t.keys()).sort((t,n)=>e.indexOf(t)-e.indexOf(n)).forEach(n=>{let r=t.get(n),i;if(r.type===`code`)i=`<code><span class="syntax-marker">${r.openTicks}</span>${r.content}<span class="syntax-marker">${r.closeTicks}</span></code>`;else if(r.type===`link`){let e=r.linkText;e=this.parseStrikethrough(e),e=this.parseEmphasis(e),t.forEach((t,n)=>{if(e.includes(n)&&t.type===`code`){let r=`<code><span class="syntax-marker">${t.openTicks}</span>${t.content}<span class="syntax-marker">${t.closeTicks}</span></code>`;e=e.replace(n,()=>r)}});let n=`--link-${this.linkIndex++}`;i=`<a href="${this.escapeHtml(this.sanitizeUrl(r.url))}"${r.title===null?``:` title="${this.escapeHtml(r.title)}"`} style="anchor-name: ${n}"><span class="syntax-marker">[</span>${e}<span class="syntax-marker url-part">${r.tail}</span></a>`}e=e.replace(n,()=>i)}),e}static parseInlineElements(e){let{protectedText:t,sanctuaries:n}=this.identifyAndProtectSanctuaries(e),r=t;return r=this.parseStrikethrough(r),r=this.parseEmphasis(r),r=this.restoreAndTransformSanctuaries(r,n),r}static parseLine(e,t=!1,n=this.noneDisabled){if(e===``)return`<div>&nbsp;</div>`;let r=y(e);if(r&&!n.has(`hr`))return`<div><span class="hr-marker">${this.preserveIndentation(this.escapeHtml(e),e)}</span></div>`;let i=!n.has(`code`)&&x(e);if(i)return this.renderFence(i);let a=v(e);if(a&&!n.has(`h${a.level}`)){let e=a.indent.replace(/ /g,`&nbsp;`),t=this.escapeHtml(a.marker+a.separator),n=this.parseInlineElements(this.escapeHtml(a.content)),r=a.closing?`<span class="syntax-marker">${this.escapeHtml(a.closing)}</span>`:``;return`<div><h${a.level}>${e}<span class="syntax-marker">${t}</span>${n}${r}</h${a.level}></div>`}let o=!n.has(`blockquote`)&&ee(e);if(o)return`<div>${o.indent.replace(/ /g,`&nbsp;`)}<span class="blockquote"><span class="syntax-marker">${this.escapeHtml(o.marker)}</span>${this.escapeHtml(o.separator)}${this.parseInlineElements(this.escapeHtml(o.content))}</span></div>`;let s=this.preserveIndentation(this.escapeHtml(e),e),c=n.has(`tasks`)?s:this.parseTaskList(s,t);if(c!==s)return`<div>${c}</div>`;let l=!n.has(`lists`)&&!r&&b(e);if(l){let e=l.indent.replace(/ /g,`&nbsp;`),t=this.escapeHtml(l.marker+l.separator),n=this.parseInlineElements(this.escapeHtml(l.content));return`<div>${e}<li class="${l.listType===`bullet`?`bullet-list`:`ordered-list`}"><span class="syntax-marker">${t}</span>${n}</li></div>`}let u=/^[\t ]*/.exec(e)[0];return s=u.replace(/ /g,`&nbsp;`)+this.parseInlineElements(this.escapeHtml(e.slice(u.length))),`<div>${s}</div>`}static parse(e,t=-1,n=!1,r,i=!1,a={}){let o=a.customSyntax??this.customSyntax,s=this.resolveDisabled(a.disable);this.resetLinkIndex();let c=e.split(`
`),l=[],u=null,d=[],f=-1;for(let e=0;e<c.length;e++){let a=c[e],p=n&&e===t;if(u){let e=S(a,u);if(e){l.push(this.renderCodeContent(d,u.info,r,u.indent.length,f));let t=this.renderFence(e,p);l.push(p?t:this.applyCustomSyntax(t,o)),u=null,d=[],f=-1}else p&&(f=d.length),d.push(a);continue}let m=!s.has(`code`)&&x(a);if(m){u=m;let e=this.renderFence(m,p);l.push(p?e:this.applyCustomSyntax(e,o));continue}if(p){let e=this.escapeHtml(a)||`&nbsp;`;l.push(`<div class="raw-line">${e}</div>`);continue}l.push(this.applyCustomSyntax(this.parseLine(a,i,s),o))}u&&d.length>0&&l.push(this.renderCodeContent(d,u.info,r,u.indent.length,f));let p=l.join(``);return this.postProcessHTML(p,r,!1)}static postProcessHTML(e,t,n=!0){return this.postProcessHTMLManual(e,t,n)}static postProcessHTMLManual(e,t,n=!0){let r=e;return r=r.replace(/((?:<div(?:\s[^>]*)?>(?:&nbsp;)*<li class="bullet-list">.*?<\/li><\/div>\s*)+)/gs,e=>{let t=e.match(/<div(?:\s[^>]*)?>(?:&nbsp;)*<li class="bullet-list">.*?<\/li><\/div>/gs)||[];return t.length>0?`<ul>`+t.map(e=>{let t=e.match(/<div(?:\s[^>]*)?>((?:&nbsp;)*)<li/),n=e.match(/<li class="bullet-list">.*?<\/li>/);if(t&&n){let e=t[1];return n[0].replace(/<li class="bullet-list">/,`<li class="bullet-list">${e}`)}return n?n[0]:``}).filter(Boolean).join(``)+`</ul>`:e}),r=r.replace(/((?:<div(?:\s[^>]*)?>(?:&nbsp;)*<li class="ordered-list">.*?<\/li><\/div>\s*)+)/gs,e=>{let t=e.match(/<div(?:\s[^>]*)?>(?:&nbsp;)*<li class="ordered-list">.*?<\/li><\/div>/gs)||[];if(t.length>0){let e=t.map(e=>{let t=e.match(/<div(?:\s[^>]*)?>((?:&nbsp;)*)<li/),n=e.match(/<li class="ordered-list">.*?<\/li>/);if(t&&n){let e=t[1];return n[0].replace(/<li class="ordered-list">/,`<li class="ordered-list">${e}`)}return n?n[0]:``}).filter(Boolean),n=t[0].match(/<span class="syntax-marker">(\d+)\./),r=n?Number.parseInt(n[1],10):1;return`<ol${r===1?``:` start="${r}"`}>`+e.join(``)+`</ol>`}return e}),n&&(r=r.replace(/<div><span class="code-fence">(```[^<]*)<\/span><\/div>(.*?)<div><span class="code-fence">(```)<\/span><\/div>/gs,(e,n,r,i)=>{if(r.includes(`<pre class="code-block">`))return e;let a=(r.match(/<div>(.*?)<\/div>/gs)||[]).map(e=>e.replace(/<div>(.*?)<\/div>/s,`$1`)),o=a.map(e=>e===`&nbsp;`?``:e.replace(/&nbsp;/g,` `)).join(`
`),s=a.join(`
`),c=n.slice(3).trim(),l=c?` class="language-${c}"`:``,u=s,d=t||this.codeHighlighter;if(d)try{let e=d(o.replace(/&quot;/g,`"`).replace(/&#39;/g,`'`).replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/&amp;/g,`&`),c);e&&typeof e.then==`function`?console.warn(`Async highlighters are not supported in Node.js (non-DOM) context. Use synchronous highlighters for server-side rendering.`):e&&typeof e==`string`&&e.trim()&&(u=e)}catch(e){console.warn(`Code highlighting failed:`,e)}let f=`<div><span class="code-fence">${n}</span></div>`;return f+=`<pre class="code-block"><code${l}>${u}</code></pre>`,f+=`<div><span class="code-fence">${i}</span></div>`,f})),r}static getListContext(e,t,n=this.noneDisabled){let r=e.split(`
`),i=0,a=0,o=0;for(let e=0;e<r.length;e++){let n=r[e].length;if(i+n>=t){a=e,o=i;break}i+=n+1}let s=r[a],c=o+s.length,l={inList:!1,listType:null,indent:``,marker:null,content:s,lineStart:o,lineEnd:c,markerEndPos:o};if(y(s))return l;let u=b(s);if(!u)return l;let d=!n.has(`tasks`)&&u.listType===`bullet`&&u.marker===`-`?/^\[([ xX])\]([\t ]*)(.*)$/.exec(u.content):null;return d&&(d[2]!==``||d[3]===``)?{inList:!0,listType:`checkbox`,indent:u.indent,marker:`-`,checked:d[1].toLowerCase()===`x`,content:d[3],lineStart:o,lineEnd:c,markerEndPos:o+u.indent.length+u.marker.length+u.separator.length+3+d[2].length}:u.listType===`bullet`?{inList:!0,listType:`bullet`,indent:u.indent,marker:u.marker,content:u.content,lineStart:o,lineEnd:c,markerEndPos:o+u.indent.length+u.marker.length+u.separator.length}:{inList:!0,listType:`numbered`,indent:u.indent,marker:Number.parseInt(u.marker,10),content:u.content,lineStart:o,lineEnd:c,markerEndPos:o+u.indent.length+u.marker.length+u.separator.length}}static createNewListItem(e){switch(e.listType){case`bullet`:return`${e.indent}${e.marker} `;case`numbered`:return`${e.indent}${e.marker+1}. `;case`checkbox`:return`${e.indent}- [ ] `;default:return``}}static renumberLists(e){let t=e.split(`
`),n=new Map,r=!1;return t.map(e=>{let t=e.match(this.LIST_PATTERNS.numbered);if(t){let e=t[1],i=e.length,a=t[3];r||n.clear();let o=(n.get(i)||0)+1;n.set(i,o);for(let[e]of n)e>i&&n.delete(e);return r=!0,`${e}${o}. ${a}`}else return(e.trim()===``||!e.match(/^\s/))&&(r=!1,n.clear()),e}).join(`
`)}};_(E,`linkIndex`,0),_(E,`codeHighlighter`,null),_(E,`customSyntax`,null),_(E,`noneDisabled`,new Set),_(E,`LIST_PATTERNS`,{bullet:/^( *)([-*+])[\t ]+(.*)$/,numbered:/^( *)(\d{1,9})\.[\t ]+(.*)$/,checkbox:/^( *)-[\t ]+\[([ xX])\][\t ]+(.*)$/});function Ne(){return navigator.platform.toLowerCase().includes(`mac`)}function Pe(e){let t=e.split(`+`),n=t.pop();if(!Ne())return[...t.map(e=>e===`Mod`?`Ctrl`:e),n].join(`+`);let r={Ctrl:`⌃`,Alt:`⌥`,Shift:`⇧`,Mod:`⌘`};return Object.keys(r).filter(e=>t.includes(e)).map(e=>r[e]).join(``)+n}var Fe=class{constructor(e){this.editor=e}handleKeydown(e){if(!(Ne()?e.metaKey:e.ctrlKey))return!1;if(e.key===`]`)return e.preventDefault(),this.editor.indentSelection(),!0;if(e.key===`[`)return e.preventDefault(),this.editor.outdentSelection(),!0;let t={Digit1:`1`,Digit2:`2`,Digit3:`3`,Digit7:`7`,Digit8:`8`,Digit9:`9`,Period:`.`}[e.code]||e.key.toLowerCase(),n=null;if(e.altKey)e.shiftKey||(n={1:`toggleH1`,2:`toggleH2`,3:`toggleH3`}[t]||null);else switch(t){case`b`:e.shiftKey||(n=`toggleBold`);break;case`i`:e.shiftKey||(n=`toggleItalic`);break;case`k`:e.shiftKey||(n=`insertLink`);break;case`e`:e.shiftKey||(n=`toggleCode`);break;case`7`:e.shiftKey&&(n=`toggleNumberedList`);break;case`8`:e.shiftKey&&(n=`toggleBulletList`);break;case`9`:e.shiftKey&&(n=`toggleTaskList`);break;case`.`:e.shiftKey&&(n=`toggleQuote`);break}return n?(e.preventDefault(),this.editor.performAction(n,e),!0):!1}destroy(){}},D={name:`solar`,colors:{bgPrimary:`#faf0ca`,bgSecondary:`#ffffff`,text:`#0d3b66`,textPrimary:`#0d3b66`,textSecondary:`#5a7a9b`,h1:`#f95738`,h2:`#ee964b`,h3:`#3d8a51`,strong:`#ee964b`,em:`#f95738`,del:`#ee964b`,link:`#0d3b66`,code:`#0d3b66`,codeBg:`rgba(244, 211, 94, 0.4)`,blockquote:`#5a7a9b`,hr:`#5a7a9b`,syntaxMarker:`rgba(13, 59, 102, 0.52)`,syntax:`#999999`,cursor:`#f95738`,selection:`rgba(244, 211, 94, 0.4)`,listMarker:`#ee964b`,rawLine:`#5a7a9b`,border:`#e0e0e0`,hoverBg:`#f0f0f0`,primary:`#0d3b66`,toolbarBg:`#ffffff`,toolbarIcon:`#0d3b66`,toolbarHover:`#f5f5f5`,toolbarActive:`#faf0ca`,placeholder:`#999999`},previewColors:{text:`#0d3b66`,h1:`inherit`,h2:`inherit`,h3:`inherit`,strong:`inherit`,em:`inherit`,link:`#0d3b66`,code:`#0d3b66`,codeBg:`rgba(244, 211, 94, 0.4)`,blockquote:`#5a7a9b`,hr:`#5a7a9b`,bg:`transparent`}},Ie={name:`cave`,colors:{bgPrimary:`#141E26`,bgSecondary:`#1D2D3E`,text:`#c5dde8`,textPrimary:`#c5dde8`,textSecondary:`#9fcfec`,h1:`#d4a5ff`,h2:`#f6ae2d`,h3:`#9fcfec`,strong:`#f6ae2d`,em:`#9fcfec`,del:`#f6ae2d`,link:`#9fcfec`,code:`#c5dde8`,codeBg:`#1a232b`,blockquote:`#9fcfec`,hr:`#c5dde8`,syntaxMarker:`rgba(159, 207, 236, 0.73)`,syntax:`#7a8c98`,cursor:`#f26419`,selection:`rgba(51, 101, 138, 0.4)`,listMarker:`#f6ae2d`,rawLine:`#9fcfec`,border:`#2a3f52`,hoverBg:`#243546`,primary:`#9fcfec`,toolbarBg:`#1D2D3E`,toolbarIcon:`#c5dde8`,toolbarHover:`#243546`,toolbarActive:`#2a3f52`,placeholder:`#6a7a88`},previewColors:{text:`#c5dde8`,h1:`inherit`,h2:`inherit`,h3:`inherit`,strong:`inherit`,em:`inherit`,link:`#9fcfec`,code:`#c5dde8`,codeBg:`#1a232b`,blockquote:`#9fcfec`,hr:`#c5dde8`,bg:`transparent`}},Le={solar:D,cave:Ie,auto:D,light:D,dark:Ie};function O(e){return typeof e==`string`?{...Le[e]||Le.solar,name:e}:e}function Re(e){return e===`auto`?(window.matchMedia&&window.matchMedia(`(prefers-color-scheme: dark)`))?.matches?`cave`:`solar`:e}function ze(e,t){let n=[];for(let[t,r]of Object.entries(e)){let e=t.replace(/([A-Z])/g,`-$1`).toLowerCase();n.push(`--${e}: ${r};`)}if(t)for(let[e,r]of Object.entries(t)){let t=e.replace(/([A-Z])/g,`-$1`).toLowerCase();n.push(`--preview-${t}-default: ${r};`)}return n.join(`
`)}function Be(e,t={},n={}){return{...e,colors:{...e.colors,...t},previewColors:{...e.previewColors,...n}}}var k={fontSize:`14px`,lineHeight:1.6,fontFamily:`"SF Mono", SFMono-Regular, Menlo, Monaco, "Cascadia Code", Consolas, "Roboto Mono", "Noto Sans Mono", "Droid Sans Mono", "Ubuntu Mono", "DejaVu Sans Mono", "Liberation Mono", "Courier New", Courier, monospace`,padding:`20px`};function Ve(e={}){let{fontSize:t=k.fontSize,lineHeight:n=k.lineHeight,fontFamily:r=k.fontFamily,padding:i=k.padding,theme:a=null,mobile:o={}}=e,s=Object.keys(o).length>0?`
    @media (max-width: 640px) {
      .overtype-wrapper .overtype-input,
      .overtype-wrapper .overtype-preview {
        ${Object.entries(o).map(([e,t])=>`${e.replace(/([A-Z])/g,`-$1`).toLowerCase()}: ${t} !important;`).join(`
        `)}
      }
    }
  `:``,c=a&&a.colors?ze(a.colors,a.previewColors):``;return`
    /* OverType Editor Styles */
    
    /* Middle-ground CSS Reset - Prevent parent styles from leaking in */
    .overtype-container * {
      /* Box model - these commonly leak */
      margin: 0 !important;
      padding: 0 !important;
      border: 0 !important;
      
      /* Layout - these can break our layout */
      /* Don't reset position - it breaks dropdowns */
      float: none !important;
      clear: none !important;
      
      /* Typography - only reset decorative aspects */
      text-decoration: none !important;
      text-transform: none !important;
      letter-spacing: normal !important;
      
      /* Visual effects that can interfere */
      box-shadow: none !important;
      text-shadow: none !important;
      
      /* Ensure box-sizing is consistent */
      box-sizing: border-box !important;
      
      /* Keep inheritance for these */
      /* font-family, color, line-height, font-size - inherit */
    }
    
    /* Container base styles after reset */
    .overtype-container {
      display: flex !important;
      flex-direction: column !important;
      width: 100% !important;
      height: 100% !important;
      position: relative !important; /* Override reset - needed for absolute children */
      overflow: visible !important; /* Allow dropdown to overflow container */
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
      text-align: start !important;
      ${c?`
      /* Theme Variables */
      ${c}`:``}
    }
    
    /* Align every element in the editor to the start of its writing direction */
    .overtype-container .overtype-wrapper * {
      text-align: start !important;
    }
    
    /* Auto-resize mode styles */
    .overtype-container.overtype-auto-resize {
      height: auto !important;
    }

    .overtype-container.overtype-auto-resize .overtype-wrapper {
      flex: 0 0 auto !important; /* Don't grow/shrink, use explicit height */
      height: auto !important;
      min-height: 60px !important;
      overflow: visible !important;
    }
    
    .overtype-wrapper {
      position: relative !important; /* Override reset - needed for absolute children */
      width: 100% !important;
      flex: 1 1 0 !important; /* Grow to fill remaining space, with flex-basis: 0 */
      min-height: 60px !important; /* Minimum usable height */
      overflow: hidden !important;
      background: var(--bg-secondary, #ffffff) !important;
      z-index: 1; /* Below toolbar and dropdown */
    }

    /* Critical alignment styles - must be identical for both layers */
    .overtype-wrapper .overtype-input,
    .overtype-wrapper .overtype-preview {
      /* Positioning - must be identical */
      position: absolute !important; /* Override reset - required for overlay */
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;

      /* Font properties - any difference breaks alignment */
      font-family: var(--instance-font-family, ${r}) !important;
      font-variant-ligatures: none !important; /* keep metrics stable for code */
      font-size: var(--instance-font-size, ${t}) !important;
      line-height: var(--instance-line-height, ${n}) !important;
      font-weight: normal !important;
      font-style: normal !important;
      font-variant: normal !important;
      font-stretch: normal !important;
      font-kerning: none !important;
      font-feature-settings: normal !important;
      
      /* Box model - must match exactly */
      padding: var(--instance-padding, ${i}) !important;
      margin: 0 !important;
      border: none !important;
      outline: none !important;
      box-sizing: border-box !important;
      
      /* Text layout - critical for character positioning */
      white-space: pre-wrap !important;
      word-wrap: break-word !important;
      word-break: normal !important;
      overflow-wrap: break-word !important;
      tab-size: 2 !important;
      -moz-tab-size: 2 !important;
      text-align: start !important;
      text-indent: 0 !important;
      letter-spacing: normal !important;
      word-spacing: normal !important;
      
      /* Text rendering */
      text-transform: none !important;
      text-rendering: auto !important;
      -webkit-font-smoothing: auto !important;
      -webkit-text-size-adjust: 100% !important;
      
      /* Direction and writing */
      direction: ltr !important;
      writing-mode: horizontal-tb !important;
      unicode-bidi: normal !important;
      text-orientation: mixed !important;
      
      /* Visual effects that could shift perception */
      text-shadow: none !important;
      filter: none !important;
      transform: none !important;
      zoom: 1 !important;
      
      /* Vertical alignment */
      vertical-align: baseline !important;
      
      /* Size constraints */
      min-width: 0 !important;
      min-height: 0 !important;
      max-width: none !important;
      max-height: none !important;
      
      /* Overflow */
      overflow-y: auto !important;
      overflow-x: auto !important;
      /* overscroll-behavior removed to allow scroll-through to parent */
      scrollbar-width: auto !important;
      scrollbar-gutter: auto !important;
      
      /* Animation/transition - disabled to prevent movement */
      animation: none !important;
      transition: none !important;
    }

    /* Input layer styles */
    .overtype-wrapper .overtype-input {
      /* Layer positioning */
      z-index: 1 !important;
      
      /* Text visibility */
      color: transparent !important;
      caret-color: var(--cursor, #f95738) !important;
      background-color: transparent !important;
      
      /* Textarea-specific */
      resize: none !important;
      appearance: none !important;
      -webkit-appearance: none !important;
      -moz-appearance: none !important;
      
      /* Prevent mobile zoom on focus */
      touch-action: manipulation !important;
      
      /* Disable autofill */
      autocomplete: off !important;
      autocorrect: off !important;
      autocapitalize: off !important;
    }

    .overtype-wrapper .overtype-input::selection {
      background-color: var(--selection, rgba(244, 211, 94, 0.4));
    }

    .overtype-wrapper .overtype-input::placeholder {
      color: transparent !important;
    }

    /* Placeholder shim - visible when textarea is empty */
    .overtype-wrapper .overtype-placeholder {
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      z-index: 0 !important;
      pointer-events: none !important;
      user-select: none !important;
      font-family: var(--instance-font-family, ${r}) !important;
      font-size: var(--instance-font-size, ${t}) !important;
      line-height: var(--instance-line-height, ${n}) !important;
      padding: var(--instance-padding, ${i}) !important;
      box-sizing: border-box !important;
      direction: ltr !important;
      color: var(--placeholder, #999) !important;
    }

    /* Writing direction (the dir option). The container's dir attribute decides for the
       textarea, the preview and the placeholder at once, so they can never run in different
       directions. dir: 'auto' leaves the container without the attribute, and all three
       then take the direction of the page around the editor. */
    .overtype-container[dir="rtl"] .overtype-wrapper .overtype-input,
    .overtype-container[dir="rtl"] .overtype-wrapper .overtype-preview,
    .overtype-container[dir="rtl"] .overtype-wrapper .overtype-placeholder {
      direction: rtl !important;
    }

    .overtype-container:not([dir]) .overtype-wrapper .overtype-input,
    .overtype-container:not([dir]) .overtype-wrapper .overtype-preview,
    .overtype-container:not([dir]) .overtype-wrapper .overtype-placeholder {
      direction: inherit !important;
    }

    /* Preview layer styles */
    .overtype-wrapper .overtype-preview {
      /* Layer positioning */
      z-index: 0 !important;
      pointer-events: none !important;
      color: var(--text, #0d3b66) !important;
      background-color: transparent !important;
      
      /* Prevent text selection */
      user-select: none !important;
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
    }

    /* Prevent external resets (Tailwind, Bootstrap, etc.) from breaking alignment.
       Any element whose font metrics differ from the textarea causes the CSS "strut"
       to inflate line boxes, drifting the overlay. Force inheritance so every element
       inside the preview matches the textarea exactly. The same goes for direction: a page
       rule such as "div { direction: rtl }" would turn the preview's lines around alone. */
    .overtype-wrapper .overtype-preview * {
      font-family: inherit !important;
      font-size: inherit !important;
      line-height: inherit !important;
      direction: inherit !important;
    }

    /* Defensive styles for preview child divs */
    .overtype-wrapper .overtype-preview div {
      /* Reset any inherited styles */
      margin: 0 !important;
      padding: 0 !important;
      border: none !important;
      text-align: start !important;
      text-indent: 0 !important;
      display: block !important;
      position: static !important;
      transform: none !important;
      min-height: 0 !important;
      max-height: none !important;
      line-height: inherit !important;
      font-size: inherit !important;
      font-family: inherit !important;
    }

    /* Markdown element styling - NO SIZE CHANGES */
    .overtype-wrapper .overtype-preview .header {
      font-weight: var(--instance-bold-weight, bold) !important;
      -webkit-text-stroke: var(--instance-bold-stroke, 0);
    }

    /* Header colors */
    .overtype-wrapper .overtype-preview .h1 { 
      color: var(--h1, #f95738) !important; 
    }
    .overtype-wrapper .overtype-preview .h2 { 
      color: var(--h2, #ee964b) !important; 
    }
    .overtype-wrapper .overtype-preview .h3 { 
      color: var(--h3, #3d8a51) !important; 
    }

    /* Semantic headers - flatten in edit mode */
    .overtype-wrapper .overtype-preview h1,
    .overtype-wrapper .overtype-preview h2,
    .overtype-wrapper .overtype-preview h3,
    .overtype-wrapper .overtype-preview h4,
    .overtype-wrapper .overtype-preview h5,
    .overtype-wrapper .overtype-preview h6 {
      font-size: inherit !important;
      font-weight: var(--instance-bold-weight, bold) !important;
      -webkit-text-stroke: var(--instance-bold-stroke, 0);
      margin: 0 !important;
      padding: 0 !important;
      display: inline !important;
      line-height: inherit !important;
    }

    /* Header colors for semantic headers */
    .overtype-wrapper .overtype-preview h1 { 
      color: var(--h1, #f95738) !important; 
    }
    .overtype-wrapper .overtype-preview h2 { 
      color: var(--h2, #ee964b) !important; 
    }
    .overtype-wrapper .overtype-preview h3 { 
      color: var(--h3, #3d8a51) !important; 
    }
    /* h4 to h6 use the h3 color unless the theme sets their own */
    .overtype-wrapper .overtype-preview h4 { 
      color: var(--h4, var(--h3, #3d8a51)) !important; 
    }
    .overtype-wrapper .overtype-preview h5 { 
      color: var(--h5, var(--h3, #3d8a51)) !important; 
    }
    .overtype-wrapper .overtype-preview h6 { 
      color: var(--h6, var(--h3, #3d8a51)) !important; 
    }

    /* Lists - remove styling in edit mode */
    .overtype-wrapper .overtype-preview ul,
    .overtype-wrapper .overtype-preview ol {
      list-style: none !important;
      margin: 0 !important;
      padding: 0 !important;
      display: block !important; /* Lists need to be block for line breaks */
    }

    .overtype-wrapper .overtype-preview li {
      display: block !important; /* Each item on its own line */
      margin: 0 !important;
      padding: 0 !important;
      /* Don't set list-style here - let ul/ol control it */
    }

    /* Bold text */
    .overtype-wrapper .overtype-preview strong {
      color: var(--strong, #ee964b) !important;
      font-weight: var(--instance-bold-weight, bold) !important;
      -webkit-text-stroke: var(--instance-bold-stroke, 0);
    }

    /* Italic text */
    .overtype-wrapper .overtype-preview em {
      color: var(--em, #f95738) !important;
      text-decoration-color: var(--em, #f95738) !important;
      text-decoration-thickness: 1px !important;
      font-style: var(--instance-italic-style, italic) !important;
    }

    /* Strikethrough text */
    .overtype-wrapper .overtype-preview del {
      color: var(--del, #ee964b) !important;
      text-decoration: line-through !important;
      text-decoration-color: var(--del, #ee964b) !important;
      text-decoration-thickness: 1px !important;
    }

    /* Inline code */
    .overtype-wrapper .overtype-preview code {
      background: var(--code-bg, rgba(244, 211, 94, 0.4)) !important;
      color: var(--code, #0d3b66) !important;
      padding: 0 !important;
      border-radius: 2px !important;
      font-family: inherit !important;
      font-size: inherit !important;
      line-height: inherit !important;
      font-weight: normal !important;
    }

    /* Code blocks - consolidated pre blocks */
    .overtype-wrapper .overtype-preview pre {
      padding: 0 !important;
      margin: 0 !important;
      border-radius: 4px !important;
      overflow-x: auto !important;
    }
    
    /* Code block styling in normal mode - yellow background */
    .overtype-wrapper .overtype-preview pre.code-block {
      background: var(--code-bg, rgba(244, 211, 94, 0.4)) !important;
      white-space: break-spaces !important; /* Prevent horizontal scrollbar that breaks alignment */
    }

    /* Code inside pre blocks - remove background */
    .overtype-wrapper .overtype-preview pre code {
      background: transparent !important;
      color: var(--code, #0d3b66) !important;
      font-family: var(--instance-font-family, ${r}) !important; /* Match textarea font exactly for alignment */
    }

    /* Blockquotes */
    .overtype-wrapper .overtype-preview .blockquote {
      color: var(--blockquote, #5a7a9b) !important;
      padding: 0 !important;
      margin: 0 !important;
      border: none !important;
    }

    /* Links */
    .overtype-wrapper .overtype-preview a {
      color: var(--link, #0d3b66) !important;
      text-decoration: underline !important;
      font-weight: normal !important;
    }

    .overtype-wrapper .overtype-preview a:hover {
      text-decoration: underline !important;
      color: var(--link, #0d3b66) !important;
    }

    /* Lists - no list styling */
    .overtype-wrapper .overtype-preview ul,
    .overtype-wrapper .overtype-preview ol {
      list-style: none !important;
      margin: 0 !important;
      padding: 0 !important;
    }


    /* Horizontal rules */
    .overtype-wrapper .overtype-preview hr {
      border: none !important;
      color: var(--hr, #5a7a9b) !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    .overtype-wrapper .overtype-preview .hr-marker {
      color: var(--hr, #5a7a9b) !important;
      opacity: 0.6 !important;
    }

    /* Code fence markers - with background when not in code block */
    .overtype-wrapper .overtype-preview .code-fence {
      color: var(--code, #0d3b66) !important;
      background: var(--code-bg, rgba(244, 211, 94, 0.4)) !important;
    }
    
    /* Code block lines - background for entire code block */
    .overtype-wrapper .overtype-preview .code-block-line {
      background: var(--code-bg, rgba(244, 211, 94, 0.4)) !important;
    }
    
    /* Remove background from code fence when inside code block line */
    .overtype-wrapper .overtype-preview .code-block-line .code-fence {
      background: transparent !important;
    }

    /* Raw markdown line */
    .overtype-wrapper .overtype-preview .raw-line {
      color: var(--raw-line, #5a7a9b) !important;
      font-style: normal !important;
      font-weight: normal !important;
    }

    /* Syntax markers */
    .overtype-wrapper .overtype-preview .syntax-marker {
      color: var(--syntax-marker, rgba(13, 59, 102, 0.52)) !important;
      opacity: 0.7 !important;
      -webkit-text-stroke: 0;
    }

    /* List markers */
    .overtype-wrapper .overtype-preview .list-marker {
      color: var(--list-marker, #ee964b) !important;
    }

    /* Stats bar */
    
    /* Stats bar - positioned by flexbox */
    .overtype-stats {
      height: 40px !important;
      padding: 0 20px !important;
      background: var(--bg-secondary, #f8f9fa) !important;
      border-top: 1px solid var(--border, #e0e0e0) !important;
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      font-size: 0.85rem !important;
      color: var(--text-secondary, #666) !important;
      flex-shrink: 0 !important; /* Don't shrink */
      z-index: 10001 !important; /* Above link tooltip */
      position: relative !important; /* Enable z-index */
    }


    .overtype-stats .overtype-stat {
      display: flex !important;
      align-items: center !important;
      gap: 5px !important;
      white-space: nowrap !important;
    }
    
    .overtype-stats .live-dot {
      width: 8px !important;
      height: 8px !important;
      background: #4caf50 !important;
      border-radius: 50% !important;
      animation: overtype-pulse 2s infinite !important;
    }
    
    @keyframes overtype-pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(1.2); }
    }
    

    /* Toolbar Styles */
    .overtype-toolbar.overtype-toolbar-hidden {
      display: none !important;
    }

    .overtype-toolbar {
      display: flex !important;
      align-items: center !important;
      gap: 4px !important;
      padding: 8px !important; /* Override reset */
      background: var(--toolbar-bg, var(--bg-primary, #f8f9fa)) !important; /* Override reset */
      border-bottom: 1px solid var(--toolbar-border, transparent) !important; /* Override reset */
      overflow-x: auto !important; /* Allow horizontal scrolling */
      overflow-y: hidden !important; /* Hide vertical overflow */
      -webkit-overflow-scrolling: touch !important;
      flex-shrink: 0 !important;
      height: auto !important;
      position: relative !important; /* Override reset */
      z-index: 100 !important; /* Ensure toolbar is above wrapper */
      scrollbar-width: thin; /* Thin scrollbar on Firefox */
    }
    
    /* Thin scrollbar styling */
    .overtype-toolbar::-webkit-scrollbar {
      height: 4px;
    }
    
    .overtype-toolbar::-webkit-scrollbar-track {
      background: transparent;
    }
    
    .overtype-toolbar::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 2px;
    }

    .overtype-toolbar-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      padding: 0;
      border: none;
      border-radius: 6px;
      background: transparent;
      color: var(--toolbar-icon, var(--text-secondary, #666));
      cursor: pointer;
      transition: all 0.2s ease;
      flex-shrink: 0;
    }

    .overtype-toolbar-button svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }

    .overtype-toolbar-button:hover {
      background: var(--toolbar-hover, var(--bg-secondary, #e9ecef));
      color: var(--toolbar-icon, var(--text-primary, #333));
    }

    .overtype-toolbar-button:active {
      transform: scale(0.95);
    }

    .overtype-toolbar-button.active {
      background: var(--toolbar-active, var(--primary, #007bff));
      color: var(--toolbar-icon, var(--text-primary, #333));
    }

    .overtype-toolbar-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .overtype-toolbar-separator {
      width: 1px;
      height: 24px;
      background: var(--border, #e0e0e0);
      margin: 0 4px;
      flex-shrink: 0;
    }

    /* Adjust wrapper when toolbar is present */
    /* Mobile toolbar adjustments */
    @media (max-width: 640px) {
      .overtype-toolbar {
        padding: 6px;
        gap: 2px;
      }

      .overtype-toolbar-button {
        width: 36px;
        height: 36px;
      }

      .overtype-toolbar-separator {
        margin: 0 2px;
      }
    }
    
    /* Plain mode - hide preview and show textarea text */
    .overtype-container[data-mode="plain"] .overtype-preview {
      display: none !important;
    }
    
    .overtype-container[data-mode="plain"] .overtype-input {
      color: var(--text, #0d3b66) !important;
      /* Use system font stack for better plain text readability */
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
                   "Helvetica Neue", Arial, sans-serif !important;
    }
    
    /* Ensure textarea remains transparent in overlay mode */
    .overtype-container:not([data-mode="plain"]) .overtype-input {
      color: transparent !important;
    }

    /* Dropdown menu styles */
    .overtype-toolbar-button {
      position: relative !important; /* Override reset - needed for dropdown */
    }

    .overtype-toolbar-button.dropdown-active {
      background: var(--toolbar-active, var(--hover-bg, #f0f0f0));
    }

    .overtype-dropdown-menu {
      position: fixed !important; /* Fixed positioning relative to viewport */
      background: var(--bg-secondary, white) !important; /* Override reset */
      border: 1px solid var(--border, #e0e0e0) !important; /* Override reset */
      border-radius: 6px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important; /* Override reset */
      z-index: 10000; /* Very high z-index to ensure visibility */
      min-width: 150px;
      padding: 4px 0 !important; /* Override reset */
      /* Position will be set via JavaScript based on button position */
    }

    .overtype-dropdown-item {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 8px 12px;
      border: none;
      background: none;
      text-align: start;
      cursor: pointer;
      font-size: 14px;
      color: var(--text, #333);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    .overtype-dropdown-item:hover {
      background: var(--hover-bg, #f0f0f0);
    }

    .overtype-dropdown-item.active {
      font-weight: 600;
    }

    .overtype-dropdown-check {
      width: 16px;
      margin-inline-end: 8px;
      color: var(--h1, #007bff);
    }

    .overtype-dropdown-icon {
      width: 20px;
      margin-inline-end: 8px;
      text-align: center;
    }

    /* Preview mode styles */
    .overtype-container[data-mode="preview"] .overtype-input {
      display: none !important;
    }

    .overtype-container[data-mode="preview"] .overtype-preview {
      pointer-events: auto !important;
      user-select: text !important;
      cursor: text !important;
    }

    .overtype-container.overtype-auto-resize[data-mode="preview"] .overtype-preview {
      position: static !important;
      height: auto !important;
    }

    /* Preview mode never shares the textarea's letter widths, so it keeps real bold and italic */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview {
      --instance-bold-weight: bold;
      --instance-bold-stroke: 0;
      --instance-italic-style: italic;
    }

    /* Hide syntax markers in preview mode */
    .overtype-container[data-mode="preview"] .syntax-marker {
      display: none !important;
    }
    
    /* Hide URL part of links in preview mode - extra specificity */
    .overtype-container[data-mode="preview"] .syntax-marker.url-part,
    .overtype-container[data-mode="preview"] .url-part {
      display: none !important;
    }
    
    /* Hide all syntax markers inside links too */
    .overtype-container[data-mode="preview"] a .syntax-marker {
      display: none !important;
    }

    /* Headers - restore proper sizing in preview mode */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview h1,
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview h2,
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview h3,
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview h4,
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview h5,
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview h6 {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
      font-weight: 600 !important;
      margin: 0 !important;
      display: block !important;
      line-height: 1 !important;
    }

    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview h1 {
      font-size: 2em !important;
      color: var(--preview-h1, var(--preview-h1-default)) !important;
    }

    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview h2 {
      font-size: 1.5em !important;
      color: var(--preview-h2, var(--preview-h2-default)) !important;
    }

    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview h3 {
      font-size: 1.17em !important;
      color: var(--preview-h3, var(--preview-h3-default)) !important;
    }

    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview h4 {
      font-size: 1em !important;
      color: var(--preview-h4, var(--preview-h4-default, var(--preview-h3, var(--preview-h3-default)))) !important;
    }

    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview h5 {
      font-size: 0.9em !important;
      color: var(--preview-h5, var(--preview-h5-default, var(--preview-h3, var(--preview-h3-default)))) !important;
    }

    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview h6 {
      font-size: 0.8em !important;
      color: var(--preview-h6, var(--preview-h6-default, var(--preview-h3, var(--preview-h3-default)))) !important;
    }

    /* Lists - restore list styling in preview mode. The indent, the task box gap and the
       quote bar below sit on the side the text starts from, so they follow the dir option. */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview ul {
      display: block !important;
      list-style: disc !important;
      padding-inline-start: 2em !important;
      margin: 1em 0 !important;
    }

    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview ol {
      display: block !important;
      list-style: decimal !important;
      padding-inline-start: 2em !important;
      margin: 1em 0 !important;
    }
    
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview li {
      display: list-item !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    /* Task list checkboxes - only in preview mode */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview li.task-list {
      list-style: none !important;
      position: relative !important;
    }

    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview li.task-list input[type="checkbox"] {
      margin-inline-end: 0.5em !important;
      cursor: default !important;
      vertical-align: middle !important;
    }

    /* Task list in normal mode - keep syntax visible */
    .overtype-container:not([data-mode="preview"]) .overtype-wrapper .overtype-preview li.task-list {
      list-style: none !important;
    }

    .overtype-container:not([data-mode="preview"]) .overtype-wrapper .overtype-preview li.task-list .syntax-marker {
      color: var(--syntax, #999999) !important;
      font-weight: normal !important;
    }

    /* Links - make clickable in preview mode */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview a {
      pointer-events: auto !important;
      cursor: pointer !important;
      color: var(--preview-link, var(--preview-link-default)) !important;
      text-decoration: underline !important;
    }

    /* Code blocks - proper pre/code styling in preview mode */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview pre.code-block {
      background: var(--preview-code-bg, var(--preview-code-bg-default)) !important;
      color: var(--preview-code, var(--preview-code-default)) !important;
      padding: 1.2em !important;
      border-radius: 3px !important;
      overflow-x: auto !important;
      margin: 0 !important;
      display: block !important;
      direction: ltr !important; /* Code reads left to right in every language */
    }

    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview pre.code-block code {
      background: transparent !important;
      color: inherit !important;
      padding: 0 !important;
      font-family: ${r} !important;
      font-size: 0.9em !important;
      line-height: 1.4 !important;
    }

    /* Hide old code block lines and fences in preview mode */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview .code-block-line {
      display: none !important;
    }

    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview .code-fence {
      display: none !important;
    }

    /* Blockquotes - enhanced styling in preview mode */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview .blockquote {
      display: block !important;
      border-inline-start: 4px solid var(--preview-blockquote, var(--preview-blockquote-default)) !important;
      color: var(--preview-blockquote, var(--preview-blockquote-default)) !important;
      padding-inline-start: 1em !important;
      margin: 1em 0 !important;
      font-style: italic !important;
    }

    /* Typography improvements in preview mode */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview {
      font-family: Georgia, 'Times New Roman', serif !important;
      font-size: 16px !important;
      line-height: 1.8 !important;
      color: var(--preview-text, var(--preview-text-default)) !important;
      background: var(--preview-bg, var(--preview-bg-default)) !important;
    }

    /* Inline code in preview mode - keep monospace */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview code {
      font-family: ${r} !important;
      font-size: 0.9em !important;
      background: var(--preview-code-bg, var(--preview-code-bg-default)) !important;
      color: var(--preview-code, var(--preview-code-default)) !important;
      padding: 0.2em 0.4em !important;
      border-radius: 3px !important;
    }

    /* Strong and em elements in preview mode */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview strong {
      font-weight: 700 !important;
      color: var(--preview-strong, var(--preview-strong-default)) !important;
    }

    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview em {
      font-style: italic !important;
      color: var(--preview-em, var(--preview-em-default)) !important;
    }

    /* HR in preview mode */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview .hr-marker {
      display: block !important;
      border-top: 2px solid var(--preview-hr, var(--preview-hr-default)) !important;
      text-indent: -9999px !important;
      height: 2px !important;
    }

    /* Link Tooltip */
    .overtype-link-tooltip {
      background: #333 !important;
      color: white !important;
      padding: 6px 10px !important;
      border-radius: 16px !important;
      font-size: 12px !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
      display: flex !important;
      visibility: hidden !important;
      pointer-events: none !important;
      z-index: 10000 !important;
      cursor: pointer !important;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3) !important;
      max-width: 300px !important;
      white-space: nowrap !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      position: fixed;
      top: 0;
      left: 0;
    }

    .overtype-link-tooltip.visible {
      visibility: visible !important;
      pointer-events: auto !important;
    }

    ${s}
  `}g({},{applyCustomFormat:()=>en,default:()=>tn,detectMarkers:()=>Ft,expandSelection:()=>$t,getActiveFormats:()=>Zt,getDebugMode:()=>Ze,hasFormat:()=>Qt,insertHeader:()=>F,insertLink:()=>Bt,preserveSelection:()=>st,setDebugMode:()=>Xe,setUndoMethod:()=>et,toggleBold:()=>It,toggleBulletList:()=>Vt,toggleCode:()=>zt,toggleH1:()=>Gt,toggleH2:()=>Kt,toggleH3:()=>qt,toggleH4:()=>Jt,toggleH5:()=>Yt,toggleH6:()=>Xt,toggleItalic:()=>Lt,toggleNumberedList:()=>Ht,toggleQuote:()=>Ut,toggleStrikethrough:()=>Rt,toggleTaskList:()=>Wt});var He=Object.defineProperty,Ue=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable,Ke=(e,t,n)=>t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qe=(e,t)=>{for(var n in t||={})We.call(t,n)&&Ke(e,n,t[n]);if(Ue)for(var n of Ue(t))Ge.call(t,n)&&Ke(e,n,t[n]);return e},A={bold:{prefix:`**`,suffix:`**`,trimFirst:!0},italic:{prefix:`_`,suffix:`_`,trimFirst:!0},strikethrough:{prefix:`~~`,suffix:`~~`,trimFirst:!0},code:{prefix:"`",suffix:"`",blockPrefix:"```",blockSuffix:"```"},link:{prefix:`[`,suffix:`](url)`,replaceNext:`url`,scanFor:`https?://`},bulletList:{prefix:`- `,multiline:!0,unorderedList:!0},numberedList:{prefix:`1. `,multiline:!0,orderedList:!0},quote:{prefix:`> `,multiline:!0,surroundWithNewlines:!0},taskList:{prefix:`- [ ] `,multiline:!0},header1:{prefix:`# `},header2:{prefix:`## `},header3:{prefix:`### `},header4:{prefix:`#### `},header5:{prefix:`##### `},header6:{prefix:`###### `}};function Je(){return{prefix:``,suffix:``,blockPrefix:``,blockSuffix:``,multiline:!1,replaceNext:``,prefixSpace:!1,scanFor:``,surroundWithNewlines:!1,orderedList:!1,unorderedList:!1,trimFirst:!1}}function j(e){return qe(qe({},Je()),e)}var Ye=!1;function Xe(e){Ye=e}function Ze(){return Ye}function M(e,t,n){Ye&&(console.group(`\u{1F50D} ${e}`),console.log(t),n&&console.log(`Data:`,n),console.groupEnd())}function Qe(e,t){if(!Ye)return;let n=e.value.slice(e.selectionStart,e.selectionEnd);console.group(`\u{1F4CD} Selection: ${t}`),console.log(`Position:`,`${e.selectionStart}-${e.selectionEnd}`),console.log(`Selected text:`,JSON.stringify(n)),console.log(`Length:`,n.length);let r=e.value.slice(Math.max(0,e.selectionStart-10),e.selectionStart),i=e.value.slice(e.selectionEnd,Math.min(e.value.length,e.selectionEnd+10));console.log(`Context:`,JSON.stringify(r)+`[SELECTION]`+JSON.stringify(i)),console.groupEnd()}function $e(e){Ye&&(console.group(`📝 Result`),console.log(`Text to insert:`,JSON.stringify(e.text)),console.log(`New selection:`,`${e.selectionStart}-${e.selectionEnd}`),console.groupEnd())}var N=null;function P(e,{text:t,selectionStart:n,selectionEnd:r}){let i=Ze();i&&(console.group(`🔧 insertText`),console.log(`Current selection:`,`${e.selectionStart}-${e.selectionEnd}`),console.log(`Text to insert:`,JSON.stringify(t)),console.log(`New selection to set:`,n,`-`,r)),e.focus();let a=e.selectionStart,o=e.selectionEnd,s=e.value.slice(0,a),c=e.value.slice(o);i&&(console.log(`Before text (last 20):`,JSON.stringify(s.slice(-20))),console.log(`After text (first 20):`,JSON.stringify(c.slice(0,20))),console.log(`Selected text being replaced:`,JSON.stringify(e.value.slice(a,o))));let l=e.value;if(N===null||N===!0){e.contentEditable=`true`;try{N=document.execCommand(`insertText`,!1,t),i&&console.log(`execCommand returned:`,N,`for text with`,t.split(`
`).length,`lines`)}catch(e){N=!1,i&&console.log(`execCommand threw error:`,e)}e.contentEditable=`false`}if(i&&(console.log(`canInsertText before:`,N),console.log(`execCommand result:`,N)),N){let n=s+t+c,r=e.value;i&&(console.log(`Expected length:`,n.length),console.log(`Actual length:`,r.length)),r!==n&&i&&(console.log(`execCommand changed the value but not as expected`),console.log(`Expected:`,JSON.stringify(n.slice(0,100))),console.log(`Actual:`,JSON.stringify(r.slice(0,100))))}if(!N)if(i&&console.log(`Using manual insertion`),e.value===l){i&&console.log(`Value unchanged, doing manual replacement`);try{document.execCommand(`ms-beginUndoUnit`)}catch{}e.value=s+t+c;try{document.execCommand(`ms-endUndoUnit`)}catch{}e.dispatchEvent(new CustomEvent(`input`,{bubbles:!0,cancelable:!0}))}else i&&console.log(`Value was changed by execCommand, skipping manual insertion`);i&&console.log(`Setting selection range:`,n,r),n!=null&&r!=null?e.setSelectionRange(n,r):e.setSelectionRange(a,e.selectionEnd),i&&(console.log(`Final value length:`,e.value.length),console.groupEnd())}function et(e){switch(e){case`native`:N=!0;break;case`manual`:N=!1;break;case`auto`:N=null;break}}function tt(e){return e.trim().split(`
`).length>1}function nt(e,t){let n=t;for(;e[n]&&e[n-1]!=null&&!e[n-1].match(/\s/);)n--;return n}function rt(e,t,n){let r=t,i=n?/\n/:/\s/;for(;e[r]&&!e[r].match(i);)r++;return r}function it(e){let t=e.value.split(`
`),n=0;for(let r=0;r<t.length;r++){let i=t[r].length+1;e.selectionStart>=n&&e.selectionStart<n+i&&(e.selectionStart=n),e.selectionEnd>=n&&e.selectionEnd<n+i&&(r===t.length-1?e.selectionEnd=Math.min(n+t[r].length,e.value.length):e.selectionEnd=n+i-1),n+=i}}function at(e,t,n,r=!1){if(e.selectionStart===e.selectionEnd)e.selectionStart=nt(e.value,e.selectionStart),e.selectionEnd=rt(e.value,e.selectionEnd,r);else{let r=e.selectionStart-t.length,i=e.selectionEnd+n.length,a=e.value.slice(r,e.selectionStart)===t,o=e.value.slice(e.selectionEnd,i)===n;a&&o&&(e.selectionStart=r,e.selectionEnd=i)}return e.value.slice(e.selectionStart,e.selectionEnd)}function ot(e){let t=e.value.slice(0,e.selectionStart),n=e.value.slice(e.selectionEnd),r=t.match(/\n*$/),i=n.match(/^\n*/),a=r?r[0].length:0,o=i?i[0].length:0,s=``,c=``;return t.match(/\S/)&&a<2&&(s=`
`.repeat(2-a)),n.match(/\S/)&&o<2&&(c=`
`.repeat(2-o)),{newlinesToAppend:s,newlinesToPrepend:c}}function st(e,t){let n=e.selectionStart,r=e.selectionEnd,i=e.scrollTop;t(),e.selectionStart=n,e.selectionEnd=r,e.scrollTop=i}function ct(e,t,n={}){let r=e.selectionStart,i=e.selectionEnd,a=r===i,o=e.value,s=r;for(;s>0&&o[s-1]!==`
`;)s--;if(a){let t=r;for(;t<o.length&&o[t]!==`
`;)t++;e.selectionStart=s,e.selectionEnd=t}else it(e);let c=t(e);if(n.adjustSelection){let t=e.value.slice(e.selectionStart,e.selectionEnd).startsWith(n.prefix),a=n.adjustSelection(t,r,i,s);c.selectionStart=a.start,c.selectionEnd=a.end}else if(n.prefix){let t=e.value.slice(e.selectionStart,e.selectionEnd).startsWith(n.prefix);a?t?(c.selectionStart=Math.max(r-n.prefix.length,s),c.selectionEnd=c.selectionStart):(c.selectionStart=r+n.prefix.length,c.selectionEnd=c.selectionStart):t?(c.selectionStart=Math.max(r-n.prefix.length,s),c.selectionEnd=Math.max(i-n.prefix.length,s)):(c.selectionStart=r+n.prefix.length,c.selectionEnd=i+n.prefix.length)}if(!a){let t=e.value.slice(e.selectionStart,e.selectionEnd).split(`
`),n=c.text.split(`
`);if(t.length===n.length){let a=e.selectionStart,o=e=>{let r=a,i=a;for(let a=0;a<t.length;a++){if(e<=r+t[a].length)return i+Math.max(0,e-r+n[a].length-t[a].length);r+=t[a].length+1,i+=n[a].length+1}return e};c.selectionStart=r===a?a:o(r),c.selectionEnd=o(i)}}return c}function lt(e,t){let n,r,{prefix:i,suffix:a,blockPrefix:o,blockSuffix:s,replaceNext:c,prefixSpace:l,scanFor:u,surroundWithNewlines:d,trimFirst:f}=t,p=e.selectionStart,m=e.selectionEnd,h=e.value.slice(e.selectionStart,e.selectionEnd),g=tt(h)&&o&&o.length>0?`${o}
`:i,_=tt(h)&&s&&s.length>0?`
${s}`:a;if(l){let t=e.value[e.selectionStart-1];e.selectionStart!==0&&t!=null&&!t.match(/\s/)&&(g=` ${g}`)}h=at(e,g,_,t.multiline);let v=e.selectionStart,y=e.selectionEnd,ee=c&&c.length>0&&_.indexOf(c)>-1&&h.length>0;if(d){let t=ot(e);n=t.newlinesToAppend,r=t.newlinesToPrepend,g=n+i,_+=r}if(h.startsWith(g)&&h.endsWith(_)){let e=h.slice(g.length,h.length-_.length);if(p===m){let t=p-g.length;t=Math.max(t,v),t=Math.min(t,v+e.length),v=y=t}else y=v+e.length;return{text:e,selectionStart:v,selectionEnd:y}}else if(!ee){let e=g+h+_;v=p+g.length,y=m+g.length;let t=h.match(/^\s*|\s*$/g);if(f&&t){let n=t[0]||``,r=t[1]||``;e=n+g+h.trim()+_+r,v+=n.length,y-=r.length}return{text:e,selectionStart:v,selectionEnd:y}}else if(u&&u.length>0&&h.match(u)){_=_.replace(c,h);let e=g+_;return v=y=v+g.length,{text:e,selectionStart:v,selectionEnd:y}}else{let e=g+h+_;return v=v+g.length+h.length+_.indexOf(c),y=v+c.length,{text:e,selectionStart:v,selectionEnd:y}}}function ut(e,t){let{prefix:n,suffix:r,surroundWithNewlines:i}=t,a=e.value.slice(e.selectionStart,e.selectionEnd),o=e.selectionStart,s=e.selectionEnd,c=a.split(`
`);if(c.every(e=>e.startsWith(n)&&(!r||e.endsWith(r))))a=c.map(e=>{let t=e.slice(n.length);return r&&(t=t.slice(0,t.length-r.length)),t}).join(`
`),s=o+a.length;else if(a=c.map(e=>n+e+(r||``)).join(`
`),i){let{newlinesToAppend:t,newlinesToPrepend:n}=ot(e);o+=t.length,s=o+a.length,a=t+a+n}return{text:a,selectionStart:o,selectionEnd:s}}function dt(e){let t=e.split(`
`),n=/^\d+\.\s+/,r=t.every(e=>n.test(e)),i=t;return r&&(i=t.map(e=>e.replace(n,``))),{text:i.join(`
`),processed:r}}function ft(e){let t=e.split(`
`),n=/^[-*+] /,r=t.every(e=>n.test(e)),i=t;return r&&(i=t.map(e=>e.replace(n,``))),{text:i.join(`
`),processed:r}}function pt(e,t,n=`-`){return t?`${n} `:`${e+1}. `}function mt(e,t){let n,r,i;return e.orderedList?(n=dt(t),r=ft(n.text),i=r.text):(n=ft(t),r=dt(n.text),i=r.text),[n,r,i]}function ht(e,t){let n=e.selectionStart===e.selectionEnd,r=e.selectionStart,i=e.selectionEnd;it(e);let[a,o,s]=mt(t,e.value.slice(e.selectionStart,e.selectionEnd)),c=s.split(`
`).map((e,n)=>`${pt(n,t.unorderedList,t.bulletMarker)}${e}`),l=c.reduce((e,n,r)=>e+pt(r,t.unorderedList).length,0),u=c.reduce((e,n,r)=>e+pt(r,!t.unorderedList).length,0);if(a.processed)return n?(r=Math.max(r-pt(0,t.unorderedList).length,0),i=r):(r=e.selectionStart,i=e.selectionEnd-l),{text:s,selectionStart:r,selectionEnd:i};let d=c.join(`
`);return n?(r=Math.max(r+pt(0,t.unorderedList).length,0),i=r):o.processed?(r=Math.max(e.selectionStart,0),i=e.selectionEnd+l-u):(r=Math.max(e.selectionStart,0),i=e.selectionEnd+l),{text:d,selectionStart:r,selectionEnd:i}}function gt(e,t){P(e,ct(e,e=>ht(e,t),{adjustSelection:(n,r,i,a)=>{let o=e.value.slice(a,e.selectionEnd),s=/^\d+\.\s+/,c=/^[-*+] /,l=s.test(o),u=c.test(o),d=t.orderedList&&l||t.unorderedList&&u;if(r===i)if(d){let e=o.match(t.orderedList?s:c),n=e?e[0].length:0;return{start:Math.max(r-n,a),end:Math.max(r-n,a)}}else if(l||u){let e=o.match(l?s:c),n=e?e[0].length:0,i=(t.unorderedList?2:3)-n;return{start:r+i,end:r+i}}else{let e=t.unorderedList?2:3;return{start:r+e,end:r+e}}else if(d){let e=o.match(t.orderedList?s:c),n=e?e[0].length:0;return{start:Math.max(r-n,a),end:Math.max(i-n,a)}}else if(l||u){let e=o.match(l?s:c),n=e?e[0].length:0,a=(t.unorderedList?2:3)-n;return{start:r+a,end:i+a}}else{let e=t.unorderedList?2:3;return{start:r+e,end:i+e}}}}))}function _t(e,t,n){return[2,1].some(r=>{let i=[],a=/~+/g,o;for(;o=a.exec(e);)o[0].length===r&&i.push(o.index);for(let e=0;e+1<i.length;e+=2)if(i[e]+r<=t&&n<=i[e+1])return!0;return!1})}function vt(e){if(!e)return[];let t=[],{selectionStart:n,selectionEnd:r,value:i}=e,a=i.split(`
`),o=0,s=``;for(let e of a){if(n>=o&&n<=o+e.length){s=e;break}o+=e.length+1}/^[-*+] /.test(s)&&(/^[-*+] \[[ xX]\] /.test(s)?t.push(`task-list`):t.push(`bullet-list`)),/^\d+\.\s/.test(s)&&t.push(`numbered-list`),s.startsWith(`> `)&&t.push(`quote`);let c=/^(#{1,6}) /.exec(s);c&&t.push(c[1].length===1?`header`:`header-${c[1].length}`);let l=Math.max(0,n-10),u=Math.min(i.length,r+10),d=i.slice(l,u),f=i.slice(Math.max(0,n-100),n),p=i.slice(r,Math.min(i.length,r+100));[`**`,`__`].some(e=>d.includes(e)&&f.lastIndexOf(e)!==-1&&p.indexOf(e)!==-1)&&t.push(`bold`);let m=e=>{let t=e===`*`?`\\*`:e;return RegExp(`(^|[^${t}])${t}[^${t}]*$`).test(f)&&RegExp(`^[^${t}]*${t}(?!${t})`).test(p)};if((d.includes(`_`)&&m(`_`)||d.includes(`*`)&&m(`*`))&&t.push(`italic`),_t(s,n-o,r-o)&&t.push(`strikethrough`),d.includes("`")){let e=i.slice(Math.max(0,n-100),n),a=i.slice(r,Math.min(i.length,r+100));e.includes("`")&&a.includes("`")&&t.push(`code`)}if(d.includes(`[`)&&d.includes(`]`)){let e=i.slice(Math.max(0,n-100),n),a=i.slice(r,Math.min(i.length,r+100)),o=e.lastIndexOf(`[`),s=a.indexOf(`]`);o!==-1&&s!==-1&&i.slice(r+s+1,r+s+10).startsWith(`(`)&&t.push(`link`)}return t}function yt(e,t){return vt(e).includes(t)}function bt(e,t={}){if(!e)return;let{toWord:n,toLine:r,toFormat:i}=t,{selectionStart:a,selectionEnd:o,value:s}=e;if(r){let t=s.split(`
`),n=0,r=0,i=0;for(let e of t){if(a>=i&&a<=i+e.length){n=i,r=i+e.length;break}i+=e.length+1}e.selectionStart=n,e.selectionEnd=r}else if(n&&a===o){let t=a,n=o;for(;t>0&&!/\s/.test(s[t-1]);)t--;for(;n<s.length&&!/\s/.test(s[n]);)n++;e.selectionStart=t,e.selectionEnd=n}}var xt=e=>e===`*`||e===`_`,St=e=>xt(e)||e===`~`,Ct=/[(\[{"'“‘]/,wt=/[.,;:!?)\]}"'”’]/,Tt={bold:{chars:[`*`,`_`],size:e=>e>=2?2:0},italic:{chars:[`*`,`_`],size:e=>e%2},strikethrough:{chars:[`~`],size:e=>e<=2?e:0}};function Et(e,t,n){let r=[];for(let i=t;i<n;i++){let t=r[r.length-1];t&&e[t.start]===e[i]?t.end=i+1:r.push({start:i,end:i+1})}return r}function Dt(e,t,n,r){let i=t;for(;i>0&&St(e[i-1]);)i--;let a=n;for(;a<e.length&&St(e[a]);)a++;let o=Et(e,i,t).reverse(),s=Et(e,n,a),c=e=>Tt[r].size(e.end-e.start);for(let t of Tt[r].chars){let n=n=>e[n.start]===t&&c(n)>0,r=o.find(n),i=s.find(n);if(r&&i&&c(r)===c(i)){let e=c(r);return{open:r.end-e,close:i.start,size:e}}}return null}function Ot(e,t,n){for(;;){for(;t<n&&xt(e[t]);)t++;for(;n>t&&xt(e[n-1]);)n--;let r=0;for(;t+r<n&&e[t+r]===`~`;)r++;let i=0;for(;n-i>t+r&&e[n-1-i]===`~`;)i++;if(r===0||r!==i)return{start:t,end:n};t+=r,n-=r}}function kt(e,t,n){let r=t,i=n,a=r===i;if(a){for(r=nt(e,r),i=rt(e,i,!1);r<i&&Ct.test(e[r]);)r++;for(;i>r&&wt.test(e[i-1]);)i--}for(;r<i&&/\s/.test(e[r]);)r++;for(;i>r&&/\s/.test(e[i-1]);)i--;let o=Ot(e,r,i);return a&&!/[^*_~]/.test(e.slice(o.start,o.end))?{start:t,end:t}:o}var At=(e,t,n)=>Math.min(Math.max(e,t),n);function jt(e,t,n){let r=e.value,i=e.selectionStart,a=e.selectionEnd,o=i!==a,{start:s,end:c}=kt(r,i,a),l=Dt(r,s,c,t);if(l){e.selectionStart=l.open,e.selectionEnd=l.close+l.size;let t=s-l.size,n=c-l.size,a=At(i-l.size,t,n);return{text:r.slice(l.open+l.size,l.close),selectionStart:o?t:a,selectionEnd:o?n:a}}if(e.selectionStart=s,e.selectionEnd=c,n[0]===`~`&&[r[s-1],r[s],r[c-1],r[c]].includes(`~`))return{text:r.slice(s,c),selectionStart:i,selectionEnd:a};let u=At(i,s,c)+n.length;return{text:n+r.slice(s,c)+n,selectionStart:o?s+n.length:u,selectionEnd:o?c+n.length:u}}var Mt={bold:[`**`,`__`],italic:[`_`,`*`],bullet:[`-`,`*`,`+`]};function Nt(e,t){return Mt[e].indexOf(t)===-1?Mt[e][0]:t}var Pt={bullet:/^[ \t]*([-*+])[ \t]+\S/m,bold:/(\*\*|__)(?=[^\s*_])[^\n]*?[^\s*_]\1/,italic:/(?:^|[^*_\w])([*_])(?=[^\s*_])[^\n*_]*?[^\s*_]\1(?![*_\w])/};function Ft(e){let t={};return Object.keys(Pt).forEach(n=>{let r=Pt[n].exec(e||``);t[n]=r?r[1]:null}),t}function It(e,t={}){if(!e||e.disabled||e.readOnly)return;M(`toggleBold`,`Starting`),Qe(e,`Before`);let n=jt(e,`bold`,Nt(`bold`,t.marker));$e(n),P(e,n),Qe(e,`After`)}function Lt(e,t={}){!e||e.disabled||e.readOnly||P(e,jt(e,`italic`,Nt(`italic`,t.marker)))}function Rt(e){!e||e.disabled||e.readOnly||P(e,jt(e,`strikethrough`,A.strikethrough.prefix))}function zt(e){!e||e.disabled||e.readOnly||P(e,lt(e,j(A.code)))}function Bt(e,t={}){if(!e||e.disabled||e.readOnly)return;let n=e.value.slice(e.selectionStart,e.selectionEnd),r=j(A.link);if(n&&n.match(/^https?:\/\//)&&!t.url?(r.suffix=`](${n})`,r.replaceNext=``):t.url&&(r.suffix=`](${t.url})`,r.replaceNext=``),t.text&&!n){let n=e.selectionStart;e.value=e.value.slice(0,n)+t.text+e.value.slice(n),e.selectionStart=n,e.selectionEnd=n+t.text.length}P(e,lt(e,r))}function Vt(e,t={}){if(!e||e.disabled||e.readOnly)return;let n=j(A.bulletList);n.bulletMarker=Nt(`bullet`,t.marker),gt(e,n)}function Ht(e){!e||e.disabled||e.readOnly||gt(e,j(A.numberedList))}function Ut(e){if(!e||e.disabled||e.readOnly)return;M(`toggleQuote`,`Starting`),Qe(e,`Initial`);let t=j(A.quote),n=ct(e,e=>ut(e,t),{prefix:t.prefix});$e(n),P(e,n),Qe(e,`Final`)}function Wt(e){if(!e||e.disabled||e.readOnly)return;let t=j(A.taskList);P(e,ct(e,e=>ut(e,t),{prefix:t.prefix}))}function F(e,t=1,n=!1){if(!e||e.disabled||e.readOnly)return;(t<1||t>6)&&(t=1),M(`insertHeader`,`============ START ============`),M(`insertHeader`,`Level: ${t}, Toggle: ${n}`),M(`insertHeader`,`Initial cursor: ${e.selectionStart}-${e.selectionEnd}`);let r=j(A[`header${t===1?`1`:t}`]||A.header1);M(`insertHeader`,`Style prefix: "${r.prefix}"`);let i=e.value,a=e.selectionStart,o=e.selectionEnd,s=a;for(;s>0&&i[s-1]!==`
`;)s--;let c=o;for(;c<i.length&&i[c]!==`
`;)c++;let l=i.slice(s,c);M(`insertHeader`,`Current line (before): "${l}"`);let u=l.match(/^(#{1,6})\s*/),d=u?u[1].length:0,f=u?u[0].length:0;M(`insertHeader`,`Existing header check:`),M(`insertHeader`,`  - Match: ${u?`"${u[0]}"`:`none`}`),M(`insertHeader`,`  - Existing level: ${d}`),M(`insertHeader`,`  - Existing prefix length: ${f}`),M(`insertHeader`,`  - Target level: ${t}`);let p=n&&d===t;M(`insertHeader`,`Should toggle OFF: ${p} (toggle=${n}, existingLevel=${d}, level=${t})`);let m=ct(e,e=>{let n=e.value.slice(e.selectionStart,e.selectionEnd);M(`insertHeader`,`Line in operation: "${n}"`);let i=n.replace(/^#{1,6}\s*/,``);M(`insertHeader`,`Cleaned line: "${i}"`);let a;return p?(M(`insertHeader`,`ACTION: Toggling OFF - removing header`),a=i):d>0?(M(`insertHeader`,`ACTION: Replacing H${d} with H${t}`),a=r.prefix+i):(M(`insertHeader`,`ACTION: Adding new header`),a=r.prefix+i),M(`insertHeader`,`New line: "${a}"`),{text:a,selectionStart:e.selectionStart,selectionEnd:e.selectionEnd}},{prefix:r.prefix,adjustSelection:(e,t,n,i)=>{if(M(`insertHeader`,`Adjusting selection:`),M(`insertHeader`,`  - isRemoving param: ${e}`),M(`insertHeader`,`  - shouldToggleOff: ${p}`),M(`insertHeader`,`  - selStart: ${t}, selEnd: ${n}`),M(`insertHeader`,`  - lineStartPos: ${i}`),p){let e=Math.max(t-f,i);return M(`insertHeader`,`  - Removing header, adjusting by -${f}`),{start:e,end:t===n?e:Math.max(n-f,i)}}else if(f>0){let e=r.prefix.length-f;return M(`insertHeader`,`  - Replacing header, adjusting by ${e}`),{start:t+e,end:n+e}}else return M(`insertHeader`,`  - Adding header, adjusting by +${r.prefix.length}`),{start:t+r.prefix.length,end:n+r.prefix.length}}});M(`insertHeader`,`Final result: text="${m.text}", cursor=${m.selectionStart}-${m.selectionEnd}`),M(`insertHeader`,`============ END ============`),P(e,m)}function Gt(e){F(e,1,!0)}function Kt(e){F(e,2,!0)}function qt(e){F(e,3,!0)}function Jt(e){F(e,4,!0)}function Yt(e){F(e,5,!0)}function Xt(e){F(e,6,!0)}function Zt(e){return vt(e)}function Qt(e,t){return yt(e,t)}function $t(e,t={}){bt(e,t)}function en(e,t){if(!e||e.disabled||e.readOnly)return;let n=j(t),r;r=n.multiline&&tt(e.value.slice(e.selectionStart,e.selectionEnd))?ut(e,n):lt(e,n),P(e,r)}var tn={toggleBold:It,toggleItalic:Lt,toggleStrikethrough:Rt,toggleCode:zt,insertLink:Bt,toggleBulletList:Vt,toggleNumberedList:Ht,toggleQuote:Ut,toggleTaskList:Wt,insertHeader:F,toggleH1:Gt,toggleH2:Kt,toggleH3:qt,toggleH4:Jt,toggleH5:Yt,toggleH6:Xt,getActiveFormats:Zt,hasFormat:Qt,expandSelection:$t,applyCustomFormat:en,detectMarkers:Ft,preserveSelection:st,setUndoMethod:et,setDebugMode:Xe,getDebugMode:Ze},nn=`<svg viewBox="0 0 18 18">
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"></path>
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"></path>
</svg>`,rn=`<svg viewBox="0 0 18 18">
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7" x2="13" y1="4" y2="4"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="11" y1="14" y2="14"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="8" x2="10" y1="14" y2="4"></line>
</svg>`,an=`<svg viewBox="0 0 18 18">
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13,4H8.5A2.5,2.5,0,0,0,6.2,7.5"></path>
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5,9a2.5,2.5,0,0,1,0,5H5"></path>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="15" y1="9" y2="9"></line>
</svg>`,on=`<svg viewBox="0 0 18 18">
  <path fill="currentColor" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"></path>
</svg>`,sn=`<svg viewBox="0 0 18 18">
  <path fill="currentColor" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"></path>
</svg>`,cn=`<svg viewBox="0 0 18 18">
  <path fill="currentColor" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"></path>
</svg>`,ln=`<svg viewBox="0 0 18 18">
  <path fill="currentColor" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"></path>
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M14.9,14.05V7.8L12.2,12.1h3.8"></path>
</svg>`,un=`<svg viewBox="0 0 18 18">
  <path fill="currentColor" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"></path>
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M15.7,7.8H13.1l-.4,2.8a1.95,1.95,0,1,1-.4,2.6"></path>
</svg>`,dn=`<svg viewBox="0 0 18 18">
  <path fill="currentColor" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"></path>
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M15.5,7.8c-2,.2-3.3,1.9-3.3,4.4a1.9,1.9,0,1,0,3.8,0,1.9,1.9,0,1,0-3.8,0"></path>
</svg>`,fn=`<svg viewBox="0 0 18 18">
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7" x2="11" y1="7" y2="11"></line>
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"></path>
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"></path>
</svg>`,pn=`<svg viewBox="0 0 18 18">
  <polyline stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="5 7 3 9 5 11"></polyline>
  <polyline stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="13 7 15 9 13 11"></polyline>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="10" x2="8" y1="5" y2="13"></line>
</svg>`,mn=`<svg viewBox="0 0 18 18">
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6" x2="15" y1="4" y2="4"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6" x2="15" y1="9" y2="9"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6" x2="15" y1="14" y2="14"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="3" y1="4" y2="4"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="3" y1="9" y2="9"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="3" y1="14" y2="14"></line>
</svg>`,hn=`<svg viewBox="0 0 18 18">
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7" x2="15" y1="4" y2="4"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7" x2="15" y1="9" y2="9"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7" x2="15" y1="14" y2="14"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" x1="2.5" x2="4.5" y1="5.5" y2="5.5"></line>
  <path fill="currentColor" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"></path>
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"></path>
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"></path>
</svg>`,gn=`<svg viewBox="0 0 18 18">
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="15" y1="4" y2="4"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9" x2="15" y1="9" y2="9"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="15" y1="14" y2="14"></line>
  <polyline stroke="currentColor" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" points="3 7 3 11 5 9 3 7"></polyline>
</svg>`,_n=`<svg viewBox="0 0 18 18">
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="15" y1="4" y2="4"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9" x2="15" y1="9" y2="9"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="15" y1="14" y2="14"></line>
  <polyline stroke="currentColor" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" points="5 7 5 11 3 9 5 7"></polyline>
</svg>`,vn=`<svg viewBox="2 2 20 20">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"></path>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"></path>
</svg>`,yn=`<svg viewBox="0 0 18 18">
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="8" x2="16" y1="4" y2="4"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="8" x2="16" y1="9" y2="9"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="8" x2="16" y1="14" y2="14"></line>
  <rect stroke="currentColor" fill="none" stroke-width="1.5" x="2" y="3" width="3" height="3" rx="0.5"></rect>
  <rect stroke="currentColor" fill="none" stroke-width="1.5" x="2" y="13" width="3" height="3" rx="0.5"></rect>
  <polyline stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" points="2.65 9.5 3.5 10.5 5 8.5"></polyline>
</svg>`,bn=`<svg viewBox="0 0 18 18">
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.25 12.375v1.688A1.688 1.688 0 0 0 3.938 15.75h10.124a1.688 1.688 0 0 0 1.688-1.688V12.375"></path>
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.063 6.188L9 2.25l3.938 3.938"></path>
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 2.25v10.125"></path>
</svg>`,xn=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="none"></path>
  <circle cx="12" cy="12" r="3" fill="none"></circle>
</svg>`;function Sn(e,t){let n=e.options||{};return t===`italic`&&typeof n.italicUsesAsterisk==`boolean`?n.italicUsesAsterisk?`*`:`_`:t===`bold`&&typeof n.boldUsesUnderscore==`boolean`?n.boldUsesUnderscore?`__`:`**`:t===`bullet`&&n.bulletMarker?n.bulletMarker:Ft(e.textarea.value)[t]||void 0}var I={bold:{name:`bold`,actionId:`toggleBold`,icon:nn,title:`Bold`,shortcut:`Mod+B`,isActive:({activeFormats:e})=>e.includes(`bold`),action:({editor:e})=>{It(e.textarea,{marker:Sn(e,`bold`)}),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},italic:{name:`italic`,actionId:`toggleItalic`,icon:rn,title:`Italic`,shortcut:`Mod+I`,isActive:({activeFormats:e})=>e.includes(`italic`),action:({editor:e})=>{Lt(e.textarea,{marker:Sn(e,`italic`)}),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},strikethrough:{name:`strikethrough`,actionId:`toggleStrikethrough`,icon:an,title:`Strikethrough`,isActive:({activeFormats:e})=>e.includes(`strikethrough`),action:({editor:e})=>{Rt(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},code:{name:`code`,actionId:`toggleCode`,icon:pn,title:`Inline Code`,shortcut:`Mod+E`,isActive:()=>!1,action:({editor:e})=>{zt(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},separator:{name:`separator`},link:{name:`link`,actionId:`insertLink`,icon:fn,title:`Insert Link`,shortcut:`Mod+K`,action:({editor:e})=>{Bt(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},h1:{name:`h1`,actionId:`toggleH1`,icon:on,title:`Heading 1`,shortcut:`Mod+Alt+1`,isActive:({activeFormats:e})=>e.includes(`header`),action:({editor:e})=>{Gt(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},h2:{name:`h2`,actionId:`toggleH2`,icon:sn,title:`Heading 2`,shortcut:`Mod+Alt+2`,isActive:({activeFormats:e})=>e.includes(`header-2`),action:({editor:e})=>{Kt(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},h3:{name:`h3`,actionId:`toggleH3`,icon:cn,title:`Heading 3`,shortcut:`Mod+Alt+3`,isActive:({activeFormats:e})=>e.includes(`header-3`),action:({editor:e})=>{qt(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},h4:{name:`h4`,actionId:`toggleH4`,icon:ln,title:`Heading 4`,isActive:({activeFormats:e})=>e.includes(`header-4`),action:({editor:e})=>{Jt(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},h5:{name:`h5`,actionId:`toggleH5`,icon:un,title:`Heading 5`,isActive:({activeFormats:e})=>e.includes(`header-5`),action:({editor:e})=>{Yt(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},h6:{name:`h6`,actionId:`toggleH6`,icon:dn,title:`Heading 6`,isActive:({activeFormats:e})=>e.includes(`header-6`),action:({editor:e})=>{Xt(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},bulletList:{name:`bulletList`,actionId:`toggleBulletList`,icon:mn,title:`Bullet List`,shortcut:`Mod+Shift+8`,isActive:({activeFormats:e})=>e.includes(`bullet-list`),action:({editor:e})=>{Vt(e.textarea,{marker:Sn(e,`bullet`)}),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},orderedList:{name:`orderedList`,actionId:`toggleNumberedList`,icon:hn,title:`Numbered List`,shortcut:`Mod+Shift+7`,isActive:({activeFormats:e})=>e.includes(`numbered-list`),action:({editor:e})=>{Ht(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},taskList:{name:`taskList`,actionId:`toggleTaskList`,icon:yn,title:`Task List`,shortcut:`Mod+Shift+9`,isActive:({activeFormats:e})=>e.includes(`task-list`),action:({editor:e})=>{Wt&&(Wt(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0})))}},outdent:{name:`outdent`,actionId:`outdent`,icon:_n,title:`Outdent`,shortcut:`Mod+[`,action:({editor:e})=>{e.outdentSelection()}},indent:{name:`indent`,actionId:`indent`,icon:gn,title:`Indent`,shortcut:`Mod+]`,action:({editor:e})=>{e.indentSelection()}},quote:{name:`quote`,actionId:`toggleQuote`,icon:vn,title:`Quote`,shortcut:`Mod+Shift+.`,isActive:({activeFormats:e})=>e.includes(`quote`),action:({editor:e})=>{Ut(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},upload:{name:`upload`,actionId:`uploadFile`,icon:bn,title:`Upload File`,action:({editor:e})=>{if(!e.options.fileUpload?.enabled)return;let t=document.createElement(`input`);t.type=`file`,t.multiple=!0,e.options.fileUpload.mimeTypes?.length>0&&(t.accept=e.options.fileUpload.mimeTypes.join(`,`)),t.onchange=()=>{if(!t.files?.length)return;let n=new DataTransfer;for(let e of t.files)n.items.add(e);e._handleDataTransfer(n)},t.click()}},viewMode:{name:`viewMode`,icon:xn,title:`View mode`}},Cn=[I.bold,I.italic,I.code,I.separator,I.link,I.separator,I.h1,I.h2,I.h3,I.separator,I.bulletList,I.orderedList,I.taskList,I.separator,I.outdent,I.indent,I.separator,I.quote,I.separator,I.viewMode],wn=e=>typeof e==`string`&&e.trim()!==``,Tn=e=>typeof e==`object`&&!!e,En={};Object.keys(I).forEach(e=>{I[e].title&&(En[e]=I[e].title)});var Dn=Object.freeze({toolbar:`Formatting toolbar`,viewModes:Object.freeze({normal:`Normal Edit`,plain:`Plain Textarea`,preview:`Preview Mode`}),buttons:Object.freeze(En)});function On(e){let t=e||{},n=Tn(t.viewModes)?t.viewModes:{},r=Tn(t.buttons)?t.buttons:{},i={};Object.keys(Dn.viewModes).forEach(e=>{i[e]=wn(n[e])?n[e]:Dn.viewModes[e]});let a=Object.create(null);return Object.keys(r).forEach(e=>{wn(r[e])&&(a[e]=r[e])}),{toolbar:wn(t.toolbar)?t.toolbar:Dn.toolbar,viewModes:i,buttons:a}}var kn=class{constructor(e,t={}){this.editor=e,this.container=null,this.buttons={},this.currentItemIndex=0,this.handleDocumentClick=null,this.activeDropdown=null,this.activeDropdownButton=null,this.toolbarButtons=t.toolbarButtons||[],this.labels=t.labels||On()}create(){this.container=document.createElement(`div`),this.container.className=`overtype-toolbar`,this.editor._markChrome(this.container),this.container.id=this.getInstanceElementId(`toolbar`),this.container.setAttribute(`role`,`toolbar`),this.container.setAttribute(`aria-label`,this.labels.toolbar),this.container.setAttribute(`aria-controls`,this.editor.textarea.id),this.toolbarButtons.forEach(e=>{if(e.name===`separator`){let e=this.createSeparator();this.container.appendChild(e)}else{let t=this.createButton(e);this.buttons[e.name]=t,this.container.appendChild(t)}}),this.setupRovingTabIndex(),this.updateButtonStates(),this.editor.container.insertBefore(this.container,this.editor.wrapper)}getInstanceElementId(e){return`overtype-${this.editor.instanceId}-${e}`}setupRovingTabIndex(){this.getToolbarItems().length!==0&&(this.currentItemIndex=this.getValidItemIndex(this.currentItemIndex),this.updateTabIndexes(),this.container.addEventListener(`keydown`,e=>{this.onToolbarKeydown(e)}),this.container.addEventListener(`focusin`,e=>{this.onToolbarFocusin(e)}))}getToolbarItems(){return this.container?Array.from(this.container.querySelectorAll(`.overtype-toolbar-button`)):[]}onToolbarKeydown(e){let t=this.getToolbarItems();if(t.includes(e.target))switch(e.key){case`ArrowRight`:e.preventDefault(),this.focusItem(this.currentItemIndex+1);break;case`ArrowLeft`:e.preventDefault(),this.focusItem(this.currentItemIndex-1);break;case`Home`:e.preventDefault(),this.focusItem(0);break;case`End`:e.preventDefault(),this.focusItem(t.length-1);break}}onToolbarFocusin(e){let t=this.getToolbarItems().indexOf(e.target);t!==-1&&(this.currentItemIndex=t,this.updateTabIndexes())}focusItem(e){let t=this.getToolbarItems();t.length!==0&&(this.currentItemIndex=this.getValidItemIndex(e,t),this.updateTabIndexes(),t[this.currentItemIndex].focus())}getValidItemIndex(e,t=this.getToolbarItems()){let n=t.length;return n===0?0:e<0?n-1:e>=n?0:e}updateTabIndexes(){this.getToolbarItems().forEach((e,t)=>{e.tabIndex=t===this.currentItemIndex?0:-1})}createSeparator(){let e=document.createElement(`div`);return e.className=`overtype-toolbar-separator`,e.setAttribute(`role`,`separator`),e}getButtonTitle(e){return this.labels.buttons[e.name]||e.title||``}createButton(e){let t=document.createElement(`button`);t.className=`overtype-toolbar-button`,t.type=`button`,t.setAttribute(`data-button`,e.name);let n=this.getButtonTitle(e),r=e.shortcut?`${n} (${Pe(e.shortcut)})`.trim():n;return t.title=r,t.setAttribute(`aria-label`,r||e.name),t.innerHTML=this.sanitizeSVG(e.icon||``),this.hideIconsFromAssistiveTech(t),e.name===`viewMode`?(t.classList.add(`has-dropdown`),t.dataset.dropdown=`true`,t.setAttribute(`aria-haspopup`,`menu`),t.setAttribute(`aria-expanded`,`false`),t._clickHandler=e=>{e.preventDefault(),this.toggleViewModeDropdown(t)},t._keydownHandler=e=>{if(![`ArrowDown`,`ArrowUp`,`Enter`,` `].includes(e.key))return;e.preventDefault();let n=e.key===`ArrowUp`?`last`:`current`;this.openViewModeDropdown(t,n)},t.addEventListener(`click`,t._clickHandler),t.addEventListener(`keydown`,t._keydownHandler),t):(t._clickHandler=t=>{t.preventDefault();let n=e.actionId||e.name;this.editor.performAction(n,t)},t.addEventListener(`click`,t._clickHandler),t)}async handleAction(e){if(e&&typeof e==`object`&&typeof e.action==`function`){this.editor.textarea.focus();try{return await e.action({editor:this.editor,getValue:()=>this.editor.getValue(),setValue:e=>this.editor.setValue(e),event:null}),!0}catch(t){return console.error(`Action "${e.name}" error:`,t),this.editor.wrapper.dispatchEvent(new CustomEvent(`button-error`,{detail:{buttonName:e.name,error:t}})),!1}}return typeof e==`string`&&this.editor.performAction(e,null)}sanitizeSVG(e){return typeof e==`string`?e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,``).replace(/\son\w+\s*=\s*["'][^"']*["']/gi,``).replace(/\son\w+\s*=\s*[^\s>]*/gi,``):``}hideIconsFromAssistiveTech(e){e.querySelectorAll(`svg`).forEach(e=>{e.setAttribute(`aria-hidden`,`true`),e.setAttribute(`focusable`,`false`)})}toggleViewModeDropdown(e){if(this.activeDropdown){this.closeViewModeDropdown(e);return}this.openViewModeDropdown(e)}openViewModeDropdown(e,t=null){this.closeViewModeDropdown(e),e.classList.add(`dropdown-active`);let n=this.createViewModeDropdown(e),{direction:r}=window.getComputedStyle(this.editor.container);r&&n.setAttribute(`dir`,r);let i=e.getBoundingClientRect();n.style.position=`absolute`,n.style.top=`${i.bottom+5}px`,n.style.left=`${i.left}px`,document.body.appendChild(n),this.activeDropdown=n,this.activeDropdownButton=e,e.setAttribute(`aria-controls`,n.id),e.setAttribute(`aria-expanded`,`true`),this.handleDocumentClick=t=>{!n.contains(t.target)&&!e.contains(t.target)&&this.closeViewModeDropdown(e)},setTimeout(()=>{document.addEventListener(`click`,this.handleDocumentClick)},0),t&&this.focusViewModeMenuItem(n,t)}closeViewModeDropdown(e=this.activeDropdownButton,t=!1){this.activeDropdown&&=(this.activeDropdown.remove(),null),e&&(e.classList.remove(`dropdown-active`),e.setAttribute(`aria-expanded`,`false`)),this.handleDocumentClick&&=(document.removeEventListener(`click`,this.handleDocumentClick),null),this.activeDropdownButton=null,t&&e&&e.focus()}createViewModeDropdown(e){let t=document.createElement(`div`);t.className=`overtype-dropdown-menu`,this.editor._markChrome(t),t.id=this.getInstanceElementId(`toolbar-view-mode-menu`),t.setAttribute(`role`,`menu`);let n=this.toolbarButtons.find(e=>e.name===`viewMode`);t.setAttribute(`aria-label`,n&&this.getButtonTitle(n)||Dn.buttons.viewMode),t.addEventListener(`keydown`,t=>{this.onViewModeMenuKeydown(t,e)});let r=[{id:`normal`,label:this.labels.viewModes.normal,icon:`✓`},{id:`plain`,label:this.labels.viewModes.plain,icon:`✓`},{id:`preview`,label:this.labels.viewModes.preview,icon:`✓`}],i=this.editor.container.dataset.mode||`normal`;return r.forEach(n=>{let r=document.createElement(`button`);if(r.className=`overtype-dropdown-item`,r.type=`button`,r.tabIndex=-1,r.setAttribute(`role`,`menuitemradio`),r.setAttribute(`aria-checked`,String(n.id===i)),r.textContent=n.label,n.id===i){r.classList.add(`active`);let e=document.createElement(`span`);e.className=`overtype-dropdown-icon`,e.setAttribute(`aria-hidden`,`true`),e.textContent=n.icon,r.prepend(e)}r.addEventListener(`click`,t=>{switch(t.preventDefault(),n.id){case`plain`:this.editor.showPlainTextarea();break;case`preview`:this.editor.showPreviewMode();break;default:this.editor.showNormalEditMode();break}this.closeViewModeDropdown(e,!0)}),t.appendChild(r)}),t}onViewModeMenuKeydown(e,t){let n=this.getViewModeMenuItems().indexOf(e.target);if(n!==-1)switch(e.key){case`ArrowDown`:e.preventDefault(),this.focusViewModeMenuItem(this.activeDropdown,n+1);break;case`ArrowUp`:e.preventDefault(),this.focusViewModeMenuItem(this.activeDropdown,n-1);break;case`Home`:e.preventDefault(),this.focusViewModeMenuItem(this.activeDropdown,`first`);break;case`End`:e.preventDefault(),this.focusViewModeMenuItem(this.activeDropdown,`last`);break;case`Escape`:e.preventDefault(),this.closeViewModeDropdown(t,!0);break}}focusViewModeMenuItem(e,t){let n=this.getViewModeMenuItems(e);if(n.length===0)return;let r=t;t===`first`?r=0:t===`last`?r=n.length-1:t===`current`&&(r=n.findIndex(e=>e.getAttribute(`aria-checked`)===`true`)),r<0&&(r=n.length-1),r>=n.length&&(r=0),n[r].focus()}getViewModeMenuItems(e=this.activeDropdown){return e?Array.from(e.querySelectorAll(`[role="menuitemradio"]`)):[]}updateButtonStates(){try{let e=Zt?.(this.editor.textarea,this.editor.textarea.selectionStart)||[];Object.entries(this.buttons).forEach(([t,n])=>{if(t===`viewMode`)return;let r=this.toolbarButtons.find(e=>e.name===t);if(!r?.isActive)return;let i=!!r.isActive({editor:this.editor,activeFormats:e});n.classList.toggle(`active`,i),n.setAttribute(`aria-pressed`,i.toString())})}catch{}}show(){this.container&&this.container.classList.remove(`overtype-toolbar-hidden`)}hide(){this.container&&this.container.classList.add(`overtype-toolbar-hidden`)}isHidden(){return!!(this.container&&this.container.classList.contains(`overtype-toolbar-hidden`))}destroy(){this.container&&(this.activeDropdown?this.closeViewModeDropdown():this.handleDocumentClick&&=(document.removeEventListener(`click`,this.handleDocumentClick),null),Object.values(this.buttons).forEach(e=>{e._clickHandler&&(e.removeEventListener(`click`,e._clickHandler),delete e._clickHandler),e._keydownHandler&&(e.removeEventListener(`keydown`,e._keydownHandler),delete e._keydownHandler)}),this.container.remove(),this.container=null,this.buttons={})}},An=Math.min,L=Math.max,jn=Math.round,R=e=>({x:e,y:e}),Mn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},Nn={start:`end`,end:`start`};function Pn(e,t,n){return L(e,An(t,n))}function Fn(e,t){return typeof e==`function`?e(t):e}function z(e){return e.split(`-`)[0]}function In(e){return e.split(`-`)[1]}function Ln(e){return e===`x`?`y`:`x`}function Rn(e){return e===`y`?`height`:`width`}var zn=new Set([`top`,`bottom`]);function B(e){return zn.has(z(e))?`y`:`x`}function Bn(e){return Ln(B(e))}function Vn(e,t,n){n===void 0&&(n=!1);let r=In(e),i=Bn(e),a=Rn(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Xn(o)),[o,Xn(o)]}function Hn(e){let t=Xn(e);return[Un(e),t,Un(t)]}function Un(e){return e.replace(/start|end/g,e=>Nn[e])}var Wn=[`left`,`right`],Gn=[`right`,`left`],Kn=[`top`,`bottom`],qn=[`bottom`,`top`];function Jn(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Gn:Wn:t?Wn:Gn;case`left`:case`right`:return t?Kn:qn;default:return[]}}function Yn(e,t,n,r){let i=In(e),a=Jn(z(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Un)))),a}function Xn(e){return e.replace(/left|right|bottom|top/g,e=>Mn[e])}function Zn(e){return{top:0,right:0,bottom:0,left:0,...e}}function Qn(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Zn(e)}function $n(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function er(e,t,n){let{reference:r,floating:i}=e,a=B(t),o=Bn(t),s=Rn(o),c=z(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(In(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}async function tr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Fn(t,e),p=Qn(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=$n(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=$n(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var nr=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=er(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:v,reset:y}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:{...o,detectOverflow:o.detectOverflow??tr},elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...v}},y&&m<=50&&(m++,typeof y==`object`&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:u,y:d}=er(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}},rr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Fn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=z(r),_=B(o),v=z(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),ee=d||(v||!m?[Xn(o)]:Hn(o)),b=p!==`none`;!d&&b&&ee.push(...Yn(o,m,p,y));let x=[o,...ee],S=await s.detectOverflow(t,h),C=[],w=i.flip?.overflows||[];if(l&&C.push(S[g]),u){let e=Vn(r,a,y);C.push(S[e[0]],S[e[1]])}if(w=[...w,{placement:r,overflows:C}],!C.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=x[e];if(t&&(u!==`alignment`||_===B(t)||w.every(e=>B(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:w},reset:{placement:t}};let n=w.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=w.filter(e=>{if(b){let t=B(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},ir=new Set([`left`,`top`]);async function ar(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=z(n),s=In(n),c=B(n)===`y`,l=ir.has(o)?-1:1,u=a&&c?-1:1,d=Fn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var or=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await ar(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},sr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Fn(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=B(z(i)),p=Ln(f),m=u[p],h=u[f];if(o){let e=p===`y`?`top`:`left`,t=p===`y`?`bottom`:`right`,n=m+d[e],r=m-d[t];m=Pn(n,m,r)}if(s){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=h+d[e],r=h-d[t];h=Pn(n,h,r)}let g=c.fn({...t,[p]:m,[f]:h});return{...g,data:{x:g.x-n,y:g.y-r,enabled:{[p]:o,[f]:s}}}}}};function cr(){return typeof window<`u`}function V(e){return lr(e)?(e.nodeName||``).toLowerCase():`#document`}function H(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function U(e){return((lr(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function lr(e){return cr()?e instanceof Node||e instanceof H(e).Node:!1}function W(e){return cr()?e instanceof Element||e instanceof H(e).Element:!1}function G(e){return cr()?e instanceof HTMLElement||e instanceof H(e).HTMLElement:!1}function ur(e){return!cr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof H(e).ShadowRoot}var dr=new Set([`inline`,`contents`]);function fr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=q(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!dr.has(i)}var pr=new Set([`table`,`td`,`th`]);function mr(e){return pr.has(V(e))}var hr=[`:popover-open`,`:modal`];function gr(e){return hr.some(t=>{try{return e.matches(t)}catch{return!1}})}var _r=[`transform`,`translate`,`scale`,`rotate`,`perspective`],vr=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],yr=[`paint`,`layout`,`strict`,`content`];function br(e){let t=Sr(),n=W(e)?q(e):e;return _r.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||vr.some(e=>(n.willChange||``).includes(e))||yr.some(e=>(n.contain||``).includes(e))}function xr(e){let t=J(e);for(;G(t)&&!K(t);){if(br(t))return t;if(gr(t))return null;t=J(t)}return null}function Sr(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}var Cr=new Set([`html`,`body`,`#document`]);function K(e){return Cr.has(V(e))}function q(e){return H(e).getComputedStyle(e)}function wr(e){return W(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function J(e){if(V(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||ur(e)&&e.host||U(e);return ur(t)?t.host:t}function Tr(e){let t=J(e);return K(t)?e.ownerDocument?e.ownerDocument.body:e.body:G(t)&&fr(t)?t:Tr(t)}function Er(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Tr(e),i=r===e.ownerDocument?.body,a=H(r);if(i){let e=Dr(a);return t.concat(a,a.visualViewport||[],fr(r)?r:[],e&&n?Er(e):[])}return t.concat(r,Er(r,[],n))}function Dr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Or(e){let t=q(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=G(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=jn(n)!==a||jn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function kr(e){return W(e)?e:e.contextElement}function Y(e){let t=kr(e);if(!G(t))return R(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Or(t),o=(a?jn(n.width):n.width)/r,s=(a?jn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var Ar=R(0);function jr(e){let t=H(e);return!Sr()||!t.visualViewport?Ar:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Mr(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==H(e)?!1:t}function Nr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=kr(e),o=R(1);t&&(r?W(r)&&(o=Y(r)):o=Y(e));let s=Mr(a,n,r)?jr(a):R(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=H(a),t=r&&W(r)?H(r):r,n=e,i=Dr(n);for(;i&&r&&t!==n;){let e=Y(i),t=i.getBoundingClientRect(),r=q(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=H(i),i=Dr(n)}}return $n({width:u,height:d,x:c,y:l})}function Pr(e,t){let n=wr(e).scrollLeft;return t?t.left+n:Nr(U(e)).left+n}function Fr(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Pr(e,n),y:n.top+t.scrollTop}}function Ir(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=U(r),s=t?gr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=R(1),u=R(0),d=G(r);if((d||!d&&!a)&&((V(r)!==`body`||fr(o))&&(c=wr(r)),G(r))){let e=Nr(r);l=Y(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Fr(o,c):R(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Lr(e){return Array.from(e.getClientRects())}function Rr(e){let t=U(e),n=wr(e),r=e.ownerDocument.body,i=L(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=L(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+Pr(e),s=-n.scrollTop;return q(r).direction===`rtl`&&(o+=L(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}var zr=25;function Br(e,t){let n=H(e),r=U(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Sr();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=Pr(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=zr&&(a-=o)}else l<=zr&&(a+=l);return{width:a,height:o,x:s,y:c}}var Vr=new Set([`absolute`,`fixed`]);function Hr(e,t){let n=Nr(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=G(e)?Y(e):R(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function Ur(e,t,n){let r;if(t===`viewport`)r=Br(e,n);else if(t===`document`)r=Rr(U(e));else if(W(t))r=Hr(t,n);else{let n=jr(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return $n(r)}function Wr(e,t){let n=J(e);return n===t||!W(n)||K(n)?!1:q(n).position===`fixed`||Wr(n,t)}function Gr(e,t){let n=t.get(e);if(n)return n;let r=Er(e,[],!1).filter(e=>W(e)&&V(e)!==`body`),i=null,a=q(e).position===`fixed`,o=a?J(e):e;for(;W(o)&&!K(o);){let t=q(o),n=br(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&Vr.has(i.position)||fr(o)&&!n&&Wr(e,o))?r=r.filter(e=>e!==o):i=t,o=J(o)}return t.set(e,r),r}function Kr(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?gr(t)?[]:Gr(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=Ur(t,n,i);return e.top=L(r.top,e.top),e.right=An(r.right,e.right),e.bottom=An(r.bottom,e.bottom),e.left=L(r.left,e.left),e},Ur(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function qr(e){let{width:t,height:n}=Or(e);return{width:t,height:n}}function Jr(e,t,n){let r=G(t),i=U(t),a=n===`fixed`,o=Nr(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=R(0);function l(){c.x=Pr(i)}if(r||!r&&!a)if((V(t)!==`body`||fr(i))&&(s=wr(t)),r){let e=Nr(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?Fr(i,s):R(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function Yr(e){return q(e).position===`static`}function Xr(e,t){if(!G(e)||q(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return U(e)===n&&(n=n.ownerDocument.body),n}function Zr(e,t){let n=H(e);if(gr(e))return n;if(!G(e)){let t=J(e);for(;t&&!K(t);){if(W(t)&&!Yr(t))return t;t=J(t)}return n}let r=Xr(e,t);for(;r&&mr(r)&&Yr(r);)r=Xr(r,t);return r&&K(r)&&Yr(r)&&!br(r)?n:r||xr(e)||n}var Qr=async function(e){let t=this.getOffsetParent||Zr,n=this.getDimensions,r=await n(e.floating);return{reference:Jr(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function $r(e){return q(e).direction===`rtl`}var ei={convertOffsetParentRelativeRectToViewportRelativeRect:Ir,getDocumentElement:U,getClippingRect:Kr,getOffsetParent:Zr,getElementRects:Qr,getClientRects:Lr,getDimensions:qr,getScale:Y,isElement:W,isRTL:$r},ti=or,ni=sr,ri=rr,ii=(e,t,n)=>{let r=new Map,i={platform:ei,...n},a={...i.platform,_c:r};return nr(e,t,{...i,platform:a})},ai=class{constructor(e){this.editor=e,this.tooltip=null,this.currentLink=null,this.hideTimeout=null,this.visibilityChangeHandler=null,this.isTooltipHovered=!1,this.linkCacheText=null,this.linkCache=[],this.warnedPatterns=new Set,this.init()}init(){this.createTooltip(),this.textareaListeners={selectionchange:()=>this.checkCursorPosition(),keyup:e=>{(e.key.includes(`Arrow`)||e.key===`Home`||e.key===`End`)&&this.checkCursorPosition()},input:()=>this.hide(),scroll:()=>{this.currentLink&&this.positionTooltip(this.currentLink)},blur:()=>{this.isTooltipHovered||this.hide()}};for(let[e,t]of Object.entries(this.textareaListeners))this.editor.textarea.addEventListener(e,t);this.visibilityChangeHandler=()=>{document.hidden&&this.hide()},document.addEventListener(`visibilitychange`,this.visibilityChangeHandler),this.tooltip.addEventListener(`mouseenter`,()=>{this.isTooltipHovered=!0,this.cancelHide()}),this.tooltip.addEventListener(`mouseleave`,()=>{this.isTooltipHovered=!1,this.scheduleHide()})}createTooltip(){this.tooltip=document.createElement(`div`),this.tooltip.className=`overtype-link-tooltip`,this.editor._markChrome(this.tooltip),this.tooltip.innerHTML=`
      <span style="display: flex; align-items: center; gap: 6px;">
        <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" style="flex-shrink: 0;">
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
        </svg>
        <span class="overtype-link-tooltip-url"></span>
      </span>
    `,this.tooltip.addEventListener(`click`,e=>{if(e.preventDefault(),e.stopPropagation(),this.currentLink){if(this.currentLink.action){try{this.currentLink.action.onClick(this.currentLink.match,this.editor)}catch(e){console.error(`linkActions onClick threw:`,e)}this.hide();return}let e=E.sanitizeUrl(this.currentLink.url);e!==`#`&&window.open(e,`_blank`),this.hide()}}),this.editor.container.appendChild(this.tooltip)}checkCursorPosition(){let e=this.editor.textarea.selectionStart,t=this.editor.textarea.value,n=this.findLinkAtPosition(t,e)||this.findActionAtPosition(t,e);n?(!this.currentLink||this.currentLink.url!==n.url||this.currentLink.index!==n.index)&&this.show(n):this.scheduleHide()}findLinkAtPosition(e,t){if(this.editor.options.showActiveLineRaw)return null;let n=!E.resolveDisabled(this.editor.options.disable).has(`code`);(this.linkCacheText!==e||this.linkCacheFences!==n)&&(this.linkCacheText=e,this.linkCacheFences=n,this.linkCache=E.findRenderableLinks(e,{fences:n}));let r=this.linkCache;for(let[e,n]of r.entries()){let r=n.start,i=n.end;if(t>=r&&t<=i)return{text:n.text.raw,url:this.transformUrl(n.destination.value),index:e,start:r,end:i}}return null}findActionAtPosition(e,t){let n=this.editor.options.linkActions;if(!Array.isArray(n)||n.length===0)return null;let r=e.lastIndexOf(`
`,t-1)+1,i=e.indexOf(`
`,t);i===-1&&(i=e.length);let a=e.slice(r,i);for(let e of n){let n=e&&e.pattern;if(!(n instanceof RegExp)||!n.global){n&&typeof n==`object`&&!this.warnedPatterns.has(n)&&(this.warnedPatterns.add(n),console.warn(`linkActions patterns need the global (g) flag and are ignored without it.`));continue}for(let i of a.matchAll(n)){let n=r+i.index,a=n+i[0].length;if(t<n||t>a)continue;let o=this.rangeForOffsets(n,a);if(o){let e=o.startContainer,t=e.nodeType===1?e:e.parentElement;if(t&&t.closest&&t.closest(`code, pre, .code-block, .code-fence`))continue}let s;try{s=e.label(i)}catch(e){console.error(`linkActions label threw:`,e);continue}if(s)return{url:s,index:-1-n,start:n,end:a,match:i,action:e}}}return null}transformUrl(e){let t=this.editor.options.transformLinkUrl;if(typeof t!=`function`)return e;try{let n=t(e);return typeof n==`string`?n:e}catch(t){return console.warn(`transformLinkUrl threw:`,t),e}}async show(e){this.currentLink=e,this.cancelHide();let t=this.tooltip.querySelector(`.overtype-link-tooltip-url`);t.textContent=e.url,await this.positionTooltip(e),this.currentLink===e&&this.tooltip.classList.add(`visible`)}async positionTooltip(e){let t;if(e.action){let n=this.rangeForOffsets(e.start,e.end);if(!n)return;let r=n.getBoundingClientRect();if(r.width===0||r.height===0)return;t={getBoundingClientRect:()=>n.getBoundingClientRect()}}else{if(t=this.findAnchorElement(e.index),!t)return;let n=t.getBoundingClientRect();if(n.width===0||n.height===0)return}try{let{x:e,y:n}=await ii(t,this.tooltip,{strategy:`fixed`,placement:`bottom`,middleware:[ti(8),ni({padding:8}),ri()]});Object.assign(this.tooltip.style,{left:`${e}px`,top:`${n}px`,position:`fixed`})}catch(e){console.warn(`Floating UI positioning failed:`,e)}}findAnchorElement(e){return this.editor.preview.querySelector(`a[style*="--link-${e}"]`)}rangeForOffsets(e,t){if(!this.editor.preview)return null;let n=this.editor.textarea.value.slice(0,e),r=n.split(`
`).length-1,i=n.lastIndexOf(`
`)+1,a=e-i,o=t-i;if(o<a)return null;let s=this.findPreviewLineElement(r);if(!s)return null;let c=s.offset+a,l=s.offset+o,u=document.createTreeWalker(s.element,window.NodeFilter.SHOW_TEXT),d=0,f=null,p=0,m=null,h=0,g;for(;g=u.nextNode();){let e=g.nodeValue.length;if(f===null&&c>=d&&c<=d+e&&(f=g,p=c-d),m===null&&l>=d&&l<=d+e&&(m=g,h=l-d),f!==null&&m!==null)break;d+=e}if(f===null||m===null)return null;let _=document.createRange();return _.setStart(f,p),_.setEnd(m,h),typeof _.getBoundingClientRect==`function`?_:null}findPreviewLineElement(e){let t=this.editor.preview;if(!t)return null;let n=0;for(let r of t.children)if(r.tagName===`PRE`){let t=(r.textContent||``).split(`
`);if(e<n+t.length){let i=0;for(let r=0;r<e-n;r++)i+=t[r].length+1;return{element:r,offset:i}}n+=t.length}else if(r.tagName===`UL`||r.tagName===`OL`){let t=r.children;if(e<n+t.length)return{element:t[e-n],offset:0};n+=t.length}else{if(e===n)return{element:r,offset:0};n++}return null}hide(){this.tooltip.classList.remove(`visible`),this.currentLink=null,this.isTooltipHovered=!1}scheduleHide(){this.cancelHide(),this.hideTimeout=setTimeout(()=>this.hide(),300)}cancelHide(){this.hideTimeout&&=(clearTimeout(this.hideTimeout),null)}destroy(){if(this.cancelHide(),this.textareaListeners){for(let[e,t]of Object.entries(this.textareaListeners))this.editor.textarea.removeEventListener(e,t);this.textareaListeners=null}this.visibilityChangeHandler&&=(document.removeEventListener(`visibilitychange`,this.visibilityChangeHandler),null),this.tooltip&&this.tooltip.parentNode&&this.tooltip.parentNode.removeChild(this.tooltip),this.tooltip=null,this.currentLink=null,this.isTooltipHovered=!1}},oi;function si(){if(oi!==void 0)return oi;if(oi=!1,typeof navigator<`u`){let e=navigator.userAgent||``;oi=/^((?!chrome|android|crios|fxios|edg|opr).)*safari/i.test(e)||/iPad|iPhone|iPod/.test(e)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1&&/Safari/.test(e)}return oi}function ci(e){let t={};return(e||[]).forEach(e=>{if(!e||e.name===`separator`)return;let n=e.actionId||e.name;e.action&&(t[n]=e.action)}),t}function li(e){let t=e||Cn;return Array.isArray(t)?t.map(e=>({name:e?.name||null,actionId:e?.actionId||e?.name||null,icon:e?.icon||null,title:e?.title||null,shortcut:e?.shortcut||null})):null}function ui(e){let t=String(e).trim().toLowerCase();return t===`rtl`||t===`auto`?t:`ltr`}var di=/^\s*(\d+\.?\d*|\.\d+)\s*(px|rem|em|vh|vw|vmin|vmax)?\s*$/i,fi=new Set;function pi(e){let t=e.trim();return/\s/.test(t)||!E.hasSafeProtocol(t)?null:/^[a-z]+:\/*[^/]/i.test(t)?t:null}var mi={toggleH1:`h1`,toggleH2:`h2`,toggleH3:`h3`,toggleH4:`h4`,toggleH5:`h5`,toggleH6:`h6`,toggleBulletList:`lists`,toggleNumberedList:`lists`,toggleTaskList:`tasks`,toggleQuote:`blockquote`};function hi(e,t){let n=li(e),r=li(t);if(n===null||r===null)return n!==r;if(n.length!==r.length)return!0;for(let e=0;e<n.length;e++){let t=n[e],i=r[e];if(t.name!==i.name||t.actionId!==i.actionId||t.icon!==i.icon||t.title!==i.title)return!0}return!1}var X=class e{constructor(t,n={}){let r=e._resolveTargets(t);if(typeof t==`string`&&r.length===0)throw Error(`No elements found for selector: ${t}`);return r.map(t=>{if(t.overTypeInstance)return t.overTypeInstance.reinit(n),t.overTypeInstance;let r=Object.create(e.prototype);return r._init(t,n),t.overTypeInstance=r,e.instances.set(t,r),r})}_init(t,n={}){var r;this.element=t,this.instanceTheme=n.theme||null,this.options=this._mergeOptions(n),this.instanceId=++e.instanceCount,this.initialized=!1,this._isSafari=si(),this._safariReflowRaf=null,this.options.persist&&!e.stylesChrome&&(e.stylesChrome=!0,(r=document.querySelector(`style.overtype-styles`))==null||r.setAttribute(`clay`,`editor-ui`)),this.options.persist&&e._registerClaySnapshotHook(),e.injectStyles(),e.initGlobalListeners();let i=t.querySelector(`.overtype-container`),a=t.querySelector(`.overtype-wrapper`);i||a?this._recoverFromDOM(i,a):this._buildFromScratch(),this.instanceTheme===`auto`&&this.setTheme(`auto`),this.shortcuts=new Fe(this),this._rebuildActionsMap(),this.linkTooltip=new ai(this),requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.textarea.scrollTop=this.preview.scrollTop,this.textarea.scrollLeft=this.preview.scrollLeft})}),this.initialized=!0,this.options.onChange&&this._notifyChange()}_mergeOptions(e){let t={fontSize:`14px`,lineHeight:1.6,fontFamily:`"SF Mono", SFMono-Regular, Menlo, Monaco, "Cascadia Code", Consolas, "Roboto Mono", "Noto Sans Mono", "Droid Sans Mono", "Ubuntu Mono", "DejaVu Sans Mono", "Liberation Mono", "Courier New", Courier, monospace`,proportional:!1,padding:`16px`,dir:`ltr`,mobile:{fontSize:`16px`,padding:`12px`,lineHeight:1.5},textareaProps:{},autofocus:!1,autoResize:!1,minHeight:`100px`,maxHeight:null,placeholder:`Start typing...`,value:``,onChange:null,onKeydown:null,onRender:null,onFocus:null,onBlur:null,showActiveLineRaw:!1,showStats:!1,toolbar:!1,toolbarButtons:null,labels:null,statsFormatter:null,smartLists:!0,linkPaste:!0,clickToToggleTasks:!1,codeHighlighter:null,customSyntax:null,disable:[],italicUsesAsterisk:null,boldUsesUnderscore:null,bulletMarker:null,spellcheck:!1,persist:!1,transformLinkUrl:null,linkActions:null},{theme:n,colors:r,...i}=e;return{...t,...i}}_recoverFromDOM(t,n){let r=this._extractContent();if(t&&t.classList.contains(`overtype-container`)?(this.container=t,this.wrapper=t.querySelector(`.overtype-wrapper`)):n&&(this.wrapper=n,this.container=document.createElement(`div`),this.container.className=`overtype-container`,n.parentNode.insertBefore(this.container,n),this.container.appendChild(n)),this.textarea=this.wrapper?this.wrapper.querySelector(`.overtype-input`):null,!this.textarea){t&&t.remove(),n&&n.remove(),this._buildFromScratch(r);return}let i=this.instanceTheme||e.currentTheme||D,a=typeof i==`string`?i:i.name;a&&this.container.setAttribute(`data-theme`,a),this.instanceTheme&&this._applyThemeVars(typeof this.instanceTheme==`string`?O(this.instanceTheme):this.instanceTheme),this.container.querySelectorAll(`.overtype-toolbar, .overtype-link-tooltip, .overtype-stats, .overtype-placeholder, .overtype-preview`).forEach(e=>e.remove()),this.container.classList.remove(`overtype-auto-resize`),[this.wrapper,this.textarea].forEach(e=>{e.style.removeProperty(`height`),e.style.removeProperty(`overflow-y`)}),this._createOverlay(),this.options.showStats&&this._createStatsBar(),this.wrapper._instance=this,this._applyInstanceCSSVars(),this._configureTextarea(),this._ensureTextareaId(),this._syncPreviewInteractivity(),this._applyOptions()}_buildFromScratch(e=this._extractContent()){this.element.innerHTML=``,this._createDOM(),(e||this.options.value)&&this.setValue(e||this.options.value),this._applyOptions()}_extractContent(){let e=this.element.querySelector(`.overtype-input`);return e?e.value:this.element.textContent||``}_createDOM(){this.container=document.createElement(`div`),this.container.className=`overtype-container`;let t=this.instanceTheme||e.currentTheme||D,n=typeof t==`string`?t:t.name;n&&this.container.setAttribute(`data-theme`,n),this.instanceTheme&&this._applyThemeVars(typeof this.instanceTheme==`string`?O(this.instanceTheme):this.instanceTheme),this.wrapper=document.createElement(`div`),this.wrapper.className=`overtype-wrapper`,this._applyInstanceCSSVars(),this.wrapper._instance=this,this.textarea=document.createElement(`textarea`),this.textarea.className=`overtype-input`,this.textarea.placeholder=this.options.placeholder,this._configureTextarea(),this.options.textareaProps&&Object.entries(this.options.textareaProps).forEach(([e,t])=>{e===`className`||e===`class`?this.textarea.className+=` `+t:e===`style`&&typeof t==`object`?Object.assign(this.textarea.style,t):this.textarea.setAttribute(e,t)}),this._ensureTextareaId(),this.wrapper.appendChild(this.textarea),this._createOverlay(),this.container.appendChild(this.wrapper),this.options.showStats&&this._createStatsBar(),this.element.appendChild(this.container),this.options.autoResize?this._setupAutoResize():this.container.classList.remove(`overtype-auto-resize`),this._syncPreviewInteractivity()}_createOverlay(){this.preview=document.createElement(`div`),this.preview.className=`overtype-preview`,this.preview.setAttribute(`aria-hidden`,`true`),this.placeholderEl=document.createElement(`div`),this.placeholderEl.className=`overtype-placeholder`,this.placeholderEl.setAttribute(`aria-hidden`,`true`),this.placeholderEl.textContent=this.options.placeholder,this.wrapper.appendChild(this.preview),this.wrapper.appendChild(this.placeholderEl),this._markChrome(this.preview),this._markChrome(this.placeholderEl)}_createStatsBar(){this.statsBar=document.createElement(`div`),this.statsBar.className=`overtype-stats`,this._markChrome(this.statsBar),this.container.appendChild(this.statsBar),this._updateStats()}_markChrome(e){this.options.persist&&e&&e.setAttribute(`clay`,`editor-ui`)}_configureTextarea(){this.textarea.setAttribute(`autocomplete`,`off`),this.textarea.setAttribute(`autocorrect`,`off`),this.textarea.setAttribute(`autocapitalize`,`off`),this.textarea.setAttribute(`spellcheck`,String(this.options.spellcheck)),this.textarea.setAttribute(`data-gramm`,`false`),this.textarea.setAttribute(`data-gramm_editor`,`false`),this.textarea.setAttribute(`data-enable-grammarly`,`false`),this.options.persist&&this.textarea.setAttribute(`persist`,``)}_ensureTextareaId(){let e=this.textarea.id,t=/^overtype-\d+-input$/.test(e);if(e&&!(t&&document.querySelectorAll(`[id="${e}"]`).length>1))return;let n=this.instanceId;for(;document.getElementById(`overtype-${n}-input`);)n++;this.textarea.id=`overtype-${n}-input`}_syncPreviewInteractivity(){if(!this.preview||!this.container)return;let e=this.container.dataset.mode===`preview`;if(this.preview.inert=!e,this.preview.toggleAttribute(`inert`,!e),e){this.preview.removeAttribute(`aria-hidden`);return}this.preview.setAttribute(`aria-hidden`,`true`)}_createToolbar(){let e=this.options.toolbarButtons||Cn;if(this.options.fileUpload?.enabled&&!e.some(e=>e?.name===`upload`)){let t=e.findIndex(e=>e?.name===`viewMode`);t===-1?e=[...e,I.separator,I.upload]:(e=[...e],e.splice(t,0,I.separator,I.upload))}e=this._withoutDisabledButtons(e),this.toolbar=new kn(this,{toolbarButtons:e,labels:On(this.options.labels)}),this.toolbar.create(),this._toolbarSelectionListener=()=>{this.toolbar&&this.toolbar.updateButtonStates()},this._toolbarInputListener=()=>{this.toolbar&&this.toolbar.updateButtonStates()},this.textarea.addEventListener(`selectionchange`,this._toolbarSelectionListener),this.textarea.addEventListener(`input`,this._toolbarInputListener)}_cleanupToolbarListeners(){this._toolbarSelectionListener&&=(this.textarea.removeEventListener(`selectionchange`,this._toolbarSelectionListener),null),this._toolbarInputListener&&=(this.textarea.removeEventListener(`input`,this._toolbarInputListener),null)}_rebuildActionsMap(){this.actionsById=ci([...Cn,I.strikethrough,I.h4,I.h5,I.h6]),this.options.toolbarButtons&&Object.assign(this.actionsById,ci(this.options.toolbarButtons)),this.options.fileUpload?.enabled&&Object.assign(this.actionsById,ci([I.upload]))}_applyInstanceCSSVars(){if(!this.wrapper)return;let{proportional:e}=this.options,t=[[`--instance-font-size`,this.options.fontSize,k.fontSize],[`--instance-line-height`,this.options.lineHeight,k.lineHeight],[`--instance-padding`,this.options.padding,k.padding],[`--instance-font-family`,this.options.fontFamily,k.fontFamily],[`--instance-bold-weight`,e&&`normal`],[`--instance-bold-stroke`,e&&`0.45px currentColor`],[`--instance-italic-style`,e&&`normal`]];for(let[e,n,r]of t)n&&String(n)!==String(r)?this.wrapper.style.setProperty(e,String(n)):this.wrapper.style.removeProperty(e)}_applyDirection(){let e=ui(this.options.dir);[this.container,this.textarea,this.preview].forEach(t=>{e===`auto`?t.removeAttribute(`dir`):t.setAttribute(`dir`,e)})}_applyOptions(){this._applyInstanceCSSVars(),this._applyDirection(),this.options.autofocus&&this.textarea.focus(),this.options.autoResize?this.container.classList.contains(`overtype-auto-resize`)?this._updateAutoHeight():this._setupAutoResize():this.container.classList.remove(`overtype-auto-resize`),this.options.toolbar&&!this.toolbar?this._createToolbar():!this.options.toolbar&&this.toolbar&&(this._cleanupToolbarListeners(),this.toolbar.destroy(),this.toolbar=null),this.placeholderEl&&(this.placeholderEl.textContent=this.options.placeholder),this.options.fileUpload&&!this.fileUploadInitialized?this._initFileUpload():!this.options.fileUpload&&this.fileUploadInitialized&&this._destroyFileUpload(),this.options.linkPaste&&!this.linkPasteInitialized?this._initLinkPaste():!this.options.linkPaste&&this.linkPasteInitialized&&this._destroyLinkPaste(),this.updatePreview()}_initFileUpload(){let e=this.options.fileUpload;if(!(!e||!e.enabled)){if(e.maxSize=e.maxSize||10*1024*1024,e.mimeTypes=e.mimeTypes||[],e.batch=e.batch||!1,!e.onInsertFile||typeof e.onInsertFile!=`function`){console.warn(`OverType: fileUpload.onInsertFile callback is required for file uploads.`);return}this._fileUploadCounter=0,this._uploadedFiles=new Map,this._boundHandleFilePaste=this._handleFilePaste.bind(this),this._boundHandleFileDrop=this._handleFileDrop.bind(this),this._boundHandleDragOver=this._handleDragOver.bind(this),this.textarea.addEventListener(`paste`,this._boundHandleFilePaste),this.textarea.addEventListener(`drop`,this._boundHandleFileDrop),this.textarea.addEventListener(`dragover`,this._boundHandleDragOver),this.fileUploadInitialized=!0}}_extractMarkdownUrls(e){return E.findLinks(e,{allowEmptyText:!0}).map(e=>e.destination.value)}_trackInsertedUrls(e,t){if(!this._uploadedFiles||!t||!e)return;let n=E.findLinks(e,{allowEmptyText:!0});for(let e of n)this._uploadedFiles.set(e.destination.value,{filename:t.name,file:t,markdownDestination:e.destination.raw})}_checkForRemovedUploads(){if(!this._uploadedFiles||this._uploadedFiles.size===0)return;let e=this.options.fileUpload?.onRemoveFile,t=this.textarea.value,n=new Set(this._extractMarkdownUrls(this.textarea.value)),r=[];for(let[e,i]of this._uploadedFiles){let a=i.markdownDestination||e;!n.has(e)&&!t.includes(a)&&r.push({url:e,info:i})}for(let{url:t,info:n}of r)this._uploadedFiles.delete(t),e&&e({url:t,filename:n.filename,file:n.file})}_handleFilePaste(e){e?.clipboardData?.files?.length&&(e.preventDefault(),this._handleDataTransfer(e.clipboardData))}_handleFileDrop(e){e?.dataTransfer?.files?.length&&(e.preventDefault(),this._handleDataTransfer(e.dataTransfer))}_handleDataTransfer(e){let t=[];for(let n of e.files){if(n.size>this.options.fileUpload.maxSize||this.options.fileUpload.mimeTypes.length>0&&!this.options.fileUpload.mimeTypes.includes(n.type))continue;let e=++this._fileUploadCounter,r=`${n.type.startsWith(`image/`)?`!`:``}[Uploading ${n.name} (#${e})...]()`;if(this.insertAtCursor(`${r}
`),this.options.fileUpload.batch){t.push({file:n,placeholder:r});continue}this.options.fileUpload.onInsertFile(n).then(e=>{this.textarea.value=this.textarea.value.replace(r,e),this._trackInsertedUrls(e,n),this.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))},e=>{console.error(`OverType: File upload failed`,e),this.textarea.value=this.textarea.value.replace(r,`[Upload failed]()`),this.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))})}this.options.fileUpload.batch&&t.length>0&&this.options.fileUpload.onInsertFile(t.map(e=>e.file)).then(e=>{(Array.isArray(e)?e:[e]).forEach((e,n)=>{this.textarea.value=this.textarea.value.replace(t[n].placeholder,e),this._trackInsertedUrls(e,t[n].file)}),this.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))},e=>{console.error(`OverType: File upload failed`,e),t.forEach(({placeholder:e})=>{this.textarea.value=this.textarea.value.replace(e,`[Upload failed]()`)}),this.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))})}_handleDragOver(e){e.preventDefault()}_destroyFileUpload(){this.textarea.removeEventListener(`paste`,this._boundHandleFilePaste),this.textarea.removeEventListener(`drop`,this._boundHandleFileDrop),this.textarea.removeEventListener(`dragover`,this._boundHandleDragOver),this._boundHandleFilePaste=null,this._boundHandleFileDrop=null,this._boundHandleDragOver=null,this._uploadedFiles=null,this.fileUploadInitialized=!1}_initLinkPaste(){this._plainPasteArmed=!1,this._boundHandleLinkPaste=this._handleLinkPaste.bind(this),this._boundTrackPlainPaste=this._trackPlainPasteShortcut.bind(this),this.textarea.addEventListener(`paste`,this._boundHandleLinkPaste),this.textarea.addEventListener(`keydown`,this._boundTrackPlainPaste),this.textarea.addEventListener(`keyup`,this._boundTrackPlainPaste),this.linkPasteInitialized=!0}_destroyLinkPaste(){this.textarea.removeEventListener(`paste`,this._boundHandleLinkPaste),this.textarea.removeEventListener(`keydown`,this._boundTrackPlainPaste),this.textarea.removeEventListener(`keyup`,this._boundTrackPlainPaste),this._boundHandleLinkPaste=null,this._boundTrackPlainPaste=null,this._plainPasteArmed=!1,this.linkPasteInitialized=!1}_trackPlainPasteShortcut(e){let t=Ne()?e.metaKey:e.ctrlKey;this._plainPasteArmed=e.type===`keydown`&&t&&e.shiftKey&&(e.key.toLowerCase()===`v`||e.code===`KeyV`)}_handleLinkPaste(e){let t=this._plainPasteArmed;if(this._plainPasteArmed=!1,t||e.defaultPrevented||!this._canEditTextarea())return;let n=e.clipboardData;if(!n||n.files?.length)return;let r=pi(n.getData(`text/plain`)||``),i=r&&this._linkPasteTarget(r);i&&(e.preventDefault(),this._replaceRange(i.start,i.end,i.markdown))}_linkPasteTarget(e){let{selectionStart:t,selectionEnd:n,value:r}=this.textarea,i=r.slice(t,n),a=i.trim();if(!a||pi(a))return null;let o=t+i.indexOf(a),s=o+a.length,c=!this._disabledFeatures().has(`code`);if(E.findRenderableLinks(r,{allowEmptyText:!0,fences:c}).some(e=>e.start<s&&e.end>o))return null;let l=`[${a}](${e})`,u=r.slice(0,o)+l+r.slice(s),d=E.findRenderableLinks(u,{fences:c}).find(e=>e.start===o);return d&&!d.image&&d.destination.value===e?{start:o,end:s,markdown:l}:null}_handleTaskClick(e){if(!this.options.clickToToggleTasks||e.button!==0||!this._canEditTextarea()||this.container.dataset.mode===`preview`)return;let t=this._disabledFeatures();if(t.has(`tasks`))return;let n=[...this.preview.querySelectorAll(`li.task-list, div.raw-line`)].filter(e=>e.matches(`li.task-list`)||/^ *-\s+\[[ xX]\](?:\s|$)/.test(e.textContent)),r=0,i=0,a=null;for(let o of this.textarea.value.split(`
`)){if(a){S(o,a)&&(a=null),i+=o.length+1;continue}if(a=t.has(`code`)?null:x(o),a){i+=o.length+1;continue}let s=/^( *-\s+\[)([ xX])\](?:\s|$)/.exec(o);if(!s||!E.parseLine(o,!1,t).includes(`<li class="task-list">`)){i+=o.length+1;continue}let c=n[r++],l=(c?.matches(`li.task-list`)?c.querySelector(`:scope > .syntax-marker`):c)?.firstChild;if(l?.nodeType===3){let t=l.textContent.indexOf(`[`)+1;if(!/^\[[ xX]\]$/.test(l.textContent.slice(t-1,t+2))){i+=o.length+1;continue}let n=document.createRange();if(n.setStart(l,t-1),n.setEnd(l,t+2),[...n.getClientRects()].some(t=>e.clientX>=t.left&&e.clientX<t.right&&e.clientY>=t.top&&e.clientY<t.bottom)){let e=this.textarea,t=e.selectionStart,n=e.selectionEnd,r=e.selectionDirection,a=i+s[1].length;e.focus(),this._replaceRange(a,a+1,s[2]===` `?`x`:` `),e.setSelectionRange(t,n,r);return}}i+=o.length+1}}_replaceRange(e,t,n){let r=this.textarea,i=!1,a=()=>{i=!0};r.setSelectionRange(e,t),r.addEventListener(`input`,a);let o=!1;try{o=document.execCommand(`insertText`,!1,n)}catch{}finally{r.removeEventListener(`input`,a)}o||r.setRangeText(n,e,t,`end`),i||r.dispatchEvent(new Event(`input`,{bubbles:!0}))}insertAtCursor(e){let t=this.textarea.selectionStart,n=this.textarea.selectionEnd,r=!1;try{r=document.execCommand(`insertText`,!1,e)}catch{}if(!r){let r=this.textarea.value.slice(0,t),i=this.textarea.value.slice(n);this.textarea.value=r+e+i,this.textarea.setSelectionRange(t+e.length,t+e.length)}this.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}updatePreview(){let e=this.textarea.value,t=this.textarea.selectionStart,n=this._getCurrentLine(e,t),r=this.container.dataset.mode===`preview`,i=E.parse(e,n,this.options.showActiveLineRaw,this.options.codeHighlighter,r,this._parserOptions());this.preview.innerHTML=i,this.placeholderEl&&(this.placeholderEl.style.display=e?`none`:``),this._applyCodeBlockBackgrounds(),this.options.showStats&&this.statsBar&&this._updateStats(),this.options.onRender&&this.options.onRender(this.preview,r?`preview`:`normal`,this)}_notifyChange(){this.initialized&&(this._checkForRemovedUploads(),this.options.onChange&&this.options.onChange(this.textarea.value,this))}_applyCodeBlockBackgrounds(){let e=this.preview.querySelectorAll(`.code-fence`);for(let t=0;t<e.length-1;t+=2){let n=e[t],r=e[t+1],i=n.parentElement,a=r.parentElement;!i||!a||(n.style.display=`block`,r.style.display=`block`,i.classList.add(`code-block-line`),a.classList.add(`code-block-line`))}}_getCurrentLine(e,t){return e.substring(0,t).split(`
`).length-1}handleInput(e){this.updatePreview(),this._notifyChange(),this._scheduleSafariReflow()}_scheduleSafariReflow(){!this._isSafari||this._safariReflowRaf||(this._safariReflowRaf=requestAnimationFrame(()=>{this._safariReflowRaf=null;let e=this.textarea;e&&(e.style.setProperty(`letter-spacing`,`-0.001px`,`important`),e.offsetHeight,e.style.removeProperty(`letter-spacing`))}))}handleFocus(e){this.options.onFocus&&this.options.onFocus(e,this)}handleBlur(e){this.options.onBlur&&this.options.onBlur(e,this)}handleKeydown(e){if(e.key===`Tab`&&this.textarea.selectionStart!==this.textarea.selectionEnd&&this._canEditTextarea()){e.preventDefault(),e.shiftKey?this.outdentSelection():this.indentSelection();return}if(e.key===`Enter`&&!e.shiftKey&&!e.metaKey&&!e.ctrlKey&&this.options.smartLists&&this.handleSmartListContinuation()){e.preventDefault();return}!this.shortcuts.handleKeydown(e)&&this.options.onKeydown&&this.options.onKeydown(e,this)}handleSmartListContinuation(){let e=this._disabledFeatures();if(e.has(`lists`))return!1;let t=this.textarea,n=t.selectionStart,r=E.getListContext(t.value,n,e);return!r||!r.inList?!1:n===t.selectionEnd&&n<r.markerEndPos?(t.setSelectionRange(r.lineStart,r.lineStart),!1):r.content.trim()===``&&n>=r.markerEndPos?(this.deleteListMarker(r),!0):(n>r.markerEndPos&&n<r.lineEnd?this.splitListItem(r,n):this.insertNewListItem(r),r.listType===`numbered`&&this.scheduleNumberedListUpdate(),!0)}deleteListMarker(e){this.textarea.setSelectionRange(e.lineStart,e.markerEndPos),document.execCommand(`delete`),this.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}insertNewListItem(e){let t=E.createNewListItem(e);document.execCommand(`insertText`,!1,`
`+t),this.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}splitListItem(e,t){let n=e.content.substring(t-e.markerEndPos);this.textarea.setSelectionRange(t,e.lineEnd),document.execCommand(`delete`);let r=E.createNewListItem(e);document.execCommand(`insertText`,!1,`
`+r+n);let i=this.textarea.selectionStart-n.length;this.textarea.setSelectionRange(i,i),this.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}scheduleNumberedListUpdate(){this.numberUpdateTimeout&&clearTimeout(this.numberUpdateTimeout),this.numberUpdateTimeout=setTimeout(()=>{this.updateNumberedLists()},10)}updateNumberedLists(){let e=this.textarea.value,t=this.textarea.selectionStart,n=E.renumberLists(e);if(n!==e){let r=0,i=e.split(`
`),a=n.split(`
`),o=0;for(let e=0;e<i.length&&o<t;e++){if(i[e]!==a[e]){let n=a[e].length-i[e].length;o+i[e].length<t&&(r+=n)}o+=i[e].length+1}this.textarea.value=n;let s=t+r;this.textarea.setSelectionRange(s,s),this.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}}handleScroll(e){this.preview.scrollTop=this.textarea.scrollTop,this.preview.scrollLeft=this.textarea.scrollLeft}getValue(){return this.textarea.value}setValue(e){let t=this.textarea.value!==e;this.textarea.value=e,this.updatePreview(),this.options.autoResize&&this._updateAutoHeight(),t&&(this._notifyChange(),this._scheduleSafariReflow())}_refreshFromTextarea(){this._syncPreviewInteractivity(),this.updatePreview(),this.options.autoResize&&this._updateAutoHeight(),this._scheduleSafariReflow()}async performAction(e,t=null){let n=this.textarea;if(!n)return!1;let r=this.actionsById?.[e];if(!r)return console.warn(`OverType: Unknown action "${e}"`),!1;if(this._disabledFeatures().has(mi[e]))return!1;n.focus();try{return await r({editor:this,getValue:()=>this.getValue(),setValue:e=>this.setValue(e),event:t}),!0}catch(t){return console.error(`OverType: Action "${e}" error:`,t),this.wrapper.dispatchEvent(new CustomEvent(`button-error`,{detail:{actionId:e,error:t}})),!1}}getRenderedHTML(e={}){let t=this.getValue(),n=E.parse(t,-1,!1,this.options.codeHighlighter,!1,this._parserOptions());return e.cleanHTML&&(n=n.replace(/<span class="syntax-marker[^"]*">.*?<\/span>/g,``),n=n.replace(/\sclass="(bullet-list|ordered-list|code-fence|hr-marker|blockquote|url-part)"/g,``),n=n.replace(/\sclass=""/g,``)),n}getPreviewHTML(){return this.preview.innerHTML}indentSelection(){this._replaceSelectedLines(e=>`  ${e}`)}outdentSelection(){this._replaceSelectedLines(e=>e.replace(/^( {1,2}|\t)/,``))}_replaceSelectedLines(e){if(!this._canEditTextarea())return!1;let t=this.textarea,{selectionStart:n,selectionEnd:r,value:i}=t,a=i.lastIndexOf(`
`,n-1)+1,o=this._effectiveSelectionEnd(i,n,r),s=i.indexOf(`
`,o),c=s===-1?i.length:s,l=i.slice(a,c),u=l.split(`
`),d=u.map(e),f=d.join(`
`);if(f===l)return!1;let p=e=>{if(e>c)return e+f.length-l.length;let t=a,n=a;for(let r=0;r<u.length;r++){if(e<=t+u[r].length)return n+Math.max(0,e-t+d[r].length-u[r].length);t+=u[r].length+1,n+=d[r].length+1}return e},m=n===r,h=p(r),g=m?h:n===a?a:p(n);t.setSelectionRange(a,c);let _=!1;try{_=document.execCommand(`insertText`,!1,f)}catch{}return _||t.setRangeText(f,a,c,`preserve`),t.setSelectionRange(g,h),t.dispatchEvent(new Event(`input`,{bubbles:!0})),!0}_effectiveSelectionEnd(e,t,n){return n>t&&e[n-1]===`
`?n-1:n}_canEditTextarea(){return this.textarea&&!this.textarea.disabled&&!this.textarea.readOnly}getCleanHTML(){return this.getRenderedHTML({cleanHTML:!0})}focus(){this.textarea.focus()}blur(){this.textarea.blur()}isInitialized(){return this.initialized}reinit(e={}){let t=this.options?.toolbarButtons,n=this.options?.disable;this.options=this._mergeOptions({...this.options,...e});let r=this.toolbar&&this.options.toolbar&&(hi(t,this.options.toolbarButtons)||String(n)!==String(this.options.disable)||JSON.stringify(On(this.options.labels))!==JSON.stringify(this.toolbar.labels));if(this._rebuildActionsMap(),r){let e=this.toolbar.isHidden();this._cleanupToolbarListeners(),this.toolbar.destroy(),this.toolbar=null,this._createToolbar(),e&&this.toolbar.hide()}this.fileUploadInitialized&&this._destroyFileUpload(),this.options.fileUpload&&this._initFileUpload(),this._applyOptions(),this.updatePreview()}showToolbar(){this.toolbar?this.toolbar.show():(this.options.toolbar=!0,this._createToolbar())}hideToolbar(){this.toolbar&&this.toolbar.hide()}setTheme(t){if(e._autoInstances.delete(this),this.instanceTheme=t,t===`auto`)e._autoInstances.add(this),e._startAutoListener(),this._applyResolvedTheme(Re(`auto`));else{let e=typeof t==`string`?O(t):t,n=typeof e==`string`?e:e.name;n&&this.container.setAttribute(`data-theme`,n),this._applyThemeVars(e),this.updatePreview()}return e._stopAutoListener(),this}_applyResolvedTheme(e){let t=O(e);this.container.setAttribute(`data-theme`,e),this._applyThemeVars(t,!0),this.updatePreview()}_applyThemeVars(e,t=!1){if(!e||!e.colors)return;let n=ze(e.colors,e.previewColors);this.container.style.cssText=t?n:this.container.style.cssText+n}setCodeHighlighter(e){this.options.codeHighlighter=e,this.updatePreview()}setCustomSyntax(e){this.options.customSyntax=e,this.updatePreview()}_parserOptions(){return{customSyntax:this.options.customSyntax,disable:this.options.disable}}_disabledFeatures(){return E.resolveDisabled(this.options.disable)}_withoutDisabledButtons(e){let t=this._disabledFeatures();if(t.size===0)return e;let n=[];for(let r of e)t.has(mi[r?.actionId])||(r?.name!==`separator`||n.length!==0&&n[n.length-1]?.name!==`separator`)&&n.push(r);return n[n.length-1]?.name===`separator`&&n.pop(),n}_updateStats(){if(!this.statsBar)return;let e=this.textarea.value,t=e.split(`
`),n=e.length,r=e.split(/\s+/).filter(e=>e.length>0).length,i=this.textarea.selectionStart,a=e.substring(0,i).split(`
`),o=a.length,s=a[a.length-1].length+1;this.options.statsFormatter?this.statsBar.innerHTML=this.options.statsFormatter({chars:n,words:r,lines:t.length,line:o,column:s}):this.statsBar.innerHTML=`
          <div class="overtype-stat">
            <span class="live-dot"></span>
            <span>${n} chars, ${r} words, ${t.length} lines</span>
          </div>
          <div class="overtype-stat">Line ${o}, Col ${s}</div>
        `}_setupAutoResize(){this.container.classList.add(`overtype-auto-resize`),this.previousHeight=null,this._updateAutoHeight(),this._autoResizeHandler||(this._autoResizeHandler=()=>this._updateAutoHeight(),this.textarea.addEventListener(`input`,this._autoResizeHandler),window.addEventListener(`resize`,this._autoResizeHandler))}_heightLimitToPx(e){if(!e)return null;let t;if(typeof e==`number`)t=e;else{let n=di.exec(String(e));if(!n)return fi.has(e)||(fi.add(e),console.warn(`OverType: autoResize cannot convert the height "${e}" to pixels, so it sets no limit. Use a number, or px, rem, em, vh, vw, vmin or vmax.`)),null;let r=e=>parseFloat(window.getComputedStyle(e).fontSize)||16;t=parseFloat(n[1])*{px:()=>1,rem:()=>r(document.documentElement),em:()=>r(this.textarea),vh:()=>window.innerHeight/100,vw:()=>window.innerWidth/100,vmin:()=>Math.min(window.innerWidth,window.innerHeight)/100,vmax:()=>Math.max(window.innerWidth,window.innerHeight)/100}[(n[2]||`px`).toLowerCase()]()}return t=Math.round(t),Number.isFinite(t)&&t>0?t:null}_updateAutoHeight(){if(!this.options.autoResize)return;let e=this.textarea,t=this.preview,n=this.wrapper;if(this.container.dataset.mode===`preview`){n.style.removeProperty(`height`),t.style.removeProperty(`height`),t.style.removeProperty(`overflow-y`),e.style.removeProperty(`height`),e.style.removeProperty(`overflow-y`);return}let r=e.scrollTop;n.style.setProperty(`height`,`auto`,`important`),e.style.setProperty(`height`,`auto`,`important`);let i=e.scrollHeight,a=this._heightLimitToPx(this.options.minHeight);a!==null&&(i=Math.max(i,a));let o=`hidden`,s=this._heightLimitToPx(this.options.maxHeight);s!==null&&i>s&&(i=s,o=`auto`);let c=i+`px`;e.style.setProperty(`height`,c,`important`),e.style.setProperty(`overflow-y`,o,`important`),t.style.setProperty(`height`,c,`important`),t.style.setProperty(`overflow-y`,o,`important`),n.style.setProperty(`height`,c,`important`),e.scrollTop=r,t.scrollTop=r,this.previousHeight!==i&&(this.previousHeight=i)}showStats(e){this.options.showStats=e,e&&!this.statsBar?this._createStatsBar():e&&this.statsBar?this._updateStats():!e&&this.statsBar&&(this.statsBar.remove(),this.statsBar=null)}showNormalEditMode(){return this.container.dataset.mode=`normal`,this._syncPreviewInteractivity(),this.updatePreview(),this._updateAutoHeight(),requestAnimationFrame(()=>{this.textarea.scrollTop=this.preview.scrollTop,this.textarea.scrollLeft=this.preview.scrollLeft}),this}showPlainTextarea(){if(this.container.dataset.mode=`plain`,this._syncPreviewInteractivity(),this._updateAutoHeight(),this.toolbar){let e=this.container.querySelector(`[data-action="toggle-plain"]`);e&&(e.classList.remove(`active`),e.title=`Show markdown preview`)}return this}showPreviewMode(){return this.container.dataset.mode=`preview`,this._syncPreviewInteractivity(),this.updatePreview(),this._updateAutoHeight(),this}destroy(){if(e._autoInstances.delete(this),e._stopAutoListener(),this.fileUploadInitialized&&this._destroyFileUpload(),this.linkPasteInitialized&&this._destroyLinkPaste(),this.element.overTypeInstance=null,e.instances.delete(this.element),this.shortcuts&&this.shortcuts.destroy(),this._safariReflowRaf&&=(cancelAnimationFrame(this._safariReflowRaf),null),this.linkTooltip&&=(this.linkTooltip.destroy(),null),this.toolbar&&=(this._cleanupToolbarListeners(),this.toolbar.destroy(),null),this._autoResizeHandler&&=(this.textarea.removeEventListener(`input`,this._autoResizeHandler),window.removeEventListener(`resize`,this._autoResizeHandler),null),this.wrapper)if(this.options.persist)[this.preview,this.placeholderEl,this.statsBar].forEach(e=>e?.remove()),this.statsBar=null,this.wrapper._instance=null;else{let e=this.getValue();this.wrapper.remove(),this.element.textContent=e}this.initialized=!1}static init(t,n={}){return new e(t,n)}static initFromData(t,n={}){return e._resolveTargets(t).map(t=>{let r={...n};for(let n of t.attributes){if(!n.name.startsWith(`data-ot-`))continue;let t=n.name.slice(8);if(t.startsWith(`textarea-`)&&t!==`textarea-props`){let i=t.slice(9).replace(/-([a-z])/g,(e,t)=>t.toUpperCase());r.textareaProps={...r.textareaProps||{},[i]:e._parseDataValue(n.value)};continue}let i=t.replace(/-([a-z])/g,(e,t)=>t.toUpperCase());r[i]=e._parseDataValue(n.value)}return new e(t,r)[0]})}static _resolveTargets(e){if(e==null)throw Error(`Invalid target: must be selector string, Element, NodeList, or Array`);if(typeof e==`string`)return Array.from(document.querySelectorAll(e));if(e instanceof Element)return[e];if(e instanceof NodeList)return Array.from(e);if(Array.isArray(e))return e;if(typeof e.length==`number`)return Array.from(e);throw Error(`Invalid target: must be selector string, Element, NodeList, or Array`)}static _parseDataValue(e){if(e===`true`)return!0;if(e===`false`)return!1;if(e===`null`)return null;if(e!==``&&!isNaN(Number(e)))return Number(e);let t=e.trim();if(t[0]===`{`||t[0]===`[`)try{return JSON.parse(t)}catch{return e}return e}static getInstance(t){let n;return n=t instanceof Element?t:e._resolveTargets(t)[0],n&&(n.overTypeInstance||e.instances.get(n))||null}static destroyAll(){document.querySelectorAll(`[data-overtype-instance]`).forEach(t=>{let n=e.getInstance(t);n&&n.destroy()})}static injectStyles(t=!1){if(e.stylesInjected&&!t)return;let n=document.querySelector(`style.overtype-styles`);n&&n.remove();let r=Ve({theme:e.currentTheme||D}),i=document.createElement(`style`);i.className=`overtype-styles`,e.stylesChrome&&i.setAttribute(`clay`,`editor-ui`),i.textContent=r,document.head.appendChild(i),e.stylesInjected=!0}static setTheme(t,n=null){if(e._globalAutoTheme=!1,e._globalAutoCustomColors=null,t===`auto`){e._globalAutoTheme=!0,e._globalAutoCustomColors=n,e._startAutoListener(),e._applyGlobalTheme(Re(`auto`),n);return}e._stopAutoListener(),e._applyGlobalTheme(t,n)}static _applyGlobalTheme(t,n=null){let r=typeof t==`string`?O(t):t;n&&(r=Be(r,n)),e.currentTheme=r,e.injectStyles(!0);let i=typeof r==`string`?r:r.name;document.querySelectorAll(`.overtype-container`).forEach(e=>{let t=e.querySelector(`.overtype-wrapper`);i&&t&&t._instance&&e.setAttribute(`data-theme`,i)}),document.querySelectorAll(`.overtype-wrapper`).forEach(e=>{e.closest(`.overtype-container`)||i&&e.setAttribute(`data-theme`,i);let t=e._instance;t&&t.updatePreview()}),document.querySelectorAll(`overtype-editor`).forEach(e=>{i&&typeof e.setAttribute==`function`&&e.setAttribute(`theme`,i),typeof e.refreshTheme==`function`&&e.refreshTheme()})}static _startAutoListener(){e._autoMediaQuery||window.matchMedia&&(e._autoMediaQuery=window.matchMedia(`(prefers-color-scheme: dark)`),e._autoMediaListener=t=>{let n=t.matches?`cave`:`solar`;e._globalAutoTheme&&e._applyGlobalTheme(n,e._globalAutoCustomColors),e._autoInstances.forEach(e=>e._applyResolvedTheme(n))},e._autoMediaQuery.addEventListener(`change`,e._autoMediaListener))}static _stopAutoListener(){e._autoInstances.size>0||e._globalAutoTheme||e._autoMediaQuery&&(e._autoMediaQuery.removeEventListener(`change`,e._autoMediaListener),e._autoMediaQuery=null,e._autoMediaListener=null)}static setCodeHighlighter(e){E.setCodeHighlighter(e),document.querySelectorAll(`.overtype-wrapper`).forEach(e=>{let t=e._instance;t&&t.updatePreview&&t.updatePreview()}),document.querySelectorAll(`overtype-editor`).forEach(e=>{if(typeof e.getEditor==`function`){let t=e.getEditor();t&&t.updatePreview&&t.updatePreview()}})}static setCustomSyntax(e){E.setCustomSyntax(e),document.querySelectorAll(`.overtype-wrapper`).forEach(e=>{let t=e._instance;t&&t.updatePreview&&t.updatePreview()}),document.querySelectorAll(`overtype-editor`).forEach(e=>{if(typeof e.getEditor==`function`){let t=e.getEditor();t&&t.updatePreview&&t.updatePreview()}})}static _registerClaySnapshotHook(){let t=typeof window<`u`?window:globalThis;if(t.__overtypeClaySnapshotHook)return;t.__overtypeClaySnapshotHook=!0;let n=()=>{var n;return((n=t.clay)?.onSnapshot)?.call(n,e._stripLayoutFromSnapshot)};typeof t.clay?.onSnapshot==`function`?n():document.addEventListener(`clay:ready`,n,{once:!0})}static _stripLayoutFromSnapshot(e){e.querySelectorAll(`textarea.overtype-input[persist]`).forEach(e=>{[e,e.closest(`.overtype-wrapper`)].forEach(e=>{e&&(e.style.removeProperty(`height`),e.style.removeProperty(`overflow-y`),e.getAttribute(`style`)||e.removeAttribute(`style`))})})}static initGlobalListeners(){let t=typeof window<`u`?window:globalThis,n=`__overtypeGlobalListenersInitialized`;if(e.globalListenersInitialized||t[n]){e.globalListenersInitialized=!0;return}t[n]=!0,document.addEventListener(`input`,e=>{if(e.target&&e.target.classList&&e.target.classList.contains(`overtype-input`)){let t=e.target.closest(`.overtype-wrapper`)?._instance;t&&t.handleInput(e)}}),document.addEventListener(`keydown`,e=>{if(e.target&&e.target.classList&&e.target.classList.contains(`overtype-input`)){let t=e.target.closest(`.overtype-wrapper`)?._instance;t&&t.handleKeydown(e)}}),document.addEventListener(`click`,e=>{if(e.target&&e.target.classList&&e.target.classList.contains(`overtype-input`)){let t=e.target.closest(`.overtype-wrapper`)?._instance;t&&t._handleTaskClick(e)}}),document.addEventListener(`clay:sync-applied`,()=>{document.querySelectorAll(`.overtype-wrapper`).forEach(e=>{let t=e._instance;if(!(!t||!t.options.persist))try{t._refreshFromTextarea()}catch(e){console.error(`OverType: redraw after clay:sync-applied failed`,e)}})}),document.addEventListener(`focus`,e=>{if(e.target&&e.target.classList&&e.target.classList.contains(`overtype-input`)){let t=e.target.closest(`.overtype-wrapper`)?._instance;t&&t.handleFocus(e)}},!0),document.addEventListener(`blur`,e=>{if(e.target&&e.target.classList&&e.target.classList.contains(`overtype-input`)){let t=e.target.closest(`.overtype-wrapper`)?._instance;t&&t.handleBlur(e)}},!0),document.addEventListener(`scroll`,e=>{if(e.target&&e.target.classList&&e.target.classList.contains(`overtype-input`)){let t=e.target.closest(`.overtype-wrapper`)?._instance;t&&t.handleScroll(e)}},!0),document.addEventListener(`selectionchange`,e=>{let t=document.activeElement;if(t&&t.classList.contains(`overtype-input`)){let e=t.closest(`.overtype-wrapper`)?._instance;e&&(e.options.showStats&&e.statsBar&&e._updateStats(),clearTimeout(e._selectionTimeout),e._selectionTimeout=setTimeout(()=>{e.updatePreview()},50))}}),e.globalListenersInitialized=!0}};_(X,`instances`,new WeakMap),_(X,`stylesInjected`,!1),_(X,`stylesChrome`,!1),_(X,`globalListenersInitialized`,!1),_(X,`instanceCount`,0),_(X,`_autoMediaQuery`,null),_(X,`_autoMediaListener`,null),_(X,`_autoInstances`,new Set),_(X,`_globalAutoTheme`,!1),_(X,`_globalAutoCustomColors`,null);var Z=X;Z.MarkdownParser=E,Z.ShortcutsManager=Fe,Z.themes={solar:D,cave:O(`cave`)},Z.getTheme=O,Z.defaultLabels=Dn,Z.currentTheme=D;var gi=Z;function _i(e){return e.replace(/([[\]\\])/g,`\\$1`)}var vi=`CraftCms\\Cms\\Asset\\Elements\\Asset`,yi=`asset`;function bi(e,n,r,i,a,o=()=>null){let s=null,c=null;async function u(){let e=o(),a=JSON.stringify(e);if(s&&c!==a&&(s.destroy(),s=null),!s){c=a,s=await l(vi,{closeOtherModals:!1,condition:r,...e,criteria:n,hideOnSelect:!0,indexSettings:{showFolders:!0},modalTitle:t(`Choose an asset`),multiSelect:!1,onSelect:e=>{let[t]=e;t&&d(t)},sources:i});return}s.show()}function d(t){let n=`{${yi}:${t.id}@${t.siteId}:url}`,r=_i(String(t.alt||t.label||``)),i=t.kind===`image`?`![${r}](${n})`:`[${r||n}](${n})`;e.insertAtCursor(i),e.focus(),a.isActive()&&a.render(e.getValue())}return{open:u}}var xi=0;function Si(e,t,n){let r=null,i=u(),a=0,o=0,s=null,c=!1;i&&C(i,!1);function l(t){t?.preventDefault(),t?.stopPropagation(),S(),o=e.textarea.selectionStart,a=e.textarea.selectionEnd;let s=document.createElement(`div`);s.slot=`content`,s.classList.add(`p-2`);let c=document.createElement(`craft-link-field`);c.advancedFields=n.advancedFields,c.showLabelField=n.showLabelField,c.types=n.types,s.appendChild(c),i=d(t);let l=f(i);r=document.createElement(`craft-popover`),r.className=`craft-link-popover`,r.id=w(l),r.placement=`bottom-start`,r.anchor=i,r.manual=!0,r.withoutInvokerAria=!0,r.appendChild(s),document.body.appendChild(r),c.addEventListener(`apply`,p),c.addEventListener(`cancel`,m),c.addEventListener(`element-select-start`,h),c.addEventListener(`element-select-end`,g),r.addEventListener(`craft-after-hide`,_),C(i,!1),x(r)}function u(){return e.toolbar?.buttons?.link??e.container.querySelector(`[data-button="link"]`)}function d(t){return t?.currentTarget instanceof HTMLElement?t.currentTarget:e.toolbar?.buttons?.link??e.container.querySelector(`[data-button="link"]`)??e.wrapper}function f(e){return e.id||=(xi+=1,`markdown-link-popover-anchor-${xi}`),e.id}function p(n){let r=n.detail,i=e.textarea.value.slice(o,a),s=r.label||i||r.defaultLabel||r.value,c=y(r.href),l=r.title?`[${_i(s)}](${c} "${v(r.title)}")`:`[${_i(s)}](${c})`;e.textarea.focus(),e.textarea.setSelectionRange(o,a),e.textarea.setRangeText(l,o,a,`end`),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0})),t.isActive()&&t.render(e.getValue()),S()}function m(){S({restoreFocus:!0})}function h(e){r&&(c=!0,s=e.detail.restoreFocusTo??null,C(i,!1),e.detail.waitUntil(r.hide()))}function g(){let e=r;e&&(c=!1,x(e,s),s=null)}function _(e){e.target===r&&(c||S())}function v(e){return e.replace(/(["\\])/g,`\\$1`)}function y(e){return ee(e)?e:`<${e.replace(/([\\<>])/g,`\\$1`)}>`}function ee(e){return/^\{[\w\\]+:[^}\s]+\}$/.test(e)}function b(){r?.querySelector(`craft-input, craft-select, craft-button, input, select, button`)?.focus()}async function x(e,t=null){if(await e.updateComplete,r===e){if(await e.show(),C(i,!0),t?.isConnected){t.focus();return}b()}}function S({restoreFocus:e=!1}={}){let t=r,n=i;r=null,s=null,c=!1,n&&C(n,!1),t?.removeEventListener(`craft-after-hide`,_),t?.remove(),e&&n?.focus()}function C(e,t){e&&(e.setAttribute(`aria-controls`,w(f(e))),e.setAttribute(`aria-expanded`,t.toString()),e.removeAttribute(`aria-pressed`))}function w(e){return`${e}-popover`}return{destroy:S,open:l}}function Ci(e,n,r,i,o,s,l){let u=!1,d=0,f=null,p=a({encode:r,flavor:n,htmlSanitizer:s,inlineOnly:i,markdown:``,sanitizeHtml:o});function m(){let t=e.container.querySelector(`[data-button="preview"]`);t&&(t.classList.toggle(`active`,u),t.setAttribute(`aria-pressed`,u.toString()))}function h(){if(e.preview.toggleAttribute(`inert`,!u),u){e.preview.removeAttribute(`aria-hidden`);return}e.preview.setAttribute(`aria-hidden`,`true`)}async function g(a){let m=++d;f&&window.clearTimeout(f),f=window.setTimeout(async()=>{try{p.encode=r,p.flavor=n,p.htmlSanitizer=s,p.inlineOnly=i,p.markdown=a,p.sanitizeHtml=o;let t=await p.post(c().url);u&&m===d&&(e.preview.innerHTML=t.html)}catch{u&&m===d&&(e.preview.textContent=t(`Couldn’t render Markdown preview.`))}},l)}async function _(){if(u=!u,m(),h(),!u){e.showNormalEditMode(),e.focus();return}e.showPreviewMode(),await g(e.getValue())}return h(),{destroy(){f&&=(window.clearTimeout(f),null)},isActive:()=>u,render:g,toggle:_}}function wi(e,n){let r=t=>n=>void e.performAction(t,n),i=[[`Mod+B`,r(`toggleBold`),t(`Bold`)],[`Mod+I`,r(`toggleItalic`),t(`Italic`)],[`Mod+E`,r(`toggleCode`),t(`Code`)],[`Mod+K`,r(`insertLink`),t(`Insert a link`)],[`Mod+Alt+1`,r(`toggleH1`),t(`Heading 1`)],[`Mod+Alt+2`,r(`toggleH2`),t(`Heading 2`)],[`Mod+Alt+3`,r(`toggleH3`),t(`Heading 3`)],[`Mod+Shift+.`,r(`toggleQuote`),t(`Quote`)],[`Mod+Shift+7`,r(`toggleNumberedList`),t(`Numbered list`)],[`Mod+Shift+8`,r(`toggleBulletList`),t(`Bulleted list`)],[`Mod+Shift+9`,r(`toggleTaskList`),t(`Check list`)],[`Mod+]`,()=>e.indentSelection(),t(`Indent`)],[`Mod+[`,()=>e.outdentSelection(),t(`Outdent`)],[`Mod+Shift+P`,()=>void n.toggle(),t(`Show or hide the preview`)]].map(([n,r,i])=>o(n,r,{target:e.textarea,description:i,group:t(`Markdown fields`),stopPropagation:!0}));return()=>i.forEach(({unregister:e})=>e())}function Ti(){let e=`var(--c-input-fill, var(--c-form-control-fill, var(--c-surface-form)))`,t=`var(--c-input-border-color, var(--c-form-control-border-color, var(--c-color-neutral-border-quiet)))`,n=`var(--c-color-neutral-fill-quiet)`,r=`var(--c-color-neutral-on-quiet, var(--c-text-default))`,i=`var(--c-input-text, var(--c-text-default))`;return{name:`craft`,colors:{bgPrimary:e,bgSecondary:e,border:t,code:i,codeBg:n,cursor:i,del:i,h1:i,h2:i,h3:i,link:i,listMarker:i,placeholder:`var(--c-text-quiet)`,primary:r,rawLine:i,selection:`var(--markdown-field-selection-bg, var(--c-color-accent-fill-quiet))`,strong:i,syntax:i,syntaxMarker:i,text:i,textPrimary:i,textSecondary:i,toolbarActive:n,toolbarBg:e,toolbarBorder:t,toolbarHover:n,toolbarIcon:r,em:i,blockquote:i,hr:i},previewColors:{bg:`transparent`,blockquote:i,code:i,codeBg:n,em:i,h1:i,h2:i,h3:i,hr:i,link:i,strong:i,text:i}}}var Ei=`https://www.markdownguide.org/basic-syntax/`;function Di(e){let n=e.toolbar?.buttons?.guide;if(!(n instanceof HTMLButtonElement))return()=>{};let r=t(`Markdown Guide (opens in a new tab)`),i=document.createElement(`a`);return i.className=n.className,i.href=Ei,i.innerHTML=n.innerHTML,i.target=`_blank`,i.title=r,i.rel=`noopener`,i.setAttribute(`aria-label`,r),i.setAttribute(`data-button`,`guide`),n.replaceWith(i),delete e.toolbar.buttons.guide,()=>{i.replaceWith(n),e.toolbar.buttons.guide=n}}var Oi={bold:`<svg overflow="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l32 0 0 320-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l224 0c70.7 0 128-57.3 128-128 0-46.5-24.8-87.3-62-109.7 18.7-22.3 30-51 30-82.3 0-70.7-57.3-128-128-128L32 32zM288 160c0 35.3-28.7 64-64 64l-96 0 0-128 96 0c35.3 0 64 28.7 64 64zM128 416l0-128 128 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-128 0z"/></svg>`,"circle-question":`<svg overflow="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,code:`<svg overflow="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z"/></svg>`,eye:`<svg overflow="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"/></svg>`,h1:`<svg overflow="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 96c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-64 32c-15.8 7.9-22.2 27.1-14.3 42.9s27.1 22.2 42.9 14.3l17.7-8.8 0 236.2-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-288zM64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 128 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-128 0 0-128z"/></svg>`,h2:`<svg overflow="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M96 96c0-17.7-14.3-32-32-32S32 78.3 32 96l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 96 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-96 0 0-128zM368 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l81.1 0c21.5 0 38.9 17.4 38.9 38.9 0 13.9-7.5 26.8-19.6 33.8l-76.3 43.6C347.5 269.7 320 317.1 320 368.5l0 47.5c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-128 0 0-15.5c0-28.4 15.2-54.6 39.9-68.7l76.3-43.6C532.2 237.9 552 203.8 552 166.9 552 110.1 505.9 64 449.1 64L368 64z"/></svg>`,h3:`<svg overflow="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M96 96c0-17.7-14.3-32-32-32S32 78.3 32 96l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 96 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-96 0 0-128zM352 256c0 17.7 14.3 32 32 32l56 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-88 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l88 0c61.9 0 112-50.1 112-112 0-31.3-12.9-59.7-33.6-80 20.7-20.3 33.6-48.7 33.6-80 0-61.9-50.1-112-112-112l-88 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l88 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-56 0c-17.7 0-32 14.3-32 32z"/></svg>`,h4:`<svg overflow="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 96 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-96 0 0-128zm288 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 44.2 35.8 80 80 80l80 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-80 0c-8.8 0-16-7.2-16-16l0-112z"/></svg>`,h5:`<svg overflow="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M96 96c0-17.7-14.3-32-32-32S32 78.3 32 96l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 96 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-96 0 0-128zM352 64c-17.7 0-32 14.3-32 32l0 144c0 17.7 14.3 32 32 32l80 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-80 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l80 0c66.3 0 120-53.7 120-120S498.3 208 432 208l-48 0 0-80 120 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L352 64z"/></svg>`,h6:`<svg overflow="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M32 64c17.7 0 32 14.3 32 32l0 128 96 0 0-128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-96 0 0 128c0 17.7-14.3 32-32 32S0 433.7 0 416L0 96C0 78.3 14.3 64 32 64zm352 64c-17.7 0-32 14.3-32 32l0 53.5c10-3.5 20.8-5.5 32-5.5l32 0c53 0 96 43 96 96l0 48c0 53-43 96-96 96l-32 0c-53 0-96-43-96-96l0-192c0-53 43-96 96-96l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0zM352 304l0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32z"/></svg>`,italic:`<svg overflow="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M128 64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-58.7 0-133.3 320 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l58.7 0 133.3-320-64 0c-17.7 0-32-14.3-32-32z"/></svg>`,link:`<svg overflow="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"/></svg>`,"list-check":`<svg overflow="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M133.8 36.3c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 158 47 153L7 113C-2.3 103.6-2.3 88.4 7 79S31.6 69.7 41 79l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zm0 160c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 318 47 313L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM64 376a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"/></svg>`,"list-ol":`<svg overflow="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 72C0 58.8 10.7 48 24 48l48 0c13.3 0 24 10.7 24 24l0 104 24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-80-24 0C10.7 96 0 85.3 0 72zM30.4 301.2C41.8 292.6 55.7 288 70 288l4.9 0c33.7 0 61.1 27.4 61.1 61.1 0 19.6-9.4 37.9-25.2 49.4l-24 17.5 33.2 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-90.7 0C13.1 464 0 450.9 0 434.7 0 425.3 4.5 416.5 12.1 411l70.5-51.3c3.4-2.5 5.4-6.4 5.4-10.6 0-7.2-5.9-13.1-13.1-13.1L70 336c-3.9 0-7.7 1.3-10.8 3.6L38.4 355.2c-10.6 8-25.6 5.8-33.6-4.8S-1 324.8 9.6 316.8l20.8-15.6zM224 64l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>`,"list-ul":`<svg overflow="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM48 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM96 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/></svg>`,paperclip:`<svg overflow="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M224.6 12.8c56.2-56.2 147.4-56.2 203.6 0s56.2 147.4 0 203.6l-164 164c-34.4 34.4-90.1 34.4-124.5 0s-34.4-90.1 0-124.5L292.5 103.3c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L185 301.3c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l164-164c31.2-31.2 31.2-81.9 0-113.1s-81.9-31.2-113.1 0l-164 164c-53.1 53.1-53.1 139.2 0 192.3s139.2 53.1 192.3 0L428.3 284.3c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L343.4 459.6c-78.1 78.1-204.7 78.1-282.8 0s-78.1-204.7 0-282.8l164-164z"/></svg>`,"quotes-left":`<svg overflow="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z"/></svg>`,strikethrough:`<svg overflow="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M96 157.5C96 88.2 152.2 32 221.5 32L368 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L221.5 96c-34 0-61.5 27.5-61.5 61.5 0 31 23.1 57.2 53.9 61l44.1 5.5 222 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l83.1 0C103 204.6 96 181.8 96 157.5zM349.2 336l65.5 0c.9 6.1 1.4 12.2 1.4 18.5 0 69.3-56.2 125.5-125.5 125.5L144 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l146.5 0c34 0 61.5-27.5 61.5-61.5 0-6.4-1-12.7-2.8-18.5z"/></svg>`,upload:`<svg overflow="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M256 109.3L256 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-210.7-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3zM224 400c44.2 0 80-35.8 80-80l80 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64l80 0c0 44.2 35.8 80 80 80zm144 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>`};function ki(e,t){let n=new Set(e.toolbarButtons),r=new Set(e.uploadFolderId?[`upload`]:[]);e.assetSources.length||n.delete(`asset`);let i=[];for(let e of Ai(t)){let t=e.filter(e=>{let t=e.optionName??e.name;return n.has(t)||r.has(t)});t.length&&(i.length&&i.push(I.separator),i.push(...t))}return i}function Ai(e){return[[Q(I.bold,t(`Bold`),`bold`),Q(I.italic,t(`Italic`),`italic`),Q(I.strikethrough,t(`Strikethrough`),`strikethrough`),Q(I.code,t(`Code`),`code`,void 0,({activeFormats:e})=>e.includes(`code`))],[Q(I.h1,t(`Heading 1`),`h1`),Q(I.h2,t(`Heading 2`),`h2`),Q(I.h3,t(`Heading 3`),`h3`),Q(I.h4,t(`Heading 4`),`h4`),Q(I.h5,t(`Heading 5`),`h5`),Q(I.h6,t(`Heading 6`),`h6`),Q(I.quote,t(`Quote`),`quotes-left`)],[Q(I.bulletList,t(`Bulleted List`),`list-ul`,`unordered-list`),Q(I.orderedList,t(`Numbered List`),`list-ol`,`ordered-list`),Q(I.taskList,t(`Check List`),`list-check`,`check-list`)],[{...ji(`link`,`link`,t(`Link`),({event:t})=>e.openLinkPopover(t),`insertLink`),shortcut:I.link.shortcut},ji(`asset`,`paperclip`,t(`Asset`),e.openAssetSelector),Q(I.upload,t(`Upload File`),`upload`)],[{...ji(`preview`,`eye`,t(`Preview`),e.togglePreview),shortcut:`Mod+Shift+P`},ji(`guide`,`circle-question`,t(`Markdown Guide`),()=>{})]]}function Q(e,t,n,r=e.name,i=e.isActive){return{...e,icon:Oi[n]??e.icon,isActive:i,optionName:r,title:t}}function ji(e,t,n,r,i,a){return{actionId:i,action:r,icon:Oi[t]??``,isActive:a,name:e,title:n}}var Mi=`asset`,Ni=u();function Pi(e,t){if(e)return{batch:!1,enabled:!0,maxSize:2**53-1,onInsertFile:n=>{let r=Array.isArray(n)?n[0]:n;if(!r)throw Error(`No file was selected for upload.`);let[i]=f([r]);return Fi(i,e,t)}}}async function Fi(e,n,r){let i=new d(e,{url:p.url(),parameters:{folderId:n,...r?{siteId:r}:{}}});try{return Ii(e,await i.upload(),r)}catch(e){throw Ni.error(e instanceof Error?e.message:t(`Couldn’t upload file.`)),e}}function Ii(e,n,r){if(!n.assetId)throw Error(n.message||t(`Couldn’t upload file.`));let i=_i(n.filename||e.name),a=`{${Mi}:${n.assetId}@${r}:url}`;return e.type.startsWith(`image/`)?`![${i}](${a})`:`[${i||a}](${a})`}var $=class extends r{constructor(...e){super(...e),this.assetController=null,this.cleanups=[],this.editor=null,this.linkPopoverController=null,this.previewController=null,this.resolvedInputId=null,this.formValue=null,this.updateCharCounter=null,this.assetAnyUploader=!1,this.assetCondition=null,this.assetReferenceElement=null,this.assetSources=[],this.label=null,this.describedBy=null,this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1,this.flavor=`gfm`,this.encode=!1,this.inlineOnly=!1,this.sanitizeHtml=!1,this.htmlSanitizer=null,this.linkAdvancedFields=[],this.linkTypes=[],this.maxHeight=null,this.maxLength=null,this.name=null,this.placeholder=null,this.previewDelay=250,this.rows=8,this.showStats=!1,this.showLinkLabelField=!1,this.toolbarButtons=[],this.showToolbar=!1,this.proportional=!1,this.uploadFolderId=null,this.uploadSiteId=``,this.statsFormatter=e=>`
      <div class="overtype-stat">
        <span>${t(`{num, number} {num, plural, =1{char} other{chars}}`,{num:e.chars})}, ${t(`{num, number} {num, plural, =1{word} other{words}}`,{num:e.words})}, ${t(`{num, number} {num, plural, =1{line} other{lines}}`,{num:e.lines})}</span>
      </div>
      <div class="overtype-stat">${t(`Line`)} ${e.line}, ${t(`Col`)} ${e.column}</div>
    `}get value(){return this.editor?.getValue()??this.formValue??this.textContent??``}set value(e){this.formValue=e,this.editor&&this.editor.getValue()!==e&&this.editor.setValue(e),this.updateCharCounter?.()}connectedCallback(){super.connectedCallback(),this.initializeEditor()}disconnectedCallback(){super.disconnectedCallback(),this.destroy()}initializeEditor(){if(this.editor)return;let e=this.releaseInputIdToTextarea(),t=ki({assetSources:this.assetSources,toolbarButtons:this.toolbarButtons,uploadFolderId:this.uploadFolderId},{openLinkPopover:e=>this.linkPopoverController?.open(e),openAssetSelector:()=>this.assetController?.open(),togglePreview:()=>this.previewController?.toggle()}),[n]=new gi(this,this.editorOptions(e,t));if(!n)return;this.editor=n,this.formValue=n.getValue(),this.editor.preview.classList.add(`markdown-field-preview`);let r=this.addCharCounter(n);this.addTypeIndicator(n);let i=Ci(n,this.flavor,this.encode,this.inlineOnly,this.sanitizeHtml,this.htmlSanitizer,this.previewDelay);this.previewController=i,this.linkPopoverController=Si(n,i,{advancedFields:this.linkAdvancedFields,showLabelField:this.showLinkLabelField,types:this.linkTypes}),this.assetController=bi(n,this.assetAnyUploader?{uploaderId:null}:{},this.assetCondition,this.assetSources,i,()=>this.assetReferenceElement),this.cleanups=[()=>i.destroy(),()=>this.linkPopoverController?.destroy(),...r?[r]:[],Di(n),wi(n,i),Li(n),Ri(n.preview),...n.statsBar?[Ri(n.statsBar)]:[]],this.syncEditorState(),this.syncInitialFormValue(n.textarea.name)}releaseInputIdToTextarea(){return this.resolvedInputId===null?(this.resolvedInputId=this.id,this.resolvedInputId&&(this.id=`${this.resolvedInputId}-editor`),this.resolvedInputId):this.resolvedInputId}editorOptions(e,n){let r={autoResize:!1,dir:`auto`,fontFamily:`var(--markdown-field-font-family)`,fontSize:`var(--markdown-field-font-size, var(--c-text-base))`,lineHeight:`var(--c-leading-normal)`,padding:`var(--c-spacing-md) var(--c-input-spacing-inline)`,labels:{toolbar:t(`Formatting toolbar`)},placeholder:this.placeholder??``,proportional:this.proportional,showStats:this.showStats,statsFormatter:this.statsFormatter,smartLists:!0,spellcheck:!1,textareaProps:this.textareaProps(e),theme:Ti(),toolbar:this.showToolbar&&(n?.length??0)>0,toolbarButtons:n,value:this.value},i=this.disabled||this.readonly?void 0:Pi(this.uploadFolderId,this.uploadSiteId);return i&&(r.fileUpload=i),r}addTypeIndicator(e){if(this.showToolbar||this.proportional)return;let n=document.createElement(`div`);n.className=`markdown-field-type-indicator`,n.setAttribute(`aria-label`,t(`Markdown`)),n.setAttribute(`role`,`img`);let r=document.createElement(`craft-icon`);r.setAttribute(`name`,`markdown`),r.setAttribute(`family`,`brands`),r.setAttribute(`aria-hidden`,`true`),n.append(r),this.footerControls(e).appendChild(n)}addCharCounter(n){if(!this.maxLength)return null;let r=this.maxLength,i=document.createElement(`div`);i.className=`markdown-field-char-counter`,i.setAttribute(`role`,`status`);let a=document.createElement(`span`);a.className=`sr-only`;let o=document.createElement(`span`);o.setAttribute(`aria-hidden`,`true`),i.append(a,o);let s=()=>{let s=r-n.textarea.value.length;a.textContent=t(`Characters left: {chars, number}`,{chars:s}),o.textContent=e(s),i.classList.toggle(`negative-chars-left`,s<0)};return s(),this.updateCharCounter=s,n.textarea.addEventListener(`input`,s),this.footerControls(n).appendChild(i),()=>{n.textarea.removeEventListener(`input`,s),this.updateCharCounter=null}}footerControls(e){let t=e.wrapper.querySelector(`.markdown-field-footer-controls`);return t||(t=document.createElement(`div`),t.className=`markdown-field-footer-controls`,e.wrapper.appendChild(t)),t}textareaProps(e){let t={class:`nicetext code`,rows:this.rows};return e&&(t.id=e),this.name&&(t.name=this.name),this.describedBy&&(t[`aria-describedby`]=this.describedBy),this.maxLength&&(t.maxlength=this.maxLength),this.disabled&&(t.disabled=`disabled`),this.readonly&&(t.readonly=`readonly`),this.required&&(t.required=`required`),this.invalid&&(t[`aria-invalid`]=`true`),t}syncInitialFormValue(e){if(!e)return;let t=this.closest(`form`),n=window.jQuery??window.$;if(!t||!n)return;let r=n(t),i=r.data(`initialSerializedValue`);if(Object(i).constructor!==String)return;let a=r.data(`serializer`),o=a instanceof Function?a():r.serialize();this.serializedWithoutInput(o,e)===i&&r.data(`initialSerializedValue`,o)}serializedWithoutInput(e,t){return e.split(`&`).filter(e=>this.serializedParamName(e)!==t).join(`&`)}serializedParamName(e){let[t=``]=e.split(`=`);return decodeURIComponent(t.replace(/\+/g,`%20`))}destroy(){this.formValue=this.editor?.getValue()??this.formValue;for(let e of this.cleanups)e();this.editor?.destroy(),this.assetController=null,this.cleanups=[],this.editor=null,this.linkPopoverController=null,this.previewController=null}syncEditorState(){if(!this.editor)return;this.label?this.editor.textarea.setAttribute(`aria-label`,this.label):this.editor.textarea.removeAttribute(`aria-label`),this.editor.textarea.name=this.name??``,this.editor.textarea.placeholder=this.placeholder??``;let e=this.editor.wrapper.querySelector(`.overtype-placeholder`);e&&(e.textContent=this.placeholder??``),this.editor.textarea.disabled=this.disabled,this.editor.textarea.readOnly=this.readonly,this.editor.textarea.required=this.required,this.invalid?this.editor.textarea.setAttribute(`aria-invalid`,`true`):this.editor.textarea.removeAttribute(`aria-invalid`),this.editor.wrapper.querySelectorAll(`button`).forEach(e=>e.disabled=this.disabled||this.readonly),this.disabled||this.readonly||!this.showToolbar?this.editor.toolbar?.hide():this.editor.toolbar?.show()}createRenderRoot(){return this}shouldUpdate(){return this.toggleAttribute(`show-toolbar`,this.showToolbar),this.toggleAttribute(`proportional`,this.proportional),this.toggleAttribute(`capped`,!!this.maxHeight),this.maxHeight?this.style.setProperty(`--markdown-field-max-height`,`${this.maxHeight}px`):this.style.removeProperty(`--markdown-field-max-height`),this.syncEditorState(),!1}};s([n({attribute:`asset-any-uploader`,type:Boolean})],$.prototype,`assetAnyUploader`,void 0),s([n({attribute:`asset-condition`,type:Object})],$.prototype,`assetCondition`,void 0),s([n({attribute:`asset-reference-element`,type:Object})],$.prototype,`assetReferenceElement`,void 0),s([n({attribute:`asset-sources`,type:Array})],$.prototype,`assetSources`,void 0),s([n()],$.prototype,`label`,void 0),s([n({attribute:`described-by`})],$.prototype,`describedBy`,void 0),s([n({type:Boolean})],$.prototype,`disabled`,void 0),s([n({type:Boolean})],$.prototype,`readonly`,void 0),s([n({type:Boolean})],$.prototype,`required`,void 0),s([n({attribute:`aria-invalid`,type:Boolean})],$.prototype,`invalid`,void 0),s([n()],$.prototype,`flavor`,void 0),s([n({type:Boolean})],$.prototype,`encode`,void 0),s([n({attribute:`inline-only`,type:Boolean})],$.prototype,`inlineOnly`,void 0),s([n({attribute:`sanitize-html`,type:Boolean})],$.prototype,`sanitizeHtml`,void 0),s([n({attribute:`html-sanitizer`})],$.prototype,`htmlSanitizer`,void 0),s([n({attribute:`link-advanced-fields`,type:Array})],$.prototype,`linkAdvancedFields`,void 0),s([n({attribute:`link-types`,type:Array})],$.prototype,`linkTypes`,void 0),s([n({attribute:`max-height`,type:Number})],$.prototype,`maxHeight`,void 0),s([n({attribute:`max-length`,type:Number})],$.prototype,`maxLength`,void 0),s([n()],$.prototype,`name`,void 0),s([n()],$.prototype,`placeholder`,void 0),s([n({attribute:`preview-delay`,type:Number})],$.prototype,`previewDelay`,void 0),s([n({type:Number})],$.prototype,`rows`,void 0),s([n({attribute:`show-stats`,type:Boolean})],$.prototype,`showStats`,void 0),s([n({attribute:`show-link-label-field`,type:Boolean})],$.prototype,`showLinkLabelField`,void 0),s([n({attribute:`toolbar-buttons`,type:Array})],$.prototype,`toolbarButtons`,void 0),s([n({attribute:`show-toolbar`,type:Boolean})],$.prototype,`showToolbar`,void 0),s([n({type:Boolean})],$.prototype,`proportional`,void 0),s([n({attribute:`upload-folder-id`,type:Number})],$.prototype,`uploadFolderId`,void 0),s([n({attribute:`upload-site-id`})],$.prototype,`uploadSiteId`,void 0),$=s([i(`craft-markdown-field`)],$);function Li(e){let t=e,n=()=>{document.activeElement===e.textarea&&!e.options.showActiveLineRaw&&clearTimeout(t._selectionTimeout)};return document.addEventListener(`selectionchange`,n),()=>document.removeEventListener(`selectionchange`,n)}function Ri(e){let t=Object.getOwnPropertyDescriptor(Element.prototype,`innerHTML`);return Object.defineProperty(e,"innerHTML",{configurable:!0,get:()=>t.get.call(e),set:t=>{let n=document.createElement(`template`);n.innerHTML=t,zi(e,n.content)}}),()=>{delete e.innerHTML}}function zi(e,t){let n=[...e.childNodes],r=[...t.childNodes];r.forEach((t,r)=>{let i=n[r];if(!i)e.appendChild(t);else if(i.nodeType!==t.nodeType||i.nodeName!==t.nodeName)e.replaceChild(t,i);else if(i instanceof Element){let e=t;for(let t of i.getAttributeNames())e.hasAttribute(t)||i.removeAttribute(t);for(let{name:t,value:n}of e.attributes)i.getAttribute(t)!==n&&i.setAttribute(t,n);zi(i,e)}else i.nodeValue!==t.nodeValue&&(i.nodeValue=t.nodeValue)}),n.slice(r.length).forEach(e=>e.remove())}var Bi=$;export{Bi as t};