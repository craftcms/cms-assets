const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./bg-BG-BSOJu8wp.js","./bg-CyDc90Cg.js","./bg-tT2-9j0y.js","./cs-CZ-BXYisR25.js","./cs-BWxTtRvu.js","./cs-BWWtw9FR.js","./de-DE-CqA9yOdY.js","./de-B-RsGPDH.js","./de-D2KzmuNN.js","./en-AU-ClGzkm9N.js","./en-BAp3CEXj.js","./en-GB-ClGzkm9N.js","./en-US-ClGzkm9N.js","./en-Bn2liEJW.js","./es-ES-pYasBR0F.js","./es-AljmSQ242.js","./es-CgGkXEZk.js","./fr-FR-BFPCNFnr.js","./fr-B_xQUJzD.js","./fr-BE-BFPCNFnr.js","./fr-BatdFrY1.js","./hu-HU-CgHBHfiG.js","./hu-BXZRjXNL.js","./hu-BGJUkRn0.js","./it-IT-DXWt8Y3M.js","./it-YWOHXwO3.js","./it-BbZB0zCO.js","./nl-BE-CN9u7Cp2.js","./nl-NcaH_H47.js","./nl-NL-CN9u7Cp2.js","./nl-CubSULoy.js","./pl-PL-D0K_dWml.js","./pl-B3WIPjRj.js","./pl-BhJlmndU.js","./ro-RO-BXVNXH1J.js","./ro-BH8II-L7.js","./ro-75jeTe0N.js","./ru-RU-BpGy32BK.js","./ru-BfJB39nV.js","./ru-DU7uFj2i.js","./sk-SK-wewEOZGv.js","./sk-ByGJf4W9.js","./sk-cN9_UHno.js","./tr-TR-D1nJ_iYG.js","./tr-BoMERIKA.js","./tr-DuiqIpvR.js","./uk-UA-DHqiIGvL.js","./uk-MX8iTJHI.js","./uk-Cm-Wcqws.js","./bg-BG-BztIKams.js","./bg-BPUqFt1H.js","./bg-CLv3tqUg.js","./cs-CZ-VPjqqYsZ.js","./cs-AO9lYsOu.js","./cs-B7yAvqdQ.js","./de-DE-CsSmh1gZ.js","./de-Pg_tsxAM.js","./de-kP5ksqlV.js","./en-AU-3urcHPzk.js","./en-fMoNIH2J.js","./en-GB-3urcHPzk.js","./en-US-3urcHPzk.js","./en-CqZ6PnT7.js","./es-ES-BbUihx_Q.js","./es-DKHVE_l0.js","./es-CqwOJyIS.js","./fr-FR-CuiHGLXU.js","./fr-DUdkdF0c.js","./fr-BE-CuiHGLXU.js","./fr-DDoohrFe.js","./hu-HU-CsgTXklM.js","./hu-Bgbro8Lj.js","./hu-mlQa-ass.js","./id-ID-DmQHtDR1.js","./id-u5HD4jpB.js","./id-wVaUF8IY.js","./it-IT-UwtN86gq.js","./it-ByY8kQ-u.js","./it-Cau1XULR.js","./nl-BE-BWsuTFhd.js","./nl-CvaqzqpV.js","./nl-NL-BWsuTFhd.js","./nl-AKV00b4f.js","./pl-PL-DNBiW1Dr.js","./pl-DNBZxExJ.js","./pl-BYkVljz3.js","./ro-RO-f1xYkV2I.js","./ro-DGtcO-ss.js","./ro-ocFYhLc_.js","./ru-RU-CR2XPZpu.js","./ru-BJo0ABxJ.js","./ru-DZLJ_F1W.js","./sk-SK-zTlM1iZC.js","./sk-ro0cjqj8.js","./sk-DV9gBcF9.js","./uk-UA-Db28XQdn.js","./uk-CTKb9UGx.js","./uk-b3alyY__.js"])))=>i.map(i=>d[i]);
import{a as e,t}from"./rolldown-runtime-CNC7AqOf.js";import{n}from"./translate.ts-CvxvI-3D.js";import{t as r}from"./progress.ts-ObFNnr9Y.js";import{a as i,d as a,f as o,i as s,n as c,o as l,p as u,r as d,s as f,t as p,u as m}from"./decorators-lVTfPMaS.js";import{n as h,t as g}from"./query-Df4-SAIv.js";import{a as _,i as v,n as y,t as b}from"./external-links.ts-C0AAFWCZ.js";import{a as x,i as S,n as C,o as w,r as T}from"./Config.ts-CMTyoefP.js";import"./http.ts-BviJ__aV.js";import{a as E}from"./apiClient.ts-Cq1CcJP0.js";function ee(e){return(t,n)=>{let{slot:r,selector:i}=e??{},a=`slot`+(r?`[name=${r}]`:`:not([name])`);return h(t,n,{get(){let t=(this.renderRoot?.querySelector(a))?.assignedElements(e)??[];return i===void 0?t:t.filter((e=>e.matches(i)))}})}}var D={Idle:`idle`,Loading:`loading`,Success:`success`,Error:`error`},te=o`
  .a11y-error {
    position: relative;
    outline: 2px solid var(--c-color-danger-border-normal) !important;
    background-color: rgba(255, 0, 0, 0.1) !important;

    &:after {
      content: '!';
      position: absolute;
      display: inline-flex;
      font-size: calc(11rem / 16);
      padding-block: 0.125em 0.25em;
      padding-inline: 0.5em;
      inset-block-start: -2px;
      inset-inline-start: 0;
      background: var(--c-color-danger-bg-emphasis);
      color: white;
      transform: translateX(-100%);
    }
  }
`,ne=e=>{class t extends e{constructor(...e){super(...e),this.shortcut=null}get shortcutKeys(){let e=this.shortcut;if(typeof e==`string`&&e.trim().startsWith(`{`))try{e=JSON.parse(e)}catch{}return e?typeof e==`string`?{key:e,alt:!1,shift:!1}:{key:e.key,alt:e.alt??!1,shift:e.shift??!1}:null}get shortcutAriaKeys(){let e=this.shortcutKeys;return e?[/mac|iphone|ipad|ipod/i.test(navigator.platform)?`Meta`:`Control`,...e.alt?[`Alt`]:[],...e.shift?[`Shift`]:[],e.key.length===1?e.key.toUpperCase():e.key].join(`+`):null}}return r([c()],t.prototype,`shortcut`,void 0),t},re=o`
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
`;o`
  :host([data-color='red']),
  [data-color='red'] {
    --c-color-fill-quiet: var(--c-color-red-fill-quiet);
    --c-color-border-quiet: var(--c-color-red-border-quiet);
    --c-color-on-quiet: var(--c-color-red-on-quiet);
    --c-color-fill-normal: var(--c-color-red-fill-normal);
    --c-color-border-normal: var(--c-color-red-border-normal);
    --c-color-on-normal: var(--c-color-red-on-normal);
    --c-color-fill-loud: var(--c-color-red-fill-loud);
    --c-color-border-loud: var(--c-color-red-border-loud);
    --c-color-on-loud: var(--c-color-red-on-loud);
  }

  :host([data-color='orange']),
  [data-color='orange'] {
    --c-color-fill-quiet: var(--c-color-orange-fill-quiet);
    --c-color-border-quiet: var(--c-color-orange-border-quiet);
    --c-color-on-quiet: var(--c-color-orange-on-quiet);
    --c-color-fill-normal: var(--c-color-orange-fill-normal);
    --c-color-border-normal: var(--c-color-orange-border-normal);
    --c-color-on-normal: var(--c-color-orange-on-normal);
    --c-color-fill-loud: var(--c-color-orange-fill-loud);
    --c-color-border-loud: var(--c-color-orange-border-loud);
    --c-color-on-loud: var(--c-color-orange-on-loud);
  }

  :host([data-color='amber']),
  [data-color='amber'] {
    --c-color-fill-quiet: var(--c-color-amber-fill-quiet);
    --c-color-border-quiet: var(--c-color-amber-border-quiet);
    --c-color-on-quiet: var(--c-color-amber-on-quiet);
    --c-color-fill-normal: var(--c-color-amber-fill-normal);
    --c-color-border-normal: var(--c-color-amber-border-normal);
    --c-color-on-normal: var(--c-color-amber-on-normal);
    --c-color-fill-loud: var(--c-color-amber-fill-loud);
    --c-color-border-loud: var(--c-color-amber-border-loud);
    --c-color-on-loud: var(--c-color-amber-on-loud);
  }

  :host([data-color='yellow']),
  [data-color='yellow'] {
    --c-color-fill-quiet: var(--c-color-yellow-fill-quiet);
    --c-color-border-quiet: var(--c-color-yellow-border-quiet);
    --c-color-on-quiet: var(--c-color-yellow-on-quiet);
    --c-color-fill-normal: var(--c-color-yellow-fill-normal);
    --c-color-border-normal: var(--c-color-yellow-border-normal);
    --c-color-on-normal: var(--c-color-yellow-on-normal);
    --c-color-fill-loud: var(--c-color-yellow-fill-loud);
    --c-color-border-loud: var(--c-color-yellow-border-loud);
    --c-color-on-loud: var(--c-color-yellow-on-loud);
  }

  :host([data-color='lime']),
  [data-color='lime'] {
    --c-color-fill-quiet: var(--c-color-lime-fill-quiet);
    --c-color-border-quiet: var(--c-color-lime-border-quiet);
    --c-color-on-quiet: var(--c-color-lime-on-quiet);
    --c-color-fill-normal: var(--c-color-lime-fill-normal);
    --c-color-border-normal: var(--c-color-lime-border-normal);
    --c-color-on-normal: var(--c-color-lime-on-normal);
    --c-color-fill-loud: var(--c-color-lime-fill-loud);
    --c-color-border-loud: var(--c-color-lime-border-loud);
    --c-color-on-loud: var(--c-color-lime-on-loud);
  }

  :host([data-color='green']),
  [data-color='green'] {
    --c-color-fill-quiet: var(--c-color-green-fill-quiet);
    --c-color-border-quiet: var(--c-color-green-border-quiet);
    --c-color-on-quiet: var(--c-color-green-on-quiet);
    --c-color-fill-normal: var(--c-color-green-fill-normal);
    --c-color-border-normal: var(--c-color-green-border-normal);
    --c-color-on-normal: var(--c-color-green-on-normal);
    --c-color-fill-loud: var(--c-color-green-fill-loud);
    --c-color-border-loud: var(--c-color-green-border-loud);
    --c-color-on-loud: var(--c-color-green-on-loud);
  }

  :host([data-color='emerald']),
  [data-color='emerald'] {
    --c-color-fill-quiet: var(--c-color-emerald-fill-quiet);
    --c-color-border-quiet: var(--c-color-emerald-border-quiet);
    --c-color-on-quiet: var(--c-color-emerald-on-quiet);
    --c-color-fill-normal: var(--c-color-emerald-fill-normal);
    --c-color-border-normal: var(--c-color-emerald-border-normal);
    --c-color-on-normal: var(--c-color-emerald-on-normal);
    --c-color-fill-loud: var(--c-color-emerald-fill-loud);
    --c-color-border-loud: var(--c-color-emerald-border-loud);
    --c-color-on-loud: var(--c-color-emerald-on-loud);
  }

  :host([data-color='teal']),
  [data-color='teal'] {
    --c-color-fill-quiet: var(--c-color-teal-fill-quiet);
    --c-color-border-quiet: var(--c-color-teal-border-quiet);
    --c-color-on-quiet: var(--c-color-teal-on-quiet);
    --c-color-fill-normal: var(--c-color-teal-fill-normal);
    --c-color-border-normal: var(--c-color-teal-border-normal);
    --c-color-on-normal: var(--c-color-teal-on-normal);
    --c-color-fill-loud: var(--c-color-teal-fill-loud);
    --c-color-border-loud: var(--c-color-teal-border-loud);
    --c-color-on-loud: var(--c-color-teal-on-loud);
  }

  :host([data-color='cyan']),
  [data-color='cyan'] {
    --c-color-fill-quiet: var(--c-color-cyan-fill-quiet);
    --c-color-border-quiet: var(--c-color-cyan-border-quiet);
    --c-color-on-quiet: var(--c-color-cyan-on-quiet);
    --c-color-fill-normal: var(--c-color-cyan-fill-normal);
    --c-color-border-normal: var(--c-color-cyan-border-normal);
    --c-color-on-normal: var(--c-color-cyan-on-normal);
    --c-color-fill-loud: var(--c-color-cyan-fill-loud);
    --c-color-border-loud: var(--c-color-cyan-border-loud);
    --c-color-on-loud: var(--c-color-cyan-on-loud);
  }

  :host([data-color='sky']),
  [data-color='sky'] {
    --c-color-fill-quiet: var(--c-color-sky-fill-quiet);
    --c-color-border-quiet: var(--c-color-sky-border-quiet);
    --c-color-on-quiet: var(--c-color-sky-on-quiet);
    --c-color-fill-normal: var(--c-color-sky-fill-normal);
    --c-color-border-normal: var(--c-color-sky-border-normal);
    --c-color-on-normal: var(--c-color-sky-on-normal);
    --c-color-fill-loud: var(--c-color-sky-fill-loud);
    --c-color-border-loud: var(--c-color-sky-border-loud);
    --c-color-on-loud: var(--c-color-sky-on-loud);
  }

  :host([data-color='blue']),
  [data-color='blue'] {
    --c-color-fill-quiet: var(--c-color-blue-fill-quiet);
    --c-color-border-quiet: var(--c-color-blue-border-quiet);
    --c-color-on-quiet: var(--c-color-blue-on-quiet);
    --c-color-fill-normal: var(--c-color-blue-fill-normal);
    --c-color-border-normal: var(--c-color-blue-border-normal);
    --c-color-on-normal: var(--c-color-blue-on-normal);
    --c-color-fill-loud: var(--c-color-blue-fill-loud);
    --c-color-border-loud: var(--c-color-blue-border-loud);
    --c-color-on-loud: var(--c-color-blue-on-loud);
  }

  :host([data-color='indigo']),
  [data-color='indigo'] {
    --c-color-fill-quiet: var(--c-color-indigo-fill-quiet);
    --c-color-border-quiet: var(--c-color-indigo-border-quiet);
    --c-color-on-quiet: var(--c-color-indigo-on-quiet);
    --c-color-fill-normal: var(--c-color-indigo-fill-normal);
    --c-color-border-normal: var(--c-color-indigo-border-normal);
    --c-color-on-normal: var(--c-color-indigo-on-normal);
    --c-color-fill-loud: var(--c-color-indigo-fill-loud);
    --c-color-border-loud: var(--c-color-indigo-border-loud);
    --c-color-on-loud: var(--c-color-indigo-on-loud);
  }

  :host([data-color='violet']),
  [data-color='violet'] {
    --c-color-fill-quiet: var(--c-color-violet-fill-quiet);
    --c-color-border-quiet: var(--c-color-violet-border-quiet);
    --c-color-on-quiet: var(--c-color-violet-on-quiet);
    --c-color-fill-normal: var(--c-color-violet-fill-normal);
    --c-color-border-normal: var(--c-color-violet-border-normal);
    --c-color-on-normal: var(--c-color-violet-on-normal);
    --c-color-fill-loud: var(--c-color-violet-fill-loud);
    --c-color-border-loud: var(--c-color-violet-border-loud);
    --c-color-on-loud: var(--c-color-violet-on-loud);
  }

  :host([data-color='purple']),
  [data-color='purple'] {
    --c-color-fill-quiet: var(--c-color-purple-fill-quiet);
    --c-color-border-quiet: var(--c-color-purple-border-quiet);
    --c-color-on-quiet: var(--c-color-purple-on-quiet);
    --c-color-fill-normal: var(--c-color-purple-fill-normal);
    --c-color-border-normal: var(--c-color-purple-border-normal);
    --c-color-on-normal: var(--c-color-purple-on-normal);
    --c-color-fill-loud: var(--c-color-purple-fill-loud);
    --c-color-border-loud: var(--c-color-purple-border-loud);
    --c-color-on-loud: var(--c-color-purple-on-loud);
  }

  :host([data-color='fuchsia']),
  [data-color='fuchsia'] {
    --c-color-fill-quiet: var(--c-color-fuchsia-fill-quiet);
    --c-color-border-quiet: var(--c-color-fuchsia-border-quiet);
    --c-color-on-quiet: var(--c-color-fuchsia-on-quiet);
    --c-color-fill-normal: var(--c-color-fuchsia-fill-normal);
    --c-color-border-normal: var(--c-color-fuchsia-border-normal);
    --c-color-on-normal: var(--c-color-fuchsia-on-normal);
    --c-color-fill-loud: var(--c-color-fuchsia-fill-loud);
    --c-color-border-loud: var(--c-color-fuchsia-border-loud);
    --c-color-on-loud: var(--c-color-fuchsia-on-loud);
  }

  :host([data-color='pink']),
  [data-color='pink'] {
    --c-color-fill-quiet: var(--c-color-pink-fill-quiet);
    --c-color-border-quiet: var(--c-color-pink-border-quiet);
    --c-color-on-quiet: var(--c-color-pink-on-quiet);
    --c-color-fill-normal: var(--c-color-pink-fill-normal);
    --c-color-border-normal: var(--c-color-pink-border-normal);
    --c-color-on-normal: var(--c-color-pink-on-normal);
    --c-color-fill-loud: var(--c-color-pink-fill-loud);
    --c-color-border-loud: var(--c-color-pink-border-loud);
    --c-color-on-loud: var(--c-color-pink-on-loud);
  }

  :host([data-color='rose']),
  [data-color='rose'] {
    --c-color-fill-quiet: var(--c-color-rose-fill-quiet);
    --c-color-border-quiet: var(--c-color-rose-border-quiet);
    --c-color-on-quiet: var(--c-color-rose-on-quiet);
    --c-color-fill-normal: var(--c-color-rose-fill-normal);
    --c-color-border-normal: var(--c-color-rose-border-normal);
    --c-color-on-normal: var(--c-color-rose-on-normal);
    --c-color-fill-loud: var(--c-color-rose-fill-loud);
    --c-color-border-loud: var(--c-color-rose-border-loud);
    --c-color-on-loud: var(--c-color-rose-on-loud);
  }

  :host([data-color='white']),
  [data-color='white'] {
    --c-color-fill-quiet: var(--c-color-white-fill-quiet);
    --c-color-border-quiet: var(--c-color-white-border-quiet);
    --c-color-on-quiet: var(--c-color-white-on-quiet);
    --c-color-fill-normal: var(--c-color-white-fill-normal);
    --c-color-border-normal: var(--c-color-white-border-normal);
    --c-color-on-normal: var(--c-color-white-on-normal);
    --c-color-fill-loud: var(--c-color-white-fill-loud);
    --c-color-border-loud: var(--c-color-white-border-loud);
    --c-color-on-loud: var(--c-color-white-on-loud);
  }

  :host([data-color='gray']),
  [data-color='gray'] {
    --c-color-fill-quiet: var(--c-color-gray-fill-quiet);
    --c-color-border-quiet: var(--c-color-gray-border-quiet);
    --c-color-on-quiet: var(--c-color-gray-on-quiet);
    --c-color-fill-normal: var(--c-color-gray-fill-normal);
    --c-color-border-normal: var(--c-color-gray-border-normal);
    --c-color-on-normal: var(--c-color-gray-on-normal);
    --c-color-fill-loud: var(--c-color-gray-fill-loud);
    --c-color-border-loud: var(--c-color-gray-border-loud);
    --c-color-on-loud: var(--c-color-gray-on-loud);
  }

  :host([data-color='black']),
  [data-color='black'] {
    --c-color-fill-quiet: var(--c-color-black-fill-quiet);
    --c-color-border-quiet: var(--c-color-black-border-quiet);
    --c-color-on-quiet: var(--c-color-black-on-quiet);
    --c-color-fill-normal: var(--c-color-black-fill-normal);
    --c-color-border-normal: var(--c-color-black-border-normal);
    --c-color-on-normal: var(--c-color-black-on-normal);
    --c-color-fill-loud: var(--c-color-black-fill-loud);
    --c-color-border-loud: var(--c-color-black-border-loud);
    --c-color-on-loud: var(--c-color-black-on-loud);
  }

  :host([data-color='slate']),
  [data-color='slate'] {
    --c-color-fill-quiet: var(--c-color-slate-fill-quiet);
    --c-color-border-quiet: var(--c-color-slate-border-quiet);
    --c-color-on-quiet: var(--c-color-slate-on-quiet);
    --c-color-fill-normal: var(--c-color-slate-fill-normal);
    --c-color-border-normal: var(--c-color-slate-border-normal);
    --c-color-on-normal: var(--c-color-slate-on-normal);
    --c-color-fill-loud: var(--c-color-slate-fill-loud);
    --c-color-border-loud: var(--c-color-slate-border-loud);
    --c-color-on-loud: var(--c-color-slate-on-loud);
  }

  :host([data-color='neutral']),
  [data-color='neutral'] {
    --c-color-fill-quiet: var(--c-color-neutral-fill-quiet);
    --c-color-border-quiet: var(--c-color-neutral-border-quiet);
    --c-color-on-quiet: var(--c-color-neutral-on-quiet);
    --c-color-fill-normal: var(--c-color-neutral-fill-normal);
    --c-color-border-normal: var(--c-color-neutral-border-normal);
    --c-color-on-normal: var(--c-color-neutral-on-normal);
    --c-color-fill-loud: var(--c-color-neutral-fill-loud);
    --c-color-border-loud: var(--c-color-neutral-border-loud);
    --c-color-on-loud: var(--c-color-neutral-on-loud);
  }

  :host([data-color='accent']),
  [data-color='accent'] {
    --c-color-fill-quiet: var(--c-color-accent-fill-quiet);
    --c-color-border-quiet: var(--c-color-accent-border-quiet);
    --c-color-on-quiet: var(--c-color-accent-on-quiet);
    --c-color-fill-normal: var(--c-color-accent-fill-normal);
    --c-color-border-normal: var(--c-color-accent-border-normal);
    --c-color-on-normal: var(--c-color-accent-on-normal);
    --c-color-fill-loud: var(--c-color-accent-fill-loud);
    --c-color-border-loud: var(--c-color-accent-border-loud);
    --c-color-on-loud: var(--c-color-accent-on-loud);
  }

  :host([data-color='info']),
  [data-color='info'] {
    --c-color-fill-quiet: var(--c-color-info-fill-quiet);
    --c-color-border-quiet: var(--c-color-info-border-quiet);
    --c-color-on-quiet: var(--c-color-info-on-quiet);
    --c-color-fill-normal: var(--c-color-info-fill-normal);
    --c-color-border-normal: var(--c-color-info-border-normal);
    --c-color-on-normal: var(--c-color-info-on-normal);
    --c-color-fill-loud: var(--c-color-info-fill-loud);
    --c-color-border-loud: var(--c-color-info-border-loud);
    --c-color-on-loud: var(--c-color-info-on-loud);
  }

  :host([data-color='success']),
  [data-color='success'] {
    --c-color-fill-quiet: var(--c-color-success-fill-quiet);
    --c-color-border-quiet: var(--c-color-success-border-quiet);
    --c-color-on-quiet: var(--c-color-success-on-quiet);
    --c-color-fill-normal: var(--c-color-success-fill-normal);
    --c-color-border-normal: var(--c-color-success-border-normal);
    --c-color-on-normal: var(--c-color-success-on-normal);
    --c-color-fill-loud: var(--c-color-success-fill-loud);
    --c-color-border-loud: var(--c-color-success-border-loud);
    --c-color-on-loud: var(--c-color-success-on-loud);
  }

  :host([data-color='warning']),
  [data-color='warning'] {
    --c-color-fill-quiet: var(--c-color-warning-fill-quiet);
    --c-color-border-quiet: var(--c-color-warning-border-quiet);
    --c-color-on-quiet: var(--c-color-warning-on-quiet);
    --c-color-fill-normal: var(--c-color-warning-fill-normal);
    --c-color-border-normal: var(--c-color-warning-border-normal);
    --c-color-on-normal: var(--c-color-warning-on-normal);
    --c-color-fill-loud: var(--c-color-warning-fill-loud);
    --c-color-border-loud: var(--c-color-warning-border-loud);
    --c-color-on-loud: var(--c-color-warning-on-loud);
  }

  :host([data-color='danger']),
  [data-color='danger'] {
    --c-color-fill-quiet: var(--c-color-danger-fill-quiet);
    --c-color-border-quiet: var(--c-color-danger-border-quiet);
    --c-color-on-quiet: var(--c-color-danger-on-quiet);
    --c-color-fill-normal: var(--c-color-danger-fill-normal);
    --c-color-border-normal: var(--c-color-danger-border-normal);
    --c-color-on-normal: var(--c-color-danger-on-normal);
    --c-color-fill-loud: var(--c-color-danger-fill-loud);
    --c-color-border-loud: var(--c-color-danger-border-loud);
    --c-color-on-loud: var(--c-color-danger-on-loud);
  }
`;var ie=o`
  :host([variant~='neutral']),
  [data-variant~='neutral'] {
    --c-color-fill-quiet: var(--c-color-neutral-fill-quiet);
    --c-color-border-quiet: var(--c-color-neutral-border-quiet);
    --c-color-on-quiet: var(--c-color-neutral-on-quiet);
    --c-color-fill-normal: var(--c-color-neutral-fill-normal);
    --c-color-border-normal: var(--c-color-neutral-border-normal);
    --c-color-on-normal: var(--c-color-neutral-on-normal);
    --c-color-fill-loud: var(--c-color-neutral-fill-loud);
    --c-color-border-loud: var(--c-color-neutral-border-loud);
    --c-color-on-loud: var(--c-color-neutral-on-loud);
  }

  :host([variant~='accent']),
  [data-variant~='accent'] {
    --c-color-fill-quiet: var(--c-color-accent-fill-quiet);
    --c-color-border-quiet: var(--c-color-accent-border-quiet);
    --c-color-on-quiet: var(--c-color-accent-on-quiet);
    --c-color-fill-normal: var(--c-color-accent-fill-normal);
    --c-color-border-normal: var(--c-color-accent-border-normal);
    --c-color-on-normal: var(--c-color-accent-on-normal);
    --c-color-fill-loud: var(--c-color-accent-fill-loud);
    --c-color-border-loud: var(--c-color-accent-border-loud);
    --c-color-on-loud: var(--c-color-accent-on-loud);
  }

  :host([variant~='info']),
  [data-variant~='info'] {
    --c-color-fill-quiet: var(--c-color-info-fill-quiet);
    --c-color-border-quiet: var(--c-color-info-border-quiet);
    --c-color-on-quiet: var(--c-color-info-on-quiet);
    --c-color-fill-normal: var(--c-color-info-fill-normal);
    --c-color-border-normal: var(--c-color-info-border-normal);
    --c-color-on-normal: var(--c-color-info-on-normal);
    --c-color-fill-loud: var(--c-color-info-fill-loud);
    --c-color-border-loud: var(--c-color-info-border-loud);
    --c-color-on-loud: var(--c-color-info-on-loud);
  }

  :host([variant~='success']),
  [data-variant~='success'] {
    --c-color-fill-quiet: var(--c-color-success-fill-quiet);
    --c-color-border-quiet: var(--c-color-success-border-quiet);
    --c-color-on-quiet: var(--c-color-success-on-quiet);
    --c-color-fill-normal: var(--c-color-success-fill-normal);
    --c-color-border-normal: var(--c-color-success-border-normal);
    --c-color-on-normal: var(--c-color-success-on-normal);
    --c-color-fill-loud: var(--c-color-success-fill-loud);
    --c-color-border-loud: var(--c-color-success-border-loud);
    --c-color-on-loud: var(--c-color-success-on-loud);
  }

  :host([variant~='warning']),
  [data-variant~='warning'] {
    --c-color-fill-quiet: var(--c-color-warning-fill-quiet);
    --c-color-border-quiet: var(--c-color-warning-border-quiet);
    --c-color-on-quiet: var(--c-color-warning-on-quiet);
    --c-color-fill-normal: var(--c-color-warning-fill-normal);
    --c-color-border-normal: var(--c-color-warning-border-normal);
    --c-color-on-normal: var(--c-color-warning-on-normal);
    --c-color-fill-loud: var(--c-color-warning-fill-loud);
    --c-color-border-loud: var(--c-color-warning-border-loud);
    --c-color-on-loud: var(--c-color-warning-on-loud);
  }

  :host([variant~='danger']),
  [data-variant~='danger'] {
    --c-color-fill-quiet: var(--c-color-danger-fill-quiet);
    --c-color-border-quiet: var(--c-color-danger-border-quiet);
    --c-color-on-quiet: var(--c-color-danger-on-quiet);
    --c-color-fill-normal: var(--c-color-danger-fill-normal);
    --c-color-border-normal: var(--c-color-danger-border-normal);
    --c-color-on-normal: var(--c-color-danger-on-normal);
    --c-color-fill-loud: var(--c-color-danger-fill-loud);
    --c-color-border-loud: var(--c-color-danger-border-loud);
    --c-color-on-loud: var(--c-color-danger-on-loud);
  }
`,ae={Neutral:`neutral`,Success:`success`,Warning:`warning`,Danger:`danger`,Info:`info`},oe=Object.values(ae),se=class{constructor(e,t={}){this.host=e,this.options=t,this.observer=new MutationObserver(()=>{this.options.onChange?.(),this.host.requestUpdate()}),e.addController(this)}hostConnected(){this.options.onChange?.(),this.observer.observe(this.host,{childList:!0,subtree:!0,characterData:this.options.characterData??!1,attributes:!0,attributeFilter:[`slot`,...this.options.attributeFilter??[]]})}hostDisconnected(){this.observer.disconnect()}};function ce(e,...t){return Array.from(e.children).some(e=>t.includes(e.slot))}var le=o`
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
`,ue=class extends d{constructor(){super(),this.alt=!1,this.shift=!1,this.os=`Unknown`,this.os=this.detectOS()}connectedCallback(){super.connectedCallback(),this.os===`Unknown`&&(this.os=this.detectOS())}detectOS(){let e=navigator.platform.toLowerCase();return e.includes(`mac`)||/iphone|ipad|ipod/.test(e)?`Mac`:e.includes(`win`)?`Windows`:e.includes(`linux`)?`Linux`:`Unknown`}modifierKeys(){return this.os===`Mac`?[...this.alt?[{label:`⌥`,name:`Option`}]:[],...this.shift?[{label:`⇧`,name:`Shift`}]:[],{label:`⌘`,name:`Command`}]:[`Ctrl`,...this.alt?[`Alt`]:[],...this.shift?[`Shift`]:[]].map(e=>({label:e,name:e}))}render(){return m`<span class="shortcut"
      >${this.modifierKeys().map(e=>e.label===e.name?m`<kbd class="shortcut__key">${e.label}</kbd>`:m`<kbd class="shortcut__key"
              ><span aria-hidden="true">${e.label}</span
              ><span class="cp-visually-hidden">${e.name}</span></kbd
            >`)}<kbd class="shortcut__key"><slot></slot></kbd
    ></span>`}};ue.styles=[le,o`
      :host {
        display: inline-flex;
      }

      .shortcut {
        display: inline-flex;
        gap: 0.25em;
        font-size: 0.9em;
      }

      .shortcut__key {
        padding-block: 0;
        padding-inline: var(--c-spacing-sm);
        font: inherit;
        background-color: var(--c-color-neutral-fill-quiet);
        border: 1px solid var(--c-color-neutral-border-quiet);
        border-radius: var(--c-radius-sm);
        box-shadow: var(--c-shortcut-shadow, var(--c-shadow-sm));
      }
    `],r([c({type:Boolean})],ue.prototype,`alt`,void 0),r([c({type:Boolean})],ue.prototype,`shift`,void 0),r([c()],ue.prototype,`os`,void 0),customElements.get(`craft-shortcut`)||customElements.define(`craft-shortcut`,ue);var{I:de}=f,fe=e=>e===null||typeof e!=`object`&&typeof e!=`function`,pe=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,me=e=>e.strings===void 0,he=()=>document.createComment(``),ge=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new de(r.insertBefore(he(),i),r.insertBefore(he(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=e.nextSibling;r.insertBefore(e,i),e=t}}}return n},_e=(e,t,n=e)=>(e._$AI(t,n),e),ve={},ye=(e,t=ve)=>e._$AH=t,be=e=>e._$AH,xe=e=>{e._$AR(),e._$AA.remove()},Se=Symbol.for(`lion::SingletonManagerClassStorage`),Ce=globalThis||window,we=class{constructor(){this._map=Ce[Se]?Ce[Se]:Ce[Se]=new Map}set(e,t){this.has(e)||this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}},Te=e=>{let t=null,n=()=>(t===null&&(t=e()),t);return new Proxy({},{get(e,t){let r=n();return t===`addEventListener`||t===`removeEventListener`?Reflect.get(r,t).bind(r):t===`__instance_for_testing`?r:Reflect.get(r,t,r)},set(e,t,r){return Reflect.set(n(),t,r)},getOwnPropertyDescriptor(e,t){return Reflect.getOwnPropertyDescriptor(n(),t)},getPrototypeOf(){return Reflect.getPrototypeOf(n())}})},Ee=new we,De=class{constructor(){this.__iconResolvers=new Map}addIconResolver(e,t){if(this.__iconResolvers.has(e))throw Error(`An icon resolver has already been registered for namespace: ${e}`);this.__iconResolvers.set(e,t)}removeIconResolver(e){this.__iconResolvers.delete(e)}resolveIcon(e,t,n){let r=this.__iconResolvers.get(e);if(r)return r(t,n);throw Error(`Could not find any icon resolver for namespace ${e}.`)}resolveIconForId(e){let t=e.split(`:`);if(t.length!==3)throw Error(`Incorrect iconId: ${e}. Format: <namespace>:<iconset>:<icon>`);return this.resolveIcon(t[0],t[1],t[2])}};function Oe(){if(!Ee.has(`@lion/ui::icons::0.x`)){let e=new De;Ee.set(`@lion/ui::icons::0.x`,e)}return Ee.get(`@lion/ui::icons::0.x`)}var ke=Te(Oe),Ae={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},je=e=>(...t)=>({_$litDirective$:e,values:t}),Me=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Ne=class extends Me{constructor(e){if(super(e),this.it=i,e.type!==Ae.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===i||e==null)return this._t=void 0,this.it=e;if(e===l)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ne.directiveName=`unsafeHTML`,Ne.resultType=1;var Pe=je(Ne),Fe=class extends Ne{};Fe.directiveName=`unsafeSVG`,Fe.resultType=2;var Ie=je(Fe),Le=`craft`,Re=new Map;function ze(e,t){return`${e}/${t}`}function Be(e){let[t=`classic`,n=`regular`]=e.split(`/`);return{family:t,variant:n}}async function Ve(e){try{let t=await fetch(e,{mode:`cors`});if(!t.ok)return i;let n=document.createElement(`div`);n.innerHTML=await t.text();let r=n.firstElementChild;return r?.tagName?.toLowerCase()===`svg`?(r.setAttribute(`fill`,`currentColor`),r.setAttribute(`part`,`svg`),m`${Ie(r.outerHTML)}`):i}catch{return i}}function He(e,t=`classic`,n=`regular`,r=`/vendor/craft/icons`){let i=`solid`,a=n,o=e.endsWith(`.svg`)?e.split(`.svg`)[0]:e;if(e.includes(`/`)){let[t,...n]=e.split(`/`);a=t??a,o=n.join(`/`)}return a===`thin`?i=`thin`:a===`light`?i=`light`:a===`regular`?i=`regular`:a===`solid`&&(i=`solid`),(t===`brands`||a===`brands`)&&(i=`brands`),(t===`custom-icons`||a===`custom-icons`)&&(i=`custom-icons`),`${r}/${i}/${o}.svg`}function Ue(e){return(t,n,r)=>{let a=e(t,n,r);if(a===null)return i;let o=Re.get(a);return o||(o=Ve(a),Re.set(a,o)),o.then(e=>(e===i&&Re.delete(a),e))}}var We=Ue(He);function Ge(e){ke.removeIconResolver(Le),ke.addIconResolver(Le,(t,n)=>{let{family:r,variant:i}=Be(t);return e(n,r,i)})}function Ke(e,t=`classic`,n=`regular`){return Promise.resolve(ke.resolveIcon(Le,ze(t,n),e))}Ge(We);var qe=new WeakSet,Je=class extends d{constructor(...e){super(...e),x(this,qe),this.appearance=`plain`,this._svg=i,this._hasSlottedContent=!1}connectedCallback(){super.connectedCallback(),this.appearance===`badge`&&!this.getAttribute(`data-color`)&&this.setAttribute(`data-color`,`warning`),this._hasSlottedContent=this.childElementCount>0}firstUpdated(){w(qe,this,Ze).call(this)}updated(e){super.updated(e),(e.has(`name`)||e.has(`family`)||e.has(`variant`))&&w(qe,this,Xe).call(this),e.has(`label`)&&this.hasUpdated&&w(qe,this,Ze).call(this)}_handleSlotChange(e){let t=e.target;this._hasSlottedContent=t.assignedElements({flatten:!0}).length>0}render(){return m`
      <slot @slotchange=${this._handleSlotChange}></slot>
      ${this._hasSlottedContent?i:this._svg}
    `}static get styles(){return[o`
        :host {
          box-sizing: content-box;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: -0.125em;
          width: 1.25em;
          height: 1em;
          font-size: var(--c-icon-size, 0.8em);
        }

        :host([data-color]) {
          color: var(--c-color-fill-loud);
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
      `]}};function Ye(){return this.name?{name:this.name,family:this.family??`classic`,variant:this.variant??`solid`}:null}async function Xe(){let e=w(qe,this,Ye).call(this);if(e===null){this._svg=i;return}let t;try{t=await Ke(e.name,e.family,e.variant)}catch(e){console.error(e),t=i}let n=w(qe,this,Ye).call(this);n!==null&&e.name===n.name&&e.family===n.family&&e.variant===n.variant&&(this._svg=t)}function Ze(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}r([c({reflect:!0})],Je.prototype,`name`,void 0),r([c({reflect:!0})],Je.prototype,`family`,void 0),r([c({reflect:!0})],Je.prototype,`variant`,void 0),r([c()],Je.prototype,`label`,void 0),r([c({reflect:!0})],Je.prototype,`appearance`,void 0),r([p()],Je.prototype,`_svg`,void 0),r([p()],Je.prototype,`_hasSlottedContent`,void 0),customElements.get(`craft-icon`)||customElements.define(`craft-icon`,Je);var Qe=class extends d{constructor(...e){super(...e),this.debug=!1}render(){return m`<slot></slot>`}};Qe.styles=o`
    :host(:not([debug])) {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }
  `,r([c({type:Boolean,reflect:!0})],Qe.prototype,`debug`,void 0),customElements.get(`craft-visually-hidden`)||customElements.define(`craft-visually-hidden`,Qe);var O=je(class extends Me{constructor(e){if(super(e),e.type!==Ae.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``))));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return l}}),$e=o`
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
`,et=class extends d{constructor(...e){super(...e),this.visible=!0,this.label=``}show(){this.visible=!0,this.dispatchEvent(new CustomEvent(`craft-show`))}hide(){this.visible=!1,this.dispatchEvent(new CustomEvent(`craft-hide`))}focus(){this.wrapper?.focus()}render(){return m`
      <div
        tabindex="-1"
        class="${O({wrapper:!0,hidden:!this.visible})}"
      >
        <div class="spinner"></div>
        <span class="cp-visually-hidden"><slot>${this.label}</slot></span>
      </div>
    `}};et.styles=[le,$e],r([c({reflect:!0,type:Boolean})],et.prototype,`visible`,void 0),r([c()],et.prototype,`label`,void 0),r([g(`.wrapper`)],et.prototype,`wrapper`,void 0),customElements.get(`craft-spinner`)||customElements.define(`craft-spinner`,et);var tt=`craft-action-menu, craft-popover`,nt=`data-focus-key`;function rt(e){return!(e instanceof HTMLElement)||!e.isConnected||e===document.body||it(e,`[inert]`)||e.matches(`:disabled`)?!1:typeof e.checkVisibility==`function`?e.checkVisibility({visibilityProperty:!0}):!it(e,`[hidden]`)}function it(e,t){let n=e;for(;n;){let e=n.closest(t);if(e)return e;let r=n.getRootNode();n=r instanceof ShadowRoot?r.host:null}return null}function at(e){let t=e.anchor;if(t instanceof HTMLElement)return t;let n=t?.contextElement;if(n instanceof HTMLElement)return n;let r=e.getAttribute(`for`);if(r){let t=e.getRootNode();return typeof t.getElementById==`function`?t.getElementById(r):null}return e.querySelector(`:scope > [slot="invoker"]`)}function ot(e){let t=[],n=e,r=it(n,tt);for(;r;)at(r)?.contains(n)||t.push(r),n=r,r=r.parentElement?it(r.parentElement,tt):null;return t}function st(e){return it(e,`[data-focus-scope]`)?.getAttribute(`data-focus-scope`)??null}function ct(e,t){let n=tt.split(`, `).map(e=>`${e}[${nt}]`).join(`, `);return[...document.querySelectorAll(n)].filter(n=>n.getAttribute(`data-focus-key`)===e&&st(n)===t)}function lt(e){if(!e)return()=>null;let t=ot(e).map(e=>({menu:e,key:e.getAttribute(`data-focus-key`)||null,scopeKey:st(e)}));return()=>{if(rt(e))return e;for(let{menu:e}of t){let t=e.isConnected?at(e):null;if(rt(t))return t}for(let{key:e,scopeKey:n}of t)if(e!==null)for(let t of ct(e,n)){let e=at(t);if(rt(e))return e}return null}}function ut(e){if(typeof e!=`string`)return e;try{return JSON.parse(e)}catch{return null}}function dt(e,{trigger:t,sourceEvent:n}){let r={...e??{},...n?{sourceEvent:n}:{}};if(t){r.trigger=t;let e;Object.defineProperty(r,"returnFocus",{enumerable:!0,get:()=>e??=lt(t)})}return r}async function ft(e,t={}){switch(e.type){case`clipboard`:await navigator.clipboard.writeText(e.value);break;case`http`:{if(e.confirm&&!confirm(e.confirm)||e.requireElevatedSession&&!await pt())return;let t=await fetch(e.url,{method:e.method||`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:e.body?JSON.stringify(e.body):void 0}),n=await t.json().catch(()=>({}));if(!t.ok)throw Error(n.message??`Request failed`);for(let e of Array.isArray(n.messages)?n.messages:[])window.dispatchEvent(new CustomEvent(`craft-message`,{detail:e}));typeof n.redirect==`string`&&n.redirect&&mt(n.redirect);break}case`event`:if(e.confirm&&!confirm(e.confirm))return;window.dispatchEvent(new CustomEvent(e.name,{detail:dt(e.detail,t)}));break;case`download`:{if(e.confirm&&!confirm(e.confirm)||e.requireElevatedSession&&!await pt())return;if(e.method&&e.method!==`GET`){let t=await E.request({url:e.url,method:e.method,data:e.body,responseType:`blob`}),n=String(t.headers[`content-disposition`]??``),r=/filename\*?=(?:UTF-8'')?"?([^";]+)"?/i.exec(n),i=e.filename??(r?.[1]?decodeURIComponent(r[1]):`download`),a=URL.createObjectURL(t.data),o=document.createElement(`a`);o.href=a,o.download=i,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(a);break}let t=document.createElement(`a`);t.href=e.url,t.download=e.filename??``,t.click();break}default:throw Error(`Unknown action type: ${e.type}`)}}async function pt(){let e={};return window.dispatchEvent(new CustomEvent(`craft:require-elevated-session`,{detail:e})),e.confirmed??!0}function mt(e){window.dispatchEvent(new CustomEvent(`action:redirect`,{cancelable:!0,detail:{url:e}}))&&window.location.assign(e)}var ht=e=>e??i,gt=o`
  :host {
    display: contents;
  }

  :host([hidden]) {
    display: none;
  }

  .action-item {
    color: var(--c-color-on-quiet, inherit);
    background-color: transparent;

    font: inherit;
    text-align: start;
    display: flex;
    width: 100%;
    align-items: center;
    text-decoration: none;
    padding-inline: var(--c-spacing-sm);
    padding-block: var(--c-spacing-sm);
    border-radius: var(--c-radius-md);
    position: relative;
    border: 1px solid transparent;
  }

  @media (hover: hover) {
    :host(:hover:not([active])) .action-item:not([aria-disabled='true']) {
      background-color: var(
        --c-color-fill-quiet,
        var(--c-color-neutral-fill-quiet)
      );
      color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
    }
  }

  /* Matches the main navigation's current item. */
  :host([active]) .action-item {
    background-color: var(--c-color-accent-fill-quiet);
    border-color: var(--c-color-accent-border-loud);
    color: var(--c-color-accent-on-quiet);
  }

  .action-item[aria-disabled='true'] {
    opacity: 0.5;
  }

  .action-item:not([aria-disabled='true']) {
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
    :host(:hover[variant='danger']:not([active]))
      .action-item:not([aria-disabled='true']) {
      background-color: var(--c-color-fill-quiet);
      color: var(--c-color-on-quiet);
    }
  }
`,_t=[`a[href]`,`button`,`input`,`select`,`textarea`,`[tabindex]:not([tabindex="-1"])`,`craft-button`,`craft-action-item`,`craft-checkbox`,`craft-switch`].join(`, `),vt=new WeakSet,yt=class extends ne(d){constructor(...e){super(...e),x(this,vt),this.icon=null,this.iconColor=null,this.href=null,this.target=null,this.rel=null,this.disabled=!1,this.variant=ae.Neutral,this.checked=!1,this.active=!1,this.current=!1,this.type=`button`,this.action=null,this.feedback=null,this.feedbackDuration=1e3,this.state=D.Idle,this.feedbackMessage=null,this._resetStateTimeout=null,this._blockDisabledClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this._hasNestedControl=!1,this._lightDom=new se(this,{onChange:()=>this._checkSuffixForControls()})}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this._blockDisabledClick,{capture:!0}),this.addEventListener(`click`,this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this._blockDisabledClick,{capture:!0}),this.removeEventListener(`click`,this),this._clearResetStateTimeout()}_clearResetStateTimeout(){this._resetStateTimeout!==null&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=null)}setState(e,t={}){this.state=e,this.feedbackMessage=t.message??null,this.dispatchEvent(new CustomEvent(`craft-state-change`,{bubbles:!0,composed:!0,detail:{state:e,actionType:ut(this.action)?.type,...t}}))}async handleEvent(e){if(this.disabled){e.preventDefault();return}let t=ut(this.action);if(e.type===`click`&&t){t.type===`http`&&this.setState(D.Loading);try{await ft(t,{trigger:this,sourceEvent:e}),this.setState(D.Success,this.feedback?.success)}catch(e){this.setState(D.Error,{message:e.message,...this.feedback?.error||{}})}finally{this._clearResetStateTimeout(),this._resetStateTimeout=setTimeout(()=>{this._resetStateTimeout=null,this.setState(D.Idle)},this.feedbackDuration)}}}renderCheckbox(){return m`<span class="action-item__check">
      <slot name="checkmark">
        ${this.checked?m`<craft-icon name="check"></craft-icon>`:i}
      </slot>
    </span>`}renderIcon(){switch(this.state){case D.Loading:return m`<craft-spinner style="--size: 0.8em"></craft-spinner>`;case D.Success:return m`<craft-icon
          name="check"
          style="color: var(--c-color-success-on-normal)"
        ></craft-icon>`;case D.Error:return m`<craft-icon
          name="xmark-large"
          style="color: var(--c-color-danger-on-normal)"
        ></craft-icon>`;default:return m`
          <slot name="icon">
            ${this.icon?m`<craft-icon
                  name="${this.icon}"
                  style="${this.iconColor?`color: ${w(vt,this,bt).call(this,this.iconColor)}`:i}"
                ></craft-icon>`:i}
          </slot>
        `}}renderPrefix(){let e=!!this.querySelector(`[slot="icon"]`)||!!this.icon,t=!!this.querySelector(`[slot="prefix"]`);return m`
      ${this.type===`checkbox`?this.renderCheckbox():i}
      ${t?m`<slot name="prefix" part="prefix"></slot>`:i}
      ${e?m`<div class="action-item__icon">${this.renderIcon()}</div>`:i}
    `}_checkSuffixForControls(){this._hasNestedControl=Array.from(this.children).some(e=>e.slot===`suffix`&&e.matches(_t))}renderBody(){return m`
      ${this.renderPrefix()}

      <span class="action-item__label">
        ${this.feedbackMessage?this.feedbackMessage:m`<slot></slot>`}
      </span>

      <span
        class="${O({"action-item__suffix":!0,"a11y-error":this._hasNestedControl})}"
      >
        <slot name="suffix"></slot>
        ${this.shortcutKeys?m`<craft-shortcut
              ?alt="${this.shortcutKeys.alt}"
              ?shift="${this.shortcutKeys.shift}"
              >${this.shortcutKeys.key}</craft-shortcut
            >`:i}
      </span>
    `}render(){let e=b(this.href,this.target);return this.href?m`
          <a
            part="control"
            class="${O({"action-item":!0,"action-item--checkbox":this.type===`checkbox`})}"
            href="${this.href}"
            aria-current="${this.current?`true`:i}"
            aria-disabled="${this.disabled?`true`:i}"
            aria-keyshortcuts="${this.shortcutAriaKeys??i}"
            target="${ht(e??void 0)}"
            rel="${ht(this.rel??(e===`_blank`?`noopener`:null)??void 0)}"
          >
            ${this.renderBody()}${!this.target&&e?m`<span class="cp-visually-hidden">${_()}</span>`:i}
          </a>
        `:m`
          <button
            type="button"
            part="control"
            class="${O({"action-item":!0,"action-item--checkbox":this.type===`checkbox`})}"
            aria-current="${this.current?`true`:i}"
            aria-keyshortcuts="${this.shortcutAriaKeys??i}"
            aria-disabled="${this.disabled?`true`:i}"
          >
            ${this.renderBody()}
          </button>
        `}};function bt(e){return e.startsWith(`--`)?`var(${e}, currentColor)`:e===`black`||e===`white`?`var(--c-text-default)`:`var(--c-color-${e}-fill-loud, currentColor)`}yt.styles=[re,ie,te,le,gt],yt.shadowRootOptions={...d.shadowRootOptions,delegatesFocus:!0},r([c()],yt.prototype,`icon`,void 0),r([c({attribute:`icon-color`})],yt.prototype,`iconColor`,void 0),r([c()],yt.prototype,`href`,void 0),r([c()],yt.prototype,`target`,void 0),r([c()],yt.prototype,`rel`,void 0),r([c({type:Boolean})],yt.prototype,`disabled`,void 0),r([c({reflect:!0})],yt.prototype,`variant`,void 0),r([c({type:Boolean})],yt.prototype,`checked`,void 0),r([c({type:Boolean,reflect:!0})],yt.prototype,`active`,void 0),r([c({type:Boolean})],yt.prototype,`current`,void 0),r([c()],yt.prototype,`type`,void 0),r([c({type:Object})],yt.prototype,`action`,void 0),r([c({type:Object})],yt.prototype,`feedback`,void 0),r([c({type:Number,attribute:`feedback-duration`})],yt.prototype,`feedbackDuration`,void 0),r([p()],yt.prototype,`state`,void 0),r([p()],yt.prototype,`feedbackMessage`,void 0),r([p()],yt.prototype,`_hasNestedControl`,void 0),customElements.get(`craft-action-item`)||customElements.define(`craft-action-item`,yt);var xt=!1,St=!1;window.addEventListener(`keydown`,e=>{e.key===`Enter`&&(xt=!0)},!0),window.addEventListener(`keyup`,e=>{e.key===`Enter`&&(xt=!1)},!0),window.addEventListener(`blur`,()=>{xt=!1});function Ct(){if(!xt||St)return;St=!0;let e=()=>{St=!1,window.removeEventListener(`keyup`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e)},t=t=>{t.key===`Enter`&&(t.preventDefault(),t.stopImmediatePropagation(),e())},n=t=>{t.key===`Enter`&&!t.repeat&&e()};window.addEventListener(`keyup`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e)}function wt(e,...t){let n=e.relatedTarget;if(!(n instanceof Node))return!1;for(let e=n;e;e=Tt(e))if(t.includes(e))return!0;return!1}function Tt(e){let t=`assignedSlot`in e?e.assignedSlot:null;if(t)return t;let n=e.parentNode;return n instanceof ShadowRoot?n.host:n}function Et(e){let t=!!e.opened;e.addEventListener(`opened-changed`,()=>{let n=!!e.opened;if(n===t)return;t=n,e.dispatchEvent(new CustomEvent(n?`craft-show`:`craft-hide`,{bubbles:!0,composed:!0}));let r=n;e.updateComplete.then(()=>{!!e.opened===r&&e.dispatchEvent(new CustomEvent(r?`craft-after-show`:`craft-after-hide`,{bubbles:!0,composed:!0}))})})}function Dt(){return[{name:`computeStyles`,options:{gpuAcceleration:!1}},{name:`containingBlockCorrection`,enabled:!0,phase:`afterWrite`,fn:({state:e})=>{let t=e.elements.popper,n=parseFloat(t.style.left),r=parseFloat(t.style.top);if(Number.isNaN(n)||Number.isNaN(r))return;let i=t.getBoundingClientRect(),a=i.x-n,o=i.y-r;(a!==0||o!==0)&&(t.style.left=`${n-a}px`,t.style.top=`${r-o}px`)}}]}function Ot(e){return e.shadowRoot?.querySelector(`dialog[data-overlay-outer-wrapper]`)??null}function kt(e){let t=Ot(e);!t||typeof t.showPopover!=`function`||(t.setAttribute(`popover`,`manual`),t.matches(`:popover-open`)||t.showPopover())}function At(e){let t=Ot(e);t?.matches?.(`:popover-open`)&&t.hidePopover()}var jt=o`
  dialog[data-overlay-outer-wrapper][popover] {
    inset: auto;
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    color: inherit;
    overflow: visible;
    width: auto;
    height: auto;
  }
`,Mt=new WeakMap;function Nt(e,t){let n=t;for(;n;){if(Mt.get(n)===e)return!0;n=Object.getPrototypeOf(n)}return!1}function k(e){return t=>{if(Nt(e,t))return t;let n=e(t);return Mt.set(n,e),n}}var Pt=k(e=>class extends e{static get properties(){return{disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this._requestedToBeDisabled=!1,this.__isUserSettingDisabled=!0,this.__restoreDisabledTo=!1,this.disabled=!1}makeRequestToBeDisabled(){this._requestedToBeDisabled===!1&&(this._requestedToBeDisabled=!0,this.__restoreDisabledTo=this.disabled,this.__internalSetDisabled(!0))}retractRequestToBeDisabled(){this._requestedToBeDisabled===!0&&(this._requestedToBeDisabled=!1,this.__internalSetDisabled(this.__restoreDisabledTo))}__internalSetDisabled(e){this.__isUserSettingDisabled=!1,this.disabled=e,this.__isUserSettingDisabled=!0}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`disabled`&&(this.__isUserSettingDisabled&&(this.__restoreDisabledTo=this.disabled),this.disabled===!1&&this._requestedToBeDisabled===!0&&this.__internalSetDisabled(!0))}click(){this.disabled||super.click()}}),Ft=k(e=>class extends Pt(e){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:`tabindex`}}}constructor(){super(),this.__isUserSettingTabIndex=!0,this.__restoreTabIndexTo=0,this.__internalSetTabIndex(0)}makeRequestToBeDisabled(){super.makeRequestToBeDisabled(),this._requestedToBeDisabled===!1&&this.tabIndex!=null&&(this.__restoreTabIndexTo=this.tabIndex)}retractRequestToBeDisabled(){super.retractRequestToBeDisabled(),this._requestedToBeDisabled===!0&&this.__internalSetTabIndex(this.__restoreTabIndexTo)}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];__internalSetTabIndex(e){this.__isUserSettingTabIndex=!1,this.tabIndex=e,this.__isUserSettingTabIndex=!0}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`disabled`&&(this.disabled?this.__internalSetTabIndex(-1):this.__internalSetTabIndex(this.__restoreTabIndexTo)),e===`tabIndex`&&(this.__isUserSettingTabIndex&&this.tabIndex!=null&&(this.__restoreTabIndexTo=this.tabIndex),this.tabIndex!==-1&&this._requestedToBeDisabled===!0&&this.__internalSetTabIndex(-1))}firstUpdated(e){super.firstUpdated(e),this.disabled&&this.__internalSetTabIndex(-1)}});function It(e,t){let n=!1;Array.from(e.childNodes).forEach(e=>{let r=e.hasAttribute&&e.hasAttribute(`slot`);if(e.nodeType===Node.COMMENT_NODE&&!n&&(n=e.textContent.includes(`_start_slot_`)),n){e.textContent.includes(`_end_slot_`)&&(n=!1);return}r||t.appendChild(e)})}function Lt(e){return e instanceof Node?`node`:pe(e)?`template-result`:!Array.isArray(e)&&typeof e==`object`&&`template`in e?`slot-rerender-object`:null}var Rt=k(e=>class extends e{get slots(){return{}}constructor(){super(),this.__renderMetaPerSlot=new Map,this.__slotsThatNeedRerender=new Set,this.__slotsProvidedByUserOnFirstConnected=new Set,this.__privateSlots=new Set}connectedCallback(){super.connectedCallback(),this._connectSlotMixin()}__rerenderSlot(e){let t=this.slots[e]();this.__renderTemplateInScopedContext({renderAsDirectHostChild:t.renderAsDirectHostChild,template:t.template,slotName:e}),t.afterRender?.()}update(e){super.update(e);for(let e of this.__slotsThatNeedRerender)this.__rerenderSlot(e)}__renderTemplateInScopedContext({template:e,slotName:t,renderAsDirectHostChild:n}){if(!this.__renderMetaPerSlot.has(t)){let r=!!ShadowRoot.prototype.createElement;this.shadowRoot||console.error(`[SlotMixin] No shadowRoot was found`);let i=(r?this.shadowRoot:document).createElement(`div`),a=document.createComment(`_start_slot_${t}_`),o=document.createComment(`_end_slot_${t}_`);i.appendChild(a),i.appendChild(o);let{creationScope:c,host:l}=this.renderOptions;if(s(e,i,{renderBefore:o,creationScope:c,host:l}),n){let e=Array.from(i.childNodes);this.__appendNodes({nodes:e,renderParent:this,slotName:t})}else i.slot=t,this.appendChild(i);this.__renderMetaPerSlot.set(t,{renderTargetThatRespectsShadowRootScoping:i,renderBefore:o});return}let{renderBefore:r,renderTargetThatRespectsShadowRootScoping:i}=this.__renderMetaPerSlot.get(t),a=n?this:i,{creationScope:o,host:c}=this.renderOptions;s(e,a,{creationScope:o,host:c,renderBefore:r}),n&&r.previousElementSibling&&!r.previousElementSibling.slot&&(r.previousElementSibling.slot=t)}__appendNodes({nodes:e,renderParent:t=this,slotName:n}){for(let r of e)r instanceof Element&&n&&n!==``&&r.setAttribute(`slot`,n),t.appendChild(r)}__initSlots(e){for(let t of e){if(this.__slotsProvidedByUserOnFirstConnected.has(t))continue;let e=this.slots[t]();if(e!==void 0)switch(this.__isConnectedSlotMixin||this.__privateSlots.add(t),Lt(e)){case`template-result`:this.__renderTemplateInScopedContext({template:e,renderAsDirectHostChild:!0,slotName:t});break;case`node`:this.__appendNodes({nodes:[e],renderParent:this,slotName:t});break;case`slot-rerender-object`:this.__slotsThatNeedRerender.add(t),e.firstRenderOnConnected&&this.__rerenderSlot(t);break;default:throw Error(`Slot "${t}" configured inside "get slots()" (in prototype) of ${this.constructor.name} may return these types: TemplateResult | Node | {template:TemplateResult, afterRender?:function} | undefined.
              You provided: ${e}`)}}}_connectSlotMixin(){if(this.__isConnectedSlotMixin)return;let e=Object.keys(this.slots);for(let t of e)(t===``?Array.from(this.children).find(e=>!e.hasAttribute(`slot`)):Array.from(this.children).find(e=>e.slot===t))&&this.__slotsProvidedByUserOnFirstConnected.add(t);this.__initSlots(e),this.__isConnectedSlotMixin=!0}_isPrivateSlot(e){return this.__privateSlots.has(e)}});function zt(e=`google-chrome`){let t=globalThis.navigator,n=!!t.userAgentData&&t.userAgentData.brands.some(e=>e.brand===`Chromium`);if(e===`chromium`)return n;let r=globalThis.navigator?.vendor,i=globalThis.opr!==void 0,a=globalThis.userAgent?.indexOf(`Edge`)>-1,o=globalThis.userAgent?.match(`CriOS`);if(e===`ios`)return o;if(e===`google-chrome`)return n!=null&&r===`Google Inc.`&&i===!1&&a===!1}var Bt={isIE11:/Trident/.test(globalThis.navigator?.userAgent),isChrome:zt(),isIOSChrome:zt(`ios`),isChromium:zt(`chromium`),isFirefox:globalThis.navigator?.userAgent.toLowerCase().indexOf(`firefox`)>-1,isMac:globalThis.navigator?.appVersion?.indexOf(`Mac`)!==-1,isIOS:/iPhone|iPad|iPod/i.test(globalThis.navigator?.userAgent),isMacSafari:globalThis.navigator?.vendor&&globalThis.navigator?.vendor.indexOf(`Apple`)>-1&&globalThis.navigator?.userAgent&&globalThis.navigator?.userAgent.indexOf(`CriOS`)===-1&&globalThis.navigator?.userAgent.indexOf(`FxiOS`)===-1&&globalThis.navigator?.appVersion.indexOf(`Mac`)!==-1};function Vt(e=``){return`${e.length>0?`${e}-`:``}${Math.random().toString(36).substr(2,10)}`}var Ht=o`
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
`,Ut=class e{static __createGlobalStyleNode(){let e=document.createElement(`style`);return e.setAttribute(`data-overlays`,``),e.textContent=Ht.cssText,document.head.appendChild(e),e}get list(){return this.__list}get shownList(){return this.__shownList}constructor(){this.__list=[],this.__shownList=[],this._siblingsInert=!1,this.__blockingMap=new WeakMap,e.__globalStyleNode||=e.__createGlobalStyleNode()}add(e){if(this.list.find(t=>e===t))throw Error(`controller instance is already added`);return this.list.push(e),e}remove(e){if(!this.list.find(t=>e===t))throw Error(`could not find controller to remove`);this.__list=this.list.filter(t=>t!==e),this.__shownList=this.shownList.filter(t=>t!==e)}show(e){this.list.find(t=>e===t)&&this.hide(e),this.__shownList.unshift(e),Array.from(this.__shownList).reverse().forEach((e,t)=>{e.elevation=t+1})}hide(e){if(!this.list.find(t=>e===t))throw Error(`could not find controller to hide`);this.__shownList=this.shownList.filter(t=>t!==e)}teardown(){this.list.forEach(e=>{e.teardown()}),this.__list=[],this.__shownList=[],this._siblingsInert=!1,e.__globalStyleNode&&=(document.head.removeChild(e.__globalStyleNode),void 0)}get siblingsInert(){return this._siblingsInert}requestToPreventScroll(){let{isIOS:e,isMacSafari:t}=Bt;document.body.classList.add(`overlays-scroll-lock`),(e||t)&&document.body.classList.add(`overlays-scroll-lock-ios-fix`),e&&document.documentElement.classList.add(`overlays-scroll-lock-ios-fix`)}requestToEnableScroll(e){if((e?this.shownList.filter(t=>t!==e):this.shownList).some(e=>e.preventsScroll===!0))return;let{isIOS:t,isMacSafari:n}=Bt;document.body.classList.remove(`overlays-scroll-lock`),(t||n)&&document.body.classList.remove(`overlays-scroll-lock-ios-fix`),t&&document.documentElement.classList.remove(`overlays-scroll-lock-ios-fix`)}requestToShowOnly(e){let t=this.shownList.filter(t=>t!==e);t.forEach(e=>e.hide()),this.__blockingMap.set(e,t)}retractRequestToShowOnly(e){this.__blockingMap.has(e)&&this.__blockingMap.get(e).forEach(e=>e.show())}};Ut.__globalStyleNode=void 0;function Wt(){if(!Ee.has(`@lion/ui::overlays::0.x`)){let e=new Ut;Ee.set(`@lion/ui::overlays::0.x`,e)}return Ee.get(`@lion/ui::overlays::0.x`)}var Gt=Te(Wt);function Kt(e,t,n={}){function r(e){return`getAttribute`in e}function i(e){if(!r(e))return null;let t=e.getAttribute(`slot`),i=null;if(t){let r=n[t];r&&(i=r.filter(t=>t?.element===e)[0]||null)}return i}let a=i(e);if(a)return a.deepContains;function o(t){if(!r(e))return;let i=e.getAttribute(`slot`);i&&(n[i]=n[i]||[],n[i].push({element:e,deepContains:t}))}let s=e.contains(t);if(s)return o(!0),!0;function c(e){return e.tagName===`SLOT`}function l(e){return c(e)?e.assignedElements():[]}function u(e){return e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function d(e){let i=!1;for(let a=0;a<e.length;a+=1){let o=e[a];if(o&&(r(o)||u(o))&&Kt(o,t,n)){i=!0;break}}return i}function f(e){for(let t=0;t<e.children.length;t+=1){let n=e.children[t],r=i(n);if(r){s=r.deepContains||s;break}let a=l(n);if(d([n.shadowRoot,...a])){s=!0;break}n.children.length>0&&f(n)}}return e instanceof HTMLElement&&e.shadowRoot&&(s=Kt(e.shadowRoot,t,n),s)?(o(!0),!0):(f(e),o(s),s)}var qt=o`
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
`,Jt={supportsAdoptingStyleSheets:window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,adoptStyle:void 0,adoptStyles:void 0},Yt=new WeakMap;function Xt(e){return Array.from(e.cssRules).map(e=>e.cssText).join(``)}function Zt(e,t,{teardown:n=!1}={}){let r=e===document?document.body:e,i=t.cssText||Xt(t);if(n){let e=Array.from(r.querySelectorAll(`style`));for(let t of e)if(t.textContent===i){t.remove();break}}else{let e=document.createElement(`style`),t=window.litNonce;t!==void 0&&e.setAttribute(`nonce`,t),e.textContent=i,r.appendChild(e)}}function Qt(e,t,{teardown:n=!1}={}){let r=!1;e&&!Yt.has(e)&&Yt.set(e,[]);let i=Yt.get(e)??[],a=i.find(e=>t===e);return a&&n?i.splice(i.indexOf(t),1):!a&&!n?i.push(t):(a&&!n||!a&&n)&&(r=!0),{haltFurtherExecution:r}}function $t(e,t,{teardown:n=!1}={}){let{haltFurtherExecution:r}=Qt(e,t,{teardown:n});if(r)return;if(!Jt.supportsAdoptingStyleSheets||Bt.isIOS){Zt(e,t,{teardown:n});return}let i=t instanceof CSSStyleSheet?t:t.styleSheet;if(!i)throw Error(`Please provide a CSSResultOrNative style`);n?e.adoptedStyleSheets.includes(i)&&e.adoptedStyleSheets.splice(e.adoptedStyleSheets.indexOf(i),1):e.adoptedStyleSheets=[...e.adoptedStyleSheets,i]}function en(e,t,{teardown:n=!1}={}){for(let r of t)Jt.adoptStyle(e,r,{teardown:n})}Jt.adoptStyle=$t,Jt.adoptStyles=en;var tn=({visibility:e,display:t})=>e!==`hidden`&&t!==`none`,nn=({display:e})=>e===`contents`;function rn(e){if(!e||!e.isConnected||!tn(e.style))return!1;let t=window.getComputedStyle(e);return tn(t)?nn(t)?!0:!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length):!1}function an(e,t){let n=Math.max(e.tabIndex,0),r=Math.max(t.tabIndex,0);return n===0||r===0?r>n:n>r}function on(e,t){let n=[];for(;e.length>0&&t.length>0;)an(e[0],t[0])?n.push(t.shift()):n.push(e.shift());return[...n,...e,...t]}function sn(e){let t=e.length;if(t<2)return e;let n=Math.ceil(t/2);return on(sn(e.slice(0,n)),sn(e.slice(n)))}var cn=`matches`in Element.prototype?`matches`:`msMatchesSelector`;function ln(e){return e[cn](`input, select, textarea, button, object`)?e[cn](`:not([disabled])`):e[cn](`a[href], area[href], iframe, [tabindex], [contentEditable]`)}function un(e){return ln(e)?Number(e.getAttribute(`tabindex`)||0):-1}function dn(e){if(e.localName===`slot`)return e.assignedNodes({flatten:!0});let{children:t}=e.shadowRoot||e;return t||[]}function fn(e){return e.nodeType===Node.ELEMENT_NODE?e.localName===`slot`||rn(e):!1}function pn(e,t){if(!fn(e))return!1;let n=e,r=un(n),i=r>0;r>=0&&t.push(n);let a=dn(n);for(let e=0;e<a.length;e+=1)i=pn(a[e],t)||i;return i}function mn(e){let t=[];return pn(e,t)?sn(t):t}var hn=`modulepreload`,gn=function(e,t){return new URL(e,t).href},_n={},A=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=gn(t,n),t=s(t),t in _n)return;_n[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:hn,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function vn({wrappingDialogNodeL1:e,contentWrapperNodeL2:t,contentNodeL3:n}){if(!(t.isConnected||n.isConnected))throw Error(`[OverlayController] Could not find a render target, since the provided contentNode is not connected to the DOM. Make sure that it is connected, e.g. by doing "document.body.appendChild(contentNode)", before passing it on.`);let r,i=document.createComment(`tempMarker`);t.isConnected?(r=t.parentElement||t.getRootNode(),r.insertBefore(i,t),e.appendChild(t)):n.assignedSlot?(r=n.assignedSlot.parentElement||n.assignedSlot.getRootNode(),r.insertBefore(i,n.assignedSlot),e.appendChild(t),t.appendChild(n.assignedSlot)):(r=n.parentElement||n.getRootNode(),r.insertBefore(i,n),e.appendChild(t),t.appendChild(n)),r.insertBefore(e,i),r?.removeChild(i)}async function yn(){return A(()=>import(`./popper--LklqrOK.js`),[],import.meta.url)}var bn=new WeakMap,xn=class e extends EventTarget{#e=!1;constructor(e={},t=Gt){super(),this.manager=t,this.__sharedConfig=e,this.__activeElementRightBeforeHide=null,this.config={},this._defaultConfig={placementMode:void 0,contentNode:e.contentNode,contentWrapperNode:e.contentWrapperNode,invokerNode:e.invokerNode,backdropNode:e.backdropNode,referenceNode:void 0,elementToFocusAfterHide:e.invokerNode,inheritsReferenceWidth:`none`,hasBackdrop:!1,isBlocking:!1,preventsScroll:!1,trapsKeyboardFocus:!1,hidesOnEsc:!1,hidesOnOutsideEsc:!1,hidesOnOutsideClick:!1,isTooltip:!1,isAlertDialog:!1,invokerRelation:`description`,visibilityTriggerFunction:void 0,handlesAccessibility:!1,popperConfig:{placement:`top`,strategy:`fixed`,modifiers:[{name:`preventOverflow`,enabled:!0,options:{boundariesElement:`viewport`,padding:8}},{name:`flip`,options:{boundariesElement:`viewport`,padding:16}},{name:`offset`,enabled:!0,options:{offset:[0,8]}},{name:`arrow`,enabled:!1}]},viewportConfig:{placement:`center`},zIndex:9999},this._contentId=`overlay-content--${Math.random().toString(36).slice(2,10)}`,this.__originalAttrs=new Map,this.__escKeyHandler=this.__escKeyHandler.bind(this),this.updateConfig(e),this.__hasActiveBackdrop=!0,this.__cancelHandler=this.__cancelHandler.bind(this),this.__escKeyHandlerCalled=!1}get invoker(){return this.invokerNode}get content(){return this.__wrappingDialogNode}get placementMode(){return this.config?.placementMode}get invokerNode(){return this.config?.invokerNode}get referenceNode(){return this.config?.referenceNode}get contentNode(){return this.config?.contentNode}get contentWrapperNode(){return this.__contentWrapperNode||this.config?.contentWrapperNode}get backdropNode(){return this.__backdropNode||this.config?.backdropNode}get elementToFocusAfterHide(){return this.__elementToFocusAfterHide||this.config?.elementToFocusAfterHide}get hasBackdrop(){return!!this.backdropNode||this.config?.hasBackdrop}get isBlocking(){return this.config?.isBlocking}get preventsScroll(){return this.config?.preventsScroll}get trapsKeyboardFocus(){return this.config?.trapsKeyboardFocus}get hidesOnEsc(){return this.config?.hidesOnEsc}get hidesOnOutsideClick(){return this.config?.hidesOnOutsideClick}get hidesOnOutsideEsc(){return this.config?.hidesOnOutsideEsc}get inheritsReferenceWidth(){return this.config?.inheritsReferenceWidth}get handlesAccessibility(){return this.config?.handlesAccessibility}get isTooltip(){return this.config?.isTooltip}get isAlertDialog(){return this.config?.isAlertDialog}get invokerRelation(){return this.config?.invokerRelation}get popperConfig(){return this.config?.popperConfig}get viewportConfig(){return this.config?.viewportConfig}get visibilityTriggerFunction(){return this.config?.visibilityTriggerFunction}get _referenceNode(){return this.referenceNode||this.invokerNode}set elevation(e){this.__wrappingDialogNode.style.zIndex=`${this.config.zIndex+e}`}get elevation(){return Number(this.contentWrapperNode?.style.zIndex)}updateConfig(e){this.teardown(),this.__prevConfig=this.config,this.config={...this._defaultConfig,...this.__sharedConfig,...e,popperConfig:{...this._defaultConfig.popperConfig||{},...this.__sharedConfig.popperConfig||{},...e.popperConfig||{},modifiers:[...this._defaultConfig.popperConfig?.modifiers||[],...this.__sharedConfig.popperConfig?.modifiers||[],...e.popperConfig?.modifiers||[]]}},this.__validateConfiguration(this.config),this._init(),this.__elementToFocusAfterHide=void 0,this.#t()||this.manager.add(this)}#t(){return!!this.manager.list.find(e=>this===e)}__validateConfiguration(e){if(!e.placementMode)throw Error(`[OverlayController] You need to provide a .placementMode ("global"|"local")`);if(![`global`,`local`].includes(e.placementMode))throw Error(`[OverlayController] "${e.placementMode}" is not a valid .placementMode, use ("global"|"local")`);if(!e.contentNode)throw Error(`[OverlayController] You need to provide a .contentNode`);if(e.isTooltip&&!e.handlesAccessibility)throw Error(`[OverlayController] .isTooltip only takes effect when .handlesAccessibility is enabled`)}_init(){this.__contentHasBeenInitialized||=(this.__initContentDomStructure(),!0),this.contentWrapperNode.removeAttribute(`style`),this.contentWrapperNode.removeAttribute(`class`),this.placementMode===`local`&&(e.popperModule||=yn()),this.__handleOverlayStyles({phase:`init`}),this._handleFeatures({phase:`init`})}__handleOverlayStyles({phase:e}){let t=this.contentWrapperNode?.getRootNode();e===`init`?Jt.adoptStyle(t,qt):e===`teardown`&&Jt.adoptStyle(t,qt,{teardown:!0})}__initContentDomStructure(){let e=document.createElement(`dialog`);e.setAttribute(`role`,`none`),e.setAttribute(`data-overlay-outer-wrapper`,``),e.style.cssText=`display:none; z-index: ${this.config.zIndex}; padding: 0;`,this.__wrappingDialogNode=e,this.config?.contentWrapperNode||(this.__contentWrapperNode=document.createElement(`div`)),this.contentWrapperNode.setAttribute(`data-id`,`content-wrapper`),vn({wrappingDialogNodeL1:e,contentWrapperNodeL2:this.contentWrapperNode,contentNodeL3:this.contentNode}),e.open=!0,this.isTooltip&&e.setAttribute(`tabindex`,`-1`),this.__wrappingDialogNode.style.display=`none`,this.contentWrapperNode.style.zIndex=`1`,getComputedStyle(this.contentNode).position===`absolute`&&(this.contentNode.style.position=`static`),HTMLDialogElement&&`closedBy`in HTMLDialogElement.prototype?e.closedBy=`none`:(e.addEventListener(`keydown`,e=>{e.key===`Escape`&&e.preventDefault()}),e.addEventListener(`keyup`,e=>{e.key===`Escape`&&e.preventDefault()}),e.addEventListener(`cancel`,e=>{e.stopPropagation()}),e.addEventListener(`close`,e=>{e.stopPropagation()}))}_handleZIndex({phase:e}){if(this.placementMode===`local`&&e===`setup`){let e=Number(getComputedStyle(this.contentNode).zIndex);(e<1||Number.isNaN(e))&&(this.contentNode.style.zIndex=`1`)}}__setupTeardownAccessibility({phase:e}){if(e===`init`){this.__storeOriginalAttrs(this.contentNode,[`role`,`id`]);let e=this.trapsKeyboardFocus;if(this.invokerNode){let t=[`aria-labelledby`,`aria-describedby`];e||t.push(`aria-expanded`),this.__storeOriginalAttrs(this.invokerNode,t)}this.contentNode.id||this.contentNode.setAttribute(`id`,this._contentId),this.isTooltip?(this.invokerNode&&this.invokerNode.setAttribute(this.invokerRelation===`label`?`aria-labelledby`:`aria-describedby`,this._contentId),this.contentNode.setAttribute(`role`,`tooltip`)):(this.invokerNode&&!e&&this.invokerNode.setAttribute(`aria-expanded`,`${this.isShown}`),this.isAlertDialog?this.contentNode.setAttribute(`role`,`alertdialog`):this.contentNode.getAttribute(`role`)||this.contentNode.setAttribute(`role`,`dialog`))}else e===`teardown`&&this.__restoreOriginalAttrs()}__storeOriginalAttrs(e,t){let n={};t.forEach(t=>{n[t]=e.getAttribute(t)}),this.__originalAttrs.set(e,n)}__restoreOriginalAttrs(){for(let[e,t]of this.__originalAttrs)Object.entries(t).forEach(([t,n])=>{n===null?e.removeAttribute(t):e.setAttribute(t,n)});this.__originalAttrs.clear()}get isShown(){return this.__wrappingDialogNode?.style.display!==`none`}async show(e=this.elementToFocusAfterHide){if(this._showComplete&&await this._showComplete,this._showComplete=new Promise(e=>{this._showResolve=e}),this.manager&&this.manager.show(this),this.isShown){this._showResolve();return}let t=new CustomEvent(`before-show`,{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented||(`HTMLDialogElement`in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&(this.__wrappingDialogNode.open=!0),this.__wrappingDialogNode.style.display=``,this._keepBodySize({phase:`before-show`}),await this._handleFeatures({phase:`show`}),this._keepBodySize({phase:`show`}),await this._handlePosition({phase:`show`}),this.__elementToFocusAfterHide=e,this.dispatchEvent(new Event(`show`)),await this._transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode})),this._showResolve()}async _handlePosition({phase:e}){if(this.placementMode===`global`){let t=`overlays__overlay-container--${this.viewportConfig.placement}`;e===`show`?(this.contentWrapperNode.classList.add(`overlays__overlay-container`),this.contentWrapperNode.classList.add(t),this.contentNode.classList.add(`overlays__overlay`)):e===`hide`&&(this.contentWrapperNode.classList.remove(`overlays__overlay-container`),this.contentWrapperNode.classList.remove(t),this.contentNode.classList.remove(`overlays__overlay`))}else this.placementMode===`local`&&e===`show`&&(await this.__createPopperInstance(),this._popper.forceUpdate())}_keepBodySize({phase:e}){if(this.preventsScroll)switch(e){case`before-show`:this.__bodyClientWidth=document.body.clientWidth,this.__bodyClientHeight=document.body.clientHeight,this.__bodyMarginRightInline=document.body.style.marginRight,this.__bodyMarginBottomInline=document.body.style.marginBottom;break;case`show`:{if(window.getComputedStyle){let e=window.getComputedStyle(document.body);this.__bodyMarginRight=parseInt(e.getPropertyValue(`margin-right`),10),this.__bodyMarginBottom=parseInt(e.getPropertyValue(`margin-bottom`),10)}else this.__bodyMarginRight=0,this.__bodyMarginBottom=0;let e=document.body.clientWidth-this.__bodyClientWidth,t=document.body.clientHeight-this.__bodyClientHeight,n=this.__bodyMarginRight+e,r=this.__bodyMarginBottom+t;window.CSS?.number&&document.body.attributeStyleMap?.set?(document.body.attributeStyleMap.set(`margin-right`,CSS.px(n)),document.body.attributeStyleMap.set(`margin-bottom`,CSS.px(r))):(document.body.style.marginRight=`${n}px`,document.body.style.marginBottom=`${r}px`);break}case`hide`:document.body.style.marginRight=this.__bodyMarginRightInline||``,document.body.style.marginBottom=this.__bodyMarginBottomInline||``;break}}async hide(){if(this._hideComplete=new Promise(e=>{this._hideResolve=e}),this.__activeElementRightBeforeHide=this.contentNode.getRootNode().activeElement,this.manager&&this.#t()&&this.manager.hide(this),!this.isShown){this._hideResolve();return}let e=new CustomEvent(`before-hide`,{cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(await this._transitionHide({backdropNode:this.backdropNode,contentNode:this.contentNode}),`HTMLDialogElement`in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&this.__wrappingDialogNode.close(),this.__wrappingDialogNode.style.display=`none`,this._handleFeatures({phase:`hide`}),this._keepBodySize({phase:`hide`}),this.dispatchEvent(new Event(`hide`)),this._restoreFocus()),this._hideResolve()}async transitionHide(e){}async _transitionHide({backdropNode:e,contentNode:t}){await this.transitionHide({backdropNode:e,contentNode:t}),this._handlePosition({phase:`hide`}),e&&e.classList.remove(`overlays__backdrop--animation-in`)}async transitionShow(e){}async _transitionShow(e){await this.transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode}),e.backdropNode&&e.backdropNode.classList.add(`overlays__backdrop--animation-in`)}_restoreFocus(){this.__activeElementRightBeforeHide instanceof HTMLElement&&this.contentNode.contains(this.__activeElementRightBeforeHide)&&(this.elementToFocusAfterHide instanceof HTMLElement?(this.elementToFocusAfterHide.focus(),this.elementToFocusAfterHide.scrollIntoView({block:`nearest`})):this.__activeElementRightBeforeHide.blur())}async toggle(){return this.isShown?this.hide():this.show()}_handleFeatures({phase:e}){this._handleZIndex({phase:e}),this.preventsScroll&&this._handlePreventsScroll({phase:e}),this.isBlocking&&this._handleBlocking({phase:e}),this.hasBackdrop&&this._handleBackdrop({phase:e}),this.trapsKeyboardFocus&&this._handleTrapsKeyboardFocus({phase:e}),this.hidesOnEsc&&this._handleHidesOnEsc({phase:e}),this.hidesOnOutsideEsc&&this._handleHidesOnOutsideEsc({phase:e}),this.hidesOnOutsideClick&&this._handleHidesOnOutsideClick({phase:e}),this.handlesAccessibility&&this._handleAccessibility({phase:e}),this.inheritsReferenceWidth&&this._handleInheritsReferenceWidth(),this.visibilityTriggerFunction&&this._handleVisibilityTriggers({phase:e})}_handleVisibilityTriggers({phase:e}){typeof this.visibilityTriggerFunction==`function`&&(e===`init`&&(this.__visibilityTriggerHandler=this.visibilityTriggerFunction({phase:e,controller:this})),this.__visibilityTriggerHandler[e]&&this.__visibilityTriggerHandler[e]())}_handlePreventsScroll({phase:e}){switch(e){case`show`:this.manager.requestToPreventScroll();break;case`hide`:this.manager.requestToEnableScroll();break;case`teardown`:this.manager.requestToEnableScroll(this);break}}_handleBlocking({phase:e}){switch(e){case`show`:this.manager.requestToShowOnly(this);break;case`hide`:this.manager.retractRequestToShowOnly(this);break}}get hasActiveBackdrop(){return this.__hasActiveBackdrop}_handleBackdrop({phase:e}){switch(e){case`init`:this.__backdropInitialized||=(this.config?.backdropNode||(this.__backdropNode=document.createElement(`div`),this.__backdropNode.classList.add(`overlays__backdrop`)),this.__wrappingDialogNode.prepend(this.backdropNode),!0);break;case`show`:this.config.hasBackdrop&&this.backdropNode.classList.add(`overlays__backdrop--visible`),this.__hasActiveBackdrop=!0;break;case`hide`:case`teardown`:this.backdropNode.classList.remove(`overlays__backdrop--visible`),this.__hasActiveBackdrop=!1;break}}#n=e=>{e.key===`Shift`&&(this.#e=!0)};#r=e=>{e.key===`Shift`&&(this.#e=!1)};#i=()=>{window.addEventListener(`keydown`,this.#n),window.addEventListener(`keyup`,this.#r)};#a=()=>{window.removeEventListener(`keydown`,this.#n),window.removeEventListener(`keyup`,this.#r)};#o=()=>mn(this.contentNode).find(e=>e.hasAttribute(`autofocus`))||this.contentNode;#s=()=>{this.__wrappingDialogNode?.addEventListener(`focus`,()=>{this.#e||this.#o().focus()})};_handleTrapsKeyboardFocus({phase:e}){e===`init`&&(this.contentNode.style.outline=`none`,this.contentNode.tabIndex=-1,this.contentNode.shadowRoot&&console.warn(`[overlays]: For best accessibility (compatibility with Safari + VoiceOver), provide a contentNode that is not a host for a shadow root`)),e===`show`&&(this.#i(),this.#s(),this.__wrappingDialogNode?.close(),this.__wrappingDialogNode?.showModal(),this.#o().focus()),e===`hide`&&this.#a()}__cancelHandler(e){e.preventDefault()}__escKeyHandler(e){e.key!==`Escape`||bn.has(e)||!this.isShown&&this.__escKeyHandlerCalled||this.#c(e)&&(this.__escKeyHandlerCalled=!0,this.hide(),bn.set(e,this))}#c=e=>e.composedPath().includes(this.__wrappingDialogNode)||this.invokerNode&&e.composedPath().includes(this.invokerNode)||Kt(this.contentNode,e.target);#l=e=>{e.key===`Escape`&&(this.#c(e)||this.hide())};_handleHidesOnEsc({phase:e}){e===`init`&&(this.contentNode.removeEventListener(`keyup`,this.__escKeyHandler),this.contentNode.addEventListener(`keyup`,this.__escKeyHandler),this.invokerNode&&this.invokerNode.addEventListener(`keyup`,this.__escKeyHandler)),e===`show`&&(this.__escKeyHandlerCalled=!1),e===`teardown`&&(this.contentNode.removeEventListener(`keyup`,this.__escKeyHandler),this.invokerNode&&this.invokerNode.removeEventListener(`keyup`,this.__escKeyHandler))}_handleHidesOnOutsideEsc({phase:e}){e===`init`?(document.removeEventListener(`keyup`,this.#l),document.addEventListener(`keyup`,this.#l)):e===`teardown`&&document.removeEventListener(`keyup`,this.#l)}_handleInheritsReferenceWidth(){if(!this._referenceNode||this.placementMode===`global`)return;let e=`${this._referenceNode.getBoundingClientRect().width}px`;switch(this.inheritsReferenceWidth){case`max`:this.contentWrapperNode.style.maxWidth=e;break;case`full`:this.contentWrapperNode.style.width=e;break;case`min`:this.contentWrapperNode.style.minWidth=e,this.contentWrapperNode.style.width=`auto`;break}}_handleHidesOnOutsideClick({phase:e}){let t=e===`show`?`addEventListener`:`removeEventListener`;if(e===`show`){let e=!1,t=!1;this.__onInsideMouseDown=()=>{e=!0},this.__onInsideMouseUp=()=>{t=!0},this.__onDocumentMouseUp=()=>{setTimeout(()=>{!e&&!t&&this.hide(),e=!1,t=!1})},this.__onWindowBlur=()=>{setTimeout(()=>{this.hide()})}}this.contentWrapperNode[t](`mousedown`,this.__onInsideMouseDown,!0),this.contentWrapperNode[t](`mouseup`,this.__onInsideMouseUp,!0),this.invokerNode&&(this.invokerNode[t](`mousedown`,this.__onInsideMouseDown,!0),this.invokerNode[t](`mouseup`,this.__onInsideMouseUp,!0)),document.documentElement[t](`mouseup`,this.__onDocumentMouseUp,!0),window[t](`blur`,this.__onWindowBlur)}_handleAccessibility({phase:e}){(e===`init`||e===`teardown`)&&this.__setupTeardownAccessibility({phase:e});let t=this.trapsKeyboardFocus;this.invokerNode&&!this.isTooltip&&!t&&this.invokerNode.setAttribute(`aria-expanded`,`${e===`show`}`)}teardown(){this.__handleOverlayStyles({phase:`teardown`}),this._handleFeatures({phase:`teardown`}),this.#t()&&this.manager.remove(this)}async __createPopperInstance(){if(this._popper&&=(this._popper.destroy(),void 0),e.popperModule!==void 0){let{createPopper:t}=await e.popperModule;this._popper=t(this._referenceNode,this.contentWrapperNode,{...this.config?.popperConfig})}}_hasDisabledInvoker(){return this.invokerNode?this.invokerNode.disabled||this.invokerNode.getAttribute(`aria-disabled`)===`true`:!1}};xn.popperModule=void 0;function Sn(e,t){if(typeof e!=`object`||typeof t!=`object`||e===null||t===null)return e===t;let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every(n=>Sn(e[n],t[n]))}var Cn=k(e=>class extends e{static get properties(){return{opened:{type:Boolean,reflect:!0}}}#e=!1;constructor(){super(),this.opened=!1,this.config={},this.toggle=this.toggle.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this)}get config(){return this.__config}set config(e){let t=!Sn(this.config,e);this._overlayCtrl&&t&&this._overlayCtrl.updateConfig(e),this.__config=e,this._overlayCtrl&&t&&this.__syncToOverlayController()}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`opened`&&this.opened!==t&&this.dispatchEvent(new CustomEvent(`opened-changed`,{detail:{opened:this.opened}}))}_defineOverlay({contentNode:e,invokerNode:t,referenceNode:n,backdropNode:r,contentWrapperNode:i}){let a=this._defineOverlayConfig()||{};return new xn({contentNode:e,invokerNode:t,referenceNode:n,backdropNode:r,contentWrapperNode:i,...a,...this.config,popperConfig:{...a.popperConfig||{},...this.config?.popperConfig||{},modifiers:[...a.popperConfig?.modifiers||[],...this.config?.popperConfig?.modifiers||[]]}})}_defineOverlayConfig(){return{placementMode:`local`}}updated(e){super.updated(e),e.has(`opened`)&&this._overlayCtrl&&!this.__blockSyncToOverlayCtrl&&this.__syncToOverlayController()}_setupOpenCloseListeners(){this.__closeEventInContentNodeHandler=e=>{e.stopPropagation(),this._overlayCtrl.hide()},this._overlayContentNode&&this._overlayContentNode.addEventListener(`close-overlay`,this.__closeEventInContentNodeHandler)}_teardownOpenCloseListeners(){this._overlayContentNode&&this._overlayContentNode.removeEventListener(`close-overlay`,this.__closeEventInContentNodeHandler)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.isConnected&&(this.#e||=(this._setupOverlayCtrl(),!0))})}async disconnectedCallback(){super.disconnectedCallback(),await this._isPermanentlyDisconnected()&&(this._teardownOverlayCtrl(),this.#e=!1)}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];get _overlayInvokerNode(){return Array.from(this.children).find(e=>e.slot===`invoker`)}get _overlayReferenceNode(){}get _overlayBackdropNode(){return this.__cachedOverlayBackdropNode||=Array.from(this.children).find(e=>e.slot===`backdrop`),this.__cachedOverlayBackdropNode}get _overlayContentNode(){return this._cachedOverlayContentNode||=Array.from(this.children).find(e=>e.slot===`content`)||this.config.contentNode,this._cachedOverlayContentNode}get _overlayContentWrapperNode(){return this.shadowRoot?.querySelector(`#overlay-content-node-wrapper`)}_setupOverlayCtrl(){if(this.#e)return;let e={contentNode:this._overlayContentNode,contentWrapperNode:this._overlayContentWrapperNode,invokerNode:this._overlayInvokerNode,referenceNode:this._overlayReferenceNode,backdropNode:this._overlayBackdropNode};this._overlayCtrl?this._overlayCtrl.updateConfig(e):this._overlayCtrl=this._defineOverlay(e),this.__syncToOverlayController(),this.__setupSyncFromOverlayController(),this._setupOpenCloseListeners()}_teardownOverlayCtrl(){this._overlayCtrl&&(this._teardownOpenCloseListeners(),this.__teardownSyncFromOverlayController(),this._overlayCtrl.teardown())}async _setOpenedWithoutPropertyEffects(e){this.__blockSyncToOverlayCtrl=!0,this.opened=e,await this.updateComplete,this.__blockSyncToOverlayCtrl=!1}__setupSyncFromOverlayController(){this.__onOverlayCtrlShow=()=>{this.opened=!0},this.__onOverlayCtrlHide=()=>{this.opened=!1},this.__onBeforeShow=e=>{let t=new CustomEvent(`before-opened`,{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),e.preventDefault())},this.__onBeforeHide=e=>{let t=new CustomEvent(`before-closed`,{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),e.preventDefault())},this._overlayCtrl.addEventListener(`show`,this.__onOverlayCtrlShow),this._overlayCtrl.addEventListener(`hide`,this.__onOverlayCtrlHide),this._overlayCtrl.addEventListener(`before-show`,this.__onBeforeShow),this._overlayCtrl.addEventListener(`before-hide`,this.__onBeforeHide)}__teardownSyncFromOverlayController(){this._overlayCtrl.removeEventListener(`show`,this.__onOverlayCtrlShow),this._overlayCtrl.removeEventListener(`hide`,this.__onOverlayCtrlHide),this._overlayCtrl.removeEventListener(`before-show`,this.__onBeforeShow),this._overlayCtrl.removeEventListener(`before-hide`,this.__onBeforeHide)}__syncToOverlayController(){this.opened?this._overlayCtrl.show():this._overlayCtrl.hide()}async toggle(){await this._overlayCtrl.toggle()}async open(){await this._overlayCtrl.show()}async close(){await this._overlayCtrl.hide()}repositionOverlay(){let e=this._overlayCtrl;e.placementMode===`local`&&e._popper&&e._popper.update()}async _isPermanentlyDisconnected(){return await this.updateComplete,!this.isConnected}}),wn=k(e=>class extends Cn(e){static get properties(){return{hasArrow:{type:Boolean,reflect:!0,attribute:`has-arrow`}}}static get styles(){return[...super.styles||[],o`
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
      `}_defineOverlayConfig(){let e=super._defineOverlayConfig()||{};return this.hasArrow?{...e,popperConfig:{...this._getPopperArrowConfig(e.popperConfig)}}:e}_getPopperArrowConfig(e){return{...e||{},placement:`top`,modifiers:[{name:`arrow`,enabled:!0,options:{padding:8}},{name:`offset`,enabled:!0,options:{offset:[0,8]}},...e&&e.modifiers||[]],onFirstUpdate:e=>{this.__syncFromPopperState(e)},afterWrite:e=>{this.__syncFromPopperState(e)}}}__setupRepositionCompletePromise(){this.repositionComplete=new Promise(e=>{this.__repositionCompleteResolver=e})}get _arrowNode(){return this.shadowRoot.querySelector(`[data-popper-arrow]`)}__syncFromPopperState(e){e&&this._arrowNode&&e.placement!==this._arrowNode.placement&&(this.__repositionCompleteResolver(e.placement),this.__setupRepositionCompletePromise())}});function Tn(){return{visibilityTriggerFunction:({controller:e})=>{function t(){e._hasDisabledInvoker()||e.toggle()}return{init:()=>{e.invokerNode?.addEventListener(`click`,t)},teardown:()=>{e.invokerNode?.removeEventListener(`click`,t)}}}}}var En=()=>({placementMode:`local`,inheritsReferenceWidth:`min`,hidesOnOutsideClick:!0,hidesOnEsc:!0,popperConfig:{placement:`bottom-start`,modifiers:[{name:`offset`,enabled:!1}]},handlesAccessibility:!0,...Tn()});function Dn({delayIn:e=0,delayOut:t=300}){return{visibilityTriggerFunction:({controller:n})=>{let r=!1,i=!1,a;function o(){r=!1,i=!1}function s(o){let{type:s}=o;clearTimeout(a),r=s===`focusout`?!1:r||s===`focusin`,i=s===`mouseleave`?!1:i||s===`mouseenter`,a=(r||i)&&!n._hasDisabledInvoker()?setTimeout(()=>{n.show()},e):setTimeout(()=>{n.hide()},t)}return{init:()=>{n.addEventListener(`hide`,o),n.contentNode?.addEventListener(`mouseenter`,s),n.contentNode?.addEventListener(`mouseleave`,s),n.invokerNode?.addEventListener(`mouseenter`,s),n.invokerNode?.addEventListener(`mouseleave`,s),n.invokerNode?.addEventListener(`focusin`,s),n.invokerNode?.addEventListener(`focusout`,s)},teardown:()=>{n.removeEventListener(`hide`,o),n.contentNode?.removeEventListener(`mouseenter`,s),n.contentNode?.removeEventListener(`mouseleave`,s),n.invokerNode?.removeEventListener(`mouseenter`,s),n.invokerNode?.removeEventListener(`mouseleave`,s),n.invokerNode?.removeEventListener(`focusin`,s),n.invokerNode?.removeEventListener(`focusout`,s)}}}}}var On=({invokerRelation:e=`description`,delayIn:t=300,delayOut:n=300}={})=>({placementMode:`local`,elementToFocusAfterHide:void 0,hidesOnEsc:!0,handlesAccessibility:!0,isTooltip:!0,invokerRelation:e,popperConfig:{strategy:`absolute`},...Dn({delayIn:t,delayOut:n})}),kn=o`
  :host {
    display: contents;
    position: relative;
  }

  /* With no box of its own, the popover can't take a button group's overlap,
     so its invoker does. A craft-button invoker takes it itself, along with
     its own flush margin, which a margin set here would replace. */
  ::slotted([slot='invoker']:not(craft-button)) {
    margin-inline-start: var(--c-button-group-overlap);
  }

  ::slotted(:not([slot='invoker'])) {
    --c-button-group-overlap: initial;
  }

  .popover-pane {
    border: 1px solid var(--c-color-neutral-border-quiet);
    border-radius: var(--c-radius-md);
    background-color: var(--c-surface-overlay);
    color: var(--c-text-default);
    box-shadow: var(--c-shadow-sm);
    min-width: calc(180rem / 16);
    max-width: calc(320rem / 16);
    overflow: auto;
    overscroll-behavior: contain;
    --_fitted-block-size: var(--_popover-available-block-size, 40vh);
    max-height: var(--popover-max-block-size, var(--_fitted-block-size));
  }

  /* The overlay wrapper is the one given the invoker's width, so the pane has
     to stop sizing itself or it stays at its own 320px cap and the match does
     nothing visible. */
  :host([match-invoker-width]) .popover-pane {
    min-width: 0;
    max-width: none;
    width: 100%;
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
`,An={name:`fitAvailableBlockSize`,enabled:!0,phase:`main`,requiresIfExists:[`offset`,`preventOverflow`,`flip`],fn:({state:e,instance:t})=>{let n=e.modifiersData.popperOffsets?.y??0,r=document.documentElement.clientHeight,i=e.placement.split(`-`)[0],a=Math.floor(i===`top`?n+e.rects.popper.height-16:i===`bottom`?r-16-n:r-32),o=e.elements.popper.style,s=`--_popover-available-block-size`,c=o.getPropertyValue(s);!r||a<=0?o.removeProperty(s):o.setProperty(s,`${a}px`),o.getPropertyValue(s)!==c&&t.update()}};function jn(){let e=parseInt(getComputedStyle(document.documentElement).getPropertyValue(`--c-layer-popover`),10);return Number.isNaN(e)?9999:e}var Mn=new WeakMap,Nn=new WeakMap,Pn=new WeakMap,Fn=new WeakMap,In=new WeakSet,Ln=new WeakMap,Rn=new WeakMap,zn=new WeakMap,Bn=new WeakMap,Vn=new WeakMap,Hn=new WeakMap,Un=new WeakMap,Wn=new WeakMap,Gn=new WeakMap,Kn=new WeakMap,qn=class extends Cn(d){constructor(){super(),x(this,In),this.placement=`bottom-start`,this.distance=4,this.matchInvokerWidth=!1,this.withoutArrow=!1,this.withoutInvokerAria=!1,T(this,Mn,null),T(this,Nn,null),T(this,Pn,!1),T(this,Fn,e=>{!this.opened||!(e.relatedTarget instanceof Node)||wt(e,this,this._overlayInvokerNode)||w(In,this,Jn).call(this,e.relatedTarget)||(this.opened=!1)}),T(this,Ln,e=>{e.key===`Escape`&&this.opened&&e.preventDefault()}),T(this,Rn,()=>{C(Pn,this,w(In,this,Yn).call(this))}),T(this,zn,()=>{S(Pn,this)&&(C(Pn,this,!1),!(rt(document.activeElement)&&!w(In,this,Yn).call(this))&&this._overlayCtrl.elementToFocusAfterHide?.focus())}),T(this,Bn,()=>{this._overlayCtrl.__escKeyHandlerCalled=!0}),T(this,Vn,!1),T(this,Hn,!1),T(this,Un,e=>{e.defaultPrevented||(C(Vn,this,!0),C(Hn,this,!1))}),T(this,Wn,()=>{C(Vn,this,!1),S(Hn,this)&&(C(Hn,this,!1),this.opened=!1)}),T(this,Gn,()=>kt(this)),T(this,Kn,()=>At(this)),Et(this),this.addEventListener(`keydown`,S(Ln,this)),this.addEventListener(`focusout`,S(Fn,this))}_setupOverlayCtrl(){super._setupOverlayCtrl(),C(Nn,this,this._overlayCtrl),S(Nn,this).addEventListener(`before-show`,S(Gn,this)),S(Nn,this).addEventListener(`before-hide`,Ct),S(Nn,this).addEventListener(`before-hide`,S(Rn,this)),S(Nn,this).addEventListener(`hide`,S(Kn,this)),S(Nn,this).addEventListener(`hide`,S(zn,this)),S(Nn,this).addEventListener(`hide`,S(Bn,this)),S(Nn,this).addEventListener(`before-show`,S(Un,this)),S(Nn,this).addEventListener(`show`,S(Wn,this))}_teardownOverlayCtrl(){this._overlayCtrl?.isShown&&Ct(),S(Kn,this).call(this),S(Nn,this)?.removeEventListener(`before-show`,S(Gn,this)),S(Nn,this)?.removeEventListener(`before-hide`,Ct),S(Nn,this)?.removeEventListener(`before-hide`,S(Rn,this)),S(Nn,this)?.removeEventListener(`hide`,S(Kn,this)),S(Nn,this)?.removeEventListener(`hide`,S(zn,this)),S(Nn,this)?.removeEventListener(`hide`,S(Bn,this)),S(Nn,this)?.removeEventListener(`before-show`,S(Un,this)),S(Nn,this)?.removeEventListener(`show`,S(Wn,this)),C(Nn,this,null),super._teardownOverlayCtrl()}get _isOpening(){return S(Vn,this)}_defineOverlayConfig(){return{...En(),zIndex:jn(),handlesAccessibility:!this.withoutInvokerAria,inheritsReferenceWidth:this.matchInvokerWidth?`min`:`none`,popperConfig:{strategy:`fixed`,placement:this.placement,modifiers:[{name:`offset`,options:{offset:[0,this.distance]}},...Dt(),An]}}}get _overlayContentNode(){return this.shadowRoot?.querySelector(`.popover-pane`)}get _overlayInvokerNode(){if(this.anchor instanceof HTMLElement)return this.anchor;if(this.anchor?.contextElement instanceof HTMLElement)return this.anchor.contextElement;if(this.for){let e=this.getRootNode();return typeof e.getElementById==`function`?e.getElementById(this.for)??void 0:void 0}return super._overlayInvokerNode}get _overlayReferenceNode(){return this.anchor}render(){return m`
      <slot name="invoker"></slot>
      <slot name="backdrop"></slot>
      <div id="overlay-content-node-wrapper">
        <div class="popover-pane" part="popup" role="none">
          <slot name="content">
            <slot name="content-body"></slot>
            <slot name="content-footer"></slot>
          </slot>
        </div>
      </div>
    `}connectedCallback(){w(In,this,Xn).call(this),super.connectedCallback()}updated(e){super.updated(e),this._overlayCtrl&&((e.has(`for`)||e.has(`anchor`))&&this._overlayCtrl.updateConfig({invokerNode:this._overlayInvokerNode,referenceNode:this._overlayReferenceNode}),(e.has(`placement`)||e.has(`distance`)||e.has(`matchInvokerWidth`)||e.has(`withoutInvokerAria`))&&this._overlayCtrl.updateConfig(this._defineOverlayConfig()))}async show(){this.opened=!0,await this.updateComplete,await this.open()}async hide(){S(Vn,this)&&C(Hn,this,!0),this.opened=!1,await this.updateComplete,await this.close()}};function Jn(e){if(!(e instanceof Element))return!1;let t=e.getRootNode();return(e.getAttribute(`aria-controls`)??``).split(/\s+/).filter(Boolean).some(e=>{let n=t.getElementById(e);return n!==null&&this.contains(n)})}function Yn(){let e=this.getRootNode().activeElement;if(!e)return!1;let t=this._overlayInvokerNode;return t&&(t===e||t.contains(e))?!1:e===this||this.contains(e)}function Xn(){if(S(Mn,this)?.isConnected)return;let e=Array.from(this.childNodes).filter(e=>e instanceof Element?e.slot===``:e instanceof Text&&e.data.trim()!==``);if(!e.length)return;let t=document.createElement(`div`);t.slot=`content`,t.append(...e),this.append(t),C(Mn,this,t)}qn.styles=[re,jt,kn],r([c({reflect:!0})],qn.prototype,`for`,void 0),r([c({attribute:!1})],qn.prototype,`anchor`,void 0),r([c({reflect:!0})],qn.prototype,`placement`,void 0),r([c({type:Number})],qn.prototype,`distance`,void 0),r([c({attribute:`match-invoker-width`,type:Boolean,reflect:!0})],qn.prototype,`matchInvokerWidth`,void 0),r([c({type:Boolean,attribute:`without-arrow`})],qn.prototype,`withoutArrow`,void 0),r([c({type:Boolean,attribute:`without-invoker-aria`,reflect:!0})],qn.prototype,`withoutInvokerAria`,void 0),customElements.get(`craft-popover`)||customElements.define(`craft-popover`,qn);var Zn=o`
  --_input-border-width: var(
    --c-input-border-width,
    var(--c-form-control-border-width)
  );
  --_input-start-start-radius: var(--c-input-radius, var(--c-radius-sm));
  --_input-start-end-radius: var(--c-input-radius, var(--c-radius-sm));
  --_input-end-start-radius: var(--c-input-radius, var(--c-radius-sm));
  --_input-end-end-radius: var(--c-input-radius, var(--c-radius-sm));
  border-width: var(--_input-border-width);
  border-style: var(--c-input-border-style, var(--c-form-control-border-style));
  border-color: var(--c-input-border-color, var(--c-form-control-border-color));
  border-radius: var(--_input-start-start-radius) var(--_input-start-end-radius)
    var(--_input-end-end-radius) var(--_input-end-start-radius);
  background-color: var(--c-input-fill, var(--c-form-control-fill));
  box-shadow: var(--c-input-shadow);
  box-sizing: border-box;
  min-height: var(--c-input-height, var(--c-size-control-md));
`,Qn=o`
  font: inherit;
  color: var(--c-input-text, var(--c-text-default));
  position: relative;
  padding-block: 0;
  width: 100%;
  flex: 1 1 auto;

  /* Detect mobile devices and up the font size of inputs to avoid zoom on focus */
  @media (pointer: none), (pointer: coarse) {
    font-size: 1rem;
  }
`;o`
  ${Zn}
  ${Qn}
`;var $n=o`
  ${Zn}
  width: 100%;
  height: 100%;
  appearance: none;
  padding-inline: var(--c-input-spacing-inline)
    calc(var(--c-input-spacing-inline) * 1.5 + 1em);
`,er=o`
  :host([has-feedback-for='error']) {
    color: var(--c-color-danger-on-normal);

    ::slotted([slot='input']) {
      border-color: var(--c-color-danger-border-loud);
    }
  }

  ::slotted(label) {
    line-height: 1;
    font-weight: var(--c-field-label-font-weight, bold);
    font-size: var(--c-field-label-font-size, var(--text-sm));
  }

  /* The label and help text only render when there's something to show
     (see HasLabel and craft-field), so the spacing can be unconditional. */
  .form-field__label {
    margin-block-end: var(
      --c-field-label-margin-block-end,
      var(--c-spacing-sm)
    );

    &:has(+ .form-field__help-text) {
      margin-block-end: 0;
    }
  }

  .form-field__help-text {
    display: block;
    margin-block-end: var(--c-spacing-sm);
    font-size: 1em;
    color: var(--c-text-quiet);
  }

  .form-field__group-two .form-field__help-text {
    margin-block: var(--c-spacing-xs, 0.3125rem) 0;
  }

  /* Tip/warning notices (see FieldNotices) */
  .field-notice {
    --c-callout-icon-padding-inline: 0;
    --c-callout-text-padding-inline: var(--c-spacing-sm) 0;
    padding: 0;
    margin-block-start: var(--c-spacing-xs, 0.25rem);
  }

  ::slotted([slot='after']) {
    margin-block-start: var(--c-spacing-sm);
  }
`,tr=o`
  ${er}

  :host {
    --_control-height: var(--c-input-height, var(--c-size-control-md));
  }

  :host([size~='small']) {
    --_control-height: var(--c-input-height, var(--c-size-control-sm));
  }

  :host([monospace]) .input-group__container {
    font-family: var(--c-font-mono);
    font-size: 0.9em;
  }

  ::slotted([slot='input']) {
    font: inherit;
    padding-block: 0;
    border: none;
    border-radius: var(--c-input-radius, var(--c-radius-sm));
    appearance: none;
    padding-inline: var(--c-input-spacing-inline);
    background-color: transparent;
    width: 100%;
  }

  .input-group__container {
    ${Qn}
  }

  .input-group__prefix,
  .input-group__suffix {
    padding-inline: var(--c-input-spacing-inline);
    display: grid;
    place-items: center;
    border: var(--c-input-border-width) var(--c-input-border-style)
      var(--c-input-border-color, var(--c-form-control-border-color));
    border-radius: var(--c-input-radius, var(--c-radius-sm));
  }

  .input-group__prefix {
    border-inline-end: 0;
    border-end-end-radius: 0;
    border-start-end-radius: 0;
  }

  .input-group__suffix {
    border-inline-start: 0;
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /*
    A button suffix fills its segment, as craft-input-date-time's clear button
    does, with its focus ring inside it. The segment clips the button's fill
    to its rounded corners.
  */
  .input-group__suffix {
    overflow: clip;
  }

  :host(:not([inline-suffix])) ::slotted(craft-button[slot='suffix']) {
    --c-focus-outline-offset: -2px;
    align-self: stretch;
    box-sizing: border-box;
    width: max(
      var(--c-size-control-sm),
      var(--_control-height) - var(--c-input-border-width) * 2
    );
    height: auto;
    min-height: 0;
    margin-inline: calc(var(--c-input-spacing-inline) * -1);
    border-radius: 0;
  }

  :host([inline-suffix]) .input-group__suffix {
    overflow: visible;
    padding-inline: 0
      calc((var(--_control-height) - var(--c-size-control-sm)) / 2);
  }

  :host([inline-suffix]) .input-group__container:has(.input-group__suffix) {
    border-radius: var(--c-input-radius, var(--c-radius-sm));
    box-shadow: var(--c-input-shadow);
  }

  :host([inline-suffix])
    .input-group__input:has(+ .input-group__suffix)
    ::slotted([slot='input']) {
    --c-focus-outline-width: 0px;
    border-inline-end: 0;
    box-shadow: none;
  }

  :host([inline-suffix][focused-visible])
    .input-group__container:has(.input-group__suffix) {
    outline: var(--c-focus-outline-width) var(--c-focus-outline-style)
      var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
  }

  .input-group__prefix + .input-group__input ::slotted([slot='input']) {
    --_input-start-start-radius: 0;
    --_input-end-start-radius: 0;
  }

  .input-group__prefix + .input-group__input ::slotted([slot='input']),
  .input-group__input:has(+ .input-group__suffix) ::slotted([slot='input']) {
    --c-focus-outline-style: inset;
    --c-focus-outline-offset: -2px;
  }

  .input-group__input:has(+ .input-group__suffix) ::slotted([slot='input']) {
    --_input-end-end-radius: 0;
    --_input-start-end-radius: 0;
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
`,nr={Solid:`solid`,OutlineFill:`outline-fill`,Fill:`fill`,Outline:`outline`,Plain:`plain`};Object.values(nr);var rr=[`sm`,`md`,`lg`,`xl`];function ir(e){if(e!=null&&e!==``){if(e===0||e===`0`||e===`none`)return`0`;if(rr.includes(e))return`var(--c-spacing-${e})`}}var ar=(e,{customProperty:t,defaultValue:n})=>{let i=Array.isArray(t)?t:[t];class a extends e{constructor(...e){super(...e),this.padding=n}get resolvedPadding(){return ir(this.padding)}get paddingStyles(){let e=this.resolvedPadding;return e===void 0?{}:Object.fromEntries(i.map(t=>[t,e]))}}return r([c()],a.prototype,`padding`,void 0),a},or=`important`,sr=` !important`,cr=je(class extends Me{constructor(e){if(super(e),e.type!==Ae.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`}),``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(sr);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?or:``):n[e]=r}}return l}}),lr=o`
  :host {
    display: contents;
  }

  .callout {
    --_radius: var(--c-callout-radius, var(--c-radius-md));
    --_callout-padding-block: var(
      --c-callout-padding-block,
      var(--c-spacing-sm)
    );
    --_callout-padding-inline: var(
      --c-callout-padding-inline,
      var(--c-spacing-sm)
    );
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    row-gap: var(--c-spacing-sm);
    padding-block: var(--_callout-padding-block);
    padding-inline: var(--_callout-padding-inline);
    border: 1px solid transparent;
    /* The display: contents host cannot take a grid span, so its rendered box does. */
    grid-column: 1 / -1;
  }

  .callout__body {
    display: flex;
    flex: 1 1 0;
    align-items: start;
    align-self: center;
    min-inline-size: min(16rem, 100%);
  }

  .callout__text {
    display: grid;
    flex: 1;
    min-width: 0;
  }

  .callout--hide-icon .callout__icon {
    display: none;
  }

  .callout--small {
    font-size: var(--c-text-sm);
    column-gap: var(--c-spacing-xs);

    .callout__body {
      column-gap: var(--c-spacing-xs);
    }
  }

  .callout__title,
  .callout__description {
    padding-inline: var(--c-callout-text-padding-inline, var(--c-spacing-sm));
    --c-link-decoration: underline;
    --c-link-decoration-hover: none;
  }

  .callout__title {
    display: flex;
    font-weight: bold;
  }

  .callout__action {
    flex: 0 1 auto;
    min-width: 0;
    margin-inline-start: auto;
  }

  .callout__icon {
    width: auto;
    height: 1lh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-inline: var(--c-callout-icon-padding-inline, var(--c-spacing-sm));
  }

  ::slotted(code) {
    font-size: 0.9em;
    display: inline-flex;
    padding-block: 0;
    padding-inline: var(--c-spacing-sm);
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

  :host([rounded~='all']) .callout {
    border-radius: var(--_radius);
  }

  :host([rounded~='none']) .callout {
    border-radius: 0;
  }

  :host([rounded~='start']) .callout {
    border-start-start-radius: var(--_radius);
    border-start-end-radius: var(--_radius);
  }

  :host([rounded~='end']) .callout {
    border-end-start-radius: var(--_radius);
    border-end-end-radius: var(--_radius);
  }

  :host([appearance~='solid']) .callout {
    --c-text-link: var(--c-color-on-loud);
    background-color: color-mix(
      in oklab,
      var(--c-color-fill-loud),
      var(--c-surface-default) var(--c-callout-fill-mute, 0%)
    );
    color: var(--c-color-on-loud);
    border-color: var(--c-color-border-loud);
  }

  :host([appearance~='fill']) .callout {
    --c-text-link: var(--c-color-on-normal);
    border-color: transparent;
    background-color: color-mix(
      in oklab,
      var(--c-color-fill-normal),
      var(--c-surface-default) var(--c-callout-fill-mute, 0%)
    );
    color: var(--c-color-on-normal);
  }

  :host([appearance~='outline-fill']) .callout {
    --c-text-link: var(--c-color-on-normal);
    border-color: var(--c-color-border-normal);
    background-color: color-mix(
      in oklab,
      var(--c-color-fill-normal),
      var(--c-surface-default) var(--c-callout-fill-mute, 0%)
    );
    color: var(--c-color-on-normal);
  }

  :host([appearance~='outline']) .callout {
    --c-text-link: var(--c-color-on-quiet);
    border-color: var(--c-color-border-quiet);
    background-color: transparent;
    color: var(--c-color-on-quiet);
  }

  :host([appearance~='plain']) .callout {
    --c-text-link: var(--c-color-on-quiet);
    background-color: transparent;
    border-color: transparent;
    color: var(--c-color-on-quiet);
  }
`,ur=class extends ar(d,{customProperty:[`--_callout-padding-block`,`--_callout-padding-inline`]}){constructor(...e){super(...e),this.variant=ae.Neutral,this.appearance=nr.OutlineFill,this.label=``,this.icon=null,this.hideIcon=!1,this.rounded=`all`,this.inline=!1,this.size=`auto`,this.resolvedIcon=null,this._lightDom=new se(this)}willUpdate(){this.resolvedIcon=this.icon??this.getDefaultIcon()}getDefaultIcon(){switch(this.variant){case ae.Info:return`lightbulb`;case ae.Success:return`circle-check`;case ae.Warning:return`circle-exclamation`;case ae.Danger:return`triangle-exclamation`;default:return null}}render(){let e=this.label||ce(this,`title`),t=!this.hideIcon&&(!!this.resolvedIcon||ce(this,`icon`));return m`
      <div
        part="base"
        data-variant="${this.variant}"
        style="${cr(this.paddingStyles)}"
        class="${O({callout:!0,"callout--hide-icon":!t,"callout--small":this.size===`small`})}"
      >
        <div class="callout__body">
          ${t?m`<slot name="icon" class="callout__icon">
                ${this.resolvedIcon?m`<craft-icon
                      name="${this.resolvedIcon}"
                      style="font-size: 0.9em"
                    ></craft-icon>`:i}
              </slot>`:i}
          <div class="callout__text">
            ${e?m`<div class="callout__title">
                  <slot name="title">${this.label}</slot>
                </div>`:i}

            <div class="callout__description">
              <slot></slot>
            </div>
          </div>
        </div>

        <div class="callout__action"><slot name="action"></slot></div>
      </div>
    `}};ur.styles=[ie,lr],r([c({reflect:!0})],ur.prototype,`variant`,void 0),r([c({reflect:!0})],ur.prototype,`appearance`,void 0),r([c()],ur.prototype,`label`,void 0),r([c()],ur.prototype,`icon`,void 0),r([c({type:Boolean,attribute:`hide-icon`})],ur.prototype,`hideIcon`,void 0),r([c({reflect:!0})],ur.prototype,`rounded`,void 0),r([c({reflect:!0,type:Boolean})],ur.prototype,`inline`,void 0),r([c()],ur.prototype,`size`,void 0),r([p()],ur.prototype,`resolvedIcon`,void 0),customElements.get(`craft-callout`)||customElements.define(`craft-callout`,ur);var dr=class e{constructor(e,...t){this.host=e,this.presence=[],this.handleMutations=()=>{let e=this.snapshot();e.some((e,t)=>e!==this.presence[t])&&(this.presence=e,this.host.requestUpdate())},this.slotNames=t,e.addController(this)}test(t){return t===e.DEFAULT_SLOT?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.presence=this.snapshot(),this.observer??=new MutationObserver(this.handleMutations),this.observer.observe(this.host,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`slot`],characterData:this.slotNames.includes(e.DEFAULT_SLOT)})}hostDisconnected(){this.observer?.disconnect()}hasDefaultSlot(){return Array.from(this.host.childNodes).some(e=>e.nodeType===Node.TEXT_NODE?e.textContent.trim()!==``:e.nodeType===Node.ELEMENT_NODE&&!e.slot)}hasNamedSlot(e){return Array.from(this.host.children).some(t=>t.slot===e)}snapshot(){return this.slotNames.map(e=>this.test(e))}};dr.DEFAULT_SLOT=`[default]`;var fr=e=>{var t=new WeakMap;class r extends e{constructor(...e){super(...e),T(this,t,new dr(this,`tip`,`warning`))}updated(e){super.updated(e);for(let e of[`tip`,`warning`]){let t=this.querySelector(`:scope > [slot="${e}"]`);t&&this.addToAriaDescribedBy(t,{idPrefix:e,reorder:!1})}}_feedbackTemplate(){return m`${this._noticeTemplate(`tip`)}${this._noticeTemplate(`warning`)}${super._feedbackTemplate()}`}_noticeTemplate(e){if(!S(t,this).test(e))return i;let r=e===`tip`;return m`
        <craft-callout
          class="field-notice"
          variant=${r?`info`:`warning`}
          appearance="plain"
          padding="none"
        >
          <craft-visually-hidden>
            ${n(r?`Tip:`:`Warning:`)}
          </craft-visually-hidden>
          <slot name=${e}></slot>
        </craft-callout>
      `}}return r},pr=e=>{var t=new WeakMap,n=new WeakMap,r=new WeakMap,i=new WeakSet;class a extends fr(e){constructor(...e){super(...e),x(this,i),T(this,t,new MutationObserver(()=>w(i,this,s).call(this))),T(this,n,!1),T(this,r,!1)}connectedCallback(){super.connectedCallback(),S(t,this).observe(this,{childList:!0,subtree:!0,characterData:!0}),w(i,this,s).call(this)}disconnectedCallback(){S(t,this).disconnect(),super.disconnectedCallback()}willUpdate(e){super.willUpdate(e),C(n,this,w(i,this,o).call(this,this.label,`label`)),C(r,this,w(i,this,o).call(this,this.helpText,`help-text`))}updated(e){super.updated(e),w(i,this,s).call(this)}_labelTemplate(){return S(n,this)?super._labelTemplate():m``}_helpTextTemplate(){return S(r,this)?super._helpTextTemplate():m``}}function o(e,t){let n=this.querySelector(`:scope > [slot="${t}"]`);return e.trim()!==``||(n?.childElementCount??0)>0}function s(){let e=w(i,this,o).call(this,this.label,`label`),t=w(i,this,o).call(this,this.helpText,`help-text`);this.toggleAttribute(`has-label`,e),(e!==S(n,this)||t!==S(r,this))&&this.requestUpdate()}return a},mr=window,hr=new WeakMap;function gr(e){mr.applyFocusVisiblePolyfill&&!hr.has(e)&&(mr.applyFocusVisiblePolyfill(e),hr.set(e,void 0))}var _r=k(e=>class extends e{static get properties(){return{focused:{type:Boolean,reflect:!0},focusedVisible:{type:Boolean,reflect:!0,attribute:`focused-visible`},autofocus:{type:Boolean,reflect:!0}}}constructor(){super(),this.focused=!1,this.focusedVisible=!1,this.autofocus=!1}firstUpdated(e){super.firstUpdated(e),this.__registerEventsForFocusMixin(),this.__syncAutofocusToFocusableElement()}disconnectedCallback(){super.disconnectedCallback(),this.__teardownEventsForFocusMixin()}updated(e){super.updated(e),e.has(`autofocus`)&&this.__syncAutofocusToFocusableElement()}__syncAutofocusToFocusableElement(){this._focusableNode&&(this.hasAttribute(`autofocus`)?this._focusableNode.setAttribute(`autofocus`,``):this._focusableNode.removeAttribute(`autofocus`))}focus(){this._focusableNode?.focus()}blur(){this._focusableNode?.blur()}get _focusableNode(){return this._inputNode||document.createElement(`input`)}__onFocus(){if(this.focused=!0,typeof mr.applyFocusVisiblePolyfill==`function`)this.focusedVisible=this._focusableNode.hasAttribute(`data-focus-visible-added`);else try{this.focusedVisible=this._focusableNode.matches(`:focus-visible`)}catch{this.focusedVisible=!1}}__onBlur(){this.focused=!1,this.focusedVisible=!1}__registerEventsForFocusMixin(){gr(this.getRootNode()),this.__redispatchFocus=e=>{e.stopPropagation(),this.dispatchEvent(new Event(`focus`))},this._focusableNode.addEventListener(`focus`,this.__redispatchFocus),this.__redispatchBlur=e=>{e.stopPropagation(),this.dispatchEvent(new Event(`blur`))},this._focusableNode.addEventListener(`blur`,this.__redispatchBlur),this.__redispatchFocusin=e=>{e.stopPropagation(),this.__onFocus(),this.dispatchEvent(new Event(`focusin`,{bubbles:!0,composed:!0}))},this._focusableNode.addEventListener(`focusin`,this.__redispatchFocusin),this.__redispatchFocusout=e=>{e.stopPropagation(),this.__onBlur(),this.dispatchEvent(new Event(`focusout`,{bubbles:!0,composed:!0}))},this._focusableNode.addEventListener(`focusout`,this.__redispatchFocusout)}__teardownEventsForFocusMixin(){this._focusableNode&&(this._focusableNode?.removeEventListener(`focus`,this.__redispatchFocus),this._focusableNode?.removeEventListener(`blur`,this.__redispatchBlur),this._focusableNode?.removeEventListener(`focusin`,this.__redispatchFocusin),this._focusableNode?.removeEventListener(`focusout`,this.__redispatchFocusout))}});function vr(e,t){return t={exports:{}},e(t,t.exports),t.exports}var yr=`long`,br=`short`,xr=`narrow`,j=`numeric`,Sr=`2-digit`,Cr={number:{decimal:{style:`decimal`},integer:{style:`decimal`,maximumFractionDigits:0},currency:{style:`currency`,currency:`USD`},percent:{style:`percent`},default:{style:`decimal`}},date:{short:{month:j,day:j,year:Sr},medium:{month:br,day:j,year:j},long:{month:yr,day:j,year:j},full:{month:yr,day:j,year:j,weekday:yr},default:{month:br,day:j,year:j}},time:{short:{hour:j,minute:j},medium:{hour:j,minute:j,second:j},long:{hour:j,minute:j,second:j,timeZoneName:br},full:{hour:j,minute:j,second:j,timeZoneName:br},default:{hour:j,minute:j,second:j}},duration:{default:{hours:{minimumIntegerDigits:1,maximumFractionDigits:0},minutes:{minimumIntegerDigits:2,maximumFractionDigits:0},seconds:{minimumIntegerDigits:2,maximumFractionDigits:3}}},parseNumberPattern:function(e){if(e){var t={},n=e.match(/\b[A-Z]{3}\b/i),r=e.replace(/[^¤]/g,``).length;if(!r&&n&&(r=1),r?(t.style=`currency`,t.currencyDisplay=r===1?`symbol`:r===2?`code`:`name`,t.currency=n?n[0].toUpperCase():`USD`):e.indexOf(`%`)>=0&&(t.style=`percent`),!/[@#0]/.test(e))return t.style?t:void 0;if(t.useGrouping=e.indexOf(`,`)>=0,/E\+?[@#0]+/i.test(e)||e.indexOf(`@`)>=0){var i=e.replace(/E\+?[@#0]+|[^@#0]/gi,``);t.minimumSignificantDigits=Math.min(Math.max(i.replace(/[^@0]/g,``).length,1),21),t.maximumSignificantDigits=Math.min(Math.max(i.length,1),21)}else{for(var a=e.replace(/[^#0.]/g,``).split(`.`),o=a[0],s=o.length-1;o[s]===`0`;)--s;t.minimumIntegerDigits=Math.min(Math.max(o.length-1-s,1),21);var c=a[1]||``;for(s=0;c[s]===`0`;)++s;for(t.minimumFractionDigits=Math.min(Math.max(s,0),20);c[s]===`#`;)++s;t.maximumFractionDigits=Math.min(Math.max(s,0),20)}return t}},parseDatePattern:function(e){if(e){for(var t={},n=0;n<e.length;){for(var r=e[n],i=1;e[++n]===r;)++i;switch(r){case`G`:t.era=i===5?xr:i===4?yr:br;break;case`y`:case`Y`:t.year=i===2?Sr:j;break;case`M`:case`L`:i=Math.min(Math.max(i-1,0),4),t.month=[j,Sr,br,yr,xr][i];break;case`E`:case`e`:case`c`:t.weekday=i===5?xr:i===4?yr:br;break;case`d`:case`D`:t.day=i===2?Sr:j;break;case`h`:case`K`:t.hour12=!0,t.hour=i===2?Sr:j;break;case`H`:case`k`:t.hour12=!1,t.hour=i===2?Sr:j;break;case`m`:t.minute=i===2?Sr:j;break;case`s`:case`S`:t.second=i===2?Sr:j;break;case`z`:case`Z`:case`v`:case`V`:t.timeZoneName=i===1?br:yr;break}}return Object.keys(t).length?t:void 0}}},wr=function(e,t){if(typeof e==`string`&&t[e])return e;for(var n=[].concat(e||[]),r=0,i=n.length;r<i;++r)for(var a=n[r].split(`-`);a.length;){var o=a.join(`-`);if(t[o])return o;a.pop()}},Tr=`zero`,M=`one`,Er=`two`,N=`few`,P=`many`,F=`other`,I=[function(e){return+e==1?M:F},function(e){var t=+e;return 0<=t&&t<=1?M:F},function(e){var t=Math.floor(Math.abs(+e)),n=+e;return t===0||n===1?M:F},function(e){var t=+e;return t===0?Tr:t===1?M:t===2?Er:3<=t%100&&t%100<=10?N:11<=t%100&&t%100<=99?P:F},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length;return t===1&&n===0?M:F},function(e){var t=+e;return t%10==1&&t%100!=11?M:2<=t%10&&t%10<=4&&(t%100<12||14<t%100)?N:t%10==0||5<=t%10&&t%10<=9||11<=t%100&&t%100<=14?P:F},function(e){var t=+e;return t%10==1&&t%100!=11&&t%100!=71&&t%100!=91?M:t%10==2&&t%100!=12&&t%100!=72&&t%100!=92?Er:(3<=t%10&&t%10<=4||t%10==9)&&(t%100<10||19<t%100)&&(t%100<70||79<t%100)&&(t%100<90||99<t%100)?N:t!==0&&t%1e6==0?P:F},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length,r=+(e+`.`).split(`.`)[1];return n===0&&t%10==1&&t%100!=11||r%10==1&&r%100!=11?M:n===0&&2<=t%10&&t%10<=4&&(t%100<12||14<t%100)||2<=r%10&&r%10<=4&&(r%100<12||14<r%100)?N:F},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length;return t===1&&n===0?M:2<=t&&t<=4&&n===0?N:n===0?F:P},function(e){var t=+e;return t===0?Tr:t===1?M:t===2?Er:t===3?N:t===6?P:F},function(e){var t=Math.floor(Math.abs(+e)),n=+(``+e).replace(/^[^.]*.?|0+$/g,``);return+e==1||n!==0&&(t===0||t===1)?M:F},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length,r=+(e+`.`).split(`.`)[1];return n===0&&t%100==1||r%100==1?M:n===0&&t%100==2||r%100==2?Er:n===0&&3<=t%100&&t%100<=4||3<=r%100&&r%100<=4?N:F},function(e){var t=Math.floor(Math.abs(+e));return t===0||t===1?M:F},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length,r=+(e+`.`).split(`.`)[1];return n===0&&(t===1||t===2||t===3)||n===0&&t%10!=4&&t%10!=6&&t%10!=9||n!==0&&r%10!=4&&r%10!=6&&r%10!=9?M:F},function(e){var t=+e;return t===1?M:t===2?Er:3<=t&&t<=6?N:7<=t&&t<=10?P:F},function(e){var t=+e;return t===1||t===11?M:t===2||t===12?Er:3<=t&&t<=10||13<=t&&t<=19?N:F},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length;return n===0&&t%10==1?M:n===0&&t%10==2?Er:n===0&&(t%100==0||t%100==20||t%100==40||t%100==60||t%100==80)?N:n===0?F:P},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length,r=+e;return t===1&&n===0?M:t===2&&n===0?Er:n===0&&(r<0||10<r)&&r%10==0?P:F},function(e){var t=Math.floor(Math.abs(+e)),n=+(``+e).replace(/^[^.]*.?|0+$/g,``);return n===0&&t%10==1&&t%100!=11||n!==0?M:F},function(e){var t=+e;return t===1?M:t===2?Er:F},function(e){var t=+e;return t===0?Tr:t===1?M:F},function(e){var t=Math.floor(Math.abs(+e)),n=+e;return n===0?Tr:(t===0||t===1)&&n!==0?M:F},function(e){var t=+(e+`.`).split(`.`)[1],n=+e;return n%10==1&&(n%100<11||19<n%100)?M:2<=n%10&&n%10<=9&&(n%100<11||19<n%100)?N:t===0?F:P},function(e){var t=(e+`.`).split(`.`)[1].length,n=+(e+`.`).split(`.`)[1],r=+e;return r%10==0||11<=r%100&&r%100<=19||t===2&&11<=n%100&&n%100<=19?Tr:r%10==1&&r%100!=11||t===2&&n%10==1&&n%100!=11||t!==2&&n%10==1?M:F},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length,r=+(e+`.`).split(`.`)[1];return n===0&&t%10==1&&t%100!=11||r%10==1&&r%100!=11?M:F},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length,r=+e;return t===1&&n===0?M:n!==0||r===0||r!==1&&1<=r%100&&r%100<=19?N:F},function(e){var t=+e;return t===1?M:t===0||2<=t%100&&t%100<=10?N:11<=t%100&&t%100<=19?P:F},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length;return t===1&&n===0?M:n===0&&2<=t%10&&t%10<=4&&(t%100<12||14<t%100)?N:n===0&&t!==1&&0<=t%10&&t%10<=1||n===0&&5<=t%10&&t%10<=9||n===0&&12<=t%100&&t%100<=14?P:F},function(e){var t=Math.floor(Math.abs(+e));return 0<=t&&t<=1?M:F},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length;return n===0&&t%10==1&&t%100!=11?M:n===0&&2<=t%10&&t%10<=4&&(t%100<12||14<t%100)?N:n===0&&t%10==0||n===0&&5<=t%10&&t%10<=9||n===0&&11<=t%100&&t%100<=14?P:F},function(e){var t=Math.floor(Math.abs(+e)),n=+e;return t===0||n===1?M:2<=n&&n<=10?N:F},function(e){var t=Math.floor(Math.abs(+e)),n=+(e+`.`).split(`.`)[1],r=+e;return r===0||r===1||t===0&&n===1?M:F},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length;return n===0&&t%100==1?M:n===0&&t%100==2?Er:n===0&&3<=t%100&&t%100<=4||n!==0?N:F},function(e){var t=+e;return 0<=t&&t<=1||11<=t&&t<=99?M:F},function(e){var t=+e;return t===1||t===5||t===7||t===8||t===9||t===10?M:t===2||t===3?Er:t===4?N:t===6?P:F},function(e){var t=Math.floor(Math.abs(+e));return t%10==1||t%10==2||t%10==5||t%10==7||t%10==8||t%100==20||t%100==50||t%100==70||t%100==80?M:t%10==3||t%10==4||t%1e3==100||t%1e3==200||t%1e3==300||t%1e3==400||t%1e3==500||t%1e3==600||t%1e3==700||t%1e3==800||t%1e3==900?N:t===0||t%10==6||t%100==40||t%100==60||t%100==90?P:F},function(e){var t=+e;return(t%10==2||t%10==3)&&t%100!=12&&t%100!=13?N:F},function(e){var t=+e;return t===1||t===3?M:t===2?Er:t===4?N:F},function(e){var t=+e;return t===0||t===7||t===8||t===9?Tr:t===1?M:t===2?Er:t===3||t===4?N:t===5||t===6?P:F},function(e){var t=+e;return t%10==1&&t%100!=11?M:t%10==2&&t%100!=12?Er:t%10==3&&t%100!=13?N:F},function(e){var t=+e;return t===1||t===11?M:t===2||t===12?Er:t===3||t===13?N:F},function(e){var t=+e;return t===1?M:t===2||t===3?Er:t===4?N:t===6?P:F},function(e){var t=+e;return t===1||t===5?M:F},function(e){var t=+e;return t===11||t===8||t===80||t===800?P:F},function(e){var t=Math.floor(Math.abs(+e));return t===1?M:t===0||2<=t%100&&t%100<=20||t%100==40||t%100==60||t%100==80?P:F},function(e){var t=+e;return t%10==6||t%10==9||t%10==0&&t!==0?P:F},function(e){var t=Math.floor(Math.abs(+e));return t%10==1&&t%100!=11?M:t%10==2&&t%100!=12?Er:(t%10==7||t%10==8)&&t%100!=17&&t%100!=18?P:F},function(e){var t=+e;return t===1?M:t===2||t===3?Er:t===4?N:F},function(e){var t=+e;return 1<=t&&t<=4?M:F},function(e){var t=+e;return t===1||t===5||7<=t&&t<=9?M:t===2||t===3?Er:t===4?N:t===6?P:F},function(e){var t=+e;return t===1?M:t%10==4&&t%100!=14?P:F},function(e){var t=+e;return(t%10==1||t%10==2)&&t%100!=11&&t%100!=12?M:F},function(e){var t=+e;return t%10==6||t%10==9||t===10?N:F},function(e){var t=+e;return t%10==3&&t%100!=13?N:F}],Dr={af:{cardinal:I[0]},ak:{cardinal:I[1]},am:{cardinal:I[2]},ar:{cardinal:I[3]},ars:{cardinal:I[3]},as:{cardinal:I[2],ordinal:I[34]},asa:{cardinal:I[0]},ast:{cardinal:I[4]},az:{cardinal:I[0],ordinal:I[35]},be:{cardinal:I[5],ordinal:I[36]},bem:{cardinal:I[0]},bez:{cardinal:I[0]},bg:{cardinal:I[0]},bh:{cardinal:I[1]},bn:{cardinal:I[2],ordinal:I[34]},br:{cardinal:I[6]},brx:{cardinal:I[0]},bs:{cardinal:I[7]},ca:{cardinal:I[4],ordinal:I[37]},ce:{cardinal:I[0]},cgg:{cardinal:I[0]},chr:{cardinal:I[0]},ckb:{cardinal:I[0]},cs:{cardinal:I[8]},cy:{cardinal:I[9],ordinal:I[38]},da:{cardinal:I[10]},de:{cardinal:I[4]},dsb:{cardinal:I[11]},dv:{cardinal:I[0]},ee:{cardinal:I[0]},el:{cardinal:I[0]},en:{cardinal:I[4],ordinal:I[39]},eo:{cardinal:I[0]},es:{cardinal:I[0]},et:{cardinal:I[4]},eu:{cardinal:I[0]},fa:{cardinal:I[2]},ff:{cardinal:I[12]},fi:{cardinal:I[4]},fil:{cardinal:I[13],ordinal:I[0]},fo:{cardinal:I[0]},fr:{cardinal:I[12],ordinal:I[0]},fur:{cardinal:I[0]},fy:{cardinal:I[4]},ga:{cardinal:I[14],ordinal:I[0]},gd:{cardinal:I[15],ordinal:I[40]},gl:{cardinal:I[4]},gsw:{cardinal:I[0]},gu:{cardinal:I[2],ordinal:I[41]},guw:{cardinal:I[1]},gv:{cardinal:I[16]},ha:{cardinal:I[0]},haw:{cardinal:I[0]},he:{cardinal:I[17]},hi:{cardinal:I[2],ordinal:I[41]},hr:{cardinal:I[7]},hsb:{cardinal:I[11]},hu:{cardinal:I[0],ordinal:I[42]},hy:{cardinal:I[12],ordinal:I[0]},ia:{cardinal:I[4]},io:{cardinal:I[4]},is:{cardinal:I[18]},it:{cardinal:I[4],ordinal:I[43]},iu:{cardinal:I[19]},iw:{cardinal:I[17]},jgo:{cardinal:I[0]},ji:{cardinal:I[4]},jmc:{cardinal:I[0]},ka:{cardinal:I[0],ordinal:I[44]},kab:{cardinal:I[12]},kaj:{cardinal:I[0]},kcg:{cardinal:I[0]},kk:{cardinal:I[0],ordinal:I[45]},kkj:{cardinal:I[0]},kl:{cardinal:I[0]},kn:{cardinal:I[2]},ks:{cardinal:I[0]},ksb:{cardinal:I[0]},ksh:{cardinal:I[20]},ku:{cardinal:I[0]},kw:{cardinal:I[19]},ky:{cardinal:I[0]},lag:{cardinal:I[21]},lb:{cardinal:I[0]},lg:{cardinal:I[0]},ln:{cardinal:I[1]},lt:{cardinal:I[22]},lv:{cardinal:I[23]},mas:{cardinal:I[0]},mg:{cardinal:I[1]},mgo:{cardinal:I[0]},mk:{cardinal:I[24],ordinal:I[46]},ml:{cardinal:I[0]},mn:{cardinal:I[0]},mo:{cardinal:I[25],ordinal:I[0]},mr:{cardinal:I[2],ordinal:I[47]},mt:{cardinal:I[26]},nah:{cardinal:I[0]},naq:{cardinal:I[19]},nb:{cardinal:I[0]},nd:{cardinal:I[0]},ne:{cardinal:I[0],ordinal:I[48]},nl:{cardinal:I[4]},nn:{cardinal:I[0]},nnh:{cardinal:I[0]},no:{cardinal:I[0]},nr:{cardinal:I[0]},nso:{cardinal:I[1]},ny:{cardinal:I[0]},nyn:{cardinal:I[0]},om:{cardinal:I[0]},or:{cardinal:I[0],ordinal:I[49]},os:{cardinal:I[0]},pa:{cardinal:I[1]},pap:{cardinal:I[0]},pl:{cardinal:I[27]},prg:{cardinal:I[23]},ps:{cardinal:I[0]},pt:{cardinal:I[28]},"pt-PT":{cardinal:I[4]},rm:{cardinal:I[0]},ro:{cardinal:I[25],ordinal:I[0]},rof:{cardinal:I[0]},ru:{cardinal:I[29]},rwk:{cardinal:I[0]},saq:{cardinal:I[0]},sc:{cardinal:I[4],ordinal:I[43]},scn:{cardinal:I[4],ordinal:I[43]},sd:{cardinal:I[0]},sdh:{cardinal:I[0]},se:{cardinal:I[19]},seh:{cardinal:I[0]},sh:{cardinal:I[7]},shi:{cardinal:I[30]},si:{cardinal:I[31]},sk:{cardinal:I[8]},sl:{cardinal:I[32]},sma:{cardinal:I[19]},smi:{cardinal:I[19]},smj:{cardinal:I[19]},smn:{cardinal:I[19]},sms:{cardinal:I[19]},sn:{cardinal:I[0]},so:{cardinal:I[0]},sq:{cardinal:I[0],ordinal:I[50]},sr:{cardinal:I[7]},ss:{cardinal:I[0]},ssy:{cardinal:I[0]},st:{cardinal:I[0]},sv:{cardinal:I[4],ordinal:I[51]},sw:{cardinal:I[4]},syr:{cardinal:I[0]},ta:{cardinal:I[0]},te:{cardinal:I[0]},teo:{cardinal:I[0]},ti:{cardinal:I[1]},tig:{cardinal:I[0]},tk:{cardinal:I[0],ordinal:I[52]},tl:{cardinal:I[13],ordinal:I[0]},tn:{cardinal:I[0]},tr:{cardinal:I[0]},ts:{cardinal:I[0]},tzm:{cardinal:I[33]},ug:{cardinal:I[0]},uk:{cardinal:I[29],ordinal:I[53]},ur:{cardinal:I[4]},uz:{cardinal:I[0]},ve:{cardinal:I[0]},vo:{cardinal:I[0]},vun:{cardinal:I[0]},wa:{cardinal:I[1]},wae:{cardinal:I[0]},xh:{cardinal:I[0]},xog:{cardinal:I[0]},yi:{cardinal:I[4]},zu:{cardinal:I[2]},lo:{ordinal:I[0]},ms:{ordinal:I[0]},vi:{ordinal:I[0]}},Or=vr(function(e,t){t=e.exports=function(e,t,r){return n(e,null,t||`en`,r||{},!0)},t.toParts=function(e,t,r){return n(e,null,t||`en`,r||{},!1)};function n(e,t,n,i,a){var o=e.map(function(e){return r(e,t,n,i,a)});return a?o.length===1?o[0]:function(e){for(var t=``,n=0;n<o.length;++n)t+=o[n](e);return t}:function(e){return o.reduce(function(t,n){return t.concat(n(e))},[])}}function r(e,t,r,a,o){if(typeof e==`string`){var s=e;return function(){return s}}var c=e[0],l=e[1];if(t&&e[0]===`#`){c=t[0];var u=t[2],f=(a.number||d.number)([c,`number`],r);return function(e){return f(i(c,e)-u,e)}}var p;l===`plural`||l===`selectordinal`?(p={},Object.keys(e[3]).forEach(function(t){p[t]=n(e[3][t],e,r,a,o)}),e=[e[0],e[1],e[2],p]):e[2]&&typeof e[2]==`object`&&(p={},Object.keys(e[2]).forEach(function(t){p[t]=n(e[2][t],e,r,a,o)}),e=[e[0],e[1],p]);var m=l&&(a[l]||d[l]);if(m){var h=m(e,r);return function(e){return h(i(c,e),e)}}return o?function(e){return String(i(c,e))}:function(e){return i(c,e)}}function i(e,t){if(t&&e in t)return t[e];for(var n=e.split(`.`),r=t,i=0,a=n.length;r&&i<a;++i)r=r[n[i]];return r}function a(e,t){var n=e[2],r=Cr.number[n]||Cr.parseNumberPattern(n)||Cr.number.default;return new Intl.NumberFormat(t,r).format}function o(e,t){var n=e[2],r=Cr.duration[n]||Cr.duration.default,i=new Intl.NumberFormat(t,r.seconds).format,a=new Intl.NumberFormat(t,r.minutes).format,o=new Intl.NumberFormat(t,r.hours).format,s=/^fi$|^fi-|^da/.test(String(t))?`.`:`:`;return function(e,t){if(e=+e,!isFinite(e))return i(e);var n=~~(e/60/60),r=~~(e/60%60),c=(n?o(Math.abs(n))+s:``)+a(Math.abs(r))+s+i(Math.abs(e%60));return e<0?o(-1).replace(o(1),c):c}}function s(e,t){var n=e[1],r=e[2],i=Cr[n][r]||Cr.parseDatePattern(r)||Cr[n].default;return new Intl.DateTimeFormat(t,i).format}function c(e,t){var n=e[1]===`selectordinal`?`ordinal`:`cardinal`,r=e[2],i=e[3],a;if(Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf(t).length>0)a=new Intl.PluralRules(t,{type:n});else{var o=wr(t,Dr);a={select:o&&Dr[o][n]||l}}return function(e,t){return(i[`=`+ +e]||i[a.select(e-r)]||i.other)(t)}}function l(){return`other`}function u(e,t){var n=e[2];return function(e,t){return(n[e]||n.other)(t)}}var d={number:a,ordinal:a,spellout:a,duration:o,date:s,time:s,plural:c,selectordinal:c,select:u};t.types=d});Or.toParts,Or.types;var kr=vr(function(e,t){var n=[`number`,`date`,`time`,`ordinal`,`duration`,`spellout`],r=[`plural`,`select`,`selectordinal`];t=e.exports=function(e,t){return i({pattern:String(e),index:0,tagsType:t&&t.tagsType||null,tokens:t&&t.tokens||null},``)};function i(e,t){var n=e.pattern,r=n.length,i=[],o=e.index,s=a(e,t);for(s&&i.push(s),s&&e.tokens&&e.tokens.push([`text`,n.slice(o,e.index)]);e.index<r;){if(n[e.index]===`}`){if(!t)throw g(e);break}if(t&&e.tagsType&&n.slice(e.index,e.index+2)===`</`)break;i.push(c(e)),o=e.index,s=a(e,t),s&&i.push(s),s&&e.tokens&&e.tokens.push([`text`,n.slice(o,e.index)])}return i}function a(e,t){for(var n=e.pattern,r=n.length,i=t===`plural`||t===`selectordinal`,a=!!e.tagsType,s=t===`{style}`,c=``;e.index<r;){var l=n[e.index];if(l===`{`||l===`}`||i&&l===`#`||a&&l===`<`||s&&o(l.charCodeAt(0)))break;if(l===`'`)if(l=n[++e.index],l===`'`)c+=l,++e.index;else if(l===`{`||l===`}`||i&&l===`#`||a&&l===`<`||s)for(c+=l;++e.index<r;)if(l=n[e.index],l===`'`&&n[e.index+1]===`'`)c+=`'`,++e.index;else if(l===`'`){++e.index;break}else c+=l;else c+=`'`;else c+=l,++e.index}return c}function o(e){return e>=9&&e<=13||e===32||e===133||e===160||e===6158||e>=8192&&e<=8205||e===8232||e===8233||e===8239||e===8287||e===8288||e===12288||e===65279}function s(e){for(var t=e.pattern,n=t.length,r=e.index;e.index<n&&o(t.charCodeAt(e.index));)++e.index;r<e.index&&e.tokens&&e.tokens.push([`space`,e.pattern.slice(r,e.index)])}function c(e){var t=e.pattern;if(t[e.index]===`#`)return e.tokens&&e.tokens.push([`syntax`,`#`]),++e.index,[`#`];var r=l(e);if(r)return r;if(t[e.index]!==`{`)throw g(e,`{`);e.tokens&&e.tokens.push([`syntax`,`{`]),++e.index,s(e);var i=u(e);if(!i)throw g(e,`placeholder id`);e.tokens&&e.tokens.push([`id`,i]),s(e);var a=t[e.index];if(a===`}`)return e.tokens&&e.tokens.push([`syntax`,`}`]),++e.index,[i];if(a!==`,`)throw g(e,`, or }`);e.tokens&&e.tokens.push([`syntax`,`,`]),++e.index,s(e);var o=u(e);if(!o)throw g(e,`placeholder type`);if(e.tokens&&e.tokens.push([`type`,o]),s(e),a=t[e.index],a===`}`){if(e.tokens&&e.tokens.push([`syntax`,`}`]),o===`plural`||o===`selectordinal`||o===`select`)throw g(e,o+` sub-messages`);return++e.index,[i,o]}if(a!==`,`)throw g(e,`, or }`);e.tokens&&e.tokens.push([`syntax`,`,`]),++e.index,s(e);var c;if(o===`plural`||o===`selectordinal`){var p=f(e);s(e),c=[i,o,p,m(e,o)]}else if(o===`select`)c=[i,o,m(e,o)];else if(n.indexOf(o)>=0)c=[i,o,d(e)];else{var h=e.index,_=d(e);s(e),t[e.index]===`{`&&(e.index=h,_=m(e,o)),c=[i,o,_]}if(s(e),t[e.index]!==`}`)throw g(e,`}`);return e.tokens&&e.tokens.push([`syntax`,`}`]),++e.index,c}function l(e){var t=e.tagsType;if(!(!t||e.pattern[e.index]!==`<`)){if(e.pattern.slice(e.index,e.index+2)===`</`)throw g(e,null,`closing tag without matching opening tag`);e.tokens&&e.tokens.push([`syntax`,`<`]),++e.index;var n=u(e,!0);if(!n)throw g(e,`placeholder id`);if(e.tokens&&e.tokens.push([`id`,n]),s(e),e.pattern.slice(e.index,e.index+2)===`/>`)return e.tokens&&e.tokens.push([`syntax`,`/>`]),e.index+=2,[n,t];if(e.pattern[e.index]!==`>`)throw g(e,`>`);e.tokens&&e.tokens.push([`syntax`,`>`]),++e.index;var r=i(e,t),a=e.index;if(e.pattern.slice(e.index,e.index+2)!==`</`)throw g(e,`</`+n+`>`);e.tokens&&e.tokens.push([`syntax`,`</`]),e.index+=2;var o=u(e,!0);if(o&&e.tokens&&e.tokens.push([`id`,o]),n!==o)throw e.index=a,g(e,`</`+n+`>`,`</`+o+`>`);if(s(e),e.pattern[e.index]!==`>`)throw g(e,`>`);return e.tokens&&e.tokens.push([`syntax`,`>`]),++e.index,[n,t,{children:r}]}}function u(e,t){for(var n=e.pattern,r=n.length,i=``;e.index<r;){var a=n[e.index];if(a===`{`||a===`}`||a===`,`||a===`#`||a===`'`||o(a.charCodeAt(0))||t&&(a===`<`||a===`>`||a===`/`))break;i+=a,++e.index}return i}function d(e){var t=e.index,n=a(e,`{style}`);if(!n)throw g(e,`placeholder style name`);return e.tokens&&e.tokens.push([`style`,e.pattern.slice(t,e.index)]),n}function f(e){var t=e.pattern,n=t.length,r=0;if(t.slice(e.index,e.index+7)===`offset:`){e.tokens&&e.tokens.push([`offset`,`offset`],[`syntax`,`:`]),e.index+=7,s(e);for(var i=e.index;e.index<n&&p(t.charCodeAt(e.index));)++e.index;if(i===e.index)throw g(e,`offset number`);e.tokens&&e.tokens.push([`number`,t.slice(i,e.index)]),r=+t.slice(i,e.index)}return r}function p(e){return e>=48&&e<=57}function m(e,t){for(var n=e.pattern,i=n.length,a={};e.index<i&&n[e.index]!==`}`;){var o=u(e);if(!o)throw g(e,`sub-message selector`);e.tokens&&e.tokens.push([`selector`,o]),s(e),a[o]=h(e,t),s(e)}if(!a.other&&r.indexOf(t)>=0)throw g(e,null,null,`"other" sub-message must be specified in `+t);return a}function h(e,t){if(e.pattern[e.index]!==`{`)throw g(e,`{ to start sub-message`);e.tokens&&e.tokens.push([`syntax`,`{`]),++e.index;var n=i(e,t);if(e.pattern[e.index]!==`}`)throw g(e,`} to end sub-message`);return e.tokens&&e.tokens.push([`syntax`,`}`]),++e.index,n}function g(e,t,n,r){var i=e.pattern,a=i.slice(0,e.index).split(/\r?\n/),o=e.index,s=a.length,c=a.slice(-1)[0].length;return n||=e.index>=i.length?`end of message pattern`:u(e)||i[e.index],r||=_(t,n),r+=` in `+i.replace(/\r?\n/g,`
`),new v(r,t,n,o,s,c)}function _(e,t){return e?`Expected `+e+` but found `+t:`Unexpected `+t+` found`}function v(e,t,n,r,i,a){Error.call(this,e),this.name=`SyntaxError`,this.message=e,this.expected=t,this.found=n,this.offset=r,this.line=i,this.column=a}v.prototype=Object.create(Error.prototype),t.SyntaxError=v});kr.SyntaxError;var Ar=RegExp(`^(`+Object.keys(Dr).join(`|`)+`)\\b`),jr=new WeakMap;function Mr(e,t,n){if(!(this instanceof Mr)||jr.has(this))throw TypeError(`calling MessageFormat constructor without new is invalid`);var r=kr(e);jr.set(this,{ast:r,format:Or(r,t,n&&n.types),locale:Mr.supportedLocalesOf(t)[0]||`en`,locales:t,options:n})}var Nr=Mr;Object.defineProperties(Mr.prototype,{format:{configurable:!0,get:function(){var e=jr.get(this);if(!e)throw TypeError(`MessageFormat.prototype.format called on value that's not an object initialized as a MessageFormat`);return e.format}},formatToParts:{configurable:!0,writable:!0,value:function(e){var t=jr.get(this);if(!t)throw TypeError(`MessageFormat.prototype.formatToParts called on value that's not an object initialized as a MessageFormat`);return(t.toParts||=Or.toParts(t.ast,t.locales,t.options&&t.options.types))(e)}},resolvedOptions:{configurable:!0,writable:!0,value:function(){var e=jr.get(this);if(!e)throw TypeError(`MessageFormat.prototype.resolvedOptions called on value that's not an object initialized as a MessageFormat`);return{locale:e.locale}}}}),typeof Symbol<`u`&&Object.defineProperty(Mr.prototype,Symbol.toStringTag,{value:`Object`}),Object.defineProperties(Mr,{supportedLocalesOf:{configurable:!0,writable:!0,value:function(e){return[].concat(Intl.NumberFormat.supportedLocalesOf(e),Intl.DateTimeFormat.supportedLocalesOf(e),Intl.PluralRules?Intl.PluralRules.supportedLocalesOf(e):[],[].concat(e||[]).filter(function(e){return Ar.test(e)})).filter(function(e,t,n){return n.indexOf(e)===t})}}});function Pr(e){return!!(e&&e.default&&typeof e.default==`object`&&Object.keys(e).length===1)}var Fr=globalThis.document?.documentElement,Ir=class extends EventTarget{formatNumberOptions={returnIfNaN:``,postProcessors:new Map};formatDateOptions={postProcessors:new Map};#e=!1;#t=``;#n=null;__storage={};__namespacePatternsMap=new Map;__namespaceLoadersCache={};__namespaceLoaderPromisesCache={};get locale(){return this.#e?this.#t||``:Fr.lang||``}set locale(e){if(this.#r(e),!this.#e){let t=Fr.lang;this._setHtmlLangAttribute(e),this._onLocaleChanged(e,t);return}let t=this.#t;this.#t=e,this.#n===null&&this._setHtmlLangAttribute(e),this._onLocaleChanged(e,t)}get loadingComplete(){return typeof this.__namespaceLoaderPromisesCache[this.locale]==`object`?Promise.all(Object.values(this.__namespaceLoaderPromisesCache[this.locale])):Promise.resolve()}constructor({allowOverridesForExistingNamespaces:e=!1,autoLoadOnLocaleChange:t=!1,showKeyAsFallback:n=!1,fallbackLocale:r=``}={}){super(),this.__allowOverridesForExistingNamespaces=e,this._autoLoadOnLocaleChange=!!t,this._showKeyAsFallback=n,this._fallbackLocale=r;let i=Fr.getAttribute(`data-localize-lang`);this.#e=!!i,this.#e&&(this.locale=i,this._setupTranslationToolSupport()),Fr.lang||=this.locale||`en-GB`,this._setupHtmlLangAttributeObserver()}addData(e,t,n){if(!this.__allowOverridesForExistingNamespaces&&this._isNamespaceInCache(e,t))throw Error(`Namespace "${t}" has been already added for the locale "${e}".`);this.__storage[e]=this.__storage[e]||{},this.__allowOverridesForExistingNamespaces?this.__storage[e][t]={...this.__storage[e][t],...n}:this.__storage[e][t]=n}setupNamespaceLoader(e,t){this.__namespacePatternsMap.set(e,t)}loadNamespaces(e,{locale:t}={}){return Promise.all(e.map(e=>this.loadNamespace(e,{locale:t})))}loadNamespace(e,{locale:t=this.locale}={locale:this.locale}){let n=typeof e==`object`,r=n?Object.keys(e)[0]:e;return this._isNamespaceInCache(t,r)?Promise.resolve():this._getCachedNamespaceLoaderPromise(t,r)||this._loadNamespaceData(t,e,n,r)}msg(e,t,n={}){let r=n.locale?n.locale:this.locale,i=this._getMessageForKeys(e,r);return i?new Nr(i,r).format(t):``}teardown(){this._teardownHtmlLangAttributeObserver()}reset(){this.__storage={},this.__namespacePatternsMap=new Map,this.__namespaceLoadersCache={},this.__namespaceLoaderPromisesCache={}}setDatePostProcessorForLocale({locale:e,postProcessor:t}){this.formatDateOptions?.postProcessors.set(e,t)}setNumberPostProcessorForLocale({locale:e,postProcessor:t}){this.formatNumberOptions?.postProcessors.set(e,t)}_setupTranslationToolSupport(){this.#n=Fr.lang||null}_setHtmlLangAttribute(e){this._teardownHtmlLangAttributeObserver(),Fr.lang=e,this._setupHtmlLangAttributeObserver()}_setupHtmlLangAttributeObserver(){this._htmlLangAttributeObserver||=new MutationObserver(e=>{e.forEach(e=>{this.#e?Fr.lang===`auto`?(this.#n=null,this._setHtmlLangAttribute(this.locale)):this.#n=document.documentElement.lang:this._onLocaleChanged(document.documentElement.lang,e.oldValue||``)})}),this._htmlLangAttributeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:[`lang`],attributeOldValue:!0})}_teardownHtmlLangAttributeObserver(){this._htmlLangAttributeObserver&&this._htmlLangAttributeObserver.disconnect()}_isNamespaceInCache(e,t){return!!(this.__storage[e]&&this.__storage[e][t])}_getCachedNamespaceLoaderPromise(e,t){return this.__namespaceLoaderPromisesCache[e]?this.__namespaceLoaderPromisesCache[e][t]:null}_loadNamespaceData(e,t,n,r){let i=this._getNamespaceLoader(t,n,r),a=this._getNamespaceLoaderPromise(i,e,r);return this._cacheNamespaceLoaderPromise(e,r,a),a.then(t=>{if(this.__namespaceLoaderPromisesCache[e]&&this.__namespaceLoaderPromisesCache[e][r]===a){let n=Pr(t)?t.default:t;this.addData(e,r,n)}})}_getNamespaceLoader(e,t,n){let r=this.__namespaceLoadersCache[n];if(r||(t?(r=e[n],this.__namespaceLoadersCache[n]=r):(r=this._lookupNamespaceLoader(n),this.__namespaceLoadersCache[n]=r)),!r)throw Error(`Namespace "${n}" was not properly setup.`);return this.__namespaceLoadersCache[n]=r,r}_getNamespaceLoaderPromise(e,t,n,r=this._fallbackLocale){return e(t,n).catch(()=>{let i=this._getLangFromLocale(t);return e(i,n).catch(()=>{if(r)return this._getNamespaceLoaderPromise(e,r,n,``).catch(()=>{let e=this._getLangFromLocale(r);throw Error(`Data for namespace "${n}" and current locale "${t}" or fallback locale "${r}" could not be loaded. Make sure you have data either for locale "${t}" (and/or generic language "${i}") or for fallback "${r}" (and/or "${e}").`)});throw Error(`Data for namespace "${n}" and locale "${t}" could not be loaded. Make sure you have data for locale "${t}" (and/or generic language "${i}").`)})})}_cacheNamespaceLoaderPromise(e,t,n){this.__namespaceLoaderPromisesCache[e]||(this.__namespaceLoaderPromisesCache[e]={}),this.__namespaceLoaderPromisesCache[e][t]=n}_lookupNamespaceLoader(e){for(let[t,n]of this.__namespacePatternsMap){let r=typeof t==`string`&&t===e,i=typeof t==`object`&&t.constructor.name===`RegExp`&&t.test(e);if(r||i)return n}return null}_getLangFromLocale(e){return e.substring(0,2)}_onLocaleChanged(e,t){this.dispatchEvent(new CustomEvent(`__localeChanging`)),e!==t&&(this._autoLoadOnLocaleChange?(this._loadAllMissing(e,t),this.loadingComplete.then(()=>{this.dispatchEvent(new CustomEvent(`localeChanged`,{detail:{newLocale:e,oldLocale:t}}))})):this.dispatchEvent(new CustomEvent(`localeChanged`,{detail:{newLocale:e,oldLocale:t}})))}_loadAllMissing(e,t){let n=this.__storage[t]||{},r=this.__storage[e]||{};Object.keys(n).forEach(t=>{r[t]||this.loadNamespace(t,{locale:e})})}_getMessageForKeys(e,t){if(typeof e==`string`)return this._getMessageForKey(e,t);let n=Array.from(e).reverse(),r,i;for(;n.length;)if(r=n.pop(),i=this._getMessageForKey(r,t),i)return i}_getMessageForKey(e,t){if(!e||e.indexOf(`:`)===-1)throw Error(`Namespace is missing in the key "${e}". The format for keys is "namespace:name".`);let[n,r]=e.split(`:`),i=this.__storage[t],a=i?i[n]:{},o=r.split(`.`).reduce((e,t)=>typeof e==`object`?e[t]:e,a);return String(o||(this._showKeyAsFallback?e:``))}#r(e){if(!e.includes(`-`))throw Error(`
      Locale was set to ${e}.
      Language only locales are not allowed, please use the full language locale e.g. 'en-GB' instead of 'en'.
      See https://github.com/ing-bank/lion/issues/187 for more information.
    `)}get _supportExternalTranslationTools(){return this.#e}set _supportExternalTranslationTools(e){this.#e=e}get _langAttrSetByTranslationTool(){return this.#t}set _langAttrSetByTranslationTool(e){this.#t=e}};function Lr(){if(!Ee.has(`@lion/ui::localize::0.x`)){let e=new Ir({autoLoadOnLocaleChange:!0,fallbackLocale:`en-GB`});Ee.set(`@lion/ui::localize::0.x`,e)}return Ee.get(`@lion/ui::localize::0.x`)}function Rr(){return Te(Lr)}var zr=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),zr(e,t);return!0},Br=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Vr=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Wr(t)}};function Hr(e){this._$AN===void 0?this._$AM=e:(Br(this),this._$AM=e,Vr(this))}function Ur(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)zr(r[e],!1),Br(r[e]);else r!=null&&(zr(r,!1),Br(r));else zr(this,e)}var Wr=e=>{e.type==Ae.CHILD&&(e._$AP??=Ur,e._$AQ??=Hr)},Gr=class extends Me{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Vr(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(zr(this,e),Br(this))}setValue(e){if(me(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Kr=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},qr=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise((e=>this.Z=e))}resume(){this.Z?.(),this.Y=this.Z=void 0}},Jr=e=>!fe(e)&&typeof e.then==`function`,Yr=1073741823,Xr=je(class extends Gr{constructor(){super(...arguments),this._$Cwt=Yr,this._$Cbt=[],this._$CK=new Kr(this),this._$CX=new qr}render(...e){return e.find((e=>!Jr(e)))??l}update(e,t){let n=this._$Cbt,r=n.length;this._$Cbt=t;let i=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let o=t[e];if(!Jr(o))return this._$Cwt=e,o;e<r&&o===n[e]||(this._$Cwt=Yr,r=0,Promise.resolve(o).then((async e=>{for(;a.get();)await a.get();let t=i.deref();if(t!==void 0){let n=t._$Cbt.indexOf(o);n>-1&&n<t._$Cwt&&(t._$Cwt=n,t.setValue(e))}})))}return l}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),Zr=k(e=>class extends e{static get localizeNamespaces(){return[]}static get waitForLocalizeNamespaces(){return!0}constructor(){super(),this._localizeManager=Rr(),this.__boundLocalizeOnLocaleChanged=(...e)=>{let t=Array.from(e)[0];this.__localizeOnLocaleChanged(t)},this.__boundLocalizeOnLocaleChanging=()=>{this.__localizeOnLocaleChanging()},this.__localizeStartLoadingNamespaces(),this.localizeNamespacesLoaded&&this.localizeNamespacesLoaded.then(()=>{this.__localizeMessageSync=!0})}async scheduleUpdate(){Object.getPrototypeOf(this).constructor.waitForLocalizeNamespaces&&await this.localizeNamespacesLoaded,super.scheduleUpdate()}connectedCallback(){super.connectedCallback(),this.localizeNamespacesLoaded&&this.localizeNamespacesLoaded.then(()=>this.onLocaleReady()),this._localizeManager.addEventListener(`__localeChanging`,this.__boundLocalizeOnLocaleChanging),this._localizeManager.addEventListener(`localeChanged`,this.__boundLocalizeOnLocaleChanged)}disconnectedCallback(){super.disconnectedCallback(),this._localizeManager.removeEventListener(`__localeChanging`,this.__boundLocalizeOnLocaleChanging),this._localizeManager.removeEventListener(`localeChanged`,this.__boundLocalizeOnLocaleChanged)}msgLit(e,t,n){return this.__localizeMessageSync?this._localizeManager.msg(e,t,n):this.localizeNamespacesLoaded?Xr(this.localizeNamespacesLoaded.then(()=>this._localizeManager.msg(e,t,n)),i):``}__getUniqueNamespaces(){let e=[],t=new Set;return Object.getPrototypeOf(this).constructor.localizeNamespaces.forEach(t.add.bind(t)),t.forEach(t=>{e.push(t)}),e}__localizeStartLoadingNamespaces(){this.localizeNamespacesLoaded=this._localizeManager.loadNamespaces(this.__getUniqueNamespaces())}__localizeOnLocaleChanging(){this.__localizeStartLoadingNamespaces()}__localizeOnLocaleChanged(e){this.onLocaleChanged(e.detail.newLocale,e.detail.oldLocale)}onLocaleReady(){this.onLocaleUpdated()}onLocaleChanged(e,t){this.onLocaleUpdated(),this.requestUpdate()}onLocaleUpdated(){}}),Qr=`3.0.0`,$r=window.scopedElementsVersions||(window.scopedElementsVersions=[]);$r.includes(Qr)||$r.push(Qr);var ei=k(e=>class extends e{static scopedElements;static get scopedElementsVersion(){return Qr}static __registry;get registry(){return this.constructor.__registry}set registry(e){this.constructor.__registry=e}attachShadow(e){let{scopedElements:t}=this.constructor;if(!this.registry||this.registry===this.constructor.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,`__registry`)){this.registry=new CustomElementRegistry;for(let[e,n]of Object.entries(t??{}))this.registry.define(e,n)}return super.attachShadow({...e,customElements:this.registry,registry:this.registry})}}),ti=k(e=>class extends ei(e){createRenderRoot(){let{shadowRootOptions:e,elementStyles:t}=this.constructor,n=this.attachShadow(e);return this.renderOptions.creationScope=n,a(n,t),this.renderOptions.renderBefore??=n.firstChild,n}});function ni(){return!!(globalThis.ShadowRoot?.prototype.createElement&&globalThis.ShadowRoot?.prototype.importNode)}var ri=k(e=>class extends ti(e){constructor(){super()}createScopedElement(e){return(ni()?this.shadowRoot:document).createElement(e)}defineScopedElement(e,t){let n=this.registry.get(e),r=n&&n!==t;return!ni()&&r&&console.error([`You are trying to re-register the "${e}" custom element with a different class via ScopedElementsMixin.`,`This is only possible with a CustomElementRegistry.`,`Your browser does not support this feature so you will need to load a polyfill for it.`,`Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.`,`e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.`,`For more details you can visit https://open-wc.org/docs/development/scoped-elements/`].join(`
`)),n?this.registry.get(e):this.registry.define(e,t)}attachShadow(e){let{scopedElements:t}=this.constructor;if(!this.registry||this.registry===this.constructor.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,`__registry`)){this.registry=ni()?new CustomElementRegistry:customElements;for(let[e,n]of Object.entries(t??{}))this.defineScopedElement(e,n)}return Element.prototype.attachShadow.call(this,{...e,customElements:this.registry,registry:this.registry})}createRenderRoot(){let{shadowRootOptions:e,elementStyles:t}=this.constructor,n=this.attachShadow(e);return ni()&&(this.renderOptions.creationScope=n),n instanceof ShadowRoot&&(a(n,t),this.renderOptions.renderBefore=this.renderOptions.renderBefore||n.firstChild),n}}),ii=[Node.DOCUMENT_POSITION_PRECEDING,Node.DOCUMENT_POSITION_CONTAINS,Node.DOCUMENT_POSITION_CONTAINS|Node.DOCUMENT_POSITION_PRECEDING];function ai(e,{reverse:t}={}){let n=(e,t)=>{let n=e.compareDocumentPosition(t);return ii.includes(n)?1:-1},r=e.filter(e=>e);return r.sort(n),t&&r.reverse(),r}var oi=class{constructor(e){this.type=`unparseable`,this.viewValue=e}toString(){return JSON.stringify({type:this.type,viewValue:this.viewValue})}},si=k(e=>class extends e{constructor(){super(),this.name=``,this._parentFormGroup=void 0,this.allowCrossRootRegistration=!1}get name(){return this.__name||``}set name(e){let t=this.name;this.__name=e.toString(),this.requestUpdate(`name`,t)}static get properties(){return{name:{type:String,reflect:!0},allowCrossRootRegistration:{type:Boolean,attribute:`allow-cross-root-registration`}}}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent(`form-element-register`,{detail:{element:this},bubbles:!0,composed:!!this.allowCrossRootRegistration}))}disconnectedCallback(){super.disconnectedCallback(),this.__unregisterFormElement()}__unregisterFormElement(){this._parentFormGroup&&this._parentFormGroup.removeFormElement(this)}}),ci=k(e=>class extends si(Pt(Rt(e))){static get properties(){return{readOnly:{type:Boolean,attribute:`readonly`,reflect:!0},label:String,labelSrOnly:{type:Boolean,attribute:`label-sr-only`,reflect:!0},helpText:{type:String,attribute:`help-text`},modelValue:{attribute:!1},_ariaLabelledNodes:{attribute:!1},_ariaDescribedNodes:{attribute:!1},_repropagationRole:{attribute:!1},_isRepropagationEndpoint:{attribute:!1}}}get label(){return this.__label??(this._labelNode?.textContent||``)}set label(e){let t=this.label;this.__label=e,this.requestUpdate(`label`,t)}get helpText(){return this.__helpText??(this._helpTextNode?.textContent||``)}set helpText(e){let t=this.helpText;this.__helpText=e,this.requestUpdate(`helpText`,t)}get fieldName(){return this.__fieldName||this.label||this.name||``}set fieldName(e){this.__fieldName=e}get slots(){return{...super.slots,label:()=>{let e=document.createElement(`label`);return e.textContent=this.label,e},"help-text":()=>{let e=document.createElement(`div`);return e.textContent=this.helpText,e}}}get _inputNode(){return this.__getDirectSlotChild(`input`)}get _labelNode(){return this.__getDirectSlotChild(`label`)}get _helpTextNode(){return this.__getDirectSlotChild(`help-text`)}get _feedbackNode(){return this.__getDirectSlotChild(`feedback`)}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];constructor(){super(),this.readOnly=!1,this.labelSrOnly=!1,this._inputId=Vt(this.localName),this._ariaLabelledNodes=[],this._ariaDescribedNodes=[],this._repropagationRole=`child`,this._isRepropagationEndpoint=!1,this.addEventListener(`model-value-changed`,this.__repropagateChildrenValues),this._onLabelClick=this._onLabelClick.bind(this)}connectedCallback(){super.connectedCallback(),this._enhanceLightDomClasses(),this._enhanceLightDomA11y(),this._triggerInitialModelValueChangedEvent(),this._labelNode&&this._labelNode.addEventListener(`click`,this._onLabelClick)}disconnectedCallback(){super.disconnectedCallback(),this._labelNode&&this._labelNode.removeEventListener(`click`,this._onLabelClick)}updated(e){super.updated(e),e.has(`disabled`)&&this._inputNode?.setAttribute(`aria-disabled`,`${!!this.disabled}`),e.has(`_ariaLabelledNodes`)&&this.__reflectAriaAttr(`aria-labelledby`,this._ariaLabelledNodes,this.__reorderAriaLabelledNodes),e.has(`_ariaDescribedNodes`)&&this.__reflectAriaAttr(`aria-describedby`,this._ariaDescribedNodes,this.__reorderAriaDescribedNodes),e.has(`label`)&&this.__label!==void 0&&this._labelNode&&(this._labelNode.textContent=this.label),e.has(`helpText`)&&this.__helpText!==void 0&&this._helpTextNode&&(this._helpTextNode.textContent=this.helpText),e.has(`name`)&&this.dispatchEvent(new CustomEvent(`form-element-name-changed`,{detail:{oldName:e.get(`name`),newName:this.name},bubbles:!0}))}_triggerInitialModelValueChangedEvent(){this._dispatchInitialModelValueChangedEvent()}_enhanceLightDomClasses(){this._inputNode&&this._inputNode.classList.add(`form-control`)}_enhanceLightDomA11y(){let{_inputNode:e,_labelNode:t,_helpTextNode:n,_feedbackNode:r}=this;e&&(e.id=e.id||this._inputId),t&&(t.setAttribute(`for`,this._inputId),this.addToAriaLabelledBy(t,{idPrefix:`label`})),n&&this.addToAriaDescribedBy(n,{idPrefix:`help-text`}),r&&(this.addEventListener(`focusin`,()=>{r.setAttribute(`aria-live`,`polite`)}),this.addEventListener(`focusout`,()=>{r.setAttribute(`aria-live`,`assertive`)}),this.addToAriaDescribedBy(r,{idPrefix:`feedback`})),this._enhanceLightDomA11yForAdditionalSlots()}_enhanceLightDomA11yForAdditionalSlots(e=[`prefix`,`suffix`,`before`,`after`]){e.forEach(e=>{let t=this.__getDirectSlotChild(e);t&&(t.hasAttribute(`data-label`)&&this.addToAriaLabelledBy(t,{idPrefix:e}),t.hasAttribute(`data-description`)&&this.addToAriaDescribedBy(t,{idPrefix:e}))})}__reflectAriaAttr(e,t,n){if(this._inputNode){if(n){let e=t.filter(e=>this.contains(e)),n=t.filter(e=>!this.contains(e)),r=[...ai(e.map(e=>e.assignedSlot||e))],i=[];r.forEach(t=>{e.forEach(e=>{t.name===e.slot&&i.push(e)})}),t=[...i,...n]}let r=t.map(e=>e.id).join(` `);this._inputNode.setAttribute(e,r)}}render(){return m`
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
          `:i}_inputGroupInputTemplate(){return m`
        <div class="input-group__input">
          <slot name="input"></slot>
        </div>
      `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(e=>e.slot===`suffix`)?m`
            <div class="input-group__suffix">
              <slot name="suffix"></slot>
            </div>
          `:i}_inputGroupAfterTemplate(){return m`
        <div class="input-group__after">
          <slot name="after"></slot>
        </div>
      `}_feedbackTemplate(){return m`
        <div class="form-field__feedback">
          <slot name="feedback"></slot>
        </div>
      `}_isEmpty(e=this.modelValue){let t=e;return this.modelValue instanceof oi&&(t=this.modelValue.viewValue),typeof t==`object`&&t&&!(t instanceof Date)?!Object.keys(t).length:!t&&!(typeof t==`number`&&(t===0||Number.isNaN(t)))&&(typeof t!=`boolean`||t!==!1)}static get styles(){return[o`
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
        `]}_getAriaDescriptionElements(){return[this._helpTextNode,this._feedbackNode]}addToAriaLabelledBy(e,{idPrefix:t=``,reorder:n=!0}={}){e.id=e.id||`${t}-${this._inputId}`,this._ariaLabelledNodes.includes(e)||(this._ariaLabelledNodes=[...this._ariaLabelledNodes,e],this.__reorderAriaLabelledNodes=!!n)}removeFromAriaLabelledBy(e){this._ariaLabelledNodes.includes(e)&&(this._ariaLabelledNodes.splice(this._ariaLabelledNodes.indexOf(e),1),this._ariaLabelledNodes=[...this._ariaLabelledNodes],this.__reorderAriaLabelledNodes=!1)}addToAriaDescribedBy(e,{idPrefix:t=``,reorder:n=!0}={}){e.id=e.id||`${t}-${this._inputId}`,this._ariaDescribedNodes.includes(e)||(this._ariaDescribedNodes=[...this._ariaDescribedNodes,e],this.__reorderAriaDescribedNodes=!!n)}removeFromAriaDescribedBy(e){this._ariaDescribedNodes.includes(e)&&(this._ariaDescribedNodes.splice(this._ariaDescribedNodes.indexOf(e),1),this._ariaDescribedNodes=[...this._ariaDescribedNodes],this.__reorderAriaLabelledNodes=!1)}__getDirectSlotChild(e){return Array.from(this.children).find(t=>t.slot===e)}_dispatchInitialModelValueChangedEvent(){this._repropagationRole!==`child`&&(this.__repropagateChildrenInitialized=!0,this.dispatchEvent(new CustomEvent(`model-value-changed`,{bubbles:!0,detail:{formPath:[this],initialize:!0,isTriggeredByUser:!1}})))}_onBeforeRepropagateChildrenValues(e){}__repropagateChildrenValues(e){this._onBeforeRepropagateChildrenValues(e);let t=e.detail&&e.detail.element||e.target,n=this._isRepropagationEndpoint||this._repropagationRole===`choice-group`;if(t===this)return;e.stopImmediatePropagation();let r=this._repropagationRole!==`child`&&!this.__repropagateChildrenInitialized,i=e.detail&&e.detail.initialize;if(r||i||!this._repropagationCondition(t))return;let a=[];n||(a=e.detail&&e.detail.formPath||[t]);let o=[...a,this];this.dispatchEvent(new CustomEvent(`model-value-changed`,{bubbles:!0,detail:{formPath:o,isTriggeredByUser:!!e.detail?.isTriggeredByUser}}))}_repropagationCondition(e){return!!e}_onLabelClick(){}}),li=class{constructor(){this.__running=!1,this.__queue=[]}add(e){this.__queue.push(e),this.__running||(this.complete=new Promise(e=>{this.__callComplete=e}),this.__run())}async __run(){this.__running=!0,await this.__queue[0](),this.__queue.shift(),this.__queue.length>0?this.__run():(this.__running=!1,this.__callComplete&&this.__callComplete())}};function ui(e){return e.charAt(0).toUpperCase()+e.slice(1)}var di=k(e=>class extends e{constructor(){super(),this.__SyncUpdatableNamespace={}}firstUpdated(e){super.firstUpdated(e),this.__syncUpdatableInitialize()}connectedCallback(){super.connectedCallback(),this.__SyncUpdatableNamespace.connected=!0}disconnectedCallback(){super.disconnectedCallback(),this.__SyncUpdatableNamespace.connected=!1}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];static __syncUpdatableHasChanged(e,t,n){let r=this.elementProperties;return r.get(e)&&r.get(e).hasChanged?r.get(e).hasChanged(t,n):t!==n}__syncUpdatableInitialize(){let e=this.__SyncUpdatableNamespace,t=this.constructor;e.initialized=!0,e.queue&&Array.from(e.queue).forEach(e=>{t.__syncUpdatableHasChanged(e,this[e],void 0)&&this.updateSync(e,void 0)})}requestUpdate(e,t,n){if(super.requestUpdate(e,t,n),e===void 0)return;this.__SyncUpdatableNamespace=this.__SyncUpdatableNamespace||{};let r=this.__SyncUpdatableNamespace,i=this.constructor;r.initialized?i.__syncUpdatableHasChanged(e,this[e],t)&&this.updateSync(e,t):(r.queue=r.queue||new Set,r.queue.add(e))}updateSync(e,t){}}),fi=e=>{switch(e){case`bg-BG`:return A(()=>import(`./bg-BG-BSOJu8wp.js`),__vite__mapDeps([0,1]),import.meta.url);case`bg`:return A(()=>import(`./bg-tT2-9j0y.js`),__vite__mapDeps([2,1]),import.meta.url);case`cs-CZ`:return A(()=>import(`./cs-CZ-BXYisR25.js`),__vite__mapDeps([3,4]),import.meta.url);case`cs`:return A(()=>import(`./cs-BWWtw9FR.js`),__vite__mapDeps([5,4]),import.meta.url);case`de-DE`:return A(()=>import(`./de-DE-CqA9yOdY.js`),__vite__mapDeps([6,7]),import.meta.url);case`de`:return A(()=>import(`./de-D2KzmuNN.js`),__vite__mapDeps([8,7]),import.meta.url);case`en-AU`:return A(()=>import(`./en-AU-ClGzkm9N.js`),__vite__mapDeps([9,10]),import.meta.url);case`en-GB`:return A(()=>import(`./en-GB-ClGzkm9N.js`),__vite__mapDeps([11,10]),import.meta.url);case`en-US`:return A(()=>import(`./en-US-ClGzkm9N.js`),__vite__mapDeps([12,10]),import.meta.url);case`en-PH`:case`en`:return A(()=>import(`./en-Bn2liEJW.js`),__vite__mapDeps([13,10]),import.meta.url);case`es-ES`:return A(()=>import(`./es-ES-pYasBR0F.js`),__vite__mapDeps([14,15]),import.meta.url);case`es`:return A(()=>import(`./es-CgGkXEZk.js`),__vite__mapDeps([16,15]),import.meta.url);case`fr-FR`:return A(()=>import(`./fr-FR-BFPCNFnr.js`),__vite__mapDeps([17,18]),import.meta.url);case`fr-BE`:return A(()=>import(`./fr-BE-BFPCNFnr.js`),__vite__mapDeps([19,18]),import.meta.url);case`fr`:return A(()=>import(`./fr-BatdFrY1.js`),__vite__mapDeps([20,18]),import.meta.url);case`hu-HU`:return A(()=>import(`./hu-HU-CgHBHfiG.js`),__vite__mapDeps([21,22]),import.meta.url);case`hu`:return A(()=>import(`./hu-BGJUkRn0.js`),__vite__mapDeps([23,22]),import.meta.url);case`it-IT`:return A(()=>import(`./it-IT-DXWt8Y3M.js`),__vite__mapDeps([24,25]),import.meta.url);case`it`:return A(()=>import(`./it-BbZB0zCO.js`),__vite__mapDeps([26,25]),import.meta.url);case`nl-BE`:return A(()=>import(`./nl-BE-CN9u7Cp2.js`),__vite__mapDeps([27,28]),import.meta.url);case`nl-NL`:return A(()=>import(`./nl-NL-CN9u7Cp2.js`),__vite__mapDeps([29,28]),import.meta.url);case`nl`:return A(()=>import(`./nl-CubSULoy.js`),__vite__mapDeps([30,28]),import.meta.url);case`pl-PL`:return A(()=>import(`./pl-PL-D0K_dWml.js`),__vite__mapDeps([31,32]),import.meta.url);case`pl`:return A(()=>import(`./pl-BhJlmndU.js`),__vite__mapDeps([33,32]),import.meta.url);case`ro-RO`:return A(()=>import(`./ro-RO-BXVNXH1J.js`),__vite__mapDeps([34,35]),import.meta.url);case`ro`:return A(()=>import(`./ro-75jeTe0N.js`),__vite__mapDeps([36,35]),import.meta.url);case`ru-RU`:return A(()=>import(`./ru-RU-BpGy32BK.js`),__vite__mapDeps([37,38]),import.meta.url);case`ru`:return A(()=>import(`./ru-DU7uFj2i.js`),__vite__mapDeps([39,38]),import.meta.url);case`sk-SK`:return A(()=>import(`./sk-SK-wewEOZGv.js`),__vite__mapDeps([40,41]),import.meta.url);case`sk`:return A(()=>import(`./sk-cN9_UHno.js`),__vite__mapDeps([42,41]),import.meta.url);case`tr-TR`:return A(()=>import(`./tr-TR-D1nJ_iYG.js`),__vite__mapDeps([43,44]),import.meta.url);case`tr`:return A(()=>import(`./tr-DuiqIpvR.js`),__vite__mapDeps([45,44]),import.meta.url);case`uk-UA`:return A(()=>import(`./uk-UA-DHqiIGvL.js`),__vite__mapDeps([46,47]),import.meta.url);case`uk`:return A(()=>import(`./uk-Cm-Wcqws.js`),__vite__mapDeps([48,47]),import.meta.url);case`zh-CN`:case`zh`:return A(()=>import(`./zh-DMe6SF13.js`),[],import.meta.url);default:return A(()=>import(`./en-Bn2liEJW.js`),__vite__mapDeps([13,10]),import.meta.url)}},pi=e=>`${e[0].toUpperCase()}${e.slice(1)}`,mi=class extends Zr(d){static get properties(){return{feedbackData:{attribute:!1}}}static localizeNamespaces=[{"lion-form-core":fi},...super.localizeNamespaces];static get styles(){return[o`
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
            ${e&&t?this._localizeManager.msg(`lion-form-core:validation${pi(t)}`):i}
          </span>
          ${this._messageTemplate({message:e,type:t,validator:n})}
        `)}
    `}},hi=class extends EventTarget{constructor(e,t){super(),this.__param=e,this.__config=t||{},this.type=t?.type||`error`}static _$isValidator$=!0;static validatorName=``;static async=!1;execute(e,t,n){if(!this.constructor.validatorName)throw Error(`A validator needs to have a name! Please set it via "static get validatorName() { return 'IsCat'; }"`);return!0}set param(e){this.__param=e,this.dispatchEvent(new Event(`param-changed`))}get param(){return this.__param}set config(e){this.__config=e,this.dispatchEvent(new Event(`config-changed`))}get config(){return this.__config}async _getMessage(e){let t=this.constructor,n={name:t.validatorName,type:this.type,params:this.param,config:this.config,...e};if(this.config.getMessage){if(typeof this.config.getMessage==`function`)return this.config.getMessage(n);throw Error(`You must provide a value for getMessage of type 'function', you provided a value of type: ${typeof this.config.getMessage}`)}return t.getMessage(n)}static async getMessage(e){return`Please configure an error message for "${this.name}" by overriding "static async getMessage()"`}onFormControlConnect(e){}onFormControlDisconnect(e){}abortExecution(){}};function gi(e=[],t=[]){return e.filter(e=>!t.includes(e)).concat(t.filter(t=>!e.includes(t)))}function _i(e){return e instanceof oi?e.viewValue:e}var vi=k(e=>class extends ci(di(Pt(Rt(ri(e))))){static get scopedElements(){return{...super.scopedElements,"lion-validation-feedback":mi}}static get properties(){return{validators:{attribute:!1},hasFeedbackFor:{attribute:!1},shouldShowFeedbackFor:{attribute:!1},showsFeedbackFor:{type:Array,attribute:`shows-feedback-for`,reflect:!0,converter:{fromAttribute:e=>e.split(`,`),toAttribute:e=>e.join(`,`)}},validationStates:{attribute:!1},isPending:{type:Boolean,attribute:`is-pending`,reflect:!0},defaultValidators:{attribute:!1},_visibleMessagesAmount:{attribute:!1},__childModelValueChanged:{attribute:!1}}}static get validationTypes(){return[`error`]}get operationMode(){return`enter`}get slots(){return{...super.slots,feedback:()=>{let e=this.createScopedElement(`lion-validation-feedback`);return e.setAttribute(`data-tag-name`,`lion-validation-feedback`),e}}}get _allValidators(){return[...this.validators,...this.defaultValidators]}constructor(){super(),this.hasFeedbackFor=[],this.showsFeedbackFor=[],this.shouldShowFeedbackFor=[],this.validationStates={},this.isPending=!1,this.validators=[],this.defaultValidators=[],this._visibleMessagesAmount=1,this.__syncValidationResult=[],this.__asyncValidationResult=[],this.__validationResult=[],this.__prevValidationResult=[],this.__prevShownValidationResult=[],this.__childModelValueChanged=!1,this._onValidatorUpdated=this._onValidatorUpdated.bind(this),this._updateFeedbackComponent=this._updateFeedbackComponent.bind(this)}connectedCallback(){super.connectedCallback(),Rr().addEventListener(`localeChanged`,this._updateFeedbackComponent)}disconnectedCallback(){super.disconnectedCallback(),Rr().removeEventListener(`localeChanged`,this._updateFeedbackComponent)}firstUpdated(e){super.firstUpdated(e),this.__isValidateInitialized=!0,this.validate(),this._repropagationRole!==`child`&&this.addEventListener(`model-value-changed`,()=>{this.__childModelValueChanged=!0})}updateSync(e,t){if(super.updateSync(e,t),e===`validators`?(this.__setupValidators(),this.validate({clearCurrentResult:!0})):e===`modelValue`&&this.validate({clearCurrentResult:!0}),[`touched`,`dirty`,`prefilled`,`focused`,`submitted`,`hasFeedbackFor`,`filled`].includes(e)&&this._updateShouldShowFeedbackFor(),e===`showsFeedbackFor`){this._inputNode&&this._inputNode.setAttribute(`aria-invalid`,`${this._hasFeedbackVisibleFor(`error`)}`);let e=gi(this.showsFeedbackFor,t);e.length>0&&this.dispatchEvent(new Event(`showsFeedbackForChanged`,{bubbles:!0})),e.forEach(e=>{this.dispatchEvent(new Event(`showsFeedbackFor${ui(e)}Changed`,{bubbles:!0}))})}e===`shouldShowFeedbackFor`&&gi(this.shouldShowFeedbackFor,t).length>0&&this.dispatchEvent(new Event(`shouldShowFeedbackForChanged`,{bubbles:!0}))}async validate({clearCurrentResult:e=!1}={}){if(this.validateComplete=new Promise(e=>{this.__validateCompleteResolve=e}),this.disabled||this.readOnly){this.__clearValidationResults(),this.__finishValidationPass(),this._updateFeedbackComponent();return}this.__isValidateInitialized&&(this.__prevValidationResult=this.__validationResult,e&&this.__clearValidationResults(),await this.__executeValidators())}#e(e){let t=e;for(;t;){if(t.constructor.validatorName===`Required`)return!0;t=Object.getPrototypeOf(t)}return!1}async __executeValidators(){let e=_i(this.modelValue),t=this.__isEmpty(e);if(this.__syncValidationResult=[],t){let e=!this._isFormOrFieldset,t=this._allValidators.find(e=>e.constructor?.validatorName===`Required`);if(t&&(this.__syncValidationResult=[{validator:t,outcome:!0}]),e){this.__finishValidationPass({syncValidationResult:this.__syncValidationResult});return}}let n=[],r=[],i=[];for(let e of this._allValidators)e?.executeOnResults?n.push(e):this.#e(e)||(e.constructor.async?i.push(e):r.push(e));let a=!!i.length;this.__syncValidationResult=[...this.__syncValidationResult,...this.__executeSyncValidators(r,e)],this.__finishValidationPass({syncValidationResult:this.__syncValidationResult,metaValidators:n}),a?(this.isPending=!0,this.__asyncValidationResult=await this.__executeAsyncValidators(i,e),this.isPending=!1,this.__finishValidationPass({syncValidationResult:this.__syncValidationResult,asyncValidationResult:this.__asyncValidationResult,metaValidators:n}),this.__validateCompleteResolve?.(!0)):this.__validateCompleteResolve?.(!0)}__executeSyncValidators(e,t){return e.map(e=>({validator:e,outcome:e.execute(t,e.param,{node:this})})).filter(e=>!!e.outcome)}async __executeAsyncValidators(e,t){let n=e.map(e=>e.execute(t,e.param,{node:this})),r=await Promise.all(n);return r.map((t,n)=>({validator:e[n],outcome:r[n]})).filter(e=>!!e.outcome)}__executeMetaValidators(e,t){return t.length?this._isEmpty(this.modelValue)?(this.__prevShownValidationResult=[],[]):t.map(t=>({validator:t,outcome:t.executeOnResults({regularValidationResult:e.map(e=>e.validator),prevValidationResult:this.__prevValidationResult.map(e=>e.validator),prevShownValidationResult:this.__prevShownValidationResult.map(e=>e.validator)})})).filter(e=>!!e.outcome):[]}__finishValidationPass({syncValidationResult:e=[],asyncValidationResult:t=[],metaValidators:n=[]}={}){let r=[...e,...t],i=this.__executeMetaValidators(r,n);this.__validationResult=[...i,...r];let a=this.constructor.validationTypes.reduce((e,t)=>({...e,[t]:{}}),{});for(let{validator:e,outcome:t}of this.__validationResult){a[e.type]||(a[e.type]={});let n=e.constructor;a[e.type][n.validatorName]=t}this.validationStates=a,this.hasFeedbackFor=[...new Set(this.__validationResult.map(({validator:e})=>e.type))],this.dispatchEvent(new Event(`validate-performed`,{bubbles:!0}))}__clearValidationResults(){this.__syncValidationResult=[],this.__asyncValidationResult=[]}_onValidatorUpdated(e){(e.type===`param-changed`||e.type===`config-changed`)&&this.validate()}__setupValidators(){let e=[`param-changed`,`config-changed`];for(let t of this.__prevValidators||[]){for(let n of e)t.removeEventListener?.(n,this._onValidatorUpdated);t.onFormControlDisconnect(this)}for(let t of this._allValidators){if(t.constructor._$isValidator$===void 0){let e=`Validators array only accepts class instances of Validator. Type "${Array.isArray(t)?`array`:typeof t}" found. This may be caused by having multiple installations of "@lion/ui/form-core.js".`;throw console.error(e,this),Error(e)}let n=this.constructor,r=t.constructor;if(n.validationTypes.indexOf(t.type)===-1){let e=`This component does not support the validator type "${t.type}" used in "${r.validatorName}". You may change your validators type or add it to the components "static get validationTypes() {}".`;throw console.error(e,this),Error(e)}for(let n of e)t.addEventListener?.(n,e=>{this._onValidatorUpdated(e,{validator:t})});t.onFormControlConnect(this)}this.__prevValidators=this._allValidators}__isEmpty(e){return typeof this._isEmpty==`function`?this._isEmpty(e):this.modelValue===null||this.modelValue===void 0||this.modelValue===``}async __getFeedbackMessages(e){let t=await this.fieldName;return Promise.all(e.map(async({validator:e,outcome:n})=>(e.config.fieldName&&(t=await e.config.fieldName),{message:await e._getMessage({modelValue:this.modelValue,formControl:this,fieldName:t,outcome:n}),type:e.type,validator:e,visibilityDuration:e.config?.visibilityDuration||3e3})))}_updateFeedbackComponent(){window.clearTimeout(this.removeMessage);let{_feedbackNode:e}=this;e&&(this.__feedbackQueue||=new li,this.showsFeedbackFor.length>0?this.__feedbackQueue.add(async()=>{let t=this._prioritizeAndFilterFeedback({validationResult:this.__validationResult.map(e=>e.validator)});this.__prioritizedResult=t.map(e=>this.__validationResult.find(t=>e===t.validator)).filter(Boolean),this.__prioritizedResult.length>0&&(this.__prevShownValidationResult=this.__prioritizedResult);let n=await this.__getFeedbackMessages(this.__prioritizedResult);e.feedbackData=n||[],n?.[0]&&n[0].type===`success`&&n[0].visibilityDuration!==1/0&&(this.removeMessage=window.setTimeout(()=>{e.removeAttribute(`type`),e.feedbackData=[]},n[0].visibilityDuration))}):this.__feedbackQueue.add(async()=>{e.feedbackData=[]}),this.feedbackComplete=this.__feedbackQueue.complete)}_showFeedbackConditionFor(e,t){return!0}get _feedbackConditionMeta(){return{modelValue:this.modelValue,el:this}}feedbackCondition(e,t=this._feedbackConditionMeta,n=this._showFeedbackConditionFor.bind(this)){return n(e,t)}_hasFeedbackVisibleFor(e){return this.hasFeedbackFor?.includes(e)&&this.shouldShowFeedbackFor?.includes(e)}updated(e){if(super.updated(e),e.has(`shouldShowFeedbackFor`)||e.has(`hasFeedbackFor`)){let e=this.constructor;this.showsFeedbackFor=e.validationTypes.map(e=>this._hasFeedbackVisibleFor(e)?e:void 0).filter(Boolean),this._updateFeedbackComponent()}if(e.has(`__childModelValueChanged`)&&this.__childModelValueChanged&&(this.validate({clearCurrentResult:!0}),this.__childModelValueChanged=!1),e.has(`validationStates`)){let t=e.get(`validationStates`);t&&Object.entries(this.validationStates).forEach(([e,n])=>{t[e]&&JSON.stringify(n)!==JSON.stringify(t[e])&&this.dispatchEvent(new CustomEvent(`${e}StateChanged`,{detail:n}))})}}_updateShouldShowFeedbackFor(){let e=this.constructor.validationTypes.map(e=>this.feedbackCondition(e,this._feedbackConditionMeta,this._showFeedbackConditionFor.bind(this))?e:void 0).filter(Boolean);JSON.stringify(this.shouldShowFeedbackFor)!==JSON.stringify(e)&&(this.shouldShowFeedbackFor=e)}_prioritizeAndFilterFeedback({validationResult:e}){let t=this.constructor.validationTypes;return e.filter(e=>this.feedbackCondition(e.type,this._feedbackConditionMeta,this._showFeedbackConditionFor.bind(this))).sort((e,n)=>t.indexOf(e.type)-t.indexOf(n.type)).slice(0,this._visibleMessagesAmount)}}),yi=k(e=>class extends vi(ci(e)){static get properties(){return{formattedValue:{attribute:!1},serializedValue:{attribute:!1},formatOptions:{attribute:!1}}}#e={didFormatterOutputSyncToView:!1,didFormatterRun:!1};requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`modelValue`&&this.modelValue!==t&&this._onModelValueChanged({modelValue:this.modelValue},{modelValue:t}),e===`serializedValue`&&this.serializedValue!==t&&this._calculateValues({source:`serialized`}),e===`formattedValue`&&this.formattedValue!==t&&this._calculateValues({source:`formatted`})}get value(){return this._inputNode?.value||this.__value||``}set value(e){this._inputNode?(this._inputNode.value=e,this.__value=void 0):this.__value=e}preprocessor(e,t){}parser(e,t){return e}formatter(e,t){return e}serializer(e){return e===void 0?``:e}deserializer(e){return e===void 0?``:e}_calculateValues({source:e}={source:null}){this.__preventRecursiveTrigger||(this.__preventRecursiveTrigger=!0,e!==`model`&&(e===`serialized`?this.modelValue=this.deserializer(this.serializedValue):e===`formatted`&&(this.modelValue=this._callParser())),e!==`formatted`&&(this.formattedValue=this._callFormatter()),e!==`serialized`&&(this.serializedValue=this.serializer(this.modelValue)),this._reflectBackFormattedValueToUser(),this.__preventRecursiveTrigger=!1,this.__prevViewValue=this.value)}_callParser(e=this.formattedValue){if(e===``)return``;if(typeof e!=`string`)return;let t=this.parser(e,{...this.formatOptions,mode:this.#t(),viewValueStates:this.#n()});return t===void 0?new oi(e):t}_callFormatter(){return this.#e.didFormatterRun=!1,this._isHandlingUserInput&&this.hasFeedbackFor?.includes(`error`)&&this._inputNode?this.value:this.modelValue instanceof oi?this.modelValue.viewValue:(this.#e.didFormatterRun=!0,this.formatter(this.modelValue,{...this.formatOptions,mode:this.#t(),viewValueStates:this.#n()}))}_onModelValueChanged(...e){this._calculateValues({source:`model`}),this._dispatchModelValueChangedEvent(...e)}_dispatchModelValueChangedEvent(...e){this.dispatchEvent(new CustomEvent(`model-value-changed`,{bubbles:!0,detail:{formPath:[this],isTriggeredByUser:!!this._isHandlingUserInput}}))}_syncValueUpwards(){this.__isHandlingComposition||this.__handlePreprocessor();let e=this.formattedValue;this.modelValue=this._callParser(this.value),e===this.formattedValue&&this.__prevViewValue!==this.value&&this._calculateValues()}__handlePreprocessor(){let e=this.value.length;this._inputNode&&`selectionStart`in this._inputNode&&this._inputNode?.type!==`range`&&(e=this._inputNode.selectionStart);let t=this.preprocessor(this.value,{...this.formatOptions,currentCaretIndex:e,prevViewValue:this.__prevViewValue});if(t!==void 0){if(typeof t==`string`)this.value=t;else if(typeof t==`object`){let{viewValue:e,caretIndex:n}=t;this.value=e,n&&this._inputNode&&`selectionStart`in this._inputNode&&(this._inputNode.selectionStart=n,this._inputNode.selectionEnd=n)}}}_reflectBackFormattedValueToUser(){this._reflectBackOn()&&(this.value=this.formattedValue===void 0?``:this.formattedValue,this.#e.didFormatterOutputSyncToView=!!this.formattedValue&&this.#e.didFormatterRun)}_reflectBackOn(){return!this._isHandlingUserInput}_proxyInputEvent(){this.dispatchEvent(new Event(`user-input-changed`,{bubbles:!0}))}_onUserInputChanged(){this._isHandlingUserInput=!0,this._syncValueUpwards(),this._isHandlingUserInput=!1}__onCompositionEvent({type:e}){e===`compositionstart`?this.__isHandlingComposition=!0:e===`compositionend`&&(this.__isHandlingComposition=!1,this._syncValueUpwards())}constructor(){super(),this.formatOn=`change`,this.formatOptions={mode:`auto`},this.formattedValue=void 0,this.serializedValue=void 0,this._isPasting=!1,this._isHandlingUserInput=!1,this.__prevViewValue=``,this.__onCompositionEvent=this.__onCompositionEvent.bind(this),this.addEventListener(`user-input-changed`,this._onUserInputChanged),this.addEventListener(`paste`,this.__onPaste),this._reflectBackFormattedValueToUser=this._reflectBackFormattedValueToUser.bind(this),this._reflectBackFormattedValueDebounced=()=>{setTimeout(this._reflectBackFormattedValueToUser)}}__onPaste(){this._isPasting=!0,setTimeout(()=>{this._isPasting=!1})}connectedCallback(){super.connectedCallback(),this.modelValue===void 0&&this._syncValueUpwards(),this.__prevViewValue=this.value,this._reflectBackFormattedValueToUser(),this._inputNode&&(this._inputNode.addEventListener(this.formatOn,this._reflectBackFormattedValueDebounced),this._inputNode.addEventListener(`input`,this._proxyInputEvent),this._inputNode.addEventListener(`compositionstart`,this.__onCompositionEvent),this._inputNode.addEventListener(`compositionend`,this.__onCompositionEvent))}disconnectedCallback(){super.disconnectedCallback(),this._inputNode&&(this._inputNode.removeEventListener(`input`,this._proxyInputEvent),this._inputNode.removeEventListener(this.formatOn,this._reflectBackFormattedValueDebounced),this._inputNode.removeEventListener(`compositionstart`,this.__onCompositionEvent),this._inputNode.removeEventListener(`compositionend`,this.__onCompositionEvent))}#t(){return this._isPasting?`pasted`:this._isHandlingUserInput&&this.__prevViewValue?`user-edited`:`auto`}#n(){let e=[];return this.#e.didFormatterOutputSyncToView&&e.push(`formatted`),e}}),bi=k(e=>class extends ci(e){static get properties(){return{touched:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},filled:{type:Boolean,reflect:!0},prefilled:{attribute:!1},submitted:{attribute:!1}}}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`touched`&&this.touched!==t&&this._onTouchedChanged(),e===`modelValue`&&(this.filled=!this._isEmpty()),e===`dirty`&&this.dirty!==t&&this._onDirtyChanged()}constructor(){super(),this.touched=!1,this.dirty=!1,this.prefilled=!1,this.filled=!1,this._leaveEvent=`blur`,this._valueChangedEvent=`model-value-changed`,this._iStateOnLeave=this._iStateOnLeave.bind(this),this._iStateOnValueChange=this._iStateOnValueChange.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(this._leaveEvent,this._iStateOnLeave),this.addEventListener(this._valueChangedEvent,this._iStateOnValueChange),this.initInteractionState()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(this._leaveEvent,this._iStateOnLeave),this.removeEventListener(this._valueChangedEvent,this._iStateOnValueChange)}initInteractionState(){this.dirty=!1,this.prefilled=!this._isEmpty()}_iStateOnLeave(){this.touched=!0,this.prefilled=!this._isEmpty()}_iStateOnValueChange(){this.dirty=!0}resetInteractionState(){this.touched=!1,this.submitted=!1,this.dirty=!1,this.prefilled=!this._isEmpty()}_onTouchedChanged(){this.dispatchEvent(new Event(`touched-changed`,{bubbles:!0,composed:!0}))}_onDirtyChanged(){this.dispatchEvent(new Event(`dirty-changed`,{bubbles:!0,composed:!0}))}_showFeedbackConditionFor(e,t){return t.touched&&t.dirty||t.prefilled||t.submitted}get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,submitted:this.submitted,touched:this.touched,dirty:this.dirty,filled:this.filled,prefilled:this.prefilled}}}),xi=class extends ci(bi(_r(yi(vi(Rt(d)))))){firstUpdated(e){super.firstUpdated(e),this._initialModelValue=this.modelValue}connectedCallback(){super.connectedCallback(),this._onChange=this._onChange.bind(this),this._inputNode.addEventListener(`change`,this._onChange),this.classList.add(`form-field`)}disconnectedCallback(){super.disconnectedCallback(),this._inputNode?.removeEventListener(`change`,this._onChange)}resetInteractionState(){super.resetInteractionState(),this.submitted=!1}reset(){this.modelValue=this._initialModelValue,this.resetInteractionState()}clear(){this.modelValue=``}_onChange(e){this.dispatchEvent(new Event(`user-input-changed`,{bubbles:!0}))}get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,focused:this.focused}}get _focusableNode(){return this._inputNode}},Si=class extends Array{_keys(){return Object.keys(this).filter(e=>Number.isNaN(Number(e)))}},Ci=k(e=>class extends si(e){static get properties(){return{_isFormOrFieldset:{type:Boolean}}}constructor(){super(),this.formElements=new Si,this._isFormOrFieldset=!1,this._onRequestToAddFormElement=this._onRequestToAddFormElement.bind(this),this._onRequestToChangeFormElementName=this._onRequestToChangeFormElementName.bind(this),this.addEventListener(`form-element-register`,this._onRequestToAddFormElement),this.addEventListener(`form-element-name-changed`,this._onRequestToChangeFormElementName),this.initComplete=new Promise((e,t)=>{this.__resolveInitComplete=e,this.__rejectInitComplete=t}),this.registrationComplete=new Promise((e,t)=>{this.__resolveRegistrationComplete=e,this.__rejectRegistrationComplete=t}),this.registrationComplete.done=!1,this.registrationComplete.then(()=>{this.registrationComplete.done=!0,this.__resolveInitComplete(void 0)},()=>{throw this.registrationComplete.done=!0,this.__rejectInitComplete(void 0),Error(`Registration could not finish. Please use await el.registrationComplete;`)})}connectedCallback(){super.connectedCallback(),this._completeRegistration()}_completeRegistration(){Promise.resolve().then(()=>this.__resolveRegistrationComplete(void 0))}disconnectedCallback(){super.disconnectedCallback(),this.registrationComplete.done===!1&&Promise.resolve().then(()=>{Promise.resolve().then(()=>{this.__rejectRegistrationComplete()})})}isRegisteredFormElement(e){return this.formElements.some(t=>t===e)}addFormElement(e,t){if(e._parentFormGroup=this,t>=0?this.formElements.splice(t,0,e):this.formElements.push(e),this._isFormOrFieldset){let{name:n}=e;if(n===this.name)throw console.info(`Error Node:`,e),TypeError(`You can not have the same name "${n}" as your parent`);if(n.substr(-2)===`[]`)Array.isArray(this.formElements[n])||(this.formElements[n]=new Si),t>0?this.formElements[n].splice(t,0,e):this.formElements[n].push(e);else if(!this.formElements[n])this.formElements[n]=e;else throw console.info(`Error Node:`,e),TypeError(`Name "${n}" is already registered - if you want an array add [] to the end`)}}removeFormElement(e){let t=this.formElements.indexOf(e);if(t>-1&&this.formElements.splice(t,1),this._isFormOrFieldset){let{name:t}=e;if(t.substr(-2)===`[]`&&this.formElements[t]){let n=this.formElements[t].indexOf(e);n>-1&&this.formElements[t].splice(n,1)}else this.formElements[t]&&delete this.formElements[t]}}_onRequestToAddFormElement(e){let t=e.detail.element;if(t===this||this.isRegisteredFormElement(t))return;e.stopPropagation();let n=-1;if(this.formElements&&Array.isArray(this.formElements)){for(let[e,r]of this.formElements.entries())if(!(r.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING)){n=e;break}}this.addFormElement(t,n)}_onRequestToChangeFormElementName(e){let t=this.formElements[e.detail.oldName];t&&(this.formElements[e.detail.newName]=t,delete this.formElements[e.detail.oldName])}_onRequestToRemoveFormElement(e){let t=e.detail.element;t!==this&&this.isRegisteredFormElement(t)&&(e.stopPropagation(),this.removeFormElement(t))}}),wi=k(e=>class extends e{constructor(){super(),this.registrationTarget=void 0,this.__redispatchEventForFormRegistrarPortalMixin=this.__redispatchEventForFormRegistrarPortalMixin.bind(this),this.addEventListener(`form-element-register`,this.__redispatchEventForFormRegistrarPortalMixin)}__redispatchEventForFormRegistrarPortalMixin(e){if(e.stopPropagation(),!this.registrationTarget)throw Error(`A FormRegistrarPortal element requires a .registrationTarget`);this.registrationTarget.dispatchEvent(new CustomEvent(`form-element-register`,{detail:{element:e.detail.element},bubbles:!0}))}}),Ti=k(e=>class extends yi(_r(ci(e))){static get properties(){return{autocomplete:{type:String,reflect:!0}}}constructor(){super(),this.autocomplete=void 0}get _inputNode(){return super._inputNode}get selectionStart(){let e=this._inputNode;return e&&e.selectionStart?e.selectionStart:0}set selectionStart(e){let t=this._inputNode;t&&t.selectionStart&&(t.selectionStart=e)}get selectionEnd(){let e=this._inputNode;return e&&e.selectionEnd?e.selectionEnd:0}set selectionEnd(e){let t=this._inputNode;t&&t.selectionEnd&&(t.selectionEnd=e)}get value(){return this._inputNode&&this._inputNode.value||this.__value||``}set value(e){this._inputNode?(this._inputNode.value!==e&&this._setValueAndPreserveCaret(e),this.__value=void 0):this.__value=e}_setValueAndPreserveCaret(e){if(this.focused)try{if(!(this._inputNode instanceof HTMLSelectElement)){let t=this._inputNode.selectionStart;this._inputNode.value=e,this._inputNode.selectionStart=t,this._inputNode.selectionEnd=t}}catch{this._inputNode.value=e}else this._inputNode.value=e}_reflectBackFormattedValueToUser(){if(super._reflectBackFormattedValueToUser(),this._reflectBackOn()&&this.focused)try{this._inputNode.selectionStart=this._inputNode.value.length}catch{}}get _focusableNode(){return this._inputNode}}),Ei=k(e=>class extends Ci(vi(bi(e))){static get properties(){return{multipleChoice:{type:Boolean,attribute:`multiple-choice`}}}get modelValue(){let e=this._getCheckedElements();return this.multipleChoice?e.map(e=>e.choiceValue):e[0]?e[0].choiceValue:``}set modelValue(e){let t=(t,n)=>typeof t.choiceValue==`object`?JSON.stringify(t.choiceValue)===JSON.stringify(e):t.choiceValue===n;this.__isInitialModelValue?this.registrationComplete.then(()=>{this.__isInitialModelValue=!1,this._setCheckedElements(e,t),this.requestUpdate(`modelValue`,this._oldModelValue)}):(this._setCheckedElements(e,t),this.requestUpdate(`modelValue`,this._oldModelValue)),this._oldModelValue=this.modelValue}get serializedValue(){let e=this._getCheckedElements();return this.multipleChoice?e.map(e=>e.serializedValue.value):e[0]?e[0].serializedValue.value:``}set serializedValue(e){let t=(e,t)=>e.serializedValue.value===t;this.__isInitialSerializedValue?this.registrationComplete.then(()=>{this.__isInitialSerializedValue=!1,this._setCheckedElements(e,t),this.requestUpdate(`serializedValue`)}):(this._setCheckedElements(e,t),this.requestUpdate(`serializedValue`))}get formattedValue(){let e=this._getCheckedElements();return this.multipleChoice?e.map(e=>e.formattedValue):e[0]?e[0].formattedValue:``}set formattedValue(e){let t=(e,t)=>e.formattedValue===t;this.__isInitialFormattedValue?this.registrationComplete.then(()=>{this.__isInitialFormattedValue=!1,this._setCheckedElements(e,t)}):this._setCheckedElements(e,t)}get operationMode(){return this._repropagationRole===`choice-group`?`select`:`enter`}constructor(){super(),this.multipleChoice=!1,this._repropagationRole=`choice-group`,this.__isInitialModelValue=!0,this.__isInitialSerializedValue=!0,this.__isInitialFormattedValue=!0}connectedCallback(){super.connectedCallback(),this.registrationComplete.then(()=>{this.__isInitialModelValue=!1,this.__isInitialSerializedValue=!1,this.__isInitialFormattedValue=!1})}_completeRegistration(){Promise.resolve().then(()=>super._completeRegistration())}updated(e){super.updated(e),e.has(`name`)&&this.name!==e.get(`name`)&&this.formElements.forEach(e=>{e.name=this.name})}addFormElement(e,t){this._throwWhenInvalidChildModelValue(e),e.name=this.name,super.addFormElement(e,t)}clear(){this.multipleChoice?this.modelValue=[]:this.modelValue=``}_triggerInitialModelValueChangedEvent(){this.registrationComplete.then(()=>{this._dispatchInitialModelValueChangedEvent()})}_getFromAllFormElementsFilter(e,t){return!0}_getFromAllFormElements(e,t){let n=t||this._getFromAllFormElementsFilter;if(e===`modelValue`||e===`serializedValue`||e===`formattedValue`)return this[e];let r=this.formElements.filter(t=>n(t,e));return e===`_initialModelValue`?this.multipleChoice?r.filter(t=>t[e].checked).map(t=>t[e].value):r.find(t=>t[e].checked)?.value:r.map(t=>t[e])}_throwWhenInvalidChildModelValue(e){if(typeof e.modelValue.checked!=`boolean`||!Object.prototype.hasOwnProperty.call(e.modelValue,`value`))throw Error(`The ${this.tagName.toLowerCase()} name="${this.name}" does not allow to register ${e.tagName.toLowerCase()} with .modelValue="${e.modelValue}" - The modelValue should represent an Object { value: "foo", checked: false }`)}_isEmpty(){return this.multipleChoice?this.modelValue.length===0:typeof this.modelValue==`string`&&this.modelValue===``||this.modelValue===void 0||this.modelValue===null}_checkSingleChoiceElements(e){let{target:t}=e;if(t.checked===!1)return;let n=t.name;this.formElements.filter(e=>e.name===n).forEach(e=>{e!==t&&(e.checked=!1)})}_getCheckedElements(){return this.formElements.filter(e=>e.checked&&!e.disabled)}_setCheckedElements(e,t){if(e==null){this.formElements.forEach(e=>e.checked=!1);return}for(let n=0;n<this.formElements.length;n+=1)if(this.multipleChoice){let t=e.includes(this.formElements[n].modelValue.value);typeof this.formElements[n].modelValue.value==`object`&&(t=e.map(e=>JSON.stringify(e)).includes(JSON.stringify(this.formElements[n].modelValue.value))),this.formElements[n].checked=t}else t(this.formElements[n],e)?this.formElements[n].checked=!0:this.formElements[n].checked=!1}__setChoiceGroupTouched(){let e=this.modelValue;e!=null&&e!==this.__previousCheckedValue&&(this.touched=!0,this.__previousCheckedValue=e)}_onBeforeRepropagateChildrenValues(e){let t=e.detail&&e.detail.element||e.target;this.multipleChoice||!t.checked||(this.formElements.forEach(e=>{t.choiceValue!==e.choiceValue&&(e.checked=!1)}),this.__setChoiceGroupTouched(),this.requestUpdate(`modelValue`,this._oldModelValue),this._oldModelValue=this.modelValue)}_repropagationCondition(e){return!(this._repropagationRole===`choice-group`&&!this.multipleChoice&&!e.checked)}}),Di=(e,t={})=>e.value!==t.value||e.checked!==t.checked,Oi=k(e=>class extends yi(e){static get properties(){return{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},modelValue:{type:Object,hasChanged:Di},choiceValue:{type:Object}}}get choiceValue(){return this.modelValue.value}set choiceValue(e){this.requestUpdate(`choiceValue`,this.choiceValue),this.modelValue.value!==e&&(this.modelValue={value:e,checked:this.modelValue.checked})}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`modelValue`?this.modelValue.checked!==this.checked&&this.__syncModelCheckedToChecked(this.modelValue.checked):e===`checked`&&this.modelValue.checked!==this.checked&&this.__syncCheckedToModel(this.checked)}firstUpdated(e){super.firstUpdated(e),e.has(`checked`)&&this.__syncCheckedToInputElement()}updated(e){super.updated(e),e.has(`modelValue`)&&this.__syncCheckedToInputElement(),e.has(`name`)&&this._parentFormGroup&&this._parentFormGroup.name!==this.name&&this._syncNameToParentFormGroup()}constructor(){super(),this.modelValue={value:``,checked:!1},this.disabled=!1,this._preventDuplicateLabelClick=this._preventDuplicateLabelClick.bind(this),this._toggleChecked=this._toggleChecked.bind(this)}static get styles(){return[...super.styles||[],o`
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
      `}_choiceGraphicTemplate(){return i}_afterTemplate(){return i}connectedCallback(){super.connectedCallback(),this._labelNode&&this._labelNode.addEventListener(`click`,this._preventDuplicateLabelClick),this.addEventListener(`user-input-changed`,this._toggleChecked)}disconnectedCallback(){super.disconnectedCallback(),this._labelNode&&this._labelNode.removeEventListener(`click`,this._preventDuplicateLabelClick),this.removeEventListener(`user-input-changed`,this._toggleChecked)}_preventDuplicateLabelClick(e){let t=e=>{e.stopImmediatePropagation(),this._inputNode.removeEventListener(`click`,t)};this._inputNode.addEventListener(`click`,t)}_toggleChecked(e){this.disabled||(this._isHandlingUserInput=!0,this.checked=!this.checked,this._isHandlingUserInput=!1)}_syncNameToParentFormGroup(){this._parentFormGroup.tagName.includes(this.tagName)&&(this.name=this._parentFormGroup?.name||``)}__syncModelCheckedToChecked(e){this.checked=e}__syncCheckedToModel(e){this.modelValue={value:this.choiceValue,checked:e}}__syncCheckedToInputElement(){this._inputNode&&(this._inputNode.checked=this.checked)}_proxyInputEvent(){}_onModelValueChanged({modelValue:e},t){let n;t&&t.modelValue&&(n=t.modelValue),this.constructor.elementProperties.get(`modelValue`).hasChanged(e,n)&&super._onModelValueChanged({modelValue:e})}parser(){return this.modelValue}formatter(e){return e&&e.value!==void 0?e.value:e}clear(){this.checked=!1}_isEmpty(){return!this.checked}_syncValueUpwards(){}}),ki=class extends hi{static get validatorName(){return`FormElementsHaveNoError`}execute(e,t,n){return n?.node._anyFormElementHasFeedbackFor(`error`)}static async getMessage(){return``}},Ai=k(e=>class extends Ci(ci(vi(Pt(Rt(e))))){static get properties(){return{submitted:{type:Boolean,reflect:!0},focused:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},touched:{type:Boolean,reflect:!0},prefilled:{type:Boolean,reflect:!0}}}get _inputNode(){return this}get modelValue(){return this._getFromAllFormElements(`modelValue`)}set modelValue(e){this.__isInitialModelValue?(this.__isInitialModelValue=!1,this.registrationComplete.then(()=>{this._setValueMapForAllFormElements(`modelValue`,e)})):this._setValueMapForAllFormElements(`modelValue`,e)}get serializedValue(){return this._getFromAllFormElements(`serializedValue`)}set serializedValue(e){this.__isInitialSerializedValue?(this.__isInitialSerializedValue=!1,this.registrationComplete.then(()=>{this._setValueMapForAllFormElements(`serializedValue`,e)})):this._setValueMapForAllFormElements(`serializedValue`,e)}get formattedValue(){return this._getFromAllFormElements(`formattedValue`)}set formattedValue(e){this._setValueMapForAllFormElements(`formattedValue`,e)}get prefilled(){return this._everyFormElementHas(`prefilled`)}constructor(){super(),this.value=``,this.disabled=!1,this.submitted=!1,this.dirty=!1,this.touched=!1,this.focused=!1,this.__addedSubValidators=!1,this.__isInitialModelValue=!0,this.__isInitialSerializedValue=!0,this._checkForOutsideClick=this._checkForOutsideClick.bind(this),this.addEventListener(`focusin`,this._syncFocused),this.addEventListener(`focusout`,this._onFocusOut),this.addEventListener(`dirty-changed`,this._syncDirty),this.addEventListener(`validate-performed`,this.__onChildValidatePerformed),this.defaultValidators=[new ki],this.__descriptionElementsInParentChain=new Set,this.__pendingValues={modelValue:{},serializedValue:{}}}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`group`),this.initComplete.then(()=>{this.__isInitialModelValue=!1,this.__isInitialSerializedValue=!1,this.__initInteractionStates()})}disconnectedCallback(){super.disconnectedCallback(),this.__hasActiveOutsideClickHandling&&=(document.removeEventListener(`click`,this._checkForOutsideClick),!1),this.__descriptionElementsInParentChain.clear()}__initInteractionStates(){this.formElements.forEach(e=>{typeof e.initInteractionState==`function`&&e.initInteractionState()})}_triggerInitialModelValueChangedEvent(){this.registrationComplete.then(()=>{this._dispatchInitialModelValueChangedEvent()})}updated(e){super.updated(e),e.has(`disabled`)&&(this.disabled?this.__requestChildrenToBeDisabled():this.__retractRequestChildrenToBeDisabled()),e.has(`focused`)&&this.focused===!0&&this.__setupOutsideClickHandling()}__setupOutsideClickHandling(){this.__hasActiveOutsideClickHandling||=(document.addEventListener(`click`,this._checkForOutsideClick),!0)}_checkForOutsideClick(e){this.contains(e.target)||(this.touched=!0)}__requestChildrenToBeDisabled(){this.formElements.forEach(e=>{e.makeRequestToBeDisabled&&e.makeRequestToBeDisabled()})}__retractRequestChildrenToBeDisabled(){this.formElements.forEach(e=>{e.retractRequestToBeDisabled&&e.retractRequestToBeDisabled()})}_inputGroupTemplate(){return m`
        <div class="input-group">
          <slot></slot>
        </div>
      `}submitGroup(){this.submitted=!0,this.formElements.forEach(e=>{typeof e.submitGroup==`function`?e.submitGroup():e.submitted=!0})}resetGroup(){this.formElements.forEach(e=>{typeof e.resetGroup==`function`?e.resetGroup():typeof e.reset==`function`&&e.reset()}),this.resetInteractionState()}clearGroup(){this.formElements.forEach(e=>{typeof e.clearGroup==`function`?e.clearGroup():typeof e.clear==`function`&&e.clear()}),this.resetInteractionState()}resetInteractionState(){this.submitted=!1,this.touched=!1,this.dirty=!1,this.formElements.forEach(e=>{typeof e.resetInteractionState==`function`&&e.resetInteractionState()})}_getFromAllFormElementsFilter(e,t){return!e.disabled}_getFromAllFormElements(e,t){let n={},r=t||this._getFromAllFormElementsFilter;return this.formElements._keys().forEach(t=>{let i=this.formElements[t];i instanceof Si?n[t]=i.filter(t=>r(t,e)).map(t=>t[e]):r(i,e)&&(typeof i._getFromAllFormElements==`function`?n[t]=i._getFromAllFormElements(e):n[t]=i[e])}),n}_setValueForAllFormElements(e,t){this.formElements.forEach(n=>{n[e]=t})}_setValueMapForAllFormElements(e,t){t&&typeof t==`object`&&Object.keys(t).forEach(n=>{Array.isArray(this.formElements[n])&&this.formElements[n].forEach((r,i)=>{r[e]=t[n][i]}),this.formElements[n]?this.formElements[n][e]=t[n]:this.__pendingValues[e][n]=t[n]})}_anyFormElementHas(e){return Object.keys(this.formElements).some(t=>Array.isArray(this.formElements[t])?this.formElements[t].some(t=>!!t[e]):!!this.formElements[t][e])}_anyFormElementHasFeedbackFor(e){return Object.keys(this.formElements).some(t=>Array.isArray(this.formElements[t])?this.formElements[t].some(t=>!!(t.hasFeedbackFor&&t.hasFeedbackFor.includes(e))):!!(this.formElements[t].hasFeedbackFor&&this.formElements[t].hasFeedbackFor.includes(e)))}_everyFormElementHas(e){return Object.keys(this.formElements).every(t=>Array.isArray(this.formElements[t])?this.formElements[t].every(t=>!!t[e]):!!this.formElements[t][e])}__onChildValidatePerformed(e){e&&this.isRegisteredFormElement(e.target)&&this.validate()}_syncFocused(){this.focused=this._anyFormElementHas(`focused`)}_onFocusOut(e){let t=this.formElements[this.formElements.length-1];e.target===t&&(this.touched=!0),this.focused=!1}_syncDirty(){this.dirty=this._anyFormElementHas(`dirty`)}__storeAllDescriptionElementsInParentChain(){let e=this;for(;e;)ai(e._getAriaDescriptionElements(),{reverse:!0}).forEach(e=>{e.getAttribute(`slot`)===`feedback`&&this.__descriptionElementsInParentChain.add(e)}),e=e._parentFormGroup}__linkParentMessages(e){this.__descriptionElementsInParentChain.forEach(t=>{typeof e.addToAriaDescribedBy==`function`&&e.addToAriaDescribedBy(t,{reorder:!1})})}__unlinkParentMessages(e){this.__descriptionElementsInParentChain.forEach(t=>{typeof e.removeFromAriaDescribedBy==`function`&&e.removeFromAriaDescribedBy(t)})}addFormElement(e,t){if(super.addFormElement(e,t),this.disabled&&e.makeRequestToBeDisabled(),this.__descriptionElementsInParentChain.size||this.__storeAllDescriptionElementsInParentChain(),this.__linkParentMessages(e),this.validate({clearCurrentResult:!0}),!e.modelValue){let t=this.__pendingValues;t.modelValue&&t.modelValue[e.name]?e.modelValue=t.modelValue[e.name]:t.serializedValue&&t.serializedValue[e.name]&&(e.serializedValue=t.serializedValue[e.name])}}get _initialModelValue(){return this._getFromAllFormElements(`_initialModelValue`)}removeFormElement(e){super.removeFormElement(e),this.validate({clearCurrentResult:!0}),typeof e.removeFromAriaLabelledBy==`function`&&this._labelNode&&e.removeFromAriaLabelledBy(this._labelNode,{reorder:!1}),this.__unlinkParentMessages(e)}_isEmpty(){return this.formElements.every(e=>e._isEmpty?.())}}),ji=class extends Ti(xi){static get properties(){return{readOnly:{type:Boolean,attribute:`readonly`,reflect:!0},type:{type:String,reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`),t=this.getAttribute(`value`);return t&&e.setAttribute(`value`,t),e}}}get _inputNode(){return super._inputNode}constructor(){super(),this.readOnly=!1,this.type=`text`,this.placeholder=``}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`readOnly`&&this.__delegateReadOnly()}firstUpdated(e){super.firstUpdated(e),this.__delegateReadOnly()}updated(e){super.updated(e),e.has(`type`)&&(this._inputNode.type=this.type),e.has(`placeholder`)&&(this._inputNode.placeholder=this.placeholder),e.has(`disabled`)&&(this._inputNode.disabled=this.disabled,this.validate()),e.has(`name`)&&(this._inputNode.name=this.name),e.has(`autocomplete`)&&(this._inputNode.autocomplete=this.autocomplete)}__delegateReadOnly(){this._inputNode&&(this._inputNode.readOnly=this.readOnly)}},Mi=o`
  ::slotted(.form-control) {
    ${Zn}
  }

  [slot='help-text'] {
    font-size: var(--c-text-base);
    color: var(--c-text-quiet);
  }

  :host([hidden-input]) .input-group__container {
    display: none;
  }

  /* A maxlength shrinks the control to the expected character width instead
     of spanning the column. The width attribute decouples the behaviors:
     width="full" spans despite a maxlength; width="auto" shrinks without
     one. */
  :host([maxlength]:not([width='full'])),
  :host([width='auto']) {
    width: fit-content;
    max-width: 100%;
  }

  :host([maxlength]:not([width='full'])) ::slotted([slot='input']),
  :host([width='auto']) ::slotted([slot='input']) {
    width: auto;
    min-width: 0;
    max-width: 100%;
  }

  /* Stop the input chrome from flexing back out to the available space. */
  :host([maxlength]:not([width='full'])) .input-group__container,
  :host([width='auto']) .input-group__container {
    flex: 0 1 auto;
    min-width: 0;
    max-width: 100%;
  }

  :host([maxlength]:not([width='full'])) .input-group__input,
  :host([width='auto']) .input-group__input {
    min-width: 0;
  }
`,L=class extends pr(ji){constructor(...e){super(...e),this.size=`medium`,this.inputMode=``,this.ariaInvalid=null,this.autoCorrect=!0,this.autoCapitalize=!0,this.small=!1,this.center=!1,this.monospace=!1,this.inlineSuffix=!1,this.hiddenInput=!1}static get styles(){return[...super.styles,tr,Mi]}connectedCallback(){super.connectedCallback(),this.syncNativeAttributes(),this.syncAriaInvalid()}updated(e){super.updated(e),(e.has(`inputSize`)||e.has(`maxlength`)||e.has(`width`)||e.has(`min`)||e.has(`max`)||e.has(`step`)||e.has(`inputMode`)||e.has(`autoCorrect`)||e.has(`autoCapitalize`))&&this.syncNativeAttributes(),this.syncAriaInvalid()}syncAriaInvalid(){this._inputNode?.setAttribute(`aria-invalid`,this.ariaInvalid??String(this._hasFeedbackVisibleFor(`error`)))}get maxlengthSize(){return this.maxlength&&this.maxlength>0&&this.width!==`full`?this.maxlength:void 0}syncNativeAttributes(){let e={size:this.inputSize??this.maxlengthSize,maxlength:this.maxlength&&this.maxlength>0?this.maxlength:void 0,min:this.min,max:this.max,step:this.step,inputmode:this.inputMode,autocorrect:this.autoCorrect?void 0:`off`,autocapitalize:this.autoCapitalize?void 0:`none`};for(let[t,n]of Object.entries(e)){if(n===void 0){this._inputNode?.removeAttribute(t);continue}this._inputNode?.setAttribute(t,String(n))}}};r([c({type:Number,reflect:!0})],L.prototype,`maxlength`,void 0),r([c({type:String,reflect:!0})],L.prototype,`size`,void 0),r([c({type:Number,attribute:!1})],L.prototype,`inputSize`,void 0),r([c({attribute:!1})],L.prototype,`min`,void 0),r([c({attribute:!1})],L.prototype,`max`,void 0),r([c({attribute:!1})],L.prototype,`step`,void 0),r([c({attribute:!1})],L.prototype,`inputMode`,void 0),r([c({attribute:`aria-invalid`,reflect:!0})],L.prototype,`ariaInvalid`,void 0),r([c({attribute:!1})],L.prototype,`autoCorrect`,void 0),r([c({attribute:!1})],L.prototype,`autoCapitalize`,void 0),r([c({reflect:!0,type:Boolean})],L.prototype,`small`,void 0),r([c({type:String,reflect:!0})],L.prototype,`width`,void 0),r([c({reflect:!0,type:Boolean})],L.prototype,`center`,void 0),r([c({reflect:!0,type:Boolean})],L.prototype,`monospace`,void 0),r([c({reflect:!0,type:Boolean,attribute:`inline-suffix`})],L.prototype,`inlineSuffix`,void 0),r([c({reflect:!0,type:Boolean,attribute:`hidden-input`})],L.prototype,`hiddenInput`,void 0),customElements.get(`craft-input`)||customElements.define(`craft-input`,L);var Ni=o`
  @supports (text-box: trim-both cap alphabetic) {
    text-box: trim-both cap alphabetic;
    padding-block: calc((1lh - 1cap) / 2);
  }
`,Pi=e=>e.key===` `||e.key===`Enter`,Fi=e=>e.key===` `,Ii=class extends Ft(d){static get properties(){return{active:{type:Boolean,reflect:!0},type:{type:String,reflect:!0}}}render(){return m` <div class="button-content"><slot></slot></div> `}static get styles(){return[o`
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
      `]}constructor(){super(),this.type=`button`,this.active=!1,this.__setupEvents()}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`button`)}updated(e){super.updated(e),e.has(`disabled`)&&(this.disabled?this.setAttribute(`aria-disabled`,`true`):this.getAttribute(`aria-disabled`)!==null&&this.removeAttribute(`aria-disabled`))}__setupEvents(){this.addEventListener(`mousedown`,this.__mousedownHandler),this.addEventListener(`keydown`,this.__keydownHandler),this.addEventListener(`keyup`,this.__keyupHandler)}__mousedownHandler(){this.active=!0;let e=()=>{this.active=!1,document.removeEventListener(`mouseup`,e),this.removeEventListener(`mouseup`,e)};document.addEventListener(`mouseup`,e),this.addEventListener(`mouseup`,e)}__keydownHandler(e){if(this.active||!Pi(e)){Fi(e)&&e.preventDefault();return}Fi(e)&&e.preventDefault(),this.active=!0;let t=e=>{Pi(e)&&(this.active=!1,document.removeEventListener(`keyup`,t,!0))};document.addEventListener(`keyup`,t,!0)}__keyupHandler(e){if(Pi(e)){if(e.target&&e.target!==this)return;this.click()}}},Li=class extends Ii{constructor(){super(),this.type=`reset`,this.__setupDelegationInConstructor(),this.__submitAndResetHelperButton=document.createElement(`button`),this.__preventEventLeakage=this.__preventEventLeakage.bind(this)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._setupSubmitAndResetHelperOnConnected()})}disconnectedCallback(){super.disconnectedCallback(),this._teardownSubmitAndResetHelperOnDisconnected()}__preventEventLeakage(e){e.target===this.__submitAndResetHelperButton&&e.stopImmediatePropagation()}_setupSubmitAndResetHelperOnConnected(){this.appendChild(this.__submitAndResetHelperButton),this._form=this.__submitAndResetHelperButton.form,this.removeChild(this.__submitAndResetHelperButton),this._form&&this._form.addEventListener(`click`,this.__preventEventLeakage)}_teardownSubmitAndResetHelperOnDisconnected(){this._form&&this._form.removeEventListener(`click`,this.__preventEventLeakage)}async __clickDelegationHandler(e){this._form||await this.updateComplete,(this.type===`submit`||this.type===`reset`)&&e.target===this&&this._form&&(this.__submitAndResetHelperButton.type=this.type,this._form.appendChild(this.__submitAndResetHelperButton),this.__submitAndResetHelperButton.click(),this._form.removeChild(this.__submitAndResetHelperButton))}__setupDelegationInConstructor(){this.addEventListener(`click`,this.__clickDelegationHandler,!0)}},Ri=new WeakMap;function zi(){let e=document.createElement(`button`);return e.tabIndex=-1,e.type=`submit`,e.setAttribute(`aria-hidden`,`true`),e.style.cssText=`
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
  `,e}var Bi=class extends Li{get _nativeButtonNode(){return Ri.get(this._form)?.helper||null}constructor(){super(),this.type=`submit`,this.__implicitSubmitHelperButton=null}_setupSubmitAndResetHelperOnConnected(){if(super._setupSubmitAndResetHelperOnConnected(),!this._form||this.type!==`submit`)return;let e=this._form;if(!Ri.get(this._form)){let t=zi(),n=document.createElement(`div`);n.appendChild(t),Ri.set(this._form,{lionButtons:new Set,helper:t,observer:new MutationObserver(()=>{e.appendChild(n)})}),e.appendChild(n),Ri.get(e)?.observer.observe(n,{childList:!0})}Ri.get(e)?.lionButtons.add(this)}_teardownSubmitAndResetHelperOnDisconnected(){if(super._teardownSubmitAndResetHelperOnDisconnected(),this._form){let e=Ri.get(this._form);e&&(e.lionButtons.delete(this),e.lionButtons.size||(this._form.contains(e.helper)&&e.helper.remove(),Ri.get(this._form)?.observer.disconnect(),Ri.delete(this._form)))}}},Vi=o`
  :host {
    /* Necessary to use variables here to override the default active style specificity */
    --_active-background-color: hsl(
      from var(--c-color-fill-loud, var(--c-color-neutral-fill-normal)) h s
        calc(l - 10)
    );
    --_active-color: var(--c-color-on-loud);
    --_active-border-color: var(--c-color-border-loud);
    --_button-radius: var(--c-button-radius, var(--c-form-control-radius));
    --_focus-outline-color: transparent;
    --_padding-inline: var(
      --c-button-spacing-inline,
      var(--c-form-control-spacing-inline)
    );
    --_height: var(--c-button-height, var(--c-size-control-md));
    --_border-width: var(--c-button-border-width, 1px);
    /* How far the content sits from the button's edge, which is what flush
       takes back. */
    --_flush-inline: calc(var(--_padding-inline) + var(--_border-width));
    --_flush-block: max(0px, calc((var(--_height) - 1lh) / 2));
    cursor: pointer;
    font: inherit;
    display: inline-flex;
    justify-content: center;
    gap: var(--c-spacing-sm);
    align-items: center;
    /* Per-corner radius so a parent (e.g. craft-button-group) can square off
       individual corners via inherited custom properties — including on a
       button nested inside a slotted craft-action-menu, which ::slotted()
       cannot reach. Each corner falls back to the single --_button-radius. */
    border-start-start-radius: var(
      --c-button-radius-start-start,
      var(--_button-radius)
    );
    border-start-end-radius: var(
      --c-button-radius-start-end,
      var(--_button-radius)
    );
    border-end-start-radius: var(
      --c-button-radius-end-start,
      var(--_button-radius)
    );
    border-end-end-radius: var(
      --c-button-radius-end-end,
      var(--_button-radius)
    );
    padding-inline: var(--_padding-inline);
    padding-block: 0;
    width: auto;
    min-height: var(--_height);
    min-width: var(--c-button-width, var(--c-size-control-md));
    white-space: nowrap;
    border-width: var(--_border-width);
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

  /*
  Color palette per variant.
  The single 'variant' axis picks both a palette and an appearance. Here we map
  the generic --c-color-* props to a palette; 'primary' uses accent, 'danger'
  uses danger, everything else uses neutral, and 'inherit' sets nothing so it
  adopts the parent's theme.
  */
  /*
    Neutral variants use the neutral palette by default. With [inherit] we skip
    this override so the ambient --c-color-* (set by a colorable ancestor) flows
    through instead. primary/danger set their palettes unconditionally below, so
    they are unaffected by [inherit].
  */
  :host([variant~='solid']:not([inherit])),
  :host([variant~='fill']:not([inherit])),
  :host([variant~='outline']:not([inherit])),
  :host([variant~='dashed']:not([inherit])),
  :host([variant~='plain']:not([inherit])),
  :host([variant~='link']:not([inherit])),
  :host([variant~='none']:not([inherit])) {
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

  :host([variant~='primary']) {
    --c-color-fill-loud: var(--c-color-accent-fill-loud);
    --c-color-fill-normal: var(--c-color-accent-fill-normal);
    --c-color-fill-quiet: var(--c-color-accent-fill-quiet);
    --c-color-border-loud: var(--c-color-accent-border-loud);
    --c-color-border-normal: var(--c-color-accent-border-normal);
    --c-color-border-quiet: var(--c-color-accent-border-quiet);
    --c-color-on-loud: var(--c-color-accent-on-loud);
    --c-color-on-normal: var(--c-color-accent-on-normal);
    --c-color-on-quiet: var(--c-color-accent-on-quiet);
  }

  :host([variant~='danger-plain']),
  :host([variant~='danger']) {
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

  @media (hover: hover) {
    :host(:hover) {
      background-color: hsl(
        from var(--c-color-fill-loud, var(--c-button-default-fill)) h s
          calc(l - 5)
      );
      color: var(--c-color-on-loud);
    }
  }

  :host([disabled][focusable-when-disabled]) {
    pointer-events: auto;
    cursor: default;
  }

  :host(:focus:not([disabled])),
  :host(:focus-visible) {
    outline: var(--c-focus-outline-width) solid var(--_focus-outline-color);
    outline-offset: var(--c-focus-outline-offset);
  }

  :host(:focus-visible) {
    --_focus-outline-color: var(--c-color-focus-outline);
  }

  :host([variant~='plain']),
  :host([variant~='danger-plain']) {
    --c-focus-outline-offset: calc(var(--c-focus-outline-width) * -1);
  }

  :host(:not(:disabled):not(.loading):active),
  :host(.is-active:not(:disabled):not(.loading)) {
    color: var(--_active-color);
    background-color: var(--_active-background-color);
    box-shadow: inset 0 1px 3px
      color-mix(in oklab, var(--c-color-mix-active), transparent);
  }

  /* Selected state (e.g. inside a radio button-group): show the loud fill. */
  :host(:not(:disabled):not(.loading)[active]),
  :host(.is-active:not(:disabled):not(.loading)) {
    background-color: var(--c-color-fill-loud);
    color: var(--c-color-on-loud);
    border-color: var(--c-color-border-loud);
  }

  /*
  Sizes
   */
  :host([size~='zero']) {
    --_padding-inline: 0px;
    --_height: 0px;
    min-width: 0;
  }

  :host([size~='xsmall']) {
    --_padding-inline: var(--c-spacing-xs);
    --_height: var(--c-size-control-xs);
    min-width: var(--c-size-control-xs);
    font-size: 0.8em;
  }

  :host([size~='small']) {
    --_padding-inline: var(--c-spacing-sm);
    --_height: var(--c-size-control-sm);
    min-width: var(--c-size-control-sm);
    font-size: 0.9em;
  }

  :host([size~='large']) {
    --_padding-inline: var(--c-spacing-lg);
    --_height: var(--c-size-control-lg);
    min-width: var(--c-size-control-lg);
  }

  /*
  Flush
   */
  /*
  A popover has no box of its own, so as its invoker, the button takes the
  button group's overlap the popover would have had, on top of any flush
  margin.
  */
  :host {
    --_group-overlap: 0px;
  }

  :host([slot='invoker']) {
    --_group-overlap: var(--c-button-group-overlap, 0px);
    margin-inline-start: var(--_group-overlap);
  }

  :host([variant~='plain'][flush='']),
  :host([variant~='danger-plain'][flush='']),
  :host([variant~='plain'][flush~='inline']),
  :host([variant~='danger-plain'][flush~='inline']),
  :host([variant~='plain'][flush~='inline-start']),
  :host([variant~='danger-plain'][flush~='inline-start']) {
    margin-inline-start: calc(
      var(--_flush-inline) * -1 + var(--_group-overlap)
    );
  }

  :host([variant~='plain'][flush='']),
  :host([variant~='danger-plain'][flush='']),
  :host([variant~='plain'][flush~='inline']),
  :host([variant~='danger-plain'][flush~='inline']),
  :host([variant~='plain'][flush~='inline-end']),
  :host([variant~='danger-plain'][flush~='inline-end']) {
    margin-inline-end: calc(var(--_flush-inline) * -1);
  }

  :host([variant~='plain'][flush='']),
  :host([variant~='danger-plain'][flush='']),
  :host([variant~='plain'][flush~='block']),
  :host([variant~='danger-plain'][flush~='block']),
  :host([variant~='plain'][flush~='block-start']),
  :host([variant~='danger-plain'][flush~='block-start']) {
    margin-block-start: calc(var(--_flush-block) * -1);
  }

  :host([variant~='plain'][flush='']),
  :host([variant~='danger-plain'][flush='']),
  :host([variant~='plain'][flush~='block']),
  :host([variant~='danger-plain'][flush~='block']),
  :host([variant~='plain'][flush~='block-end']),
  :host([variant~='danger-plain'][flush~='block-end']) {
    margin-block-end: calc(var(--_flush-block) * -1);
  }

  :host([loading]),
  :host([action-state='loading']) {
    position: relative;

    /* Hidden with opacity, not visibility, so the label stays in the button's
       accessible name. The live region adds "Loading" to it. */
    .button-content {
      opacity: 0;
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
  :host([icon]:empty) {
    /* A square around a 1em × 0.8em icon (see craft-icon). */
    --_padding-inline: 0px;
    --_flush-inline: max(0px, calc((var(--_height) - 1em) / 2));
    --_flush-block: max(0px, calc((var(--_height) - 0.8em) / 2));
    aspect-ratio: 1;
    padding-block: 0;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1;
  }

  /*
  Variants (appearance × palette)
   */

  /* Solid — primary, danger, and solid are filled with the loud color. */
  :host([variant~='primary']),
  :host([variant~='danger']),
  :host([variant~='solid']) {
    background-color: var(
      --c-color-fill-loud,
      var(--c-color-neutral-fill-loud)
    );
    border-color: transparent;
    color: var(--c-color-on-loud, var(--c-color-neutral-on-loud));
  }

  :host([variant~='primary']:hover),
  :host([variant~='danger']:hover),
  :host([variant~='solid']:hover) {
    background-color: hsl(
      from var(--c-color-fill-loud, var(--c-color-neutral-fill-loud)) h s
        calc(l - 5)
    );
    color: var(--c-color-on-loud, var(--c-color-neutral-on-loud));
  }

  :host([variant~='primary']:active),
  :host([variant~='primary'][aria-pressed='true']),
  :host([variant~='danger']:active),
  :host([variant~='danger'][aria-pressed='true']),
  :host([variant~='solid']:active),
  :host([variant~='solid'][aria-pressed='true']) {
    --_active-background-color: hsl(
      from var(--c-color-fill-loud, var(--c-color-neutral-fill-loud)) h s
        calc(l - 10)
    );
    --_active-color: var(--c-color-on-loud, var(--c-color-neutral-on-loud));
  }

  /* Fill (default) — neutral quiet fill. */
  :host([variant~='fill']) {
    border-color: transparent;
    background-color: var(
      --c-color-fill-quiet,
      var(--c-color-neutral-fill-quiet)
    );
    color: var(--c-color-on-normal, var(--c-color-neutral-on-normal));
  }

  :host([variant~='fill']:hover) {
    background-color: hsl(
      from var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)) h s
        calc(l - 5)
    );
    color: var(--c-color-on-normal, var(--c-color-neutral-on-normal));
  }

  :host([variant~='fill']:active) {
    --_active-background-color: hsl(
      from var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)) h s
        calc(l - 10)
    );
    --_active-color: var(--c-color-on-normal, var(--c-color-neutral-on-normal));
  }

  /* Outline, Dashed & Plain — transparent fill. */
  :host([variant~='outline']),
  :host([variant~='dashed']),
  :host([variant~='danger-plain']),
  :host([variant~='plain']) {
    background-color: transparent;
    color: var(--c-color-on-quiet);
  }

  :host([variant~='outline']:not(:disabled):not(.loading):hover),
  :host([variant~='dashed']:not(:disabled):not(.loading):hover),
  :host([variant~='danger-plain']:not(:disabled):not(.loading):hover),
  :host([variant~='plain']:not(:disabled):not(.loading):hover) {
    background-color: color-mix(
      in oklab,
      var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)),
      var(--c-color-mix-hover)
    );
    color: var(--c-color-on-quiet);
  }

  :host([variant~='outline']:not(:disabled):not(.loading):active),
  :host([variant~='dashed']:not(:disabled):not(.loading):active),
  :host([variant~='danger-plain']:not(:disabled):not(.loading):active),
  :host([variant~='plain']:not(:disabled):not(.loading):active) {
    --_active-background-color: color-mix(
      in oklab,
      var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)),
      var(--c-color-mix-active)
    );
    --_active-color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
  }

  /* Outline & Dashed — visible border. */
  :host([variant~='outline']),
  :host([variant~='dashed']) {
    border-color: var(--c-color-border-loud);
  }

  :host(
    [variant~='outline']:not([variant~='primary']):not([variant~='danger']):not(
      [inherit]
    ):not([active]):not(.is-active)
  ),
  :host(
    [variant~='dashed']:not([variant~='primary']):not([variant~='danger']):not(
      [inherit]
    ):not([active]):not(.is-active)
  ) {
    border-color: var(--c-form-control-border-color);
    border-inline-start-color: var(
      --c-button-group-border-start-color,
      var(--c-form-control-border-color)
    );
    border-inline-end-color: var(
      --c-button-group-border-end-color,
      var(--c-form-control-border-color)
    );
  }

  :host([variant~='dashed']) {
    --c-button-border-style: dashed;
  }

  /* Plain — no border. */
  :host([variant~='danger-plain']),
  :host([variant~='plain']) {
    border-color: transparent;

    &::before {
      display: none;
    }
  }

  /* Link — renders as a text hyperlink: no fill or border, underlined. */
  :host([variant~='link']) {
    display: inline-flex;
    appearance: none;
    background-color: transparent;
    border-color: transparent;
    color: var(--c-color-fill-loud, var(--c-color-neutral-fill-loud));
    font: inherit;
    padding: 0;
    min-height: auto;
    min-width: auto;
    text-decoration: underline;

    &::before {
      /* remove the sizer added by lion */
      display: none;
    }

    .button-content {
      padding: 0;
    }
  }

  :host([variant~='link']:not(:disabled):not(.loading):hover) {
    background-color: transparent;
    color: hsl(
      from var(--c-color-fill-loud, var(--c-color-neutral-fill-loud)) h s
        calc(l - 10)
    );
    text-decoration: none;
  }

  :host([variant~='link']:not(:disabled):not(.loading):active) {
    background-color: transparent;
  }

  /* Skipping the palette block isn't enough on a surface that sets only its
     text color; plain has no fill of its own, so it can follow that text. */
  :host([variant~='plain'][inherit]) {
    color: inherit;
  }

  @media (hover: hover) {
    :host([variant~='plain'][inherit]:not(:disabled):not(.loading):hover) {
      color: inherit;
    }
  }

  :host([variant~='plain'][inherit]:not(:disabled):not(.loading):active),
  :host([variant~='plain'][inherit].is-active:not(:disabled):not(.loading)) {
    color: inherit;
  }

  /* After the variants, which switch the sizer off: xsmall draws under
     the minimum target size, so the hit area has to come from the sizer. */
  :host([size~='xsmall'])::before {
    content: '';
    display: block;
    position: absolute;
    /* Physical on purpose: paired with the translate below to center the
       sizer, which the logical properties would push off-center in RTL. */
    /* stylelint-disable liberty/use-logical-spec */
    top: 50%;
    left: 50%;
    /* stylelint-enable liberty/use-logical-spec */
    transform: translate(-50%, -50%);
    min-height: var(--c-size-touch-target-sm);
    min-width: var(--c-size-touch-target-sm);
    width: 100%;
    height: 100%;
  }

  /* None — completely unstyled; provides behavior only. */
  :host([variant~='none']) {
    appearance: none;
    background-color: transparent;
    border-color: transparent;
    border-width: 0;
    color: inherit;
    font: inherit;
    padding: 0;
    min-height: auto;
    min-width: auto;

    &::before {
      display: none;
    }

    .button-content {
      padding: 0;
    }
  }

  :host([variant~='none']:hover),
  :host([variant~='none']:active) {
    background-color: transparent;
    color: inherit;
  }

  /* A selected button keeps its selected look while hovered. After the
     variants' hover rules, which would otherwise paint over it. */
  :host([variant][active]:not(:disabled):not(.loading):hover),
  :host([variant].is-active:not(:disabled):not(.loading):hover) {
    background-color: var(--c-color-fill-loud);
    color: var(--c-color-on-loud);
    border-color: var(--c-color-border-loud);
  }

  /* After the variants, whose colors would otherwise paint over Lion's own
     disabled rule and leave a disabled button looking enabled. */
  :host([disabled]) {
    opacity: 0.5;
    user-select: none;
  }

  .button-content {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .prefix,
  .suffix {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button-content--spaced-prefix .prefix {
    margin-inline-end: var(--c-spacing-sm);
  }

  .button-content--spaced-suffix .suffix {
    margin-inline-start: var(--c-spacing-sm);
  }

  .shortcut {
    --c-shortcut-shadow: none;
    margin-inline-start: var(--c-spacing-md);
    margin-inline-end: calc(var(--c-spacing) / -2);
  }

  .button-content--start {
    justify-content: start;
  }

  .button-content--end {
    justify-content: end;
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
    border-radius: inherit;
    outline: none;

    /* Same minimum click area as Lion's :host::before (WCAG 2.5.5), but as
       part of the anchor so clicks on it follow the link. */

    &::before {
      content: '';
      position: absolute;
      /* Physical on purpose: translate(-50%, -50%) centers against the
         physical left edge in both directions. */
      /* stylelint-disable liberty/use-logical-spec */
      top: 50%;
      left: 50%;
      /* stylelint-enable liberty/use-logical-spec */
      transform: translate(-50%, -50%);
      min-height: var(--_link-min-height, 44px);
      min-width: var(--_link-min-width, 44px);
      width: 100%;
      height: 100%;
    }
  }

  /* The anchor takes focus instead of the host, so it draws the host's ring.
     The browser's own ring would also wrap the click-area overlay above. */
  .link:focus-visible {
    outline: var(--c-focus-outline-width) solid var(--c-color-focus-outline);
    outline-offset: calc(var(--c-focus-outline-offset) + var(--_border-width));
  }

  :host([href][size~='xsmall']:not([disabled])) .link {
    --_link-min-height: var(--c-size-touch-target-sm);
    --_link-min-width: var(--c-size-touch-target-sm);
    padding-inline: var(--c-spacing-xs);
  }

  :host([href][size~='small']:not([disabled])) .link {
    padding-inline: var(--c-spacing-sm);
  }

  :host([href][size~='large']:not([disabled])) .link {
    padding-inline: var(--c-spacing-lg);
  }

  /* Only an icon-only link sits flush in its square; one with a label keeps
     its padding. */
  :host([href][size~='zero']:not([disabled])) .link,
  :host([href][icon]:empty:not([disabled])) .link {
    padding-inline: 0;
  }

  .label--text {
    display: block;
    ${Ni}
  }

  :host([flush]) .label--text {
    text-box: normal;
    padding-block: 0;
  }

  :host(
    :is(
      [variant~='fill'],
      [variant~='solid'],
      [variant~='primary'],
      [variant~='danger'],
      [variant~='plain'],
      [variant~='danger-plain']
    )
  ) {
    --_divider-left: var(--c-button-divider-start-color, transparent);
    --_divider-right: var(--c-button-divider-end-color, transparent);
    background-image:
      linear-gradient(to right, var(--_divider-left) 1px, transparent 1px),
      linear-gradient(to left, var(--_divider-right) 1px, transparent 1px);
    background-origin: border-box;
  }

  :host(:dir(rtl)) {
    --_divider-left: var(--c-button-divider-end-color, transparent);
    --_divider-right: var(--c-button-divider-start-color, transparent);
  }

  /* Ellipsis (action menu) icons read small at craft-icon's 0.8em */
  craft-icon[name='ellipsis'],
  ::slotted(craft-icon[name='ellipsis']) {
    --c-icon-size: 1em;
  }
`,Hi=Object.prototype.toString;function Ui(e){return typeof e==`function`||Hi.call(e)===`[object Function]`}function Wi(e){var t=Number(e);return isNaN(t)?0:t===0||!isFinite(t)?t:(t>0?1:-1)*Math.floor(Math.abs(t))}var Gi=2**53-1;function Ki(e){var t=Wi(e);return Math.min(Math.max(t,0),Gi)}function qi(e,t){var n=Array,r=Object(e);if(e==null)throw TypeError(`Array.from requires an array-like object - not null or undefined`);if(t!==void 0&&!Ui(t))throw TypeError(`Array.from: when provided, the second argument must be a function`);for(var i=Ki(r.length),a=Ui(n)?Object(new n(i)):Array(i),o=0,s;o<i;)s=r[o],t?a[o]=t(s,o):a[o]=s,o+=1;return a.length=i,a}function Ji(e){"@babel/helpers - typeof";return Ji=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Ji(e)}function Yi(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Xi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,$i(r.key),r)}}function Zi(e,t,n){return t&&Xi(e.prototype,t),n&&Xi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Qi(e,t,n){return t=$i(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $i(e){var t=ea(e,`string`);return Ji(t)==`symbol`?t:t+``}function ea(e,t){if(Ji(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Ji(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var ta=typeof Set>`u`?Set:function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];Yi(this,e),Qi(this,`items`,void 0),this.items=t}return Zi(e,[{key:`add`,value:function(e){return this.has(e)===!1&&this.items.push(e),this}},{key:`clear`,value:function(){this.items=[]}},{key:`delete`,value:function(e){var t=this.items.length;return this.items=this.items.filter(function(t){return t!==e}),t!==this.items.length}},{key:`forEach`,value:function(e){var t=this;this.items.forEach(function(n){e(n,n,t)})}},{key:`has`,value:function(e){return this.items.indexOf(e)!==-1}},{key:`size`,get:function(){return this.items.length}}])}();function na(e){return e.localName??e.tagName.toLowerCase()}var ra={article:`article`,aside:`complementary`,button:`button`,datalist:`listbox`,dd:`definition`,details:`group`,dialog:`dialog`,dt:`term`,fieldset:`group`,figure:`figure`,form:`form`,footer:`contentinfo`,h1:`heading`,h2:`heading`,h3:`heading`,h4:`heading`,h5:`heading`,h6:`heading`,header:`banner`,hr:`separator`,html:`document`,legend:`legend`,li:`listitem`,math:`math`,main:`main`,menu:`list`,nav:`navigation`,ol:`list`,optgroup:`group`,option:`option`,output:`status`,progress:`progressbar`,section:`region`,summary:`button`,table:`table`,tbody:`rowgroup`,textarea:`textbox`,tfoot:`rowgroup`,td:`cell`,th:`columnheader`,thead:`rowgroup`,tr:`row`,ul:`list`},ia={caption:new Set([`aria-label`,`aria-labelledby`]),code:new Set([`aria-label`,`aria-labelledby`]),deletion:new Set([`aria-label`,`aria-labelledby`]),emphasis:new Set([`aria-label`,`aria-labelledby`]),generic:new Set([`aria-label`,`aria-labelledby`,`aria-roledescription`]),insertion:new Set([`aria-label`,`aria-labelledby`]),none:new Set([`aria-label`,`aria-labelledby`]),paragraph:new Set([`aria-label`,`aria-labelledby`]),presentation:new Set([`aria-label`,`aria-labelledby`]),strong:new Set([`aria-label`,`aria-labelledby`]),subscript:new Set([`aria-label`,`aria-labelledby`]),superscript:new Set([`aria-label`,`aria-labelledby`])};function aa(e,t){return[`aria-atomic`,`aria-busy`,`aria-controls`,`aria-current`,`aria-description`,`aria-describedby`,`aria-details`,`aria-dropeffect`,`aria-flowto`,`aria-grabbed`,`aria-hidden`,`aria-keyshortcuts`,`aria-label`,`aria-labelledby`,`aria-live`,`aria-owns`,`aria-relevant`,`aria-roledescription`].some(function(n){var r;return e.hasAttribute(n)&&!((r=ia[t])!=null&&r.has(n))})}function oa(e,t){return aa(e,t)}function sa(e){var t=la(e);if(t===null||ua.indexOf(t)!==-1){var n=ca(e);if(ua.indexOf(t||``)===-1||oa(e,n||``))return n}return t}function ca(e){var t=ra[na(e)];if(t!==void 0)return t;switch(na(e)){case`a`:case`area`:case`link`:if(e.hasAttribute(`href`))return`link`;break;case`img`:return e.getAttribute(`alt`)===``&&!oa(e,`img`)?`presentation`:`img`;case`input`:var n=e.type;switch(n){case`button`:case`image`:case`reset`:case`submit`:return`button`;case`checkbox`:case`radio`:return n;case`range`:return`slider`;case`email`:case`tel`:case`text`:case`url`:return e.hasAttribute(`list`)?`combobox`:`textbox`;case`search`:return e.hasAttribute(`list`)?`combobox`:`searchbox`;case`number`:return`spinbutton`;default:return null}case`select`:return e.hasAttribute(`multiple`)||e.size>1?`listbox`:`combobox`}return null}function la(e){var t=e.getAttribute(`role`);if(t!==null){var n=t.trim().split(` `)[0];if(n.length>0)return n}return null}var ua=[`presentation`,`none`];function R(e){return e!==null&&e.nodeType===e.ELEMENT_NODE}function da(e){return R(e)&&na(e)===`caption`}function fa(e){return R(e)&&na(e)===`input`}function pa(e){return R(e)&&na(e)===`optgroup`}function ma(e){return R(e)&&na(e)===`select`}function ha(e){return R(e)&&na(e)===`table`}function ga(e){return R(e)&&na(e)===`textarea`}function _a(e){var t=(e.ownerDocument===null?e:e.ownerDocument).defaultView;if(t===null)throw TypeError(`no window available`);return t}function va(e){return R(e)&&na(e)===`fieldset`}function ya(e){return R(e)&&na(e)===`legend`}function ba(e){return R(e)&&na(e)===`slot`}function xa(e){return R(e)&&e.ownerSVGElement!==void 0}function Sa(e){return R(e)&&na(e)===`svg`}function Ca(e){return xa(e)&&na(e)===`title`}function wa(e,t){if(R(e)&&e.hasAttribute(t)){var n=e.getAttribute(t).split(` `),r=e.getRootNode?e.getRootNode():e.ownerDocument;return n.map(function(e){return r.getElementById(e)}).filter(function(e){return e!==null})}return[]}function Ta(e,t){return R(e)?t.indexOf(sa(e))!==-1:!1}function Ea(e){return e.trim().replace(/\s\s+/g,` `)}function Da(e,t){if(!R(e))return!1;if(e.hasAttribute(`hidden`)||e.getAttribute(`aria-hidden`)===`true`)return!0;var n=t(e);return n.getPropertyValue(`display`)===`none`||n.getPropertyValue(`visibility`)===`hidden`}function Oa(e){return Ta(e,[`button`,`combobox`,`listbox`,`textbox`])||ka(e,`range`)}function ka(e,t){if(!R(e))return!1;switch(t){case`range`:return Ta(e,[`meter`,`progressbar`,`scrollbar`,`slider`,`spinbutton`]);default:throw TypeError(`No knowledge about abstract role '${t}'. This is likely a bug :(`)}}function Aa(e,t){var n=qi(e.querySelectorAll(t));return wa(e,`aria-owns`).forEach(function(e){n.push.apply(n,qi(e.querySelectorAll(t)))}),n}function ja(e){return ma(e)?e.selectedOptions||Aa(e,`[selected]`):Aa(e,`[aria-selected="true"]`)}function Ma(e){return Ta(e,ua)}function Na(e){return da(e)}function Pa(e){return Ta(e,[`button`,`cell`,`checkbox`,`columnheader`,`gridcell`,`heading`,`label`,`legend`,`link`,`menuitem`,`menuitemcheckbox`,`menuitemradio`,`option`,`radio`,`row`,`rowheader`,`switch`,`tab`,`tooltip`,`treeitem`])}function Fa(e){return!1}function Ia(e){return fa(e)||ga(e)?e.value:e.textContent||``}function La(e){var t=e.getPropertyValue(`content`);return/^["'].*["']$/.test(t)?t.slice(1,-1):``}function Ra(e){var t=na(e);return t===`button`||t===`input`&&e.getAttribute(`type`)!==`hidden`||t===`meter`||t===`output`||t===`progress`||t===`select`||t===`textarea`}function za(e){if(Ra(e))return e;var t=null;return e.childNodes.forEach(function(e){if(t===null&&R(e)){var n=za(e);n!==null&&(t=n)}}),t}function Ba(e){if(e.control!==void 0)return e.control;var t=e.getAttribute(`for`);return t===null?za(e):e.ownerDocument.getElementById(t)}function Va(e){var t=e.labels;if(t===null)return t;if(t!==void 0)return qi(t);if(!Ra(e))return null;var n=e.ownerDocument;return qi(n.querySelectorAll(`label`)).filter(function(t){return Ba(t)===e})}function Ha(e){var t=e.assignedNodes();return t.length===0?qi(e.childNodes):t}function Ua(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=new ta,r=typeof Map>`u`?void 0:new Map,i=_a(e),a=t.compute,o=a===void 0?`name`:a,s=t.computedStyleSupportsPseudoElements,c=s===void 0?t.getComputedStyle!==void 0:s,l=t.getComputedStyle,u=l===void 0?i.getComputedStyle.bind(i):l,d=t.hidden,f=d!==void 0&&d,p=function(e,t){if(t!==void 0)throw Error(`use uncachedGetComputedStyle directly for pseudo elements`);if(r===void 0)return u(e);var n=r.get(e);if(n)return n;var i=u(e,t);return r.set(e,i),i};function m(e,t){var n=``;if(R(e)&&c&&(n=`${La(u(e,`::before`))} ${n}`),(ba(e)?Ha(e):qi(e.childNodes).concat(wa(e,`aria-owns`))).forEach(function(e){var r=v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1,recursion:!0}),i=(R(e)?p(e).getPropertyValue(`display`):`inline`)===`inline`?``:` `;n+=`${i}${r}${i}`}),R(e)&&c){var r=La(u(e,`::after`));n=`${n} ${r}`}return n.trim()}function h(e,t){var r=e.getAttributeNode(t);return r!==null&&!n.has(r)&&r.value.trim()!==``?(n.add(r),r.value):null}function g(e){return R(e)?h(e,`title`):null}function _(e){if(!R(e))return null;if(va(e)){n.add(e);for(var t=qi(e.childNodes),r=0;r<t.length;r+=1){var i=t[r];if(ya(i))return v(i,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else if(ha(e)){n.add(e);for(var a=qi(e.childNodes),o=0;o<a.length;o+=1){var s=a[o];if(da(s))return v(s,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else if(Sa(e)){n.add(e);for(var c=qi(e.childNodes),l=0;l<c.length;l+=1){var u=c[l];if(Ca(u))return u.textContent}return null}else if(na(e)===`img`||na(e)===`area`){var d=h(e,`alt`);if(d!==null)return d}else if(pa(e)){var f=h(e,`label`);if(f!==null)return f}if(fa(e)&&(e.type===`button`||e.type===`submit`||e.type===`reset`)){var p=h(e,`value`);if(p!==null)return p;if(e.type===`submit`)return`Submit`;if(e.type===`reset`)return`Reset`}var g=Va(e);if(g!==null&&g.length!==0)return n.add(e),qi(g).map(function(e){return v(e,{isEmbeddedInLabel:!0,isReferenced:!1,recursion:!0})}).filter(function(e){return e.length>0}).join(` `);if(fa(e)&&e.type===`image`){var _=h(e,`alt`);if(_!==null)return _;var y=h(e,`title`);return y===null?`Submit Query`:y}if(Ta(e,[`button`])){var b=m(e,{isEmbeddedInLabel:!1,isReferenced:!1});if(b!==``)return b}return null}function v(e,t){if(n.has(e))return``;if(!f&&Da(e,p)&&!t.isReferenced)return n.add(e),``;var r=R(e)?e.getAttributeNode(`aria-labelledby`):null,i=r!==null&&!n.has(r)?wa(e,`aria-labelledby`):[];if(o===`name`&&!t.isReferenced&&i.length>0)return n.add(r),i.map(function(e){return v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!0,recursion:!1})}).join(` `);var a=t.recursion&&Oa(e)&&o===`name`;if(!a){var s=(R(e)&&e.getAttribute(`aria-label`)||``).trim();if(s!==``&&o===`name`)return n.add(e),s;if(!Ma(e)){var c=_(e);if(c!==null)return n.add(e),c}}if(Ta(e,[`menu`]))return n.add(e),``;if(a||t.isEmbeddedInLabel||t.isReferenced){if(Ta(e,[`combobox`,`listbox`])){n.add(e);var l=ja(e);return l.length===0?fa(e)?e.value:``:qi(l).map(function(e){return v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1,recursion:!0})}).join(` `)}if(ka(e,`range`))return n.add(e),e.hasAttribute(`aria-valuetext`)?e.getAttribute(`aria-valuetext`):e.hasAttribute(`aria-valuenow`)?e.getAttribute(`aria-valuenow`):e.getAttribute(`value`)||``;if(Ta(e,[`textbox`]))return n.add(e),Ia(e)}if(Pa(e)||R(e)&&t.isReferenced||Na(e)||Fa(e)){var u=m(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1});if(u!==``)return n.add(e),u}if(e.nodeType===e.TEXT_NODE)return n.add(e),e.textContent||``;if(t.recursion)return n.add(e),m(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1});var d=g(e);return d===null?(n.add(e),``):(n.add(e),d)}return Ea(v(e,{isEmbeddedInLabel:!1,isReferenced:o===`description`,recursion:!1}))}function Wa(e){return Ta(e,[`caption`,`code`,`deletion`,`emphasis`,`generic`,`insertion`,`none`,`paragraph`,`presentation`,`strong`,`subscript`,`superscript`])}function Ga(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Wa(e)?``:Ua(e,t)}var Ka=e=>{var t=new WeakMap,n=new WeakSet,i=new WeakMap;class a extends e{constructor(...e){super(...e),x(this,n),this.action=null,this.feedback=null,this.feedbackDuration=1e3,this.actionState=D.Idle,this.feedbackMessage=null,T(this,t,null),T(this,i,e=>{if(this.disabled){e.preventDefault();return}ut(this.action)&&(e.preventDefault(),this.triggerAction(e))})}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,S(i,this))}disconnectedCallback(){this.removeEventListener(`click`,S(i,this)),w(n,this,o).call(this),super.disconnectedCallback()}setActionState(e,t={}){this.actionState=e,this.feedbackMessage=t.message??null,this.dispatchEvent(new CustomEvent(`craft-state-change`,{bubbles:!0,composed:!0,detail:{state:e,actionType:ut(this.action)?.type,...t}}))}async triggerAction(e){let r=ut(this.action);if(r){w(n,this,o).call(this),r.type===`http`&&this.setActionState(D.Loading,this.feedback?.loading);try{await ft(r,{trigger:this,sourceEvent:e}),this.setActionState(D.Success,this.feedback?.success)}catch(e){this.setActionState(D.Error,{message:e instanceof Error?e.message:void 0,...this.feedback?.error??{}})}finally{w(n,this,o).call(this),this.isConnected?C(t,this,setTimeout(()=>{C(t,this,null),this.setActionState(D.Idle)},this.feedbackDuration)):(this.actionState=D.Idle,this.feedbackMessage=null)}}}}function o(){S(t,this)!==null&&(clearTimeout(S(t,this)),C(t,this,null))}return r([c({type:Object})],a.prototype,`action`,void 0),r([c({type:Object})],a.prototype,`feedback`,void 0),r([c({type:Number,attribute:`feedback-duration`})],a.prototype,`feedbackDuration`,void 0),r([c({reflect:!0,attribute:`action-state`})],a.prototype,`actionState`,void 0),r([p()],a.prototype,`feedbackMessage`,void 0),a},qa={Primary:`primary`,Danger:`danger`,DangerPlain:`danger-plain`,Solid:`solid`,Fill:`fill`,Outline:`outline`,Dashed:`dashed`,Plain:`plain`,Link:`link`,None:`none`},Ja=new WeakMap,Ya=new WeakMap,Xa=new WeakMap,Za=new WeakSet,Qa=new WeakMap,$a=new WeakMap,eo=new WeakMap,z=class extends ne(Ka(Bi)){static get styles(){return[...super.styles,le,te,Vi]}constructor(){super(),x(this,Za),this.type=`button`,T(this,Ja,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),T(this,Ya,()=>{let e=()=>{this.active=!1,t()},t=()=>{document.removeEventListener(`dragend`,e,!0),document.removeEventListener(`mouseup`,t,!0)};document.addEventListener(`dragend`,e,!0),document.addEventListener(`mouseup`,t,!0)}),T(this,Xa,e=>{!this.toggle||this.disabled||this.loading||this.dispatchEvent(new CustomEvent(`craft-toggle`,{bubbles:!0,composed:!0,cancelable:!0,detail:{active:!this.active,sourceEvent:e}}))}),this.variant=qa.Fill,this.inherit=!1,this.size=`medium`,this.active=!1,this.toggle=!1,this.loading=!1,this.focusableWhenDisabled=!1,this.align=`center`,this.icon=null,this.href=null,this.target=null,this.rel=null,this.download=null,this.iconPosition=`prefix`,this._accessibleName=``,this._hasAccessibilityError=!1,this._hostLabel=null,this._content={label:!1,textLabel:!1,prefix:!1,suffix:!1},T(this,Qa,null),T(this,$a,null),T(this,eo,null),this.linkHostStateApplied=!1,this.originalType=null,this.type=`button`,this.addEventListener(`mousedown`,S(Ya,this)),this.addEventListener(`click`,S(Ja,this),{capture:!0})}connectedCallback(){this.href&&!this.disabled&&(this.originalType=this.type,this.type=`button`,this.setAttribute(`role`,`presentation`),this.linkHostStateApplied=!0),super.connectedCallback(),this._hostLabel=this.getAttribute(`aria-label`),this.syncLinkHostState(),this.addEventListener(`click`,S(Xa,this)),w(Za,this,to).call(this),C($a,this,new MutationObserver(()=>{w(Za,this,to).call(this),this._hostLabel=this.getAttribute(`aria-label`),this.hasUpdated&&this.updateComplete.then(()=>w(Za,this,no).call(this))})),S($a,this).observe(this,{childList:!0,characterData:!0,subtree:!0,attributes:!0,attributeFilter:[`slot`,`aria-label`,`aria-labelledby`,`title`]}),this.hasUpdated&&!this._accessibleName.trim()&&w(Za,this,no).call(this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,S(Xa,this)),S($a,this)?.disconnect(),C($a,this,null),w(Za,this,ao).call(this)}willUpdate(e){super.willUpdate(e),e.has(`actionState`)&&e.get(`actionState`)!==void 0&&(this.loading=this.actionState===D.Loading)}updated(e){if(super.updated(e),(e.has(`href`)||e.has(`disabled`))&&this.syncLinkHostState(),(e.has(`disabled`)||e.has(`focusableWhenDisabled`))&&(this.disabled?this.tabIndex=this.focusableWhenDisabled?0:-1:this.isLink||(this.tabIndex=0)),e.has(`shortcut`)){let e=this.getAttribute(`aria-keyshortcuts`),t=this.shortcutAriaKeys;(e===null||e===S(Qa,this))&&(t?this.setAttribute(`aria-keyshortcuts`,t):this.removeAttribute(`aria-keyshortcuts`),C(Qa,this,t))}this.toggle&&(e.has(`active`)||e.has(`toggle`))&&this.setAttribute(`aria-pressed`,String(this.active)),e.has(`loading`)&&(this.loading?this.announceLoading():e.get(`loading`)&&this.clearLoadingAnnouncement())}announceLoading(){this.liveRegion.textContent=n(`Loading`)}clearLoadingAnnouncement(){this.liveRegion.textContent=``}syncLinkHostState(){this.isLink?(this.linkHostStateApplied||(this.originalType=this.type),this.setAttribute(`role`,`presentation`),this.tabIndex=null,this.removeAttribute(`tabindex`),this.type=`button`,this.linkHostStateApplied=!0):this.linkHostStateApplied&&=(this.setAttribute(`role`,`button`),this.type=this.originalType??`button`,this.disabled||(this.tabIndex=0),!1)}async firstUpdated(e){super.firstUpdated(e),await this.updateComplete;let t=this.querySelectorAll(`craft-icon, craft-spinner`);await Promise.all(Array.from(t).map(e=>e.updateComplete)),w(Za,this,no).call(this)}get isLink(){return!!this.href&&!this.disabled}get computedTarget(){return b(this.href,this.target)}render(){let e=this._content.prefix||!!this.icon&&this.iconPosition===`prefix`,t=this._content.suffix||!!this.icon&&this.iconPosition===`suffix`,n=m`
      <div
        class="${O({"button-content":!0,"button-content--spaced-prefix":e&&this._content.label,"button-content--spaced-suffix":t&&this._content.label,"button-content--start":this.align===`start`,"button-content--end":this.align===`end`,"a11y-error":this._hasAccessibilityError})}"
        part="content"
      >
        <slot name="prefix" class="prefix" part="prefix">
          ${this.icon&&this.iconPosition===`prefix`?m`<craft-icon name="${this.icon}"></craft-icon>`:i}
        </slot>
        <slot
          class="${O({label:!0,"label--text":this._content.textLabel})}"
          part="label"
        ></slot>
        <slot name="suffix" class="suffix" part="suffix">
          ${this.icon&&this.iconPosition===`suffix`?m`<craft-icon name="${this.icon}"></craft-icon>`:i}
        </slot>
        ${this.shortcutKeys?m`<craft-shortcut
              class="shortcut"
              aria-hidden="true"
              ?alt="${this.shortcutKeys.alt}"
              ?shift="${this.shortcutKeys.shift}"
              >${this.shortcutKeys.key}</craft-shortcut
            >`:i}
      </div>
      ${this.loading?m`<craft-spinner part="spinner"></craft-spinner>`:i}
      <span class="cp-visually-hidden" role="status" data-live-region></span>
    `;if(this.isLink){let e=this.computedTarget,t=this._hostLabel?.trim()||null,r=!this.target&&!!e;return m`
        <a
          class="link"
          part="link"
          href="${this.href}"
          target="${e??i}"
          rel="${v(e,this.rel)??i}"
          download="${this.download??i}"
          aria-label="${t??i}"
          aria-describedby="${t&&r?`new-tab-cue`:i}"
          >${n}${r?m`<span id="new-tab-cue" class="cp-visually-hidden"
                >${_()}</span
              >`:i}</a
        >
      `}return n}};function to(){let e=e=>Array.from(this.childNodes).some(t=>t instanceof Element?(t.getAttribute(`slot`)||null)===e:e===null&&t.nodeType===Node.TEXT_NODE&&!!t.textContent?.trim()),t=e(null)&&!Array.from(this.children).some(e=>!e.slot&&!e.classList.contains(`sr-only`)),n={label:e(null),textLabel:t,prefix:e(`prefix`),suffix:e(`suffix`)};(n.label!==this._content.label||n.textLabel!==this._content.textLabel||n.prefix!==this._content.prefix||n.suffix!==this._content.suffix)&&(this._content=n)}function no(){if(!this.isConnected)return;let e=this.isLink?this.shadowRoot?.querySelector(`a.link`)??this:this;this._accessibleName=Ga(e);let t=this._accessibleName.trim()===``;if(t&&!w(Za,this,ro).call(this)){w(Za,this,io).call(this);return}this._hasAccessibilityError=t}function ro(){return typeof this.checkVisibility==`function`?this.checkVisibility({visibilityProperty:!0}):this.getClientRects().length>0}function io(){S(eo,this)||typeof ResizeObserver>`u`||(C(eo,this,new ResizeObserver(()=>{w(Za,this,ro).call(this)&&(w(Za,this,ao).call(this),w(Za,this,no).call(this))})),S(eo,this).observe(this))}function ao(){S(eo,this)?.disconnect(),C(eo,this,null)}r([c({reflect:!0})],z.prototype,`variant`,void 0),r([c({reflect:!0,type:Boolean})],z.prototype,`inherit`,void 0),r([c({reflect:!0})],z.prototype,`size`,void 0),r([c({reflect:!0})],z.prototype,`value`,void 0),r([c({reflect:!0,type:Boolean})],z.prototype,`active`,void 0),r([c({type:Boolean,reflect:!0})],z.prototype,`toggle`,void 0),r([c({reflect:!0,type:Boolean})],z.prototype,`loading`,void 0),r([c({attribute:`focusable-when-disabled`,type:Boolean,reflect:!0})],z.prototype,`focusableWhenDisabled`,void 0),r([c({reflect:!0})],z.prototype,`flush`,void 0),r([c()],z.prototype,`align`,void 0),r([c()],z.prototype,`icon`,void 0),r([c({reflect:!0})],z.prototype,`href`,void 0),r([c()],z.prototype,`target`,void 0),r([c()],z.prototype,`rel`,void 0),r([c()],z.prototype,`download`,void 0),r([c({attribute:`icon-position`})],z.prototype,`iconPosition`,void 0),r([g(`[data-live-region]`)],z.prototype,`liveRegion`,void 0),r([p()],z.prototype,`_accessibleName`,void 0),r([p()],z.prototype,`_hasAccessibilityError`,void 0),r([p()],z.prototype,`_hostLabel`,void 0),r([p()],z.prototype,`_content`,void 0),customElements.get(`craft-button`)||customElements.define(`craft-button`,z);var oo=new WeakMap,so=new WeakMap,co=new WeakSet,lo=new WeakMap,uo=new WeakMap,fo=class extends L{static get styles(){return[...super.styles,o`
        .input-group__container {
          position: relative;
        }

        .input-group__prefix {
          position: absolute;
          inset-block: 0;
          inset-inline-start: 0;
          z-index: 1;
          border: none;
          background: none;
          pointer-events: none;
        }

        .input-group__prefix + .input-group__input ::slotted([slot='input']) {
          --_input-start-start-radius: var(
            --c-input-radius,
            var(--c-radius-sm)
          );
          --_input-end-start-radius: var(--c-input-radius, var(--c-radius-sm));
          padding-inline-start: calc(var(--c-input-spacing-inline) * 2 + 1em);
        }

        .input-group__prefix
          + .input-group__input:not(:has(+ .input-group__suffix))
          ::slotted([slot='input']) {
          --c-focus-outline-style: inherit;
          --c-focus-outline-offset: inherit;
        }

        .input-group__input {
          position: relative;
        }

        .input-search__clear {
          position: absolute;
          z-index: 1;
          inset-block: 0;
          inset-inline-end: var(--_clear-inset);
          display: flex;
          align-items: center;
        }

        :host {
          --_clear-inset: calc(
            (var(--_control-height) - var(--c-size-control-sm)) / 2
          );
        }

        :host([clearable]) .input-group__input ::slotted([slot='input']) {
          padding-inline-end: calc(
            var(--c-size-control-sm) + var(--_clear-inset) * 2
          );
        }

        .input-group__suffix {
          grid-auto-flow: column;
          padding-inline: 0;
        }

        ::slotted([slot='suffix']:not(craft-button)) {
          padding-inline: var(--c-input-spacing-inline);
        }

        :host(:not([inline-suffix])) ::slotted(craft-button[slot='suffix']) {
          margin-inline: 0;
        }
      `]}constructor(){super(),x(this,co),T(this,oo,null),T(this,so,!1),T(this,lo,e=>{e.key!==`Escape`||e.target!==this._inputNode||!w(co,this,po).call(this)||(e.preventDefault(),e.stopPropagation(),C(so,this,!0),this.clear())}),T(this,uo,e=>{e.key===`Escape`&&S(so,this)&&(e.stopPropagation(),C(so,this,!1))}),this.inputMode=`search`,this.addEventListener(`keydown`,S(lo,this),{capture:!0}),this.addEventListener(`keyup`,S(uo,this),{capture:!0})}connectedCallback(){!this.label&&!this.querySelector(`:scope > [slot="label"]`)&&(this.label=n(`Search`)),this.hasAttribute(`label-sr-only`)||(this.labelSrOnly=!0),this.placeholder||=n(`Search`),super.connectedCallback(),this._inputNode?.setAttribute(`enterkeyhint`,`search`),this._inputNode?.hasAttribute(`autocomplete`)||this._inputNode?.setAttribute(`autocomplete`,`off`),w(co,this,mo).call(this)}updated(e){super.updated(e),(e.has(`modelValue`)||e.has(`disabled`)||e.has(`readOnly`))&&w(co,this,mo).call(this)}_inputGroupInputTemplate(){return m`
      <div class="input-group__input">
        <slot name="input"></slot>
        <div class="input-search__clear">
          <slot name="search-clear"></slot>
        </div>
      </div>
    `}get slots(){return{...super.slots,prefix:()=>({template:m`<craft-icon name="search"></craft-icon>`,renderAsDirectHostChild:!0})}}clear(){this.disabled||this.readOnly||(this.modelValue=``,this._inputNode?.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this._inputNode?.focus(),this.dispatchEvent(new CustomEvent(`clear`,{bubbles:!0,composed:!0})))}};function po(){return String(this.modelValue??``)!==``}function mo(){let e=w(co,this,po).call(this)&&!this.disabled&&!this.readOnly;e&&!S(oo,this)?(C(oo,this,w(co,this,ho).call(this)),this.append(S(oo,this)),this.toggleAttribute(`clearable`,!0),this.requestUpdate()):!e&&S(oo,this)&&(S(oo,this).contains(document.activeElement)&&this._inputNode?.focus(),S(oo,this).remove(),C(oo,this,null),this.toggleAttribute(`clearable`,!1),this.requestUpdate())}function ho(){let e=document.createElement(`craft-button`);e.slot=`search-clear`,e.setAttribute(`data-search-clear`,``),e.setAttribute(`type`,`button`),e.setAttribute(`icon`,``),e.setAttribute(`size`,`small`),e.setAttribute(`variant`,`plain`),e.addEventListener(`click`,()=>this.clear());let t=document.createElement(`craft-icon`);return t.setAttribute(`name`,`xmark-large`),t.setAttribute(`label`,n(`Clear search`)),e.append(t),e.updateComplete.then(()=>{e.tabIndex=-1}),e}customElements.get(`craft-input-search`)||customElements.define(`craft-input-search`,fo);function go(e){Object.assign(e.style,{marginBlock:`calc(var(--c-spacing-sm) - var(--c-spacing-xs))`,marginInline:`0`,border:`0`,borderBlockStart:`1px solid var(--c-color-neutral-border-quiet)`})}var _o=class e extends qn{constructor(...e){super(...e),this.label=n(`Actions`),this.icon=`ellipsis`,this.disabled=!1,this.searchable=!1,this.uid=Vt(),this._generatedInvoker=null,this._generatedContent=null,this._searchContainer=null,this._searchInput=null,this._searchField=null,this._onItemClick=e=>{let t=e.currentTarget;this._isOpening?this.hide():this.opened=!1,this.actions===void 0&&this._dispatchChange(t)},this._onSearchKeydown=e=>{if(e.key===`ArrowDown`||e.key===`ArrowUp`){let t=this._getNavigableItems();t.length&&(e.preventDefault(),(e.key===`ArrowDown`?t[0]:t[t.length-1])?.focus());return}e.key===`Enter`&&e.preventDefault()},this._onOverlayShow=()=>{this.opened&&(this.searchable?this._searchInput?.focus():this._getNavigableItems()[0]?.focus())},this._onContentKeydown=e=>{if(this._searchContainer?.contains(e.target))return;let t=this._getNavigableItems(),n=e.target?.closest?.(`craft-action-item`)??null,r=n?t.indexOf(n):-1;if(e.key===`ArrowDown`||e.key===`ArrowUp`){if(!t.length)return;e.preventDefault();let n;n=e.key===`ArrowDown`?r===-1?0:(r+1)%t.length:r===-1?t.length-1:(r-1+t.length)%t.length,t[n]?.focus();return}if(e.key===`Home`||e.key===`End`){if(!t.length)return;e.preventDefault(),(e.key===`Home`?t[0]:t[t.length-1])?.focus();return}if(e.key===` `&&!this.searchable&&n?.href){e.preventDefault(),(n.shadowRoot?.querySelector(`a[href]`)??n).click();return}n&&this._redirectTypingToSearch(e)},this._onContentSlotChange=()=>{this._syncSearchInput(),this._addEventListeners()},this._onInvokerSlotChange=()=>{if(this.actions===void 0)return;let e=!!this._generatedInvoker;this._renderDataDrivenMenu(),e!==!!this._generatedInvoker&&this._overlayCtrl&&(this._overlayCtrl.updateConfig({invokerNode:this._overlayInvokerNode}),this._setupInvoker())}}_addEventListeners(){let e=this.contentNodes[0];e&&(this._bindContent(e),this._observeContent(e))}_observeContent(e){this._contentObserver?.disconnect(),this._contentObserver=new MutationObserver(()=>this._bindContent(e)),this._contentObserver.observe(e,{childList:!0,subtree:!0})}_bindContent(e){e.querySelectorAll(`craft-action-item`).forEach(e=>e.addEventListener(`click`,this._onItemClick)),e.querySelectorAll(`hr`).forEach(go)}_dispatchChange(e){this.dispatchEvent(new CustomEvent(`craft-select`,{bubbles:!0,composed:!0,detail:{item:e}}))}_setupInvoker(){let e=this.invokerNodes[0];e&&(e.setAttribute(`id`,`invoker-${this.uid}`),e.setAttribute(`aria-controls`,`content-${this.uid}`)),this._syncInvokerDisabled()}_syncInvokerDisabled(){let e=this.invokerNodes[0];e&&(this.disabled?e.setAttribute(`aria-disabled`,`true`):e.removeAttribute(`aria-disabled`))}_setupContent(){let e=this.contentNodes[0];e&&(e.setAttribute(`id`,`content-${this.uid}`),e.setAttribute(`role`,`none`)),this._wireContentKeydown()}_setupOverlayCtrl(){super._setupOverlayCtrl(),this._overlayCtrl.addEventListener(`show`,this._onOverlayShow),this._setupInvoker(),this._setupContent(),this._addEventListeners()}_teardownOverlayCtrl(){this._contentObserver?.disconnect(),this._contentObserver=void 0,this._overlayCtrl?.removeEventListener(`show`,this._onOverlayShow),super._teardownOverlayCtrl()}firstUpdated(e){super.firstUpdated(e),this.shadowRoot?.querySelector(`slot[name="invoker"]`)?.addEventListener(`slotchange`,this._onInvokerSlotChange),this.shadowRoot?.querySelector(`slot[name="content"]`)?.addEventListener(`slotchange`,this._onContentSlotChange),this._syncSearchInput()}willUpdate(e){if(super.willUpdate(e),e.has(`opened`)&&this.opened&&this.disabled){this.opened=!1;return}if(this.actions===void 0){this._removeGeneratedNodes();return}let t=e.has(`opened`)&&this.opened&&this._hasActionsProvider();(e.has(`actions`)||e.has(`label`)||e.has(`icon`)||e.has(`disabled`)||t||!this._generatedContent)&&this._renderDataDrivenMenu()}updated(e){super.updated(e),e.has(`disabled`)&&this._syncInvokerDisabled(),e.has(`opened`)&&!this.opened&&e.get(`opened`)&&this._resetSearchFilter(),e.has(`searchable`)&&this._syncSearchInput(),this.actions!==void 0&&(e.has(`opened`)&&this.opened&&this._hasActionsProvider()&&(this._setupContent(),this._addEventListeners()),(e.has(`actions`)||e.has(`label`)||e.has(`icon`))&&this._rewireGeneratedMenu())}_rewireGeneratedMenu(){this._overlayCtrl&&this._overlayCtrl.updateConfig({contentNode:this._overlayContentNode,invokerNode:this._overlayInvokerNode}),this._setupInvoker(),this._setupContent(),this._addEventListeners()}_hasSlottedInvoker(){return Array.from(this.children).some(e=>e.slot===`invoker`&&e!==this._generatedInvoker)}_removeGeneratedNodes(){this._generatedInvoker?.isConnected&&this._generatedInvoker.remove(),this._generatedContent?.isConnected&&this._generatedContent.remove(),this._generatedInvoker=null,this._generatedContent=null}_normalizeActions(e){return e.map(e=>e.type===`hr`||e.type===`display`?e:e.type===`group`?{...e,items:this._normalizeActions(e.items)}:`href`in e&&e.href?{...e,type:`link`,label:e.label??``}:{...e,type:e.type??`button`,label:e.label??``})}_sortActions(e){return e.map(e=>e.type===`group`?{...e,items:this._sortActions(e.items)}:e).sort((e,t)=>(`variant`in e&&e.variant===ae.Danger)-+(`variant`in t&&t.variant===ae.Danger))}_applyItemProps(e,t){let n=new Set([`type`,`label`,`onClick`,`href`,`keywords`,`attributes`]);for(let[r,i]of Object.entries(t))if(!(n.has(r)||i===void 0))try{e[r]=i}catch{}}_renderItem(e){if(e.type===`group`){let t=document.createDocumentFragment();if(e.heading){let n=document.createElement(`div`);n.className=`action-menu__heading`,n.textContent=e.heading,n.setAttribute(`role`,`presentation`),Object.assign(n.style,{paddingBlock:`var(--c-spacing-xs)`,paddingInline:`calc(var(--c-spacing-sm) * 2 + 1px) var(--c-spacing-md)`,fontSize:`var(--c-text-sm)`,fontWeight:`bold`}),t.appendChild(n)}for(let n of e.items){let e=this._renderItem(n);e&&t.appendChild(e)}return t}if(e.type===`hr`){let e=document.createElement(`hr`);return e.className=`action-menu__separator`,go(e),e}if(e.type===`display`)return typeof e.node==`function`?e.node():e.node;let t=document.createElement(`craft-action-item`);if(e.type===`link`&&(t.href=e.href),this._applyItemProps(t,e),e.keywords&&t.setAttribute(`data-keywords`,e.keywords),e.label&&(t.textContent=e.label),typeof e.onClick==`function`){let n=e.onClick;t.addEventListener(`click`,e=>n(e))}return t.addEventListener(`click`,()=>this._dispatchChange(e)),t}_resolveActions(){return typeof this.actions==`function`?this.actions():this.actions??[]}_hasActionsProvider(){return typeof this.actions==`function`}_renderDataDrivenMenu(){let e=this._sortActions(this._normalizeActions(this._resolveActions()));if(this._hasSlottedInvoker())this._generatedInvoker?.isConnected&&this._generatedInvoker.remove(),this._generatedInvoker=null;else{if(!this._generatedInvoker){let e=document.createElement(`craft-button`);e.setAttribute(`slot`,`invoker`),e.setAttribute(`type`,`button`),e.setAttribute(`icon`,``),e.setAttribute(`size`,`small`),e.setAttribute(`inherit`,`true`),e.setAttribute(`variant`,`plain`),this._generatedInvoker=e,this.appendChild(e)}this._generatedInvoker.disabled=this.disabled,this._generatedInvoker.toggleAttribute(`disabled`,this.disabled),s(m`<craft-icon
          name="${this.icon}"
          label="${this.label}"
        ></craft-icon>`,this._generatedInvoker)}if(!this._generatedContent){let e=document.createElement(`div`);e.setAttribute(`slot`,`content`),this._generatedContent=e,this.appendChild(e)}let t=this._generatedContent;t.replaceChildren();for(let n of e){let e=this._renderItem(n);e&&t.appendChild(e)}let n=!1;for(let e of t.children)e.classList.contains(`action-menu__heading`)?e.style.marginBlockStart=n?`var(--c-spacing-md)`:``:e.tagName===`CRAFT-ACTION-ITEM`&&(n=!0);this._syncSearchInput()}_getContentNode(){return this._generatedContent?this._generatedContent:this._cachedOverlayContentNode?this._cachedOverlayContentNode:Array.from(this.children).find(e=>e.slot===`content`)??null}_syncSearchInput(){let e=this._getContentNode();if(this._wireContentKeydown(),!this.searchable||!e){this._searchContainer?.isConnected&&this._searchContainer.remove(),e&&this._clearFilterAttributes(e);return}this._searchContainer||=this._buildSearchContainer(),e.firstElementChild!==this._searchContainer&&e.prepend(this._searchContainer)}_buildSearchContainer(){let e=document.createElement(`div`);e.className=`action-menu__search`;let t=document.createElement(`style`);t.textContent=`
      craft-action-menu [data-search-hidden] {
        display: none !important;
      }
      craft-action-menu .action-menu__search {
        padding: var(--c-spacing-sm);
      }
      craft-action-menu .action-menu__search input::placeholder {
        color: var(--c-form-control-placeholder);
        opacity: 1;
      }
    `,e.appendChild(t);let r=document.createElement(`input`);r.setAttribute(`aria-label`,n(`Search`)),r.addEventListener(`input`,()=>{this._applySearchFilter(r.value)}),r.addEventListener(`keydown`,this._onSearchKeydown);let i=document.createElement(`craft-input-search`);return i.setAttribute(`size`,`small`),r.slot=`input`,i.append(r),e.appendChild(i),this._searchInput=r,this._searchField=i,e}_getFilterableItems(t){return Array.from(t.querySelectorAll(e._filterableItemsSelector)).filter(n=>{if(this._searchContainer?.contains(n))return!1;let r=n.parentElement?.closest(e._filterableItemsSelector);return!r||!t.contains(r)})}_itemMatchesSearch(e,t){return`${e.textContent??``} ${e.getAttribute(`data-keywords`)??``}`.toLowerCase().includes(t)}_applySearchFilter(e){let t=this._getContentNode();if(!t)return;let n=e.trim().toLowerCase();for(let e of this._getFilterableItems(t))!n||this._itemMatchesSearch(e,n)?e.removeAttribute(`data-search-hidden`):e.setAttribute(`data-search-hidden`,``)}_clearFilterAttributes(e){e.querySelectorAll(`[data-search-hidden]`).forEach(e=>e.removeAttribute(`data-search-hidden`))}_resetSearchFilter(){this._searchField&&(this._searchField.modelValue=``);let e=this._getContentNode();e&&this._clearFilterAttributes(e)}_getNavigableItems(){let e=this._getContentNode();return e?Array.from(e.querySelectorAll(`craft-action-item`)).filter(e=>!e.hasAttribute(`hidden`)&&!e.hasAttribute(`data-search-hidden`)):[]}_wireContentKeydown(){this._getContentNode()?.addEventListener(`keydown`,this._onContentKeydown)}_redirectTypingToSearch(e){if(!this.searchable||!this._searchInput||!(e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey)&&e.key!==`Backspace`)return;e.preventDefault();let t=this._searchInput;t.focus(),t.value=e.key===`Backspace`?t.value.slice(0,-1):t.value+e.key,this._applySearchFilter(t.value)}};_o.styles=[...qn.styles,o`
      ::slotted([slot='content']) {
        display: grid;
        /* Keep items within the popover, however wide their content. */
        grid-template-columns: minmax(0, 1fr);
        gap: var(--c-spacing-xs);
        padding: var(--c-spacing-sm);
        font-size: var(--c-text-base);
        font-weight: 400;
      }

      :host([disabled]) ::slotted([slot='invoker']) {
        cursor: not-allowed;
        opacity: 0.5;
        pointer-events: none;
      }
    `],_o._filterableItemsSelector=`craft-action-item, li, button`,r([c({attribute:!1})],_o.prototype,`actions`,void 0),r([c()],_o.prototype,`label`,void 0),r([c()],_o.prototype,`icon`,void 0),r([c({type:Boolean,reflect:!0})],_o.prototype,`disabled`,void 0),r([c({type:Boolean,reflect:!0})],_o.prototype,`searchable`,void 0),r([ee({slot:`invoker`})],_o.prototype,`invokerNodes`,void 0),r([ee({slot:`content`})],_o.prototype,`contentNodes`,void 0),customElements.get(`craft-action-menu`)||customElements.define(`craft-action-menu`,_o);var vo=o`
  :host {
    --c-avatar-color-start: red;
    --c-avatar-color-end: blue;

    --size: calc(30rem / 16);
    display: contents;
  }

  .avatar {
    display: inline-flex;
    width: var(--size);
    aspect-ratio: 1;
    color: var(--c-avatar-color-text, var(--c-text-default));
    background-color: var(--c-surface-raised);
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
`,yo=class extends d{constructor(...e){super(...e),this.label=null,this._gradientId=null}connectedCallback(){super.connectedCallback(),this._gradientId=`avatar-gradient-${Math.random().toString(36).slice(2,8)}`}text(){return this.label?this.label.split(` `).map(e=>e.charAt(0).toUpperCase()).join(``):`?`}render(){return m`
      <span class="avatar">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          role="${this.label?`img`:i}"
          aria-hidden="${this.label?i:`true`}"
        >
          ${this.label?m`<title>${this.label}</title>`:i}
          <defs>
            <linearGradient
              id="${this._gradientId}"
              x1="0"
              y1="1"
              x2="1"
              y2="0"
            >
              <stop
                offset="0%"
                style="stop-color:var(--c-avatar-color-start)"
              ></stop>
              <stop
                offset="100%"
                style="stop-color:var(--c-avatar-color-end)"
              ></stop>
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
    `}};yo.styles=[vo],r([c()],yo.prototype,`label`,void 0),r([p()],yo.prototype,`_gradientId`,void 0),customElements.get(`craft-avatar`)||customElements.define(`craft-avatar`,yo);var bo=[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`white`,`gray`,`black`,`slate`],xo=[`white`,`gray`,`slate`,`black`],So={neutral:`slate`,accent:`blue`,info:`sky`,success:`emerald`,warning:`yellow`,danger:`red`},Co={pending:`sky`,off:`red`,suspended:`red`,expired:`red`,disabled:`gray`,inactive:`gray`,on:`teal`},wo=xo.map(e=>`[data-color='${e}']`).join(`, `);function To(e=``){return u(`:host([data-color]:not(${wo})${e})`)}var Eo=e=>e.charAt(0).toUpperCase()+e.slice(1),Do={...Object.fromEntries(bo.map(e=>[Eo(e),e])),...Object.fromEntries(Object.entries(So).map(([e,t])=>[Eo(e),t])),...Object.fromEntries(Object.entries(Co).map(([e,t])=>[Eo(e),t]))},Oo=[...bo],ko=class extends d{constructor(...e){super(...e),this.size=`md`,this.fill=`var(--c-color-fill-loud)`,this.label=null}get effectiveAppearance(){return this.appearance?this.appearance:this.fill===Do.White||this.fill===Do.Black?nr.OutlineFill:nr.Solid}getFill(){return Oo.includes(this.fill)||oe.includes(this.fill)?`var(--c-color-${this.fill}-fill-loud)`:this.fill}getSize(){switch(this.size){case`md`:return`0.6em`;case`lg`:return`1em`;default:return this.size}}render(){return m`<span
      style="--fill: ${this.getFill()}; --size: ${this.getSize()}"
      aria-label="${this.label??i}"
      role="${this.label?`img`:i}"
      class="${O({indicator:!0,[`indicator--${this.effectiveAppearance}`]:!0,"indicator--white":this.fill===Do.White,"indicator--black":this.fill===Do.Black})}"
    ></span>`}};ko.styles=[ie,o`
      :host {
        display: contents;
      }

      .indicator {
        --_fill: var(--fill, var(--c-color-fill-loud));
        --_size: var(--size, 0.5em);
        display: inline-flex;
        aspect-ratio: 1;
        width: var(--_size);
        border-radius: var(--c-radius-full);
        background: var(--_fill);
        /* Longhands, so a fill that isn't a color (a gradient, say) only
           drops the border's color rather than the whole border, and the dot
           keeps its size. */
        border-width: 1px;
        border-style: solid;
        border-color: var(--_fill);
      }

      /*
       * Appearances. Classes rather than :host([appearance]) selectors, because
       * the default depends on the fill (see effectiveAppearance), and an
       * unset appearance isn't reflected to the attribute.
       */
      .indicator--outline-fill {
        border-color: rgba(0, 0, 0, 0.5);
      }

      .indicator--outline-fill.indicator--white {
        border-color: var(--c-indicator-white-ring);
      }

      /* A dark outline would vanish against a black dot. */
      .indicator--outline-fill.indicator--black {
        border-color: var(--color-white);
      }

      .indicator--solid {
        border-color: transparent;
      }

      .indicator--outline {
        background: transparent;
        border-color: var(--_fill);
      }
    `],r([c()],ko.prototype,`size`,void 0),r([c({reflect:!0})],ko.prototype,`fill`,void 0),r([c()],ko.prototype,`label`,void 0),r([c({reflect:!0})],ko.prototype,`appearance`,void 0),customElements.get(`craft-indicator`)||customElements.define(`craft-indicator`,ko);var Ao={Small:`small`,Medium:`medium`,Large:`large`};Object.values(Ao);var jo=o`
  :host {
    display: inline-flex;
  }

  /*
   * As with chips, a blue link would clash with the fill, so links take the
   * badge's text color, and are underlined so they still stand apart from it.
   * Neutral badges keep the default link styling (a black badge's contents
   * take the dark theme's).
   */
  ${To()} {
    --c-text-link: currentColor;
    --c-link-decoration: underline;
    --c-link-decoration-hover: none;
  }

  .badge {
    display: inline-flex;
    gap: 0.3em;
    align-items: center;
    background-color: var(--c-color-fill-quiet);
    border: 1px solid var(--c-color-border-quiet);
    color: var(--c-color-on-quiet);
    border-radius: var(--c-radius-full);
    font-size: var(--c-text-sm);
  }

  .badge--small {
    font-size: var(--c-text-xs);
  }

  /*
   * Flex boxes that center what they hold, rather than blocks a line tall: in
   * a line box the indicator sits on the text baseline, which lands it a
   * fraction of a pixel above the badge's middle.
   */
  .badge__prefix,
  .badge__suffix {
    display: inline-flex;
    align-items: center;
  }

  /* A badge with a label is as tall as a small control, so it lines up with
     the buttons and inputs beside it. */
  .badge--labeled {
    /* Border included, as a control's is; the preflight's border-box doesn't
       reach into the shadow root. */
    box-sizing: border-box;
    block-size: var(--c-size-control-sm);
    padding-inline: calc(0.5em + 1px);
  }

  .badge--small.badge--labeled {
    block-size: var(--c-size-control-xs);
  }

  /*
   * Icons take --c-badge-icon-color, which the dark theme (and a black badge)
   * sets to white, so they read clearly against a neutral badge. Tinted
   * badges keep icons in their tint, and an icon with a color of its own,
   * such as an option's, keeps it.
   */
  ::slotted(craft-icon) {
    color: var(--c-badge-icon-color, currentColor);
  }

  ${To()} ::slotted(craft-icon) {
    color: inherit;
  }

  .badge__label--text {
    display: block;
    text-box: trim-both cap alphabetic;
  }
`,Mo=class extends d{constructor(...e){super(...e),this.fill=Do.Gray,this.noPrefix=!1,this.size=Ao.Medium,this.hasLabel=!1,this.hasTextLabel=!1,this.hasSuffix=!1,this.contentObserver=new MutationObserver(()=>this.readContent())}connectedCallback(){super.connectedCallback(),this.readContent(),this.contentObserver.observe(this,{childList:!0,characterData:!0,subtree:!0,attributes:!0,attributeFilter:[`slot`]})}disconnectedCallback(){super.disconnectedCallback(),this.contentObserver.disconnect()}readContent(){let e=[...this.childNodes];this.hasLabel=e.some(e=>e instanceof Element&&!e.hasAttribute(`slot`)||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``),this.hasTextLabel=this.hasLabel&&!e.some(e=>e instanceof Element&&!e.slot),this.hasSuffix=e.some(e=>e instanceof Element&&e.slot===`suffix`)}getFill(){return this.fill}willUpdate(e){e.has(`fill`)&&(this.dataset.color=this.getFill())}render(){return m`
      <span
        part="badge"
        class="${O({badge:!0,"badge--small":this.size===Ao.Small,"badge--large":this.size===Ao.Large,"badge--labeled":this.hasLabel})}"
      >
        ${this.noPrefix?i:m`<span class="badge__prefix">
              <slot name="prefix" part="prefix">
                <craft-indicator
                  part="indicator"
                  fill="${this.getFill()}"
                ></craft-indicator>
              </slot>
            </span>`}
        ${this.hasLabel?m`<slot
              class="${O({"badge__label--text":this.hasTextLabel})}"
            ></slot>`:i}
        ${this.hasSuffix?m`<span class="badge__suffix">
              <slot name="suffix" part="suffix"></slot>
            </span>`:i}
      </span>
    `}};Mo.styles=[jo],r([c({reflect:!0})],Mo.prototype,`fill`,void 0),r([c({attribute:`no-prefix`,type:Boolean})],Mo.prototype,`noPrefix`,void 0),r([c()],Mo.prototype,`size`,void 0),r([p()],Mo.prototype,`hasLabel`,void 0),r([p()],Mo.prototype,`hasTextLabel`,void 0),r([p()],Mo.prototype,`hasSuffix`,void 0),customElements.get(`craft-badge`)||customElements.define(`craft-badge`,Mo);var No=class extends d{constructor(...e){super(...e),this.rel=`noreferrer noopener`}render(){let e=b(this.href,this.target);return m`
      <slot name="prefix" part="prefix"></slot>
      ${this.href?m`<a
          part="label"
          class="label"
          href=${this.href}
          target=${e??i}
          rel=${e?this.rel:i}
          ><slot></slot>${!this.target&&e?m`<span class="cp-visually-hidden">${_()}</span>`:i}</a
        >`:m`<span part="label" class="label"><slot></slot></span>`}
      <slot name="suffix" part="suffix"></slot>
      <slot name="separator" part="separator" aria-hidden="true"></slot>
    `}};No.styles=[le,o`
      :host {
        white-space: nowrap;
        display: inline-flex;
        gap: var(--c-spacing-sm);
        align-items: center;
        color: inherit;
      }

      .label {
        display: inline-flex;
        align-items: center;
        font-weight: var(--font-weight-medium);
        color: inherit;
        text-decoration: none;
      }

      /* The current page, which <craft-breadcrumbs> marks on the last crumb. */
      :host([aria-current='page']) .label {
        font-weight: var(--font-weight-light);
      }

      a.label:hover {
        text-decoration: underline;
      }

      slot[name='suffix']::slotted(*) {
        margin-inline-start: var(--c-spacing-sm);
      }

      slot[name='separator']::slotted(*) {
        color: var(--c-text-quiet);
        margin-block: 0;
        margin-inline: var(--c-spacing-sm);
      }
    `],r([c({reflect:!0})],No.prototype,`href`,void 0),r([c()],No.prototype,`target`,void 0),r([c()],No.prototype,`rel`,void 0),customElements.get(`craft-breadcrumb-item`)||customElements.define(`craft-breadcrumb-item`,No);var Po=o`
  .breadcrumbs {
    display: flex;
    align-items: center;
    /* The host isn't the flex container, so a gap set on it (e.g. a utility
       class) is handed down to the one that is. */
    gap: inherit;
  }
`,Fo=class extends d{constructor(...e){super(...e),this.label=n(`Breadcrumbs`),this.items=[],this.visibleItems=0,this.firstRender=!0}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll(`[id]`)].forEach(e=>e.removeAttribute(`id`)),e.setAttribute(`data-default`,``),e.slot=`separator`,e}calculateBreadcrumbItemsWidth(){this.items=this.breadcrumbsElements.map((e,t)=>{let n=e.offsetWidth;return e.hasAttribute(`hidden`)&&(e.removeAttribute(`hidden`),n=e.offsetWidth,e.setAttribute(`hidden`,``)),{label:e.innerText,href:e.href,value:t.toString(),offsetWidth:n,isVisible:!0}})}async handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()===`craft-breadcrumb-item`);if(e.forEach((t,n)=>{let r=n===e.length-1,i=t.querySelector(`[slot="separator"]`);r?i?.hasAttribute(`data-default`)&&i.remove():i===null?t.append(this.getSeparator()):i.hasAttribute(`data-default`)&&i.replaceWith(this.getSeparator()),r?t.setAttribute(`aria-current`,`page`):t.removeAttribute(`aria-current`)}),this.breadcrumbsElements.length===0){this.items=[],this.visibleItems=0;return}await Promise.all(this.breadcrumbsElements.map(e=>e.updateComplete)),this.calculateBreadcrumbItemsWidth(),this.visibleItems=0,this.adjustOverflow()}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{if(this.firstRender){this.firstRender=!1;return}this.adjustOverflow()}),this.resizeObserver.observe(this)}adjustOverflow(){}disconnectedCallback(){this.resizeObserver?.unobserve(this),super.disconnectedCallback()}render(){return m`
      <nav class="breadcrumbs" aria-label="${this.label}">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator"><span class="separator">/</span></slot>
      </span>
    `}};Fo.styles=[Po],r([g(`slot`)],Fo.prototype,`defaultSlot`,void 0),r([g(`slot[name="separator"]`)],Fo.prototype,`separatorSlot`,void 0),r([ee({selector:`craft-breadcrumb-item`})],Fo.prototype,`breadcrumbsElements`,void 0),r([c()],Fo.prototype,`label`,void 0),r([p()],Fo.prototype,`items`,void 0),r([p()],Fo.prototype,`visibleItems`,void 0),customElements.get(`craft-breadcrumbs`)||customElements.define(`craft-breadcrumbs`,Fo);var Io=o`
  :host {
    --_button-radius: var(--c-button-radius, var(--c-form-control-radius));
    display: flex;
  }

  ::slotted(*) {
    --c-button-radius-start-start: 0;
    --c-button-radius-start-end: 0;
    --c-button-radius-end-start: 0;
    --c-button-radius-end-end: 0;
  }

  ::slotted(:not([data-button-group-start])) {
    --c-button-group-border-start-color: var(--c-color-neutral-border-quiet);
    --c-button-group-overlap: calc(var(--c-button-border-width, 1px) * -1);
    margin-inline-start: var(--c-button-group-overlap);
  }

  ::slotted(:not([data-button-group-end])) {
    --c-button-group-border-end-color: var(--c-color-neutral-border-quiet);
  }

  ::slotted([data-button-group-divider]) {
    --c-button-divider-start-color: color-mix(
      in srgb,
      currentColor 25%,
      transparent
    );
  }

  ::slotted([data-button-group-divider-end]) {
    --c-button-divider-end-color: color-mix(
      in srgb,
      currentColor 25%,
      transparent
    );
  }

  ::slotted(:hover),
  ::slotted([active]),
  ::slotted([aria-pressed='true']) {
    z-index: 1;
  }

  ::slotted(:focus-visible) {
    z-index: 2;
  }

  ::slotted([data-button-group-start]) {
    --c-button-radius-start-start: var(--_button-radius);
    --c-button-radius-end-start: var(--_button-radius);
  }

  ::slotted([data-button-group-end]) {
    --c-button-radius-start-end: var(--_button-radius);
    --c-button-radius-end-end: var(--_button-radius);
  }

  /* Picking the selected option again does nothing. An owner may manage the
     selection itself, so that's any pressed button but an independent toggle. */
  :host(:not([multiple])) ::slotted([aria-pressed='true']:not([toggle])) {
    cursor: default;
  }

  :host([name]:not([multiple])) ::slotted([aria-pressed='true']) {
    background-color: var(--c-color-fill-loud);
    color: var(--c-color-on-loud);
    border-color: var(--c-color-border-loud);
    box-shadow: none;
  }
`,Lo=class extends d{constructor(){super(),this.multiple=!1,this._childObserver=new MutationObserver(()=>this._markEnds()),this._selectionObserver=new MutationObserver(e=>{if(!(!this.name||this.multiple))for(let{target:t}of e)t instanceof Element&&t.localName===`craft-button`&&!t.hasAttribute(`active`)&&t.getAttribute(`value`)===this.value&&t.setAttribute(`active`,``)}),this._ownsRole=!1,this._formDisabledButtons=new Set,this._formDisabled=!1,this._handleClick=e=>{let t=e.composedPath().find(e=>e instanceof Element&&e.hasAttribute(`value`)&&e!==this);if(!t)return;if(this.multiple){t.toggleAttribute(`active`),this._syncChildren(),this.dispatchEvent(new CustomEvent(`change`,{bubbles:!0,composed:!0,detail:{values:this._selectedValues()}}));return}let n=t.getAttribute(`value`)??``;n!==this.value&&(this.value=n,this._syncChildren(),this.dispatchEvent(new CustomEvent(`change`,{bubbles:!0,composed:!0,detail:{value:n}})))},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this._childObserver.observe(this,{childList:!0,attributes:!0,attributeFilter:[`hidden`,`style`,`class`,`active`,`aria-pressed`],subtree:!0}),this._selectionObserver.observe(this,{attributes:!0,attributeFilter:[`active`],subtree:!0})}firstUpdated(e){super.firstUpdated(e),this.name&&this._setupSelectionMode(),this._markEnds()}updated(e){(e.has(`name`)||e.has(`multiple`))&&(this.name?this._setupSelectionMode():this._teardownSelectionMode()),(e.has(`value`)||e.has(`multiple`))&&this.name&&this._syncChildren()}disconnectedCallback(){super.disconnectedCallback(),this._childObserver.disconnect(),this._selectionObserver.disconnect()}_markEnds(){let e=Array.from(this.children).filter(e=>this._isVisible(e)),t=e[0],n=e[e.length-1];for(let r of Array.from(this.children)){let i=e.indexOf(r),a=i>0?e[i-1]:void 0,o=i>=0?e[i+1]:void 0;r.toggleAttribute(`data-button-group-start`,r===t),r.toggleAttribute(`data-button-group-end`,r===n),r.toggleAttribute(`data-button-group-divider`,a!==void 0&&!this._isSelected(r)&&!this._isSelected(a)),r.toggleAttribute(`data-button-group-divider-end`,o!==void 0&&!this._isSelected(r)&&!this._isSelected(o))}}_isSelected(e){return e.hasAttribute(`active`)||e.getAttribute(`aria-pressed`)===`true`}_isVisible(e){if(e instanceof HTMLTemplateElement||e instanceof HTMLScriptElement||e instanceof HTMLStyleElement||e instanceof HTMLInputElement&&e.type===`hidden`||e instanceof HTMLElement&&e.hidden)return!1;let t=getComputedStyle(e).display;return t===`none`?!1:t!==`contents`||Array.from(e.children).some(e=>this._isVisible(e))}_setupSelectionMode(){this.hasAttribute(`role`)||(this.setAttribute(`role`,`group`),this._ownsRole=!0),this.removeEventListener(`click`,this._handleClick),this.addEventListener(`click`,this._handleClick),this._syncChildren(),this._defaultSelection??={value:this.value,active:this._selectedValues()}}formResetCallback(){if(!this.name||!this._defaultSelection)return;let{value:e,active:t}=this._defaultSelection;this.querySelectorAll(`craft-button`).forEach(e=>{e.toggleAttribute(`active`,this.multiple&&t.includes(e.getAttribute(`value`)??``))}),this.multiple||(this.value=e),this._syncChildren()}formDisabledCallback(e){this._formDisabled=e,this._applyFormDisabled()}_applyFormDisabled(){if(!this._formDisabled){this._formDisabledButtons.forEach(e=>e.removeAttribute(`disabled`)),this._formDisabledButtons.clear();return}this.querySelectorAll(`craft-button:not([disabled])`).forEach(e=>{e.setAttribute(`disabled`,``),this._formDisabledButtons.add(e)})}_teardownSelectionMode(){this._ownsRole&&=(this.removeAttribute(`role`),!1),this.removeEventListener(`click`,this._handleClick)}_adoptSlottedValue(){if(this.multiple||this.value!==void 0)return;let e=this.querySelector(`craft-button[active]`)?.getAttribute(`value`);e!=null&&(this.value=e,this._defaultSelection?.value===void 0&&(this._defaultSelection={value:e,active:[e]}))}_syncChildren(){if(this._adoptSlottedValue(),this.querySelectorAll(`craft-button`).forEach(e=>{e.getAttribute(`type`)!==`button`&&e.setAttribute(`type`,`button`);let t=this.multiple?e.hasAttribute(`active`):e.getAttribute(`value`)===this.value;this.multiple||e.toggleAttribute(`active`,t),e.setAttribute(`aria-pressed`,String(t))}),!this.multiple){this._internals.setFormValue(this.value??null);return}let e=new FormData;e.append(this.name,``),this._selectedValues().forEach(t=>{e.append(`${this.name}[]`,t)}),this._internals.setFormValue(e)}_selectedValues(){return Array.from(this.querySelectorAll(`craft-button[active]`),e=>e.getAttribute(`value`)??``)}render(){return m`<slot @slotchange=${this._onSlotChange}></slot>`}_onSlotChange(){this.name&&this._syncChildren(),this._applyFormDisabled(),this._markEnds()}};Lo.styles=[Io],Lo.formAssociated=!0,r([c({reflect:!0})],Lo.prototype,`name`,void 0),r([c({reflect:!0})],Lo.prototype,`value`,void 0),r([c({reflect:!0,type:Boolean})],Lo.prototype,`multiple`,void 0),customElements.get(`craft-button-group`)||customElements.define(`craft-button-group`,Lo);var Ro={dark:.9,light:.85},zo={dark:.6,light:.52},Bo=.65,Vo=.8;function Ho(e){let t=e.flat().filter(e=>e!==null);return t.length?Math.min(...t.map(([e])=>e))>=.25?`light`:`dark`:null}function Uo(e,t){let n=Array.isArray(e)?e:[],r=n.length&&Ho(n.slice(0,1))||`dark`,i=n.length&&Ho(n.slice(-1))||`dark`;return{header:t?{theme:r,treatment:`bar`,opacity:zo[r]}:{theme:r,treatment:`backed`,opacity:Bo},body:{theme:i,opacity:zo[i]}}}var Wo=o`
  :host {
    display: block;
  }

  /* On a tinted card links take the card's text color, and are underlined so
     they still stand apart from it. Neutral cards keep the default link
     styling (black's contents take the dark theme's). */
  ${To()} {
    --c-text-link: currentColor;
    --c-link-decoration: underline;
    --c-link-decoration-hover: none;
  }

  /* What's in a tinted card takes the card's color rather than gray, as its
     body does: neutral controls and hairlines, the selected tab's indicator,
     form control and checkbox borders, and UI text. */
  ${To()} ::slotted(*) {
    --c-color-neutral-fill-quiet: var(--_colorable-fill-quiet);
    --c-color-neutral-fill-normal: var(--_colorable-fill-normal);
    --c-color-neutral-fill-loud: var(--_colorable-fill-loud);
    --c-color-neutral-border-quiet: var(--_colorable-border-quiet);
    --c-color-neutral-border-normal: var(--_colorable-border-normal);
    --c-color-neutral-border-loud: var(--_colorable-border-loud);
    --c-color-neutral-on-quiet: var(--_colorable-on-quiet);
    --c-color-neutral-on-normal: var(--_colorable-on-normal);
    --c-color-neutral-on-loud: var(--_colorable-on-loud);
    --c-tab-border-active: var(--_colorable-on-quiet);
    --c-form-control-border-color: var(--_colorable-border-normal);
    --c-text-default: var(--_colorable-on-quiet);
    --c-text-quiet: color-mix(
      in oklab,
      var(--_colorable-on-quiet) 75%,
      var(--_colorable-fill-quiet)
    );
  }

  /* A neutral card re-resolves the tokens a tinted card recolors (see
     tokens.css). The selected tab's indicator has no token of its own to go
     back to, so it's cleared, leaving tabs their default. */
  :host(:is([data-color='white'], [data-color='gray'], [data-color='slate'])) {
    --c-tab-border-active: initial;
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
      --c-checkbox-border-color: var(--c-color-on-loud);
      /* Plain controls here hover over the quiet fill, which would be a light
         patch under the header's light text. */
      --c-color-fill-quiet: var(--c-color-fill-loud);
      --c-color-border-quiet: var(--c-color-border-loud);
      --c-color-on-quiet: var(--c-color-on-loud);
    }
  }

  /* A checked header checkbox is filled with the header's text color, with
     the mark cut out in its fill, rather than the accent color, which can
     clash with the card's color or blend into it. */
  :host([data-color]:not([data-color='white'])) .card {
    .card__header,
    .card__footer {
      --c-checkbox-checked-fill: var(--c-color-on-quiet);
      --c-checkbox-checked-mark: var(--c-color-fill-quiet);
    }
  }

  :host([data-color]:not([data-color='white'])[active]) .card,
  :host(:not([data-color])[active]) .card {
    .card__header,
    .card__footer {
      --c-checkbox-checked-fill: var(--c-color-on-loud);
      --c-checkbox-checked-mark: var(--c-color-fill-loud);
    }
  }

  .card {
    color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
    background-color: color-mix(
      var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)),
      transparent 70%
    );
    border: var(--c-card-border-width, 1px) solid
      var(--c-color-border-quiet, var(--c-color-neutral-border-quiet));
    border-radius: var(--c-card-radius, var(--c-radius-md));
    box-shadow: var(--c-card-shadow, var(--c-shadow-sm));
    position: relative;
    box-sizing: border-box;
    height: 100%;
    overflow: clip;
  }

  /* Without a color, a card has no fill of its own: its border and text come
     from the colors around it, so in a colored card or block it takes that
     color, as what's in it does, and elsewhere the neutral ones. */
  :host(:not([data-color]):not([active])) .card {
    color: var(--c-text-default);
    background-color: transparent;
  }

  :host(:not([data-color]):not([active])) .card__header,
  :host(:not([data-color]):not([active])) .card__footer {
    background-color: transparent;
  }

  :host(:not([data-color])[active]) .card {
    --c-color-fill-loud: var(--c-card-fill-selected);
    --c-color-border-loud: var(--c-card-border-selected);
    --c-color-on-loud: var(--c-card-text-selected);
  }

  :host([data-color='white']) .card {
    --c-color-fill-quiet: var(--c-surface-white);
    --c-color-fill-loud: var(--c-surface-white);
    --c-color-border-quiet: var(--c-border-raised);
    --c-color-border-loud: var(--c-border-raised-selected);
    --c-color-on-quiet: var(--c-text-default);
    --c-color-on-loud: var(--c-text-default);
    box-shadow: var(--c-card-shadow, var(--c-shadow-xs));
  }

  /* Black's quiet fill is dark under light text, so the translucent body would
     let a light page through and wash the text out. It fills the whole card
     instead, selected or not. */
  :host([data-color='black']) .card {
    /* Light lines against the dark fill, in either theme. Black's own quiet
       border is barely lighter than the fill, so it all but disappears. */
    --c-color-border-quiet: color-mix(
      in srgb,
      var(--c-color-black-on-quiet),
      transparent 80%
    );
    background-color: var(--c-color-fill-quiet);
  }

  /* Black's loud fill is the same as its quiet one, so with the body filled
     too, selection shows in the border, as a white card's does. */
  :host([data-color='black'][active]) .card {
    border-color: var(--c-color-accent-border-normal);
  }

  /* White fills the whole card, not just the header over a translucent body. */
  :host([data-color='white']:not([active])) .card {
    background-color: var(--c-color-fill-quiet);
  }

  :host([data-color='white']:not([active])) .card__header,
  :host([data-color='white']:not([active])) .card__footer {
    background-color: transparent;
  }

  :host([data-color='white']) .card .card__header,
  :host([data-color='white']) .card .card__footer {
    border-color: var(--c-table-border-color);
  }

  :host([data-color='white'][active]) .card {
    background-color: var(--c-color-accent-fill-quiet);
    border-color: var(--c-color-accent-border-normal);
  }

  :host([data-color='white'][active]) .card .card__header,
  :host([data-color='white'][active]) .card .card__footer {
    background-color: transparent;
    border-color: var(--c-color-accent-border-quiet);
  }

  /* Checkboxes match the header's other controls, which take its text color. */
  .card__header,
  .card__footer {
    --c-checkbox-border-color: var(
      --c-color-on-quiet,
      var(--c-color-neutral-on-quiet)
    );
  }

  .card__header,
  .card__footer {
    font-size: 0.875em;
    padding-block: var(--c-card-padding-block, var(--c-spacing-sm));
    padding-inline: var(--c-card-padding-inline, var(--c-spacing-md));
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

  /* Collapsed: only the header is left, so it takes the whole card's shape —
     otherwise its bottom border hangs under nothing and its corners stay square. */
  :host([collapsed]) .card-body,
  :host([collapsed]) .card__footer {
    display: none;
  }

  /* With the card's own top and bottom borders, a header bar's height. */
  :host([collapsed]) .card__header {
    min-height: var(
      --c-card-header-min-height,
      calc(var(--c-size-header) - var(--c-card-border-width, 1px) * 2)
    );
    border-block-end-width: 0;
  }

  .card__header {
    /* Room for a small button, like other header bars, so a header is the
       same height with or without actions. With the card's top border and the
       header's own bottom border, it's a header bar's height. */
    --_header-height: calc(
      var(--c-size-header) - var(--c-card-border-width, 1px)
    );
    min-height: var(--c-card-header-min-height, var(--_header-height));
    padding-block: calc(
      (var(--_header-height) - 1px - var(--c-size-control-sm)) / 2
    );
    border-block-end-width: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }

  /* Without a label, a header is just its controls, floating over the card, as
     a cover card's are. Its border stays, transparent, so nothing moves. In a
     selected card its controls match the body, rather than a selected bar. */
  :host .card.card--bare-header .card__header.card__header {
    background-color: transparent;
    border-color: transparent;
  }

  :host([active]) .card.card--bare-header .card__header.card__header {
    color: inherit;
    --c-color-fill-quiet: inherit;
    --c-color-border-quiet: inherit;
    --c-color-on-quiet: inherit;
    --c-checkbox-border-color: var(
      --c-color-on-quiet,
      var(--c-color-neutral-on-quiet)
    );
    --c-checkbox-checked-fill: initial;
    --c-checkbox-checked-mark: initial;
  }

  :host([data-color]:not([data-color='white'])[active])
    .card.card--bare-header
    .card__header.card__header {
    --c-checkbox-checked-fill: var(--c-color-on-quiet);
    --c-checkbox-checked-mark: var(--c-color-fill-quiet);
  }

  .card__label-text,
  .card__label::slotted(:is(h1, h2, h3, h4, h5, h6, label)) {
    text-box: trim-both cap alphabetic;
  }

  .card__header__suffix {
    display: flex;
    align-items: center;
    gap: var(--c-spacing-md);
  }

  .card__actions {
    display: flex;
    gap: var(--c-spacing-sm);
  }

  /* The body matches the CP's container padding, and falls back to the same
     value outside the CP, where nothing defines it. */
  .card-body {
    --_body-padding-inline: var(
      --c-card-padding-inline,
      var(--cp-container-padding, var(--c-spacing-lg))
    );
    --_body-padding-block: var(
      --c-card-padding-block,
      var(--cp-container-padding, var(--c-spacing-lg))
    );
    gap: var(--c-spacing-md);
    padding-inline: var(--_body-padding-inline);
    padding-block: var(--_body-padding-block);
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

  /* The thumbnail sits closer to the card's edges than the text does. It's
     shifted rather than given inline margins, so it keeps its column's width. */
  .card-body__thumb {
    --_thumb-inset: var(--c-spacing-md);
    --_thumb-shift: calc(var(--_body-padding-inline) - var(--_thumb-inset));
    /* Fit within the thumbnail column, at the image's own proportions. */
    --c-thumbnail-size: calc(120rem / 16);
    --c-thumbnail-height: auto;
    --c-thumbnail-image-radius: var(--c-radius-md);
    position: relative;
    margin-block: calc(var(--_thumb-inset) - var(--_body-padding-block));
  }

  .card-body--thumb-start .card-body__thumb {
    inset-inline-start: calc(var(--_thumb-shift) * -1);
  }

  .card-body--thumb-end .card-body__thumb {
    inset-inline-start: var(--_thumb-shift);
  }

  /* Capped, as a transformed image can round a pixel past the column. */
  slot[name='thumbnail']::slotted(*) {
    max-block-size: calc(120rem / 16);
    border-radius: var(--c-radius-md);
    overflow: clip;
  }

  .card-body__main {
    grid-area: main;
  }

  /* Classes are repeated to outrank the color and selection rules above. */
  :host .card.card--cover.card--cover {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto 1fr auto;
    color: var(--_body-ink);
    background-color: var(--c-color-neutral-fill-quiet);
    border: 0;
    isolation: isolate;
  }

  /* The header, body and footer reach the card's edges, under its border, so
     their fills follow its rounded corners. Their content keeps a normal
     card's distance from the edge. */
  .card--cover {
    --_cover-edge: var(--c-card-border-width, 1px);
  }

  /* Makes the card at least 4:3, and lets it grow taller when there's more
     content than that fits. An aspect ratio on the card itself wouldn't, as
     the card clips its overflow. It spans the whole card, under the border. */
  .card--cover::before {
    content: '';
    grid-area: 1 / 1 / -1 / -1;
    aspect-ratio: 4 / 3;
    pointer-events: none;
  }

  /* Rounded themselves, rather than left to the card's clip, which browsers
     don't always apply to a layer with a backdrop filter, such as a header
     bar, or to what's under it. */
  .card--cover .card__header {
    grid-area: 1 / 1;
    border-start-start-radius: var(--c-card-radius, var(--c-radius-md));
    border-start-end-radius: var(--c-card-radius, var(--c-radius-md));
    min-height: calc(
      var(--c-card-header-min-height, var(--_header-height)) +
        var(--_cover-edge)
    );
    padding-block-start: calc(
      (var(--_header-height) - 1px - var(--c-size-control-sm)) / 2 +
        var(--_cover-edge)
    );
    padding-inline: calc(
      var(--c-card-padding-inline, var(--c-spacing-md)) + var(--_cover-edge)
    );
  }

  .card--cover .card-body {
    grid-area: 2 / 1;
    align-self: end;
  }

  .card--cover .card__footer {
    grid-area: 3 / 1;
    padding-inline: calc(
      var(--c-card-padding-inline, var(--c-spacing-md)) + var(--_cover-edge)
    );
    padding-block-end: calc(
      var(--c-card-padding-block, var(--c-spacing-sm)) + var(--_cover-edge)
    );
  }

  .card__cover {
    position: absolute;
    inset: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  /* In the card's color, as the page's theme has it, like a normal card's
     border. That's the only place the color shows: what's laid over the image
     takes the image's theme. */
  .card--cover::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    border-radius: inherit;
    box-shadow: inset 0 0 0 var(--c-card-border-width, 1px)
      var(--c-color-border-quiet, var(--c-color-neutral-border-quiet));
    pointer-events: none;
  }

  :host([active]) .card.card--cover.card--cover {
    box-shadow: 0 0 0 2px var(--c-color-accent-border-normal);
  }

  :host([active]) .card--cover::after {
    box-shadow: inset 0 0 0 var(--c-card-border-width, 1px)
      var(--c-color-accent-border-normal);
  }

  :host .card.card--cover .card__header.card__header {
    --_cover-ink: var(--_header-ink);
    --_cover-solid: var(--_header-solid);
    --_cover-backing: var(--_header-backing);
    --_cover-backing-hover: var(--_header-backing-hover);
    --_cover-ink-solid: var(--_header-ink-solid);
    color: var(--_header-ink);
    background-color: transparent;
    border-color: transparent;
  }

  :host .card.card--cover-bar .card__header.card__header {
    background-color: var(--_header-fill);
    backdrop-filter: blur(var(--blur-md, 12px));
    border-color: var(--_header-rule);
  }

  :host .card--cover .card-body.card-body {
    --_cover-ink: var(--_body-ink);
    --_cover-solid: var(--_body-solid);
    --_cover-ink-solid: var(--_body-ink-solid);
    --_fade: 4.5rem;
    /* Positioned, without a z-index, so its blur layer sits between the image
       and its scrim, in the card's stacking context. */
    position: relative;
    display: block;
    color: var(--_body-ink);
    padding-inline: calc(var(--_body-padding-inline) + var(--_cover-edge));
    padding-block-start: calc(var(--_body-padding-block) + var(--_fade));
    background: linear-gradient(
      to top,
      rgb(from var(--_body-solid) r g b / var(--_body-scrim))
        calc(100% - var(--_fade)),
      rgb(from var(--_body-solid) r g b / calc(var(--_body-scrim) * 0.7))
        calc(100% - var(--_fade) * 0.7),
      rgb(from var(--_body-solid) r g b / calc(var(--_body-scrim) * 0.4))
        calc(100% - var(--_fade) * 0.45),
      rgb(from var(--_body-solid) r g b / calc(var(--_body-scrim) * 0.15))
        calc(100% - var(--_fade) * 0.2),
      transparent
    );
  }

  /*
  The image blurs in very slightly under the scrim, from halfway down its fade, so
  it's crisp until just above the content, and busy detail doesn't show
  through behind it. A blurred copy faded in with a mask, rather than a blur
  that grows, but it reads the same.
  */
  :host .card--cover .card-body.card-body::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    backdrop-filter: blur(1px);
    mask-image: linear-gradient(
      to top,
      #000 calc(100% - var(--_fade)),
      transparent calc(100% - var(--_fade) * 0.5)
    );
    pointer-events: none;
  }

  :host .card--cover .card-body.card-body:last-child {
    padding-block-end: calc(var(--_body-padding-block) + var(--_cover-edge));
  }

  :host .card--cover .card-body.card-body:last-child::before {
    border-end-start-radius: var(--c-card-radius, var(--c-radius-md));
    border-end-end-radius: var(--c-card-radius, var(--c-radius-md));
  }

  :host .card.card--cover .card__footer.card__footer {
    --_cover-ink: var(--_body-ink);
    --_cover-solid: var(--_body-solid);
    --_cover-ink-solid: var(--_body-ink-solid);
    color: var(--_body-ink);
    background-color: rgb(from var(--_body-solid) r g b / var(--_body-scrim));
    border-color: var(--_body-rule);
  }

  @media (forced-colors: active) {
    :host .card.card--cover.card--cover {
      border: var(--c-card-border-width, 1px) solid CanvasText;
      --_cover-edge: 0px;
    }

    :host([active]) .card.card--cover.card--cover {
      border-color: Highlight;
    }

    :host .card.card--cover .card__header.card__header,
    :host .card--cover .card-body.card-body,
    :host .card.card--cover .card__footer.card__footer {
      background: Canvas;
    }

    :host .card--cover .card-body.card-body::before {
      display: none;
    }
  }
`,Go=e=>{if(typeof e!=`string`)return e;try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}},Ko=e=>e===`dark`?`rgb(255 255 255 / ${Ro.dark})`:`rgb(0 0 0 / ${Ro.light})`,qo=e=>e===`dark`?`#000`:`#fff`,Jo=e=>e===`dark`?`#fff`:`#000`,Yo=(e,t)=>e===`dark`?`rgb(0 0 0 / ${t})`:`rgb(255 255 255 / ${t})`,Xo=e=>e===`dark`?`rgb(255 255 255 / 20%)`:`rgb(0 0 0 / 15%)`,Zo=class extends ar(d,{customProperty:[`--c-card-padding-block`,`--c-card-padding-inline`]}){constructor(...e){super(...e),this.label=``,this.active=!1,this.collapsed=!1,this.showThumb=!0,this.thumbAlignment=`start`,this.coverSrc=``,this._coverFailed=!1,this.luminance=null,this._luminance=null,this._themed=new Set,this._lightDom=new se(this,{characterData:!0}),this._onCoverError=()=>{this._coverFailed=!0}}_hasLabel(){return!!this.label||ce(this,`label`)||Array.from(this.children).some(e=>e.slot===`header`&&!!e.querySelector(`[data-card-label]`))}_hasHeaderText(){return this._hasLabel()||ce(this,`badge`)}_hasHeaderContent(){let e=e=>e.tagName===`DIV`||e.tagName===`SPAN`;return!!this.label||Array.from(this.children).some(t=>[`header`,`label`,`badge`,`actions`].includes(t.slot)&&(!!t.textContent?.trim()||!e(t)||Array.from(t.querySelectorAll(`*`)).some(t=>!e(t))))}_cover(){return this.coverSrc&&!this._coverFailed?Uo(this._luminance,this._hasHeaderText()):null}willUpdate(e){super.willUpdate(e),e.has(`luminance`)&&(this._luminance=Go(this.luminance)),e.has(`coverSrc`)&&(this._coverFailed=!1)}_coverStyles(e){if(!e)return{};let{header:t,body:n}=e;return{"--_header-ink":Ko(t.theme),"--_header-ink-solid":Jo(t.theme),"--_header-solid":qo(t.theme),"--_header-fill":Yo(t.theme,t.opacity),"--_header-backing":t.treatment===`backed`?Yo(t.theme,t.opacity):void 0,"--_header-backing-hover":t.treatment===`backed`?Yo(t.theme,Vo):void 0,"--_header-rule":Xo(t.theme),"--_body-ink":Ko(n.theme),"--_body-ink-solid":Jo(n.theme),"--_body-solid":qo(n.theme),"--_body-scrim":String(n.opacity),"--_body-rule":Xo(n.theme)}}updated(){let e=this._cover(),t=new Set;if(e)for(let n of Array.from(this.children)){if(n.slot===`thumbnail`)continue;let r=n.slot===``||n.slot===`footer`;n.setAttribute(`data-theme`,r?e.body.theme:e.header.theme),n.setAttribute(`data-cover`,r?`body`:e.header.treatment),t.add(n)}for(let e of this._themed)t.has(e)||(e.removeAttribute(`data-theme`),e.removeAttribute(`data-cover`));this._themed=t}render(){let e=this._hasHeaderContent(),t=ce(this,`footer`),n=this._cover(),r=!n&&this.showThumb&&ce(this,`thumbnail`),a=!n&&e&&!this._hasLabel();return m`
      <div
        part="base"
        class="${O({card:!0,"card--has-thumbnail":r,"card--cover":!!n,"card--cover-bar":n?.header.treatment===`bar`,"card--bare-header":a})}"
        style="${cr({...this.paddingStyles,...this._coverStyles(n)})}"
      >
        ${n?m`<img
              class="card__cover"
              part="cover"
              src="${this.coverSrc}"
              alt=""
              loading="lazy"
              decoding="async"
              @error="${this._onCoverError}"
            />`:i}
        ${e?m`<div class="card__header" part="header">
              <slot name="header">
                <slot name="label" class="card__label" part="label"
                  >${this.label?m`<span class="card__label-text">${this.label}</span>`:i}</slot
                >
                <div class="card__header__suffix">
                  <slot name="badge" class="card__badge" part="badge"></slot>
                  <slot
                    name="actions"
                    class="card__actions"
                    part="actions"
                  ></slot>
                </div>
              </slot>
            </div>`:i}

        <div
          part="body"
          class="${O({"card-body":!0,"card-body--thumb-start":r&&this.thumbAlignment===`start`,"card-body--thumb-end":r&&this.thumbAlignment===`end`})}"
        >
          <div
            class="card-body__thumb"
            part="thumbnail"
            ?hidden="${!r}"
          >
            <slot name="thumbnail"></slot>
          </div>

          <div class="card-body__main">
            <slot></slot>
          </div>
        </div>

        ${t?m`<div class="card__footer" part="footer">
              <slot name="footer"></slot>
            </div>`:i}
      </div>
    `}};Zo.styles=[Wo],r([c()],Zo.prototype,`label`,void 0),r([c({type:Boolean,reflect:!0})],Zo.prototype,`active`,void 0),r([c({type:Boolean,reflect:!0})],Zo.prototype,`collapsed`,void 0),r([c({attribute:`show-thumb`,type:Boolean})],Zo.prototype,`showThumb`,void 0),r([c({attribute:`thumb-alignment`})],Zo.prototype,`thumbAlignment`,void 0),r([c({attribute:`cover-src`})],Zo.prototype,`coverSrc`,void 0),r([p()],Zo.prototype,`_coverFailed`,void 0),r([c({type:Array})],Zo.prototype,`luminance`,void 0),customElements.get(`craft-card`)||customElements.define(`craft-card`,Zo);var Qo=(e,t)=>{class n extends e{constructor(...e){super(...e),this.__ssrNameAdopted=!1}connectedCallback(){this.__adoptSlottedName(),super.connectedCallback()}willUpdate(e){this.__adoptSlottedName(),super.willUpdate(e)}__adoptSlottedName(){if(this.__ssrNameAdopted||this.name)return;let e=this.querySelector(`input[type="${t}"][name]`);e&&(this.__ssrNameAdopted=!0,this.name=e.name)}}return n},$o=class extends Ei(Ai(d)){constructor(){super(),this.multipleChoice=!0}},es=class extends Oi(ji){connectedCallback(){super.connectedCallback(),this.type=`checkbox`}},ts=class extends es{static get styles(){return[...super.styles||[],o`
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
    `}_onRequestToAddFormElement(e){e.target.hasAttribute(`role`)||e.target?.setAttribute(`role`,`listitem`),this.__addToSubCheckboxes(e.detail.element),this._setOwnCheckedState()}_onRequestToRemoveFormElement(e){e.target.getAttribute(`role`)===`listitem`&&e.target?.removeAttribute(`role`),this.__removeFromSubCheckboxes(e.detail.element)}__addToSubCheckboxes(e){e!==this&&this.contains(e)&&this.__subCheckboxes.push(e)}__removeFromSubCheckboxes(e){let t=this.__subCheckboxes.indexOf(e);t!==-1&&this.__subCheckboxes.splice(t,1)}constructor(){super(),this.indeterminate=!1,this._onRequestToAddFormElement=this._onRequestToAddFormElement.bind(this),this.__onModelValueChanged=this.__onModelValueChanged.bind(this),this.__subCheckboxes=[],this._indeterminateSubStates=[],this.mixedState=!1}connectedCallback(){super.connectedCallback(),this.addEventListener(`model-value-changed`,this.__onModelValueChanged),this.addEventListener(`form-element-register`,this._onRequestToAddFormElement)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`model-value-changed`,this.__onModelValueChanged),this.removeEventListener(`form-element-register`,this._onRequestToAddFormElement)}firstUpdated(e){super.firstUpdated(e),this._setOldState(),this.indeterminate&&this._storeIndeterminateState()}updated(e){super.updated(e),(e.has(`indeterminate`)||e.has(`checked`))&&(this._inputNode.indeterminate=this.indeterminate)}},ns=class extends pr(Qo($o,`checkbox`)){static get styles(){return[...$o.styles,o`
        ${er}

        .input-group {
          display: grid;
          gap: var(--c-spacing-sm);
        }

        ::slotted(label) {
          font-weight: bold;
        }
      `]}};customElements.get(`craft-checkbox-group`)||customElements.define(`craft-checkbox-group`,ns);var rs=e=>{class t extends e{constructor(...e){super(...e),this.__ssrStateAdopted=!1}set value(e){e===``&&!this.__ssrStateAdopted&&this.__slottedInput()?.hasAttribute(`value`)||(super.value=e)}get value(){return super.value}connectedCallback(){this.__adoptSlottedInputState(),super.connectedCallback()}_toggleChecked(e){let n=this,r=n._inputNode;if(!this.disabled){if(!(r instanceof HTMLInputElement)){Object.getPrototypeOf(t.prototype)._toggleChecked?.call(this,e);return}n._isHandlingUserInput=!0,this.checked=r.checked,n._isHandlingUserInput=!1}}willUpdate(e){this.__adoptSlottedInputState(),super.willUpdate(e)}updated(e){super.updated(e);let{_inputNode:t}=this,n=this.choiceValue;typeof n==`string`&&n!==``&&t instanceof HTMLInputElement&&t.value!==n&&(t.value=n)}__slottedInput(){return Array.from(this.children).find(e=>e instanceof HTMLInputElement&&e.slot===`input`)}__adoptSlottedInputState(){if(this.__ssrStateAdopted)return;let e=this.__slottedInput();if(!e)return;this.__ssrStateAdopted=!0,e.id&&(this._inputId=e.id),!this.name&&e.name&&(this.name=e.name);let t=e.getAttribute(`value`)??e.value;t&&(this.choiceValue=t,e.value=t),e.checked&&(this.checked=!0),e.disabled&&(this.disabled=!0)}}return t},is=new WeakSet,as=class extends rs(ts){constructor(...e){super(...e),x(this,is),this.allMode=`single-value`}updated(e){super.updated(e),(e.has(`checked`)||e.has(`allMode`))&&w(is,this,os).call(this)}static get styles(){return[...ts.styles,o`
        :host {
          display: flex;
          align-items: center;
          gap: 0 var(--c-spacing-md);
        }

        ::slotted(label) {
          font-weight: bold;
        }

        ::slotted(*) {
          padding-inline-start: 0;
        }
      `]}};function os(){let e=this.allMode===`single-value`&&this.checked;for(let t of this._subCheckboxes??[]){let n=t.querySelector(`:scope > input[slot="input"]`);n&&(e?n.name&&(n.dataset.governedName=n.name,n.removeAttribute(`name`)):n.dataset.governedName&&(n.name=n.dataset.governedName,delete n.dataset.governedName))}}r([c({reflect:!0,attribute:`all-mode`})],as.prototype,`allMode`,void 0),customElements.get(`craft-checkbox-indeterminate`)||customElements.define(`craft-checkbox-indeterminate`,as);var ss=class extends rs(es){constructor(...e){super(...e),this.__inputPatched=!1,this.indeterminate=!1}connectedCallback(){super.connectedCallback(),this.__patchSlottedInputProps()}updated(e){super.updated(e),this.__patchSlottedInputProps();let t=this._inputNode;t&&(t.indeterminate=this.indeterminate)}__patchSlottedInputProps(){if(this.__inputPatched)return;let e=this.__slottedInputElement();if(!e)return;this.__inputPatched=!0;let t=this;for(let n of[`checked`,`disabled`]){let r=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,n);if(!r?.get||!r.set)continue;let{get:i,set:a}=r;Object.defineProperty(e,n,{configurable:!0,enumerable:r.enumerable,get(){return i.call(this)},set(e){a.call(this,e),t[n]!==e&&(t[n]=e)}})}}__slottedInputElement(){return Array.from(this.children).find(e=>e instanceof HTMLInputElement&&e.slot===`input`)}static get styles(){return[...es.styles,o`
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

        .choice-field__help-text {
          font-size: 1em;
          color: var(--c-text-quiet);
          grid-area: help-text;
        }
      `]}};r([c({type:Boolean,reflect:!0})],ss.prototype,`indeterminate`,void 0),customElements.get(`craft-checkbox`)||customElements.define(`craft-checkbox`,ss);var cs=o`
  /* Square, so it sits close to neighboring icon buttons */
  craft-button {
    cursor: move;
    padding-inline: 0;
  }

  /* The move icon reads small next to other icons at craft-icon's 0.8em */
  craft-icon {
    font-size: 1.2em;
  }

  /* Between the reorder actions and the moves. */
  .separator {
    margin: 0;
    border: 0;
    border-block-start: 1px solid var(--c-color-neutral-border-quiet);
  }

  :host([disabled]) {
    cursor: default;
    opacity: 0.25;
    pointer-events: none;
  }
`,ls=class extends d{constructor(){super(),this.label=null,this.position=`middle`,this.orientation=`vertical`,this.moves=[],this.variant=`plain`,this.disabled=!1,this.nested=!1,this.canIndent=!1,this.canOutdent=!1,this._hasFocus=!1,this._movedWhileFocused=!1,this._stopMenuEvent=e=>{e.target===e.currentTarget&&e.stopPropagation()},this.addEventListener(`focusin`,()=>{this._hasFocus=!0}),this.addEventListener(`focusout`,e=>{let t=e.relatedTarget;t instanceof Node&&!this.contains(t)?this._hasFocus=!1:t||setTimeout(()=>{this.isConnected&&!this.matches(`:focus-within`)&&(this._hasFocus=!1)})})}connectedCallback(){if(super.connectedCallback(),!this._movedWhileFocused)return;this._movedWhileFocused=!1;let e=document.activeElement;(!e||e===document.body)&&this._focusInvoker()}disconnectedCallback(){super.disconnectedCallback(),this._hasFocus&&(this._movedWhileFocused=!0,setTimeout(()=>{this._movedWhileFocused=!1,this.isConnected||(this._hasFocus=!1)}))}updated(e){super.updated(e),e.has(`disabled`)&&(this.disabled?this.setAttribute(`aria-disabled`,`true`):this.removeAttribute(`aria-disabled`))}_focusInvoker(){this.shadowRoot?.querySelector(`craft-button`)?.focus()}_canMove(e){switch(e){case`up`:return this.position!==`first`&&this.position!==`only`;case`down`:return this.position!==`last`&&this.position!==`only`;case`indent`:return this.nested&&this.canIndent;case`outdent`:return this.nested&&this.canOutdent}}_reorder(e){this.disabled||!this._canMove(e)||(this.matches(`:focus-within`)&&this._focusInvoker(),this.dispatchEvent(new CustomEvent(`craft-reorder`,{detail:{direction:e},bubbles:!0,composed:!0})))}_move(e){this.disabled||this.dispatchEvent(new CustomEvent(`craft-move`,{detail:{value:e},bubbles:!0,composed:!0}))}_isRtl(){return(this.closest(`[dir]`)?.getAttribute(`dir`)??document.documentElement.getAttribute(`dir`))?.toLowerCase()===`rtl`}render(){let e=this.label??n(`Reorder`),t=this.orientation===`horizontal`,r=t&&this._isRtl(),a=t?r?`arrow-right`:`arrow-left`:`arrow-up`,o=t?r?`arrow-left`:`arrow-right`:`arrow-down`,s=n(t?`Move forward`:`Move up`),c=n(t?`Move backward`:`Move down`);return m`
      <craft-action-menu
        ?disabled="${this.disabled}"
        @craft-show=${this._stopMenuEvent}
        @craft-hide=${this._stopMenuEvent}
        @craft-after-show=${this._stopMenuEvent}
        @craft-after-hide=${this._stopMenuEvent}
        @craft-select=${this._stopMenuEvent}
      >
        <craft-button
          slot="invoker"
          type="button"
          icon
          inherit
          size="small"
          variant="${this.variant}"
          flush=${ht(this.flush)}
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
            icon="${a}"
            ?disabled="${!this._canMove(`up`)}"
            @click="${()=>this._reorder(`up`)}"
            data-action="moveUp"
            command="--move-up"
            >${s}</craft-action-item
          >
          <craft-action-item
            icon="${o}"
            ?disabled="${!this._canMove(`down`)}"
            @click="${()=>this._reorder(`down`)}"
            data-action="moveDown"
            command="--move-down"
            >${c}</craft-action-item
          >
          ${this.nested?m`
                <craft-action-item
                  icon="${this._isRtl()?`arrow-left`:`arrow-right`}"
                  ?disabled="${!this._canMove(`indent`)}"
                  @click="${()=>this._reorder(`indent`)}"
                  data-action="indent"
                  >${n(`Indent`)}</craft-action-item
                >
                <craft-action-item
                  icon="${this._isRtl()?`arrow-right`:`arrow-left`}"
                  ?disabled="${!this._canMove(`outdent`)}"
                  @click="${()=>this._reorder(`outdent`)}"
                  data-action="outdent"
                  >${n(`Outdent`)}</craft-action-item
                >
              `:i}
          ${this.moves.length>0?m`
                <hr class="separator" />
                ${this.moves.map(e=>m`
                    <craft-action-item
                      icon="${ht(e.icon??void 0)}"
                      @click="${()=>this._move(e.value)}"
                      >${e.label}</craft-action-item
                    >
                  `)}
              `:i}
        </div>
      </craft-action-menu>
    `}};ls.styles=[cs],r([c()],ls.prototype,`label`,void 0),r([c({reflect:!0})],ls.prototype,`position`,void 0),r([c({reflect:!0})],ls.prototype,`orientation`,void 0),r([c({attribute:!1})],ls.prototype,`moves`,void 0),r([c({reflect:!0})],ls.prototype,`variant`,void 0),r([c({reflect:!0})],ls.prototype,`flush`,void 0),r([c({reflect:!0,type:Boolean})],ls.prototype,`disabled`,void 0),r([c({reflect:!0,type:Boolean})],ls.prototype,`nested`,void 0),r([c({attribute:`can-indent`,type:Boolean})],ls.prototype,`canIndent`,void 0),r([c({attribute:`can-outdent`,type:Boolean})],ls.prototype,`canOutdent`,void 0),customElements.get(`craft-reorder-button`)||customElements.define(`craft-reorder-button`,ls);var us=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},ds=je(class extends Me{constructor(e){if(super(e),e.type!==Ae.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=be(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],u,d,f=0,p=i.length-1,m=0,h=a.length-1;for(;f<=p&&m<=h;)if(i[f]===null)f++;else if(i[p]===null)p--;else if(s[f]===o[m])c[m]=_e(i[f],a[m]),f++,m++;else if(s[p]===o[h])c[h]=_e(i[p],a[h]),p--,h--;else if(s[f]===o[h])c[h]=_e(i[f],a[h]),ge(e,c[h+1],i[f]),f++,h--;else if(s[p]===o[m])c[m]=_e(i[p],a[m]),ge(e,i[f],i[p]),p--,m++;else if(u===void 0&&(u=us(o,m,h),d=us(s,f,p)),u.has(s[f]))if(u.has(s[p])){let t=d.get(o[m]),n=t===void 0?null:i[t];if(n===null){let t=ge(e,i[f]);_e(t,a[m]),c[m]=t}else c[m]=_e(n,a[m]),ge(e,i[f],n),i[t]=null;m++}else xe(i[p]),p--;else xe(i[f]),f++;for(;m<=h;){let t=ge(e,c[h+1]);_e(t,a[m]),c[m++]=t}for(;f<=p;){let e=i[f++];e!==null&&xe(e)}return this.ut=o,ye(e,c),l}}),fs=new WeakMap,ps=new WeakMap,ms=new WeakMap,hs=new WeakMap,gs=new WeakMap,_s=new WeakSet,vs=new WeakMap,ys=new WeakMap,bs=new WeakMap,xs=new WeakMap,Ss=class{constructor(e,t){x(this,_s),this.draggingIndex=null,this.dropIndex=null,T(this,fs,void 0),T(this,ps,void 0),T(this,ms,[]),T(this,hs,[]),T(this,gs,null),T(this,vs,e=>{let t=S(gs,this);if(!(!t||e.pointerId!==t.pointerId)){if(this.draggingIndex===null){if(Math.hypot(e.clientX-t.x,e.clientY-t.y)<4)return;w(_s,this,Es).call(this,t.index,null)}e.preventDefault(),w(_s,this,Es).call(this,this.draggingIndex,w(_s,this,Ts).call(this,e))}}),T(this,ys,e=>{let t=S(gs,this);if(!t||e.pointerId!==t.pointerId)return;let n=this.draggingIndex,r=this.dropIndex,i=n!==null;if(w(_s,this,ws).call(this),!i)return;let a=e=>{e.preventDefault(),e.stopImmediatePropagation()};if(t.handle.addEventListener(`click`,a,{capture:!0,once:!0}),setTimeout(()=>t.handle.removeEventListener(`click`,a,!0)),r!==null){let e=r>n?r-1:r;e!==n&&S(ps,this).onReorder(n,e)}}),T(this,bs,e=>{e.pointerId===S(gs,this)?.pointerId&&w(_s,this,ws).call(this)}),T(this,xs,e=>{e.key===`Escape`&&this.draggingIndex!==null&&(e.preventDefault(),e.stopPropagation(),w(_s,this,ws).call(this))}),C(fs,this,e),C(ps,this,t),e.addController(this)}hostDisconnected(){w(_s,this,ws).call(this),this.setItems([])}setItems(e){for(let e of S(hs,this))e();C(ms,this,e),C(hs,this,e.map(({element:e,handle:t},n)=>{let r=t??e,i=e=>w(_s,this,Cs).call(this,e,n,r);return r.addEventListener(`pointerdown`,i),()=>r.removeEventListener(`pointerdown`,i)}))}};function Cs(e,t,n){e.button!==0||e.pointerType===`touch`||S(gs,this)||n.matches(`[disabled]`)||(C(gs,this,{index:t,pointerId:e.pointerId,handle:n,x:e.clientX,y:e.clientY}),window.addEventListener(`pointermove`,S(vs,this)),window.addEventListener(`pointerup`,S(ys,this)),window.addEventListener(`pointercancel`,S(bs,this)),window.addEventListener(`keydown`,S(xs,this),!0))}function ws(){C(gs,this,null),window.removeEventListener(`pointermove`,S(vs,this)),window.removeEventListener(`pointerup`,S(ys,this)),window.removeEventListener(`pointercancel`,S(bs,this)),window.removeEventListener(`keydown`,S(xs,this),!0),w(_s,this,Es).call(this,null,null)}function Ts(e){let t=S(ms,this).length;for(let[n,{element:r}]of S(ms,this).entries()){let i=r.getBoundingClientRect();if(e.clientY<i.top+i.height/2){t=n;break}}let n=this.draggingIndex;return n!==null&&(t===n||t===n+1)?null:t}function Es(e,t){(e!==this.draggingIndex||t!==this.dropIndex)&&(this.draggingIndex=e,this.dropIndex=t,S(fs,this).requestUpdate())}var Ds=o`
  ${le}

  :host {
    display: block;
  }

  :host([hidden]) {
    display: none;
  }

  .label {
    margin-block-end: var(--c-spacing-sm);
    font-weight: bold;
  }

  .group {
    display: grid;
    justify-items: start;
    gap: var(--c-checkbox-group-spacing, var(--c-spacing-sm));
  }

  ::slotted(.all) {
    font-weight: bold;
  }

  .items {
    display: grid;
    gap: var(--c-checkbox-group-spacing, var(--c-spacing-sm));
    justify-self: stretch;
  }

  :host([presentation='add-menu']) .items {
    gap: var(--c-spacing-xs);
  }

  .row {
    position: relative;
    display: flex;
    align-items: center;
    column-gap: var(--c-spacing-sm);
  }

  .row ::slotted(*) {
    flex: 1;
    min-width: 0;
  }

  .row--dragging {
    opacity: 0.4;
  }

  .row[data-drop]::before {
    content: '';
    position: absolute;
    inset-inline: 0;
    border-block-start: calc(2rem / 16) solid
      var(--c-color-accent-fill-loud, #2563eb);
    pointer-events: none;
  }

  .row[data-drop='before']::before {
    inset-block-start: calc(var(--c-spacing-xs) * -1);
  }

  .row[data-drop='after']::before {
    inset-block-end: calc(var(--c-spacing-xs) * -1);
  }

  .handle {
    flex: none;
    color: var(--c-text-quiet);
  }

  .row__label {
    display: grid;
    min-width: 0;
  }

  .row__info {
    color: var(--c-text-quiet);
    font-size: var(--c-text-sm);
  }

  .remove {
    flex: none;
  }
`,Os=`governedName`,ks=`disabledByGroup`,As=0,js=new WeakMap,Ms=new WeakMap,Ns=new WeakMap,Ps=new WeakMap,B=new WeakSet,Fs=new WeakMap,Is=new WeakMap,Ls=class extends d{get options(){return w(B,this,ac).call(this).map(e=>w(B,this,ic).call(this,e))}set options(e){let t=w(B,this,ac).call(this),n=new Set(e.map(e=>String(e.value)));for(let e of t)n.has(w(B,this,pc).call(this,e))||e.remove();let r=[],i=w(B,this,sc).call(this)??w(B,this,uc).call(this);for(let t of e){let e=w(B,this,oc).call(this,String(t.value));e||(e=w(B,this,nc).call(this,t),r.push(e)),w(B,this,rc).call(this,e,t),i?i.after(e):this.prepend(e),i=e}if(w(B,this,lc).call(this)&&w(B,this,cc).call(this)?.checked){for(let e of r)w(B,this,Js).call(this,e,!0);w(B,this,Xs).call(this)}this.requestUpdate(`options`)}get modelValue(){return w(B,this,lc).call(this)&&w(B,this,cc).call(this)?.checked?[this.allValue]:w(B,this,ac).call(this).filter(e=>w(B,this,fc).call(this,e)?.checked).map(e=>w(B,this,pc).call(this,e))}set modelValue(e){this.allLabel&&!w(B,this,sc).call(this)&&(w(B,this,ec).call(this),w(B,this,tc).call(this));let t=new Set((e??[]).map(String)),n=w(B,this,lc).call(this)&&t.has(this.allValue);for(let e of w(B,this,ac).call(this)){let r=w(B,this,fc).call(this,e);r&&!r.disabled&&(r.checked=n||t.has(w(B,this,pc).call(this,e)))}let r=w(B,this,cc).call(this);r&&w(B,this,lc).call(this)&&(r.checked=n),w(B,this,Xs).call(this),this.requestUpdate(`modelValue`)}addOption(e,t){let n=w(B,this,oc).call(this,String(e.value))??w(B,this,nc).call(this,e);w(B,this,rc).call(this,n,e);let r=w(B,this,ac).call(this).filter(e=>e!==n),i=t===void 0?null:r[t]??null,a=r.at(-1)??w(B,this,sc).call(this)??w(B,this,uc).call(this);i?i.before(n):a?a.after(n):this.prepend(n),w(B,this,lc).call(this)&&w(B,this,cc).call(this)?.checked&&(w(B,this,Js).call(this,n,!0),w(B,this,Xs).call(this)),this.requestUpdate()}removeOption(e){w(B,this,oc).call(this,String(e))?.remove(),this.requestUpdate()}updateOption(e,t){let n=w(B,this,oc).call(this,String(e));n&&(w(B,this,rc).call(this,n,{...w(B,this,ic).call(this,n),...t}),w(B,this,Zs).call(this),w(B,this,Xs).call(this),this.requestUpdate())}constructor(){super(),x(this,B),this.name=null,this.label=null,this.disabled=!1,this.sortable=!1,this.presentation=`checkboxes`,this.allLabel=null,this.allValue=`*`,this.allMode=`single-value`,this._revision=0,this._status=``,T(this,js,new WeakMap),T(this,Ms,new Ss(this,{onReorder:(e,t)=>w(B,this,qs).call(this,e,t)})),T(this,Ns,null),T(this,Ps,null),T(this,Fs,e=>{let t=e.target;!(t instanceof HTMLInputElement)||t.type!==`checkbox`||(t===w(B,this,cc).call(this)?w(B,this,Ys).call(this,t.checked):w(B,this,Xs).call(this),this.requestUpdate(),w(B,this,Qs).call(this))}),T(this,Is,e=>{e.target!==this&&e.stopImmediatePropagation()}),this.addEventListener(`model-value-changed`,S(Is,this));for(let e of[`options`,`modelValue`])if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],queueMicrotask(()=>{this[e]=t})}}connectedCallback(){super.connectedCallback(),this.addEventListener(`change`,S(Fs,this)),C(Ns,this,new MutationObserver(()=>w(B,this,$s).call(this))),S(Ns,this).observe(this,{childList:!0,subtree:!0,characterData:!0})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`change`,S(Fs,this)),S(Ns,this)?.disconnect(),C(Ns,this,null)}willUpdate(e){(e.has(`name`)||e.has(`allLabel`)||e.has(`allMode`))&&(w(B,this,ec).call(this),w(B,this,tc).call(this)),e.has(`disabled`)&&w(B,this,Zs).call(this),(e.has(`allMode`)||e.has(`allLabel`))&&w(B,this,Xs).call(this);for(let e of w(B,this,ac).call(this))S(js,this).has(e)||S(js,this).set(e,`item-${As++}`),e.slot=S(js,this).get(e);w(B,this,sc).call(this)?.setAttribute(`slot`,`all`)}updated(){S(Ms,this).setItems(w(B,this,Hs).call(this).flatMap(e=>{let t=w(B,this,dc).call(this,e);return t?[{element:t,handle:t.querySelector(`craft-reorder-button`)}]:[]}));let e=S(Ps,this);C(Ps,this,null),e&&w(B,this,Rs).call(this,e)}render(){this._revision;let e=w(B,this,Vs).call(this),t=w(B,this,Us).call(this),r=w(B,this,Hs).call(this);return m`
      ${this.label?m`<div id="label" class="label" part="label">${this.label}</div>`:i}
      <div
        class="group"
        part="group"
        role=${this.label?`group`:i}
        aria-labelledby=${this.label?`label`:i}
      >
        <slot name="all"></slot>
        ${e.length?m`<div class="items" part="items">
              ${ds(e,e=>S(js,this).get(e),e=>w(B,this,zs).call(this,e,r))}
            </div>`:i}
        ${this.presentation===`add-menu`&&t.length&&!this.disabled?m`<craft-action-menu
              class="add"
              part="add-menu"
              ?searchable=${t.length>10}
              .actions=${()=>w(B,this,Ws).call(this)}
            >
              <craft-button
                slot="invoker"
                type="button"
                size="small"
                variant="dashed"
              >
                <craft-icon name="plus" slot="prefix"></craft-icon>
                ${n(`Add item`)}
              </craft-button>
            </craft-action-menu>`:i}
      </div>
      <span class="cp-visually-hidden" role="status">${this._status}</span>
      <slot hidden></slot>
    `}};async function Rs(e){let t=e();await t?.updateComplete,t?.localName===`craft-reorder-button`&&(t=t.shadowRoot?.querySelector(`craft-button`)??t,await t.updateComplete),t?.focus()}function zs(e,t){let r=S(js,this).get(e),a=t.indexOf(e),o=a!==-1,s=o&&S(Ms,this).draggingIndex===a,c=S(Ms,this).dropIndex,l=w(B,this,ic).call(this,e),u=this.presentation===`add-menu`;return m`<div
      class="row ${s?`row--dragging`:``}"
      part="row"
      data-key=${r}
      data-drop=${c===a?`before`:c===a+1&&a===t.length-1?`after`:i}
    >
      ${this.sortable?m`<craft-reorder-button
            class="handle"
            position=${w(B,this,Bs).call(this,a,t.length)}
            ?disabled=${!o||t.length<2}
            @craft-reorder=${e=>w(B,this,qs).call(this,a,a+(e.detail.direction===`up`?-1:1),!0)}
          ></craft-reorder-button>`:i}
      ${u?m`<span class="row__label">
              ${l.labelHtml===void 0?l.label:Pe(l.labelHtml)}
              ${l.info?m`<span class="row__info"
                    >${Pe(l.info)}</span
                  >`:i}
            </span>
            ${!l.disabled&&!this.disabled?m`<craft-button
                  class="remove"
                  type="button"
                  icon="xmark"
                  size="small"
                  variant="plain"
                  aria-label=${n(`Remove {name}`,{name:l.label})}
                  @click=${()=>w(B,this,Ks).call(this,e)}
                ></craft-button>`:i}`:m`<slot name=${r}></slot>`}
    </div>`}function Bs(e,t){return t<2?`only`:e<=0?`first`:e===t-1?`last`:`middle`}function Vs(){let e=w(B,this,ac).call(this);return this.presentation===`add-menu`?w(B,this,cc).call(this)?.checked?[]:e.filter(e=>w(B,this,fc).call(this,e)?.checked):e}function Hs(){return!this.sortable||this.disabled?[]:w(B,this,Vs).call(this).filter(e=>!w(B,this,fc).call(this,e)?.disabled)}function Us(){return w(B,this,cc).call(this)?.checked?[]:w(B,this,ac).call(this).filter(e=>{let t=w(B,this,fc).call(this,e);return t&&!t.checked&&!t.disabled})}function Ws(){return w(B,this,Us).call(this).map(e=>({label:w(B,this,mc).call(this,e),onClick:()=>w(B,this,Gs).call(this,e)}))}function Gs(e){let t=w(B,this,Vs).call(this).at(-1);t&&t!==e&&t.after(e),w(B,this,Js).call(this,e,!0,!0),this._status=n(`Added {name}`,{name:w(B,this,mc).call(this,e)}),w(B,this,Us).call(this).length||C(Ps,this,()=>w(B,this,dc).call(this,e)?.querySelector(`.remove`))}function Ks(e){let t=w(B,this,Vs).call(this),r=t.indexOf(e),i=[...t.slice(r+1),...t.slice(0,r).reverse()].find(e=>!w(B,this,fc).call(this,e)?.disabled);w(B,this,Js).call(this,e,!1,!0),this._status=n(`Removed {name}`,{name:w(B,this,mc).call(this,e)}),C(Ps,this,()=>(i&&w(B,this,dc).call(this,i)?.querySelector(`.remove`))??this.renderRoot.querySelector(`.add craft-button[slot="invoker"]`))}function qs(e,t,r=!1){let i=w(B,this,Hs).call(this),a=i[e],o=i[t];!a||!o||a===o||(t>e?o.after(a):o.before(a),this._status=n(`Moved {name} to position {position}`,{name:w(B,this,mc).call(this,a),position:t+1}),r&&C(Ps,this,()=>w(B,this,dc).call(this,a)?.querySelector(`craft-reorder-button`)),this.requestUpdate(),this.dispatchEvent(new CustomEvent(`craft-order-change`,{bubbles:!0,composed:!0,detail:{value:w(B,this,pc).call(this,a),index:t}})),w(B,this,Qs).call(this))}function Js(e,t,n=!1){let r=w(B,this,fc).call(this,e);!r||r.checked===t||(r.checked=t,n&&r.dispatchEvent(new Event(`change`,{bubbles:!0})))}function Ys(e){for(let t of w(B,this,ac).call(this))w(B,this,fc).call(this,t)?.disabled||w(B,this,Js).call(this,t,e);w(B,this,Xs).call(this)}function Xs(){let e=w(B,this,sc).call(this),t=w(B,this,cc).call(this),n=w(B,this,ac).call(this).filter(e=>!w(B,this,fc).call(this,e)?.disabled),r=n.filter(e=>w(B,this,fc).call(this,e)?.checked).length,i=w(B,this,lc).call(this)&&n.length===0;if(e&&t&&!i){let i=n.length>0&&r===n.length;t.checked=i;let a=e.querySelector(`craft-checkbox`);a&&(a.indeterminate=r>0&&!i)}let a=w(B,this,lc).call(this)&&!!t?.checked;for(let e of w(B,this,ac).call(this)){let t=w(B,this,fc).call(this,e);t&&(a?t.name&&(t.dataset[Os]=t.name,t.removeAttribute(`name`)):t.dataset[Os]!==void 0&&(t.name=t.dataset[Os],delete t.dataset[Os]))}}function Zs(){for(let e of this.querySelectorAll(`:scope > .cp-checkbox-select__item input[type="checkbox"]`))this.disabled&&!e.disabled?(e.disabled=!0,e.dataset[ks]=``):!this.disabled&&e.dataset[ks]!==void 0&&(e.disabled=!1,delete e.dataset[ks])}function Qs(){this.dispatchEvent(new Event(`model-value-changed`,{bubbles:!0,composed:!0}))}function $s(){this._revision++}function ec(){let e=w(B,this,uc).call(this);if(!this.name){e?.remove();return}if(e){e.name=this.name;return}let t=document.createElement(`input`);t.type=`hidden`,t.name=this.name,t.value=``,t.dataset.empty=``,this.prepend(t)}function tc(){let e=w(B,this,sc).call(this);if(!this.allLabel){e?.remove();return}let t=e??w(B,this,nc).call(this,{value:this.allValue,label:this.allLabel});t.classList.add(`all`);let n=w(B,this,fc).call(this,t);n.value=this.allValue,e||(t.dataset.generated=``),t.dataset.generated!==void 0&&(this.allMode===`single-value`&&this.name?n.name=`${this.name}[]`:n.removeAttribute(`name`));let r=t.querySelector(`label`);if(r&&r.textContent!==this.allLabel&&(r.textContent=this.allLabel),!e){let e=w(B,this,uc).call(this);e?e.after(t):this.prepend(t)}}function nc(e){let t=`${this.id||`checkbox-select`}-${As++}`,n=document.createElement(`div`);n.className=`cp-checkbox-select__item`;let r=document.createElement(`craft-checkbox`),i=document.createElement(`input`);i.type=`checkbox`,i.className=`checkbox`,i.slot=`input`,i.id=t,i.value=String(e.value),this.name&&(i.name=`${this.name}[]`);let a=document.createElement(`label`);return a.slot=`label`,a.htmlFor=t,a.id=`${t}-label`,r.append(i,a),n.append(r),n}function rc(e,t){let n=w(B,this,fc).call(this,e),r=e.querySelector(`craft-checkbox > label`);n&&(t.checked!==void 0&&(n.checked=t.checked),t.disabled!==void 0&&(n.disabled=t.disabled,delete n.dataset[ks])),r&&(t.labelHtml===void 0?r.textContent!==t.label&&(r.textContent=t.label):r.innerHTML!==t.labelHtml&&(r.innerHTML=t.labelHtml),r.dataset.label=t.label);let i=e.querySelector(`craft-checkbox`),a=i?.querySelector(`:scope > [slot="help-text"][data-info]`);t.info?(a||(a=document.createElement(`div`),a.slot=`help-text`,a.dataset.info=``,i?.append(a)),a.innerHTML!==t.info&&(a.innerHTML=t.info)):a?.remove()}function ic(e){let t=w(B,this,fc).call(this,e),n=e.querySelector(`craft-checkbox > label, :scope > label`),r=e.querySelector(`[slot="help-text"][data-info]`);return{value:w(B,this,pc).call(this,e),label:w(B,this,mc).call(this,e),...n?.children.length?{labelHtml:n.innerHTML}:{},...r?{info:r.innerHTML}:{},checked:!!t?.checked,disabled:!!t?.disabled&&t.dataset[ks]===void 0}}function ac(){return Array.from(this.querySelectorAll(`:scope > .cp-checkbox-select__item`)).filter(e=>!e.classList.contains(`all`))}function oc(e){return w(B,this,ac).call(this).find(t=>w(B,this,pc).call(this,t)===e)}function sc(){return this.querySelector(`:scope > .cp-checkbox-select__item.all`)}function cc(){let e=w(B,this,sc).call(this);return e?w(B,this,fc).call(this,e):null}function lc(){return!!w(B,this,sc).call(this)&&this.allMode===`single-value`}function uc(){return this.querySelector(`:scope > input[type="hidden"][data-empty]`)}function dc(e){let t=S(js,this).get(e);return t?this.renderRoot.querySelector(`.row[data-key="${t}"]`):null}function fc(e){return e.querySelector(`input[type="checkbox"]`)}function pc(e){let t=w(B,this,fc).call(this,e);return t?.getAttribute(`value`)??t?.value??``}function mc(e){let t=e.querySelector(`craft-checkbox > label, :scope > label`);return t?.dataset.label??t?.textContent?.trim()??``}Ls.styles=[Ds],r([c()],Ls.prototype,`name`,void 0),r([c()],Ls.prototype,`label`,void 0),r([c({type:Boolean,reflect:!0})],Ls.prototype,`disabled`,void 0),r([c({type:Boolean,reflect:!0})],Ls.prototype,`sortable`,void 0),r([c({reflect:!0})],Ls.prototype,`presentation`,void 0),r([c({attribute:`all-label`})],Ls.prototype,`allLabel`,void 0),r([c({attribute:`all-value`})],Ls.prototype,`allValue`,void 0),r([c({attribute:`all-mode`,reflect:!0})],Ls.prototype,`allMode`,void 0),r([p()],Ls.prototype,`_revision`,void 0),r([p()],Ls.prototype,`_status`,void 0),customElements.get(`craft-checkbox-select`)||customElements.define(`craft-checkbox-select`,Ls);var hc=new Map;async function gc(e,t,n=!1,r=null){let i=[],a=[],o=()=>{for(let e of i)e.remove();a.forEach(e=>e())};if(!e)return o;let s=document.createElement(`template`);s.innerHTML=e.trim();try{for(let e of s.content.childNodes){let o=yc(e);if(o){let e=hc.get(o.key);if(e){e.references++,a.push(()=>Cc(o.key,e)),e.loaded&&await Sc(e.loaded,n);continue}if(bc(o))continue}let s=vc(e),c=o&&s instanceof HTMLScriptElement?xc(s,o.value):null;if(r?t.insertBefore(s,r):t.appendChild(s),o&&(s instanceof HTMLLinkElement||s instanceof HTMLScriptElement)){let e={node:s,loaded:c,references:1};hc.set(o.key,e),a.push(()=>Cc(o.key,e))}else i.push(s),await _c(s,n);c&&await Sc(c,n)}return o}catch(e){throw o(),e}}async function _c(e,t){if(e instanceof Element)for(let n of e.querySelectorAll(`script`)){let e=vc(n),r=e.src?xc(e,e.src):null;n.replaceWith(e),r&&await Sc(r,t)}}function vc(e){if(!(e instanceof HTMLScriptElement))return e.cloneNode(!0);let t=document.createElement(`script`);for(let n of e.attributes)t.setAttribute(n.name,n.value);return t.textContent=e.textContent,t.async=!1,t}function yc(e){return e instanceof HTMLLinkElement&&e.href?{key:`link:${e.href}`,selector:`link[href]`,value:e.href}:e instanceof HTMLScriptElement&&e.src?{key:`script:${e.src}`,selector:`script[src]`,value:e.src}:null}function bc(e){return Array.from(document.querySelectorAll(e.selector)).some(t=>(t instanceof HTMLLinkElement?t.href:t.src)===e.value)}function xc(e,t){return new Promise((n,r)=>{e.addEventListener(`load`,()=>n(),{once:!0}),e.addEventListener(`error`,()=>r(Error(`Failed to load asset [${t}].`)),{once:!0})})}async function Sc(e,t){try{await e}catch(e){if(t)throw e}}function Cc(e,t){t.references--,!(t.references>0)&&(t.node.remove(),hc.delete(e))}async function wc(e){return gc(e,document.head,!1,document.head.querySelector(`meta[name="craft-head-anchor"]`))}async function Tc(e){return gc(e,document.body)}function Ec(e){return typeof e.checkVisibility==`function`?e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0}):e.offsetWidth>0||e.offsetHeight>0}function Dc(e){return typeof e==`object`&&!!e&&`checked`in e&&typeof e.checked==`boolean`}function Oc(e){return Ac(e).toString()}function kc(e,t){let n={};for(let[r,i]of Ac(e,t)){let e=n[r];e===void 0?n[r]=i:Array.isArray(e)?e.push(i):n[r]=[e,i]}return n}function Ac(e,t){let n=new URLSearchParams,r=e.querySelectorAll(`input[name], select[name], textarea[name]`);for(let e of r)if(!(e.disabled||!e.name||t?.contains(e))&&!(e instanceof HTMLInputElement&&([`file`,`submit`,`button`,`reset`,`image`].includes(e.type)||(e.type===`checkbox`||e.type===`radio`)&&!e.checked))){if(e instanceof HTMLSelectElement&&e.multiple){for(let t of e.selectedOptions)n.append(e.name,t.value);continue}n.append(e.name,e.value)}for(let r of e.querySelectorAll(`*`)){if(!r.tagName.includes(`-`)||t?.contains(r))continue;let e=r.name;if(typeof e!=`string`||e===``||r.disabled===!0||r.querySelector(`input[name], select[name], textarea[name]`))continue;if(Dc(r.modelValue)){r.modelValue.checked&&n.append(e,String(r.modelValue.value??``));continue}let i=r.serializedValue??r.value;if(i!=null)if(Array.isArray(i))for(let t of i)n.append(e,String(t));else n.append(e,String(i))}return n}var jc={Á:`A`,á:`a`,Ä:`A`,ä:`a`,À:`A`,à:`a`,Â:`A`,â:`a`,É:`E`,é:`e`,Ë:`E`,ë:`e`,È:`E`,è:`e`,Ê:`E`,ê:`e`,Í:`I`,í:`i`,Ï:`I`,ï:`i`,Ì:`I`,ì:`i`,Î:`I`,î:`i`,Ó:`O`,ó:`o`,Ö:`O`,ö:`o`,Ò:`O`,ò:`o`,Ô:`O`,ô:`o`,Ú:`U`,ú:`u`,Ü:`U`,ü:`u`,Ù:`U`,ù:`u`,Û:`U`,û:`u`,Ý:`Y`,ý:`y`,Ÿ:`Y`,А:`A`,Б:`B`,В:`V`,Г:`G`,Д:`D`,Ѓ:`Gj`,Е:`E`,Ж:`Z`,З:`Z`,Ѕ:`Dz`,И:`I`,Ј:`j`,К:`K`,Л:`L`,Љ:`Lj`,М:`M`,Н:`N`,Њ:`Nj`,О:`O`,П:`P`,Р:`R`,С:`S`,Т:`T`,Ќ:`Kj`,У:`U`,Ф:`F`,Х:`X`,Ц:`C`,Ч:`C`,Џ:`Dz`,Ш:`S`,а:`a`,б:`b`,в:`v`,г:`g`,д:`d`,ѓ:`gj`,е:`e`,ж:`z`,з:`z`,ѕ:`dz`,и:`i`,ј:`j`,к:`k`,л:`l`,љ:`lj`,м:`m`,н:`n`,њ:`nj`,о:`o`,п:`p`,р:`r`,с:`s`,т:`t`,ќ:`kj`,у:`u`,ф:`f`,х:`x`,ц:`c`,ч:`c`,џ:`dz`,ш:`s`,æ:`ae`,ǽ:`ae`,Ã:`A`,Å:`A`,Ǻ:`A`,Ă:`A`,Ǎ:`A`,Æ:`AE`,Ǽ:`AE`,ã:`a`,å:`a`,ǻ:`a`,ă:`a`,ǎ:`a`,ª:`a`,Ĉ:`C`,Ċ:`C`,Ç:`C`,ç:`c`,ĉ:`c`,ċ:`c`,Ð:`D`,Đ:`D`,ð:`d`,đ:`d`,Ĕ:`E`,Ė:`E`,ĕ:`e`,ė:`e`,ƒ:`f`,Ĝ:`G`,Ġ:`G`,ĝ:`g`,ġ:`g`,Ĥ:`H`,Ħ:`H`,ĥ:`h`,ħ:`h`,Ĩ:`I`,Ĭ:`I`,Ǐ:`I`,Į:`I`,Ĳ:`IJ`,ĩ:`i`,ĭ:`i`,ǐ:`i`,į:`i`,ĳ:`ij`,Ĵ:`J`,ĵ:`j`,Ĺ:`L`,Ľ:`L`,Ŀ:`L`,ĺ:`l`,ľ:`l`,ŀ:`l`,Ñ:`N`,ñ:`n`,ŉ:`n`,Õ:`O`,Ō:`O`,Ŏ:`O`,Ǒ:`O`,Ő:`O`,Ơ:`O`,Ø:`O`,Ǿ:`O`,Œ:`OE`,õ:`o`,ō:`o`,ŏ:`o`,ǒ:`o`,ő:`o`,ơ:`o`,ø:`o`,ǿ:`o`,º:`o`,œ:`oe`,Ŕ:`R`,Ŗ:`R`,ŕ:`r`,ŗ:`r`,Ŝ:`S`,Ș:`S`,ŝ:`s`,ș:`s`,ſ:`s`,Ţ:`T`,Ț:`T`,Ŧ:`T`,Þ:`TH`,ţ:`t`,ț:`t`,ŧ:`t`,þ:`th`,Ũ:`U`,Ŭ:`U`,Ű:`U`,Ų:`U`,Ư:`U`,Ǔ:`U`,Ǖ:`U`,Ǘ:`U`,Ǚ:`U`,Ǜ:`U`,ũ:`u`,ŭ:`u`,ű:`u`,ų:`u`,ư:`u`,ǔ:`u`,ǖ:`u`,ǘ:`u`,ǚ:`u`,ǜ:`u`,Ŵ:`W`,ŵ:`w`,Ŷ:`Y`,ÿ:`y`,ŷ:`y`,ΑΥ:`AU`,ΑΎ:`AU`,Αυ:`Au`,Αύ:`Au`,ΕΊ:`I`,ΕΙ:`I`,Ει:`Ei`,ΕΥ:`EF`,ΕΎ:`EU`,Εί:`I`,Ευ:`Ef`,Εύ:`Eu`,ΟΙ:`I`,ΟΊ:`I`,ΟΥ:`U`,ΟΎ:`OU`,Οι:`Oi`,Οί:`I`,Ου:`Oy`,Ού:`Ou`,ΥΙ:`I`,ΎΙ:`I`,Υι:`Yi`,Ύι:`I`,ΥΊ:`I`,Υί:`I`,αυ:`au`,αύ:`au`,εί:`i`,ει:`ei`,ευ:`ef`,εύ:`eu`,οι:`oi`,οί:`i`,ου:`oy`,ού:`ou`,υι:`yi`,ύι:`i`,υί:`i`,Α:`A`,Ά:`A`,Β:`B`,Δ:`D`,Ε:`E`,Έ:`E`,Φ:`F`,Γ:`G`,Η:`H`,Ή:`I`,Ι:`I`,Ί:`I`,Ϊ:`I`,Κ:`K`,Ξ:`Ks`,Λ:`L`,Μ:`M`,Ν:`N`,Π:`P`,Ο:`O`,Ό:`O`,Ψ:`Ps`,Ρ:`R`,Σ:`S`,Τ:`T`,Θ:`Th`,Ω:`O`,Ώ:`W`,Χ:`X`,ϒ:`Y`,Υ:`Y`,Ύ:`Y`,Ϋ:`Y`,Ζ:`Z`,α:`a`,ά:`a`,β:`v`,δ:`d`,ε:`e`,έ:`e`,φ:`f`,γ:`gh`,η:`i`,ή:`i`,ι:`i`,ί:`i`,ϊ:`i`,ΐ:`i`,κ:`k`,ξ:`ks`,λ:`l`,μ:`m`,ν:`n`,ο:`o`,ό:`o`,π:`p`,ψ:`ps`,ρ:`r`,σ:`s`,ς:`s`,τ:`t`,ϑ:`th`,θ:`th`,ϐ:`v`,ω:`o`,ώ:`w`,χ:`kh`,υ:`i`,ύ:`y`,ΰ:`y`,ϋ:`y`,ζ:`z`,अ:`a`,आ:`aa`,ए:`e`,ई:`ii`,ऍ:`ei`,ऎ:`ae`,ऐ:`ai`,इ:`i`,ओ:`o`,ऑ:`oi`,ऒ:`oii`,ऊ:`uu`,औ:`ou`,उ:`u`,ब:`B`,भ:`Bha`,च:`Ca`,छ:`Chha`,ड:`Da`,ढ:`Dha`,फ:`Fa`,फ़:`Fi`,ग:`Ga`,घ:`Gha`,ग़:`Ghi`,ह:`Ha`,ज:`Ja`,झ:`Jha`,क:`Ka`,ख:`Kha`,ख़:`Khi`,ल:`L`,ळ:`Li`,ऌ:`Li`,ऴ:`Lii`,ॡ:`Lii`,म:`Ma`,न:`Na`,ङ:`Na`,ञ:`Nia`,ण:`Nae`,ऩ:`Ni`,ॐ:`oms`,प:`Pa`,क़:`Qi`,र:`Ra`,ऋ:`Ri`,ॠ:`Ri`,ऱ:`Ri`,स:`Sa`,श:`Sha`,ष:`Shha`,ट:`Ta`,त:`Ta`,ठ:`Tha`,द:`Tha`,थ:`Tha`,ध:`Thha`,ड़:`ugDha`,ढ़:`ugDhha`,व:`Va`,य:`Ya`,य़:`Yi`,ज़:`Za`,Ա:`A`,Բ:`B`,Գ:`G`,Դ:`D`,Ե:`E`,Զ:`Z`,Է:`E`,Ը:`Y`,Թ:`Th`,Ժ:`Zh`,Ի:`I`,Լ:`L`,Խ:`Kh`,Ծ:`Ts`,Կ:`K`,Հ:`H`,Ձ:`Dz`,Ղ:`Gh`,Ճ:`Tch`,Մ:`M`,Յ:`Y`,Ն:`N`,Շ:`Sh`,Ո:`Vo`,Չ:`Ch`,Պ:`P`,Ջ:`J`,Ռ:`R`,Ս:`S`,Վ:`V`,Տ:`T`,Ր:`R`,Ց:`C`,Ւ:`u`,Փ:`Ph`,Ք:`Q`,և:`ev`,Օ:`O`,Ֆ:`F`,ա:`a`,բ:`b`,գ:`g`,դ:`d`,ե:`e`,զ:`z`,է:`e`,ը:`y`,թ:`th`,ժ:`zh`,ի:`i`,լ:`l`,խ:`kh`,ծ:`ts`,կ:`k`,հ:`h`,ձ:`dz`,ղ:`gh`,ճ:`tch`,մ:`m`,յ:`y`,ն:`n`,շ:`sh`,ո:`vo`,չ:`ch`,պ:`p`,ջ:`j`,ռ:`r`,ս:`s`,վ:`v`,տ:`t`,ր:`r`,ց:`c`,ւ:`u`,փ:`ph`,ք:`q`,օ:`o`,ֆ:`f`,Ž:`Z`,Ň:`N`,Ş:`S`,ž:`z`,ň:`n`,ş:`s`,ı:`i`,İ:`I`,ğ:`g`,Ğ:`G`,ьо:`yo`,Й:`i`,Щ:`Shh`,Ъ:`Ie`,Ь:``,Ю:`Iu`,Я:`Ia`,й:`i`,щ:`shh`,ъ:`ie`,ь:``,ю:`iu`,я:`ia`,Ē:`E`,ē:`e`,န်ုပ်:`nub`,"ောင်":`aung`,"ိုက်":`aik`,"ိုဒ်":`ok`,"ိုင်":`aing`,"ိုလ်":`ol`,"ေါင်":`aung`,သြော:`aw`,"ောက်":`auk`,"ိတ်":`eik`,"ုတ်":`ok`,"ုန်":`on`,"ေတ်":`it`,"ုဒ်":`ait`,"ာန်":`an`,"ိန်":`ein`,"ွတ်":`ut`,"ေါ်":`aw`,"ွန်":`un`,"ိပ်":`eik`,"ုပ်":`ok`,"ွပ်":`ut`,"ိမ်":`ein`,"ုမ်":`on`,"ော်":`aw`,"ွမ်":`un`,က်:`et`,"ေါ":`aw`,"ော":`aw`,"ျွ":`ywa`,"ြွ":`yw`,"ို":`o`,"ုံ":`on`,တ်:`at`,င်:`in`,ည်:`i`,ဒ်:`d`,န်:`an`,ပ်:`at`,မ်:`an`,စျ:`za`,ယ်:`e`,ဉ်:`in`,စ်:`it`,"ိံ":`ein`,"ဲ":`e`,"း":``,"ာ":`a`,"ါ":`a`,"ေ":`e`,"ံ":`an`,"ိ":`i`,"ီ":`i`,"ု":`u`,"ူ":`u`,"်":`at`,"္":``,"့":``,က:`k`,"၉":`9`,တ:`t`,ရ:`ya`,ယ:`y`,မ:`m`,ဘ:`ba`,ဗ:`b`,ဖ:`pa`,ပ:`p`,န:`n`,ဓ:`da`,ဒ:`d`,ထ:`ta`,ဏ:`na`,ဝ:`w`,ဎ:`da`,ဍ:`d`,ဌ:`ta`,ဋ:`t`,ည:`ny`,ဇ:`z`,ဆ:`sa`,စ:`s`,င:`ng`,ဃ:`ga`,ဂ:`g`,လ:`l`,သ:`th`,"၈":`8`,ဩ:`aw`,ခ:`kh`,"၆":`6`,"၅":`5`,"၄":`4`,"၃":`3`,"၂":`2`,"၁":`1`,"၀":`0`,"၌":`hnaik`,"၍":`ywae`,ဪ:`aw`,ဦ:`-u`,ဟ:`h`,ဉ:`u`,ဤ:`-i`,ဣ:`i`,"၏":`-e`,ဧ:`e`,"ှ":`h`,"ွ":`w`,"ျ":`ya`,"ြ":`y`,အ:`a`,ဠ:`la`,"၇":`7`,DŽ:`DZ`,Dž:`Dz`,dž:`dz`,Ǳ:`DZ`,ǲ:`Dz`,ǳ:`dz`,Ǉ:`LJ`,ǈ:`Lj`,ǉ:`lj`,Ǌ:`NJ`,ǋ:`Nj`,ǌ:`nj`,č:`c`,Č:`C`,ć:`c`,Ć:`C`,š:`s`,Š:`S`,ა:`a`,ბ:`b`,გ:`g`,დ:`d`,ე:`e`,ვ:`v`,ზ:`z`,თ:`t`,ი:`i`,კ:`k`,ლ:`l`,მ:`m`,ნ:`n`,ო:`o`,პ:`p`,ჟ:`zh`,რ:`r`,ს:`s`,ტ:`t`,უ:`u`,ფ:`f`,ქ:`q`,ღ:`gh`,ყ:`y`,შ:`sh`,ჩ:`ch`,ც:`ts`,ძ:`dz`,წ:`ts`,ჭ:`ch`,ხ:`kh`,ჯ:`j`,ჰ:`h`,Ё:`E`,ё:`e`,Ы:`Y`,ы:`y`,Э:`E`,э:`e`,І:`I`,і:`i`,Ѳ:`F`,ѳ:`f`,Ѣ:`E`,ѣ:`e`,Ѵ:`I`,ѵ:`i`,Є:`Je`,є:`je`,Ѥ:`Je`,ѥ:`je`,Ꙋ:`U`,ꙋ:`u`,Ѡ:`O`,ѡ:`o`,Ѿ:`Ot`,ѿ:`ot`,Ѫ:`U`,ѫ:`u`,Ѧ:`Ja`,ѧ:`ja`,Ѭ:`Ju`,ѭ:`ju`,Ѩ:`Ja`,ѩ:`Ja`,Ѯ:`Ks`,ѯ:`ks`,Ѱ:`Ps`,ѱ:`ps`,Ґ:`G`,ґ:`g`,Ї:`Yi`,ї:`yi`,Ә:`A`,Ғ:`G`,Қ:`Q`,Ң:`N`,Ө:`O`,Ұ:`U`,Ү:`U`,Һ:`H`,ә:`a`,ғ:`g`,қ:`q`,ң:`n`,ө:`o`,ұ:`u`,ү:`u`,һ:`h`,ď:`d`,Ď:`D`,ě:`e`,Ě:`E`,ř:`r`,Ř:`R`,ť:`t`,Ť:`T`,ů:`u`,Ů:`U`,ą:`a`,ę:`e`,ł:`l`,ń:`n`,ś:`s`,ź:`z`,ż:`z`,Ą:`A`,Ę:`E`,Ł:`L`,Ń:`N`,Ś:`S`,Ź:`Z`,Ż:`Z`,ā:`a`,ģ:`g`,ī:`i`,ķ:`k`,ļ:`l`,ņ:`n`,ū:`u`,Ā:`A`,Ģ:`G`,Ī:`I`,Ķ:`k`,Ļ:`L`,Ņ:`N`,Ū:`U`,Ả:`A`,Ạ:`A`,Ắ:`A`,Ằ:`A`,Ẳ:`A`,Ẵ:`A`,Ặ:`A`,Ấ:`A`,Ầ:`A`,Ẩ:`A`,Ẫ:`A`,Ậ:`A`,ả:`a`,ạ:`a`,ắ:`a`,ằ:`a`,ẳ:`a`,ẵ:`a`,ặ:`a`,ấ:`a`,ầ:`a`,ẩ:`a`,ẫ:`a`,ậ:`a`,Ẻ:`E`,Ẽ:`E`,Ẹ:`E`,Ế:`E`,Ề:`E`,Ể:`E`,Ễ:`E`,Ệ:`E`,ẻ:`e`,ẽ:`e`,ẹ:`e`,ế:`e`,ề:`e`,ể:`e`,ễ:`e`,ệ:`e`,Ỉ:`I`,Ị:`I`,ỉ:`i`,ị:`i`,Ỏ:`O`,Ọ:`O`,Ố:`O`,Ồ:`O`,Ổ:`O`,Ỗ:`O`,Ộ:`O`,Ớ:`O`,Ờ:`O`,Ở:`O`,Ỡ:`O`,Ợ:`O`,ỏ:`o`,ọ:`o`,ố:`o`,ồ:`o`,ổ:`o`,ỗ:`o`,ộ:`o`,ớ:`o`,ờ:`o`,ở:`o`,ỡ:`o`,ợ:`o`,Ủ:`U`,Ụ:`U`,Ứ:`U`,Ừ:`U`,Ử:`U`,Ữ:`U`,Ự:`U`,ủ:`u`,ụ:`u`,ứ:`u`,ừ:`u`,ử:`u`,ữ:`u`,ự:`u`,Ỳ:`Y`,Ỷ:`Y`,Ỹ:`Y`,Ỵ:`Y`,ỳ:`y`,ỷ:`y`,ỹ:`y`,ỵ:`y`,ا:`a`,ب:`b`,پ:`p`,ت:`t`,ث:`th`,ج:`g`,چ:`ch`,ح:`h`,خ:`kh`,د:`d`,ذ:`th`,ر:`r`,ز:`z`,س:`s`,ش:`sh`,ص:`s`,ض:`d`,ط:`t`,ظ:`th`,ع:`aa`,غ:`gh`,ف:`f`,ق:`k`,ک:`k`,گ:`g`,ل:`l`,ژ:`zh`,ك:`k`,م:`m`,ن:`n`,ه:`h`,و:`o`,ی:`y`,آ:`a`,"٠":`0`,"١":`1`,"٢":`2`,"٣":`3`,"٤":`4`,"٥":`5`,"٦":`6`,"٧":`7`,"٨":`8`,"٩":`9`,أ:`a`,ي:`y`,إ:`a`,ؤ:`o`,ئ:`y`,ء:`aa`,ђ:`dj`,ћ:`c`,Ђ:`Dj`,Ћ:`C`,ə:`e`,Ə:`E`,ß:`ss`,ẞ:`SS`,ভ্ল:`vl`,পশ:`psh`,ব্ধ:`bdh`,ব্জ:`bj`,ব্দ:`bd`,ব্ব:`bb`,ব্ল:`bl`,ভ:`v`,ব:`b`,চ্ঞ:`cNG`,চ্ছ:`cch`,চ্চ:`cc`,ছ:`ch`,চ:`c`,ধ্ন:`dhn`,ধ্ম:`dhm`,দ্ঘ:`dgh`,দ্ধ:`ddh`,দ্ভ:`dv`,দ্ম:`dm`,ড্ড:`DD`,ঢ:`Dh`,ধ:`dh`,দ্গ:`dg`,দ্দ:`dd`,ড:`D`,দ:`d`,"।":`.`,ঘ্ন:`Ghn`,গ্ধ:`Gdh`,গ্ণ:`GN`,গ্ন:`Gn`,গ্ম:`Gm`,গ্ল:`Gl`,জ্ঞ:`jNG`,ঘ:`Gh`,গ:`g`,হ্ণ:`hN`,হ্ন:`hn`,হ্ম:`hm`,হ্ল:`hl`,হ:`h`,জ্ঝ:`jjh`,ঝ:`jh`,জ্জ:`jj`,জ:`j`,ক্ষ্ণ:`kxN`,ক্ষ্ম:`kxm`,ক্ষ:`ksh`,কশ:`ksh`,ক্ক:`kk`,ক্ট:`kT`,ক্ত:`kt`,ক্ল:`kl`,ক্স:`ks`,খ:`kh`,ক:`k`,ল্ভ:`lv`,ল্ধ:`ldh`,লখ:`lkh`,লঘ:`lgh`,লফ:`lph`,ল্ক:`lk`,ল্গ:`lg`,ল্ট:`lT`,ল্ড:`lD`,ল্প:`lp`,ল্ম:`lm`,ল্ল:`ll`,ল্ব:`lb`,ল:`l`,ম্থ:`mth`,ম্ফ:`mf`,ম্ভ:`mv`,মপ্ল:`mpl`,ম্ন:`mn`,ম্প:`mp`,ম্ম:`mm`,ম্ল:`ml`,ম্ব:`mb`,ম:`m`,"০":`0`,"১":`1`,"২":`2`,"৩":`3`,"৪":`4`,"৫":`5`,"৬":`6`,"৭":`7`,"৮":`8`,"৯":`9`,ঙ্ক্ষ:`Ngkx`,ঞ্ছ:`nch`,ঙ্ঘ:`ngh`,ঙ্খ:`nkh`,ঞ্ঝ:`njh`,ঙ্গৌ:`ngOU`,ঙ্গৈ:`ngOI`,ঞ্চ:`nc`,ঙ্ক:`nk`,ঙ্ষ:`Ngx`,ঙ্গ:`ngo`,ঙ্ম:`Ngm`,ঞ্জ:`nj`,ন্ধ:`ndh`,ন্ঠ:`nTh`,ণ্ঠ:`NTh`,ন্থ:`nth`,ঙ্গা:`nga`,ঙ্গি:`ngi`,ঙ্গী:`ngI`,ঙ্গু:`ngu`,ঙ্গূ:`ngU`,ঙ্গে:`nge`,ঙ্গো:`ngO`,ণ্ঢ:`NDh`,নশ:`nsh`,ঙর:`Ngr`,ঞর:`NGr`,"ংর":`ngr`,ঙ:`Ng`,ঞ:`NG`,"ং":`ng`,ন্ন:`nn`,ণ্ণ:`NN`,ণ্ন:`Nn`,ন্ম:`nm`,ণ্ম:`Nm`,ন্দ:`nd`,ন্ট:`nT`,ণ্ট:`NT`,ন্ড:`nD`,ণ্ড:`ND`,ন্ত:`nt`,ন্স:`ns`,ন:`n`,ণ:`N`,"ৈ":`OI`,"ৌ":`OU`,"ো":`O`,ঐ:`OI`,ঔ:`OU`,অ:`o`,ও:`oo`,ফ্ল:`fl`,প্ট:`pT`,প্ত:`pt`,প্ন:`pn`,প্প:`pp`,প্ল:`pl`,প্স:`ps`,ফ:`f`,প:`p`,"ৃ":`rri`,ঋ:`rri`,রর‍্য:`rry`,"্র্য":`ry`,"্রর":`rr`,ড়্গ:`Rg`,ঢ়:`Rh`,ড়:`R`,র:`r`,"্র":`r`,শ্ছ:`Sch`,ষ্ঠ:`ShTh`,ষ্ফ:`Shf`,স্ক্ল:`skl`,স্খ:`skh`,স্থ:`sth`,স্ফ:`sf`,শ্চ:`Sc`,শ্ত:`St`,শ্ন:`Sn`,শ্ম:`Sm`,শ্ল:`Sl`,ষ্ক:`Shk`,ষ্ট:`ShT`,ষ্ণ:`ShN`,ষ্প:`Shp`,ষ্ম:`Shm`,স্প্ল:`spl`,স্ক:`sk`,স্ট:`sT`,স্ত:`st`,স্ন:`sn`,স্প:`sp`,স্ম:`sm`,স্ল:`sl`,শ:`S`,ষ:`Sh`,স:`s`,"ু":`u`,উ:`u`,অ্য:`oZ`,ত্থ:`tth`,ৎ:`tt`,ট্ট:`TT`,ট্ম:`Tm`,ঠ:`Th`,ত্ন:`tn`,ত্ম:`tm`,থ:`th`,ত্ত:`tt`,ট:`T`,ত:`t`,অ্যা:`AZ`,"া":`a`,আ:`a`,য়া:`ya`,য়:`y`,"ি":`i`,ই:`i`,"ী":`ee`,ঈ:`ee`,"ূ":`uu`,ঊ:`uu`,"ে":`e`,এ:`e`,য:`z`,"্য":`Z`,ইয়:`y`,ওয়:`w`,"্ব":`w`,এক্স:`x`,"ঃ":`:`,"ঁ":`nn`,"্‌":``,"˚":`0`,"¹":`1`,"²":`2`,"³":`3`,"⁴":`4`,"⁵":`5`,"⁶":`6`,"⁷":`7`,"⁸":`8`,"⁹":`9`,"₀":`0`,"₁":`1`,"₂":`2`,"₃":`3`,"₄":`4`,"₅":`5`,"₆":`6`,"₇":`7`,"₈":`8`,"₉":`9`,"௦":`0`,"௧":`1`,"௨":`2`,"௩":`3`,"௪":`4`,"௫":`5`,"௬":`6`,"௭":`7`,"௮":`8`,"௯":`9`,"௰":`10`,"௱":`100`,"௲":`1000`,Ꜳ:`AA`,ꜳ:`aa`,Ꜵ:`AO`,ꜵ:`ao`,Ꜷ:`AU`,ꜷ:`au`,Ꜹ:`AV`,ꜹ:`av`,Ꜻ:`av`,ꜻ:`av`,Ꜽ:`AY`,ꜽ:`ay`,ȸ:`db`,ʣ:`dz`,ʥ:`dz`,ʤ:`dezh`,"🙰":`et`,ﬀ:`ff`,ﬃ:`ffi`,ﬄ:`ffl`,ﬁ:`fi`,ﬂ:`fl`,ʩ:`feng`,ʪ:`ls`,ʫ:`lz`,ɮ:`lezh`,ȹ:`qp`,ʨ:`tc`,ʦ:`ts`,ʧ:`tesh`,Ꝏ:`OO`,ꝏ:`oo`,ﬆ:`st`,ﬅ:`st`,Ꜩ:`TZ`,ꜩ:`tz`,ᵫ:`ue`,Aι:`Ai`,αι:`ai`,ἀ:`a`,ἁ:`a`,ἂ:`a`,ἃ:`a`,ἄ:`a`,ἅ:`a`,ἆ:`a`,ἇ:`a`,Ἀ:`A`,Ἁ:`A`,Ἂ:`A`,Ἃ:`A`,Ἄ:`A`,Ἅ:`A`,Ἆ:`A`,Ἇ:`A`,ᾰ:`a`,ᾱ:`a`,ᾲ:`a`,ᾳ:`a`,ᾴ:`a`,ᾶ:`a`,ᾷ:`a`,Ᾰ:`A`,Ᾱ:`A`,Ὰ:`A`,Ά:`A`,ᾼ:`A`,A̧:`A`,a̧:`a`,Ⱥ:`A`,ⱥ:`a`,Ȧ:`A`,ȧ:`a`,Ɓ:`B`,C̈:`C`,c̈:`c`,C̨:`C`,c̨:`c`,Ȼ:`C`,ȼ:`c`,C̀:`C`,c̀:`c`,C̣:`C`,c̣:`c`,C̄:`C`,c̄:`c`,C̃:`C`,c̃:`c`,Ȩ:`E`,ȩ:`e`,Ɇ:`E`,ɇ:`e`,I̧:`I`,i̧:`i`,Ɨ:`I`,ɨ:`i`,i:`i`,J́́:`J`,j́:`j`,J̀̀:`J`,j̀:`j`,J̈:`J`,j̈:`j`,J̧:`J`,j̧:`j`,J̨:`J`,j̨:`j`,Ɉ:`J`,ɉ:`j`,J̌:`J`,ǰ:`j`,J̇:`J`,j:`j`,J̣:`J`,j̣:`j`,J̄:`J`,j̄:`j`,J̃:`J`,j̃:`j`,ĸ:`k`,L̀:`L`,l̀:`l`,L̂:`L`,l̂:`l`,L̈:`L`,l̈:`l`,L̨:`L`,l̨:`l`,Ƚ:`L`,ƚ:`l`,L̇:`L`,l̇:`l`,Ḷ:`L`,ḷ:`l`,L̄:`L`,l̄:`l`,L̃:`L`,l̃:`l`,Ŋ:`N`,ŋ:`n`,Ǹ:`N`,ǹ:`n`,N̂:`N`,n̂:`n`,N̈:`N`,n̈:`n`,N̨:`N`,n̨:`n`,Ꞥ:`N`,ꞥ:`n`,Ṅ:`N`,ṅ:`n`,Ṇ:`N`,ṇ:`n`,N̄:`N`,n̄:`n`,O̧:`O`,o̧:`o`,Ǫ:`O`,ǫ:`o`,Ɵ:`O`,ɵ:`o`,Ȯ:`O`,ȯ:`o`,S̀:`S`,s̀:`s`,Ŝ̀:`S`,S̈:`S`,s̈:`s`,S̨:`S`,s̨:`s`,Ꞩ:`S`,ꞩ:`s`,Ṡ:`S`,ṡ:`s`,Ṣ:`S`,ṣ:`s`,S̄:`S`,s̄:`s`,S̃:`S`,s̃:`s`,T́:`T`,t́:`t`,T̀:`T`,t̀:`t`,T̂:`T`,t̂:`t`,T̈:`T`,ẗ:`t`,T̨:`T`,t̨:`t`,Ⱦ:`T`,ⱦ:`t`,Ṫ:`T`,ṫ:`t`,Ṭ:`T`,ṭ:`t`,T̄:`T`,t̄:`t`,T̃:`T`,t̃:`t`,U̧:`U`,u̧:`u`,Ʉ:`U`,ʉ:`u`,U̇:`U`,u̇:`u`,Ʊ:`U`,ʊ:`u`,Ẁ:`W`,ẁ:`w`,Ẃ:`W`,ẃ:`w`,Ẅ:`W`,ẅ:`w`,Ꙗ:`Ja`,ꙗ:`ja`,Y̧:`Y`,y̧:`y`,Y̨:`Y`,y̨:`y`,Ɏ:`Y`,ɏ:`y`,Y̌:`Y`,y̌:`y`,Ẏ:`Y`,ẏ:`y`,Ȳ:`Y`,ȳ:`y`,Z̀:`Z`,z̀:`z`,Ẑ:`Z`,ẑ:`z`,Z̈:`Z`,z̈:`z`,Z̧:`Z`,z̧:`z`,Z̨:`Z`,z̨:`z`,Ƶ:`Z`,ƶ:`z`,Ẓ:`Z`,ẓ:`z`,Z̄:`Z`,z̄:`z`,Z̃:`Z`,z̃:`z`,"\xA0":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `,"\u2028":` `,"\u2029":` `,"​":` `," ":` `," ":` `,"　":` `,ﾠ:` `,"«":`<<`,"»":`>>`,"‘":`'`,"’":`'`,"‚":`'`,"‛":`'`,"“":`"`,"”":`"`,"„":`"`,"‟":`"`,"‹":`'`,"›":`'`,"–":`-`,"—":`-`,"…":`...`,"€":`EUR`,$:`$`,"₢":`Cr`,"₣":`Fr.`,"£":`PS`,"₤":`L.`,ℳ:`M`,"₥":`mil`,"₦":`N`,"₧":`Pts`,"₨":`Rs`,රු:`LKR`,ரூ:`LKR`,"௹":`Rs`,रू:`NPR`,"₹":`Rs`,"૱":`Rs`,"₩":`W`,"₪":`NS`,"₸":`KZT`,"₫":`D`,"֏":`AMD`,"₭":`K`,"₺":`TL`,"₼":`AZN`,"₮":`T`,"₯":`Dr`,"₲":`PYG`,"₾":`GEL`,"₳":`ARA`,"₴":`UAH`,"₽":`RUB`,"₵":`GHS`,"₡":`CL`,"¢":`c`,"¥":`YEN`,円:`JPY`,"৳":`BDT`,元:`CNY`,"﷼":`SAR`,"៛":`KR`,"₠":`ECU`,"¤":`$?`,"฿":`THB`,"؋":`AFN`};function Mc(e,t=jc){e=e.normalize(`NFC`);let n=``,r;for(let i=0;i<e.length;i++)r=e.charAt(i),n+=typeof t[r]==`string`?t[r]:r;return n}function Nc(e,t={}){let n={allowNonAlphaStart:!1,handleCasing:`camel`,...t};var r=e.replace(/<(.*?)>/g,``);r=r.replace(/['"‘’“”ʻ\[\]\(\)\{\}:]/g,``),r=r.toLowerCase(),r=Mc(r),n.allowNonAlphaStart||(r=r.replace(/^[^a-z]+/,``));let i=r.split(/[^a-z0-9]+/).filter(Boolean);if(r=``,n.handleCasing===`snake`)return i.join(`_`);for(let e=0;e<i.length;e++)n.handleCasing!==`pascal`&&e===0?r+=i[e]:r+=i[e].charAt(0).toUpperCase()+i[e].substring(1);return r}function Pc(e,t={}){let n={prefix:``,suffix:``,...t},r=Nc(e,{handleCasing:`snake`}).toUpperCase();return r?`${n.prefix}${r}${n.suffix}`:``}function Fc(e){let t=e.replace(/<(.*?)>/g,``);return t=t.toLowerCase(),t=Mc(t),t=t.replace(/^[^a-z]+/,``),t=t.replace(/[^a-z0-9]+$/,``),t.split(/[^a-z0-9]+/).filter(Boolean).join(`-`)}function Ic(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Lc(){return Math.floor(Math.random()*1e6)}var Rc=new WeakMap,zc=class e{constructor(){this.queue=[],this.workers=[],T(this,Rc,null),C(Rc,this,new AbortController);for(let e=0;e<3;e++)this.workers.push(new Uc(this))}load(t=document,n=`[data-sizes]`){t.querySelectorAll(n).forEach(t=>{if(Ec(t))this.addToQueue(t);else{let n=`thumb${Lc()}`;e.invisibleThumbs[n]=[this,t];let r=()=>{e.invisibleThumbs[n]&&Ec(t)&&(delete e.invisibleThumbs[n],this.addToQueue(t))};document.addEventListener(`scroll`,r,{signal:S(Rc,this)?.signal}),window.addEventListener(`resize`,r,{signal:S(Rc,this)?.signal})}})}addToQueue(e){this.queue.push(e),this.workers.forEach(e=>{e.active||e.loadNext()})}static retryAll(){for(let t in e.invisibleThumbs){let n=e.invisibleThumbs[t];if(!n)continue;let[r,i]=n;delete e.invisibleThumbs[t],r.load(i.parentElement??document)}}destroy(){this.workers.forEach(e=>e.deactivate()),S(Rc,this)?.abort();for(let t in e.invisibleThumbs)e.invisibleThumbs[t]?.[0]===this&&delete e.invisibleThumbs[t]}};zc.invisibleThumbs={};var Bc=new WeakMap,Vc=new WeakMap,Hc=new WeakMap,Uc=class{constructor(e){this.active=!1,this.container=void 0,T(this,Bc,null),T(this,Vc,null),T(this,Hc,null),C(Bc,this,e)}activate(){this.active||(this.active=!0,this.clearInterval(),C(Vc,this,setInterval(()=>{this.loadNextIfRemoved()},500)))}deactivate(){this.active&&(this.active=!1,this.clearInterval(),this.clearTimeout())}clearInterval(){S(Vc,this)&&(clearInterval(S(Vc,this)),C(Vc,this,null))}clearTimeout(){S(Hc,this)&&(clearTimeout(S(Hc,this)),C(Hc,this,null))}loadNext(){if(this.clearTimeout(),this.container=S(Bc,this)?.queue.shift(),this.container===void 0){this.deactivate();return}if(this.loadNextIfRemoved())return;if(this.container.querySelectorAll(`img`).length>0){this.loadNext();return}this.activate(),C(Hc,this,setTimeout(()=>{this.loadNext()},3e4));let e=document.createElement(`img`);e.sizes=this.container.getAttribute(`data-sizes`)??``,e.srcset=this.container.getAttribute(`data-srcset`)??``,e.alt=this.container.getAttribute(`data-alt`)??``,e.setAttribute(`data-animated`,this.container.getAttribute(`data-animated`)??``),e.src=this.container.getAttribute(`data-src`)??``,e.onload=()=>this.loadNext(),e.onabort=()=>this.loadNext(),e.onerror=()=>this.loadNext(),this.container.appendChild(e)}loadNextIfRemoved(){return this.container&&!document.body.contains(this.container)?(this.loadNext(),!0):!1}},Wc=o`
  /*
   * A label link is decorated like any other link. ::slotted() only reaches a
   * link slotted straight into the chip; one nested a level down (inside a
   * craft-truncate, as element chips render it) gets the same treatment
   * through the custom properties, which it inherits and craft-truncate
   * applies to its own slotted links.
   */
  :host {
    display: contents;
    --c-truncate-link-decoration: var(--c-link-decoration);
    --c-truncate-link-hover-decoration: var(--c-link-decoration-hover);
  }

  /*
   * On a colored chip a blue link would clash with the fill, so links take the
   * chip's text color, and are underlined so they still stand apart from it.
   * Neutral chips keep the default link styling (a black chip's contents take
   * the dark theme's). A plain chip has no fill to clash with, so it keeps the
   * default link styling too. Set on the host, so the truncate properties
   * above resolve to them too.
   */
  :host([variant]:not([appearance~='plain'])),
  ${To(`:not([appearance~='plain'])`)} {
    --c-text-link: currentColor;
    --c-link-decoration: underline;
    --c-link-decoration-hover: none;
  }

  /* Base */

  /*
   * --_chip-gap separates the parts and insets the first one, and stays the
   * same at every size; --_chip-spacing insets the last part and the block
   * edges, and grows with the size. A status sits closer to its label.
   */
  .cp-chip {
    --_chip-spacing: 0.25em;
    --_chip-gap: var(--c-chip-gap, var(--c-spacing-md));
    --_chip-status-gap: calc(var(--_chip-gap) * 0.75);
    /* Whole pixels, so a chip is never a fraction of a pixel tall: the
       remainder would round onto one side, leaving uneven space above and
       below its parts, and shift everything after it off the pixel grid. */
    --_chip-block-padding: round(calc(var(--_chip-spacing) / 2), 1px);
    --_thumb-size: calc(30rem / 16);
    --_radius: var(--c-radius-md);
    --_border-width: var(--c-chip-border-width, 1px);
    /* Sized to its content, but never wider than its parent: the label
       truncates instead. */
    box-sizing: border-box;
    min-width: 0;
    max-width: 100%;
    /* Whatever leads the chip sits as far in as the parts are apart, at every
       size; a thumbnail is the exception, below. */
    padding-block: 0;
    padding-inline: var(--_chip-gap) var(--_chip-spacing);
    display: inline-flex;
    /* Centered on the line, rather than sitting on its baseline: an inline
       flex box's baseline comes from its first item, which for a thumbnail
       is the image's bottom edge, lifting the chip above the text's
       descenders. */
    vertical-align: middle;
    gap: var(--_chip-gap);
    border-radius: var(--_radius);
    align-items: center;
    box-shadow: var(--c-chip-shadow, var(--c-shadow-xs));
    background-color: var(--c-chip-fill, var(--c-surface-raised));

    border-width: var(--_border-width);
    border-style: var(--c-chip-border-style, solid);
    overflow: clip;
  }

  :host([full-width]) .cp-chip {
    display: flex;
    flex: 1 1 auto;
  }

  /* Sizes */

  .cp-chip--small {
    --_chip-spacing: 0.25em;
  }

  /* As tall as a small suffix button, so adding one doesn't change the
     chip's height. */
  .cp-chip--small .cp-chip__body {
    min-height: var(--c-size-control-sm);
  }

  /* Medium and large are as tall as a button of the same size, so the two
     line up side by side. */
  .cp-chip--medium {
    --_chip-spacing: 0.5em;
    --_thumb-size: var(--c-size-control-md);
    min-height: var(--c-size-control-md);
  }

  /* Outside the plain appearance, small chips are as tall as a medium
     button, thumbnail included: it's inset by the border and the padding it
     keeps from the chip's edges. */
  .cp-chip--small:not(.cp-chip--plain) {
    --_thumb-size: calc(
      var(--c-size-control-md) - var(--_border-width) * 2 -
        var(--_chip-block-padding) * 2
    );
    min-height: var(--c-size-control-md);
  }

  .cp-chip--xsmall {
    --_thumb-size: calc(
      var(--c-size-control-sm) - var(--_border-width) * 2 -
        var(--_chip-block-padding) * 2
    );
    min-height: var(--c-size-control-sm);
    font-size: var(--c-text-sm);
  }

  .cp-chip--large {
    --_chip-spacing: 1em;
    --_thumb-size: calc(40rem / 16);
    min-height: var(--c-size-control-lg);
  }

  /* Thumbnail sizes, overriding the one the chip's size gives it: two
     classes, so they win over the sizes' own. sm keeps the thumbnail a small
     chip gives it. From lg, the corners grow along with the thumbnail. */
  .cp-chip.cp-chip--thumb-md {
    --_thumb-size: calc(60rem / 16);
  }

  .cp-chip.cp-chip--thumb-lg {
    --_thumb-size: calc(120rem / 16);
  }

  .cp-chip.cp-chip--thumb-xl {
    --_thumb-size: calc(180rem / 16);
  }

  .cp-chip.cp-chip--thumb-2xl {
    --_thumb-size: calc(240rem / 16);
  }

  .cp-chip.cp-chip--thumb-lg,
  .cp-chip.cp-chip--thumb-xl,
  .cp-chip.cp-chip--thumb-2xl {
    --_radius: var(--c-radius-lg);
  }

  .cp-chip.cp-chip--rounded {
    --_radius: var(--c-radius-full);
  }

  /* Alignment */

  .cp-chip--align-start {
    align-items: start;
  }

  .cp-chip--align-end {
    align-items: end;
  }

  .cp-chip--align-start .cp-chip__main {
    align-items: start;
  }

  .cp-chip--align-end .cp-chip__main {
    align-items: end;
  }

  /*
   * Off-center, the prefix and status are as tall as one line of the label
   * plus the label's block padding, so an icon or status centers against the
   * first (or last) line instead of sitting flush with the chip's edge.
   */
  .cp-chip--align-start :is(.cp-chip__prefix, .cp-chip__status),
  .cp-chip--align-end :is(.cp-chip__prefix, .cp-chip__status) {
    min-height: calc(1lh + var(--_chip-block-padding) * 2);
  }

  /* Prefix */

  /* Only the label gives way when the chip is too narrow. */
  .cp-chip__select,
  .cp-chip__prefix,
  .cp-chip__status,
  .cp-chip__suffix {
    flex: none;
  }

  .cp-chip__prefix {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: var(--_chip-gap);
  }

  /* Clicking a selectable chip selects it, so its label doesn't get a text
     cursor, as if it were text to select. Links within it keep theirs. */
  .cp-chip--selectable {
    cursor: default;
  }

  /* The gap spaces the checkbox, so the browser's default margins would
     double up with it. */
  .cp-chip__select {
    margin: 0;
  }

  /* The checkbox lives in the shadow root, out of reach of the global
     craft-checkbox styles, so it's drawn the same way here. On a colored chip
     it takes the chip's text color, like the chip's other controls, and once
     checked the mark is cut out of the fill, so the chip shows through. */
  .cp-chip__select {
    appearance: none;
    flex-shrink: 0;
    box-sizing: border-box;
    width: var(--c-chip-checkbox-size, calc(14rem / 16));
    height: var(--c-chip-checkbox-size, calc(14rem / 16));
    border: var(--c-form-control-border-width, 1px)
      var(--c-form-control-border-style, solid) currentColor;
    border-radius: var(--c-checkbox-radius, var(--c-radius-sm));
    background-color: transparent;
    color: inherit;
    cursor: pointer;
  }

  .cp-chip__select:checked {
    border-color: transparent;
    background-color: currentColor;
    mask:
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 255.8 234.9'%3E%3Cpath d='M245.9,4.6c-10.7-7.8-25.7-5.4-33.5,5.3l-119.4,164.2-52.1-52.1c-9.4-9.4-24.6-9.4-33.9,0-9.3,9.4-9.4,24.6,0,33.9l72,72c5,5,11.8,7.5,18.8,7s13.4-4.1,17.5-9.8L251.2,38.1c7.8-10.7,5.4-25.7-5.3-33.5Z'/%3E%3C/svg%3E")
        center / 65% no-repeat exclude,
      linear-gradient(#000 0 0);
  }

  .cp-chip__select:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  :host(:is([data-color='white'], :not([data-color]))) .cp-chip__select {
    border-color: var(--c-form-control-border-color);
    background-color: var(--c-input-fill);
  }

  :host(:is([data-color='white'], :not([data-color])))
    .cp-chip__select:checked {
    border-color: transparent;
    background-color: var(--c-color-accent-fill-loud);
  }

  @media (forced-colors: active) {
    .cp-chip__select,
    :host(:is([data-color='white'], :not([data-color]))) .cp-chip__select {
      appearance: auto;
      mask: none;
      border: revert;
      background: revert;
    }
  }

  .cp-chip__status,
  .cp-chip__icon {
    display: inline-flex;
    align-items: center;
  }

  /* An icon's box is wider than most glyphs so icons line up in a column; in
     a chip that would add to the gap, so the box hugs the glyph instead. */
  .cp-chip__icon craft-icon,
  .cp-chip__icon::slotted(craft-icon) {
    width: auto;
  }

  /* As wide as a status dot (craft-indicator's \`md\` size plus its border),
     so a wider status, like the draft icon, overflows evenly and lines up
     with the dots. */
  ::slotted([slot='status']) {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    inline-size: calc(0.6em + 2px);
  }

  /* A status, such as the draft icon, isn't the chip's own: only its icon
     takes the chip's color. A solid fill keeps its contrasting text color. */
  :host(:not([appearance~='solid'])) ::slotted([slot='status']) {
    color: var(--c-text-default);
  }

  .cp-chip__thumbnail {
    --c-thumbnail-size: var(--_thumb-size);
    /* Concentric with the chip's corner: inset by the border and padding,
       the corner shrinks by as much, though never to a square. */
    --c-thumbnail-image-radius: max(
      2px,
      calc(var(--_radius) - var(--_border-width) - var(--_chip-block-padding))
    );
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--_thumb-size);
    aspect-ratio: 1;
    padding-block: var(--_chip-block-padding);
  }

  /* A thumbnail or custom prefix content fills more of the chip's height, so
     leading the chip it sits as far in as it does from the top and bottom. */
  .cp-chip--leads-with-thumbnail,
  .cp-chip--leads-with-prefix {
    padding-inline-start: var(--_chip-block-padding);
  }

  /*
   * An image slotted straight in has no craft-thumbnail around it to size it,
   * so it would render at its natural size and spill out of the prefix.
   */
  .cp-chip__thumbnail::slotted(img),
  .cp-chip__thumbnail::slotted(svg) {
    flex: none;
    inline-size: var(--c-thumbnail-size);
    block-size: var(--c-thumbnail-size);
    object-fit: cover;
    border-radius: var(--c-thumbnail-image-radius);
  }

  /* Body */

  .cp-chip__main {
    display: flex;
    align-items: center;
    gap: var(--_chip-status-gap);
    flex: 1 1 auto;
    min-width: 0;
  }

  .cp-chip__body {
    padding-block: var(--_chip-block-padding);
    display: flex;
    gap: var(--c-spacing-sm);
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Ending the chip, the label leaves as much room as a suffix button does. */
  .cp-chip__main:last-child {
    padding-inline-end: var(--_chip-spacing);
  }

  .cp-chip__body::slotted(a) {
    text-decoration-line: var(--c-link-decoration);
  }

  .cp-chip__body::slotted(a:hover) {
    text-decoration-line: var(--c-link-decoration-hover);
  }

  /* Suffix */

  .cp-chip__suffix {
    margin-inline-start: calc(var(--c-spacing-xs) - var(--_chip-gap));
    padding-block: var(--_chip-block-padding);
    display: flex;
    flex-direction: column;
  }

  /*
   * Stacked: the prefix sits above the label, both centered, for a tile in a
   * grid. The checkbox and suffix share a row along the top, so reaching for
   * one never lands on the thumbnail. Grid areas place each part, so a part
   * that isn't rendered leaves its cell empty rather than shifting the rest.
   */
  .cp-chip--stacked {
    display: inline-grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    grid-template-areas:
      'prefix prefix prefix'
      'main main main';
    justify-items: center;
    row-gap: var(--_chip-block-padding);
    padding: var(--_chip-block-padding);
  }

  :host([full-width]) .cp-chip--stacked {
    display: grid;
  }

  :host([full-width][prefix-placement='block-start']) {
    display: block;
    flex: 1 1 auto;
    container: chip / inline-size;
  }

  /* Conditions can't read var(), so 18px is a large chip's padding and border on both sides. */
  @container chip (inline-size < calc(240rem / 16 + 18px)) {
    .cp-chip--stacked.cp-chip--thumb-2xl {
      --_thumb-size: calc(180rem / 16);
    }
  }

  @container chip (inline-size < calc(180rem / 16 + 18px)) {
    .cp-chip--stacked:is(.cp-chip--thumb-2xl, .cp-chip--thumb-xl) {
      --_thumb-size: calc(120rem / 16);
    }
  }

  @container chip (inline-size < calc(120rem / 16 + 18px)) {
    .cp-chip--stacked:is(
      .cp-chip--thumb-2xl,
      .cp-chip--thumb-xl,
      .cp-chip--thumb-lg
    ) {
      --_thumb-size: calc(60rem / 16);
    }
  }

  .cp-chip--stacked.cp-chip--has-header {
    grid-template-areas:
      'select . suffix'
      'prefix prefix prefix'
      'main main main';
  }

  .cp-chip--stacked .cp-chip__select {
    grid-area: select;
    justify-self: start;
  }

  /* The header row is as tall as a checkbox, with or without one, so a
     checkbox sits as far from the top as from the side, and a taller suffix
     centers on it, spilling evenly into the padding above and the gap below. */
  .cp-chip--stacked.cp-chip--has-header {
    grid-template-rows: var(--c-chip-checkbox-size, calc(14rem / 16)) auto auto;
  }

  /* The rows are spaced by the chip's padding and row gap alone, so the
     parts drop the block padding that insets them in an inline chip. */
  .cp-chip--stacked :is(.cp-chip__thumbnail, .cp-chip__body, .cp-chip__suffix) {
    padding-block: 0;
  }

  .cp-chip--stacked .cp-chip__prefix {
    grid-area: prefix;
  }

  /* Clear of the chip's edges, the thumbnail's corners aren't concentric
     with the chip's, so they keep a radius of their own. */
  .cp-chip--stacked .cp-chip__thumbnail {
    --c-thumbnail-image-radius: var(--c-radius-md);
  }

  .cp-chip--stacked .cp-chip__main {
    grid-area: main;
    justify-self: stretch;
    justify-content: center;
    padding-inline-end: 0;
  }

  .cp-chip--stacked .cp-chip__body {
    flex-grow: 0;
  }

  .cp-chip--stacked .cp-chip__suffix {
    grid-area: suffix;
    justify-self: end;
    align-self: center;
    margin-inline-start: 0;
  }

  /*
   * Appearance tiers, mirroring craft-callout so the two read at the same
   * intensity for a given variant. The variant remaps the generic
   * --c-color-* tokens; each tier below picks which loudness of them to use.
   */
  :host([appearance~='solid']) .cp-chip {
    background-color: var(--c-color-fill-loud);
    border-color: var(--c-color-border-loud);
    color: var(--c-color-on-loud);
  }

  :host([appearance~='fill']) .cp-chip {
    background-color: var(--c-color-fill-normal);
    border-color: transparent;
    color: var(--c-color-on-normal);
  }

  :host([appearance~='outline-fill']) .cp-chip {
    background-color: var(--c-color-fill-normal);
    border-color: var(--c-color-border-normal);
    color: var(--c-color-on-normal);
  }

  :host([appearance~='outline']) .cp-chip {
    background-color: transparent;
    border-color: var(--c-color-border-quiet);
    color: var(--c-color-on-quiet);
  }

  /* A plain chip has no fill or border for its color to show on, so its
     label takes the default text color. Only its icon takes the chip's color
     (a status, such as the draft icon, isn't the chip's own; see above). */
  :host([appearance~='plain']) .cp-chip {
    background-color: transparent;
    border-color: transparent;
    color: var(--c-chip-text, var(--c-text-default));
  }

  :host([appearance~='plain']) .cp-chip__icon {
    color: var(--c-color-on-quiet);
  }

  /*
   * Without a color, a chip has no fill of its own: its border and text come
   * from the colors around it, so in a colored card it takes the card's
   * color, and elsewhere the neutral ones.
   */
  :host(:not([data-color]):not([selected])[appearance~='fill']) .cp-chip,
  :host(:not([data-color]):not([selected])[appearance~='outline-fill'])
    .cp-chip,
  :host(:not([data-color]):not([selected])[appearance~='outline']) .cp-chip {
    background-color: transparent;
    border-color: var(--c-color-border-quiet);
    color: var(--c-chip-text, var(--c-text-default));
  }

  /*
   * White chips take the theme-aware raised surface, its border, and the
   * default text color, rather than white's static colors, which stay light in
   * dark mode. Scoped to the two filled tiers so outline and plain stay
   * transparent.
   *
   * The palette is repointed too, for controls that inherit it, like the
   * action menu's button, whose hover tints from --c-color-fill-quiet.
   */
  :host([data-color='white'][appearance~='fill']:not([selected])) .cp-chip,
  :host([data-color='white'][appearance~='outline-fill']:not([selected]))
    .cp-chip {
    --c-color-fill-quiet: var(--c-chip-fill, var(--c-surface-white));
    --c-color-on-quiet: var(--c-chip-text, var(--c-text-default));
    background-color: var(--c-chip-fill, var(--c-surface-white));
    border-color: var(--c-chip-border-color, var(--c-border-raised));
    color: var(--c-chip-text, var(--c-text-default));
  }

  :host([data-color='white'][appearance~='outline']) .cp-chip,
  :host([data-color='white'][appearance~='plain']) .cp-chip {
    --c-color-fill-quiet: transparent;
    --c-color-on-quiet: var(--c-chip-text, var(--c-text-default));
    color: var(--c-chip-text, var(--c-text-default));
  }

  /* Plain: no chrome, so no padding, border, or shadow either. */
  .cp-chip--plain {
    padding-block: 0;
    padding-inline: 0;
    --_border-width: 0px;
    box-shadow: none;
    /* The border's stand-in, drawn inside the edge so it takes no space.
       Invisible, except in forced colors, where it gives the chip an edge. */
    outline: 1px solid transparent;
    outline-offset: -1px;
  }

  /* Over the inset a leading thumbnail would otherwise get, too. */
  .cp-chip--plain.cp-chip--leads-with-thumbnail,
  .cp-chip--plain.cp-chip--leads-with-prefix {
    padding-inline-start: 0;
  }

  .cp-chip--plain .cp-chip__main:last-child {
    padding-inline-end: 0;
  }

  .cp-chip--plain .cp-chip__thumbnail,
  .cp-chip--plain .cp-chip__body,
  .cp-chip--plain .cp-chip__suffix {
    padding-block: 0;
  }

  /* With no padding, the thumbnail's corner is the chip's. */
  .cp-chip--plain .cp-chip__thumbnail {
    --c-thumbnail-image-radius: var(--_radius);
  }

  /*
   * Selected state: the accent fill of a selected thumbnail tile in the
   * element index, with a stronger border, like a selected card's, so the
   * selection stands out from the chips around it.
   *
   * Last in the file so it wins over the appearance tiers of equal
   * specificity: a selected chip stays legible as selected even when it is plain.
   */
  :host([selected]) .cp-chip {
    --c-color-fill-quiet: var(--c-color-accent-fill-quiet);
    background-color: var(--c-color-accent-fill-quiet);
    border-color: var(--c-color-accent-border-normal);
  }

  /* A plain chip has no border to color, so its outline takes the color. */
  :host([selected]) .cp-chip--plain {
    outline-color: var(--c-color-accent-border-normal);
  }

  /*
   * A filled colored chip takes the subtler look of a card's body: a wash of
   * its color's quiet fill, and its quiet border and text. Selected, it takes
   * its color's normal fill, border, and text instead, rather than the accent
   * color. Black, like white, is the same in both themes, so a wash
   * of it would leave its light text unreadable; it keeps its own look.
   */
  :host(
      [data-color]:not([data-color='white'], [data-color='black']):not(
        [selected]
      )[appearance~='fill']
    )
    .cp-chip,
  :host(
      [data-color]:not([data-color='white'], [data-color='black']):not(
        [selected]
      )[appearance~='outline-fill']
    )
    .cp-chip {
    background-color: color-mix(var(--c-color-fill-quiet), transparent 70%);
    color: var(--c-color-on-quiet);
  }

  :host(
      [data-color]:not([data-color='white'], [data-color='black']):not(
        [selected]
      )[appearance~='outline-fill']
    )
    .cp-chip {
    border-color: var(--c-color-border-quiet);
  }

  :host(
      [data-color]:not(
        [data-color='white'],
        [data-color='black']
      )[selected][appearance~='fill']
    )
    .cp-chip,
  :host(
      [data-color]:not(
        [data-color='white']
      )[selected][appearance~='outline-fill']
    )
    .cp-chip {
    /* Controls that tint from these, like the move button, take the chip's
       own color rather than the accent repointing above, with a stronger
       hover and press so they stand out from the fill. */
    --c-color-fill-quiet: var(--c-color-fill-normal);
    --c-color-mix-hover: currentColor 20%;
    --c-color-mix-active: currentColor 30%;
    background-color: var(--c-color-fill-normal);
    border-color: var(--c-color-border-normal);
    color: var(--c-color-on-normal);
  }
`;Object.values({Sm:`sm`,Md:`md`,Lg:`lg`,Xl:`xl`,"2xl":`2xl`});var Gc={sm:Ao.Small,md:Ao.Medium,lg:Ao.Large,xl:Ao.Large,"2xl":Ao.Large},Kc={InlineStart:`inline-start`,BlockStart:`block-start`},qc=new WeakSet,Jc=new WeakMap,Yc=new WeakMap,Xc=new WeakMap,Zc=class extends d{constructor(...e){super(...e),x(this,qc),this.size=null,this.thumbSize=null,this.prefixPlacement=Kc.InlineStart,this.variant=null,this.appearance=nr.OutlineFill,this.alignItems=`center`,this.icon=null,this.showStatus=!1,this.showThumb=!1,this.selectable=!1,this.fullWidth=!1,this.rounded=!1,this.selected=!1,this.selectLabel=null,this.selectDisabled=!1,T(this,Jc,!1),T(this,Yc,new zc),T(this,Xc,new se(this,{characterData:!0,onChange:()=>w(qc,this,$c).call(this)}))}renderSelect(){return m`<input
      type="checkbox"
      class="cp-chip__select"
      part="select"
      .checked=${this.selected}
      ?disabled=${this.selectDisabled}
      aria-label=${this.selectLabel??n(`Select`)}
      @click=${w(qc,this,el)}
      @mousedown=${w(qc,this,tl)}
      @mouseup=${w(qc,this,tl)}
      @change=${w(qc,this,nl)}
    />`}renderPrefix(e){return m`<div class="cp-chip__prefix">
      ${e.prefix?m`<slot name="prefix" part="prefix"></slot>`:i}
      ${e.thumbnail?m`<slot
            class="cp-chip__thumbnail"
            name="thumbnail"
            part="thumbnail"
          ></slot>`:i}
      ${e.icon?m`<slot class="cp-chip__icon" name="icon" part="icon"
            >${this.icon?m`<craft-icon name="${this.icon}"></craft-icon>`:i}</slot
          >`:i}
    </div>`}renderMain(e){return m`<div class="cp-chip__main">
      ${e.status?m`<slot
            class="cp-chip__status"
            name="status"
            part="status"
          ></slot>`:i}
      ${e.body?m`<slot class="cp-chip__body" part="body"></slot>`:i}
    </div>`}connectedCallback(){super.connectedCallback(),this.hasUpdated&&(C(Yc,this,new zc),S(Yc,this).load(this))}disconnectedCallback(){S(Yc,this).destroy(),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),S(Yc,this).load(this)}render(){let e=w(qc,this,il).call(this),t=e.prefix||e.thumbnail||e.icon;return m`
      <div
        part="chip"
        class="${O({"cp-chip":!0,"cp-chip--xsmall":Qc.call(w(qc,this))===`xsmall`,"cp-chip--small":Qc.call(w(qc,this))===`small`,"cp-chip--medium":Qc.call(w(qc,this))===`medium`,"cp-chip--large":Qc.call(w(qc,this))===`large`,[`cp-chip--thumb-${this.thumbSize}`]:this.thumbSize!==null,"cp-chip--stacked":this.prefixPlacement===Kc.BlockStart,"cp-chip--has-header":this.prefixPlacement===Kc.BlockStart&&(this.selectable||e.suffix),"cp-chip--align-start":this.alignItems===`start`,"cp-chip--align-end":this.alignItems===`end`,"cp-chip--plain":this.appearance===nr.Plain,"cp-chip--rounded":this.rounded,"cp-chip--selectable":this.selectable,"cp-chip--show-thumb":this.showThumb,"cp-chip--show-status":this.showStatus,[`cp-chip--leads-with-${w(qc,this,al).call(this,e)}`]:!0})}"
      >
        ${this.selectable?this.renderSelect():i}
        ${t?this.renderPrefix(e):i}
        ${e.status||e.body?this.renderMain(e):i}
        ${e.suffix?m`<slot
              name="suffix"
              class="cp-chip__suffix"
              part="suffix"
            ></slot>`:i}
      </div>
    `}};function Qc(){return this.size??(this.thumbSize?Gc[this.thumbSize]:null)??Ao.Small}function $c(){for(let e of this.querySelectorAll(`craft-button:not([inherit])`))e.closest(`craft-chip`)===this&&e.toggleAttribute(`inherit`,!0)}function el(e){C(Jc,this,e.shiftKey),e.stopPropagation()}function tl(e){e.stopPropagation()}function nl(e){let{checked:t}=e.target;this.selected=t,this.dispatchEvent(new CustomEvent(`craft-selection-change`,{detail:{selected:t,shiftKey:S(Jc,this)},bubbles:!0,composed:!0}))}function rl(e){return Array.from(this.childNodes).some(t=>t instanceof Element?t.slot===e&&(t.localName!==`div`||t.childElementCount!==0||t.textContent.trim()!==``):e===``&&t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!==``)}function il(){return{prefix:w(qc,this,rl).call(this,`prefix`),thumbnail:this.showThumb&&w(qc,this,rl).call(this,`thumbnail`),icon:!!this.icon||w(qc,this,rl).call(this,`icon`),status:w(qc,this,rl).call(this,`status`),body:w(qc,this,rl).call(this,``),suffix:w(qc,this,rl).call(this,`suffix`)}}function al(e){if(this.selectable)return`select`;for(let t of[`prefix`,`thumbnail`,`icon`,`status`])if(e[t])return t;return`body`}Zc.styles=[ie,Wc],r([c()],Zc.prototype,`size`,void 0),r([c({attribute:`thumb-size`,reflect:!0})],Zc.prototype,`thumbSize`,void 0),r([c({attribute:`prefix-placement`,reflect:!0})],Zc.prototype,`prefixPlacement`,void 0),r([c({reflect:!0})],Zc.prototype,`variant`,void 0),r([c({reflect:!0})],Zc.prototype,`appearance`,void 0),r([c({attribute:`align-items`})],Zc.prototype,`alignItems`,void 0),r([c()],Zc.prototype,`icon`,void 0),r([c({attribute:`show-status`,type:Boolean})],Zc.prototype,`showStatus`,void 0),r([c({attribute:`show-thumb`,type:Boolean})],Zc.prototype,`showThumb`,void 0),r([c({type:Boolean})],Zc.prototype,`selectable`,void 0),r([c({type:Boolean,reflect:!0,attribute:`full-width`})],Zc.prototype,`fullWidth`,void 0),r([c({type:Boolean,reflect:!0})],Zc.prototype,`rounded`,void 0),r([c({type:Boolean,reflect:!0})],Zc.prototype,`selected`,void 0),r([c({attribute:`select-label`})],Zc.prototype,`selectLabel`,void 0),r([c({attribute:`select-disabled`,type:Boolean})],Zc.prototype,`selectDisabled`,void 0),customElements.get(`craft-chip`)||customElements.define(`craft-chip`,Zc);var ol=e=>{e.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))},sl=e=>{e.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))},cl=class extends wi(d){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:`tabindex`}}}constructor(){super(),this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`listbox`)}createRenderRoot(){return this}},ll=k(e=>class extends ci(ri(Ei(Rt(Ci(e))))){static get properties(){return{orientation:String,selectionFollowsFocus:{type:Boolean,attribute:`selection-follows-focus`},rotateKeyboardNavigation:{type:Boolean,attribute:`rotate-keyboard-navigation`},hasNoDefaultSelected:{type:Boolean,reflect:!0,attribute:`has-no-default-selected`},_noTypeAhead:{type:Boolean}}}static get styles(){return[...super.styles||[],o`
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
      `}static get scopedElements(){return{...super.scopedElements,"lion-options":cl}}get slots(){return{...super.slots,input:()=>{let e=this.createScopedElement(`lion-options`);return e.setAttribute(`data-tag-name`,`lion-options`),e.registrationTarget=this,e}}}get _inputNode(){return this.querySelector(`[slot="input"]`)}get _listboxNode(){return this._inputNode}get _listboxActiveDescendantNode(){return this._listboxNode.querySelector(`#${this._listboxActiveDescendant}`)}get _listboxSlot(){return this.shadowRoot.querySelector(`slot[name=input]`)}get _scrollTargetNode(){return this._listboxNode}get _activeDescendantOwnerNode(){return this._listboxNode}get activeIndex(){return this.formElements.findIndex(e=>e.active===!0)}set activeIndex(e){if(this.formElements[e]){let t=this.formElements[e];this.__setChildActive(t)}else this.__setChildActive(null)}get checkedIndex(){let e=this.formElements;return this.multipleChoice?e.filter(e=>e.checked).map(t=>e.indexOf(t)):e.indexOf(e.find(e=>e.checked))}set checkedIndex(e){this.setCheckedIndex(e)}constructor(){super(),this.hasNoDefaultSelected=!1,this.orientation=`vertical`,this.rotateKeyboardNavigation=!1,this.selectionFollowsFocus=!1,this._noTypeAhead=!1,this._typeAheadTimeout=1e3,this._listboxActiveDescendant=null,this.__hasInitialSelectedFormElement=!1,this._repropagationRole=`choice-group`,this._listboxReceivesNoFocus=!1,this._oldModelValue=void 0,this._listboxOnKeyDown=this._listboxOnKeyDown.bind(this),this._listboxOnClick=this._listboxOnClick.bind(this),this._listboxOnKeyUp=this._listboxOnKeyUp.bind(this),this._onChildActiveChanged=this._onChildActiveChanged.bind(this),this.__proxyChildModelValueChanged=this.__proxyChildModelValueChanged.bind(this),this.__preventScrollingWithArrowKeys=this.__preventScrollingWithArrowKeys.bind(this),this.__typedChars=[]}connectedCallback(){this._listboxNode&&(this._listboxNode.registrationTarget=this),super.connectedCallback(),this._setupListboxNode(),this.__setupEventListeners(),this.registrationComplete.then(()=>{this.__initInteractionStates()})}firstUpdated(e){super.firstUpdated(e),this.__moveOptionsToListboxNode(),this.registrationComplete.then(()=>{this._initialModelValue=this.modelValue}),new MutationObserver(()=>{this._onListboxContentChanged()}).observe(this._listboxNode,{childList:!0})}updated(e){super.updated(e),e.has(`disabled`)&&(this.disabled?this.__requestOptionsToBeDisabled():this.__retractRequestOptionsToBeDisabled())}disconnectedCallback(){super.disconnectedCallback(),this._teardownListboxNode(),this.__teardownEventListeners()}setCheckedIndex(e){if(this.multipleChoice&&Array.isArray(e)){this._uncheckChildren(this.formElements.filter(t=>t===e)),e.forEach(e=>{this.formElements[e]&&(this.formElements[e].checked=!this.formElements[e].checked)});return}typeof e==`number`&&(e===-1&&this._uncheckChildren(),this.formElements[e]&&(this.formElements[e].disabled?this._uncheckChildren():this.multipleChoice?this.formElements[e].checked=!this.formElements[e].checked:this.formElements[e].checked=!0))}addFormElement(e,t){super.addFormElement(e,t),e.id=e.id||`${this.localName}-option-${Vt()}`,this.disabled&&e.makeRequestToBeDisabled(),this.__setAttributeForAllFormElements(`aria-setsize`,this.formElements.length),this.formElements.forEach((e,t)=>{e.setAttribute(`aria-posinset`,t+1)}),this.__proxyChildModelValueChanged({target:e}),this.resetInteractionState()}resetInteractionState(){super.resetInteractionState(),this.submitted=!1}reset(){this.modelValue=this._initialModelValue,this.activeIndex=-1,this.resetInteractionState()}clear(){super.clear(),this.setCheckedIndex(-1)}_handleTypeAhead(e,{setAsChecked:t}){let{key:n,code:r}=e;if(r.startsWith(`Key`)||r.startsWith(`Digit`)||r.startsWith(`Numpad`)){e.preventDefault(),this.__typedChars.push(n);let r=this.__typedChars.join(``),i=this.formElements.findIndex(e=>e.modelValue.value.toLowerCase().startsWith(r));i>=0&&(t&&this.setCheckedIndex(i),this.activeIndex=i),this.__pendingTypeAheadTimeout&&window.clearTimeout(this.__pendingTypeAheadTimeout),this.__pendingTypeAheadTimeout=setTimeout(()=>{this.__typedChars=[]},this._typeAheadTimeout)}}_getCheckedElements(){return this.formElements.filter(e=>e.checked)}_setupListboxNode(){this._listboxNode?this.__setupListboxNodeInteractions():this._listboxSlot&&this._listboxSlot.addEventListener(`slotchange`,()=>{this.__setupListboxNodeInteractions()})}_onListboxContentChanged(){}_teardownListboxNode(){this._listboxNode&&(this._listboxNode.removeEventListener(`keydown`,this._listboxOnKeyDown),this._listboxNode.removeEventListener(`click`,this._listboxOnClick),this._listboxNode.removeEventListener(`keyup`,this._listboxOnKeyUp))}_getNextEnabledOption(e,t=1){return this.__getEnabledOption(e,t)}_getPreviousEnabledOption(e,t=-1){return this.__getEnabledOption(e,t)}_onChildActiveChanged({target:e}){e.active===!0&&this.__setChildActive(e)}_listboxOnKeyDown(e){if(this.disabled)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});let{key:t}=e;switch(t){case` `:case`Enter`:if(t===` `&&this._listboxReceivesNoFocus||(t===` `&&e.preventDefault(),!this.formElements[this.activeIndex])||this.formElements[this.activeIndex].disabled)return;this.formElements[this.activeIndex].href&&this.formElements[this.activeIndex].click(),this.setCheckedIndex(this.activeIndex);break;case`ArrowUp`:e.preventDefault(),this.orientation===`vertical`&&(this.activeIndex=this._getPreviousEnabledOption(this.activeIndex));break;case`ArrowLeft`:if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.orientation===`horizontal`&&(this.activeIndex=this._getPreviousEnabledOption(this.activeIndex));break;case`ArrowDown`:e.preventDefault(),this.orientation===`vertical`&&(this.activeIndex=this._getNextEnabledOption(this.activeIndex));break;case`ArrowRight`:if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.orientation===`horizontal`&&(this.activeIndex=this._getNextEnabledOption(this.activeIndex));break;case`Home`:if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.activeIndex=this._getNextEnabledOption(0,0);break;case`End`:if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.activeIndex=this._getPreviousEnabledOption(this.formElements.length-1,0);break;default:this._noTypeAhead||this._handleTypeAhead(e,{setAsChecked:this.selectionFollowsFocus&&!this.multipleChoice})}[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Home`,`End`].includes(t)&&this.selectionFollowsFocus&&!this.multipleChoice&&this.setCheckedIndex(this.activeIndex)}_listboxOnClick(e){}_listboxOnKeyUp(e){if(this.disabled)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});let{key:t}=e;switch(t){case`ArrowUp`:case`ArrowDown`:case`Home`:case`End`:case`Enter`:e.preventDefault()}}_onLabelClick(){this._listboxNode.focus()}_scrollIntoView(e,t){e.scrollIntoView({behavior:`smooth`,block:`nearest`})}__setupEventListeners(){this._listboxNode.addEventListener(`active-changed`,this._onChildActiveChanged),this._listboxNode.addEventListener(`model-value-changed`,this.__proxyChildModelValueChanged)}__teardownEventListeners(){this._listboxNode.removeEventListener(`active-changed`,this._onChildActiveChanged),this._listboxNode.removeEventListener(`model-value-changed`,this.__proxyChildModelValueChanged)}__setChildActive(e){if(this.formElements.forEach(t=>{t.active=e===t}),!e){this._activeDescendantOwnerNode.removeAttribute(`aria-activedescendant`);return}this._activeDescendantOwnerNode.setAttribute(`aria-activedescendant`,e.id),this._scrollIntoView(e,this._scrollTargetNode)}_uncheckChildren(e=[]){let t=Array.isArray(e)?e:[e];this.formElements.forEach(e=>{t.includes(e)||(e.checked=!1)})}__onChildCheckedChanged(e){let{target:t}=e;e.stopPropagation&&e.stopPropagation(),t.checked&&!this.multipleChoice&&this._uncheckChildren(t)}__setAttributeForAllFormElements(e,t){this.formElements.forEach(n=>{n.setAttribute(e,t)})}__proxyChildModelValueChanged(e){e.stopPropagation&&e.stopPropagation(),this.__onChildCheckedChanged(e),this.requestUpdate(`modelValue`,this._oldModelValue),e.detail&&e.detail.formPath&&this.dispatchEvent(new CustomEvent(`model-value-changed`,{detail:{formPath:e.detail.formPath,isTriggeredByUser:e.detail.isTriggeredByUser||this._isHandlingUserInput,element:e.target}})),this._oldModelValue=this.modelValue}__getEnabledOption(e,t){let n=e=>t===1?e<this.formElements.length:e>=0;for(let r=e+t;n(r);r+=t)if(this.formElements[r]&&!this.formElements[r].hasAttribute(`aria-hidden`))return r;if(this.rotateKeyboardNavigation){let e=t===-1?this.formElements.length-1:0;for(let r=e;n(r);r+=t)if(this.formElements[r]&&!this.formElements[r].hasAttribute(`aria-hidden`))return r}return e}__moveOptionsToListboxNode(){let e=this.shadowRoot.getElementById(`options-outlet`);e&&(It(this,this._listboxNode),e.addEventListener(`slotchange`,()=>{It(this,this._listboxNode)}))}__preventScrollingWithArrowKeys(e){if(this.disabled)return;let{key:t}=e;switch(t){case`ArrowUp`:case`ArrowDown`:case`Home`:case`End`:e.preventDefault()}}__setupListboxNodeInteractions(){this._listboxNode.setAttribute(`role`,`listbox`),this._listboxNode.setAttribute(`aria-orientation`,this.orientation),this._listboxNode.setAttribute(`aria-multiselectable`,`${this.multipleChoice}`),this._listboxNode.setAttribute(`tabindex`,`0`),this._listboxNode.addEventListener(`click`,this._listboxOnClick),this._listboxNode.addEventListener(`keyup`,this._listboxOnKeyUp),this._listboxNode.addEventListener(`keydown`,this._listboxOnKeyDown),this._scrollTargetNode.addEventListener(`keydown`,this.__preventScrollingWithArrowKeys)}__requestOptionsToBeDisabled(){this.formElements.forEach(e=>{e.makeRequestToBeDisabled&&e.makeRequestToBeDisabled()})}__retractRequestOptionsToBeDisabled(){this.formElements.forEach(e=>{e.retractRequestToBeDisabled&&e.retractRequestToBeDisabled()})}__initInteractionStates(){this.initInteractionState()}}),ul=class extends ll(_r(bi(vi(d)))){get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,focused:this.focused}}get _focusableNode(){return this._inputNode}},dl=class extends Pt(Oi(si(Rt(d)))){static get properties(){return{active:{type:Boolean,reflect:!0}}}static get styles(){return[o`
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
    `}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`)}__registerEventListeners(){this.addEventListener(`click`,this.__onClick)}__unRegisterEventListeners(){this.removeEventListener(`click`,this.__onClick)}__onClick(){if(this.disabled)return;let e=this._parentFormGroup;this._isHandlingUserInput=!0,e&&e.multipleChoice?(this.checked=!this.checked,this.active=!this.active):(this.checked=!0,this.active=!0),this._isHandlingUserInput=!1}},fl=o`
  :host {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    column-gap: var(--c-spacing-sm);
    --c-option-wide-threshold: 640;
    /* LionOption hard-codes a white fill */
    background-color: transparent;
    padding-inline: var(--c-spacing-md);
    padding-block: var(--c-spacing-sm);
    font: inherit;
    border-radius: var(--c-radius-sm);
  }

  /* LionOption fills a checked option; here the check mark marks it */
  :host([checked]) {
    background-color: transparent;
  }

  :host(:hover) {
    background-color: var(--c-color-neutral-fill-normal);
    color: var(--c-color-neutral-on-normal);
  }

  :host([active]) {
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

  .content {
    display: inline-flex;
    align-items: center;
    gap: var(--c-spacing-sm);
    min-width: 0;
  }

  @media (forced-colors: active) {
    :host([active]) {
      outline: var(--c-focus-outline-width) solid Highlight;
      outline-offset: calc(var(--c-focus-outline-width) * -1);
    }
  }

  :host([wide]) .choice-field__label {
    align-items: baseline;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,pl=new WeakMap,ml=new WeakSet,hl=class extends dl{constructor(...e){super(...e),x(this,ml),this.hint=null,T(this,pl,void 0)}static get styles(){return[...dl.styles,fl]}static get observedAttributes(){return[...super.observedAttributes,`choice-value`]}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===`choice-value`&&n!==null&&(this.choiceValue=n)}connectedCallback(){super.connectedCallback(),_l._.observe(this)}disconnectedCallback(){super.disconnectedCallback(),_l._.unobserve(this)}render(){return m`
      <div class="choice-field__label">
        <span class="content"><slot></slot></span>
        ${this.hint?m`<span class="hint">${this.hint}</span>`:i}
        <slot name="suffix"></slot>
      </div>
      ${this.checked?m`<craft-icon class="check" name="check"></craft-icon>`:i}
    `}};function gl(){return S(pl,this)??C(pl,this,parseInt(getComputedStyle(this).getPropertyValue(`--c-option-wide-threshold`)||`640`,10)),S(pl,this)}var _l={_:new ResizeObserver(e=>{for(let t of e){let e=t.target,n=t.borderBoxSize?.[0]?.inlineSize??t.contentRect.width;e.toggleAttribute(`wide`,n>=w(ml,e,gl).call(e))}})};r([c()],hl.prototype,`hint`,void 0),customElements.get(`craft-option`)||customElements.define(`craft-option`,hl);var vl=o`
  :host {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--c-spacing-xs);
  }

  .label {
    padding-inline: var(--c-spacing-md);
    padding-block: var(--c-spacing-sm);
    font-size: 0.8em;
    text-transform: uppercase;
    color: var(--c-color-neutral-on-normal);
    border-block-end: 1px solid var(--c-color-neutral-border-quiet);
  }
`,yl=class extends d{constructor(...e){super(...e),this.label=``}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`group`)}willUpdate(){this.setAttribute(`aria-label`,this.label)}render(){return m`
      <div class="label" aria-hidden="true">${this.label}</div>
      <slot></slot>
    `}};yl.styles=vl,r([c()],yl.prototype,`label`,void 0),customElements.get(`craft-option-group`)||customElements.define(`craft-option-group`,yl);var bl=o`
  :host {
    box-sizing: border-box;
    max-width: 100%;
    display: inline-flex;
    align-items: center;
    gap: var(--c-spacing-xs);
    padding: var(--c-spacing-xs);
    border-radius: var(--c-radius-sm);
    background: var(--c-color-neutral-fill-quiet);
    overflow-wrap: anywhere;
  }

  :host([removable]) {
    padding: 0;
  }

  button {
    box-sizing: border-box;
    max-width: 100%;
    display: inline-flex;
    align-items: center;
    gap: var(--c-spacing-xs);
    padding: var(--c-spacing-xs);
    border: 0;
    border-radius: inherit;
    background: transparent;
    font: inherit;
    color: inherit;
    text-align: start;
    overflow-wrap: inherit;
    cursor: pointer;
  }

  button:focus-visible {
    outline: var(--c-focus-outline-width) var(--c-focus-outline-style)
      var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
  }
`,xl=new WeakMap,Sl=class extends d{constructor(...e){super(...e),this.removable=!1,T(this,xl,()=>{this.dispatchEvent(new CustomEvent(`craft-remove`,{bubbles:!0}))})}render(){return this.removable?m`<button
            type="button"
            aria-describedby="remove-hint"
            @click=${S(xl,this)}
          >
            <slot></slot>
            <span class="remove" aria-hidden="true">×</span>
          </button>
          <span id="remove-hint" hidden>${n(`Remove`)}</span>`:m`<slot></slot>`}};Sl.styles=bl,r([c({type:Boolean,reflect:!0})],Sl.prototype,`removable`,void 0),customElements.get(`craft-combobox-token`)||customElements.define(`craft-combobox-token`,Sl);var Cl=new WeakMap;function wl(e,t){Array.from(e.childNodes).forEach(n=>{if(n.nodeName===`#text`){let r=RegExp(`^(.*?)(${t})(.*)$`,`i`),i=n.nodeValue.match(r);if(i){let t=document.createTextNode(i[1]);e.appendChild(t);let r=document.createElement(`b`);r.textContent=i[2],e.appendChild(r);let a=document.createTextNode(i[3]);e.appendChild(a),e.removeChild(n),Cl.set(e,()=>{e.appendChild(n),e.contains(t)&&t.parentNode!==null&&t.parentNode.removeChild(t),e.contains(r)&&r.parentNode!==null&&r.parentNode.removeChild(r),e.contains(a)&&a.parentNode!==null&&a.parentNode.removeChild(a)})}}else wl(n,t)})}function Tl(e){Cl.has(e)&&Cl.get(e)(),Array.from(e.childNodes).forEach(e=>{e.nodeName===`#text`?Cl.has(e)&&Cl.get(e)():Tl(e)})}var El=class extends hi{static get validatorName(){return`MatchesOption`}execute(e,t,n){return n?.node.modelValue instanceof oi}};function Dl(e){return Array.isArray(e)?e:[e]}var Ol=k(e=>class extends Ei(e){static get properties(){return{allowCustomChoice:{type:Boolean,attribute:`allow-custom-choice`},modelValue:{type:Object}}}get modelValue(){return this.__getChoicesFrom(super.modelValue)}set modelValue(e){if(super.modelValue=e,e==null||e===``)this._customChoices=new Set;else if(this.allowCustomChoice){let t=this.modelValue;this._customChoices=new Set(Dl(e)),this.requestUpdate(`modelValue`,t)}}get formattedValue(){return this.__getChoicesFrom(super.formattedValue)}set formattedValue(e){if(super.formattedValue=e,e==null)this._customChoices=new Set;else if(this.allowCustomChoice){let t=this.modelValue;this._customChoices=new Set(Dl(e).map(e=>this.formElements.find(t=>t.formattedValue===e)?.modelValue||e)),this.requestUpdate(`modelValue`,t)}}get serializedValue(){return this.__getChoicesFrom(super.serializedValue)}set serializedValue(e){if(super.serializedValue=e,e==null)this._customChoices=new Set;else if(this.allowCustomChoice){let t=this.modelValue;this._customChoices=new Set(Dl(e).map(e=>this.formElements.find(t=>t.serializedValue===e)?.modelValue||e)),this.requestUpdate(`modelValue`,t)}}get customChoices(){if(!this.allowCustomChoice)return[];let e=this._getCheckedElements();return Array.from(this._customChoices).filter(t=>!e.some(e=>e.choiceValue===t))}constructor(){super(),this.allowCustomChoice=!1,this._customChoices=new Set}__getChoicesFrom(e){let t=e;return this.allowCustomChoice?this.multipleChoice?[...Dl(t),...this.customChoices]:t===``?this._customChoices.values().next().value||``:t:t}_isEmpty(){return super._isEmpty()&&this._customChoices.size===0}clear(){this._customChoices=new Set,super.clear()}parser(e){return this.allowCustomChoice&&Array.isArray(e)?e.filter(e=>e.trim()!==``):e}}),kl=new WeakMap,Al=class extends Zr(Cn(Ol(ul))){static get properties(){return{autocomplete:{type:String,reflect:!0},matchMode:{type:String,attribute:`match-mode`},showAllOnEmpty:{type:Boolean,attribute:`show-all-on-empty`},requireOptionMatch:{type:Boolean},allowCustomChoice:{type:Boolean,attribute:`allow-custom-choice`},__shouldAutocompleteNextUpdate:Boolean}}static get styles(){return[...super.styles,o`
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
      `]}static get localizeNamespaces(){return[{"lion-combobox":e=>{switch(e){case`bg-BG`:case`bg`:return A(()=>import(`./bg-Bs0XcBVB.js`),[],import.meta.url);case`cs-CZ`:case`cs`:return A(()=>import(`./cs-B8DQIi4_.js`),[],import.meta.url);case`de-AT`:case`de-DE`:case`de`:return A(()=>import(`./de-BGf3YhNb.js`),[],import.meta.url);case`en-AU`:case`en-GB`:case`en-PH`:case`en-US`:case`en`:return A(()=>import(`./en-D-xWIAUL.js`),[],import.meta.url);case`es-ES`:case`es`:return A(()=>import(`./es-BxznwUyK.js`),[],import.meta.url);case`fr-FR`:case`fr-BE`:case`fr`:return A(()=>import(`./fr-Cma_rLCi.js`),[],import.meta.url);case`hu-HU`:case`hu`:return A(()=>import(`./hu-oz_RH6aJ.js`),[],import.meta.url);case`it-IT`:case`it`:return A(()=>import(`./it-BUnCsVOb.js`),[],import.meta.url);case`nl-BE`:case`nl-NL`:case`nl`:return A(()=>import(`./nl-BgK25p-m.js`),[],import.meta.url);case`pl-PL`:case`pl`:return A(()=>import(`./pl-BFxKYQFW.js`),[],import.meta.url);case`ro-RO`:case`ro`:return A(()=>import(`./ro-DXnny9tt.js`),[],import.meta.url);case`ru-RU`:case`ru`:return A(()=>import(`./ru-DxR-HmN-.js`),[],import.meta.url);case`sk-SK`:case`sk`:return A(()=>import(`./sk-Hha-L2N4.js`),[],import.meta.url);case`uk-UA`:case`uk`:return A(()=>import(`./uk-CvmsXQbu.js`),[],import.meta.url);case`zh-CN`:case`zh`:return A(()=>import(`./zh-CgAr6HSc.js`),[],import.meta.url);default:return A(()=>import(`./en-D-xWIAUL.js`),[],import.meta.url)}}},...super.localizeNamespaces]}get modelValue(){let e=super.modelValue;return e===``?this.parser(this.value):e}set modelValue(e){super.modelValue=e}get value(){return this._inputNode?.value||this.__value||``}set value(e){this._inputNode?(this._inputNode.value=e,this.__value=void 0):this.__value=e}reset(){super.reset(),this.multipleChoice||(this.value=this._initialModelValue),this._resetListboxOptions()}_resetListboxOptions(){this.formElements.forEach((e,t)=>{this._unhighlightMatchedOption(e),!this.showAllOnEmpty||!this.opened?e.style.display=`none`:(e.style.display=``,e.setAttribute(`aria-posinset`,`${t+1}`),e.setAttribute(`aria-setsize`,`${this.formElements.length}`),e.removeAttribute(`aria-hidden`))})}_inputGroupInputTemplate(){return m`
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
          padding: 0;`,e.appendChild(t),e}return document.createElement(`input`)},listbox:super.slots.input}}get _comboboxNode(){return this.querySelector(`[slot="input"]`)}get _selectionDisplayNode(){return this.querySelector(`[slot="selection-display"]`)}get _inputNode(){return this._ariaVersion===`1.1`&&this._comboboxNode&&this._comboboxNode.querySelector(`input`)||this._comboboxNode}get _overlayContentNode(){return this._listboxNode}get _overlayReferenceNode(){return this.shadowRoot.querySelector(`.input-group__container`)}get _overlayInvokerNode(){return this._inputNode}get _listboxNode(){return this._overlayCtrl&&this._overlayCtrl.contentNode||Array.from(this.children).find(e=>e.slot===`listbox`)}get _activeDescendantOwnerNode(){return this._inputNode}get requireOptionMatch(){return!this.allowCustomChoice}set requireOptionMatch(e){this.allowCustomChoice=!e}constructor(){super(),this.autocomplete=`both`,this.matchMode=`all`,this.showAllOnEmpty=!1,this.requireOptionMatch=!0,this.rotateKeyboardNavigation=!0,this.selectionFollowsFocus=!0,this.defaultValidators.push(new El),this._ariaVersion=Bt.isChromium?`1.1`:`1.0`,this._listboxReceivesNoFocus=!0,this._noTypeAhead=!0,this.__prevCboxValueNonSelected=``,this.__prevCboxValue=``,this.__hadUserIntendsInlineAutoFill=!1,this.__listboxContentChanged=!1,this._onKeyUp=this._onKeyUp.bind(this),this._textboxOnClick=this._textboxOnClick.bind(this),this._textboxOnInput=this._textboxOnInput.bind(this),this._textboxOnKeydown=this._textboxOnKeydown.bind(this)}connectedCallback(){super.connectedCallback(),this._selectionDisplayNode&&(this._selectionDisplayNode.comboboxElement=this),(this.disabled||this.readOnly)&&this.__setComboboxDisabledAndReadOnly()}requestUpdate(e,t,n){if(super.requestUpdate(e,t,n),(e===`disabled`||e===`readOnly`)&&this.__setComboboxDisabledAndReadOnly(),e===`modelValue`&&this.modelValue&&this.modelValue!==t&&this._syncToTextboxCondition(this.modelValue,this._oldModelValue))if(this.multipleChoice)this._syncToTextboxMultiple(this.modelValue,this._oldModelValue);else{let e=this._getTextboxValueFromOption(this.formElements[this.checkedIndex]);this._setTextboxValue(e)}}parser(e){return this.requireOptionMatch&&this.checkedIndex===-1&&e!==``&&!Array.isArray(e)?new oi(e):super.parser(e)}__unsyncCheckedIndexOnInputChange(){let e=this._autoSelectCondition(),t=this.formElements[this.checkedIndex];if(!this.multipleChoice&&!e&&t){let e=this._getTextboxValueFromOption(t);this._inputNode.value.startsWith(e)||this.setCheckedIndex(-1)}}updated(e){super.updated(e),e.has(`__shouldAutocompleteNextUpdate`)&&this.__unsyncCheckedIndexOnInputChange(),e.has(`opened`)&&(this.opened&&(this.activeIndex=-1),!this.opened&&e.get(`opened`)!==void 0&&(this.__onOverlayClose(),this.activeIndex=-1)),e.has(`autocomplete`)&&this._inputNode.setAttribute(`aria-autocomplete`,this.autocomplete),e.has(`disabled`)&&this.setAttribute(`aria-disabled`,`${this.disabled}`),e.has(`__shouldAutocompleteNextUpdate`)&&this.__shouldAutocompleteNextUpdate&&(this._handleAutocompletion(),this.__shouldAutocompleteNextUpdate=!1,this.__listboxContentChanged=!1),typeof this._selectionDisplayNode?.onComboboxElementUpdated==`function`&&this._selectionDisplayNode.onComboboxElementUpdated(e)}matchCondition(e,t){let n=-1,r=this._getTextboxValueFromOption(e);return typeof r==`string`&&typeof t==`string`&&(n=r.toLowerCase().indexOf(t.toLowerCase())),this.matchMode===`all`?n>-1:n===0}_showOverlayCondition({lastKey:e}){return this.disabled||this.readOnly||e&&([`Tab`,`Escape`].includes(e)||!this.multipleChoice&&[`Enter`].includes(e))?!1:this.filled||this.showAllOnEmpty||!this.filled&&this.multipleChoice&&this.__prevCboxValueNonSelected?!0:this.opened}_getTextboxValueFromOption(e){return e?e.choiceValue:this.modelValue instanceof oi?this.modelValue.viewValue:this.modelValue}_onListboxContentChanged(){super._onListboxContentChanged(),this.__shouldAutocompleteNextUpdate=!0,this.__listboxContentChanged=!0}_textboxOnInput(e){this.__shouldAutocompleteNextUpdate=!0,this.opened=this._showOverlayCondition({})}_textboxOnKeydown(e){e.key===`Tab`&&(this.opened=!1)}_listboxOnClick(e){super._listboxOnClick(e),this._inputNode.focus(),this.multipleChoice?(this._inputNode.value=``,this._resetListboxOptions()):(this.activeIndex=-1,this.opened=!1)}_setTextboxValue(e){this._inputNode&&this._inputNode.value!==e&&(this._inputNode.value=e)}__onOverlayClose(){this.multipleChoice?this._syncToTextboxMultiple(this.modelValue,this._oldModelValue):this.checkedIndex!==-1&&this._syncToTextboxCondition(this.modelValue,this._oldModelValue,{phase:`overlay-close`})&&(this._inputNode.value=this._getTextboxValueFromOption(this.formElements[this.checkedIndex]))}_repropagationCondition(e){return super._repropagationCondition(e)||this.formElements.every(e=>!e.checked)}_onFilterMatch(e,t){this._highlightMatchedOption(e,t),e.style.display=``}_highlightMatchedOption(e,t){if(wl(e,t),e.textContent){let t=document.createElement(`span`);t.setAttribute(`aria-label`,e.textContent.replace(/\s+/g,` `)),Array.from(e.childNodes).forEach(e=>{t.appendChild(e)}),e.appendChild(t),kl.set(e,()=>{Array.from(t.childNodes).forEach(t=>{e.appendChild(t)}),e.contains(t)&&e.removeChild(t)})}}_onFilterUnmatch(e,t,n){this._unhighlightMatchedOption(e),e.style.display=`none`}_unhighlightMatchedOption(e){Tl(e),kl.has(e)&&kl.get(e)()}__computeUserIntendsAutoFill({prevValue:e,curValue:t}){let n=e.length<t.length,r=e.length&&t.length&&e[0].toLowerCase()!==t[0].toLowerCase();return n||r||this.__listboxContentChanged&&this.__hadUserIntendsInlineAutoFill}_handleAutocompletion(){let e=this._inputNode.selectionStart!==this._inputNode.selectionEnd&&this._inputNode.value.length!==this._inputNode.selectionStart,t=this._inputNode.value,n=this._inputNode.selectionStart,r=e&&n?t.slice(0,n):t,i=e||this.__hadSelectionLastAutofill?this.__prevCboxValueNonSelected:this.__prevCboxValue,a=!r,o=[],s=!1,c=this.__computeUserIntendsAutoFill({prevValue:i,curValue:r}),l=this.autocomplete===`both`||this.autocomplete===`inline`,u=this._autoSelectCondition(),d=this.autocomplete===`inline`||this.autocomplete===`none`;this.formElements.forEach((e,t)=>{let n=this.matchCondition(e,r),f=!1;if(f=a?this.showAllOnEmpty:d||n,u&&!s&&n&&!e.disabled){let n=()=>{this.activeIndex=t,this.selectionFollowsFocus&&!this.multipleChoice&&this.setCheckedIndex(this.activeIndex),s=!0};if(c)if(l){let t=this._getTextboxValueFromOption(e);typeof t==`string`&&t!==``&&typeof r==`string`&&r!==``&&t.toLowerCase().indexOf(r.toLowerCase())===0&&(this.__textboxInlineComplete(e),n())}else n()}e.onFilterUnmatch?e.onFilterUnmatch(r,i):this._onFilterUnmatch(e,r,i),e.setAttribute(`aria-hidden`,`true`),e.removeAttribute(`aria-posinset`),e.removeAttribute(`aria-setsize`),f&&(o.push(e),e.onFilterMatch?e.onFilterMatch(r):this._onFilterMatch(e,r))});let f=o.length;o.forEach((e,t)=>{e.setAttribute(`aria-posinset`,`${t+1}`),e.setAttribute(`aria-setsize`,`${f}`),e.removeAttribute(`aria-hidden`)}),u&&!s&&!this.multipleChoice&&(this.setCheckedIndex(-1),i!==r&&(this.activeIndex=-1),this.modelValue=this.parser(t)),this.__prevCboxValueNonSelected=r,this.__prevCboxValue=this._inputNode.value,this.__hadSelectionLastAutofill=this._inputNode.value.length!==this._inputNode.selectionStart,this.__hadUserIntendsInlineAutoFill=c,this._overlayCtrl&&this._overlayCtrl._popper&&this._overlayCtrl._popper.update()}__textboxInlineComplete(e=this.formElements[this.activeIndex]){let t=this._getTextboxValueFromOption(e);if(this._inputNode.value!==t){let e=this._inputNode.value.length;this._inputNode.value=t,this._inputNode.selectionStart=e,this._inputNode.selectionEnd=this._inputNode.value.length}}_autoSelectCondition(){return this.autocomplete===`both`||this.autocomplete===`inline`}_setupListboxNode(){super._setupListboxNode(),this._listboxNode.removeAttribute(`tabindex`)}_defineOverlayConfig(){return{...En(),elementToFocusAfterHide:void 0,invokerNode:this._comboboxNode,visibilityTriggerFunction:void 0}}_setupOverlayCtrl(){super._setupOverlayCtrl(),this.__shouldAutocompleteNextUpdate=!0,this.__setupCombobox()}_teardownOverlayCtrl(){super._teardownOverlayCtrl(),this.__teardownCombobox()}_setupOpenCloseListeners(){super._setupOpenCloseListeners(),this._inputNode.addEventListener(`keyup`,this._onKeyUp),this._inputNode.addEventListener(`click`,this._textboxOnClick)}_teardownOpenCloseListeners(){super._teardownOpenCloseListeners(),this._inputNode.removeEventListener(`keyup`,this._onKeyUp),this._inputNode.removeEventListener(`click`,this._textboxOnClick)}_listboxOnKeyDown(e){let{key:t}=e;switch(t){case`Escape`:this.opened=!1,super._listboxOnKeyDown(e),this._setTextboxValue(``);break;case`Backspace`:case`Delete`:this.requireOptionMatch?super._listboxOnKeyDown(e):this.opened=!1;break;case`Enter`:this.opened&&e.preventDefault(),!this.requireOptionMatch&&this.multipleChoice&&(!this.formElements[this.activeIndex]||this.formElements[this.activeIndex].hasAttribute(`aria-hidden`)||!this.opened)?(this.modelValue=this.parser([...this.modelValue,this._inputNode.value]),this._inputNode.value=``,this.opened=!1):(super._listboxOnKeyDown(e),this._resetListboxOptions()),this.multipleChoice?this._inputNode.value=``:this.opened=!1;break;default:super._listboxOnKeyDown(e);break}}_syncToTextboxCondition(e,t,{phase:n}={}){return this.autocomplete===`both`||this.autocomplete===`inline`||!this.focused}_syncToTextboxMultiple(e,t=[]){if(this.requireOptionMatch){let n=e.filter(e=>!t.includes(e)),r=this.formElements.filter(e=>n.includes(e.choiceValue)).map(e=>this._getTextboxValueFromOption(e)).join(` `);this._setTextboxValue(r)}}_enhanceLightDomClasses(){let e=this.querySelector(`[slot=input]`);e&&e.classList.add(`form-control`)}__setComboboxDisabledAndReadOnly(){this._comboboxNode&&(this._comboboxNode.toggleAttribute(`disabled`,this.disabled),this._comboboxNode.setAttribute(`aria-disabled`,`${this.disabled}`),this._comboboxNode.toggleAttribute(`readonly`,this.readOnly),this._comboboxNode.setAttribute(`aria-readonly`,`${this.readOnly}`)),this._inputNode&&(this._inputNode.toggleAttribute(`disabled`,this.disabled),this._inputNode.toggleAttribute(`readOnly`,this.readOnly),this._inputNode.setAttribute(`aria-readonly`,`${this.readOnly}`),this._inputNode.tabIndex=this.disabled?-1:0)}__setupCombobox(){this._comboboxNode.setAttribute(`role`,`combobox`),this._comboboxNode.setAttribute(`aria-haspopup`,`listbox`),this._inputNode.setAttribute(`aria-autocomplete`,this.autocomplete),this._comboboxNode.setAttribute(`aria-controls`,this._listboxNode.id),this._ariaVersion===`1.1`?this._comboboxNode.setAttribute(`aria-owns`,this._listboxNode.id):this._inputNode.setAttribute(`aria-owns`,this._listboxNode.id),this._listboxNode.setAttribute(`aria-labelledby`,this._labelNode.id),this._inputNode.addEventListener(`keydown`,this._listboxOnKeyDown),this._inputNode.addEventListener(`input`,this._textboxOnInput),this._inputNode.addEventListener(`keydown`,this._textboxOnKeydown)}__teardownCombobox(){this._inputNode.removeEventListener(`keydown`,this._listboxOnKeyDown),this._inputNode.removeEventListener(`input`,this._textboxOnInput),this._inputNode.removeEventListener(`keydown`,this._textboxOnKeydown)}_onKeyUp(e){let t=e&&e.key;this.opened=this._showOverlayCondition({lastKey:t,currentValue:this._inputNode.value})}_textboxOnClick(e){this.opened=this._showOverlayCondition({})}clear(){this.value=``,super.clear(),this.__shouldAutocompleteNextUpdate=!0}},jl=o`
  ${er}

  :host {
    width: 100%;
  }

  ::slotted(.form-control) {
    ${$n}
  }

  /* Lion sets the field's width as an inline min-width, which wins over this cap on wider fields */
  #overlay-content-node-wrapper {
    max-inline-size: min(calc(360rem / 16), calc(100vw - var(--c-spacing-lg)));
    border: 1px solid var(--c-form-control-border-color);
    border-radius: var(--c-radius-md);
    background-color: var(--c-surface-overlay);
    box-shadow: var(--c-shadow-sm);
  }

  /* Lion gives the listbox a white background, which the overlay's own surface has to show through. */
  ::slotted([slot='listbox']) {
    background: transparent;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--c-spacing-xs);
    padding: var(--c-spacing-sm);
  }

  .input-group__input {
    ${Qn}
  }

  .input-group__container {
    border: 0;
  }

  /*
    The chevron's padding fills the end of the field beside the clear button, so
    the whole area is a target for opening the list. It focuses the textbox, so
    it shows the textbox's cursor.
  */
  .indicator {
    position: absolute;
    inset-block: 0;
    inset-inline-end: 0;
    width: 1em;
    height: auto;
    padding-inline: calc(var(--c-input-spacing-inline) * 0.5)
      var(--c-input-spacing-inline);
  }

  :host(:not([disabled], [readonly])) .indicator {
    cursor: text;
  }

  .clear {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: calc(var(--c-input-spacing-inline) * 1.5 + 1em);
    transform: translateY(-50%);
  }

  .prefix {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-start: var(--c-input-spacing-inline);
    transform: translateY(-50%);
    pointer-events: none;
  }

  .prefix--indicator {
    display: flex;
  }

  :host([has-prefix-icon]) ::slotted(.form-control) {
    padding-inline-start: calc(var(--c-input-spacing-inline) * 1.5 + 1em);
  }

  :host([multiple-choice]) .input-group__input {
    ${Zn}
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--c-spacing-xs);
    padding: var(--c-spacing-xs);
  }

  :host([multiple-choice][focused]) .input-group__input {
    outline: var(--c-focus-outline-width) var(--c-focus-outline-style)
      var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
  }

  /* Lion turns off the textbox's own outline, so draw the ring on its wrapper */
  :host(:not([multiple-choice])) ::slotted(.form-control:focus-within) {
    outline: var(--c-focus-outline-width) var(--c-focus-outline-style)
      var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
  }

  :host([multiple-choice][has-feedback-for='error']) .input-group__input {
    border-color: var(--c-color-danger-border-loud);
  }

  .combobox__textbox {
    position: relative;
    flex: 1;
    min-width: 0;
  }

  :host([multiple-choice]) .combobox__textbox {
    min-width: 8rem;
  }

  :host([multiple-choice]) ::slotted(.form-control) {
    height: calc(
      var(--c-input-height, var(--c-size-control-md)) - 2 *
        (var(--c-spacing-xs) + var(--_input-border-width))
    );
    min-height: 0;
    padding-inline-start: 0;
    border: 0;
    background: transparent;
    box-shadow: none;
    /* Important so the page's global focus ring can't ring the textbox inside the field's */
    outline: none !important;
  }

  ::slotted([slot='selection']) {
    display: contents;
    list-style: none;
  }

  .combobox__footer {
    padding-inline: var(--c-spacing-md);
    padding-block: var(--c-spacing-sm);
    font-size: 0.85em;
    color: var(--c-text-quiet);
    border-block-start: 1px solid var(--c-color-neutral-border-quiet);
  }
`;function Ml(e){return Oo.includes(e)||oe.includes(e)?`var(--c-color-${e}-fill-loud)`:e}var Nl=new WeakMap,Pl=new WeakMap,Fl=new WeakMap,V=new WeakSet,Il=new WeakMap,Ll=new WeakMap,Rl=new WeakMap,zl=new WeakMap,Bl=new WeakMap,Vl=new WeakMap,Hl=new WeakMap,Ul=new WeakMap,Wl=new WeakMap,Gl=new WeakMap,Kl=class extends pr(Al){static get properties(){return{modelValue:{attribute:`model-value`}}}attributeChangedCallback(e,t,n){if(e===`model-value`){this.modelValue=this.hasAttribute(`multiple-choice`)?JSON.parse(n??`[]`):n??``;return}super.attributeChangedCallback(e,t,n)}static get styles(){return[...super.styles,le,jl]}get modelValue(){return super.modelValue}set modelValue(e){this.pendingModelValue=e,super.modelValue=e}get serializedValue(){return this.multipleChoice||this.requireOptionMatch||typeof this.modelValue!=`string`?super.serializedValue:this.modelValue}set serializedValue(e){super.serializedValue=e}constructor(){super(),x(this,V),this.multipleChoice=!1,this.required=!1,this.initialValues=[],this.fieldsetDisabled=!1,this.changingValues=!1,this.options=[],this.limit=150,this.clearable=!1,this.placeholder=``,this.showSelectedHint=!1,T(this,Nl,void 0),T(this,Pl,void 0),T(this,Fl,!1),T(this,Il,!1),T(this,Ll,e=>{e.stopPropagation(),C(Il,this,!0);try{C(Fl,this,!0),w(V,this,eu).call(this),!this.multipleChoice&&!this.requireOptionMatch&&w(V,this,Yl).call(this)}finally{C(Il,this,!1)}ol(this)}),T(this,Rl,()=>{if(this.multipleChoice){this.changeValues([]);return}this.modelValue=``,this._inputNode&&(this._inputNode.value=``),w(V,this,eu).call(this),this._inputNode?.focus()}),T(this,zl,!1),T(this,Bl,e=>{e.button!==0||this.inactive||(e.preventDefault(),C(zl,this,!!this.opened),this._inputNode?.focus())}),T(this,Vl,()=>{this.inactive||(this.opened=!S(zl,this))}),this.announcement=``,T(this,Hl,null),T(this,Ul,``),T(this,Wl,!1),this.overflowTotal=0,T(this,Gl,void 0),this.defaultValidators=[],this.autocomplete=`list`,this.selectionFollowsFocus=!1,this.addEventListener(`model-value-changed`,e=>{if(this.changingValues){e.stopImmediatePropagation();return}if(e.target===this&&!e.detail?.isTriggeredByUser&&this.pendingModelValue!==void 0&&JSON.stringify(this.modelValue)!==JSON.stringify(this.pendingModelValue)){e.stopImmediatePropagation();return}e.target===this&&e.detail?.isTriggeredByUser&&(this.pendingModelValue=this.multipleChoice?[...this.selectedValues]:this.modelValue,this.multipleChoice&&(this.syncInputs(),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))))}),this.addEventListener(`focusout`,e=>{this.multipleChoice&&!this.requireOptionMatch&&!(e.relatedTarget instanceof Node&&this.contains(e.relatedTarget))&&this.commitQuery()})}firstUpdated(e){super.firstUpdated(e),this._inputNode?.addEventListener(`input`,S(Ll,this)),this._inputNode?.addEventListener(`change`,e=>e.stopPropagation()),this.addEventListener(`model-value-changed`,()=>{C(Nl,this,this.modelValue),S(Il,this)||(ol(this),w(V,this,Jl).call(this))}),this.addEventListener(`blur`,()=>w(V,this,Jl).call(this)),C(Nl,this,this.modelValue),C(Pl,this,this.modelValue),w(V,this,eu).call(this),w(V,this,ql).call(this),this.multipleChoice&&(this.initialValues=[...Array.isArray(this.pendingModelValue)?this.pendingModelValue:[]])}updated(e){super.updated(e),w(V,this,su).call(this),this.multipleChoice?w(V,this,cu).call(this):(S(Gl,this)?.remove(),C(Gl,this,void 0));let t=S(Gl,this)?.id,r=(this.getAttribute(`aria-labelledby`)||this._inputNode?.getAttribute(`aria-labelledby`)||``).split(` `).filter(e=>e&&e!==t).join(` `),i=t?`${r} ${t}`.trim():r;if(this._inputNode?.setAttribute(`aria-labelledby`,i),this._listboxNode?.setAttribute(`aria-labelledby`,r),this._comboboxNode?.setAttribute(`aria-labelledby`,i),this.multipleChoice){this.syncInputs(),this._inputNode.removeAttribute(`name`),this._inputNode.disabled=this.disabled||this.fieldsetDisabled;let e=this.required&&!this.inactive&&this.selectedValues.length===0;this.internals??=this.attachInternals(),this.internals.setValidity(e?{valueMissing:!0}:{},e?n(`This field is required.`):``,this._inputNode)}e.has(`opened`)&&!this.opened&&C(Fl,this,!1),e.has(`placeholder`)&&(this._inputNode.placeholder=this.placeholder),(e.has(`options`)||e.has(`limit`)||e.has(`opened`)||e.has(`modelValue`)||e.has(`showSelectedHint`)||e.has(`multipleChoice`))&&w(V,this,eu).call(this),(e.has(`options`)||e.has(`modelValue`))&&this.toggleAttribute(`has-prefix-icon`,w(V,this,uu).call(this)?.data?.icon!=null||w(V,this,uu).call(this)?.data?.indicator!=null)}addFormElement(e,t){super.addFormElement(e,t);let n=e;n.updateComplete.then(()=>{if(this.multipleChoice){n.checked=Array.isArray(this.pendingModelValue)&&this.pendingModelValue.includes(String(n.choiceValue));return}String(n.choiceValue)===String(this.pendingModelValue)&&(super.modelValue=this.pendingModelValue,this._setTextboxValue(this._getTextboxValueFromOption(n)))})}_notifyModelValueChanged(){JSON.stringify(this.modelValue)!==JSON.stringify(S(Nl,this))&&(C(Nl,this,this.modelValue),this.dispatchEvent(new CustomEvent(`model-value-changed`,{bubbles:!0,composed:!0,detail:{formPath:[this],isTriggeredByUser:!0,changeSource:this.multipleChoice?`selection`:`input`}})))}matchCondition(e){return!this.multipleChoice||!e.hidden}_autoSelectCondition(){return!this.multipleChoice}_highlightMatchedOption(){}_unhighlightMatchedOption(){}_showOverlayCondition(e){return!this.disabled&&!this.readOnly&&(e.lastKey===`ArrowDown`||e.lastKey===`ArrowUp`)||super._showOverlayCondition(e)}disconnectedCallback(){S(Hl,this)!==null&&(clearTimeout(S(Hl,this)),C(Hl,this,null)),C(Wl,this,!1),C(Ul,this,``),this.announcement=``,super.disconnectedCallback()}_overlayListboxTemplate(){return m`
      <div
        id="overlay-content-node-wrapper"
        role="dialog"
        aria-label="${this.msgLit(`lion-combobox:optionsPopup`)}"
      >
        <slot name="listbox"></slot>
        ${this.overflowTotal?m`<div class="combobox__footer" aria-hidden="true">
              ${n(`Showing {shown} of {total} — keep typing to narrow results.`,{shown:this.limit,total:this.overflowTotal})}
            </div>`:i}
      </div>
      <slot id="options-outlet"></slot>
      <div class="cp-visually-hidden" aria-live="polite" aria-atomic="true">
        ${this.announcement}
      </div>
    `}_inputGroupInputTemplate(){let e=w(V,this,uu).call(this)?.data,t=e?.icon,r=e?.color,a=e?.indicator;return m`
      <div class="input-group__input">
        <slot name="selection"></slot>
        <div class="combobox__textbox">
          ${t?m`<craft-icon
                class="prefix"
                name=${t}
                style=${r?`color: ${Ml(r)}`:i}
              ></craft-icon>`:a?m`<span class="prefix prefix--indicator">
                  <craft-indicator
                    fill=${a.fill??i}
                    appearance=${a.appearance??i}
                  ></craft-indicator>
                </span>`:i}
          <slot name="input"></slot>
          ${this.clearable&&w(V,this,ru).call(this)&&!this.inactive?m`<craft-button
                class="clear"
                type="button"
                variant="plain"
                size="small"
                icon
                aria-label=${n(`Clear`)}
                @mousedown=${e=>e.preventDefault()}
                @click=${S(Rl,this)}
              >
                <craft-icon
                  name="xmark-large"
                  style="font-size: 0.8em"
                ></craft-icon>
              </craft-button>`:i}
          <craft-icon
            class="indicator"
            name="chevron-down"
            style="font-size: 0.8em"
            @mousedown=${S(Bl,this)}
            @click=${S(Vl,this)}
          ></craft-icon>
        </div>
      </div>
    `}get selectedValues(){return Array.isArray(this.modelValue)?this.modelValue:[]}get inactive(){return this.disabled||this.readOnly||this.fieldsetDisabled}valueLabel(e){return w(V,this,ou).call(this,e)?.label??e}syncInputs(){this.inputs||(this.inputs=document.createElement(`span`),this.inputs.hidden=!0,this.inputs.slot=`native-inputs`,this.inputs.setAttribute(`data-combobox-inputs`,``),this.append(this.inputs)),s(!this.name||this.disabled||this.fieldsetDisabled?i:m`
            <input type="hidden" name=${this.name} value="" />
            ${this.selectedValues.map(e=>m`<input
                  type="hidden"
                  name=${`${this.name}[]`}
                  .value=${e}
                />`)}
          `,this.inputs)}formResetCallback(){if(this.multipleChoice){this.modelValue=[...this.initialValues],this.value=``,this.syncInputs();return}w(V,this,su).call(this)}formDisabledCallback(e){this.fieldsetDisabled=e,this.requestUpdate(),this.multipleChoice&&this.syncInputs()}changeValues(e){if(this.inactive)return;let t=this.selectedValues.filter(t=>!e.includes(t));this.changingValues=!0;try{this.modelValue=e}finally{this.changingValues=!1}this.value=``,this.opened=!1,w(V,this,eu).call(this),this.syncInputs(),this._notifyModelValueChanged(),this._inputNode.focus(),t.length&&w(V,this,au).call(this,n(`Removed {name}`,{name:new Intl.ListFormat(document.documentElement.lang||void 0,{type:`conjunction`}).format(t.map(e=>this.valueLabel(e)))}),!0)}commitQuery(){let e=this.value;if(this.inactive||e===``)return;let t=[...w(V,this,du).call(this)].find(t=>t.value===e);t?.disabled||this.requireOptionMatch&&!t||this.changeValues([...new Set([...this.selectedValues,e])])}_listboxOnKeyDown(e){if(!this.multipleChoice){super._listboxOnKeyDown(e);return}if(this.inactive||e.isComposing)return;if(e.key===`Backspace`&&this.value===``){e.preventDefault(),this.changeValues(this.selectedValues.slice(0,-1));return}let t=this.formElements[this.activeIndex];if(e.key===`Enter`&&(!this.opened||!t||t.hidden||t.hasAttribute(`aria-hidden`))){e.preventDefault(),this.commitQuery();return}super._listboxOnKeyDown(e)}_syncToTextboxMultiple(){}_resetListboxOptions(){super._resetListboxOptions(),this.hideSelectedOptions()}_handleAutocompletion(){super._handleAutocompletion(),this.hideSelectedOptions()}hideSelectedOptions(){if(!this.multipleChoice)return;for(let e of this.formElements)e.hidden&&(e.setAttribute(`aria-hidden`,`true`),e.removeAttribute(`aria-posinset`),e.removeAttribute(`aria-setsize`));let e=this.formElements.filter(e=>!e.hasAttribute(`aria-hidden`));e.forEach((t,n)=>{t.setAttribute(`aria-posinset`,String(n+1)),t.setAttribute(`aria-setsize`,String(e.length))})}parser(e){if(typeof e==`string`&&e!==``){let t=w(V,this,lu).call(this,e);return t?t.value:e}return super.parser(e)}_syncToTextboxCondition(e,t,n={}){return n.phase===`overlay-close`||super._syncToTextboxCondition(e,t,n)}_getTextboxValueFromOption(e){if(e){let t=e.textContent?.trim()||``;return this.showSelectedHint&&e.hint?`${t} – ${e.hint}`:t}return super._getTextboxValueFromOption(e)}};function ql(){if(this.pendingModelValue===void 0||JSON.stringify(this.modelValue)===JSON.stringify(this.pendingModelValue))return;let e=this.pendingModelValue;this.changingValues=!0;try{this.modelValue=e}finally{this.changingValues=!1}C(Nl,this,this.modelValue),C(Pl,this,this.modelValue)}function Jl(){this.multipleChoice||this.modelValue!==S(Pl,this)&&(C(Pl,this,this.modelValue),sl(this))}function Yl(){let e=this.parser(this._inputNode?.value??``);e!==this.modelValue&&(this.modelValue=e),this._notifyModelValueChanged()}function Xl(e){let t=e.trim().toLowerCase(),n=[];for(let e of this.options)if(w(V,this,Ql).call(this,e))for(let r of e.options)(t===``||w(V,this,$l).call(this,t,r))&&n.push({groupLabel:e.label,option:r});else(t===``||w(V,this,$l).call(this,t,e))&&n.push({option:e});return t===``?n:w(V,this,Zl).call(this,t,n)}function Zl(e,t){let n=({option:t})=>t.label.toLowerCase()===e||String(t.value).toLowerCase()===e,r=[];for(let e=0;e<t.length;){let i=e;for(;i<t.length&&t[i].groupLabel===t[e].groupLabel;)i++;let a=t.slice(e,i);r.push(...a.filter(n),...a.filter(e=>!n(e))),e=i}return r}function Ql(e){return e.type===`optgroup`}function $l(e,t){return t.label.toLowerCase().includes(e)||String(t.value).toLowerCase().includes(e)||(t.data?.keywords?.toLowerCase().includes(e)??!1)}function eu(){let e=this._listboxNode;if(!e)return;let t=S(Fl,this)?this._inputNode?.value??``:``,n=this.multipleChoice?Array.isArray(this.pendingModelValue)?this.pendingModelValue:this.selectedValues:[],r=w(V,this,Xl).call(this,t).filter(e=>!n.includes(e.option.value)),i=r.slice(0,this.limit),a=[...w(V,this,du).call(this)],o=[...n.map(e=>({option:a.find(t=>t.value===e)??{value:e,label:e}})),...i],c=[],l=new Map;for(let e of o){let t=c.at(-1);if(t&&t.groupLabel===e.groupLabel){t.entries.push(e);continue}let n=e.groupLabel??``,r=l.get(n)??0;l.set(n,r+1),c.push({key:`${e.groupLabel===void 0?`options`:`group`}:${n}:${r}`,groupLabel:e.groupLabel,entries:[e]})}let u=e=>ds(e.entries,e=>e.option.value,e=>w(V,this,tu).call(this,e.option,n.includes(e.option.value)));this.overflowTotal=r.length>this.limit?r.length:0,w(V,this,iu).call(this,r.length),s(m`${ds(c,e=>e.key,e=>e.groupLabel===void 0?u(e):m`<craft-option-group .label=${e.groupLabel}>
                ${u(e)}
              </craft-option-group>`)}`,e)}function tu(e,t=!1){let n=e.data??{},r=e.label,a=r.startsWith(`$`)||r.startsWith(`@`);return m`
      <craft-option
        ?hidden=${t}
        aria-hidden=${t?`true`:i}
        .choiceValue=${String(e.value)}
        .hint=${n.hint??null}
        ?disabled=${e.disabled??!1}
      >
        ${w(V,this,nu).call(this,n)}${a?m`<code>${r}</code>`:r}
      </craft-option>
    `}function nu(e){return m`${e.indicator?m`<craft-indicator
          fill=${e.indicator.fill??i}
          appearance=${e.indicator.appearance??i}
        ></craft-indicator>`:i}${e.icon?m`<craft-icon
          name="${e.icon}"
          style=${e.color?`color: ${Ml(e.color)}`:i}
        ></craft-icon>`:i}`}function ru(){return this.multipleChoice?this.selectedValues.length>0:this.modelValue!==``&&this.modelValue!=null}function iu(e){if(!this.opened&&!S(Fl,this)){C(Ul,this,``);return}let t=e===0?n(`No results`):n(`{num, number} {num, plural, =1{result} other{results}}`,{num:e});t!==S(Ul,this)&&(S(Wl,this)&&!S(Fl,this)||(C(Ul,this,t),w(V,this,au).call(this,t)))}function au(e,t=!1){C(Wl,this,t),S(Hl,this)!==null&&(clearTimeout(S(Hl,this)),C(Hl,this,null)),this.announcement=``,queueMicrotask(()=>{this.isConnected&&(this.announcement=e)}),C(Hl,this,setTimeout(()=>{C(Hl,this,null),C(Wl,this,!1),this.announcement=``},5e3))}function ou(e){return[...w(V,this,du).call(this)].find(t=>t.value===e)}function su(){if(this.multipleChoice||typeof this.attachInternals!=`function`)return;this.internals??=this.attachInternals();let e=!this.name||this.disabled||this.fieldsetDisabled,t=typeof this.modelValue==`string`?this.modelValue:``;this.internals.setFormValue(e?null:t)}function cu(){S(Gl,this)||(C(Gl,this,document.createElement(`ul`)),S(Gl,this).slot=`selection`,S(Gl,this).id=`selection-${this._inputId}`,S(Gl,this).setAttribute(`role`,`list`),S(Gl,this).setAttribute(`aria-live`,`polite`),S(Gl,this).setAttribute(`aria-atomic`,`false`),this.append(S(Gl,this))),s(ds(this.selectedValues,e=>e,e=>m`
          <li>
            <craft-combobox-token
              ?removable=${!this.inactive}
              @craft-remove=${()=>this.changeValues(this.selectedValues.filter(t=>t!==e))}
            >
              ${w(V,this,nu).call(this,w(V,this,ou).call(this,e)?.data??{})}
              ${this.valueLabel(e)}
            </craft-combobox-token>
          </li>
        `),S(Gl,this))}function lu(e){let t=e.trim();for(let e of w(V,this,du).call(this))if(w(V,this,fu).call(this,e)===t)return e}function uu(){if(this.multipleChoice||!w(V,this,ru).call(this))return;let e=String(this.modelValue);for(let t of w(V,this,du).call(this))if(String(t.value)===e)return t}function*du(){for(let e of this.options)w(V,this,Ql).call(this,e)?yield*e.options:yield e}function fu(e){return this.showSelectedHint&&e.data?.hint?`${e.label} – ${e.data.hint}`:e.label}Kl.formAssociated=!0,r([c({type:Boolean,attribute:`multiple-choice`,reflect:!0})],Kl.prototype,`multipleChoice`,void 0),r([c({type:Boolean})],Kl.prototype,`required`,void 0),r([c({type:Array})],Kl.prototype,`options`,void 0),r([c({type:Number})],Kl.prototype,`limit`,void 0),r([c({type:Boolean,reflect:!0})],Kl.prototype,`clearable`,void 0),r([c({type:String,reflect:!0})],Kl.prototype,`placeholder`,void 0),r([c({type:Boolean,reflect:!0,attribute:`show-selected-hint`})],Kl.prototype,`showSelectedHint`,void 0),r([p()],Kl.prototype,`announcement`,void 0),r([p()],Kl.prototype,`overflowTotal`,void 0),customElements.get(`craft-combobox`)||customElements.define(`craft-combobox`,Kl);function pu(e){let[t]=e.composedPath();return t instanceof Element&&t.matches(`:focus-visible`)}function mu(e){let t=e.invokerNode;return e._hasDisabledInvoker()&&!t?.focusableWhenDisabled}function hu({delayIn:e=0,delayOut:t=300}={}){return{visibilityTriggerFunction:({controller:n})=>{let r=!1,i=!1,a,o=()=>{r=!1,i=!1},s=o=>{let{type:s}=o;clearTimeout(a),r=s===`focusout`?!1:r||s===`focusin`&&pu(o),i=s===`mouseleave`?!1:i||s===`mouseenter`,a=(r||i)&&!mu(n)?setTimeout(()=>n.show(),e):setTimeout(()=>n.hide(),t)};return{init:()=>{n.addEventListener(`hide`,o),n.contentNode?.addEventListener(`mouseenter`,s),n.contentNode?.addEventListener(`mouseleave`,s),n.invokerNode?.addEventListener(`mouseenter`,s),n.invokerNode?.addEventListener(`mouseleave`,s),n.invokerNode?.addEventListener(`focusin`,s),n.invokerNode?.addEventListener(`focusout`,s)},teardown:()=>{clearTimeout(a),n.removeEventListener(`hide`,o),n.contentNode?.removeEventListener(`mouseenter`,s),n.contentNode?.removeEventListener(`mouseleave`,s),n.invokerNode?.removeEventListener(`mouseenter`,s),n.invokerNode?.removeEventListener(`mouseleave`,s),n.invokerNode?.removeEventListener(`focusin`,s),n.invokerNode?.removeEventListener(`focusout`,s)}}}}}var gu=class extends wn(Cn(d)){static get properties(){return{invokerRelation:{type:String,attribute:`invoker-relation`}}}static get styles(){return[...super.styles,o`
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none;
        }

        ::slotted([slot='content']) {
          width: max-content;
        }
      `]}constructor(){super(),this.hasArrow=!1,this.invokerRelation=`description`}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];_defineOverlayConfig(){let e=super._defineOverlayConfig(),t=On({invokerRelation:this.invokerRelation});return{...e,...t,popperConfig:{...e.popperConfig||{},...t.popperConfig||{},modifiers:[...e.popperConfig?.modifiers||[],...t.popperConfig?.modifiers||[]]}}}},_u=new WeakMap,vu=new WeakMap,yu=new WeakMap,bu=new WeakMap,xu=new WeakMap,Su=new WeakMap,Cu=new WeakSet,wu=class extends gu{constructor(){super(),x(this,Cu),this.placement=`top`,this.trigger=`hover focus`,T(this,_u,null),T(this,vu,null),T(this,yu,()=>kt(this)),T(this,bu,()=>At(this)),T(this,xu,()=>{this.opened=!this.opened}),T(this,Su,null),Et(this)}static get styles(){return[...super.styles,jt,o`
        :host {
          display: contents;
        }

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
          max-inline-size: var(--c-tooltip-max-width, min(45ch, 100vw - 2rem));
          overflow-wrap: break-word;
        }
      `]}connectedCallback(){w(Cu,this,Tu).call(this),super.connectedCallback()}get _overlayInvokerNode(){if(this.for){let e=this.getRootNode();return typeof e.getElementById==`function`?e.getElementById(this.for)??void 0:void 0}return super._overlayInvokerNode}_defineOverlayConfig(){let e={...super._defineOverlayConfig()};if(Eu.call(w(Cu,this))||Du.call(w(Cu,this)))delete e.visibilityTriggerFunction;else{let{visibilityTriggerFunction:t}=hu({delayIn:200,delayOut:0});e.visibilityTriggerFunction=t}return{...e,popperConfig:{...e.popperConfig,strategy:`fixed`,placement:this.placement,modifiers:[...e.popperConfig?.modifiers??[],{name:`offset`,options:{offset:[0,4]}},...Dt()]}}}_setupOpenCloseListeners(){super._setupOpenCloseListeners(),w(Cu,this,Ou).call(this)}_teardownOpenCloseListeners(){super._teardownOpenCloseListeners(),w(Cu,this,ku).call(this)}_setupOverlayCtrl(){super._setupOverlayCtrl(),C(vu,this,this._overlayCtrl),S(vu,this).addEventListener(`before-show`,S(yu,this)),S(vu,this).addEventListener(`hide`,S(bu,this))}_teardownOverlayCtrl(){S(bu,this).call(this),S(vu,this)?.removeEventListener(`before-show`,S(yu,this)),S(vu,this)?.removeEventListener(`hide`,S(bu,this)),C(vu,this,null),super._teardownOverlayCtrl()}updated(e){if(super.updated(e),!this._overlayCtrl||!this.isConnected||!(e.has(`for`)||e.has(`trigger`)))return;let{visibilityTriggerFunction:t}=this._defineOverlayConfig();w(Cu,this,ku).call(this),this._overlayCtrl.updateConfig({invokerNode:this._overlayInvokerNode,visibilityTriggerFunction:t}),w(Cu,this,Ou).call(this)}async show(){this.opened=!0,await this.updateComplete}async hide(){this.opened=!1,await this.updateComplete}};function Tu(){if(S(_u,this)?.isConnected)return;let e=document.createElement(`div`);e.slot=`content`,e.append(...Array.from(this.childNodes).filter(e=>!(e instanceof Element)||e.slot===``)),this.append(e),C(_u,this,e)}function Eu(){return this.trigger.split(` `).includes(`click`)}function Du(){return this.trigger.split(` `).includes(`manual`)}function Ou(){w(Cu,this,ku).call(this),Eu.call(w(Cu,this))&&(C(Su,this,this._overlayInvokerNode??null),S(Su,this)?.addEventListener(`click`,S(xu,this)))}function ku(){S(Su,this)?.removeEventListener(`click`,S(xu,this)),C(Su,this,null)}r([c({reflect:!0})],wu.prototype,`for`,void 0),r([c({reflect:!0})],wu.prototype,`placement`,void 0),r([c({reflect:!0})],wu.prototype,`trigger`,void 0),customElements.get(`craft-tooltip`)||customElements.define(`craft-tooltip`,wu);var Au=o`
  :host {
    display: inline-flex;
  }
`,ju={rest:`custom-icons/clone-dashed`,copying:`custom-icons/clone-dashed`,success:`check`,error:`xmark-large`},Mu=new WeakMap,Nu=new WeakSet,Pu=class extends d{async copyValue(){if(!(this.status===`copying`||this.disabled)){this.status=`copying`;try{await navigator.clipboard.writeText(this.value),this.dispatchEvent(new CustomEvent(`craft-copy`,{bubbles:!0,cancelable:!1,composed:!0,detail:{value:this.value}}))}catch{this.dispatchEvent(new CustomEvent(`craft-error`,{cancelable:!1,composed:!0,bubbles:!0}))}finally{this.isCopying=!1}}}async showStatus(e){clearTimeout(S(Mu,this)),this.status=e,await this.updateComplete,this.tooltipEl?.repositionOverlay(),C(Mu,this,setTimeout(()=>{this.status=`rest`,this.tooltipEl?.hide()},this.feedbackDuration))}constructor(){super(),x(this,Nu),this.isCopying=!1,this.status=`rest`,this.hasLabel=!1,this.value=``,this.disabled=!1,this.feedbackDuration=1e3,this.tooltipLabel=null,this.size=`small`,this.variant=qa.Plain,T(this,Mu,void 0),this.addEventListener(`craft-copy`,()=>{this.showStatus(`success`)}),this.addEventListener(`craft-error`,()=>{this.showStatus(`error`)})}connectedCallback(){super.connectedCallback(),this.id||=`copy-${Math.floor(Math.random()*1e8)}`}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(S(Mu,this)),this.status=`rest`}render(){return m`
      <craft-tooltip for="${this.id}">${Fu.call(w(Nu,this))}</craft-tooltip>
      <craft-button
        type="button"
        id="${this.id}"
        part="button"
        size="${this.size}"
        variant="${this.variant}"
        icon="${ju[this.status]}"
        aria-label="${this.hasLabel?i:n(`Copy to clipboard`)}"
        ?disabled=${this.disabled}
        @click="${this.copyValue}"
        >${this.hasLabel?m`<slot @slotchange=${w(Nu,this,Iu)}></slot>`:i}</craft-button
      >
      ${this.hasLabel?i:m`<slot hidden @slotchange=${w(Nu,this,Iu)}></slot>`}
    `}};function Fu(){return this.status===`success`?n(`Copied`):this.status===`error`?n(`Copy failed`):this.tooltipLabel||n(`Copy`)}function Iu(){this.hasLabel=[...this.childNodes].some(e=>e instanceof Element||!!e.textContent?.trim())}Pu.styles=[Au],r([p()],Pu.prototype,`isCopying`,void 0),r([p()],Pu.prototype,`status`,void 0),r([p()],Pu.prototype,`hasLabel`,void 0),r([g(`craft-tooltip`)],Pu.prototype,`tooltipEl`,void 0),r([c({type:String})],Pu.prototype,`value`,void 0),r([c({type:Boolean})],Pu.prototype,`disabled`,void 0),r([c({attribute:`feedback-duration`,type:Number})],Pu.prototype,`feedbackDuration`,void 0),r([c({attribute:`tooltip-label`})],Pu.prototype,`tooltipLabel`,void 0),r([c({reflect:!0})],Pu.prototype,`size`,void 0),r([c({reflect:!0})],Pu.prototype,`variant`,void 0),customElements.get(`craft-copy-button`)||customElements.define(`craft-copy-button`,Pu);var Lu=o`
  :host(:not(:focus-within)) {
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
`,Ru=o`
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
`,zu=Object.defineProperty,Bu=Object.getOwnPropertyDescriptor,Vu=Object.getOwnPropertySymbols,Hu=Object.prototype.hasOwnProperty,Uu=Object.prototype.propertyIsEnumerable,Wu=e=>{throw TypeError(e)},Gu=(e,t,n)=>t in e?zu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ku=(e,t)=>{for(var n in t||={})Hu.call(t,n)&&Gu(e,n,t[n]);if(Vu)for(var n of Vu(t))Uu.call(t,n)&&Gu(e,n,t[n]);return e},qu=(e,t,n,r)=>{for(var i=r>1?void 0:r?Bu(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&zu(t,n,i),i},Ju=(e,t,n)=>t.has(e)||Wu(`Cannot `+n),Yu=(e,t,n)=>(Ju(e,t,`read from private field`),n?n.call(e):t.get(e)),Xu=(e,t,n)=>t.has(e)?Wu(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Zu=(e,t,n,r)=>(Ju(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Qu,$u=class extends d{constructor(){super(),Xu(this,Qu,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let n=new CustomEvent(e,Ku({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let i=` (unknown version)`,a=i;`version`in t&&t.version&&(i=` v`+t.version),`version`in r&&r.version&&(a=` v`+r.version),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}attributeChangedCallback(e,t,n){Yu(this,Qu)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),Zu(this,Qu,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}};Qu=new WeakMap,$u.version=`2.20.1`,$u.dependencies={},qu([c()],$u.prototype,`dir`,2),qu([c()],$u.prototype,`lang`,2);var ed=class extends $u{render(){return m` <slot></slot> `}};ed.styles=[Ru,Lu],ed.define(`sl-visually-hidden`);var td=o`
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
`,nd=class extends d{constructor(...e){super(...e),this.value=``,this.disabled=!1}getId(){return`attribute-${this.value.replace(/([a-z])([A-Z])/g,`$1-$2`).replace(/[\s_]+/g,`-`).toLowerCase()}`}render(){return m`
      <craft-copy-button
        id="${this.getId()}"
        value="${this.value}"
        class=${O({"copy-attribute":!0})}
      >
        ${this.value}
      </craft-copy-button>
    `}};nd.styles=[re,td],r([g(`craft-copy-button`)],nd.prototype,`copyButtonEl`,void 0),r([c({type:String})],nd.prototype,`value`,void 0),r([c({type:Boolean,reflect:!0})],nd.prototype,`disabled`,void 0),customElements.get(`craft-copy-attribute`)||customElements.define(`craft-copy-attribute`,nd);var rd=[`a[href]`,`area[href]`,`button`,`input`,`select`,`textarea`,`details > summary`,`iframe`,`object`,`embed`,`audio[controls]`,`video[controls]`,`[contenteditable]`,`[tabindex]`].join(`,`);function id(e){return e.hasAttribute(`disabled`)||e.hasAttribute(`inert`)||e.getAttribute(`aria-hidden`)===`true`||e.hidden?!1:e.tabIndex>=0}function ad(e){return(e.shadowRoot?[e.shadowRoot,e]:[e]).flatMap(e=>Array.from(e.querySelectorAll(rd))).filter(id)}function od(e){let t=t=>{if(t.key!==`Tab`)return;let n=ad(e);if(n.length===0)return;let r=n[0],i=n[n.length-1],a=t.composedPath()[0];t.shiftKey&&a===r?(t.preventDefault(),i.focus()):!t.shiftKey&&a===i&&(t.preventDefault(),r.focus())};return e.addEventListener(`keydown`,t),()=>e.removeEventListener(`keydown`,t)}var sd=o`
  :host {
    --_radius: var(--c-resize-grips-radius, var(--c-radius-lg));
    --_edge: calc(8rem / 16);
    --_corner: calc(16rem / 16);
    --_line: 2px;
    position: absolute;
    inset: 0;
    z-index: 1;
    overflow: hidden;
    border-radius: var(--_radius);
    pointer-events: none;
  }

  .grip {
    position: absolute;
    display: flex;
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    pointer-events: auto;
    touch-action: none;
  }

  .grip::before {
    content: '';
    border-radius: 1px;
    background-color: transparent;
    transition:
      background-color 100ms ease-in-out,
      border-color 100ms ease-in-out;
  }

  .grip--inline {
    inset-block: 0;
    inset-inline-end: 0;
    inline-size: var(--_edge);
    justify-content: flex-end;
    cursor: ew-resize;
  }

  .grip--inline::before {
    inline-size: var(--_line);
  }

  .grip--block {
    inset-inline: 0;
    inset-block-end: 0;
    block-size: var(--_edge);
    align-items: flex-end;
    cursor: ns-resize;
  }

  .grip--block::before {
    flex: 1;
    block-size: var(--_line);
  }

  .grip--corner {
    inset-inline-end: 0;
    inset-block-end: 0;
    inline-size: var(--_corner);
    block-size: var(--_corner);
    cursor: nwse-resize;
  }

  :host(:dir(rtl)) .grip--corner {
    cursor: nesw-resize;
  }

  .grip--corner::before {
    position: absolute;
    inset: 0;
    border-style: solid;
    border-width: 0 var(--_line) var(--_line) 0;
    border-color: transparent;
    border-radius: 0 0 var(--_radius) 0;
    background-color: transparent;
  }

  :host(:dir(rtl)) .grip--corner::before {
    border-width: 0 0 var(--_line) var(--_line);
    border-radius: 0 0 0 var(--_radius);
  }

  .grip--corner:focus-visible {
    outline: var(--c-focus-outline-width, 2px) solid
      var(--c-color-focus-outline);
    outline-offset: calc(var(--c-focus-outline-width, 2px) * -1);
    border-radius: var(--c-radius-sm);
  }

  .grip--inline:hover::before,
  .grip--block:hover::before {
    background-color: var(--c-color-accent-border-normal);
  }

  .grip--corner:hover::before,
  .grip--corner:focus-visible::before {
    border-color: var(--c-color-accent-border-normal);
  }

  .grip--inline.grip--active::before,
  .grip--block.grip--active::before {
    background-color: var(--c-color-accent-border-loud);
  }

  .grip--corner.grip--active::before {
    border-color: var(--c-color-accent-border-loud);
  }

  @media (forced-colors: active) {
    .grip--inline:hover::before,
    .grip--block:hover::before,
    .grip--active::before {
      background-color: Highlight;
    }

    .grip--corner:hover::before,
    .grip--corner:focus-visible::before,
    .grip--corner.grip--active::before {
      border-color: Highlight;
      background-color: transparent;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .grip::before {
      transition: none;
    }
  }
`,cd=new WeakMap,ld=new WeakMap,ud=new WeakMap,H=new WeakSet,dd=new WeakMap,fd=class extends d{constructor(...e){super(...e),x(this,H),this.target=null,this.label=``,this.minSize=200,this.step=16,this.largeStep=64,this.dragging=null,T(this,cd,null),T(this,ld,null),T(this,ud,null),T(this,dd,()=>{(S(cd,this)!==null||S(ld,this)!==null)&&w(H,this,vd).call(this,S(cd,this),S(ld,this))})}connectedCallback(){super.connectedCallback(),window.addEventListener(`resize`,S(dd,this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`resize`,S(dd,this))}reset(){C(cd,this,null),C(ld,this,null),w(H,this,yd).call(this)}render(){let e=w(H,this,wd).call(this,`x`),t=w(H,this,wd).call(this,`y`),r=w(H,this,wd).call(this,`both`);return m`
      <div
        class="grip grip--inline ${this.dragging===`x`?`grip--active`:``}"
        part="grip grip-inline"
        aria-hidden="true"
        @pointerdown=${e.down}
        @pointermove=${e.move}
        @pointerup=${e.up}
        @pointercancel=${e.up}
        @dblclick=${()=>this.reset()}
      ></div>
      <div
        class="grip grip--block ${this.dragging===`y`?`grip--active`:``}"
        part="grip grip-block"
        aria-hidden="true"
        @pointerdown=${t.down}
        @pointermove=${t.move}
        @pointerup=${t.up}
        @pointercancel=${t.up}
        @dblclick=${()=>this.reset()}
      ></div>
      <button
        type="button"
        class="grip grip--corner ${this.dragging===`both`?`grip--active`:``}"
        part="grip grip-corner"
        aria-label=${this.label||n(`Resize`)}
        @pointerdown=${r.down}
        @pointermove=${r.move}
        @pointerup=${r.up}
        @pointercancel=${r.up}
        @dblclick=${()=>this.reset()}
        @keydown=${w(H,this,Cd)}
      ></button>
    `}};function pd(){return this.target??this.parentElement}function md(){let e=pd.call(w(H,this));return e?getComputedStyle(e).direction===`rtl`:!1}function hd(){let e=pd.call(w(H,this))?.getBoundingClientRect();return{width:Math.round(e?.width??0),height:Math.round(e?.height??0)}}function gd(){let e=pd.call(w(H,this)),t=e?getComputedStyle(e):null;return{width:parseFloat(t?.maxWidth??``)||window.innerWidth,height:parseFloat(t?.maxHeight??``)||window.innerHeight}}function _d(e,t){return Math.round(Math.min(Math.max(e,this.minSize),t))}function vd(e,t){let n=w(H,this,gd).call(this);C(cd,this,e===null?null:w(H,this,_d).call(this,e,n.width)),C(ld,this,t===null?null:w(H,this,_d).call(this,t,n.height)),w(H,this,yd).call(this)}function yd(){this.dispatchEvent(new CustomEvent(`craft-resize`,{detail:{width:S(cd,this),height:S(ld,this)},bubbles:!0,composed:!0}))}function bd(e,t){if(e.button!==0)return;e.preventDefault();let n=e.currentTarget;try{n.setPointerCapture(e.pointerId)}catch{}let r=w(H,this,hd).call(this);C(ud,this,{axis:t,pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,startWidth:S(cd,this)??r.width,startHeight:S(ld,this)??r.height,sign:md.call(w(H,this))?-1:1}),this.dragging=t}function xd(e){let t=S(ud,this);if(!t||e.pointerId!==t.pointerId)return;let n=(e.clientX-t.startX)*t.sign,r=e.clientY-t.startY;w(H,this,vd).call(this,t.axis===`y`?S(cd,this):t.startWidth+n*2,t.axis===`x`?S(ld,this):t.startHeight+r*2)}function Sd(e){if(!S(ud,this)||e.pointerId!==S(ud,this).pointerId)return;let t=e.currentTarget;t.hasPointerCapture?.(e.pointerId)&&t.releasePointerCapture(e.pointerId),C(ud,this,null),this.dragging=null}function Cd(e){let t=e.shiftKey?this.largeStep:this.step,n=w(H,this,hd).call(this),r=S(cd,this)??n.width,i=S(ld,this)??n.height,a=md.call(w(H,this))?-t:t;switch(e.key){case`ArrowLeft`:w(H,this,vd).call(this,r-a,i);break;case`ArrowRight`:w(H,this,vd).call(this,r+a,i);break;case`ArrowUp`:w(H,this,vd).call(this,r,i-t);break;case`ArrowDown`:w(H,this,vd).call(this,r,i+t);break;case`Enter`:this.reset();break;default:return}e.preventDefault()}function wd(e){return{down:t=>w(H,this,bd).call(this,t,e),move:e=>w(H,this,xd).call(this,e),up:e=>w(H,this,Sd).call(this,e)}}fd.styles=[sd],r([c({attribute:!1})],fd.prototype,`target`,void 0),r([c()],fd.prototype,`label`,void 0),r([c({type:Number,attribute:`min-size`})],fd.prototype,`minSize`,void 0),r([c({type:Number})],fd.prototype,`step`,void 0),r([c({type:Number,attribute:`large-step`})],fd.prototype,`largeStep`,void 0),r([p()],fd.prototype,`dragging`,void 0),customElements.get(`craft-resize-grips`)||customElements.define(`craft-resize-grips`,fd);var Td=o`
  :host {
    display: contents;

    /*
      Sizing hooks. Declared on \`:host\` so an outer-tree rule or an inline
      style on the host still wins — shadow-tree \`:host\` rules always lose to
      the outer tree — and so a subclass can go near-fullscreen without
      reaching into this component's internals.
    */
    --_dialog-inline-size: var(--c-dialog-inline-size, auto);
    --_dialog-min-inline-size: var(
      --c-dialog-min-inline-size,
      min(90vw, 24rem)
    );
    --_dialog-max-inline-size: var(
      --c-dialog-max-inline-size,
      min(90vw, 40rem)
    );
    --_dialog-block-size: var(--c-dialog-block-size, auto);
    --_dialog-max-block-size: var(--c-dialog-max-block-size, 85dvh);
  }

  :host([fullscreen]) {
    --_dialog-inline-size: var(--c-dialog-inline-size, 100vw);
    --_dialog-min-inline-size: var(--c-dialog-min-inline-size, 100vw);
    --_dialog-max-inline-size: var(--c-dialog-max-inline-size, 100vw);
    --_dialog-block-size: var(--c-dialog-block-size, 100dvh);
    --_dialog-max-block-size: var(--c-dialog-max-block-size, 100dvh);
  }

  dialog {
    padding: 0;
    border: 0;
    background: none;
    color: inherit;
    max-width: none;
    max-height: none;
    overflow: visible;
    margin: auto;
  }

  dialog:focus-visible {
    outline: none;
  }

  dialog::backdrop {
    background-color: rgb(0 0 0 / 0.25);
  }

  /*
    Non-modal dialogs get no \`::backdrop\` — that pseudo only paints for the
    top layer — so one is rendered instead. \`show()\` also leaves the dialog in
    normal flow, hence the fixed positioning to center it.
  */
  .backdrop {
    position: fixed;
    inset: 0;
    background-color: rgb(0 0 0 / 0.25);
  }

  :host([non-modal]) dialog {
    position: fixed;
    inset: 0;
    margin: auto;
    z-index: var(--c-layer-overlay, 100);
  }

  .frame {
    position: relative;
    display: grid;
  }

  .frame > .surface {
    isolation: isolate;
  }

  .surface {
    display: grid;
    /*
      header / body / footer — the body is the only row that flexes. Each part
      is pinned to its row, so a dialog without a header leaves the first row
      empty rather than sliding the body into it and stretching the footer.
    */
    grid-template-rows: auto 1fr auto;
    inline-size: var(--_dialog-inline-size);
    min-inline-size: var(--_dialog-min-inline-size);
    max-inline-size: var(--_dialog-max-inline-size);
    block-size: var(--_dialog-block-size);
    max-block-size: var(--_dialog-max-block-size);
    background-color: var(--c-surface-raised);
    box-sizing: border-box;
    border-radius: var(--c-radius-lg);
    box-shadow:
      var(--c-modal-ring, 0 0 0 1px rgb(0 0 0 / 18%)), var(--c-shadow-lg);
    outline: 1px solid transparent;
    overflow: hidden;
  }

  :host([fullscreen]) .surface {
    border-radius: 0;
  }

  .header {
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--c-spacing-md);
    padding: var(--c-spacing-md);
    border-block-end: 1px solid var(--c-color-neutral-border-quiet);
    position: relative;
    z-index: 2;
  }

  .title {
    font-size: var(--c-text-sm);
    font-weight: bold;
    margin: 0;
  }

  .body {
    grid-row: 2;
    /*
      Pairs with \`1fr\` above: without an explicit \`min-block-size: 0\` a grid
      item floors at its content height, so a long slotted index would grow the
      surface past \`--_dialog-max-block-size\` instead of scrolling inside it.
    */
    min-block-size: 0;
    overflow: auto;
    padding: var(--c-spacing-lg);
  }

  .footer {
    grid-row: 3;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--c-spacing-sm);
    padding: var(--c-spacing-md);
    border-block-start: 1px solid var(--c-color-neutral-border-quiet);
    box-shadow: var(--c-shadow-sm);
    position: relative;
    z-index: 2;
  }
`,Ed=0,Dd=0;function Od(){Dd++===0&&document.body.classList.add(`no-scroll`)}function kd(){Dd>0&&--Dd===0&&document.body.classList.remove(`no-scroll`)}var Ad=new WeakMap,jd=new WeakMap,Md=new WeakMap,Nd=new WeakMap,Pd=new WeakMap,Fd=new WeakMap,Id=new WeakSet,Ld=new WeakMap,Rd=new WeakMap,zd=new WeakMap,Bd=new WeakMap,Vd=new WeakMap,Hd=new WeakMap,Ud=new WeakMap,Wd=class extends d{constructor(...e){super(...e),x(this,Id),this.opened=!1,this.label=``,this.nonModal=!1,this.fullscreen=!1,this.closeOnOutsideClick=!1,this.noClose=!1,this.noHeader=!1,T(this,Ad,null),T(this,jd,null),this.resizable=!1,this.resizedSize={width:null,height:null},this.titleId=`craft-dialog-title-${++Ed}`,T(this,Md,!1),T(this,Nd,null),T(this,Pd,!1),T(this,Fd,null),T(this,Ld,e=>{e.stopPropagation(),this.resizedSize=e.detail}),T(this,Rd,e=>{e.preventDefault(),this.requestClose()}),T(this,zd,()=>{this.opened=!1}),T(this,Bd,e=>{!this.opened||e.key!==`Escape`||e.defaultPrevented||e.isComposing||(e.preventDefault(),this.requestClose())}),T(this,Vd,e=>{e.target?.closest?.(`[data-dialog="close"]`)&&this.requestClose()}),T(this,Hd,e=>{this.closeOnOutsideClick&&e.target===this.dialogElement&&this.requestClose()}),T(this,Ud,()=>{this.closeOnOutsideClick&&this.requestClose()})}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,S(Vd,this)),this.addEventListener(`keydown`,S(Bd,this)),C(Fd,this,new MutationObserver(()=>this.requestUpdate())),S(Fd,this).observe(this,{childList:!0})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,S(Vd,this)),this.removeEventListener(`keydown`,S(Bd,this)),S(Fd,this)?.disconnect(),C(Fd,this,null),S(Nd,this)?.call(this),C(Nd,this,null),C(Ad,this,null),C(jd,this,null),w(Id,this,Yd).call(this),Ct()}get dialogElement(){return this.shadowRoot?.querySelector(`dialog`)??null}get hasFooter(){return this.querySelector(`:scope > [slot="footer"]`)!==null}render(){return m`
      ${this.nonModal&&this.opened?m`<div
            class="backdrop"
            part="backdrop"
            @click=${S(Ud,this)}
          ></div>`:i}
      <dialog
        part="dialog"
        aria-labelledby=${this.label===``?i:this.titleId}
        @cancel=${S(Rd,this)}
        @close=${S(zd,this)}
        @click=${S(Hd,this)}
      >
        ${this.resizable&&!this.fullscreen?m`<div class="frame">
              ${w(Id,this,Gd).call(this)}
              <craft-resize-grips
                @craft-resize=${S(Ld,this)}
              ></craft-resize-grips>
            </div>`:w(Id,this,Gd).call(this)}
      </dialog>
    `}get hasHeader(){return!this.noHeader&&(this.label!==``||!this.noClose)}renderHiddenTitle(){return this.label===``?i:m`<h2 part="title" id=${this.titleId} hidden>${this.label}</h2>`}renderHeader(){return m`
      <header class="header" part="header">
        ${this.label===``?m`<div></div>`:m`<h2 class="title" part="title" id=${this.titleId}>
              ${this.label}
            </h2>`}
        ${this.noClose?i:m`<craft-button
              type="button"
              icon="xmark-large"
              size="small"
              variant="plain"
              flush="inline-end block"
              class="close"
              part="close"
              tabindex="0"
              aria-label=${n(`Close`)}
              @click=${()=>this.requestClose()}
            ></craft-button>`}
      </header>
    `}renderBody(){return m`<div class="body" part="body"><slot></slot></div>`}renderFooter(){return m`
      <footer class="footer" part="footer" ?hidden=${!this.hasFooter}>
        <slot name="footer"> </slot>
      </footer>
    `}updated(e){super.updated(e);let t=this.shadowRoot?.querySelector(`craft-resize-grips`),n=this.shadowRoot?.querySelector(`.surface`);t&&n&&t.target!==n&&(t.target=n),this.opened!==S(Md,this)&&(C(Md,this,this.opened),this.opened?w(Id,this,Kd).call(this):w(Id,this,qd).call(this),w(Id,this,Xd).call(this,this.opened))}requestClose(){this.dispatchEvent(new CustomEvent(`craft-before-hide`,{bubbles:!0,composed:!0,cancelable:!0}))&&(this.opened=!1)}};function Gd(){let{width:e,height:t}=this.resizedSize,n=this.resizable&&!this.fullscreen;return m`<div
      class="surface"
      part="surface"
      style=${cr({"inline-size":n&&e!==null?`${e}px`:void 0,"block-size":n&&t!==null?`${t}px`:void 0})}
    >
      ${this.hasHeader?this.renderHeader():this.renderHiddenTitle()}
      ${this.renderBody()} ${this.renderFooter()}
    </div>`}function Kd(){let e=this.dialogElement,t=document.activeElement;C(Ad,this,t instanceof HTMLElement?t:null),C(jd,this,lt(S(Ad,this))),e&&!e.open&&(this.nonModal?e.show():e.showModal()),this.nonModal&&(S(Nd,this)?.call(this),C(Nd,this,od(this))),S(Pd,this)||(C(Pd,this,!0),Od())}function qd(){let e=this.dialogElement,t=S(Ad,this),n=S(jd,this);C(Ad,this,null),C(jd,this,null);let r=!1;e?.open&&(r=this.matches(`:focus-within`),e.close()),S(Nd,this)?.call(this),C(Nd,this,null),w(Id,this,Yd).call(this),Ct();let i=document.activeElement,a=!rt(i)||this.contains(i);(!this.nonModal||r||a)&&w(Id,this,Jd).call(this,t,n,a)}function Jd(e,t,n){let r=this.returnFocus?.(e);if(rt(r)){r.focus();return}n&&t?.()?.focus()}function Yd(){S(Pd,this)&&(C(Pd,this,!1),kd())}function Xd(e){w(Id,this,Zd).call(this,e?`craft-show`:`craft-hide`),this.updateComplete.then(()=>{this.opened===e&&w(Id,this,Zd).call(this,e?`craft-after-show`:`craft-after-hide`)})}function Zd(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}Wd.styles=[re,Td],r([c({type:Boolean,attribute:`open`,reflect:!0})],Wd.prototype,`opened`,void 0),r([c()],Wd.prototype,`label`,void 0),r([c({type:Boolean,attribute:`non-modal`,reflect:!0})],Wd.prototype,`nonModal`,void 0),r([c({type:Boolean,reflect:!0})],Wd.prototype,`fullscreen`,void 0),r([c({type:Boolean,attribute:`close-on-outside-click`})],Wd.prototype,`closeOnOutsideClick`,void 0),r([c({type:Boolean,attribute:`no-close`,reflect:!0})],Wd.prototype,`noClose`,void 0),r([c({type:Boolean,attribute:`no-header`,reflect:!0})],Wd.prototype,`noHeader`,void 0),r([c({attribute:!1})],Wd.prototype,`returnFocus`,void 0),r([c({type:Boolean,reflect:!0})],Wd.prototype,`resizable`,void 0),r([p()],Wd.prototype,`resizedSize`,void 0),customElements.get(`craft-dialog`)||customElements.define(`craft-dialog`,Wd);var Qd=new WeakMap,$d=new WeakSet,ef=class{constructor(e,t){this.host=e,this.source=t,x(this,$d),T(this,Qd,null),e.addController(this)}hostConnected(){w($d,this,tf).call(this)}hostDisconnected(){w($d,this,nf).call(this)}resubscribe(){w($d,this,nf).call(this),w($d,this,tf).call(this)}get state(){return this.source()?.state??null}};function tf(){C(Qd,this,this.source()?.on(`change`,()=>this.host.requestUpdate())??null)}function nf(){S(Qd,this)?.call(this),C(Qd,this,null)}var rf=o`
  :host {
    /*
      An element index needs room: a near-fullscreen surface rather than the
      confirmation-sized default craft-dialog ships with.
    */
    --_dialog-inline-size: var(--c-dialog-inline-size, min(96vw, 80rem));
    --_dialog-min-inline-size: var(
      --c-dialog-min-inline-size,
      min(96vw, 20rem)
    );
    --_dialog-max-inline-size: var(--c-dialog-max-inline-size, 96vw);
    --_dialog-max-block-size: var(--c-dialog-max-block-size, 90dvh);

    /*
      A floor, not a fixed height. The surface grows with the result list up to
      the max-block-size above and then scrolls inside; a short list gets a
      short dialog rather than a tall one full of empty space. The floor keeps
      a one-row result from collapsing into a sliver.
    */
    --_dialog-min-block-size: var(--c-dialog-min-block-size, 400px);
  }

  .surface {
    min-block-size: min(
      var(--_dialog-min-block-size),
      var(--_dialog-max-block-size)
    );
    border-radius: var(--c-modal-radius, var(--c-radius-lg));
    box-shadow:
      var(--c-modal-ring, 0 0 0 1px rgb(0 0 0 / 18%)), var(--c-shadow-2xl);
  }

  .header {
    box-sizing: border-box;
    min-block-size: var(--c-modal-header-height, calc(57rem / 16));
    padding-block: var(--c-spacing-sm);
  }

  :host([fullscreen]) {
    --_dialog-min-block-size: var(--c-dialog-min-block-size, 100dvh);
  }

  /* Held at the height it opened at (see #queueSizeLock), within the max. */
  :host([size-locked]:not([fullscreen])) .surface {
    block-size: min(var(--_locked-block-size), var(--_dialog-max-block-size));
  }

  /* The index supplies its own padding, and its sidebar runs edge to edge. */
  .body {
    padding: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    min-block-size: 0;
  }

  /*
    Kept in the accessibility tree when the title is hidden: the <dialog> is
    labeled by it, so removing it would leave the dialog unnamed.
  */
  .title--hidden {
    position: absolute;
    inline-size: 1px;
    block-size: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
  }

  /*
    The footer holds two groups. The base dialog packs its footer to the end, so
    an auto margin on the first group is what splits them: it absorbs the free
    space, holding secondary actions at the start and leaving the primary
    buttons flush right. It works the same when the secondary group is empty,
    which is the common case.
  */
  .footer {
    box-sizing: border-box;
    min-block-size: var(--c-modal-footer-height, calc(54rem / 16));
    padding-block: var(--c-spacing-sm);
    padding-inline: var(--cp-container-padding, var(--c-spacing-lg));
  }

  .footer__group {
    display: flex;
    align-items: center;
    gap: var(--c-spacing-sm);
  }

  .footer__group--secondary {
    margin-inline-end: auto;
  }

  /*
    While a selection is being saved, the index and the secondary actions stop
    responding. The interaction block itself is the inert attribute set in
    renderBody/renderFooter, which reaches slotted content this component does
    not own; these rules only supply the matching visual state.
  */
  :host([busy]) .body,
  :host([busy]) .footer__group--secondary {
    opacity: 0.6;
  }
`,af=new WeakMap,of=new WeakMap,sf=new WeakMap,cf=new WeakMap,lf=new WeakMap,uf=new WeakSet,df=new WeakMap,ff=new WeakMap,pf=class extends Wd{constructor(){super(),x(this,uf),this.controller=null,this.showTitle=!1,this.selectLabel=``,this.cancelLabel=``,this.busy=!1,this.loading=!1,this.canSubmit=!1,this.narrow=!1,this.hasIndex=!1,T(this,af,new ef(this,()=>this.controller)),T(this,of,null),T(this,sf,void 0),T(this,cf,void 0),T(this,lf,()=>{w(uf,this,hf).call(this),clearTimeout(S(cf,this)),C(cf,this,setTimeout(()=>w(uf,this,mf).call(this),200))}),T(this,df,()=>{this.submit()}),T(this,ff,()=>{this.busy||this.requestClose()}),this.resizable=!0}connectedCallback(){super.connectedCallback(),window.addEventListener(`resize`,S(lf,this)),typeof ResizeObserver<`u`&&(C(of,this,new ResizeObserver(([e])=>{e&&(this.narrow=e.contentRect.width<550)})),this.hasUpdated&&w(uf,this,gf).call(this))}disconnectedCallback(){super.disconnectedCallback(),S(of,this)?.disconnect(),window.removeEventListener(`resize`,S(lf,this)),clearTimeout(S(cf,this)),w(uf,this,hf).call(this)}updated(e){super.updated(e),!this.opened||!this.hasIndex?w(uf,this,hf).call(this):(e.has(`hasIndex`)||e.has(`opened`))&&!this.hasAttribute(`size-locked`)&&w(uf,this,mf).call(this)}willUpdate(e){e.has(`controller`)&&S(af,this).resubscribe();let t=S(af,this).state;t&&(this.opened=t.open,this.busy=t.busy,this.loading=t.loading,this.canSubmit=t.canSubmit,this.label=t.title,this.showTitle=t.showTitle,this.selectLabel=t.selectLabel,this.hasIndex=t.indexBody!==null),super.willUpdate(e)}firstUpdated(e){super.firstUpdated(e),w(uf,this,gf).call(this)}renderHeader(){if(this.label===``)return m``;let e=m`<h1
      class=${this.showTitle?`title`:`title title--hidden`}
      part="title"
      id=${this.titleId}
    >
      ${this.label}
    </h1>`;return this.showTitle?m`<header class="header" part="header">${e}</header>`:e}renderBody(){return m`
      <div class="body" part="body" ?inert=${this.busy}>
        ${this.loading&&!this.hasIndex?m`<slot name="loading"
              ><div class="loading"><craft-spinner></craft-spinner></div
            ></slot>`:i}
        <slot></slot>
      </div>
    `}renderFooter(){return m`
      <footer class="footer" part="footer">
        <div
          class="footer__group footer__group--secondary"
          part="secondary-actions"
          ?inert=${this.busy}
        >
          <slot name="secondary-actions"></slot>
        </div>
        <div class="footer__group" part="primary-actions">
          <slot name="primary-actions"></slot>
          <craft-button
            part="cancel"
            type="button"
            variant="fill"
            ?disabled=${this.busy}
            @click=${S(ff,this)}
          >
            ${this.cancelLabel||n(`Cancel`)}
          </craft-button>
          <craft-button
            part="select"
            type="button"
            variant="primary"
            ?disabled=${!this.canSubmit}
            ?loading=${this.busy}
            @click=${S(df,this)}
          >
            ${this.selectLabel||n(`Select`)}
          </craft-button>
        </div>
      </footer>
    `}submit(){this.canSubmit&&(this.dispatchEvent(new CustomEvent(`craft-select`,{bubbles:!0,composed:!0})),this.controller?.submit())}requestClose(){if(this.dispatchEvent(new CustomEvent(`craft-cancel`,{bubbles:!0,composed:!0})),this.controller){this.controller.cancel();return}super.requestClose()}};function mf(){S(sf,this)!==void 0&&cancelAnimationFrame(S(sf,this)),C(sf,this,requestAnimationFrame(()=>{C(sf,this,requestAnimationFrame(()=>{C(sf,this,void 0);let e=this.shadowRoot?.querySelector(`.surface`);if(!this.opened||!this.hasIndex||!e)return;let t=e.getBoundingClientRect().height;t>0&&(this.style.setProperty(`--_locked-block-size`,`${t}px`),this.setAttribute(`size-locked`,``))}))}))}function hf(){S(sf,this)!==void 0&&(cancelAnimationFrame(S(sf,this)),C(sf,this,void 0)),this.removeAttribute(`size-locked`),this.style.removeProperty(`--_locked-block-size`)}function gf(){let e=this.shadowRoot?.querySelector(`.surface`);e&&S(of,this)?.observe(e)}pf.styles=[...Wd.styles,rf],r([c({attribute:!1})],pf.prototype,`controller`,void 0),r([c({type:Boolean,attribute:`show-title`,reflect:!0})],pf.prototype,`showTitle`,void 0),r([c({attribute:`select-label`})],pf.prototype,`selectLabel`,void 0),r([c({attribute:`cancel-label`})],pf.prototype,`cancelLabel`,void 0),r([c({type:Boolean,reflect:!0})],pf.prototype,`busy`,void 0),r([c({type:Boolean,reflect:!0})],pf.prototype,`loading`,void 0),r([c({type:Boolean,attribute:`can-submit`,reflect:!0})],pf.prototype,`canSubmit`,void 0),r([c({type:Boolean,reflect:!0})],pf.prototype,`narrow`,void 0),r([p()],pf.prototype,`hasIndex`,void 0),customElements.get(`craft-element-selector-modal`)||customElements.define(`craft-element-selector-modal`,pf);var _f=class extends d{static get styles(){return[o`
        :host {
          display: block;
        }

        :host ::slotted([slot='content']) {
          overflow: hidden;
        }
      `]}static get properties(){return{opened:{type:Boolean,reflect:!0}}}render(){return m`
      <slot name="invoker"></slot>
      <slot name="content"></slot>
    `}constructor(){super(),this.opened=!1,this.toggle=this.toggle.bind(this)}connectedCallback(){super.connectedCallback();let e=Vt();this._invokerNode&&(this._invokerNode.addEventListener(`click`,this.toggle),this._invokerNode.setAttribute(`aria-expanded`,`${this.opened}`),this._invokerNode.setAttribute(`aria-controls`,`collapsible-content-${e}`)),this._contentNode&&this._contentNode.setAttribute(`id`,`collapsible-content-${e}`),this.__setDefaultState()}updated(e){super.updated(e),e.has(`opened`)&&this.__openedChanged()}disconnectedCallback(){super.disconnectedCallback(),this._invokerNode&&this._invokerNode.removeEventListener(`click`,this.toggle)}show(){this.opened||=!0}hide(){this.opened&&=!1}toggle(){this.opened=!this.opened,this.requestUpdate()}async _showAnimation(e){}async _hideAnimation(e){}get _invokerNode(){return Array.from(this.children).find(e=>e.slot===`invoker`)}get _contentNode(){return Array.from(this.children).find(e=>e.slot===`content`)}get _contentHeight(){return`${this._contentNode?.getBoundingClientRect().height||0}px`}__openedChanged(){this.__updateContentSize(),this._invokerNode&&this._invokerNode.setAttribute(`aria-expanded`,`${this.opened}`),this.dispatchEvent(new CustomEvent(`opened-changed`))}async __updateContentSize(){this._contentNode&&(this.opened?(this._contentNode.style.setProperty(`display`,``),await this._showAnimation({contentNode:this._contentNode})):(await this._hideAnimation({contentNode:this._contentNode}),this._contentNode.style.setProperty(`display`,`none`)))}__setDefaultState(){!this.opened&&this._contentNode&&this._contentNode.style.setProperty(`display`,`none`)}},vf=[`chevron-down`,`chevron-up`,`chevron-right`,`chevron-left`],yf=class extends _f{static get styles(){return[...super.styles,o`
        ::slotted([slot='content']) {
          margin-block-start: var(--c-spacing-lg);
        }

        :host(:not([appearance='plain'])) ::slotted([slot='content']) {
          padding-inline-start: var(--c-spacing-lg);
          border-inline-start: 1px solid var(--c-color-neutral-border-quiet);
        }
      `]}constructor(){super(),this.label=``,this.appearance=`line`,this.size=`medium`,this.state=null,this.cookieName=null,this.__defaultInvoker=null,this.__externalTrigger=null,this.__externalExpanded=!1,this.__announcedOpened=null,this.__announceOpenedChange=()=>{if(this.__externalTrigger)return;let e=!!this.opened,t=this.__announcedOpened;this.__announcedOpened=e,t!==null&&t!==e&&this.dispatchEvent(new CustomEvent(e?`craft-show`:`craft-hide`))},this.__toggleExternal=()=>{this.state=this.__externalExpanded?`collapsed`:`expanded`},this.addEventListener(`opened-changed`,this.__announceOpenedChange)}get __externalTarget(){let e=this.__externalTrigger?.getAttribute(`aria-controls`);return e?document.getElementById(e):null}render(){return m`
      <slot name="invoker"></slot>
      <slot name="content"></slot>
      <slot></slot>
    `}connectedCallback(){this.__externalTrigger=this.querySelector(`:scope > button[type="button"][aria-controls]:not([slot])`),this.__externalTrigger||this.__ensureDefaultInvoker(),super.connectedCallback(),this.__externalTrigger&&this.__setupExternalMode()}disconnectedCallback(){super.disconnectedCallback(),this.__externalTrigger&&(this.__handleExternalOpen(),this.__externalTrigger.removeEventListener(`click`,this.__toggleExternal))}updated(e){super.updated(e),e.has(`label`)&&this.__defaultInvoker&&(this.__defaultInvoker.textContent=this.label),e.has(`size`)&&this.__defaultInvoker&&this.__defaultInvoker.setAttribute(`size`,this.size),e.has(`opened`)&&this.__syncInvokerChevron(),e.has(`state`)&&this.__externalTrigger&&(this.state===`expanded`?this.__handleExternalOpen():this.state===`collapsed`&&this.__handleExternalClose())}__ensureDefaultInvoker(){if(this._invokerNode)return;let e=document.createElement(`craft-button`);e.slot=`invoker`,e.setAttribute(`type`,`button`),e.setAttribute(`variant`,`plain`),e.setAttribute(`flush`,``),e.setAttribute(`icon`,`chevron-right`),e.setAttribute(`icon-position`,`suffix`),e.textContent=this.label,this.__defaultInvoker=e,this.prepend(e)}__syncInvokerChevron(){let e=this._invokerNode;if(!(e instanceof z)||!e.icon||!vf.includes(e.icon))return;let t=getComputedStyle(this).direction===`rtl`;e.iconPosition=`suffix`,e.icon=this.opened?`chevron-down`:t?`chevron-left`:`chevron-right`}__setupExternalMode(){let e=this.__externalTrigger;if(!this.__externalTarget){console.error(`No target with id ${e.getAttribute(`aria-controls`)} found for disclosure.`,e);return}e.addEventListener(`click`,this.__toggleExternal),this.state!==`expanded`&&this.state!==`collapsed`&&(this.state=`expanded`)}__handleExternalOpen(){this.__externalExpanded=!0,this.__externalTrigger?.setAttribute(`aria-expanded`,`true`),this.dispatchEvent(new CustomEvent(`craft-show`));let e=this.__externalTarget;e&&(e.dataset.state=`expanded`),this.__persistExternalState(`expanded`)}__handleExternalClose(){this.__externalExpanded=!1,this.__externalTrigger?.setAttribute(`aria-expanded`,`false`),this.dispatchEvent(new CustomEvent(`craft-hide`));let e=this.__externalTarget;e&&(e.dataset.state=`collapsed`),this.__persistExternalState(`collapsed`)}__persistExternalState(e){this.cookieName&&window.Craft?.setCookie(this.cookieName,e)}};r([c()],yf.prototype,`label`,void 0),r([c({reflect:!0})],yf.prototype,`appearance`,void 0),r([c({reflect:!0})],yf.prototype,`size`,void 0),r([c({reflect:!0})],yf.prototype,`state`,void 0),r([c({attribute:`cookie-name`})],yf.prototype,`cookieName`,void 0),customElements.get(`craft-disclosure`)||customElements.define(`craft-disclosure`,yf);var bf=class extends d{constructor(...e){super(...e),this.label=``,this.icon=``,this.appearance=`plain`}render(){return m`
      <div class="cp-empty">
        <div class="cp-empty__content">
          <slot name="graphic">
            ${this.icon?m`
                  <craft-icon
                    class="cp-empty__icon"
                    name="${this.icon}"
                    style="font-size: calc(48rem / 16)"
                  ></craft-icon>
                `:i}
          </slot>
          <slot name="content">
            <p class="label">${this.label}</p>
          </slot>

          <slot></slot>
        </div>
      </div>
    `}};bf.styles=[o`
      .cp-empty {
        min-height: calc(120rem / 16);
        display: grid;
        place-items: center;
        border-radius: var(--c-radius-md);
        border: 1px solid transparent;
        padding-block: var(--c-spacing-lg);
      }

      .cp-empty__content {
        display: grid;
        gap: var(--c-spacing-md);
        justify-items: center;
        max-width: 60ch;
        text-align: center;
      }

      /* Decorative (the label says the same), so it needn't meet 3:1 */
      .cp-empty__icon {
        color: var(--color-slate-200);
      }

      .label {
        margin: 0;
        font-size: 1.25em;
        color: var(--c-text-quiet);
      }

      :host([appearance~='outline']) .cp-empty {
        border-color: var(--c-color-border-quiet);
      }
    `],r([c()],bf.prototype,`label`,void 0),r([c()],bf.prototype,`icon`,void 0),r([c({reflect:!0})],bf.prototype,`appearance`,void 0),customElements.get(`craft-empty`)||customElements.define(`craft-empty`,bf);var xf=o`
  :host {
    position: relative;
    display: block;
  }

  /* A slotted control with a maxlength (reflected as has-maxlength) shrinks
     to its own width instead of spanning the column. width="full" spans
     despite a maxlength; width="auto" shrinks without one. Only the input
     shrinks: the heading (and its actions) and feedback still span the
     column, in line with other fields'. */
  :host([has-maxlength]:not([width='full'])) .input-group__container,
  :host([width='auto']) .input-group__container {
    width: fit-content;
    max-width: 100%;
  }

  /* Stop the input chrome from flexing back out to the available space, while
     still letting it shrink to the column: a long maxlength, such as a
     Title's 255 characters, sizes the input far wider than the column. */
  :host([has-maxlength]:not([width='full'])) .input-group__input,
  :host([width='auto']) .input-group__input {
    flex: 0 1 auto;
    min-width: 0;
  }

  :host([hidden]) {
    display: none;
  }

  .form-field__status-indicator {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: calc(var(--c-spacing-lg) * -1);
    width: 2px;
    height: 100%;
    cursor: help;
    z-index: 1;
    border-radius: 1px;
  }

  .form-field--modified .form-field__status-indicator {
    background-color: var(--c-field-modified-indicator, #7c3cf4);
    box-shadow: 0 0 5px
      color-mix(
        in srgb,
        var(--c-field-modified-indicator, #7c3cf4) 15%,
        transparent
      );
  }

  .form-field--outdated .form-field__status-indicator {
    background-color: var(--bg-pending, var(--c-status-pending-fill));
    box-shadow: 0 0 5px
      color-mix(
        in srgb,
        var(--bg-pending, var(--c-status-pending-fill)) 15%,
        transparent
      );
  }

  /* Heading row (the CP's .field > .heading) */
  .form-field__label {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: center;
    font-size: var(--c-field-label-font-size, inherit);
    font-weight: var(--c-field-label-font-weight, bold);
    color: var(--c-field-label-color, inherit);
  }

  /* Pushes slotted label extras to the far end of the heading row. */
  .form-field__label .flex-grow {
    flex: 1 0 0;
  }

  .field-actions {
    display: flex;
    flex-wrap: nowrap;
    gap: var(--c-spacing-2xs, 0.125rem);
    align-items: center;

    /* Absolutely position so the label doesn't take up the height of the button */
    position: absolute;
    inset-inline-end: 0;
  }

  ::slotted([slot='label']) {
    display: flex;
    flex-wrap: wrap;
    gap: var(--c-spacing-xs);
    align-items: center;
    line-height: var(--c-field-label-line-height, inherit);
  }

  .read-only-badge,
  ::slotted([slot='label-badge']) {
    font-size: calc(11rem / 16);
    font-weight: normal;
    line-height: 1.45;
    padding-block: 0;
    padding-inline: 0.25em;
    border: 1px solid var(--c-color-neutral-border-quiet);
    border-radius: var(--c-radius-sm, 3px);
  }

  .read-only-badge {
    background-color: var(--c-color-neutral-fill-quiet);
    color: var(--c-color-neutral-on-quiet);
  }

  /* Input container (.field > .input in the CP) */
  .input-group {
    position: relative;
  }

  .input-group.ltr {
    direction: ltr;
  }

  .input-group.rtl {
    direction: rtl;
  }

  .input-group.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input-group__container {
    display: flex;
  }

  .input-group__input {
    flex: 1;
    display: flex;
    /* Let the chrome shrink below its content's intrinsic width (e.g. a
       slotted input with a large size attribute), instead of blowing out
       of the column. */
    min-width: 0;
  }

  .input-group__container > .input-group__input ::slotted(.form-control) {
    flex: 1 1 auto;
    /* A flex item's automatic minimum size is its content, so a control wider
       than the column — a Matrix field's row of add buttons, say — would push
       out of the field instead of shrinking. The input-group__input wrapper
       needs the same escape hatch one level up. */
    min-width: 0;
    margin: 0;
    font-size: 100%;
  }

  /* Error styling hook, mirroring .field.has-errors / .input.errors */
  :host([has-errors='true']) {
    ::slotted([slot='label']) {
      color: var(--c-color-danger-on-quiet);
    }

    ::slotted([slot='input']) {
      border-color: var(--c-color-danger-border-loud);
    }

    .form-field__feedback {
      color: var(--c-color-danger-on-quiet);
    }
  }
`,Sf=class extends fr(ci(d)){constructor(...e){super(...e),this.required=!1,this.translatable=!1,this.translationDescription=n(`This field is translatable.`),this.fieldset=!1,this.hasErrors=!1,this.instructionsPosition=`before`,this.instructionsSrOnly=!1,this.__hasSlot=new dr(this,`heading-prefix`,`label-extra`,`actions`,`heading-suffix`),this.__lightDomObserver=new MutationObserver(()=>this.__onLightDomChanged()),this.__enhancedInput=null}static get styles(){return[le,er,xf]}connectedCallback(){super.connectedCallback(),this.__enhancedInput=this._inputNode??null,this.__lightDomObserver.observe(this,{childList:!0}),this.__syncHasErrors(),this.__syncHasMaxlength(),this.__syncControlWidth(),this.updateComplete.then(()=>{this.addToAriaLabelledBy(this._labelNode),this.__wireDescribedBy()})}__syncHasMaxlength(){let e=this.querySelector(`:scope > [slot="input"]`);this.toggleAttribute(`has-maxlength`,!!(e?.hasAttribute(`maxlength`)&&!e.matches(`textarea, craft-textarea`)))}__syncControlWidth(){if(this.width!==void 0)return;let e=this.querySelector(`:scope > [slot="input"]`)?.getAttribute(`width`);(e===`full`||e===`auto`)&&(this.width=e)}disconnectedCallback(){super.disconnectedCallback(),this.__lightDomObserver.disconnect()}updated(e){super.updated(e),e.has(`disabled`)&&this._inputNode?.removeAttribute(`aria-disabled`),e.has(`fieldset`)&&this.__syncFieldsetSemantics(),(e.has(`label`)||e.has(`required`)||e.has(`translatable`)||e.has(`translationDescription`))&&this.__syncLabelDecorations()}get control(){return this._inputNode??void 0}get _resolvedOrientation(){return this.orientation?this.orientation:(this.closest(`[dir]`)?.getAttribute(`dir`)??document.documentElement.getAttribute(`dir`))?.toLowerCase()===`rtl`?`rtl`:`ltr`}_enhanceLightDomA11y(){super._enhanceLightDomA11y(),this.__wireDescribedBy(),this.__syncFieldsetSemantics()}_onLabelClick(){this.__formControlTarget()?.focus()}addToAriaLabelledBy(e,t={}){let n=this.__formControlTarget();if(n){n.addToAriaLabelledBy(e,{...t,idPrefix:`field-${t.idPrefix??`label`}`});return}if(this.fieldset||!this.__hasNativeLabelTarget()){this.__addGroupAriaReference(`aria-labelledby`,e,`label`);return}super.addToAriaLabelledBy(e,{...t,reorder:!1})}addToAriaDescribedBy(e,t={}){let n=this.__formControlTarget();if(n){n.addToAriaDescribedBy(e,{...t,idPrefix:`field-${t.idPrefix??`description`}`});return}if(this.fieldset||!this.__hasNativeLabelTarget()){this.__addGroupAriaReference(`aria-describedby`,e,t.idPrefix??`description`);return}super.addToAriaDescribedBy(e,{...t,reorder:!1})}render(){return m`
      <div
        class="${O({"form-field":!0,[`form-field--${this.status}`]:!!this.status})}"
      >
        ${this._statusBadgeTemplate()}
        <div class="form-field__group-one">${this._groupOneTemplate()}</div>
        <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
      </div>
    `}_groupOneTemplate(){return m`
      ${this._labelTemplate()}
      ${this.instructionsPosition===`before`?this._helpTextTemplate():i}
    `}_groupTwoTemplate(){return m`
      ${this._inputGroupTemplate()}
      ${this.instructionsPosition===`after`?this._helpTextTemplate():i}
      ${this._feedbackTemplate()}
    `}_labelTemplate(){let e=this.__hasLabel,t=this.__hasSlot.test(`label-extra`),r=this.__hasSlot.test(`actions`),a=t||r||this.readOnly&&!this.labelSrOnly||this.__hasSlot.test(`label-badge`)||this.__hasSlot.test(`heading-prefix`)||this.__hasSlot.test(`heading-suffix`);if(!e&&!a&&!this.readOnly)return m``;let o=i;return e&&(o=this.labelSrOnly&&a?m`<span class="cp-visually-hidden"
              ><slot name="label"></slot
            ></span>`:m`<slot name="label"></slot>`),m`
      <div
        class=${O({"form-field__label":!0,"cp-visually-hidden":this.labelSrOnly&&!a})}
      >
        <slot name="heading-prefix"></slot>
        ${o}
        ${this.readOnly?m`<span
              class=${O({"read-only-badge":!0,"cp-visually-hidden":this.labelSrOnly&&a})}
              >${n(`Read Only`)}</span
            >`:i}
        <slot name="label-badge"></slot>
        ${t||r?m`<div class="flex-grow"></div>`:i}
        <slot name="label-extra"></slot>
        ${r?m`
              <div
                class="field-actions"
                part="actions"
                role="group"
                aria-label=${n(`Field actions`)}
              >
                <slot name="actions"></slot>
              </div>
            `:m`<slot name="actions"></slot>`}
        <slot name="heading-suffix"></slot>
      </div>
    `}_helpTextTemplate(){return this.__hasHelpText?this.instructionsSrOnly?m`<div class="cp-visually-hidden">${super._helpTextTemplate()}</div>`:super._helpTextTemplate():m``}_inputGroupTemplate(){return m`
      <div class=${O({"input-group":!0,input:!0,[this._resolvedOrientation]:!0,errors:this.hasErrors,disabled:this.disabled})}>
        ${this._inputGroupBeforeTemplate()}
        <div class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_statusBadgeTemplate(){return this.status?m`
      <div
        class="form-field__status-indicator"
        title=${ht(this.statusLabel)}
        aria-hidden="true"
      >
        <craft-visually-hidden>${this.statusLabel}</craft-visually-hidden>
      </div>
    `:i}get __hasLabel(){return this.label.trim()!==``}get __hasHelpText(){return this.helpText.trim()!==``}__lightChild(e){return Array.from(this.children).find(t=>t.slot===e)}__onLightDomChanged(){this.__enhanceSwappedInput(),this.__wireDescribedBy(),this.__syncFieldsetSemantics(),this.__syncHasErrors(),this.__syncLabelDecorations(),this.__syncHasMaxlength(),this.__syncControlWidth(),this.requestUpdate()}__wireDescribedBy(){let e=Array.from(this.children).filter(e=>e.slot===`after`&&`addToAriaDescribedBy`in e);for(let t of[`help-text`,`feedback`]){let n=this.__lightChild(t);if(n){this.addToAriaDescribedBy(n,{idPrefix:t});for(let r of e)r.addToAriaDescribedBy(n,{idPrefix:`field-${t}`})}}}__enhanceSwappedInput(){let e=this._inputNode;if(!(!e||e===this.__enhancedInput)){if(this.__enhancedInput=e,this._enhanceLightDomClasses(),e.id||=this._inputId,this.__formControlTarget()){this._labelNode&&this.addToAriaLabelledBy(this._labelNode);return}this._ariaLabelledNodes=[...this._ariaLabelledNodes],this._ariaDescribedNodes=[...this._ariaDescribedNodes]}}__formControlTarget(){let e=this._inputNode;return e&&`addToAriaLabelledBy`in e&&`addToAriaDescribedBy`in e?e:void 0}__hasNativeLabelTarget(){return!!this._inputNode?.matches(`button, input, meter, output, progress, select, textarea`)}__addGroupAriaReference(e,t,n){t.id||=`${n}-${this._inputId}`;let r=new Set((this.getAttribute(e)??``).split(/\s+/).filter(Boolean));r.add(t.id),this.setAttribute(e,[...r].join(` `))}__syncHasErrors(){let e=this.__lightChild(`feedback`);e&&(this.hasErrors=!!(e.childElementCount||e.textContent?.trim()))}__syncFieldsetSemantics(){let e=this._labelNode,t=this.__formControlTarget();this.fieldset||!t&&!this.__hasNativeLabelTarget()?(this.setAttribute(`role`,`group`),e&&(e.id||=`label-${this._inputId}`,this.setAttribute(`aria-labelledby`,e.id),e.removeAttribute(`for`))):(this.getAttribute(`role`)===`group`&&this.removeAttribute(`role`),this.removeAttribute(`aria-labelledby`),e&&t?e.removeAttribute(`for`):e&&this._inputNode&&e.setAttribute(`for`,this._inputNode.id||this._inputId))}__syncLabelDecorations(){let e=this._labelNode;if(e){for(let t of e.querySelectorAll(`[data-craft-field-decoration]`))t.remove();if(this.label){if(this.required){let t=document.createElement(`craft-visually-hidden`);t.textContent=n(`Required`),t.setAttribute(`data-craft-field-decoration`,``);let r=document.createElement(`craft-icon`);r.setAttribute(`name`,`asterisk`),r.setAttribute(`data-craft-field-decoration`,``),r.setAttribute(`data-color`,`danger`),r.setAttribute(`aria-hidden`,`true`),e.append(t,r)}if(this.translatable){let t=document.createElement(`craft-tooltip`);t.setAttribute(`placement`,`bottom`),t.textContent=this.translationDescription,t.setAttribute(`data-craft-field-decoration`,``);let n=document.createElement(`craft-button`);n.type=`button`,n.slot=`invoker`,n.variant=`plain`,n.size=`small`,n.icon=`language`,n.className=`t9n-indicator prevent-autofocus`,n.setAttribute(`aria-label`,this.translationDescription),t.append(n),e.append(t)}}}}};r([c({type:Boolean,reflect:!0})],Sf.prototype,`required`,void 0),r([c({type:Boolean,reflect:!0})],Sf.prototype,`translatable`,void 0),r([c({attribute:`translation-description`})],Sf.prototype,`translationDescription`,void 0),r([c({type:Boolean,reflect:!0})],Sf.prototype,`fieldset`,void 0),r([c({reflect:!0})],Sf.prototype,`status`,void 0),r([c({attribute:`status-label`})],Sf.prototype,`statusLabel`,void 0),r([c({reflect:!0})],Sf.prototype,`orientation`,void 0),r([c({type:Boolean,reflect:!0,attribute:`has-errors`})],Sf.prototype,`hasErrors`,void 0),r([c({attribute:`instructions-position`})],Sf.prototype,`instructionsPosition`,void 0),r([c({type:Boolean,reflect:!0,attribute:`instructions-sr-only`})],Sf.prototype,`instructionsSrOnly`,void 0),r([c({type:String,reflect:!0})],Sf.prototype,`width`,void 0),customElements.get(`craft-field`)||customElements.define(`craft-field`,Sf);var Cf=class extends d{constructor(...e){super(...e),this.separated=!1,this.resizeObserver=new ResizeObserver(()=>this.scheduleColumnUpdate()),this.childObserver=new MutationObserver(()=>{this.observeChildren(),this.scheduleColumnUpdate()}),this.columnUpdateFrame=null}connectedCallback(){super.connectedCallback(),this.toggleColumnTracking()}disconnectedCallback(){super.disconnectedCallback(),this.stopColumnTracking()}updated(e){e.has(`separated`)&&this.toggleColumnTracking()}toggleColumnTracking(){this.stopColumnTracking(),!(!this.separated||!this.isConnected)&&(this.childObserver.observe(this,{childList:!0}),this.observeChildren(),this.scheduleColumnUpdate())}stopColumnTracking(){this.childObserver.disconnect(),this.resizeObserver.disconnect(),this.columnUpdateFrame!==null&&(cancelAnimationFrame(this.columnUpdateFrame),this.columnUpdateFrame=null);for(let e of this.children)e.removeAttribute(`data-follows-column`)}observeChildren(){this.resizeObserver.disconnect(),this.resizeObserver.observe(this);for(let e of this.children)this.resizeObserver.observe(e)}scheduleColumnUpdate(){this.columnUpdateFrame===null&&(this.columnUpdateFrame=requestAnimationFrame(()=>{this.columnUpdateFrame=null,this.updateColumns()}))}updateColumns(){let e=null;for(let t of this.children){if(!(t instanceof HTMLElement)||t.localName===`style`||t.localName===`slot`)continue;let n=t.getClientRects().length>0;t.toggleAttribute(`data-follows-column`,n&&e!==null&&e.offsetTop===t.offsetTop),n&&(e=t)}}render(){return m`
      <style>
        craft-field-group {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: var(--gap, calc(var(--c-spacing) * 6)) var(--c-spacing-md);
          container-type: inline-size;
        }

        craft-field-group > * {
          grid-column: 1 / -1;
          min-width: 0;
        }

        /* Capped so the eleven gaps never crowd out the columns in a narrow
           group, such as a details panel, where fields don't share rows. */
        craft-field-group[separated] {
          --_column-gap: min(
            calc(
              var(--c-field-group-separator-spacing, var(--c-spacing-lg)) * 2
            ),
            100% / 12
          );
          column-gap: var(--_column-gap);
        }

        craft-field-group[separated] > [data-follows-column] {
          position: relative;
        }

        /* Matches the column gap, but in cqi: a percentage here would resolve against the field, not the group. */
        craft-field-group[separated] > [data-follows-column]::before {
          content: '';
          position: absolute;
          inset-block: 0;
          inset-inline-start: calc(
            min(
                calc(
                  var(--c-field-group-separator-spacing, var(--c-spacing-lg)) *
                    2
                ),
                100cqi / 12
              ) /
              -2
          );
          border-inline-start: 1px solid var(--c-color-neutral-border-quiet);
          pointer-events: none;
        }

        craft-field-group.auto-widths > :not([class*='width-']) {
          width: fit-content;
        }

        craft-field-group.auto-widths > :not([class*='width-']) craft-select {
          width: max-content;
          max-width: 100%;
        }

        craft-field[fieldset]
          > craft-field-group.auto-widths:not(:has(> [class*='width-'])) {
          display: flex;
          flex-wrap: wrap;
          gap: var(--c-spacing-sm) var(--c-spacing-md);
        }

        /* Sub-labels of grouped inputs. --c-text-quiet is the lightest text
           color that still meets WCAG AA contrast at this size. */
        craft-field[fieldset] > craft-field-group.auto-widths {
          --c-field-label-font-size: var(--c-text-sm);
          --c-field-label-font-weight: var(--font-weight-semibold, 600);
          --c-field-label-color: var(--c-text-quiet);
          --c-field-label-line-height: 1;
          --c-field-label-margin-block-end: var(--c-spacing-sm);
          margin-block-start: var(--c-spacing-sm);
        }

        craft-field[fieldset][required]
          > craft-field-group
          craft-field[required]
          > [slot='label']
          > craft-icon[name='asterisk'][data-craft-field-decoration] {
          display: none;
        }

        @container (min-width: 30rem) {
          craft-field-group.auto-widths > :not([class*='width-']) {
            grid-column: span 2;
          }

          craft-field-group > .width-25 {
            grid-column: span 3;
          }

          craft-field-group > .width-33 {
            grid-column: span 4;
          }

          craft-field-group > .width-50 {
            grid-column: span 6;
          }

          craft-field-group > .width-66 {
            grid-column: span 6;
          }

          craft-field-group > .width-75 {
            grid-column: span 6;
          }
        }

        @container (min-width: 50rem) {
          craft-field-group.auto-widths > :not([class*='width-']) {
            grid-column: span 1;
          }

          craft-field-group.auto-widths
            > :not([class*='width-']):has(craft-select) {
            grid-column: span 2;
          }

          craft-field-group > .width-25 {
            grid-column: span 3;
          }

          craft-field-group > .width-33 {
            grid-column: span 4;
          }

          craft-field-group > .width-50 {
            grid-column: span 6;
          }

          craft-field-group > .width-66 {
            grid-column: span 8;
          }

          craft-field-group > .width-75 {
            grid-column: span 9;
          }
        }

        @container (min-width: 25rem) and (max-width: calc(50rem - 1px)) {
          craft-field-group > .width-25 {
            grid-column: span 6;
          }
        }
      </style>
      <slot></slot>
    `}createRenderRoot(){return this}};r([c({type:Boolean,reflect:!0})],Cf.prototype,`separated`,void 0),customElements.get(`craft-field-group`)||customElements.define(`craft-field-group`,Cf);var wf=new WeakMap,Tf=new WeakMap,Ef=new WeakMap,Df=new WeakSet,Of=class extends d{constructor(...e){super(...e),x(this,Df),this.label=n(`More Info`),this.icon=`circle-info`,this.disabled=!1,T(this,wf,new AbortController),T(this,Tf,null),T(this,Ef,`info-icon-${Math.random().toString(36).slice(2,8)}`)}connectedCallback(){super.connectedCallback(),S(wf,this).signal.aborted&&C(wf,this,new AbortController);let{signal:e}=S(wf,this);this.addEventListener(`craft-show`,()=>{Af._&&Af._!==this&&Af._.renderRoot.querySelector(`craft-tooltip`)?.hide(),Af._=this,w(Df,this,kf).call(this)},{signal:e}),this.addEventListener(`craft-after-hide`,()=>{Af._===this&&(Af._=null),S(Tf,this)?.abort(),C(Tf,this,null)},{signal:e})}disconnectedCallback(){Af._===this&&(Af._=null),S(Tf,this)?.abort(),C(Tf,this,null),S(wf,this).abort(),super.disconnectedCallback()}render(){return m`
      <div class="cp-info-icon">
        <craft-button
          type="button"
          icon
          size="zero"
          variant="plain"
          id="${S(Ef,this)}"
        >
          <craft-icon name="${this.icon}" label="${this.label}"></craft-icon>
        </craft-button>

        <craft-tooltip trigger="click" for="${S(Ef,this)}"
          ><slot></slot
        ></craft-tooltip>
      </div>
    `}};function kf(){S(Tf,this)?.abort(),C(Tf,this,new AbortController),document.addEventListener(`pointerdown`,e=>{e.composedPath().includes(this)||this.renderRoot.querySelector(`craft-tooltip`)?.hide()},{capture:!0,signal:S(Tf,this).signal})}Of.styles=o`
    :host {
      display: inline-flex;
    }
  `;var Af={_:null};r([c()],Of.prototype,`label`,void 0),r([c()],Of.prototype,`icon`,void 0),r([c({type:Boolean,reflect:!0})],Of.prototype,`disabled`,void 0),r([g(`craft-tooltip`)],Of.prototype,`tooltip`,void 0),customElements.get(`craft-info-icon`)||customElements.define(`craft-info-icon`,Of);var jf=o`
  ${er}

  :host {
    display: block;
  }

  .input-color {
    display: grid;
    gap: var(--c-spacing-sm);
  }

  .input-group__before,
  .input-group__after {
    display: contents;
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
    outline: var(--c-focus-outline-width) var(--c-focus-outline-style)
      var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
  }

  .input-color__preview {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px var(--c-color-border-translucent);
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
    cursor: inherit;
  }

  .input-group__container {
    ${Qn}
    flex: 0 0 7.25rem;
    inline-size: 7.25rem;
    max-inline-size: 100%;
    /* The input inherits this through its slot; ::slotted() can't beat the page's input font reset */
    font-family: var(--c-font-mono);
  }

  .input-group__input {
    display: flex;
    flex: 1 1 auto;
  }

  /*
    The # sits inside the input, as its value's first character, like the
    search input's icon. Clicks pass through it to the input.
  */
  .input-group__prefix {
    position: absolute;
    inset-block: 0;
    inset-inline-start: 0;
    z-index: 1;
    padding-inline: calc(
        var(--c-input-spacing-inline) + var(--c-input-border-width)
      )
      0;
    border: none;
    background: none;
    pointer-events: none;
    color: var(--c-text-quiet);
    user-select: none;
    font-family: var(--c-font-mono);
    display: grid;
    place-items: center;
  }

  .input-group__prefix + .input-group__input ::slotted([slot='input']) {
    --_input-start-start-radius: var(--c-input-radius, var(--c-radius-sm));
    --_input-end-start-radius: var(--c-input-radius, var(--c-radius-sm));
    --c-focus-outline-style: inherit;
    --c-focus-outline-offset: inherit;
    padding-inline-start: calc(
      var(--c-input-spacing-inline) + 1ch + var(--c-spacing-xs)
    );
  }

  ::slotted([slot='input']) {
    width: 100%;
    min-inline-size: 0;
    font: inherit;
    font-family: var(--c-font-mono);
    padding-block: 0;

    border: 0;
    appearance: none;
    background-color: transparent;
  }

  ::slotted(.form-control) {
    ${Zn}
  }
`,Mf=/^[0-9a-f]{6}(?:[0-9a-f]{2})?$/i,Nf=/^[0-9a-f]{3,4}$/i,Pf=/^color\(srgb\s+([\d.e+-]+)\s+([\d.e+-]+)\s+([\d.e+-]+)(?:\s*\/\s*([\d.e+-]+))?\)$/,Ff={fromAttribute(e){if(!e)return[];try{let t=JSON.parse(e);return Array.isArray(t)?t.map(e=>String(e)):[]}catch{return[]}}};function If(e){return String(e??``).trim().replace(/^#/,``)}function Lf(e){let t=If(e);return Nf.test(t)?t.split(``).map(e=>e+e).join(``):Mf.test(t)?t:null}function Rf(e){if(e.startsWith(`#`))return e.substring(1);let t=e.match(Pf);if(!t)return e;let n=e=>Math.round(Math.min(Math.max(parseFloat(e),0),1)*255).toString(16).padStart(2,`0`),[,r=``,i=``,a=``,o]=t,s=n(r)+n(i)+n(a);return o!==void 0&&parseFloat(o)<1&&(s+=n(o)),s}var zf=class e extends L{static get styles(){return[...super.styles,jf]}constructor(){super(),this.presets=[],this.alpha=!1,this._pickerListId=`${this._inputId}-presets`,this.type=`text`}static doesBrowserSupportColorInputs(){if(e._browserSupportsColorInputs===null){let t=document.createElement(`input`);t.setAttribute(`type`,`color`),e._browserSupportsColorInputs=t.type===`color`}return e._browserSupportsColorInputs}static doesBrowserSupportAlphaColorInputs(){return e._browserSupportsAlphaColorInputs===null&&(e._browserSupportsAlphaColorInputs=`alpha`in document.createElement(`input`)),e._browserSupportsAlphaColorInputs}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`),t=this.getAttribute(`value`);return e.type=`text`,e.inputMode=`text`,e.spellcheck=!1,e.setAttribute(`autocorrect`,`off`),e.setAttribute(`autocapitalize`,`off`),t&&e.setAttribute(`value`,If(t)),e}}}parser(e){return If(e)}formatter(e){return If(e)}serializer(e){return If(e)}deserializer(e){return If(e)}preprocessor(e){let t=If(e);if(t!==e)return t}get _expandedHexValue(){return Lf(this.modelValue)}_pickerHex(t){return this.alpha&&e.doesBrowserSupportAlphaColorInputs()?t:t.substring(0,6)}get _pickerValue(){return this._expandedHexValue?`#${this._pickerHex(this._expandedHexValue)}`:`#ffffff`}get _validPresets(){return this.presets.map(e=>Lf(e)).filter(e=>e!==null).map(e=>`#${this._pickerHex(e)}`)}_handlePickerInput(e){let t=e.target,n=If(Rf(t.value)),r=this._isHandlingUserInput;this._isHandlingUserInput=!0,this.modelValue=n,this.value=n,this._isHandlingUserInput=r}_pickerTemplate(){if(!e.doesBrowserSupportColorInputs())return i;let t=this._validPresets;return m`
      <input
        class="input-color__picker"
        type="color"
        aria-label="${n(`Color picker`)}"
        ?alpha="${this.alpha}"
        .value="${this._pickerValue}"
        ?disabled="${this.disabled}"
        list=${t.length?this._pickerListId:i}
        @input="${this._handlePickerInput}"
      />
      ${t.length?m`
            <datalist id="${this._pickerListId}">
              ${t.map(e=>m`<option value="${e}"></option>`)}
            </datalist>
          `:i}
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
    `}};zf._browserSupportsColorInputs=null,zf._browserSupportsAlphaColorInputs=null,r([c({converter:Ff})],zf.prototype,`presets`,void 0),r([c({type:Boolean,reflect:!0})],zf.prototype,`alpha`,void 0),customElements.get(`craft-input-color`)||customElements.define(`craft-input-color`,zf);var Bf=class extends L{constructor(...e){super(...e),this.inlineSuffix=!0}_renderSuffix(){return m`<craft-copy-button
      tooltip-label="${n(`Copy`)}"
    ></craft-copy-button>`}get slots(){return{...super.slots,suffix:()=>({template:this._renderSuffix(),renderAsDirectHostChild:!0})}}connectedCallback(){super.connectedCallback(),this.readOnly=!0}_copyButton(){return this.querySelector(`craft-copy-button`)}_syncCopyButton(){let e=this._copyButton();e&&(e.value=this.copyValue??String(this.modelValue??``))}updated(e){super.updated(e),this.readOnly=!0,this._syncCopyButton()}};r([c({type:String,attribute:`copy-value`})],Bf.prototype,`copyValue`,void 0),customElements.get(`craft-input-copy`)||customElements.define(`craft-input-copy`,Bf);var Vf=class extends L{constructor(){super(),this.type=`date`}};customElements.get(`craft-input-date`)||customElements.define(`craft-input-date`,Vf);var Hf={fromAttribute:e=>e!==`false`,toAttribute:e=>String(e)},Uf=e=>({fromAttribute:t=>t?JSON.parse(t):e(),toAttribute:e=>JSON.stringify(e)}),Wf=new WeakSet,Gf=class extends L{constructor(){super(),x(this,Wf),this.minuteIncrement=30,this.disabledTimeRanges=[],this.forceRoundTime=!1,this.type=`time`}connectedCallback(){super.connectedCallback(),this.addEventListener(`change`,w(Wf,this,Kf))}disconnectedCallback(){this.removeEventListener(`change`,w(Wf,this,Kf)),super.disconnectedCallback()}willUpdate(e){super.willUpdate(e),e.has(`minuteIncrement`)&&(this.step=this.minuteIncrement*60)}updated(e){super.updated(e),w(Wf,this,qf).call(this)}};function Kf(e){if(!(e.target===this||!(e.target instanceof HTMLInputElement))){if(this.forceRoundTime){let t=w(Wf,this,Jf).call(this,e.target.value);e.target.value=t,this.modelValue=t,this.value=t}w(Wf,this,qf).call(this)}}function qf(){let e=this._inputNode;if(!e)return;let t=w(Wf,this,Yf).call(this,e.value),n=t!==null&&this.disabledTimeRanges.some(([e,n])=>{let r=w(Wf,this,Yf).call(this,e),i=w(Wf,this,Yf).call(this,n);return r!==null&&i!==null&&t>=r&&t<i});e.setCustomValidity(n?`This time is unavailable.`:``)}function Jf(e){let t=w(Wf,this,Yf).call(this,e);if(t===null)return e;let n=Math.max(1,this.minuteIncrement)*60,r=Math.min(86399,Math.round(t/n)*n),i=Math.floor(r/3600),a=Math.floor(r%3600/60);return`${String(i).padStart(2,`0`)}:${String(a).padStart(2,`0`)}`}function Yf(e){let t=/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(e);return t?Number(t[1])*3600+Number(t[2])*60+Number(t[3]??0):null}r([c({type:Number,attribute:`minute-increment`})],Gf.prototype,`minuteIncrement`,void 0),r([c({attribute:`disabled-time-ranges`,converter:Uf(()=>[])})],Gf.prototype,`disabledTimeRanges`,void 0),r([c({type:Boolean,attribute:`force-round-time`})],Gf.prototype,`forceRoundTime`,void 0),customElements.get(`craft-input-time`)||customElements.define(`craft-input-time`,Gf);var Xf={date:()=>n(`Date`),time:()=>n(`Time`),timezone:()=>n(`Time Zone`)},U=new WeakSet,Zf=new WeakMap,Qf=new WeakMap,$f=new WeakMap,ep=new WeakMap,tp=new WeakMap,W=class extends d{constructor(...e){super(...e),x(this,U),this.dateValue=``,this.timeValue=``,this.showDate=!0,this.showTime=!0,this.showTimezone=!1,this.minuteIncrement=30,this.disabledTimeRanges=[],this.forceRoundTime=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.clearable=!1,T(this,Zf,async()=>{this.showDate&&(this.dateValue=``),this.showTime&&(this.timeValue=``),this.showTimezone&&(this.timezone=``),await this.updateComplete,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.querySelector(`[data-date-time-part] input`)?.focus()}),T(this,Qf,void 0),T(this,$f,void 0),T(this,ep,e=>{let t=e.type===`focusin`?e.target:e.relatedTarget;this.toggleAttribute(`input-focused`,t instanceof Element&&this.contains(t)&&t.closest(`[data-date-time-part]`)!==null)}),T(this,tp,e=>{let t=e.target;if(e.detail?.initialize||!(t instanceof L))return;let n=String(t.modelValue??``);switch(t.dataset.dateTimePart){case`date`:this.dateValue=n;break;case`time`:this.timeValue=n;break;case`timezone`:this.timezone=n}})}render(){return m`<div class="inputs" part="inputs">
        <slot name="inputs"></slot>
      </div>
      <slot @slotchange=${()=>w(U,this,ip).call(this)}></slot>
      ${this.clearable&&!this.disabled&&!this.readonly?m`<craft-button
            part="clear"
            class=${w(U,this,np).call(this)?``:`invisible`}
            type="button"
            icon="xmark-large"
            aria-label=${n(`Clear`)}
            variant="plain"
            size="small"
            @click=${S(Zf,this)}
          ></craft-button>`:null}`}connectedCallback(){super.connectedCallback(),this.addEventListener(`model-value-changed`,S(tp,this)),this.addEventListener(`focusin`,S(ep,this)),this.addEventListener(`focusout`,S(ep,this)),S(Qf,this)??C(Qf,this,new ResizeObserver(()=>w(U,this,ip).call(this))),S(Qf,this).observe(this)}disconnectedCallback(){this.removeEventListener(`model-value-changed`,S(tp,this)),this.removeEventListener(`focusin`,S(ep,this)),this.removeEventListener(`focusout`,S(ep,this)),S(Qf,this)?.disconnect(),S($f,this)!==void 0&&(cancelAnimationFrame(S($f,this)),C($f,this,void 0)),super.disconnectedCallback()}updated(e){super.updated(e),w(U,this,ap).call(this),w(U,this,op).call(this),w(U,this,sp).call(this),w(U,this,fp).call(this,`locale`,this.locale,!0),w(U,this,fp).call(this,`timezone`,this.timezone,!this.showTimezone),this.toggleAttribute(`single`,[this.showDate,this.showTime,this.showTimezone].filter(Boolean).length===1),w(U,this,ip).call(this)}};function np(){return!!(this.showDate&&this.dateValue||this.showTime&&this.timeValue||this.showTimezone&&this.timezone)}function rp(){let e=this.shadowRoot?.querySelector(`.inputs`);if(!e)return;let t=this.getBoundingClientRect(),n=e.getBoundingClientRect(),r=getComputedStyle(this),i=r.direction===`rtl`?n.left-t.left-parseFloat(r.borderLeftWidth):t.right-parseFloat(r.borderRightWidth)-n.right;e.style.setProperty(`--_beside-size`,`${Math.max(0,i)}px`)}function ip(){S($f,this)===void 0&&C($f,this,requestAnimationFrame(()=>{C($f,this,void 0);let e=[...this.querySelectorAll(`:scope > [data-date-time-part]`)],t=e.map(e=>e.getBoundingClientRect().top);this.toggleAttribute(`stacked`,t.some(e=>e>(t[0]??e)+1)),e.forEach((e,n)=>{let r=t[n+1];e.toggleAttribute(`data-row-end`,r===void 0||r>t[n]+1)}),w(U,this,rp).call(this)}))}function ap(){let e=w(U,this,cp).call(this,`craft-input-date`,`date`,this.showDate);e instanceof Vf&&(w(U,this,dp).call(this,e,`date`,this.dateValue,this.required),e.min=this.min,e.max=this.max,w(U,this,lp).call(this,e))}function op(){let e=w(U,this,cp).call(this,`craft-input-time`,`time`,this.showTime);e instanceof Gf&&(w(U,this,dp).call(this,e,`time`,this.timeValue,this.required),e.min=this.minTime,e.max=this.maxTime,e.minuteIncrement=this.minuteIncrement,e.disabledTimeRanges=this.disabledTimeRanges,e.forceRoundTime=this.forceRoundTime,w(U,this,lp).call(this,e))}function sp(){let e=w(U,this,cp).call(this,`craft-input`,`timezone`,this.showTimezone);e&&(w(U,this,dp).call(this,e,`timezone`,this.timezone??``,!1),w(U,this,lp).call(this,e))}function cp(e,t,n){let r=[...this.children].find(t=>t.tagName.toLowerCase()===e&&t instanceof L);if(!n)return r?.remove(),null;let i=r??document.createElement(e);return i.dataset.dateTimePart=t,i.slot=`inputs`,i}function lp(e){e.parentElement!==this&&this.insertBefore(e,w(U,this,up).call(this))}function up(){return[...this.children].find(e=>!(e instanceof HTMLElement)||e.dataset.dateTimePart===void 0&&e.dataset.dateTimeMetadata===void 0)??null}function dp(e,t,n,r){e.name=this.name?`${this.name}[${t}]`:``,e.disabled=this.disabled,e.readOnly=this.readonly,e.required=r,e.modelValue!==n&&(e.modelValue=n),this.describedBy?e.setAttribute(`aria-describedby`,this.describedBy):e.removeAttribute(`aria-describedby`),e.label=Xf[t]?.()??t,e.labelSrOnly=!0}function fp(e,t,n){let r=this.name?`${this.name}[${e}]`:void 0,i=[...this.children].find(t=>t instanceof HTMLInputElement&&t.type===`hidden`&&t.dataset.dateTimeMetadata===e);if(!r||!n){i?.remove();return}let a=i??document.createElement(`input`);a.type=`hidden`,a.dataset.dateTimeMetadata=e,a.name=r,a.value=t??``,i||this.append(a)}W.styles=o`
    :host {
      --_border-width: var(
        --c-input-border-width,
        var(--c-form-control-border-width, 1px)
      );
      --_border-color: var(
        --c-input-border-color,
        var(--c-form-control-border-color)
      );
      --_divider-color: var(--c-color-neutral-border-quiet);
      --_height: var(--c-input-height, var(--c-size-control-md));
      --_row-height: calc(var(--_height) - var(--_border-width) * 2);
      --_button-inset: calc(
        (var(--_height) - var(--_border-width) * 2 - var(--c-size-control-sm)) /
          2
      );
      display: inline-flex;
      align-items: stretch;
      max-width: 100%;
      box-sizing: border-box;
      min-height: var(--_height);
      border: var(--_border-width)
        var(--c-input-border-style, var(--c-form-control-border-style, solid))
        var(--_border-color);
      border-radius: var(--c-input-radius, var(--c-radius-md));
      background-color: var(--c-input-fill);
      box-shadow: var(--c-input-shadow);
      overflow: clip;
    }

    :host([width='full']) {
      display: flex;
    }

    /*
      The inputs share a row while they fit at their natural widths, and wrap
      onto rows of their own when they don't. A slotted button stays to their
      right, spanning every row.
    */
    .inputs {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      min-width: 0;
    }

    ::slotted(:is(craft-input, craft-input-date, craft-input-time)) {
      --c-input-border-width: 0px;
      --c-input-radius: 0px;
      --c-input-shadow: none;
      --c-input-fill: transparent;
      --c-input-height: var(--_row-height);
      --c-focus-outline-offset: -2px;
    }

    /* Split the row evenly, but never narrower than an input's own width. */
    slot[name='inputs']::slotted([data-date-time-part]) {
      flex: 1 1 0;
      min-width: max-content;
    }

    slot[name='inputs']::slotted([data-date-time-part]:not(:first-child)) {
      border-inline-start: var(--_border-width) solid var(--_divider-color);
    }

    /*
      Stacked, the divider runs above the input instead, across the whole
      field, beside slotted content too, so the host draws it between rows.
      The input's borders stay as wide, just transparent, so the inputs need
      the same room either way and don't flip back and forth at the
      threshold.
    */
    :host([stacked])
      slot[name='inputs']::slotted([data-date-time-part]:not(:first-child)) {
      border-inline-start-color: transparent;
      border-block-start: var(--_border-width) solid transparent;
    }

    :host([stacked]) {
      --_focus-outline-width: var(--c-focus-outline-width);
      background-image: repeating-linear-gradient(
        to bottom,
        transparent 0 var(--_row-height),
        var(--_divider-color) 0 calc(var(--_row-height) + var(--_border-width))
      );
    }

    /*
      Stacked, a part that ends its row reaches across any slotted content
      beside the inputs, and draws the focus ring in place of its input, so the
      ring spans the whole field. The padding matches the margin, so the part
      takes up the same room and the inputs wrap the same way.
    */
    :host([stacked])
      slot[name='inputs']::slotted([data-date-time-part][data-row-end]) {
      --c-focus-outline-width: 0px;
      margin-inline-end: calc(var(--_beside-size, 0px) * -1);
      padding-inline-end: var(--_beside-size, 0px);
    }

    :host([stacked])
      slot[name='inputs']::slotted([data-date-time-part][data-row-end]:focus-within) {
      outline: var(--_focus-outline-width) solid var(--c-color-focus-outline);
      outline-offset: -2px;
    }

    /*
      Slotted controls, such as a clear button, sit inside the border too, at
      their own size, with no divider before them.
    */
    slot:not([name])::slotted(*),
    [part='clear'] {
      flex: none;
      align-self: center;
      margin-inline-end: var(--_button-inset);
    }

    :host([stacked]) slot:not([name])::slotted(*),
    :host([stacked]) [part='clear'] {
      align-self: end;
      margin-block-end: var(--_button-inset);
    }

    /* Hidden rather than removed, so the inputs keep the same width */
    [part='clear'].invisible {
      visibility: hidden;
    }

    :host([width='full']) .inputs {
      flex: 1 1 auto;
    }

    /*
      A lone date or time input reads as an ordinary input: the whole field,
      clear button included, takes the usual focus ring, standing off its
      border, rather than one inset around the input.
    */
    :host([single]) slot[name='inputs']::slotted([data-date-time-part]) {
      --c-focus-outline-width: 0px;
    }

    :host([single][input-focused]) {
      outline: var(--c-focus-outline-width) var(--c-focus-outline-style)
        var(--c-color-focus-outline);
      outline-offset: var(--c-focus-outline-offset);
    }
  `,r([c()],W.prototype,`name`,void 0),r([c({attribute:`date-value`})],W.prototype,`dateValue`,void 0),r([c({attribute:`time-value`})],W.prototype,`timeValue`,void 0),r([c()],W.prototype,`locale`,void 0),r([c()],W.prototype,`timezone`,void 0),r([c({attribute:`show-date`,converter:Hf})],W.prototype,`showDate`,void 0),r([c({attribute:`show-time`,converter:Hf})],W.prototype,`showTime`,void 0),r([c({type:Boolean,attribute:`show-timezone`})],W.prototype,`showTimezone`,void 0),r([c()],W.prototype,`min`,void 0),r([c()],W.prototype,`max`,void 0),r([c({attribute:`min-time`})],W.prototype,`minTime`,void 0),r([c({attribute:`max-time`})],W.prototype,`maxTime`,void 0),r([c({type:Number,attribute:`minute-increment`})],W.prototype,`minuteIncrement`,void 0),r([c({attribute:`disabled-time-ranges`,converter:Uf(()=>[])})],W.prototype,`disabledTimeRanges`,void 0),r([c({type:Boolean,attribute:`force-round-time`})],W.prototype,`forceRoundTime`,void 0),r([c({reflect:!0})],W.prototype,`width`,void 0),r([c({type:Boolean})],W.prototype,`disabled`,void 0),r([c({type:Boolean})],W.prototype,`readonly`,void 0),r([c({type:Boolean})],W.prototype,`required`,void 0),r([c({type:Boolean})],W.prototype,`clearable`,void 0),r([c({attribute:`described-by`})],W.prototype,`describedBy`,void 0),customElements.get(`craft-input-date-time`)||customElements.define(`craft-input-date-time`,W);var pp=class extends hi{static validatorName=`IsAcceptedFile`;static checkFileSize(e,t){return e<=t}static getExtension(e){return e?.slice(e.lastIndexOf(`.`))}static isExtensionAllowed(e,t){return t?.find(t=>t.toUpperCase()===e.toUpperCase())}static isFileTypeAllowed(e,t){return t?.find(t=>t.toUpperCase()===e.toUpperCase())}execute(e,t=this.param){let n,r,i=this.constructor,{allowedFileTypes:a,allowedFileExtensions:o,maxFileSize:s}=t;return a?.length?(n=e.some(e=>!i.isFileTypeAllowed(e.type,a)),n):o?.length?(r=e.some(e=>!i.isExtensionAllowed(i.getExtension(e.name),o)),r):e.findIndex(e=>!i.checkFileSize(e.size,s))>-1}static async getMessage(){return``}},mp=class extends hi{static validatorName=`DuplicateFileNames`;constructor(e,t){super(e,t),this.type=`info`}execute(e,t=this.param){return t.show}static async getMessage(){return Rr().msg(`lion-input-file:uploadTextDuplicateFileName`)}},hp=524288e3,gp={type:`FILE_TYPE`,size:`FILE_SIZE`},_p={fail:`FAIL`,pass:`SUCCESS`},vp=class{constructor(e,t){this.failedProp=[],this.systemFile=e,this._acceptCriteria=t,this.uploadFileStatus(),this.failedProp.length===0&&this.createDownloadUrl(e)}_getFileNameExtension(e){return e.slice(e.lastIndexOf(`.`))}uploadFileStatus(){if(this._acceptCriteria.allowedFileExtensions.length){let e=this._getFileNameExtension(this.systemFile.name);pp.isExtensionAllowed(e,this._acceptCriteria.allowedFileExtensions)||(this.status=_p.fail,this.failedProp.push(gp.type))}else if(this._acceptCriteria.allowedFileTypes.length){let e=this.systemFile.type;pp.isFileTypeAllowed(e,this._acceptCriteria.allowedFileTypes)||(this.status=_p.fail,this.failedProp.push(gp.type))}pp.checkFileSize(this.systemFile.size,this._acceptCriteria.maxFileSize)?this.status!==_p.fail&&(this.status=_p.pass):(this.status=_p.fail,this.failedProp.push(gp.size))}createDownloadUrl(e){this.downloadUrl=window.URL.createObjectURL(e)}},yp=e=>{switch(e){case`bg-BG`:return A(()=>import(`./bg-BG-BztIKams.js`),__vite__mapDeps([49,50]),import.meta.url);case`bg`:return A(()=>import(`./bg-CLv3tqUg.js`),__vite__mapDeps([51,50]),import.meta.url);case`cs-CZ`:return A(()=>import(`./cs-CZ-VPjqqYsZ.js`),__vite__mapDeps([52,53]),import.meta.url);case`cs`:return A(()=>import(`./cs-B7yAvqdQ.js`),__vite__mapDeps([54,53]),import.meta.url);case`de-DE`:return A(()=>import(`./de-DE-CsSmh1gZ.js`),__vite__mapDeps([55,56]),import.meta.url);case`de`:return A(()=>import(`./de-kP5ksqlV.js`),__vite__mapDeps([57,56]),import.meta.url);case`en-AU`:return A(()=>import(`./en-AU-3urcHPzk.js`),__vite__mapDeps([58,59]),import.meta.url);case`en-GB`:return A(()=>import(`./en-GB-3urcHPzk.js`),__vite__mapDeps([60,59]),import.meta.url);case`en-US`:return A(()=>import(`./en-US-3urcHPzk.js`),__vite__mapDeps([61,59]),import.meta.url);case`en-PH`:case`en`:return A(()=>import(`./en-CqZ6PnT7.js`),__vite__mapDeps([62,59]),import.meta.url);case`es-ES`:return A(()=>import(`./es-ES-BbUihx_Q.js`),__vite__mapDeps([63,64]),import.meta.url);case`es`:return A(()=>import(`./es-CqwOJyIS.js`),__vite__mapDeps([65,64]),import.meta.url);case`fr-FR`:return A(()=>import(`./fr-FR-CuiHGLXU.js`),__vite__mapDeps([66,67]),import.meta.url);case`fr-BE`:return A(()=>import(`./fr-BE-CuiHGLXU.js`),__vite__mapDeps([68,67]),import.meta.url);case`fr`:return A(()=>import(`./fr-DDoohrFe.js`),__vite__mapDeps([69,67]),import.meta.url);case`hu-HU`:return A(()=>import(`./hu-HU-CsgTXklM.js`),__vite__mapDeps([70,71]),import.meta.url);case`hu`:return A(()=>import(`./hu-mlQa-ass.js`),__vite__mapDeps([72,71]),import.meta.url);case`id-ID`:return A(()=>import(`./id-ID-DmQHtDR1.js`),__vite__mapDeps([73,74]),import.meta.url);case`id`:return A(()=>import(`./id-wVaUF8IY.js`),__vite__mapDeps([75,74]),import.meta.url);case`it-IT`:return A(()=>import(`./it-IT-UwtN86gq.js`),__vite__mapDeps([76,77]),import.meta.url);case`it`:return A(()=>import(`./it-Cau1XULR.js`),__vite__mapDeps([78,77]),import.meta.url);case`nl-BE`:return A(()=>import(`./nl-BE-BWsuTFhd.js`),__vite__mapDeps([79,80]),import.meta.url);case`nl-NL`:return A(()=>import(`./nl-NL-BWsuTFhd.js`),__vite__mapDeps([81,80]),import.meta.url);case`nl`:return A(()=>import(`./nl-AKV00b4f.js`),__vite__mapDeps([82,80]),import.meta.url);case`pl-PL`:return A(()=>import(`./pl-PL-DNBiW1Dr.js`),__vite__mapDeps([83,84]),import.meta.url);case`pl`:return A(()=>import(`./pl-BYkVljz3.js`),__vite__mapDeps([85,84]),import.meta.url);case`ro-RO`:return A(()=>import(`./ro-RO-f1xYkV2I.js`),__vite__mapDeps([86,87]),import.meta.url);case`ro`:return A(()=>import(`./ro-ocFYhLc_.js`),__vite__mapDeps([88,87]),import.meta.url);case`ru-RU`:return A(()=>import(`./ru-RU-CR2XPZpu.js`),__vite__mapDeps([89,90]),import.meta.url);case`ru`:return A(()=>import(`./ru-DZLJ_F1W.js`),__vite__mapDeps([91,90]),import.meta.url);case`sk-SK`:return A(()=>import(`./sk-SK-zTlM1iZC.js`),__vite__mapDeps([92,93]),import.meta.url);case`sk`:return A(()=>import(`./sk-DV9gBcF9.js`),__vite__mapDeps([94,93]),import.meta.url);case`uk-UA`:return A(()=>import(`./uk-UA-Db28XQdn.js`),__vite__mapDeps([95,96]),import.meta.url);case`uk`:return A(()=>import(`./uk-b3alyY__.js`),__vite__mapDeps([97,96]),import.meta.url);case`zh-CN`:case`zh`:return A(()=>import(`./zh-HUllbHAl.js`),[],import.meta.url);default:return A(()=>import(`./en-CqZ6PnT7.js`),__vite__mapDeps([62,59]),import.meta.url)}},bp=class extends Zr(ri(d)){static get scopedElements(){return{...super.scopedElements,"lion-validation-feedback":mi}}static get properties(){return{fileList:{type:Array},multiple:{type:Boolean}}}static localizeNamespaces=[{"lion-input-file":yp},...super.localizeNamespaces];constructor(){super(),this.fileList=[],this.multiple=!1}updated(e){super.updated(e),e.has(`fileList`)&&this._enhanceLightDomA11y()}_enhanceLightDomA11y(){let e=this.shadowRoot?.querySelectorAll(`[id^="file-feedback"]`),t=this.parentNode?.parentNode;e?.forEach(e=>{t?.addEventListener(`focusin`,()=>{e.setAttribute(`aria-live`,`polite`)}),t?.addEventListener(`focusout`,()=>{e.setAttribute(`aria-live`,`assertive`)})})}_removeFile(e){this.dispatchEvent(new CustomEvent(`file-remove-requested`,{detail:{removedFile:e,status:e.status,uploadResponse:e.response}}))}_validationFeedbackTemplate(e,t){return m`
      <lion-validation-feedback
        id="file-feedback-${t}"
        .feedbackData="${e}"
        aria-live="assertive"
      ></lion-validation-feedback>
    `}_listItemBeforeTemplate(e){return i}_listItemAfterTemplate(e,t){return m`
      <button
        class="selected__list__item__remove-button"
        aria-label="${this.msgLit(`lion-input-file:removeButtonLabel`,{fileName:e.systemFile.name})}"
        @click=${()=>this._removeFile(e)}
      >
        ${this._removeButtonContentTemplate()}
      </button>
    `}_removeButtonContentTemplate(){return m`✖️`}_selectedListItemTemplate(e){let t=Vt();return m`
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
                    rel="${ht(e.downloadUrl.startsWith(`blob`)?`noopener noreferrer`:void 0)}"
                    >${e.systemFile?.name}</a
                  >
                `:e.systemFile?.name}
          </span>
          ${this._listItemAfterTemplate(e,t)}
        </div>
        ${e.status===`FAIL`&&e.validationFeedback?m`
              ${ds(e.validationFeedback,e=>m`
                  ${this._validationFeedbackTemplate([e],t)}
                `)}
            `:i}
      </div>
    `}render(){return this.fileList?.length?m`
          ${this.multiple?m`
                <ul class="selected__list">
                  ${this.fileList.map(e=>m` <li>${this._selectedListItemTemplate(e)}</li> `)}
                </ul>
              `:m` ${this._selectedListItemTemplate(this.fileList[0])} `}
        `:i}static get styles(){return[o`
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
      `]}};function xp(e,t=2){if(!+e)return`0 Bytes`;let n=1024,r=t<0?0:t,i=[` bytes`,`KB`,`MB`,`GB`,`TB`,`PB`,`EB`,`ZB`,`YB`],a=Math.floor(Math.log(e)/Math.log(n));return`${parseFloat((e/n**a).toFixed(r))}${i[a]}`}var Sp=class extends ri(Zr(xi)){static get scopedElements(){return{...super.scopedElements,"lion-selected-file-list":bp}}static get properties(){return{accept:{type:String},multiple:{type:Boolean,reflect:!0},buttonLabel:{type:String,attribute:`button-label`},maxFileSize:{type:Number,attribute:`max-file-size`},enableDropZone:{type:Boolean,attribute:`enable-drop-zone`},uploadOnSelect:{type:Boolean,attribute:`upload-on-select`},isDragging:{type:Boolean,attribute:`is-dragging`,reflect:!0},uploadResponse:{type:Array,state:!1},_selectedFilesMetaData:{type:Array,state:!0}}}static localizeNamespaces=[{"lion-input-file":yp},...super.localizeNamespaces];static get validationTypes(){return[`error`,`info`]}get slots(){return{...super.slots,input:()=>m`<input .value="${ht(this.getAttribute(`value`))}" />`,"file-select-button":()=>m`<button
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
        `,renderAsDirectHostChild:!0})}}get _inputNode(){return super._inputNode}get _buttonNode(){return this.querySelector(`#select-button-${this._inputId}`)}get buttonLabel(){return this.__buttonLabel||this._buttonNode?.textContent?.trim()||``}set buttonLabel(e){let t=this.buttonLabel;this.__buttonLabel=e,this.requestUpdate(`buttonLabel`,t)}get _focusableNode(){return this._buttonNode}get _isDragAndDropSupported(){return`draggable`in document.createElement(`div`)}constructor(){super(),this.type=`file`,this._selectedFilesMetaData=[],this.uploadResponse=[],this.__initialUploadResponse=this.uploadResponse,this.uploadOnSelect=!1,this.multiple=!1,this.enableDropZone=!1,this.maxFileSize=hp,this.accept=``,this.buttonLabel=``,this._initialButtonLabel=``,this.modelValue=[],this._onRemoveFile=this._onRemoveFile.bind(this),this.__duplicateFileNamesValidator=new mp({show:!1}),this.__previouslyParsedFiles=null}get _fileListNode(){return Array.from(this.children).find(e=>e.slot===`selected-file-list`)}connectedCallback(){super.connectedCallback(),this.__initialUploadResponse=this.uploadResponse,this._initialButtonLabel=this.buttonLabel,this._inputNode.addEventListener(`change`,this._onChange),this._inputNode.addEventListener(`click`,this._onClick)}disconnectedCallback(){super.disconnectedCallback(),this._inputNode.removeEventListener(`change`,this._onChange),this._inputNode.removeEventListener(`click`,this._onClick)}onLocaleUpdated(){super.onLocaleUpdated(),this.multiple?this.buttonLabel=this._initialButtonLabel||this.msgLit(`lion-input-file:selectTextMultipleFile`):this.buttonLabel=this._initialButtonLabel||this.msgLit(`lion-input-file:selectTextSingleFile`)}get operationMode(){return`upload`}get _acceptCriteria(){let e=[],t=[];if(this.accept){let n=this.accept.replace(/\s+/g,``).split(`,`);e=n.filter(e=>e.includes(`/`)),t=n.filter(e=>!e.includes(`/`))}return{allowedFileTypes:e,allowedFileExtensions:t,maxFileSize:this.maxFileSize}}reset(){super.reset(),this._selectedFilesMetaData=[],this.uploadResponse=this.__initialUploadResponse,this.modelValue=[],this.dirty=!1}clear(){this._selectedFilesMetaData=[],this.uploadResponse=[],this.modelValue=[]}_showFeedbackConditionFor(e,t){return super._showFeedbackConditionFor(e,t)&&!(this.validationStates.error?.FileTypeAllowed||this.validationStates.error?.FileSizeAllowed)}parser(){if(this.__previouslyParsedFiles===this._inputNode.files)return this.modelValue;this.__previouslyParsedFiles=this._inputNode.files;let e=this._inputNode.files?Array.from(this._inputNode.files):[];return this.multiple?[...this.modelValue??[],...e]:e}formatter(e){return this._inputNode?.value||``}__setupDragDropEventListeners(){let e=this.shadowRoot?.querySelector(`.input-file__drop-zone`);[`dragenter`,`dragover`,`dragleave`].forEach(t=>{e?.addEventListener(t,e=>{e.preventDefault(),e.stopPropagation(),this.isDragging=t!==`dragleave`},!1)}),window.addEventListener(`drop`,e=>{e.target===this._inputNode&&e.preventDefault(),this.isDragging=!1},!1)}firstUpdated(e){super.firstUpdated(e),this.__setupFileValidators(),this._inputNode&&(this._inputNode.type=this.type,this._inputNode.setAttribute(`tabindex`,`-1`),this._inputNode.multiple=this.multiple,this.accept.length&&(this._inputNode.accept=this.accept)),this.enableDropZone&&this._isDragAndDropSupported&&(this.__setupDragDropEventListeners(),this.setAttribute(`drop-zone`,``)),this._fileListNode.addEventListener(`file-remove-requested`,this._onRemoveFile)}updated(e){super.updated(e),e.has(`disabled`)&&(this._inputNode.disabled=this.disabled,this.validate()),e.has(`buttonLabel`)&&this._buttonNode&&(this._buttonNode.textContent=this.buttonLabel),e.has(`name`)&&(this._inputNode.name=this.name),e.has(`_ariaLabelledNodes`)&&this.__syncAriaLabelledByAttributesToButton(),e.has(`_ariaDescribedNodes`)&&this.__syncAriaDescribedByAttributesToButton(),e.has(`uploadResponse`)&&(this._selectedFilesMetaData.length===0&&this.uploadResponse.forEach(e=>{let t={systemFile:{name:e.name},response:e,status:e.status,validationFeedback:[{message:e.errorMessage}]};this._selectedFilesMetaData=[...this._selectedFilesMetaData,t]}),this._selectedFilesMetaData.forEach(e=>{!this.uploadResponse.some(t=>t.name===e.systemFile.name)&&this.uploadOnSelect?this.__removeFileFromList(e):(this.uploadResponse.forEach(t=>{t.name===e.systemFile.name&&(e.response=t,e.downloadUrl=t.downloadUrl?t.downloadUrl:e.downloadUrl,e.status=t.status,e.validationFeedback=[{type:typeof t.errorMessage==`string`&&t.errorMessage?.length>0?`error`:`success`,message:t.errorMessage??``}])}),this._selectedFilesMetaData=[...this._selectedFilesMetaData])}),this._updateUploadButtonDescription())}__computeNewAddedFiles(e){let t=e.filter(e=>this._selectedFilesMetaData.findIndex(t=>t.systemFile.name===e.name)===-1);return this.__duplicateFileNamesValidator.param={show:e.length!==t.length},this.validate(),t}_processDroppedFiles(e){if(e.preventDefault(),this.isDragging=!1,!(e.dataTransfer&&e.dataTransfer.items.length>1&&!this.multiple||!e.dataTransfer?.files)){if(this._inputNode.files=e.dataTransfer.files,this.multiple){let t=this.__computeNewAddedFiles(Array.from(e.dataTransfer.files));this.modelValue=[...this.modelValue??[],...t]}else this.modelValue=Array.from(e.dataTransfer.files);this._processFiles(Array.from(e.dataTransfer.files))}}_onChange(e){this.touched=!0,this._onUserInputChanged(),this._processFiles(e?.target?.files)}_onClick(e){e.target.value=``}__syncAriaLabelledByAttributesToButton(){if(this._inputNode.hasAttribute(`aria-labelledby`)){let e=this._inputNode.getAttribute(`aria-labelledby`);this._buttonNode?.setAttribute(`aria-labelledby`,`select-button-${this._inputId} ${e}`)}}__syncAriaDescribedByAttributesToButton(){if(this._inputNode.hasAttribute(`aria-describedby`)){let e=this._inputNode.getAttribute(`aria-describedby`)||``;this._buttonNode?.setAttribute(`aria-describedby`,e)}}__setupFileValidators(){this.defaultValidators=[new pp(this._acceptCriteria),this.__duplicateFileNamesValidator]}_processFiles(e){let t=this.__computeNewAddedFiles(Array.from(e));!this.multiple&&t.length>0&&(this._selectedFilesMetaData=[],this.uploadResponse=[]);let n;for(let e of t.values())n=new vp(e,this._acceptCriteria),n.failedProp?.length?(this._handleErroredFiles(n),this.uploadResponse=[...this.uploadResponse,{name:n.systemFile.name,status:`FAIL`,errorMessage:n.validationFeedback[0].message}]):this.uploadResponse=[...this.uploadResponse,{name:n.systemFile.name,status:`SUCCESS`}],this._selectedFilesMetaData=[...this._selectedFilesMetaData,n],this._handleErrors();let r=this._selectedFilesMetaData.filter(({systemFile:e,status:n})=>t.includes(e)&&n===`SUCCESS`).map(({systemFile:e})=>e);r.length>0&&this._dispatchFileListChangeEvent(r)}_dispatchFileListChangeEvent(e){this.dispatchEvent(new CustomEvent(`file-list-changed`,{detail:{newFiles:e}}))}_handleErrors(){let e=!1;if(this._selectedFilesMetaData.forEach(t=>{t.failedProp&&t.failedProp.length>0&&(e=!0)}),e)this.hasFeedbackFor?.push(`error`),this.shouldShowFeedbackFor.push(`error`);else if(this._prevHasErrors&&this.hasFeedbackFor.includes(`error`)){let e=this.hasFeedbackFor.indexOf(`error`);this.hasFeedbackFor.slice(e,e+1);let t=this.shouldShowFeedbackFor.indexOf(`error`);this.shouldShowFeedbackFor.slice(t,t+1)}this._prevHasErrors=e}_handleErroredFiles(e){e.validationFeedback=[];let{allowedFileExtensions:t,allowedFileTypes:n}=this._acceptCriteria,r=[],i=0,a;t.length?(r=t,a=r.pop(),i=r.length):n.length&&(n.forEach(e=>{if(e.endsWith(`/*`))r.push(e.slice(0,-2));else if(e===`text/plain`)r.push(`text`);else{let t=e.indexOf(`/`),n=e.slice(t+1);if(!n.includes(`+`))r.push(`.${n}`);else{let e=n.split(`+`);r.push(`.${e[0]}`)}}}),a=r.pop(),i=r.length);let o=``;o=a?i?`${this.msgLit(`lion-input-file:allowedFileValidatorComplex`,{allowedTypesArray:r.join(`, `),allowedTypesLastItem:a,maxSize:xp(this.maxFileSize)})}`:`${this.msgLit(`lion-input-file:allowedFileValidatorSimple`,{allowedType:a,maxSize:xp(this.maxFileSize)})}`:`${this.msgLit(`lion-input-file:allowedFileSize`,{maxSize:xp(this.maxFileSize)})}`;let s={message:o,type:`error`};e.validationFeedback?.push(s)}_updateUploadButtonDescription(){let e=[],t;this._selectedFilesMetaData.forEach(n=>{n.status===`FAIL`&&(t=n.validationFeedback?n.validationFeedback[0].message.toString():``,e.push(n.systemFile.name))});let n=this.querySelector(`[slot="after"]`);if(n)if(!this._selectedFilesMetaData||this._selectedFilesMetaData.length===0)this.uploadOnSelect?n.textContent=this.msgLit(`lion-input-file:noFilesUploaded`):n.textContent=this.msgLit(`lion-input-file:noFilesSelected`);else if(this._selectedFilesMetaData.length===1){let{name:e}=this._selectedFilesMetaData[0].systemFile;this.uploadOnSelect?n.textContent=t||this.msgLit(`lion-input-file:fileUploaded`)+(e??``):n.textContent=t||this.msgLit(`lion-input-file:fileSelected`)+(e??``)}else this.uploadOnSelect?n.textContent=`${this.msgLit(`lion-input-file:filesUploaded`,{numberOfFiles:this._selectedFilesMetaData.length})} ${t?this.msgLit(`lion-input-file:generalValidatorMessage`,{validatorMessage:t,listOfErroneousFiles:e.join(`, `)}):``}`:n.textContent=`${this.msgLit(`lion-input-file:filesSelected`,{numberOfFiles:this._selectedFilesMetaData.length})} ${t?this.msgLit(`lion-input-file:generalValidatorMessage`,{validatorMessage:t,listOfErroneousFiles:e.join(`, `)}):``}`}__removeFileFromList(e){this._selectedFilesMetaData=this._selectedFilesMetaData.filter(t=>t.systemFile.name!==e.systemFile.name),this.modelValue&&=this.modelValue.filter(t=>t.name!==e.systemFile.name),this._inputNode.value=``,this._handleErrors(),this._updateUploadButtonDescription()}_onRemoveFile(e){if(this.disabled)return;let{removedFile:t}=e.detail;!this.uploadOnSelect&&t&&this.__removeFileFromList(t),this._removeFile(t)}_removeFile(e){this.dispatchEvent(new CustomEvent(`file-removed`,{detail:{removedFile:e,status:e.status,uploadResponse:e.response}}))}_reflectBackOn(){return!1}_isEmpty(){return this.modelValue?.length===0}_dropZoneTemplate(){return m`
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
    `}static get styles(){return[super.styles,o`
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
      `]}__openDialogOnBtnClick(e){e.preventDefault(),e.stopPropagation(),this._inputNode.click()}},Cp=class extends bp{static get styles(){return[...super.styles,o`
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
    `}_removeButtonContentTemplate(){return m`<craft-icon name="xmark-large"></craft-icon>`}_listItemBeforeTemplate(e){return m`<img src="${e.downloadUrl}" alt="" class="preview-thumb" />`}},wp=o`
  /* Add any craft-specific styles for input-file here */
  ::slotted([slot='selected-file-list']) {
    margin-block-start: var(--c-spacing-lg);
  }
`,Tp=class extends pr(Sp){static get styles(){return[...super.styles,tr,wp]}get slots(){return{...super.slots,"file-select-button":()=>m`<craft-button
          type="button"
          id="select-button-${this._inputId}"
          @click="${this.__openDialogOnBtnClick}"
        >
          ${this.buttonLabel}
        </craft-button>`}}static get scopedElements(){return{...super.scopedElements,"lion-selected-file-list":Cp}}};customElements.get(`craft-input-file`)||customElements.define(`craft-input-file`,Tp);var Ep=class extends L{constructor(...e){super(...e),this.autocorrect=!1,this.autocapitalize=`off`}static get styles(){return[...super.styles,o`
        .input-group__input {
          font-family: var(--c-font-mono);
          font-size: 0.9em;
        }
      `]}updated(e){super.updated(e),this._inputNode?.setAttribute(`autocorrect`,this.autocorrect?`on`:`off`),this._inputNode?.setAttribute(`autocapitalize`,this.autocapitalize)}};r([c({reflect:!0,converter:{fromAttribute:e=>e!==`off`,toAttribute:e=>e?`on`:`off`}})],Ep.prototype,`autocorrect`,void 0),r([c({reflect:!0,type:String})],Ep.prototype,`autocapitalize`,void 0),customElements.get(`craft-input-handle`)||customElements.define(`craft-input-handle`,Ep);var Dp=e(t(((e,t)=>{(function(n,r){if(typeof e==`object`&&typeof t==`object`)t.exports=r();else if(typeof define==`function`&&define.amd)define([],r);else{var i=r();for(var a in i)(typeof e==`object`?e:n)[a]=i[a]}})(Object(typeof self<`u`?self:e),function(){return(function(){var e=[,(function(){typeof Object.getPrototypeOf!=`function`&&(Object.getPrototypeOf=typeof`test`.__proto__==`object`?function(e){return e.__proto__}:function(e){return e.constructor.prototype})}),(function(){Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw TypeError(`"this" is null or not defined`);let n=Object(this),r=n.length>>>0;if(r===0)return!1;let i=t|0,a=Math.max(i>=0?i:r-Math.abs(i),0);for(;a<r;){if(n[a]===e)return!0;a++}return!1}})}),(function(){let e=Function.bind.call(Function.call,Array.prototype.reduce),t=Function.bind.call(Function.call,Object.prototype.propertyIsEnumerable),n=Function.bind.call(Function.call,Array.prototype.concat),r=Object.keys;Object.entries||(Object.entries=function(i){return e(r(i),(e,r)=>n(e,typeof r==`string`&&t(i,r)?[[r,i[r]]]:[]),[])})}),(function(){String.prototype.includes||(String.prototype.includes=function(e,t){return typeof t!=`number`&&(t=0),t+e.length>this.length?!1:this.indexOf(e,t)!==-1})}),(function(){if(FormData.Inputmask===void 0){class e extends FormData{constructor(e,t){super(e,t);let n=this.entries(),r;for(;(r=n.next()).done===!1;){let t=r.value[0],n=r.value[1],i=e[t];i&&i.inputmask!==void 0&&!(n instanceof File)&&this.set(t,i.value)}return this}}e.Inputmask=!0,FormData=e}}),(function(e,t,n){var r=o(n(7)),i=n(20),a=n(22);function o(e){return e&&e.__esModule?e:{default:e}}r.default.extendDefinitions({A:{validator:`[A-Za-zА-яЁёÀ-ÿµ]`,casing:`upper`},"&":{validator:`[0-9A-Za-zА-яЁёÀ-ÿµ]`,casing:`upper`},"#":{validator:`[0-9A-Fa-f]`,casing:`upper`}});let s=/25[0-5]|2[0-4][0-9]|[01][0-9][0-9]/;function c(e,t,n,r,i){if(n-1>-1&&t.buffer[n-1]!==`.`?(e=t.buffer[n-1]+e,e=n-2>-1&&t.buffer[n-2]!==`.`?t.buffer[n-2]+e:`0`+e):e=`00`+e,i.greedy&&parseInt(e)>255&&s.test(`00`+e.charAt(2))){let r=[...t.buffer.slice(0,n),`.`,e.charAt(2)];if(r.join(``).match(/\./g).length<4)return{refreshFromBuffer:!0,buffer:r,caret:n+2}}return s.test(e)}r.default.extendAliases({cssunit:{regex:`[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)`},url:{regex:`(https?|ftp)://.*`,autoUnmask:!1,keepStatic:!1,tabThrough:!0},ip:{mask:`i{1,3}.j{1,3}.k{1,3}.l{1,3}`,definitions:{i:{validator:c},j:{validator:c},k:{validator:c},l:{validator:c}},onUnMask:function(e,t,n){return e},inputmode:`decimal`,substitutes:{",":`.`}},email:{mask:function({separator:e,quantifier:t}){let n=`*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]`,r=n;if(e)for(let i=0;i<t;i++)r+=`[${e}${n}]`;return r},greedy:!1,casing:`lower`,separator:null,quantifier:5,skipOptionalPartCharacter:``,onBeforePaste:function(e,t){return e=e.toLowerCase(),e.replace(`mailto:`,``)},definitions:{"*":{validator:"[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"},"-":{validator:`[0-9A-Za-z-]`}},onUnMask:function(e,t,n){return e},inputmode:`email`},mac:{mask:`##:##:##:##:##:##`},vin:{mask:`V{13}9{4}`,definitions:{V:{validator:`[A-HJ-NPR-Za-hj-npr-z\\d]`,casing:`upper`}},clearIncomplete:!0,autoUnmask:!0},ssn:{mask:`999-99-9999`,postValidation:function(e,t,n,r,o,s,c){let l=a.getMaskTemplate.call(this,!0,i.getLastValidPosition.call(this),!0,!0);return/^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(l.join(``))}}})}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(n(8)),i=m(n(9)),a=m(n(10)),o=n(15),s=m(n(11)),c=n(16),l=n(23),u=n(24),d=n(20),f=n(21),p=n(22);function m(e){return e&&e.__esModule?e:{default:e}}let h=s.default.document,g=`_inputmask_opts`;function _(e,t,n){if(!(this instanceof _))return new _(e,t,n);this.dependencyLib=a.default,this.el=void 0,this.events={},this.maskset=void 0,n!==!0&&(Object.prototype.toString.call(e)===`[object Object]`?t=e:(t||={},e&&(t.alias=e)),this.opts=a.default.extend(!0,{},this.defaults,t),this.noMasksCache=t&&t.definitions!==void 0,this.userOptions=t||{},v(this.opts.alias,t,this.opts)),this.refreshValue=!1,this.undoValue=void 0,this.$el=void 0,this.skipInputEvent=!1,this.validationEvent=!1,this.ignorable=!1,this.maxLength,this.mouseEnter=!1,this.clicked=0,this.originalPlaceholder=void 0,this.isComposing=!1,this.lastInputEvent=null,this.hasAlternator=!1}_.prototype={dataAttribute:`data-inputmask`,defaults:r.default,definitions:i.default,aliases:{},masksCache:{},i18n:{},get isRTL(){return this.opts.isRTL||this.opts.numericInput},mask:function(e){let t=this;return typeof e==`string`&&(e=h.getElementById(e)||h.querySelectorAll(e)),e=e.nodeName?[e]:Array.isArray(e)?e:[].slice.call(e),e.forEach(function(e,n){let r=a.default.extend(!0,{},t.opts);if(y(e,r,a.default.extend(!0,{},t.userOptions),t.dataAttribute)){let n=(0,u.generateMaskSet)(r,t.noMasksCache);n!==void 0&&(e.inputmask!==void 0&&(e.inputmask.opts.autoUnmask=!0,e.inputmask.remove()),e.inputmask=new _(void 0,void 0,!0),e.inputmask.opts=r,e.inputmask.noMasksCache=t.noMasksCache,e.inputmask.userOptions=a.default.extend(!0,{},t.userOptions),e.inputmask.el=e,e.inputmask.$el=(0,a.default)(e),e.inputmask.maskset=n,a.default.data(e,g,t.userOptions),l.mask.call(e.inputmask))}}),e&&e[0]&&e[0].inputmask||this},option:function(e,t){if(typeof e==`string`)return this.opts[e];if(typeof e==`object`)return a.default.extend(this.userOptions,e),this.el&&t!==!0&&this.mask(this.el),this},unmaskedvalue:function(e){if(this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),this.el===void 0||e!==void 0){let t=(typeof this.opts.onBeforeMask==`function`&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split(``);c.checkVal.call(this,void 0,!1,!1,t),typeof this.opts.onBeforeWrite==`function`&&this.opts.onBeforeWrite.call(this,void 0,d.getBuffer.call(this),0,this.opts)}return c.unmaskedvalue.call(this,this.el)},remove:function(){if(this.el){a.default.data(this.el,g,null);let e=this.opts.autoUnmask?(0,c.unmaskedvalue)(this.el):this._valueGet(this.opts.autoUnmask);e===d.getBufferTemplate.call(this).join(``)?this._valueSet(``):this._valueSet(e,this.opts.autoUnmask),o.EventRuler.off(this.el);let t;Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(t=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el),`value`),t&&this.__valueGet&&Object.defineProperty(this.el,"value",{get:this.__valueGet,set:this.__valueSet,configurable:!0})):h.__lookupGetter__&&this.el.__lookupGetter__(`value`)&&this.__valueGet&&(this.el.__defineGetter__(`value`,this.__valueGet),this.el.__defineSetter__(`value`,this.__valueSet)),this.el.inputmask=void 0}return this.el},getemptymask:function(){return this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),(this.isRTL?d.getBufferTemplate.call(this).reverse():d.getBufferTemplate.call(this)).join(``)},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),f.isComplete.call(this,d.getBuffer.call(this))},getmetadata:function(){if(this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),Array.isArray(this.maskset.metadata)){let e=p.getMaskTemplate.call(this,!0,0,!1).join(``);return this.maskset.metadata.forEach(function(t){return t.mask===e?(e=t,!1):!0}),e}return this.maskset.metadata},isValid:function(e){if(this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),e){let t=(typeof this.opts.onBeforeMask==`function`&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split(``);c.checkVal.call(this,void 0,!0,!1,t)}let t=c.clearOptionalTail.call(this,[]),n=f.isComplete.call(this,t),r=e===(this.isRTL?t.reverse().join(``):t.join(``));return n&&(e===void 0||r)},format:function(e,t){this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache);let n=(typeof this.opts.onBeforeMask==`function`&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split(``);c.checkVal.call(this,void 0,!0,!1,n);let r=this.isRTL?d.getBuffer.call(this).slice().reverse().join(``):d.getBuffer.call(this).join(``);return t?{value:r,metadata:this.getmetadata()}:r},setValue:function(e){this.el&&(0,a.default)(this.el).trigger(`setvalue`,[e])},analyseMask:u.analyseMask};function v(e,t,n){let r=_.prototype.aliases[e];return r?(r.alias&&v(r.alias,void 0,n),a.default.extend(!0,n,r),a.default.extend(!0,n,t),!0):(n.mask===null&&(n.mask=e),!1)}function y(e,t,n,r){function i(t,i){let a=r===``?t:r+`-`+t;i=i===void 0?e.getAttribute(a):i,i!==null&&(typeof i==`string`&&(t.startsWith(`on`)?i=s.default[i]:i===`false`?i=!1:i===`true`?i=!0:t===`mask`&&(i=i.replace(/\\\\/g,`\\`))),n[t]=i)}if(t.importDataAttributes===!0){let a=e.getAttribute(r),o,s,c,l;if(a&&a!==``&&(a=a.replace(/'/g,`"`),s=JSON.parse(`{`+a+`}`)),s){for(l in c=void 0,s)if(l.toLowerCase()===`alias`){c=s[l];break}}for(o in i(`alias`,c),n.alias&&v(n.alias,n,t),t){if(s){for(l in c=void 0,s)if(l.toLowerCase()===o.toLowerCase()){c=s[l];break}}i(o,c)}}return a.default.extend(!0,t,n),(e.dir===`rtl`||t.rightAlign)&&(e.style.textAlign=`right`),(e.dir===`rtl`||t.numericInput)&&(e.dir=`ltr`,e.removeAttribute(`dir`),t.isRTL=!0),Object.keys(n).length}_.extendDefaults=function(e){a.default.extend(!0,_.prototype.defaults,e)},_.extendDefinitions=function(e){a.default.extend(!0,_.prototype.definitions,e)},_.extendAliases=function(e){a.default.extend(!0,_.prototype.aliases,e)},_.format=function(e,t,n){return _(t).format(e,n)},_.unmask=function(e,t){return _(t).unmaskedvalue(e)},_.isValid=function(e,t){return _(t).isValid(e)},_.remove=function(e){typeof e==`string`&&(e=h.getElementById(e)||h.querySelectorAll(e)),e=e.nodeName?[e]:e;for(let t=0;t<e.length;t++)e[t].inputmask&&e[t].inputmask.remove()},_.setValue=function(e,t){typeof e==`string`&&(e=h.getElementById(e)||h.querySelectorAll(e)),e=e.nodeName?[e]:e,e.forEach(function(e){e.inputmask?e.inputmask.setValue(t):(0,a.default)(e).trigger(`setvalue`,[t])})},_.dependencyLib=a.default,s.default.Inputmask=_,t.default=_}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={_maxTestPos:500,placeholder:`_`,optionalmarker:[`[`,`]`],quantifiermarker:[`{`,`}`],groupmarker:[`(`,`)`],alternatormarker:`|`,escapeChar:`\\`,mask:null,regex:null,oncomplete:()=>{},onincomplete:()=>{},oncleared:()=>{},repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,insertModeVisual:!0,clearIncomplete:!1,alias:null,onKeyDown:()=>{},onBeforeMask:null,onBeforePaste:function(e,t){return typeof t.onBeforeMask==`function`?t.onBeforeMask.call(this,e,t):e},onBeforeWrite:null,onUnMask:null,outputMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:()=>{},skipOptionalPartCharacter:` `,numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:``,_radixDance:!1,groupSeparator:``,keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:[`text`,`tel`,`url`,`password`,`search`],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:`lvp`,casing:null,inputmode:`text`,importDataAttributes:!0,shiftPositions:!0,usePrototypeDefinitions:!0,validationEventTimeOut:3e3,substitutes:{}}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={9:{validator:`\\p{N}`,definitionSymbol:`*`},a:{validator:`\\p{L}`,definitionSymbol:`*`},"*":{validator:`[\\p{L}\\p{N}]`}}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(11)),i=s(n(12)),a=n(13),o=s(n(14));function s(e){return e&&e.__esModule?e:{default:e}}let c=r.default.document;function l(e){if(e instanceof l)return e;if(!(this instanceof l))return new l(e);e!=null&&e!==r.default&&(this[0]=e.nodeName?e:e[0]!==void 0&&e[0].nodeName?e[0]:c.querySelector(e),this[0]!==void 0&&this[0]!==null&&(0,i.default)(this[0],`events`,(0,i.default)(this[0],`events`)||{}))}l.prototype={on:a.on,off:a.off,trigger:a.trigger},l.extend=o.default,l.data=i.default,l.Event=a.Event,t.default=l}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=typeof window<`u`&&window.document&&window.document.createElement?window:{}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(e,t,n){if(n===void 0)return e.__data?e.__data[t]:null;e.__data=e.__data||{},e.__data[t]=n}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Event=void 0,t.off=f,t.on=d,t.trigger=p;var r=s(n(11)),i=s(n(12)),a=s(n(14)),o=s(n(10));function s(e){return e&&e.__esModule?e:{default:e}}let c=r.default.document;function l(e){return e instanceof Element&&(0,i.default)(e,`events`)}let u=t.Event=void 0;typeof r.default.CustomEvent==`function`?t.Event=u=r.default.CustomEvent:r.default.Event&&c&&c.createEvent?(t.Event=u=function(e,t){t||={bubbles:!1,cancelable:!1,composed:!0,detail:void 0};let n=c.createEvent(`CustomEvent`);return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n},u.prototype=r.default.Event.prototype):typeof Event<`u`&&(t.Event=u=Event);function d(e,t){if(!this[0]||!l(this[0]))return this;let n=this[0],r=(0,i.default)(n,`events`),a=(e,i)=>{n.addEventListener?n.addEventListener(e,t,!1):n.attachEvent&&n.attachEvent(`on${e}`,t),r[e]=r[e]||{},r[e][i]=r[e][i]||[],r[e][i].push(t)};return e.split(` `).forEach(e=>{let[t,n=`global`]=e.split(`.`);a(t,n)}),this}function f(e,t){let n,r;function a(e,t,i){if(e in n)if(r.removeEventListener?r.removeEventListener(e,i,!1):r.detachEvent&&r.detachEvent(`on${e}`,i),t===`global`)for(let t in n[e])n[e][t].splice(n[e][t].indexOf(i),1);else n[e][t].splice(n[e][t].indexOf(i),1)}function o(e,r){let i=[],a,o;if(e.length>0){let s=r?[r]:Object.keys(n[e]);for(let c=0;c<s.length;c++)if(r=s[c],t===void 0)for(a=0,o=n[e][r]?.length||0;a<o;a++)i.push({ev:e,namespace:r,handler:n[e][r][a]});else i.push({ev:e,namespace:r,handler:t})}else if(r.length>0){for(let e in n)if(n[e][r])if(t===void 0)for(a=0,o=n[e][r].length;a<o;a++)i.push({ev:e,namespace:r,handler:n[e][r][a]});else i.push({ev:e,namespace:r,handler:t})}return i}return l(this[0])&&(n=(0,i.default)(this[0],`events`),r=this[0],e||=Object.keys(n).join(` `),e!==``&&e.split(` `).forEach(e=>{let[t,n]=e.split(`.`);o(t,n).forEach(({ev:e,handler:t,namespace:n})=>{a(e,n,t)})})),this}function p(e){if(l(this[0])){let t=(0,i.default)(this[0],`events`),n=this[0],r=typeof e==`string`?e.split(` `):[e.type];for(let i=0;i<r.length;i++){let s=r[i].split(`.`),l=s[0],u=s[1]||`global`;if(c!==void 0){let t,r={bubbles:!0,cancelable:!0,composed:!0,detail:arguments[1]};if(c.createEvent){try{switch(l){case`input`:r.inputType=`insertText`,t=new InputEvent(l,r);break;default:t=new CustomEvent(l,r)}}catch{t=c.createEvent(`CustomEvent`),t.initCustomEvent(l,r.bubbles,r.cancelable,r.detail)}e.type&&(0,a.default)(t,e),n.dispatchEvent(t)}else t=c.createEventObject(),t.eventType=l,t.detail=arguments[1],e.type&&(0,a.default)(t,e),n.fireEvent(`on`+t.eventType,t)}else if(t[l]!==void 0){arguments[0]=arguments[0].type?arguments[0]:o.default.Event(arguments[0]),arguments[0].detail=arguments.slice(1);let e=t[l];(u===`global`?Object.values(e).flat():e[u]).forEach(e=>e.apply(n,arguments))}}}return this}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(){let e,t,r,i,a,o,s=arguments[0]||{},c=1,l=arguments.length,u=!1;for(typeof s==`boolean`&&(u=s,s=arguments[c]||{},c++),typeof s!=`object`&&typeof s!=`function`&&(s={});c<l;c++)if((e=arguments[c])!=null)for(t in e)r=s[t],i=e[t],s!==i&&(u&&i&&(Object.prototype.toString.call(i)===`[object Object]`||(a=Array.isArray(i)))?(a?(a=!1,o=r&&Array.isArray(r)?r:[]):o=r&&Object.prototype.toString.call(r)===`[object Object]`?r:{},s[t]=n(u,o,i)):i!==void 0&&(s[t]=i));return s}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.EventRuler=void 0;var r=n(16),i=s(n(7)),a=n(19),o=n(20);function s(e){return e&&e.__esModule?e:{default:e}}t.EventRuler={on:function(e,t,n){let s=e.inputmask.dependencyLib,c=function(t){t.originalEvent&&(t=t.originalEvent||t,arguments[0]=t);let c=this,l=c.inputmask,u=l?l.opts:void 0,d;if(l===void 0&&this.nodeName!==`FORM`){let e=s.data(c,`_inputmask_opts`);s(c).off(),e&&new i.default(e).mask(c)}else if(![`submit`,`reset`,`setvalue`].includes(t.type)&&this.nodeName!==`FORM`&&(c.disabled||c.readOnly&&!(t.type===`keydown`&&t.ctrlKey&&t.key===a.keys.c||u.tabThrough===!1&&t.key===a.keys.Tab)))t.preventDefault();else{switch(t.type){case`input`:if(l.skipInputEvent===!0)return l.skipInputEvent=!1,t.preventDefault();l.lastInputEvent={time:Date.now(),data:t.data};break;case`keydown`:if(l.lastInputEvent&&Date.now()-l.lastInputEvent.time<10&&l.lastInputEvent.data===t.key)return!1;break;case`click`:case`focus`:if(l.validationEvent)return l.validationEvent=!1,e.blur(),(0,r.HandleNativePlaceholder)(e,(l.isRTL?o.getBufferTemplate.call(l).slice().reverse():o.getBufferTemplate.call(l)).join(``)),setTimeout(function(){e.focus()},u.validationEventTimeOut),!1;d=arguments,setTimeout(function(){e.inputmask&&n.apply(c,d)},0);return}let i=n.apply(c,arguments);return i===!1&&(t.preventDefault(),t.stopPropagation()),i}};t=`${t}.inputmask`,[`submit.inputmask`,`reset.inputmask`].includes(t)?(c=c.bind(e),e.form!==null&&s(e.form).on(t,c)):s(e).on(t,c)},off:function(e,t){if(e.inputmask){let n=e.inputmask.dependencyLib;n(e).off(t||`.inputmask`)}}}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.HandleNativePlaceholder=m,t.applyInputValue=d,t.checkVal=p,t.clearOptionalTail=f,t.unmaskedvalue=h,t.writeBuffer=g;var r=n(17),i=n(18),a=u(n(7)),o=n(19),s=n(20),c=n(21),l=n(22);function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t,n,r){let i=e?e.inputmask:this,a=i.opts;e.inputmask.refreshValue=!1,r!==!0&&typeof a.onBeforeMask==`function`&&(t=a.onBeforeMask.call(i,t,a)||t),t=(t||``).toString().split(``),p(e,!0,!1,t,n),i.undoValue=i._valueGet(!0),(a.clearMaskOnLostFocus||a.clearIncomplete)&&e.inputmask._valueGet()===s.getBufferTemplate.call(i).join(``)&&s.getLastValidPosition.call(i)===-1&&e.inputmask._valueSet(``)}function f(e){let t=this;e.length=0;let n=l.getMaskTemplate.call(t,!0,0,!0,void 0,!0),r;for(;(r=n.shift())!==void 0;)e.push(r);return e}function p(e,t,n,r,a){let o=e?e.inputmask:this,u=o.maskset,d=o.opts,f=o.dependencyLib,p=r.slice(),m=``,h=-1,_,v=d.skipOptionalPartCharacter;d.skipOptionalPartCharacter=``;function y(e,t){let n=l.getMaskTemplate.call(o,!0,0).slice(e,s.seekNext.call(o,e,!1,!1)).join(``).replace(/'/g,``),r=n.indexOf(t);for(;r>0&&n[r-1]===` `;)r--;let i=r===0&&!s.isMask.call(o,e)&&(l.getTest.call(o,e).match.nativeDef===t.charAt(0)||l.getTest.call(o,e).match.static===!0&&l.getTest.call(o,e).match.nativeDef===`'`+t.charAt(0)||l.getTest.call(o,e).match.nativeDef===` `&&(l.getTest.call(o,e+1).match.nativeDef===t.charAt(0)||l.getTest.call(o,e+1).match.static===!0&&l.getTest.call(o,e+1).match.nativeDef===`'`+t.charAt(0)));if(!i&&r>0&&!s.isMask.call(o,e,!1,!0)){let t=s.seekNext.call(o,e);o.caretPos.begin<t&&(o.caretPos={begin:t})}return i}s.resetMaskSet.call(o,!1),o.clicked=0,h=d.radixPoint?s.determineNewCaretPosition.call(o,{begin:0,end:0},!1,d.__financeInput===!1?`radixFocus`:void 0).begin:0,u.p=h,o.caretPos={begin:h};let b=[],x=o.caretPos;if(p.forEach(function(e,t){if(e!==void 0){let r=new f.Event(`_checkval`);r.key=e,m+=e;let a=s.getLastValidPosition.call(o,void 0,!0);y(h,m)?_=l.getTest.call(o,t).match.static===!0&&i.EventHandlers.keypressEvent.call(o,r,!0,!1,n,a+1):(_=i.EventHandlers.keypressEvent.call(o,r,!0,!1,n,o.caretPos.begin),_&&(h=o.caretPos.begin+1,m=``)),_?(_.pos!==void 0&&u.validPositions[_.pos]&&u.validPositions[_.pos].match.static===!0&&u.validPositions[_.pos].alternation===void 0&&(b.push(_.pos),o.isRTL||(_.forwardPosition=_.pos+1)),g.call(o,void 0,s.getBuffer.call(o),_.forwardPosition,r,!1),o.caretPos={begin:_.forwardPosition,end:_.forwardPosition},x=o.caretPos):u.validPositions[t]===void 0&&p[t]===l.getPlaceholder.call(o,t)&&s.isMask.call(o,t,!0)?o.caretPos.begin++:o.caretPos=x}}),b.length>0){let e,t,r=s.seekNext.call(o,-1,void 0,!1);if(!c.isComplete.call(o,s.getBuffer.call(o))&&b.length<=r||c.isComplete.call(o,s.getBuffer.call(o))&&b.length>0&&b.length!==r&&b[0]===0){let a=r;for(;(e=b.shift())!==void 0;)if(e<a){let r=new f.Event(`_checkval`);if(t=u.validPositions[e],t.generatedInput=!0,r.key=t.input,_=i.EventHandlers.keypressEvent.call(o,r,!0,!1,n,a),_&&_.pos!==void 0&&_.pos!==e&&u.validPositions[_.pos]&&u.validPositions[_.pos].match.static===!0)b.push(_.pos);else if(!_)break;a++}}else for(;e=b.pop();)t=u.validPositions[e],t&&u.validPositions[e+1]===void 0&&delete u.validPositions[e]}t&&g.call(o,e,s.getBuffer.call(o),_?_.forwardPosition:o.caretPos.begin,a||new f.Event(`checkval`),a&&(a.type===`input`&&o.undoValue!==s.getBuffer.call(o).join(``)||a.type===`paste`)),d.skipOptionalPartCharacter=v}function m(e,t){let n=e?e.inputmask:this;if(r.ie){if(e.inputmask._valueGet()!==t&&(e.placeholder!==t||e.placeholder===``)){let r=s.getBuffer.call(n).slice(),i=e.inputmask._valueGet();if(i!==t){let t=s.getLastValidPosition.call(n);t===-1&&i===s.getBufferTemplate.call(n).join(``)?r=[]:t!==-1&&f.call(n,r),g(e,r)}}}else e.placeholder!==t&&(e.placeholder=t,e.placeholder===``&&e.removeAttribute(`placeholder`))}function h(e){let t=e?e.inputmask:this,n=t.opts,r=t.maskset;if(e){if(e.inputmask===void 0)return e.value;e.inputmask&&e.inputmask.refreshValue&&d(e,e.inputmask._valueGet(!0))}let i=[],o=r.validPositions;for(let e=0,t=o.length;e<t;e++)o[e]&&o[e].match&&(o[e].match.static!=1||n.keepStatic!==!0&&Array.isArray(r.metadata)&&o[e].generatedInput!==!0)&&i.push(o[e].input);let c=i.length===0?``:(t.isRTL?i.reverse():i).join(``);if(typeof n.onUnMask==`function`){let e=(t.isRTL?s.getBuffer.call(t).slice().reverse():s.getBuffer.call(t)).join(``);c=n.onUnMask.call(t,e,c,n)}return n.outputMask&&c.length>0?a.default.format(c,{...n,mask:n.outputMask,alias:null}):c}function g(e,t,n,r,i){let a=e?e.inputmask:this,l=a.opts,u=a.dependencyLib;if(r&&typeof l.onBeforeWrite==`function`){let e=l.onBeforeWrite.call(a,r,t,n,l);if(e){if(e.refreshFromBuffer){let n=e.refreshFromBuffer;c.refreshFromBuffer.call(a,n===!0?n:n.start,n.end,e.buffer||t),t=s.getBuffer.call(a,!0)}n!==void 0&&(n=e.caret===void 0?n:e.caret)}}if(e!==void 0&&(e.inputmask._valueSet(t.join(``)),n!==void 0&&(r===void 0||r.type!==`blur`)&&s.caret.call(a,e,n,void 0,void 0,r!==void 0&&r.type===`keydown`&&(r.key===o.keys.Delete||r.key===o.keys.Backspace)),e.inputmask.writeBufferHook===void 0||e.inputmask.writeBufferHook(n),i===!0)){let n=u(e),r=e.inputmask._valueGet();e.inputmask.skipInputEvent=!0,n.trigger(`input`),setTimeout(function(){r===s.getBufferTemplate.call(a).join(``)?n.trigger(`cleared`):c.isComplete.call(a,t)===!0&&n.trigger(`complete`)},0)}}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.mobile=t.iphone=t.ie=void 0;var r=i(n(11));function i(e){return e&&e.__esModule?e:{default:e}}let a=r.default.navigator&&r.default.navigator.userAgent||``;t.ie=a.indexOf(`MSIE `)>0||a.indexOf(`Trident/`)>0,t.mobile=!!(navigator.userAgentData?.mobile??((matchMedia(`(pointer:coarse)`).matches||navigator.maxTouchPoints)&&innerWidth<=1024||/Mobi|Android|iPhone/i.test(a))),t.iphone=/iphone/i.test(a)}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.EventHandlers=void 0;var r=n(17),i=u(n(11)),a=n(16),o=n(19),s=n(20),c=n(21),l=n(22);function u(e){return e&&e.__esModule?e:{default:e}}let d=t.EventHandlers={keyEvent:function(e,t,n,i,u){let f=this.inputmask,p=f.opts,m=f.dependencyLib,h=f.maskset,g=this,_=m(g),v=e.key,y=s.caret.call(f,g),b=p.onKeyDown.call(this,e,s.getBuffer.call(f),y,p);if(b!==void 0)return b;if(v===o.keys.Backspace||v===o.keys.Delete||r.iphone&&v===o.keys.BACKSPACE_SAFARI||e.ctrlKey&&v===o.keys.x&&!(`oncut`in g))e.preventDefault(),c.handleRemove.call(f,g,v,y),(0,a.writeBuffer)(g,s.getBuffer.call(f,!0),h.p,e,g.inputmask._valueGet()!==s.getBuffer.call(f).join(``));else if(v===o.keys.End||v===o.keys.PageDown){e.preventDefault();let t=s.seekNext.call(f,s.getLastValidPosition.call(f));s.caret.call(f,g,e.shiftKey?y.begin:t,t,!0)}else v===o.keys.Home&&!e.shiftKey||v===o.keys.PageUp?(e.preventDefault(),s.caret.call(f,g,0,e.shiftKey?y.begin:0,!0)):p.undoOnEscape&&v===o.keys.Escape&&e.altKey!==!0?((0,a.checkVal)(g,!0,!1,f.undoValue.split(``)),_.trigger(`click`)):v===o.keys.Insert&&!(e.shiftKey||e.ctrlKey)&&f.userOptions.insertMode===void 0?c.isSelection.call(f,y)?p.insertMode=!p.insertMode:(p.insertMode=!p.insertMode,s.caret.call(f,g,y.begin,y.begin)):p.tabThrough===!0&&v===o.keys.Tab?e.shiftKey===!0?(y.end=s.seekPrevious.call(f,y.end,!0),l.getTest.call(f,y.end-1).match.static===!0&&y.end--,y.begin=s.seekPrevious.call(f,y.end,!0),y.begin>=0&&y.end>0&&(e.preventDefault(),s.caret.call(f,g,y.begin,y.end))):(y.begin=s.seekNext.call(f,y.begin,!0),y.end=s.seekNext.call(f,y.begin,!0),y.end<h.maskLength&&y.end--,y.begin<=h.maskLength&&(e.preventDefault(),s.caret.call(f,g,y.begin,y.end))):e.shiftKey||(p.insertModeVisual&&p.insertMode===!1?v===o.keys.ArrowRight?setTimeout(function(){let e=s.caret.call(f,g);s.caret.call(f,g,e.begin)},0):v===o.keys.ArrowLeft&&setTimeout(function(){let e={begin:s.translatePosition.call(f,g.inputmask.caretPos.begin),end:s.translatePosition.call(f,g.inputmask.caretPos.end)};f.isRTL?s.caret.call(f,g,e.begin+(e.begin===h.maskLength?0:1)):s.caret.call(f,g,e.begin-(e.begin===0?0:1))},0):f.keyEventHook===void 0||f.keyEventHook(e));return f.isComposing=v===o.keys.Process||v===o.keys.Unidentified,f.ignorable=v===void 0||v.length>1,d.keypressEvent.call(f,e,t,n,i,u)},keypressEvent:function(e,t,n,r,i){let l=this.inputmask||this,u=l.opts,d=l.dependencyLib,f=l.maskset,p=l.el,m=d(p),h=e.key;if(t!==!0&&!(e.ctrlKey&&e.altKey&&!l.ignorable)&&(e.ctrlKey||e.metaKey||l.ignorable))h===o.keys.Enter&&l.undoValue!==l._valueGet(!0)&&(l.undoValue=l._valueGet(!0),setTimeout(function(){m.trigger(`change`)},0));else if(h){let o=t?{begin:i,end:i}:s.caret.call(l,p),d;t||(h=u.substitutes[h]||h),f.writeOutBuffer=!0;let m=c.isValid.call(l,o,h,r,void 0,void 0,void 0,t);if(m!==!1&&(s.resetMaskSet.call(l,!0),d=m.caret===void 0?s.seekNext.call(l,m.pos.begin?m.pos.begin:m.pos):m.caret,f.p=d),d=u.numericInput&&m.caret===void 0?s.seekPrevious.call(l,d):d,n!==!1&&(setTimeout(function(){u.onKeyValidation.call(p,h,m)},0),f.writeOutBuffer&&m!==!1)){let n=s.getBuffer.call(l);(0,a.writeBuffer)(p,n,d,e,t!==!0)}if(e.preventDefault(),t)return m!==!1&&(m.forwardPosition=d),m}},pasteEvent:async function(e){function t(t,n,r,i,c){let l=s.caret.call(t,n,void 0,void 0,!0),u=r.substr(0,l.begin),d=r.substr(l.end,r.length);if(u==(t.isRTL?s.getBufferTemplate.call(t).slice().reverse():s.getBufferTemplate.call(t)).slice(0,l.begin).join(``)&&(u=``),d==(t.isRTL?s.getBufferTemplate.call(t).slice().reverse():s.getBufferTemplate.call(t)).slice(l.end).join(``)&&(d=``),i=u+i+d,t.isRTL&&o.numericInput!==!0){i=i.split(``);for(let e of s.getBufferTemplate.call(t))i[0]===e&&i.shift();i=i.reverse().join(``)}let f=i;if(typeof c==`function`){if(f=c.call(t,f,o),f===!1)return!1;f||=r}(0,a.checkVal)(n,!0,!1,f.toString().split(``),e)}let n=this,r=this.inputmask,o=r.opts,c=r._valueGet(!0),l;r.skipInputEvent=!0,e.clipboardData&&e.clipboardData.getData?l=e.clipboardData.getData(`text/plain`):i.default.clipboardData&&i.default.clipboardData.getData&&(l=i.default.clipboardData.getData(`Text`)),t(r,n,c,l,o.onBeforePaste),e.preventDefault()},inputFallBackEvent:function(e){let t=this.inputmask,n=t.opts,i=t.dependencyLib;function c(e,r,i){let a=e.substr(0,i.begin).split(``),o=e.substr(i.begin).split(``),c=r.substr(0,i.begin).split(``),u=r.substr(i.begin).split(``),d=a.length>=c.length?a.length:c.length,f=o.length>=u.length?o.length:u.length,p,m,h=``,g=[],_;for(;a.length<d;)a.push(`~`);for(;c.length<d;)c.push(`~`);for(;o.length<f;)o.unshift(`~`);for(;u.length<f;)u.unshift(`~`);let v=a.concat(o),y=c.concat(u);for(m=0,p=v.length;m<p;m++)switch(_=l.getPlaceholder.call(t,s.translatePosition.call(t,m)),h){case`insertText`:y[m-1]===v[m]&&i.begin==v.length-1&&g.push(v[m]),m=p;break;case`insertReplacementText`:v[m]===`~`?i.end++:m=p;break;case`deleteContentBackward`:v[m]===`~`?i.end++:m=p;break;default:v[m]!==y[m]&&((v[m+1]===`~`||v[m+1]===_||v[m+1]===void 0)&&(y[m]===_&&y[m+1]===`~`||y[m]===`~`)||y[m+1]===`~`&&y[m]===v[m+1]?(h=`insertText`,g.push(v[m]),i.begin--,i.end--):v[m]!==_&&v[m]!==`~`&&(v[m+1]===`~`||y[m]!==v[m]&&y[m+1]===v[m+1])?(h=`insertReplacementText`,g.push(v[m]),i.begin--):v[m]===`~`?(h=`deleteContentBackward`,(s.isMask.call(t,s.translatePosition.call(t,m),!0)||y[m]===n.radixPoint)&&i.end++):m=p);break}return{action:h,data:g,caret:i}}let u=this,f=u.inputmask._valueGet(!0),p=(t.isRTL?s.getBuffer.call(t).slice().reverse():s.getBuffer.call(t)).join(``),m=s.caret.call(t,u,void 0,void 0,!0),h;if(p!==f){if(h=c(f,p,m),u.getRootNode().activeElement!==u&&u.focus(),(0,a.writeBuffer)(u,s.getBuffer.call(t)),s.caret.call(t,u,m.begin,m.end,!0),!r.mobile&&t.skipNextInsert&&e.inputType===`insertText`&&h.action===`insertText`&&t.isComposing)return!1;switch(e.inputType===`insertCompositionText`&&h.action===`insertText`&&t.isComposing?t.skipNextInsert=!0:t.skipNextInsert=!1,h.action){case`insertText`:case`insertReplacementText`:h.data.forEach(function(e,n){let r=new i.Event(`keypress`);r.key=e,t.ignorable=!1,d.keypressEvent.call(u,r)}),setTimeout(function(){t.$el.trigger(`keyup`)},0);break;case`deleteContentBackward`:var g=new i.Event(`keydown`);g.key=o.keys.Backspace,d.keyEvent.call(u,g);break;default:(0,a.applyInputValue)(u,f,e),s.caret.call(t,u,m.begin,m.end,!0);break}e.preventDefault()}},setValueEvent:function(e){let t=this.inputmask,n=t.dependencyLib,r=this,i=e&&e.detail?e.detail[0]:arguments[1];i===void 0&&(i=r.inputmask._valueGet(!0)),(0,a.applyInputValue)(r,i,new n.Event(`input`),(e&&e.detail?e.detail[0]:arguments[1])!==void 0),(e.detail&&e.detail[1]!==void 0||arguments[2]!==void 0)&&s.caret.call(t,r,e.detail?e.detail[1]:arguments[2])},focusEvent:function(e){let t=this.inputmask,n=t.opts,r=this,i=t&&t._valueGet();n.showMaskOnFocus&&i!==s.getBuffer.call(t).join(``)&&(0,a.writeBuffer)(r,s.getBuffer.call(t),s.seekNext.call(t,s.getLastValidPosition.call(t))),n.positionCaretOnTab===!0&&t.mouseEnter===!1&&(!c.isComplete.call(t,s.getBuffer.call(t))||s.getLastValidPosition.call(t)===-1)&&d.clickEvent.apply(r,[e,!0]),t.undoValue=t&&t._valueGet(!0)},invalidEvent:function(e){this.inputmask.validationEvent=!0},mouseleaveEvent:function(){let e=this.inputmask,t=e.opts,n=this;e.mouseEnter=!1,t.clearMaskOnLostFocus&&n.getRootNode().activeElement!==n&&(0,a.HandleNativePlaceholder)(n,e.originalPlaceholder)},clickEvent:function(e,t){let n=this.inputmask;n.clicked++;let r=this;if(r.getRootNode().activeElement===r){let e=s.determineNewCaretPosition.call(n,s.caret.call(n,r),t);e!==void 0&&s.caret.call(n,r,e)}},cutEvent:function(e){let t=this.inputmask,n=t.maskset,r=this,l=s.caret.call(t,r),u=t.isRTL?s.getBuffer.call(t).slice(l.end,l.begin):s.getBuffer.call(t).slice(l.begin,l.end),d=t.isRTL?u.reverse().join(``):u.join(``);i.default.navigator&&i.default.navigator.clipboard?i.default.navigator.clipboard.writeText(d):i.default.clipboardData&&i.default.clipboardData.getData&&i.default.clipboardData.setData(`Text`,d),c.handleRemove.call(t,r,o.keys.Delete,l),(0,a.writeBuffer)(r,s.getBuffer.call(t),n.p,e,t.undoValue!==t._valueGet(!0))},blurEvent:function(e){let t=this.inputmask,n=t.opts,r=t.dependencyLib;t.clicked=0;let i=r(this),o=this;if(o.inputmask){(0,a.HandleNativePlaceholder)(o,t.originalPlaceholder);let r=o.inputmask._valueGet(),l=s.getBuffer.call(t).slice();if(r!==``&&(n.clearMaskOnLostFocus&&(s.getLastValidPosition.call(t)===-1&&r===s.getBufferTemplate.call(t).join(``)?l=[]:a.clearOptionalTail.call(t,l)),c.isComplete.call(t,l)===!1&&(setTimeout(function(){i.trigger(`incomplete`)},0),n.clearIncomplete&&(s.resetMaskSet.call(t,!1),l=n.clearMaskOnLostFocus?[]:s.getBufferTemplate.call(t).slice())),(0,a.writeBuffer)(o,l,void 0,e)),r=t._valueGet(!0),t.undoValue!==r){let e=(t.isRTL?s.getBufferTemplate.call(t).slice().reverse():s.getBufferTemplate.call(t)).join(``);(r!==``||t.undoValue!==e||t.undoValue===e&&t.maskset.validPositions.length>0)&&(t.undoValue=r,i.trigger(`change`))}}},mouseenterEvent:function(){let e=this.inputmask,{showMaskOnHover:t}=e.opts,n=this;if(e.mouseEnter=!0,n.getRootNode().activeElement!==n){let r=(e.isRTL?s.getBufferTemplate.call(e).slice().reverse():s.getBufferTemplate.call(e)).join(``);t&&(0,a.HandleNativePlaceholder)(n,r)}},submitEvent:function(){let e=this.inputmask,t=e.opts;e.undoValue!==e._valueGet(!0)&&e.$el.trigger(`change`),s.getLastValidPosition.call(e)===-1&&e._valueGet&&e._valueGet()===s.getBufferTemplate.call(e).join(``)&&e._valueSet(``),t.clearIncomplete&&c.isComplete.call(e,s.getBuffer.call(e))===!1&&e._valueSet(``),t.removeMaskOnSubmit&&(e._valueSet(e.unmaskedvalue(),!0),setTimeout(function(){(0,a.writeBuffer)(e.el,s.getBuffer.call(e))},0))},resetEvent:function(){let e=this.inputmask;e.refreshValue=!0,setTimeout(function(){(0,a.applyInputValue)(e.el,e._valueGet(!0))},0)}}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.keys=t.keyCode=void 0,t.toKey=i,t.toKeyCode=a;let n=t.keyCode={c:67,x:88,z:90,BACKSPACE_SAFARI:127,Enter:13,Meta_LEFT:91,Meta_RIGHT:92,Space:32,Alt:18,AltGraph:18,ArrowDown:40,ArrowLeft:37,ArrowRight:39,ArrowUp:38,Backspace:8,CapsLock:20,Control:17,ContextMenu:93,Dead:221,Delete:46,End:35,Escape:27,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,Home:36,Insert:45,NumLock:144,PageDown:34,PageUp:33,Pause:19,PrintScreen:44,Process:229,Shift:16,ScrollLock:145,Tab:9,Unidentified:229},r=Object.entries(n).reduce((e,[t,n])=>(e[n]=e[n]===void 0?t:e[n],e),{});t.keys=Object.entries(n).reduce((e,[t,n])=>(e[t]=t===`Space`?` `:t,e),{});function i(e,t){return r[e]||(t?String.fromCharCode(e):String.fromCharCode(e).toLowerCase())}function a(e){return n[e]}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.caret=s,t.determineLastRequiredPosition=c,t.determineNewCaretPosition=l,t.getBuffer=u,t.getBufferTemplate=d,t.getLastValidPosition=f,t.isMask=p,t.resetMaskSet=m,t.seekNext=h,t.seekPrevious=g,t.translatePosition=_;var r=o(n(11)),i=n(21),a=n(22);function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,i,a){let o=this,s=this.opts,c;if(t!==void 0){if(Array.isArray(t)&&(n=o.isRTL?t[0]:t[1],t=o.isRTL?t[1]:t[0]),t.begin!==void 0&&(n=o.isRTL?t.begin:t.end,t=o.isRTL?t.end:t.begin),typeof t==`number`){t=i?t:_.call(o,t),n=i?n:_.call(o,n),n=typeof n==`number`?n:t;let l=parseInt(((e.ownerDocument.defaultView||r.default).getComputedStyle?(e.ownerDocument.defaultView||r.default).getComputedStyle(e,null):e.currentStyle).fontSize)*n;if(e.scrollLeft=l>e.scrollWidth?l:0,e.inputmask.caretPos={begin:t,end:n},s.insertModeVisual&&s.insertMode===!1&&t===n&&(a||n++),e===e.getRootNode().activeElement){if(`setSelectionRange`in e)e.setSelectionRange(t,n);else if(r.default.getSelection){if(c=document.createRange(),e.firstChild===void 0||e.firstChild===null){let t=document.createTextNode(``);e.appendChild(t)}c.setStart(e.firstChild,t<e.inputmask._valueGet().length?t:e.inputmask._valueGet().length),c.setEnd(e.firstChild,n<e.inputmask._valueGet().length?n:e.inputmask._valueGet().length),c.collapse(!0);let i=r.default.getSelection();i.removeAllRanges(),i.addRange(c)}else e.createTextRange&&(c=e.createTextRange(),c.collapse(!0),c.moveEnd(`character`,n),c.moveStart(`character`,t),c.select());e.inputmask.caretHook===void 0||e.inputmask.caretHook.call(o,{begin:t,end:n})}}}else return`selectionStart`in e&&`selectionEnd`in e?(t=e.selectionStart,n=e.selectionEnd):r.default.getSelection?(c=r.default.getSelection().getRangeAt(0),(c.commonAncestorContainer.parentNode===e||c.commonAncestorContainer===e)&&(t=c.startOffset,n=c.endOffset)):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),t=0-c.duplicate().moveStart(`character`,-e.inputmask._valueGet().length),n=t+c.text.length),{begin:i?t:_.call(o,t),end:i?n:_.call(o,n)}}function c(e){let t=this,{maskset:n,dependencyLib:r}=t,o=f.call(t),s={},c=n.validPositions[o],l=a.getMaskTemplate.call(t,!0,f.call(t),!0,!0),u=l.length,d,p=c===void 0?void 0:c.locator.slice(),m;for(d=o+1;d<l.length;d++)m=a.getTestTemplate.call(t,d,p,d-1),p=m.locator.slice(),s[d]=r.extend(!0,{},m);let h=c&&c.alternation!==void 0?c.locator[c.alternation]:void 0;for(d=u-1;d>o&&(m=s[d],(m.match.optionality||m.match.optionalQuantifier&&m.match.newBlockMarker||h&&(h!==s[d].locator[c.alternation]&&m.match.static!==!0||m.match.static===!0&&m.locator[c.alternation]&&i.checkAlternationMatch.call(t,m.locator[c.alternation].toString().split(`,`),h.toString().split(`,`))&&a.getTests.call(t,d)[0].def!==``))&&l[d]===a.getPlaceholder.call(t,d,m.match));d--)if(u--,m.match.optionality){let e=d;for(;e>0;){let n=a.getTest.call(t,e);if(n.match.newBlockMarker===`master`||n.match.newBlockMarker===!0)break;e--}if(n.validPositions[e]!==void 0)break}return d===o&&(u=d),e?{l:u,def:s[u]?s[u].match:void 0}:u}function l(e,t,n){let r=this,{maskset:i,opts:o}=r,s,c,l;function d(e){if(o.radixPoint!==``&&o.digits!==0){let t=i.validPositions;if(t[e]===void 0||t[e].input===void 0){if(e<h.call(r,-1))return!0;let n=u.call(r).indexOf(o.radixPoint);if(n!==-1){for(let e in t){let i=Number(e);if(n<i&&t[e].input!==a.getPlaceholder.call(r,i))return!1}return!0}}}return!1}if(t&&(r.isRTL?e.end=e.begin:e.begin=e.end),e.begin===e.end){switch(n||=o.positionCaretOnClick,n){case`none`:break;case`select`:e={begin:0,end:u.call(r).length};break;case`ignore`:e.end=e.begin=h.call(r,f.call(r));break;case`radixFocus`:if(r.clicked>1&&i.validPositions.length===0)break;if(d(e.begin)){let t=u.call(r).join(``).indexOf(o.radixPoint);e.end=e.begin=o.numericInput?h.call(r,t):t;break}default:if(s=e.begin,c=f.call(r,s,!0),l=h.call(r,c===-1&&!p.call(r,0)?-1:c),s<=l)e.end=e.begin=p.call(r,s,!1,!0)?s:h.call(r,s);else{let t=i.validPositions[c],n=a.getTestTemplate.call(r,l,t?t.match.locator:void 0,t),d=a.getPlaceholder.call(r,l,n.match);if(d!==``&&u.call(r)[l]!==d&&n.match.optionalQuantifier!==!0&&n.match.newBlockMarker!==!0||!p.call(r,l,o.keepStatic,!0)&&n.match.def===d){let e=h.call(r,l);(s>=e||s===l)&&(l=e)}e.end=e.begin=l}}return e}}function u(e){let t=this,{maskset:n}=t;return(n.buffer===void 0||e===!0)&&(n.buffer=a.getMaskTemplate.call(t,!0,f.call(t),!0),n._buffer===void 0&&(n._buffer=n.buffer.slice())),n.buffer}function d(){let e=this,t=this.maskset;return t._buffer===void 0&&(t._buffer=a.getMaskTemplate.call(e,!1,1),t.buffer===void 0&&(t.buffer=t._buffer.slice())),t._buffer}function f(e,t,n){let r=this.maskset,i=-1,a=-1,o=n||r.validPositions;e===void 0&&(e=-1);for(let n=0,r=o.length;n<r;n++)o[n]&&(t||o[n].generatedInput!==!0)&&(n<=e&&(i=n),n>=e&&(a=n));return i===-1||i===e?a:a===-1||e-i<a-e?i:a}function p(e,t,n){let r=this,i=this.maskset,o=a.getTestTemplate.call(r,e).match;if(o.def===``&&(o=a.getTest.call(r,e).match),o.static!==!0)return o.fn;if(n===!0&&i.validPositions[e]!==void 0&&i.validPositions[e].generatedInput!==!0)return!0;if(t!==!0&&e>-1){if(n){let t=a.getTests.call(r,e);return t.length>1+ +(t[t.length-1].match.def===``)}let t=a.determineTestTemplate.call(r,e,a.getTests.call(r,e)),i=a.getPlaceholder.call(r,e,t.match);return t.match.def!==i}return!1}function m(e){let t=this.maskset;t.buffer=void 0,e!==!0&&(t.validPositions=[],t.p=0),e===!1&&(t.tests={},t.jitOffset={})}function h(e,t,n){let r=this;n===void 0&&(n=!0);let i=e+1;for(;a.getTest.call(r,i).match.def!==``&&(t===!0&&(a.getTest.call(r,i).match.newBlockMarker!==!0||!p.call(r,i,void 0,!0))||t!==!0&&!p.call(r,i,void 0,n));)i++;return i}function g(e,t){let n=this,r=e-1;if(e<=0)return 0;for(;r>0&&(t===!0&&(a.getTest.call(n,r).match.newBlockMarker!==!0||!p.call(n,r,void 0,!0))||t!==!0&&!p.call(n,r,void 0,!0));)r--;return r}function _(e){let t=this,n=this.opts,r=this.el;return t.isRTL&&typeof e==`number`&&(!n.greedy||n.placeholder!==``)&&r&&(e=t._valueGet().length-e,e<0&&(e=0)),e}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.alternate=s,t.casing=c,t.checkAlternationMatch=l,t.handleRemove=u,t.isComplete=d,t.isSelection=f,t.isValid=p,t.refreshFromBuffer=h,t.revalidateMask=_;var r=n(18),i=n(19),a=n(20),o=n(22);function s(e,t,n,r,i,c){let l=this,u=this.dependencyLib,d=this.opts,f=l.maskset;if(!l.hasAlternator)return!1;let m=u.extend(!0,[],f.validPositions),h=u.extend(!0,{},f.tests),g,_,v=!1,y=!1,b,x,S,C,w,T=i===void 0?a.getLastValidPosition.call(l):i,E,ee,D,te;if(c&&(D=c.begin,te=c.end,c.begin>c.end&&(D=c.end,te=c.begin)),T===-1&&i===void 0)g=0,x=o.getTest.call(l,g),_=x.alternation;else for(;T>=0;T--)if(b=T===0?o.getTest.call(l,0):f.validPositions[T],b&&b.alternation!==void 0){if(T<=(e||0)&&x&&x.locator[b.alternation]!==b.locator[b.alternation])break;g=T,_=b.alternation,x=b}if(_!==void 0){w=parseInt(g),f.excludes[w]=f.excludes[w]||[],e!==!0&&f.excludes[w].push((0,o.getDecisionTaker)(x)+`:`+x.alternation);let i=[],_=-1;for(S=w;w<a.getLastValidPosition.call(l,void 0,!0)+1;S++)_===-1&&e<=S&&t!==void 0&&(i.push(t),_=i.length-1),C=f.validPositions[w],C&&C.generatedInput!==!0&&(w!==0||C.input!==d.skipOptionalPartCharacter)&&(c===void 0||S<D||S>=te)&&i.push(C.input),f.validPositions.splice(w,1);for(_===-1&&t!==void 0&&(i.push(t),_=i.length-1);f.excludes[w]!==void 0&&f.excludes[w].length<10;){f.tests={},a.resetMaskSet.call(l,!0),v=!0,E=w-1;let g=o.getMaskTemplate.call(l,!0,0);for(S=0;S<i.length&&(ee=i[S],g[E+1]===ee&&d.numericInput!==!0?E++:E=S===0||y.caretPos!==void 0||d.insertMode===!1?a.seekNext.call(l,E):a.getLastValidPosition.call(l,E,!0)+1,v=p.call(l,E,ee,!1,r,!0));S++)S===_&&(y=v),e===!0&&v&&(y={caretPos:S});if(v)break;if(a.resetMaskSet.call(l),x=o.getTest.call(l,w),f.validPositions=u.extend(!0,[],m),f.tests=u.extend(!0,{},h),y=!1,f.excludes[w])if(x.alternation!=null){let i=(0,o.getDecisionTaker)(x);if(f.excludes[w].indexOf(i+`:`+x.alternation)!==-1){y=s.call(l,e,t,n,r,w-1,c);break}for(f.excludes[w].push(i+`:`+x.alternation),S=w;S<a.getLastValidPosition.call(l,void 0,!0)+1;S++)f.validPositions.splice(w)}else delete f.excludes[w];else{y=s.call(l,e,t,n,r,w-1,c);break}}}return(!y||d.keepStatic!==!1)&&delete f.excludes[w],y||(f.validPositions=u.extend(!0,[],m),f.tests=u.extend(!0,{},h)),y}function c(e,t,n){let r=this.opts,a=this.maskset;switch(r.casing||t.casing){case`upper`:e=e.toLocaleUpperCase();break;case`lower`:e=e.toLocaleLowerCase();break;case`title`:var o=a.validPositions[n-1];e=n===0||o&&o.input===String.fromCharCode(i.keyCode.Space)?e.toLocaleUpperCase():e.toLocaleLowerCase();break;case`follow`:t.def&&t.def!==t.def.toLocaleLowerCase()?e=e.toLocaleUpperCase():t.def&&t.def!==t.def.toLocaleUpperCase()&&(e=e.toLocaleLowerCase());break;default:if(typeof r.casing==`function`){let t=Array.prototype.slice.call(arguments);t.push(a.validPositions),e=r.casing.apply(this,t)}}return e}function l(e,t,n){let r=this.opts.greedy?t:t.slice(0,1),i=!1,a=n===void 0?[]:n.split(`,`),o;for(let t=0;t<a.length;t++)(o=e.indexOf(a[t]))!==-1&&e.splice(o,1);for(let t=0;t<e.length;t++)if(r.includes(e[t])){i=!0;break}return i}function u(e,t,n,r,c){let l=this,u=this.maskset,d=this.opts;if((d.numericInput||l.isRTL)&&(t===i.keys.Backspace?t=i.keys.Delete:t===i.keys.Delete&&(t=i.keys.Backspace),l.isRTL)){let e=n.end;n.end=n.begin,n.begin=e}let f=a.getLastValidPosition.call(l,void 0,!0);n.end>=a.getBuffer.call(l).length&&f>=n.end&&(n.end=f+1),t===i.keys.Backspace?n.end-n.begin<1&&(n.begin=a.seekPrevious.call(l,n.begin)):t===i.keys.Delete&&n.begin===n.end&&(n.end=a.isMask.call(l,n.end,!0,!0)?n.end+1:a.seekNext.call(l,n.end)+1);let p;(p=_.call(l,n))!==!1&&((r!==!0&&d.keepStatic!==!1||d.regex!==null&&o.getTest.call(l,n.begin).match.def.indexOf(`|`)!==-1)&&s.call(l,!0),r!==!0&&(u.p=t===i.keys.Delete?n.begin+p:n.begin,u.p=a.determineNewCaretPosition.call(l,{begin:u.p,end:u.p},!1,d.insertMode===!1&&t===i.keys.Backspace?`none`:void 0).begin))}function d(e){let t=this,n=this.opts,r=this.maskset;if(typeof n.isComplete==`function`)return n.isComplete(e,n);if(n.repeat===`*`)return;let i=!1,s=a.determineLastRequiredPosition.call(t,!0),c=s.l;if(s.def===void 0||s.def.newBlockMarker||s.def.optionality||s.def.optionalQuantifier){i=!0;for(let n=0;n<=c;n++){let a=o.getTestTemplate.call(t,n).match;if(a.static!==!0&&r.validPositions[n]===void 0&&(a.optionality===!1||a.optionality===void 0||a.optionality&&a.newBlockMarker==0)&&(a.optionalQuantifier===!1||a.optionalQuantifier===void 0)||a.static===!0&&a.def!=``&&e[n]!==o.getPlaceholder.call(t,n,a)){i=!1;break}}}return i}function f(e){let t=this,n=+!this.opts.insertMode;return t.isRTL?e.begin-e.end>n:e.end-e.begin>n}function p(e,t,n,r,i,l,u){let d=this,m=this.dependencyLib,v=this.opts,y=d.maskset;n=n===!0;let b=e;e.begin!==void 0&&(b=d.isRTL?e.end:e.begin);function x(e){if(e!==void 0){if(e.remove!==void 0&&(Array.isArray(e.remove)||(e.remove=[e.remove]),e.remove.sort(function(e,t){return d.isRTL?e.pos-t.pos:t.pos-e.pos}).forEach(function(e){_.call(d,{begin:e,end:e+1})}),e.remove=void 0),e.insert!==void 0&&(Array.isArray(e.insert)||(e.insert=[e.insert]),e.insert.sort(function(e,t){return d.isRTL?t.pos-e.pos:e.pos-t.pos}).forEach(function(e){e.c!==``&&p.call(d,e.pos,e.c,e.strict===void 0||e.strict,e.fromIsValid===void 0?r:e.fromIsValid)}),e.insert=void 0),e.refreshFromBuffer&&e.buffer){let t=e.refreshFromBuffer;h.call(d,t===!0?t:t.start,t.end,e.buffer),e.refreshFromBuffer=void 0}e.rewritePosition!==void 0&&(b=e.rewritePosition,e=!0)}return e}function S(t,n,i){let s=!1;return o.getTests.call(d,t).every(function(l,u){let p=l.match;if(a.getBuffer.call(d,!0),s=p.jit&&y.validPositions[a.seekPrevious.call(d,t)]===void 0?!1:p.fn==null?(n===p.def||n===v.skipOptionalPartCharacter)&&p.def!==``&&{c:o.getPlaceholder.call(d,t,p,!0)||p.def,pos:t}:p.fn.test(n,y,t,i,v,f.call(d,e)),s!==!1){let i=s.c===void 0?n:s.c,a=t;return i=i===v.skipOptionalPartCharacter&&p.static===!0?o.getPlaceholder.call(d,t,p,!0)||p.def:i,s=x(s),s!==!0&&s.pos!==void 0&&s.pos!==t&&(a=s.pos),s!==!0&&s.pos===void 0&&s.c===void 0||_.call(d,e,m.extend({},l,{input:c.call(d,i,p,a)}),r,a)===!1&&(s=!1),!1}return!0}),s}let C=!0,w=m.extend(!0,[],y.validPositions);if(v.keepStatic===!1&&y.excludes[b]!==void 0&&i!==!0&&r!==!0)for(let t=b;t<(d.isRTL?e.begin:e.end);t++)y.excludes[t]!==void 0&&(y.excludes[t]=void 0,delete y.tests[t]);if(typeof v.preValidation==`function`&&r!==!0&&l!==!0&&(C=v.preValidation.call(d,a.getBuffer.call(d),b,t,f.call(d,e),v,y,e,n||i),C=x(C)),C===!0){if(C=S(b,t,n),(!n||r===!0)&&C===!1&&l!==!0){let r=y.validPositions[b];if(r&&r.match.static===!0&&(r.match.def===t||t===v.skipOptionalPartCharacter))C={caret:a.seekNext.call(d,b)};else if(v.insertMode||y.validPositions[a.seekNext.call(d,b)]===void 0||e.end>b){let r=!1;if(y.jitOffset[b]&&y.validPositions[a.seekNext.call(d,b)]===void 0&&(C=p.call(d,b+y.jitOffset[b],t,!0,!0),C!==!1&&(i!==!0&&(C.caret=b),r=!0)),e.end>b&&(y.validPositions[b]=void 0),!r&&!a.isMask.call(d,b,v.keepStatic&&b===0)){for(let e=b+1,r=a.seekNext.call(d,b,!1,b!==0);e<=r;e++)if(C=S(e,t,n),C!==!1){C=g.call(d,b,C.pos===void 0?e:C.pos)||C,b=e;break}}}}if(d.hasAlternator&&i!==!0&&!n&&(i=!0,C===!1?(v.keepStatic===!0||isFinite(parseInt(v.keepStatic))&&b>=v.keepStatic)&&(C=s.call(d,b,t,n,r,void 0,e)):C===!0&&(f.call(d,e)&&y.tests[b]&&y.tests[b].length>1&&v.keepStatic||v.numericInput!==!0&&y.tests[b]&&y.tests[b].length>1&&a.getLastValidPosition.call(d,void 0,!0)>b)&&(C=s.call(d,!0)||C)),C===!0&&(C={pos:b}),typeof v.postValidation==`function`&&r!==!0&&l!==!0){let r=v.postValidation.call(d,a.getBuffer.call(d,!0),e.begin===void 0?e:d.isRTL?e.end:e.begin,t,C,v,y,n,u,i);r!==void 0&&(C=r===!0?C:r)}}C&&C.pos===void 0&&(C.pos=b),C===!1||l===!0?(a.resetMaskSet.call(d,!0),y.validPositions=m.extend(!0,[],w)):g.call(d,void 0,b,!0);let T=x(C);return d.maxLength!==void 0&&a.getBuffer.call(d).length>d.maxLength&&!r&&(a.resetMaskSet.call(d,!0),y.validPositions=m.extend(!0,[],w),T=!1),T}function m(e,t,n){let r=this,i=this.maskset,a=!1,s=o.getTests.call(r,e);for(let r=0;r<s.length;r++)if(s[r].match&&(s[r].match.nativeDef===t.match[n.shiftPositions?`def`:`nativeDef`]&&(!n.shiftPositions||!t.match.static)||s[r].match.nativeDef===t.match.nativeDef||n.regex&&!s[r].match.static&&s[r].match.fn.test(t.input,i,e,!1,n))){a=!0;break}else if(s[r].match&&s[r].match.def===t.match.nativeDef){a=void 0;break}return a===!1&&i.jitOffset[e]!==void 0&&(a=m.call(r,e+i.jitOffset[e],t,n)),a}function h(e,t,n){let i=this,o=this.maskset,s=this.opts,c=this.dependencyLib,l,u,d=s.skipOptionalPartCharacter,f=i.isRTL?n.slice().reverse():n;if(s.skipOptionalPartCharacter=``,e===!0)a.resetMaskSet.call(i,!1),e=0,t=n.length,u=a.determineNewCaretPosition.call(i,{begin:0,end:0},!1).begin;else{for(l=e;l<t;l++)delete o.validPositions[l];u=e}let p=new c.Event(`keypress`);for(l=e;l<t;l++){p.key=f[l].toString(),i.ignorable=!1;let e=r.EventHandlers.keypressEvent.call(i,p,!0,!1,!1,u);e!==!1&&e!==void 0&&(u=e.forwardPosition)}s.skipOptionalPartCharacter=d}function g(e,t,n){let r=this,i=this.maskset,s=this.dependencyLib;if(e===void 0)for(e=t-1;e>0&&!i.validPositions[e];e--);for(let u=e;u<t;u++)if(i.validPositions[u]===void 0&&!a.isMask.call(r,u,!1)&&(u==0?o.getTest.call(r,u):i.validPositions[u-1])){let e=o.getTests.call(r,u).slice();e[e.length-1].match.def===``&&e.pop();var c=o.determineTestTemplate.call(r,u,e),l;if(c&&(c.match.jit!==!0||c.match.newBlockMarker===`master`&&(l=i.validPositions[u+1])&&l.match.optionalQuantifier===!0)&&(c=s.extend({},c,{input:o.getPlaceholder.call(r,u,c.match,!0)||c.match.def}),c.generatedInput=!0,_.call(r,u,c,!0),n!==!0)){let e=i.validPositions[t].input;return i.validPositions[t]=void 0,p.call(r,t,e,!0,!0)}}}function _(e,t,n,r){let i=this,s=this.maskset,c=this.opts,l=this.dependencyLib;function u(e,t,n){let r=t[e];if(r!==void 0&&r.match.static===!0&&r.match.optionality!==!0&&(t[0]===void 0||t[0].alternation===void 0)){let r=n.begin<=e-1?t[e-1]&&t[e-1].match.static===!0&&t[e-1]:t[e-1],i=n.end>e+1?t[e+1]&&t[e+1].match.static===!0&&t[e+1]:t[e+1];return r&&i}return!1}let d=0,h=e.begin===void 0?e:e.begin,g=e.end===void 0?e:e.end,_=!0;if(e.begin>e.end&&(h=e.end,g=e.begin),r=r===void 0?h:r,n===void 0&&(h!==g||c.insertMode&&s.validPositions[r]!==void 0||t===void 0||t.match.optionalQuantifier||t.match.optionality)){let n=l.extend(!0,[],s.validPositions),v=a.getLastValidPosition.call(i,void 0,!0),y;s.p=h;let b=f.call(i,e)?h:r;for(y=v;y>=b;y--)s.validPositions.splice(y,1),t===void 0&&delete s.tests[y+1];let x=r,S=x,C,w,T;for(t&&(s.validPositions[r]=l.extend(!0,{},t),S++,x++),n[g]==null&&s.jitOffset[g]&&(g+=s.jitOffset[g]+ +!!t),y=t?g:g-1;y<=v;y++){if((C=n[y])!==void 0&&(c.shiftPositions!==!0||C.generatedInput!==!0)&&(y>=g||y>=h&&u(y,n,{begin:h,end:g}))){for(;T=o.getTest.call(i,S),T.match.def!==``;){if((w=m.call(i,S,C,c))!==!1||C.match.def===`+`){C.match.def===`+`&&a.getBuffer.call(i,!0);let e=p.call(i,S,C.input,C.match.def!==`+`,!0);if(_=e!==!1,x=(e.pos||S)+1,!_&&w)break}else _=!1;if(_){t===void 0&&C.match.static&&y===e.begin&&d++;break}if(!_&&a.getBuffer.call(i),S>s.maskLength)break;S++}o.getTest.call(i,S).match.def==``&&(_=!1),S=x}if(!_)break}if(!_)return s.validPositions=l.extend(!0,[],n),a.resetMaskSet.call(i,!0),!1}else t&&o.getTest.call(i,r).match.cd===t.match.cd&&(s.validPositions[r]=l.extend(!0,{},t));return a.resetMaskSet.call(i,!0),d}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.determineTestTemplate=f,t.getDecisionTaker=c,t.getMaskTemplate=u,t.getPlaceholder=l,t.getTest=m,t.getTestTemplate=d,t.getTests=g,t.isSubsetOf=h;var r=o(n(7)),i=n(20),a=n(21);function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){let n=(e.alternation==null?e.locator:e.mloc[`${c(e)}:${e.alternation}`]||e.locator).join(``);if(n!==``)for(n=n.split(`:`)[0];n.length<t;)n+=`0`;return n}function c(e){let t=e.locator[e.alternation];return typeof t==`string`&&t.length>0&&(t=t.split(`,`).sort((e,t)=>e-t)[0]),t===void 0?``:t.toString()}function l(e,t,n){let r=this,o=this.opts,s=this.maskset;if(t||=m.call(r,e).match,t.placeholder!==void 0||n===!0)if(t.placeholder!==``&&t.static===!0&&t.generated!==!0){let s=i.getLastValidPosition.call(r,e),c=i.seekNext.call(r,s);return(n?e<=c:e<c)?a.casing.call(r,o.staticDefinitionSymbol&&t.static?t.nativeDef:t.def,t,e):typeof t.placeholder==`function`?t.placeholder(o):t.placeholder}else return typeof t.placeholder==`function`?t.placeholder(o):t.placeholder;else if(t.static===!0){if(e>-1&&s.validPositions[e]===void 0){let t=g.call(r,e),n=[],i;if(typeof o.placeholder==`string`&&t.length>1+ +(t[t.length-1].match.def===``)){for(let r=0;r<t.length;r++)if(t[r].match.def!==``&&t[r].match.optionality!==!0&&t[r].match.optionalQuantifier!==!0&&(t[r].match.static===!0||i===void 0||t[r].match.fn.test(i.match.def,s,e,!0,o)!==!1)&&(n.push(t[r]),t[r].match.static===!0&&(i=t[r]),n.length>1&&/[0-9a-zA-Z]/.test(n[0].match.def)))return o.placeholder.charAt(e%o.placeholder.length)}}return t.def}return typeof o.placeholder==`object`?t.def:o.placeholder.charAt(e%o.placeholder.length)}function u(e,t,n,r,i){let a=this,o=this.opts,s=this.maskset,c=o.greedy,u=[];i&&o.greedy&&(o.greedy=!1,a.maskset.tests={}),t||=0;let p,m=0,h,_,v;do{if(e===!0&&s.validPositions[m])_=i&&s.validPositions[m].match.optionality&&s.validPositions[m+1]===void 0&&(s.validPositions[m].generatedInput===!0||s.validPositions[m].input==o.skipOptionalPartCharacter&&m>0)?f.call(a,m,g.call(a,m,p,m-1)):s.validPositions[m],h=_.match,p=_.locator.slice(),u.push(n===!0?_.input:n===!1?h.nativeDef:l.call(a,m,h));else{_=d.call(a,m,p,m-1),h=_.match,p=_.locator.slice();let e=r===!0?!1:o.jitMasking===!1?h.jit:o.jitMasking;v=(v||s.validPositions[m-1])&&h.static&&h.def!==o.groupSeparator&&h.fn===null,v||e===!1||e===void 0||typeof e==`number`&&isFinite(e)&&e>m?u.push(n===!1?h.nativeDef:l.call(a,u.length,h)):v=!1}m++}while(h.static!==!0||h.def!==``||t>m);return u[u.length-1]===``&&u.pop(),(n!==!1||s.maskLength===void 0)&&(s.maskLength=m-1),o.greedy=c,u}function d(e,t,n){let r=this;return this.maskset.validPositions[e]||f.call(r,e,g.call(r,e,t&&t.slice(),n))}function f(e,t){let n=this,r=n.opts,i=p(e,t);e=e>0?e-1:0;let a=Math.max(...t.map(e=>e.locator===void 0?0:e.locator.length)),o=s(m.call(n,e),a),c=0,l,u,d;r.greedy&&t.length>1&&t[t.length-1].match.def===``&&(c=1);for(let e=0;e<t.length-c;e++){let n=t[e];l=s(n,a);let c=Number(l)-Number(o);(n.unMatchedAlternationStopped!==!0||t.filter(e=>e.unMatchedAlternationStopped!==!0).length<=1)&&(u===void 0||l!==``&&c<u||d&&!r.greedy&&d.match.optionality&&d.match.optionality-i>0&&d.match.newBlockMarker===`master`&&(!n.match.optionality||n.match.optionality-i<1||!n.match.newBlockMarker)||d&&!r.greedy&&d.match.optionalQuantifier&&!n.match.optionalQuantifier)&&(u=c,d=n)}return d}function p(e,t){let n=0,r=!1;return t.forEach(e=>{e.match.optionality&&(n!==0&&n!==e.match.optionality&&(r=!0),(n===0||n>e.match.optionality)&&(n=e.match.optionality))}),n&&(e==0||t.length==1?n=0:r||(n=0)),n}function m(e,t){let n=this,r=this.maskset;return r.validPositions[e]?r.validPositions[e]:(t||g.call(n,e))[0]}function h(e,t,n){function r(e){let t=[],n=-1,r;for(let i=0,a=e.length;i<a;i++)if(e.charAt(i)===`-`)for(r=e.charCodeAt(i+1);++n<r;)t.push(String.fromCharCode(n));else n=e.charCodeAt(i),t.push(e.charAt(i));return t.join(``)}return e.match.def===t.match.nativeDef?!0:(n.regex||e.match.fn instanceof RegExp&&t.match.fn instanceof RegExp)&&e.match.static!==!0&&t.match.static!==!0?t.match.fn.source===`.`||r(t.match.fn.source.replace(/[[\]/]/g,``)).indexOf(r(e.match.fn.source.replace(/[[\]/]/g,``)))!==-1:!1}function g(e,t,n){let i=this,a=this.dependencyLib,o=this.maskset,s=this.opts,c=this.el,l=o.maskToken,u=t?n:0,d=t?t.slice():[0],p=[],m=!1,g=!1,_,v=t?t.join(``):``,y=!1;function b(t,n,a,l){function d(a,l,f){function C(e,t){let n=t.matches.indexOf(e)===0;return n||t.matches.every(function(r,i){return r.isQuantifier===!0?n=C(e,t.matches[i-1]):Object.prototype.hasOwnProperty.call(r,`matches`)&&(n=C(e,r)),n?(t.matches[i+1]&&t.matches[i+1].isQuantifier&&(n=i===0),!1):!0}),n}function w(e,t,n){let r,i,a,s,c=`${t}:${n}`;if((o.tests[e]||o.validPositions[e])&&(o.validPositions[e]?[o.validPositions[e]]:o.tests[e]).every(function(e,o){return e.mloc[c]?(r=e,!1):(Object.values(e.mloc).filter(e=>e[n]==t).every(t=>{let n=t.join(``).split(`:`)[0];for(a||=n;n.length<a.length;)n+=`0`;let o=Number(n);return(r===void 0||o<i)&&(i=o,r=e,s=Object.entries(e.mloc).find(e=>e[1].toString()===t.toString())[0]),!0}),!0)}),r){n===void 0&&(c=`${t}:${r.alternation}`);let e=`${r.locator[r.alternation]}:${r.alternation}`,i=r.mloc[s||c]||r.mloc[e]||r.locator;i[i.length-1].toString().indexOf(`:`)!==-1&&i.pop();let a=parseInt(r.alternation)+1;return i.slice(a)}else return n===void 0?void 0:w(e,t)}function T(t,n){return t.match.static===!0&&n.match.static!==!0&&n.match.fn.test(t.match.def,o,e,!1,s,!1)}function E(e,t){function n(n){e.mloc=e.mloc||{};let r=e.locator[n];if(r===void 0)e.alternation=void 0;else{if(t===void 0)typeof r==`string`&&(r=r.split(`,`)[0]),r=`${r}:${n}`,e.mloc[r]===void 0&&(e.mloc[r]=e.locator.slice(),e.mloc[r].push(`:${n}`));else{let n=0;for(let r in t.mloc)if(e.mloc[r]===void 0)e.mloc[r]=t.mloc[r];else do if(e.mloc[r+n]===void 0){e.mloc[r+n]=t.mloc[r];break}while(e.mloc[r+n++]!==void 0);e.locator=S(u,[e,t])}return e.alternation>n&&(e.alternation=n),!0}return!1}let r=e.alternation,i=t===void 0||r<=t.alternation&&e.locator[r].toString().indexOf(t.locator[r])===-1;if(!i&&r>t.alternation){for(let n=0;n<r;n++)if(e.locator[n]!==t.locator[n]){r=n,i=!0;break}}return i?n(r):!1}function ee(){if(a=d(t.matches[t.matches.indexOf(a)+1],l,f),a)return!0}function D(){let t=a,r=p.length;if(a=b(a,n,l,f),p.length>0)if(p.forEach(function(e,t){t>=r&&(e.match.optionality=e.match.optionality?e.match.optionality+1:1)}),_=p[p.length-1].match,f===void 0&&C(_,t))m=!0,u=e;else return a}function te(){function r(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n];r.isQuantifier&&!isNaN(r.quantifier.max)?t+=r.quantifier.max:t++}return t}function _(e){let t=e.matches[0].matches?r(e.matches[0].matches):1,n;for(let i=0;i<e.matches.length&&(n=e.matches[i].matches?r(e.matches[i].matches):1,t===n);i++);return t!==n}i.hasAlternator=!0;let v=a,b=[],x=p.slice(),S=l.length,C=n.length>0?n.shift():-1,ee;if(C===-1||typeof C==`string`){let t=u,r=n.slice(),i=[],D;if(typeof C==`string`)i=C.split(`,`);else for(D=0;D<v.matches.length;D++)i.push(D.toString());if(o.excludes[e]!==void 0){let t=i.slice();for(let t=0,n=o.excludes[e].length;t<n;t++){let n=o.excludes[e][t].toString().split(`:`);l.length==n[1]&&i.splice(i.indexOf(n[0]),1)}i.length===0&&(delete o.excludes[e],i=t)}(s.keepStatic===!0||isFinite(parseInt(s.keepStatic))&&t>=s.keepStatic)&&(i=i.slice(0,1));for(let e=0;e<i.length;e++){D=parseInt(i[e]),p=[],n=typeof C==`string`&&w(u,D,S)||r.slice();let o=v.matches[D];if(o&&d(o,[D].concat(l),f))a=!0;else if(y=_(v),o&&o.matches&&o.matches.length>v.matches[0].matches.length)break;ee=p.slice(),u=t,p=[];for(let e=0;e<ee.length;e++){let n=ee[e],r=!1;n.alternation=n.alternation||S,E(n);for(let e=0;e<b.length;e++){let i=b[e];if(typeof C!=`string`||n.alternation!==void 0&&C.indexOf(n.locator[n.alternation].toString())!==-1){if(n.match.nativeDef===i.match.nativeDef){r=!0,E(i,n);break}else if(h(n,i,s)){E(n,i)&&(r=!0,b.splice(b.indexOf(i),0,n));break}else if(h(i,n,s)){E(i,n);break}else if(T(n,i)){E(n,i)&&(r=!0,b.splice(b.indexOf(i),0,n));break}else if(T(i,n)){E(i,n),i.match.optionality&&c.inputmask.userOptions.keepStatic===void 0&&(s.keepStatic=t);break}}}r||b.push(n)}}p=x.concat(b),u=e,m||=p.length>0&&y,!y&&m&&(g=!0),a=b.length>0&&!y,y&&m&&!a&&p.forEach(function(e,t){e.unMatchedAlternationStopped=!0}),n=r.slice()}else a=d(v.matches[C]||t.matches[C],[C].concat(l),f);if(a)return!0}function ne(){let r=a,i=!1;for(let c=n.length>0?n.shift():0;c<(isNaN(r.quantifier.max)?c+1:r.quantifier.max)&&u<=e;c++){let n=t.matches[t.matches.indexOf(r)-1];if(a=d(n,[c].concat(l),n),a){if(p.forEach(function(t,l){_=x(n,t.match)?t.match:p[p.length-1].match,_.optionalQuantifier=c>=r.quantifier.min,_.jit=(c+1)*(n.matches.indexOf(_)+1)>r.quantifier.jit,(_.optionalQuantifier||_.optionality)&&C(_,n)&&(m=!0,u=e,s.greedy&&o.validPositions[e-1]==null&&c>r.quantifier.min&&[`*`,`+`].indexOf(r.quantifier.max)!=-1&&(p.pop(),v=void 0),i=!0,a=!1),!i&&_.jit&&(o.jitOffset[e]=n.matches.length-n.matches.indexOf(_))}),i)break;return!0}}}if(u>e+s._maxTestPos)throw Error(`Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. ${o.mask}`);if(u===e&&a.matches===void 0)if(p.push({match:a,locator:l.reverse(),cd:v,mloc:{}}),a.optionality&&f===void 0&&(s.definitions&&s.definitions[a.nativeDef]&&s.definitions[a.nativeDef].optional||r.default.prototype.definitions[a.nativeDef]&&r.default.prototype.definitions[a.nativeDef].optional))m=!0,u=e;else return!0;else if(a.matches!==void 0){if(a.isGroup&&f!==a)return ee();if(a.isOptional)return D();if(a.isAlternator)return te();if(a.isQuantifier&&f!==t.matches[t.matches.indexOf(a)-1])return ne();if(a=b(a,n,l,f),a)return!0}else u++}for(let r=n.length>0?n.shift():0;r<t.matches.length;r++)if(t.matches[r].isQuantifier!==!0){let n=d(t.matches[r],[r].concat(a),l);if(n&&u===e)return n;if(u>e)break}}function x(e,t){let n=e.matches.indexOf(t)!=-1;return n||e.matches.forEach((e,r)=>{e.matches!==void 0&&!n&&(n=x(e,t))}),n}function S(e,t){let n=[];return Array.isArray(t)||(t=[t]),t.length>0&&(t[0].alternation===void 0||s.keepStatic===!0||isFinite(parseInt(s.keepStatic))&&e>=s.keepStatic?(n=f.call(i,e,t.slice()).locator.slice(),n.length===0&&(n=t[0].locator.slice())):t.forEach(e=>{Object.values(e.mloc).forEach(e=>{e.forEach((e,t)=>{let r=n[t];e.toString().includes(`:`)||r&&r.toString().includes(`:`)||(r===void 0?n[t]=e:r.toString().includes(e)||(n[t]=n[t]+`,`+e))})})})),n}if(e>-1){if(t===void 0){let t=e-1,n;for(;(n=o.validPositions[t]||o.tests[t])===void 0&&t>-1;)t--;n!==void 0&&t>-1&&(d=S(t,n),v=d.join(``),u=t)}if(o.tests[e]&&o.tests[e][0].cd===v)return o.tests[e];for(let t=d.shift();t<l.length&&!(b(l[t],d,[t])&&u===e||u>e);t++);}(p.length===0||m)&&p.push({match:{fn:null,static:!0,optionality:!1,casing:null,def:``,placeholder:``},locator:y&&p.filter(e=>e.unMatchedAlternationStopped!==!0).length===0||g&&p.length>0&&p.filter(e=>!e.match.static).every(e=>e.match.optionalQuantifier)?[0]:[],mloc:{},cd:v});let C;return t!==void 0&&o.tests[e]?C=a.extend(!0,[],p):(o.tests[e]=a.extend(!0,[],p),C=o.tests[e]),p.forEach(e=>{e.match.optionality=e.match.defOptionality||!1}),C}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.mask=l;var r=n(17),i=n(18),a=n(15),o=n(16),s=n(20),c=n(21);function l(){let e=this,t=this.opts,n=this.el,l=this.dependencyLib;function u(t,n){function r(t){let r,i;function c(t){if(l.valHooks&&(l.valHooks[t]===void 0||l.valHooks[t].inputmaskpatch!==!0)){let r=l.valHooks[t]&&l.valHooks[t].get?l.valHooks[t].get:function(e){return e.value},i=l.valHooks[t]&&l.valHooks[t].set?l.valHooks[t].set:function(e,t){return e.value=t,e};l.valHooks[t]={get:function(t){if(t.inputmask){if(t.inputmask.opts.autoUnmask)return t.inputmask.unmaskedvalue();{let i=r(t);return s.getLastValidPosition.call(e,void 0,void 0,t.inputmask.maskset.validPositions)!==-1||n.nullable!==!0?i:``}}else return r(t)},set:function(e,t){let n=i(e,t);return e.inputmask&&(0,o.applyInputValue)(e,t),n},inputmaskpatch:!0}}}function u(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():s.getLastValidPosition.call(e)!==-1||n.nullable!==!0?this.getRootNode().activeElement===this&&n.clearMaskOnLostFocus?(e.isRTL?o.clearOptionalTail.call(e,s.getBuffer.call(e).slice()).reverse():o.clearOptionalTail.call(e,s.getBuffer.call(e).slice())).join(``):r.call(this):``:r.call(this)}function d(e){i.call(this,e),this.inputmask&&(0,o.applyInputValue)(this,e)}function f(e){a.EventRuler.on(e,`mouseenter`,function(){let e=this,t=e.inputmask._valueGet(!0);t!=(e.inputmask.isRTL?s.getBuffer.call(e.inputmask).slice().reverse():s.getBuffer.call(e.inputmask)).join(``)&&(0,o.applyInputValue)(e,t)})}if(!t.inputmask.__valueGet){if(n.noValuePatching!==!0){if(Object.getOwnPropertyDescriptor){let e=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),`value`):void 0;e&&e.get&&e.set?(r=e.get,i=e.set,Object.defineProperty(t,"value",{get:u,set:d,configurable:!0})):t.tagName.toLowerCase()!==`input`&&(r=function(){return this.textContent},i=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:u,set:d,configurable:!0}))}else document.__lookupGetter__&&t.__lookupGetter__(`value`)&&(r=t.__lookupGetter__(`value`),i=t.__lookupSetter__(`value`),t.__defineGetter__(`value`,u),t.__defineSetter__(`value`,d));t.inputmask.__valueGet=r,t.inputmask.__valueSet=i}t.inputmask._valueGet=function(t){return e.isRTL&&t!==!0?r.call(this.el).split(``).reverse().join(``):r.call(this.el)},t.inputmask._valueSet=function(t,n){i.call(this.el,t==null?``:n!==!0&&e.isRTL?t.split(``).reverse().join(``):t)},r===void 0&&(r=function(){return this.value},i=function(e){this.value=e},c(t.type),f(t))}}let i=t.getAttribute(`type`),c=t.tagName.toLowerCase()===`input`&&n.supportsInputType.includes(i)||t.isContentEditable||t.tagName.toLowerCase()===`textarea`;if(!c)if(t.tagName.toLowerCase()===`input`){let e=document.createElement(`input`);e.setAttribute(`type`,i),c=e.type===`text`,e=null}else c=`partial`;return c===!1?t.inputmask=void 0:r(t),c}a.EventRuler.off(n);let d=u(n,t);if(d!==!1){e.originalPlaceholder=n.placeholder,e.maxLength=n===void 0?void 0:n.maxLength,e.maxLength===-1&&(e.maxLength=void 0),`inputMode`in n&&n.getAttribute(`inputmode`)===null&&(n.inputMode=t.inputmode,n.setAttribute(`inputmode`,t.inputmode)),d===!0&&(t.showMaskOnFocus=t.showMaskOnFocus&&[`cc-number`,`cc-exp`].indexOf(n.autocomplete)===-1,r.iphone&&(t.insertModeVisual=!1,n.setAttribute(`autocorrect`,`off`)),a.EventRuler.on(n,`submit`,i.EventHandlers.submitEvent),a.EventRuler.on(n,`reset`,i.EventHandlers.resetEvent),a.EventRuler.on(n,`blur`,i.EventHandlers.blurEvent),a.EventRuler.on(n,`focus`,i.EventHandlers.focusEvent),a.EventRuler.on(n,`invalid`,i.EventHandlers.invalidEvent),a.EventRuler.on(n,`click`,i.EventHandlers.clickEvent),a.EventRuler.on(n,`mouseleave`,i.EventHandlers.mouseleaveEvent),a.EventRuler.on(n,`mouseenter`,i.EventHandlers.mouseenterEvent),a.EventRuler.on(n,`paste`,i.EventHandlers.pasteEvent),a.EventRuler.on(n,`cut`,i.EventHandlers.cutEvent),a.EventRuler.on(n,`complete`,t.oncomplete),a.EventRuler.on(n,`incomplete`,t.onincomplete),a.EventRuler.on(n,`cleared`,t.oncleared),t.inputEventOnly!==!0&&a.EventRuler.on(n,`keydown`,i.EventHandlers.keyEvent),(r.mobile||t.inputEventOnly)&&n.removeAttribute(`maxLength`),a.EventRuler.on(n,`input`,i.EventHandlers.inputFallBackEvent)),a.EventRuler.on(n,`setvalue`,i.EventHandlers.setValueEvent),e.applyMaskHook===void 0||e.applyMaskHook(),s.getBufferTemplate.call(e).join(``),e.undoValue=e._valueGet(!0);let l=n.getRootNode().activeElement;if(n.inputmask._valueGet(!0)!==``||t.clearMaskOnLostFocus===!1||l===n){(0,o.applyInputValue)(n,n.inputmask._valueGet(!0));let r=s.getBuffer.call(e).slice();c.isComplete.call(e,r)===!1&&t.clearIncomplete&&s.resetMaskSet.call(e,!1),t.clearMaskOnLostFocus&&l!==n&&(s.getLastValidPosition.call(e)===-1?r=[]:o.clearOptionalTail.call(e,r)),(t.clearMaskOnLostFocus===!1||t.showMaskOnFocus&&l===n||n.inputmask._valueGet(!0)!==``)&&(0,o.writeBuffer)(n,r),l===n?s.caret.call(e,n,s.seekNext.call(e,s.getLastValidPosition.call(e))):s.caret.call(e,n,0)}}}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.analyseMask=l,t.generateMaskSet=c;var r=s(n(10)),i=n(25),a=s(n(7)),o=s(n(26));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){let n;function o(e,{repeat:t,groupmarker:n,quantifiermarker:r,keepStatic:a}){if(t>0||t===`*`||t===`+`){let i=t===`*`?0:t===`+`?1:t;if(i!==t)e=n[0]+e+n[1]+r[0]+i+`,`+t+r[1];else{let t=e;for(let n=1;n<i;n++)e+=t}}if(a===!0){let t=e.match(RegExp(`(.)\\[([^\\]]*)\\]`,`g`));t&&t.forEach((t,n)=>{let[r,a]=t.split(`[`);a=a.replace(`]`,``),e=e.replace(RegExp(`${(0,i.escapeRegex)(r)}\\[${(0,i.escapeRegex)(a)}\\]`),r.charAt(0)===a.charAt(0)?`(${r}|${r}${a})`:`${r}[${a}]`)})}return e}function s(e,n,i){let s=!1;(e===null||e===``)&&(s=i.regex!==null,s?(e=i.regex,e=e.replace(/^(\^)(.*)(\$)$/,`$2`)):(s=!0,e=`.*`)),e.length===1&&i.greedy===!1&&i.repeat!==0&&(i.placeholder=``),e=o(e,i);let c,l;return l=s?`regex_`+i.regex:i.numericInput?e.split(``).reverse().join(``):e,i.keepStatic!==null&&(l=`ks_`+i.keepStatic+l),typeof i.placeholder==`object`&&(l=`ph_`+JSON.stringify(i.placeholder)+l),a.default.prototype.masksCache[l]===void 0||t===!0?(c={mask:e,maskToken:a.default.prototype.analyseMask(e,s,i),validPositions:[],_buffer:void 0,buffer:void 0,tests:{},excludes:{},metadata:n,maskLength:void 0,jitOffset:{}},t!==!0&&(a.default.prototype.masksCache[l]=c,c=r.default.extend(!0,{},a.default.prototype.masksCache[l]))):c=r.default.extend(!0,{},a.default.prototype.masksCache[l]),c}if(typeof e.mask==`function`&&(e.mask=e.mask(e)),Array.isArray(e.mask))if(e.mask.length>1){e.keepStatic===null&&(e.keepStatic=!0);let t=e.groupmarker[0];return(e.isRTL?e.mask.reverse():e.mask).forEach(function(n){t.length>1&&(t+=e.alternatormarker),n.mask!==void 0&&typeof n.mask!=`function`?t+=n.mask:t+=n}),t+=e.groupmarker[1],s(t,e.mask,e)}else e.mask=e.mask.pop();return n=e.mask&&e.mask.mask!==void 0&&typeof e.mask.mask!=`function`?s(e.mask.mask,e.mask,e):s(e.mask,e.mask,e),e.keepStatic===null&&(e.keepStatic=!1),n}function l(e,t,n){let r=/(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,i=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,s=new o.default,c=[],l=[],u=!1,d,f,p,m,h,g,_=!1;function v(e,r,i){i=i===void 0?e.matches.length:i;let o=e.matches[i-1],c=n.casing?`i`:``;if(t)r.indexOf(`[`)===0||u&&/\\d|\\s|\\w|\\p/i.test(r)||r===`.`?(/\\p\{.*}/i.test(r)&&(c+=`u`),e.matches.splice(i++,0,{fn:new RegExp(r,c),static:!1,optionality:!1,newBlockMarker:o===void 0?`master`:o.def!==r,casing:null,def:r,placeholder:typeof n.placeholder==`object`?n.placeholder[s.matches.length]:void 0,nativeDef:r})):(u&&(r=r[r.length-1]),r.split(``).forEach(function(t,r){o=e.matches[i-1],e.matches.splice(i++,0,{fn:/[a-z]/i.test(n.staticDefinitionSymbol||t)?RegExp(`[`+(n.staticDefinitionSymbol||t)+`]`,c):null,static:!0,optionality:!1,newBlockMarker:o===void 0?`master`:o.def!==t&&o.static!==!0,casing:null,def:n.staticDefinitionSymbol||t,placeholder:n.staticDefinitionSymbol===void 0?typeof n.placeholder==`object`?n.placeholder[s.matches.length]:void 0:t,nativeDef:(u?`'`:``)+t})})),u=!1;else{let t=n.definitions&&n.definitions[r]||n.usePrototypeDefinitions&&a.default.prototype.definitions[r];t&&!u?(typeof t.validator==`string`&&/\\p\{.*}/i.test(t.validator)&&(c+=`u`),e.matches.splice(i++,0,{fn:t.validator?typeof t.validator==`string`?new RegExp(t.validator,c):new function(){this.test=t.validator}:/./,static:t.static||!1,optionality:t.optional||!1,defOptionality:t.optional||!1,newBlockMarker:o===void 0||t.optional?`master`:o.def!==(t.definitionSymbol||r),casing:t.casing,def:t.definitionSymbol||r,placeholder:t.placeholder,nativeDef:r,generated:t.generated})):(e.matches.splice(i++,0,{fn:/[a-z]/i.test(n.staticDefinitionSymbol||r)?RegExp(`[`+(n.staticDefinitionSymbol||r)+`]`,c):null,static:!0,optionality:!1,newBlockMarker:o===void 0?`master`:o.def!==r&&o.static!==!0,casing:null,def:n.staticDefinitionSymbol||r,placeholder:n.staticDefinitionSymbol===void 0?void 0:r,nativeDef:(u?`'`:``)+r}),u=!1)}}function y(e){e&&e.matches&&e.matches.forEach(function(r,i){let a=e.matches[i+1];(a===void 0||a.matches===void 0||a.isQuantifier===!1)&&r&&r.isGroup&&(r.isGroup=!1,t||(v(r,n.groupmarker[0],0),r.openGroup!==!0&&v(r,n.groupmarker[1]))),y(r)})}function b(){if(c.length>0){if(m=c[c.length-1],v(m,f),m.isAlternator){h=c.pop();for(let e=0;e<h.matches.length;e++)h.matches[e].isGroup&&(h.matches[e].isGroup=!1);c.length>0?(m=c[c.length-1],m.matches.push(h)):s.matches.push(h)}}else v(s,f)}function x(e){function t(e){return e===n.optionalmarker[0]?e=n.optionalmarker[1]:e===n.optionalmarker[1]?e=n.optionalmarker[0]:e===n.groupmarker[0]?e=n.groupmarker[1]:e===n.groupmarker[1]&&(e=n.groupmarker[0]),e}e.matches=e.matches.reverse();for(let n in e.matches)if(Object.prototype.hasOwnProperty.call(e.matches,n)){let r=parseInt(n);if(e.matches[n].isQuantifier&&e.matches[r+1]&&e.matches[r+1].isGroup){let t=e.matches[n];e.matches.splice(n,1),e.matches.splice(r+1,0,t)}e.matches[n].matches===void 0?e.matches[n]=t(e.matches[n]):e.matches[n]=x(e.matches[n])}return e}function S(e){let t=new o.default(!0);return t.openGroup=!1,t.matches=e,t}function C(){if(p=c.pop(),p.openGroup=!1,p!==void 0)if(c.length>0){if(m=c[c.length-1],m.matches.push(p),m.isAlternator){h=c.pop();for(let e=0;e<h.matches.length;e++)h.matches[e].isGroup=!1,h.matches[e].alternatorGroup=!1;c.length>0?(m=c[c.length-1],m.matches.push(h)):s.matches.push(h)}}else s.matches.push(p);else b()}function w(e){let t=e.pop();return t.isQuantifier&&(t=S([e.pop(),t])),t}for(t&&(n.optionalmarker[0]=void 0,n.optionalmarker[1]=void 0);d=t?i.exec(e):r.exec(e);){if(f=d[0],t){switch(f.charAt(0)){case`?`:f=`{0,1}`;break;case`+`:case`*`:f=`{`+f+`}`;break;case`|`:if(c.length===0){let e=S(s.matches);e.openGroup=!0,c.push(e),s.matches=[],_=!0}break}switch(f){case`\\d`:f=`[0-9]`;break;case`\\p`:f+=i.exec(e)[0],f+=i.exec(e)[0];break;case`(?:`:case`(?=`:case`(?!`:case`(?<=`:case`(?<!`:break}}if(u){b();continue}switch(f.charAt(0)){case`$`:case`^`:t||b();break;case n.escapeChar:u=!0,t&&b();break;case n.optionalmarker[1]:case n.groupmarker[1]:C();break;case n.optionalmarker[0]:c.push(new o.default(!1,!0));break;case n.groupmarker[0]:c.push(new o.default(!0));break;case n.quantifiermarker[0]:{let e=new o.default(!1,!1,!0);f=f.replace(/[{}?]/g,``);let t=f.split(`|`),n=t[0].split(`,`),r=isNaN(n[0])?n[0]:parseInt(n[0]),i=n.length===1?r:isNaN(n[1])?n[1]:parseInt(n[1]),a=isNaN(t[1])?t[1]:parseInt(t[1]);(r===`*`||r===`+`)&&(r=i===`*`?0:1),e.quantifier={min:r,max:i,jit:a};let l=c.length>0?c[c.length-1].matches:s.matches;d=l.pop(),d.isGroup||(d=S([d])),l.push(d),l.push(e)}break;case n.alternatormarker:if(c.length>0){m=c[c.length-1];let e=m.matches[m.matches.length-1];g=m.openGroup&&(e.matches===void 0||e.isGroup===!1&&e.isAlternator===!1)?c.pop():w(m.matches)}else g=w(s.matches);if(g.isAlternator)c.push(g);else if(g.alternatorGroup?(h=c.pop(),g.alternatorGroup=!1):h=new o.default(!1,!1,!1,!0),h.matches.push(g),c.push(h),g.openGroup){g.openGroup=!1;let e=new o.default(!0);e.alternatorGroup=!0,c.push(e)}break;default:b()}}for(_&&C();c.length>0;)p=c.pop(),s.matches.push(p);return s.matches.length>0&&(y(s),l.push(s)),(n.numericInput||n.isRTL)&&x(l[0]),l}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.escapeRegex=r;let n=RegExp(`(\\`+[`/`,`.`,`*`,`+`,`?`,`|`,`(`,`)`,`[`,`]`,`{`,`}`,`\\`,`$`,`^`].join(`|\\`)+`)`,`gim`);function r(e){return e.replace(n,`\\$1`)}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(e,t,n,r){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=n||!1,this.isAlternator=r||!1,this.quantifier={min:1,max:1}}}),(function(e,t,n){var r=n(25),i=c(n(7)),a=n(19),o=n(20),s=n(22);n(28);function c(e){return e&&e.__esModule?e:{default:e}}let l=i.default.dependencyLib;class u{constructor(e,t,n,r){this.mask=e,this.format=t,this.opts=n,this.inputmask=r,this._date=new Date(1,0,1),this.initDateObject(e,this.opts,this.inputmask)}get date(){return this._date===void 0&&(this._date=new Date(1,0,1),this.initDateObject(void 0,this.opts,this.inputmask)),this._date}initDateObject(e,t,n){let r,i=-1;for(x(t).lastIndex=0;r=x(t).exec(this.format);)if(r.index>=i){let a=/\d+$/.exec(r[0]),o=a?r[0][0]+`x`:r[0],c;if(e!==void 0){if(a){let i=x(t).lastIndex,a=te.call(n,r.index,t,n&&n.maskset);x(t).lastIndex=i,c=e.slice(0,e.indexOf(a.nextMatch[0]))}else{let a=r[0][0],l=r.index;for(;n&&(t.placeholder[`${r.index}'${s.getTest.call(n,l).match.placeholder}`]||s.getTest.call(n,l).match.placeholder)===a;)l++;i=l;let u=l-r.index;c=e.slice(0,u||b(o)&&b(o)[4]||o.length)}e=e.slice(c.length)}Object.prototype.hasOwnProperty.call(m,o)&&this.setValue(this,c,o,b(o)[2],b(o)[1])}}setValue(e,t,n,r,i){if(t!==void 0)switch(r){case`ampm`:e[r]=t,e[`raw`+r]=t.replace(/\s/g,`_`);break;case`month`:if(n===`MMM`||n===`MMMM`){n===`MMM`?e[r]=E(p.monthNames.slice(0,12).findIndex(e=>t.toLowerCase()===e.toLowerCase())+1,2):e[r]=E(p.monthNames.slice(12,24).findIndex(e=>t.toLowerCase()===e.toLowerCase())+1,2),e[r]=e[r]===`00`?``:e[r].toString(),e[`raw`+r]=e[r];break}default:e[r]=t.replace(/[^0-9]/g,`0`),e[`raw`+r]=t.replace(/\s/g,`_`)}if(i!==void 0){let t=e[r];(r===`day`&&parseInt(t)===29||r===`month`&&parseInt(t)===2)&&parseInt(e.day)===29&&parseInt(e.month)===2&&(e.year===``||e.year===void 0)&&e._date.setFullYear(2012,1,29),r===`day`&&(d=!0,parseInt(t)===0&&(t=1)),r===`month`&&(d=!0),r===`year`&&(d=!0,t.length<b(n)[4]&&(t=E(t,b(n)[4],!0))),(t!==``&&!isNaN(t)||r===`ampm`)&&i.call(e._date,t)}}reset(){this._date=new Date(1,0,1)}reInit(){this._date=void 0,this.date}}let d=!1,f=new Date().getFullYear(),p=i.default.prototype.i18n,m={d:[`[1-9]|[12][0-9]|3[01]`,Date.prototype.setDate,`day`,Date.prototype.getDate],dd:[`0[1-9]|[12][0-9]|3[01]`,Date.prototype.setDate,`day`,function(){return E(Date.prototype.getDate.call(this),2)}],ddd:[``],dddd:[``],M:[`[1-9]|1[012]`,function(e){let t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t)},`month`,function(){return Date.prototype.getMonth.call(this)+1}],MM:[`0[1-9]|1[012]`,function(e){let t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t)},`month`,function(){return E(Date.prototype.getMonth.call(this)+1,2)}],MMM:[p.monthNames.slice(0,12).join(`|`),function(e){let t=p.monthNames.slice(0,12).findIndex(t=>e.toLowerCase()===t.toLowerCase());return t!==-1&&Date.prototype.setMonth.call(this,t)},`month`,function(){return p.monthNames.slice(0,12)[Date.prototype.getMonth.call(this)]}],MMMM:[p.monthNames.slice(12,24).join(`|`),function(e){let t=p.monthNames.slice(12,24).findIndex(t=>e.toLowerCase()===t.toLowerCase());return t!==-1&&Date.prototype.setMonth.call(this,t)},`month`,function(){return p.monthNames.slice(12,24)[Date.prototype.getMonth.call(this)]}],yy:[`[0-9]{2}`,function(e){let t=new Date().getFullYear().toString().slice(0,2);Date.prototype.setFullYear.call(this,`${t}${e}`)},`year`,function(){return E(Date.prototype.getFullYear.call(this),2)},2],yyyy:[`[0-9]{4}`,Date.prototype.setFullYear,`year`,function(){return E(Date.prototype.getFullYear.call(this),4)},4],h:[`[1-9]|1[0-2]`,Date.prototype.setHours,`hours`,Date.prototype.getHours],hh:[`0[1-9]|1[0-2]`,Date.prototype.setHours,`hours`,function(){return E(Date.prototype.getHours.call(this),2)}],hx:[function(e){return`[0-9]{${e}}`},Date.prototype.setHours,`hours`,function(e){return Date.prototype.getHours}],H:[`1?[0-9]|2[0-3]`,Date.prototype.setHours,`hours`,Date.prototype.getHours],HH:[`0[0-9]|1[0-9]|2[0-3]`,Date.prototype.setHours,`hours`,function(){return E(Date.prototype.getHours.call(this),2)}],Hx:[function(e){return`[0-9]{${e}}`},Date.prototype.setHours,`hours`,function(e){return function(){return E(Date.prototype.getHours.call(this),e)}}],m:[`[1-5]?[0-9]`,Date.prototype.setMinutes,`minutes`,Date.prototype.getMinutes],mm:[`0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]`,Date.prototype.setMinutes,`minutes`,function(){return E(Date.prototype.getMinutes.call(this),2)}],s:[`[1-5]?[0-9]`,Date.prototype.setSeconds,`seconds`,Date.prototype.getSeconds],ss:[`0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]`,Date.prototype.setSeconds,`seconds`,function(){return E(Date.prototype.getSeconds.call(this),2)}],l:[`[0-9]{3}`,Date.prototype.setMilliseconds,`milliseconds`,function(){return E(Date.prototype.getMilliseconds.call(this),3)},3],L:[`[0-9]{2}`,Date.prototype.setMilliseconds,`milliseconds`,function(){return E(Date.prototype.getMilliseconds.call(this),2)},2],t:[`[ap]`,_,`ampm`,v,1],tt:[`[ap]m`,_,`ampm`,v,2],T:[`[AP]`,_,`ampm`,v,1],TT:[`[AP]M`,_,`ampm`,v,2],Z:[`.*`,void 0,`Z`,y],o:[``],S:[``]},h={D:`d`,DD:`dd`,DDD:`ddd`,DDDD:`dddd`,mmm:`MMM`,mmmm:`MMMM`,YY:`yy`,YYYY:`yyyy`,sss:`L`},g={isoDate:`yyyy-MM-dd`,isoTime:`HH:mm:ss`,isoDateTime:`yyyy-MM-dd\\THH:mm:ss`,isoUtcDateTime:`UTC:yyyy-MM-dd\\THH:mm:ss\\Z`};function _(e){let t=this.getHours();e.toLowerCase().includes(`p`)?this.setHours(t+12):e.toLowerCase().includes(`a`)&&t>=12&&this.setHours(t-12)}function v(){let e=this.getHours();return e||=12,e>=12?`PM`:`AM`}function y(){let{1:e}=this.toString().match(/\((.+)\)/);return e.includes(` `)&&(e=e.replace(`-`,` `).toUpperCase(),e=e.split(` `).map(([e])=>e).join(``)),e}function b(e){let t=h[e]||e,n=/\d+$/.exec(t);if(n&&n[0]!==void 0){let e=m[t[0]+`x`].slice(``);return e[0]=e[0](n[0]),e[3]=e[3](n[0]),e}else if(m[t])return m[t]}function x(e){if(!e.tokenizer){let t=[],n=[],r=Object.keys(m).concat(Object.keys(h));for(let e of r)if(/\.*x$/.test(e)){let t=e[0]+`\\d+`;n.indexOf(t)===-1&&n.push(t)}else t.indexOf(e[0])===-1&&t.push(e[0]);e.tokenizer=`(`+(n.length>0?n.join(`|`)+`|`:``)+t.join(`+|`)+`+)+?|.`,e.tokenizer=new RegExp(e.tokenizer,`g`)}return e.tokenizer}function S(e,t,n){if(e.year!==e.rawyear){let r=f.toString(),i=e.rawyear.replace(/[^0-9]/g,``),a=r.slice(0,i.length),o=r.slice(i.length);if(i.length===2&&i===a){let i=new Date(f,e.month-1,e.day);e.day==i.getDate()&&(!n.max||n.max.date.getTime()>=i.getTime())&&(e.date.setFullYear(f),e.year=r,t.insert=[{pos:t.pos+1,c:o[0]},{pos:t.pos+2,c:o[1]}])}}return t}function C(e,t,n){let r=this;if(!d)return!0;if(e.rawday===void 0||!isFinite(e.rawday)&&new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day||e.day==`29`&&(!isFinite(e.rawyear)||e.rawyear===void 0||e.rawyear===``)||new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day)return t;if(e.day==`29`){let e=te.call(r,t.pos,n,r.maskset);if(e.targetMatch&&[`yyyy`,`YYYY`].includes(e.targetMatch[0])&&t.pos-e.targetMatchIndex===2)return t.remove=t.pos+1,t}else if(e.date.getMonth()==2&&e.day==`30`&&t.c!==void 0)return e.day=`03`,e.date.setDate(3),e.date.setMonth(1),t.insert=[{pos:t.pos,c:`0`},{pos:t.pos+1,c:t.c}],t.caret=o.seekNext.call(this,t.pos+1),t;return!1}function w(e,t,n,r,i){if(!t)return t;if(t&&n.min&&!isNaN(n.min.date.getTime())){let i;for(e.reset(),x(n).lastIndex=0;i=x(n).exec(n.inputFormat);){var a;if((a=b(i[0]))&&a[3]){let t=a[1],o=e[a[2]],s=n.min[a[2]],c=n.max?n.max[a[2]]:s+1,l=[],u=!1;for(let t=0;t<s.length;t++)r.validPositions[t+i.index]===void 0&&!u?(t+i.index==0&&o[t]<s[t]?(l[t]=o[t],u=!0):l[t]=s[t],a[2]===`year`&&o.length-1==t&&s!=c&&(l=(parseInt(l.join(``))+1).toString().split(``)),a[2]===`ampm`&&s!=c&&n.min.date.getTime()>e.date.getTime()&&(l[t]=c[t])):(l[t]=o[t],u||=o[t]>s[t]);t.call(e._date,l.join(``))}}t=n.min.date.getTime()<=e.date.getTime(),e.reInit()}return t&&n.max&&(isNaN(n.max.date.getTime())||(t=n.max.date.getTime()>=e.date.getTime())),t}function T(e,t,n){let i=``,a,o,s=0,c=!1,l={};for(x(n).lastIndex=0;a=x(n).exec(e);)if(a[0]===n.escapeChar)c=!0;else{if(t===void 0)if(!c&&(o=b(a[0])))i+=`(`+o[0]+`)`,n.placeholder&&n.placeholder!==``?(l[s]=n.placeholder[a.index%n.placeholder.length],l[`${a.index}'${n.placeholder[a.index%n.placeholder.length]}`]=a[0].charAt(0)):l[s]=a[0].charAt(0);else switch(a[0]){case`[`:i+=`(`;break;case`]`:i+=`)?`;break;default:i+=(0,r.escapeRegex)(a[0]),l[s]=a[0].charAt(0)}else if(!c&&(o=b(a[0])))if(o[3]){let e=o[3];i+=e.call(t.date)}else o[2]&&t[`raw`+o[2]]!==void 0?i+=t[`raw`+o[2]]:i+=a[0];else i+=a[0];s++,c=!1}return t===void 0&&(n.placeholder=l),i}function E(e,t,n){for(e=String(e),t||=2;e.length<t;)e=n?e+`0`:`0`+e;return e}function ee(e,t,n){let r=this;if(typeof e==`string`)return new u(e,t,n,r);if(e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`date`))return e}function D(e,t){return T(t.inputFormat,{date:e},t)}function te(e,t,n){let r=this,i=0,a,o,c=0;for(x(t).lastIndex=0;o=x(t).exec(t.inputFormat);){let l=/\d+$/.exec(o[0]);if(l)c=parseInt(l[0]);else{let e=o[0][0],n=i;for(;r&&(t.placeholder[`${o.index}'${s.getTest.call(r,n).match.placeholder}`]||s.getTest.call(r,n).match.placeholder)===e;)n++;c=n-i,c===0&&(c=o[0].length)}if(i+=c,i>=e+1){let r=``;if(n&&n.tests[e]){let a=Object.keys(t.placeholder).filter(t=>{for(let r=o.index-1;r<i;r++)if(t===`${r}'${n.tests[e][0].match.placeholder}`)return!0;return!1});r=a.length>0?t.placeholder[a[0]]:n.tests[e][0].match.placeholder}if(o[0].indexOf(r)!==-1){a=o,o=x(t).exec(t.inputFormat);break}}}return{targetMatchIndex:i-c,nextMatch:o,targetMatch:a}}i.default.extendAliases({datetime:{mask:function(e){if(e.numericInput=!1,m.S=p.ordinalSuffix.join(`|`),e.inputFormat=g[e.inputFormat]||e.inputFormat,e.repeat&&(e.repeat=parseInt(e.repeat.toString()),e.repeat>0)){let t=``;for(let n=0;n<e.repeat;n++)t+=e.inputFormat;e.inputFormat=t,e.repeat=0}return e.displayFormat=g[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=g[e.outputFormat]||e.outputFormat||e.inputFormat,e.regex=T(e.inputFormat,void 0,e),e.min=ee(e.min,e.inputFormat,e),e.max=ee(e.max,e.inputFormat,e),null},placeholder:``,inputFormat:`isoDateTime`,displayFormat:null,outputFormat:null,min:null,max:null,skipOptionalPartCharacter:``,preValidation:function(e,t,n,r,i,a,o,s){let c=this;if(s)return!0;if(isNaN(n)&&e[t]!==n){let r=te.call(c,t,i,a);if(r.nextMatch&&r.nextMatch[0]===n&&r.targetMatch[0].length>1){let n=b(r.targetMatch[0])[0];if(new RegExp(n).test(`0`+e[t-1]))return e[t]=e[t-1],e[t-1]=`0`,{fuzzy:!0,buffer:e,refreshFromBuffer:{start:t-1,end:t+1},pos:t+1}}}return!0},postValidation:function(e,t,n,r,i,a,o,c){let l=this;if(o)return!0;let u,d;if(r===!1&&(u=te.call(l,t+1,i,a),u.targetMatch&&u.targetMatchIndex===t&&u.targetMatch[0].length>1&&b(u.targetMatch[0])!==void 0?d=b(u.targetMatch[0])[0]:(u=te.call(l,t+2,i,a),u.targetMatch&&u.targetMatchIndex===t+1&&u.targetMatch[0].length>1&&b(u.targetMatch[0])!==void 0&&(d=b(u.targetMatch[0]))),d!==void 0&&(t=u.targetMatchIndex,a.validPositions[t+1]!==void 0&&new RegExp(d).test(n+`0`)?(e[t]=n,e[t+1]=`0`,r={pos:t+2,caret:t+1}):new RegExp(d).test(`0`+n)&&(e[t]=`0`,e[t+1]=n,r={pos:t+2})),r===!1))return r;if(r.fuzzy&&(e=r.buffer,t=r.pos),u=te.call(l,t,i,a),u.targetMatch&&u.targetMatch[0]&&b(u.targetMatch[0])!==void 0){let n=b(u.targetMatch[0]);d=n[0];let r=e.slice(u.targetMatchIndex,u.targetMatchIndex+u.targetMatch[0].length);if(new RegExp(d).test(r.join(``))===!1&&u.targetMatch[0].length===2&&a.validPositions[u.targetMatchIndex]&&a.validPositions[u.targetMatchIndex+1]&&(a.validPositions[u.targetMatchIndex+1].input=`0`),n[2]==`year`){let n=s.getMaskTemplate.call(l,!1,1,void 0,!0);for(let r=t+1;r<e.length;r++)e[r]=n[r],a.validPositions.splice(t+1,1)}}let f=r,p=ee.call(l,e.join(``),i.inputFormat,i);return f&&!isNaN(p.date.getTime())&&(i.prefillYear&&(f=S(p,f,i)),f=C.call(l,p,f,i),f=w(p,f,i,a,c)),t!==void 0&&f&&r.pos!==t?{buffer:T(i.inputFormat,p,i).split(``),refreshFromBuffer:{start:t,end:r.pos},pos:r.caret===void 0?r.pos:r.caret}:f},onKeyDown:function(e,t,n,r){let i=this;e.ctrlKey&&e.key===a.keys.ArrowRight&&(i.inputmask._valueSet(D(new Date,r)),l(i).trigger(`setvalue`))},onUnMask:function(e,t,n){let r=this;return t&&T(n.outputFormat,ee.call(r,e,n.inputFormat,n),n)},casing:`follow`,onBeforeMask:function(e,t){return Object.prototype.toString.call(e)===`[object Date]`&&(e=D(e,t)),e},insertMode:!1,insertModeVisual:!1,shiftPositions:!1,keepStatic:!1,inputmode:`numeric`,prefillYear:!0}})}),(function(e,t,n){var r=i(n(7));function i(e){return e&&e.__esModule?e:{default:e}}r.default.dependencyLib.extend(!0,r.default.prototype.i18n,{dayNames:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`],monthNames:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`,`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],ordinalSuffix:[`st`,`nd`,`rd`,`th`]})}),(function(e,t,n){var r=n(25),i=s(n(7)),a=n(19),o=n(20);function s(e){return e&&e.__esModule?e:{default:e}}let c=i.default.dependencyLib;function l(e,t){let n=``;for(let r=0;r<e.length;r++)i.default.prototype.definitions[e.charAt(r)]||t.definitions[e.charAt(r)]||t.optionalmarker[0]===e.charAt(r)||t.optionalmarker[1]===e.charAt(r)||t.quantifiermarker[0]===e.charAt(r)||t.quantifiermarker[1]===e.charAt(r)||t.groupmarker[0]===e.charAt(r)||t.groupmarker[1]===e.charAt(r)||t.alternatormarker===e.charAt(r)?n+=`\\`+e.charAt(r):n+=e.charAt(r);return n}function u(e,t,n,r){if(e.length>0&&t>0&&(!n.digitsOptional||r)){var i=e.indexOf(n.radixPoint),a=!1;n.negationSymbol.back===e[e.length-1]&&(a=!0,e.length--),i===-1&&(e.push(n.radixPoint),i=e.length-1);for(let n=1;n<=t;n++)isFinite(e[i+n])||(e[i+n]=`0`)}return a&&e.push(n.negationSymbol.back),e}function d(e,t){let n=0;e===`+`&&(n=o.seekNext.call(this,t.validPositions.length-1));for(let r in t.tests)if(r=parseInt(r),r>=n){for(let n=0,i=t.tests[r].length;n<i;n++)if((t.validPositions[r]===void 0||e===`-`)&&t.tests[r][n].match.def===e)return r+ +(t.validPositions[r]!==void 0&&e!==`-`)}return n}function f(e,t){let n=-1;for(let r=0,i=t.validPositions.length;r<i;r++){let i=t.validPositions[r];if(i&&i.match.def===e){n=r;break}}return n}function p(e){e.parseMinMaxOptions===void 0&&(e.min!==null&&(e.min=e.min.toString().replace(new RegExp((0,r.escapeRegex)(e.groupSeparator),`g`),``),e.radixPoint===`,`&&(e.min=e.min.replace(e.radixPoint,`.`)),e.min=isFinite(e.min)?parseFloat(e.min):NaN,isNaN(e.min)&&(e.min=Number.MIN_VALUE)),e.max!==null&&(e.max=e.max.toString().replace(new RegExp((0,r.escapeRegex)(e.groupSeparator),`g`),``),e.radixPoint===`,`&&(e.max=e.max.replace(e.radixPoint,`.`)),e.max=isFinite(e.max)?parseFloat(e.max):NaN,isNaN(e.max)&&(e.max=Number.MAX_VALUE)),e.parseMinMaxOptions=`done`)}function m(e){e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&e.digits!==`0`&&(e.radixPoint===`.`?e.groupSeparator=`,`:e.radixPoint===`,`?e.groupSeparator=`.`:e.groupSeparator=``),e.groupSeparator===` `&&(e.skipOptionalPartCharacter=void 0),e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),e.positionCaretOnClick===`radixFocus`&&e.placeholder===``&&(e.positionCaretOnClick=`lvp`);let t=`0`,n=e.radixPoint;e.numericInput===!0&&e.__financeInput===void 0?(t=`1`,e.positionCaretOnClick=e.positionCaretOnClick===`radixFocus`?`lvp`:e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=e.digits.indexOf(`,`)===-1?2:e.digits.split(`,`)[0]),e._radixDance=!1,n=e.radixPoint===`,`?`?`:`!`,e.radixPoint!==``&&e.definitions[n]===void 0&&(e.definitions[n]={},e.definitions[n].validator=`[`+e.radixPoint+`]`,e.definitions[n].placeholder=e.radixPoint,e.definitions[n].static=!0,e.definitions[n].generated=!0)):(e.__financeInput=!1,e.numericInput=!0);let r=`[+]`,i;if(r+=l(e.prefix,e),e.groupSeparator===``?r+=`9{+}`:(e.definitions[e.groupSeparator]===void 0&&(e.definitions[e.groupSeparator]={},e.definitions[e.groupSeparator].validator=`[`+e.groupSeparator+`]`,e.definitions[e.groupSeparator].placeholder=e.groupSeparator,e.definitions[e.groupSeparator].static=!0,e.definitions[e.groupSeparator].generated=!0),r+=e._mask(e)),e.digits!==void 0&&e.digits!==0){let a=e.digits.toString().split(`,`);isFinite(a[0])&&a[1]&&isFinite(a[1])?r+=n+t+`{`+e.digits+`}`:(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional||e.jitMasking?(i=r+n+t+`{0,`+e.digits+`}`,e.keepStatic=!0):r+=n+t+`{`+e.digits+`}`)}else e.inputmode=`numeric`;return r+=l(e.suffix,e),r+=`[-]`,i&&(r=[i+l(e.suffix,e)+`[-]`,r]),e.greedy=!1,p(e),e.radixPoint!==``&&e.substituteRadixPoint&&(e.substitutes[e.radixPoint==`.`?`,`:`.`]=e.radixPoint),r}function h(e,t,n,r,i){return i._radixDance&&i.numericInput&&t!==i.negationSymbol.back&&e<=n&&(n>0||t==i.radixPoint)&&(r.validPositions[e-1]===void 0||r.validPositions[e-1].input!==i.negationSymbol.back)&&--e,e}function g(e,t,n,r,i){let a=t.buffer?t.buffer.indexOf(i.radixPoint):-1,o=(a!==-1||r&&i.jitMasking)&&new RegExp(i.definitions[9].validator).test(e);return!r&&i._radixDance&&a!==-1&&o&&t.validPositions[a]==null?{insert:{pos:a===n?a+1:a,c:i.radixPoint},pos:n}:o}function _(e,t){let n=RegExp(`(^`+(t.negationSymbol.front===``?``:(0,r.escapeRegex)(t.negationSymbol.front)+`?`)+(0,r.escapeRegex)(t.prefix)+`)(.*)(`+(0,r.escapeRegex)(t.suffix)+(t.negationSymbol.back==``?``:(0,r.escapeRegex)(t.negationSymbol.back)+`?`)+`$)`).exec(e.slice().reverse().join(``)),i=n?n[2]:``,a=!1;return i&&(i=i.split(t.radixPoint.charAt(0))[0],a=RegExp(`^[0`+t.groupSeparator+`]*`).exec(i)),a&&(a[0].length>1||a[0].length>0&&a[0].length<i.length)?a:!1}i.default.extendAliases({numeric:{mask:m,_mask:function(e){return`(`+e.groupSeparator+`999){+|1}`},digits:`*`,digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:`.`,positionCaretOnClick:`radixFocus`,_radixDance:!0,groupSeparator:``,allowMinus:!0,negationSymbol:{front:`-`,back:``},prefix:``,suffix:``,min:null,max:null,SetMaxOnOverflow:!1,step:1,inputType:`text`,unmaskAsNumber:!1,roundingFN:Math.round,inputmode:`decimal`,shortcuts:{k:`1000`,m:`1000000`},placeholder:`0`,greedy:!1,rightAlign:!0,insertMode:!0,autoUnmask:!1,skipOptionalPartCharacter:``,usePrototypeDefinitions:!1,stripLeadingZeroes:!0,substituteRadixPoint:!0,definitions:{0:{validator:g},1:{validator:g,definitionSymbol:`9`},9:{validator:`[0-9０-９٠-٩۰-۹]`,definitionSymbol:`*`},"+":{validator:function(e,t,n,r,i){return i.allowMinus&&(e===`-`||e===i.negationSymbol.front)}},"-":{validator:function(e,t,n,r,i){return i.allowMinus&&e===i.negationSymbol.back}}},preValidation:function(e,t,n,r,i,a,o,s){let c=this;if(i.__financeInput!==!1&&n===i.radixPoint)return!1;let l=e.indexOf(i.radixPoint),u=t;if(t=h(t,n,l,a,i),n===`-`||n===i.negationSymbol.front){if(i.allowMinus!==!0)return!1;let e=!1,t=f(`+`,a),n=f(`-`,a);return t!==-1&&(e=[t],n!==-1&&e.push(n)),e===!1?{insert:[{pos:d.call(c,`+`,a),c:i.negationSymbol.front,fromIsValid:!0},{pos:d.call(c,`-`,a),c:i.negationSymbol.back,fromIsValid:void 0}],caret:u+i.negationSymbol.back.length}:{remove:e,caret:u-i.negationSymbol.back.length}}if(n===i.groupSeparator)return{caret:u};if(s)return!0;if(l!==-1&&i._radixDance===!0&&r===!1&&n===i.radixPoint&&i.digits!==void 0&&(isNaN(i.digits)||parseInt(i.digits)>0)&&l!==t){let e=d.call(c,i.radixPoint,a);return a.validPositions[e]&&(a.validPositions[e].generatedInput=a.validPositions[e].generated||!1),{caret:i._radixDance&&t===l-1?l+1:l}}if(i.__financeInput===!1)if(r){if(i.digitsOptional)return{rewritePosition:o.end};if(!i.digitsOptional){if(o.begin>l&&o.end<=l)return n===i.radixPoint?{insert:{pos:l+1,c:`0`,fromIsValid:!0},rewritePosition:l}:{rewritePosition:l+1};if(o.begin<l)return{rewritePosition:o.begin-1}}}else{if(!i.showMaskOnHover&&!i.showMaskOnFocus&&!i.digitsOptional&&i.digits>0&&this.__valueGet.call(this.el)===``)return{rewritePosition:l};if(t>=e.length-i.prefix.length&&i.radixPoint!==``){let e=new RegExp(i.definitions[9].validator);if(!a.validPositions.some(t=>t&&!t.generatedInput&&e.test(t.input)))return{rewritePosition:l===-1?0:l}}}return{rewritePosition:t}},postValidation:function(e,t,n,r,i,a,o,s,l){if(r===!1)return r;if(o)return!0;if(i.min!==null||i.max!==null){let t=i.onUnMask(e.slice().reverse().join(``),void 0,c.extend({},i,{unmaskAsNumber:!0}));if(i.min!==null&&t<i.min&&l!==!0&&(t.toString().length>i.min.toString().length||e[0]===i.radixPoint||t<0))return!1;if(i.max!==null&&i.max>=0&&t>i.max)return i.SetMaxOnOverflow?{refreshFromBuffer:!0,buffer:u(i.max.toString().replace(`.`,i.radixPoint).split(``),i.digits,i).reverse()}:!1}return r},onUnMask:function(e,t,n){if(t===``&&n.nullable===!0)return t;let i=e.replace(n.prefix,``);return i=i.replace(n.suffix,``),i=i.replace(new RegExp((0,r.escapeRegex)(n.groupSeparator),`g`),``),n.placeholder.charAt(0)!==``&&(i=i.replace(new RegExp(n.placeholder.charAt(0),`g`),`0`)),n.unmaskAsNumber?(n.radixPoint!==``&&i.indexOf(n.radixPoint)!==-1&&(i=i.replace(r.escapeRegex.call(this,n.radixPoint),`.`)),i=i.replace(RegExp(`^`+(0,r.escapeRegex)(n.negationSymbol.front)),`-`),i=i.replace(RegExp((0,r.escapeRegex)(n.negationSymbol.back)+`$`),``),Number(i)):i},isComplete:function(e,t){let n=(t.numericInput?e.slice().reverse():e).join(``);return n=n.replace(RegExp(`^`+(0,r.escapeRegex)(t.negationSymbol.front)),`-`),n=n.replace(RegExp((0,r.escapeRegex)(t.negationSymbol.back)+`$`),``),n=n.replace(t.prefix,``),n=n.replace(t.suffix,``),n=n.replace(RegExp((0,r.escapeRegex)(t.groupSeparator)+`([0-9]{3})`,`g`),`$1`),t.radixPoint===`,`&&(n=n.replace((0,r.escapeRegex)(t.radixPoint),`.`)),isFinite(n)},onBeforeMask:function(e,t){e??=``;let n=t.radixPoint||`,`;isFinite(t.digits)&&(t.digits=parseInt(t.digits)),(typeof e==`number`||t.inputType===`number`)&&n!==``&&(e=e.toString().replace(`.`,n));let i=e.charAt(0)===`-`||e.charAt(0)===t.negationSymbol.front,a=e.split(n),o=a[0].replace(/[^\-0-9]/g,``),s=a.length>1?a[1].replace(/[^0-9]/g,``):``,c=a.length>1;e=o+(s===``?s:n+s);let l=0;if(n!==``&&(l=t.digitsOptional?t.digits<s.length?t.digits:s.length:t.digits,s!==``||!t.digitsOptional)){let i=10**(l||1);e=e.replace((0,r.escapeRegex)(n),`.`),isNaN(parseFloat(e))||(e=(t.roundingFN(parseFloat(e)*i)/i).toFixed(l)),e=e.toString().replace(`.`,n)}if(t.digits===0&&e.indexOf(n)!==-1&&(e=e.substring(0,e.indexOf(n))),e!==``&&(t.min!==null||t.max!==null)){let r=e.toString().replace(n,`.`);t.min!==null&&r<t.min?e=t.min.toString().replace(`.`,n):t.max!==null&&r>t.max&&(e=t.max.toString().replace(`.`,n))}return i&&e.charAt(0)!==`-`&&(e=`-`+e),u(e.toString().split(``),l,t,c).join(``)},onBeforeWrite:function(e,t,n,i){function a(e,t){if(i.__financeInput!==!1||t){var n=e.indexOf(i.radixPoint);n!==-1&&e.splice(n,1)}if(i.groupSeparator!==``)for(;(n=e.indexOf(i.groupSeparator))!==-1;)e.splice(n,1);return e}let o,s;if(i.stripLeadingZeroes&&(s=_(t,i))){let e=t.join(``).lastIndexOf(s[0].split(``).reverse().join(``))-(s[0]==s.input?0:1),n=+(s[0]==s.input);for(let r=s[0].length-n;r>0;r--)this.maskset.validPositions.splice(e+r,1),delete t[e+r]}if(e)switch(e.type){case`blur`:case`checkval`:if(i.min!==null||i.max!==null){let e=i.onUnMask(t.slice().reverse().join(``),void 0,c.extend({},i,{unmaskAsNumber:!0}));if(i.min!==null&&e<i.min&&t.join()!==``)return{refreshFromBuffer:!0,buffer:u(i.min.toString().replace(`.`,i.radixPoint).split(``),i.digits,i).reverse()};if(i.max!==null&&e>i.max)return{refreshFromBuffer:!0,buffer:u(i.max.toString().replace(`.`,i.radixPoint).split(``),i.digits,i).reverse()}}if(t[t.length-1]===i.negationSymbol.front){let e=RegExp(`(^`+(i.negationSymbol.front==``?``:(0,r.escapeRegex)(i.negationSymbol.front)+`?`)+(0,r.escapeRegex)(i.prefix)+`)(.*)(`+(0,r.escapeRegex)(i.suffix)+(i.negationSymbol.back==``?``:(0,r.escapeRegex)(i.negationSymbol.back)+`?`)+`$)`).exec(a(t.slice(),!0).reverse().join(``));(e?e[2]:``)==0&&(o={refreshFromBuffer:!0,buffer:[0]})}else i.radixPoint!==``&&t.indexOf(i.radixPoint)===i.suffix.length&&(o&&o.buffer?o.buffer.splice(0,1+i.suffix.length):(t.splice(0,1+i.suffix.length),o={refreshFromBuffer:!0,buffer:a(t)}));if(i.enforceDigitsOnBlur){o||={};let e=(o&&o.buffer||t).slice().reverse();o.refreshFromBuffer=!0,o.buffer=u(e,i.digits,i,!0).reverse()}}return o},onKeyDown:function(e,t,n,r){let i=c(this),o;if(e.location!=3){let t,n=e.key;if((t=r.shortcuts&&r.shortcuts[n])&&t.length>1)return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())*parseInt(t)),i.trigger(`setvalue`),!1}if(e.ctrlKey)switch(e.key){case a.keys.ArrowUp:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())+parseInt(r.step)),i.trigger(`setvalue`),!1;case a.keys.ArrowDown:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())-parseInt(r.step)),i.trigger(`setvalue`),!1}if(!e.shiftKey&&(e.key===a.keys.Delete||e.key===a.keys.Backspace||e.key===a.keys.BACKSPACE_SAFARI)&&n.begin!==t.length){if(t[e.key===a.keys.Delete?n.begin-1:n.end]===r.negationSymbol.front)return o=t.slice().reverse(),r.negationSymbol.front!==``&&o.shift(),r.negationSymbol.back!==``&&o.pop(),i.trigger(`setvalue`,[o.join(``),n.begin]),!1;if(r._radixDance===!0){let s=t.indexOf(r.radixPoint);if(!r.digitsOptional){if(s!==-1&&(n.begin<s||n.end<s||e.key===a.keys.Delete&&(n.begin===s||n.begin-1===s))){let l;return n.begin===n.end&&(e.key===a.keys.Backspace||e.key===a.keys.BACKSPACE_SAFARI?n.begin++:e.key===a.keys.Delete&&n.begin-1===s&&(l=c.extend({},n),n.begin--,n.end--)),o=t.slice().reverse(),o.splice(o.length-n.begin,n.begin-n.end||1),(e.key===a.keys.Backspace||e.key===a.keys.BACKSPACE_SAFARI)&&o.splice(o.length-n.end+1,0,`0`),o=u(o,r.digits,r).join(``),l&&(n=l),i.trigger(`setvalue`,[o,n.begin>=o.length?s+1:n.begin]),!1}}else if(s===0)return o=t.slice().reverse(),o.pop(),i.trigger(`setvalue`,[o.join(``),n.begin>=o.length?o.length:n.begin]),!1}}}},currency:{prefix:``,groupSeparator:`,`,alias:`numeric`,digits:2,digitsOptional:!1},decimal:{alias:`numeric`},integer:{alias:`numeric`,inputmode:`numeric`,digits:0},percentage:{alias:`numeric`,min:0,max:100,suffix:` %`,digits:0,allowMinus:!1},indianns:{alias:`numeric`,_mask:function(e){return`(`+e.groupSeparator+`99){*|1}(`+e.groupSeparator+`999){1|1}`},groupSeparator:`,`,radixPoint:`.`,placeholder:`0`,digits:2,digitsOptional:!1}})}),(function(e,t,n){var r=a(n(11)),i=a(n(7));function a(e){return e&&e.__esModule?e:{default:e}}let o=r.default.document;if(o&&o.head&&o.head.attachShadow&&r.default.customElements&&r.default.customElements.get(`input-mask`)===void 0){class e extends HTMLElement{constructor(){super();let e=this.getAttributeNames(),t=this.attachShadow({mode:`closed`});this.input=o.createElement(`input`),this.input.type=`text`,t.appendChild(this.input);for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&this.input.setAttribute(e[t],this.getAttribute(e[t]));let n=new i.default;n.dataAttribute=``,n.mask(this.input)}attributeChangedCallback(e,t,n){this.input.setAttribute(e,n)}get value(){return this.input.value}set value(e){this.input.value=e}}r.default.customElements.define(`input-mask`,e)}})],t={};function n(r){var i=t[r];if(i!==void 0)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}var r={};return(function(){var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n(1),n(2),n(3),n(4),n(5),n(6),n(27),n(29),n(30);var t=i(n(7));function i(e){return e&&e.__esModule?e:{default:e}}e.default=t.default})(),r})()})}))(),1),Op=Dp.default.default||Dp.default;function kp(e,t){let n={minimumFractionDigits:2,maximumFractionDigits:2},r=[[e,{style:`currency`,currency:t}],[e,n],[void 0,n]];for(let[e,t]of r){let n;try{n=new Intl.NumberFormat(e,t)}catch{continue}let r=n.formatToParts(12345.6);return{currency:r.find(({type:e})=>e===`currency`)?.value??``,decimal:r.find(({type:e})=>e===`decimal`)?.value??`.`,group:r.find(({type:e})=>e===`group`)?.value??`,`,decimals:n.resolvedOptions().maximumFractionDigits??2}}return{currency:``,decimal:`.`,group:`,`,decimals:2}}var Ap=new WeakMap,jp=new WeakSet,Mp=new WeakMap,Np=class extends L{static get styles(){return[...super.styles,o`
        .currency {
          white-space: nowrap;
        }

        .input-group__input {
          display: flex;
          align-items: center;
        }

        .clear {
          flex: none;
          margin-inline-end: var(--c-spacing-xs);
        }

        ::slotted(.money-placeholder) {
          color: var(--c-text-quiet);
        }
      `]}constructor(){super(),x(this,jp),this.currency=`USD`,this.locale=`en-US`,this.showCurrency=!0,this.clearable=!0,this.type=`text`,T(this,Ap,void 0),T(this,Mp,()=>{this.modelValue=``,this.value=``,w(jp,this,Pp).call(this)?.inputmask?.setValue(``),w(jp,this,Pp).call(this)?.focus()}),this.inputMode=`decimal`}connectedCallback(){super.connectedCallback(),this.hasUpdated&&w(jp,this,Fp).call(this)}willUpdate(e){super.willUpdate(e),(!this.hasUpdated||e.has(`locale`)||e.has(`currency`))&&C(Ap,this,kp(this.locale.replaceAll(`_`,`-`),this.currency))}updated(e){super.updated(e),(e.has(`currency`)||e.has(`locale`)||e.has(`decimals`)||e.has(`decimalSeparator`)||e.has(`groupSeparator`)||e.has(`placeholder`))&&w(jp,this,Fp).call(this),w(jp,this,Pp).call(this)?.classList.toggle(`money-placeholder`,!w(jp,this,Ip).call(this))}disconnectedCallback(){w(jp,this,Pp).call(this)?.inputmask?.remove(),super.disconnectedCallback()}_inputGroupPrefixTemplate(){return this.showCurrency?m`<div class="input-group__prefix">
      <span class="currency"
        >${`(${this.currency}) ${S(Ap,this).currency}`}</span
      >
    </div>`:i}_inputGroupInputTemplate(){return m`<div class="input-group__input">
      <slot name="input"></slot>
      <craft-button
        class="clear"
        type="button"
        variant="plain"
        size="small"
        icon
        aria-label=${n(`Clear`)}
        ?hidden=${!this.clearable||this.disabled||!w(jp,this,Ip).call(this)}
        @mousedown=${e=>e.preventDefault()}
        @click=${S(Mp,this)}
      >
        <craft-icon name="xmark-large" style="font-size: 0.8em"></craft-icon>
      </craft-button>
    </div>`}};function Pp(){return this._inputNode}function Fp(){let e=w(jp,this,Pp).call(this);if(!e)return;let t=String(this.modelValue??``),n=S(Ap,this);e.inputmask?.remove(),e.value=t,new Op({alias:`currency`,autoGroup:!1,clearMaskOnLostFocus:!0,digits:this.decimals??n.decimals,digitsOptional:!1,groupSeparator:this.groupSeparator??n.group,placeholder:this.placeholder||`0`,prefix:``,radixPoint:this.decimalSeparator??n.decimal}).mask(e)}function Ip(){return this.modelValue!==``&&this.modelValue!=null}r([c()],Np.prototype,`currency`,void 0),r([c()],Np.prototype,`locale`,void 0),r([c({type:Number})],Np.prototype,`decimals`,void 0),r([c({attribute:`decimal-separator`})],Np.prototype,`decimalSeparator`,void 0),r([c({attribute:`group-separator`})],Np.prototype,`groupSeparator`,void 0),r([c({converter:Hf,attribute:`show-currency`})],Np.prototype,`showCurrency`,void 0),r([c({converter:Hf})],Np.prototype,`clearable`,void 0),customElements.get(`craft-input-money`)||customElements.define(`craft-input-money`,Np);var Lp=new WeakSet,Rp=class extends L{static get styles(){return[...super.styles,o`
        .input-group__container {
          position: relative;
        }

        .input-group__suffix {
          position: absolute;
          inset-inline-end: var(--c-input-spacing-inline);
          inset-block-start: 50%;
          transform: translateY(calc(-50%));
          border: none;
        }

        ::slotted(.form-control) {
          ${Zn}
          --_input-end-end-radius: var(
            --c-input-radius,
            var(--c-radius-sm)
          ) !important;
          --_input-start-end-radius: var(
            --c-input-radius,
            var(--c-radius-sm)
          ) !important;
        }
      `]}constructor(){super(),x(this,Lp),this.passwordRules=``,this._visible=!1,this.type=`password`,this.reveal=()=>{this._visible=!this._visible,this.type=this._visible?`text`:`password`},this.renderSuffix=()=>m`<craft-button
      type="button"
      icon
      size="small"
      variant="plain"
      @click="${this.reveal}"
    >
      <span class="icon"
        >${this._visible?m`<craft-icon
              name="eye-slash"
              label="${n(`Hide`)}"
            ></craft-icon>`:m`<craft-icon name="eye" label="${n(`Show`)}"></craft-icon>`}
      </span>
    </craft-button>`,this.type=`password`}connectedCallback(){super.connectedCallback(),w(Lp,this,zp).call(this)}updated(e){super.updated(e),e.has(`passwordRules`)&&w(Lp,this,zp).call(this)}get slots(){return{...super.slots,suffix:()=>({template:this.renderSuffix(),renderAsDirectHostChild:!0})}}};function zp(){if(this.passwordRules){this._inputNode?.setAttribute(`passwordrules`,this.passwordRules);return}this._inputNode?.removeAttribute(`passwordrules`)}r([c({attribute:`passwordrules`})],Rp.prototype,`passwordRules`,void 0),r([p()],Rp.prototype,`_visible`,void 0),customElements.get(`craft-input-password`)||customElements.define(`craft-input-password`,Rp);function Bp(e,t){let n=t.left>e.x?t.left:t.right<e.x?t.right:void 0;if(!(n===void 0||t.height<=0))return[e,{x:n,y:t.top},{x:n,y:t.bottom}]}function Vp(e,t,n){return(e.x-n.x)*(t.y-n.y)-(t.x-n.x)*(e.y-n.y)}function Hp([e,t,n],r){let i=Vp(r,e,t),a=Vp(r,t,n),o=Vp(r,n,e);return!((i<0||a<0||o<0)&&(i>0||a>0||o>0))}var Up=new WeakMap,Wp=new WeakMap,Gp=new WeakMap,Kp=new WeakMap,qp=new WeakMap,Jp=new WeakMap,Yp=new WeakSet,Xp=new WeakMap,Zp=class{constructor(e){x(this,Yp),T(this,Up,new Map),T(this,Wp,!1),T(this,Gp,void 0),T(this,Kp,void 0),T(this,qp,void 0),T(this,Jp,void 0),T(this,Xp,e=>{C(Kp,this,{x:e.clientX,y:e.clientY}),S(qp,this)&&w(Yp,this,rm).call(this)}),this.options=e}get warm(){return S(Wp,this)}requestOpen(e,{immediate:t=!1}={}){let n=w(Yp,this,Qp).call(this,e);if(w(Yp,this,im).call(this),clearTimeout(n.closeTimer),n.closeTimer=void 0,n.exit=void 0,S(qp,this)?.element.contains(e.element)&&C(qp,this,void 0),!t&&w(Yp,this,tm).call(this,e)){C(qp,this,e);return}if(w(Yp,this,$p).call(this,e),!(n.open||n.openTimer!==void 0)){if(t||S(Wp,this)){w(Yp,this,am).call(this,e,n);return}n.openTimer=setTimeout(()=>{n.openTimer=void 0,w(Yp,this,am).call(this,e,n)},this.options.warmUpDelay)}}requestClose(e){let t=w(Yp,this,Qp).call(this,e);clearTimeout(t.openTimer),t.openTimer=void 0,S(qp,this)===e&&C(qp,this,void 0),!(!t.open||t.closeTimer!==void 0)&&(t.exit=S(Kp,this)&&{...S(Kp,this),at:Date.now()},w(Yp,this,nm).call(this,e,t))}notifyClosed(e){let t=w(Yp,this,Qp).call(this,e);clearTimeout(t.openTimer),clearTimeout(t.closeTimer),t.openTimer=void 0,t.closeTimer=void 0,t.open&&(t.open=!1,w(Yp,this,sm).call(this))}remove(e){let t=S(Up,this).get(e);t&&(clearTimeout(t.openTimer),clearTimeout(t.closeTimer),S(Up,this).delete(e),S(qp,this)===e&&C(qp,this,void 0),w(Yp,this,sm).call(this))}reset(){for(let[e,t]of S(Up,this))clearTimeout(t.openTimer),clearTimeout(t.closeTimer),t.open&&e.setOpen(!1);S(Up,this).clear(),clearTimeout(S(Gp,this)),C(Gp,this,void 0),C(Wp,this,!1),C(qp,this,void 0),C(Kp,this,void 0),S(Jp,this)?.abort(),C(Jp,this,void 0)}};function Qp(e){let t=S(Up,this).get(e);return t||(t={open:!1},S(Up,this).set(e,t)),t}function $p(e){for(let[t,n]of S(Up,this))t===e||!n.open||t.element.contains(e.element)||(clearTimeout(n.closeTimer),n.closeTimer=void 0,w(Yp,this,om).call(this,t,n))}function em(e,t){let{exit:n}=t,r=S(Kp,this);if(!n||!r||Date.now()-n.at>=this.options.graceDelay)return!1;let i=e.overlayRect?.(),a=i&&Bp(n,i);return!!a&&Hp(a,r)}function tm(e){for(let[t,n]of S(Up,this))if(!(t===e||!n.open||t.element.contains(e.element))&&w(Yp,this,em).call(this,t,n))return!0;return!1}function nm(e,t){t.closeTimer=setTimeout(()=>{if(t.closeTimer=void 0,w(Yp,this,em).call(this,e,t)){w(Yp,this,nm).call(this,e,t);return}w(Yp,this,om).call(this,e,t),w(Yp,this,rm).call(this)},this.options.closeDelay)}function rm(){let e=S(qp,this);C(qp,this,void 0),e&&this.requestOpen(e)}function im(){S(Jp,this)||(C(Jp,this,new AbortController),document.addEventListener(`pointermove`,S(Xp,this),{capture:!0,passive:!0,signal:S(Jp,this).signal}))}function am(e,t){t.open=!0,clearTimeout(S(Gp,this)),C(Gp,this,void 0),C(Wp,this,!0),e.setOpen(!0)}function om(e,t){t.open=!1,t.exit=void 0,e.setOpen(!1),w(Yp,this,sm).call(this)}function sm(){if(!(!S(Wp,this)||S(Gp,this)!==void 0)){for(let e of S(Up,this).values())if(e.open||e.openTimer!==void 0)return;C(Gp,this,setTimeout(()=>{C(Gp,this,void 0),C(Wp,this,!1)},this.options.coolDownDelay))}}var cm=new Zp({warmUpDelay:250,closeDelay:150,coolDownDelay:500,graceDelay:300}),lm=new Zp({warmUpDelay:500,closeDelay:300,coolDownDelay:500,graceDelay:300}),um=o`
  :host {
    display: inline-flex;
    align-items: center;
    gap: var(--c-spacing-xs);
    min-width: 0;
    max-width: var(--c-link-max-width, 100%);
    vertical-align: bottom;
  }

  .text {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  craft-button[slot='invoker'] {
    flex: none;
    color: var(--c-text-link, LinkText);
  }

  craft-button[slot='invoker'][aria-expanded='true'] {
    background-color: color-mix(
      in oklab,
      var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)),
      var(--c-color-mix-hover)
    );
  }

  .details {
    display: grid;
    white-space: normal;
    gap: var(--c-spacing-sm);
    padding: var(--c-spacing-md);
    font-size: var(--c-text-base);
    font-weight: 400;
  }

  .details__header {
    display: flex;
    align-items: center;
    gap: var(--c-spacing-sm);
  }

  .details__heading {
    flex: 1;
    font-weight: 600;
  }

  .details__actions {
    display: flex;
    align-items: center;
    gap: var(--c-spacing-sm);
  }

  .details__address {
    color: var(--c-text-link, LinkText);
    text-decoration: var(--c-link-decoration);
    overflow-wrap: anywhere;
  }

  .details__address:hover {
    text-decoration: var(--c-link-decoration-hover);
  }

  .details__status {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
`,dm=new WeakMap,fm=new WeakMap,pm=new WeakMap,mm=new WeakSet,hm=new WeakMap,gm=new WeakMap,_m=new WeakMap,vm=new WeakMap,ym=new WeakMap,bm=new WeakMap,xm=new WeakMap,Sm=class extends d{constructor(){super(),x(this,mm),this.label=n(`Link details`),this.anchor=null,this.copyState=D.Idle,this.detailsOpen=!1,T(this,dm,!1),T(this,fm,{element:this,setOpen:e=>{e?w(mm,this,km).call(this):this.detailsPopover?.hide()}}),T(this,pm,new MutationObserver(()=>w(mm,this,Cm).call(this))),T(this,hm,e=>{this.copyState=e.detail.state,e.detail.state===D.Success?this.dispatchEvent(new CustomEvent(`craft-copy`,{bubbles:!0,composed:!0,detail:{value:Dm.call(w(mm,this))}})):e.detail.state===D.Error&&this.dispatchEvent(new CustomEvent(`craft-error`,{bubbles:!0,composed:!0}))}),T(this,gm,e=>{e.target===e.currentTarget&&(this.detailsOpen=e.type===`craft-show`,this.detailsOpen||w(mm,this,Am).call(this))}),T(this,_m,e=>{e.pointerType!==`touch`&&(S(dm,this)||!this.detailsOpen&&this.anchor)&&lm.requestOpen(S(fm,this))}),T(this,vm,e=>{e.pointerType!==`touch`&&lm.requestClose(S(fm,this))}),T(this,ym,()=>{S(dm,this)||lm.requestClose(S(fm,this))}),T(this,bm,e=>{if(!S(dm,this))return;let t=this.detailsPopover?.querySelector(`[slot="invoker"]`),n=!!t&&e.composedPath().includes(t);e.type===`focusin`&&n||(w(mm,this,Am).call(this),e.type===`click`&&n&&e.stopPropagation())}),T(this,xm,e=>{e.key===`Escape`&&S(dm,this)&&(e.preventDefault(),e.stopPropagation(),this.detailsPopover?.hide())}),this.addEventListener(`pointerenter`,S(_m,this)),this.addEventListener(`pointerleave`,S(vm,this)),this.addEventListener(`pointerdown`,S(ym,this))}connectedCallback(){super.connectedCallback(),S(pm,this).observe(this,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:[`href`,`target`,`rel`]}),w(mm,this,Cm).call(this)}disconnectedCallback(){S(pm,this).disconnect(),w(mm,this,Am).call(this),lm.remove(S(fm,this)),super.disconnectedCallback()}render(){let e=Em.call(w(mm,this)),t=Om.call(w(mm,this)),r=n(`Open in a new tab`);return m`
      ${this.anchor?m`<craft-popover
            placement="bottom-start"
            @craft-show=${S(gm,this)}
            @craft-hide=${S(gm,this)}
            @click=${{handleEvent:S(bm,this),capture:!0}}
            @focusin=${S(bm,this)}
          >
            <craft-button
              slot="invoker"
              type="button"
              variant="plain"
              size="xsmall"
              icon
              part="details-button"
            >
              <craft-icon
                name=${e.icon}
                label=${[this.label,wm.call(w(mm,this))].filter(Boolean).join(` `)}
              ></craft-icon>
            </craft-button>
            <div slot="content" class="details">
              <div class="details__header">
                <span class="details__heading">${e.heading}</span>
                <span class="details__actions">
                  <craft-button
                    id="open-button"
                    class="details__open"
                    href=${this.anchor.href}
                    target="_blank"
                    rel=${this.anchor.rel||i}
                    variant="plain"
                    size="small"
                    icon
                  >
                    <craft-icon
                      name="arrow-up-right-from-square"
                      label=${r}
                    ></craft-icon>
                  </craft-button>
                  <craft-button
                    id="copy-button"
                    class="details__copy"
                    type="button"
                    variant="plain"
                    size="small"
                    icon
                    .action=${{type:`clipboard`,value:Dm.call(w(mm,this))}}
                    @craft-state-change=${S(hm,this)}
                  >
                    <craft-icon
                      name=${t.icon}
                      label=${t.label}
                    ></craft-icon>
                  </craft-button>
                  <craft-tooltip for="open-button" invoker-relation="label"
                    >${r}</craft-tooltip
                  >
                  <craft-tooltip for="copy-button" invoker-relation="label"
                    >${t.label}</craft-tooltip
                  >
                </span>
              </div>
              <a
                class="details__address"
                href=${this.anchor.href}
                target=${this.anchor.target||i}
                rel=${this.anchor.rel||i}
                >${Dm.call(w(mm,this))}</a
              >
              <span class="details__status" role="status"
                >${this.copyState===D.Idle?``:t.label}</span
              >
            </div>
          </craft-popover>`:i}
      <span class="text" part="text"
        ><slot @slotchange=${()=>w(mm,this,Cm).call(this)}></slot
      ></span>
    `}};function Cm(){this.anchor=this.querySelector(`a[href]`),this.requestUpdate()}function wm(){return Array.from(this.anchor?.childNodes??[]).filter(e=>!(e instanceof Element&&e.hasAttribute(`data-new-tab-cue`))).map(e=>e.textContent).join(``).replace(/\s+/g,` `).trim()}function Tm(){return this.anchor?.protocol??``}function Em(){switch(Tm.call(w(mm,this))){case`mailto:`:return{icon:`envelope`,heading:n(`Email`)};case`tel:`:return{icon:`phone`,heading:n(`Phone`)};default:return{icon:`link`,heading:n(`Link`)}}}function Dm(){let e=this.anchor?.href??``;return Tm.call(w(mm,this))===`mailto:`||Tm.call(w(mm,this))===`tel:`?decodeURIComponent(e.slice(Tm.call(w(mm,this)).length).split(`?`)[0]??``):e}function Om(){switch(this.copyState){case D.Success:return{icon:`check`,label:n(`Copied`)};case D.Error:return{icon:`xmark-large`,label:n(`Copy failed`)};default:return{icon:`custom-icons/clone-dashed`,label:n(`Copy`)}}}function km(){C(dm,this,!0),document.addEventListener(`keydown`,S(xm,this),!0),this.detailsPopover?.show()}function Am(){C(dm,this,!1),lm.notifyClosed(S(fm,this)),document.removeEventListener(`keydown`,S(xm,this),!0)}Sm.styles=[re,um],r([c()],Sm.prototype,`label`,void 0),r([p()],Sm.prototype,`anchor`,void 0),r([p()],Sm.prototype,`copyState`,void 0),r([p()],Sm.prototype,`detailsOpen`,void 0),r([g(`craft-popover`)],Sm.prototype,`detailsPopover`,void 0),customElements.get(`craft-link`)||customElements.define(`craft-link`,Sm);var jm=class extends d{constructor(...e){super(...e),this.error=``,this.pluginName=``}render(){return m`
      <p class="error" role="alert">${this.error}</p>
      ${this.pluginName?m`<div class="install-plugin">
            <div class="icon" aria-hidden="true"><slot name="icon"></slot></div>
            <div class="plugin">
              <h3>${this.pluginName}</h3>
              <slot name="action"></slot>
            </div>
          </div>`:i}
    `}};jm.styles=o`
    :host {
      display: block;
      margin-block: 14px;
      margin-inline: 0;
      padding-block: 7px;
      padding-inline: 10px;
      max-width: 400px;
      border: var(--pane-border);
      border-radius: var(--pane-border-radius);
      background: var(--gray-050, var(--c-color-neutral-fill-quiet));
      box-shadow: var(--pane-shadow, var(--c-shadow-sm));
      overflow-wrap: break-word;
      box-sizing: border-box;
    }

    .error {
      margin: 0;
      color: var(--error-color, var(--c-color-danger-on-quiet));
    }

    .install-plugin {
      display: grid;
      grid-template-columns: 32px minmax(0, 1fr);
      gap: 8px;
      margin-block: 7px -7px;
      border-block-start: 1px solid
        var(--border-hairline, var(--c-color-border-quiet));
      padding-block: 10px;
    }

    .icon {
      width: 32px;
      height: 32px;
    }

    ::slotted([slot='icon']) {
      width: 100%;
      height: 100%;
    }

    .plugin {
      display: flex;
      align-items: center;
    }

    h3 {
      flex: 1;
      margin-block: 8px;
      margin-inline: 0;
    }

    ::slotted([slot='action']) {
      margin: 0;
    }
  `,r([c()],jm.prototype,`error`,void 0),r([c({attribute:`plugin-name`})],jm.prototype,`pluginName`,void 0),customElements.get(`craft-missing-component`)||customElements.define(`craft-missing-component`,jm);var Mm=o`
  .badge-indicator {
    --_badge-color: var(--c-color-info-fill-loud);
    --_text-color: var(--c-color-info-on-loud);
    --badge-size: calc(8rem / 16);
    display: inline-flex;
    min-width: var(--badge-size);
    min-height: var(--badge-size);
    justify-content: center;
    align-items: center;
    background-color: var(--_badge-color);
    color: var(--_text-color);
    border-radius: var(--c-radius-full);
    /* No ring unless asked for, as where a marker overlaps something else. */
    border: var(--badge-border-width, 0) solid
      var(--badge-border-color, var(--c-surface-default));
  }

  .badge-indicator--secondary {
    --_badge-color: var(--c-color-warning-fill-loud);
  }

  .badge-indicator--inverse {
    --_badge-color: var(--c-color-neutral-fill-normal);
    --_text-color: var(--c-color-neutral-on-normal);
  }

  .badge-indicator--with-number {
    --badge-size: var(--c-size-icon-md);
    padding-block: calc(2rem / 16);
    /* Room either side of a longer count, so its digits don't touch the edge. */
    padding-inline: calc(4rem / 16);
  }

  .number {
    display: inline-flex;
    font-size: var(--c-text-xs);
    font-weight: var(--font-weight-semibold);
    line-height: 1;
  }
`,Nm=new WeakMap,Pm=class extends d{constructor(...e){super(...e),this.altText=null,this.badgeCount=null,this.badgeCountSuffix=null,this.max=99,this.variant=`primary`,T(this,Nm,`badge-label-${Math.floor(Math.random()*1e9).toString()}`)}connectedCallback(){super.connectedCallback(),this.id||=`badge-${Math.floor(Math.random()*1e9).toString()}`}showCount(){return this.badgeCount!==null&&this.badgeCount>0}truncatedNumber(){let e=this.badgeCount??0,t=e=>new Intl.NumberFormat(document.documentElement.lang||void 0).format(e);return e>this.max?`${t(this.max)}+`:t(e)}getBadgeRole(){return this.altText?`img`:i}renderBadgeContents(){return m`
      ${this.showCount()?m`
            <span class="number">${this.truncatedNumber()}</span>
            <sl-visually-hidden>${this.badgeCountSuffix}</sl-visually-hidden>
          `:i}
      ${this.altText?m`
            <sl-visually-hidden id=${S(Nm,this)}
              >${this.altText}</sl-visually-hidden
            >
          `:i}
    `}render(){return m`
      <div
        part="badge"
        class="${O({"badge-indicator":!0,"badge-indicator--with-number":this.showCount(),"badge-indicator--secondary":this.variant===`secondary`,"badge-indicator--inverse":this.variant===`inverse`})}"
        role="${this.getBadgeRole()}"
        aria-labelledby="${this.altText?S(Nm,this):i}"
      >
        ${this.renderBadgeContents()}
      </div>
    `}};Pm.styles=[Mm],r([c({attribute:`alt-text`})],Pm.prototype,`altText`,void 0),r([c({attribute:`badge-count`})],Pm.prototype,`badgeCount`,void 0),r([c({attribute:`badge-count-suffix`})],Pm.prototype,`badgeCountSuffix`,void 0),r([c({type:Number})],Pm.prototype,`max`,void 0),r([c()],Pm.prototype,`variant`,void 0),customElements.get(`craft-badge-indicator`)||customElements.define(`craft-badge-indicator`,Pm);var Fm=Symbol.for(``),Im=e=>{if(e?.r===Fm)return e?._$litStatic$},Lm=e=>({_$litStatic$:e,r:Fm}),Rm=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Fm}),zm=new Map,Bm=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=Im(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=zm.get(e))===void 0&&(o.raw=o,zm.set(e,t=o)),n=s}return e(t,...n)})(m),Vm=o`
  :host {
    --_padding-inline: var(--c-spacing-md);
    /* The icon column of a row with a prefix. */
    --_prefix-size: calc(24rem / 16);
    /* Enough to center the icon column in a touch target, border included. */
    --_padding-block: calc(
      (var(--c-size-touch-target) - var(--_prefix-size) - var(--_rail-border) *
          2) /
        2
    );
    /* The space between the icon column and the label (tighter than the row's gap). */
    --_prefix-gap: var(--c-spacing-sm);
    /* The rule down the side of an inline subnav. */
    --_subnav-rule: 2px;
    /* The square a collapsed row occupies, border included. The row draws a
       transparent border to keep room for its focus state. */
    --_rail-border: 1px;
    --_rail-size: var(--c-size-touch-target);

    border-radius: var(--c-radius-md);
  }

  .nav-item {
    display: grid;
    gap: var(--c-spacing-md);
    /* Two tracks: an item with no icon has no prefix to leave room for. */
    grid-template-columns: 1fr auto;
    align-items: center;
    text-decoration: none;
    color: inherit;
    padding-inline: var(--_padding-inline);
    padding-block: var(--_padding-block);
    border: 1px solid transparent;
    border-radius: var(--c-radius-md);
    position: relative;
    /* A full touch target whether or not there's an icon to fill one. */
    box-sizing: border-box;
    min-block-size: var(--c-size-touch-target);

    /*
     * Expanded, the focusable element is the label inside the row, so the ring
     * is drawn on the row around it. Collapsed, the row *is* the focusable
     * element — without this second selector it fell through to the browser's
     * default outline, which is a different width and offset from the one
     * craft-button draws, so the ring changed size as you tabbed onto the
     * chevron.
     */
    &:focus-visible,
    &:has(.nav-item__action-item:focus-visible) {
      outline: var(--c-focus-outline-width) solid var(--c-color-focus-outline);
      outline-offset: var(--c-focus-outline-offset);
    }
  }

  .nav-item__action-item {
    text-decoration: none;
    color: inherit;
    ${Ni}

    &::after {
      content: '';
      position: absolute;
      inset: 0;
    }

    &:focus-visible {
      outline: none;
    }
  }

  /*
   * An item that only discloses its flyout is a button, so it can be focused.
   * Zero specificity, so the rules that shape the row still win.
   */
  :where(button.nav-item, button.nav-item__action-item) {
    appearance: none;
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    padding: 0;
    text-align: start;
    cursor: pointer;
  }

  craft-badge-indicator {
    --badge-border-width: 2px;
    position: absolute;
    inset-inline-end: 0;
    inset-block-end: 0;
  }

  .nav-item__prefix craft-button,
  /* Above the label's full-row click target, or a click meant for a control
     would follow the link instead. */
  .nav-item__suffix craft-button,
  ::slotted([slot='actions']) {
    position: relative;
    z-index: 1;
    font-size: 1em;
  }

  .nav-item--prefixed {
    padding-inline: var(--c-spacing-sm);
    grid-template-columns: var(--_prefix-size) 1fr auto;

    /* Pull the label back across the row's gap, to the tighter prefix gap. */
    > .nav-item__action-item {
      margin-inline-start: calc(var(--_prefix-gap) - var(--c-spacing-md));
    }
  }

  .nav-item--flush {
    margin-inline-start: calc(var(--_padding-inline) * -1);
  }

  /*
   * A heading names the rows under it rather than being one of them, so it's
   * smaller and heavier than they are. One rule for both kinds — a group
   * row in the list, and the label heading a collapsed item's flyout — so the
   * two can't drift apart again.
   *
   * The type goes on the row, not the host, or the subnav nested inside would
   * inherit it and every child would read as a heading too.
   */
  :host([group]) .nav-item,
  .flyout__label {
    font-size: var(--c-text-sm);
    font-weight: bold;
  }

  /*
   * A group heading sits with the rows it heads: the space above separates it
   * from whatever came before, the space below only sets it off from what it
   * heads. The flyout's label takes its spacing from the flyout grid.
   */
  :host([group]) {
    border-radius: 0;
    margin-block-start: var(--c-spacing-sm);
  }

  :host([group]) .nav-item {
    border-radius: 0;
    padding-block: var(--_padding-block) var(--c-spacing-xs);
    min-block-size: 0;
  }

  :host([active]) .nav-item {
    background-color: var(--c-color-accent-fill-quiet);
    border: 1px solid var(--c-color-accent-border-normal);
  }

  /*
   * Selected parent: on the trail to the page you're on, but not the page
   * itself. Stub values — a quieter treatment than the child's.
   */
  :host([active]:not([current])) .nav-item {
    background-color: transparent;
    border-color: transparent;

    /* Starts at the row's outer edge, in line with its hover background. */
    &:before {
      content: '';
      position: absolute;
      inset-inline-start: calc(var(--_rail-border) * -1);
      inset-block-start: 12%;
      width: calc(3rem / 16);
      height: 76%;
      border-radius: calc(2rem / 16);
      background-color: var(--c-color-accent-fill-loud);
    }
  }

  /*
   * Selected child: the page you're on. Stub values.
   */
  :host([current]) .nav-item {
    background-color: var(--c-color-accent-fill-quiet);
    border-color: var(--c-color-accent-border-normal);
    color: var(--c-color-accent-on-quiet);
  }

  /* A badge on the current row takes the row's tint. */
  :host([current]) ::slotted(craft-badge-indicator) {
    --c-color-neutral-fill-normal: var(--c-color-accent-fill-normal);
    --c-color-neutral-on-normal: var(--c-color-accent-on-normal);
  }

  /* Not on the page you're on: its selected fill is the state to show. */
  :host(:not([current]))
    .nav-item:not(.nav-item--static):hover:not(:has(craft-button:hover)) {
    background-color: color-mix(in srgb, currentColor, transparent 95%);
  }

  /* No href: render as a plain label, not an interactive item. */
  .nav-item--static {
    cursor: default;
  }

  .nav-item__prefix {
    position: relative;
    display: grid;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    width: 100%;
  }

  .nav-item__suffix {
    justify-self: end;
    display: flex;
    align-items: center;
    gap: var(--c-spacing-xs);
  }

  .active-indicator {
    display: inline-block;
    aspect-ratio: 1;
    width: calc(4rem / 16);
    border-radius: var(--c-radius-full);
    background-color: currentColor;

    :host([active]) & {
      width: calc(6rem / 16);
    }
  }

  /*
   * A child's label lines up with its parent's. The parent's label sits past
   * its padding, its icon column and the gap after it; a child's sits past this
   * margin, the rule, this padding and the child's own padding. The margin is
   * whatever makes the two add up. Both rows carry the same border, so it
   * cancels out.
   */
  :host(:not([group])) .subnav {
    --_subnav-indent: calc(
      var(--c-spacing-sm) + var(--_prefix-size) + var(--_prefix-gap) -
        var(--_subnav-rule) - var(--c-spacing-sm) - var(--_padding-inline)
    );
    position: relative;
    margin-block-start: var(--c-spacing-sm);
    margin-inline-start: var(--_subnav-indent);
    padding-inline: var(--c-spacing-sm);
    border-inline-start: var(--_subnav-rule) solid transparent;
  }

  /*
   * A hairline down the subnav, centered on the selected parent's indicator:
   * back across the indent and rule to the parent row's inner edge (past its
   * border). The indicator's center is half a pixel past that edge, as is the
   * hairline's.
   */
  :host(:not([group]):not([icon-only])) .subnav::before {
    content: '';
    position: absolute;
    inset-block: 0;
    inset-inline-start: calc(
      var(--_rail-border) - var(--_subnav-indent) - var(--_subnav-rule)
    );
    width: 1px;
    background-color: var(--c-color-neutral-border-quiet);
  }

  /*
   * Collapsed to a rail there's nowhere to indent a subnav, so it moves into a
   * popover. The label leads it as the group's heading, standing in for the
   * tooltip a childless item would get.
   */
  .flyout {
    display: grid;
    gap: var(--c-spacing-xs);
    padding: var(--c-spacing-sm);
  }

  /* Quieter than the label it trails, and sized to the toggle chevron it
     stands in for. */
  .flyout-indicator {
    font-size: calc(10rem / 16);
    color: var(--c-color-neutral-on-quiet, currentcolor);
  }

  .flyout__label {
    padding-inline: var(--c-spacing-sm);
  }

  /* Smaller than the row's own icons: it marks the item, it isn't one. */
  .subnav-toggle craft-icon {
    font-size: calc(10rem / 16);
  }

  /*
   * Collapsed to a rail
   *
   * The row is the icon and nothing else, so everything that would sit beside
   * a label has to find somewhere else to be: the subnav loses its indent, the
   * disclosure moves on top of the icon, and a heading gives way to a rule.
   */
  .nav-item--icon {
    box-sizing: border-box;
    width: var(--_rail-size);
    display: block;
    text-decoration: none;
    border: var(--_rail-border) solid transparent;
    aspect-ratio: 1;
    padding: 0;

    .nav-item__suffix {
      display: grid;
      justify-content: center;
      align-items: center;
    }
  }

  :host([icon-only]) {
  }

  :host([icon-only]) li {
    position: relative;
  }

  /*
   * A rail shows one row per branch, so no child row is there to carry the
   * current page's fill. The branch carries it instead, whether the page is the
   * branch itself or somewhere inside it.
   */
  :host([icon-only][active]) .nav-item {
    background-color: var(--c-color-accent-fill-quiet);
    border-color: var(--c-color-accent-border-normal);
    color: var(--c-color-accent-on-quiet);

    &::before {
      content: none;
    }
  }

  /* No room to indent, so the stand-ins sit directly under their parent. */
  :host([icon-only]) .subnav {
    margin: 0;
    border-inline-start: none;
    padding-inline: 0;
  }

  /*
   * Without that indent nothing says the stand-ins belong to the icon above
   * them, so a rule runs down beside them: the width of the active indicator,
   * and pulled clear of the column the same way, so the icons stay centered on
   * the rail and the two line up when a child is the current page.
   *
   * Not on a group — its children are already inside the branch's own subnav,
   * and a second rule would land on top of the first.
   */
  :host([icon-only]:not([group])) .subnav {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      inset-block: 0;
      inset-inline-start: 0;
      width: calc(3rem / 16);
      border-radius: calc(2rem / 16);
      background-color: color-mix(in srgb, currentcolor, transparent 90%);
      transform: translateX(-150%);
    }
  }

  /*
   * A row has space for one thing, so the disclosure sits over the icon rather
   * than beside or below it — invisible and click-through until it's tabbed
   * to, since a pointer has hover for the flyout and the icon itself to click.
   *
   * Opacity rather than visibility or display: those would take it out of the
   * tab order, and then nothing could ever focus it into view.
   *
   * The button stays 24px square for 2.5.8 Target Size even though the chevron
   * in it is much smaller.
   */
  .rail-toggle {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    z-index: 1;
    display: grid;
    place-items: center;
    /* The row's whole box, so the chevron lands dead on the icon it replaces
       — and the button fills it, so the focus ring appears exactly where the
       row's own would. Well past the 24px 2.5.8 floor either way. */
    width: var(--_rail-size);
    height: var(--_rail-size);
    /* The row's ring offset, which the plain button would otherwise inset. */
    --_row-focus-outline-offset: var(--c-focus-outline-offset);

    /* A plain button is transparent, which would leave only a bare chevron
       and its ring to show a keyboard user where they are. */
    craft-button {
      --c-focus-outline-offset: var(--_row-focus-outline-offset);
      width: 100%;
      height: 100%;
      background-color: var(--c-color-neutral-fill-quiet);
    }

    &:not(:focus-within) {
      opacity: 0;
      pointer-events: none;
    }

    /*
     * The chevron stands in for the icon in the same square, so it matches its
     * size. craft-button[icon][size=small] shrinks its contents to 0.8em and
     * craft-icon shrinks again by the same, which would leave the chevron a
     * fifth smaller than the icon it replaces — so cancel the button's share
     * and keep the icon's.
     */
    craft-button {
      font-size: 1em;
    }

    craft-icon {
      font-size: 0.8em;
    }
  }

  /* The chevron stands in for the icon while it's up, so there's nothing
     underneath for it to have to read against. */
  :host([icon-only]) li:has(.rail-toggle:focus-within) .nav-item__prefix {
    opacity: 0;
  }

  /* A heading's stand-in: the rule between one run of icons and the next. The
     space above belongs to the rule itself, not a margin carried over from the
     expanded heading. */
  :host([group][icon-only]) {
    margin-block-start: 0;
    padding-block-start: var(--c-spacing-sm);
  }

  .rail-separator {
    position: relative;
    border: 0;
    width: 60%;
    margin-block: 0;
    margin-inline: auto;
    inset-block-start: calc(var(--c-spacing-sm) * -1);
    border-block-start: 1px solid
      color-mix(transparent, var(--c-color-neutral-border-quiet));
  }

  /*
   * A letter standing in for an icon: a filled chip, so it reads as a mark
   * rather than as a word cut short, and sits quieter than the real icons it
   * shares a column with.
   *
   * The fill is mixed from currentcolor rather than a surface token — the nav
   * takes its background from whatever it's placed in, so there's nothing
   * fixed to match.
   */
  .nav-item__initial {
    display: grid;
    place-items: center;
    width: calc(14rem / 16);
    aspect-ratio: 1;
    border-radius: var(--c-radius-full);
    background-color: color-mix(in srgb, currentcolor, transparent 88%);
    font-size: var(--c-text-xs);
    font-weight: bold;
    line-height: 1;
  }
`,Hm=new WeakMap,Um=new WeakMap,Wm=new WeakMap,Gm=new WeakSet,Km=new WeakMap,qm=new WeakMap,Jm=new WeakMap,Ym=new WeakMap,Xm=new WeakMap,Zm=new WeakMap,Qm=class e extends d{get labelNodes(){return Array.from(this.childNodes).filter(e=>e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE&&!e.hasAttribute(`slot`))}get labelText(){return this.labelNodes.map(e=>e.textContent??``).join(` `).replace(/\s+/g,` `).trim()}get hasLabel(){return this.labelNodes.some(e=>e.nodeType!==Node.TEXT_NODE||!!e.textContent?.trim())}get opensInNewTab(){return!!this.href&&(this.external||y(this.href))}get itemId(){return`item-${this.id}`}get subnavId(){return`${this.id}-subnav`}get ariaCurrentState(){return this.current?this.href?`page`:`true`:this.active?`true`:`false`}constructor(){super(),x(this,Gm),this.active=!1,this.current=!1,this.button=!1,this.external=!1,this.indicator=!1,this.iconOnly=!1,this.flush=!1,this.initialState=`closed`,this.group=!1,this.togglePosition=`suffix`,this.subnavState=`closed`,this.flyoutOpen=!1,T(this,Hm,{element:this,setOpen:e=>{this.flyoutOpen=e},overlayRect:()=>this.shadowRoot?.querySelector(`.flyout`)?.getBoundingClientRect()}),T(this,Um,void 0),this._lightDom=new se(this,{characterData:!0}),T(this,Wm,void 0),this.fitFlyout=()=>{let t=this.shadowRoot?.querySelector(`craft-popover`),n=this.shadowRoot?.querySelector(`.flyout`);if(!t||!n)return;let{top:r}=n.getBoundingClientRect(),i=window.innerHeight-r-e.flyoutViewportMargin;if(!window.innerHeight||i<=0){t.style.removeProperty(`--popover-max-block-size`);return}t.style.setProperty(`--popover-max-block-size`,`${i}px`)},T(this,Km,()=>{cm.requestOpen(S(Hm,this))}),T(this,qm,e=>{wt(e,this)||cm.requestClose(S(Hm,this))}),T(this,Jm,e=>{let t=e.target.opened===!0;this.flyoutOpen=t,t||cm.notifyClosed(S(Hm,this))}),T(this,Ym,e=>{e.target===e.currentTarget&&e.stopPropagation()}),T(this,Xm,e=>{e instanceof KeyboardEvent&&e.key!==`Enter`&&e.key!==` `||e.stopPropagation()}),T(this,Zm,e=>{e.preventDefault(),e.stopPropagation(),this.flyoutOpen?(this.flyoutOpen=!1,cm.notifyClosed(S(Hm,this))):cm.requestOpen(S(Hm,this),{immediate:!0})}),this.id=this.id||Math.random().toString(36).substring(2,6)}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`),this.subnavState=this.active||this.initialState===`open`?`open`:`closed`;let{signal:e}=C(Um,this,new AbortController);this.addEventListener(`mouseenter`,S(Km,this),{signal:e}),this.addEventListener(`mouseleave`,S(qm,this),{signal:e}),this.addEventListener(`focusout`,S(qm,this),{signal:e})}updated(e){e.has(`flyoutOpen`)&&(this.flyoutOpen?w(Gm,this,$m).call(this):w(Gm,this,eh).call(this))}willUpdate(e){(e.has(`active`)||e.has(`initialState`))&&(this.subnavState=this.active||this.initialState===`open`?`open`:`closed`)}disconnectedCallback(){S(Um,this)?.abort(),S(Wm,this)?.abort(),cm.remove(S(Hm,this)),super.disconnectedCallback()}toggleSubnav(e){e.preventDefault(),e.stopPropagation(),this.subnavState=this.subnavState===`open`?`closed`:`open`}actionTag(e){return this.href?Rm`a`:e||this.button?Rm`button`:Rm`span`}focus(e){let t=this.shadowRoot?.querySelector(`.nav-item__action-item:is(a, button), .nav-item:is(a, button)`);t?t.focus(e):super.focus(e)}buttonType(e){return!this.href&&(e||this.button)?`button`:i}isStatic(e){return!this.href&&!e&&!this.button}renderIconItem(e,t){let n=this.actionTag(t);return Bm`
      <${n}
        class="${O({"nav-item":!0,"nav-item--icon":!0,"nav-item--static":this.isStatic(t)})}"
        id="${this.itemId}"
        type="${this.buttonType(t)}"
        href="${ht(this.href||void 0)}"
        target="${this.opensInNewTab?`_blank`:i}"
        rel="${this.opensInNewTab?`noopener`:i}"
        aria-current="${this.href||this.button?this.ariaCurrentState:i}"
        aria-expanded="${t?this.flyoutOpen?`true`:`false`:i}"
        aria-controls="${t?this.subnavId:i}"
        aria-label="${(this.href||e||this.button)&&this.labelText?this.opensInNewTab?`${this.labelText}, ${_()}`:this.labelText:i}"
        @click="${t&&!this.href?S(Zm,this):i}"
      >
        ${this.renderPrefix()} ${this.renderSuffix(!1)}
      </${n}>
      ${t?m`<div class="rail-toggle">${this.renderFlyoutToggle()}</div>`:i}
      ${t?this.renderFlyout(!0):m`<craft-tooltip
              for="${this.itemId}"
              placement="right"
              @craft-show=${S(Ym,this)}
              @craft-hide=${S(Ym,this)}
              @craft-after-show=${S(Ym,this)}
              @craft-after-hide=${S(Ym,this)}
              ><slot></slot
            ></craft-tooltip>`}
    `}renderFlyout(e){return m`
      <craft-popover
        for="${this.itemId}"
        placement="right-start"
        without-invoker-aria
        .opened="${this.flyoutOpen}"
        @opened-changed="${S(Jm,this)}"
        @craft-show=${S(Ym,this)}
        @craft-hide=${S(Ym,this)}
        @craft-after-show=${S(Ym,this)}
        @craft-after-hide=${S(Ym,this)}
      >
        <div class="flyout" id="${this.subnavId}">
          ${e?m`<div class="flyout__label"><slot></slot></div>`:i}
          <slot name="subnav"></slot>
        </div>
      </craft-popover>
    `}renderSubnavToggle(){return m`
      <craft-button
        @click="${this.toggleSubnav}"
        @mousedown="${S(Xm,this)}"
        @mouseup="${S(Xm,this)}"
        @keydown="${S(Xm,this)}"
        @keyup="${S(Xm,this)}"
        variant="${nr.Plain}"
        icon
        size="small"
        aria-controls="${this.subnavId}"
        aria-expanded="${this.subnavState===`open`?`true`:`false`}"
        class="subnav-toggle"
        aria-labelledby="${this.iconOnly?`${this.id}-toggle-icon`:`${this.id}-toggle-icon ${this.id}-label`}"
      >
        <craft-icon
          id="${this.id}-toggle-icon"
          name="${this.subnavState===`closed`?`chevron-down`:`chevron-up`}"
          label="${n(`Toggle subnavigation`)}"
        ></craft-icon>
      </craft-button>
    `}renderPrefix(e=!1){return e&&this.togglePosition===`prefix`?m`
        <span class="nav-item__prefix">${this.renderSubnavToggle()}</span>
      `:m`
      <span class="nav-item__prefix">
        <slot name="prefix">
          <slot name="icon">
            ${this.icon?m` <craft-icon
                  name="${this.icon}"
                  class="nav-icon"
                ></craft-icon>`:this.renderInitial()}
          </slot>
          ${this.indicator?m`<craft-badge-indicator
                altText="${n(`Has Notifications`)}"
              />`:i}
        </slot>
      </span>
    `}renderFlyoutToggle(){return m`
      <craft-button
        class="flyout-toggle"
        @click="${S(Zm,this)}"
        @mousedown="${S(Xm,this)}"
        @mouseup="${S(Xm,this)}"
        @keydown="${S(Xm,this)}"
        @keyup="${S(Xm,this)}"
        variant="${nr.Plain}"
        icon
        size="small"
        aria-controls="${this.subnavId}"
        aria-expanded="${this.flyoutOpen?`true`:`false`}"
        aria-label="${n(`Show submenu for “{item}”`,{item:this.labelText})}"
      >
        <craft-icon
          class="flyout-indicator"
          name="chevron-right"
          aria-hidden="true"
        ></craft-icon>
      </craft-button>
    `}renderInitial(){let e=this.iconOnly?this.labelText.at(0):null;return e?m`<span class="nav-item__initial" aria-hidden="true"
          >${e.toLocaleUpperCase()}</span
        >`:i}renderSuffix(e=!1,t=!1){return m`
      <div class="nav-item__suffix">
        ${this.opensInNewTab&&!this.iconOnly?m`<craft-icon
              class="external-icon"
              name="arrow-up-right-from-square"
            ></craft-icon>`:i}
        ${this.iconOnly?i:m`<slot
              name="actions"
              @mousedown="${S(Xm,this)}"
              @mouseup="${S(Xm,this)}"
              @click="${S(Xm,this)}"
              @keydown="${S(Xm,this)}"
              @keyup="${S(Xm,this)}"
            ></slot>`}
        <slot name="suffix">
          ${e&&this.togglePosition===`suffix`?this.renderSubnavToggle():i}
          ${t?this.renderFlyoutToggle():i}
        </slot>
      </div>
    `}renderItem(e,t,n){return Bm`
      <div
        class="${O({"nav-item":!0,"nav-item--prefixed":t,"nav-item--flush":this.flush,"nav-item--static":this.isStatic(n)})}"
        id="${this.itemId}"
      >
        ${t?this.renderPrefix(e):i}
        ${this.renderInteractiveItem(n)}
        ${this.renderSuffix(e,n)}
      </div>
    `}renderInteractiveItem(e){let t=this.actionTag(e);return Bm`
      <${t}
        class="nav-item__action-item"
        type="${this.buttonType(e)}"
        href="${ht(this.href||void 0)}"
        target="${this.opensInNewTab?`_blank`:i}"
        rel="${this.opensInNewTab?`noopener`:i}"
        aria-current="${this.href||this.button?this.ariaCurrentState:i}"
        aria-expanded="${e?this.flyoutOpen?`true`:`false`:i}"
        aria-controls="${e?this.subnavId:i}"
        @click="${e&&!this.href?S(Zm,this):i}"
      >
        <slot id="${this.id}-label"></slot>${this.opensInNewTab?m`<span class="cp-visually-hidden">${_()}</span>`:i}
      </${t}>
    `}render(){let e=ce(this,`subnav`),t=this.subnavDisplay??(this.iconOnly?`flyout`:`inline`),n=e&&t===`flyout`,r=e&&!n&&!this.group&&(this.iconOnly||this.hasLabel),a=r&&this.togglePosition===`prefix`||!!this.icon||this.indicator||ce(this,`prefix`,`icon`),o=!r||this.subnavState===`open`;return this.group&&this.iconOnly?m`
        <li role="presentation">
          <hr
            class="rail-separator"
            aria-label="${this.labelText||i}"
          />
          ${e?m`<div class="subnav" id="${this.subnavId}">
                <slot name="subnav"></slot>
              </div>`:i}
        </li>
      `:m`
      <li role="presentation">
        ${this.iconOnly?this.renderIconItem(e,n):this.renderItem(r,a,n)}
        ${this.iconOnly&&r?m`<div class="rail-toggle">${this.renderSubnavToggle()}</div>`:i}
        ${!this.iconOnly&&n?this.renderFlyout(!1):i}
        ${e&&!n?m`
              <div
                class="subnav"
                id="${this.subnavId}"
                style="${cr({display:o?`block`:`none`})}"
              >
                <slot name="subnav"></slot>
              </div>
            `:i}
      </li>
    `}};function $m(){w(Gm,this,eh).call(this);let{signal:e}=C(Wm,this,new AbortController);window.addEventListener(`resize`,this.fitFlyout,{signal:e}),requestAnimationFrame(this.fitFlyout)}function eh(){S(Wm,this)?.abort(),C(Wm,this,void 0),this.shadowRoot?.querySelector(`craft-popover`)?.style.removeProperty(`--popover-max-block-size`)}Qm.styles=[le,Vm],Qm.flyoutViewportMargin=16,r([c()],Qm.prototype,`icon`,void 0),r([c()],Qm.prototype,`href`,void 0),r([c({type:Boolean,reflect:!0})],Qm.prototype,`active`,void 0),r([c({type:Boolean,reflect:!0})],Qm.prototype,`current`,void 0),r([c({type:Boolean,reflect:!0})],Qm.prototype,`button`,void 0),r([c({type:Boolean})],Qm.prototype,`external`,void 0),r([c({type:Boolean})],Qm.prototype,`indicator`,void 0),r([c()],Qm.prototype,`id`,void 0),r([c({reflect:!0,type:Boolean,attribute:`icon-only`})],Qm.prototype,`iconOnly`,void 0),r([c({type:Boolean})],Qm.prototype,`flush`,void 0),r([c({reflect:!0,attribute:`initial-state`})],Qm.prototype,`initialState`,void 0),r([c({type:Boolean,reflect:!0})],Qm.prototype,`group`,void 0),r([c({attribute:`toggle-position`})],Qm.prototype,`togglePosition`,void 0),r([c({attribute:`subnav-display`,reflect:!0})],Qm.prototype,`subnavDisplay`,void 0),r([p()],Qm.prototype,`subnavState`,void 0),r([p()],Qm.prototype,`flyoutOpen`,void 0),customElements.get(`craft-nav-item`)||customElements.define(`craft-nav-item`,Qm);var th=class extends d{render(){return m`
      <ul class="nav-list">
        <slot></slot>
      </ul>
    `}};th.styles=o`
    :host {
      display: block;
    }

    .nav-list {
      display: grid;
      margin: 0;
      padding: 0;
      list-style: none;
      gap: var(--c-spacing-xs);
    }
  `,customElements.get(`craft-nav-list`)||customElements.define(`craft-nav-list`,th);var nh=o`
  :host {
    display: block;
    /*
      Pairs with the clip overflow below: a pane clips its own content, so it
      should never widen past its container either. As a flex/grid item the
      default \`min-width: auto\` would let wide content (a many-columned
      table) push it out of the layout instead — and would stop the content's
      own scroll container from ever engaging.
    */
    min-width: 0;

    /*
      Private surface vars. Each appearance/variant re-declares only what it
      changes, and every declaration lives in a \`:host\` rule so an outer-tree
      rule or inline style on the host (e.g. \`--c-pane-background: …\`) still
      wins — shadow-tree \`:host\` rules always lose to the outer tree.
    */
    --_pane-background: var(--c-pane-background, var(--c-surface-raised));
    --_pane-color: var(--c-pane-text, inherit);
    --_pane-border-color: var(--c-pane-border-color, transparent);
    --_pane-border-width: var(--c-pane-border-width, 1px);
    --_pane-border-style: var(--c-pane-border-style, solid);
    --_pane-radius: var(--c-pane-radius, var(--c-radius-md));
    --_pane-shadow: var(--c-pane-shadow, none);
    --_pane-max-block-size: var(--c-pane-max-block-size, none);
    --_pane-overflow: clip;
    /*
      Fallback spacing. The \`padding\` property re-declares this on the base
      element on every render, so this only applies if that ever goes missing.
    */
    --_pane-spacing: var(--c-pane-padding, var(--c-spacing-lg));
    --_pane-divider-color: var(
      --c-pane-divider-color,
      var(--c-color-neutral-border-quiet)
    );
  }

  :host([hidden]) {
    display: none;
  }

  /* Appearances ------------------------------------------------------------ */

  :host([appearance='plain']) {
    --_pane-border-color: transparent;
    --_pane-shadow: none;
  }

  :host([appearance='raised']) {
    --_pane-border-color: var(--c-color-neutral-border-quiet);
    --_pane-shadow: var(--c-shadow-raised);
  }

  :host([appearance='outline']) {
    --_pane-border-color: var(--c-color-neutral-border-quiet);
    --_pane-shadow: none;
  }

  :host([appearance='outline-fill']) {
    --_pane-background: var(
      --c-pane-background,
      color-mix(var(--c-color-neutral-fill-quiet), transparent 70%)
    );
    --_pane-border-color: var(--c-color-neutral-border-quiet);
    --_pane-shadow: none;
  }

  :host([appearance='sunken']) {
    --_pane-background: var(--c-pane-background, var(--c-surface-sunken));
    --_pane-border-color: transparent;
    --_pane-shadow: var(--c-shadow-sunken);
  }

  /* Variants --------------------------------------------------------------- */

  :host([variant='code']) {
    --_pane-background: var(
      --c-pane-background,
      var(--c-color-neutral-fill-quiet)
    );
    --_pane-border-color: var(--c-color-neutral-border-quiet);
    /*
      Code panes are a flat inset well, not a floating surface, so the variant
      claims the shadow back from whatever \`appearance\` is in play — otherwise
      the \`raised\` default would leave a drop shadow under every code block.
      \`--c-pane-shadow\` still wins, so a consumer can opt one back in.
    */
    --_pane-shadow: var(--c-pane-shadow, none);
    --_pane-max-block-size: var(--c-pane-max-block-size, calc(500rem / 16));
    --_pane-overflow: auto;

    margin-block-end: var(--c-spacing-md);
  }

  :host([variant='error']) {
    --_pane-background: var(
      --c-pane-background,
      var(--c-color-danger-fill-quiet)
    );
    --_pane-color: var(--c-pane-text, var(--c-color-danger-on-quiet));
    --_pane-border-color: var(--c-color-danger-border-quiet);
    --_pane-divider-color: var(
      --c-pane-divider-color,
      var(--c-color-danger-border-quiet)
    );
  }

  /* Structure -------------------------------------------------------------- */

  .cp-pane {
    display: block;
    block-size: 100%;
    color: var(--_pane-color);
    background-color: var(--_pane-background);
    border-radius: var(--_pane-radius);
    border-width: var(--_pane-border-width);
    border-style: var(--_pane-border-style);
    border-color: var(--_pane-border-color);
    box-shadow: var(--_pane-shadow);
    max-block-size: var(--_pane-max-block-size);
    overflow: var(--_pane-overflow);
    -webkit-overflow-scrolling: touch;
  }

  /*
    The focus ring belongs to the scroll container, which is also the element
    carrying the border/radius — so it traces the pane's rounded corners instead
    of boxing the (unstyled, unrounded) host. It's drawn inside the border box:
    the scroller runs edge to edge, so an outset ring could be clipped by an
    ancestor, and an inset one stays legible against both the raised surface and
    the code variant's quiet fill.
  */
  .cp-pane:focus-visible {
    outline: var(--c-focus-outline-width) solid var(--c-color-focus-outline);
    outline-offset: calc(-1 * var(--c-focus-outline-width));
  }

  /*
    The component makes its own scroll container focusable, so consumers don't
    need a host-level \`tabindex\`. If one sets it anyway, at least round the
    UA outline to the pane's shape.
  */
  :host(:focus-visible) {
    border-radius: var(--_pane-radius);
    outline: var(--c-focus-outline-width) solid var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
  }

  .cp-pane__header {
    /* Room for a small button, like other header bars, so a header is the
       same height with or without actions. With the pane's top border and the
       header's own bottom border, it's a header bar's height, as a card
       header is. */
    --_header-height: calc(var(--c-size-header) - var(--_pane-border-width));
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    min-block-size: var(--_header-height);
    padding-inline: var(--_pane-spacing);
    padding-block: max(
      0px,
      calc((var(--_header-height) - 1px - var(--c-size-control-sm)) / 2)
    );
    position: sticky;
    inset-block-start: 0;
    z-index: var(--c-layer-sticky, 10);
    background-color: var(--_pane-background);
    border-block-end: 1px solid var(--_pane-divider-color);
  }

  .cp-pane__title {
    font-size: var(--c-pane-title-font-size, calc(18rem / 16));
    line-height: var(--c-pane-title-line-height, calc(28 / 18));
    font-weight: var(--c-pane-title-font-weight, 700);
    margin: 0;
    ${Ni}
  }

  .cp-pane__header-actions {
    display: flex;
    align-items: center;
    gap: var(--c-spacing-sm);
  }

  .cp-pane__body {
    padding: var(--_pane-spacing);
  }

  .cp-pane__footer {
    display: flex;
    align-items: center;
    background-color: var(--_pane-background);
    border-block-start: 1px solid var(--_pane-divider-color);
    padding-inline: var(--_pane-spacing);
    padding-block: calc(var(--_pane-spacing) / 2);
    position: sticky;
    inset-block-end: 0;
    z-index: var(--c-layer-sticky, 10);
  }

  .cp-pane__spacer {
    flex: 1 1 0%;
  }

  .cp-pane__footer-actions {
    display: flex;
    gap: var(--c-spacing-md);
    justify-content: end;
    align-items: center;
    align-self: end;
  }
`,rh={Raised:`raised`,Outline:`outline`,OutlineFill:`outline-fill`,Plain:`plain`,Sunken:`sunken`};Object.values(rh);var ih={Plain:`plain`,Error:`error`,Code:`code`};Object.values(ih);var ah=new Set([`clip`,`hidden`]),oh=class extends ar(d,{customProperty:`--_pane-spacing`,defaultValue:`lg`}){constructor(...e){super(...e),this.appearance=rh.Raised,this.variant=ih.Plain,this.label=``,this.headingLevel=2,this._hasSlottedHeader=!1,this._hasSlottedFooter=!1,this._scrollable=!1,this._hostLabel=``,this._lightDom=new se(this,{attributeFilter:[`aria-label`],characterData:!0,onChange:()=>this._syncLightDom()}),this._observedBoxes=new Set}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect(),this._observedBoxes.clear()}get _scroller(){return this.renderRoot?.querySelector(`.cp-pane`)??null}_syncSlotPresence(){this._hasSlottedHeader=ce(this,`header`,`title`,`header-actions`),this._hasSlottedFooter=ce(this,`footer`,`footer-content`,`feedback`,`actions`,`primary-action`,`secondary-action`)}_syncLightDom(){this._syncSlotPresence(),this._hostLabel=this.getAttribute(`aria-label`)??``,this._syncScrollable(),this._observeScrollable()}_syncScrollable(){let e=this._scroller;if(!e?.isConnected){this._scrollable=!1;return}let{overflowX:t,overflowY:n}=getComputedStyle(e);this._scrollable=!ah.has(n)&&e.scrollHeight-e.clientHeight>1||!ah.has(t)&&e.scrollWidth-e.clientWidth>1}_observeScrollable(){if(typeof ResizeObserver>`u`)return;let e=this._resizeObserver??=new ResizeObserver(()=>this._syncScrollable()),t=this._scroller,n=new Set(t?[t,...t.querySelectorAll(`.cp-pane__header, .cp-pane__body, .cp-pane__footer`),...this.children]:[]);for(let t of this._observedBoxes)n.has(t)||(e.unobserve(t),this._observedBoxes.delete(t));for(let t of n)this._observedBoxes.has(t)||(e.observe(t),this._observedBoxes.add(t))}get _scrollRegionLabel(){return this.label||this._hostLabel||n(`Scrollable region`)}focus(e){if(this._scrollable&&this._scroller){this._scroller.focus(e);return}super.focus(e)}updated(e){super.updated(e),this._observeScrollable()}_renderTitle(){let e=Lm(`h${Math.min(6,Math.max(1,Number(this.headingLevel)||2))}`);return Bm`<${e} class="cp-pane__title">${this.label}</${e}>`}render(){let e=!!this.label||this._hasSlottedHeader;return m`
      <div
        class="cp-pane"
        part="base"
        style="${cr(this.paddingStyles)}"
        tabindex="${this._scrollable?`0`:i}"
        role="${this._scrollable?`region`:i}"
        aria-label="${this._scrollable?this._scrollRegionLabel:i}"
      >
        ${e?m`<slot name="header">
              <div class="cp-pane__header" part="header">
                <slot name="title" part="title">
                  ${this.label?this._renderTitle():i}
                </slot>
                <div class="cp-pane__header-actions" part="header-actions">
                  <slot name="header-actions"></slot>
                </div>
              </div>
            </slot>`:i}

        <slot name="body">
          <div class="cp-pane__body" part="body">
            <slot></slot>
          </div>
        </slot>

        ${this._hasSlottedFooter?m`<slot name="footer">
              <div class="cp-pane__footer" part="footer">
                <slot name="footer-content">
                  <slot name="feedback"></slot>
                  <div class="cp-pane__spacer"></div>
                  <slot name="actions">
                    <div class="cp-pane__footer-actions" part="footer-actions">
                      <slot name="secondary-action"></slot>
                      <slot name="primary-action"></slot>
                    </div>
                  </slot>
                </slot>
              </div>
            </slot>`:i}
      </div>
    `}};oh.styles=[re,nh],r([c({reflect:!0})],oh.prototype,`appearance`,void 0),r([c({reflect:!0})],oh.prototype,`variant`,void 0),r([c()],oh.prototype,`label`,void 0),r([c({type:Number,attribute:`heading-level`})],oh.prototype,`headingLevel`,void 0),r([p()],oh.prototype,`_hasSlottedHeader`,void 0),r([p()],oh.prototype,`_hasSlottedFooter`,void 0),r([p()],oh.prototype,`_scrollable`,void 0),r([p()],oh.prototype,`_hostLabel`,void 0),customElements.get(`craft-pane`)||customElements.define(`craft-pane`,oh);var sh=`:is(craft-checkbox, craft-checkbox-indeterminate) > input[type="checkbox"], input[type="checkbox"].cp-checkbox, craft-radio > input[type="radio"], input[type="radio"].cp-radio {
  appearance: none;
  line-height: inherit;
  margin-block: calc((1lh - var(--c-checkbox-size)) / 2);
  width: var(--c-checkbox-size);
  height: var(--c-checkbox-size);
  border: var(--c-form-control-border-width) var(--c-form-control-border-style)
    var(--c-checkbox-border-color, var(--c-form-control-border-color));
  border-radius: var(--c-checkbox-radius);
  background-color: var(--c-input-fill);
  color: var(--c-checkbox-checked-mark, var(--c-color-accent-on-loud));
  cursor: pointer;
  flex-shrink: 0;
  place-items: center;
  margin-inline: 0;
  display: inline-grid;

  &:before {
    content: "";
    aspect-ratio: 1;
    visibility: hidden;
    background-color: currentColor;
    width: 65%;
  }

  &:checked {
    background-color: var(--c-checkbox-checked-fill, var(--c-color-accent-fill-loud));
    border-color: #0000;

    &:before {
      visibility: visible;
    }
  }

  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }

  @media (forced-colors: active) {
    &:checked {
      border-color: highlight;
    }

    &:before {
      forced-color-adjust: none;
      background-color: highlight;
    }
  }
}

:is(craft-checkbox, craft-checkbox-indeterminate) > input[type="checkbox"], input[type="checkbox"].cp-checkbox {
  &:before {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 255.8 234.9'%3E%3Cpath d='M245.9,4.6c-10.7-7.8-25.7-5.4-33.5,5.3l-119.4,164.2-52.1-52.1c-9.4-9.4-24.6-9.4-33.9,0-9.3,9.4-9.4,24.6,0,33.9l72,72c5,5,11.8,7.5,18.8,7s13.4-4.1,17.5-9.8L251.2,38.1c7.8-10.7,5.4-25.7-5.3-33.5Z'/%3E%3C/svg%3E");
    mask-position: center;
    mask-size: contain;
    mask-repeat: no-repeat;
  }

  &:indeterminate {
    background-color: var(--c-checkbox-checked-fill, var(--c-color-accent-fill-loud));
    border-color: #0000;

    &:before {
      visibility: visible;
      aspect-ratio: auto;
      border-radius: 1px;
      width: 55%;
      height: 2px;
      mask-image: none;
    }

    @media (forced-colors: active) {
      border-color: highlight;
    }
  }
}

craft-radio > input[type="radio"], input[type="radio"].cp-radio {
  border-radius: 50%;

  &:before {
    border-radius: 50%;
    width: 40%;
  }
}

craft-radio[data-button] > input[type="radio"] {
  border-radius: inherit;
  border: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  position: absolute;
  inset: 0;

  &, &:checked {
    background-color: #0000;
  }

  &:checked {
    cursor: default;
  }

  &:before {
    display: none;
  }

  &:disabled {
    opacity: 1;
  }
}

craft-radio[data-card] > input[type="radio"] {
  border: 0;
  border-radius: 0;
  outline: none;
  width: 100%;
  height: 100%;
  margin: 0;
  position: absolute;
  inset: 0;

  &, &:checked {
    background-color: #0000;
  }

  &:checked {
    cursor: default;
  }

  &:before {
    display: none;
  }

  &:disabled {
    opacity: 1;
  }
}

craft-radio > [slot="icon"] {
  block-size: var(--c-radio-icon-size);
  inline-size: auto;
  min-inline-size: 0;
  max-inline-size: 100%;
  margin-block: calc((1lh - var(--c-radio-icon-size)) / 2);
  object-fit: contain;
  flex-shrink: 0;
  display: block;

  & > svg {
    block-size: 100%;
    inline-size: 100%;
    display: block;
  }
}

craft-radio[data-card] > [slot="icon"] {
  block-size: var(--c-radio-card-icon-size);
  margin-block: 0;
}

craft-radio[data-card][checked] > [slot="icon"] {
  --c-illustration-surface: var(--color-base-50);
  --c-illustration-line: var(--color-blue-500);
}

craft-radio[data-button][data-button-start] > input[type="radio"] {
  border-start-start-radius: calc(var(--c-button-radius, var(--c-form-control-radius)) - 1px);
  border-end-start-radius: calc(var(--c-button-radius, var(--c-form-control-radius)) - 1px);
}

craft-radio[data-button][data-button-end] > input[type="radio"] {
  border-start-end-radius: calc(var(--c-button-radius, var(--c-form-control-radius)) - 1px);
  border-end-end-radius: calc(var(--c-button-radius, var(--c-form-control-radius)) - 1px);
}
`,ch=0,lh=new WeakMap,G=new WeakSet,uh=class extends d{constructor(...e){super(...e),x(this,G),this.groups=[],this.modelValue=[],this.lockedPermissions=[],this.name=``,this.disabled=!1,T(this,lh,++ch)}updated(e){super.updated(e),(e.has(`modelValue`)||e.has(`groups`)||e.has(`name`)||e.has(`disabled`))&&w(G,this,xh).call(this)}render(){let e=w(G,this,ph).call(this);return ds(this.groups,e=>e.handle,(t,n)=>w(G,this,dh).call(this,t,n,e))}};function dh(e,t,r){let a=`permission-tree-heading-${S(lh,this)}-${t}`;return m`
      <section class="group">
        ${e.heading?m`
              <div class="heading">
                <h3 id=${a}>${e.heading}</h3>
                <craft-button
                  type="button"
                  size="small"
                  variant="plain"
                  aria-describedby=${a}
                  ?disabled=${this.disabled}
                  @click=${()=>w(G,this,_h).call(this,e.keys,r)}
                >
                  ${w(G,this,gh).call(this,e.keys,r)?n(`Deselect all`):n(`Select all`)}
                </craft-button>
              </div>
            `:i}
        ${w(G,this,fh).call(this,e.permissions,0,this.disabled,r)}
      </section>
    `}function fh(e,t,n,r){return ds(Object.entries(e),([e])=>e,([e,a])=>{let o=a.key||e,s=w(G,this,hh).call(this,o,r),c=a.nested??{};return m`
          <ul>
            <li>
              <craft-checkbox
                class=${t>0?`indented`:``}
                style=${`--permission-level: ${t}`}
                .label=${a.label}
                .choiceValue=${o}
                .checked=${s}
                .disabled=${n||w(G,this,mh).call(this,o,r)}
                @model-value-changed=${e=>w(G,this,vh).call(this,e,o,c,r)}
              >
                ${a.info||a.warning?m`
                      <div slot="help-text">
                        ${a.info??i}
                        ${a.warning?m`
                              <craft-callout
                                variant="warning"
                                appearance="plain"
                                inline
                              >
                                ${a.warning}
                              </craft-callout>
                            `:i}
                      </div>
                    `:i}
              </craft-checkbox>

              ${Object.keys(c).length?w(G,this,fh).call(this,c,t+1,n||!s,r):i}
            </li>
          </ul>
        `})}function ph(){return new Set(this.lockedPermissions.map(e=>e.toLowerCase()))}function mh(e,t){return t.has(e.toLowerCase())}function hh(e,t){return this.modelValue.includes(e)||w(G,this,mh).call(this,e,t)}function gh(e,t){let n=e.filter(e=>!w(G,this,mh).call(this,e,t));return n.length>0&&n.every(e=>this.modelValue.includes(e))}function _h(e,t){let n=e.filter(e=>!w(G,this,mh).call(this,e,t));if(w(G,this,gh).call(this,e,t)){let e=new Set(n);w(G,this,bh).call(this,this.modelValue.filter(t=>!e.has(t)));return}w(G,this,bh).call(this,[...new Set([...this.modelValue,...n])])}function vh(e,t,n,r){if(e.stopPropagation(),this.disabled||w(G,this,mh).call(this,t,r))return;let i=e.currentTarget.checked,a=this.modelValue.indexOf(t);if(i&&a===-1){w(G,this,bh).call(this,[...this.modelValue,t]);return}if(i||a===-1)return;let o=new Set([t,...w(G,this,yh).call(this,n)]);w(G,this,bh).call(this,this.modelValue.filter(e=>!o.has(e)))}function yh(e){return Object.values(e).flatMap(e=>[e.key,...w(G,this,yh).call(this,e.nested??{})])}function bh(e){this.modelValue=e,this.dispatchEvent(new CustomEvent(`model-value-changed`,{bubbles:!0,composed:!0,detail:{isTriggeredByUser:!0}})),ol(this),sl(this)}function xh(){if(this.querySelectorAll(`[data-permission-tree-input]`).forEach(e=>e.remove()),!this.name||this.disabled)return;w(G,this,Sh).call(this,this.name,``);let e=new Set(this.groups.flatMap(e=>e.keys));for(let t of this.modelValue)e.has(t)&&w(G,this,Sh).call(this,`${this.name}[]`,t)}function Sh(e,t){let n=document.createElement(`input`);n.type=`hidden`,n.name=e,n.value=t,n.dataset.permissionTreeInput=``,this.append(n)}uh.styles=[u(sh),o`
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none;
      }

      .group + .group {
        margin-block-start: var(--c-spacing-lg);
      }

      .heading {
        display: flex;
        align-items: center;
        gap: var(--c-spacing-sm);
      }

      h3 {
        margin: 0;
        font-size: var(--c-font-size-lg);
      }

      ul {
        margin-block: var(--c-spacing-sm);
        padding: 0;
        list-style: none;
      }

      craft-checkbox.indented {
        position: relative;
        --gap-x: calc((var(--permission-level) * 1lh) + var(--c-spacing-md));
      }

      craft-checkbox.indented::before {
        content: '';
        position: absolute;
        inset-block-start: calc(1lh / 2);
        inset-inline-start: calc(
          var(--c-size-control-2xs) + (var(--c-spacing) * 2)
        );
        width: calc(var(--gap-x) - (var(--c-spacing) * 3.5));
        height: 1px;
        background-color: var(--c-color-neutral-border-quiet);
      }
    `],r([c({type:Array})],uh.prototype,`groups`,void 0),r([c({type:Array,attribute:`model-value`})],uh.prototype,`modelValue`,void 0),r([c({type:Array,attribute:`locked-permissions`})],uh.prototype,`lockedPermissions`,void 0),r([c()],uh.prototype,`name`,void 0),r([c({type:Boolean,reflect:!0})],uh.prototype,`disabled`,void 0),customElements.get(`craft-permission-tree`)||customElements.define(`craft-permission-tree`,uh);var Ch=o`
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
    --_stripe-size: calc(var(--_height) * 2);
    width: 100%;
    background-color: var(--_track-color);
    background-image: linear-gradient(
      -45deg,
      var(--_fill-color) 25%,
      transparent 25%,
      transparent 50%,
      var(--_fill-color) 50%,
      var(--_fill-color) 75%,
      transparent 75%
    );
    background-size: var(--_stripe-size) var(--_stripe-size);
    animation: progress-bar-pending 1s linear infinite;
  }

  @keyframes progress-bar-pending {
    from {
      background-position: 0 0;
    }
    to {
      background-position: var(--_stripe-size) 0;
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
`,wh=new WeakMap,Th=new WeakMap,Eh=class extends d{constructor(...e){super(...e),this.progress=0,this.total=0,this.processed=0,this.showStatus=!1,this.pending=!1,this.smooth=!1,this.label=`Progress`,T(this,wh,0),T(this,Th,!1)}willUpdate(e){if(super.willUpdate(e),(e.has(`total`)||e.has(`processed`))&&this.total>0){let e=Math.min(100,Math.round(this.processed/this.total*100));e>=100&&S(wh,this)<100&&C(Th,this,!0),this.progress=e}e.has(`progress`)&&(this.progress>0&&this.pending&&(this.pending=!1),C(wh,this,this.progress))}updated(e){super.updated(e),S(Th,this)&&(C(Th,this,!1),this.dispatchEvent(new CustomEvent(`craft-complete`,{bubbles:!0,composed:!0})))}get progressPercent(){return Math.min(100,Math.max(0,this.progress))}get statusText(){return this.total>0?`${this.processed} / ${this.total}`:`${this.progressPercent}%`}reset(){this.progress=0,this.processed=0,this.pending=!0,C(wh,this,0)}show(){this.hidden=!1}hide(){this.hidden=!0}render(){let e={width:this.pending?`100%`:`${this.progressPercent}%`};return m`
      <div
        class=${O({"progress-bar":!0,"progress-bar--pending":this.pending})}
        part="track"
        role="progressbar"
        aria-valuenow=${this.pending?i:this.progressPercent}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.label}
      >
        <div
          class=${O({"progress-bar__fill":!0,"progress-bar__fill--smooth":this.smooth&&!this.pending})}
          part="fill"
          style=${cr(e)}
        ></div>
      </div>
      ${this.showStatus?m`<div class="progress-bar__status" part="status">
            ${this.statusText}
          </div>`:i}
      <span class="visually-hidden">
        ${this.pending?`Loading`:`${this.progressPercent}%`}
      </span>
    `}};Eh.styles=[Ch],r([c({type:Number})],Eh.prototype,`progress`,void 0),r([c({type:Number})],Eh.prototype,`total`,void 0),r([c({type:Number})],Eh.prototype,`processed`,void 0),r([c({type:Boolean,attribute:`show-status`})],Eh.prototype,`showStatus`,void 0),r([c({type:Boolean,reflect:!0})],Eh.prototype,`pending`,void 0),r([c({type:Boolean})],Eh.prototype,`smooth`,void 0),r([c({type:String})],Eh.prototype,`label`,void 0),customElements.get(`craft-progress-bar`)||customElements.define(`craft-progress-bar`,Eh);var Dh=class extends Ei(Ai(d)){connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`radiogroup`)}resetGroup(){let e;this.formElements.forEach(t=>{typeof t.resetGroup==`function`?t.resetGroup():typeof t.reset==`function`&&(t.reset(),t.checked&&(e=t.choiceValue))}),this.modelValue=e,this.resetInteractionState()}},Oh=class extends Oi(ji){connectedCallback(){super.connectedCallback(),this.type=`radio`}},kh=class extends pr(Qo(Dh,`radio`)){constructor(...e){super(...e),this._wrapped=!1,this._resizeObserver=new ResizeObserver(()=>this._fitRow())}render(){return m`${super.render()}
      <div class="fit-probe" aria-hidden="true"></div>
      <div class="row-size" aria-hidden="true"></div>`}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{let e=this.shadowRoot?.querySelector(`.fit-probe`);e&&this.isConnected&&this._resizeObserver.observe(e)})}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver.disconnect()}addFormElement(e,t){super.addFormElement(e,t),e instanceof HTMLElement&&this._resizeObserver.observe(e),this._syncButtons(),this._fitRow()}removeFormElement(e){super.removeFormElement(e),e instanceof HTMLElement&&this._resizeObserver.unobserve(e),this._syncButtons(),this._fitRow()}updated(e){super.updated(e),e.has(`appearance`)&&(this._syncButtons(),this._fitRow())}_syncButtons(){let e=this.appearance,t=e===`buttons`||e===`button-group`,n=e===`cards`||e===`card-group`,r=(e===`button-group`||e===`card-group`)&&!this._wrapped,i=Array.from(this.formElements);this.style.setProperty(`--_card-count`,String(i.length)),i.forEach((e,a)=>{let o=!r||a===0,s=!r||a===i.length-1;e.toggleAttribute(`data-button`,t),e.toggleAttribute(`data-button-start`,t&&o),e.toggleAttribute(`data-button-end`,t&&s),e.toggleAttribute(`data-card`,n),e.toggleAttribute(`data-card-start`,n&&o),e.toggleAttribute(`data-card-end`,n&&s)})}_fitRow(){let e=!1,t=this.appearance;if(t===`button-group`||t===`card-group`){let n=Array.from(this.formElements),r=n.reduce((e,n)=>e+(t===`card-group`?parseFloat(getComputedStyle(n).minWidth):n.getBoundingClientRect().width),-(n.length-1));e=this.clientWidth<r}e!==this._wrapped&&(this._wrapped=e,this.toggleAttribute(`data-wrapped`,e),this._syncButtons())}static get styles(){return[...super.styles,tr,o`
        .fit-probe {
          block-size: 0;
        }

        .input-group {
          display: grid;
          gap: var(--c-spacing-xs);
        }

        :host([appearance]) ::slotted(:not(craft-radio)) {
          display: contents;
        }

        :host([appearance='button-group']) .input-group {
          display: flex;
          flex-wrap: wrap;
          width: fit-content;
          gap: 0;
        }

        :host([appearance='buttons']) .input-group,
        :host([appearance='button-group'][data-wrapped]) .input-group {
          display: flex;
          flex-wrap: wrap;
          gap: var(--c-spacing-sm);
        }

        /*
          A row of cards is as wide as they are at their largest, so a few
          don't stretch. It's capped by the container, so a grid or flex parent
          can shrink the group and wrap it. The row's width still reaches a
          container that sizes to its content, through .row-size.
        */
        :host([appearance='cards']) {
          --_row-size: calc(
            var(--_card-count, 1) * var(--c-radio-card-max-size) +
              (var(--_card-count, 1) - 1) * var(--c-spacing-sm)
          );
        }

        :host([appearance='card-group']) {
          --_row-size: calc(
            var(--_card-count, 1) * (var(--c-radio-card-max-size) - 1px) + 1px
          );
        }

        :host([appearance='cards']),
        :host([appearance='card-group']) {
          min-inline-size: 0;
          inline-size: min(100%, var(--_row-size));
        }

        .row-size {
          block-size: 0;
          inline-size: var(--_row-size, 0);
          max-inline-size: 100%;
        }

        :host([appearance='card-group']) .input-group {
          grid-auto-flow: column;
          grid-auto-columns: minmax(
            var(--c-radio-card-min-size),
            var(--c-radio-card-max-size)
          );
          justify-content: start;
          align-items: start;
          gap: 0;
        }

        :host([appearance='cards']) .input-group,
        :host([appearance='card-group'][data-wrapped]) .input-group {
          grid-auto-flow: row;
          grid-template-columns: repeat(
            auto-fill,
            minmax(var(--c-radio-card-min-size), 1fr)
          );
          align-items: start;
          gap: var(--c-spacing-md) var(--c-spacing-sm);
        }
      `]}};r([c({reflect:!0})],kh.prototype,`appearance`,void 0),customElements.get(`craft-radio-group`)||customElements.define(`craft-radio-group`,kh);var Ah=class extends rs(Oh){constructor(...e){super(...e),this._syncIconOnly=()=>{let e=this.querySelector(`:scope > [slot="label"]`);this.toggleAttribute(`data-icon-only`,!e?.textContent?.trim())}}render(){return m`<slot name="input"></slot>
      <div class="choice-field__icon" part="icon">
        <slot name="icon"></slot>
      </div>
      <div class="choice-field__label">
        <slot name="label"></slot>
      </div>
      <small class="choice-field__help-text">
        <slot name="help-text"></slot>
      </small>
      ${this._afterTemplate()}`}static get styles(){return[...super.styles,o`
        /*
         * Match the checkbox's gaps: space between the input and its label, but
         * none between rows, since the (often empty) help text wraps onto its own
         */
        :host {
          gap: 0 var(--c-spacing-md);
        }

        /* Without a box of its own, an empty icon slot takes up no space. */
        .choice-field__icon {
          display: contents;
        }

        :host([data-card]) {
          --_radius: var(--c-radius-lg);
          --_padding: calc(var(--c-spacing) * 3);
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          justify-items: center;
          align-content: start;
          gap: var(--c-spacing-xs);
          min-inline-size: var(--c-radio-card-min-size);
          text-align: center;
        }

        :host([data-card]) .choice-field__icon {
          display: grid;
          place-items: center;
          box-sizing: border-box;
          inline-size: 100%;
          padding: var(--_padding);
          border: 1px solid var(--c-form-control-border-color);
          background-color: transparent;
        }

        :host([data-card]:not([data-card-start])) {
          margin-inline-start: -1px;
        }

        :host([data-card]:not([data-card-start])) .choice-field__icon {
          border-inline-start-color: var(--c-color-neutral-border-quiet);
        }

        :host([data-card]:not([data-card-end])) .choice-field__icon {
          border-inline-end-color: var(--c-color-neutral-border-quiet);
        }

        :host([data-card][data-card-start]) .choice-field__icon {
          border-start-start-radius: var(--_radius);
          border-end-start-radius: var(--_radius);
        }

        :host([data-card][data-card-end]) .choice-field__icon {
          border-start-end-radius: var(--_radius);
          border-end-end-radius: var(--_radius);
        }

        :host([data-card]) .choice-field__label {
          font-size: var(--c-text-sm);
          color: var(--c-text-quiet);
        }

        :host([data-card]) .choice-field__help-text {
          display: none;
        }

        @media (hover: hover) {
          :host([data-card]:not([checked]):not([disabled]):hover) {
            z-index: 1;
          }

          :host([data-card]:not([checked]):not([disabled]):hover)
            .choice-field__icon {
            background-color: var(--c-color-neutral-fill-quiet);
          }
        }

        :host([data-card][checked]) {
          z-index: 1;
        }

        :host([data-card][checked]) .choice-field__icon {
          padding: calc(var(--_padding) - 1px);
          border: 2px solid var(--c-color-accent-border-normal);
          background-color: var(--c-color-accent-fill-quiet);
        }

        :host([data-card][checked]) .choice-field__label {
          color: var(--c-text-default);
          font-weight: bold;
        }

        :host([data-card][focused-visible]) {
          z-index: 2;
        }

        :host([data-card][focused-visible]) .choice-field__icon {
          outline: var(--c-focus-outline-width) var(--c-focus-outline-style)
            var(--c-color-focus-outline);
          outline-offset: 1px;
        }

        :host([data-card][disabled]) {
          opacity: 0.5;
        }

        @media (forced-colors: active) {
          :host([data-card]) .choice-field__icon {
            border-color: ButtonBorder;
          }

          :host([data-card][checked]) .choice-field__icon {
            border-color: Highlight;
          }

          :host([data-card][checked]) .choice-field__label {
            color: CanvasText;
          }
        }

        :host([data-button]) {
          --_radius: var(--c-button-radius, var(--c-form-control-radius));
          position: relative;
          display: inline-flex;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: center;
          gap: 0;
          box-sizing: border-box;
          min-height: var(--c-size-control-md);
          min-width: var(--c-size-control-md);
          padding-inline: var(--c-form-control-spacing-inline);
          border: 1px solid var(--c-form-control-border-color);
          border-radius: 0;
          background-color: transparent;
          color: var(--c-color-neutral-on-quiet);
          white-space: nowrap;
        }

        :host([data-button]:not([data-button-start])) {
          margin-inline-start: -1px;
          border-inline-start-color: var(--c-color-neutral-border-quiet);
        }

        :host([data-button]:not([data-button-end])) {
          border-inline-end-color: var(--c-color-neutral-border-quiet);
        }

        :host([data-button][data-button-start]) {
          border-start-start-radius: var(--_radius);
          border-end-start-radius: var(--_radius);
        }

        :host([data-button][data-button-end]) {
          border-start-end-radius: var(--_radius);
          border-end-end-radius: var(--_radius);
        }

        :host([data-button][data-icon-only]) {
          padding-inline: 0;
          aspect-ratio: 1;
        }

        :host([data-button]) .choice-field__help-text {
          display: none;
        }

        @media (hover: hover) {
          :host([data-button]:not([checked]):not([disabled]):hover) {
            z-index: 1;
            background-color: color-mix(
              in oklab,
              var(--c-color-neutral-fill-quiet),
              var(--c-color-mix-hover)
            );
          }
        }

        :host([data-button][checked]) {
          z-index: 1;
          background-color: var(--c-color-neutral-fill-loud);
          border-color: var(--c-color-neutral-border-loud);
          color: var(--c-color-neutral-on-loud);
        }

        :host([data-button][focused-visible]) {
          z-index: 2;
        }

        :host([data-button][disabled]) {
          opacity: 0.5;
        }

        @media (forced-colors: active) {
          :host([data-button]) {
            border-color: ButtonBorder;
          }

          :host([data-button][checked]) {
            background-color: Highlight;
            border-color: Highlight;
            color: HighlightText;
          }
        }
      `]}firstUpdated(e){super.firstUpdated(e),this.shadowRoot?.querySelector(`slot[name="label"]`)?.addEventListener(`slotchange`,this._syncIconOnly),this._syncIconOnly()}};customElements.get(`craft-radio`)||customElements.define(`craft-radio`,Ah);var jh=class extends Rt(Ii){static get styles(){return[...super.styles,o`
        :host {
          justify-content: space-between;
          align-items: center;
        }

        #content-wrapper {
          position: relative;
          pointer-events: none;
        }
      `]}static get properties(){return{selectedElement:{type:Object},hostElement:{type:Object},readOnly:{type:Boolean,reflect:!0,attribute:`readonly`},singleOption:{type:Boolean,reflect:!0,attribute:`single-option`}}}get slots(){return{...super.slots,after:()=>{let e=document.createElement(`span`);return e.textContent=`▼`,e.setAttribute(`role`,`img`),e.setAttribute(`aria-hidden`,`true`),e}}}get _contentWrapperNode(){return this.shadowRoot.getElementById(`content-wrapper`)}constructor(){super(),this.readOnly=!1,this.selectedElement=null,this.hostElement=null,this.singleOption=!1,this.type=`button`}__handleKeydown(e){switch(e.key){case`ArrowDown`:case`ArrowUp`:e.preventDefault()}}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this.__handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.__handleKeydown)}_contentTemplate(){if(this.selectedElement){let e=Array.from(this.selectedElement.childNodes);return e.length>0?e.map(e=>e.cloneNode(!0)):this.selectedElement.textContent}return this._noSelectionTemplate()}render(){return m` ${this._beforeTemplate()} ${super.render()} ${this._afterTemplate()} `}_noSelectionTemplate(){return m``}_beforeTemplate(){return m` <div id="content-wrapper">${this._contentTemplate()}</div> `}_afterTemplate(){return m`${this.singleOption?``:m`<slot name="after"></slot>`}`}};function Mh(){return Bt.isMac?`mac`:`windows/linux`}var Nh=class extends Rt(ri(Cn(ul))){static get scopedElements(){return{...super.scopedElements,"lion-select-invoker":jh}}static get properties(){return{navigateWithinInvoker:{type:Boolean,attribute:`navigate-within-invoker`},interactionMode:{type:String,attribute:`interaction-mode`},singleOption:{type:Boolean,reflect:!0,attribute:`single-option`}}}_inputGroupInputTemplate(){return m`
      <div class="input-group__input">
        <slot name="invoker"></slot>
        <div id="overlay-content-node-wrapper">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      </div>
    `}get slots(){return{...super.slots,invoker:()=>m`<lion-select-invoker></lion-select-invoker>`}}get _invokerNode(){return Array.from(this.children).find(e=>e.slot===`invoker`)}get _focusableNode(){return this._invokerNode}get _scrollTargetNode(){return this._overlayContentNode._scrollTargetNode||this._overlayContentNode}constructor(){super(),this.navigateWithinInvoker=!1,this.interactionMode=`auto`,this.singleOption=!1,this._arrowWidth=28,this.__onKeyUp=this.__onKeyUp.bind(this),this.__invokerOnBlur=this.__invokerOnBlur.bind(this),this.__overlayOnHide=this.__overlayOnHide.bind(this),this.__overlayOnShow=this.__overlayOnShow.bind(this),this.__invokerOnClick=this.__invokerOnClick.bind(this),this.__overlayBeforeShow=this.__overlayBeforeShow.bind(this),this._listboxOnClick=this._listboxOnClick.bind(this)}connectedCallback(){super.connectedCallback(),this.registrationComplete.then(()=>{this._invokerNode.selectedElement=this.formElements[this.checkedIndex]}),this._invokerNode.hostElement=this,this.__setupInvokerNode(),this.__toggleInvokerDisabled(),this.addEventListener(`keyup`,this.__onKeyUp)}disconnectedCallback(){super.disconnectedCallback(),this.__teardownInvokerNode(),this.removeEventListener(`keyup`,this.__onKeyUp)}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`interactionMode`&&(this.interactionMode===`auto`?this.interactionMode=Mh():(this.selectionFollowsFocus=this.interactionMode===`windows/linux`,this.navigateWithinInvoker=this.interactionMode===`windows/linux`)),(e===`disabled`||e===`readOnly`)&&this.__toggleInvokerDisabled()}updated(e){super.updated(e),e.has(`disabled`)&&(this.disabled?this._invokerNode.makeRequestToBeDisabled():this._invokerNode.retractRequestToBeDisabled()),e.has(`singleOption`)&&(this.singleOption?(this._invokerNode.removeAttribute(`role`),this._invokerNode.removeAttribute(`aria-haspopup`),this._invokerNode.removeAttribute(`aria-expanded`)):(this._invokerNode.setAttribute(`role`,`button`),this._invokerNode.setAttribute(`aria-haspopup`,`listbox`),this._invokerNode.setAttribute(`aria-expanded`,`${this.opened}`))),this._inputNode&&this._invokerNode&&(e.has(`_ariaLabelledNodes`)&&this._invokerNode.setAttribute(`aria-labelledby`,`${this._inputNode.getAttribute(`aria-labelledby`)} ${this._invokerNode.id}`),e.has(`_ariaDescribedNodes`)&&this._invokerNode.setAttribute(`aria-describedby`,this._inputNode.getAttribute(`aria-describedby`)),e.has(`showsFeedbackFor`)&&this._invokerNode.setAttribute(`aria-invalid`,`${this._hasFeedbackVisibleFor(`error`)}`)),e.has(`modelValue`)&&this.__syncInvokerElement()}addFormElement(e,t){super.addFormElement(e,t),!this.hasNoDefaultSelected&&!this.__hasInitialSelectedFormElement&&(!e.disabled||this.disabled)&&(e.active=!0,e.checked=!0,this.__hasInitialSelectedFormElement=!0),this._alignInvokerWidth(),this._onFormElementsChanged()}removeFormElement(e){super.removeFormElement(e),this._alignInvokerWidth(),this._onFormElementsChanged()}_getCheckedElements(){return this.formElements.filter(e=>e.checked)}_onFormElementsChanged(){this.singleOption=this.formElements.length===1&&!this.hasNoDefaultSelected,this._invokerNode.singleOption=this.singleOption}__initInteractionStates(){this.initInteractionState()}__toggleInvokerDisabled(){this._invokerNode&&(this._invokerNode.disabled=this.disabled,this._invokerNode.readOnly=this.readOnly)}__syncInvokerElement(){this._invokerNode&&(this._invokerNode.selectedElement=this.formElements[this.checkedIndex],this._invokerNode.requestUpdate(`selectedElement`))}__setupInvokerNode(){this._invokerNode.id=`invoker-${this._inputId}`,this._invokerNode.setAttribute(`aria-haspopup`,`listbox`),this.__setupInvokerNodeEventListener()}__invokerOnClick(){!this.disabled&&!this.readOnly&&!this.singleOption&&!this.__blockListShow&&this._overlayCtrl.toggle()}__invokerOnBlur(){this.dispatchEvent(new Event(`blur`))}__setupInvokerNodeEventListener(){this._invokerNode.addEventListener(`click`,this.__invokerOnClick),this._invokerNode.addEventListener(`blur`,this.__invokerOnBlur)}__teardownInvokerNode(){this._invokerNode.removeEventListener(`click`,this.__invokerOnClick),this._invokerNode.removeEventListener(`blur`,this.__invokerOnBlur)}_defineOverlayConfig(){return{...En(),visibilityTriggerFunction:void 0}}_noDefaultSelectedInheritsWidth(){this.checkedIndex===-1?this._overlayCtrl.updateConfig({inheritsReferenceWidth:`min`}):this._overlayCtrl.updateConfig({inheritsReferenceWidth:this._initialInheritsReferenceWidth})}__overlayBeforeShow(){this.hasNoDefaultSelected&&this._noDefaultSelectedInheritsWidth(),this._listboxNode.setAttribute(`autofocus`,``)}__overlayOnShow(){this.checkedIndex!=null&&(this.activeIndex=this.checkedIndex),this._listboxNode.focus()}__overlayOnHide(){this._invokerNode.focus(),this._listboxNode.removeAttribute(`autofocus`)}_setupOverlayCtrl(){super._setupOverlayCtrl(),this._initialInheritsReferenceWidth=this._overlayCtrl.inheritsReferenceWidth,this._alignInvokerWidth(),this._overlayCtrl.addEventListener(`before-show`,this.__overlayBeforeShow),this._overlayCtrl.addEventListener(`show`,this.__overlayOnShow),this._overlayCtrl.addEventListener(`hide`,this.__overlayOnHide)}_teardownOverlayCtrl(){super._teardownOverlayCtrl(),this._overlayCtrl.removeEventListener(`show`,this.__overlayOnShow),this._overlayCtrl.removeEventListener(`before-show`,this.__overlayBeforeShow),this._overlayCtrl.removeEventListener(`hide`,this.__overlayOnHide)}async _alignInvokerWidth(){if(await this.updateComplete,!this._overlayCtrl?.content)return;let e=this._overlayCtrl.content.style.display,t=this._overlayCtrl.contentWrapperNode.style.minWidth,n=this._overlayCtrl.contentWrapperNode.style.width;this._overlayCtrl.content.style.display=``,this._overlayCtrl.contentWrapperNode.style.minWidth=`auto`,this._overlayCtrl.contentWrapperNode.style.width=`auto`;let r=this._overlayCtrl.contentWrapperNode.getBoundingClientRect().width;r>0&&(this._invokerNode.style.width=`${r+this._arrowWidth}px`),this._overlayCtrl.content.style.display=e,this._overlayCtrl.contentWrapperNode.style.minWidth=t,this._overlayCtrl.contentWrapperNode.style.width=n}_onLabelClick(){this._invokerNode.focus()}get _overlayInvokerNode(){return this._invokerNode}get _overlayContentNode(){return this._listboxNode}__onKeyUp(e){if(this.disabled||this.readOnly||this.singleOption||this.opened)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});let{key:t}=e;switch(t){case`ArrowUp`:e.preventDefault(),this.navigateWithinInvoker?this.setCheckedIndex(this._getPreviousEnabledOption(this.checkedIndex)):this.opened=!0;break;case`ArrowDown`:e.preventDefault(),this.navigateWithinInvoker?this.setCheckedIndex(this._getNextEnabledOption(this.checkedIndex)):this.opened=!0;break;case`ArrowLeft`:e.preventDefault(),this.navigateWithinInvoker&&this.setCheckedIndex(this._getPreviousEnabledOption(this.checkedIndex));break;case`ArrowRight`:e.preventDefault(),this.navigateWithinInvoker&&this.setCheckedIndex(this._getNextEnabledOption(this.checkedIndex));break;default:this._noTypeAhead||this._handleTypeAhead(e,{setAsChecked:!0})}}_listboxOnKeyDown(e){if(super._listboxOnKeyDown(e),this.disabled)return;let{key:t}=e;switch(t){case`Tab`:if(this._overlayCtrl.config.trapsKeyboardFocus===!0)return;this.opened=!1;break;case`Escape`:this.opened=!1,this.__blockListShowDuringTransition();break;case`Enter`:case` `:this.opened=!1,this.__blockListShowDuringTransition();break}}_listboxOnClick(){this.opened=!1}_setupListboxNode(){super._setupListboxNode(),this._listboxNode.addEventListener(`click`,this._listboxOnClick)}_teardownListboxNode(){super._teardownListboxNode(),this._listboxNode&&this._listboxNode.removeEventListener(`click`,this._listboxOnClick)}__blockListShowDuringTransition(){this.__blockListShow=!0,setTimeout(()=>{this.__blockListShow=!1},200)}},Ph=o`
  :host {
    ${$n}
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--c-spacing-sm);
    cursor: pointer;
    padding-block: 0;
    padding-inline: var(--c-input-spacing-inline);
    font: inherit;
    overflow: clip;
  }

  /* The usual focus ring, standing off the control, in place of LionButton's
     hard-coded one (flush against its edge). As specific as LionButton's
     :focus:not([disabled]) rule, so it wins on order. Contexts that inset
     rings, such as table cells, do so through the same properties. */
  :host(:focus-visible:not([disabled])) {
    outline: var(--c-focus-outline-width) var(--c-focus-outline-style)
      var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
  }

  /* Replace LionButton's hard-coded hover, press, and disabled fills */
  :host(:hover) {
    background-color: color-mix(
      in oklab,
      var(--c-input-fill, var(--c-form-control-fill)),
      var(--c-color-mix-hover)
    );
  }

  :host(:active),
  :host([active]) {
    background-color: color-mix(
      in oklab,
      var(--c-input-fill, var(--c-form-control-fill)),
      var(--c-color-mix-active)
    );
  }

  :host([disabled]) {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: var(--c-input-fill, var(--c-form-control-fill));
    color: inherit;
  }

  #content-wrapper {
    position: relative;
    pointer-events: none;
    flex: 1 1 auto;
    /* Clipped for the ellipsis, but with room for the ring and shadow of
       content at its edges, such as a selected color's swatch. */
    overflow: clip;
    overflow-clip-margin: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .indicator {
    flex: 0 0 auto;
    font-size: 0.8em;
  }
`,Fh=class extends jh{static get styles(){return[...super.styles,Ph]}_afterTemplate(){return m`${this.singleOption?``:m`<craft-icon class="indicator" name="chevron-down"></craft-icon>`}`}},Ih=e=>{var t=new WeakMap,n=new WeakMap,i=new WeakMap;class a extends e{constructor(...e){super(...e),T(this,t,this.attachInternals()),T(this,n,null),T(this,i,!1),this.name=``,this.disabled=!1}_formValue(){return null}_restoreFormValue(e){}get form(){return S(t,this).form}get validity(){return S(t,this).validity}get validationMessage(){return S(t,this).validationMessage}get willValidate(){return S(t,this).willValidate}checkValidity(){return S(t,this).checkValidity()}reportValidity(){return S(t,this).reportValidity()}connectedCallback(){super.connectedCallback(),S(i,this)||(C(i,this,!0),C(n,this,this._formValue())),S(t,this).setFormValue(this._formValue())}updated(e){super.updated(e),S(t,this).setFormValue(this._formValue())}formDisabledCallback(e){this.disabled=e}formResetCallback(){this._restoreFormValue(S(n,this))}formStateRestoreCallback(e){this._restoreFormValue(e)}}return a.formAssociated=!0,r([c({reflect:!0})],a.prototype,`name`,void 0),r([c({type:Boolean,reflect:!0})],a.prototype,`disabled`,void 0),a},Lh=o`
  ${er}

  :host {
    width: 100%;
  }

  :host([small]) .input-group__input {
    --c-input-height: var(--c-size-control-sm);
  }

  .input-group__input {
    ${Qn}
  }

  /* Lion sets the field's width as an inline min-width, which wins over this cap on wider fields */
  #overlay-content-node-wrapper {
    position: absolute;
    width: 100%;
    max-inline-size: min(calc(360rem / 16), calc(100vw - var(--c-spacing-lg)));
  }

  ::slotted([slot='input']) {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--c-spacing-xs);
    border: 1px solid var(--c-color-neutral-border-quiet);
    border-radius: var(--c-radius-md);
    background-color: var(--c-surface-overlay);
    box-shadow: var(--c-shadow-sm);
    padding: var(--c-spacing-sm);
    max-height: calc(var(--c-spacing) * 60);
    overflow: auto;
  }
`,Rh=new WeakMap,zh=new WeakMap,Bh=new WeakSet,Vh=new WeakMap,Hh=class extends Ih(pr(Nh)){static get styles(){return[...super.styles,Lh]}static get scopedElements(){return{...super.scopedElements,"lion-select-invoker":Fh}}constructor(){super(),x(this,Bh),this.small=!1,this.ariaInvalid=null,T(this,Rh,void 0),T(this,zh,``),T(this,Vh,!1),this.addEventListener(`model-value-changed`,e=>{e.target===this&&(w(Bh,this,Wh).call(this),e.detail?.isTriggeredByUser&&(ol(this),sl(this)))})}_formValue(){return null}formResetCallback(){let e=this.formElements.find(e=>String(e.choiceValue)===S(zh,this));e&&(e.checked=!0)}connectedCallback(){super.connectedCallback(),this.registrationComplete.then(()=>{S(Vh,this)||(C(zh,this,Uh.call(w(Bh,this))),C(Vh,this,!0)),w(Bh,this,Wh).call(this)})}updated(e){super.updated(e),w(Bh,this,Wh).call(this),this._invokerNode?.setAttribute(`aria-invalid`,this.ariaInvalid??String(this._hasFeedbackVisibleFor(`error`)))}async _alignInvokerWidth(){if(await this.updateComplete,!this._overlayCtrl?.content)return;let e=this._overlayCtrl.content.style.display,t=this._overlayCtrl.contentWrapperNode.style.minWidth,n=this._overlayCtrl.contentWrapperNode.style.width;this._overlayCtrl.content.style.display=``,this._overlayCtrl.contentWrapperNode.style.minWidth=`auto`,this._overlayCtrl.contentWrapperNode.style.width=`auto`;let r=this._overlayCtrl.contentWrapperNode.getBoundingClientRect().width;r>0&&(this._invokerNode.style.minWidth=`min(${r}px, 100%)`,this._invokerNode.style.width=``),this._overlayCtrl.content.style.display=e,this._overlayCtrl.contentWrapperNode.style.minWidth=t,this._overlayCtrl.contentWrapperNode.style.width=n}_handleTypeAhead(e,t){e.metaKey||e.ctrlKey||e.altKey||super._handleTypeAhead(e,t)}_inputGroupInputTemplate(){return m`
      <div class="input-group__input">
        <slot name="invoker"></slot>
        <div id="overlay-content-node-wrapper">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      </div>
    `}};function Uh(){let e=this.modelValue;return e==null?``:String(e)}function Wh(){if(!this.name){S(Rh,this)?.remove();return}S(Rh,this)||(C(Rh,this,document.createElement(`input`)),S(Rh,this).type=`hidden`,S(Rh,this).slot=`form-value`),S(Rh,this).parentNode!==this&&this.append(S(Rh,this)),S(Rh,this).name=this.name,S(Rh,this).value=Uh.call(w(Bh,this)),S(Rh,this).disabled=this.disabled}r([c({reflect:!0,type:Boolean})],Hh.prototype,`small`,void 0),r([c({attribute:`aria-invalid`,reflect:!0})],Hh.prototype,`ariaInvalid`,void 0),customElements.get(`craft-select-rich`)||customElements.define(`craft-select-rich`,Hh);var Gh=new WeakMap;function Kh(e,t){let n=t;for(;n;){if(Gh.get(n)===e)return!0;n=Object.getPrototypeOf(n)}return!1}function qh(e){return t=>{if(Kh(e,t))return t;let n=e(t);return Gh.set(n,e),n}}var Jh={labelledBy:[`addToAriaLabelledBy`,`removeFromAriaLabelledBy`],describedBy:[`addToAriaDescribedBy`,`removeFromAriaDescribedBy`]},Yh=Object.keys(Jh),Xh=qh(e=>{var t=new WeakMap,n=new WeakSet;class i extends e{constructor(...e){super(...e),x(this,n),this.labelledBy=null,this.describedBy=null,T(this,t,{labelledBy:[],describedBy:[]})}connectedCallback(){super.connectedCallback();for(let e of Yh)w(n,this,a).call(this,e)}updated(e){super.updated(e);for(let t of Yh)e.has(t)&&w(n,this,a).call(this,t)}}function a(e){let[n,r]=Jh[e],i=this.getRootNode();if(typeof i.getElementById!=`function`)return;let a=(this[e]??``).split(/\s+/).filter(Boolean).map(e=>i.getElementById(e)).filter(e=>e!==null);for(let n of S(t,this)[e])a.includes(n)||this[r](n);for(let e of a)this[n](e,{reorder:!1});S(t,this)[e]=a}return r([c({attribute:`labelled-by`})],i.prototype,`labelledBy`,void 0),r([c({attribute:`described-by`})],i.prototype,`describedBy`,void 0),i}),Zh=o`
  :host {
    display: block;
  }
`;function Qh(e){return e.charAt(0).toUpperCase()+e.slice(1)}function $h(e){return e.startsWith(`#`)}var eg=new WeakSet,tg=class extends Xh(Hh){static get styles(){return[...super.styles,Zh]}_swatchTemplate(e){if(e===`__custom__`)return m`<span
        class="select-color__swatch"
        style="flex:0 0 auto;inline-size:1rem;block-size:1rem;"
        aria-hidden="true"
      ></span>`;let t=e===`__blank__`||e===`transparent`,n=`flex:0 0 auto;inline-size:1rem;block-size:1rem;border-radius:var(--c-radius-full);box-shadow:${[`0 0 0 1px var(--c-select-color-swatch-ring, transparent)`,`0 1px 1px rgb(0 0 0 / 20%)`,`inset 0 0 0 1px ${this._swatchBorder(e)}`].join(`, `)};`,r=$h(e)?e:e===`white`?`var(--c-surface-white)`:`var(--c-color-${e}-fill-quiet)`;return m`<span
      class="select-color__swatch"
      style="${t?n+`background:linear-gradient(45deg, var(--c-color-neutral-fill-quiet) 25%, transparent 25%),linear-gradient(-45deg, var(--c-color-neutral-fill-quiet) 25%, transparent 25%),linear-gradient(45deg, transparent 75%, var(--c-color-neutral-fill-quiet) 75%),linear-gradient(-45deg, transparent 75%, var(--c-color-neutral-fill-quiet) 75%);background-position:0 0, 0 0.25rem, 0.25rem -0.25rem, -0.25rem 0;background-size:0.5rem 0.5rem;`:n+`background-color:${r};`}"
      aria-hidden="true"
    ></span>`}_swatchBorder(e){if($h(e)||e===`transparent`)return this._swatchBorder(`__blank__`);switch(e){case`__blank__`:return`var(--c-select-color-swatch-edge, rgb(0 0 0 / 15%))`;case`black`:return`color-mix(in srgb, var(--c-color-black-on-quiet), transparent 80%)`;case`white`:return`var(--c-table-border-color)`;default:return`var(--c-color-${e}-border-quiet)`}}_optionTemplate(e,t){return m`<craft-option .choiceValue=${e}>
      <span
        class="select-color__option"
        style="display:flex;align-items:center;gap:var(--c-spacing-sm);"
      >
        ${this._swatchTemplate(e)}
        <span class="select-color__label" style="white-space:nowrap;"
          >${t}</span
        >
      </span>
    </craft-option>`}static get observedAttributes(){return[...super.observedAttributes,`model-value`]}attributeChangedCallback(e,t,n){if(e===`model-value`){this.modelValue=n??``;return}super.attributeChangedCallback(e,t,n)}constructor(){super(),x(this,eg),this.allowTransparent=!1,this.blankLabel=null,this.allowCustom=!1,this.colors=[...Oo],this.labels={},this.required=!1,this.hasNoDefaultSelected=!0}connectedCallback(){super.connectedCallback(),w(eg,this,ng).call(this)}updated(e){super.updated(e),(e.has(`colors`)||e.has(`labels`)||e.has(`allowTransparent`)||e.has(`blankLabel`)||e.has(`allowCustom`))&&w(eg,this,ng).call(this)}};function ng(){this._listboxNode&&s(m`${this.allowTransparent?this._optionTemplate(`__blank__`,this.blankLabel??n(`Transparent`)):i}${this.colors.map(e=>this._optionTemplate(e,this.labels[e]??($h(e)?e:n(Qh(e)))))}${this.allowCustom?this._optionTemplate(`__custom__`,n(`Custom…`)):i}`,this._listboxNode)}r([c({type:Boolean,reflect:!0,attribute:`allow-transparent`})],tg.prototype,`allowTransparent`,void 0),r([c({attribute:`blank-label`})],tg.prototype,`blankLabel`,void 0),r([c({type:Boolean,reflect:!0,attribute:`allow-custom`})],tg.prototype,`allowCustom`,void 0),r([c({type:Array})],tg.prototype,`colors`,void 0),r([c({type:Object})],tg.prototype,`labels`,void 0),r([c({type:Boolean,reflect:!0})],tg.prototype,`required`,void 0),customElements.get(`craft-select-color`)||customElements.define(`craft-select-color`,tg);var rg=class extends xi{static get properties(){return{autocomplete:{type:String}}}constructor(){super(),this.autocomplete=void 0}get _inputNode(){return Array.from(this.children).find(e=>e.slot===`input`)}},ig=class extends rg{get operationMode(){return`select`}connectedCallback(){super.connectedCallback(),this._inputNode.addEventListener(`change`,this._proxyChangeEvent),this.__selectObserver=new MutationObserver(()=>{this._syncValueUpwards(),this._calculateValues({source:`model`})}),this.__selectObserver.observe(this._inputNode,{attributes:!0,childList:!0,subtree:!0})}updated(e){super.updated(e),e.has(`disabled`)&&(this._inputNode.disabled=this.disabled,this.validate()),e.has(`name`)&&(this._inputNode.name=this.name),e.has(`autocomplete`)&&(this._inputNode.autocomplete=this.autocomplete)}disconnectedCallback(){super.disconnectedCallback(),this._inputNode.removeEventListener(`change`,this._proxyChangeEvent),this.__selectObserver?.disconnect()}formatter(e){let t=Array.from(this._inputNode.options).find(t=>t.value===e);return t?t.text:``}_reflectBackFormattedValueToUser(){this._reflectBackOn()&&(this.value=this.modelValue===void 0?``:this.modelValue)}_proxyChangeEvent(){this.dispatchEvent(new CustomEvent(`user-input-changed`,{bubbles:!0,composed:!0}))}},ag=o`
  ${er}

  :host {
    width: 100%;
  }

  :host([small]) .input-group__input {
    --c-input-height: var(--c-size-control-sm);
  }

  ::slotted(.form-control) {
    ${$n}
  }

  .input-group__input {
    ${Qn}
  }

  .indicator {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: var(--c-input-spacing-inline);
    transform: translateY(-50%);
    width: 1em;
    height: 1em;
  }
`,og=class extends pr(ig){constructor(...e){super(...e),this.small=!1}static get styles(){return[...super.styles,ag]}_inputGroupInputTemplate(){return m`
      <div class="input-group__input">
        <slot name="input"></slot>
        <craft-icon
          class="indicator"
          name="chevron-down"
          style="font-size: 0.8em"
        ></craft-icon>
      </div>
    `}};r([c({reflect:!0,type:Boolean})],og.prototype,`small`,void 0),customElements.get(`craft-select`)||customElements.define(`craft-select`,og);var sg=o`
  :host {
    display: inline-flex;
  }

  /* The ring goes around the current segment; !important beats the global ring. */
  :host(:focus-visible) {
    outline: none !important;
  }

  .slide-picker {
    --_segment-height: 1rem;
    --_segment-width: calc(8rem / 16);
    --_segment-border: var(--c-color-neutral-border-quiet);
    --_segment-active-border: var(--c-color-neutral-border-loud);
    --_segment-fill: var(
      --c-slide-picker-segment-fill,
      var(--c-color-neutral-fill-quiet)
    );
    --_segment-active-fill: var(
      --c-slide-picker-segment-active-fill,
      color-mix(
        in oklab,
        var(--c-color-neutral-fill-loud),
        var(--c-color-neutral-fill-normal) 70%
      )
    );
    --_segment-hover-fill: var(
      --c-slide-picker-segment-hover-fill,
      var(--c-color-neutral-fill-normal)
    );
    display: inline-flex;
    align-items: stretch;
    min-height: max(var(--_segment-height), var(--touch-target-size));
    outline: none;
  }

  .slide-picker__segment {
    inline-size: var(--_segment-width);
    block-size: var(--_segment-height);

    border: 1px solid var(--_segment-border);
    border-inline-start-width: 0;
    background-color: var(--_segment-fill);
    cursor: pointer;
    margin-block: auto;
  }

  .slide-picker__segment:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: var(--c-radius-sm);
    border-end-start-radius: var(--c-radius-sm);
  }

  .slide-picker__segment:last-child {
    border-start-end-radius: var(--c-radius-sm);
    border-end-end-radius: var(--c-radius-sm);
  }

  .slide-picker__segment.is-active {
    background-color: var(--_segment-active-fill);
    border-color: var(--_segment-active-border);
  }

  .slide-picker__segment.is-active:not(.is-last-active) {
    border-inline-end-color: var(--_segment-border);
  }

  :host(:not([readonly]):not([disabled]))
    .slide-picker:has(.slide-picker__segment:hover)
    .slide-picker__segment {
    background-color: transparent;
  }

  :host(:not([readonly]):not([disabled]))
    .slide-picker:has(.slide-picker__segment:hover)
    .slide-picker__segment:is(:hover, :has(~ .slide-picker__segment:hover)) {
    background-color: var(--_segment-hover-fill);
  }

  :host(:focus-visible) .slide-picker__segment.is-last-active {
    outline: var(--c-focus-outline-width) solid var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
    position: relative;
    z-index: 1;
  }

  :host([readonly]) .slide-picker__segment {
    cursor: default;
    opacity: 0.7;
  }

  @media (forced-colors: active) {
    .slide-picker__segment {
      background: Canvas;
      border-color: ButtonBorder;
    }

    .slide-picker__segment.is-active {
      background: Highlight;
      border-color: Highlight;
    }
  }
`,cg=new WeakSet,lg=new WeakMap,ug=class extends Ft(d){constructor(){super(),x(this,cg),this.min=0,this.max=100,this.step=10,this.value=``,this.readOnly=!1,this.valueText=String,T(this,lg,e=>{if(!dg.call(w(cg,this)))return;let t=w(cg,this,mg).call(this)?-this.step:this.step,n={ArrowUp:fg.call(w(cg,this))+this.step,ArrowDown:fg.call(w(cg,this))-this.step,ArrowRight:fg.call(w(cg,this))+t,ArrowLeft:fg.call(w(cg,this))-t,Home:this.min,End:this.max};e.key in n&&(e.preventDefault(),w(cg,this,hg).call(this,n[e.key]))}),this.addEventListener(`keydown`,S(lg,this))}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`slider`)}updated(e){super.updated(e),this.setAttribute(`aria-valuemin`,String(this.min)),this.setAttribute(`aria-valuemax`,String(this.max)),this.setAttribute(`aria-valuenow`,String(fg.call(w(cg,this)))),this.setAttribute(`aria-valuetext`,this.valueText(fg.call(w(cg,this)))),this.setAttribute(`aria-readonly`,String(this.readOnly)),this.setAttribute(`aria-disabled`,String(this.disabled))}render(){return m`
      <div class="slide-picker">
        ${w(cg,this,pg).call(this).map(e=>m`
            <span
              class=${O({"slide-picker__segment":!0,"is-active":e<=fg.call(w(cg,this)),"is-last-active":e===fg.call(w(cg,this))})}
              aria-hidden="true"
              @click=${()=>w(cg,this,hg).call(this,e)}
              title=${this.valueText(e)}
              >${i}</span
            >
          `)}
      </div>
    `}};function dg(){return!this.readOnly&&!this.disabled}function fg(){return this.value===``?this.min:Number(this.value)}function pg(){let{min:e,max:t,step:n}=this;if(n<=0||t<e)throw Error(`Invalid craft-slide-picker range configuration.`);let r=(t-e)/n;if(!Number.isInteger(r))throw Error(`Invalid craft-slide-picker step configuration for the provided range.`);return Array.from({length:r+1},(t,r)=>e+r*n)}function mg(){return(this.closest(`[dir]`)?.getAttribute(`dir`)??document.documentElement.getAttribute(`dir`))?.toLowerCase()===`rtl`}function hg(e){let t=Math.min(Math.max(e,this.min),this.max);!dg.call(w(cg,this))||t===fg.call(w(cg,this))||(this.value=String(t),this.dispatchEvent(new Event(`input`)))}ug.styles=[sg],r([c({type:Number})],ug.prototype,`min`,void 0),r([c({type:Number})],ug.prototype,`max`,void 0),r([c({type:Number})],ug.prototype,`step`,void 0),r([c()],ug.prototype,`value`,void 0),r([c({type:Boolean,reflect:!0,attribute:`readonly`})],ug.prototype,`readOnly`,void 0),r([c({attribute:!1})],ug.prototype,`valueText`,void 0),customElements.get(`craft-slide-picker-slider`)||customElements.define(`craft-slide-picker-slider`,ug);var gg=o`
  :host {
    display: block;
  }
`,_g=new WeakSet,vg=class extends Xh(pr(xi)){static get styles(){return[...super.styles,er,gg]}static get observedAttributes(){return[...super.observedAttributes,`model-value`]}constructor(){super(),x(this,_g),this.min=0,this.max=100,this.step=10,this.valueUnit=``,this.addEventListener(`model-value-changed`,e=>{e.target===this&&e.detail?.isTriggeredByUser&&(ol(this),sl(this))})}get slots(){return{...super.slots,input:()=>document.createElement(`craft-slide-picker-slider`),"hidden-input":()=>({template:m`${this.name?m`<input
              type="hidden"
              name=${this.name}
              .value=${String(this.modelValue)}
              ?disabled=${this.disabled}
            />`:i}`})}}attributeChangedCallback(e,t,n){if(e===`model-value`){this.modelValue=n===null?``:Number(n);return}super.attributeChangedCallback(e,t,n)}formResetCallback(){this.reset()}parser(e){return Number(e)}formatter(e){return typeof e==`number`?String(e):``}willUpdate(e){super.willUpdate(e);let t=w(_g,this,bg).call(this,this.modelValue);t!==this.modelValue&&(this.modelValue=t)}updated(e){super.updated(e);let t=yg.call(w(_g,this));t.min=this.min,t.max=this.max,t.step=this.step,t.readOnly=this.readOnly,t.disabled=this.disabled,t.valueText=e=>w(_g,this,xg).call(this,e)}_onLabelClick(){this.disabled||yg.call(w(_g,this)).focus()}};function yg(){return this._inputNode}function bg(e){let{min:t,max:n,step:r}=this,i=t+Math.round((Math.min(Math.max(Number.isFinite(e)?e:t,t),n)-t)/r)*r;return Math.min(Math.max(i,t),n)}function xg(e){if(this.valueLabel)return this.valueLabel(e);let t=this.valueUnit.trim(),n=/^\p{L}/u.test(t)?` `:``;return t?`${e}${n}${t}`:`${e}`}vg.formAssociated=!0,r([c({type:Number})],vg.prototype,`min`,void 0),r([c({type:Number})],vg.prototype,`max`,void 0),r([c({type:Number})],vg.prototype,`step`,void 0),r([c({attribute:`value-unit`})],vg.prototype,`valueUnit`,void 0),r([c({attribute:!1})],vg.prototype,`valueLabel`,void 0),customElements.get(`craft-slide-picker`)||customElements.define(`craft-slide-picker`,vg);var Sg=o`
  :host {
    display: block;
  }

  .slide-rule {
    --_graduation-width: var(--c-slide-rule-graduation-width, 8px);
    --_graduation-height: var(--c-slide-rule-graduation-height, 10px);
    --_graduation-color: var(
      --c-slide-rule-graduation-color,
      var(--c-color-neutral-border-loud)
    );
    --_accent-color: var(--c-slide-rule-accent-color, currentColor);

    --_graduation-main-height: calc(var(--_graduation-height) * 1.5);
    --_graduation-thickness: 2px;
    --_graduation-main-thickness: calc(var(--_graduation-thickness) * 2);

    --_label-gap: var(--c-spacing-xs);
    --_label-space: calc(12rem / 16);

    display: flex;
    flex-direction: column;
    gap: var(--c-spacing-sm);
    outline: none;
    height: var(--c-slide-rule-height, 40px);

    /* Digits that don't change width as the strip slides past. */
    font-family: var(--c-font-mono);
  }

  .slide-rule:focus-visible .cursor::after {
    outline: var(--c-focus-outline-width) var(--c-focus-outline-style)
      var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
    border-radius: var(--c-radius-sm);
  }

  .cursor {
    align-self: center;
    position: relative;
    width: 0;
    height: 0;
    border-inline-start: calc(5 / 16 * 1rem) solid transparent;
    border-inline-end: calc(5 / 16 * 1rem) solid transparent;
    border-block-start: calc(5 / 16 * 1rem) solid var(--_accent-color);
  }

  .cursor::after {
    content: '';
    width: calc(20 / 16 * 1rem);
    height: calc(50 / 16 * 1rem);
    position: absolute;
    inset-block-start: -15px;
    inset-inline-start: 50%;
    transform: translateX(-50%);
  }

  .graduations {
    flex: 1;
    min-block-size: calc(
      var(--_graduation-main-height) + var(--_label-gap) + var(--_label-space)
    );
    position: relative;
    touch-action: pan-y;
    /*
      The window the strip slides behind. Clipped so it stays the rule's width,
      which the positioning maths centers the strip against.
    */
    overflow: hidden;

    /* Fades the graduations' own alpha, so it works on any background. */
    mask-image: linear-gradient(
      to right,
      transparent 0%,
      #000 15%,
      #000 85%,
      transparent 100%
    );
  }

  /*
    The band from zero to the value, in the selection accent. Hidden at zero,
    and behind the strip.
  */
  .indicator {
    position: absolute;
    /* The JS sets the width including borders. */
    box-sizing: border-box;
    inset-block: 0;
    inset-inline-start: 50%;
    inline-size: 0;
    background: var(--c-color-accent-fill-quiet);
    border-inline: 1px solid var(--c-color-accent-border-quiet);
    pointer-events: none;
    transition:
      200ms inline-size linear,
      200ms translate linear;
  }

  .slide-rule.dragging .indicator {
    transition: none;
  }

  .graduations ul {
    position: relative;
    /*
      One track per graduation. They must stay flush: any gap throws off the
      positioning maths.
    */
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: var(--_graduation-width);

    /* Shrink-to-fit: the JS measures this to get the graduation width. */
    width: max-content;

    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;

    /* Transformed, so dragging doesn't trigger layout. */
    transition: 200ms transform linear;

    /* On the strip, not the marks: a press anywhere in it drags, and the marks
       are only a couple of pixels wide to aim at. */
    cursor: pointer;
  }

  .slide-rule.dragging .graduations ul,
  .slide-rule.dragging .indicator {
    transition: none;
  }

  /* Until the first placement has been rendered -- see #markPlaced(). */
  .slide-rule:not(.placed) .graduations ul,
  .slide-rule:not(.placed) .indicator {
    transition: none;
  }

  .graduations ul li {
    /* The graduation element is the tick; the track supplies the spacing. */
    justify-self: start;
    /*
      Centered on its point at the start of the track, so the cursor lines up
      and marks of any thickness align.
    */
    translate: -50%;
    inline-size: var(--_graduation-thickness);
    block-size: var(--_graduation-height);
    background: var(--_graduation-color);

    font-size: 8px;
    /* The label is positioned against this. */
    position: relative;
  }

  .graduations ul li.main-graduation {
    inline-size: var(--_graduation-main-thickness);
    block-size: var(--_graduation-main-height);
  }

  .graduations ul li:hover {
    background: var(--_accent-color);
  }

  .graduations ul li .label {
    width: 20px;
    position: absolute;
    /* Clear of the tallest mark, so a taller graduation pushes the labels
       down with it rather than crowding them. */
    inset-block-start: calc(var(--_graduation-main-height) + var(--_label-gap));
    /* Centered on the mark. */
    inset-inline-start: 50%;
    transform: translateX(-50%);
    display: none;
    text-align: center;
    /* Narrower than some labels are long, and a leading minus is a break
       opportunity -- so they stay on one line explicitly. */
    white-space: nowrap;
  }

  .graduations ul li.main-graduation .label {
    display: block;
    cursor: default;
  }
`,K=new WeakSet,Cg=new WeakMap,wg=new WeakMap,Tg=new WeakMap,Eg=new WeakMap,Dg=new WeakMap,Og=new WeakMap,kg=new WeakMap,Ag=new WeakMap,jg=class extends Ih(d){constructor(...e){super(...e),x(this,K),this.min=-45,this.max=45,this.value=0,this.graduationMin=-70,this.graduationMax=70,this.label=n(`Rotate`),T(this,Cg,!1),T(this,wg,!1),T(this,Tg,0),T(this,Eg,0),T(this,Dg,0),T(this,Og,0),T(this,kg,!1),T(this,Ag,null)}_formValue(){return this.name?String(this.value):null}_restoreFormValue(e){this.value=Math.min(Math.max(Number(e??0),this.min),this.max)}connectedCallback(){super.connectedCallback(),C(Ag,this,new ResizeObserver(()=>w(K,this,Pg).call(this))),S(Ag,this).observe(this)}disconnectedCallback(){super.disconnectedCallback(),S(Ag,this)?.disconnect(),C(Ag,this,null)}firstUpdated(){C(Og,this,(w(K,this,Ng).call(this).length-1)*10),w(K,this,Pg).call(this)}updated(e){super.updated(e),(e.has(`value`)||e.has(`min`)||e.has(`max`)||e.has(`graduationMin`)||e.has(`graduationMax`))&&w(K,this,Pg).call(this)}render(){return m`
      <div
        class="slide-rule"
        role="slider"
        tabindex=${Mg.call(w(K,this))?0:-1}
        aria-label=${this.label}
        aria-valuemin=${this.min}
        aria-valuemax=${this.max}
        aria-valuenow=${this.value}
        aria-valuetext=${w(K,this,zg).call(this,this.value)}
        aria-disabled=${this.disabled?`true`:`false`}
        @keydown=${w(K,this,Zg)}
        @pointerdown=${w(K,this,Gg)}
        @pointermove=${w(K,this,Kg)}
        @pointerup=${w(K,this,qg)}
        @pointercancel=${w(K,this,Jg)}
      >
        <div class="cursor"></div>
        <div class="graduations">
          <div
            class="indicator"
            aria-hidden="true"
            ?hidden=${this.value===0}
          ></div>
          <ul aria-hidden="true">
            ${w(K,this,Ng).call(this).map(e=>m`
                <li
                  class=${O({graduation:!0,"main-graduation":e%5==0})}
                  data-graduation=${e}
                >
                  <div class="label">${e}</div>
                </li>
              `)}
          </ul>
        </div>
      </div>
    `}};function Mg(){return!this.disabled}function Ng(){let e=[];for(let t=this.graduationMin;t<=this.graduationMax;t++)e.push(t);return e}function Pg(){this._graduations?.offsetWidth&&w(K,this,Lg).call(this),w(K,this,Ig).call(this),!(!this._list||!this._graduations?.offsetWidth)&&(this._list.style.transform=`translateX(${w(K,this,Vg).call(this,this.value)}px)`,w(K,this,Fg).call(this))}function Fg(){S(kg,this)||(C(kg,this,!0),requestAnimationFrame(()=>this._root?.classList.add(`placed`)))}function Ig(){if(!this._indicator)return;let e=(this.graduationMin-this.graduationMax)*-1,t=S(Og,this)/e;this._indicator.style.inlineSize=`${Math.abs(this.value)*t}px`,this._indicator.style.translate=this.value>0?`-100%`:`0`}function Lg(){let e=w(K,this,Ng).call(this).length,t=this._list.getBoundingClientRect().width/e;t>0&&C(Og,this,(e-1)*t)}function Rg(){let{transform:e}=getComputedStyle(this._list);return!e||e===`none`?0:new DOMMatrixReadOnly(e).m41}function zg(e){return n(`{num, number} {num, plural, =1{degree} other{degrees}}`,{num:Math.round(e)})}function Bg(e){let t=this.graduationMin*-1,n=(this.graduationMin-this.graduationMax)*-1;return(this._graduations.offsetWidth/2+e*-1)/S(Og,this)*n-t}function Vg(e){let t=this.graduationMin*-1,n=(this.graduationMin-this.graduationMax)*-1;return-((e+t)*S(Og,this)/n-this._graduations.offsetWidth/2)}function Hg(e){let t=Math.min(Math.max(e,this.min),this.max);return t===this.value?!1:(this.value=t,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),!0)}function Ug(){this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}function Wg(e){this.dispatchEvent(new CustomEvent(e,{detail:{value:this.value},bubbles:!0,composed:!0}))}function Gg(e){C(wg,this,Mg.call(w(K,this))&&this._graduations.contains(e.target)&&e.target!==this._graduations),S(wg,this)&&(e.preventDefault(),C(Eg,this,e.clientX),C(Dg,this,w(K,this,Rg).call(this)),C(Tg,this,this.value),this._root.setPointerCapture(e.pointerId),w(K,this,Wg).call(this,`craft-drag-start`))}function Kg(e){S(wg,this)&&Math.abs(e.clientX-S(Eg,this))>3&&(C(Cg,this,!0),this._root.classList.add(`dragging`),e.preventDefault(),w(K,this,Xg).call(this,e))}function qg(e){S(wg,this)&&(S(Cg,this)?e.preventDefault():w(K,this,Xg).call(this,e),w(K,this,Yg).call(this,e))}function Jg(e){S(wg,this)&&w(K,this,Yg).call(this,e)}function Yg(e){C(Cg,this,!1),this._root.classList.remove(`dragging`),this.value!==S(Tg,this)&&w(K,this,Ug).call(this),w(K,this,Wg).call(this,`craft-drag-end`),this._root.hasPointerCapture(e.pointerId)&&this._root.releasePointerCapture(e.pointerId),C(Eg,this,0),C(wg,this,!1)}function Xg(e){let t=S(Cg,this)?S(Eg,this):this._cursor.getBoundingClientRect().left+this._cursor.offsetWidth/2,n=S(Cg,this)?t-e.clientX:e.clientX-t,r=S(Dg,this)-n;w(K,this,Hg).call(this,w(K,this,Bg).call(this,r))}function Zg(e){if(!Mg.call(w(K,this)))return;let t=this.value,n;switch(e.key){case`ArrowUp`:case`ArrowRight`:n=w(K,this,Hg).call(this,t+1);break;case`ArrowDown`:case`ArrowLeft`:n=w(K,this,Hg).call(this,t-1);break;case`PageUp`:n=w(K,this,Hg).call(this,t+10);break;case`PageDown`:n=w(K,this,Hg).call(this,t-10);break;case`Home`:n=w(K,this,Hg).call(this,this.min);break;case`End`:n=w(K,this,Hg).call(this,this.max);break;default:return}n&&w(K,this,Ug).call(this),e.preventDefault()}jg.shadowRootOptions={...d.shadowRootOptions,delegatesFocus:!0},jg.styles=[Sg],r([c({type:Number})],jg.prototype,`min`,void 0),r([c({type:Number})],jg.prototype,`max`,void 0),r([c({type:Number})],jg.prototype,`value`,void 0),r([c({type:Number,attribute:`graduation-min`})],jg.prototype,`graduationMin`,void 0),r([c({type:Number,attribute:`graduation-max`})],jg.prototype,`graduationMax`,void 0),r([c()],jg.prototype,`label`,void 0),r([g(`.slide-rule`)],jg.prototype,`_root`,void 0),r([g(`.graduations`)],jg.prototype,`_graduations`,void 0),r([g(`.graduations ul`)],jg.prototype,`_list`,void 0),r([g(`.cursor`)],jg.prototype,`_cursor`,void 0),r([g(`.indicator`)],jg.prototype,`_indicator`,void 0),customElements.get(`craft-slide-rule`)||customElements.define(`craft-slide-rule`,jg);var Qg=o`
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
`,$g=class extends d{constructor(...e){super(...e),this.label=null,this.status=null}getLabel(){return!this.label&&this.status?n(`Status: {status}`,{status:this.status}):this.label}render(){return m`
      <span
        class="${O({status:!0,"status--live":this.status===`live`,"status--enabled":this.status===`enabled`,"status--pending":this.status===`pending`,"status--expired":this.status===`expired`,"status--disabled":this.status===`disabled`})}"
        role="${this.getLabel()?`img`:i}"
        aria-label="${this.getLabel()??i}"
      ></span>
    `}};$g.styles=[Qg],r([c()],$g.prototype,`label`,void 0),r([c()],$g.prototype,`status`,void 0),customElements.get(`craft-status`)||customElements.define(`craft-status`,$g);var e_=class extends Ft(d){static get properties(){return{checked:{type:Boolean,reflect:!0}}}static get styles(){return[o`
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
    `}constructor(){super(),this.value=``,this.checked=!1,this.__initialized=!1,this._toggleChecked=this._toggleChecked.bind(this),this.__handleKeydown=this._handleKeydown.bind(this),this.__handleKeyup=this._handleKeyup.bind(this)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`switch`),this.setAttribute(`aria-checked`,`${this.checked}`),this.addEventListener(`click`,this._toggleChecked),this.addEventListener(`keydown`,this.__handleKeydown),this.addEventListener(`keyup`,this.__handleKeyup)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this._toggleChecked),this.removeEventListener(`keydown`,this.__handleKeydown),this.removeEventListener(`keyup`,this.__handleKeyup)}_toggleChecked(){this.disabled||(this.focus(),this.checked=!this.checked)}__checkedStateChange(){this.dispatchEvent(new Event(`checked-changed`,{bubbles:!0})),this.setAttribute(`aria-checked`,`${this.checked}`)}_handleKeydown(e){e.key===` `&&e.preventDefault()}_handleKeyup(e){[` `,`Enter`].includes(e.key)&&this._toggleChecked()}updated(e){super.updated(e),e.has(`disabled`)&&this.setAttribute(`aria-disabled`,`${this.disabled}`)}requestUpdate(e,t,n){super.requestUpdate(e,t,n),this.__initialized&&this.isConnected&&e===`checked`&&this.checked!==t&&!this.disabled&&this.__checkedStateChange()}firstUpdated(e){super.firstUpdated(e),this.__initialized=!0}},t_=class extends ri(Oi(xi)){static get styles(){return[...super.styles,o`
        :host([hidden]) {
          display: none;
        }

        :host([disabled]) {
          color: #adadad;
        }
      `]}static get scopedElements(){return{...super.scopedElements,"lion-switch-button":e_}}get _inputNode(){return Array.from(this.children).find(e=>e.slot===`input`)}get slots(){return{...super.slots,input:()=>{let e=this.createScopedElement(`lion-switch-button`);return e.setAttribute(`data-tag-name`,`lion-switch-button`),e}}}render(){return m`
      <div class="form-field__group-one">${this._groupOneTemplate()}</div>
      <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
    `}_groupOneTemplate(){return m`${this._labelTemplate()} ${this._helpTextTemplate()} ${this._feedbackTemplate()}`}_groupTwoTemplate(){return m`${this._inputGroupTemplate()}`}constructor(){super(),this.checked=!1,this.__handleButtonSwitchCheckedChanged=this.__handleButtonSwitchCheckedChanged.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(`checked-changed`,this.__handleButtonSwitchCheckedChanged),this._labelNode&&this._labelNode.addEventListener(`click`,this._toggleChecked),this._syncButtonSwitch()}disconnectedCallback(){super.disconnectedCallback(),this._inputNode&&this.removeEventListener(`checked-changed`,this.__handleButtonSwitchCheckedChanged),this._labelNode&&this._labelNode.removeEventListener(`click`,this._toggleChecked)}updated(e){super.updated(e),e.has(`disabled`)&&this._syncButtonSwitch()}_toggleChecked(e){e.preventDefault(),super._toggleChecked(e)}_isEmpty(){return!1}__handleButtonSwitchCheckedChanged(e){e.stopPropagation(),this._isHandlingUserInput=!0,this.checked=this._inputNode.checked,this._isHandlingUserInput=!1}_syncButtonSwitch(){this._inputNode.disabled=this.disabled}_onLabelClick(){this.disabled||this._inputNode.focus()}},n_=class extends e_{constructor(...e){super(...e),this.indeterminate=!1}updated(e){super.updated(e),(e.has(`indeterminate`)||e.has(`checked`))&&this.setAttribute(`aria-checked`,this.checked?`true`:this.indeterminate?`mixed`:`false`)}static get styles(){return[...super.styles,o`
        :host {
          --c-switch-height: var(--c-size-control-sm);
          --c-switch-thumb-offset: 5px;
          --c-switch-thumb-height: calc(
            var(--c-switch-height) - var(--c-switch-thumb-offset)
          );
          display: flex;
          height: var(--c-switch-height);
          width: calc(var(--c-switch-height) * 1.75);
          margin: -1px;
          /* Round the focus ring to match the track */
          border-radius: var(--c-radius-full);
          cursor: pointer;
        }

        :host([disabled]) {
          cursor: not-allowed;
          opacity: 0.5;
        }

        :host([size='small']) {
          --c-switch-height: var(--c-size-control-xs);
          --c-switch-thumb-offset: 4px;
        }

        .btn {
          width: 100%;
        }

        /* The host's own focus ring covers this, so drop Lion's thumb outline */
        :host(:focus:not([disabled])) .switch-button__thumb {
          outline: none;
        }

        .switch-button__track {
          ${Zn}
          --tw-inset-shadow-color: var(--color-slate-300);
          background-color: var(--c-color-neutral-fill-quiet);
          border-radius: var(--c-radius-full);
          min-height: unset;
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
          box-sizing: border-box;
          background-clip: padding-box;
        }

        :host([indeterminate]:not([checked])) .switch-button__thumb {
          inset-inline-start: calc(50% - (var(--c-switch-thumb-height) / 2));
          inset-inline-end: auto;
        }

        :host([checked]) .switch-button__track {
          border-color: transparent;
          background-color: var(--c-color-accent-fill-loud);
        }

        :host([checked]) .switch-button__thumb {
          border-color: transparent;
          inset-inline-start: auto;
          inset-inline-end: calc(var(--c-switch-thumb-offset) / 2);
        }

        :host([checked]) .switch-button__thumb:after {
          --_checkmark-size: calc(var(--c-switch-thumb-height) / 2);
          --_checkmark-offset: calc(
            (var(--c-switch-thumb-height) - var(--_checkmark-size)) / 2 - 1px
          );
          content: '';
          position: absolute;
          inset-block-start: var(--_checkmark-offset);
          inset-inline-start: var(--_checkmark-offset);
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 255.8 234.9'%3E%3Cpath d='M245.9,4.6c-10.7-7.8-25.7-5.4-33.5,5.3l-119.4,164.2-52.1-52.1c-9.4-9.4-24.6-9.4-33.9,0-9.3,9.4-9.4,24.6,0,33.9l72,72c5,5,11.8,7.5,18.8,7s13.4-4.1,17.5-9.8L251.2,38.1c7.8-10.7,5.4-25.7-5.3-33.5Z'/%3E%3C/svg%3E");
          mask-repeat: no-repeat;
          mask-position: center;
          width: var(--_checkmark-size);
          aspect-ratio: 1;
          background-color: var(--c-color-accent-fill-loud);
        }
      `]}};r([c({type:Boolean,reflect:!0})],n_.prototype,`indeterminate`,void 0),customElements.get(`craft-switch-button`)||customElements.define(`craft-switch-button`,n_);var r_=o`
  :host {
    display: grid;
  }

  .form-field__group-two--switch {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
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
`;function i_(e){return(e??``).split(/\s+/).filter(Boolean)}function a_(e){return typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e}var o_=Symbol.for(`craft-switch-synthetic-change`),s_=new WeakMap,c_=new WeakSet,l_=class extends pr(t_){constructor(...e){super(...e),x(this,c_),this.size=`medium`,this.onLabel=``,this.offLabel=``,this.checkedValue=`1`,this.indeterminateValue=`-`,this.indeterminate=!1,this.__externalLabelledByNodes=[],this.__externalDescribedByNodes=[],this.__clickableExternalLabels=new Set,T(this,s_,!1),this.__onKeydown=e=>{if(e.key!==`ArrowLeft`&&e.key!==`ArrowRight`||this.disabled||e.target!==this._inputNode)return;e.preventDefault();let t=getComputedStyle(this).direction===`rtl`;this._setCheckedState(e.key===(t?`ArrowLeft`:`ArrowRight`))},this.__forwardNativeChange=e=>{e.target===this._inputNode&&this.__dispatchNativeChange()},this.__onExternalLabelClick=e=>{this.disabled||e.composedPath().includes(this)||this._inputNode?.click()}}static get styles(){return[...super.styles,er,r_]}get slots(){return{...super.slots,input:()=>{let e=this.createScopedElement(`craft-switch-button`);return e.setAttribute(`size`,this.size),e.setAttribute(`data-tag-name`,`craft-switch-button`),e},"state-description":()=>{let e=document.createElement(`div`);return e.textContent=this._stateDescriptionText,e},"hidden-input":()=>{if(!this.name)return;let e=document.createElement(`input`);return e.type=`hidden`,e.name=this.name,e.value=this._postedValue,e.disabled=this.disabled,e}}}static get scopedElements(){return{...super.scopedElements,"craft-switch-button":n_}}connectedCallback(){super.connectedCallback(),this.__adoptExternalAria(),this.addEventListener(`checked-changed`,this.__forwardNativeChange),this.addEventListener(`keydown`,this.__onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`checked-changed`,this.__forwardNativeChange),this.removeEventListener(`keydown`,this.__onKeydown),this.__teardownExternalLabelClicks()}get _hiddenInputNode(){return Array.from(this.children).find(e=>e instanceof HTMLInputElement&&e.slot===`hidden-input`)}get _postedValue(){return this.checked?this.checkedValue:this.indeterminate?this.indeterminateValue:``}get _stateDescriptionNode(){return Array.from(this.children).find(e=>e.slot===`state-description`)}get _stateDescriptionText(){return[this.onLabel?n(`Check for {onLabel}.`,{onLabel:this.onLabel}):``,this.offLabel?n(`Uncheck for {offLabel}.`,{offLabel:this.offLabel}):``].filter(Boolean).join(` `)}willUpdate(e){super.willUpdate(e),e.has(`checked`)&&this.checked&&this.indeterminate&&(this.indeterminate=!1)}updated(e){super.updated(e),(e.has(`onLabel`)||e.has(`offLabel`))&&this.__syncStateDescription(),[`checked`,`indeterminate`,`checkedValue`,`indeterminateValue`,`disabled`,`size`].some(t=>e.has(t))&&(this.__syncSwitchButton(),this.__syncHiddenInput()),(e.has(`checked`)||e.has(`indeterminate`))&&this.__syncToggleTargets()}__syncToggleTargets(){let e=this._inputNode;if(!e)return;let t=e.getAttribute(`data-target`),n=e.getAttribute(`data-reverse-target`);if(!t&&!n)return;let r=window.jQuery;r&&r(e).data?.(`fieldtoggle`)||(this.__toggleTargets(t,this.checked),this.__toggleTargets(n,!this.checked))}__toggleTargets(e,t){if(!e)return;let n=/^[#.]/.test(e)?e:`#${e}`,r=this.getRootNode(),i=!1;for(let e of r.querySelectorAll(n))e.classList.contains(`hidden`)===t&&(e.classList.toggle(`hidden`,!t),i=!0);i&&t&&window.dispatchEvent(new Event(`resize`))}_setCheckedState(e){if(this.disabled)return;let t=this.indeterminate;this.checked===e&&!t||(this.indeterminate=!1,this.checked===e?t&&this.__dispatchNativeChange():this.checked=e)}get on(){return this.checked}get postedValue(){return this._postedValue}turnOn(e=!1){w(c_,this,u_).call(this,()=>this._setCheckedState(!0),e)}turnOff(e=!1){w(c_,this,u_).call(this,()=>this._setCheckedState(!1),e)}turnIndeterminate(e=!1){w(c_,this,u_).call(this,()=>{if(this.indeterminate&&!this.checked)return;let e=this.checked;this.checked=!1,this.indeterminate=!0,e||this.__dispatchNativeChange()},e)}__dispatchNativeChange(){if(S(s_,this))return;let e=new Event(`change`,{bubbles:!0});e[o_]=!0,this._inputNode?.dispatchEvent(e)}_onChange(e){e&&o_ in e||super._onChange(e)}__adoptExternalAria(){let e=this._inputNode;if(!e)return;let t=this.getRootNode();for(let n of i_(e.getAttribute(`aria-labelledby`))){let e=t.getElementById(n);e&&!this.__externalLabelledByNodes.includes(e)&&(this.addToAriaLabelledBy(e,{reorder:!1}),this.__externalLabelledByNodes.push(e))}for(let n of i_(e.getAttribute(`aria-describedby`))){let e=t.getElementById(n);e&&!this.__externalDescribedByNodes.includes(e)&&(this.addToAriaDescribedBy(e,{reorder:!1}),this.__externalDescribedByNodes.push(e))}this.__setupExternalLabelClicks()}__setupExternalLabelClicks(){let e=this._inputNode;if(!e)return;let t=this.getRootNode(),n=new Set(this.__externalLabelledByNodes.filter(e=>e instanceof HTMLLabelElement));if(e.id)for(let r of t.querySelectorAll(`label[for="${a_(e.id)}"]`))n.add(r);for(let e of n)this.__clickableExternalLabels.has(e)||(e.addEventListener(`click`,this.__onExternalLabelClick),this.__clickableExternalLabels.add(e))}__teardownExternalLabelClicks(){for(let e of this.__clickableExternalLabels)e.removeEventListener(`click`,this.__onExternalLabelClick);this.__clickableExternalLabels.clear()}__syncSwitchButton(){let e=this._inputNode;if(!e)return;e.getAttribute(`size`)!==this.size&&e.setAttribute(`size`,this.size);let t=this.indeterminate&&!this.checked;e.indeterminate!==t&&(e.indeterminate=t)}__syncHiddenInput(){let e=this._hiddenInputNode;e&&(e.value=this._postedValue,e.disabled=this.disabled,this.name&&e.name!==this.name&&(e.name=this.name))}__syncStateDescription(){let e=this._stateDescriptionNode;if(!e)return;let t=this._stateDescriptionText;e.textContent=t,t?this.addToAriaDescribedBy(e,{idPrefix:`state-description`,reorder:!1}):this.removeFromAriaDescribedBy(e)}render(){return m`
      <div class="form-field__group-one">${this._groupOneTemplate()}</div>
      <div class="form-field__group-two form-field__group-two--switch">
        ${this._groupTwoTemplate()}
      </div>
    `}_groupOneTemplate(){return m`${super._groupOneTemplate()} ${this._stateDescriptionTemplate()}`}_stateDescriptionTemplate(){return m`<slot name="state-description"></slot>`}_stateLabelTemplate(e){let t=e===`on`?this.onLabel:this.offLabel;return t?m`<span
      class="state-label"
      data-state=${e}
      aria-hidden="true"
      @click=${()=>this._setCheckedState(e===`on`)}
      >${t}</span
    >`:i}_inputGroupBeforeTemplate(){return m`
      <div class="input-group__before">
        <slot name="before"></slot>
        ${this._stateLabelTemplate(`off`)}
      </div>
    `}_inputGroupAfterTemplate(){return m`
      <div class="input-group__after">
        ${this._stateLabelTemplate(`on`)}
        <slot name="after"></slot>
      </div>
    `}};function u_(e,t){if(!this.disabled){if(!t){e();return}C(s_,this,!0),e(),this.updateComplete.then(()=>{C(s_,this,!1)})}}r([c({type:String,reflect:!0})],l_.prototype,`size`,void 0),r([c({type:String,attribute:`on-label`})],l_.prototype,`onLabel`,void 0),r([c({type:String,attribute:`off-label`})],l_.prototype,`offLabel`,void 0),r([c({attribute:`value`})],l_.prototype,`checkedValue`,void 0),r([c({attribute:`indeterminate-value`})],l_.prototype,`indeterminateValue`,void 0),r([c({type:Boolean,reflect:!0})],l_.prototype,`indeterminate`,void 0),customElements.get(`craft-switch`)||customElements.define(`craft-switch`,l_);function d_({el:e,uid:t}){e.setAttribute(`id`,`panel-${t}`),e.setAttribute(`role`,`tabpanel`),e.setAttribute(`aria-labelledby`,`button-${t}`),e.hasAttribute(`tabindex`)||e.setAttribute(`tabindex`,`0`)}function f_(e){e.setAttribute(`selected`,`true`)}function p_(e){e.removeAttribute(`selected`)}function m_({el:e,uid:t,clickHandler:n,keydownHandler:r,keyupHandler:i}){e.setAttribute(`id`,`button-${t}`),e.setAttribute(`role`,`tab`),e.setAttribute(`aria-controls`,`panel-${t}`),e.addEventListener(`click`,n),e.addEventListener(`keyup`,i),e.addEventListener(`keydown`,r)}function h_({el:e,clickHandler:t,keydownHandler:n,keyupHandler:r}){e.removeAttribute(`id`),e.removeAttribute(`role`),e.removeAttribute(`aria-controls`),e.removeEventListener(`click`,t),e.removeEventListener(`keyup`,r),e.removeEventListener(`keydown`,n)}function g_(e,t=!1){t&&e.focus(),e.setAttribute(`selected`,`true`),e.setAttribute(`aria-selected`,`true`),e.setAttribute(`tabindex`,`0`)}function __(e){e.removeAttribute(`selected`),e.setAttribute(`aria-selected`,`false`),e.setAttribute(`tabindex`,`-1`)}function v_(e){let t=e;switch(t.key){case`ArrowDown`:case`ArrowRight`:case`ArrowUp`:case`ArrowLeft`:case`Home`:case`End`:t.preventDefault()}}var y_=class extends d{static get properties(){return{selectedIndex:{type:Number,attribute:`selected-index`,reflect:!0}}}static get styles(){return[o`
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
    `}constructor(){super(),this.selectedIndex=0}firstUpdated(e){super.firstUpdated(e),this.__setupSlots(),this.tabs[0]?.disabled&&(this.selectedIndex=this.tabs.findIndex(e=>!e.disabled))}get tabs(){return Array.from(this.children).filter(e=>e.slot===`tab`)}get panels(){return Array.from(this.children).filter(e=>e.slot===`panel`)}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];__setupSlots(){if(this.shadowRoot){let e=this.shadowRoot.querySelector(`slot[name=tab]`);e&&e.addEventListener(`slotchange`,()=>{this.__cleanStore(),this.__setupStore(),this.__updateSelected(!1)})}}__setupStore(){this.__store=[],this.tabs.length!==this.panels.length&&console.warn(`The amount of tabs (${this.tabs.length}) doesn't match the amount of panels (${this.panels.length}).`),this.tabs.forEach((e,t)=>{let n={uid:Vt(),el:e,button:e,panel:this.panels[t],clickHandler:this.__createButtonClickHandler(t),keydownHandler:v_.bind(this),keyupHandler:this.__handleButtonKeyup.bind(this)};d_({...n,el:n.panel}),m_(n),p_(n.panel),__(n.button),this.__store&&this.__store.push(n)})}__cleanStore(){this.__store&&=(this.__store.forEach(e=>{h_(e)}),[])}__getNextNotDisabledTab(e,t,n){let r=[],i=e.filter((e,t)=>!e.disabled&&t>this.selectedIndex),a=e.filter((e,t)=>!e.disabled&&t<this.selectedIndex);return r=n===`right`?[...i,...a]:[...a.reverse(),...i.reverse()],r[0]}__getNextAvailableIndex(e,t){let n=this.tabs[this.selectedIndex];if(this.tabs.every(e=>!e.disabled))return e;if(t===`ArrowRight`||t===`ArrowDown`){let e=this.__getNextNotDisabledTab(this.tabs,n,`right`);return this.tabs.findIndex(t=>e===t)}if(t===`ArrowLeft`||t===`ArrowUp`){let e=this.__getNextNotDisabledTab(this.tabs,n,`left`);return this.tabs.findIndex(t=>e===t)}if(t===`Home`)return this.tabs.findIndex(e=>!e.disabled);if(t===`End`){let e=this.tabs.map((e,t)=>({disabled:e.disabled,index:t})).filter(e=>!e.disabled);return e[e.length-1].index}return-1}__createButtonClickHandler(e){return()=>{this._setSelectedIndexWithFocus(e)}}__handleButtonKeyup(e){let t=e;if(typeof this.selectedIndex==`number`)switch(t.key){case`ArrowDown`:case`ArrowRight`:this.selectedIndex+1>=this._pairCount?this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(0,t.key)):this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this.selectedIndex+1,t.key));break;case`ArrowUp`:case`ArrowLeft`:this.selectedIndex<=0?this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this._pairCount-1,t.key)):this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this.selectedIndex-1,t.key));break;case`Home`:this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(0,t.key));break;case`End`:this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this._pairCount-1,t.key));break}}get selectedIndex(){return this.__selectedIndex||0}set selectedIndex(e){if(e===this.__selectedIndex)return;let t=this.__selectedIndex;this.__selectedIndex=e,this.__updateSelected(!1),this.dispatchEvent(new Event(`selected-changed`)),this.requestUpdate(`selectedIndex`,t)}_setSelectedIndexWithFocus(e){if(e===-1)return;let t=this.__selectedIndex;this.__selectedIndex=e,this.__updateSelected(!0),this.dispatchEvent(new Event(`selected-changed`)),this.requestUpdate(`selectedIndex`,t)}get _pairCount(){return this.__store&&this.__store.length||0}__updateSelected(e=!1){if(!(this.__store&&typeof this.selectedIndex==`number`&&this.__store[this.selectedIndex]))return;let t=this.tabs.find(e=>e.hasAttribute(`selected`)),n=this.panels.find(e=>e.hasAttribute(`selected`));t&&__(t),n&&p_(n);let{button:r,panel:i}=this.__store[this.selectedIndex];r&&g_(r,e),i&&f_(i)}},b_=o`
  :host {
    display: block;
  }

  /*
   * The base layout is the block-start placement; each other placement below
   * flips the flex direction and moves the rule and the selected indicator to
   * match. Everything is written logically — row/column follow the writing
   * mode, and the borders and indicator insets are logical properties — so the
   * inline placements swap sides in RTL without a rule of their own.
   */
  .tabs {
    display: flex;
    flex-direction: column;
    gap: var(--c-tabs-gap, var(--c-spacing-lg));
    /* Fills a host that was given a height; against an auto height the
       percentage resolves to auto, leaving it content-sized. */
    block-size: 100%;
    min-block-size: 0;
  }

  /*
   * The rule lives on the strip rather than the tablist so it runs under the
   * overflow menu too, which sits beside the tablist rather than inside it.
   * It's declared as four zero-width edges so a placement only has to move the
   * width from one edge to another.
   *
   * The font size here is the whole of the size variant. Inheritance follows
   * the flattened tree, so the slotted <craft-tab>s take it from the slot's
   * ancestors rather than from where they're written — and since their padding
   * is em-based, and the overflow invoker's icon scales with its own text, one
   * declaration sizes everything in the strip. The panels sit outside it and
   * keep the document's text size.
   */
  .tabs__strip {
    display: flex;
    align-items: center;
    min-width: 0;
    font-size: var(--c-tabs-font-size, var(--c-text-base));
    border: 0 solid var(--c-tabs-border, var(--c-color-neutral-border-quiet));
    border-block-end-width: 1px;
  }

  :host([size='small']) {
    --c-tabs-font-size: var(--c-text-sm);
  }

  :host([size='large']) {
    --c-tabs-font-size: var(--c-text-lg);
  }

  .tabs__tab-group {
    flex: 1;
    min-width: 0;
    gap: var(--c-tabs-tab-gap, var(--c-spacing-lg));
  }

  /*
   * Tabs hold their natural width instead of shrinking to fit: overflow is
   * resolved by collapsing whole tabs into the menu, and a row of squeezed,
   * half-legible tabs would defeat the measurement that decides which.
   */
  ::slotted([slot='tab']) {
    flex: none;
  }

  /*
   * Except the selected tab, which is never collapsed: when it alone is wider
   * than the strip, it shrinks and truncates its label instead. Not while the
   * overflow is being measured, which needs every tab's natural width.
   */
  :host(
      :is([placement='block-start'], [placement='block-end']):not([equal-width])
    )
    .tabs__tab-group:not(.tabs__tab-group--measuring)
    ::slotted([slot='tab'][selected]) {
    flex: 0 1 auto;
    min-width: 0;
    --_tab-text-overflow: clip;
    --_tab-text-wrap: nowrap;
  }

  /* Overrides LionTabs' bold, which would otherwise beat the tab's own
     selected weight and its width-reserving label copy. */
  .tabs__tab-group ::slotted([slot='tab'][selected]) {
    font-weight: var(--c-tab-font-weight-active, var(--font-weight-semibold));
  }

  /*
   * Unless the strip is asked to divide its width evenly, which is the other
   * answer to the same problem: rather than collapsing the tabs that don't
   * fit, every tab takes the same share and shrinks with the container. The
   * component turns the overflow measurement off to match — see tabs.ts.
   *
   * A zero flex basis rather than auto: growing from zero is what makes the
   * shares equal, where auto would hand out only the *leftover* space and
   * leave a long label wider than a short one. The min-width override drops
   * the automatic minimum on a flex item, without which a long label would
   * refuse to shrink past its content and push the row wide anyway.
   *
   * Only the block placements: an inline strip runs down the block axis, where
   * its tabs already span the full width, so there is no share to divide.
   */
  :host([equal-width]:is([placement='block-start'], [placement='block-end']))
    ::slotted([slot='tab']) {
    flex: 1 1 0;
    min-width: 0;
    /* The label sits in the middle of the share it was given rather than
       against its leading edge, and wrapped lines center with it. */
    justify-content: center;
    text-align: center;
    /* Centered on the cross axis too. A label with no room left wraps, which
       makes that tab taller and stretches the rest of the row to match it;
       without this their single lines would sit against the top of the space
       they were stretched into while the wrapped one sat in the middle. */
    align-items: center;
  }

  /*
   * craft-popover gives itself display: contents, which would leave the menu
   * with no box to lay out or measure — and, being an author style, would also
   * beat the UA's [hidden] rule. Rules here are in the outer tree relative to
   * the menu's shadow root, so they win over its :host block.
   */
  .tabs__overflow {
    display: flex;
    align-items: center;
    flex: none;
    /* Above the tabs, so the invoker's own click-target pseudo-element can't
       be covered by the tab beside it. */
    position: relative;
    z-index: 1;
  }

  .tabs__overflow[hidden] {
    display: none;
  }

  ::slotted([slot='panel']) {
    --c-focus-outline-offset: calc(var(--c-focus-outline-width) * -1);
  }

  .tabs__panels {
    min-width: 0;
    background-color: var(--c-surface-default);
    /* The zero minimum undoes the automatic one, which would otherwise hold
       the flex item open at its content's height. */
    min-block-size: 0;
    overflow-y: auto;
  }

  /*
   * The strip below the panels. The indicator moves to the tab's block start,
   * pulled 1px up to sit on top of the strip's rule.
   *
   * Custom properties set on the host inherit into the slotted <craft-tab>s
   * (they're light-DOM children), which is how the tabs move their indicator
   * without reading the placement themselves.
   */
  :host([placement='block-end']) {
    --c-tab-indicator-inset-block-start: -1px;
    --c-tab-indicator-inset-block-end: auto;
  }

  :host([placement='block-end']) .tabs {
    flex-direction: column-reverse;
  }

  :host([placement='block-end']) .tabs__strip {
    border-block-end-width: 0;
    border-block-start-width: 1px;
  }

  /* The strip beside the panels, running down the block axis. */
  :host(:is([placement='inline-start'], [placement='inline-end'])) {
    --c-tab-indicator-inset-block-start: 0;
    --c-tab-indicator-inset-block-end: 0;
    --c-tab-indicator-block-size: auto;
    --c-tab-indicator-inline-size: calc(2rem / 16);
    /* Stacked tabs sit closer together than a row of them. */
    --c-tabs-tab-gap: var(--c-spacing-md);
  }

  :host(:is([placement='inline-start'], [placement='inline-end'])) .tabs {
    flex-direction: row;
  }

  :host(:is([placement='inline-start'], [placement='inline-end']))
    .tabs__strip {
    align-items: stretch;
    border-block-end-width: 0;
  }

  :host(:is([placement='inline-start'], [placement='inline-end']))
    .tabs__tab-group {
    flex-direction: column;
  }

  :host(:is([placement='inline-start'], [placement='inline-end']))
    .tabs__panels {
    flex: 1;
  }

  :host([placement='inline-start']) {
    --c-tab-indicator-inset-inline-start: auto;
    --c-tab-indicator-inset-inline-end: -1px;
  }

  :host([placement='inline-start']) .tabs__strip {
    border-inline-end-width: 1px;
  }

  /*
   * Reversed rather than reordered: the tabs stay first in the DOM, which is
   * the order the tab/tabpanel pattern wants them read in.
   */
  :host([placement='inline-end']) .tabs {
    flex-direction: row-reverse;
  }

  :host([placement='inline-end']) {
    --c-tab-indicator-inset-inline-start: -1px;
    --c-tab-indicator-inset-inline-end: auto;
  }

  :host([placement='inline-end']) .tabs__strip {
    border-inline-start-width: 1px;
  }

  /*
   * Fill: the tabs sit on a quiet track instead of a rule, and the selected
   * one is raised out of it. Its border carries the selection, so it keeps 3:1
   * against the track. The underline indicator isn't drawn.
   */
  :host([appearance='fill']) {
    --_track-padding: var(--c-spacing-sm);
    --_tab-radius: var(--c-form-control-radius);
    --c-tab-border-active: transparent;
    --c-tab-spacing-inline: var(--c-spacing-md);
    --c-tabs-tab-gap: var(--_track-padding);
  }

  :host([appearance='fill']) .tabs__strip {
    padding: var(--_track-padding);
    border-width: 0;
    border-radius: calc(var(--_tab-radius) + var(--_track-padding));
    background-color: var(--c-color-neutral-fill-quiet);
  }

  :host([appearance='fill']) ::slotted([slot='tab']) {
    border: 1px solid transparent;
    border-radius: var(--_tab-radius);
    color: var(--c-color-neutral-on-quiet);
  }

  @media (hover: hover) {
    :host([appearance='fill']) ::slotted([slot='tab']:hover:not([selected])) {
      background-color: color-mix(
        in srgb,
        var(--c-surface-raised) 60%,
        transparent
      );
      color: var(--c-color-neutral-on-normal);
    }
  }

  :host([appearance='fill']) ::slotted([slot='tab'][selected]) {
    border-color: var(--color-slate-500);
    background-color: var(--c-surface-raised);
    color: var(--c-color-neutral-on-normal);
    box-shadow: var(--c-shadow-xs);
  }

  @media (forced-colors: active) {
    :host([appearance='fill']) ::slotted([slot='tab'][selected]) {
      border-color: Highlight;
    }
  }
`,x_={BlockStart:`block-start`,BlockEnd:`block-end`,InlineStart:`inline-start`,InlineEnd:`inline-end`};Object.values(x_);var S_={Line:`line`,Fill:`fill`};Object.values(S_);var C_={Horizontal:`horizontal`,Vertical:`vertical`};Object.values(C_);var w_=[x_.InlineStart,x_.InlineEnd],T_=new Set([`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`]),q=new WeakSet,E_=new WeakMap,D_=new WeakMap,O_=new WeakMap,k_=new WeakMap,A_=new WeakMap,j_=new WeakMap,M_=new WeakMap,N_=new WeakMap,P_=new WeakMap,F_=new WeakMap,I_=new WeakMap,L_=new WeakMap,R_=class extends y_{constructor(...e){super(...e),x(this,q),this.placement=x_.BlockStart,this.appearance=S_.Line,this.label=null,this.equalWidth=!1,this.syncLocationHash=!0,this.size=`medium`,T(this,E_,[]),T(this,D_,!1),T(this,O_,[]),T(this,k_,null),T(this,A_,null),T(this,j_,void 0),T(this,M_,!1),T(this,N_,()=>{w(q,this,W_).call(this)}),T(this,P_,()=>{let e=decodeURIComponent(window.location.hash.slice(1));if(e===``)return;let t=B_.call(w(q,this)).findIndex((t,n)=>w(q,this,K_).call(this,n)===e);t>=0&&t!==this.selectedIndex&&(this.selectedIndex=t)}),T(this,F_,()=>{w(q,this,J_).call(this),B_.call(w(q,this)).forEach((e,t)=>{let n=()=>w(q,this,nv).call(this,t,!0),r=e=>{T_.has(e.key)&&e.preventDefault()},i=e=>w(q,this,rv).call(this,e);e.addEventListener(`click`,n),e.addEventListener(`keydown`,r),e.addEventListener(`keyup`,i),S(E_,this).push(()=>{e.removeEventListener(`click`,n),e.removeEventListener(`keydown`,r),e.removeEventListener(`keyup`,i)})}),w(q,this,W_).call(this),w(q,this,Y_).call(this)}),T(this,I_,()=>{S(M_,this)||(C(M_,this,!0),requestAnimationFrame(()=>{C(M_,this,!1),w(q,this,Z_).call(this)}))}),T(this,L_,e=>{e.target===e.currentTarget&&e.stopPropagation()})}static get styles(){return[...super.styles,re,b_]}get layout(){return z_.call(w(q,this))?C_.Vertical:C_.Horizontal}set layout(e){this.placement=e===C_.Vertical?x_.InlineStart:x_.BlockStart}refresh(){S(D_,this)&&w(q,this,Y_).call(this),w(q,this,Z_).call(this)}firstUpdated(e){C(D_,this,B_.call(w(q,this)).some(e=>e.controls));let t=this.shadowRoot?.querySelector(`slot[name="tab"]`);S(D_,this)?(t?.addEventListener(`slotchange`,S(F_,this)),S(F_,this).call(this)):(super.firstUpdated(e),t?.addEventListener(`slotchange`,S(N_,this))),w(q,this,W_).call(this),C(A_,this,this.selectedIndex),this.syncLocationHash&&S(P_,this).call(this),t?.addEventListener(`slotchange`,S(I_,this)),w(q,this,U_).call(this),w(q,this,Z_).call(this),this.label||console.error("<craft-tabs> needs a `label` naming what its tabs switch between.",this)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&(S(D_,this)&&S(F_,this).call(this),w(q,this,U_).call(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`hashchange`,S(P_,this)),w(q,this,J_).call(this),S(j_,this)?.disconnect(),C(j_,this,void 0)}updated(e){super.updated(e),!(e.has(`selectedIndex`)&&w(q,this,W_).call(this))&&(e.has(`selectedIndex`)&&(S(D_,this)&&w(q,this,Y_).call(this),S(A_,this)!==null&&this.selectedIndex!==S(A_,this)&&(w(q,this,q_).call(this),this.dispatchEvent(new CustomEvent(`craft-tab-show`))),C(A_,this,this.selectedIndex)),(e.has(`selectedIndex`)||e.has(`placement`)||e.has(`size`)||e.has(`equalWidth`))&&w(q,this,Z_).call(this))}render(){return m`
      <div class="tabs" part="base">
        <div class="tabs__strip" part="strip">
          <div
            class="tabs__tab-group"
            part="tab-group"
            role="tablist"
            aria-label="${this.label||i}"
            aria-orientation="${z_.call(w(q,this))?`vertical`:`horizontal`}"
          >
            <slot name="tab"></slot>
          </div>
          <!--
            The menu sits beside the tablist rather than inside it, so the
            tablist holds nothing but tabs. Its \`hidden\` state and \`actions\`
            are driven imperatively from the overflow measurement, not bound
            here — the measurement runs between renders and would otherwise
            fight Lit over the same attribute.
          -->
          <craft-action-menu
            class="tabs__overflow"
            part="overflow-menu"
            placement="bottom-end"
            hidden
            @craft-show=${S(L_,this)}
            @craft-hide=${S(L_,this)}
            @craft-after-show=${S(L_,this)}
            @craft-after-hide=${S(L_,this)}
            @craft-select=${S(L_,this)}
          >
            <!--
              Slotted rather than left to the menu's generated default, which
              asks craft-button for a \`variant="inherit"\` that isn't one of its
              variants — so it falls back to the solid fill and lands a filled
              button in the middle of the tab strip.
            -->
            <craft-button
              slot="invoker"
              part="overflow-invoker"
              type="button"
              variant="plain"
              size="small"
              flush="inline-end"
            >
              <!--
                The name has to come from the icon: craft-button does not
                name itself, so an icon-only button with nothing else to read
                is nameless. A label on the icon (or aria-label on the host)
                is what supplies one.
              -->
              <craft-icon
                name="ellipsis"
                label="${n(`More tabs`)}"
              ></craft-icon>
            </craft-button>
          </craft-action-menu>
        </div>
        <div class="tabs__panels" part="panels">
          <slot name="panel"></slot>
        </div>
      </div>
    `}};function z_(){return w_.includes(this.placement)}function B_(){return this.tabs}function V_(){return this.shadowRoot?.querySelector(`.tabs__tab-group`)??null}function H_(){return this.shadowRoot?.querySelector(`.tabs__overflow`)??null}function U_(){this.syncLocationHash&&window.addEventListener(`hashchange`,S(P_,this)),C(j_,this,new ResizeObserver(S(I_,this))),S(j_,this).observe(this)}function W_(){let e=B_.call(w(q,this))[this.selectedIndex];if(this.selectedIndex>=0&&e&&!e.disabled)return!1;let t=B_.call(w(q,this)).findIndex(e=>!e.disabled);return t<0||t===this.selectedIndex?!1:(this.selectedIndex=t,!0)}function G_(){B_.call(w(q,this)).forEach((e,t)=>{e.setAttribute(`tabindex`,t===this.selectedIndex?`0`:`-1`)})}function K_(e){return B_.call(w(q,this))[e]?.controls||null}function q_(){let e=this.syncLocationHash?w(q,this,K_).call(this,this.selectedIndex):null;if(e===null)return;let t=new URL(window.location.href);t.hash=e,window.history.replaceState(window.history.state,``,t)}function J_(){for(;S(E_,this).length;)S(E_,this).pop()?.()}function Y_(){let e=B_.call(w(q,this)).map(e=>w(q,this,X_).call(this,e)),t=e.some(Boolean);B_.call(w(q,this)).forEach((n,r)=>{let i=r===this.selectedIndex,a=e[r];if(n.id||=`tab-${Vt()}`,n.setAttribute(`role`,`tab`),n.toggleAttribute(`selected`,i),n.setAttribute(`aria-selected`,String(i)),!a){t&&console.error(`<craft-tabs> found no panel with id "${n.controls}".`,n);return}n.setAttribute(`aria-controls`,a.id),a.setAttribute(`role`,`tabpanel`),a.setAttribute(`aria-labelledby`,n.id),a.hasAttribute(`tabindex`)||a.setAttribute(`tabindex`,`0`),a.classList.toggle(`hidden`,!i),a.toggleAttribute(`selected`,i)}),w(q,this,G_).call(this)}function X_(e){return e.controls?document.getElementById(e.controls):null}function Z_(){let e=V_.call(w(q,this)),t=H_.call(w(q,this)),n=B_.call(w(q,this));if(!e||!t)return;if(z_.call(w(q,this))||this.equalWidth||n.length===0){w(q,this,$_).call(this,[]);return}n.forEach(e=>e.removeAttribute(`hidden`)),t.hidden=!0,e.classList.add(`tabs__tab-group--measuring`);let r=w(q,this,Q_).call(this,e),i=n.map(e=>e.offsetWidth);if(e.classList.remove(`tabs__tab-group--measuring`),i.reduce((e,t,n)=>e+t+(n?r:0),0)<=e.clientWidth+1){w(q,this,$_).call(this,[]);return}t.hidden=!1;let a=e.clientWidth,o=[],s=0;for(let e=0;e<n.length;e++){let t=i[e]+(o.length?r:0);if(s+t>a+1)break;s+=t,o.push(e)}let c=this.selectedIndex;if(c>=0&&c<n.length&&!o.includes(c)){let e=i[c];for(;o.length&&s+e+r>a;){let e=o.pop();s-=i[e]+(o.length?r:0)}o.push(c)}let l=new Set(o);w(q,this,$_).call(this,n.map((e,t)=>t).filter(e=>!l.has(e)))}function Q_(e){let t=parseFloat(getComputedStyle(e).columnGap);return Number.isFinite(t)?t:0}function $_(e){let t=H_.call(w(q,this)),n=new Set(e);if(B_.call(w(q,this)).forEach((e,t)=>{e.toggleAttribute(`hidden`,n.has(t))}),C(O_,this,e),!t)return;t.hidden=e.length===0;let r=JSON.stringify(e.map(e=>{let t=B_.call(w(q,this))[e];return[e,t.textContent?.trim()??``,t.disabled]}));r!==S(k_,this)&&(C(k_,this,r),t.actions=w(q,this,ev).call(this))}function ev(){return S(O_,this).map(e=>{let t=B_.call(w(q,this))[e];return{label:t.textContent?.trim()??``,disabled:t.disabled,onClick:()=>w(q,this,tv).call(this,e)}})}function tv(e){let t=B_.call(w(q,this))[e];if(!t||t.disabled)return;let n=H_.call(w(q,this));n&&(n.opened=!1),this.selectedIndex=e,w(q,this,Z_).call(this),t.focus()}function nv(e,t){let n=B_.call(w(q,this))[e];!n||n.disabled||(this.selectedIndex=e,t&&n.focus())}function rv(e){if(!T_.has(e.key))return;let t=w(q,this,iv).call(this,e.key);t!==-1&&w(q,this,nv).call(this,t,!0)}function iv(e){let t=B_.call(w(q,this)),n=e=>t[e]&&!t[e].disabled&&!t[e].hidden;if(e===`Home`)return t.findIndex((e,t)=>n(t));if(e===`End`){for(let e=t.length-1;e>=0;e--)if(n(e))return e;return-1}let r=e===`ArrowRight`||e===`ArrowDown`?1:-1;for(let e=1;e<=t.length;e++){let i=((this.selectedIndex+r*e)%t.length+t.length)%t.length;if(n(i))return i}return-1}r([c({reflect:!0})],R_.prototype,`placement`,void 0),r([c({reflect:!0})],R_.prototype,`appearance`,void 0),r([c()],R_.prototype,`label`,void 0),r([c({type:Boolean,reflect:!0,attribute:`equal-width`})],R_.prototype,`equalWidth`,void 0),r([c({attribute:`sync-location-hash`,converter:{fromAttribute:e=>e!==`false`}})],R_.prototype,`syncLocationHash`,void 0),r([c({reflect:!0})],R_.prototype,`layout`,null),r([c({reflect:!0})],R_.prototype,`size`,void 0),customElements.get(`craft-tabs`)||customElements.define(`craft-tabs`,R_);var av=o`
  :host {
    display: inline-flex;
    padding-inline: var(--c-tab-spacing-inline, 0);
    padding-block: var(--c-tab-spacing-block, 0.5em);
    position: relative;
    cursor: pointer;
  }

  /*
   * The display above is an author style, so it beats the UA's [hidden] rule —
   * without this a tab collapsed into <craft-tabs>' overflow menu would keep
   * its space in the strip.
   */
  :host([hidden]) {
    display: none;
  }

  /*
   * The selected indicator. Its geometry comes from custom properties so the
   * strip can move it without knowing anything about this shadow root: the
   * defaults below are the block-start placement (a rule underneath, pulled
   * 1px down to sit on top of the strip's border), and the other placements
   * publish the vars that move it to the edge facing the panels.
   */
  :host::after {
    content: '';
    position: absolute;
    display: block;
    background-color: transparent;
    inset-block-start: var(--c-tab-indicator-inset-block-start, auto);
    inset-block-end: var(--c-tab-indicator-inset-block-end, -1px);
    inset-inline-start: var(--c-tab-indicator-inset-inline-start, 0);
    inset-inline-end: var(--c-tab-indicator-inset-inline-end, 0);
    block-size: var(--c-tab-indicator-block-size, calc(2rem / 16));
    inline-size: var(--c-tab-indicator-inline-size, auto);
  }

  :host([selected])::after {
    background-color: var(
      --c-tab-border-active,
      var(--c-color-accent-fill-loud)
    );
  }

  @media (forced-colors: active) {
    :host([selected])::after {
      background-color: Highlight;
    }
  }

  :host([selected]) {
    cursor: default;
    font-weight: var(--c-tab-font-weight-active, var(--font-weight-semibold));
  }

  /* A hidden copy of the label in the selected weight reserves its width,
     so selecting a tab doesn't shift the strip. */
  .tab__label {
    display: inline-flex;
    flex-direction: column;
    min-width: 0;
  }

  ::slotted([slot='prefix']) {
    align-self: center;
    margin-inline-end: var(--c-spacing-sm);
  }

  ::slotted([slot='suffix']) {
    align-self: center;
    margin-inline-start: var(--c-spacing-sm);
  }

  /* Truncated only when <craft-tabs> asks, as it does for a selected tab that
     doesn't fit; otherwise a label wraps. */
  .tab__text {
    display: block;
    overflow: var(--_tab-text-overflow, visible);
    text-overflow: ellipsis;
    white-space: var(--_tab-text-wrap, normal);
    ${Ni}
  }

  .tab__label::after {
    content: attr(data-text);
    block-size: 0;
    overflow: hidden;
    visibility: hidden;
    user-select: none;
    pointer-events: none;
    font-weight: var(--c-tab-font-weight-active, var(--font-weight-semibold));
  }

  /*
   * Out of hit-testing, not just dimmed: <craft-tabs> binds its click handler
   * to every tab, so a disabled tab that still takes pointer events would
   * select itself.
   */
  :host([disabled]) {
    cursor: default;
    /* A token rather than opacity, which dims the label below the contrast
       floor and reads as a real violation to auditing tools. */
    color: var(--c-tab-text-disabled, var(--c-status-disabled-text));
    pointer-events: none;
  }
`,ov=class extends d{constructor(...e){super(...e),this.disabled=!1,this.controls=null,this._lightDom=new se(this,{characterData:!0})}get selected(){return this.hasAttribute(`selected`)}render(){return m`<slot name="prefix" class="tab__prefix"></slot
      ><span class="tab__label" data-text="${this.textContent?.trim()??``}"
        ><span class="tab__text"><slot></slot></span></span
      ><slot name="suffix" class="tab__suffix"></slot>`}};ov.styles=[re,av],r([c({type:Boolean,reflect:!0})],ov.prototype,`disabled`,void 0),r([c({reflect:!0})],ov.prototype,`controls`,void 0),customElements.get(`craft-tab`)||customElements.define(`craft-tab`,ov);var sv=class{diff(e,t,n={}){let r;typeof n==`function`?(r=n,n={}):`callback`in n&&(r=n.callback);let i=this.castInput(e,n),a=this.castInput(t,n),o=this.removeEmpty(this.tokenize(i,n)),s=this.removeEmpty(this.tokenize(a,n));return this.diffWithOptionsObj(o,s,n,r)}diffWithOptionsObj(e,t,n,r){let i=e=>{if(e=this.postProcess(e,n),r){setTimeout(function(){r(e)},0);return}else return e},a=t.length,o=e.length,s=1,c=a+o;n.maxEditLength!=null&&(c=Math.min(c,n.maxEditLength));let l=n.timeout??1/0,u=Date.now()+l,d=[{oldPos:-1,lastComponent:void 0}],f=this.extractCommon(d[0],t,e,0,n);if(d[0].oldPos+1>=o&&f+1>=a)return i(this.buildValues(d[0].lastComponent,t,e));let p=-1/0,m=1/0,h=()=>{for(let r=Math.max(p,-s);r<=Math.min(m,s);r+=2){let s,c=d[r-1],l=d[r+1];c&&(d[r-1]=void 0);let u=!1;if(l){let e=l.oldPos-r;u=l&&0<=e&&e<a}let h=c&&c.oldPos+1<o;if(!u&&!h){d[r]=void 0;continue}if(s=!h||u&&c.oldPos<l.oldPos?this.addToPath(l,!0,!1,0,n):this.addToPath(c,!1,!0,1,n),f=this.extractCommon(s,t,e,r,n),s.oldPos+1>=o&&f+1>=a)return i(this.buildValues(s.lastComponent,t,e))||!0;d[r]=s,s.oldPos+1>=o&&(m=Math.min(m,r-1)),f+1>=a&&(p=Math.max(p,r+1))}s++};if(r)(function e(){setTimeout(function(){if(s>c||Date.now()>u)return r(void 0);h()||e()},0)})();else for(;s<=c&&Date.now()<=u;){let e=h();if(e)return e}}addToPath(e,t,n,r,i){let a=e.lastComponent;return a&&!i.oneChangePerToken&&a.added===t&&a.removed===n?{oldPos:e.oldPos+r,lastComponent:{count:a.count+1,added:t,removed:n,previousComponent:a.previousComponent}}:{oldPos:e.oldPos+r,lastComponent:{count:1,added:t,removed:n,previousComponent:a}}}extractCommon(e,t,n,r,i){let a=t.length,o=n.length,s=e.oldPos,c=s-r,l=0;for(;c+1<a&&s+1<o&&this.equals(n[s+1],t[c+1],i);)c++,s++,l++,i.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return l&&!i.oneChangePerToken&&(e.lastComponent={count:l,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=s,c}equals(e,t,n){return n.comparator?n.comparator(e,t):e===t||!!n.ignoreCase&&e.toLowerCase()===t.toLowerCase()}removeEmpty(e){let t=[];for(let n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}castInput(e,t){return e}tokenize(e,t){return Array.from(e)}join(e){return e.join(``)}postProcess(e,t){return e}get useLongestToken(){return!1}buildValues(e,t,n){let r=[],i;for(;e;)r.push(e),i=e.previousComponent,delete e.previousComponent,e=i;r.reverse();let a=r.length,o=0,s=0,c=0;for(;o<a;o++){let e=r[o];if(e.removed)e.value=this.join(n.slice(c,c+e.count)),c+=e.count;else{if(!e.added&&this.useLongestToken){let r=t.slice(s,s+e.count);r=r.map(function(e,t){let r=n[c+t];return r.length>e.length?r:e}),e.value=this.join(r)}else e.value=this.join(t.slice(s,s+e.count));s+=e.count,e.added||(c+=e.count)}}return r}};new class extends sv{};function cv(e,t){let n;for(n=0;n<e.length&&n<t.length;n++)if(e[n]!=t[n])return e.slice(0,n);return e.slice(0,n)}function lv(e,t){let n;if(!e||!t||e[e.length-1]!=t[t.length-1])return``;for(n=0;n<e.length&&n<t.length;n++)if(e[e.length-(n+1)]!=t[t.length-(n+1)])return e.slice(-n);return e.slice(-n)}function uv(e,t,n){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return n+e.slice(t.length)}function dv(e,t,n){if(!t)return e+n;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+n}function fv(e,t){return uv(e,t,``)}function pv(e,t){return dv(e,t,``)}function mv(e,t){return t.slice(0,hv(e,t))}function hv(e,t){let n=0;e.length>t.length&&(n=e.length-t.length);let r=t.length;e.length<t.length&&(r=e.length);let i=Array(r),a=0;i[0]=0;for(let e=1;e<r;e++){for(t[e]==t[a]?i[e]=i[a]:i[e]=a;a>0&&t[e]!=t[a];)a=i[a];t[e]==t[a]&&a++}a=0;for(let r=n;r<e.length;r++){for(;a>0&&e[r]!=t[a];)a=i[a];e[r]==t[a]&&a++}return a}function gv(e,t){let n=[];for(let r of Array.from(t.segment(e))){let e=r.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(e)?n[n.length-1]+=e:n.push(e)}return n}function _v(e,t){if(t)return yv(e,t)[1];let n;for(n=e.length-1;n>=0&&e[n].match(/\s/);n--);return e.substring(n+1)}function vv(e,t){if(t)return yv(e,t)[0];let n=e.match(/^\s*/);return n?n[0]:``}function yv(e,t){if(!t)return[vv(e),_v(e)];if(t.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);let n=gv(e,t),r=n[0],i=n[n.length-1];return[/\s/.test(r)?r:``,/\s/.test(i)?i:``]}var bv=`a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}`,xv=RegExp(`[${bv}]+|\\s+|[^${bv}]`,`ug`);new class extends sv{equals(e,t,n){return n.ignoreCase&&(e=e.toLowerCase(),t=t.toLowerCase()),e.trim()===t.trim()}tokenize(e,t={}){let n;if(t.intlSegmenter){let r=t.intlSegmenter;if(r.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);n=gv(e,r)}else n=e.match(xv)||[];let r=[],i=null;return n.forEach(e=>{/\s/.test(e)?i==null?r.push(e):r.push(r.pop()+e):i!=null&&/\s/.test(i)?r[r.length-1]==i?r.push(r.pop()+e):r.push(i+e):r.push(e),i=e}),r}join(e){return e.map((e,t)=>t==0?e:e.replace(/^\s+/,``)).join(``)}postProcess(e,t){if(!e||t.oneChangePerToken)return e;let n=null,r=null,i=null;return e.forEach(e=>{e.added?r=e:e.removed?i=e:((r||i)&&Sv(n,i,r,e,t.intlSegmenter),n=e,r=null,i=null)}),(r||i)&&Sv(n,i,r,null,t.intlSegmenter),e}};function Sv(e,t,n,r,i){if(t&&n){let[a,o]=yv(t.value,i),[s,c]=yv(n.value,i);if(e){let r=cv(a,s);e.value=dv(e.value,s,r),t.value=fv(t.value,r),n.value=fv(n.value,r)}if(r){let e=lv(o,c);r.value=uv(r.value,c,e),t.value=pv(t.value,e),n.value=pv(n.value,e)}}else if(n){if(e){let e=vv(n.value,i);n.value=n.value.substring(e.length)}if(r){let e=vv(r.value,i);r.value=r.value.substring(e.length)}}else if(e&&r){let n=vv(r.value,i),[a,o]=yv(t.value,i),s=cv(n,a);t.value=fv(t.value,s);let c=lv(fv(n,s),o);t.value=pv(t.value,c),r.value=uv(r.value,n,c),e.value=dv(e.value,n,n.slice(0,n.length-c.length))}else if(r){let e=vv(r.value,i),n=mv(_v(t.value,i),e);t.value=pv(t.value,n)}else if(e){let n=mv(_v(e.value,i),vv(t.value,i));t.value=fv(t.value,n)}}var Cv=new class extends sv{tokenize(e){let t=RegExp(`(\\r?\\n)|[${bv}]+|[^\\S\\n\\r]+|[^${bv}]`,`ug`);return e.match(t)||[]}};function wv(e,t,n){return Cv.diff(e,t,n)}new class extends sv{constructor(){super(...arguments),this.tokenize=Tv}equals(e,t,n){return n.ignoreWhitespace?((!n.newlineIsToken||!e.includes(`
`))&&(e=e.trim()),(!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(e.endsWith(`
`)&&(e=e.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(e,t,n)}};function Tv(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));let n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let e=0;e<r.length;e++){let i=r[e];e%2&&!t.newlineIsToken?n[n.length-1]+=i:n.push(i)}return n}function Ev(e){return e==`.`||e==`!`||e==`?`}new class extends sv{tokenize(e){let t=[],n=0;for(let r=0;r<e.length;r++){if(r==e.length-1){t.push(e.slice(n));break}if(Ev(e[r])&&e[r+1].match(/\s/)){for(t.push(e.slice(n,r+1)),r=n=r+1;e[r+1]?.match(/\s/);)r++;t.push(e.slice(n,r+1)),n=r+1}}return t}},new class extends sv{tokenize(e){return e.split(/([{}:;,]|\s+)/)}},new class extends sv{constructor(){super(...arguments),this.tokenize=Tv}get useLongestToken(){return!0}castInput(e,t){let{undefinedReplacement:n,stringifyReplacer:r=(e,t)=>t===void 0?n:t}=t;return typeof e==`string`?e:JSON.stringify(Dv(e,null,null,r),null,`  `)}equals(e,t,n){return super.equals(e.replace(/,([\r\n])/g,`$1`),t.replace(/,([\r\n])/g,`$1`),n)}};function Dv(e,t,n,r,i){t||=[],n||=[],r&&(e=r(i===void 0?``:i,e));let a;for(a=0;a<t.length;a+=1)if(t[a]===e)return n[a];let o;if(Object.prototype.toString.call(e)===`[object Array]`){for(t.push(e),o=Array(e.length),n.push(o),a=0;a<e.length;a+=1)o[a]=Dv(e[a],t,n,r,String(a));return t.pop(),n.pop(),o}if(e&&e.toJSON&&(e=e.toJSON()),typeof e==`object`&&e){t.push(e),o={},n.push(o);let i=[],s;for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&i.push(s);for(i.sort(),a=0;a<i.length;a+=1)s=i[a],o[s]=Dv(e[s],t,n,r,s);t.pop(),n.pop()}else o=e;return o}new class extends sv{tokenize(e){return e.slice()}join(e){return e}removeEmpty(e){return e}};var Ov=e=>!e.added&&!e.removed;function kv(e,t){let n=wv(e,t,{timeout:100})??[{value:e,added:!1,removed:!0,count:1},{value:t,added:!0,removed:!1,count:1}],r=[],i=``,a=``,o=()=>{i&&r.push({value:i,added:!1,removed:!0,count:1}),a&&r.push({value:a,added:!0,removed:!1,count:1}),i=a=``};return n.forEach((e,t)=>{let s=n[t+1],c=Ov(e)&&/^[^\S\r\n\u2028\u2029]+$/.test(e.value)&&!!(i||a)&&s!==void 0&&!Ov(s);(e.removed||c)&&(i+=e.value),(e.added||c)&&(a+=e.value),Ov(e)&&!c&&(o(),r.push(e))}),o(),r}function Av(e,t,n=[],r=!1){if(!e)return{pieces:[{kind:`equal`,parts:[{text:t.map(e=>e.value).join(``),marked:!1}]}],collapsible:!1};let i=n.flatMap(t=>{let n=e.indexOf(t);return n===-1?[]:[[n,n+t.length]]}),a=[],o=0,s=!1;return t.forEach((e,n)=>{let c=e.value;if(e.added){a.push({kind:`insert`,parts:[{text:c,marked:!1}]});return}let l=o;if(o+=c.length,e.removed||c.length<=200){a.push({kind:e.removed?`delete`:`equal`,parts:Pv(c,l,i)});return}let u=[],d={kind:`gap`,parts:[{text:`…`,marked:!1}]},f=0;for(let[e,r]of jv(c,l,n>0,n<t.length-1,i))e>f&&u.push(d),u.push({kind:`equal`,parts:Pv(c.slice(e,r),l+e,i)}),f=r;f<c.length&&u.push(d),s||=u.includes(d),a.push(...r?[{kind:`equal`,parts:Pv(c,l,i)}]:u)}),{pieces:a,collapsible:s}}function jv(e,t,n,r,i){let a=[];n&&a.push([0,80]),r&&a.push([e.length-80,e.length]);for(let[n,r]of i)n<t+e.length&&r>t&&a.push([n-t-80/2,r-t+80/2]);if(!a.length)return[[0,e.length]];let o=[];for(let[t,n]of a.map(([t,n])=>[Mv(e,Math.max(t,0)),Nv(e,Math.min(n,e.length))]).sort((e,t)=>e[0]-t[0])){let e=o.at(-1);e&&t-e[1]<40?e[1]=Math.max(e[1],n):o.push([t,n])}return o[0][0]<40&&(o[0][0]=0),e.length-o.at(-1)[1]<40&&(o.at(-1)[1]=e.length),o}function Mv(e,t){let n=e.slice(0,t).search(/\s\S*$/);return t===0||n===-1?0:n+1}function Nv(e,t){let n=e.slice(t).search(/\s/);return n===-1?e.length:t+n}function Pv(e,t,n){let r=(e,t)=>n.some(([n,r])=>n<t&&r>e),i=new Set([0,e.length]);for(let[r,a]of n)i.add(Math.min(Math.max(r-t,0),e.length)),i.add(Math.min(Math.max(a-t,0),e.length));let a=[...i].sort((e,t)=>e-t);return a.slice(1).flatMap((n,i)=>{let o=a[i];return n>o?[{text:e.slice(o,n),marked:r(t+o,t+n)}]:[]})}var Fv=o`
  :host {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: var(--c-spacing-md);
  }

  :host([hidden]) {
    display: none;
  }

  .text {
    margin: 0;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    line-height: 1.6;
  }

  del,
  ins {
    border-radius: var(--c-radius-sm);
    padding-inline: 0.125em;
  }

  del {
    background: var(--c-color-danger-fill-quiet);
    color: var(--c-color-danger-on-quiet);
    text-decoration: line-through;
  }

  ins {
    background: var(--c-color-success-fill-quiet);
    color: var(--c-color-success-on-quiet);
    text-decoration: underline;
  }

  del + ins {
    margin-inline-start: 0.25em;
  }

  mark {
    background: none;
    color: inherit;
    text-decoration: underline wavy var(--c-color-warning-border-normal);
    text-decoration-skip-ink: none;
    text-underline-offset: 0.25em;
  }

  .gap {
    padding-inline: 0.25em;
  }
`,Iv=class extends d{constructor(...e){super(...e),this.current=``,this.proposed=``,this.highlights=[],this.collapse=!1,this.label=``,this.expanded=!1,this.changes=[]}willUpdate(e){(e.has(`current`)||e.has(`proposed`))&&(this.changes=kv(this.current,this.proposed),this.expanded=!1)}render(){let{pieces:e,collapsible:t}=Av(this.current,this.changes,this.highlights,!this.collapse||this.expanded);return m`
      <p id="text" class="text" part="text">${e.map(e=>this.renderPiece(e))}</p>
      ${this.collapse&&t?m`<craft-button
            part="toggle"
            type="button"
            variant="plain"
            size="small"
            flush="inline"
            aria-controls="text"
            aria-expanded=${this.expanded?`true`:`false`}
            @click=${()=>this.expanded=!this.expanded}
          >
            ${this.expanded?n(`Show changes only`):n(`Show full text`)}${this.label?m`<span class="cp-visually-hidden"> ${this.label}</span>`:i}
          </craft-button>`:i}
    `}renderPiece(e){let t=e.parts.map(e=>e.marked?m`<mark>${e.text}</mark>`:m`${e.text}`);switch(e.kind){case`gap`:return m`<span class="gap"
          ><span aria-hidden="true">${t}</span
          ><span class="cp-visually-hidden">${n(`Unchanged text`)}</span></span
        >`;case`delete`:return m`<del
          ><span class="cp-visually-hidden">${n(`Deleted:`)} </span>${t}</del
        >`;case`insert`:return m`<ins
          ><span class="cp-visually-hidden">${n(`Inserted:`)} </span
          >${t}</ins
        >`;default:return t}}};Iv.styles=[le,Fv],r([c()],Iv.prototype,`current`,void 0),r([c()],Iv.prototype,`proposed`,void 0),r([c({type:Array})],Iv.prototype,`highlights`,void 0),r([c({type:Boolean,reflect:!0})],Iv.prototype,`collapse`,void 0),r([c()],Iv.prototype,`label`,void 0),r([p()],Iv.prototype,`expanded`,void 0),customElements.get(`craft-text-diff`)||customElements.define(`craft-text-diff`,Iv);var Lv=new Map;function Rv(e){var t=Lv.get(e);t&&t.destroy()}function zv(e){var t=Lv.get(e);t&&t.update()}var Bv=null;typeof window>`u`?((Bv=function(e){return e}).destroy=function(e){return e},Bv.update=function(e){return e}):((Bv=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return function(e){if(e&&e.nodeName&&e.nodeName===`TEXTAREA`&&!Lv.has(e)){var t,n=null,r=window.getComputedStyle(e),i=(t=e.value,function(){o({testForHeightReduction:t===``||!e.value.startsWith(t),restoreTextAlign:null}),t=e.value}),a=function(t){e.removeEventListener(`autosize:destroy`,a),e.removeEventListener(`autosize:update`,s),e.removeEventListener(`input`,i),window.removeEventListener(`resize`,s),Object.keys(t).forEach(function(n){return e.style[n]=t[n]}),Lv.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,textAlign:e.style.textAlign,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener(`autosize:destroy`,a),e.addEventListener(`autosize:update`,s),e.addEventListener(`input`,i),window.addEventListener(`resize`,s),e.style.overflowX=`hidden`,e.style.wordWrap=`break-word`,Lv.set(e,{destroy:a,update:s}),s()}function o(t){var i,a,s=t.restoreTextAlign,c=s===void 0?null:s,l=t.testForHeightReduction,u=l===void 0||l,d=r.overflowY;if(e.scrollHeight!==0&&(r.resize===`vertical`?e.style.resize=`none`:r.resize===`both`&&(e.style.resize=`horizontal`),u&&(i=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push([e.parentNode,e.parentNode.scrollTop]),e=e.parentNode;return function(){return t.forEach(function(e){var t=e[0],n=e[1];t.style.scrollBehavior=`auto`,t.scrollTop=n,t.style.scrollBehavior=null})}}(e),e.style.height=``),a=r.boxSizing===`content-box`?e.scrollHeight-(parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)):e.scrollHeight+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),r.maxHeight!==`none`&&a>parseFloat(r.maxHeight)?(r.overflowY===`hidden`&&(e.style.overflow=`scroll`),a=parseFloat(r.maxHeight)):r.overflowY!==`hidden`&&(e.style.overflow=`hidden`),e.style.height=a+`px`,c&&(e.style.textAlign=c),i&&i(),n!==a&&(e.dispatchEvent(new Event(`autosize:resized`,{bubbles:!0})),n=a),d!==r.overflow&&!c)){var f=r.textAlign;r.overflow===`hidden`&&(e.style.textAlign=f===`start`?`end`:`start`),o({restoreTextAlign:f,testForHeightReduction:!0})}}function s(){o({testForHeightReduction:!0,restoreTextAlign:null})}}(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],Rv),e},Bv.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],zv),e});var Vv=Bv,Hv=class extends xi{get _inputNode(){return Array.from(this.children).find(e=>e.slot===`input`)}},Uv=class extends Ti(Hv){static get properties(){return{maxRows:{type:Number,attribute:`max-rows`},rows:{type:Number,reflect:!0},readOnly:{type:Boolean,attribute:`readonly`,reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`textarea`);return e.style.resize!==void 0&&(e.style.resize=`none`),e}}}constructor(){super(),this.rows=2,this.maxRows=6,this.readOnly=!1,this.placeholder=``}connectedCallback(){super.connectedCallback(),this.__initializeAutoresize(),this.__intersectionObserver=new IntersectionObserver(()=>this.resizeTextarea()),this.__intersectionObserver.observe(this)}updated(e){if(super.updated(e),e.has(`name`)&&(this._inputNode.name=this.name),e.has(`autocomplete`)&&(this._inputNode.autocomplete=this.autocomplete),e.has(`disabled`)&&(this._inputNode.disabled=this.disabled,this.validate()),e.has(`rows`)){let e=this._inputNode;e&&(e.rows=this.rows)}if(e.has(`readOnly`)){let e=this._inputNode;e&&(e.readOnly=this.readOnly)}if(e.has(`placeholder`)){let e=this._inputNode;e&&(e.placeholder=this.placeholder)}e.has(`modelValue`)&&this.resizeTextarea(),(e.has(`maxRows`)||e.has(`rows`))&&this.setTextareaMaxHeight()}disconnectedCallback(){super.disconnectedCallback(),Vv.destroy(this._inputNode)}setTextareaMaxHeight(){let{value:e}=this._inputNode;this._inputNode.value=``,this.resizeTextarea();let t=window.getComputedStyle(this._inputNode,null),n=parseFloat(t.lineHeight)||parseFloat(t.height)/this.rows,r=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),i=parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),a=t.boxSizing===`border-box`?r+i:0;this._inputNode.style.maxHeight=`${n*this.maxRows+a}px`,this._inputNode.value=e,this.resizeTextarea()}static get styles(){return[...super.styles,o`
        .input-group__container > .input-group__input ::slotted(.form-control) {
          box-sizing: content-box;
          overflow-x: hidden; /* for FF adds height to the TextArea to reserve place for scroll-bars */
        }

        /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
        :host([disabled]) ::slotted(textarea) {
          user-select: none;
        }
      `]}get updateComplete(){return this.__textareaUpdateComplete?Promise.all([this.__textareaUpdateComplete,super.updateComplete]):super.updateComplete}resizeTextarea(){Vv.update(this._inputNode)}__initializeAutoresize(){this.__shady_native_contains?this.__textareaUpdateComplete=this.__waitForTextareaRenderedInRealDOM().then(()=>{this.__startAutoresize(),this.__textareaUpdateComplete=null}):this.__startAutoresize()}async __waitForTextareaRenderedInRealDOM(){let e=3;for(;e!==0&&!this.__shady_native_contains(this._inputNode);)await new Promise(e=>setTimeout(e)),--e}__startAutoresize(){Vv(this._inputNode),this.setTextareaMaxHeight()}},Wv=o`
  :host([monospace]) ::slotted([slot='input']) {
    font-family: var(--c-font-mono, monospace) !important;
    font-size: var(--c-text-sm);
  }

  ::slotted(label) {
    font-weight: bold;
  }

  ::slotted([slot='input']) {
    ${Zn}
    padding-block: var(--c-spacing-md);
    line-height: var(--leading-normal);
    resize: vertical;
  }
`,Gv=new WeakMap,Kv=new WeakMap,qv=new WeakMap,Jv=new WeakMap,Yv=new WeakSet,Xv=class extends pr(Uv){constructor(...e){super(...e),x(this,Yv),this.monospace=!1,this.maxRows=30,T(this,Gv,void 0),T(this,Kv,void 0),T(this,qv,null),T(this,Jv,e=>{C(qv,this,e.target.style.height)})}static get styles(){return[...super.styles,tr,Wv]}setTextareaMaxHeight(){if(!Number.isFinite(this.maxRows)){this._inputNode?.style.removeProperty(`max-height`);return}super.setTextareaMaxHeight()}connectedCallback(){super.connectedCallback(),w(Yv,this,Zv).call(this)}disconnectedCallback(){super.disconnectedCallback(),S(Gv,this)?.disconnect(),C(Gv,this,void 0),S(Kv,this)?.disconnect(),C(Kv,this,void 0),this._inputNode?.removeEventListener(`autosize:resized`,S(Jv,this))}};function Zv(){let e=this._inputNode;!e||typeof ResizeObserver>`u`||typeof MutationObserver>`u`||(C(qv,this,e.style.height),e.style.removeProperty(`resize`),e.addEventListener(`autosize:resized`,S(Jv,this)),C(Kv,this,new MutationObserver(()=>{e.style.resize!==``&&e.style.removeProperty(`resize`)})),S(Kv,this).observe(e,{attributes:!0,attributeFilter:[`style`]}),C(Gv,this,new ResizeObserver(()=>{if(e.style.height===S(qv,this))return;let t=e.style.height;Vv.destroy(e),e.style.height=t,e.style.removeProperty(`overflow`),S(Kv,this)?.disconnect(),C(Kv,this,void 0),S(Gv,this)?.disconnect(),C(Gv,this,void 0)})),S(Gv,this).observe(e))}r([c({type:Boolean,reflect:!0})],Xv.prototype,`monospace`,void 0),r([c({attribute:`max-rows`,converter:{fromAttribute:e=>e===`none`?1/0:e===null?30:Number(e)}})],Xv.prototype,`maxRows`,void 0),customElements.get(`craft-textarea`)||customElements.define(`craft-textarea`,Xv);var Qv=o`
  :host {
    display: block;
    min-width: 0;
  }

  :host([hidden]) {
    display: none;
  }

  .timeline-item {
    position: relative;
    display: grid;
    grid-template-columns: 1.75rem minmax(0, 1fr);
    gap: var(--c-spacing-md);
    padding-block-end: var(--c-spacing-md);
  }

  :host([last]) .timeline-item {
    padding-block-end: 0;
  }

  .timeline-item::after {
    position: absolute;
    inset-block: calc(var(--c-spacing-md) + 0.875rem)
      calc(-1 * var(--c-spacing-md) - 0.875rem);
    inset-inline-start: 0.85rem;
    width: 1px;
    background: var(--c-color-neutral-border-quiet);
    content: '';
  }

  :host([last]) .timeline-item::after {
    display: none;
  }

  .timeline-item__marker {
    z-index: 1;
    display: grid;
    width: 1.75rem;
    height: 1.75rem;
    place-items: center;
    border: 1px solid var(--c-color-neutral-border-normal);
    border-radius: 50%;
    background: var(--c-color-neutral-fill-quiet);
  }

  .timeline-item__content,
  .timeline-item__header,
  .timeline-item__heading,
  .timeline-item__body {
    min-width: 0;
  }

  .timeline-item__content {
    display: flex;
    flex-direction: column;
    gap: var(--c-spacing-xs);
  }

  .timeline-item__header {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: start;
    column-gap: var(--c-spacing-xs);
    padding-block-start: max(0px, (1.75rem - 1lh) / 2);
  }

  .timeline-item__meta {
    position: relative;
    inset-block-start: 1px;
    display: flex;
    flex: none;
    align-items: center;
    gap: var(--c-spacing-xs);
    block-size: 1lh;
    color: var(--c-text-quiet);
    white-space: nowrap;
  }

  .timeline-item__meta slot {
    font-size: var(--c-text-xs);
    line-height: 1;
  }

  .timeline-item__footer {
    color: var(--c-text-quiet);
    font-size: var(--c-text-xs);
  }
`,$v=class extends d{constructor(...e){super(...e),this.last=!1,this._hasHeading=!1,this._hasMeta=!1,this._hasBody=!1,this._hasFooter=!1,this._lightDomObserver=new MutationObserver(()=>this._syncSlotPresence())}connectedCallback(){super.connectedCallback(),this._syncSlotPresence(),this._lightDomObserver.observe(this,{childList:!0,subtree:!0,attributes:!0,characterData:!0,attributeFilter:[`slot`]})}disconnectedCallback(){super.disconnectedCallback(),this._lightDomObserver.disconnect()}_syncSlotPresence(){this._hasHeading=!!this.querySelector(`:scope > [slot="heading"]`),this._hasMeta=!!this.querySelector(`:scope > [slot="meta"]`),this._hasBody=[...this.childNodes].some(e=>e.nodeType===Node.TEXT_NODE?!!e.textContent?.trim():e instanceof HTMLElement&&!e.slot),this._hasFooter=!!this.querySelector(`:scope > [slot="footer"]`)}render(){return m`
      <div class="timeline-item" part="base">
        <span class="timeline-item__marker" part="marker" aria-hidden="true">
          <slot name="marker"></slot>
        </span>
        <div class="timeline-item__content" part="content">
          ${this._hasHeading||this._hasMeta?m`<div class="timeline-item__header" part="header">
                ${this._hasHeading?m`<div class="timeline-item__heading" part="heading">
                      <slot name="heading"></slot>
                    </div>`:i}
                ${this._hasMeta?m`<div class="timeline-item__meta" part="meta">
                      <slot name="meta"></slot>
                    </div>`:i}
              </div>`:i}
          ${this._hasBody?m`<div class="timeline-item__body" part="body">
                <slot></slot>
              </div>`:i}
          ${this._hasFooter?m`<div class="timeline-item__footer" part="footer">
                <slot name="footer"></slot>
              </div>`:i}
        </div>
      </div>
    `}};$v.styles=[Qv],r([c({type:Boolean,reflect:!0})],$v.prototype,`last`,void 0),r([p()],$v.prototype,`_hasHeading`,void 0),r([p()],$v.prototype,`_hasMeta`,void 0),r([p()],$v.prototype,`_hasBody`,void 0),r([p()],$v.prototype,`_hasFooter`,void 0),customElements.get(`craft-timeline-item`)||customElements.define(`craft-timeline-item`,$v);var ey=class{constructor(e,t,{tabInsertsSuggestions:n,firstOptionSelectionMode:r,scrollIntoViewOptions:i}={}){this.input=e,this.list=t,this.tabInsertsSuggestions=n??!0,this.firstOptionSelectionMode=r??`none`,this.scrollIntoViewOptions=i??{block:`nearest`,inline:`nearest`},this.isComposing=!1,this.didAutoAssignLastSelectedId=!1,t.id||=`combobox-${Math.random().toString().slice(2,6)}`,this.ctrlBindings=!!navigator.userAgent.match(/Macintosh/),this.keyboardEventHandler=e=>ty(e,this),this.compositionEventHandler=e=>sy(e,this),this.inputHandler=this.clearSelection.bind(this),e.setAttribute(`role`,`combobox`),e.setAttribute(`aria-controls`,t.id),e.setAttribute(`aria-expanded`,`false`),e.setAttribute(`aria-autocomplete`,`list`),e.setAttribute(`aria-haspopup`,`listbox`)}destroy(){this.clearSelection(),this.stop(),this.input.removeAttribute(`role`),this.input.removeAttribute(`aria-controls`),this.input.removeAttribute(`aria-expanded`),this.input.removeAttribute(`aria-autocomplete`),this.input.removeAttribute(`aria-haspopup`)}start(){this.input.setAttribute(`aria-expanded`,`true`),this.input.addEventListener(`compositionstart`,this.compositionEventHandler),this.input.addEventListener(`compositionend`,this.compositionEventHandler),this.input.addEventListener(`input`,this.inputHandler),this.input.addEventListener(`keydown`,this.keyboardEventHandler),this.list.addEventListener(`click`,ny),this.resetSelection()}stop(){this.clearSelection(),this.input.setAttribute(`aria-expanded`,`false`),this.input.removeEventListener(`compositionstart`,this.compositionEventHandler),this.input.removeEventListener(`compositionend`,this.compositionEventHandler),this.input.removeEventListener(`input`,this.inputHandler),this.input.removeEventListener(`keydown`,this.keyboardEventHandler),this.list.removeEventListener(`click`,ny)}indicateDefaultOption(){var e;this.firstOptionSelectionMode===`active`?(e=Array.from(this.list.querySelectorAll(`[role="option"]:not([aria-disabled="true"])`)).filter(oy)[0])==null||e.setAttribute(`data-combobox-option-default`,`true`):this.firstOptionSelectionMode===`selected`&&this.navigate(1)}navigate(e=1){let t=Array.from(this.list.querySelectorAll(`[aria-selected="true"]`)).filter(oy)[0],n=Array.from(this.list.querySelectorAll(`[role="option"]`)).filter(oy),r=n.indexOf(t);if(r===n.length-1&&e===1||r===0&&e===-1){this.clearSelection(),this.input.focus();return}let i=e===1?0:n.length-1;if(t&&r>=0){let t=r+e;t>=0&&t<n.length&&(i=t)}let a=n[i];if(a)for(let e of n)e.removeAttribute(`data-combobox-option-default`),a===e?(!a.id&&!document.getElementById(`${this.list.id}-selected`)&&(a.id=`${this.list.id}-selected`,this.didAutoAssignLastSelectedId=!0),a.id&&this.input.setAttribute(`aria-activedescendant`,a.id),a.setAttribute(`aria-selected`,`true`),ay(a),a.scrollIntoView(this.scrollIntoViewOptions)):(e.id===`${this.list.id}-selected`&&this.didAutoAssignLastSelectedId&&(e.removeAttribute(`id`),this.didAutoAssignLastSelectedId=!1),e.removeAttribute(`aria-selected`))}clearSelection(){this.input.removeAttribute(`aria-activedescendant`);for(let e of this.list.querySelectorAll(`[aria-selected="true"], [data-combobox-option-default="true"]`))e.removeAttribute(`aria-selected`),e.removeAttribute(`data-combobox-option-default`),e.id===`${this.list.id}-selected`&&this.didAutoAssignLastSelectedId&&(e.removeAttribute(`id`),this.didAutoAssignLastSelectedId=!1)}resetSelection(){this.clearSelection(),this.indicateDefaultOption()}};function ty(e,t){if(!(e.shiftKey||e.metaKey||e.altKey)&&!(!t.ctrlBindings&&e.ctrlKey)&&!t.isComposing)switch(e.key){case`Enter`:ry(t.input,t.list)&&e.preventDefault();break;case`Tab`:t.tabInsertsSuggestions&&ry(t.input,t.list)&&e.preventDefault();break;case`Escape`:t.clearSelection();break;case`ArrowDown`:t.navigate(1),e.preventDefault();break;case`ArrowUp`:t.navigate(-1),e.preventDefault();break;case`n`:t.ctrlBindings&&e.ctrlKey&&(t.navigate(1),e.preventDefault());break;case`p`:t.ctrlBindings&&e.ctrlKey&&(t.navigate(-1),e.preventDefault());break;default:if(e.ctrlKey)break;t.resetSelection()}}function ny(e){if(!(e.target instanceof Element))return;let t=e.target.closest(`[role="option"]`);t&&t.getAttribute(`aria-disabled`)!==`true`&&iy(t,{event:e})}function ry(e,t){let n=t.querySelector(`[aria-selected="true"], [data-combobox-option-default="true"]`);return n?(n.getAttribute(`aria-disabled`)===`true`||n.click(),!0):!1}function iy(e,t){e.dispatchEvent(new CustomEvent(`combobox-commit`,{bubbles:!0,detail:t}))}function ay(e){e.dispatchEvent(new Event(`combobox-select`,{bubbles:!0}))}function oy(e){return!e.hidden&&!(e instanceof HTMLInputElement&&e.type===`hidden`)&&(e.offsetWidth>0||e.offsetHeight>0)}function sy(e,t){t.isComposing=e.type===`compositionstart`,document.getElementById(t.input.getAttribute(`aria-controls`)||``)&&t.clearSelection()}var cy=class extends Event{constructor(){super(`update`)}},ly=new WeakMap,uy=class e extends EventTarget{#e=new MutationObserver(()=>this.#f());#t=new ResizeObserver(()=>this.#d());#n;#r=document.createElement(`div`);#i=document.createElement(`div`);static for(t){let n=ly.get(t);return n||(n=new e(t),ly.set(t,n)),n}constructor(e){super(),this.#n=new WeakRef(e),this.#r.style.position=`absolute`,this.#r.style.pointerEvents=`none`,this.#r.setAttribute(`aria-hidden`,`true`),this.#r.appendChild(this.#i),this.#i.style.pointerEvents=`none`,this.#i.style.userSelect=`none`,this.#i.style.overflow=`hidden`,this.#i.style.display=`block`,this.#i.style.visibility=`hidden`,e instanceof HTMLTextAreaElement?(this.#i.style.whiteSpace=`pre-wrap`,this.#i.style.wordWrap=`break-word`):(this.#i.style.whiteSpace=`nowrap`,this.#i.style.display=`table-cell`,this.#i.style.verticalAlign=`middle`),e.after(this.#r),this.#f(),this.#p(),this.#e.observe(e,{attributeFilter:[`style`,`dir`]}),this.#t.observe(e),document.addEventListener(`scroll`,this.#h,{capture:!0}),window.addEventListener(`resize`,this.#h,{capture:!0}),e.addEventListener(`input`,this.#m,{capture:!0})}get element(){return this.#i}forceUpdate(){this.#f(),this.#p()}disconnect(){this.#r?.remove(),this.#e.disconnect(),this.#t.disconnect(),document.removeEventListener(`scroll`,this.#h,{capture:!0}),window.removeEventListener(`resize`,this.#h,{capture:!0});let e=this.#a;e&&(e.removeEventListener(`input`,this.#m,{capture:!0}),ly.delete(e))}get#a(){return this.#n?.deref()}#o(e){let t=this.#a;return t?e(t):this.disconnect()}#s=0;#c=0;#l(){this.#o(e=>{let t=window.getComputedStyle(e);this.#i.style.height=t.height,this.#i.style.width=t.width,e.clientHeight!==this.#i.clientHeight&&(this.#i.style.height=`calc(${t.height} + ${e.clientHeight-this.#i.clientHeight}px)`),e.clientWidth!==this.#i.clientWidth&&(this.#i.style.width=`calc(${t.width} + ${e.clientWidth-this.#i.clientWidth}px)`);let n=e.getBoundingClientRect(),r=this.#i.getBoundingClientRect();this.#s=this.#s+n.left-r.left,this.#c=this.#c+n.top-r.top,this.#i.style.transform=`translate(${this.#s}px, ${this.#c}px)`,this.#i.scrollTop=e.scrollTop,this.#i.scrollLeft=e.scrollLeft,this.dispatchEvent(new cy)})}#u=!1;#d(){this.#u||(this.#u=!0,requestAnimationFrame(()=>{this.#l(),this.#u=!1}))}#f(){this.#o(e=>{let t=window.getComputedStyle(e);for(let e of dy)this.#i.style[e]=t[e];this.#d()})}#p(){this.#o(e=>{this.#i.textContent=e.value,this.#l()})}#m=()=>this.#p();#h=e=>{this.#o(t=>{(e.target===document||e.target===window||e.target instanceof Node&&e.target.contains(t))&&this.#d()})}},dy=`direction.writingMode.unicodeBidi.textOrientation.boxSizing.borderTopWidth.borderRightWidth.borderBottomWidth.borderLeftWidth.borderStyle.paddingTop.paddingRight.paddingBottom.paddingLeft.fontStyle.fontVariant.fontWeight.fontStretch.fontSize.fontSizeAdjust.lineHeight.fontFamily.textAlign.textTransform.textIndent.textDecoration.letterSpacing.wordSpacing.tabSize.MozTabSize`.split(`.`),fy=class e{#e;#t;#n;constructor(e,t=0,n=t){this.#e=e,this.#t=t,this.#n=n}static fromSelection(t){let{selectionStart:n,selectionEnd:r}=t;return new e(t,n??void 0,r??void 0)}get collapsed(){return this.startOffset===this.endOffset}get commonAncestorContainer(){return this.#e}get endContainer(){return this.#e}get startContainer(){return this.#e}get startOffset(){return this.#t}get endOffset(){return this.#n}setStartOffset(e){this.#t=this.#a(e)}setEndOffset(e){this.#n=this.#a(e)}collapse(e=!1){e?this.setEndOffset(this.startOffset):this.setStartOffset(this.endOffset)}cloneContents(){return this.#o().cloneContents()}cloneRange(){return new e(this.#e,this.startOffset,this.endOffset)}getBoundingClientRect(){return this.#o().getBoundingClientRect()}getClientRects(){return this.#o().getClientRects()}toString(){return this.#o().toString()}getStyleClone(){return this.#r}get#r(){return uy.for(this.#e)}get#i(){return this.#r}#a(e){return Math.max(0,Math.min(e,this.#e.value.length))}#o(){let e=document.createRange(),t=this.#i.element.childNodes[0];return t&&(e.setStart(t,this.startOffset),e.setEnd(t,this.endOffset)),e}},py=o`
  :host {
    display: contents;
  }

  craft-popover::part(popup) {
    min-width: 0;
    max-width: min(calc(360rem / 16), calc(100vw - var(--c-spacing-lg)));
  }

  .text-expander__popup {
    padding: var(--c-spacing-sm);
  }

  ::slotted([slot='listbox']) {
    display: grid;
    gap: var(--c-spacing-xs);
    max-height: calc(320rem / 16);
    overflow-y: auto;
    outline: none;
  }

  .text-expander__loading {
    padding-block: var(--c-spacing-sm);
    padding-inline: var(--c-spacing-md);
    color: var(--c-text-quiet);
  }
`,my=/^[\p{L}\p{N}_.-]*$/u,hy=n(`Suggestions`),gy=[`role`,`aria-autocomplete`,`aria-haspopup`,`aria-expanded`,`aria-controls`,`aria-activedescendant`,`aria-busy`],_y={handlesAccessibility:!1,visibilityTriggerFunction:void 0},vy=0,J=new WeakMap,yy=new WeakMap,by=new WeakMap,xy=new WeakMap,Sy=new WeakMap,Cy=new WeakMap,wy=new WeakMap,Ty=new WeakMap,Ey=new WeakMap,Dy=new WeakMap,Oy=new WeakMap,ky=new WeakMap,Ay=new WeakMap,jy=new WeakMap,My=new WeakMap,Y=new WeakSet,Ny=new WeakMap,Py=new WeakMap,Fy=new WeakMap,Iy=new WeakMap,Ly=new WeakMap,Ry=new WeakMap,zy=new WeakMap,By=new WeakMap,Vy=new WeakMap,Hy=new WeakMap,Uy=new WeakMap,Wy=new WeakMap,Gy=class extends d{constructor(...e){super(...e),x(this,Y),this.for=``,this.triggers=[],this.loading=!1,this.announcement=``,T(this,J,void 0),T(this,yy,null),T(this,by,null),T(this,xy,new Map),T(this,Sy,null),T(this,Cy,[]),T(this,wy,0),T(this,Ty,null),T(this,Ey,null),T(this,Dy,null),T(this,Oy,!1),T(this,ky,null),T(this,Ay,new DOMRect),T(this,jy,new MutationObserver(()=>{let e=w(Y,this,qy).call(this);(hb(e)&&e!==S(yy,this)||S(yy,this)&&!S(yy,this).isConnected)&&w(Y,this,Jy).call(this)})),T(this,My,new MutationObserver(e=>{for(let{target:t}of e)t instanceof hl&&(t.active=t.getAttribute(`aria-selected`)===`true`)})),T(this,Ny,()=>{S(Oy,this)||w(Y,this,tb).call(this)}),T(this,Py,()=>{C(Oy,this,!0),w(Y,this,lb).call(this)}),T(this,Fy,()=>{C(Oy,this,!1),w(Y,this,tb).call(this)}),T(this,Iy,()=>{queueMicrotask(()=>w(Y,this,lb).call(this))}),T(this,Ly,()=>{let e=S(yy,this);!e||!S(Sy,this)||!gb(e)||queueMicrotask(()=>{S(Sy,this)&&(e.selectionStart!==S(Sy,this).end||e.selectionEnd!==S(Sy,this).end)&&w(Y,this,tb).call(this)})}),T(this,Ry,()=>{S(Sy,this)&&w(Y,this,cb).call(this)}),T(this,zy,e=>{let t=e;S(Sy,this)&&S(J,this).querySelector(`[aria-selected="true"]`)&&[`ArrowDown`,`ArrowUp`,`Enter`].includes(t.key)&&t.stopPropagation()}),T(this,By,e=>{e.target instanceof Element&&e.target.closest(`[role="option"]`)&&e.preventDefault()}),T(this,Vy,e=>{e.pointerType===`touch`&&e.target instanceof Element&&e.target.closest(`[role="option"]`)?.click()}),T(this,Hy,e=>{w(Y,this,ab).call(this,Number(e.target.dataset.index))}),T(this,Uy,e=>{if(e.target!==this.popoverElement)return;let t=S(J,this).getAttribute(`aria-label`)??hy;w(Y,this,fb).call(this),C(Sy,this,null),w(Y,this,db).call(this),w(Y,this,pb).call(this,t===hy?n(`Suggestions collapsed`):n(`{name} suggestions collapsed`,{name:t})),S(Wy,this).call(this,e)}),T(this,Wy,e=>{e.target===this.popoverElement&&e.stopPropagation()})}connectedCallback(){super.connectedCallback(),w(Y,this,Ky).call(this),this.hasUpdated&&w(Y,this,Jy).call(this)}disconnectedCallback(){w(Y,this,Xy).call(this),S(My,this).disconnect(),S(J,this)?.remove(),S(Dy,this)!==null&&(clearTimeout(S(Dy,this)),C(Dy,this,null)),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),w(Y,this,Jy).call(this)}updated(e){if(super.updated(e),e.has(`for`)&&S(yy,this)!==w(Y,this,qy).call(this)&&w(Y,this,Jy).call(this),e.has(`triggers`)&&e.get(`triggers`)&&S(Sy,this)){let e=S(J,this).querySelector(`[aria-selected="true"]`),t=e?S(Cy,this)[Number(e.dataset.index)]:void 0;w(Y,this,tb).call(this,t)}}render(){return m`
      <craft-popover
        exportparts="popup"
        .config=${_y}
        @craft-show=${S(Wy,this)}
        @craft-hide=${S(Uy,this)}
        @craft-after-show=${S(Wy,this)}
        @craft-after-hide=${S(Wy,this)}
      >
        <div class="text-expander__popup" slot="content">
          ${this.loading?m`<div class="text-expander__loading" part="loading">
                <slot name="loading">${n(`Loading`)}</slot>
              </div>`:i}
          <slot name="listbox"></slot>
        </div>
      </craft-popover>
      <div class="cp-visually-hidden" aria-live="polite" aria-atomic="true">
        ${this.announcement}
      </div>
    `}};function Ky(){C(J,this,document.createElement(`div`)),S(J,this).id=`craft-text-expander-listbox-${++vy}`,S(J,this).slot=`listbox`,S(J,this).setAttribute(`part`,`listbox`),S(J,this).role=`listbox`,S(J,this).setAttribute(`aria-label`,hy),S(J,this).addEventListener(`pointerdown`,S(By,this)),S(J,this).addEventListener(`pointerup`,S(Vy,this)),S(J,this).addEventListener(`combobox-commit`,S(Hy,this)),S(My,this).observe(S(J,this),{subtree:!0,attributeFilter:[`aria-selected`]}),this.append(S(J,this))}function qy(){return this.getRootNode().getElementById(this.for)}function Jy(){let e=w(Y,this,qy).call(this);if(w(Y,this,Xy).call(this),!hb(e)){w(Y,this,Yy).call(this);return}C(yy,this,e),w(Y,this,Zy).call(this,e),C(by,this,new ey(e,S(J,this),{tabInsertsSuggestions:!1,firstOptionSelectionMode:`selected`,scrollIntoViewOptions:{block:`nearest`}})),w(Y,this,Qy).call(this,e),e.addEventListener(`input`,S(Ny,this)),e.addEventListener(`keydown`,S(zy,this)),e.addEventListener(`blur`,S(Iy,this)),e.addEventListener(`compositionstart`,S(Py,this)),e.addEventListener(`compositionend`,S(Fy,this)),e.ownerDocument.addEventListener(`selectionchange`,S(Ly,this)),this.popoverElement.anchor={contextElement:e,getBoundingClientRect:()=>S(Ay,this)},w(Y,this,Yy).call(this)}function Yy(){S(jy,this).observe(this.getRootNode(),{attributes:!0,attributeFilter:[`id`],childList:!0,subtree:!0})}function Xy(){S(jy,this).disconnect(),w(Y,this,lb).call(this);let e=S(yy,this);e&&(e.removeEventListener(`input`,S(Ny,this)),e.removeEventListener(`keydown`,S(zy,this)),e.removeEventListener(`blur`,S(Iy,this)),e.removeEventListener(`compositionstart`,S(Py,this)),e.removeEventListener(`compositionend`,S(Fy,this)),e.ownerDocument.removeEventListener(`selectionchange`,S(Ly,this)),S(ky,this)?.getStyleClone().disconnect(),C(ky,this,null),S(by,this)?.destroy(),C(by,this,null),w(Y,this,$y).call(this,e),C(yy,this,null))}function Zy(e){S(xy,this).clear();for(let t of gy)S(xy,this).set(t,e.getAttribute(t))}function Qy(e){let t=[S(xy,this).get(`aria-controls`),S(J,this).id].filter(Boolean).join(` `);e.setAttribute(`aria-autocomplete`,`list`),e.setAttribute(`aria-controls`,t),e.setAttribute(`data-text-expander-input`,``),e.getAttribute(`role`)===`combobox`&&e.removeAttribute(`role`),e instanceof HTMLInputElement?e.setAttribute(`aria-haspopup`,`listbox`):w(Y,this,eb).call(this,e,`aria-haspopup`),w(Y,this,eb).call(this,e,`aria-expanded`)}function $y(e){for(let t of gy)w(Y,this,eb).call(this,e,t);S(xy,this).clear()}function eb(e,t){let n=S(xy,this).get(t);n==null?e.removeAttribute(t):e.setAttribute(t,n)}function tb(e){w(Y,this,fb).call(this);let t=w(Y,this,rb).call(this);if(!t){C(Sy,this,null),w(Y,this,ub).call(this);return}C(Sy,this,t);let r=t.trigger.limit;if(t.trigger.options){this.loading=!1;let n=t.query.toLowerCase(),i=t.trigger.options.filter(e=>[e.label,...e.keywords??[]].some(e=>e.toLowerCase().includes(n)));w(Y,this,ib).call(this,r===void 0?i:i.slice(0,r),e);return}this.loading=!0,w(Y,this,ib).call(this,[]),w(Y,this,pb).call(this,n(`Loading`));let i=S(wy,this);C(Ey,this,setTimeout(()=>{w(Y,this,nb).call(this,t,r,i,e)},150))}async function nb(e,t,n,r){C(Ty,this,new AbortController);let i;try{let n=await E.get(e.trigger.source,{params:{query:`${e.character}${e.query}`,...t===void 0?{}:{limit:t}},signal:S(Ty,this).signal});if(!Array.isArray(n.data))throw TypeError(`Text expander sources must return an array.`);i=n.data}catch(t){if(n!==S(wy,this)||_b(t))return;w(Y,this,lb).call(this),this.dispatchEvent(new CustomEvent(`craft-error`,{bubbles:!0,composed:!0,detail:{character:e.character,query:e.query,error:t}}));return}n===S(wy,this)&&(this.loading=!1,w(Y,this,ib).call(this,t===void 0?i:i.slice(0,t),r))}function rb(){let e=S(yy,this);if(!e||!e.isConnected||e.disabled||e.readOnly||!gb(e)||e.selectionStart===null||e.selectionEnd===null||e.selectionStart!==e.selectionEnd)return null;let t=e.selectionStart,n=e.value.slice(0,t),r=null;for(let e of this.triggers){let i=e.trigger,a=n.lastIndexOf(i);if(a===-1||r&&a<=r.start)continue;let o=Array.from(n.slice(0,a)).at(-1),s=n.slice(a+i.length);(e.boundary===`anywhere`||(e.boundary===`start`?a===0:!o||/\s/u.test(o)))&&my.test(s)&&(r={character:i,query:s,start:a,end:t,trigger:e})}return r}function ib(e,t){if(w(Y,this,sb).call(this),C(Cy,this,e),S(J,this).replaceChildren(),S(J,this).hidden=this.loading,S(J,this).setAttribute(`aria-label`,S(Sy,this)?.trigger.label??hy),e.forEach((e,t)=>{let n=document.createElement(`craft-option`),r=mb(e);n.id=`${S(J,this).id}-option-${t}`,n.setAttribute(`part`,`option`),n.dataset.index=String(t),n.setAttribute(`aria-label`,r?`${e.label}, ${r}`:e.label),n.hint=r,n.append(S(Sy,this)?.trigger.renderOption?.(e)??document.createTextNode(e.label)),S(J,this).append(n)}),!this.loading&&!e.length){C(Sy,this,null),w(Y,this,ub).call(this),w(Y,this,pb).call(this,n(`No suggestions`));return}this.updateComplete.then(()=>{S(Sy,this)&&w(Y,this,ob).call(this,t)})}function ab(e){let t=S(yy,this),n=S(Cy,this)[e],r=w(Y,this,rb).call(this),i=S(Sy,this);if(!t||!n||!i||!r||r.start!==i.start||r.end!==i.end||r.character!==i.character||r.query!==i.query){w(Y,this,lb).call(this);return}vb(t,i.start,i.end,n.value);let a={character:i.character,query:i.query,option:n};w(Y,this,lb).call(this),this.dispatchEvent(new CustomEvent(`craft-select`,{bubbles:!0,composed:!0,detail:a}))}async function ob(e){await this.popoverElement.updateComplete;let t=S(yy,this);if(!t||!w(Y,this,cb).call(this)){w(Y,this,lb).call(this);return}if(t.setAttribute(`aria-busy`,String(this.loading)),await this.popoverElement.show(),!(!S(Sy,this)||t!==S(yy,this))&&S(Cy,this).length&&(S(by,this)?.start(),w(Y,this,eb).call(this,t,`aria-expanded`),t.removeEventListener(`input`,S(Ny,this)),t.addEventListener(`input`,S(Ny,this)),e)){let t=S(Cy,this).findIndex(t=>t.label===e.label&&t.value===e.value);for(let e=0;e<t;e++)S(by,this)?.navigate(1)}}function sb(){S(by,this)?.stop(),S(yy,this)&&w(Y,this,eb).call(this,S(yy,this),`aria-expanded`)}function cb(){let e=S(yy,this),t=e?.selectionStart;if(!e?.isConnected||t==null)return!1;if(!S(ky,this)){C(ky,this,new fy(e));let t=S(ky,this).getStyleClone(),n=t.element.parentElement;n.slot=e.slot,n.style.visibility=`hidden`,t.forceUpdate(),t.addEventListener(`update`,S(Ry,this))}return S(ky,this).setStartOffset(t),S(ky,this).setEndOffset(t),C(Ay,this,S(ky,this).getBoundingClientRect()),this.popoverElement.repositionOverlay(),!0}function lb(){w(Y,this,fb).call(this),C(Sy,this,null),w(Y,this,ub).call(this)}function ub(){w(Y,this,db).call(this),this.popoverElement.hide()}function db(){this.loading=!1,w(Y,this,sb).call(this),C(Cy,this,[]),S(J,this)?.replaceChildren(),S(J,this)&&(S(J,this).hidden=!1);let e=S(yy,this);e&&(w(Y,this,eb).call(this,e,`aria-activedescendant`),w(Y,this,eb).call(this,e,`aria-busy`))}function fb(){var e;C(wy,this,(e=S(wy,this),e++,e)),S(Ey,this)&&(clearTimeout(S(Ey,this)),C(Ey,this,null)),S(Ty,this)?.abort(),C(Ty,this,null)}function pb(e){S(Dy,this)!==null&&(clearTimeout(S(Dy,this)),C(Dy,this,null)),this.announcement=``,queueMicrotask(()=>{this.isConnected&&(this.announcement=e)}),C(Dy,this,setTimeout(()=>{C(Dy,this,null),this.announcement=``},5e3))}Gy.styles=[le,py],r([c({reflect:!0})],Gy.prototype,`for`,void 0),r([c({type:Array})],Gy.prototype,`triggers`,void 0),r([p()],Gy.prototype,`loading`,void 0),r([p()],Gy.prototype,`announcement`,void 0),r([g(`craft-popover`)],Gy.prototype,`popoverElement`,void 0);function mb(e){return typeof e.data!=`object`||e.data===null||!(`hint`in e.data)||typeof e.data.hint!=`string`?null:e.data.hint}function hb(e){return e instanceof HTMLTextAreaElement||e instanceof HTMLInputElement&&e.type===`text`}function gb(e){return e.getRootNode().activeElement===e}function _b(e){return e instanceof DOMException&&e.name===`AbortError`}function vb(e,t,n,r){e.maxLength>=0&&(r=r.slice(0,Math.max(0,e.maxLength-(e.value.length-(n-t)))));let i=`${e.value.slice(0,t)}${r}${e.value.slice(n)}`,a=!1,o=()=>{a=!0};e.focus({preventScroll:!0}),e.setSelectionRange(t,n),e.addEventListener(`input`,o,{once:!0});try{e.ownerDocument.execCommand?.(`insertText`,!1,r)}catch{}e.removeEventListener(`input`,o),e.value!==i&&(e.setRangeText(r,t,n,`end`),a=!1),a||e.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0,data:r,inputType:`insertReplacementText`}))}customElements.get(`craft-text-expander`)||customElements.define(`craft-text-expander`,Gy);var yb=o`
  :host {
    display: inline-flex;
    /* Allow the element to shrink below its content size in flex/grid layouts
       so the text actually truncates instead of forcing the container wider. */
    min-width: 0;
    max-width: 100%;
  }

  /* Unset, \`revert\` leaves a link's own decoration alone. */
  ::slotted(a) {
    text-decoration: var(--c-truncate-link-decoration, revert);
  }

  ::slotted(a:hover) {
    text-decoration: var(--c-truncate-link-hover-decoration, revert);
  }

  .truncate {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${Ni}
  }
`,bb=new WeakMap,xb=new WeakSet,Sb=class extends d{constructor(...e){super(...e),x(this,xb),this.placement=`top`,this.disabled=!1,this.overflowing=!1,this.text=``,T(this,bb,typeof ResizeObserver<`u`?new ResizeObserver(()=>w(xb,this,Cb).call(this)):null)}connectedCallback(){super.connectedCallback(),S(bb,this)?.observe(this)}disconnectedCallback(){S(bb,this)?.disconnect(),super.disconnectedCallback()}firstUpdated(){S(bb,this)||w(xb,this,Cb).call(this)}render(){let e=this.overflowing&&!this.disabled;return m`
      <span class="truncate" id="content">
        <slot @slotchange=${w(xb,this,wb)}></slot>
      </span>
      ${e?m`<craft-tooltip for="content" placement=${this.placement}
            >${this.text}</craft-tooltip
          >`:``}
    `}};function Cb(){this.text=(this.textContent??``).replace(/\s+/g,` `).trim();let e=this.content;this.overflowing=!!e&&e.scrollWidth>e.clientWidth}function wb(){w(xb,this,Cb).call(this)}Sb.styles=yb,r([c({reflect:!0})],Sb.prototype,`placement`,void 0),r([c({type:Boolean,reflect:!0})],Sb.prototype,`disabled`,void 0),r([p()],Sb.prototype,`overflowing`,void 0),r([p()],Sb.prototype,`text`,void 0),r([g(`.truncate`)],Sb.prototype,`content`,void 0),customElements.get(`craft-truncate`)||customElements.define(`craft-truncate`,Sb);var Tb=o`
  /* Defaults are fallbacks rather than :host declarations, so ancestors' values inherit. */
  :host {
    --_size: var(--c-thumbnail-size, calc(30rem / 16));
    --_box-height: var(--c-thumbnail-height, var(--_size));
    --_checker-size: var(--c-thumbnail-checker-size, 8px);
    --_checker-color: var(--c-thumbnail-checker-color, hsl(211 13% 65% / 0.25));
    --_checker-half: calc(var(--_checker-size) / 2);
    --_image-radius: var(--c-thumbnail-image-radius, 0);

    display: contents;
  }

  .thumbnail {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--_size);
    height: var(--_box-height);
    overflow: clip;
    max-width: 100%;
    max-height: 100%;
  }

  /* Height capped at the box size rather than 100%, which doesn't resolve
     when the box's height is \`auto\` (see --c-thumbnail-height). */
  .thumbnail__image,
  ::slotted(img),
  ::slotted(svg) {
    display: block;
    flex-shrink: 0;
    max-width: 100%;
    max-height: var(--_size);
    object-fit: contain;
  }

  /*
   * A fit image with known dimensions: its box is sized up front, no larger
   * than those dimensions or the thumbnail box, so it's the same before and
   * after it loads. The other axis follows from the inline aspect-ratio.
   */
  .thumbnail__image--landscape {
    width: min(100%, var(--_width));
    height: auto;
  }

  .thumbnail__image--portrait {
    width: auto;
    height: min(var(--_size), var(--_height));
  }

  .thumbnail__image--placeholder {
    background: var(--_placeholder) center / 100% 100% no-repeat;
  }

  .thumbnail--crop .thumbnail__image,
  .thumbnail--stretch .thumbnail__image {
    width: 100%;
    height: 100%;
  }

  /* Shadow-important sizing takes precedence over light-DOM image resets. */
  .thumbnail--crop ::slotted(img),
  .thumbnail--crop ::slotted(svg),
  .thumbnail--stretch ::slotted(img),
  .thumbnail--stretch ::slotted(svg) {
    width: 100% !important;
    height: 100% !important;
  }

  .thumbnail--crop .thumbnail__image,
  .thumbnail--crop ::slotted(img) {
    object-fit: cover;
  }

  .thumbnail--stretch .thumbnail__image,
  .thumbnail--stretch ::slotted(img) {
    object-fit: fill;
  }

  /*
   * The real <img> is visually hidden (cp-visually-hidden) once its frame is
   * captured, so the cover canvas is the only visible child left — a normal,
   * in-flow flex item like .thumbnail__image used to be, not an overlay
   * positioned on top of a still-visible image. It's already pre-sized and
   * pre-cropped in JS to its exact pixel dimensions (see paintCover()), so
   * it just needs a sane cap for later container resizes, same as the image.
   */
  .thumbnail__cover {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  /* Not yet painted — stay out of flow so the empty canvas doesn't disturb
     the still-visible <img>'s layout. Exactly one of the two is ever
     in-flow at a time. */
  .thumbnail__cover--pending {
    position: absolute;
  }

  /* h/t https://gist.github.com/dfrankland/f6fed3e3ccc42e3de482b324126f9542 */
  .thumbnail--checkered {
    background-image:
      linear-gradient(45deg, var(--_checker-color) 25%, transparent 25%),
      linear-gradient(135deg, var(--_checker-color) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--_checker-color) 75%),
      linear-gradient(135deg, transparent 75%, var(--_checker-color) 75%);
    background-size: var(--_checker-size) var(--_checker-size);
    background-position:
      0 0,
      var(--_checker-half) 0,
      var(--_checker-half) calc(-1 * var(--_checker-half)),
      0 var(--_checker-half);
  }

  .thumbnail--placeholder {
    background: var(--_placeholder) center / cover no-repeat;
  }

  .thumbnail--placeholder.thumbnail--stretch {
    background-size: 100% 100%;
  }

  .thumbnail__image,
  .thumbnail__cover,
  ::slotted(img),
  ::slotted(svg),
  .thumbnail--placeholder {
    border-radius: var(--_image-radius);
  }

  .thumbnail--rounded .thumbnail__image,
  .thumbnail--rounded .thumbnail__cover,
  .thumbnail--rounded ::slotted(img),
  .thumbnail--rounded ::slotted(svg),
  .thumbnail--rounded.thumbnail--placeholder {
    border-radius: var(--c-thumbnail-radius, var(--c-radius-full));
  }
`,Eb=class e extends d{constructor(...e){super(...e),this.src=null,this.mode=`fit`,this.svgAspectRatios=new Map,this.placeholder=null,this.loaded=!1,this.srcset=null,this.sizes=null,this.alt=``,this.width=null,this.height=null,this.loading=`lazy`,this.checkered=!1,this.rounded=!1,this.animated=!1,this.frozen=!1,this.capturedFrame=null,this.resizeObserver=null}get isAnimated(){return this.animated||e.animatedExtensionPattern.test(this.src??``)||e.animatedExtensionPattern.test(this.srcset??``)}restoreSlottedSvgs(){for(let[e,t]of this.svgAspectRatios)t===null?e.removeAttribute(`preserveAspectRatio`):e.setAttribute(`preserveAspectRatio`,t);this.svgAspectRatios.clear()}updateSlottedSvgs(){if(this.restoreSlottedSvgs(),this.mode!==`crop`&&this.mode!==`stretch`)return;let e=this.shadowRoot?.querySelector(`slot`);for(let t of e?.assignedElements()??[])t instanceof SVGSVGElement&&(this.svgAspectRatios.set(t,t.getAttribute(`preserveAspectRatio`)),t.setAttribute(`preserveAspectRatio`,this.mode===`crop`?`xMidYMid slice`:`none`))}willUpdate(e){let t=e.has(`src`)||e.has(`srcset`)||e.has(`animated`);if(e.has(`src`)&&(this.loaded=!1),t&&(this.frozen=!1,this.capturedFrame=null,this.resizeObserver?.disconnect(),this.resizeObserver=null,!e.has(`src`))){let e=this.shadowRoot?.querySelector(`img`);e?.complete&&this.attemptFreeze(e)}}updated(){this.updateSlottedSvgs()}connectedCallback(){if(super.connectedCallback(),this.updateSlottedSvgs(),this.hasUpdated&&!this.frozen){let e=this.shadowRoot?.querySelector(`img`);e?.complete&&this.attemptFreeze(e)}}disconnectedCallback(){this.restoreSlottedSvgs(),this.resizeObserver?.disconnect(),this.resizeObserver=null,super.disconnectedCallback()}render(){let e=this.sizedImage,t={thumbnail:!0,"thumbnail--checkered":this.checkered,"thumbnail--rounded":this.rounded,"thumbnail--crop":this.mode===`crop`,"thumbnail--stretch":this.mode===`stretch`,"thumbnail--placeholder":this.showsPlaceholder&&!e},n=this.showsPlaceholder?{"--_placeholder":`url(${JSON.stringify(this.placeholder)})`}:{};return m`
      <div
        class="${O(t)}"
        style="${cr(e?{}:n)}"
        part="thumbnail"
      >
        ${this.src?m`<img
              class="${O({thumbnail__image:!0,"thumbnail__image--landscape":e===`landscape`,"thumbnail__image--portrait":e===`portrait`,"thumbnail__image--placeholder":!!e&&this.showsPlaceholder,"cp-visually-hidden":this.frozen})}"
              style="${cr(e?{...n,"--_width":`${this.width}px`,"--_height":`${this.height}px`,"aspect-ratio":`${this.width} / ${this.height}`}:{})}"
              part="image"
              src="${this.src}"
              srcset="${ht(this.srcset??void 0)}"
              sizes="${ht(this.sizes??void 0)}"
              width="${ht(this.width??void 0)}"
              height="${ht(this.height??void 0)}"
              alt="${this.alt}"
              loading="${this.loading}"
              decoding="async"
              @load=${this.onImageLoad}
            />`:i}
        ${this.src&&this.isAnimated?m`<canvas
              class="${O({thumbnail__cover:!0,"thumbnail__cover--pending":!this.frozen})}"
              part="cover"
              aria-hidden="true"
              role="presentation"
            ></canvas>`:i}
        <slot @slotchange=${this.updateSlottedSvgs}></slot>
      </div>
    `}get sizedImage(){return this.mode!==`fit`||!this.width||!this.height?null:Number(this.width)>=Number(this.height)?`landscape`:`portrait`}get showsPlaceholder(){return!!(this.placeholder&&this.src&&!this.loaded)}onImageLoad(e){this.loaded=!0,this.attemptFreeze(e.target)}attemptFreeze(e){if(!this.isAnimated||!e.currentSrc)return;let t=new Image;t.onload=()=>{this.capturedFrame=t,this.resizeObserver?.disconnect(),this.resizeObserver=new ResizeObserver(()=>{this.capturedFrame&&this.paintCover(this.capturedFrame,e)}),this.resizeObserver.observe(e)},t.src=e.currentSrc}paintCover(e,t){if(!e.naturalWidth||!e.naturalHeight)return;let n=this.shadowRoot?.querySelector(`canvas.thumbnail__cover`),r=n?.getContext(`2d`);if(!n||!r)return;let i=t.clientWidth,a=t.clientHeight;if(!i||!a)return;let o=window.devicePixelRatio||1;if(n.width=i*o,n.height=a*o,n.style.width=`${i}px`,n.style.height=`${a}px`,r.scale(o,o),this.mode===`crop`){let t=Math.max(i/e.naturalWidth,a/e.naturalHeight),n=i/t,o=a/t;r.drawImage(e,(e.naturalWidth-n)/2,(e.naturalHeight-o)/2,n,o,0,0,i,a)}else r.drawImage(e,0,0,i,a);this.resizeObserver?.disconnect(),this.resizeObserver=null,this.frozen=!0}};Eb.styles=[le,Tb],Eb.animatedExtensionPattern=/\.(?:gif|webp)(?=[?#\s,]|$)/i,r([c()],Eb.prototype,`src`,void 0),r([c({reflect:!0})],Eb.prototype,`mode`,void 0),r([c()],Eb.prototype,`placeholder`,void 0),r([p()],Eb.prototype,`loaded`,void 0),r([c()],Eb.prototype,`srcset`,void 0),r([c()],Eb.prototype,`sizes`,void 0),r([c()],Eb.prototype,`alt`,void 0),r([c({type:Number})],Eb.prototype,`width`,void 0),r([c({type:Number})],Eb.prototype,`height`,void 0),r([c()],Eb.prototype,`loading`,void 0),r([c({type:Boolean,reflect:!0})],Eb.prototype,`checkered`,void 0),r([c({type:Boolean,reflect:!0})],Eb.prototype,`rounded`,void 0),r([c({type:Boolean,reflect:!0})],Eb.prototype,`animated`,void 0),r([p()],Eb.prototype,`frozen`,void 0),customElements.get(`craft-thumbnail`)||customElements.define(`craft-thumbnail`,Eb);var Db=new WeakMap,Ob=new WeakSet,kb=class extends HTMLElement{constructor(...e){super(...e),x(this,Ob),T(this,Db,null)}connectedCallback(){w(Ob,this,Ab).call(this)}disconnectedCallback(){S(Db,this)?.destroy(),C(Db,this,null)}};function Ab(){if(!(S(Db,this)||!this.isConnected)){if(!this.querySelector(`[data-sizes]`)){requestAnimationFrame(()=>w(Ob,this,Ab).call(this));return}C(Db,this,new zc),S(Db,this).load(this)}}customElements.get(`craft-thumbnail-loader`)||customElements.define(`craft-thumbnail-loader`,kb);var jb=async(e,t)=>{let{data:n}=await E.post(e,t);return n},Mb=new WeakMap,Nb=new WeakMap,Pb=new WeakMap,Fb=new WeakMap,Ib=new WeakMap,Lb=new WeakMap,Rb=new WeakMap,zb=new WeakMap,Bb=new WeakMap,Vb=new WeakMap,X=new WeakSet,Hb=class e{constructor(t){x(this,X),T(this,Mb,null),T(this,Nb,[]),T(this,Pb,[]),T(this,Fb,null),T(this,Ib,!1),T(this,Lb,!1),T(this,Rb,!1),T(this,zb,null),T(this,Bb,void 0),T(this,Vb,new Map),this.options={...e.defaults,modalTitle:n(`Select element`),selectBtnLabel:n(`Select`),...qb(t)},C(Pb,this,[...this.options.disabledElementIds??[]]),C(Bb,this,w(X,this,Ub).call(this))}get elementType(){return this.options.elementType}get state(){return S(Bb,this)}get index(){return S(Mb,this)}get hasSelection(){return S(Nb,this).length>0}on(e,t){let n=S(Vb,this).get(e);return n||(n=new Set,S(Vb,this).set(e,n)),n.add(t),()=>{S(Vb,this).get(e)?.delete(t)}}async open(){C(Nb,this,[]),S(Mb,this)?.clearSelection(),S(Ib,this)||(C(Ib,this,!0),w(X,this,Kb).call(this,`open`,void 0)),w(X,this,Wb).call(this),S(Fb,this)||await this.reload()}close(){S(Ib,this)&&(C(Ib,this,!1),w(X,this,Kb).call(this,`close`,void 0),this.options.onClose?.(),w(X,this,Wb).call(this))}destroy(){S(Mb,this)?.destroy?.(),C(Mb,this,null),C(Nb,this,[]),C(Fb,this,null),C(Ib,this,!1),C(Rb,this,!1),C(Lb,this,!1),C(zb,this,null),w(X,this,Wb).call(this),S(Vb,this).clear()}async reload(){let e=this.options.loadIndexBody??jb;C(Lb,this,!0),C(zb,this,null),w(X,this,Wb).call(this);try{C(Fb,this,await e(this.options.bodyAction,this.indexParams()))}catch(e){w(X,this,Gb).call(this,e)}finally{C(Lb,this,!1),w(X,this,Wb).call(this)}}async submit(){if(!S(Bb,this).canSubmit)return;let e=this.buildElementInfo(S(Nb,this)),t=this.selectMeta();C(Rb,this,!0),w(X,this,Wb).call(this);try{w(X,this,Kb).call(this,`select`,{elements:e,meta:t}),await this.options.onSelect?.(e,t)}catch(e){w(X,this,Gb).call(this,e);return}finally{C(Rb,this,!1),w(X,this,Wb).call(this)}this.options.disableElementsOnSelect&&(this.setDisabledElementIds([...S(Pb,this),...e.map(e=>Number(e.id))]),S(Mb,this)?.clearSelection()),this.options.hideOnSelect&&this.close()}cancel(){S(Bb,this).canCancel&&(w(X,this,Kb).call(this,`cancel`,void 0),this.options.onCancel?.(),this.close())}attachIndex(e){C(Mb,this,e),w(X,this,Wb).call(this)}detachIndex(){C(Mb,this,null),w(X,this,Wb).call(this)}setSelection(e){C(Nb,this,[...e]),w(X,this,Wb).call(this)}setDisabledElementIds(e){C(Pb,this,[...new Set(e.map(Number))]),w(X,this,Wb).call(this)}setBusy(e){C(Rb,this,e),w(X,this,Wb).call(this)}indexParams(){let{options:e}=this,t={context:e.context??`modal`,elementType:this.elementType,sources:e.sources,condition:e.condition,criteria:{...e.criteria}};return e.showSiteMenu!=null&&e.showSiteMenu!==`auto`&&(t.showSiteMenu=e.showSiteMenu?`1`:`0`),e.siteIds&&(t.siteIds=e.siteIds),e.criteria&&(t.criteria={...e.criteria}),typeof e.indexSettings.showFolders==`boolean`&&(t.showFolders=e.indexSettings.showFolders),t}indexSettings(){let{options:e}=this;return{context:e.context??`modal`,storageKey:e.storageKey,condition:e.condition,referenceElementId:e.referenceElementId,referenceElementOwnerId:e.referenceElementOwnerId,referenceElementSiteId:e.referenceElementSiteId,criteria:{...e.criteria},disabledElementIds:[...S(Pb,this)],selectable:!0,multiSelect:e.multiSelect,waitForDoubleClicks:!0,hideSidebar:e.hideSidebar,defaultSiteId:e.defaultSiteId,defaultSource:e.defaultSource,defaultSourcePath:e.defaultSourcePath,preferStoredSource:e.preferStoredSource,showSourcePath:e.showSourcePath,...e.indexSettings}}canSubmitSelection(){return S(Nb,this).length>0}buildElementInfo(e){return e.map(e=>({...e}))}selectMeta(){return{}}notifyChange(){w(X,this,Wb).call(this)}get selection(){return S(Nb,this)}get disabledElementIds(){return S(Pb,this)}};function Ub(){let e=S(Rb,this),t=S(Lb,this);return Object.freeze({open:S(Ib,this),loading:t,busy:e,selection:Object.freeze([...S(Nb,this)]),disabledElementIds:Object.freeze([...S(Pb,this)]),indexBody:S(Fb,this),error:S(zb,this),title:this.options.modalTitle,showTitle:this.options.showTitle,selectLabel:this.options.selectBtnLabel,canSubmit:!e&&!t&&this.canSubmitSelection(),canCancel:!e})}function Wb(){C(Bb,this,w(X,this,Ub).call(this)),w(X,this,Kb).call(this,`change`,S(Bb,this))}function Gb(e){C(zb,this,e instanceof Error?e:Error(String(e??`Unknown`))),w(X,this,Kb).call(this,`error`,S(zb,this))}function Kb(e,t){let n=S(Vb,this).get(e);n&&[...n].forEach(e=>e(t))}Hb.defaults={multiSelect:!1,disabledElementIds:[],disableElementsOnSelect:!1,hideOnSelect:!0,showTitle:!1,fullscreen:!1,bodyAction:`element-selector-modals/body`,indexSettings:{},preferStoredSource:!1,showSourcePath:!0,hideSidebar:!1};function qb(e){return Object.fromEntries(Object.entries(e).filter(([,e])=>e!==void 0))}var Jb=async(e,t)=>{let{data:n}=await E.post(`assets/generate-transform`,{assetId:e,handle:t});return n?.url||!1},Yb=new WeakMap,Xb=class e extends Hb{constructor(e){super(e),T(this,Yb,null)}get transforms(){return this.options.transforms??[]}get canApplyTransform(){return this.selection.length>0&&this.transforms.length>0}async selectWithTransform(t){var n;let r=(n=e.transformUrls)[t]??(n[t]={}),i=this.selection.map(e=>Number(e.id)).filter(e=>r[e]===void 0);if(i.length>0){let e=this.options.fetchTransformUrl??Jb;this.setBusy(!0);try{for(let n of i)try{r[n]=await e(n,t)}catch{r[n]=!1}}finally{this.setBusy(!1)}}C(Yb,this,t);try{await this.submit()}finally{C(Yb,this,null)}}buildElementInfo(t){let n=super.buildElementInfo(t);if(!S(Yb,this))return n;let r=e.transformUrls[S(Yb,this)]??{};for(let e of n){let t=r[Number(e.id)];t!==void 0&&t!==!1&&(e.url=t)}return n}selectMeta(){return{transform:S(Yb,this)}}};Xb.transformUrls={};var Zb=`CraftCms\\Cms\\Asset\\Elements\\Asset`,Qb=new WeakSet,$b=class extends Hb{constructor(e={}){let{disabledFolderIds:t=[],...n}=e;super({...n,elementType:Zb,showSiteMenu:!1}),x(this,Qb),this.disabledFolderIds=[...t]}indexParams(){let e={...super.indexParams(),foldersOnly:!0,showFolders:!0},{indexSettings:t}=this.options,n=this.options.defaultSource??t.defaultSource,r=this.options.defaultSourcePath??t.defaultSourcePath??[];n&&(e.source=n);let i=Number(r[r.length-1]?.folderId);return Number.isFinite(i)&&(e.folderId=i),e}indexSettings(){return{...super.indexSettings(),foldersOnly:!0,disabledFolderIds:[...this.disabledFolderIds]}}currentFolderId(){let e=this.index?.sourcePath;if(!e?.length)return null;let t=e[e.length-1],n=Number(t.folderId);return Number.isFinite(n)?this.disabledFolderIds.includes(n)?null:n:null}canSubmitSelection(){return super.canSubmitSelection()||this.currentFolderId()!==null}buildElementInfo(e){if(e.length>0)return e.map(e=>({...e,folderId:Number(e.folderId??e.id)}));let t=this.currentFolderId();return t===null?[]:[{id:t,folderId:t,siteId:null,label:w(Qb,this,ex).call(this),status:null,url:null,hasThumb:!1}]}};function ex(){let e=this.index?.sourcePath;return e?.[e.length-1]?.label??``}var tx=new Map;function nx(e,t){if(tx.has(e))throw Error(`An element selector controller has already been registered for the element type “${e}”.`);tx.set(e,t)}function rx(e){return tx.has(e)}function ix(e){return tx.get(e)??Hb}function ax(e){return new(ix(e.elementType))(e)}function ox(){if(typeof window>`u`)return;let e=window.Craft?._elementSelectorModalClasses;if(e)for(let[t,n]of Object.entries(e))tx.has(t)||tx.set(t,n)}var sx={START:`asset-indexes/start-indexing`,STOP:`asset-indexes/stop-indexing-session`,PROCESS:`asset-indexes/process-indexing-session`,OVERVIEW:`asset-indexes/indexing-session-overview`,FINISH:`asset-indexes/finish-indexing-session`},cx=new WeakMap,lx=new WeakMap,ux=new WeakMap,dx=new WeakMap,fx=new WeakMap,px=new WeakMap,mx=new WeakMap,Z=new WeakSet,hx=class{constructor(e={}){x(this,Z),T(this,cx,new Map),T(this,lx,null),T(this,ux,0),T(this,dx,[]),T(this,fx,[]),T(this,px,new Set),T(this,mx,new Map);let{existingSessions:t=[],maxConcurrentConnections:n=3,autoResume:r=!0}=e;this.maxConcurrentConnections=n;for(let e of t)S(cx,this).set(e.id,e);r&&(w(Z,this,yx).call(this),S(lx,this)!==null&&w(Z,this,bx).call(this))}getSessions(){return Array.from(S(cx,this).values())}getCurrentSessionId(){return S(lx,this)}isProcessing(){return S(ux,this)>0}on(e,t){return S(mx,this).has(e)||S(mx,this).set(e,new Set),S(mx,this).get(e).add(t),()=>{S(mx,this).get(e)?.delete(t)}}async startIndexing(e){let t=await E.post(sx.START,e),{data:n}=t;return n.session&&(S(cx,this).set(n.session.id,n.session),C(lx,this,n.session.id),w(Z,this,_x).call(this),n.stop||w(Z,this,bx).call(this)),n.stop&&w(Z,this,vx).call(this,n.stop),t}stopSession(e){w(Z,this,xx).call(this,e),w(Z,this,Sx).call(this,{sessionId:e,action:sx.STOP,params:{sessionId:e},priority:!0})}getSessionOverview(e){w(Z,this,Sx).call(this,{sessionId:e,action:sx.OVERVIEW,params:{sessionId:e},priority:!0})}finishSession(e){w(Z,this,Sx).call(this,{sessionId:e.sessionId,action:sx.FINISH,params:e,priority:!0})}destroy(){S(cx,this).clear(),C(dx,this,[]),C(fx,this,[]),S(mx,this).clear(),C(lx,this,null),C(ux,this,0)}};function gx(e,t){S(mx,this).get(e)?.forEach(e=>e(t))}function _x(e){w(Z,this,gx).call(this,`change`,{sessions:this.getSessions(),currentSessionId:S(lx,this),reviewSessionId:e})}function vx(e){S(cx,this).delete(e),S(lx,this)===e&&C(lx,this,null),w(Z,this,_x).call(this)}function yx(){for(let[e,t]of S(cx,this))if(!t.actionRequired&&!S(px,this).has(e)){C(lx,this,e);return}C(lx,this,null)}function bx(){if(S(lx,this)||w(Z,this,yx).call(this),!S(lx,this))return;let e=S(cx,this).get(S(lx,this));if(!e)return;let t=e.totalEntries-e.processedEntries,n=this.maxConcurrentConnections-S(ux,this),r=Math.min(n,t);for(let t=0;t<r;t++)w(Z,this,Sx).call(this,{sessionId:e.id,action:sx.PROCESS,params:{sessionId:S(lx,this)},priority:!1});e.processIfRootEmpty&&w(Z,this,Sx).call(this,{sessionId:e.id,action:sx.PROCESS,params:{sessionId:S(lx,this)},priority:!1})}function xx(e){S(px,this).add(e),C(dx,this,S(dx,this).filter(t=>t.sessionId!==e))}function Sx(e){e.priority?S(fx,this).push(e):S(dx,this).push(e),w(Z,this,Cx).call(this)}function Cx(){if(!(S(dx,this).length+S(fx,this).length===0||S(ux,this)>=this.maxConcurrentConnections))for(;S(dx,this).length+S(fx,this).length>0&&S(ux,this)<this.maxConcurrentConnections;){var e;C(ux,this,(e=S(ux,this),e++,e));let t=S(fx,this).length>0?S(fx,this).shift():S(dx,this).shift();w(Z,this,wx).call(this,t)}}async function wx(e){try{let t=await E.post(e.action,e.params);w(Z,this,Tx).call(this,t.data)}catch(t){w(Z,this,Ex).call(this,t,e)}finally{var t;C(ux,this,(t=S(ux,this),t--,t)),w(Z,this,Cx).call(this)}}function Tx(e){let t;e.session&&(S(cx,this).set(e.session.id,e.session),w(Z,this,yx).call(this),e.session.actionRequired&&!e.skipDialog?S(px,this).has(e.session.id)||(t=e.session.id):S(px,this).has(e.session.id)||w(Z,this,bx).call(this)),w(Z,this,yx).call(this),e.stop&&(S(cx,this).delete(e.stop),S(lx,this)===e.stop&&C(lx,this,null)),w(Z,this,_x).call(this,t),S(cx,this).size===0&&w(Z,this,gx).call(this,`complete`,{})}function Ex(e,t){w(Z,this,yx).call(this);let n=e?.response?.data?.message||e.message||`An error occurred during indexing.`;w(Z,this,gx).call(this,`error`,{message:n,sessionId:t.sessionId}),w(Z,this,Cx).call(this)}var Dx=function(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n},Ox=function(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)},kx,Ax=class{formatToParts(e){let t=[];for(let n of e)t.push({type:`element`,value:n}),t.push({type:`literal`,value:`, `});return t.slice(0,-1)}},jx=typeof Intl<`u`&&Intl.ListFormat||Ax,Mx=[[`years`,`year`],[`months`,`month`],[`weeks`,`week`],[`days`,`day`],[`hours`,`hour`],[`minutes`,`minute`],[`seconds`,`second`],[`milliseconds`,`millisecond`]],Nx={minimumIntegerDigits:2},Px=class{constructor(e,t={}){kx.set(this,void 0);let n=String(t.style||`short`);n!==`long`&&n!==`short`&&n!==`narrow`&&n!==`digital`&&(n=`short`);let r=n===`digital`?`numeric`:n,i=t.hours||r;r=i===`2-digit`?`numeric`:i;let a=t.minutes||r;r=a===`2-digit`?`numeric`:a;let o=t.seconds||r;r=o===`2-digit`?`numeric`:o;let s=t.milliseconds||r;Dx(this,kx,{locale:e,style:n,years:t.years||n===`digital`?`short`:n,yearsDisplay:t.yearsDisplay===`always`?`always`:`auto`,months:t.months||n===`digital`?`short`:n,monthsDisplay:t.monthsDisplay===`always`?`always`:`auto`,weeks:t.weeks||n===`digital`?`short`:n,weeksDisplay:t.weeksDisplay===`always`?`always`:`auto`,days:t.days||n===`digital`?`short`:n,daysDisplay:t.daysDisplay===`always`?`always`:`auto`,hours:i,hoursDisplay:t.hoursDisplay===`always`||n===`digital`?`always`:`auto`,minutes:a,minutesDisplay:t.minutesDisplay===`always`||n===`digital`?`always`:`auto`,seconds:o,secondsDisplay:t.secondsDisplay===`always`||n===`digital`?`always`:`auto`,milliseconds:s,millisecondsDisplay:t.millisecondsDisplay===`always`?`always`:`auto`},`f`)}resolvedOptions(){return Ox(this,kx,`f`)}formatToParts(e){let t=[],n=Ox(this,kx,`f`),r=n.style,i=n.locale;for(let[a,o]of Mx){let s=e[a];if(n[`${a}Display`]===`auto`&&!s)continue;let c=n[a],l=c===`2-digit`?Nx:c===`numeric`?{}:{style:`unit`,unit:o,unitDisplay:c},u=new Intl.NumberFormat(i,l).format(s);a===`months`&&(c===`narrow`||r===`narrow`&&u.endsWith(`m`))&&(u=u.replace(/(\d+)m$/,`$1mo`)),t.push(u)}return new jx(i,{type:`unit`,style:r===`digital`?`short`:r}).formatToParts(t)}format(e){return this.formatToParts(e).map(e=>e.value).join(``)}};kx=new WeakMap;var Fx=/^[-+]?P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/,Ix=[`year`,`month`,`week`,`day`,`hour`,`minute`,`second`,`millisecond`],Lx=e=>Fx.test(e),Rx=class e{constructor(e=0,t=0,n=0,r=0,i=0,a=0,o=0,s=0){this.years=e,this.months=t,this.weeks=n,this.days=r,this.hours=i,this.minutes=a,this.seconds=o,this.milliseconds=s,this.years||=0,this.sign||=Math.sign(this.years),this.months||=0,this.sign||=Math.sign(this.months),this.weeks||=0,this.sign||=Math.sign(this.weeks),this.days||=0,this.sign||=Math.sign(this.days),this.hours||=0,this.sign||=Math.sign(this.hours),this.minutes||=0,this.sign||=Math.sign(this.minutes),this.seconds||=0,this.sign||=Math.sign(this.seconds),this.milliseconds||=0,this.sign||=Math.sign(this.milliseconds),this.blank=this.sign===0}abs(){return new e(Math.abs(this.years),Math.abs(this.months),Math.abs(this.weeks),Math.abs(this.days),Math.abs(this.hours),Math.abs(this.minutes),Math.abs(this.seconds),Math.abs(this.milliseconds))}static from(t){if(typeof t==`string`){let n=String(t).trim(),r=n.startsWith(`-`)?-1:1,i=n.match(Fx)?.slice(1).map(e=>(Number(e)||0)*r);return i?new e(...i):new e}else if(typeof t==`object`){let{years:n,months:r,weeks:i,days:a,hours:o,minutes:s,seconds:c,milliseconds:l}=t;return new e(n,r,i,a,o,s,c,l)}throw RangeError(`invalid duration`)}static compare(t,n){let r=Date.now(),i=Math.abs(zx(r,e.from(t)).getTime()-r),a=Math.abs(zx(r,e.from(n)).getTime()-r);return i>a?-1:+(i<a)}toLocaleString(e,t){return new Px(e,t).format(this)}};function zx(e,t){let n=new Date(e);return t.sign<0?(n.setUTCSeconds(n.getUTCSeconds()+t.seconds),n.setUTCMinutes(n.getUTCMinutes()+t.minutes),n.setUTCHours(n.getUTCHours()+t.hours),n.setUTCDate(n.getUTCDate()+t.weeks*7+t.days),n.setUTCMonth(n.getUTCMonth()+t.months),n.setUTCFullYear(n.getUTCFullYear()+t.years)):(n.setUTCFullYear(n.getUTCFullYear()+t.years),n.setUTCMonth(n.getUTCMonth()+t.months),n.setUTCDate(n.getUTCDate()+t.weeks*7+t.days),n.setUTCHours(n.getUTCHours()+t.hours),n.setUTCMinutes(n.getUTCMinutes()+t.minutes),n.setUTCSeconds(n.getUTCSeconds()+t.seconds)),n}function Bx(e,t=`second`,n=Date.now()){let r=e.getTime()-n;if(r===0)return new Rx;let i=Math.sign(r),a=Math.abs(r),o=Math.floor(a/1e3),s=Math.floor(o/60),c=Math.floor(s/60),l=Math.floor(c/24),u=Math.floor(l/30),d=Math.floor(u/12),f=Ix.indexOf(t)||Ix.length;return new Rx(f>=0?d*i:0,f>=1?(u-d*12)*i:0,0,f>=3?(l-u*30)*i:0,f>=4?(c-l*24)*i:0,f>=5?(s-c*60)*i:0,f>=6?(o-s*60)*i:0,f>=7?(a-o*1e3)*i:0)}function Vx(e,{relativeTo:t=Date.now()}={}){if(t=new Date(t),e.blank)return e;let n=e.sign,r=Math.abs(e.years),i=Math.abs(e.months),a=Math.abs(e.weeks),o=Math.abs(e.days),s=Math.abs(e.hours),c=Math.abs(e.minutes),l=Math.abs(e.seconds),u=Math.abs(e.milliseconds);u>=900&&(l+=Math.round(u/1e3)),(l||c||s||o||a||i||r)&&(u=0),l>=55&&(c+=Math.round(l/60)),(c||s||o||a||i||r)&&(l=0),c>=55&&(s+=Math.round(c/60)),(s||o||a||i||r)&&(c=0),o&&s>=12&&(o+=Math.round(s/24)),!o&&s>=21&&(o+=Math.round(s/24)),(o||a||i||r)&&(s=0);let d=t.getFullYear(),f=t.getMonth(),p=t.getDate();if(o>=27||r+i+o){let e=new Date(t);e.setDate(1),e.setMonth(f+i*n+1),e.setDate(0);let s=Math.max(0,p-e.getDate()),c=new Date(t);c.setFullYear(d+r*n),c.setDate(p-s),c.setMonth(f+i*n),c.setDate(p-s+o*n);let l=c.getFullYear()-t.getFullYear(),u=c.getMonth()-t.getMonth(),m=Math.abs(Math.round((Number(c)-Number(t))/864e5))+s,h=Math.abs(l*12+u);m<27?(o>=6?(a+=Math.round(o/7),o=0):o=m,i=r=0):h<=11?(i=h,r=0):(i=0,r=l*n),(i||r)&&(o=0)}return r&&(i=0),a>=4&&(i+=Math.round(a/4)),(i||r)&&(a=0),o&&a&&!i&&!r&&(a+=Math.round(o/7),o=0),new Rx(r*n,i*n,a*n,o*n,s*n,c*n,l*n,u*n)}function Hx(e,t){let n=Vx(e,t);if(n.blank)return[0,`second`];for(let e of Ix){if(e===`millisecond`)continue;let t=n[`${e}s`];if(t)return[t,e]}return[0,`second`]}var Q=function(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)},Ux=function(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n},$,Wx,Gx,Kx,qx,Jx,Yx,Xx,Zx,Qx,$x,eS,tS,nS,rS,iS,aS=globalThis.HTMLElement||null,oS=new Rx,sS=new Rx(0,0,0,0,0,1),cS=class extends Event{constructor(e,t,n,r){super(`relative-time-updated`,{bubbles:!0,composed:!0}),this.oldText=e,this.newText=t,this.oldTitle=n,this.newTitle=r}};function lS(e){if(!e.date)return 1/0;if(e.format===`duration`||e.format===`elapsed`){let t=e.precision;if(t===`second`)return 1e3;if(t===`minute`)return 60*1e3}let t=Math.abs(Date.now()-e.date.getTime());return t<60*1e3?1e3:t<3600*1e3?60*1e3:3600*1e3}var uS=new class{constructor(){this.elements=new Set,this.time=1/0,this.timer=-1}observe(e){if(this.elements.has(e))return;this.elements.add(e);let t=e.date;if(t&&t.getTime()){let t=lS(e),n=Date.now()+t;n<this.time&&(clearTimeout(this.timer),this.timer=setTimeout(()=>this.update(),t),this.time=n)}}unobserve(e){this.elements.has(e)&&this.elements.delete(e)}update(){if(clearTimeout(this.timer),!this.elements.size)return;let e=1/0;for(let t of this.elements)e=Math.min(e,lS(t)),t.update();this.time=Math.min(3600*1e3,e),this.timer=setTimeout(()=>this.update(),this.time),this.time+=Date.now()}},dS=class extends aS{constructor(){super(...arguments),$.add(this),Wx.set(this,!1),Gx.set(this,!1),qx.set(this,this.shadowRoot?this.shadowRoot:this.attachShadow?this.attachShadow({mode:`open`}):this),iS.set(this,null)}static define(e=`relative-time`,t=customElements){return t.define(e,this),this}get timeZone(){return this.closest(`[time-zone]`)?.getAttribute(`time-zone`)||this.ownerDocument.documentElement.getAttribute(`time-zone`)||void 0}static get observedAttributes(){return[`second`,`minute`,`hour`,`weekday`,`day`,`month`,`year`,`time-zone-name`,`prefix`,`threshold`,`tense`,`precision`,`format`,`format-style`,`no-title`,`datetime`,`lang`,`title`,`aria-hidden`,`time-zone`]}get onRelativeTimeUpdated(){return Q(this,iS,`f`)}set onRelativeTimeUpdated(e){Q(this,iS,`f`)&&this.removeEventListener(`relative-time-updated`,Q(this,iS,`f`)),Ux(this,iS,typeof e==`object`||typeof e==`function`?e:null,`f`),typeof e==`function`&&this.addEventListener(`relative-time-updated`,e)}get second(){let e=this.getAttribute(`second`);if(e===`numeric`||e===`2-digit`)return e}set second(e){this.setAttribute(`second`,e||``)}get minute(){let e=this.getAttribute(`minute`);if(e===`numeric`||e===`2-digit`)return e}set minute(e){this.setAttribute(`minute`,e||``)}get hour(){let e=this.getAttribute(`hour`);if(e===`numeric`||e===`2-digit`)return e}set hour(e){this.setAttribute(`hour`,e||``)}get weekday(){let e=this.getAttribute(`weekday`);if(e===`long`||e===`short`||e===`narrow`)return e;if(this.format===`datetime`&&e!==``)return this.formatStyle}set weekday(e){this.setAttribute(`weekday`,e||``)}get day(){let e=this.getAttribute(`day`)??`numeric`;if(e===`numeric`||e===`2-digit`)return e}set day(e){this.setAttribute(`day`,e||``)}get month(){let e=this.format,t=this.getAttribute(`month`);if(t!==``&&(t??=e===`datetime`?this.formatStyle:`short`,t===`numeric`||t===`2-digit`||t===`short`||t===`long`||t===`narrow`))return t}set month(e){this.setAttribute(`month`,e||``)}get year(){let e=this.getAttribute(`year`);if(e===`numeric`||e===`2-digit`)return e;if(!this.hasAttribute(`year`)&&new Date().getUTCFullYear()!==this.date?.getUTCFullYear())return`numeric`}set year(e){this.setAttribute(`year`,e||``)}get timeZoneName(){let e=this.getAttribute(`time-zone-name`);if(e===`long`||e===`short`||e===`shortOffset`||e===`longOffset`||e===`shortGeneric`||e===`longGeneric`)return e}set timeZoneName(e){this.setAttribute(`time-zone-name`,e||``)}get prefix(){return this.getAttribute(`prefix`)??(this.format===`datetime`?``:`on`)}set prefix(e){this.setAttribute(`prefix`,e)}get threshold(){let e=this.getAttribute(`threshold`);return e&&Lx(e)?e:`P30D`}set threshold(e){this.setAttribute(`threshold`,e)}get tense(){let e=this.getAttribute(`tense`);return e===`past`?`past`:e===`future`?`future`:`auto`}set tense(e){this.setAttribute(`tense`,e)}get precision(){let e=this.getAttribute(`precision`);return Ix.includes(e)?e:this.format===`micro`?`minute`:`second`}set precision(e){this.setAttribute(`precision`,e)}get format(){let e=this.getAttribute(`format`);return e===`datetime`?`datetime`:e===`relative`?`relative`:e===`duration`?`duration`:e===`micro`?`micro`:e===`elapsed`?`elapsed`:`auto`}set format(e){this.setAttribute(`format`,e)}get formatStyle(){let e=this.getAttribute(`format-style`);if(e===`long`)return`long`;if(e===`short`)return`short`;if(e===`narrow`)return`narrow`;let t=this.format;return t===`elapsed`||t===`micro`?`narrow`:t===`datetime`?`short`:`long`}set formatStyle(e){this.setAttribute(`format-style`,e)}get noTitle(){return this.hasAttribute(`no-title`)}set noTitle(e){this.toggleAttribute(`no-title`,e)}get datetime(){return this.getAttribute(`datetime`)||``}set datetime(e){this.setAttribute(`datetime`,e)}get date(){let e=Date.parse(this.datetime);return Number.isNaN(e)?null:new Date(e)}set date(e){this.datetime=e?.toISOString()||``}connectedCallback(){this.update()}disconnectedCallback(){uS.unobserve(this)}attributeChangedCallback(e,t,n){t!==n&&(e===`title`&&Ux(this,Wx,n!==null&&(this.date&&Q(this,$,`m`,Jx).call(this,this.date))!==n,`f`),!Q(this,Gx,`f`)&&!(e===`title`&&Q(this,Wx,`f`))&&Ux(this,Gx,(async()=>{await Promise.resolve(),this.update(),Ux(this,Gx,!1,`f`)})(),`f`))}update(){let e=Q(this,qx,`f`).textContent||this.textContent||``,t=this.getAttribute(`title`)||``,n=t,r=this.date;if(typeof Intl>`u`||!Intl.DateTimeFormat||!r){Q(this,qx,`f`).textContent=e;return}let i=Date.now();Q(this,Wx,`f`)||(n=Q(this,$,`m`,Jx).call(this,r)||``,n&&!this.noTitle&&this.setAttribute(`title`,n));let a=Bx(r,this.precision,i),o=Q(this,$,`m`,Yx).call(this,a),s=e,c=Q(this,$,`m`,rS).call(this,o);s=c?Q(this,$,`m`,tS).call(this,r):o===`duration`?Q(this,$,`m`,Xx).call(this,a):o===`relative`?Q(this,$,`m`,Zx).call(this,a):Q(this,$,`m`,Qx).call(this,r),s?Q(this,$,`m`,nS).call(this,s):this.shadowRoot===Q(this,qx,`f`)&&this.textContent&&Q(this,$,`m`,nS).call(this,this.textContent),(s!==e||n!==t)&&this.dispatchEvent(new cS(e,s,t,n)),o===`relative`||o===`duration`||c&&(Q(this,$,`m`,$x).call(this,r)||Q(this,$,`m`,eS).call(this,r))?uS.observe(this):uS.unobserve(this)}};Wx=new WeakMap,Gx=new WeakMap,qx=new WeakMap,iS=new WeakMap,$=new WeakSet,Kx=function(){let e=this.closest(`[lang]`)?.getAttribute(`lang`)||this.ownerDocument.documentElement.getAttribute(`lang`);try{return new Intl.Locale(e??``).toString()}catch{return`default`}},Jx=function(e){return new Intl.DateTimeFormat(Q(this,$,`a`,Kx),{day:`numeric`,month:`short`,year:`numeric`,hour:`numeric`,minute:`2-digit`,timeZoneName:`short`,timeZone:this.timeZone}).format(e)},Yx=function(e){let t=this.format;if(t===`datetime`)return`datetime`;if(t===`duration`||t===`elapsed`||t===`micro`)return`duration`;if((t===`auto`||t===`relative`)&&typeof Intl<`u`&&Intl.RelativeTimeFormat){let t=this.tense;if(t===`past`||t===`future`||Rx.compare(e,this.threshold)===1)return`relative`}return`datetime`},Xx=function(e){let t=Q(this,$,`a`,Kx),n=this.format,r=this.formatStyle,i=this.tense,a=oS;n===`micro`?(e=Vx(e),a=sS,e.months===0&&(this.tense===`past`&&e.sign!==-1||this.tense===`future`&&e.sign!==1)&&(e=sS)):(i===`past`&&e.sign!==-1||i===`future`&&e.sign!==1)&&(e=a);let o=`${this.precision}sDisplay`;return e.blank?a.toLocaleString(t,{style:r,[o]:`always`}):e.abs().toLocaleString(t,{style:r})},Zx=function(e){let t=new Intl.RelativeTimeFormat(Q(this,$,`a`,Kx),{numeric:`auto`,style:this.formatStyle}),n=this.tense;n===`future`&&e.sign!==1&&(e=oS),n===`past`&&e.sign!==-1&&(e=oS);let[r,i]=Hx(e);return i===`second`&&r<10?t.format(0,this.precision===`millisecond`?`second`:this.precision):t.format(r,i)},Qx=function(e){let t=new Intl.DateTimeFormat(Q(this,$,`a`,Kx),{second:this.second,minute:this.minute,hour:this.hour,weekday:this.weekday,day:this.day,month:this.month,year:this.year,timeZoneName:this.timeZoneName,timeZone:this.timeZone});return`${this.prefix} ${t.format(e)}`.trim()},$x=function(e){let t=new Date,n=new Intl.DateTimeFormat(Q(this,$,`a`,Kx),{timeZone:this.timeZone,year:`numeric`,month:`2-digit`,day:`2-digit`});return n.format(t)===n.format(e)},eS=function(e){let t=new Date,n=new Intl.DateTimeFormat(Q(this,$,`a`,Kx),{timeZone:this.timeZone,year:`numeric`});return n.format(t)===n.format(e)},tS=function(e){let t={hour:`numeric`,minute:`2-digit`,timeZoneName:`short`,timeZone:this.timeZone};if(Q(this,$,`m`,$x).call(this,e)){let n=new Intl.RelativeTimeFormat(Q(this,$,`a`,Kx),{numeric:`auto`}).format(0,`day`);n=n.charAt(0).toLocaleUpperCase(Q(this,$,`a`,Kx))+n.slice(1);let r=new Intl.DateTimeFormat(Q(this,$,`a`,Kx),t).format(e);return`${n} ${r}`}let n=Object.assign(Object.assign({},t),{day:`numeric`,month:`short`});return Q(this,$,`m`,eS).call(this,e)?new Intl.DateTimeFormat(Q(this,$,`a`,Kx),n).format(e):new Intl.DateTimeFormat(Q(this,$,`a`,Kx),Object.assign(Object.assign({},n),{year:`numeric`})).format(e)},nS=function(e){if(this.hasAttribute(`aria-hidden`)&&this.getAttribute(`aria-hidden`)===`true`){let t=document.createElement(`span`);t.setAttribute(`aria-hidden`,`true`),t.textContent=e,Q(this,qx,`f`).replaceChildren(t)}else Q(this,qx,`f`).textContent=e},rS=function(e){return e===`duration`?!1:this.ownerDocument.documentElement.getAttribute(`data-prefers-absolute-time`)===`true`||this.ownerDocument.body?.getAttribute(`data-prefers-absolute-time`)===`true`};var fS=typeof globalThis<`u`?globalThis:window;try{fS.RelativeTimeElement=dS.define()}catch(e){if(!(fS.DOMException&&e instanceof DOMException&&e.name===`NotSupportedError`)&&!(e instanceof ReferenceError))throw e}Object.values({Enabled:`enabled`,Disabled:`disabled`,Live:`live`,Pending:`pending`,Expired:`expired`,Active:`active`,Suspended:`suspended`,Inactive:`inactive`});var pS={on:`teal`,live:`teal`,active:`teal`,enabled:`teal`,turquoise:`teal`,off:`red`,suspended:`red`,expired:`red`,warning:`amber`,pending:`sky`,grey:`gray`};function mS(e){return e?pS[e]||(Oo.includes(e)?e:`gray`):`gray`}export{ss as A,lt as B,Pc as C,Oc as D,kc as E,hi as F,Pe as G,Ge as H,cr as I,le as K,nr as L,Do as M,qa as N,gc as O,L as P,A as R,Nc as S,wc as T,He as U,rt as V,Ue as W,Wd as _,ox as a,Ic as b,Xb as c,l_ as d,og as f,zf as g,Ep as h,nx as i,Oo as j,Tc as k,Hb as l,Np as m,hx as n,rx as o,tg as p,ax as r,$b as s,mS as t,Xv as u,ad as v,Mc as w,Fc as x,zc as y,ft as z};